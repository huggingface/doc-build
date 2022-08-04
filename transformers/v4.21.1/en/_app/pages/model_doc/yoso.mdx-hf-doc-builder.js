import{S as Fi,i as qi,s as zi,e as r,k as g,w,t as d,M as ji,c as i,d as t,m as _,a as l,x as v,h as c,b as f,N as Ci,G as e,g as b,y as $,q as y,o as T,B as Y,v as Oi,L as S}from"../../chunks/vendor-hf-doc-builder.js";import{T as ft}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as P}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as we}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ai(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import YosoModel, YosoConfig

# Initializing a YOSO uw-madison/yoso-4096 style configuration
configuration = YosoConfig()

# Initializing a model from the uw-madison/yoso-4096 style configuration
model = YosoModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> YosoModel, YosoConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a YOSO uw-madison/yoso-4096 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = YosoConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the uw-madison/yoso-4096 style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Ei(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Si(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import AutoTokenizer, YosoModel
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoModel.from_pretrained("uw-madison/yoso-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoModel.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Pi(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Li(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import AutoTokenizer, YosoForMaskedLM
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForMaskedLM.from_pretrained("uw-madison/yoso-4096")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForMaskedLM.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Ni(M){let n,u;return n=new P({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,p){$(n,a,p),u=!0},p:S,i(a){u||(y(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){Y(n,a)}}}function Ii(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Di(M){let n,u,a,p,k;return p=new P({props:{code:`import torch
from transformers import AutoTokenizer, YosoForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForSequenceClassification.from_pretrained("uw-madison/yoso-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=r("p"),u=d("Example of single-label classification:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example of single-label classification:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Wi(M){let n,u;return n=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = YosoForSequenceClassification.from_pretrained("uw-madison/yoso-4096", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,p){$(n,a,p),u=!0},p:S,i(a){u||(y(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){Y(n,a)}}}function Hi(M){let n,u,a,p,k;return p=new P({props:{code:`import torch
from transformers import AutoTokenizer, YosoForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForSequenceClassification.from_pretrained("uw-madison/yoso-4096", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){n=r("p"),u=d("Example of multi-label classification:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example of multi-label classification:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Qi(M){let n,u;return n=new P({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = YosoForSequenceClassification.from_pretrained(
    "uw-madison/yoso-4096", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,p){$(n,a,p),u=!0},p:S,i(a){u||(y(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){Y(n,a)}}}function Ui(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Bi(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import AutoTokenizer, YosoForMultipleChoice
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForMultipleChoice.from_pretrained("uw-madison/yoso-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Ri(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Vi(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import AutoTokenizer, YosoForTokenClassification
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForTokenClassification.from_pretrained("uw-madison/yoso-4096")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForTokenClassification.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

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
`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Gi(M){let n,u;return n=new P({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,p){$(n,a,p),u=!0},p:S,i(a){u||(y(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){Y(n,a)}}}function Ki(M){let n,u,a,p,k;return{c(){n=r("p"),u=d("Although the recipe for forward pass needs to be defined within this function, one should call the "),a=r("code"),p=d("Module"),k=d(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),a=i(h,"CODE",{});var x=l(a);p=c(x,"Module"),x.forEach(t),k=c(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(s,h){b(s,n,h),e(n,u),e(n,a),e(a,p),e(n,k)},d(s){s&&t(n)}}}function Ji(M){let n,u,a,p,k;return p=new P({props:{code:`from transformers import AutoTokenizer, YosoForQuestionAnswering
import torch

tokenizer = AutoTokenizer.from_pretrained("uw-madison/yoso-4096")
model = YosoForQuestionAnswering.from_pretrained("uw-madison/yoso-4096")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, YosoForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = YosoForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;uw-madison/yoso-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){n=r("p"),u=d("Example:"),a=g(),w(p.$$.fragment)},l(s){n=i(s,"P",{});var h=l(n);u=c(h,"Example:"),h.forEach(t),a=_(s),v(p.$$.fragment,s)},m(s,h){b(s,n,h),e(n,u),b(s,a,h),$(p,s,h),k=!0},p:S,i(s){k||(y(p.$$.fragment,s),k=!0)},o(s){T(p.$$.fragment,s),k=!1},d(s){s&&t(n),s&&t(a),Y(p,s)}}}function Zi(M){let n,u;return n=new P({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(n.$$.fragment)},l(a){v(n.$$.fragment,a)},m(a,p){$(n,a,p),u=!0},p:S,i(a){u||(y(n.$$.fragment,a),u=!0)},o(a){T(n.$$.fragment,a),u=!1},d(a){Y(n,a)}}}function Xi(M){let n,u,a,p,k,s,h,x,Hs,is,Z,ve,gt,oo,Qs,_t,Us,ls,X,Bs,to,Rs,Vs,Gs,ds,No,Ks,cs,Io,bt,Js,ps,Do,Zs,hs,R,kt,Xs,en,ee,on,wt,tn,sn,vt,nn,an,rn,oe,ln,$t,dn,cn,yt,pn,hn,ms,$e,zr,us,ye,mn,Wo,un,fn,fs,V,gn,so,_n,bn,no,kn,wn,gs,te,Te,Tt,ao,vn,Yt,$n,_s,O,ro,yn,se,Tn,Ho,Yn,Mn,io,xn,Fn,qn,ne,zn,Qo,jn,Cn,Uo,On,An,En,Ye,bs,ae,Me,Mt,lo,Sn,xt,Pn,ks,I,co,Ln,po,Nn,ho,In,Dn,Wn,L,mo,Hn,re,Qn,Bo,Un,Bn,Ft,Rn,Vn,Gn,xe,Kn,Fe,ws,ie,qe,qt,uo,Jn,zt,Zn,vs,D,fo,Xn,le,ea,jt,oa,ta,go,sa,na,aa,q,_o,ra,de,ia,Ro,la,da,Ct,ca,pa,ha,ze,ma,je,ua,Ce,$s,ce,Oe,Ot,bo,fa,At,ga,ys,W,ko,_a,wo,ba,vo,ka,wa,va,F,$o,$a,pe,ya,Vo,Ta,Ya,Et,Ma,xa,Fa,Ae,qa,Ee,za,Se,ja,Pe,Ca,Le,Ts,he,Ne,St,yo,Oa,Pt,Aa,Ys,H,To,Ea,Yo,Sa,Mo,Pa,La,Na,N,xo,Ia,me,Da,Go,Wa,Ha,Lt,Qa,Ua,Ba,Ie,Ra,De,Ms,ue,We,Nt,Fo,Va,It,Ga,xs,Q,qo,Ka,zo,Ja,jo,Za,Xa,er,z,Co,or,fe,tr,Ko,sr,nr,Dt,ar,rr,ir,He,lr,Qe,dr,Ue,Fs,ge,Be,Wt,Oo,cr,Ht,pr,qs,U,Ao,hr,B,mr,Qt,ur,fr,Ut,gr,_r,Eo,br,kr,wr,j,So,vr,_e,$r,Jo,yr,Tr,Bt,Yr,Mr,xr,Re,Fr,Ve,qr,Ge,zs;return s=new we({}),oo=new we({}),ao=new we({}),ro=new A({props:{name:"class transformers.YosoConfig",anchor:"transformers.YosoConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 4096"},{name:"type_vocab_size",val:" = 1"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_expectation",val:" = True"},{name:"hash_code_len",val:" = 9"},{name:"num_hash",val:" = 64"},{name:"conv_window",val:" = None"},{name:"use_fast_hash",val:" = True"},{name:"lsh_backward",val:" = True"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.YosoConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50265) &#x2014;
Vocabulary size of the YOSO model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoModel">YosoModel</a>.`,name:"vocab_size"},{anchor:"transformers.YosoConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.YosoConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.YosoConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.YosoConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.YosoConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.YosoConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.YosoConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.YosoConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.YosoConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoModel">YosoModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.YosoConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.YosoConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.YosoConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>.`,name:"position_embedding_type"},{anchor:"transformers.YosoConfig.use_expectation",description:`<strong>use_expectation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use YOSO Expectation. Overrides any effect of num_hash.`,name:"use_expectation"},{anchor:"transformers.YosoConfig.hash_code_len",description:`<strong>hash_code_len</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The length of hashes generated by the hash functions.`,name:"hash_code_len"},{anchor:"transformers.YosoConfig.num_hash",description:`<strong>num_hash</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of hash functions used in <code>YosoSelfAttention</code>.`,name:"num_hash"},{anchor:"transformers.YosoConfig.conv_window",description:`<strong>conv_window</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Kernel size of depth-wise convolution.`,name:"conv_window"},{anchor:"transformers.YosoConfig.use_fast_hash",description:`<strong>use_fast_hash</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use custom cuda kernels which perform fast random projection via hadamard transform.`,name:"use_fast_hash"},{anchor:"transformers.YosoConfig.lsh_backward",description:`<strong>lsh_backward</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to perform backpropagation using Locality Sensitive Hashing.`,name:"lsh_backward"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/configuration_yoso.py#L29"}}),Ye=new E({props:{anchor:"transformers.YosoConfig.example",$$slots:{default:[Ai]},$$scope:{ctx:M}}}),lo=new we({}),co=new A({props:{name:"class transformers.YosoModel",anchor:"transformers.YosoModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L744"}}),mo=new A({props:{name:"forward",anchor:"transformers.YosoModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L769",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),xe=new ft({props:{$$slots:{default:[Ei]},$$scope:{ctx:M}}}),Fe=new E({props:{anchor:"transformers.YosoModel.forward.example",$$slots:{default:[Si]},$$scope:{ctx:M}}}),uo=new we({}),fo=new A({props:{name:"class transformers.YosoForMaskedLM",anchor:"transformers.YosoForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L856"}}),_o=new A({props:{name:"forward",anchor:"transformers.YosoForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.YosoForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L872",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ze=new ft({props:{$$slots:{default:[Pi]},$$scope:{ctx:M}}}),je=new E({props:{anchor:"transformers.YosoForMaskedLM.forward.example",$$slots:{default:[Li]},$$scope:{ctx:M}}}),Ce=new E({props:{anchor:"transformers.YosoForMaskedLM.forward.example-2",$$slots:{default:[Ni]},$$scope:{ctx:M}}}),bo=new we({}),ko=new A({props:{name:"class transformers.YosoForSequenceClassification",anchor:"transformers.YosoForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L958"}}),$o=new A({props:{name:"forward",anchor:"transformers.YosoForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.YosoForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L968",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ae=new ft({props:{$$slots:{default:[Ii]},$$scope:{ctx:M}}}),Ee=new E({props:{anchor:"transformers.YosoForSequenceClassification.forward.example",$$slots:{default:[Di]},$$scope:{ctx:M}}}),Se=new E({props:{anchor:"transformers.YosoForSequenceClassification.forward.example-2",$$slots:{default:[Wi]},$$scope:{ctx:M}}}),Pe=new E({props:{anchor:"transformers.YosoForSequenceClassification.forward.example-3",$$slots:{default:[Hi]},$$scope:{ctx:M}}}),Le=new E({props:{anchor:"transformers.YosoForSequenceClassification.forward.example-4",$$slots:{default:[Qi]},$$scope:{ctx:M}}}),yo=new we({}),To=new A({props:{name:"class transformers.YosoForMultipleChoice",anchor:"transformers.YosoForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1050"}}),xo=new A({props:{name:"forward",anchor:"transformers.YosoForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.YosoForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1061",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ie=new ft({props:{$$slots:{default:[Ui]},$$scope:{ctx:M}}}),De=new E({props:{anchor:"transformers.YosoForMultipleChoice.forward.example",$$slots:{default:[Bi]},$$scope:{ctx:M}}}),Fo=new we({}),qo=new A({props:{name:"class transformers.YosoForTokenClassification",anchor:"transformers.YosoForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1142"}}),Co=new A({props:{name:"forward",anchor:"transformers.YosoForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.YosoForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1154",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),He=new ft({props:{$$slots:{default:[Ri]},$$scope:{ctx:M}}}),Qe=new E({props:{anchor:"transformers.YosoForTokenClassification.forward.example",$$slots:{default:[Vi]},$$scope:{ctx:M}}}),Ue=new E({props:{anchor:"transformers.YosoForTokenClassification.forward.example-2",$$slots:{default:[Gi]},$$scope:{ctx:M}}}),Oo=new we({}),Ao=new A({props:{name:"class transformers.YosoForQuestionAnswering",anchor:"transformers.YosoForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.YosoForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig">YosoConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1228"}}),So=new A({props:{name:"forward",anchor:"transformers.YosoForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.YosoForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoTokenizer">AutoTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.YosoForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.YosoForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.YosoForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.YosoForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.YosoForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.YosoForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.YosoForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.YosoForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.YosoForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.YosoForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/yoso/modeling_yoso.py#L1241",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoConfig"
>YosoConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Re=new ft({props:{$$slots:{default:[Ki]},$$scope:{ctx:M}}}),Ve=new E({props:{anchor:"transformers.YosoForQuestionAnswering.forward.example",$$slots:{default:[Ji]},$$scope:{ctx:M}}}),Ge=new E({props:{anchor:"transformers.YosoForQuestionAnswering.forward.example-2",$$slots:{default:[Zi]},$$scope:{ctx:M}}}),{c(){n=r("meta"),u=g(),a=r("h1"),p=r("a"),k=r("span"),w(s.$$.fragment),h=g(),x=r("span"),Hs=d("YOSO"),is=g(),Z=r("h2"),ve=r("a"),gt=r("span"),w(oo.$$.fragment),Qs=g(),_t=r("span"),Us=d("Overview"),ls=g(),X=r("p"),Bs=d("The YOSO model was proposed in "),to=r("a"),Rs=d("You Only Sample (Almost) Once: Linear Cost Self-Attention Via Bernoulli Sampling"),Vs=r("br"),Gs=d(`
by Zhanpeng Zeng, Yunyang Xiong, Sathya N. Ravi, Shailesh Acharya, Glenn Fung, Vikas Singh. YOSO approximates standard softmax self-attention
via a Bernoulli sampling scheme based on Locality Sensitive Hashing (LSH). In principle, all the Bernoulli random variables can be sampled with
a single hash.`),ds=g(),No=r("p"),Ks=d("The abstract from the paper is the following:"),cs=g(),Io=r("p"),bt=r("em"),Js=d(`Transformer-based models are widely used in natural language processing (NLP). Central to the transformer model is
the self-attention mechanism, which captures the interactions of token pairs in the input sequences and depends quadratically
on the sequence length. Training such models on longer sequences is expensive. In this paper, we show that a Bernoulli sampling
attention mechanism based on Locality Sensitive Hashing (LSH), decreases the quadratic complexity of such models to linear.
We bypass the quadratic cost by considering self-attention as a sum of individual tokens associated with Bernoulli random
variables that can, in principle, be sampled at once by a single hash (although in practice, this number may be a small constant).
This leads to an efficient sampling scheme to estimate self-attention which relies on specific modifications of
LSH (to enable deployment on GPU architectures). We evaluate our algorithm on the GLUE benchmark with standard 512 sequence
length where we see favorable performance relative to a standard pretrained Transformer. On the Long Range Arena (LRA) benchmark,
for evaluating performance on long sequences, our method achieves results consistent with softmax self-attention but with sizable
speed-ups and memory savings and often outperforms other efficient self-attention methods. Our code is available at this https URL`),ps=g(),Do=r("p"),Zs=d("Tips:"),hs=g(),R=r("ul"),kt=r("li"),Xs=d(`The YOSO attention algorithm is implemented through custom CUDA kernels, functions written in CUDA C++ that can be executed multiple times
in parallel on a GPU.`),en=g(),ee=r("li"),on=d("The kernels provide a "),wt=r("code"),tn=d("fast_hash"),sn=d(` function, which approximates the random projections of the queries and keys using the Fast Hadamard Transform. Using these
hash codes, the `),vt=r("code"),nn=d("lsh_cumulation"),an=d(" function approximates self-attention via LSH-based Bernoulli sampling."),rn=g(),oe=r("li"),ln=d("To use the custom kernels, the user should set "),$t=r("code"),dn=d("config.use_expectation = False"),cn=d(`. To ensure that the kernels are compiled successfully,
the user must install the correct version of PyTorch and cudatoolkit. By default, `),yt=r("code"),pn=d("config.use_expectation = True"),hn=d(`, which uses YOSO-E and
does not require compiling CUDA kernels.`),ms=g(),$e=r("img"),us=g(),ye=r("small"),mn=d("YOSO Attention Algorithm. Taken from the "),Wo=r("a"),un=d("original paper"),fn=d("."),fs=g(),V=r("p"),gn=d("This model was contributed by "),so=r("a"),_n=d("novice03"),bn=d(". The original code can be found "),no=r("a"),kn=d("here"),wn=d("."),gs=g(),te=r("h2"),Te=r("a"),Tt=r("span"),w(ao.$$.fragment),vn=g(),Yt=r("span"),$n=d("YosoConfig"),_s=g(),O=r("div"),w(ro.$$.fragment),yn=g(),se=r("p"),Tn=d("This is the configuration class to store the configuration of a "),Ho=r("a"),Yn=d("YosoModel"),Mn=d(`. It is used to instantiate an YOSO
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the YOSO
`),io=r("a"),xn=d("uw-madison/yoso-4096"),Fn=d(" architecture."),qn=g(),ne=r("p"),zn=d("Configuration objects inherit from "),Qo=r("a"),jn=d("PretrainedConfig"),Cn=d(` and can be used to control the model outputs. Read the
documentation from `),Uo=r("a"),On=d("PretrainedConfig"),An=d(" for more information."),En=g(),w(Ye.$$.fragment),bs=g(),ae=r("h2"),Me=r("a"),Mt=r("span"),w(lo.$$.fragment),Sn=g(),xt=r("span"),Pn=d("YosoModel"),ks=g(),I=r("div"),w(co.$$.fragment),Ln=g(),po=r("p"),Nn=d(`The bare YOSO Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ho=r("a"),In=d("torch.nn.Module"),Dn=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Wn=g(),L=r("div"),w(mo.$$.fragment),Hn=g(),re=r("p"),Qn=d("The "),Bo=r("a"),Un=d("YosoModel"),Bn=d(" forward method, overrides the "),Ft=r("code"),Rn=d("__call__"),Vn=d(" special method."),Gn=g(),w(xe.$$.fragment),Kn=g(),w(Fe.$$.fragment),ws=g(),ie=r("h2"),qe=r("a"),qt=r("span"),w(uo.$$.fragment),Jn=g(),zt=r("span"),Zn=d("YosoForMaskedLM"),vs=g(),D=r("div"),w(fo.$$.fragment),Xn=g(),le=r("p"),ea=d("YOSO Model with a "),jt=r("code"),oa=d("language modeling"),ta=d(` head on top.
This model is a PyTorch `),go=r("a"),sa=d("torch.nn.Module"),na=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),aa=g(),q=r("div"),w(_o.$$.fragment),ra=g(),de=r("p"),ia=d("The "),Ro=r("a"),la=d("YosoForMaskedLM"),da=d(" forward method, overrides the "),Ct=r("code"),ca=d("__call__"),pa=d(" special method."),ha=g(),w(ze.$$.fragment),ma=g(),w(je.$$.fragment),ua=g(),w(Ce.$$.fragment),$s=g(),ce=r("h2"),Oe=r("a"),Ot=r("span"),w(bo.$$.fragment),fa=g(),At=r("span"),ga=d("YosoForSequenceClassification"),ys=g(),W=r("div"),w(ko.$$.fragment),_a=g(),wo=r("p"),ba=d(`YOSO Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),vo=r("a"),ka=d("torch.nn.Module"),wa=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),va=g(),F=r("div"),w($o.$$.fragment),$a=g(),pe=r("p"),ya=d("The "),Vo=r("a"),Ta=d("YosoForSequenceClassification"),Ya=d(" forward method, overrides the "),Et=r("code"),Ma=d("__call__"),xa=d(" special method."),Fa=g(),w(Ae.$$.fragment),qa=g(),w(Ee.$$.fragment),za=g(),w(Se.$$.fragment),ja=g(),w(Pe.$$.fragment),Ca=g(),w(Le.$$.fragment),Ts=g(),he=r("h2"),Ne=r("a"),St=r("span"),w(yo.$$.fragment),Oa=g(),Pt=r("span"),Aa=d("YosoForMultipleChoice"),Ys=g(),H=r("div"),w(To.$$.fragment),Ea=g(),Yo=r("p"),Sa=d(`YOSO Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.
This model is a PyTorch `),Mo=r("a"),Pa=d("torch.nn.Module"),La=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Na=g(),N=r("div"),w(xo.$$.fragment),Ia=g(),me=r("p"),Da=d("The "),Go=r("a"),Wa=d("YosoForMultipleChoice"),Ha=d(" forward method, overrides the "),Lt=r("code"),Qa=d("__call__"),Ua=d(" special method."),Ba=g(),w(Ie.$$.fragment),Ra=g(),w(De.$$.fragment),Ms=g(),ue=r("h2"),We=r("a"),Nt=r("span"),w(Fo.$$.fragment),Va=g(),It=r("span"),Ga=d("YosoForTokenClassification"),xs=g(),Q=r("div"),w(qo.$$.fragment),Ka=g(),zo=r("p"),Ja=d(`YOSO Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.
This model is a PyTorch `),jo=r("a"),Za=d("torch.nn.Module"),Xa=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),er=g(),z=r("div"),w(Co.$$.fragment),or=g(),fe=r("p"),tr=d("The "),Ko=r("a"),sr=d("YosoForTokenClassification"),nr=d(" forward method, overrides the "),Dt=r("code"),ar=d("__call__"),rr=d(" special method."),ir=g(),w(He.$$.fragment),lr=g(),w(Qe.$$.fragment),dr=g(),w(Ue.$$.fragment),Fs=g(),ge=r("h2"),Be=r("a"),Wt=r("span"),w(Oo.$$.fragment),cr=g(),Ht=r("span"),pr=d("YosoForQuestionAnswering"),qs=g(),U=r("div"),w(Ao.$$.fragment),hr=g(),B=r("p"),mr=d(`YOSO Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Qt=r("code"),ur=d("span start logits"),fr=d(" and "),Ut=r("code"),gr=d("span end logits"),_r=d(`).
This model is a PyTorch `),Eo=r("a"),br=d("torch.nn.Module"),kr=d(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wr=g(),j=r("div"),w(So.$$.fragment),vr=g(),_e=r("p"),$r=d("The "),Jo=r("a"),yr=d("YosoForQuestionAnswering"),Tr=d(" forward method, overrides the "),Bt=r("code"),Yr=d("__call__"),Mr=d(" special method."),xr=g(),w(Re.$$.fragment),Fr=g(),w(Ve.$$.fragment),qr=g(),w(Ge.$$.fragment),this.h()},l(o){const m=ji('[data-svelte="svelte-1phssyn"]',document.head);n=i(m,"META",{name:!0,content:!0}),m.forEach(t),u=_(o),a=i(o,"H1",{class:!0});var Po=l(a);p=i(Po,"A",{id:!0,class:!0,href:!0});var Rt=l(p);k=i(Rt,"SPAN",{});var Vt=l(k);v(s.$$.fragment,Vt),Vt.forEach(t),Rt.forEach(t),h=_(Po),x=i(Po,"SPAN",{});var Gt=l(x);Hs=c(Gt,"YOSO"),Gt.forEach(t),Po.forEach(t),is=_(o),Z=i(o,"H2",{class:!0});var Lo=l(Z);ve=i(Lo,"A",{id:!0,class:!0,href:!0});var Kt=l(ve);gt=i(Kt,"SPAN",{});var Jt=l(gt);v(oo.$$.fragment,Jt),Jt.forEach(t),Kt.forEach(t),Qs=_(Lo),_t=i(Lo,"SPAN",{});var Zt=l(_t);Us=c(Zt,"Overview"),Zt.forEach(t),Lo.forEach(t),ls=_(o),X=i(o,"P",{});var Ke=l(X);Bs=c(Ke,"The YOSO model was proposed in "),to=i(Ke,"A",{href:!0,rel:!0});var Xt=l(to);Rs=c(Xt,"You Only Sample (Almost) Once: Linear Cost Self-Attention Via Bernoulli Sampling"),Xt.forEach(t),Vs=i(Ke,"BR",{}),Gs=c(Ke,`
by Zhanpeng Zeng, Yunyang Xiong, Sathya N. Ravi, Shailesh Acharya, Glenn Fung, Vikas Singh. YOSO approximates standard softmax self-attention
via a Bernoulli sampling scheme based on Locality Sensitive Hashing (LSH). In principle, all the Bernoulli random variables can be sampled with
a single hash.`),Ke.forEach(t),ds=_(o),No=i(o,"P",{});var es=l(No);Ks=c(es,"The abstract from the paper is the following:"),es.forEach(t),cs=_(o),Io=i(o,"P",{});var os=l(Io);bt=i(os,"EM",{});var ts=l(bt);Js=c(ts,`Transformer-based models are widely used in natural language processing (NLP). Central to the transformer model is
the self-attention mechanism, which captures the interactions of token pairs in the input sequences and depends quadratically
on the sequence length. Training such models on longer sequences is expensive. In this paper, we show that a Bernoulli sampling
attention mechanism based on Locality Sensitive Hashing (LSH), decreases the quadratic complexity of such models to linear.
We bypass the quadratic cost by considering self-attention as a sum of individual tokens associated with Bernoulli random
variables that can, in principle, be sampled at once by a single hash (although in practice, this number may be a small constant).
This leads to an efficient sampling scheme to estimate self-attention which relies on specific modifications of
LSH (to enable deployment on GPU architectures). We evaluate our algorithm on the GLUE benchmark with standard 512 sequence
length where we see favorable performance relative to a standard pretrained Transformer. On the Long Range Arena (LRA) benchmark,
for evaluating performance on long sequences, our method achieves results consistent with softmax self-attention but with sizable
speed-ups and memory savings and often outperforms other efficient self-attention methods. Our code is available at this https URL`),ts.forEach(t),os.forEach(t),ps=_(o),Do=i(o,"P",{});var ss=l(Do);Zs=c(ss,"Tips:"),ss.forEach(t),hs=_(o),R=i(o,"UL",{});var be=l(R);kt=i(be,"LI",{});var ns=l(kt);Xs=c(ns,`The YOSO attention algorithm is implemented through custom CUDA kernels, functions written in CUDA C++ that can be executed multiple times
in parallel on a GPU.`),ns.forEach(t),en=_(be),ee=i(be,"LI",{});var ke=l(ee);on=c(ke,"The kernels provide a "),wt=i(ke,"CODE",{});var as=l(wt);tn=c(as,"fast_hash"),as.forEach(t),sn=c(ke,` function, which approximates the random projections of the queries and keys using the Fast Hadamard Transform. Using these
hash codes, the `),vt=i(ke,"CODE",{});var rs=l(vt);nn=c(rs,"lsh_cumulation"),rs.forEach(t),an=c(ke," function approximates self-attention via LSH-based Bernoulli sampling."),ke.forEach(t),rn=_(be),oe=i(be,"LI",{});var Zo=l(oe);ln=c(Zo,"To use the custom kernels, the user should set "),$t=i(Zo,"CODE",{});var jr=l($t);dn=c(jr,"config.use_expectation = False"),jr.forEach(t),cn=c(Zo,`. To ensure that the kernels are compiled successfully,
the user must install the correct version of PyTorch and cudatoolkit. By default, `),yt=i(Zo,"CODE",{});var Cr=l(yt);pn=c(Cr,"config.use_expectation = True"),Cr.forEach(t),hn=c(Zo,`, which uses YOSO-E and
does not require compiling CUDA kernels.`),Zo.forEach(t),be.forEach(t),ms=_(o),$e=i(o,"IMG",{src:!0,alt:!0,width:!0}),us=_(o),ye=i(o,"SMALL",{});var js=l(ye);mn=c(js,"YOSO Attention Algorithm. Taken from the "),Wo=i(js,"A",{href:!0});var Or=l(Wo);un=c(Or,"original paper"),Or.forEach(t),fn=c(js,"."),js.forEach(t),fs=_(o),V=i(o,"P",{});var Xo=l(V);gn=c(Xo,"This model was contributed by "),so=i(Xo,"A",{href:!0,rel:!0});var Ar=l(so);_n=c(Ar,"novice03"),Ar.forEach(t),bn=c(Xo,". The original code can be found "),no=i(Xo,"A",{href:!0,rel:!0});var Er=l(no);kn=c(Er,"here"),Er.forEach(t),wn=c(Xo,"."),Xo.forEach(t),gs=_(o),te=i(o,"H2",{class:!0});var Cs=l(te);Te=i(Cs,"A",{id:!0,class:!0,href:!0});var Sr=l(Te);Tt=i(Sr,"SPAN",{});var Pr=l(Tt);v(ao.$$.fragment,Pr),Pr.forEach(t),Sr.forEach(t),vn=_(Cs),Yt=i(Cs,"SPAN",{});var Lr=l(Yt);$n=c(Lr,"YosoConfig"),Lr.forEach(t),Cs.forEach(t),_s=_(o),O=i(o,"DIV",{class:!0});var Je=l(O);v(ro.$$.fragment,Je),yn=_(Je),se=i(Je,"P",{});var et=l(se);Tn=c(et,"This is the configuration class to store the configuration of a "),Ho=i(et,"A",{href:!0});var Nr=l(Ho);Yn=c(Nr,"YosoModel"),Nr.forEach(t),Mn=c(et,`. It is used to instantiate an YOSO
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the YOSO
`),io=i(et,"A",{href:!0,rel:!0});var Ir=l(io);xn=c(Ir,"uw-madison/yoso-4096"),Ir.forEach(t),Fn=c(et," architecture."),et.forEach(t),qn=_(Je),ne=i(Je,"P",{});var ot=l(ne);zn=c(ot,"Configuration objects inherit from "),Qo=i(ot,"A",{href:!0});var Dr=l(Qo);jn=c(Dr,"PretrainedConfig"),Dr.forEach(t),Cn=c(ot,` and can be used to control the model outputs. Read the
documentation from `),Uo=i(ot,"A",{href:!0});var Wr=l(Uo);On=c(Wr,"PretrainedConfig"),Wr.forEach(t),An=c(ot," for more information."),ot.forEach(t),En=_(Je),v(Ye.$$.fragment,Je),Je.forEach(t),bs=_(o),ae=i(o,"H2",{class:!0});var Os=l(ae);Me=i(Os,"A",{id:!0,class:!0,href:!0});var Hr=l(Me);Mt=i(Hr,"SPAN",{});var Qr=l(Mt);v(lo.$$.fragment,Qr),Qr.forEach(t),Hr.forEach(t),Sn=_(Os),xt=i(Os,"SPAN",{});var Ur=l(xt);Pn=c(Ur,"YosoModel"),Ur.forEach(t),Os.forEach(t),ks=_(o),I=i(o,"DIV",{class:!0});var tt=l(I);v(co.$$.fragment,tt),Ln=_(tt),po=i(tt,"P",{});var As=l(po);Nn=c(As,`The bare YOSO Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ho=i(As,"A",{href:!0,rel:!0});var Br=l(ho);In=c(Br,"torch.nn.Module"),Br.forEach(t),Dn=c(As,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),As.forEach(t),Wn=_(tt),L=i(tt,"DIV",{class:!0});var Ze=l(L);v(mo.$$.fragment,Ze),Hn=_(Ze),re=i(Ze,"P",{});var st=l(re);Qn=c(st,"The "),Bo=i(st,"A",{href:!0});var Rr=l(Bo);Un=c(Rr,"YosoModel"),Rr.forEach(t),Bn=c(st," forward method, overrides the "),Ft=i(st,"CODE",{});var Vr=l(Ft);Rn=c(Vr,"__call__"),Vr.forEach(t),Vn=c(st," special method."),st.forEach(t),Gn=_(Ze),v(xe.$$.fragment,Ze),Kn=_(Ze),v(Fe.$$.fragment,Ze),Ze.forEach(t),tt.forEach(t),ws=_(o),ie=i(o,"H2",{class:!0});var Es=l(ie);qe=i(Es,"A",{id:!0,class:!0,href:!0});var Gr=l(qe);qt=i(Gr,"SPAN",{});var Kr=l(qt);v(uo.$$.fragment,Kr),Kr.forEach(t),Gr.forEach(t),Jn=_(Es),zt=i(Es,"SPAN",{});var Jr=l(zt);Zn=c(Jr,"YosoForMaskedLM"),Jr.forEach(t),Es.forEach(t),vs=_(o),D=i(o,"DIV",{class:!0});var nt=l(D);v(fo.$$.fragment,nt),Xn=_(nt),le=i(nt,"P",{});var at=l(le);ea=c(at,"YOSO Model with a "),jt=i(at,"CODE",{});var Zr=l(jt);oa=c(Zr,"language modeling"),Zr.forEach(t),ta=c(at,` head on top.
This model is a PyTorch `),go=i(at,"A",{href:!0,rel:!0});var Xr=l(go);sa=c(Xr,"torch.nn.Module"),Xr.forEach(t),na=c(at,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),at.forEach(t),aa=_(nt),q=i(nt,"DIV",{class:!0});var G=l(q);v(_o.$$.fragment,G),ra=_(G),de=i(G,"P",{});var rt=l(de);ia=c(rt,"The "),Ro=i(rt,"A",{href:!0});var ei=l(Ro);la=c(ei,"YosoForMaskedLM"),ei.forEach(t),da=c(rt," forward method, overrides the "),Ct=i(rt,"CODE",{});var oi=l(Ct);ca=c(oi,"__call__"),oi.forEach(t),pa=c(rt," special method."),rt.forEach(t),ha=_(G),v(ze.$$.fragment,G),ma=_(G),v(je.$$.fragment,G),ua=_(G),v(Ce.$$.fragment,G),G.forEach(t),nt.forEach(t),$s=_(o),ce=i(o,"H2",{class:!0});var Ss=l(ce);Oe=i(Ss,"A",{id:!0,class:!0,href:!0});var ti=l(Oe);Ot=i(ti,"SPAN",{});var si=l(Ot);v(bo.$$.fragment,si),si.forEach(t),ti.forEach(t),fa=_(Ss),At=i(Ss,"SPAN",{});var ni=l(At);ga=c(ni,"YosoForSequenceClassification"),ni.forEach(t),Ss.forEach(t),ys=_(o),W=i(o,"DIV",{class:!0});var it=l(W);v(ko.$$.fragment,it),_a=_(it),wo=i(it,"P",{});var Ps=l(wo);ba=c(Ps,`YOSO Model transformer with a sequence classification/regression head on top (a linear layer on top of
the pooled output) e.g. for GLUE tasks.
This model is a PyTorch `),vo=i(Ps,"A",{href:!0,rel:!0});var ai=l(vo);ka=c(ai,"torch.nn.Module"),ai.forEach(t),wa=c(Ps,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ps.forEach(t),va=_(it),F=i(it,"DIV",{class:!0});var C=l(F);v($o.$$.fragment,C),$a=_(C),pe=i(C,"P",{});var lt=l(pe);ya=c(lt,"The "),Vo=i(lt,"A",{href:!0});var ri=l(Vo);Ta=c(ri,"YosoForSequenceClassification"),ri.forEach(t),Ya=c(lt," forward method, overrides the "),Et=i(lt,"CODE",{});var ii=l(Et);Ma=c(ii,"__call__"),ii.forEach(t),xa=c(lt," special method."),lt.forEach(t),Fa=_(C),v(Ae.$$.fragment,C),qa=_(C),v(Ee.$$.fragment,C),za=_(C),v(Se.$$.fragment,C),ja=_(C),v(Pe.$$.fragment,C),Ca=_(C),v(Le.$$.fragment,C),C.forEach(t),it.forEach(t),Ts=_(o),he=i(o,"H2",{class:!0});var Ls=l(he);Ne=i(Ls,"A",{id:!0,class:!0,href:!0});var li=l(Ne);St=i(li,"SPAN",{});var di=l(St);v(yo.$$.fragment,di),di.forEach(t),li.forEach(t),Oa=_(Ls),Pt=i(Ls,"SPAN",{});var ci=l(Pt);Aa=c(ci,"YosoForMultipleChoice"),ci.forEach(t),Ls.forEach(t),Ys=_(o),H=i(o,"DIV",{class:!0});var dt=l(H);v(To.$$.fragment,dt),Ea=_(dt),Yo=i(dt,"P",{});var Ns=l(Yo);Sa=c(Ns,`YOSO Model with a multiple choice classification head on top (a linear layer on top of
the pooled output and a softmax) e.g. for RocStories/SWAG tasks.
This model is a PyTorch `),Mo=i(Ns,"A",{href:!0,rel:!0});var pi=l(Mo);Pa=c(pi,"torch.nn.Module"),pi.forEach(t),La=c(Ns,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ns.forEach(t),Na=_(dt),N=i(dt,"DIV",{class:!0});var Xe=l(N);v(xo.$$.fragment,Xe),Ia=_(Xe),me=i(Xe,"P",{});var ct=l(me);Da=c(ct,"The "),Go=i(ct,"A",{href:!0});var hi=l(Go);Wa=c(hi,"YosoForMultipleChoice"),hi.forEach(t),Ha=c(ct," forward method, overrides the "),Lt=i(ct,"CODE",{});var mi=l(Lt);Qa=c(mi,"__call__"),mi.forEach(t),Ua=c(ct," special method."),ct.forEach(t),Ba=_(Xe),v(Ie.$$.fragment,Xe),Ra=_(Xe),v(De.$$.fragment,Xe),Xe.forEach(t),dt.forEach(t),Ms=_(o),ue=i(o,"H2",{class:!0});var Is=l(ue);We=i(Is,"A",{id:!0,class:!0,href:!0});var ui=l(We);Nt=i(ui,"SPAN",{});var fi=l(Nt);v(Fo.$$.fragment,fi),fi.forEach(t),ui.forEach(t),Va=_(Is),It=i(Is,"SPAN",{});var gi=l(It);Ga=c(gi,"YosoForTokenClassification"),gi.forEach(t),Is.forEach(t),xs=_(o),Q=i(o,"DIV",{class:!0});var pt=l(Q);v(qo.$$.fragment,pt),Ka=_(pt),zo=i(pt,"P",{});var Ds=l(zo);Ja=c(Ds,`YOSO Model with a token classification head on top (a linear layer on top of
the hidden-states output) e.g. for Named-Entity-Recognition (NER) tasks.
This model is a PyTorch `),jo=i(Ds,"A",{href:!0,rel:!0});var _i=l(jo);Za=c(_i,"torch.nn.Module"),_i.forEach(t),Xa=c(Ds,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ds.forEach(t),er=_(pt),z=i(pt,"DIV",{class:!0});var K=l(z);v(Co.$$.fragment,K),or=_(K),fe=i(K,"P",{});var ht=l(fe);tr=c(ht,"The "),Ko=i(ht,"A",{href:!0});var bi=l(Ko);sr=c(bi,"YosoForTokenClassification"),bi.forEach(t),nr=c(ht," forward method, overrides the "),Dt=i(ht,"CODE",{});var ki=l(Dt);ar=c(ki,"__call__"),ki.forEach(t),rr=c(ht," special method."),ht.forEach(t),ir=_(K),v(He.$$.fragment,K),lr=_(K),v(Qe.$$.fragment,K),dr=_(K),v(Ue.$$.fragment,K),K.forEach(t),pt.forEach(t),Fs=_(o),ge=i(o,"H2",{class:!0});var Ws=l(ge);Be=i(Ws,"A",{id:!0,class:!0,href:!0});var wi=l(Be);Wt=i(wi,"SPAN",{});var vi=l(Wt);v(Oo.$$.fragment,vi),vi.forEach(t),wi.forEach(t),cr=_(Ws),Ht=i(Ws,"SPAN",{});var $i=l(Ht);pr=c($i,"YosoForQuestionAnswering"),$i.forEach(t),Ws.forEach(t),qs=_(o),U=i(o,"DIV",{class:!0});var mt=l(U);v(Ao.$$.fragment,mt),hr=_(mt),B=i(mt,"P",{});var eo=l(B);mr=c(eo,`YOSO Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Qt=i(eo,"CODE",{});var yi=l(Qt);ur=c(yi,"span start logits"),yi.forEach(t),fr=c(eo," and "),Ut=i(eo,"CODE",{});var Ti=l(Ut);gr=c(Ti,"span end logits"),Ti.forEach(t),_r=c(eo,`).
This model is a PyTorch `),Eo=i(eo,"A",{href:!0,rel:!0});var Yi=l(Eo);br=c(Yi,"torch.nn.Module"),Yi.forEach(t),kr=c(eo,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),eo.forEach(t),wr=_(mt),j=i(mt,"DIV",{class:!0});var J=l(j);v(So.$$.fragment,J),vr=_(J),_e=i(J,"P",{});var ut=l(_e);$r=c(ut,"The "),Jo=i(ut,"A",{href:!0});var Mi=l(Jo);yr=c(Mi,"YosoForQuestionAnswering"),Mi.forEach(t),Tr=c(ut," forward method, overrides the "),Bt=i(ut,"CODE",{});var xi=l(Bt);Yr=c(xi,"__call__"),xi.forEach(t),Mr=c(ut," special method."),ut.forEach(t),xr=_(J),v(Re.$$.fragment,J),Fr=_(J),v(Ve.$$.fragment,J),qr=_(J),v(Ge.$$.fragment,J),J.forEach(t),mt.forEach(t),this.h()},h(){f(n,"name","hf:doc:metadata"),f(n,"content",JSON.stringify(el)),f(p,"id","yoso"),f(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(p,"href","#yoso"),f(a,"class","relative group"),f(ve,"id","overview"),f(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ve,"href","#overview"),f(Z,"class","relative group"),f(to,"href","https://arxiv.org/abs/2111.09714"),f(to,"rel","nofollow"),Ci($e.src,zr="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/yoso_architecture.jpg")||f($e,"src",zr),f($e,"alt","drawing"),f($e,"width","600"),f(Wo,"href","https://arxiv.org/abs/2111.09714"),f(so,"href","https://huggingface.co/novice03"),f(so,"rel","nofollow"),f(no,"href","https://github.com/mlpen/YOSO"),f(no,"rel","nofollow"),f(Te,"id","transformers.YosoConfig"),f(Te,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Te,"href","#transformers.YosoConfig"),f(te,"class","relative group"),f(Ho,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoModel"),f(io,"href","https://huggingface.co/uw-madison/yoso-4096"),f(io,"rel","nofollow"),f(Qo,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(Uo,"href","/docs/transformers/v4.21.1/en/main_classes/configuration#transformers.PretrainedConfig"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Me,"id","transformers.YosoModel"),f(Me,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Me,"href","#transformers.YosoModel"),f(ae,"class","relative group"),f(ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ho,"rel","nofollow"),f(Bo,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoModel"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(I,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(qe,"id","transformers.YosoForMaskedLM"),f(qe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(qe,"href","#transformers.YosoForMaskedLM"),f(ie,"class","relative group"),f(go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(go,"rel","nofollow"),f(Ro,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoForMaskedLM"),f(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"id","transformers.YosoForSequenceClassification"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#transformers.YosoForSequenceClassification"),f(ce,"class","relative group"),f(vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vo,"rel","nofollow"),f(Vo,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoForSequenceClassification"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"id","transformers.YosoForMultipleChoice"),f(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ne,"href","#transformers.YosoForMultipleChoice"),f(he,"class","relative group"),f(Mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Mo,"rel","nofollow"),f(Go,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoForMultipleChoice"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"id","transformers.YosoForTokenClassification"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#transformers.YosoForTokenClassification"),f(ue,"class","relative group"),f(jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(jo,"rel","nofollow"),f(Ko,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoForTokenClassification"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"id","transformers.YosoForQuestionAnswering"),f(Be,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Be,"href","#transformers.YosoForQuestionAnswering"),f(ge,"class","relative group"),f(Eo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Eo,"rel","nofollow"),f(Jo,"href","/docs/transformers/v4.21.1/en/model_doc/yoso#transformers.YosoForQuestionAnswering"),f(j,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,n),b(o,u,m),b(o,a,m),e(a,p),e(p,k),$(s,k,null),e(a,h),e(a,x),e(x,Hs),b(o,is,m),b(o,Z,m),e(Z,ve),e(ve,gt),$(oo,gt,null),e(Z,Qs),e(Z,_t),e(_t,Us),b(o,ls,m),b(o,X,m),e(X,Bs),e(X,to),e(to,Rs),e(X,Vs),e(X,Gs),b(o,ds,m),b(o,No,m),e(No,Ks),b(o,cs,m),b(o,Io,m),e(Io,bt),e(bt,Js),b(o,ps,m),b(o,Do,m),e(Do,Zs),b(o,hs,m),b(o,R,m),e(R,kt),e(kt,Xs),e(R,en),e(R,ee),e(ee,on),e(ee,wt),e(wt,tn),e(ee,sn),e(ee,vt),e(vt,nn),e(ee,an),e(R,rn),e(R,oe),e(oe,ln),e(oe,$t),e($t,dn),e(oe,cn),e(oe,yt),e(yt,pn),e(oe,hn),b(o,ms,m),b(o,$e,m),b(o,us,m),b(o,ye,m),e(ye,mn),e(ye,Wo),e(Wo,un),e(ye,fn),b(o,fs,m),b(o,V,m),e(V,gn),e(V,so),e(so,_n),e(V,bn),e(V,no),e(no,kn),e(V,wn),b(o,gs,m),b(o,te,m),e(te,Te),e(Te,Tt),$(ao,Tt,null),e(te,vn),e(te,Yt),e(Yt,$n),b(o,_s,m),b(o,O,m),$(ro,O,null),e(O,yn),e(O,se),e(se,Tn),e(se,Ho),e(Ho,Yn),e(se,Mn),e(se,io),e(io,xn),e(se,Fn),e(O,qn),e(O,ne),e(ne,zn),e(ne,Qo),e(Qo,jn),e(ne,Cn),e(ne,Uo),e(Uo,On),e(ne,An),e(O,En),$(Ye,O,null),b(o,bs,m),b(o,ae,m),e(ae,Me),e(Me,Mt),$(lo,Mt,null),e(ae,Sn),e(ae,xt),e(xt,Pn),b(o,ks,m),b(o,I,m),$(co,I,null),e(I,Ln),e(I,po),e(po,Nn),e(po,ho),e(ho,In),e(po,Dn),e(I,Wn),e(I,L),$(mo,L,null),e(L,Hn),e(L,re),e(re,Qn),e(re,Bo),e(Bo,Un),e(re,Bn),e(re,Ft),e(Ft,Rn),e(re,Vn),e(L,Gn),$(xe,L,null),e(L,Kn),$(Fe,L,null),b(o,ws,m),b(o,ie,m),e(ie,qe),e(qe,qt),$(uo,qt,null),e(ie,Jn),e(ie,zt),e(zt,Zn),b(o,vs,m),b(o,D,m),$(fo,D,null),e(D,Xn),e(D,le),e(le,ea),e(le,jt),e(jt,oa),e(le,ta),e(le,go),e(go,sa),e(le,na),e(D,aa),e(D,q),$(_o,q,null),e(q,ra),e(q,de),e(de,ia),e(de,Ro),e(Ro,la),e(de,da),e(de,Ct),e(Ct,ca),e(de,pa),e(q,ha),$(ze,q,null),e(q,ma),$(je,q,null),e(q,ua),$(Ce,q,null),b(o,$s,m),b(o,ce,m),e(ce,Oe),e(Oe,Ot),$(bo,Ot,null),e(ce,fa),e(ce,At),e(At,ga),b(o,ys,m),b(o,W,m),$(ko,W,null),e(W,_a),e(W,wo),e(wo,ba),e(wo,vo),e(vo,ka),e(wo,wa),e(W,va),e(W,F),$($o,F,null),e(F,$a),e(F,pe),e(pe,ya),e(pe,Vo),e(Vo,Ta),e(pe,Ya),e(pe,Et),e(Et,Ma),e(pe,xa),e(F,Fa),$(Ae,F,null),e(F,qa),$(Ee,F,null),e(F,za),$(Se,F,null),e(F,ja),$(Pe,F,null),e(F,Ca),$(Le,F,null),b(o,Ts,m),b(o,he,m),e(he,Ne),e(Ne,St),$(yo,St,null),e(he,Oa),e(he,Pt),e(Pt,Aa),b(o,Ys,m),b(o,H,m),$(To,H,null),e(H,Ea),e(H,Yo),e(Yo,Sa),e(Yo,Mo),e(Mo,Pa),e(Yo,La),e(H,Na),e(H,N),$(xo,N,null),e(N,Ia),e(N,me),e(me,Da),e(me,Go),e(Go,Wa),e(me,Ha),e(me,Lt),e(Lt,Qa),e(me,Ua),e(N,Ba),$(Ie,N,null),e(N,Ra),$(De,N,null),b(o,Ms,m),b(o,ue,m),e(ue,We),e(We,Nt),$(Fo,Nt,null),e(ue,Va),e(ue,It),e(It,Ga),b(o,xs,m),b(o,Q,m),$(qo,Q,null),e(Q,Ka),e(Q,zo),e(zo,Ja),e(zo,jo),e(jo,Za),e(zo,Xa),e(Q,er),e(Q,z),$(Co,z,null),e(z,or),e(z,fe),e(fe,tr),e(fe,Ko),e(Ko,sr),e(fe,nr),e(fe,Dt),e(Dt,ar),e(fe,rr),e(z,ir),$(He,z,null),e(z,lr),$(Qe,z,null),e(z,dr),$(Ue,z,null),b(o,Fs,m),b(o,ge,m),e(ge,Be),e(Be,Wt),$(Oo,Wt,null),e(ge,cr),e(ge,Ht),e(Ht,pr),b(o,qs,m),b(o,U,m),$(Ao,U,null),e(U,hr),e(U,B),e(B,mr),e(B,Qt),e(Qt,ur),e(B,fr),e(B,Ut),e(Ut,gr),e(B,_r),e(B,Eo),e(Eo,br),e(B,kr),e(U,wr),e(U,j),$(So,j,null),e(j,vr),e(j,_e),e(_e,$r),e(_e,Jo),e(Jo,yr),e(_e,Tr),e(_e,Bt),e(Bt,Yr),e(_e,Mr),e(j,xr),$(Re,j,null),e(j,Fr),$(Ve,j,null),e(j,qr),$(Ge,j,null),zs=!0},p(o,[m]){const Po={};m&2&&(Po.$$scope={dirty:m,ctx:o}),Ye.$set(Po);const Rt={};m&2&&(Rt.$$scope={dirty:m,ctx:o}),xe.$set(Rt);const Vt={};m&2&&(Vt.$$scope={dirty:m,ctx:o}),Fe.$set(Vt);const Gt={};m&2&&(Gt.$$scope={dirty:m,ctx:o}),ze.$set(Gt);const Lo={};m&2&&(Lo.$$scope={dirty:m,ctx:o}),je.$set(Lo);const Kt={};m&2&&(Kt.$$scope={dirty:m,ctx:o}),Ce.$set(Kt);const Jt={};m&2&&(Jt.$$scope={dirty:m,ctx:o}),Ae.$set(Jt);const Zt={};m&2&&(Zt.$$scope={dirty:m,ctx:o}),Ee.$set(Zt);const Ke={};m&2&&(Ke.$$scope={dirty:m,ctx:o}),Se.$set(Ke);const Xt={};m&2&&(Xt.$$scope={dirty:m,ctx:o}),Pe.$set(Xt);const es={};m&2&&(es.$$scope={dirty:m,ctx:o}),Le.$set(es);const os={};m&2&&(os.$$scope={dirty:m,ctx:o}),Ie.$set(os);const ts={};m&2&&(ts.$$scope={dirty:m,ctx:o}),De.$set(ts);const ss={};m&2&&(ss.$$scope={dirty:m,ctx:o}),He.$set(ss);const be={};m&2&&(be.$$scope={dirty:m,ctx:o}),Qe.$set(be);const ns={};m&2&&(ns.$$scope={dirty:m,ctx:o}),Ue.$set(ns);const ke={};m&2&&(ke.$$scope={dirty:m,ctx:o}),Re.$set(ke);const as={};m&2&&(as.$$scope={dirty:m,ctx:o}),Ve.$set(as);const rs={};m&2&&(rs.$$scope={dirty:m,ctx:o}),Ge.$set(rs)},i(o){zs||(y(s.$$.fragment,o),y(oo.$$.fragment,o),y(ao.$$.fragment,o),y(ro.$$.fragment,o),y(Ye.$$.fragment,o),y(lo.$$.fragment,o),y(co.$$.fragment,o),y(mo.$$.fragment,o),y(xe.$$.fragment,o),y(Fe.$$.fragment,o),y(uo.$$.fragment,o),y(fo.$$.fragment,o),y(_o.$$.fragment,o),y(ze.$$.fragment,o),y(je.$$.fragment,o),y(Ce.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y($o.$$.fragment,o),y(Ae.$$.fragment,o),y(Ee.$$.fragment,o),y(Se.$$.fragment,o),y(Pe.$$.fragment,o),y(Le.$$.fragment,o),y(yo.$$.fragment,o),y(To.$$.fragment,o),y(xo.$$.fragment,o),y(Ie.$$.fragment,o),y(De.$$.fragment,o),y(Fo.$$.fragment,o),y(qo.$$.fragment,o),y(Co.$$.fragment,o),y(He.$$.fragment,o),y(Qe.$$.fragment,o),y(Ue.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(So.$$.fragment,o),y(Re.$$.fragment,o),y(Ve.$$.fragment,o),y(Ge.$$.fragment,o),zs=!0)},o(o){T(s.$$.fragment,o),T(oo.$$.fragment,o),T(ao.$$.fragment,o),T(ro.$$.fragment,o),T(Ye.$$.fragment,o),T(lo.$$.fragment,o),T(co.$$.fragment,o),T(mo.$$.fragment,o),T(xe.$$.fragment,o),T(Fe.$$.fragment,o),T(uo.$$.fragment,o),T(fo.$$.fragment,o),T(_o.$$.fragment,o),T(ze.$$.fragment,o),T(je.$$.fragment,o),T(Ce.$$.fragment,o),T(bo.$$.fragment,o),T(ko.$$.fragment,o),T($o.$$.fragment,o),T(Ae.$$.fragment,o),T(Ee.$$.fragment,o),T(Se.$$.fragment,o),T(Pe.$$.fragment,o),T(Le.$$.fragment,o),T(yo.$$.fragment,o),T(To.$$.fragment,o),T(xo.$$.fragment,o),T(Ie.$$.fragment,o),T(De.$$.fragment,o),T(Fo.$$.fragment,o),T(qo.$$.fragment,o),T(Co.$$.fragment,o),T(He.$$.fragment,o),T(Qe.$$.fragment,o),T(Ue.$$.fragment,o),T(Oo.$$.fragment,o),T(Ao.$$.fragment,o),T(So.$$.fragment,o),T(Re.$$.fragment,o),T(Ve.$$.fragment,o),T(Ge.$$.fragment,o),zs=!1},d(o){t(n),o&&t(u),o&&t(a),Y(s),o&&t(is),o&&t(Z),Y(oo),o&&t(ls),o&&t(X),o&&t(ds),o&&t(No),o&&t(cs),o&&t(Io),o&&t(ps),o&&t(Do),o&&t(hs),o&&t(R),o&&t(ms),o&&t($e),o&&t(us),o&&t(ye),o&&t(fs),o&&t(V),o&&t(gs),o&&t(te),Y(ao),o&&t(_s),o&&t(O),Y(ro),Y(Ye),o&&t(bs),o&&t(ae),Y(lo),o&&t(ks),o&&t(I),Y(co),Y(mo),Y(xe),Y(Fe),o&&t(ws),o&&t(ie),Y(uo),o&&t(vs),o&&t(D),Y(fo),Y(_o),Y(ze),Y(je),Y(Ce),o&&t($s),o&&t(ce),Y(bo),o&&t(ys),o&&t(W),Y(ko),Y($o),Y(Ae),Y(Ee),Y(Se),Y(Pe),Y(Le),o&&t(Ts),o&&t(he),Y(yo),o&&t(Ys),o&&t(H),Y(To),Y(xo),Y(Ie),Y(De),o&&t(Ms),o&&t(ue),Y(Fo),o&&t(xs),o&&t(Q),Y(qo),Y(Co),Y(He),Y(Qe),Y(Ue),o&&t(Fs),o&&t(ge),Y(Oo),o&&t(qs),o&&t(U),Y(Ao),Y(So),Y(Re),Y(Ve),Y(Ge)}}}const el={local:"yoso",sections:[{local:"overview",title:"Overview"},{local:"transformers.YosoConfig",title:"YosoConfig"},{local:"transformers.YosoModel",title:"YosoModel"},{local:"transformers.YosoForMaskedLM",title:"YosoForMaskedLM"},{local:"transformers.YosoForSequenceClassification",title:"YosoForSequenceClassification"},{local:"transformers.YosoForMultipleChoice",title:"YosoForMultipleChoice"},{local:"transformers.YosoForTokenClassification",title:"YosoForTokenClassification"},{local:"transformers.YosoForQuestionAnswering",title:"YosoForQuestionAnswering"}],title:"YOSO"};function ol(M){return Oi(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ll extends Fi{constructor(n){super();qi(this,n,ol,Xi,zi,{})}}export{ll as default,el as metadata};
