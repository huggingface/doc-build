import{S as IL,i as DL,s as SL,e as s,k as p,w as v,t as o,M as BL,c as a,d as t,m as h,a as r,x as T,h as n,b as u,G as e,g as _,y as w,q as M,o as $,B as F,v as WL,L as ue}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ie}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as fe}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Be}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as me}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function UL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaConfig, XLMRobertaModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=o("Examples:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Examples:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function QL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function HL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function KL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function VL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForCausalLM, XLMRobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function JL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function GL(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function YL(x){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ZL(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function eR(x){let d,g,c,f,k;return f=new fe({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of single-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function tR(x){let d,g;return d=new fe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = XLMRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function oR(x){let d,g,c,f,k;return f=new fe({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of multi-label classification:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function nR(x){let d,g;return d=new fe({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function sR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function aR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function rR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function iR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function lR(x){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function dR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function cR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import XLMRobertaTokenizer, XLMRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function pR(x){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function hR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function mR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function uR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function fR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function gR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function _R(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function bR(x){let d,g;return d=new fe({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function kR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function yR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function vR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function TR(x){let d,g;return d=new fe({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function wR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function MR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function $R(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function FR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function xR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function LR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function RR(x){let d,g;return d=new fe({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function ER(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),c=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=p(),m=s("ul"),R=s("li"),Me=o("having all inputs as keyword arguments (like PyTorch models), or"),be=p(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=p(),L=s("p"),$e=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Le=o("fit()"),ye=o(" and "),B=s("code"),Re=o("predict()"),ve=o(`, such as when creating your own layers or models with
the Keras `),W=s("code"),ge=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),q=s("ul"),X=s("li"),Te=o("a single Tensor with "),S=s("code"),de=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Xe=p(),C=s("li"),ce=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=s("code"),he=o("model([input_ids, attention_mask])"),Ce=o(" or "),V=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=p(),N=s("li"),pe=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),je=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),j=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=a(y,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=r(c);f=n(Ue,"transformers"),Ue.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=h(y),m=a(y,"UL",{});var oe=r(m);R=a(oe,"LI",{});var Qe=r(R);Me=n(Qe,"having all inputs as keyword arguments (like PyTorch models), or"),Qe.forEach(t),be=h(oe),O=a(oe,"LI",{});var We=r(O);re=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),oe.forEach(t),te=h(y),L=a(y,"P",{});var z=r(L);$e=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Oe=r(U);Fe=n(Oe,"model.fit()"),Oe.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var He=r(D);xe=n(He,"model.fit()"),He.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var _e=r(H);Le=n(_e,"fit()"),_e.forEach(t),ye=n(z," and "),B=a(z,"CODE",{});var Ke=r(B);Re=n(Ke,"predict()"),Ke.forEach(t),ve=n(z,`, such as when creating your own layers or models with
the Keras `),W=a(z,"CODE",{});var De=r(W);ge=n(De,"Functional"),De.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(y),q=a(y,"UL",{});var I=r(q);X=a(I,"LI",{});var G=r(X);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Se=r(S);de=n(Se,"input_ids"),Se.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ve=r(Q);qe=n(Ve,"model(input_ids)"),Ve.forEach(t),G.forEach(t),Xe=h(I),C=a(I,"LI",{});var Y=r(C);ce=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=a(Y,"CODE",{});var Ne=r(K);he=n(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),Ce=n(Y," or "),V=a(Y,"CODE",{});var Je=r(V);we=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),se=h(I),N=a(I,"LI",{});var Ae=r(N);pe=n(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(Ae,"CODE",{});var Ge=r(J);je=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),Ae.forEach(t),I.forEach(t),ee=h(y),j=a(y,"P",{});var Z=r(j);Pe=n(Z,`Note that when creating models and layers with
`),P=a(Z,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(y,E){_(y,d,E),e(d,g),e(d,c),e(c,f),e(d,k),_(y,l,E),_(y,m,E),e(m,R),e(R,Me),e(m,be),e(m,O),e(O,re),_(y,te,E),_(y,L,E),e(L,$e),e(L,U),e(U,Fe),e(L,ke),e(L,D),e(D,xe),e(L,le),e(L,H),e(H,Le),e(L,ye),e(L,B),e(B,Re),e(L,ve),e(L,W),e(W,ge),e(L,Ee),_(y,ne,E),_(y,q,E),e(q,X),e(X,Te),e(X,S),e(S,de),e(X,ze),e(X,Q),e(Q,qe),e(q,Xe),e(q,C),e(C,ce),e(C,K),e(K,he),e(C,Ce),e(C,V),e(V,we),e(q,se),e(q,N),e(N,pe),e(N,J),e(J,je),_(y,ee,E),_(y,j,E),e(j,Pe),e(j,P),e(P,ae),e(j,ie)},d(y){y&&t(d),y&&t(l),y&&t(m),y&&t(te),y&&t(L),y&&t(ne),y&&t(q),y&&t(ee),y&&t(j)}}}function zR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function qR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function XR(x){let d,g;return d=new fe({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){v(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,f){w(d,c,f),g=!0},p:ue,i(c){g||(M(d.$$.fragment,c),g=!0)},o(c){$(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function CR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function jR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function PR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function AR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function OR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function NR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function IR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function DR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function SR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function BR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function WR(x){let d,g,c,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(m,"CODE",{});var R=r(c);f=n(R,"Module"),R.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,c),e(c,f),e(d,k)},d(l){l&&t(d)}}}function UR(x){let d,g,c,f,k;return f=new fe({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),c=p(),v(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),c=h(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,c,m),w(f,l,m),k=!0},p:ue,i(l){k||(M(f.$$.fragment,l),k=!0)},o(l){$(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(f,l)}}}function QR(x){let d,g,c,f,k,l,m,R,Me,be,O,re,te,L,$e,U,Fe,ke,D,xe,le,H,Le,ye,B,Re,ve,W,ge,Ee,ne,q,X,Te,S,de,ze,Q,qe,Xe,C,ce,K,he,Ce,V,we,se,N,pe,J,je,ee,j,Pe,P,ae,ie,y,E,Ue,oe,Qe,We,z,Oe,He,_e,Ke,De,I,G,Se,Ve,Y,Ne,Je,Ae,Ge,Z,Ye,jl,qf,Xf,Pl,Cf,jf,Pf,$n,km,zo,Fn,dc,ua,Af,cc,Of,ym,st,fa,Nf,no,If,Al,Df,Sf,Ol,Bf,Wf,ga,Uf,Qf,Hf,_a,Kf,Nl,Vf,Jf,Gf,uo,ba,Yf,pc,Zf,eg,ka,Il,tg,hc,og,ng,Dl,sg,mc,ag,rg,xn,ya,ig,va,lg,uc,dg,cg,pg,Ln,Ta,hg,fc,mg,ug,Sl,wa,vm,qo,Rn,gc,Ma,fg,_c,gg,Tm,vt,$a,_g,Ut,bg,bc,kg,yg,Bl,vg,Tg,Wl,wg,Mg,Fa,$g,Fg,xg,xa,Lg,Ul,Rg,Eg,zg,fo,La,qg,kc,Xg,Cg,Ra,Ql,jg,yc,Pg,Ag,Hl,Og,vc,Ng,Ig,En,Ea,Dg,Tc,Sg,wm,Xo,zn,wc,za,Bg,Mc,Wg,Mm,Ze,qa,Ug,$c,Qg,Hg,Xa,Kg,Kl,Vg,Jg,Gg,Ca,Yg,ja,Zg,e_,t_,Pa,o_,Fc,n_,s_,a_,ut,r_,xc,i_,l_,Lc,d_,c_,Rc,p_,h_,Ec,m_,u_,zc,f_,g_,qc,__,b_,k_,qn,y_,Xc,v_,T_,Aa,w_,M_,Qt,Oa,$_,Co,F_,Vl,x_,L_,Cc,R_,E_,z_,Xn,q_,Cn,$m,jo,jn,jc,Na,X_,Pc,C_,Fm,Tt,Ia,j_,Da,P_,Ac,A_,O_,N_,Sa,I_,Jl,D_,S_,B_,Ba,W_,Wa,U_,Q_,H_,Ht,Ua,K_,Po,V_,Gl,J_,G_,Oc,Y_,Z_,eb,Pn,tb,An,xm,Ao,On,Nc,Qa,ob,Ic,nb,Lm,wt,Ha,sb,Ka,ab,Dc,rb,ib,lb,Va,db,Yl,cb,pb,hb,Ja,mb,Ga,ub,fb,gb,Lt,Ya,_b,Oo,bb,Zl,kb,yb,Sc,vb,Tb,wb,Nn,Mb,In,$b,Dn,Rm,No,Sn,Bc,Za,Fb,Wc,xb,Em,Mt,er,Lb,Uc,Rb,Eb,tr,zb,ed,qb,Xb,Cb,or,jb,nr,Pb,Ab,Ob,mt,sr,Nb,Io,Ib,td,Db,Sb,Qc,Bb,Wb,Ub,Bn,Qb,Wn,Hb,Un,Kb,Qn,Vb,Hn,zm,Do,Kn,Hc,ar,Jb,Kc,Gb,qm,$t,rr,Yb,Vc,Zb,ek,ir,tk,od,ok,nk,sk,lr,ak,dr,rk,ik,lk,Kt,cr,dk,So,ck,nd,pk,hk,Jc,mk,uk,fk,Vn,gk,Jn,Xm,Bo,Gn,Gc,pr,_k,Yc,bk,Cm,Ft,hr,kk,Zc,yk,vk,mr,Tk,sd,wk,Mk,$k,ur,Fk,fr,xk,Lk,Rk,Rt,gr,Ek,Wo,zk,ad,qk,Xk,ep,Ck,jk,Pk,Yn,Ak,Zn,Ok,es,jm,Uo,ts,tp,_r,Nk,op,Ik,Pm,xt,br,Dk,Qo,Sk,np,Bk,Wk,sp,Uk,Qk,Hk,kr,Kk,rd,Vk,Jk,Gk,yr,Yk,vr,Zk,ey,ty,Et,Tr,oy,Ho,ny,id,sy,ay,ap,ry,iy,ly,os,dy,ns,cy,ss,Am,Ko,as,rp,wr,py,ip,hy,Om,at,Mr,my,lp,uy,fy,$r,gy,ld,_y,by,ky,Fr,yy,xr,vy,Ty,wy,rs,My,Lr,$y,dd,Fy,xy,Ly,Vt,Rr,Ry,Vo,Ey,cd,zy,qy,dp,Xy,Cy,jy,is,Py,ls,Nm,Jo,ds,cp,Er,Ay,pp,Oy,Im,rt,zr,Ny,qr,Iy,hp,Dy,Sy,By,Xr,Wy,pd,Uy,Qy,Hy,Cr,Ky,jr,Vy,Jy,Gy,cs,Yy,Pr,Zy,hd,ev,tv,ov,zt,Ar,nv,Go,sv,md,av,rv,mp,iv,lv,dv,ps,cv,hs,pv,ms,Dm,Yo,us,up,Or,hv,fp,mv,Sm,it,Nr,uv,gp,fv,gv,Ir,_v,ud,bv,kv,yv,Dr,vv,Sr,Tv,wv,Mv,fs,$v,Br,Fv,fd,xv,Lv,Rv,qt,Wr,Ev,Zo,zv,gd,qv,Xv,_p,Cv,jv,Pv,gs,Av,_s,Ov,bs,Bm,en,ks,bp,Ur,Nv,kp,Iv,Wm,lt,Qr,Dv,yp,Sv,Bv,Hr,Wv,_d,Uv,Qv,Hv,Kr,Kv,Vr,Vv,Jv,Gv,ys,Yv,Jr,Zv,bd,eT,tT,oT,Jt,Gr,nT,tn,sT,kd,aT,rT,vp,iT,lT,dT,vs,cT,Ts,Um,on,ws,Tp,Yr,pT,wp,hT,Qm,dt,Zr,mT,Mp,uT,fT,ei,gT,yd,_T,bT,kT,ti,yT,oi,vT,TT,wT,Ms,MT,ni,$T,vd,FT,xT,LT,Xt,si,RT,nn,ET,Td,zT,qT,$p,XT,CT,jT,$s,PT,Fs,AT,xs,Hm,sn,Ls,Fp,ai,OT,xp,NT,Km,ct,ri,IT,an,DT,Lp,ST,BT,Rp,WT,UT,QT,ii,HT,wd,KT,VT,JT,li,GT,di,YT,ZT,ew,Rs,tw,ci,ow,Ep,nw,sw,aw,Ct,pi,rw,rn,iw,Md,lw,dw,zp,cw,pw,hw,Es,mw,zs,uw,qs,Vm,ln,Xs,qp,hi,fw,Xp,gw,Jm,pt,mi,_w,ui,bw,$d,kw,yw,vw,fi,Tw,gi,ww,Mw,$w,Cp,Fw,xw,so,jp,_i,Lw,Rw,Pp,bi,Ew,zw,Ap,ki,qw,Xw,Op,yi,Cw,jw,vi,Pw,Fd,Aw,Ow,Nw,Gt,Ti,Iw,dn,Dw,Np,Sw,Bw,Ip,Ww,Uw,Qw,Cs,Hw,js,Gm,cn,Ps,Dp,wi,Kw,Sp,Vw,Ym,ht,Mi,Jw,pn,Gw,Bp,Yw,Zw,xd,eM,tM,oM,$i,nM,Fi,sM,aM,rM,Wp,iM,lM,ao,Up,xi,dM,cM,Qp,Li,pM,hM,Hp,Ri,mM,uM,Kp,Ei,fM,gM,zi,_M,Ld,bM,kM,yM,Yt,qi,vM,hn,TM,Vp,wM,MM,Jp,$M,FM,xM,As,LM,Os,Zm,mn,Ns,Gp,Xi,RM,Yp,EM,eu,et,Ci,zM,Zp,qM,XM,ji,CM,Rd,jM,PM,AM,Pi,OM,Ai,NM,IM,DM,eh,SM,BM,ro,th,Oi,WM,UM,oh,Ni,QM,HM,nh,Ii,KM,VM,sh,Di,JM,GM,Si,YM,Ed,ZM,e$,t$,Zt,Bi,o$,un,n$,ah,s$,a$,rh,r$,i$,l$,Is,d$,Ds,tu,fn,Ss,ih,Wi,c$,lh,p$,ou,tt,Ui,h$,dh,m$,u$,Qi,f$,zd,g$,_$,b$,Hi,k$,Ki,y$,v$,T$,ch,w$,M$,io,ph,Vi,$$,F$,hh,Ji,x$,L$,mh,Gi,R$,E$,uh,Yi,z$,q$,Zi,X$,qd,C$,j$,P$,eo,el,A$,gn,O$,fh,N$,I$,gh,D$,S$,B$,Bs,W$,Ws,nu,_n,Us,_h,tl,U$,bh,Q$,su,ot,ol,H$,kh,K$,V$,nl,J$,Xd,G$,Y$,Z$,sl,e1,al,t1,o1,n1,yh,s1,a1,lo,vh,rl,r1,i1,Th,il,l1,d1,wh,ll,c1,p1,Mh,dl,h1,m1,cl,u1,Cd,f1,g1,_1,to,pl,b1,bn,k1,$h,y1,v1,Fh,T1,w1,M1,Qs,$1,Hs,au,kn,Ks,xh,hl,F1,Lh,x1,ru,nt,ml,L1,yn,R1,Rh,E1,z1,Eh,q1,X1,C1,ul,j1,jd,P1,A1,O1,fl,N1,gl,I1,D1,S1,zh,B1,W1,co,qh,_l,U1,Q1,Xh,bl,H1,K1,Ch,kl,V1,J1,jh,yl,G1,Y1,vl,Z1,Pd,e2,t2,o2,oo,Tl,n2,vn,s2,Ph,a2,r2,Ah,i2,l2,d2,Vs,c2,Js,iu;return l=new Be({}),L=new Be({}),E=new Be({}),Oe=new A({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the XLM-RoBERTa model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.XLMRobertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel">XLMRobertaModel</a> or
<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel">TFXLMRobertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.XLMRobertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.XLMRobertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.XLMRobertaConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.XLMRobertaConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.XLMRobertaConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L45"}}),$n=new me({props:{anchor:"transformers.XLMRobertaConfig.example",$$slots:{default:[UL]},$$scope:{ctx:x}}}),ua=new Be({}),fa=new A({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L63"}}),ba=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L202",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ya=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ta=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L256",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wa=new A({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L313"}}),Ma=new Be({}),$a=new A({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L82"}}),La=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L171",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ea=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L197",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),za=new Be({}),qa=new A({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L692"}}),Oa=new A({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new Ie({props:{$$slots:{default:[QL]},$$scope:{ctx:x}}}),Cn=new me({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[HL]},$$scope:{ctx:x}}}),Na=new Be({}),Ia=new A({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L880"}}),Ua=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L906",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new Ie({props:{$$slots:{default:[KL]},$$scope:{ctx:x}}}),An=new me({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[VL]},$$scope:{ctx:x}}}),Qa=new Be({}),Ha=new A({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1036"}}),Ya=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1065",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Ie({props:{$$slots:{default:[JL]},$$scope:{ctx:x}}}),In=new me({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[GL]},$$scope:{ctx:x}}}),Dn=new me({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example-2",$$slots:{default:[YL]},$$scope:{ctx:x}}}),Za=new Be({}),er=new A({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1169"}}),sr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1183",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new Ie({props:{$$slots:{default:[ZL]},$$scope:{ctx:x}}}),Wn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[eR]},$$scope:{ctx:x}}}),Un=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[tR]},$$scope:{ctx:x}}}),Qn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-3",$$slots:{default:[oR]},$$scope:{ctx:x}}}),Hn=new me({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-4",$$slots:{default:[nR]},$$scope:{ctx:x}}}),ar=new Be({}),rr=new A({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1270"}}),cr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1283",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new Ie({props:{$$slots:{default:[sR]},$$scope:{ctx:x}}}),Jn=new me({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[aR]},$$scope:{ctx:x}}}),pr=new Be({}),hr=new A({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1366"}}),gr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1384",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yn=new Ie({props:{$$slots:{default:[rR]},$$scope:{ctx:x}}}),Zn=new me({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[iR]},$$scope:{ctx:x}}}),es=new me({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example-2",$$slots:{default:[lR]},$$scope:{ctx:x}}}),_r=new Be({}),br=new A({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1477"}}),Tr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaTokenizer">XLMRobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L1491",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),os=new Ie({props:{$$slots:{default:[dR]},$$scope:{ctx:x}}}),ns=new me({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[cR]},$$scope:{ctx:x}}}),ss=new me({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example-2",$$slots:{default:[pR]},$$scope:{ctx:x}}}),wr=new Be({}),Mr=new A({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L85"}}),rs=new Ie({props:{$$slots:{default:[hR]},$$scope:{ctx:x}}}),Rr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L929",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),is=new Ie({props:{$$slots:{default:[mR]},$$scope:{ctx:x}}}),ls=new me({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[uR]},$$scope:{ctx:x}}}),Er=new Be({}),zr=new A({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L111"}}),cs=new Ie({props:{$$slots:{default:[fR]},$$scope:{ctx:x}}}),Ar=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1085",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ps=new Ie({props:{$$slots:{default:[gR]},$$scope:{ctx:x}}}),hs=new me({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[_R]},$$scope:{ctx:x}}}),ms=new me({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[bR]},$$scope:{ctx:x}}}),Or=new Be({}),Nr=new A({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L127"}}),fs=new Ie({props:{$$slots:{default:[kR]},$$scope:{ctx:x}}}),Wr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1344",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gs=new Ie({props:{$$slots:{default:[yR]},$$scope:{ctx:x}}}),_s=new me({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[vR]},$$scope:{ctx:x}}}),bs=new me({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[TR]},$$scope:{ctx:x}}}),Ur=new Be({}),Qr=new A({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L175"}}),ys=new Ie({props:{$$slots:{default:[wR]},$$scope:{ctx:x}}}),Gr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1441",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vs=new Ie({props:{$$slots:{default:[MR]},$$scope:{ctx:x}}}),Ts=new me({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[$R]},$$scope:{ctx:x}}}),Yr=new Be({}),Zr=new A({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L143"}}),Ms=new Ie({props:{$$slots:{default:[FR]},$$scope:{ctx:x}}}),si=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1556",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$s=new Ie({props:{$$slots:{default:[xR]},$$scope:{ctx:x}}}),Fs=new me({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[LR]},$$scope:{ctx:x}}}),xs=new me({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[RR]},$$scope:{ctx:x}}}),ai=new Be({}),ri=new A({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L159"}}),Rs=new Ie({props:{$$slots:{default:[ER]},$$scope:{ctx:x}}}),pi=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1642",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Es=new Ie({props:{$$slots:{default:[zR]},$$scope:{ctx:x}}}),zs=new me({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[qR]},$$scope:{ctx:x}}}),qs=new me({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[XR]},$$scope:{ctx:x}}}),hi=new Be({}),mi=new A({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L68"}}),Ti=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Cs=new Ie({props:{$$slots:{default:[CR]},$$scope:{ctx:x}}}),js=new me({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[jR]},$$scope:{ctx:x}}}),wi=new Be({}),Mi=new A({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L81"}}),qi=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),As=new Ie({props:{$$slots:{default:[PR]},$$scope:{ctx:x}}}),Os=new me({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[AR]},$$scope:{ctx:x}}}),Xi=new Be({}),Ci=new A({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L97"}}),Bi=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Is=new Ie({props:{$$slots:{default:[OR]},$$scope:{ctx:x}}}),Ds=new me({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[NR]},$$scope:{ctx:x}}}),Wi=new Be({}),Ui=new A({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L113"}}),el=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bs=new Ie({props:{$$slots:{default:[IR]},$$scope:{ctx:x}}}),Ws=new me({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[DR]},$$scope:{ctx:x}}}),tl=new Be({}),ol=new A({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L129"}}),pl=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qs=new Ie({props:{$$slots:{default:[SR]},$$scope:{ctx:x}}}),Hs=new me({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[BR]},$$scope:{ctx:x}}}),hl=new Be({}),ml=new A({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L145"}}),Tl=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vs=new Ie({props:{$$slots:{default:[WR]},$$scope:{ctx:x}}}),Js=new me({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[UR]},$$scope:{ctx:x}}}),{c(){d=s("meta"),g=p(),c=s("h1"),f=s("a"),k=s("span"),v(l.$$.fragment),m=p(),R=s("span"),Me=o("XLM-RoBERTa"),be=p(),O=s("h2"),re=s("a"),te=s("span"),v(L.$$.fragment),$e=p(),U=s("span"),Fe=o("Overview"),ke=p(),D=s("p"),xe=o("The XLM-RoBERTa model was proposed in "),le=s("a"),H=o("Unsupervised Cross-lingual Representation Learning at Scale"),Le=o(` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),ye=p(),B=s("p"),Re=o("The abstract from the paper is the following:"),ve=p(),W=s("p"),ge=s("em"),Ee=o(`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
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
as well as the information relative to the inputs and outputs.`),we=p(),se=s("p"),N=o("This model was contributed by "),pe=s("a"),J=o("stefan-it"),je=o(". The original code can be found "),ee=s("a"),j=o("here"),Pe=o("."),P=p(),ae=s("h2"),ie=s("a"),y=s("span"),v(E.$$.fragment),Ue=p(),oe=s("span"),Qe=o("XLMRobertaConfig"),We=p(),z=s("div"),v(Oe.$$.fragment),He=p(),_e=s("p"),Ke=o("This is the configuration class to store the configuration of a "),De=s("a"),I=o("XLMRobertaModel"),G=o(" or a "),Se=s("a"),Ve=o("TFXLMRobertaModel"),Y=o(`. It
is used to instantiate a XLM-RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the XLMRoBERTa
`),Ne=s("a"),Je=o("xlm-roberta-base"),Ae=o(" architecture."),Ge=p(),Z=s("p"),Ye=o("Configuration objects inherit from "),jl=s("a"),qf=o("PretrainedConfig"),Xf=o(` and can be used to control the model outputs. Read the
documentation from `),Pl=s("a"),Cf=o("PretrainedConfig"),jf=o(" for more information."),Pf=p(),v($n.$$.fragment),km=p(),zo=s("h2"),Fn=s("a"),dc=s("span"),v(ua.$$.fragment),Af=p(),cc=s("span"),Of=o("XLMRobertaTokenizer"),ym=p(),st=s("div"),v(fa.$$.fragment),Nf=p(),no=s("p"),If=o("Adapted from "),Al=s("a"),Df=o("RobertaTokenizer"),Sf=o(" and "),Ol=s("a"),Bf=o("XLNetTokenizer"),Wf=o(`. Based on
`),ga=s("a"),Uf=o("SentencePiece"),Qf=o("."),Hf=p(),_a=s("p"),Kf=o("This tokenizer inherits from "),Nl=s("a"),Vf=o("PreTrainedTokenizer"),Jf=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Gf=p(),uo=s("div"),v(ba.$$.fragment),Yf=p(),pc=s("p"),Zf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),eg=p(),ka=s("ul"),Il=s("li"),tg=o("single sequence: "),hc=s("code"),og=o("<s> X </s>"),ng=p(),Dl=s("li"),sg=o("pair of sequences: "),mc=s("code"),ag=o("<s> A </s></s> B </s>"),rg=p(),xn=s("div"),v(ya.$$.fragment),ig=p(),va=s("p"),lg=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),uc=s("code"),dg=o("prepare_for_model"),cg=o(" method."),pg=p(),Ln=s("div"),v(Ta.$$.fragment),hg=p(),fc=s("p"),mg=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),ug=p(),Sl=s("div"),v(wa.$$.fragment),vm=p(),qo=s("h2"),Rn=s("a"),gc=s("span"),v(Ma.$$.fragment),fg=p(),_c=s("span"),gg=o("XLMRobertaTokenizerFast"),Tm=p(),vt=s("div"),v($a.$$.fragment),_g=p(),Ut=s("p"),bg=o("Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),bc=s("em"),kg=o("tokenizers"),yg=o(` library). Adapted from
`),Bl=s("a"),vg=o("RobertaTokenizer"),Tg=o(" and "),Wl=s("a"),wg=o("XLNetTokenizer"),Mg=o(`. Based on
`),Fa=s("a"),$g=o("BPE"),Fg=o("."),xg=p(),xa=s("p"),Lg=o("This tokenizer inherits from "),Ul=s("a"),Rg=o("PreTrainedTokenizerFast"),Eg=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),zg=p(),fo=s("div"),v(La.$$.fragment),qg=p(),kc=s("p"),Xg=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Cg=p(),Ra=s("ul"),Ql=s("li"),jg=o("single sequence: "),yc=s("code"),Pg=o("<s> X </s>"),Ag=p(),Hl=s("li"),Og=o("pair of sequences: "),vc=s("code"),Ng=o("<s> A </s></s> B </s>"),Ig=p(),En=s("div"),v(Ea.$$.fragment),Dg=p(),Tc=s("p"),Sg=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),wm=p(),Xo=s("h2"),zn=s("a"),wc=s("span"),v(za.$$.fragment),Bg=p(),Mc=s("span"),Wg=o("XLMRobertaModel"),Mm=p(),Ze=s("div"),v(qa.$$.fragment),Ug=p(),$c=s("p"),Qg=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Hg=p(),Xa=s("p"),Kg=o("This model inherits from "),Kl=s("a"),Vg=o("PreTrainedModel"),Jg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gg=p(),Ca=s("p"),Yg=o("This model is also a PyTorch "),ja=s("a"),Zg=o("torch.nn.Module"),e_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),t_=p(),Pa=s("p"),o_=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fc=s("em"),n_=o(`Attention is
all you need`),s_=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),a_=p(),ut=s("p"),r_=o("To behave as an decoder the model needs to be initialized with the "),xc=s("code"),i_=o("is_decoder"),l_=o(` argument of the configuration set
to `),Lc=s("code"),d_=o("True"),c_=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Rc=s("code"),p_=o("is_decoder"),h_=o(` argument and
`),Ec=s("code"),m_=o("add_cross_attention"),u_=o(" set to "),zc=s("code"),f_=o("True"),g_=o("; an "),qc=s("code"),__=o("encoder_hidden_states"),b_=o(" is then expected as an input to the forward pass."),k_=p(),qn=s("p"),y_=o(".. _"),Xc=s("em"),v_=o("Attention is all you need"),T_=o(": "),Aa=s("a"),w_=o("https://arxiv.org/abs/1706.03762"),M_=p(),Qt=s("div"),v(Oa.$$.fragment),$_=p(),Co=s("p"),F_=o("The "),Vl=s("a"),x_=o("XLMRobertaModel"),L_=o(" forward method, overrides the "),Cc=s("code"),R_=o("__call__"),E_=o(" special method."),z_=p(),v(Xn.$$.fragment),q_=p(),v(Cn.$$.fragment),$m=p(),jo=s("h2"),jn=s("a"),jc=s("span"),v(Na.$$.fragment),X_=p(),Pc=s("span"),C_=o("XLMRobertaForCausalLM"),Fm=p(),Tt=s("div"),v(Ia.$$.fragment),j_=p(),Da=s("p"),P_=o("XLM-RoBERTa Model with a "),Ac=s("code"),A_=o("language modeling"),O_=o(" head on top for CLM fine-tuning."),N_=p(),Sa=s("p"),I_=o("This model inherits from "),Jl=s("a"),D_=o("PreTrainedModel"),S_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),B_=p(),Ba=s("p"),W_=o("This model is also a PyTorch "),Wa=s("a"),U_=o("torch.nn.Module"),Q_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),H_=p(),Ht=s("div"),v(Ua.$$.fragment),K_=p(),Po=s("p"),V_=o("The "),Gl=s("a"),J_=o("XLMRobertaForCausalLM"),G_=o(" forward method, overrides the "),Oc=s("code"),Y_=o("__call__"),Z_=o(" special method."),eb=p(),v(Pn.$$.fragment),tb=p(),v(An.$$.fragment),xm=p(),Ao=s("h2"),On=s("a"),Nc=s("span"),v(Qa.$$.fragment),ob=p(),Ic=s("span"),nb=o("XLMRobertaForMaskedLM"),Lm=p(),wt=s("div"),v(Ha.$$.fragment),sb=p(),Ka=s("p"),ab=o("XLM-RoBERTa Model with a "),Dc=s("code"),rb=o("language modeling"),ib=o(" head on top."),lb=p(),Va=s("p"),db=o("This model inherits from "),Yl=s("a"),cb=o("PreTrainedModel"),pb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hb=p(),Ja=s("p"),mb=o("This model is also a PyTorch "),Ga=s("a"),ub=o("torch.nn.Module"),fb=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gb=p(),Lt=s("div"),v(Ya.$$.fragment),_b=p(),Oo=s("p"),bb=o("The "),Zl=s("a"),kb=o("XLMRobertaForMaskedLM"),yb=o(" forward method, overrides the "),Sc=s("code"),vb=o("__call__"),Tb=o(" special method."),wb=p(),v(Nn.$$.fragment),Mb=p(),v(In.$$.fragment),$b=p(),v(Dn.$$.fragment),Rm=p(),No=s("h2"),Sn=s("a"),Bc=s("span"),v(Za.$$.fragment),Fb=p(),Wc=s("span"),xb=o("XLMRobertaForSequenceClassification"),Em=p(),Mt=s("div"),v(er.$$.fragment),Lb=p(),Uc=s("p"),Rb=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Eb=p(),tr=s("p"),zb=o("This model inherits from "),ed=s("a"),qb=o("PreTrainedModel"),Xb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cb=p(),or=s("p"),jb=o("This model is also a PyTorch "),nr=s("a"),Pb=o("torch.nn.Module"),Ab=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ob=p(),mt=s("div"),v(sr.$$.fragment),Nb=p(),Io=s("p"),Ib=o("The "),td=s("a"),Db=o("XLMRobertaForSequenceClassification"),Sb=o(" forward method, overrides the "),Qc=s("code"),Bb=o("__call__"),Wb=o(" special method."),Ub=p(),v(Bn.$$.fragment),Qb=p(),v(Wn.$$.fragment),Hb=p(),v(Un.$$.fragment),Kb=p(),v(Qn.$$.fragment),Vb=p(),v(Hn.$$.fragment),zm=p(),Do=s("h2"),Kn=s("a"),Hc=s("span"),v(ar.$$.fragment),Jb=p(),Kc=s("span"),Gb=o("XLMRobertaForMultipleChoice"),qm=p(),$t=s("div"),v(rr.$$.fragment),Yb=p(),Vc=s("p"),Zb=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),ek=p(),ir=s("p"),tk=o("This model inherits from "),od=s("a"),ok=o("PreTrainedModel"),nk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sk=p(),lr=s("p"),ak=o("This model is also a PyTorch "),dr=s("a"),rk=o("torch.nn.Module"),ik=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lk=p(),Kt=s("div"),v(cr.$$.fragment),dk=p(),So=s("p"),ck=o("The "),nd=s("a"),pk=o("XLMRobertaForMultipleChoice"),hk=o(" forward method, overrides the "),Jc=s("code"),mk=o("__call__"),uk=o(" special method."),fk=p(),v(Vn.$$.fragment),gk=p(),v(Jn.$$.fragment),Xm=p(),Bo=s("h2"),Gn=s("a"),Gc=s("span"),v(pr.$$.fragment),_k=p(),Yc=s("span"),bk=o("XLMRobertaForTokenClassification"),Cm=p(),Ft=s("div"),v(hr.$$.fragment),kk=p(),Zc=s("p"),yk=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),vk=p(),mr=s("p"),Tk=o("This model inherits from "),sd=s("a"),wk=o("PreTrainedModel"),Mk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$k=p(),ur=s("p"),Fk=o("This model is also a PyTorch "),fr=s("a"),xk=o("torch.nn.Module"),Lk=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rk=p(),Rt=s("div"),v(gr.$$.fragment),Ek=p(),Wo=s("p"),zk=o("The "),ad=s("a"),qk=o("XLMRobertaForTokenClassification"),Xk=o(" forward method, overrides the "),ep=s("code"),Ck=o("__call__"),jk=o(" special method."),Pk=p(),v(Yn.$$.fragment),Ak=p(),v(Zn.$$.fragment),Ok=p(),v(es.$$.fragment),jm=p(),Uo=s("h2"),ts=s("a"),tp=s("span"),v(_r.$$.fragment),Nk=p(),op=s("span"),Ik=o("XLMRobertaForQuestionAnswering"),Pm=p(),xt=s("div"),v(br.$$.fragment),Dk=p(),Qo=s("p"),Sk=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),np=s("code"),Bk=o("span start logits"),Wk=o(" and "),sp=s("code"),Uk=o("span end logits"),Qk=o(")."),Hk=p(),kr=s("p"),Kk=o("This model inherits from "),rd=s("a"),Vk=o("PreTrainedModel"),Jk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gk=p(),yr=s("p"),Yk=o("This model is also a PyTorch "),vr=s("a"),Zk=o("torch.nn.Module"),ey=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ty=p(),Et=s("div"),v(Tr.$$.fragment),oy=p(),Ho=s("p"),ny=o("The "),id=s("a"),sy=o("XLMRobertaForQuestionAnswering"),ay=o(" forward method, overrides the "),ap=s("code"),ry=o("__call__"),iy=o(" special method."),ly=p(),v(os.$$.fragment),dy=p(),v(ns.$$.fragment),cy=p(),v(ss.$$.fragment),Am=p(),Ko=s("h2"),as=s("a"),rp=s("span"),v(wr.$$.fragment),py=p(),ip=s("span"),hy=o("TFXLMRobertaModel"),Om=p(),at=s("div"),v(Mr.$$.fragment),my=p(),lp=s("p"),uy=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),fy=p(),$r=s("p"),gy=o("This model inherits from "),ld=s("a"),_y=o("TFPreTrainedModel"),by=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ky=p(),Fr=s("p"),yy=o("This model is also a "),xr=s("a"),vy=o("tf.keras.Model"),Ty=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wy=p(),v(rs.$$.fragment),My=p(),Lr=s("p"),$y=o("This class overrides "),dd=s("a"),Fy=o("TFRobertaModel"),xy=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ly=p(),Vt=s("div"),v(Rr.$$.fragment),Ry=p(),Vo=s("p"),Ey=o("The "),cd=s("a"),zy=o("TFRobertaModel"),qy=o(" forward method, overrides the "),dp=s("code"),Xy=o("__call__"),Cy=o(" special method."),jy=p(),v(is.$$.fragment),Py=p(),v(ls.$$.fragment),Nm=p(),Jo=s("h2"),ds=s("a"),cp=s("span"),v(Er.$$.fragment),Ay=p(),pp=s("span"),Oy=o("TFXLMRobertaForMaskedLM"),Im=p(),rt=s("div"),v(zr.$$.fragment),Ny=p(),qr=s("p"),Iy=o("XLM-RoBERTa Model with a "),hp=s("code"),Dy=o("language modeling"),Sy=o(" head on top."),By=p(),Xr=s("p"),Wy=o("This model inherits from "),pd=s("a"),Uy=o("TFPreTrainedModel"),Qy=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hy=p(),Cr=s("p"),Ky=o("This model is also a "),jr=s("a"),Vy=o("tf.keras.Model"),Jy=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gy=p(),v(cs.$$.fragment),Yy=p(),Pr=s("p"),Zy=o("This class overrides "),hd=s("a"),ev=o("TFRobertaForMaskedLM"),tv=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ov=p(),zt=s("div"),v(Ar.$$.fragment),nv=p(),Go=s("p"),sv=o("The "),md=s("a"),av=o("TFRobertaForMaskedLM"),rv=o(" forward method, overrides the "),mp=s("code"),iv=o("__call__"),lv=o(" special method."),dv=p(),v(ps.$$.fragment),cv=p(),v(hs.$$.fragment),pv=p(),v(ms.$$.fragment),Dm=p(),Yo=s("h2"),us=s("a"),up=s("span"),v(Or.$$.fragment),hv=p(),fp=s("span"),mv=o("TFXLMRobertaForSequenceClassification"),Sm=p(),it=s("div"),v(Nr.$$.fragment),uv=p(),gp=s("p"),fv=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),gv=p(),Ir=s("p"),_v=o("This model inherits from "),ud=s("a"),bv=o("TFPreTrainedModel"),kv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yv=p(),Dr=s("p"),vv=o("This model is also a "),Sr=s("a"),Tv=o("tf.keras.Model"),wv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mv=p(),v(fs.$$.fragment),$v=p(),Br=s("p"),Fv=o("This class overrides "),fd=s("a"),xv=o("TFRobertaForSequenceClassification"),Lv=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Rv=p(),qt=s("div"),v(Wr.$$.fragment),Ev=p(),Zo=s("p"),zv=o("The "),gd=s("a"),qv=o("TFRobertaForSequenceClassification"),Xv=o(" forward method, overrides the "),_p=s("code"),Cv=o("__call__"),jv=o(" special method."),Pv=p(),v(gs.$$.fragment),Av=p(),v(_s.$$.fragment),Ov=p(),v(bs.$$.fragment),Bm=p(),en=s("h2"),ks=s("a"),bp=s("span"),v(Ur.$$.fragment),Nv=p(),kp=s("span"),Iv=o("TFXLMRobertaForMultipleChoice"),Wm=p(),lt=s("div"),v(Qr.$$.fragment),Dv=p(),yp=s("p"),Sv=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bv=p(),Hr=s("p"),Wv=o("This model inherits from "),_d=s("a"),Uv=o("TFPreTrainedModel"),Qv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hv=p(),Kr=s("p"),Kv=o("This model is also a "),Vr=s("a"),Vv=o("tf.keras.Model"),Jv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gv=p(),v(ys.$$.fragment),Yv=p(),Jr=s("p"),Zv=o("This class overrides "),bd=s("a"),eT=o("TFRobertaForMultipleChoice"),tT=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),oT=p(),Jt=s("div"),v(Gr.$$.fragment),nT=p(),tn=s("p"),sT=o("The "),kd=s("a"),aT=o("TFRobertaForMultipleChoice"),rT=o(" forward method, overrides the "),vp=s("code"),iT=o("__call__"),lT=o(" special method."),dT=p(),v(vs.$$.fragment),cT=p(),v(Ts.$$.fragment),Um=p(),on=s("h2"),ws=s("a"),Tp=s("span"),v(Yr.$$.fragment),pT=p(),wp=s("span"),hT=o("TFXLMRobertaForTokenClassification"),Qm=p(),dt=s("div"),v(Zr.$$.fragment),mT=p(),Mp=s("p"),uT=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),fT=p(),ei=s("p"),gT=o("This model inherits from "),yd=s("a"),_T=o("TFPreTrainedModel"),bT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kT=p(),ti=s("p"),yT=o("This model is also a "),oi=s("a"),vT=o("tf.keras.Model"),TT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wT=p(),v(Ms.$$.fragment),MT=p(),ni=s("p"),$T=o("This class overrides "),vd=s("a"),FT=o("TFRobertaForTokenClassification"),xT=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),LT=p(),Xt=s("div"),v(si.$$.fragment),RT=p(),nn=s("p"),ET=o("The "),Td=s("a"),zT=o("TFRobertaForTokenClassification"),qT=o(" forward method, overrides the "),$p=s("code"),XT=o("__call__"),CT=o(" special method."),jT=p(),v($s.$$.fragment),PT=p(),v(Fs.$$.fragment),AT=p(),v(xs.$$.fragment),Hm=p(),sn=s("h2"),Ls=s("a"),Fp=s("span"),v(ai.$$.fragment),OT=p(),xp=s("span"),NT=o("TFXLMRobertaForQuestionAnswering"),Km=p(),ct=s("div"),v(ri.$$.fragment),IT=p(),an=s("p"),DT=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lp=s("code"),ST=o("span start logits"),BT=o(" and "),Rp=s("code"),WT=o("span end logits"),UT=o(")."),QT=p(),ii=s("p"),HT=o("This model inherits from "),wd=s("a"),KT=o("TFPreTrainedModel"),VT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),JT=p(),li=s("p"),GT=o("This model is also a "),di=s("a"),YT=o("tf.keras.Model"),ZT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ew=p(),v(Rs.$$.fragment),tw=p(),ci=s("p"),ow=o("This class overrides "),Ep=s("code"),nw=o("TFRobertaForQuestionAnsweringSimple"),sw=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),aw=p(),Ct=s("div"),v(pi.$$.fragment),rw=p(),rn=s("p"),iw=o("The "),Md=s("a"),lw=o("TFRobertaForQuestionAnswering"),dw=o(" forward method, overrides the "),zp=s("code"),cw=o("__call__"),pw=o(" special method."),hw=p(),v(Es.$$.fragment),mw=p(),v(zs.$$.fragment),uw=p(),v(qs.$$.fragment),Vm=p(),ln=s("h2"),Xs=s("a"),qp=s("span"),v(hi.$$.fragment),fw=p(),Xp=s("span"),gw=o("FlaxXLMRobertaModel"),Jm=p(),pt=s("div"),v(mi.$$.fragment),_w=p(),ui=s("p"),bw=o(`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),$d=s("a"),kw=o("FlaxPreTrainedModel"),yw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vw=p(),fi=s("p"),Tw=o("This model is also a Flax Linen "),gi=s("a"),ww=o("flax.linen.Module"),Mw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),$w=p(),Cp=s("p"),Fw=o("Finally, this model supports inherent JAX features such as:"),xw=p(),so=s("ul"),jp=s("li"),_i=s("a"),Lw=o("Just-In-Time (JIT) compilation"),Rw=p(),Pp=s("li"),bi=s("a"),Ew=o("Automatic Differentiation"),zw=p(),Ap=s("li"),ki=s("a"),qw=o("Vectorization"),Xw=p(),Op=s("li"),yi=s("a"),Cw=o("Parallelization"),jw=p(),vi=s("p"),Pw=o("This class overrides "),Fd=s("a"),Aw=o("FlaxRobertaModel"),Ow=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Nw=p(),Gt=s("div"),v(Ti.$$.fragment),Iw=p(),dn=s("p"),Dw=o("The "),Np=s("code"),Sw=o("FlaxRobertaPreTrainedModel"),Bw=o(" forward method, overrides the "),Ip=s("code"),Ww=o("__call__"),Uw=o(" special method."),Qw=p(),v(Cs.$$.fragment),Hw=p(),v(js.$$.fragment),Gm=p(),cn=s("h2"),Ps=s("a"),Dp=s("span"),v(wi.$$.fragment),Kw=p(),Sp=s("span"),Vw=o("FlaxXLMRobertaForMaskedLM"),Ym=p(),ht=s("div"),v(Mi.$$.fragment),Jw=p(),pn=s("p"),Gw=o("XLM-RoBERTa Model with a "),Bp=s("code"),Yw=o("language modeling"),Zw=o(` head on top.
This model inherits from `),xd=s("a"),eM=o("FlaxPreTrainedModel"),tM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oM=p(),$i=s("p"),nM=o("This model is also a Flax Linen "),Fi=s("a"),sM=o("flax.linen.Module"),aM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rM=p(),Wp=s("p"),iM=o("Finally, this model supports inherent JAX features such as:"),lM=p(),ao=s("ul"),Up=s("li"),xi=s("a"),dM=o("Just-In-Time (JIT) compilation"),cM=p(),Qp=s("li"),Li=s("a"),pM=o("Automatic Differentiation"),hM=p(),Hp=s("li"),Ri=s("a"),mM=o("Vectorization"),uM=p(),Kp=s("li"),Ei=s("a"),fM=o("Parallelization"),gM=p(),zi=s("p"),_M=o("This class overrides "),Ld=s("a"),bM=o("FlaxRobertaForMaskedLM"),kM=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yM=p(),Yt=s("div"),v(qi.$$.fragment),vM=p(),hn=s("p"),TM=o("The "),Vp=s("code"),wM=o("FlaxRobertaPreTrainedModel"),MM=o(" forward method, overrides the "),Jp=s("code"),$M=o("__call__"),FM=o(" special method."),xM=p(),v(As.$$.fragment),LM=p(),v(Os.$$.fragment),Zm=p(),mn=s("h2"),Ns=s("a"),Gp=s("span"),v(Xi.$$.fragment),RM=p(),Yp=s("span"),EM=o("FlaxXLMRobertaForSequenceClassification"),eu=p(),et=s("div"),v(Ci.$$.fragment),zM=p(),Zp=s("p"),qM=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),XM=p(),ji=s("p"),CM=o("This model inherits from "),Rd=s("a"),jM=o("FlaxPreTrainedModel"),PM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),AM=p(),Pi=s("p"),OM=o("This model is also a Flax Linen "),Ai=s("a"),NM=o("flax.linen.Module"),IM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),DM=p(),eh=s("p"),SM=o("Finally, this model supports inherent JAX features such as:"),BM=p(),ro=s("ul"),th=s("li"),Oi=s("a"),WM=o("Just-In-Time (JIT) compilation"),UM=p(),oh=s("li"),Ni=s("a"),QM=o("Automatic Differentiation"),HM=p(),nh=s("li"),Ii=s("a"),KM=o("Vectorization"),VM=p(),sh=s("li"),Di=s("a"),JM=o("Parallelization"),GM=p(),Si=s("p"),YM=o("This class overrides "),Ed=s("a"),ZM=o("FlaxRobertaForSequenceClassification"),e$=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),t$=p(),Zt=s("div"),v(Bi.$$.fragment),o$=p(),un=s("p"),n$=o("The "),ah=s("code"),s$=o("FlaxRobertaPreTrainedModel"),a$=o(" forward method, overrides the "),rh=s("code"),r$=o("__call__"),i$=o(" special method."),l$=p(),v(Is.$$.fragment),d$=p(),v(Ds.$$.fragment),tu=p(),fn=s("h2"),Ss=s("a"),ih=s("span"),v(Wi.$$.fragment),c$=p(),lh=s("span"),p$=o("FlaxXLMRobertaForMultipleChoice"),ou=p(),tt=s("div"),v(Ui.$$.fragment),h$=p(),dh=s("p"),m$=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),u$=p(),Qi=s("p"),f$=o("This model inherits from "),zd=s("a"),g$=o("FlaxPreTrainedModel"),_$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),b$=p(),Hi=s("p"),k$=o("This model is also a Flax Linen "),Ki=s("a"),y$=o("flax.linen.Module"),v$=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),T$=p(),ch=s("p"),w$=o("Finally, this model supports inherent JAX features such as:"),M$=p(),io=s("ul"),ph=s("li"),Vi=s("a"),$$=o("Just-In-Time (JIT) compilation"),F$=p(),hh=s("li"),Ji=s("a"),x$=o("Automatic Differentiation"),L$=p(),mh=s("li"),Gi=s("a"),R$=o("Vectorization"),E$=p(),uh=s("li"),Yi=s("a"),z$=o("Parallelization"),q$=p(),Zi=s("p"),X$=o("This class overrides "),qd=s("a"),C$=o("FlaxRobertaForMultipleChoice"),j$=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),P$=p(),eo=s("div"),v(el.$$.fragment),A$=p(),gn=s("p"),O$=o("The "),fh=s("code"),N$=o("FlaxRobertaPreTrainedModel"),I$=o(" forward method, overrides the "),gh=s("code"),D$=o("__call__"),S$=o(" special method."),B$=p(),v(Bs.$$.fragment),W$=p(),v(Ws.$$.fragment),nu=p(),_n=s("h2"),Us=s("a"),_h=s("span"),v(tl.$$.fragment),U$=p(),bh=s("span"),Q$=o("FlaxXLMRobertaForTokenClassification"),su=p(),ot=s("div"),v(ol.$$.fragment),H$=p(),kh=s("p"),K$=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),V$=p(),nl=s("p"),J$=o("This model inherits from "),Xd=s("a"),G$=o("FlaxPreTrainedModel"),Y$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Z$=p(),sl=s("p"),e1=o("This model is also a Flax Linen "),al=s("a"),t1=o("flax.linen.Module"),o1=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),n1=p(),yh=s("p"),s1=o("Finally, this model supports inherent JAX features such as:"),a1=p(),lo=s("ul"),vh=s("li"),rl=s("a"),r1=o("Just-In-Time (JIT) compilation"),i1=p(),Th=s("li"),il=s("a"),l1=o("Automatic Differentiation"),d1=p(),wh=s("li"),ll=s("a"),c1=o("Vectorization"),p1=p(),Mh=s("li"),dl=s("a"),h1=o("Parallelization"),m1=p(),cl=s("p"),u1=o("This class overrides "),Cd=s("a"),f1=o("FlaxRobertaForTokenClassification"),g1=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),_1=p(),to=s("div"),v(pl.$$.fragment),b1=p(),bn=s("p"),k1=o("The "),$h=s("code"),y1=o("FlaxRobertaPreTrainedModel"),v1=o(" forward method, overrides the "),Fh=s("code"),T1=o("__call__"),w1=o(" special method."),M1=p(),v(Qs.$$.fragment),$1=p(),v(Hs.$$.fragment),au=p(),kn=s("h2"),Ks=s("a"),xh=s("span"),v(hl.$$.fragment),F1=p(),Lh=s("span"),x1=o("FlaxXLMRobertaForQuestionAnswering"),ru=p(),nt=s("div"),v(ml.$$.fragment),L1=p(),yn=s("p"),R1=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rh=s("code"),E1=o("span start logits"),z1=o(" and "),Eh=s("code"),q1=o("span end logits"),X1=o(")."),C1=p(),ul=s("p"),j1=o("This model inherits from "),jd=s("a"),P1=o("FlaxPreTrainedModel"),A1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),O1=p(),fl=s("p"),N1=o("This model is also a Flax Linen "),gl=s("a"),I1=o("flax.linen.Module"),D1=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),S1=p(),zh=s("p"),B1=o("Finally, this model supports inherent JAX features such as:"),W1=p(),co=s("ul"),qh=s("li"),_l=s("a"),U1=o("Just-In-Time (JIT) compilation"),Q1=p(),Xh=s("li"),bl=s("a"),H1=o("Automatic Differentiation"),K1=p(),Ch=s("li"),kl=s("a"),V1=o("Vectorization"),J1=p(),jh=s("li"),yl=s("a"),G1=o("Parallelization"),Y1=p(),vl=s("p"),Z1=o("This class overrides "),Pd=s("a"),e2=o("FlaxRobertaForQuestionAnswering"),t2=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),o2=p(),oo=s("div"),v(Tl.$$.fragment),n2=p(),vn=s("p"),s2=o("The "),Ph=s("code"),a2=o("FlaxRobertaPreTrainedModel"),r2=o(" forward method, overrides the "),Ah=s("code"),i2=o("__call__"),l2=o(" special method."),d2=p(),v(Vs.$$.fragment),c2=p(),v(Js.$$.fragment),this.h()},l(i){const b=BL('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(i),c=a(i,"H1",{class:!0});var wl=r(c);f=a(wl,"A",{id:!0,class:!0,href:!0});var Oh=r(f);k=a(Oh,"SPAN",{});var Nh=r(k);T(l.$$.fragment,Nh),Nh.forEach(t),Oh.forEach(t),m=h(wl),R=a(wl,"SPAN",{});var Ih=r(R);Me=n(Ih,"XLM-RoBERTa"),Ih.forEach(t),wl.forEach(t),be=h(i),O=a(i,"H2",{class:!0});var Ml=r(O);re=a(Ml,"A",{id:!0,class:!0,href:!0});var Dh=r(re);te=a(Dh,"SPAN",{});var Sh=r(te);T(L.$$.fragment,Sh),Sh.forEach(t),Dh.forEach(t),$e=h(Ml),U=a(Ml,"SPAN",{});var Bh=r(U);Fe=n(Bh,"Overview"),Bh.forEach(t),Ml.forEach(t),ke=h(i),D=a(i,"P",{});var $l=r(D);xe=n($l,"The XLM-RoBERTa model was proposed in "),le=a($l,"A",{href:!0,rel:!0});var Wh=r(le);H=n(Wh,"Unsupervised Cross-lingual Representation Learning at Scale"),Wh.forEach(t),Le=n($l,` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),$l.forEach(t),ye=h(i),B=a(i,"P",{});var Uh=r(B);Re=n(Uh,"The abstract from the paper is the following:"),Uh.forEach(t),ve=h(i),W=a(i,"P",{});var Qh=r(W);ge=a(Qh,"EM",{});var Hh=r(ge);Ee=n(Hh,`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
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
as well as the information relative to the inputs and outputs.`),Ll.forEach(t),Fl.forEach(t),we=h(i),se=a(i,"P",{});var Tn=r(se);N=n(Tn,"This model was contributed by "),pe=a(Tn,"A",{href:!0,rel:!0});var Gh=r(pe);J=n(Gh,"stefan-it"),Gh.forEach(t),je=n(Tn,". The original code can be found "),ee=a(Tn,"A",{href:!0,rel:!0});var Yh=r(ee);j=n(Yh,"here"),Yh.forEach(t),Pe=n(Tn,"."),Tn.forEach(t),P=h(i),ae=a(i,"H2",{class:!0});var Rl=r(ae);ie=a(Rl,"A",{id:!0,class:!0,href:!0});var Zh=r(ie);y=a(Zh,"SPAN",{});var em=r(y);T(E.$$.fragment,em),em.forEach(t),Zh.forEach(t),Ue=h(Rl),oe=a(Rl,"SPAN",{});var tm=r(oe);Qe=n(tm,"XLMRobertaConfig"),tm.forEach(t),Rl.forEach(t),We=h(i),z=a(i,"DIV",{class:!0});var po=r(z);T(Oe.$$.fragment,po),He=h(po),_e=a(po,"P",{});var ho=r(_e);Ke=n(ho,"This is the configuration class to store the configuration of a "),De=a(ho,"A",{href:!0});var om=r(De);I=n(om,"XLMRobertaModel"),om.forEach(t),G=n(ho," or a "),Se=a(ho,"A",{href:!0});var nm=r(Se);Ve=n(nm,"TFXLMRobertaModel"),nm.forEach(t),Y=n(ho,`. It
is used to instantiate a XLM-RoBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the XLMRoBERTa
`),Ne=a(ho,"A",{href:!0,rel:!0});var sm=r(Ne);Je=n(sm,"xlm-roberta-base"),sm.forEach(t),Ae=n(ho," architecture."),ho.forEach(t),Ge=h(po),Z=a(po,"P",{});var wn=r(Z);Ye=n(wn,"Configuration objects inherit from "),jl=a(wn,"A",{href:!0});var am=r(jl);qf=n(am,"PretrainedConfig"),am.forEach(t),Xf=n(wn,` and can be used to control the model outputs. Read the
documentation from `),Pl=a(wn,"A",{href:!0});var rm=r(Pl);Cf=n(rm,"PretrainedConfig"),rm.forEach(t),jf=n(wn," for more information."),wn.forEach(t),Pf=h(po),T($n.$$.fragment,po),po.forEach(t),km=h(i),zo=a(i,"H2",{class:!0});var El=r(zo);Fn=a(El,"A",{id:!0,class:!0,href:!0});var im=r(Fn);dc=a(im,"SPAN",{});var lm=r(dc);T(ua.$$.fragment,lm),lm.forEach(t),im.forEach(t),Af=h(El),cc=a(El,"SPAN",{});var dm=r(cc);Of=n(dm,"XLMRobertaTokenizer"),dm.forEach(t),El.forEach(t),ym=h(i),st=a(i,"DIV",{class:!0});var ft=r(st);T(fa.$$.fragment,ft),Nf=h(ft),no=a(ft,"P",{});var mo=r(no);If=n(mo,"Adapted from "),Al=a(mo,"A",{href:!0});var cm=r(Al);Df=n(cm,"RobertaTokenizer"),cm.forEach(t),Sf=n(mo," and "),Ol=a(mo,"A",{href:!0});var pm=r(Ol);Bf=n(pm,"XLNetTokenizer"),pm.forEach(t),Wf=n(mo,`. Based on
`),ga=a(mo,"A",{href:!0,rel:!0});var hm=r(ga);Uf=n(hm,"SentencePiece"),hm.forEach(t),Qf=n(mo,"."),mo.forEach(t),Hf=h(ft),_a=a(ft,"P",{});var zl=r(_a);Kf=n(zl,"This tokenizer inherits from "),Nl=a(zl,"A",{href:!0});var mm=r(Nl);Vf=n(mm,"PreTrainedTokenizer"),mm.forEach(t),Jf=n(zl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),zl.forEach(t),Gf=h(ft),uo=a(ft,"DIV",{class:!0});var Mn=r(uo);T(ba.$$.fragment,Mn),Yf=h(Mn),pc=a(Mn,"P",{});var um=r(pc);Zf=n(um,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),um.forEach(t),eg=h(Mn),ka=a(Mn,"UL",{});var ql=r(ka);Il=a(ql,"LI",{});var Ad=r(Il);tg=n(Ad,"single sequence: "),hc=a(Ad,"CODE",{});var fm=r(hc);og=n(fm,"<s> X </s>"),fm.forEach(t),Ad.forEach(t),ng=h(ql),Dl=a(ql,"LI",{});var Od=r(Dl);sg=n(Od,"pair of sequences: "),mc=a(Od,"CODE",{});var gm=r(mc);ag=n(gm,"<s> A </s></s> B </s>"),gm.forEach(t),Od.forEach(t),ql.forEach(t),Mn.forEach(t),rg=h(ft),xn=a(ft,"DIV",{class:!0});var Xl=r(xn);T(ya.$$.fragment,Xl),ig=h(Xl),va=a(Xl,"P",{});var Cl=r(va);lg=n(Cl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),uc=a(Cl,"CODE",{});var _m=r(uc);dg=n(_m,"prepare_for_model"),_m.forEach(t),cg=n(Cl," method."),Cl.forEach(t),Xl.forEach(t),pg=h(ft),Ln=a(ft,"DIV",{class:!0});var lu=r(Ln);T(Ta.$$.fragment,lu),hg=h(lu),fc=a(lu,"P",{});var m2=r(fc);mg=n(m2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),m2.forEach(t),lu.forEach(t),ug=h(ft),Sl=a(ft,"DIV",{class:!0});var u2=r(Sl);T(wa.$$.fragment,u2),u2.forEach(t),ft.forEach(t),vm=h(i),qo=a(i,"H2",{class:!0});var du=r(qo);Rn=a(du,"A",{id:!0,class:!0,href:!0});var f2=r(Rn);gc=a(f2,"SPAN",{});var g2=r(gc);T(Ma.$$.fragment,g2),g2.forEach(t),f2.forEach(t),fg=h(du),_c=a(du,"SPAN",{});var _2=r(_c);gg=n(_2,"XLMRobertaTokenizerFast"),_2.forEach(t),du.forEach(t),Tm=h(i),vt=a(i,"DIV",{class:!0});var go=r(vt);T($a.$$.fragment,go),_g=h(go),Ut=a(go,"P",{});var _o=r(Ut);bg=n(_o,"Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),bc=a(_o,"EM",{});var b2=r(bc);kg=n(b2,"tokenizers"),b2.forEach(t),yg=n(_o,` library). Adapted from
`),Bl=a(_o,"A",{href:!0});var k2=r(Bl);vg=n(k2,"RobertaTokenizer"),k2.forEach(t),Tg=n(_o," and "),Wl=a(_o,"A",{href:!0});var y2=r(Wl);wg=n(y2,"XLNetTokenizer"),y2.forEach(t),Mg=n(_o,`. Based on
`),Fa=a(_o,"A",{href:!0,rel:!0});var v2=r(Fa);$g=n(v2,"BPE"),v2.forEach(t),Fg=n(_o,"."),_o.forEach(t),xg=h(go),xa=a(go,"P",{});var cu=r(xa);Lg=n(cu,"This tokenizer inherits from "),Ul=a(cu,"A",{href:!0});var T2=r(Ul);Rg=n(T2,"PreTrainedTokenizerFast"),T2.forEach(t),Eg=n(cu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cu.forEach(t),zg=h(go),fo=a(go,"DIV",{class:!0});var Nd=r(fo);T(La.$$.fragment,Nd),qg=h(Nd),kc=a(Nd,"P",{});var w2=r(kc);Xg=n(w2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),w2.forEach(t),Cg=h(Nd),Ra=a(Nd,"UL",{});var pu=r(Ra);Ql=a(pu,"LI",{});var p2=r(Ql);jg=n(p2,"single sequence: "),yc=a(p2,"CODE",{});var M2=r(yc);Pg=n(M2,"<s> X </s>"),M2.forEach(t),p2.forEach(t),Ag=h(pu),Hl=a(pu,"LI",{});var h2=r(Hl);Og=n(h2,"pair of sequences: "),vc=a(h2,"CODE",{});var $2=r(vc);Ng=n($2,"<s> A </s></s> B </s>"),$2.forEach(t),h2.forEach(t),pu.forEach(t),Nd.forEach(t),Ig=h(go),En=a(go,"DIV",{class:!0});var hu=r(En);T(Ea.$$.fragment,hu),Dg=h(hu),Tc=a(hu,"P",{});var F2=r(Tc);Sg=n(F2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),F2.forEach(t),hu.forEach(t),go.forEach(t),wm=h(i),Xo=a(i,"H2",{class:!0});var mu=r(Xo);zn=a(mu,"A",{id:!0,class:!0,href:!0});var x2=r(zn);wc=a(x2,"SPAN",{});var L2=r(wc);T(za.$$.fragment,L2),L2.forEach(t),x2.forEach(t),Bg=h(mu),Mc=a(mu,"SPAN",{});var R2=r(Mc);Wg=n(R2,"XLMRobertaModel"),R2.forEach(t),mu.forEach(t),Mm=h(i),Ze=a(i,"DIV",{class:!0});var gt=r(Ze);T(qa.$$.fragment,gt),Ug=h(gt),$c=a(gt,"P",{});var E2=r($c);Qg=n(E2,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),E2.forEach(t),Hg=h(gt),Xa=a(gt,"P",{});var uu=r(Xa);Kg=n(uu,"This model inherits from "),Kl=a(uu,"A",{href:!0});var z2=r(Kl);Vg=n(z2,"PreTrainedModel"),z2.forEach(t),Jg=n(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),Gg=h(gt),Ca=a(gt,"P",{});var fu=r(Ca);Yg=n(fu,"This model is also a PyTorch "),ja=a(fu,"A",{href:!0,rel:!0});var q2=r(ja);Zg=n(q2,"torch.nn.Module"),q2.forEach(t),e_=n(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),t_=h(gt),Pa=a(gt,"P",{});var gu=r(Pa);o_=n(gu,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Fc=a(gu,"EM",{});var X2=r(Fc);n_=n(X2,`Attention is
all you need`),X2.forEach(t),s_=n(gu,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),gu.forEach(t),a_=h(gt),ut=a(gt,"P",{});var jt=r(ut);r_=n(jt,"To behave as an decoder the model needs to be initialized with the "),xc=a(jt,"CODE",{});var C2=r(xc);i_=n(C2,"is_decoder"),C2.forEach(t),l_=n(jt,` argument of the configuration set
to `),Lc=a(jt,"CODE",{});var j2=r(Lc);d_=n(j2,"True"),j2.forEach(t),c_=n(jt,". To be used in a Seq2Seq model, the model needs to initialized with both "),Rc=a(jt,"CODE",{});var P2=r(Rc);p_=n(P2,"is_decoder"),P2.forEach(t),h_=n(jt,` argument and
`),Ec=a(jt,"CODE",{});var A2=r(Ec);m_=n(A2,"add_cross_attention"),A2.forEach(t),u_=n(jt," set to "),zc=a(jt,"CODE",{});var O2=r(zc);f_=n(O2,"True"),O2.forEach(t),g_=n(jt,"; an "),qc=a(jt,"CODE",{});var N2=r(qc);__=n(N2,"encoder_hidden_states"),N2.forEach(t),b_=n(jt," is then expected as an input to the forward pass."),jt.forEach(t),k_=h(gt),qn=a(gt,"P",{});var bm=r(qn);y_=n(bm,".. _"),Xc=a(bm,"EM",{});var I2=r(Xc);v_=n(I2,"Attention is all you need"),I2.forEach(t),T_=n(bm,": "),Aa=a(bm,"A",{href:!0,rel:!0});var D2=r(Aa);w_=n(D2,"https://arxiv.org/abs/1706.03762"),D2.forEach(t),bm.forEach(t),M_=h(gt),Qt=a(gt,"DIV",{class:!0});var Gs=r(Qt);T(Oa.$$.fragment,Gs),$_=h(Gs),Co=a(Gs,"P",{});var Id=r(Co);F_=n(Id,"The "),Vl=a(Id,"A",{href:!0});var S2=r(Vl);x_=n(S2,"XLMRobertaModel"),S2.forEach(t),L_=n(Id," forward method, overrides the "),Cc=a(Id,"CODE",{});var B2=r(Cc);R_=n(B2,"__call__"),B2.forEach(t),E_=n(Id," special method."),Id.forEach(t),z_=h(Gs),T(Xn.$$.fragment,Gs),q_=h(Gs),T(Cn.$$.fragment,Gs),Gs.forEach(t),gt.forEach(t),$m=h(i),jo=a(i,"H2",{class:!0});var _u=r(jo);jn=a(_u,"A",{id:!0,class:!0,href:!0});var W2=r(jn);jc=a(W2,"SPAN",{});var U2=r(jc);T(Na.$$.fragment,U2),U2.forEach(t),W2.forEach(t),X_=h(_u),Pc=a(_u,"SPAN",{});var Q2=r(Pc);C_=n(Q2,"XLMRobertaForCausalLM"),Q2.forEach(t),_u.forEach(t),Fm=h(i),Tt=a(i,"DIV",{class:!0});var bo=r(Tt);T(Ia.$$.fragment,bo),j_=h(bo),Da=a(bo,"P",{});var bu=r(Da);P_=n(bu,"XLM-RoBERTa Model with a "),Ac=a(bu,"CODE",{});var H2=r(Ac);A_=n(H2,"language modeling"),H2.forEach(t),O_=n(bu," head on top for CLM fine-tuning."),bu.forEach(t),N_=h(bo),Sa=a(bo,"P",{});var ku=r(Sa);I_=n(ku,"This model inherits from "),Jl=a(ku,"A",{href:!0});var K2=r(Jl);D_=n(K2,"PreTrainedModel"),K2.forEach(t),S_=n(ku,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku.forEach(t),B_=h(bo),Ba=a(bo,"P",{});var yu=r(Ba);W_=n(yu,"This model is also a PyTorch "),Wa=a(yu,"A",{href:!0,rel:!0});var V2=r(Wa);U_=n(V2,"torch.nn.Module"),V2.forEach(t),Q_=n(yu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yu.forEach(t),H_=h(bo),Ht=a(bo,"DIV",{class:!0});var Ys=r(Ht);T(Ua.$$.fragment,Ys),K_=h(Ys),Po=a(Ys,"P",{});var Dd=r(Po);V_=n(Dd,"The "),Gl=a(Dd,"A",{href:!0});var J2=r(Gl);J_=n(J2,"XLMRobertaForCausalLM"),J2.forEach(t),G_=n(Dd," forward method, overrides the "),Oc=a(Dd,"CODE",{});var G2=r(Oc);Y_=n(G2,"__call__"),G2.forEach(t),Z_=n(Dd," special method."),Dd.forEach(t),eb=h(Ys),T(Pn.$$.fragment,Ys),tb=h(Ys),T(An.$$.fragment,Ys),Ys.forEach(t),bo.forEach(t),xm=h(i),Ao=a(i,"H2",{class:!0});var vu=r(Ao);On=a(vu,"A",{id:!0,class:!0,href:!0});var Y2=r(On);Nc=a(Y2,"SPAN",{});var Z2=r(Nc);T(Qa.$$.fragment,Z2),Z2.forEach(t),Y2.forEach(t),ob=h(vu),Ic=a(vu,"SPAN",{});var eF=r(Ic);nb=n(eF,"XLMRobertaForMaskedLM"),eF.forEach(t),vu.forEach(t),Lm=h(i),wt=a(i,"DIV",{class:!0});var ko=r(wt);T(Ha.$$.fragment,ko),sb=h(ko),Ka=a(ko,"P",{});var Tu=r(Ka);ab=n(Tu,"XLM-RoBERTa Model with a "),Dc=a(Tu,"CODE",{});var tF=r(Dc);rb=n(tF,"language modeling"),tF.forEach(t),ib=n(Tu," head on top."),Tu.forEach(t),lb=h(ko),Va=a(ko,"P",{});var wu=r(Va);db=n(wu,"This model inherits from "),Yl=a(wu,"A",{href:!0});var oF=r(Yl);cb=n(oF,"PreTrainedModel"),oF.forEach(t),pb=n(wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu.forEach(t),hb=h(ko),Ja=a(ko,"P",{});var Mu=r(Ja);mb=n(Mu,"This model is also a PyTorch "),Ga=a(Mu,"A",{href:!0,rel:!0});var nF=r(Ga);ub=n(nF,"torch.nn.Module"),nF.forEach(t),fb=n(Mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mu.forEach(t),gb=h(ko),Lt=a(ko,"DIV",{class:!0});var yo=r(Lt);T(Ya.$$.fragment,yo),_b=h(yo),Oo=a(yo,"P",{});var Sd=r(Oo);bb=n(Sd,"The "),Zl=a(Sd,"A",{href:!0});var sF=r(Zl);kb=n(sF,"XLMRobertaForMaskedLM"),sF.forEach(t),yb=n(Sd," forward method, overrides the "),Sc=a(Sd,"CODE",{});var aF=r(Sc);vb=n(aF,"__call__"),aF.forEach(t),Tb=n(Sd," special method."),Sd.forEach(t),wb=h(yo),T(Nn.$$.fragment,yo),Mb=h(yo),T(In.$$.fragment,yo),$b=h(yo),T(Dn.$$.fragment,yo),yo.forEach(t),ko.forEach(t),Rm=h(i),No=a(i,"H2",{class:!0});var $u=r(No);Sn=a($u,"A",{id:!0,class:!0,href:!0});var rF=r(Sn);Bc=a(rF,"SPAN",{});var iF=r(Bc);T(Za.$$.fragment,iF),iF.forEach(t),rF.forEach(t),Fb=h($u),Wc=a($u,"SPAN",{});var lF=r(Wc);xb=n(lF,"XLMRobertaForSequenceClassification"),lF.forEach(t),$u.forEach(t),Em=h(i),Mt=a(i,"DIV",{class:!0});var vo=r(Mt);T(er.$$.fragment,vo),Lb=h(vo),Uc=a(vo,"P",{});var dF=r(Uc);Rb=n(dF,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),dF.forEach(t),Eb=h(vo),tr=a(vo,"P",{});var Fu=r(tr);zb=n(Fu,"This model inherits from "),ed=a(Fu,"A",{href:!0});var cF=r(ed);qb=n(cF,"PreTrainedModel"),cF.forEach(t),Xb=n(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),Cb=h(vo),or=a(vo,"P",{});var xu=r(or);jb=n(xu,"This model is also a PyTorch "),nr=a(xu,"A",{href:!0,rel:!0});var pF=r(nr);Pb=n(pF,"torch.nn.Module"),pF.forEach(t),Ab=n(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),Ob=h(vo),mt=a(vo,"DIV",{class:!0});var Pt=r(mt);T(sr.$$.fragment,Pt),Nb=h(Pt),Io=a(Pt,"P",{});var Bd=r(Io);Ib=n(Bd,"The "),td=a(Bd,"A",{href:!0});var hF=r(td);Db=n(hF,"XLMRobertaForSequenceClassification"),hF.forEach(t),Sb=n(Bd," forward method, overrides the "),Qc=a(Bd,"CODE",{});var mF=r(Qc);Bb=n(mF,"__call__"),mF.forEach(t),Wb=n(Bd," special method."),Bd.forEach(t),Ub=h(Pt),T(Bn.$$.fragment,Pt),Qb=h(Pt),T(Wn.$$.fragment,Pt),Hb=h(Pt),T(Un.$$.fragment,Pt),Kb=h(Pt),T(Qn.$$.fragment,Pt),Vb=h(Pt),T(Hn.$$.fragment,Pt),Pt.forEach(t),vo.forEach(t),zm=h(i),Do=a(i,"H2",{class:!0});var Lu=r(Do);Kn=a(Lu,"A",{id:!0,class:!0,href:!0});var uF=r(Kn);Hc=a(uF,"SPAN",{});var fF=r(Hc);T(ar.$$.fragment,fF),fF.forEach(t),uF.forEach(t),Jb=h(Lu),Kc=a(Lu,"SPAN",{});var gF=r(Kc);Gb=n(gF,"XLMRobertaForMultipleChoice"),gF.forEach(t),Lu.forEach(t),qm=h(i),$t=a(i,"DIV",{class:!0});var To=r($t);T(rr.$$.fragment,To),Yb=h(To),Vc=a(To,"P",{});var _F=r(Vc);Zb=n(_F,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_F.forEach(t),ek=h(To),ir=a(To,"P",{});var Ru=r(ir);tk=n(Ru,"This model inherits from "),od=a(Ru,"A",{href:!0});var bF=r(od);ok=n(bF,"PreTrainedModel"),bF.forEach(t),nk=n(Ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru.forEach(t),sk=h(To),lr=a(To,"P",{});var Eu=r(lr);ak=n(Eu,"This model is also a PyTorch "),dr=a(Eu,"A",{href:!0,rel:!0});var kF=r(dr);rk=n(kF,"torch.nn.Module"),kF.forEach(t),ik=n(Eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Eu.forEach(t),lk=h(To),Kt=a(To,"DIV",{class:!0});var Zs=r(Kt);T(cr.$$.fragment,Zs),dk=h(Zs),So=a(Zs,"P",{});var Wd=r(So);ck=n(Wd,"The "),nd=a(Wd,"A",{href:!0});var yF=r(nd);pk=n(yF,"XLMRobertaForMultipleChoice"),yF.forEach(t),hk=n(Wd," forward method, overrides the "),Jc=a(Wd,"CODE",{});var vF=r(Jc);mk=n(vF,"__call__"),vF.forEach(t),uk=n(Wd," special method."),Wd.forEach(t),fk=h(Zs),T(Vn.$$.fragment,Zs),gk=h(Zs),T(Jn.$$.fragment,Zs),Zs.forEach(t),To.forEach(t),Xm=h(i),Bo=a(i,"H2",{class:!0});var zu=r(Bo);Gn=a(zu,"A",{id:!0,class:!0,href:!0});var TF=r(Gn);Gc=a(TF,"SPAN",{});var wF=r(Gc);T(pr.$$.fragment,wF),wF.forEach(t),TF.forEach(t),_k=h(zu),Yc=a(zu,"SPAN",{});var MF=r(Yc);bk=n(MF,"XLMRobertaForTokenClassification"),MF.forEach(t),zu.forEach(t),Cm=h(i),Ft=a(i,"DIV",{class:!0});var wo=r(Ft);T(hr.$$.fragment,wo),kk=h(wo),Zc=a(wo,"P",{});var $F=r(Zc);yk=n($F,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),$F.forEach(t),vk=h(wo),mr=a(wo,"P",{});var qu=r(mr);Tk=n(qu,"This model inherits from "),sd=a(qu,"A",{href:!0});var FF=r(sd);wk=n(FF,"PreTrainedModel"),FF.forEach(t),Mk=n(qu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu.forEach(t),$k=h(wo),ur=a(wo,"P",{});var Xu=r(ur);Fk=n(Xu,"This model is also a PyTorch "),fr=a(Xu,"A",{href:!0,rel:!0});var xF=r(fr);xk=n(xF,"torch.nn.Module"),xF.forEach(t),Lk=n(Xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xu.forEach(t),Rk=h(wo),Rt=a(wo,"DIV",{class:!0});var Mo=r(Rt);T(gr.$$.fragment,Mo),Ek=h(Mo),Wo=a(Mo,"P",{});var Ud=r(Wo);zk=n(Ud,"The "),ad=a(Ud,"A",{href:!0});var LF=r(ad);qk=n(LF,"XLMRobertaForTokenClassification"),LF.forEach(t),Xk=n(Ud," forward method, overrides the "),ep=a(Ud,"CODE",{});var RF=r(ep);Ck=n(RF,"__call__"),RF.forEach(t),jk=n(Ud," special method."),Ud.forEach(t),Pk=h(Mo),T(Yn.$$.fragment,Mo),Ak=h(Mo),T(Zn.$$.fragment,Mo),Ok=h(Mo),T(es.$$.fragment,Mo),Mo.forEach(t),wo.forEach(t),jm=h(i),Uo=a(i,"H2",{class:!0});var Cu=r(Uo);ts=a(Cu,"A",{id:!0,class:!0,href:!0});var EF=r(ts);tp=a(EF,"SPAN",{});var zF=r(tp);T(_r.$$.fragment,zF),zF.forEach(t),EF.forEach(t),Nk=h(Cu),op=a(Cu,"SPAN",{});var qF=r(op);Ik=n(qF,"XLMRobertaForQuestionAnswering"),qF.forEach(t),Cu.forEach(t),Pm=h(i),xt=a(i,"DIV",{class:!0});var $o=r(xt);T(br.$$.fragment,$o),Dk=h($o),Qo=a($o,"P",{});var Qd=r(Qo);Sk=n(Qd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),np=a(Qd,"CODE",{});var XF=r(np);Bk=n(XF,"span start logits"),XF.forEach(t),Wk=n(Qd," and "),sp=a(Qd,"CODE",{});var CF=r(sp);Uk=n(CF,"span end logits"),CF.forEach(t),Qk=n(Qd,")."),Qd.forEach(t),Hk=h($o),kr=a($o,"P",{});var ju=r(kr);Kk=n(ju,"This model inherits from "),rd=a(ju,"A",{href:!0});var jF=r(rd);Vk=n(jF,"PreTrainedModel"),jF.forEach(t),Jk=n(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),Gk=h($o),yr=a($o,"P",{});var Pu=r(yr);Yk=n(Pu,"This model is also a PyTorch "),vr=a(Pu,"A",{href:!0,rel:!0});var PF=r(vr);Zk=n(PF,"torch.nn.Module"),PF.forEach(t),ey=n(Pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pu.forEach(t),ty=h($o),Et=a($o,"DIV",{class:!0});var Fo=r(Et);T(Tr.$$.fragment,Fo),oy=h(Fo),Ho=a(Fo,"P",{});var Hd=r(Ho);ny=n(Hd,"The "),id=a(Hd,"A",{href:!0});var AF=r(id);sy=n(AF,"XLMRobertaForQuestionAnswering"),AF.forEach(t),ay=n(Hd," forward method, overrides the "),ap=a(Hd,"CODE",{});var OF=r(ap);ry=n(OF,"__call__"),OF.forEach(t),iy=n(Hd," special method."),Hd.forEach(t),ly=h(Fo),T(os.$$.fragment,Fo),dy=h(Fo),T(ns.$$.fragment,Fo),cy=h(Fo),T(ss.$$.fragment,Fo),Fo.forEach(t),$o.forEach(t),Am=h(i),Ko=a(i,"H2",{class:!0});var Au=r(Ko);as=a(Au,"A",{id:!0,class:!0,href:!0});var NF=r(as);rp=a(NF,"SPAN",{});var IF=r(rp);T(wr.$$.fragment,IF),IF.forEach(t),NF.forEach(t),py=h(Au),ip=a(Au,"SPAN",{});var DF=r(ip);hy=n(DF,"TFXLMRobertaModel"),DF.forEach(t),Au.forEach(t),Om=h(i),at=a(i,"DIV",{class:!0});var At=r(at);T(Mr.$$.fragment,At),my=h(At),lp=a(At,"P",{});var SF=r(lp);uy=n(SF,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),SF.forEach(t),fy=h(At),$r=a(At,"P",{});var Ou=r($r);gy=n(Ou,"This model inherits from "),ld=a(Ou,"A",{href:!0});var BF=r(ld);_y=n(BF,"TFPreTrainedModel"),BF.forEach(t),by=n(Ou,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou.forEach(t),ky=h(At),Fr=a(At,"P",{});var Nu=r(Fr);yy=n(Nu,"This model is also a "),xr=a(Nu,"A",{href:!0,rel:!0});var WF=r(xr);vy=n(WF,"tf.keras.Model"),WF.forEach(t),Ty=n(Nu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu.forEach(t),wy=h(At),T(rs.$$.fragment,At),My=h(At),Lr=a(At,"P",{});var Iu=r(Lr);$y=n(Iu,"This class overrides "),dd=a(Iu,"A",{href:!0});var UF=r(dd);Fy=n(UF,"TFRobertaModel"),UF.forEach(t),xy=n(Iu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Iu.forEach(t),Ly=h(At),Vt=a(At,"DIV",{class:!0});var ea=r(Vt);T(Rr.$$.fragment,ea),Ry=h(ea),Vo=a(ea,"P",{});var Kd=r(Vo);Ey=n(Kd,"The "),cd=a(Kd,"A",{href:!0});var QF=r(cd);zy=n(QF,"TFRobertaModel"),QF.forEach(t),qy=n(Kd," forward method, overrides the "),dp=a(Kd,"CODE",{});var HF=r(dp);Xy=n(HF,"__call__"),HF.forEach(t),Cy=n(Kd," special method."),Kd.forEach(t),jy=h(ea),T(is.$$.fragment,ea),Py=h(ea),T(ls.$$.fragment,ea),ea.forEach(t),At.forEach(t),Nm=h(i),Jo=a(i,"H2",{class:!0});var Du=r(Jo);ds=a(Du,"A",{id:!0,class:!0,href:!0});var KF=r(ds);cp=a(KF,"SPAN",{});var VF=r(cp);T(Er.$$.fragment,VF),VF.forEach(t),KF.forEach(t),Ay=h(Du),pp=a(Du,"SPAN",{});var JF=r(pp);Oy=n(JF,"TFXLMRobertaForMaskedLM"),JF.forEach(t),Du.forEach(t),Im=h(i),rt=a(i,"DIV",{class:!0});var Ot=r(rt);T(zr.$$.fragment,Ot),Ny=h(Ot),qr=a(Ot,"P",{});var Su=r(qr);Iy=n(Su,"XLM-RoBERTa Model with a "),hp=a(Su,"CODE",{});var GF=r(hp);Dy=n(GF,"language modeling"),GF.forEach(t),Sy=n(Su," head on top."),Su.forEach(t),By=h(Ot),Xr=a(Ot,"P",{});var Bu=r(Xr);Wy=n(Bu,"This model inherits from "),pd=a(Bu,"A",{href:!0});var YF=r(pd);Uy=n(YF,"TFPreTrainedModel"),YF.forEach(t),Qy=n(Bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bu.forEach(t),Hy=h(Ot),Cr=a(Ot,"P",{});var Wu=r(Cr);Ky=n(Wu,"This model is also a "),jr=a(Wu,"A",{href:!0,rel:!0});var ZF=r(jr);Vy=n(ZF,"tf.keras.Model"),ZF.forEach(t),Jy=n(Wu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wu.forEach(t),Gy=h(Ot),T(cs.$$.fragment,Ot),Yy=h(Ot),Pr=a(Ot,"P",{});var Uu=r(Pr);Zy=n(Uu,"This class overrides "),hd=a(Uu,"A",{href:!0});var ex=r(hd);ev=n(ex,"TFRobertaForMaskedLM"),ex.forEach(t),tv=n(Uu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Uu.forEach(t),ov=h(Ot),zt=a(Ot,"DIV",{class:!0});var xo=r(zt);T(Ar.$$.fragment,xo),nv=h(xo),Go=a(xo,"P",{});var Vd=r(Go);sv=n(Vd,"The "),md=a(Vd,"A",{href:!0});var tx=r(md);av=n(tx,"TFRobertaForMaskedLM"),tx.forEach(t),rv=n(Vd," forward method, overrides the "),mp=a(Vd,"CODE",{});var ox=r(mp);iv=n(ox,"__call__"),ox.forEach(t),lv=n(Vd," special method."),Vd.forEach(t),dv=h(xo),T(ps.$$.fragment,xo),cv=h(xo),T(hs.$$.fragment,xo),pv=h(xo),T(ms.$$.fragment,xo),xo.forEach(t),Ot.forEach(t),Dm=h(i),Yo=a(i,"H2",{class:!0});var Qu=r(Yo);us=a(Qu,"A",{id:!0,class:!0,href:!0});var nx=r(us);up=a(nx,"SPAN",{});var sx=r(up);T(Or.$$.fragment,sx),sx.forEach(t),nx.forEach(t),hv=h(Qu),fp=a(Qu,"SPAN",{});var ax=r(fp);mv=n(ax,"TFXLMRobertaForSequenceClassification"),ax.forEach(t),Qu.forEach(t),Sm=h(i),it=a(i,"DIV",{class:!0});var Nt=r(it);T(Nr.$$.fragment,Nt),uv=h(Nt),gp=a(Nt,"P",{});var rx=r(gp);fv=n(rx,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rx.forEach(t),gv=h(Nt),Ir=a(Nt,"P",{});var Hu=r(Ir);_v=n(Hu,"This model inherits from "),ud=a(Hu,"A",{href:!0});var ix=r(ud);bv=n(ix,"TFPreTrainedModel"),ix.forEach(t),kv=n(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),yv=h(Nt),Dr=a(Nt,"P",{});var Ku=r(Dr);vv=n(Ku,"This model is also a "),Sr=a(Ku,"A",{href:!0,rel:!0});var lx=r(Sr);Tv=n(lx,"tf.keras.Model"),lx.forEach(t),wv=n(Ku,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ku.forEach(t),Mv=h(Nt),T(fs.$$.fragment,Nt),$v=h(Nt),Br=a(Nt,"P",{});var Vu=r(Br);Fv=n(Vu,"This class overrides "),fd=a(Vu,"A",{href:!0});var dx=r(fd);xv=n(dx,"TFRobertaForSequenceClassification"),dx.forEach(t),Lv=n(Vu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Vu.forEach(t),Rv=h(Nt),qt=a(Nt,"DIV",{class:!0});var Lo=r(qt);T(Wr.$$.fragment,Lo),Ev=h(Lo),Zo=a(Lo,"P",{});var Jd=r(Zo);zv=n(Jd,"The "),gd=a(Jd,"A",{href:!0});var cx=r(gd);qv=n(cx,"TFRobertaForSequenceClassification"),cx.forEach(t),Xv=n(Jd," forward method, overrides the "),_p=a(Jd,"CODE",{});var px=r(_p);Cv=n(px,"__call__"),px.forEach(t),jv=n(Jd," special method."),Jd.forEach(t),Pv=h(Lo),T(gs.$$.fragment,Lo),Av=h(Lo),T(_s.$$.fragment,Lo),Ov=h(Lo),T(bs.$$.fragment,Lo),Lo.forEach(t),Nt.forEach(t),Bm=h(i),en=a(i,"H2",{class:!0});var Ju=r(en);ks=a(Ju,"A",{id:!0,class:!0,href:!0});var hx=r(ks);bp=a(hx,"SPAN",{});var mx=r(bp);T(Ur.$$.fragment,mx),mx.forEach(t),hx.forEach(t),Nv=h(Ju),kp=a(Ju,"SPAN",{});var ux=r(kp);Iv=n(ux,"TFXLMRobertaForMultipleChoice"),ux.forEach(t),Ju.forEach(t),Wm=h(i),lt=a(i,"DIV",{class:!0});var It=r(lt);T(Qr.$$.fragment,It),Dv=h(It),yp=a(It,"P",{});var fx=r(yp);Sv=n(fx,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),fx.forEach(t),Bv=h(It),Hr=a(It,"P",{});var Gu=r(Hr);Wv=n(Gu,"This model inherits from "),_d=a(Gu,"A",{href:!0});var gx=r(_d);Uv=n(gx,"TFPreTrainedModel"),gx.forEach(t),Qv=n(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(t),Hv=h(It),Kr=a(It,"P",{});var Yu=r(Kr);Kv=n(Yu,"This model is also a "),Vr=a(Yu,"A",{href:!0,rel:!0});var _x=r(Vr);Vv=n(_x,"tf.keras.Model"),_x.forEach(t),Jv=n(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),Gv=h(It),T(ys.$$.fragment,It),Yv=h(It),Jr=a(It,"P",{});var Zu=r(Jr);Zv=n(Zu,"This class overrides "),bd=a(Zu,"A",{href:!0});var bx=r(bd);eT=n(bx,"TFRobertaForMultipleChoice"),bx.forEach(t),tT=n(Zu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Zu.forEach(t),oT=h(It),Jt=a(It,"DIV",{class:!0});var ta=r(Jt);T(Gr.$$.fragment,ta),nT=h(ta),tn=a(ta,"P",{});var Gd=r(tn);sT=n(Gd,"The "),kd=a(Gd,"A",{href:!0});var kx=r(kd);aT=n(kx,"TFRobertaForMultipleChoice"),kx.forEach(t),rT=n(Gd," forward method, overrides the "),vp=a(Gd,"CODE",{});var yx=r(vp);iT=n(yx,"__call__"),yx.forEach(t),lT=n(Gd," special method."),Gd.forEach(t),dT=h(ta),T(vs.$$.fragment,ta),cT=h(ta),T(Ts.$$.fragment,ta),ta.forEach(t),It.forEach(t),Um=h(i),on=a(i,"H2",{class:!0});var ef=r(on);ws=a(ef,"A",{id:!0,class:!0,href:!0});var vx=r(ws);Tp=a(vx,"SPAN",{});var Tx=r(Tp);T(Yr.$$.fragment,Tx),Tx.forEach(t),vx.forEach(t),pT=h(ef),wp=a(ef,"SPAN",{});var wx=r(wp);hT=n(wx,"TFXLMRobertaForTokenClassification"),wx.forEach(t),ef.forEach(t),Qm=h(i),dt=a(i,"DIV",{class:!0});var Dt=r(dt);T(Zr.$$.fragment,Dt),mT=h(Dt),Mp=a(Dt,"P",{});var Mx=r(Mp);uT=n(Mx,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Mx.forEach(t),fT=h(Dt),ei=a(Dt,"P",{});var tf=r(ei);gT=n(tf,"This model inherits from "),yd=a(tf,"A",{href:!0});var $x=r(yd);_T=n($x,"TFPreTrainedModel"),$x.forEach(t),bT=n(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),kT=h(Dt),ti=a(Dt,"P",{});var of=r(ti);yT=n(of,"This model is also a "),oi=a(of,"A",{href:!0,rel:!0});var Fx=r(oi);vT=n(Fx,"tf.keras.Model"),Fx.forEach(t),TT=n(of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),of.forEach(t),wT=h(Dt),T(Ms.$$.fragment,Dt),MT=h(Dt),ni=a(Dt,"P",{});var nf=r(ni);$T=n(nf,"This class overrides "),vd=a(nf,"A",{href:!0});var xx=r(vd);FT=n(xx,"TFRobertaForTokenClassification"),xx.forEach(t),xT=n(nf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),nf.forEach(t),LT=h(Dt),Xt=a(Dt,"DIV",{class:!0});var Ro=r(Xt);T(si.$$.fragment,Ro),RT=h(Ro),nn=a(Ro,"P",{});var Yd=r(nn);ET=n(Yd,"The "),Td=a(Yd,"A",{href:!0});var Lx=r(Td);zT=n(Lx,"TFRobertaForTokenClassification"),Lx.forEach(t),qT=n(Yd," forward method, overrides the "),$p=a(Yd,"CODE",{});var Rx=r($p);XT=n(Rx,"__call__"),Rx.forEach(t),CT=n(Yd," special method."),Yd.forEach(t),jT=h(Ro),T($s.$$.fragment,Ro),PT=h(Ro),T(Fs.$$.fragment,Ro),AT=h(Ro),T(xs.$$.fragment,Ro),Ro.forEach(t),Dt.forEach(t),Hm=h(i),sn=a(i,"H2",{class:!0});var sf=r(sn);Ls=a(sf,"A",{id:!0,class:!0,href:!0});var Ex=r(Ls);Fp=a(Ex,"SPAN",{});var zx=r(Fp);T(ai.$$.fragment,zx),zx.forEach(t),Ex.forEach(t),OT=h(sf),xp=a(sf,"SPAN",{});var qx=r(xp);NT=n(qx,"TFXLMRobertaForQuestionAnswering"),qx.forEach(t),sf.forEach(t),Km=h(i),ct=a(i,"DIV",{class:!0});var St=r(ct);T(ri.$$.fragment,St),IT=h(St),an=a(St,"P",{});var Zd=r(an);DT=n(Zd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Lp=a(Zd,"CODE",{});var Xx=r(Lp);ST=n(Xx,"span start logits"),Xx.forEach(t),BT=n(Zd," and "),Rp=a(Zd,"CODE",{});var Cx=r(Rp);WT=n(Cx,"span end logits"),Cx.forEach(t),UT=n(Zd,")."),Zd.forEach(t),QT=h(St),ii=a(St,"P",{});var af=r(ii);HT=n(af,"This model inherits from "),wd=a(af,"A",{href:!0});var jx=r(wd);KT=n(jx,"TFPreTrainedModel"),jx.forEach(t),VT=n(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),af.forEach(t),JT=h(St),li=a(St,"P",{});var rf=r(li);GT=n(rf,"This model is also a "),di=a(rf,"A",{href:!0,rel:!0});var Px=r(di);YT=n(Px,"tf.keras.Model"),Px.forEach(t),ZT=n(rf,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rf.forEach(t),ew=h(St),T(Rs.$$.fragment,St),tw=h(St),ci=a(St,"P",{});var lf=r(ci);ow=n(lf,"This class overrides "),Ep=a(lf,"CODE",{});var Ax=r(Ep);nw=n(Ax,"TFRobertaForQuestionAnsweringSimple"),Ax.forEach(t),sw=n(lf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),lf.forEach(t),aw=h(St),Ct=a(St,"DIV",{class:!0});var Eo=r(Ct);T(pi.$$.fragment,Eo),rw=h(Eo),rn=a(Eo,"P",{});var ec=r(rn);iw=n(ec,"The "),Md=a(ec,"A",{href:!0});var Ox=r(Md);lw=n(Ox,"TFRobertaForQuestionAnswering"),Ox.forEach(t),dw=n(ec," forward method, overrides the "),zp=a(ec,"CODE",{});var Nx=r(zp);cw=n(Nx,"__call__"),Nx.forEach(t),pw=n(ec," special method."),ec.forEach(t),hw=h(Eo),T(Es.$$.fragment,Eo),mw=h(Eo),T(zs.$$.fragment,Eo),uw=h(Eo),T(qs.$$.fragment,Eo),Eo.forEach(t),St.forEach(t),Vm=h(i),ln=a(i,"H2",{class:!0});var df=r(ln);Xs=a(df,"A",{id:!0,class:!0,href:!0});var Ix=r(Xs);qp=a(Ix,"SPAN",{});var Dx=r(qp);T(hi.$$.fragment,Dx),Dx.forEach(t),Ix.forEach(t),fw=h(df),Xp=a(df,"SPAN",{});var Sx=r(Xp);gw=n(Sx,"FlaxXLMRobertaModel"),Sx.forEach(t),df.forEach(t),Jm=h(i),pt=a(i,"DIV",{class:!0});var Bt=r(pt);T(mi.$$.fragment,Bt),_w=h(Bt),ui=a(Bt,"P",{});var cf=r(ui);bw=n(cf,`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),$d=a(cf,"A",{href:!0});var Bx=r($d);kw=n(Bx,"FlaxPreTrainedModel"),Bx.forEach(t),yw=n(cf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),cf.forEach(t),vw=h(Bt),fi=a(Bt,"P",{});var pf=r(fi);Tw=n(pf,"This model is also a Flax Linen "),gi=a(pf,"A",{href:!0,rel:!0});var Wx=r(gi);ww=n(Wx,"flax.linen.Module"),Wx.forEach(t),Mw=n(pf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),pf.forEach(t),$w=h(Bt),Cp=a(Bt,"P",{});var Ux=r(Cp);Fw=n(Ux,"Finally, this model supports inherent JAX features such as:"),Ux.forEach(t),xw=h(Bt),so=a(Bt,"UL",{});var oa=r(so);jp=a(oa,"LI",{});var Qx=r(jp);_i=a(Qx,"A",{href:!0,rel:!0});var Hx=r(_i);Lw=n(Hx,"Just-In-Time (JIT) compilation"),Hx.forEach(t),Qx.forEach(t),Rw=h(oa),Pp=a(oa,"LI",{});var Kx=r(Pp);bi=a(Kx,"A",{href:!0,rel:!0});var Vx=r(bi);Ew=n(Vx,"Automatic Differentiation"),Vx.forEach(t),Kx.forEach(t),zw=h(oa),Ap=a(oa,"LI",{});var Jx=r(Ap);ki=a(Jx,"A",{href:!0,rel:!0});var Gx=r(ki);qw=n(Gx,"Vectorization"),Gx.forEach(t),Jx.forEach(t),Xw=h(oa),Op=a(oa,"LI",{});var Yx=r(Op);yi=a(Yx,"A",{href:!0,rel:!0});var Zx=r(yi);Cw=n(Zx,"Parallelization"),Zx.forEach(t),Yx.forEach(t),oa.forEach(t),jw=h(Bt),vi=a(Bt,"P",{});var hf=r(vi);Pw=n(hf,"This class overrides "),Fd=a(hf,"A",{href:!0});var e0=r(Fd);Aw=n(e0,"FlaxRobertaModel"),e0.forEach(t),Ow=n(hf,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),hf.forEach(t),Nw=h(Bt),Gt=a(Bt,"DIV",{class:!0});var na=r(Gt);T(Ti.$$.fragment,na),Iw=h(na),dn=a(na,"P",{});var tc=r(dn);Dw=n(tc,"The "),Np=a(tc,"CODE",{});var t0=r(Np);Sw=n(t0,"FlaxRobertaPreTrainedModel"),t0.forEach(t),Bw=n(tc," forward method, overrides the "),Ip=a(tc,"CODE",{});var o0=r(Ip);Ww=n(o0,"__call__"),o0.forEach(t),Uw=n(tc," special method."),tc.forEach(t),Qw=h(na),T(Cs.$$.fragment,na),Hw=h(na),T(js.$$.fragment,na),na.forEach(t),Bt.forEach(t),Gm=h(i),cn=a(i,"H2",{class:!0});var mf=r(cn);Ps=a(mf,"A",{id:!0,class:!0,href:!0});var n0=r(Ps);Dp=a(n0,"SPAN",{});var s0=r(Dp);T(wi.$$.fragment,s0),s0.forEach(t),n0.forEach(t),Kw=h(mf),Sp=a(mf,"SPAN",{});var a0=r(Sp);Vw=n(a0,"FlaxXLMRobertaForMaskedLM"),a0.forEach(t),mf.forEach(t),Ym=h(i),ht=a(i,"DIV",{class:!0});var Wt=r(ht);T(Mi.$$.fragment,Wt),Jw=h(Wt),pn=a(Wt,"P",{});var oc=r(pn);Gw=n(oc,"XLM-RoBERTa Model with a "),Bp=a(oc,"CODE",{});var r0=r(Bp);Yw=n(r0,"language modeling"),r0.forEach(t),Zw=n(oc,` head on top.
This model inherits from `),xd=a(oc,"A",{href:!0});var i0=r(xd);eM=n(i0,"FlaxPreTrainedModel"),i0.forEach(t),tM=n(oc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oc.forEach(t),oM=h(Wt),$i=a(Wt,"P",{});var uf=r($i);nM=n(uf,"This model is also a Flax Linen "),Fi=a(uf,"A",{href:!0,rel:!0});var l0=r(Fi);sM=n(l0,"flax.linen.Module"),l0.forEach(t),aM=n(uf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uf.forEach(t),rM=h(Wt),Wp=a(Wt,"P",{});var d0=r(Wp);iM=n(d0,"Finally, this model supports inherent JAX features such as:"),d0.forEach(t),lM=h(Wt),ao=a(Wt,"UL",{});var sa=r(ao);Up=a(sa,"LI",{});var c0=r(Up);xi=a(c0,"A",{href:!0,rel:!0});var p0=r(xi);dM=n(p0,"Just-In-Time (JIT) compilation"),p0.forEach(t),c0.forEach(t),cM=h(sa),Qp=a(sa,"LI",{});var h0=r(Qp);Li=a(h0,"A",{href:!0,rel:!0});var m0=r(Li);pM=n(m0,"Automatic Differentiation"),m0.forEach(t),h0.forEach(t),hM=h(sa),Hp=a(sa,"LI",{});var u0=r(Hp);Ri=a(u0,"A",{href:!0,rel:!0});var f0=r(Ri);mM=n(f0,"Vectorization"),f0.forEach(t),u0.forEach(t),uM=h(sa),Kp=a(sa,"LI",{});var g0=r(Kp);Ei=a(g0,"A",{href:!0,rel:!0});var _0=r(Ei);fM=n(_0,"Parallelization"),_0.forEach(t),g0.forEach(t),sa.forEach(t),gM=h(Wt),zi=a(Wt,"P",{});var ff=r(zi);_M=n(ff,"This class overrides "),Ld=a(ff,"A",{href:!0});var b0=r(Ld);bM=n(b0,"FlaxRobertaForMaskedLM"),b0.forEach(t),kM=n(ff,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ff.forEach(t),yM=h(Wt),Yt=a(Wt,"DIV",{class:!0});var aa=r(Yt);T(qi.$$.fragment,aa),vM=h(aa),hn=a(aa,"P",{});var nc=r(hn);TM=n(nc,"The "),Vp=a(nc,"CODE",{});var k0=r(Vp);wM=n(k0,"FlaxRobertaPreTrainedModel"),k0.forEach(t),MM=n(nc," forward method, overrides the "),Jp=a(nc,"CODE",{});var y0=r(Jp);$M=n(y0,"__call__"),y0.forEach(t),FM=n(nc," special method."),nc.forEach(t),xM=h(aa),T(As.$$.fragment,aa),LM=h(aa),T(Os.$$.fragment,aa),aa.forEach(t),Wt.forEach(t),Zm=h(i),mn=a(i,"H2",{class:!0});var gf=r(mn);Ns=a(gf,"A",{id:!0,class:!0,href:!0});var v0=r(Ns);Gp=a(v0,"SPAN",{});var T0=r(Gp);T(Xi.$$.fragment,T0),T0.forEach(t),v0.forEach(t),RM=h(gf),Yp=a(gf,"SPAN",{});var w0=r(Yp);EM=n(w0,"FlaxXLMRobertaForSequenceClassification"),w0.forEach(t),gf.forEach(t),eu=h(i),et=a(i,"DIV",{class:!0});var _t=r(et);T(Ci.$$.fragment,_t),zM=h(_t),Zp=a(_t,"P",{});var M0=r(Zp);qM=n(M0,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),M0.forEach(t),XM=h(_t),ji=a(_t,"P",{});var _f=r(ji);CM=n(_f,"This model inherits from "),Rd=a(_f,"A",{href:!0});var $0=r(Rd);jM=n($0,"FlaxPreTrainedModel"),$0.forEach(t),PM=n(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_f.forEach(t),AM=h(_t),Pi=a(_t,"P",{});var bf=r(Pi);OM=n(bf,"This model is also a Flax Linen "),Ai=a(bf,"A",{href:!0,rel:!0});var F0=r(Ai);NM=n(F0,"flax.linen.Module"),F0.forEach(t),IM=n(bf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bf.forEach(t),DM=h(_t),eh=a(_t,"P",{});var x0=r(eh);SM=n(x0,"Finally, this model supports inherent JAX features such as:"),x0.forEach(t),BM=h(_t),ro=a(_t,"UL",{});var ra=r(ro);th=a(ra,"LI",{});var L0=r(th);Oi=a(L0,"A",{href:!0,rel:!0});var R0=r(Oi);WM=n(R0,"Just-In-Time (JIT) compilation"),R0.forEach(t),L0.forEach(t),UM=h(ra),oh=a(ra,"LI",{});var E0=r(oh);Ni=a(E0,"A",{href:!0,rel:!0});var z0=r(Ni);QM=n(z0,"Automatic Differentiation"),z0.forEach(t),E0.forEach(t),HM=h(ra),nh=a(ra,"LI",{});var q0=r(nh);Ii=a(q0,"A",{href:!0,rel:!0});var X0=r(Ii);KM=n(X0,"Vectorization"),X0.forEach(t),q0.forEach(t),VM=h(ra),sh=a(ra,"LI",{});var C0=r(sh);Di=a(C0,"A",{href:!0,rel:!0});var j0=r(Di);JM=n(j0,"Parallelization"),j0.forEach(t),C0.forEach(t),ra.forEach(t),GM=h(_t),Si=a(_t,"P",{});var kf=r(Si);YM=n(kf,"This class overrides "),Ed=a(kf,"A",{href:!0});var P0=r(Ed);ZM=n(P0,"FlaxRobertaForSequenceClassification"),P0.forEach(t),e$=n(kf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),kf.forEach(t),t$=h(_t),Zt=a(_t,"DIV",{class:!0});var ia=r(Zt);T(Bi.$$.fragment,ia),o$=h(ia),un=a(ia,"P",{});var sc=r(un);n$=n(sc,"The "),ah=a(sc,"CODE",{});var A0=r(ah);s$=n(A0,"FlaxRobertaPreTrainedModel"),A0.forEach(t),a$=n(sc," forward method, overrides the "),rh=a(sc,"CODE",{});var O0=r(rh);r$=n(O0,"__call__"),O0.forEach(t),i$=n(sc," special method."),sc.forEach(t),l$=h(ia),T(Is.$$.fragment,ia),d$=h(ia),T(Ds.$$.fragment,ia),ia.forEach(t),_t.forEach(t),tu=h(i),fn=a(i,"H2",{class:!0});var yf=r(fn);Ss=a(yf,"A",{id:!0,class:!0,href:!0});var N0=r(Ss);ih=a(N0,"SPAN",{});var I0=r(ih);T(Wi.$$.fragment,I0),I0.forEach(t),N0.forEach(t),c$=h(yf),lh=a(yf,"SPAN",{});var D0=r(lh);p$=n(D0,"FlaxXLMRobertaForMultipleChoice"),D0.forEach(t),yf.forEach(t),ou=h(i),tt=a(i,"DIV",{class:!0});var bt=r(tt);T(Ui.$$.fragment,bt),h$=h(bt),dh=a(bt,"P",{});var S0=r(dh);m$=n(S0,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),S0.forEach(t),u$=h(bt),Qi=a(bt,"P",{});var vf=r(Qi);f$=n(vf,"This model inherits from "),zd=a(vf,"A",{href:!0});var B0=r(zd);g$=n(B0,"FlaxPreTrainedModel"),B0.forEach(t),_$=n(vf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vf.forEach(t),b$=h(bt),Hi=a(bt,"P",{});var Tf=r(Hi);k$=n(Tf,"This model is also a Flax Linen "),Ki=a(Tf,"A",{href:!0,rel:!0});var W0=r(Ki);y$=n(W0,"flax.linen.Module"),W0.forEach(t),v$=n(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(t),T$=h(bt),ch=a(bt,"P",{});var U0=r(ch);w$=n(U0,"Finally, this model supports inherent JAX features such as:"),U0.forEach(t),M$=h(bt),io=a(bt,"UL",{});var la=r(io);ph=a(la,"LI",{});var Q0=r(ph);Vi=a(Q0,"A",{href:!0,rel:!0});var H0=r(Vi);$$=n(H0,"Just-In-Time (JIT) compilation"),H0.forEach(t),Q0.forEach(t),F$=h(la),hh=a(la,"LI",{});var K0=r(hh);Ji=a(K0,"A",{href:!0,rel:!0});var V0=r(Ji);x$=n(V0,"Automatic Differentiation"),V0.forEach(t),K0.forEach(t),L$=h(la),mh=a(la,"LI",{});var J0=r(mh);Gi=a(J0,"A",{href:!0,rel:!0});var G0=r(Gi);R$=n(G0,"Vectorization"),G0.forEach(t),J0.forEach(t),E$=h(la),uh=a(la,"LI",{});var Y0=r(uh);Yi=a(Y0,"A",{href:!0,rel:!0});var Z0=r(Yi);z$=n(Z0,"Parallelization"),Z0.forEach(t),Y0.forEach(t),la.forEach(t),q$=h(bt),Zi=a(bt,"P",{});var wf=r(Zi);X$=n(wf,"This class overrides "),qd=a(wf,"A",{href:!0});var eL=r(qd);C$=n(eL,"FlaxRobertaForMultipleChoice"),eL.forEach(t),j$=n(wf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),wf.forEach(t),P$=h(bt),eo=a(bt,"DIV",{class:!0});var da=r(eo);T(el.$$.fragment,da),A$=h(da),gn=a(da,"P",{});var ac=r(gn);O$=n(ac,"The "),fh=a(ac,"CODE",{});var tL=r(fh);N$=n(tL,"FlaxRobertaPreTrainedModel"),tL.forEach(t),I$=n(ac," forward method, overrides the "),gh=a(ac,"CODE",{});var oL=r(gh);D$=n(oL,"__call__"),oL.forEach(t),S$=n(ac," special method."),ac.forEach(t),B$=h(da),T(Bs.$$.fragment,da),W$=h(da),T(Ws.$$.fragment,da),da.forEach(t),bt.forEach(t),nu=h(i),_n=a(i,"H2",{class:!0});var Mf=r(_n);Us=a(Mf,"A",{id:!0,class:!0,href:!0});var nL=r(Us);_h=a(nL,"SPAN",{});var sL=r(_h);T(tl.$$.fragment,sL),sL.forEach(t),nL.forEach(t),U$=h(Mf),bh=a(Mf,"SPAN",{});var aL=r(bh);Q$=n(aL,"FlaxXLMRobertaForTokenClassification"),aL.forEach(t),Mf.forEach(t),su=h(i),ot=a(i,"DIV",{class:!0});var kt=r(ot);T(ol.$$.fragment,kt),H$=h(kt),kh=a(kt,"P",{});var rL=r(kh);K$=n(rL,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),rL.forEach(t),V$=h(kt),nl=a(kt,"P",{});var $f=r(nl);J$=n($f,"This model inherits from "),Xd=a($f,"A",{href:!0});var iL=r(Xd);G$=n(iL,"FlaxPreTrainedModel"),iL.forEach(t),Y$=n($f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),$f.forEach(t),Z$=h(kt),sl=a(kt,"P",{});var Ff=r(sl);e1=n(Ff,"This model is also a Flax Linen "),al=a(Ff,"A",{href:!0,rel:!0});var lL=r(al);t1=n(lL,"flax.linen.Module"),lL.forEach(t),o1=n(Ff,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ff.forEach(t),n1=h(kt),yh=a(kt,"P",{});var dL=r(yh);s1=n(dL,"Finally, this model supports inherent JAX features such as:"),dL.forEach(t),a1=h(kt),lo=a(kt,"UL",{});var ca=r(lo);vh=a(ca,"LI",{});var cL=r(vh);rl=a(cL,"A",{href:!0,rel:!0});var pL=r(rl);r1=n(pL,"Just-In-Time (JIT) compilation"),pL.forEach(t),cL.forEach(t),i1=h(ca),Th=a(ca,"LI",{});var hL=r(Th);il=a(hL,"A",{href:!0,rel:!0});var mL=r(il);l1=n(mL,"Automatic Differentiation"),mL.forEach(t),hL.forEach(t),d1=h(ca),wh=a(ca,"LI",{});var uL=r(wh);ll=a(uL,"A",{href:!0,rel:!0});var fL=r(ll);c1=n(fL,"Vectorization"),fL.forEach(t),uL.forEach(t),p1=h(ca),Mh=a(ca,"LI",{});var gL=r(Mh);dl=a(gL,"A",{href:!0,rel:!0});var _L=r(dl);h1=n(_L,"Parallelization"),_L.forEach(t),gL.forEach(t),ca.forEach(t),m1=h(kt),cl=a(kt,"P",{});var xf=r(cl);u1=n(xf,"This class overrides "),Cd=a(xf,"A",{href:!0});var bL=r(Cd);f1=n(bL,"FlaxRobertaForTokenClassification"),bL.forEach(t),g1=n(xf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xf.forEach(t),_1=h(kt),to=a(kt,"DIV",{class:!0});var pa=r(to);T(pl.$$.fragment,pa),b1=h(pa),bn=a(pa,"P",{});var rc=r(bn);k1=n(rc,"The "),$h=a(rc,"CODE",{});var kL=r($h);y1=n(kL,"FlaxRobertaPreTrainedModel"),kL.forEach(t),v1=n(rc," forward method, overrides the "),Fh=a(rc,"CODE",{});var yL=r(Fh);T1=n(yL,"__call__"),yL.forEach(t),w1=n(rc," special method."),rc.forEach(t),M1=h(pa),T(Qs.$$.fragment,pa),$1=h(pa),T(Hs.$$.fragment,pa),pa.forEach(t),kt.forEach(t),au=h(i),kn=a(i,"H2",{class:!0});var Lf=r(kn);Ks=a(Lf,"A",{id:!0,class:!0,href:!0});var vL=r(Ks);xh=a(vL,"SPAN",{});var TL=r(xh);T(hl.$$.fragment,TL),TL.forEach(t),vL.forEach(t),F1=h(Lf),Lh=a(Lf,"SPAN",{});var wL=r(Lh);x1=n(wL,"FlaxXLMRobertaForQuestionAnswering"),wL.forEach(t),Lf.forEach(t),ru=h(i),nt=a(i,"DIV",{class:!0});var yt=r(nt);T(ml.$$.fragment,yt),L1=h(yt),yn=a(yt,"P",{});var ic=r(yn);R1=n(ic,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Rh=a(ic,"CODE",{});var ML=r(Rh);E1=n(ML,"span start logits"),ML.forEach(t),z1=n(ic," and "),Eh=a(ic,"CODE",{});var $L=r(Eh);q1=n($L,"span end logits"),$L.forEach(t),X1=n(ic,")."),ic.forEach(t),C1=h(yt),ul=a(yt,"P",{});var Rf=r(ul);j1=n(Rf,"This model inherits from "),jd=a(Rf,"A",{href:!0});var FL=r(jd);P1=n(FL,"FlaxPreTrainedModel"),FL.forEach(t),A1=n(Rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rf.forEach(t),O1=h(yt),fl=a(yt,"P",{});var Ef=r(fl);N1=n(Ef,"This model is also a Flax Linen "),gl=a(Ef,"A",{href:!0,rel:!0});var xL=r(gl);I1=n(xL,"flax.linen.Module"),xL.forEach(t),D1=n(Ef,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ef.forEach(t),S1=h(yt),zh=a(yt,"P",{});var LL=r(zh);B1=n(LL,"Finally, this model supports inherent JAX features such as:"),LL.forEach(t),W1=h(yt),co=a(yt,"UL",{});var ha=r(co);qh=a(ha,"LI",{});var RL=r(qh);_l=a(RL,"A",{href:!0,rel:!0});var EL=r(_l);U1=n(EL,"Just-In-Time (JIT) compilation"),EL.forEach(t),RL.forEach(t),Q1=h(ha),Xh=a(ha,"LI",{});var zL=r(Xh);bl=a(zL,"A",{href:!0,rel:!0});var qL=r(bl);H1=n(qL,"Automatic Differentiation"),qL.forEach(t),zL.forEach(t),K1=h(ha),Ch=a(ha,"LI",{});var XL=r(Ch);kl=a(XL,"A",{href:!0,rel:!0});var CL=r(kl);V1=n(CL,"Vectorization"),CL.forEach(t),XL.forEach(t),J1=h(ha),jh=a(ha,"LI",{});var jL=r(jh);yl=a(jL,"A",{href:!0,rel:!0});var PL=r(yl);G1=n(PL,"Parallelization"),PL.forEach(t),jL.forEach(t),ha.forEach(t),Y1=h(yt),vl=a(yt,"P",{});var zf=r(vl);Z1=n(zf,"This class overrides "),Pd=a(zf,"A",{href:!0});var AL=r(Pd);e2=n(AL,"FlaxRobertaForQuestionAnswering"),AL.forEach(t),t2=n(zf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),zf.forEach(t),o2=h(yt),oo=a(yt,"DIV",{class:!0});var ma=r(oo);T(Tl.$$.fragment,ma),n2=h(ma),vn=a(ma,"P",{});var lc=r(vn);s2=n(lc,"The "),Ph=a(lc,"CODE",{});var OL=r(Ph);a2=n(OL,"FlaxRobertaPreTrainedModel"),OL.forEach(t),r2=n(lc," forward method, overrides the "),Ah=a(lc,"CODE",{});var NL=r(Ah);i2=n(NL,"__call__"),NL.forEach(t),l2=n(lc," special method."),lc.forEach(t),d2=h(ma),T(Vs.$$.fragment,ma),c2=h(ma),T(Js.$$.fragment,ma),ma.forEach(t),yt.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(HR)),u(f,"id","xlmroberta"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#xlmroberta"),u(c,"class","relative group"),u(re,"id","overview"),u(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(re,"href","#overview"),u(O,"class","relative group"),u(le,"href","https://arxiv.org/abs/1911.02116"),u(le,"rel","nofollow"),u(he,"href","roberta"),u(pe,"href","https://huggingface.co/stefan-it"),u(pe,"rel","nofollow"),u(ee,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),u(ee,"rel","nofollow"),u(ie,"id","transformers.XLMRobertaConfig"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#transformers.XLMRobertaConfig"),u(ae,"class","relative group"),u(De,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel"),u(Se,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.TFXLMRobertaModel"),u(Ne,"href","https://huggingface.co/xlm-roberta-base"),u(Ne,"rel","nofollow"),u(jl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Pl,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fn,"id","transformers.XLMRobertaTokenizer"),u(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fn,"href","#transformers.XLMRobertaTokenizer"),u(zo,"class","relative group"),u(Al,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Ol,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(ga,"href","https://github.com/google/sentencepiece"),u(ga,"rel","nofollow"),u(Nl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rn,"id","transformers.XLMRobertaTokenizerFast"),u(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rn,"href","#transformers.XLMRobertaTokenizerFast"),u(qo,"class","relative group"),u(Bl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Wl,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(Fa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),u(Fa,"rel","nofollow"),u(Ul,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.XLMRobertaModel"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.XLMRobertaModel"),u(Xo,"class","relative group"),u(Kl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Aa,"href","https://arxiv.org/abs/1706.03762"),u(Aa,"rel","nofollow"),u(Vl,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaModel"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.XLMRobertaForCausalLM"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.XLMRobertaForCausalLM"),u(jo,"class","relative group"),u(Jl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(Gl,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForCausalLM"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(On,"id","transformers.XLMRobertaForMaskedLM"),u(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(On,"href","#transformers.XLMRobertaForMaskedLM"),u(Ao,"class","relative group"),u(Yl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ga,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ga,"rel","nofollow"),u(Zl,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Sn,"id","transformers.XLMRobertaForSequenceClassification"),u(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Sn,"href","#transformers.XLMRobertaForSequenceClassification"),u(No,"class","relative group"),u(ed,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nr,"rel","nofollow"),u(td,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForSequenceClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Kn,"id","transformers.XLMRobertaForMultipleChoice"),u(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Kn,"href","#transformers.XLMRobertaForMultipleChoice"),u(Do,"class","relative group"),u(od,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(dr,"rel","nofollow"),u(nd,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForMultipleChoice"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.XLMRobertaForTokenClassification"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.XLMRobertaForTokenClassification"),u(Bo,"class","relative group"),u(sd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(fr,"rel","nofollow"),u(ad,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForTokenClassification"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"id","transformers.XLMRobertaForQuestionAnswering"),u(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ts,"href","#transformers.XLMRobertaForQuestionAnswering"),u(Uo,"class","relative group"),u(rd,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(vr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(vr,"rel","nofollow"),u(id,"href","/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaForQuestionAnswering"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(as,"id","transformers.TFXLMRobertaModel"),u(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(as,"href","#transformers.TFXLMRobertaModel"),u(Ko,"class","relative group"),u(ld,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xr,"rel","nofollow"),u(dd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(cd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.TFXLMRobertaForMaskedLM"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.TFXLMRobertaForMaskedLM"),u(Jo,"class","relative group"),u(pd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(jr,"rel","nofollow"),u(hd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(md,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(us,"id","transformers.TFXLMRobertaForSequenceClassification"),u(us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(us,"href","#transformers.TFXLMRobertaForSequenceClassification"),u(Yo,"class","relative group"),u(ud,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Sr,"rel","nofollow"),u(fd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(gd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ks,"id","transformers.TFXLMRobertaForMultipleChoice"),u(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ks,"href","#transformers.TFXLMRobertaForMultipleChoice"),u(en,"class","relative group"),u(_d,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Vr,"rel","nofollow"),u(bd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(kd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ws,"id","transformers.TFXLMRobertaForTokenClassification"),u(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ws,"href","#transformers.TFXLMRobertaForTokenClassification"),u(on,"class","relative group"),u(yd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(oi,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(oi,"rel","nofollow"),u(vd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(Td,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ls,"id","transformers.TFXLMRobertaForQuestionAnswering"),u(Ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ls,"href","#transformers.TFXLMRobertaForQuestionAnswering"),u(sn,"class","relative group"),u(wd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(di,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(di,"rel","nofollow"),u(Md,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.FlaxXLMRobertaModel"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.FlaxXLMRobertaModel"),u(ln,"class","relative group"),u($d,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gi,"rel","nofollow"),u(_i,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_i,"rel","nofollow"),u(bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bi,"rel","nofollow"),u(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ki,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yi,"rel","nofollow"),u(Fd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaModel"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ps,"id","transformers.FlaxXLMRobertaForMaskedLM"),u(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ps,"href","#transformers.FlaxXLMRobertaForMaskedLM"),u(cn,"class","relative group"),u(xd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fi,"rel","nofollow"),u(xi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(xi,"rel","nofollow"),u(Li,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Li,"rel","nofollow"),u(Ri,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ri,"rel","nofollow"),u(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ei,"rel","nofollow"),u(Ld,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.FlaxXLMRobertaForSequenceClassification"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.FlaxXLMRobertaForSequenceClassification"),u(mn,"class","relative group"),u(Rd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ai,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ai,"rel","nofollow"),u(Oi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Oi,"rel","nofollow"),u(Ni,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ni,"rel","nofollow"),u(Ii,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ii,"rel","nofollow"),u(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Di,"rel","nofollow"),u(Ed,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ss,"id","transformers.FlaxXLMRobertaForMultipleChoice"),u(Ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ss,"href","#transformers.FlaxXLMRobertaForMultipleChoice"),u(fn,"class","relative group"),u(zd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ki,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ki,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vi,"rel","nofollow"),u(Ji,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ji,"rel","nofollow"),u(Gi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gi,"rel","nofollow"),u(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Yi,"rel","nofollow"),u(qd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMultipleChoice"),u(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Us,"id","transformers.FlaxXLMRobertaForTokenClassification"),u(Us,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Us,"href","#transformers.FlaxXLMRobertaForTokenClassification"),u(_n,"class","relative group"),u(Xd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(al,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(al,"rel","nofollow"),u(rl,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(rl,"rel","nofollow"),u(il,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(il,"rel","nofollow"),u(ll,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ll,"rel","nofollow"),u(dl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dl,"rel","nofollow"),u(Cd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),u(to,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.FlaxXLMRobertaForQuestionAnswering"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.FlaxXLMRobertaForQuestionAnswering"),u(kn,"class","relative group"),u(jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(gl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(gl,"rel","nofollow"),u(_l,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(_l,"rel","nofollow"),u(bl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(bl,"rel","nofollow"),u(kl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(kl,"rel","nofollow"),u(yl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(yl,"rel","nofollow"),u(Pd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,b){e(document.head,d),_(i,g,b),_(i,c,b),e(c,f),e(f,k),w(l,k,null),e(c,m),e(c,R),e(R,Me),_(i,be,b),_(i,O,b),e(O,re),e(re,te),w(L,te,null),e(O,$e),e(O,U),e(U,Fe),_(i,ke,b),_(i,D,b),e(D,xe),e(D,le),e(le,H),e(D,Le),_(i,ye,b),_(i,B,b),e(B,Re),_(i,ve,b),_(i,W,b),e(W,ge),e(ge,Ee),_(i,ne,b),_(i,q,b),e(q,X),_(i,Te,b),_(i,S,b),e(S,de),e(de,ze),e(de,Q),e(Q,qe),e(de,Xe),e(S,C),e(S,ce),e(ce,K),e(ce,he),e(he,Ce),e(ce,V),_(i,we,b),_(i,se,b),e(se,N),e(se,pe),e(pe,J),e(se,je),e(se,ee),e(ee,j),e(se,Pe),_(i,P,b),_(i,ae,b),e(ae,ie),e(ie,y),w(E,y,null),e(ae,Ue),e(ae,oe),e(oe,Qe),_(i,We,b),_(i,z,b),w(Oe,z,null),e(z,He),e(z,_e),e(_e,Ke),e(_e,De),e(De,I),e(_e,G),e(_e,Se),e(Se,Ve),e(_e,Y),e(_e,Ne),e(Ne,Je),e(_e,Ae),e(z,Ge),e(z,Z),e(Z,Ye),e(Z,jl),e(jl,qf),e(Z,Xf),e(Z,Pl),e(Pl,Cf),e(Z,jf),e(z,Pf),w($n,z,null),_(i,km,b),_(i,zo,b),e(zo,Fn),e(Fn,dc),w(ua,dc,null),e(zo,Af),e(zo,cc),e(cc,Of),_(i,ym,b),_(i,st,b),w(fa,st,null),e(st,Nf),e(st,no),e(no,If),e(no,Al),e(Al,Df),e(no,Sf),e(no,Ol),e(Ol,Bf),e(no,Wf),e(no,ga),e(ga,Uf),e(no,Qf),e(st,Hf),e(st,_a),e(_a,Kf),e(_a,Nl),e(Nl,Vf),e(_a,Jf),e(st,Gf),e(st,uo),w(ba,uo,null),e(uo,Yf),e(uo,pc),e(pc,Zf),e(uo,eg),e(uo,ka),e(ka,Il),e(Il,tg),e(Il,hc),e(hc,og),e(ka,ng),e(ka,Dl),e(Dl,sg),e(Dl,mc),e(mc,ag),e(st,rg),e(st,xn),w(ya,xn,null),e(xn,ig),e(xn,va),e(va,lg),e(va,uc),e(uc,dg),e(va,cg),e(st,pg),e(st,Ln),w(Ta,Ln,null),e(Ln,hg),e(Ln,fc),e(fc,mg),e(st,ug),e(st,Sl),w(wa,Sl,null),_(i,vm,b),_(i,qo,b),e(qo,Rn),e(Rn,gc),w(Ma,gc,null),e(qo,fg),e(qo,_c),e(_c,gg),_(i,Tm,b),_(i,vt,b),w($a,vt,null),e(vt,_g),e(vt,Ut),e(Ut,bg),e(Ut,bc),e(bc,kg),e(Ut,yg),e(Ut,Bl),e(Bl,vg),e(Ut,Tg),e(Ut,Wl),e(Wl,wg),e(Ut,Mg),e(Ut,Fa),e(Fa,$g),e(Ut,Fg),e(vt,xg),e(vt,xa),e(xa,Lg),e(xa,Ul),e(Ul,Rg),e(xa,Eg),e(vt,zg),e(vt,fo),w(La,fo,null),e(fo,qg),e(fo,kc),e(kc,Xg),e(fo,Cg),e(fo,Ra),e(Ra,Ql),e(Ql,jg),e(Ql,yc),e(yc,Pg),e(Ra,Ag),e(Ra,Hl),e(Hl,Og),e(Hl,vc),e(vc,Ng),e(vt,Ig),e(vt,En),w(Ea,En,null),e(En,Dg),e(En,Tc),e(Tc,Sg),_(i,wm,b),_(i,Xo,b),e(Xo,zn),e(zn,wc),w(za,wc,null),e(Xo,Bg),e(Xo,Mc),e(Mc,Wg),_(i,Mm,b),_(i,Ze,b),w(qa,Ze,null),e(Ze,Ug),e(Ze,$c),e($c,Qg),e(Ze,Hg),e(Ze,Xa),e(Xa,Kg),e(Xa,Kl),e(Kl,Vg),e(Xa,Jg),e(Ze,Gg),e(Ze,Ca),e(Ca,Yg),e(Ca,ja),e(ja,Zg),e(Ca,e_),e(Ze,t_),e(Ze,Pa),e(Pa,o_),e(Pa,Fc),e(Fc,n_),e(Pa,s_),e(Ze,a_),e(Ze,ut),e(ut,r_),e(ut,xc),e(xc,i_),e(ut,l_),e(ut,Lc),e(Lc,d_),e(ut,c_),e(ut,Rc),e(Rc,p_),e(ut,h_),e(ut,Ec),e(Ec,m_),e(ut,u_),e(ut,zc),e(zc,f_),e(ut,g_),e(ut,qc),e(qc,__),e(ut,b_),e(Ze,k_),e(Ze,qn),e(qn,y_),e(qn,Xc),e(Xc,v_),e(qn,T_),e(qn,Aa),e(Aa,w_),e(Ze,M_),e(Ze,Qt),w(Oa,Qt,null),e(Qt,$_),e(Qt,Co),e(Co,F_),e(Co,Vl),e(Vl,x_),e(Co,L_),e(Co,Cc),e(Cc,R_),e(Co,E_),e(Qt,z_),w(Xn,Qt,null),e(Qt,q_),w(Cn,Qt,null),_(i,$m,b),_(i,jo,b),e(jo,jn),e(jn,jc),w(Na,jc,null),e(jo,X_),e(jo,Pc),e(Pc,C_),_(i,Fm,b),_(i,Tt,b),w(Ia,Tt,null),e(Tt,j_),e(Tt,Da),e(Da,P_),e(Da,Ac),e(Ac,A_),e(Da,O_),e(Tt,N_),e(Tt,Sa),e(Sa,I_),e(Sa,Jl),e(Jl,D_),e(Sa,S_),e(Tt,B_),e(Tt,Ba),e(Ba,W_),e(Ba,Wa),e(Wa,U_),e(Ba,Q_),e(Tt,H_),e(Tt,Ht),w(Ua,Ht,null),e(Ht,K_),e(Ht,Po),e(Po,V_),e(Po,Gl),e(Gl,J_),e(Po,G_),e(Po,Oc),e(Oc,Y_),e(Po,Z_),e(Ht,eb),w(Pn,Ht,null),e(Ht,tb),w(An,Ht,null),_(i,xm,b),_(i,Ao,b),e(Ao,On),e(On,Nc),w(Qa,Nc,null),e(Ao,ob),e(Ao,Ic),e(Ic,nb),_(i,Lm,b),_(i,wt,b),w(Ha,wt,null),e(wt,sb),e(wt,Ka),e(Ka,ab),e(Ka,Dc),e(Dc,rb),e(Ka,ib),e(wt,lb),e(wt,Va),e(Va,db),e(Va,Yl),e(Yl,cb),e(Va,pb),e(wt,hb),e(wt,Ja),e(Ja,mb),e(Ja,Ga),e(Ga,ub),e(Ja,fb),e(wt,gb),e(wt,Lt),w(Ya,Lt,null),e(Lt,_b),e(Lt,Oo),e(Oo,bb),e(Oo,Zl),e(Zl,kb),e(Oo,yb),e(Oo,Sc),e(Sc,vb),e(Oo,Tb),e(Lt,wb),w(Nn,Lt,null),e(Lt,Mb),w(In,Lt,null),e(Lt,$b),w(Dn,Lt,null),_(i,Rm,b),_(i,No,b),e(No,Sn),e(Sn,Bc),w(Za,Bc,null),e(No,Fb),e(No,Wc),e(Wc,xb),_(i,Em,b),_(i,Mt,b),w(er,Mt,null),e(Mt,Lb),e(Mt,Uc),e(Uc,Rb),e(Mt,Eb),e(Mt,tr),e(tr,zb),e(tr,ed),e(ed,qb),e(tr,Xb),e(Mt,Cb),e(Mt,or),e(or,jb),e(or,nr),e(nr,Pb),e(or,Ab),e(Mt,Ob),e(Mt,mt),w(sr,mt,null),e(mt,Nb),e(mt,Io),e(Io,Ib),e(Io,td),e(td,Db),e(Io,Sb),e(Io,Qc),e(Qc,Bb),e(Io,Wb),e(mt,Ub),w(Bn,mt,null),e(mt,Qb),w(Wn,mt,null),e(mt,Hb),w(Un,mt,null),e(mt,Kb),w(Qn,mt,null),e(mt,Vb),w(Hn,mt,null),_(i,zm,b),_(i,Do,b),e(Do,Kn),e(Kn,Hc),w(ar,Hc,null),e(Do,Jb),e(Do,Kc),e(Kc,Gb),_(i,qm,b),_(i,$t,b),w(rr,$t,null),e($t,Yb),e($t,Vc),e(Vc,Zb),e($t,ek),e($t,ir),e(ir,tk),e(ir,od),e(od,ok),e(ir,nk),e($t,sk),e($t,lr),e(lr,ak),e(lr,dr),e(dr,rk),e(lr,ik),e($t,lk),e($t,Kt),w(cr,Kt,null),e(Kt,dk),e(Kt,So),e(So,ck),e(So,nd),e(nd,pk),e(So,hk),e(So,Jc),e(Jc,mk),e(So,uk),e(Kt,fk),w(Vn,Kt,null),e(Kt,gk),w(Jn,Kt,null),_(i,Xm,b),_(i,Bo,b),e(Bo,Gn),e(Gn,Gc),w(pr,Gc,null),e(Bo,_k),e(Bo,Yc),e(Yc,bk),_(i,Cm,b),_(i,Ft,b),w(hr,Ft,null),e(Ft,kk),e(Ft,Zc),e(Zc,yk),e(Ft,vk),e(Ft,mr),e(mr,Tk),e(mr,sd),e(sd,wk),e(mr,Mk),e(Ft,$k),e(Ft,ur),e(ur,Fk),e(ur,fr),e(fr,xk),e(ur,Lk),e(Ft,Rk),e(Ft,Rt),w(gr,Rt,null),e(Rt,Ek),e(Rt,Wo),e(Wo,zk),e(Wo,ad),e(ad,qk),e(Wo,Xk),e(Wo,ep),e(ep,Ck),e(Wo,jk),e(Rt,Pk),w(Yn,Rt,null),e(Rt,Ak),w(Zn,Rt,null),e(Rt,Ok),w(es,Rt,null),_(i,jm,b),_(i,Uo,b),e(Uo,ts),e(ts,tp),w(_r,tp,null),e(Uo,Nk),e(Uo,op),e(op,Ik),_(i,Pm,b),_(i,xt,b),w(br,xt,null),e(xt,Dk),e(xt,Qo),e(Qo,Sk),e(Qo,np),e(np,Bk),e(Qo,Wk),e(Qo,sp),e(sp,Uk),e(Qo,Qk),e(xt,Hk),e(xt,kr),e(kr,Kk),e(kr,rd),e(rd,Vk),e(kr,Jk),e(xt,Gk),e(xt,yr),e(yr,Yk),e(yr,vr),e(vr,Zk),e(yr,ey),e(xt,ty),e(xt,Et),w(Tr,Et,null),e(Et,oy),e(Et,Ho),e(Ho,ny),e(Ho,id),e(id,sy),e(Ho,ay),e(Ho,ap),e(ap,ry),e(Ho,iy),e(Et,ly),w(os,Et,null),e(Et,dy),w(ns,Et,null),e(Et,cy),w(ss,Et,null),_(i,Am,b),_(i,Ko,b),e(Ko,as),e(as,rp),w(wr,rp,null),e(Ko,py),e(Ko,ip),e(ip,hy),_(i,Om,b),_(i,at,b),w(Mr,at,null),e(at,my),e(at,lp),e(lp,uy),e(at,fy),e(at,$r),e($r,gy),e($r,ld),e(ld,_y),e($r,by),e(at,ky),e(at,Fr),e(Fr,yy),e(Fr,xr),e(xr,vy),e(Fr,Ty),e(at,wy),w(rs,at,null),e(at,My),e(at,Lr),e(Lr,$y),e(Lr,dd),e(dd,Fy),e(Lr,xy),e(at,Ly),e(at,Vt),w(Rr,Vt,null),e(Vt,Ry),e(Vt,Vo),e(Vo,Ey),e(Vo,cd),e(cd,zy),e(Vo,qy),e(Vo,dp),e(dp,Xy),e(Vo,Cy),e(Vt,jy),w(is,Vt,null),e(Vt,Py),w(ls,Vt,null),_(i,Nm,b),_(i,Jo,b),e(Jo,ds),e(ds,cp),w(Er,cp,null),e(Jo,Ay),e(Jo,pp),e(pp,Oy),_(i,Im,b),_(i,rt,b),w(zr,rt,null),e(rt,Ny),e(rt,qr),e(qr,Iy),e(qr,hp),e(hp,Dy),e(qr,Sy),e(rt,By),e(rt,Xr),e(Xr,Wy),e(Xr,pd),e(pd,Uy),e(Xr,Qy),e(rt,Hy),e(rt,Cr),e(Cr,Ky),e(Cr,jr),e(jr,Vy),e(Cr,Jy),e(rt,Gy),w(cs,rt,null),e(rt,Yy),e(rt,Pr),e(Pr,Zy),e(Pr,hd),e(hd,ev),e(Pr,tv),e(rt,ov),e(rt,zt),w(Ar,zt,null),e(zt,nv),e(zt,Go),e(Go,sv),e(Go,md),e(md,av),e(Go,rv),e(Go,mp),e(mp,iv),e(Go,lv),e(zt,dv),w(ps,zt,null),e(zt,cv),w(hs,zt,null),e(zt,pv),w(ms,zt,null),_(i,Dm,b),_(i,Yo,b),e(Yo,us),e(us,up),w(Or,up,null),e(Yo,hv),e(Yo,fp),e(fp,mv),_(i,Sm,b),_(i,it,b),w(Nr,it,null),e(it,uv),e(it,gp),e(gp,fv),e(it,gv),e(it,Ir),e(Ir,_v),e(Ir,ud),e(ud,bv),e(Ir,kv),e(it,yv),e(it,Dr),e(Dr,vv),e(Dr,Sr),e(Sr,Tv),e(Dr,wv),e(it,Mv),w(fs,it,null),e(it,$v),e(it,Br),e(Br,Fv),e(Br,fd),e(fd,xv),e(Br,Lv),e(it,Rv),e(it,qt),w(Wr,qt,null),e(qt,Ev),e(qt,Zo),e(Zo,zv),e(Zo,gd),e(gd,qv),e(Zo,Xv),e(Zo,_p),e(_p,Cv),e(Zo,jv),e(qt,Pv),w(gs,qt,null),e(qt,Av),w(_s,qt,null),e(qt,Ov),w(bs,qt,null),_(i,Bm,b),_(i,en,b),e(en,ks),e(ks,bp),w(Ur,bp,null),e(en,Nv),e(en,kp),e(kp,Iv),_(i,Wm,b),_(i,lt,b),w(Qr,lt,null),e(lt,Dv),e(lt,yp),e(yp,Sv),e(lt,Bv),e(lt,Hr),e(Hr,Wv),e(Hr,_d),e(_d,Uv),e(Hr,Qv),e(lt,Hv),e(lt,Kr),e(Kr,Kv),e(Kr,Vr),e(Vr,Vv),e(Kr,Jv),e(lt,Gv),w(ys,lt,null),e(lt,Yv),e(lt,Jr),e(Jr,Zv),e(Jr,bd),e(bd,eT),e(Jr,tT),e(lt,oT),e(lt,Jt),w(Gr,Jt,null),e(Jt,nT),e(Jt,tn),e(tn,sT),e(tn,kd),e(kd,aT),e(tn,rT),e(tn,vp),e(vp,iT),e(tn,lT),e(Jt,dT),w(vs,Jt,null),e(Jt,cT),w(Ts,Jt,null),_(i,Um,b),_(i,on,b),e(on,ws),e(ws,Tp),w(Yr,Tp,null),e(on,pT),e(on,wp),e(wp,hT),_(i,Qm,b),_(i,dt,b),w(Zr,dt,null),e(dt,mT),e(dt,Mp),e(Mp,uT),e(dt,fT),e(dt,ei),e(ei,gT),e(ei,yd),e(yd,_T),e(ei,bT),e(dt,kT),e(dt,ti),e(ti,yT),e(ti,oi),e(oi,vT),e(ti,TT),e(dt,wT),w(Ms,dt,null),e(dt,MT),e(dt,ni),e(ni,$T),e(ni,vd),e(vd,FT),e(ni,xT),e(dt,LT),e(dt,Xt),w(si,Xt,null),e(Xt,RT),e(Xt,nn),e(nn,ET),e(nn,Td),e(Td,zT),e(nn,qT),e(nn,$p),e($p,XT),e(nn,CT),e(Xt,jT),w($s,Xt,null),e(Xt,PT),w(Fs,Xt,null),e(Xt,AT),w(xs,Xt,null),_(i,Hm,b),_(i,sn,b),e(sn,Ls),e(Ls,Fp),w(ai,Fp,null),e(sn,OT),e(sn,xp),e(xp,NT),_(i,Km,b),_(i,ct,b),w(ri,ct,null),e(ct,IT),e(ct,an),e(an,DT),e(an,Lp),e(Lp,ST),e(an,BT),e(an,Rp),e(Rp,WT),e(an,UT),e(ct,QT),e(ct,ii),e(ii,HT),e(ii,wd),e(wd,KT),e(ii,VT),e(ct,JT),e(ct,li),e(li,GT),e(li,di),e(di,YT),e(li,ZT),e(ct,ew),w(Rs,ct,null),e(ct,tw),e(ct,ci),e(ci,ow),e(ci,Ep),e(Ep,nw),e(ci,sw),e(ct,aw),e(ct,Ct),w(pi,Ct,null),e(Ct,rw),e(Ct,rn),e(rn,iw),e(rn,Md),e(Md,lw),e(rn,dw),e(rn,zp),e(zp,cw),e(rn,pw),e(Ct,hw),w(Es,Ct,null),e(Ct,mw),w(zs,Ct,null),e(Ct,uw),w(qs,Ct,null),_(i,Vm,b),_(i,ln,b),e(ln,Xs),e(Xs,qp),w(hi,qp,null),e(ln,fw),e(ln,Xp),e(Xp,gw),_(i,Jm,b),_(i,pt,b),w(mi,pt,null),e(pt,_w),e(pt,ui),e(ui,bw),e(ui,$d),e($d,kw),e(ui,yw),e(pt,vw),e(pt,fi),e(fi,Tw),e(fi,gi),e(gi,ww),e(fi,Mw),e(pt,$w),e(pt,Cp),e(Cp,Fw),e(pt,xw),e(pt,so),e(so,jp),e(jp,_i),e(_i,Lw),e(so,Rw),e(so,Pp),e(Pp,bi),e(bi,Ew),e(so,zw),e(so,Ap),e(Ap,ki),e(ki,qw),e(so,Xw),e(so,Op),e(Op,yi),e(yi,Cw),e(pt,jw),e(pt,vi),e(vi,Pw),e(vi,Fd),e(Fd,Aw),e(vi,Ow),e(pt,Nw),e(pt,Gt),w(Ti,Gt,null),e(Gt,Iw),e(Gt,dn),e(dn,Dw),e(dn,Np),e(Np,Sw),e(dn,Bw),e(dn,Ip),e(Ip,Ww),e(dn,Uw),e(Gt,Qw),w(Cs,Gt,null),e(Gt,Hw),w(js,Gt,null),_(i,Gm,b),_(i,cn,b),e(cn,Ps),e(Ps,Dp),w(wi,Dp,null),e(cn,Kw),e(cn,Sp),e(Sp,Vw),_(i,Ym,b),_(i,ht,b),w(Mi,ht,null),e(ht,Jw),e(ht,pn),e(pn,Gw),e(pn,Bp),e(Bp,Yw),e(pn,Zw),e(pn,xd),e(xd,eM),e(pn,tM),e(ht,oM),e(ht,$i),e($i,nM),e($i,Fi),e(Fi,sM),e($i,aM),e(ht,rM),e(ht,Wp),e(Wp,iM),e(ht,lM),e(ht,ao),e(ao,Up),e(Up,xi),e(xi,dM),e(ao,cM),e(ao,Qp),e(Qp,Li),e(Li,pM),e(ao,hM),e(ao,Hp),e(Hp,Ri),e(Ri,mM),e(ao,uM),e(ao,Kp),e(Kp,Ei),e(Ei,fM),e(ht,gM),e(ht,zi),e(zi,_M),e(zi,Ld),e(Ld,bM),e(zi,kM),e(ht,yM),e(ht,Yt),w(qi,Yt,null),e(Yt,vM),e(Yt,hn),e(hn,TM),e(hn,Vp),e(Vp,wM),e(hn,MM),e(hn,Jp),e(Jp,$M),e(hn,FM),e(Yt,xM),w(As,Yt,null),e(Yt,LM),w(Os,Yt,null),_(i,Zm,b),_(i,mn,b),e(mn,Ns),e(Ns,Gp),w(Xi,Gp,null),e(mn,RM),e(mn,Yp),e(Yp,EM),_(i,eu,b),_(i,et,b),w(Ci,et,null),e(et,zM),e(et,Zp),e(Zp,qM),e(et,XM),e(et,ji),e(ji,CM),e(ji,Rd),e(Rd,jM),e(ji,PM),e(et,AM),e(et,Pi),e(Pi,OM),e(Pi,Ai),e(Ai,NM),e(Pi,IM),e(et,DM),e(et,eh),e(eh,SM),e(et,BM),e(et,ro),e(ro,th),e(th,Oi),e(Oi,WM),e(ro,UM),e(ro,oh),e(oh,Ni),e(Ni,QM),e(ro,HM),e(ro,nh),e(nh,Ii),e(Ii,KM),e(ro,VM),e(ro,sh),e(sh,Di),e(Di,JM),e(et,GM),e(et,Si),e(Si,YM),e(Si,Ed),e(Ed,ZM),e(Si,e$),e(et,t$),e(et,Zt),w(Bi,Zt,null),e(Zt,o$),e(Zt,un),e(un,n$),e(un,ah),e(ah,s$),e(un,a$),e(un,rh),e(rh,r$),e(un,i$),e(Zt,l$),w(Is,Zt,null),e(Zt,d$),w(Ds,Zt,null),_(i,tu,b),_(i,fn,b),e(fn,Ss),e(Ss,ih),w(Wi,ih,null),e(fn,c$),e(fn,lh),e(lh,p$),_(i,ou,b),_(i,tt,b),w(Ui,tt,null),e(tt,h$),e(tt,dh),e(dh,m$),e(tt,u$),e(tt,Qi),e(Qi,f$),e(Qi,zd),e(zd,g$),e(Qi,_$),e(tt,b$),e(tt,Hi),e(Hi,k$),e(Hi,Ki),e(Ki,y$),e(Hi,v$),e(tt,T$),e(tt,ch),e(ch,w$),e(tt,M$),e(tt,io),e(io,ph),e(ph,Vi),e(Vi,$$),e(io,F$),e(io,hh),e(hh,Ji),e(Ji,x$),e(io,L$),e(io,mh),e(mh,Gi),e(Gi,R$),e(io,E$),e(io,uh),e(uh,Yi),e(Yi,z$),e(tt,q$),e(tt,Zi),e(Zi,X$),e(Zi,qd),e(qd,C$),e(Zi,j$),e(tt,P$),e(tt,eo),w(el,eo,null),e(eo,A$),e(eo,gn),e(gn,O$),e(gn,fh),e(fh,N$),e(gn,I$),e(gn,gh),e(gh,D$),e(gn,S$),e(eo,B$),w(Bs,eo,null),e(eo,W$),w(Ws,eo,null),_(i,nu,b),_(i,_n,b),e(_n,Us),e(Us,_h),w(tl,_h,null),e(_n,U$),e(_n,bh),e(bh,Q$),_(i,su,b),_(i,ot,b),w(ol,ot,null),e(ot,H$),e(ot,kh),e(kh,K$),e(ot,V$),e(ot,nl),e(nl,J$),e(nl,Xd),e(Xd,G$),e(nl,Y$),e(ot,Z$),e(ot,sl),e(sl,e1),e(sl,al),e(al,t1),e(sl,o1),e(ot,n1),e(ot,yh),e(yh,s1),e(ot,a1),e(ot,lo),e(lo,vh),e(vh,rl),e(rl,r1),e(lo,i1),e(lo,Th),e(Th,il),e(il,l1),e(lo,d1),e(lo,wh),e(wh,ll),e(ll,c1),e(lo,p1),e(lo,Mh),e(Mh,dl),e(dl,h1),e(ot,m1),e(ot,cl),e(cl,u1),e(cl,Cd),e(Cd,f1),e(cl,g1),e(ot,_1),e(ot,to),w(pl,to,null),e(to,b1),e(to,bn),e(bn,k1),e(bn,$h),e($h,y1),e(bn,v1),e(bn,Fh),e(Fh,T1),e(bn,w1),e(to,M1),w(Qs,to,null),e(to,$1),w(Hs,to,null),_(i,au,b),_(i,kn,b),e(kn,Ks),e(Ks,xh),w(hl,xh,null),e(kn,F1),e(kn,Lh),e(Lh,x1),_(i,ru,b),_(i,nt,b),w(ml,nt,null),e(nt,L1),e(nt,yn),e(yn,R1),e(yn,Rh),e(Rh,E1),e(yn,z1),e(yn,Eh),e(Eh,q1),e(yn,X1),e(nt,C1),e(nt,ul),e(ul,j1),e(ul,jd),e(jd,P1),e(ul,A1),e(nt,O1),e(nt,fl),e(fl,N1),e(fl,gl),e(gl,I1),e(fl,D1),e(nt,S1),e(nt,zh),e(zh,B1),e(nt,W1),e(nt,co),e(co,qh),e(qh,_l),e(_l,U1),e(co,Q1),e(co,Xh),e(Xh,bl),e(bl,H1),e(co,K1),e(co,Ch),e(Ch,kl),e(kl,V1),e(co,J1),e(co,jh),e(jh,yl),e(yl,G1),e(nt,Y1),e(nt,vl),e(vl,Z1),e(vl,Pd),e(Pd,e2),e(vl,t2),e(nt,o2),e(nt,oo),w(Tl,oo,null),e(oo,n2),e(oo,vn),e(vn,s2),e(vn,Ph),e(Ph,a2),e(vn,r2),e(vn,Ah),e(Ah,i2),e(vn,l2),e(oo,d2),w(Vs,oo,null),e(oo,c2),w(Js,oo,null),iu=!0},p(i,[b]){const wl={};b&2&&(wl.$$scope={dirty:b,ctx:i}),$n.$set(wl);const Oh={};b&2&&(Oh.$$scope={dirty:b,ctx:i}),Xn.$set(Oh);const Nh={};b&2&&(Nh.$$scope={dirty:b,ctx:i}),Cn.$set(Nh);const Ih={};b&2&&(Ih.$$scope={dirty:b,ctx:i}),Pn.$set(Ih);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:i}),An.$set(Ml);const Dh={};b&2&&(Dh.$$scope={dirty:b,ctx:i}),Nn.$set(Dh);const Sh={};b&2&&(Sh.$$scope={dirty:b,ctx:i}),In.$set(Sh);const Bh={};b&2&&(Bh.$$scope={dirty:b,ctx:i}),Dn.$set(Bh);const $l={};b&2&&($l.$$scope={dirty:b,ctx:i}),Bn.$set($l);const Wh={};b&2&&(Wh.$$scope={dirty:b,ctx:i}),Wn.$set(Wh);const Uh={};b&2&&(Uh.$$scope={dirty:b,ctx:i}),Un.$set(Uh);const Qh={};b&2&&(Qh.$$scope={dirty:b,ctx:i}),Qn.$set(Qh);const Hh={};b&2&&(Hh.$$scope={dirty:b,ctx:i}),Hn.$set(Hh);const Kh={};b&2&&(Kh.$$scope={dirty:b,ctx:i}),Vn.$set(Kh);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:i}),Jn.$set(Fl);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:i}),Yn.$set(xl);const Vh={};b&2&&(Vh.$$scope={dirty:b,ctx:i}),Zn.$set(Vh);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:i}),es.$set(Ll);const Jh={};b&2&&(Jh.$$scope={dirty:b,ctx:i}),os.$set(Jh);const Tn={};b&2&&(Tn.$$scope={dirty:b,ctx:i}),ns.$set(Tn);const Gh={};b&2&&(Gh.$$scope={dirty:b,ctx:i}),ss.$set(Gh);const Yh={};b&2&&(Yh.$$scope={dirty:b,ctx:i}),rs.$set(Yh);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:i}),is.$set(Rl);const Zh={};b&2&&(Zh.$$scope={dirty:b,ctx:i}),ls.$set(Zh);const em={};b&2&&(em.$$scope={dirty:b,ctx:i}),cs.$set(em);const tm={};b&2&&(tm.$$scope={dirty:b,ctx:i}),ps.$set(tm);const po={};b&2&&(po.$$scope={dirty:b,ctx:i}),hs.$set(po);const ho={};b&2&&(ho.$$scope={dirty:b,ctx:i}),ms.$set(ho);const om={};b&2&&(om.$$scope={dirty:b,ctx:i}),fs.$set(om);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:i}),gs.$set(nm);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:i}),_s.$set(sm);const wn={};b&2&&(wn.$$scope={dirty:b,ctx:i}),bs.$set(wn);const am={};b&2&&(am.$$scope={dirty:b,ctx:i}),ys.$set(am);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:i}),vs.$set(rm);const El={};b&2&&(El.$$scope={dirty:b,ctx:i}),Ts.$set(El);const im={};b&2&&(im.$$scope={dirty:b,ctx:i}),Ms.$set(im);const lm={};b&2&&(lm.$$scope={dirty:b,ctx:i}),$s.$set(lm);const dm={};b&2&&(dm.$$scope={dirty:b,ctx:i}),Fs.$set(dm);const ft={};b&2&&(ft.$$scope={dirty:b,ctx:i}),xs.$set(ft);const mo={};b&2&&(mo.$$scope={dirty:b,ctx:i}),Rs.$set(mo);const cm={};b&2&&(cm.$$scope={dirty:b,ctx:i}),Es.$set(cm);const pm={};b&2&&(pm.$$scope={dirty:b,ctx:i}),zs.$set(pm);const hm={};b&2&&(hm.$$scope={dirty:b,ctx:i}),qs.$set(hm);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:i}),Cs.$set(zl);const mm={};b&2&&(mm.$$scope={dirty:b,ctx:i}),js.$set(mm);const Mn={};b&2&&(Mn.$$scope={dirty:b,ctx:i}),As.$set(Mn);const um={};b&2&&(um.$$scope={dirty:b,ctx:i}),Os.$set(um);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:i}),Is.$set(ql);const Ad={};b&2&&(Ad.$$scope={dirty:b,ctx:i}),Ds.$set(Ad);const fm={};b&2&&(fm.$$scope={dirty:b,ctx:i}),Bs.$set(fm);const Od={};b&2&&(Od.$$scope={dirty:b,ctx:i}),Ws.$set(Od);const gm={};b&2&&(gm.$$scope={dirty:b,ctx:i}),Qs.$set(gm);const Xl={};b&2&&(Xl.$$scope={dirty:b,ctx:i}),Hs.$set(Xl);const Cl={};b&2&&(Cl.$$scope={dirty:b,ctx:i}),Vs.$set(Cl);const _m={};b&2&&(_m.$$scope={dirty:b,ctx:i}),Js.$set(_m)},i(i){iu||(M(l.$$.fragment,i),M(L.$$.fragment,i),M(E.$$.fragment,i),M(Oe.$$.fragment,i),M($n.$$.fragment,i),M(ua.$$.fragment,i),M(fa.$$.fragment,i),M(ba.$$.fragment,i),M(ya.$$.fragment,i),M(Ta.$$.fragment,i),M(wa.$$.fragment,i),M(Ma.$$.fragment,i),M($a.$$.fragment,i),M(La.$$.fragment,i),M(Ea.$$.fragment,i),M(za.$$.fragment,i),M(qa.$$.fragment,i),M(Oa.$$.fragment,i),M(Xn.$$.fragment,i),M(Cn.$$.fragment,i),M(Na.$$.fragment,i),M(Ia.$$.fragment,i),M(Ua.$$.fragment,i),M(Pn.$$.fragment,i),M(An.$$.fragment,i),M(Qa.$$.fragment,i),M(Ha.$$.fragment,i),M(Ya.$$.fragment,i),M(Nn.$$.fragment,i),M(In.$$.fragment,i),M(Dn.$$.fragment,i),M(Za.$$.fragment,i),M(er.$$.fragment,i),M(sr.$$.fragment,i),M(Bn.$$.fragment,i),M(Wn.$$.fragment,i),M(Un.$$.fragment,i),M(Qn.$$.fragment,i),M(Hn.$$.fragment,i),M(ar.$$.fragment,i),M(rr.$$.fragment,i),M(cr.$$.fragment,i),M(Vn.$$.fragment,i),M(Jn.$$.fragment,i),M(pr.$$.fragment,i),M(hr.$$.fragment,i),M(gr.$$.fragment,i),M(Yn.$$.fragment,i),M(Zn.$$.fragment,i),M(es.$$.fragment,i),M(_r.$$.fragment,i),M(br.$$.fragment,i),M(Tr.$$.fragment,i),M(os.$$.fragment,i),M(ns.$$.fragment,i),M(ss.$$.fragment,i),M(wr.$$.fragment,i),M(Mr.$$.fragment,i),M(rs.$$.fragment,i),M(Rr.$$.fragment,i),M(is.$$.fragment,i),M(ls.$$.fragment,i),M(Er.$$.fragment,i),M(zr.$$.fragment,i),M(cs.$$.fragment,i),M(Ar.$$.fragment,i),M(ps.$$.fragment,i),M(hs.$$.fragment,i),M(ms.$$.fragment,i),M(Or.$$.fragment,i),M(Nr.$$.fragment,i),M(fs.$$.fragment,i),M(Wr.$$.fragment,i),M(gs.$$.fragment,i),M(_s.$$.fragment,i),M(bs.$$.fragment,i),M(Ur.$$.fragment,i),M(Qr.$$.fragment,i),M(ys.$$.fragment,i),M(Gr.$$.fragment,i),M(vs.$$.fragment,i),M(Ts.$$.fragment,i),M(Yr.$$.fragment,i),M(Zr.$$.fragment,i),M(Ms.$$.fragment,i),M(si.$$.fragment,i),M($s.$$.fragment,i),M(Fs.$$.fragment,i),M(xs.$$.fragment,i),M(ai.$$.fragment,i),M(ri.$$.fragment,i),M(Rs.$$.fragment,i),M(pi.$$.fragment,i),M(Es.$$.fragment,i),M(zs.$$.fragment,i),M(qs.$$.fragment,i),M(hi.$$.fragment,i),M(mi.$$.fragment,i),M(Ti.$$.fragment,i),M(Cs.$$.fragment,i),M(js.$$.fragment,i),M(wi.$$.fragment,i),M(Mi.$$.fragment,i),M(qi.$$.fragment,i),M(As.$$.fragment,i),M(Os.$$.fragment,i),M(Xi.$$.fragment,i),M(Ci.$$.fragment,i),M(Bi.$$.fragment,i),M(Is.$$.fragment,i),M(Ds.$$.fragment,i),M(Wi.$$.fragment,i),M(Ui.$$.fragment,i),M(el.$$.fragment,i),M(Bs.$$.fragment,i),M(Ws.$$.fragment,i),M(tl.$$.fragment,i),M(ol.$$.fragment,i),M(pl.$$.fragment,i),M(Qs.$$.fragment,i),M(Hs.$$.fragment,i),M(hl.$$.fragment,i),M(ml.$$.fragment,i),M(Tl.$$.fragment,i),M(Vs.$$.fragment,i),M(Js.$$.fragment,i),iu=!0)},o(i){$(l.$$.fragment,i),$(L.$$.fragment,i),$(E.$$.fragment,i),$(Oe.$$.fragment,i),$($n.$$.fragment,i),$(ua.$$.fragment,i),$(fa.$$.fragment,i),$(ba.$$.fragment,i),$(ya.$$.fragment,i),$(Ta.$$.fragment,i),$(wa.$$.fragment,i),$(Ma.$$.fragment,i),$($a.$$.fragment,i),$(La.$$.fragment,i),$(Ea.$$.fragment,i),$(za.$$.fragment,i),$(qa.$$.fragment,i),$(Oa.$$.fragment,i),$(Xn.$$.fragment,i),$(Cn.$$.fragment,i),$(Na.$$.fragment,i),$(Ia.$$.fragment,i),$(Ua.$$.fragment,i),$(Pn.$$.fragment,i),$(An.$$.fragment,i),$(Qa.$$.fragment,i),$(Ha.$$.fragment,i),$(Ya.$$.fragment,i),$(Nn.$$.fragment,i),$(In.$$.fragment,i),$(Dn.$$.fragment,i),$(Za.$$.fragment,i),$(er.$$.fragment,i),$(sr.$$.fragment,i),$(Bn.$$.fragment,i),$(Wn.$$.fragment,i),$(Un.$$.fragment,i),$(Qn.$$.fragment,i),$(Hn.$$.fragment,i),$(ar.$$.fragment,i),$(rr.$$.fragment,i),$(cr.$$.fragment,i),$(Vn.$$.fragment,i),$(Jn.$$.fragment,i),$(pr.$$.fragment,i),$(hr.$$.fragment,i),$(gr.$$.fragment,i),$(Yn.$$.fragment,i),$(Zn.$$.fragment,i),$(es.$$.fragment,i),$(_r.$$.fragment,i),$(br.$$.fragment,i),$(Tr.$$.fragment,i),$(os.$$.fragment,i),$(ns.$$.fragment,i),$(ss.$$.fragment,i),$(wr.$$.fragment,i),$(Mr.$$.fragment,i),$(rs.$$.fragment,i),$(Rr.$$.fragment,i),$(is.$$.fragment,i),$(ls.$$.fragment,i),$(Er.$$.fragment,i),$(zr.$$.fragment,i),$(cs.$$.fragment,i),$(Ar.$$.fragment,i),$(ps.$$.fragment,i),$(hs.$$.fragment,i),$(ms.$$.fragment,i),$(Or.$$.fragment,i),$(Nr.$$.fragment,i),$(fs.$$.fragment,i),$(Wr.$$.fragment,i),$(gs.$$.fragment,i),$(_s.$$.fragment,i),$(bs.$$.fragment,i),$(Ur.$$.fragment,i),$(Qr.$$.fragment,i),$(ys.$$.fragment,i),$(Gr.$$.fragment,i),$(vs.$$.fragment,i),$(Ts.$$.fragment,i),$(Yr.$$.fragment,i),$(Zr.$$.fragment,i),$(Ms.$$.fragment,i),$(si.$$.fragment,i),$($s.$$.fragment,i),$(Fs.$$.fragment,i),$(xs.$$.fragment,i),$(ai.$$.fragment,i),$(ri.$$.fragment,i),$(Rs.$$.fragment,i),$(pi.$$.fragment,i),$(Es.$$.fragment,i),$(zs.$$.fragment,i),$(qs.$$.fragment,i),$(hi.$$.fragment,i),$(mi.$$.fragment,i),$(Ti.$$.fragment,i),$(Cs.$$.fragment,i),$(js.$$.fragment,i),$(wi.$$.fragment,i),$(Mi.$$.fragment,i),$(qi.$$.fragment,i),$(As.$$.fragment,i),$(Os.$$.fragment,i),$(Xi.$$.fragment,i),$(Ci.$$.fragment,i),$(Bi.$$.fragment,i),$(Is.$$.fragment,i),$(Ds.$$.fragment,i),$(Wi.$$.fragment,i),$(Ui.$$.fragment,i),$(el.$$.fragment,i),$(Bs.$$.fragment,i),$(Ws.$$.fragment,i),$(tl.$$.fragment,i),$(ol.$$.fragment,i),$(pl.$$.fragment,i),$(Qs.$$.fragment,i),$(Hs.$$.fragment,i),$(hl.$$.fragment,i),$(ml.$$.fragment,i),$(Tl.$$.fragment,i),$(Vs.$$.fragment,i),$(Js.$$.fragment,i),iu=!1},d(i){t(d),i&&t(g),i&&t(c),F(l),i&&t(be),i&&t(O),F(L),i&&t(ke),i&&t(D),i&&t(ye),i&&t(B),i&&t(ve),i&&t(W),i&&t(ne),i&&t(q),i&&t(Te),i&&t(S),i&&t(we),i&&t(se),i&&t(P),i&&t(ae),F(E),i&&t(We),i&&t(z),F(Oe),F($n),i&&t(km),i&&t(zo),F(ua),i&&t(ym),i&&t(st),F(fa),F(ba),F(ya),F(Ta),F(wa),i&&t(vm),i&&t(qo),F(Ma),i&&t(Tm),i&&t(vt),F($a),F(La),F(Ea),i&&t(wm),i&&t(Xo),F(za),i&&t(Mm),i&&t(Ze),F(qa),F(Oa),F(Xn),F(Cn),i&&t($m),i&&t(jo),F(Na),i&&t(Fm),i&&t(Tt),F(Ia),F(Ua),F(Pn),F(An),i&&t(xm),i&&t(Ao),F(Qa),i&&t(Lm),i&&t(wt),F(Ha),F(Ya),F(Nn),F(In),F(Dn),i&&t(Rm),i&&t(No),F(Za),i&&t(Em),i&&t(Mt),F(er),F(sr),F(Bn),F(Wn),F(Un),F(Qn),F(Hn),i&&t(zm),i&&t(Do),F(ar),i&&t(qm),i&&t($t),F(rr),F(cr),F(Vn),F(Jn),i&&t(Xm),i&&t(Bo),F(pr),i&&t(Cm),i&&t(Ft),F(hr),F(gr),F(Yn),F(Zn),F(es),i&&t(jm),i&&t(Uo),F(_r),i&&t(Pm),i&&t(xt),F(br),F(Tr),F(os),F(ns),F(ss),i&&t(Am),i&&t(Ko),F(wr),i&&t(Om),i&&t(at),F(Mr),F(rs),F(Rr),F(is),F(ls),i&&t(Nm),i&&t(Jo),F(Er),i&&t(Im),i&&t(rt),F(zr),F(cs),F(Ar),F(ps),F(hs),F(ms),i&&t(Dm),i&&t(Yo),F(Or),i&&t(Sm),i&&t(it),F(Nr),F(fs),F(Wr),F(gs),F(_s),F(bs),i&&t(Bm),i&&t(en),F(Ur),i&&t(Wm),i&&t(lt),F(Qr),F(ys),F(Gr),F(vs),F(Ts),i&&t(Um),i&&t(on),F(Yr),i&&t(Qm),i&&t(dt),F(Zr),F(Ms),F(si),F($s),F(Fs),F(xs),i&&t(Hm),i&&t(sn),F(ai),i&&t(Km),i&&t(ct),F(ri),F(Rs),F(pi),F(Es),F(zs),F(qs),i&&t(Vm),i&&t(ln),F(hi),i&&t(Jm),i&&t(pt),F(mi),F(Ti),F(Cs),F(js),i&&t(Gm),i&&t(cn),F(wi),i&&t(Ym),i&&t(ht),F(Mi),F(qi),F(As),F(Os),i&&t(Zm),i&&t(mn),F(Xi),i&&t(eu),i&&t(et),F(Ci),F(Bi),F(Is),F(Ds),i&&t(tu),i&&t(fn),F(Wi),i&&t(ou),i&&t(tt),F(Ui),F(el),F(Bs),F(Ws),i&&t(nu),i&&t(_n),F(tl),i&&t(su),i&&t(ot),F(ol),F(pl),F(Qs),F(Hs),i&&t(au),i&&t(kn),F(hl),i&&t(ru),i&&t(nt),F(ml),F(Tl),F(Vs),F(Js)}}}const HR={local:"xlmroberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaConfig",title:"XLMRobertaConfig"},{local:"transformers.XLMRobertaTokenizer",title:"XLMRobertaTokenizer"},{local:"transformers.XLMRobertaTokenizerFast",title:"XLMRobertaTokenizerFast"},{local:"transformers.XLMRobertaModel",title:"XLMRobertaModel"},{local:"transformers.XLMRobertaForCausalLM",title:"XLMRobertaForCausalLM"},{local:"transformers.XLMRobertaForMaskedLM",title:"XLMRobertaForMaskedLM"},{local:"transformers.XLMRobertaForSequenceClassification",title:"XLMRobertaForSequenceClassification"},{local:"transformers.XLMRobertaForMultipleChoice",title:"XLMRobertaForMultipleChoice"},{local:"transformers.XLMRobertaForTokenClassification",title:"XLMRobertaForTokenClassification"},{local:"transformers.XLMRobertaForQuestionAnswering",title:"XLMRobertaForQuestionAnswering"},{local:"transformers.TFXLMRobertaModel",title:"TFXLMRobertaModel"},{local:"transformers.TFXLMRobertaForMaskedLM",title:"TFXLMRobertaForMaskedLM"},{local:"transformers.TFXLMRobertaForSequenceClassification",title:"TFXLMRobertaForSequenceClassification"},{local:"transformers.TFXLMRobertaForMultipleChoice",title:"TFXLMRobertaForMultipleChoice"},{local:"transformers.TFXLMRobertaForTokenClassification",title:"TFXLMRobertaForTokenClassification"},{local:"transformers.TFXLMRobertaForQuestionAnswering",title:"TFXLMRobertaForQuestionAnswering"},{local:"transformers.FlaxXLMRobertaModel",title:"FlaxXLMRobertaModel"},{local:"transformers.FlaxXLMRobertaForMaskedLM",title:"FlaxXLMRobertaForMaskedLM"},{local:"transformers.FlaxXLMRobertaForSequenceClassification",title:"FlaxXLMRobertaForSequenceClassification"},{local:"transformers.FlaxXLMRobertaForMultipleChoice",title:"FlaxXLMRobertaForMultipleChoice"},{local:"transformers.FlaxXLMRobertaForTokenClassification",title:"FlaxXLMRobertaForTokenClassification"},{local:"transformers.FlaxXLMRobertaForQuestionAnswering",title:"FlaxXLMRobertaForQuestionAnswering"}],title:"XLM-RoBERTa"};function KR(x){return WL(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tE extends IL{constructor(d){super();DL(this,d,KR,QR,SL,{})}}export{tE as default,HR as metadata};
