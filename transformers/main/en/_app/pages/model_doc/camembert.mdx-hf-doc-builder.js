import{S as tT,i as oT,s as nT,e as a,k as p,w as T,t as o,M as sT,c as r,d as t,m as h,a as i,x as w,h as n,b as g,G as e,g as b,y as v,q as $,o as C,B as F,v as aT,L as Be}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function rT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertConfig, CamembertModel

# Initializing a Camembert camembert-base style configuration
configuration = CamembertConfig()

# Initializing a model (with random weights) from the camembert-base style configuration
model = CamembertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertConfig, CamembertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Camembert camembert-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = CamembertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the camembert-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function iT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function lT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertModel
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertModel.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertModel.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function dT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function cT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForCausalLM, CamembertConfig
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
config = CamembertConfig.from_pretrained("camembert-base")
config.is_decoder = True
model = CamembertForCausalLM.from_pretrained("camembert-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForCausalLM, CamembertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = CamembertConfig.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function mT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function pT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function hT(z){let l,_;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function uT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function fT(z){let l,_,c,u,y;return u=new We({props:{code:`import torch
from transformers import CamembertTokenizer, CamembertForSequenceClassification

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of single-label classification:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of single-label classification:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function gT(z){let l,_;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function _T(z){let l,_,c,u,y;return u=new We({props:{code:`import torch
from transformers import CamembertTokenizer, CamembertForSequenceClassification

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of multi-label classification:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of multi-label classification:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function bT(z){let l,_;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CamembertForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function kT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function yT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForMultipleChoice
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMultipleChoice.from_pretrained("camembert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function TT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function wT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForTokenClassification
import torch

tokenizer = CamembertTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = CamembertForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function vT(z){let l,_;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function $T(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function CT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForQuestionAnswering
import torch

tokenizer = CamembertTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = CamembertForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function FT(z){let l,_;return l=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function ET(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function MT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function zT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertModel
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertModel.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertModel.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function xT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function qT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function jT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForCausalLM
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForCausalLM.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function PT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function LT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function OT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function NT(z){let l,_;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function AT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function DT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function IT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForSequenceClassification
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFCamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function ST(z){let l,_;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFCamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function BT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function WT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function RT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMultipleChoice
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMultipleChoice.from_pretrained("camembert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function UT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function KT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function HT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForTokenClassification
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFCamembertForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function QT(z){let l,_;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function VT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),q=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ue=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),ve=o("model.fit()"),fe=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a("code"),Ce=o("fit()"),ge=o(" and "),W=a("code"),Fe=o("predict()"),_e=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=p(),j=a("ul"),O=a("li"),be=o("a single Tensor with "),U=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),K=a("code"),ze=o("model(input_ids)"),xe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=a("code"),ce=o("model([input_ids, attention_mask])"),qe=o(" or "),X=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),ke=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ye=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);q=r(Y,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ue=h(Y),I=r(Y,"LI",{});var Ie=i(I);re=n(Ie,"having all inputs as a list, tuple or dict in the first positional argument."),Ie.forEach(t),Y.forEach(t),Z=h(f),E=r(f,"P",{});var x=i(E);we=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(x,"CODE",{});var Ke=i(H);ve=n(Ke,"model.fit()"),Ke.forEach(t),fe=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(x,"CODE",{});var Ae=i(B);$e=n(Ae,"model.fit()"),Ae.forEach(t),le=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r(x,"CODE",{});var He=i(J);Ce=n(He,"fit()"),He.forEach(t),ge=n(x," and "),W=r(x,"CODE",{});var Qe=i(W);Fe=n(Qe,"predict()"),Qe.forEach(t),_e=n(x,`, such as when creating your own layers or models with
the Keras `),R=r(x,"CODE",{});var Ve=i(R);pe=n(Ve,"Functional"),Ve.forEach(t),Ee=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),oe=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var V=i(O);be=n(V,"a single Tensor with "),U=r(V,"CODE",{});var Oe=i(U);de=n(Oe,"input_ids"),Oe.forEach(t),Me=n(V," only and nothing else: "),K=r(V,"CODE",{});var Ne=i(K);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),V.forEach(t),xe=h(A),L=r(A,"LI",{});var Q=i(L);se=n(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),G=r(Q,"CODE",{});var De=i(G);ce=n(De,"model([input_ids, attention_mask])"),De.forEach(t),qe=n(Q," or "),X=r(Q,"CODE",{});var Je=i(X);me=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Q.forEach(t),je=h(A),D=r(A,"LI",{});var he=i(D);ke=n(he,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(he,"CODE",{});var Ge=i(S);ie=n(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),he.forEach(t),A.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);Pe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var te=i(N);Le=n(te,"subclassing"),te.forEach(t),ye=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,q),e(q,Te),e(m,ue),e(m,I),e(I,re),b(f,Z,M),b(f,E,M),e(E,we),e(E,H),e(H,ve),e(E,fe),e(E,B),e(B,$e),e(E,le),e(E,J),e(J,Ce),e(E,ge),e(E,W),e(W,Fe),e(E,_e),e(E,R),e(R,pe),e(E,Ee),b(f,oe,M),b(f,j,M),e(j,O),e(O,be),e(O,U),e(U,de),e(O,Me),e(O,K),e(K,ze),e(j,xe),e(j,L),e(L,se),e(L,G),e(G,ce),e(L,qe),e(L,X),e(X,me),e(j,je),e(j,D),e(D,ke),e(D,S),e(S,ie),b(f,ee,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ye)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(oe),f&&t(j),f&&t(ee),f&&t(P)}}}function JT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function GT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForQuestionAnswering
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFCamembertForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||($(u.$$.fragment,d),y=!0)},o(d){C(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function XT(z){let l,_;return l=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||($(l.$$.fragment,c),_=!0)},o(c){C(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function YT(z){let l,_,c,u,y,d,m,q,Te,ue,I,re,Z,E,we,H,ve,fe,B,$e,le,J,Ce,ge,W,Fe,_e,R,pe,Ee,oe,j,O,be,U,de,Me,K,ze,xe,L,se,G,ce,qe,X,me,je,D,ke,S,ie,ee,P,Pe,N,Le,ye,f,M,Re,Y,Ue,Ie,x,Ke,Ae,He,Qe,Ve,A,V,Oe,Ne,Q,De,Je,he,Ge,ne,te,as,Qc,Bt,Vc,mr,Jc,Gc,pr,Xc,Yc,rs,Zc,em,tm,is,om,hr,nm,sm,am,Rt,ls,rm,ui,im,lm,ds,ur,dm,fi,cm,mm,fr,pm,gi,hm,um,Bo,cs,fm,ms,gm,_i,_m,bm,km,Wo,ps,ym,bi,Tm,wm,gr,hs,gd,ro,Ro,ki,us,vm,yi,$m,_d,mt,fs,Cm,Et,Fm,Ti,Em,Mm,_r,zm,xm,br,qm,jm,gs,Pm,Lm,Om,_s,Nm,kr,Am,Dm,Im,Ut,bs,Sm,wi,Bm,Wm,ks,yr,Rm,vi,Um,Km,Tr,Hm,$i,Qm,Vm,Uo,ys,Jm,Ci,Gm,bd,io,Ko,Fi,Ts,Xm,Ei,Ym,kd,Xe,ws,Zm,Mi,ep,tp,vs,op,wr,np,sp,ap,$s,rp,Cs,ip,lp,dp,Fs,cp,zi,mp,pp,hp,tt,up,xi,fp,gp,qi,_p,bp,ji,kp,yp,Pi,Tp,wp,Li,vp,$p,Oi,Cp,Fp,Ep,Ho,Mp,Ni,zp,xp,Es,qp,jp,Mt,Ms,Pp,lo,Lp,vr,Op,Np,Ai,Ap,Dp,Ip,Qo,Sp,Vo,yd,co,Jo,Di,zs,Bp,Ii,Wp,Td,pt,xs,Rp,qs,Up,Si,Kp,Hp,Qp,js,Vp,$r,Jp,Gp,Xp,Ps,Yp,Ls,Zp,eh,th,zt,Os,oh,mo,nh,Cr,sh,ah,Bi,rh,ih,lh,Go,dh,Xo,wd,po,Yo,Wi,Ns,ch,Ri,mh,vd,ht,As,ph,Ds,hh,Ui,uh,fh,gh,Is,_h,Fr,bh,kh,yh,Ss,Th,Bs,wh,vh,$h,bt,Ws,Ch,ho,Fh,Er,Eh,Mh,Ki,zh,xh,qh,Zo,jh,en,Ph,tn,$d,uo,on,Hi,Rs,Lh,Qi,Oh,Cd,ut,Us,Nh,Vi,Ah,Dh,Ks,Ih,Mr,Sh,Bh,Wh,Hs,Rh,Qs,Uh,Kh,Hh,et,Vs,Qh,fo,Vh,zr,Jh,Gh,Ji,Xh,Yh,Zh,nn,eu,sn,tu,an,ou,rn,nu,ln,Fd,go,dn,Gi,Js,su,Xi,au,Ed,ft,Gs,ru,Yi,iu,lu,Xs,du,xr,cu,mu,pu,Ys,hu,Zs,uu,fu,gu,xt,ea,_u,_o,bu,qr,ku,yu,Zi,Tu,wu,vu,cn,$u,mn,Md,bo,pn,el,ta,Cu,tl,Fu,zd,gt,oa,Eu,ol,Mu,zu,na,xu,jr,qu,ju,Pu,sa,Lu,aa,Ou,Nu,Au,kt,ra,Du,ko,Iu,Pr,Su,Bu,nl,Wu,Ru,Uu,hn,Ku,un,Hu,fn,xd,yo,gn,sl,ia,Qu,al,Vu,qd,_t,la,Ju,_n,Gu,rl,Xu,Yu,il,Zu,ef,da,tf,Lr,of,nf,sf,ca,af,ma,rf,lf,df,yt,pa,cf,To,mf,Or,pf,hf,ll,uf,ff,gf,bn,_f,kn,bf,yn,jd,wo,Tn,dl,ha,kf,cl,yf,Pd,ot,ua,Tf,ml,wf,vf,fa,$f,Nr,Cf,Ff,Ef,ga,Mf,_a,zf,xf,qf,wn,jf,qt,ba,Pf,vo,Lf,Ar,Of,Nf,pl,Af,Df,If,vn,Sf,$n,Ld,$o,Cn,hl,ka,Bf,ul,Wf,Od,nt,ya,Rf,Ta,Uf,fl,Kf,Hf,Qf,wa,Vf,Dr,Jf,Gf,Xf,va,Yf,$a,Zf,eg,tg,Fn,og,jt,Ca,ng,Co,sg,Ir,ag,rg,gl,ig,lg,dg,En,cg,Mn,Nd,Fo,zn,_l,Fa,mg,bl,pg,Ad,st,Ea,hg,Ma,ug,kl,fg,gg,_g,za,bg,Sr,kg,yg,Tg,xa,wg,qa,vg,$g,Cg,xn,Fg,Tt,ja,Eg,Eo,Mg,Br,zg,xg,yl,qg,jg,Pg,qn,Lg,jn,Og,Pn,Dd,Mo,Ln,Tl,Pa,Ng,wl,Ag,Id,at,La,Dg,vl,Ig,Sg,Oa,Bg,Wr,Wg,Rg,Ug,Na,Kg,Aa,Hg,Qg,Vg,On,Jg,wt,Da,Gg,zo,Xg,Rr,Yg,Zg,$l,e_,t_,o_,Nn,n_,An,s_,Dn,Sd,xo,In,Cl,Ia,a_,Fl,r_,Bd,rt,Sa,i_,El,l_,d_,Ba,c_,Ur,m_,p_,h_,Wa,u_,Ra,f_,g_,__,Sn,b_,Pt,Ua,k_,qo,y_,Kr,T_,w_,Ml,v_,$_,C_,Bn,F_,Wn,Wd,jo,Rn,zl,Ka,E_,xl,M_,Rd,it,Ha,z_,ql,x_,q_,Qa,j_,Hr,P_,L_,O_,Va,N_,Ja,A_,D_,I_,Un,S_,vt,Ga,B_,Po,W_,Qr,R_,U_,jl,K_,H_,Q_,Kn,V_,Hn,J_,Qn,Ud,Lo,Vn,Pl,Xa,G_,Ll,X_,Kd,lt,Ya,Y_,Oo,Z_,Ol,eb,tb,Nl,ob,nb,sb,Za,ab,Vr,rb,ib,lb,er,db,tr,cb,mb,pb,Jn,hb,$t,or,ub,No,fb,Jr,gb,_b,Al,bb,kb,yb,Gn,Tb,Xn,wb,Yn,Hd;return d=new Ze({}),E=new Ze({}),P=new Ze({}),M=new ae({props:{name:"class transformers.CamembertConfig",anchor:"transformers.CamembertConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/configuration_camembert.py#L39"}}),A=new Se({props:{anchor:"transformers.CamembertConfig.example",$$slots:{default:[rT]},$$scope:{ctx:z}}}),De=new Ze({}),as=new ae({props:{name:"class transformers.CamembertTokenizer",anchor:"transformers.CamembertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.CamembertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.CamembertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L45"}}),ls=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L161",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new ae({props:{name:"get_special_tokens_mask",anchor:"transformers.CamembertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L187",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ps=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L214",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hs=new ae({props:{name:"save_vocabulary",anchor:"transformers.CamembertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L298"}}),us=new Ze({}),fs=new ae({props:{name:"class transformers.CamembertTokenizerFast",anchor:"transformers.CamembertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L53"}}),bs=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L145",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ys=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L171",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ts=new Ze({}),ws=new ae({props:{name:"class transformers.CamembertModel",anchor:"transformers.CamembertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.CamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L742"}}),Ms=new ae({props:{name:"forward",anchor:"transformers.CamembertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Qo=new Ye({props:{$$slots:{default:[iT]},$$scope:{ctx:z}}}),Vo=new Se({props:{anchor:"transformers.CamembertModel.forward.example",$$slots:{default:[lT]},$$scope:{ctx:z}}}),zs=new Ze({}),xs=new ae({props:{name:"class transformers.CamembertForCausalLM",anchor:"transformers.CamembertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1423"}}),Os=new ae({props:{name:"forward",anchor:"transformers.CamembertForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1449",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Go=new Ye({props:{$$slots:{default:[dT]},$$scope:{ctx:z}}}),Xo=new Se({props:{anchor:"transformers.CamembertForCausalLM.forward.example",$$slots:{default:[cT]},$$scope:{ctx:z}}}),Ns=new Ze({}),As=new ae({props:{name:"class transformers.CamembertForMaskedLM",anchor:"transformers.CamembertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L931"}}),Ws=new ae({props:{name:"forward",anchor:"transformers.CamembertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Zo=new Ye({props:{$$slots:{default:[mT]},$$scope:{ctx:z}}}),en=new Se({props:{anchor:"transformers.CamembertForMaskedLM.forward.example",$$slots:{default:[pT]},$$scope:{ctx:z}}}),tn=new Se({props:{anchor:"transformers.CamembertForMaskedLM.forward.example-2",$$slots:{default:[hT]},$$scope:{ctx:z}}}),Rs=new Ze({}),Us=new ae({props:{name:"class transformers.CamembertForSequenceClassification",anchor:"transformers.CamembertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1036"}}),Vs=new ae({props:{name:"forward",anchor:"transformers.CamembertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),nn=new Ye({props:{$$slots:{default:[uT]},$$scope:{ctx:z}}}),sn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example",$$slots:{default:[fT]},$$scope:{ctx:z}}}),an=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-2",$$slots:{default:[gT]},$$scope:{ctx:z}}}),rn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-3",$$slots:{default:[_T]},$$scope:{ctx:z}}}),ln=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-4",$$slots:{default:[bT]},$$scope:{ctx:z}}}),Js=new Ze({}),Gs=new ae({props:{name:"class transformers.CamembertForMultipleChoice",anchor:"transformers.CamembertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1137"}}),ea=new ae({props:{name:"forward",anchor:"transformers.CamembertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1150",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),cn=new Ye({props:{$$slots:{default:[kT]},$$scope:{ctx:z}}}),mn=new Se({props:{anchor:"transformers.CamembertForMultipleChoice.forward.example",$$slots:{default:[yT]},$$scope:{ctx:z}}}),ta=new Ze({}),oa=new ae({props:{name:"class transformers.CamembertForTokenClassification",anchor:"transformers.CamembertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1233"}}),ra=new ae({props:{name:"forward",anchor:"transformers.CamembertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),hn=new Ye({props:{$$slots:{default:[TT]},$$scope:{ctx:z}}}),un=new Se({props:{anchor:"transformers.CamembertForTokenClassification.forward.example",$$slots:{default:[wT]},$$scope:{ctx:z}}}),fn=new Se({props:{anchor:"transformers.CamembertForTokenClassification.forward.example-2",$$slots:{default:[vT]},$$scope:{ctx:z}}}),ia=new Ze({}),la=new ae({props:{name:"class transformers.CamembertForQuestionAnswering",anchor:"transformers.CamembertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1321"}}),pa=new ae({props:{name:"forward",anchor:"transformers.CamembertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1335",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),bn=new Ye({props:{$$slots:{default:[$T]},$$scope:{ctx:z}}}),kn=new Se({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example",$$slots:{default:[CT]},$$scope:{ctx:z}}}),yn=new Se({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example-2",$$slots:{default:[FT]},$$scope:{ctx:z}}}),ha=new Ze({}),ua=new ae({props:{name:"class transformers.TFCamembertModel",anchor:"transformers.TFCamembertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L923"}}),wn=new Ye({props:{$$slots:{default:[ET]},$$scope:{ctx:z}}}),ba=new ae({props:{name:"call",anchor:"transformers.TFCamembertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L928",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),vn=new Ye({props:{$$slots:{default:[MT]},$$scope:{ctx:z}}}),$n=new Se({props:{anchor:"transformers.TFCamembertModel.call.example",$$slots:{default:[zT]},$$scope:{ctx:z}}}),ka=new Ze({}),ya=new ae({props:{name:"class transformers.TFCamembertForCausalLM",anchor:"transformers.TFCamembertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1594"}}),Fn=new Ye({props:{$$slots:{default:[xT]},$$scope:{ctx:z}}}),Ca=new ae({props:{name:"call",anchor:"transformers.TFCamembertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFCamembertForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new Ye({props:{$$slots:{default:[qT]},$$scope:{ctx:z}}}),Mn=new Se({props:{anchor:"transformers.TFCamembertForCausalLM.call.example",$$slots:{default:[jT]},$$scope:{ctx:z}}}),Fa=new Ze({}),Ea=new ae({props:{name:"class transformers.TFCamembertForMaskedLM",anchor:"transformers.TFCamembertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1072"}}),xn=new Ye({props:{$$slots:{default:[PT]},$$scope:{ctx:z}}}),ja=new ae({props:{name:"call",anchor:"transformers.TFCamembertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),qn=new Ye({props:{$$slots:{default:[LT]},$$scope:{ctx:z}}}),jn=new Se({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example",$$slots:{default:[OT]},$$scope:{ctx:z}}}),Pn=new Se({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example-2",$$slots:{default:[NT]},$$scope:{ctx:z}}}),Pa=new Ze({}),La=new ae({props:{name:"class transformers.TFCamembertForSequenceClassification",anchor:"transformers.TFCamembertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1194"}}),On=new Ye({props:{$$slots:{default:[AT]},$$scope:{ctx:z}}}),Da=new ae({props:{name:"call",anchor:"transformers.TFCamembertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1205",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Nn=new Ye({props:{$$slots:{default:[DT]},$$scope:{ctx:z}}}),An=new Se({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example",$$slots:{default:[IT]},$$scope:{ctx:z}}}),Dn=new Se({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example-2",$$slots:{default:[ST]},$$scope:{ctx:z}}}),Ia=new Ze({}),Sa=new ae({props:{name:"class transformers.TFCamembertForMultipleChoice",anchor:"transformers.TFCamembertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1371"}}),Sn=new Ye({props:{$$slots:{default:[BT]},$$scope:{ctx:z}}}),Ua=new ae({props:{name:"call",anchor:"transformers.TFCamembertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1395",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Bn=new Ye({props:{$$slots:{default:[WT]},$$scope:{ctx:z}}}),Wn=new Se({props:{anchor:"transformers.TFCamembertForMultipleChoice.call.example",$$slots:{default:[RT]},$$scope:{ctx:z}}}),Ka=new Ze({}),Ha=new ae({props:{name:"class transformers.TFCamembertForTokenClassification",anchor:"transformers.TFCamembertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1279"}}),Un=new Ye({props:{$$slots:{default:[UT]},$$scope:{ctx:z}}}),Ga=new ae({props:{name:"call",anchor:"transformers.TFCamembertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1297",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Kn=new Ye({props:{$$slots:{default:[KT]},$$scope:{ctx:z}}}),Hn=new Se({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example",$$slots:{default:[HT]},$$scope:{ctx:z}}}),Qn=new Se({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example-2",$$slots:{default:[QT]},$$scope:{ctx:z}}}),Xa=new Ze({}),Ya=new ae({props:{name:"class transformers.TFCamembertForQuestionAnswering",anchor:"transformers.TFCamembertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1495"}}),Jn=new Ye({props:{$$slots:{default:[VT]},$$scope:{ctx:z}}}),or=new ae({props:{name:"call",anchor:"transformers.TFCamembertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1508",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Gn=new Ye({props:{$$slots:{default:[JT]},$$scope:{ctx:z}}}),Xn=new Se({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example",$$slots:{default:[GT]},$$scope:{ctx:z}}}),Yn=new Se({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example-2",$$slots:{default:[XT]},$$scope:{ctx:z}}}),{c(){l=a("meta"),_=p(),c=a("h1"),u=a("a"),y=a("span"),T(d.$$.fragment),m=p(),q=a("span"),Te=o("CamemBERT"),ue=p(),I=a("h2"),re=a("a"),Z=a("span"),T(E.$$.fragment),we=p(),H=a("span"),ve=o("Overview"),fe=p(),B=a("p"),$e=o("The CamemBERT model was proposed in "),le=a("a"),J=o("CamemBERT: a Tasty French Language Model"),Ce=o(` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),ge=p(),W=a("p"),Fe=o("The abstract from the paper is the following:"),_e=p(),R=a("p"),pe=a("em"),Ee=o(`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),oe=p(),j=a("p"),O=o("Tips:"),be=p(),U=a("ul"),de=a("li"),Me=o("This implementation is the same as RoBERTa. Refer to the "),K=a("a"),ze=o("documentation of RoBERTa"),xe=o(` for usage examples
as well as the information relative to the inputs and outputs.`),L=p(),se=a("p"),G=o("This model was contributed by "),ce=a("a"),qe=o("camembert"),X=o(". The original code can be found "),me=a("a"),je=o("here"),D=o("."),ke=p(),S=a("h2"),ie=a("a"),ee=a("span"),T(P.$$.fragment),Pe=p(),N=a("span"),Le=o("CamembertConfig"),ye=p(),f=a("div"),T(M.$$.fragment),Re=p(),Y=a("p"),Ue=o("This class overrides "),Ie=a("a"),x=o("RobertaConfig"),Ke=o(`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
Camembert `),Ae=a("a"),He=o("camembert-base"),Qe=o(" architecture."),Ve=p(),T(A.$$.fragment),V=p(),Oe=a("h2"),Ne=a("a"),Q=a("span"),T(De.$$.fragment),Je=p(),he=a("span"),Ge=o("CamembertTokenizer"),ne=p(),te=a("div"),T(as.$$.fragment),Qc=p(),Bt=a("p"),Vc=o("Adapted from "),mr=a("a"),Jc=o("RobertaTokenizer"),Gc=o(" and "),pr=a("a"),Xc=o("XLNetTokenizer"),Yc=o(`. Construct a CamemBERT tokenizer. Based on
`),rs=a("a"),Zc=o("SentencePiece"),em=o("."),tm=p(),is=a("p"),om=o("This tokenizer inherits from "),hr=a("a"),nm=o("PreTrainedTokenizer"),sm=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),am=p(),Rt=a("div"),T(ls.$$.fragment),rm=p(),ui=a("p"),im=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),lm=p(),ds=a("ul"),ur=a("li"),dm=o("single sequence: "),fi=a("code"),cm=o("<s> X </s>"),mm=p(),fr=a("li"),pm=o("pair of sequences: "),gi=a("code"),hm=o("<s> A </s></s> B </s>"),um=p(),Bo=a("div"),T(cs.$$.fragment),fm=p(),ms=a("p"),gm=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_i=a("code"),_m=o("prepare_for_model"),bm=o(" method."),km=p(),Wo=a("div"),T(ps.$$.fragment),ym=p(),bi=a("p"),Tm=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),wm=p(),gr=a("div"),T(hs.$$.fragment),gd=p(),ro=a("h2"),Ro=a("a"),ki=a("span"),T(us.$$.fragment),vm=p(),yi=a("span"),$m=o("CamembertTokenizerFast"),_d=p(),mt=a("div"),T(fs.$$.fragment),Cm=p(),Et=a("p"),Fm=o("Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),Ti=a("em"),Em=o("tokenizers"),Mm=o(` library). Adapted from
`),_r=a("a"),zm=o("RobertaTokenizer"),xm=o(" and "),br=a("a"),qm=o("XLNetTokenizer"),jm=o(`. Based on
`),gs=a("a"),Pm=o("BPE"),Lm=o("."),Om=p(),_s=a("p"),Nm=o("This tokenizer inherits from "),kr=a("a"),Am=o("PreTrainedTokenizerFast"),Dm=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Im=p(),Ut=a("div"),T(bs.$$.fragment),Sm=p(),wi=a("p"),Bm=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),Wm=p(),ks=a("ul"),yr=a("li"),Rm=o("single sequence: "),vi=a("code"),Um=o("<s> X </s>"),Km=p(),Tr=a("li"),Hm=o("pair of sequences: "),$i=a("code"),Qm=o("<s> A </s></s> B </s>"),Vm=p(),Uo=a("div"),T(ys.$$.fragment),Jm=p(),Ci=a("p"),Gm=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),bd=p(),io=a("h2"),Ko=a("a"),Fi=a("span"),T(Ts.$$.fragment),Xm=p(),Ei=a("span"),Ym=o("CamembertModel"),kd=p(),Xe=a("div"),T(ws.$$.fragment),Zm=p(),Mi=a("p"),ep=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),tp=p(),vs=a("p"),op=o("This model inherits from "),wr=a("a"),np=o("PreTrainedModel"),sp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap=p(),$s=a("p"),rp=o("This model is also a PyTorch "),Cs=a("a"),ip=o("torch.nn.Module"),lp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dp=p(),Fs=a("p"),cp=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=a("em"),mp=o(`Attention is
all you need`),pp=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),hp=p(),tt=a("p"),up=o("To behave as a decoder the model needs to be initialized with the "),xi=a("code"),fp=o("is_decoder"),gp=o(` argument of the configuration set to
`),qi=a("code"),_p=o("True"),bp=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),ji=a("code"),kp=o("is_decoder"),yp=o(` argument and
`),Pi=a("code"),Tp=o("add_cross_attention"),wp=o(" set to "),Li=a("code"),vp=o("True"),$p=o("; an "),Oi=a("code"),Cp=o("encoder_hidden_states"),Fp=o(" is then expected as an input to the forward pass."),Ep=p(),Ho=a("p"),Mp=o(".. _"),Ni=a("em"),zp=o("Attention is all you need"),xp=o(": "),Es=a("a"),qp=o("https://arxiv.org/abs/1706.03762"),jp=p(),Mt=a("div"),T(Ms.$$.fragment),Pp=p(),lo=a("p"),Lp=o("The "),vr=a("a"),Op=o("CamembertModel"),Np=o(" forward method, overrides the "),Ai=a("code"),Ap=o("__call__"),Dp=o(" special method."),Ip=p(),T(Qo.$$.fragment),Sp=p(),T(Vo.$$.fragment),yd=p(),co=a("h2"),Jo=a("a"),Di=a("span"),T(zs.$$.fragment),Bp=p(),Ii=a("span"),Wp=o("CamembertForCausalLM"),Td=p(),pt=a("div"),T(xs.$$.fragment),Rp=p(),qs=a("p"),Up=o("CamemBERT Model with a "),Si=a("code"),Kp=o("language modeling"),Hp=o(" head on top for CLM fine-tuning."),Qp=p(),js=a("p"),Vp=o("This model inherits from "),$r=a("a"),Jp=o("PreTrainedModel"),Gp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xp=p(),Ps=a("p"),Yp=o("This model is also a PyTorch "),Ls=a("a"),Zp=o("torch.nn.Module"),eh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th=p(),zt=a("div"),T(Os.$$.fragment),oh=p(),mo=a("p"),nh=o("The "),Cr=a("a"),sh=o("CamembertForCausalLM"),ah=o(" forward method, overrides the "),Bi=a("code"),rh=o("__call__"),ih=o(" special method."),lh=p(),T(Go.$$.fragment),dh=p(),T(Xo.$$.fragment),wd=p(),po=a("h2"),Yo=a("a"),Wi=a("span"),T(Ns.$$.fragment),ch=p(),Ri=a("span"),mh=o("CamembertForMaskedLM"),vd=p(),ht=a("div"),T(As.$$.fragment),ph=p(),Ds=a("p"),hh=o("CamemBERT Model with a "),Ui=a("code"),uh=o("language modeling"),fh=o(" head on top."),gh=p(),Is=a("p"),_h=o("This model inherits from "),Fr=a("a"),bh=o("PreTrainedModel"),kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=p(),Ss=a("p"),Th=o("This model is also a PyTorch "),Bs=a("a"),wh=o("torch.nn.Module"),vh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$h=p(),bt=a("div"),T(Ws.$$.fragment),Ch=p(),ho=a("p"),Fh=o("The "),Er=a("a"),Eh=o("CamembertForMaskedLM"),Mh=o(" forward method, overrides the "),Ki=a("code"),zh=o("__call__"),xh=o(" special method."),qh=p(),T(Zo.$$.fragment),jh=p(),T(en.$$.fragment),Ph=p(),T(tn.$$.fragment),$d=p(),uo=a("h2"),on=a("a"),Hi=a("span"),T(Rs.$$.fragment),Lh=p(),Qi=a("span"),Oh=o("CamembertForSequenceClassification"),Cd=p(),ut=a("div"),T(Us.$$.fragment),Nh=p(),Vi=a("p"),Ah=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dh=p(),Ks=a("p"),Ih=o("This model inherits from "),Mr=a("a"),Sh=o("PreTrainedModel"),Bh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wh=p(),Hs=a("p"),Rh=o("This model is also a PyTorch "),Qs=a("a"),Uh=o("torch.nn.Module"),Kh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hh=p(),et=a("div"),T(Vs.$$.fragment),Qh=p(),fo=a("p"),Vh=o("The "),zr=a("a"),Jh=o("CamembertForSequenceClassification"),Gh=o(" forward method, overrides the "),Ji=a("code"),Xh=o("__call__"),Yh=o(" special method."),Zh=p(),T(nn.$$.fragment),eu=p(),T(sn.$$.fragment),tu=p(),T(an.$$.fragment),ou=p(),T(rn.$$.fragment),nu=p(),T(ln.$$.fragment),Fd=p(),go=a("h2"),dn=a("a"),Gi=a("span"),T(Js.$$.fragment),su=p(),Xi=a("span"),au=o("CamembertForMultipleChoice"),Ed=p(),ft=a("div"),T(Gs.$$.fragment),ru=p(),Yi=a("p"),iu=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),lu=p(),Xs=a("p"),du=o("This model inherits from "),xr=a("a"),cu=o("PreTrainedModel"),mu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pu=p(),Ys=a("p"),hu=o("This model is also a PyTorch "),Zs=a("a"),uu=o("torch.nn.Module"),fu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gu=p(),xt=a("div"),T(ea.$$.fragment),_u=p(),_o=a("p"),bu=o("The "),qr=a("a"),ku=o("CamembertForMultipleChoice"),yu=o(" forward method, overrides the "),Zi=a("code"),Tu=o("__call__"),wu=o(" special method."),vu=p(),T(cn.$$.fragment),$u=p(),T(mn.$$.fragment),Md=p(),bo=a("h2"),pn=a("a"),el=a("span"),T(ta.$$.fragment),Cu=p(),tl=a("span"),Fu=o("CamembertForTokenClassification"),zd=p(),gt=a("div"),T(oa.$$.fragment),Eu=p(),ol=a("p"),Mu=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),zu=p(),na=a("p"),xu=o("This model inherits from "),jr=a("a"),qu=o("PreTrainedModel"),ju=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=p(),sa=a("p"),Lu=o("This model is also a PyTorch "),aa=a("a"),Ou=o("torch.nn.Module"),Nu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Au=p(),kt=a("div"),T(ra.$$.fragment),Du=p(),ko=a("p"),Iu=o("The "),Pr=a("a"),Su=o("CamembertForTokenClassification"),Bu=o(" forward method, overrides the "),nl=a("code"),Wu=o("__call__"),Ru=o(" special method."),Uu=p(),T(hn.$$.fragment),Ku=p(),T(un.$$.fragment),Hu=p(),T(fn.$$.fragment),xd=p(),yo=a("h2"),gn=a("a"),sl=a("span"),T(ia.$$.fragment),Qu=p(),al=a("span"),Vu=o("CamembertForQuestionAnswering"),qd=p(),_t=a("div"),T(la.$$.fragment),Ju=p(),_n=a("p"),Gu=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=a("code"),Xu=o("span start logits"),Yu=o(" and "),il=a("code"),Zu=o("span end logits"),ef=p(),da=a("p"),tf=o("This model inherits from "),Lr=a("a"),of=o("PreTrainedModel"),nf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sf=p(),ca=a("p"),af=o("This model is also a PyTorch "),ma=a("a"),rf=o("torch.nn.Module"),lf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),df=p(),yt=a("div"),T(pa.$$.fragment),cf=p(),To=a("p"),mf=o("The "),Or=a("a"),pf=o("CamembertForQuestionAnswering"),hf=o(" forward method, overrides the "),ll=a("code"),uf=o("__call__"),ff=o(" special method."),gf=p(),T(bn.$$.fragment),_f=p(),T(kn.$$.fragment),bf=p(),T(yn.$$.fragment),jd=p(),wo=a("h2"),Tn=a("a"),dl=a("span"),T(ha.$$.fragment),kf=p(),cl=a("span"),yf=o("TFCamembertModel"),Pd=p(),ot=a("div"),T(ua.$$.fragment),Tf=p(),ml=a("p"),wf=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),vf=p(),fa=a("p"),$f=o("This model inherits from "),Nr=a("a"),Cf=o("TFPreTrainedModel"),Ff=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ef=p(),ga=a("p"),Mf=o("This model is also a "),_a=a("a"),zf=o("tf.keras.Model"),xf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qf=p(),T(wn.$$.fragment),jf=p(),qt=a("div"),T(ba.$$.fragment),Pf=p(),vo=a("p"),Lf=o("The "),Ar=a("a"),Of=o("TFCamembertModel"),Nf=o(" forward method, overrides the "),pl=a("code"),Af=o("__call__"),Df=o(" special method."),If=p(),T(vn.$$.fragment),Sf=p(),T($n.$$.fragment),Ld=p(),$o=a("h2"),Cn=a("a"),hl=a("span"),T(ka.$$.fragment),Bf=p(),ul=a("span"),Wf=o("TFCamembertForCasualLM"),Od=p(),nt=a("div"),T(ya.$$.fragment),Rf=p(),Ta=a("p"),Uf=o("CamemBERT Model with a "),fl=a("code"),Kf=o("language modeling"),Hf=o(" head on top for CLM fine-tuning."),Qf=p(),wa=a("p"),Vf=o("This model inherits from "),Dr=a("a"),Jf=o("TFPreTrainedModel"),Gf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xf=p(),va=a("p"),Yf=o("This model is also a "),$a=a("a"),Zf=o("tf.keras.Model"),eg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tg=p(),T(Fn.$$.fragment),og=p(),jt=a("div"),T(Ca.$$.fragment),ng=p(),Co=a("p"),sg=o("The "),Ir=a("a"),ag=o("TFCamembertForCausalLM"),rg=o(" forward method, overrides the "),gl=a("code"),ig=o("__call__"),lg=o(" special method."),dg=p(),T(En.$$.fragment),cg=p(),T(Mn.$$.fragment),Nd=p(),Fo=a("h2"),zn=a("a"),_l=a("span"),T(Fa.$$.fragment),mg=p(),bl=a("span"),pg=o("TFCamembertForMaskedLM"),Ad=p(),st=a("div"),T(Ea.$$.fragment),hg=p(),Ma=a("p"),ug=o("CamemBERT Model with a "),kl=a("code"),fg=o("language modeling"),gg=o(" head on top."),_g=p(),za=a("p"),bg=o("This model inherits from "),Sr=a("a"),kg=o("TFPreTrainedModel"),yg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tg=p(),xa=a("p"),wg=o("This model is also a "),qa=a("a"),vg=o("tf.keras.Model"),$g=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cg=p(),T(xn.$$.fragment),Fg=p(),Tt=a("div"),T(ja.$$.fragment),Eg=p(),Eo=a("p"),Mg=o("The "),Br=a("a"),zg=o("TFCamembertForMaskedLM"),xg=o(" forward method, overrides the "),yl=a("code"),qg=o("__call__"),jg=o(" special method."),Pg=p(),T(qn.$$.fragment),Lg=p(),T(jn.$$.fragment),Og=p(),T(Pn.$$.fragment),Dd=p(),Mo=a("h2"),Ln=a("a"),Tl=a("span"),T(Pa.$$.fragment),Ng=p(),wl=a("span"),Ag=o("TFCamembertForSequenceClassification"),Id=p(),at=a("div"),T(La.$$.fragment),Dg=p(),vl=a("p"),Ig=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Sg=p(),Oa=a("p"),Bg=o("This model inherits from "),Wr=a("a"),Wg=o("TFPreTrainedModel"),Rg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ug=p(),Na=a("p"),Kg=o("This model is also a "),Aa=a("a"),Hg=o("tf.keras.Model"),Qg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vg=p(),T(On.$$.fragment),Jg=p(),wt=a("div"),T(Da.$$.fragment),Gg=p(),zo=a("p"),Xg=o("The "),Rr=a("a"),Yg=o("TFCamembertForSequenceClassification"),Zg=o(" forward method, overrides the "),$l=a("code"),e_=o("__call__"),t_=o(" special method."),o_=p(),T(Nn.$$.fragment),n_=p(),T(An.$$.fragment),s_=p(),T(Dn.$$.fragment),Sd=p(),xo=a("h2"),In=a("a"),Cl=a("span"),T(Ia.$$.fragment),a_=p(),Fl=a("span"),r_=o("TFCamembertForMultipleChoice"),Bd=p(),rt=a("div"),T(Sa.$$.fragment),i_=p(),El=a("p"),l_=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),d_=p(),Ba=a("p"),c_=o("This model inherits from "),Ur=a("a"),m_=o("TFPreTrainedModel"),p_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h_=p(),Wa=a("p"),u_=o("This model is also a "),Ra=a("a"),f_=o("tf.keras.Model"),g_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),__=p(),T(Sn.$$.fragment),b_=p(),Pt=a("div"),T(Ua.$$.fragment),k_=p(),qo=a("p"),y_=o("The "),Kr=a("a"),T_=o("TFCamembertForMultipleChoice"),w_=o(" forward method, overrides the "),Ml=a("code"),v_=o("__call__"),$_=o(" special method."),C_=p(),T(Bn.$$.fragment),F_=p(),T(Wn.$$.fragment),Wd=p(),jo=a("h2"),Rn=a("a"),zl=a("span"),T(Ka.$$.fragment),E_=p(),xl=a("span"),M_=o("TFCamembertForTokenClassification"),Rd=p(),it=a("div"),T(Ha.$$.fragment),z_=p(),ql=a("p"),x_=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),q_=p(),Qa=a("p"),j_=o("This model inherits from "),Hr=a("a"),P_=o("TFPreTrainedModel"),L_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O_=p(),Va=a("p"),N_=o("This model is also a "),Ja=a("a"),A_=o("tf.keras.Model"),D_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),I_=p(),T(Un.$$.fragment),S_=p(),vt=a("div"),T(Ga.$$.fragment),B_=p(),Po=a("p"),W_=o("The "),Qr=a("a"),R_=o("TFCamembertForTokenClassification"),U_=o(" forward method, overrides the "),jl=a("code"),K_=o("__call__"),H_=o(" special method."),Q_=p(),T(Kn.$$.fragment),V_=p(),T(Hn.$$.fragment),J_=p(),T(Qn.$$.fragment),Ud=p(),Lo=a("h2"),Vn=a("a"),Pl=a("span"),T(Xa.$$.fragment),G_=p(),Ll=a("span"),X_=o("TFCamembertForQuestionAnswering"),Kd=p(),lt=a("div"),T(Ya.$$.fragment),Y_=p(),Oo=a("p"),Z_=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ol=a("code"),eb=o("span start logits"),tb=o(" and "),Nl=a("code"),ob=o("span end logits"),nb=o(")."),sb=p(),Za=a("p"),ab=o("This model inherits from "),Vr=a("a"),rb=o("TFPreTrainedModel"),ib=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lb=p(),er=a("p"),db=o("This model is also a "),tr=a("a"),cb=o("tf.keras.Model"),mb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pb=p(),T(Jn.$$.fragment),hb=p(),$t=a("div"),T(or.$$.fragment),ub=p(),No=a("p"),fb=o("The "),Jr=a("a"),gb=o("TFCamembertForQuestionAnswering"),_b=o(" forward method, overrides the "),Al=a("code"),bb=o("__call__"),kb=o(" special method."),yb=p(),T(Gn.$$.fragment),Tb=p(),T(Xn.$$.fragment),wb=p(),T(Yn.$$.fragment),this.h()},l(s){const k=sT('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=h(s),c=r(s,"H1",{class:!0});var nr=i(c);u=r(nr,"A",{id:!0,class:!0,href:!0});var Dl=i(u);y=r(Dl,"SPAN",{});var Il=i(y);w(d.$$.fragment,Il),Il.forEach(t),Dl.forEach(t),m=h(nr),q=r(nr,"SPAN",{});var Sl=i(q);Te=n(Sl,"CamemBERT"),Sl.forEach(t),nr.forEach(t),ue=h(s),I=r(s,"H2",{class:!0});var sr=i(I);re=r(sr,"A",{id:!0,class:!0,href:!0});var Bl=i(re);Z=r(Bl,"SPAN",{});var Wl=i(Z);w(E.$$.fragment,Wl),Wl.forEach(t),Bl.forEach(t),we=h(sr),H=r(sr,"SPAN",{});var Rl=i(H);ve=n(Rl,"Overview"),Rl.forEach(t),sr.forEach(t),fe=h(s),B=r(s,"P",{});var ar=i(B);$e=n(ar,"The CamemBERT model was proposed in "),le=r(ar,"A",{href:!0,rel:!0});var Ul=i(le);J=n(Ul,"CamemBERT: a Tasty French Language Model"),Ul.forEach(t),Ce=n(ar,` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),ar.forEach(t),ge=h(s),W=r(s,"P",{});var Kl=i(W);Fe=n(Kl,"The abstract from the paper is the following:"),Kl.forEach(t),_e=h(s),R=r(s,"P",{});var Hl=i(R);pe=r(Hl,"EM",{});var Ql=i(pe);Ee=n(Ql,`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),Ql.forEach(t),Hl.forEach(t),oe=h(s),j=r(s,"P",{});var Vl=i(j);O=n(Vl,"Tips:"),Vl.forEach(t),be=h(s),U=r(s,"UL",{});var Jl=i(U);de=r(Jl,"LI",{});var rr=i(de);Me=n(rr,"This implementation is the same as RoBERTa. Refer to the "),K=r(rr,"A",{href:!0});var Gl=i(K);ze=n(Gl,"documentation of RoBERTa"),Gl.forEach(t),xe=n(rr,` for usage examples
as well as the information relative to the inputs and outputs.`),rr.forEach(t),Jl.forEach(t),L=h(s),se=r(s,"P",{});var Ao=i(se);G=n(Ao,"This model was contributed by "),ce=r(Ao,"A",{href:!0,rel:!0});var Xl=i(ce);qe=n(Xl,"camembert"),Xl.forEach(t),X=n(Ao,". The original code can be found "),me=r(Ao,"A",{href:!0,rel:!0});var Yl=i(me);je=n(Yl,"here"),Yl.forEach(t),D=n(Ao,"."),Ao.forEach(t),ke=h(s),S=r(s,"H2",{class:!0});var ir=i(S);ie=r(ir,"A",{id:!0,class:!0,href:!0});var Zl=i(ie);ee=r(Zl,"SPAN",{});var ed=i(ee);w(P.$$.fragment,ed),ed.forEach(t),Zl.forEach(t),Pe=h(ir),N=r(ir,"SPAN",{});var td=i(N);Le=n(td,"CamembertConfig"),td.forEach(t),ir.forEach(t),ye=h(s),f=r(s,"DIV",{class:!0});var Do=i(f);w(M.$$.fragment,Do),Re=h(Do),Y=r(Do,"P",{});var Io=i(Y);Ue=n(Io,"This class overrides "),Ie=r(Io,"A",{href:!0});var od=i(Ie);x=n(od,"RobertaConfig"),od.forEach(t),Ke=n(Io,`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
Camembert `),Ae=r(Io,"A",{href:!0,rel:!0});var nd=i(Ae);He=n(nd,"camembert-base"),nd.forEach(t),Qe=n(Io," architecture."),Io.forEach(t),Ve=h(Do),w(A.$$.fragment,Do),Do.forEach(t),V=h(s),Oe=r(s,"H2",{class:!0});var lr=i(Oe);Ne=r(lr,"A",{id:!0,class:!0,href:!0});var sd=i(Ne);Q=r(sd,"SPAN",{});var ad=i(Q);w(De.$$.fragment,ad),ad.forEach(t),sd.forEach(t),Je=h(lr),he=r(lr,"SPAN",{});var rd=i(he);Ge=n(rd,"CamembertTokenizer"),rd.forEach(t),lr.forEach(t),ne=h(s),te=r(s,"DIV",{class:!0});var dt=i(te);w(as.$$.fragment,dt),Qc=h(dt),Bt=r(dt,"P",{});var Wt=i(Bt);Vc=n(Wt,"Adapted from "),mr=r(Wt,"A",{href:!0});var id=i(mr);Jc=n(id,"RobertaTokenizer"),id.forEach(t),Gc=n(Wt," and "),pr=r(Wt,"A",{href:!0});var ld=i(pr);Xc=n(ld,"XLNetTokenizer"),ld.forEach(t),Yc=n(Wt,`. Construct a CamemBERT tokenizer. Based on
`),rs=r(Wt,"A",{href:!0,rel:!0});var dd=i(rs);Zc=n(dd,"SentencePiece"),dd.forEach(t),em=n(Wt,"."),Wt.forEach(t),tm=h(dt),is=r(dt,"P",{});var dr=i(is);om=n(dr,"This tokenizer inherits from "),hr=r(dr,"A",{href:!0});var cd=i(hr);nm=n(cd,"PreTrainedTokenizer"),cd.forEach(t),sm=n(dr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),dr.forEach(t),am=h(dt),Rt=r(dt,"DIV",{class:!0});var So=i(Rt);w(ls.$$.fragment,So),rm=h(So),ui=r(So,"P",{});var md=i(ui);im=n(md,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),md.forEach(t),lm=h(So),ds=r(So,"UL",{});var cr=i(ds);ur=r(cr,"LI",{});var Gr=i(ur);dm=n(Gr,"single sequence: "),fi=r(Gr,"CODE",{});var pd=i(fi);cm=n(pd,"<s> X </s>"),pd.forEach(t),Gr.forEach(t),mm=h(cr),fr=r(cr,"LI",{});var Xr=i(fr);pm=n(Xr,"pair of sequences: "),gi=r(Xr,"CODE",{});var hd=i(gi);hm=n(hd,"<s> A </s></s> B </s>"),hd.forEach(t),Xr.forEach(t),cr.forEach(t),So.forEach(t),um=h(dt),Bo=r(dt,"DIV",{class:!0});var Qd=i(Bo);w(cs.$$.fragment,Qd),fm=h(Qd),ms=r(Qd,"P",{});var Vd=i(ms);gm=n(Vd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_i=r(Vd,"CODE",{});var Cb=i(_i);_m=n(Cb,"prepare_for_model"),Cb.forEach(t),bm=n(Vd," method."),Vd.forEach(t),Qd.forEach(t),km=h(dt),Wo=r(dt,"DIV",{class:!0});var Jd=i(Wo);w(ps.$$.fragment,Jd),ym=h(Jd),bi=r(Jd,"P",{});var Fb=i(bi);Tm=n(Fb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Fb.forEach(t),Jd.forEach(t),wm=h(dt),gr=r(dt,"DIV",{class:!0});var Eb=i(gr);w(hs.$$.fragment,Eb),Eb.forEach(t),dt.forEach(t),gd=h(s),ro=r(s,"H2",{class:!0});var Gd=i(ro);Ro=r(Gd,"A",{id:!0,class:!0,href:!0});var Mb=i(Ro);ki=r(Mb,"SPAN",{});var zb=i(ki);w(us.$$.fragment,zb),zb.forEach(t),Mb.forEach(t),vm=h(Gd),yi=r(Gd,"SPAN",{});var xb=i(yi);$m=n(xb,"CamembertTokenizerFast"),xb.forEach(t),Gd.forEach(t),_d=h(s),mt=r(s,"DIV",{class:!0});var Kt=i(mt);w(fs.$$.fragment,Kt),Cm=h(Kt),Et=r(Kt,"P",{});var Ht=i(Et);Fm=n(Ht,"Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),Ti=r(Ht,"EM",{});var qb=i(Ti);Em=n(qb,"tokenizers"),qb.forEach(t),Mm=n(Ht,` library). Adapted from
`),_r=r(Ht,"A",{href:!0});var jb=i(_r);zm=n(jb,"RobertaTokenizer"),jb.forEach(t),xm=n(Ht," and "),br=r(Ht,"A",{href:!0});var Pb=i(br);qm=n(Pb,"XLNetTokenizer"),Pb.forEach(t),jm=n(Ht,`. Based on
`),gs=r(Ht,"A",{href:!0,rel:!0});var Lb=i(gs);Pm=n(Lb,"BPE"),Lb.forEach(t),Lm=n(Ht,"."),Ht.forEach(t),Om=h(Kt),_s=r(Kt,"P",{});var Xd=i(_s);Nm=n(Xd,"This tokenizer inherits from "),kr=r(Xd,"A",{href:!0});var Ob=i(kr);Am=n(Ob,"PreTrainedTokenizerFast"),Ob.forEach(t),Dm=n(Xd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xd.forEach(t),Im=h(Kt),Ut=r(Kt,"DIV",{class:!0});var Yr=i(Ut);w(bs.$$.fragment,Yr),Sm=h(Yr),wi=r(Yr,"P",{});var Nb=i(wi);Bm=n(Nb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),Nb.forEach(t),Wm=h(Yr),ks=r(Yr,"UL",{});var Yd=i(ks);yr=r(Yd,"LI",{});var vb=i(yr);Rm=n(vb,"single sequence: "),vi=r(vb,"CODE",{});var Ab=i(vi);Um=n(Ab,"<s> X </s>"),Ab.forEach(t),vb.forEach(t),Km=h(Yd),Tr=r(Yd,"LI",{});var $b=i(Tr);Hm=n($b,"pair of sequences: "),$i=r($b,"CODE",{});var Db=i($i);Qm=n(Db,"<s> A </s></s> B </s>"),Db.forEach(t),$b.forEach(t),Yd.forEach(t),Yr.forEach(t),Vm=h(Kt),Uo=r(Kt,"DIV",{class:!0});var Zd=i(Uo);w(ys.$$.fragment,Zd),Jm=h(Zd),Ci=r(Zd,"P",{});var Ib=i(Ci);Gm=n(Ib,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Ib.forEach(t),Zd.forEach(t),Kt.forEach(t),bd=h(s),io=r(s,"H2",{class:!0});var ec=i(io);Ko=r(ec,"A",{id:!0,class:!0,href:!0});var Sb=i(Ko);Fi=r(Sb,"SPAN",{});var Bb=i(Fi);w(Ts.$$.fragment,Bb),Bb.forEach(t),Sb.forEach(t),Xm=h(ec),Ei=r(ec,"SPAN",{});var Wb=i(Ei);Ym=n(Wb,"CamembertModel"),Wb.forEach(t),ec.forEach(t),kd=h(s),Xe=r(s,"DIV",{class:!0});var ct=i(Xe);w(ws.$$.fragment,ct),Zm=h(ct),Mi=r(ct,"P",{});var Rb=i(Mi);ep=n(Rb,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),Rb.forEach(t),tp=h(ct),vs=r(ct,"P",{});var tc=i(vs);op=n(tc,"This model inherits from "),wr=r(tc,"A",{href:!0});var Ub=i(wr);np=n(Ub,"PreTrainedModel"),Ub.forEach(t),sp=n(tc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tc.forEach(t),ap=h(ct),$s=r(ct,"P",{});var oc=i($s);rp=n(oc,"This model is also a PyTorch "),Cs=r(oc,"A",{href:!0,rel:!0});var Kb=i(Cs);ip=n(Kb,"torch.nn.Module"),Kb.forEach(t),lp=n(oc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oc.forEach(t),dp=h(ct),Fs=r(ct,"P",{});var nc=i(Fs);cp=n(nc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),zi=r(nc,"EM",{});var Hb=i(zi);mp=n(Hb,`Attention is
all you need`),Hb.forEach(t),pp=n(nc,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),nc.forEach(t),hp=h(ct),tt=r(ct,"P",{});var Ct=i(tt);up=n(Ct,"To behave as a decoder the model needs to be initialized with the "),xi=r(Ct,"CODE",{});var Qb=i(xi);fp=n(Qb,"is_decoder"),Qb.forEach(t),gp=n(Ct,` argument of the configuration set to
`),qi=r(Ct,"CODE",{});var Vb=i(qi);_p=n(Vb,"True"),Vb.forEach(t),bp=n(Ct,". To be used in a Seq2Seq model, the model needs to initialized with both "),ji=r(Ct,"CODE",{});var Jb=i(ji);kp=n(Jb,"is_decoder"),Jb.forEach(t),yp=n(Ct,` argument and
`),Pi=r(Ct,"CODE",{});var Gb=i(Pi);Tp=n(Gb,"add_cross_attention"),Gb.forEach(t),wp=n(Ct," set to "),Li=r(Ct,"CODE",{});var Xb=i(Li);vp=n(Xb,"True"),Xb.forEach(t),$p=n(Ct,"; an "),Oi=r(Ct,"CODE",{});var Yb=i(Oi);Cp=n(Yb,"encoder_hidden_states"),Yb.forEach(t),Fp=n(Ct," is then expected as an input to the forward pass."),Ct.forEach(t),Ep=h(ct),Ho=r(ct,"P",{});var ud=i(Ho);Mp=n(ud,".. _"),Ni=r(ud,"EM",{});var Zb=i(Ni);zp=n(Zb,"Attention is all you need"),Zb.forEach(t),xp=n(ud,": "),Es=r(ud,"A",{href:!0,rel:!0});var ek=i(Es);qp=n(ek,"https://arxiv.org/abs/1706.03762"),ek.forEach(t),ud.forEach(t),jp=h(ct),Mt=r(ct,"DIV",{class:!0});var Zn=i(Mt);w(Ms.$$.fragment,Zn),Pp=h(Zn),lo=r(Zn,"P",{});var Zr=i(lo);Lp=n(Zr,"The "),vr=r(Zr,"A",{href:!0});var tk=i(vr);Op=n(tk,"CamembertModel"),tk.forEach(t),Np=n(Zr," forward method, overrides the "),Ai=r(Zr,"CODE",{});var ok=i(Ai);Ap=n(ok,"__call__"),ok.forEach(t),Dp=n(Zr," special method."),Zr.forEach(t),Ip=h(Zn),w(Qo.$$.fragment,Zn),Sp=h(Zn),w(Vo.$$.fragment,Zn),Zn.forEach(t),ct.forEach(t),yd=h(s),co=r(s,"H2",{class:!0});var sc=i(co);Jo=r(sc,"A",{id:!0,class:!0,href:!0});var nk=i(Jo);Di=r(nk,"SPAN",{});var sk=i(Di);w(zs.$$.fragment,sk),sk.forEach(t),nk.forEach(t),Bp=h(sc),Ii=r(sc,"SPAN",{});var ak=i(Ii);Wp=n(ak,"CamembertForCausalLM"),ak.forEach(t),sc.forEach(t),Td=h(s),pt=r(s,"DIV",{class:!0});var Qt=i(pt);w(xs.$$.fragment,Qt),Rp=h(Qt),qs=r(Qt,"P",{});var ac=i(qs);Up=n(ac,"CamemBERT Model with a "),Si=r(ac,"CODE",{});var rk=i(Si);Kp=n(rk,"language modeling"),rk.forEach(t),Hp=n(ac," head on top for CLM fine-tuning."),ac.forEach(t),Qp=h(Qt),js=r(Qt,"P",{});var rc=i(js);Vp=n(rc,"This model inherits from "),$r=r(rc,"A",{href:!0});var ik=i($r);Jp=n(ik,"PreTrainedModel"),ik.forEach(t),Gp=n(rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rc.forEach(t),Xp=h(Qt),Ps=r(Qt,"P",{});var ic=i(Ps);Yp=n(ic,"This model is also a PyTorch "),Ls=r(ic,"A",{href:!0,rel:!0});var lk=i(Ls);Zp=n(lk,"torch.nn.Module"),lk.forEach(t),eh=n(ic,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ic.forEach(t),th=h(Qt),zt=r(Qt,"DIV",{class:!0});var es=i(zt);w(Os.$$.fragment,es),oh=h(es),mo=r(es,"P",{});var ei=i(mo);nh=n(ei,"The "),Cr=r(ei,"A",{href:!0});var dk=i(Cr);sh=n(dk,"CamembertForCausalLM"),dk.forEach(t),ah=n(ei," forward method, overrides the "),Bi=r(ei,"CODE",{});var ck=i(Bi);rh=n(ck,"__call__"),ck.forEach(t),ih=n(ei," special method."),ei.forEach(t),lh=h(es),w(Go.$$.fragment,es),dh=h(es),w(Xo.$$.fragment,es),es.forEach(t),Qt.forEach(t),wd=h(s),po=r(s,"H2",{class:!0});var lc=i(po);Yo=r(lc,"A",{id:!0,class:!0,href:!0});var mk=i(Yo);Wi=r(mk,"SPAN",{});var pk=i(Wi);w(Ns.$$.fragment,pk),pk.forEach(t),mk.forEach(t),ch=h(lc),Ri=r(lc,"SPAN",{});var hk=i(Ri);mh=n(hk,"CamembertForMaskedLM"),hk.forEach(t),lc.forEach(t),vd=h(s),ht=r(s,"DIV",{class:!0});var Vt=i(ht);w(As.$$.fragment,Vt),ph=h(Vt),Ds=r(Vt,"P",{});var dc=i(Ds);hh=n(dc,"CamemBERT Model with a "),Ui=r(dc,"CODE",{});var uk=i(Ui);uh=n(uk,"language modeling"),uk.forEach(t),fh=n(dc," head on top."),dc.forEach(t),gh=h(Vt),Is=r(Vt,"P",{});var cc=i(Is);_h=n(cc,"This model inherits from "),Fr=r(cc,"A",{href:!0});var fk=i(Fr);bh=n(fk,"PreTrainedModel"),fk.forEach(t),kh=n(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),yh=h(Vt),Ss=r(Vt,"P",{});var mc=i(Ss);Th=n(mc,"This model is also a PyTorch "),Bs=r(mc,"A",{href:!0,rel:!0});var gk=i(Bs);wh=n(gk,"torch.nn.Module"),gk.forEach(t),vh=n(mc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc.forEach(t),$h=h(Vt),bt=r(Vt,"DIV",{class:!0});var Jt=i(bt);w(Ws.$$.fragment,Jt),Ch=h(Jt),ho=r(Jt,"P",{});var ti=i(ho);Fh=n(ti,"The "),Er=r(ti,"A",{href:!0});var _k=i(Er);Eh=n(_k,"CamembertForMaskedLM"),_k.forEach(t),Mh=n(ti," forward method, overrides the "),Ki=r(ti,"CODE",{});var bk=i(Ki);zh=n(bk,"__call__"),bk.forEach(t),xh=n(ti," special method."),ti.forEach(t),qh=h(Jt),w(Zo.$$.fragment,Jt),jh=h(Jt),w(en.$$.fragment,Jt),Ph=h(Jt),w(tn.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),$d=h(s),uo=r(s,"H2",{class:!0});var pc=i(uo);on=r(pc,"A",{id:!0,class:!0,href:!0});var kk=i(on);Hi=r(kk,"SPAN",{});var yk=i(Hi);w(Rs.$$.fragment,yk),yk.forEach(t),kk.forEach(t),Lh=h(pc),Qi=r(pc,"SPAN",{});var Tk=i(Qi);Oh=n(Tk,"CamembertForSequenceClassification"),Tk.forEach(t),pc.forEach(t),Cd=h(s),ut=r(s,"DIV",{class:!0});var Gt=i(ut);w(Us.$$.fragment,Gt),Nh=h(Gt),Vi=r(Gt,"P",{});var wk=i(Vi);Ah=n(wk,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wk.forEach(t),Dh=h(Gt),Ks=r(Gt,"P",{});var hc=i(Ks);Ih=n(hc,"This model inherits from "),Mr=r(hc,"A",{href:!0});var vk=i(Mr);Sh=n(vk,"PreTrainedModel"),vk.forEach(t),Bh=n(hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hc.forEach(t),Wh=h(Gt),Hs=r(Gt,"P",{});var uc=i(Hs);Rh=n(uc,"This model is also a PyTorch "),Qs=r(uc,"A",{href:!0,rel:!0});var $k=i(Qs);Uh=n($k,"torch.nn.Module"),$k.forEach(t),Kh=n(uc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uc.forEach(t),Hh=h(Gt),et=r(Gt,"DIV",{class:!0});var Ft=i(et);w(Vs.$$.fragment,Ft),Qh=h(Ft),fo=r(Ft,"P",{});var oi=i(fo);Vh=n(oi,"The "),zr=r(oi,"A",{href:!0});var Ck=i(zr);Jh=n(Ck,"CamembertForSequenceClassification"),Ck.forEach(t),Gh=n(oi," forward method, overrides the "),Ji=r(oi,"CODE",{});var Fk=i(Ji);Xh=n(Fk,"__call__"),Fk.forEach(t),Yh=n(oi," special method."),oi.forEach(t),Zh=h(Ft),w(nn.$$.fragment,Ft),eu=h(Ft),w(sn.$$.fragment,Ft),tu=h(Ft),w(an.$$.fragment,Ft),ou=h(Ft),w(rn.$$.fragment,Ft),nu=h(Ft),w(ln.$$.fragment,Ft),Ft.forEach(t),Gt.forEach(t),Fd=h(s),go=r(s,"H2",{class:!0});var fc=i(go);dn=r(fc,"A",{id:!0,class:!0,href:!0});var Ek=i(dn);Gi=r(Ek,"SPAN",{});var Mk=i(Gi);w(Js.$$.fragment,Mk),Mk.forEach(t),Ek.forEach(t),su=h(fc),Xi=r(fc,"SPAN",{});var zk=i(Xi);au=n(zk,"CamembertForMultipleChoice"),zk.forEach(t),fc.forEach(t),Ed=h(s),ft=r(s,"DIV",{class:!0});var Xt=i(ft);w(Gs.$$.fragment,Xt),ru=h(Xt),Yi=r(Xt,"P",{});var xk=i(Yi);iu=n(xk,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xk.forEach(t),lu=h(Xt),Xs=r(Xt,"P",{});var gc=i(Xs);du=n(gc,"This model inherits from "),xr=r(gc,"A",{href:!0});var qk=i(xr);cu=n(qk,"PreTrainedModel"),qk.forEach(t),mu=n(gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc.forEach(t),pu=h(Xt),Ys=r(Xt,"P",{});var _c=i(Ys);hu=n(_c,"This model is also a PyTorch "),Zs=r(_c,"A",{href:!0,rel:!0});var jk=i(Zs);uu=n(jk,"torch.nn.Module"),jk.forEach(t),fu=n(_c,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c.forEach(t),gu=h(Xt),xt=r(Xt,"DIV",{class:!0});var ts=i(xt);w(ea.$$.fragment,ts),_u=h(ts),_o=r(ts,"P",{});var ni=i(_o);bu=n(ni,"The "),qr=r(ni,"A",{href:!0});var Pk=i(qr);ku=n(Pk,"CamembertForMultipleChoice"),Pk.forEach(t),yu=n(ni," forward method, overrides the "),Zi=r(ni,"CODE",{});var Lk=i(Zi);Tu=n(Lk,"__call__"),Lk.forEach(t),wu=n(ni," special method."),ni.forEach(t),vu=h(ts),w(cn.$$.fragment,ts),$u=h(ts),w(mn.$$.fragment,ts),ts.forEach(t),Xt.forEach(t),Md=h(s),bo=r(s,"H2",{class:!0});var bc=i(bo);pn=r(bc,"A",{id:!0,class:!0,href:!0});var Ok=i(pn);el=r(Ok,"SPAN",{});var Nk=i(el);w(ta.$$.fragment,Nk),Nk.forEach(t),Ok.forEach(t),Cu=h(bc),tl=r(bc,"SPAN",{});var Ak=i(tl);Fu=n(Ak,"CamembertForTokenClassification"),Ak.forEach(t),bc.forEach(t),zd=h(s),gt=r(s,"DIV",{class:!0});var Yt=i(gt);w(oa.$$.fragment,Yt),Eu=h(Yt),ol=r(Yt,"P",{});var Dk=i(ol);Mu=n(Dk,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Dk.forEach(t),zu=h(Yt),na=r(Yt,"P",{});var kc=i(na);xu=n(kc,"This model inherits from "),jr=r(kc,"A",{href:!0});var Ik=i(jr);qu=n(Ik,"PreTrainedModel"),Ik.forEach(t),ju=n(kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc.forEach(t),Pu=h(Yt),sa=r(Yt,"P",{});var yc=i(sa);Lu=n(yc,"This model is also a PyTorch "),aa=r(yc,"A",{href:!0,rel:!0});var Sk=i(aa);Ou=n(Sk,"torch.nn.Module"),Sk.forEach(t),Nu=n(yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc.forEach(t),Au=h(Yt),kt=r(Yt,"DIV",{class:!0});var Zt=i(kt);w(ra.$$.fragment,Zt),Du=h(Zt),ko=r(Zt,"P",{});var si=i(ko);Iu=n(si,"The "),Pr=r(si,"A",{href:!0});var Bk=i(Pr);Su=n(Bk,"CamembertForTokenClassification"),Bk.forEach(t),Bu=n(si," forward method, overrides the "),nl=r(si,"CODE",{});var Wk=i(nl);Wu=n(Wk,"__call__"),Wk.forEach(t),Ru=n(si," special method."),si.forEach(t),Uu=h(Zt),w(hn.$$.fragment,Zt),Ku=h(Zt),w(un.$$.fragment,Zt),Hu=h(Zt),w(fn.$$.fragment,Zt),Zt.forEach(t),Yt.forEach(t),xd=h(s),yo=r(s,"H2",{class:!0});var Tc=i(yo);gn=r(Tc,"A",{id:!0,class:!0,href:!0});var Rk=i(gn);sl=r(Rk,"SPAN",{});var Uk=i(sl);w(ia.$$.fragment,Uk),Uk.forEach(t),Rk.forEach(t),Qu=h(Tc),al=r(Tc,"SPAN",{});var Kk=i(al);Vu=n(Kk,"CamembertForQuestionAnswering"),Kk.forEach(t),Tc.forEach(t),qd=h(s),_t=r(s,"DIV",{class:!0});var eo=i(_t);w(la.$$.fragment,eo),Ju=h(eo),_n=r(eo,"P",{});var fd=i(_n);Gu=n(fd,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),rl=r(fd,"CODE",{});var Hk=i(rl);Xu=n(Hk,"span start logits"),Hk.forEach(t),Yu=n(fd," and "),il=r(fd,"CODE",{});var Qk=i(il);Zu=n(Qk,"span end logits"),Qk.forEach(t),fd.forEach(t),ef=h(eo),da=r(eo,"P",{});var wc=i(da);tf=n(wc,"This model inherits from "),Lr=r(wc,"A",{href:!0});var Vk=i(Lr);of=n(Vk,"PreTrainedModel"),Vk.forEach(t),nf=n(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),sf=h(eo),ca=r(eo,"P",{});var vc=i(ca);af=n(vc,"This model is also a PyTorch "),ma=r(vc,"A",{href:!0,rel:!0});var Jk=i(ma);rf=n(Jk,"torch.nn.Module"),Jk.forEach(t),lf=n(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),df=h(eo),yt=r(eo,"DIV",{class:!0});var to=i(yt);w(pa.$$.fragment,to),cf=h(to),To=r(to,"P",{});var ai=i(To);mf=n(ai,"The "),Or=r(ai,"A",{href:!0});var Gk=i(Or);pf=n(Gk,"CamembertForQuestionAnswering"),Gk.forEach(t),hf=n(ai," forward method, overrides the "),ll=r(ai,"CODE",{});var Xk=i(ll);uf=n(Xk,"__call__"),Xk.forEach(t),ff=n(ai," special method."),ai.forEach(t),gf=h(to),w(bn.$$.fragment,to),_f=h(to),w(kn.$$.fragment,to),bf=h(to),w(yn.$$.fragment,to),to.forEach(t),eo.forEach(t),jd=h(s),wo=r(s,"H2",{class:!0});var $c=i(wo);Tn=r($c,"A",{id:!0,class:!0,href:!0});var Yk=i(Tn);dl=r(Yk,"SPAN",{});var Zk=i(dl);w(ha.$$.fragment,Zk),Zk.forEach(t),Yk.forEach(t),kf=h($c),cl=r($c,"SPAN",{});var ey=i(cl);yf=n(ey,"TFCamembertModel"),ey.forEach(t),$c.forEach(t),Pd=h(s),ot=r(s,"DIV",{class:!0});var Lt=i(ot);w(ua.$$.fragment,Lt),Tf=h(Lt),ml=r(Lt,"P",{});var ty=i(ml);wf=n(ty,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),ty.forEach(t),vf=h(Lt),fa=r(Lt,"P",{});var Cc=i(fa);$f=n(Cc,"This model inherits from "),Nr=r(Cc,"A",{href:!0});var oy=i(Nr);Cf=n(oy,"TFPreTrainedModel"),oy.forEach(t),Ff=n(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),Ef=h(Lt),ga=r(Lt,"P",{});var Fc=i(ga);Mf=n(Fc,"This model is also a "),_a=r(Fc,"A",{href:!0,rel:!0});var ny=i(_a);zf=n(ny,"tf.keras.Model"),ny.forEach(t),xf=n(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),qf=h(Lt),w(wn.$$.fragment,Lt),jf=h(Lt),qt=r(Lt,"DIV",{class:!0});var os=i(qt);w(ba.$$.fragment,os),Pf=h(os),vo=r(os,"P",{});var ri=i(vo);Lf=n(ri,"The "),Ar=r(ri,"A",{href:!0});var sy=i(Ar);Of=n(sy,"TFCamembertModel"),sy.forEach(t),Nf=n(ri," forward method, overrides the "),pl=r(ri,"CODE",{});var ay=i(pl);Af=n(ay,"__call__"),ay.forEach(t),Df=n(ri," special method."),ri.forEach(t),If=h(os),w(vn.$$.fragment,os),Sf=h(os),w($n.$$.fragment,os),os.forEach(t),Lt.forEach(t),Ld=h(s),$o=r(s,"H2",{class:!0});var Ec=i($o);Cn=r(Ec,"A",{id:!0,class:!0,href:!0});var ry=i(Cn);hl=r(ry,"SPAN",{});var iy=i(hl);w(ka.$$.fragment,iy),iy.forEach(t),ry.forEach(t),Bf=h(Ec),ul=r(Ec,"SPAN",{});var ly=i(ul);Wf=n(ly,"TFCamembertForCasualLM"),ly.forEach(t),Ec.forEach(t),Od=h(s),nt=r(s,"DIV",{class:!0});var Ot=i(nt);w(ya.$$.fragment,Ot),Rf=h(Ot),Ta=r(Ot,"P",{});var Mc=i(Ta);Uf=n(Mc,"CamemBERT Model with a "),fl=r(Mc,"CODE",{});var dy=i(fl);Kf=n(dy,"language modeling"),dy.forEach(t),Hf=n(Mc," head on top for CLM fine-tuning."),Mc.forEach(t),Qf=h(Ot),wa=r(Ot,"P",{});var zc=i(wa);Vf=n(zc,"This model inherits from "),Dr=r(zc,"A",{href:!0});var cy=i(Dr);Jf=n(cy,"TFPreTrainedModel"),cy.forEach(t),Gf=n(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(t),Xf=h(Ot),va=r(Ot,"P",{});var xc=i(va);Yf=n(xc,"This model is also a "),$a=r(xc,"A",{href:!0,rel:!0});var my=i($a);Zf=n(my,"tf.keras.Model"),my.forEach(t),eg=n(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(t),tg=h(Ot),w(Fn.$$.fragment,Ot),og=h(Ot),jt=r(Ot,"DIV",{class:!0});var ns=i(jt);w(Ca.$$.fragment,ns),ng=h(ns),Co=r(ns,"P",{});var ii=i(Co);sg=n(ii,"The "),Ir=r(ii,"A",{href:!0});var py=i(Ir);ag=n(py,"TFCamembertForCausalLM"),py.forEach(t),rg=n(ii," forward method, overrides the "),gl=r(ii,"CODE",{});var hy=i(gl);ig=n(hy,"__call__"),hy.forEach(t),lg=n(ii," special method."),ii.forEach(t),dg=h(ns),w(En.$$.fragment,ns),cg=h(ns),w(Mn.$$.fragment,ns),ns.forEach(t),Ot.forEach(t),Nd=h(s),Fo=r(s,"H2",{class:!0});var qc=i(Fo);zn=r(qc,"A",{id:!0,class:!0,href:!0});var uy=i(zn);_l=r(uy,"SPAN",{});var fy=i(_l);w(Fa.$$.fragment,fy),fy.forEach(t),uy.forEach(t),mg=h(qc),bl=r(qc,"SPAN",{});var gy=i(bl);pg=n(gy,"TFCamembertForMaskedLM"),gy.forEach(t),qc.forEach(t),Ad=h(s),st=r(s,"DIV",{class:!0});var Nt=i(st);w(Ea.$$.fragment,Nt),hg=h(Nt),Ma=r(Nt,"P",{});var jc=i(Ma);ug=n(jc,"CamemBERT Model with a "),kl=r(jc,"CODE",{});var _y=i(kl);fg=n(_y,"language modeling"),_y.forEach(t),gg=n(jc," head on top."),jc.forEach(t),_g=h(Nt),za=r(Nt,"P",{});var Pc=i(za);bg=n(Pc,"This model inherits from "),Sr=r(Pc,"A",{href:!0});var by=i(Sr);kg=n(by,"TFPreTrainedModel"),by.forEach(t),yg=n(Pc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc.forEach(t),Tg=h(Nt),xa=r(Nt,"P",{});var Lc=i(xa);wg=n(Lc,"This model is also a "),qa=r(Lc,"A",{href:!0,rel:!0});var ky=i(qa);vg=n(ky,"tf.keras.Model"),ky.forEach(t),$g=n(Lc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lc.forEach(t),Cg=h(Nt),w(xn.$$.fragment,Nt),Fg=h(Nt),Tt=r(Nt,"DIV",{class:!0});var oo=i(Tt);w(ja.$$.fragment,oo),Eg=h(oo),Eo=r(oo,"P",{});var li=i(Eo);Mg=n(li,"The "),Br=r(li,"A",{href:!0});var yy=i(Br);zg=n(yy,"TFCamembertForMaskedLM"),yy.forEach(t),xg=n(li," forward method, overrides the "),yl=r(li,"CODE",{});var Ty=i(yl);qg=n(Ty,"__call__"),Ty.forEach(t),jg=n(li," special method."),li.forEach(t),Pg=h(oo),w(qn.$$.fragment,oo),Lg=h(oo),w(jn.$$.fragment,oo),Og=h(oo),w(Pn.$$.fragment,oo),oo.forEach(t),Nt.forEach(t),Dd=h(s),Mo=r(s,"H2",{class:!0});var Oc=i(Mo);Ln=r(Oc,"A",{id:!0,class:!0,href:!0});var wy=i(Ln);Tl=r(wy,"SPAN",{});var vy=i(Tl);w(Pa.$$.fragment,vy),vy.forEach(t),wy.forEach(t),Ng=h(Oc),wl=r(Oc,"SPAN",{});var $y=i(wl);Ag=n($y,"TFCamembertForSequenceClassification"),$y.forEach(t),Oc.forEach(t),Id=h(s),at=r(s,"DIV",{class:!0});var At=i(at);w(La.$$.fragment,At),Dg=h(At),vl=r(At,"P",{});var Cy=i(vl);Ig=n(Cy,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Cy.forEach(t),Sg=h(At),Oa=r(At,"P",{});var Nc=i(Oa);Bg=n(Nc,"This model inherits from "),Wr=r(Nc,"A",{href:!0});var Fy=i(Wr);Wg=n(Fy,"TFPreTrainedModel"),Fy.forEach(t),Rg=n(Nc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nc.forEach(t),Ug=h(At),Na=r(At,"P",{});var Ac=i(Na);Kg=n(Ac,"This model is also a "),Aa=r(Ac,"A",{href:!0,rel:!0});var Ey=i(Aa);Hg=n(Ey,"tf.keras.Model"),Ey.forEach(t),Qg=n(Ac,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ac.forEach(t),Vg=h(At),w(On.$$.fragment,At),Jg=h(At),wt=r(At,"DIV",{class:!0});var no=i(wt);w(Da.$$.fragment,no),Gg=h(no),zo=r(no,"P",{});var di=i(zo);Xg=n(di,"The "),Rr=r(di,"A",{href:!0});var My=i(Rr);Yg=n(My,"TFCamembertForSequenceClassification"),My.forEach(t),Zg=n(di," forward method, overrides the "),$l=r(di,"CODE",{});var zy=i($l);e_=n(zy,"__call__"),zy.forEach(t),t_=n(di," special method."),di.forEach(t),o_=h(no),w(Nn.$$.fragment,no),n_=h(no),w(An.$$.fragment,no),s_=h(no),w(Dn.$$.fragment,no),no.forEach(t),At.forEach(t),Sd=h(s),xo=r(s,"H2",{class:!0});var Dc=i(xo);In=r(Dc,"A",{id:!0,class:!0,href:!0});var xy=i(In);Cl=r(xy,"SPAN",{});var qy=i(Cl);w(Ia.$$.fragment,qy),qy.forEach(t),xy.forEach(t),a_=h(Dc),Fl=r(Dc,"SPAN",{});var jy=i(Fl);r_=n(jy,"TFCamembertForMultipleChoice"),jy.forEach(t),Dc.forEach(t),Bd=h(s),rt=r(s,"DIV",{class:!0});var Dt=i(rt);w(Sa.$$.fragment,Dt),i_=h(Dt),El=r(Dt,"P",{});var Py=i(El);l_=n(Py,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Py.forEach(t),d_=h(Dt),Ba=r(Dt,"P",{});var Ic=i(Ba);c_=n(Ic,"This model inherits from "),Ur=r(Ic,"A",{href:!0});var Ly=i(Ur);m_=n(Ly,"TFPreTrainedModel"),Ly.forEach(t),p_=n(Ic,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic.forEach(t),h_=h(Dt),Wa=r(Dt,"P",{});var Sc=i(Wa);u_=n(Sc,"This model is also a "),Ra=r(Sc,"A",{href:!0,rel:!0});var Oy=i(Ra);f_=n(Oy,"tf.keras.Model"),Oy.forEach(t),g_=n(Sc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sc.forEach(t),__=h(Dt),w(Sn.$$.fragment,Dt),b_=h(Dt),Pt=r(Dt,"DIV",{class:!0});var ss=i(Pt);w(Ua.$$.fragment,ss),k_=h(ss),qo=r(ss,"P",{});var ci=i(qo);y_=n(ci,"The "),Kr=r(ci,"A",{href:!0});var Ny=i(Kr);T_=n(Ny,"TFCamembertForMultipleChoice"),Ny.forEach(t),w_=n(ci," forward method, overrides the "),Ml=r(ci,"CODE",{});var Ay=i(Ml);v_=n(Ay,"__call__"),Ay.forEach(t),$_=n(ci," special method."),ci.forEach(t),C_=h(ss),w(Bn.$$.fragment,ss),F_=h(ss),w(Wn.$$.fragment,ss),ss.forEach(t),Dt.forEach(t),Wd=h(s),jo=r(s,"H2",{class:!0});var Bc=i(jo);Rn=r(Bc,"A",{id:!0,class:!0,href:!0});var Dy=i(Rn);zl=r(Dy,"SPAN",{});var Iy=i(zl);w(Ka.$$.fragment,Iy),Iy.forEach(t),Dy.forEach(t),E_=h(Bc),xl=r(Bc,"SPAN",{});var Sy=i(xl);M_=n(Sy,"TFCamembertForTokenClassification"),Sy.forEach(t),Bc.forEach(t),Rd=h(s),it=r(s,"DIV",{class:!0});var It=i(it);w(Ha.$$.fragment,It),z_=h(It),ql=r(It,"P",{});var By=i(ql);x_=n(By,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),By.forEach(t),q_=h(It),Qa=r(It,"P",{});var Wc=i(Qa);j_=n(Wc,"This model inherits from "),Hr=r(Wc,"A",{href:!0});var Wy=i(Hr);P_=n(Wy,"TFPreTrainedModel"),Wy.forEach(t),L_=n(Wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc.forEach(t),O_=h(It),Va=r(It,"P",{});var Rc=i(Va);N_=n(Rc,"This model is also a "),Ja=r(Rc,"A",{href:!0,rel:!0});var Ry=i(Ja);A_=n(Ry,"tf.keras.Model"),Ry.forEach(t),D_=n(Rc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rc.forEach(t),I_=h(It),w(Un.$$.fragment,It),S_=h(It),vt=r(It,"DIV",{class:!0});var so=i(vt);w(Ga.$$.fragment,so),B_=h(so),Po=r(so,"P",{});var mi=i(Po);W_=n(mi,"The "),Qr=r(mi,"A",{href:!0});var Uy=i(Qr);R_=n(Uy,"TFCamembertForTokenClassification"),Uy.forEach(t),U_=n(mi," forward method, overrides the "),jl=r(mi,"CODE",{});var Ky=i(jl);K_=n(Ky,"__call__"),Ky.forEach(t),H_=n(mi," special method."),mi.forEach(t),Q_=h(so),w(Kn.$$.fragment,so),V_=h(so),w(Hn.$$.fragment,so),J_=h(so),w(Qn.$$.fragment,so),so.forEach(t),It.forEach(t),Ud=h(s),Lo=r(s,"H2",{class:!0});var Uc=i(Lo);Vn=r(Uc,"A",{id:!0,class:!0,href:!0});var Hy=i(Vn);Pl=r(Hy,"SPAN",{});var Qy=i(Pl);w(Xa.$$.fragment,Qy),Qy.forEach(t),Hy.forEach(t),G_=h(Uc),Ll=r(Uc,"SPAN",{});var Vy=i(Ll);X_=n(Vy,"TFCamembertForQuestionAnswering"),Vy.forEach(t),Uc.forEach(t),Kd=h(s),lt=r(s,"DIV",{class:!0});var St=i(lt);w(Ya.$$.fragment,St),Y_=h(St),Oo=r(St,"P",{});var pi=i(Oo);Z_=n(pi,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ol=r(pi,"CODE",{});var Jy=i(Ol);eb=n(Jy,"span start logits"),Jy.forEach(t),tb=n(pi," and "),Nl=r(pi,"CODE",{});var Gy=i(Nl);ob=n(Gy,"span end logits"),Gy.forEach(t),nb=n(pi,")."),pi.forEach(t),sb=h(St),Za=r(St,"P",{});var Kc=i(Za);ab=n(Kc,"This model inherits from "),Vr=r(Kc,"A",{href:!0});var Xy=i(Vr);rb=n(Xy,"TFPreTrainedModel"),Xy.forEach(t),ib=n(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),lb=h(St),er=r(St,"P",{});var Hc=i(er);db=n(Hc,"This model is also a "),tr=r(Hc,"A",{href:!0,rel:!0});var Yy=i(tr);cb=n(Yy,"tf.keras.Model"),Yy.forEach(t),mb=n(Hc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc.forEach(t),pb=h(St),w(Jn.$$.fragment,St),hb=h(St),$t=r(St,"DIV",{class:!0});var ao=i($t);w(or.$$.fragment,ao),ub=h(ao),No=r(ao,"P",{});var hi=i(No);fb=n(hi,"The "),Jr=r(hi,"A",{href:!0});var Zy=i(Jr);gb=n(Zy,"TFCamembertForQuestionAnswering"),Zy.forEach(t),_b=n(hi," forward method, overrides the "),Al=r(hi,"CODE",{});var eT=i(Al);bb=n(eT,"__call__"),eT.forEach(t),kb=n(hi," special method."),hi.forEach(t),yb=h(ao),w(Gn.$$.fragment,ao),Tb=h(ao),w(Xn.$$.fragment,ao),wb=h(ao),w(Yn.$$.fragment,ao),ao.forEach(t),St.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(ZT)),g(u,"id","camembert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#camembert"),g(c,"class","relative group"),g(re,"id","overview"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#overview"),g(I,"class","relative group"),g(le,"href","https://arxiv.org/abs/1911.03894"),g(le,"rel","nofollow"),g(K,"href","roberta"),g(ce,"href","https://huggingface.co/camembert"),g(ce,"rel","nofollow"),g(me,"href","https://camembert-model.fr/"),g(me,"rel","nofollow"),g(ie,"id","transformers.CamembertConfig"),g(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ie,"href","#transformers.CamembertConfig"),g(S,"class","relative group"),g(Ie,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),g(Ae,"href","https://huggingface.co/camembert-base"),g(Ae,"rel","nofollow"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ne,"id","transformers.CamembertTokenizer"),g(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ne,"href","#transformers.CamembertTokenizer"),g(Oe,"class","relative group"),g(mr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(pr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(rs,"href","https://github.com/google/sentencepiece"),g(rs,"rel","nofollow"),g(hr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ro,"id","transformers.CamembertTokenizerFast"),g(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ro,"href","#transformers.CamembertTokenizerFast"),g(ro,"class","relative group"),g(_r,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(br,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(gs,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),g(gs,"rel","nofollow"),g(kr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ko,"id","transformers.CamembertModel"),g(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ko,"href","#transformers.CamembertModel"),g(io,"class","relative group"),g(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Cs,"rel","nofollow"),g(Es,"href","https://arxiv.org/abs/1706.03762"),g(Es,"rel","nofollow"),g(vr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jo,"id","transformers.CamembertForCausalLM"),g(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Jo,"href","#transformers.CamembertForCausalLM"),g(co,"class","relative group"),g($r,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ls,"rel","nofollow"),g(Cr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForCausalLM"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Yo,"id","transformers.CamembertForMaskedLM"),g(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Yo,"href","#transformers.CamembertForMaskedLM"),g(po,"class","relative group"),g(Fr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Bs,"rel","nofollow"),g(Er,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMaskedLM"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(on,"id","transformers.CamembertForSequenceClassification"),g(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(on,"href","#transformers.CamembertForSequenceClassification"),g(uo,"class","relative group"),g(Mr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qs,"rel","nofollow"),g(zr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForSequenceClassification"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dn,"id","transformers.CamembertForMultipleChoice"),g(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(dn,"href","#transformers.CamembertForMultipleChoice"),g(go,"class","relative group"),g(xr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Zs,"rel","nofollow"),g(qr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMultipleChoice"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pn,"id","transformers.CamembertForTokenClassification"),g(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(pn,"href","#transformers.CamembertForTokenClassification"),g(bo,"class","relative group"),g(jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(aa,"rel","nofollow"),g(Pr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForTokenClassification"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gn,"id","transformers.CamembertForQuestionAnswering"),g(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(gn,"href","#transformers.CamembertForQuestionAnswering"),g(yo,"class","relative group"),g(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ma,"rel","nofollow"),g(Or,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForQuestionAnswering"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Tn,"id","transformers.TFCamembertModel"),g(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Tn,"href","#transformers.TFCamembertModel"),g(wo,"class","relative group"),g(Nr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(_a,"rel","nofollow"),g(Ar,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Cn,"id","transformers.TFCamembertForCausalLM"),g(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Cn,"href","#transformers.TFCamembertForCausalLM"),g($o,"class","relative group"),g(Dr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g($a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g($a,"rel","nofollow"),g(Ir,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForCausalLM"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zn,"id","transformers.TFCamembertForMaskedLM"),g(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zn,"href","#transformers.TFCamembertForMaskedLM"),g(Fo,"class","relative group"),g(Sr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(qa,"rel","nofollow"),g(Br,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMaskedLM"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ln,"id","transformers.TFCamembertForSequenceClassification"),g(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ln,"href","#transformers.TFCamembertForSequenceClassification"),g(Mo,"class","relative group"),g(Wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Aa,"rel","nofollow"),g(Rr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForSequenceClassification"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(In,"id","transformers.TFCamembertForMultipleChoice"),g(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(In,"href","#transformers.TFCamembertForMultipleChoice"),g(xo,"class","relative group"),g(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ra,"rel","nofollow"),g(Kr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMultipleChoice"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Rn,"id","transformers.TFCamembertForTokenClassification"),g(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Rn,"href","#transformers.TFCamembertForTokenClassification"),g(jo,"class","relative group"),g(Hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ja,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ja,"rel","nofollow"),g(Qr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForTokenClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vn,"id","transformers.TFCamembertForQuestionAnswering"),g(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vn,"href","#transformers.TFCamembertForQuestionAnswering"),g(Lo,"class","relative group"),g(Vr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(tr,"rel","nofollow"),g(Jr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForQuestionAnswering"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,l),b(s,_,k),b(s,c,k),e(c,u),e(u,y),v(d,y,null),e(c,m),e(c,q),e(q,Te),b(s,ue,k),b(s,I,k),e(I,re),e(re,Z),v(E,Z,null),e(I,we),e(I,H),e(H,ve),b(s,fe,k),b(s,B,k),e(B,$e),e(B,le),e(le,J),e(B,Ce),b(s,ge,k),b(s,W,k),e(W,Fe),b(s,_e,k),b(s,R,k),e(R,pe),e(pe,Ee),b(s,oe,k),b(s,j,k),e(j,O),b(s,be,k),b(s,U,k),e(U,de),e(de,Me),e(de,K),e(K,ze),e(de,xe),b(s,L,k),b(s,se,k),e(se,G),e(se,ce),e(ce,qe),e(se,X),e(se,me),e(me,je),e(se,D),b(s,ke,k),b(s,S,k),e(S,ie),e(ie,ee),v(P,ee,null),e(S,Pe),e(S,N),e(N,Le),b(s,ye,k),b(s,f,k),v(M,f,null),e(f,Re),e(f,Y),e(Y,Ue),e(Y,Ie),e(Ie,x),e(Y,Ke),e(Y,Ae),e(Ae,He),e(Y,Qe),e(f,Ve),v(A,f,null),b(s,V,k),b(s,Oe,k),e(Oe,Ne),e(Ne,Q),v(De,Q,null),e(Oe,Je),e(Oe,he),e(he,Ge),b(s,ne,k),b(s,te,k),v(as,te,null),e(te,Qc),e(te,Bt),e(Bt,Vc),e(Bt,mr),e(mr,Jc),e(Bt,Gc),e(Bt,pr),e(pr,Xc),e(Bt,Yc),e(Bt,rs),e(rs,Zc),e(Bt,em),e(te,tm),e(te,is),e(is,om),e(is,hr),e(hr,nm),e(is,sm),e(te,am),e(te,Rt),v(ls,Rt,null),e(Rt,rm),e(Rt,ui),e(ui,im),e(Rt,lm),e(Rt,ds),e(ds,ur),e(ur,dm),e(ur,fi),e(fi,cm),e(ds,mm),e(ds,fr),e(fr,pm),e(fr,gi),e(gi,hm),e(te,um),e(te,Bo),v(cs,Bo,null),e(Bo,fm),e(Bo,ms),e(ms,gm),e(ms,_i),e(_i,_m),e(ms,bm),e(te,km),e(te,Wo),v(ps,Wo,null),e(Wo,ym),e(Wo,bi),e(bi,Tm),e(te,wm),e(te,gr),v(hs,gr,null),b(s,gd,k),b(s,ro,k),e(ro,Ro),e(Ro,ki),v(us,ki,null),e(ro,vm),e(ro,yi),e(yi,$m),b(s,_d,k),b(s,mt,k),v(fs,mt,null),e(mt,Cm),e(mt,Et),e(Et,Fm),e(Et,Ti),e(Ti,Em),e(Et,Mm),e(Et,_r),e(_r,zm),e(Et,xm),e(Et,br),e(br,qm),e(Et,jm),e(Et,gs),e(gs,Pm),e(Et,Lm),e(mt,Om),e(mt,_s),e(_s,Nm),e(_s,kr),e(kr,Am),e(_s,Dm),e(mt,Im),e(mt,Ut),v(bs,Ut,null),e(Ut,Sm),e(Ut,wi),e(wi,Bm),e(Ut,Wm),e(Ut,ks),e(ks,yr),e(yr,Rm),e(yr,vi),e(vi,Um),e(ks,Km),e(ks,Tr),e(Tr,Hm),e(Tr,$i),e($i,Qm),e(mt,Vm),e(mt,Uo),v(ys,Uo,null),e(Uo,Jm),e(Uo,Ci),e(Ci,Gm),b(s,bd,k),b(s,io,k),e(io,Ko),e(Ko,Fi),v(Ts,Fi,null),e(io,Xm),e(io,Ei),e(Ei,Ym),b(s,kd,k),b(s,Xe,k),v(ws,Xe,null),e(Xe,Zm),e(Xe,Mi),e(Mi,ep),e(Xe,tp),e(Xe,vs),e(vs,op),e(vs,wr),e(wr,np),e(vs,sp),e(Xe,ap),e(Xe,$s),e($s,rp),e($s,Cs),e(Cs,ip),e($s,lp),e(Xe,dp),e(Xe,Fs),e(Fs,cp),e(Fs,zi),e(zi,mp),e(Fs,pp),e(Xe,hp),e(Xe,tt),e(tt,up),e(tt,xi),e(xi,fp),e(tt,gp),e(tt,qi),e(qi,_p),e(tt,bp),e(tt,ji),e(ji,kp),e(tt,yp),e(tt,Pi),e(Pi,Tp),e(tt,wp),e(tt,Li),e(Li,vp),e(tt,$p),e(tt,Oi),e(Oi,Cp),e(tt,Fp),e(Xe,Ep),e(Xe,Ho),e(Ho,Mp),e(Ho,Ni),e(Ni,zp),e(Ho,xp),e(Ho,Es),e(Es,qp),e(Xe,jp),e(Xe,Mt),v(Ms,Mt,null),e(Mt,Pp),e(Mt,lo),e(lo,Lp),e(lo,vr),e(vr,Op),e(lo,Np),e(lo,Ai),e(Ai,Ap),e(lo,Dp),e(Mt,Ip),v(Qo,Mt,null),e(Mt,Sp),v(Vo,Mt,null),b(s,yd,k),b(s,co,k),e(co,Jo),e(Jo,Di),v(zs,Di,null),e(co,Bp),e(co,Ii),e(Ii,Wp),b(s,Td,k),b(s,pt,k),v(xs,pt,null),e(pt,Rp),e(pt,qs),e(qs,Up),e(qs,Si),e(Si,Kp),e(qs,Hp),e(pt,Qp),e(pt,js),e(js,Vp),e(js,$r),e($r,Jp),e(js,Gp),e(pt,Xp),e(pt,Ps),e(Ps,Yp),e(Ps,Ls),e(Ls,Zp),e(Ps,eh),e(pt,th),e(pt,zt),v(Os,zt,null),e(zt,oh),e(zt,mo),e(mo,nh),e(mo,Cr),e(Cr,sh),e(mo,ah),e(mo,Bi),e(Bi,rh),e(mo,ih),e(zt,lh),v(Go,zt,null),e(zt,dh),v(Xo,zt,null),b(s,wd,k),b(s,po,k),e(po,Yo),e(Yo,Wi),v(Ns,Wi,null),e(po,ch),e(po,Ri),e(Ri,mh),b(s,vd,k),b(s,ht,k),v(As,ht,null),e(ht,ph),e(ht,Ds),e(Ds,hh),e(Ds,Ui),e(Ui,uh),e(Ds,fh),e(ht,gh),e(ht,Is),e(Is,_h),e(Is,Fr),e(Fr,bh),e(Is,kh),e(ht,yh),e(ht,Ss),e(Ss,Th),e(Ss,Bs),e(Bs,wh),e(Ss,vh),e(ht,$h),e(ht,bt),v(Ws,bt,null),e(bt,Ch),e(bt,ho),e(ho,Fh),e(ho,Er),e(Er,Eh),e(ho,Mh),e(ho,Ki),e(Ki,zh),e(ho,xh),e(bt,qh),v(Zo,bt,null),e(bt,jh),v(en,bt,null),e(bt,Ph),v(tn,bt,null),b(s,$d,k),b(s,uo,k),e(uo,on),e(on,Hi),v(Rs,Hi,null),e(uo,Lh),e(uo,Qi),e(Qi,Oh),b(s,Cd,k),b(s,ut,k),v(Us,ut,null),e(ut,Nh),e(ut,Vi),e(Vi,Ah),e(ut,Dh),e(ut,Ks),e(Ks,Ih),e(Ks,Mr),e(Mr,Sh),e(Ks,Bh),e(ut,Wh),e(ut,Hs),e(Hs,Rh),e(Hs,Qs),e(Qs,Uh),e(Hs,Kh),e(ut,Hh),e(ut,et),v(Vs,et,null),e(et,Qh),e(et,fo),e(fo,Vh),e(fo,zr),e(zr,Jh),e(fo,Gh),e(fo,Ji),e(Ji,Xh),e(fo,Yh),e(et,Zh),v(nn,et,null),e(et,eu),v(sn,et,null),e(et,tu),v(an,et,null),e(et,ou),v(rn,et,null),e(et,nu),v(ln,et,null),b(s,Fd,k),b(s,go,k),e(go,dn),e(dn,Gi),v(Js,Gi,null),e(go,su),e(go,Xi),e(Xi,au),b(s,Ed,k),b(s,ft,k),v(Gs,ft,null),e(ft,ru),e(ft,Yi),e(Yi,iu),e(ft,lu),e(ft,Xs),e(Xs,du),e(Xs,xr),e(xr,cu),e(Xs,mu),e(ft,pu),e(ft,Ys),e(Ys,hu),e(Ys,Zs),e(Zs,uu),e(Ys,fu),e(ft,gu),e(ft,xt),v(ea,xt,null),e(xt,_u),e(xt,_o),e(_o,bu),e(_o,qr),e(qr,ku),e(_o,yu),e(_o,Zi),e(Zi,Tu),e(_o,wu),e(xt,vu),v(cn,xt,null),e(xt,$u),v(mn,xt,null),b(s,Md,k),b(s,bo,k),e(bo,pn),e(pn,el),v(ta,el,null),e(bo,Cu),e(bo,tl),e(tl,Fu),b(s,zd,k),b(s,gt,k),v(oa,gt,null),e(gt,Eu),e(gt,ol),e(ol,Mu),e(gt,zu),e(gt,na),e(na,xu),e(na,jr),e(jr,qu),e(na,ju),e(gt,Pu),e(gt,sa),e(sa,Lu),e(sa,aa),e(aa,Ou),e(sa,Nu),e(gt,Au),e(gt,kt),v(ra,kt,null),e(kt,Du),e(kt,ko),e(ko,Iu),e(ko,Pr),e(Pr,Su),e(ko,Bu),e(ko,nl),e(nl,Wu),e(ko,Ru),e(kt,Uu),v(hn,kt,null),e(kt,Ku),v(un,kt,null),e(kt,Hu),v(fn,kt,null),b(s,xd,k),b(s,yo,k),e(yo,gn),e(gn,sl),v(ia,sl,null),e(yo,Qu),e(yo,al),e(al,Vu),b(s,qd,k),b(s,_t,k),v(la,_t,null),e(_t,Ju),e(_t,_n),e(_n,Gu),e(_n,rl),e(rl,Xu),e(_n,Yu),e(_n,il),e(il,Zu),e(_t,ef),e(_t,da),e(da,tf),e(da,Lr),e(Lr,of),e(da,nf),e(_t,sf),e(_t,ca),e(ca,af),e(ca,ma),e(ma,rf),e(ca,lf),e(_t,df),e(_t,yt),v(pa,yt,null),e(yt,cf),e(yt,To),e(To,mf),e(To,Or),e(Or,pf),e(To,hf),e(To,ll),e(ll,uf),e(To,ff),e(yt,gf),v(bn,yt,null),e(yt,_f),v(kn,yt,null),e(yt,bf),v(yn,yt,null),b(s,jd,k),b(s,wo,k),e(wo,Tn),e(Tn,dl),v(ha,dl,null),e(wo,kf),e(wo,cl),e(cl,yf),b(s,Pd,k),b(s,ot,k),v(ua,ot,null),e(ot,Tf),e(ot,ml),e(ml,wf),e(ot,vf),e(ot,fa),e(fa,$f),e(fa,Nr),e(Nr,Cf),e(fa,Ff),e(ot,Ef),e(ot,ga),e(ga,Mf),e(ga,_a),e(_a,zf),e(ga,xf),e(ot,qf),v(wn,ot,null),e(ot,jf),e(ot,qt),v(ba,qt,null),e(qt,Pf),e(qt,vo),e(vo,Lf),e(vo,Ar),e(Ar,Of),e(vo,Nf),e(vo,pl),e(pl,Af),e(vo,Df),e(qt,If),v(vn,qt,null),e(qt,Sf),v($n,qt,null),b(s,Ld,k),b(s,$o,k),e($o,Cn),e(Cn,hl),v(ka,hl,null),e($o,Bf),e($o,ul),e(ul,Wf),b(s,Od,k),b(s,nt,k),v(ya,nt,null),e(nt,Rf),e(nt,Ta),e(Ta,Uf),e(Ta,fl),e(fl,Kf),e(Ta,Hf),e(nt,Qf),e(nt,wa),e(wa,Vf),e(wa,Dr),e(Dr,Jf),e(wa,Gf),e(nt,Xf),e(nt,va),e(va,Yf),e(va,$a),e($a,Zf),e(va,eg),e(nt,tg),v(Fn,nt,null),e(nt,og),e(nt,jt),v(Ca,jt,null),e(jt,ng),e(jt,Co),e(Co,sg),e(Co,Ir),e(Ir,ag),e(Co,rg),e(Co,gl),e(gl,ig),e(Co,lg),e(jt,dg),v(En,jt,null),e(jt,cg),v(Mn,jt,null),b(s,Nd,k),b(s,Fo,k),e(Fo,zn),e(zn,_l),v(Fa,_l,null),e(Fo,mg),e(Fo,bl),e(bl,pg),b(s,Ad,k),b(s,st,k),v(Ea,st,null),e(st,hg),e(st,Ma),e(Ma,ug),e(Ma,kl),e(kl,fg),e(Ma,gg),e(st,_g),e(st,za),e(za,bg),e(za,Sr),e(Sr,kg),e(za,yg),e(st,Tg),e(st,xa),e(xa,wg),e(xa,qa),e(qa,vg),e(xa,$g),e(st,Cg),v(xn,st,null),e(st,Fg),e(st,Tt),v(ja,Tt,null),e(Tt,Eg),e(Tt,Eo),e(Eo,Mg),e(Eo,Br),e(Br,zg),e(Eo,xg),e(Eo,yl),e(yl,qg),e(Eo,jg),e(Tt,Pg),v(qn,Tt,null),e(Tt,Lg),v(jn,Tt,null),e(Tt,Og),v(Pn,Tt,null),b(s,Dd,k),b(s,Mo,k),e(Mo,Ln),e(Ln,Tl),v(Pa,Tl,null),e(Mo,Ng),e(Mo,wl),e(wl,Ag),b(s,Id,k),b(s,at,k),v(La,at,null),e(at,Dg),e(at,vl),e(vl,Ig),e(at,Sg),e(at,Oa),e(Oa,Bg),e(Oa,Wr),e(Wr,Wg),e(Oa,Rg),e(at,Ug),e(at,Na),e(Na,Kg),e(Na,Aa),e(Aa,Hg),e(Na,Qg),e(at,Vg),v(On,at,null),e(at,Jg),e(at,wt),v(Da,wt,null),e(wt,Gg),e(wt,zo),e(zo,Xg),e(zo,Rr),e(Rr,Yg),e(zo,Zg),e(zo,$l),e($l,e_),e(zo,t_),e(wt,o_),v(Nn,wt,null),e(wt,n_),v(An,wt,null),e(wt,s_),v(Dn,wt,null),b(s,Sd,k),b(s,xo,k),e(xo,In),e(In,Cl),v(Ia,Cl,null),e(xo,a_),e(xo,Fl),e(Fl,r_),b(s,Bd,k),b(s,rt,k),v(Sa,rt,null),e(rt,i_),e(rt,El),e(El,l_),e(rt,d_),e(rt,Ba),e(Ba,c_),e(Ba,Ur),e(Ur,m_),e(Ba,p_),e(rt,h_),e(rt,Wa),e(Wa,u_),e(Wa,Ra),e(Ra,f_),e(Wa,g_),e(rt,__),v(Sn,rt,null),e(rt,b_),e(rt,Pt),v(Ua,Pt,null),e(Pt,k_),e(Pt,qo),e(qo,y_),e(qo,Kr),e(Kr,T_),e(qo,w_),e(qo,Ml),e(Ml,v_),e(qo,$_),e(Pt,C_),v(Bn,Pt,null),e(Pt,F_),v(Wn,Pt,null),b(s,Wd,k),b(s,jo,k),e(jo,Rn),e(Rn,zl),v(Ka,zl,null),e(jo,E_),e(jo,xl),e(xl,M_),b(s,Rd,k),b(s,it,k),v(Ha,it,null),e(it,z_),e(it,ql),e(ql,x_),e(it,q_),e(it,Qa),e(Qa,j_),e(Qa,Hr),e(Hr,P_),e(Qa,L_),e(it,O_),e(it,Va),e(Va,N_),e(Va,Ja),e(Ja,A_),e(Va,D_),e(it,I_),v(Un,it,null),e(it,S_),e(it,vt),v(Ga,vt,null),e(vt,B_),e(vt,Po),e(Po,W_),e(Po,Qr),e(Qr,R_),e(Po,U_),e(Po,jl),e(jl,K_),e(Po,H_),e(vt,Q_),v(Kn,vt,null),e(vt,V_),v(Hn,vt,null),e(vt,J_),v(Qn,vt,null),b(s,Ud,k),b(s,Lo,k),e(Lo,Vn),e(Vn,Pl),v(Xa,Pl,null),e(Lo,G_),e(Lo,Ll),e(Ll,X_),b(s,Kd,k),b(s,lt,k),v(Ya,lt,null),e(lt,Y_),e(lt,Oo),e(Oo,Z_),e(Oo,Ol),e(Ol,eb),e(Oo,tb),e(Oo,Nl),e(Nl,ob),e(Oo,nb),e(lt,sb),e(lt,Za),e(Za,ab),e(Za,Vr),e(Vr,rb),e(Za,ib),e(lt,lb),e(lt,er),e(er,db),e(er,tr),e(tr,cb),e(er,mb),e(lt,pb),v(Jn,lt,null),e(lt,hb),e(lt,$t),v(or,$t,null),e($t,ub),e($t,No),e(No,fb),e(No,Jr),e(Jr,gb),e(No,_b),e(No,Al),e(Al,bb),e(No,kb),e($t,yb),v(Gn,$t,null),e($t,Tb),v(Xn,$t,null),e($t,wb),v(Yn,$t,null),Hd=!0},p(s,[k]){const nr={};k&2&&(nr.$$scope={dirty:k,ctx:s}),A.$set(nr);const Dl={};k&2&&(Dl.$$scope={dirty:k,ctx:s}),Qo.$set(Dl);const Il={};k&2&&(Il.$$scope={dirty:k,ctx:s}),Vo.$set(Il);const Sl={};k&2&&(Sl.$$scope={dirty:k,ctx:s}),Go.$set(Sl);const sr={};k&2&&(sr.$$scope={dirty:k,ctx:s}),Xo.$set(sr);const Bl={};k&2&&(Bl.$$scope={dirty:k,ctx:s}),Zo.$set(Bl);const Wl={};k&2&&(Wl.$$scope={dirty:k,ctx:s}),en.$set(Wl);const Rl={};k&2&&(Rl.$$scope={dirty:k,ctx:s}),tn.$set(Rl);const ar={};k&2&&(ar.$$scope={dirty:k,ctx:s}),nn.$set(ar);const Ul={};k&2&&(Ul.$$scope={dirty:k,ctx:s}),sn.$set(Ul);const Kl={};k&2&&(Kl.$$scope={dirty:k,ctx:s}),an.$set(Kl);const Hl={};k&2&&(Hl.$$scope={dirty:k,ctx:s}),rn.$set(Hl);const Ql={};k&2&&(Ql.$$scope={dirty:k,ctx:s}),ln.$set(Ql);const Vl={};k&2&&(Vl.$$scope={dirty:k,ctx:s}),cn.$set(Vl);const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:s}),mn.$set(Jl);const rr={};k&2&&(rr.$$scope={dirty:k,ctx:s}),hn.$set(rr);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:s}),un.$set(Gl);const Ao={};k&2&&(Ao.$$scope={dirty:k,ctx:s}),fn.$set(Ao);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:s}),bn.$set(Xl);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:s}),kn.$set(Yl);const ir={};k&2&&(ir.$$scope={dirty:k,ctx:s}),yn.$set(ir);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:s}),wn.$set(Zl);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:s}),vn.$set(ed);const td={};k&2&&(td.$$scope={dirty:k,ctx:s}),$n.$set(td);const Do={};k&2&&(Do.$$scope={dirty:k,ctx:s}),Fn.$set(Do);const Io={};k&2&&(Io.$$scope={dirty:k,ctx:s}),En.$set(Io);const od={};k&2&&(od.$$scope={dirty:k,ctx:s}),Mn.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:s}),xn.$set(nd);const lr={};k&2&&(lr.$$scope={dirty:k,ctx:s}),qn.$set(lr);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:s}),jn.$set(sd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:s}),Pn.$set(ad);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:s}),On.$set(rd);const dt={};k&2&&(dt.$$scope={dirty:k,ctx:s}),Nn.$set(dt);const Wt={};k&2&&(Wt.$$scope={dirty:k,ctx:s}),An.$set(Wt);const id={};k&2&&(id.$$scope={dirty:k,ctx:s}),Dn.$set(id);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:s}),Sn.$set(ld);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:s}),Bn.$set(dd);const dr={};k&2&&(dr.$$scope={dirty:k,ctx:s}),Wn.$set(dr);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:s}),Un.$set(cd);const So={};k&2&&(So.$$scope={dirty:k,ctx:s}),Kn.$set(So);const md={};k&2&&(md.$$scope={dirty:k,ctx:s}),Hn.$set(md);const cr={};k&2&&(cr.$$scope={dirty:k,ctx:s}),Qn.$set(cr);const Gr={};k&2&&(Gr.$$scope={dirty:k,ctx:s}),Jn.$set(Gr);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:s}),Gn.$set(pd);const Xr={};k&2&&(Xr.$$scope={dirty:k,ctx:s}),Xn.$set(Xr);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:s}),Yn.$set(hd)},i(s){Hd||($(d.$$.fragment,s),$(E.$$.fragment,s),$(P.$$.fragment,s),$(M.$$.fragment,s),$(A.$$.fragment,s),$(De.$$.fragment,s),$(as.$$.fragment,s),$(ls.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(hs.$$.fragment,s),$(us.$$.fragment,s),$(fs.$$.fragment,s),$(bs.$$.fragment,s),$(ys.$$.fragment,s),$(Ts.$$.fragment,s),$(ws.$$.fragment,s),$(Ms.$$.fragment,s),$(Qo.$$.fragment,s),$(Vo.$$.fragment,s),$(zs.$$.fragment,s),$(xs.$$.fragment,s),$(Os.$$.fragment,s),$(Go.$$.fragment,s),$(Xo.$$.fragment,s),$(Ns.$$.fragment,s),$(As.$$.fragment,s),$(Ws.$$.fragment,s),$(Zo.$$.fragment,s),$(en.$$.fragment,s),$(tn.$$.fragment,s),$(Rs.$$.fragment,s),$(Us.$$.fragment,s),$(Vs.$$.fragment,s),$(nn.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(rn.$$.fragment,s),$(ln.$$.fragment,s),$(Js.$$.fragment,s),$(Gs.$$.fragment,s),$(ea.$$.fragment,s),$(cn.$$.fragment,s),$(mn.$$.fragment,s),$(ta.$$.fragment,s),$(oa.$$.fragment,s),$(ra.$$.fragment,s),$(hn.$$.fragment,s),$(un.$$.fragment,s),$(fn.$$.fragment,s),$(ia.$$.fragment,s),$(la.$$.fragment,s),$(pa.$$.fragment,s),$(bn.$$.fragment,s),$(kn.$$.fragment,s),$(yn.$$.fragment,s),$(ha.$$.fragment,s),$(ua.$$.fragment,s),$(wn.$$.fragment,s),$(ba.$$.fragment,s),$(vn.$$.fragment,s),$($n.$$.fragment,s),$(ka.$$.fragment,s),$(ya.$$.fragment,s),$(Fn.$$.fragment,s),$(Ca.$$.fragment,s),$(En.$$.fragment,s),$(Mn.$$.fragment,s),$(Fa.$$.fragment,s),$(Ea.$$.fragment,s),$(xn.$$.fragment,s),$(ja.$$.fragment,s),$(qn.$$.fragment,s),$(jn.$$.fragment,s),$(Pn.$$.fragment,s),$(Pa.$$.fragment,s),$(La.$$.fragment,s),$(On.$$.fragment,s),$(Da.$$.fragment,s),$(Nn.$$.fragment,s),$(An.$$.fragment,s),$(Dn.$$.fragment,s),$(Ia.$$.fragment,s),$(Sa.$$.fragment,s),$(Sn.$$.fragment,s),$(Ua.$$.fragment,s),$(Bn.$$.fragment,s),$(Wn.$$.fragment,s),$(Ka.$$.fragment,s),$(Ha.$$.fragment,s),$(Un.$$.fragment,s),$(Ga.$$.fragment,s),$(Kn.$$.fragment,s),$(Hn.$$.fragment,s),$(Qn.$$.fragment,s),$(Xa.$$.fragment,s),$(Ya.$$.fragment,s),$(Jn.$$.fragment,s),$(or.$$.fragment,s),$(Gn.$$.fragment,s),$(Xn.$$.fragment,s),$(Yn.$$.fragment,s),Hd=!0)},o(s){C(d.$$.fragment,s),C(E.$$.fragment,s),C(P.$$.fragment,s),C(M.$$.fragment,s),C(A.$$.fragment,s),C(De.$$.fragment,s),C(as.$$.fragment,s),C(ls.$$.fragment,s),C(cs.$$.fragment,s),C(ps.$$.fragment,s),C(hs.$$.fragment,s),C(us.$$.fragment,s),C(fs.$$.fragment,s),C(bs.$$.fragment,s),C(ys.$$.fragment,s),C(Ts.$$.fragment,s),C(ws.$$.fragment,s),C(Ms.$$.fragment,s),C(Qo.$$.fragment,s),C(Vo.$$.fragment,s),C(zs.$$.fragment,s),C(xs.$$.fragment,s),C(Os.$$.fragment,s),C(Go.$$.fragment,s),C(Xo.$$.fragment,s),C(Ns.$$.fragment,s),C(As.$$.fragment,s),C(Ws.$$.fragment,s),C(Zo.$$.fragment,s),C(en.$$.fragment,s),C(tn.$$.fragment,s),C(Rs.$$.fragment,s),C(Us.$$.fragment,s),C(Vs.$$.fragment,s),C(nn.$$.fragment,s),C(sn.$$.fragment,s),C(an.$$.fragment,s),C(rn.$$.fragment,s),C(ln.$$.fragment,s),C(Js.$$.fragment,s),C(Gs.$$.fragment,s),C(ea.$$.fragment,s),C(cn.$$.fragment,s),C(mn.$$.fragment,s),C(ta.$$.fragment,s),C(oa.$$.fragment,s),C(ra.$$.fragment,s),C(hn.$$.fragment,s),C(un.$$.fragment,s),C(fn.$$.fragment,s),C(ia.$$.fragment,s),C(la.$$.fragment,s),C(pa.$$.fragment,s),C(bn.$$.fragment,s),C(kn.$$.fragment,s),C(yn.$$.fragment,s),C(ha.$$.fragment,s),C(ua.$$.fragment,s),C(wn.$$.fragment,s),C(ba.$$.fragment,s),C(vn.$$.fragment,s),C($n.$$.fragment,s),C(ka.$$.fragment,s),C(ya.$$.fragment,s),C(Fn.$$.fragment,s),C(Ca.$$.fragment,s),C(En.$$.fragment,s),C(Mn.$$.fragment,s),C(Fa.$$.fragment,s),C(Ea.$$.fragment,s),C(xn.$$.fragment,s),C(ja.$$.fragment,s),C(qn.$$.fragment,s),C(jn.$$.fragment,s),C(Pn.$$.fragment,s),C(Pa.$$.fragment,s),C(La.$$.fragment,s),C(On.$$.fragment,s),C(Da.$$.fragment,s),C(Nn.$$.fragment,s),C(An.$$.fragment,s),C(Dn.$$.fragment,s),C(Ia.$$.fragment,s),C(Sa.$$.fragment,s),C(Sn.$$.fragment,s),C(Ua.$$.fragment,s),C(Bn.$$.fragment,s),C(Wn.$$.fragment,s),C(Ka.$$.fragment,s),C(Ha.$$.fragment,s),C(Un.$$.fragment,s),C(Ga.$$.fragment,s),C(Kn.$$.fragment,s),C(Hn.$$.fragment,s),C(Qn.$$.fragment,s),C(Xa.$$.fragment,s),C(Ya.$$.fragment,s),C(Jn.$$.fragment,s),C(or.$$.fragment,s),C(Gn.$$.fragment,s),C(Xn.$$.fragment,s),C(Yn.$$.fragment,s),Hd=!1},d(s){t(l),s&&t(_),s&&t(c),F(d),s&&t(ue),s&&t(I),F(E),s&&t(fe),s&&t(B),s&&t(ge),s&&t(W),s&&t(_e),s&&t(R),s&&t(oe),s&&t(j),s&&t(be),s&&t(U),s&&t(L),s&&t(se),s&&t(ke),s&&t(S),F(P),s&&t(ye),s&&t(f),F(M),F(A),s&&t(V),s&&t(Oe),F(De),s&&t(ne),s&&t(te),F(as),F(ls),F(cs),F(ps),F(hs),s&&t(gd),s&&t(ro),F(us),s&&t(_d),s&&t(mt),F(fs),F(bs),F(ys),s&&t(bd),s&&t(io),F(Ts),s&&t(kd),s&&t(Xe),F(ws),F(Ms),F(Qo),F(Vo),s&&t(yd),s&&t(co),F(zs),s&&t(Td),s&&t(pt),F(xs),F(Os),F(Go),F(Xo),s&&t(wd),s&&t(po),F(Ns),s&&t(vd),s&&t(ht),F(As),F(Ws),F(Zo),F(en),F(tn),s&&t($d),s&&t(uo),F(Rs),s&&t(Cd),s&&t(ut),F(Us),F(Vs),F(nn),F(sn),F(an),F(rn),F(ln),s&&t(Fd),s&&t(go),F(Js),s&&t(Ed),s&&t(ft),F(Gs),F(ea),F(cn),F(mn),s&&t(Md),s&&t(bo),F(ta),s&&t(zd),s&&t(gt),F(oa),F(ra),F(hn),F(un),F(fn),s&&t(xd),s&&t(yo),F(ia),s&&t(qd),s&&t(_t),F(la),F(pa),F(bn),F(kn),F(yn),s&&t(jd),s&&t(wo),F(ha),s&&t(Pd),s&&t(ot),F(ua),F(wn),F(ba),F(vn),F($n),s&&t(Ld),s&&t($o),F(ka),s&&t(Od),s&&t(nt),F(ya),F(Fn),F(Ca),F(En),F(Mn),s&&t(Nd),s&&t(Fo),F(Fa),s&&t(Ad),s&&t(st),F(Ea),F(xn),F(ja),F(qn),F(jn),F(Pn),s&&t(Dd),s&&t(Mo),F(Pa),s&&t(Id),s&&t(at),F(La),F(On),F(Da),F(Nn),F(An),F(Dn),s&&t(Sd),s&&t(xo),F(Ia),s&&t(Bd),s&&t(rt),F(Sa),F(Sn),F(Ua),F(Bn),F(Wn),s&&t(Wd),s&&t(jo),F(Ka),s&&t(Rd),s&&t(it),F(Ha),F(Un),F(Ga),F(Kn),F(Hn),F(Qn),s&&t(Ud),s&&t(Lo),F(Xa),s&&t(Kd),s&&t(lt),F(Ya),F(Jn),F(or),F(Gn),F(Xn),F(Yn)}}}const ZT={local:"camembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.CamembertConfig",title:"CamembertConfig"},{local:"transformers.CamembertTokenizer",title:"CamembertTokenizer"},{local:"transformers.CamembertTokenizerFast",title:"CamembertTokenizerFast"},{local:"transformers.CamembertModel",title:"CamembertModel"},{local:"transformers.CamembertForCausalLM",title:"CamembertForCausalLM"},{local:"transformers.CamembertForMaskedLM",title:"CamembertForMaskedLM"},{local:"transformers.CamembertForSequenceClassification",title:"CamembertForSequenceClassification"},{local:"transformers.CamembertForMultipleChoice",title:"CamembertForMultipleChoice"},{local:"transformers.CamembertForTokenClassification",title:"CamembertForTokenClassification"},{local:"transformers.CamembertForQuestionAnswering",title:"CamembertForQuestionAnswering"},{local:"transformers.TFCamembertModel",title:"TFCamembertModel"},{local:"transformers.TFCamembertForCausalLM",title:"TFCamembertForCasualLM"},{local:"transformers.TFCamembertForMaskedLM",title:"TFCamembertForMaskedLM"},{local:"transformers.TFCamembertForSequenceClassification",title:"TFCamembertForSequenceClassification"},{local:"transformers.TFCamembertForMultipleChoice",title:"TFCamembertForMultipleChoice"},{local:"transformers.TFCamembertForTokenClassification",title:"TFCamembertForTokenClassification"},{local:"transformers.TFCamembertForQuestionAnswering",title:"TFCamembertForQuestionAnswering"}],title:"CamemBERT"};function ew(z){return aT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class iw extends tT{constructor(l){super();oT(this,l,ew,YT,nT,{})}}export{iw as default,ZT as metadata};
