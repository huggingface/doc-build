import{S as Jg,i as Yg,s as Zg,e as a,k as h,w,t as n,M as e_,c as r,d as t,m,a as i,x as T,h as s,b as k,G as e,g as _,y as $,q as M,o as y,B as P,v as t_,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function o_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetModel, MPNetConfig

# Initializing a MPNet mpnet-base style configuration
configuration = MPNetConfig()

# Initializing a model from the mpnet-base style configuration
model = MPNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=n("Examples:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Examples:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function n_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function s_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetModel
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function a_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function r_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function i_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function l_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function d_(z){let l,g,c,u,b;return u=new We({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function c_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function p_(z){let l,g,c,u,b;return u=new We({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function h_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained(
    "microsoft/mpnet-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function m_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function u_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function f_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function g_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function __(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function k_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function v_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function b_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function w_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function T_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function $_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function M_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function y_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function P_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function N_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function F_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function E_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function z_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function q_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function C_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function x_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function j_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function O_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function A_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function L_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function D_(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function I_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),b=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=h(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),b=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);be=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),he=m(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=m(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var je=i(D);ve=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,b),_(f,d,F),_(f,p,F),e(p,q),e(q,be),e(p,he),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,me),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,ve),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function S_(z){let l,g,c,u,b;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,b)},d(d){d&&t(l)}}}function W_(z){let l,g,c,u,b;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),b=!0},p:Se,i(d){b||(M(u.$$.fragment,d),b=!0)},o(d){y(u.$$.fragment,d),b=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function Q_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function H_(z){let l,g,c,u,b,d,p,q,be,he,L,ae,te,N,we,U,Te,me,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,ve,W,Ce,Z,O,xe,A,se,re,f,F,He,ne,Ke,Qe,E,Oe,Re,pe,Ue,Le,I,G,De,Be,J,Ae,Ve,je,Xe,Y,Ge,ka,dd,cd,va,pd,hd,md,yo,Ki,Vt,Po,dr,On,ud,cr,fd,Ri,Ze,An,gd,Ln,_d,ba,kd,vd,bd,Ot,Dn,wd,pr,Td,$d,In,wa,Md,hr,yd,Pd,Ta,Nd,mr,Fd,Ed,No,Sn,zd,Wn,qd,ur,Cd,xd,jd,Fo,Qn,Od,fr,Ad,Ld,$a,Hn,Ui,Xt,Eo,gr,Kn,Dd,_r,Id,Bi,wt,Rn,Sd,Un,Wd,kr,Qd,Hd,Kd,Bn,Rd,Ma,Ud,Bd,Vd,zo,Vn,Xd,vr,Gd,Vi,Gt,qo,br,Xn,Jd,wr,Yd,Xi,it,Gn,Zd,Tr,ec,tc,Jn,oc,ya,nc,sc,ac,Yn,rc,Zn,ic,lc,dc,Tt,es,cc,Jt,pc,Pa,hc,mc,$r,uc,fc,gc,Co,_c,xo,Gi,Yt,jo,Mr,ts,kc,yr,vc,Ji,Zt,os,bc,mt,ns,wc,eo,Tc,Na,$c,Mc,Pr,yc,Pc,Nc,Oo,Fc,Ao,Ec,Lo,Yi,to,Do,Nr,ss,zc,Fr,qc,Zi,lt,as,Cc,Er,xc,jc,rs,Oc,Fa,Ac,Lc,Dc,is,Ic,ls,Sc,Wc,Qc,Je,ds,Hc,oo,Kc,Ea,Rc,Uc,zr,Bc,Vc,Xc,Io,Gc,So,Jc,Wo,Yc,Qo,Zc,Ho,el,no,Ko,qr,cs,ep,Cr,tp,tl,dt,ps,op,xr,np,sp,hs,ap,za,rp,ip,lp,ms,dp,us,cp,pp,hp,$t,fs,mp,so,up,qa,fp,gp,jr,_p,kp,vp,Ro,bp,Uo,ol,ao,Bo,Or,gs,wp,Ar,Tp,nl,ct,_s,$p,Lr,Mp,yp,ks,Pp,Ca,Np,Fp,Ep,vs,zp,bs,qp,Cp,xp,ut,ws,jp,ro,Op,xa,Ap,Lp,Dr,Dp,Ip,Sp,Vo,Wp,Xo,Qp,Go,sl,io,Jo,Ir,Ts,Hp,Sr,Kp,al,pt,$s,Rp,lo,Up,Wr,Bp,Vp,Qr,Xp,Gp,Jp,Ms,Yp,ja,Zp,eh,th,ys,oh,Ps,nh,sh,ah,ft,Ns,rh,co,ih,Oa,lh,dh,Hr,ch,ph,hh,Yo,mh,Zo,uh,en,rl,po,tn,Kr,Fs,fh,Rr,gh,il,et,Es,_h,Ur,kh,vh,zs,bh,Aa,wh,Th,$h,qs,Mh,Cs,yh,Ph,Nh,on,Fh,Mt,xs,Eh,ho,zh,La,qh,Ch,Br,xh,jh,Oh,nn,Ah,sn,ll,mo,an,Vr,js,Lh,Xr,Dh,dl,tt,Os,Ih,As,Sh,Gr,Wh,Qh,Hh,Ls,Kh,Da,Rh,Uh,Bh,Ds,Vh,Is,Xh,Gh,Jh,rn,Yh,gt,Ss,Zh,uo,em,Ia,tm,om,Jr,nm,sm,am,ln,rm,dn,im,cn,cl,fo,pn,Yr,Ws,lm,Zr,dm,pl,ot,Qs,cm,ei,pm,hm,Hs,mm,Sa,um,fm,gm,Ks,_m,Rs,km,vm,bm,hn,wm,_t,Us,Tm,go,$m,Wa,Mm,ym,ti,Pm,Nm,Fm,mn,Em,un,zm,fn,hl,_o,gn,oi,Bs,qm,ni,Cm,ml,nt,Vs,xm,si,jm,Om,Xs,Am,Qa,Lm,Dm,Im,Gs,Sm,Js,Wm,Qm,Hm,_n,Km,yt,Ys,Rm,ko,Um,Ha,Bm,Vm,ai,Xm,Gm,Jm,kn,Ym,vn,ul,vo,bn,ri,Zs,Zm,ii,eu,fl,st,ea,tu,li,ou,nu,ta,su,Ka,au,ru,iu,oa,lu,na,du,cu,pu,wn,hu,kt,sa,mu,bo,uu,Ra,fu,gu,di,_u,ku,vu,Tn,bu,$n,wu,Mn,gl,wo,yn,ci,aa,Tu,pi,$u,_l,at,ra,Mu,To,yu,hi,Pu,Nu,mi,Fu,Eu,zu,ia,qu,Ua,Cu,xu,ju,la,Ou,da,Au,Lu,Du,Pn,Iu,vt,ca,Su,$o,Wu,Ba,Qu,Hu,ui,Ku,Ru,Uu,Nn,Bu,Fn,Vu,En,kl;return d=new rt({}),N=new rt({}),F=new rt({}),Oe=new ie({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MPNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MPNetConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MPNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MPNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MPNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MPNetConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MPNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MPNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MPNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MPNetConfig.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),yo=new Ie({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:z}}}),On=new rt({}),An=new ie({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MPNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MPNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Dn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet.py#L231",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hn=new ie({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),Kn=new rt({}),Rn=new ie({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),Vn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new rt({}),Gn=new ie({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L483"}}),es=new ie({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L512",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Ye({props:{$$slots:{default:[n_]},$$scope:{ctx:z}}}),xo=new Ie({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[s_]},$$scope:{ctx:z}}}),ts=new rt({}),os=new ie({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L576"}}),ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L595",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Ye({props:{$$slots:{default:[a_]},$$scope:{ctx:z}}}),Ao=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[r_]},$$scope:{ctx:z}}}),Lo=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:z}}}),ss=new rt({}),as=new ie({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L685"}}),ds=new ie({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ye({props:{$$slots:{default:[l_]},$$scope:{ctx:z}}}),So=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:z}}}),Wo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:z}}}),Qo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:z}}}),Ho=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[h_]},$$scope:{ctx:z}}}),cs=new rt({}),ps=new ie({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),fs=new ie({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Ye({props:{$$slots:{default:[m_]},$$scope:{ctx:z}}}),Uo=new Ie({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[u_]},$$scope:{ctx:z}}}),gs=new rt({}),_s=new ie({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),ws=new ie({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L886",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ye({props:{$$slots:{default:[f_]},$$scope:{ctx:z}}}),Xo=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:z}}}),Go=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:z}}}),Ts=new rt({}),$s=new ie({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L971"}}),Ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_mpnet.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Ye({props:{$$slots:{default:[k_]},$$scope:{ctx:z}}}),Zo=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[v_]},$$scope:{ctx:z}}}),en=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[b_]},$$scope:{ctx:z}}}),Fs=new rt({}),Es=new ie({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L669"}}),on=new Ye({props:{$$slots:{default:[w_]},$$scope:{ctx:z}}}),xs=new ie({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L674",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Ye({props:{$$slots:{default:[T_]},$$scope:{ctx:z}}}),sn=new Ie({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[$_]},$$scope:{ctx:z}}}),js=new rt({}),Os=new ie({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L772"}}),rn=new Ye({props:{$$slots:{default:[M_]},$$scope:{ctx:z}}}),Ss=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Ye({props:{$$slots:{default:[y_]},$$scope:{ctx:z}}}),dn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[P_]},$$scope:{ctx:z}}}),cn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[N_]},$$scope:{ctx:z}}}),Ws=new rt({}),Qs=new ie({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L883"}}),hn=new Ye({props:{$$slots:{default:[F_]},$$scope:{ctx:z}}}),Us=new ie({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Ye({props:{$$slots:{default:[E_]},$$scope:{ctx:z}}}),un=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[z_]},$$scope:{ctx:z}}}),fn=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:z}}}),Bs=new rt({}),Vs=new ie({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L964"}}),_n=new Ye({props:{$$slots:{default:[C_]},$$scope:{ctx:z}}}),Ys=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L984",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new Ye({props:{$$slots:{default:[x_]},$$scope:{ctx:z}}}),vn=new Ie({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[j_]},$$scope:{ctx:z}}}),Zs=new rt({}),ea=new ie({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1081"}}),wn=new Ye({props:{$$slots:{default:[O_]},$$scope:{ctx:z}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1095",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ye({props:{$$slots:{default:[A_]},$$scope:{ctx:z}}}),$n=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[L_]},$$scope:{ctx:z}}}),Mn=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[D_]},$$scope:{ctx:z}}}),aa=new rt({}),ra=new ie({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1164"}}),Pn=new Ye({props:{$$slots:{default:[I_]},$$scope:{ctx:z}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new Ye({props:{$$slots:{default:[S_]},$$scope:{ctx:z}}}),Fn=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:z}}}),En=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[Q_]},$$scope:{ctx:z}}}),{c(){l=a("meta"),g=h(),c=a("h1"),u=a("a"),b=a("span"),w(d.$$.fragment),p=h(),q=a("span"),be=n("MPNet"),he=h(),L=a("h2"),ae=a("a"),te=a("span"),w(N.$$.fragment),we=h(),U=a("span"),Te=n("Overview"),me=h(),S=a("p"),$e=n("The MPNet model was proposed in "),le=a("a"),B=n("MPNet: Masked and Permuted Pre-training for Language Understanding"),Me=n(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ue=h(),Q=a("p"),ye=n(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),fe=h(),H=a("p"),Pe=n("The abstract from the paper is the following:"),ge=h(),ee=a("p"),C=a("em"),j=n(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),_e=h(),K=a("p"),Ne=n("Tips:"),ke=h(),R=a("ul"),oe=a("li"),Fe=n("MPNet doesn\u2019t have "),x=a("code"),Ee=n("token_type_ids"),V=n(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=a("code"),ze=n("tokenizer.sep_token"),X=n(" (or "),ce=a("code"),qe=n("[sep]"),D=n(")."),ve=h(),W=a("p"),Ce=n("The original code can be found "),Z=a("a"),O=n("here"),xe=n("."),A=h(),se=a("h2"),re=a("a"),f=a("span"),w(F.$$.fragment),He=h(),ne=a("span"),Ke=n("MPNetConfig"),Qe=h(),E=a("div"),w(Oe.$$.fragment),Re=h(),pe=a("p"),Ue=n("This is the configuration class to store the configuration of a "),Le=a("a"),I=n("MPNetModel"),G=n(" or a "),De=a("a"),Be=n("TFMPNetModel"),J=n(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ae=a("a"),Ve=n("microsoft/mpnet-base"),je=n(" architecture."),Xe=h(),Y=a("p"),Ge=n("Configuration objects inherit from "),ka=a("a"),dd=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),va=a("a"),pd=n("PretrainedConfig"),hd=n(" for more information."),md=h(),w(yo.$$.fragment),Ki=h(),Vt=a("h2"),Po=a("a"),dr=a("span"),w(On.$$.fragment),ud=h(),cr=a("span"),fd=n("MPNetTokenizer"),Ri=h(),Ze=a("div"),w(An.$$.fragment),gd=h(),Ln=a("p"),_d=n("This tokenizer inherits from "),ba=a("a"),kd=n("BertTokenizer"),vd=n(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),bd=h(),Ot=a("div"),w(Dn.$$.fragment),wd=h(),pr=a("p"),Td=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),$d=h(),In=a("ul"),wa=a("li"),Md=n("single sequence: "),hr=a("code"),yd=n("<s> X </s>"),Pd=h(),Ta=a("li"),Nd=n("pair of sequences: "),mr=a("code"),Fd=n("<s> A </s></s> B </s>"),Ed=h(),No=a("div"),w(Sn.$$.fragment),zd=h(),Wn=a("p"),qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=a("code"),Cd=n("prepare_for_model"),xd=n(" methods."),jd=h(),Fo=a("div"),w(Qn.$$.fragment),Od=h(),fr=a("p"),Ad=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ld=h(),$a=a("div"),w(Hn.$$.fragment),Ui=h(),Xt=a("h2"),Eo=a("a"),gr=a("span"),w(Kn.$$.fragment),Dd=h(),_r=a("span"),Id=n("MPNetTokenizerFast"),Bi=h(),wt=a("div"),w(Rn.$$.fragment),Sd=h(),Un=a("p"),Wd=n("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=a("em"),Qd=n("tokenizers"),Hd=n(" library). Based on WordPiece."),Kd=h(),Bn=a("p"),Rd=n("This tokenizer inherits from "),Ma=a("a"),Ud=n("PreTrainedTokenizerFast"),Bd=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=h(),zo=a("div"),w(Vn.$$.fragment),Xd=h(),vr=a("p"),Gd=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Vi=h(),Gt=a("h2"),qo=a("a"),br=a("span"),w(Xn.$$.fragment),Jd=h(),wr=a("span"),Yd=n("MPNetModel"),Xi=h(),it=a("div"),w(Gn.$$.fragment),Zd=h(),Tr=a("p"),ec=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=h(),Jn=a("p"),oc=n("This model inherits from "),ya=a("a"),nc=n("PreTrainedModel"),sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=h(),Yn=a("p"),rc=n("This model is also a PyTorch "),Zn=a("a"),ic=n("torch.nn.Module"),lc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=h(),Tt=a("div"),w(es.$$.fragment),cc=h(),Jt=a("p"),pc=n("The "),Pa=a("a"),hc=n("MPNetModel"),mc=n(" forward method, overrides the "),$r=a("code"),uc=n("__call__"),fc=n(" special method."),gc=h(),w(Co.$$.fragment),_c=h(),w(xo.$$.fragment),Gi=h(),Yt=a("h2"),jo=a("a"),Mr=a("span"),w(ts.$$.fragment),kc=h(),yr=a("span"),vc=n("MPNetForMaskedLM"),Ji=h(),Zt=a("div"),w(os.$$.fragment),bc=h(),mt=a("div"),w(ns.$$.fragment),wc=h(),eo=a("p"),Tc=n("The "),Na=a("a"),$c=n("MPNetForMaskedLM"),Mc=n(" forward method, overrides the "),Pr=a("code"),yc=n("__call__"),Pc=n(" special method."),Nc=h(),w(Oo.$$.fragment),Fc=h(),w(Ao.$$.fragment),Ec=h(),w(Lo.$$.fragment),Yi=h(),to=a("h2"),Do=a("a"),Nr=a("span"),w(ss.$$.fragment),zc=h(),Fr=a("span"),qc=n("MPNetForSequenceClassification"),Zi=h(),lt=a("div"),w(as.$$.fragment),Cc=h(),Er=a("p"),xc=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),jc=h(),rs=a("p"),Oc=n("This model inherits from "),Fa=a("a"),Ac=n("PreTrainedModel"),Lc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=h(),is=a("p"),Ic=n("This model is also a PyTorch "),ls=a("a"),Sc=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc=h(),Je=a("div"),w(ds.$$.fragment),Hc=h(),oo=a("p"),Kc=n("The "),Ea=a("a"),Rc=n("MPNetForSequenceClassification"),Uc=n(" forward method, overrides the "),zr=a("code"),Bc=n("__call__"),Vc=n(" special method."),Xc=h(),w(Io.$$.fragment),Gc=h(),w(So.$$.fragment),Jc=h(),w(Wo.$$.fragment),Yc=h(),w(Qo.$$.fragment),Zc=h(),w(Ho.$$.fragment),el=h(),no=a("h2"),Ko=a("a"),qr=a("span"),w(cs.$$.fragment),ep=h(),Cr=a("span"),tp=n("MPNetForMultipleChoice"),tl=h(),dt=a("div"),w(ps.$$.fragment),op=h(),xr=a("p"),np=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=h(),hs=a("p"),ap=n("This model inherits from "),za=a("a"),rp=n("PreTrainedModel"),ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=h(),ms=a("p"),dp=n("This model is also a PyTorch "),us=a("a"),cp=n("torch.nn.Module"),pp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hp=h(),$t=a("div"),w(fs.$$.fragment),mp=h(),so=a("p"),up=n("The "),qa=a("a"),fp=n("MPNetForMultipleChoice"),gp=n(" forward method, overrides the "),jr=a("code"),_p=n("__call__"),kp=n(" special method."),vp=h(),w(Ro.$$.fragment),bp=h(),w(Uo.$$.fragment),ol=h(),ao=a("h2"),Bo=a("a"),Or=a("span"),w(gs.$$.fragment),wp=h(),Ar=a("span"),Tp=n("MPNetForTokenClassification"),nl=h(),ct=a("div"),w(_s.$$.fragment),$p=h(),Lr=a("p"),Mp=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yp=h(),ks=a("p"),Pp=n("This model inherits from "),Ca=a("a"),Np=n("PreTrainedModel"),Fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep=h(),vs=a("p"),zp=n("This model is also a PyTorch "),bs=a("a"),qp=n("torch.nn.Module"),Cp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp=h(),ut=a("div"),w(ws.$$.fragment),jp=h(),ro=a("p"),Op=n("The "),xa=a("a"),Ap=n("MPNetForTokenClassification"),Lp=n(" forward method, overrides the "),Dr=a("code"),Dp=n("__call__"),Ip=n(" special method."),Sp=h(),w(Vo.$$.fragment),Wp=h(),w(Xo.$$.fragment),Qp=h(),w(Go.$$.fragment),sl=h(),io=a("h2"),Jo=a("a"),Ir=a("span"),w(Ts.$$.fragment),Hp=h(),Sr=a("span"),Kp=n("MPNetForQuestionAnswering"),al=h(),pt=a("div"),w($s.$$.fragment),Rp=h(),lo=a("p"),Up=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=a("code"),Bp=n("span start logits"),Vp=n(" and "),Qr=a("code"),Xp=n("span end logits"),Gp=n(")."),Jp=h(),Ms=a("p"),Yp=n("This model inherits from "),ja=a("a"),Zp=n("PreTrainedModel"),eh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th=h(),ys=a("p"),oh=n("This model is also a PyTorch "),Ps=a("a"),nh=n("torch.nn.Module"),sh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah=h(),ft=a("div"),w(Ns.$$.fragment),rh=h(),co=a("p"),ih=n("The "),Oa=a("a"),lh=n("MPNetForQuestionAnswering"),dh=n(" forward method, overrides the "),Hr=a("code"),ch=n("__call__"),ph=n(" special method."),hh=h(),w(Yo.$$.fragment),mh=h(),w(Zo.$$.fragment),uh=h(),w(en.$$.fragment),rl=h(),po=a("h2"),tn=a("a"),Kr=a("span"),w(Fs.$$.fragment),fh=h(),Rr=a("span"),gh=n("TFMPNetModel"),il=h(),et=a("div"),w(Es.$$.fragment),_h=h(),Ur=a("p"),kh=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),vh=h(),zs=a("p"),bh=n("This model inherits from "),Aa=a("a"),wh=n("TFPreTrainedModel"),Th=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=h(),qs=a("p"),Mh=n("This model is also a "),Cs=a("a"),yh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh=h(),w(on.$$.fragment),Fh=h(),Mt=a("div"),w(xs.$$.fragment),Eh=h(),ho=a("p"),zh=n("The "),La=a("a"),qh=n("TFMPNetModel"),Ch=n(" forward method, overrides the "),Br=a("code"),xh=n("__call__"),jh=n(" special method."),Oh=h(),w(nn.$$.fragment),Ah=h(),w(sn.$$.fragment),ll=h(),mo=a("h2"),an=a("a"),Vr=a("span"),w(js.$$.fragment),Lh=h(),Xr=a("span"),Dh=n("TFMPNetForMaskedLM"),dl=h(),tt=a("div"),w(Os.$$.fragment),Ih=h(),As=a("p"),Sh=n("MPNet Model with a "),Gr=a("code"),Wh=n("language modeling"),Qh=n(" head on top."),Hh=h(),Ls=a("p"),Kh=n("This model inherits from "),Da=a("a"),Rh=n("TFPreTrainedModel"),Uh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bh=h(),Ds=a("p"),Vh=n("This model is also a "),Is=a("a"),Xh=n("tf.keras.Model"),Gh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh=h(),w(rn.$$.fragment),Yh=h(),gt=a("div"),w(Ss.$$.fragment),Zh=h(),uo=a("p"),em=n("The "),Ia=a("a"),tm=n("TFMPNetForMaskedLM"),om=n(" forward method, overrides the "),Jr=a("code"),nm=n("__call__"),sm=n(" special method."),am=h(),w(ln.$$.fragment),rm=h(),w(dn.$$.fragment),im=h(),w(cn.$$.fragment),cl=h(),fo=a("h2"),pn=a("a"),Yr=a("span"),w(Ws.$$.fragment),lm=h(),Zr=a("span"),dm=n("TFMPNetForSequenceClassification"),pl=h(),ot=a("div"),w(Qs.$$.fragment),cm=h(),ei=a("p"),pm=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),hm=h(),Hs=a("p"),mm=n("This model inherits from "),Sa=a("a"),um=n("TFPreTrainedModel"),fm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gm=h(),Ks=a("p"),_m=n("This model is also a "),Rs=a("a"),km=n("tf.keras.Model"),vm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bm=h(),w(hn.$$.fragment),wm=h(),_t=a("div"),w(Us.$$.fragment),Tm=h(),go=a("p"),$m=n("The "),Wa=a("a"),Mm=n("TFMPNetForSequenceClassification"),ym=n(" forward method, overrides the "),ti=a("code"),Pm=n("__call__"),Nm=n(" special method."),Fm=h(),w(mn.$$.fragment),Em=h(),w(un.$$.fragment),zm=h(),w(fn.$$.fragment),hl=h(),_o=a("h2"),gn=a("a"),oi=a("span"),w(Bs.$$.fragment),qm=h(),ni=a("span"),Cm=n("TFMPNetForMultipleChoice"),ml=h(),nt=a("div"),w(Vs.$$.fragment),xm=h(),si=a("p"),jm=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Om=h(),Xs=a("p"),Am=n("This model inherits from "),Qa=a("a"),Lm=n("TFPreTrainedModel"),Dm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Im=h(),Gs=a("p"),Sm=n("This model is also a "),Js=a("a"),Wm=n("tf.keras.Model"),Qm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hm=h(),w(_n.$$.fragment),Km=h(),yt=a("div"),w(Ys.$$.fragment),Rm=h(),ko=a("p"),Um=n("The "),Ha=a("a"),Bm=n("TFMPNetForMultipleChoice"),Vm=n(" forward method, overrides the "),ai=a("code"),Xm=n("__call__"),Gm=n(" special method."),Jm=h(),w(kn.$$.fragment),Ym=h(),w(vn.$$.fragment),ul=h(),vo=a("h2"),bn=a("a"),ri=a("span"),w(Zs.$$.fragment),Zm=h(),ii=a("span"),eu=n("TFMPNetForTokenClassification"),fl=h(),st=a("div"),w(ea.$$.fragment),tu=h(),li=a("p"),ou=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nu=h(),ta=a("p"),su=n("This model inherits from "),Ka=a("a"),au=n("TFPreTrainedModel"),ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu=h(),oa=a("p"),lu=n("This model is also a "),na=a("a"),du=n("tf.keras.Model"),cu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pu=h(),w(wn.$$.fragment),hu=h(),kt=a("div"),w(sa.$$.fragment),mu=h(),bo=a("p"),uu=n("The "),Ra=a("a"),fu=n("TFMPNetForTokenClassification"),gu=n(" forward method, overrides the "),di=a("code"),_u=n("__call__"),ku=n(" special method."),vu=h(),w(Tn.$$.fragment),bu=h(),w($n.$$.fragment),wu=h(),w(Mn.$$.fragment),gl=h(),wo=a("h2"),yn=a("a"),ci=a("span"),w(aa.$$.fragment),Tu=h(),pi=a("span"),$u=n("TFMPNetForQuestionAnswering"),_l=h(),at=a("div"),w(ra.$$.fragment),Mu=h(),To=a("p"),yu=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hi=a("code"),Pu=n("span start logits"),Nu=n(" and "),mi=a("code"),Fu=n("span end logits"),Eu=n(")."),zu=h(),ia=a("p"),qu=n("This model inherits from "),Ua=a("a"),Cu=n("TFPreTrainedModel"),xu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju=h(),la=a("p"),Ou=n("This model is also a "),da=a("a"),Au=n("tf.keras.Model"),Lu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=h(),w(Pn.$$.fragment),Iu=h(),vt=a("div"),w(ca.$$.fragment),Su=h(),$o=a("p"),Wu=n("The "),Ba=a("a"),Qu=n("TFMPNetForQuestionAnswering"),Hu=n(" forward method, overrides the "),ui=a("code"),Ku=n("__call__"),Ru=n(" special method."),Uu=h(),w(Nn.$$.fragment),Bu=h(),w(Fn.$$.fragment),Vu=h(),w(En.$$.fragment),this.h()},l(o){const v=e_('[data-svelte="svelte-1phssyn"]',document.head);l=r(v,"META",{name:!0,content:!0}),v.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var pa=i(c);u=r(pa,"A",{id:!0,class:!0,href:!0});var fi=i(u);b=r(fi,"SPAN",{});var gi=i(b);T(d.$$.fragment,gi),gi.forEach(t),fi.forEach(t),p=m(pa),q=r(pa,"SPAN",{});var _i=i(q);be=s(_i,"MPNet"),_i.forEach(t),pa.forEach(t),he=m(o),L=r(o,"H2",{class:!0});var ha=i(L);ae=r(ha,"A",{id:!0,class:!0,href:!0});var ki=i(ae);te=r(ki,"SPAN",{});var vi=i(te);T(N.$$.fragment,vi),vi.forEach(t),ki.forEach(t),we=m(ha),U=r(ha,"SPAN",{});var bi=i(U);Te=s(bi,"Overview"),bi.forEach(t),ha.forEach(t),me=m(o),S=r(o,"P",{});var ma=i(S);$e=s(ma,"The MPNet model was proposed in "),le=r(ma,"A",{href:!0,rel:!0});var wi=i(le);B=s(wi,"MPNet: Masked and Permuted Pre-training for Language Understanding"),wi.forEach(t),Me=s(ma," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ma.forEach(t),ue=m(o),Q=r(o,"P",{});var Ti=i(Q);ye=s(Ti,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),Ti.forEach(t),fe=m(o),H=r(o,"P",{});var $i=i(H);Pe=s($i,"The abstract from the paper is the following:"),$i.forEach(t),ge=m(o),ee=r(o,"P",{});var Mi=i(ee);C=r(Mi,"EM",{});var yi=i(C);j=s(yi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),yi.forEach(t),Mi.forEach(t),_e=m(o),K=r(o,"P",{});var Pi=i(K);Ne=s(Pi,"Tips:"),Pi.forEach(t),ke=m(o),R=r(o,"UL",{});var Ni=i(R);oe=r(Ni,"LI",{});var Ct=i(oe);Fe=s(Ct,"MPNet doesn\u2019t have "),x=r(Ct,"CODE",{});var Fi=i(x);Ee=s(Fi,"token_type_ids"),Fi.forEach(t),V=s(Ct,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=r(Ct,"CODE",{});var Ei=i(de);ze=s(Ei,"tokenizer.sep_token"),Ei.forEach(t),X=s(Ct," (or "),ce=r(Ct,"CODE",{});var zi=i(ce);qe=s(zi,"[sep]"),zi.forEach(t),D=s(Ct,")."),Ct.forEach(t),Ni.forEach(t),ve=m(o),W=r(o,"P",{});var ua=i(W);Ce=s(ua,"The original code can be found "),Z=r(ua,"A",{href:!0,rel:!0});var qi=i(Z);O=s(qi,"here"),qi.forEach(t),xe=s(ua,"."),ua.forEach(t),A=m(o),se=r(o,"H2",{class:!0});var fa=i(se);re=r(fa,"A",{id:!0,class:!0,href:!0});var Ci=i(re);f=r(Ci,"SPAN",{});var xi=i(f);T(F.$$.fragment,xi),xi.forEach(t),Ci.forEach(t),He=m(fa),ne=r(fa,"SPAN",{});var ji=i(ne);Ke=s(ji,"MPNetConfig"),ji.forEach(t),fa.forEach(t),Qe=m(o),E=r(o,"DIV",{class:!0});var xt=i(E);T(Oe.$$.fragment,xt),Re=m(xt),pe=r(xt,"P",{});var jt=i(pe);Ue=s(jt,"This is the configuration class to store the configuration of a "),Le=r(jt,"A",{href:!0});var Oi=i(Le);I=s(Oi,"MPNetModel"),Oi.forEach(t),G=s(jt," or a "),De=r(jt,"A",{href:!0});var Ai=i(De);Be=s(Ai,"TFMPNetModel"),Ai.forEach(t),J=s(jt,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ae=r(jt,"A",{href:!0,rel:!0});var Li=i(Ae);Ve=s(Li,"microsoft/mpnet-base"),Li.forEach(t),je=s(jt," architecture."),jt.forEach(t),Xe=m(xt),Y=r(xt,"P",{});var Mo=i(Y);Ge=s(Mo,"Configuration objects inherit from "),ka=r(Mo,"A",{href:!0});var Di=i(ka);dd=s(Di,"PretrainedConfig"),Di.forEach(t),cd=s(Mo,` and can be used to control the model outputs. Read the
documentation from `),va=r(Mo,"A",{href:!0});var Ii=i(va);pd=s(Ii,"PretrainedConfig"),Ii.forEach(t),hd=s(Mo," for more information."),Mo.forEach(t),md=m(xt),T(yo.$$.fragment,xt),xt.forEach(t),Ki=m(o),Vt=r(o,"H2",{class:!0});var ga=i(Vt);Po=r(ga,"A",{id:!0,class:!0,href:!0});var Si=i(Po);dr=r(Si,"SPAN",{});var Wi=i(dr);T(On.$$.fragment,Wi),Wi.forEach(t),Si.forEach(t),ud=m(ga),cr=r(ga,"SPAN",{});var Qi=i(cr);fd=s(Qi,"MPNetTokenizer"),Qi.forEach(t),ga.forEach(t),Ri=m(o),Ze=r(o,"DIV",{class:!0});var ht=i(Ze);T(An.$$.fragment,ht),gd=m(ht),Ln=r(ht,"P",{});var _a=i(Ln);_d=s(_a,"This tokenizer inherits from "),ba=r(_a,"A",{href:!0});var Hi=i(ba);kd=s(Hi,"BertTokenizer"),Hi.forEach(t),vd=s(_a,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),_a.forEach(t),bd=m(ht),Ot=r(ht,"DIV",{class:!0});var Va=i(Ot);T(Dn.$$.fragment,Va),wd=m(Va),pr=r(Va,"P",{});var Ju=i(pr);Td=s(Ju,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Ju.forEach(t),$d=m(Va),In=r(Va,"UL",{});var vl=i(In);wa=r(vl,"LI",{});var Xu=i(wa);Md=s(Xu,"single sequence: "),hr=r(Xu,"CODE",{});var Yu=i(hr);yd=s(Yu,"<s> X </s>"),Yu.forEach(t),Xu.forEach(t),Pd=m(vl),Ta=r(vl,"LI",{});var Gu=i(Ta);Nd=s(Gu,"pair of sequences: "),mr=r(Gu,"CODE",{});var Zu=i(mr);Fd=s(Zu,"<s> A </s></s> B </s>"),Zu.forEach(t),Gu.forEach(t),vl.forEach(t),Va.forEach(t),Ed=m(ht),No=r(ht,"DIV",{class:!0});var bl=i(No);T(Sn.$$.fragment,bl),zd=m(bl),Wn=r(bl,"P",{});var wl=i(Wn);qd=s(wl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=r(wl,"CODE",{});var ef=i(ur);Cd=s(ef,"prepare_for_model"),ef.forEach(t),xd=s(wl," methods."),wl.forEach(t),bl.forEach(t),jd=m(ht),Fo=r(ht,"DIV",{class:!0});var Tl=i(Fo);T(Qn.$$.fragment,Tl),Od=m(Tl),fr=r(Tl,"P",{});var tf=i(fr);Ad=s(tf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),tf.forEach(t),Tl.forEach(t),Ld=m(ht),$a=r(ht,"DIV",{class:!0});var of=i($a);T(Hn.$$.fragment,of),of.forEach(t),ht.forEach(t),Ui=m(o),Xt=r(o,"H2",{class:!0});var $l=i(Xt);Eo=r($l,"A",{id:!0,class:!0,href:!0});var nf=i(Eo);gr=r(nf,"SPAN",{});var sf=i(gr);T(Kn.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Dd=m($l),_r=r($l,"SPAN",{});var af=i(_r);Id=s(af,"MPNetTokenizerFast"),af.forEach(t),$l.forEach(t),Bi=m(o),wt=r(o,"DIV",{class:!0});var zn=i(wt);T(Rn.$$.fragment,zn),Sd=m(zn),Un=r(zn,"P",{});var Ml=i(Un);Wd=s(Ml,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=r(Ml,"EM",{});var rf=i(kr);Qd=s(rf,"tokenizers"),rf.forEach(t),Hd=s(Ml," library). Based on WordPiece."),Ml.forEach(t),Kd=m(zn),Bn=r(zn,"P",{});var yl=i(Bn);Rd=s(yl,"This tokenizer inherits from "),Ma=r(yl,"A",{href:!0});var lf=i(Ma);Ud=s(lf,"PreTrainedTokenizerFast"),lf.forEach(t),Bd=s(yl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yl.forEach(t),Vd=m(zn),zo=r(zn,"DIV",{class:!0});var Pl=i(zo);T(Vn.$$.fragment,Pl),Xd=m(Pl),vr=r(Pl,"P",{});var df=i(vr);Gd=s(df,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),df.forEach(t),Pl.forEach(t),zn.forEach(t),Vi=m(o),Gt=r(o,"H2",{class:!0});var Nl=i(Gt);qo=r(Nl,"A",{id:!0,class:!0,href:!0});var cf=i(qo);br=r(cf,"SPAN",{});var pf=i(br);T(Xn.$$.fragment,pf),pf.forEach(t),cf.forEach(t),Jd=m(Nl),wr=r(Nl,"SPAN",{});var hf=i(wr);Yd=s(hf,"MPNetModel"),hf.forEach(t),Nl.forEach(t),Xi=m(o),it=r(o,"DIV",{class:!0});var At=i(it);T(Gn.$$.fragment,At),Zd=m(At),Tr=r(At,"P",{});var mf=i(Tr);ec=s(mf,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),mf.forEach(t),tc=m(At),Jn=r(At,"P",{});var Fl=i(Jn);oc=s(Fl,"This model inherits from "),ya=r(Fl,"A",{href:!0});var uf=i(ya);nc=s(uf,"PreTrainedModel"),uf.forEach(t),sc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),ac=m(At),Yn=r(At,"P",{});var El=i(Yn);rc=s(El,"This model is also a PyTorch "),Zn=r(El,"A",{href:!0,rel:!0});var ff=i(Zn);ic=s(ff,"torch.nn.Module"),ff.forEach(t),lc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),dc=m(At),Tt=r(At,"DIV",{class:!0});var qn=i(Tt);T(es.$$.fragment,qn),cc=m(qn),Jt=r(qn,"P",{});var Xa=i(Jt);pc=s(Xa,"The "),Pa=r(Xa,"A",{href:!0});var gf=i(Pa);hc=s(gf,"MPNetModel"),gf.forEach(t),mc=s(Xa," forward method, overrides the "),$r=r(Xa,"CODE",{});var _f=i($r);uc=s(_f,"__call__"),_f.forEach(t),fc=s(Xa," special method."),Xa.forEach(t),gc=m(qn),T(Co.$$.fragment,qn),_c=m(qn),T(xo.$$.fragment,qn),qn.forEach(t),At.forEach(t),Gi=m(o),Yt=r(o,"H2",{class:!0});var zl=i(Yt);jo=r(zl,"A",{id:!0,class:!0,href:!0});var kf=i(jo);Mr=r(kf,"SPAN",{});var vf=i(Mr);T(ts.$$.fragment,vf),vf.forEach(t),kf.forEach(t),kc=m(zl),yr=r(zl,"SPAN",{});var bf=i(yr);vc=s(bf,"MPNetForMaskedLM"),bf.forEach(t),zl.forEach(t),Ji=m(o),Zt=r(o,"DIV",{class:!0});var ql=i(Zt);T(os.$$.fragment,ql),bc=m(ql),mt=r(ql,"DIV",{class:!0});var Lt=i(mt);T(ns.$$.fragment,Lt),wc=m(Lt),eo=r(Lt,"P",{});var Ga=i(eo);Tc=s(Ga,"The "),Na=r(Ga,"A",{href:!0});var wf=i(Na);$c=s(wf,"MPNetForMaskedLM"),wf.forEach(t),Mc=s(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var Tf=i(Pr);yc=s(Tf,"__call__"),Tf.forEach(t),Pc=s(Ga," special method."),Ga.forEach(t),Nc=m(Lt),T(Oo.$$.fragment,Lt),Fc=m(Lt),T(Ao.$$.fragment,Lt),Ec=m(Lt),T(Lo.$$.fragment,Lt),Lt.forEach(t),ql.forEach(t),Yi=m(o),to=r(o,"H2",{class:!0});var Cl=i(to);Do=r(Cl,"A",{id:!0,class:!0,href:!0});var $f=i(Do);Nr=r($f,"SPAN",{});var Mf=i(Nr);T(ss.$$.fragment,Mf),Mf.forEach(t),$f.forEach(t),zc=m(Cl),Fr=r(Cl,"SPAN",{});var yf=i(Fr);qc=s(yf,"MPNetForSequenceClassification"),yf.forEach(t),Cl.forEach(t),Zi=m(o),lt=r(o,"DIV",{class:!0});var Dt=i(lt);T(as.$$.fragment,Dt),Cc=m(Dt),Er=r(Dt,"P",{});var Pf=i(Er);xc=s(Pf,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Pf.forEach(t),jc=m(Dt),rs=r(Dt,"P",{});var xl=i(rs);Oc=s(xl,"This model inherits from "),Fa=r(xl,"A",{href:!0});var Nf=i(Fa);Ac=s(Nf,"PreTrainedModel"),Nf.forEach(t),Lc=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Dc=m(Dt),is=r(Dt,"P",{});var jl=i(is);Ic=s(jl,"This model is also a PyTorch "),ls=r(jl,"A",{href:!0,rel:!0});var Ff=i(ls);Sc=s(Ff,"torch.nn.Module"),Ff.forEach(t),Wc=s(jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jl.forEach(t),Qc=m(Dt),Je=r(Dt,"DIV",{class:!0});var bt=i(Je);T(ds.$$.fragment,bt),Hc=m(bt),oo=r(bt,"P",{});var Ja=i(oo);Kc=s(Ja,"The "),Ea=r(Ja,"A",{href:!0});var Ef=i(Ea);Rc=s(Ef,"MPNetForSequenceClassification"),Ef.forEach(t),Uc=s(Ja," forward method, overrides the "),zr=r(Ja,"CODE",{});var zf=i(zr);Bc=s(zf,"__call__"),zf.forEach(t),Vc=s(Ja," special method."),Ja.forEach(t),Xc=m(bt),T(Io.$$.fragment,bt),Gc=m(bt),T(So.$$.fragment,bt),Jc=m(bt),T(Wo.$$.fragment,bt),Yc=m(bt),T(Qo.$$.fragment,bt),Zc=m(bt),T(Ho.$$.fragment,bt),bt.forEach(t),Dt.forEach(t),el=m(o),no=r(o,"H2",{class:!0});var Ol=i(no);Ko=r(Ol,"A",{id:!0,class:!0,href:!0});var qf=i(Ko);qr=r(qf,"SPAN",{});var Cf=i(qr);T(cs.$$.fragment,Cf),Cf.forEach(t),qf.forEach(t),ep=m(Ol),Cr=r(Ol,"SPAN",{});var xf=i(Cr);tp=s(xf,"MPNetForMultipleChoice"),xf.forEach(t),Ol.forEach(t),tl=m(o),dt=r(o,"DIV",{class:!0});var It=i(dt);T(ps.$$.fragment,It),op=m(It),xr=r(It,"P",{});var jf=i(xr);np=s(jf,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jf.forEach(t),sp=m(It),hs=r(It,"P",{});var Al=i(hs);ap=s(Al,"This model inherits from "),za=r(Al,"A",{href:!0});var Of=i(za);rp=s(Of,"PreTrainedModel"),Of.forEach(t),ip=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),lp=m(It),ms=r(It,"P",{});var Ll=i(ms);dp=s(Ll,"This model is also a PyTorch "),us=r(Ll,"A",{href:!0,rel:!0});var Af=i(us);cp=s(Af,"torch.nn.Module"),Af.forEach(t),pp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),hp=m(It),$t=r(It,"DIV",{class:!0});var Cn=i($t);T(fs.$$.fragment,Cn),mp=m(Cn),so=r(Cn,"P",{});var Ya=i(so);up=s(Ya,"The "),qa=r(Ya,"A",{href:!0});var Lf=i(qa);fp=s(Lf,"MPNetForMultipleChoice"),Lf.forEach(t),gp=s(Ya," forward method, overrides the "),jr=r(Ya,"CODE",{});var Df=i(jr);_p=s(Df,"__call__"),Df.forEach(t),kp=s(Ya," special method."),Ya.forEach(t),vp=m(Cn),T(Ro.$$.fragment,Cn),bp=m(Cn),T(Uo.$$.fragment,Cn),Cn.forEach(t),It.forEach(t),ol=m(o),ao=r(o,"H2",{class:!0});var Dl=i(ao);Bo=r(Dl,"A",{id:!0,class:!0,href:!0});var If=i(Bo);Or=r(If,"SPAN",{});var Sf=i(Or);T(gs.$$.fragment,Sf),Sf.forEach(t),If.forEach(t),wp=m(Dl),Ar=r(Dl,"SPAN",{});var Wf=i(Ar);Tp=s(Wf,"MPNetForTokenClassification"),Wf.forEach(t),Dl.forEach(t),nl=m(o),ct=r(o,"DIV",{class:!0});var St=i(ct);T(_s.$$.fragment,St),$p=m(St),Lr=r(St,"P",{});var Qf=i(Lr);Mp=s(Qf,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qf.forEach(t),yp=m(St),ks=r(St,"P",{});var Il=i(ks);Pp=s(Il,"This model inherits from "),Ca=r(Il,"A",{href:!0});var Hf=i(Ca);Np=s(Hf,"PreTrainedModel"),Hf.forEach(t),Fp=s(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Ep=m(St),vs=r(St,"P",{});var Sl=i(vs);zp=s(Sl,"This model is also a PyTorch "),bs=r(Sl,"A",{href:!0,rel:!0});var Kf=i(bs);qp=s(Kf,"torch.nn.Module"),Kf.forEach(t),Cp=s(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),xp=m(St),ut=r(St,"DIV",{class:!0});var Wt=i(ut);T(ws.$$.fragment,Wt),jp=m(Wt),ro=r(Wt,"P",{});var Za=i(ro);Op=s(Za,"The "),xa=r(Za,"A",{href:!0});var Rf=i(xa);Ap=s(Rf,"MPNetForTokenClassification"),Rf.forEach(t),Lp=s(Za," forward method, overrides the "),Dr=r(Za,"CODE",{});var Uf=i(Dr);Dp=s(Uf,"__call__"),Uf.forEach(t),Ip=s(Za," special method."),Za.forEach(t),Sp=m(Wt),T(Vo.$$.fragment,Wt),Wp=m(Wt),T(Xo.$$.fragment,Wt),Qp=m(Wt),T(Go.$$.fragment,Wt),Wt.forEach(t),St.forEach(t),sl=m(o),io=r(o,"H2",{class:!0});var Wl=i(io);Jo=r(Wl,"A",{id:!0,class:!0,href:!0});var Bf=i(Jo);Ir=r(Bf,"SPAN",{});var Vf=i(Ir);T(Ts.$$.fragment,Vf),Vf.forEach(t),Bf.forEach(t),Hp=m(Wl),Sr=r(Wl,"SPAN",{});var Xf=i(Sr);Kp=s(Xf,"MPNetForQuestionAnswering"),Xf.forEach(t),Wl.forEach(t),al=m(o),pt=r(o,"DIV",{class:!0});var Qt=i(pt);T($s.$$.fragment,Qt),Rp=m(Qt),lo=r(Qt,"P",{});var er=i(lo);Up=s(er,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=r(er,"CODE",{});var Gf=i(Wr);Bp=s(Gf,"span start logits"),Gf.forEach(t),Vp=s(er," and "),Qr=r(er,"CODE",{});var Jf=i(Qr);Xp=s(Jf,"span end logits"),Jf.forEach(t),Gp=s(er,")."),er.forEach(t),Jp=m(Qt),Ms=r(Qt,"P",{});var Ql=i(Ms);Yp=s(Ql,"This model inherits from "),ja=r(Ql,"A",{href:!0});var Yf=i(ja);Zp=s(Yf,"PreTrainedModel"),Yf.forEach(t),eh=s(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),th=m(Qt),ys=r(Qt,"P",{});var Hl=i(ys);oh=s(Hl,"This model is also a PyTorch "),Ps=r(Hl,"A",{href:!0,rel:!0});var Zf=i(Ps);nh=s(Zf,"torch.nn.Module"),Zf.forEach(t),sh=s(Hl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl.forEach(t),ah=m(Qt),ft=r(Qt,"DIV",{class:!0});var Ht=i(ft);T(Ns.$$.fragment,Ht),rh=m(Ht),co=r(Ht,"P",{});var tr=i(co);ih=s(tr,"The "),Oa=r(tr,"A",{href:!0});var eg=i(Oa);lh=s(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dh=s(tr," forward method, overrides the "),Hr=r(tr,"CODE",{});var tg=i(Hr);ch=s(tg,"__call__"),tg.forEach(t),ph=s(tr," special method."),tr.forEach(t),hh=m(Ht),T(Yo.$$.fragment,Ht),mh=m(Ht),T(Zo.$$.fragment,Ht),uh=m(Ht),T(en.$$.fragment,Ht),Ht.forEach(t),Qt.forEach(t),rl=m(o),po=r(o,"H2",{class:!0});var Kl=i(po);tn=r(Kl,"A",{id:!0,class:!0,href:!0});var og=i(tn);Kr=r(og,"SPAN",{});var ng=i(Kr);T(Fs.$$.fragment,ng),ng.forEach(t),og.forEach(t),fh=m(Kl),Rr=r(Kl,"SPAN",{});var sg=i(Rr);gh=s(sg,"TFMPNetModel"),sg.forEach(t),Kl.forEach(t),il=m(o),et=r(o,"DIV",{class:!0});var Pt=i(et);T(Es.$$.fragment,Pt),_h=m(Pt),Ur=r(Pt,"P",{});var ag=i(Ur);kh=s(ag,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),vh=m(Pt),zs=r(Pt,"P",{});var Rl=i(zs);bh=s(Rl,"This model inherits from "),Aa=r(Rl,"A",{href:!0});var rg=i(Aa);wh=s(rg,"TFPreTrainedModel"),rg.forEach(t),Th=s(Rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rl.forEach(t),$h=m(Pt),qs=r(Pt,"P",{});var Ul=i(qs);Mh=s(Ul,"This model is also a "),Cs=r(Ul,"A",{href:!0,rel:!0});var ig=i(Cs);yh=s(ig,"tf.keras.Model"),ig.forEach(t),Ph=s(Ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ul.forEach(t),Nh=m(Pt),T(on.$$.fragment,Pt),Fh=m(Pt),Mt=r(Pt,"DIV",{class:!0});var xn=i(Mt);T(xs.$$.fragment,xn),Eh=m(xn),ho=r(xn,"P",{});var or=i(ho);zh=s(or,"The "),La=r(or,"A",{href:!0});var lg=i(La);qh=s(lg,"TFMPNetModel"),lg.forEach(t),Ch=s(or," forward method, overrides the "),Br=r(or,"CODE",{});var dg=i(Br);xh=s(dg,"__call__"),dg.forEach(t),jh=s(or," special method."),or.forEach(t),Oh=m(xn),T(nn.$$.fragment,xn),Ah=m(xn),T(sn.$$.fragment,xn),xn.forEach(t),Pt.forEach(t),ll=m(o),mo=r(o,"H2",{class:!0});var Bl=i(mo);an=r(Bl,"A",{id:!0,class:!0,href:!0});var cg=i(an);Vr=r(cg,"SPAN",{});var pg=i(Vr);T(js.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Lh=m(Bl),Xr=r(Bl,"SPAN",{});var hg=i(Xr);Dh=s(hg,"TFMPNetForMaskedLM"),hg.forEach(t),Bl.forEach(t),dl=m(o),tt=r(o,"DIV",{class:!0});var Nt=i(tt);T(Os.$$.fragment,Nt),Ih=m(Nt),As=r(Nt,"P",{});var Vl=i(As);Sh=s(Vl,"MPNet Model with a "),Gr=r(Vl,"CODE",{});var mg=i(Gr);Wh=s(mg,"language modeling"),mg.forEach(t),Qh=s(Vl," head on top."),Vl.forEach(t),Hh=m(Nt),Ls=r(Nt,"P",{});var Xl=i(Ls);Kh=s(Xl,"This model inherits from "),Da=r(Xl,"A",{href:!0});var ug=i(Da);Rh=s(ug,"TFPreTrainedModel"),ug.forEach(t),Uh=s(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Bh=m(Nt),Ds=r(Nt,"P",{});var Gl=i(Ds);Vh=s(Gl,"This model is also a "),Is=r(Gl,"A",{href:!0,rel:!0});var fg=i(Is);Xh=s(fg,"tf.keras.Model"),fg.forEach(t),Gh=s(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Jh=m(Nt),T(rn.$$.fragment,Nt),Yh=m(Nt),gt=r(Nt,"DIV",{class:!0});var Kt=i(gt);T(Ss.$$.fragment,Kt),Zh=m(Kt),uo=r(Kt,"P",{});var nr=i(uo);em=s(nr,"The "),Ia=r(nr,"A",{href:!0});var gg=i(Ia);tm=s(gg,"TFMPNetForMaskedLM"),gg.forEach(t),om=s(nr," forward method, overrides the "),Jr=r(nr,"CODE",{});var _g=i(Jr);nm=s(_g,"__call__"),_g.forEach(t),sm=s(nr," special method."),nr.forEach(t),am=m(Kt),T(ln.$$.fragment,Kt),rm=m(Kt),T(dn.$$.fragment,Kt),im=m(Kt),T(cn.$$.fragment,Kt),Kt.forEach(t),Nt.forEach(t),cl=m(o),fo=r(o,"H2",{class:!0});var Jl=i(fo);pn=r(Jl,"A",{id:!0,class:!0,href:!0});var kg=i(pn);Yr=r(kg,"SPAN",{});var vg=i(Yr);T(Ws.$$.fragment,vg),vg.forEach(t),kg.forEach(t),lm=m(Jl),Zr=r(Jl,"SPAN",{});var bg=i(Zr);dm=s(bg,"TFMPNetForSequenceClassification"),bg.forEach(t),Jl.forEach(t),pl=m(o),ot=r(o,"DIV",{class:!0});var Ft=i(ot);T(Qs.$$.fragment,Ft),cm=m(Ft),ei=r(Ft,"P",{});var wg=i(ei);pm=s(wg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wg.forEach(t),hm=m(Ft),Hs=r(Ft,"P",{});var Yl=i(Hs);mm=s(Yl,"This model inherits from "),Sa=r(Yl,"A",{href:!0});var Tg=i(Sa);um=s(Tg,"TFPreTrainedModel"),Tg.forEach(t),fm=s(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(t),gm=m(Ft),Ks=r(Ft,"P",{});var Zl=i(Ks);_m=s(Zl,"This model is also a "),Rs=r(Zl,"A",{href:!0,rel:!0});var $g=i(Rs);km=s($g,"tf.keras.Model"),$g.forEach(t),vm=s(Zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zl.forEach(t),bm=m(Ft),T(hn.$$.fragment,Ft),wm=m(Ft),_t=r(Ft,"DIV",{class:!0});var Rt=i(_t);T(Us.$$.fragment,Rt),Tm=m(Rt),go=r(Rt,"P",{});var sr=i(go);$m=s(sr,"The "),Wa=r(sr,"A",{href:!0});var Mg=i(Wa);Mm=s(Mg,"TFMPNetForSequenceClassification"),Mg.forEach(t),ym=s(sr," forward method, overrides the "),ti=r(sr,"CODE",{});var yg=i(ti);Pm=s(yg,"__call__"),yg.forEach(t),Nm=s(sr," special method."),sr.forEach(t),Fm=m(Rt),T(mn.$$.fragment,Rt),Em=m(Rt),T(un.$$.fragment,Rt),zm=m(Rt),T(fn.$$.fragment,Rt),Rt.forEach(t),Ft.forEach(t),hl=m(o),_o=r(o,"H2",{class:!0});var ed=i(_o);gn=r(ed,"A",{id:!0,class:!0,href:!0});var Pg=i(gn);oi=r(Pg,"SPAN",{});var Ng=i(oi);T(Bs.$$.fragment,Ng),Ng.forEach(t),Pg.forEach(t),qm=m(ed),ni=r(ed,"SPAN",{});var Fg=i(ni);Cm=s(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),ed.forEach(t),ml=m(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);T(Vs.$$.fragment,Et),xm=m(Et),si=r(Et,"P",{});var Eg=i(si);jm=s(Eg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),Om=m(Et),Xs=r(Et,"P",{});var td=i(Xs);Am=s(td,"This model inherits from "),Qa=r(td,"A",{href:!0});var zg=i(Qa);Lm=s(zg,"TFPreTrainedModel"),zg.forEach(t),Dm=s(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Im=m(Et),Gs=r(Et,"P",{});var od=i(Gs);Sm=s(od,"This model is also a "),Js=r(od,"A",{href:!0,rel:!0});var qg=i(Js);Wm=s(qg,"tf.keras.Model"),qg.forEach(t),Qm=s(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),Hm=m(Et),T(_n.$$.fragment,Et),Km=m(Et),yt=r(Et,"DIV",{class:!0});var jn=i(yt);T(Ys.$$.fragment,jn),Rm=m(jn),ko=r(jn,"P",{});var ar=i(ko);Um=s(ar,"The "),Ha=r(ar,"A",{href:!0});var Cg=i(Ha);Bm=s(Cg,"TFMPNetForMultipleChoice"),Cg.forEach(t),Vm=s(ar," forward method, overrides the "),ai=r(ar,"CODE",{});var xg=i(ai);Xm=s(xg,"__call__"),xg.forEach(t),Gm=s(ar," special method."),ar.forEach(t),Jm=m(jn),T(kn.$$.fragment,jn),Ym=m(jn),T(vn.$$.fragment,jn),jn.forEach(t),Et.forEach(t),ul=m(o),vo=r(o,"H2",{class:!0});var nd=i(vo);bn=r(nd,"A",{id:!0,class:!0,href:!0});var jg=i(bn);ri=r(jg,"SPAN",{});var Og=i(ri);T(Zs.$$.fragment,Og),Og.forEach(t),jg.forEach(t),Zm=m(nd),ii=r(nd,"SPAN",{});var Ag=i(ii);eu=s(Ag,"TFMPNetForTokenClassification"),Ag.forEach(t),nd.forEach(t),fl=m(o),st=r(o,"DIV",{class:!0});var zt=i(st);T(ea.$$.fragment,zt),tu=m(zt),li=r(zt,"P",{});var Lg=i(li);ou=s(Lg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lg.forEach(t),nu=m(zt),ta=r(zt,"P",{});var sd=i(ta);su=s(sd,"This model inherits from "),Ka=r(sd,"A",{href:!0});var Dg=i(Ka);au=s(Dg,"TFPreTrainedModel"),Dg.forEach(t),ru=s(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),iu=m(zt),oa=r(zt,"P",{});var ad=i(oa);lu=s(ad,"This model is also a "),na=r(ad,"A",{href:!0,rel:!0});var Ig=i(na);du=s(Ig,"tf.keras.Model"),Ig.forEach(t),cu=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),pu=m(zt),T(wn.$$.fragment,zt),hu=m(zt),kt=r(zt,"DIV",{class:!0});var Ut=i(kt);T(sa.$$.fragment,Ut),mu=m(Ut),bo=r(Ut,"P",{});var rr=i(bo);uu=s(rr,"The "),Ra=r(rr,"A",{href:!0});var Sg=i(Ra);fu=s(Sg,"TFMPNetForTokenClassification"),Sg.forEach(t),gu=s(rr," forward method, overrides the "),di=r(rr,"CODE",{});var Wg=i(di);_u=s(Wg,"__call__"),Wg.forEach(t),ku=s(rr," special method."),rr.forEach(t),vu=m(Ut),T(Tn.$$.fragment,Ut),bu=m(Ut),T($n.$$.fragment,Ut),wu=m(Ut),T(Mn.$$.fragment,Ut),Ut.forEach(t),zt.forEach(t),gl=m(o),wo=r(o,"H2",{class:!0});var rd=i(wo);yn=r(rd,"A",{id:!0,class:!0,href:!0});var Qg=i(yn);ci=r(Qg,"SPAN",{});var Hg=i(ci);T(aa.$$.fragment,Hg),Hg.forEach(t),Qg.forEach(t),Tu=m(rd),pi=r(rd,"SPAN",{});var Kg=i(pi);$u=s(Kg,"TFMPNetForQuestionAnswering"),Kg.forEach(t),rd.forEach(t),_l=m(o),at=r(o,"DIV",{class:!0});var qt=i(at);T(ra.$$.fragment,qt),Mu=m(qt),To=r(qt,"P",{});var ir=i(To);yu=s(ir,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hi=r(ir,"CODE",{});var Rg=i(hi);Pu=s(Rg,"span start logits"),Rg.forEach(t),Nu=s(ir," and "),mi=r(ir,"CODE",{});var Ug=i(mi);Fu=s(Ug,"span end logits"),Ug.forEach(t),Eu=s(ir,")."),ir.forEach(t),zu=m(qt),ia=r(qt,"P",{});var id=i(ia);qu=s(id,"This model inherits from "),Ua=r(id,"A",{href:!0});var Bg=i(Ua);Cu=s(Bg,"TFPreTrainedModel"),Bg.forEach(t),xu=s(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),ju=m(qt),la=r(qt,"P",{});var ld=i(la);Ou=s(ld,"This model is also a "),da=r(ld,"A",{href:!0,rel:!0});var Vg=i(da);Au=s(Vg,"tf.keras.Model"),Vg.forEach(t),Lu=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Du=m(qt),T(Pn.$$.fragment,qt),Iu=m(qt),vt=r(qt,"DIV",{class:!0});var Bt=i(vt);T(ca.$$.fragment,Bt),Su=m(Bt),$o=r(Bt,"P",{});var lr=i($o);Wu=s(lr,"The "),Ba=r(lr,"A",{href:!0});var Xg=i(Ba);Qu=s(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Hu=s(lr," forward method, overrides the "),ui=r(lr,"CODE",{});var Gg=i(ui);Ku=s(Gg,"__call__"),Gg.forEach(t),Ru=s(lr," special method."),lr.forEach(t),Uu=m(Bt),T(Nn.$$.fragment,Bt),Bu=m(Bt),T(Fn.$$.fragment,Bt),Vu=m(Bt),T(En.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),this.h()},h(){k(l,"name","hf:doc:metadata"),k(l,"content",JSON.stringify(K_)),k(u,"id","mpnet"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#mpnet"),k(c,"class","relative group"),k(ae,"id","overview"),k(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ae,"href","#overview"),k(L,"class","relative group"),k(le,"href","https://arxiv.org/abs/2004.09297"),k(le,"rel","nofollow"),k(Z,"href","https://github.com/microsoft/MPNet"),k(Z,"rel","nofollow"),k(re,"id","transformers.MPNetConfig"),k(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(re,"href","#transformers.MPNetConfig"),k(se,"class","relative group"),k(Le,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetModel"),k(De,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Ae,"href","https://huggingface.co/microsoft/mpnet-base"),k(Ae,"rel","nofollow"),k(ka,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),k(va,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),k(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.MPNetTokenizer"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.MPNetTokenizer"),k(Vt,"class","relative group"),k(ba,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer"),k(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k($a,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.MPNetTokenizerFast"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.MPNetTokenizerFast"),k(Xt,"class","relative group"),k(Ma,"href","/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),k(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.MPNetModel"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.MPNetModel"),k(Gt,"class","relative group"),k(ya,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),k(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Zn,"rel","nofollow"),k(Pa,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetModel"),k(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(jo,"id","transformers.MPNetForMaskedLM"),k(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(jo,"href","#transformers.MPNetForMaskedLM"),k(Yt,"class","relative group"),k(Na,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),k(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.MPNetForSequenceClassification"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.MPNetForSequenceClassification"),k(to,"class","relative group"),k(Fa,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),k(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ls,"rel","nofollow"),k(Ea,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ko,"id","transformers.MPNetForMultipleChoice"),k(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Ko,"href","#transformers.MPNetForMultipleChoice"),k(no,"class","relative group"),k(za,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),k(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(us,"rel","nofollow"),k(qa,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),k($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bo,"id","transformers.MPNetForTokenClassification"),k(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Bo,"href","#transformers.MPNetForTokenClassification"),k(ao,"class","relative group"),k(Ca,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),k(bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(bs,"rel","nofollow"),k(xa,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.MPNetForQuestionAnswering"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.MPNetForQuestionAnswering"),k(io,"class","relative group"),k(ja,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(Oa,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tn,"id","transformers.TFMPNetModel"),k(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(tn,"href","#transformers.TFMPNetModel"),k(po,"class","relative group"),k(Aa,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Cs,"rel","nofollow"),k(La,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFMPNetForMaskedLM"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFMPNetForMaskedLM"),k(mo,"class","relative group"),k(Da,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Is,"rel","nofollow"),k(Ia,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),k(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pn,"id","transformers.TFMPNetForSequenceClassification"),k(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pn,"href","#transformers.TFMPNetForSequenceClassification"),k(fo,"class","relative group"),k(Sa,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rs,"rel","nofollow"),k(Wa,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(gn,"id","transformers.TFMPNetForMultipleChoice"),k(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(gn,"href","#transformers.TFMPNetForMultipleChoice"),k(_o,"class","relative group"),k(Qa,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Js,"rel","nofollow"),k(Ha,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),k(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(bn,"id","transformers.TFMPNetForTokenClassification"),k(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(bn,"href","#transformers.TFMPNetForTokenClassification"),k(vo,"class","relative group"),k(Ka,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(na,"rel","nofollow"),k(Ra,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),k(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(yn,"id","transformers.TFMPNetForQuestionAnswering"),k(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(yn,"href","#transformers.TFMPNetForQuestionAnswering"),k(wo,"class","relative group"),k(Ua,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(da,"rel","nofollow"),k(Ba,"href","/docs/transformers/v4.22.0/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),k(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,v){e(document.head,l),_(o,g,v),_(o,c,v),e(c,u),e(u,b),$(d,b,null),e(c,p),e(c,q),e(q,be),_(o,he,v),_(o,L,v),e(L,ae),e(ae,te),$(N,te,null),e(L,we),e(L,U),e(U,Te),_(o,me,v),_(o,S,v),e(S,$e),e(S,le),e(le,B),e(S,Me),_(o,ue,v),_(o,Q,v),e(Q,ye),_(o,fe,v),_(o,H,v),e(H,Pe),_(o,ge,v),_(o,ee,v),e(ee,C),e(C,j),_(o,_e,v),_(o,K,v),e(K,Ne),_(o,ke,v),_(o,R,v),e(R,oe),e(oe,Fe),e(oe,x),e(x,Ee),e(oe,V),e(oe,de),e(de,ze),e(oe,X),e(oe,ce),e(ce,qe),e(oe,D),_(o,ve,v),_(o,W,v),e(W,Ce),e(W,Z),e(Z,O),e(W,xe),_(o,A,v),_(o,se,v),e(se,re),e(re,f),$(F,f,null),e(se,He),e(se,ne),e(ne,Ke),_(o,Qe,v),_(o,E,v),$(Oe,E,null),e(E,Re),e(E,pe),e(pe,Ue),e(pe,Le),e(Le,I),e(pe,G),e(pe,De),e(De,Be),e(pe,J),e(pe,Ae),e(Ae,Ve),e(pe,je),e(E,Xe),e(E,Y),e(Y,Ge),e(Y,ka),e(ka,dd),e(Y,cd),e(Y,va),e(va,pd),e(Y,hd),e(E,md),$(yo,E,null),_(o,Ki,v),_(o,Vt,v),e(Vt,Po),e(Po,dr),$(On,dr,null),e(Vt,ud),e(Vt,cr),e(cr,fd),_(o,Ri,v),_(o,Ze,v),$(An,Ze,null),e(Ze,gd),e(Ze,Ln),e(Ln,_d),e(Ln,ba),e(ba,kd),e(Ln,vd),e(Ze,bd),e(Ze,Ot),$(Dn,Ot,null),e(Ot,wd),e(Ot,pr),e(pr,Td),e(Ot,$d),e(Ot,In),e(In,wa),e(wa,Md),e(wa,hr),e(hr,yd),e(In,Pd),e(In,Ta),e(Ta,Nd),e(Ta,mr),e(mr,Fd),e(Ze,Ed),e(Ze,No),$(Sn,No,null),e(No,zd),e(No,Wn),e(Wn,qd),e(Wn,ur),e(ur,Cd),e(Wn,xd),e(Ze,jd),e(Ze,Fo),$(Qn,Fo,null),e(Fo,Od),e(Fo,fr),e(fr,Ad),e(Ze,Ld),e(Ze,$a),$(Hn,$a,null),_(o,Ui,v),_(o,Xt,v),e(Xt,Eo),e(Eo,gr),$(Kn,gr,null),e(Xt,Dd),e(Xt,_r),e(_r,Id),_(o,Bi,v),_(o,wt,v),$(Rn,wt,null),e(wt,Sd),e(wt,Un),e(Un,Wd),e(Un,kr),e(kr,Qd),e(Un,Hd),e(wt,Kd),e(wt,Bn),e(Bn,Rd),e(Bn,Ma),e(Ma,Ud),e(Bn,Bd),e(wt,Vd),e(wt,zo),$(Vn,zo,null),e(zo,Xd),e(zo,vr),e(vr,Gd),_(o,Vi,v),_(o,Gt,v),e(Gt,qo),e(qo,br),$(Xn,br,null),e(Gt,Jd),e(Gt,wr),e(wr,Yd),_(o,Xi,v),_(o,it,v),$(Gn,it,null),e(it,Zd),e(it,Tr),e(Tr,ec),e(it,tc),e(it,Jn),e(Jn,oc),e(Jn,ya),e(ya,nc),e(Jn,sc),e(it,ac),e(it,Yn),e(Yn,rc),e(Yn,Zn),e(Zn,ic),e(Yn,lc),e(it,dc),e(it,Tt),$(es,Tt,null),e(Tt,cc),e(Tt,Jt),e(Jt,pc),e(Jt,Pa),e(Pa,hc),e(Jt,mc),e(Jt,$r),e($r,uc),e(Jt,fc),e(Tt,gc),$(Co,Tt,null),e(Tt,_c),$(xo,Tt,null),_(o,Gi,v),_(o,Yt,v),e(Yt,jo),e(jo,Mr),$(ts,Mr,null),e(Yt,kc),e(Yt,yr),e(yr,vc),_(o,Ji,v),_(o,Zt,v),$(os,Zt,null),e(Zt,bc),e(Zt,mt),$(ns,mt,null),e(mt,wc),e(mt,eo),e(eo,Tc),e(eo,Na),e(Na,$c),e(eo,Mc),e(eo,Pr),e(Pr,yc),e(eo,Pc),e(mt,Nc),$(Oo,mt,null),e(mt,Fc),$(Ao,mt,null),e(mt,Ec),$(Lo,mt,null),_(o,Yi,v),_(o,to,v),e(to,Do),e(Do,Nr),$(ss,Nr,null),e(to,zc),e(to,Fr),e(Fr,qc),_(o,Zi,v),_(o,lt,v),$(as,lt,null),e(lt,Cc),e(lt,Er),e(Er,xc),e(lt,jc),e(lt,rs),e(rs,Oc),e(rs,Fa),e(Fa,Ac),e(rs,Lc),e(lt,Dc),e(lt,is),e(is,Ic),e(is,ls),e(ls,Sc),e(is,Wc),e(lt,Qc),e(lt,Je),$(ds,Je,null),e(Je,Hc),e(Je,oo),e(oo,Kc),e(oo,Ea),e(Ea,Rc),e(oo,Uc),e(oo,zr),e(zr,Bc),e(oo,Vc),e(Je,Xc),$(Io,Je,null),e(Je,Gc),$(So,Je,null),e(Je,Jc),$(Wo,Je,null),e(Je,Yc),$(Qo,Je,null),e(Je,Zc),$(Ho,Je,null),_(o,el,v),_(o,no,v),e(no,Ko),e(Ko,qr),$(cs,qr,null),e(no,ep),e(no,Cr),e(Cr,tp),_(o,tl,v),_(o,dt,v),$(ps,dt,null),e(dt,op),e(dt,xr),e(xr,np),e(dt,sp),e(dt,hs),e(hs,ap),e(hs,za),e(za,rp),e(hs,ip),e(dt,lp),e(dt,ms),e(ms,dp),e(ms,us),e(us,cp),e(ms,pp),e(dt,hp),e(dt,$t),$(fs,$t,null),e($t,mp),e($t,so),e(so,up),e(so,qa),e(qa,fp),e(so,gp),e(so,jr),e(jr,_p),e(so,kp),e($t,vp),$(Ro,$t,null),e($t,bp),$(Uo,$t,null),_(o,ol,v),_(o,ao,v),e(ao,Bo),e(Bo,Or),$(gs,Or,null),e(ao,wp),e(ao,Ar),e(Ar,Tp),_(o,nl,v),_(o,ct,v),$(_s,ct,null),e(ct,$p),e(ct,Lr),e(Lr,Mp),e(ct,yp),e(ct,ks),e(ks,Pp),e(ks,Ca),e(Ca,Np),e(ks,Fp),e(ct,Ep),e(ct,vs),e(vs,zp),e(vs,bs),e(bs,qp),e(vs,Cp),e(ct,xp),e(ct,ut),$(ws,ut,null),e(ut,jp),e(ut,ro),e(ro,Op),e(ro,xa),e(xa,Ap),e(ro,Lp),e(ro,Dr),e(Dr,Dp),e(ro,Ip),e(ut,Sp),$(Vo,ut,null),e(ut,Wp),$(Xo,ut,null),e(ut,Qp),$(Go,ut,null),_(o,sl,v),_(o,io,v),e(io,Jo),e(Jo,Ir),$(Ts,Ir,null),e(io,Hp),e(io,Sr),e(Sr,Kp),_(o,al,v),_(o,pt,v),$($s,pt,null),e(pt,Rp),e(pt,lo),e(lo,Up),e(lo,Wr),e(Wr,Bp),e(lo,Vp),e(lo,Qr),e(Qr,Xp),e(lo,Gp),e(pt,Jp),e(pt,Ms),e(Ms,Yp),e(Ms,ja),e(ja,Zp),e(Ms,eh),e(pt,th),e(pt,ys),e(ys,oh),e(ys,Ps),e(Ps,nh),e(ys,sh),e(pt,ah),e(pt,ft),$(Ns,ft,null),e(ft,rh),e(ft,co),e(co,ih),e(co,Oa),e(Oa,lh),e(co,dh),e(co,Hr),e(Hr,ch),e(co,ph),e(ft,hh),$(Yo,ft,null),e(ft,mh),$(Zo,ft,null),e(ft,uh),$(en,ft,null),_(o,rl,v),_(o,po,v),e(po,tn),e(tn,Kr),$(Fs,Kr,null),e(po,fh),e(po,Rr),e(Rr,gh),_(o,il,v),_(o,et,v),$(Es,et,null),e(et,_h),e(et,Ur),e(Ur,kh),e(et,vh),e(et,zs),e(zs,bh),e(zs,Aa),e(Aa,wh),e(zs,Th),e(et,$h),e(et,qs),e(qs,Mh),e(qs,Cs),e(Cs,yh),e(qs,Ph),e(et,Nh),$(on,et,null),e(et,Fh),e(et,Mt),$(xs,Mt,null),e(Mt,Eh),e(Mt,ho),e(ho,zh),e(ho,La),e(La,qh),e(ho,Ch),e(ho,Br),e(Br,xh),e(ho,jh),e(Mt,Oh),$(nn,Mt,null),e(Mt,Ah),$(sn,Mt,null),_(o,ll,v),_(o,mo,v),e(mo,an),e(an,Vr),$(js,Vr,null),e(mo,Lh),e(mo,Xr),e(Xr,Dh),_(o,dl,v),_(o,tt,v),$(Os,tt,null),e(tt,Ih),e(tt,As),e(As,Sh),e(As,Gr),e(Gr,Wh),e(As,Qh),e(tt,Hh),e(tt,Ls),e(Ls,Kh),e(Ls,Da),e(Da,Rh),e(Ls,Uh),e(tt,Bh),e(tt,Ds),e(Ds,Vh),e(Ds,Is),e(Is,Xh),e(Ds,Gh),e(tt,Jh),$(rn,tt,null),e(tt,Yh),e(tt,gt),$(Ss,gt,null),e(gt,Zh),e(gt,uo),e(uo,em),e(uo,Ia),e(Ia,tm),e(uo,om),e(uo,Jr),e(Jr,nm),e(uo,sm),e(gt,am),$(ln,gt,null),e(gt,rm),$(dn,gt,null),e(gt,im),$(cn,gt,null),_(o,cl,v),_(o,fo,v),e(fo,pn),e(pn,Yr),$(Ws,Yr,null),e(fo,lm),e(fo,Zr),e(Zr,dm),_(o,pl,v),_(o,ot,v),$(Qs,ot,null),e(ot,cm),e(ot,ei),e(ei,pm),e(ot,hm),e(ot,Hs),e(Hs,mm),e(Hs,Sa),e(Sa,um),e(Hs,fm),e(ot,gm),e(ot,Ks),e(Ks,_m),e(Ks,Rs),e(Rs,km),e(Ks,vm),e(ot,bm),$(hn,ot,null),e(ot,wm),e(ot,_t),$(Us,_t,null),e(_t,Tm),e(_t,go),e(go,$m),e(go,Wa),e(Wa,Mm),e(go,ym),e(go,ti),e(ti,Pm),e(go,Nm),e(_t,Fm),$(mn,_t,null),e(_t,Em),$(un,_t,null),e(_t,zm),$(fn,_t,null),_(o,hl,v),_(o,_o,v),e(_o,gn),e(gn,oi),$(Bs,oi,null),e(_o,qm),e(_o,ni),e(ni,Cm),_(o,ml,v),_(o,nt,v),$(Vs,nt,null),e(nt,xm),e(nt,si),e(si,jm),e(nt,Om),e(nt,Xs),e(Xs,Am),e(Xs,Qa),e(Qa,Lm),e(Xs,Dm),e(nt,Im),e(nt,Gs),e(Gs,Sm),e(Gs,Js),e(Js,Wm),e(Gs,Qm),e(nt,Hm),$(_n,nt,null),e(nt,Km),e(nt,yt),$(Ys,yt,null),e(yt,Rm),e(yt,ko),e(ko,Um),e(ko,Ha),e(Ha,Bm),e(ko,Vm),e(ko,ai),e(ai,Xm),e(ko,Gm),e(yt,Jm),$(kn,yt,null),e(yt,Ym),$(vn,yt,null),_(o,ul,v),_(o,vo,v),e(vo,bn),e(bn,ri),$(Zs,ri,null),e(vo,Zm),e(vo,ii),e(ii,eu),_(o,fl,v),_(o,st,v),$(ea,st,null),e(st,tu),e(st,li),e(li,ou),e(st,nu),e(st,ta),e(ta,su),e(ta,Ka),e(Ka,au),e(ta,ru),e(st,iu),e(st,oa),e(oa,lu),e(oa,na),e(na,du),e(oa,cu),e(st,pu),$(wn,st,null),e(st,hu),e(st,kt),$(sa,kt,null),e(kt,mu),e(kt,bo),e(bo,uu),e(bo,Ra),e(Ra,fu),e(bo,gu),e(bo,di),e(di,_u),e(bo,ku),e(kt,vu),$(Tn,kt,null),e(kt,bu),$($n,kt,null),e(kt,wu),$(Mn,kt,null),_(o,gl,v),_(o,wo,v),e(wo,yn),e(yn,ci),$(aa,ci,null),e(wo,Tu),e(wo,pi),e(pi,$u),_(o,_l,v),_(o,at,v),$(ra,at,null),e(at,Mu),e(at,To),e(To,yu),e(To,hi),e(hi,Pu),e(To,Nu),e(To,mi),e(mi,Fu),e(To,Eu),e(at,zu),e(at,ia),e(ia,qu),e(ia,Ua),e(Ua,Cu),e(ia,xu),e(at,ju),e(at,la),e(la,Ou),e(la,da),e(da,Au),e(la,Lu),e(at,Du),$(Pn,at,null),e(at,Iu),e(at,vt),$(ca,vt,null),e(vt,Su),e(vt,$o),e($o,Wu),e($o,Ba),e(Ba,Qu),e($o,Hu),e($o,ui),e(ui,Ku),e($o,Ru),e(vt,Uu),$(Nn,vt,null),e(vt,Bu),$(Fn,vt,null),e(vt,Vu),$(En,vt,null),kl=!0},p(o,[v]){const pa={};v&2&&(pa.$$scope={dirty:v,ctx:o}),yo.$set(pa);const fi={};v&2&&(fi.$$scope={dirty:v,ctx:o}),Co.$set(fi);const gi={};v&2&&(gi.$$scope={dirty:v,ctx:o}),xo.$set(gi);const _i={};v&2&&(_i.$$scope={dirty:v,ctx:o}),Oo.$set(_i);const ha={};v&2&&(ha.$$scope={dirty:v,ctx:o}),Ao.$set(ha);const ki={};v&2&&(ki.$$scope={dirty:v,ctx:o}),Lo.$set(ki);const vi={};v&2&&(vi.$$scope={dirty:v,ctx:o}),Io.$set(vi);const bi={};v&2&&(bi.$$scope={dirty:v,ctx:o}),So.$set(bi);const ma={};v&2&&(ma.$$scope={dirty:v,ctx:o}),Wo.$set(ma);const wi={};v&2&&(wi.$$scope={dirty:v,ctx:o}),Qo.$set(wi);const Ti={};v&2&&(Ti.$$scope={dirty:v,ctx:o}),Ho.$set(Ti);const $i={};v&2&&($i.$$scope={dirty:v,ctx:o}),Ro.$set($i);const Mi={};v&2&&(Mi.$$scope={dirty:v,ctx:o}),Uo.$set(Mi);const yi={};v&2&&(yi.$$scope={dirty:v,ctx:o}),Vo.$set(yi);const Pi={};v&2&&(Pi.$$scope={dirty:v,ctx:o}),Xo.$set(Pi);const Ni={};v&2&&(Ni.$$scope={dirty:v,ctx:o}),Go.$set(Ni);const Ct={};v&2&&(Ct.$$scope={dirty:v,ctx:o}),Yo.$set(Ct);const Fi={};v&2&&(Fi.$$scope={dirty:v,ctx:o}),Zo.$set(Fi);const Ei={};v&2&&(Ei.$$scope={dirty:v,ctx:o}),en.$set(Ei);const zi={};v&2&&(zi.$$scope={dirty:v,ctx:o}),on.$set(zi);const ua={};v&2&&(ua.$$scope={dirty:v,ctx:o}),nn.$set(ua);const qi={};v&2&&(qi.$$scope={dirty:v,ctx:o}),sn.$set(qi);const fa={};v&2&&(fa.$$scope={dirty:v,ctx:o}),rn.$set(fa);const Ci={};v&2&&(Ci.$$scope={dirty:v,ctx:o}),ln.$set(Ci);const xi={};v&2&&(xi.$$scope={dirty:v,ctx:o}),dn.$set(xi);const ji={};v&2&&(ji.$$scope={dirty:v,ctx:o}),cn.$set(ji);const xt={};v&2&&(xt.$$scope={dirty:v,ctx:o}),hn.$set(xt);const jt={};v&2&&(jt.$$scope={dirty:v,ctx:o}),mn.$set(jt);const Oi={};v&2&&(Oi.$$scope={dirty:v,ctx:o}),un.$set(Oi);const Ai={};v&2&&(Ai.$$scope={dirty:v,ctx:o}),fn.$set(Ai);const Li={};v&2&&(Li.$$scope={dirty:v,ctx:o}),_n.$set(Li);const Mo={};v&2&&(Mo.$$scope={dirty:v,ctx:o}),kn.$set(Mo);const Di={};v&2&&(Di.$$scope={dirty:v,ctx:o}),vn.$set(Di);const Ii={};v&2&&(Ii.$$scope={dirty:v,ctx:o}),wn.$set(Ii);const ga={};v&2&&(ga.$$scope={dirty:v,ctx:o}),Tn.$set(ga);const Si={};v&2&&(Si.$$scope={dirty:v,ctx:o}),$n.$set(Si);const Wi={};v&2&&(Wi.$$scope={dirty:v,ctx:o}),Mn.$set(Wi);const Qi={};v&2&&(Qi.$$scope={dirty:v,ctx:o}),Pn.$set(Qi);const ht={};v&2&&(ht.$$scope={dirty:v,ctx:o}),Nn.$set(ht);const _a={};v&2&&(_a.$$scope={dirty:v,ctx:o}),Fn.$set(_a);const Hi={};v&2&&(Hi.$$scope={dirty:v,ctx:o}),En.$set(Hi)},i(o){kl||(M(d.$$.fragment,o),M(N.$$.fragment,o),M(F.$$.fragment,o),M(Oe.$$.fragment,o),M(yo.$$.fragment,o),M(On.$$.fragment,o),M(An.$$.fragment,o),M(Dn.$$.fragment,o),M(Sn.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(Kn.$$.fragment,o),M(Rn.$$.fragment,o),M(Vn.$$.fragment,o),M(Xn.$$.fragment,o),M(Gn.$$.fragment,o),M(es.$$.fragment,o),M(Co.$$.fragment,o),M(xo.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(ns.$$.fragment,o),M(Oo.$$.fragment,o),M(Ao.$$.fragment,o),M(Lo.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(ds.$$.fragment,o),M(Io.$$.fragment,o),M(So.$$.fragment,o),M(Wo.$$.fragment,o),M(Qo.$$.fragment,o),M(Ho.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(fs.$$.fragment,o),M(Ro.$$.fragment,o),M(Uo.$$.fragment,o),M(gs.$$.fragment,o),M(_s.$$.fragment,o),M(ws.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(Ts.$$.fragment,o),M($s.$$.fragment,o),M(Ns.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(Fs.$$.fragment,o),M(Es.$$.fragment,o),M(on.$$.fragment,o),M(xs.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(js.$$.fragment,o),M(Os.$$.fragment,o),M(rn.$$.fragment,o),M(Ss.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(Ws.$$.fragment,o),M(Qs.$$.fragment,o),M(hn.$$.fragment,o),M(Us.$$.fragment,o),M(mn.$$.fragment,o),M(un.$$.fragment,o),M(fn.$$.fragment,o),M(Bs.$$.fragment,o),M(Vs.$$.fragment,o),M(_n.$$.fragment,o),M(Ys.$$.fragment,o),M(kn.$$.fragment,o),M(vn.$$.fragment,o),M(Zs.$$.fragment,o),M(ea.$$.fragment,o),M(wn.$$.fragment,o),M(sa.$$.fragment,o),M(Tn.$$.fragment,o),M($n.$$.fragment,o),M(Mn.$$.fragment,o),M(aa.$$.fragment,o),M(ra.$$.fragment,o),M(Pn.$$.fragment,o),M(ca.$$.fragment,o),M(Nn.$$.fragment,o),M(Fn.$$.fragment,o),M(En.$$.fragment,o),kl=!0)},o(o){y(d.$$.fragment,o),y(N.$$.fragment,o),y(F.$$.fragment,o),y(Oe.$$.fragment,o),y(yo.$$.fragment,o),y(On.$$.fragment,o),y(An.$$.fragment,o),y(Dn.$$.fragment,o),y(Sn.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(Kn.$$.fragment,o),y(Rn.$$.fragment,o),y(Vn.$$.fragment,o),y(Xn.$$.fragment,o),y(Gn.$$.fragment,o),y(es.$$.fragment,o),y(Co.$$.fragment,o),y(xo.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Lo.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(ds.$$.fragment,o),y(Io.$$.fragment,o),y(So.$$.fragment,o),y(Wo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ho.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(fs.$$.fragment,o),y(Ro.$$.fragment,o),y(Uo.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(ws.$$.fragment,o),y(Vo.$$.fragment,o),y(Xo.$$.fragment,o),y(Go.$$.fragment,o),y(Ts.$$.fragment,o),y($s.$$.fragment,o),y(Ns.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(Fs.$$.fragment,o),y(Es.$$.fragment,o),y(on.$$.fragment,o),y(xs.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(js.$$.fragment,o),y(Os.$$.fragment,o),y(rn.$$.fragment,o),y(Ss.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(Ws.$$.fragment,o),y(Qs.$$.fragment,o),y(hn.$$.fragment,o),y(Us.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(Bs.$$.fragment,o),y(Vs.$$.fragment,o),y(_n.$$.fragment,o),y(Ys.$$.fragment,o),y(kn.$$.fragment,o),y(vn.$$.fragment,o),y(Zs.$$.fragment,o),y(ea.$$.fragment,o),y(wn.$$.fragment,o),y(sa.$$.fragment,o),y(Tn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(aa.$$.fragment,o),y(ra.$$.fragment,o),y(Pn.$$.fragment,o),y(ca.$$.fragment,o),y(Nn.$$.fragment,o),y(Fn.$$.fragment,o),y(En.$$.fragment,o),kl=!1},d(o){t(l),o&&t(g),o&&t(c),P(d),o&&t(he),o&&t(L),P(N),o&&t(me),o&&t(S),o&&t(ue),o&&t(Q),o&&t(fe),o&&t(H),o&&t(ge),o&&t(ee),o&&t(_e),o&&t(K),o&&t(ke),o&&t(R),o&&t(ve),o&&t(W),o&&t(A),o&&t(se),P(F),o&&t(Qe),o&&t(E),P(Oe),P(yo),o&&t(Ki),o&&t(Vt),P(On),o&&t(Ri),o&&t(Ze),P(An),P(Dn),P(Sn),P(Qn),P(Hn),o&&t(Ui),o&&t(Xt),P(Kn),o&&t(Bi),o&&t(wt),P(Rn),P(Vn),o&&t(Vi),o&&t(Gt),P(Xn),o&&t(Xi),o&&t(it),P(Gn),P(es),P(Co),P(xo),o&&t(Gi),o&&t(Yt),P(ts),o&&t(Ji),o&&t(Zt),P(os),P(ns),P(Oo),P(Ao),P(Lo),o&&t(Yi),o&&t(to),P(ss),o&&t(Zi),o&&t(lt),P(as),P(ds),P(Io),P(So),P(Wo),P(Qo),P(Ho),o&&t(el),o&&t(no),P(cs),o&&t(tl),o&&t(dt),P(ps),P(fs),P(Ro),P(Uo),o&&t(ol),o&&t(ao),P(gs),o&&t(nl),o&&t(ct),P(_s),P(ws),P(Vo),P(Xo),P(Go),o&&t(sl),o&&t(io),P(Ts),o&&t(al),o&&t(pt),P($s),P(Ns),P(Yo),P(Zo),P(en),o&&t(rl),o&&t(po),P(Fs),o&&t(il),o&&t(et),P(Es),P(on),P(xs),P(nn),P(sn),o&&t(ll),o&&t(mo),P(js),o&&t(dl),o&&t(tt),P(Os),P(rn),P(Ss),P(ln),P(dn),P(cn),o&&t(cl),o&&t(fo),P(Ws),o&&t(pl),o&&t(ot),P(Qs),P(hn),P(Us),P(mn),P(un),P(fn),o&&t(hl),o&&t(_o),P(Bs),o&&t(ml),o&&t(nt),P(Vs),P(_n),P(Ys),P(kn),P(vn),o&&t(ul),o&&t(vo),P(Zs),o&&t(fl),o&&t(st),P(ea),P(wn),P(sa),P(Tn),P($n),P(Mn),o&&t(gl),o&&t(wo),P(aa),o&&t(_l),o&&t(at),P(ra),P(Pn),P(ca),P(Nn),P(Fn),P(En)}}}const K_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function R_(z){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Jg{constructor(l){super();Yg(this,l,R_,H_,Zg,{})}}export{Y_ as default,K_ as metadata};
