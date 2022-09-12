import{S as Jg,i as Yg,s as Zg,e as a,k as m,w,t as n,M as e_,c as r,d as t,m as h,a as i,x as T,h as s,b as k,G as e,g as _,y as $,q as M,o as y,B as P,v as t_,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function o_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetModel, MPNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=n("Examples:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Examples:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function n_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function s_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function a_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function r_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function i_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function l_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function d_(z){let l,g,c,u,v;return u=new We({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of single-label classification:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function c_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function p_(z){let l,g,c,u,v;return u=new We({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function m_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function h_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function u_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function f_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function g_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function __(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function k_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function b_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function v_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function w_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function T_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function $_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function M_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function y_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function P_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function N_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function F_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function E_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function z_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function q_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function C_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function x_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function j_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function O_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function A_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function L_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function D_(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function I_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),L=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a("code"),Te=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),$e=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),Me=n("fit()"),ue=n(" and "),Q=a("code"),ye=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),H=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),K=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),R=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),A=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var He=i(c);u=s(He,"transformers"),He.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=h(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Ke=i(q);ve=s(Ke,"having all inputs as keyword arguments (like PyTorch models), or"),Ke.forEach(t),me=h(ne),L=r(ne,"LI",{});var Qe=i(L);ae=s(Qe,"having all inputs as a list, tuple or dict in the first positional argument."),Qe.forEach(t),ne.forEach(t),te=h(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=r(E,"CODE",{});var Oe=i(U);Te=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Re=i(S);$e=s(Re,"model.fit()"),Re.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);Me=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),Q=r(E,"CODE",{});var Ue=i(Q);ye=s(Ue,"predict()"),Ue.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),H=r(E,"CODE",{});var Le=i(H);Pe=s(Le,"Functional"),Le.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(f),C=r(f,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),K=r(G,"CODE",{});var De=i(K);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),R=r(G,"CODE",{});var Be=i(R);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Ae=i(V);de=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(f),O=r(f,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),A=r(Y,"A",{href:!0,rel:!0});var Ge=i(A);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(A,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,me),e(p,L),e(L,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,U),e(U,Te),e(N,he),e(N,S),e(S,$e),e(N,le),e(N,B),e(B,Me),e(N,ue),e(N,Q),e(Q,ye),e(N,fe),e(N,H),e(H,Pe),e(N,ge),_(f,ee,F),_(f,C,F),e(C,j),e(j,_e),e(j,K),e(K,Ne),e(j,ke),e(j,R),e(R,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(f,Z,F),_(f,O,F),e(O,xe),e(O,A),e(A,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(C),f&&t(Z),f&&t(O)}}}function S_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function W_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),$(u,d,p),v=!0},p:Se,i(d){v||(M(u.$$.fragment,d),v=!0)},o(d){y(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function Q_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){$(l,c,u),g=!0},p:Se,i(c){g||(M(l.$$.fragment,c),g=!0)},o(c){y(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function H_(z){let l,g,c,u,v,d,p,q,ve,me,L,ae,te,N,we,U,Te,he,S,$e,le,B,Me,ue,Q,ye,fe,H,Pe,ge,ee,C,j,_e,K,Ne,ke,R,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,A,se,re,f,F,He,ne,Ke,Qe,E,Oe,Re,pe,Ue,Le,I,G,De,Be,J,Ae,Ve,je,Xe,Y,Ge,ka,dd,cd,ba,pd,md,hd,yo,Ki,Vt,Po,dr,On,ud,cr,fd,Ri,Ze,An,gd,Ln,_d,va,kd,bd,vd,Ot,Dn,wd,pr,Td,$d,In,wa,Md,mr,yd,Pd,Ta,Nd,hr,Fd,Ed,No,Sn,zd,Wn,qd,ur,Cd,xd,jd,Fo,Qn,Od,fr,Ad,Ld,$a,Hn,Ui,Xt,Eo,gr,Kn,Dd,_r,Id,Bi,wt,Rn,Sd,Un,Wd,kr,Qd,Hd,Kd,Bn,Rd,Ma,Ud,Bd,Vd,zo,Vn,Xd,br,Gd,Vi,Gt,qo,vr,Xn,Jd,wr,Yd,Xi,it,Gn,Zd,Tr,ec,tc,Jn,oc,ya,nc,sc,ac,Yn,rc,Zn,ic,lc,dc,Tt,es,cc,Jt,pc,Pa,mc,hc,$r,uc,fc,gc,Co,_c,xo,Gi,Yt,jo,Mr,ts,kc,yr,bc,Ji,Zt,os,vc,ht,ns,wc,eo,Tc,Na,$c,Mc,Pr,yc,Pc,Nc,Oo,Fc,Ao,Ec,Lo,Yi,to,Do,Nr,ss,zc,Fr,qc,Zi,lt,as,Cc,Er,xc,jc,rs,Oc,Fa,Ac,Lc,Dc,is,Ic,ls,Sc,Wc,Qc,Je,ds,Hc,oo,Kc,Ea,Rc,Uc,zr,Bc,Vc,Xc,Io,Gc,So,Jc,Wo,Yc,Qo,Zc,Ho,el,no,Ko,qr,cs,ep,Cr,tp,tl,dt,ps,op,xr,np,sp,ms,ap,za,rp,ip,lp,hs,dp,us,cp,pp,mp,$t,fs,hp,so,up,qa,fp,gp,jr,_p,kp,bp,Ro,vp,Uo,ol,ao,Bo,Or,gs,wp,Ar,Tp,nl,ct,_s,$p,Lr,Mp,yp,ks,Pp,Ca,Np,Fp,Ep,bs,zp,vs,qp,Cp,xp,ut,ws,jp,ro,Op,xa,Ap,Lp,Dr,Dp,Ip,Sp,Vo,Wp,Xo,Qp,Go,sl,io,Jo,Ir,Ts,Hp,Sr,Kp,al,pt,$s,Rp,lo,Up,Wr,Bp,Vp,Qr,Xp,Gp,Jp,Ms,Yp,ja,Zp,em,tm,ys,om,Ps,nm,sm,am,ft,Ns,rm,co,im,Oa,lm,dm,Hr,cm,pm,mm,Yo,hm,Zo,um,en,rl,po,tn,Kr,Fs,fm,Rr,gm,il,et,Es,_m,Ur,km,bm,zs,vm,Aa,wm,Tm,$m,qs,Mm,Cs,ym,Pm,Nm,on,Fm,Mt,xs,Em,mo,zm,La,qm,Cm,Br,xm,jm,Om,nn,Am,sn,ll,ho,an,Vr,js,Lm,Xr,Dm,dl,tt,Os,Im,As,Sm,Gr,Wm,Qm,Hm,Ls,Km,Da,Rm,Um,Bm,Ds,Vm,Is,Xm,Gm,Jm,rn,Ym,gt,Ss,Zm,uo,eh,Ia,th,oh,Jr,nh,sh,ah,ln,rh,dn,ih,cn,cl,fo,pn,Yr,Ws,lh,Zr,dh,pl,ot,Qs,ch,ei,ph,mh,Hs,hh,Sa,uh,fh,gh,Ks,_h,Rs,kh,bh,vh,mn,wh,_t,Us,Th,go,$h,Wa,Mh,yh,ti,Ph,Nh,Fh,hn,Eh,un,zh,fn,ml,_o,gn,oi,Bs,qh,ni,Ch,hl,nt,Vs,xh,si,jh,Oh,Xs,Ah,Qa,Lh,Dh,Ih,Gs,Sh,Js,Wh,Qh,Hh,_n,Kh,yt,Ys,Rh,ko,Uh,Ha,Bh,Vh,ai,Xh,Gh,Jh,kn,Yh,bn,ul,bo,vn,ri,Zs,Zh,ii,eu,fl,st,ea,tu,li,ou,nu,ta,su,Ka,au,ru,iu,oa,lu,na,du,cu,pu,wn,mu,kt,sa,hu,vo,uu,Ra,fu,gu,di,_u,ku,bu,Tn,vu,$n,wu,Mn,gl,wo,yn,ci,aa,Tu,pi,$u,_l,at,ra,Mu,To,yu,mi,Pu,Nu,hi,Fu,Eu,zu,ia,qu,Ua,Cu,xu,ju,la,Ou,da,Au,Lu,Du,Pn,Iu,bt,ca,Su,$o,Wu,Ba,Qu,Hu,ui,Ku,Ru,Uu,Nn,Bu,Fn,Vu,En,kl;return d=new rt({}),N=new rt({}),F=new rt({}),Oe=new ie({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),yo=new Ie({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:z}}}),On=new rt({}),An=new ie({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Dn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L231",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Hn=new ie({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),Kn=new rt({}),Rn=new ie({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),Vn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new rt({}),Gn=new ie({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L483"}}),es=new ie({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L512",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Co=new Ye({props:{$$slots:{default:[n_]},$$scope:{ctx:z}}}),xo=new Ie({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[s_]},$$scope:{ctx:z}}}),ts=new rt({}),os=new ie({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L576"}}),ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L595",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Ye({props:{$$slots:{default:[a_]},$$scope:{ctx:z}}}),Ao=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[r_]},$$scope:{ctx:z}}}),Lo=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:z}}}),ss=new rt({}),as=new ie({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L685"}}),ds=new ie({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ye({props:{$$slots:{default:[l_]},$$scope:{ctx:z}}}),So=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:z}}}),Wo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:z}}}),Qo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:z}}}),Ho=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[m_]},$$scope:{ctx:z}}}),cs=new rt({}),ps=new ie({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),fs=new ie({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Ye({props:{$$slots:{default:[h_]},$$scope:{ctx:z}}}),Uo=new Ie({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[u_]},$$scope:{ctx:z}}}),gs=new rt({}),_s=new ie({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),ws=new ie({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L886",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ye({props:{$$slots:{default:[f_]},$$scope:{ctx:z}}}),Xo=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:z}}}),Go=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:z}}}),Ts=new rt({}),$s=new ie({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L971"}}),Ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Ye({props:{$$slots:{default:[k_]},$$scope:{ctx:z}}}),Zo=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[b_]},$$scope:{ctx:z}}}),en=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[v_]},$$scope:{ctx:z}}}),Fs=new rt({}),Es=new ie({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L669"}}),on=new Ye({props:{$$slots:{default:[w_]},$$scope:{ctx:z}}}),xs=new ie({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L674",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Ye({props:{$$slots:{default:[T_]},$$scope:{ctx:z}}}),sn=new Ie({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[$_]},$$scope:{ctx:z}}}),js=new rt({}),Os=new ie({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L772"}}),rn=new Ye({props:{$$slots:{default:[M_]},$$scope:{ctx:z}}}),Ss=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Ye({props:{$$slots:{default:[y_]},$$scope:{ctx:z}}}),dn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[P_]},$$scope:{ctx:z}}}),cn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[N_]},$$scope:{ctx:z}}}),Ws=new rt({}),Qs=new ie({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L883"}}),mn=new Ye({props:{$$slots:{default:[F_]},$$scope:{ctx:z}}}),Us=new ie({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L894",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new Ye({props:{$$slots:{default:[E_]},$$scope:{ctx:z}}}),un=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[z_]},$$scope:{ctx:z}}}),fn=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:z}}}),Bs=new rt({}),Vs=new ie({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L964"}}),_n=new Ye({props:{$$slots:{default:[C_]},$$scope:{ctx:z}}}),Ys=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L984",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new Ye({props:{$$slots:{default:[x_]},$$scope:{ctx:z}}}),bn=new Ie({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[j_]},$$scope:{ctx:z}}}),Zs=new rt({}),ea=new ie({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1081"}}),wn=new Ye({props:{$$slots:{default:[O_]},$$scope:{ctx:z}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1095",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ye({props:{$$slots:{default:[A_]},$$scope:{ctx:z}}}),$n=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[L_]},$$scope:{ctx:z}}}),Mn=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[D_]},$$scope:{ctx:z}}}),aa=new rt({}),ra=new ie({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1164"}}),Pn=new Ye({props:{$$slots:{default:[I_]},$$scope:{ctx:z}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1177",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new Ye({props:{$$slots:{default:[S_]},$$scope:{ctx:z}}}),Fn=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:z}}}),En=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[Q_]},$$scope:{ctx:z}}}),{c(){l=a("meta"),g=m(),c=a("h1"),u=a("a"),v=a("span"),w(d.$$.fragment),p=m(),q=a("span"),ve=n("MPNet"),me=m(),L=a("h2"),ae=a("a"),te=a("span"),w(N.$$.fragment),we=m(),U=a("span"),Te=n("Overview"),he=m(),S=a("p"),$e=n("The MPNet model was proposed in "),le=a("a"),B=n("MPNet: Masked and Permuted Pre-training for Language Understanding"),Me=n(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ue=m(),Q=a("p"),ye=n(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),fe=m(),H=a("p"),Pe=n("The abstract from the paper is the following:"),ge=m(),ee=a("p"),C=a("em"),j=n(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),_e=m(),K=a("p"),Ne=n("Tips:"),ke=m(),R=a("ul"),oe=a("li"),Fe=n("MPNet doesn\u2019t have "),x=a("code"),Ee=n("token_type_ids"),V=n(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=a("code"),ze=n("tokenizer.sep_token"),X=n(" (or "),ce=a("code"),qe=n("[sep]"),D=n(")."),be=m(),W=a("p"),Ce=n("The original code can be found "),Z=a("a"),O=n("here"),xe=n("."),A=m(),se=a("h2"),re=a("a"),f=a("span"),w(F.$$.fragment),He=m(),ne=a("span"),Ke=n("MPNetConfig"),Qe=m(),E=a("div"),w(Oe.$$.fragment),Re=m(),pe=a("p"),Ue=n("This is the configuration class to store the configuration of a "),Le=a("a"),I=n("MPNetModel"),G=n(" or a "),De=a("a"),Be=n("TFMPNetModel"),J=n(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ae=a("a"),Ve=n("microsoft/mpnet-base"),je=n(" architecture."),Xe=m(),Y=a("p"),Ge=n("Configuration objects inherit from "),ka=a("a"),dd=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),ba=a("a"),pd=n("PretrainedConfig"),md=n(" for more information."),hd=m(),w(yo.$$.fragment),Ki=m(),Vt=a("h2"),Po=a("a"),dr=a("span"),w(On.$$.fragment),ud=m(),cr=a("span"),fd=n("MPNetTokenizer"),Ri=m(),Ze=a("div"),w(An.$$.fragment),gd=m(),Ln=a("p"),_d=n("This tokenizer inherits from "),va=a("a"),kd=n("BertTokenizer"),bd=n(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),vd=m(),Ot=a("div"),w(Dn.$$.fragment),wd=m(),pr=a("p"),Td=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),$d=m(),In=a("ul"),wa=a("li"),Md=n("single sequence: "),mr=a("code"),yd=n("<s> X </s>"),Pd=m(),Ta=a("li"),Nd=n("pair of sequences: "),hr=a("code"),Fd=n("<s> A </s></s> B </s>"),Ed=m(),No=a("div"),w(Sn.$$.fragment),zd=m(),Wn=a("p"),qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=a("code"),Cd=n("prepare_for_model"),xd=n(" methods."),jd=m(),Fo=a("div"),w(Qn.$$.fragment),Od=m(),fr=a("p"),Ad=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ld=m(),$a=a("div"),w(Hn.$$.fragment),Ui=m(),Xt=a("h2"),Eo=a("a"),gr=a("span"),w(Kn.$$.fragment),Dd=m(),_r=a("span"),Id=n("MPNetTokenizerFast"),Bi=m(),wt=a("div"),w(Rn.$$.fragment),Sd=m(),Un=a("p"),Wd=n("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=a("em"),Qd=n("tokenizers"),Hd=n(" library). Based on WordPiece."),Kd=m(),Bn=a("p"),Rd=n("This tokenizer inherits from "),Ma=a("a"),Ud=n("PreTrainedTokenizerFast"),Bd=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=m(),zo=a("div"),w(Vn.$$.fragment),Xd=m(),br=a("p"),Gd=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Vi=m(),Gt=a("h2"),qo=a("a"),vr=a("span"),w(Xn.$$.fragment),Jd=m(),wr=a("span"),Yd=n("MPNetModel"),Xi=m(),it=a("div"),w(Gn.$$.fragment),Zd=m(),Tr=a("p"),ec=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=m(),Jn=a("p"),oc=n("This model inherits from "),ya=a("a"),nc=n("PreTrainedModel"),sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=m(),Yn=a("p"),rc=n("This model is also a PyTorch "),Zn=a("a"),ic=n("torch.nn.Module"),lc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=m(),Tt=a("div"),w(es.$$.fragment),cc=m(),Jt=a("p"),pc=n("The "),Pa=a("a"),mc=n("MPNetModel"),hc=n(" forward method, overrides the "),$r=a("code"),uc=n("__call__"),fc=n(" special method."),gc=m(),w(Co.$$.fragment),_c=m(),w(xo.$$.fragment),Gi=m(),Yt=a("h2"),jo=a("a"),Mr=a("span"),w(ts.$$.fragment),kc=m(),yr=a("span"),bc=n("MPNetForMaskedLM"),Ji=m(),Zt=a("div"),w(os.$$.fragment),vc=m(),ht=a("div"),w(ns.$$.fragment),wc=m(),eo=a("p"),Tc=n("The "),Na=a("a"),$c=n("MPNetForMaskedLM"),Mc=n(" forward method, overrides the "),Pr=a("code"),yc=n("__call__"),Pc=n(" special method."),Nc=m(),w(Oo.$$.fragment),Fc=m(),w(Ao.$$.fragment),Ec=m(),w(Lo.$$.fragment),Yi=m(),to=a("h2"),Do=a("a"),Nr=a("span"),w(ss.$$.fragment),zc=m(),Fr=a("span"),qc=n("MPNetForSequenceClassification"),Zi=m(),lt=a("div"),w(as.$$.fragment),Cc=m(),Er=a("p"),xc=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),jc=m(),rs=a("p"),Oc=n("This model inherits from "),Fa=a("a"),Ac=n("PreTrainedModel"),Lc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=m(),is=a("p"),Ic=n("This model is also a PyTorch "),ls=a("a"),Sc=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc=m(),Je=a("div"),w(ds.$$.fragment),Hc=m(),oo=a("p"),Kc=n("The "),Ea=a("a"),Rc=n("MPNetForSequenceClassification"),Uc=n(" forward method, overrides the "),zr=a("code"),Bc=n("__call__"),Vc=n(" special method."),Xc=m(),w(Io.$$.fragment),Gc=m(),w(So.$$.fragment),Jc=m(),w(Wo.$$.fragment),Yc=m(),w(Qo.$$.fragment),Zc=m(),w(Ho.$$.fragment),el=m(),no=a("h2"),Ko=a("a"),qr=a("span"),w(cs.$$.fragment),ep=m(),Cr=a("span"),tp=n("MPNetForMultipleChoice"),tl=m(),dt=a("div"),w(ps.$$.fragment),op=m(),xr=a("p"),np=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=m(),ms=a("p"),ap=n("This model inherits from "),za=a("a"),rp=n("PreTrainedModel"),ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=m(),hs=a("p"),dp=n("This model is also a PyTorch "),us=a("a"),cp=n("torch.nn.Module"),pp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp=m(),$t=a("div"),w(fs.$$.fragment),hp=m(),so=a("p"),up=n("The "),qa=a("a"),fp=n("MPNetForMultipleChoice"),gp=n(" forward method, overrides the "),jr=a("code"),_p=n("__call__"),kp=n(" special method."),bp=m(),w(Ro.$$.fragment),vp=m(),w(Uo.$$.fragment),ol=m(),ao=a("h2"),Bo=a("a"),Or=a("span"),w(gs.$$.fragment),wp=m(),Ar=a("span"),Tp=n("MPNetForTokenClassification"),nl=m(),ct=a("div"),w(_s.$$.fragment),$p=m(),Lr=a("p"),Mp=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),yp=m(),ks=a("p"),Pp=n("This model inherits from "),Ca=a("a"),Np=n("PreTrainedModel"),Fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep=m(),bs=a("p"),zp=n("This model is also a PyTorch "),vs=a("a"),qp=n("torch.nn.Module"),Cp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp=m(),ut=a("div"),w(ws.$$.fragment),jp=m(),ro=a("p"),Op=n("The "),xa=a("a"),Ap=n("MPNetForTokenClassification"),Lp=n(" forward method, overrides the "),Dr=a("code"),Dp=n("__call__"),Ip=n(" special method."),Sp=m(),w(Vo.$$.fragment),Wp=m(),w(Xo.$$.fragment),Qp=m(),w(Go.$$.fragment),sl=m(),io=a("h2"),Jo=a("a"),Ir=a("span"),w(Ts.$$.fragment),Hp=m(),Sr=a("span"),Kp=n("MPNetForQuestionAnswering"),al=m(),pt=a("div"),w($s.$$.fragment),Rp=m(),lo=a("p"),Up=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=a("code"),Bp=n("span start logits"),Vp=n(" and "),Qr=a("code"),Xp=n("span end logits"),Gp=n(")."),Jp=m(),Ms=a("p"),Yp=n("This model inherits from "),ja=a("a"),Zp=n("PreTrainedModel"),em=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=m(),ys=a("p"),om=n("This model is also a PyTorch "),Ps=a("a"),nm=n("torch.nn.Module"),sm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=m(),ft=a("div"),w(Ns.$$.fragment),rm=m(),co=a("p"),im=n("The "),Oa=a("a"),lm=n("MPNetForQuestionAnswering"),dm=n(" forward method, overrides the "),Hr=a("code"),cm=n("__call__"),pm=n(" special method."),mm=m(),w(Yo.$$.fragment),hm=m(),w(Zo.$$.fragment),um=m(),w(en.$$.fragment),rl=m(),po=a("h2"),tn=a("a"),Kr=a("span"),w(Fs.$$.fragment),fm=m(),Rr=a("span"),gm=n("TFMPNetModel"),il=m(),et=a("div"),w(Es.$$.fragment),_m=m(),Ur=a("p"),km=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),bm=m(),zs=a("p"),vm=n("This model inherits from "),Aa=a("a"),wm=n("TFPreTrainedModel"),Tm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=m(),qs=a("p"),Mm=n("This model is also a "),Cs=a("a"),ym=n("tf.keras.Model"),Pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nm=m(),w(on.$$.fragment),Fm=m(),Mt=a("div"),w(xs.$$.fragment),Em=m(),mo=a("p"),zm=n("The "),La=a("a"),qm=n("TFMPNetModel"),Cm=n(" forward method, overrides the "),Br=a("code"),xm=n("__call__"),jm=n(" special method."),Om=m(),w(nn.$$.fragment),Am=m(),w(sn.$$.fragment),ll=m(),ho=a("h2"),an=a("a"),Vr=a("span"),w(js.$$.fragment),Lm=m(),Xr=a("span"),Dm=n("TFMPNetForMaskedLM"),dl=m(),tt=a("div"),w(Os.$$.fragment),Im=m(),As=a("p"),Sm=n("MPNet Model with a "),Gr=a("code"),Wm=n("language modeling"),Qm=n(" head on top."),Hm=m(),Ls=a("p"),Km=n("This model inherits from "),Da=a("a"),Rm=n("TFPreTrainedModel"),Um=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bm=m(),Ds=a("p"),Vm=n("This model is also a "),Is=a("a"),Xm=n("tf.keras.Model"),Gm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jm=m(),w(rn.$$.fragment),Ym=m(),gt=a("div"),w(Ss.$$.fragment),Zm=m(),uo=a("p"),eh=n("The "),Ia=a("a"),th=n("TFMPNetForMaskedLM"),oh=n(" forward method, overrides the "),Jr=a("code"),nh=n("__call__"),sh=n(" special method."),ah=m(),w(ln.$$.fragment),rh=m(),w(dn.$$.fragment),ih=m(),w(cn.$$.fragment),cl=m(),fo=a("h2"),pn=a("a"),Yr=a("span"),w(Ws.$$.fragment),lh=m(),Zr=a("span"),dh=n("TFMPNetForSequenceClassification"),pl=m(),ot=a("div"),w(Qs.$$.fragment),ch=m(),ei=a("p"),ph=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),mh=m(),Hs=a("p"),hh=n("This model inherits from "),Sa=a("a"),uh=n("TFPreTrainedModel"),fh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=m(),Ks=a("p"),_h=n("This model is also a "),Rs=a("a"),kh=n("tf.keras.Model"),bh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vh=m(),w(mn.$$.fragment),wh=m(),_t=a("div"),w(Us.$$.fragment),Th=m(),go=a("p"),$h=n("The "),Wa=a("a"),Mh=n("TFMPNetForSequenceClassification"),yh=n(" forward method, overrides the "),ti=a("code"),Ph=n("__call__"),Nh=n(" special method."),Fh=m(),w(hn.$$.fragment),Eh=m(),w(un.$$.fragment),zh=m(),w(fn.$$.fragment),ml=m(),_o=a("h2"),gn=a("a"),oi=a("span"),w(Bs.$$.fragment),qh=m(),ni=a("span"),Ch=n("TFMPNetForMultipleChoice"),hl=m(),nt=a("div"),w(Vs.$$.fragment),xh=m(),si=a("p"),jh=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Oh=m(),Xs=a("p"),Ah=n("This model inherits from "),Qa=a("a"),Lh=n("TFPreTrainedModel"),Dh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=m(),Gs=a("p"),Sh=n("This model is also a "),Js=a("a"),Wh=n("tf.keras.Model"),Qh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh=m(),w(_n.$$.fragment),Kh=m(),yt=a("div"),w(Ys.$$.fragment),Rh=m(),ko=a("p"),Uh=n("The "),Ha=a("a"),Bh=n("TFMPNetForMultipleChoice"),Vh=n(" forward method, overrides the "),ai=a("code"),Xh=n("__call__"),Gh=n(" special method."),Jh=m(),w(kn.$$.fragment),Yh=m(),w(bn.$$.fragment),ul=m(),bo=a("h2"),vn=a("a"),ri=a("span"),w(Zs.$$.fragment),Zh=m(),ii=a("span"),eu=n("TFMPNetForTokenClassification"),fl=m(),st=a("div"),w(ea.$$.fragment),tu=m(),li=a("p"),ou=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nu=m(),ta=a("p"),su=n("This model inherits from "),Ka=a("a"),au=n("TFPreTrainedModel"),ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu=m(),oa=a("p"),lu=n("This model is also a "),na=a("a"),du=n("tf.keras.Model"),cu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pu=m(),w(wn.$$.fragment),mu=m(),kt=a("div"),w(sa.$$.fragment),hu=m(),vo=a("p"),uu=n("The "),Ra=a("a"),fu=n("TFMPNetForTokenClassification"),gu=n(" forward method, overrides the "),di=a("code"),_u=n("__call__"),ku=n(" special method."),bu=m(),w(Tn.$$.fragment),vu=m(),w($n.$$.fragment),wu=m(),w(Mn.$$.fragment),gl=m(),wo=a("h2"),yn=a("a"),ci=a("span"),w(aa.$$.fragment),Tu=m(),pi=a("span"),$u=n("TFMPNetForQuestionAnswering"),_l=m(),at=a("div"),w(ra.$$.fragment),Mu=m(),To=a("p"),yu=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=a("code"),Pu=n("span start logits"),Nu=n(" and "),hi=a("code"),Fu=n("span end logits"),Eu=n(")."),zu=m(),ia=a("p"),qu=n("This model inherits from "),Ua=a("a"),Cu=n("TFPreTrainedModel"),xu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju=m(),la=a("p"),Ou=n("This model is also a "),da=a("a"),Au=n("tf.keras.Model"),Lu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=m(),w(Pn.$$.fragment),Iu=m(),bt=a("div"),w(ca.$$.fragment),Su=m(),$o=a("p"),Wu=n("The "),Ba=a("a"),Qu=n("TFMPNetForQuestionAnswering"),Hu=n(" forward method, overrides the "),ui=a("code"),Ku=n("__call__"),Ru=n(" special method."),Uu=m(),w(Nn.$$.fragment),Bu=m(),w(Fn.$$.fragment),Vu=m(),w(En.$$.fragment),this.h()},l(o){const b=e_('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var pa=i(c);u=r(pa,"A",{id:!0,class:!0,href:!0});var fi=i(u);v=r(fi,"SPAN",{});var gi=i(v);T(d.$$.fragment,gi),gi.forEach(t),fi.forEach(t),p=h(pa),q=r(pa,"SPAN",{});var _i=i(q);ve=s(_i,"MPNet"),_i.forEach(t),pa.forEach(t),me=h(o),L=r(o,"H2",{class:!0});var ma=i(L);ae=r(ma,"A",{id:!0,class:!0,href:!0});var ki=i(ae);te=r(ki,"SPAN",{});var bi=i(te);T(N.$$.fragment,bi),bi.forEach(t),ki.forEach(t),we=h(ma),U=r(ma,"SPAN",{});var vi=i(U);Te=s(vi,"Overview"),vi.forEach(t),ma.forEach(t),he=h(o),S=r(o,"P",{});var ha=i(S);$e=s(ha,"The MPNet model was proposed in "),le=r(ha,"A",{href:!0,rel:!0});var wi=i(le);B=s(wi,"MPNet: Masked and Permuted Pre-training for Language Understanding"),wi.forEach(t),Me=s(ha," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ha.forEach(t),ue=h(o),Q=r(o,"P",{});var Ti=i(Q);ye=s(Ti,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),Ti.forEach(t),fe=h(o),H=r(o,"P",{});var $i=i(H);Pe=s($i,"The abstract from the paper is the following:"),$i.forEach(t),ge=h(o),ee=r(o,"P",{});var Mi=i(ee);C=r(Mi,"EM",{});var yi=i(C);j=s(yi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),yi.forEach(t),Mi.forEach(t),_e=h(o),K=r(o,"P",{});var Pi=i(K);Ne=s(Pi,"Tips:"),Pi.forEach(t),ke=h(o),R=r(o,"UL",{});var Ni=i(R);oe=r(Ni,"LI",{});var Ct=i(oe);Fe=s(Ct,"MPNet doesn\u2019t have "),x=r(Ct,"CODE",{});var Fi=i(x);Ee=s(Fi,"token_type_ids"),Fi.forEach(t),V=s(Ct,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=r(Ct,"CODE",{});var Ei=i(de);ze=s(Ei,"tokenizer.sep_token"),Ei.forEach(t),X=s(Ct," (or "),ce=r(Ct,"CODE",{});var zi=i(ce);qe=s(zi,"[sep]"),zi.forEach(t),D=s(Ct,")."),Ct.forEach(t),Ni.forEach(t),be=h(o),W=r(o,"P",{});var ua=i(W);Ce=s(ua,"The original code can be found "),Z=r(ua,"A",{href:!0,rel:!0});var qi=i(Z);O=s(qi,"here"),qi.forEach(t),xe=s(ua,"."),ua.forEach(t),A=h(o),se=r(o,"H2",{class:!0});var fa=i(se);re=r(fa,"A",{id:!0,class:!0,href:!0});var Ci=i(re);f=r(Ci,"SPAN",{});var xi=i(f);T(F.$$.fragment,xi),xi.forEach(t),Ci.forEach(t),He=h(fa),ne=r(fa,"SPAN",{});var ji=i(ne);Ke=s(ji,"MPNetConfig"),ji.forEach(t),fa.forEach(t),Qe=h(o),E=r(o,"DIV",{class:!0});var xt=i(E);T(Oe.$$.fragment,xt),Re=h(xt),pe=r(xt,"P",{});var jt=i(pe);Ue=s(jt,"This is the configuration class to store the configuration of a "),Le=r(jt,"A",{href:!0});var Oi=i(Le);I=s(Oi,"MPNetModel"),Oi.forEach(t),G=s(jt," or a "),De=r(jt,"A",{href:!0});var Ai=i(De);Be=s(Ai,"TFMPNetModel"),Ai.forEach(t),J=s(jt,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ae=r(jt,"A",{href:!0,rel:!0});var Li=i(Ae);Ve=s(Li,"microsoft/mpnet-base"),Li.forEach(t),je=s(jt," architecture."),jt.forEach(t),Xe=h(xt),Y=r(xt,"P",{});var Mo=i(Y);Ge=s(Mo,"Configuration objects inherit from "),ka=r(Mo,"A",{href:!0});var Di=i(ka);dd=s(Di,"PretrainedConfig"),Di.forEach(t),cd=s(Mo,` and can be used to control the model outputs. Read the
documentation from `),ba=r(Mo,"A",{href:!0});var Ii=i(ba);pd=s(Ii,"PretrainedConfig"),Ii.forEach(t),md=s(Mo," for more information."),Mo.forEach(t),hd=h(xt),T(yo.$$.fragment,xt),xt.forEach(t),Ki=h(o),Vt=r(o,"H2",{class:!0});var ga=i(Vt);Po=r(ga,"A",{id:!0,class:!0,href:!0});var Si=i(Po);dr=r(Si,"SPAN",{});var Wi=i(dr);T(On.$$.fragment,Wi),Wi.forEach(t),Si.forEach(t),ud=h(ga),cr=r(ga,"SPAN",{});var Qi=i(cr);fd=s(Qi,"MPNetTokenizer"),Qi.forEach(t),ga.forEach(t),Ri=h(o),Ze=r(o,"DIV",{class:!0});var mt=i(Ze);T(An.$$.fragment,mt),gd=h(mt),Ln=r(mt,"P",{});var _a=i(Ln);_d=s(_a,"This tokenizer inherits from "),va=r(_a,"A",{href:!0});var Hi=i(va);kd=s(Hi,"BertTokenizer"),Hi.forEach(t),bd=s(_a,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),_a.forEach(t),vd=h(mt),Ot=r(mt,"DIV",{class:!0});var Va=i(Ot);T(Dn.$$.fragment,Va),wd=h(Va),pr=r(Va,"P",{});var Ju=i(pr);Td=s(Ju,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Ju.forEach(t),$d=h(Va),In=r(Va,"UL",{});var bl=i(In);wa=r(bl,"LI",{});var Xu=i(wa);Md=s(Xu,"single sequence: "),mr=r(Xu,"CODE",{});var Yu=i(mr);yd=s(Yu,"<s> X </s>"),Yu.forEach(t),Xu.forEach(t),Pd=h(bl),Ta=r(bl,"LI",{});var Gu=i(Ta);Nd=s(Gu,"pair of sequences: "),hr=r(Gu,"CODE",{});var Zu=i(hr);Fd=s(Zu,"<s> A </s></s> B </s>"),Zu.forEach(t),Gu.forEach(t),bl.forEach(t),Va.forEach(t),Ed=h(mt),No=r(mt,"DIV",{class:!0});var vl=i(No);T(Sn.$$.fragment,vl),zd=h(vl),Wn=r(vl,"P",{});var wl=i(Wn);qd=s(wl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=r(wl,"CODE",{});var ef=i(ur);Cd=s(ef,"prepare_for_model"),ef.forEach(t),xd=s(wl," methods."),wl.forEach(t),vl.forEach(t),jd=h(mt),Fo=r(mt,"DIV",{class:!0});var Tl=i(Fo);T(Qn.$$.fragment,Tl),Od=h(Tl),fr=r(Tl,"P",{});var tf=i(fr);Ad=s(tf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),tf.forEach(t),Tl.forEach(t),Ld=h(mt),$a=r(mt,"DIV",{class:!0});var of=i($a);T(Hn.$$.fragment,of),of.forEach(t),mt.forEach(t),Ui=h(o),Xt=r(o,"H2",{class:!0});var $l=i(Xt);Eo=r($l,"A",{id:!0,class:!0,href:!0});var nf=i(Eo);gr=r(nf,"SPAN",{});var sf=i(gr);T(Kn.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Dd=h($l),_r=r($l,"SPAN",{});var af=i(_r);Id=s(af,"MPNetTokenizerFast"),af.forEach(t),$l.forEach(t),Bi=h(o),wt=r(o,"DIV",{class:!0});var zn=i(wt);T(Rn.$$.fragment,zn),Sd=h(zn),Un=r(zn,"P",{});var Ml=i(Un);Wd=s(Ml,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=r(Ml,"EM",{});var rf=i(kr);Qd=s(rf,"tokenizers"),rf.forEach(t),Hd=s(Ml," library). Based on WordPiece."),Ml.forEach(t),Kd=h(zn),Bn=r(zn,"P",{});var yl=i(Bn);Rd=s(yl,"This tokenizer inherits from "),Ma=r(yl,"A",{href:!0});var lf=i(Ma);Ud=s(lf,"PreTrainedTokenizerFast"),lf.forEach(t),Bd=s(yl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yl.forEach(t),Vd=h(zn),zo=r(zn,"DIV",{class:!0});var Pl=i(zo);T(Vn.$$.fragment,Pl),Xd=h(Pl),br=r(Pl,"P",{});var df=i(br);Gd=s(df,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),df.forEach(t),Pl.forEach(t),zn.forEach(t),Vi=h(o),Gt=r(o,"H2",{class:!0});var Nl=i(Gt);qo=r(Nl,"A",{id:!0,class:!0,href:!0});var cf=i(qo);vr=r(cf,"SPAN",{});var pf=i(vr);T(Xn.$$.fragment,pf),pf.forEach(t),cf.forEach(t),Jd=h(Nl),wr=r(Nl,"SPAN",{});var mf=i(wr);Yd=s(mf,"MPNetModel"),mf.forEach(t),Nl.forEach(t),Xi=h(o),it=r(o,"DIV",{class:!0});var At=i(it);T(Gn.$$.fragment,At),Zd=h(At),Tr=r(At,"P",{});var hf=i(Tr);ec=s(hf,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),hf.forEach(t),tc=h(At),Jn=r(At,"P",{});var Fl=i(Jn);oc=s(Fl,"This model inherits from "),ya=r(Fl,"A",{href:!0});var uf=i(ya);nc=s(uf,"PreTrainedModel"),uf.forEach(t),sc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),ac=h(At),Yn=r(At,"P",{});var El=i(Yn);rc=s(El,"This model is also a PyTorch "),Zn=r(El,"A",{href:!0,rel:!0});var ff=i(Zn);ic=s(ff,"torch.nn.Module"),ff.forEach(t),lc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),dc=h(At),Tt=r(At,"DIV",{class:!0});var qn=i(Tt);T(es.$$.fragment,qn),cc=h(qn),Jt=r(qn,"P",{});var Xa=i(Jt);pc=s(Xa,"The "),Pa=r(Xa,"A",{href:!0});var gf=i(Pa);mc=s(gf,"MPNetModel"),gf.forEach(t),hc=s(Xa," forward method, overrides the "),$r=r(Xa,"CODE",{});var _f=i($r);uc=s(_f,"__call__"),_f.forEach(t),fc=s(Xa," special method."),Xa.forEach(t),gc=h(qn),T(Co.$$.fragment,qn),_c=h(qn),T(xo.$$.fragment,qn),qn.forEach(t),At.forEach(t),Gi=h(o),Yt=r(o,"H2",{class:!0});var zl=i(Yt);jo=r(zl,"A",{id:!0,class:!0,href:!0});var kf=i(jo);Mr=r(kf,"SPAN",{});var bf=i(Mr);T(ts.$$.fragment,bf),bf.forEach(t),kf.forEach(t),kc=h(zl),yr=r(zl,"SPAN",{});var vf=i(yr);bc=s(vf,"MPNetForMaskedLM"),vf.forEach(t),zl.forEach(t),Ji=h(o),Zt=r(o,"DIV",{class:!0});var ql=i(Zt);T(os.$$.fragment,ql),vc=h(ql),ht=r(ql,"DIV",{class:!0});var Lt=i(ht);T(ns.$$.fragment,Lt),wc=h(Lt),eo=r(Lt,"P",{});var Ga=i(eo);Tc=s(Ga,"The "),Na=r(Ga,"A",{href:!0});var wf=i(Na);$c=s(wf,"MPNetForMaskedLM"),wf.forEach(t),Mc=s(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var Tf=i(Pr);yc=s(Tf,"__call__"),Tf.forEach(t),Pc=s(Ga," special method."),Ga.forEach(t),Nc=h(Lt),T(Oo.$$.fragment,Lt),Fc=h(Lt),T(Ao.$$.fragment,Lt),Ec=h(Lt),T(Lo.$$.fragment,Lt),Lt.forEach(t),ql.forEach(t),Yi=h(o),to=r(o,"H2",{class:!0});var Cl=i(to);Do=r(Cl,"A",{id:!0,class:!0,href:!0});var $f=i(Do);Nr=r($f,"SPAN",{});var Mf=i(Nr);T(ss.$$.fragment,Mf),Mf.forEach(t),$f.forEach(t),zc=h(Cl),Fr=r(Cl,"SPAN",{});var yf=i(Fr);qc=s(yf,"MPNetForSequenceClassification"),yf.forEach(t),Cl.forEach(t),Zi=h(o),lt=r(o,"DIV",{class:!0});var Dt=i(lt);T(as.$$.fragment,Dt),Cc=h(Dt),Er=r(Dt,"P",{});var Pf=i(Er);xc=s(Pf,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Pf.forEach(t),jc=h(Dt),rs=r(Dt,"P",{});var xl=i(rs);Oc=s(xl,"This model inherits from "),Fa=r(xl,"A",{href:!0});var Nf=i(Fa);Ac=s(Nf,"PreTrainedModel"),Nf.forEach(t),Lc=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Dc=h(Dt),is=r(Dt,"P",{});var jl=i(is);Ic=s(jl,"This model is also a PyTorch "),ls=r(jl,"A",{href:!0,rel:!0});var Ff=i(ls);Sc=s(Ff,"torch.nn.Module"),Ff.forEach(t),Wc=s(jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jl.forEach(t),Qc=h(Dt),Je=r(Dt,"DIV",{class:!0});var vt=i(Je);T(ds.$$.fragment,vt),Hc=h(vt),oo=r(vt,"P",{});var Ja=i(oo);Kc=s(Ja,"The "),Ea=r(Ja,"A",{href:!0});var Ef=i(Ea);Rc=s(Ef,"MPNetForSequenceClassification"),Ef.forEach(t),Uc=s(Ja," forward method, overrides the "),zr=r(Ja,"CODE",{});var zf=i(zr);Bc=s(zf,"__call__"),zf.forEach(t),Vc=s(Ja," special method."),Ja.forEach(t),Xc=h(vt),T(Io.$$.fragment,vt),Gc=h(vt),T(So.$$.fragment,vt),Jc=h(vt),T(Wo.$$.fragment,vt),Yc=h(vt),T(Qo.$$.fragment,vt),Zc=h(vt),T(Ho.$$.fragment,vt),vt.forEach(t),Dt.forEach(t),el=h(o),no=r(o,"H2",{class:!0});var Ol=i(no);Ko=r(Ol,"A",{id:!0,class:!0,href:!0});var qf=i(Ko);qr=r(qf,"SPAN",{});var Cf=i(qr);T(cs.$$.fragment,Cf),Cf.forEach(t),qf.forEach(t),ep=h(Ol),Cr=r(Ol,"SPAN",{});var xf=i(Cr);tp=s(xf,"MPNetForMultipleChoice"),xf.forEach(t),Ol.forEach(t),tl=h(o),dt=r(o,"DIV",{class:!0});var It=i(dt);T(ps.$$.fragment,It),op=h(It),xr=r(It,"P",{});var jf=i(xr);np=s(jf,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jf.forEach(t),sp=h(It),ms=r(It,"P",{});var Al=i(ms);ap=s(Al,"This model inherits from "),za=r(Al,"A",{href:!0});var Of=i(za);rp=s(Of,"PreTrainedModel"),Of.forEach(t),ip=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),lp=h(It),hs=r(It,"P",{});var Ll=i(hs);dp=s(Ll,"This model is also a PyTorch "),us=r(Ll,"A",{href:!0,rel:!0});var Af=i(us);cp=s(Af,"torch.nn.Module"),Af.forEach(t),pp=s(Ll,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll.forEach(t),mp=h(It),$t=r(It,"DIV",{class:!0});var Cn=i($t);T(fs.$$.fragment,Cn),hp=h(Cn),so=r(Cn,"P",{});var Ya=i(so);up=s(Ya,"The "),qa=r(Ya,"A",{href:!0});var Lf=i(qa);fp=s(Lf,"MPNetForMultipleChoice"),Lf.forEach(t),gp=s(Ya," forward method, overrides the "),jr=r(Ya,"CODE",{});var Df=i(jr);_p=s(Df,"__call__"),Df.forEach(t),kp=s(Ya," special method."),Ya.forEach(t),bp=h(Cn),T(Ro.$$.fragment,Cn),vp=h(Cn),T(Uo.$$.fragment,Cn),Cn.forEach(t),It.forEach(t),ol=h(o),ao=r(o,"H2",{class:!0});var Dl=i(ao);Bo=r(Dl,"A",{id:!0,class:!0,href:!0});var If=i(Bo);Or=r(If,"SPAN",{});var Sf=i(Or);T(gs.$$.fragment,Sf),Sf.forEach(t),If.forEach(t),wp=h(Dl),Ar=r(Dl,"SPAN",{});var Wf=i(Ar);Tp=s(Wf,"MPNetForTokenClassification"),Wf.forEach(t),Dl.forEach(t),nl=h(o),ct=r(o,"DIV",{class:!0});var St=i(ct);T(_s.$$.fragment,St),$p=h(St),Lr=r(St,"P",{});var Qf=i(Lr);Mp=s(Qf,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qf.forEach(t),yp=h(St),ks=r(St,"P",{});var Il=i(ks);Pp=s(Il,"This model inherits from "),Ca=r(Il,"A",{href:!0});var Hf=i(Ca);Np=s(Hf,"PreTrainedModel"),Hf.forEach(t),Fp=s(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Ep=h(St),bs=r(St,"P",{});var Sl=i(bs);zp=s(Sl,"This model is also a PyTorch "),vs=r(Sl,"A",{href:!0,rel:!0});var Kf=i(vs);qp=s(Kf,"torch.nn.Module"),Kf.forEach(t),Cp=s(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),xp=h(St),ut=r(St,"DIV",{class:!0});var Wt=i(ut);T(ws.$$.fragment,Wt),jp=h(Wt),ro=r(Wt,"P",{});var Za=i(ro);Op=s(Za,"The "),xa=r(Za,"A",{href:!0});var Rf=i(xa);Ap=s(Rf,"MPNetForTokenClassification"),Rf.forEach(t),Lp=s(Za," forward method, overrides the "),Dr=r(Za,"CODE",{});var Uf=i(Dr);Dp=s(Uf,"__call__"),Uf.forEach(t),Ip=s(Za," special method."),Za.forEach(t),Sp=h(Wt),T(Vo.$$.fragment,Wt),Wp=h(Wt),T(Xo.$$.fragment,Wt),Qp=h(Wt),T(Go.$$.fragment,Wt),Wt.forEach(t),St.forEach(t),sl=h(o),io=r(o,"H2",{class:!0});var Wl=i(io);Jo=r(Wl,"A",{id:!0,class:!0,href:!0});var Bf=i(Jo);Ir=r(Bf,"SPAN",{});var Vf=i(Ir);T(Ts.$$.fragment,Vf),Vf.forEach(t),Bf.forEach(t),Hp=h(Wl),Sr=r(Wl,"SPAN",{});var Xf=i(Sr);Kp=s(Xf,"MPNetForQuestionAnswering"),Xf.forEach(t),Wl.forEach(t),al=h(o),pt=r(o,"DIV",{class:!0});var Qt=i(pt);T($s.$$.fragment,Qt),Rp=h(Qt),lo=r(Qt,"P",{});var er=i(lo);Up=s(er,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=r(er,"CODE",{});var Gf=i(Wr);Bp=s(Gf,"span start logits"),Gf.forEach(t),Vp=s(er," and "),Qr=r(er,"CODE",{});var Jf=i(Qr);Xp=s(Jf,"span end logits"),Jf.forEach(t),Gp=s(er,")."),er.forEach(t),Jp=h(Qt),Ms=r(Qt,"P",{});var Ql=i(Ms);Yp=s(Ql,"This model inherits from "),ja=r(Ql,"A",{href:!0});var Yf=i(ja);Zp=s(Yf,"PreTrainedModel"),Yf.forEach(t),em=s(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),tm=h(Qt),ys=r(Qt,"P",{});var Hl=i(ys);om=s(Hl,"This model is also a PyTorch "),Ps=r(Hl,"A",{href:!0,rel:!0});var Zf=i(Ps);nm=s(Zf,"torch.nn.Module"),Zf.forEach(t),sm=s(Hl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hl.forEach(t),am=h(Qt),ft=r(Qt,"DIV",{class:!0});var Ht=i(ft);T(Ns.$$.fragment,Ht),rm=h(Ht),co=r(Ht,"P",{});var tr=i(co);im=s(tr,"The "),Oa=r(tr,"A",{href:!0});var eg=i(Oa);lm=s(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dm=s(tr," forward method, overrides the "),Hr=r(tr,"CODE",{});var tg=i(Hr);cm=s(tg,"__call__"),tg.forEach(t),pm=s(tr," special method."),tr.forEach(t),mm=h(Ht),T(Yo.$$.fragment,Ht),hm=h(Ht),T(Zo.$$.fragment,Ht),um=h(Ht),T(en.$$.fragment,Ht),Ht.forEach(t),Qt.forEach(t),rl=h(o),po=r(o,"H2",{class:!0});var Kl=i(po);tn=r(Kl,"A",{id:!0,class:!0,href:!0});var og=i(tn);Kr=r(og,"SPAN",{});var ng=i(Kr);T(Fs.$$.fragment,ng),ng.forEach(t),og.forEach(t),fm=h(Kl),Rr=r(Kl,"SPAN",{});var sg=i(Rr);gm=s(sg,"TFMPNetModel"),sg.forEach(t),Kl.forEach(t),il=h(o),et=r(o,"DIV",{class:!0});var Pt=i(et);T(Es.$$.fragment,Pt),_m=h(Pt),Ur=r(Pt,"P",{});var ag=i(Ur);km=s(ag,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),bm=h(Pt),zs=r(Pt,"P",{});var Rl=i(zs);vm=s(Rl,"This model inherits from "),Aa=r(Rl,"A",{href:!0});var rg=i(Aa);wm=s(rg,"TFPreTrainedModel"),rg.forEach(t),Tm=s(Rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rl.forEach(t),$m=h(Pt),qs=r(Pt,"P",{});var Ul=i(qs);Mm=s(Ul,"This model is also a "),Cs=r(Ul,"A",{href:!0,rel:!0});var ig=i(Cs);ym=s(ig,"tf.keras.Model"),ig.forEach(t),Pm=s(Ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ul.forEach(t),Nm=h(Pt),T(on.$$.fragment,Pt),Fm=h(Pt),Mt=r(Pt,"DIV",{class:!0});var xn=i(Mt);T(xs.$$.fragment,xn),Em=h(xn),mo=r(xn,"P",{});var or=i(mo);zm=s(or,"The "),La=r(or,"A",{href:!0});var lg=i(La);qm=s(lg,"TFMPNetModel"),lg.forEach(t),Cm=s(or," forward method, overrides the "),Br=r(or,"CODE",{});var dg=i(Br);xm=s(dg,"__call__"),dg.forEach(t),jm=s(or," special method."),or.forEach(t),Om=h(xn),T(nn.$$.fragment,xn),Am=h(xn),T(sn.$$.fragment,xn),xn.forEach(t),Pt.forEach(t),ll=h(o),ho=r(o,"H2",{class:!0});var Bl=i(ho);an=r(Bl,"A",{id:!0,class:!0,href:!0});var cg=i(an);Vr=r(cg,"SPAN",{});var pg=i(Vr);T(js.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Lm=h(Bl),Xr=r(Bl,"SPAN",{});var mg=i(Xr);Dm=s(mg,"TFMPNetForMaskedLM"),mg.forEach(t),Bl.forEach(t),dl=h(o),tt=r(o,"DIV",{class:!0});var Nt=i(tt);T(Os.$$.fragment,Nt),Im=h(Nt),As=r(Nt,"P",{});var Vl=i(As);Sm=s(Vl,"MPNet Model with a "),Gr=r(Vl,"CODE",{});var hg=i(Gr);Wm=s(hg,"language modeling"),hg.forEach(t),Qm=s(Vl," head on top."),Vl.forEach(t),Hm=h(Nt),Ls=r(Nt,"P",{});var Xl=i(Ls);Km=s(Xl,"This model inherits from "),Da=r(Xl,"A",{href:!0});var ug=i(Da);Rm=s(ug,"TFPreTrainedModel"),ug.forEach(t),Um=s(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Bm=h(Nt),Ds=r(Nt,"P",{});var Gl=i(Ds);Vm=s(Gl,"This model is also a "),Is=r(Gl,"A",{href:!0,rel:!0});var fg=i(Is);Xm=s(fg,"tf.keras.Model"),fg.forEach(t),Gm=s(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Jm=h(Nt),T(rn.$$.fragment,Nt),Ym=h(Nt),gt=r(Nt,"DIV",{class:!0});var Kt=i(gt);T(Ss.$$.fragment,Kt),Zm=h(Kt),uo=r(Kt,"P",{});var nr=i(uo);eh=s(nr,"The "),Ia=r(nr,"A",{href:!0});var gg=i(Ia);th=s(gg,"TFMPNetForMaskedLM"),gg.forEach(t),oh=s(nr," forward method, overrides the "),Jr=r(nr,"CODE",{});var _g=i(Jr);nh=s(_g,"__call__"),_g.forEach(t),sh=s(nr," special method."),nr.forEach(t),ah=h(Kt),T(ln.$$.fragment,Kt),rh=h(Kt),T(dn.$$.fragment,Kt),ih=h(Kt),T(cn.$$.fragment,Kt),Kt.forEach(t),Nt.forEach(t),cl=h(o),fo=r(o,"H2",{class:!0});var Jl=i(fo);pn=r(Jl,"A",{id:!0,class:!0,href:!0});var kg=i(pn);Yr=r(kg,"SPAN",{});var bg=i(Yr);T(Ws.$$.fragment,bg),bg.forEach(t),kg.forEach(t),lh=h(Jl),Zr=r(Jl,"SPAN",{});var vg=i(Zr);dh=s(vg,"TFMPNetForSequenceClassification"),vg.forEach(t),Jl.forEach(t),pl=h(o),ot=r(o,"DIV",{class:!0});var Ft=i(ot);T(Qs.$$.fragment,Ft),ch=h(Ft),ei=r(Ft,"P",{});var wg=i(ei);ph=s(wg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wg.forEach(t),mh=h(Ft),Hs=r(Ft,"P",{});var Yl=i(Hs);hh=s(Yl,"This model inherits from "),Sa=r(Yl,"A",{href:!0});var Tg=i(Sa);uh=s(Tg,"TFPreTrainedModel"),Tg.forEach(t),fh=s(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(t),gh=h(Ft),Ks=r(Ft,"P",{});var Zl=i(Ks);_h=s(Zl,"This model is also a "),Rs=r(Zl,"A",{href:!0,rel:!0});var $g=i(Rs);kh=s($g,"tf.keras.Model"),$g.forEach(t),bh=s(Zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zl.forEach(t),vh=h(Ft),T(mn.$$.fragment,Ft),wh=h(Ft),_t=r(Ft,"DIV",{class:!0});var Rt=i(_t);T(Us.$$.fragment,Rt),Th=h(Rt),go=r(Rt,"P",{});var sr=i(go);$h=s(sr,"The "),Wa=r(sr,"A",{href:!0});var Mg=i(Wa);Mh=s(Mg,"TFMPNetForSequenceClassification"),Mg.forEach(t),yh=s(sr," forward method, overrides the "),ti=r(sr,"CODE",{});var yg=i(ti);Ph=s(yg,"__call__"),yg.forEach(t),Nh=s(sr," special method."),sr.forEach(t),Fh=h(Rt),T(hn.$$.fragment,Rt),Eh=h(Rt),T(un.$$.fragment,Rt),zh=h(Rt),T(fn.$$.fragment,Rt),Rt.forEach(t),Ft.forEach(t),ml=h(o),_o=r(o,"H2",{class:!0});var ed=i(_o);gn=r(ed,"A",{id:!0,class:!0,href:!0});var Pg=i(gn);oi=r(Pg,"SPAN",{});var Ng=i(oi);T(Bs.$$.fragment,Ng),Ng.forEach(t),Pg.forEach(t),qh=h(ed),ni=r(ed,"SPAN",{});var Fg=i(ni);Ch=s(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),ed.forEach(t),hl=h(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);T(Vs.$$.fragment,Et),xh=h(Et),si=r(Et,"P",{});var Eg=i(si);jh=s(Eg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),Oh=h(Et),Xs=r(Et,"P",{});var td=i(Xs);Ah=s(td,"This model inherits from "),Qa=r(td,"A",{href:!0});var zg=i(Qa);Lh=s(zg,"TFPreTrainedModel"),zg.forEach(t),Dh=s(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Ih=h(Et),Gs=r(Et,"P",{});var od=i(Gs);Sh=s(od,"This model is also a "),Js=r(od,"A",{href:!0,rel:!0});var qg=i(Js);Wh=s(qg,"tf.keras.Model"),qg.forEach(t),Qh=s(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),Hh=h(Et),T(_n.$$.fragment,Et),Kh=h(Et),yt=r(Et,"DIV",{class:!0});var jn=i(yt);T(Ys.$$.fragment,jn),Rh=h(jn),ko=r(jn,"P",{});var ar=i(ko);Uh=s(ar,"The "),Ha=r(ar,"A",{href:!0});var Cg=i(Ha);Bh=s(Cg,"TFMPNetForMultipleChoice"),Cg.forEach(t),Vh=s(ar," forward method, overrides the "),ai=r(ar,"CODE",{});var xg=i(ai);Xh=s(xg,"__call__"),xg.forEach(t),Gh=s(ar," special method."),ar.forEach(t),Jh=h(jn),T(kn.$$.fragment,jn),Yh=h(jn),T(bn.$$.fragment,jn),jn.forEach(t),Et.forEach(t),ul=h(o),bo=r(o,"H2",{class:!0});var nd=i(bo);vn=r(nd,"A",{id:!0,class:!0,href:!0});var jg=i(vn);ri=r(jg,"SPAN",{});var Og=i(ri);T(Zs.$$.fragment,Og),Og.forEach(t),jg.forEach(t),Zh=h(nd),ii=r(nd,"SPAN",{});var Ag=i(ii);eu=s(Ag,"TFMPNetForTokenClassification"),Ag.forEach(t),nd.forEach(t),fl=h(o),st=r(o,"DIV",{class:!0});var zt=i(st);T(ea.$$.fragment,zt),tu=h(zt),li=r(zt,"P",{});var Lg=i(li);ou=s(Lg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Lg.forEach(t),nu=h(zt),ta=r(zt,"P",{});var sd=i(ta);su=s(sd,"This model inherits from "),Ka=r(sd,"A",{href:!0});var Dg=i(Ka);au=s(Dg,"TFPreTrainedModel"),Dg.forEach(t),ru=s(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),iu=h(zt),oa=r(zt,"P",{});var ad=i(oa);lu=s(ad,"This model is also a "),na=r(ad,"A",{href:!0,rel:!0});var Ig=i(na);du=s(Ig,"tf.keras.Model"),Ig.forEach(t),cu=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),pu=h(zt),T(wn.$$.fragment,zt),mu=h(zt),kt=r(zt,"DIV",{class:!0});var Ut=i(kt);T(sa.$$.fragment,Ut),hu=h(Ut),vo=r(Ut,"P",{});var rr=i(vo);uu=s(rr,"The "),Ra=r(rr,"A",{href:!0});var Sg=i(Ra);fu=s(Sg,"TFMPNetForTokenClassification"),Sg.forEach(t),gu=s(rr," forward method, overrides the "),di=r(rr,"CODE",{});var Wg=i(di);_u=s(Wg,"__call__"),Wg.forEach(t),ku=s(rr," special method."),rr.forEach(t),bu=h(Ut),T(Tn.$$.fragment,Ut),vu=h(Ut),T($n.$$.fragment,Ut),wu=h(Ut),T(Mn.$$.fragment,Ut),Ut.forEach(t),zt.forEach(t),gl=h(o),wo=r(o,"H2",{class:!0});var rd=i(wo);yn=r(rd,"A",{id:!0,class:!0,href:!0});var Qg=i(yn);ci=r(Qg,"SPAN",{});var Hg=i(ci);T(aa.$$.fragment,Hg),Hg.forEach(t),Qg.forEach(t),Tu=h(rd),pi=r(rd,"SPAN",{});var Kg=i(pi);$u=s(Kg,"TFMPNetForQuestionAnswering"),Kg.forEach(t),rd.forEach(t),_l=h(o),at=r(o,"DIV",{class:!0});var qt=i(at);T(ra.$$.fragment,qt),Mu=h(qt),To=r(qt,"P",{});var ir=i(To);yu=s(ir,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=r(ir,"CODE",{});var Rg=i(mi);Pu=s(Rg,"span start logits"),Rg.forEach(t),Nu=s(ir," and "),hi=r(ir,"CODE",{});var Ug=i(hi);Fu=s(Ug,"span end logits"),Ug.forEach(t),Eu=s(ir,")."),ir.forEach(t),zu=h(qt),ia=r(qt,"P",{});var id=i(ia);qu=s(id,"This model inherits from "),Ua=r(id,"A",{href:!0});var Bg=i(Ua);Cu=s(Bg,"TFPreTrainedModel"),Bg.forEach(t),xu=s(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),ju=h(qt),la=r(qt,"P",{});var ld=i(la);Ou=s(ld,"This model is also a "),da=r(ld,"A",{href:!0,rel:!0});var Vg=i(da);Au=s(Vg,"tf.keras.Model"),Vg.forEach(t),Lu=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Du=h(qt),T(Pn.$$.fragment,qt),Iu=h(qt),bt=r(qt,"DIV",{class:!0});var Bt=i(bt);T(ca.$$.fragment,Bt),Su=h(Bt),$o=r(Bt,"P",{});var lr=i($o);Wu=s(lr,"The "),Ba=r(lr,"A",{href:!0});var Xg=i(Ba);Qu=s(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Hu=s(lr," forward method, overrides the "),ui=r(lr,"CODE",{});var Gg=i(ui);Ku=s(Gg,"__call__"),Gg.forEach(t),Ru=s(lr," special method."),lr.forEach(t),Uu=h(Bt),T(Nn.$$.fragment,Bt),Bu=h(Bt),T(Fn.$$.fragment,Bt),Vu=h(Bt),T(En.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),this.h()},h(){k(l,"name","hf:doc:metadata"),k(l,"content",JSON.stringify(K_)),k(u,"id","mpnet"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#mpnet"),k(c,"class","relative group"),k(ae,"id","overview"),k(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ae,"href","#overview"),k(L,"class","relative group"),k(le,"href","https://arxiv.org/abs/2004.09297"),k(le,"rel","nofollow"),k(Z,"href","https://github.com/microsoft/MPNet"),k(Z,"rel","nofollow"),k(re,"id","transformers.MPNetConfig"),k(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(re,"href","#transformers.MPNetConfig"),k(se,"class","relative group"),k(Le,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),k(De,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Ae,"href","https://huggingface.co/microsoft/mpnet-base"),k(Ae,"rel","nofollow"),k(ka,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(ba,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.MPNetTokenizer"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.MPNetTokenizer"),k(Vt,"class","relative group"),k(va,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k($a,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.MPNetTokenizerFast"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.MPNetTokenizerFast"),k(Xt,"class","relative group"),k(Ma,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),k(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.MPNetModel"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.MPNetModel"),k(Gt,"class","relative group"),k(ya,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Zn,"rel","nofollow"),k(Pa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),k(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(jo,"id","transformers.MPNetForMaskedLM"),k(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(jo,"href","#transformers.MPNetForMaskedLM"),k(Yt,"class","relative group"),k(Na,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),k(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.MPNetForSequenceClassification"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.MPNetForSequenceClassification"),k(to,"class","relative group"),k(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ls,"rel","nofollow"),k(Ea,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ko,"id","transformers.MPNetForMultipleChoice"),k(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Ko,"href","#transformers.MPNetForMultipleChoice"),k(no,"class","relative group"),k(za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(us,"rel","nofollow"),k(qa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),k($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bo,"id","transformers.MPNetForTokenClassification"),k(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Bo,"href","#transformers.MPNetForTokenClassification"),k(ao,"class","relative group"),k(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(vs,"rel","nofollow"),k(xa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.MPNetForQuestionAnswering"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.MPNetForQuestionAnswering"),k(io,"class","relative group"),k(ja,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(Oa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tn,"id","transformers.TFMPNetModel"),k(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(tn,"href","#transformers.TFMPNetModel"),k(po,"class","relative group"),k(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Cs,"rel","nofollow"),k(La,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFMPNetForMaskedLM"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFMPNetForMaskedLM"),k(ho,"class","relative group"),k(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Is,"rel","nofollow"),k(Ia,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),k(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pn,"id","transformers.TFMPNetForSequenceClassification"),k(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pn,"href","#transformers.TFMPNetForSequenceClassification"),k(fo,"class","relative group"),k(Sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rs,"rel","nofollow"),k(Wa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(gn,"id","transformers.TFMPNetForMultipleChoice"),k(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(gn,"href","#transformers.TFMPNetForMultipleChoice"),k(_o,"class","relative group"),k(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Js,"rel","nofollow"),k(Ha,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),k(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(vn,"id","transformers.TFMPNetForTokenClassification"),k(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(vn,"href","#transformers.TFMPNetForTokenClassification"),k(bo,"class","relative group"),k(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(na,"rel","nofollow"),k(Ra,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),k(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(yn,"id","transformers.TFMPNetForQuestionAnswering"),k(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(yn,"href","#transformers.TFMPNetForQuestionAnswering"),k(wo,"class","relative group"),k(Ua,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(da,"rel","nofollow"),k(Ba,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),k(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,u),e(u,v),$(d,v,null),e(c,p),e(c,q),e(q,ve),_(o,me,b),_(o,L,b),e(L,ae),e(ae,te),$(N,te,null),e(L,we),e(L,U),e(U,Te),_(o,he,b),_(o,S,b),e(S,$e),e(S,le),e(le,B),e(S,Me),_(o,ue,b),_(o,Q,b),e(Q,ye),_(o,fe,b),_(o,H,b),e(H,Pe),_(o,ge,b),_(o,ee,b),e(ee,C),e(C,j),_(o,_e,b),_(o,K,b),e(K,Ne),_(o,ke,b),_(o,R,b),e(R,oe),e(oe,Fe),e(oe,x),e(x,Ee),e(oe,V),e(oe,de),e(de,ze),e(oe,X),e(oe,ce),e(ce,qe),e(oe,D),_(o,be,b),_(o,W,b),e(W,Ce),e(W,Z),e(Z,O),e(W,xe),_(o,A,b),_(o,se,b),e(se,re),e(re,f),$(F,f,null),e(se,He),e(se,ne),e(ne,Ke),_(o,Qe,b),_(o,E,b),$(Oe,E,null),e(E,Re),e(E,pe),e(pe,Ue),e(pe,Le),e(Le,I),e(pe,G),e(pe,De),e(De,Be),e(pe,J),e(pe,Ae),e(Ae,Ve),e(pe,je),e(E,Xe),e(E,Y),e(Y,Ge),e(Y,ka),e(ka,dd),e(Y,cd),e(Y,ba),e(ba,pd),e(Y,md),e(E,hd),$(yo,E,null),_(o,Ki,b),_(o,Vt,b),e(Vt,Po),e(Po,dr),$(On,dr,null),e(Vt,ud),e(Vt,cr),e(cr,fd),_(o,Ri,b),_(o,Ze,b),$(An,Ze,null),e(Ze,gd),e(Ze,Ln),e(Ln,_d),e(Ln,va),e(va,kd),e(Ln,bd),e(Ze,vd),e(Ze,Ot),$(Dn,Ot,null),e(Ot,wd),e(Ot,pr),e(pr,Td),e(Ot,$d),e(Ot,In),e(In,wa),e(wa,Md),e(wa,mr),e(mr,yd),e(In,Pd),e(In,Ta),e(Ta,Nd),e(Ta,hr),e(hr,Fd),e(Ze,Ed),e(Ze,No),$(Sn,No,null),e(No,zd),e(No,Wn),e(Wn,qd),e(Wn,ur),e(ur,Cd),e(Wn,xd),e(Ze,jd),e(Ze,Fo),$(Qn,Fo,null),e(Fo,Od),e(Fo,fr),e(fr,Ad),e(Ze,Ld),e(Ze,$a),$(Hn,$a,null),_(o,Ui,b),_(o,Xt,b),e(Xt,Eo),e(Eo,gr),$(Kn,gr,null),e(Xt,Dd),e(Xt,_r),e(_r,Id),_(o,Bi,b),_(o,wt,b),$(Rn,wt,null),e(wt,Sd),e(wt,Un),e(Un,Wd),e(Un,kr),e(kr,Qd),e(Un,Hd),e(wt,Kd),e(wt,Bn),e(Bn,Rd),e(Bn,Ma),e(Ma,Ud),e(Bn,Bd),e(wt,Vd),e(wt,zo),$(Vn,zo,null),e(zo,Xd),e(zo,br),e(br,Gd),_(o,Vi,b),_(o,Gt,b),e(Gt,qo),e(qo,vr),$(Xn,vr,null),e(Gt,Jd),e(Gt,wr),e(wr,Yd),_(o,Xi,b),_(o,it,b),$(Gn,it,null),e(it,Zd),e(it,Tr),e(Tr,ec),e(it,tc),e(it,Jn),e(Jn,oc),e(Jn,ya),e(ya,nc),e(Jn,sc),e(it,ac),e(it,Yn),e(Yn,rc),e(Yn,Zn),e(Zn,ic),e(Yn,lc),e(it,dc),e(it,Tt),$(es,Tt,null),e(Tt,cc),e(Tt,Jt),e(Jt,pc),e(Jt,Pa),e(Pa,mc),e(Jt,hc),e(Jt,$r),e($r,uc),e(Jt,fc),e(Tt,gc),$(Co,Tt,null),e(Tt,_c),$(xo,Tt,null),_(o,Gi,b),_(o,Yt,b),e(Yt,jo),e(jo,Mr),$(ts,Mr,null),e(Yt,kc),e(Yt,yr),e(yr,bc),_(o,Ji,b),_(o,Zt,b),$(os,Zt,null),e(Zt,vc),e(Zt,ht),$(ns,ht,null),e(ht,wc),e(ht,eo),e(eo,Tc),e(eo,Na),e(Na,$c),e(eo,Mc),e(eo,Pr),e(Pr,yc),e(eo,Pc),e(ht,Nc),$(Oo,ht,null),e(ht,Fc),$(Ao,ht,null),e(ht,Ec),$(Lo,ht,null),_(o,Yi,b),_(o,to,b),e(to,Do),e(Do,Nr),$(ss,Nr,null),e(to,zc),e(to,Fr),e(Fr,qc),_(o,Zi,b),_(o,lt,b),$(as,lt,null),e(lt,Cc),e(lt,Er),e(Er,xc),e(lt,jc),e(lt,rs),e(rs,Oc),e(rs,Fa),e(Fa,Ac),e(rs,Lc),e(lt,Dc),e(lt,is),e(is,Ic),e(is,ls),e(ls,Sc),e(is,Wc),e(lt,Qc),e(lt,Je),$(ds,Je,null),e(Je,Hc),e(Je,oo),e(oo,Kc),e(oo,Ea),e(Ea,Rc),e(oo,Uc),e(oo,zr),e(zr,Bc),e(oo,Vc),e(Je,Xc),$(Io,Je,null),e(Je,Gc),$(So,Je,null),e(Je,Jc),$(Wo,Je,null),e(Je,Yc),$(Qo,Je,null),e(Je,Zc),$(Ho,Je,null),_(o,el,b),_(o,no,b),e(no,Ko),e(Ko,qr),$(cs,qr,null),e(no,ep),e(no,Cr),e(Cr,tp),_(o,tl,b),_(o,dt,b),$(ps,dt,null),e(dt,op),e(dt,xr),e(xr,np),e(dt,sp),e(dt,ms),e(ms,ap),e(ms,za),e(za,rp),e(ms,ip),e(dt,lp),e(dt,hs),e(hs,dp),e(hs,us),e(us,cp),e(hs,pp),e(dt,mp),e(dt,$t),$(fs,$t,null),e($t,hp),e($t,so),e(so,up),e(so,qa),e(qa,fp),e(so,gp),e(so,jr),e(jr,_p),e(so,kp),e($t,bp),$(Ro,$t,null),e($t,vp),$(Uo,$t,null),_(o,ol,b),_(o,ao,b),e(ao,Bo),e(Bo,Or),$(gs,Or,null),e(ao,wp),e(ao,Ar),e(Ar,Tp),_(o,nl,b),_(o,ct,b),$(_s,ct,null),e(ct,$p),e(ct,Lr),e(Lr,Mp),e(ct,yp),e(ct,ks),e(ks,Pp),e(ks,Ca),e(Ca,Np),e(ks,Fp),e(ct,Ep),e(ct,bs),e(bs,zp),e(bs,vs),e(vs,qp),e(bs,Cp),e(ct,xp),e(ct,ut),$(ws,ut,null),e(ut,jp),e(ut,ro),e(ro,Op),e(ro,xa),e(xa,Ap),e(ro,Lp),e(ro,Dr),e(Dr,Dp),e(ro,Ip),e(ut,Sp),$(Vo,ut,null),e(ut,Wp),$(Xo,ut,null),e(ut,Qp),$(Go,ut,null),_(o,sl,b),_(o,io,b),e(io,Jo),e(Jo,Ir),$(Ts,Ir,null),e(io,Hp),e(io,Sr),e(Sr,Kp),_(o,al,b),_(o,pt,b),$($s,pt,null),e(pt,Rp),e(pt,lo),e(lo,Up),e(lo,Wr),e(Wr,Bp),e(lo,Vp),e(lo,Qr),e(Qr,Xp),e(lo,Gp),e(pt,Jp),e(pt,Ms),e(Ms,Yp),e(Ms,ja),e(ja,Zp),e(Ms,em),e(pt,tm),e(pt,ys),e(ys,om),e(ys,Ps),e(Ps,nm),e(ys,sm),e(pt,am),e(pt,ft),$(Ns,ft,null),e(ft,rm),e(ft,co),e(co,im),e(co,Oa),e(Oa,lm),e(co,dm),e(co,Hr),e(Hr,cm),e(co,pm),e(ft,mm),$(Yo,ft,null),e(ft,hm),$(Zo,ft,null),e(ft,um),$(en,ft,null),_(o,rl,b),_(o,po,b),e(po,tn),e(tn,Kr),$(Fs,Kr,null),e(po,fm),e(po,Rr),e(Rr,gm),_(o,il,b),_(o,et,b),$(Es,et,null),e(et,_m),e(et,Ur),e(Ur,km),e(et,bm),e(et,zs),e(zs,vm),e(zs,Aa),e(Aa,wm),e(zs,Tm),e(et,$m),e(et,qs),e(qs,Mm),e(qs,Cs),e(Cs,ym),e(qs,Pm),e(et,Nm),$(on,et,null),e(et,Fm),e(et,Mt),$(xs,Mt,null),e(Mt,Em),e(Mt,mo),e(mo,zm),e(mo,La),e(La,qm),e(mo,Cm),e(mo,Br),e(Br,xm),e(mo,jm),e(Mt,Om),$(nn,Mt,null),e(Mt,Am),$(sn,Mt,null),_(o,ll,b),_(o,ho,b),e(ho,an),e(an,Vr),$(js,Vr,null),e(ho,Lm),e(ho,Xr),e(Xr,Dm),_(o,dl,b),_(o,tt,b),$(Os,tt,null),e(tt,Im),e(tt,As),e(As,Sm),e(As,Gr),e(Gr,Wm),e(As,Qm),e(tt,Hm),e(tt,Ls),e(Ls,Km),e(Ls,Da),e(Da,Rm),e(Ls,Um),e(tt,Bm),e(tt,Ds),e(Ds,Vm),e(Ds,Is),e(Is,Xm),e(Ds,Gm),e(tt,Jm),$(rn,tt,null),e(tt,Ym),e(tt,gt),$(Ss,gt,null),e(gt,Zm),e(gt,uo),e(uo,eh),e(uo,Ia),e(Ia,th),e(uo,oh),e(uo,Jr),e(Jr,nh),e(uo,sh),e(gt,ah),$(ln,gt,null),e(gt,rh),$(dn,gt,null),e(gt,ih),$(cn,gt,null),_(o,cl,b),_(o,fo,b),e(fo,pn),e(pn,Yr),$(Ws,Yr,null),e(fo,lh),e(fo,Zr),e(Zr,dh),_(o,pl,b),_(o,ot,b),$(Qs,ot,null),e(ot,ch),e(ot,ei),e(ei,ph),e(ot,mh),e(ot,Hs),e(Hs,hh),e(Hs,Sa),e(Sa,uh),e(Hs,fh),e(ot,gh),e(ot,Ks),e(Ks,_h),e(Ks,Rs),e(Rs,kh),e(Ks,bh),e(ot,vh),$(mn,ot,null),e(ot,wh),e(ot,_t),$(Us,_t,null),e(_t,Th),e(_t,go),e(go,$h),e(go,Wa),e(Wa,Mh),e(go,yh),e(go,ti),e(ti,Ph),e(go,Nh),e(_t,Fh),$(hn,_t,null),e(_t,Eh),$(un,_t,null),e(_t,zh),$(fn,_t,null),_(o,ml,b),_(o,_o,b),e(_o,gn),e(gn,oi),$(Bs,oi,null),e(_o,qh),e(_o,ni),e(ni,Ch),_(o,hl,b),_(o,nt,b),$(Vs,nt,null),e(nt,xh),e(nt,si),e(si,jh),e(nt,Oh),e(nt,Xs),e(Xs,Ah),e(Xs,Qa),e(Qa,Lh),e(Xs,Dh),e(nt,Ih),e(nt,Gs),e(Gs,Sh),e(Gs,Js),e(Js,Wh),e(Gs,Qh),e(nt,Hh),$(_n,nt,null),e(nt,Kh),e(nt,yt),$(Ys,yt,null),e(yt,Rh),e(yt,ko),e(ko,Uh),e(ko,Ha),e(Ha,Bh),e(ko,Vh),e(ko,ai),e(ai,Xh),e(ko,Gh),e(yt,Jh),$(kn,yt,null),e(yt,Yh),$(bn,yt,null),_(o,ul,b),_(o,bo,b),e(bo,vn),e(vn,ri),$(Zs,ri,null),e(bo,Zh),e(bo,ii),e(ii,eu),_(o,fl,b),_(o,st,b),$(ea,st,null),e(st,tu),e(st,li),e(li,ou),e(st,nu),e(st,ta),e(ta,su),e(ta,Ka),e(Ka,au),e(ta,ru),e(st,iu),e(st,oa),e(oa,lu),e(oa,na),e(na,du),e(oa,cu),e(st,pu),$(wn,st,null),e(st,mu),e(st,kt),$(sa,kt,null),e(kt,hu),e(kt,vo),e(vo,uu),e(vo,Ra),e(Ra,fu),e(vo,gu),e(vo,di),e(di,_u),e(vo,ku),e(kt,bu),$(Tn,kt,null),e(kt,vu),$($n,kt,null),e(kt,wu),$(Mn,kt,null),_(o,gl,b),_(o,wo,b),e(wo,yn),e(yn,ci),$(aa,ci,null),e(wo,Tu),e(wo,pi),e(pi,$u),_(o,_l,b),_(o,at,b),$(ra,at,null),e(at,Mu),e(at,To),e(To,yu),e(To,mi),e(mi,Pu),e(To,Nu),e(To,hi),e(hi,Fu),e(To,Eu),e(at,zu),e(at,ia),e(ia,qu),e(ia,Ua),e(Ua,Cu),e(ia,xu),e(at,ju),e(at,la),e(la,Ou),e(la,da),e(da,Au),e(la,Lu),e(at,Du),$(Pn,at,null),e(at,Iu),e(at,bt),$(ca,bt,null),e(bt,Su),e(bt,$o),e($o,Wu),e($o,Ba),e(Ba,Qu),e($o,Hu),e($o,ui),e(ui,Ku),e($o,Ru),e(bt,Uu),$(Nn,bt,null),e(bt,Bu),$(Fn,bt,null),e(bt,Vu),$(En,bt,null),kl=!0},p(o,[b]){const pa={};b&2&&(pa.$$scope={dirty:b,ctx:o}),yo.$set(pa);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),Co.$set(fi);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),xo.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Oo.$set(_i);const ma={};b&2&&(ma.$$scope={dirty:b,ctx:o}),Ao.$set(ma);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Lo.$set(ki);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Io.$set(bi);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),So.$set(vi);const ha={};b&2&&(ha.$$scope={dirty:b,ctx:o}),Wo.$set(ha);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),Qo.$set(wi);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Ho.$set(Ti);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Ro.$set($i);const Mi={};b&2&&(Mi.$$scope={dirty:b,ctx:o}),Uo.$set(Mi);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),Vo.$set(yi);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Xo.$set(Pi);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Go.$set(Ni);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),Yo.$set(Ct);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),Zo.$set(Fi);const Ei={};b&2&&(Ei.$$scope={dirty:b,ctx:o}),en.$set(Ei);const zi={};b&2&&(zi.$$scope={dirty:b,ctx:o}),on.$set(zi);const ua={};b&2&&(ua.$$scope={dirty:b,ctx:o}),nn.$set(ua);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:o}),sn.$set(qi);const fa={};b&2&&(fa.$$scope={dirty:b,ctx:o}),rn.$set(fa);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),ln.$set(Ci);const xi={};b&2&&(xi.$$scope={dirty:b,ctx:o}),dn.$set(xi);const ji={};b&2&&(ji.$$scope={dirty:b,ctx:o}),cn.$set(ji);const xt={};b&2&&(xt.$$scope={dirty:b,ctx:o}),mn.$set(xt);const jt={};b&2&&(jt.$$scope={dirty:b,ctx:o}),hn.$set(jt);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),un.$set(Oi);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),fn.$set(Ai);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),_n.$set(Li);const Mo={};b&2&&(Mo.$$scope={dirty:b,ctx:o}),kn.$set(Mo);const Di={};b&2&&(Di.$$scope={dirty:b,ctx:o}),bn.$set(Di);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),wn.$set(Ii);const ga={};b&2&&(ga.$$scope={dirty:b,ctx:o}),Tn.$set(ga);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),$n.$set(Si);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),Mn.$set(Wi);const Qi={};b&2&&(Qi.$$scope={dirty:b,ctx:o}),Pn.$set(Qi);const mt={};b&2&&(mt.$$scope={dirty:b,ctx:o}),Nn.$set(mt);const _a={};b&2&&(_a.$$scope={dirty:b,ctx:o}),Fn.$set(_a);const Hi={};b&2&&(Hi.$$scope={dirty:b,ctx:o}),En.$set(Hi)},i(o){kl||(M(d.$$.fragment,o),M(N.$$.fragment,o),M(F.$$.fragment,o),M(Oe.$$.fragment,o),M(yo.$$.fragment,o),M(On.$$.fragment,o),M(An.$$.fragment,o),M(Dn.$$.fragment,o),M(Sn.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(Kn.$$.fragment,o),M(Rn.$$.fragment,o),M(Vn.$$.fragment,o),M(Xn.$$.fragment,o),M(Gn.$$.fragment,o),M(es.$$.fragment,o),M(Co.$$.fragment,o),M(xo.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(ns.$$.fragment,o),M(Oo.$$.fragment,o),M(Ao.$$.fragment,o),M(Lo.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(ds.$$.fragment,o),M(Io.$$.fragment,o),M(So.$$.fragment,o),M(Wo.$$.fragment,o),M(Qo.$$.fragment,o),M(Ho.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(fs.$$.fragment,o),M(Ro.$$.fragment,o),M(Uo.$$.fragment,o),M(gs.$$.fragment,o),M(_s.$$.fragment,o),M(ws.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(Ts.$$.fragment,o),M($s.$$.fragment,o),M(Ns.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(Fs.$$.fragment,o),M(Es.$$.fragment,o),M(on.$$.fragment,o),M(xs.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(js.$$.fragment,o),M(Os.$$.fragment,o),M(rn.$$.fragment,o),M(Ss.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(Ws.$$.fragment,o),M(Qs.$$.fragment,o),M(mn.$$.fragment,o),M(Us.$$.fragment,o),M(hn.$$.fragment,o),M(un.$$.fragment,o),M(fn.$$.fragment,o),M(Bs.$$.fragment,o),M(Vs.$$.fragment,o),M(_n.$$.fragment,o),M(Ys.$$.fragment,o),M(kn.$$.fragment,o),M(bn.$$.fragment,o),M(Zs.$$.fragment,o),M(ea.$$.fragment,o),M(wn.$$.fragment,o),M(sa.$$.fragment,o),M(Tn.$$.fragment,o),M($n.$$.fragment,o),M(Mn.$$.fragment,o),M(aa.$$.fragment,o),M(ra.$$.fragment,o),M(Pn.$$.fragment,o),M(ca.$$.fragment,o),M(Nn.$$.fragment,o),M(Fn.$$.fragment,o),M(En.$$.fragment,o),kl=!0)},o(o){y(d.$$.fragment,o),y(N.$$.fragment,o),y(F.$$.fragment,o),y(Oe.$$.fragment,o),y(yo.$$.fragment,o),y(On.$$.fragment,o),y(An.$$.fragment,o),y(Dn.$$.fragment,o),y(Sn.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(Kn.$$.fragment,o),y(Rn.$$.fragment,o),y(Vn.$$.fragment,o),y(Xn.$$.fragment,o),y(Gn.$$.fragment,o),y(es.$$.fragment,o),y(Co.$$.fragment,o),y(xo.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Lo.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(ds.$$.fragment,o),y(Io.$$.fragment,o),y(So.$$.fragment,o),y(Wo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ho.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(fs.$$.fragment,o),y(Ro.$$.fragment,o),y(Uo.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(ws.$$.fragment,o),y(Vo.$$.fragment,o),y(Xo.$$.fragment,o),y(Go.$$.fragment,o),y(Ts.$$.fragment,o),y($s.$$.fragment,o),y(Ns.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(Fs.$$.fragment,o),y(Es.$$.fragment,o),y(on.$$.fragment,o),y(xs.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(js.$$.fragment,o),y(Os.$$.fragment,o),y(rn.$$.fragment,o),y(Ss.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(Ws.$$.fragment,o),y(Qs.$$.fragment,o),y(mn.$$.fragment,o),y(Us.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(Bs.$$.fragment,o),y(Vs.$$.fragment,o),y(_n.$$.fragment,o),y(Ys.$$.fragment,o),y(kn.$$.fragment,o),y(bn.$$.fragment,o),y(Zs.$$.fragment,o),y(ea.$$.fragment,o),y(wn.$$.fragment,o),y(sa.$$.fragment,o),y(Tn.$$.fragment,o),y($n.$$.fragment,o),y(Mn.$$.fragment,o),y(aa.$$.fragment,o),y(ra.$$.fragment,o),y(Pn.$$.fragment,o),y(ca.$$.fragment,o),y(Nn.$$.fragment,o),y(Fn.$$.fragment,o),y(En.$$.fragment,o),kl=!1},d(o){t(l),o&&t(g),o&&t(c),P(d),o&&t(me),o&&t(L),P(N),o&&t(he),o&&t(S),o&&t(ue),o&&t(Q),o&&t(fe),o&&t(H),o&&t(ge),o&&t(ee),o&&t(_e),o&&t(K),o&&t(ke),o&&t(R),o&&t(be),o&&t(W),o&&t(A),o&&t(se),P(F),o&&t(Qe),o&&t(E),P(Oe),P(yo),o&&t(Ki),o&&t(Vt),P(On),o&&t(Ri),o&&t(Ze),P(An),P(Dn),P(Sn),P(Qn),P(Hn),o&&t(Ui),o&&t(Xt),P(Kn),o&&t(Bi),o&&t(wt),P(Rn),P(Vn),o&&t(Vi),o&&t(Gt),P(Xn),o&&t(Xi),o&&t(it),P(Gn),P(es),P(Co),P(xo),o&&t(Gi),o&&t(Yt),P(ts),o&&t(Ji),o&&t(Zt),P(os),P(ns),P(Oo),P(Ao),P(Lo),o&&t(Yi),o&&t(to),P(ss),o&&t(Zi),o&&t(lt),P(as),P(ds),P(Io),P(So),P(Wo),P(Qo),P(Ho),o&&t(el),o&&t(no),P(cs),o&&t(tl),o&&t(dt),P(ps),P(fs),P(Ro),P(Uo),o&&t(ol),o&&t(ao),P(gs),o&&t(nl),o&&t(ct),P(_s),P(ws),P(Vo),P(Xo),P(Go),o&&t(sl),o&&t(io),P(Ts),o&&t(al),o&&t(pt),P($s),P(Ns),P(Yo),P(Zo),P(en),o&&t(rl),o&&t(po),P(Fs),o&&t(il),o&&t(et),P(Es),P(on),P(xs),P(nn),P(sn),o&&t(ll),o&&t(ho),P(js),o&&t(dl),o&&t(tt),P(Os),P(rn),P(Ss),P(ln),P(dn),P(cn),o&&t(cl),o&&t(fo),P(Ws),o&&t(pl),o&&t(ot),P(Qs),P(mn),P(Us),P(hn),P(un),P(fn),o&&t(ml),o&&t(_o),P(Bs),o&&t(hl),o&&t(nt),P(Vs),P(_n),P(Ys),P(kn),P(bn),o&&t(ul),o&&t(bo),P(Zs),o&&t(fl),o&&t(st),P(ea),P(wn),P(sa),P(Tn),P($n),P(Mn),o&&t(gl),o&&t(wo),P(aa),o&&t(_l),o&&t(at),P(ra),P(Pn),P(ca),P(Nn),P(Fn),P(En)}}}const K_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function R_(z){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Jg{constructor(l){super();Yg(this,l,R_,H_,Zg,{})}}export{Y_ as default,K_ as metadata};
