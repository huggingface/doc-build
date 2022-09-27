import{S as tw,i as ow,s as nw,e as a,k as c,w as y,t as n,M as sw,c as r,d as t,m as p,a as i,x as T,h as s,b as f,G as e,g,y as w,q as $,o as N,B as L,v as aw,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as De}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function rw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetConfig, XLNetModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function iw(X){let d,k,m,u,v;return u=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=n("sequence pair mask has the following format:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"sequence pair mask has the following format:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function lw(X){let d,k,m,u,v;return u=new De({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),k=n("sequence pair mask has the following format:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"sequence pair mask has the following format:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function dw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function cw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function pw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function mw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetLMHeadModel
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
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Logits have shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function hw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function uw(X){let d,k,m,u,v;return u=new De({props:{code:`import torch
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
`}}),{c(){d=a("p"),k=n("Example of single-label classification:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example of single-label classification:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function fw(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function gw(X){let d,k,m,u,v;return u=new De({props:{code:`import torch
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
`}}),{c(){d=a("p"),k=n("Example of multi-label classification:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function _w(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function kw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function bw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function vw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function yw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForTokenClassification
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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Tw(X){let d,k;return d=new De({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function ww(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function $w(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Nw(X){let d,k;return d=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Lw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function xw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, XLNetForQuestionAnswering
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

<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Fw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function Xw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function qw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function zw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function Mw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Ew(X){let d,k,m,u,v;return u=new De({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>]  <span class="hljs-comment"># Output has shape [target_mapping.size(0), target_mapping.size(1), config.vocab_size]</span>`}}),{c(){d=a("p"),k=n("Examples:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Examples:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Cw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function jw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Ow(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForSequenceClassification
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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Pw(X){let d,k;return d=new De({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Aw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function Sw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Dw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Iw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function Hw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Qw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForTokenClassification
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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Ww(X){let d,k;return d=new De({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Uw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee;return{c(){d=a("p"),k=n("TensorFlow models and layers in "),m=a("code"),u=n("transformers"),v=n(" accept two formats as input:"),l=c(),h=a("ul"),z=a("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=c(),D=a("li"),ae=n("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),x=a("p"),be=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=a("code"),ve=n("model.fit()"),he=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=a("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=a("code"),Te=n("fit()"),ue=n(" and "),B=a("code"),we=n("predict()"),fe=n(`, such as when creating your own layers or models with
the Keras `),K=a("code"),de=n("Functional"),$e=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),M=a("ul"),E=a("li"),ge=n("a single Tensor with "),P=a("code"),ie=n("input_ids"),Ne=n(" only and nothing else: "),V=a("code"),Le=n("model(input_ids)"),xe=c(),C=a("li"),le=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=n("model([input_ids, attention_mask])"),Fe=n(" or "),J=a("code"),Xe=n("model([input_ids, attention_mask, token_type_ids])"),te=c(),I=a("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=a("code"),qe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe=c(),j=a("p"),ze=n(`Note that when creating models and layers with
`),O=a("a"),Me=n("subclassing"),Ee=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(b){d=r(b,"P",{});var F=i(d);k=s(F,"TensorFlow models and layers in "),m=r(F,"CODE",{});var We=i(m);u=s(We,"transformers"),We.forEach(t),v=s(F," accept two formats as input:"),F.forEach(t),l=p(b),h=r(b,"UL",{});var se=i(h);z=r(se,"LI",{});var _e=i(z);ke=s(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),me=p(se),D=r(se,"LI",{});var Ue=i(D);ae=s(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),se.forEach(t),ee=p(b),x=r(b,"P",{});var q=i(x);be=s(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(q,"CODE",{});var Be=i(R);ve=s(Be,"model.fit()"),Be.forEach(t),he=s(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),Q=r(q,"CODE",{});var Ke=i(Q);ye=s(Ke,"model.fit()"),Ke.forEach(t),re=s(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),Y=r(q,"CODE",{});var Oe=i(Y);Te=s(Oe,"fit()"),Oe.forEach(t),ue=s(q," and "),B=r(q,"CODE",{});var Re=i(B);we=s(Re,"predict()"),Re.forEach(t),fe=s(q,`, such as when creating your own layers or models with
the Keras `),K=r(q,"CODE",{});var Ve=i(K);de=s(Ve,"Functional"),Ve.forEach(t),$e=s(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),ne=p(b),M=r(b,"UL",{});var S=i(M);E=r(S,"LI",{});var H=i(E);ge=s(H,"a single Tensor with "),P=r(H,"CODE",{});var je=i(P);ie=s(je,"input_ids"),je.forEach(t),Ne=s(H," only and nothing else: "),V=r(H,"CODE",{});var Ie=i(V);Le=s(Ie,"model(input_ids)"),Ie.forEach(t),H.forEach(t),xe=p(S),C=r(S,"LI",{});var W=i(C);le=s(W,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(W,"CODE",{});var Ye=i(G);ce=s(Ye,"model([input_ids, attention_mask])"),Ye.forEach(t),Fe=s(W," or "),J=r(W,"CODE",{});var He=i(J);Xe=s(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),W.forEach(t),te=p(S),I=r(S,"LI",{});var Ce=i(I);pe=s(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Z=r(Ce,"CODE",{});var Qe=i(Z);qe=s(Qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Qe.forEach(t),Ce.forEach(t),S.forEach(t),oe=p(b),j=r(b,"P",{});var U=i(j);ze=s(U,`Note that when creating models and layers with
`),O=r(U,"A",{href:!0,rel:!0});var Pe=i(O);Me=s(Pe,"subclassing"),Pe.forEach(t),Ee=s(U,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),U.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(b,F){g(b,d,F),e(d,k),e(d,m),e(m,u),e(d,v),g(b,l,F),g(b,h,F),e(h,z),e(z,ke),e(h,me),e(h,D),e(D,ae),g(b,ee,F),g(b,x,F),e(x,be),e(x,R),e(R,ve),e(x,he),e(x,Q),e(Q,ye),e(x,re),e(x,Y),e(Y,Te),e(x,ue),e(x,B),e(B,we),e(x,fe),e(x,K),e(K,de),e(x,$e),g(b,ne,F),g(b,M,F),e(M,E),e(E,ge),e(E,P),e(P,ie),e(E,Ne),e(E,V),e(V,Le),e(M,xe),e(M,C),e(C,le),e(C,G),e(G,ce),e(C,Fe),e(C,J),e(J,Xe),e(M,te),e(M,I),e(I,pe),e(I,Z),e(Z,qe),g(b,oe,F),g(b,j,F),e(j,ze),e(j,O),e(O,Me),e(j,Ee)},d(b){b&&t(d),b&&t(l),b&&t(h),b&&t(ee),b&&t(x),b&&t(ne),b&&t(M),b&&t(oe),b&&t(j)}}}function Bw(X){let d,k,m,u,v;return{c(){d=a("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),u=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=i(m);u=s(z,"Module"),z.forEach(t),v=s(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){g(l,d,h),e(d,k),e(d,m),e(m,u),e(d,v)},d(l){l&&t(d)}}}function Kw(X){let d,k,m,u,v;return u=new De({props:{code:`from transformers import XLNetTokenizer, TFXLNetForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),k=n("Example:"),m=c(),y(u.$$.fragment)},l(l){d=r(l,"P",{});var h=i(d);k=s(h,"Example:"),h.forEach(t),m=p(l),T(u.$$.fragment,l)},m(l,h){g(l,d,h),e(d,k),g(l,m,h),w(u,l,h),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){N(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(m),L(u,l)}}}function Rw(X){let d,k;return d=new De({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(m){T(d.$$.fragment,m)},m(m,u){w(d,m,u),k=!0},p:Se,i(m){k||($(d.$$.fragment,m),k=!0)},o(m){N(d.$$.fragment,m),k=!1},d(m){L(d,m)}}}function Vw(X){let d,k,m,u,v,l,h,z,ke,me,D,ae,ee,x,be,R,ve,he,Q,ye,re,Y,Te,ue,B,we,fe,K,de,$e,ne,M,E,ge,P,ie,Ne,V,Le,xe,C,le,G,ce,Fe,J,Xe,te,I,pe,Z,qe,oe,j,ze,O,Me,Ee,b,F,We,se,_e,Ue,q,Be,Ke,Oe,Re,Ve,S,H,je,Ie,W,Ye,He,Ce,Qe,U,Pe,pm,Pt,mm,Dr,hm,um,Ir,fm,gm,_s,_m,km,bm,no,vm,Hr,ym,Tm,Qr,wm,$m,Nm,tn,ec,so,on,tl,ks,Lm,ol,xm,tc,Ge,bs,Fm,vs,Xm,ys,qm,zm,Mm,Ts,Em,Wr,Cm,jm,Om,Ht,ws,Pm,nl,Am,Sm,$s,Ur,Dm,sl,Im,Hm,Br,Qm,al,Wm,Um,nn,Ns,Bm,Ls,Km,rl,Rm,Vm,Ym,Tt,xs,Gm,il,Jm,Zm,sn,eh,ao,th,ll,oh,nh,dl,sh,ah,rh,Kr,Fs,oc,ro,an,cl,Xs,ih,pl,lh,nc,it,qs,dh,io,ch,ml,ph,mh,zs,hh,uh,fh,Ms,gh,Rr,_h,kh,bh,Qt,Es,vh,hl,yh,Th,Cs,Vr,wh,ul,$h,Nh,Yr,Lh,fl,xh,Fh,wt,js,Xh,gl,qh,zh,rn,Mh,lo,Eh,_l,Ch,jh,kl,Oh,Ph,sc,co,ln,bl,Os,Ah,vl,Sh,ac,po,Ps,Dh,As,Ih,Gr,Hh,Qh,rc,mo,Ss,Wh,Ds,Uh,Jr,Bh,Kh,ic,ho,Is,Rh,Hs,Vh,Zr,Yh,Gh,lc,uo,Qs,Jh,Ws,Zh,ei,eu,tu,dc,fo,Us,ou,Bs,nu,yl,su,au,cc,go,Ks,ru,Rs,iu,ti,lu,du,pc,_o,Vs,cu,Ys,pu,oi,mu,hu,mc,ko,Gs,uu,Js,fu,ni,gu,_u,hc,bo,Zs,ku,ea,bu,si,vu,yu,uc,vo,ta,Tu,oa,wu,ai,$u,Nu,fc,yo,na,Lu,sa,xu,ri,Fu,Xu,gc,To,aa,qu,ra,zu,Tl,Mu,Eu,_c,wo,ia,Cu,la,ju,ii,Ou,Pu,kc,$o,dn,wl,da,Au,$l,Su,bc,lt,ca,Du,Nl,Iu,Hu,pa,Qu,li,Wu,Uu,Bu,ma,Ku,ha,Ru,Vu,Yu,$t,ua,Gu,No,Ju,di,Zu,ef,Ll,tf,of,nf,cn,sf,pn,vc,Lo,mn,xl,fa,af,Fl,rf,yc,dt,ga,lf,Xl,df,cf,_a,pf,ci,mf,hf,uf,ka,ff,ba,gf,_f,kf,Nt,va,bf,xo,vf,pi,yf,Tf,ql,wf,$f,Nf,hn,Lf,un,Tc,Fo,fn,zl,ya,xf,Ml,Ff,wc,ct,Ta,Xf,El,qf,zf,wa,Mf,mi,Ef,Cf,jf,$a,Of,Na,Pf,Af,Sf,et,La,Df,Xo,If,hi,Hf,Qf,Cl,Wf,Uf,Bf,gn,Kf,_n,Rf,kn,Vf,bn,Yf,vn,$c,qo,yn,jl,xa,Gf,Ol,Jf,Nc,pt,Fa,Zf,Pl,eg,tg,Xa,og,ui,ng,sg,ag,qa,rg,za,ig,lg,dg,Lt,Ma,cg,zo,pg,fi,mg,hg,Al,ug,fg,gg,Tn,_g,wn,Lc,Mo,$n,Sl,Ea,kg,Dl,bg,xc,mt,Ca,vg,Il,yg,Tg,ja,wg,gi,$g,Ng,Lg,Oa,xg,Pa,Fg,Xg,qg,ft,Aa,zg,Eo,Mg,_i,Eg,Cg,Hl,jg,Og,Pg,Nn,Ag,Ln,Sg,xn,Fc,Co,Fn,Ql,Sa,Dg,Wl,Ig,Xc,ht,Da,Hg,jo,Qg,Ul,Wg,Ug,Bl,Bg,Kg,Rg,Ia,Vg,ki,Yg,Gg,Jg,Ha,Zg,Qa,e_,t_,o_,gt,Wa,n_,Oo,s_,bi,a_,r_,Kl,i_,l_,d_,Xn,c_,qn,p_,zn,qc,Po,Mn,Rl,Ua,m_,Vl,h_,zc,ut,Ba,u_,Ao,f_,Yl,g_,__,Gl,k_,b_,v_,Ka,y_,vi,T_,w_,$_,Ra,N_,Va,L_,x_,F_,xt,Ya,X_,So,q_,yi,z_,M_,Jl,E_,C_,j_,En,O_,Cn,Mc,Do,jn,Zl,Ga,P_,ed,A_,Ec,tt,Ja,S_,td,D_,I_,Za,H_,Ti,Q_,W_,U_,er,B_,tr,K_,R_,V_,On,Y_,Ft,or,G_,Io,J_,wi,Z_,ek,od,tk,ok,nk,Pn,sk,An,Cc,Ho,Sn,nd,nr,ak,sd,rk,jc,ot,sr,ik,ad,lk,dk,ar,ck,$i,pk,mk,hk,rr,uk,ir,fk,gk,_k,Dn,kk,Xt,lr,bk,Qo,vk,Ni,yk,Tk,rd,wk,$k,Nk,In,Lk,Hn,Oc,Wo,Qn,id,dr,xk,ld,Fk,Pc,nt,cr,Xk,dd,qk,zk,pr,Mk,Li,Ek,Ck,jk,mr,Ok,hr,Pk,Ak,Sk,Wn,Dk,_t,ur,Ik,Uo,Hk,xi,Qk,Wk,cd,Uk,Bk,Kk,Un,Rk,Bn,Vk,Kn,Ac,Bo,Rn,pd,fr,Yk,md,Gk,Sc,st,gr,Jk,hd,Zk,eb,_r,tb,Fi,ob,nb,sb,kr,ab,br,rb,ib,lb,Vn,db,qt,vr,cb,Ko,pb,Xi,mb,hb,ud,ub,fb,gb,Yn,_b,Gn,Dc,Ro,Jn,fd,yr,kb,gd,bb,Ic,at,Tr,vb,_d,yb,Tb,wr,wb,qi,$b,Nb,Lb,$r,xb,Nr,Fb,Xb,qb,Zn,zb,kt,Lr,Mb,Vo,Eb,zi,Cb,jb,kd,Ob,Pb,Ab,es,Sb,ts,Db,os,Hc,Yo,ns,bd,xr,Ib,vd,Hb,Qc,rt,Fr,Qb,Go,Wb,yd,Ub,Bb,Td,Kb,Rb,Vb,Xr,Yb,Mi,Gb,Jb,Zb,qr,ev,zr,tv,ov,nv,ss,sv,bt,Mr,av,Jo,rv,Ei,iv,lv,wd,dv,cv,pv,as,mv,rs,hv,is,Wc;return l=new Ze({}),x=new Ze({}),W=new Ze({}),Pe=new A({props:{name:"class transformers.XLNetConfig",anchor:"transformers.XLNetConfig",parameters:[{name:"vocab_size",val:" = 32000"},{name:"d_model",val:" = 1024"},{name:"n_layer",val:" = 24"},{name:"n_head",val:" = 16"},{name:"d_inner",val:" = 4096"},{name:"ff_activation",val:" = 'gelu'"},{name:"untie_r",val:" = True"},{name:"attn_type",val:" = 'bi'"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"dropout",val:" = 0.1"},{name:"mem_len",val:" = 512"},{name:"reuse_len",val:" = None"},{name:"use_mems_eval",val:" = True"},{name:"use_mems_train",val:" = False"},{name:"bi_data",val:" = False"},{name:"clamp_len",val:" = -1"},{name:"same_length",val:" = False"},{name:"summary_type",val:" = 'last'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = 'tanh'"},{name:"summary_last_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"pad_token_id",val:" = 5"},{name:"bos_token_id",val:" = 1"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 32000) &#x2014;
Vocabulary size of the XLNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetModel">XLNetModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetModel">TFXLNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLNetConfig.d_model",description:`<strong>d_model</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
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

					</div>`,name:"use_mems_train"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/configuration_xlnet.py#L32"}}),tn=new Ae({props:{anchor:"transformers.XLNetConfig.example",$$slots:{default:[rw]},$$scope:{ctx:X}}}),ks=new Ze({}),bs=new A({props:{name:"class transformers.XLNetTokenizer",anchor:"transformers.XLNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet.py#L53"}}),ws=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet.py#L253",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ns=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.XLNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet.py#L278",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),xs=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet.py#L306",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new Ae({props:{anchor:"transformers.XLNetTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[iw]},$$scope:{ctx:X}}}),Fs=new A({props:{name:"save_vocabulary",anchor:"transformers.XLNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet.py#L336"}}),Xs=new Ze({}),qs=new A({props:{name:"class transformers.XLNetTokenizerFast",anchor:"transformers.XLNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '<sep>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '<cls>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<eop>', '<eod>']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L63"}}),Es=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L174",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),js=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/tokenization_xlnet_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new Ae({props:{anchor:"transformers.XLNetTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[lw]},$$scope:{ctx:X}}}),Os=new Ze({}),Ps=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L580"}}),Ss=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L614"}}),Is=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L651"}}),Qs=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L719"}}),Us=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L685"}}),Ks=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L755"}}),Vs=new A({props:{name:"class transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_top_log_probs",val:": typing.Optional[torch.FloatTensor] = None"},{name:"end_top_index",val:": typing.Optional[torch.LongTensor] = None"},{name:"cls_logits",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mems",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L792"}}),Gs=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_predict, hidden_size)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L800"}}),Zs=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L834"}}),ta=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>label</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L871"}}),na=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L939"}}),aa=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L905"}}),ia=new A({props:{name:"class transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"mems",val:": typing.Optional[typing.List[tensorflow.python.framework.ops.Tensor]] = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L975"}}),da=new Ze({}),ca=new A({props:{name:"class transformers.XLNetModel",anchor:"transformers.XLNetModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L932"}}),ua=new A({props:{name:"forward",anchor:"transformers.XLNetModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1061",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new Je({props:{$$slots:{default:[dw]},$$scope:{ctx:X}}}),pn=new Ae({props:{anchor:"transformers.XLNetModel.forward.example",$$slots:{default:[cw]},$$scope:{ctx:X}}}),fa=new Ze({}),ga=new A({props:{name:"class transformers.XLNetLMHeadModel",anchor:"transformers.XLNetLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1298"}}),va=new A({props:{name:"forward",anchor:"transformers.XLNetLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_predict)</code>, <em>optional</em>) &#x2014;
Labels for masked language modeling. <code>num_predict</code> corresponds to <code>target_mapping.shape[1]</code>. If
<code>target_mapping</code> is <code>None</code>, then <code>num_predict</code> corresponds to <code>sequence_length</code>.</p>
<p>The labels should correspond to the masked input words that should be predicted and depends on
<code>target_mapping</code>. Note in order to perform standard auto-regressive language modeling a <em><mask></mask></em> token has
to be added to the <code>input_ids</code> (see the <code>prepare_inputs_for_generation</code> function and examples below)</p>
<p>Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are ignored, the loss
is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetLMHeadModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new Je({props:{$$slots:{default:[pw]},$$scope:{ctx:X}}}),un=new Ae({props:{anchor:"transformers.XLNetLMHeadModel.forward.example",$$slots:{default:[mw]},$$scope:{ctx:X}}}),ya=new Ze({}),Ta=new A({props:{name:"class transformers.XLNetForSequenceClassification",anchor:"transformers.XLNetForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1502"}}),La=new A({props:{name:"forward",anchor:"transformers.XLNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1515",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForSequenceClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gn=new Je({props:{$$slots:{default:[hw]},$$scope:{ctx:X}}}),_n=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example",$$slots:{default:[uw]},$$scope:{ctx:X}}}),kn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-2",$$slots:{default:[fw]},$$scope:{ctx:X}}}),bn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-3",$$slots:{default:[gw]},$$scope:{ctx:X}}}),vn=new Ae({props:{anchor:"transformers.XLNetForSequenceClassification.forward.example-4",$$slots:{default:[_w]},$$scope:{ctx:X}}}),xa=new Ze({}),Fa=new A({props:{name:"class transformers.XLNetForMultipleChoice",anchor:"transformers.XLNetForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1700"}}),Ma=new A({props:{name:"forward",anchor:"transformers.XLNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1711",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForMultipleChoiceOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tn=new Je({props:{$$slots:{default:[kw]},$$scope:{ctx:X}}}),wn=new Ae({props:{anchor:"transformers.XLNetForMultipleChoice.forward.example",$$slots:{default:[bw]},$$scope:{ctx:X}}}),Ea=new Ze({}),Ca=new A({props:{name:"class transformers.XLNetForTokenClassification",anchor:"transformers.XLNetForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1612"}}),Aa=new A({props:{name:"forward",anchor:"transformers.XLNetForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1623",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForTokenClassificationOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Je({props:{$$slots:{default:[vw]},$$scope:{ctx:X}}}),Ln=new Ae({props:{anchor:"transformers.XLNetForTokenClassification.forward.example",$$slots:{default:[yw]},$$scope:{ctx:X}}}),xn=new Ae({props:{anchor:"transformers.XLNetForTokenClassification.forward.example-2",$$slots:{default:[Tw]},$$scope:{ctx:X}}}),Sa=new Ze({}),Da=new A({props:{name:"class transformers.XLNetForQuestionAnsweringSimple",anchor:"transformers.XLNetForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1804"}}),Wa=new A({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Je({props:{$$slots:{default:[ww]},$$scope:{ctx:X}}}),qn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example",$$slots:{default:[$w]},$$scope:{ctx:X}}}),zn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[Nw]},$$scope:{ctx:X}}}),Ua=new Ze({}),Ba=new A({props:{name:"class transformers.XLNetForQuestionAnswering",anchor:"transformers.XLNetForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1915"}}),Ya=new A({props:{name:"forward",anchor:"transformers.XLNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"mems",val:": typing.Optional[torch.Tensor] = None"},{name:"perm_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"target_mapping",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"input_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_xlnet.py#L1929",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput"
>transformers.models.xlnet.modeling_xlnet.XLNetForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new Je({props:{$$slots:{default:[Lw]},$$scope:{ctx:X}}}),Cn=new Ae({props:{anchor:"transformers.XLNetForQuestionAnswering.forward.example",$$slots:{default:[xw]},$$scope:{ctx:X}}}),Ga=new Ze({}),Ja=new A({props:{name:"class transformers.TFXLNetModel",anchor:"transformers.TFXLNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1130"}}),On=new Je({props:{$$slots:{default:[Fw]},$$scope:{ctx:X}}}),or=new A({props:{name:"call",anchor:"transformers.TFXLNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"mems",val:" = None"},{name:"perm_mask",val:" = None"},{name:"target_mapping",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"input_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_mems",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFXLNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1135",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Je({props:{$$slots:{default:[Xw]},$$scope:{ctx:X}}}),An=new Ae({props:{anchor:"transformers.TFXLNetModel.call.example",$$slots:{default:[qw]},$$scope:{ctx:X}}}),nr=new Ze({}),sr=new A({props:{name:"class transformers.TFXLNetLMHeadModel",anchor:"transformers.TFXLNetLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1195"}}),Dn=new Je({props:{$$slots:{default:[zw]},$$scope:{ctx:X}}}),lr=new A({props:{name:"call",anchor:"transformers.TFXLNetLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1249",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetLMHeadModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),In=new Je({props:{$$slots:{default:[Mw]},$$scope:{ctx:X}}}),Hn=new Ae({props:{anchor:"transformers.TFXLNetLMHeadModel.call.example",$$slots:{default:[Ew]},$$scope:{ctx:X}}}),dr=new Ze({}),cr=new A({props:{name:"class transformers.TFXLNetForSequenceClassification",anchor:"transformers.TFXLNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1362"}}),Wn=new Je({props:{$$slots:{default:[Cw]},$$scope:{ctx:X}}}),ur=new A({props:{name:"call",anchor:"transformers.TFXLNetForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1375",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForSequenceClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Un=new Je({props:{$$slots:{default:[jw]},$$scope:{ctx:X}}}),Bn=new Ae({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example",$$slots:{default:[Ow]},$$scope:{ctx:X}}}),Kn=new Ae({props:{anchor:"transformers.TFXLNetForSequenceClassification.call.example-2",$$slots:{default:[Pw]},$$scope:{ctx:X}}}),fr=new Ze({}),gr=new A({props:{name:"class transformers.TFXLNetForMultipleChoice",anchor:"transformers.TFXLNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1459"}}),Vn=new Je({props:{$$slots:{default:[Aw]},$$scope:{ctx:X}}}),vr=new A({props:{name:"call",anchor:"transformers.TFXLNetForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1481",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForMultipleChoiceOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yn=new Je({props:{$$slots:{default:[Sw]},$$scope:{ctx:X}}}),Gn=new Ae({props:{anchor:"transformers.TFXLNetForMultipleChoice.call.example",$$slots:{default:[Dw]},$$scope:{ctx:X}}}),yr=new Ze({}),Tr=new A({props:{name:"class transformers.TFXLNetForTokenClassification",anchor:"transformers.TFXLNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1592"}}),Zn=new Je({props:{$$slots:{default:[Iw]},$$scope:{ctx:X}}}),Lr=new A({props:{name:"call",anchor:"transformers.TFXLNetForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1602",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForTokenClassificationOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),es=new Je({props:{$$slots:{default:[Hw]},$$scope:{ctx:X}}}),ts=new Ae({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example",$$slots:{default:[Qw]},$$scope:{ctx:X}}}),os=new Ae({props:{anchor:"transformers.TFXLNetForTokenClassification.call.example-2",$$slots:{default:[Ww]},$$scope:{ctx:X}}}),xr=new Ze({}),Fr=new A({props:{name:"class transformers.TFXLNetForQuestionAnsweringSimple",anchor:"transformers.TFXLNetForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig">XLNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1680"}}),ss=new Je({props:{$$slots:{default:[Uw]},$$scope:{ctx:X}}}),Mr=new A({props:{name:"call",anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"mems",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"perm_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"target_mapping",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"input_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_mems",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetTokenizer">XLNetTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/xlnet/modeling_tf_xlnet.py#L1688",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetConfig"
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
  href="/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput"
>transformers.models.xlnet.modeling_tf_xlnet.TFXLNetForQuestionAnsweringSimpleOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),as=new Je({props:{$$slots:{default:[Bw]},$$scope:{ctx:X}}}),rs=new Ae({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example",$$slots:{default:[Kw]},$$scope:{ctx:X}}}),is=new Ae({props:{anchor:"transformers.TFXLNetForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Rw]},$$scope:{ctx:X}}}),{c(){d=a("meta"),k=c(),m=a("h1"),u=a("a"),v=a("span"),y(l.$$.fragment),h=c(),z=a("span"),ke=n("XLNet"),me=c(),D=a("h2"),ae=a("a"),ee=a("span"),y(x.$$.fragment),be=c(),R=a("span"),ve=n("Overview"),he=c(),Q=a("p"),ye=n("The XLNet model was proposed in "),re=a("a"),Y=n("XLNet: Generalized Autoregressive Pretraining for Language Understanding"),Te=n(` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),ue=c(),B=a("p"),we=n("The abstract from the paper is the following:"),fe=c(),K=a("p"),de=a("em"),$e=n(`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),ne=c(),M=a("p"),E=n("Tips:"),ge=c(),P=a("ul"),ie=a("li"),Ne=n("The specific attention pattern can be controlled at training and test time using the "),V=a("code"),Le=n("perm_mask"),xe=n(" input."),C=c(),le=a("li"),G=n(`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),ce=a("code"),Fe=n("target_mapping"),J=n(" input."),Xe=c(),te=a("li"),I=n("To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),pe=a("code"),Z=n("perm_mask"),qe=n(` and
`),oe=a("code"),j=n("target_mapping"),ze=n(` inputs to control the attention span and outputs (see examples in
`),O=a("em"),Me=n("examples/pytorch/text-generation/run_generation.py"),Ee=n(")"),b=c(),F=a("li"),We=n("XLNet is one of the few models that has no sequence length limit."),se=c(),_e=a("p"),Ue=n("This model was contributed by "),q=a("a"),Be=n("thomwolf"),Ke=n(". The original code can be found "),Oe=a("a"),Re=n("here"),Ve=n("."),S=c(),H=a("h2"),je=a("a"),Ie=a("span"),y(W.$$.fragment),Ye=c(),He=a("span"),Ce=n("XLNetConfig"),Qe=c(),U=a("div"),y(Pe.$$.fragment),pm=c(),Pt=a("p"),mm=n("This is the configuration class to store the configuration of a "),Dr=a("a"),hm=n("XLNetModel"),um=n(" or a "),Ir=a("a"),fm=n("TFXLNetModel"),gm=n(`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),_s=a("a"),_m=n("xlnet-large-cased"),km=n(" architecture."),bm=c(),no=a("p"),vm=n("Configuration objects inherit from "),Hr=a("a"),ym=n("PretrainedConfig"),Tm=n(` and can be used to control the model outputs. Read the
documentation from `),Qr=a("a"),wm=n("PretrainedConfig"),$m=n(" for more information."),Nm=c(),y(tn.$$.fragment),ec=c(),so=a("h2"),on=a("a"),tl=a("span"),y(ks.$$.fragment),Lm=c(),ol=a("span"),xm=n("XLNetTokenizer"),tc=c(),Ge=a("div"),y(bs.$$.fragment),Fm=c(),vs=a("p"),Xm=n("Construct an XLNet tokenizer. Based on "),ys=a("a"),qm=n("SentencePiece"),zm=n("."),Mm=c(),Ts=a("p"),Em=n("This tokenizer inherits from "),Wr=a("a"),Cm=n("PreTrainedTokenizer"),jm=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Om=c(),Ht=a("div"),y(ws.$$.fragment),Pm=c(),nl=a("p"),Am=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Sm=c(),$s=a("ul"),Ur=a("li"),Dm=n("single sequence: "),sl=a("code"),Im=n("X <sep> <cls>"),Hm=c(),Br=a("li"),Qm=n("pair of sequences: "),al=a("code"),Wm=n("A <sep> B <sep> <cls>"),Um=c(),nn=a("div"),y(Ns.$$.fragment),Bm=c(),Ls=a("p"),Km=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=a("code"),Rm=n("prepare_for_model"),Vm=n(" method."),Ym=c(),Tt=a("div"),y(xs.$$.fragment),Gm=c(),il=a("p"),Jm=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Zm=c(),y(sn.$$.fragment),eh=c(),ao=a("p"),th=n("If "),ll=a("code"),oh=n("token_ids_1"),nh=n(" is "),dl=a("code"),sh=n("None"),ah=n(", this method only returns the first portion of the mask (0s)."),rh=c(),Kr=a("div"),y(Fs.$$.fragment),oc=c(),ro=a("h2"),an=a("a"),cl=a("span"),y(Xs.$$.fragment),ih=c(),pl=a("span"),lh=n("XLNetTokenizerFast"),nc=c(),it=a("div"),y(qs.$$.fragment),dh=c(),io=a("p"),ch=n("Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ml=a("em"),ph=n("tokenizers"),mh=n(` library). Based on
`),zs=a("a"),hh=n("Unigram"),uh=n("."),fh=c(),Ms=a("p"),gh=n("This tokenizer inherits from "),Rr=a("a"),_h=n("PreTrainedTokenizerFast"),kh=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),bh=c(),Qt=a("div"),y(Es.$$.fragment),vh=c(),hl=a("p"),yh=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Th=c(),Cs=a("ul"),Vr=a("li"),wh=n("single sequence: "),ul=a("code"),$h=n("X <sep> <cls>"),Nh=c(),Yr=a("li"),Lh=n("pair of sequences: "),fl=a("code"),xh=n("A <sep> B <sep> <cls>"),Fh=c(),wt=a("div"),y(js.$$.fragment),Xh=c(),gl=a("p"),qh=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),zh=c(),y(rn.$$.fragment),Mh=c(),lo=a("p"),Eh=n("If "),_l=a("code"),Ch=n("token_ids_1"),jh=n(" is "),kl=a("code"),Oh=n("None"),Ph=n(", this method only returns the first portion of the mask (0s)."),sc=c(),co=a("h2"),ln=a("a"),bl=a("span"),y(Os.$$.fragment),Ah=c(),vl=a("span"),Sh=n("XLNet specific outputs"),ac=c(),po=a("div"),y(Ps.$$.fragment),Dh=c(),As=a("p"),Ih=n("Output type of "),Gr=a("a"),Hh=n("XLNetModel"),Qh=n("."),rc=c(),mo=a("div"),y(Ss.$$.fragment),Wh=c(),Ds=a("p"),Uh=n("Output type of "),Jr=a("a"),Bh=n("XLNetLMHeadModel"),Kh=n("."),ic=c(),ho=a("div"),y(Is.$$.fragment),Rh=c(),Hs=a("p"),Vh=n("Output type of "),Zr=a("a"),Yh=n("XLNetForSequenceClassification"),Gh=n("."),lc=c(),uo=a("div"),y(Qs.$$.fragment),Jh=c(),Ws=a("p"),Zh=n("Output type of "),ei=a("a"),eu=n("XLNetForMultipleChoice"),tu=n("."),dc=c(),fo=a("div"),y(Us.$$.fragment),ou=c(),Bs=a("p"),nu=n("Output type of "),yl=a("code"),su=n("XLNetForTokenClassificationOutput"),au=n("."),cc=c(),go=a("div"),y(Ks.$$.fragment),ru=c(),Rs=a("p"),iu=n("Output type of "),ti=a("a"),lu=n("XLNetForQuestionAnsweringSimple"),du=n("."),pc=c(),_o=a("div"),y(Vs.$$.fragment),cu=c(),Ys=a("p"),pu=n("Output type of "),oi=a("a"),mu=n("XLNetForQuestionAnswering"),hu=n("."),mc=c(),ko=a("div"),y(Gs.$$.fragment),uu=c(),Js=a("p"),fu=n("Output type of "),ni=a("a"),gu=n("TFXLNetModel"),_u=n("."),hc=c(),bo=a("div"),y(Zs.$$.fragment),ku=c(),ea=a("p"),bu=n("Output type of "),si=a("a"),vu=n("TFXLNetLMHeadModel"),yu=n("."),uc=c(),vo=a("div"),y(ta.$$.fragment),Tu=c(),oa=a("p"),wu=n("Output type of "),ai=a("a"),$u=n("TFXLNetForSequenceClassification"),Nu=n("."),fc=c(),yo=a("div"),y(na.$$.fragment),Lu=c(),sa=a("p"),xu=n("Output type of "),ri=a("a"),Fu=n("TFXLNetForMultipleChoice"),Xu=n("."),gc=c(),To=a("div"),y(aa.$$.fragment),qu=c(),ra=a("p"),zu=n("Output type of "),Tl=a("code"),Mu=n("TFXLNetForTokenClassificationOutput"),Eu=n("."),_c=c(),wo=a("div"),y(ia.$$.fragment),Cu=c(),la=a("p"),ju=n("Output type of "),ii=a("a"),Ou=n("TFXLNetForQuestionAnsweringSimple"),Pu=n("."),kc=c(),$o=a("h2"),dn=a("a"),wl=a("span"),y(da.$$.fragment),Au=c(),$l=a("span"),Su=n("XLNetModel"),bc=c(),lt=a("div"),y(ca.$$.fragment),Du=c(),Nl=a("p"),Iu=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),Hu=c(),pa=a("p"),Qu=n("This model inherits from "),li=a("a"),Wu=n("PreTrainedModel"),Uu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu=c(),ma=a("p"),Ku=n("This model is also a PyTorch "),ha=a("a"),Ru=n("torch.nn.Module"),Vu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yu=c(),$t=a("div"),y(ua.$$.fragment),Gu=c(),No=a("p"),Ju=n("The "),di=a("a"),Zu=n("XLNetModel"),ef=n(" forward method, overrides the "),Ll=a("code"),tf=n("__call__"),of=n(" special method."),nf=c(),y(cn.$$.fragment),sf=c(),y(pn.$$.fragment),vc=c(),Lo=a("h2"),mn=a("a"),xl=a("span"),y(fa.$$.fragment),af=c(),Fl=a("span"),rf=n("XLNetLMHeadModel"),yc=c(),dt=a("div"),y(ga.$$.fragment),lf=c(),Xl=a("p"),df=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),cf=c(),_a=a("p"),pf=n("This model inherits from "),ci=a("a"),mf=n("PreTrainedModel"),hf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uf=c(),ka=a("p"),ff=n("This model is also a PyTorch "),ba=a("a"),gf=n("torch.nn.Module"),_f=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kf=c(),Nt=a("div"),y(va.$$.fragment),bf=c(),xo=a("p"),vf=n("The "),pi=a("a"),yf=n("XLNetLMHeadModel"),Tf=n(" forward method, overrides the "),ql=a("code"),wf=n("__call__"),$f=n(" special method."),Nf=c(),y(hn.$$.fragment),Lf=c(),y(un.$$.fragment),Tc=c(),Fo=a("h2"),fn=a("a"),zl=a("span"),y(ya.$$.fragment),xf=c(),Ml=a("span"),Ff=n("XLNetForSequenceClassification"),wc=c(),ct=a("div"),y(Ta.$$.fragment),Xf=c(),El=a("p"),qf=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),zf=c(),wa=a("p"),Mf=n("This model inherits from "),mi=a("a"),Ef=n("PreTrainedModel"),Cf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jf=c(),$a=a("p"),Of=n("This model is also a PyTorch "),Na=a("a"),Pf=n("torch.nn.Module"),Af=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sf=c(),et=a("div"),y(La.$$.fragment),Df=c(),Xo=a("p"),If=n("The "),hi=a("a"),Hf=n("XLNetForSequenceClassification"),Qf=n(" forward method, overrides the "),Cl=a("code"),Wf=n("__call__"),Uf=n(" special method."),Bf=c(),y(gn.$$.fragment),Kf=c(),y(_n.$$.fragment),Rf=c(),y(kn.$$.fragment),Vf=c(),y(bn.$$.fragment),Yf=c(),y(vn.$$.fragment),$c=c(),qo=a("h2"),yn=a("a"),jl=a("span"),y(xa.$$.fragment),Gf=c(),Ol=a("span"),Jf=n("XLNetForMultipleChoice"),Nc=c(),pt=a("div"),y(Fa.$$.fragment),Zf=c(),Pl=a("p"),eg=n(`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),tg=c(),Xa=a("p"),og=n("This model inherits from "),ui=a("a"),ng=n("PreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ag=c(),qa=a("p"),rg=n("This model is also a PyTorch "),za=a("a"),ig=n("torch.nn.Module"),lg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dg=c(),Lt=a("div"),y(Ma.$$.fragment),cg=c(),zo=a("p"),pg=n("The "),fi=a("a"),mg=n("XLNetForMultipleChoice"),hg=n(" forward method, overrides the "),Al=a("code"),ug=n("__call__"),fg=n(" special method."),gg=c(),y(Tn.$$.fragment),_g=c(),y(wn.$$.fragment),Lc=c(),Mo=a("h2"),$n=a("a"),Sl=a("span"),y(Ea.$$.fragment),kg=c(),Dl=a("span"),bg=n("XLNetForTokenClassification"),xc=c(),mt=a("div"),y(Ca.$$.fragment),vg=c(),Il=a("p"),yg=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Tg=c(),ja=a("p"),wg=n("This model inherits from "),gi=a("a"),$g=n("PreTrainedModel"),Ng=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lg=c(),Oa=a("p"),xg=n("This model is also a PyTorch "),Pa=a("a"),Fg=n("torch.nn.Module"),Xg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qg=c(),ft=a("div"),y(Aa.$$.fragment),zg=c(),Eo=a("p"),Mg=n("The "),_i=a("a"),Eg=n("XLNetForTokenClassification"),Cg=n(" forward method, overrides the "),Hl=a("code"),jg=n("__call__"),Og=n(" special method."),Pg=c(),y(Nn.$$.fragment),Ag=c(),y(Ln.$$.fragment),Sg=c(),y(xn.$$.fragment),Fc=c(),Co=a("h2"),Fn=a("a"),Ql=a("span"),y(Sa.$$.fragment),Dg=c(),Wl=a("span"),Ig=n("XLNetForQuestionAnsweringSimple"),Xc=c(),ht=a("div"),y(Da.$$.fragment),Hg=c(),jo=a("p"),Qg=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ul=a("code"),Wg=n("span start logits"),Ug=n(" and "),Bl=a("code"),Bg=n("span end logits"),Kg=n(")."),Rg=c(),Ia=a("p"),Vg=n("This model inherits from "),ki=a("a"),Yg=n("PreTrainedModel"),Gg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=c(),Ha=a("p"),Zg=n("This model is also a PyTorch "),Qa=a("a"),e_=n("torch.nn.Module"),t_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),o_=c(),gt=a("div"),y(Wa.$$.fragment),n_=c(),Oo=a("p"),s_=n("The "),bi=a("a"),a_=n("XLNetForQuestionAnsweringSimple"),r_=n(" forward method, overrides the "),Kl=a("code"),i_=n("__call__"),l_=n(" special method."),d_=c(),y(Xn.$$.fragment),c_=c(),y(qn.$$.fragment),p_=c(),y(zn.$$.fragment),qc=c(),Po=a("h2"),Mn=a("a"),Rl=a("span"),y(Ua.$$.fragment),m_=c(),Vl=a("span"),h_=n("XLNetForQuestionAnswering"),zc=c(),ut=a("div"),y(Ba.$$.fragment),u_=c(),Ao=a("p"),f_=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yl=a("code"),g_=n("span start logits"),__=n(" and "),Gl=a("code"),k_=n("span end logits"),b_=n(")."),v_=c(),Ka=a("p"),y_=n("This model inherits from "),vi=a("a"),T_=n("PreTrainedModel"),w_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=c(),Ra=a("p"),N_=n("This model is also a PyTorch "),Va=a("a"),L_=n("torch.nn.Module"),x_=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),F_=c(),xt=a("div"),y(Ya.$$.fragment),X_=c(),So=a("p"),q_=n("The "),yi=a("a"),z_=n("XLNetForQuestionAnswering"),M_=n(" forward method, overrides the "),Jl=a("code"),E_=n("__call__"),C_=n(" special method."),j_=c(),y(En.$$.fragment),O_=c(),y(Cn.$$.fragment),Mc=c(),Do=a("h2"),jn=a("a"),Zl=a("span"),y(Ga.$$.fragment),P_=c(),ed=a("span"),A_=n("TFXLNetModel"),Ec=c(),tt=a("div"),y(Ja.$$.fragment),S_=c(),td=a("p"),D_=n("The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),I_=c(),Za=a("p"),H_=n("This model inherits from "),Ti=a("a"),Q_=n("TFPreTrainedModel"),W_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U_=c(),er=a("p"),B_=n("This model is also a "),tr=a("a"),K_=n("tf.keras.Model"),R_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),V_=c(),y(On.$$.fragment),Y_=c(),Ft=a("div"),y(or.$$.fragment),G_=c(),Io=a("p"),J_=n("The "),wi=a("a"),Z_=n("TFXLNetModel"),ek=n(" forward method, overrides the "),od=a("code"),tk=n("__call__"),ok=n(" special method."),nk=c(),y(Pn.$$.fragment),sk=c(),y(An.$$.fragment),Cc=c(),Ho=a("h2"),Sn=a("a"),nd=a("span"),y(nr.$$.fragment),ak=c(),sd=a("span"),rk=n("TFXLNetLMHeadModel"),jc=c(),ot=a("div"),y(sr.$$.fragment),ik=c(),ad=a("p"),lk=n("XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),dk=c(),ar=a("p"),ck=n("This model inherits from "),$i=a("a"),pk=n("TFPreTrainedModel"),mk=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),rr=a("p"),uk=n("This model is also a "),ir=a("a"),fk=n("tf.keras.Model"),gk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_k=c(),y(Dn.$$.fragment),kk=c(),Xt=a("div"),y(lr.$$.fragment),bk=c(),Qo=a("p"),vk=n("The "),Ni=a("a"),yk=n("TFXLNetLMHeadModel"),Tk=n(" forward method, overrides the "),rd=a("code"),wk=n("__call__"),$k=n(" special method."),Nk=c(),y(In.$$.fragment),Lk=c(),y(Hn.$$.fragment),Oc=c(),Wo=a("h2"),Qn=a("a"),id=a("span"),y(dr.$$.fragment),xk=c(),ld=a("span"),Fk=n("TFXLNetForSequenceClassification"),Pc=c(),nt=a("div"),y(cr.$$.fragment),Xk=c(),dd=a("p"),qk=n(`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),zk=c(),pr=a("p"),Mk=n("This model inherits from "),Li=a("a"),Ek=n("TFPreTrainedModel"),Ck=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jk=c(),mr=a("p"),Ok=n("This model is also a "),hr=a("a"),Pk=n("tf.keras.Model"),Ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sk=c(),y(Wn.$$.fragment),Dk=c(),_t=a("div"),y(ur.$$.fragment),Ik=c(),Uo=a("p"),Hk=n("The "),xi=a("a"),Qk=n("TFXLNetForSequenceClassification"),Wk=n(" forward method, overrides the "),cd=a("code"),Uk=n("__call__"),Bk=n(" special method."),Kk=c(),y(Un.$$.fragment),Rk=c(),y(Bn.$$.fragment),Vk=c(),y(Kn.$$.fragment),Ac=c(),Bo=a("h2"),Rn=a("a"),pd=a("span"),y(fr.$$.fragment),Yk=c(),md=a("span"),Gk=n("TFLNetForMultipleChoice"),Sc=c(),st=a("div"),y(gr.$$.fragment),Jk=c(),hd=a("p"),Zk=n(`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),eb=c(),_r=a("p"),tb=n("This model inherits from "),Fi=a("a"),ob=n("TFPreTrainedModel"),nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=c(),kr=a("p"),ab=n("This model is also a "),br=a("a"),rb=n("tf.keras.Model"),ib=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lb=c(),y(Vn.$$.fragment),db=c(),qt=a("div"),y(vr.$$.fragment),cb=c(),Ko=a("p"),pb=n("The "),Xi=a("a"),mb=n("TFXLNetForMultipleChoice"),hb=n(" forward method, overrides the "),ud=a("code"),ub=n("__call__"),fb=n(" special method."),gb=c(),y(Yn.$$.fragment),_b=c(),y(Gn.$$.fragment),Dc=c(),Ro=a("h2"),Jn=a("a"),fd=a("span"),y(yr.$$.fragment),kb=c(),gd=a("span"),bb=n("TFXLNetForTokenClassification"),Ic=c(),at=a("div"),y(Tr.$$.fragment),vb=c(),_d=a("p"),yb=n(`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Tb=c(),wr=a("p"),wb=n("This model inherits from "),qi=a("a"),$b=n("TFPreTrainedModel"),Nb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lb=c(),$r=a("p"),xb=n("This model is also a "),Nr=a("a"),Fb=n("tf.keras.Model"),Xb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qb=c(),y(Zn.$$.fragment),zb=c(),kt=a("div"),y(Lr.$$.fragment),Mb=c(),Vo=a("p"),Eb=n("The "),zi=a("a"),Cb=n("TFXLNetForTokenClassification"),jb=n(" forward method, overrides the "),kd=a("code"),Ob=n("__call__"),Pb=n(" special method."),Ab=c(),y(es.$$.fragment),Sb=c(),y(ts.$$.fragment),Db=c(),y(os.$$.fragment),Hc=c(),Yo=a("h2"),ns=a("a"),bd=a("span"),y(xr.$$.fragment),Ib=c(),vd=a("span"),Hb=n("TFXLNetForQuestionAnsweringSimple"),Qc=c(),rt=a("div"),y(Fr.$$.fragment),Qb=c(),Go=a("p"),Wb=n(`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yd=a("code"),Ub=n("span start logits"),Bb=n(" and "),Td=a("code"),Kb=n("span end logits"),Rb=n(")."),Vb=c(),Xr=a("p"),Yb=n("This model inherits from "),Mi=a("a"),Gb=n("TFPreTrainedModel"),Jb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=c(),qr=a("p"),ev=n("This model is also a "),zr=a("a"),tv=n("tf.keras.Model"),ov=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nv=c(),y(ss.$$.fragment),sv=c(),bt=a("div"),y(Mr.$$.fragment),av=c(),Jo=a("p"),rv=n("The "),Ei=a("a"),iv=n("TFXLNetForQuestionAnsweringSimple"),lv=n(" forward method, overrides the "),wd=a("code"),dv=n("__call__"),cv=n(" special method."),pv=c(),y(as.$$.fragment),mv=c(),y(rs.$$.fragment),hv=c(),y(is.$$.fragment),this.h()},l(o){const _=sw('[data-svelte="svelte-1phssyn"]',document.head);d=r(_,"META",{name:!0,content:!0}),_.forEach(t),k=p(o),m=r(o,"H1",{class:!0});var Er=i(m);u=r(Er,"A",{id:!0,class:!0,href:!0});var $d=i(u);v=r($d,"SPAN",{});var Nd=i(v);T(l.$$.fragment,Nd),Nd.forEach(t),$d.forEach(t),h=p(Er),z=r(Er,"SPAN",{});var Ld=i(z);ke=s(Ld,"XLNet"),Ld.forEach(t),Er.forEach(t),me=p(o),D=r(o,"H2",{class:!0});var Cr=i(D);ae=r(Cr,"A",{id:!0,class:!0,href:!0});var xd=i(ae);ee=r(xd,"SPAN",{});var Fd=i(ee);T(x.$$.fragment,Fd),Fd.forEach(t),xd.forEach(t),be=p(Cr),R=r(Cr,"SPAN",{});var Xd=i(R);ve=s(Xd,"Overview"),Xd.forEach(t),Cr.forEach(t),he=p(o),Q=r(o,"P",{});var jr=i(Q);ye=s(jr,"The XLNet model was proposed in "),re=r(jr,"A",{href:!0,rel:!0});var qd=i(re);Y=s(qd,"XLNet: Generalized Autoregressive Pretraining for Language Understanding"),qd.forEach(t),Te=s(jr,` by Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Carbonell, Ruslan Salakhutdinov,
Quoc V. Le. XLnet is an extension of the Transformer-XL model pre-trained using an autoregressive method to learn
bidirectional contexts by maximizing the expected likelihood over all permutations of the input sequence factorization
order.`),jr.forEach(t),ue=p(o),B=r(o,"P",{});var zd=i(B);we=s(zd,"The abstract from the paper is the following:"),zd.forEach(t),fe=p(o),K=r(o,"P",{});var Md=i(K);de=r(Md,"EM",{});var Ed=i(de);$e=s(Ed,`With the capability of modeling bidirectional contexts, denoising autoencoding based pretraining like BERT achieves
better performance than pretraining approaches based on autoregressive language modeling. However, relying on
corrupting the input with masks, BERT neglects dependency between the masked positions and suffers from a
pretrain-finetune discrepancy. In light of these pros and cons, we propose XLNet, a generalized autoregressive
pretraining method that (1) enables learning bidirectional contexts by maximizing the expected likelihood over all
permutations of the factorization order and (2) overcomes the limitations of BERT thanks to its autoregressive
formulation. Furthermore, XLNet integrates ideas from Transformer-XL, the state-of-the-art autoregressive model, into
pretraining. Empirically, under comparable experiment settings, XLNet outperforms BERT on 20 tasks, often by a large
margin, including question answering, natural language inference, sentiment analysis, and document ranking.`),Ed.forEach(t),Md.forEach(t),ne=p(o),M=r(o,"P",{});var Cd=i(M);E=s(Cd,"Tips:"),Cd.forEach(t),ge=p(o),P=r(o,"UL",{});var At=i(P);ie=r(At,"LI",{});var Or=i(ie);Ne=s(Or,"The specific attention pattern can be controlled at training and test time using the "),V=r(Or,"CODE",{});var jd=i(V);Le=s(jd,"perm_mask"),jd.forEach(t),xe=s(Or," input."),Or.forEach(t),C=p(At),le=r(At,"LI",{});var Pr=i(le);G=s(Pr,`Due to the difficulty of training a fully auto-regressive model over various factorization order, XLNet is pretrained
using only a sub-set of the output tokens as target which are selected with the `),ce=r(Pr,"CODE",{});var Od=i(ce);Fe=s(Od,"target_mapping"),Od.forEach(t),J=s(Pr," input."),Pr.forEach(t),Xe=p(At),te=r(At,"LI",{});var St=i(te);I=s(St,"To use XLNet for sequential decoding (i.e. not in fully bi-directional setting), use the "),pe=r(St,"CODE",{});var Pd=i(pe);Z=s(Pd,"perm_mask"),Pd.forEach(t),qe=s(St,` and
`),oe=r(St,"CODE",{});var Ad=i(oe);j=s(Ad,"target_mapping"),Ad.forEach(t),ze=s(St,` inputs to control the attention span and outputs (see examples in
`),O=r(St,"EM",{});var Sd=i(O);Me=s(Sd,"examples/pytorch/text-generation/run_generation.py"),Sd.forEach(t),Ee=s(St,")"),St.forEach(t),b=p(At),F=r(At,"LI",{});var Dd=i(F);We=s(Dd,"XLNet is one of the few models that has no sequence length limit."),Dd.forEach(t),At.forEach(t),se=p(o),_e=r(o,"P",{});var Zo=i(_e);Ue=s(Zo,"This model was contributed by "),q=r(Zo,"A",{href:!0,rel:!0});var Id=i(q);Be=s(Id,"thomwolf"),Id.forEach(t),Ke=s(Zo,". The original code can be found "),Oe=r(Zo,"A",{href:!0,rel:!0});var Hd=i(Oe);Re=s(Hd,"here"),Hd.forEach(t),Ve=s(Zo,"."),Zo.forEach(t),S=p(o),H=r(o,"H2",{class:!0});var Ar=i(H);je=r(Ar,"A",{id:!0,class:!0,href:!0});var Qd=i(je);Ie=r(Qd,"SPAN",{});var Wd=i(Ie);T(W.$$.fragment,Wd),Wd.forEach(t),Qd.forEach(t),Ye=p(Ar),He=r(Ar,"SPAN",{});var Ud=i(He);Ce=s(Ud,"XLNetConfig"),Ud.forEach(t),Ar.forEach(t),Qe=p(o),U=r(o,"DIV",{class:!0});var Dt=i(U);T(Pe.$$.fragment,Dt),pm=p(Dt),Pt=r(Dt,"P",{});var It=i(Pt);mm=s(It,"This is the configuration class to store the configuration of a "),Dr=r(It,"A",{href:!0});var Bd=i(Dr);hm=s(Bd,"XLNetModel"),Bd.forEach(t),um=s(It," or a "),Ir=r(It,"A",{href:!0});var Kd=i(Ir);fm=s(Kd,"TFXLNetModel"),Kd.forEach(t),gm=s(It,`. It is used to
instantiate a XLNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the
`),_s=r(It,"A",{href:!0,rel:!0});var Rd=i(_s);_m=s(Rd,"xlnet-large-cased"),Rd.forEach(t),km=s(It," architecture."),It.forEach(t),bm=p(Dt),no=r(Dt,"P",{});var en=i(no);vm=s(en,"Configuration objects inherit from "),Hr=r(en,"A",{href:!0});var Vd=i(Hr);ym=s(Vd,"PretrainedConfig"),Vd.forEach(t),Tm=s(en,` and can be used to control the model outputs. Read the
documentation from `),Qr=r(en,"A",{href:!0});var Yd=i(Qr);wm=s(Yd,"PretrainedConfig"),Yd.forEach(t),$m=s(en," for more information."),en.forEach(t),Nm=p(Dt),T(tn.$$.fragment,Dt),Dt.forEach(t),ec=p(o),so=r(o,"H2",{class:!0});var Sr=i(so);on=r(Sr,"A",{id:!0,class:!0,href:!0});var Gd=i(on);tl=r(Gd,"SPAN",{});var Jd=i(tl);T(ks.$$.fragment,Jd),Jd.forEach(t),Gd.forEach(t),Lm=p(Sr),ol=r(Sr,"SPAN",{});var Zd=i(ol);xm=s(Zd,"XLNetTokenizer"),Zd.forEach(t),Sr.forEach(t),tc=p(o),Ge=r(o,"DIV",{class:!0});var vt=i(Ge);T(bs.$$.fragment,vt),Fm=p(vt),vs=r(vt,"P",{});var Uc=i(vs);Xm=s(Uc,"Construct an XLNet tokenizer. Based on "),ys=r(Uc,"A",{href:!0,rel:!0});var kv=i(ys);qm=s(kv,"SentencePiece"),kv.forEach(t),zm=s(Uc,"."),Uc.forEach(t),Mm=p(vt),Ts=r(vt,"P",{});var Bc=i(Ts);Em=s(Bc,"This tokenizer inherits from "),Wr=r(Bc,"A",{href:!0});var bv=i(Wr);Cm=s(bv,"PreTrainedTokenizer"),bv.forEach(t),jm=s(Bc,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Bc.forEach(t),Om=p(vt),Ht=r(vt,"DIV",{class:!0});var Ci=i(Ht);T(ws.$$.fragment,Ci),Pm=p(Ci),nl=r(Ci,"P",{});var vv=i(nl);Am=s(vv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),vv.forEach(t),Sm=p(Ci),$s=r(Ci,"UL",{});var Kc=i($s);Ur=r(Kc,"LI",{});var uv=i(Ur);Dm=s(uv,"single sequence: "),sl=r(uv,"CODE",{});var yv=i(sl);Im=s(yv,"X <sep> <cls>"),yv.forEach(t),uv.forEach(t),Hm=p(Kc),Br=r(Kc,"LI",{});var fv=i(Br);Qm=s(fv,"pair of sequences: "),al=r(fv,"CODE",{});var Tv=i(al);Wm=s(Tv,"A <sep> B <sep> <cls>"),Tv.forEach(t),fv.forEach(t),Kc.forEach(t),Ci.forEach(t),Um=p(vt),nn=r(vt,"DIV",{class:!0});var Rc=i(nn);T(Ns.$$.fragment,Rc),Bm=p(Rc),Ls=r(Rc,"P",{});var Vc=i(Ls);Km=s(Vc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rl=r(Vc,"CODE",{});var wv=i(rl);Rm=s(wv,"prepare_for_model"),wv.forEach(t),Vm=s(Vc," method."),Vc.forEach(t),Rc.forEach(t),Ym=p(vt),Tt=r(vt,"DIV",{class:!0});var ls=i(Tt);T(xs.$$.fragment,ls),Gm=p(ls),il=r(ls,"P",{});var $v=i(il);Jm=s($v,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),$v.forEach(t),Zm=p(ls),T(sn.$$.fragment,ls),eh=p(ls),ao=r(ls,"P",{});var ji=i(ao);th=s(ji,"If "),ll=r(ji,"CODE",{});var Nv=i(ll);oh=s(Nv,"token_ids_1"),Nv.forEach(t),nh=s(ji," is "),dl=r(ji,"CODE",{});var Lv=i(dl);sh=s(Lv,"None"),Lv.forEach(t),ah=s(ji,", this method only returns the first portion of the mask (0s)."),ji.forEach(t),ls.forEach(t),rh=p(vt),Kr=r(vt,"DIV",{class:!0});var xv=i(Kr);T(Fs.$$.fragment,xv),xv.forEach(t),vt.forEach(t),oc=p(o),ro=r(o,"H2",{class:!0});var Yc=i(ro);an=r(Yc,"A",{id:!0,class:!0,href:!0});var Fv=i(an);cl=r(Fv,"SPAN",{});var Xv=i(cl);T(Xs.$$.fragment,Xv),Xv.forEach(t),Fv.forEach(t),ih=p(Yc),pl=r(Yc,"SPAN",{});var qv=i(pl);lh=s(qv,"XLNetTokenizerFast"),qv.forEach(t),Yc.forEach(t),nc=p(o),it=r(o,"DIV",{class:!0});var Wt=i(it);T(qs.$$.fragment,Wt),dh=p(Wt),io=r(Wt,"P",{});var Oi=i(io);ch=s(Oi,"Construct a \u201Cfast\u201D XLNet tokenizer (backed by HuggingFace\u2019s "),ml=r(Oi,"EM",{});var zv=i(ml);ph=s(zv,"tokenizers"),zv.forEach(t),mh=s(Oi,` library). Based on
`),zs=r(Oi,"A",{href:!0,rel:!0});var Mv=i(zs);hh=s(Mv,"Unigram"),Mv.forEach(t),uh=s(Oi,"."),Oi.forEach(t),fh=p(Wt),Ms=r(Wt,"P",{});var Gc=i(Ms);gh=s(Gc,"This tokenizer inherits from "),Rr=r(Gc,"A",{href:!0});var Ev=i(Rr);_h=s(Ev,"PreTrainedTokenizerFast"),Ev.forEach(t),kh=s(Gc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Gc.forEach(t),bh=p(Wt),Qt=r(Wt,"DIV",{class:!0});var Pi=i(Qt);T(Es.$$.fragment,Pi),vh=p(Pi),hl=r(Pi,"P",{});var Cv=i(hl);yh=s(Cv,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLNet sequence has the following format:`),Cv.forEach(t),Th=p(Pi),Cs=r(Pi,"UL",{});var Jc=i(Cs);Vr=r(Jc,"LI",{});var gv=i(Vr);wh=s(gv,"single sequence: "),ul=r(gv,"CODE",{});var jv=i(ul);$h=s(jv,"X <sep> <cls>"),jv.forEach(t),gv.forEach(t),Nh=p(Jc),Yr=r(Jc,"LI",{});var _v=i(Yr);Lh=s(_v,"pair of sequences: "),fl=r(_v,"CODE",{});var Ov=i(fl);xh=s(Ov,"A <sep> B <sep> <cls>"),Ov.forEach(t),_v.forEach(t),Jc.forEach(t),Pi.forEach(t),Fh=p(Wt),wt=r(Wt,"DIV",{class:!0});var ds=i(wt);T(js.$$.fragment,ds),Xh=p(ds),gl=r(ds,"P",{});var Pv=i(gl);qh=s(Pv,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLNet"),Pv.forEach(t),zh=p(ds),T(rn.$$.fragment,ds),Mh=p(ds),lo=r(ds,"P",{});var Ai=i(lo);Eh=s(Ai,"If "),_l=r(Ai,"CODE",{});var Av=i(_l);Ch=s(Av,"token_ids_1"),Av.forEach(t),jh=s(Ai," is "),kl=r(Ai,"CODE",{});var Sv=i(kl);Oh=s(Sv,"None"),Sv.forEach(t),Ph=s(Ai,", this method only returns the first portion of the mask (0s)."),Ai.forEach(t),ds.forEach(t),Wt.forEach(t),sc=p(o),co=r(o,"H2",{class:!0});var Zc=i(co);ln=r(Zc,"A",{id:!0,class:!0,href:!0});var Dv=i(ln);bl=r(Dv,"SPAN",{});var Iv=i(bl);T(Os.$$.fragment,Iv),Iv.forEach(t),Dv.forEach(t),Ah=p(Zc),vl=r(Zc,"SPAN",{});var Hv=i(vl);Sh=s(Hv,"XLNet specific outputs"),Hv.forEach(t),Zc.forEach(t),ac=p(o),po=r(o,"DIV",{class:!0});var ep=i(po);T(Ps.$$.fragment,ep),Dh=p(ep),As=r(ep,"P",{});var tp=i(As);Ih=s(tp,"Output type of "),Gr=r(tp,"A",{href:!0});var Qv=i(Gr);Hh=s(Qv,"XLNetModel"),Qv.forEach(t),Qh=s(tp,"."),tp.forEach(t),ep.forEach(t),rc=p(o),mo=r(o,"DIV",{class:!0});var op=i(mo);T(Ss.$$.fragment,op),Wh=p(op),Ds=r(op,"P",{});var np=i(Ds);Uh=s(np,"Output type of "),Jr=r(np,"A",{href:!0});var Wv=i(Jr);Bh=s(Wv,"XLNetLMHeadModel"),Wv.forEach(t),Kh=s(np,"."),np.forEach(t),op.forEach(t),ic=p(o),ho=r(o,"DIV",{class:!0});var sp=i(ho);T(Is.$$.fragment,sp),Rh=p(sp),Hs=r(sp,"P",{});var ap=i(Hs);Vh=s(ap,"Output type of "),Zr=r(ap,"A",{href:!0});var Uv=i(Zr);Yh=s(Uv,"XLNetForSequenceClassification"),Uv.forEach(t),Gh=s(ap,"."),ap.forEach(t),sp.forEach(t),lc=p(o),uo=r(o,"DIV",{class:!0});var rp=i(uo);T(Qs.$$.fragment,rp),Jh=p(rp),Ws=r(rp,"P",{});var ip=i(Ws);Zh=s(ip,"Output type of "),ei=r(ip,"A",{href:!0});var Bv=i(ei);eu=s(Bv,"XLNetForMultipleChoice"),Bv.forEach(t),tu=s(ip,"."),ip.forEach(t),rp.forEach(t),dc=p(o),fo=r(o,"DIV",{class:!0});var lp=i(fo);T(Us.$$.fragment,lp),ou=p(lp),Bs=r(lp,"P",{});var dp=i(Bs);nu=s(dp,"Output type of "),yl=r(dp,"CODE",{});var Kv=i(yl);su=s(Kv,"XLNetForTokenClassificationOutput"),Kv.forEach(t),au=s(dp,"."),dp.forEach(t),lp.forEach(t),cc=p(o),go=r(o,"DIV",{class:!0});var cp=i(go);T(Ks.$$.fragment,cp),ru=p(cp),Rs=r(cp,"P",{});var pp=i(Rs);iu=s(pp,"Output type of "),ti=r(pp,"A",{href:!0});var Rv=i(ti);lu=s(Rv,"XLNetForQuestionAnsweringSimple"),Rv.forEach(t),du=s(pp,"."),pp.forEach(t),cp.forEach(t),pc=p(o),_o=r(o,"DIV",{class:!0});var mp=i(_o);T(Vs.$$.fragment,mp),cu=p(mp),Ys=r(mp,"P",{});var hp=i(Ys);pu=s(hp,"Output type of "),oi=r(hp,"A",{href:!0});var Vv=i(oi);mu=s(Vv,"XLNetForQuestionAnswering"),Vv.forEach(t),hu=s(hp,"."),hp.forEach(t),mp.forEach(t),mc=p(o),ko=r(o,"DIV",{class:!0});var up=i(ko);T(Gs.$$.fragment,up),uu=p(up),Js=r(up,"P",{});var fp=i(Js);fu=s(fp,"Output type of "),ni=r(fp,"A",{href:!0});var Yv=i(ni);gu=s(Yv,"TFXLNetModel"),Yv.forEach(t),_u=s(fp,"."),fp.forEach(t),up.forEach(t),hc=p(o),bo=r(o,"DIV",{class:!0});var gp=i(bo);T(Zs.$$.fragment,gp),ku=p(gp),ea=r(gp,"P",{});var _p=i(ea);bu=s(_p,"Output type of "),si=r(_p,"A",{href:!0});var Gv=i(si);vu=s(Gv,"TFXLNetLMHeadModel"),Gv.forEach(t),yu=s(_p,"."),_p.forEach(t),gp.forEach(t),uc=p(o),vo=r(o,"DIV",{class:!0});var kp=i(vo);T(ta.$$.fragment,kp),Tu=p(kp),oa=r(kp,"P",{});var bp=i(oa);wu=s(bp,"Output type of "),ai=r(bp,"A",{href:!0});var Jv=i(ai);$u=s(Jv,"TFXLNetForSequenceClassification"),Jv.forEach(t),Nu=s(bp,"."),bp.forEach(t),kp.forEach(t),fc=p(o),yo=r(o,"DIV",{class:!0});var vp=i(yo);T(na.$$.fragment,vp),Lu=p(vp),sa=r(vp,"P",{});var yp=i(sa);xu=s(yp,"Output type of "),ri=r(yp,"A",{href:!0});var Zv=i(ri);Fu=s(Zv,"TFXLNetForMultipleChoice"),Zv.forEach(t),Xu=s(yp,"."),yp.forEach(t),vp.forEach(t),gc=p(o),To=r(o,"DIV",{class:!0});var Tp=i(To);T(aa.$$.fragment,Tp),qu=p(Tp),ra=r(Tp,"P",{});var wp=i(ra);zu=s(wp,"Output type of "),Tl=r(wp,"CODE",{});var ey=i(Tl);Mu=s(ey,"TFXLNetForTokenClassificationOutput"),ey.forEach(t),Eu=s(wp,"."),wp.forEach(t),Tp.forEach(t),_c=p(o),wo=r(o,"DIV",{class:!0});var $p=i(wo);T(ia.$$.fragment,$p),Cu=p($p),la=r($p,"P",{});var Np=i(la);ju=s(Np,"Output type of "),ii=r(Np,"A",{href:!0});var ty=i(ii);Ou=s(ty,"TFXLNetForQuestionAnsweringSimple"),ty.forEach(t),Pu=s(Np,"."),Np.forEach(t),$p.forEach(t),kc=p(o),$o=r(o,"H2",{class:!0});var Lp=i($o);dn=r(Lp,"A",{id:!0,class:!0,href:!0});var oy=i(dn);wl=r(oy,"SPAN",{});var ny=i(wl);T(da.$$.fragment,ny),ny.forEach(t),oy.forEach(t),Au=p(Lp),$l=r(Lp,"SPAN",{});var sy=i($l);Su=s(sy,"XLNetModel"),sy.forEach(t),Lp.forEach(t),bc=p(o),lt=r(o,"DIV",{class:!0});var Ut=i(lt);T(ca.$$.fragment,Ut),Du=p(Ut),Nl=r(Ut,"P",{});var ay=i(Nl);Iu=s(ay,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),ay.forEach(t),Hu=p(Ut),pa=r(Ut,"P",{});var xp=i(pa);Qu=s(xp,"This model inherits from "),li=r(xp,"A",{href:!0});var ry=i(li);Wu=s(ry,"PreTrainedModel"),ry.forEach(t),Uu=s(xp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xp.forEach(t),Bu=p(Ut),ma=r(Ut,"P",{});var Fp=i(ma);Ku=s(Fp,"This model is also a PyTorch "),ha=r(Fp,"A",{href:!0,rel:!0});var iy=i(ha);Ru=s(iy,"torch.nn.Module"),iy.forEach(t),Vu=s(Fp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fp.forEach(t),Yu=p(Ut),$t=r(Ut,"DIV",{class:!0});var cs=i($t);T(ua.$$.fragment,cs),Gu=p(cs),No=r(cs,"P",{});var Si=i(No);Ju=s(Si,"The "),di=r(Si,"A",{href:!0});var ly=i(di);Zu=s(ly,"XLNetModel"),ly.forEach(t),ef=s(Si," forward method, overrides the "),Ll=r(Si,"CODE",{});var dy=i(Ll);tf=s(dy,"__call__"),dy.forEach(t),of=s(Si," special method."),Si.forEach(t),nf=p(cs),T(cn.$$.fragment,cs),sf=p(cs),T(pn.$$.fragment,cs),cs.forEach(t),Ut.forEach(t),vc=p(o),Lo=r(o,"H2",{class:!0});var Xp=i(Lo);mn=r(Xp,"A",{id:!0,class:!0,href:!0});var cy=i(mn);xl=r(cy,"SPAN",{});var py=i(xl);T(fa.$$.fragment,py),py.forEach(t),cy.forEach(t),af=p(Xp),Fl=r(Xp,"SPAN",{});var my=i(Fl);rf=s(my,"XLNetLMHeadModel"),my.forEach(t),Xp.forEach(t),yc=p(o),dt=r(o,"DIV",{class:!0});var Bt=i(dt);T(ga.$$.fragment,Bt),lf=p(Bt),Xl=r(Bt,"P",{});var hy=i(Xl);df=s(hy,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),hy.forEach(t),cf=p(Bt),_a=r(Bt,"P",{});var qp=i(_a);pf=s(qp,"This model inherits from "),ci=r(qp,"A",{href:!0});var uy=i(ci);mf=s(uy,"PreTrainedModel"),uy.forEach(t),hf=s(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(t),uf=p(Bt),ka=r(Bt,"P",{});var zp=i(ka);ff=s(zp,"This model is also a PyTorch "),ba=r(zp,"A",{href:!0,rel:!0});var fy=i(ba);gf=s(fy,"torch.nn.Module"),fy.forEach(t),_f=s(zp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zp.forEach(t),kf=p(Bt),Nt=r(Bt,"DIV",{class:!0});var ps=i(Nt);T(va.$$.fragment,ps),bf=p(ps),xo=r(ps,"P",{});var Di=i(xo);vf=s(Di,"The "),pi=r(Di,"A",{href:!0});var gy=i(pi);yf=s(gy,"XLNetLMHeadModel"),gy.forEach(t),Tf=s(Di," forward method, overrides the "),ql=r(Di,"CODE",{});var _y=i(ql);wf=s(_y,"__call__"),_y.forEach(t),$f=s(Di," special method."),Di.forEach(t),Nf=p(ps),T(hn.$$.fragment,ps),Lf=p(ps),T(un.$$.fragment,ps),ps.forEach(t),Bt.forEach(t),Tc=p(o),Fo=r(o,"H2",{class:!0});var Mp=i(Fo);fn=r(Mp,"A",{id:!0,class:!0,href:!0});var ky=i(fn);zl=r(ky,"SPAN",{});var by=i(zl);T(ya.$$.fragment,by),by.forEach(t),ky.forEach(t),xf=p(Mp),Ml=r(Mp,"SPAN",{});var vy=i(Ml);Ff=s(vy,"XLNetForSequenceClassification"),vy.forEach(t),Mp.forEach(t),wc=p(o),ct=r(o,"DIV",{class:!0});var Kt=i(ct);T(Ta.$$.fragment,Kt),Xf=p(Kt),El=r(Kt,"P",{});var yy=i(El);qf=s(yy,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),yy.forEach(t),zf=p(Kt),wa=r(Kt,"P",{});var Ep=i(wa);Mf=s(Ep,"This model inherits from "),mi=r(Ep,"A",{href:!0});var Ty=i(mi);Ef=s(Ty,"PreTrainedModel"),Ty.forEach(t),Cf=s(Ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ep.forEach(t),jf=p(Kt),$a=r(Kt,"P",{});var Cp=i($a);Of=s(Cp,"This model is also a PyTorch "),Na=r(Cp,"A",{href:!0,rel:!0});var wy=i(Na);Pf=s(wy,"torch.nn.Module"),wy.forEach(t),Af=s(Cp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cp.forEach(t),Sf=p(Kt),et=r(Kt,"DIV",{class:!0});var yt=i(et);T(La.$$.fragment,yt),Df=p(yt),Xo=r(yt,"P",{});var Ii=i(Xo);If=s(Ii,"The "),hi=r(Ii,"A",{href:!0});var $y=i(hi);Hf=s($y,"XLNetForSequenceClassification"),$y.forEach(t),Qf=s(Ii," forward method, overrides the "),Cl=r(Ii,"CODE",{});var Ny=i(Cl);Wf=s(Ny,"__call__"),Ny.forEach(t),Uf=s(Ii," special method."),Ii.forEach(t),Bf=p(yt),T(gn.$$.fragment,yt),Kf=p(yt),T(_n.$$.fragment,yt),Rf=p(yt),T(kn.$$.fragment,yt),Vf=p(yt),T(bn.$$.fragment,yt),Yf=p(yt),T(vn.$$.fragment,yt),yt.forEach(t),Kt.forEach(t),$c=p(o),qo=r(o,"H2",{class:!0});var jp=i(qo);yn=r(jp,"A",{id:!0,class:!0,href:!0});var Ly=i(yn);jl=r(Ly,"SPAN",{});var xy=i(jl);T(xa.$$.fragment,xy),xy.forEach(t),Ly.forEach(t),Gf=p(jp),Ol=r(jp,"SPAN",{});var Fy=i(Ol);Jf=s(Fy,"XLNetForMultipleChoice"),Fy.forEach(t),jp.forEach(t),Nc=p(o),pt=r(o,"DIV",{class:!0});var Rt=i(pt);T(Fa.$$.fragment,Rt),Zf=p(Rt),Pl=r(Rt,"P",{});var Xy=i(Pl);eg=s(Xy,`XLNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RACE/SWAG tasks.`),Xy.forEach(t),tg=p(Rt),Xa=r(Rt,"P",{});var Op=i(Xa);og=s(Op,"This model inherits from "),ui=r(Op,"A",{href:!0});var qy=i(ui);ng=s(qy,"PreTrainedModel"),qy.forEach(t),sg=s(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),ag=p(Rt),qa=r(Rt,"P",{});var Pp=i(qa);rg=s(Pp,"This model is also a PyTorch "),za=r(Pp,"A",{href:!0,rel:!0});var zy=i(za);ig=s(zy,"torch.nn.Module"),zy.forEach(t),lg=s(Pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pp.forEach(t),dg=p(Rt),Lt=r(Rt,"DIV",{class:!0});var ms=i(Lt);T(Ma.$$.fragment,ms),cg=p(ms),zo=r(ms,"P",{});var Hi=i(zo);pg=s(Hi,"The "),fi=r(Hi,"A",{href:!0});var My=i(fi);mg=s(My,"XLNetForMultipleChoice"),My.forEach(t),hg=s(Hi," forward method, overrides the "),Al=r(Hi,"CODE",{});var Ey=i(Al);ug=s(Ey,"__call__"),Ey.forEach(t),fg=s(Hi," special method."),Hi.forEach(t),gg=p(ms),T(Tn.$$.fragment,ms),_g=p(ms),T(wn.$$.fragment,ms),ms.forEach(t),Rt.forEach(t),Lc=p(o),Mo=r(o,"H2",{class:!0});var Ap=i(Mo);$n=r(Ap,"A",{id:!0,class:!0,href:!0});var Cy=i($n);Sl=r(Cy,"SPAN",{});var jy=i(Sl);T(Ea.$$.fragment,jy),jy.forEach(t),Cy.forEach(t),kg=p(Ap),Dl=r(Ap,"SPAN",{});var Oy=i(Dl);bg=s(Oy,"XLNetForTokenClassification"),Oy.forEach(t),Ap.forEach(t),xc=p(o),mt=r(o,"DIV",{class:!0});var Vt=i(mt);T(Ca.$$.fragment,Vt),vg=p(Vt),Il=r(Vt,"P",{});var Py=i(Il);yg=s(Py,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Py.forEach(t),Tg=p(Vt),ja=r(Vt,"P",{});var Sp=i(ja);wg=s(Sp,"This model inherits from "),gi=r(Sp,"A",{href:!0});var Ay=i(gi);$g=s(Ay,"PreTrainedModel"),Ay.forEach(t),Ng=s(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp.forEach(t),Lg=p(Vt),Oa=r(Vt,"P",{});var Dp=i(Oa);xg=s(Dp,"This model is also a PyTorch "),Pa=r(Dp,"A",{href:!0,rel:!0});var Sy=i(Pa);Fg=s(Sy,"torch.nn.Module"),Sy.forEach(t),Xg=s(Dp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp.forEach(t),qg=p(Vt),ft=r(Vt,"DIV",{class:!0});var Yt=i(ft);T(Aa.$$.fragment,Yt),zg=p(Yt),Eo=r(Yt,"P",{});var Qi=i(Eo);Mg=s(Qi,"The "),_i=r(Qi,"A",{href:!0});var Dy=i(_i);Eg=s(Dy,"XLNetForTokenClassification"),Dy.forEach(t),Cg=s(Qi," forward method, overrides the "),Hl=r(Qi,"CODE",{});var Iy=i(Hl);jg=s(Iy,"__call__"),Iy.forEach(t),Og=s(Qi," special method."),Qi.forEach(t),Pg=p(Yt),T(Nn.$$.fragment,Yt),Ag=p(Yt),T(Ln.$$.fragment,Yt),Sg=p(Yt),T(xn.$$.fragment,Yt),Yt.forEach(t),Vt.forEach(t),Fc=p(o),Co=r(o,"H2",{class:!0});var Ip=i(Co);Fn=r(Ip,"A",{id:!0,class:!0,href:!0});var Hy=i(Fn);Ql=r(Hy,"SPAN",{});var Qy=i(Ql);T(Sa.$$.fragment,Qy),Qy.forEach(t),Hy.forEach(t),Dg=p(Ip),Wl=r(Ip,"SPAN",{});var Wy=i(Wl);Ig=s(Wy,"XLNetForQuestionAnsweringSimple"),Wy.forEach(t),Ip.forEach(t),Xc=p(o),ht=r(o,"DIV",{class:!0});var Gt=i(ht);T(Da.$$.fragment,Gt),Hg=p(Gt),jo=r(Gt,"P",{});var Wi=i(jo);Qg=s(Wi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ul=r(Wi,"CODE",{});var Uy=i(Ul);Wg=s(Uy,"span start logits"),Uy.forEach(t),Ug=s(Wi," and "),Bl=r(Wi,"CODE",{});var By=i(Bl);Bg=s(By,"span end logits"),By.forEach(t),Kg=s(Wi,")."),Wi.forEach(t),Rg=p(Gt),Ia=r(Gt,"P",{});var Hp=i(Ia);Vg=s(Hp,"This model inherits from "),ki=r(Hp,"A",{href:!0});var Ky=i(ki);Yg=s(Ky,"PreTrainedModel"),Ky.forEach(t),Gg=s(Hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hp.forEach(t),Jg=p(Gt),Ha=r(Gt,"P",{});var Qp=i(Ha);Zg=s(Qp,"This model is also a PyTorch "),Qa=r(Qp,"A",{href:!0,rel:!0});var Ry=i(Qa);e_=s(Ry,"torch.nn.Module"),Ry.forEach(t),t_=s(Qp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp.forEach(t),o_=p(Gt),gt=r(Gt,"DIV",{class:!0});var Jt=i(gt);T(Wa.$$.fragment,Jt),n_=p(Jt),Oo=r(Jt,"P",{});var Ui=i(Oo);s_=s(Ui,"The "),bi=r(Ui,"A",{href:!0});var Vy=i(bi);a_=s(Vy,"XLNetForQuestionAnsweringSimple"),Vy.forEach(t),r_=s(Ui," forward method, overrides the "),Kl=r(Ui,"CODE",{});var Yy=i(Kl);i_=s(Yy,"__call__"),Yy.forEach(t),l_=s(Ui," special method."),Ui.forEach(t),d_=p(Jt),T(Xn.$$.fragment,Jt),c_=p(Jt),T(qn.$$.fragment,Jt),p_=p(Jt),T(zn.$$.fragment,Jt),Jt.forEach(t),Gt.forEach(t),qc=p(o),Po=r(o,"H2",{class:!0});var Wp=i(Po);Mn=r(Wp,"A",{id:!0,class:!0,href:!0});var Gy=i(Mn);Rl=r(Gy,"SPAN",{});var Jy=i(Rl);T(Ua.$$.fragment,Jy),Jy.forEach(t),Gy.forEach(t),m_=p(Wp),Vl=r(Wp,"SPAN",{});var Zy=i(Vl);h_=s(Zy,"XLNetForQuestionAnswering"),Zy.forEach(t),Wp.forEach(t),zc=p(o),ut=r(o,"DIV",{class:!0});var Zt=i(ut);T(Ba.$$.fragment,Zt),u_=p(Zt),Ao=r(Zt,"P",{});var Bi=i(Ao);f_=s(Bi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yl=r(Bi,"CODE",{});var eT=i(Yl);g_=s(eT,"span start logits"),eT.forEach(t),__=s(Bi," and "),Gl=r(Bi,"CODE",{});var tT=i(Gl);k_=s(tT,"span end logits"),tT.forEach(t),b_=s(Bi,")."),Bi.forEach(t),v_=p(Zt),Ka=r(Zt,"P",{});var Up=i(Ka);y_=s(Up,"This model inherits from "),vi=r(Up,"A",{href:!0});var oT=i(vi);T_=s(oT,"PreTrainedModel"),oT.forEach(t),w_=s(Up,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Up.forEach(t),$_=p(Zt),Ra=r(Zt,"P",{});var Bp=i(Ra);N_=s(Bp,"This model is also a PyTorch "),Va=r(Bp,"A",{href:!0,rel:!0});var nT=i(Va);L_=s(nT,"torch.nn.Module"),nT.forEach(t),x_=s(Bp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bp.forEach(t),F_=p(Zt),xt=r(Zt,"DIV",{class:!0});var hs=i(xt);T(Ya.$$.fragment,hs),X_=p(hs),So=r(hs,"P",{});var Ki=i(So);q_=s(Ki,"The "),yi=r(Ki,"A",{href:!0});var sT=i(yi);z_=s(sT,"XLNetForQuestionAnswering"),sT.forEach(t),M_=s(Ki," forward method, overrides the "),Jl=r(Ki,"CODE",{});var aT=i(Jl);E_=s(aT,"__call__"),aT.forEach(t),C_=s(Ki," special method."),Ki.forEach(t),j_=p(hs),T(En.$$.fragment,hs),O_=p(hs),T(Cn.$$.fragment,hs),hs.forEach(t),Zt.forEach(t),Mc=p(o),Do=r(o,"H2",{class:!0});var Kp=i(Do);jn=r(Kp,"A",{id:!0,class:!0,href:!0});var rT=i(jn);Zl=r(rT,"SPAN",{});var iT=i(Zl);T(Ga.$$.fragment,iT),iT.forEach(t),rT.forEach(t),P_=p(Kp),ed=r(Kp,"SPAN",{});var lT=i(ed);A_=s(lT,"TFXLNetModel"),lT.forEach(t),Kp.forEach(t),Ec=p(o),tt=r(o,"DIV",{class:!0});var zt=i(tt);T(Ja.$$.fragment,zt),S_=p(zt),td=r(zt,"P",{});var dT=i(td);D_=s(dT,"The bare XLNet Model transformer outputting raw hidden-states without any specific head on top."),dT.forEach(t),I_=p(zt),Za=r(zt,"P",{});var Rp=i(Za);H_=s(Rp,"This model inherits from "),Ti=r(Rp,"A",{href:!0});var cT=i(Ti);Q_=s(cT,"TFPreTrainedModel"),cT.forEach(t),W_=s(Rp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rp.forEach(t),U_=p(zt),er=r(zt,"P",{});var Vp=i(er);B_=s(Vp,"This model is also a "),tr=r(Vp,"A",{href:!0,rel:!0});var pT=i(tr);K_=s(pT,"tf.keras.Model"),pT.forEach(t),R_=s(Vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vp.forEach(t),V_=p(zt),T(On.$$.fragment,zt),Y_=p(zt),Ft=r(zt,"DIV",{class:!0});var us=i(Ft);T(or.$$.fragment,us),G_=p(us),Io=r(us,"P",{});var Ri=i(Io);J_=s(Ri,"The "),wi=r(Ri,"A",{href:!0});var mT=i(wi);Z_=s(mT,"TFXLNetModel"),mT.forEach(t),ek=s(Ri," forward method, overrides the "),od=r(Ri,"CODE",{});var hT=i(od);tk=s(hT,"__call__"),hT.forEach(t),ok=s(Ri," special method."),Ri.forEach(t),nk=p(us),T(Pn.$$.fragment,us),sk=p(us),T(An.$$.fragment,us),us.forEach(t),zt.forEach(t),Cc=p(o),Ho=r(o,"H2",{class:!0});var Yp=i(Ho);Sn=r(Yp,"A",{id:!0,class:!0,href:!0});var uT=i(Sn);nd=r(uT,"SPAN",{});var fT=i(nd);T(nr.$$.fragment,fT),fT.forEach(t),uT.forEach(t),ak=p(Yp),sd=r(Yp,"SPAN",{});var gT=i(sd);rk=s(gT,"TFXLNetLMHeadModel"),gT.forEach(t),Yp.forEach(t),jc=p(o),ot=r(o,"DIV",{class:!0});var Mt=i(ot);T(sr.$$.fragment,Mt),ik=p(Mt),ad=r(Mt,"P",{});var _T=i(ad);lk=s(_T,"XLNet Model with a language modeling head on top (linear layer with weights tied to the input embeddings)."),_T.forEach(t),dk=p(Mt),ar=r(Mt,"P",{});var Gp=i(ar);ck=s(Gp,"This model inherits from "),$i=r(Gp,"A",{href:!0});var kT=i($i);pk=s(kT,"TFPreTrainedModel"),kT.forEach(t),mk=s(Gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp.forEach(t),hk=p(Mt),rr=r(Mt,"P",{});var Jp=i(rr);uk=s(Jp,"This model is also a "),ir=r(Jp,"A",{href:!0,rel:!0});var bT=i(ir);fk=s(bT,"tf.keras.Model"),bT.forEach(t),gk=s(Jp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jp.forEach(t),_k=p(Mt),T(Dn.$$.fragment,Mt),kk=p(Mt),Xt=r(Mt,"DIV",{class:!0});var fs=i(Xt);T(lr.$$.fragment,fs),bk=p(fs),Qo=r(fs,"P",{});var Vi=i(Qo);vk=s(Vi,"The "),Ni=r(Vi,"A",{href:!0});var vT=i(Ni);yk=s(vT,"TFXLNetLMHeadModel"),vT.forEach(t),Tk=s(Vi," forward method, overrides the "),rd=r(Vi,"CODE",{});var yT=i(rd);wk=s(yT,"__call__"),yT.forEach(t),$k=s(Vi," special method."),Vi.forEach(t),Nk=p(fs),T(In.$$.fragment,fs),Lk=p(fs),T(Hn.$$.fragment,fs),fs.forEach(t),Mt.forEach(t),Oc=p(o),Wo=r(o,"H2",{class:!0});var Zp=i(Wo);Qn=r(Zp,"A",{id:!0,class:!0,href:!0});var TT=i(Qn);id=r(TT,"SPAN",{});var wT=i(id);T(dr.$$.fragment,wT),wT.forEach(t),TT.forEach(t),xk=p(Zp),ld=r(Zp,"SPAN",{});var $T=i(ld);Fk=s($T,"TFXLNetForSequenceClassification"),$T.forEach(t),Zp.forEach(t),Pc=p(o),nt=r(o,"DIV",{class:!0});var Et=i(nt);T(cr.$$.fragment,Et),Xk=p(Et),dd=r(Et,"P",{});var NT=i(dd);qk=s(NT,`XLNet Model with a sequence classification/regression head on top (a linear layer on top of the pooled output) e.g.
for GLUE tasks.`),NT.forEach(t),zk=p(Et),pr=r(Et,"P",{});var em=i(pr);Mk=s(em,"This model inherits from "),Li=r(em,"A",{href:!0});var LT=i(Li);Ek=s(LT,"TFPreTrainedModel"),LT.forEach(t),Ck=s(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(t),jk=p(Et),mr=r(Et,"P",{});var tm=i(mr);Ok=s(tm,"This model is also a "),hr=r(tm,"A",{href:!0,rel:!0});var xT=i(hr);Pk=s(xT,"tf.keras.Model"),xT.forEach(t),Ak=s(tm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm.forEach(t),Sk=p(Et),T(Wn.$$.fragment,Et),Dk=p(Et),_t=r(Et,"DIV",{class:!0});var eo=i(_t);T(ur.$$.fragment,eo),Ik=p(eo),Uo=r(eo,"P",{});var Yi=i(Uo);Hk=s(Yi,"The "),xi=r(Yi,"A",{href:!0});var FT=i(xi);Qk=s(FT,"TFXLNetForSequenceClassification"),FT.forEach(t),Wk=s(Yi," forward method, overrides the "),cd=r(Yi,"CODE",{});var XT=i(cd);Uk=s(XT,"__call__"),XT.forEach(t),Bk=s(Yi," special method."),Yi.forEach(t),Kk=p(eo),T(Un.$$.fragment,eo),Rk=p(eo),T(Bn.$$.fragment,eo),Vk=p(eo),T(Kn.$$.fragment,eo),eo.forEach(t),Et.forEach(t),Ac=p(o),Bo=r(o,"H2",{class:!0});var om=i(Bo);Rn=r(om,"A",{id:!0,class:!0,href:!0});var qT=i(Rn);pd=r(qT,"SPAN",{});var zT=i(pd);T(fr.$$.fragment,zT),zT.forEach(t),qT.forEach(t),Yk=p(om),md=r(om,"SPAN",{});var MT=i(md);Gk=s(MT,"TFLNetForMultipleChoice"),MT.forEach(t),om.forEach(t),Sc=p(o),st=r(o,"DIV",{class:!0});var Ct=i(st);T(gr.$$.fragment,Ct),Jk=p(Ct),hd=r(Ct,"P",{});var ET=i(hd);Zk=s(ET,`XLNET Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ET.forEach(t),eb=p(Ct),_r=r(Ct,"P",{});var nm=i(_r);tb=s(nm,"This model inherits from "),Fi=r(nm,"A",{href:!0});var CT=i(Fi);ob=s(CT,"TFPreTrainedModel"),CT.forEach(t),nb=s(nm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nm.forEach(t),sb=p(Ct),kr=r(Ct,"P",{});var sm=i(kr);ab=s(sm,"This model is also a "),br=r(sm,"A",{href:!0,rel:!0});var jT=i(br);rb=s(jT,"tf.keras.Model"),jT.forEach(t),ib=s(sm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sm.forEach(t),lb=p(Ct),T(Vn.$$.fragment,Ct),db=p(Ct),qt=r(Ct,"DIV",{class:!0});var gs=i(qt);T(vr.$$.fragment,gs),cb=p(gs),Ko=r(gs,"P",{});var Gi=i(Ko);pb=s(Gi,"The "),Xi=r(Gi,"A",{href:!0});var OT=i(Xi);mb=s(OT,"TFXLNetForMultipleChoice"),OT.forEach(t),hb=s(Gi," forward method, overrides the "),ud=r(Gi,"CODE",{});var PT=i(ud);ub=s(PT,"__call__"),PT.forEach(t),fb=s(Gi," special method."),Gi.forEach(t),gb=p(gs),T(Yn.$$.fragment,gs),_b=p(gs),T(Gn.$$.fragment,gs),gs.forEach(t),Ct.forEach(t),Dc=p(o),Ro=r(o,"H2",{class:!0});var am=i(Ro);Jn=r(am,"A",{id:!0,class:!0,href:!0});var AT=i(Jn);fd=r(AT,"SPAN",{});var ST=i(fd);T(yr.$$.fragment,ST),ST.forEach(t),AT.forEach(t),kb=p(am),gd=r(am,"SPAN",{});var DT=i(gd);bb=s(DT,"TFXLNetForTokenClassification"),DT.forEach(t),am.forEach(t),Ic=p(o),at=r(o,"DIV",{class:!0});var jt=i(at);T(Tr.$$.fragment,jt),vb=p(jt),_d=r(jt,"P",{});var IT=i(_d);yb=s(IT,`XLNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),IT.forEach(t),Tb=p(jt),wr=r(jt,"P",{});var rm=i(wr);wb=s(rm,"This model inherits from "),qi=r(rm,"A",{href:!0});var HT=i(qi);$b=s(HT,"TFPreTrainedModel"),HT.forEach(t),Nb=s(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm.forEach(t),Lb=p(jt),$r=r(jt,"P",{});var im=i($r);xb=s(im,"This model is also a "),Nr=r(im,"A",{href:!0,rel:!0});var QT=i(Nr);Fb=s(QT,"tf.keras.Model"),QT.forEach(t),Xb=s(im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),im.forEach(t),qb=p(jt),T(Zn.$$.fragment,jt),zb=p(jt),kt=r(jt,"DIV",{class:!0});var to=i(kt);T(Lr.$$.fragment,to),Mb=p(to),Vo=r(to,"P",{});var Ji=i(Vo);Eb=s(Ji,"The "),zi=r(Ji,"A",{href:!0});var WT=i(zi);Cb=s(WT,"TFXLNetForTokenClassification"),WT.forEach(t),jb=s(Ji," forward method, overrides the "),kd=r(Ji,"CODE",{});var UT=i(kd);Ob=s(UT,"__call__"),UT.forEach(t),Pb=s(Ji," special method."),Ji.forEach(t),Ab=p(to),T(es.$$.fragment,to),Sb=p(to),T(ts.$$.fragment,to),Db=p(to),T(os.$$.fragment,to),to.forEach(t),jt.forEach(t),Hc=p(o),Yo=r(o,"H2",{class:!0});var lm=i(Yo);ns=r(lm,"A",{id:!0,class:!0,href:!0});var BT=i(ns);bd=r(BT,"SPAN",{});var KT=i(bd);T(xr.$$.fragment,KT),KT.forEach(t),BT.forEach(t),Ib=p(lm),vd=r(lm,"SPAN",{});var RT=i(vd);Hb=s(RT,"TFXLNetForQuestionAnsweringSimple"),RT.forEach(t),lm.forEach(t),Qc=p(o),rt=r(o,"DIV",{class:!0});var Ot=i(rt);T(Fr.$$.fragment,Ot),Qb=p(Ot),Go=r(Ot,"P",{});var Zi=i(Go);Wb=s(Zi,`XLNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),yd=r(Zi,"CODE",{});var VT=i(yd);Ub=s(VT,"span start logits"),VT.forEach(t),Bb=s(Zi," and "),Td=r(Zi,"CODE",{});var YT=i(Td);Kb=s(YT,"span end logits"),YT.forEach(t),Rb=s(Zi,")."),Zi.forEach(t),Vb=p(Ot),Xr=r(Ot,"P",{});var dm=i(Xr);Yb=s(dm,"This model inherits from "),Mi=r(dm,"A",{href:!0});var GT=i(Mi);Gb=s(GT,"TFPreTrainedModel"),GT.forEach(t),Jb=s(dm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm.forEach(t),Zb=p(Ot),qr=r(Ot,"P",{});var cm=i(qr);ev=s(cm,"This model is also a "),zr=r(cm,"A",{href:!0,rel:!0});var JT=i(zr);tv=s(JT,"tf.keras.Model"),JT.forEach(t),ov=s(cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cm.forEach(t),nv=p(Ot),T(ss.$$.fragment,Ot),sv=p(Ot),bt=r(Ot,"DIV",{class:!0});var oo=i(bt);T(Mr.$$.fragment,oo),av=p(oo),Jo=r(oo,"P",{});var el=i(Jo);rv=s(el,"The "),Ei=r(el,"A",{href:!0});var ZT=i(Ei);iv=s(ZT,"TFXLNetForQuestionAnsweringSimple"),ZT.forEach(t),lv=s(el," forward method, overrides the "),wd=r(el,"CODE",{});var ew=i(wd);dv=s(ew,"__call__"),ew.forEach(t),cv=s(el," special method."),el.forEach(t),pv=p(oo),T(as.$$.fragment,oo),mv=p(oo),T(rs.$$.fragment,oo),hv=p(oo),T(is.$$.fragment,oo),oo.forEach(t),Ot.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Yw)),f(u,"id","xlnet"),f(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(u,"href","#xlnet"),f(m,"class","relative group"),f(ae,"id","overview"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#overview"),f(D,"class","relative group"),f(re,"href","https://arxiv.org/abs/1906.08237"),f(re,"rel","nofollow"),f(q,"href","https://huggingface.co/thomwolf"),f(q,"rel","nofollow"),f(Oe,"href","https://github.com/zihangdai/xlnet/"),f(Oe,"rel","nofollow"),f(je,"id","transformers.XLNetConfig"),f(je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(je,"href","#transformers.XLNetConfig"),f(H,"class","relative group"),f(Dr,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetModel"),f(Ir,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetModel"),f(_s,"href","https://huggingface.co/xlnet-large-cased"),f(_s,"rel","nofollow"),f(Hr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(Qr,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),f(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.XLNetTokenizer"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.XLNetTokenizer"),f(so,"class","relative group"),f(ys,"href","https://github.com/google/sentencepiece"),f(ys,"rel","nofollow"),f(Wr,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Kr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.XLNetTokenizerFast"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.XLNetTokenizerFast"),f(ro,"class","relative group"),f(zs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),f(zs,"rel","nofollow"),f(Rr,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ln,"id","transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),f(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ln,"href","#transformers.models.xlnet.modeling_xlnet.XLNetModelOutput"),f(co,"class","relative group"),f(Gr,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetModel"),f(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jr,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),f(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Zr,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),f(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ei,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),f(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ti,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),f(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(oi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),f(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ni,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetModel"),f(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(si,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),f(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ai,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),f(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ri,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),f(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ii,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),f(wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"id","transformers.XLNetModel"),f(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(dn,"href","#transformers.XLNetModel"),f($o,"class","relative group"),f(li,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(ha,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ha,"rel","nofollow"),f(di,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.XLNetLMHeadModel"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.XLNetLMHeadModel"),f(Lo,"class","relative group"),f(ci,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(ba,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ba,"rel","nofollow"),f(pi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetLMHeadModel"),f(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(fn,"id","transformers.XLNetForSequenceClassification"),f(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(fn,"href","#transformers.XLNetForSequenceClassification"),f(Fo,"class","relative group"),f(mi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(Na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Na,"rel","nofollow"),f(hi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForSequenceClassification"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yn,"id","transformers.XLNetForMultipleChoice"),f(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yn,"href","#transformers.XLNetForMultipleChoice"),f(qo,"class","relative group"),f(ui,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(za,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(za,"rel","nofollow"),f(fi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForMultipleChoice"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f($n,"id","transformers.XLNetForTokenClassification"),f($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f($n,"href","#transformers.XLNetForTokenClassification"),f(Mo,"class","relative group"),f(gi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(Pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Pa,"rel","nofollow"),f(_i,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForTokenClassification"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fn,"id","transformers.XLNetForQuestionAnsweringSimple"),f(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Fn,"href","#transformers.XLNetForQuestionAnsweringSimple"),f(Co,"class","relative group"),f(ki,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(Qa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Qa,"rel","nofollow"),f(bi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForQuestionAnsweringSimple"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.XLNetForQuestionAnswering"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.XLNetForQuestionAnswering"),f(Po,"class","relative group"),f(vi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel"),f(Va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Va,"rel","nofollow"),f(yi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.XLNetForQuestionAnswering"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jn,"id","transformers.TFXLNetModel"),f(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(jn,"href","#transformers.TFXLNetModel"),f(Do,"class","relative group"),f(Ti,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(tr,"rel","nofollow"),f(wi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"id","transformers.TFXLNetLMHeadModel"),f(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Sn,"href","#transformers.TFXLNetLMHeadModel"),f(Ho,"class","relative group"),f($i,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(ir,"rel","nofollow"),f(Ni,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetLMHeadModel"),f(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qn,"id","transformers.TFXLNetForSequenceClassification"),f(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qn,"href","#transformers.TFXLNetForSequenceClassification"),f(Wo,"class","relative group"),f(Li,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(hr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(hr,"rel","nofollow"),f(xi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Rn,"id","transformers.TFXLNetForMultipleChoice"),f(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Rn,"href","#transformers.TFXLNetForMultipleChoice"),f(Bo,"class","relative group"),f(Fi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(br,"rel","nofollow"),f(Xi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForMultipleChoice"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jn,"id","transformers.TFXLNetForTokenClassification"),f(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jn,"href","#transformers.TFXLNetForTokenClassification"),f(Ro,"class","relative group"),f(qi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Nr,"rel","nofollow"),f(zi,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForTokenClassification"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ns,"id","transformers.TFXLNetForQuestionAnsweringSimple"),f(ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ns,"href","#transformers.TFXLNetForQuestionAnsweringSimple"),f(Yo,"class","relative group"),f(Mi,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),f(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(zr,"rel","nofollow"),f(Ei,"href","/docs/transformers/v4.22.2/en/model_doc/xlnet#transformers.TFXLNetForQuestionAnsweringSimple"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,_){e(document.head,d),g(o,k,_),g(o,m,_),e(m,u),e(u,v),w(l,v,null),e(m,h),e(m,z),e(z,ke),g(o,me,_),g(o,D,_),e(D,ae),e(ae,ee),w(x,ee,null),e(D,be),e(D,R),e(R,ve),g(o,he,_),g(o,Q,_),e(Q,ye),e(Q,re),e(re,Y),e(Q,Te),g(o,ue,_),g(o,B,_),e(B,we),g(o,fe,_),g(o,K,_),e(K,de),e(de,$e),g(o,ne,_),g(o,M,_),e(M,E),g(o,ge,_),g(o,P,_),e(P,ie),e(ie,Ne),e(ie,V),e(V,Le),e(ie,xe),e(P,C),e(P,le),e(le,G),e(le,ce),e(ce,Fe),e(le,J),e(P,Xe),e(P,te),e(te,I),e(te,pe),e(pe,Z),e(te,qe),e(te,oe),e(oe,j),e(te,ze),e(te,O),e(O,Me),e(te,Ee),e(P,b),e(P,F),e(F,We),g(o,se,_),g(o,_e,_),e(_e,Ue),e(_e,q),e(q,Be),e(_e,Ke),e(_e,Oe),e(Oe,Re),e(_e,Ve),g(o,S,_),g(o,H,_),e(H,je),e(je,Ie),w(W,Ie,null),e(H,Ye),e(H,He),e(He,Ce),g(o,Qe,_),g(o,U,_),w(Pe,U,null),e(U,pm),e(U,Pt),e(Pt,mm),e(Pt,Dr),e(Dr,hm),e(Pt,um),e(Pt,Ir),e(Ir,fm),e(Pt,gm),e(Pt,_s),e(_s,_m),e(Pt,km),e(U,bm),e(U,no),e(no,vm),e(no,Hr),e(Hr,ym),e(no,Tm),e(no,Qr),e(Qr,wm),e(no,$m),e(U,Nm),w(tn,U,null),g(o,ec,_),g(o,so,_),e(so,on),e(on,tl),w(ks,tl,null),e(so,Lm),e(so,ol),e(ol,xm),g(o,tc,_),g(o,Ge,_),w(bs,Ge,null),e(Ge,Fm),e(Ge,vs),e(vs,Xm),e(vs,ys),e(ys,qm),e(vs,zm),e(Ge,Mm),e(Ge,Ts),e(Ts,Em),e(Ts,Wr),e(Wr,Cm),e(Ts,jm),e(Ge,Om),e(Ge,Ht),w(ws,Ht,null),e(Ht,Pm),e(Ht,nl),e(nl,Am),e(Ht,Sm),e(Ht,$s),e($s,Ur),e(Ur,Dm),e(Ur,sl),e(sl,Im),e($s,Hm),e($s,Br),e(Br,Qm),e(Br,al),e(al,Wm),e(Ge,Um),e(Ge,nn),w(Ns,nn,null),e(nn,Bm),e(nn,Ls),e(Ls,Km),e(Ls,rl),e(rl,Rm),e(Ls,Vm),e(Ge,Ym),e(Ge,Tt),w(xs,Tt,null),e(Tt,Gm),e(Tt,il),e(il,Jm),e(Tt,Zm),w(sn,Tt,null),e(Tt,eh),e(Tt,ao),e(ao,th),e(ao,ll),e(ll,oh),e(ao,nh),e(ao,dl),e(dl,sh),e(ao,ah),e(Ge,rh),e(Ge,Kr),w(Fs,Kr,null),g(o,oc,_),g(o,ro,_),e(ro,an),e(an,cl),w(Xs,cl,null),e(ro,ih),e(ro,pl),e(pl,lh),g(o,nc,_),g(o,it,_),w(qs,it,null),e(it,dh),e(it,io),e(io,ch),e(io,ml),e(ml,ph),e(io,mh),e(io,zs),e(zs,hh),e(io,uh),e(it,fh),e(it,Ms),e(Ms,gh),e(Ms,Rr),e(Rr,_h),e(Ms,kh),e(it,bh),e(it,Qt),w(Es,Qt,null),e(Qt,vh),e(Qt,hl),e(hl,yh),e(Qt,Th),e(Qt,Cs),e(Cs,Vr),e(Vr,wh),e(Vr,ul),e(ul,$h),e(Cs,Nh),e(Cs,Yr),e(Yr,Lh),e(Yr,fl),e(fl,xh),e(it,Fh),e(it,wt),w(js,wt,null),e(wt,Xh),e(wt,gl),e(gl,qh),e(wt,zh),w(rn,wt,null),e(wt,Mh),e(wt,lo),e(lo,Eh),e(lo,_l),e(_l,Ch),e(lo,jh),e(lo,kl),e(kl,Oh),e(lo,Ph),g(o,sc,_),g(o,co,_),e(co,ln),e(ln,bl),w(Os,bl,null),e(co,Ah),e(co,vl),e(vl,Sh),g(o,ac,_),g(o,po,_),w(Ps,po,null),e(po,Dh),e(po,As),e(As,Ih),e(As,Gr),e(Gr,Hh),e(As,Qh),g(o,rc,_),g(o,mo,_),w(Ss,mo,null),e(mo,Wh),e(mo,Ds),e(Ds,Uh),e(Ds,Jr),e(Jr,Bh),e(Ds,Kh),g(o,ic,_),g(o,ho,_),w(Is,ho,null),e(ho,Rh),e(ho,Hs),e(Hs,Vh),e(Hs,Zr),e(Zr,Yh),e(Hs,Gh),g(o,lc,_),g(o,uo,_),w(Qs,uo,null),e(uo,Jh),e(uo,Ws),e(Ws,Zh),e(Ws,ei),e(ei,eu),e(Ws,tu),g(o,dc,_),g(o,fo,_),w(Us,fo,null),e(fo,ou),e(fo,Bs),e(Bs,nu),e(Bs,yl),e(yl,su),e(Bs,au),g(o,cc,_),g(o,go,_),w(Ks,go,null),e(go,ru),e(go,Rs),e(Rs,iu),e(Rs,ti),e(ti,lu),e(Rs,du),g(o,pc,_),g(o,_o,_),w(Vs,_o,null),e(_o,cu),e(_o,Ys),e(Ys,pu),e(Ys,oi),e(oi,mu),e(Ys,hu),g(o,mc,_),g(o,ko,_),w(Gs,ko,null),e(ko,uu),e(ko,Js),e(Js,fu),e(Js,ni),e(ni,gu),e(Js,_u),g(o,hc,_),g(o,bo,_),w(Zs,bo,null),e(bo,ku),e(bo,ea),e(ea,bu),e(ea,si),e(si,vu),e(ea,yu),g(o,uc,_),g(o,vo,_),w(ta,vo,null),e(vo,Tu),e(vo,oa),e(oa,wu),e(oa,ai),e(ai,$u),e(oa,Nu),g(o,fc,_),g(o,yo,_),w(na,yo,null),e(yo,Lu),e(yo,sa),e(sa,xu),e(sa,ri),e(ri,Fu),e(sa,Xu),g(o,gc,_),g(o,To,_),w(aa,To,null),e(To,qu),e(To,ra),e(ra,zu),e(ra,Tl),e(Tl,Mu),e(ra,Eu),g(o,_c,_),g(o,wo,_),w(ia,wo,null),e(wo,Cu),e(wo,la),e(la,ju),e(la,ii),e(ii,Ou),e(la,Pu),g(o,kc,_),g(o,$o,_),e($o,dn),e(dn,wl),w(da,wl,null),e($o,Au),e($o,$l),e($l,Su),g(o,bc,_),g(o,lt,_),w(ca,lt,null),e(lt,Du),e(lt,Nl),e(Nl,Iu),e(lt,Hu),e(lt,pa),e(pa,Qu),e(pa,li),e(li,Wu),e(pa,Uu),e(lt,Bu),e(lt,ma),e(ma,Ku),e(ma,ha),e(ha,Ru),e(ma,Vu),e(lt,Yu),e(lt,$t),w(ua,$t,null),e($t,Gu),e($t,No),e(No,Ju),e(No,di),e(di,Zu),e(No,ef),e(No,Ll),e(Ll,tf),e(No,of),e($t,nf),w(cn,$t,null),e($t,sf),w(pn,$t,null),g(o,vc,_),g(o,Lo,_),e(Lo,mn),e(mn,xl),w(fa,xl,null),e(Lo,af),e(Lo,Fl),e(Fl,rf),g(o,yc,_),g(o,dt,_),w(ga,dt,null),e(dt,lf),e(dt,Xl),e(Xl,df),e(dt,cf),e(dt,_a),e(_a,pf),e(_a,ci),e(ci,mf),e(_a,hf),e(dt,uf),e(dt,ka),e(ka,ff),e(ka,ba),e(ba,gf),e(ka,_f),e(dt,kf),e(dt,Nt),w(va,Nt,null),e(Nt,bf),e(Nt,xo),e(xo,vf),e(xo,pi),e(pi,yf),e(xo,Tf),e(xo,ql),e(ql,wf),e(xo,$f),e(Nt,Nf),w(hn,Nt,null),e(Nt,Lf),w(un,Nt,null),g(o,Tc,_),g(o,Fo,_),e(Fo,fn),e(fn,zl),w(ya,zl,null),e(Fo,xf),e(Fo,Ml),e(Ml,Ff),g(o,wc,_),g(o,ct,_),w(Ta,ct,null),e(ct,Xf),e(ct,El),e(El,qf),e(ct,zf),e(ct,wa),e(wa,Mf),e(wa,mi),e(mi,Ef),e(wa,Cf),e(ct,jf),e(ct,$a),e($a,Of),e($a,Na),e(Na,Pf),e($a,Af),e(ct,Sf),e(ct,et),w(La,et,null),e(et,Df),e(et,Xo),e(Xo,If),e(Xo,hi),e(hi,Hf),e(Xo,Qf),e(Xo,Cl),e(Cl,Wf),e(Xo,Uf),e(et,Bf),w(gn,et,null),e(et,Kf),w(_n,et,null),e(et,Rf),w(kn,et,null),e(et,Vf),w(bn,et,null),e(et,Yf),w(vn,et,null),g(o,$c,_),g(o,qo,_),e(qo,yn),e(yn,jl),w(xa,jl,null),e(qo,Gf),e(qo,Ol),e(Ol,Jf),g(o,Nc,_),g(o,pt,_),w(Fa,pt,null),e(pt,Zf),e(pt,Pl),e(Pl,eg),e(pt,tg),e(pt,Xa),e(Xa,og),e(Xa,ui),e(ui,ng),e(Xa,sg),e(pt,ag),e(pt,qa),e(qa,rg),e(qa,za),e(za,ig),e(qa,lg),e(pt,dg),e(pt,Lt),w(Ma,Lt,null),e(Lt,cg),e(Lt,zo),e(zo,pg),e(zo,fi),e(fi,mg),e(zo,hg),e(zo,Al),e(Al,ug),e(zo,fg),e(Lt,gg),w(Tn,Lt,null),e(Lt,_g),w(wn,Lt,null),g(o,Lc,_),g(o,Mo,_),e(Mo,$n),e($n,Sl),w(Ea,Sl,null),e(Mo,kg),e(Mo,Dl),e(Dl,bg),g(o,xc,_),g(o,mt,_),w(Ca,mt,null),e(mt,vg),e(mt,Il),e(Il,yg),e(mt,Tg),e(mt,ja),e(ja,wg),e(ja,gi),e(gi,$g),e(ja,Ng),e(mt,Lg),e(mt,Oa),e(Oa,xg),e(Oa,Pa),e(Pa,Fg),e(Oa,Xg),e(mt,qg),e(mt,ft),w(Aa,ft,null),e(ft,zg),e(ft,Eo),e(Eo,Mg),e(Eo,_i),e(_i,Eg),e(Eo,Cg),e(Eo,Hl),e(Hl,jg),e(Eo,Og),e(ft,Pg),w(Nn,ft,null),e(ft,Ag),w(Ln,ft,null),e(ft,Sg),w(xn,ft,null),g(o,Fc,_),g(o,Co,_),e(Co,Fn),e(Fn,Ql),w(Sa,Ql,null),e(Co,Dg),e(Co,Wl),e(Wl,Ig),g(o,Xc,_),g(o,ht,_),w(Da,ht,null),e(ht,Hg),e(ht,jo),e(jo,Qg),e(jo,Ul),e(Ul,Wg),e(jo,Ug),e(jo,Bl),e(Bl,Bg),e(jo,Kg),e(ht,Rg),e(ht,Ia),e(Ia,Vg),e(Ia,ki),e(ki,Yg),e(Ia,Gg),e(ht,Jg),e(ht,Ha),e(Ha,Zg),e(Ha,Qa),e(Qa,e_),e(Ha,t_),e(ht,o_),e(ht,gt),w(Wa,gt,null),e(gt,n_),e(gt,Oo),e(Oo,s_),e(Oo,bi),e(bi,a_),e(Oo,r_),e(Oo,Kl),e(Kl,i_),e(Oo,l_),e(gt,d_),w(Xn,gt,null),e(gt,c_),w(qn,gt,null),e(gt,p_),w(zn,gt,null),g(o,qc,_),g(o,Po,_),e(Po,Mn),e(Mn,Rl),w(Ua,Rl,null),e(Po,m_),e(Po,Vl),e(Vl,h_),g(o,zc,_),g(o,ut,_),w(Ba,ut,null),e(ut,u_),e(ut,Ao),e(Ao,f_),e(Ao,Yl),e(Yl,g_),e(Ao,__),e(Ao,Gl),e(Gl,k_),e(Ao,b_),e(ut,v_),e(ut,Ka),e(Ka,y_),e(Ka,vi),e(vi,T_),e(Ka,w_),e(ut,$_),e(ut,Ra),e(Ra,N_),e(Ra,Va),e(Va,L_),e(Ra,x_),e(ut,F_),e(ut,xt),w(Ya,xt,null),e(xt,X_),e(xt,So),e(So,q_),e(So,yi),e(yi,z_),e(So,M_),e(So,Jl),e(Jl,E_),e(So,C_),e(xt,j_),w(En,xt,null),e(xt,O_),w(Cn,xt,null),g(o,Mc,_),g(o,Do,_),e(Do,jn),e(jn,Zl),w(Ga,Zl,null),e(Do,P_),e(Do,ed),e(ed,A_),g(o,Ec,_),g(o,tt,_),w(Ja,tt,null),e(tt,S_),e(tt,td),e(td,D_),e(tt,I_),e(tt,Za),e(Za,H_),e(Za,Ti),e(Ti,Q_),e(Za,W_),e(tt,U_),e(tt,er),e(er,B_),e(er,tr),e(tr,K_),e(er,R_),e(tt,V_),w(On,tt,null),e(tt,Y_),e(tt,Ft),w(or,Ft,null),e(Ft,G_),e(Ft,Io),e(Io,J_),e(Io,wi),e(wi,Z_),e(Io,ek),e(Io,od),e(od,tk),e(Io,ok),e(Ft,nk),w(Pn,Ft,null),e(Ft,sk),w(An,Ft,null),g(o,Cc,_),g(o,Ho,_),e(Ho,Sn),e(Sn,nd),w(nr,nd,null),e(Ho,ak),e(Ho,sd),e(sd,rk),g(o,jc,_),g(o,ot,_),w(sr,ot,null),e(ot,ik),e(ot,ad),e(ad,lk),e(ot,dk),e(ot,ar),e(ar,ck),e(ar,$i),e($i,pk),e(ar,mk),e(ot,hk),e(ot,rr),e(rr,uk),e(rr,ir),e(ir,fk),e(rr,gk),e(ot,_k),w(Dn,ot,null),e(ot,kk),e(ot,Xt),w(lr,Xt,null),e(Xt,bk),e(Xt,Qo),e(Qo,vk),e(Qo,Ni),e(Ni,yk),e(Qo,Tk),e(Qo,rd),e(rd,wk),e(Qo,$k),e(Xt,Nk),w(In,Xt,null),e(Xt,Lk),w(Hn,Xt,null),g(o,Oc,_),g(o,Wo,_),e(Wo,Qn),e(Qn,id),w(dr,id,null),e(Wo,xk),e(Wo,ld),e(ld,Fk),g(o,Pc,_),g(o,nt,_),w(cr,nt,null),e(nt,Xk),e(nt,dd),e(dd,qk),e(nt,zk),e(nt,pr),e(pr,Mk),e(pr,Li),e(Li,Ek),e(pr,Ck),e(nt,jk),e(nt,mr),e(mr,Ok),e(mr,hr),e(hr,Pk),e(mr,Ak),e(nt,Sk),w(Wn,nt,null),e(nt,Dk),e(nt,_t),w(ur,_t,null),e(_t,Ik),e(_t,Uo),e(Uo,Hk),e(Uo,xi),e(xi,Qk),e(Uo,Wk),e(Uo,cd),e(cd,Uk),e(Uo,Bk),e(_t,Kk),w(Un,_t,null),e(_t,Rk),w(Bn,_t,null),e(_t,Vk),w(Kn,_t,null),g(o,Ac,_),g(o,Bo,_),e(Bo,Rn),e(Rn,pd),w(fr,pd,null),e(Bo,Yk),e(Bo,md),e(md,Gk),g(o,Sc,_),g(o,st,_),w(gr,st,null),e(st,Jk),e(st,hd),e(hd,Zk),e(st,eb),e(st,_r),e(_r,tb),e(_r,Fi),e(Fi,ob),e(_r,nb),e(st,sb),e(st,kr),e(kr,ab),e(kr,br),e(br,rb),e(kr,ib),e(st,lb),w(Vn,st,null),e(st,db),e(st,qt),w(vr,qt,null),e(qt,cb),e(qt,Ko),e(Ko,pb),e(Ko,Xi),e(Xi,mb),e(Ko,hb),e(Ko,ud),e(ud,ub),e(Ko,fb),e(qt,gb),w(Yn,qt,null),e(qt,_b),w(Gn,qt,null),g(o,Dc,_),g(o,Ro,_),e(Ro,Jn),e(Jn,fd),w(yr,fd,null),e(Ro,kb),e(Ro,gd),e(gd,bb),g(o,Ic,_),g(o,at,_),w(Tr,at,null),e(at,vb),e(at,_d),e(_d,yb),e(at,Tb),e(at,wr),e(wr,wb),e(wr,qi),e(qi,$b),e(wr,Nb),e(at,Lb),e(at,$r),e($r,xb),e($r,Nr),e(Nr,Fb),e($r,Xb),e(at,qb),w(Zn,at,null),e(at,zb),e(at,kt),w(Lr,kt,null),e(kt,Mb),e(kt,Vo),e(Vo,Eb),e(Vo,zi),e(zi,Cb),e(Vo,jb),e(Vo,kd),e(kd,Ob),e(Vo,Pb),e(kt,Ab),w(es,kt,null),e(kt,Sb),w(ts,kt,null),e(kt,Db),w(os,kt,null),g(o,Hc,_),g(o,Yo,_),e(Yo,ns),e(ns,bd),w(xr,bd,null),e(Yo,Ib),e(Yo,vd),e(vd,Hb),g(o,Qc,_),g(o,rt,_),w(Fr,rt,null),e(rt,Qb),e(rt,Go),e(Go,Wb),e(Go,yd),e(yd,Ub),e(Go,Bb),e(Go,Td),e(Td,Kb),e(Go,Rb),e(rt,Vb),e(rt,Xr),e(Xr,Yb),e(Xr,Mi),e(Mi,Gb),e(Xr,Jb),e(rt,Zb),e(rt,qr),e(qr,ev),e(qr,zr),e(zr,tv),e(qr,ov),e(rt,nv),w(ss,rt,null),e(rt,sv),e(rt,bt),w(Mr,bt,null),e(bt,av),e(bt,Jo),e(Jo,rv),e(Jo,Ei),e(Ei,iv),e(Jo,lv),e(Jo,wd),e(wd,dv),e(Jo,cv),e(bt,pv),w(as,bt,null),e(bt,mv),w(rs,bt,null),e(bt,hv),w(is,bt,null),Wc=!0},p(o,[_]){const Er={};_&2&&(Er.$$scope={dirty:_,ctx:o}),tn.$set(Er);const $d={};_&2&&($d.$$scope={dirty:_,ctx:o}),sn.$set($d);const Nd={};_&2&&(Nd.$$scope={dirty:_,ctx:o}),rn.$set(Nd);const Ld={};_&2&&(Ld.$$scope={dirty:_,ctx:o}),cn.$set(Ld);const Cr={};_&2&&(Cr.$$scope={dirty:_,ctx:o}),pn.$set(Cr);const xd={};_&2&&(xd.$$scope={dirty:_,ctx:o}),hn.$set(xd);const Fd={};_&2&&(Fd.$$scope={dirty:_,ctx:o}),un.$set(Fd);const Xd={};_&2&&(Xd.$$scope={dirty:_,ctx:o}),gn.$set(Xd);const jr={};_&2&&(jr.$$scope={dirty:_,ctx:o}),_n.$set(jr);const qd={};_&2&&(qd.$$scope={dirty:_,ctx:o}),kn.$set(qd);const zd={};_&2&&(zd.$$scope={dirty:_,ctx:o}),bn.$set(zd);const Md={};_&2&&(Md.$$scope={dirty:_,ctx:o}),vn.$set(Md);const Ed={};_&2&&(Ed.$$scope={dirty:_,ctx:o}),Tn.$set(Ed);const Cd={};_&2&&(Cd.$$scope={dirty:_,ctx:o}),wn.$set(Cd);const At={};_&2&&(At.$$scope={dirty:_,ctx:o}),Nn.$set(At);const Or={};_&2&&(Or.$$scope={dirty:_,ctx:o}),Ln.$set(Or);const jd={};_&2&&(jd.$$scope={dirty:_,ctx:o}),xn.$set(jd);const Pr={};_&2&&(Pr.$$scope={dirty:_,ctx:o}),Xn.$set(Pr);const Od={};_&2&&(Od.$$scope={dirty:_,ctx:o}),qn.$set(Od);const St={};_&2&&(St.$$scope={dirty:_,ctx:o}),zn.$set(St);const Pd={};_&2&&(Pd.$$scope={dirty:_,ctx:o}),En.$set(Pd);const Ad={};_&2&&(Ad.$$scope={dirty:_,ctx:o}),Cn.$set(Ad);const Sd={};_&2&&(Sd.$$scope={dirty:_,ctx:o}),On.$set(Sd);const Dd={};_&2&&(Dd.$$scope={dirty:_,ctx:o}),Pn.$set(Dd);const Zo={};_&2&&(Zo.$$scope={dirty:_,ctx:o}),An.$set(Zo);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:o}),Dn.$set(Id);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:o}),In.$set(Hd);const Ar={};_&2&&(Ar.$$scope={dirty:_,ctx:o}),Hn.$set(Ar);const Qd={};_&2&&(Qd.$$scope={dirty:_,ctx:o}),Wn.$set(Qd);const Wd={};_&2&&(Wd.$$scope={dirty:_,ctx:o}),Un.$set(Wd);const Ud={};_&2&&(Ud.$$scope={dirty:_,ctx:o}),Bn.$set(Ud);const Dt={};_&2&&(Dt.$$scope={dirty:_,ctx:o}),Kn.$set(Dt);const It={};_&2&&(It.$$scope={dirty:_,ctx:o}),Vn.$set(It);const Bd={};_&2&&(Bd.$$scope={dirty:_,ctx:o}),Yn.$set(Bd);const Kd={};_&2&&(Kd.$$scope={dirty:_,ctx:o}),Gn.$set(Kd);const Rd={};_&2&&(Rd.$$scope={dirty:_,ctx:o}),Zn.$set(Rd);const en={};_&2&&(en.$$scope={dirty:_,ctx:o}),es.$set(en);const Vd={};_&2&&(Vd.$$scope={dirty:_,ctx:o}),ts.$set(Vd);const Yd={};_&2&&(Yd.$$scope={dirty:_,ctx:o}),os.$set(Yd);const Sr={};_&2&&(Sr.$$scope={dirty:_,ctx:o}),ss.$set(Sr);const Gd={};_&2&&(Gd.$$scope={dirty:_,ctx:o}),as.$set(Gd);const Jd={};_&2&&(Jd.$$scope={dirty:_,ctx:o}),rs.$set(Jd);const Zd={};_&2&&(Zd.$$scope={dirty:_,ctx:o}),is.$set(Zd)},i(o){Wc||($(l.$$.fragment,o),$(x.$$.fragment,o),$(W.$$.fragment,o),$(Pe.$$.fragment,o),$(tn.$$.fragment,o),$(ks.$$.fragment,o),$(bs.$$.fragment,o),$(ws.$$.fragment,o),$(Ns.$$.fragment,o),$(xs.$$.fragment,o),$(sn.$$.fragment,o),$(Fs.$$.fragment,o),$(Xs.$$.fragment,o),$(qs.$$.fragment,o),$(Es.$$.fragment,o),$(js.$$.fragment,o),$(rn.$$.fragment,o),$(Os.$$.fragment,o),$(Ps.$$.fragment,o),$(Ss.$$.fragment,o),$(Is.$$.fragment,o),$(Qs.$$.fragment,o),$(Us.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Gs.$$.fragment,o),$(Zs.$$.fragment,o),$(ta.$$.fragment,o),$(na.$$.fragment,o),$(aa.$$.fragment,o),$(ia.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(ua.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(fa.$$.fragment,o),$(ga.$$.fragment,o),$(va.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(ya.$$.fragment,o),$(Ta.$$.fragment,o),$(La.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(kn.$$.fragment,o),$(bn.$$.fragment,o),$(vn.$$.fragment,o),$(xa.$$.fragment,o),$(Fa.$$.fragment,o),$(Ma.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$(Ea.$$.fragment,o),$(Ca.$$.fragment,o),$(Aa.$$.fragment,o),$(Nn.$$.fragment,o),$(Ln.$$.fragment,o),$(xn.$$.fragment,o),$(Sa.$$.fragment,o),$(Da.$$.fragment,o),$(Wa.$$.fragment,o),$(Xn.$$.fragment,o),$(qn.$$.fragment,o),$(zn.$$.fragment,o),$(Ua.$$.fragment,o),$(Ba.$$.fragment,o),$(Ya.$$.fragment,o),$(En.$$.fragment,o),$(Cn.$$.fragment,o),$(Ga.$$.fragment,o),$(Ja.$$.fragment,o),$(On.$$.fragment,o),$(or.$$.fragment,o),$(Pn.$$.fragment,o),$(An.$$.fragment,o),$(nr.$$.fragment,o),$(sr.$$.fragment,o),$(Dn.$$.fragment,o),$(lr.$$.fragment,o),$(In.$$.fragment,o),$(Hn.$$.fragment,o),$(dr.$$.fragment,o),$(cr.$$.fragment,o),$(Wn.$$.fragment,o),$(ur.$$.fragment,o),$(Un.$$.fragment,o),$(Bn.$$.fragment,o),$(Kn.$$.fragment,o),$(fr.$$.fragment,o),$(gr.$$.fragment,o),$(Vn.$$.fragment,o),$(vr.$$.fragment,o),$(Yn.$$.fragment,o),$(Gn.$$.fragment,o),$(yr.$$.fragment,o),$(Tr.$$.fragment,o),$(Zn.$$.fragment,o),$(Lr.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(xr.$$.fragment,o),$(Fr.$$.fragment,o),$(ss.$$.fragment,o),$(Mr.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),Wc=!0)},o(o){N(l.$$.fragment,o),N(x.$$.fragment,o),N(W.$$.fragment,o),N(Pe.$$.fragment,o),N(tn.$$.fragment,o),N(ks.$$.fragment,o),N(bs.$$.fragment,o),N(ws.$$.fragment,o),N(Ns.$$.fragment,o),N(xs.$$.fragment,o),N(sn.$$.fragment,o),N(Fs.$$.fragment,o),N(Xs.$$.fragment,o),N(qs.$$.fragment,o),N(Es.$$.fragment,o),N(js.$$.fragment,o),N(rn.$$.fragment,o),N(Os.$$.fragment,o),N(Ps.$$.fragment,o),N(Ss.$$.fragment,o),N(Is.$$.fragment,o),N(Qs.$$.fragment,o),N(Us.$$.fragment,o),N(Ks.$$.fragment,o),N(Vs.$$.fragment,o),N(Gs.$$.fragment,o),N(Zs.$$.fragment,o),N(ta.$$.fragment,o),N(na.$$.fragment,o),N(aa.$$.fragment,o),N(ia.$$.fragment,o),N(da.$$.fragment,o),N(ca.$$.fragment,o),N(ua.$$.fragment,o),N(cn.$$.fragment,o),N(pn.$$.fragment,o),N(fa.$$.fragment,o),N(ga.$$.fragment,o),N(va.$$.fragment,o),N(hn.$$.fragment,o),N(un.$$.fragment,o),N(ya.$$.fragment,o),N(Ta.$$.fragment,o),N(La.$$.fragment,o),N(gn.$$.fragment,o),N(_n.$$.fragment,o),N(kn.$$.fragment,o),N(bn.$$.fragment,o),N(vn.$$.fragment,o),N(xa.$$.fragment,o),N(Fa.$$.fragment,o),N(Ma.$$.fragment,o),N(Tn.$$.fragment,o),N(wn.$$.fragment,o),N(Ea.$$.fragment,o),N(Ca.$$.fragment,o),N(Aa.$$.fragment,o),N(Nn.$$.fragment,o),N(Ln.$$.fragment,o),N(xn.$$.fragment,o),N(Sa.$$.fragment,o),N(Da.$$.fragment,o),N(Wa.$$.fragment,o),N(Xn.$$.fragment,o),N(qn.$$.fragment,o),N(zn.$$.fragment,o),N(Ua.$$.fragment,o),N(Ba.$$.fragment,o),N(Ya.$$.fragment,o),N(En.$$.fragment,o),N(Cn.$$.fragment,o),N(Ga.$$.fragment,o),N(Ja.$$.fragment,o),N(On.$$.fragment,o),N(or.$$.fragment,o),N(Pn.$$.fragment,o),N(An.$$.fragment,o),N(nr.$$.fragment,o),N(sr.$$.fragment,o),N(Dn.$$.fragment,o),N(lr.$$.fragment,o),N(In.$$.fragment,o),N(Hn.$$.fragment,o),N(dr.$$.fragment,o),N(cr.$$.fragment,o),N(Wn.$$.fragment,o),N(ur.$$.fragment,o),N(Un.$$.fragment,o),N(Bn.$$.fragment,o),N(Kn.$$.fragment,o),N(fr.$$.fragment,o),N(gr.$$.fragment,o),N(Vn.$$.fragment,o),N(vr.$$.fragment,o),N(Yn.$$.fragment,o),N(Gn.$$.fragment,o),N(yr.$$.fragment,o),N(Tr.$$.fragment,o),N(Zn.$$.fragment,o),N(Lr.$$.fragment,o),N(es.$$.fragment,o),N(ts.$$.fragment,o),N(os.$$.fragment,o),N(xr.$$.fragment,o),N(Fr.$$.fragment,o),N(ss.$$.fragment,o),N(Mr.$$.fragment,o),N(as.$$.fragment,o),N(rs.$$.fragment,o),N(is.$$.fragment,o),Wc=!1},d(o){t(d),o&&t(k),o&&t(m),L(l),o&&t(me),o&&t(D),L(x),o&&t(he),o&&t(Q),o&&t(ue),o&&t(B),o&&t(fe),o&&t(K),o&&t(ne),o&&t(M),o&&t(ge),o&&t(P),o&&t(se),o&&t(_e),o&&t(S),o&&t(H),L(W),o&&t(Qe),o&&t(U),L(Pe),L(tn),o&&t(ec),o&&t(so),L(ks),o&&t(tc),o&&t(Ge),L(bs),L(ws),L(Ns),L(xs),L(sn),L(Fs),o&&t(oc),o&&t(ro),L(Xs),o&&t(nc),o&&t(it),L(qs),L(Es),L(js),L(rn),o&&t(sc),o&&t(co),L(Os),o&&t(ac),o&&t(po),L(Ps),o&&t(rc),o&&t(mo),L(Ss),o&&t(ic),o&&t(ho),L(Is),o&&t(lc),o&&t(uo),L(Qs),o&&t(dc),o&&t(fo),L(Us),o&&t(cc),o&&t(go),L(Ks),o&&t(pc),o&&t(_o),L(Vs),o&&t(mc),o&&t(ko),L(Gs),o&&t(hc),o&&t(bo),L(Zs),o&&t(uc),o&&t(vo),L(ta),o&&t(fc),o&&t(yo),L(na),o&&t(gc),o&&t(To),L(aa),o&&t(_c),o&&t(wo),L(ia),o&&t(kc),o&&t($o),L(da),o&&t(bc),o&&t(lt),L(ca),L(ua),L(cn),L(pn),o&&t(vc),o&&t(Lo),L(fa),o&&t(yc),o&&t(dt),L(ga),L(va),L(hn),L(un),o&&t(Tc),o&&t(Fo),L(ya),o&&t(wc),o&&t(ct),L(Ta),L(La),L(gn),L(_n),L(kn),L(bn),L(vn),o&&t($c),o&&t(qo),L(xa),o&&t(Nc),o&&t(pt),L(Fa),L(Ma),L(Tn),L(wn),o&&t(Lc),o&&t(Mo),L(Ea),o&&t(xc),o&&t(mt),L(Ca),L(Aa),L(Nn),L(Ln),L(xn),o&&t(Fc),o&&t(Co),L(Sa),o&&t(Xc),o&&t(ht),L(Da),L(Wa),L(Xn),L(qn),L(zn),o&&t(qc),o&&t(Po),L(Ua),o&&t(zc),o&&t(ut),L(Ba),L(Ya),L(En),L(Cn),o&&t(Mc),o&&t(Do),L(Ga),o&&t(Ec),o&&t(tt),L(Ja),L(On),L(or),L(Pn),L(An),o&&t(Cc),o&&t(Ho),L(nr),o&&t(jc),o&&t(ot),L(sr),L(Dn),L(lr),L(In),L(Hn),o&&t(Oc),o&&t(Wo),L(dr),o&&t(Pc),o&&t(nt),L(cr),L(Wn),L(ur),L(Un),L(Bn),L(Kn),o&&t(Ac),o&&t(Bo),L(fr),o&&t(Sc),o&&t(st),L(gr),L(Vn),L(vr),L(Yn),L(Gn),o&&t(Dc),o&&t(Ro),L(yr),o&&t(Ic),o&&t(at),L(Tr),L(Zn),L(Lr),L(es),L(ts),L(os),o&&t(Hc),o&&t(Yo),L(xr),o&&t(Qc),o&&t(rt),L(Fr),L(ss),L(Mr),L(as),L(rs),L(is)}}}const Yw={local:"xlnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLNetConfig",title:"XLNetConfig"},{local:"transformers.XLNetTokenizer",title:"XLNetTokenizer"},{local:"transformers.XLNetTokenizerFast",title:"XLNetTokenizerFast"},{local:"transformers.models.xlnet.modeling_xlnet.XLNetModelOutput",title:"XLNet specific outputs"},{local:"transformers.XLNetModel",title:"XLNetModel"},{local:"transformers.XLNetLMHeadModel",title:"XLNetLMHeadModel"},{local:"transformers.XLNetForSequenceClassification",title:"XLNetForSequenceClassification"},{local:"transformers.XLNetForMultipleChoice",title:"XLNetForMultipleChoice"},{local:"transformers.XLNetForTokenClassification",title:"XLNetForTokenClassification"},{local:"transformers.XLNetForQuestionAnsweringSimple",title:"XLNetForQuestionAnsweringSimple"},{local:"transformers.XLNetForQuestionAnswering",title:"XLNetForQuestionAnswering"},{local:"transformers.TFXLNetModel",title:"TFXLNetModel"},{local:"transformers.TFXLNetLMHeadModel",title:"TFXLNetLMHeadModel"},{local:"transformers.TFXLNetForSequenceClassification",title:"TFXLNetForSequenceClassification"},{local:"transformers.TFXLNetForMultipleChoice",title:"TFLNetForMultipleChoice"},{local:"transformers.TFXLNetForTokenClassification",title:"TFXLNetForTokenClassification"},{local:"transformers.TFXLNetForQuestionAnsweringSimple",title:"TFXLNetForQuestionAnsweringSimple"}],title:"XLNet"};function Gw(X){return aw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class s2 extends tw{constructor(d){super();ow(this,d,Gw,Vw,nw,{})}}export{s2 as default,Yw as metadata};
