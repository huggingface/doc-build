import{S as Jg,i as Yg,s as Zg,e as n,k as m,w as T,t as r,M as e_,c as s,d as t,m as h,a,x as M,h as i,b,G as e,g as _,y as $,q as w,o as P,B as N,v as t_,L as be}from"../../chunks/vendor-hf-doc-builder.js";import{T as Fe}from"../../chunks/Tip-hf-doc-builder.js";import{D as G}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Te}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ae}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function o_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetModel, MPNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=n("p"),g=r("Examples:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Examples:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function n_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function s_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function a_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function r_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function i_(y){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function l_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function d_(y){let l,g,c,p,v;return p=new Te({props:{code:`import torch
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
`}}),{c(){l=n("p"),g=r("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example of single-label classification:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function c_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function p_(y){let l,g,c,p,v;return p=new Te({props:{code:`import torch
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
`}}),{c(){l=n("p"),g=r("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example of multi-label classification:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function m_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function h_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function f_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function u_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function g_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function __(y){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function k_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function v_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function b_(y){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function T_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function M_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function $_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function w_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function P_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function N_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function y_(y){let l,g;return l=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function F_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function E_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function z_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function q_(y){let l,g;return l=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function x_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function C_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function j_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function L_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function A_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function O_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function I_(y){let l,g;return l=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function S_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he;return{c(){l=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),c=m(),p=n("ul"),v=n("li"),d=r("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),E=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),J=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=n("code"),ce=r("model(inputs)"),se=r("."),U=m(),O=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),B=m(),q=n("ul"),x=n("li"),Z=r("a single Tensor with "),H=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),R=n("code"),re=r("model(inputs_ids)"),te=m(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),oe=r("model([input_ids, attention_mask])"),me=m(),L=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=n("code"),he=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(u){l=s(u,"P",{});var F=a(l);g=i(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),c=h(u),p=s(u,"UL",{});var K=a(p);v=s(K,"LI",{});var _e=a(v);d=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),f=h(K),E=s(K,"LI",{});var Me=a(E);le=i(Me,"having all inputs as a list, tuple or dict in the first positional arguments."),Me.forEach(t),K.forEach(t),V=h(u),z=s(u,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);J=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=s(I,"CODE",{});var $e=a(W);ce=i($e,"model(inputs)"),$e.forEach(t),se=i(I,"."),I.forEach(t),U=h(u),O=s(u,"P",{});var we=a(O);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),B=h(u),q=s(u,"UL",{});var A=a(q);x=s(A,"LI",{});var S=a(x);Z=i(S,"a single Tensor with "),H=s(S,"CODE",{});var Pe=a(H);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),R=s(S,"CODE",{});var ge=a(R);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=h(A),C=s(A,"LI",{});var fe=a(C);pe=i(fe,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s(fe,"CODE",{});var Ne=a(Q);oe=i(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),fe.forEach(t),me=h(A),L=s(A,"LI",{});var ie=a(L);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),j=s(ie,"CODE",{});var ue=a(j);he=i(ue,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),ue.forEach(t),ie.forEach(t),A.forEach(t)},m(u,F){_(u,l,F),e(l,g),_(u,c,F),_(u,p,F),e(p,v),e(v,d),e(p,f),e(p,E),e(E,le),_(u,V,F),_(u,z,F),e(z,X),e(z,D),e(D,J),e(z,de),e(z,W),e(W,ce),e(z,se),_(u,U,F),_(u,O,F),e(O,Y),_(u,B,F),_(u,q,F),e(q,x),e(x,Z),e(x,H),e(H,ae),e(x,ee),e(x,R),e(R,re),e(q,te),e(q,C),e(C,pe),e(C,Q),e(Q,oe),e(q,me),e(q,L),e(L,ne),e(L,j),e(j,he)},d(u){u&&t(l),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(U),u&&t(O),u&&t(B),u&&t(q)}}}function D_(y){let l,g,c,p,v;return{c(){l=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),p=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s(f,"CODE",{});var E=a(c);p=i(E,"Module"),E.forEach(t),v=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(d,f){_(d,l,f),e(l,g),e(l,c),e(c,p),e(l,v)},d(d){d&&t(l)}}}function W_(y){let l,g,c,p,v;return p=new Te({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
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
`}}),{c(){l=n("p"),g=r("Example:"),c=m(),T(p.$$.fragment)},l(d){l=s(d,"P",{});var f=a(l);g=i(f,"Example:"),f.forEach(t),c=h(d),M(p.$$.fragment,d)},m(d,f){_(d,l,f),e(l,g),_(d,c,f),$(p,d,f),v=!0},p:be,i(d){v||(w(p.$$.fragment,d),v=!0)},o(d){P(p.$$.fragment,d),v=!1},d(d){d&&t(l),d&&t(c),N(p,d)}}}function Q_(y){let l,g;return l=new Te({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){M(l.$$.fragment,c)},m(c,p){$(l,c,p),g=!0},p:be,i(c){g||(w(l.$$.fragment,c),g=!0)},o(c){P(l.$$.fragment,c),g=!1},d(c){N(l,c)}}}function H_(y){let l,g,c,p,v,d,f,E,le,V,z,X,D,J,de,W,ce,se,U,O,Y,B,q,x,Z,H,ae,ee,R,re,te,C,pe,Q,oe,me,L,ne,j,he,u,F,K,_e,Me,I,ke,$e,we,A,S,Pe,ge,fe,Ne,ie,ue,no,Ka,un,Jl,Xa,Yl,qi,Je,gn,Zl,dt,ed,ta,td,od,oa,nd,sd,_n,ad,rd,id,Nt,ld,na,dd,cd,sa,pd,md,hd,so,xi,yt,ao,Ga,kn,fd,Ja,ud,Ci,Ee,vn,gd,bn,_d,aa,kd,vd,bd,ht,Tn,Td,Ya,Md,$d,Mn,ra,wd,Za,Pd,Nd,ia,yd,er,Fd,Ed,ro,$n,zd,wn,qd,tr,xd,Cd,jd,io,Pn,Ld,or,Ad,Od,la,Nn,ji,Ft,lo,nr,yn,Id,sr,Sd,Li,Ye,Fn,Dd,En,Wd,ar,Qd,Hd,Rd,zn,Ud,da,Vd,Bd,Kd,co,qn,Xd,rr,Gd,Ai,Et,po,ir,xn,Jd,lr,Yd,Oi,Oe,Cn,Zd,dr,ec,tc,jn,oc,ca,nc,sc,ac,Ln,rc,An,ic,lc,dc,Ze,On,cc,zt,pc,pa,mc,hc,cr,fc,uc,gc,mo,_c,ho,Ii,qt,fo,pr,In,kc,mr,vc,Si,xt,Sn,bc,He,Dn,Tc,Ct,Mc,ma,$c,wc,hr,Pc,Nc,yc,uo,Fc,go,Ec,_o,Di,jt,ko,fr,Wn,zc,ur,qc,Wi,Ie,Qn,xc,gr,Cc,jc,Hn,Lc,ha,Ac,Oc,Ic,Rn,Sc,Un,Dc,Wc,Qc,ye,Vn,Hc,Lt,Rc,fa,Uc,Vc,_r,Bc,Kc,Xc,vo,Gc,bo,Jc,To,Yc,Mo,Zc,$o,Qi,At,wo,kr,Bn,ep,vr,tp,Hi,Se,Kn,op,br,np,sp,Xn,ap,ua,rp,ip,lp,Gn,dp,Jn,cp,pp,mp,et,Yn,hp,Ot,fp,ga,up,gp,Tr,_p,kp,vp,Po,bp,No,Ri,It,yo,Mr,Zn,Tp,$r,Mp,Ui,De,es,$p,wr,wp,Pp,ts,Np,_a,yp,Fp,Ep,os,zp,ns,qp,xp,Cp,Re,ss,jp,St,Lp,ka,Ap,Op,Pr,Ip,Sp,Dp,Fo,Wp,Eo,Qp,zo,Vi,Dt,qo,Nr,as,Hp,yr,Rp,Bi,We,rs,Up,Wt,Vp,Fr,Bp,Kp,Er,Xp,Gp,Jp,is,Yp,va,Zp,em,tm,ls,om,ds,nm,sm,am,Ue,cs,rm,Qt,im,ba,lm,dm,zr,cm,pm,mm,xo,hm,Co,fm,jo,Ki,Ht,Lo,qr,ps,um,xr,gm,Xi,ze,ms,_m,Cr,km,vm,hs,bm,Ta,Tm,Mm,$m,fs,wm,us,Pm,Nm,ym,Ao,Fm,tt,gs,Em,Rt,zm,Ma,qm,xm,jr,Cm,jm,Lm,Oo,Am,Io,Gi,Ut,So,Lr,_s,Om,Ar,Im,Ji,qe,ks,Sm,vs,Dm,Or,Wm,Qm,Hm,bs,Rm,$a,Um,Vm,Bm,Ts,Km,Ms,Xm,Gm,Jm,Do,Ym,Ve,$s,Zm,Vt,eh,wa,th,oh,Ir,nh,sh,ah,Wo,rh,Qo,ih,Ho,Yi,Bt,Ro,Sr,ws,lh,Dr,dh,Zi,xe,Ps,ch,Wr,ph,mh,Ns,hh,Pa,fh,uh,gh,ys,_h,Fs,kh,vh,bh,Uo,Th,Be,Es,Mh,Kt,$h,Na,wh,Ph,Qr,Nh,yh,Fh,Vo,Eh,Bo,zh,Ko,el,Xt,Xo,Hr,zs,qh,Rr,xh,tl,Ce,qs,Ch,Ur,jh,Lh,xs,Ah,ya,Oh,Ih,Sh,Cs,Dh,js,Wh,Qh,Hh,Go,Rh,ot,Ls,Uh,Gt,Vh,Fa,Bh,Kh,Vr,Xh,Gh,Jh,Jo,Yh,Yo,ol,Jt,Zo,Br,As,Zh,Kr,ef,nl,je,Os,tf,Xr,of,nf,Is,sf,Ea,af,rf,lf,Ss,df,Ds,cf,pf,mf,en,hf,Ke,Ws,ff,Yt,uf,za,gf,_f,Gr,kf,vf,bf,tn,Tf,on,Mf,nn,sl,Zt,sn,Jr,Qs,$f,Yr,wf,al,Le,Hs,Pf,eo,Nf,Zr,yf,Ff,ei,Ef,zf,qf,Rs,xf,qa,Cf,jf,Lf,Us,Af,Vs,Of,If,Sf,an,Df,Xe,Bs,Wf,to,Qf,xa,Hf,Rf,ti,Uf,Vf,Bf,rn,Kf,ln,Xf,dn,rl;return d=new Ae({}),J=new Ae({}),un=new Ae({}),gn=new G({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),so=new ve({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:y}}}),kn=new Ae({}),vn=new G({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet.py#L66"}}),Tn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet.py#L231",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),$n=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet.py#L256",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Pn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Nn=new G({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),yn=new Ae({}),Fn=new G({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51"}}),qn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L191",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xn=new Ae({}),Cn=new G({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L483"}}),On=new G({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L512",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Fe({props:{$$slots:{default:[n_]},$$scope:{ctx:y}}}),ho=new ve({props:{anchor:"transformers.MPNetModel.forward.example",$$slots:{default:[s_]},$$scope:{ctx:y}}}),In=new Ae({}),Sn=new G({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L576"}}),Dn=new G({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L595",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Fe({props:{$$slots:{default:[a_]},$$scope:{ctx:y}}}),go=new ve({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[r_]},$$scope:{ctx:y}}}),_o=new ve({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:y}}}),Wn=new Ae({}),Qn=new G({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L685"}}),Vn=new G({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L698",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Fe({props:{$$slots:{default:[l_]},$$scope:{ctx:y}}}),bo=new ve({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:y}}}),To=new ve({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:y}}}),Mo=new ve({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:y}}}),$o=new ve({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[m_]},$$scope:{ctx:y}}}),Bn=new Ae({}),Kn=new G({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),Yn=new G({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L793",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Fe({props:{$$slots:{default:[h_]},$$scope:{ctx:y}}}),No=new ve({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[f_]},$$scope:{ctx:y}}}),Zn=new Ae({}),es=new G({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),ss=new G({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L886",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fo=new Fe({props:{$$slots:{default:[u_]},$$scope:{ctx:y}}}),Eo=new ve({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:y}}}),zo=new ve({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:y}}}),as=new Ae({}),rs=new G({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L971"}}),cs=new G({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_mpnet.py#L985",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xo=new Fe({props:{$$slots:{default:[k_]},$$scope:{ctx:y}}}),Co=new ve({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[v_]},$$scope:{ctx:y}}}),jo=new ve({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[b_]},$$scope:{ctx:y}}}),ps=new Ae({}),ms=new G({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L664"}}),Ao=new Fe({props:{$$slots:{default:[T_]},$$scope:{ctx:y}}}),gs=new G({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L669",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Oo=new Fe({props:{$$slots:{default:[M_]},$$scope:{ctx:y}}}),Io=new ve({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[$_]},$$scope:{ctx:y}}}),_s=new Ae({}),ks=new G({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L767"}}),Do=new Fe({props:{$$slots:{default:[w_]},$$scope:{ctx:y}}}),$s=new G({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L784",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Wo=new Fe({props:{$$slots:{default:[P_]},$$scope:{ctx:y}}}),Qo=new ve({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[N_]},$$scope:{ctx:y}}}),Ho=new ve({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[y_]},$$scope:{ctx:y}}}),ws=new Ae({}),Ps=new G({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L878"}}),Uo=new Fe({props:{$$slots:{default:[F_]},$$scope:{ctx:y}}}),Es=new G({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L889",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new Fe({props:{$$slots:{default:[E_]},$$scope:{ctx:y}}}),Bo=new ve({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[z_]},$$scope:{ctx:y}}}),Ko=new ve({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:y}}}),zs=new Ae({}),qs=new G({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L959"}}),Go=new Fe({props:{$$slots:{default:[x_]},$$scope:{ctx:y}}}),Ls=new G({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L979",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jo=new Fe({props:{$$slots:{default:[C_]},$$scope:{ctx:y}}}),Yo=new ve({props:{anchor:"transformers.TFMPNetForMultipleChoice.call.example",$$slots:{default:[j_]},$$scope:{ctx:y}}}),As=new Ae({}),Os=new G({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1076"}}),en=new Fe({props:{$$slots:{default:[L_]},$$scope:{ctx:y}}}),Ws=new G({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),tn=new Fe({props:{$$slots:{default:[A_]},$$scope:{ctx:y}}}),on=new ve({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[O_]},$$scope:{ctx:y}}}),nn=new ve({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[I_]},$$scope:{ctx:y}}}),Qs=new Ae({}),Hs=new G({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1159"}}),an=new Fe({props:{$$slots:{default:[S_]},$$scope:{ctx:y}}}),Bs=new G({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rn=new Fe({props:{$$slots:{default:[D_]},$$scope:{ctx:y}}}),ln=new ve({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:y}}}),dn=new ve({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[Q_]},$$scope:{ctx:y}}}),{c(){l=n("meta"),g=m(),c=n("h1"),p=n("a"),v=n("span"),T(d.$$.fragment),f=m(),E=n("span"),le=r("MPNet"),V=m(),z=n("h2"),X=n("a"),D=n("span"),T(J.$$.fragment),de=m(),W=n("span"),ce=r("Overview"),se=m(),U=n("p"),O=r("The MPNet model was proposed in "),Y=n("a"),B=r("MPNet: Masked and Permuted Pre-training for Language Understanding"),q=r(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),x=m(),Z=n("p"),H=r(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ae=m(),ee=n("p"),R=r("The abstract from the paper is the following:"),re=m(),te=n("p"),C=n("em"),pe=r(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),Q=m(),oe=n("p"),me=r("Tips:"),L=m(),ne=n("ul"),j=n("li"),he=r("MPNet doesn\u2019t have "),u=n("code"),F=r("token_type_ids"),K=r(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=n("code"),Me=r("tokenizer.sep_token"),I=r(" (or "),ke=n("code"),$e=r("[sep]"),we=r(")."),A=m(),S=n("p"),Pe=r("The original code can be found "),ge=n("a"),fe=r("here"),Ne=r("."),ie=m(),ue=n("h2"),no=n("a"),Ka=n("span"),T(un.$$.fragment),Jl=m(),Xa=n("span"),Yl=r("MPNetConfig"),qi=m(),Je=n("div"),T(gn.$$.fragment),Zl=m(),dt=n("p"),ed=r("This is the configuration class to store the configuration of a "),ta=n("a"),td=r("MPNetModel"),od=r(" or a "),oa=n("a"),nd=r("TFMPNetModel"),sd=r(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),_n=n("a"),ad=r("microsoft/mpnet-base"),rd=r(" architecture."),id=m(),Nt=n("p"),ld=r("Configuration objects inherit from "),na=n("a"),dd=r("PretrainedConfig"),cd=r(` and can be used to control the model outputs. Read the
documentation from `),sa=n("a"),pd=r("PretrainedConfig"),md=r(" for more information."),hd=m(),T(so.$$.fragment),xi=m(),yt=n("h2"),ao=n("a"),Ga=n("span"),T(kn.$$.fragment),fd=m(),Ja=n("span"),ud=r("MPNetTokenizer"),Ci=m(),Ee=n("div"),T(vn.$$.fragment),gd=m(),bn=n("p"),_d=r("This tokenizer inherits from "),aa=n("a"),kd=r("BertTokenizer"),vd=r(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),bd=m(),ht=n("div"),T(Tn.$$.fragment),Td=m(),Ya=n("p"),Md=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),$d=m(),Mn=n("ul"),ra=n("li"),wd=r("single sequence: "),Za=n("code"),Pd=r("<s> X </s>"),Nd=m(),ia=n("li"),yd=r("pair of sequences: "),er=n("code"),Fd=r("<s> A </s></s> B </s>"),Ed=m(),ro=n("div"),T($n.$$.fragment),zd=m(),wn=n("p"),qd=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tr=n("code"),xd=r("prepare_for_model"),Cd=r(" methods."),jd=m(),io=n("div"),T(Pn.$$.fragment),Ld=m(),or=n("p"),Ad=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Od=m(),la=n("div"),T(Nn.$$.fragment),ji=m(),Ft=n("h2"),lo=n("a"),nr=n("span"),T(yn.$$.fragment),Id=m(),sr=n("span"),Sd=r("MPNetTokenizerFast"),Li=m(),Ye=n("div"),T(Fn.$$.fragment),Dd=m(),En=n("p"),Wd=r("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),ar=n("em"),Qd=r("tokenizers"),Hd=r(" library). Based on WordPiece."),Rd=m(),zn=n("p"),Ud=r("This tokenizer inherits from "),da=n("a"),Vd=r("PreTrainedTokenizerFast"),Bd=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Kd=m(),co=n("div"),T(qn.$$.fragment),Xd=m(),rr=n("p"),Gd=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Ai=m(),Et=n("h2"),po=n("a"),ir=n("span"),T(xn.$$.fragment),Jd=m(),lr=n("span"),Yd=r("MPNetModel"),Oi=m(),Oe=n("div"),T(Cn.$$.fragment),Zd=m(),dr=n("p"),ec=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=m(),jn=n("p"),oc=r("This model inherits from "),ca=n("a"),nc=r("PreTrainedModel"),sc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=m(),Ln=n("p"),rc=r("This model is also a PyTorch "),An=n("a"),ic=r("torch.nn.Module"),lc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=m(),Ze=n("div"),T(On.$$.fragment),cc=m(),zt=n("p"),pc=r("The "),pa=n("a"),mc=r("MPNetModel"),hc=r(" forward method, overrides the "),cr=n("code"),fc=r("__call__"),uc=r(" special method."),gc=m(),T(mo.$$.fragment),_c=m(),T(ho.$$.fragment),Ii=m(),qt=n("h2"),fo=n("a"),pr=n("span"),T(In.$$.fragment),kc=m(),mr=n("span"),vc=r("MPNetForMaskedLM"),Si=m(),xt=n("div"),T(Sn.$$.fragment),bc=m(),He=n("div"),T(Dn.$$.fragment),Tc=m(),Ct=n("p"),Mc=r("The "),ma=n("a"),$c=r("MPNetForMaskedLM"),wc=r(" forward method, overrides the "),hr=n("code"),Pc=r("__call__"),Nc=r(" special method."),yc=m(),T(uo.$$.fragment),Fc=m(),T(go.$$.fragment),Ec=m(),T(_o.$$.fragment),Di=m(),jt=n("h2"),ko=n("a"),fr=n("span"),T(Wn.$$.fragment),zc=m(),ur=n("span"),qc=r("MPNetForSequenceClassification"),Wi=m(),Ie=n("div"),T(Qn.$$.fragment),xc=m(),gr=n("p"),Cc=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),jc=m(),Hn=n("p"),Lc=r("This model inherits from "),ha=n("a"),Ac=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=m(),Rn=n("p"),Sc=r("This model is also a PyTorch "),Un=n("a"),Dc=r("torch.nn.Module"),Wc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc=m(),ye=n("div"),T(Vn.$$.fragment),Hc=m(),Lt=n("p"),Rc=r("The "),fa=n("a"),Uc=r("MPNetForSequenceClassification"),Vc=r(" forward method, overrides the "),_r=n("code"),Bc=r("__call__"),Kc=r(" special method."),Xc=m(),T(vo.$$.fragment),Gc=m(),T(bo.$$.fragment),Jc=m(),T(To.$$.fragment),Yc=m(),T(Mo.$$.fragment),Zc=m(),T($o.$$.fragment),Qi=m(),At=n("h2"),wo=n("a"),kr=n("span"),T(Bn.$$.fragment),ep=m(),vr=n("span"),tp=r("MPNetForMultipleChoice"),Hi=m(),Se=n("div"),T(Kn.$$.fragment),op=m(),br=n("p"),np=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=m(),Xn=n("p"),ap=r("This model inherits from "),ua=n("a"),rp=r("PreTrainedModel"),ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=m(),Gn=n("p"),dp=r("This model is also a PyTorch "),Jn=n("a"),cp=r("torch.nn.Module"),pp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp=m(),et=n("div"),T(Yn.$$.fragment),hp=m(),Ot=n("p"),fp=r("The "),ga=n("a"),up=r("MPNetForMultipleChoice"),gp=r(" forward method, overrides the "),Tr=n("code"),_p=r("__call__"),kp=r(" special method."),vp=m(),T(Po.$$.fragment),bp=m(),T(No.$$.fragment),Ri=m(),It=n("h2"),yo=n("a"),Mr=n("span"),T(Zn.$$.fragment),Tp=m(),$r=n("span"),Mp=r("MPNetForTokenClassification"),Ui=m(),De=n("div"),T(es.$$.fragment),$p=m(),wr=n("p"),wp=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pp=m(),ts=n("p"),Np=r("This model inherits from "),_a=n("a"),yp=r("PreTrainedModel"),Fp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep=m(),os=n("p"),zp=r("This model is also a PyTorch "),ns=n("a"),qp=r("torch.nn.Module"),xp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp=m(),Re=n("div"),T(ss.$$.fragment),jp=m(),St=n("p"),Lp=r("The "),ka=n("a"),Ap=r("MPNetForTokenClassification"),Op=r(" forward method, overrides the "),Pr=n("code"),Ip=r("__call__"),Sp=r(" special method."),Dp=m(),T(Fo.$$.fragment),Wp=m(),T(Eo.$$.fragment),Qp=m(),T(zo.$$.fragment),Vi=m(),Dt=n("h2"),qo=n("a"),Nr=n("span"),T(as.$$.fragment),Hp=m(),yr=n("span"),Rp=r("MPNetForQuestionAnswering"),Bi=m(),We=n("div"),T(rs.$$.fragment),Up=m(),Wt=n("p"),Vp=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Fr=n("code"),Bp=r("span start logits"),Kp=r(" and "),Er=n("code"),Xp=r("span end logits"),Gp=r(")."),Jp=m(),is=n("p"),Yp=r("This model inherits from "),va=n("a"),Zp=r("PreTrainedModel"),em=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=m(),ls=n("p"),om=r("This model is also a PyTorch "),ds=n("a"),nm=r("torch.nn.Module"),sm=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=m(),Ue=n("div"),T(cs.$$.fragment),rm=m(),Qt=n("p"),im=r("The "),ba=n("a"),lm=r("MPNetForQuestionAnswering"),dm=r(" forward method, overrides the "),zr=n("code"),cm=r("__call__"),pm=r(" special method."),mm=m(),T(xo.$$.fragment),hm=m(),T(Co.$$.fragment),fm=m(),T(jo.$$.fragment),Ki=m(),Ht=n("h2"),Lo=n("a"),qr=n("span"),T(ps.$$.fragment),um=m(),xr=n("span"),gm=r("TFMPNetModel"),Xi=m(),ze=n("div"),T(ms.$$.fragment),_m=m(),Cr=n("p"),km=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),vm=m(),hs=n("p"),bm=r("This model inherits from "),Ta=n("a"),Tm=r("TFPreTrainedModel"),Mm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$m=m(),fs=n("p"),wm=r("This model is also a "),us=n("a"),Pm=r("tf.keras.Model"),Nm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ym=m(),T(Ao.$$.fragment),Fm=m(),tt=n("div"),T(gs.$$.fragment),Em=m(),Rt=n("p"),zm=r("The "),Ma=n("a"),qm=r("TFMPNetModel"),xm=r(" forward method, overrides the "),jr=n("code"),Cm=r("__call__"),jm=r(" special method."),Lm=m(),T(Oo.$$.fragment),Am=m(),T(Io.$$.fragment),Gi=m(),Ut=n("h2"),So=n("a"),Lr=n("span"),T(_s.$$.fragment),Om=m(),Ar=n("span"),Im=r("TFMPNetForMaskedLM"),Ji=m(),qe=n("div"),T(ks.$$.fragment),Sm=m(),vs=n("p"),Dm=r("MPNet Model with a "),Or=n("code"),Wm=r("language modeling"),Qm=r(" head on top."),Hm=m(),bs=n("p"),Rm=r("This model inherits from "),$a=n("a"),Um=r("TFPreTrainedModel"),Vm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bm=m(),Ts=n("p"),Km=r("This model is also a "),Ms=n("a"),Xm=r("tf.keras.Model"),Gm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jm=m(),T(Do.$$.fragment),Ym=m(),Ve=n("div"),T($s.$$.fragment),Zm=m(),Vt=n("p"),eh=r("The "),wa=n("a"),th=r("TFMPNetForMaskedLM"),oh=r(" forward method, overrides the "),Ir=n("code"),nh=r("__call__"),sh=r(" special method."),ah=m(),T(Wo.$$.fragment),rh=m(),T(Qo.$$.fragment),ih=m(),T(Ho.$$.fragment),Yi=m(),Bt=n("h2"),Ro=n("a"),Sr=n("span"),T(ws.$$.fragment),lh=m(),Dr=n("span"),dh=r("TFMPNetForSequenceClassification"),Zi=m(),xe=n("div"),T(Ps.$$.fragment),ch=m(),Wr=n("p"),ph=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),mh=m(),Ns=n("p"),hh=r("This model inherits from "),Pa=n("a"),fh=r("TFPreTrainedModel"),uh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=m(),ys=n("p"),_h=r("This model is also a "),Fs=n("a"),kh=r("tf.keras.Model"),vh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh=m(),T(Uo.$$.fragment),Th=m(),Be=n("div"),T(Es.$$.fragment),Mh=m(),Kt=n("p"),$h=r("The "),Na=n("a"),wh=r("TFMPNetForSequenceClassification"),Ph=r(" forward method, overrides the "),Qr=n("code"),Nh=r("__call__"),yh=r(" special method."),Fh=m(),T(Vo.$$.fragment),Eh=m(),T(Bo.$$.fragment),zh=m(),T(Ko.$$.fragment),el=m(),Xt=n("h2"),Xo=n("a"),Hr=n("span"),T(zs.$$.fragment),qh=m(),Rr=n("span"),xh=r("TFMPNetForMultipleChoice"),tl=m(),Ce=n("div"),T(qs.$$.fragment),Ch=m(),Ur=n("p"),jh=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Lh=m(),xs=n("p"),Ah=r("This model inherits from "),ya=n("a"),Oh=r("TFPreTrainedModel"),Ih=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sh=m(),Cs=n("p"),Dh=r("This model is also a "),js=n("a"),Wh=r("tf.keras.Model"),Qh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hh=m(),T(Go.$$.fragment),Rh=m(),ot=n("div"),T(Ls.$$.fragment),Uh=m(),Gt=n("p"),Vh=r("The "),Fa=n("a"),Bh=r("TFMPNetForMultipleChoice"),Kh=r(" forward method, overrides the "),Vr=n("code"),Xh=r("__call__"),Gh=r(" special method."),Jh=m(),T(Jo.$$.fragment),Yh=m(),T(Yo.$$.fragment),ol=m(),Jt=n("h2"),Zo=n("a"),Br=n("span"),T(As.$$.fragment),Zh=m(),Kr=n("span"),ef=r("TFMPNetForTokenClassification"),nl=m(),je=n("div"),T(Os.$$.fragment),tf=m(),Xr=n("p"),of=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nf=m(),Is=n("p"),sf=r("This model inherits from "),Ea=n("a"),af=r("TFPreTrainedModel"),rf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lf=m(),Ss=n("p"),df=r("This model is also a "),Ds=n("a"),cf=r("tf.keras.Model"),pf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mf=m(),T(en.$$.fragment),hf=m(),Ke=n("div"),T(Ws.$$.fragment),ff=m(),Yt=n("p"),uf=r("The "),za=n("a"),gf=r("TFMPNetForTokenClassification"),_f=r(" forward method, overrides the "),Gr=n("code"),kf=r("__call__"),vf=r(" special method."),bf=m(),T(tn.$$.fragment),Tf=m(),T(on.$$.fragment),Mf=m(),T(nn.$$.fragment),sl=m(),Zt=n("h2"),sn=n("a"),Jr=n("span"),T(Qs.$$.fragment),$f=m(),Yr=n("span"),wf=r("TFMPNetForQuestionAnswering"),al=m(),Le=n("div"),T(Hs.$$.fragment),Pf=m(),eo=n("p"),Nf=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=n("code"),yf=r("span start logits"),Ff=r(" and "),ei=n("code"),Ef=r("span end logits"),zf=r(")."),qf=m(),Rs=n("p"),xf=r("This model inherits from "),qa=n("a"),Cf=r("TFPreTrainedModel"),jf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=m(),Us=n("p"),Af=r("This model is also a "),Vs=n("a"),Of=r("tf.keras.Model"),If=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sf=m(),T(an.$$.fragment),Df=m(),Xe=n("div"),T(Bs.$$.fragment),Wf=m(),to=n("p"),Qf=r("The "),xa=n("a"),Hf=r("TFMPNetForQuestionAnswering"),Rf=r(" forward method, overrides the "),ti=n("code"),Uf=r("__call__"),Vf=r(" special method."),Bf=m(),T(rn.$$.fragment),Kf=m(),T(ln.$$.fragment),Xf=m(),T(dn.$$.fragment),this.h()},l(o){const k=e_('[data-svelte="svelte-1phssyn"]',document.head);l=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=h(o),c=s(o,"H1",{class:!0});var Ks=a(c);p=s(Ks,"A",{id:!0,class:!0,href:!0});var oi=a(p);v=s(oi,"SPAN",{});var ni=a(v);M(d.$$.fragment,ni),ni.forEach(t),oi.forEach(t),f=h(Ks),E=s(Ks,"SPAN",{});var si=a(E);le=i(si,"MPNet"),si.forEach(t),Ks.forEach(t),V=h(o),z=s(o,"H2",{class:!0});var Xs=a(z);X=s(Xs,"A",{id:!0,class:!0,href:!0});var ai=a(X);D=s(ai,"SPAN",{});var ri=a(D);M(J.$$.fragment,ri),ri.forEach(t),ai.forEach(t),de=h(Xs),W=s(Xs,"SPAN",{});var ii=a(W);ce=i(ii,"Overview"),ii.forEach(t),Xs.forEach(t),se=h(o),U=s(o,"P",{});var Gs=a(U);O=i(Gs,"The MPNet model was proposed in "),Y=s(Gs,"A",{href:!0,rel:!0});var li=a(Y);B=i(li,"MPNet: Masked and Permuted Pre-training for Language Understanding"),li.forEach(t),q=i(Gs," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),Gs.forEach(t),x=h(o),Z=s(o,"P",{});var di=a(Z);H=i(di,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),di.forEach(t),ae=h(o),ee=s(o,"P",{});var ci=a(ee);R=i(ci,"The abstract from the paper is the following:"),ci.forEach(t),re=h(o),te=s(o,"P",{});var pi=a(te);C=s(pi,"EM",{});var mi=a(C);pe=i(mi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),mi.forEach(t),pi.forEach(t),Q=h(o),oe=s(o,"P",{});var hi=a(oe);me=i(hi,"Tips:"),hi.forEach(t),L=h(o),ne=s(o,"UL",{});var fi=a(ne);j=s(fi,"LI",{});var ct=a(j);he=i(ct,"MPNet doesn\u2019t have "),u=s(ct,"CODE",{});var ui=a(u);F=i(ui,"token_type_ids"),ui.forEach(t),K=i(ct,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(ct,"CODE",{});var gi=a(_e);Me=i(gi,"tokenizer.sep_token"),gi.forEach(t),I=i(ct," (or "),ke=s(ct,"CODE",{});var _i=a(ke);$e=i(_i,"[sep]"),_i.forEach(t),we=i(ct,")."),ct.forEach(t),fi.forEach(t),A=h(o),S=s(o,"P",{});var Js=a(S);Pe=i(Js,"The original code can be found "),ge=s(Js,"A",{href:!0,rel:!0});var ki=a(ge);fe=i(ki,"here"),ki.forEach(t),Ne=i(Js,"."),Js.forEach(t),ie=h(o),ue=s(o,"H2",{class:!0});var Ys=a(ue);no=s(Ys,"A",{id:!0,class:!0,href:!0});var vi=a(no);Ka=s(vi,"SPAN",{});var bi=a(Ka);M(un.$$.fragment,bi),bi.forEach(t),vi.forEach(t),Jl=h(Ys),Xa=s(Ys,"SPAN",{});var Ti=a(Xa);Yl=i(Ti,"MPNetConfig"),Ti.forEach(t),Ys.forEach(t),qi=h(o),Je=s(o,"DIV",{class:!0});var pt=a(Je);M(gn.$$.fragment,pt),Zl=h(pt),dt=s(pt,"P",{});var mt=a(dt);ed=i(mt,"This is the configuration class to store the configuration of a "),ta=s(mt,"A",{href:!0});var Mi=a(ta);td=i(Mi,"MPNetModel"),Mi.forEach(t),od=i(mt," or a "),oa=s(mt,"A",{href:!0});var $i=a(oa);nd=i($i,"TFMPNetModel"),$i.forEach(t),sd=i(mt,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),_n=s(mt,"A",{href:!0,rel:!0});var wi=a(_n);ad=i(wi,"microsoft/mpnet-base"),wi.forEach(t),rd=i(mt," architecture."),mt.forEach(t),id=h(pt),Nt=s(pt,"P",{});var oo=a(Nt);ld=i(oo,"Configuration objects inherit from "),na=s(oo,"A",{href:!0});var Pi=a(na);dd=i(Pi,"PretrainedConfig"),Pi.forEach(t),cd=i(oo,` and can be used to control the model outputs. Read the
documentation from `),sa=s(oo,"A",{href:!0});var Ni=a(sa);pd=i(Ni,"PretrainedConfig"),Ni.forEach(t),md=i(oo," for more information."),oo.forEach(t),hd=h(pt),M(so.$$.fragment,pt),pt.forEach(t),xi=h(o),yt=s(o,"H2",{class:!0});var Zs=a(yt);ao=s(Zs,"A",{id:!0,class:!0,href:!0});var yi=a(ao);Ga=s(yi,"SPAN",{});var Fi=a(Ga);M(kn.$$.fragment,Fi),Fi.forEach(t),yi.forEach(t),fd=h(Zs),Ja=s(Zs,"SPAN",{});var Ei=a(Ja);ud=i(Ei,"MPNetTokenizer"),Ei.forEach(t),Zs.forEach(t),Ci=h(o),Ee=s(o,"DIV",{class:!0});var Qe=a(Ee);M(vn.$$.fragment,Qe),gd=h(Qe),bn=s(Qe,"P",{});var ea=a(bn);_d=i(ea,"This tokenizer inherits from "),aa=s(ea,"A",{href:!0});var zi=a(aa);kd=i(zi,"BertTokenizer"),zi.forEach(t),vd=i(ea,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),ea.forEach(t),bd=h(Qe),ht=s(Qe,"DIV",{class:!0});var Ca=a(ht);M(Tn.$$.fragment,Ca),Td=h(Ca),Ya=s(Ca,"P",{});var Yf=a(Ya);Md=i(Yf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Yf.forEach(t),$d=h(Ca),Mn=s(Ca,"UL",{});var il=a(Mn);ra=s(il,"LI",{});var Gf=a(ra);wd=i(Gf,"single sequence: "),Za=s(Gf,"CODE",{});var Zf=a(Za);Pd=i(Zf,"<s> X </s>"),Zf.forEach(t),Gf.forEach(t),Nd=h(il),ia=s(il,"LI",{});var Jf=a(ia);yd=i(Jf,"pair of sequences: "),er=s(Jf,"CODE",{});var eu=a(er);Fd=i(eu,"<s> A </s></s> B </s>"),eu.forEach(t),Jf.forEach(t),il.forEach(t),Ca.forEach(t),Ed=h(Qe),ro=s(Qe,"DIV",{class:!0});var ll=a(ro);M($n.$$.fragment,ll),zd=h(ll),wn=s(ll,"P",{});var dl=a(wn);qd=i(dl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),tr=s(dl,"CODE",{});var tu=a(tr);xd=i(tu,"prepare_for_model"),tu.forEach(t),Cd=i(dl," methods."),dl.forEach(t),ll.forEach(t),jd=h(Qe),io=s(Qe,"DIV",{class:!0});var cl=a(io);M(Pn.$$.fragment,cl),Ld=h(cl),or=s(cl,"P",{});var ou=a(or);Ad=i(ou,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),ou.forEach(t),cl.forEach(t),Od=h(Qe),la=s(Qe,"DIV",{class:!0});var nu=a(la);M(Nn.$$.fragment,nu),nu.forEach(t),Qe.forEach(t),ji=h(o),Ft=s(o,"H2",{class:!0});var pl=a(Ft);lo=s(pl,"A",{id:!0,class:!0,href:!0});var su=a(lo);nr=s(su,"SPAN",{});var au=a(nr);M(yn.$$.fragment,au),au.forEach(t),su.forEach(t),Id=h(pl),sr=s(pl,"SPAN",{});var ru=a(sr);Sd=i(ru,"MPNetTokenizerFast"),ru.forEach(t),pl.forEach(t),Li=h(o),Ye=s(o,"DIV",{class:!0});var cn=a(Ye);M(Fn.$$.fragment,cn),Dd=h(cn),En=s(cn,"P",{});var ml=a(En);Wd=i(ml,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),ar=s(ml,"EM",{});var iu=a(ar);Qd=i(iu,"tokenizers"),iu.forEach(t),Hd=i(ml," library). Based on WordPiece."),ml.forEach(t),Rd=h(cn),zn=s(cn,"P",{});var hl=a(zn);Ud=i(hl,"This tokenizer inherits from "),da=s(hl,"A",{href:!0});var lu=a(da);Vd=i(lu,"PreTrainedTokenizerFast"),lu.forEach(t),Bd=i(hl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),hl.forEach(t),Kd=h(cn),co=s(cn,"DIV",{class:!0});var fl=a(co);M(qn.$$.fragment,fl),Xd=h(fl),rr=s(fl,"P",{});var du=a(rr);Gd=i(du,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),du.forEach(t),fl.forEach(t),cn.forEach(t),Ai=h(o),Et=s(o,"H2",{class:!0});var ul=a(Et);po=s(ul,"A",{id:!0,class:!0,href:!0});var cu=a(po);ir=s(cu,"SPAN",{});var pu=a(ir);M(xn.$$.fragment,pu),pu.forEach(t),cu.forEach(t),Jd=h(ul),lr=s(ul,"SPAN",{});var mu=a(lr);Yd=i(mu,"MPNetModel"),mu.forEach(t),ul.forEach(t),Oi=h(o),Oe=s(o,"DIV",{class:!0});var ft=a(Oe);M(Cn.$$.fragment,ft),Zd=h(ft),dr=s(ft,"P",{});var hu=a(dr);ec=i(hu,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),hu.forEach(t),tc=h(ft),jn=s(ft,"P",{});var gl=a(jn);oc=i(gl,"This model inherits from "),ca=s(gl,"A",{href:!0});var fu=a(ca);nc=i(fu,"PreTrainedModel"),fu.forEach(t),sc=i(gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gl.forEach(t),ac=h(ft),Ln=s(ft,"P",{});var _l=a(Ln);rc=i(_l,"This model is also a PyTorch "),An=s(_l,"A",{href:!0,rel:!0});var uu=a(An);ic=i(uu,"torch.nn.Module"),uu.forEach(t),lc=i(_l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_l.forEach(t),dc=h(ft),Ze=s(ft,"DIV",{class:!0});var pn=a(Ze);M(On.$$.fragment,pn),cc=h(pn),zt=s(pn,"P",{});var ja=a(zt);pc=i(ja,"The "),pa=s(ja,"A",{href:!0});var gu=a(pa);mc=i(gu,"MPNetModel"),gu.forEach(t),hc=i(ja," forward method, overrides the "),cr=s(ja,"CODE",{});var _u=a(cr);fc=i(_u,"__call__"),_u.forEach(t),uc=i(ja," special method."),ja.forEach(t),gc=h(pn),M(mo.$$.fragment,pn),_c=h(pn),M(ho.$$.fragment,pn),pn.forEach(t),ft.forEach(t),Ii=h(o),qt=s(o,"H2",{class:!0});var kl=a(qt);fo=s(kl,"A",{id:!0,class:!0,href:!0});var ku=a(fo);pr=s(ku,"SPAN",{});var vu=a(pr);M(In.$$.fragment,vu),vu.forEach(t),ku.forEach(t),kc=h(kl),mr=s(kl,"SPAN",{});var bu=a(mr);vc=i(bu,"MPNetForMaskedLM"),bu.forEach(t),kl.forEach(t),Si=h(o),xt=s(o,"DIV",{class:!0});var vl=a(xt);M(Sn.$$.fragment,vl),bc=h(vl),He=s(vl,"DIV",{class:!0});var ut=a(He);M(Dn.$$.fragment,ut),Tc=h(ut),Ct=s(ut,"P",{});var La=a(Ct);Mc=i(La,"The "),ma=s(La,"A",{href:!0});var Tu=a(ma);$c=i(Tu,"MPNetForMaskedLM"),Tu.forEach(t),wc=i(La," forward method, overrides the "),hr=s(La,"CODE",{});var Mu=a(hr);Pc=i(Mu,"__call__"),Mu.forEach(t),Nc=i(La," special method."),La.forEach(t),yc=h(ut),M(uo.$$.fragment,ut),Fc=h(ut),M(go.$$.fragment,ut),Ec=h(ut),M(_o.$$.fragment,ut),ut.forEach(t),vl.forEach(t),Di=h(o),jt=s(o,"H2",{class:!0});var bl=a(jt);ko=s(bl,"A",{id:!0,class:!0,href:!0});var $u=a(ko);fr=s($u,"SPAN",{});var wu=a(fr);M(Wn.$$.fragment,wu),wu.forEach(t),$u.forEach(t),zc=h(bl),ur=s(bl,"SPAN",{});var Pu=a(ur);qc=i(Pu,"MPNetForSequenceClassification"),Pu.forEach(t),bl.forEach(t),Wi=h(o),Ie=s(o,"DIV",{class:!0});var gt=a(Ie);M(Qn.$$.fragment,gt),xc=h(gt),gr=s(gt,"P",{});var Nu=a(gr);Cc=i(Nu,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Nu.forEach(t),jc=h(gt),Hn=s(gt,"P",{});var Tl=a(Hn);Lc=i(Tl,"This model inherits from "),ha=s(Tl,"A",{href:!0});var yu=a(ha);Ac=i(yu,"PreTrainedModel"),yu.forEach(t),Oc=i(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),Ic=h(gt),Rn=s(gt,"P",{});var Ml=a(Rn);Sc=i(Ml,"This model is also a PyTorch "),Un=s(Ml,"A",{href:!0,rel:!0});var Fu=a(Un);Dc=i(Fu,"torch.nn.Module"),Fu.forEach(t),Wc=i(Ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml.forEach(t),Qc=h(gt),ye=s(gt,"DIV",{class:!0});var Ge=a(ye);M(Vn.$$.fragment,Ge),Hc=h(Ge),Lt=s(Ge,"P",{});var Aa=a(Lt);Rc=i(Aa,"The "),fa=s(Aa,"A",{href:!0});var Eu=a(fa);Uc=i(Eu,"MPNetForSequenceClassification"),Eu.forEach(t),Vc=i(Aa," forward method, overrides the "),_r=s(Aa,"CODE",{});var zu=a(_r);Bc=i(zu,"__call__"),zu.forEach(t),Kc=i(Aa," special method."),Aa.forEach(t),Xc=h(Ge),M(vo.$$.fragment,Ge),Gc=h(Ge),M(bo.$$.fragment,Ge),Jc=h(Ge),M(To.$$.fragment,Ge),Yc=h(Ge),M(Mo.$$.fragment,Ge),Zc=h(Ge),M($o.$$.fragment,Ge),Ge.forEach(t),gt.forEach(t),Qi=h(o),At=s(o,"H2",{class:!0});var $l=a(At);wo=s($l,"A",{id:!0,class:!0,href:!0});var qu=a(wo);kr=s(qu,"SPAN",{});var xu=a(kr);M(Bn.$$.fragment,xu),xu.forEach(t),qu.forEach(t),ep=h($l),vr=s($l,"SPAN",{});var Cu=a(vr);tp=i(Cu,"MPNetForMultipleChoice"),Cu.forEach(t),$l.forEach(t),Hi=h(o),Se=s(o,"DIV",{class:!0});var _t=a(Se);M(Kn.$$.fragment,_t),op=h(_t),br=s(_t,"P",{});var ju=a(br);np=i(ju,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ju.forEach(t),sp=h(_t),Xn=s(_t,"P",{});var wl=a(Xn);ap=i(wl,"This model inherits from "),ua=s(wl,"A",{href:!0});var Lu=a(ua);rp=i(Lu,"PreTrainedModel"),Lu.forEach(t),ip=i(wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl.forEach(t),lp=h(_t),Gn=s(_t,"P",{});var Pl=a(Gn);dp=i(Pl,"This model is also a PyTorch "),Jn=s(Pl,"A",{href:!0,rel:!0});var Au=a(Jn);cp=i(Au,"torch.nn.Module"),Au.forEach(t),pp=i(Pl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pl.forEach(t),mp=h(_t),et=s(_t,"DIV",{class:!0});var mn=a(et);M(Yn.$$.fragment,mn),hp=h(mn),Ot=s(mn,"P",{});var Oa=a(Ot);fp=i(Oa,"The "),ga=s(Oa,"A",{href:!0});var Ou=a(ga);up=i(Ou,"MPNetForMultipleChoice"),Ou.forEach(t),gp=i(Oa," forward method, overrides the "),Tr=s(Oa,"CODE",{});var Iu=a(Tr);_p=i(Iu,"__call__"),Iu.forEach(t),kp=i(Oa," special method."),Oa.forEach(t),vp=h(mn),M(Po.$$.fragment,mn),bp=h(mn),M(No.$$.fragment,mn),mn.forEach(t),_t.forEach(t),Ri=h(o),It=s(o,"H2",{class:!0});var Nl=a(It);yo=s(Nl,"A",{id:!0,class:!0,href:!0});var Su=a(yo);Mr=s(Su,"SPAN",{});var Du=a(Mr);M(Zn.$$.fragment,Du),Du.forEach(t),Su.forEach(t),Tp=h(Nl),$r=s(Nl,"SPAN",{});var Wu=a($r);Mp=i(Wu,"MPNetForTokenClassification"),Wu.forEach(t),Nl.forEach(t),Ui=h(o),De=s(o,"DIV",{class:!0});var kt=a(De);M(es.$$.fragment,kt),$p=h(kt),wr=s(kt,"P",{});var Qu=a(wr);wp=i(Qu,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qu.forEach(t),Pp=h(kt),ts=s(kt,"P",{});var yl=a(ts);Np=i(yl,"This model inherits from "),_a=s(yl,"A",{href:!0});var Hu=a(_a);yp=i(Hu,"PreTrainedModel"),Hu.forEach(t),Fp=i(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),Ep=h(kt),os=s(kt,"P",{});var Fl=a(os);zp=i(Fl,"This model is also a PyTorch "),ns=s(Fl,"A",{href:!0,rel:!0});var Ru=a(ns);qp=i(Ru,"torch.nn.Module"),Ru.forEach(t),xp=i(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),Cp=h(kt),Re=s(kt,"DIV",{class:!0});var vt=a(Re);M(ss.$$.fragment,vt),jp=h(vt),St=s(vt,"P",{});var Ia=a(St);Lp=i(Ia,"The "),ka=s(Ia,"A",{href:!0});var Uu=a(ka);Ap=i(Uu,"MPNetForTokenClassification"),Uu.forEach(t),Op=i(Ia," forward method, overrides the "),Pr=s(Ia,"CODE",{});var Vu=a(Pr);Ip=i(Vu,"__call__"),Vu.forEach(t),Sp=i(Ia," special method."),Ia.forEach(t),Dp=h(vt),M(Fo.$$.fragment,vt),Wp=h(vt),M(Eo.$$.fragment,vt),Qp=h(vt),M(zo.$$.fragment,vt),vt.forEach(t),kt.forEach(t),Vi=h(o),Dt=s(o,"H2",{class:!0});var El=a(Dt);qo=s(El,"A",{id:!0,class:!0,href:!0});var Bu=a(qo);Nr=s(Bu,"SPAN",{});var Ku=a(Nr);M(as.$$.fragment,Ku),Ku.forEach(t),Bu.forEach(t),Hp=h(El),yr=s(El,"SPAN",{});var Xu=a(yr);Rp=i(Xu,"MPNetForQuestionAnswering"),Xu.forEach(t),El.forEach(t),Bi=h(o),We=s(o,"DIV",{class:!0});var bt=a(We);M(rs.$$.fragment,bt),Up=h(bt),Wt=s(bt,"P",{});var Sa=a(Wt);Vp=i(Sa,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Fr=s(Sa,"CODE",{});var Gu=a(Fr);Bp=i(Gu,"span start logits"),Gu.forEach(t),Kp=i(Sa," and "),Er=s(Sa,"CODE",{});var Ju=a(Er);Xp=i(Ju,"span end logits"),Ju.forEach(t),Gp=i(Sa,")."),Sa.forEach(t),Jp=h(bt),is=s(bt,"P",{});var zl=a(is);Yp=i(zl,"This model inherits from "),va=s(zl,"A",{href:!0});var Yu=a(va);Zp=i(Yu,"PreTrainedModel"),Yu.forEach(t),em=i(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),tm=h(bt),ls=s(bt,"P",{});var ql=a(ls);om=i(ql,"This model is also a PyTorch "),ds=s(ql,"A",{href:!0,rel:!0});var Zu=a(ds);nm=i(Zu,"torch.nn.Module"),Zu.forEach(t),sm=i(ql,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ql.forEach(t),am=h(bt),Ue=s(bt,"DIV",{class:!0});var Tt=a(Ue);M(cs.$$.fragment,Tt),rm=h(Tt),Qt=s(Tt,"P",{});var Da=a(Qt);im=i(Da,"The "),ba=s(Da,"A",{href:!0});var eg=a(ba);lm=i(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dm=i(Da," forward method, overrides the "),zr=s(Da,"CODE",{});var tg=a(zr);cm=i(tg,"__call__"),tg.forEach(t),pm=i(Da," special method."),Da.forEach(t),mm=h(Tt),M(xo.$$.fragment,Tt),hm=h(Tt),M(Co.$$.fragment,Tt),fm=h(Tt),M(jo.$$.fragment,Tt),Tt.forEach(t),bt.forEach(t),Ki=h(o),Ht=s(o,"H2",{class:!0});var xl=a(Ht);Lo=s(xl,"A",{id:!0,class:!0,href:!0});var og=a(Lo);qr=s(og,"SPAN",{});var ng=a(qr);M(ps.$$.fragment,ng),ng.forEach(t),og.forEach(t),um=h(xl),xr=s(xl,"SPAN",{});var sg=a(xr);gm=i(sg,"TFMPNetModel"),sg.forEach(t),xl.forEach(t),Xi=h(o),ze=s(o,"DIV",{class:!0});var nt=a(ze);M(ms.$$.fragment,nt),_m=h(nt),Cr=s(nt,"P",{});var ag=a(Cr);km=i(ag,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),vm=h(nt),hs=s(nt,"P",{});var Cl=a(hs);bm=i(Cl,"This model inherits from "),Ta=s(Cl,"A",{href:!0});var rg=a(Ta);Tm=i(rg,"TFPreTrainedModel"),rg.forEach(t),Mm=i(Cl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cl.forEach(t),$m=h(nt),fs=s(nt,"P",{});var jl=a(fs);wm=i(jl,"This model is also a "),us=s(jl,"A",{href:!0,rel:!0});var ig=a(us);Pm=i(ig,"tf.keras.Model"),ig.forEach(t),Nm=i(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),ym=h(nt),M(Ao.$$.fragment,nt),Fm=h(nt),tt=s(nt,"DIV",{class:!0});var hn=a(tt);M(gs.$$.fragment,hn),Em=h(hn),Rt=s(hn,"P",{});var Wa=a(Rt);zm=i(Wa,"The "),Ma=s(Wa,"A",{href:!0});var lg=a(Ma);qm=i(lg,"TFMPNetModel"),lg.forEach(t),xm=i(Wa," forward method, overrides the "),jr=s(Wa,"CODE",{});var dg=a(jr);Cm=i(dg,"__call__"),dg.forEach(t),jm=i(Wa," special method."),Wa.forEach(t),Lm=h(hn),M(Oo.$$.fragment,hn),Am=h(hn),M(Io.$$.fragment,hn),hn.forEach(t),nt.forEach(t),Gi=h(o),Ut=s(o,"H2",{class:!0});var Ll=a(Ut);So=s(Ll,"A",{id:!0,class:!0,href:!0});var cg=a(So);Lr=s(cg,"SPAN",{});var pg=a(Lr);M(_s.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Om=h(Ll),Ar=s(Ll,"SPAN",{});var mg=a(Ar);Im=i(mg,"TFMPNetForMaskedLM"),mg.forEach(t),Ll.forEach(t),Ji=h(o),qe=s(o,"DIV",{class:!0});var st=a(qe);M(ks.$$.fragment,st),Sm=h(st),vs=s(st,"P",{});var Al=a(vs);Dm=i(Al,"MPNet Model with a "),Or=s(Al,"CODE",{});var hg=a(Or);Wm=i(hg,"language modeling"),hg.forEach(t),Qm=i(Al," head on top."),Al.forEach(t),Hm=h(st),bs=s(st,"P",{});var Ol=a(bs);Rm=i(Ol,"This model inherits from "),$a=s(Ol,"A",{href:!0});var fg=a($a);Um=i(fg,"TFPreTrainedModel"),fg.forEach(t),Vm=i(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),Bm=h(st),Ts=s(st,"P",{});var Il=a(Ts);Km=i(Il,"This model is also a "),Ms=s(Il,"A",{href:!0,rel:!0});var ug=a(Ms);Xm=i(ug,"tf.keras.Model"),ug.forEach(t),Gm=i(Il,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il.forEach(t),Jm=h(st),M(Do.$$.fragment,st),Ym=h(st),Ve=s(st,"DIV",{class:!0});var Mt=a(Ve);M($s.$$.fragment,Mt),Zm=h(Mt),Vt=s(Mt,"P",{});var Qa=a(Vt);eh=i(Qa,"The "),wa=s(Qa,"A",{href:!0});var gg=a(wa);th=i(gg,"TFMPNetForMaskedLM"),gg.forEach(t),oh=i(Qa," forward method, overrides the "),Ir=s(Qa,"CODE",{});var _g=a(Ir);nh=i(_g,"__call__"),_g.forEach(t),sh=i(Qa," special method."),Qa.forEach(t),ah=h(Mt),M(Wo.$$.fragment,Mt),rh=h(Mt),M(Qo.$$.fragment,Mt),ih=h(Mt),M(Ho.$$.fragment,Mt),Mt.forEach(t),st.forEach(t),Yi=h(o),Bt=s(o,"H2",{class:!0});var Sl=a(Bt);Ro=s(Sl,"A",{id:!0,class:!0,href:!0});var kg=a(Ro);Sr=s(kg,"SPAN",{});var vg=a(Sr);M(ws.$$.fragment,vg),vg.forEach(t),kg.forEach(t),lh=h(Sl),Dr=s(Sl,"SPAN",{});var bg=a(Dr);dh=i(bg,"TFMPNetForSequenceClassification"),bg.forEach(t),Sl.forEach(t),Zi=h(o),xe=s(o,"DIV",{class:!0});var at=a(xe);M(Ps.$$.fragment,at),ch=h(at),Wr=s(at,"P",{});var Tg=a(Wr);ph=i(Tg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Tg.forEach(t),mh=h(at),Ns=s(at,"P",{});var Dl=a(Ns);hh=i(Dl,"This model inherits from "),Pa=s(Dl,"A",{href:!0});var Mg=a(Pa);fh=i(Mg,"TFPreTrainedModel"),Mg.forEach(t),uh=i(Dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dl.forEach(t),gh=h(at),ys=s(at,"P",{});var Wl=a(ys);_h=i(Wl,"This model is also a "),Fs=s(Wl,"A",{href:!0,rel:!0});var $g=a(Fs);kh=i($g,"tf.keras.Model"),$g.forEach(t),vh=i(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),bh=h(at),M(Uo.$$.fragment,at),Th=h(at),Be=s(at,"DIV",{class:!0});var $t=a(Be);M(Es.$$.fragment,$t),Mh=h($t),Kt=s($t,"P",{});var Ha=a(Kt);$h=i(Ha,"The "),Na=s(Ha,"A",{href:!0});var wg=a(Na);wh=i(wg,"TFMPNetForSequenceClassification"),wg.forEach(t),Ph=i(Ha," forward method, overrides the "),Qr=s(Ha,"CODE",{});var Pg=a(Qr);Nh=i(Pg,"__call__"),Pg.forEach(t),yh=i(Ha," special method."),Ha.forEach(t),Fh=h($t),M(Vo.$$.fragment,$t),Eh=h($t),M(Bo.$$.fragment,$t),zh=h($t),M(Ko.$$.fragment,$t),$t.forEach(t),at.forEach(t),el=h(o),Xt=s(o,"H2",{class:!0});var Ql=a(Xt);Xo=s(Ql,"A",{id:!0,class:!0,href:!0});var Ng=a(Xo);Hr=s(Ng,"SPAN",{});var yg=a(Hr);M(zs.$$.fragment,yg),yg.forEach(t),Ng.forEach(t),qh=h(Ql),Rr=s(Ql,"SPAN",{});var Fg=a(Rr);xh=i(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),Ql.forEach(t),tl=h(o),Ce=s(o,"DIV",{class:!0});var rt=a(Ce);M(qs.$$.fragment,rt),Ch=h(rt),Ur=s(rt,"P",{});var Eg=a(Ur);jh=i(Eg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),Lh=h(rt),xs=s(rt,"P",{});var Hl=a(xs);Ah=i(Hl,"This model inherits from "),ya=s(Hl,"A",{href:!0});var zg=a(ya);Oh=i(zg,"TFPreTrainedModel"),zg.forEach(t),Ih=i(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Sh=h(rt),Cs=s(rt,"P",{});var Rl=a(Cs);Dh=i(Rl,"This model is also a "),js=s(Rl,"A",{href:!0,rel:!0});var qg=a(js);Wh=i(qg,"tf.keras.Model"),qg.forEach(t),Qh=i(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),Hh=h(rt),M(Go.$$.fragment,rt),Rh=h(rt),ot=s(rt,"DIV",{class:!0});var fn=a(ot);M(Ls.$$.fragment,fn),Uh=h(fn),Gt=s(fn,"P",{});var Ra=a(Gt);Vh=i(Ra,"The "),Fa=s(Ra,"A",{href:!0});var xg=a(Fa);Bh=i(xg,"TFMPNetForMultipleChoice"),xg.forEach(t),Kh=i(Ra," forward method, overrides the "),Vr=s(Ra,"CODE",{});var Cg=a(Vr);Xh=i(Cg,"__call__"),Cg.forEach(t),Gh=i(Ra," special method."),Ra.forEach(t),Jh=h(fn),M(Jo.$$.fragment,fn),Yh=h(fn),M(Yo.$$.fragment,fn),fn.forEach(t),rt.forEach(t),ol=h(o),Jt=s(o,"H2",{class:!0});var Ul=a(Jt);Zo=s(Ul,"A",{id:!0,class:!0,href:!0});var jg=a(Zo);Br=s(jg,"SPAN",{});var Lg=a(Br);M(As.$$.fragment,Lg),Lg.forEach(t),jg.forEach(t),Zh=h(Ul),Kr=s(Ul,"SPAN",{});var Ag=a(Kr);ef=i(Ag,"TFMPNetForTokenClassification"),Ag.forEach(t),Ul.forEach(t),nl=h(o),je=s(o,"DIV",{class:!0});var it=a(je);M(Os.$$.fragment,it),tf=h(it),Xr=s(it,"P",{});var Og=a(Xr);of=i(Og,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Og.forEach(t),nf=h(it),Is=s(it,"P",{});var Vl=a(Is);sf=i(Vl,"This model inherits from "),Ea=s(Vl,"A",{href:!0});var Ig=a(Ea);af=i(Ig,"TFPreTrainedModel"),Ig.forEach(t),rf=i(Vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vl.forEach(t),lf=h(it),Ss=s(it,"P",{});var Bl=a(Ss);df=i(Bl,"This model is also a "),Ds=s(Bl,"A",{href:!0,rel:!0});var Sg=a(Ds);cf=i(Sg,"tf.keras.Model"),Sg.forEach(t),pf=i(Bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bl.forEach(t),mf=h(it),M(en.$$.fragment,it),hf=h(it),Ke=s(it,"DIV",{class:!0});var wt=a(Ke);M(Ws.$$.fragment,wt),ff=h(wt),Yt=s(wt,"P",{});var Ua=a(Yt);uf=i(Ua,"The "),za=s(Ua,"A",{href:!0});var Dg=a(za);gf=i(Dg,"TFMPNetForTokenClassification"),Dg.forEach(t),_f=i(Ua," forward method, overrides the "),Gr=s(Ua,"CODE",{});var Wg=a(Gr);kf=i(Wg,"__call__"),Wg.forEach(t),vf=i(Ua," special method."),Ua.forEach(t),bf=h(wt),M(tn.$$.fragment,wt),Tf=h(wt),M(on.$$.fragment,wt),Mf=h(wt),M(nn.$$.fragment,wt),wt.forEach(t),it.forEach(t),sl=h(o),Zt=s(o,"H2",{class:!0});var Kl=a(Zt);sn=s(Kl,"A",{id:!0,class:!0,href:!0});var Qg=a(sn);Jr=s(Qg,"SPAN",{});var Hg=a(Jr);M(Qs.$$.fragment,Hg),Hg.forEach(t),Qg.forEach(t),$f=h(Kl),Yr=s(Kl,"SPAN",{});var Rg=a(Yr);wf=i(Rg,"TFMPNetForQuestionAnswering"),Rg.forEach(t),Kl.forEach(t),al=h(o),Le=s(o,"DIV",{class:!0});var lt=a(Le);M(Hs.$$.fragment,lt),Pf=h(lt),eo=s(lt,"P",{});var Va=a(eo);Nf=i(Va,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Zr=s(Va,"CODE",{});var Ug=a(Zr);yf=i(Ug,"span start logits"),Ug.forEach(t),Ff=i(Va," and "),ei=s(Va,"CODE",{});var Vg=a(ei);Ef=i(Vg,"span end logits"),Vg.forEach(t),zf=i(Va,")."),Va.forEach(t),qf=h(lt),Rs=s(lt,"P",{});var Xl=a(Rs);xf=i(Xl,"This model inherits from "),qa=s(Xl,"A",{href:!0});var Bg=a(qa);Cf=i(Bg,"TFPreTrainedModel"),Bg.forEach(t),jf=i(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Lf=h(lt),Us=s(lt,"P",{});var Gl=a(Us);Af=i(Gl,"This model is also a "),Vs=s(Gl,"A",{href:!0,rel:!0});var Kg=a(Vs);Of=i(Kg,"tf.keras.Model"),Kg.forEach(t),If=i(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Sf=h(lt),M(an.$$.fragment,lt),Df=h(lt),Xe=s(lt,"DIV",{class:!0});var Pt=a(Xe);M(Bs.$$.fragment,Pt),Wf=h(Pt),to=s(Pt,"P",{});var Ba=a(to);Qf=i(Ba,"The "),xa=s(Ba,"A",{href:!0});var Xg=a(xa);Hf=i(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Rf=i(Ba," forward method, overrides the "),ti=s(Ba,"CODE",{});var Gg=a(ti);Uf=i(Gg,"__call__"),Gg.forEach(t),Vf=i(Ba," special method."),Ba.forEach(t),Bf=h(Pt),M(rn.$$.fragment,Pt),Kf=h(Pt),M(ln.$$.fragment,Pt),Xf=h(Pt),M(dn.$$.fragment,Pt),Pt.forEach(t),lt.forEach(t),this.h()},h(){b(l,"name","hf:doc:metadata"),b(l,"content",JSON.stringify(R_)),b(p,"id","mpnet"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#mpnet"),b(c,"class","relative group"),b(X,"id","overview"),b(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(X,"href","#overview"),b(z,"class","relative group"),b(Y,"href","https://arxiv.org/abs/2004.09297"),b(Y,"rel","nofollow"),b(ge,"href","https://github.com/microsoft/MPNet"),b(ge,"rel","nofollow"),b(no,"id","transformers.MPNetConfig"),b(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(no,"href","#transformers.MPNetConfig"),b(ue,"class","relative group"),b(ta,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetModel"),b(oa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetModel"),b(_n,"href","https://huggingface.co/microsoft/mpnet-base"),b(_n,"rel","nofollow"),b(na,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),b(sa,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ao,"id","transformers.MPNetTokenizer"),b(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ao,"href","#transformers.MPNetTokenizer"),b(yt,"class","relative group"),b(aa,"href","/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(la,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(lo,"id","transformers.MPNetTokenizerFast"),b(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(lo,"href","#transformers.MPNetTokenizerFast"),b(Ft,"class","relative group"),b(da,"href","/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),b(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(po,"id","transformers.MPNetModel"),b(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(po,"href","#transformers.MPNetModel"),b(Et,"class","relative group"),b(ca,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),b(An,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(An,"rel","nofollow"),b(pa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetModel"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(fo,"id","transformers.MPNetForMaskedLM"),b(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(fo,"href","#transformers.MPNetForMaskedLM"),b(qt,"class","relative group"),b(ma,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ko,"id","transformers.MPNetForSequenceClassification"),b(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ko,"href","#transformers.MPNetForSequenceClassification"),b(jt,"class","relative group"),b(ha,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),b(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Un,"rel","nofollow"),b(fa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),b(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(wo,"id","transformers.MPNetForMultipleChoice"),b(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(wo,"href","#transformers.MPNetForMultipleChoice"),b(At,"class","relative group"),b(ua,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),b(Jn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Jn,"rel","nofollow"),b(ga,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(yo,"id","transformers.MPNetForTokenClassification"),b(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(yo,"href","#transformers.MPNetForTokenClassification"),b(It,"class","relative group"),b(_a,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),b(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ns,"rel","nofollow"),b(ka,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qo,"id","transformers.MPNetForQuestionAnswering"),b(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(qo,"href","#transformers.MPNetForQuestionAnswering"),b(Dt,"class","relative group"),b(va,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),b(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ds,"rel","nofollow"),b(ba,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Lo,"id","transformers.TFMPNetModel"),b(Lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Lo,"href","#transformers.TFMPNetModel"),b(Ht,"class","relative group"),b(Ta,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(us,"rel","nofollow"),b(Ma,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetModel"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(So,"id","transformers.TFMPNetForMaskedLM"),b(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(So,"href","#transformers.TFMPNetForMaskedLM"),b(Ut,"class","relative group"),b($a,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(Ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Ms,"rel","nofollow"),b(wa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ro,"id","transformers.TFMPNetForSequenceClassification"),b(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ro,"href","#transformers.TFMPNetForSequenceClassification"),b(Bt,"class","relative group"),b(Pa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Fs,"rel","nofollow"),b(Na,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),b(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Xo,"id","transformers.TFMPNetForMultipleChoice"),b(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Xo,"href","#transformers.TFMPNetForMultipleChoice"),b(Xt,"class","relative group"),b(ya,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(js,"rel","nofollow"),b(Fa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.TFMPNetForTokenClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.TFMPNetForTokenClassification"),b(Jt,"class","relative group"),b(Ea,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Ds,"rel","nofollow"),b(za,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sn,"id","transformers.TFMPNetForQuestionAnswering"),b(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(sn,"href","#transformers.TFMPNetForQuestionAnswering"),b(Zt,"class","relative group"),b(qa,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.TFPreTrainedModel"),b(Vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Vs,"rel","nofollow"),b(xa,"href","/docs/transformers/v4.21.3/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,l),_(o,g,k),_(o,c,k),e(c,p),e(p,v),$(d,v,null),e(c,f),e(c,E),e(E,le),_(o,V,k),_(o,z,k),e(z,X),e(X,D),$(J,D,null),e(z,de),e(z,W),e(W,ce),_(o,se,k),_(o,U,k),e(U,O),e(U,Y),e(Y,B),e(U,q),_(o,x,k),_(o,Z,k),e(Z,H),_(o,ae,k),_(o,ee,k),e(ee,R),_(o,re,k),_(o,te,k),e(te,C),e(C,pe),_(o,Q,k),_(o,oe,k),e(oe,me),_(o,L,k),_(o,ne,k),e(ne,j),e(j,he),e(j,u),e(u,F),e(j,K),e(j,_e),e(_e,Me),e(j,I),e(j,ke),e(ke,$e),e(j,we),_(o,A,k),_(o,S,k),e(S,Pe),e(S,ge),e(ge,fe),e(S,Ne),_(o,ie,k),_(o,ue,k),e(ue,no),e(no,Ka),$(un,Ka,null),e(ue,Jl),e(ue,Xa),e(Xa,Yl),_(o,qi,k),_(o,Je,k),$(gn,Je,null),e(Je,Zl),e(Je,dt),e(dt,ed),e(dt,ta),e(ta,td),e(dt,od),e(dt,oa),e(oa,nd),e(dt,sd),e(dt,_n),e(_n,ad),e(dt,rd),e(Je,id),e(Je,Nt),e(Nt,ld),e(Nt,na),e(na,dd),e(Nt,cd),e(Nt,sa),e(sa,pd),e(Nt,md),e(Je,hd),$(so,Je,null),_(o,xi,k),_(o,yt,k),e(yt,ao),e(ao,Ga),$(kn,Ga,null),e(yt,fd),e(yt,Ja),e(Ja,ud),_(o,Ci,k),_(o,Ee,k),$(vn,Ee,null),e(Ee,gd),e(Ee,bn),e(bn,_d),e(bn,aa),e(aa,kd),e(bn,vd),e(Ee,bd),e(Ee,ht),$(Tn,ht,null),e(ht,Td),e(ht,Ya),e(Ya,Md),e(ht,$d),e(ht,Mn),e(Mn,ra),e(ra,wd),e(ra,Za),e(Za,Pd),e(Mn,Nd),e(Mn,ia),e(ia,yd),e(ia,er),e(er,Fd),e(Ee,Ed),e(Ee,ro),$($n,ro,null),e(ro,zd),e(ro,wn),e(wn,qd),e(wn,tr),e(tr,xd),e(wn,Cd),e(Ee,jd),e(Ee,io),$(Pn,io,null),e(io,Ld),e(io,or),e(or,Ad),e(Ee,Od),e(Ee,la),$(Nn,la,null),_(o,ji,k),_(o,Ft,k),e(Ft,lo),e(lo,nr),$(yn,nr,null),e(Ft,Id),e(Ft,sr),e(sr,Sd),_(o,Li,k),_(o,Ye,k),$(Fn,Ye,null),e(Ye,Dd),e(Ye,En),e(En,Wd),e(En,ar),e(ar,Qd),e(En,Hd),e(Ye,Rd),e(Ye,zn),e(zn,Ud),e(zn,da),e(da,Vd),e(zn,Bd),e(Ye,Kd),e(Ye,co),$(qn,co,null),e(co,Xd),e(co,rr),e(rr,Gd),_(o,Ai,k),_(o,Et,k),e(Et,po),e(po,ir),$(xn,ir,null),e(Et,Jd),e(Et,lr),e(lr,Yd),_(o,Oi,k),_(o,Oe,k),$(Cn,Oe,null),e(Oe,Zd),e(Oe,dr),e(dr,ec),e(Oe,tc),e(Oe,jn),e(jn,oc),e(jn,ca),e(ca,nc),e(jn,sc),e(Oe,ac),e(Oe,Ln),e(Ln,rc),e(Ln,An),e(An,ic),e(Ln,lc),e(Oe,dc),e(Oe,Ze),$(On,Ze,null),e(Ze,cc),e(Ze,zt),e(zt,pc),e(zt,pa),e(pa,mc),e(zt,hc),e(zt,cr),e(cr,fc),e(zt,uc),e(Ze,gc),$(mo,Ze,null),e(Ze,_c),$(ho,Ze,null),_(o,Ii,k),_(o,qt,k),e(qt,fo),e(fo,pr),$(In,pr,null),e(qt,kc),e(qt,mr),e(mr,vc),_(o,Si,k),_(o,xt,k),$(Sn,xt,null),e(xt,bc),e(xt,He),$(Dn,He,null),e(He,Tc),e(He,Ct),e(Ct,Mc),e(Ct,ma),e(ma,$c),e(Ct,wc),e(Ct,hr),e(hr,Pc),e(Ct,Nc),e(He,yc),$(uo,He,null),e(He,Fc),$(go,He,null),e(He,Ec),$(_o,He,null),_(o,Di,k),_(o,jt,k),e(jt,ko),e(ko,fr),$(Wn,fr,null),e(jt,zc),e(jt,ur),e(ur,qc),_(o,Wi,k),_(o,Ie,k),$(Qn,Ie,null),e(Ie,xc),e(Ie,gr),e(gr,Cc),e(Ie,jc),e(Ie,Hn),e(Hn,Lc),e(Hn,ha),e(ha,Ac),e(Hn,Oc),e(Ie,Ic),e(Ie,Rn),e(Rn,Sc),e(Rn,Un),e(Un,Dc),e(Rn,Wc),e(Ie,Qc),e(Ie,ye),$(Vn,ye,null),e(ye,Hc),e(ye,Lt),e(Lt,Rc),e(Lt,fa),e(fa,Uc),e(Lt,Vc),e(Lt,_r),e(_r,Bc),e(Lt,Kc),e(ye,Xc),$(vo,ye,null),e(ye,Gc),$(bo,ye,null),e(ye,Jc),$(To,ye,null),e(ye,Yc),$(Mo,ye,null),e(ye,Zc),$($o,ye,null),_(o,Qi,k),_(o,At,k),e(At,wo),e(wo,kr),$(Bn,kr,null),e(At,ep),e(At,vr),e(vr,tp),_(o,Hi,k),_(o,Se,k),$(Kn,Se,null),e(Se,op),e(Se,br),e(br,np),e(Se,sp),e(Se,Xn),e(Xn,ap),e(Xn,ua),e(ua,rp),e(Xn,ip),e(Se,lp),e(Se,Gn),e(Gn,dp),e(Gn,Jn),e(Jn,cp),e(Gn,pp),e(Se,mp),e(Se,et),$(Yn,et,null),e(et,hp),e(et,Ot),e(Ot,fp),e(Ot,ga),e(ga,up),e(Ot,gp),e(Ot,Tr),e(Tr,_p),e(Ot,kp),e(et,vp),$(Po,et,null),e(et,bp),$(No,et,null),_(o,Ri,k),_(o,It,k),e(It,yo),e(yo,Mr),$(Zn,Mr,null),e(It,Tp),e(It,$r),e($r,Mp),_(o,Ui,k),_(o,De,k),$(es,De,null),e(De,$p),e(De,wr),e(wr,wp),e(De,Pp),e(De,ts),e(ts,Np),e(ts,_a),e(_a,yp),e(ts,Fp),e(De,Ep),e(De,os),e(os,zp),e(os,ns),e(ns,qp),e(os,xp),e(De,Cp),e(De,Re),$(ss,Re,null),e(Re,jp),e(Re,St),e(St,Lp),e(St,ka),e(ka,Ap),e(St,Op),e(St,Pr),e(Pr,Ip),e(St,Sp),e(Re,Dp),$(Fo,Re,null),e(Re,Wp),$(Eo,Re,null),e(Re,Qp),$(zo,Re,null),_(o,Vi,k),_(o,Dt,k),e(Dt,qo),e(qo,Nr),$(as,Nr,null),e(Dt,Hp),e(Dt,yr),e(yr,Rp),_(o,Bi,k),_(o,We,k),$(rs,We,null),e(We,Up),e(We,Wt),e(Wt,Vp),e(Wt,Fr),e(Fr,Bp),e(Wt,Kp),e(Wt,Er),e(Er,Xp),e(Wt,Gp),e(We,Jp),e(We,is),e(is,Yp),e(is,va),e(va,Zp),e(is,em),e(We,tm),e(We,ls),e(ls,om),e(ls,ds),e(ds,nm),e(ls,sm),e(We,am),e(We,Ue),$(cs,Ue,null),e(Ue,rm),e(Ue,Qt),e(Qt,im),e(Qt,ba),e(ba,lm),e(Qt,dm),e(Qt,zr),e(zr,cm),e(Qt,pm),e(Ue,mm),$(xo,Ue,null),e(Ue,hm),$(Co,Ue,null),e(Ue,fm),$(jo,Ue,null),_(o,Ki,k),_(o,Ht,k),e(Ht,Lo),e(Lo,qr),$(ps,qr,null),e(Ht,um),e(Ht,xr),e(xr,gm),_(o,Xi,k),_(o,ze,k),$(ms,ze,null),e(ze,_m),e(ze,Cr),e(Cr,km),e(ze,vm),e(ze,hs),e(hs,bm),e(hs,Ta),e(Ta,Tm),e(hs,Mm),e(ze,$m),e(ze,fs),e(fs,wm),e(fs,us),e(us,Pm),e(fs,Nm),e(ze,ym),$(Ao,ze,null),e(ze,Fm),e(ze,tt),$(gs,tt,null),e(tt,Em),e(tt,Rt),e(Rt,zm),e(Rt,Ma),e(Ma,qm),e(Rt,xm),e(Rt,jr),e(jr,Cm),e(Rt,jm),e(tt,Lm),$(Oo,tt,null),e(tt,Am),$(Io,tt,null),_(o,Gi,k),_(o,Ut,k),e(Ut,So),e(So,Lr),$(_s,Lr,null),e(Ut,Om),e(Ut,Ar),e(Ar,Im),_(o,Ji,k),_(o,qe,k),$(ks,qe,null),e(qe,Sm),e(qe,vs),e(vs,Dm),e(vs,Or),e(Or,Wm),e(vs,Qm),e(qe,Hm),e(qe,bs),e(bs,Rm),e(bs,$a),e($a,Um),e(bs,Vm),e(qe,Bm),e(qe,Ts),e(Ts,Km),e(Ts,Ms),e(Ms,Xm),e(Ts,Gm),e(qe,Jm),$(Do,qe,null),e(qe,Ym),e(qe,Ve),$($s,Ve,null),e(Ve,Zm),e(Ve,Vt),e(Vt,eh),e(Vt,wa),e(wa,th),e(Vt,oh),e(Vt,Ir),e(Ir,nh),e(Vt,sh),e(Ve,ah),$(Wo,Ve,null),e(Ve,rh),$(Qo,Ve,null),e(Ve,ih),$(Ho,Ve,null),_(o,Yi,k),_(o,Bt,k),e(Bt,Ro),e(Ro,Sr),$(ws,Sr,null),e(Bt,lh),e(Bt,Dr),e(Dr,dh),_(o,Zi,k),_(o,xe,k),$(Ps,xe,null),e(xe,ch),e(xe,Wr),e(Wr,ph),e(xe,mh),e(xe,Ns),e(Ns,hh),e(Ns,Pa),e(Pa,fh),e(Ns,uh),e(xe,gh),e(xe,ys),e(ys,_h),e(ys,Fs),e(Fs,kh),e(ys,vh),e(xe,bh),$(Uo,xe,null),e(xe,Th),e(xe,Be),$(Es,Be,null),e(Be,Mh),e(Be,Kt),e(Kt,$h),e(Kt,Na),e(Na,wh),e(Kt,Ph),e(Kt,Qr),e(Qr,Nh),e(Kt,yh),e(Be,Fh),$(Vo,Be,null),e(Be,Eh),$(Bo,Be,null),e(Be,zh),$(Ko,Be,null),_(o,el,k),_(o,Xt,k),e(Xt,Xo),e(Xo,Hr),$(zs,Hr,null),e(Xt,qh),e(Xt,Rr),e(Rr,xh),_(o,tl,k),_(o,Ce,k),$(qs,Ce,null),e(Ce,Ch),e(Ce,Ur),e(Ur,jh),e(Ce,Lh),e(Ce,xs),e(xs,Ah),e(xs,ya),e(ya,Oh),e(xs,Ih),e(Ce,Sh),e(Ce,Cs),e(Cs,Dh),e(Cs,js),e(js,Wh),e(Cs,Qh),e(Ce,Hh),$(Go,Ce,null),e(Ce,Rh),e(Ce,ot),$(Ls,ot,null),e(ot,Uh),e(ot,Gt),e(Gt,Vh),e(Gt,Fa),e(Fa,Bh),e(Gt,Kh),e(Gt,Vr),e(Vr,Xh),e(Gt,Gh),e(ot,Jh),$(Jo,ot,null),e(ot,Yh),$(Yo,ot,null),_(o,ol,k),_(o,Jt,k),e(Jt,Zo),e(Zo,Br),$(As,Br,null),e(Jt,Zh),e(Jt,Kr),e(Kr,ef),_(o,nl,k),_(o,je,k),$(Os,je,null),e(je,tf),e(je,Xr),e(Xr,of),e(je,nf),e(je,Is),e(Is,sf),e(Is,Ea),e(Ea,af),e(Is,rf),e(je,lf),e(je,Ss),e(Ss,df),e(Ss,Ds),e(Ds,cf),e(Ss,pf),e(je,mf),$(en,je,null),e(je,hf),e(je,Ke),$(Ws,Ke,null),e(Ke,ff),e(Ke,Yt),e(Yt,uf),e(Yt,za),e(za,gf),e(Yt,_f),e(Yt,Gr),e(Gr,kf),e(Yt,vf),e(Ke,bf),$(tn,Ke,null),e(Ke,Tf),$(on,Ke,null),e(Ke,Mf),$(nn,Ke,null),_(o,sl,k),_(o,Zt,k),e(Zt,sn),e(sn,Jr),$(Qs,Jr,null),e(Zt,$f),e(Zt,Yr),e(Yr,wf),_(o,al,k),_(o,Le,k),$(Hs,Le,null),e(Le,Pf),e(Le,eo),e(eo,Nf),e(eo,Zr),e(Zr,yf),e(eo,Ff),e(eo,ei),e(ei,Ef),e(eo,zf),e(Le,qf),e(Le,Rs),e(Rs,xf),e(Rs,qa),e(qa,Cf),e(Rs,jf),e(Le,Lf),e(Le,Us),e(Us,Af),e(Us,Vs),e(Vs,Of),e(Us,If),e(Le,Sf),$(an,Le,null),e(Le,Df),e(Le,Xe),$(Bs,Xe,null),e(Xe,Wf),e(Xe,to),e(to,Qf),e(to,xa),e(xa,Hf),e(to,Rf),e(to,ti),e(ti,Uf),e(to,Vf),e(Xe,Bf),$(rn,Xe,null),e(Xe,Kf),$(ln,Xe,null),e(Xe,Xf),$(dn,Xe,null),rl=!0},p(o,[k]){const Ks={};k&2&&(Ks.$$scope={dirty:k,ctx:o}),so.$set(Ks);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:o}),mo.$set(oi);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:o}),ho.$set(ni);const si={};k&2&&(si.$$scope={dirty:k,ctx:o}),uo.$set(si);const Xs={};k&2&&(Xs.$$scope={dirty:k,ctx:o}),go.$set(Xs);const ai={};k&2&&(ai.$$scope={dirty:k,ctx:o}),_o.$set(ai);const ri={};k&2&&(ri.$$scope={dirty:k,ctx:o}),vo.$set(ri);const ii={};k&2&&(ii.$$scope={dirty:k,ctx:o}),bo.$set(ii);const Gs={};k&2&&(Gs.$$scope={dirty:k,ctx:o}),To.$set(Gs);const li={};k&2&&(li.$$scope={dirty:k,ctx:o}),Mo.$set(li);const di={};k&2&&(di.$$scope={dirty:k,ctx:o}),$o.$set(di);const ci={};k&2&&(ci.$$scope={dirty:k,ctx:o}),Po.$set(ci);const pi={};k&2&&(pi.$$scope={dirty:k,ctx:o}),No.$set(pi);const mi={};k&2&&(mi.$$scope={dirty:k,ctx:o}),Fo.$set(mi);const hi={};k&2&&(hi.$$scope={dirty:k,ctx:o}),Eo.$set(hi);const fi={};k&2&&(fi.$$scope={dirty:k,ctx:o}),zo.$set(fi);const ct={};k&2&&(ct.$$scope={dirty:k,ctx:o}),xo.$set(ct);const ui={};k&2&&(ui.$$scope={dirty:k,ctx:o}),Co.$set(ui);const gi={};k&2&&(gi.$$scope={dirty:k,ctx:o}),jo.$set(gi);const _i={};k&2&&(_i.$$scope={dirty:k,ctx:o}),Ao.$set(_i);const Js={};k&2&&(Js.$$scope={dirty:k,ctx:o}),Oo.$set(Js);const ki={};k&2&&(ki.$$scope={dirty:k,ctx:o}),Io.$set(ki);const Ys={};k&2&&(Ys.$$scope={dirty:k,ctx:o}),Do.$set(Ys);const vi={};k&2&&(vi.$$scope={dirty:k,ctx:o}),Wo.$set(vi);const bi={};k&2&&(bi.$$scope={dirty:k,ctx:o}),Qo.$set(bi);const Ti={};k&2&&(Ti.$$scope={dirty:k,ctx:o}),Ho.$set(Ti);const pt={};k&2&&(pt.$$scope={dirty:k,ctx:o}),Uo.$set(pt);const mt={};k&2&&(mt.$$scope={dirty:k,ctx:o}),Vo.$set(mt);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:o}),Bo.$set(Mi);const $i={};k&2&&($i.$$scope={dirty:k,ctx:o}),Ko.$set($i);const wi={};k&2&&(wi.$$scope={dirty:k,ctx:o}),Go.$set(wi);const oo={};k&2&&(oo.$$scope={dirty:k,ctx:o}),Jo.$set(oo);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:o}),Yo.$set(Pi);const Ni={};k&2&&(Ni.$$scope={dirty:k,ctx:o}),en.$set(Ni);const Zs={};k&2&&(Zs.$$scope={dirty:k,ctx:o}),tn.$set(Zs);const yi={};k&2&&(yi.$$scope={dirty:k,ctx:o}),on.$set(yi);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),nn.$set(Fi);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),an.$set(Ei);const Qe={};k&2&&(Qe.$$scope={dirty:k,ctx:o}),rn.$set(Qe);const ea={};k&2&&(ea.$$scope={dirty:k,ctx:o}),ln.$set(ea);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:o}),dn.$set(zi)},i(o){rl||(w(d.$$.fragment,o),w(J.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(so.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(Tn.$$.fragment,o),w($n.$$.fragment,o),w(Pn.$$.fragment,o),w(Nn.$$.fragment,o),w(yn.$$.fragment,o),w(Fn.$$.fragment,o),w(qn.$$.fragment,o),w(xn.$$.fragment,o),w(Cn.$$.fragment,o),w(On.$$.fragment,o),w(mo.$$.fragment,o),w(ho.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Dn.$$.fragment,o),w(uo.$$.fragment,o),w(go.$$.fragment,o),w(_o.$$.fragment,o),w(Wn.$$.fragment,o),w(Qn.$$.fragment,o),w(Vn.$$.fragment,o),w(vo.$$.fragment,o),w(bo.$$.fragment,o),w(To.$$.fragment,o),w(Mo.$$.fragment,o),w($o.$$.fragment,o),w(Bn.$$.fragment,o),w(Kn.$$.fragment,o),w(Yn.$$.fragment,o),w(Po.$$.fragment,o),w(No.$$.fragment,o),w(Zn.$$.fragment,o),w(es.$$.fragment,o),w(ss.$$.fragment,o),w(Fo.$$.fragment,o),w(Eo.$$.fragment,o),w(zo.$$.fragment,o),w(as.$$.fragment,o),w(rs.$$.fragment,o),w(cs.$$.fragment,o),w(xo.$$.fragment,o),w(Co.$$.fragment,o),w(jo.$$.fragment,o),w(ps.$$.fragment,o),w(ms.$$.fragment,o),w(Ao.$$.fragment,o),w(gs.$$.fragment,o),w(Oo.$$.fragment,o),w(Io.$$.fragment,o),w(_s.$$.fragment,o),w(ks.$$.fragment,o),w(Do.$$.fragment,o),w($s.$$.fragment,o),w(Wo.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(ws.$$.fragment,o),w(Ps.$$.fragment,o),w(Uo.$$.fragment,o),w(Es.$$.fragment,o),w(Vo.$$.fragment,o),w(Bo.$$.fragment,o),w(Ko.$$.fragment,o),w(zs.$$.fragment,o),w(qs.$$.fragment,o),w(Go.$$.fragment,o),w(Ls.$$.fragment,o),w(Jo.$$.fragment,o),w(Yo.$$.fragment,o),w(As.$$.fragment,o),w(Os.$$.fragment,o),w(en.$$.fragment,o),w(Ws.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Qs.$$.fragment,o),w(Hs.$$.fragment,o),w(an.$$.fragment,o),w(Bs.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(dn.$$.fragment,o),rl=!0)},o(o){P(d.$$.fragment,o),P(J.$$.fragment,o),P(un.$$.fragment,o),P(gn.$$.fragment,o),P(so.$$.fragment,o),P(kn.$$.fragment,o),P(vn.$$.fragment,o),P(Tn.$$.fragment,o),P($n.$$.fragment,o),P(Pn.$$.fragment,o),P(Nn.$$.fragment,o),P(yn.$$.fragment,o),P(Fn.$$.fragment,o),P(qn.$$.fragment,o),P(xn.$$.fragment,o),P(Cn.$$.fragment,o),P(On.$$.fragment,o),P(mo.$$.fragment,o),P(ho.$$.fragment,o),P(In.$$.fragment,o),P(Sn.$$.fragment,o),P(Dn.$$.fragment,o),P(uo.$$.fragment,o),P(go.$$.fragment,o),P(_o.$$.fragment,o),P(Wn.$$.fragment,o),P(Qn.$$.fragment,o),P(Vn.$$.fragment,o),P(vo.$$.fragment,o),P(bo.$$.fragment,o),P(To.$$.fragment,o),P(Mo.$$.fragment,o),P($o.$$.fragment,o),P(Bn.$$.fragment,o),P(Kn.$$.fragment,o),P(Yn.$$.fragment,o),P(Po.$$.fragment,o),P(No.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ss.$$.fragment,o),P(Fo.$$.fragment,o),P(Eo.$$.fragment,o),P(zo.$$.fragment,o),P(as.$$.fragment,o),P(rs.$$.fragment,o),P(cs.$$.fragment,o),P(xo.$$.fragment,o),P(Co.$$.fragment,o),P(jo.$$.fragment,o),P(ps.$$.fragment,o),P(ms.$$.fragment,o),P(Ao.$$.fragment,o),P(gs.$$.fragment,o),P(Oo.$$.fragment,o),P(Io.$$.fragment,o),P(_s.$$.fragment,o),P(ks.$$.fragment,o),P(Do.$$.fragment,o),P($s.$$.fragment,o),P(Wo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ho.$$.fragment,o),P(ws.$$.fragment,o),P(Ps.$$.fragment,o),P(Uo.$$.fragment,o),P(Es.$$.fragment,o),P(Vo.$$.fragment,o),P(Bo.$$.fragment,o),P(Ko.$$.fragment,o),P(zs.$$.fragment,o),P(qs.$$.fragment,o),P(Go.$$.fragment,o),P(Ls.$$.fragment,o),P(Jo.$$.fragment,o),P(Yo.$$.fragment,o),P(As.$$.fragment,o),P(Os.$$.fragment,o),P(en.$$.fragment,o),P(Ws.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(Qs.$$.fragment,o),P(Hs.$$.fragment,o),P(an.$$.fragment,o),P(Bs.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(dn.$$.fragment,o),rl=!1},d(o){t(l),o&&t(g),o&&t(c),N(d),o&&t(V),o&&t(z),N(J),o&&t(se),o&&t(U),o&&t(x),o&&t(Z),o&&t(ae),o&&t(ee),o&&t(re),o&&t(te),o&&t(Q),o&&t(oe),o&&t(L),o&&t(ne),o&&t(A),o&&t(S),o&&t(ie),o&&t(ue),N(un),o&&t(qi),o&&t(Je),N(gn),N(so),o&&t(xi),o&&t(yt),N(kn),o&&t(Ci),o&&t(Ee),N(vn),N(Tn),N($n),N(Pn),N(Nn),o&&t(ji),o&&t(Ft),N(yn),o&&t(Li),o&&t(Ye),N(Fn),N(qn),o&&t(Ai),o&&t(Et),N(xn),o&&t(Oi),o&&t(Oe),N(Cn),N(On),N(mo),N(ho),o&&t(Ii),o&&t(qt),N(In),o&&t(Si),o&&t(xt),N(Sn),N(Dn),N(uo),N(go),N(_o),o&&t(Di),o&&t(jt),N(Wn),o&&t(Wi),o&&t(Ie),N(Qn),N(Vn),N(vo),N(bo),N(To),N(Mo),N($o),o&&t(Qi),o&&t(At),N(Bn),o&&t(Hi),o&&t(Se),N(Kn),N(Yn),N(Po),N(No),o&&t(Ri),o&&t(It),N(Zn),o&&t(Ui),o&&t(De),N(es),N(ss),N(Fo),N(Eo),N(zo),o&&t(Vi),o&&t(Dt),N(as),o&&t(Bi),o&&t(We),N(rs),N(cs),N(xo),N(Co),N(jo),o&&t(Ki),o&&t(Ht),N(ps),o&&t(Xi),o&&t(ze),N(ms),N(Ao),N(gs),N(Oo),N(Io),o&&t(Gi),o&&t(Ut),N(_s),o&&t(Ji),o&&t(qe),N(ks),N(Do),N($s),N(Wo),N(Qo),N(Ho),o&&t(Yi),o&&t(Bt),N(ws),o&&t(Zi),o&&t(xe),N(Ps),N(Uo),N(Es),N(Vo),N(Bo),N(Ko),o&&t(el),o&&t(Xt),N(zs),o&&t(tl),o&&t(Ce),N(qs),N(Go),N(Ls),N(Jo),N(Yo),o&&t(ol),o&&t(Jt),N(As),o&&t(nl),o&&t(je),N(Os),N(en),N(Ws),N(tn),N(on),N(nn),o&&t(sl),o&&t(Zt),N(Qs),o&&t(al),o&&t(Le),N(Hs),N(an),N(Bs),N(rn),N(ln),N(dn)}}}const R_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function U_(y){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Jg{constructor(l){super();Yg(this,l,U_,H_,Zg,{})}}export{Y_ as default,R_ as metadata};
