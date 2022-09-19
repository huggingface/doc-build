import{S as Jg,i as Yg,s as Zg,e as a,k as m,w as T,t as n,M as e_,c as r,d as t,m as h,a as i,x as v,h as s,b as k,G as e,g as _,y,q as $,o as M,B as P,v as t_,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as rt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function o_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetModel, MPNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),g=n("Examples:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Examples:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function n_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function s_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, MPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function a_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function r_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function i_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function l_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function d_(z){let l,g,c,f,w;return f=new We({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of single-label classification:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of single-label classification:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function c_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function p_(z){let l,g,c,f,w;return f=new We({props:{code:`import torch
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
`}}),{c(){l=a("p"),g=n("Example of multi-label classification:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function m_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function h_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function f_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function u_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function g_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function __(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function k_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function b_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function w_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function T_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function v_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function y_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function $_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function M_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function P_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function N_(z){let l,g;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function F_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function E_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function z_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function q_(z){let l,g;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function C_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function x_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function j_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function O_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function L_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function A_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function D_(z){let l,g;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function I_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re;return{c(){l=a("p"),g=n("TensorFlow models and layers in "),c=a("code"),f=n("transformers"),w=n(" accept two formats as input:"),d=m(),p=a("ul"),q=a("li"),we=n("having all inputs as keyword arguments (like PyTorch models), or"),me=m(),A=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),N=a("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a("code"),ye=n("model.fit()"),le=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=a("code"),$e=n("fit()"),fe=n(" and "),K=a("code"),Me=n("predict()"),ue=n(`, such as when creating your own layers or models with
the Keras `),U=a("code"),Pe=n("Functional"),ge=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ee=m(),C=a("ul"),j=a("li"),_e=n("a single Tensor with "),Q=a("code"),Ne=n("input_ids"),ke=n(" only and nothing else: "),H=a("code"),oe=n("model(input_ids)"),Fe=m(),x=a("li"),Ee=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a("code"),de=n("model([input_ids, attention_mask])"),ze=n(" or "),X=a("code"),ce=n("model([input_ids, attention_mask, token_type_ids])"),qe=m(),D=a("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Ce=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=m(),O=a("p"),xe=n(`Note that when creating models and layers with
`),L=a("a"),se=n("subclassing"),re=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(u){l=r(u,"P",{});var F=i(l);g=s(F,"TensorFlow models and layers in "),c=r(F,"CODE",{});var Ue=i(c);f=s(Ue,"transformers"),Ue.forEach(t),w=s(F," accept two formats as input:"),F.forEach(t),d=h(u),p=r(u,"UL",{});var ne=i(p);q=r(ne,"LI",{});var Qe=i(q);we=s(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),me=h(ne),A=r(ne,"LI",{});var Ke=i(A);ae=s(Ke,"having all inputs as a list, tuple or dict in the first positional argument."),Ke.forEach(t),ne.forEach(t),te=h(u),N=r(u,"P",{});var E=i(N);Te=s(E,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(E,"CODE",{});var Oe=i(R);ve=s(Oe,"model.fit()"),Oe.forEach(t),he=s(E,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r(E,"CODE",{});var He=i(S);ye=s(He,"model.fit()"),He.forEach(t),le=s(E,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=r(E,"CODE",{});var pe=i(B);$e=s(pe,"fit()"),pe.forEach(t),fe=s(E," and "),K=r(E,"CODE",{});var Re=i(K);Me=s(Re,"predict()"),Re.forEach(t),ue=s(E,`, such as when creating your own layers or models with
the Keras `),U=r(E,"CODE",{});var Ae=i(U);Pe=s(Ae,"Functional"),Ae.forEach(t),ge=s(E,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),E.forEach(t),ee=h(u),C=r(u,"UL",{});var I=i(C);j=r(I,"LI",{});var G=i(j);_e=s(G,"a single Tensor with "),Q=r(G,"CODE",{});var De=i(Q);Ne=s(De,"input_ids"),De.forEach(t),ke=s(G," only and nothing else: "),H=r(G,"CODE",{});var Be=i(H);oe=s(Be,"model(input_ids)"),Be.forEach(t),G.forEach(t),Fe=h(I),x=r(I,"LI",{});var J=i(x);Ee=s(J,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r(J,"CODE",{});var Le=i(V);de=s(Le,"model([input_ids, attention_mask])"),Le.forEach(t),ze=s(J," or "),X=r(J,"CODE",{});var Ve=i(X);ce=s(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),J.forEach(t),qe=h(I),D=r(I,"LI",{});var je=i(D);be=s(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(je,"CODE",{});var Xe=i(W);Ce=s(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),je.forEach(t),I.forEach(t),Z=h(u),O=r(u,"P",{});var Y=i(O);xe=s(Y,`Note that when creating models and layers with
`),L=r(Y,"A",{href:!0,rel:!0});var Ge=i(L);se=s(Ge,"subclassing"),Ge.forEach(t),re=s(Y,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Y.forEach(t),this.h()},h(){k(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),k(L,"rel","nofollow")},m(u,F){_(u,l,F),e(l,g),e(l,c),e(c,f),e(l,w),_(u,d,F),_(u,p,F),e(p,q),e(q,we),e(p,me),e(p,A),e(A,ae),_(u,te,F),_(u,N,F),e(N,Te),e(N,R),e(R,ve),e(N,he),e(N,S),e(S,ye),e(N,le),e(N,B),e(B,$e),e(N,fe),e(N,K),e(K,Me),e(N,ue),e(N,U),e(U,Pe),e(N,ge),_(u,ee,F),_(u,C,F),e(C,j),e(j,_e),e(j,Q),e(Q,Ne),e(j,ke),e(j,H),e(H,oe),e(C,Fe),e(C,x),e(x,Ee),e(x,V),e(V,de),e(x,ze),e(x,X),e(X,ce),e(C,qe),e(C,D),e(D,be),e(D,W),e(W,Ce),_(u,Z,F),_(u,O,F),e(O,xe),e(O,L),e(L,se),e(O,re)},d(u){u&&t(l),u&&t(d),u&&t(p),u&&t(te),u&&t(N),u&&t(ee),u&&t(C),u&&t(Z),u&&t(O)}}}function S_(z){let l,g,c,f,w;return{c(){l=a("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),f=n("Module"),w=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var q=i(c);f=s(q,"Module"),q.forEach(t),w=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(d,p){_(d,l,p),e(l,g),e(l,c),e(c,f),e(l,w)},d(d){d&&t(l)}}}function W_(z){let l,g,c,f,w;return f=new We({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
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
`}}),{c(){l=a("p"),g=n("Example:"),c=m(),T(f.$$.fragment)},l(d){l=r(d,"P",{});var p=i(l);g=s(p,"Example:"),p.forEach(t),c=h(d),v(f.$$.fragment,d)},m(d,p){_(d,l,p),e(l,g),_(d,c,p),y(f,d,p),w=!0},p:Se,i(d){w||($(f.$$.fragment,d),w=!0)},o(d){M(f.$$.fragment,d),w=!1},d(d){d&&t(l),d&&t(c),P(f,d)}}}function K_(z){let l,g;return l=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,f){y(l,c,f),g=!0},p:Se,i(c){g||($(l.$$.fragment,c),g=!0)},o(c){M(l.$$.fragment,c),g=!1},d(c){P(l,c)}}}function U_(z){let l,g,c,f,w,d,p,q,we,me,A,ae,te,N,Te,R,ve,he,S,ye,le,B,$e,fe,K,Me,ue,U,Pe,ge,ee,C,j,_e,Q,Ne,ke,H,oe,Fe,x,Ee,V,de,ze,X,ce,qe,D,be,W,Ce,Z,O,xe,L,se,re,u,F,Ue,ne,Qe,Ke,E,Oe,He,pe,Re,Ae,I,G,De,Be,J,Le,Ve,je,Xe,Y,Ge,ka,dd,cd,ba,pd,md,hd,Mo,Qi,Vt,Po,dr,On,fd,cr,ud,Hi,Ze,Ln,gd,An,_d,wa,kd,bd,wd,Ot,Dn,Td,pr,vd,yd,In,Ta,$d,mr,Md,Pd,va,Nd,hr,Fd,Ed,No,Sn,zd,Wn,qd,fr,Cd,xd,jd,Fo,Kn,Od,ur,Ld,Ad,ya,Un,Ri,Xt,Eo,gr,Qn,Dd,_r,Id,Bi,Tt,Hn,Sd,Rn,Wd,kr,Kd,Ud,Qd,Bn,Hd,$a,Rd,Bd,Vd,zo,Vn,Xd,br,Gd,Vi,Gt,qo,wr,Xn,Jd,Tr,Yd,Xi,it,Gn,Zd,vr,ec,tc,Jn,oc,Ma,nc,sc,ac,Yn,rc,Zn,ic,lc,dc,vt,es,cc,Jt,pc,Pa,mc,hc,yr,fc,uc,gc,Co,_c,xo,Gi,Yt,jo,$r,ts,kc,Mr,bc,Ji,Zt,os,wc,ht,ns,Tc,eo,vc,Na,yc,$c,Pr,Mc,Pc,Nc,Oo,Fc,Lo,Ec,Ao,Yi,to,Do,Nr,ss,zc,Fr,qc,Zi,lt,as,Cc,Er,xc,jc,rs,Oc,Fa,Lc,Ac,Dc,is,Ic,ls,Sc,Wc,Kc,Je,ds,Uc,oo,Qc,Ea,Hc,Rc,zr,Bc,Vc,Xc,Io,Gc,So,Jc,Wo,Yc,Ko,Zc,Uo,el,no,Qo,qr,cs,ep,Cr,tp,tl,dt,ps,op,xr,np,sp,ms,ap,za,rp,ip,lp,hs,dp,fs,cp,pp,mp,yt,us,hp,so,fp,qa,up,gp,jr,_p,kp,bp,Ho,wp,Ro,ol,ao,Bo,Or,gs,Tp,Lr,vp,nl,ct,_s,yp,Ar,$p,Mp,ks,Pp,Ca,Np,Fp,Ep,bs,zp,ws,qp,Cp,xp,ft,Ts,jp,ro,Op,xa,Lp,Ap,Dr,Dp,Ip,Sp,Vo,Wp,Xo,Kp,Go,sl,io,Jo,Ir,vs,Up,Sr,Qp,al,pt,ys,Hp,lo,Rp,Wr,Bp,Vp,Kr,Xp,Gp,Jp,$s,Yp,ja,Zp,em,tm,Ms,om,Ps,nm,sm,am,ut,Ns,rm,co,im,Oa,lm,dm,Ur,cm,pm,mm,Yo,hm,Zo,fm,en,rl,po,tn,Qr,Fs,um,Hr,gm,il,et,Es,_m,Rr,km,bm,zs,wm,La,Tm,vm,ym,qs,$m,Cs,Mm,Pm,Nm,on,Fm,$t,xs,Em,mo,zm,Aa,qm,Cm,Br,xm,jm,Om,nn,Lm,sn,ll,ho,an,Vr,js,Am,Xr,Dm,dl,tt,Os,Im,Ls,Sm,Gr,Wm,Km,Um,As,Qm,Da,Hm,Rm,Bm,Ds,Vm,Is,Xm,Gm,Jm,rn,Ym,gt,Ss,Zm,fo,eh,Ia,th,oh,Jr,nh,sh,ah,ln,rh,dn,ih,cn,cl,uo,pn,Yr,Ws,lh,Zr,dh,pl,ot,Ks,ch,ei,ph,mh,Us,hh,Sa,fh,uh,gh,Qs,_h,Hs,kh,bh,wh,mn,Th,_t,Rs,vh,go,yh,Wa,$h,Mh,ti,Ph,Nh,Fh,hn,Eh,fn,zh,un,ml,_o,gn,oi,Bs,qh,ni,Ch,hl,nt,Vs,xh,si,jh,Oh,Xs,Lh,Ka,Ah,Dh,Ih,Gs,Sh,Js,Wh,Kh,Uh,_n,Qh,Mt,Ys,Hh,ko,Rh,Ua,Bh,Vh,ai,Xh,Gh,Jh,kn,Yh,bn,fl,bo,wn,ri,Zs,Zh,ii,ef,ul,st,ea,tf,li,of,nf,ta,sf,Qa,af,rf,lf,oa,df,na,cf,pf,mf,Tn,hf,kt,sa,ff,wo,uf,Ha,gf,_f,di,kf,bf,wf,vn,Tf,yn,vf,$n,gl,To,Mn,ci,aa,yf,pi,$f,_l,at,ra,Mf,vo,Pf,mi,Nf,Ff,hi,Ef,zf,qf,ia,Cf,Ra,xf,jf,Of,la,Lf,da,Af,Df,If,Pn,Sf,bt,ca,Wf,yo,Kf,Ba,Uf,Qf,fi,Hf,Rf,Bf,Nn,Vf,Fn,Xf,En,kl;return d=new rt({}),N=new rt({}),F=new rt({}),Oe=new ie({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/configuration_mpnet.py#L29"}}),Mo=new Ie({props:{anchor:"transformers.MPNetConfig.example",$$slots:{default:[o_]},$$scope:{ctx:z}}}),On=new rt({}),Ln=new ie({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),Kn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L283",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Un=new ie({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),Qn=new rt({}),Hn=new ie({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),Oo=new Ye({props:{$$slots:{default:[a_]},$$scope:{ctx:z}}}),Lo=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example",$$slots:{default:[r_]},$$scope:{ctx:z}}}),Ao=new Ie({props:{anchor:"transformers.MPNetForMaskedLM.forward.example-2",$$slots:{default:[i_]},$$scope:{ctx:z}}}),ss=new rt({}),as=new ie({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Io=new Ye({props:{$$slots:{default:[l_]},$$scope:{ctx:z}}}),So=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example",$$slots:{default:[d_]},$$scope:{ctx:z}}}),Wo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:z}}}),Ko=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-3",$$slots:{default:[p_]},$$scope:{ctx:z}}}),Uo=new Ie({props:{anchor:"transformers.MPNetForSequenceClassification.forward.example-4",$$slots:{default:[m_]},$$scope:{ctx:z}}}),cs=new rt({}),ps=new ie({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L780"}}),us=new ie({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Ho=new Ye({props:{$$slots:{default:[h_]},$$scope:{ctx:z}}}),Ro=new Ie({props:{anchor:"transformers.MPNetForMultipleChoice.forward.example",$$slots:{default:[f_]},$$scope:{ctx:z}}}),gs=new rt({}),_s=new ie({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L871"}}),Ts=new ie({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vo=new Ye({props:{$$slots:{default:[u_]},$$scope:{ctx:z}}}),Xo=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example",$$slots:{default:[g_]},$$scope:{ctx:z}}}),Go=new Ie({props:{anchor:"transformers.MPNetForTokenClassification.forward.example-2",$$slots:{default:[__]},$$scope:{ctx:z}}}),vs=new rt({}),ys=new ie({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
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
`}}),Yo=new Ye({props:{$$slots:{default:[k_]},$$scope:{ctx:z}}}),Zo=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example",$$slots:{default:[b_]},$$scope:{ctx:z}}}),en=new Ie({props:{anchor:"transformers.MPNetForQuestionAnswering.forward.example-2",$$slots:{default:[w_]},$$scope:{ctx:z}}}),Fs=new rt({}),Es=new ie({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L672"}}),on=new Ye({props:{$$slots:{default:[T_]},$$scope:{ctx:z}}}),xs=new ie({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L677",returnDescription:`
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
`}}),nn=new Ye({props:{$$slots:{default:[v_]},$$scope:{ctx:z}}}),sn=new Ie({props:{anchor:"transformers.TFMPNetModel.call.example",$$slots:{default:[y_]},$$scope:{ctx:z}}}),js=new rt({}),Os=new ie({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L775"}}),rn=new Ye({props:{$$slots:{default:[$_]},$$scope:{ctx:z}}}),Ss=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L792",returnDescription:`
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
`}}),ln=new Ye({props:{$$slots:{default:[M_]},$$scope:{ctx:z}}}),dn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example",$$slots:{default:[P_]},$$scope:{ctx:z}}}),cn=new Ie({props:{anchor:"transformers.TFMPNetForMaskedLM.call.example-2",$$slots:{default:[N_]},$$scope:{ctx:z}}}),Ws=new rt({}),Ks=new ie({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L886"}}),mn=new Ye({props:{$$slots:{default:[F_]},$$scope:{ctx:z}}}),Rs=new ie({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L897",returnDescription:`
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
`}}),hn=new Ye({props:{$$slots:{default:[E_]},$$scope:{ctx:z}}}),fn=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example",$$slots:{default:[z_]},$$scope:{ctx:z}}}),un=new Ie({props:{anchor:"transformers.TFMPNetForSequenceClassification.call.example-2",$$slots:{default:[q_]},$$scope:{ctx:z}}}),Bs=new rt({}),Vs=new ie({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L967"}}),_n=new Ye({props:{$$slots:{default:[C_]},$$scope:{ctx:z}}}),Ys=new ie({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L987",returnDescription:`
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
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1084"}}),Tn=new Ye({props:{$$slots:{default:[O_]},$$scope:{ctx:z}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1098",returnDescription:`
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
`}}),vn=new Ye({props:{$$slots:{default:[L_]},$$scope:{ctx:z}}}),yn=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example",$$slots:{default:[A_]},$$scope:{ctx:z}}}),$n=new Ie({props:{anchor:"transformers.TFMPNetForTokenClassification.call.example-2",$$slots:{default:[D_]},$$scope:{ctx:z}}}),aa=new rt({}),ra=new ie({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1167"}}),Pn=new Ye({props:{$$slots:{default:[I_]},$$scope:{ctx:z}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1180",returnDescription:`
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
`}}),Nn=new Ye({props:{$$slots:{default:[S_]},$$scope:{ctx:z}}}),Fn=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example",$$slots:{default:[W_]},$$scope:{ctx:z}}}),En=new Ie({props:{anchor:"transformers.TFMPNetForQuestionAnswering.call.example-2",$$slots:{default:[K_]},$$scope:{ctx:z}}}),{c(){l=a("meta"),g=m(),c=a("h1"),f=a("a"),w=a("span"),T(d.$$.fragment),p=m(),q=a("span"),we=n("MPNet"),me=m(),A=a("h2"),ae=a("a"),te=a("span"),T(N.$$.fragment),Te=m(),R=a("span"),ve=n("Overview"),he=m(),S=a("p"),ye=n("The MPNet model was proposed in "),le=a("a"),B=n("MPNet: Masked and Permuted Pre-training for Language Understanding"),$e=n(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),fe=m(),K=a("p"),Me=n(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ue=m(),U=a("p"),Pe=n("The abstract from the paper is the following:"),ge=m(),ee=a("p"),C=a("em"),j=n(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),_e=m(),Q=a("p"),Ne=n("Tips:"),ke=m(),H=a("ul"),oe=a("li"),Fe=n("MPNet doesn\u2019t have "),x=a("code"),Ee=n("token_type_ids"),V=n(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=a("code"),ze=n("tokenizer.sep_token"),X=n(" (or "),ce=a("code"),qe=n("[sep]"),D=n(")."),be=m(),W=a("p"),Ce=n("The original code can be found "),Z=a("a"),O=n("here"),xe=n("."),L=m(),se=a("h2"),re=a("a"),u=a("span"),T(F.$$.fragment),Ue=m(),ne=a("span"),Qe=n("MPNetConfig"),Ke=m(),E=a("div"),T(Oe.$$.fragment),He=m(),pe=a("p"),Re=n("This is the configuration class to store the configuration of a "),Ae=a("a"),I=n("MPNetModel"),G=n(" or a "),De=a("a"),Be=n("TFMPNetModel"),J=n(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Le=a("a"),Ve=n("microsoft/mpnet-base"),je=n(" architecture."),Xe=m(),Y=a("p"),Ge=n("Configuration objects inherit from "),ka=a("a"),dd=n("PretrainedConfig"),cd=n(` and can be used to control the model outputs. Read the
documentation from `),ba=a("a"),pd=n("PretrainedConfig"),md=n(" for more information."),hd=m(),T(Mo.$$.fragment),Qi=m(),Vt=a("h2"),Po=a("a"),dr=a("span"),T(On.$$.fragment),fd=m(),cr=a("span"),ud=n("MPNetTokenizer"),Hi=m(),Ze=a("div"),T(Ln.$$.fragment),gd=m(),An=a("p"),_d=n("This tokenizer inherits from "),wa=a("a"),kd=n("BertTokenizer"),bd=n(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),wd=m(),Ot=a("div"),T(Dn.$$.fragment),Td=m(),pr=a("p"),vd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),yd=m(),In=a("ul"),Ta=a("li"),$d=n("single sequence: "),mr=a("code"),Md=n("<s> X </s>"),Pd=m(),va=a("li"),Nd=n("pair of sequences: "),hr=a("code"),Fd=n("<s> A </s></s> B </s>"),Ed=m(),No=a("div"),T(Sn.$$.fragment),zd=m(),Wn=a("p"),qd=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fr=a("code"),Cd=n("prepare_for_model"),xd=n(" methods."),jd=m(),Fo=a("div"),T(Kn.$$.fragment),Od=m(),ur=a("p"),Ld=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ad=m(),ya=a("div"),T(Un.$$.fragment),Ri=m(),Xt=a("h2"),Eo=a("a"),gr=a("span"),T(Qn.$$.fragment),Dd=m(),_r=a("span"),Id=n("MPNetTokenizerFast"),Bi=m(),Tt=a("div"),T(Hn.$$.fragment),Sd=m(),Rn=a("p"),Wd=n("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=a("em"),Kd=n("tokenizers"),Ud=n(" library). Based on WordPiece."),Qd=m(),Bn=a("p"),Hd=n("This tokenizer inherits from "),$a=a("a"),Rd=n("PreTrainedTokenizerFast"),Bd=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=m(),zo=a("div"),T(Vn.$$.fragment),Xd=m(),br=a("p"),Gd=n(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Vi=m(),Gt=a("h2"),qo=a("a"),wr=a("span"),T(Xn.$$.fragment),Jd=m(),Tr=a("span"),Yd=n("MPNetModel"),Xi=m(),it=a("div"),T(Gn.$$.fragment),Zd=m(),vr=a("p"),ec=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),tc=m(),Jn=a("p"),oc=n("This model inherits from "),Ma=a("a"),nc=n("PreTrainedModel"),sc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ac=m(),Yn=a("p"),rc=n("This model is also a PyTorch "),Zn=a("a"),ic=n("torch.nn.Module"),lc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc=m(),vt=a("div"),T(es.$$.fragment),cc=m(),Jt=a("p"),pc=n("The "),Pa=a("a"),mc=n("MPNetModel"),hc=n(" forward method, overrides the "),yr=a("code"),fc=n("__call__"),uc=n(" special method."),gc=m(),T(Co.$$.fragment),_c=m(),T(xo.$$.fragment),Gi=m(),Yt=a("h2"),jo=a("a"),$r=a("span"),T(ts.$$.fragment),kc=m(),Mr=a("span"),bc=n("MPNetForMaskedLM"),Ji=m(),Zt=a("div"),T(os.$$.fragment),wc=m(),ht=a("div"),T(ns.$$.fragment),Tc=m(),eo=a("p"),vc=n("The "),Na=a("a"),yc=n("MPNetForMaskedLM"),$c=n(" forward method, overrides the "),Pr=a("code"),Mc=n("__call__"),Pc=n(" special method."),Nc=m(),T(Oo.$$.fragment),Fc=m(),T(Lo.$$.fragment),Ec=m(),T(Ao.$$.fragment),Yi=m(),to=a("h2"),Do=a("a"),Nr=a("span"),T(ss.$$.fragment),zc=m(),Fr=a("span"),qc=n("MPNetForSequenceClassification"),Zi=m(),lt=a("div"),T(as.$$.fragment),Cc=m(),Er=a("p"),xc=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),jc=m(),rs=a("p"),Oc=n("This model inherits from "),Fa=a("a"),Lc=n("PreTrainedModel"),Ac=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc=m(),is=a("p"),Ic=n("This model is also a PyTorch "),ls=a("a"),Sc=n("torch.nn.Module"),Wc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc=m(),Je=a("div"),T(ds.$$.fragment),Uc=m(),oo=a("p"),Qc=n("The "),Ea=a("a"),Hc=n("MPNetForSequenceClassification"),Rc=n(" forward method, overrides the "),zr=a("code"),Bc=n("__call__"),Vc=n(" special method."),Xc=m(),T(Io.$$.fragment),Gc=m(),T(So.$$.fragment),Jc=m(),T(Wo.$$.fragment),Yc=m(),T(Ko.$$.fragment),Zc=m(),T(Uo.$$.fragment),el=m(),no=a("h2"),Qo=a("a"),qr=a("span"),T(cs.$$.fragment),ep=m(),Cr=a("span"),tp=n("MPNetForMultipleChoice"),tl=m(),dt=a("div"),T(ps.$$.fragment),op=m(),xr=a("p"),np=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sp=m(),ms=a("p"),ap=n("This model inherits from "),za=a("a"),rp=n("PreTrainedModel"),ip=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp=m(),hs=a("p"),dp=n("This model is also a PyTorch "),fs=a("a"),cp=n("torch.nn.Module"),pp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mp=m(),yt=a("div"),T(us.$$.fragment),hp=m(),so=a("p"),fp=n("The "),qa=a("a"),up=n("MPNetForMultipleChoice"),gp=n(" forward method, overrides the "),jr=a("code"),_p=n("__call__"),kp=n(" special method."),bp=m(),T(Ho.$$.fragment),wp=m(),T(Ro.$$.fragment),ol=m(),ao=a("h2"),Bo=a("a"),Or=a("span"),T(gs.$$.fragment),Tp=m(),Lr=a("span"),vp=n("MPNetForTokenClassification"),nl=m(),ct=a("div"),T(_s.$$.fragment),yp=m(),Ar=a("p"),$p=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Mp=m(),ks=a("p"),Pp=n("This model inherits from "),Ca=a("a"),Np=n("PreTrainedModel"),Fp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep=m(),bs=a("p"),zp=n("This model is also a PyTorch "),ws=a("a"),qp=n("torch.nn.Module"),Cp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xp=m(),ft=a("div"),T(Ts.$$.fragment),jp=m(),ro=a("p"),Op=n("The "),xa=a("a"),Lp=n("MPNetForTokenClassification"),Ap=n(" forward method, overrides the "),Dr=a("code"),Dp=n("__call__"),Ip=n(" special method."),Sp=m(),T(Vo.$$.fragment),Wp=m(),T(Xo.$$.fragment),Kp=m(),T(Go.$$.fragment),sl=m(),io=a("h2"),Jo=a("a"),Ir=a("span"),T(vs.$$.fragment),Up=m(),Sr=a("span"),Qp=n("MPNetForQuestionAnswering"),al=m(),pt=a("div"),T(ys.$$.fragment),Hp=m(),lo=a("p"),Rp=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=a("code"),Bp=n("span start logits"),Vp=n(" and "),Kr=a("code"),Xp=n("span end logits"),Gp=n(")."),Jp=m(),$s=a("p"),Yp=n("This model inherits from "),ja=a("a"),Zp=n("PreTrainedModel"),em=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tm=m(),Ms=a("p"),om=n("This model is also a PyTorch "),Ps=a("a"),nm=n("torch.nn.Module"),sm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am=m(),ut=a("div"),T(Ns.$$.fragment),rm=m(),co=a("p"),im=n("The "),Oa=a("a"),lm=n("MPNetForQuestionAnswering"),dm=n(" forward method, overrides the "),Ur=a("code"),cm=n("__call__"),pm=n(" special method."),mm=m(),T(Yo.$$.fragment),hm=m(),T(Zo.$$.fragment),fm=m(),T(en.$$.fragment),rl=m(),po=a("h2"),tn=a("a"),Qr=a("span"),T(Fs.$$.fragment),um=m(),Hr=a("span"),gm=n("TFMPNetModel"),il=m(),et=a("div"),T(Es.$$.fragment),_m=m(),Rr=a("p"),km=n("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),bm=m(),zs=a("p"),wm=n("This model inherits from "),La=a("a"),Tm=n("TFPreTrainedModel"),vm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym=m(),qs=a("p"),$m=n("This model is also a "),Cs=a("a"),Mm=n("tf.keras.Model"),Pm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nm=m(),T(on.$$.fragment),Fm=m(),$t=a("div"),T(xs.$$.fragment),Em=m(),mo=a("p"),zm=n("The "),Aa=a("a"),qm=n("TFMPNetModel"),Cm=n(" forward method, overrides the "),Br=a("code"),xm=n("__call__"),jm=n(" special method."),Om=m(),T(nn.$$.fragment),Lm=m(),T(sn.$$.fragment),ll=m(),ho=a("h2"),an=a("a"),Vr=a("span"),T(js.$$.fragment),Am=m(),Xr=a("span"),Dm=n("TFMPNetForMaskedLM"),dl=m(),tt=a("div"),T(Os.$$.fragment),Im=m(),Ls=a("p"),Sm=n("MPNet Model with a "),Gr=a("code"),Wm=n("language modeling"),Km=n(" head on top."),Um=m(),As=a("p"),Qm=n("This model inherits from "),Da=a("a"),Hm=n("TFPreTrainedModel"),Rm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bm=m(),Ds=a("p"),Vm=n("This model is also a "),Is=a("a"),Xm=n("tf.keras.Model"),Gm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jm=m(),T(rn.$$.fragment),Ym=m(),gt=a("div"),T(Ss.$$.fragment),Zm=m(),fo=a("p"),eh=n("The "),Ia=a("a"),th=n("TFMPNetForMaskedLM"),oh=n(" forward method, overrides the "),Jr=a("code"),nh=n("__call__"),sh=n(" special method."),ah=m(),T(ln.$$.fragment),rh=m(),T(dn.$$.fragment),ih=m(),T(cn.$$.fragment),cl=m(),uo=a("h2"),pn=a("a"),Yr=a("span"),T(Ws.$$.fragment),lh=m(),Zr=a("span"),dh=n("TFMPNetForSequenceClassification"),pl=m(),ot=a("div"),T(Ks.$$.fragment),ch=m(),ei=a("p"),ph=n(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),mh=m(),Us=a("p"),hh=n("This model inherits from "),Sa=a("a"),fh=n("TFPreTrainedModel"),uh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=m(),Qs=a("p"),_h=n("This model is also a "),Hs=a("a"),kh=n("tf.keras.Model"),bh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wh=m(),T(mn.$$.fragment),Th=m(),_t=a("div"),T(Rs.$$.fragment),vh=m(),go=a("p"),yh=n("The "),Wa=a("a"),$h=n("TFMPNetForSequenceClassification"),Mh=n(" forward method, overrides the "),ti=a("code"),Ph=n("__call__"),Nh=n(" special method."),Fh=m(),T(hn.$$.fragment),Eh=m(),T(fn.$$.fragment),zh=m(),T(un.$$.fragment),ml=m(),_o=a("h2"),gn=a("a"),oi=a("span"),T(Bs.$$.fragment),qh=m(),ni=a("span"),Ch=n("TFMPNetForMultipleChoice"),hl=m(),nt=a("div"),T(Vs.$$.fragment),xh=m(),si=a("p"),jh=n(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Oh=m(),Xs=a("p"),Lh=n("This model inherits from "),Ka=a("a"),Ah=n("TFPreTrainedModel"),Dh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=m(),Gs=a("p"),Sh=n("This model is also a "),Js=a("a"),Wh=n("tf.keras.Model"),Kh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uh=m(),T(_n.$$.fragment),Qh=m(),Mt=a("div"),T(Ys.$$.fragment),Hh=m(),ko=a("p"),Rh=n("The "),Ua=a("a"),Bh=n("TFMPNetForMultipleChoice"),Vh=n(" forward method, overrides the "),ai=a("code"),Xh=n("__call__"),Gh=n(" special method."),Jh=m(),T(kn.$$.fragment),Yh=m(),T(bn.$$.fragment),fl=m(),bo=a("h2"),wn=a("a"),ri=a("span"),T(Zs.$$.fragment),Zh=m(),ii=a("span"),ef=n("TFMPNetForTokenClassification"),ul=m(),st=a("div"),T(ea.$$.fragment),tf=m(),li=a("p"),of=n(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nf=m(),ta=a("p"),sf=n("This model inherits from "),Qa=a("a"),af=n("TFPreTrainedModel"),rf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lf=m(),oa=a("p"),df=n("This model is also a "),na=a("a"),cf=n("tf.keras.Model"),pf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mf=m(),T(Tn.$$.fragment),hf=m(),kt=a("div"),T(sa.$$.fragment),ff=m(),wo=a("p"),uf=n("The "),Ha=a("a"),gf=n("TFMPNetForTokenClassification"),_f=n(" forward method, overrides the "),di=a("code"),kf=n("__call__"),bf=n(" special method."),wf=m(),T(vn.$$.fragment),Tf=m(),T(yn.$$.fragment),vf=m(),T($n.$$.fragment),gl=m(),To=a("h2"),Mn=a("a"),ci=a("span"),T(aa.$$.fragment),yf=m(),pi=a("span"),$f=n("TFMPNetForQuestionAnswering"),_l=m(),at=a("div"),T(ra.$$.fragment),Mf=m(),vo=a("p"),Pf=n(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=a("code"),Nf=n("span start logits"),Ff=n(" and "),hi=a("code"),Ef=n("span end logits"),zf=n(")."),qf=m(),ia=a("p"),Cf=n("This model inherits from "),Ra=a("a"),xf=n("TFPreTrainedModel"),jf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=m(),la=a("p"),Lf=n("This model is also a "),da=a("a"),Af=n("tf.keras.Model"),Df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If=m(),T(Pn.$$.fragment),Sf=m(),bt=a("div"),T(ca.$$.fragment),Wf=m(),yo=a("p"),Kf=n("The "),Ba=a("a"),Uf=n("TFMPNetForQuestionAnswering"),Qf=n(" forward method, overrides the "),fi=a("code"),Hf=n("__call__"),Rf=n(" special method."),Bf=m(),T(Nn.$$.fragment),Vf=m(),T(Fn.$$.fragment),Xf=m(),T(En.$$.fragment),this.h()},l(o){const b=e_('[data-svelte="svelte-1phssyn"]',document.head);l=r(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(o),c=r(o,"H1",{class:!0});var pa=i(c);f=r(pa,"A",{id:!0,class:!0,href:!0});var ui=i(f);w=r(ui,"SPAN",{});var gi=i(w);v(d.$$.fragment,gi),gi.forEach(t),ui.forEach(t),p=h(pa),q=r(pa,"SPAN",{});var _i=i(q);we=s(_i,"MPNet"),_i.forEach(t),pa.forEach(t),me=h(o),A=r(o,"H2",{class:!0});var ma=i(A);ae=r(ma,"A",{id:!0,class:!0,href:!0});var ki=i(ae);te=r(ki,"SPAN",{});var bi=i(te);v(N.$$.fragment,bi),bi.forEach(t),ki.forEach(t),Te=h(ma),R=r(ma,"SPAN",{});var wi=i(R);ve=s(wi,"Overview"),wi.forEach(t),ma.forEach(t),he=h(o),S=r(o,"P",{});var ha=i(S);ye=s(ha,"The MPNet model was proposed in "),le=r(ha,"A",{href:!0,rel:!0});var Ti=i(le);B=s(Ti,"MPNet: Masked and Permuted Pre-training for Language Understanding"),Ti.forEach(t),$e=s(ha," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),ha.forEach(t),fe=h(o),K=r(o,"P",{});var vi=i(K);Me=s(vi,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),vi.forEach(t),ue=h(o),U=r(o,"P",{});var yi=i(U);Pe=s(yi,"The abstract from the paper is the following:"),yi.forEach(t),ge=h(o),ee=r(o,"P",{});var $i=i(ee);C=r($i,"EM",{});var Mi=i(C);j=s(Mi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),Mi.forEach(t),$i.forEach(t),_e=h(o),Q=r(o,"P",{});var Pi=i(Q);Ne=s(Pi,"Tips:"),Pi.forEach(t),ke=h(o),H=r(o,"UL",{});var Ni=i(H);oe=r(Ni,"LI",{});var Ct=i(oe);Fe=s(Ct,"MPNet doesn\u2019t have "),x=r(Ct,"CODE",{});var Fi=i(x);Ee=s(Fi,"token_type_ids"),Fi.forEach(t),V=s(Ct,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),de=r(Ct,"CODE",{});var Ei=i(de);ze=s(Ei,"tokenizer.sep_token"),Ei.forEach(t),X=s(Ct," (or "),ce=r(Ct,"CODE",{});var zi=i(ce);qe=s(zi,"[sep]"),zi.forEach(t),D=s(Ct,")."),Ct.forEach(t),Ni.forEach(t),be=h(o),W=r(o,"P",{});var fa=i(W);Ce=s(fa,"The original code can be found "),Z=r(fa,"A",{href:!0,rel:!0});var qi=i(Z);O=s(qi,"here"),qi.forEach(t),xe=s(fa,"."),fa.forEach(t),L=h(o),se=r(o,"H2",{class:!0});var ua=i(se);re=r(ua,"A",{id:!0,class:!0,href:!0});var Ci=i(re);u=r(Ci,"SPAN",{});var xi=i(u);v(F.$$.fragment,xi),xi.forEach(t),Ci.forEach(t),Ue=h(ua),ne=r(ua,"SPAN",{});var ji=i(ne);Qe=s(ji,"MPNetConfig"),ji.forEach(t),ua.forEach(t),Ke=h(o),E=r(o,"DIV",{class:!0});var xt=i(E);v(Oe.$$.fragment,xt),He=h(xt),pe=r(xt,"P",{});var jt=i(pe);Re=s(jt,"This is the configuration class to store the configuration of a "),Ae=r(jt,"A",{href:!0});var Oi=i(Ae);I=s(Oi,"MPNetModel"),Oi.forEach(t),G=s(jt," or a "),De=r(jt,"A",{href:!0});var Li=i(De);Be=s(Li,"TFMPNetModel"),Li.forEach(t),J=s(jt,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Le=r(jt,"A",{href:!0,rel:!0});var Ai=i(Le);Ve=s(Ai,"microsoft/mpnet-base"),Ai.forEach(t),je=s(jt," architecture."),jt.forEach(t),Xe=h(xt),Y=r(xt,"P",{});var $o=i(Y);Ge=s($o,"Configuration objects inherit from "),ka=r($o,"A",{href:!0});var Di=i(ka);dd=s(Di,"PretrainedConfig"),Di.forEach(t),cd=s($o,` and can be used to control the model outputs. Read the
documentation from `),ba=r($o,"A",{href:!0});var Ii=i(ba);pd=s(Ii,"PretrainedConfig"),Ii.forEach(t),md=s($o," for more information."),$o.forEach(t),hd=h(xt),v(Mo.$$.fragment,xt),xt.forEach(t),Qi=h(o),Vt=r(o,"H2",{class:!0});var ga=i(Vt);Po=r(ga,"A",{id:!0,class:!0,href:!0});var Si=i(Po);dr=r(Si,"SPAN",{});var Wi=i(dr);v(On.$$.fragment,Wi),Wi.forEach(t),Si.forEach(t),fd=h(ga),cr=r(ga,"SPAN",{});var Ki=i(cr);ud=s(Ki,"MPNetTokenizer"),Ki.forEach(t),ga.forEach(t),Hi=h(o),Ze=r(o,"DIV",{class:!0});var mt=i(Ze);v(Ln.$$.fragment,mt),gd=h(mt),An=r(mt,"P",{});var _a=i(An);_d=s(_a,"This tokenizer inherits from "),wa=r(_a,"A",{href:!0});var Ui=i(wa);kd=s(Ui,"BertTokenizer"),Ui.forEach(t),bd=s(_a,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),_a.forEach(t),wd=h(mt),Ot=r(mt,"DIV",{class:!0});var Va=i(Ot);v(Dn.$$.fragment,Va),Td=h(Va),pr=r(Va,"P",{});var Yf=i(pr);vd=s(Yf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Yf.forEach(t),yd=h(Va),In=r(Va,"UL",{});var bl=i(In);Ta=r(bl,"LI",{});var Gf=i(Ta);$d=s(Gf,"single sequence: "),mr=r(Gf,"CODE",{});var Zf=i(mr);Md=s(Zf,"<s> X </s>"),Zf.forEach(t),Gf.forEach(t),Pd=h(bl),va=r(bl,"LI",{});var Jf=i(va);Nd=s(Jf,"pair of sequences: "),hr=r(Jf,"CODE",{});var eu=i(hr);Fd=s(eu,"<s> A </s></s> B </s>"),eu.forEach(t),Jf.forEach(t),bl.forEach(t),Va.forEach(t),Ed=h(mt),No=r(mt,"DIV",{class:!0});var wl=i(No);v(Sn.$$.fragment,wl),zd=h(wl),Wn=r(wl,"P",{});var Tl=i(Wn);qd=s(Tl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),fr=r(Tl,"CODE",{});var tu=i(fr);Cd=s(tu,"prepare_for_model"),tu.forEach(t),xd=s(Tl," methods."),Tl.forEach(t),wl.forEach(t),jd=h(mt),Fo=r(mt,"DIV",{class:!0});var vl=i(Fo);v(Kn.$$.fragment,vl),Od=h(vl),ur=r(vl,"P",{});var ou=i(ur);Ld=s(ou,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),ou.forEach(t),vl.forEach(t),Ad=h(mt),ya=r(mt,"DIV",{class:!0});var nu=i(ya);v(Un.$$.fragment,nu),nu.forEach(t),mt.forEach(t),Ri=h(o),Xt=r(o,"H2",{class:!0});var yl=i(Xt);Eo=r(yl,"A",{id:!0,class:!0,href:!0});var su=i(Eo);gr=r(su,"SPAN",{});var au=i(gr);v(Qn.$$.fragment,au),au.forEach(t),su.forEach(t),Dd=h(yl),_r=r(yl,"SPAN",{});var ru=i(_r);Id=s(ru,"MPNetTokenizerFast"),ru.forEach(t),yl.forEach(t),Bi=h(o),Tt=r(o,"DIV",{class:!0});var zn=i(Tt);v(Hn.$$.fragment,zn),Sd=h(zn),Rn=r(zn,"P",{});var $l=i(Rn);Wd=s($l,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),kr=r($l,"EM",{});var iu=i(kr);Kd=s(iu,"tokenizers"),iu.forEach(t),Ud=s($l," library). Based on WordPiece."),$l.forEach(t),Qd=h(zn),Bn=r(zn,"P",{});var Ml=i(Bn);Hd=s(Ml,"This tokenizer inherits from "),$a=r(Ml,"A",{href:!0});var lu=i($a);Rd=s(lu,"PreTrainedTokenizerFast"),lu.forEach(t),Bd=s(Ml,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ml.forEach(t),Vd=h(zn),zo=r(zn,"DIV",{class:!0});var Pl=i(zo);v(Vn.$$.fragment,Pl),Xd=h(Pl),br=r(Pl,"P",{});var du=i(br);Gd=s(du,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),du.forEach(t),Pl.forEach(t),zn.forEach(t),Vi=h(o),Gt=r(o,"H2",{class:!0});var Nl=i(Gt);qo=r(Nl,"A",{id:!0,class:!0,href:!0});var cu=i(qo);wr=r(cu,"SPAN",{});var pu=i(wr);v(Xn.$$.fragment,pu),pu.forEach(t),cu.forEach(t),Jd=h(Nl),Tr=r(Nl,"SPAN",{});var mu=i(Tr);Yd=s(mu,"MPNetModel"),mu.forEach(t),Nl.forEach(t),Xi=h(o),it=r(o,"DIV",{class:!0});var Lt=i(it);v(Gn.$$.fragment,Lt),Zd=h(Lt),vr=r(Lt,"P",{});var hu=i(vr);ec=s(hu,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),hu.forEach(t),tc=h(Lt),Jn=r(Lt,"P",{});var Fl=i(Jn);oc=s(Fl,"This model inherits from "),Ma=r(Fl,"A",{href:!0});var fu=i(Ma);nc=s(fu,"PreTrainedModel"),fu.forEach(t),sc=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),ac=h(Lt),Yn=r(Lt,"P",{});var El=i(Yn);rc=s(El,"This model is also a PyTorch "),Zn=r(El,"A",{href:!0,rel:!0});var uu=i(Zn);ic=s(uu,"torch.nn.Module"),uu.forEach(t),lc=s(El,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),El.forEach(t),dc=h(Lt),vt=r(Lt,"DIV",{class:!0});var qn=i(vt);v(es.$$.fragment,qn),cc=h(qn),Jt=r(qn,"P",{});var Xa=i(Jt);pc=s(Xa,"The "),Pa=r(Xa,"A",{href:!0});var gu=i(Pa);mc=s(gu,"MPNetModel"),gu.forEach(t),hc=s(Xa," forward method, overrides the "),yr=r(Xa,"CODE",{});var _u=i(yr);fc=s(_u,"__call__"),_u.forEach(t),uc=s(Xa," special method."),Xa.forEach(t),gc=h(qn),v(Co.$$.fragment,qn),_c=h(qn),v(xo.$$.fragment,qn),qn.forEach(t),Lt.forEach(t),Gi=h(o),Yt=r(o,"H2",{class:!0});var zl=i(Yt);jo=r(zl,"A",{id:!0,class:!0,href:!0});var ku=i(jo);$r=r(ku,"SPAN",{});var bu=i($r);v(ts.$$.fragment,bu),bu.forEach(t),ku.forEach(t),kc=h(zl),Mr=r(zl,"SPAN",{});var wu=i(Mr);bc=s(wu,"MPNetForMaskedLM"),wu.forEach(t),zl.forEach(t),Ji=h(o),Zt=r(o,"DIV",{class:!0});var ql=i(Zt);v(os.$$.fragment,ql),wc=h(ql),ht=r(ql,"DIV",{class:!0});var At=i(ht);v(ns.$$.fragment,At),Tc=h(At),eo=r(At,"P",{});var Ga=i(eo);vc=s(Ga,"The "),Na=r(Ga,"A",{href:!0});var Tu=i(Na);yc=s(Tu,"MPNetForMaskedLM"),Tu.forEach(t),$c=s(Ga," forward method, overrides the "),Pr=r(Ga,"CODE",{});var vu=i(Pr);Mc=s(vu,"__call__"),vu.forEach(t),Pc=s(Ga," special method."),Ga.forEach(t),Nc=h(At),v(Oo.$$.fragment,At),Fc=h(At),v(Lo.$$.fragment,At),Ec=h(At),v(Ao.$$.fragment,At),At.forEach(t),ql.forEach(t),Yi=h(o),to=r(o,"H2",{class:!0});var Cl=i(to);Do=r(Cl,"A",{id:!0,class:!0,href:!0});var yu=i(Do);Nr=r(yu,"SPAN",{});var $u=i(Nr);v(ss.$$.fragment,$u),$u.forEach(t),yu.forEach(t),zc=h(Cl),Fr=r(Cl,"SPAN",{});var Mu=i(Fr);qc=s(Mu,"MPNetForSequenceClassification"),Mu.forEach(t),Cl.forEach(t),Zi=h(o),lt=r(o,"DIV",{class:!0});var Dt=i(lt);v(as.$$.fragment,Dt),Cc=h(Dt),Er=r(Dt,"P",{});var Pu=i(Er);xc=s(Pu,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Pu.forEach(t),jc=h(Dt),rs=r(Dt,"P",{});var xl=i(rs);Oc=s(xl,"This model inherits from "),Fa=r(xl,"A",{href:!0});var Nu=i(Fa);Lc=s(Nu,"PreTrainedModel"),Nu.forEach(t),Ac=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Dc=h(Dt),is=r(Dt,"P",{});var jl=i(is);Ic=s(jl,"This model is also a PyTorch "),ls=r(jl,"A",{href:!0,rel:!0});var Fu=i(ls);Sc=s(Fu,"torch.nn.Module"),Fu.forEach(t),Wc=s(jl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jl.forEach(t),Kc=h(Dt),Je=r(Dt,"DIV",{class:!0});var wt=i(Je);v(ds.$$.fragment,wt),Uc=h(wt),oo=r(wt,"P",{});var Ja=i(oo);Qc=s(Ja,"The "),Ea=r(Ja,"A",{href:!0});var Eu=i(Ea);Hc=s(Eu,"MPNetForSequenceClassification"),Eu.forEach(t),Rc=s(Ja," forward method, overrides the "),zr=r(Ja,"CODE",{});var zu=i(zr);Bc=s(zu,"__call__"),zu.forEach(t),Vc=s(Ja," special method."),Ja.forEach(t),Xc=h(wt),v(Io.$$.fragment,wt),Gc=h(wt),v(So.$$.fragment,wt),Jc=h(wt),v(Wo.$$.fragment,wt),Yc=h(wt),v(Ko.$$.fragment,wt),Zc=h(wt),v(Uo.$$.fragment,wt),wt.forEach(t),Dt.forEach(t),el=h(o),no=r(o,"H2",{class:!0});var Ol=i(no);Qo=r(Ol,"A",{id:!0,class:!0,href:!0});var qu=i(Qo);qr=r(qu,"SPAN",{});var Cu=i(qr);v(cs.$$.fragment,Cu),Cu.forEach(t),qu.forEach(t),ep=h(Ol),Cr=r(Ol,"SPAN",{});var xu=i(Cr);tp=s(xu,"MPNetForMultipleChoice"),xu.forEach(t),Ol.forEach(t),tl=h(o),dt=r(o,"DIV",{class:!0});var It=i(dt);v(ps.$$.fragment,It),op=h(It),xr=r(It,"P",{});var ju=i(xr);np=s(ju,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ju.forEach(t),sp=h(It),ms=r(It,"P",{});var Ll=i(ms);ap=s(Ll,"This model inherits from "),za=r(Ll,"A",{href:!0});var Ou=i(za);rp=s(Ou,"PreTrainedModel"),Ou.forEach(t),ip=s(Ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ll.forEach(t),lp=h(It),hs=r(It,"P",{});var Al=i(hs);dp=s(Al,"This model is also a PyTorch "),fs=r(Al,"A",{href:!0,rel:!0});var Lu=i(fs);cp=s(Lu,"torch.nn.Module"),Lu.forEach(t),pp=s(Al,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Al.forEach(t),mp=h(It),yt=r(It,"DIV",{class:!0});var Cn=i(yt);v(us.$$.fragment,Cn),hp=h(Cn),so=r(Cn,"P",{});var Ya=i(so);fp=s(Ya,"The "),qa=r(Ya,"A",{href:!0});var Au=i(qa);up=s(Au,"MPNetForMultipleChoice"),Au.forEach(t),gp=s(Ya," forward method, overrides the "),jr=r(Ya,"CODE",{});var Du=i(jr);_p=s(Du,"__call__"),Du.forEach(t),kp=s(Ya," special method."),Ya.forEach(t),bp=h(Cn),v(Ho.$$.fragment,Cn),wp=h(Cn),v(Ro.$$.fragment,Cn),Cn.forEach(t),It.forEach(t),ol=h(o),ao=r(o,"H2",{class:!0});var Dl=i(ao);Bo=r(Dl,"A",{id:!0,class:!0,href:!0});var Iu=i(Bo);Or=r(Iu,"SPAN",{});var Su=i(Or);v(gs.$$.fragment,Su),Su.forEach(t),Iu.forEach(t),Tp=h(Dl),Lr=r(Dl,"SPAN",{});var Wu=i(Lr);vp=s(Wu,"MPNetForTokenClassification"),Wu.forEach(t),Dl.forEach(t),nl=h(o),ct=r(o,"DIV",{class:!0});var St=i(ct);v(_s.$$.fragment,St),yp=h(St),Ar=r(St,"P",{});var Ku=i(Ar);$p=s(Ku,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ku.forEach(t),Mp=h(St),ks=r(St,"P",{});var Il=i(ks);Pp=s(Il,"This model inherits from "),Ca=r(Il,"A",{href:!0});var Uu=i(Ca);Np=s(Uu,"PreTrainedModel"),Uu.forEach(t),Fp=s(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Ep=h(St),bs=r(St,"P",{});var Sl=i(bs);zp=s(Sl,"This model is also a PyTorch "),ws=r(Sl,"A",{href:!0,rel:!0});var Qu=i(ws);qp=s(Qu,"torch.nn.Module"),Qu.forEach(t),Cp=s(Sl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sl.forEach(t),xp=h(St),ft=r(St,"DIV",{class:!0});var Wt=i(ft);v(Ts.$$.fragment,Wt),jp=h(Wt),ro=r(Wt,"P",{});var Za=i(ro);Op=s(Za,"The "),xa=r(Za,"A",{href:!0});var Hu=i(xa);Lp=s(Hu,"MPNetForTokenClassification"),Hu.forEach(t),Ap=s(Za," forward method, overrides the "),Dr=r(Za,"CODE",{});var Ru=i(Dr);Dp=s(Ru,"__call__"),Ru.forEach(t),Ip=s(Za," special method."),Za.forEach(t),Sp=h(Wt),v(Vo.$$.fragment,Wt),Wp=h(Wt),v(Xo.$$.fragment,Wt),Kp=h(Wt),v(Go.$$.fragment,Wt),Wt.forEach(t),St.forEach(t),sl=h(o),io=r(o,"H2",{class:!0});var Wl=i(io);Jo=r(Wl,"A",{id:!0,class:!0,href:!0});var Bu=i(Jo);Ir=r(Bu,"SPAN",{});var Vu=i(Ir);v(vs.$$.fragment,Vu),Vu.forEach(t),Bu.forEach(t),Up=h(Wl),Sr=r(Wl,"SPAN",{});var Xu=i(Sr);Qp=s(Xu,"MPNetForQuestionAnswering"),Xu.forEach(t),Wl.forEach(t),al=h(o),pt=r(o,"DIV",{class:!0});var Kt=i(pt);v(ys.$$.fragment,Kt),Hp=h(Kt),lo=r(Kt,"P",{});var er=i(lo);Rp=s(er,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Wr=r(er,"CODE",{});var Gu=i(Wr);Bp=s(Gu,"span start logits"),Gu.forEach(t),Vp=s(er," and "),Kr=r(er,"CODE",{});var Ju=i(Kr);Xp=s(Ju,"span end logits"),Ju.forEach(t),Gp=s(er,")."),er.forEach(t),Jp=h(Kt),$s=r(Kt,"P",{});var Kl=i($s);Yp=s(Kl,"This model inherits from "),ja=r(Kl,"A",{href:!0});var Yu=i(ja);Zp=s(Yu,"PreTrainedModel"),Yu.forEach(t),em=s(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),tm=h(Kt),Ms=r(Kt,"P",{});var Ul=i(Ms);om=s(Ul,"This model is also a PyTorch "),Ps=r(Ul,"A",{href:!0,rel:!0});var Zu=i(Ps);nm=s(Zu,"torch.nn.Module"),Zu.forEach(t),sm=s(Ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ul.forEach(t),am=h(Kt),ut=r(Kt,"DIV",{class:!0});var Ut=i(ut);v(Ns.$$.fragment,Ut),rm=h(Ut),co=r(Ut,"P",{});var tr=i(co);im=s(tr,"The "),Oa=r(tr,"A",{href:!0});var eg=i(Oa);lm=s(eg,"MPNetForQuestionAnswering"),eg.forEach(t),dm=s(tr," forward method, overrides the "),Ur=r(tr,"CODE",{});var tg=i(Ur);cm=s(tg,"__call__"),tg.forEach(t),pm=s(tr," special method."),tr.forEach(t),mm=h(Ut),v(Yo.$$.fragment,Ut),hm=h(Ut),v(Zo.$$.fragment,Ut),fm=h(Ut),v(en.$$.fragment,Ut),Ut.forEach(t),Kt.forEach(t),rl=h(o),po=r(o,"H2",{class:!0});var Ql=i(po);tn=r(Ql,"A",{id:!0,class:!0,href:!0});var og=i(tn);Qr=r(og,"SPAN",{});var ng=i(Qr);v(Fs.$$.fragment,ng),ng.forEach(t),og.forEach(t),um=h(Ql),Hr=r(Ql,"SPAN",{});var sg=i(Hr);gm=s(sg,"TFMPNetModel"),sg.forEach(t),Ql.forEach(t),il=h(o),et=r(o,"DIV",{class:!0});var Pt=i(et);v(Es.$$.fragment,Pt),_m=h(Pt),Rr=r(Pt,"P",{});var ag=i(Rr);km=s(ag,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),bm=h(Pt),zs=r(Pt,"P",{});var Hl=i(zs);wm=s(Hl,"This model inherits from "),La=r(Hl,"A",{href:!0});var rg=i(La);Tm=s(rg,"TFPreTrainedModel"),rg.forEach(t),vm=s(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),ym=h(Pt),qs=r(Pt,"P",{});var Rl=i(qs);$m=s(Rl,"This model is also a "),Cs=r(Rl,"A",{href:!0,rel:!0});var ig=i(Cs);Mm=s(ig,"tf.keras.Model"),ig.forEach(t),Pm=s(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),Nm=h(Pt),v(on.$$.fragment,Pt),Fm=h(Pt),$t=r(Pt,"DIV",{class:!0});var xn=i($t);v(xs.$$.fragment,xn),Em=h(xn),mo=r(xn,"P",{});var or=i(mo);zm=s(or,"The "),Aa=r(or,"A",{href:!0});var lg=i(Aa);qm=s(lg,"TFMPNetModel"),lg.forEach(t),Cm=s(or," forward method, overrides the "),Br=r(or,"CODE",{});var dg=i(Br);xm=s(dg,"__call__"),dg.forEach(t),jm=s(or," special method."),or.forEach(t),Om=h(xn),v(nn.$$.fragment,xn),Lm=h(xn),v(sn.$$.fragment,xn),xn.forEach(t),Pt.forEach(t),ll=h(o),ho=r(o,"H2",{class:!0});var Bl=i(ho);an=r(Bl,"A",{id:!0,class:!0,href:!0});var cg=i(an);Vr=r(cg,"SPAN",{});var pg=i(Vr);v(js.$$.fragment,pg),pg.forEach(t),cg.forEach(t),Am=h(Bl),Xr=r(Bl,"SPAN",{});var mg=i(Xr);Dm=s(mg,"TFMPNetForMaskedLM"),mg.forEach(t),Bl.forEach(t),dl=h(o),tt=r(o,"DIV",{class:!0});var Nt=i(tt);v(Os.$$.fragment,Nt),Im=h(Nt),Ls=r(Nt,"P",{});var Vl=i(Ls);Sm=s(Vl,"MPNet Model with a "),Gr=r(Vl,"CODE",{});var hg=i(Gr);Wm=s(hg,"language modeling"),hg.forEach(t),Km=s(Vl," head on top."),Vl.forEach(t),Um=h(Nt),As=r(Nt,"P",{});var Xl=i(As);Qm=s(Xl,"This model inherits from "),Da=r(Xl,"A",{href:!0});var fg=i(Da);Hm=s(fg,"TFPreTrainedModel"),fg.forEach(t),Rm=s(Xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xl.forEach(t),Bm=h(Nt),Ds=r(Nt,"P",{});var Gl=i(Ds);Vm=s(Gl,"This model is also a "),Is=r(Gl,"A",{href:!0,rel:!0});var ug=i(Is);Xm=s(ug,"tf.keras.Model"),ug.forEach(t),Gm=s(Gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gl.forEach(t),Jm=h(Nt),v(rn.$$.fragment,Nt),Ym=h(Nt),gt=r(Nt,"DIV",{class:!0});var Qt=i(gt);v(Ss.$$.fragment,Qt),Zm=h(Qt),fo=r(Qt,"P",{});var nr=i(fo);eh=s(nr,"The "),Ia=r(nr,"A",{href:!0});var gg=i(Ia);th=s(gg,"TFMPNetForMaskedLM"),gg.forEach(t),oh=s(nr," forward method, overrides the "),Jr=r(nr,"CODE",{});var _g=i(Jr);nh=s(_g,"__call__"),_g.forEach(t),sh=s(nr," special method."),nr.forEach(t),ah=h(Qt),v(ln.$$.fragment,Qt),rh=h(Qt),v(dn.$$.fragment,Qt),ih=h(Qt),v(cn.$$.fragment,Qt),Qt.forEach(t),Nt.forEach(t),cl=h(o),uo=r(o,"H2",{class:!0});var Jl=i(uo);pn=r(Jl,"A",{id:!0,class:!0,href:!0});var kg=i(pn);Yr=r(kg,"SPAN",{});var bg=i(Yr);v(Ws.$$.fragment,bg),bg.forEach(t),kg.forEach(t),lh=h(Jl),Zr=r(Jl,"SPAN",{});var wg=i(Zr);dh=s(wg,"TFMPNetForSequenceClassification"),wg.forEach(t),Jl.forEach(t),pl=h(o),ot=r(o,"DIV",{class:!0});var Ft=i(ot);v(Ks.$$.fragment,Ft),ch=h(Ft),ei=r(Ft,"P",{});var Tg=i(ei);ph=s(Tg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Tg.forEach(t),mh=h(Ft),Us=r(Ft,"P",{});var Yl=i(Us);hh=s(Yl,"This model inherits from "),Sa=r(Yl,"A",{href:!0});var vg=i(Sa);fh=s(vg,"TFPreTrainedModel"),vg.forEach(t),uh=s(Yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yl.forEach(t),gh=h(Ft),Qs=r(Ft,"P",{});var Zl=i(Qs);_h=s(Zl,"This model is also a "),Hs=r(Zl,"A",{href:!0,rel:!0});var yg=i(Hs);kh=s(yg,"tf.keras.Model"),yg.forEach(t),bh=s(Zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zl.forEach(t),wh=h(Ft),v(mn.$$.fragment,Ft),Th=h(Ft),_t=r(Ft,"DIV",{class:!0});var Ht=i(_t);v(Rs.$$.fragment,Ht),vh=h(Ht),go=r(Ht,"P",{});var sr=i(go);yh=s(sr,"The "),Wa=r(sr,"A",{href:!0});var $g=i(Wa);$h=s($g,"TFMPNetForSequenceClassification"),$g.forEach(t),Mh=s(sr," forward method, overrides the "),ti=r(sr,"CODE",{});var Mg=i(ti);Ph=s(Mg,"__call__"),Mg.forEach(t),Nh=s(sr," special method."),sr.forEach(t),Fh=h(Ht),v(hn.$$.fragment,Ht),Eh=h(Ht),v(fn.$$.fragment,Ht),zh=h(Ht),v(un.$$.fragment,Ht),Ht.forEach(t),Ft.forEach(t),ml=h(o),_o=r(o,"H2",{class:!0});var ed=i(_o);gn=r(ed,"A",{id:!0,class:!0,href:!0});var Pg=i(gn);oi=r(Pg,"SPAN",{});var Ng=i(oi);v(Bs.$$.fragment,Ng),Ng.forEach(t),Pg.forEach(t),qh=h(ed),ni=r(ed,"SPAN",{});var Fg=i(ni);Ch=s(Fg,"TFMPNetForMultipleChoice"),Fg.forEach(t),ed.forEach(t),hl=h(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);v(Vs.$$.fragment,Et),xh=h(Et),si=r(Et,"P",{});var Eg=i(si);jh=s(Eg,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),Oh=h(Et),Xs=r(Et,"P",{});var td=i(Xs);Lh=s(td,"This model inherits from "),Ka=r(td,"A",{href:!0});var zg=i(Ka);Ah=s(zg,"TFPreTrainedModel"),zg.forEach(t),Dh=s(td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),td.forEach(t),Ih=h(Et),Gs=r(Et,"P",{});var od=i(Gs);Sh=s(od,"This model is also a "),Js=r(od,"A",{href:!0,rel:!0});var qg=i(Js);Wh=s(qg,"tf.keras.Model"),qg.forEach(t),Kh=s(od,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),od.forEach(t),Uh=h(Et),v(_n.$$.fragment,Et),Qh=h(Et),Mt=r(Et,"DIV",{class:!0});var jn=i(Mt);v(Ys.$$.fragment,jn),Hh=h(jn),ko=r(jn,"P",{});var ar=i(ko);Rh=s(ar,"The "),Ua=r(ar,"A",{href:!0});var Cg=i(Ua);Bh=s(Cg,"TFMPNetForMultipleChoice"),Cg.forEach(t),Vh=s(ar," forward method, overrides the "),ai=r(ar,"CODE",{});var xg=i(ai);Xh=s(xg,"__call__"),xg.forEach(t),Gh=s(ar," special method."),ar.forEach(t),Jh=h(jn),v(kn.$$.fragment,jn),Yh=h(jn),v(bn.$$.fragment,jn),jn.forEach(t),Et.forEach(t),fl=h(o),bo=r(o,"H2",{class:!0});var nd=i(bo);wn=r(nd,"A",{id:!0,class:!0,href:!0});var jg=i(wn);ri=r(jg,"SPAN",{});var Og=i(ri);v(Zs.$$.fragment,Og),Og.forEach(t),jg.forEach(t),Zh=h(nd),ii=r(nd,"SPAN",{});var Lg=i(ii);ef=s(Lg,"TFMPNetForTokenClassification"),Lg.forEach(t),nd.forEach(t),ul=h(o),st=r(o,"DIV",{class:!0});var zt=i(st);v(ea.$$.fragment,zt),tf=h(zt),li=r(zt,"P",{});var Ag=i(li);of=s(Ag,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ag.forEach(t),nf=h(zt),ta=r(zt,"P",{});var sd=i(ta);sf=s(sd,"This model inherits from "),Qa=r(sd,"A",{href:!0});var Dg=i(Qa);af=s(Dg,"TFPreTrainedModel"),Dg.forEach(t),rf=s(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),lf=h(zt),oa=r(zt,"P",{});var ad=i(oa);df=s(ad,"This model is also a "),na=r(ad,"A",{href:!0,rel:!0});var Ig=i(na);cf=s(Ig,"tf.keras.Model"),Ig.forEach(t),pf=s(ad,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ad.forEach(t),mf=h(zt),v(Tn.$$.fragment,zt),hf=h(zt),kt=r(zt,"DIV",{class:!0});var Rt=i(kt);v(sa.$$.fragment,Rt),ff=h(Rt),wo=r(Rt,"P",{});var rr=i(wo);uf=s(rr,"The "),Ha=r(rr,"A",{href:!0});var Sg=i(Ha);gf=s(Sg,"TFMPNetForTokenClassification"),Sg.forEach(t),_f=s(rr," forward method, overrides the "),di=r(rr,"CODE",{});var Wg=i(di);kf=s(Wg,"__call__"),Wg.forEach(t),bf=s(rr," special method."),rr.forEach(t),wf=h(Rt),v(vn.$$.fragment,Rt),Tf=h(Rt),v(yn.$$.fragment,Rt),vf=h(Rt),v($n.$$.fragment,Rt),Rt.forEach(t),zt.forEach(t),gl=h(o),To=r(o,"H2",{class:!0});var rd=i(To);Mn=r(rd,"A",{id:!0,class:!0,href:!0});var Kg=i(Mn);ci=r(Kg,"SPAN",{});var Ug=i(ci);v(aa.$$.fragment,Ug),Ug.forEach(t),Kg.forEach(t),yf=h(rd),pi=r(rd,"SPAN",{});var Qg=i(pi);$f=s(Qg,"TFMPNetForQuestionAnswering"),Qg.forEach(t),rd.forEach(t),_l=h(o),at=r(o,"DIV",{class:!0});var qt=i(at);v(ra.$$.fragment,qt),Mf=h(qt),vo=r(qt,"P",{});var ir=i(vo);Pf=s(ir,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mi=r(ir,"CODE",{});var Hg=i(mi);Nf=s(Hg,"span start logits"),Hg.forEach(t),Ff=s(ir," and "),hi=r(ir,"CODE",{});var Rg=i(hi);Ef=s(Rg,"span end logits"),Rg.forEach(t),zf=s(ir,")."),ir.forEach(t),qf=h(qt),ia=r(qt,"P",{});var id=i(ia);Cf=s(id,"This model inherits from "),Ra=r(id,"A",{href:!0});var Bg=i(Ra);xf=s(Bg,"TFPreTrainedModel"),Bg.forEach(t),jf=s(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),Of=h(qt),la=r(qt,"P",{});var ld=i(la);Lf=s(ld,"This model is also a "),da=r(ld,"A",{href:!0,rel:!0});var Vg=i(da);Af=s(Vg,"tf.keras.Model"),Vg.forEach(t),Df=s(ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ld.forEach(t),If=h(qt),v(Pn.$$.fragment,qt),Sf=h(qt),bt=r(qt,"DIV",{class:!0});var Bt=i(bt);v(ca.$$.fragment,Bt),Wf=h(Bt),yo=r(Bt,"P",{});var lr=i(yo);Kf=s(lr,"The "),Ba=r(lr,"A",{href:!0});var Xg=i(Ba);Uf=s(Xg,"TFMPNetForQuestionAnswering"),Xg.forEach(t),Qf=s(lr," forward method, overrides the "),fi=r(lr,"CODE",{});var Gg=i(fi);Hf=s(Gg,"__call__"),Gg.forEach(t),Rf=s(lr," special method."),lr.forEach(t),Bf=h(Bt),v(Nn.$$.fragment,Bt),Vf=h(Bt),v(Fn.$$.fragment,Bt),Xf=h(Bt),v(En.$$.fragment,Bt),Bt.forEach(t),qt.forEach(t),this.h()},h(){k(l,"name","hf:doc:metadata"),k(l,"content",JSON.stringify(Q_)),k(f,"id","mpnet"),k(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(f,"href","#mpnet"),k(c,"class","relative group"),k(ae,"id","overview"),k(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ae,"href","#overview"),k(A,"class","relative group"),k(le,"href","https://arxiv.org/abs/2004.09297"),k(le,"rel","nofollow"),k(Z,"href","https://github.com/microsoft/MPNet"),k(Z,"rel","nofollow"),k(re,"id","transformers.MPNetConfig"),k(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(re,"href","#transformers.MPNetConfig"),k(se,"class","relative group"),k(Ae,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),k(De,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),k(Le,"href","https://huggingface.co/microsoft/mpnet-base"),k(Le,"rel","nofollow"),k(ka,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(ba,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.MPNetTokenizer"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.MPNetTokenizer"),k(Vt,"class","relative group"),k(wa,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ya,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Eo,"id","transformers.MPNetTokenizerFast"),k(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Eo,"href","#transformers.MPNetTokenizerFast"),k(Xt,"class","relative group"),k($a,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),k(zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qo,"id","transformers.MPNetModel"),k(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qo,"href","#transformers.MPNetModel"),k(Gt,"class","relative group"),k(Ma,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Zn,"rel","nofollow"),k(Pa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),k(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(jo,"id","transformers.MPNetForMaskedLM"),k(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(jo,"href","#transformers.MPNetForMaskedLM"),k(Yt,"class","relative group"),k(Na,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),k(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.MPNetForSequenceClassification"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.MPNetForSequenceClassification"),k(to,"class","relative group"),k(Fa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ls,"rel","nofollow"),k(Ea,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Qo,"id","transformers.MPNetForMultipleChoice"),k(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Qo,"href","#transformers.MPNetForMultipleChoice"),k(no,"class","relative group"),k(za,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(fs,"rel","nofollow"),k(qa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),k(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Bo,"id","transformers.MPNetForTokenClassification"),k(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Bo,"href","#transformers.MPNetForTokenClassification"),k(ao,"class","relative group"),k(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ws,"rel","nofollow"),k(xa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jo,"id","transformers.MPNetForQuestionAnswering"),k(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jo,"href","#transformers.MPNetForQuestionAnswering"),k(io,"class","relative group"),k(ja,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),k(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ps,"rel","nofollow"),k(Oa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tn,"id","transformers.TFMPNetModel"),k(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(tn,"href","#transformers.TFMPNetModel"),k(po,"class","relative group"),k(La,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Cs,"rel","nofollow"),k(Aa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),k($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.TFMPNetForMaskedLM"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.TFMPNetForMaskedLM"),k(ho,"class","relative group"),k(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Is,"rel","nofollow"),k(Ia,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),k(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(pn,"id","transformers.TFMPNetForSequenceClassification"),k(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(pn,"href","#transformers.TFMPNetForSequenceClassification"),k(uo,"class","relative group"),k(Sa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Hs,"rel","nofollow"),k(Wa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(gn,"id","transformers.TFMPNetForMultipleChoice"),k(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(gn,"href","#transformers.TFMPNetForMultipleChoice"),k(_o,"class","relative group"),k(Ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Js,"rel","nofollow"),k(Ua,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),k(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wn,"id","transformers.TFMPNetForTokenClassification"),k(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(wn,"href","#transformers.TFMPNetForTokenClassification"),k(bo,"class","relative group"),k(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(na,"rel","nofollow"),k(Ha,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),k(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Mn,"id","transformers.TFMPNetForQuestionAnswering"),k(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Mn,"href","#transformers.TFMPNetForQuestionAnswering"),k(To,"class","relative group"),k(Ra,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(da,"rel","nofollow"),k(Ba,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),k(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,l),_(o,g,b),_(o,c,b),e(c,f),e(f,w),y(d,w,null),e(c,p),e(c,q),e(q,we),_(o,me,b),_(o,A,b),e(A,ae),e(ae,te),y(N,te,null),e(A,Te),e(A,R),e(R,ve),_(o,he,b),_(o,S,b),e(S,ye),e(S,le),e(le,B),e(S,$e),_(o,fe,b),_(o,K,b),e(K,Me),_(o,ue,b),_(o,U,b),e(U,Pe),_(o,ge,b),_(o,ee,b),e(ee,C),e(C,j),_(o,_e,b),_(o,Q,b),e(Q,Ne),_(o,ke,b),_(o,H,b),e(H,oe),e(oe,Fe),e(oe,x),e(x,Ee),e(oe,V),e(oe,de),e(de,ze),e(oe,X),e(oe,ce),e(ce,qe),e(oe,D),_(o,be,b),_(o,W,b),e(W,Ce),e(W,Z),e(Z,O),e(W,xe),_(o,L,b),_(o,se,b),e(se,re),e(re,u),y(F,u,null),e(se,Ue),e(se,ne),e(ne,Qe),_(o,Ke,b),_(o,E,b),y(Oe,E,null),e(E,He),e(E,pe),e(pe,Re),e(pe,Ae),e(Ae,I),e(pe,G),e(pe,De),e(De,Be),e(pe,J),e(pe,Le),e(Le,Ve),e(pe,je),e(E,Xe),e(E,Y),e(Y,Ge),e(Y,ka),e(ka,dd),e(Y,cd),e(Y,ba),e(ba,pd),e(Y,md),e(E,hd),y(Mo,E,null),_(o,Qi,b),_(o,Vt,b),e(Vt,Po),e(Po,dr),y(On,dr,null),e(Vt,fd),e(Vt,cr),e(cr,ud),_(o,Hi,b),_(o,Ze,b),y(Ln,Ze,null),e(Ze,gd),e(Ze,An),e(An,_d),e(An,wa),e(wa,kd),e(An,bd),e(Ze,wd),e(Ze,Ot),y(Dn,Ot,null),e(Ot,Td),e(Ot,pr),e(pr,vd),e(Ot,yd),e(Ot,In),e(In,Ta),e(Ta,$d),e(Ta,mr),e(mr,Md),e(In,Pd),e(In,va),e(va,Nd),e(va,hr),e(hr,Fd),e(Ze,Ed),e(Ze,No),y(Sn,No,null),e(No,zd),e(No,Wn),e(Wn,qd),e(Wn,fr),e(fr,Cd),e(Wn,xd),e(Ze,jd),e(Ze,Fo),y(Kn,Fo,null),e(Fo,Od),e(Fo,ur),e(ur,Ld),e(Ze,Ad),e(Ze,ya),y(Un,ya,null),_(o,Ri,b),_(o,Xt,b),e(Xt,Eo),e(Eo,gr),y(Qn,gr,null),e(Xt,Dd),e(Xt,_r),e(_r,Id),_(o,Bi,b),_(o,Tt,b),y(Hn,Tt,null),e(Tt,Sd),e(Tt,Rn),e(Rn,Wd),e(Rn,kr),e(kr,Kd),e(Rn,Ud),e(Tt,Qd),e(Tt,Bn),e(Bn,Hd),e(Bn,$a),e($a,Rd),e(Bn,Bd),e(Tt,Vd),e(Tt,zo),y(Vn,zo,null),e(zo,Xd),e(zo,br),e(br,Gd),_(o,Vi,b),_(o,Gt,b),e(Gt,qo),e(qo,wr),y(Xn,wr,null),e(Gt,Jd),e(Gt,Tr),e(Tr,Yd),_(o,Xi,b),_(o,it,b),y(Gn,it,null),e(it,Zd),e(it,vr),e(vr,ec),e(it,tc),e(it,Jn),e(Jn,oc),e(Jn,Ma),e(Ma,nc),e(Jn,sc),e(it,ac),e(it,Yn),e(Yn,rc),e(Yn,Zn),e(Zn,ic),e(Yn,lc),e(it,dc),e(it,vt),y(es,vt,null),e(vt,cc),e(vt,Jt),e(Jt,pc),e(Jt,Pa),e(Pa,mc),e(Jt,hc),e(Jt,yr),e(yr,fc),e(Jt,uc),e(vt,gc),y(Co,vt,null),e(vt,_c),y(xo,vt,null),_(o,Gi,b),_(o,Yt,b),e(Yt,jo),e(jo,$r),y(ts,$r,null),e(Yt,kc),e(Yt,Mr),e(Mr,bc),_(o,Ji,b),_(o,Zt,b),y(os,Zt,null),e(Zt,wc),e(Zt,ht),y(ns,ht,null),e(ht,Tc),e(ht,eo),e(eo,vc),e(eo,Na),e(Na,yc),e(eo,$c),e(eo,Pr),e(Pr,Mc),e(eo,Pc),e(ht,Nc),y(Oo,ht,null),e(ht,Fc),y(Lo,ht,null),e(ht,Ec),y(Ao,ht,null),_(o,Yi,b),_(o,to,b),e(to,Do),e(Do,Nr),y(ss,Nr,null),e(to,zc),e(to,Fr),e(Fr,qc),_(o,Zi,b),_(o,lt,b),y(as,lt,null),e(lt,Cc),e(lt,Er),e(Er,xc),e(lt,jc),e(lt,rs),e(rs,Oc),e(rs,Fa),e(Fa,Lc),e(rs,Ac),e(lt,Dc),e(lt,is),e(is,Ic),e(is,ls),e(ls,Sc),e(is,Wc),e(lt,Kc),e(lt,Je),y(ds,Je,null),e(Je,Uc),e(Je,oo),e(oo,Qc),e(oo,Ea),e(Ea,Hc),e(oo,Rc),e(oo,zr),e(zr,Bc),e(oo,Vc),e(Je,Xc),y(Io,Je,null),e(Je,Gc),y(So,Je,null),e(Je,Jc),y(Wo,Je,null),e(Je,Yc),y(Ko,Je,null),e(Je,Zc),y(Uo,Je,null),_(o,el,b),_(o,no,b),e(no,Qo),e(Qo,qr),y(cs,qr,null),e(no,ep),e(no,Cr),e(Cr,tp),_(o,tl,b),_(o,dt,b),y(ps,dt,null),e(dt,op),e(dt,xr),e(xr,np),e(dt,sp),e(dt,ms),e(ms,ap),e(ms,za),e(za,rp),e(ms,ip),e(dt,lp),e(dt,hs),e(hs,dp),e(hs,fs),e(fs,cp),e(hs,pp),e(dt,mp),e(dt,yt),y(us,yt,null),e(yt,hp),e(yt,so),e(so,fp),e(so,qa),e(qa,up),e(so,gp),e(so,jr),e(jr,_p),e(so,kp),e(yt,bp),y(Ho,yt,null),e(yt,wp),y(Ro,yt,null),_(o,ol,b),_(o,ao,b),e(ao,Bo),e(Bo,Or),y(gs,Or,null),e(ao,Tp),e(ao,Lr),e(Lr,vp),_(o,nl,b),_(o,ct,b),y(_s,ct,null),e(ct,yp),e(ct,Ar),e(Ar,$p),e(ct,Mp),e(ct,ks),e(ks,Pp),e(ks,Ca),e(Ca,Np),e(ks,Fp),e(ct,Ep),e(ct,bs),e(bs,zp),e(bs,ws),e(ws,qp),e(bs,Cp),e(ct,xp),e(ct,ft),y(Ts,ft,null),e(ft,jp),e(ft,ro),e(ro,Op),e(ro,xa),e(xa,Lp),e(ro,Ap),e(ro,Dr),e(Dr,Dp),e(ro,Ip),e(ft,Sp),y(Vo,ft,null),e(ft,Wp),y(Xo,ft,null),e(ft,Kp),y(Go,ft,null),_(o,sl,b),_(o,io,b),e(io,Jo),e(Jo,Ir),y(vs,Ir,null),e(io,Up),e(io,Sr),e(Sr,Qp),_(o,al,b),_(o,pt,b),y(ys,pt,null),e(pt,Hp),e(pt,lo),e(lo,Rp),e(lo,Wr),e(Wr,Bp),e(lo,Vp),e(lo,Kr),e(Kr,Xp),e(lo,Gp),e(pt,Jp),e(pt,$s),e($s,Yp),e($s,ja),e(ja,Zp),e($s,em),e(pt,tm),e(pt,Ms),e(Ms,om),e(Ms,Ps),e(Ps,nm),e(Ms,sm),e(pt,am),e(pt,ut),y(Ns,ut,null),e(ut,rm),e(ut,co),e(co,im),e(co,Oa),e(Oa,lm),e(co,dm),e(co,Ur),e(Ur,cm),e(co,pm),e(ut,mm),y(Yo,ut,null),e(ut,hm),y(Zo,ut,null),e(ut,fm),y(en,ut,null),_(o,rl,b),_(o,po,b),e(po,tn),e(tn,Qr),y(Fs,Qr,null),e(po,um),e(po,Hr),e(Hr,gm),_(o,il,b),_(o,et,b),y(Es,et,null),e(et,_m),e(et,Rr),e(Rr,km),e(et,bm),e(et,zs),e(zs,wm),e(zs,La),e(La,Tm),e(zs,vm),e(et,ym),e(et,qs),e(qs,$m),e(qs,Cs),e(Cs,Mm),e(qs,Pm),e(et,Nm),y(on,et,null),e(et,Fm),e(et,$t),y(xs,$t,null),e($t,Em),e($t,mo),e(mo,zm),e(mo,Aa),e(Aa,qm),e(mo,Cm),e(mo,Br),e(Br,xm),e(mo,jm),e($t,Om),y(nn,$t,null),e($t,Lm),y(sn,$t,null),_(o,ll,b),_(o,ho,b),e(ho,an),e(an,Vr),y(js,Vr,null),e(ho,Am),e(ho,Xr),e(Xr,Dm),_(o,dl,b),_(o,tt,b),y(Os,tt,null),e(tt,Im),e(tt,Ls),e(Ls,Sm),e(Ls,Gr),e(Gr,Wm),e(Ls,Km),e(tt,Um),e(tt,As),e(As,Qm),e(As,Da),e(Da,Hm),e(As,Rm),e(tt,Bm),e(tt,Ds),e(Ds,Vm),e(Ds,Is),e(Is,Xm),e(Ds,Gm),e(tt,Jm),y(rn,tt,null),e(tt,Ym),e(tt,gt),y(Ss,gt,null),e(gt,Zm),e(gt,fo),e(fo,eh),e(fo,Ia),e(Ia,th),e(fo,oh),e(fo,Jr),e(Jr,nh),e(fo,sh),e(gt,ah),y(ln,gt,null),e(gt,rh),y(dn,gt,null),e(gt,ih),y(cn,gt,null),_(o,cl,b),_(o,uo,b),e(uo,pn),e(pn,Yr),y(Ws,Yr,null),e(uo,lh),e(uo,Zr),e(Zr,dh),_(o,pl,b),_(o,ot,b),y(Ks,ot,null),e(ot,ch),e(ot,ei),e(ei,ph),e(ot,mh),e(ot,Us),e(Us,hh),e(Us,Sa),e(Sa,fh),e(Us,uh),e(ot,gh),e(ot,Qs),e(Qs,_h),e(Qs,Hs),e(Hs,kh),e(Qs,bh),e(ot,wh),y(mn,ot,null),e(ot,Th),e(ot,_t),y(Rs,_t,null),e(_t,vh),e(_t,go),e(go,yh),e(go,Wa),e(Wa,$h),e(go,Mh),e(go,ti),e(ti,Ph),e(go,Nh),e(_t,Fh),y(hn,_t,null),e(_t,Eh),y(fn,_t,null),e(_t,zh),y(un,_t,null),_(o,ml,b),_(o,_o,b),e(_o,gn),e(gn,oi),y(Bs,oi,null),e(_o,qh),e(_o,ni),e(ni,Ch),_(o,hl,b),_(o,nt,b),y(Vs,nt,null),e(nt,xh),e(nt,si),e(si,jh),e(nt,Oh),e(nt,Xs),e(Xs,Lh),e(Xs,Ka),e(Ka,Ah),e(Xs,Dh),e(nt,Ih),e(nt,Gs),e(Gs,Sh),e(Gs,Js),e(Js,Wh),e(Gs,Kh),e(nt,Uh),y(_n,nt,null),e(nt,Qh),e(nt,Mt),y(Ys,Mt,null),e(Mt,Hh),e(Mt,ko),e(ko,Rh),e(ko,Ua),e(Ua,Bh),e(ko,Vh),e(ko,ai),e(ai,Xh),e(ko,Gh),e(Mt,Jh),y(kn,Mt,null),e(Mt,Yh),y(bn,Mt,null),_(o,fl,b),_(o,bo,b),e(bo,wn),e(wn,ri),y(Zs,ri,null),e(bo,Zh),e(bo,ii),e(ii,ef),_(o,ul,b),_(o,st,b),y(ea,st,null),e(st,tf),e(st,li),e(li,of),e(st,nf),e(st,ta),e(ta,sf),e(ta,Qa),e(Qa,af),e(ta,rf),e(st,lf),e(st,oa),e(oa,df),e(oa,na),e(na,cf),e(oa,pf),e(st,mf),y(Tn,st,null),e(st,hf),e(st,kt),y(sa,kt,null),e(kt,ff),e(kt,wo),e(wo,uf),e(wo,Ha),e(Ha,gf),e(wo,_f),e(wo,di),e(di,kf),e(wo,bf),e(kt,wf),y(vn,kt,null),e(kt,Tf),y(yn,kt,null),e(kt,vf),y($n,kt,null),_(o,gl,b),_(o,To,b),e(To,Mn),e(Mn,ci),y(aa,ci,null),e(To,yf),e(To,pi),e(pi,$f),_(o,_l,b),_(o,at,b),y(ra,at,null),e(at,Mf),e(at,vo),e(vo,Pf),e(vo,mi),e(mi,Nf),e(vo,Ff),e(vo,hi),e(hi,Ef),e(vo,zf),e(at,qf),e(at,ia),e(ia,Cf),e(ia,Ra),e(Ra,xf),e(ia,jf),e(at,Of),e(at,la),e(la,Lf),e(la,da),e(da,Af),e(la,Df),e(at,If),y(Pn,at,null),e(at,Sf),e(at,bt),y(ca,bt,null),e(bt,Wf),e(bt,yo),e(yo,Kf),e(yo,Ba),e(Ba,Uf),e(yo,Qf),e(yo,fi),e(fi,Hf),e(yo,Rf),e(bt,Bf),y(Nn,bt,null),e(bt,Vf),y(Fn,bt,null),e(bt,Xf),y(En,bt,null),kl=!0},p(o,[b]){const pa={};b&2&&(pa.$$scope={dirty:b,ctx:o}),Mo.$set(pa);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:o}),Co.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),xo.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Oo.$set(_i);const ma={};b&2&&(ma.$$scope={dirty:b,ctx:o}),Lo.$set(ma);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Ao.$set(ki);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Io.$set(bi);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),So.$set(wi);const ha={};b&2&&(ha.$$scope={dirty:b,ctx:o}),Wo.$set(ha);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Ko.$set(Ti);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Uo.$set(vi);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),Ho.$set(yi);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Ro.$set($i);const Mi={};b&2&&(Mi.$$scope={dirty:b,ctx:o}),Vo.$set(Mi);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),Xo.$set(Pi);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Go.$set(Ni);const Ct={};b&2&&(Ct.$$scope={dirty:b,ctx:o}),Yo.$set(Ct);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),Zo.$set(Fi);const Ei={};b&2&&(Ei.$$scope={dirty:b,ctx:o}),en.$set(Ei);const zi={};b&2&&(zi.$$scope={dirty:b,ctx:o}),on.$set(zi);const fa={};b&2&&(fa.$$scope={dirty:b,ctx:o}),nn.$set(fa);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:o}),sn.$set(qi);const ua={};b&2&&(ua.$$scope={dirty:b,ctx:o}),rn.$set(ua);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),ln.$set(Ci);const xi={};b&2&&(xi.$$scope={dirty:b,ctx:o}),dn.$set(xi);const ji={};b&2&&(ji.$$scope={dirty:b,ctx:o}),cn.$set(ji);const xt={};b&2&&(xt.$$scope={dirty:b,ctx:o}),mn.$set(xt);const jt={};b&2&&(jt.$$scope={dirty:b,ctx:o}),hn.$set(jt);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),fn.$set(Oi);const Li={};b&2&&(Li.$$scope={dirty:b,ctx:o}),un.$set(Li);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),_n.$set(Ai);const $o={};b&2&&($o.$$scope={dirty:b,ctx:o}),kn.$set($o);const Di={};b&2&&(Di.$$scope={dirty:b,ctx:o}),bn.$set(Di);const Ii={};b&2&&(Ii.$$scope={dirty:b,ctx:o}),Tn.$set(Ii);const ga={};b&2&&(ga.$$scope={dirty:b,ctx:o}),vn.$set(ga);const Si={};b&2&&(Si.$$scope={dirty:b,ctx:o}),yn.$set(Si);const Wi={};b&2&&(Wi.$$scope={dirty:b,ctx:o}),$n.$set(Wi);const Ki={};b&2&&(Ki.$$scope={dirty:b,ctx:o}),Pn.$set(Ki);const mt={};b&2&&(mt.$$scope={dirty:b,ctx:o}),Nn.$set(mt);const _a={};b&2&&(_a.$$scope={dirty:b,ctx:o}),Fn.$set(_a);const Ui={};b&2&&(Ui.$$scope={dirty:b,ctx:o}),En.$set(Ui)},i(o){kl||($(d.$$.fragment,o),$(N.$$.fragment,o),$(F.$$.fragment,o),$(Oe.$$.fragment,o),$(Mo.$$.fragment,o),$(On.$$.fragment,o),$(Ln.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Kn.$$.fragment,o),$(Un.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Xn.$$.fragment,o),$(Gn.$$.fragment,o),$(es.$$.fragment,o),$(Co.$$.fragment,o),$(xo.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Oo.$$.fragment,o),$(Lo.$$.fragment,o),$(Ao.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(ds.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Wo.$$.fragment,o),$(Ko.$$.fragment,o),$(Uo.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(us.$$.fragment,o),$(Ho.$$.fragment,o),$(Ro.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(Ts.$$.fragment,o),$(Vo.$$.fragment,o),$(Xo.$$.fragment,o),$(Go.$$.fragment,o),$(vs.$$.fragment,o),$(ys.$$.fragment,o),$(Ns.$$.fragment,o),$(Yo.$$.fragment,o),$(Zo.$$.fragment,o),$(en.$$.fragment,o),$(Fs.$$.fragment,o),$(Es.$$.fragment,o),$(on.$$.fragment,o),$(xs.$$.fragment,o),$(nn.$$.fragment,o),$(sn.$$.fragment,o),$(js.$$.fragment,o),$(Os.$$.fragment,o),$(rn.$$.fragment,o),$(Ss.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(Ws.$$.fragment,o),$(Ks.$$.fragment,o),$(mn.$$.fragment,o),$(Rs.$$.fragment,o),$(hn.$$.fragment,o),$(fn.$$.fragment,o),$(un.$$.fragment,o),$(Bs.$$.fragment,o),$(Vs.$$.fragment,o),$(_n.$$.fragment,o),$(Ys.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(Tn.$$.fragment,o),$(sa.$$.fragment,o),$(vn.$$.fragment,o),$(yn.$$.fragment,o),$($n.$$.fragment,o),$(aa.$$.fragment,o),$(ra.$$.fragment,o),$(Pn.$$.fragment,o),$(ca.$$.fragment,o),$(Nn.$$.fragment,o),$(Fn.$$.fragment,o),$(En.$$.fragment,o),kl=!0)},o(o){M(d.$$.fragment,o),M(N.$$.fragment,o),M(F.$$.fragment,o),M(Oe.$$.fragment,o),M(Mo.$$.fragment,o),M(On.$$.fragment,o),M(Ln.$$.fragment,o),M(Dn.$$.fragment,o),M(Sn.$$.fragment,o),M(Kn.$$.fragment,o),M(Un.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(Vn.$$.fragment,o),M(Xn.$$.fragment,o),M(Gn.$$.fragment,o),M(es.$$.fragment,o),M(Co.$$.fragment,o),M(xo.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(ns.$$.fragment,o),M(Oo.$$.fragment,o),M(Lo.$$.fragment,o),M(Ao.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(ds.$$.fragment,o),M(Io.$$.fragment,o),M(So.$$.fragment,o),M(Wo.$$.fragment,o),M(Ko.$$.fragment,o),M(Uo.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(us.$$.fragment,o),M(Ho.$$.fragment,o),M(Ro.$$.fragment,o),M(gs.$$.fragment,o),M(_s.$$.fragment,o),M(Ts.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(vs.$$.fragment,o),M(ys.$$.fragment,o),M(Ns.$$.fragment,o),M(Yo.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(Fs.$$.fragment,o),M(Es.$$.fragment,o),M(on.$$.fragment,o),M(xs.$$.fragment,o),M(nn.$$.fragment,o),M(sn.$$.fragment,o),M(js.$$.fragment,o),M(Os.$$.fragment,o),M(rn.$$.fragment,o),M(Ss.$$.fragment,o),M(ln.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(Ws.$$.fragment,o),M(Ks.$$.fragment,o),M(mn.$$.fragment,o),M(Rs.$$.fragment,o),M(hn.$$.fragment,o),M(fn.$$.fragment,o),M(un.$$.fragment,o),M(Bs.$$.fragment,o),M(Vs.$$.fragment,o),M(_n.$$.fragment,o),M(Ys.$$.fragment,o),M(kn.$$.fragment,o),M(bn.$$.fragment,o),M(Zs.$$.fragment,o),M(ea.$$.fragment,o),M(Tn.$$.fragment,o),M(sa.$$.fragment,o),M(vn.$$.fragment,o),M(yn.$$.fragment,o),M($n.$$.fragment,o),M(aa.$$.fragment,o),M(ra.$$.fragment,o),M(Pn.$$.fragment,o),M(ca.$$.fragment,o),M(Nn.$$.fragment,o),M(Fn.$$.fragment,o),M(En.$$.fragment,o),kl=!1},d(o){t(l),o&&t(g),o&&t(c),P(d),o&&t(me),o&&t(A),P(N),o&&t(he),o&&t(S),o&&t(fe),o&&t(K),o&&t(ue),o&&t(U),o&&t(ge),o&&t(ee),o&&t(_e),o&&t(Q),o&&t(ke),o&&t(H),o&&t(be),o&&t(W),o&&t(L),o&&t(se),P(F),o&&t(Ke),o&&t(E),P(Oe),P(Mo),o&&t(Qi),o&&t(Vt),P(On),o&&t(Hi),o&&t(Ze),P(Ln),P(Dn),P(Sn),P(Kn),P(Un),o&&t(Ri),o&&t(Xt),P(Qn),o&&t(Bi),o&&t(Tt),P(Hn),P(Vn),o&&t(Vi),o&&t(Gt),P(Xn),o&&t(Xi),o&&t(it),P(Gn),P(es),P(Co),P(xo),o&&t(Gi),o&&t(Yt),P(ts),o&&t(Ji),o&&t(Zt),P(os),P(ns),P(Oo),P(Lo),P(Ao),o&&t(Yi),o&&t(to),P(ss),o&&t(Zi),o&&t(lt),P(as),P(ds),P(Io),P(So),P(Wo),P(Ko),P(Uo),o&&t(el),o&&t(no),P(cs),o&&t(tl),o&&t(dt),P(ps),P(us),P(Ho),P(Ro),o&&t(ol),o&&t(ao),P(gs),o&&t(nl),o&&t(ct),P(_s),P(Ts),P(Vo),P(Xo),P(Go),o&&t(sl),o&&t(io),P(vs),o&&t(al),o&&t(pt),P(ys),P(Ns),P(Yo),P(Zo),P(en),o&&t(rl),o&&t(po),P(Fs),o&&t(il),o&&t(et),P(Es),P(on),P(xs),P(nn),P(sn),o&&t(ll),o&&t(ho),P(js),o&&t(dl),o&&t(tt),P(Os),P(rn),P(Ss),P(ln),P(dn),P(cn),o&&t(cl),o&&t(uo),P(Ws),o&&t(pl),o&&t(ot),P(Ks),P(mn),P(Rs),P(hn),P(fn),P(un),o&&t(ml),o&&t(_o),P(Bs),o&&t(hl),o&&t(nt),P(Vs),P(_n),P(Ys),P(kn),P(bn),o&&t(fl),o&&t(bo),P(Zs),o&&t(ul),o&&t(st),P(ea),P(Tn),P(sa),P(vn),P(yn),P($n),o&&t(gl),o&&t(To),P(aa),o&&t(_l),o&&t(at),P(ra),P(Pn),P(ca),P(Nn),P(Fn),P(En)}}}const Q_={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function H_(z){return t_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Y_ extends Jg{constructor(l){super();Yg(this,l,H_,U_,Zg,{})}}export{Y_ as default,Q_ as metadata};
