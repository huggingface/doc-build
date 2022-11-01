import{S as Jg,i as Yg,s as Zg,e as a,k as h,w,t as n,M as e_,c as r,d as t,m,a as i,x as T,h as s,b as k,G as e,g as _,y,q as $,o as M,B as P,v as t_,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function o_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetModel, MPNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=n("Examples:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Examples:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function n_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function a_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function i_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function l_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function c_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function p_(z){let l,g,c,u,v;return u=new We({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function h_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function m_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function f_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function __(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function k_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function v_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function w_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function T_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function y_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function $_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function M_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function N_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function F_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function E_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function q_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function x_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function j_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function C_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function O_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function L_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),v=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,u),e(l,v)},d(d){d&&t(l)}}}function A_(z){let l,g,c,u,v;return u=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function D_(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function I_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),d=h(),p=a("ul"),q=a("li"),ve=n("having all inputs as keyword arguments (like PyTorch models), or"),he=h(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=h(),N=a("p"),we=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=n("model.fit()"),me=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),R=a("code"),$e=n("fit()"),ue=n(" and "),K=a("code"),Me=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=h(),x=a("ul"),C=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),B=a("code"),oe=n("model(input_ids)"),Fe=h(),j=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=h(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),xe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=h(),O=a("p"),je=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),d=m(f),p=r(f,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);ve=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),he=m(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=m(f),N=r(f,"P",{});var E=i(N);we=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(E,"CODE",{});var Oe=i(H);Te=s(Oe,"model.fit()"),Oe.forEach(t),me=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var Be=i(S);ye=s(Be,"model.fit()"),Be.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),R=r(E,"CODE",{});var pe=i(R);$e=s(pe,"fit()"),pe.forEach(t),ue=s(E," and "),K=r(E,"CODE",{});var He=i(K);Me=s(He,"predict()"),He.forEach(t),fe=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=m(f),x=r(f,"UL",{});var I=i(x);C=r(I,"LI",{});var G=i(C);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),B=r(G,"CODE",{});var Re=i(B);oe=s(Re,"model(input_ids)"),Re.forEach(t),G.forEach(t),Fe=m(I),j=r(I,"LI",{});var J=i(j);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=m(I),D=r(I,"LI",{});var Ce=i(D);be=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(Ce,"CODE",{});var Xe=i(W);xe=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),Ce.forEach(t),I.forEach(t),Z=m(f),O=r(f,"P",{});var Y=i(O);je=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(f,F){_(f,l,F),e(l,g),e(l,c),e(c,u),e(l,v),_(f,d,F),_(f,p,F),e(p,q),e(q,ve),e(p,he),e(p,A),e(A,ae),_(f,te,F),_(f,N,F),e(N,we),e(N,H),e(H,Te),e(N,me),e(N,S),e(S,ye),e(N,le),e(N,R),e(R,$e),e(N,ue),e(N,K),e(K,Me),e(N,fe),e(N,U),e(U,Pe),e(N,ge),_(f,ee,F),_(f,x,F),e(x,C),e(C,_e),e(C,Q),e(Q,Ne),e(C,ke),e(C,B),e(B,oe),e(x,Fe),e(x,j),e(j,Ee),e(j,V),e(V,de),e(j,ze),e(j,X),e(X,ce),e(x,qe),e(x,D),e(D,be),e(D,W),e(W,xe),_(f,Z,F),_(f,O,F),e(O,je),e(O,L),e(L,se),e(O,re)},d(f){f&&t(l),f&&t(d),f&&t(p),f&&t(te),f&&t(N),f&&t(ee),f&&t(x),f&&t(Z),f&&t(O)}}}function S_(z){let l,g,c,u,v;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=n("Module"),v=n(`
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
`}}),{c(){l=a("p"),g=n("Example:"),c=h(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=m(d),T(u.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(u,d,p),v=!0},p:Se,i(d){v||($(u.$$.fragment,d),v=!0)},o(d){M(u.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),P(u,d)}}}function K_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(l.$$.fragment)},l(c){T(l.$$.fragment,c)},m(c,u){y(l,c,u),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function U_(z){let l,g,c,u,v,d,p,q,ve,he,A,ae,te,N,we,H,Te,me,S,ye,le,R,$e,ue,K,Me,fe,U,Pe,ge,ee,x,C,_e,Q,Ne,ke,B,oe,Fe,j,Ee,V,de,ze,X,ce,qe,D,be,W,xe,Z,O,je,L,se,re,f,F,Ue,ne,Qe,Ke,E,Oe,Be,pe,He,Ae,I,G,De,Re,J,Le,Ve,Ce,Xe,Y,Ge,ka,dd,cd,ba,pd,hd,md,Mo,Qi,Vt,Po,dr,On,ud,cr,fd,Bi,Ze,Ln,gd,An,_d,va,kd,bd,vd,Ot,Dn,wd,pr,Td,yd,In,wa,$d,hr,Md,Pd,Ta,Nd,mr,Fd,Ed,No,Sn,zd,Wn,qd,ur,xd,jd,Cd,Fo,Kn,Od,fr,Ld,Ad,ya,Un,Hi,Xt,Eo,gr,Qn,Dd,_r,Id,Ri,wt,Bn,Sd,Hn,Wd,kr,Kd,Ud,Qd,Rn,Bd,$a,Hd,Rd,Vd,zo,Vn,Xd,br,Gd,Vi,Gt,qo,vr,Xn,Jd,wr,Yd,Xi,it,Gn,Zd,Tr,ec,tc,Jn,oc,Ma,nc,sc,ac,Yn,rc,Zn,ic,lc,dc,Tt,es,cc,Jt,pc,Pa,hc,mc,yr,uc,fc,gc,xo,_c,jo,Gi,Yt,Co,$r,ts,kc,Mr,bc,Ji,Zt,os,vc,mt,ns,wc,eo,Tc,Na,yc,$c,Pr,Mc,Pc,Nc,Oo,Fc,Lo,Ec,Ao,Yi,to,Do,Nr,ss,zc,Fr,qc,Zi,lt,as,xc,Er,jc,Cc,rs,Oc,Fa,Lc,Ac,Dc,is,Ic,ls,Sc,Wc,Kc,Je,ds,Uc,oo,Qc,Ea,Bc,Hc,zr,Rc,Vc,Xc,Io,Gc,So,Jc,Wo,Yc,Ko,Zc,Uo,el,no,Qo,qr,cs,ep,xr,tp,tl,dt,ps,op,jr,np,sp,hs,ap,za,rp,ip,lp,ms,dp,us,cp,pp,hp,yt,fs,mp,so,up,qa,fp,gp,Cr,_p,kp,bp,Bo,vp,Ho,ol,ao,Ro,Or,gs,wp,Lr,Tp,nl,ct,_s,yp,Ar,$p,Mp,ks,Pp,xa,Np,Fp,Ep,bs,zp,vs,qp,xp,jp,ut,ws,Cp,ro,Op,ja,Lp,Ap,Dr,Dp,Ip,Sp,Vo,Wp,Xo,Kp,Go,sl,io,Jo,Ir,Ts,Up,Sr,Qp,al,pt,ys,Bp,lo,Hp,Wr,Rp,Vp,Kr,Xp,Gp,Jp,$s,Yp,Ca,Zp,eh,th,Ms,oh,Ps,nh,sh,ah,ft,Ns,rh,co,ih,Oa,lh,dh,Ur,ch,ph,hh,Yo,mh,Zo,uh,en,rl,po,tn,Qr,Fs,fh,Br,gh,il,et,Es,_h,Hr,kh,bh,zs,vh,La,wh,Th,yh,qs,$h,xs,Mh,Ph,Nh,on,Fh,$t,js,Eh,ho,zh,Aa,qh,xh,Rr,jh,Ch,Oh,nn,Lh,sn,ll,mo,an,Vr,Cs,Ah,Xr,Dh,dl,tt,Os,Ih,Ls,Sh,Gr,Wh,Kh,Uh,As,Qh,Da,Bh,Hh,Rh,Ds,Vh,Is,Xh,Gh,Jh,rn,Yh,gt,Ss,Zh,uo,em,Ia,tm,om,Jr,nm,sm,am,ln,rm,dn,im,cn,cl,fo,pn,Yr,Ws,lm,Zr,dm,pl,ot,Ks,cm,ei,pm,hm,Us,mm,Sa,um,fm,gm,Qs,_m,Bs,km,bm,vm,hn,wm,_t,Hs,Tm,go,ym,Wa,$m,Mm,ti,Pm,Nm,Fm,mn,Em,un,zm,fn,hl,_o,gn,oi,Rs,qm,ni,xm,ml,nt,Vs,jm,si,Cm,Om,Xs,Lm,Ka,Am,Dm,Im,Gs,Sm,Js,Wm,Km,Um,_n,Qm,Mt,Ys,Bm,ko,Hm,Ua,Rm,Vm,ai,Xm,Gm,Jm,kn,Ym,bn,ul,bo,vn,ri,Zs,Zm,ii,eu,fl,st,ea,tu,li,ou,nu,ta,su,Qa,au,ru,iu,oa,lu,na,du,cu,pu,wn,hu,kt,sa,mu,vo,uu,Ba,fu,gu,di,_u,ku,bu,Tn,vu,yn,wu,$n,gl,wo,Mn,ci,aa,Tu,pi,yu,_l,at,ra,$u,To,Mu,hi,Pu,Nu,mi,Fu,Eu,zu,ia,qu,Ha,xu,ju,Cu,la,Ou,da,Lu,Au,Du,Pn,Iu,bt,ca,Su,yo,Wu,Ra,Ku,Uu,ui,Qu,Bu,Hu,Nn,Ru,Fn,Vu,En,kl;return d=new rt({}),N=new rt({}),F=new rt({}),Oe=new ie({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),Mo=new Ie({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:z}}}),On=new rt({}),Ln=new ie({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Dn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet.py#L231",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new ie({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),Qn=new rt({}),Bn=new ie({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),Vn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xn=new rt({}),Gn=new ie({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L483"}}),es=new ie({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L512",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new Ye({props:{$$slots:{default:[n_]},$$scope:{ctx:z}}}),jo=new Ie({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[s_]},$$scope:{ctx:z}}}),ts=new rt({}),os=new ie({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L576"}}),ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L595",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Ye({props:{$$slots:{default:[a_]},$$scope:{ctx:z}}}),Lo=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[r_]},$$scope:{ctx:z}}}),Ao=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:z}}}),ss=new rt({}),as=new ie({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L685"}}),ds=new ie({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Ye({props:{$$slots:{default:[l_]},$$scope:{ctx:z}}}),So=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:z}}}),Wo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:z}}}),Ko=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:z}}}),Uo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[h_]},$$scope:{ctx:z}}}),cs=new rt({}),ps=new ie({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),fs=new ie({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new Ye({props:{$$slots:{default:[m_]},$$scope:{ctx:z}}}),Ho=new Ie({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[u_]},$$scope:{ctx:z}}}),gs=new rt({}),_s=new ie({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),ws=new ie({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L886",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ye({props:{$$slots:{default:[f_]},$$scope:{ctx:z}}}),Xo=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:z}}}),Go=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:z}}}),Ts=new rt({}),ys=new ie({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L971"}}),Ns=new ie({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_mpnet.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Ye({props:{$$slots:{default:[k_]},$$scope:{ctx:z}}}),Zo=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[b_]},$$scope:{ctx:z}}}),en=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[v_]},$$scope:{ctx:z}}}),Fs=new rt({}),Es=new ie({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L682"}}),on=new Ye({props:{$$slots:{default:[w_]},$$scope:{ctx:z}}}),js=new ie({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L687",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),nn=new Ye({props:{$$slots:{default:[T_]},$$scope:{ctx:z}}}),sn=new Ie({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[y_]},$$scope:{ctx:z}}}),Cs=new rt({}),Os=new ie({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L785"}}),rn=new Ye({props:{$$slots:{default:[$_]},$$scope:{ctx:z}}}),Ss=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L802",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ln=new Ye({props:{$$slots:{default:[M_]},$$scope:{ctx:z}}}),dn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[P_]},$$scope:{ctx:z}}}),cn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[N_]},$$scope:{ctx:z}}}),Ws=new rt({}),Ks=new ie({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L896"}}),hn=new Ye({props:{$$slots:{default:[F_]},$$scope:{ctx:z}}}),Hs=new ie({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L907",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Ye({props:{$$slots:{default:[E_]},$$scope:{ctx:z}}}),un=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[z_]},$$scope:{ctx:z}}}),fn=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:z}}}),Rs=new rt({}),Vs=new ie({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L977"}}),_n=new Ye({props:{$$slots:{default:[x_]},$$scope:{ctx:z}}}),Ys=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L997",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),kn=new Ye({props:{$$slots:{default:[j_]},$$scope:{ctx:z}}}),bn=new Ie({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[C_]},$$scope:{ctx:z}}}),Zs=new rt({}),ea=new ie({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1094"}}),wn=new Ye({props:{$$slots:{default:[O_]},$$scope:{ctx:z}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1108",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ye({props:{$$slots:{default:[L_]},$$scope:{ctx:z}}}),yn=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[A_]},$$scope:{ctx:z}}}),$n=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[D_]},$$scope:{ctx:z}}}),aa=new rt({}),ra=new ie({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1177"}}),Pn=new Ye({props:{$$slots:{default:[I_]},$$scope:{ctx:z}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1190",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new Ye({props:{$$slots:{default:[S_]},$$scope:{ctx:z}}}),Fn=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:z}}}),En=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[K_]},$$scope:{ctx:z}}}),{c(){l=a("meta"),g=h(),c=a("h1"),u=a("a"),v=a("span"),w(d.$$.fragment),p=h(),q=a("span"),ve=n("MPNet"),he=h(),A=a("h2"),ae=a("a"),te=a("span"),w(N.$$.fragment),we=h(),H=a("span"),Te=n("Overview"),me=h(),S=a("p"),ye=n("The MPNet model was proposed in "),le=a("a"),R=n("MPNet: Masked and Permuted Pre-training for Language Understanding"),$e=n(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ue=h(),K=a("p"),Me=n(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),fe=h(),U=a("p"),Pe=n("The abstract from the paper is the following:"),ge=h(),ee=a("p"),x=a("em"),C=n(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),_e=h(),Q=a("p"),Ne=n("Tips:"),ke=h(),B=a("ul"),oe=a("li"),Fe=n("MPNet doesn\u2019t have "),j=a("code"),Ee=n("token_type_ids"),V=n(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=a("code"),ze=n("tokenizer.sep_token"),X=n(" (or "),ce=a("code"),qe=n("[sep]"),D=n(")."),be=h(),W=a("p"),xe=n("The original code can be found "),Z=a("a"),O=n("here"),je=n("."),L=h(),se=a("h2"),re=a("a"),f=a("span"),w(F.$$.fragment),Ue=h(),ne=a("span"),Qe=n("MPNetConfig"),Ke=h(),E=a("div"),w(Oe.$$.fragment),Be=h(),pe=a("p"),He=n("This is the configuration class to store the configuration of a "),Ae=a("a"),I=n("MPNetModel"),G=n(" or a "),De=a("a"),Re=n("TFMPNetModel"),J=n(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Le=a("a"),Ve=n("microsoft/mpnet-base"),Ce=n(" architecture."),Xe=h(),Y=a("p"),Ge=n("Configuration objects inherit from "),ka=a("a"),dd=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),ba=a("a"),pd=n("PretrainedConfig"),hd=n(" for more information."),md=h(),w(Mo.$$.fragment),Qi=h(),Vt=a("h2"),Po=a("a"),dr=a("span"),w(On.$$.fragment),ud=h(),cr=a("span"),fd=n("MPNetTokenizer"),Bi=h(),Ze=a("div"),w(Ln.$$.fragment),gd=h(),An=a("p"),_d=n("This tokenizer inherits from "),va=a("a"),kd=n("BertTokenizer"),bd=n(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),vd=h(),Ot=a("div"),w(Dn.$$.fragment),wd=h(),pr=a("p"),Td=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),yd=h(),In=a("ul"),wa=a("li"),$d=n("single sequence: "),hr=a("code"),Md=n("<s> X </s>"),Pd=h(),Ta=a("li"),Nd=n("pair of sequences: "),mr=a("code"),Fd=n("<s> A </s></s> B </s>"),Ed=h(),No=a("div"),w(Sn.$$.fragment),zd=h(),Wn=a("p"),qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=a("code"),xd=n("prepare_for_model"),jd=n(" methods."),Cd=h(),Fo=a("div"),w(Kn.$$.fragment),Od=h(),fr=a("p"),Ld=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ad=h(),ya=a("div"),w(Un.$$.fragment),Hi=h(),Xt=a("h2"),Eo=a("a"),gr=a("span"),w(Qn.$$.fragment),Dd=h(),_r=a("span"),Id=n("MPNetTokenizerFast"),Ri=h(),wt=a("div"),w(Bn.$$.fragment),Sd=h(),Hn=a("p"),Wd=n("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=a("em"),Kd=n("tokenizers"),Ud=n(" library). Based on WordPiece."),Qd=h(),Rn=a("p"),Bd=n("This tokenizer inherits from "),$a=a("a"),Hd=n("PreTrainedTokenizerFast"),Rd=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=h(),zo=a("div"),w(Vn.$$.fragment),Xd=h(),br=a("p"),Gd=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Vi=h(),Gt=a("h2"),qo=a("a"),vr=a("span"),w(Xn.$$.fragment),Jd=h(),wr=a("span"),Yd=n("MPNetModel"),Xi=h(),it=a("div"),w(Gn.$$.fragment),Zd=h(),Tr=a("p"),ec=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=h(),Jn=a("p"),oc=n("This model inherits from "),Ma=a("a"),nc=n("PreTrainedModel"),sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=h(),Yn=a("p"),rc=n("This model is also a PyTorch "),Zn=a("a"),ic=n("torch.nn.Module"),lc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=h(),Tt=a("div"),w(es.$$.fragment),cc=h(),Jt=a("p"),pc=n("The "),Pa=a("a"),hc=n("MPNetModel"),mc=n(" forward method, overrides the "),yr=a("code"),uc=n("__call__"),fc=n(" special method."),gc=h(),w(xo.$$.fragment),_c=h(),w(jo.$$.fragment),Gi=h(),Yt=a("h2"),Co=a("a"),$r=a("span"),w(ts.$$.fragment),kc=h(),Mr=a("span"),bc=n("MPNetForMaskedLM"),Ji=h(),Zt=a("div"),w(os.$$.fragment),vc=h(),mt=a("div"),w(ns.$$.fragment),wc=h(),eo=a("p"),Tc=n("The "),Na=a("a"),yc=n("MPNetForMaskedLM"),$c=n(" forward method, overrides the "),Pr=a("code"),Mc=n("__call__"),Pc=n(" special method."),Nc=h(),w(Oo.$$.fragment),Fc=h(),w(Lo.$$.fragment),Ec=h(),w(Ao.$$.fragment),Yi=h(),to=a("h2"),Do=a("a"),Nr=a("span"),w(ss.$$.fragment),zc=h(),Fr=a("span"),qc=n("MPNetForSequenceClassification"),Zi=h(),lt=a("div"),w(as.$$.fragment),xc=h(),Er=a("p"),jc=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Cc=h(),rs=a("p"),Oc=n("This model inherits from "),Fa=a("a"),Lc=n("PreTrainedModel"),Ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=h(),is=a("p"),Ic=n("This model is also a PyTorch "),ls=a("a"),Sc=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc=h(),Je=a("div"),w(ds.$$.fragment),Uc=h(),oo=a("p"),Qc=n("The "),Ea=a("a"),Bc=n("MPNetForSequenceClassification"),Hc=n(" forward method, overrides the "),zr=a("code"),Rc=n("__call__"),Vc=n(" special method."),Xc=h(),w(Io.$$.fragment),Gc=h(),w(So.$$.fragment),Jc=h(),w(Wo.$$.fragment),Yc=h(),w(Ko.$$.fragment),Zc=h(),w(Uo.$$.fragment),el=h(),no=a("h2"),Qo=a("a"),qr=a("span"),w(cs.$$.fragment),ep=h(),xr=a("span"),tp=n("MPNetForMultipleChoice"),tl=h(),dt=a("div"),w(ps.$$.fragment),op=h(),jr=a("p"),np=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=h(),hs=a("p"),ap=n("This model inherits from "),za=a("a"),rp=n("PreTrainedModel"),ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=h(),ms=a("p"),dp=n("This model is also a PyTorch "),us=a("a"),cp=n("torch.nn.Module"),pp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hp=h(),yt=a("div"),w(fs.$$.fragment),mp=h(),so=a("p"),up=n("The "),qa=a("a"),fp=n("MPNetForMultipleChoice"),gp=n(" forward method, overrides the "),Cr=a("code"),_p=n("__call__"),kp=n(" special method."),bp=h(),w(Bo.$$.fragment),vp=h(),w(Ho.$$.fragment),ol=h(),ao=a("h2"),Ro=a("a"),Or=a("span"),w(gs.$$.fragment),wp=h(),Lr=a("span"),Tp=n("MPNetForTokenClassification"),nl=h(),ct=a("div"),w(_s.$$.fragment),yp=h(),Ar=a("p"),$p=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mp=h(),ks=a("p"),Pp=n("This model inherits from "),xa=a("a"),Np=n("PreTrainedModel"),Fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep=h(),bs=a("p"),zp=n("This model is also a PyTorch "),vs=a("a"),qp=n("torch.nn.Module"),xp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jp=h(),ut=a("div"),w(ws.$$.fragment),Cp=h(),ro=a("p"),Op=n("The "),ja=a("a"),Lp=n("MPNetForTokenClassification"),Ap=n(" forward method, overrides the "),Dr=a("code"),Dp=n("__call__"),Ip=n(" special method."),Sp=h(),w(Vo.$$.fragment),Wp=h(),w(Xo.$$.fragment),Kp=h(),w(Go.$$.fragment),sl=h(),io=a("h2"),Jo=a("a"),Ir=a("span"),w(Ts.$$.fragment),Up=h(),Sr=a("span"),Qp=n("MPNetForQuestionAnswering"),al=h(),pt=a("div"),w(ys.$$.fragment),Bp=h(),lo=a("p"),Hp=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=a("code"),Rp=n("span start logits"),Vp=n(" and "),Kr=a("code"),Xp=n("span end logits"),Gp=n(")."),Jp=h(),$s=a("p"),Yp=n("This model inherits from "),Ca=a("a"),Zp=n("PreTrainedModel"),eh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th=h(),Ms=a("p"),oh=n("This model is also a PyTorch "),Ps=a("a"),nh=n("torch.nn.Module"),sh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah=h(),ft=a("div"),w(Ns.$$.fragment),rh=h(),co=a("p"),ih=n("The "),Oa=a("a"),lh=n("MPNetForQuestionAnswering"),dh=n(" forward method, overrides the "),Ur=a("code"),ch=n("__call__"),ph=n(" special method."),hh=h(),w(Yo.$$.fragment),mh=h(),w(Zo.$$.fragment),uh=h(),w(en.$$.fragment),rl=h(),po=a("h2"),tn=a("a"),Qr=a("span"),w(Fs.$$.fragment),fh=h(),Br=a("span"),gh=n("TFMPNetModel"),il=h(),et=a("div"),w(Es.$$.fragment),_h=h(),Hr=a("p"),kh=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),bh=h(),zs=a("p"),vh=n("This model inherits from "),La=a("a"),wh=n("TFPreTrainedModel"),Th=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=h(),qs=a("p"),$h=n("This model is also a "),xs=a("a"),Mh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nh=h(),w(on.$$.fragment),Fh=h(),$t=a("div"),w(js.$$.fragment),Eh=h(),ho=a("p"),zh=n("The "),Aa=a("a"),qh=n("TFMPNetModel"),xh=n(" forward method, overrides the "),Rr=a("code"),jh=n("__call__"),Ch=n(" special method."),Oh=h(),w(nn.$$.fragment),Lh=h(),w(sn.$$.fragment),ll=h(),mo=a("h2"),an=a("a"),Vr=a("span"),w(Cs.$$.fragment),Ah=h(),Xr=a("span"),Dh=n("TFMPNetForMaskedLM"),dl=h(),tt=a("div"),w(Os.$$.fragment),Ih=h(),Ls=a("p"),Sh=n("MPNet Model with a "),Gr=a("code"),Wh=n("language modeling"),Kh=n(" head on top."),Uh=h(),As=a("p"),Qh=n("This model inherits from "),Da=a("a"),Bh=n("TFPreTrainedModel"),Hh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rh=h(),Ds=a("p"),Vh=n("This model is also a "),Is=a("a"),Xh=n("tf.keras.Model"),Gh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jh=h(),w(rn.$$.fragment),Yh=h(),gt=a("div"),w(Ss.$$.fragment),Zh=h(),uo=a("p"),em=n("The "),Ia=a("a"),tm=n("TFMPNetForMaskedLM"),om=n(" forward method, overrides the "),Jr=a("code"),nm=n("__call__"),sm=n(" special method."),am=h(),w(ln.$$.fragment),rm=h(),w(dn.$$.fragment),im=h(),w(cn.$$.fragment),cl=h(),fo=a("h2"),pn=a("a"),Yr=a("span"),w(Ws.$$.fragment),lm=h(),Zr=a("span"),dm=n("TFMPNetForSequenceClassification"),pl=h(),ot=a("div"),w(Ks.$$.fragment),cm=h(),ei=a("p"),pm=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),hm=h(),Us=a("p"),mm=n("This model inherits from "),Sa=a("a"),um=n("TFPreTrainedModel"),fm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gm=h(),Qs=a("p"),_m=n("This model is also a "),Bs=a("a"),km=n("tf.keras.Model"),bm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vm=h(),w(hn.$$.fragment),wm=h(),_t=a("div"),w(Hs.$$.fragment),Tm=h(),go=a("p"),ym=n("The "),Wa=a("a"),$m=n("TFMPNetForSequenceClassification"),Mm=n(" forward method, overrides the "),ti=a("code"),Pm=n("__call__"),Nm=n(" special method."),Fm=h(),w(mn.$$.fragment),Em=h(),w(un.$$.fragment),zm=h(),w(fn.$$.fragment),hl=h(),_o=a("h2"),gn=a("a"),oi=a("span"),w(Rs.$$.fragment),qm=h(),ni=a("span"),xm=n("TFMPNetForMultipleChoice"),ml=h(),nt=a("div"),w(Vs.$$.fragment),jm=h(),si=a("p"),Cm=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Om=h(),Xs=a("p"),Lm=n("This model inherits from "),Ka=a("a"),Am=n("TFPreTrainedModel"),Dm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Im=h(),Gs=a("p"),Sm=n("This model is also a "),Js=a("a"),Wm=n("tf.keras.Model"),Km=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Um=h(),w(_n.$$.fragment),Qm=h(),Mt=a("div"),w(Ys.$$.fragment),Bm=h(),ko=a("p"),Hm=n("The "),Ua=a("a"),Rm=n("TFMPNetForMultipleChoice"),Vm=n(" forward method, overrides the "),ai=a("code"),Xm=n("__call__"),Gm=n(" special method."),Jm=h(),w(kn.$$.fragment),Ym=h(),w(bn.$$.fragment),ul=h(),bo=a("h2"),vn=a("a"),ri=a("span"),w(Zs.$$.fragment),Zm=h(),ii=a("span"),eu=n("TFMPNetForTokenClassification"),fl=h(),st=a("div"),w(ea.$$.fragment),tu=h(),li=a("p"),ou=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nu=h(),ta=a("p"),su=n("This model inherits from "),Qa=a("a"),au=n("TFPreTrainedModel"),ru=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iu=h(),oa=a("p"),lu=n("This model is also a "),na=a("a"),du=n("tf.keras.Model"),cu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pu=h(),w(wn.$$.fragment),hu=h(),kt=a("div"),w(sa.$$.fragment),mu=h(),vo=a("p"),uu=n("The "),Ba=a("a"),fu=n("TFMPNetForTokenClassification"),gu=n(" forward method, overrides the "),di=a("code"),_u=n("__call__"),ku=n(" special method."),bu=h(),w(Tn.$$.fragment),vu=h(),w(yn.$$.fragment),wu=h(),w($n.$$.fragment),gl=h(),wo=a("h2"),Mn=a("a"),ci=a("span"),w(aa.$$.fragment),Tu=h(),pi=a("span"),yu=n("TFMPNetForQuestionAnswering"),_l=h(),at=a("div"),w(ra.$$.fragment),$u=h(),To=a("p"),Mu=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hi=a("code"),Pu=n("span start logits"),Nu=n(" and "),mi=a("code"),Fu=n("span end logits"),Eu=n(")."),zu=h(),ia=a("p"),qu=n("This model inherits from "),Ha=a("a"),xu=n("TFPreTrainedModel"),ju=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=h(),la=a("p"),Ou=n("This model is also a "),da=a("a"),Lu=n("tf.keras.Model"),Au=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Du=h(),w(Pn.$$.fragment),Iu=h(),bt=a("div"),w(ca.$$.fragment),Su=h(),yo=a("p"),Wu=n("The "),Ra=a("a"),Ku=n("TFMPNetForQuestionAnswering"),Uu=n(" forward method, overrides the "),ui=a("code"),Qu=n("__call__"),Bu=n(" special method."),Hu=h(),w(Nn.$$.fragment),Ru=h(),w(Fn.$$.fragment),Vu=h(),w(En.$$.fragment),this.h()},l(o){const b=e_('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=r(o,"H1",{class:!0});var pa=i(c);u=r(pa,"A",{id:!0,class:!0,href:!0});var fi=i(u);v=r(fi,"SPAN",{});var gi=i(v);T(d.$$.fragment,gi),gi.forEach(t),fi.forEach(t),p=m(pa),q=r(pa,"SPAN",{});var _i=i(q);ve=s(_i,"MPNet"),_i.forEach(t),pa.forEach(t),he=m(o),A=r(o,"H2",{class:!0});var ha=i(A);ae=r(ha,"A",{id:!0,class:!0,href:!0});var ki=i(ae);te=r(ki,"SPAN",{});var bi=i(te);T(N.$$.fragment,bi),bi.forEach(t),ki.forEach(t),we=m(ha),H=r(ha,"SPAN",{});var vi=i(H);Te=s(vi,"Overview"),vi.forEach(t),ha.forEach(t),me=m(o),S=r(o,"P",{});var ma=i(S);ye=s(ma,"The MPNet model was proposed in "),le=r(ma,"A",{href:!0,rel:!0});var wi=i(le);R=s(wi,"MPNet: Masked and Permuted Pre-training for Language Understanding"),wi.forEach(t),$e=s(ma," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ma.forEach(t),ue=m(o),K=r(o,"P",{});var Ti=i(K);Me=s(Ti,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),Ti.forEach(t),fe=m(o),U=r(o,"P",{});var yi=i(U);Pe=s(yi,"The abstract from the paper is the following:"),yi.forEach(t),ge=m(o),ee=r(o,"P",{});var $i=i(ee);x=r($i,"EM",{});var Mi=i(x);C=s(Mi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),Mi.forEach(t),$i.forEach(t),_e=m(o),Q=r(o,"P",{});var Pi=i(Q);Ne=s(Pi,"Tips:"),Pi.forEach(t),ke=m(o),B=r(o,"UL",{});var Ni=i(B);oe=r(Ni,"LI",{});var xt=i(oe);Fe=s(xt,"MPNet doesn\u2019t have "),j=r(xt,"CODE",{});var Fi=i(j);Ee=s(Fi,"token_type_ids"),Fi.forEach(t),V=s(xt,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=r(xt,"CODE",{});var Ei=i(de);ze=s(Ei,"tokenizer.sep_token"),Ei.forEach(t),X=s(xt," (or "),ce=r(xt,"CODE",{});var zi=i(ce);qe=s(zi,"[sep]"),zi.forEach(t),D=s(xt,")."),xt.forEach(t),Ni.forEach(t),be=m(o),W=r(o,"P",{});var ua=i(W);xe=s(ua,"The original code can be found "),Z=r(ua,"A",{href:!0,rel:!0});var qi=i(Z);O=s(qi,"here"),qi.forEach(t),je=s(ua,"."),ua.forEach(t),L=m(o),se=r(o,"H2",{class:!0});var fa=i(se);re=r(fa,"A",{id:!0,class:!0,href:!0});var xi=i(re);f=r(xi,"SPAN",{});var ji=i(f);T(F.$$.fragment,ji),ji.forEach(t),xi.forEach(t),Ue=m(fa),ne=r(fa,"SPAN",{});var Ci=i(ne);Qe=s(Ci,"MPNetConfig"),Ci.forEach(t),fa.forEach(t),Ke=m(o),E=r(o,"DIV",{class:!0});var jt=i(E);T(Oe.$$.fragment,jt),Be=m(jt),pe=r(jt,"P",{});var Ct=i(pe);He=s(Ct,"This is the configuration class to store the configuration of a "),Ae=r(Ct,"A",{href:!0});var Oi=i(Ae);I=s(Oi,"MPNetModel"),Oi.forEach(t),G=s(Ct," or a "),De=r(Ct,"A",{href:!0});var Li=i(De);Re=s(Li,"TFMPNetModel"),Li.forEach(t),J=s(Ct,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Le=r(Ct,"A",{href:!0,rel:!0});var Ai=i(Le);Ve=s(Ai,"microsoft/mpnet-base"),Ai.forEach(t),Ce=s(Ct," architecture."),Ct.forEach(t),Xe=m(jt),Y=r(jt,"P",{});var $o=i(Y);Ge=s($o,"Configuration objects inherit from "),ka=r($o,"A",{href:!0});var Di=i(ka);dd=s(Di,"PretrainedConfig"),Di.forEach(t),cd=s($o,` and can be used to control the model outputs. Read the
documentation from `),ba=r($o,"A",{href:!0});var Ii=i(ba);pd=s(Ii,"PretrainedConfig"),Ii.forEach(t),hd=s($o," for more information."),$o.forEach(t),md=m(jt),T(Mo.$$.fragment,jt),jt.forEach(t),Qi=m(o),Vt=r(o,"H2",{class:!0});var ga=i(Vt);Po=r(ga,"A",{id:!0,class:!0,href:!0});var Si=i(Po);dr=r(Si,"SPAN",{});var Wi=i(dr);T(On.$$.fragment,Wi),Wi.forEach(t),Si.forEach(t),ud=m(ga),cr=r(ga,"SPAN",{});var Ki=i(cr);fd=s(Ki,"MPNetTokenizer"),Ki.forEach(t),ga.forEach(t),Bi=m(o),Ze=r(o,"DIV",{class:!0});var ht=i(Ze);T(Ln.$$.fragment,ht),gd=m(ht),An=r(ht,"P",{});var _a=i(An);_d=s(_a,"This tokenizer inherits from "),va=r(_a,"A",{href:!0});var Ui=i(va);kd=s(Ui,"BertTokenizer"),Ui.forEach(t),bd=s(_a,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),_a.forEach(t),vd=m(ht),Ot=r(ht,"DIV",{class:!0});var Va=i(Ot);T(Dn.$$.fragment,Va),wd=m(Va),pr=r(Va,"P",{});var Ju=i(pr);Td=s(Ju,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Ju.forEach(t),yd=m(Va),In=r(Va,"UL",{});var bl=i(In);wa=r(bl,"LI",{});var Xu=i(wa);$d=s(Xu,"single sequence: "),hr=r(Xu,"CODE",{});var Yu=i(hr);Md=s(Yu,"<s> X </s>"),Yu.forEach(t),Xu.forEach(t),Pd=m(bl),Ta=r(bl,"LI",{});var Gu=i(Ta);Nd=s(Gu,"pair of sequences: "),mr=r(Gu,"CODE",{});var Zu=i(mr);Fd=s(Zu,"<s> A </s></s> B </s>"),Zu.forEach(t),Gu.forEach(t),bl.forEach(t),Va.forEach(t),Ed=m(ht),No=r(ht,"DIV",{class:!0});var vl=i(No);T(Sn.$$.fragment,vl),zd=m(vl),Wn=r(vl,"P",{});var wl=i(Wn);qd=s(wl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),ur=r(wl,"CODE",{});var ef=i(ur);xd=s(ef,"prepare_for_model"),ef.forEach(t),jd=s(wl," methods."),wl.forEach(t),vl.forEach(t),Cd=m(ht),Fo=r(ht,"DIV",{class:!0});var Tl=i(Fo);T(Kn.$$.fragment,Tl),Od=m(Tl),fr=r(Tl,"P",{});var tf=i(fr);Ld=s(tf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),tf.forEach(t),Tl.forEach(t),Ad=m(ht),ya=r(ht,"DIV",{class:!0});var of=i(ya);T(Un.$$.fragment,of),of.forEach(t),ht.forEach(t),Hi=m(o),Xt=r(o,"H2",{class:!0});var yl=i(Xt);Eo=r(yl,"A",{id:!0,class:!0,href:!0});var nf=i(Eo);gr=r(nf,"SPAN",{});var sf=i(gr);T(Qn.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Dd=m(yl),_r=r(yl,"SPAN",{});var af=i(_r);Id=s(af,"MPNetTokenizerFast"),af.forEach(t),yl.forEach(t),Ri=m(o),wt=r(o,"DIV",{class:!0});var zn=i(wt);T(Bn.$$.fragment,zn),Sd=m(zn),Hn=r(zn,"P",{});var $l=i(Hn);Wd=s($l,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=r($l,"EM",{});var rf=i(kr);Kd=s(rf,"tokenizers"),rf.forEach(t),Ud=s($l," library). Based on WordPiece."),$l.forEach(t),Qd=m(zn),Rn=r(zn,"P",{});var Ml=i(Rn);Bd=s(Ml,"This tokenizer inherits from "),$a=r(Ml,"A",{href:!0});var lf=i($a);Hd=s(lf,"PreTrainedTokenizerFast"),lf.forEach(t),Rd=s(Ml,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ml.forEach(t),Vd=m(zn),zo=r(zn,"DIV",{class:!0});var Pl=i(zo);T(Vn.$$.fragment,Pl),Xd=m(Pl),br=r(Pl,"P",{});var df=i(br);Gd=s(df,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),df.forEach(t),Pl.forEach(t),zn.forEach(t),Vi=m(o),Gt=r(o,"H2",{class:!0});var Nl=i(Gt);qo=r(Nl,"A",{id:!0,class:!0,href:!0});var cf=i(qo);vr=r(cf,"SPAN",{});var pf=i(vr);T(Xn.$$.fragment,pf),pf.forEach(t),cf.forEach(t),Jd=m(Nl),wr=r(Nl,"SPAN",{});var hf=i(wr);Yd=s(hf,"MPNetModel"),hf.forEach(t),Nl.forEach(t),Xi=m(o),it=r(o,"DIV",{class:!0});var Lt=i(it);T(Gn.$$.fragment,Lt),Zd=m(Lt),Tr=r(Lt,"P",{});var mf=i(Tr);ec=s(mf,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),mf.forEach(t),tc=m(Lt),Jn=r(Lt,"P",{});var Fl=i(Jn);oc=s(Fl,"This model inherits from "),Ma=r(Fl,"A",{href:!0});var uf=i(Ma);nc=s(uf,"PreTrainedModel"),uf.forEach(t),sc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),ac=m(Lt),Yn=r(Lt,"P",{});var El=i(Yn);rc=s(El,"This model is also a PyTorch "),Zn=r(El,"A",{href:!0,rel:!0});var ff=i(Zn);ic=s(ff,"torch.nn.Module"),ff.forEach(t),lc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),dc=m(Lt),Tt=r(Lt,"DIV",{class:!0});var qn=i(Tt);T(es.$$.fragment,qn),cc=m(qn),Jt=r(qn,"P",{});var Xa=i(Jt);pc=s(Xa,"The "),Pa=r(Xa,"A",{href:!0});var gf=i(Pa);hc=s(gf,"MPNetModel"),gf.forEach(t),mc=s(Xa," forward method, overrides the "),yr=r(Xa,"CODE",{});var _f=i(yr);uc=s(_f,"__call__"),_f.forEach(t),fc=s(Xa," special method."),Xa.forEach(t),gc=m(qn),T(xo.$$.fragment,qn),_c=m(qn),T(jo.$$.fragment,qn),qn.forEach(t),Lt.forEach(t),Gi=m(o),Yt=r(o,"H2",{class:!0});var zl=i(Yt);Co=r(zl,"A",{id:!0,class:!0,href:!0});var kf=i(Co);$r=r(kf,"SPAN",{});var bf=i($r);T(ts.$$.fragment,bf),bf.forEach(t),kf.forEach(t),kc=m(zl),Mr=r(zl,"SPAN",{});var vf=i(Mr);bc=s(vf,"MPNetForMaskedLM"),vf.forEach(t),zl.forEach(t),Ji=m(o),Zt=r(o,"DIV",{class:!0});var ql=i(Zt);T(os.$$.fragment,ql),vc=m(ql),mt=r(ql,"DIV",{class:!0});var At=i(mt);T(ns.$$.fragment,At),wc=m(At),eo=r(At,"P",{});var Ga=i(eo);Tc=s(Ga,"The "),Na=r(Ga,"A",{href:!0});var wf=i(Na);yc=s(wf,"MPNetForMaskedLM"),wf.forEach(t),$c=s(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var Tf=i(Pr);Mc=s(Tf,"__call__"),Tf.forEach(t),Pc=s(Ga," special method."),Ga.forEach(t),Nc=m(At),T(Oo.$$.fragment,At),Fc=m(At),T(Lo.$$.fragment,At),Ec=m(At),T(Ao.$$.fragment,At),At.forEach(t),ql.forEach(t),Yi=m(o),to=r(o,"H2",{class:!0});var xl=i(to);Do=r(xl,"A",{id:!0,class:!0,href:!0});var yf=i(Do);Nr=r(yf,"SPAN",{});var $f=i(Nr);T(ss.$$.fragment,$f),$f.forEach(t),yf.forEach(t),zc=m(xl),Fr=r(xl,"SPAN",{});var Mf=i(Fr);qc=s(Mf,"MPNetForSequenceClassification"),Mf.forEach(t),xl.forEach(t),Zi=m(o),lt=r(o,"DIV",{class:!0});var Dt=i(lt);T(as.$$.fragment,Dt),xc=m(Dt),Er=r(Dt,"P",{});var Pf=i(Er);jc=s(Pf,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Pf.forEach(t),Cc=m(Dt),rs=r(Dt,"P",{});var jl=i(rs);Oc=s(jl,"This model inherits from "),Fa=r(jl,"A",{href:!0});var Nf=i(Fa);Lc=s(Nf,"PreTrainedModel"),Nf.forEach(t),Ac=s(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),Dc=m(Dt),is=r(Dt,"P",{});var Cl=i(is);Ic=s(Cl,"This model is also a PyTorch "),ls=r(Cl,"A",{href:!0,rel:!0});var Ff=i(ls);Sc=s(Ff,"torch.nn.Module"),Ff.forEach(t),Wc=s(Cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cl.forEach(t),Kc=m(Dt),Je=r(Dt,"DIV",{class:!0});var vt=i(Je);T(ds.$$.fragment,vt),Uc=m(vt),oo=r(vt,"P",{});var Ja=i(oo);Qc=s(Ja,"The "),Ea=r(Ja,"A",{href:!0});var Ef=i(Ea);Bc=s(Ef,"MPNetForSequenceClassification"),Ef.forEach(t),Hc=s(Ja," forward method, overrides the "),zr=r(Ja,"CODE",{});var zf=i(zr);Rc=s(zf,"__call__"),zf.forEach(t),Vc=s(Ja," special method."),Ja.forEach(t),Xc=m(vt),T(Io.$$.fragment,vt),Gc=m(vt),T(So.$$.fragment,vt),Jc=m(vt),T(Wo.$$.fragment,vt),Yc=m(vt),T(Ko.$$.fragment,vt),Zc=m(vt),T(Uo.$$.fragment,vt),vt.forEach(t),Dt.forEach(t),el=m(o),no=r(o,"H2",{class:!0});var Ol=i(no);Qo=r(Ol,"A",{id:!0,class:!0,href:!0});var qf=i(Qo);qr=r(qf,"SPAN",{});var xf=i(qr);T(cs.$$.fragment,xf),xf.forEach(t),qf.forEach(t),ep=m(Ol),xr=r(Ol,"SPAN",{});var jf=i(xr);tp=s(jf,"MPNetForMultipleChoice"),jf.forEach(t),Ol.forEach(t),tl=m(o),dt=r(o,"DIV",{class:!0});var It=i(dt);T(ps.$$.fragment,It),op=m(It),jr=r(It,"P",{});var Cf=i(jr);np=s(Cf,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Cf.forEach(t),sp=m(It),hs=r(It,"P",{});var Ll=i(hs);ap=s(Ll,"This model inherits from "),za=r(Ll,"A",{href:!0});var Of=i(za);rp=s(Of,"PreTrainedModel"),Of.forEach(t),ip=s(Ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ll.forEach(t),lp=m(It),ms=r(It,"P",{});var Al=i(ms);dp=s(Al,"This model is also a PyTorch "),us=r(Al,"A",{href:!0,rel:!0});var Lf=i(us);cp=s(Lf,"torch.nn.Module"),Lf.forEach(t),pp=s(Al,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Al.forEach(t),hp=m(It),yt=r(It,"DIV",{class:!0});var xn=i(yt);T(fs.$$.fragment,xn),mp=m(xn),so=r(xn,"P",{});var Ya=i(so);up=s(Ya,"The "),qa=r(Ya,"A",{href:!0});var Af=i(qa);fp=s(Af,"MPNetForMultipleChoice"),Af.forEach(t),gp=s(Ya," forward method, overrides the "),Cr=r(Ya,"CODE",{});var Df=i(Cr);_p=s(Df,"__call__"),Df.forEach(t),kp=s(Ya," special method."),Ya.forEach(t),bp=m(xn),T(Bo.$$.fragment,xn),vp=m(xn),T(Ho.$$.fragment,xn),xn.forEach(t),It.forEach(t),ol=m(o),ao=r(o,"H2",{class:!0});var Dl=i(ao);Ro=r(Dl,"A",{id:!0,class:!0,href:!0});var If=i(Ro);Or=r(If,"SPAN",{});var Sf=i(Or);T(gs.$$.fragment,Sf),Sf.forEach(t),If.forEach(t),wp=m(Dl),Lr=r(Dl,"SPAN",{});var Wf=i(Lr);Tp=s(Wf,"MPNetForTokenClassification"),Wf.forEach(t),Dl.forEach(t),nl=m(o),ct=r(o,"DIV",{class:!0});var St=i(ct);T(_s.$$.fragment,St),yp=m(St),Ar=r(St,"P",{});var Kf=i(Ar);$p=s(Kf,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Kf.forEach(t),Mp=m(St),ks=r(St,"P",{});var Il=i(ks);Pp=s(Il,"This model inherits from "),xa=r(Il,"A",{href:!0});var Uf=i(xa);Np=s(Uf,"PreTrainedModel"),Uf.forEach(t),Fp=s(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Ep=m(St),bs=r(St,"P",{});var Sl=i(bs);zp=s(Sl,"This model is also a PyTorch "),vs=r(Sl,"A",{href:!0,rel:!0});var Qf=i(vs);qp=s(Qf,"torch.nn.Module"),Qf.forEach(t),xp=s(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),jp=m(St),ut=r(St,"DIV",{class:!0});var Wt=i(ut);T(ws.$$.fragment,Wt),Cp=m(Wt),ro=r(Wt,"P",{});var Za=i(ro);Op=s(Za,"The "),ja=r(Za,"A",{href:!0});var Bf=i(ja);Lp=s(Bf,"MPNetForTokenClassification"),Bf.forEach(t),Ap=s(Za," forward method, overrides the "),Dr=r(Za,"CODE",{});var Hf=i(Dr);Dp=s(Hf,"__call__"),Hf.forEach(t),Ip=s(Za," special method."),Za.forEach(t),Sp=m(Wt),T(Vo.$$.fragment,Wt),Wp=m(Wt),T(Xo.$$.fragment,Wt),Kp=m(Wt),T(Go.$$.fragment,Wt),Wt.forEach(t),St.forEach(t),sl=m(o),io=r(o,"H2",{class:!0});var Wl=i(io);Jo=r(Wl,"A",{id:!0,class:!0,href:!0});var Rf=i(Jo);Ir=r(Rf,"SPAN",{});var Vf=i(Ir);T(Ts.$$.fragment,Vf),Vf.forEach(t),Rf.forEach(t),Up=m(Wl),Sr=r(Wl,"SPAN",{});var Xf=i(Sr);Qp=s(Xf,"MPNetForQuestionAnswering"),Xf.forEach(t),Wl.forEach(t),al=m(o),pt=r(o,"DIV",{class:!0});var Kt=i(pt);T(ys.$$.fragment,Kt),Bp=m(Kt),lo=r(Kt,"P",{});var er=i(lo);Hp=s(er,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=r(er,"CODE",{});var Gf=i(Wr);Rp=s(Gf,"span start logits"),Gf.forEach(t),Vp=s(er," and "),Kr=r(er,"CODE",{});var Jf=i(Kr);Xp=s(Jf,"span end logits"),Jf.forEach(t),Gp=s(er,")."),er.forEach(t),Jp=m(Kt),$s=r(Kt,"P",{});var Kl=i($s);Yp=s(Kl,"This model inherits from "),Ca=r(Kl,"A",{href:!0});var Yf=i(Ca);Zp=s(Yf,"PreTrainedModel"),Yf.forEach(t),eh=s(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),th=m(Kt),Ms=r(Kt,"P",{});var Ul=i(Ms);oh=s(Ul,"This model is also a PyTorch "),Ps=r(Ul,"A",{href:!0,rel:!0});var Zf=i(Ps);nh=s(Zf,"torch.nn.Module"),Zf.forEach(t),sh=s(Ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ul.forEach(t),ah=m(Kt),ft=r(Kt,"DIV",{class:!0});var Ut=i(ft);T(Ns.$$.fragment,Ut),rh=m(Ut),co=r(Ut,"P",{});var tr=i(co);ih=s(tr,"The "),Oa=r(tr,"A",{href:!0});var eg=i(Oa);lh=s(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dh=s(tr," forward method, overrides the "),Ur=r(tr,"CODE",{});var tg=i(Ur);ch=s(tg,"__call__"),tg.forEach(t),ph=s(tr," special method."),tr.forEach(t),hh=m(Ut),T(Yo.$$.fragment,Ut),mh=m(Ut),T(Zo.$$.fragment,Ut),uh=m(Ut),T(en.$$.fragment,Ut),Ut.forEach(t),Kt.forEach(t),rl=m(o),po=r(o,"H2",{class:!0});var Ql=i(po);tn=r(Ql,"A",{id:!0,class:!0,href:!0});var og=i(tn);Qr=r(og,"SPAN",{});var ng=i(Qr);T(Fs.$$.fragment,ng),ng.forEach(t),og.forEach(t),fh=m(Ql),Br=r(Ql,"SPAN",{});var sg=i(Br);gh=s(sg,"TFMPNetModel"),sg.forEach(t),Ql.forEach(t),il=m(o),et=r(o,"DIV",{class:!0});var Pt=i(et);T(Es.$$.fragment,Pt),_h=m(Pt),Hr=r(Pt,"P",{});var ag=i(Hr);kh=s(ag,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),bh=m(Pt),zs=r(Pt,"P",{});var Bl=i(zs);vh=s(Bl,"This model inherits from "),La=r(Bl,"A",{href:!0});var rg=i(La);wh=s(rg,"TFPreTrainedModel"),rg.forEach(t),Th=s(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),yh=m(Pt),qs=r(Pt,"P",{});var Hl=i(qs);$h=s(Hl,"This model is also a "),xs=r(Hl,"A",{href:!0,rel:!0});var ig=i(xs);Mh=s(ig,"tf.keras.Model"),ig.forEach(t),Ph=s(Hl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hl.forEach(t),Nh=m(Pt),T(on.$$.fragment,Pt),Fh=m(Pt),$t=r(Pt,"DIV",{class:!0});var jn=i($t);T(js.$$.fragment,jn),Eh=m(jn),ho=r(jn,"P",{});var or=i(ho);zh=s(or,"The "),Aa=r(or,"A",{href:!0});var lg=i(Aa);qh=s(lg,"TFMPNetModel"),lg.forEach(t),xh=s(or," forward method, overrides the "),Rr=r(or,"CODE",{});var dg=i(Rr);jh=s(dg,"__call__"),dg.forEach(t),Ch=s(or," special method."),or.forEach(t),Oh=m(jn),T(nn.$$.fragment,jn),Lh=m(jn),T(sn.$$.fragment,jn),jn.forEach(t),Pt.forEach(t),ll=m(o),mo=r(o,"H2",{class:!0});var Rl=i(mo);an=r(Rl,"A",{id:!0,class:!0,href:!0});var cg=i(an);Vr=r(cg,"SPAN",{});var pg=i(Vr);T(Cs.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Ah=m(Rl),Xr=r(Rl,"SPAN",{});var hg=i(Xr);Dh=s(hg,"TFMPNetForMaskedLM"),hg.forEach(t),Rl.forEach(t),dl=m(o),tt=r(o,"DIV",{class:!0});var Nt=i(tt);T(Os.$$.fragment,Nt),Ih=m(Nt),Ls=r(Nt,"P",{});var Vl=i(Ls);Sh=s(Vl,"MPNet Model with a "),Gr=r(Vl,"CODE",{});var mg=i(Gr);Wh=s(mg,"language modeling"),mg.forEach(t),Kh=s(Vl," head on top."),Vl.forEach(t),Uh=m(Nt),As=r(Nt,"P",{});var Xl=i(As);Qh=s(Xl,"This model inherits from "),Da=r(Xl,"A",{href:!0});var ug=i(Da);Bh=s(ug,"TFPreTrainedModel"),ug.forEach(t),Hh=s(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Rh=m(Nt),Ds=r(Nt,"P",{});var Gl=i(Ds);Vh=s(Gl,"This model is also a "),Is=r(Gl,"A",{href:!0,rel:!0});var fg=i(Is);Xh=s(fg,"tf.keras.Model"),fg.forEach(t),Gh=s(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Jh=m(Nt),T(rn.$$.fragment,Nt),Yh=m(Nt),gt=r(Nt,"DIV",{class:!0});var Qt=i(gt);T(Ss.$$.fragment,Qt),Zh=m(Qt),uo=r(Qt,"P",{});var nr=i(uo);em=s(nr,"The "),Ia=r(nr,"A",{href:!0});var gg=i(Ia);tm=s(gg,"TFMPNetForMaskedLM"),gg.forEach(t),om=s(nr," forward method, overrides the "),Jr=r(nr,"CODE",{});var _g=i(Jr);nm=s(_g,"__call__"),_g.forEach(t),sm=s(nr," special method."),nr.forEach(t),am=m(Qt),T(ln.$$.fragment,Qt),rm=m(Qt),T(dn.$$.fragment,Qt),im=m(Qt),T(cn.$$.fragment,Qt),Qt.forEach(t),Nt.forEach(t),cl=m(o),fo=r(o,"H2",{class:!0});var Jl=i(fo);pn=r(Jl,"A",{id:!0,class:!0,href:!0});var kg=i(pn);Yr=r(kg,"SPAN",{});var bg=i(Yr);T(Ws.$$.fragment,bg),bg.forEach(t),kg.forEach(t),lm=m(Jl),Zr=r(Jl,"SPAN",{});var vg=i(Zr);dm=s(vg,"TFMPNetForSequenceClassification"),vg.forEach(t),Jl.forEach(t),pl=m(o),ot=r(o,"DIV",{class:!0});var Ft=i(ot);T(Ks.$$.fragment,Ft),cm=m(Ft),ei=r(Ft,"P",{});var wg=i(ei);pm=s(wg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),wg.forEach(t),hm=m(Ft),Us=r(Ft,"P",{});var Yl=i(Us);mm=s(Yl,"This model inherits from "),Sa=r(Yl,"A",{href:!0});var Tg=i(Sa);um=s(Tg,"TFPreTrainedModel"),Tg.forEach(t),fm=s(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(t),gm=m(Ft),Qs=r(Ft,"P",{});var Zl=i(Qs);_m=s(Zl,"This model is also a "),Bs=r(Zl,"A",{href:!0,rel:!0});var yg=i(Bs);km=s(yg,"tf.keras.Model"),yg.forEach(t),bm=s(Zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zl.forEach(t),vm=m(Ft),T(hn.$$.fragment,Ft),wm=m(Ft),_t=r(Ft,"DIV",{class:!0});var Bt=i(_t);T(Hs.$$.fragment,Bt),Tm=m(Bt),go=r(Bt,"P",{});var sr=i(go);ym=s(sr,"The "),Wa=r(sr,"A",{href:!0});var $g=i(Wa);$m=s($g,"TFMPNetForSequenceClassification"),$g.forEach(t),Mm=s(sr," forward method, overrides the "),ti=r(sr,"CODE",{});var Mg=i(ti);Pm=s(Mg,"__call__"),Mg.forEach(t),Nm=s(sr," special method."),sr.forEach(t),Fm=m(Bt),T(mn.$$.fragment,Bt),Em=m(Bt),T(un.$$.fragment,Bt),zm=m(Bt),T(fn.$$.fragment,Bt),Bt.forEach(t),Ft.forEach(t),hl=m(o),_o=r(o,"H2",{class:!0});var ed=i(_o);gn=r(ed,"A",{id:!0,class:!0,href:!0});var Pg=i(gn);oi=r(Pg,"SPAN",{});var Ng=i(oi);T(Rs.$$.fragment,Ng),Ng.forEach(t),Pg.forEach(t),qm=m(ed),ni=r(ed,"SPAN",{});var Fg=i(ni);xm=s(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),ed.forEach(t),ml=m(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);T(Vs.$$.fragment,Et),jm=m(Et),si=r(Et,"P",{});var Eg=i(si);Cm=s(Eg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),Om=m(Et),Xs=r(Et,"P",{});var td=i(Xs);Lm=s(td,"This model inherits from "),Ka=r(td,"A",{href:!0});var zg=i(Ka);Am=s(zg,"TFPreTrainedModel"),zg.forEach(t),Dm=s(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Im=m(Et),Gs=r(Et,"P",{});var od=i(Gs);Sm=s(od,"This model is also a "),Js=r(od,"A",{href:!0,rel:!0});var qg=i(Js);Wm=s(qg,"tf.keras.Model"),qg.forEach(t),Km=s(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),Um=m(Et),T(_n.$$.fragment,Et),Qm=m(Et),Mt=r(Et,"DIV",{class:!0});var Cn=i(Mt);T(Ys.$$.fragment,Cn),Bm=m(Cn),ko=r(Cn,"P",{});var ar=i(ko);Hm=s(ar,"The "),Ua=r(ar,"A",{href:!0});var xg=i(Ua);Rm=s(xg,"TFMPNetForMultipleChoice"),xg.forEach(t),Vm=s(ar," forward method, overrides the "),ai=r(ar,"CODE",{});var jg=i(ai);Xm=s(jg,"__call__"),jg.forEach(t),Gm=s(ar," special method."),ar.forEach(t),Jm=m(Cn),T(kn.$$.fragment,Cn),Ym=m(Cn),T(bn.$$.fragment,Cn),Cn.forEach(t),Et.forEach(t),ul=m(o),bo=r(o,"H2",{class:!0});var nd=i(bo);vn=r(nd,"A",{id:!0,class:!0,href:!0});var Cg=i(vn);ri=r(Cg,"SPAN",{});var Og=i(ri);T(Zs.$$.fragment,Og),Og.forEach(t),Cg.forEach(t),Zm=m(nd),ii=r(nd,"SPAN",{});var Lg=i(ii);eu=s(Lg,"TFMPNetForTokenClassification"),Lg.forEach(t),nd.forEach(t),fl=m(o),st=r(o,"DIV",{class:!0});var zt=i(st);T(ea.$$.fragment,zt),tu=m(zt),li=r(zt,"P",{});var Ag=i(li);ou=s(Ag,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ag.forEach(t),nu=m(zt),ta=r(zt,"P",{});var sd=i(ta);su=s(sd,"This model inherits from "),Qa=r(sd,"A",{href:!0});var Dg=i(Qa);au=s(Dg,"TFPreTrainedModel"),Dg.forEach(t),ru=s(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),iu=m(zt),oa=r(zt,"P",{});var ad=i(oa);lu=s(ad,"This model is also a "),na=r(ad,"A",{href:!0,rel:!0});var Ig=i(na);du=s(Ig,"tf.keras.Model"),Ig.forEach(t),cu=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),pu=m(zt),T(wn.$$.fragment,zt),hu=m(zt),kt=r(zt,"DIV",{class:!0});var Ht=i(kt);T(sa.$$.fragment,Ht),mu=m(Ht),vo=r(Ht,"P",{});var rr=i(vo);uu=s(rr,"The "),Ba=r(rr,"A",{href:!0});var Sg=i(Ba);fu=s(Sg,"TFMPNetForTokenClassification"),Sg.forEach(t),gu=s(rr," forward method, overrides the "),di=r(rr,"CODE",{});var Wg=i(di);_u=s(Wg,"__call__"),Wg.forEach(t),ku=s(rr," special method."),rr.forEach(t),bu=m(Ht),T(Tn.$$.fragment,Ht),vu=m(Ht),T(yn.$$.fragment,Ht),wu=m(Ht),T($n.$$.fragment,Ht),Ht.forEach(t),zt.forEach(t),gl=m(o),wo=r(o,"H2",{class:!0});var rd=i(wo);Mn=r(rd,"A",{id:!0,class:!0,href:!0});var Kg=i(Mn);ci=r(Kg,"SPAN",{});var Ug=i(ci);T(aa.$$.fragment,Ug),Ug.forEach(t),Kg.forEach(t),Tu=m(rd),pi=r(rd,"SPAN",{});var Qg=i(pi);yu=s(Qg,"TFMPNetForQuestionAnswering"),Qg.forEach(t),rd.forEach(t),_l=m(o),at=r(o,"DIV",{class:!0});var qt=i(at);T(ra.$$.fragment,qt),$u=m(qt),To=r(qt,"P",{});var ir=i(To);Mu=s(ir,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hi=r(ir,"CODE",{});var Bg=i(hi);Pu=s(Bg,"span start logits"),Bg.forEach(t),Nu=s(ir," and "),mi=r(ir,"CODE",{});var Hg=i(mi);Fu=s(Hg,"span end logits"),Hg.forEach(t),Eu=s(ir,")."),ir.forEach(t),zu=m(qt),ia=r(qt,"P",{});var id=i(ia);qu=s(id,"This model inherits from "),Ha=r(id,"A",{href:!0});var Rg=i(Ha);xu=s(Rg,"TFPreTrainedModel"),Rg.forEach(t),ju=s(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),Cu=m(qt),la=r(qt,"P",{});var ld=i(la);Ou=s(ld,"This model is also a "),da=r(ld,"A",{href:!0,rel:!0});var Vg=i(da);Lu=s(Vg,"tf.keras.Model"),Vg.forEach(t),Au=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),Du=m(qt),T(Pn.$$.fragment,qt),Iu=m(qt),bt=r(qt,"DIV",{class:!0});var Rt=i(bt);T(ca.$$.fragment,Rt),Su=m(Rt),yo=r(Rt,"P",{});var lr=i(yo);Wu=s(lr,"The "),Ra=r(lr,"A",{href:!0});var Xg=i(Ra);Ku=s(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Uu=s(lr," forward method, overrides the "),ui=r(lr,"CODE",{});var Gg=i(ui);Qu=s(Gg,"__call__"),Gg.forEach(t),Bu=s(lr," special method."),lr.forEach(t),Hu=m(Rt),T(Nn.$$.fragment,Rt),Ru=m(Rt),T(Fn.$$.fragment,Rt),Vu=m(Rt),T(En.$$.fragment,Rt),Rt.forEach(t),qt.forEach(t),this.h()},h(){k(l,"name","hf:doc:metadata"),k(l,"content",JSON.stringify(Q_)),k(u,"id","mpnet"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#mpnet"),k(c,"class","relative group"),k(ae,"id","overview"),k(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ae,"href","#overview"),k(A,"class","relative group"),k(le,"href","https://arxiv.org/abs/2004.09297"),k(le,"rel","nofollow"),k(Z,"href","https://github.com/microsoft/MPNet"),k(Z,"rel","nofollow"),k(re,"id","transformers.MPNetConfig"),k(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(re,"href","#transformers.MPNetConfig"),k(se,"class","relative group"),k(Ae,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetModel"),k(De,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Le,"href","https://huggingface.co/microsoft/mpnet-base"),k(Le,"rel","nofollow"),k(ka,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),k(ba,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),k(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.MPNetTokenizer"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.MPNetTokenizer"),k(Vt,"class","relative group"),k(va,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer"),k(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.MPNetTokenizerFast"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.MPNetTokenizerFast"),k(Xt,"class","relative group"),k($a,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),k(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.MPNetModel"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.MPNetModel"),k(Gt,"class","relative group"),k(Ma,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),k(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Zn,"rel","nofollow"),k(Pa,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetModel"),k(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Co,"id","transformers.MPNetForMaskedLM"),k(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Co,"href","#transformers.MPNetForMaskedLM"),k(Yt,"class","relative group"),k(Na,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),k(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.MPNetForSequenceClassification"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.MPNetForSequenceClassification"),k(to,"class","relative group"),k(Fa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),k(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ls,"rel","nofollow"),k(Ea,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Qo,"id","transformers.MPNetForMultipleChoice"),k(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Qo,"href","#transformers.MPNetForMultipleChoice"),k(no,"class","relative group"),k(za,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),k(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(us,"rel","nofollow"),k(qa,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),k(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ro,"id","transformers.MPNetForTokenClassification"),k(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Ro,"href","#transformers.MPNetForTokenClassification"),k(ao,"class","relative group"),k(xa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),k(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(vs,"rel","nofollow"),k(ja,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.MPNetForQuestionAnswering"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.MPNetForQuestionAnswering"),k(io,"class","relative group"),k(Ca,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(Oa,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tn,"id","transformers.TFMPNetModel"),k(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(tn,"href","#transformers.TFMPNetModel"),k(po,"class","relative group"),k(La,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(xs,"rel","nofollow"),k(Aa,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetModel"),k($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFMPNetForMaskedLM"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFMPNetForMaskedLM"),k(mo,"class","relative group"),k(Da,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Is,"rel","nofollow"),k(Ia,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),k(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pn,"id","transformers.TFMPNetForSequenceClassification"),k(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pn,"href","#transformers.TFMPNetForSequenceClassification"),k(fo,"class","relative group"),k(Sa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Bs,"rel","nofollow"),k(Wa,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(gn,"id","transformers.TFMPNetForMultipleChoice"),k(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(gn,"href","#transformers.TFMPNetForMultipleChoice"),k(_o,"class","relative group"),k(Ka,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Js,"rel","nofollow"),k(Ua,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),k(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(vn,"id","transformers.TFMPNetForTokenClassification"),k(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(vn,"href","#transformers.TFMPNetForTokenClassification"),k(bo,"class","relative group"),k(Qa,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(na,"rel","nofollow"),k(Ba,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),k(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Mn,"id","transformers.TFMPNetForQuestionAnswering"),k(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Mn,"href","#transformers.TFMPNetForQuestionAnswering"),k(wo,"class","relative group"),k(Ha,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),k(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(da,"rel","nofollow"),k(Ra,"href","/docs/transformers/v4.24.0/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),k(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,u),e(u,v),y(d,v,null),e(c,p),e(c,q),e(q,ve),_(o,he,b),_(o,A,b),e(A,ae),e(ae,te),y(N,te,null),e(A,we),e(A,H),e(H,Te),_(o,me,b),_(o,S,b),e(S,ye),e(S,le),e(le,R),e(S,$e),_(o,ue,b),_(o,K,b),e(K,Me),_(o,fe,b),_(o,U,b),e(U,Pe),_(o,ge,b),_(o,ee,b),e(ee,x),e(x,C),_(o,_e,b),_(o,Q,b),e(Q,Ne),_(o,ke,b),_(o,B,b),e(B,oe),e(oe,Fe),e(oe,j),e(j,Ee),e(oe,V),e(oe,de),e(de,ze),e(oe,X),e(oe,ce),e(ce,qe),e(oe,D),_(o,be,b),_(o,W,b),e(W,xe),e(W,Z),e(Z,O),e(W,je),_(o,L,b),_(o,se,b),e(se,re),e(re,f),y(F,f,null),e(se,Ue),e(se,ne),e(ne,Qe),_(o,Ke,b),_(o,E,b),y(Oe,E,null),e(E,Be),e(E,pe),e(pe,He),e(pe,Ae),e(Ae,I),e(pe,G),e(pe,De),e(De,Re),e(pe,J),e(pe,Le),e(Le,Ve),e(pe,Ce),e(E,Xe),e(E,Y),e(Y,Ge),e(Y,ka),e(ka,dd),e(Y,cd),e(Y,ba),e(ba,pd),e(Y,hd),e(E,md),y(Mo,E,null),_(o,Qi,b),_(o,Vt,b),e(Vt,Po),e(Po,dr),y(On,dr,null),e(Vt,ud),e(Vt,cr),e(cr,fd),_(o,Bi,b),_(o,Ze,b),y(Ln,Ze,null),e(Ze,gd),e(Ze,An),e(An,_d),e(An,va),e(va,kd),e(An,bd),e(Ze,vd),e(Ze,Ot),y(Dn,Ot,null),e(Ot,wd),e(Ot,pr),e(pr,Td),e(Ot,yd),e(Ot,In),e(In,wa),e(wa,$d),e(wa,hr),e(hr,Md),e(In,Pd),e(In,Ta),e(Ta,Nd),e(Ta,mr),e(mr,Fd),e(Ze,Ed),e(Ze,No),y(Sn,No,null),e(No,zd),e(No,Wn),e(Wn,qd),e(Wn,ur),e(ur,xd),e(Wn,jd),e(Ze,Cd),e(Ze,Fo),y(Kn,Fo,null),e(Fo,Od),e(Fo,fr),e(fr,Ld),e(Ze,Ad),e(Ze,ya),y(Un,ya,null),_(o,Hi,b),_(o,Xt,b),e(Xt,Eo),e(Eo,gr),y(Qn,gr,null),e(Xt,Dd),e(Xt,_r),e(_r,Id),_(o,Ri,b),_(o,wt,b),y(Bn,wt,null),e(wt,Sd),e(wt,Hn),e(Hn,Wd),e(Hn,kr),e(kr,Kd),e(Hn,Ud),e(wt,Qd),e(wt,Rn),e(Rn,Bd),e(Rn,$a),e($a,Hd),e(Rn,Rd),e(wt,Vd),e(wt,zo),y(Vn,zo,null),e(zo,Xd),e(zo,br),e(br,Gd),_(o,Vi,b),_(o,Gt,b),e(Gt,qo),e(qo,vr),y(Xn,vr,null),e(Gt,Jd),e(Gt,wr),e(wr,Yd),_(o,Xi,b),_(o,it,b),y(Gn,it,null),e(it,Zd),e(it,Tr),e(Tr,ec),e(it,tc),e(it,Jn),e(Jn,oc),e(Jn,Ma),e(Ma,nc),e(Jn,sc),e(it,ac),e(it,Yn),e(Yn,rc),e(Yn,Zn),e(Zn,ic),e(Yn,lc),e(it,dc),e(it,Tt),y(es,Tt,null),e(Tt,cc),e(Tt,Jt),e(Jt,pc),e(Jt,Pa),e(Pa,hc),e(Jt,mc),e(Jt,yr),e(yr,uc),e(Jt,fc),e(Tt,gc),y(xo,Tt,null),e(Tt,_c),y(jo,Tt,null),_(o,Gi,b),_(o,Yt,b),e(Yt,Co),e(Co,$r),y(ts,$r,null),e(Yt,kc),e(Yt,Mr),e(Mr,bc),_(o,Ji,b),_(o,Zt,b),y(os,Zt,null),e(Zt,vc),e(Zt,mt),y(ns,mt,null),e(mt,wc),e(mt,eo),e(eo,Tc),e(eo,Na),e(Na,yc),e(eo,$c),e(eo,Pr),e(Pr,Mc),e(eo,Pc),e(mt,Nc),y(Oo,mt,null),e(mt,Fc),y(Lo,mt,null),e(mt,Ec),y(Ao,mt,null),_(o,Yi,b),_(o,to,b),e(to,Do),e(Do,Nr),y(ss,Nr,null),e(to,zc),e(to,Fr),e(Fr,qc),_(o,Zi,b),_(o,lt,b),y(as,lt,null),e(lt,xc),e(lt,Er),e(Er,jc),e(lt,Cc),e(lt,rs),e(rs,Oc),e(rs,Fa),e(Fa,Lc),e(rs,Ac),e(lt,Dc),e(lt,is),e(is,Ic),e(is,ls),e(ls,Sc),e(is,Wc),e(lt,Kc),e(lt,Je),y(ds,Je,null),e(Je,Uc),e(Je,oo),e(oo,Qc),e(oo,Ea),e(Ea,Bc),e(oo,Hc),e(oo,zr),e(zr,Rc),e(oo,Vc),e(Je,Xc),y(Io,Je,null),e(Je,Gc),y(So,Je,null),e(Je,Jc),y(Wo,Je,null),e(Je,Yc),y(Ko,Je,null),e(Je,Zc),y(Uo,Je,null),_(o,el,b),_(o,no,b),e(no,Qo),e(Qo,qr),y(cs,qr,null),e(no,ep),e(no,xr),e(xr,tp),_(o,tl,b),_(o,dt,b),y(ps,dt,null),e(dt,op),e(dt,jr),e(jr,np),e(dt,sp),e(dt,hs),e(hs,ap),e(hs,za),e(za,rp),e(hs,ip),e(dt,lp),e(dt,ms),e(ms,dp),e(ms,us),e(us,cp),e(ms,pp),e(dt,hp),e(dt,yt),y(fs,yt,null),e(yt,mp),e(yt,so),e(so,up),e(so,qa),e(qa,fp),e(so,gp),e(so,Cr),e(Cr,_p),e(so,kp),e(yt,bp),y(Bo,yt,null),e(yt,vp),y(Ho,yt,null),_(o,ol,b),_(o,ao,b),e(ao,Ro),e(Ro,Or),y(gs,Or,null),e(ao,wp),e(ao,Lr),e(Lr,Tp),_(o,nl,b),_(o,ct,b),y(_s,ct,null),e(ct,yp),e(ct,Ar),e(Ar,$p),e(ct,Mp),e(ct,ks),e(ks,Pp),e(ks,xa),e(xa,Np),e(ks,Fp),e(ct,Ep),e(ct,bs),e(bs,zp),e(bs,vs),e(vs,qp),e(bs,xp),e(ct,jp),e(ct,ut),y(ws,ut,null),e(ut,Cp),e(ut,ro),e(ro,Op),e(ro,ja),e(ja,Lp),e(ro,Ap),e(ro,Dr),e(Dr,Dp),e(ro,Ip),e(ut,Sp),y(Vo,ut,null),e(ut,Wp),y(Xo,ut,null),e(ut,Kp),y(Go,ut,null),_(o,sl,b),_(o,io,b),e(io,Jo),e(Jo,Ir),y(Ts,Ir,null),e(io,Up),e(io,Sr),e(Sr,Qp),_(o,al,b),_(o,pt,b),y(ys,pt,null),e(pt,Bp),e(pt,lo),e(lo,Hp),e(lo,Wr),e(Wr,Rp),e(lo,Vp),e(lo,Kr),e(Kr,Xp),e(lo,Gp),e(pt,Jp),e(pt,$s),e($s,Yp),e($s,Ca),e(Ca,Zp),e($s,eh),e(pt,th),e(pt,Ms),e(Ms,oh),e(Ms,Ps),e(Ps,nh),e(Ms,sh),e(pt,ah),e(pt,ft),y(Ns,ft,null),e(ft,rh),e(ft,co),e(co,ih),e(co,Oa),e(Oa,lh),e(co,dh),e(co,Ur),e(Ur,ch),e(co,ph),e(ft,hh),y(Yo,ft,null),e(ft,mh),y(Zo,ft,null),e(ft,uh),y(en,ft,null),_(o,rl,b),_(o,po,b),e(po,tn),e(tn,Qr),y(Fs,Qr,null),e(po,fh),e(po,Br),e(Br,gh),_(o,il,b),_(o,et,b),y(Es,et,null),e(et,_h),e(et,Hr),e(Hr,kh),e(et,bh),e(et,zs),e(zs,vh),e(zs,La),e(La,wh),e(zs,Th),e(et,yh),e(et,qs),e(qs,$h),e(qs,xs),e(xs,Mh),e(qs,Ph),e(et,Nh),y(on,et,null),e(et,Fh),e(et,$t),y(js,$t,null),e($t,Eh),e($t,ho),e(ho,zh),e(ho,Aa),e(Aa,qh),e(ho,xh),e(ho,Rr),e(Rr,jh),e(ho,Ch),e($t,Oh),y(nn,$t,null),e($t,Lh),y(sn,$t,null),_(o,ll,b),_(o,mo,b),e(mo,an),e(an,Vr),y(Cs,Vr,null),e(mo,Ah),e(mo,Xr),e(Xr,Dh),_(o,dl,b),_(o,tt,b),y(Os,tt,null),e(tt,Ih),e(tt,Ls),e(Ls,Sh),e(Ls,Gr),e(Gr,Wh),e(Ls,Kh),e(tt,Uh),e(tt,As),e(As,Qh),e(As,Da),e(Da,Bh),e(As,Hh),e(tt,Rh),e(tt,Ds),e(Ds,Vh),e(Ds,Is),e(Is,Xh),e(Ds,Gh),e(tt,Jh),y(rn,tt,null),e(tt,Yh),e(tt,gt),y(Ss,gt,null),e(gt,Zh),e(gt,uo),e(uo,em),e(uo,Ia),e(Ia,tm),e(uo,om),e(uo,Jr),e(Jr,nm),e(uo,sm),e(gt,am),y(ln,gt,null),e(gt,rm),y(dn,gt,null),e(gt,im),y(cn,gt,null),_(o,cl,b),_(o,fo,b),e(fo,pn),e(pn,Yr),y(Ws,Yr,null),e(fo,lm),e(fo,Zr),e(Zr,dm),_(o,pl,b),_(o,ot,b),y(Ks,ot,null),e(ot,cm),e(ot,ei),e(ei,pm),e(ot,hm),e(ot,Us),e(Us,mm),e(Us,Sa),e(Sa,um),e(Us,fm),e(ot,gm),e(ot,Qs),e(Qs,_m),e(Qs,Bs),e(Bs,km),e(Qs,bm),e(ot,vm),y(hn,ot,null),e(ot,wm),e(ot,_t),y(Hs,_t,null),e(_t,Tm),e(_t,go),e(go,ym),e(go,Wa),e(Wa,$m),e(go,Mm),e(go,ti),e(ti,Pm),e(go,Nm),e(_t,Fm),y(mn,_t,null),e(_t,Em),y(un,_t,null),e(_t,zm),y(fn,_t,null),_(o,hl,b),_(o,_o,b),e(_o,gn),e(gn,oi),y(Rs,oi,null),e(_o,qm),e(_o,ni),e(ni,xm),_(o,ml,b),_(o,nt,b),y(Vs,nt,null),e(nt,jm),e(nt,si),e(si,Cm),e(nt,Om),e(nt,Xs),e(Xs,Lm),e(Xs,Ka),e(Ka,Am),e(Xs,Dm),e(nt,Im),e(nt,Gs),e(Gs,Sm),e(Gs,Js),e(Js,Wm),e(Gs,Km),e(nt,Um),y(_n,nt,null),e(nt,Qm),e(nt,Mt),y(Ys,Mt,null),e(Mt,Bm),e(Mt,ko),e(ko,Hm),e(ko,Ua),e(Ua,Rm),e(ko,Vm),e(ko,ai),e(ai,Xm),e(ko,Gm),e(Mt,Jm),y(kn,Mt,null),e(Mt,Ym),y(bn,Mt,null),_(o,ul,b),_(o,bo,b),e(bo,vn),e(vn,ri),y(Zs,ri,null),e(bo,Zm),e(bo,ii),e(ii,eu),_(o,fl,b),_(o,st,b),y(ea,st,null),e(st,tu),e(st,li),e(li,ou),e(st,nu),e(st,ta),e(ta,su),e(ta,Qa),e(Qa,au),e(ta,ru),e(st,iu),e(st,oa),e(oa,lu),e(oa,na),e(na,du),e(oa,cu),e(st,pu),y(wn,st,null),e(st,hu),e(st,kt),y(sa,kt,null),e(kt,mu),e(kt,vo),e(vo,uu),e(vo,Ba),e(Ba,fu),e(vo,gu),e(vo,di),e(di,_u),e(vo,ku),e(kt,bu),y(Tn,kt,null),e(kt,vu),y(yn,kt,null),e(kt,wu),y($n,kt,null),_(o,gl,b),_(o,wo,b),e(wo,Mn),e(Mn,ci),y(aa,ci,null),e(wo,Tu),e(wo,pi),e(pi,yu),_(o,_l,b),_(o,at,b),y(ra,at,null),e(at,$u),e(at,To),e(To,Mu),e(To,hi),e(hi,Pu),e(To,Nu),e(To,mi),e(mi,Fu),e(To,Eu),e(at,zu),e(at,ia),e(ia,qu),e(ia,Ha),e(Ha,xu),e(ia,ju),e(at,Cu),e(at,la),e(la,Ou),e(la,da),e(da,Lu),e(la,Au),e(at,Du),y(Pn,at,null),e(at,Iu),e(at,bt),y(ca,bt,null),e(bt,Su),e(bt,yo),e(yo,Wu),e(yo,Ra),e(Ra,Ku),e(yo,Uu),e(yo,ui),e(ui,Qu),e(yo,Bu),e(bt,Hu),y(Nn,bt,null),e(bt,Ru),y(Fn,bt,null),e(bt,Vu),y(En,bt,null),kl=!0},p(o,[b]){const pa={};b&2&&(pa.$$scope={dirty:b,ctx:o}),Mo.$set(pa);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),xo.$set(fi);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),jo.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Oo.$set(_i);const ha={};b&2&&(ha.$$scope={dirty:b,ctx:o}),Lo.$set(ha);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Ao.$set(ki);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Io.$set(bi);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),So.$set(vi);const ma={};b&2&&(ma.$$scope={dirty:b,ctx:o}),Wo.$set(ma);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),Ko.$set(wi);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Uo.$set(Ti);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),Bo.$set(yi);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Ho.$set($i);const Mi={};b&2&&(Mi.$$scope={dirty:b,ctx:o}),Vo.$set(Mi);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Xo.$set(Pi);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Go.$set(Ni);const xt={};b&2&&(xt.$$scope={dirty:b,ctx:o}),Yo.$set(xt);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),Zo.$set(Fi);const Ei={};b&2&&(Ei.$$scope={dirty:b,ctx:o}),en.$set(Ei);const zi={};b&2&&(zi.$$scope={dirty:b,ctx:o}),on.$set(zi);const ua={};b&2&&(ua.$$scope={dirty:b,ctx:o}),nn.$set(ua);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:o}),sn.$set(qi);const fa={};b&2&&(fa.$$scope={dirty:b,ctx:o}),rn.$set(fa);const xi={};b&2&&(xi.$$scope={dirty:b,ctx:o}),ln.$set(xi);const ji={};b&2&&(ji.$$scope={dirty:b,ctx:o}),dn.$set(ji);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),cn.$set(Ci);const jt={};b&2&&(jt.$$scope={dirty:b,ctx:o}),hn.$set(jt);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),mn.$set(Ct);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),un.$set(Oi);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),fn.$set(Li);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),_n.$set(Ai);const $o={};b&2&&($o.$$scope={dirty:b,ctx:o}),kn.$set($o);const Di={};b&2&&(Di.$$scope={dirty:b,ctx:o}),bn.$set(Di);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),wn.$set(Ii);const ga={};b&2&&(ga.$$scope={dirty:b,ctx:o}),Tn.$set(ga);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),yn.$set(Si);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),$n.$set(Wi);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),Pn.$set(Ki);const ht={};b&2&&(ht.$$scope={dirty:b,ctx:o}),Nn.$set(ht);const _a={};b&2&&(_a.$$scope={dirty:b,ctx:o}),Fn.$set(_a);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),En.$set(Ui)},i(o){kl||($(d.$$.fragment,o),$(N.$$.fragment,o),$(F.$$.fragment,o),$(Oe.$$.fragment,o),$(Mo.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Kn.$$.fragment,o),$(Un.$$.fragment,o),$(Qn.$$.fragment,o),$(Bn.$$.fragment,o),$(Vn.$$.fragment,o),$(Xn.$$.fragment,o),$(Gn.$$.fragment,o),$(es.$$.fragment,o),$(xo.$$.fragment,o),$(jo.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Oo.$$.fragment,o),$(Lo.$$.fragment,o),$(Ao.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(ds.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Wo.$$.fragment,o),$(Ko.$$.fragment,o),$(Uo.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(fs.$$.fragment,o),$(Bo.$$.fragment,o),$(Ho.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(ws.$$.fragment,o),$(Vo.$$.fragment,o),$(Xo.$$.fragment,o),$(Go.$$.fragment,o),$(Ts.$$.fragment,o),$(ys.$$.fragment,o),$(Ns.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Fs.$$.fragment,o),$(Es.$$.fragment,o),$(on.$$.fragment,o),$(js.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(Cs.$$.fragment,o),$(Os.$$.fragment,o),$(rn.$$.fragment,o),$(Ss.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(Ws.$$.fragment,o),$(Ks.$$.fragment,o),$(hn.$$.fragment,o),$(Hs.$$.fragment,o),$(mn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(Rs.$$.fragment,o),$(Vs.$$.fragment,o),$(_n.$$.fragment,o),$(Ys.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(wn.$$.fragment,o),$(sa.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(Pn.$$.fragment,o),$(ca.$$.fragment,o),$(Nn.$$.fragment,o),$(Fn.$$.fragment,o),$(En.$$.fragment,o),kl=!0)},o(o){M(d.$$.fragment,o),M(N.$$.fragment,o),M(F.$$.fragment,o),M(Oe.$$.fragment,o),M(Mo.$$.fragment,o),M(On.$$.fragment,o),M(Ln.$$.fragment,o),M(Dn.$$.fragment,o),M(Sn.$$.fragment,o),M(Kn.$$.fragment,o),M(Un.$$.fragment,o),M(Qn.$$.fragment,o),M(Bn.$$.fragment,o),M(Vn.$$.fragment,o),M(Xn.$$.fragment,o),M(Gn.$$.fragment,o),M(es.$$.fragment,o),M(xo.$$.fragment,o),M(jo.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(ns.$$.fragment,o),M(Oo.$$.fragment,o),M(Lo.$$.fragment,o),M(Ao.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(ds.$$.fragment,o),M(Io.$$.fragment,o),M(So.$$.fragment,o),M(Wo.$$.fragment,o),M(Ko.$$.fragment,o),M(Uo.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(fs.$$.fragment,o),M(Bo.$$.fragment,o),M(Ho.$$.fragment,o),M(gs.$$.fragment,o),M(_s.$$.fragment,o),M(ws.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(Ts.$$.fragment,o),M(ys.$$.fragment,o),M(Ns.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(Fs.$$.fragment,o),M(Es.$$.fragment,o),M(on.$$.fragment,o),M(js.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(Cs.$$.fragment,o),M(Os.$$.fragment,o),M(rn.$$.fragment,o),M(Ss.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(Ws.$$.fragment,o),M(Ks.$$.fragment,o),M(hn.$$.fragment,o),M(Hs.$$.fragment,o),M(mn.$$.fragment,o),M(un.$$.fragment,o),M(fn.$$.fragment,o),M(Rs.$$.fragment,o),M(Vs.$$.fragment,o),M(_n.$$.fragment,o),M(Ys.$$.fragment,o),M(kn.$$.fragment,o),M(bn.$$.fragment,o),M(Zs.$$.fragment,o),M(ea.$$.fragment,o),M(wn.$$.fragment,o),M(sa.$$.fragment,o),M(Tn.$$.fragment,o),M(yn.$$.fragment,o),M($n.$$.fragment,o),M(aa.$$.fragment,o),M(ra.$$.fragment,o),M(Pn.$$.fragment,o),M(ca.$$.fragment,o),M(Nn.$$.fragment,o),M(Fn.$$.fragment,o),M(En.$$.fragment,o),kl=!1},d(o){t(l),o&&t(g),o&&t(c),P(d),o&&t(he),o&&t(A),P(N),o&&t(me),o&&t(S),o&&t(ue),o&&t(K),o&&t(fe),o&&t(U),o&&t(ge),o&&t(ee),o&&t(_e),o&&t(Q),o&&t(ke),o&&t(B),o&&t(be),o&&t(W),o&&t(L),o&&t(se),P(F),o&&t(Ke),o&&t(E),P(Oe),P(Mo),o&&t(Qi),o&&t(Vt),P(On),o&&t(Bi),o&&t(Ze),P(Ln),P(Dn),P(Sn),P(Kn),P(Un),o&&t(Hi),o&&t(Xt),P(Qn),o&&t(Ri),o&&t(wt),P(Bn),P(Vn),o&&t(Vi),o&&t(Gt),P(Xn),o&&t(Xi),o&&t(it),P(Gn),P(es),P(xo),P(jo),o&&t(Gi),o&&t(Yt),P(ts),o&&t(Ji),o&&t(Zt),P(os),P(ns),P(Oo),P(Lo),P(Ao),o&&t(Yi),o&&t(to),P(ss),o&&t(Zi),o&&t(lt),P(as),P(ds),P(Io),P(So),P(Wo),P(Ko),P(Uo),o&&t(el),o&&t(no),P(cs),o&&t(tl),o&&t(dt),P(ps),P(fs),P(Bo),P(Ho),o&&t(ol),o&&t(ao),P(gs),o&&t(nl),o&&t(ct),P(_s),P(ws),P(Vo),P(Xo),P(Go),o&&t(sl),o&&t(io),P(Ts),o&&t(al),o&&t(pt),P(ys),P(Ns),P(Yo),P(Zo),P(en),o&&t(rl),o&&t(po),P(Fs),o&&t(il),o&&t(et),P(Es),P(on),P(js),P(nn),P(sn),o&&t(ll),o&&t(mo),P(Cs),o&&t(dl),o&&t(tt),P(Os),P(rn),P(Ss),P(ln),P(dn),P(cn),o&&t(cl),o&&t(fo),P(Ws),o&&t(pl),o&&t(ot),P(Ks),P(hn),P(Hs),P(mn),P(un),P(fn),o&&t(hl),o&&t(_o),P(Rs),o&&t(ml),o&&t(nt),P(Vs),P(_n),P(Ys),P(kn),P(bn),o&&t(ul),o&&t(bo),P(Zs),o&&t(fl),o&&t(st),P(ea),P(wn),P(sa),P(Tn),P(yn),P($n),o&&t(gl),o&&t(wo),P(aa),o&&t(_l),o&&t(at),P(ra),P(Pn),P(ca),P(Nn),P(Fn),P(En)}}}const Q_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function B_(z){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Jg{constructor(l){super();Yg(this,l,B_,U_,Zg,{})}}export{Y_ as default,Q_ as metadata};
