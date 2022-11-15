import{S as _T,i as bT,s as kT,e as a,k as p,w as T,t as o,M as yT,c as r,d as t,m as h,a as i,x as w,h as n,b as g,G as e,g as b,y as v,q as C,o as $,B as F,v as TT,L as Be}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as se}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as et}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Se}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function wT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertConfig, CamembertModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function vT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function CT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function $T(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function FT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForCausalLM, CamembertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function ET(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function MT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function zT(z){let l,_;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function qT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function xT(z){let l,_,c,u,y;return u=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of single-label classification:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of single-label classification:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function jT(z){let l,_;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function PT(z){let l,_,c,u,y;return u=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of multi-label classification:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of multi-label classification:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function LT(z){let l,_;return l=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function OT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function NT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function AT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function DT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function IT(z){let l,_;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function ST(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function BT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, CamembertForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function WT(z){let l,_;return l=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function RT(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function UT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function KT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function HT(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function QT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function VT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForCausalLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function JT(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function GT(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function XT(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function YT(z){let l,_;return l=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function ZT(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function ew(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function tw(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function ow(z){let l,_;return l=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFCamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function nw(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function sw(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function aw(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function rw(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function iw(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function lw(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function dw(z){let l,_;return l=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function cw(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),pe=p(),I=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=p(),E=a("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Te=o("model.fit()"),he=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),we=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),ve=o("fit()"),ue=o(" and "),W=a("code"),Ce=o("predict()"),fe=o(`, such as when creating your own layers or models with
the Keras `),R=a("code"),me=o("Functional"),$e=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=p(),j=a("ul"),O=a("li"),ge=o("a single Tensor with "),U=a("code"),le=o("input_ids"),Fe=o(" only and nothing else: "),K=a("code"),Ee=o("model(input_ids)"),Me=p(),L=a("li"),oe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),de=o("model([input_ids, attention_mask])"),ze=o(" or "),G=a("code"),ce=o("model([input_ids, attention_mask, token_type_ids])"),qe=p(),A=a("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=p(),P=a("p"),xe=o(`Note that when creating models and layers with
`),N=a("a"),je=o("subclassing"),be=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Q=i(m);x=r(Q,"LI",{});var Ue=i(x);ke=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),pe=h(Q),I=r(Q,"LI",{});var Ne=i(I);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),Q.forEach(t),Z=h(f),E=r(f,"P",{});var q=i(E);ye=n(q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(q,"CODE",{});var Ke=i(H);Te=n(Ke,"model.fit()"),Ke.forEach(t),he=n(q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(q,"CODE",{});var Ae=i(B);we=n(Ae,"model.fit()"),Ae.forEach(t),ie=n(q,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(q,"CODE",{});var He=i(V);ve=n(He,"fit()"),He.forEach(t),ue=n(q," and "),W=r(q,"CODE",{});var Qe=i(W);Ce=n(Qe,"predict()"),Qe.forEach(t),fe=n(q,`, such as when creating your own layers or models with
the Keras `),R=r(q,"CODE",{});var Oe=i(R);me=n(Oe,"Functional"),Oe.forEach(t),$e=n(q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),q.forEach(t),te=h(f),j=r(f,"UL",{});var D=i(j);O=r(D,"LI",{});var X=i(O);ge=n(X,"a single Tensor with "),U=r(X,"CODE",{});var Ve=i(U);le=n(Ve,"input_ids"),Ve.forEach(t),Fe=n(X," only and nothing else: "),K=r(X,"CODE",{});var Le=i(K);Ee=n(Le,"model(input_ids)"),Le.forEach(t),X.forEach(t),Me=h(D),L=r(D,"LI",{});var Y=i(L);oe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(Y,"CODE",{});var De=i(J);de=n(De,"model([input_ids, attention_mask])"),De.forEach(t),ze=n(Y," or "),G=r(Y,"CODE",{});var Je=i(G);ce=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(t),Y.forEach(t),qe=h(D),A=r(D,"LI",{});var Pe=i(A);_e=n(Pe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(Pe,"CODE",{});var Ie=i(S);re=n(Ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ie.forEach(t),Pe.forEach(t),D.forEach(t),ee=h(f),P=r(f,"P",{});var ne=i(P);xe=n(ne,`Note that when creating models and layers with
`),N=r(ne,"A",{href:!0,rel:!0});var Ge=i(N);je=n(Ge,"subclassing"),Ge.forEach(t),be=n(ne,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ne.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,ke),e(m,pe),e(m,I),e(I,ae),b(f,Z,M),b(f,E,M),e(E,ye),e(E,H),e(H,Te),e(E,he),e(E,B),e(B,we),e(E,ie),e(E,V),e(V,ve),e(E,ue),e(E,W),e(W,Ce),e(E,fe),e(E,R),e(R,me),e(E,$e),b(f,te,M),b(f,j,M),e(j,O),e(O,ge),e(O,U),e(U,le),e(O,Fe),e(O,K),e(K,Ee),e(j,Me),e(j,L),e(L,oe),e(L,J),e(J,de),e(L,ze),e(L,G),e(G,ce),e(j,qe),e(j,A),e(A,_e),e(A,S),e(S,re),b(f,ee,M),b(f,P,M),e(P,xe),e(P,N),e(N,je),e(P,be)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(Z),f&&t(E),f&&t(te),f&&t(j),f&&t(ee),f&&t(P)}}}function mw(z){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function pw(z){let l,_,c,u,y;return u=new We({props:{code:`from transformers import CamembertTokenizer, TFCamembertForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),T(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),w(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),v(u,d,m),y=!0},p:Be,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){$(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),F(u,d)}}}function hw(z){let l,_;return l=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(l.$$.fragment)},l(c){w(l.$$.fragment,c)},m(c,u){v(l,c,u),_=!0},p:Be,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){$(l.$$.fragment,c),_=!1},d(c){F(l,c)}}}function uw(z){let l,_,c,u,y,d,m,x,ke,pe,I,ae,Z,E,ye,H,Te,he,B,we,ie,V,ve,ue,W,Ce,fe,R,me,$e,te,j,O,ge,U,le,Fe,K,Ee,Me,L,oe,J,de,ze,G,ce,qe,A,_e,S,re,ee,P,xe,N,je,be,f,M,Re,Q,Ue,Ne,q,Ke,Ae,He,Qe,Oe,D,X,Ve,Le,Y,De,Je,Pe,Ie,ne,Ge,om,Uo,vd,co,Ko,bi,cs,nm,ki,sm,Cd,Ze,ms,am,Wt,rm,_r,im,lm,br,dm,cm,ps,mm,pm,hm,hs,um,kr,fm,gm,_m,Ht,us,bm,yi,km,ym,fs,yr,Tm,Ti,wm,vm,Tr,Cm,wi,$m,Fm,Ho,gs,Em,_s,Mm,vi,zm,qm,xm,Qo,bs,jm,Ci,Pm,Lm,wr,ks,$d,mo,Vo,$i,ys,Om,Fi,Nm,Fd,pt,Ts,Am,Mt,Dm,Ei,Im,Sm,vr,Bm,Wm,Cr,Rm,Um,ws,Km,Hm,Qm,vs,Vm,$r,Jm,Gm,Xm,Qt,Cs,Ym,Mi,Zm,ep,$s,Fr,tp,zi,op,np,Er,sp,qi,ap,rp,Jo,Fs,ip,xi,lp,Ed,po,Go,ji,Es,dp,Pi,cp,Md,Xe,Ms,mp,Li,pp,hp,zs,up,Mr,fp,gp,_p,qs,bp,xs,kp,yp,Tp,js,wp,Oi,vp,Cp,$p,ot,Fp,Ni,Ep,Mp,Ai,zp,qp,Di,xp,jp,Ii,Pp,Lp,Si,Op,Np,Bi,Ap,Dp,Ip,Xo,Sp,Wi,Bp,Wp,Ps,Rp,Up,zt,Ls,Kp,ho,Hp,zr,Qp,Vp,Ri,Jp,Gp,Xp,Yo,Yp,Zo,zd,uo,en,Ui,Os,Zp,Ki,eh,qd,ht,Ns,th,As,oh,Hi,nh,sh,ah,Ds,rh,qr,ih,lh,dh,Is,ch,Ss,mh,ph,hh,qt,Bs,uh,fo,fh,xr,gh,_h,Qi,bh,kh,yh,tn,Th,on,xd,go,nn,Vi,Ws,wh,Ji,vh,jd,ut,Rs,Ch,Us,$h,Gi,Fh,Eh,Mh,Ks,zh,jr,qh,xh,jh,Hs,Ph,Qs,Lh,Oh,Nh,kt,Vs,Ah,_o,Dh,Pr,Ih,Sh,Xi,Bh,Wh,Rh,sn,Uh,an,Kh,rn,Pd,bo,ln,Yi,Js,Hh,Zi,Qh,Ld,ft,Gs,Vh,el,Jh,Gh,Xs,Xh,Lr,Yh,Zh,eu,Ys,tu,Zs,ou,nu,su,tt,ea,au,ko,ru,Or,iu,lu,tl,du,cu,mu,dn,pu,cn,hu,mn,uu,pn,fu,hn,Od,yo,un,ol,ta,gu,nl,_u,Nd,gt,oa,bu,sl,ku,yu,na,Tu,Nr,wu,vu,Cu,sa,$u,aa,Fu,Eu,Mu,xt,ra,zu,To,qu,Ar,xu,ju,al,Pu,Lu,Ou,fn,Nu,gn,Ad,wo,_n,rl,ia,Au,il,Du,Dd,_t,la,Iu,ll,Su,Bu,da,Wu,Dr,Ru,Uu,Ku,ca,Hu,ma,Qu,Vu,Ju,yt,pa,Gu,vo,Xu,Ir,Yu,Zu,dl,ef,tf,of,bn,nf,kn,sf,yn,Id,Co,Tn,cl,ha,af,ml,rf,Sd,bt,ua,lf,wn,df,pl,cf,mf,hl,pf,hf,fa,uf,Sr,ff,gf,_f,ga,bf,_a,kf,yf,Tf,Tt,ba,wf,$o,vf,Br,Cf,$f,ul,Ff,Ef,Mf,vn,zf,Cn,qf,$n,Bd,Fo,Fn,fl,ka,xf,gl,jf,Wd,nt,ya,Pf,_l,Lf,Of,Ta,Nf,Wr,Af,Df,If,wa,Sf,va,Bf,Wf,Rf,En,Uf,jt,Ca,Kf,Eo,Hf,Rr,Qf,Vf,bl,Jf,Gf,Xf,Mn,Yf,zn,Rd,Mo,qn,kl,$a,Zf,yl,eg,Ud,st,Fa,tg,Ea,og,Tl,ng,sg,ag,Ma,rg,Ur,ig,lg,dg,za,cg,qa,mg,pg,hg,xn,ug,Pt,xa,fg,zo,gg,Kr,_g,bg,wl,kg,yg,Tg,jn,wg,Pn,Kd,qo,Ln,vl,ja,vg,Cl,Cg,Hd,at,Pa,$g,La,Fg,$l,Eg,Mg,zg,Oa,qg,Hr,xg,jg,Pg,Na,Lg,Aa,Og,Ng,Ag,On,Dg,wt,Da,Ig,xo,Sg,Qr,Bg,Wg,Fl,Rg,Ug,Kg,Nn,Hg,An,Qg,Dn,Qd,jo,In,El,Ia,Vg,Ml,Jg,Vd,rt,Sa,Gg,zl,Xg,Yg,Ba,Zg,Vr,e_,t_,o_,Wa,n_,Ra,s_,a_,r_,Sn,i_,vt,Ua,l_,Po,d_,Jr,c_,m_,ql,p_,h_,u_,Bn,f_,Wn,g_,Rn,Jd,Lo,Un,xl,Ka,__,jl,b_,Gd,it,Ha,k_,Pl,y_,T_,Qa,w_,Gr,v_,C_,$_,Va,F_,Ja,E_,M_,z_,Kn,q_,Lt,Ga,x_,Oo,j_,Xr,P_,L_,Ll,O_,N_,A_,Hn,D_,Qn,Xd,No,Vn,Ol,Xa,I_,Nl,S_,Yd,lt,Ya,B_,Al,W_,R_,Za,U_,Yr,K_,H_,Q_,er,V_,tr,J_,G_,X_,Jn,Y_,Ct,or,Z_,Ao,eb,Zr,tb,ob,Dl,nb,sb,ab,Gn,rb,Xn,ib,Yn,Zd,Do,Zn,Il,nr,lb,Sl,db,ec,dt,sr,cb,Io,mb,Bl,pb,hb,Wl,ub,fb,gb,ar,_b,ei,bb,kb,yb,rr,Tb,ir,wb,vb,Cb,es,$b,$t,lr,Fb,So,Eb,ti,Mb,zb,Rl,qb,xb,jb,ts,Pb,os,Lb,ns,tc;return d=new et({}),E=new et({}),P=new et({}),M=new se({props:{name:"class transformers.CamembertConfig",anchor:"transformers.CamembertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> or <a href="/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a>.`,name:"vocab_size"},{anchor:"transformers.CamembertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.CamembertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.CamembertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.CamembertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.CamembertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.CamembertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.CamembertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.CamembertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.CamembertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel">CamembertModel</a> or <a href="/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel">TFCamembertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.CamembertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.CamembertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.CamembertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.CamembertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.CamembertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/configuration_camembert.py#L39"}}),Uo=new Se({props:{anchor:"transformers.CamembertConfig.example",$$slots:{default:[wT]},$$scope:{ctx:z}}}),cs=new et({}),ms=new se({props:{name:"class transformers.CamembertTokenizer",anchor:"transformers.CamembertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L45"}}),us=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L161",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),gs=new se({props:{name:"get_special_tokens_mask",anchor:"transformers.CamembertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L187",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L214",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new se({props:{name:"save_vocabulary",anchor:"transformers.CamembertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L298"}}),ys=new et({}),Ts=new se({props:{name:"class transformers.CamembertTokenizerFast",anchor:"transformers.CamembertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L53"}}),Cs=new se({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L145",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fs=new se({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L171",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Es=new et({}),Ms=new se({props:{name:"class transformers.CamembertModel",anchor:"transformers.CamembertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.CamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L749"}}),Ls=new se({props:{name:"forward",anchor:"transformers.CamembertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L795",returnDescription:`
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
`}}),Yo=new Ye({props:{$$slots:{default:[vT]},$$scope:{ctx:z}}}),Zo=new Se({props:{anchor:"transformers.CamembertModel.forward.example",$$slots:{default:[CT]},$$scope:{ctx:z}}}),Os=new et({}),Ns=new se({props:{name:"class transformers.CamembertForCausalLM",anchor:"transformers.CamembertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1430"}}),Bs=new se({props:{name:"forward",anchor:"transformers.CamembertForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1456",returnDescription:`
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
`}}),tn=new Ye({props:{$$slots:{default:[$T]},$$scope:{ctx:z}}}),on=new Se({props:{anchor:"transformers.CamembertForCausalLM.forward.example",$$slots:{default:[FT]},$$scope:{ctx:z}}}),Ws=new et({}),Rs=new se({props:{name:"class transformers.CamembertForMaskedLM",anchor:"transformers.CamembertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L938"}}),Vs=new se({props:{name:"forward",anchor:"transformers.CamembertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L967",returnDescription:`
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
`}}),sn=new Ye({props:{$$slots:{default:[ET]},$$scope:{ctx:z}}}),an=new Se({props:{anchor:"transformers.CamembertForMaskedLM.forward.example",$$slots:{default:[MT]},$$scope:{ctx:z}}}),rn=new Se({props:{anchor:"transformers.CamembertForMaskedLM.forward.example-2",$$slots:{default:[zT]},$$scope:{ctx:z}}}),Js=new et({}),Gs=new se({props:{name:"class transformers.CamembertForSequenceClassification",anchor:"transformers.CamembertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1043"}}),ea=new se({props:{name:"forward",anchor:"transformers.CamembertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1057",returnDescription:`
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
`}}),dn=new Ye({props:{$$slots:{default:[qT]},$$scope:{ctx:z}}}),cn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example",$$slots:{default:[xT]},$$scope:{ctx:z}}}),mn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-2",$$slots:{default:[jT]},$$scope:{ctx:z}}}),pn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-3",$$slots:{default:[PT]},$$scope:{ctx:z}}}),hn=new Se({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-4",$$slots:{default:[LT]},$$scope:{ctx:z}}}),ta=new et({}),oa=new se({props:{name:"class transformers.CamembertForMultipleChoice",anchor:"transformers.CamembertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1144"}}),ra=new se({props:{name:"forward",anchor:"transformers.CamembertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1157",returnDescription:`
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
`}}),fn=new Ye({props:{$$slots:{default:[OT]},$$scope:{ctx:z}}}),gn=new Se({props:{anchor:"transformers.CamembertForMultipleChoice.forward.example",$$slots:{default:[NT]},$$scope:{ctx:z}}}),ia=new et({}),la=new se({props:{name:"class transformers.CamembertForTokenClassification",anchor:"transformers.CamembertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1240"}}),pa=new se({props:{name:"forward",anchor:"transformers.CamembertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1258",returnDescription:`
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
`}}),bn=new Ye({props:{$$slots:{default:[AT]},$$scope:{ctx:z}}}),kn=new Se({props:{anchor:"transformers.CamembertForTokenClassification.forward.example",$$slots:{default:[DT]},$$scope:{ctx:z}}}),yn=new Se({props:{anchor:"transformers.CamembertForTokenClassification.forward.example-2",$$slots:{default:[IT]},$$scope:{ctx:z}}}),ha=new et({}),ua=new se({props:{name:"class transformers.CamembertForQuestionAnswering",anchor:"transformers.CamembertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1328"}}),ba=new se({props:{name:"forward",anchor:"transformers.CamembertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1342",returnDescription:`
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
`}}),vn=new Ye({props:{$$slots:{default:[ST]},$$scope:{ctx:z}}}),Cn=new Se({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example",$$slots:{default:[BT]},$$scope:{ctx:z}}}),$n=new Se({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example-2",$$slots:{default:[WT]},$$scope:{ctx:z}}}),ka=new et({}),ya=new se({props:{name:"class transformers.TFCamembertModel",anchor:"transformers.TFCamembertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L923"}}),En=new Ye({props:{$$slots:{default:[RT]},$$scope:{ctx:z}}}),Ca=new se({props:{name:"call",anchor:"transformers.TFCamembertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Mn=new Ye({props:{$$slots:{default:[UT]},$$scope:{ctx:z}}}),zn=new Se({props:{anchor:"transformers.TFCamembertModel.call.example",$$slots:{default:[KT]},$$scope:{ctx:z}}}),$a=new et({}),Fa=new se({props:{name:"class transformers.TFCamembertForCausalLM",anchor:"transformers.TFCamembertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1594"}}),xn=new Ye({props:{$$slots:{default:[HT]},$$scope:{ctx:z}}}),xa=new se({props:{name:"call",anchor:"transformers.TFCamembertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),jn=new Ye({props:{$$slots:{default:[QT]},$$scope:{ctx:z}}}),Pn=new Se({props:{anchor:"transformers.TFCamembertForCausalLM.call.example",$$slots:{default:[VT]},$$scope:{ctx:z}}}),ja=new et({}),Pa=new se({props:{name:"class transformers.TFCamembertForMaskedLM",anchor:"transformers.TFCamembertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1072"}}),On=new Ye({props:{$$slots:{default:[JT]},$$scope:{ctx:z}}}),Da=new se({props:{name:"call",anchor:"transformers.TFCamembertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Nn=new Ye({props:{$$slots:{default:[GT]},$$scope:{ctx:z}}}),An=new Se({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example",$$slots:{default:[XT]},$$scope:{ctx:z}}}),Dn=new Se({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example-2",$$slots:{default:[YT]},$$scope:{ctx:z}}}),Ia=new et({}),Sa=new se({props:{name:"class transformers.TFCamembertForSequenceClassification",anchor:"transformers.TFCamembertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1194"}}),Sn=new Ye({props:{$$slots:{default:[ZT]},$$scope:{ctx:z}}}),Ua=new se({props:{name:"call",anchor:"transformers.TFCamembertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Bn=new Ye({props:{$$slots:{default:[ew]},$$scope:{ctx:z}}}),Wn=new Se({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example",$$slots:{default:[tw]},$$scope:{ctx:z}}}),Rn=new Se({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example-2",$$slots:{default:[ow]},$$scope:{ctx:z}}}),Ka=new et({}),Ha=new se({props:{name:"class transformers.TFCamembertForMultipleChoice",anchor:"transformers.TFCamembertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1371"}}),Kn=new Ye({props:{$$slots:{default:[nw]},$$scope:{ctx:z}}}),Ga=new se({props:{name:"call",anchor:"transformers.TFCamembertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Hn=new Ye({props:{$$slots:{default:[sw]},$$scope:{ctx:z}}}),Qn=new Se({props:{anchor:"transformers.TFCamembertForMultipleChoice.call.example",$$slots:{default:[aw]},$$scope:{ctx:z}}}),Xa=new et({}),Ya=new se({props:{name:"class transformers.TFCamembertForTokenClassification",anchor:"transformers.TFCamembertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1279"}}),Jn=new Ye({props:{$$slots:{default:[rw]},$$scope:{ctx:z}}}),or=new se({props:{name:"call",anchor:"transformers.TFCamembertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Gn=new Ye({props:{$$slots:{default:[iw]},$$scope:{ctx:z}}}),Xn=new Se({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example",$$slots:{default:[lw]},$$scope:{ctx:z}}}),Yn=new Se({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example-2",$$slots:{default:[dw]},$$scope:{ctx:z}}}),nr=new et({}),sr=new se({props:{name:"class transformers.TFCamembertForQuestionAnswering",anchor:"transformers.TFCamembertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1495"}}),es=new Ye({props:{$$slots:{default:[cw]},$$scope:{ctx:z}}}),lr=new se({props:{name:"call",anchor:"transformers.TFCamembertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ts=new Ye({props:{$$slots:{default:[mw]},$$scope:{ctx:z}}}),os=new Se({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example",$$slots:{default:[pw]},$$scope:{ctx:z}}}),ns=new Se({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example-2",$$slots:{default:[hw]},$$scope:{ctx:z}}}),{c(){l=a("meta"),_=p(),c=a("h1"),u=a("a"),y=a("span"),T(d.$$.fragment),m=p(),x=a("span"),ke=o("CamemBERT"),pe=p(),I=a("h2"),ae=a("a"),Z=a("span"),T(E.$$.fragment),ye=p(),H=a("span"),Te=o("Overview"),he=p(),B=a("p"),we=o("The CamemBERT model was proposed in "),ie=a("a"),V=o("CamemBERT: a Tasty French Language Model"),ve=o(` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),ue=p(),W=a("p"),Ce=o("The abstract from the paper is the following:"),fe=p(),R=a("p"),me=a("em"),$e=o(`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),te=p(),j=a("p"),O=o("Tips:"),ge=p(),U=a("ul"),le=a("li"),Fe=o("This implementation is the same as RoBERTa. Refer to the "),K=a("a"),Ee=o("documentation of RoBERTa"),Me=o(` for usage examples
as well as the information relative to the inputs and outputs.`),L=p(),oe=a("p"),J=o("This model was contributed by "),de=a("a"),ze=o("camembert"),G=o(". The original code can be found "),ce=a("a"),qe=o("here"),A=o("."),_e=p(),S=a("h2"),re=a("a"),ee=a("span"),T(P.$$.fragment),xe=p(),N=a("span"),je=o("CamembertConfig"),be=p(),f=a("div"),T(M.$$.fragment),Re=p(),Q=a("p"),Ue=o("This is the configuration class to store the configuration of a "),Ne=a("a"),q=o("CamembertModel"),Ke=o(" or a "),Ae=a("a"),He=o("TFCamembertModel"),Qe=o(`. It is
used to instantiate a Camembert model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Camembert
`),Oe=a("a"),D=o("camembert-base"),X=o(" architecture."),Ve=p(),Le=a("p"),Y=o("Configuration objects inherit from "),De=a("a"),Je=o("PretrainedConfig"),Pe=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),ne=o("PretrainedConfig"),Ge=o(" for more information."),om=p(),T(Uo.$$.fragment),vd=p(),co=a("h2"),Ko=a("a"),bi=a("span"),T(cs.$$.fragment),nm=p(),ki=a("span"),sm=o("CamembertTokenizer"),Cd=p(),Ze=a("div"),T(ms.$$.fragment),am=p(),Wt=a("p"),rm=o("Adapted from "),_r=a("a"),im=o("RobertaTokenizer"),lm=o(" and "),br=a("a"),dm=o("XLNetTokenizer"),cm=o(`. Construct a CamemBERT tokenizer. Based on
`),ps=a("a"),mm=o("SentencePiece"),pm=o("."),hm=p(),hs=a("p"),um=o("This tokenizer inherits from "),kr=a("a"),fm=o("PreTrainedTokenizer"),gm=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),_m=p(),Ht=a("div"),T(us.$$.fragment),bm=p(),yi=a("p"),km=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),ym=p(),fs=a("ul"),yr=a("li"),Tm=o("single sequence: "),Ti=a("code"),wm=o("<s> X </s>"),vm=p(),Tr=a("li"),Cm=o("pair of sequences: "),wi=a("code"),$m=o("<s> A </s></s> B </s>"),Fm=p(),Ho=a("div"),T(gs.$$.fragment),Em=p(),_s=a("p"),Mm=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vi=a("code"),zm=o("prepare_for_model"),qm=o(" method."),xm=p(),Qo=a("div"),T(bs.$$.fragment),jm=p(),Ci=a("p"),Pm=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Lm=p(),wr=a("div"),T(ks.$$.fragment),$d=p(),mo=a("h2"),Vo=a("a"),$i=a("span"),T(ys.$$.fragment),Om=p(),Fi=a("span"),Nm=o("CamembertTokenizerFast"),Fd=p(),pt=a("div"),T(Ts.$$.fragment),Am=p(),Mt=a("p"),Dm=o("Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),Ei=a("em"),Im=o("tokenizers"),Sm=o(` library). Adapted from
`),vr=a("a"),Bm=o("RobertaTokenizer"),Wm=o(" and "),Cr=a("a"),Rm=o("XLNetTokenizer"),Um=o(`. Based on
`),ws=a("a"),Km=o("BPE"),Hm=o("."),Qm=p(),vs=a("p"),Vm=o("This tokenizer inherits from "),$r=a("a"),Jm=o("PreTrainedTokenizerFast"),Gm=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Xm=p(),Qt=a("div"),T(Cs.$$.fragment),Ym=p(),Mi=a("p"),Zm=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),ep=p(),$s=a("ul"),Fr=a("li"),tp=o("single sequence: "),zi=a("code"),op=o("<s> X </s>"),np=p(),Er=a("li"),sp=o("pair of sequences: "),qi=a("code"),ap=o("<s> A </s></s> B </s>"),rp=p(),Jo=a("div"),T(Fs.$$.fragment),ip=p(),xi=a("p"),lp=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Ed=p(),po=a("h2"),Go=a("a"),ji=a("span"),T(Es.$$.fragment),dp=p(),Pi=a("span"),cp=o("CamembertModel"),Md=p(),Xe=a("div"),T(Ms.$$.fragment),mp=p(),Li=a("p"),pp=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),hp=p(),zs=a("p"),up=o("This model inherits from "),Mr=a("a"),fp=o("PreTrainedModel"),gp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p=p(),qs=a("p"),bp=o("This model is also a PyTorch "),xs=a("a"),kp=o("torch.nn.Module"),yp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=p(),js=a("p"),wp=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Oi=a("em"),vp=o(`Attention is
all you need`),Cp=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),$p=p(),ot=a("p"),Fp=o("To behave as a decoder the model needs to be initialized with the "),Ni=a("code"),Ep=o("is_decoder"),Mp=o(` argument of the configuration set to
`),Ai=a("code"),zp=o("True"),qp=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),Di=a("code"),xp=o("is_decoder"),jp=o(` argument and
`),Ii=a("code"),Pp=o("add_cross_attention"),Lp=o(" set to "),Si=a("code"),Op=o("True"),Np=o("; an "),Bi=a("code"),Ap=o("encoder_hidden_states"),Dp=o(" is then expected as an input to the forward pass."),Ip=p(),Xo=a("p"),Sp=o(".. _"),Wi=a("em"),Bp=o("Attention is all you need"),Wp=o(": "),Ps=a("a"),Rp=o("https://arxiv.org/abs/1706.03762"),Up=p(),zt=a("div"),T(Ls.$$.fragment),Kp=p(),ho=a("p"),Hp=o("The "),zr=a("a"),Qp=o("CamembertModel"),Vp=o(" forward method, overrides the "),Ri=a("code"),Jp=o("__call__"),Gp=o(" special method."),Xp=p(),T(Yo.$$.fragment),Yp=p(),T(Zo.$$.fragment),zd=p(),uo=a("h2"),en=a("a"),Ui=a("span"),T(Os.$$.fragment),Zp=p(),Ki=a("span"),eh=o("CamembertForCausalLM"),qd=p(),ht=a("div"),T(Ns.$$.fragment),th=p(),As=a("p"),oh=o("CamemBERT Model with a "),Hi=a("code"),nh=o("language modeling"),sh=o(" head on top for CLM fine-tuning."),ah=p(),Ds=a("p"),rh=o("This model inherits from "),qr=a("a"),ih=o("PreTrainedModel"),lh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh=p(),Is=a("p"),ch=o("This model is also a PyTorch "),Ss=a("a"),mh=o("torch.nn.Module"),ph=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hh=p(),qt=a("div"),T(Bs.$$.fragment),uh=p(),fo=a("p"),fh=o("The "),xr=a("a"),gh=o("CamembertForCausalLM"),_h=o(" forward method, overrides the "),Qi=a("code"),bh=o("__call__"),kh=o(" special method."),yh=p(),T(tn.$$.fragment),Th=p(),T(on.$$.fragment),xd=p(),go=a("h2"),nn=a("a"),Vi=a("span"),T(Ws.$$.fragment),wh=p(),Ji=a("span"),vh=o("CamembertForMaskedLM"),jd=p(),ut=a("div"),T(Rs.$$.fragment),Ch=p(),Us=a("p"),$h=o("CamemBERT Model with a "),Gi=a("code"),Fh=o("language modeling"),Eh=o(" head on top."),Mh=p(),Ks=a("p"),zh=o("This model inherits from "),jr=a("a"),qh=o("PreTrainedModel"),xh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jh=p(),Hs=a("p"),Ph=o("This model is also a PyTorch "),Qs=a("a"),Lh=o("torch.nn.Module"),Oh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nh=p(),kt=a("div"),T(Vs.$$.fragment),Ah=p(),_o=a("p"),Dh=o("The "),Pr=a("a"),Ih=o("CamembertForMaskedLM"),Sh=o(" forward method, overrides the "),Xi=a("code"),Bh=o("__call__"),Wh=o(" special method."),Rh=p(),T(sn.$$.fragment),Uh=p(),T(an.$$.fragment),Kh=p(),T(rn.$$.fragment),Pd=p(),bo=a("h2"),ln=a("a"),Yi=a("span"),T(Js.$$.fragment),Hh=p(),Zi=a("span"),Qh=o("CamembertForSequenceClassification"),Ld=p(),ft=a("div"),T(Gs.$$.fragment),Vh=p(),el=a("p"),Jh=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Gh=p(),Xs=a("p"),Xh=o("This model inherits from "),Lr=a("a"),Yh=o("PreTrainedModel"),Zh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eu=p(),Ys=a("p"),tu=o("This model is also a PyTorch "),Zs=a("a"),ou=o("torch.nn.Module"),nu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),su=p(),tt=a("div"),T(ea.$$.fragment),au=p(),ko=a("p"),ru=o("The "),Or=a("a"),iu=o("CamembertForSequenceClassification"),lu=o(" forward method, overrides the "),tl=a("code"),du=o("__call__"),cu=o(" special method."),mu=p(),T(dn.$$.fragment),pu=p(),T(cn.$$.fragment),hu=p(),T(mn.$$.fragment),uu=p(),T(pn.$$.fragment),fu=p(),T(hn.$$.fragment),Od=p(),yo=a("h2"),un=a("a"),ol=a("span"),T(ta.$$.fragment),gu=p(),nl=a("span"),_u=o("CamembertForMultipleChoice"),Nd=p(),gt=a("div"),T(oa.$$.fragment),bu=p(),sl=a("p"),ku=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),yu=p(),na=a("p"),Tu=o("This model inherits from "),Nr=a("a"),wu=o("PreTrainedModel"),vu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=p(),sa=a("p"),$u=o("This model is also a PyTorch "),aa=a("a"),Fu=o("torch.nn.Module"),Eu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mu=p(),xt=a("div"),T(ra.$$.fragment),zu=p(),To=a("p"),qu=o("The "),Ar=a("a"),xu=o("CamembertForMultipleChoice"),ju=o(" forward method, overrides the "),al=a("code"),Pu=o("__call__"),Lu=o(" special method."),Ou=p(),T(fn.$$.fragment),Nu=p(),T(gn.$$.fragment),Ad=p(),wo=a("h2"),_n=a("a"),rl=a("span"),T(ia.$$.fragment),Au=p(),il=a("span"),Du=o("CamembertForTokenClassification"),Dd=p(),_t=a("div"),T(la.$$.fragment),Iu=p(),ll=a("p"),Su=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Bu=p(),da=a("p"),Wu=o("This model inherits from "),Dr=a("a"),Ru=o("PreTrainedModel"),Uu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ku=p(),ca=a("p"),Hu=o("This model is also a PyTorch "),ma=a("a"),Qu=o("torch.nn.Module"),Vu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju=p(),yt=a("div"),T(pa.$$.fragment),Gu=p(),vo=a("p"),Xu=o("The "),Ir=a("a"),Yu=o("CamembertForTokenClassification"),Zu=o(" forward method, overrides the "),dl=a("code"),ef=o("__call__"),tf=o(" special method."),of=p(),T(bn.$$.fragment),nf=p(),T(kn.$$.fragment),sf=p(),T(yn.$$.fragment),Id=p(),Co=a("h2"),Tn=a("a"),cl=a("span"),T(ha.$$.fragment),af=p(),ml=a("span"),rf=o("CamembertForQuestionAnswering"),Sd=p(),bt=a("div"),T(ua.$$.fragment),lf=p(),wn=a("p"),df=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pl=a("code"),cf=o("span start logits"),mf=o(" and "),hl=a("code"),pf=o("span end logits"),hf=p(),fa=a("p"),uf=o("This model inherits from "),Sr=a("a"),ff=o("PreTrainedModel"),gf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_f=p(),ga=a("p"),bf=o("This model is also a PyTorch "),_a=a("a"),kf=o("torch.nn.Module"),yf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tf=p(),Tt=a("div"),T(ba.$$.fragment),wf=p(),$o=a("p"),vf=o("The "),Br=a("a"),Cf=o("CamembertForQuestionAnswering"),$f=o(" forward method, overrides the "),ul=a("code"),Ff=o("__call__"),Ef=o(" special method."),Mf=p(),T(vn.$$.fragment),zf=p(),T(Cn.$$.fragment),qf=p(),T($n.$$.fragment),Bd=p(),Fo=a("h2"),Fn=a("a"),fl=a("span"),T(ka.$$.fragment),xf=p(),gl=a("span"),jf=o("TFCamembertModel"),Wd=p(),nt=a("div"),T(ya.$$.fragment),Pf=p(),_l=a("p"),Lf=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),Of=p(),Ta=a("p"),Nf=o("This model inherits from "),Wr=a("a"),Af=o("TFPreTrainedModel"),Df=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),If=p(),wa=a("p"),Sf=o("This model is also a "),va=a("a"),Bf=o("tf.keras.Model"),Wf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rf=p(),T(En.$$.fragment),Uf=p(),jt=a("div"),T(Ca.$$.fragment),Kf=p(),Eo=a("p"),Hf=o("The "),Rr=a("a"),Qf=o("TFCamembertModel"),Vf=o(" forward method, overrides the "),bl=a("code"),Jf=o("__call__"),Gf=o(" special method."),Xf=p(),T(Mn.$$.fragment),Yf=p(),T(zn.$$.fragment),Rd=p(),Mo=a("h2"),qn=a("a"),kl=a("span"),T($a.$$.fragment),Zf=p(),yl=a("span"),eg=o("TFCamembertForCasualLM"),Ud=p(),st=a("div"),T(Fa.$$.fragment),tg=p(),Ea=a("p"),og=o("CamemBERT Model with a "),Tl=a("code"),ng=o("language modeling"),sg=o(" head on top for CLM fine-tuning."),ag=p(),Ma=a("p"),rg=o("This model inherits from "),Ur=a("a"),ig=o("TFPreTrainedModel"),lg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=p(),za=a("p"),cg=o("This model is also a "),qa=a("a"),mg=o("tf.keras.Model"),pg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hg=p(),T(xn.$$.fragment),ug=p(),Pt=a("div"),T(xa.$$.fragment),fg=p(),zo=a("p"),gg=o("The "),Kr=a("a"),_g=o("TFCamembertForCausalLM"),bg=o(" forward method, overrides the "),wl=a("code"),kg=o("__call__"),yg=o(" special method."),Tg=p(),T(jn.$$.fragment),wg=p(),T(Pn.$$.fragment),Kd=p(),qo=a("h2"),Ln=a("a"),vl=a("span"),T(ja.$$.fragment),vg=p(),Cl=a("span"),Cg=o("TFCamembertForMaskedLM"),Hd=p(),at=a("div"),T(Pa.$$.fragment),$g=p(),La=a("p"),Fg=o("CamemBERT Model with a "),$l=a("code"),Eg=o("language modeling"),Mg=o(" head on top."),zg=p(),Oa=a("p"),qg=o("This model inherits from "),Hr=a("a"),xg=o("TFPreTrainedModel"),jg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=p(),Na=a("p"),Lg=o("This model is also a "),Aa=a("a"),Og=o("tf.keras.Model"),Ng=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ag=p(),T(On.$$.fragment),Dg=p(),wt=a("div"),T(Da.$$.fragment),Ig=p(),xo=a("p"),Sg=o("The "),Qr=a("a"),Bg=o("TFCamembertForMaskedLM"),Wg=o(" forward method, overrides the "),Fl=a("code"),Rg=o("__call__"),Ug=o(" special method."),Kg=p(),T(Nn.$$.fragment),Hg=p(),T(An.$$.fragment),Qg=p(),T(Dn.$$.fragment),Qd=p(),jo=a("h2"),In=a("a"),El=a("span"),T(Ia.$$.fragment),Vg=p(),Ml=a("span"),Jg=o("TFCamembertForSequenceClassification"),Vd=p(),rt=a("div"),T(Sa.$$.fragment),Gg=p(),zl=a("p"),Xg=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Yg=p(),Ba=a("p"),Zg=o("This model inherits from "),Vr=a("a"),e_=o("TFPreTrainedModel"),t_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),o_=p(),Wa=a("p"),n_=o("This model is also a "),Ra=a("a"),s_=o("tf.keras.Model"),a_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r_=p(),T(Sn.$$.fragment),i_=p(),vt=a("div"),T(Ua.$$.fragment),l_=p(),Po=a("p"),d_=o("The "),Jr=a("a"),c_=o("TFCamembertForSequenceClassification"),m_=o(" forward method, overrides the "),ql=a("code"),p_=o("__call__"),h_=o(" special method."),u_=p(),T(Bn.$$.fragment),f_=p(),T(Wn.$$.fragment),g_=p(),T(Rn.$$.fragment),Jd=p(),Lo=a("h2"),Un=a("a"),xl=a("span"),T(Ka.$$.fragment),__=p(),jl=a("span"),b_=o("TFCamembertForMultipleChoice"),Gd=p(),it=a("div"),T(Ha.$$.fragment),k_=p(),Pl=a("p"),y_=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),T_=p(),Qa=a("p"),w_=o("This model inherits from "),Gr=a("a"),v_=o("TFPreTrainedModel"),C_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$_=p(),Va=a("p"),F_=o("This model is also a "),Ja=a("a"),E_=o("tf.keras.Model"),M_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z_=p(),T(Kn.$$.fragment),q_=p(),Lt=a("div"),T(Ga.$$.fragment),x_=p(),Oo=a("p"),j_=o("The "),Xr=a("a"),P_=o("TFCamembertForMultipleChoice"),L_=o(" forward method, overrides the "),Ll=a("code"),O_=o("__call__"),N_=o(" special method."),A_=p(),T(Hn.$$.fragment),D_=p(),T(Qn.$$.fragment),Xd=p(),No=a("h2"),Vn=a("a"),Ol=a("span"),T(Xa.$$.fragment),I_=p(),Nl=a("span"),S_=o("TFCamembertForTokenClassification"),Yd=p(),lt=a("div"),T(Ya.$$.fragment),B_=p(),Al=a("p"),W_=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),R_=p(),Za=a("p"),U_=o("This model inherits from "),Yr=a("a"),K_=o("TFPreTrainedModel"),H_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Q_=p(),er=a("p"),V_=o("This model is also a "),tr=a("a"),J_=o("tf.keras.Model"),G_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),X_=p(),T(Jn.$$.fragment),Y_=p(),Ct=a("div"),T(or.$$.fragment),Z_=p(),Ao=a("p"),eb=o("The "),Zr=a("a"),tb=o("TFCamembertForTokenClassification"),ob=o(" forward method, overrides the "),Dl=a("code"),nb=o("__call__"),sb=o(" special method."),ab=p(),T(Gn.$$.fragment),rb=p(),T(Xn.$$.fragment),ib=p(),T(Yn.$$.fragment),Zd=p(),Do=a("h2"),Zn=a("a"),Il=a("span"),T(nr.$$.fragment),lb=p(),Sl=a("span"),db=o("TFCamembertForQuestionAnswering"),ec=p(),dt=a("div"),T(sr.$$.fragment),cb=p(),Io=a("p"),mb=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Bl=a("code"),pb=o("span start logits"),hb=o(" and "),Wl=a("code"),ub=o("span end logits"),fb=o(")."),gb=p(),ar=a("p"),_b=o("This model inherits from "),ei=a("a"),bb=o("TFPreTrainedModel"),kb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=p(),rr=a("p"),Tb=o("This model is also a "),ir=a("a"),wb=o("tf.keras.Model"),vb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cb=p(),T(es.$$.fragment),$b=p(),$t=a("div"),T(lr.$$.fragment),Fb=p(),So=a("p"),Eb=o("The "),ti=a("a"),Mb=o("TFCamembertForQuestionAnswering"),zb=o(" forward method, overrides the "),Rl=a("code"),qb=o("__call__"),xb=o(" special method."),jb=p(),T(ts.$$.fragment),Pb=p(),T(os.$$.fragment),Lb=p(),T(ns.$$.fragment),this.h()},l(s){const k=yT('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=h(s),c=r(s,"H1",{class:!0});var dr=i(c);u=r(dr,"A",{id:!0,class:!0,href:!0});var Ul=i(u);y=r(Ul,"SPAN",{});var Kl=i(y);w(d.$$.fragment,Kl),Kl.forEach(t),Ul.forEach(t),m=h(dr),x=r(dr,"SPAN",{});var Hl=i(x);ke=n(Hl,"CamemBERT"),Hl.forEach(t),dr.forEach(t),pe=h(s),I=r(s,"H2",{class:!0});var cr=i(I);ae=r(cr,"A",{id:!0,class:!0,href:!0});var Ql=i(ae);Z=r(Ql,"SPAN",{});var Vl=i(Z);w(E.$$.fragment,Vl),Vl.forEach(t),Ql.forEach(t),ye=h(cr),H=r(cr,"SPAN",{});var Jl=i(H);Te=n(Jl,"Overview"),Jl.forEach(t),cr.forEach(t),he=h(s),B=r(s,"P",{});var mr=i(B);we=n(mr,"The CamemBERT model was proposed in "),ie=r(mr,"A",{href:!0,rel:!0});var Gl=i(ie);V=n(Gl,"CamemBERT: a Tasty French Language Model"),Gl.forEach(t),ve=n(mr,` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),mr.forEach(t),ue=h(s),W=r(s,"P",{});var Xl=i(W);Ce=n(Xl,"The abstract from the paper is the following:"),Xl.forEach(t),fe=h(s),R=r(s,"P",{});var Yl=i(R);me=r(Yl,"EM",{});var Zl=i(me);$e=n(Zl,`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),Zl.forEach(t),Yl.forEach(t),te=h(s),j=r(s,"P",{});var ed=i(j);O=n(ed,"Tips:"),ed.forEach(t),ge=h(s),U=r(s,"UL",{});var td=i(U);le=r(td,"LI",{});var pr=i(le);Fe=n(pr,"This implementation is the same as RoBERTa. Refer to the "),K=r(pr,"A",{href:!0});var od=i(K);Ee=n(od,"documentation of RoBERTa"),od.forEach(t),Me=n(pr,` for usage examples
as well as the information relative to the inputs and outputs.`),pr.forEach(t),td.forEach(t),L=h(s),oe=r(s,"P",{});var Bo=i(oe);J=n(Bo,"This model was contributed by "),de=r(Bo,"A",{href:!0,rel:!0});var nd=i(de);ze=n(nd,"camembert"),nd.forEach(t),G=n(Bo,". The original code can be found "),ce=r(Bo,"A",{href:!0,rel:!0});var sd=i(ce);qe=n(sd,"here"),sd.forEach(t),A=n(Bo,"."),Bo.forEach(t),_e=h(s),S=r(s,"H2",{class:!0});var hr=i(S);re=r(hr,"A",{id:!0,class:!0,href:!0});var ad=i(re);ee=r(ad,"SPAN",{});var rd=i(ee);w(P.$$.fragment,rd),rd.forEach(t),ad.forEach(t),xe=h(hr),N=r(hr,"SPAN",{});var id=i(N);je=n(id,"CamembertConfig"),id.forEach(t),hr.forEach(t),be=h(s),f=r(s,"DIV",{class:!0});var Rt=i(f);w(M.$$.fragment,Rt),Re=h(Rt),Q=r(Rt,"P",{});var Ut=i(Q);Ue=n(Ut,"This is the configuration class to store the configuration of a "),Ne=r(Ut,"A",{href:!0});var ld=i(Ne);q=n(ld,"CamembertModel"),ld.forEach(t),Ke=n(Ut," or a "),Ae=r(Ut,"A",{href:!0});var dd=i(Ae);He=n(dd,"TFCamembertModel"),dd.forEach(t),Qe=n(Ut,`. It is
used to instantiate a Camembert model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the Camembert
`),Oe=r(Ut,"A",{href:!0,rel:!0});var cd=i(Oe);D=n(cd,"camembert-base"),cd.forEach(t),X=n(Ut," architecture."),Ut.forEach(t),Ve=h(Rt),Le=r(Rt,"P",{});var Wo=i(Le);Y=n(Wo,"Configuration objects inherit from "),De=r(Wo,"A",{href:!0});var md=i(De);Je=n(md,"PretrainedConfig"),md.forEach(t),Pe=n(Wo,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(Wo,"A",{href:!0});var pd=i(Ie);ne=n(pd,"PretrainedConfig"),pd.forEach(t),Ge=n(Wo," for more information."),Wo.forEach(t),om=h(Rt),w(Uo.$$.fragment,Rt),Rt.forEach(t),vd=h(s),co=r(s,"H2",{class:!0});var ur=i(co);Ko=r(ur,"A",{id:!0,class:!0,href:!0});var hd=i(Ko);bi=r(hd,"SPAN",{});var ud=i(bi);w(cs.$$.fragment,ud),ud.forEach(t),hd.forEach(t),nm=h(ur),ki=r(ur,"SPAN",{});var fd=i(ki);sm=n(fd,"CamembertTokenizer"),fd.forEach(t),ur.forEach(t),Cd=h(s),Ze=r(s,"DIV",{class:!0});var ct=i(Ze);w(ms.$$.fragment,ct),am=h(ct),Wt=r(ct,"P",{});var Kt=i(Wt);rm=n(Kt,"Adapted from "),_r=r(Kt,"A",{href:!0});var gd=i(_r);im=n(gd,"RobertaTokenizer"),gd.forEach(t),lm=n(Kt," and "),br=r(Kt,"A",{href:!0});var _d=i(br);dm=n(_d,"XLNetTokenizer"),_d.forEach(t),cm=n(Kt,`. Construct a CamemBERT tokenizer. Based on
`),ps=r(Kt,"A",{href:!0,rel:!0});var bd=i(ps);mm=n(bd,"SentencePiece"),bd.forEach(t),pm=n(Kt,"."),Kt.forEach(t),hm=h(ct),hs=r(ct,"P",{});var fr=i(hs);um=n(fr,"This tokenizer inherits from "),kr=r(fr,"A",{href:!0});var kd=i(kr);fm=n(kd,"PreTrainedTokenizer"),kd.forEach(t),gm=n(fr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fr.forEach(t),_m=h(ct),Ht=r(ct,"DIV",{class:!0});var Ro=i(Ht);w(us.$$.fragment,Ro),bm=h(Ro),yi=r(Ro,"P",{});var yd=i(yi);km=n(yd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),yd.forEach(t),ym=h(Ro),fs=r(Ro,"UL",{});var gr=i(fs);yr=r(gr,"LI",{});var Ob=i(yr);Tm=n(Ob,"single sequence: "),Ti=r(Ob,"CODE",{});var Ib=i(Ti);wm=n(Ib,"<s> X </s>"),Ib.forEach(t),Ob.forEach(t),vm=h(gr),Tr=r(gr,"LI",{});var Nb=i(Tr);Cm=n(Nb,"pair of sequences: "),wi=r(Nb,"CODE",{});var Sb=i(wi);$m=n(Sb,"<s> A </s></s> B </s>"),Sb.forEach(t),Nb.forEach(t),gr.forEach(t),Ro.forEach(t),Fm=h(ct),Ho=r(ct,"DIV",{class:!0});var oc=i(Ho);w(gs.$$.fragment,oc),Em=h(oc),_s=r(oc,"P",{});var nc=i(_s);Mm=n(nc,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),vi=r(nc,"CODE",{});var Bb=i(vi);zm=n(Bb,"prepare_for_model"),Bb.forEach(t),qm=n(nc," method."),nc.forEach(t),oc.forEach(t),xm=h(ct),Qo=r(ct,"DIV",{class:!0});var sc=i(Qo);w(bs.$$.fragment,sc),jm=h(sc),Ci=r(sc,"P",{});var Wb=i(Ci);Pm=n(Wb,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Wb.forEach(t),sc.forEach(t),Lm=h(ct),wr=r(ct,"DIV",{class:!0});var Rb=i(wr);w(ks.$$.fragment,Rb),Rb.forEach(t),ct.forEach(t),$d=h(s),mo=r(s,"H2",{class:!0});var ac=i(mo);Vo=r(ac,"A",{id:!0,class:!0,href:!0});var Ub=i(Vo);$i=r(Ub,"SPAN",{});var Kb=i($i);w(ys.$$.fragment,Kb),Kb.forEach(t),Ub.forEach(t),Om=h(ac),Fi=r(ac,"SPAN",{});var Hb=i(Fi);Nm=n(Hb,"CamembertTokenizerFast"),Hb.forEach(t),ac.forEach(t),Fd=h(s),pt=r(s,"DIV",{class:!0});var Vt=i(pt);w(Ts.$$.fragment,Vt),Am=h(Vt),Mt=r(Vt,"P",{});var Jt=i(Mt);Dm=n(Jt,"Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),Ei=r(Jt,"EM",{});var Qb=i(Ei);Im=n(Qb,"tokenizers"),Qb.forEach(t),Sm=n(Jt,` library). Adapted from
`),vr=r(Jt,"A",{href:!0});var Vb=i(vr);Bm=n(Vb,"RobertaTokenizer"),Vb.forEach(t),Wm=n(Jt," and "),Cr=r(Jt,"A",{href:!0});var Jb=i(Cr);Rm=n(Jb,"XLNetTokenizer"),Jb.forEach(t),Um=n(Jt,`. Based on
`),ws=r(Jt,"A",{href:!0,rel:!0});var Gb=i(ws);Km=n(Gb,"BPE"),Gb.forEach(t),Hm=n(Jt,"."),Jt.forEach(t),Qm=h(Vt),vs=r(Vt,"P",{});var rc=i(vs);Vm=n(rc,"This tokenizer inherits from "),$r=r(rc,"A",{href:!0});var Xb=i($r);Jm=n(Xb,"PreTrainedTokenizerFast"),Xb.forEach(t),Gm=n(rc,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),rc.forEach(t),Xm=h(Vt),Qt=r(Vt,"DIV",{class:!0});var oi=i(Qt);w(Cs.$$.fragment,oi),Ym=h(oi),Mi=r(oi,"P",{});var Yb=i(Mi);Zm=n(Yb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),Yb.forEach(t),ep=h(oi),$s=r(oi,"UL",{});var ic=i($s);Fr=r(ic,"LI",{});var Ab=i(Fr);tp=n(Ab,"single sequence: "),zi=r(Ab,"CODE",{});var Zb=i(zi);op=n(Zb,"<s> X </s>"),Zb.forEach(t),Ab.forEach(t),np=h(ic),Er=r(ic,"LI",{});var Db=i(Er);sp=n(Db,"pair of sequences: "),qi=r(Db,"CODE",{});var ek=i(qi);ap=n(ek,"<s> A </s></s> B </s>"),ek.forEach(t),Db.forEach(t),ic.forEach(t),oi.forEach(t),rp=h(Vt),Jo=r(Vt,"DIV",{class:!0});var lc=i(Jo);w(Fs.$$.fragment,lc),ip=h(lc),xi=r(lc,"P",{});var tk=i(xi);lp=n(tk,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),tk.forEach(t),lc.forEach(t),Vt.forEach(t),Ed=h(s),po=r(s,"H2",{class:!0});var dc=i(po);Go=r(dc,"A",{id:!0,class:!0,href:!0});var ok=i(Go);ji=r(ok,"SPAN",{});var nk=i(ji);w(Es.$$.fragment,nk),nk.forEach(t),ok.forEach(t),dp=h(dc),Pi=r(dc,"SPAN",{});var sk=i(Pi);cp=n(sk,"CamembertModel"),sk.forEach(t),dc.forEach(t),Md=h(s),Xe=r(s,"DIV",{class:!0});var mt=i(Xe);w(Ms.$$.fragment,mt),mp=h(mt),Li=r(mt,"P",{});var ak=i(Li);pp=n(ak,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),ak.forEach(t),hp=h(mt),zs=r(mt,"P",{});var cc=i(zs);up=n(cc,"This model inherits from "),Mr=r(cc,"A",{href:!0});var rk=i(Mr);fp=n(rk,"PreTrainedModel"),rk.forEach(t),gp=n(cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cc.forEach(t),_p=h(mt),qs=r(mt,"P",{});var mc=i(qs);bp=n(mc,"This model is also a PyTorch "),xs=r(mc,"A",{href:!0,rel:!0});var ik=i(xs);kp=n(ik,"torch.nn.Module"),ik.forEach(t),yp=n(mc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc.forEach(t),Tp=h(mt),js=r(mt,"P",{});var pc=i(js);wp=n(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Oi=r(pc,"EM",{});var lk=i(Oi);vp=n(lk,`Attention is
all you need`),lk.forEach(t),Cp=n(pc,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),pc.forEach(t),$p=h(mt),ot=r(mt,"P",{});var Ft=i(ot);Fp=n(Ft,"To behave as a decoder the model needs to be initialized with the "),Ni=r(Ft,"CODE",{});var dk=i(Ni);Ep=n(dk,"is_decoder"),dk.forEach(t),Mp=n(Ft,` argument of the configuration set to
`),Ai=r(Ft,"CODE",{});var ck=i(Ai);zp=n(ck,"True"),ck.forEach(t),qp=n(Ft,". To be used in a Seq2Seq model, the model needs to initialized with both "),Di=r(Ft,"CODE",{});var mk=i(Di);xp=n(mk,"is_decoder"),mk.forEach(t),jp=n(Ft,` argument and
`),Ii=r(Ft,"CODE",{});var pk=i(Ii);Pp=n(pk,"add_cross_attention"),pk.forEach(t),Lp=n(Ft," set to "),Si=r(Ft,"CODE",{});var hk=i(Si);Op=n(hk,"True"),hk.forEach(t),Np=n(Ft,"; an "),Bi=r(Ft,"CODE",{});var uk=i(Bi);Ap=n(uk,"encoder_hidden_states"),uk.forEach(t),Dp=n(Ft," is then expected as an input to the forward pass."),Ft.forEach(t),Ip=h(mt),Xo=r(mt,"P",{});var Td=i(Xo);Sp=n(Td,".. _"),Wi=r(Td,"EM",{});var fk=i(Wi);Bp=n(fk,"Attention is all you need"),fk.forEach(t),Wp=n(Td,": "),Ps=r(Td,"A",{href:!0,rel:!0});var gk=i(Ps);Rp=n(gk,"https://arxiv.org/abs/1706.03762"),gk.forEach(t),Td.forEach(t),Up=h(mt),zt=r(mt,"DIV",{class:!0});var ss=i(zt);w(Ls.$$.fragment,ss),Kp=h(ss),ho=r(ss,"P",{});var ni=i(ho);Hp=n(ni,"The "),zr=r(ni,"A",{href:!0});var _k=i(zr);Qp=n(_k,"CamembertModel"),_k.forEach(t),Vp=n(ni," forward method, overrides the "),Ri=r(ni,"CODE",{});var bk=i(Ri);Jp=n(bk,"__call__"),bk.forEach(t),Gp=n(ni," special method."),ni.forEach(t),Xp=h(ss),w(Yo.$$.fragment,ss),Yp=h(ss),w(Zo.$$.fragment,ss),ss.forEach(t),mt.forEach(t),zd=h(s),uo=r(s,"H2",{class:!0});var hc=i(uo);en=r(hc,"A",{id:!0,class:!0,href:!0});var kk=i(en);Ui=r(kk,"SPAN",{});var yk=i(Ui);w(Os.$$.fragment,yk),yk.forEach(t),kk.forEach(t),Zp=h(hc),Ki=r(hc,"SPAN",{});var Tk=i(Ki);eh=n(Tk,"CamembertForCausalLM"),Tk.forEach(t),hc.forEach(t),qd=h(s),ht=r(s,"DIV",{class:!0});var Gt=i(ht);w(Ns.$$.fragment,Gt),th=h(Gt),As=r(Gt,"P",{});var uc=i(As);oh=n(uc,"CamemBERT Model with a "),Hi=r(uc,"CODE",{});var wk=i(Hi);nh=n(wk,"language modeling"),wk.forEach(t),sh=n(uc," head on top for CLM fine-tuning."),uc.forEach(t),ah=h(Gt),Ds=r(Gt,"P",{});var fc=i(Ds);rh=n(fc,"This model inherits from "),qr=r(fc,"A",{href:!0});var vk=i(qr);ih=n(vk,"PreTrainedModel"),vk.forEach(t),lh=n(fc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc.forEach(t),dh=h(Gt),Is=r(Gt,"P",{});var gc=i(Is);ch=n(gc,"This model is also a PyTorch "),Ss=r(gc,"A",{href:!0,rel:!0});var Ck=i(Ss);mh=n(Ck,"torch.nn.Module"),Ck.forEach(t),ph=n(gc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gc.forEach(t),hh=h(Gt),qt=r(Gt,"DIV",{class:!0});var as=i(qt);w(Bs.$$.fragment,as),uh=h(as),fo=r(as,"P",{});var si=i(fo);fh=n(si,"The "),xr=r(si,"A",{href:!0});var $k=i(xr);gh=n($k,"CamembertForCausalLM"),$k.forEach(t),_h=n(si," forward method, overrides the "),Qi=r(si,"CODE",{});var Fk=i(Qi);bh=n(Fk,"__call__"),Fk.forEach(t),kh=n(si," special method."),si.forEach(t),yh=h(as),w(tn.$$.fragment,as),Th=h(as),w(on.$$.fragment,as),as.forEach(t),Gt.forEach(t),xd=h(s),go=r(s,"H2",{class:!0});var _c=i(go);nn=r(_c,"A",{id:!0,class:!0,href:!0});var Ek=i(nn);Vi=r(Ek,"SPAN",{});var Mk=i(Vi);w(Ws.$$.fragment,Mk),Mk.forEach(t),Ek.forEach(t),wh=h(_c),Ji=r(_c,"SPAN",{});var zk=i(Ji);vh=n(zk,"CamembertForMaskedLM"),zk.forEach(t),_c.forEach(t),jd=h(s),ut=r(s,"DIV",{class:!0});var Xt=i(ut);w(Rs.$$.fragment,Xt),Ch=h(Xt),Us=r(Xt,"P",{});var bc=i(Us);$h=n(bc,"CamemBERT Model with a "),Gi=r(bc,"CODE",{});var qk=i(Gi);Fh=n(qk,"language modeling"),qk.forEach(t),Eh=n(bc," head on top."),bc.forEach(t),Mh=h(Xt),Ks=r(Xt,"P",{});var kc=i(Ks);zh=n(kc,"This model inherits from "),jr=r(kc,"A",{href:!0});var xk=i(jr);qh=n(xk,"PreTrainedModel"),xk.forEach(t),xh=n(kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc.forEach(t),jh=h(Xt),Hs=r(Xt,"P",{});var yc=i(Hs);Ph=n(yc,"This model is also a PyTorch "),Qs=r(yc,"A",{href:!0,rel:!0});var jk=i(Qs);Lh=n(jk,"torch.nn.Module"),jk.forEach(t),Oh=n(yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yc.forEach(t),Nh=h(Xt),kt=r(Xt,"DIV",{class:!0});var Yt=i(kt);w(Vs.$$.fragment,Yt),Ah=h(Yt),_o=r(Yt,"P",{});var ai=i(_o);Dh=n(ai,"The "),Pr=r(ai,"A",{href:!0});var Pk=i(Pr);Ih=n(Pk,"CamembertForMaskedLM"),Pk.forEach(t),Sh=n(ai," forward method, overrides the "),Xi=r(ai,"CODE",{});var Lk=i(Xi);Bh=n(Lk,"__call__"),Lk.forEach(t),Wh=n(ai," special method."),ai.forEach(t),Rh=h(Yt),w(sn.$$.fragment,Yt),Uh=h(Yt),w(an.$$.fragment,Yt),Kh=h(Yt),w(rn.$$.fragment,Yt),Yt.forEach(t),Xt.forEach(t),Pd=h(s),bo=r(s,"H2",{class:!0});var Tc=i(bo);ln=r(Tc,"A",{id:!0,class:!0,href:!0});var Ok=i(ln);Yi=r(Ok,"SPAN",{});var Nk=i(Yi);w(Js.$$.fragment,Nk),Nk.forEach(t),Ok.forEach(t),Hh=h(Tc),Zi=r(Tc,"SPAN",{});var Ak=i(Zi);Qh=n(Ak,"CamembertForSequenceClassification"),Ak.forEach(t),Tc.forEach(t),Ld=h(s),ft=r(s,"DIV",{class:!0});var Zt=i(ft);w(Gs.$$.fragment,Zt),Vh=h(Zt),el=r(Zt,"P",{});var Dk=i(el);Jh=n(Dk,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Dk.forEach(t),Gh=h(Zt),Xs=r(Zt,"P",{});var wc=i(Xs);Xh=n(wc,"This model inherits from "),Lr=r(wc,"A",{href:!0});var Ik=i(Lr);Yh=n(Ik,"PreTrainedModel"),Ik.forEach(t),Zh=n(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),eu=h(Zt),Ys=r(Zt,"P",{});var vc=i(Ys);tu=n(vc,"This model is also a PyTorch "),Zs=r(vc,"A",{href:!0,rel:!0});var Sk=i(Zs);ou=n(Sk,"torch.nn.Module"),Sk.forEach(t),nu=n(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),su=h(Zt),tt=r(Zt,"DIV",{class:!0});var Et=i(tt);w(ea.$$.fragment,Et),au=h(Et),ko=r(Et,"P",{});var ri=i(ko);ru=n(ri,"The "),Or=r(ri,"A",{href:!0});var Bk=i(Or);iu=n(Bk,"CamembertForSequenceClassification"),Bk.forEach(t),lu=n(ri," forward method, overrides the "),tl=r(ri,"CODE",{});var Wk=i(tl);du=n(Wk,"__call__"),Wk.forEach(t),cu=n(ri," special method."),ri.forEach(t),mu=h(Et),w(dn.$$.fragment,Et),pu=h(Et),w(cn.$$.fragment,Et),hu=h(Et),w(mn.$$.fragment,Et),uu=h(Et),w(pn.$$.fragment,Et),fu=h(Et),w(hn.$$.fragment,Et),Et.forEach(t),Zt.forEach(t),Od=h(s),yo=r(s,"H2",{class:!0});var Cc=i(yo);un=r(Cc,"A",{id:!0,class:!0,href:!0});var Rk=i(un);ol=r(Rk,"SPAN",{});var Uk=i(ol);w(ta.$$.fragment,Uk),Uk.forEach(t),Rk.forEach(t),gu=h(Cc),nl=r(Cc,"SPAN",{});var Kk=i(nl);_u=n(Kk,"CamembertForMultipleChoice"),Kk.forEach(t),Cc.forEach(t),Nd=h(s),gt=r(s,"DIV",{class:!0});var eo=i(gt);w(oa.$$.fragment,eo),bu=h(eo),sl=r(eo,"P",{});var Hk=i(sl);ku=n(Hk,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Hk.forEach(t),yu=h(eo),na=r(eo,"P",{});var $c=i(na);Tu=n($c,"This model inherits from "),Nr=r($c,"A",{href:!0});var Qk=i(Nr);wu=n(Qk,"PreTrainedModel"),Qk.forEach(t),vu=n($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),Cu=h(eo),sa=r(eo,"P",{});var Fc=i(sa);$u=n(Fc,"This model is also a PyTorch "),aa=r(Fc,"A",{href:!0,rel:!0});var Vk=i(aa);Fu=n(Vk,"torch.nn.Module"),Vk.forEach(t),Eu=n(Fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fc.forEach(t),Mu=h(eo),xt=r(eo,"DIV",{class:!0});var rs=i(xt);w(ra.$$.fragment,rs),zu=h(rs),To=r(rs,"P",{});var ii=i(To);qu=n(ii,"The "),Ar=r(ii,"A",{href:!0});var Jk=i(Ar);xu=n(Jk,"CamembertForMultipleChoice"),Jk.forEach(t),ju=n(ii," forward method, overrides the "),al=r(ii,"CODE",{});var Gk=i(al);Pu=n(Gk,"__call__"),Gk.forEach(t),Lu=n(ii," special method."),ii.forEach(t),Ou=h(rs),w(fn.$$.fragment,rs),Nu=h(rs),w(gn.$$.fragment,rs),rs.forEach(t),eo.forEach(t),Ad=h(s),wo=r(s,"H2",{class:!0});var Ec=i(wo);_n=r(Ec,"A",{id:!0,class:!0,href:!0});var Xk=i(_n);rl=r(Xk,"SPAN",{});var Yk=i(rl);w(ia.$$.fragment,Yk),Yk.forEach(t),Xk.forEach(t),Au=h(Ec),il=r(Ec,"SPAN",{});var Zk=i(il);Du=n(Zk,"CamembertForTokenClassification"),Zk.forEach(t),Ec.forEach(t),Dd=h(s),_t=r(s,"DIV",{class:!0});var to=i(_t);w(la.$$.fragment,to),Iu=h(to),ll=r(to,"P",{});var ey=i(ll);Su=n(ey,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),ey.forEach(t),Bu=h(to),da=r(to,"P",{});var Mc=i(da);Wu=n(Mc,"This model inherits from "),Dr=r(Mc,"A",{href:!0});var ty=i(Dr);Ru=n(ty,"PreTrainedModel"),ty.forEach(t),Uu=n(Mc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mc.forEach(t),Ku=h(to),ca=r(to,"P",{});var zc=i(ca);Hu=n(zc,"This model is also a PyTorch "),ma=r(zc,"A",{href:!0,rel:!0});var oy=i(ma);Qu=n(oy,"torch.nn.Module"),oy.forEach(t),Vu=n(zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zc.forEach(t),Ju=h(to),yt=r(to,"DIV",{class:!0});var oo=i(yt);w(pa.$$.fragment,oo),Gu=h(oo),vo=r(oo,"P",{});var li=i(vo);Xu=n(li,"The "),Ir=r(li,"A",{href:!0});var ny=i(Ir);Yu=n(ny,"CamembertForTokenClassification"),ny.forEach(t),Zu=n(li," forward method, overrides the "),dl=r(li,"CODE",{});var sy=i(dl);ef=n(sy,"__call__"),sy.forEach(t),tf=n(li," special method."),li.forEach(t),of=h(oo),w(bn.$$.fragment,oo),nf=h(oo),w(kn.$$.fragment,oo),sf=h(oo),w(yn.$$.fragment,oo),oo.forEach(t),to.forEach(t),Id=h(s),Co=r(s,"H2",{class:!0});var qc=i(Co);Tn=r(qc,"A",{id:!0,class:!0,href:!0});var ay=i(Tn);cl=r(ay,"SPAN",{});var ry=i(cl);w(ha.$$.fragment,ry),ry.forEach(t),ay.forEach(t),af=h(qc),ml=r(qc,"SPAN",{});var iy=i(ml);rf=n(iy,"CamembertForQuestionAnswering"),iy.forEach(t),qc.forEach(t),Sd=h(s),bt=r(s,"DIV",{class:!0});var no=i(bt);w(ua.$$.fragment,no),lf=h(no),wn=r(no,"P",{});var wd=i(wn);df=n(wd,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),pl=r(wd,"CODE",{});var ly=i(pl);cf=n(ly,"span start logits"),ly.forEach(t),mf=n(wd," and "),hl=r(wd,"CODE",{});var dy=i(hl);pf=n(dy,"span end logits"),dy.forEach(t),wd.forEach(t),hf=h(no),fa=r(no,"P",{});var xc=i(fa);uf=n(xc,"This model inherits from "),Sr=r(xc,"A",{href:!0});var cy=i(Sr);ff=n(cy,"PreTrainedModel"),cy.forEach(t),gf=n(xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc.forEach(t),_f=h(no),ga=r(no,"P",{});var jc=i(ga);bf=n(jc,"This model is also a PyTorch "),_a=r(jc,"A",{href:!0,rel:!0});var my=i(_a);kf=n(my,"torch.nn.Module"),my.forEach(t),yf=n(jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),jc.forEach(t),Tf=h(no),Tt=r(no,"DIV",{class:!0});var so=i(Tt);w(ba.$$.fragment,so),wf=h(so),$o=r(so,"P",{});var di=i($o);vf=n(di,"The "),Br=r(di,"A",{href:!0});var py=i(Br);Cf=n(py,"CamembertForQuestionAnswering"),py.forEach(t),$f=n(di," forward method, overrides the "),ul=r(di,"CODE",{});var hy=i(ul);Ff=n(hy,"__call__"),hy.forEach(t),Ef=n(di," special method."),di.forEach(t),Mf=h(so),w(vn.$$.fragment,so),zf=h(so),w(Cn.$$.fragment,so),qf=h(so),w($n.$$.fragment,so),so.forEach(t),no.forEach(t),Bd=h(s),Fo=r(s,"H2",{class:!0});var Pc=i(Fo);Fn=r(Pc,"A",{id:!0,class:!0,href:!0});var uy=i(Fn);fl=r(uy,"SPAN",{});var fy=i(fl);w(ka.$$.fragment,fy),fy.forEach(t),uy.forEach(t),xf=h(Pc),gl=r(Pc,"SPAN",{});var gy=i(gl);jf=n(gy,"TFCamembertModel"),gy.forEach(t),Pc.forEach(t),Wd=h(s),nt=r(s,"DIV",{class:!0});var Ot=i(nt);w(ya.$$.fragment,Ot),Pf=h(Ot),_l=r(Ot,"P",{});var _y=i(_l);Lf=n(_y,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),_y.forEach(t),Of=h(Ot),Ta=r(Ot,"P",{});var Lc=i(Ta);Nf=n(Lc,"This model inherits from "),Wr=r(Lc,"A",{href:!0});var by=i(Wr);Af=n(by,"TFPreTrainedModel"),by.forEach(t),Df=n(Lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lc.forEach(t),If=h(Ot),wa=r(Ot,"P",{});var Oc=i(wa);Sf=n(Oc,"This model is also a "),va=r(Oc,"A",{href:!0,rel:!0});var ky=i(va);Bf=n(ky,"tf.keras.Model"),ky.forEach(t),Wf=n(Oc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oc.forEach(t),Rf=h(Ot),w(En.$$.fragment,Ot),Uf=h(Ot),jt=r(Ot,"DIV",{class:!0});var is=i(jt);w(Ca.$$.fragment,is),Kf=h(is),Eo=r(is,"P",{});var ci=i(Eo);Hf=n(ci,"The "),Rr=r(ci,"A",{href:!0});var yy=i(Rr);Qf=n(yy,"TFCamembertModel"),yy.forEach(t),Vf=n(ci," forward method, overrides the "),bl=r(ci,"CODE",{});var Ty=i(bl);Jf=n(Ty,"__call__"),Ty.forEach(t),Gf=n(ci," special method."),ci.forEach(t),Xf=h(is),w(Mn.$$.fragment,is),Yf=h(is),w(zn.$$.fragment,is),is.forEach(t),Ot.forEach(t),Rd=h(s),Mo=r(s,"H2",{class:!0});var Nc=i(Mo);qn=r(Nc,"A",{id:!0,class:!0,href:!0});var wy=i(qn);kl=r(wy,"SPAN",{});var vy=i(kl);w($a.$$.fragment,vy),vy.forEach(t),wy.forEach(t),Zf=h(Nc),yl=r(Nc,"SPAN",{});var Cy=i(yl);eg=n(Cy,"TFCamembertForCasualLM"),Cy.forEach(t),Nc.forEach(t),Ud=h(s),st=r(s,"DIV",{class:!0});var Nt=i(st);w(Fa.$$.fragment,Nt),tg=h(Nt),Ea=r(Nt,"P",{});var Ac=i(Ea);og=n(Ac,"CamemBERT Model with a "),Tl=r(Ac,"CODE",{});var $y=i(Tl);ng=n($y,"language modeling"),$y.forEach(t),sg=n(Ac," head on top for CLM fine-tuning."),Ac.forEach(t),ag=h(Nt),Ma=r(Nt,"P",{});var Dc=i(Ma);rg=n(Dc,"This model inherits from "),Ur=r(Dc,"A",{href:!0});var Fy=i(Ur);ig=n(Fy,"TFPreTrainedModel"),Fy.forEach(t),lg=n(Dc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc.forEach(t),dg=h(Nt),za=r(Nt,"P",{});var Ic=i(za);cg=n(Ic,"This model is also a "),qa=r(Ic,"A",{href:!0,rel:!0});var Ey=i(qa);mg=n(Ey,"tf.keras.Model"),Ey.forEach(t),pg=n(Ic,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ic.forEach(t),hg=h(Nt),w(xn.$$.fragment,Nt),ug=h(Nt),Pt=r(Nt,"DIV",{class:!0});var ls=i(Pt);w(xa.$$.fragment,ls),fg=h(ls),zo=r(ls,"P",{});var mi=i(zo);gg=n(mi,"The "),Kr=r(mi,"A",{href:!0});var My=i(Kr);_g=n(My,"TFCamembertForCausalLM"),My.forEach(t),bg=n(mi," forward method, overrides the "),wl=r(mi,"CODE",{});var zy=i(wl);kg=n(zy,"__call__"),zy.forEach(t),yg=n(mi," special method."),mi.forEach(t),Tg=h(ls),w(jn.$$.fragment,ls),wg=h(ls),w(Pn.$$.fragment,ls),ls.forEach(t),Nt.forEach(t),Kd=h(s),qo=r(s,"H2",{class:!0});var Sc=i(qo);Ln=r(Sc,"A",{id:!0,class:!0,href:!0});var qy=i(Ln);vl=r(qy,"SPAN",{});var xy=i(vl);w(ja.$$.fragment,xy),xy.forEach(t),qy.forEach(t),vg=h(Sc),Cl=r(Sc,"SPAN",{});var jy=i(Cl);Cg=n(jy,"TFCamembertForMaskedLM"),jy.forEach(t),Sc.forEach(t),Hd=h(s),at=r(s,"DIV",{class:!0});var At=i(at);w(Pa.$$.fragment,At),$g=h(At),La=r(At,"P",{});var Bc=i(La);Fg=n(Bc,"CamemBERT Model with a "),$l=r(Bc,"CODE",{});var Py=i($l);Eg=n(Py,"language modeling"),Py.forEach(t),Mg=n(Bc," head on top."),Bc.forEach(t),zg=h(At),Oa=r(At,"P",{});var Wc=i(Oa);qg=n(Wc,"This model inherits from "),Hr=r(Wc,"A",{href:!0});var Ly=i(Hr);xg=n(Ly,"TFPreTrainedModel"),Ly.forEach(t),jg=n(Wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc.forEach(t),Pg=h(At),Na=r(At,"P",{});var Rc=i(Na);Lg=n(Rc,"This model is also a "),Aa=r(Rc,"A",{href:!0,rel:!0});var Oy=i(Aa);Og=n(Oy,"tf.keras.Model"),Oy.forEach(t),Ng=n(Rc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rc.forEach(t),Ag=h(At),w(On.$$.fragment,At),Dg=h(At),wt=r(At,"DIV",{class:!0});var ao=i(wt);w(Da.$$.fragment,ao),Ig=h(ao),xo=r(ao,"P",{});var pi=i(xo);Sg=n(pi,"The "),Qr=r(pi,"A",{href:!0});var Ny=i(Qr);Bg=n(Ny,"TFCamembertForMaskedLM"),Ny.forEach(t),Wg=n(pi," forward method, overrides the "),Fl=r(pi,"CODE",{});var Ay=i(Fl);Rg=n(Ay,"__call__"),Ay.forEach(t),Ug=n(pi," special method."),pi.forEach(t),Kg=h(ao),w(Nn.$$.fragment,ao),Hg=h(ao),w(An.$$.fragment,ao),Qg=h(ao),w(Dn.$$.fragment,ao),ao.forEach(t),At.forEach(t),Qd=h(s),jo=r(s,"H2",{class:!0});var Uc=i(jo);In=r(Uc,"A",{id:!0,class:!0,href:!0});var Dy=i(In);El=r(Dy,"SPAN",{});var Iy=i(El);w(Ia.$$.fragment,Iy),Iy.forEach(t),Dy.forEach(t),Vg=h(Uc),Ml=r(Uc,"SPAN",{});var Sy=i(Ml);Jg=n(Sy,"TFCamembertForSequenceClassification"),Sy.forEach(t),Uc.forEach(t),Vd=h(s),rt=r(s,"DIV",{class:!0});var Dt=i(rt);w(Sa.$$.fragment,Dt),Gg=h(Dt),zl=r(Dt,"P",{});var By=i(zl);Xg=n(By,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),By.forEach(t),Yg=h(Dt),Ba=r(Dt,"P",{});var Kc=i(Ba);Zg=n(Kc,"This model inherits from "),Vr=r(Kc,"A",{href:!0});var Wy=i(Vr);e_=n(Wy,"TFPreTrainedModel"),Wy.forEach(t),t_=n(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),o_=h(Dt),Wa=r(Dt,"P",{});var Hc=i(Wa);n_=n(Hc,"This model is also a "),Ra=r(Hc,"A",{href:!0,rel:!0});var Ry=i(Ra);s_=n(Ry,"tf.keras.Model"),Ry.forEach(t),a_=n(Hc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hc.forEach(t),r_=h(Dt),w(Sn.$$.fragment,Dt),i_=h(Dt),vt=r(Dt,"DIV",{class:!0});var ro=i(vt);w(Ua.$$.fragment,ro),l_=h(ro),Po=r(ro,"P",{});var hi=i(Po);d_=n(hi,"The "),Jr=r(hi,"A",{href:!0});var Uy=i(Jr);c_=n(Uy,"TFCamembertForSequenceClassification"),Uy.forEach(t),m_=n(hi," forward method, overrides the "),ql=r(hi,"CODE",{});var Ky=i(ql);p_=n(Ky,"__call__"),Ky.forEach(t),h_=n(hi," special method."),hi.forEach(t),u_=h(ro),w(Bn.$$.fragment,ro),f_=h(ro),w(Wn.$$.fragment,ro),g_=h(ro),w(Rn.$$.fragment,ro),ro.forEach(t),Dt.forEach(t),Jd=h(s),Lo=r(s,"H2",{class:!0});var Qc=i(Lo);Un=r(Qc,"A",{id:!0,class:!0,href:!0});var Hy=i(Un);xl=r(Hy,"SPAN",{});var Qy=i(xl);w(Ka.$$.fragment,Qy),Qy.forEach(t),Hy.forEach(t),__=h(Qc),jl=r(Qc,"SPAN",{});var Vy=i(jl);b_=n(Vy,"TFCamembertForMultipleChoice"),Vy.forEach(t),Qc.forEach(t),Gd=h(s),it=r(s,"DIV",{class:!0});var It=i(it);w(Ha.$$.fragment,It),k_=h(It),Pl=r(It,"P",{});var Jy=i(Pl);y_=n(Jy,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Jy.forEach(t),T_=h(It),Qa=r(It,"P",{});var Vc=i(Qa);w_=n(Vc,"This model inherits from "),Gr=r(Vc,"A",{href:!0});var Gy=i(Gr);v_=n(Gy,"TFPreTrainedModel"),Gy.forEach(t),C_=n(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),$_=h(It),Va=r(It,"P",{});var Jc=i(Va);F_=n(Jc,"This model is also a "),Ja=r(Jc,"A",{href:!0,rel:!0});var Xy=i(Ja);E_=n(Xy,"tf.keras.Model"),Xy.forEach(t),M_=n(Jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Jc.forEach(t),z_=h(It),w(Kn.$$.fragment,It),q_=h(It),Lt=r(It,"DIV",{class:!0});var ds=i(Lt);w(Ga.$$.fragment,ds),x_=h(ds),Oo=r(ds,"P",{});var ui=i(Oo);j_=n(ui,"The "),Xr=r(ui,"A",{href:!0});var Yy=i(Xr);P_=n(Yy,"TFCamembertForMultipleChoice"),Yy.forEach(t),L_=n(ui," forward method, overrides the "),Ll=r(ui,"CODE",{});var Zy=i(Ll);O_=n(Zy,"__call__"),Zy.forEach(t),N_=n(ui," special method."),ui.forEach(t),A_=h(ds),w(Hn.$$.fragment,ds),D_=h(ds),w(Qn.$$.fragment,ds),ds.forEach(t),It.forEach(t),Xd=h(s),No=r(s,"H2",{class:!0});var Gc=i(No);Vn=r(Gc,"A",{id:!0,class:!0,href:!0});var eT=i(Vn);Ol=r(eT,"SPAN",{});var tT=i(Ol);w(Xa.$$.fragment,tT),tT.forEach(t),eT.forEach(t),I_=h(Gc),Nl=r(Gc,"SPAN",{});var oT=i(Nl);S_=n(oT,"TFCamembertForTokenClassification"),oT.forEach(t),Gc.forEach(t),Yd=h(s),lt=r(s,"DIV",{class:!0});var St=i(lt);w(Ya.$$.fragment,St),B_=h(St),Al=r(St,"P",{});var nT=i(Al);W_=n(nT,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),nT.forEach(t),R_=h(St),Za=r(St,"P",{});var Xc=i(Za);U_=n(Xc,"This model inherits from "),Yr=r(Xc,"A",{href:!0});var sT=i(Yr);K_=n(sT,"TFPreTrainedModel"),sT.forEach(t),H_=n(Xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xc.forEach(t),Q_=h(St),er=r(St,"P",{});var Yc=i(er);V_=n(Yc,"This model is also a "),tr=r(Yc,"A",{href:!0,rel:!0});var aT=i(tr);J_=n(aT,"tf.keras.Model"),aT.forEach(t),G_=n(Yc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yc.forEach(t),X_=h(St),w(Jn.$$.fragment,St),Y_=h(St),Ct=r(St,"DIV",{class:!0});var io=i(Ct);w(or.$$.fragment,io),Z_=h(io),Ao=r(io,"P",{});var fi=i(Ao);eb=n(fi,"The "),Zr=r(fi,"A",{href:!0});var rT=i(Zr);tb=n(rT,"TFCamembertForTokenClassification"),rT.forEach(t),ob=n(fi," forward method, overrides the "),Dl=r(fi,"CODE",{});var iT=i(Dl);nb=n(iT,"__call__"),iT.forEach(t),sb=n(fi," special method."),fi.forEach(t),ab=h(io),w(Gn.$$.fragment,io),rb=h(io),w(Xn.$$.fragment,io),ib=h(io),w(Yn.$$.fragment,io),io.forEach(t),St.forEach(t),Zd=h(s),Do=r(s,"H2",{class:!0});var Zc=i(Do);Zn=r(Zc,"A",{id:!0,class:!0,href:!0});var lT=i(Zn);Il=r(lT,"SPAN",{});var dT=i(Il);w(nr.$$.fragment,dT),dT.forEach(t),lT.forEach(t),lb=h(Zc),Sl=r(Zc,"SPAN",{});var cT=i(Sl);db=n(cT,"TFCamembertForQuestionAnswering"),cT.forEach(t),Zc.forEach(t),ec=h(s),dt=r(s,"DIV",{class:!0});var Bt=i(dt);w(sr.$$.fragment,Bt),cb=h(Bt),Io=r(Bt,"P",{});var gi=i(Io);mb=n(gi,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Bl=r(gi,"CODE",{});var mT=i(Bl);pb=n(mT,"span start logits"),mT.forEach(t),hb=n(gi," and "),Wl=r(gi,"CODE",{});var pT=i(Wl);ub=n(pT,"span end logits"),pT.forEach(t),fb=n(gi,")."),gi.forEach(t),gb=h(Bt),ar=r(Bt,"P",{});var em=i(ar);_b=n(em,"This model inherits from "),ei=r(em,"A",{href:!0});var hT=i(ei);bb=n(hT,"TFPreTrainedModel"),hT.forEach(t),kb=n(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(t),yb=h(Bt),rr=r(Bt,"P",{});var tm=i(rr);Tb=n(tm,"This model is also a "),ir=r(tm,"A",{href:!0,rel:!0});var uT=i(ir);wb=n(uT,"tf.keras.Model"),uT.forEach(t),vb=n(tm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm.forEach(t),Cb=h(Bt),w(es.$$.fragment,Bt),$b=h(Bt),$t=r(Bt,"DIV",{class:!0});var lo=i($t);w(lr.$$.fragment,lo),Fb=h(lo),So=r(lo,"P",{});var _i=i(So);Eb=n(_i,"The "),ti=r(_i,"A",{href:!0});var fT=i(ti);Mb=n(fT,"TFCamembertForQuestionAnswering"),fT.forEach(t),zb=n(_i," forward method, overrides the "),Rl=r(_i,"CODE",{});var gT=i(Rl);qb=n(gT,"__call__"),gT.forEach(t),xb=n(_i," special method."),_i.forEach(t),jb=h(lo),w(ts.$$.fragment,lo),Pb=h(lo),w(os.$$.fragment,lo),Lb=h(lo),w(ns.$$.fragment,lo),lo.forEach(t),Bt.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(fw)),g(u,"id","camembert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#camembert"),g(c,"class","relative group"),g(ae,"id","overview"),g(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ae,"href","#overview"),g(I,"class","relative group"),g(ie,"href","https://arxiv.org/abs/1911.03894"),g(ie,"rel","nofollow"),g(K,"href","roberta"),g(de,"href","https://huggingface.co/camembert"),g(de,"rel","nofollow"),g(ce,"href","https://camembert-model.fr/"),g(ce,"rel","nofollow"),g(re,"id","transformers.CamembertConfig"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#transformers.CamembertConfig"),g(S,"class","relative group"),g(Ne,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel"),g(Ae,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel"),g(Oe,"href","https://huggingface.co/camembert-base"),g(Oe,"rel","nofollow"),g(De,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(Ie,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ko,"id","transformers.CamembertTokenizer"),g(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ko,"href","#transformers.CamembertTokenizer"),g(co,"class","relative group"),g(_r,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(br,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(ps,"href","https://github.com/google/sentencepiece"),g(ps,"rel","nofollow"),g(kr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vo,"id","transformers.CamembertTokenizerFast"),g(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vo,"href","#transformers.CamembertTokenizerFast"),g(mo,"class","relative group"),g(vr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(Cr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(ws,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),g(ws,"rel","nofollow"),g($r,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Go,"id","transformers.CamembertModel"),g(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Go,"href","#transformers.CamembertModel"),g(po,"class","relative group"),g(Mr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(xs,"rel","nofollow"),g(Ps,"href","https://arxiv.org/abs/1706.03762"),g(Ps,"rel","nofollow"),g(zr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.CamembertForCausalLM"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.CamembertForCausalLM"),g(uo,"class","relative group"),g(qr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ss,"rel","nofollow"),g(xr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForCausalLM"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nn,"id","transformers.CamembertForMaskedLM"),g(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nn,"href","#transformers.CamembertForMaskedLM"),g(go,"class","relative group"),g(jr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Qs,"rel","nofollow"),g(Pr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMaskedLM"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.CamembertForSequenceClassification"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.CamembertForSequenceClassification"),g(bo,"class","relative group"),g(Lr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Zs,"rel","nofollow"),g(Or,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForSequenceClassification"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.CamembertForMultipleChoice"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.CamembertForMultipleChoice"),g(yo,"class","relative group"),g(Nr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(aa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(aa,"rel","nofollow"),g(Ar,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMultipleChoice"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_n,"id","transformers.CamembertForTokenClassification"),g(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_n,"href","#transformers.CamembertForTokenClassification"),g(wo,"class","relative group"),g(Dr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ma,"rel","nofollow"),g(Ir,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForTokenClassification"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Tn,"id","transformers.CamembertForQuestionAnswering"),g(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Tn,"href","#transformers.CamembertForQuestionAnswering"),g(Co,"class","relative group"),g(Sr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(_a,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(_a,"rel","nofollow"),g(Br,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForQuestionAnswering"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fn,"id","transformers.TFCamembertModel"),g(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Fn,"href","#transformers.TFCamembertModel"),g(Fo,"class","relative group"),g(Wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(va,"rel","nofollow"),g(Rr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qn,"id","transformers.TFCamembertForCausalLM"),g(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(qn,"href","#transformers.TFCamembertForCausalLM"),g(Mo,"class","relative group"),g(Ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(qa,"rel","nofollow"),g(Kr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForCausalLM"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ln,"id","transformers.TFCamembertForMaskedLM"),g(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ln,"href","#transformers.TFCamembertForMaskedLM"),g(qo,"class","relative group"),g(Hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Aa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Aa,"rel","nofollow"),g(Qr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMaskedLM"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(In,"id","transformers.TFCamembertForSequenceClassification"),g(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(In,"href","#transformers.TFCamembertForSequenceClassification"),g(jo,"class","relative group"),g(Vr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ra,"rel","nofollow"),g(Jr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForSequenceClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Un,"id","transformers.TFCamembertForMultipleChoice"),g(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Un,"href","#transformers.TFCamembertForMultipleChoice"),g(Lo,"class","relative group"),g(Gr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ja,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ja,"rel","nofollow"),g(Xr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMultipleChoice"),g(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vn,"id","transformers.TFCamembertForTokenClassification"),g(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vn,"href","#transformers.TFCamembertForTokenClassification"),g(No,"class","relative group"),g(Yr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(tr,"rel","nofollow"),g(Zr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForTokenClassification"),g(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Zn,"id","transformers.TFCamembertForQuestionAnswering"),g(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Zn,"href","#transformers.TFCamembertForQuestionAnswering"),g(Do,"class","relative group"),g(ei,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ir,"rel","nofollow"),g(ti,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForQuestionAnswering"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,l),b(s,_,k),b(s,c,k),e(c,u),e(u,y),v(d,y,null),e(c,m),e(c,x),e(x,ke),b(s,pe,k),b(s,I,k),e(I,ae),e(ae,Z),v(E,Z,null),e(I,ye),e(I,H),e(H,Te),b(s,he,k),b(s,B,k),e(B,we),e(B,ie),e(ie,V),e(B,ve),b(s,ue,k),b(s,W,k),e(W,Ce),b(s,fe,k),b(s,R,k),e(R,me),e(me,$e),b(s,te,k),b(s,j,k),e(j,O),b(s,ge,k),b(s,U,k),e(U,le),e(le,Fe),e(le,K),e(K,Ee),e(le,Me),b(s,L,k),b(s,oe,k),e(oe,J),e(oe,de),e(de,ze),e(oe,G),e(oe,ce),e(ce,qe),e(oe,A),b(s,_e,k),b(s,S,k),e(S,re),e(re,ee),v(P,ee,null),e(S,xe),e(S,N),e(N,je),b(s,be,k),b(s,f,k),v(M,f,null),e(f,Re),e(f,Q),e(Q,Ue),e(Q,Ne),e(Ne,q),e(Q,Ke),e(Q,Ae),e(Ae,He),e(Q,Qe),e(Q,Oe),e(Oe,D),e(Q,X),e(f,Ve),e(f,Le),e(Le,Y),e(Le,De),e(De,Je),e(Le,Pe),e(Le,Ie),e(Ie,ne),e(Le,Ge),e(f,om),v(Uo,f,null),b(s,vd,k),b(s,co,k),e(co,Ko),e(Ko,bi),v(cs,bi,null),e(co,nm),e(co,ki),e(ki,sm),b(s,Cd,k),b(s,Ze,k),v(ms,Ze,null),e(Ze,am),e(Ze,Wt),e(Wt,rm),e(Wt,_r),e(_r,im),e(Wt,lm),e(Wt,br),e(br,dm),e(Wt,cm),e(Wt,ps),e(ps,mm),e(Wt,pm),e(Ze,hm),e(Ze,hs),e(hs,um),e(hs,kr),e(kr,fm),e(hs,gm),e(Ze,_m),e(Ze,Ht),v(us,Ht,null),e(Ht,bm),e(Ht,yi),e(yi,km),e(Ht,ym),e(Ht,fs),e(fs,yr),e(yr,Tm),e(yr,Ti),e(Ti,wm),e(fs,vm),e(fs,Tr),e(Tr,Cm),e(Tr,wi),e(wi,$m),e(Ze,Fm),e(Ze,Ho),v(gs,Ho,null),e(Ho,Em),e(Ho,_s),e(_s,Mm),e(_s,vi),e(vi,zm),e(_s,qm),e(Ze,xm),e(Ze,Qo),v(bs,Qo,null),e(Qo,jm),e(Qo,Ci),e(Ci,Pm),e(Ze,Lm),e(Ze,wr),v(ks,wr,null),b(s,$d,k),b(s,mo,k),e(mo,Vo),e(Vo,$i),v(ys,$i,null),e(mo,Om),e(mo,Fi),e(Fi,Nm),b(s,Fd,k),b(s,pt,k),v(Ts,pt,null),e(pt,Am),e(pt,Mt),e(Mt,Dm),e(Mt,Ei),e(Ei,Im),e(Mt,Sm),e(Mt,vr),e(vr,Bm),e(Mt,Wm),e(Mt,Cr),e(Cr,Rm),e(Mt,Um),e(Mt,ws),e(ws,Km),e(Mt,Hm),e(pt,Qm),e(pt,vs),e(vs,Vm),e(vs,$r),e($r,Jm),e(vs,Gm),e(pt,Xm),e(pt,Qt),v(Cs,Qt,null),e(Qt,Ym),e(Qt,Mi),e(Mi,Zm),e(Qt,ep),e(Qt,$s),e($s,Fr),e(Fr,tp),e(Fr,zi),e(zi,op),e($s,np),e($s,Er),e(Er,sp),e(Er,qi),e(qi,ap),e(pt,rp),e(pt,Jo),v(Fs,Jo,null),e(Jo,ip),e(Jo,xi),e(xi,lp),b(s,Ed,k),b(s,po,k),e(po,Go),e(Go,ji),v(Es,ji,null),e(po,dp),e(po,Pi),e(Pi,cp),b(s,Md,k),b(s,Xe,k),v(Ms,Xe,null),e(Xe,mp),e(Xe,Li),e(Li,pp),e(Xe,hp),e(Xe,zs),e(zs,up),e(zs,Mr),e(Mr,fp),e(zs,gp),e(Xe,_p),e(Xe,qs),e(qs,bp),e(qs,xs),e(xs,kp),e(qs,yp),e(Xe,Tp),e(Xe,js),e(js,wp),e(js,Oi),e(Oi,vp),e(js,Cp),e(Xe,$p),e(Xe,ot),e(ot,Fp),e(ot,Ni),e(Ni,Ep),e(ot,Mp),e(ot,Ai),e(Ai,zp),e(ot,qp),e(ot,Di),e(Di,xp),e(ot,jp),e(ot,Ii),e(Ii,Pp),e(ot,Lp),e(ot,Si),e(Si,Op),e(ot,Np),e(ot,Bi),e(Bi,Ap),e(ot,Dp),e(Xe,Ip),e(Xe,Xo),e(Xo,Sp),e(Xo,Wi),e(Wi,Bp),e(Xo,Wp),e(Xo,Ps),e(Ps,Rp),e(Xe,Up),e(Xe,zt),v(Ls,zt,null),e(zt,Kp),e(zt,ho),e(ho,Hp),e(ho,zr),e(zr,Qp),e(ho,Vp),e(ho,Ri),e(Ri,Jp),e(ho,Gp),e(zt,Xp),v(Yo,zt,null),e(zt,Yp),v(Zo,zt,null),b(s,zd,k),b(s,uo,k),e(uo,en),e(en,Ui),v(Os,Ui,null),e(uo,Zp),e(uo,Ki),e(Ki,eh),b(s,qd,k),b(s,ht,k),v(Ns,ht,null),e(ht,th),e(ht,As),e(As,oh),e(As,Hi),e(Hi,nh),e(As,sh),e(ht,ah),e(ht,Ds),e(Ds,rh),e(Ds,qr),e(qr,ih),e(Ds,lh),e(ht,dh),e(ht,Is),e(Is,ch),e(Is,Ss),e(Ss,mh),e(Is,ph),e(ht,hh),e(ht,qt),v(Bs,qt,null),e(qt,uh),e(qt,fo),e(fo,fh),e(fo,xr),e(xr,gh),e(fo,_h),e(fo,Qi),e(Qi,bh),e(fo,kh),e(qt,yh),v(tn,qt,null),e(qt,Th),v(on,qt,null),b(s,xd,k),b(s,go,k),e(go,nn),e(nn,Vi),v(Ws,Vi,null),e(go,wh),e(go,Ji),e(Ji,vh),b(s,jd,k),b(s,ut,k),v(Rs,ut,null),e(ut,Ch),e(ut,Us),e(Us,$h),e(Us,Gi),e(Gi,Fh),e(Us,Eh),e(ut,Mh),e(ut,Ks),e(Ks,zh),e(Ks,jr),e(jr,qh),e(Ks,xh),e(ut,jh),e(ut,Hs),e(Hs,Ph),e(Hs,Qs),e(Qs,Lh),e(Hs,Oh),e(ut,Nh),e(ut,kt),v(Vs,kt,null),e(kt,Ah),e(kt,_o),e(_o,Dh),e(_o,Pr),e(Pr,Ih),e(_o,Sh),e(_o,Xi),e(Xi,Bh),e(_o,Wh),e(kt,Rh),v(sn,kt,null),e(kt,Uh),v(an,kt,null),e(kt,Kh),v(rn,kt,null),b(s,Pd,k),b(s,bo,k),e(bo,ln),e(ln,Yi),v(Js,Yi,null),e(bo,Hh),e(bo,Zi),e(Zi,Qh),b(s,Ld,k),b(s,ft,k),v(Gs,ft,null),e(ft,Vh),e(ft,el),e(el,Jh),e(ft,Gh),e(ft,Xs),e(Xs,Xh),e(Xs,Lr),e(Lr,Yh),e(Xs,Zh),e(ft,eu),e(ft,Ys),e(Ys,tu),e(Ys,Zs),e(Zs,ou),e(Ys,nu),e(ft,su),e(ft,tt),v(ea,tt,null),e(tt,au),e(tt,ko),e(ko,ru),e(ko,Or),e(Or,iu),e(ko,lu),e(ko,tl),e(tl,du),e(ko,cu),e(tt,mu),v(dn,tt,null),e(tt,pu),v(cn,tt,null),e(tt,hu),v(mn,tt,null),e(tt,uu),v(pn,tt,null),e(tt,fu),v(hn,tt,null),b(s,Od,k),b(s,yo,k),e(yo,un),e(un,ol),v(ta,ol,null),e(yo,gu),e(yo,nl),e(nl,_u),b(s,Nd,k),b(s,gt,k),v(oa,gt,null),e(gt,bu),e(gt,sl),e(sl,ku),e(gt,yu),e(gt,na),e(na,Tu),e(na,Nr),e(Nr,wu),e(na,vu),e(gt,Cu),e(gt,sa),e(sa,$u),e(sa,aa),e(aa,Fu),e(sa,Eu),e(gt,Mu),e(gt,xt),v(ra,xt,null),e(xt,zu),e(xt,To),e(To,qu),e(To,Ar),e(Ar,xu),e(To,ju),e(To,al),e(al,Pu),e(To,Lu),e(xt,Ou),v(fn,xt,null),e(xt,Nu),v(gn,xt,null),b(s,Ad,k),b(s,wo,k),e(wo,_n),e(_n,rl),v(ia,rl,null),e(wo,Au),e(wo,il),e(il,Du),b(s,Dd,k),b(s,_t,k),v(la,_t,null),e(_t,Iu),e(_t,ll),e(ll,Su),e(_t,Bu),e(_t,da),e(da,Wu),e(da,Dr),e(Dr,Ru),e(da,Uu),e(_t,Ku),e(_t,ca),e(ca,Hu),e(ca,ma),e(ma,Qu),e(ca,Vu),e(_t,Ju),e(_t,yt),v(pa,yt,null),e(yt,Gu),e(yt,vo),e(vo,Xu),e(vo,Ir),e(Ir,Yu),e(vo,Zu),e(vo,dl),e(dl,ef),e(vo,tf),e(yt,of),v(bn,yt,null),e(yt,nf),v(kn,yt,null),e(yt,sf),v(yn,yt,null),b(s,Id,k),b(s,Co,k),e(Co,Tn),e(Tn,cl),v(ha,cl,null),e(Co,af),e(Co,ml),e(ml,rf),b(s,Sd,k),b(s,bt,k),v(ua,bt,null),e(bt,lf),e(bt,wn),e(wn,df),e(wn,pl),e(pl,cf),e(wn,mf),e(wn,hl),e(hl,pf),e(bt,hf),e(bt,fa),e(fa,uf),e(fa,Sr),e(Sr,ff),e(fa,gf),e(bt,_f),e(bt,ga),e(ga,bf),e(ga,_a),e(_a,kf),e(ga,yf),e(bt,Tf),e(bt,Tt),v(ba,Tt,null),e(Tt,wf),e(Tt,$o),e($o,vf),e($o,Br),e(Br,Cf),e($o,$f),e($o,ul),e(ul,Ff),e($o,Ef),e(Tt,Mf),v(vn,Tt,null),e(Tt,zf),v(Cn,Tt,null),e(Tt,qf),v($n,Tt,null),b(s,Bd,k),b(s,Fo,k),e(Fo,Fn),e(Fn,fl),v(ka,fl,null),e(Fo,xf),e(Fo,gl),e(gl,jf),b(s,Wd,k),b(s,nt,k),v(ya,nt,null),e(nt,Pf),e(nt,_l),e(_l,Lf),e(nt,Of),e(nt,Ta),e(Ta,Nf),e(Ta,Wr),e(Wr,Af),e(Ta,Df),e(nt,If),e(nt,wa),e(wa,Sf),e(wa,va),e(va,Bf),e(wa,Wf),e(nt,Rf),v(En,nt,null),e(nt,Uf),e(nt,jt),v(Ca,jt,null),e(jt,Kf),e(jt,Eo),e(Eo,Hf),e(Eo,Rr),e(Rr,Qf),e(Eo,Vf),e(Eo,bl),e(bl,Jf),e(Eo,Gf),e(jt,Xf),v(Mn,jt,null),e(jt,Yf),v(zn,jt,null),b(s,Rd,k),b(s,Mo,k),e(Mo,qn),e(qn,kl),v($a,kl,null),e(Mo,Zf),e(Mo,yl),e(yl,eg),b(s,Ud,k),b(s,st,k),v(Fa,st,null),e(st,tg),e(st,Ea),e(Ea,og),e(Ea,Tl),e(Tl,ng),e(Ea,sg),e(st,ag),e(st,Ma),e(Ma,rg),e(Ma,Ur),e(Ur,ig),e(Ma,lg),e(st,dg),e(st,za),e(za,cg),e(za,qa),e(qa,mg),e(za,pg),e(st,hg),v(xn,st,null),e(st,ug),e(st,Pt),v(xa,Pt,null),e(Pt,fg),e(Pt,zo),e(zo,gg),e(zo,Kr),e(Kr,_g),e(zo,bg),e(zo,wl),e(wl,kg),e(zo,yg),e(Pt,Tg),v(jn,Pt,null),e(Pt,wg),v(Pn,Pt,null),b(s,Kd,k),b(s,qo,k),e(qo,Ln),e(Ln,vl),v(ja,vl,null),e(qo,vg),e(qo,Cl),e(Cl,Cg),b(s,Hd,k),b(s,at,k),v(Pa,at,null),e(at,$g),e(at,La),e(La,Fg),e(La,$l),e($l,Eg),e(La,Mg),e(at,zg),e(at,Oa),e(Oa,qg),e(Oa,Hr),e(Hr,xg),e(Oa,jg),e(at,Pg),e(at,Na),e(Na,Lg),e(Na,Aa),e(Aa,Og),e(Na,Ng),e(at,Ag),v(On,at,null),e(at,Dg),e(at,wt),v(Da,wt,null),e(wt,Ig),e(wt,xo),e(xo,Sg),e(xo,Qr),e(Qr,Bg),e(xo,Wg),e(xo,Fl),e(Fl,Rg),e(xo,Ug),e(wt,Kg),v(Nn,wt,null),e(wt,Hg),v(An,wt,null),e(wt,Qg),v(Dn,wt,null),b(s,Qd,k),b(s,jo,k),e(jo,In),e(In,El),v(Ia,El,null),e(jo,Vg),e(jo,Ml),e(Ml,Jg),b(s,Vd,k),b(s,rt,k),v(Sa,rt,null),e(rt,Gg),e(rt,zl),e(zl,Xg),e(rt,Yg),e(rt,Ba),e(Ba,Zg),e(Ba,Vr),e(Vr,e_),e(Ba,t_),e(rt,o_),e(rt,Wa),e(Wa,n_),e(Wa,Ra),e(Ra,s_),e(Wa,a_),e(rt,r_),v(Sn,rt,null),e(rt,i_),e(rt,vt),v(Ua,vt,null),e(vt,l_),e(vt,Po),e(Po,d_),e(Po,Jr),e(Jr,c_),e(Po,m_),e(Po,ql),e(ql,p_),e(Po,h_),e(vt,u_),v(Bn,vt,null),e(vt,f_),v(Wn,vt,null),e(vt,g_),v(Rn,vt,null),b(s,Jd,k),b(s,Lo,k),e(Lo,Un),e(Un,xl),v(Ka,xl,null),e(Lo,__),e(Lo,jl),e(jl,b_),b(s,Gd,k),b(s,it,k),v(Ha,it,null),e(it,k_),e(it,Pl),e(Pl,y_),e(it,T_),e(it,Qa),e(Qa,w_),e(Qa,Gr),e(Gr,v_),e(Qa,C_),e(it,$_),e(it,Va),e(Va,F_),e(Va,Ja),e(Ja,E_),e(Va,M_),e(it,z_),v(Kn,it,null),e(it,q_),e(it,Lt),v(Ga,Lt,null),e(Lt,x_),e(Lt,Oo),e(Oo,j_),e(Oo,Xr),e(Xr,P_),e(Oo,L_),e(Oo,Ll),e(Ll,O_),e(Oo,N_),e(Lt,A_),v(Hn,Lt,null),e(Lt,D_),v(Qn,Lt,null),b(s,Xd,k),b(s,No,k),e(No,Vn),e(Vn,Ol),v(Xa,Ol,null),e(No,I_),e(No,Nl),e(Nl,S_),b(s,Yd,k),b(s,lt,k),v(Ya,lt,null),e(lt,B_),e(lt,Al),e(Al,W_),e(lt,R_),e(lt,Za),e(Za,U_),e(Za,Yr),e(Yr,K_),e(Za,H_),e(lt,Q_),e(lt,er),e(er,V_),e(er,tr),e(tr,J_),e(er,G_),e(lt,X_),v(Jn,lt,null),e(lt,Y_),e(lt,Ct),v(or,Ct,null),e(Ct,Z_),e(Ct,Ao),e(Ao,eb),e(Ao,Zr),e(Zr,tb),e(Ao,ob),e(Ao,Dl),e(Dl,nb),e(Ao,sb),e(Ct,ab),v(Gn,Ct,null),e(Ct,rb),v(Xn,Ct,null),e(Ct,ib),v(Yn,Ct,null),b(s,Zd,k),b(s,Do,k),e(Do,Zn),e(Zn,Il),v(nr,Il,null),e(Do,lb),e(Do,Sl),e(Sl,db),b(s,ec,k),b(s,dt,k),v(sr,dt,null),e(dt,cb),e(dt,Io),e(Io,mb),e(Io,Bl),e(Bl,pb),e(Io,hb),e(Io,Wl),e(Wl,ub),e(Io,fb),e(dt,gb),e(dt,ar),e(ar,_b),e(ar,ei),e(ei,bb),e(ar,kb),e(dt,yb),e(dt,rr),e(rr,Tb),e(rr,ir),e(ir,wb),e(rr,vb),e(dt,Cb),v(es,dt,null),e(dt,$b),e(dt,$t),v(lr,$t,null),e($t,Fb),e($t,So),e(So,Eb),e(So,ti),e(ti,Mb),e(So,zb),e(So,Rl),e(Rl,qb),e(So,xb),e($t,jb),v(ts,$t,null),e($t,Pb),v(os,$t,null),e($t,Lb),v(ns,$t,null),tc=!0},p(s,[k]){const dr={};k&2&&(dr.$$scope={dirty:k,ctx:s}),Uo.$set(dr);const Ul={};k&2&&(Ul.$$scope={dirty:k,ctx:s}),Yo.$set(Ul);const Kl={};k&2&&(Kl.$$scope={dirty:k,ctx:s}),Zo.$set(Kl);const Hl={};k&2&&(Hl.$$scope={dirty:k,ctx:s}),tn.$set(Hl);const cr={};k&2&&(cr.$$scope={dirty:k,ctx:s}),on.$set(cr);const Ql={};k&2&&(Ql.$$scope={dirty:k,ctx:s}),sn.$set(Ql);const Vl={};k&2&&(Vl.$$scope={dirty:k,ctx:s}),an.$set(Vl);const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:s}),rn.$set(Jl);const mr={};k&2&&(mr.$$scope={dirty:k,ctx:s}),dn.$set(mr);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:s}),cn.$set(Gl);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:s}),mn.$set(Xl);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:s}),pn.$set(Yl);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:s}),hn.$set(Zl);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:s}),fn.$set(ed);const td={};k&2&&(td.$$scope={dirty:k,ctx:s}),gn.$set(td);const pr={};k&2&&(pr.$$scope={dirty:k,ctx:s}),bn.$set(pr);const od={};k&2&&(od.$$scope={dirty:k,ctx:s}),kn.$set(od);const Bo={};k&2&&(Bo.$$scope={dirty:k,ctx:s}),yn.$set(Bo);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:s}),vn.$set(nd);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:s}),Cn.$set(sd);const hr={};k&2&&(hr.$$scope={dirty:k,ctx:s}),$n.$set(hr);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:s}),En.$set(ad);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:s}),Mn.$set(rd);const id={};k&2&&(id.$$scope={dirty:k,ctx:s}),zn.$set(id);const Rt={};k&2&&(Rt.$$scope={dirty:k,ctx:s}),xn.$set(Rt);const Ut={};k&2&&(Ut.$$scope={dirty:k,ctx:s}),jn.$set(Ut);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:s}),Pn.$set(ld);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:s}),On.$set(dd);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:s}),Nn.$set(cd);const Wo={};k&2&&(Wo.$$scope={dirty:k,ctx:s}),An.$set(Wo);const md={};k&2&&(md.$$scope={dirty:k,ctx:s}),Dn.$set(md);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:s}),Sn.$set(pd);const ur={};k&2&&(ur.$$scope={dirty:k,ctx:s}),Bn.$set(ur);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:s}),Wn.$set(hd);const ud={};k&2&&(ud.$$scope={dirty:k,ctx:s}),Rn.$set(ud);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:s}),Kn.$set(fd);const ct={};k&2&&(ct.$$scope={dirty:k,ctx:s}),Hn.$set(ct);const Kt={};k&2&&(Kt.$$scope={dirty:k,ctx:s}),Qn.$set(Kt);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:s}),Jn.$set(gd);const _d={};k&2&&(_d.$$scope={dirty:k,ctx:s}),Gn.$set(_d);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:s}),Xn.$set(bd);const fr={};k&2&&(fr.$$scope={dirty:k,ctx:s}),Yn.$set(fr);const kd={};k&2&&(kd.$$scope={dirty:k,ctx:s}),es.$set(kd);const Ro={};k&2&&(Ro.$$scope={dirty:k,ctx:s}),ts.$set(Ro);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:s}),os.$set(yd);const gr={};k&2&&(gr.$$scope={dirty:k,ctx:s}),ns.$set(gr)},i(s){tc||(C(d.$$.fragment,s),C(E.$$.fragment,s),C(P.$$.fragment,s),C(M.$$.fragment,s),C(Uo.$$.fragment,s),C(cs.$$.fragment,s),C(ms.$$.fragment,s),C(us.$$.fragment,s),C(gs.$$.fragment,s),C(bs.$$.fragment,s),C(ks.$$.fragment,s),C(ys.$$.fragment,s),C(Ts.$$.fragment,s),C(Cs.$$.fragment,s),C(Fs.$$.fragment,s),C(Es.$$.fragment,s),C(Ms.$$.fragment,s),C(Ls.$$.fragment,s),C(Yo.$$.fragment,s),C(Zo.$$.fragment,s),C(Os.$$.fragment,s),C(Ns.$$.fragment,s),C(Bs.$$.fragment,s),C(tn.$$.fragment,s),C(on.$$.fragment,s),C(Ws.$$.fragment,s),C(Rs.$$.fragment,s),C(Vs.$$.fragment,s),C(sn.$$.fragment,s),C(an.$$.fragment,s),C(rn.$$.fragment,s),C(Js.$$.fragment,s),C(Gs.$$.fragment,s),C(ea.$$.fragment,s),C(dn.$$.fragment,s),C(cn.$$.fragment,s),C(mn.$$.fragment,s),C(pn.$$.fragment,s),C(hn.$$.fragment,s),C(ta.$$.fragment,s),C(oa.$$.fragment,s),C(ra.$$.fragment,s),C(fn.$$.fragment,s),C(gn.$$.fragment,s),C(ia.$$.fragment,s),C(la.$$.fragment,s),C(pa.$$.fragment,s),C(bn.$$.fragment,s),C(kn.$$.fragment,s),C(yn.$$.fragment,s),C(ha.$$.fragment,s),C(ua.$$.fragment,s),C(ba.$$.fragment,s),C(vn.$$.fragment,s),C(Cn.$$.fragment,s),C($n.$$.fragment,s),C(ka.$$.fragment,s),C(ya.$$.fragment,s),C(En.$$.fragment,s),C(Ca.$$.fragment,s),C(Mn.$$.fragment,s),C(zn.$$.fragment,s),C($a.$$.fragment,s),C(Fa.$$.fragment,s),C(xn.$$.fragment,s),C(xa.$$.fragment,s),C(jn.$$.fragment,s),C(Pn.$$.fragment,s),C(ja.$$.fragment,s),C(Pa.$$.fragment,s),C(On.$$.fragment,s),C(Da.$$.fragment,s),C(Nn.$$.fragment,s),C(An.$$.fragment,s),C(Dn.$$.fragment,s),C(Ia.$$.fragment,s),C(Sa.$$.fragment,s),C(Sn.$$.fragment,s),C(Ua.$$.fragment,s),C(Bn.$$.fragment,s),C(Wn.$$.fragment,s),C(Rn.$$.fragment,s),C(Ka.$$.fragment,s),C(Ha.$$.fragment,s),C(Kn.$$.fragment,s),C(Ga.$$.fragment,s),C(Hn.$$.fragment,s),C(Qn.$$.fragment,s),C(Xa.$$.fragment,s),C(Ya.$$.fragment,s),C(Jn.$$.fragment,s),C(or.$$.fragment,s),C(Gn.$$.fragment,s),C(Xn.$$.fragment,s),C(Yn.$$.fragment,s),C(nr.$$.fragment,s),C(sr.$$.fragment,s),C(es.$$.fragment,s),C(lr.$$.fragment,s),C(ts.$$.fragment,s),C(os.$$.fragment,s),C(ns.$$.fragment,s),tc=!0)},o(s){$(d.$$.fragment,s),$(E.$$.fragment,s),$(P.$$.fragment,s),$(M.$$.fragment,s),$(Uo.$$.fragment,s),$(cs.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(gs.$$.fragment,s),$(bs.$$.fragment,s),$(ks.$$.fragment,s),$(ys.$$.fragment,s),$(Ts.$$.fragment,s),$(Cs.$$.fragment,s),$(Fs.$$.fragment,s),$(Es.$$.fragment,s),$(Ms.$$.fragment,s),$(Ls.$$.fragment,s),$(Yo.$$.fragment,s),$(Zo.$$.fragment,s),$(Os.$$.fragment,s),$(Ns.$$.fragment,s),$(Bs.$$.fragment,s),$(tn.$$.fragment,s),$(on.$$.fragment,s),$(Ws.$$.fragment,s),$(Rs.$$.fragment,s),$(Vs.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(rn.$$.fragment,s),$(Js.$$.fragment,s),$(Gs.$$.fragment,s),$(ea.$$.fragment,s),$(dn.$$.fragment,s),$(cn.$$.fragment,s),$(mn.$$.fragment,s),$(pn.$$.fragment,s),$(hn.$$.fragment,s),$(ta.$$.fragment,s),$(oa.$$.fragment,s),$(ra.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(ia.$$.fragment,s),$(la.$$.fragment,s),$(pa.$$.fragment,s),$(bn.$$.fragment,s),$(kn.$$.fragment,s),$(yn.$$.fragment,s),$(ha.$$.fragment,s),$(ua.$$.fragment,s),$(ba.$$.fragment,s),$(vn.$$.fragment,s),$(Cn.$$.fragment,s),$($n.$$.fragment,s),$(ka.$$.fragment,s),$(ya.$$.fragment,s),$(En.$$.fragment,s),$(Ca.$$.fragment,s),$(Mn.$$.fragment,s),$(zn.$$.fragment,s),$($a.$$.fragment,s),$(Fa.$$.fragment,s),$(xn.$$.fragment,s),$(xa.$$.fragment,s),$(jn.$$.fragment,s),$(Pn.$$.fragment,s),$(ja.$$.fragment,s),$(Pa.$$.fragment,s),$(On.$$.fragment,s),$(Da.$$.fragment,s),$(Nn.$$.fragment,s),$(An.$$.fragment,s),$(Dn.$$.fragment,s),$(Ia.$$.fragment,s),$(Sa.$$.fragment,s),$(Sn.$$.fragment,s),$(Ua.$$.fragment,s),$(Bn.$$.fragment,s),$(Wn.$$.fragment,s),$(Rn.$$.fragment,s),$(Ka.$$.fragment,s),$(Ha.$$.fragment,s),$(Kn.$$.fragment,s),$(Ga.$$.fragment,s),$(Hn.$$.fragment,s),$(Qn.$$.fragment,s),$(Xa.$$.fragment,s),$(Ya.$$.fragment,s),$(Jn.$$.fragment,s),$(or.$$.fragment,s),$(Gn.$$.fragment,s),$(Xn.$$.fragment,s),$(Yn.$$.fragment,s),$(nr.$$.fragment,s),$(sr.$$.fragment,s),$(es.$$.fragment,s),$(lr.$$.fragment,s),$(ts.$$.fragment,s),$(os.$$.fragment,s),$(ns.$$.fragment,s),tc=!1},d(s){t(l),s&&t(_),s&&t(c),F(d),s&&t(pe),s&&t(I),F(E),s&&t(he),s&&t(B),s&&t(ue),s&&t(W),s&&t(fe),s&&t(R),s&&t(te),s&&t(j),s&&t(ge),s&&t(U),s&&t(L),s&&t(oe),s&&t(_e),s&&t(S),F(P),s&&t(be),s&&t(f),F(M),F(Uo),s&&t(vd),s&&t(co),F(cs),s&&t(Cd),s&&t(Ze),F(ms),F(us),F(gs),F(bs),F(ks),s&&t($d),s&&t(mo),F(ys),s&&t(Fd),s&&t(pt),F(Ts),F(Cs),F(Fs),s&&t(Ed),s&&t(po),F(Es),s&&t(Md),s&&t(Xe),F(Ms),F(Ls),F(Yo),F(Zo),s&&t(zd),s&&t(uo),F(Os),s&&t(qd),s&&t(ht),F(Ns),F(Bs),F(tn),F(on),s&&t(xd),s&&t(go),F(Ws),s&&t(jd),s&&t(ut),F(Rs),F(Vs),F(sn),F(an),F(rn),s&&t(Pd),s&&t(bo),F(Js),s&&t(Ld),s&&t(ft),F(Gs),F(ea),F(dn),F(cn),F(mn),F(pn),F(hn),s&&t(Od),s&&t(yo),F(ta),s&&t(Nd),s&&t(gt),F(oa),F(ra),F(fn),F(gn),s&&t(Ad),s&&t(wo),F(ia),s&&t(Dd),s&&t(_t),F(la),F(pa),F(bn),F(kn),F(yn),s&&t(Id),s&&t(Co),F(ha),s&&t(Sd),s&&t(bt),F(ua),F(ba),F(vn),F(Cn),F($n),s&&t(Bd),s&&t(Fo),F(ka),s&&t(Wd),s&&t(nt),F(ya),F(En),F(Ca),F(Mn),F(zn),s&&t(Rd),s&&t(Mo),F($a),s&&t(Ud),s&&t(st),F(Fa),F(xn),F(xa),F(jn),F(Pn),s&&t(Kd),s&&t(qo),F(ja),s&&t(Hd),s&&t(at),F(Pa),F(On),F(Da),F(Nn),F(An),F(Dn),s&&t(Qd),s&&t(jo),F(Ia),s&&t(Vd),s&&t(rt),F(Sa),F(Sn),F(Ua),F(Bn),F(Wn),F(Rn),s&&t(Jd),s&&t(Lo),F(Ka),s&&t(Gd),s&&t(it),F(Ha),F(Kn),F(Ga),F(Hn),F(Qn),s&&t(Xd),s&&t(No),F(Xa),s&&t(Yd),s&&t(lt),F(Ya),F(Jn),F(or),F(Gn),F(Xn),F(Yn),s&&t(Zd),s&&t(Do),F(nr),s&&t(ec),s&&t(dt),F(sr),F(es),F(lr),F(ts),F(os),F(ns)}}}const fw={local:"camembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.CamembertConfig",title:"CamembertConfig"},{local:"transformers.CamembertTokenizer",title:"CamembertTokenizer"},{local:"transformers.CamembertTokenizerFast",title:"CamembertTokenizerFast"},{local:"transformers.CamembertModel",title:"CamembertModel"},{local:"transformers.CamembertForCausalLM",title:"CamembertForCausalLM"},{local:"transformers.CamembertForMaskedLM",title:"CamembertForMaskedLM"},{local:"transformers.CamembertForSequenceClassification",title:"CamembertForSequenceClassification"},{local:"transformers.CamembertForMultipleChoice",title:"CamembertForMultipleChoice"},{local:"transformers.CamembertForTokenClassification",title:"CamembertForTokenClassification"},{local:"transformers.CamembertForQuestionAnswering",title:"CamembertForQuestionAnswering"},{local:"transformers.TFCamembertModel",title:"TFCamembertModel"},{local:"transformers.TFCamembertForCausalLM",title:"TFCamembertForCasualLM"},{local:"transformers.TFCamembertForMaskedLM",title:"TFCamembertForMaskedLM"},{local:"transformers.TFCamembertForSequenceClassification",title:"TFCamembertForSequenceClassification"},{local:"transformers.TFCamembertForMultipleChoice",title:"TFCamembertForMultipleChoice"},{local:"transformers.TFCamembertForTokenClassification",title:"TFCamembertForTokenClassification"},{local:"transformers.TFCamembertForQuestionAnswering",title:"TFCamembertForQuestionAnswering"}],title:"CamemBERT"};function gw(z){return TT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vw extends _T{constructor(l){super();bT(this,l,gw,uw,kT,{})}}export{vw as default,fw as metadata};
