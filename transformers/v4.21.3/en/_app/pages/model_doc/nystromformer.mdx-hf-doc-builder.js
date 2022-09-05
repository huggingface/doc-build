import{S as ei,i as oi,s as ti,e as a,k as g,w as k,t as d,M as si,c as i,d as t,m as _,a as l,x as v,h as c,b as u,G as e,g as b,y as w,q as $,o as T,B as N,v as ni,L as D}from"../../chunks/vendor-hf-doc-builder.js";import{T as it}from"../../chunks/Tip-hf-doc-builder.js";import{D as L}from"../../chunks/Docstring-hf-doc-builder.js";import{C as W}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as I}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function ri(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import NystromformerModel, NystromformerConfig

# Initializing a Nystromformer uw-madison/nystromformer-512 style configuration
configuration = NystromformerConfig()

# Initializing a model from the uw-madison/nystromformer-512 style configuration
model = NystromformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> NystromformerModel, NystromformerConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Nystromformer uw-madison/nystromformer-512 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = NystromformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uw-madison/nystromformer-512 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function ai(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function ii(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import AutoTokenizer, NystromformerModel
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerModel.from_pretrained("uw-madison/nystromformer-512")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerModel.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function li(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function di(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import AutoTokenizer, NystromformerForMaskedLM
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForMaskedLM.from_pretrained("uw-madison/nystromformer-512")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function ci(M){let n,f;return n=new W({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(n.$$.fragment)},l(r){v(n.$$.fragment,r)},m(r,m){w(n,r,m),f=!0},p:D,i(r){f||($(n.$$.fragment,r),f=!0)},o(r){T(n.$$.fragment,r),f=!1},d(r){N(n,r)}}}function mi(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function pi(M){let n,f,r,m,y;return m=new W({props:{code:`import torch
from transformers import AutoTokenizer, NystromformerForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForSequenceClassification.from_pretrained("uw-madison/nystromformer-512")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),f=d("Example of single-label classification:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example of single-label classification:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function fi(M){let n,f;return n=new W({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NystromformerForSequenceClassification.from_pretrained("uw-madison/nystromformer-512", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(n.$$.fragment)},l(r){v(n.$$.fragment,r)},m(r,m){w(n,r,m),f=!0},p:D,i(r){f||($(n.$$.fragment,r),f=!0)},o(r){T(n.$$.fragment,r),f=!1},d(r){N(n,r)}}}function hi(M){let n,f,r,m,y;return m=new W({props:{code:`import torch
from transformers import AutoTokenizer, NystromformerForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForSequenceClassification.from_pretrained("uw-madison/nystromformer-512", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=a("p"),f=d("Example of multi-label classification:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example of multi-label classification:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function ui(M){let n,f;return n=new W({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = NystromformerForSequenceClassification.from_pretrained(
    "uw-madison/nystromformer-512", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(n.$$.fragment)},l(r){v(n.$$.fragment,r)},m(r,m){w(n,r,m),f=!0},p:D,i(r){f||($(n.$$.fragment,r),f=!0)},o(r){T(n.$$.fragment,r),f=!1},d(r){N(n,r)}}}function gi(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function _i(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import AutoTokenizer, NystromformerForMultipleChoice
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForMultipleChoice.from_pretrained("uw-madison/nystromformer-512")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function yi(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function bi(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import AutoTokenizer, NystromformerForTokenClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForTokenClassification.from_pretrained("uw-madison/nystromformer-512")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

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
`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function ki(M){let n,f;return n=new W({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(n.$$.fragment)},l(r){v(n.$$.fragment,r)},m(r,m){w(n,r,m),f=!0},p:D,i(r){f||($(n.$$.fragment,r),f=!0)},o(r){T(n.$$.fragment,r),f=!1},d(r){N(n,r)}}}function vi(M){let n,f,r,m,y;return{c(){n=a("p"),f=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),r=a("code"),m=d("Module"),y=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),r=i(p,"CODE",{});var F=l(r);m=c(F,"Module"),F.forEach(t),y=c(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(s,p){b(s,n,p),e(n,f),e(n,r),e(r,m),e(n,y)},d(s){s&&t(n)}}}function wi(M){let n,f,r,m,y;return m=new W({props:{code:`from transformers import AutoTokenizer, NystromformerForQuestionAnswering
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/nystromformer-512")
model = NystromformerForQuestionAnswering.from_pretrained("uw-madison/nystromformer-512")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, NystromformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = NystromformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;uw-madison/nystromformer-512&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){n=a("p"),f=d("Example:"),r=g(),k(m.$$.fragment)},l(s){n=i(s,"P",{});var p=l(n);f=c(p,"Example:"),p.forEach(t),r=_(s),v(m.$$.fragment,s)},m(s,p){b(s,n,p),e(n,f),b(s,r,p),w(m,s,p),y=!0},p:D,i(s){y||($(m.$$.fragment,s),y=!0)},o(s){T(m.$$.fragment,s),y=!1},d(s){s&&t(n),s&&t(r),N(m,s)}}}function $i(M){let n,f;return n=new W({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(n.$$.fragment)},l(r){v(n.$$.fragment,r)},m(r,m){w(n,r,m),f=!0},p:D,i(r){f||($(n.$$.fragment,r),f=!0)},o(r){T(n.$$.fragment,r),f=!1},d(r){N(n,r)}}}function Ti(M){let n,f,r,m,y,s,p,F,qs,Zt,Y,ge,lt,Je,zs,dt,js,Xt,_e,Cs,Ze,ct,As,Es,es,Lo,Ps,os,Io,mt,Os,ts,B,Ss,Xe,Ls,Is,eo,Ds,Ws,ss,J,ye,pt,oo,Qs,ft,Hs,ns,A,to,Vs,Z,Us,Do,Bs,Rs,so,Gs,Ks,Ys,X,Js,Wo,Zs,Xs,Qo,en,on,tn,be,rs,ee,ke,ht,no,sn,ut,nn,as,V,ro,rn,ao,an,io,ln,dn,cn,Q,lo,mn,oe,pn,Ho,fn,hn,gt,un,gn,_n,ve,yn,we,is,te,$e,_t,co,bn,yt,kn,ls,U,mo,vn,se,wn,bt,$n,Tn,po,Nn,Mn,Fn,q,fo,xn,ne,qn,Vo,zn,jn,kt,Cn,An,En,Te,Pn,Ne,On,Me,ds,re,Fe,vt,ho,Sn,wt,Ln,cs,E,uo,In,$t,Dn,Wn,go,Qn,_o,Hn,Vn,Un,x,yo,Bn,ae,Rn,Uo,Gn,Kn,Tt,Yn,Jn,Zn,xe,Xn,qe,er,ze,or,je,tr,Ce,ms,ie,Ae,Nt,bo,sr,Mt,nr,ps,P,ko,rr,Ft,ar,ir,vo,lr,wo,dr,cr,mr,H,$o,pr,le,fr,Bo,hr,ur,xt,gr,_r,yr,Ee,br,Pe,fs,de,Oe,qt,To,kr,zt,vr,hs,O,No,wr,jt,$r,Tr,Mo,Nr,Fo,Mr,Fr,xr,z,xo,qr,ce,zr,Ro,jr,Cr,Ct,Ar,Er,Pr,Se,Or,Le,Sr,Ie,us,me,De,At,qo,Lr,Et,Ir,gs,S,zo,Dr,pe,Wr,Pt,Qr,Hr,Ot,Vr,Ur,Br,jo,Rr,Co,Gr,Kr,Yr,j,Ao,Jr,fe,Zr,Go,Xr,ea,St,oa,ta,sa,We,na,Qe,ra,He,_s;return s=new ue({}),Je=new ue({}),oo=new ue({}),to=new L({props:{name:"class transformers.NystromformerConfig",anchor:"transformers.NystromformerConfig",parameters:[{name:"vocab_size",val:" = 30000"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu_new'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 510"},{name:"type_vocab_size",val:" = 2"},{name:"segment_means_seq_len",val:" = 64"},{name:"num_landmarks",val:" = 64"},{name:"conv_kernel_size",val:" = 65"},{name:"inv_coeff_init_option",val:" = False"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-05"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.NystromformerConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30000) &#x2014;
Vocabulary size of the Nystromformer model. Defines the number of different tokens that can be represented
by the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerModel">NystromformerModel</a>.`,name:"vocab_size"},{anchor:"transformers.NystromformerConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.NystromformerConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.NystromformerConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.NystromformerConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.NystromformerConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.NystromformerConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.NystromformerConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.NystromformerConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.NystromformerConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerModel">NystromformerModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.NystromformerConfig.segment_means_seq_len",description:`<strong>segment_means_seq_len</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Sequence length used in segment-means.`,name:"segment_means_seq_len"},{anchor:"transformers.NystromformerConfig.num_landmarks",description:`<strong>num_landmarks</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
The number of landmark (or Nystrom) points to use in Nystrom approximation of the softmax self-attention
matrix.`,name:"num_landmarks"},{anchor:"transformers.NystromformerConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 65) &#x2014;
The kernel size of depthwise convolution used in Nystrom approximation.`,name:"conv_kernel_size"},{anchor:"transformers.NystromformerConfig.inv_coeff_init_option",description:`<strong>inv_coeff_init_option</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use exact coefficient computation for the initial values for the iterative method of
calculating the Moore-Penrose inverse of a matrix.`,name:"inv_coeff_init_option"},{anchor:"transformers.NystromformerConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.NystromformerConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/configuration_nystromformer.py#L29"}}),be=new I({props:{anchor:"transformers.NystromformerConfig.example",$$slots:{default:[ri]},$$scope:{ctx:M}}}),no=new ue({}),ro=new L({props:{name:"class transformers.NystromformerModel",anchor:"transformers.NystromformerModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L552"}}),lo=new L({props:{name:"forward",anchor:"transformers.NystromformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L577",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ve=new it({props:{$$slots:{default:[ai]},$$scope:{ctx:M}}}),we=new I({props:{anchor:"transformers.NystromformerModel.forward.example",$$slots:{default:[ii]},$$scope:{ctx:M}}}),co=new ue({}),mo=new L({props:{name:"class transformers.NystromformerForMaskedLM",anchor:"transformers.NystromformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L664"}}),fo=new L({props:{name:"forward",anchor:"transformers.NystromformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NystromformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L680",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
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
`}}),Te=new it({props:{$$slots:{default:[li]},$$scope:{ctx:M}}}),Ne=new I({props:{anchor:"transformers.NystromformerForMaskedLM.forward.example",$$slots:{default:[di]},$$scope:{ctx:M}}}),Me=new I({props:{anchor:"transformers.NystromformerForMaskedLM.forward.example-2",$$slots:{default:[ci]},$$scope:{ctx:M}}}),ho=new ue({}),uo=new L({props:{name:"class transformers.NystromformerForSequenceClassification",anchor:"transformers.NystromformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L768"}}),yo=new L({props:{name:"forward",anchor:"transformers.NystromformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NystromformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L778",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
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
`}}),xe=new it({props:{$$slots:{default:[mi]},$$scope:{ctx:M}}}),qe=new I({props:{anchor:"transformers.NystromformerForSequenceClassification.forward.example",$$slots:{default:[pi]},$$scope:{ctx:M}}}),ze=new I({props:{anchor:"transformers.NystromformerForSequenceClassification.forward.example-2",$$slots:{default:[fi]},$$scope:{ctx:M}}}),je=new I({props:{anchor:"transformers.NystromformerForSequenceClassification.forward.example-3",$$slots:{default:[hi]},$$scope:{ctx:M}}}),Ce=new I({props:{anchor:"transformers.NystromformerForSequenceClassification.forward.example-4",$$slots:{default:[ui]},$$scope:{ctx:M}}}),bo=new ue({}),ko=new L({props:{name:"class transformers.NystromformerForMultipleChoice",anchor:"transformers.NystromformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L862"}}),$o=new L({props:{name:"forward",anchor:"transformers.NystromformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NystromformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L873",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
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
`}}),Ee=new it({props:{$$slots:{default:[gi]},$$scope:{ctx:M}}}),Pe=new I({props:{anchor:"transformers.NystromformerForMultipleChoice.forward.example",$$slots:{default:[_i]},$$scope:{ctx:M}}}),To=new ue({}),No=new L({props:{name:"class transformers.NystromformerForTokenClassification",anchor:"transformers.NystromformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L958"}}),xo=new L({props:{name:"forward",anchor:"transformers.NystromformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NystromformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L970",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
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
`}}),Se=new it({props:{$$slots:{default:[yi]},$$scope:{ctx:M}}}),Le=new I({props:{anchor:"transformers.NystromformerForTokenClassification.forward.example",$$slots:{default:[bi]},$$scope:{ctx:M}}}),Ie=new I({props:{anchor:"transformers.NystromformerForTokenClassification.forward.example-2",$$slots:{default:[ki]},$$scope:{ctx:M}}}),qo=new ue({}),zo=new L({props:{name:"class transformers.NystromformerForQuestionAnswering",anchor:"transformers.NystromformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.NystromformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig">NystromformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L1037"}}),Ao=new L({props:{name:"forward",anchor:"transformers.NystromformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.NystromformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.NystromformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/nystromformer/modeling_nystromformer.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerConfig"
>NystromformerConfig</a>) and inputs.</p>
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
`}}),We=new it({props:{$$slots:{default:[vi]},$$scope:{ctx:M}}}),Qe=new I({props:{anchor:"transformers.NystromformerForQuestionAnswering.forward.example",$$slots:{default:[wi]},$$scope:{ctx:M}}}),He=new I({props:{anchor:"transformers.NystromformerForQuestionAnswering.forward.example-2",$$slots:{default:[$i]},$$scope:{ctx:M}}}),{c(){n=a("meta"),f=g(),r=a("h1"),m=a("a"),y=a("span"),k(s.$$.fragment),p=g(),F=a("span"),qs=d("Nystr\xF6mformer"),Zt=g(),Y=a("h2"),ge=a("a"),lt=a("span"),k(Je.$$.fragment),zs=g(),dt=a("span"),js=d("Overview"),Xt=g(),_e=a("p"),Cs=d("The Nystr\xF6mformer model was proposed in "),Ze=a("a"),ct=a("em"),As=d("Nystr\xF6mformer: A Nystr\xF6m-Based Algorithm for Approximating Self-Attention"),Es=d(` by Yunyang Xiong, Zhanpeng Zeng, Rudrasis Chakraborty, Mingxing Tan, Glenn
Fung, Yin Li, and Vikas Singh.`),es=g(),Lo=a("p"),Ps=d("The abstract from the paper is the following:"),os=g(),Io=a("p"),mt=a("em"),Os=d(`Transformers have emerged as a powerful tool for a broad range of natural language processing tasks. A key component
that drives the impressive performance of Transformers is the self-attention mechanism that encodes the influence or
dependence of other tokens on each specific token. While beneficial, the quadratic complexity of self-attention on the
input sequence length has limited its application to longer sequences \u2014 a topic being actively studied in the
community. To address this limitation, we propose Nystr\xF6mformer \u2014 a model that exhibits favorable scalability as a
function of sequence length. Our idea is based on adapting the Nystr\xF6m method to approximate standard self-attention
with O(n) complexity. The scalability of Nystr\xF6mformer enables application to longer sequences with thousands of
tokens. We perform evaluations on multiple downstream tasks on the GLUE benchmark and IMDB reviews with standard
sequence length, and find that our Nystr\xF6mformer performs comparably, or in a few cases, even slightly better, than
standard self-attention. On longer sequence tasks in the Long Range Arena (LRA) benchmark, Nystr\xF6mformer performs
favorably relative to other efficient self-attention methods. Our code is available at this https URL.`),ts=g(),B=a("p"),Ss=d("This model was contributed by "),Xe=a("a"),Ls=d("novice03"),Is=d(". The original code can be found "),eo=a("a"),Ds=d("here"),Ws=d("."),ss=g(),J=a("h2"),ye=a("a"),pt=a("span"),k(oo.$$.fragment),Qs=g(),ft=a("span"),Hs=d("NystromformerConfig"),ns=g(),A=a("div"),k(to.$$.fragment),Vs=g(),Z=a("p"),Us=d("This is the configuration class to store the configuration of a "),Do=a("a"),Bs=d("NystromformerModel"),Rs=d(`. It is used to instantiate
an Nystromformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Nystromformer
`),so=a("a"),Gs=d("uw-madison/nystromformer-512"),Ks=d(" architecture."),Ys=g(),X=a("p"),Js=d("Configuration objects inherit from "),Wo=a("a"),Zs=d("PretrainedConfig"),Xs=d(` and can be used to control the model outputs. Read the
documentation from `),Qo=a("a"),en=d("PretrainedConfig"),on=d(" for more information."),tn=g(),k(be.$$.fragment),rs=g(),ee=a("h2"),ke=a("a"),ht=a("span"),k(no.$$.fragment),sn=g(),ut=a("span"),nn=d("NystromformerModel"),as=g(),V=a("div"),k(ro.$$.fragment),rn=g(),ao=a("p"),an=d(`The bare Nystr\xF6mformer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),io=a("a"),ln=d("torch.nn.Module"),dn=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cn=g(),Q=a("div"),k(lo.$$.fragment),mn=g(),oe=a("p"),pn=d("The "),Ho=a("a"),fn=d("NystromformerModel"),hn=d(" forward method, overrides the "),gt=a("code"),un=d("__call__"),gn=d(" special method."),_n=g(),k(ve.$$.fragment),yn=g(),k(we.$$.fragment),is=g(),te=a("h2"),$e=a("a"),_t=a("span"),k(co.$$.fragment),bn=g(),yt=a("span"),kn=d("NystromformerForMaskedLM"),ls=g(),U=a("div"),k(mo.$$.fragment),vn=g(),se=a("p"),wn=d("Nystr\xF6mformer Model with a "),bt=a("code"),$n=d("language modeling"),Tn=d(` head on top.
This model is a PyTorch `),po=a("a"),Nn=d("torch.nn.Module"),Mn=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fn=g(),q=a("div"),k(fo.$$.fragment),xn=g(),ne=a("p"),qn=d("The "),Vo=a("a"),zn=d("NystromformerForMaskedLM"),jn=d(" forward method, overrides the "),kt=a("code"),Cn=d("__call__"),An=d(" special method."),En=g(),k(Te.$$.fragment),Pn=g(),k(Ne.$$.fragment),On=g(),k(Me.$$.fragment),ds=g(),re=a("h2"),Fe=a("a"),vt=a("span"),k(ho.$$.fragment),Sn=g(),wt=a("span"),Ln=d("NystromformerForSequenceClassification"),cs=g(),E=a("div"),k(uo.$$.fragment),In=g(),$t=a("p"),Dn=d(`Nystr\xF6mformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wn=g(),go=a("p"),Qn=d("This model is a PyTorch "),_o=a("a"),Hn=d("torch.nn.Module"),Vn=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Un=g(),x=a("div"),k(yo.$$.fragment),Bn=g(),ae=a("p"),Rn=d("The "),Uo=a("a"),Gn=d("NystromformerForSequenceClassification"),Kn=d(" forward method, overrides the "),Tt=a("code"),Yn=d("__call__"),Jn=d(" special method."),Zn=g(),k(xe.$$.fragment),Xn=g(),k(qe.$$.fragment),er=g(),k(ze.$$.fragment),or=g(),k(je.$$.fragment),tr=g(),k(Ce.$$.fragment),ms=g(),ie=a("h2"),Ae=a("a"),Nt=a("span"),k(bo.$$.fragment),sr=g(),Mt=a("span"),nr=d("NystromformerForMultipleChoice"),ps=g(),P=a("div"),k(ko.$$.fragment),rr=g(),Ft=a("p"),ar=d(`Nystr\xF6mformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),ir=g(),vo=a("p"),lr=d("This model is a PyTorch "),wo=a("a"),dr=d("torch.nn.Module"),cr=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),mr=g(),H=a("div"),k($o.$$.fragment),pr=g(),le=a("p"),fr=d("The "),Bo=a("a"),hr=d("NystromformerForMultipleChoice"),ur=d(" forward method, overrides the "),xt=a("code"),gr=d("__call__"),_r=d(" special method."),yr=g(),k(Ee.$$.fragment),br=g(),k(Pe.$$.fragment),fs=g(),de=a("h2"),Oe=a("a"),qt=a("span"),k(To.$$.fragment),kr=g(),zt=a("span"),vr=d("NystromformerForTokenClassification"),hs=g(),O=a("div"),k(No.$$.fragment),wr=g(),jt=a("p"),$r=d(`Nystr\xF6mformer Model with a token classification head on top (a linear layer on top of the hidden-states output)
e.g. for Named-Entity-Recognition (NER) tasks.`),Tr=g(),Mo=a("p"),Nr=d("This model is a PyTorch "),Fo=a("a"),Mr=d("torch.nn.Module"),Fr=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xr=g(),z=a("div"),k(xo.$$.fragment),qr=g(),ce=a("p"),zr=d("The "),Ro=a("a"),jr=d("NystromformerForTokenClassification"),Cr=d(" forward method, overrides the "),Ct=a("code"),Ar=d("__call__"),Er=d(" special method."),Pr=g(),k(Se.$$.fragment),Or=g(),k(Le.$$.fragment),Sr=g(),k(Ie.$$.fragment),us=g(),me=a("h2"),De=a("a"),At=a("span"),k(qo.$$.fragment),Lr=g(),Et=a("span"),Ir=d("NystromformerForQuestionAnswering"),gs=g(),S=a("div"),k(zo.$$.fragment),Dr=g(),pe=a("p"),Wr=d(`Nystr\xF6mformer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pt=a("code"),Qr=d("span start logits"),Hr=d(" and "),Ot=a("code"),Vr=d("span end logits"),Ur=d(")."),Br=g(),jo=a("p"),Rr=d("This model is a PyTorch "),Co=a("a"),Gr=d("torch.nn.Module"),Kr=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yr=g(),j=a("div"),k(Ao.$$.fragment),Jr=g(),fe=a("p"),Zr=d("The "),Go=a("a"),Xr=d("NystromformerForQuestionAnswering"),ea=d(" forward method, overrides the "),St=a("code"),oa=d("__call__"),ta=d(" special method."),sa=g(),k(We.$$.fragment),na=g(),k(Qe.$$.fragment),ra=g(),k(He.$$.fragment),this.h()},l(o){const h=si('[data-svelte="svelte-1phssyn"]',document.head);n=i(h,"META",{name:!0,content:!0}),h.forEach(t),f=_(o),r=i(o,"H1",{class:!0});var Eo=l(r);m=i(Eo,"A",{id:!0,class:!0,href:!0});var Lt=l(m);y=i(Lt,"SPAN",{});var It=l(y);v(s.$$.fragment,It),It.forEach(t),Lt.forEach(t),p=_(Eo),F=i(Eo,"SPAN",{});var Dt=l(F);qs=c(Dt,"Nystr\xF6mformer"),Dt.forEach(t),Eo.forEach(t),Zt=_(o),Y=i(o,"H2",{class:!0});var Po=l(Y);ge=i(Po,"A",{id:!0,class:!0,href:!0});var Wt=l(ge);lt=i(Wt,"SPAN",{});var Qt=l(lt);v(Je.$$.fragment,Qt),Qt.forEach(t),Wt.forEach(t),zs=_(Po),dt=i(Po,"SPAN",{});var Ht=l(dt);js=c(Ht,"Overview"),Ht.forEach(t),Po.forEach(t),Xt=_(o),_e=i(o,"P",{});var Oo=l(_e);Cs=c(Oo,"The Nystr\xF6mformer model was proposed in "),Ze=i(Oo,"A",{href:!0,rel:!0});var Vt=l(Ze);ct=i(Vt,"EM",{});var Ut=l(ct);As=c(Ut,"Nystr\xF6mformer: A Nystr\xF6m-Based Algorithm for Approximating Self-Attention"),Ut.forEach(t),Vt.forEach(t),Es=c(Oo,` by Yunyang Xiong, Zhanpeng Zeng, Rudrasis Chakraborty, Mingxing Tan, Glenn
Fung, Yin Li, and Vikas Singh.`),Oo.forEach(t),es=_(o),Lo=i(o,"P",{});var Bt=l(Lo);Ps=c(Bt,"The abstract from the paper is the following:"),Bt.forEach(t),os=_(o),Io=i(o,"P",{});var Rt=l(Io);mt=i(Rt,"EM",{});var Gt=l(mt);Os=c(Gt,`Transformers have emerged as a powerful tool for a broad range of natural language processing tasks. A key component
that drives the impressive performance of Transformers is the self-attention mechanism that encodes the influence or
dependence of other tokens on each specific token. While beneficial, the quadratic complexity of self-attention on the
input sequence length has limited its application to longer sequences \u2014 a topic being actively studied in the
community. To address this limitation, we propose Nystr\xF6mformer \u2014 a model that exhibits favorable scalability as a
function of sequence length. Our idea is based on adapting the Nystr\xF6m method to approximate standard self-attention
with O(n) complexity. The scalability of Nystr\xF6mformer enables application to longer sequences with thousands of
tokens. We perform evaluations on multiple downstream tasks on the GLUE benchmark and IMDB reviews with standard
sequence length, and find that our Nystr\xF6mformer performs comparably, or in a few cases, even slightly better, than
standard self-attention. On longer sequence tasks in the Long Range Arena (LRA) benchmark, Nystr\xF6mformer performs
favorably relative to other efficient self-attention methods. Our code is available at this https URL.`),Gt.forEach(t),Rt.forEach(t),ts=_(o),B=i(o,"P",{});var he=l(B);Ss=c(he,"This model was contributed by "),Xe=i(he,"A",{href:!0,rel:!0});var Kt=l(Xe);Ls=c(Kt,"novice03"),Kt.forEach(t),Is=c(he,". The original code can be found "),eo=i(he,"A",{href:!0,rel:!0});var Yt=l(eo);Ds=c(Yt,"here"),Yt.forEach(t),Ws=c(he,"."),he.forEach(t),ss=_(o),J=i(o,"H2",{class:!0});var So=l(J);ye=i(So,"A",{id:!0,class:!0,href:!0});var Jt=l(ye);pt=i(Jt,"SPAN",{});var aa=l(pt);v(oo.$$.fragment,aa),aa.forEach(t),Jt.forEach(t),Qs=_(So),ft=i(So,"SPAN",{});var ia=l(ft);Hs=c(ia,"NystromformerConfig"),ia.forEach(t),So.forEach(t),ns=_(o),A=i(o,"DIV",{class:!0});var Ve=l(A);v(to.$$.fragment,Ve),Vs=_(Ve),Z=i(Ve,"P",{});var Ko=l(Z);Us=c(Ko,"This is the configuration class to store the configuration of a "),Do=i(Ko,"A",{href:!0});var la=l(Do);Bs=c(la,"NystromformerModel"),la.forEach(t),Rs=c(Ko,`. It is used to instantiate
an Nystromformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the Nystromformer
`),so=i(Ko,"A",{href:!0,rel:!0});var da=l(so);Gs=c(da,"uw-madison/nystromformer-512"),da.forEach(t),Ks=c(Ko," architecture."),Ko.forEach(t),Ys=_(Ve),X=i(Ve,"P",{});var Yo=l(X);Js=c(Yo,"Configuration objects inherit from "),Wo=i(Yo,"A",{href:!0});var ca=l(Wo);Zs=c(ca,"PretrainedConfig"),ca.forEach(t),Xs=c(Yo,` and can be used to control the model outputs. Read the
documentation from `),Qo=i(Yo,"A",{href:!0});var ma=l(Qo);en=c(ma,"PretrainedConfig"),ma.forEach(t),on=c(Yo," for more information."),Yo.forEach(t),tn=_(Ve),v(be.$$.fragment,Ve),Ve.forEach(t),rs=_(o),ee=i(o,"H2",{class:!0});var ys=l(ee);ke=i(ys,"A",{id:!0,class:!0,href:!0});var pa=l(ke);ht=i(pa,"SPAN",{});var fa=l(ht);v(no.$$.fragment,fa),fa.forEach(t),pa.forEach(t),sn=_(ys),ut=i(ys,"SPAN",{});var ha=l(ut);nn=c(ha,"NystromformerModel"),ha.forEach(t),ys.forEach(t),as=_(o),V=i(o,"DIV",{class:!0});var Jo=l(V);v(ro.$$.fragment,Jo),rn=_(Jo),ao=i(Jo,"P",{});var bs=l(ao);an=c(bs,`The bare Nystr\xF6mformer Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),io=i(bs,"A",{href:!0,rel:!0});var ua=l(io);ln=c(ua,"torch.nn.Module"),ua.forEach(t),dn=c(bs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bs.forEach(t),cn=_(Jo),Q=i(Jo,"DIV",{class:!0});var Ue=l(Q);v(lo.$$.fragment,Ue),mn=_(Ue),oe=i(Ue,"P",{});var Zo=l(oe);pn=c(Zo,"The "),Ho=i(Zo,"A",{href:!0});var ga=l(Ho);fn=c(ga,"NystromformerModel"),ga.forEach(t),hn=c(Zo," forward method, overrides the "),gt=i(Zo,"CODE",{});var _a=l(gt);un=c(_a,"__call__"),_a.forEach(t),gn=c(Zo," special method."),Zo.forEach(t),_n=_(Ue),v(ve.$$.fragment,Ue),yn=_(Ue),v(we.$$.fragment,Ue),Ue.forEach(t),Jo.forEach(t),is=_(o),te=i(o,"H2",{class:!0});var ks=l(te);$e=i(ks,"A",{id:!0,class:!0,href:!0});var ya=l($e);_t=i(ya,"SPAN",{});var ba=l(_t);v(co.$$.fragment,ba),ba.forEach(t),ya.forEach(t),bn=_(ks),yt=i(ks,"SPAN",{});var ka=l(yt);kn=c(ka,"NystromformerForMaskedLM"),ka.forEach(t),ks.forEach(t),ls=_(o),U=i(o,"DIV",{class:!0});var Xo=l(U);v(mo.$$.fragment,Xo),vn=_(Xo),se=i(Xo,"P",{});var et=l(se);wn=c(et,"Nystr\xF6mformer Model with a "),bt=i(et,"CODE",{});var va=l(bt);$n=c(va,"language modeling"),va.forEach(t),Tn=c(et,` head on top.
This model is a PyTorch `),po=i(et,"A",{href:!0,rel:!0});var wa=l(po);Nn=c(wa,"torch.nn.Module"),wa.forEach(t),Mn=c(et,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),et.forEach(t),Fn=_(Xo),q=i(Xo,"DIV",{class:!0});var R=l(q);v(fo.$$.fragment,R),xn=_(R),ne=i(R,"P",{});var ot=l(ne);qn=c(ot,"The "),Vo=i(ot,"A",{href:!0});var $a=l(Vo);zn=c($a,"NystromformerForMaskedLM"),$a.forEach(t),jn=c(ot," forward method, overrides the "),kt=i(ot,"CODE",{});var Ta=l(kt);Cn=c(Ta,"__call__"),Ta.forEach(t),An=c(ot," special method."),ot.forEach(t),En=_(R),v(Te.$$.fragment,R),Pn=_(R),v(Ne.$$.fragment,R),On=_(R),v(Me.$$.fragment,R),R.forEach(t),Xo.forEach(t),ds=_(o),re=i(o,"H2",{class:!0});var vs=l(re);Fe=i(vs,"A",{id:!0,class:!0,href:!0});var Na=l(Fe);vt=i(Na,"SPAN",{});var Ma=l(vt);v(ho.$$.fragment,Ma),Ma.forEach(t),Na.forEach(t),Sn=_(vs),wt=i(vs,"SPAN",{});var Fa=l(wt);Ln=c(Fa,"NystromformerForSequenceClassification"),Fa.forEach(t),vs.forEach(t),cs=_(o),E=i(o,"DIV",{class:!0});var Be=l(E);v(uo.$$.fragment,Be),In=_(Be),$t=i(Be,"P",{});var xa=l($t);Dn=c(xa,`Nystr\xF6mformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xa.forEach(t),Wn=_(Be),go=i(Be,"P",{});var ws=l(go);Qn=c(ws,"This model is a PyTorch "),_o=i(ws,"A",{href:!0,rel:!0});var qa=l(_o);Hn=c(qa,"torch.nn.Module"),qa.forEach(t),Vn=c(ws,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ws.forEach(t),Un=_(Be),x=i(Be,"DIV",{class:!0});var C=l(x);v(yo.$$.fragment,C),Bn=_(C),ae=i(C,"P",{});var tt=l(ae);Rn=c(tt,"The "),Uo=i(tt,"A",{href:!0});var za=l(Uo);Gn=c(za,"NystromformerForSequenceClassification"),za.forEach(t),Kn=c(tt," forward method, overrides the "),Tt=i(tt,"CODE",{});var ja=l(Tt);Yn=c(ja,"__call__"),ja.forEach(t),Jn=c(tt," special method."),tt.forEach(t),Zn=_(C),v(xe.$$.fragment,C),Xn=_(C),v(qe.$$.fragment,C),er=_(C),v(ze.$$.fragment,C),or=_(C),v(je.$$.fragment,C),tr=_(C),v(Ce.$$.fragment,C),C.forEach(t),Be.forEach(t),ms=_(o),ie=i(o,"H2",{class:!0});var $s=l(ie);Ae=i($s,"A",{id:!0,class:!0,href:!0});var Ca=l(Ae);Nt=i(Ca,"SPAN",{});var Aa=l(Nt);v(bo.$$.fragment,Aa),Aa.forEach(t),Ca.forEach(t),sr=_($s),Mt=i($s,"SPAN",{});var Ea=l(Mt);nr=c(Ea,"NystromformerForMultipleChoice"),Ea.forEach(t),$s.forEach(t),ps=_(o),P=i(o,"DIV",{class:!0});var Re=l(P);v(ko.$$.fragment,Re),rr=_(Re),Ft=i(Re,"P",{});var Pa=l(Ft);ar=c(Pa,`Nystr\xF6mformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output
and a softmax) e.g. for RocStories/SWAG tasks.`),Pa.forEach(t),ir=_(Re),vo=i(Re,"P",{});var Ts=l(vo);lr=c(Ts,"This model is a PyTorch "),wo=i(Ts,"A",{href:!0,rel:!0});var Oa=l(wo);dr=c(Oa,"torch.nn.Module"),Oa.forEach(t),cr=c(Ts,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ts.forEach(t),mr=_(Re),H=i(Re,"DIV",{class:!0});var Ge=l(H);v($o.$$.fragment,Ge),pr=_(Ge),le=i(Ge,"P",{});var st=l(le);fr=c(st,"The "),Bo=i(st,"A",{href:!0});var Sa=l(Bo);hr=c(Sa,"NystromformerForMultipleChoice"),Sa.forEach(t),ur=c(st," forward method, overrides the "),xt=i(st,"CODE",{});var La=l(xt);gr=c(La,"__call__"),La.forEach(t),_r=c(st," special method."),st.forEach(t),yr=_(Ge),v(Ee.$$.fragment,Ge),br=_(Ge),v(Pe.$$.fragment,Ge),Ge.forEach(t),Re.forEach(t),fs=_(o),de=i(o,"H2",{class:!0});var Ns=l(de);Oe=i(Ns,"A",{id:!0,class:!0,href:!0});var Ia=l(Oe);qt=i(Ia,"SPAN",{});var Da=l(qt);v(To.$$.fragment,Da),Da.forEach(t),Ia.forEach(t),kr=_(Ns),zt=i(Ns,"SPAN",{});var Wa=l(zt);vr=c(Wa,"NystromformerForTokenClassification"),Wa.forEach(t),Ns.forEach(t),hs=_(o),O=i(o,"DIV",{class:!0});var Ke=l(O);v(No.$$.fragment,Ke),wr=_(Ke),jt=i(Ke,"P",{});var Qa=l(jt);$r=c(Qa,`Nystr\xF6mformer Model with a token classification head on top (a linear layer on top of the hidden-states output)
e.g. for Named-Entity-Recognition (NER) tasks.`),Qa.forEach(t),Tr=_(Ke),Mo=i(Ke,"P",{});var Ms=l(Mo);Nr=c(Ms,"This model is a PyTorch "),Fo=i(Ms,"A",{href:!0,rel:!0});var Ha=l(Fo);Mr=c(Ha,"torch.nn.Module"),Ha.forEach(t),Fr=c(Ms,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ms.forEach(t),xr=_(Ke),z=i(Ke,"DIV",{class:!0});var G=l(z);v(xo.$$.fragment,G),qr=_(G),ce=i(G,"P",{});var nt=l(ce);zr=c(nt,"The "),Ro=i(nt,"A",{href:!0});var Va=l(Ro);jr=c(Va,"NystromformerForTokenClassification"),Va.forEach(t),Cr=c(nt," forward method, overrides the "),Ct=i(nt,"CODE",{});var Ua=l(Ct);Ar=c(Ua,"__call__"),Ua.forEach(t),Er=c(nt," special method."),nt.forEach(t),Pr=_(G),v(Se.$$.fragment,G),Or=_(G),v(Le.$$.fragment,G),Sr=_(G),v(Ie.$$.fragment,G),G.forEach(t),Ke.forEach(t),us=_(o),me=i(o,"H2",{class:!0});var Fs=l(me);De=i(Fs,"A",{id:!0,class:!0,href:!0});var Ba=l(De);At=i(Ba,"SPAN",{});var Ra=l(At);v(qo.$$.fragment,Ra),Ra.forEach(t),Ba.forEach(t),Lr=_(Fs),Et=i(Fs,"SPAN",{});var Ga=l(Et);Ir=c(Ga,"NystromformerForQuestionAnswering"),Ga.forEach(t),Fs.forEach(t),gs=_(o),S=i(o,"DIV",{class:!0});var Ye=l(S);v(zo.$$.fragment,Ye),Dr=_(Ye),pe=i(Ye,"P",{});var rt=l(pe);Wr=c(rt,`Nystr\xF6mformer Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Pt=i(rt,"CODE",{});var Ka=l(Pt);Qr=c(Ka,"span start logits"),Ka.forEach(t),Hr=c(rt," and "),Ot=i(rt,"CODE",{});var Ya=l(Ot);Vr=c(Ya,"span end logits"),Ya.forEach(t),Ur=c(rt,")."),rt.forEach(t),Br=_(Ye),jo=i(Ye,"P",{});var xs=l(jo);Rr=c(xs,"This model is a PyTorch "),Co=i(xs,"A",{href:!0,rel:!0});var Ja=l(Co);Gr=c(Ja,"torch.nn.Module"),Ja.forEach(t),Kr=c(xs,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xs.forEach(t),Yr=_(Ye),j=i(Ye,"DIV",{class:!0});var K=l(j);v(Ao.$$.fragment,K),Jr=_(K),fe=i(K,"P",{});var at=l(fe);Zr=c(at,"The "),Go=i(at,"A",{href:!0});var Za=l(Go);Xr=c(Za,"NystromformerForQuestionAnswering"),Za.forEach(t),ea=c(at," forward method, overrides the "),St=i(at,"CODE",{});var Xa=l(St);oa=c(Xa,"__call__"),Xa.forEach(t),ta=c(at," special method."),at.forEach(t),sa=_(K),v(We.$$.fragment,K),na=_(K),v(Qe.$$.fragment,K),ra=_(K),v(He.$$.fragment,K),K.forEach(t),Ye.forEach(t),this.h()},h(){u(n,"name","hf:doc:metadata"),u(n,"content",JSON.stringify(Ni)),u(m,"id","nystrmformer"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#nystrmformer"),u(r,"class","relative group"),u(ge,"id","overview"),u(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ge,"href","#overview"),u(Y,"class","relative group"),u(Ze,"href","https://arxiv.org/abs/2102.03902"),u(Ze,"rel","nofollow"),u(Xe,"href","https://huggingface.co/novice03"),u(Xe,"rel","nofollow"),u(eo,"href","https://github.com/mlpen/Nystromformer"),u(eo,"rel","nofollow"),u(ye,"id","transformers.NystromformerConfig"),u(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ye,"href","#transformers.NystromformerConfig"),u(J,"class","relative group"),u(Do,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerModel"),u(so,"href","https://huggingface.co/uw-madison/nystromformer-512"),u(so,"rel","nofollow"),u(Wo,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(Qo,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),u(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ke,"id","transformers.NystromformerModel"),u(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ke,"href","#transformers.NystromformerModel"),u(ee,"class","relative group"),u(io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(io,"rel","nofollow"),u(Ho,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerModel"),u(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($e,"id","transformers.NystromformerForMaskedLM"),u($e,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($e,"href","#transformers.NystromformerForMaskedLM"),u(te,"class","relative group"),u(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(po,"rel","nofollow"),u(Vo,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerForMaskedLM"),u(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fe,"id","transformers.NystromformerForSequenceClassification"),u(Fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fe,"href","#transformers.NystromformerForSequenceClassification"),u(re,"class","relative group"),u(_o,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_o,"rel","nofollow"),u(Uo,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerForSequenceClassification"),u(x,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"id","transformers.NystromformerForMultipleChoice"),u(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ae,"href","#transformers.NystromformerForMultipleChoice"),u(ie,"class","relative group"),u(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wo,"rel","nofollow"),u(Bo,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerForMultipleChoice"),u(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"id","transformers.NystromformerForTokenClassification"),u(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Oe,"href","#transformers.NystromformerForTokenClassification"),u(de,"class","relative group"),u(Fo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fo,"rel","nofollow"),u(Ro,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerForTokenClassification"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"id","transformers.NystromformerForQuestionAnswering"),u(De,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(De,"href","#transformers.NystromformerForQuestionAnswering"),u(me,"class","relative group"),u(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Co,"rel","nofollow"),u(Go,"href","/docs/transformers/v4.21.3/en/model_doc/nystromformer#transformers.NystromformerForQuestionAnswering"),u(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,h){e(document.head,n),b(o,f,h),b(o,r,h),e(r,m),e(m,y),w(s,y,null),e(r,p),e(r,F),e(F,qs),b(o,Zt,h),b(o,Y,h),e(Y,ge),e(ge,lt),w(Je,lt,null),e(Y,zs),e(Y,dt),e(dt,js),b(o,Xt,h),b(o,_e,h),e(_e,Cs),e(_e,Ze),e(Ze,ct),e(ct,As),e(_e,Es),b(o,es,h),b(o,Lo,h),e(Lo,Ps),b(o,os,h),b(o,Io,h),e(Io,mt),e(mt,Os),b(o,ts,h),b(o,B,h),e(B,Ss),e(B,Xe),e(Xe,Ls),e(B,Is),e(B,eo),e(eo,Ds),e(B,Ws),b(o,ss,h),b(o,J,h),e(J,ye),e(ye,pt),w(oo,pt,null),e(J,Qs),e(J,ft),e(ft,Hs),b(o,ns,h),b(o,A,h),w(to,A,null),e(A,Vs),e(A,Z),e(Z,Us),e(Z,Do),e(Do,Bs),e(Z,Rs),e(Z,so),e(so,Gs),e(Z,Ks),e(A,Ys),e(A,X),e(X,Js),e(X,Wo),e(Wo,Zs),e(X,Xs),e(X,Qo),e(Qo,en),e(X,on),e(A,tn),w(be,A,null),b(o,rs,h),b(o,ee,h),e(ee,ke),e(ke,ht),w(no,ht,null),e(ee,sn),e(ee,ut),e(ut,nn),b(o,as,h),b(o,V,h),w(ro,V,null),e(V,rn),e(V,ao),e(ao,an),e(ao,io),e(io,ln),e(ao,dn),e(V,cn),e(V,Q),w(lo,Q,null),e(Q,mn),e(Q,oe),e(oe,pn),e(oe,Ho),e(Ho,fn),e(oe,hn),e(oe,gt),e(gt,un),e(oe,gn),e(Q,_n),w(ve,Q,null),e(Q,yn),w(we,Q,null),b(o,is,h),b(o,te,h),e(te,$e),e($e,_t),w(co,_t,null),e(te,bn),e(te,yt),e(yt,kn),b(o,ls,h),b(o,U,h),w(mo,U,null),e(U,vn),e(U,se),e(se,wn),e(se,bt),e(bt,$n),e(se,Tn),e(se,po),e(po,Nn),e(se,Mn),e(U,Fn),e(U,q),w(fo,q,null),e(q,xn),e(q,ne),e(ne,qn),e(ne,Vo),e(Vo,zn),e(ne,jn),e(ne,kt),e(kt,Cn),e(ne,An),e(q,En),w(Te,q,null),e(q,Pn),w(Ne,q,null),e(q,On),w(Me,q,null),b(o,ds,h),b(o,re,h),e(re,Fe),e(Fe,vt),w(ho,vt,null),e(re,Sn),e(re,wt),e(wt,Ln),b(o,cs,h),b(o,E,h),w(uo,E,null),e(E,In),e(E,$t),e($t,Dn),e(E,Wn),e(E,go),e(go,Qn),e(go,_o),e(_o,Hn),e(go,Vn),e(E,Un),e(E,x),w(yo,x,null),e(x,Bn),e(x,ae),e(ae,Rn),e(ae,Uo),e(Uo,Gn),e(ae,Kn),e(ae,Tt),e(Tt,Yn),e(ae,Jn),e(x,Zn),w(xe,x,null),e(x,Xn),w(qe,x,null),e(x,er),w(ze,x,null),e(x,or),w(je,x,null),e(x,tr),w(Ce,x,null),b(o,ms,h),b(o,ie,h),e(ie,Ae),e(Ae,Nt),w(bo,Nt,null),e(ie,sr),e(ie,Mt),e(Mt,nr),b(o,ps,h),b(o,P,h),w(ko,P,null),e(P,rr),e(P,Ft),e(Ft,ar),e(P,ir),e(P,vo),e(vo,lr),e(vo,wo),e(wo,dr),e(vo,cr),e(P,mr),e(P,H),w($o,H,null),e(H,pr),e(H,le),e(le,fr),e(le,Bo),e(Bo,hr),e(le,ur),e(le,xt),e(xt,gr),e(le,_r),e(H,yr),w(Ee,H,null),e(H,br),w(Pe,H,null),b(o,fs,h),b(o,de,h),e(de,Oe),e(Oe,qt),w(To,qt,null),e(de,kr),e(de,zt),e(zt,vr),b(o,hs,h),b(o,O,h),w(No,O,null),e(O,wr),e(O,jt),e(jt,$r),e(O,Tr),e(O,Mo),e(Mo,Nr),e(Mo,Fo),e(Fo,Mr),e(Mo,Fr),e(O,xr),e(O,z),w(xo,z,null),e(z,qr),e(z,ce),e(ce,zr),e(ce,Ro),e(Ro,jr),e(ce,Cr),e(ce,Ct),e(Ct,Ar),e(ce,Er),e(z,Pr),w(Se,z,null),e(z,Or),w(Le,z,null),e(z,Sr),w(Ie,z,null),b(o,us,h),b(o,me,h),e(me,De),e(De,At),w(qo,At,null),e(me,Lr),e(me,Et),e(Et,Ir),b(o,gs,h),b(o,S,h),w(zo,S,null),e(S,Dr),e(S,pe),e(pe,Wr),e(pe,Pt),e(Pt,Qr),e(pe,Hr),e(pe,Ot),e(Ot,Vr),e(pe,Ur),e(S,Br),e(S,jo),e(jo,Rr),e(jo,Co),e(Co,Gr),e(jo,Kr),e(S,Yr),e(S,j),w(Ao,j,null),e(j,Jr),e(j,fe),e(fe,Zr),e(fe,Go),e(Go,Xr),e(fe,ea),e(fe,St),e(St,oa),e(fe,ta),e(j,sa),w(We,j,null),e(j,na),w(Qe,j,null),e(j,ra),w(He,j,null),_s=!0},p(o,[h]){const Eo={};h&2&&(Eo.$$scope={dirty:h,ctx:o}),be.$set(Eo);const Lt={};h&2&&(Lt.$$scope={dirty:h,ctx:o}),ve.$set(Lt);const It={};h&2&&(It.$$scope={dirty:h,ctx:o}),we.$set(It);const Dt={};h&2&&(Dt.$$scope={dirty:h,ctx:o}),Te.$set(Dt);const Po={};h&2&&(Po.$$scope={dirty:h,ctx:o}),Ne.$set(Po);const Wt={};h&2&&(Wt.$$scope={dirty:h,ctx:o}),Me.$set(Wt);const Qt={};h&2&&(Qt.$$scope={dirty:h,ctx:o}),xe.$set(Qt);const Ht={};h&2&&(Ht.$$scope={dirty:h,ctx:o}),qe.$set(Ht);const Oo={};h&2&&(Oo.$$scope={dirty:h,ctx:o}),ze.$set(Oo);const Vt={};h&2&&(Vt.$$scope={dirty:h,ctx:o}),je.$set(Vt);const Ut={};h&2&&(Ut.$$scope={dirty:h,ctx:o}),Ce.$set(Ut);const Bt={};h&2&&(Bt.$$scope={dirty:h,ctx:o}),Ee.$set(Bt);const Rt={};h&2&&(Rt.$$scope={dirty:h,ctx:o}),Pe.$set(Rt);const Gt={};h&2&&(Gt.$$scope={dirty:h,ctx:o}),Se.$set(Gt);const he={};h&2&&(he.$$scope={dirty:h,ctx:o}),Le.$set(he);const Kt={};h&2&&(Kt.$$scope={dirty:h,ctx:o}),Ie.$set(Kt);const Yt={};h&2&&(Yt.$$scope={dirty:h,ctx:o}),We.$set(Yt);const So={};h&2&&(So.$$scope={dirty:h,ctx:o}),Qe.$set(So);const Jt={};h&2&&(Jt.$$scope={dirty:h,ctx:o}),He.$set(Jt)},i(o){_s||($(s.$$.fragment,o),$(Je.$$.fragment,o),$(oo.$$.fragment,o),$(to.$$.fragment,o),$(be.$$.fragment,o),$(no.$$.fragment,o),$(ro.$$.fragment,o),$(lo.$$.fragment,o),$(ve.$$.fragment,o),$(we.$$.fragment,o),$(co.$$.fragment,o),$(mo.$$.fragment,o),$(fo.$$.fragment,o),$(Te.$$.fragment,o),$(Ne.$$.fragment,o),$(Me.$$.fragment,o),$(ho.$$.fragment,o),$(uo.$$.fragment,o),$(yo.$$.fragment,o),$(xe.$$.fragment,o),$(qe.$$.fragment,o),$(ze.$$.fragment,o),$(je.$$.fragment,o),$(Ce.$$.fragment,o),$(bo.$$.fragment,o),$(ko.$$.fragment,o),$($o.$$.fragment,o),$(Ee.$$.fragment,o),$(Pe.$$.fragment,o),$(To.$$.fragment,o),$(No.$$.fragment,o),$(xo.$$.fragment,o),$(Se.$$.fragment,o),$(Le.$$.fragment,o),$(Ie.$$.fragment,o),$(qo.$$.fragment,o),$(zo.$$.fragment,o),$(Ao.$$.fragment,o),$(We.$$.fragment,o),$(Qe.$$.fragment,o),$(He.$$.fragment,o),_s=!0)},o(o){T(s.$$.fragment,o),T(Je.$$.fragment,o),T(oo.$$.fragment,o),T(to.$$.fragment,o),T(be.$$.fragment,o),T(no.$$.fragment,o),T(ro.$$.fragment,o),T(lo.$$.fragment,o),T(ve.$$.fragment,o),T(we.$$.fragment,o),T(co.$$.fragment,o),T(mo.$$.fragment,o),T(fo.$$.fragment,o),T(Te.$$.fragment,o),T(Ne.$$.fragment,o),T(Me.$$.fragment,o),T(ho.$$.fragment,o),T(uo.$$.fragment,o),T(yo.$$.fragment,o),T(xe.$$.fragment,o),T(qe.$$.fragment,o),T(ze.$$.fragment,o),T(je.$$.fragment,o),T(Ce.$$.fragment,o),T(bo.$$.fragment,o),T(ko.$$.fragment,o),T($o.$$.fragment,o),T(Ee.$$.fragment,o),T(Pe.$$.fragment,o),T(To.$$.fragment,o),T(No.$$.fragment,o),T(xo.$$.fragment,o),T(Se.$$.fragment,o),T(Le.$$.fragment,o),T(Ie.$$.fragment,o),T(qo.$$.fragment,o),T(zo.$$.fragment,o),T(Ao.$$.fragment,o),T(We.$$.fragment,o),T(Qe.$$.fragment,o),T(He.$$.fragment,o),_s=!1},d(o){t(n),o&&t(f),o&&t(r),N(s),o&&t(Zt),o&&t(Y),N(Je),o&&t(Xt),o&&t(_e),o&&t(es),o&&t(Lo),o&&t(os),o&&t(Io),o&&t(ts),o&&t(B),o&&t(ss),o&&t(J),N(oo),o&&t(ns),o&&t(A),N(to),N(be),o&&t(rs),o&&t(ee),N(no),o&&t(as),o&&t(V),N(ro),N(lo),N(ve),N(we),o&&t(is),o&&t(te),N(co),o&&t(ls),o&&t(U),N(mo),N(fo),N(Te),N(Ne),N(Me),o&&t(ds),o&&t(re),N(ho),o&&t(cs),o&&t(E),N(uo),N(yo),N(xe),N(qe),N(ze),N(je),N(Ce),o&&t(ms),o&&t(ie),N(bo),o&&t(ps),o&&t(P),N(ko),N($o),N(Ee),N(Pe),o&&t(fs),o&&t(de),N(To),o&&t(hs),o&&t(O),N(No),N(xo),N(Se),N(Le),N(Ie),o&&t(us),o&&t(me),N(qo),o&&t(gs),o&&t(S),N(zo),N(Ao),N(We),N(Qe),N(He)}}}const Ni={local:"nystrmformer",sections:[{local:"overview",title:"Overview"},{local:"transformers.NystromformerConfig",title:"NystromformerConfig"},{local:"transformers.NystromformerModel",title:"NystromformerModel"},{local:"transformers.NystromformerForMaskedLM",title:"NystromformerForMaskedLM"},{local:"transformers.NystromformerForSequenceClassification",title:"NystromformerForSequenceClassification"},{local:"transformers.NystromformerForMultipleChoice",title:"NystromformerForMultipleChoice"},{local:"transformers.NystromformerForTokenClassification",title:"NystromformerForTokenClassification"},{local:"transformers.NystromformerForQuestionAnswering",title:"NystromformerForQuestionAnswering"}],title:"Nystr\xF6mformer"};function Mi(M){return ni(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ai extends ei{constructor(n){super();oi(this,n,Mi,Ti,ti,{})}}export{Ai as default,Ni as metadata};
