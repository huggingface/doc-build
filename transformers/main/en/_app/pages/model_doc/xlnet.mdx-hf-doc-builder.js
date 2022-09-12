import{S as tv,i as ov,s as nv,e as a,k as c,w as T,t as n,M as sv,c as r,d as t,m as p,a as i,x as w,h as s,b as f,G as e,g,y as v,q as $,o as N,B as L,v as av,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function rv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetConfig, XLNetModel

# Initializing a XLNet configuration
configuration = XLNetConfig()

# Initializing a model from the configuration
model = XLNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetConfig, XLNetModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLNet configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function iv(X){let d,k,m,u,y;return u=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=n("sequence pair mask has the following format:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"sequence pair mask has the following format:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function lv(X){let d,k,m,u,y;return u=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=n("sequence pair mask has the following format:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"sequence pair mask has the following format:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function dv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function cv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetModel
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetModel.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function pv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function mv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetLMHeadModel
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-large-cased")
model = XLNetLMHeadModel.from_pretrained("xlnet-large-cased")

# We show how to setup inputs to predict a next token using a bi-directional context.
input_ids = torch.tensor(
    tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=False)
).unsqueeze(
    0
)  # We will predict the masked token
perm_mask = torch.zeros((1, input_ids.shape[1], input_ids.shape[1]), dtype=torch.float)
perm_mask[:, :, -1] = 1.0  # Previous tokens don't see last token
target_mapping = torch.zeros(
    (1, 1, input_ids.shape[1]), dtype=torch.float
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping)
next_token_logits = outputs[
    0
]  # Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]

# The same way can the XLNetLMHeadModel be used to be trained by standard auto-regressive language modeling.
input_ids = torch.tensor(
    tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=False)
).unsqueeze(
    0
)  # We will predict the masked token
labels = torch.tensor(tokenizer.encode("cute", add_special_tokens=False)).unsqueeze(0)
assert labels.shape[0] == 1, "only one word will be predicted"
perm_mask = torch.zeros((1, input_ids.shape[1], input_ids.shape[1]), dtype=torch.float)
perm_mask[
    :, :, -1
] = 1.0  # Previous tokens don't see last token as is done in standard auto-regressive lm training
target_mapping = torch.zeros(
    (1, 1, input_ids.shape[1]), dtype=torch.float
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping, labels=labels)
loss = outputs.loss
next_token_logits = (
    outputs.logits
)  # Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping)
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The same way can the XLNetLMHeadModel be used to be trained by standard auto-regressive language modeling.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(
<span class="hljs-meta">... </span>    tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)
<span class="hljs-meta">... </span>).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># We will predict the masked token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;cute&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> labels.shape[<span class="hljs-number">0</span>] == <span class="hljs-number">1</span>, <span class="hljs-string">&quot;only one word will be predicted&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = torch.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[
<span class="hljs-meta">... </span>    :, :, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token as is done in standard auto-regressive lm training</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = torch.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>]), dtype=torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, perm_mask=perm_mask, target_mapping=target_mapping, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = (
<span class="hljs-meta">... </span>    outputs.logits
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function hv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function uv(X){let d,k,m,u,y;return u=new De({props:{code:`import torch
from transformers import XLNetTokenizer, XLNetForSequenceClassification

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),k=n("Example of single-label classification:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example of single-label classification:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function fv(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function gv(X){let d,k,m,u,y;return u=new De({props:{code:`import torch
from transformers import XLNetTokenizer, XLNetForSequenceClassification

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForSequenceClassification.from_pretrained("xlnet-base-cased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),k=n("Example of multi-label classification:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function _v(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLNetForSequenceClassification.from_pretrained(
    "xlnet-base-cased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function kv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function bv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForMultipleChoice
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForMultipleChoice.from_pretrained("xlnet-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function yv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Tv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForTokenClassification
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForTokenClassification.from_pretrained("xlnet-base-cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function wv(X){let d,k;return d=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function vv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function $v(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnsweringSimple
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForQuestionAnsweringSimple.from_pretrained("xlnet-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Nv(X){let d,k;return d=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Lv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function xv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnswering
import torch

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = XLNetForQuestionAnswering.from_pretrained("xlnet-base-cased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])
outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)

loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, XLNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Fv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function Xv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function qv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetModel
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetModel.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetModel.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Mv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function zv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Ev(X){let d,k,m,u,y;return u=new De({props:{code:`import tensorflow as tf
import numpy as np
from transformers import XLNetTokenizer, TFXLNetLMHeadModel

tokenizer = XLNetTokenizer.from_pretrained("xlnet-large-cased")
model = TFXLNetLMHeadModel.from_pretrained("xlnet-large-cased")

# We show how to setup inputs to predict a next token using a bi-directional context.
input_ids = tf.constant(tokenizer.encode("Hello, my dog is very <mask>", add_special_tokens=True))[
    None, :
]  # We will predict the masked token

perm_mask = np.zeros((1, input_ids.shape[1], input_ids.shape[1]))
perm_mask[:, :, -1] = 1.0  # Previous tokens don't see last token

target_mapping = np.zeros(
    (1, 1, input_ids.shape[1])
)  # Shape [1, 1, seq_length] => let's predict one token
target_mapping[
    0, 0, -1
] = 1.0  # Our first (and only) prediction will be the last token of the sequence (the masked token)

outputs = model(
    input_ids,
    perm_mask=tf.constant(perm_mask, dtype=tf.float32),
    target_mapping=tf.constant(target_mapping, dtype=tf.float32),
)

next_token_logits = outputs[
    0
]  # Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlnet-large-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># We show how to setup inputs to predict a next token using a bi-directional context.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is very &lt;mask&gt;&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>))[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># We will predict the masked token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask = np.zeros((<span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>], input_ids.shape[<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>perm_mask[:, :, -<span class="hljs-number">1</span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Previous tokens don&#x27;t see last token</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping = np.zeros(
<span class="hljs-meta">... </span>    (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, input_ids.shape[<span class="hljs-number">1</span>])
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Shape [1, 1, seq_length] =&gt; let&#x27;s predict one token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_mapping[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, -<span class="hljs-number">1</span>
<span class="hljs-meta">... </span>] = <span class="hljs-number">1.0</span>  <span class="hljs-comment"># Our first (and only) prediction will be the last token of the sequence (the masked token)</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    perm_mask=tf.constant(perm_mask, dtype=tf.float32),
<span class="hljs-meta">... </span>    target_mapping=tf.constant(target_mapping, dtype=tf.float32),
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs[
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Cv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function jv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Ov(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForSequenceClassification
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForSequenceClassification.from_pretrained("xlnet-base-cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Pv(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLNetForSequenceClassification.from_pretrained("xlnet-base-cased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Av(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function Sv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Dv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForMultipleChoice
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForMultipleChoice.from_pretrained("xlnet-base-cased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Iv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function Hv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Qv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForTokenClassification
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForTokenClassification.from_pretrained("xlnet-base-cased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Wv(X){let d,k;return d=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Uv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),y=n(" accept two formats as input:"),l=c(),h=a("ul"),M=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=a("code"),ye=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),Te=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),we=n("fit()"),ue=n(" and "),V=a("code"),ve=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),z=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),R=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),Me=n(`Note that when creating models and layers with
`),O=a("a"),ze=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),y=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);M=r(se,"LI",{});var _e=i(M);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),B=r(q,"CODE",{});var Ve=i(B);ye=s(Ve,"model.fit()"),Ve.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);Te=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);we=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),V=r(q,"CODE",{});var Be=i(V);ve=s(Be,"predict()"),Be.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Re=i(K);de=s(Re,"Functional"),Re.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),z=r(b,"UL",{});var S=i(z);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),R=r(H,"CODE",{});var Ie=i(R);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);Me=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);ze=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,y),g(b,l,F),g(b,h,F),e(h,M),e(M,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,B),e(B,ye),e(x,he),e(x,Q),e(Q,Te),e(x,re),e(x,Y),e(Y,we),e(x,ue),e(x,V),e(V,ve),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,z,F),e(z,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,R),e(R,Le),e(z,xe),e(z,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(z,te),e(z,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,Me),e(j,O),e(O,ze),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(z),b&&t(oe),b&&t(j)}}}function Vv(X){let d,k,m,u,y;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var M=i(m);u=s(M,"Module"),M.forEach(t),y=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,y)},d(l){l&&t(d)}}}function Kv(X){let d,k,m,u,y;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLNetTokenizer.from_pretrained("xlnet-base-cased")
model = TFXLNetForQuestionAnsweringSimple.from_pretrained("xlnet-base-cased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLNetTokenizer, TFXLNetForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLNetTokenizer.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLNetForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlnet-base-cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),T(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),w(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),v(u,l,h),y=!0},p:Se,i(l){y||($(u.$$.fragment,l),y=!0)},o(l){N(u.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Bv(X){let d,k;return d=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(m){w(d.$$.fragment,m)},m(m,u){v(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Rv(X){let d,k,m,u,y,l,h,M,ke,me,D,ae,ee,x,be,B,ye,he,Q,Te,re,Y,we,ue,V,ve,fe,K,de,$e,ne,z,E,ge,P,ie,Ne,R,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,Me,O,ze,Ee,b,F,We,se,_e,Ue,q,Ve,Ke,Oe,Be,Re,S,H,je,Ie,W,Ye,He,Ce,Qe,U,Pe,pm,Pt,mm,Dr,hm,um,Ir,fm,gm,_s,_m,km,bm,no,ym,Hr,Tm,wm,Qr,vm,$m,Nm,tn,ec,so,on,tl,ks,Lm,ol,xm,tc,Ge,bs,Fm,ys,Xm,Ts,qm,Mm,zm,ws,Em,Wr,Cm,jm,Om,Ht,vs,Pm,nl,Am,Sm,$s,Ur,Dm,sl,Im,Hm,Vr,Qm,al,Wm,Um,nn,Ns,Vm,Ls,Km,rl,Bm,Rm,Ym,wt,xs,Gm,il,Jm,Zm,sn,eh,ao,th,ll,oh,nh,dl,sh,ah,rh,Kr,Fs,oc,ro,an,cl,Xs,ih,pl,lh,nc,it,qs,dh,io,ch,ml,ph,mh,Ms,hh,uh,fh,zs,gh,Br,_h,kh,bh,Qt,Es,yh,hl,Th,wh,Cs,Rr,vh,ul,$h,Nh,Yr,Lh,fl,xh,Fh,vt,js,Xh,gl,qh,Mh,rn,zh,lo,Eh,_l,Ch,jh,kl,Oh,Ph,sc,co,ln,bl,Os,Ah,yl,Sh,ac,po,Ps,Dh,As,Ih,Gr,Hh,Qh,rc,mo,Ss,Wh,Ds,Uh,Jr,Vh,Kh,ic,ho,Is,Bh,Hs,Rh,Zr,Yh,Gh,lc,uo,Qs,Jh,Ws,Zh,ei,eu,tu,dc,fo,Us,ou,Vs,nu,Tl,su,au,cc,go,Ks,ru,Bs,iu,ti,lu,du,pc,_o,Rs,cu,Ys,pu,oi,mu,hu,mc,ko,Gs,uu,Js,fu,ni,gu,_u,hc,bo,Zs,ku,ea,bu,si,yu,Tu,uc,yo,ta,wu,oa,vu,ai,$u,Nu,fc,To,na,Lu,sa,xu,ri,Fu,Xu,gc,wo,aa,qu,ra,Mu,wl,zu,Eu,_c,vo,ia,Cu,la,ju,ii,Ou,Pu,kc,$o,dn,vl,da,Au,$l,Su,bc,lt,ca,Du,Nl,Iu,Hu,pa,Qu,li,Wu,Uu,Vu,ma,Ku,ha,Bu,Ru,Yu,$t,ua,Gu,No,Ju,di,Zu,ef,Ll,tf,of,nf,cn,sf,pn,yc,Lo,mn,xl,fa,af,Fl,rf,Tc,dt,ga,lf,Xl,df,cf,_a,pf,ci,mf,hf,uf,ka,ff,ba,gf,_f,kf,Nt,ya,bf,xo,yf,pi,Tf,wf,ql,vf,$f,Nf,hn,Lf,un,wc,Fo,fn,Ml,Ta,xf,zl,Ff,vc,ct,wa,Xf,El,qf,Mf,va,zf,mi,Ef,Cf,jf,$a,Of,Na,Pf,Af,Sf,et,La,Df,Xo,If,hi,Hf,Qf,Cl,Wf,Uf,Vf,gn,Kf,_n,Bf,kn,Rf,bn,Yf,yn,$c,qo,Tn,jl,xa,Gf,Ol,Jf,Nc,pt,Fa,Zf,Pl,eg,tg,Xa,og,ui,ng,sg,ag,qa,rg,Ma,ig,lg,dg,Lt,za,cg,Mo,pg,fi,mg,hg,Al,ug,fg,gg,wn,_g,vn,Lc,zo,$n,Sl,Ea,kg,Dl,bg,xc,mt,Ca,yg,Il,Tg,wg,ja,vg,gi,$g,Ng,Lg,Oa,xg,Pa,Fg,Xg,qg,ft,Aa,Mg,Eo,zg,_i,Eg,Cg,Hl,jg,Og,Pg,Nn,Ag,Ln,Sg,xn,Fc,Co,Fn,Ql,Sa,Dg,Wl,Ig,Xc,ht,Da,Hg,jo,Qg,Ul,Wg,Ug,Vl,Vg,Kg,Bg,Ia,Rg,ki,Yg,Gg,Jg,Ha,Zg,Qa,e_,t_,o_,gt,Wa,n_,Oo,s_,bi,a_,r_,Kl,i_,l_,d_,Xn,c_,qn,p_,Mn,qc,Po,zn,Bl,Ua,m_,Rl,h_,Mc,ut,Va,u_,Ao,f_,Yl,g_,__,Gl,k_,b_,y_,Ka,T_,yi,w_,v_,$_,Ba,N_,Ra,L_,x_,F_,xt,Ya,X_,So,q_,Ti,M_,z_,Jl,E_,C_,j_,En,O_,Cn,zc,Do,jn,Zl,Ga,P_,ed,A_,Ec,tt,Ja,S_,td,D_,I_,Za,H_,wi,Q_,W_,U_,er,V_,tr,K_,B_,R_,On,Y_,Ft,or,G_,Io,J_,vi,Z_,ek,od,tk,ok,nk,Pn,sk,An,Cc,Ho,Sn,nd,nr,ak,sd,rk,jc,ot,sr,ik,ad,lk,dk,ar,ck,$i,pk,mk,hk,rr,uk,ir,fk,gk,_k,Dn,kk,Xt,lr,bk,Qo,yk,Ni,Tk,wk,rd,vk,$k,Nk,In,Lk,Hn,Oc,Wo,Qn,id,dr,xk,ld,Fk,Pc,nt,cr,Xk,dd,qk,Mk,pr,zk,Li,Ek,Ck,jk,mr,Ok,hr,Pk,Ak,Sk,Wn,Dk,_t,ur,Ik,Uo,Hk,xi,Qk,Wk,cd,Uk,Vk,Kk,Un,Bk,Vn,Rk,Kn,Ac,Vo,Bn,pd,fr,Yk,md,Gk,Sc,st,gr,Jk,hd,Zk,eb,_r,tb,Fi,ob,nb,sb,kr,ab,br,rb,ib,lb,Rn,db,qt,yr,cb,Ko,pb,Xi,mb,hb,ud,ub,fb,gb,Yn,_b,Gn,Dc,Bo,Jn,fd,Tr,kb,gd,bb,Ic,at,wr,yb,_d,Tb,wb,vr,vb,qi,$b,Nb,Lb,$r,xb,Nr,Fb,Xb,qb,Zn,Mb,kt,Lr,zb,Ro,Eb,Mi,Cb,jb,kd,Ob,Pb,Ab,es,Sb,ts,Db,os,Hc,Yo,ns,bd,xr,Ib,yd,Hb,Qc,rt,Fr,Qb,Go,Wb,Td,Ub,Vb,wd,Kb,Bb,Rb,Xr,Yb,zi,Gb,Jb,Zb,qr,ey,Mr,ty,oy,ny,ss,sy,bt,zr,ay,Jo,ry,Ei,iy,ly,vd,dy,cy,py,as,my,rs,hy,is,Wc;return l=new Ze({}),x=new Ze({}),W=new Ze({}),Pe=new A({props:{name:"class transformers.XLNetConfig",anchor:"transformers.XLNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"d_model",val:" = 1024"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 16"},{name:"d_inner",val:" = 4096"},{name:"ff_activation",val:" = 'gelu'"},{name:"untie_r",val:" = True"},{name:"attn_type",val:" = 'bi'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"dropout",val:" = 0.1"},{name:"mem_len",val:" = 512"},{name:"reuse_len",val:" = None"},{name:"use_mems_eval",val:" = True"},{name:"use_mems_train",val:" = False"},{name:"bi_data",val:" = False"},{name:"clamp_len",val:" = -1"},{name:"same_length",val:" = False"},{name:"summary_type",val:" = 'last'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'tanh'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"pad_token_id",val:" = 5"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the XLNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> or <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLNetConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"d_model"},{anchor:"transformers.XLNetConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.XLNetConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.XLNetConfig.d_inner",description:`<strong>d_inner</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"d_inner"},{anchor:"transformers.XLNetConfig.ff_activation",description:`<strong>ff_activation</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the If string, <code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and
<code>&quot;gelu_new&quot;</code> are supported.`,name:"ff_activation"},{anchor:"transformers.XLNetConfig.untie_r",description:`<strong>untie_r</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to untie relative position biases`,name:"untie_r"},{anchor:"transformers.XLNetConfig.attn_type",description:`<strong>attn_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;bi&quot;</code>) &#x2014;
The attention type used by the model. Set <code>&quot;bi&quot;</code> for XLNet, <code>&quot;uni&quot;</code> for Transformer-XL.`,name:"attn_type"},{anchor:"transformers.XLNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLNetConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.XLNetConfig.mem_len",description:`<strong>mem_len</strong> (<code>int</code> or <code>None</code>, <em>optional</em>) &#x2014;
The number of tokens to cache. The key/value pairs that have already been pre-computed in a previous
forward pass won&#x2019;t be re-computed. See the
<a href="https://huggingface.co/transformers/quickstart.html#using-the-past" rel="nofollow">quickstart</a> for more information.`,name:"mem_len"},{anchor:"transformers.XLNetConfig.reuse_len",description:`<strong>reuse_len</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The number of tokens in the current batch to be cached and reused in the future.`,name:"reuse_len"},{anchor:"transformers.XLNetConfig.bi_data",description:`<strong>bi_data</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use bidirectional input pipeline. Usually set to <code>True</code> during pretraining and <code>False</code>
during finetuning.`,name:"bi_data"},{anchor:"transformers.XLNetConfig.clamp_len",description:`<strong>clamp_len</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
Clamp all relative distances larger than clamp_len. Setting this attribute to -1 means no clamping.`,name:"clamp_len"},{anchor:"transformers.XLNetConfig.same_length",description:`<strong>same_length</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the same attention length for each token.`,name:"same_length"},{anchor:"transformers.XLNetConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to &#x201C;last&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.XLNetConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.XLNetConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.XLNetConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>boo</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.XLNetConfig.summary_last_dropout",description:`<strong>summary_last_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_last_dropout"},{anchor:"transformers.XLNetConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.XLNetConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.XLNetConfig.use_mems_eval",description:`<strong>use_mems_eval</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in evaluation mode.`,name:"use_mems_eval"},{anchor:"transformers.XLNetConfig.use_mems_train",description:`<strong>use_mems_train</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should make use of the recurrent memory mechanism in train mode.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>For pretraining, it is recommended to set <code>use_mems_train</code> to <code>True</code>. For fine-tuning, it is recommended to
set <code>use_mems_train</code> to <code>False</code> as discussed
<a href="https://github.com/zihangdai/xlnet/issues/41#issuecomment-505102587" rel="nofollow">here</a>. If <code>use_mems_train</code> is set to
<code>True</code>, one has to make sure that the train batches are correctly pre-processed, <em>e.g.</em> <code>batch_1 = [[This line is], [This is the]]</code> and <code>batch_2 = [[ the first line], [ second line]]</code> and that all batches are of
equal size.</p>

					</div>`,name:"use_mems_train"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/configuration_xlnet.py#L32"}}),tn=new Ae({props:{anchor:"transformers.XLNetConfig.example",$$slots:{default:[rv]},$$scope:{ctx:X}}}),ks=new Ze({}),bs=new A({props:{name:"class transformers.XLNetTokenizer",anchor:"transformers.XLNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizer.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizer.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLNetTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L53"}}),vs=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L253",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.XLNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L278",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xs=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L306",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new Ae({props:{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[iv]},$$scope:{ctx:X}}}),Fs=new A({props:{name:"save_vocabulary",anchor:"transformers.XLNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet.py#L336"}}),Xs=new Ze({}),qs=new A({props:{name:"class transformers.XLNetTokenizerFast",anchor:"transformers.XLNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a .spm extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.XLNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.XLNetTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.XLNetTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.XLNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;sep&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;cls&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLNetTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;eop&gt;&quot;, &quot;&lt;eod&gt;&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLNetTokenizerFast.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L63"}}),Es=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L174",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new Ae({props:{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[lv]},$$scope:{ctx:X}}}),Os=new Ze({}),Ps=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L580"}}),Ss=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L614"}}),Is=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L651"}}),Qs=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L719"}}),Us=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L685"}}),Ks=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L755"}}),Rs=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_log_probs",description:`<strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.start_top_index",description:`<strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top config.start_n_top start token possibilities (beam-search).`,name:"start_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_log_probs",description:`<strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).`,name:"end_top_log_probs"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.end_top_index",description:`<strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).`,name:"end_top_index"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.cls_logits",description:`<strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) &#x2014;
Log probabilities for the <code>is_impossible</code> label of the answers.`,name:"cls_logits"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L792"}}),Gs=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"last_hidden_state"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L800"}}),Zs=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss (for next-token prediction).`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L834"}}),ta=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L871"}}),na=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L939"}}),aa=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L905"}}),ia=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.mems",description:`<strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.`,name:"mems"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L975"}}),da=new Ze({}),ca=new A({props:{name:"class transformers.XLNetModel",anchor:"transformers.XLNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L932"}}),ua=new A({props:{name:"forward",anchor:"transformers.XLNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1061",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) \u2014 Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new Je({props:{$$slots:{default:[dv]},$$scope:{ctx:X}}}),pn=new Ae({props:{anchor:"transformers.XLNetModel.forward.example",$$slots:{default:[cv]},$$scope:{ctx:X}}}),fa=new Ze({}),ga=new A({props:{name:"class transformers.XLNetLMHeadModel",anchor:"transformers.XLNetLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1298"}}),ya=new A({props:{name:"forward",anchor:"transformers.XLNetLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetLMHeadModel.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetLMHeadModel.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_predict)</code>, <em>optional</em>) &#x2014;
Labels for masked language modeling. <code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If
<code>target_mapping</code> is <code>None</code>, then <code>num_predict</code> corresponds to <code>sequence_length</code>.</p>
<p>The labels should correspond to the masked input words that should be predicted and depends on
<code>target_mapping</code>. Note in order to perform standard auto-regressive language modeling a <em><mask></mask></em> token has
to be added to the <code>input_ids</code> (see the <code>prepare_inputs_for_generation</code> function and examples below)</p>
<p>Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are ignored, the loss
is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new Je({props:{$$slots:{default:[pv]},$$scope:{ctx:X}}}),un=new Ae({props:{anchor:"transformers.XLNetLMHeadModel.forward.example",$$slots:{default:[mv]},$$scope:{ctx:X}}}),Ta=new Ze({}),wa=new A({props:{name:"class transformers.XLNetForSequenceClassification",anchor:"transformers.XLNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1502"}}),La=new A({props:{name:"forward",anchor:"transformers.XLNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForSequenceClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForSequenceClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1515",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Je({props:{$$slots:{default:[hv]},$$scope:{ctx:X}}}),_n=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example",$$slots:{default:[uv]},$$scope:{ctx:X}}}),kn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-2",$$slots:{default:[fv]},$$scope:{ctx:X}}}),bn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-3",$$slots:{default:[gv]},$$scope:{ctx:X}}}),yn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-4",$$slots:{default:[_v]},$$scope:{ctx:X}}}),xa=new Ze({}),Fa=new A({props:{name:"class transformers.XLNetForMultipleChoice",anchor:"transformers.XLNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1700"}}),za=new A({props:{name:"forward",anchor:"transformers.XLNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForMultipleChoice.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForMultipleChoice.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1711",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wn=new Je({props:{$$slots:{default:[kv]},$$scope:{ctx:X}}}),vn=new Ae({props:{anchor:"transformers.XLNetForMultipleChoice.forward.example",$$slots:{default:[bv]},$$scope:{ctx:X}}}),Ea=new Ze({}),Ca=new A({props:{name:"class transformers.XLNetForTokenClassification",anchor:"transformers.XLNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1612"}}),Aa=new A({props:{name:"forward",anchor:"transformers.XLNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForTokenClassification.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForTokenClassification.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1623",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Je({props:{$$slots:{default:[yv]},$$scope:{ctx:X}}}),Ln=new Ae({props:{anchor:"transformers.XLNetForTokenClassification.forward.example",$$slots:{default:[Tv]},$$scope:{ctx:X}}}),xn=new Ae({props:{anchor:"transformers.XLNetForTokenClassification.forward.example-2",$$slots:{default:[wv]},$$scope:{ctx:X}}}),Sa=new Ze({}),Da=new A({props:{name:"class transformers.XLNetForQuestionAnsweringSimple",anchor:"transformers.XLNetForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1804"}}),Wa=new A({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Je({props:{$$slots:{default:[vv]},$$scope:{ctx:X}}}),qn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example",$$slots:{default:[$v]},$$scope:{ctx:X}}}),Mn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Nv]},$$scope:{ctx:X}}}),Ua=new Ze({}),Va=new A({props:{name:"class transformers.XLNetForQuestionAnswering",anchor:"transformers.XLNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1915"}}),Ya=new A({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.XLNetForQuestionAnswering.forward.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.XLNetForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLNetForQuestionAnswering.forward.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.XLNetForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.XLNetForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.XLNetForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_xlnet.py#L1929",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the <code>is_impossible</code> label of the answers.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new Je({props:{$$slots:{default:[Lv]},$$scope:{ctx:X}}}),Cn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnswering.forward.example",$$slots:{default:[xv]},$$scope:{ctx:X}}}),Ga=new Ze({}),Ja=new A({props:{name:"class transformers.TFXLNetModel",anchor:"transformers.TFXLNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1130"}}),On=new Je({props:{$$slots:{default:[Fv]},$$scope:{ctx:X}}}),or=new A({props:{name:"call",anchor:"transformers.TFXLNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"mems",val:" = None"},{name:"perm_mask",val:" = None"},{name:"target_mapping",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"input_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_mems",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1135",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) \u2014 Sequence of hidden-states at the last layer of the model.</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Je({props:{$$slots:{default:[Xv]},$$scope:{ctx:X}}}),An=new Ae({props:{anchor:"transformers.TFXLNetModel.call.example",$$slots:{default:[qv]},$$scope:{ctx:X}}}),nr=new Ze({}),sr=new A({props:{name:"class transformers.TFXLNetLMHeadModel",anchor:"transformers.TFXLNetLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1195"}}),Dn=new Je({props:{$$slots:{default:[Mv]},$$scope:{ctx:X}}}),lr=new A({props:{name:"call",anchor:"transformers.TFXLNetLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetLMHeadModel.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetLMHeadModel.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1249",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided)
Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
<p><code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If <code>target_mapping</code> is <code>None</code>, then <code>num_predict</code>
corresponds to <code>sequence_length</code>.</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),In=new Je({props:{$$slots:{default:[zv]},$$scope:{ctx:X}}}),Hn=new Ae({props:{anchor:"transformers.TFXLNetLMHeadModel.call.example",$$slots:{default:[Ev]},$$scope:{ctx:X}}}),dr=new Ze({}),cr=new A({props:{name:"class transformers.TFXLNetForSequenceClassification",anchor:"transformers.TFXLNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1362"}}),Wn=new Je({props:{$$slots:{default:[Cv]},$$scope:{ctx:X}}}),ur=new A({props:{name:"call",anchor:"transformers.TFXLNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForSequenceClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForSequenceClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1375",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Un=new Je({props:{$$slots:{default:[jv]},$$scope:{ctx:X}}}),Vn=new Ae({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example",$$slots:{default:[Ov]},$$scope:{ctx:X}}}),Kn=new Ae({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example-2",$$slots:{default:[Pv]},$$scope:{ctx:X}}}),fr=new Ze({}),gr=new A({props:{name:"class transformers.TFXLNetForMultipleChoice",anchor:"transformers.TFXLNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1459"}}),Rn=new Je({props:{$$slots:{default:[Av]},$$scope:{ctx:X}}}),yr=new A({props:{name:"call",anchor:"transformers.TFXLNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForMultipleChoice.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForMultipleChoice.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, num_choices, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1481",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new Je({props:{$$slots:{default:[Sv]},$$scope:{ctx:X}}}),Gn=new Ae({props:{anchor:"transformers.TFXLNetForMultipleChoice.call.example",$$slots:{default:[Dv]},$$scope:{ctx:X}}}),Tr=new Ze({}),wr=new A({props:{name:"class transformers.TFXLNetForTokenClassification",anchor:"transformers.TFXLNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1592"}}),Zn=new Je({props:{$$slots:{default:[Iv]},$$scope:{ctx:X}}}),Lr=new A({props:{name:"call",anchor:"transformers.TFXLNetForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForTokenClassification.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForTokenClassification.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1602",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),es=new Je({props:{$$slots:{default:[Hv]},$$scope:{ctx:X}}}),ts=new Ae({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example",$$slots:{default:[Qv]},$$scope:{ctx:X}}}),os=new Ae({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example-2",$$slots:{default:[Wv]},$$scope:{ctx:X}}}),xr=new Ze({}),Fr=new A({props:{name:"class transformers.TFXLNetForQuestionAnsweringSimple",anchor:"transformers.TFXLNetForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1680"}}),ss=new Je({props:{$$slots:{default:[Uv]},$$scope:{ctx:X}}}),zr=new A({props:{name:"call",anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.mems",description:`<strong>mems</strong> (<code>List[torch.FloatTensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (see <code>mems</code> output below) . Can be used to speed up sequential
decoding. The token ids which have their past given to this model should not be passed as <code>input_ids</code> as
they have already been computed.</p>
<p><code>use_mems</code> has to be set to <code>True</code> to make use of <code>mems</code>.`,name:"mems"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.perm_mask",description:`<strong>perm_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the attention pattern for each input token with values selected in <code>[0, 1]</code>:</p>
<ul>
<li>if <code>perm_mask[k, i, j] = 0</code>, i attend to j in batch k;</li>
<li>if <code>perm_mask[k, i, j] = 1</code>, i does not attend to j in batch k.</li>
</ul>
<p>If not set, each token attends to all the others (full bidirectional attention). Only used during
pretraining (to define factorization order) or for sequential decoding (generation).`,name:"perm_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.target_mapping",description:`<strong>target_mapping</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to indicate the output tokens to use. If <code>target_mapping[k, i, j] = 1</code>, the i-th predict in batch k is
on the j-th token. Only used during pretraining for partial prediction or for sequential decoding
(generation).`,name:"target_mapping"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_mask",description:`<strong>input_mask</strong> (<code>torch.FloatTensor</code> of shape <code>batch_size, sequence_length</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Negative of <code>attention_mask</code>, i.e. with 0 for
real tokens and 1 for padding which is kept for compatibility with the original code base.</p>
<p>Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>masked</strong>,</li>
<li>0 for tokens that are <strong>not masked</strong>.</li>
</ul>
<p>You can only uses one of <code>input_mask</code> and <code>attention_mask</code>.`,name:"input_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1688",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetConfig"
>XLNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length,)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>mems</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) \u2014 Contains pre-computed hidden-states. Can be used (see <code>mems</code> input) to speed up sequential decoding. The
token ids which have their past given to this model should not be passed as <code>input_ids</code> as they have
already been computed.</p>
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
  href="/docs/transformers/main/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new Je({props:{$$slots:{default:[Vv]},$$scope:{ctx:X}}}),rs=new Ae({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example",$$slots:{default:[Kv]},$$scope:{ctx:X}}}),is=new Ae({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Bv]},$$scope:{ctx:X}}}),{c(){d=a("meta"),k=c(),m=a("h1"),u=a("a"),y=a("span"),T(l.$$.fragment),h=c(),M=a("span"),ke=n("XLNet"),me=c(),D=a("h2"),ae=a("a"),ee=a("span"),T(x.$$.fragment),be=c(),B=a("span"),ye=n("Overview"),he=c(),Q=a("p"),Te=n("The XLNet model was proposed in "),re=a("a"),Y=n("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),we=n(` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),ue=c(),V=a("p"),ve=n("The abstract from the paper is the following:"),fe=c(),K=a("p"),de=a("em"),$e=n(`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),ne=c(),z=a("p"),E=n("Tips:"),ge=c(),P=a("ul"),ie=a("li"),Ne=n("The specific attention pattern can be controlled at training and test time using the "),R=a("code"),Le=n("perm_mask"),xe=n(" input."),C=c(),le=a("li"),G=n(`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),ce=a("code"),Fe=n("target_mapping"),J=n(" input."),Xe=c(),te=a("li"),I=n("To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),pe=a("code"),Z=n("perm_mask"),qe=n(` and
`),oe=a("code"),j=n("target_mapping"),Me=n(` inputs to control the attention span and outputs (see examples in
`),O=a("em"),ze=n("examples/pytorch/text-generation/run_generation.py"),Ee=n(")"),b=c(),F=a("li"),We=n("XLNet is one of the few models that has no sequence length limit."),se=c(),_e=a("p"),Ue=n("This model was contributed by "),q=a("a"),Ve=n("thomwolf"),Ke=n(". The original code can be found "),Oe=a("a"),Be=n("here"),Re=n("."),S=c(),H=a("h2"),je=a("a"),Ie=a("span"),T(W.$$.fragment),Ye=c(),He=a("span"),Ce=n("XLNetConfig"),Qe=c(),U=a("div"),T(Pe.$$.fragment),pm=c(),Pt=a("p"),mm=n("This is the configuration class to store the configuration of a "),Dr=a("a"),hm=n("XLNetModel"),um=n(" or a "),Ir=a("a"),fm=n("TFXLNetModel"),gm=n(`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),_s=a("a"),_m=n("xlnet-large-cased"),km=n(" architecture."),bm=c(),no=a("p"),ym=n("Configuration objects inherit from "),Hr=a("a"),Tm=n("PretrainedConfig"),wm=n(` and can be used to control the model outputs. Read the
documentation from `),Qr=a("a"),vm=n("PretrainedConfig"),$m=n(" for more information."),Nm=c(),T(tn.$$.fragment),ec=c(),so=a("h2"),on=a("a"),tl=a("span"),T(ks.$$.fragment),Lm=c(),ol=a("span"),xm=n("XLNetTokenizer"),tc=c(),Ge=a("div"),T(bs.$$.fragment),Fm=c(),ys=a("p"),Xm=n("Construct an XLNet tokenizer. Based on "),Ts=a("a"),qm=n("SentencePiece"),Mm=n("."),zm=c(),ws=a("p"),Em=n("This tokenizer inherits from "),Wr=a("a"),Cm=n("PreTrainedTokenizer"),jm=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Om=c(),Ht=a("div"),T(vs.$$.fragment),Pm=c(),nl=a("p"),Am=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Sm=c(),$s=a("ul"),Ur=a("li"),Dm=n("single sequence: "),sl=a("code"),Im=n("X <sep> <cls>"),Hm=c(),Vr=a("li"),Qm=n("pair of sequences: "),al=a("code"),Wm=n("A <sep> B <sep> <cls>"),Um=c(),nn=a("div"),T(Ns.$$.fragment),Vm=c(),Ls=a("p"),Km=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=a("code"),Bm=n("prepare_for_model"),Rm=n(" method."),Ym=c(),wt=a("div"),T(xs.$$.fragment),Gm=c(),il=a("p"),Jm=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Zm=c(),T(sn.$$.fragment),eh=c(),ao=a("p"),th=n("If "),ll=a("code"),oh=n("token_ids_1"),nh=n(" is "),dl=a("code"),sh=n("None"),ah=n(", this method only returns the first portion of the mask (0s)."),rh=c(),Kr=a("div"),T(Fs.$$.fragment),oc=c(),ro=a("h2"),an=a("a"),cl=a("span"),T(Xs.$$.fragment),ih=c(),pl=a("span"),lh=n("XLNetTokenizerFast"),nc=c(),it=a("div"),T(qs.$$.fragment),dh=c(),io=a("p"),ch=n("Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ml=a("em"),ph=n("tokenizers"),mh=n(` library). Based on
`),Ms=a("a"),hh=n("Unigram"),uh=n("."),fh=c(),zs=a("p"),gh=n("This tokenizer inherits from "),Br=a("a"),_h=n("PreTrainedTokenizerFast"),kh=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),bh=c(),Qt=a("div"),T(Es.$$.fragment),yh=c(),hl=a("p"),Th=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),wh=c(),Cs=a("ul"),Rr=a("li"),vh=n("single sequence: "),ul=a("code"),$h=n("X <sep> <cls>"),Nh=c(),Yr=a("li"),Lh=n("pair of sequences: "),fl=a("code"),xh=n("A <sep> B <sep> <cls>"),Fh=c(),vt=a("div"),T(js.$$.fragment),Xh=c(),gl=a("p"),qh=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Mh=c(),T(rn.$$.fragment),zh=c(),lo=a("p"),Eh=n("If "),_l=a("code"),Ch=n("token_ids_1"),jh=n(" is "),kl=a("code"),Oh=n("None"),Ph=n(", this method only returns the first portion of the mask (0s)."),sc=c(),co=a("h2"),ln=a("a"),bl=a("span"),T(Os.$$.fragment),Ah=c(),yl=a("span"),Sh=n("XLNet specific outputs"),ac=c(),po=a("div"),T(Ps.$$.fragment),Dh=c(),As=a("p"),Ih=n("Output type of "),Gr=a("a"),Hh=n("XLNetModel"),Qh=n("."),rc=c(),mo=a("div"),T(Ss.$$.fragment),Wh=c(),Ds=a("p"),Uh=n("Output type of "),Jr=a("a"),Vh=n("XLNetLMHeadModel"),Kh=n("."),ic=c(),ho=a("div"),T(Is.$$.fragment),Bh=c(),Hs=a("p"),Rh=n("Output type of "),Zr=a("a"),Yh=n("XLNetForSequenceClassification"),Gh=n("."),lc=c(),uo=a("div"),T(Qs.$$.fragment),Jh=c(),Ws=a("p"),Zh=n("Output type of "),ei=a("a"),eu=n("XLNetForMultipleChoice"),tu=n("."),dc=c(),fo=a("div"),T(Us.$$.fragment),ou=c(),Vs=a("p"),nu=n("Output type of "),Tl=a("code"),su=n("XLNetForTokenClassificationOutput"),au=n("."),cc=c(),go=a("div"),T(Ks.$$.fragment),ru=c(),Bs=a("p"),iu=n("Output type of "),ti=a("a"),lu=n("XLNetForQuestionAnsweringSimple"),du=n("."),pc=c(),_o=a("div"),T(Rs.$$.fragment),cu=c(),Ys=a("p"),pu=n("Output type of "),oi=a("a"),mu=n("XLNetForQuestionAnswering"),hu=n("."),mc=c(),ko=a("div"),T(Gs.$$.fragment),uu=c(),Js=a("p"),fu=n("Output type of "),ni=a("a"),gu=n("TFXLNetModel"),_u=n("."),hc=c(),bo=a("div"),T(Zs.$$.fragment),ku=c(),ea=a("p"),bu=n("Output type of "),si=a("a"),yu=n("TFXLNetLMHeadModel"),Tu=n("."),uc=c(),yo=a("div"),T(ta.$$.fragment),wu=c(),oa=a("p"),vu=n("Output type of "),ai=a("a"),$u=n("TFXLNetForSequenceClassification"),Nu=n("."),fc=c(),To=a("div"),T(na.$$.fragment),Lu=c(),sa=a("p"),xu=n("Output type of "),ri=a("a"),Fu=n("TFXLNetForMultipleChoice"),Xu=n("."),gc=c(),wo=a("div"),T(aa.$$.fragment),qu=c(),ra=a("p"),Mu=n("Output type of "),wl=a("code"),zu=n("TFXLNetForTokenClassificationOutput"),Eu=n("."),_c=c(),vo=a("div"),T(ia.$$.fragment),Cu=c(),la=a("p"),ju=n("Output type of "),ii=a("a"),Ou=n("TFXLNetForQuestionAnsweringSimple"),Pu=n("."),kc=c(),$o=a("h2"),dn=a("a"),vl=a("span"),T(da.$$.fragment),Au=c(),$l=a("span"),Su=n("XLNetModel"),bc=c(),lt=a("div"),T(ca.$$.fragment),Du=c(),Nl=a("p"),Iu=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),Hu=c(),pa=a("p"),Qu=n("This model inherits from "),li=a("a"),Wu=n("PreTrainedModel"),Uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=c(),ma=a("p"),Ku=n("This model is also a PyTorch "),ha=a("a"),Bu=n("torch.nn.Module"),Ru=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu=c(),$t=a("div"),T(ua.$$.fragment),Gu=c(),No=a("p"),Ju=n("The "),di=a("a"),Zu=n("XLNetModel"),ef=n(" forward method, overrides the "),Ll=a("code"),tf=n("__call__"),of=n(" special method."),nf=c(),T(cn.$$.fragment),sf=c(),T(pn.$$.fragment),yc=c(),Lo=a("h2"),mn=a("a"),xl=a("span"),T(fa.$$.fragment),af=c(),Fl=a("span"),rf=n("XLNetLMHeadModel"),Tc=c(),dt=a("div"),T(ga.$$.fragment),lf=c(),Xl=a("p"),df=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),cf=c(),_a=a("p"),pf=n("This model inherits from "),ci=a("a"),mf=n("PreTrainedModel"),hf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf=c(),ka=a("p"),ff=n("This model is also a PyTorch "),ba=a("a"),gf=n("torch.nn.Module"),_f=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kf=c(),Nt=a("div"),T(ya.$$.fragment),bf=c(),xo=a("p"),yf=n("The "),pi=a("a"),Tf=n("XLNetLMHeadModel"),wf=n(" forward method, overrides the "),ql=a("code"),vf=n("__call__"),$f=n(" special method."),Nf=c(),T(hn.$$.fragment),Lf=c(),T(un.$$.fragment),wc=c(),Fo=a("h2"),fn=a("a"),Ml=a("span"),T(Ta.$$.fragment),xf=c(),zl=a("span"),Ff=n("XLNetForSequenceClassification"),vc=c(),ct=a("div"),T(wa.$$.fragment),Xf=c(),El=a("p"),qf=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Mf=c(),va=a("p"),zf=n("This model inherits from "),mi=a("a"),Ef=n("PreTrainedModel"),Cf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf=c(),$a=a("p"),Of=n("This model is also a PyTorch "),Na=a("a"),Pf=n("torch.nn.Module"),Af=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sf=c(),et=a("div"),T(La.$$.fragment),Df=c(),Xo=a("p"),If=n("The "),hi=a("a"),Hf=n("XLNetForSequenceClassification"),Qf=n(" forward method, overrides the "),Cl=a("code"),Wf=n("__call__"),Uf=n(" special method."),Vf=c(),T(gn.$$.fragment),Kf=c(),T(_n.$$.fragment),Bf=c(),T(kn.$$.fragment),Rf=c(),T(bn.$$.fragment),Yf=c(),T(yn.$$.fragment),$c=c(),qo=a("h2"),Tn=a("a"),jl=a("span"),T(xa.$$.fragment),Gf=c(),Ol=a("span"),Jf=n("XLNetForMultipleChoice"),Nc=c(),pt=a("div"),T(Fa.$$.fragment),Zf=c(),Pl=a("p"),eg=n(`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),tg=c(),Xa=a("p"),og=n("This model inherits from "),ui=a("a"),ng=n("PreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag=c(),qa=a("p"),rg=n("This model is also a PyTorch "),Ma=a("a"),ig=n("torch.nn.Module"),lg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dg=c(),Lt=a("div"),T(za.$$.fragment),cg=c(),Mo=a("p"),pg=n("The "),fi=a("a"),mg=n("XLNetForMultipleChoice"),hg=n(" forward method, overrides the "),Al=a("code"),ug=n("__call__"),fg=n(" special method."),gg=c(),T(wn.$$.fragment),_g=c(),T(vn.$$.fragment),Lc=c(),zo=a("h2"),$n=a("a"),Sl=a("span"),T(Ea.$$.fragment),kg=c(),Dl=a("span"),bg=n("XLNetForTokenClassification"),xc=c(),mt=a("div"),T(Ca.$$.fragment),yg=c(),Il=a("p"),Tg=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wg=c(),ja=a("p"),vg=n("This model inherits from "),gi=a("a"),$g=n("PreTrainedModel"),Ng=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=c(),Oa=a("p"),xg=n("This model is also a PyTorch "),Pa=a("a"),Fg=n("torch.nn.Module"),Xg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qg=c(),ft=a("div"),T(Aa.$$.fragment),Mg=c(),Eo=a("p"),zg=n("The "),_i=a("a"),Eg=n("XLNetForTokenClassification"),Cg=n(" forward method, overrides the "),Hl=a("code"),jg=n("__call__"),Og=n(" special method."),Pg=c(),T(Nn.$$.fragment),Ag=c(),T(Ln.$$.fragment),Sg=c(),T(xn.$$.fragment),Fc=c(),Co=a("h2"),Fn=a("a"),Ql=a("span"),T(Sa.$$.fragment),Dg=c(),Wl=a("span"),Ig=n("XLNetForQuestionAnsweringSimple"),Xc=c(),ht=a("div"),T(Da.$$.fragment),Hg=c(),jo=a("p"),Qg=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ul=a("code"),Wg=n("span start logits"),Ug=n(" and "),Vl=a("code"),Vg=n("span end logits"),Kg=n(")."),Bg=c(),Ia=a("p"),Rg=n("This model inherits from "),ki=a("a"),Yg=n("PreTrainedModel"),Gg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=c(),Ha=a("p"),Zg=n("This model is also a PyTorch "),Qa=a("a"),e_=n("torch.nn.Module"),t_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o_=c(),gt=a("div"),T(Wa.$$.fragment),n_=c(),Oo=a("p"),s_=n("The "),bi=a("a"),a_=n("XLNetForQuestionAnsweringSimple"),r_=n(" forward method, overrides the "),Kl=a("code"),i_=n("__call__"),l_=n(" special method."),d_=c(),T(Xn.$$.fragment),c_=c(),T(qn.$$.fragment),p_=c(),T(Mn.$$.fragment),qc=c(),Po=a("h2"),zn=a("a"),Bl=a("span"),T(Ua.$$.fragment),m_=c(),Rl=a("span"),h_=n("XLNetForQuestionAnswering"),Mc=c(),ut=a("div"),T(Va.$$.fragment),u_=c(),Ao=a("p"),f_=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yl=a("code"),g_=n("span start logits"),__=n(" and "),Gl=a("code"),k_=n("span end logits"),b_=n(")."),y_=c(),Ka=a("p"),T_=n("This model inherits from "),yi=a("a"),w_=n("PreTrainedModel"),v_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=c(),Ba=a("p"),N_=n("This model is also a PyTorch "),Ra=a("a"),L_=n("torch.nn.Module"),x_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),F_=c(),xt=a("div"),T(Ya.$$.fragment),X_=c(),So=a("p"),q_=n("The "),Ti=a("a"),M_=n("XLNetForQuestionAnswering"),z_=n(" forward method, overrides the "),Jl=a("code"),E_=n("__call__"),C_=n(" special method."),j_=c(),T(En.$$.fragment),O_=c(),T(Cn.$$.fragment),zc=c(),Do=a("h2"),jn=a("a"),Zl=a("span"),T(Ga.$$.fragment),P_=c(),ed=a("span"),A_=n("TFXLNetModel"),Ec=c(),tt=a("div"),T(Ja.$$.fragment),S_=c(),td=a("p"),D_=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),I_=c(),Za=a("p"),H_=n("This model inherits from "),wi=a("a"),Q_=n("TFPreTrainedModel"),W_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=c(),er=a("p"),V_=n("This model is also a "),tr=a("a"),K_=n("tf.keras.Model"),B_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),R_=c(),T(On.$$.fragment),Y_=c(),Ft=a("div"),T(or.$$.fragment),G_=c(),Io=a("p"),J_=n("The "),vi=a("a"),Z_=n("TFXLNetModel"),ek=n(" forward method, overrides the "),od=a("code"),tk=n("__call__"),ok=n(" special method."),nk=c(),T(Pn.$$.fragment),sk=c(),T(An.$$.fragment),Cc=c(),Ho=a("h2"),Sn=a("a"),nd=a("span"),T(nr.$$.fragment),ak=c(),sd=a("span"),rk=n("TFXLNetLMHeadModel"),jc=c(),ot=a("div"),T(sr.$$.fragment),ik=c(),ad=a("p"),lk=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),dk=c(),ar=a("p"),ck=n("This model inherits from "),$i=a("a"),pk=n("TFPreTrainedModel"),mk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),rr=a("p"),uk=n("This model is also a "),ir=a("a"),fk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_k=c(),T(Dn.$$.fragment),kk=c(),Xt=a("div"),T(lr.$$.fragment),bk=c(),Qo=a("p"),yk=n("The "),Ni=a("a"),Tk=n("TFXLNetLMHeadModel"),wk=n(" forward method, overrides the "),rd=a("code"),vk=n("__call__"),$k=n(" special method."),Nk=c(),T(In.$$.fragment),Lk=c(),T(Hn.$$.fragment),Oc=c(),Wo=a("h2"),Qn=a("a"),id=a("span"),T(dr.$$.fragment),xk=c(),ld=a("span"),Fk=n("TFXLNetForSequenceClassification"),Pc=c(),nt=a("div"),T(cr.$$.fragment),Xk=c(),dd=a("p"),qk=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Mk=c(),pr=a("p"),zk=n("This model inherits from "),Li=a("a"),Ek=n("TFPreTrainedModel"),Ck=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=c(),mr=a("p"),Ok=n("This model is also a "),hr=a("a"),Pk=n("tf.keras.Model"),Ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sk=c(),T(Wn.$$.fragment),Dk=c(),_t=a("div"),T(ur.$$.fragment),Ik=c(),Uo=a("p"),Hk=n("The "),xi=a("a"),Qk=n("TFXLNetForSequenceClassification"),Wk=n(" forward method, overrides the "),cd=a("code"),Uk=n("__call__"),Vk=n(" special method."),Kk=c(),T(Un.$$.fragment),Bk=c(),T(Vn.$$.fragment),Rk=c(),T(Kn.$$.fragment),Ac=c(),Vo=a("h2"),Bn=a("a"),pd=a("span"),T(fr.$$.fragment),Yk=c(),md=a("span"),Gk=n("TFLNetForMultipleChoice"),Sc=c(),st=a("div"),T(gr.$$.fragment),Jk=c(),hd=a("p"),Zk=n(`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),eb=c(),_r=a("p"),tb=n("This model inherits from "),Fi=a("a"),ob=n("TFPreTrainedModel"),nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=c(),kr=a("p"),ab=n("This model is also a "),br=a("a"),rb=n("tf.keras.Model"),ib=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lb=c(),T(Rn.$$.fragment),db=c(),qt=a("div"),T(yr.$$.fragment),cb=c(),Ko=a("p"),pb=n("The "),Xi=a("a"),mb=n("TFXLNetForMultipleChoice"),hb=n(" forward method, overrides the "),ud=a("code"),ub=n("__call__"),fb=n(" special method."),gb=c(),T(Yn.$$.fragment),_b=c(),T(Gn.$$.fragment),Dc=c(),Bo=a("h2"),Jn=a("a"),fd=a("span"),T(Tr.$$.fragment),kb=c(),gd=a("span"),bb=n("TFXLNetForTokenClassification"),Ic=c(),at=a("div"),T(wr.$$.fragment),yb=c(),_d=a("p"),Tb=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),wb=c(),vr=a("p"),vb=n("This model inherits from "),qi=a("a"),$b=n("TFPreTrainedModel"),Nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=c(),$r=a("p"),xb=n("This model is also a "),Nr=a("a"),Fb=n("tf.keras.Model"),Xb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qb=c(),T(Zn.$$.fragment),Mb=c(),kt=a("div"),T(Lr.$$.fragment),zb=c(),Ro=a("p"),Eb=n("The "),Mi=a("a"),Cb=n("TFXLNetForTokenClassification"),jb=n(" forward method, overrides the "),kd=a("code"),Ob=n("__call__"),Pb=n(" special method."),Ab=c(),T(es.$$.fragment),Sb=c(),T(ts.$$.fragment),Db=c(),T(os.$$.fragment),Hc=c(),Yo=a("h2"),ns=a("a"),bd=a("span"),T(xr.$$.fragment),Ib=c(),yd=a("span"),Hb=n("TFXLNetForQuestionAnsweringSimple"),Qc=c(),rt=a("div"),T(Fr.$$.fragment),Qb=c(),Go=a("p"),Wb=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Td=a("code"),Ub=n("span start logits"),Vb=n(" and "),wd=a("code"),Kb=n("span end logits"),Bb=n(")."),Rb=c(),Xr=a("p"),Yb=n("This model inherits from "),zi=a("a"),Gb=n("TFPreTrainedModel"),Jb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=c(),qr=a("p"),ey=n("This model is also a "),Mr=a("a"),ty=n("tf.keras.Model"),oy=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ny=c(),T(ss.$$.fragment),sy=c(),bt=a("div"),T(zr.$$.fragment),ay=c(),Jo=a("p"),ry=n("The "),Ei=a("a"),iy=n("TFXLNetForQuestionAnsweringSimple"),ly=n(" forward method, overrides the "),vd=a("code"),dy=n("__call__"),cy=n(" special method."),py=c(),T(as.$$.fragment),my=c(),T(rs.$$.fragment),hy=c(),T(is.$$.fragment),this.h()},l(o){const _=sv('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),k=p(o),m=r(o,"H1",{class:!0});var Er=i(m);u=r(Er,"A",{id:!0,class:!0,href:!0});var $d=i(u);y=r($d,"SPAN",{});var Nd=i(y);w(l.$$.fragment,Nd),Nd.forEach(t),$d.forEach(t),h=p(Er),M=r(Er,"SPAN",{});var Ld=i(M);ke=s(Ld,"XLNet"),Ld.forEach(t),Er.forEach(t),me=p(o),D=r(o,"H2",{class:!0});var Cr=i(D);ae=r(Cr,"A",{id:!0,class:!0,href:!0});var xd=i(ae);ee=r(xd,"SPAN",{});var Fd=i(ee);w(x.$$.fragment,Fd),Fd.forEach(t),xd.forEach(t),be=p(Cr),B=r(Cr,"SPAN",{});var Xd=i(B);ye=s(Xd,"Overview"),Xd.forEach(t),Cr.forEach(t),he=p(o),Q=r(o,"P",{});var jr=i(Q);Te=s(jr,"The XLNet model was proposed in "),re=r(jr,"A",{href:!0,rel:!0});var qd=i(re);Y=s(qd,"XLNet: Generalized Autoregressive Pretraining for Language Understanding"),qd.forEach(t),we=s(jr,` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),jr.forEach(t),ue=p(o),V=r(o,"P",{});var Md=i(V);ve=s(Md,"The abstract from the paper is the following:"),Md.forEach(t),fe=p(o),K=r(o,"P",{});var zd=i(K);de=r(zd,"EM",{});var Ed=i(de);$e=s(Ed,`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),Ed.forEach(t),zd.forEach(t),ne=p(o),z=r(o,"P",{});var Cd=i(z);E=s(Cd,"Tips:"),Cd.forEach(t),ge=p(o),P=r(o,"UL",{});var At=i(P);ie=r(At,"LI",{});var Or=i(ie);Ne=s(Or,"The specific attention pattern can be controlled at training and test time using the "),R=r(Or,"CODE",{});var jd=i(R);Le=s(jd,"perm_mask"),jd.forEach(t),xe=s(Or," input."),Or.forEach(t),C=p(At),le=r(At,"LI",{});var Pr=i(le);G=s(Pr,`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),ce=r(Pr,"CODE",{});var Od=i(ce);Fe=s(Od,"target_mapping"),Od.forEach(t),J=s(Pr," input."),Pr.forEach(t),Xe=p(At),te=r(At,"LI",{});var St=i(te);I=s(St,"To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),pe=r(St,"CODE",{});var Pd=i(pe);Z=s(Pd,"perm_mask"),Pd.forEach(t),qe=s(St,` and
`),oe=r(St,"CODE",{});var Ad=i(oe);j=s(Ad,"target_mapping"),Ad.forEach(t),Me=s(St,` inputs to control the attention span and outputs (see examples in
`),O=r(St,"EM",{});var Sd=i(O);ze=s(Sd,"examples/pytorch/text-generation/run_generation.py"),Sd.forEach(t),Ee=s(St,")"),St.forEach(t),b=p(At),F=r(At,"LI",{});var Dd=i(F);We=s(Dd,"XLNet is one of the few models that has no sequence length limit."),Dd.forEach(t),At.forEach(t),se=p(o),_e=r(o,"P",{});var Zo=i(_e);Ue=s(Zo,"This model was contributed by "),q=r(Zo,"A",{href:!0,rel:!0});var Id=i(q);Ve=s(Id,"thomwolf"),Id.forEach(t),Ke=s(Zo,". The original code can be found "),Oe=r(Zo,"A",{href:!0,rel:!0});var Hd=i(Oe);Be=s(Hd,"here"),Hd.forEach(t),Re=s(Zo,"."),Zo.forEach(t),S=p(o),H=r(o,"H2",{class:!0});var Ar=i(H);je=r(Ar,"A",{id:!0,class:!0,href:!0});var Qd=i(je);Ie=r(Qd,"SPAN",{});var Wd=i(Ie);w(W.$$.fragment,Wd),Wd.forEach(t),Qd.forEach(t),Ye=p(Ar),He=r(Ar,"SPAN",{});var Ud=i(He);Ce=s(Ud,"XLNetConfig"),Ud.forEach(t),Ar.forEach(t),Qe=p(o),U=r(o,"DIV",{class:!0});var Dt=i(U);w(Pe.$$.fragment,Dt),pm=p(Dt),Pt=r(Dt,"P",{});var It=i(Pt);mm=s(It,"This is the configuration class to store the configuration of a "),Dr=r(It,"A",{href:!0});var Vd=i(Dr);hm=s(Vd,"XLNetModel"),Vd.forEach(t),um=s(It," or a "),Ir=r(It,"A",{href:!0});var Kd=i(Ir);fm=s(Kd,"TFXLNetModel"),Kd.forEach(t),gm=s(It,`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),_s=r(It,"A",{href:!0,rel:!0});var Bd=i(_s);_m=s(Bd,"xlnet-large-cased"),Bd.forEach(t),km=s(It," architecture."),It.forEach(t),bm=p(Dt),no=r(Dt,"P",{});var en=i(no);ym=s(en,"Configuration objects inherit from "),Hr=r(en,"A",{href:!0});var Rd=i(Hr);Tm=s(Rd,"PretrainedConfig"),Rd.forEach(t),wm=s(en,` and can be used to control the model outputs. Read the
documentation from `),Qr=r(en,"A",{href:!0});var Yd=i(Qr);vm=s(Yd,"PretrainedConfig"),Yd.forEach(t),$m=s(en," for more information."),en.forEach(t),Nm=p(Dt),w(tn.$$.fragment,Dt),Dt.forEach(t),ec=p(o),so=r(o,"H2",{class:!0});var Sr=i(so);on=r(Sr,"A",{id:!0,class:!0,href:!0});var Gd=i(on);tl=r(Gd,"SPAN",{});var Jd=i(tl);w(ks.$$.fragment,Jd),Jd.forEach(t),Gd.forEach(t),Lm=p(Sr),ol=r(Sr,"SPAN",{});var Zd=i(ol);xm=s(Zd,"XLNetTokenizer"),Zd.forEach(t),Sr.forEach(t),tc=p(o),Ge=r(o,"DIV",{class:!0});var yt=i(Ge);w(bs.$$.fragment,yt),Fm=p(yt),ys=r(yt,"P",{});var Uc=i(ys);Xm=s(Uc,"Construct an XLNet tokenizer. Based on "),Ts=r(Uc,"A",{href:!0,rel:!0});var ky=i(Ts);qm=s(ky,"SentencePiece"),ky.forEach(t),Mm=s(Uc,"."),Uc.forEach(t),zm=p(yt),ws=r(yt,"P",{});var Vc=i(ws);Em=s(Vc,"This tokenizer inherits from "),Wr=r(Vc,"A",{href:!0});var by=i(Wr);Cm=s(by,"PreTrainedTokenizer"),by.forEach(t),jm=s(Vc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Vc.forEach(t),Om=p(yt),Ht=r(yt,"DIV",{class:!0});var Ci=i(Ht);w(vs.$$.fragment,Ci),Pm=p(Ci),nl=r(Ci,"P",{});var yy=i(nl);Am=s(yy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),yy.forEach(t),Sm=p(Ci),$s=r(Ci,"UL",{});var Kc=i($s);Ur=r(Kc,"LI",{});var uy=i(Ur);Dm=s(uy,"single sequence: "),sl=r(uy,"CODE",{});var Ty=i(sl);Im=s(Ty,"X <sep> <cls>"),Ty.forEach(t),uy.forEach(t),Hm=p(Kc),Vr=r(Kc,"LI",{});var fy=i(Vr);Qm=s(fy,"pair of sequences: "),al=r(fy,"CODE",{});var wy=i(al);Wm=s(wy,"A <sep> B <sep> <cls>"),wy.forEach(t),fy.forEach(t),Kc.forEach(t),Ci.forEach(t),Um=p(yt),nn=r(yt,"DIV",{class:!0});var Bc=i(nn);w(Ns.$$.fragment,Bc),Vm=p(Bc),Ls=r(Bc,"P",{});var Rc=i(Ls);Km=s(Rc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=r(Rc,"CODE",{});var vy=i(rl);Bm=s(vy,"prepare_for_model"),vy.forEach(t),Rm=s(Rc," method."),Rc.forEach(t),Bc.forEach(t),Ym=p(yt),wt=r(yt,"DIV",{class:!0});var ls=i(wt);w(xs.$$.fragment,ls),Gm=p(ls),il=r(ls,"P",{});var $y=i(il);Jm=s($y,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),$y.forEach(t),Zm=p(ls),w(sn.$$.fragment,ls),eh=p(ls),ao=r(ls,"P",{});var ji=i(ao);th=s(ji,"If "),ll=r(ji,"CODE",{});var Ny=i(ll);oh=s(Ny,"token_ids_1"),Ny.forEach(t),nh=s(ji," is "),dl=r(ji,"CODE",{});var Ly=i(dl);sh=s(Ly,"None"),Ly.forEach(t),ah=s(ji,", this method only returns the first portion of the mask (0s)."),ji.forEach(t),ls.forEach(t),rh=p(yt),Kr=r(yt,"DIV",{class:!0});var xy=i(Kr);w(Fs.$$.fragment,xy),xy.forEach(t),yt.forEach(t),oc=p(o),ro=r(o,"H2",{class:!0});var Yc=i(ro);an=r(Yc,"A",{id:!0,class:!0,href:!0});var Fy=i(an);cl=r(Fy,"SPAN",{});var Xy=i(cl);w(Xs.$$.fragment,Xy),Xy.forEach(t),Fy.forEach(t),ih=p(Yc),pl=r(Yc,"SPAN",{});var qy=i(pl);lh=s(qy,"XLNetTokenizerFast"),qy.forEach(t),Yc.forEach(t),nc=p(o),it=r(o,"DIV",{class:!0});var Wt=i(it);w(qs.$$.fragment,Wt),dh=p(Wt),io=r(Wt,"P",{});var Oi=i(io);ch=s(Oi,"Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ml=r(Oi,"EM",{});var My=i(ml);ph=s(My,"tokenizers"),My.forEach(t),mh=s(Oi,` library). Based on
`),Ms=r(Oi,"A",{href:!0,rel:!0});var zy=i(Ms);hh=s(zy,"Unigram"),zy.forEach(t),uh=s(Oi,"."),Oi.forEach(t),fh=p(Wt),zs=r(Wt,"P",{});var Gc=i(zs);gh=s(Gc,"This tokenizer inherits from "),Br=r(Gc,"A",{href:!0});var Ey=i(Br);_h=s(Ey,"PreTrainedTokenizerFast"),Ey.forEach(t),kh=s(Gc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gc.forEach(t),bh=p(Wt),Qt=r(Wt,"DIV",{class:!0});var Pi=i(Qt);w(Es.$$.fragment,Pi),yh=p(Pi),hl=r(Pi,"P",{});var Cy=i(hl);Th=s(Cy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Cy.forEach(t),wh=p(Pi),Cs=r(Pi,"UL",{});var Jc=i(Cs);Rr=r(Jc,"LI",{});var gy=i(Rr);vh=s(gy,"single sequence: "),ul=r(gy,"CODE",{});var jy=i(ul);$h=s(jy,"X <sep> <cls>"),jy.forEach(t),gy.forEach(t),Nh=p(Jc),Yr=r(Jc,"LI",{});var _y=i(Yr);Lh=s(_y,"pair of sequences: "),fl=r(_y,"CODE",{});var Oy=i(fl);xh=s(Oy,"A <sep> B <sep> <cls>"),Oy.forEach(t),_y.forEach(t),Jc.forEach(t),Pi.forEach(t),Fh=p(Wt),vt=r(Wt,"DIV",{class:!0});var ds=i(vt);w(js.$$.fragment,ds),Xh=p(ds),gl=r(ds,"P",{});var Py=i(gl);qh=s(Py,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Py.forEach(t),Mh=p(ds),w(rn.$$.fragment,ds),zh=p(ds),lo=r(ds,"P",{});var Ai=i(lo);Eh=s(Ai,"If "),_l=r(Ai,"CODE",{});var Ay=i(_l);Ch=s(Ay,"token_ids_1"),Ay.forEach(t),jh=s(Ai," is "),kl=r(Ai,"CODE",{});var Sy=i(kl);Oh=s(Sy,"None"),Sy.forEach(t),Ph=s(Ai,", this method only returns the first portion of the mask (0s)."),Ai.forEach(t),ds.forEach(t),Wt.forEach(t),sc=p(o),co=r(o,"H2",{class:!0});var Zc=i(co);ln=r(Zc,"A",{id:!0,class:!0,href:!0});var Dy=i(ln);bl=r(Dy,"SPAN",{});var Iy=i(bl);w(Os.$$.fragment,Iy),Iy.forEach(t),Dy.forEach(t),Ah=p(Zc),yl=r(Zc,"SPAN",{});var Hy=i(yl);Sh=s(Hy,"XLNet specific outputs"),Hy.forEach(t),Zc.forEach(t),ac=p(o),po=r(o,"DIV",{class:!0});var ep=i(po);w(Ps.$$.fragment,ep),Dh=p(ep),As=r(ep,"P",{});var tp=i(As);Ih=s(tp,"Output type of "),Gr=r(tp,"A",{href:!0});var Qy=i(Gr);Hh=s(Qy,"XLNetModel"),Qy.forEach(t),Qh=s(tp,"."),tp.forEach(t),ep.forEach(t),rc=p(o),mo=r(o,"DIV",{class:!0});var op=i(mo);w(Ss.$$.fragment,op),Wh=p(op),Ds=r(op,"P",{});var np=i(Ds);Uh=s(np,"Output type of "),Jr=r(np,"A",{href:!0});var Wy=i(Jr);Vh=s(Wy,"XLNetLMHeadModel"),Wy.forEach(t),Kh=s(np,"."),np.forEach(t),op.forEach(t),ic=p(o),ho=r(o,"DIV",{class:!0});var sp=i(ho);w(Is.$$.fragment,sp),Bh=p(sp),Hs=r(sp,"P",{});var ap=i(Hs);Rh=s(ap,"Output type of "),Zr=r(ap,"A",{href:!0});var Uy=i(Zr);Yh=s(Uy,"XLNetForSequenceClassification"),Uy.forEach(t),Gh=s(ap,"."),ap.forEach(t),sp.forEach(t),lc=p(o),uo=r(o,"DIV",{class:!0});var rp=i(uo);w(Qs.$$.fragment,rp),Jh=p(rp),Ws=r(rp,"P",{});var ip=i(Ws);Zh=s(ip,"Output type of "),ei=r(ip,"A",{href:!0});var Vy=i(ei);eu=s(Vy,"XLNetForMultipleChoice"),Vy.forEach(t),tu=s(ip,"."),ip.forEach(t),rp.forEach(t),dc=p(o),fo=r(o,"DIV",{class:!0});var lp=i(fo);w(Us.$$.fragment,lp),ou=p(lp),Vs=r(lp,"P",{});var dp=i(Vs);nu=s(dp,"Output type of "),Tl=r(dp,"CODE",{});var Ky=i(Tl);su=s(Ky,"XLNetForTokenClassificationOutput"),Ky.forEach(t),au=s(dp,"."),dp.forEach(t),lp.forEach(t),cc=p(o),go=r(o,"DIV",{class:!0});var cp=i(go);w(Ks.$$.fragment,cp),ru=p(cp),Bs=r(cp,"P",{});var pp=i(Bs);iu=s(pp,"Output type of "),ti=r(pp,"A",{href:!0});var By=i(ti);lu=s(By,"XLNetForQuestionAnsweringSimple"),By.forEach(t),du=s(pp,"."),pp.forEach(t),cp.forEach(t),pc=p(o),_o=r(o,"DIV",{class:!0});var mp=i(_o);w(Rs.$$.fragment,mp),cu=p(mp),Ys=r(mp,"P",{});var hp=i(Ys);pu=s(hp,"Output type of "),oi=r(hp,"A",{href:!0});var Ry=i(oi);mu=s(Ry,"XLNetForQuestionAnswering"),Ry.forEach(t),hu=s(hp,"."),hp.forEach(t),mp.forEach(t),mc=p(o),ko=r(o,"DIV",{class:!0});var up=i(ko);w(Gs.$$.fragment,up),uu=p(up),Js=r(up,"P",{});var fp=i(Js);fu=s(fp,"Output type of "),ni=r(fp,"A",{href:!0});var Yy=i(ni);gu=s(Yy,"TFXLNetModel"),Yy.forEach(t),_u=s(fp,"."),fp.forEach(t),up.forEach(t),hc=p(o),bo=r(o,"DIV",{class:!0});var gp=i(bo);w(Zs.$$.fragment,gp),ku=p(gp),ea=r(gp,"P",{});var _p=i(ea);bu=s(_p,"Output type of "),si=r(_p,"A",{href:!0});var Gy=i(si);yu=s(Gy,"TFXLNetLMHeadModel"),Gy.forEach(t),Tu=s(_p,"."),_p.forEach(t),gp.forEach(t),uc=p(o),yo=r(o,"DIV",{class:!0});var kp=i(yo);w(ta.$$.fragment,kp),wu=p(kp),oa=r(kp,"P",{});var bp=i(oa);vu=s(bp,"Output type of "),ai=r(bp,"A",{href:!0});var Jy=i(ai);$u=s(Jy,"TFXLNetForSequenceClassification"),Jy.forEach(t),Nu=s(bp,"."),bp.forEach(t),kp.forEach(t),fc=p(o),To=r(o,"DIV",{class:!0});var yp=i(To);w(na.$$.fragment,yp),Lu=p(yp),sa=r(yp,"P",{});var Tp=i(sa);xu=s(Tp,"Output type of "),ri=r(Tp,"A",{href:!0});var Zy=i(ri);Fu=s(Zy,"TFXLNetForMultipleChoice"),Zy.forEach(t),Xu=s(Tp,"."),Tp.forEach(t),yp.forEach(t),gc=p(o),wo=r(o,"DIV",{class:!0});var wp=i(wo);w(aa.$$.fragment,wp),qu=p(wp),ra=r(wp,"P",{});var vp=i(ra);Mu=s(vp,"Output type of "),wl=r(vp,"CODE",{});var eT=i(wl);zu=s(eT,"TFXLNetForTokenClassificationOutput"),eT.forEach(t),Eu=s(vp,"."),vp.forEach(t),wp.forEach(t),_c=p(o),vo=r(o,"DIV",{class:!0});var $p=i(vo);w(ia.$$.fragment,$p),Cu=p($p),la=r($p,"P",{});var Np=i(la);ju=s(Np,"Output type of "),ii=r(Np,"A",{href:!0});var tT=i(ii);Ou=s(tT,"TFXLNetForQuestionAnsweringSimple"),tT.forEach(t),Pu=s(Np,"."),Np.forEach(t),$p.forEach(t),kc=p(o),$o=r(o,"H2",{class:!0});var Lp=i($o);dn=r(Lp,"A",{id:!0,class:!0,href:!0});var oT=i(dn);vl=r(oT,"SPAN",{});var nT=i(vl);w(da.$$.fragment,nT),nT.forEach(t),oT.forEach(t),Au=p(Lp),$l=r(Lp,"SPAN",{});var sT=i($l);Su=s(sT,"XLNetModel"),sT.forEach(t),Lp.forEach(t),bc=p(o),lt=r(o,"DIV",{class:!0});var Ut=i(lt);w(ca.$$.fragment,Ut),Du=p(Ut),Nl=r(Ut,"P",{});var aT=i(Nl);Iu=s(aT,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),aT.forEach(t),Hu=p(Ut),pa=r(Ut,"P",{});var xp=i(pa);Qu=s(xp,"This model inherits from "),li=r(xp,"A",{href:!0});var rT=i(li);Wu=s(rT,"PreTrainedModel"),rT.forEach(t),Uu=s(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),Vu=p(Ut),ma=r(Ut,"P",{});var Fp=i(ma);Ku=s(Fp,"This model is also a PyTorch "),ha=r(Fp,"A",{href:!0,rel:!0});var iT=i(ha);Bu=s(iT,"torch.nn.Module"),iT.forEach(t),Ru=s(Fp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fp.forEach(t),Yu=p(Ut),$t=r(Ut,"DIV",{class:!0});var cs=i($t);w(ua.$$.fragment,cs),Gu=p(cs),No=r(cs,"P",{});var Si=i(No);Ju=s(Si,"The "),di=r(Si,"A",{href:!0});var lT=i(di);Zu=s(lT,"XLNetModel"),lT.forEach(t),ef=s(Si," forward method, overrides the "),Ll=r(Si,"CODE",{});var dT=i(Ll);tf=s(dT,"__call__"),dT.forEach(t),of=s(Si," special method."),Si.forEach(t),nf=p(cs),w(cn.$$.fragment,cs),sf=p(cs),w(pn.$$.fragment,cs),cs.forEach(t),Ut.forEach(t),yc=p(o),Lo=r(o,"H2",{class:!0});var Xp=i(Lo);mn=r(Xp,"A",{id:!0,class:!0,href:!0});var cT=i(mn);xl=r(cT,"SPAN",{});var pT=i(xl);w(fa.$$.fragment,pT),pT.forEach(t),cT.forEach(t),af=p(Xp),Fl=r(Xp,"SPAN",{});var mT=i(Fl);rf=s(mT,"XLNetLMHeadModel"),mT.forEach(t),Xp.forEach(t),Tc=p(o),dt=r(o,"DIV",{class:!0});var Vt=i(dt);w(ga.$$.fragment,Vt),lf=p(Vt),Xl=r(Vt,"P",{});var hT=i(Xl);df=s(hT,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),hT.forEach(t),cf=p(Vt),_a=r(Vt,"P",{});var qp=i(_a);pf=s(qp,"This model inherits from "),ci=r(qp,"A",{href:!0});var uT=i(ci);mf=s(uT,"PreTrainedModel"),uT.forEach(t),hf=s(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(t),uf=p(Vt),ka=r(Vt,"P",{});var Mp=i(ka);ff=s(Mp,"This model is also a PyTorch "),ba=r(Mp,"A",{href:!0,rel:!0});var fT=i(ba);gf=s(fT,"torch.nn.Module"),fT.forEach(t),_f=s(Mp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mp.forEach(t),kf=p(Vt),Nt=r(Vt,"DIV",{class:!0});var ps=i(Nt);w(ya.$$.fragment,ps),bf=p(ps),xo=r(ps,"P",{});var Di=i(xo);yf=s(Di,"The "),pi=r(Di,"A",{href:!0});var gT=i(pi);Tf=s(gT,"XLNetLMHeadModel"),gT.forEach(t),wf=s(Di," forward method, overrides the "),ql=r(Di,"CODE",{});var _T=i(ql);vf=s(_T,"__call__"),_T.forEach(t),$f=s(Di," special method."),Di.forEach(t),Nf=p(ps),w(hn.$$.fragment,ps),Lf=p(ps),w(un.$$.fragment,ps),ps.forEach(t),Vt.forEach(t),wc=p(o),Fo=r(o,"H2",{class:!0});var zp=i(Fo);fn=r(zp,"A",{id:!0,class:!0,href:!0});var kT=i(fn);Ml=r(kT,"SPAN",{});var bT=i(Ml);w(Ta.$$.fragment,bT),bT.forEach(t),kT.forEach(t),xf=p(zp),zl=r(zp,"SPAN",{});var yT=i(zl);Ff=s(yT,"XLNetForSequenceClassification"),yT.forEach(t),zp.forEach(t),vc=p(o),ct=r(o,"DIV",{class:!0});var Kt=i(ct);w(wa.$$.fragment,Kt),Xf=p(Kt),El=r(Kt,"P",{});var TT=i(El);qf=s(TT,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),TT.forEach(t),Mf=p(Kt),va=r(Kt,"P",{});var Ep=i(va);zf=s(Ep,"This model inherits from "),mi=r(Ep,"A",{href:!0});var wT=i(mi);Ef=s(wT,"PreTrainedModel"),wT.forEach(t),Cf=s(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep.forEach(t),jf=p(Kt),$a=r(Kt,"P",{});var Cp=i($a);Of=s(Cp,"This model is also a PyTorch "),Na=r(Cp,"A",{href:!0,rel:!0});var vT=i(Na);Pf=s(vT,"torch.nn.Module"),vT.forEach(t),Af=s(Cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp.forEach(t),Sf=p(Kt),et=r(Kt,"DIV",{class:!0});var Tt=i(et);w(La.$$.fragment,Tt),Df=p(Tt),Xo=r(Tt,"P",{});var Ii=i(Xo);If=s(Ii,"The "),hi=r(Ii,"A",{href:!0});var $T=i(hi);Hf=s($T,"XLNetForSequenceClassification"),$T.forEach(t),Qf=s(Ii," forward method, overrides the "),Cl=r(Ii,"CODE",{});var NT=i(Cl);Wf=s(NT,"__call__"),NT.forEach(t),Uf=s(Ii," special method."),Ii.forEach(t),Vf=p(Tt),w(gn.$$.fragment,Tt),Kf=p(Tt),w(_n.$$.fragment,Tt),Bf=p(Tt),w(kn.$$.fragment,Tt),Rf=p(Tt),w(bn.$$.fragment,Tt),Yf=p(Tt),w(yn.$$.fragment,Tt),Tt.forEach(t),Kt.forEach(t),$c=p(o),qo=r(o,"H2",{class:!0});var jp=i(qo);Tn=r(jp,"A",{id:!0,class:!0,href:!0});var LT=i(Tn);jl=r(LT,"SPAN",{});var xT=i(jl);w(xa.$$.fragment,xT),xT.forEach(t),LT.forEach(t),Gf=p(jp),Ol=r(jp,"SPAN",{});var FT=i(Ol);Jf=s(FT,"XLNetForMultipleChoice"),FT.forEach(t),jp.forEach(t),Nc=p(o),pt=r(o,"DIV",{class:!0});var Bt=i(pt);w(Fa.$$.fragment,Bt),Zf=p(Bt),Pl=r(Bt,"P",{});var XT=i(Pl);eg=s(XT,`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),XT.forEach(t),tg=p(Bt),Xa=r(Bt,"P",{});var Op=i(Xa);og=s(Op,"This model inherits from "),ui=r(Op,"A",{href:!0});var qT=i(ui);ng=s(qT,"PreTrainedModel"),qT.forEach(t),sg=s(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),ag=p(Bt),qa=r(Bt,"P",{});var Pp=i(qa);rg=s(Pp,"This model is also a PyTorch "),Ma=r(Pp,"A",{href:!0,rel:!0});var MT=i(Ma);ig=s(MT,"torch.nn.Module"),MT.forEach(t),lg=s(Pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pp.forEach(t),dg=p(Bt),Lt=r(Bt,"DIV",{class:!0});var ms=i(Lt);w(za.$$.fragment,ms),cg=p(ms),Mo=r(ms,"P",{});var Hi=i(Mo);pg=s(Hi,"The "),fi=r(Hi,"A",{href:!0});var zT=i(fi);mg=s(zT,"XLNetForMultipleChoice"),zT.forEach(t),hg=s(Hi," forward method, overrides the "),Al=r(Hi,"CODE",{});var ET=i(Al);ug=s(ET,"__call__"),ET.forEach(t),fg=s(Hi," special method."),Hi.forEach(t),gg=p(ms),w(wn.$$.fragment,ms),_g=p(ms),w(vn.$$.fragment,ms),ms.forEach(t),Bt.forEach(t),Lc=p(o),zo=r(o,"H2",{class:!0});var Ap=i(zo);$n=r(Ap,"A",{id:!0,class:!0,href:!0});var CT=i($n);Sl=r(CT,"SPAN",{});var jT=i(Sl);w(Ea.$$.fragment,jT),jT.forEach(t),CT.forEach(t),kg=p(Ap),Dl=r(Ap,"SPAN",{});var OT=i(Dl);bg=s(OT,"XLNetForTokenClassification"),OT.forEach(t),Ap.forEach(t),xc=p(o),mt=r(o,"DIV",{class:!0});var Rt=i(mt);w(Ca.$$.fragment,Rt),yg=p(Rt),Il=r(Rt,"P",{});var PT=i(Il);Tg=s(PT,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),PT.forEach(t),wg=p(Rt),ja=r(Rt,"P",{});var Sp=i(ja);vg=s(Sp,"This model inherits from "),gi=r(Sp,"A",{href:!0});var AT=i(gi);$g=s(AT,"PreTrainedModel"),AT.forEach(t),Ng=s(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp.forEach(t),Lg=p(Rt),Oa=r(Rt,"P",{});var Dp=i(Oa);xg=s(Dp,"This model is also a PyTorch "),Pa=r(Dp,"A",{href:!0,rel:!0});var ST=i(Pa);Fg=s(ST,"torch.nn.Module"),ST.forEach(t),Xg=s(Dp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp.forEach(t),qg=p(Rt),ft=r(Rt,"DIV",{class:!0});var Yt=i(ft);w(Aa.$$.fragment,Yt),Mg=p(Yt),Eo=r(Yt,"P",{});var Qi=i(Eo);zg=s(Qi,"The "),_i=r(Qi,"A",{href:!0});var DT=i(_i);Eg=s(DT,"XLNetForTokenClassification"),DT.forEach(t),Cg=s(Qi," forward method, overrides the "),Hl=r(Qi,"CODE",{});var IT=i(Hl);jg=s(IT,"__call__"),IT.forEach(t),Og=s(Qi," special method."),Qi.forEach(t),Pg=p(Yt),w(Nn.$$.fragment,Yt),Ag=p(Yt),w(Ln.$$.fragment,Yt),Sg=p(Yt),w(xn.$$.fragment,Yt),Yt.forEach(t),Rt.forEach(t),Fc=p(o),Co=r(o,"H2",{class:!0});var Ip=i(Co);Fn=r(Ip,"A",{id:!0,class:!0,href:!0});var HT=i(Fn);Ql=r(HT,"SPAN",{});var QT=i(Ql);w(Sa.$$.fragment,QT),QT.forEach(t),HT.forEach(t),Dg=p(Ip),Wl=r(Ip,"SPAN",{});var WT=i(Wl);Ig=s(WT,"XLNetForQuestionAnsweringSimple"),WT.forEach(t),Ip.forEach(t),Xc=p(o),ht=r(o,"DIV",{class:!0});var Gt=i(ht);w(Da.$$.fragment,Gt),Hg=p(Gt),jo=r(Gt,"P",{});var Wi=i(jo);Qg=s(Wi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ul=r(Wi,"CODE",{});var UT=i(Ul);Wg=s(UT,"span start logits"),UT.forEach(t),Ug=s(Wi," and "),Vl=r(Wi,"CODE",{});var VT=i(Vl);Vg=s(VT,"span end logits"),VT.forEach(t),Kg=s(Wi,")."),Wi.forEach(t),Bg=p(Gt),Ia=r(Gt,"P",{});var Hp=i(Ia);Rg=s(Hp,"This model inherits from "),ki=r(Hp,"A",{href:!0});var KT=i(ki);Yg=s(KT,"PreTrainedModel"),KT.forEach(t),Gg=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(t),Jg=p(Gt),Ha=r(Gt,"P",{});var Qp=i(Ha);Zg=s(Qp,"This model is also a PyTorch "),Qa=r(Qp,"A",{href:!0,rel:!0});var BT=i(Qa);e_=s(BT,"torch.nn.Module"),BT.forEach(t),t_=s(Qp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp.forEach(t),o_=p(Gt),gt=r(Gt,"DIV",{class:!0});var Jt=i(gt);w(Wa.$$.fragment,Jt),n_=p(Jt),Oo=r(Jt,"P",{});var Ui=i(Oo);s_=s(Ui,"The "),bi=r(Ui,"A",{href:!0});var RT=i(bi);a_=s(RT,"XLNetForQuestionAnsweringSimple"),RT.forEach(t),r_=s(Ui," forward method, overrides the "),Kl=r(Ui,"CODE",{});var YT=i(Kl);i_=s(YT,"__call__"),YT.forEach(t),l_=s(Ui," special method."),Ui.forEach(t),d_=p(Jt),w(Xn.$$.fragment,Jt),c_=p(Jt),w(qn.$$.fragment,Jt),p_=p(Jt),w(Mn.$$.fragment,Jt),Jt.forEach(t),Gt.forEach(t),qc=p(o),Po=r(o,"H2",{class:!0});var Wp=i(Po);zn=r(Wp,"A",{id:!0,class:!0,href:!0});var GT=i(zn);Bl=r(GT,"SPAN",{});var JT=i(Bl);w(Ua.$$.fragment,JT),JT.forEach(t),GT.forEach(t),m_=p(Wp),Rl=r(Wp,"SPAN",{});var ZT=i(Rl);h_=s(ZT,"XLNetForQuestionAnswering"),ZT.forEach(t),Wp.forEach(t),Mc=p(o),ut=r(o,"DIV",{class:!0});var Zt=i(ut);w(Va.$$.fragment,Zt),u_=p(Zt),Ao=r(Zt,"P",{});var Vi=i(Ao);f_=s(Vi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yl=r(Vi,"CODE",{});var ew=i(Yl);g_=s(ew,"span start logits"),ew.forEach(t),__=s(Vi," and "),Gl=r(Vi,"CODE",{});var tw=i(Gl);k_=s(tw,"span end logits"),tw.forEach(t),b_=s(Vi,")."),Vi.forEach(t),y_=p(Zt),Ka=r(Zt,"P",{});var Up=i(Ka);T_=s(Up,"This model inherits from "),yi=r(Up,"A",{href:!0});var ow=i(yi);w_=s(ow,"PreTrainedModel"),ow.forEach(t),v_=s(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(t),$_=p(Zt),Ba=r(Zt,"P",{});var Vp=i(Ba);N_=s(Vp,"This model is also a PyTorch "),Ra=r(Vp,"A",{href:!0,rel:!0});var nw=i(Ra);L_=s(nw,"torch.nn.Module"),nw.forEach(t),x_=s(Vp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vp.forEach(t),F_=p(Zt),xt=r(Zt,"DIV",{class:!0});var hs=i(xt);w(Ya.$$.fragment,hs),X_=p(hs),So=r(hs,"P",{});var Ki=i(So);q_=s(Ki,"The "),Ti=r(Ki,"A",{href:!0});var sw=i(Ti);M_=s(sw,"XLNetForQuestionAnswering"),sw.forEach(t),z_=s(Ki," forward method, overrides the "),Jl=r(Ki,"CODE",{});var aw=i(Jl);E_=s(aw,"__call__"),aw.forEach(t),C_=s(Ki," special method."),Ki.forEach(t),j_=p(hs),w(En.$$.fragment,hs),O_=p(hs),w(Cn.$$.fragment,hs),hs.forEach(t),Zt.forEach(t),zc=p(o),Do=r(o,"H2",{class:!0});var Kp=i(Do);jn=r(Kp,"A",{id:!0,class:!0,href:!0});var rw=i(jn);Zl=r(rw,"SPAN",{});var iw=i(Zl);w(Ga.$$.fragment,iw),iw.forEach(t),rw.forEach(t),P_=p(Kp),ed=r(Kp,"SPAN",{});var lw=i(ed);A_=s(lw,"TFXLNetModel"),lw.forEach(t),Kp.forEach(t),Ec=p(o),tt=r(o,"DIV",{class:!0});var Mt=i(tt);w(Ja.$$.fragment,Mt),S_=p(Mt),td=r(Mt,"P",{});var dw=i(td);D_=s(dw,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),dw.forEach(t),I_=p(Mt),Za=r(Mt,"P",{});var Bp=i(Za);H_=s(Bp,"This model inherits from "),wi=r(Bp,"A",{href:!0});var cw=i(wi);Q_=s(cw,"TFPreTrainedModel"),cw.forEach(t),W_=s(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),U_=p(Mt),er=r(Mt,"P",{});var Rp=i(er);V_=s(Rp,"This model is also a "),tr=r(Rp,"A",{href:!0,rel:!0});var pw=i(tr);K_=s(pw,"tf.keras.Model"),pw.forEach(t),B_=s(Rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rp.forEach(t),R_=p(Mt),w(On.$$.fragment,Mt),Y_=p(Mt),Ft=r(Mt,"DIV",{class:!0});var us=i(Ft);w(or.$$.fragment,us),G_=p(us),Io=r(us,"P",{});var Bi=i(Io);J_=s(Bi,"The "),vi=r(Bi,"A",{href:!0});var mw=i(vi);Z_=s(mw,"TFXLNetModel"),mw.forEach(t),ek=s(Bi," forward method, overrides the "),od=r(Bi,"CODE",{});var hw=i(od);tk=s(hw,"__call__"),hw.forEach(t),ok=s(Bi," special method."),Bi.forEach(t),nk=p(us),w(Pn.$$.fragment,us),sk=p(us),w(An.$$.fragment,us),us.forEach(t),Mt.forEach(t),Cc=p(o),Ho=r(o,"H2",{class:!0});var Yp=i(Ho);Sn=r(Yp,"A",{id:!0,class:!0,href:!0});var uw=i(Sn);nd=r(uw,"SPAN",{});var fw=i(nd);w(nr.$$.fragment,fw),fw.forEach(t),uw.forEach(t),ak=p(Yp),sd=r(Yp,"SPAN",{});var gw=i(sd);rk=s(gw,"TFXLNetLMHeadModel"),gw.forEach(t),Yp.forEach(t),jc=p(o),ot=r(o,"DIV",{class:!0});var zt=i(ot);w(sr.$$.fragment,zt),ik=p(zt),ad=r(zt,"P",{});var _w=i(ad);lk=s(_w,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),_w.forEach(t),dk=p(zt),ar=r(zt,"P",{});var Gp=i(ar);ck=s(Gp,"This model inherits from "),$i=r(Gp,"A",{href:!0});var kw=i($i);pk=s(kw,"TFPreTrainedModel"),kw.forEach(t),mk=s(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),hk=p(zt),rr=r(zt,"P",{});var Jp=i(rr);uk=s(Jp,"This model is also a "),ir=r(Jp,"A",{href:!0,rel:!0});var bw=i(ir);fk=s(bw,"tf.keras.Model"),bw.forEach(t),gk=s(Jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jp.forEach(t),_k=p(zt),w(Dn.$$.fragment,zt),kk=p(zt),Xt=r(zt,"DIV",{class:!0});var fs=i(Xt);w(lr.$$.fragment,fs),bk=p(fs),Qo=r(fs,"P",{});var Ri=i(Qo);yk=s(Ri,"The "),Ni=r(Ri,"A",{href:!0});var yw=i(Ni);Tk=s(yw,"TFXLNetLMHeadModel"),yw.forEach(t),wk=s(Ri," forward method, overrides the "),rd=r(Ri,"CODE",{});var Tw=i(rd);vk=s(Tw,"__call__"),Tw.forEach(t),$k=s(Ri," special method."),Ri.forEach(t),Nk=p(fs),w(In.$$.fragment,fs),Lk=p(fs),w(Hn.$$.fragment,fs),fs.forEach(t),zt.forEach(t),Oc=p(o),Wo=r(o,"H2",{class:!0});var Zp=i(Wo);Qn=r(Zp,"A",{id:!0,class:!0,href:!0});var ww=i(Qn);id=r(ww,"SPAN",{});var vw=i(id);w(dr.$$.fragment,vw),vw.forEach(t),ww.forEach(t),xk=p(Zp),ld=r(Zp,"SPAN",{});var $w=i(ld);Fk=s($w,"TFXLNetForSequenceClassification"),$w.forEach(t),Zp.forEach(t),Pc=p(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);w(cr.$$.fragment,Et),Xk=p(Et),dd=r(Et,"P",{});var Nw=i(dd);qk=s(Nw,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),Nw.forEach(t),Mk=p(Et),pr=r(Et,"P",{});var em=i(pr);zk=s(em,"This model inherits from "),Li=r(em,"A",{href:!0});var Lw=i(Li);Ek=s(Lw,"TFPreTrainedModel"),Lw.forEach(t),Ck=s(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(t),jk=p(Et),mr=r(Et,"P",{});var tm=i(mr);Ok=s(tm,"This model is also a "),hr=r(tm,"A",{href:!0,rel:!0});var xw=i(hr);Pk=s(xw,"tf.keras.Model"),xw.forEach(t),Ak=s(tm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm.forEach(t),Sk=p(Et),w(Wn.$$.fragment,Et),Dk=p(Et),_t=r(Et,"DIV",{class:!0});var eo=i(_t);w(ur.$$.fragment,eo),Ik=p(eo),Uo=r(eo,"P",{});var Yi=i(Uo);Hk=s(Yi,"The "),xi=r(Yi,"A",{href:!0});var Fw=i(xi);Qk=s(Fw,"TFXLNetForSequenceClassification"),Fw.forEach(t),Wk=s(Yi," forward method, overrides the "),cd=r(Yi,"CODE",{});var Xw=i(cd);Uk=s(Xw,"__call__"),Xw.forEach(t),Vk=s(Yi," special method."),Yi.forEach(t),Kk=p(eo),w(Un.$$.fragment,eo),Bk=p(eo),w(Vn.$$.fragment,eo),Rk=p(eo),w(Kn.$$.fragment,eo),eo.forEach(t),Et.forEach(t),Ac=p(o),Vo=r(o,"H2",{class:!0});var om=i(Vo);Bn=r(om,"A",{id:!0,class:!0,href:!0});var qw=i(Bn);pd=r(qw,"SPAN",{});var Mw=i(pd);w(fr.$$.fragment,Mw),Mw.forEach(t),qw.forEach(t),Yk=p(om),md=r(om,"SPAN",{});var zw=i(md);Gk=s(zw,"TFLNetForMultipleChoice"),zw.forEach(t),om.forEach(t),Sc=p(o),st=r(o,"DIV",{class:!0});var Ct=i(st);w(gr.$$.fragment,Ct),Jk=p(Ct),hd=r(Ct,"P",{});var Ew=i(hd);Zk=s(Ew,`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ew.forEach(t),eb=p(Ct),_r=r(Ct,"P",{});var nm=i(_r);tb=s(nm,"This model inherits from "),Fi=r(nm,"A",{href:!0});var Cw=i(Fi);ob=s(Cw,"TFPreTrainedModel"),Cw.forEach(t),nb=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(t),sb=p(Ct),kr=r(Ct,"P",{});var sm=i(kr);ab=s(sm,"This model is also a "),br=r(sm,"A",{href:!0,rel:!0});var jw=i(br);rb=s(jw,"tf.keras.Model"),jw.forEach(t),ib=s(sm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sm.forEach(t),lb=p(Ct),w(Rn.$$.fragment,Ct),db=p(Ct),qt=r(Ct,"DIV",{class:!0});var gs=i(qt);w(yr.$$.fragment,gs),cb=p(gs),Ko=r(gs,"P",{});var Gi=i(Ko);pb=s(Gi,"The "),Xi=r(Gi,"A",{href:!0});var Ow=i(Xi);mb=s(Ow,"TFXLNetForMultipleChoice"),Ow.forEach(t),hb=s(Gi," forward method, overrides the "),ud=r(Gi,"CODE",{});var Pw=i(ud);ub=s(Pw,"__call__"),Pw.forEach(t),fb=s(Gi," special method."),Gi.forEach(t),gb=p(gs),w(Yn.$$.fragment,gs),_b=p(gs),w(Gn.$$.fragment,gs),gs.forEach(t),Ct.forEach(t),Dc=p(o),Bo=r(o,"H2",{class:!0});var am=i(Bo);Jn=r(am,"A",{id:!0,class:!0,href:!0});var Aw=i(Jn);fd=r(Aw,"SPAN",{});var Sw=i(fd);w(Tr.$$.fragment,Sw),Sw.forEach(t),Aw.forEach(t),kb=p(am),gd=r(am,"SPAN",{});var Dw=i(gd);bb=s(Dw,"TFXLNetForTokenClassification"),Dw.forEach(t),am.forEach(t),Ic=p(o),at=r(o,"DIV",{class:!0});var jt=i(at);w(wr.$$.fragment,jt),yb=p(jt),_d=r(jt,"P",{});var Iw=i(_d);Tb=s(Iw,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Iw.forEach(t),wb=p(jt),vr=r(jt,"P",{});var rm=i(vr);vb=s(rm,"This model inherits from "),qi=r(rm,"A",{href:!0});var Hw=i(qi);$b=s(Hw,"TFPreTrainedModel"),Hw.forEach(t),Nb=s(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm.forEach(t),Lb=p(jt),$r=r(jt,"P",{});var im=i($r);xb=s(im,"This model is also a "),Nr=r(im,"A",{href:!0,rel:!0});var Qw=i(Nr);Fb=s(Qw,"tf.keras.Model"),Qw.forEach(t),Xb=s(im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),im.forEach(t),qb=p(jt),w(Zn.$$.fragment,jt),Mb=p(jt),kt=r(jt,"DIV",{class:!0});var to=i(kt);w(Lr.$$.fragment,to),zb=p(to),Ro=r(to,"P",{});var Ji=i(Ro);Eb=s(Ji,"The "),Mi=r(Ji,"A",{href:!0});var Ww=i(Mi);Cb=s(Ww,"TFXLNetForTokenClassification"),Ww.forEach(t),jb=s(Ji," forward method, overrides the "),kd=r(Ji,"CODE",{});var Uw=i(kd);Ob=s(Uw,"__call__"),Uw.forEach(t),Pb=s(Ji," special method."),Ji.forEach(t),Ab=p(to),w(es.$$.fragment,to),Sb=p(to),w(ts.$$.fragment,to),Db=p(to),w(os.$$.fragment,to),to.forEach(t),jt.forEach(t),Hc=p(o),Yo=r(o,"H2",{class:!0});var lm=i(Yo);ns=r(lm,"A",{id:!0,class:!0,href:!0});var Vw=i(ns);bd=r(Vw,"SPAN",{});var Kw=i(bd);w(xr.$$.fragment,Kw),Kw.forEach(t),Vw.forEach(t),Ib=p(lm),yd=r(lm,"SPAN",{});var Bw=i(yd);Hb=s(Bw,"TFXLNetForQuestionAnsweringSimple"),Bw.forEach(t),lm.forEach(t),Qc=p(o),rt=r(o,"DIV",{class:!0});var Ot=i(rt);w(Fr.$$.fragment,Ot),Qb=p(Ot),Go=r(Ot,"P",{});var Zi=i(Go);Wb=s(Zi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Td=r(Zi,"CODE",{});var Rw=i(Td);Ub=s(Rw,"span start logits"),Rw.forEach(t),Vb=s(Zi," and "),wd=r(Zi,"CODE",{});var Yw=i(wd);Kb=s(Yw,"span end logits"),Yw.forEach(t),Bb=s(Zi,")."),Zi.forEach(t),Rb=p(Ot),Xr=r(Ot,"P",{});var dm=i(Xr);Yb=s(dm,"This model inherits from "),zi=r(dm,"A",{href:!0});var Gw=i(zi);Gb=s(Gw,"TFPreTrainedModel"),Gw.forEach(t),Jb=s(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm.forEach(t),Zb=p(Ot),qr=r(Ot,"P",{});var cm=i(qr);ey=s(cm,"This model is also a "),Mr=r(cm,"A",{href:!0,rel:!0});var Jw=i(Mr);ty=s(Jw,"tf.keras.Model"),Jw.forEach(t),oy=s(cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cm.forEach(t),ny=p(Ot),w(ss.$$.fragment,Ot),sy=p(Ot),bt=r(Ot,"DIV",{class:!0});var oo=i(bt);w(zr.$$.fragment,oo),ay=p(oo),Jo=r(oo,"P",{});var el=i(Jo);ry=s(el,"The "),Ei=r(el,"A",{href:!0});var Zw=i(Ei);iy=s(Zw,"TFXLNetForQuestionAnsweringSimple"),Zw.forEach(t),ly=s(el," forward method, overrides the "),vd=r(el,"CODE",{});var ev=i(vd);dy=s(ev,"__call__"),ev.forEach(t),cy=s(el," special method."),el.forEach(t),py=p(oo),w(as.$$.fragment,oo),my=p(oo),w(rs.$$.fragment,oo),hy=p(oo),w(is.$$.fragment,oo),oo.forEach(t),Ot.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Yv)),f(u,"id","xlnet"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#xlnet"),f(m,"class","relative group"),f(ae,"id","overview"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#overview"),f(D,"class","relative group"),f(re,"href","https://arxiv.org/abs/1906.08237"),f(re,"rel","nofollow"),f(q,"href","https://huggingface.co/thomwolf"),f(q,"rel","nofollow"),f(Oe,"href","https://github.com/zihangdai/xlnet/"),f(Oe,"rel","nofollow"),f(je,"id","transformers.XLNetConfig"),f(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(je,"href","#transformers.XLNetConfig"),f(H,"class","relative group"),f(Dr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel"),f(Ir,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel"),f(_s,"href","https://huggingface.co/xlnet-large-cased"),f(_s,"rel","nofollow"),f(Hr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Qr,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.XLNetTokenizer"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.XLNetTokenizer"),f(so,"class","relative group"),f(Ts,"href","https://github.com/google/sentencepiece"),f(Ts,"rel","nofollow"),f(Wr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.XLNetTokenizerFast"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.XLNetTokenizerFast"),f(ro,"class","relative group"),f(Ms,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),f(Ms,"rel","nofollow"),f(Br,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),f(co,"class","relative group"),f(Gr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel"),f(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),f(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),f(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ei,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),f(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ti,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),f(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),f(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ni,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel"),f(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(si,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),f(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ai,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),f(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ri,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),f(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ii,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),f(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"id","transformers.XLNetModel"),f(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(dn,"href","#transformers.XLNetModel"),f($o,"class","relative group"),f(li,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ha,"rel","nofollow"),f(di,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.XLNetLMHeadModel"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.XLNetLMHeadModel"),f(Lo,"class","relative group"),f(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ba,"rel","nofollow"),f(pi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.XLNetForSequenceClassification"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.XLNetForSequenceClassification"),f(Fo,"class","relative group"),f(mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Na,"rel","nofollow"),f(hi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.XLNetForMultipleChoice"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.XLNetForMultipleChoice"),f(qo,"class","relative group"),f(ui,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ma,"rel","nofollow"),f(fi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"id","transformers.XLNetForTokenClassification"),f($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($n,"href","#transformers.XLNetForTokenClassification"),f(zo,"class","relative group"),f(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Pa,"rel","nofollow"),f(_i,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForTokenClassification"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.XLNetForQuestionAnsweringSimple"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.XLNetForQuestionAnsweringSimple"),f(Co,"class","relative group"),f(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Qa,"rel","nofollow"),f(bi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(zn,"id","transformers.XLNetForQuestionAnswering"),f(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(zn,"href","#transformers.XLNetForQuestionAnswering"),f(Po,"class","relative group"),f(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ra,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ra,"rel","nofollow"),f(Ti,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.TFXLNetModel"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.TFXLNetModel"),f(Do,"class","relative group"),f(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(vi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"id","transformers.TFXLNetLMHeadModel"),f(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Sn,"href","#transformers.TFXLNetLMHeadModel"),f(Ho,"class","relative group"),f($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ni,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qn,"id","transformers.TFXLNetForSequenceClassification"),f(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qn,"href","#transformers.TFXLNetForSequenceClassification"),f(Wo,"class","relative group"),f(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(hr,"rel","nofollow"),f(xi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Bn,"id","transformers.TFXLNetForMultipleChoice"),f(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Bn,"href","#transformers.TFXLNetForMultipleChoice"),f(Vo,"class","relative group"),f(Fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(br,"rel","nofollow"),f(Xi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.TFXLNetForTokenClassification"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.TFXLNetForTokenClassification"),f(Bo,"class","relative group"),f(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Nr,"rel","nofollow"),f(Mi,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForTokenClassification"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ns,"id","transformers.TFXLNetForQuestionAnsweringSimple"),f(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ns,"href","#transformers.TFXLNetForQuestionAnsweringSimple"),f(Yo,"class","relative group"),f(zi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Mr,"rel","nofollow"),f(Ei,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,k,_),g(o,m,_),e(m,u),e(u,y),v(l,y,null),e(m,h),e(m,M),e(M,ke),g(o,me,_),g(o,D,_),e(D,ae),e(ae,ee),v(x,ee,null),e(D,be),e(D,B),e(B,ye),g(o,he,_),g(o,Q,_),e(Q,Te),e(Q,re),e(re,Y),e(Q,we),g(o,ue,_),g(o,V,_),e(V,ve),g(o,fe,_),g(o,K,_),e(K,de),e(de,$e),g(o,ne,_),g(o,z,_),e(z,E),g(o,ge,_),g(o,P,_),e(P,ie),e(ie,Ne),e(ie,R),e(R,Le),e(ie,xe),e(P,C),e(P,le),e(le,G),e(le,ce),e(ce,Fe),e(le,J),e(P,Xe),e(P,te),e(te,I),e(te,pe),e(pe,Z),e(te,qe),e(te,oe),e(oe,j),e(te,Me),e(te,O),e(O,ze),e(te,Ee),e(P,b),e(P,F),e(F,We),g(o,se,_),g(o,_e,_),e(_e,Ue),e(_e,q),e(q,Ve),e(_e,Ke),e(_e,Oe),e(Oe,Be),e(_e,Re),g(o,S,_),g(o,H,_),e(H,je),e(je,Ie),v(W,Ie,null),e(H,Ye),e(H,He),e(He,Ce),g(o,Qe,_),g(o,U,_),v(Pe,U,null),e(U,pm),e(U,Pt),e(Pt,mm),e(Pt,Dr),e(Dr,hm),e(Pt,um),e(Pt,Ir),e(Ir,fm),e(Pt,gm),e(Pt,_s),e(_s,_m),e(Pt,km),e(U,bm),e(U,no),e(no,ym),e(no,Hr),e(Hr,Tm),e(no,wm),e(no,Qr),e(Qr,vm),e(no,$m),e(U,Nm),v(tn,U,null),g(o,ec,_),g(o,so,_),e(so,on),e(on,tl),v(ks,tl,null),e(so,Lm),e(so,ol),e(ol,xm),g(o,tc,_),g(o,Ge,_),v(bs,Ge,null),e(Ge,Fm),e(Ge,ys),e(ys,Xm),e(ys,Ts),e(Ts,qm),e(ys,Mm),e(Ge,zm),e(Ge,ws),e(ws,Em),e(ws,Wr),e(Wr,Cm),e(ws,jm),e(Ge,Om),e(Ge,Ht),v(vs,Ht,null),e(Ht,Pm),e(Ht,nl),e(nl,Am),e(Ht,Sm),e(Ht,$s),e($s,Ur),e(Ur,Dm),e(Ur,sl),e(sl,Im),e($s,Hm),e($s,Vr),e(Vr,Qm),e(Vr,al),e(al,Wm),e(Ge,Um),e(Ge,nn),v(Ns,nn,null),e(nn,Vm),e(nn,Ls),e(Ls,Km),e(Ls,rl),e(rl,Bm),e(Ls,Rm),e(Ge,Ym),e(Ge,wt),v(xs,wt,null),e(wt,Gm),e(wt,il),e(il,Jm),e(wt,Zm),v(sn,wt,null),e(wt,eh),e(wt,ao),e(ao,th),e(ao,ll),e(ll,oh),e(ao,nh),e(ao,dl),e(dl,sh),e(ao,ah),e(Ge,rh),e(Ge,Kr),v(Fs,Kr,null),g(o,oc,_),g(o,ro,_),e(ro,an),e(an,cl),v(Xs,cl,null),e(ro,ih),e(ro,pl),e(pl,lh),g(o,nc,_),g(o,it,_),v(qs,it,null),e(it,dh),e(it,io),e(io,ch),e(io,ml),e(ml,ph),e(io,mh),e(io,Ms),e(Ms,hh),e(io,uh),e(it,fh),e(it,zs),e(zs,gh),e(zs,Br),e(Br,_h),e(zs,kh),e(it,bh),e(it,Qt),v(Es,Qt,null),e(Qt,yh),e(Qt,hl),e(hl,Th),e(Qt,wh),e(Qt,Cs),e(Cs,Rr),e(Rr,vh),e(Rr,ul),e(ul,$h),e(Cs,Nh),e(Cs,Yr),e(Yr,Lh),e(Yr,fl),e(fl,xh),e(it,Fh),e(it,vt),v(js,vt,null),e(vt,Xh),e(vt,gl),e(gl,qh),e(vt,Mh),v(rn,vt,null),e(vt,zh),e(vt,lo),e(lo,Eh),e(lo,_l),e(_l,Ch),e(lo,jh),e(lo,kl),e(kl,Oh),e(lo,Ph),g(o,sc,_),g(o,co,_),e(co,ln),e(ln,bl),v(Os,bl,null),e(co,Ah),e(co,yl),e(yl,Sh),g(o,ac,_),g(o,po,_),v(Ps,po,null),e(po,Dh),e(po,As),e(As,Ih),e(As,Gr),e(Gr,Hh),e(As,Qh),g(o,rc,_),g(o,mo,_),v(Ss,mo,null),e(mo,Wh),e(mo,Ds),e(Ds,Uh),e(Ds,Jr),e(Jr,Vh),e(Ds,Kh),g(o,ic,_),g(o,ho,_),v(Is,ho,null),e(ho,Bh),e(ho,Hs),e(Hs,Rh),e(Hs,Zr),e(Zr,Yh),e(Hs,Gh),g(o,lc,_),g(o,uo,_),v(Qs,uo,null),e(uo,Jh),e(uo,Ws),e(Ws,Zh),e(Ws,ei),e(ei,eu),e(Ws,tu),g(o,dc,_),g(o,fo,_),v(Us,fo,null),e(fo,ou),e(fo,Vs),e(Vs,nu),e(Vs,Tl),e(Tl,su),e(Vs,au),g(o,cc,_),g(o,go,_),v(Ks,go,null),e(go,ru),e(go,Bs),e(Bs,iu),e(Bs,ti),e(ti,lu),e(Bs,du),g(o,pc,_),g(o,_o,_),v(Rs,_o,null),e(_o,cu),e(_o,Ys),e(Ys,pu),e(Ys,oi),e(oi,mu),e(Ys,hu),g(o,mc,_),g(o,ko,_),v(Gs,ko,null),e(ko,uu),e(ko,Js),e(Js,fu),e(Js,ni),e(ni,gu),e(Js,_u),g(o,hc,_),g(o,bo,_),v(Zs,bo,null),e(bo,ku),e(bo,ea),e(ea,bu),e(ea,si),e(si,yu),e(ea,Tu),g(o,uc,_),g(o,yo,_),v(ta,yo,null),e(yo,wu),e(yo,oa),e(oa,vu),e(oa,ai),e(ai,$u),e(oa,Nu),g(o,fc,_),g(o,To,_),v(na,To,null),e(To,Lu),e(To,sa),e(sa,xu),e(sa,ri),e(ri,Fu),e(sa,Xu),g(o,gc,_),g(o,wo,_),v(aa,wo,null),e(wo,qu),e(wo,ra),e(ra,Mu),e(ra,wl),e(wl,zu),e(ra,Eu),g(o,_c,_),g(o,vo,_),v(ia,vo,null),e(vo,Cu),e(vo,la),e(la,ju),e(la,ii),e(ii,Ou),e(la,Pu),g(o,kc,_),g(o,$o,_),e($o,dn),e(dn,vl),v(da,vl,null),e($o,Au),e($o,$l),e($l,Su),g(o,bc,_),g(o,lt,_),v(ca,lt,null),e(lt,Du),e(lt,Nl),e(Nl,Iu),e(lt,Hu),e(lt,pa),e(pa,Qu),e(pa,li),e(li,Wu),e(pa,Uu),e(lt,Vu),e(lt,ma),e(ma,Ku),e(ma,ha),e(ha,Bu),e(ma,Ru),e(lt,Yu),e(lt,$t),v(ua,$t,null),e($t,Gu),e($t,No),e(No,Ju),e(No,di),e(di,Zu),e(No,ef),e(No,Ll),e(Ll,tf),e(No,of),e($t,nf),v(cn,$t,null),e($t,sf),v(pn,$t,null),g(o,yc,_),g(o,Lo,_),e(Lo,mn),e(mn,xl),v(fa,xl,null),e(Lo,af),e(Lo,Fl),e(Fl,rf),g(o,Tc,_),g(o,dt,_),v(ga,dt,null),e(dt,lf),e(dt,Xl),e(Xl,df),e(dt,cf),e(dt,_a),e(_a,pf),e(_a,ci),e(ci,mf),e(_a,hf),e(dt,uf),e(dt,ka),e(ka,ff),e(ka,ba),e(ba,gf),e(ka,_f),e(dt,kf),e(dt,Nt),v(ya,Nt,null),e(Nt,bf),e(Nt,xo),e(xo,yf),e(xo,pi),e(pi,Tf),e(xo,wf),e(xo,ql),e(ql,vf),e(xo,$f),e(Nt,Nf),v(hn,Nt,null),e(Nt,Lf),v(un,Nt,null),g(o,wc,_),g(o,Fo,_),e(Fo,fn),e(fn,Ml),v(Ta,Ml,null),e(Fo,xf),e(Fo,zl),e(zl,Ff),g(o,vc,_),g(o,ct,_),v(wa,ct,null),e(ct,Xf),e(ct,El),e(El,qf),e(ct,Mf),e(ct,va),e(va,zf),e(va,mi),e(mi,Ef),e(va,Cf),e(ct,jf),e(ct,$a),e($a,Of),e($a,Na),e(Na,Pf),e($a,Af),e(ct,Sf),e(ct,et),v(La,et,null),e(et,Df),e(et,Xo),e(Xo,If),e(Xo,hi),e(hi,Hf),e(Xo,Qf),e(Xo,Cl),e(Cl,Wf),e(Xo,Uf),e(et,Vf),v(gn,et,null),e(et,Kf),v(_n,et,null),e(et,Bf),v(kn,et,null),e(et,Rf),v(bn,et,null),e(et,Yf),v(yn,et,null),g(o,$c,_),g(o,qo,_),e(qo,Tn),e(Tn,jl),v(xa,jl,null),e(qo,Gf),e(qo,Ol),e(Ol,Jf),g(o,Nc,_),g(o,pt,_),v(Fa,pt,null),e(pt,Zf),e(pt,Pl),e(Pl,eg),e(pt,tg),e(pt,Xa),e(Xa,og),e(Xa,ui),e(ui,ng),e(Xa,sg),e(pt,ag),e(pt,qa),e(qa,rg),e(qa,Ma),e(Ma,ig),e(qa,lg),e(pt,dg),e(pt,Lt),v(za,Lt,null),e(Lt,cg),e(Lt,Mo),e(Mo,pg),e(Mo,fi),e(fi,mg),e(Mo,hg),e(Mo,Al),e(Al,ug),e(Mo,fg),e(Lt,gg),v(wn,Lt,null),e(Lt,_g),v(vn,Lt,null),g(o,Lc,_),g(o,zo,_),e(zo,$n),e($n,Sl),v(Ea,Sl,null),e(zo,kg),e(zo,Dl),e(Dl,bg),g(o,xc,_),g(o,mt,_),v(Ca,mt,null),e(mt,yg),e(mt,Il),e(Il,Tg),e(mt,wg),e(mt,ja),e(ja,vg),e(ja,gi),e(gi,$g),e(ja,Ng),e(mt,Lg),e(mt,Oa),e(Oa,xg),e(Oa,Pa),e(Pa,Fg),e(Oa,Xg),e(mt,qg),e(mt,ft),v(Aa,ft,null),e(ft,Mg),e(ft,Eo),e(Eo,zg),e(Eo,_i),e(_i,Eg),e(Eo,Cg),e(Eo,Hl),e(Hl,jg),e(Eo,Og),e(ft,Pg),v(Nn,ft,null),e(ft,Ag),v(Ln,ft,null),e(ft,Sg),v(xn,ft,null),g(o,Fc,_),g(o,Co,_),e(Co,Fn),e(Fn,Ql),v(Sa,Ql,null),e(Co,Dg),e(Co,Wl),e(Wl,Ig),g(o,Xc,_),g(o,ht,_),v(Da,ht,null),e(ht,Hg),e(ht,jo),e(jo,Qg),e(jo,Ul),e(Ul,Wg),e(jo,Ug),e(jo,Vl),e(Vl,Vg),e(jo,Kg),e(ht,Bg),e(ht,Ia),e(Ia,Rg),e(Ia,ki),e(ki,Yg),e(Ia,Gg),e(ht,Jg),e(ht,Ha),e(Ha,Zg),e(Ha,Qa),e(Qa,e_),e(Ha,t_),e(ht,o_),e(ht,gt),v(Wa,gt,null),e(gt,n_),e(gt,Oo),e(Oo,s_),e(Oo,bi),e(bi,a_),e(Oo,r_),e(Oo,Kl),e(Kl,i_),e(Oo,l_),e(gt,d_),v(Xn,gt,null),e(gt,c_),v(qn,gt,null),e(gt,p_),v(Mn,gt,null),g(o,qc,_),g(o,Po,_),e(Po,zn),e(zn,Bl),v(Ua,Bl,null),e(Po,m_),e(Po,Rl),e(Rl,h_),g(o,Mc,_),g(o,ut,_),v(Va,ut,null),e(ut,u_),e(ut,Ao),e(Ao,f_),e(Ao,Yl),e(Yl,g_),e(Ao,__),e(Ao,Gl),e(Gl,k_),e(Ao,b_),e(ut,y_),e(ut,Ka),e(Ka,T_),e(Ka,yi),e(yi,w_),e(Ka,v_),e(ut,$_),e(ut,Ba),e(Ba,N_),e(Ba,Ra),e(Ra,L_),e(Ba,x_),e(ut,F_),e(ut,xt),v(Ya,xt,null),e(xt,X_),e(xt,So),e(So,q_),e(So,Ti),e(Ti,M_),e(So,z_),e(So,Jl),e(Jl,E_),e(So,C_),e(xt,j_),v(En,xt,null),e(xt,O_),v(Cn,xt,null),g(o,zc,_),g(o,Do,_),e(Do,jn),e(jn,Zl),v(Ga,Zl,null),e(Do,P_),e(Do,ed),e(ed,A_),g(o,Ec,_),g(o,tt,_),v(Ja,tt,null),e(tt,S_),e(tt,td),e(td,D_),e(tt,I_),e(tt,Za),e(Za,H_),e(Za,wi),e(wi,Q_),e(Za,W_),e(tt,U_),e(tt,er),e(er,V_),e(er,tr),e(tr,K_),e(er,B_),e(tt,R_),v(On,tt,null),e(tt,Y_),e(tt,Ft),v(or,Ft,null),e(Ft,G_),e(Ft,Io),e(Io,J_),e(Io,vi),e(vi,Z_),e(Io,ek),e(Io,od),e(od,tk),e(Io,ok),e(Ft,nk),v(Pn,Ft,null),e(Ft,sk),v(An,Ft,null),g(o,Cc,_),g(o,Ho,_),e(Ho,Sn),e(Sn,nd),v(nr,nd,null),e(Ho,ak),e(Ho,sd),e(sd,rk),g(o,jc,_),g(o,ot,_),v(sr,ot,null),e(ot,ik),e(ot,ad),e(ad,lk),e(ot,dk),e(ot,ar),e(ar,ck),e(ar,$i),e($i,pk),e(ar,mk),e(ot,hk),e(ot,rr),e(rr,uk),e(rr,ir),e(ir,fk),e(rr,gk),e(ot,_k),v(Dn,ot,null),e(ot,kk),e(ot,Xt),v(lr,Xt,null),e(Xt,bk),e(Xt,Qo),e(Qo,yk),e(Qo,Ni),e(Ni,Tk),e(Qo,wk),e(Qo,rd),e(rd,vk),e(Qo,$k),e(Xt,Nk),v(In,Xt,null),e(Xt,Lk),v(Hn,Xt,null),g(o,Oc,_),g(o,Wo,_),e(Wo,Qn),e(Qn,id),v(dr,id,null),e(Wo,xk),e(Wo,ld),e(ld,Fk),g(o,Pc,_),g(o,nt,_),v(cr,nt,null),e(nt,Xk),e(nt,dd),e(dd,qk),e(nt,Mk),e(nt,pr),e(pr,zk),e(pr,Li),e(Li,Ek),e(pr,Ck),e(nt,jk),e(nt,mr),e(mr,Ok),e(mr,hr),e(hr,Pk),e(mr,Ak),e(nt,Sk),v(Wn,nt,null),e(nt,Dk),e(nt,_t),v(ur,_t,null),e(_t,Ik),e(_t,Uo),e(Uo,Hk),e(Uo,xi),e(xi,Qk),e(Uo,Wk),e(Uo,cd),e(cd,Uk),e(Uo,Vk),e(_t,Kk),v(Un,_t,null),e(_t,Bk),v(Vn,_t,null),e(_t,Rk),v(Kn,_t,null),g(o,Ac,_),g(o,Vo,_),e(Vo,Bn),e(Bn,pd),v(fr,pd,null),e(Vo,Yk),e(Vo,md),e(md,Gk),g(o,Sc,_),g(o,st,_),v(gr,st,null),e(st,Jk),e(st,hd),e(hd,Zk),e(st,eb),e(st,_r),e(_r,tb),e(_r,Fi),e(Fi,ob),e(_r,nb),e(st,sb),e(st,kr),e(kr,ab),e(kr,br),e(br,rb),e(kr,ib),e(st,lb),v(Rn,st,null),e(st,db),e(st,qt),v(yr,qt,null),e(qt,cb),e(qt,Ko),e(Ko,pb),e(Ko,Xi),e(Xi,mb),e(Ko,hb),e(Ko,ud),e(ud,ub),e(Ko,fb),e(qt,gb),v(Yn,qt,null),e(qt,_b),v(Gn,qt,null),g(o,Dc,_),g(o,Bo,_),e(Bo,Jn),e(Jn,fd),v(Tr,fd,null),e(Bo,kb),e(Bo,gd),e(gd,bb),g(o,Ic,_),g(o,at,_),v(wr,at,null),e(at,yb),e(at,_d),e(_d,Tb),e(at,wb),e(at,vr),e(vr,vb),e(vr,qi),e(qi,$b),e(vr,Nb),e(at,Lb),e(at,$r),e($r,xb),e($r,Nr),e(Nr,Fb),e($r,Xb),e(at,qb),v(Zn,at,null),e(at,Mb),e(at,kt),v(Lr,kt,null),e(kt,zb),e(kt,Ro),e(Ro,Eb),e(Ro,Mi),e(Mi,Cb),e(Ro,jb),e(Ro,kd),e(kd,Ob),e(Ro,Pb),e(kt,Ab),v(es,kt,null),e(kt,Sb),v(ts,kt,null),e(kt,Db),v(os,kt,null),g(o,Hc,_),g(o,Yo,_),e(Yo,ns),e(ns,bd),v(xr,bd,null),e(Yo,Ib),e(Yo,yd),e(yd,Hb),g(o,Qc,_),g(o,rt,_),v(Fr,rt,null),e(rt,Qb),e(rt,Go),e(Go,Wb),e(Go,Td),e(Td,Ub),e(Go,Vb),e(Go,wd),e(wd,Kb),e(Go,Bb),e(rt,Rb),e(rt,Xr),e(Xr,Yb),e(Xr,zi),e(zi,Gb),e(Xr,Jb),e(rt,Zb),e(rt,qr),e(qr,ey),e(qr,Mr),e(Mr,ty),e(qr,oy),e(rt,ny),v(ss,rt,null),e(rt,sy),e(rt,bt),v(zr,bt,null),e(bt,ay),e(bt,Jo),e(Jo,ry),e(Jo,Ei),e(Ei,iy),e(Jo,ly),e(Jo,vd),e(vd,dy),e(Jo,cy),e(bt,py),v(as,bt,null),e(bt,my),v(rs,bt,null),e(bt,hy),v(is,bt,null),Wc=!0},p(o,[_]){const Er={};_&2&&(Er.$$scope={dirty:_,ctx:o}),tn.$set(Er);const $d={};_&2&&($d.$$scope={dirty:_,ctx:o}),sn.$set($d);const Nd={};_&2&&(Nd.$$scope={dirty:_,ctx:o}),rn.$set(Nd);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:o}),cn.$set(Ld);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:o}),pn.$set(Cr);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:o}),hn.$set(xd);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:o}),un.$set(Fd);const Xd={};_&2&&(Xd.$$scope={dirty:_,ctx:o}),gn.$set(Xd);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:o}),_n.$set(jr);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:o}),kn.$set(qd);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:o}),bn.$set(Md);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:o}),yn.$set(zd);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:o}),wn.$set(Ed);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:o}),vn.$set(Cd);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),Nn.$set(At);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:o}),Ln.$set(Or);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:o}),xn.$set(jd);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:o}),Xn.$set(Pr);const Od={};_&2&&(Od.$$scope={dirty:_,ctx:o}),qn.$set(Od);const St={};_&2&&(St.$$scope={dirty:_,ctx:o}),Mn.$set(St);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:o}),En.$set(Pd);const Ad={};_&2&&(Ad.$$scope={dirty:_,ctx:o}),Cn.$set(Ad);const Sd={};_&2&&(Sd.$$scope={dirty:_,ctx:o}),On.$set(Sd);const Dd={};_&2&&(Dd.$$scope={dirty:_,ctx:o}),Pn.$set(Dd);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:o}),An.$set(Zo);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:o}),Dn.$set(Id);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:o}),In.$set(Hd);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:o}),Hn.$set(Ar);const Qd={};_&2&&(Qd.$$scope={dirty:_,ctx:o}),Wn.$set(Qd);const Wd={};_&2&&(Wd.$$scope={dirty:_,ctx:o}),Un.$set(Wd);const Ud={};_&2&&(Ud.$$scope={dirty:_,ctx:o}),Vn.$set(Ud);const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:o}),Kn.$set(Dt);const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),Rn.$set(It);const Vd={};_&2&&(Vd.$$scope={dirty:_,ctx:o}),Yn.$set(Vd);const Kd={};_&2&&(Kd.$$scope={dirty:_,ctx:o}),Gn.$set(Kd);const Bd={};_&2&&(Bd.$$scope={dirty:_,ctx:o}),Zn.$set(Bd);const en={};_&2&&(en.$$scope={dirty:_,ctx:o}),es.$set(en);const Rd={};_&2&&(Rd.$$scope={dirty:_,ctx:o}),ts.$set(Rd);const Yd={};_&2&&(Yd.$$scope={dirty:_,ctx:o}),os.$set(Yd);const Sr={};_&2&&(Sr.$$scope={dirty:_,ctx:o}),ss.$set(Sr);const Gd={};_&2&&(Gd.$$scope={dirty:_,ctx:o}),as.$set(Gd);const Jd={};_&2&&(Jd.$$scope={dirty:_,ctx:o}),rs.$set(Jd);const Zd={};_&2&&(Zd.$$scope={dirty:_,ctx:o}),is.$set(Zd)},i(o){Wc||($(l.$$.fragment,o),$(x.$$.fragment,o),$(W.$$.fragment,o),$(Pe.$$.fragment,o),$(tn.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(vs.$$.fragment,o),$(Ns.$$.fragment,o),$(xs.$$.fragment,o),$(sn.$$.fragment,o),$(Fs.$$.fragment,o),$(Xs.$$.fragment,o),$(qs.$$.fragment,o),$(Es.$$.fragment,o),$(js.$$.fragment,o),$(rn.$$.fragment,o),$(Os.$$.fragment,o),$(Ps.$$.fragment,o),$(Ss.$$.fragment,o),$(Is.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(Ks.$$.fragment,o),$(Rs.$$.fragment,o),$(Gs.$$.fragment,o),$(Zs.$$.fragment,o),$(ta.$$.fragment,o),$(na.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$(ya.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(Ta.$$.fragment,o),$(wa.$$.fragment,o),$(La.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(yn.$$.fragment,o),$(xa.$$.fragment,o),$(Fa.$$.fragment,o),$(za.$$.fragment,o),$(wn.$$.fragment,o),$(vn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ca.$$.fragment,o),$(Aa.$$.fragment,o),$(Nn.$$.fragment,o),$(Ln.$$.fragment,o),$(xn.$$.fragment,o),$(Sa.$$.fragment,o),$(Da.$$.fragment,o),$(Wa.$$.fragment,o),$(Xn.$$.fragment,o),$(qn.$$.fragment,o),$(Mn.$$.fragment,o),$(Ua.$$.fragment,o),$(Va.$$.fragment,o),$(Ya.$$.fragment,o),$(En.$$.fragment,o),$(Cn.$$.fragment,o),$(Ga.$$.fragment,o),$(Ja.$$.fragment,o),$(On.$$.fragment,o),$(or.$$.fragment,o),$(Pn.$$.fragment,o),$(An.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(Dn.$$.fragment,o),$(lr.$$.fragment,o),$(In.$$.fragment,o),$(Hn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Wn.$$.fragment,o),$(ur.$$.fragment,o),$(Un.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(Rn.$$.fragment,o),$(yr.$$.fragment,o),$(Yn.$$.fragment,o),$(Gn.$$.fragment,o),$(Tr.$$.fragment,o),$(wr.$$.fragment,o),$(Zn.$$.fragment,o),$(Lr.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(ss.$$.fragment,o),$(zr.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),Wc=!0)},o(o){N(l.$$.fragment,o),N(x.$$.fragment,o),N(W.$$.fragment,o),N(Pe.$$.fragment,o),N(tn.$$.fragment,o),N(ks.$$.fragment,o),N(bs.$$.fragment,o),N(vs.$$.fragment,o),N(Ns.$$.fragment,o),N(xs.$$.fragment,o),N(sn.$$.fragment,o),N(Fs.$$.fragment,o),N(Xs.$$.fragment,o),N(qs.$$.fragment,o),N(Es.$$.fragment,o),N(js.$$.fragment,o),N(rn.$$.fragment,o),N(Os.$$.fragment,o),N(Ps.$$.fragment,o),N(Ss.$$.fragment,o),N(Is.$$.fragment,o),N(Qs.$$.fragment,o),N(Us.$$.fragment,o),N(Ks.$$.fragment,o),N(Rs.$$.fragment,o),N(Gs.$$.fragment,o),N(Zs.$$.fragment,o),N(ta.$$.fragment,o),N(na.$$.fragment,o),N(aa.$$.fragment,o),N(ia.$$.fragment,o),N(da.$$.fragment,o),N(ca.$$.fragment,o),N(ua.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(fa.$$.fragment,o),N(ga.$$.fragment,o),N(ya.$$.fragment,o),N(hn.$$.fragment,o),N(un.$$.fragment,o),N(Ta.$$.fragment,o),N(wa.$$.fragment,o),N(La.$$.fragment,o),N(gn.$$.fragment,o),N(_n.$$.fragment,o),N(kn.$$.fragment,o),N(bn.$$.fragment,o),N(yn.$$.fragment,o),N(xa.$$.fragment,o),N(Fa.$$.fragment,o),N(za.$$.fragment,o),N(wn.$$.fragment,o),N(vn.$$.fragment,o),N(Ea.$$.fragment,o),N(Ca.$$.fragment,o),N(Aa.$$.fragment,o),N(Nn.$$.fragment,o),N(Ln.$$.fragment,o),N(xn.$$.fragment,o),N(Sa.$$.fragment,o),N(Da.$$.fragment,o),N(Wa.$$.fragment,o),N(Xn.$$.fragment,o),N(qn.$$.fragment,o),N(Mn.$$.fragment,o),N(Ua.$$.fragment,o),N(Va.$$.fragment,o),N(Ya.$$.fragment,o),N(En.$$.fragment,o),N(Cn.$$.fragment,o),N(Ga.$$.fragment,o),N(Ja.$$.fragment,o),N(On.$$.fragment,o),N(or.$$.fragment,o),N(Pn.$$.fragment,o),N(An.$$.fragment,o),N(nr.$$.fragment,o),N(sr.$$.fragment,o),N(Dn.$$.fragment,o),N(lr.$$.fragment,o),N(In.$$.fragment,o),N(Hn.$$.fragment,o),N(dr.$$.fragment,o),N(cr.$$.fragment,o),N(Wn.$$.fragment,o),N(ur.$$.fragment,o),N(Un.$$.fragment,o),N(Vn.$$.fragment,o),N(Kn.$$.fragment,o),N(fr.$$.fragment,o),N(gr.$$.fragment,o),N(Rn.$$.fragment,o),N(yr.$$.fragment,o),N(Yn.$$.fragment,o),N(Gn.$$.fragment,o),N(Tr.$$.fragment,o),N(wr.$$.fragment,o),N(Zn.$$.fragment,o),N(Lr.$$.fragment,o),N(es.$$.fragment,o),N(ts.$$.fragment,o),N(os.$$.fragment,o),N(xr.$$.fragment,o),N(Fr.$$.fragment,o),N(ss.$$.fragment,o),N(zr.$$.fragment,o),N(as.$$.fragment,o),N(rs.$$.fragment,o),N(is.$$.fragment,o),Wc=!1},d(o){t(d),o&&t(k),o&&t(m),L(l),o&&t(me),o&&t(D),L(x),o&&t(he),o&&t(Q),o&&t(ue),o&&t(V),o&&t(fe),o&&t(K),o&&t(ne),o&&t(z),o&&t(ge),o&&t(P),o&&t(se),o&&t(_e),o&&t(S),o&&t(H),L(W),o&&t(Qe),o&&t(U),L(Pe),L(tn),o&&t(ec),o&&t(so),L(ks),o&&t(tc),o&&t(Ge),L(bs),L(vs),L(Ns),L(xs),L(sn),L(Fs),o&&t(oc),o&&t(ro),L(Xs),o&&t(nc),o&&t(it),L(qs),L(Es),L(js),L(rn),o&&t(sc),o&&t(co),L(Os),o&&t(ac),o&&t(po),L(Ps),o&&t(rc),o&&t(mo),L(Ss),o&&t(ic),o&&t(ho),L(Is),o&&t(lc),o&&t(uo),L(Qs),o&&t(dc),o&&t(fo),L(Us),o&&t(cc),o&&t(go),L(Ks),o&&t(pc),o&&t(_o),L(Rs),o&&t(mc),o&&t(ko),L(Gs),o&&t(hc),o&&t(bo),L(Zs),o&&t(uc),o&&t(yo),L(ta),o&&t(fc),o&&t(To),L(na),o&&t(gc),o&&t(wo),L(aa),o&&t(_c),o&&t(vo),L(ia),o&&t(kc),o&&t($o),L(da),o&&t(bc),o&&t(lt),L(ca),L(ua),L(cn),L(pn),o&&t(yc),o&&t(Lo),L(fa),o&&t(Tc),o&&t(dt),L(ga),L(ya),L(hn),L(un),o&&t(wc),o&&t(Fo),L(Ta),o&&t(vc),o&&t(ct),L(wa),L(La),L(gn),L(_n),L(kn),L(bn),L(yn),o&&t($c),o&&t(qo),L(xa),o&&t(Nc),o&&t(pt),L(Fa),L(za),L(wn),L(vn),o&&t(Lc),o&&t(zo),L(Ea),o&&t(xc),o&&t(mt),L(Ca),L(Aa),L(Nn),L(Ln),L(xn),o&&t(Fc),o&&t(Co),L(Sa),o&&t(Xc),o&&t(ht),L(Da),L(Wa),L(Xn),L(qn),L(Mn),o&&t(qc),o&&t(Po),L(Ua),o&&t(Mc),o&&t(ut),L(Va),L(Ya),L(En),L(Cn),o&&t(zc),o&&t(Do),L(Ga),o&&t(Ec),o&&t(tt),L(Ja),L(On),L(or),L(Pn),L(An),o&&t(Cc),o&&t(Ho),L(nr),o&&t(jc),o&&t(ot),L(sr),L(Dn),L(lr),L(In),L(Hn),o&&t(Oc),o&&t(Wo),L(dr),o&&t(Pc),o&&t(nt),L(cr),L(Wn),L(ur),L(Un),L(Vn),L(Kn),o&&t(Ac),o&&t(Vo),L(fr),o&&t(Sc),o&&t(st),L(gr),L(Rn),L(yr),L(Yn),L(Gn),o&&t(Dc),o&&t(Bo),L(Tr),o&&t(Ic),o&&t(at),L(wr),L(Zn),L(Lr),L(es),L(ts),L(os),o&&t(Hc),o&&t(Yo),L(xr),o&&t(Qc),o&&t(rt),L(Fr),L(ss),L(zr),L(as),L(rs),L(is)}}}const Yv={local:"xlnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLNetConfig",title:"XLNetConfig"},{local:"transformers.XLNetTokenizer",title:"XLNetTokenizer"},{local:"transformers.XLNetTokenizerFast",title:"XLNetTokenizerFast"},{local:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",title:"XLNet specific outputs"},{local:"transformers.XLNetModel",title:"XLNetModel"},{local:"transformers.XLNetLMHeadModel",title:"XLNetLMHeadModel"},{local:"transformers.XLNetForSequenceClassification",title:"XLNetForSequenceClassification"},{local:"transformers.XLNetForMultipleChoice",title:"XLNetForMultipleChoice"},{local:"transformers.XLNetForTokenClassification",title:"XLNetForTokenClassification"},{local:"transformers.XLNetForQuestionAnsweringSimple",title:"XLNetForQuestionAnsweringSimple"},{local:"transformers.XLNetForQuestionAnswering",title:"XLNetForQuestionAnswering"},{local:"transformers.TFXLNetModel",title:"TFXLNetModel"},{local:"transformers.TFXLNetLMHeadModel",title:"TFXLNetLMHeadModel"},{local:"transformers.TFXLNetForSequenceClassification",title:"TFXLNetForSequenceClassification"},{local:"transformers.TFXLNetForMultipleChoice",title:"TFLNetForMultipleChoice"},{local:"transformers.TFXLNetForTokenClassification",title:"TFXLNetForTokenClassification"},{local:"transformers.TFXLNetForQuestionAnsweringSimple",title:"TFXLNetForQuestionAnsweringSimple"}],title:"XLNet"};function Gv(X){return av(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class s1 extends tv{constructor(d){super();ov(this,d,Gv,Rv,nv,{})}}export{s1 as default,Yv as metadata};
