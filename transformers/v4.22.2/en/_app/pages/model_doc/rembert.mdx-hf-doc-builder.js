import{S as Zy,i as eT,s as tT,e as r,k as m,w as y,t as o,M as oT,c as a,d as t,m as h,a as i,x as T,h as n,b as _,G as e,g as k,y as w,q as $,o as F,B as R,v as nT,L as Se}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as tt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function sT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertModel, RemBertConfig

# Initializing a RemBERT rembert style configuration
configuration = RemBertConfig()

# Initializing a model from the rembert style configuration
model = RemBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertModel, RemBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a RemBERT rembert style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = RemBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the rembert style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function rT(M){let d,g,c,u,v;return u=new We({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=o("sequence pair mask has the following format:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function aT(M){let d,g,c,u,v;return u=new We({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=o("sequence pair mask has the following format:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"sequence pair mask has the following format:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function iT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function lT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertModel
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertModel.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertModel.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function dT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function cT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertForCausalLM, RemBertConfig
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
config = RemBertConfig.from_pretrained("google/rembert")
config.is_decoder = True
model = RemBertForCausalLM.from_pretrained("google/rembert", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForCausalLM, RemBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RemBertConfig.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function pT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function mT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertForMaskedLM
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForMaskedLM.from_pretrained("google/rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function hT(M){let d,g;return d=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function uT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function fT(M){let d,g,c,u,v;return u=new We({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForSequenceClassification.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example of single-label classification:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of single-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function gT(M){let d,g;return d=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained("google/rembert", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function _T(M){let d,g,c,u,v;return u=new We({props:{code:`import torch
from transformers import RemBertTokenizer, RemBertForSequenceClassification

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForSequenceClassification.from_pretrained("google/rembert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example of multi-label classification:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example of multi-label classification:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function kT(M){let d,g;return d=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RemBertForSequenceClassification.from_pretrained(
    "google/rembert", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function bT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function vT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertForMultipleChoice
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForMultipleChoice.from_pretrained("google/rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function yT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function TT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertForTokenClassification
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForTokenClassification.from_pretrained("google/rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function wT(M){let d,g;return d=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function $T(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function FT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, RemBertForQuestionAnswering
import torch

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = RemBertForQuestionAnswering.from_pretrained("google/rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, RemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function RT(M){let d,g;return d=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function ET(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function BT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function MT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertModel
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertModel.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertModel.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function zT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function CT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function qT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMaskedLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForMaskedLM.from_pretrained("google/rembert")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function xT(M){let d,g;return d=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function jT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function PT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForCausalLM
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForCausalLM.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function LT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function OT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function DT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForSequenceClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForSequenceClassification.from_pretrained("google/rembert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function AT(M){let d,g;return d=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFRemBertForSequenceClassification.from_pretrained("google/rembert", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function NT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function IT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function ST(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForMultipleChoice
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForMultipleChoice.from_pretrained("google/rembert")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function WT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function UT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function KT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForTokenClassification
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForTokenClassification.from_pretrained("google/rembert")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function HT(M){let d,g;return d=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function QT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie;return{c(){d=r("p"),g=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),v=o(" accept two formats as input:"),l=m(),p=r("ul"),C=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),fe=m(),N=r("li"),le=o("having all inputs as a list, tuple or dict in the first positional argument."),te=m(),E=r("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),$e=o("model.fit()"),ge=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=r("code"),Fe=o("model.fit()"),ce=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r("code"),Re=o("fit()"),_e=o(" and "),U=r("code"),Ee=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),K=r("code"),he=o("Functional"),Be=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=m(),q=r("ul"),P=r("li"),be=o("a single Tensor with "),H=r("code"),Me=o("input_ids"),ve=o(" only and nothing else: "),I=r("code"),de=o("model(input_ids)"),ue=m(),x=r("li"),ze=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r("code"),Ce=o("model([input_ids, attention_mask])"),ye=o(" or "),D=r("code"),pe=o("model([input_ids, attention_mask, token_type_ids])"),qe=m(),O=r("li"),xe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),re=m(),j=r("p"),Pe=o(`Note that when creating models and layers with
`),L=r("a"),Le=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=n(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Qe=i(c);u=n(Qe,"transformers"),Qe.forEach(t),v=n(B," accept two formats as input:"),B.forEach(t),l=h(f),p=a(f,"UL",{});var ae=i(p);C=a(ae,"LI",{});var Ne=i(C);Te=n(Ne,"having all inputs as keyword arguments (like PyTorch models), or"),Ne.forEach(t),fe=h(ae),N=a(ae,"LI",{});var Ve=i(N);le=n(Ve,"having all inputs as a list, tuple or dict in the first positional argument."),Ve.forEach(t),ae.forEach(t),te=h(f),E=a(f,"P",{});var z=i(E);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var Je=i(V);$e=n(Je,"model.fit()"),Je.forEach(t),ge=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),S=a(z,"CODE",{});var De=i(S);Fe=n(De,"model.fit()"),De.forEach(t),ce=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=a(z,"CODE",{});var Ke=i(G);Re=n(Ke,"fit()"),Ke.forEach(t),_e=n(z," and "),U=a(z,"CODE",{});var Oe=i(U);Ee=n(Oe,"predict()"),Oe.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),K=a(z,"CODE",{});var Ae=i(K);he=n(Ae,"Functional"),Ae.forEach(t),Be=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),q=a(f,"UL",{});var A=i(q);P=a(A,"LI",{});var W=i(P);be=n(W,"a single Tensor with "),H=a(W,"CODE",{});var Ge=i(H);Me=n(Ge,"input_ids"),Ge.forEach(t),ve=n(W," only and nothing else: "),I=a(W,"CODE",{});var Ue=i(I);de=n(Ue,"model(input_ids)"),Ue.forEach(t),W.forEach(t),ue=h(A),x=a(A,"LI",{});var X=i(x);ze=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a(X,"CODE",{});var He=i(J);Ce=n(He,"model([input_ids, attention_mask])"),He.forEach(t),ye=n(X," or "),D=a(X,"CODE",{});var oe=i(D);pe=n(oe,"model([input_ids, attention_mask, token_type_ids])"),oe.forEach(t),X.forEach(t),qe=h(A),O=a(A,"LI",{});var me=i(O);xe=n(me,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a(me,"CODE",{});var Xe=i(Q);je=n(Xe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Xe.forEach(t),me.forEach(t),A.forEach(t),re=h(f),j=a(f,"P",{});var Z=i(j);Pe=n(Z,`Note that when creating models and layers with
`),L=a(Z,"A",{href:!0,rel:!0});var Ye=i(L);Le=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){_(L,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(L,"rel","nofollow")},m(f,B){k(f,d,B),e(d,g),e(d,c),e(c,u),e(d,v),k(f,l,B),k(f,p,B),e(p,C),e(C,Te),e(p,fe),e(p,N),e(N,le),k(f,te,B),k(f,E,B),e(E,we),e(E,V),e(V,$e),e(E,ge),e(E,S),e(S,Fe),e(E,ce),e(E,G),e(G,Re),e(E,_e),e(E,U),e(U,Ee),e(E,ke),e(E,K),e(K,he),e(E,Be),k(f,ne,B),k(f,q,B),e(q,P),e(P,be),e(P,H),e(H,Me),e(P,ve),e(P,I),e(I,de),e(q,ue),e(q,x),e(x,ze),e(x,J),e(J,Ce),e(x,ye),e(x,D),e(D,pe),e(q,qe),e(q,O),e(O,xe),e(O,Q),e(Q,je),k(f,re,B),k(f,j,B),e(j,Pe),e(j,L),e(L,Le),e(j,ie)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(te),f&&t(E),f&&t(ne),f&&t(q),f&&t(re),f&&t(j)}}}function VT(M){let d,g,c,u,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var C=i(c);u=n(C,"Module"),C.forEach(t),v=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){k(l,d,p),e(d,g),e(d,c),e(c,u),e(d,v)},d(l){l&&t(d)}}}function JT(M){let d,g,c,u,v;return u=new We({props:{code:`from transformers import RemBertTokenizer, TFRemBertForQuestionAnswering
import tensorflow as tf

tokenizer = RemBertTokenizer.from_pretrained("google/rembert")
model = TFRemBertForQuestionAnswering.from_pretrained("google/rembert")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RemBertTokenizer, TFRemBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RemBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRemBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/rembert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=n(p,"Example:"),p.forEach(t),c=h(l),T(u.$$.fragment,l)},m(l,p){k(l,d,p),e(d,g),k(l,c,p),w(u,l,p),v=!0},p:Se,i(l){v||($(u.$$.fragment,l),v=!0)},o(l){F(u.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),R(u,l)}}}function GT(M){let d,g;return d=new We({props:{code:`# target is "nice puppet"
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
`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,u){w(d,c,u),g=!0},p:Se,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){F(d.$$.fragment,c),g=!1},d(c){R(d,c)}}}function XT(M){let d,g,c,u,v,l,p,C,Te,fe,N,le,te,E,we,V,$e,ge,S,Fe,ce,G,Re,_e,U,Ee,ke,K,he,Be,ne,q,P,be,H,Me,ve,I,de,ue,x,ze,J,Ce,ye,D,pe,qe,O,xe,Q,je,re,j,Pe,L,Le,ie,f,B,Qe,ae,Ne,Ve,z,Je,De,Ke,Oe,Ae,A,W,Ge,Ue,X,He,oe,me,Xe,Z,Ye,cs,op,np,sp,ps,rp,pa,ap,ip,lp,Jt,ms,dp,li,cp,pp,hs,ma,mp,di,hp,up,ha,fp,ci,gp,_p,Wo,us,kp,fs,bp,pi,vp,yp,Tp,Mt,gs,wp,mi,$p,Fp,Uo,Rp,ao,Ep,hi,Bp,Mp,ui,zp,Cp,qp,ua,_s,Ld,io,Ko,fi,ks,xp,gi,jp,Od,nt,bs,Pp,Ut,Lp,_i,Op,Dp,vs,Ap,Np,fa,Ip,Sp,Wp,Gt,ys,Up,ki,Kp,Hp,Ts,ga,Qp,bi,Vp,Jp,_a,Gp,vi,Xp,Yp,Ho,ws,Zp,$s,em,yi,tm,om,nm,zt,Fs,sm,Ti,rm,am,Qo,im,wi,lm,dm,ka,Rs,Dd,lo,Vo,$i,Es,cm,Fi,pm,Ad,ut,Bs,mm,Ms,hm,zs,um,fm,gm,Cs,_m,qs,km,bm,vm,st,ym,Ri,Tm,wm,Ei,$m,Fm,Bi,Rm,Em,Mi,Bm,Mm,zi,zm,Cm,Ci,qm,xm,jm,Ct,xs,Pm,co,Lm,ba,Om,Dm,qi,Am,Nm,Im,Jo,Sm,Go,Nd,po,Xo,xi,js,Wm,ji,Um,Id,Kt,Ps,Km,mo,Hm,Pi,Qm,Vm,Ls,Jm,Gm,Xm,qt,Os,Ym,ho,Zm,va,eh,th,Li,oh,nh,sh,Yo,rh,Zo,Sd,uo,en,Oi,Ds,ah,Di,ih,Wd,Ht,As,lh,fo,dh,Ai,ch,ph,Ns,mh,hh,uh,ft,Is,fh,go,gh,ya,_h,kh,Ni,bh,vh,yh,tn,Th,on,wh,nn,Ud,_o,sn,Ii,Ss,$h,Si,Fh,Kd,Ft,Ws,Rh,Wi,Eh,Bh,Us,Mh,Ks,zh,Ch,qh,ot,Hs,xh,ko,jh,Ta,Ph,Lh,Ui,Oh,Dh,Ah,rn,Nh,an,Ih,ln,Sh,dn,Wh,cn,Hd,bo,pn,Ki,Qs,Uh,Hi,Kh,Qd,Rt,Vs,Hh,Qi,Qh,Vh,Js,Jh,Gs,Gh,Xh,Yh,xt,Xs,Zh,vo,eu,wa,tu,ou,Vi,nu,su,ru,mn,au,hn,Vd,yo,un,Ji,Ys,iu,Gi,lu,Jd,Et,Zs,du,Xi,cu,pu,er,mu,tr,hu,uu,fu,gt,or,gu,To,_u,$a,ku,bu,Yi,vu,yu,Tu,fn,wu,gn,$u,_n,Gd,wo,kn,Zi,nr,Fu,el,Ru,Xd,Bt,sr,Eu,$o,Bu,tl,Mu,zu,ol,Cu,qu,xu,rr,ju,ar,Pu,Lu,Ou,_t,ir,Du,Fo,Au,Fa,Nu,Iu,nl,Su,Wu,Uu,bn,Ku,vn,Hu,yn,Yd,Ro,Tn,sl,lr,Qu,rl,Vu,Zd,rt,dr,Ju,al,Gu,Xu,cr,Yu,Ra,Zu,ef,tf,pr,of,mr,nf,sf,rf,wn,af,jt,hr,lf,Eo,df,Ea,cf,pf,il,mf,hf,uf,$n,ff,Fn,ec,Bo,Rn,ll,ur,gf,dl,_f,tc,at,fr,kf,gr,bf,cl,vf,yf,Tf,_r,wf,Ba,$f,Ff,Rf,kr,Ef,br,Bf,Mf,zf,En,Cf,kt,vr,qf,Mo,xf,Ma,jf,Pf,pl,Lf,Of,Df,Bn,Af,Mn,Nf,zn,oc,zo,Cn,ml,yr,If,hl,Sf,nc,it,Tr,Wf,wr,Uf,ul,Kf,Hf,Qf,$r,Vf,za,Jf,Gf,Xf,Fr,Yf,Rr,Zf,eg,tg,qn,og,bt,Er,ng,et,sg,fl,rg,ag,gl,ig,lg,_l,dg,cg,kl,pg,mg,bl,hg,ug,vl,fg,gg,yl,_g,kg,bg,Br,Mr,vg,Tl,yg,Tg,wg,zr,$g,wl,Fg,Rg,Eg,Y,Bg,$l,Mg,zg,Fl,Cg,qg,Rl,xg,jg,El,Pg,Lg,Bl,Og,Dg,Ml,Ag,Ng,zl,Ig,Sg,Cl,Wg,Ug,ql,Kg,Hg,xl,Qg,Vg,jl,Jg,Gg,Pl,Xg,Yg,Ll,Zg,e_,Ol,t_,o_,Dl,n_,s_,Al,r_,a_,Nl,i_,l_,Il,d_,c_,Sl,p_,m_,Wl,h_,u_,f_,xn,sc,Co,jn,Ul,Cr,g_,Kl,__,rc,lt,qr,k_,Hl,b_,v_,xr,y_,Ca,T_,w_,$_,jr,F_,Pr,R_,E_,B_,Pn,M_,vt,Lr,z_,qo,C_,qa,q_,x_,Ql,j_,P_,L_,Ln,O_,On,D_,Dn,ac,xo,An,Vl,Or,A_,Jl,N_,ic,dt,Dr,I_,Gl,S_,W_,Ar,U_,xa,K_,H_,Q_,Nr,V_,Ir,J_,G_,X_,Nn,Y_,Pt,Sr,Z_,jo,ek,ja,tk,ok,Xl,nk,sk,rk,In,ak,Sn,lc,Po,Wn,Yl,Wr,ik,Zl,lk,dc,ct,Ur,dk,ed,ck,pk,Kr,mk,Pa,hk,uk,fk,Hr,gk,Qr,_k,kk,bk,Un,vk,yt,Vr,yk,Lo,Tk,La,wk,$k,td,Fk,Rk,Ek,Kn,Bk,Hn,Mk,Qn,cc,Oo,Vn,od,Jr,zk,nd,Ck,pc,pt,Gr,qk,Do,xk,sd,jk,Pk,rd,Lk,Ok,Dk,Xr,Ak,Oa,Nk,Ik,Sk,Yr,Wk,Zr,Uk,Kk,Hk,Jn,Qk,Tt,ea,Vk,Ao,Jk,Da,Gk,Xk,ad,Yk,Zk,eb,Gn,tb,Xn,ob,Yn,mc;return l=new tt({}),E=new tt({}),x=new tt({}),pe=new se({props:{name:"class transformers.RemBertConfig",anchor:"transformers.RemBertConfig",parameters:[{name:"vocab_size",val:" = 250300"},{name:"hidden_size",val:" = 1152"},{name:"num_hidden_layers",val:" = 32"},{name:"num_attention_heads",val:" = 18"},{name:"input_embedding_size",val:" = 256"},{name:"output_embedding_size",val:" = 1664"},{name:"intermediate_size",val:" = 4608"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.0"},{name:"classifier_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 0"},{name:"bos_token_id",val:" = 312"},{name:"eos_token_id",val:" = 313"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 250300) &#x2014;
Vocabulary size of the RemBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>. Vocabulary size of the model.
Defines the different tokens that can be represented by the <em>inputs_ids</em> passed to the forward method of
<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.RemBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1152) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.RemBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.RemBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 18) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.RemBertConfig.input_embedding_size",description:`<strong>input_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 256) &#x2014;
Dimensionality of the input embeddings.`,name:"input_embedding_size"},{anchor:"transformers.RemBertConfig.output_embedding_size",description:`<strong>output_embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1664) &#x2014;
Dimensionality of the output embeddings.`,name:"output_embedding_size"},{anchor:"transformers.RemBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 4608) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.RemBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.RemBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.RemBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.RemBertConfig.classifier_dropout_prob",description:`<strong>classifier_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the classifier layer when fine-tuning.`,name:"classifier_dropout_prob"},{anchor:"transformers.RemBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.RemBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertModel">RemBertModel</a> or <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertModel">TFRemBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.RemBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.RemBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.RemBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/configuration_rembert.py#L29"}}),De=new Ie({props:{anchor:"transformers.RemBertConfig.example",$$slots:{default:[sT]},$$scope:{ctx:M}}}),W=new tt({}),me=new se({props:{name:"class transformers.RemBertTokenizer",anchor:"transformers.RemBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = True"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.RemBertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.RemBertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert.py#L43"}}),ms=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert.py#L172",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),us=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert.py#L197",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert.py#L228",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Uo=new Ie({props:{anchor:"transformers.RemBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[rT]},$$scope:{ctx:M}}}),_s=new se({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert.py#L258"}}),ks=new tt({}),bs=new se({props:{name:"class transformers.RemBertTokenizerFast",anchor:"transformers.RemBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"remove_space",val:" = True"},{name:"keep_accents",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '<unk>'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.RemBertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.RemBertTokenizerFast.remove_space",description:`<strong>remove_space</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to strip the text when tokenizing (removing excess spaces before and after the string).`,name:"remove_space"},{anchor:"transformers.RemBertTokenizerFast.keep_accents",description:`<strong>keep_accents</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to keep accents when tokenizing.`,name:"keep_accents"},{anchor:"transformers.RemBertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.RemBertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. .. note:: When building a sequence using special tokens, this is not the token
that is used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.RemBertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.RemBertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.RemBertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.RemBertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.RemBertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert_fast.py#L51"}}),ys=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert_fast.py#L144",returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ws=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.RemBertTokenizerFast.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert_fast.py#L169",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert_fast.py#L200",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Qo=new Ie({props:{anchor:"transformers.RemBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[aT]},$$scope:{ctx:M}}}),Rs=new se({props:{name:"save_vocabulary",anchor:"transformers.RemBertTokenizerFast.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/tokenization_rembert_fast.py#L230"}}),Es=new tt({}),Bs=new se({props:{name:"class transformers.RemBertModel",anchor:"transformers.RemBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.RemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L747"}}),xs=new se({props:{name:"forward",anchor:"transformers.RemBertModel.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L786",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPastAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Ze({props:{$$slots:{default:[iT]},$$scope:{ctx:M}}}),Go=new Ie({props:{anchor:"transformers.RemBertModel.forward.example",$$slots:{default:[lT]},$$scope:{ctx:M}}}),js=new tt({}),Ps=new se({props:{name:"class transformers.RemBertForCausalLM",anchor:"transformers.RemBertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1020"}}),Os=new se({props:{name:"forward",anchor:"transformers.RemBertForCausalLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.RemBertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.RemBertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.RemBertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>.`,name:"labels"},{anchor:"transformers.RemBertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1042",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key,
value states of the self-attention and the cross-attention layers if model is used in encoder-decoder
setting. Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Ze({props:{$$slots:{default:[dT]},$$scope:{ctx:M}}}),Zo=new Ie({props:{anchor:"transformers.RemBertForCausalLM.forward.example",$$slots:{default:[cT]},$$scope:{ctx:M}}}),Ds=new tt({}),As=new se({props:{name:"class transformers.RemBertForMaskedLM",anchor:"transformers.RemBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L917"}}),Is=new se({props:{name:"forward",anchor:"transformers.RemBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": LongTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L939",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tn=new Ze({props:{$$slots:{default:[pT]},$$scope:{ctx:M}}}),on=new Ie({props:{anchor:"transformers.RemBertForMaskedLM.forward.example",$$slots:{default:[mT]},$$scope:{ctx:M}}}),nn=new Ie({props:{anchor:"transformers.RemBertForMaskedLM.forward.example-2",$$slots:{default:[hT]},$$scope:{ctx:M}}}),Ss=new tt({}),Ws=new se({props:{name:"class transformers.RemBertForSequenceClassification",anchor:"transformers.RemBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1173"}}),Hs=new se({props:{name:"forward",anchor:"transformers.RemBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1184",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new Ze({props:{$$slots:{default:[uT]},$$scope:{ctx:M}}}),an=new Ie({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example",$$slots:{default:[fT]},$$scope:{ctx:M}}}),ln=new Ie({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-2",$$slots:{default:[gT]},$$scope:{ctx:M}}}),dn=new Ie({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-3",$$slots:{default:[_T]},$$scope:{ctx:M}}}),cn=new Ie({props:{anchor:"transformers.RemBertForSequenceClassification.forward.example-4",$$slots:{default:[kT]},$$scope:{ctx:M}}}),Qs=new tt({}),Vs=new se({props:{name:"class transformers.RemBertForMultipleChoice",anchor:"transformers.RemBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1270"}}),Xs=new se({props:{name:"forward",anchor:"transformers.RemBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1281",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new Ze({props:{$$slots:{default:[bT]},$$scope:{ctx:M}}}),hn=new Ie({props:{anchor:"transformers.RemBertForMultipleChoice.forward.example",$$slots:{default:[vT]},$$scope:{ctx:M}}}),Ys=new tt({}),Zs=new se({props:{name:"class transformers.RemBertForTokenClassification",anchor:"transformers.RemBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1362"}}),or=new se({props:{name:"forward",anchor:"transformers.RemBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1374",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new Ze({props:{$$slots:{default:[yT]},$$scope:{ctx:M}}}),gn=new Ie({props:{anchor:"transformers.RemBertForTokenClassification.forward.example",$$slots:{default:[TT]},$$scope:{ctx:M}}}),_n=new Ie({props:{anchor:"transformers.RemBertForTokenClassification.forward.example-2",$$slots:{default:[wT]},$$scope:{ctx:M}}}),nr=new tt({}),sr=new se({props:{name:"class transformers.RemBertForQuestionAnswering",anchor:"transformers.RemBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1441"}}),ir=new se({props:{name:"forward",anchor:"transformers.RemBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": FloatTensor = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.FloatTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.RemBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertTokenizer">RemBertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.RemBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.RemBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.RemBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.RemBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.RemBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_rembert.py#L1453",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new Ze({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),vn=new Ie({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example",$$slots:{default:[FT]},$$scope:{ctx:M}}}),yn=new Ie({props:{anchor:"transformers.RemBertForQuestionAnswering.forward.example-2",$$slots:{default:[RT]},$$scope:{ctx:M}}}),lr=new tt({}),dr=new se({props:{name:"class transformers.TFRemBertModel",anchor:"transformers.TFRemBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L936"}}),wn=new Ze({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),hr=new se({props:{name:"call",anchor:"transformers.TFRemBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFRemBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFRemBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFRemBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L942",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new Ze({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Fn=new Ie({props:{anchor:"transformers.TFRemBertModel.call.example",$$slots:{default:[MT]},$$scope:{ctx:M}}}),ur=new tt({}),fr=new se({props:{name:"class transformers.TFRemBertForMaskedLM",anchor:"transformers.TFRemBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1029"}}),En=new Ze({props:{$$slots:{default:[zT]},$$scope:{ctx:M}}}),vr=new se({props:{name:"call",anchor:"transformers.TFRemBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1045",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bn=new Ze({props:{$$slots:{default:[CT]},$$scope:{ctx:M}}}),Mn=new Ie({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example",$$slots:{default:[qT]},$$scope:{ctx:M}}}),zn=new Ie({props:{anchor:"transformers.TFRemBertForMaskedLM.call.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),yr=new tt({}),Tr=new se({props:{name:"class transformers.TFRemBertForCausalLM",anchor:"transformers.TFRemBertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1110"}}),qn=new Ze({props:{$$slots:{default:[jT]},$$scope:{ctx:M}}}),Er=new se({props:{name:"call",anchor:"transformers.TFRemBertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xn=new Ie({props:{anchor:"transformers.TFRemBertForCausalLM.call.example",$$slots:{default:[PT]},$$scope:{ctx:M}}}),Cr=new tt({}),qr=new se({props:{name:"class transformers.TFRemBertForSequenceClassification",anchor:"transformers.TFRemBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1252"}}),Pn=new Ze({props:{$$slots:{default:[LT]},$$scope:{ctx:M}}}),Lr=new se({props:{name:"call",anchor:"transformers.TFRemBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1266",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new Ze({props:{$$slots:{default:[OT]},$$scope:{ctx:M}}}),On=new Ie({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example",$$slots:{default:[DT]},$$scope:{ctx:M}}}),Dn=new Ie({props:{anchor:"transformers.TFRemBertForSequenceClassification.call.example-2",$$slots:{default:[AT]},$$scope:{ctx:M}}}),Or=new tt({}),Dr=new se({props:{name:"class transformers.TFRemBertForMultipleChoice",anchor:"transformers.TFRemBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1336"}}),Nn=new Ze({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),Sr=new se({props:{name:"call",anchor:"transformers.TFRemBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),In=new Ze({props:{$$slots:{default:[IT]},$$scope:{ctx:M}}}),Sn=new Ie({props:{anchor:"transformers.TFRemBertForMultipleChoice.call.example",$$slots:{default:[ST]},$$scope:{ctx:M}}}),Wr=new tt({}),Ur=new se({props:{name:"class transformers.TFRemBertForTokenClassification",anchor:"transformers.TFRemBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1463"}}),Un=new Ze({props:{$$slots:{default:[WT]},$$scope:{ctx:M}}}),Vr=new se({props:{name:"call",anchor:"transformers.TFRemBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1475",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kn=new Ze({props:{$$slots:{default:[UT]},$$scope:{ctx:M}}}),Hn=new Ie({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example",$$slots:{default:[KT]},$$scope:{ctx:M}}}),Qn=new Ie({props:{anchor:"transformers.TFRemBertForTokenClassification.call.example-2",$$slots:{default:[HT]},$$scope:{ctx:M}}}),Jr=new tt({}),Gr=new se({props:{name:"class transformers.TFRemBertForQuestionAnswering",anchor:"transformers.TFRemBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig">RemBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1543"}}),Jn=new Ze({props:{$$slots:{default:[QT]},$$scope:{ctx:M}}}),ea=new se({props:{name:"call",anchor:"transformers.TFRemBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFRemBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.2/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFRemBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.2/src/transformers/models/rembert/modeling_tf_rembert.py#L1554",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertConfig"
>RemBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.22.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gn=new Ze({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),Xn=new Ie({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example",$$slots:{default:[JT]},$$scope:{ctx:M}}}),Yn=new Ie({props:{anchor:"transformers.TFRemBertForQuestionAnswering.call.example-2",$$slots:{default:[GT]},$$scope:{ctx:M}}}),{c(){d=r("meta"),g=m(),c=r("h1"),u=r("a"),v=r("span"),y(l.$$.fragment),p=m(),C=r("span"),Te=o("RemBERT"),fe=m(),N=r("h2"),le=r("a"),te=r("span"),y(E.$$.fragment),we=m(),V=r("span"),$e=o("Overview"),ge=m(),S=r("p"),Fe=o("The RemBERT model was proposed in "),ce=r("a"),G=o("Rethinking Embedding Coupling in Pre-trained Language Models"),Re=o(" by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),_e=m(),U=r("p"),Ee=o("The abstract from the paper is the following:"),ke=m(),K=r("p"),he=r("em"),Be=o(`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),ne=m(),q=r("p"),P=o("Tips:"),be=m(),H=r("p"),Me=o(`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),ve=m(),I=r("h2"),de=r("a"),ue=r("span"),y(x.$$.fragment),ze=m(),J=r("span"),Ce=o("RemBertConfig"),ye=m(),D=r("div"),y(pe.$$.fragment),qe=m(),O=r("p"),xe=o("This is the configuration class to store the configuration of a "),Q=r("a"),je=o("RemBertModel"),re=o(`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),j=r("a"),Pe=o("google/rembert"),L=o(" architecture."),Le=m(),ie=r("p"),f=o("Configuration objects inherit from "),B=r("a"),Qe=o("PretrainedConfig"),ae=o(` and can be used to control the model outputs. Read the
documentation from `),Ne=r("a"),Ve=o("PretrainedConfig"),z=o(" for more information."),Je=m(),y(De.$$.fragment),Ke=m(),Oe=r("h2"),Ae=r("a"),A=r("span"),y(W.$$.fragment),Ge=m(),Ue=r("span"),X=o("RemBertTokenizer"),He=m(),oe=r("div"),y(me.$$.fragment),Xe=m(),Z=r("p"),Ye=o("Construct a RemBERT tokenizer. Based on "),cs=r("a"),op=o("SentencePiece"),np=o("."),sp=m(),ps=r("p"),rp=o("This tokenizer inherits from "),pa=r("a"),ap=o("PreTrainedTokenizer"),ip=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),lp=m(),Jt=r("div"),y(ms.$$.fragment),dp=m(),li=r("p"),cp=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),pp=m(),hs=r("ul"),ma=r("li"),mp=o("single sequence: "),di=r("code"),hp=o("[CLS] X [SEP]"),up=m(),ha=r("li"),fp=o("pair of sequences: "),ci=r("code"),gp=o("[CLS] A [SEP] B [SEP]"),_p=m(),Wo=r("div"),y(us.$$.fragment),kp=m(),fs=r("p"),bp=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pi=r("code"),vp=o("prepare_for_model"),yp=o(" method."),Tp=m(),Mt=r("div"),y(gs.$$.fragment),wp=m(),mi=r("p"),$p=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Fp=m(),y(Uo.$$.fragment),Rp=m(),ao=r("p"),Ep=o("If "),hi=r("code"),Bp=o("token_ids_1"),Mp=o(" is "),ui=r("code"),zp=o("None"),Cp=o(", this method only returns the first portion of the mask (0s)."),qp=m(),ua=r("div"),y(_s.$$.fragment),Ld=m(),io=r("h2"),Ko=r("a"),fi=r("span"),y(ks.$$.fragment),xp=m(),gi=r("span"),jp=o("RemBertTokenizerFast"),Od=m(),nt=r("div"),y(bs.$$.fragment),Pp=m(),Ut=r("p"),Lp=o("Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),_i=r("em"),Op=o("tokenizers"),Dp=o(` library). Based on
`),vs=r("a"),Ap=o("Unigram"),Np=o(`. This
tokenizer inherits from `),fa=r("a"),Ip=o("PreTrainedTokenizerFast"),Sp=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Wp=m(),Gt=r("div"),y(ys.$$.fragment),Up=m(),ki=r("p"),Kp=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),Hp=m(),Ts=r("ul"),ga=r("li"),Qp=o("single sequence: "),bi=r("code"),Vp=o("[CLS] X [SEP]"),Jp=m(),_a=r("li"),Gp=o("pair of sequences: "),vi=r("code"),Xp=o("[CLS] A [SEP] B [SEP]"),Yp=m(),Ho=r("div"),y(ws.$$.fragment),Zp=m(),$s=r("p"),em=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yi=r("code"),tm=o("prepare_for_model"),om=o(" method."),nm=m(),zt=r("div"),y(Fs.$$.fragment),sm=m(),Ti=r("p"),rm=o("Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),am=m(),y(Qo.$$.fragment),im=m(),wi=r("p"),lm=o("if token_ids_1 is None, only returns the first portion of the mask (0s)."),dm=m(),ka=r("div"),y(Rs.$$.fragment),Dd=m(),lo=r("h2"),Vo=r("a"),$i=r("span"),y(Es.$$.fragment),cm=m(),Fi=r("span"),pm=o("RemBertModel"),Ad=m(),ut=r("div"),y(Bs.$$.fragment),mm=m(),Ms=r("p"),hm=o(`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),zs=r("a"),um=o("torch.nn.Module"),fm=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gm=m(),Cs=r("p"),_m=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),qs=r("a"),km=o(`Attention is
all you need`),bm=o(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vm=m(),st=r("p"),ym=o("To behave as an decoder the model needs to be initialized with the "),Ri=r("code"),Tm=o("is_decoder"),wm=o(` argument of the configuration set
to `),Ei=r("code"),$m=o("True"),Fm=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Bi=r("code"),Rm=o("is_decoder"),Em=o(` argument and
`),Mi=r("code"),Bm=o("add_cross_attention"),Mm=o(" set to "),zi=r("code"),zm=o("True"),Cm=o("; an "),Ci=r("code"),qm=o("encoder_hidden_states"),xm=o(" is then expected as an input to the forward pass."),jm=m(),Ct=r("div"),y(xs.$$.fragment),Pm=m(),co=r("p"),Lm=o("The "),ba=r("a"),Om=o("RemBertModel"),Dm=o(" forward method, overrides the "),qi=r("code"),Am=o("__call__"),Nm=o(" special method."),Im=m(),y(Jo.$$.fragment),Sm=m(),y(Go.$$.fragment),Nd=m(),po=r("h2"),Xo=r("a"),xi=r("span"),y(js.$$.fragment),Wm=m(),ji=r("span"),Um=o("RemBertForCausalLM"),Id=m(),Kt=r("div"),y(Ps.$$.fragment),Km=m(),mo=r("p"),Hm=o("RemBERT Model with a "),Pi=r("code"),Qm=o("language modeling"),Vm=o(` head on top for CLM fine-tuning.
This model is a PyTorch `),Ls=r("a"),Jm=o("torch.nn.Module"),Gm=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xm=m(),qt=r("div"),y(Os.$$.fragment),Ym=m(),ho=r("p"),Zm=o("The "),va=r("a"),eh=o("RemBertForCausalLM"),th=o(" forward method, overrides the "),Li=r("code"),oh=o("__call__"),nh=o(" special method."),sh=m(),y(Yo.$$.fragment),rh=m(),y(Zo.$$.fragment),Sd=m(),uo=r("h2"),en=r("a"),Oi=r("span"),y(Ds.$$.fragment),ah=m(),Di=r("span"),ih=o("RemBertForMaskedLM"),Wd=m(),Ht=r("div"),y(As.$$.fragment),lh=m(),fo=r("p"),dh=o("RemBERT Model with a "),Ai=r("code"),ch=o("language modeling"),ph=o(` head on top.
This model is a PyTorch `),Ns=r("a"),mh=o("torch.nn.Module"),hh=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uh=m(),ft=r("div"),y(Is.$$.fragment),fh=m(),go=r("p"),gh=o("The "),ya=r("a"),_h=o("RemBertForMaskedLM"),kh=o(" forward method, overrides the "),Ni=r("code"),bh=o("__call__"),vh=o(" special method."),yh=m(),y(tn.$$.fragment),Th=m(),y(on.$$.fragment),wh=m(),y(nn.$$.fragment),Ud=m(),_o=r("h2"),sn=r("a"),Ii=r("span"),y(Ss.$$.fragment),$h=m(),Si=r("span"),Fh=o("RemBertForSequenceClassification"),Kd=m(),Ft=r("div"),y(Ws.$$.fragment),Rh=m(),Wi=r("p"),Eh=o(`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bh=m(),Us=r("p"),Mh=o("This model is a PyTorch "),Ks=r("a"),zh=o("torch.nn.Module"),Ch=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qh=m(),ot=r("div"),y(Hs.$$.fragment),xh=m(),ko=r("p"),jh=o("The "),Ta=r("a"),Ph=o("RemBertForSequenceClassification"),Lh=o(" forward method, overrides the "),Ui=r("code"),Oh=o("__call__"),Dh=o(" special method."),Ah=m(),y(rn.$$.fragment),Nh=m(),y(an.$$.fragment),Ih=m(),y(ln.$$.fragment),Sh=m(),y(dn.$$.fragment),Wh=m(),y(cn.$$.fragment),Hd=m(),bo=r("h2"),pn=r("a"),Ki=r("span"),y(Qs.$$.fragment),Uh=m(),Hi=r("span"),Kh=o("RemBertForMultipleChoice"),Qd=m(),Rt=r("div"),y(Vs.$$.fragment),Hh=m(),Qi=r("p"),Qh=o(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Vh=m(),Js=r("p"),Jh=o("This model is a PyTorch "),Gs=r("a"),Gh=o("torch.nn.Module"),Xh=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yh=m(),xt=r("div"),y(Xs.$$.fragment),Zh=m(),vo=r("p"),eu=o("The "),wa=r("a"),tu=o("RemBertForMultipleChoice"),ou=o(" forward method, overrides the "),Vi=r("code"),nu=o("__call__"),su=o(" special method."),ru=m(),y(mn.$$.fragment),au=m(),y(hn.$$.fragment),Vd=m(),yo=r("h2"),un=r("a"),Ji=r("span"),y(Ys.$$.fragment),iu=m(),Gi=r("span"),lu=o("RemBertForTokenClassification"),Jd=m(),Et=r("div"),y(Zs.$$.fragment),du=m(),Xi=r("p"),cu=o(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pu=m(),er=r("p"),mu=o("This model is a PyTorch "),tr=r("a"),hu=o("torch.nn.Module"),uu=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fu=m(),gt=r("div"),y(or.$$.fragment),gu=m(),To=r("p"),_u=o("The "),$a=r("a"),ku=o("RemBertForTokenClassification"),bu=o(" forward method, overrides the "),Yi=r("code"),vu=o("__call__"),yu=o(" special method."),Tu=m(),y(fn.$$.fragment),wu=m(),y(gn.$$.fragment),$u=m(),y(_n.$$.fragment),Gd=m(),wo=r("h2"),kn=r("a"),Zi=r("span"),y(nr.$$.fragment),Fu=m(),el=r("span"),Ru=o("RemBertForQuestionAnswering"),Xd=m(),Bt=r("div"),y(sr.$$.fragment),Eu=m(),$o=r("p"),Bu=o(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),tl=r("code"),Mu=o("span start logits"),zu=o(" and "),ol=r("code"),Cu=o("span end logits"),qu=o(")."),xu=m(),rr=r("p"),ju=o("This model is a PyTorch "),ar=r("a"),Pu=o("torch.nn.Module"),Lu=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ou=m(),_t=r("div"),y(ir.$$.fragment),Du=m(),Fo=r("p"),Au=o("The "),Fa=r("a"),Nu=o("RemBertForQuestionAnswering"),Iu=o(" forward method, overrides the "),nl=r("code"),Su=o("__call__"),Wu=o(" special method."),Uu=m(),y(bn.$$.fragment),Ku=m(),y(vn.$$.fragment),Hu=m(),y(yn.$$.fragment),Yd=m(),Ro=r("h2"),Tn=r("a"),sl=r("span"),y(lr.$$.fragment),Qu=m(),rl=r("span"),Vu=o("TFRemBertModel"),Zd=m(),rt=r("div"),y(dr.$$.fragment),Ju=m(),al=r("p"),Gu=o("The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),Xu=m(),cr=r("p"),Yu=o("This model inherits from "),Ra=r("a"),Zu=o("TFPreTrainedModel"),ef=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=m(),pr=r("p"),of=o("This model is also a "),mr=r("a"),nf=o("tf.keras.Model"),sf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf=m(),y(wn.$$.fragment),af=m(),jt=r("div"),y(hr.$$.fragment),lf=m(),Eo=r("p"),df=o("The "),Ea=r("a"),cf=o("TFRemBertModel"),pf=o(" forward method, overrides the "),il=r("code"),mf=o("__call__"),hf=o(" special method."),uf=m(),y($n.$$.fragment),ff=m(),y(Fn.$$.fragment),ec=m(),Bo=r("h2"),Rn=r("a"),ll=r("span"),y(ur.$$.fragment),gf=m(),dl=r("span"),_f=o("TFRemBertForMaskedLM"),tc=m(),at=r("div"),y(fr.$$.fragment),kf=m(),gr=r("p"),bf=o("RemBERT Model with a "),cl=r("code"),vf=o("language modeling"),yf=o(" head on top."),Tf=m(),_r=r("p"),wf=o("This model inherits from "),Ba=r("a"),$f=o("TFPreTrainedModel"),Ff=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rf=m(),kr=r("p"),Ef=o("This model is also a "),br=r("a"),Bf=o("tf.keras.Model"),Mf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zf=m(),y(En.$$.fragment),Cf=m(),kt=r("div"),y(vr.$$.fragment),qf=m(),Mo=r("p"),xf=o("The "),Ma=r("a"),jf=o("TFRemBertForMaskedLM"),Pf=o(" forward method, overrides the "),pl=r("code"),Lf=o("__call__"),Of=o(" special method."),Df=m(),y(Bn.$$.fragment),Af=m(),y(Mn.$$.fragment),Nf=m(),y(zn.$$.fragment),oc=m(),zo=r("h2"),Cn=r("a"),ml=r("span"),y(yr.$$.fragment),If=m(),hl=r("span"),Sf=o("TFRemBertForCausalLM"),nc=m(),it=r("div"),y(Tr.$$.fragment),Wf=m(),wr=r("p"),Uf=o("RemBERT Model with a "),ul=r("code"),Kf=o("language modeling"),Hf=o(" head on top for CLM fine-tuning."),Qf=m(),$r=r("p"),Vf=o("This model inherits from "),za=r("a"),Jf=o("TFPreTrainedModel"),Gf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=m(),Fr=r("p"),Yf=o("This model is also a "),Rr=r("a"),Zf=o("tf.keras.Model"),eg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg=m(),y(qn.$$.fragment),og=m(),bt=r("div"),y(Er.$$.fragment),ng=m(),et=r("p"),sg=o("encoder_hidden_states  ("),fl=r("code"),rg=o("tf.Tensor"),ag=o(" of shape "),gl=r("code"),ig=o("(batch_size, sequence_length, hidden_size)"),lg=o(", "),_l=r("em"),dg=o("optional"),cg=o(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),kl=r("code"),pg=o("tf.Tensor"),mg=o(" of shape "),bl=r("code"),hg=o("(batch_size, sequence_length)"),ug=o(", "),vl=r("em"),fg=o("optional"),gg=o(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),yl=r("code"),_g=o("[0, 1]"),kg=o(":"),bg=m(),Br=r("ul"),Mr=r("li"),vg=o("1 for tokens that are "),Tl=r("strong"),yg=o("not masked"),Tg=o(","),wg=m(),zr=r("li"),$g=o("0 for tokens that are "),wl=r("strong"),Fg=o("masked"),Rg=o("."),Eg=m(),Y=r("p"),Bg=o("past_key_values ("),$l=r("code"),Mg=o("Tuple[Tuple[tf.Tensor]]"),zg=o(" of length "),Fl=r("code"),Cg=o("config.n_layers"),qg=o(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Rl=r("code"),xg=o("past_key_values"),jg=o(" are used, the user can optionally input only the last "),El=r("code"),Pg=o("decoder_input_ids"),Lg=o(` (those that
don\u2019t have their past key value states given to this model) of shape `),Bl=r("code"),Og=o("(batch_size, 1)"),Dg=o(` instead of all
`),Ml=r("code"),Ag=o("decoder_input_ids"),Ng=o(" of shape "),zl=r("code"),Ig=o("(batch_size, sequence_length)"),Sg=o(`.
use_cache (`),Cl=r("code"),Wg=o("bool"),Ug=o(", "),ql=r("em"),Kg=o("optional"),Hg=o(", defaults to "),xl=r("code"),Qg=o("True"),Vg=o(`):
If set to `),jl=r("code"),Jg=o("True"),Gg=o(", "),Pl=r("code"),Xg=o("past_key_values"),Yg=o(` key value states are returned and can be used to speed up decoding (see
`),Ll=r("code"),Zg=o("past_key_values"),e_=o("). Set to "),Ol=r("code"),t_=o("False"),o_=o(" during training, "),Dl=r("code"),n_=o("True"),s_=o(` during generation
labels (`),Al=r("code"),r_=o("tf.Tensor"),a_=o(" or "),Nl=r("code"),i_=o("np.ndarray"),l_=o(" of shape "),Il=r("code"),d_=o("(batch_size, sequence_length)"),c_=o(", "),Sl=r("em"),p_=o("optional"),m_=o(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Wl=r("code"),h_=o("[0, ..., config.vocab_size - 1]"),u_=o("."),f_=m(),y(xn.$$.fragment),sc=m(),Co=r("h2"),jn=r("a"),Ul=r("span"),y(Cr.$$.fragment),g_=m(),Kl=r("span"),__=o("TFRemBertForSequenceClassification"),rc=m(),lt=r("div"),y(qr.$$.fragment),k_=m(),Hl=r("p"),b_=o("RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),v_=m(),xr=r("p"),y_=o("This model inherits from "),Ca=r("a"),T_=o("TFPreTrainedModel"),w_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=m(),jr=r("p"),F_=o("This model is also a "),Pr=r("a"),R_=o("tf.keras.Model"),E_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),B_=m(),y(Pn.$$.fragment),M_=m(),vt=r("div"),y(Lr.$$.fragment),z_=m(),qo=r("p"),C_=o("The "),qa=r("a"),q_=o("TFRemBertForSequenceClassification"),x_=o(" forward method, overrides the "),Ql=r("code"),j_=o("__call__"),P_=o(" special method."),L_=m(),y(Ln.$$.fragment),O_=m(),y(On.$$.fragment),D_=m(),y(Dn.$$.fragment),ac=m(),xo=r("h2"),An=r("a"),Vl=r("span"),y(Or.$$.fragment),A_=m(),Jl=r("span"),N_=o("TFRemBertForMultipleChoice"),ic=m(),dt=r("div"),y(Dr.$$.fragment),I_=m(),Gl=r("p"),S_=o(`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),W_=m(),Ar=r("p"),U_=o("This model inherits from "),xa=r("a"),K_=o("TFPreTrainedModel"),H_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q_=m(),Nr=r("p"),V_=o("This model is also a "),Ir=r("a"),J_=o("tf.keras.Model"),G_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=m(),y(Nn.$$.fragment),Y_=m(),Pt=r("div"),y(Sr.$$.fragment),Z_=m(),jo=r("p"),ek=o("The "),ja=r("a"),tk=o("TFRemBertForMultipleChoice"),ok=o(" forward method, overrides the "),Xl=r("code"),nk=o("__call__"),sk=o(" special method."),rk=m(),y(In.$$.fragment),ak=m(),y(Sn.$$.fragment),lc=m(),Po=r("h2"),Wn=r("a"),Yl=r("span"),y(Wr.$$.fragment),ik=m(),Zl=r("span"),lk=o("TFRemBertForTokenClassification"),dc=m(),ct=r("div"),y(Ur.$$.fragment),dk=m(),ed=r("p"),ck=o(`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pk=m(),Kr=r("p"),mk=o("This model inherits from "),Pa=r("a"),hk=o("TFPreTrainedModel"),uk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fk=m(),Hr=r("p"),gk=o("This model is also a "),Qr=r("a"),_k=o("tf.keras.Model"),kk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bk=m(),y(Un.$$.fragment),vk=m(),yt=r("div"),y(Vr.$$.fragment),yk=m(),Lo=r("p"),Tk=o("The "),La=r("a"),wk=o("TFRemBertForTokenClassification"),$k=o(" forward method, overrides the "),td=r("code"),Fk=o("__call__"),Rk=o(" special method."),Ek=m(),y(Kn.$$.fragment),Bk=m(),y(Hn.$$.fragment),Mk=m(),y(Qn.$$.fragment),cc=m(),Oo=r("h2"),Vn=r("a"),od=r("span"),y(Jr.$$.fragment),zk=m(),nd=r("span"),Ck=o("TFRemBertForQuestionAnswering"),pc=m(),pt=r("div"),y(Gr.$$.fragment),qk=m(),Do=r("p"),xk=o(`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),sd=r("code"),jk=o("span start logits"),Pk=o(" and "),rd=r("code"),Lk=o("span end logits"),Ok=o(")."),Dk=m(),Xr=r("p"),Ak=o("This model inherits from "),Oa=r("a"),Nk=o("TFPreTrainedModel"),Ik=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sk=m(),Yr=r("p"),Wk=o("This model is also a "),Zr=r("a"),Uk=o("tf.keras.Model"),Kk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hk=m(),y(Jn.$$.fragment),Qk=m(),Tt=r("div"),y(ea.$$.fragment),Vk=m(),Ao=r("p"),Jk=o("The "),Da=r("a"),Gk=o("TFRemBertForQuestionAnswering"),Xk=o(" forward method, overrides the "),ad=r("code"),Yk=o("__call__"),Zk=o(" special method."),eb=m(),y(Gn.$$.fragment),tb=m(),y(Xn.$$.fragment),ob=m(),y(Yn.$$.fragment),this.h()},l(s){const b=oT('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(s),c=a(s,"H1",{class:!0});var ta=i(c);u=a(ta,"A",{id:!0,class:!0,href:!0});var id=i(u);v=a(id,"SPAN",{});var ld=i(v);T(l.$$.fragment,ld),ld.forEach(t),id.forEach(t),p=h(ta),C=a(ta,"SPAN",{});var dd=i(C);Te=n(dd,"RemBERT"),dd.forEach(t),ta.forEach(t),fe=h(s),N=a(s,"H2",{class:!0});var oa=i(N);le=a(oa,"A",{id:!0,class:!0,href:!0});var cd=i(le);te=a(cd,"SPAN",{});var pd=i(te);T(E.$$.fragment,pd),pd.forEach(t),cd.forEach(t),we=h(oa),V=a(oa,"SPAN",{});var md=i(V);$e=n(md,"Overview"),md.forEach(t),oa.forEach(t),ge=h(s),S=a(s,"P",{});var na=i(S);Fe=n(na,"The RemBERT model was proposed in "),ce=a(na,"A",{href:!0,rel:!0});var hd=i(ce);G=n(hd,"Rethinking Embedding Coupling in Pre-trained Language Models"),hd.forEach(t),Re=n(na," by Hyung Won Chung, Thibault F\xE9vry, Henry Tsai, Melvin Johnson, Sebastian Ruder."),na.forEach(t),_e=h(s),U=a(s,"P",{});var ud=i(U);Ee=n(ud,"The abstract from the paper is the following:"),ud.forEach(t),ke=h(s),K=a(s,"P",{});var fd=i(K);he=a(fd,"EM",{});var gd=i(he);Be=n(gd,`We re-evaluate the standard practice of sharing weights between input and output embeddings in state-of-the-art
pre-trained language models. We show that decoupled embeddings provide increased modeling flexibility, allowing us to
significantly improve the efficiency of parameter allocation in the input embedding of multilingual models. By
reallocating the input embedding parameters in the Transformer layers, we achieve dramatically better performance on
standard natural language understanding tasks with the same number of parameters during fine-tuning. We also show that
allocating additional capacity to the output embedding provides benefits to the model that persist through the
fine-tuning stage even though the output embedding is discarded after pre-training. Our analysis shows that larger
output embeddings prevent the model\u2019s last layers from overspecializing to the pre-training task and encourage
Transformer representations to be more general and more transferable to other tasks and languages. Harnessing these
findings, we are able to train models that achieve strong performance on the XTREME benchmark without increasing the
number of parameters at the fine-tuning stage.`),gd.forEach(t),fd.forEach(t),ne=h(s),q=a(s,"P",{});var _d=i(q);P=n(_d,"Tips:"),_d.forEach(t),be=h(s),H=a(s,"P",{});var kd=i(H);Me=n(kd,`For fine-tuning, RemBERT can be thought of as a bigger version of mBERT with an ALBERT-like factorization of the
embedding layer. The embeddings are not tied in pre-training, in contrast with BERT, which enables smaller input
embeddings (preserved during fine-tuning) and bigger output embeddings (discarded at fine-tuning). The tokenizer is
also similar to the Albert one rather than the BERT one.`),kd.forEach(t),ve=h(s),I=a(s,"H2",{class:!0});var sa=i(I);de=a(sa,"A",{id:!0,class:!0,href:!0});var bd=i(de);ue=a(bd,"SPAN",{});var vd=i(ue);T(x.$$.fragment,vd),vd.forEach(t),bd.forEach(t),ze=h(sa),J=a(sa,"SPAN",{});var yd=i(J);Ce=n(yd,"RemBertConfig"),yd.forEach(t),sa.forEach(t),ye=h(s),D=a(s,"DIV",{class:!0});var Qt=i(D);T(pe.$$.fragment,Qt),qe=h(Qt),O=a(Qt,"P",{});var No=i(O);xe=n(No,"This is the configuration class to store the configuration of a "),Q=a(No,"A",{href:!0});var Td=i(Q);je=n(Td,"RemBertModel"),Td.forEach(t),re=n(No,`. It is used to instantiate an
RemBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the RemBERT
`),j=a(No,"A",{href:!0,rel:!0});var wd=i(j);Pe=n(wd,"google/rembert"),wd.forEach(t),L=n(No," architecture."),No.forEach(t),Le=h(Qt),ie=a(Qt,"P",{});var Io=i(ie);f=n(Io,"Configuration objects inherit from "),B=a(Io,"A",{href:!0});var $d=i(B);Qe=n($d,"PretrainedConfig"),$d.forEach(t),ae=n(Io,` and can be used to control the model outputs. Read the
documentation from `),Ne=a(Io,"A",{href:!0});var Fd=i(Ne);Ve=n(Fd,"PretrainedConfig"),Fd.forEach(t),z=n(Io," for more information."),Io.forEach(t),Je=h(Qt),T(De.$$.fragment,Qt),Qt.forEach(t),Ke=h(s),Oe=a(s,"H2",{class:!0});var ra=i(Oe);Ae=a(ra,"A",{id:!0,class:!0,href:!0});var Rd=i(Ae);A=a(Rd,"SPAN",{});var Ed=i(A);T(W.$$.fragment,Ed),Ed.forEach(t),Rd.forEach(t),Ge=h(ra),Ue=a(ra,"SPAN",{});var Bd=i(Ue);X=n(Bd,"RemBertTokenizer"),Bd.forEach(t),ra.forEach(t),He=h(s),oe=a(s,"DIV",{class:!0});var mt=i(oe);T(me.$$.fragment,mt),Xe=h(mt),Z=a(mt,"P",{});var aa=i(Z);Ye=n(aa,"Construct a RemBERT tokenizer. Based on "),cs=a(aa,"A",{href:!0,rel:!0});var Md=i(cs);op=n(Md,"SentencePiece"),Md.forEach(t),np=n(aa,"."),aa.forEach(t),sp=h(mt),ps=a(mt,"P",{});var ia=i(ps);rp=n(ia,"This tokenizer inherits from "),pa=a(ia,"A",{href:!0});var zd=i(pa);ap=n(zd,"PreTrainedTokenizer"),zd.forEach(t),ip=n(ia,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ia.forEach(t),lp=h(mt),Jt=a(mt,"DIV",{class:!0});var So=i(Jt);T(ms.$$.fragment,So),dp=h(So),li=a(So,"P",{});var Cd=i(li);cp=n(Cd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A REMBERT sequence has the following format:`),Cd.forEach(t),pp=h(So),hs=a(So,"UL",{});var la=i(hs);ma=a(la,"LI",{});var Aa=i(ma);mp=n(Aa,"single sequence: "),di=a(Aa,"CODE",{});var qd=i(di);hp=n(qd,"[CLS] X [SEP]"),qd.forEach(t),Aa.forEach(t),up=h(la),ha=a(la,"LI",{});var Na=i(ha);fp=n(Na,"pair of sequences: "),ci=a(Na,"CODE",{});var xd=i(ci);gp=n(xd,"[CLS] A [SEP] B [SEP]"),xd.forEach(t),Na.forEach(t),la.forEach(t),So.forEach(t),_p=h(mt),Wo=a(mt,"DIV",{class:!0});var da=i(Wo);T(us.$$.fragment,da),kp=h(da),fs=a(da,"P",{});var ca=i(fs);bp=n(ca,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),pi=a(ca,"CODE",{});var jd=i(pi);vp=n(jd,"prepare_for_model"),jd.forEach(t),yp=n(ca," method."),ca.forEach(t),da.forEach(t),Tp=h(mt),Mt=a(mt,"DIV",{class:!0});var Vt=i(Mt);T(gs.$$.fragment,Vt),wp=h(Vt),mi=a(Vt,"P",{});var Pd=i(mi);$p=n(Pd,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),Pd.forEach(t),Fp=h(Vt),T(Uo.$$.fragment,Vt),Rp=h(Vt),ao=a(Vt,"P",{});var Ia=i(ao);Ep=n(Ia,"If "),hi=a(Ia,"CODE",{});var rb=i(hi);Bp=n(rb,"token_ids_1"),rb.forEach(t),Mp=n(Ia," is "),ui=a(Ia,"CODE",{});var ab=i(ui);zp=n(ab,"None"),ab.forEach(t),Cp=n(Ia,", this method only returns the first portion of the mask (0s)."),Ia.forEach(t),Vt.forEach(t),qp=h(mt),ua=a(mt,"DIV",{class:!0});var ib=i(ua);T(_s.$$.fragment,ib),ib.forEach(t),mt.forEach(t),Ld=h(s),io=a(s,"H2",{class:!0});var hc=i(io);Ko=a(hc,"A",{id:!0,class:!0,href:!0});var lb=i(Ko);fi=a(lb,"SPAN",{});var db=i(fi);T(ks.$$.fragment,db),db.forEach(t),lb.forEach(t),xp=h(hc),gi=a(hc,"SPAN",{});var cb=i(gi);jp=n(cb,"RemBertTokenizerFast"),cb.forEach(t),hc.forEach(t),Od=h(s),nt=a(s,"DIV",{class:!0});var Lt=i(nt);T(bs.$$.fragment,Lt),Pp=h(Lt),Ut=a(Lt,"P",{});var Zn=i(Ut);Lp=n(Zn,"Construct a \u201Cfast\u201D RemBert tokenizer (backed by HuggingFace\u2019s "),_i=a(Zn,"EM",{});var pb=i(_i);Op=n(pb,"tokenizers"),pb.forEach(t),Dp=n(Zn,` library). Based on
`),vs=a(Zn,"A",{href:!0,rel:!0});var mb=i(vs);Ap=n(mb,"Unigram"),mb.forEach(t),Np=n(Zn,`. This
tokenizer inherits from `),fa=a(Zn,"A",{href:!0});var hb=i(fa);Ip=n(hb,"PreTrainedTokenizerFast"),hb.forEach(t),Sp=n(Zn,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods`),Zn.forEach(t),Wp=h(Lt),Gt=a(Lt,"DIV",{class:!0});var Sa=i(Gt);T(ys.$$.fragment,Sa),Up=h(Sa),ki=a(Sa,"P",{});var ub=i(ki);Kp=n(ub,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A RemBERT sequence has the following format:`),ub.forEach(t),Hp=h(Sa),Ts=a(Sa,"UL",{});var uc=i(Ts);ga=a(uc,"LI",{});var nb=i(ga);Qp=n(nb,"single sequence: "),bi=a(nb,"CODE",{});var fb=i(bi);Vp=n(fb,"[CLS] X [SEP]"),fb.forEach(t),nb.forEach(t),Jp=h(uc),_a=a(uc,"LI",{});var sb=i(_a);Gp=n(sb,"pair of sequences: "),vi=a(sb,"CODE",{});var gb=i(vi);Xp=n(gb,"[CLS] A [SEP] B [SEP]"),gb.forEach(t),sb.forEach(t),uc.forEach(t),Sa.forEach(t),Yp=h(Lt),Ho=a(Lt,"DIV",{class:!0});var fc=i(Ho);T(ws.$$.fragment,fc),Zp=h(fc),$s=a(fc,"P",{});var gc=i($s);em=n(gc,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),yi=a(gc,"CODE",{});var _b=i(yi);tm=n(_b,"prepare_for_model"),_b.forEach(t),om=n(gc," method."),gc.forEach(t),fc.forEach(t),nm=h(Lt),zt=a(Lt,"DIV",{class:!0});var es=i(zt);T(Fs.$$.fragment,es),sm=h(es),Ti=a(es,"P",{});var kb=i(Ti);rm=n(kb,"Creates a mask from the two sequences passed to be used in a sequence-pair classification task. A RemBERT"),kb.forEach(t),am=h(es),T(Qo.$$.fragment,es),im=h(es),wi=a(es,"P",{});var bb=i(wi);lm=n(bb,"if token_ids_1 is None, only returns the first portion of the mask (0s)."),bb.forEach(t),es.forEach(t),dm=h(Lt),ka=a(Lt,"DIV",{class:!0});var vb=i(ka);T(Rs.$$.fragment,vb),vb.forEach(t),Lt.forEach(t),Dd=h(s),lo=a(s,"H2",{class:!0});var _c=i(lo);Vo=a(_c,"A",{id:!0,class:!0,href:!0});var yb=i(Vo);$i=a(yb,"SPAN",{});var Tb=i($i);T(Es.$$.fragment,Tb),Tb.forEach(t),yb.forEach(t),cm=h(_c),Fi=a(_c,"SPAN",{});var wb=i(Fi);pm=n(wb,"RemBertModel"),wb.forEach(t),_c.forEach(t),Ad=h(s),ut=a(s,"DIV",{class:!0});var Xt=i(ut);T(Bs.$$.fragment,Xt),mm=h(Xt),Ms=a(Xt,"P",{});var kc=i(Ms);hm=n(kc,`The bare RemBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),zs=a(kc,"A",{href:!0,rel:!0});var $b=i(zs);um=n($b,"torch.nn.Module"),$b.forEach(t),fm=n(kc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),kc.forEach(t),gm=h(Xt),Cs=a(Xt,"P",{});var bc=i(Cs);_m=n(bc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),qs=a(bc,"A",{href:!0,rel:!0});var Fb=i(qs);km=n(Fb,`Attention is
all you need`),Fb.forEach(t),bm=n(bc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),bc.forEach(t),vm=h(Xt),st=a(Xt,"P",{});var wt=i(st);ym=n(wt,"To behave as an decoder the model needs to be initialized with the "),Ri=a(wt,"CODE",{});var Rb=i(Ri);Tm=n(Rb,"is_decoder"),Rb.forEach(t),wm=n(wt,` argument of the configuration set
to `),Ei=a(wt,"CODE",{});var Eb=i(Ei);$m=n(Eb,"True"),Eb.forEach(t),Fm=n(wt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Bi=a(wt,"CODE",{});var Bb=i(Bi);Rm=n(Bb,"is_decoder"),Bb.forEach(t),Em=n(wt,` argument and
`),Mi=a(wt,"CODE",{});var Mb=i(Mi);Bm=n(Mb,"add_cross_attention"),Mb.forEach(t),Mm=n(wt," set to "),zi=a(wt,"CODE",{});var zb=i(zi);zm=n(zb,"True"),zb.forEach(t),Cm=n(wt,"; an "),Ci=a(wt,"CODE",{});var Cb=i(Ci);qm=n(Cb,"encoder_hidden_states"),Cb.forEach(t),xm=n(wt," is then expected as an input to the forward pass."),wt.forEach(t),jm=h(Xt),Ct=a(Xt,"DIV",{class:!0});var ts=i(Ct);T(xs.$$.fragment,ts),Pm=h(ts),co=a(ts,"P",{});var Wa=i(co);Lm=n(Wa,"The "),ba=a(Wa,"A",{href:!0});var qb=i(ba);Om=n(qb,"RemBertModel"),qb.forEach(t),Dm=n(Wa," forward method, overrides the "),qi=a(Wa,"CODE",{});var xb=i(qi);Am=n(xb,"__call__"),xb.forEach(t),Nm=n(Wa," special method."),Wa.forEach(t),Im=h(ts),T(Jo.$$.fragment,ts),Sm=h(ts),T(Go.$$.fragment,ts),ts.forEach(t),Xt.forEach(t),Nd=h(s),po=a(s,"H2",{class:!0});var vc=i(po);Xo=a(vc,"A",{id:!0,class:!0,href:!0});var jb=i(Xo);xi=a(jb,"SPAN",{});var Pb=i(xi);T(js.$$.fragment,Pb),Pb.forEach(t),jb.forEach(t),Wm=h(vc),ji=a(vc,"SPAN",{});var Lb=i(ji);Um=n(Lb,"RemBertForCausalLM"),Lb.forEach(t),vc.forEach(t),Id=h(s),Kt=a(s,"DIV",{class:!0});var Ua=i(Kt);T(Ps.$$.fragment,Ua),Km=h(Ua),mo=a(Ua,"P",{});var Ka=i(mo);Hm=n(Ka,"RemBERT Model with a "),Pi=a(Ka,"CODE",{});var Ob=i(Pi);Qm=n(Ob,"language modeling"),Ob.forEach(t),Vm=n(Ka,` head on top for CLM fine-tuning.
This model is a PyTorch `),Ls=a(Ka,"A",{href:!0,rel:!0});var Db=i(Ls);Jm=n(Db,"torch.nn.Module"),Db.forEach(t),Gm=n(Ka,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ka.forEach(t),Xm=h(Ua),qt=a(Ua,"DIV",{class:!0});var os=i(qt);T(Os.$$.fragment,os),Ym=h(os),ho=a(os,"P",{});var Ha=i(ho);Zm=n(Ha,"The "),va=a(Ha,"A",{href:!0});var Ab=i(va);eh=n(Ab,"RemBertForCausalLM"),Ab.forEach(t),th=n(Ha," forward method, overrides the "),Li=a(Ha,"CODE",{});var Nb=i(Li);oh=n(Nb,"__call__"),Nb.forEach(t),nh=n(Ha," special method."),Ha.forEach(t),sh=h(os),T(Yo.$$.fragment,os),rh=h(os),T(Zo.$$.fragment,os),os.forEach(t),Ua.forEach(t),Sd=h(s),uo=a(s,"H2",{class:!0});var yc=i(uo);en=a(yc,"A",{id:!0,class:!0,href:!0});var Ib=i(en);Oi=a(Ib,"SPAN",{});var Sb=i(Oi);T(Ds.$$.fragment,Sb),Sb.forEach(t),Ib.forEach(t),ah=h(yc),Di=a(yc,"SPAN",{});var Wb=i(Di);ih=n(Wb,"RemBertForMaskedLM"),Wb.forEach(t),yc.forEach(t),Wd=h(s),Ht=a(s,"DIV",{class:!0});var Qa=i(Ht);T(As.$$.fragment,Qa),lh=h(Qa),fo=a(Qa,"P",{});var Va=i(fo);dh=n(Va,"RemBERT Model with a "),Ai=a(Va,"CODE",{});var Ub=i(Ai);ch=n(Ub,"language modeling"),Ub.forEach(t),ph=n(Va,` head on top.
This model is a PyTorch `),Ns=a(Va,"A",{href:!0,rel:!0});var Kb=i(Ns);mh=n(Kb,"torch.nn.Module"),Kb.forEach(t),hh=n(Va,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Va.forEach(t),uh=h(Qa),ft=a(Qa,"DIV",{class:!0});var Yt=i(ft);T(Is.$$.fragment,Yt),fh=h(Yt),go=a(Yt,"P",{});var Ja=i(go);gh=n(Ja,"The "),ya=a(Ja,"A",{href:!0});var Hb=i(ya);_h=n(Hb,"RemBertForMaskedLM"),Hb.forEach(t),kh=n(Ja," forward method, overrides the "),Ni=a(Ja,"CODE",{});var Qb=i(Ni);bh=n(Qb,"__call__"),Qb.forEach(t),vh=n(Ja," special method."),Ja.forEach(t),yh=h(Yt),T(tn.$$.fragment,Yt),Th=h(Yt),T(on.$$.fragment,Yt),wh=h(Yt),T(nn.$$.fragment,Yt),Yt.forEach(t),Qa.forEach(t),Ud=h(s),_o=a(s,"H2",{class:!0});var Tc=i(_o);sn=a(Tc,"A",{id:!0,class:!0,href:!0});var Vb=i(sn);Ii=a(Vb,"SPAN",{});var Jb=i(Ii);T(Ss.$$.fragment,Jb),Jb.forEach(t),Vb.forEach(t),$h=h(Tc),Si=a(Tc,"SPAN",{});var Gb=i(Si);Fh=n(Gb,"RemBertForSequenceClassification"),Gb.forEach(t),Tc.forEach(t),Kd=h(s),Ft=a(s,"DIV",{class:!0});var ns=i(Ft);T(Ws.$$.fragment,ns),Rh=h(ns),Wi=a(ns,"P",{});var Xb=i(Wi);Eh=n(Xb,`RemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xb.forEach(t),Bh=h(ns),Us=a(ns,"P",{});var wc=i(Us);Mh=n(wc,"This model is a PyTorch "),Ks=a(wc,"A",{href:!0,rel:!0});var Yb=i(Ks);zh=n(Yb,"torch.nn.Module"),Yb.forEach(t),Ch=n(wc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),wc.forEach(t),qh=h(ns),ot=a(ns,"DIV",{class:!0});var $t=i(ot);T(Hs.$$.fragment,$t),xh=h($t),ko=a($t,"P",{});var Ga=i(ko);jh=n(Ga,"The "),Ta=a(Ga,"A",{href:!0});var Zb=i(Ta);Ph=n(Zb,"RemBertForSequenceClassification"),Zb.forEach(t),Lh=n(Ga," forward method, overrides the "),Ui=a(Ga,"CODE",{});var ev=i(Ui);Oh=n(ev,"__call__"),ev.forEach(t),Dh=n(Ga," special method."),Ga.forEach(t),Ah=h($t),T(rn.$$.fragment,$t),Nh=h($t),T(an.$$.fragment,$t),Ih=h($t),T(ln.$$.fragment,$t),Sh=h($t),T(dn.$$.fragment,$t),Wh=h($t),T(cn.$$.fragment,$t),$t.forEach(t),ns.forEach(t),Hd=h(s),bo=a(s,"H2",{class:!0});var $c=i(bo);pn=a($c,"A",{id:!0,class:!0,href:!0});var tv=i(pn);Ki=a(tv,"SPAN",{});var ov=i(Ki);T(Qs.$$.fragment,ov),ov.forEach(t),tv.forEach(t),Uh=h($c),Hi=a($c,"SPAN",{});var nv=i(Hi);Kh=n(nv,"RemBertForMultipleChoice"),nv.forEach(t),$c.forEach(t),Qd=h(s),Rt=a(s,"DIV",{class:!0});var ss=i(Rt);T(Vs.$$.fragment,ss),Hh=h(ss),Qi=a(ss,"P",{});var sv=i(Qi);Qh=n(sv,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),sv.forEach(t),Vh=h(ss),Js=a(ss,"P",{});var Fc=i(Js);Jh=n(Fc,"This model is a PyTorch "),Gs=a(Fc,"A",{href:!0,rel:!0});var rv=i(Gs);Gh=n(rv,"torch.nn.Module"),rv.forEach(t),Xh=n(Fc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),Yh=h(ss),xt=a(ss,"DIV",{class:!0});var rs=i(xt);T(Xs.$$.fragment,rs),Zh=h(rs),vo=a(rs,"P",{});var Xa=i(vo);eu=n(Xa,"The "),wa=a(Xa,"A",{href:!0});var av=i(wa);tu=n(av,"RemBertForMultipleChoice"),av.forEach(t),ou=n(Xa," forward method, overrides the "),Vi=a(Xa,"CODE",{});var iv=i(Vi);nu=n(iv,"__call__"),iv.forEach(t),su=n(Xa," special method."),Xa.forEach(t),ru=h(rs),T(mn.$$.fragment,rs),au=h(rs),T(hn.$$.fragment,rs),rs.forEach(t),ss.forEach(t),Vd=h(s),yo=a(s,"H2",{class:!0});var Rc=i(yo);un=a(Rc,"A",{id:!0,class:!0,href:!0});var lv=i(un);Ji=a(lv,"SPAN",{});var dv=i(Ji);T(Ys.$$.fragment,dv),dv.forEach(t),lv.forEach(t),iu=h(Rc),Gi=a(Rc,"SPAN",{});var cv=i(Gi);lu=n(cv,"RemBertForTokenClassification"),cv.forEach(t),Rc.forEach(t),Jd=h(s),Et=a(s,"DIV",{class:!0});var as=i(Et);T(Zs.$$.fragment,as),du=h(as),Xi=a(as,"P",{});var pv=i(Xi);cu=n(pv,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),pv.forEach(t),pu=h(as),er=a(as,"P",{});var Ec=i(er);mu=n(Ec,"This model is a PyTorch "),tr=a(Ec,"A",{href:!0,rel:!0});var mv=i(tr);hu=n(mv,"torch.nn.Module"),mv.forEach(t),uu=n(Ec,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),fu=h(as),gt=a(as,"DIV",{class:!0});var Zt=i(gt);T(or.$$.fragment,Zt),gu=h(Zt),To=a(Zt,"P",{});var Ya=i(To);_u=n(Ya,"The "),$a=a(Ya,"A",{href:!0});var hv=i($a);ku=n(hv,"RemBertForTokenClassification"),hv.forEach(t),bu=n(Ya," forward method, overrides the "),Yi=a(Ya,"CODE",{});var uv=i(Yi);vu=n(uv,"__call__"),uv.forEach(t),yu=n(Ya," special method."),Ya.forEach(t),Tu=h(Zt),T(fn.$$.fragment,Zt),wu=h(Zt),T(gn.$$.fragment,Zt),$u=h(Zt),T(_n.$$.fragment,Zt),Zt.forEach(t),as.forEach(t),Gd=h(s),wo=a(s,"H2",{class:!0});var Bc=i(wo);kn=a(Bc,"A",{id:!0,class:!0,href:!0});var fv=i(kn);Zi=a(fv,"SPAN",{});var gv=i(Zi);T(nr.$$.fragment,gv),gv.forEach(t),fv.forEach(t),Fu=h(Bc),el=a(Bc,"SPAN",{});var _v=i(el);Ru=n(_v,"RemBertForQuestionAnswering"),_v.forEach(t),Bc.forEach(t),Xd=h(s),Bt=a(s,"DIV",{class:!0});var is=i(Bt);T(sr.$$.fragment,is),Eu=h(is),$o=a(is,"P",{});var Za=i($o);Bu=n(Za,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),tl=a(Za,"CODE",{});var kv=i(tl);Mu=n(kv,"span start logits"),kv.forEach(t),zu=n(Za," and "),ol=a(Za,"CODE",{});var bv=i(ol);Cu=n(bv,"span end logits"),bv.forEach(t),qu=n(Za,")."),Za.forEach(t),xu=h(is),rr=a(is,"P",{});var Mc=i(rr);ju=n(Mc,"This model is a PyTorch "),ar=a(Mc,"A",{href:!0,rel:!0});var vv=i(ar);Pu=n(vv,"torch.nn.Module"),vv.forEach(t),Lu=n(Mc,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Mc.forEach(t),Ou=h(is),_t=a(is,"DIV",{class:!0});var eo=i(_t);T(ir.$$.fragment,eo),Du=h(eo),Fo=a(eo,"P",{});var ei=i(Fo);Au=n(ei,"The "),Fa=a(ei,"A",{href:!0});var yv=i(Fa);Nu=n(yv,"RemBertForQuestionAnswering"),yv.forEach(t),Iu=n(ei," forward method, overrides the "),nl=a(ei,"CODE",{});var Tv=i(nl);Su=n(Tv,"__call__"),Tv.forEach(t),Wu=n(ei," special method."),ei.forEach(t),Uu=h(eo),T(bn.$$.fragment,eo),Ku=h(eo),T(vn.$$.fragment,eo),Hu=h(eo),T(yn.$$.fragment,eo),eo.forEach(t),is.forEach(t),Yd=h(s),Ro=a(s,"H2",{class:!0});var zc=i(Ro);Tn=a(zc,"A",{id:!0,class:!0,href:!0});var wv=i(Tn);sl=a(wv,"SPAN",{});var $v=i(sl);T(lr.$$.fragment,$v),$v.forEach(t),wv.forEach(t),Qu=h(zc),rl=a(zc,"SPAN",{});var Fv=i(rl);Vu=n(Fv,"TFRemBertModel"),Fv.forEach(t),zc.forEach(t),Zd=h(s),rt=a(s,"DIV",{class:!0});var Ot=i(rt);T(dr.$$.fragment,Ot),Ju=h(Ot),al=a(Ot,"P",{});var Rv=i(al);Gu=n(Rv,"The bare RemBERT Model transformer outputing raw hidden-states without any specific head on top."),Rv.forEach(t),Xu=h(Ot),cr=a(Ot,"P",{});var Cc=i(cr);Yu=n(Cc,"This model inherits from "),Ra=a(Cc,"A",{href:!0});var Ev=i(Ra);Zu=n(Ev,"TFPreTrainedModel"),Ev.forEach(t),ef=n(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),tf=h(Ot),pr=a(Ot,"P",{});var qc=i(pr);of=n(qc,"This model is also a "),mr=a(qc,"A",{href:!0,rel:!0});var Bv=i(mr);nf=n(Bv,"tf.keras.Model"),Bv.forEach(t),sf=n(qc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qc.forEach(t),rf=h(Ot),T(wn.$$.fragment,Ot),af=h(Ot),jt=a(Ot,"DIV",{class:!0});var ls=i(jt);T(hr.$$.fragment,ls),lf=h(ls),Eo=a(ls,"P",{});var ti=i(Eo);df=n(ti,"The "),Ea=a(ti,"A",{href:!0});var Mv=i(Ea);cf=n(Mv,"TFRemBertModel"),Mv.forEach(t),pf=n(ti," forward method, overrides the "),il=a(ti,"CODE",{});var zv=i(il);mf=n(zv,"__call__"),zv.forEach(t),hf=n(ti," special method."),ti.forEach(t),uf=h(ls),T($n.$$.fragment,ls),ff=h(ls),T(Fn.$$.fragment,ls),ls.forEach(t),Ot.forEach(t),ec=h(s),Bo=a(s,"H2",{class:!0});var xc=i(Bo);Rn=a(xc,"A",{id:!0,class:!0,href:!0});var Cv=i(Rn);ll=a(Cv,"SPAN",{});var qv=i(ll);T(ur.$$.fragment,qv),qv.forEach(t),Cv.forEach(t),gf=h(xc),dl=a(xc,"SPAN",{});var xv=i(dl);_f=n(xv,"TFRemBertForMaskedLM"),xv.forEach(t),xc.forEach(t),tc=h(s),at=a(s,"DIV",{class:!0});var Dt=i(at);T(fr.$$.fragment,Dt),kf=h(Dt),gr=a(Dt,"P",{});var jc=i(gr);bf=n(jc,"RemBERT Model with a "),cl=a(jc,"CODE",{});var jv=i(cl);vf=n(jv,"language modeling"),jv.forEach(t),yf=n(jc," head on top."),jc.forEach(t),Tf=h(Dt),_r=a(Dt,"P",{});var Pc=i(_r);wf=n(Pc,"This model inherits from "),Ba=a(Pc,"A",{href:!0});var Pv=i(Ba);$f=n(Pv,"TFPreTrainedModel"),Pv.forEach(t),Ff=n(Pc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc.forEach(t),Rf=h(Dt),kr=a(Dt,"P",{});var Lc=i(kr);Ef=n(Lc,"This model is also a "),br=a(Lc,"A",{href:!0,rel:!0});var Lv=i(br);Bf=n(Lv,"tf.keras.Model"),Lv.forEach(t),Mf=n(Lc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lc.forEach(t),zf=h(Dt),T(En.$$.fragment,Dt),Cf=h(Dt),kt=a(Dt,"DIV",{class:!0});var to=i(kt);T(vr.$$.fragment,to),qf=h(to),Mo=a(to,"P",{});var oi=i(Mo);xf=n(oi,"The "),Ma=a(oi,"A",{href:!0});var Ov=i(Ma);jf=n(Ov,"TFRemBertForMaskedLM"),Ov.forEach(t),Pf=n(oi," forward method, overrides the "),pl=a(oi,"CODE",{});var Dv=i(pl);Lf=n(Dv,"__call__"),Dv.forEach(t),Of=n(oi," special method."),oi.forEach(t),Df=h(to),T(Bn.$$.fragment,to),Af=h(to),T(Mn.$$.fragment,to),Nf=h(to),T(zn.$$.fragment,to),to.forEach(t),Dt.forEach(t),oc=h(s),zo=a(s,"H2",{class:!0});var Oc=i(zo);Cn=a(Oc,"A",{id:!0,class:!0,href:!0});var Av=i(Cn);ml=a(Av,"SPAN",{});var Nv=i(ml);T(yr.$$.fragment,Nv),Nv.forEach(t),Av.forEach(t),If=h(Oc),hl=a(Oc,"SPAN",{});var Iv=i(hl);Sf=n(Iv,"TFRemBertForCausalLM"),Iv.forEach(t),Oc.forEach(t),nc=h(s),it=a(s,"DIV",{class:!0});var At=i(it);T(Tr.$$.fragment,At),Wf=h(At),wr=a(At,"P",{});var Dc=i(wr);Uf=n(Dc,"RemBERT Model with a "),ul=a(Dc,"CODE",{});var Sv=i(ul);Kf=n(Sv,"language modeling"),Sv.forEach(t),Hf=n(Dc," head on top for CLM fine-tuning."),Dc.forEach(t),Qf=h(At),$r=a(At,"P",{});var Ac=i($r);Vf=n(Ac,"This model inherits from "),za=a(Ac,"A",{href:!0});var Wv=i(za);Jf=n(Wv,"TFPreTrainedModel"),Wv.forEach(t),Gf=n(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),Xf=h(At),Fr=a(At,"P",{});var Nc=i(Fr);Yf=n(Nc,"This model is also a "),Rr=a(Nc,"A",{href:!0,rel:!0});var Uv=i(Rr);Zf=n(Uv,"tf.keras.Model"),Uv.forEach(t),eg=n(Nc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nc.forEach(t),tg=h(At),T(qn.$$.fragment,At),og=h(At),bt=a(At,"DIV",{class:!0});var oo=i(bt);T(Er.$$.fragment,oo),ng=h(oo),et=a(oo,"P",{});var ht=i(et);sg=n(ht,"encoder_hidden_states  ("),fl=a(ht,"CODE",{});var Kv=i(fl);rg=n(Kv,"tf.Tensor"),Kv.forEach(t),ag=n(ht," of shape "),gl=a(ht,"CODE",{});var Hv=i(gl);ig=n(Hv,"(batch_size, sequence_length, hidden_size)"),Hv.forEach(t),lg=n(ht,", "),_l=a(ht,"EM",{});var Qv=i(_l);dg=n(Qv,"optional"),Qv.forEach(t),cg=n(ht,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),kl=a(ht,"CODE",{});var Vv=i(kl);pg=n(Vv,"tf.Tensor"),Vv.forEach(t),mg=n(ht," of shape "),bl=a(ht,"CODE",{});var Jv=i(bl);hg=n(Jv,"(batch_size, sequence_length)"),Jv.forEach(t),ug=n(ht,", "),vl=a(ht,"EM",{});var Gv=i(vl);fg=n(Gv,"optional"),Gv.forEach(t),gg=n(ht,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),yl=a(ht,"CODE",{});var Xv=i(yl);_g=n(Xv,"[0, 1]"),Xv.forEach(t),kg=n(ht,":"),ht.forEach(t),bg=h(oo),Br=a(oo,"UL",{});var Ic=i(Br);Mr=a(Ic,"LI",{});var Sc=i(Mr);vg=n(Sc,"1 for tokens that are "),Tl=a(Sc,"STRONG",{});var Yv=i(Tl);yg=n(Yv,"not masked"),Yv.forEach(t),Tg=n(Sc,","),Sc.forEach(t),wg=h(Ic),zr=a(Ic,"LI",{});var Wc=i(zr);$g=n(Wc,"0 for tokens that are "),wl=a(Wc,"STRONG",{});var Zv=i(wl);Fg=n(Zv,"masked"),Zv.forEach(t),Rg=n(Wc,"."),Wc.forEach(t),Ic.forEach(t),Eg=h(oo),Y=a(oo,"P",{});var ee=i(Y);Bg=n(ee,"past_key_values ("),$l=a(ee,"CODE",{});var ey=i($l);Mg=n(ey,"Tuple[Tuple[tf.Tensor]]"),ey.forEach(t),zg=n(ee," of length "),Fl=a(ee,"CODE",{});var ty=i(Fl);Cg=n(ty,"config.n_layers"),ty.forEach(t),qg=n(ee,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),Rl=a(ee,"CODE",{});var oy=i(Rl);xg=n(oy,"past_key_values"),oy.forEach(t),jg=n(ee," are used, the user can optionally input only the last "),El=a(ee,"CODE",{});var ny=i(El);Pg=n(ny,"decoder_input_ids"),ny.forEach(t),Lg=n(ee,` (those that
don\u2019t have their past key value states given to this model) of shape `),Bl=a(ee,"CODE",{});var sy=i(Bl);Og=n(sy,"(batch_size, 1)"),sy.forEach(t),Dg=n(ee,` instead of all
`),Ml=a(ee,"CODE",{});var ry=i(Ml);Ag=n(ry,"decoder_input_ids"),ry.forEach(t),Ng=n(ee," of shape "),zl=a(ee,"CODE",{});var ay=i(zl);Ig=n(ay,"(batch_size, sequence_length)"),ay.forEach(t),Sg=n(ee,`.
use_cache (`),Cl=a(ee,"CODE",{});var iy=i(Cl);Wg=n(iy,"bool"),iy.forEach(t),Ug=n(ee,", "),ql=a(ee,"EM",{});var ly=i(ql);Kg=n(ly,"optional"),ly.forEach(t),Hg=n(ee,", defaults to "),xl=a(ee,"CODE",{});var dy=i(xl);Qg=n(dy,"True"),dy.forEach(t),Vg=n(ee,`):
If set to `),jl=a(ee,"CODE",{});var cy=i(jl);Jg=n(cy,"True"),cy.forEach(t),Gg=n(ee,", "),Pl=a(ee,"CODE",{});var py=i(Pl);Xg=n(py,"past_key_values"),py.forEach(t),Yg=n(ee,` key value states are returned and can be used to speed up decoding (see
`),Ll=a(ee,"CODE",{});var my=i(Ll);Zg=n(my,"past_key_values"),my.forEach(t),e_=n(ee,"). Set to "),Ol=a(ee,"CODE",{});var hy=i(Ol);t_=n(hy,"False"),hy.forEach(t),o_=n(ee," during training, "),Dl=a(ee,"CODE",{});var uy=i(Dl);n_=n(uy,"True"),uy.forEach(t),s_=n(ee,` during generation
labels (`),Al=a(ee,"CODE",{});var fy=i(Al);r_=n(fy,"tf.Tensor"),fy.forEach(t),a_=n(ee," or "),Nl=a(ee,"CODE",{});var gy=i(Nl);i_=n(gy,"np.ndarray"),gy.forEach(t),l_=n(ee," of shape "),Il=a(ee,"CODE",{});var _y=i(Il);d_=n(_y,"(batch_size, sequence_length)"),_y.forEach(t),c_=n(ee,", "),Sl=a(ee,"EM",{});var ky=i(Sl);p_=n(ky,"optional"),ky.forEach(t),m_=n(ee,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Wl=a(ee,"CODE",{});var by=i(Wl);h_=n(by,"[0, ..., config.vocab_size - 1]"),by.forEach(t),u_=n(ee,"."),ee.forEach(t),f_=h(oo),T(xn.$$.fragment,oo),oo.forEach(t),At.forEach(t),sc=h(s),Co=a(s,"H2",{class:!0});var Uc=i(Co);jn=a(Uc,"A",{id:!0,class:!0,href:!0});var vy=i(jn);Ul=a(vy,"SPAN",{});var yy=i(Ul);T(Cr.$$.fragment,yy),yy.forEach(t),vy.forEach(t),g_=h(Uc),Kl=a(Uc,"SPAN",{});var Ty=i(Kl);__=n(Ty,"TFRemBertForSequenceClassification"),Ty.forEach(t),Uc.forEach(t),rc=h(s),lt=a(s,"DIV",{class:!0});var Nt=i(lt);T(qr.$$.fragment,Nt),k_=h(Nt),Hl=a(Nt,"P",{});var wy=i(Hl);b_=n(wy,"RemBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),wy.forEach(t),v_=h(Nt),xr=a(Nt,"P",{});var Kc=i(xr);y_=n(Kc,"This model inherits from "),Ca=a(Kc,"A",{href:!0});var $y=i(Ca);T_=n($y,"TFPreTrainedModel"),$y.forEach(t),w_=n(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),$_=h(Nt),jr=a(Nt,"P",{});var Hc=i(jr);F_=n(Hc,"This model is also a "),Pr=a(Hc,"A",{href:!0,rel:!0});var Fy=i(Pr);R_=n(Fy,"tf.keras.Model"),Fy.forEach(t),E_=n(Hc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc.forEach(t),B_=h(Nt),T(Pn.$$.fragment,Nt),M_=h(Nt),vt=a(Nt,"DIV",{class:!0});var no=i(vt);T(Lr.$$.fragment,no),z_=h(no),qo=a(no,"P",{});var ni=i(qo);C_=n(ni,"The "),qa=a(ni,"A",{href:!0});var Ry=i(qa);q_=n(Ry,"TFRemBertForSequenceClassification"),Ry.forEach(t),x_=n(ni," forward method, overrides the "),Ql=a(ni,"CODE",{});var Ey=i(Ql);j_=n(Ey,"__call__"),Ey.forEach(t),P_=n(ni," special method."),ni.forEach(t),L_=h(no),T(Ln.$$.fragment,no),O_=h(no),T(On.$$.fragment,no),D_=h(no),T(Dn.$$.fragment,no),no.forEach(t),Nt.forEach(t),ac=h(s),xo=a(s,"H2",{class:!0});var Qc=i(xo);An=a(Qc,"A",{id:!0,class:!0,href:!0});var By=i(An);Vl=a(By,"SPAN",{});var My=i(Vl);T(Or.$$.fragment,My),My.forEach(t),By.forEach(t),A_=h(Qc),Jl=a(Qc,"SPAN",{});var zy=i(Jl);N_=n(zy,"TFRemBertForMultipleChoice"),zy.forEach(t),Qc.forEach(t),ic=h(s),dt=a(s,"DIV",{class:!0});var It=i(dt);T(Dr.$$.fragment,It),I_=h(It),Gl=a(It,"P",{});var Cy=i(Gl);S_=n(Cy,`RemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Cy.forEach(t),W_=h(It),Ar=a(It,"P",{});var Vc=i(Ar);U_=n(Vc,"This model inherits from "),xa=a(Vc,"A",{href:!0});var qy=i(xa);K_=n(qy,"TFPreTrainedModel"),qy.forEach(t),H_=n(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),Q_=h(It),Nr=a(It,"P",{});var Jc=i(Nr);V_=n(Jc,"This model is also a "),Ir=a(Jc,"A",{href:!0,rel:!0});var xy=i(Ir);J_=n(xy,"tf.keras.Model"),xy.forEach(t),G_=n(Jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jc.forEach(t),X_=h(It),T(Nn.$$.fragment,It),Y_=h(It),Pt=a(It,"DIV",{class:!0});var ds=i(Pt);T(Sr.$$.fragment,ds),Z_=h(ds),jo=a(ds,"P",{});var si=i(jo);ek=n(si,"The "),ja=a(si,"A",{href:!0});var jy=i(ja);tk=n(jy,"TFRemBertForMultipleChoice"),jy.forEach(t),ok=n(si," forward method, overrides the "),Xl=a(si,"CODE",{});var Py=i(Xl);nk=n(Py,"__call__"),Py.forEach(t),sk=n(si," special method."),si.forEach(t),rk=h(ds),T(In.$$.fragment,ds),ak=h(ds),T(Sn.$$.fragment,ds),ds.forEach(t),It.forEach(t),lc=h(s),Po=a(s,"H2",{class:!0});var Gc=i(Po);Wn=a(Gc,"A",{id:!0,class:!0,href:!0});var Ly=i(Wn);Yl=a(Ly,"SPAN",{});var Oy=i(Yl);T(Wr.$$.fragment,Oy),Oy.forEach(t),Ly.forEach(t),ik=h(Gc),Zl=a(Gc,"SPAN",{});var Dy=i(Zl);lk=n(Dy,"TFRemBertForTokenClassification"),Dy.forEach(t),Gc.forEach(t),dc=h(s),ct=a(s,"DIV",{class:!0});var St=i(ct);T(Ur.$$.fragment,St),dk=h(St),ed=a(St,"P",{});var Ay=i(ed);ck=n(Ay,`RemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ay.forEach(t),pk=h(St),Kr=a(St,"P",{});var Xc=i(Kr);mk=n(Xc,"This model inherits from "),Pa=a(Xc,"A",{href:!0});var Ny=i(Pa);hk=n(Ny,"TFPreTrainedModel"),Ny.forEach(t),uk=n(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(t),fk=h(St),Hr=a(St,"P",{});var Yc=i(Hr);gk=n(Yc,"This model is also a "),Qr=a(Yc,"A",{href:!0,rel:!0});var Iy=i(Qr);_k=n(Iy,"tf.keras.Model"),Iy.forEach(t),kk=n(Yc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yc.forEach(t),bk=h(St),T(Un.$$.fragment,St),vk=h(St),yt=a(St,"DIV",{class:!0});var so=i(yt);T(Vr.$$.fragment,so),yk=h(so),Lo=a(so,"P",{});var ri=i(Lo);Tk=n(ri,"The "),La=a(ri,"A",{href:!0});var Sy=i(La);wk=n(Sy,"TFRemBertForTokenClassification"),Sy.forEach(t),$k=n(ri," forward method, overrides the "),td=a(ri,"CODE",{});var Wy=i(td);Fk=n(Wy,"__call__"),Wy.forEach(t),Rk=n(ri," special method."),ri.forEach(t),Ek=h(so),T(Kn.$$.fragment,so),Bk=h(so),T(Hn.$$.fragment,so),Mk=h(so),T(Qn.$$.fragment,so),so.forEach(t),St.forEach(t),cc=h(s),Oo=a(s,"H2",{class:!0});var Zc=i(Oo);Vn=a(Zc,"A",{id:!0,class:!0,href:!0});var Uy=i(Vn);od=a(Uy,"SPAN",{});var Ky=i(od);T(Jr.$$.fragment,Ky),Ky.forEach(t),Uy.forEach(t),zk=h(Zc),nd=a(Zc,"SPAN",{});var Hy=i(nd);Ck=n(Hy,"TFRemBertForQuestionAnswering"),Hy.forEach(t),Zc.forEach(t),pc=h(s),pt=a(s,"DIV",{class:!0});var Wt=i(pt);T(Gr.$$.fragment,Wt),qk=h(Wt),Do=a(Wt,"P",{});var ai=i(Do);xk=n(ai,`RemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),sd=a(ai,"CODE",{});var Qy=i(sd);jk=n(Qy,"span start logits"),Qy.forEach(t),Pk=n(ai," and "),rd=a(ai,"CODE",{});var Vy=i(rd);Lk=n(Vy,"span end logits"),Vy.forEach(t),Ok=n(ai,")."),ai.forEach(t),Dk=h(Wt),Xr=a(Wt,"P",{});var ep=i(Xr);Ak=n(ep,"This model inherits from "),Oa=a(ep,"A",{href:!0});var Jy=i(Oa);Nk=n(Jy,"TFPreTrainedModel"),Jy.forEach(t),Ik=n(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),Sk=h(Wt),Yr=a(Wt,"P",{});var tp=i(Yr);Wk=n(tp,"This model is also a "),Zr=a(tp,"A",{href:!0,rel:!0});var Gy=i(Zr);Uk=n(Gy,"tf.keras.Model"),Gy.forEach(t),Kk=n(tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tp.forEach(t),Hk=h(Wt),T(Jn.$$.fragment,Wt),Qk=h(Wt),Tt=a(Wt,"DIV",{class:!0});var ro=i(Tt);T(ea.$$.fragment,ro),Vk=h(ro),Ao=a(ro,"P",{});var ii=i(Ao);Jk=n(ii,"The "),Da=a(ii,"A",{href:!0});var Xy=i(Da);Gk=n(Xy,"TFRemBertForQuestionAnswering"),Xy.forEach(t),Xk=n(ii," forward method, overrides the "),ad=a(ii,"CODE",{});var Yy=i(ad);Yk=n(Yy,"__call__"),Yy.forEach(t),Zk=n(ii," special method."),ii.forEach(t),eb=h(ro),T(Gn.$$.fragment,ro),tb=h(ro),T(Xn.$$.fragment,ro),ob=h(ro),T(Yn.$$.fragment,ro),ro.forEach(t),Wt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(YT)),_(u,"id","rembert"),_(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(u,"href","#rembert"),_(c,"class","relative group"),_(le,"id","overview"),_(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(le,"href","#overview"),_(N,"class","relative group"),_(ce,"href","https://arxiv.org/abs/2010.12821"),_(ce,"rel","nofollow"),_(de,"id","transformers.RemBertConfig"),_(de,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(de,"href","#transformers.RemBertConfig"),_(I,"class","relative group"),_(Q,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertModel"),_(j,"href","https://huggingface.co/google/rembert"),_(j,"rel","nofollow"),_(B,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),_(Ne,"href","/docs/transformers/v4.22.2/en/main_classes/configuration#transformers.PretrainedConfig"),_(D,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ae,"id","transformers.RemBertTokenizer"),_(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ae,"href","#transformers.RemBertTokenizer"),_(Oe,"class","relative group"),_(cs,"href","https://github.com/google/sentencepiece"),_(cs,"rel","nofollow"),_(pa,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),_(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ua,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"id","transformers.RemBertTokenizerFast"),_(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ko,"href","#transformers.RemBertTokenizerFast"),_(io,"class","relative group"),_(vs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=unigram#models"),_(vs,"rel","nofollow"),_(fa,"href","/docs/transformers/v4.22.2/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),_(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ka,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"id","transformers.RemBertModel"),_(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vo,"href","#transformers.RemBertModel"),_(lo,"class","relative group"),_(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(zs,"rel","nofollow"),_(qs,"href","https://arxiv.org/abs/1706.03762"),_(qs,"rel","nofollow"),_(ba,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertModel"),_(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xo,"id","transformers.RemBertForCausalLM"),_(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Xo,"href","#transformers.RemBertForCausalLM"),_(po,"class","relative group"),_(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ls,"rel","nofollow"),_(va,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForCausalLM"),_(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(en,"id","transformers.RemBertForMaskedLM"),_(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(en,"href","#transformers.RemBertForMaskedLM"),_(uo,"class","relative group"),_(Ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ns,"rel","nofollow"),_(ya,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForMaskedLM"),_(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.RemBertForSequenceClassification"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.RemBertForSequenceClassification"),_(_o,"class","relative group"),_(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Ks,"rel","nofollow"),_(Ta,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForSequenceClassification"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(pn,"id","transformers.RemBertForMultipleChoice"),_(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(pn,"href","#transformers.RemBertForMultipleChoice"),_(bo,"class","relative group"),_(Gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Gs,"rel","nofollow"),_(wa,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForMultipleChoice"),_(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(un,"id","transformers.RemBertForTokenClassification"),_(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(un,"href","#transformers.RemBertForTokenClassification"),_(yo,"class","relative group"),_(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(tr,"rel","nofollow"),_($a,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForTokenClassification"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(kn,"id","transformers.RemBertForQuestionAnswering"),_(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(kn,"href","#transformers.RemBertForQuestionAnswering"),_(wo,"class","relative group"),_(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ar,"rel","nofollow"),_(Fa,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.RemBertForQuestionAnswering"),_(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Tn,"id","transformers.TFRemBertModel"),_(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Tn,"href","#transformers.TFRemBertModel"),_(Ro,"class","relative group"),_(Ra,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(mr,"rel","nofollow"),_(Ea,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertModel"),_(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rn,"id","transformers.TFRemBertForMaskedLM"),_(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Rn,"href","#transformers.TFRemBertForMaskedLM"),_(Bo,"class","relative group"),_(Ba,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(br,"rel","nofollow"),_(Ma,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertForMaskedLM"),_(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Cn,"id","transformers.TFRemBertForCausalLM"),_(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Cn,"href","#transformers.TFRemBertForCausalLM"),_(zo,"class","relative group"),_(za,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Rr,"rel","nofollow"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(jn,"id","transformers.TFRemBertForSequenceClassification"),_(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(jn,"href","#transformers.TFRemBertForSequenceClassification"),_(Co,"class","relative group"),_(Ca,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Pr,"rel","nofollow"),_(qa,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertForSequenceClassification"),_(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(An,"id","transformers.TFRemBertForMultipleChoice"),_(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(An,"href","#transformers.TFRemBertForMultipleChoice"),_(xo,"class","relative group"),_(xa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ir,"rel","nofollow"),_(ja,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertForMultipleChoice"),_(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wn,"id","transformers.TFRemBertForTokenClassification"),_(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wn,"href","#transformers.TFRemBertForTokenClassification"),_(Po,"class","relative group"),_(Pa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Qr,"rel","nofollow"),_(La,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertForTokenClassification"),_(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vn,"id","transformers.TFRemBertForQuestionAnswering"),_(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Vn,"href","#transformers.TFRemBertForQuestionAnswering"),_(Oo,"class","relative group"),_(Oa,"href","/docs/transformers/v4.22.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Zr,"rel","nofollow"),_(Da,"href","/docs/transformers/v4.22.2/en/model_doc/rembert#transformers.TFRemBertForQuestionAnswering"),_(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,b){e(document.head,d),k(s,g,b),k(s,c,b),e(c,u),e(u,v),w(l,v,null),e(c,p),e(c,C),e(C,Te),k(s,fe,b),k(s,N,b),e(N,le),e(le,te),w(E,te,null),e(N,we),e(N,V),e(V,$e),k(s,ge,b),k(s,S,b),e(S,Fe),e(S,ce),e(ce,G),e(S,Re),k(s,_e,b),k(s,U,b),e(U,Ee),k(s,ke,b),k(s,K,b),e(K,he),e(he,Be),k(s,ne,b),k(s,q,b),e(q,P),k(s,be,b),k(s,H,b),e(H,Me),k(s,ve,b),k(s,I,b),e(I,de),e(de,ue),w(x,ue,null),e(I,ze),e(I,J),e(J,Ce),k(s,ye,b),k(s,D,b),w(pe,D,null),e(D,qe),e(D,O),e(O,xe),e(O,Q),e(Q,je),e(O,re),e(O,j),e(j,Pe),e(O,L),e(D,Le),e(D,ie),e(ie,f),e(ie,B),e(B,Qe),e(ie,ae),e(ie,Ne),e(Ne,Ve),e(ie,z),e(D,Je),w(De,D,null),k(s,Ke,b),k(s,Oe,b),e(Oe,Ae),e(Ae,A),w(W,A,null),e(Oe,Ge),e(Oe,Ue),e(Ue,X),k(s,He,b),k(s,oe,b),w(me,oe,null),e(oe,Xe),e(oe,Z),e(Z,Ye),e(Z,cs),e(cs,op),e(Z,np),e(oe,sp),e(oe,ps),e(ps,rp),e(ps,pa),e(pa,ap),e(ps,ip),e(oe,lp),e(oe,Jt),w(ms,Jt,null),e(Jt,dp),e(Jt,li),e(li,cp),e(Jt,pp),e(Jt,hs),e(hs,ma),e(ma,mp),e(ma,di),e(di,hp),e(hs,up),e(hs,ha),e(ha,fp),e(ha,ci),e(ci,gp),e(oe,_p),e(oe,Wo),w(us,Wo,null),e(Wo,kp),e(Wo,fs),e(fs,bp),e(fs,pi),e(pi,vp),e(fs,yp),e(oe,Tp),e(oe,Mt),w(gs,Mt,null),e(Mt,wp),e(Mt,mi),e(mi,$p),e(Mt,Fp),w(Uo,Mt,null),e(Mt,Rp),e(Mt,ao),e(ao,Ep),e(ao,hi),e(hi,Bp),e(ao,Mp),e(ao,ui),e(ui,zp),e(ao,Cp),e(oe,qp),e(oe,ua),w(_s,ua,null),k(s,Ld,b),k(s,io,b),e(io,Ko),e(Ko,fi),w(ks,fi,null),e(io,xp),e(io,gi),e(gi,jp),k(s,Od,b),k(s,nt,b),w(bs,nt,null),e(nt,Pp),e(nt,Ut),e(Ut,Lp),e(Ut,_i),e(_i,Op),e(Ut,Dp),e(Ut,vs),e(vs,Ap),e(Ut,Np),e(Ut,fa),e(fa,Ip),e(Ut,Sp),e(nt,Wp),e(nt,Gt),w(ys,Gt,null),e(Gt,Up),e(Gt,ki),e(ki,Kp),e(Gt,Hp),e(Gt,Ts),e(Ts,ga),e(ga,Qp),e(ga,bi),e(bi,Vp),e(Ts,Jp),e(Ts,_a),e(_a,Gp),e(_a,vi),e(vi,Xp),e(nt,Yp),e(nt,Ho),w(ws,Ho,null),e(Ho,Zp),e(Ho,$s),e($s,em),e($s,yi),e(yi,tm),e($s,om),e(nt,nm),e(nt,zt),w(Fs,zt,null),e(zt,sm),e(zt,Ti),e(Ti,rm),e(zt,am),w(Qo,zt,null),e(zt,im),e(zt,wi),e(wi,lm),e(nt,dm),e(nt,ka),w(Rs,ka,null),k(s,Dd,b),k(s,lo,b),e(lo,Vo),e(Vo,$i),w(Es,$i,null),e(lo,cm),e(lo,Fi),e(Fi,pm),k(s,Ad,b),k(s,ut,b),w(Bs,ut,null),e(ut,mm),e(ut,Ms),e(Ms,hm),e(Ms,zs),e(zs,um),e(Ms,fm),e(ut,gm),e(ut,Cs),e(Cs,_m),e(Cs,qs),e(qs,km),e(Cs,bm),e(ut,vm),e(ut,st),e(st,ym),e(st,Ri),e(Ri,Tm),e(st,wm),e(st,Ei),e(Ei,$m),e(st,Fm),e(st,Bi),e(Bi,Rm),e(st,Em),e(st,Mi),e(Mi,Bm),e(st,Mm),e(st,zi),e(zi,zm),e(st,Cm),e(st,Ci),e(Ci,qm),e(st,xm),e(ut,jm),e(ut,Ct),w(xs,Ct,null),e(Ct,Pm),e(Ct,co),e(co,Lm),e(co,ba),e(ba,Om),e(co,Dm),e(co,qi),e(qi,Am),e(co,Nm),e(Ct,Im),w(Jo,Ct,null),e(Ct,Sm),w(Go,Ct,null),k(s,Nd,b),k(s,po,b),e(po,Xo),e(Xo,xi),w(js,xi,null),e(po,Wm),e(po,ji),e(ji,Um),k(s,Id,b),k(s,Kt,b),w(Ps,Kt,null),e(Kt,Km),e(Kt,mo),e(mo,Hm),e(mo,Pi),e(Pi,Qm),e(mo,Vm),e(mo,Ls),e(Ls,Jm),e(mo,Gm),e(Kt,Xm),e(Kt,qt),w(Os,qt,null),e(qt,Ym),e(qt,ho),e(ho,Zm),e(ho,va),e(va,eh),e(ho,th),e(ho,Li),e(Li,oh),e(ho,nh),e(qt,sh),w(Yo,qt,null),e(qt,rh),w(Zo,qt,null),k(s,Sd,b),k(s,uo,b),e(uo,en),e(en,Oi),w(Ds,Oi,null),e(uo,ah),e(uo,Di),e(Di,ih),k(s,Wd,b),k(s,Ht,b),w(As,Ht,null),e(Ht,lh),e(Ht,fo),e(fo,dh),e(fo,Ai),e(Ai,ch),e(fo,ph),e(fo,Ns),e(Ns,mh),e(fo,hh),e(Ht,uh),e(Ht,ft),w(Is,ft,null),e(ft,fh),e(ft,go),e(go,gh),e(go,ya),e(ya,_h),e(go,kh),e(go,Ni),e(Ni,bh),e(go,vh),e(ft,yh),w(tn,ft,null),e(ft,Th),w(on,ft,null),e(ft,wh),w(nn,ft,null),k(s,Ud,b),k(s,_o,b),e(_o,sn),e(sn,Ii),w(Ss,Ii,null),e(_o,$h),e(_o,Si),e(Si,Fh),k(s,Kd,b),k(s,Ft,b),w(Ws,Ft,null),e(Ft,Rh),e(Ft,Wi),e(Wi,Eh),e(Ft,Bh),e(Ft,Us),e(Us,Mh),e(Us,Ks),e(Ks,zh),e(Us,Ch),e(Ft,qh),e(Ft,ot),w(Hs,ot,null),e(ot,xh),e(ot,ko),e(ko,jh),e(ko,Ta),e(Ta,Ph),e(ko,Lh),e(ko,Ui),e(Ui,Oh),e(ko,Dh),e(ot,Ah),w(rn,ot,null),e(ot,Nh),w(an,ot,null),e(ot,Ih),w(ln,ot,null),e(ot,Sh),w(dn,ot,null),e(ot,Wh),w(cn,ot,null),k(s,Hd,b),k(s,bo,b),e(bo,pn),e(pn,Ki),w(Qs,Ki,null),e(bo,Uh),e(bo,Hi),e(Hi,Kh),k(s,Qd,b),k(s,Rt,b),w(Vs,Rt,null),e(Rt,Hh),e(Rt,Qi),e(Qi,Qh),e(Rt,Vh),e(Rt,Js),e(Js,Jh),e(Js,Gs),e(Gs,Gh),e(Js,Xh),e(Rt,Yh),e(Rt,xt),w(Xs,xt,null),e(xt,Zh),e(xt,vo),e(vo,eu),e(vo,wa),e(wa,tu),e(vo,ou),e(vo,Vi),e(Vi,nu),e(vo,su),e(xt,ru),w(mn,xt,null),e(xt,au),w(hn,xt,null),k(s,Vd,b),k(s,yo,b),e(yo,un),e(un,Ji),w(Ys,Ji,null),e(yo,iu),e(yo,Gi),e(Gi,lu),k(s,Jd,b),k(s,Et,b),w(Zs,Et,null),e(Et,du),e(Et,Xi),e(Xi,cu),e(Et,pu),e(Et,er),e(er,mu),e(er,tr),e(tr,hu),e(er,uu),e(Et,fu),e(Et,gt),w(or,gt,null),e(gt,gu),e(gt,To),e(To,_u),e(To,$a),e($a,ku),e(To,bu),e(To,Yi),e(Yi,vu),e(To,yu),e(gt,Tu),w(fn,gt,null),e(gt,wu),w(gn,gt,null),e(gt,$u),w(_n,gt,null),k(s,Gd,b),k(s,wo,b),e(wo,kn),e(kn,Zi),w(nr,Zi,null),e(wo,Fu),e(wo,el),e(el,Ru),k(s,Xd,b),k(s,Bt,b),w(sr,Bt,null),e(Bt,Eu),e(Bt,$o),e($o,Bu),e($o,tl),e(tl,Mu),e($o,zu),e($o,ol),e(ol,Cu),e($o,qu),e(Bt,xu),e(Bt,rr),e(rr,ju),e(rr,ar),e(ar,Pu),e(rr,Lu),e(Bt,Ou),e(Bt,_t),w(ir,_t,null),e(_t,Du),e(_t,Fo),e(Fo,Au),e(Fo,Fa),e(Fa,Nu),e(Fo,Iu),e(Fo,nl),e(nl,Su),e(Fo,Wu),e(_t,Uu),w(bn,_t,null),e(_t,Ku),w(vn,_t,null),e(_t,Hu),w(yn,_t,null),k(s,Yd,b),k(s,Ro,b),e(Ro,Tn),e(Tn,sl),w(lr,sl,null),e(Ro,Qu),e(Ro,rl),e(rl,Vu),k(s,Zd,b),k(s,rt,b),w(dr,rt,null),e(rt,Ju),e(rt,al),e(al,Gu),e(rt,Xu),e(rt,cr),e(cr,Yu),e(cr,Ra),e(Ra,Zu),e(cr,ef),e(rt,tf),e(rt,pr),e(pr,of),e(pr,mr),e(mr,nf),e(pr,sf),e(rt,rf),w(wn,rt,null),e(rt,af),e(rt,jt),w(hr,jt,null),e(jt,lf),e(jt,Eo),e(Eo,df),e(Eo,Ea),e(Ea,cf),e(Eo,pf),e(Eo,il),e(il,mf),e(Eo,hf),e(jt,uf),w($n,jt,null),e(jt,ff),w(Fn,jt,null),k(s,ec,b),k(s,Bo,b),e(Bo,Rn),e(Rn,ll),w(ur,ll,null),e(Bo,gf),e(Bo,dl),e(dl,_f),k(s,tc,b),k(s,at,b),w(fr,at,null),e(at,kf),e(at,gr),e(gr,bf),e(gr,cl),e(cl,vf),e(gr,yf),e(at,Tf),e(at,_r),e(_r,wf),e(_r,Ba),e(Ba,$f),e(_r,Ff),e(at,Rf),e(at,kr),e(kr,Ef),e(kr,br),e(br,Bf),e(kr,Mf),e(at,zf),w(En,at,null),e(at,Cf),e(at,kt),w(vr,kt,null),e(kt,qf),e(kt,Mo),e(Mo,xf),e(Mo,Ma),e(Ma,jf),e(Mo,Pf),e(Mo,pl),e(pl,Lf),e(Mo,Of),e(kt,Df),w(Bn,kt,null),e(kt,Af),w(Mn,kt,null),e(kt,Nf),w(zn,kt,null),k(s,oc,b),k(s,zo,b),e(zo,Cn),e(Cn,ml),w(yr,ml,null),e(zo,If),e(zo,hl),e(hl,Sf),k(s,nc,b),k(s,it,b),w(Tr,it,null),e(it,Wf),e(it,wr),e(wr,Uf),e(wr,ul),e(ul,Kf),e(wr,Hf),e(it,Qf),e(it,$r),e($r,Vf),e($r,za),e(za,Jf),e($r,Gf),e(it,Xf),e(it,Fr),e(Fr,Yf),e(Fr,Rr),e(Rr,Zf),e(Fr,eg),e(it,tg),w(qn,it,null),e(it,og),e(it,bt),w(Er,bt,null),e(bt,ng),e(bt,et),e(et,sg),e(et,fl),e(fl,rg),e(et,ag),e(et,gl),e(gl,ig),e(et,lg),e(et,_l),e(_l,dg),e(et,cg),e(et,kl),e(kl,pg),e(et,mg),e(et,bl),e(bl,hg),e(et,ug),e(et,vl),e(vl,fg),e(et,gg),e(et,yl),e(yl,_g),e(et,kg),e(bt,bg),e(bt,Br),e(Br,Mr),e(Mr,vg),e(Mr,Tl),e(Tl,yg),e(Mr,Tg),e(Br,wg),e(Br,zr),e(zr,$g),e(zr,wl),e(wl,Fg),e(zr,Rg),e(bt,Eg),e(bt,Y),e(Y,Bg),e(Y,$l),e($l,Mg),e(Y,zg),e(Y,Fl),e(Fl,Cg),e(Y,qg),e(Y,Rl),e(Rl,xg),e(Y,jg),e(Y,El),e(El,Pg),e(Y,Lg),e(Y,Bl),e(Bl,Og),e(Y,Dg),e(Y,Ml),e(Ml,Ag),e(Y,Ng),e(Y,zl),e(zl,Ig),e(Y,Sg),e(Y,Cl),e(Cl,Wg),e(Y,Ug),e(Y,ql),e(ql,Kg),e(Y,Hg),e(Y,xl),e(xl,Qg),e(Y,Vg),e(Y,jl),e(jl,Jg),e(Y,Gg),e(Y,Pl),e(Pl,Xg),e(Y,Yg),e(Y,Ll),e(Ll,Zg),e(Y,e_),e(Y,Ol),e(Ol,t_),e(Y,o_),e(Y,Dl),e(Dl,n_),e(Y,s_),e(Y,Al),e(Al,r_),e(Y,a_),e(Y,Nl),e(Nl,i_),e(Y,l_),e(Y,Il),e(Il,d_),e(Y,c_),e(Y,Sl),e(Sl,p_),e(Y,m_),e(Y,Wl),e(Wl,h_),e(Y,u_),e(bt,f_),w(xn,bt,null),k(s,sc,b),k(s,Co,b),e(Co,jn),e(jn,Ul),w(Cr,Ul,null),e(Co,g_),e(Co,Kl),e(Kl,__),k(s,rc,b),k(s,lt,b),w(qr,lt,null),e(lt,k_),e(lt,Hl),e(Hl,b_),e(lt,v_),e(lt,xr),e(xr,y_),e(xr,Ca),e(Ca,T_),e(xr,w_),e(lt,$_),e(lt,jr),e(jr,F_),e(jr,Pr),e(Pr,R_),e(jr,E_),e(lt,B_),w(Pn,lt,null),e(lt,M_),e(lt,vt),w(Lr,vt,null),e(vt,z_),e(vt,qo),e(qo,C_),e(qo,qa),e(qa,q_),e(qo,x_),e(qo,Ql),e(Ql,j_),e(qo,P_),e(vt,L_),w(Ln,vt,null),e(vt,O_),w(On,vt,null),e(vt,D_),w(Dn,vt,null),k(s,ac,b),k(s,xo,b),e(xo,An),e(An,Vl),w(Or,Vl,null),e(xo,A_),e(xo,Jl),e(Jl,N_),k(s,ic,b),k(s,dt,b),w(Dr,dt,null),e(dt,I_),e(dt,Gl),e(Gl,S_),e(dt,W_),e(dt,Ar),e(Ar,U_),e(Ar,xa),e(xa,K_),e(Ar,H_),e(dt,Q_),e(dt,Nr),e(Nr,V_),e(Nr,Ir),e(Ir,J_),e(Nr,G_),e(dt,X_),w(Nn,dt,null),e(dt,Y_),e(dt,Pt),w(Sr,Pt,null),e(Pt,Z_),e(Pt,jo),e(jo,ek),e(jo,ja),e(ja,tk),e(jo,ok),e(jo,Xl),e(Xl,nk),e(jo,sk),e(Pt,rk),w(In,Pt,null),e(Pt,ak),w(Sn,Pt,null),k(s,lc,b),k(s,Po,b),e(Po,Wn),e(Wn,Yl),w(Wr,Yl,null),e(Po,ik),e(Po,Zl),e(Zl,lk),k(s,dc,b),k(s,ct,b),w(Ur,ct,null),e(ct,dk),e(ct,ed),e(ed,ck),e(ct,pk),e(ct,Kr),e(Kr,mk),e(Kr,Pa),e(Pa,hk),e(Kr,uk),e(ct,fk),e(ct,Hr),e(Hr,gk),e(Hr,Qr),e(Qr,_k),e(Hr,kk),e(ct,bk),w(Un,ct,null),e(ct,vk),e(ct,yt),w(Vr,yt,null),e(yt,yk),e(yt,Lo),e(Lo,Tk),e(Lo,La),e(La,wk),e(Lo,$k),e(Lo,td),e(td,Fk),e(Lo,Rk),e(yt,Ek),w(Kn,yt,null),e(yt,Bk),w(Hn,yt,null),e(yt,Mk),w(Qn,yt,null),k(s,cc,b),k(s,Oo,b),e(Oo,Vn),e(Vn,od),w(Jr,od,null),e(Oo,zk),e(Oo,nd),e(nd,Ck),k(s,pc,b),k(s,pt,b),w(Gr,pt,null),e(pt,qk),e(pt,Do),e(Do,xk),e(Do,sd),e(sd,jk),e(Do,Pk),e(Do,rd),e(rd,Lk),e(Do,Ok),e(pt,Dk),e(pt,Xr),e(Xr,Ak),e(Xr,Oa),e(Oa,Nk),e(Xr,Ik),e(pt,Sk),e(pt,Yr),e(Yr,Wk),e(Yr,Zr),e(Zr,Uk),e(Yr,Kk),e(pt,Hk),w(Jn,pt,null),e(pt,Qk),e(pt,Tt),w(ea,Tt,null),e(Tt,Vk),e(Tt,Ao),e(Ao,Jk),e(Ao,Da),e(Da,Gk),e(Ao,Xk),e(Ao,ad),e(ad,Yk),e(Ao,Zk),e(Tt,eb),w(Gn,Tt,null),e(Tt,tb),w(Xn,Tt,null),e(Tt,ob),w(Yn,Tt,null),mc=!0},p(s,[b]){const ta={};b&2&&(ta.$$scope={dirty:b,ctx:s}),De.$set(ta);const id={};b&2&&(id.$$scope={dirty:b,ctx:s}),Uo.$set(id);const ld={};b&2&&(ld.$$scope={dirty:b,ctx:s}),Qo.$set(ld);const dd={};b&2&&(dd.$$scope={dirty:b,ctx:s}),Jo.$set(dd);const oa={};b&2&&(oa.$$scope={dirty:b,ctx:s}),Go.$set(oa);const cd={};b&2&&(cd.$$scope={dirty:b,ctx:s}),Yo.$set(cd);const pd={};b&2&&(pd.$$scope={dirty:b,ctx:s}),Zo.$set(pd);const md={};b&2&&(md.$$scope={dirty:b,ctx:s}),tn.$set(md);const na={};b&2&&(na.$$scope={dirty:b,ctx:s}),on.$set(na);const hd={};b&2&&(hd.$$scope={dirty:b,ctx:s}),nn.$set(hd);const ud={};b&2&&(ud.$$scope={dirty:b,ctx:s}),rn.$set(ud);const fd={};b&2&&(fd.$$scope={dirty:b,ctx:s}),an.$set(fd);const gd={};b&2&&(gd.$$scope={dirty:b,ctx:s}),ln.$set(gd);const _d={};b&2&&(_d.$$scope={dirty:b,ctx:s}),dn.$set(_d);const kd={};b&2&&(kd.$$scope={dirty:b,ctx:s}),cn.$set(kd);const sa={};b&2&&(sa.$$scope={dirty:b,ctx:s}),mn.$set(sa);const bd={};b&2&&(bd.$$scope={dirty:b,ctx:s}),hn.$set(bd);const vd={};b&2&&(vd.$$scope={dirty:b,ctx:s}),fn.$set(vd);const yd={};b&2&&(yd.$$scope={dirty:b,ctx:s}),gn.$set(yd);const Qt={};b&2&&(Qt.$$scope={dirty:b,ctx:s}),_n.$set(Qt);const No={};b&2&&(No.$$scope={dirty:b,ctx:s}),bn.$set(No);const Td={};b&2&&(Td.$$scope={dirty:b,ctx:s}),vn.$set(Td);const wd={};b&2&&(wd.$$scope={dirty:b,ctx:s}),yn.$set(wd);const Io={};b&2&&(Io.$$scope={dirty:b,ctx:s}),wn.$set(Io);const $d={};b&2&&($d.$$scope={dirty:b,ctx:s}),$n.$set($d);const Fd={};b&2&&(Fd.$$scope={dirty:b,ctx:s}),Fn.$set(Fd);const ra={};b&2&&(ra.$$scope={dirty:b,ctx:s}),En.$set(ra);const Rd={};b&2&&(Rd.$$scope={dirty:b,ctx:s}),Bn.$set(Rd);const Ed={};b&2&&(Ed.$$scope={dirty:b,ctx:s}),Mn.$set(Ed);const Bd={};b&2&&(Bd.$$scope={dirty:b,ctx:s}),zn.$set(Bd);const mt={};b&2&&(mt.$$scope={dirty:b,ctx:s}),qn.$set(mt);const aa={};b&2&&(aa.$$scope={dirty:b,ctx:s}),xn.$set(aa);const Md={};b&2&&(Md.$$scope={dirty:b,ctx:s}),Pn.$set(Md);const ia={};b&2&&(ia.$$scope={dirty:b,ctx:s}),Ln.$set(ia);const zd={};b&2&&(zd.$$scope={dirty:b,ctx:s}),On.$set(zd);const So={};b&2&&(So.$$scope={dirty:b,ctx:s}),Dn.$set(So);const Cd={};b&2&&(Cd.$$scope={dirty:b,ctx:s}),Nn.$set(Cd);const la={};b&2&&(la.$$scope={dirty:b,ctx:s}),In.$set(la);const Aa={};b&2&&(Aa.$$scope={dirty:b,ctx:s}),Sn.$set(Aa);const qd={};b&2&&(qd.$$scope={dirty:b,ctx:s}),Un.$set(qd);const Na={};b&2&&(Na.$$scope={dirty:b,ctx:s}),Kn.$set(Na);const xd={};b&2&&(xd.$$scope={dirty:b,ctx:s}),Hn.$set(xd);const da={};b&2&&(da.$$scope={dirty:b,ctx:s}),Qn.$set(da);const ca={};b&2&&(ca.$$scope={dirty:b,ctx:s}),Jn.$set(ca);const jd={};b&2&&(jd.$$scope={dirty:b,ctx:s}),Gn.$set(jd);const Vt={};b&2&&(Vt.$$scope={dirty:b,ctx:s}),Xn.$set(Vt);const Pd={};b&2&&(Pd.$$scope={dirty:b,ctx:s}),Yn.$set(Pd)},i(s){mc||($(l.$$.fragment,s),$(E.$$.fragment,s),$(x.$$.fragment,s),$(pe.$$.fragment,s),$(De.$$.fragment,s),$(W.$$.fragment,s),$(me.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(gs.$$.fragment,s),$(Uo.$$.fragment,s),$(_s.$$.fragment,s),$(ks.$$.fragment,s),$(bs.$$.fragment,s),$(ys.$$.fragment,s),$(ws.$$.fragment,s),$(Fs.$$.fragment,s),$(Qo.$$.fragment,s),$(Rs.$$.fragment,s),$(Es.$$.fragment,s),$(Bs.$$.fragment,s),$(xs.$$.fragment,s),$(Jo.$$.fragment,s),$(Go.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(Os.$$.fragment,s),$(Yo.$$.fragment,s),$(Zo.$$.fragment,s),$(Ds.$$.fragment,s),$(As.$$.fragment,s),$(Is.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(nn.$$.fragment,s),$(Ss.$$.fragment,s),$(Ws.$$.fragment,s),$(Hs.$$.fragment,s),$(rn.$$.fragment,s),$(an.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(Qs.$$.fragment,s),$(Vs.$$.fragment,s),$(Xs.$$.fragment,s),$(mn.$$.fragment,s),$(hn.$$.fragment,s),$(Ys.$$.fragment,s),$(Zs.$$.fragment,s),$(or.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(nr.$$.fragment,s),$(sr.$$.fragment,s),$(ir.$$.fragment,s),$(bn.$$.fragment,s),$(vn.$$.fragment,s),$(yn.$$.fragment,s),$(lr.$$.fragment,s),$(dr.$$.fragment,s),$(wn.$$.fragment,s),$(hr.$$.fragment,s),$($n.$$.fragment,s),$(Fn.$$.fragment,s),$(ur.$$.fragment,s),$(fr.$$.fragment,s),$(En.$$.fragment,s),$(vr.$$.fragment,s),$(Bn.$$.fragment,s),$(Mn.$$.fragment,s),$(zn.$$.fragment,s),$(yr.$$.fragment,s),$(Tr.$$.fragment,s),$(qn.$$.fragment,s),$(Er.$$.fragment,s),$(xn.$$.fragment,s),$(Cr.$$.fragment,s),$(qr.$$.fragment,s),$(Pn.$$.fragment,s),$(Lr.$$.fragment,s),$(Ln.$$.fragment,s),$(On.$$.fragment,s),$(Dn.$$.fragment,s),$(Or.$$.fragment,s),$(Dr.$$.fragment,s),$(Nn.$$.fragment,s),$(Sr.$$.fragment,s),$(In.$$.fragment,s),$(Sn.$$.fragment,s),$(Wr.$$.fragment,s),$(Ur.$$.fragment,s),$(Un.$$.fragment,s),$(Vr.$$.fragment,s),$(Kn.$$.fragment,s),$(Hn.$$.fragment,s),$(Qn.$$.fragment,s),$(Jr.$$.fragment,s),$(Gr.$$.fragment,s),$(Jn.$$.fragment,s),$(ea.$$.fragment,s),$(Gn.$$.fragment,s),$(Xn.$$.fragment,s),$(Yn.$$.fragment,s),mc=!0)},o(s){F(l.$$.fragment,s),F(E.$$.fragment,s),F(x.$$.fragment,s),F(pe.$$.fragment,s),F(De.$$.fragment,s),F(W.$$.fragment,s),F(me.$$.fragment,s),F(ms.$$.fragment,s),F(us.$$.fragment,s),F(gs.$$.fragment,s),F(Uo.$$.fragment,s),F(_s.$$.fragment,s),F(ks.$$.fragment,s),F(bs.$$.fragment,s),F(ys.$$.fragment,s),F(ws.$$.fragment,s),F(Fs.$$.fragment,s),F(Qo.$$.fragment,s),F(Rs.$$.fragment,s),F(Es.$$.fragment,s),F(Bs.$$.fragment,s),F(xs.$$.fragment,s),F(Jo.$$.fragment,s),F(Go.$$.fragment,s),F(js.$$.fragment,s),F(Ps.$$.fragment,s),F(Os.$$.fragment,s),F(Yo.$$.fragment,s),F(Zo.$$.fragment,s),F(Ds.$$.fragment,s),F(As.$$.fragment,s),F(Is.$$.fragment,s),F(tn.$$.fragment,s),F(on.$$.fragment,s),F(nn.$$.fragment,s),F(Ss.$$.fragment,s),F(Ws.$$.fragment,s),F(Hs.$$.fragment,s),F(rn.$$.fragment,s),F(an.$$.fragment,s),F(ln.$$.fragment,s),F(dn.$$.fragment,s),F(cn.$$.fragment,s),F(Qs.$$.fragment,s),F(Vs.$$.fragment,s),F(Xs.$$.fragment,s),F(mn.$$.fragment,s),F(hn.$$.fragment,s),F(Ys.$$.fragment,s),F(Zs.$$.fragment,s),F(or.$$.fragment,s),F(fn.$$.fragment,s),F(gn.$$.fragment,s),F(_n.$$.fragment,s),F(nr.$$.fragment,s),F(sr.$$.fragment,s),F(ir.$$.fragment,s),F(bn.$$.fragment,s),F(vn.$$.fragment,s),F(yn.$$.fragment,s),F(lr.$$.fragment,s),F(dr.$$.fragment,s),F(wn.$$.fragment,s),F(hr.$$.fragment,s),F($n.$$.fragment,s),F(Fn.$$.fragment,s),F(ur.$$.fragment,s),F(fr.$$.fragment,s),F(En.$$.fragment,s),F(vr.$$.fragment,s),F(Bn.$$.fragment,s),F(Mn.$$.fragment,s),F(zn.$$.fragment,s),F(yr.$$.fragment,s),F(Tr.$$.fragment,s),F(qn.$$.fragment,s),F(Er.$$.fragment,s),F(xn.$$.fragment,s),F(Cr.$$.fragment,s),F(qr.$$.fragment,s),F(Pn.$$.fragment,s),F(Lr.$$.fragment,s),F(Ln.$$.fragment,s),F(On.$$.fragment,s),F(Dn.$$.fragment,s),F(Or.$$.fragment,s),F(Dr.$$.fragment,s),F(Nn.$$.fragment,s),F(Sr.$$.fragment,s),F(In.$$.fragment,s),F(Sn.$$.fragment,s),F(Wr.$$.fragment,s),F(Ur.$$.fragment,s),F(Un.$$.fragment,s),F(Vr.$$.fragment,s),F(Kn.$$.fragment,s),F(Hn.$$.fragment,s),F(Qn.$$.fragment,s),F(Jr.$$.fragment,s),F(Gr.$$.fragment,s),F(Jn.$$.fragment,s),F(ea.$$.fragment,s),F(Gn.$$.fragment,s),F(Xn.$$.fragment,s),F(Yn.$$.fragment,s),mc=!1},d(s){t(d),s&&t(g),s&&t(c),R(l),s&&t(fe),s&&t(N),R(E),s&&t(ge),s&&t(S),s&&t(_e),s&&t(U),s&&t(ke),s&&t(K),s&&t(ne),s&&t(q),s&&t(be),s&&t(H),s&&t(ve),s&&t(I),R(x),s&&t(ye),s&&t(D),R(pe),R(De),s&&t(Ke),s&&t(Oe),R(W),s&&t(He),s&&t(oe),R(me),R(ms),R(us),R(gs),R(Uo),R(_s),s&&t(Ld),s&&t(io),R(ks),s&&t(Od),s&&t(nt),R(bs),R(ys),R(ws),R(Fs),R(Qo),R(Rs),s&&t(Dd),s&&t(lo),R(Es),s&&t(Ad),s&&t(ut),R(Bs),R(xs),R(Jo),R(Go),s&&t(Nd),s&&t(po),R(js),s&&t(Id),s&&t(Kt),R(Ps),R(Os),R(Yo),R(Zo),s&&t(Sd),s&&t(uo),R(Ds),s&&t(Wd),s&&t(Ht),R(As),R(Is),R(tn),R(on),R(nn),s&&t(Ud),s&&t(_o),R(Ss),s&&t(Kd),s&&t(Ft),R(Ws),R(Hs),R(rn),R(an),R(ln),R(dn),R(cn),s&&t(Hd),s&&t(bo),R(Qs),s&&t(Qd),s&&t(Rt),R(Vs),R(Xs),R(mn),R(hn),s&&t(Vd),s&&t(yo),R(Ys),s&&t(Jd),s&&t(Et),R(Zs),R(or),R(fn),R(gn),R(_n),s&&t(Gd),s&&t(wo),R(nr),s&&t(Xd),s&&t(Bt),R(sr),R(ir),R(bn),R(vn),R(yn),s&&t(Yd),s&&t(Ro),R(lr),s&&t(Zd),s&&t(rt),R(dr),R(wn),R(hr),R($n),R(Fn),s&&t(ec),s&&t(Bo),R(ur),s&&t(tc),s&&t(at),R(fr),R(En),R(vr),R(Bn),R(Mn),R(zn),s&&t(oc),s&&t(zo),R(yr),s&&t(nc),s&&t(it),R(Tr),R(qn),R(Er),R(xn),s&&t(sc),s&&t(Co),R(Cr),s&&t(rc),s&&t(lt),R(qr),R(Pn),R(Lr),R(Ln),R(On),R(Dn),s&&t(ac),s&&t(xo),R(Or),s&&t(ic),s&&t(dt),R(Dr),R(Nn),R(Sr),R(In),R(Sn),s&&t(lc),s&&t(Po),R(Wr),s&&t(dc),s&&t(ct),R(Ur),R(Un),R(Vr),R(Kn),R(Hn),R(Qn),s&&t(cc),s&&t(Oo),R(Jr),s&&t(pc),s&&t(pt),R(Gr),R(Jn),R(ea),R(Gn),R(Xn),R(Yn)}}}const YT={local:"rembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.RemBertConfig",title:"RemBertConfig"},{local:"transformers.RemBertTokenizer",title:"RemBertTokenizer"},{local:"transformers.RemBertTokenizerFast",title:"RemBertTokenizerFast"},{local:"transformers.RemBertModel",title:"RemBertModel"},{local:"transformers.RemBertForCausalLM",title:"RemBertForCausalLM"},{local:"transformers.RemBertForMaskedLM",title:"RemBertForMaskedLM"},{local:"transformers.RemBertForSequenceClassification",title:"RemBertForSequenceClassification"},{local:"transformers.RemBertForMultipleChoice",title:"RemBertForMultipleChoice"},{local:"transformers.RemBertForTokenClassification",title:"RemBertForTokenClassification"},{local:"transformers.RemBertForQuestionAnswering",title:"RemBertForQuestionAnswering"},{local:"transformers.TFRemBertModel",title:"TFRemBertModel"},{local:"transformers.TFRemBertForMaskedLM",title:"TFRemBertForMaskedLM"},{local:"transformers.TFRemBertForCausalLM",title:"TFRemBertForCausalLM"},{local:"transformers.TFRemBertForSequenceClassification",title:"TFRemBertForSequenceClassification"},{local:"transformers.TFRemBertForMultipleChoice",title:"TFRemBertForMultipleChoice"},{local:"transformers.TFRemBertForTokenClassification",title:"TFRemBertForTokenClassification"},{local:"transformers.TFRemBertForQuestionAnswering",title:"TFRemBertForQuestionAnswering"}],title:"RemBERT"};function ZT(M){return nT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class a2 extends Zy{constructor(d){super();eT(this,d,ZT,XT,tT,{})}}export{a2 as default,YT as metadata};
