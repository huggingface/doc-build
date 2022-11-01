import{S as Ix,i as Dx,s as Sx,e as s,k as p,w as y,t as o,M as Bx,c as a,d as t,m as h,a as r,x as T,h as n,b as u,G as e,g as _,y as w,q as M,o as $,B as F,v as Wx,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Ux(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaConfig, XLMRobertaModel

# Initializing a XLM-RoBERTa xlm-roberta-base style configuration
configuration = XLMRobertaConfig()

# Initializing a model (with random weights) from the xlm-roberta-base style configuration
model = XLMRobertaModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaConfig, XLMRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a XLM-RoBERTa xlm-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = XLMRobertaConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the xlm-roberta-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=o("Examples:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Examples:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Qx(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Hx(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaModel
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-base")
model = XLMRobertaModel.from_pretrained("xlm-roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaModel.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Kx(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Vx(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForCausalLM, XLMRobertaConfig
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("roberta-base")
config = XLMRobertaConfig.from_pretrained("roberta-base")
config.is_decoder = True
model = XLMRobertaForCausalLM.from_pretrained("roberta-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForCausalLM, XLMRobertaConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = XLMRobertaConfig.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Jx(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function Gx(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForMaskedLM
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-base")
model = XLMRobertaForMaskedLM.from_pretrained("xlm-roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function Yx(x){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Zx(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function eL(x){let d,g,c,f,k;return f=new fe({props:{code:`import torch
from transformers import XLMRobertaTokenizer, XLMRobertaForSequenceClassification

tokenizer = XLMRobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = XLMRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of single-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function tL(x){let d,g;return d=new fe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = XLMRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function oL(x){let d,g,c,f,k;return f=new fe({props:{code:`import torch
from transformers import XLMRobertaTokenizer, XLMRobertaForSequenceClassification

tokenizer = XLMRobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = XLMRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function nL(x){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMRobertaForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function sL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function aL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForMultipleChoice
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("xlm-roberta-base")
model = XLMRobertaForMultipleChoice.from_pretrained("xlm-roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function rL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function iL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForTokenClassification
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = XLMRobertaForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function lL(x){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function dL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function cL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForQuestionAnswering
import torch

tokenizer = XLMRobertaTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = XLMRobertaForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMRobertaTokenizer, XLMRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMRobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function pL(x){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function hL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function mL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function uL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function gL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function _L(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function bL(x){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function vL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function yL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TL(x){let d,g;return d=new fe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function ML(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function $L(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function FL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function xL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function LL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFRobertaForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function RL(x){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function EL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ve=o(" and "),B=s("code"),Re=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(v),m=a(v,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(v),L=a(v,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ve=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(v),q=a(v,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(v),j=a(v,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(v,l,E),_(v,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ve),e(L,B),e(B,Re),e(L,ye),e(L,W),e(W,ge),e(L,Ee),_(v,ne,E),_(v,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(v,ee,E),_(v,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(L),v&&t(ne),v&&t(q),v&&t(ee),v&&t(j)}}}function zL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function qL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFRobertaForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function XL(x){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function CL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function jL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function PL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function AL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function OL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function NL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function IL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function DL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function SL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function BL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function WL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function UL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForQuestionAnswering.from_pretrained("roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function QL(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ve,B,Re,ye,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie,v,E,Ue,oe,Qe,We,z,Oe,He,_e,Ke,De,I,G,Se,Ve,Y,Ne,Je,Ae,Ge,Z,Ye,jl,qf,Xf,Pl,Cf,jf,Pf,$n,km,zo,Fn,dc,ua,Af,cc,Of,vm,st,fa,Nf,no,If,Al,Df,Sf,Ol,Bf,Wf,ga,Uf,Qf,Hf,_a,Kf,Nl,Vf,Jf,Gf,uo,ba,Yf,pc,Zf,eg,ka,Il,tg,hc,og,ng,Dl,sg,mc,ag,rg,xn,va,ig,ya,lg,uc,dg,cg,pg,Ln,Ta,hg,fc,mg,ug,Sl,wa,ym,qo,Rn,gc,Ma,fg,_c,gg,Tm,yt,$a,_g,Ut,bg,bc,kg,vg,Bl,yg,Tg,Wl,wg,Mg,Fa,$g,Fg,xg,xa,Lg,Ul,Rg,Eg,zg,fo,La,qg,kc,Xg,Cg,Ra,Ql,jg,vc,Pg,Ag,Hl,Og,yc,Ng,Ig,En,Ea,Dg,Tc,Sg,wm,Xo,zn,wc,za,Bg,Mc,Wg,Mm,Ze,qa,Ug,$c,Qg,Hg,Xa,Kg,Kl,Vg,Jg,Gg,Ca,Yg,ja,Zg,e_,t_,Pa,o_,Fc,n_,s_,a_,ut,r_,xc,i_,l_,Lc,d_,c_,Rc,p_,h_,Ec,m_,u_,zc,f_,g_,qc,__,b_,k_,qn,v_,Xc,y_,T_,Aa,w_,M_,Qt,Oa,$_,Co,F_,Vl,x_,L_,Cc,R_,E_,z_,Xn,q_,Cn,$m,jo,jn,jc,Na,X_,Pc,C_,Fm,Tt,Ia,j_,Da,P_,Ac,A_,O_,N_,Sa,I_,Jl,D_,S_,B_,Ba,W_,Wa,U_,Q_,H_,Ht,Ua,K_,Po,V_,Gl,J_,G_,Oc,Y_,Z_,eb,Pn,tb,An,xm,Ao,On,Nc,Qa,ob,Ic,nb,Lm,wt,Ha,sb,Ka,ab,Dc,rb,ib,lb,Va,db,Yl,cb,pb,hb,Ja,mb,Ga,ub,fb,gb,Lt,Ya,_b,Oo,bb,Zl,kb,vb,Sc,yb,Tb,wb,Nn,Mb,In,$b,Dn,Rm,No,Sn,Bc,Za,Fb,Wc,xb,Em,Mt,er,Lb,Uc,Rb,Eb,tr,zb,ed,qb,Xb,Cb,or,jb,nr,Pb,Ab,Ob,mt,sr,Nb,Io,Ib,td,Db,Sb,Qc,Bb,Wb,Ub,Bn,Qb,Wn,Hb,Un,Kb,Qn,Vb,Hn,zm,Do,Kn,Hc,ar,Jb,Kc,Gb,qm,$t,rr,Yb,Vc,Zb,ek,ir,tk,od,ok,nk,sk,lr,ak,dr,rk,ik,lk,Kt,cr,dk,So,ck,nd,pk,hk,Jc,mk,uk,fk,Vn,gk,Jn,Xm,Bo,Gn,Gc,pr,_k,Yc,bk,Cm,Ft,hr,kk,Zc,vk,yk,mr,Tk,sd,wk,Mk,$k,ur,Fk,fr,xk,Lk,Rk,Rt,gr,Ek,Wo,zk,ad,qk,Xk,ep,Ck,jk,Pk,Yn,Ak,Zn,Ok,es,jm,Uo,ts,tp,_r,Nk,op,Ik,Pm,xt,br,Dk,Qo,Sk,np,Bk,Wk,sp,Uk,Qk,Hk,kr,Kk,rd,Vk,Jk,Gk,vr,Yk,yr,Zk,ev,tv,Et,Tr,ov,Ho,nv,id,sv,av,ap,rv,iv,lv,os,dv,ns,cv,ss,Am,Ko,as,rp,wr,pv,ip,hv,Om,at,Mr,mv,lp,uv,fv,$r,gv,ld,_v,bv,kv,Fr,vv,xr,yv,Tv,wv,rs,Mv,Lr,$v,dd,Fv,xv,Lv,Vt,Rr,Rv,Vo,Ev,cd,zv,qv,dp,Xv,Cv,jv,is,Pv,ls,Nm,Jo,ds,cp,Er,Av,pp,Ov,Im,rt,zr,Nv,qr,Iv,hp,Dv,Sv,Bv,Xr,Wv,pd,Uv,Qv,Hv,Cr,Kv,jr,Vv,Jv,Gv,cs,Yv,Pr,Zv,hd,ey,ty,oy,zt,Ar,ny,Go,sy,md,ay,ry,mp,iy,ly,dy,ps,cy,hs,py,ms,Dm,Yo,us,up,Or,hy,fp,my,Sm,it,Nr,uy,gp,fy,gy,Ir,_y,ud,by,ky,vy,Dr,yy,Sr,Ty,wy,My,fs,$y,Br,Fy,fd,xy,Ly,Ry,qt,Wr,Ey,Zo,zy,gd,qy,Xy,_p,Cy,jy,Py,gs,Ay,_s,Oy,bs,Bm,en,ks,bp,Ur,Ny,kp,Iy,Wm,lt,Qr,Dy,vp,Sy,By,Hr,Wy,_d,Uy,Qy,Hy,Kr,Ky,Vr,Vy,Jy,Gy,vs,Yy,Jr,Zy,bd,eT,tT,oT,Jt,Gr,nT,tn,sT,kd,aT,rT,yp,iT,lT,dT,ys,cT,Ts,Um,on,ws,Tp,Yr,pT,wp,hT,Qm,dt,Zr,mT,Mp,uT,fT,ei,gT,vd,_T,bT,kT,ti,vT,oi,yT,TT,wT,Ms,MT,ni,$T,yd,FT,xT,LT,Xt,si,RT,nn,ET,Td,zT,qT,$p,XT,CT,jT,$s,PT,Fs,AT,xs,Hm,sn,Ls,Fp,ai,OT,xp,NT,Km,ct,ri,IT,an,DT,Lp,ST,BT,Rp,WT,UT,QT,ii,HT,wd,KT,VT,JT,li,GT,di,YT,ZT,ew,Rs,tw,ci,ow,Ep,nw,sw,aw,Ct,pi,rw,rn,iw,Md,lw,dw,zp,cw,pw,hw,Es,mw,zs,uw,qs,Vm,ln,Xs,qp,hi,fw,Xp,gw,Jm,pt,mi,_w,ui,bw,$d,kw,vw,yw,fi,Tw,gi,ww,Mw,$w,Cp,Fw,xw,so,jp,_i,Lw,Rw,Pp,bi,Ew,zw,Ap,ki,qw,Xw,Op,vi,Cw,jw,yi,Pw,Fd,Aw,Ow,Nw,Gt,Ti,Iw,dn,Dw,Np,Sw,Bw,Ip,Ww,Uw,Qw,Cs,Hw,js,Gm,cn,Ps,Dp,wi,Kw,Sp,Vw,Ym,ht,Mi,Jw,pn,Gw,Bp,Yw,Zw,xd,e2,t2,o2,$i,n2,Fi,s2,a2,r2,Wp,i2,l2,ao,Up,xi,d2,c2,Qp,Li,p2,h2,Hp,Ri,m2,u2,Kp,Ei,f2,g2,zi,_2,Ld,b2,k2,v2,Yt,qi,y2,hn,T2,Vp,w2,M2,Jp,$2,F2,x2,As,L2,Os,Zm,mn,Ns,Gp,Xi,R2,Yp,E2,eu,et,Ci,z2,Zp,q2,X2,ji,C2,Rd,j2,P2,A2,Pi,O2,Ai,N2,I2,D2,eh,S2,B2,ro,th,Oi,W2,U2,oh,Ni,Q2,H2,nh,Ii,K2,V2,sh,Di,J2,G2,Si,Y2,Ed,Z2,eM,tM,Zt,Bi,oM,un,nM,ah,sM,aM,rh,rM,iM,lM,Is,dM,Ds,tu,fn,Ss,ih,Wi,cM,lh,pM,ou,tt,Ui,hM,dh,mM,uM,Qi,fM,zd,gM,_M,bM,Hi,kM,Ki,vM,yM,TM,ch,wM,MM,io,ph,Vi,$M,FM,hh,Ji,xM,LM,mh,Gi,RM,EM,uh,Yi,zM,qM,Zi,XM,qd,CM,jM,PM,eo,el,AM,gn,OM,fh,NM,IM,gh,DM,SM,BM,Bs,WM,Ws,nu,_n,Us,_h,tl,UM,bh,QM,su,ot,ol,HM,kh,KM,VM,nl,JM,Xd,GM,YM,ZM,sl,e$,al,t$,o$,n$,vh,s$,a$,lo,yh,rl,r$,i$,Th,il,l$,d$,wh,ll,c$,p$,Mh,dl,h$,m$,cl,u$,Cd,f$,g$,_$,to,pl,b$,bn,k$,$h,v$,y$,Fh,T$,w$,M$,Qs,$$,Hs,au,kn,Ks,xh,hl,F$,Lh,x$,ru,nt,ml,L$,vn,R$,Rh,E$,z$,Eh,q$,X$,C$,ul,j$,jd,P$,A$,O$,fl,N$,gl,I$,D$,S$,zh,B$,W$,co,qh,_l,U$,Q$,Xh,bl,H$,K$,Ch,kl,V$,J$,jh,vl,G$,Y$,yl,Z$,Pd,e1,t1,o1,oo,Tl,n1,yn,s1,Ph,a1,r1,Ah,i1,l1,d1,Vs,c1,Js,iu;return l=new Be({}),L=new Be({}),E=new Be({}),Oe=new A({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the XLM-RoBERTa model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.XLMRobertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.XLMRobertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.XLMRobertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.XLMRobertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.XLMRobertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.XLMRobertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.XLMRobertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.XLMRobertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or
<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.XLMRobertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLMRobertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMRobertaConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.XLMRobertaConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.XLMRobertaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L45"}}),$n=new me({props:{anchor:"transformers.XLMRobertaConfig.example",$$slots:{default:[Ux]},$$scope:{ctx:x}}}),ua=new Be({}),fa=new A({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMRobertaTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMRobertaTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L63"}}),ba=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L202",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),va=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ta=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L256",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wa=new A({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L313"}}),Ma=new Be({}),$a=new A({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L82"}}),La=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L171",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L197",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),za=new Be({}),qa=new A({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L693"}}),Oa=new A({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L738",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Ie({props:{$$slots:{default:[Qx]},$$scope:{ctx:x}}}),Cn=new me({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[Hx]},$$scope:{ctx:x}}}),Na=new Be({}),Ia=new A({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L881"}}),Ua=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L907",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new Ie({props:{$$slots:{default:[Kx]},$$scope:{ctx:x}}}),An=new me({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[Vx]},$$scope:{ctx:x}}}),Qa=new Be({}),Ha=new A({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1037"}}),Ya=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1066",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Nn=new Ie({props:{$$slots:{default:[Jx]},$$scope:{ctx:x}}}),In=new me({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[Gx]},$$scope:{ctx:x}}}),Dn=new me({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example-2",$$slots:{default:[Yx]},$$scope:{ctx:x}}}),Za=new Be({}),er=new A({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1174"}}),sr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1188",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Bn=new Ie({props:{$$slots:{default:[Zx]},$$scope:{ctx:x}}}),Wn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[eL]},$$scope:{ctx:x}}}),Un=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[tL]},$$scope:{ctx:x}}}),Qn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-3",$$slots:{default:[oL]},$$scope:{ctx:x}}}),Hn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-4",$$slots:{default:[nL]},$$scope:{ctx:x}}}),ar=new Be({}),rr=new A({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1275"}}),cr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1288",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Vn=new Ie({props:{$$slots:{default:[sL]},$$scope:{ctx:x}}}),Jn=new me({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[aL]},$$scope:{ctx:x}}}),pr=new Be({}),hr=new A({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1371"}}),gr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1389",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),Yn=new Ie({props:{$$slots:{default:[rL]},$$scope:{ctx:x}}}),Zn=new me({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[iL]},$$scope:{ctx:x}}}),es=new me({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example-2",$$slots:{default:[lL]},$$scope:{ctx:x}}}),_r=new Be({}),br=new A({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1482"}}),Tr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1496",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
>XLMRobertaConfig</a>) and inputs.</p>
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
`}}),os=new Ie({props:{$$slots:{default:[dL]},$$scope:{ctx:x}}}),ns=new me({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[cL]},$$scope:{ctx:x}}}),ss=new me({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example-2",$$slots:{default:[pL]},$$scope:{ctx:x}}}),wr=new Be({}),Mr=new A({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L85"}}),rs=new Ie({props:{$$slots:{default:[hL]},$$scope:{ctx:x}}}),Rr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXLMRobertaModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L929",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new Ie({props:{$$slots:{default:[mL]},$$scope:{ctx:x}}}),ls=new me({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[uL]},$$scope:{ctx:x}}}),Er=new Be({}),zr=new A({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L111"}}),cs=new Ie({props:{$$slots:{default:[fL]},$$scope:{ctx:x}}}),Ar=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1085",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),ps=new Ie({props:{$$slots:{default:[gL]},$$scope:{ctx:x}}}),hs=new me({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[_L]},$$scope:{ctx:x}}}),ms=new me({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[bL]},$$scope:{ctx:x}}}),Or=new Be({}),Nr=new A({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L127"}}),fs=new Ie({props:{$$slots:{default:[kL]},$$scope:{ctx:x}}}),Wr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1344",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),gs=new Ie({props:{$$slots:{default:[vL]},$$scope:{ctx:x}}}),_s=new me({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[yL]},$$scope:{ctx:x}}}),bs=new me({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[TL]},$$scope:{ctx:x}}}),Ur=new Be({}),Qr=new A({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L175"}}),vs=new Ie({props:{$$slots:{default:[wL]},$$scope:{ctx:x}}}),Gr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),ys=new Ie({props:{$$slots:{default:[ML]},$$scope:{ctx:x}}}),Ts=new me({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[$L]},$$scope:{ctx:x}}}),Yr=new Be({}),Zr=new A({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L143"}}),Ms=new Ie({props:{$$slots:{default:[FL]},$$scope:{ctx:x}}}),si=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1556",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),$s=new Ie({props:{$$slots:{default:[xL]},$$scope:{ctx:x}}}),Fs=new me({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[LL]},$$scope:{ctx:x}}}),xs=new me({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[RL]},$$scope:{ctx:x}}}),ai=new Be({}),ri=new A({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L159"}}),Rs=new Ie({props:{$$slots:{default:[EL]},$$scope:{ctx:x}}}),pi=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1642",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
`}}),Es=new Ie({props:{$$slots:{default:[zL]},$$scope:{ctx:x}}}),zs=new me({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[qL]},$$scope:{ctx:x}}}),qs=new me({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[XL]},$$scope:{ctx:x}}}),hi=new Be({}),mi=new A({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L68"}}),Ti=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new Ie({props:{$$slots:{default:[CL]},$$scope:{ctx:x}}}),js=new me({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[jL]},$$scope:{ctx:x}}}),wi=new Be({}),Mi=new A({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L81"}}),qi=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new Ie({props:{$$slots:{default:[PL]},$$scope:{ctx:x}}}),Os=new me({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[AL]},$$scope:{ctx:x}}}),Xi=new Be({}),Ci=new A({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L97"}}),Bi=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Is=new Ie({props:{$$slots:{default:[OL]},$$scope:{ctx:x}}}),Ds=new me({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[NL]},$$scope:{ctx:x}}}),Wi=new Be({}),Ui=new A({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L113"}}),el=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new Ie({props:{$$slots:{default:[IL]},$$scope:{ctx:x}}}),Ws=new me({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[DL]},$$scope:{ctx:x}}}),tl=new Be({}),ol=new A({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L129"}}),pl=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new Ie({props:{$$slots:{default:[SL]},$$scope:{ctx:x}}}),Hs=new me({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[BL]},$$scope:{ctx:x}}}),hl=new Be({}),ml=new A({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L145"}}),Tl=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vs=new Ie({props:{$$slots:{default:[WL]},$$scope:{ctx:x}}}),Js=new me({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[UL]},$$scope:{ctx:x}}}),{c(){d=s("meta"),g=p(),c=s("h1"),f=s("a"),k=s("span"),y(l.$$.fragment),m=p(),R=s("span"),Me=o("XLM-RoBERTa"),be=p(),O=s("h2"),re=s("a"),te=s("span"),y(L.$$.fragment),$e=p(),U=s("span"),Fe=o("Overview"),ke=p(),D=s("p"),xe=o("The XLM-RoBERTa model was proposed in "),le=s("a"),H=o("Unsupervised Cross-lingual Representation Learning at Scale"),Le=o(` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),ve=p(),B=s("p"),Re=o("The abstract from the paper is the following:"),ye=p(),W=s("p"),ge=s("em"),Ee=o(`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),ne=p(),q=s("p"),X=o("Tips:"),Te=p(),S=s("ul"),de=s("li"),ze=o(`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Q=s("code"),qe=o("lang"),Xe=o(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),C=p(),ce=s("li"),K=o("This implementation is the same as RoBERTa. Refer to the "),he=s("a"),Ce=o("documentation of RoBERTa"),V=o(` for usage examples
as well as the information relative to the inputs and outputs.`),we=p(),se=s("p"),N=o("This model was contributed by "),pe=s("a"),J=o("stefan-it"),je=o(". The original code can be found "),ee=s("a"),j=o("here"),Pe=o("."),P=p(),ae=s("h2"),ie=s("a"),v=s("span"),y(E.$$.fragment),Ue=p(),oe=s("span"),Qe=o("XLMRobertaConfig"),We=p(),z=s("div"),y(Oe.$$.fragment),He=p(),_e=s("p"),Ke=o("This is the configuration class to store the configuration of a "),De=s("a"),I=o("XLMRobertaModel"),G=o(" or a "),Se=s("a"),Ve=o("TFXLMRobertaModel"),Y=o(`. It
is used to instantiate a XLM-RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the XLMRoBERTa
`),Ne=s("a"),Je=o("xlm-roberta-base"),Ae=o(" architecture."),Ge=p(),Z=s("p"),Ye=o("Configuration objects inherit from "),jl=s("a"),qf=o("PretrainedConfig"),Xf=o(` and can be used to control the model outputs. Read the
documentation from `),Pl=s("a"),Cf=o("PretrainedConfig"),jf=o(" for more information."),Pf=p(),y($n.$$.fragment),km=p(),zo=s("h2"),Fn=s("a"),dc=s("span"),y(ua.$$.fragment),Af=p(),cc=s("span"),Of=o("XLMRobertaTokenizer"),vm=p(),st=s("div"),y(fa.$$.fragment),Nf=p(),no=s("p"),If=o("Adapted from "),Al=s("a"),Df=o("RobertaTokenizer"),Sf=o(" and "),Ol=s("a"),Bf=o("XLNetTokenizer"),Wf=o(`. Based on
`),ga=s("a"),Uf=o("SentencePiece"),Qf=o("."),Hf=p(),_a=s("p"),Kf=o("This tokenizer inherits from "),Nl=s("a"),Vf=o("PreTrainedTokenizer"),Jf=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gf=p(),uo=s("div"),y(ba.$$.fragment),Yf=p(),pc=s("p"),Zf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),eg=p(),ka=s("ul"),Il=s("li"),tg=o("single sequence: "),hc=s("code"),og=o("<s> X </s>"),ng=p(),Dl=s("li"),sg=o("pair of sequences: "),mc=s("code"),ag=o("<s> A </s></s> B </s>"),rg=p(),xn=s("div"),y(va.$$.fragment),ig=p(),ya=s("p"),lg=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),uc=s("code"),dg=o("prepare_for_model"),cg=o(" method."),pg=p(),Ln=s("div"),y(Ta.$$.fragment),hg=p(),fc=s("p"),mg=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),ug=p(),Sl=s("div"),y(wa.$$.fragment),ym=p(),qo=s("h2"),Rn=s("a"),gc=s("span"),y(Ma.$$.fragment),fg=p(),_c=s("span"),gg=o("XLMRobertaTokenizerFast"),Tm=p(),yt=s("div"),y($a.$$.fragment),_g=p(),Ut=s("p"),bg=o("Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),bc=s("em"),kg=o("tokenizers"),vg=o(` library). Adapted from
`),Bl=s("a"),yg=o("RobertaTokenizer"),Tg=o(" and "),Wl=s("a"),wg=o("XLNetTokenizer"),Mg=o(`. Based on
`),Fa=s("a"),$g=o("BPE"),Fg=o("."),xg=p(),xa=s("p"),Lg=o("This tokenizer inherits from "),Ul=s("a"),Rg=o("PreTrainedTokenizerFast"),Eg=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zg=p(),fo=s("div"),y(La.$$.fragment),qg=p(),kc=s("p"),Xg=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Cg=p(),Ra=s("ul"),Ql=s("li"),jg=o("single sequence: "),vc=s("code"),Pg=o("<s> X </s>"),Ag=p(),Hl=s("li"),Og=o("pair of sequences: "),yc=s("code"),Ng=o("<s> A </s></s> B </s>"),Ig=p(),En=s("div"),y(Ea.$$.fragment),Dg=p(),Tc=s("p"),Sg=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),wm=p(),Xo=s("h2"),zn=s("a"),wc=s("span"),y(za.$$.fragment),Bg=p(),Mc=s("span"),Wg=o("XLMRobertaModel"),Mm=p(),Ze=s("div"),y(qa.$$.fragment),Ug=p(),$c=s("p"),Qg=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Hg=p(),Xa=s("p"),Kg=o("This model inherits from "),Kl=s("a"),Vg=o("PreTrainedModel"),Jg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg=p(),Ca=s("p"),Yg=o("This model is also a PyTorch "),ja=s("a"),Zg=o("torch.nn.Module"),e_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=p(),Pa=s("p"),o_=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fc=s("em"),n_=o(`Attention is
all you need`),s_=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),a_=p(),ut=s("p"),r_=o("To behave as an decoder the model needs to be initialized with the "),xc=s("code"),i_=o("is_decoder"),l_=o(` argument of the configuration set
to `),Lc=s("code"),d_=o("True"),c_=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Rc=s("code"),p_=o("is_decoder"),h_=o(` argument and
`),Ec=s("code"),m_=o("add_cross_attention"),u_=o(" set to "),zc=s("code"),f_=o("True"),g_=o("; an "),qc=s("code"),__=o("encoder_hidden_states"),b_=o(" is then expected as an input to the forward pass."),k_=p(),qn=s("p"),v_=o(".. _"),Xc=s("em"),y_=o("Attention is all you need"),T_=o(": "),Aa=s("a"),w_=o("https://arxiv.org/abs/1706.03762"),M_=p(),Qt=s("div"),y(Oa.$$.fragment),$_=p(),Co=s("p"),F_=o("The "),Vl=s("a"),x_=o("XLMRobertaModel"),L_=o(" forward method, overrides the "),Cc=s("code"),R_=o("__call__"),E_=o(" special method."),z_=p(),y(Xn.$$.fragment),q_=p(),y(Cn.$$.fragment),$m=p(),jo=s("h2"),jn=s("a"),jc=s("span"),y(Na.$$.fragment),X_=p(),Pc=s("span"),C_=o("XLMRobertaForCausalLM"),Fm=p(),Tt=s("div"),y(Ia.$$.fragment),j_=p(),Da=s("p"),P_=o("XLM-RoBERTa Model with a "),Ac=s("code"),A_=o("language modeling"),O_=o(" head on top for CLM fine-tuning."),N_=p(),Sa=s("p"),I_=o("This model inherits from "),Jl=s("a"),D_=o("PreTrainedModel"),S_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=p(),Ba=s("p"),W_=o("This model is also a PyTorch "),Wa=s("a"),U_=o("torch.nn.Module"),Q_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),H_=p(),Ht=s("div"),y(Ua.$$.fragment),K_=p(),Po=s("p"),V_=o("The "),Gl=s("a"),J_=o("XLMRobertaForCausalLM"),G_=o(" forward method, overrides the "),Oc=s("code"),Y_=o("__call__"),Z_=o(" special method."),eb=p(),y(Pn.$$.fragment),tb=p(),y(An.$$.fragment),xm=p(),Ao=s("h2"),On=s("a"),Nc=s("span"),y(Qa.$$.fragment),ob=p(),Ic=s("span"),nb=o("XLMRobertaForMaskedLM"),Lm=p(),wt=s("div"),y(Ha.$$.fragment),sb=p(),Ka=s("p"),ab=o("XLM-RoBERTa Model with a "),Dc=s("code"),rb=o("language modeling"),ib=o(" head on top."),lb=p(),Va=s("p"),db=o("This model inherits from "),Yl=s("a"),cb=o("PreTrainedModel"),pb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=p(),Ja=s("p"),mb=o("This model is also a PyTorch "),Ga=s("a"),ub=o("torch.nn.Module"),fb=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gb=p(),Lt=s("div"),y(Ya.$$.fragment),_b=p(),Oo=s("p"),bb=o("The "),Zl=s("a"),kb=o("XLMRobertaForMaskedLM"),vb=o(" forward method, overrides the "),Sc=s("code"),yb=o("__call__"),Tb=o(" special method."),wb=p(),y(Nn.$$.fragment),Mb=p(),y(In.$$.fragment),$b=p(),y(Dn.$$.fragment),Rm=p(),No=s("h2"),Sn=s("a"),Bc=s("span"),y(Za.$$.fragment),Fb=p(),Wc=s("span"),xb=o("XLMRobertaForSequenceClassification"),Em=p(),Mt=s("div"),y(er.$$.fragment),Lb=p(),Uc=s("p"),Rb=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Eb=p(),tr=s("p"),zb=o("This model inherits from "),ed=s("a"),qb=o("PreTrainedModel"),Xb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb=p(),or=s("p"),jb=o("This model is also a PyTorch "),nr=s("a"),Pb=o("torch.nn.Module"),Ab=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=p(),mt=s("div"),y(sr.$$.fragment),Nb=p(),Io=s("p"),Ib=o("The "),td=s("a"),Db=o("XLMRobertaForSequenceClassification"),Sb=o(" forward method, overrides the "),Qc=s("code"),Bb=o("__call__"),Wb=o(" special method."),Ub=p(),y(Bn.$$.fragment),Qb=p(),y(Wn.$$.fragment),Hb=p(),y(Un.$$.fragment),Kb=p(),y(Qn.$$.fragment),Vb=p(),y(Hn.$$.fragment),zm=p(),Do=s("h2"),Kn=s("a"),Hc=s("span"),y(ar.$$.fragment),Jb=p(),Kc=s("span"),Gb=o("XLMRobertaForMultipleChoice"),qm=p(),$t=s("div"),y(rr.$$.fragment),Yb=p(),Vc=s("p"),Zb=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ek=p(),ir=s("p"),tk=o("This model inherits from "),od=s("a"),ok=o("PreTrainedModel"),nk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sk=p(),lr=s("p"),ak=o("This model is also a PyTorch "),dr=s("a"),rk=o("torch.nn.Module"),ik=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lk=p(),Kt=s("div"),y(cr.$$.fragment),dk=p(),So=s("p"),ck=o("The "),nd=s("a"),pk=o("XLMRobertaForMultipleChoice"),hk=o(" forward method, overrides the "),Jc=s("code"),mk=o("__call__"),uk=o(" special method."),fk=p(),y(Vn.$$.fragment),gk=p(),y(Jn.$$.fragment),Xm=p(),Bo=s("h2"),Gn=s("a"),Gc=s("span"),y(pr.$$.fragment),_k=p(),Yc=s("span"),bk=o("XLMRobertaForTokenClassification"),Cm=p(),Ft=s("div"),y(hr.$$.fragment),kk=p(),Zc=s("p"),vk=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),yk=p(),mr=s("p"),Tk=o("This model inherits from "),sd=s("a"),wk=o("PreTrainedModel"),Mk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),ur=s("p"),Fk=o("This model is also a PyTorch "),fr=s("a"),xk=o("torch.nn.Module"),Lk=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rk=p(),Rt=s("div"),y(gr.$$.fragment),Ek=p(),Wo=s("p"),zk=o("The "),ad=s("a"),qk=o("XLMRobertaForTokenClassification"),Xk=o(" forward method, overrides the "),ep=s("code"),Ck=o("__call__"),jk=o(" special method."),Pk=p(),y(Yn.$$.fragment),Ak=p(),y(Zn.$$.fragment),Ok=p(),y(es.$$.fragment),jm=p(),Uo=s("h2"),ts=s("a"),tp=s("span"),y(_r.$$.fragment),Nk=p(),op=s("span"),Ik=o("XLMRobertaForQuestionAnswering"),Pm=p(),xt=s("div"),y(br.$$.fragment),Dk=p(),Qo=s("p"),Sk=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),np=s("code"),Bk=o("span start logits"),Wk=o(" and "),sp=s("code"),Uk=o("span end logits"),Qk=o(")."),Hk=p(),kr=s("p"),Kk=o("This model inherits from "),rd=s("a"),Vk=o("PreTrainedModel"),Jk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gk=p(),vr=s("p"),Yk=o("This model is also a PyTorch "),yr=s("a"),Zk=o("torch.nn.Module"),ev=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tv=p(),Et=s("div"),y(Tr.$$.fragment),ov=p(),Ho=s("p"),nv=o("The "),id=s("a"),sv=o("XLMRobertaForQuestionAnswering"),av=o(" forward method, overrides the "),ap=s("code"),rv=o("__call__"),iv=o(" special method."),lv=p(),y(os.$$.fragment),dv=p(),y(ns.$$.fragment),cv=p(),y(ss.$$.fragment),Am=p(),Ko=s("h2"),as=s("a"),rp=s("span"),y(wr.$$.fragment),pv=p(),ip=s("span"),hv=o("TFXLMRobertaModel"),Om=p(),at=s("div"),y(Mr.$$.fragment),mv=p(),lp=s("p"),uv=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),fv=p(),$r=s("p"),gv=o("This model inherits from "),ld=s("a"),_v=o("TFPreTrainedModel"),bv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=p(),Fr=s("p"),vv=o("This model is also a "),xr=s("a"),yv=o("tf.keras.Model"),Tv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wv=p(),y(rs.$$.fragment),Mv=p(),Lr=s("p"),$v=o("This class overrides "),dd=s("a"),Fv=o("TFRobertaModel"),xv=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Lv=p(),Vt=s("div"),y(Rr.$$.fragment),Rv=p(),Vo=s("p"),Ev=o("The "),cd=s("a"),zv=o("TFRobertaModel"),qv=o(" forward method, overrides the "),dp=s("code"),Xv=o("__call__"),Cv=o(" special method."),jv=p(),y(is.$$.fragment),Pv=p(),y(ls.$$.fragment),Nm=p(),Jo=s("h2"),ds=s("a"),cp=s("span"),y(Er.$$.fragment),Av=p(),pp=s("span"),Ov=o("TFXLMRobertaForMaskedLM"),Im=p(),rt=s("div"),y(zr.$$.fragment),Nv=p(),qr=s("p"),Iv=o("XLM-RoBERTa Model with a "),hp=s("code"),Dv=o("language modeling"),Sv=o(" head on top."),Bv=p(),Xr=s("p"),Wv=o("This model inherits from "),pd=s("a"),Uv=o("TFPreTrainedModel"),Qv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hv=p(),Cr=s("p"),Kv=o("This model is also a "),jr=s("a"),Vv=o("tf.keras.Model"),Jv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gv=p(),y(cs.$$.fragment),Yv=p(),Pr=s("p"),Zv=o("This class overrides "),hd=s("a"),ey=o("TFRobertaForMaskedLM"),ty=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),oy=p(),zt=s("div"),y(Ar.$$.fragment),ny=p(),Go=s("p"),sy=o("The "),md=s("a"),ay=o("TFRobertaForMaskedLM"),ry=o(" forward method, overrides the "),mp=s("code"),iy=o("__call__"),ly=o(" special method."),dy=p(),y(ps.$$.fragment),cy=p(),y(hs.$$.fragment),py=p(),y(ms.$$.fragment),Dm=p(),Yo=s("h2"),us=s("a"),up=s("span"),y(Or.$$.fragment),hy=p(),fp=s("span"),my=o("TFXLMRobertaForSequenceClassification"),Sm=p(),it=s("div"),y(Nr.$$.fragment),uy=p(),gp=s("p"),fy=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gy=p(),Ir=s("p"),_y=o("This model inherits from "),ud=s("a"),by=o("TFPreTrainedModel"),ky=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vy=p(),Dr=s("p"),yy=o("This model is also a "),Sr=s("a"),Ty=o("tf.keras.Model"),wy=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),My=p(),y(fs.$$.fragment),$y=p(),Br=s("p"),Fy=o("This class overrides "),fd=s("a"),xy=o("TFRobertaForSequenceClassification"),Ly=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ry=p(),qt=s("div"),y(Wr.$$.fragment),Ey=p(),Zo=s("p"),zy=o("The "),gd=s("a"),qy=o("TFRobertaForSequenceClassification"),Xy=o(" forward method, overrides the "),_p=s("code"),Cy=o("__call__"),jy=o(" special method."),Py=p(),y(gs.$$.fragment),Ay=p(),y(_s.$$.fragment),Oy=p(),y(bs.$$.fragment),Bm=p(),en=s("h2"),ks=s("a"),bp=s("span"),y(Ur.$$.fragment),Ny=p(),kp=s("span"),Iy=o("TFXLMRobertaForMultipleChoice"),Wm=p(),lt=s("div"),y(Qr.$$.fragment),Dy=p(),vp=s("p"),Sy=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),By=p(),Hr=s("p"),Wy=o("This model inherits from "),_d=s("a"),Uy=o("TFPreTrainedModel"),Qy=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hy=p(),Kr=s("p"),Ky=o("This model is also a "),Vr=s("a"),Vy=o("tf.keras.Model"),Jy=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gy=p(),y(vs.$$.fragment),Yy=p(),Jr=s("p"),Zy=o("This class overrides "),bd=s("a"),eT=o("TFRobertaForMultipleChoice"),tT=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),oT=p(),Jt=s("div"),y(Gr.$$.fragment),nT=p(),tn=s("p"),sT=o("The "),kd=s("a"),aT=o("TFRobertaForMultipleChoice"),rT=o(" forward method, overrides the "),yp=s("code"),iT=o("__call__"),lT=o(" special method."),dT=p(),y(ys.$$.fragment),cT=p(),y(Ts.$$.fragment),Um=p(),on=s("h2"),ws=s("a"),Tp=s("span"),y(Yr.$$.fragment),pT=p(),wp=s("span"),hT=o("TFXLMRobertaForTokenClassification"),Qm=p(),dt=s("div"),y(Zr.$$.fragment),mT=p(),Mp=s("p"),uT=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),fT=p(),ei=s("p"),gT=o("This model inherits from "),vd=s("a"),_T=o("TFPreTrainedModel"),bT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT=p(),ti=s("p"),vT=o("This model is also a "),oi=s("a"),yT=o("tf.keras.Model"),TT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wT=p(),y(Ms.$$.fragment),MT=p(),ni=s("p"),$T=o("This class overrides "),yd=s("a"),FT=o("TFRobertaForTokenClassification"),xT=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),LT=p(),Xt=s("div"),y(si.$$.fragment),RT=p(),nn=s("p"),ET=o("The "),Td=s("a"),zT=o("TFRobertaForTokenClassification"),qT=o(" forward method, overrides the "),$p=s("code"),XT=o("__call__"),CT=o(" special method."),jT=p(),y($s.$$.fragment),PT=p(),y(Fs.$$.fragment),AT=p(),y(xs.$$.fragment),Hm=p(),sn=s("h2"),Ls=s("a"),Fp=s("span"),y(ai.$$.fragment),OT=p(),xp=s("span"),NT=o("TFXLMRobertaForQuestionAnswering"),Km=p(),ct=s("div"),y(ri.$$.fragment),IT=p(),an=s("p"),DT=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lp=s("code"),ST=o("span start logits"),BT=o(" and "),Rp=s("code"),WT=o("span end logits"),UT=o(")."),QT=p(),ii=s("p"),HT=o("This model inherits from "),wd=s("a"),KT=o("TFPreTrainedModel"),VT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),JT=p(),li=s("p"),GT=o("This model is also a "),di=s("a"),YT=o("tf.keras.Model"),ZT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ew=p(),y(Rs.$$.fragment),tw=p(),ci=s("p"),ow=o("This class overrides "),Ep=s("code"),nw=o("TFRobertaForQuestionAnsweringSimple"),sw=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),aw=p(),Ct=s("div"),y(pi.$$.fragment),rw=p(),rn=s("p"),iw=o("The "),Md=s("a"),lw=o("TFRobertaForQuestionAnswering"),dw=o(" forward method, overrides the "),zp=s("code"),cw=o("__call__"),pw=o(" special method."),hw=p(),y(Es.$$.fragment),mw=p(),y(zs.$$.fragment),uw=p(),y(qs.$$.fragment),Vm=p(),ln=s("h2"),Xs=s("a"),qp=s("span"),y(hi.$$.fragment),fw=p(),Xp=s("span"),gw=o("FlaxXLMRobertaModel"),Jm=p(),pt=s("div"),y(mi.$$.fragment),_w=p(),ui=s("p"),bw=o(`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),$d=s("a"),kw=o("FlaxPreTrainedModel"),vw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yw=p(),fi=s("p"),Tw=o("This model is also a Flax Linen "),gi=s("a"),ww=o("flax.linen.Module"),Mw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$w=p(),Cp=s("p"),Fw=o("Finally, this model supports inherent JAX features such as:"),xw=p(),so=s("ul"),jp=s("li"),_i=s("a"),Lw=o("Just-In-Time (JIT) compilation"),Rw=p(),Pp=s("li"),bi=s("a"),Ew=o("Automatic Differentiation"),zw=p(),Ap=s("li"),ki=s("a"),qw=o("Vectorization"),Xw=p(),Op=s("li"),vi=s("a"),Cw=o("Parallelization"),jw=p(),yi=s("p"),Pw=o("This class overrides "),Fd=s("a"),Aw=o("FlaxRobertaModel"),Ow=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Nw=p(),Gt=s("div"),y(Ti.$$.fragment),Iw=p(),dn=s("p"),Dw=o("The "),Np=s("code"),Sw=o("FlaxRobertaPreTrainedModel"),Bw=o(" forward method, overrides the "),Ip=s("code"),Ww=o("__call__"),Uw=o(" special method."),Qw=p(),y(Cs.$$.fragment),Hw=p(),y(js.$$.fragment),Gm=p(),cn=s("h2"),Ps=s("a"),Dp=s("span"),y(wi.$$.fragment),Kw=p(),Sp=s("span"),Vw=o("FlaxXLMRobertaForMaskedLM"),Ym=p(),ht=s("div"),y(Mi.$$.fragment),Jw=p(),pn=s("p"),Gw=o("XLM-RoBERTa Model with a "),Bp=s("code"),Yw=o("language modeling"),Zw=o(` head on top.
This model inherits from `),xd=s("a"),e2=o("FlaxPreTrainedModel"),t2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),o2=p(),$i=s("p"),n2=o("This model is also a Flax Linen "),Fi=s("a"),s2=o("flax.linen.Module"),a2=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),r2=p(),Wp=s("p"),i2=o("Finally, this model supports inherent JAX features such as:"),l2=p(),ao=s("ul"),Up=s("li"),xi=s("a"),d2=o("Just-In-Time (JIT) compilation"),c2=p(),Qp=s("li"),Li=s("a"),p2=o("Automatic Differentiation"),h2=p(),Hp=s("li"),Ri=s("a"),m2=o("Vectorization"),u2=p(),Kp=s("li"),Ei=s("a"),f2=o("Parallelization"),g2=p(),zi=s("p"),_2=o("This class overrides "),Ld=s("a"),b2=o("FlaxRobertaForMaskedLM"),k2=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),v2=p(),Yt=s("div"),y(qi.$$.fragment),y2=p(),hn=s("p"),T2=o("The "),Vp=s("code"),w2=o("FlaxRobertaPreTrainedModel"),M2=o(" forward method, overrides the "),Jp=s("code"),$2=o("__call__"),F2=o(" special method."),x2=p(),y(As.$$.fragment),L2=p(),y(Os.$$.fragment),Zm=p(),mn=s("h2"),Ns=s("a"),Gp=s("span"),y(Xi.$$.fragment),R2=p(),Yp=s("span"),E2=o("FlaxXLMRobertaForSequenceClassification"),eu=p(),et=s("div"),y(Ci.$$.fragment),z2=p(),Zp=s("p"),q2=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),X2=p(),ji=s("p"),C2=o("This model inherits from "),Rd=s("a"),j2=o("FlaxPreTrainedModel"),P2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),A2=p(),Pi=s("p"),O2=o("This model is also a Flax Linen "),Ai=s("a"),N2=o("flax.linen.Module"),I2=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),D2=p(),eh=s("p"),S2=o("Finally, this model supports inherent JAX features such as:"),B2=p(),ro=s("ul"),th=s("li"),Oi=s("a"),W2=o("Just-In-Time (JIT) compilation"),U2=p(),oh=s("li"),Ni=s("a"),Q2=o("Automatic Differentiation"),H2=p(),nh=s("li"),Ii=s("a"),K2=o("Vectorization"),V2=p(),sh=s("li"),Di=s("a"),J2=o("Parallelization"),G2=p(),Si=s("p"),Y2=o("This class overrides "),Ed=s("a"),Z2=o("FlaxRobertaForSequenceClassification"),eM=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),tM=p(),Zt=s("div"),y(Bi.$$.fragment),oM=p(),un=s("p"),nM=o("The "),ah=s("code"),sM=o("FlaxRobertaPreTrainedModel"),aM=o(" forward method, overrides the "),rh=s("code"),rM=o("__call__"),iM=o(" special method."),lM=p(),y(Is.$$.fragment),dM=p(),y(Ds.$$.fragment),tu=p(),fn=s("h2"),Ss=s("a"),ih=s("span"),y(Wi.$$.fragment),cM=p(),lh=s("span"),pM=o("FlaxXLMRobertaForMultipleChoice"),ou=p(),tt=s("div"),y(Ui.$$.fragment),hM=p(),dh=s("p"),mM=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),uM=p(),Qi=s("p"),fM=o("This model inherits from "),zd=s("a"),gM=o("FlaxPreTrainedModel"),_M=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),bM=p(),Hi=s("p"),kM=o("This model is also a Flax Linen "),Ki=s("a"),vM=o("flax.linen.Module"),yM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),TM=p(),ch=s("p"),wM=o("Finally, this model supports inherent JAX features such as:"),MM=p(),io=s("ul"),ph=s("li"),Vi=s("a"),$M=o("Just-In-Time (JIT) compilation"),FM=p(),hh=s("li"),Ji=s("a"),xM=o("Automatic Differentiation"),LM=p(),mh=s("li"),Gi=s("a"),RM=o("Vectorization"),EM=p(),uh=s("li"),Yi=s("a"),zM=o("Parallelization"),qM=p(),Zi=s("p"),XM=o("This class overrides "),qd=s("a"),CM=o("FlaxRobertaForMultipleChoice"),jM=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),PM=p(),eo=s("div"),y(el.$$.fragment),AM=p(),gn=s("p"),OM=o("The "),fh=s("code"),NM=o("FlaxRobertaPreTrainedModel"),IM=o(" forward method, overrides the "),gh=s("code"),DM=o("__call__"),SM=o(" special method."),BM=p(),y(Bs.$$.fragment),WM=p(),y(Ws.$$.fragment),nu=p(),_n=s("h2"),Us=s("a"),_h=s("span"),y(tl.$$.fragment),UM=p(),bh=s("span"),QM=o("FlaxXLMRobertaForTokenClassification"),su=p(),ot=s("div"),y(ol.$$.fragment),HM=p(),kh=s("p"),KM=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),VM=p(),nl=s("p"),JM=o("This model inherits from "),Xd=s("a"),GM=o("FlaxPreTrainedModel"),YM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ZM=p(),sl=s("p"),e$=o("This model is also a Flax Linen "),al=s("a"),t$=o("flax.linen.Module"),o$=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),n$=p(),vh=s("p"),s$=o("Finally, this model supports inherent JAX features such as:"),a$=p(),lo=s("ul"),yh=s("li"),rl=s("a"),r$=o("Just-In-Time (JIT) compilation"),i$=p(),Th=s("li"),il=s("a"),l$=o("Automatic Differentiation"),d$=p(),wh=s("li"),ll=s("a"),c$=o("Vectorization"),p$=p(),Mh=s("li"),dl=s("a"),h$=o("Parallelization"),m$=p(),cl=s("p"),u$=o("This class overrides "),Cd=s("a"),f$=o("FlaxRobertaForTokenClassification"),g$=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),_$=p(),to=s("div"),y(pl.$$.fragment),b$=p(),bn=s("p"),k$=o("The "),$h=s("code"),v$=o("FlaxRobertaPreTrainedModel"),y$=o(" forward method, overrides the "),Fh=s("code"),T$=o("__call__"),w$=o(" special method."),M$=p(),y(Qs.$$.fragment),$$=p(),y(Hs.$$.fragment),au=p(),kn=s("h2"),Ks=s("a"),xh=s("span"),y(hl.$$.fragment),F$=p(),Lh=s("span"),x$=o("FlaxXLMRobertaForQuestionAnswering"),ru=p(),nt=s("div"),y(ml.$$.fragment),L$=p(),vn=s("p"),R$=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rh=s("code"),E$=o("span start logits"),z$=o(" and "),Eh=s("code"),q$=o("span end logits"),X$=o(")."),C$=p(),ul=s("p"),j$=o("This model inherits from "),jd=s("a"),P$=o("FlaxPreTrainedModel"),A$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O$=p(),fl=s("p"),N$=o("This model is also a Flax Linen "),gl=s("a"),I$=o("flax.linen.Module"),D$=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),S$=p(),zh=s("p"),B$=o("Finally, this model supports inherent JAX features such as:"),W$=p(),co=s("ul"),qh=s("li"),_l=s("a"),U$=o("Just-In-Time (JIT) compilation"),Q$=p(),Xh=s("li"),bl=s("a"),H$=o("Automatic Differentiation"),K$=p(),Ch=s("li"),kl=s("a"),V$=o("Vectorization"),J$=p(),jh=s("li"),vl=s("a"),G$=o("Parallelization"),Y$=p(),yl=s("p"),Z$=o("This class overrides "),Pd=s("a"),e1=o("FlaxRobertaForQuestionAnswering"),t1=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),o1=p(),oo=s("div"),y(Tl.$$.fragment),n1=p(),yn=s("p"),s1=o("The "),Ph=s("code"),a1=o("FlaxRobertaPreTrainedModel"),r1=o(" forward method, overrides the "),Ah=s("code"),i1=o("__call__"),l1=o(" special method."),d1=p(),y(Vs.$$.fragment),c1=p(),y(Js.$$.fragment),this.h()},l(i){const b=Bx('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(i),c=a(i,"H1",{class:!0});var wl=r(c);f=a(wl,"A",{id:!0,class:!0,href:!0});var Oh=r(f);k=a(Oh,"SPAN",{});var Nh=r(k);T(l.$$.fragment,Nh),Nh.forEach(t),Oh.forEach(t),m=h(wl),R=a(wl,"SPAN",{});var Ih=r(R);Me=n(Ih,"XLM-RoBERTa"),Ih.forEach(t),wl.forEach(t),be=h(i),O=a(i,"H2",{class:!0});var Ml=r(O);re=a(Ml,"A",{id:!0,class:!0,href:!0});var Dh=r(re);te=a(Dh,"SPAN",{});var Sh=r(te);T(L.$$.fragment,Sh),Sh.forEach(t),Dh.forEach(t),$e=h(Ml),U=a(Ml,"SPAN",{});var Bh=r(U);Fe=n(Bh,"Overview"),Bh.forEach(t),Ml.forEach(t),ke=h(i),D=a(i,"P",{});var $l=r(D);xe=n($l,"The XLM-RoBERTa model was proposed in "),le=a($l,"A",{href:!0,rel:!0});var Wh=r(le);H=n(Wh,"Unsupervised Cross-lingual Representation Learning at Scale"),Wh.forEach(t),Le=n($l,` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),$l.forEach(t),ve=h(i),B=a(i,"P",{});var Uh=r(B);Re=n(Uh,"The abstract from the paper is the following:"),Uh.forEach(t),ye=h(i),W=a(i,"P",{});var Qh=r(W);ge=a(Qh,"EM",{});var Hh=r(ge);Ee=n(Hh,`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),Hh.forEach(t),Qh.forEach(t),ne=h(i),q=a(i,"P",{});var Kh=r(q);X=n(Kh,"Tips:"),Kh.forEach(t),Te=h(i),S=a(i,"UL",{});var Fl=r(S);de=a(Fl,"LI",{});var xl=r(de);ze=n(xl,`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Q=a(xl,"CODE",{});var Vh=r(Q);qe=n(Vh,"lang"),Vh.forEach(t),Xe=n(xl,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),xl.forEach(t),C=h(Fl),ce=a(Fl,"LI",{});var Ll=r(ce);K=n(Ll,"This implementation is the same as RoBERTa. Refer to the "),he=a(Ll,"A",{href:!0});var Jh=r(he);Ce=n(Jh,"documentation of RoBERTa"),Jh.forEach(t),V=n(Ll,` for usage examples
as well as the information relative to the inputs and outputs.`),Ll.forEach(t),Fl.forEach(t),we=h(i),se=a(i,"P",{});var Tn=r(se);N=n(Tn,"This model was contributed by "),pe=a(Tn,"A",{href:!0,rel:!0});var Gh=r(pe);J=n(Gh,"stefan-it"),Gh.forEach(t),je=n(Tn,". The original code can be found "),ee=a(Tn,"A",{href:!0,rel:!0});var Yh=r(ee);j=n(Yh,"here"),Yh.forEach(t),Pe=n(Tn,"."),Tn.forEach(t),P=h(i),ae=a(i,"H2",{class:!0});var Rl=r(ae);ie=a(Rl,"A",{id:!0,class:!0,href:!0});var Zh=r(ie);v=a(Zh,"SPAN",{});var em=r(v);T(E.$$.fragment,em),em.forEach(t),Zh.forEach(t),Ue=h(Rl),oe=a(Rl,"SPAN",{});var tm=r(oe);Qe=n(tm,"XLMRobertaConfig"),tm.forEach(t),Rl.forEach(t),We=h(i),z=a(i,"DIV",{class:!0});var po=r(z);T(Oe.$$.fragment,po),He=h(po),_e=a(po,"P",{});var ho=r(_e);Ke=n(ho,"This is the configuration class to store the configuration of a "),De=a(ho,"A",{href:!0});var om=r(De);I=n(om,"XLMRobertaModel"),om.forEach(t),G=n(ho," or a "),Se=a(ho,"A",{href:!0});var nm=r(Se);Ve=n(nm,"TFXLMRobertaModel"),nm.forEach(t),Y=n(ho,`. It
is used to instantiate a XLM-RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the XLMRoBERTa
`),Ne=a(ho,"A",{href:!0,rel:!0});var sm=r(Ne);Je=n(sm,"xlm-roberta-base"),sm.forEach(t),Ae=n(ho," architecture."),ho.forEach(t),Ge=h(po),Z=a(po,"P",{});var wn=r(Z);Ye=n(wn,"Configuration objects inherit from "),jl=a(wn,"A",{href:!0});var am=r(jl);qf=n(am,"PretrainedConfig"),am.forEach(t),Xf=n(wn,` and can be used to control the model outputs. Read the
documentation from `),Pl=a(wn,"A",{href:!0});var rm=r(Pl);Cf=n(rm,"PretrainedConfig"),rm.forEach(t),jf=n(wn," for more information."),wn.forEach(t),Pf=h(po),T($n.$$.fragment,po),po.forEach(t),km=h(i),zo=a(i,"H2",{class:!0});var El=r(zo);Fn=a(El,"A",{id:!0,class:!0,href:!0});var im=r(Fn);dc=a(im,"SPAN",{});var lm=r(dc);T(ua.$$.fragment,lm),lm.forEach(t),im.forEach(t),Af=h(El),cc=a(El,"SPAN",{});var dm=r(cc);Of=n(dm,"XLMRobertaTokenizer"),dm.forEach(t),El.forEach(t),vm=h(i),st=a(i,"DIV",{class:!0});var ft=r(st);T(fa.$$.fragment,ft),Nf=h(ft),no=a(ft,"P",{});var mo=r(no);If=n(mo,"Adapted from "),Al=a(mo,"A",{href:!0});var cm=r(Al);Df=n(cm,"RobertaTokenizer"),cm.forEach(t),Sf=n(mo," and "),Ol=a(mo,"A",{href:!0});var pm=r(Ol);Bf=n(pm,"XLNetTokenizer"),pm.forEach(t),Wf=n(mo,`. Based on
`),ga=a(mo,"A",{href:!0,rel:!0});var hm=r(ga);Uf=n(hm,"SentencePiece"),hm.forEach(t),Qf=n(mo,"."),mo.forEach(t),Hf=h(ft),_a=a(ft,"P",{});var zl=r(_a);Kf=n(zl,"This tokenizer inherits from "),Nl=a(zl,"A",{href:!0});var mm=r(Nl);Vf=n(mm,"PreTrainedTokenizer"),mm.forEach(t),Jf=n(zl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zl.forEach(t),Gf=h(ft),uo=a(ft,"DIV",{class:!0});var Mn=r(uo);T(ba.$$.fragment,Mn),Yf=h(Mn),pc=a(Mn,"P",{});var um=r(pc);Zf=n(um,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),um.forEach(t),eg=h(Mn),ka=a(Mn,"UL",{});var ql=r(ka);Il=a(ql,"LI",{});var Ad=r(Il);tg=n(Ad,"single sequence: "),hc=a(Ad,"CODE",{});var fm=r(hc);og=n(fm,"<s> X </s>"),fm.forEach(t),Ad.forEach(t),ng=h(ql),Dl=a(ql,"LI",{});var Od=r(Dl);sg=n(Od,"pair of sequences: "),mc=a(Od,"CODE",{});var gm=r(mc);ag=n(gm,"<s> A </s></s> B </s>"),gm.forEach(t),Od.forEach(t),ql.forEach(t),Mn.forEach(t),rg=h(ft),xn=a(ft,"DIV",{class:!0});var Xl=r(xn);T(va.$$.fragment,Xl),ig=h(Xl),ya=a(Xl,"P",{});var Cl=r(ya);lg=n(Cl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),uc=a(Cl,"CODE",{});var _m=r(uc);dg=n(_m,"prepare_for_model"),_m.forEach(t),cg=n(Cl," method."),Cl.forEach(t),Xl.forEach(t),pg=h(ft),Ln=a(ft,"DIV",{class:!0});var lu=r(Ln);T(Ta.$$.fragment,lu),hg=h(lu),fc=a(lu,"P",{});var m1=r(fc);mg=n(m1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),m1.forEach(t),lu.forEach(t),ug=h(ft),Sl=a(ft,"DIV",{class:!0});var u1=r(Sl);T(wa.$$.fragment,u1),u1.forEach(t),ft.forEach(t),ym=h(i),qo=a(i,"H2",{class:!0});var du=r(qo);Rn=a(du,"A",{id:!0,class:!0,href:!0});var f1=r(Rn);gc=a(f1,"SPAN",{});var g1=r(gc);T(Ma.$$.fragment,g1),g1.forEach(t),f1.forEach(t),fg=h(du),_c=a(du,"SPAN",{});var _1=r(_c);gg=n(_1,"XLMRobertaTokenizerFast"),_1.forEach(t),du.forEach(t),Tm=h(i),yt=a(i,"DIV",{class:!0});var go=r(yt);T($a.$$.fragment,go),_g=h(go),Ut=a(go,"P",{});var _o=r(Ut);bg=n(_o,"Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),bc=a(_o,"EM",{});var b1=r(bc);kg=n(b1,"tokenizers"),b1.forEach(t),vg=n(_o,` library). Adapted from
`),Bl=a(_o,"A",{href:!0});var k1=r(Bl);yg=n(k1,"RobertaTokenizer"),k1.forEach(t),Tg=n(_o," and "),Wl=a(_o,"A",{href:!0});var v1=r(Wl);wg=n(v1,"XLNetTokenizer"),v1.forEach(t),Mg=n(_o,`. Based on
`),Fa=a(_o,"A",{href:!0,rel:!0});var y1=r(Fa);$g=n(y1,"BPE"),y1.forEach(t),Fg=n(_o,"."),_o.forEach(t),xg=h(go),xa=a(go,"P",{});var cu=r(xa);Lg=n(cu,"This tokenizer inherits from "),Ul=a(cu,"A",{href:!0});var T1=r(Ul);Rg=n(T1,"PreTrainedTokenizerFast"),T1.forEach(t),Eg=n(cu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cu.forEach(t),zg=h(go),fo=a(go,"DIV",{class:!0});var Nd=r(fo);T(La.$$.fragment,Nd),qg=h(Nd),kc=a(Nd,"P",{});var w1=r(kc);Xg=n(w1,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),w1.forEach(t),Cg=h(Nd),Ra=a(Nd,"UL",{});var pu=r(Ra);Ql=a(pu,"LI",{});var p1=r(Ql);jg=n(p1,"single sequence: "),vc=a(p1,"CODE",{});var M1=r(vc);Pg=n(M1,"<s> X </s>"),M1.forEach(t),p1.forEach(t),Ag=h(pu),Hl=a(pu,"LI",{});var h1=r(Hl);Og=n(h1,"pair of sequences: "),yc=a(h1,"CODE",{});var $1=r(yc);Ng=n($1,"<s> A </s></s> B </s>"),$1.forEach(t),h1.forEach(t),pu.forEach(t),Nd.forEach(t),Ig=h(go),En=a(go,"DIV",{class:!0});var hu=r(En);T(Ea.$$.fragment,hu),Dg=h(hu),Tc=a(hu,"P",{});var F1=r(Tc);Sg=n(F1,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),F1.forEach(t),hu.forEach(t),go.forEach(t),wm=h(i),Xo=a(i,"H2",{class:!0});var mu=r(Xo);zn=a(mu,"A",{id:!0,class:!0,href:!0});var x1=r(zn);wc=a(x1,"SPAN",{});var L1=r(wc);T(za.$$.fragment,L1),L1.forEach(t),x1.forEach(t),Bg=h(mu),Mc=a(mu,"SPAN",{});var R1=r(Mc);Wg=n(R1,"XLMRobertaModel"),R1.forEach(t),mu.forEach(t),Mm=h(i),Ze=a(i,"DIV",{class:!0});var gt=r(Ze);T(qa.$$.fragment,gt),Ug=h(gt),$c=a(gt,"P",{});var E1=r($c);Qg=n(E1,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),E1.forEach(t),Hg=h(gt),Xa=a(gt,"P",{});var uu=r(Xa);Kg=n(uu,"This model inherits from "),Kl=a(uu,"A",{href:!0});var z1=r(Kl);Vg=n(z1,"PreTrainedModel"),z1.forEach(t),Jg=n(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),Gg=h(gt),Ca=a(gt,"P",{});var fu=r(Ca);Yg=n(fu,"This model is also a PyTorch "),ja=a(fu,"A",{href:!0,rel:!0});var q1=r(ja);Zg=n(q1,"torch.nn.Module"),q1.forEach(t),e_=n(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),t_=h(gt),Pa=a(gt,"P",{});var gu=r(Pa);o_=n(gu,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fc=a(gu,"EM",{});var X1=r(Fc);n_=n(X1,`Attention is
all you need`),X1.forEach(t),s_=n(gu,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),gu.forEach(t),a_=h(gt),ut=a(gt,"P",{});var jt=r(ut);r_=n(jt,"To behave as an decoder the model needs to be initialized with the "),xc=a(jt,"CODE",{});var C1=r(xc);i_=n(C1,"is_decoder"),C1.forEach(t),l_=n(jt,` argument of the configuration set
to `),Lc=a(jt,"CODE",{});var j1=r(Lc);d_=n(j1,"True"),j1.forEach(t),c_=n(jt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Rc=a(jt,"CODE",{});var P1=r(Rc);p_=n(P1,"is_decoder"),P1.forEach(t),h_=n(jt,` argument and
`),Ec=a(jt,"CODE",{});var A1=r(Ec);m_=n(A1,"add_cross_attention"),A1.forEach(t),u_=n(jt," set to "),zc=a(jt,"CODE",{});var O1=r(zc);f_=n(O1,"True"),O1.forEach(t),g_=n(jt,"; an "),qc=a(jt,"CODE",{});var N1=r(qc);__=n(N1,"encoder_hidden_states"),N1.forEach(t),b_=n(jt," is then expected as an input to the forward pass."),jt.forEach(t),k_=h(gt),qn=a(gt,"P",{});var bm=r(qn);v_=n(bm,".. _"),Xc=a(bm,"EM",{});var I1=r(Xc);y_=n(I1,"Attention is all you need"),I1.forEach(t),T_=n(bm,": "),Aa=a(bm,"A",{href:!0,rel:!0});var D1=r(Aa);w_=n(D1,"https://arxiv.org/abs/1706.03762"),D1.forEach(t),bm.forEach(t),M_=h(gt),Qt=a(gt,"DIV",{class:!0});var Gs=r(Qt);T(Oa.$$.fragment,Gs),$_=h(Gs),Co=a(Gs,"P",{});var Id=r(Co);F_=n(Id,"The "),Vl=a(Id,"A",{href:!0});var S1=r(Vl);x_=n(S1,"XLMRobertaModel"),S1.forEach(t),L_=n(Id," forward method, overrides the "),Cc=a(Id,"CODE",{});var B1=r(Cc);R_=n(B1,"__call__"),B1.forEach(t),E_=n(Id," special method."),Id.forEach(t),z_=h(Gs),T(Xn.$$.fragment,Gs),q_=h(Gs),T(Cn.$$.fragment,Gs),Gs.forEach(t),gt.forEach(t),$m=h(i),jo=a(i,"H2",{class:!0});var _u=r(jo);jn=a(_u,"A",{id:!0,class:!0,href:!0});var W1=r(jn);jc=a(W1,"SPAN",{});var U1=r(jc);T(Na.$$.fragment,U1),U1.forEach(t),W1.forEach(t),X_=h(_u),Pc=a(_u,"SPAN",{});var Q1=r(Pc);C_=n(Q1,"XLMRobertaForCausalLM"),Q1.forEach(t),_u.forEach(t),Fm=h(i),Tt=a(i,"DIV",{class:!0});var bo=r(Tt);T(Ia.$$.fragment,bo),j_=h(bo),Da=a(bo,"P",{});var bu=r(Da);P_=n(bu,"XLM-RoBERTa Model with a "),Ac=a(bu,"CODE",{});var H1=r(Ac);A_=n(H1,"language modeling"),H1.forEach(t),O_=n(bu," head on top for CLM fine-tuning."),bu.forEach(t),N_=h(bo),Sa=a(bo,"P",{});var ku=r(Sa);I_=n(ku,"This model inherits from "),Jl=a(ku,"A",{href:!0});var K1=r(Jl);D_=n(K1,"PreTrainedModel"),K1.forEach(t),S_=n(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),B_=h(bo),Ba=a(bo,"P",{});var vu=r(Ba);W_=n(vu,"This model is also a PyTorch "),Wa=a(vu,"A",{href:!0,rel:!0});var V1=r(Wa);U_=n(V1,"torch.nn.Module"),V1.forEach(t),Q_=n(vu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu.forEach(t),H_=h(bo),Ht=a(bo,"DIV",{class:!0});var Ys=r(Ht);T(Ua.$$.fragment,Ys),K_=h(Ys),Po=a(Ys,"P",{});var Dd=r(Po);V_=n(Dd,"The "),Gl=a(Dd,"A",{href:!0});var J1=r(Gl);J_=n(J1,"XLMRobertaForCausalLM"),J1.forEach(t),G_=n(Dd," forward method, overrides the "),Oc=a(Dd,"CODE",{});var G1=r(Oc);Y_=n(G1,"__call__"),G1.forEach(t),Z_=n(Dd," special method."),Dd.forEach(t),eb=h(Ys),T(Pn.$$.fragment,Ys),tb=h(Ys),T(An.$$.fragment,Ys),Ys.forEach(t),bo.forEach(t),xm=h(i),Ao=a(i,"H2",{class:!0});var yu=r(Ao);On=a(yu,"A",{id:!0,class:!0,href:!0});var Y1=r(On);Nc=a(Y1,"SPAN",{});var Z1=r(Nc);T(Qa.$$.fragment,Z1),Z1.forEach(t),Y1.forEach(t),ob=h(yu),Ic=a(yu,"SPAN",{});var e0=r(Ic);nb=n(e0,"XLMRobertaForMaskedLM"),e0.forEach(t),yu.forEach(t),Lm=h(i),wt=a(i,"DIV",{class:!0});var ko=r(wt);T(Ha.$$.fragment,ko),sb=h(ko),Ka=a(ko,"P",{});var Tu=r(Ka);ab=n(Tu,"XLM-RoBERTa Model with a "),Dc=a(Tu,"CODE",{});var t0=r(Dc);rb=n(t0,"language modeling"),t0.forEach(t),ib=n(Tu," head on top."),Tu.forEach(t),lb=h(ko),Va=a(ko,"P",{});var wu=r(Va);db=n(wu,"This model inherits from "),Yl=a(wu,"A",{href:!0});var o0=r(Yl);cb=n(o0,"PreTrainedModel"),o0.forEach(t),pb=n(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),hb=h(ko),Ja=a(ko,"P",{});var Mu=r(Ja);mb=n(Mu,"This model is also a PyTorch "),Ga=a(Mu,"A",{href:!0,rel:!0});var n0=r(Ga);ub=n(n0,"torch.nn.Module"),n0.forEach(t),fb=n(Mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mu.forEach(t),gb=h(ko),Lt=a(ko,"DIV",{class:!0});var vo=r(Lt);T(Ya.$$.fragment,vo),_b=h(vo),Oo=a(vo,"P",{});var Sd=r(Oo);bb=n(Sd,"The "),Zl=a(Sd,"A",{href:!0});var s0=r(Zl);kb=n(s0,"XLMRobertaForMaskedLM"),s0.forEach(t),vb=n(Sd," forward method, overrides the "),Sc=a(Sd,"CODE",{});var a0=r(Sc);yb=n(a0,"__call__"),a0.forEach(t),Tb=n(Sd," special method."),Sd.forEach(t),wb=h(vo),T(Nn.$$.fragment,vo),Mb=h(vo),T(In.$$.fragment,vo),$b=h(vo),T(Dn.$$.fragment,vo),vo.forEach(t),ko.forEach(t),Rm=h(i),No=a(i,"H2",{class:!0});var $u=r(No);Sn=a($u,"A",{id:!0,class:!0,href:!0});var r0=r(Sn);Bc=a(r0,"SPAN",{});var i0=r(Bc);T(Za.$$.fragment,i0),i0.forEach(t),r0.forEach(t),Fb=h($u),Wc=a($u,"SPAN",{});var l0=r(Wc);xb=n(l0,"XLMRobertaForSequenceClassification"),l0.forEach(t),$u.forEach(t),Em=h(i),Mt=a(i,"DIV",{class:!0});var yo=r(Mt);T(er.$$.fragment,yo),Lb=h(yo),Uc=a(yo,"P",{});var d0=r(Uc);Rb=n(d0,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),d0.forEach(t),Eb=h(yo),tr=a(yo,"P",{});var Fu=r(tr);zb=n(Fu,"This model inherits from "),ed=a(Fu,"A",{href:!0});var c0=r(ed);qb=n(c0,"PreTrainedModel"),c0.forEach(t),Xb=n(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),Cb=h(yo),or=a(yo,"P",{});var xu=r(or);jb=n(xu,"This model is also a PyTorch "),nr=a(xu,"A",{href:!0,rel:!0});var p0=r(nr);Pb=n(p0,"torch.nn.Module"),p0.forEach(t),Ab=n(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),Ob=h(yo),mt=a(yo,"DIV",{class:!0});var Pt=r(mt);T(sr.$$.fragment,Pt),Nb=h(Pt),Io=a(Pt,"P",{});var Bd=r(Io);Ib=n(Bd,"The "),td=a(Bd,"A",{href:!0});var h0=r(td);Db=n(h0,"XLMRobertaForSequenceClassification"),h0.forEach(t),Sb=n(Bd," forward method, overrides the "),Qc=a(Bd,"CODE",{});var m0=r(Qc);Bb=n(m0,"__call__"),m0.forEach(t),Wb=n(Bd," special method."),Bd.forEach(t),Ub=h(Pt),T(Bn.$$.fragment,Pt),Qb=h(Pt),T(Wn.$$.fragment,Pt),Hb=h(Pt),T(Un.$$.fragment,Pt),Kb=h(Pt),T(Qn.$$.fragment,Pt),Vb=h(Pt),T(Hn.$$.fragment,Pt),Pt.forEach(t),yo.forEach(t),zm=h(i),Do=a(i,"H2",{class:!0});var Lu=r(Do);Kn=a(Lu,"A",{id:!0,class:!0,href:!0});var u0=r(Kn);Hc=a(u0,"SPAN",{});var f0=r(Hc);T(ar.$$.fragment,f0),f0.forEach(t),u0.forEach(t),Jb=h(Lu),Kc=a(Lu,"SPAN",{});var g0=r(Kc);Gb=n(g0,"XLMRobertaForMultipleChoice"),g0.forEach(t),Lu.forEach(t),qm=h(i),$t=a(i,"DIV",{class:!0});var To=r($t);T(rr.$$.fragment,To),Yb=h(To),Vc=a(To,"P",{});var _0=r(Vc);Zb=n(_0,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_0.forEach(t),ek=h(To),ir=a(To,"P",{});var Ru=r(ir);tk=n(Ru,"This model inherits from "),od=a(Ru,"A",{href:!0});var b0=r(od);ok=n(b0,"PreTrainedModel"),b0.forEach(t),nk=n(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),sk=h(To),lr=a(To,"P",{});var Eu=r(lr);ak=n(Eu,"This model is also a PyTorch "),dr=a(Eu,"A",{href:!0,rel:!0});var k0=r(dr);rk=n(k0,"torch.nn.Module"),k0.forEach(t),ik=n(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(t),lk=h(To),Kt=a(To,"DIV",{class:!0});var Zs=r(Kt);T(cr.$$.fragment,Zs),dk=h(Zs),So=a(Zs,"P",{});var Wd=r(So);ck=n(Wd,"The "),nd=a(Wd,"A",{href:!0});var v0=r(nd);pk=n(v0,"XLMRobertaForMultipleChoice"),v0.forEach(t),hk=n(Wd," forward method, overrides the "),Jc=a(Wd,"CODE",{});var y0=r(Jc);mk=n(y0,"__call__"),y0.forEach(t),uk=n(Wd," special method."),Wd.forEach(t),fk=h(Zs),T(Vn.$$.fragment,Zs),gk=h(Zs),T(Jn.$$.fragment,Zs),Zs.forEach(t),To.forEach(t),Xm=h(i),Bo=a(i,"H2",{class:!0});var zu=r(Bo);Gn=a(zu,"A",{id:!0,class:!0,href:!0});var T0=r(Gn);Gc=a(T0,"SPAN",{});var w0=r(Gc);T(pr.$$.fragment,w0),w0.forEach(t),T0.forEach(t),_k=h(zu),Yc=a(zu,"SPAN",{});var M0=r(Yc);bk=n(M0,"XLMRobertaForTokenClassification"),M0.forEach(t),zu.forEach(t),Cm=h(i),Ft=a(i,"DIV",{class:!0});var wo=r(Ft);T(hr.$$.fragment,wo),kk=h(wo),Zc=a(wo,"P",{});var $0=r(Zc);vk=n($0,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),$0.forEach(t),yk=h(wo),mr=a(wo,"P",{});var qu=r(mr);Tk=n(qu,"This model inherits from "),sd=a(qu,"A",{href:!0});var F0=r(sd);wk=n(F0,"PreTrainedModel"),F0.forEach(t),Mk=n(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),$k=h(wo),ur=a(wo,"P",{});var Xu=r(ur);Fk=n(Xu,"This model is also a PyTorch "),fr=a(Xu,"A",{href:!0,rel:!0});var x0=r(fr);xk=n(x0,"torch.nn.Module"),x0.forEach(t),Lk=n(Xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xu.forEach(t),Rk=h(wo),Rt=a(wo,"DIV",{class:!0});var Mo=r(Rt);T(gr.$$.fragment,Mo),Ek=h(Mo),Wo=a(Mo,"P",{});var Ud=r(Wo);zk=n(Ud,"The "),ad=a(Ud,"A",{href:!0});var L0=r(ad);qk=n(L0,"XLMRobertaForTokenClassification"),L0.forEach(t),Xk=n(Ud," forward method, overrides the "),ep=a(Ud,"CODE",{});var R0=r(ep);Ck=n(R0,"__call__"),R0.forEach(t),jk=n(Ud," special method."),Ud.forEach(t),Pk=h(Mo),T(Yn.$$.fragment,Mo),Ak=h(Mo),T(Zn.$$.fragment,Mo),Ok=h(Mo),T(es.$$.fragment,Mo),Mo.forEach(t),wo.forEach(t),jm=h(i),Uo=a(i,"H2",{class:!0});var Cu=r(Uo);ts=a(Cu,"A",{id:!0,class:!0,href:!0});var E0=r(ts);tp=a(E0,"SPAN",{});var z0=r(tp);T(_r.$$.fragment,z0),z0.forEach(t),E0.forEach(t),Nk=h(Cu),op=a(Cu,"SPAN",{});var q0=r(op);Ik=n(q0,"XLMRobertaForQuestionAnswering"),q0.forEach(t),Cu.forEach(t),Pm=h(i),xt=a(i,"DIV",{class:!0});var $o=r(xt);T(br.$$.fragment,$o),Dk=h($o),Qo=a($o,"P",{});var Qd=r(Qo);Sk=n(Qd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),np=a(Qd,"CODE",{});var X0=r(np);Bk=n(X0,"span start logits"),X0.forEach(t),Wk=n(Qd," and "),sp=a(Qd,"CODE",{});var C0=r(sp);Uk=n(C0,"span end logits"),C0.forEach(t),Qk=n(Qd,")."),Qd.forEach(t),Hk=h($o),kr=a($o,"P",{});var ju=r(kr);Kk=n(ju,"This model inherits from "),rd=a(ju,"A",{href:!0});var j0=r(rd);Vk=n(j0,"PreTrainedModel"),j0.forEach(t),Jk=n(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),Gk=h($o),vr=a($o,"P",{});var Pu=r(vr);Yk=n(Pu,"This model is also a PyTorch "),yr=a(Pu,"A",{href:!0,rel:!0});var P0=r(yr);Zk=n(P0,"torch.nn.Module"),P0.forEach(t),ev=n(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),tv=h($o),Et=a($o,"DIV",{class:!0});var Fo=r(Et);T(Tr.$$.fragment,Fo),ov=h(Fo),Ho=a(Fo,"P",{});var Hd=r(Ho);nv=n(Hd,"The "),id=a(Hd,"A",{href:!0});var A0=r(id);sv=n(A0,"XLMRobertaForQuestionAnswering"),A0.forEach(t),av=n(Hd," forward method, overrides the "),ap=a(Hd,"CODE",{});var O0=r(ap);rv=n(O0,"__call__"),O0.forEach(t),iv=n(Hd," special method."),Hd.forEach(t),lv=h(Fo),T(os.$$.fragment,Fo),dv=h(Fo),T(ns.$$.fragment,Fo),cv=h(Fo),T(ss.$$.fragment,Fo),Fo.forEach(t),$o.forEach(t),Am=h(i),Ko=a(i,"H2",{class:!0});var Au=r(Ko);as=a(Au,"A",{id:!0,class:!0,href:!0});var N0=r(as);rp=a(N0,"SPAN",{});var I0=r(rp);T(wr.$$.fragment,I0),I0.forEach(t),N0.forEach(t),pv=h(Au),ip=a(Au,"SPAN",{});var D0=r(ip);hv=n(D0,"TFXLMRobertaModel"),D0.forEach(t),Au.forEach(t),Om=h(i),at=a(i,"DIV",{class:!0});var At=r(at);T(Mr.$$.fragment,At),mv=h(At),lp=a(At,"P",{});var S0=r(lp);uv=n(S0,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),S0.forEach(t),fv=h(At),$r=a(At,"P",{});var Ou=r($r);gv=n(Ou,"This model inherits from "),ld=a(Ou,"A",{href:!0});var B0=r(ld);_v=n(B0,"TFPreTrainedModel"),B0.forEach(t),bv=n(Ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou.forEach(t),kv=h(At),Fr=a(At,"P",{});var Nu=r(Fr);vv=n(Nu,"This model is also a "),xr=a(Nu,"A",{href:!0,rel:!0});var W0=r(xr);yv=n(W0,"tf.keras.Model"),W0.forEach(t),Tv=n(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(t),wv=h(At),T(rs.$$.fragment,At),Mv=h(At),Lr=a(At,"P",{});var Iu=r(Lr);$v=n(Iu,"This class overrides "),dd=a(Iu,"A",{href:!0});var U0=r(dd);Fv=n(U0,"TFRobertaModel"),U0.forEach(t),xv=n(Iu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Iu.forEach(t),Lv=h(At),Vt=a(At,"DIV",{class:!0});var ea=r(Vt);T(Rr.$$.fragment,ea),Rv=h(ea),Vo=a(ea,"P",{});var Kd=r(Vo);Ev=n(Kd,"The "),cd=a(Kd,"A",{href:!0});var Q0=r(cd);zv=n(Q0,"TFRobertaModel"),Q0.forEach(t),qv=n(Kd," forward method, overrides the "),dp=a(Kd,"CODE",{});var H0=r(dp);Xv=n(H0,"__call__"),H0.forEach(t),Cv=n(Kd," special method."),Kd.forEach(t),jv=h(ea),T(is.$$.fragment,ea),Pv=h(ea),T(ls.$$.fragment,ea),ea.forEach(t),At.forEach(t),Nm=h(i),Jo=a(i,"H2",{class:!0});var Du=r(Jo);ds=a(Du,"A",{id:!0,class:!0,href:!0});var K0=r(ds);cp=a(K0,"SPAN",{});var V0=r(cp);T(Er.$$.fragment,V0),V0.forEach(t),K0.forEach(t),Av=h(Du),pp=a(Du,"SPAN",{});var J0=r(pp);Ov=n(J0,"TFXLMRobertaForMaskedLM"),J0.forEach(t),Du.forEach(t),Im=h(i),rt=a(i,"DIV",{class:!0});var Ot=r(rt);T(zr.$$.fragment,Ot),Nv=h(Ot),qr=a(Ot,"P",{});var Su=r(qr);Iv=n(Su,"XLM-RoBERTa Model with a "),hp=a(Su,"CODE",{});var G0=r(hp);Dv=n(G0,"language modeling"),G0.forEach(t),Sv=n(Su," head on top."),Su.forEach(t),Bv=h(Ot),Xr=a(Ot,"P",{});var Bu=r(Xr);Wv=n(Bu,"This model inherits from "),pd=a(Bu,"A",{href:!0});var Y0=r(pd);Uv=n(Y0,"TFPreTrainedModel"),Y0.forEach(t),Qv=n(Bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu.forEach(t),Hv=h(Ot),Cr=a(Ot,"P",{});var Wu=r(Cr);Kv=n(Wu,"This model is also a "),jr=a(Wu,"A",{href:!0,rel:!0});var Z0=r(jr);Vv=n(Z0,"tf.keras.Model"),Z0.forEach(t),Jv=n(Wu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wu.forEach(t),Gv=h(Ot),T(cs.$$.fragment,Ot),Yv=h(Ot),Pr=a(Ot,"P",{});var Uu=r(Pr);Zv=n(Uu,"This class overrides "),hd=a(Uu,"A",{href:!0});var e4=r(hd);ey=n(e4,"TFRobertaForMaskedLM"),e4.forEach(t),ty=n(Uu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Uu.forEach(t),oy=h(Ot),zt=a(Ot,"DIV",{class:!0});var xo=r(zt);T(Ar.$$.fragment,xo),ny=h(xo),Go=a(xo,"P",{});var Vd=r(Go);sy=n(Vd,"The "),md=a(Vd,"A",{href:!0});var t4=r(md);ay=n(t4,"TFRobertaForMaskedLM"),t4.forEach(t),ry=n(Vd," forward method, overrides the "),mp=a(Vd,"CODE",{});var o4=r(mp);iy=n(o4,"__call__"),o4.forEach(t),ly=n(Vd," special method."),Vd.forEach(t),dy=h(xo),T(ps.$$.fragment,xo),cy=h(xo),T(hs.$$.fragment,xo),py=h(xo),T(ms.$$.fragment,xo),xo.forEach(t),Ot.forEach(t),Dm=h(i),Yo=a(i,"H2",{class:!0});var Qu=r(Yo);us=a(Qu,"A",{id:!0,class:!0,href:!0});var n4=r(us);up=a(n4,"SPAN",{});var s4=r(up);T(Or.$$.fragment,s4),s4.forEach(t),n4.forEach(t),hy=h(Qu),fp=a(Qu,"SPAN",{});var a4=r(fp);my=n(a4,"TFXLMRobertaForSequenceClassification"),a4.forEach(t),Qu.forEach(t),Sm=h(i),it=a(i,"DIV",{class:!0});var Nt=r(it);T(Nr.$$.fragment,Nt),uy=h(Nt),gp=a(Nt,"P",{});var r4=r(gp);fy=n(r4,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),r4.forEach(t),gy=h(Nt),Ir=a(Nt,"P",{});var Hu=r(Ir);_y=n(Hu,"This model inherits from "),ud=a(Hu,"A",{href:!0});var i4=r(ud);by=n(i4,"TFPreTrainedModel"),i4.forEach(t),ky=n(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),vy=h(Nt),Dr=a(Nt,"P",{});var Ku=r(Dr);yy=n(Ku,"This model is also a "),Sr=a(Ku,"A",{href:!0,rel:!0});var l4=r(Sr);Ty=n(l4,"tf.keras.Model"),l4.forEach(t),wy=n(Ku,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ku.forEach(t),My=h(Nt),T(fs.$$.fragment,Nt),$y=h(Nt),Br=a(Nt,"P",{});var Vu=r(Br);Fy=n(Vu,"This class overrides "),fd=a(Vu,"A",{href:!0});var d4=r(fd);xy=n(d4,"TFRobertaForSequenceClassification"),d4.forEach(t),Ly=n(Vu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Vu.forEach(t),Ry=h(Nt),qt=a(Nt,"DIV",{class:!0});var Lo=r(qt);T(Wr.$$.fragment,Lo),Ey=h(Lo),Zo=a(Lo,"P",{});var Jd=r(Zo);zy=n(Jd,"The "),gd=a(Jd,"A",{href:!0});var c4=r(gd);qy=n(c4,"TFRobertaForSequenceClassification"),c4.forEach(t),Xy=n(Jd," forward method, overrides the "),_p=a(Jd,"CODE",{});var p4=r(_p);Cy=n(p4,"__call__"),p4.forEach(t),jy=n(Jd," special method."),Jd.forEach(t),Py=h(Lo),T(gs.$$.fragment,Lo),Ay=h(Lo),T(_s.$$.fragment,Lo),Oy=h(Lo),T(bs.$$.fragment,Lo),Lo.forEach(t),Nt.forEach(t),Bm=h(i),en=a(i,"H2",{class:!0});var Ju=r(en);ks=a(Ju,"A",{id:!0,class:!0,href:!0});var h4=r(ks);bp=a(h4,"SPAN",{});var m4=r(bp);T(Ur.$$.fragment,m4),m4.forEach(t),h4.forEach(t),Ny=h(Ju),kp=a(Ju,"SPAN",{});var u4=r(kp);Iy=n(u4,"TFXLMRobertaForMultipleChoice"),u4.forEach(t),Ju.forEach(t),Wm=h(i),lt=a(i,"DIV",{class:!0});var It=r(lt);T(Qr.$$.fragment,It),Dy=h(It),vp=a(It,"P",{});var f4=r(vp);Sy=n(f4,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),f4.forEach(t),By=h(It),Hr=a(It,"P",{});var Gu=r(Hr);Wy=n(Gu,"This model inherits from "),_d=a(Gu,"A",{href:!0});var g4=r(_d);Uy=n(g4,"TFPreTrainedModel"),g4.forEach(t),Qy=n(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(t),Hy=h(It),Kr=a(It,"P",{});var Yu=r(Kr);Ky=n(Yu,"This model is also a "),Vr=a(Yu,"A",{href:!0,rel:!0});var _4=r(Vr);Vy=n(_4,"tf.keras.Model"),_4.forEach(t),Jy=n(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),Gy=h(It),T(vs.$$.fragment,It),Yy=h(It),Jr=a(It,"P",{});var Zu=r(Jr);Zy=n(Zu,"This class overrides "),bd=a(Zu,"A",{href:!0});var b4=r(bd);eT=n(b4,"TFRobertaForMultipleChoice"),b4.forEach(t),tT=n(Zu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Zu.forEach(t),oT=h(It),Jt=a(It,"DIV",{class:!0});var ta=r(Jt);T(Gr.$$.fragment,ta),nT=h(ta),tn=a(ta,"P",{});var Gd=r(tn);sT=n(Gd,"The "),kd=a(Gd,"A",{href:!0});var k4=r(kd);aT=n(k4,"TFRobertaForMultipleChoice"),k4.forEach(t),rT=n(Gd," forward method, overrides the "),yp=a(Gd,"CODE",{});var v4=r(yp);iT=n(v4,"__call__"),v4.forEach(t),lT=n(Gd," special method."),Gd.forEach(t),dT=h(ta),T(ys.$$.fragment,ta),cT=h(ta),T(Ts.$$.fragment,ta),ta.forEach(t),It.forEach(t),Um=h(i),on=a(i,"H2",{class:!0});var ef=r(on);ws=a(ef,"A",{id:!0,class:!0,href:!0});var y4=r(ws);Tp=a(y4,"SPAN",{});var T4=r(Tp);T(Yr.$$.fragment,T4),T4.forEach(t),y4.forEach(t),pT=h(ef),wp=a(ef,"SPAN",{});var w4=r(wp);hT=n(w4,"TFXLMRobertaForTokenClassification"),w4.forEach(t),ef.forEach(t),Qm=h(i),dt=a(i,"DIV",{class:!0});var Dt=r(dt);T(Zr.$$.fragment,Dt),mT=h(Dt),Mp=a(Dt,"P",{});var M4=r(Mp);uT=n(M4,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),M4.forEach(t),fT=h(Dt),ei=a(Dt,"P",{});var tf=r(ei);gT=n(tf,"This model inherits from "),vd=a(tf,"A",{href:!0});var $4=r(vd);_T=n($4,"TFPreTrainedModel"),$4.forEach(t),bT=n(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),kT=h(Dt),ti=a(Dt,"P",{});var of=r(ti);vT=n(of,"This model is also a "),oi=a(of,"A",{href:!0,rel:!0});var F4=r(oi);yT=n(F4,"tf.keras.Model"),F4.forEach(t),TT=n(of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),of.forEach(t),wT=h(Dt),T(Ms.$$.fragment,Dt),MT=h(Dt),ni=a(Dt,"P",{});var nf=r(ni);$T=n(nf,"This class overrides "),yd=a(nf,"A",{href:!0});var x4=r(yd);FT=n(x4,"TFRobertaForTokenClassification"),x4.forEach(t),xT=n(nf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),nf.forEach(t),LT=h(Dt),Xt=a(Dt,"DIV",{class:!0});var Ro=r(Xt);T(si.$$.fragment,Ro),RT=h(Ro),nn=a(Ro,"P",{});var Yd=r(nn);ET=n(Yd,"The "),Td=a(Yd,"A",{href:!0});var L4=r(Td);zT=n(L4,"TFRobertaForTokenClassification"),L4.forEach(t),qT=n(Yd," forward method, overrides the "),$p=a(Yd,"CODE",{});var R4=r($p);XT=n(R4,"__call__"),R4.forEach(t),CT=n(Yd," special method."),Yd.forEach(t),jT=h(Ro),T($s.$$.fragment,Ro),PT=h(Ro),T(Fs.$$.fragment,Ro),AT=h(Ro),T(xs.$$.fragment,Ro),Ro.forEach(t),Dt.forEach(t),Hm=h(i),sn=a(i,"H2",{class:!0});var sf=r(sn);Ls=a(sf,"A",{id:!0,class:!0,href:!0});var E4=r(Ls);Fp=a(E4,"SPAN",{});var z4=r(Fp);T(ai.$$.fragment,z4),z4.forEach(t),E4.forEach(t),OT=h(sf),xp=a(sf,"SPAN",{});var q4=r(xp);NT=n(q4,"TFXLMRobertaForQuestionAnswering"),q4.forEach(t),sf.forEach(t),Km=h(i),ct=a(i,"DIV",{class:!0});var St=r(ct);T(ri.$$.fragment,St),IT=h(St),an=a(St,"P",{});var Zd=r(an);DT=n(Zd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lp=a(Zd,"CODE",{});var X4=r(Lp);ST=n(X4,"span start logits"),X4.forEach(t),BT=n(Zd," and "),Rp=a(Zd,"CODE",{});var C4=r(Rp);WT=n(C4,"span end logits"),C4.forEach(t),UT=n(Zd,")."),Zd.forEach(t),QT=h(St),ii=a(St,"P",{});var af=r(ii);HT=n(af,"This model inherits from "),wd=a(af,"A",{href:!0});var j4=r(wd);KT=n(j4,"TFPreTrainedModel"),j4.forEach(t),VT=n(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(t),JT=h(St),li=a(St,"P",{});var rf=r(li);GT=n(rf,"This model is also a "),di=a(rf,"A",{href:!0,rel:!0});var P4=r(di);YT=n(P4,"tf.keras.Model"),P4.forEach(t),ZT=n(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(t),ew=h(St),T(Rs.$$.fragment,St),tw=h(St),ci=a(St,"P",{});var lf=r(ci);ow=n(lf,"This class overrides "),Ep=a(lf,"CODE",{});var A4=r(Ep);nw=n(A4,"TFRobertaForQuestionAnsweringSimple"),A4.forEach(t),sw=n(lf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),lf.forEach(t),aw=h(St),Ct=a(St,"DIV",{class:!0});var Eo=r(Ct);T(pi.$$.fragment,Eo),rw=h(Eo),rn=a(Eo,"P",{});var ec=r(rn);iw=n(ec,"The "),Md=a(ec,"A",{href:!0});var O4=r(Md);lw=n(O4,"TFRobertaForQuestionAnswering"),O4.forEach(t),dw=n(ec," forward method, overrides the "),zp=a(ec,"CODE",{});var N4=r(zp);cw=n(N4,"__call__"),N4.forEach(t),pw=n(ec," special method."),ec.forEach(t),hw=h(Eo),T(Es.$$.fragment,Eo),mw=h(Eo),T(zs.$$.fragment,Eo),uw=h(Eo),T(qs.$$.fragment,Eo),Eo.forEach(t),St.forEach(t),Vm=h(i),ln=a(i,"H2",{class:!0});var df=r(ln);Xs=a(df,"A",{id:!0,class:!0,href:!0});var I4=r(Xs);qp=a(I4,"SPAN",{});var D4=r(qp);T(hi.$$.fragment,D4),D4.forEach(t),I4.forEach(t),fw=h(df),Xp=a(df,"SPAN",{});var S4=r(Xp);gw=n(S4,"FlaxXLMRobertaModel"),S4.forEach(t),df.forEach(t),Jm=h(i),pt=a(i,"DIV",{class:!0});var Bt=r(pt);T(mi.$$.fragment,Bt),_w=h(Bt),ui=a(Bt,"P",{});var cf=r(ui);bw=n(cf,`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),$d=a(cf,"A",{href:!0});var B4=r($d);kw=n(B4,"FlaxPreTrainedModel"),B4.forEach(t),vw=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cf.forEach(t),yw=h(Bt),fi=a(Bt,"P",{});var pf=r(fi);Tw=n(pf,"This model is also a Flax Linen "),gi=a(pf,"A",{href:!0,rel:!0});var W4=r(gi);ww=n(W4,"flax.linen.Module"),W4.forEach(t),Mw=n(pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pf.forEach(t),$w=h(Bt),Cp=a(Bt,"P",{});var U4=r(Cp);Fw=n(U4,"Finally, this model supports inherent JAX features such as:"),U4.forEach(t),xw=h(Bt),so=a(Bt,"UL",{});var oa=r(so);jp=a(oa,"LI",{});var Q4=r(jp);_i=a(Q4,"A",{href:!0,rel:!0});var H4=r(_i);Lw=n(H4,"Just-In-Time (JIT) compilation"),H4.forEach(t),Q4.forEach(t),Rw=h(oa),Pp=a(oa,"LI",{});var K4=r(Pp);bi=a(K4,"A",{href:!0,rel:!0});var V4=r(bi);Ew=n(V4,"Automatic Differentiation"),V4.forEach(t),K4.forEach(t),zw=h(oa),Ap=a(oa,"LI",{});var J4=r(Ap);ki=a(J4,"A",{href:!0,rel:!0});var G4=r(ki);qw=n(G4,"Vectorization"),G4.forEach(t),J4.forEach(t),Xw=h(oa),Op=a(oa,"LI",{});var Y4=r(Op);vi=a(Y4,"A",{href:!0,rel:!0});var Z4=r(vi);Cw=n(Z4,"Parallelization"),Z4.forEach(t),Y4.forEach(t),oa.forEach(t),jw=h(Bt),yi=a(Bt,"P",{});var hf=r(yi);Pw=n(hf,"This class overrides "),Fd=a(hf,"A",{href:!0});var eF=r(Fd);Aw=n(eF,"FlaxRobertaModel"),eF.forEach(t),Ow=n(hf,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),hf.forEach(t),Nw=h(Bt),Gt=a(Bt,"DIV",{class:!0});var na=r(Gt);T(Ti.$$.fragment,na),Iw=h(na),dn=a(na,"P",{});var tc=r(dn);Dw=n(tc,"The "),Np=a(tc,"CODE",{});var tF=r(Np);Sw=n(tF,"FlaxRobertaPreTrainedModel"),tF.forEach(t),Bw=n(tc," forward method, overrides the "),Ip=a(tc,"CODE",{});var oF=r(Ip);Ww=n(oF,"__call__"),oF.forEach(t),Uw=n(tc," special method."),tc.forEach(t),Qw=h(na),T(Cs.$$.fragment,na),Hw=h(na),T(js.$$.fragment,na),na.forEach(t),Bt.forEach(t),Gm=h(i),cn=a(i,"H2",{class:!0});var mf=r(cn);Ps=a(mf,"A",{id:!0,class:!0,href:!0});var nF=r(Ps);Dp=a(nF,"SPAN",{});var sF=r(Dp);T(wi.$$.fragment,sF),sF.forEach(t),nF.forEach(t),Kw=h(mf),Sp=a(mf,"SPAN",{});var aF=r(Sp);Vw=n(aF,"FlaxXLMRobertaForMaskedLM"),aF.forEach(t),mf.forEach(t),Ym=h(i),ht=a(i,"DIV",{class:!0});var Wt=r(ht);T(Mi.$$.fragment,Wt),Jw=h(Wt),pn=a(Wt,"P",{});var oc=r(pn);Gw=n(oc,"XLM-RoBERTa Model with a "),Bp=a(oc,"CODE",{});var rF=r(Bp);Yw=n(rF,"language modeling"),rF.forEach(t),Zw=n(oc,` head on top.
This model inherits from `),xd=a(oc,"A",{href:!0});var iF=r(xd);e2=n(iF,"FlaxPreTrainedModel"),iF.forEach(t),t2=n(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oc.forEach(t),o2=h(Wt),$i=a(Wt,"P",{});var uf=r($i);n2=n(uf,"This model is also a Flax Linen "),Fi=a(uf,"A",{href:!0,rel:!0});var lF=r(Fi);s2=n(lF,"flax.linen.Module"),lF.forEach(t),a2=n(uf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uf.forEach(t),r2=h(Wt),Wp=a(Wt,"P",{});var dF=r(Wp);i2=n(dF,"Finally, this model supports inherent JAX features such as:"),dF.forEach(t),l2=h(Wt),ao=a(Wt,"UL",{});var sa=r(ao);Up=a(sa,"LI",{});var cF=r(Up);xi=a(cF,"A",{href:!0,rel:!0});var pF=r(xi);d2=n(pF,"Just-In-Time (JIT) compilation"),pF.forEach(t),cF.forEach(t),c2=h(sa),Qp=a(sa,"LI",{});var hF=r(Qp);Li=a(hF,"A",{href:!0,rel:!0});var mF=r(Li);p2=n(mF,"Automatic Differentiation"),mF.forEach(t),hF.forEach(t),h2=h(sa),Hp=a(sa,"LI",{});var uF=r(Hp);Ri=a(uF,"A",{href:!0,rel:!0});var fF=r(Ri);m2=n(fF,"Vectorization"),fF.forEach(t),uF.forEach(t),u2=h(sa),Kp=a(sa,"LI",{});var gF=r(Kp);Ei=a(gF,"A",{href:!0,rel:!0});var _F=r(Ei);f2=n(_F,"Parallelization"),_F.forEach(t),gF.forEach(t),sa.forEach(t),g2=h(Wt),zi=a(Wt,"P",{});var ff=r(zi);_2=n(ff,"This class overrides "),Ld=a(ff,"A",{href:!0});var bF=r(Ld);b2=n(bF,"FlaxRobertaForMaskedLM"),bF.forEach(t),k2=n(ff,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ff.forEach(t),v2=h(Wt),Yt=a(Wt,"DIV",{class:!0});var aa=r(Yt);T(qi.$$.fragment,aa),y2=h(aa),hn=a(aa,"P",{});var nc=r(hn);T2=n(nc,"The "),Vp=a(nc,"CODE",{});var kF=r(Vp);w2=n(kF,"FlaxRobertaPreTrainedModel"),kF.forEach(t),M2=n(nc," forward method, overrides the "),Jp=a(nc,"CODE",{});var vF=r(Jp);$2=n(vF,"__call__"),vF.forEach(t),F2=n(nc," special method."),nc.forEach(t),x2=h(aa),T(As.$$.fragment,aa),L2=h(aa),T(Os.$$.fragment,aa),aa.forEach(t),Wt.forEach(t),Zm=h(i),mn=a(i,"H2",{class:!0});var gf=r(mn);Ns=a(gf,"A",{id:!0,class:!0,href:!0});var yF=r(Ns);Gp=a(yF,"SPAN",{});var TF=r(Gp);T(Xi.$$.fragment,TF),TF.forEach(t),yF.forEach(t),R2=h(gf),Yp=a(gf,"SPAN",{});var wF=r(Yp);E2=n(wF,"FlaxXLMRobertaForSequenceClassification"),wF.forEach(t),gf.forEach(t),eu=h(i),et=a(i,"DIV",{class:!0});var _t=r(et);T(Ci.$$.fragment,_t),z2=h(_t),Zp=a(_t,"P",{});var MF=r(Zp);q2=n(MF,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),MF.forEach(t),X2=h(_t),ji=a(_t,"P",{});var _f=r(ji);C2=n(_f,"This model inherits from "),Rd=a(_f,"A",{href:!0});var $F=r(Rd);j2=n($F,"FlaxPreTrainedModel"),$F.forEach(t),P2=n(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_f.forEach(t),A2=h(_t),Pi=a(_t,"P",{});var bf=r(Pi);O2=n(bf,"This model is also a Flax Linen "),Ai=a(bf,"A",{href:!0,rel:!0});var FF=r(Ai);N2=n(FF,"flax.linen.Module"),FF.forEach(t),I2=n(bf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bf.forEach(t),D2=h(_t),eh=a(_t,"P",{});var xF=r(eh);S2=n(xF,"Finally, this model supports inherent JAX features such as:"),xF.forEach(t),B2=h(_t),ro=a(_t,"UL",{});var ra=r(ro);th=a(ra,"LI",{});var LF=r(th);Oi=a(LF,"A",{href:!0,rel:!0});var RF=r(Oi);W2=n(RF,"Just-In-Time (JIT) compilation"),RF.forEach(t),LF.forEach(t),U2=h(ra),oh=a(ra,"LI",{});var EF=r(oh);Ni=a(EF,"A",{href:!0,rel:!0});var zF=r(Ni);Q2=n(zF,"Automatic Differentiation"),zF.forEach(t),EF.forEach(t),H2=h(ra),nh=a(ra,"LI",{});var qF=r(nh);Ii=a(qF,"A",{href:!0,rel:!0});var XF=r(Ii);K2=n(XF,"Vectorization"),XF.forEach(t),qF.forEach(t),V2=h(ra),sh=a(ra,"LI",{});var CF=r(sh);Di=a(CF,"A",{href:!0,rel:!0});var jF=r(Di);J2=n(jF,"Parallelization"),jF.forEach(t),CF.forEach(t),ra.forEach(t),G2=h(_t),Si=a(_t,"P",{});var kf=r(Si);Y2=n(kf,"This class overrides "),Ed=a(kf,"A",{href:!0});var PF=r(Ed);Z2=n(PF,"FlaxRobertaForSequenceClassification"),PF.forEach(t),eM=n(kf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),kf.forEach(t),tM=h(_t),Zt=a(_t,"DIV",{class:!0});var ia=r(Zt);T(Bi.$$.fragment,ia),oM=h(ia),un=a(ia,"P",{});var sc=r(un);nM=n(sc,"The "),ah=a(sc,"CODE",{});var AF=r(ah);sM=n(AF,"FlaxRobertaPreTrainedModel"),AF.forEach(t),aM=n(sc," forward method, overrides the "),rh=a(sc,"CODE",{});var OF=r(rh);rM=n(OF,"__call__"),OF.forEach(t),iM=n(sc," special method."),sc.forEach(t),lM=h(ia),T(Is.$$.fragment,ia),dM=h(ia),T(Ds.$$.fragment,ia),ia.forEach(t),_t.forEach(t),tu=h(i),fn=a(i,"H2",{class:!0});var vf=r(fn);Ss=a(vf,"A",{id:!0,class:!0,href:!0});var NF=r(Ss);ih=a(NF,"SPAN",{});var IF=r(ih);T(Wi.$$.fragment,IF),IF.forEach(t),NF.forEach(t),cM=h(vf),lh=a(vf,"SPAN",{});var DF=r(lh);pM=n(DF,"FlaxXLMRobertaForMultipleChoice"),DF.forEach(t),vf.forEach(t),ou=h(i),tt=a(i,"DIV",{class:!0});var bt=r(tt);T(Ui.$$.fragment,bt),hM=h(bt),dh=a(bt,"P",{});var SF=r(dh);mM=n(SF,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),SF.forEach(t),uM=h(bt),Qi=a(bt,"P",{});var yf=r(Qi);fM=n(yf,"This model inherits from "),zd=a(yf,"A",{href:!0});var BF=r(zd);gM=n(BF,"FlaxPreTrainedModel"),BF.forEach(t),_M=n(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yf.forEach(t),bM=h(bt),Hi=a(bt,"P",{});var Tf=r(Hi);kM=n(Tf,"This model is also a Flax Linen "),Ki=a(Tf,"A",{href:!0,rel:!0});var WF=r(Ki);vM=n(WF,"flax.linen.Module"),WF.forEach(t),yM=n(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(t),TM=h(bt),ch=a(bt,"P",{});var UF=r(ch);wM=n(UF,"Finally, this model supports inherent JAX features such as:"),UF.forEach(t),MM=h(bt),io=a(bt,"UL",{});var la=r(io);ph=a(la,"LI",{});var QF=r(ph);Vi=a(QF,"A",{href:!0,rel:!0});var HF=r(Vi);$M=n(HF,"Just-In-Time (JIT) compilation"),HF.forEach(t),QF.forEach(t),FM=h(la),hh=a(la,"LI",{});var KF=r(hh);Ji=a(KF,"A",{href:!0,rel:!0});var VF=r(Ji);xM=n(VF,"Automatic Differentiation"),VF.forEach(t),KF.forEach(t),LM=h(la),mh=a(la,"LI",{});var JF=r(mh);Gi=a(JF,"A",{href:!0,rel:!0});var GF=r(Gi);RM=n(GF,"Vectorization"),GF.forEach(t),JF.forEach(t),EM=h(la),uh=a(la,"LI",{});var YF=r(uh);Yi=a(YF,"A",{href:!0,rel:!0});var ZF=r(Yi);zM=n(ZF,"Parallelization"),ZF.forEach(t),YF.forEach(t),la.forEach(t),qM=h(bt),Zi=a(bt,"P",{});var wf=r(Zi);XM=n(wf,"This class overrides "),qd=a(wf,"A",{href:!0});var ex=r(qd);CM=n(ex,"FlaxRobertaForMultipleChoice"),ex.forEach(t),jM=n(wf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),wf.forEach(t),PM=h(bt),eo=a(bt,"DIV",{class:!0});var da=r(eo);T(el.$$.fragment,da),AM=h(da),gn=a(da,"P",{});var ac=r(gn);OM=n(ac,"The "),fh=a(ac,"CODE",{});var tx=r(fh);NM=n(tx,"FlaxRobertaPreTrainedModel"),tx.forEach(t),IM=n(ac," forward method, overrides the "),gh=a(ac,"CODE",{});var ox=r(gh);DM=n(ox,"__call__"),ox.forEach(t),SM=n(ac," special method."),ac.forEach(t),BM=h(da),T(Bs.$$.fragment,da),WM=h(da),T(Ws.$$.fragment,da),da.forEach(t),bt.forEach(t),nu=h(i),_n=a(i,"H2",{class:!0});var Mf=r(_n);Us=a(Mf,"A",{id:!0,class:!0,href:!0});var nx=r(Us);_h=a(nx,"SPAN",{});var sx=r(_h);T(tl.$$.fragment,sx),sx.forEach(t),nx.forEach(t),UM=h(Mf),bh=a(Mf,"SPAN",{});var ax=r(bh);QM=n(ax,"FlaxXLMRobertaForTokenClassification"),ax.forEach(t),Mf.forEach(t),su=h(i),ot=a(i,"DIV",{class:!0});var kt=r(ot);T(ol.$$.fragment,kt),HM=h(kt),kh=a(kt,"P",{});var rx=r(kh);KM=n(rx,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),rx.forEach(t),VM=h(kt),nl=a(kt,"P",{});var $f=r(nl);JM=n($f,"This model inherits from "),Xd=a($f,"A",{href:!0});var ix=r(Xd);GM=n(ix,"FlaxPreTrainedModel"),ix.forEach(t),YM=n($f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$f.forEach(t),ZM=h(kt),sl=a(kt,"P",{});var Ff=r(sl);e$=n(Ff,"This model is also a Flax Linen "),al=a(Ff,"A",{href:!0,rel:!0});var lx=r(al);t$=n(lx,"flax.linen.Module"),lx.forEach(t),o$=n(Ff,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ff.forEach(t),n$=h(kt),vh=a(kt,"P",{});var dx=r(vh);s$=n(dx,"Finally, this model supports inherent JAX features such as:"),dx.forEach(t),a$=h(kt),lo=a(kt,"UL",{});var ca=r(lo);yh=a(ca,"LI",{});var cx=r(yh);rl=a(cx,"A",{href:!0,rel:!0});var px=r(rl);r$=n(px,"Just-In-Time (JIT) compilation"),px.forEach(t),cx.forEach(t),i$=h(ca),Th=a(ca,"LI",{});var hx=r(Th);il=a(hx,"A",{href:!0,rel:!0});var mx=r(il);l$=n(mx,"Automatic Differentiation"),mx.forEach(t),hx.forEach(t),d$=h(ca),wh=a(ca,"LI",{});var ux=r(wh);ll=a(ux,"A",{href:!0,rel:!0});var fx=r(ll);c$=n(fx,"Vectorization"),fx.forEach(t),ux.forEach(t),p$=h(ca),Mh=a(ca,"LI",{});var gx=r(Mh);dl=a(gx,"A",{href:!0,rel:!0});var _x=r(dl);h$=n(_x,"Parallelization"),_x.forEach(t),gx.forEach(t),ca.forEach(t),m$=h(kt),cl=a(kt,"P",{});var xf=r(cl);u$=n(xf,"This class overrides "),Cd=a(xf,"A",{href:!0});var bx=r(Cd);f$=n(bx,"FlaxRobertaForTokenClassification"),bx.forEach(t),g$=n(xf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xf.forEach(t),_$=h(kt),to=a(kt,"DIV",{class:!0});var pa=r(to);T(pl.$$.fragment,pa),b$=h(pa),bn=a(pa,"P",{});var rc=r(bn);k$=n(rc,"The "),$h=a(rc,"CODE",{});var kx=r($h);v$=n(kx,"FlaxRobertaPreTrainedModel"),kx.forEach(t),y$=n(rc," forward method, overrides the "),Fh=a(rc,"CODE",{});var vx=r(Fh);T$=n(vx,"__call__"),vx.forEach(t),w$=n(rc," special method."),rc.forEach(t),M$=h(pa),T(Qs.$$.fragment,pa),$$=h(pa),T(Hs.$$.fragment,pa),pa.forEach(t),kt.forEach(t),au=h(i),kn=a(i,"H2",{class:!0});var Lf=r(kn);Ks=a(Lf,"A",{id:!0,class:!0,href:!0});var yx=r(Ks);xh=a(yx,"SPAN",{});var Tx=r(xh);T(hl.$$.fragment,Tx),Tx.forEach(t),yx.forEach(t),F$=h(Lf),Lh=a(Lf,"SPAN",{});var wx=r(Lh);x$=n(wx,"FlaxXLMRobertaForQuestionAnswering"),wx.forEach(t),Lf.forEach(t),ru=h(i),nt=a(i,"DIV",{class:!0});var vt=r(nt);T(ml.$$.fragment,vt),L$=h(vt),vn=a(vt,"P",{});var ic=r(vn);R$=n(ic,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rh=a(ic,"CODE",{});var Mx=r(Rh);E$=n(Mx,"span start logits"),Mx.forEach(t),z$=n(ic," and "),Eh=a(ic,"CODE",{});var $x=r(Eh);q$=n($x,"span end logits"),$x.forEach(t),X$=n(ic,")."),ic.forEach(t),C$=h(vt),ul=a(vt,"P",{});var Rf=r(ul);j$=n(Rf,"This model inherits from "),jd=a(Rf,"A",{href:!0});var Fx=r(jd);P$=n(Fx,"FlaxPreTrainedModel"),Fx.forEach(t),A$=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rf.forEach(t),O$=h(vt),fl=a(vt,"P",{});var Ef=r(fl);N$=n(Ef,"This model is also a Flax Linen "),gl=a(Ef,"A",{href:!0,rel:!0});var xx=r(gl);I$=n(xx,"flax.linen.Module"),xx.forEach(t),D$=n(Ef,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ef.forEach(t),S$=h(vt),zh=a(vt,"P",{});var Lx=r(zh);B$=n(Lx,"Finally, this model supports inherent JAX features such as:"),Lx.forEach(t),W$=h(vt),co=a(vt,"UL",{});var ha=r(co);qh=a(ha,"LI",{});var Rx=r(qh);_l=a(Rx,"A",{href:!0,rel:!0});var Ex=r(_l);U$=n(Ex,"Just-In-Time (JIT) compilation"),Ex.forEach(t),Rx.forEach(t),Q$=h(ha),Xh=a(ha,"LI",{});var zx=r(Xh);bl=a(zx,"A",{href:!0,rel:!0});var qx=r(bl);H$=n(qx,"Automatic Differentiation"),qx.forEach(t),zx.forEach(t),K$=h(ha),Ch=a(ha,"LI",{});var Xx=r(Ch);kl=a(Xx,"A",{href:!0,rel:!0});var Cx=r(kl);V$=n(Cx,"Vectorization"),Cx.forEach(t),Xx.forEach(t),J$=h(ha),jh=a(ha,"LI",{});var jx=r(jh);vl=a(jx,"A",{href:!0,rel:!0});var Px=r(vl);G$=n(Px,"Parallelization"),Px.forEach(t),jx.forEach(t),ha.forEach(t),Y$=h(vt),yl=a(vt,"P",{});var zf=r(yl);Z$=n(zf,"This class overrides "),Pd=a(zf,"A",{href:!0});var Ax=r(Pd);e1=n(Ax,"FlaxRobertaForQuestionAnswering"),Ax.forEach(t),t1=n(zf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),zf.forEach(t),o1=h(vt),oo=a(vt,"DIV",{class:!0});var ma=r(oo);T(Tl.$$.fragment,ma),n1=h(ma),yn=a(ma,"P",{});var lc=r(yn);s1=n(lc,"The "),Ph=a(lc,"CODE",{});var Ox=r(Ph);a1=n(Ox,"FlaxRobertaPreTrainedModel"),Ox.forEach(t),r1=n(lc," forward method, overrides the "),Ah=a(lc,"CODE",{});var Nx=r(Ah);i1=n(Nx,"__call__"),Nx.forEach(t),l1=n(lc," special method."),lc.forEach(t),d1=h(ma),T(Vs.$$.fragment,ma),c1=h(ma),T(Js.$$.fragment,ma),ma.forEach(t),vt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(HL)),u(f,"id","xlmroberta"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#xlmroberta"),u(c,"class","relative group"),u(re,"id","overview"),u(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(re,"href","#overview"),u(O,"class","relative group"),u(le,"href","https://arxiv.org/abs/1911.02116"),u(le,"rel","nofollow"),u(he,"href","roberta"),u(pe,"href","https://huggingface.co/stefan-it"),u(pe,"rel","nofollow"),u(ee,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),u(ee,"rel","nofollow"),u(ie,"id","transformers.XLMRobertaConfig"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#transformers.XLMRobertaConfig"),u(ae,"class","relative group"),u(De,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaModel"),u(Se,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel"),u(Ne,"href","https://huggingface.co/xlm-roberta-base"),u(Ne,"rel","nofollow"),u(jl,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pl,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"id","transformers.XLMRobertaTokenizer"),u(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fn,"href","#transformers.XLMRobertaTokenizer"),u(zo,"class","relative group"),u(Al,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Ol,"href","/docs/transformers/v4.24.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(ga,"href","https://github.com/google/sentencepiece"),u(ga,"rel","nofollow"),u(Nl,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.XLMRobertaTokenizerFast"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.XLMRobertaTokenizerFast"),u(qo,"class","relative group"),u(Bl,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Wl,"href","/docs/transformers/v4.24.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(Fa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),u(Fa,"rel","nofollow"),u(Ul,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.XLMRobertaModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.XLMRobertaModel"),u(Xo,"class","relative group"),u(Kl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Aa,"href","https://arxiv.org/abs/1706.03762"),u(Aa,"rel","nofollow"),u(Vl,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaModel"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.XLMRobertaForCausalLM"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.XLMRobertaForCausalLM"),u(jo,"class","relative group"),u(Jl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(Gl,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForCausalLM"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.XLMRobertaForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.XLMRobertaForMaskedLM"),u(Ao,"class","relative group"),u(Yl,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ga,"rel","nofollow"),u(Zl,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.XLMRobertaForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.XLMRobertaForSequenceClassification"),u(No,"class","relative group"),u(ed,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nr,"rel","nofollow"),u(td,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForSequenceClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.XLMRobertaForMultipleChoice"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.XLMRobertaForMultipleChoice"),u(Do,"class","relative group"),u(od,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(dr,"rel","nofollow"),u(nd,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForMultipleChoice"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.XLMRobertaForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.XLMRobertaForTokenClassification"),u(Bo,"class","relative group"),u(sd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fr,"rel","nofollow"),u(ad,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForTokenClassification"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"id","transformers.XLMRobertaForQuestionAnswering"),u(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ts,"href","#transformers.XLMRobertaForQuestionAnswering"),u(Uo,"class","relative group"),u(rd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(yr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(yr,"rel","nofollow"),u(id,"href","/docs/transformers/v4.24.0/en/model_doc/xlm-roberta#transformers.XLMRobertaForQuestionAnswering"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(as,"id","transformers.TFXLMRobertaModel"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#transformers.TFXLMRobertaModel"),u(Ko,"class","relative group"),u(ld,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xr,"rel","nofollow"),u(dd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaModel"),u(cd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaModel"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.TFXLMRobertaForMaskedLM"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.TFXLMRobertaForMaskedLM"),u(Jo,"class","relative group"),u(pd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(jr,"rel","nofollow"),u(hd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(md,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.TFXLMRobertaForSequenceClassification"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.TFXLMRobertaForSequenceClassification"),u(Yo,"class","relative group"),u(ud,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Sr,"rel","nofollow"),u(fd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(gd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFXLMRobertaForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFXLMRobertaForMultipleChoice"),u(en,"class","relative group"),u(_d,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vr,"rel","nofollow"),u(bd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(kd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFXLMRobertaForTokenClassification"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFXLMRobertaForTokenClassification"),u(on,"class","relative group"),u(vd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(oi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(oi,"rel","nofollow"),u(yd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(Td,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.TFXLMRobertaForQuestionAnswering"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.TFXLMRobertaForQuestionAnswering"),u(sn,"class","relative group"),u(wd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Md,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxXLMRobertaModel"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxXLMRobertaModel"),u(ln,"class","relative group"),u($d,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gi,"rel","nofollow"),u(_i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_i,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bi,"rel","nofollow"),u(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ki,"rel","nofollow"),u(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(vi,"rel","nofollow"),u(Fd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaModel"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.FlaxXLMRobertaForMaskedLM"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.FlaxXLMRobertaForMaskedLM"),u(cn,"class","relative group"),u(xd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ri,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ei,"rel","nofollow"),u(Ld,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.FlaxXLMRobertaForSequenceClassification"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.FlaxXLMRobertaForSequenceClassification"),u(mn,"class","relative group"),u(Rd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ai,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ni,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ii,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Di,"rel","nofollow"),u(Ed,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxXLMRobertaForMultipleChoice"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxXLMRobertaForMultipleChoice"),u(fn,"class","relative group"),u(zd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(qd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForMultipleChoice"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxXLMRobertaForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxXLMRobertaForTokenClassification"),u(_n,"class","relative group"),u(Xd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(al,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(al,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(rl,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(il,"rel","nofollow"),u(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dl,"rel","nofollow"),u(Cd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxXLMRobertaForQuestionAnswering"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxXLMRobertaForQuestionAnswering"),u(kn,"class","relative group"),u(jd,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bl,"rel","nofollow"),u(kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kl,"rel","nofollow"),u(vl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(vl,"rel","nofollow"),u(Pd,"href","/docs/transformers/v4.24.0/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,b){e(document.head,d),_(i,g,b),_(i,c,b),e(c,f),e(f,k),w(l,k,null),e(c,m),e(c,R),e(R,Me),_(i,be,b),_(i,O,b),e(O,re),e(re,te),w(L,te,null),e(O,$e),e(O,U),e(U,Fe),_(i,ke,b),_(i,D,b),e(D,xe),e(D,le),e(le,H),e(D,Le),_(i,ve,b),_(i,B,b),e(B,Re),_(i,ye,b),_(i,W,b),e(W,ge),e(ge,Ee),_(i,ne,b),_(i,q,b),e(q,X),_(i,Te,b),_(i,S,b),e(S,de),e(de,ze),e(de,Q),e(Q,qe),e(de,Xe),e(S,C),e(S,ce),e(ce,K),e(ce,he),e(he,Ce),e(ce,V),_(i,we,b),_(i,se,b),e(se,N),e(se,pe),e(pe,J),e(se,je),e(se,ee),e(ee,j),e(se,Pe),_(i,P,b),_(i,ae,b),e(ae,ie),e(ie,v),w(E,v,null),e(ae,Ue),e(ae,oe),e(oe,Qe),_(i,We,b),_(i,z,b),w(Oe,z,null),e(z,He),e(z,_e),e(_e,Ke),e(_e,De),e(De,I),e(_e,G),e(_e,Se),e(Se,Ve),e(_e,Y),e(_e,Ne),e(Ne,Je),e(_e,Ae),e(z,Ge),e(z,Z),e(Z,Ye),e(Z,jl),e(jl,qf),e(Z,Xf),e(Z,Pl),e(Pl,Cf),e(Z,jf),e(z,Pf),w($n,z,null),_(i,km,b),_(i,zo,b),e(zo,Fn),e(Fn,dc),w(ua,dc,null),e(zo,Af),e(zo,cc),e(cc,Of),_(i,vm,b),_(i,st,b),w(fa,st,null),e(st,Nf),e(st,no),e(no,If),e(no,Al),e(Al,Df),e(no,Sf),e(no,Ol),e(Ol,Bf),e(no,Wf),e(no,ga),e(ga,Uf),e(no,Qf),e(st,Hf),e(st,_a),e(_a,Kf),e(_a,Nl),e(Nl,Vf),e(_a,Jf),e(st,Gf),e(st,uo),w(ba,uo,null),e(uo,Yf),e(uo,pc),e(pc,Zf),e(uo,eg),e(uo,ka),e(ka,Il),e(Il,tg),e(Il,hc),e(hc,og),e(ka,ng),e(ka,Dl),e(Dl,sg),e(Dl,mc),e(mc,ag),e(st,rg),e(st,xn),w(va,xn,null),e(xn,ig),e(xn,ya),e(ya,lg),e(ya,uc),e(uc,dg),e(ya,cg),e(st,pg),e(st,Ln),w(Ta,Ln,null),e(Ln,hg),e(Ln,fc),e(fc,mg),e(st,ug),e(st,Sl),w(wa,Sl,null),_(i,ym,b),_(i,qo,b),e(qo,Rn),e(Rn,gc),w(Ma,gc,null),e(qo,fg),e(qo,_c),e(_c,gg),_(i,Tm,b),_(i,yt,b),w($a,yt,null),e(yt,_g),e(yt,Ut),e(Ut,bg),e(Ut,bc),e(bc,kg),e(Ut,vg),e(Ut,Bl),e(Bl,yg),e(Ut,Tg),e(Ut,Wl),e(Wl,wg),e(Ut,Mg),e(Ut,Fa),e(Fa,$g),e(Ut,Fg),e(yt,xg),e(yt,xa),e(xa,Lg),e(xa,Ul),e(Ul,Rg),e(xa,Eg),e(yt,zg),e(yt,fo),w(La,fo,null),e(fo,qg),e(fo,kc),e(kc,Xg),e(fo,Cg),e(fo,Ra),e(Ra,Ql),e(Ql,jg),e(Ql,vc),e(vc,Pg),e(Ra,Ag),e(Ra,Hl),e(Hl,Og),e(Hl,yc),e(yc,Ng),e(yt,Ig),e(yt,En),w(Ea,En,null),e(En,Dg),e(En,Tc),e(Tc,Sg),_(i,wm,b),_(i,Xo,b),e(Xo,zn),e(zn,wc),w(za,wc,null),e(Xo,Bg),e(Xo,Mc),e(Mc,Wg),_(i,Mm,b),_(i,Ze,b),w(qa,Ze,null),e(Ze,Ug),e(Ze,$c),e($c,Qg),e(Ze,Hg),e(Ze,Xa),e(Xa,Kg),e(Xa,Kl),e(Kl,Vg),e(Xa,Jg),e(Ze,Gg),e(Ze,Ca),e(Ca,Yg),e(Ca,ja),e(ja,Zg),e(Ca,e_),e(Ze,t_),e(Ze,Pa),e(Pa,o_),e(Pa,Fc),e(Fc,n_),e(Pa,s_),e(Ze,a_),e(Ze,ut),e(ut,r_),e(ut,xc),e(xc,i_),e(ut,l_),e(ut,Lc),e(Lc,d_),e(ut,c_),e(ut,Rc),e(Rc,p_),e(ut,h_),e(ut,Ec),e(Ec,m_),e(ut,u_),e(ut,zc),e(zc,f_),e(ut,g_),e(ut,qc),e(qc,__),e(ut,b_),e(Ze,k_),e(Ze,qn),e(qn,v_),e(qn,Xc),e(Xc,y_),e(qn,T_),e(qn,Aa),e(Aa,w_),e(Ze,M_),e(Ze,Qt),w(Oa,Qt,null),e(Qt,$_),e(Qt,Co),e(Co,F_),e(Co,Vl),e(Vl,x_),e(Co,L_),e(Co,Cc),e(Cc,R_),e(Co,E_),e(Qt,z_),w(Xn,Qt,null),e(Qt,q_),w(Cn,Qt,null),_(i,$m,b),_(i,jo,b),e(jo,jn),e(jn,jc),w(Na,jc,null),e(jo,X_),e(jo,Pc),e(Pc,C_),_(i,Fm,b),_(i,Tt,b),w(Ia,Tt,null),e(Tt,j_),e(Tt,Da),e(Da,P_),e(Da,Ac),e(Ac,A_),e(Da,O_),e(Tt,N_),e(Tt,Sa),e(Sa,I_),e(Sa,Jl),e(Jl,D_),e(Sa,S_),e(Tt,B_),e(Tt,Ba),e(Ba,W_),e(Ba,Wa),e(Wa,U_),e(Ba,Q_),e(Tt,H_),e(Tt,Ht),w(Ua,Ht,null),e(Ht,K_),e(Ht,Po),e(Po,V_),e(Po,Gl),e(Gl,J_),e(Po,G_),e(Po,Oc),e(Oc,Y_),e(Po,Z_),e(Ht,eb),w(Pn,Ht,null),e(Ht,tb),w(An,Ht,null),_(i,xm,b),_(i,Ao,b),e(Ao,On),e(On,Nc),w(Qa,Nc,null),e(Ao,ob),e(Ao,Ic),e(Ic,nb),_(i,Lm,b),_(i,wt,b),w(Ha,wt,null),e(wt,sb),e(wt,Ka),e(Ka,ab),e(Ka,Dc),e(Dc,rb),e(Ka,ib),e(wt,lb),e(wt,Va),e(Va,db),e(Va,Yl),e(Yl,cb),e(Va,pb),e(wt,hb),e(wt,Ja),e(Ja,mb),e(Ja,Ga),e(Ga,ub),e(Ja,fb),e(wt,gb),e(wt,Lt),w(Ya,Lt,null),e(Lt,_b),e(Lt,Oo),e(Oo,bb),e(Oo,Zl),e(Zl,kb),e(Oo,vb),e(Oo,Sc),e(Sc,yb),e(Oo,Tb),e(Lt,wb),w(Nn,Lt,null),e(Lt,Mb),w(In,Lt,null),e(Lt,$b),w(Dn,Lt,null),_(i,Rm,b),_(i,No,b),e(No,Sn),e(Sn,Bc),w(Za,Bc,null),e(No,Fb),e(No,Wc),e(Wc,xb),_(i,Em,b),_(i,Mt,b),w(er,Mt,null),e(Mt,Lb),e(Mt,Uc),e(Uc,Rb),e(Mt,Eb),e(Mt,tr),e(tr,zb),e(tr,ed),e(ed,qb),e(tr,Xb),e(Mt,Cb),e(Mt,or),e(or,jb),e(or,nr),e(nr,Pb),e(or,Ab),e(Mt,Ob),e(Mt,mt),w(sr,mt,null),e(mt,Nb),e(mt,Io),e(Io,Ib),e(Io,td),e(td,Db),e(Io,Sb),e(Io,Qc),e(Qc,Bb),e(Io,Wb),e(mt,Ub),w(Bn,mt,null),e(mt,Qb),w(Wn,mt,null),e(mt,Hb),w(Un,mt,null),e(mt,Kb),w(Qn,mt,null),e(mt,Vb),w(Hn,mt,null),_(i,zm,b),_(i,Do,b),e(Do,Kn),e(Kn,Hc),w(ar,Hc,null),e(Do,Jb),e(Do,Kc),e(Kc,Gb),_(i,qm,b),_(i,$t,b),w(rr,$t,null),e($t,Yb),e($t,Vc),e(Vc,Zb),e($t,ek),e($t,ir),e(ir,tk),e(ir,od),e(od,ok),e(ir,nk),e($t,sk),e($t,lr),e(lr,ak),e(lr,dr),e(dr,rk),e(lr,ik),e($t,lk),e($t,Kt),w(cr,Kt,null),e(Kt,dk),e(Kt,So),e(So,ck),e(So,nd),e(nd,pk),e(So,hk),e(So,Jc),e(Jc,mk),e(So,uk),e(Kt,fk),w(Vn,Kt,null),e(Kt,gk),w(Jn,Kt,null),_(i,Xm,b),_(i,Bo,b),e(Bo,Gn),e(Gn,Gc),w(pr,Gc,null),e(Bo,_k),e(Bo,Yc),e(Yc,bk),_(i,Cm,b),_(i,Ft,b),w(hr,Ft,null),e(Ft,kk),e(Ft,Zc),e(Zc,vk),e(Ft,yk),e(Ft,mr),e(mr,Tk),e(mr,sd),e(sd,wk),e(mr,Mk),e(Ft,$k),e(Ft,ur),e(ur,Fk),e(ur,fr),e(fr,xk),e(ur,Lk),e(Ft,Rk),e(Ft,Rt),w(gr,Rt,null),e(Rt,Ek),e(Rt,Wo),e(Wo,zk),e(Wo,ad),e(ad,qk),e(Wo,Xk),e(Wo,ep),e(ep,Ck),e(Wo,jk),e(Rt,Pk),w(Yn,Rt,null),e(Rt,Ak),w(Zn,Rt,null),e(Rt,Ok),w(es,Rt,null),_(i,jm,b),_(i,Uo,b),e(Uo,ts),e(ts,tp),w(_r,tp,null),e(Uo,Nk),e(Uo,op),e(op,Ik),_(i,Pm,b),_(i,xt,b),w(br,xt,null),e(xt,Dk),e(xt,Qo),e(Qo,Sk),e(Qo,np),e(np,Bk),e(Qo,Wk),e(Qo,sp),e(sp,Uk),e(Qo,Qk),e(xt,Hk),e(xt,kr),e(kr,Kk),e(kr,rd),e(rd,Vk),e(kr,Jk),e(xt,Gk),e(xt,vr),e(vr,Yk),e(vr,yr),e(yr,Zk),e(vr,ev),e(xt,tv),e(xt,Et),w(Tr,Et,null),e(Et,ov),e(Et,Ho),e(Ho,nv),e(Ho,id),e(id,sv),e(Ho,av),e(Ho,ap),e(ap,rv),e(Ho,iv),e(Et,lv),w(os,Et,null),e(Et,dv),w(ns,Et,null),e(Et,cv),w(ss,Et,null),_(i,Am,b),_(i,Ko,b),e(Ko,as),e(as,rp),w(wr,rp,null),e(Ko,pv),e(Ko,ip),e(ip,hv),_(i,Om,b),_(i,at,b),w(Mr,at,null),e(at,mv),e(at,lp),e(lp,uv),e(at,fv),e(at,$r),e($r,gv),e($r,ld),e(ld,_v),e($r,bv),e(at,kv),e(at,Fr),e(Fr,vv),e(Fr,xr),e(xr,yv),e(Fr,Tv),e(at,wv),w(rs,at,null),e(at,Mv),e(at,Lr),e(Lr,$v),e(Lr,dd),e(dd,Fv),e(Lr,xv),e(at,Lv),e(at,Vt),w(Rr,Vt,null),e(Vt,Rv),e(Vt,Vo),e(Vo,Ev),e(Vo,cd),e(cd,zv),e(Vo,qv),e(Vo,dp),e(dp,Xv),e(Vo,Cv),e(Vt,jv),w(is,Vt,null),e(Vt,Pv),w(ls,Vt,null),_(i,Nm,b),_(i,Jo,b),e(Jo,ds),e(ds,cp),w(Er,cp,null),e(Jo,Av),e(Jo,pp),e(pp,Ov),_(i,Im,b),_(i,rt,b),w(zr,rt,null),e(rt,Nv),e(rt,qr),e(qr,Iv),e(qr,hp),e(hp,Dv),e(qr,Sv),e(rt,Bv),e(rt,Xr),e(Xr,Wv),e(Xr,pd),e(pd,Uv),e(Xr,Qv),e(rt,Hv),e(rt,Cr),e(Cr,Kv),e(Cr,jr),e(jr,Vv),e(Cr,Jv),e(rt,Gv),w(cs,rt,null),e(rt,Yv),e(rt,Pr),e(Pr,Zv),e(Pr,hd),e(hd,ey),e(Pr,ty),e(rt,oy),e(rt,zt),w(Ar,zt,null),e(zt,ny),e(zt,Go),e(Go,sy),e(Go,md),e(md,ay),e(Go,ry),e(Go,mp),e(mp,iy),e(Go,ly),e(zt,dy),w(ps,zt,null),e(zt,cy),w(hs,zt,null),e(zt,py),w(ms,zt,null),_(i,Dm,b),_(i,Yo,b),e(Yo,us),e(us,up),w(Or,up,null),e(Yo,hy),e(Yo,fp),e(fp,my),_(i,Sm,b),_(i,it,b),w(Nr,it,null),e(it,uy),e(it,gp),e(gp,fy),e(it,gy),e(it,Ir),e(Ir,_y),e(Ir,ud),e(ud,by),e(Ir,ky),e(it,vy),e(it,Dr),e(Dr,yy),e(Dr,Sr),e(Sr,Ty),e(Dr,wy),e(it,My),w(fs,it,null),e(it,$y),e(it,Br),e(Br,Fy),e(Br,fd),e(fd,xy),e(Br,Ly),e(it,Ry),e(it,qt),w(Wr,qt,null),e(qt,Ey),e(qt,Zo),e(Zo,zy),e(Zo,gd),e(gd,qy),e(Zo,Xy),e(Zo,_p),e(_p,Cy),e(Zo,jy),e(qt,Py),w(gs,qt,null),e(qt,Ay),w(_s,qt,null),e(qt,Oy),w(bs,qt,null),_(i,Bm,b),_(i,en,b),e(en,ks),e(ks,bp),w(Ur,bp,null),e(en,Ny),e(en,kp),e(kp,Iy),_(i,Wm,b),_(i,lt,b),w(Qr,lt,null),e(lt,Dy),e(lt,vp),e(vp,Sy),e(lt,By),e(lt,Hr),e(Hr,Wy),e(Hr,_d),e(_d,Uy),e(Hr,Qy),e(lt,Hy),e(lt,Kr),e(Kr,Ky),e(Kr,Vr),e(Vr,Vy),e(Kr,Jy),e(lt,Gy),w(vs,lt,null),e(lt,Yy),e(lt,Jr),e(Jr,Zy),e(Jr,bd),e(bd,eT),e(Jr,tT),e(lt,oT),e(lt,Jt),w(Gr,Jt,null),e(Jt,nT),e(Jt,tn),e(tn,sT),e(tn,kd),e(kd,aT),e(tn,rT),e(tn,yp),e(yp,iT),e(tn,lT),e(Jt,dT),w(ys,Jt,null),e(Jt,cT),w(Ts,Jt,null),_(i,Um,b),_(i,on,b),e(on,ws),e(ws,Tp),w(Yr,Tp,null),e(on,pT),e(on,wp),e(wp,hT),_(i,Qm,b),_(i,dt,b),w(Zr,dt,null),e(dt,mT),e(dt,Mp),e(Mp,uT),e(dt,fT),e(dt,ei),e(ei,gT),e(ei,vd),e(vd,_T),e(ei,bT),e(dt,kT),e(dt,ti),e(ti,vT),e(ti,oi),e(oi,yT),e(ti,TT),e(dt,wT),w(Ms,dt,null),e(dt,MT),e(dt,ni),e(ni,$T),e(ni,yd),e(yd,FT),e(ni,xT),e(dt,LT),e(dt,Xt),w(si,Xt,null),e(Xt,RT),e(Xt,nn),e(nn,ET),e(nn,Td),e(Td,zT),e(nn,qT),e(nn,$p),e($p,XT),e(nn,CT),e(Xt,jT),w($s,Xt,null),e(Xt,PT),w(Fs,Xt,null),e(Xt,AT),w(xs,Xt,null),_(i,Hm,b),_(i,sn,b),e(sn,Ls),e(Ls,Fp),w(ai,Fp,null),e(sn,OT),e(sn,xp),e(xp,NT),_(i,Km,b),_(i,ct,b),w(ri,ct,null),e(ct,IT),e(ct,an),e(an,DT),e(an,Lp),e(Lp,ST),e(an,BT),e(an,Rp),e(Rp,WT),e(an,UT),e(ct,QT),e(ct,ii),e(ii,HT),e(ii,wd),e(wd,KT),e(ii,VT),e(ct,JT),e(ct,li),e(li,GT),e(li,di),e(di,YT),e(li,ZT),e(ct,ew),w(Rs,ct,null),e(ct,tw),e(ct,ci),e(ci,ow),e(ci,Ep),e(Ep,nw),e(ci,sw),e(ct,aw),e(ct,Ct),w(pi,Ct,null),e(Ct,rw),e(Ct,rn),e(rn,iw),e(rn,Md),e(Md,lw),e(rn,dw),e(rn,zp),e(zp,cw),e(rn,pw),e(Ct,hw),w(Es,Ct,null),e(Ct,mw),w(zs,Ct,null),e(Ct,uw),w(qs,Ct,null),_(i,Vm,b),_(i,ln,b),e(ln,Xs),e(Xs,qp),w(hi,qp,null),e(ln,fw),e(ln,Xp),e(Xp,gw),_(i,Jm,b),_(i,pt,b),w(mi,pt,null),e(pt,_w),e(pt,ui),e(ui,bw),e(ui,$d),e($d,kw),e(ui,vw),e(pt,yw),e(pt,fi),e(fi,Tw),e(fi,gi),e(gi,ww),e(fi,Mw),e(pt,$w),e(pt,Cp),e(Cp,Fw),e(pt,xw),e(pt,so),e(so,jp),e(jp,_i),e(_i,Lw),e(so,Rw),e(so,Pp),e(Pp,bi),e(bi,Ew),e(so,zw),e(so,Ap),e(Ap,ki),e(ki,qw),e(so,Xw),e(so,Op),e(Op,vi),e(vi,Cw),e(pt,jw),e(pt,yi),e(yi,Pw),e(yi,Fd),e(Fd,Aw),e(yi,Ow),e(pt,Nw),e(pt,Gt),w(Ti,Gt,null),e(Gt,Iw),e(Gt,dn),e(dn,Dw),e(dn,Np),e(Np,Sw),e(dn,Bw),e(dn,Ip),e(Ip,Ww),e(dn,Uw),e(Gt,Qw),w(Cs,Gt,null),e(Gt,Hw),w(js,Gt,null),_(i,Gm,b),_(i,cn,b),e(cn,Ps),e(Ps,Dp),w(wi,Dp,null),e(cn,Kw),e(cn,Sp),e(Sp,Vw),_(i,Ym,b),_(i,ht,b),w(Mi,ht,null),e(ht,Jw),e(ht,pn),e(pn,Gw),e(pn,Bp),e(Bp,Yw),e(pn,Zw),e(pn,xd),e(xd,e2),e(pn,t2),e(ht,o2),e(ht,$i),e($i,n2),e($i,Fi),e(Fi,s2),e($i,a2),e(ht,r2),e(ht,Wp),e(Wp,i2),e(ht,l2),e(ht,ao),e(ao,Up),e(Up,xi),e(xi,d2),e(ao,c2),e(ao,Qp),e(Qp,Li),e(Li,p2),e(ao,h2),e(ao,Hp),e(Hp,Ri),e(Ri,m2),e(ao,u2),e(ao,Kp),e(Kp,Ei),e(Ei,f2),e(ht,g2),e(ht,zi),e(zi,_2),e(zi,Ld),e(Ld,b2),e(zi,k2),e(ht,v2),e(ht,Yt),w(qi,Yt,null),e(Yt,y2),e(Yt,hn),e(hn,T2),e(hn,Vp),e(Vp,w2),e(hn,M2),e(hn,Jp),e(Jp,$2),e(hn,F2),e(Yt,x2),w(As,Yt,null),e(Yt,L2),w(Os,Yt,null),_(i,Zm,b),_(i,mn,b),e(mn,Ns),e(Ns,Gp),w(Xi,Gp,null),e(mn,R2),e(mn,Yp),e(Yp,E2),_(i,eu,b),_(i,et,b),w(Ci,et,null),e(et,z2),e(et,Zp),e(Zp,q2),e(et,X2),e(et,ji),e(ji,C2),e(ji,Rd),e(Rd,j2),e(ji,P2),e(et,A2),e(et,Pi),e(Pi,O2),e(Pi,Ai),e(Ai,N2),e(Pi,I2),e(et,D2),e(et,eh),e(eh,S2),e(et,B2),e(et,ro),e(ro,th),e(th,Oi),e(Oi,W2),e(ro,U2),e(ro,oh),e(oh,Ni),e(Ni,Q2),e(ro,H2),e(ro,nh),e(nh,Ii),e(Ii,K2),e(ro,V2),e(ro,sh),e(sh,Di),e(Di,J2),e(et,G2),e(et,Si),e(Si,Y2),e(Si,Ed),e(Ed,Z2),e(Si,eM),e(et,tM),e(et,Zt),w(Bi,Zt,null),e(Zt,oM),e(Zt,un),e(un,nM),e(un,ah),e(ah,sM),e(un,aM),e(un,rh),e(rh,rM),e(un,iM),e(Zt,lM),w(Is,Zt,null),e(Zt,dM),w(Ds,Zt,null),_(i,tu,b),_(i,fn,b),e(fn,Ss),e(Ss,ih),w(Wi,ih,null),e(fn,cM),e(fn,lh),e(lh,pM),_(i,ou,b),_(i,tt,b),w(Ui,tt,null),e(tt,hM),e(tt,dh),e(dh,mM),e(tt,uM),e(tt,Qi),e(Qi,fM),e(Qi,zd),e(zd,gM),e(Qi,_M),e(tt,bM),e(tt,Hi),e(Hi,kM),e(Hi,Ki),e(Ki,vM),e(Hi,yM),e(tt,TM),e(tt,ch),e(ch,wM),e(tt,MM),e(tt,io),e(io,ph),e(ph,Vi),e(Vi,$M),e(io,FM),e(io,hh),e(hh,Ji),e(Ji,xM),e(io,LM),e(io,mh),e(mh,Gi),e(Gi,RM),e(io,EM),e(io,uh),e(uh,Yi),e(Yi,zM),e(tt,qM),e(tt,Zi),e(Zi,XM),e(Zi,qd),e(qd,CM),e(Zi,jM),e(tt,PM),e(tt,eo),w(el,eo,null),e(eo,AM),e(eo,gn),e(gn,OM),e(gn,fh),e(fh,NM),e(gn,IM),e(gn,gh),e(gh,DM),e(gn,SM),e(eo,BM),w(Bs,eo,null),e(eo,WM),w(Ws,eo,null),_(i,nu,b),_(i,_n,b),e(_n,Us),e(Us,_h),w(tl,_h,null),e(_n,UM),e(_n,bh),e(bh,QM),_(i,su,b),_(i,ot,b),w(ol,ot,null),e(ot,HM),e(ot,kh),e(kh,KM),e(ot,VM),e(ot,nl),e(nl,JM),e(nl,Xd),e(Xd,GM),e(nl,YM),e(ot,ZM),e(ot,sl),e(sl,e$),e(sl,al),e(al,t$),e(sl,o$),e(ot,n$),e(ot,vh),e(vh,s$),e(ot,a$),e(ot,lo),e(lo,yh),e(yh,rl),e(rl,r$),e(lo,i$),e(lo,Th),e(Th,il),e(il,l$),e(lo,d$),e(lo,wh),e(wh,ll),e(ll,c$),e(lo,p$),e(lo,Mh),e(Mh,dl),e(dl,h$),e(ot,m$),e(ot,cl),e(cl,u$),e(cl,Cd),e(Cd,f$),e(cl,g$),e(ot,_$),e(ot,to),w(pl,to,null),e(to,b$),e(to,bn),e(bn,k$),e(bn,$h),e($h,v$),e(bn,y$),e(bn,Fh),e(Fh,T$),e(bn,w$),e(to,M$),w(Qs,to,null),e(to,$$),w(Hs,to,null),_(i,au,b),_(i,kn,b),e(kn,Ks),e(Ks,xh),w(hl,xh,null),e(kn,F$),e(kn,Lh),e(Lh,x$),_(i,ru,b),_(i,nt,b),w(ml,nt,null),e(nt,L$),e(nt,vn),e(vn,R$),e(vn,Rh),e(Rh,E$),e(vn,z$),e(vn,Eh),e(Eh,q$),e(vn,X$),e(nt,C$),e(nt,ul),e(ul,j$),e(ul,jd),e(jd,P$),e(ul,A$),e(nt,O$),e(nt,fl),e(fl,N$),e(fl,gl),e(gl,I$),e(fl,D$),e(nt,S$),e(nt,zh),e(zh,B$),e(nt,W$),e(nt,co),e(co,qh),e(qh,_l),e(_l,U$),e(co,Q$),e(co,Xh),e(Xh,bl),e(bl,H$),e(co,K$),e(co,Ch),e(Ch,kl),e(kl,V$),e(co,J$),e(co,jh),e(jh,vl),e(vl,G$),e(nt,Y$),e(nt,yl),e(yl,Z$),e(yl,Pd),e(Pd,e1),e(yl,t1),e(nt,o1),e(nt,oo),w(Tl,oo,null),e(oo,n1),e(oo,yn),e(yn,s1),e(yn,Ph),e(Ph,a1),e(yn,r1),e(yn,Ah),e(Ah,i1),e(yn,l1),e(oo,d1),w(Vs,oo,null),e(oo,c1),w(Js,oo,null),iu=!0},p(i,[b]){const wl={};b&2&&(wl.$$scope={dirty:b,ctx:i}),$n.$set(wl);const Oh={};b&2&&(Oh.$$scope={dirty:b,ctx:i}),Xn.$set(Oh);const Nh={};b&2&&(Nh.$$scope={dirty:b,ctx:i}),Cn.$set(Nh);const Ih={};b&2&&(Ih.$$scope={dirty:b,ctx:i}),Pn.$set(Ih);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:i}),An.$set(Ml);const Dh={};b&2&&(Dh.$$scope={dirty:b,ctx:i}),Nn.$set(Dh);const Sh={};b&2&&(Sh.$$scope={dirty:b,ctx:i}),In.$set(Sh);const Bh={};b&2&&(Bh.$$scope={dirty:b,ctx:i}),Dn.$set(Bh);const $l={};b&2&&($l.$$scope={dirty:b,ctx:i}),Bn.$set($l);const Wh={};b&2&&(Wh.$$scope={dirty:b,ctx:i}),Wn.$set(Wh);const Uh={};b&2&&(Uh.$$scope={dirty:b,ctx:i}),Un.$set(Uh);const Qh={};b&2&&(Qh.$$scope={dirty:b,ctx:i}),Qn.$set(Qh);const Hh={};b&2&&(Hh.$$scope={dirty:b,ctx:i}),Hn.$set(Hh);const Kh={};b&2&&(Kh.$$scope={dirty:b,ctx:i}),Vn.$set(Kh);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:i}),Jn.$set(Fl);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:i}),Yn.$set(xl);const Vh={};b&2&&(Vh.$$scope={dirty:b,ctx:i}),Zn.$set(Vh);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:i}),es.$set(Ll);const Jh={};b&2&&(Jh.$$scope={dirty:b,ctx:i}),os.$set(Jh);const Tn={};b&2&&(Tn.$$scope={dirty:b,ctx:i}),ns.$set(Tn);const Gh={};b&2&&(Gh.$$scope={dirty:b,ctx:i}),ss.$set(Gh);const Yh={};b&2&&(Yh.$$scope={dirty:b,ctx:i}),rs.$set(Yh);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:i}),is.$set(Rl);const Zh={};b&2&&(Zh.$$scope={dirty:b,ctx:i}),ls.$set(Zh);const em={};b&2&&(em.$$scope={dirty:b,ctx:i}),cs.$set(em);const tm={};b&2&&(tm.$$scope={dirty:b,ctx:i}),ps.$set(tm);const po={};b&2&&(po.$$scope={dirty:b,ctx:i}),hs.$set(po);const ho={};b&2&&(ho.$$scope={dirty:b,ctx:i}),ms.$set(ho);const om={};b&2&&(om.$$scope={dirty:b,ctx:i}),fs.$set(om);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:i}),gs.$set(nm);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:i}),_s.$set(sm);const wn={};b&2&&(wn.$$scope={dirty:b,ctx:i}),bs.$set(wn);const am={};b&2&&(am.$$scope={dirty:b,ctx:i}),vs.$set(am);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:i}),ys.$set(rm);const El={};b&2&&(El.$$scope={dirty:b,ctx:i}),Ts.$set(El);const im={};b&2&&(im.$$scope={dirty:b,ctx:i}),Ms.$set(im);const lm={};b&2&&(lm.$$scope={dirty:b,ctx:i}),$s.$set(lm);const dm={};b&2&&(dm.$$scope={dirty:b,ctx:i}),Fs.$set(dm);const ft={};b&2&&(ft.$$scope={dirty:b,ctx:i}),xs.$set(ft);const mo={};b&2&&(mo.$$scope={dirty:b,ctx:i}),Rs.$set(mo);const cm={};b&2&&(cm.$$scope={dirty:b,ctx:i}),Es.$set(cm);const pm={};b&2&&(pm.$$scope={dirty:b,ctx:i}),zs.$set(pm);const hm={};b&2&&(hm.$$scope={dirty:b,ctx:i}),qs.$set(hm);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:i}),Cs.$set(zl);const mm={};b&2&&(mm.$$scope={dirty:b,ctx:i}),js.$set(mm);const Mn={};b&2&&(Mn.$$scope={dirty:b,ctx:i}),As.$set(Mn);const um={};b&2&&(um.$$scope={dirty:b,ctx:i}),Os.$set(um);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:i}),Is.$set(ql);const Ad={};b&2&&(Ad.$$scope={dirty:b,ctx:i}),Ds.$set(Ad);const fm={};b&2&&(fm.$$scope={dirty:b,ctx:i}),Bs.$set(fm);const Od={};b&2&&(Od.$$scope={dirty:b,ctx:i}),Ws.$set(Od);const gm={};b&2&&(gm.$$scope={dirty:b,ctx:i}),Qs.$set(gm);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:i}),Hs.$set(Xl);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:i}),Vs.$set(Cl);const _m={};b&2&&(_m.$$scope={dirty:b,ctx:i}),Js.$set(_m)},i(i){iu||(M(l.$$.fragment,i),M(L.$$.fragment,i),M(E.$$.fragment,i),M(Oe.$$.fragment,i),M($n.$$.fragment,i),M(ua.$$.fragment,i),M(fa.$$.fragment,i),M(ba.$$.fragment,i),M(va.$$.fragment,i),M(Ta.$$.fragment,i),M(wa.$$.fragment,i),M(Ma.$$.fragment,i),M($a.$$.fragment,i),M(La.$$.fragment,i),M(Ea.$$.fragment,i),M(za.$$.fragment,i),M(qa.$$.fragment,i),M(Oa.$$.fragment,i),M(Xn.$$.fragment,i),M(Cn.$$.fragment,i),M(Na.$$.fragment,i),M(Ia.$$.fragment,i),M(Ua.$$.fragment,i),M(Pn.$$.fragment,i),M(An.$$.fragment,i),M(Qa.$$.fragment,i),M(Ha.$$.fragment,i),M(Ya.$$.fragment,i),M(Nn.$$.fragment,i),M(In.$$.fragment,i),M(Dn.$$.fragment,i),M(Za.$$.fragment,i),M(er.$$.fragment,i),M(sr.$$.fragment,i),M(Bn.$$.fragment,i),M(Wn.$$.fragment,i),M(Un.$$.fragment,i),M(Qn.$$.fragment,i),M(Hn.$$.fragment,i),M(ar.$$.fragment,i),M(rr.$$.fragment,i),M(cr.$$.fragment,i),M(Vn.$$.fragment,i),M(Jn.$$.fragment,i),M(pr.$$.fragment,i),M(hr.$$.fragment,i),M(gr.$$.fragment,i),M(Yn.$$.fragment,i),M(Zn.$$.fragment,i),M(es.$$.fragment,i),M(_r.$$.fragment,i),M(br.$$.fragment,i),M(Tr.$$.fragment,i),M(os.$$.fragment,i),M(ns.$$.fragment,i),M(ss.$$.fragment,i),M(wr.$$.fragment,i),M(Mr.$$.fragment,i),M(rs.$$.fragment,i),M(Rr.$$.fragment,i),M(is.$$.fragment,i),M(ls.$$.fragment,i),M(Er.$$.fragment,i),M(zr.$$.fragment,i),M(cs.$$.fragment,i),M(Ar.$$.fragment,i),M(ps.$$.fragment,i),M(hs.$$.fragment,i),M(ms.$$.fragment,i),M(Or.$$.fragment,i),M(Nr.$$.fragment,i),M(fs.$$.fragment,i),M(Wr.$$.fragment,i),M(gs.$$.fragment,i),M(_s.$$.fragment,i),M(bs.$$.fragment,i),M(Ur.$$.fragment,i),M(Qr.$$.fragment,i),M(vs.$$.fragment,i),M(Gr.$$.fragment,i),M(ys.$$.fragment,i),M(Ts.$$.fragment,i),M(Yr.$$.fragment,i),M(Zr.$$.fragment,i),M(Ms.$$.fragment,i),M(si.$$.fragment,i),M($s.$$.fragment,i),M(Fs.$$.fragment,i),M(xs.$$.fragment,i),M(ai.$$.fragment,i),M(ri.$$.fragment,i),M(Rs.$$.fragment,i),M(pi.$$.fragment,i),M(Es.$$.fragment,i),M(zs.$$.fragment,i),M(qs.$$.fragment,i),M(hi.$$.fragment,i),M(mi.$$.fragment,i),M(Ti.$$.fragment,i),M(Cs.$$.fragment,i),M(js.$$.fragment,i),M(wi.$$.fragment,i),M(Mi.$$.fragment,i),M(qi.$$.fragment,i),M(As.$$.fragment,i),M(Os.$$.fragment,i),M(Xi.$$.fragment,i),M(Ci.$$.fragment,i),M(Bi.$$.fragment,i),M(Is.$$.fragment,i),M(Ds.$$.fragment,i),M(Wi.$$.fragment,i),M(Ui.$$.fragment,i),M(el.$$.fragment,i),M(Bs.$$.fragment,i),M(Ws.$$.fragment,i),M(tl.$$.fragment,i),M(ol.$$.fragment,i),M(pl.$$.fragment,i),M(Qs.$$.fragment,i),M(Hs.$$.fragment,i),M(hl.$$.fragment,i),M(ml.$$.fragment,i),M(Tl.$$.fragment,i),M(Vs.$$.fragment,i),M(Js.$$.fragment,i),iu=!0)},o(i){$(l.$$.fragment,i),$(L.$$.fragment,i),$(E.$$.fragment,i),$(Oe.$$.fragment,i),$($n.$$.fragment,i),$(ua.$$.fragment,i),$(fa.$$.fragment,i),$(ba.$$.fragment,i),$(va.$$.fragment,i),$(Ta.$$.fragment,i),$(wa.$$.fragment,i),$(Ma.$$.fragment,i),$($a.$$.fragment,i),$(La.$$.fragment,i),$(Ea.$$.fragment,i),$(za.$$.fragment,i),$(qa.$$.fragment,i),$(Oa.$$.fragment,i),$(Xn.$$.fragment,i),$(Cn.$$.fragment,i),$(Na.$$.fragment,i),$(Ia.$$.fragment,i),$(Ua.$$.fragment,i),$(Pn.$$.fragment,i),$(An.$$.fragment,i),$(Qa.$$.fragment,i),$(Ha.$$.fragment,i),$(Ya.$$.fragment,i),$(Nn.$$.fragment,i),$(In.$$.fragment,i),$(Dn.$$.fragment,i),$(Za.$$.fragment,i),$(er.$$.fragment,i),$(sr.$$.fragment,i),$(Bn.$$.fragment,i),$(Wn.$$.fragment,i),$(Un.$$.fragment,i),$(Qn.$$.fragment,i),$(Hn.$$.fragment,i),$(ar.$$.fragment,i),$(rr.$$.fragment,i),$(cr.$$.fragment,i),$(Vn.$$.fragment,i),$(Jn.$$.fragment,i),$(pr.$$.fragment,i),$(hr.$$.fragment,i),$(gr.$$.fragment,i),$(Yn.$$.fragment,i),$(Zn.$$.fragment,i),$(es.$$.fragment,i),$(_r.$$.fragment,i),$(br.$$.fragment,i),$(Tr.$$.fragment,i),$(os.$$.fragment,i),$(ns.$$.fragment,i),$(ss.$$.fragment,i),$(wr.$$.fragment,i),$(Mr.$$.fragment,i),$(rs.$$.fragment,i),$(Rr.$$.fragment,i),$(is.$$.fragment,i),$(ls.$$.fragment,i),$(Er.$$.fragment,i),$(zr.$$.fragment,i),$(cs.$$.fragment,i),$(Ar.$$.fragment,i),$(ps.$$.fragment,i),$(hs.$$.fragment,i),$(ms.$$.fragment,i),$(Or.$$.fragment,i),$(Nr.$$.fragment,i),$(fs.$$.fragment,i),$(Wr.$$.fragment,i),$(gs.$$.fragment,i),$(_s.$$.fragment,i),$(bs.$$.fragment,i),$(Ur.$$.fragment,i),$(Qr.$$.fragment,i),$(vs.$$.fragment,i),$(Gr.$$.fragment,i),$(ys.$$.fragment,i),$(Ts.$$.fragment,i),$(Yr.$$.fragment,i),$(Zr.$$.fragment,i),$(Ms.$$.fragment,i),$(si.$$.fragment,i),$($s.$$.fragment,i),$(Fs.$$.fragment,i),$(xs.$$.fragment,i),$(ai.$$.fragment,i),$(ri.$$.fragment,i),$(Rs.$$.fragment,i),$(pi.$$.fragment,i),$(Es.$$.fragment,i),$(zs.$$.fragment,i),$(qs.$$.fragment,i),$(hi.$$.fragment,i),$(mi.$$.fragment,i),$(Ti.$$.fragment,i),$(Cs.$$.fragment,i),$(js.$$.fragment,i),$(wi.$$.fragment,i),$(Mi.$$.fragment,i),$(qi.$$.fragment,i),$(As.$$.fragment,i),$(Os.$$.fragment,i),$(Xi.$$.fragment,i),$(Ci.$$.fragment,i),$(Bi.$$.fragment,i),$(Is.$$.fragment,i),$(Ds.$$.fragment,i),$(Wi.$$.fragment,i),$(Ui.$$.fragment,i),$(el.$$.fragment,i),$(Bs.$$.fragment,i),$(Ws.$$.fragment,i),$(tl.$$.fragment,i),$(ol.$$.fragment,i),$(pl.$$.fragment,i),$(Qs.$$.fragment,i),$(Hs.$$.fragment,i),$(hl.$$.fragment,i),$(ml.$$.fragment,i),$(Tl.$$.fragment,i),$(Vs.$$.fragment,i),$(Js.$$.fragment,i),iu=!1},d(i){t(d),i&&t(g),i&&t(c),F(l),i&&t(be),i&&t(O),F(L),i&&t(ke),i&&t(D),i&&t(ve),i&&t(B),i&&t(ye),i&&t(W),i&&t(ne),i&&t(q),i&&t(Te),i&&t(S),i&&t(we),i&&t(se),i&&t(P),i&&t(ae),F(E),i&&t(We),i&&t(z),F(Oe),F($n),i&&t(km),i&&t(zo),F(ua),i&&t(vm),i&&t(st),F(fa),F(ba),F(va),F(Ta),F(wa),i&&t(ym),i&&t(qo),F(Ma),i&&t(Tm),i&&t(yt),F($a),F(La),F(Ea),i&&t(wm),i&&t(Xo),F(za),i&&t(Mm),i&&t(Ze),F(qa),F(Oa),F(Xn),F(Cn),i&&t($m),i&&t(jo),F(Na),i&&t(Fm),i&&t(Tt),F(Ia),F(Ua),F(Pn),F(An),i&&t(xm),i&&t(Ao),F(Qa),i&&t(Lm),i&&t(wt),F(Ha),F(Ya),F(Nn),F(In),F(Dn),i&&t(Rm),i&&t(No),F(Za),i&&t(Em),i&&t(Mt),F(er),F(sr),F(Bn),F(Wn),F(Un),F(Qn),F(Hn),i&&t(zm),i&&t(Do),F(ar),i&&t(qm),i&&t($t),F(rr),F(cr),F(Vn),F(Jn),i&&t(Xm),i&&t(Bo),F(pr),i&&t(Cm),i&&t(Ft),F(hr),F(gr),F(Yn),F(Zn),F(es),i&&t(jm),i&&t(Uo),F(_r),i&&t(Pm),i&&t(xt),F(br),F(Tr),F(os),F(ns),F(ss),i&&t(Am),i&&t(Ko),F(wr),i&&t(Om),i&&t(at),F(Mr),F(rs),F(Rr),F(is),F(ls),i&&t(Nm),i&&t(Jo),F(Er),i&&t(Im),i&&t(rt),F(zr),F(cs),F(Ar),F(ps),F(hs),F(ms),i&&t(Dm),i&&t(Yo),F(Or),i&&t(Sm),i&&t(it),F(Nr),F(fs),F(Wr),F(gs),F(_s),F(bs),i&&t(Bm),i&&t(en),F(Ur),i&&t(Wm),i&&t(lt),F(Qr),F(vs),F(Gr),F(ys),F(Ts),i&&t(Um),i&&t(on),F(Yr),i&&t(Qm),i&&t(dt),F(Zr),F(Ms),F(si),F($s),F(Fs),F(xs),i&&t(Hm),i&&t(sn),F(ai),i&&t(Km),i&&t(ct),F(ri),F(Rs),F(pi),F(Es),F(zs),F(qs),i&&t(Vm),i&&t(ln),F(hi),i&&t(Jm),i&&t(pt),F(mi),F(Ti),F(Cs),F(js),i&&t(Gm),i&&t(cn),F(wi),i&&t(Ym),i&&t(ht),F(Mi),F(qi),F(As),F(Os),i&&t(Zm),i&&t(mn),F(Xi),i&&t(eu),i&&t(et),F(Ci),F(Bi),F(Is),F(Ds),i&&t(tu),i&&t(fn),F(Wi),i&&t(ou),i&&t(tt),F(Ui),F(el),F(Bs),F(Ws),i&&t(nu),i&&t(_n),F(tl),i&&t(su),i&&t(ot),F(ol),F(pl),F(Qs),F(Hs),i&&t(au),i&&t(kn),F(hl),i&&t(ru),i&&t(nt),F(ml),F(Tl),F(Vs),F(Js)}}}const HL={local:"xlmroberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaConfig",title:"XLMRobertaConfig"},{local:"transformers.XLMRobertaTokenizer",title:"XLMRobertaTokenizer"},{local:"transformers.XLMRobertaTokenizerFast",title:"XLMRobertaTokenizerFast"},{local:"transformers.XLMRobertaModel",title:"XLMRobertaModel"},{local:"transformers.XLMRobertaForCausalLM",title:"XLMRobertaForCausalLM"},{local:"transformers.XLMRobertaForMaskedLM",title:"XLMRobertaForMaskedLM"},{local:"transformers.XLMRobertaForSequenceClassification",title:"XLMRobertaForSequenceClassification"},{local:"transformers.XLMRobertaForMultipleChoice",title:"XLMRobertaForMultipleChoice"},{local:"transformers.XLMRobertaForTokenClassification",title:"XLMRobertaForTokenClassification"},{local:"transformers.XLMRobertaForQuestionAnswering",title:"XLMRobertaForQuestionAnswering"},{local:"transformers.TFXLMRobertaModel",title:"TFXLMRobertaModel"},{local:"transformers.TFXLMRobertaForMaskedLM",title:"TFXLMRobertaForMaskedLM"},{local:"transformers.TFXLMRobertaForSequenceClassification",title:"TFXLMRobertaForSequenceClassification"},{local:"transformers.TFXLMRobertaForMultipleChoice",title:"TFXLMRobertaForMultipleChoice"},{local:"transformers.TFXLMRobertaForTokenClassification",title:"TFXLMRobertaForTokenClassification"},{local:"transformers.TFXLMRobertaForQuestionAnswering",title:"TFXLMRobertaForQuestionAnswering"},{local:"transformers.FlaxXLMRobertaModel",title:"FlaxXLMRobertaModel"},{local:"transformers.FlaxXLMRobertaForMaskedLM",title:"FlaxXLMRobertaForMaskedLM"},{local:"transformers.FlaxXLMRobertaForSequenceClassification",title:"FlaxXLMRobertaForSequenceClassification"},{local:"transformers.FlaxXLMRobertaForMultipleChoice",title:"FlaxXLMRobertaForMultipleChoice"},{local:"transformers.FlaxXLMRobertaForTokenClassification",title:"FlaxXLMRobertaForTokenClassification"},{local:"transformers.FlaxXLMRobertaForQuestionAnswering",title:"FlaxXLMRobertaForQuestionAnswering"}],title:"XLM-RoBERTa"};function KL(x){return Wx(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tR extends Ix{constructor(d){super();Dx(this,d,KL,QL,Sx,{})}}export{tR as default,HL as metadata};
