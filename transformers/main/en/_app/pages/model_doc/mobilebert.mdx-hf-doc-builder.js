import{S as pv,i as mv,s as hv,e as r,k as m,w as y,t as n,M as fv,c as a,d as t,m as h,a as i,x as v,h as s,b,G as e,g,y as w,q as M,o as $,B as F,v as uv,L as xe}from"../../chunks/vendor-316217a5.js";import{T as Pe}from"../../chunks/Tip-27e9fea0.js";import{D as ie}from"../../chunks/Docstring-1fe4a33a.js";import{C as ze}from"../../chunks/CodeBlock-8418a95e.js";import{I as qe}from"../../chunks/IconCopyLink-40460835.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-32fc0037.js";function gv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertModel, MobileBertConfig

# Initializing a MobileBERT configuration
configuration = MobileBertConfig()

# Initializing a model from the configuration above
model = MobileBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertModel, MobileBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MobileBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MobileBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration above</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function _v(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function bv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertModel.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertModel.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Tv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function kv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(0)
# Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Examples:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function yv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function vv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wv(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Mv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function $v(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForNextSentencePrediction.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Examples:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Fv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Bv(E){let d,_,c,p,T;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("lordtt13/emo-mobilebert")
model = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ev(E){let d,_;return d=new ze({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function xv(E){let d,_,c,p,T;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("lordtt13/emo-mobilebert")
model = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zv(E){let d,_;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained(
    "lordtt13/emo-mobilebert", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Pv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function qv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMultipleChoice.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Cv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
import torch

tokenizer = MobileBertTokenizer.from_pretrained("mrm8488/mobilebert-finetuned-ner")
model = MobileBertForTokenClassification.from_pretrained("mrm8488/mobilebert-finetuned-ner")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;mrm8488/mobilebert-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;mrm8488/mobilebert-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Nv(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Ov(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Sv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
import torch

tokenizer = MobileBertTokenizer.from_pretrained("csarron/mobilebert-uncased-squad-v2")
model = MobileBertForQuestionAnswering.from_pretrained("csarron/mobilebert-uncased-squad-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;csarron/mobilebert-uncased-squad-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;csarron/mobilebert-uncased-squad-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Av(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([12])
target_end_index = torch.tensor([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Iv(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Lv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Dv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertModel.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertModel.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Wv(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Rv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Uv(E){let d,_,c,p,T;return p=new ze({props:{code:`import tensorflow as tf
from transformers import MobileBertTokenizer, TFMobileBertForPreTraining

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")
input_ids = tf.constant(tokenizer.encode("Hello, my dog is cute"))[None, :]  # Batch size 1
outputs = model(input_ids)
prediction_scores, seq_relationship_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tf.constant(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>))[<span class="hljs-literal">None</span>, :]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Hv(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Qv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Kv(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Vv(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Gv(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Yv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function Jv(E){let d,_,c,p,T;return p=new ze({props:{code:`import tensorflow as tf
from transformers import MobileBertTokenizer, TFMobileBertForNextSentencePrediction

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForNextSentencePrediction.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Examples:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zv(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function Xv(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function ew(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/emo-mobilebert")
model = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function tw(E){let d,_;return d=new ze({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function ow(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function nw(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function sw(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMultipleChoice.from_pretrained("google/mobilebert-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function rw(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function aw(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function iw(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/mobilebert-finetuned-ner")
model = TFMobileBertForTokenClassification.from_pretrained("vumichien/mobilebert-finetuned-ner")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-finetuned-ner&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-finetuned-ner&quot;</span>)

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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function lw(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function dw(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),T=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),x=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),J=n("This second option is useful when using "),L=r("code"),X=n("tf.keras.Model.fit"),he=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),K=m(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=m(),P=r("ul"),j=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ue=n("model(inputs_ids)"),ce=m(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),H=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=m(),O=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=h(u),p=a(u,"UL",{});var Y=i(p);T=a(Y,"LI",{});var ye=i(T);l=s(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),f=h(Y),x=a(Y,"LI",{});var $e=i(x);me=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),Y.forEach(t),V=h(u),z=a(u,"P",{});var S=i(z);J=s(S,"This second option is useful when using "),L=a(S,"CODE",{});var we=i(L);X=s(we,"tf.keras.Model.fit"),we.forEach(t),he=s(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(S,"CODE",{});var Te=i(D);fe=s(Te,"model(inputs)"),Te.forEach(t),le=s(S,"."),S.forEach(t),K=h(u),N=a(u,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=h(u),P=a(u,"UL",{});var C=i(P);j=a(C,"LI",{});var I=i(j);ne=s(I,"a single Tensor with "),U=a(I,"CODE",{});var Fe=i(U);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var ve=i(W);ue=s(ve,"model(inputs_ids)"),ve.forEach(t),I.forEach(t),ce=h(C),q=a(C,"LI",{});var Q=i(q);ge=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Q,"CODE",{});var Me=i(R);Z=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),re=s(Q," or "),H=a(Q,"CODE",{});var te=i(H);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),Q.forEach(t),ae=h(C),O=a(C,"LI",{});var oe=i(O);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),A=a(oe,"CODE",{});var Be=i(A);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),C.forEach(t)},m(u,B){g(u,d,B),e(d,_),g(u,c,B),g(u,p,B),e(p,T),e(T,l),e(p,f),e(p,x),e(x,me),g(u,V,B),g(u,z,B),e(z,J),e(z,L),e(L,X),e(z,he),e(z,D),e(D,fe),e(z,le),g(u,K,B),g(u,N,B),e(N,ee),g(u,G,B),g(u,P,B),e(P,j),e(j,ne),e(j,U),e(U,de),e(j,se),e(j,W),e(W,ue),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,H),e(H,_e),e(P,ae),e(P,O),e(O,pe),e(O,A),e(A,be)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(K),u&&t(N),u&&t(G),u&&t(P)}}}function cw(E){let d,_,c,p,T;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),T=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){g(l,d,f),e(d,_),e(d,c),e(c,p),e(d,T)},d(l){l&&t(d)}}}function pw(E){let d,_,c,p,T;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("vumichien/mobilebert-uncased-squad-v2")
model = TFMobileBertForQuestionAnswering.from_pretrained("vumichien/mobilebert-uncased-squad-v2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-uncased-squad-v2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;vumichien/mobilebert-uncased-squad-v2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),_=n("Example:"),c=m(),y(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);_=s(f,"Example:"),f.forEach(t),c=h(l),v(p.$$.fragment,l)},m(l,f){g(l,d,f),e(d,_),g(l,c,f),w(p,l,f),T=!0},p:xe,i(l){T||(M(p.$$.fragment,l),T=!0)},o(l){$(p.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function mw(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([12])
target_end_index = tf.constant([13])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">12</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">13</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,p){w(d,c,p),_=!0},p:xe,i(c){_||(M(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function hw(E){let d,_,c,p,T,l,f,x,me,V,z,J,L,X,he,D,fe,le,K,N,ee,G,P,j,ne,U,de,se,W,ue,ce,q,ge,R,Z,re,H,_e,ae,O,pe,A,be,u,B,Y,ye,$e,S,we,Te,ke,C,I,Fe,ve,Q,Me,te,oe,Be,Mt,Ep,va,xp,zp,wa,Pp,qp,is,jp,Cp,Np,Wt,Op,Ma,Sp,Ap,$a,Ip,Lp,Dp,jo,Wp,qi,Rp,Ad,Rt,Co,ji,ls,Up,Ci,Hp,Id,st,ds,Qp,Ni,Kp,Vp,No,Fa,Gp,Yp,Ba,Jp,Zp,Xp,cs,em,Ea,tm,om,Ld,Ut,Oo,Oi,ps,nm,Si,sm,Dd,rt,ms,rm,hs,am,Ai,im,lm,dm,So,xa,cm,pm,za,mm,hm,fm,fs,um,Pa,gm,_m,Wd,Ht,Ao,Ii,us,bm,Li,Tm,Rd,Qt,gs,km,_s,ym,qa,vm,wm,Ud,Kt,bs,Mm,Ts,$m,ja,Fm,Bm,Hd,Vt,Io,Di,ks,Em,Wi,xm,Qd,Ce,ys,zm,Ri,Pm,qm,vs,jm,Ca,Cm,Nm,Om,ws,Sm,Ms,Am,Im,Lm,Ui,$s,Dm,Wm,it,Fs,Rm,Gt,Um,Na,Hm,Qm,Hi,Km,Vm,Gm,Lo,Ym,Do,Kd,Yt,Wo,Qi,Bs,Jm,Ki,Zm,Vd,Re,Es,Xm,Jt,eh,Vi,th,oh,Gi,nh,sh,rh,xs,ah,Oa,ih,lh,dh,zs,ch,Ps,ph,mh,hh,lt,qs,fh,Zt,uh,Sa,gh,_h,Yi,bh,Th,kh,Ro,yh,Uo,Gd,Xt,Ho,Ji,js,vh,Zi,wh,Yd,Ue,Cs,Mh,Ns,$h,Xi,Fh,Bh,Eh,Os,xh,Aa,zh,Ph,qh,Ss,jh,As,Ch,Nh,Oh,Ye,Is,Sh,eo,Ah,Ia,Ih,Lh,el,Dh,Wh,Rh,Qo,Uh,Ko,Hh,Vo,Jd,to,Go,tl,Ls,Qh,ol,Kh,Zd,He,Ds,Vh,Ws,Gh,nl,Yh,Jh,Zh,Rs,Xh,La,ef,tf,of,Us,nf,Hs,sf,rf,af,dt,Qs,lf,oo,df,Da,cf,pf,sl,mf,hf,ff,Yo,uf,Jo,Xd,no,Zo,rl,Ks,gf,al,_f,ec,Qe,Vs,bf,il,Tf,kf,Gs,yf,Wa,vf,wf,Mf,Ys,$f,Js,Ff,Bf,Ef,je,Zs,xf,so,zf,Ra,Pf,qf,ll,jf,Cf,Nf,Xo,Of,en,Sf,tn,Af,on,If,nn,tc,ro,sn,dl,Xs,Lf,cl,Df,oc,Ke,er,Wf,pl,Rf,Uf,tr,Hf,Ua,Qf,Kf,Vf,or,Gf,nr,Yf,Jf,Zf,ct,sr,Xf,ao,eu,Ha,tu,ou,ml,nu,su,ru,rn,au,an,nc,io,ln,hl,rr,iu,fl,lu,sc,Ve,ar,du,ul,cu,pu,ir,mu,Qa,hu,fu,uu,lr,gu,dr,_u,bu,Tu,Je,cr,ku,lo,yu,Ka,vu,wu,gl,Mu,$u,Fu,dn,Bu,cn,Eu,pn,rc,co,mn,_l,pr,xu,bl,zu,ac,Ge,mr,Pu,po,qu,Tl,ju,Cu,kl,Nu,Ou,Su,hr,Au,Va,Iu,Lu,Du,fr,Wu,ur,Ru,Uu,Hu,Ze,gr,Qu,mo,Ku,Ga,Vu,Gu,yl,Yu,Ju,Zu,hn,Xu,fn,eg,un,ic,ho,gn,vl,_r,tg,wl,og,lc,Ne,br,ng,Ml,sg,rg,Tr,ag,Ya,ig,lg,dg,kr,cg,yr,pg,mg,hg,_n,fg,pt,vr,ug,fo,gg,Ja,_g,bg,$l,Tg,kg,yg,bn,vg,Tn,dc,uo,kn,Fl,wr,wg,Bl,Mg,cc,Oe,Mr,$g,go,Fg,El,Bg,Eg,xl,xg,zg,Pg,$r,qg,Za,jg,Cg,Ng,Fr,Og,Br,Sg,Ag,Ig,yn,Lg,mt,Er,Dg,_o,Wg,Xa,Rg,Ug,zl,Hg,Qg,Kg,vn,Vg,wn,pc,bo,Mn,Pl,xr,Gg,ql,Yg,mc,Se,zr,Jg,Pr,Zg,jl,Xg,e_,t_,qr,o_,ei,n_,s_,r_,jr,a_,Cr,i_,l_,d_,$n,c_,Xe,Nr,p_,To,m_,ti,h_,f_,Cl,u_,g_,__,Fn,b_,Bn,T_,En,hc,ko,xn,Nl,Or,k_,Ol,y_,fc,Ae,Sr,v_,Ar,w_,Sl,M_,$_,F_,Ir,B_,oi,E_,x_,z_,Lr,P_,Dr,q_,j_,C_,zn,N_,ht,Wr,O_,yo,S_,ni,A_,I_,Al,L_,D_,W_,Pn,R_,qn,uc,vo,jn,Il,Rr,U_,Ll,H_,gc,Ie,Ur,Q_,Dl,K_,V_,Hr,G_,si,Y_,J_,Z_,Qr,X_,Kr,eb,tb,ob,Cn,nb,et,Vr,sb,wo,rb,ri,ab,ib,Wl,lb,db,cb,Nn,pb,On,mb,Sn,_c,Mo,An,Rl,Gr,hb,Ul,fb,bc,Le,Yr,ub,Hl,gb,_b,Jr,bb,ai,Tb,kb,yb,Zr,vb,Xr,wb,Mb,$b,In,Fb,ft,ea,Bb,$o,Eb,ii,xb,zb,Ql,Pb,qb,jb,Ln,Cb,Dn,Tc,Fo,Wn,Kl,ta,Nb,Vl,Ob,kc,De,oa,Sb,Gl,Ab,Ib,na,Lb,li,Db,Wb,Rb,sa,Ub,ra,Hb,Qb,Kb,Rn,Vb,tt,aa,Gb,Bo,Yb,di,Jb,Zb,Yl,Xb,eT,tT,Un,oT,Hn,nT,Qn,yc,Eo,Kn,Jl,ia,sT,Zl,rT,vc,We,la,aT,xo,iT,Xl,lT,dT,ed,cT,pT,mT,da,hT,ci,fT,uT,gT,ca,_T,pa,bT,TT,kT,Vn,yT,ot,ma,vT,zo,wT,pi,MT,$T,td,FT,BT,ET,Gn,xT,Yn,zT,Jn,wc;return l=new qe({}),X=new qe({}),I=new qe({}),oe=new ie({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MobileBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MobileBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MobileBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MobileBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MobileBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MobileBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;relu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MobileBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MobileBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MobileBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MobileBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or
<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MobileBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MobileBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MobileBertConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The ID of the token in the word embedding to use as padding.`,name:"pad_token_id"},{anchor:"transformers.MobileBertConfig.embedding_size",description:`<strong>embedding_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
The dimension of the word embedding vectors.`,name:"embedding_size"},{anchor:"transformers.MobileBertConfig.trigram_input",description:`<strong>trigram_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Use a convolution of trigram as input.`,name:"trigram_input"},{anchor:"transformers.MobileBertConfig.use_bottleneck",description:`<strong>use_bottleneck</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use bottleneck in BERT.`,name:"use_bottleneck"},{anchor:"transformers.MobileBertConfig.intra_bottleneck_size",description:`<strong>intra_bottleneck_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128) &#x2014;
Size of bottleneck layer output.`,name:"intra_bottleneck_size"},{anchor:"transformers.MobileBertConfig.use_bottleneck_attention",description:`<strong>use_bottleneck_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to use attention inputs from the bottleneck transformation.`,name:"use_bottleneck_attention"},{anchor:"transformers.MobileBertConfig.key_query_shared_bottleneck",description:`<strong>key_query_shared_bottleneck</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use the same linear transformation for query&amp;key in the bottleneck.`,name:"key_query_shared_bottleneck"},{anchor:"transformers.MobileBertConfig.num_feedforward_networks",description:`<strong>num_feedforward_networks</strong> (<code>int</code>, <em>optional</em>, defaults to 4) &#x2014;
Number of FFNs in a block.`,name:"num_feedforward_networks"},{anchor:"transformers.MobileBertConfig.normalization_type",description:`<strong>normalization_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;no_norm&quot;</code>) &#x2014;
The normalization type in MobileBERT.`,name:"normalization_type"},{anchor:"transformers.MobileBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/configuration_mobilebert.py#L31"}}),jo=new Ee({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[gv]},$$scope:{ctx:E}}}),ls=new qe({}),ds=new ie({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),ps=new qe({}),ms=new ie({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),us=new qe({}),gs=new ie({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L710"}}),bs=new ie({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L797"}}),ks=new qe({}),ys=new ie({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L813"}}),Fs=new ie({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L843",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Lo=new Pe({props:{$$slots:{default:[_v]},$$scope:{ctx:E}}}),Do=new Ee({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[bv]},$$scope:{ctx:E}}}),Bs=new qe({}),Es=new ie({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L927"}}),qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"return_dict",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MobileBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L950",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[Tv]},$$scope:{ctx:E}}}),Uo=new Ee({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[kv]},$$scope:{ctx:E}}}),js=new qe({}),Cs=new ie({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1033"}}),Is=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1059",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Qo=new Pe({props:{$$slots:{default:[yv]},$$scope:{ctx:E}}}),Ko=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[vv]},$$scope:{ctx:E}}}),Vo=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[wv]},$$scope:{ctx:E}}}),Ls=new qe({}),Ds=new ie({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1135"}}),Qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>.</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1145",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Pe({props:{$$slots:{default:[Mv]},$$scope:{ctx:E}}}),Jo=new Ee({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[$v]},$$scope:{ctx:E}}}),Ks=new qe({}),Vs=new ie({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1239"}}),Zs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1255",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Xo=new Pe({props:{$$slots:{default:[Fv]},$$scope:{ctx:E}}}),en=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[Bv]},$$scope:{ctx:E}}}),tn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[Ev]},$$scope:{ctx:E}}}),on=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[xv]},$$scope:{ctx:E}}}),nn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[zv]},$$scope:{ctx:E}}}),Xs=new qe({}),er=new ie({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1452"}}),sr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1466",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),rn=new Pe({props:{$$slots:{default:[Pv]},$$scope:{ctx:E}}}),an=new Ee({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[qv]},$$scope:{ctx:E}}}),rr=new qe({}),ar=new ie({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1550"}}),cr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1568",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),dn=new Pe({props:{$$slots:{default:[jv]},$$scope:{ctx:E}}}),cn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[Cv]},$$scope:{ctx:E}}}),pn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[Nv]},$$scope:{ctx:E}}}),pr=new qe({}),mr=new ie({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1344"}}),gr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),hn=new Pe({props:{$$slots:{default:[Ov]},$$scope:{ctx:E}}}),fn=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[Sv]},$$scope:{ctx:E}}}),un=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[Av]},$$scope:{ctx:E}}}),_r=new qe({}),br=new ie({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L924"}}),_n=new Pe({props:{$$slots:{default:[Iv]},$$scope:{ctx:E}}}),vr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L929",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Pe({props:{$$slots:{default:[Lv]},$$scope:{ctx:E}}}),Tn=new Ee({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[Dv]},$$scope:{ctx:E}}}),wr=new qe({}),Mr=new ie({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L984"}}),yn=new Pe({props:{$$slots:{default:[Wv]},$$scope:{ctx:E}}}),Er=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L998",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vn=new Pe({props:{$$slots:{default:[Rv]},$$scope:{ctx:E}}}),wn=new Ee({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[Uv]},$$scope:{ctx:E}}}),xr=new qe({}),zr=new ie({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1069"}}),$n=new Pe({props:{$$slots:{default:[Hv]},$$scope:{ctx:E}}}),Nr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1090",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Fn=new Pe({props:{$$slots:{default:[Qv]},$$scope:{ctx:E}}}),Bn=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[Kv]},$$scope:{ctx:E}}}),En=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[Vv]},$$scope:{ctx:E}}}),Or=new qe({}),Sr=new ie({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1170"}}),zn=new Pe({props:{$$slots:{default:[Gv]},$$scope:{ctx:E}}}),Wr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1180",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>next_sentence_label</code> is provided) \u2014 Next sentence prediction loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Pe({props:{$$slots:{default:[Yv]},$$scope:{ctx:E}}}),qn=new Ee({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[Jv]},$$scope:{ctx:E}}}),Rr=new qe({}),Ur=new ie({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1262"}}),Cn=new Pe({props:{$$slots:{default:[Zv]},$$scope:{ctx:E}}}),Vr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1285",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Nn=new Pe({props:{$$slots:{default:[Xv]},$$scope:{ctx:E}}}),On=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[ew]},$$scope:{ctx:E}}}),Sn=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[tw]},$$scope:{ctx:E}}}),Gr=new qe({}),Yr=new ie({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1469"}}),In=new Pe({props:{$$slots:{default:[ow]},$$scope:{ctx:E}}}),ea=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1498",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Ln=new Pe({props:{$$slots:{default:[nw]},$$scope:{ctx:E}}}),Dn=new Ee({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[sw]},$$scope:{ctx:E}}}),ta=new qe({}),oa=new ie({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1603"}}),Rn=new Pe({props:{$$slots:{default:[rw]},$$scope:{ctx:E}}}),aa=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Un=new Pe({props:{$$slots:{default:[aw]},$$scope:{ctx:E}}}),Hn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[iw]},$$scope:{ctx:E}}}),Qn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[lw]},$$scope:{ctx:E}}}),ia=new qe({}),la=new ie({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1360"}}),Vn=new Pe({props:{$$slots:{default:[dw]},$$scope:{ctx:E}}}),ma=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1379",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig"
>MobileBertConfig</a>) and inputs.</p>
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
`}}),Gn=new Pe({props:{$$slots:{default:[cw]},$$scope:{ctx:E}}}),Yn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[pw]},$$scope:{ctx:E}}}),Jn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[mw]},$$scope:{ctx:E}}}),{c(){d=r("meta"),_=m(),c=r("h1"),p=r("a"),T=r("span"),y(l.$$.fragment),f=m(),x=r("span"),me=n("MobileBERT"),V=m(),z=r("h2"),J=r("a"),L=r("span"),y(X.$$.fragment),he=m(),D=r("span"),fe=n("Overview"),le=m(),K=r("p"),N=n("The MobileBERT model was proposed in "),ee=r("a"),G=n("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),P=n(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),j=m(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=m(),se=r("p"),W=r("em"),ue=n(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
of millions of parameters. However, these models suffer from heavy model sizes and high latency such that they cannot
be deployed to resource-limited mobile devices. In this paper, we propose MobileBERT for compressing and accelerating
the popular BERT model. Like the original BERT, MobileBERT is task-agnostic, that is, it can be generically applied to
various downstream NLP tasks via simple fine-tuning. Basically, MobileBERT is a thin version of BERT_LARGE, while
equipped with bottleneck structures and a carefully designed balance between self-attentions and feed-forward networks.
To train MobileBERT, we first train a specially designed teacher model, an inverted-bottleneck incorporated BERT_LARGE
model. Then, we conduct knowledge transfer from this teacher to MobileBERT. Empirical studies show that MobileBERT is
4.3x smaller and 5.5x faster than BERT_BASE while achieving competitive results on well-known benchmarks. On the
natural language inference tasks of GLUE, MobileBERT achieves a GLUEscore o 77.7 (0.6 lower than BERT_BASE), and 62 ms
latency on a Pixel 4 phone. On the SQuAD v1.1/v2.0 question answering task, MobileBERT achieves a dev F1 score of
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),ce=m(),q=r("p"),ge=n("Tips:"),R=m(),Z=r("ul"),re=r("li"),H=n(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),_e=m(),ae=r("li"),O=n(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),pe=m(),A=r("p"),be=n("This model was contributed by "),u=r("a"),B=n("vshampor"),Y=n(". The original code can be found "),ye=r("a"),$e=n("here"),S=n("."),we=m(),Te=r("h2"),ke=r("a"),C=r("span"),y(I.$$.fragment),Fe=m(),ve=r("span"),Q=n("MobileBertConfig"),Me=m(),te=r("div"),y(oe.$$.fragment),Be=m(),Mt=r("p"),Ep=n("This is the configuration class to store the configuration of a "),va=r("a"),xp=n("MobileBertModel"),zp=n(" or a "),wa=r("a"),Pp=n("TFMobileBertModel"),qp=n(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),is=r("a"),jp=n("google/mobilebert-uncased"),Cp=n(" architecture."),Np=m(),Wt=r("p"),Op=n("Configuration objects inherit from "),Ma=r("a"),Sp=n("PretrainedConfig"),Ap=n(` and can be used to control the model outputs. Read the
documentation from `),$a=r("a"),Ip=n("PretrainedConfig"),Lp=n(" for more information."),Dp=m(),y(jo.$$.fragment),Wp=m(),qi=r("p"),Rp=n(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Ad=m(),Rt=r("h2"),Co=r("a"),ji=r("span"),y(ls.$$.fragment),Up=m(),Ci=r("span"),Hp=n("MobileBertTokenizer"),Id=m(),st=r("div"),y(ds.$$.fragment),Qp=m(),Ni=r("p"),Kp=n("Construct a MobileBERT tokenizer."),Vp=m(),No=r("p"),Fa=r("a"),Gp=n("MobileBertTokenizer"),Yp=n(" is identical to "),Ba=r("a"),Jp=n("BertTokenizer"),Zp=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Xp=m(),cs=r("p"),em=n("Refer to superclass "),Ea=r("a"),tm=n("BertTokenizer"),om=n(" for usage examples and documentation concerning parameters."),Ld=m(),Ut=r("h2"),Oo=r("a"),Oi=r("span"),y(ps.$$.fragment),nm=m(),Si=r("span"),sm=n("MobileBertTokenizerFast"),Dd=m(),rt=r("div"),y(ms.$$.fragment),rm=m(),hs=r("p"),am=n("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ai=r("em"),im=n("tokenizers"),lm=n(" library)."),dm=m(),So=r("p"),xa=r("a"),cm=n("MobileBertTokenizerFast"),pm=n(" is identical to "),za=r("a"),mm=n("BertTokenizerFast"),hm=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),fm=m(),fs=r("p"),um=n("Refer to superclass "),Pa=r("a"),gm=n("BertTokenizerFast"),_m=n(" for usage examples and documentation concerning parameters."),Wd=m(),Ht=r("h2"),Ao=r("a"),Ii=r("span"),y(us.$$.fragment),bm=m(),Li=r("span"),Tm=n("MobileBert specific outputs"),Rd=m(),Qt=r("div"),y(gs.$$.fragment),km=m(),_s=r("p"),ym=n("Output type of "),qa=r("a"),vm=n("MobileBertForPreTraining"),wm=n("."),Ud=m(),Kt=r("div"),y(bs.$$.fragment),Mm=m(),Ts=r("p"),$m=n("Output type of "),ja=r("a"),Fm=n("TFMobileBertForPreTraining"),Bm=n("."),Hd=m(),Vt=r("h2"),Io=r("a"),Di=r("span"),y(ks.$$.fragment),Em=m(),Wi=r("span"),xm=n("MobileBertModel"),Qd=m(),Ce=r("div"),y(ys.$$.fragment),zm=m(),Ri=r("p"),Pm=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),qm=m(),vs=r("p"),jm=n("This model inherits from "),Ca=r("a"),Cm=n("PreTrainedModel"),Nm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om=m(),ws=r("p"),Sm=n("This model is also a PyTorch "),Ms=r("a"),Am=n("torch.nn.Module"),Im=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lm=m(),Ui=r("p"),$s=r("a"),Dm=n("https://arxiv.org/pdf/2004.02984.pdf"),Wm=m(),it=r("div"),y(Fs.$$.fragment),Rm=m(),Gt=r("p"),Um=n("The "),Na=r("a"),Hm=n("MobileBertModel"),Qm=n(" forward method, overrides the "),Hi=r("code"),Km=n("__call__"),Vm=n(" special method."),Gm=m(),y(Lo.$$.fragment),Ym=m(),y(Do.$$.fragment),Kd=m(),Yt=r("h2"),Wo=r("a"),Qi=r("span"),y(Bs.$$.fragment),Jm=m(),Ki=r("span"),Zm=n("MobileBertForPreTraining"),Vd=m(),Re=r("div"),y(Es.$$.fragment),Xm=m(),Jt=r("p"),eh=n("MobileBert Model with two heads on top as done during the pretraining: a "),Vi=r("code"),th=n("masked language modeling"),oh=n(` head and a
`),Gi=r("code"),nh=n("next sentence prediction (classification)"),sh=n(" head."),rh=m(),xs=r("p"),ah=n("This model inherits from "),Oa=r("a"),ih=n("PreTrainedModel"),lh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dh=m(),zs=r("p"),ch=n("This model is also a PyTorch "),Ps=r("a"),ph=n("torch.nn.Module"),mh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hh=m(),lt=r("div"),y(qs.$$.fragment),fh=m(),Zt=r("p"),uh=n("The "),Sa=r("a"),gh=n("MobileBertForPreTraining"),_h=n(" forward method, overrides the "),Yi=r("code"),bh=n("__call__"),Th=n(" special method."),kh=m(),y(Ro.$$.fragment),yh=m(),y(Uo.$$.fragment),Gd=m(),Xt=r("h2"),Ho=r("a"),Ji=r("span"),y(js.$$.fragment),vh=m(),Zi=r("span"),wh=n("MobileBertForMaskedLM"),Yd=m(),Ue=r("div"),y(Cs.$$.fragment),Mh=m(),Ns=r("p"),$h=n("MobileBert Model with a "),Xi=r("code"),Fh=n("language modeling"),Bh=n(" head on top."),Eh=m(),Os=r("p"),xh=n("This model inherits from "),Aa=r("a"),zh=n("PreTrainedModel"),Ph=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh=m(),Ss=r("p"),jh=n("This model is also a PyTorch "),As=r("a"),Ch=n("torch.nn.Module"),Nh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Oh=m(),Ye=r("div"),y(Is.$$.fragment),Sh=m(),eo=r("p"),Ah=n("The "),Ia=r("a"),Ih=n("MobileBertForMaskedLM"),Lh=n(" forward method, overrides the "),el=r("code"),Dh=n("__call__"),Wh=n(" special method."),Rh=m(),y(Qo.$$.fragment),Uh=m(),y(Ko.$$.fragment),Hh=m(),y(Vo.$$.fragment),Jd=m(),to=r("h2"),Go=r("a"),tl=r("span"),y(Ls.$$.fragment),Qh=m(),ol=r("span"),Kh=n("MobileBertForNextSentencePrediction"),Zd=m(),He=r("div"),y(Ds.$$.fragment),Vh=m(),Ws=r("p"),Gh=n("MobileBert Model with a "),nl=r("code"),Yh=n("next sentence prediction (classification)"),Jh=n(" head on top."),Zh=m(),Rs=r("p"),Xh=n("This model inherits from "),La=r("a"),ef=n("PreTrainedModel"),tf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=m(),Us=r("p"),nf=n("This model is also a PyTorch "),Hs=r("a"),sf=n("torch.nn.Module"),rf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af=m(),dt=r("div"),y(Qs.$$.fragment),lf=m(),oo=r("p"),df=n("The "),Da=r("a"),cf=n("MobileBertForNextSentencePrediction"),pf=n(" forward method, overrides the "),sl=r("code"),mf=n("__call__"),hf=n(" special method."),ff=m(),y(Yo.$$.fragment),uf=m(),y(Jo.$$.fragment),Xd=m(),no=r("h2"),Zo=r("a"),rl=r("span"),y(Ks.$$.fragment),gf=m(),al=r("span"),_f=n("MobileBertForSequenceClassification"),ec=m(),Qe=r("div"),y(Vs.$$.fragment),bf=m(),il=r("p"),Tf=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),kf=m(),Gs=r("p"),yf=n("This model inherits from "),Wa=r("a"),vf=n("PreTrainedModel"),wf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mf=m(),Ys=r("p"),$f=n("This model is also a PyTorch "),Js=r("a"),Ff=n("torch.nn.Module"),Bf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ef=m(),je=r("div"),y(Zs.$$.fragment),xf=m(),so=r("p"),zf=n("The "),Ra=r("a"),Pf=n("MobileBertForSequenceClassification"),qf=n(" forward method, overrides the "),ll=r("code"),jf=n("__call__"),Cf=n(" special method."),Nf=m(),y(Xo.$$.fragment),Of=m(),y(en.$$.fragment),Sf=m(),y(tn.$$.fragment),Af=m(),y(on.$$.fragment),If=m(),y(nn.$$.fragment),tc=m(),ro=r("h2"),sn=r("a"),dl=r("span"),y(Xs.$$.fragment),Lf=m(),cl=r("span"),Df=n("MobileBertForMultipleChoice"),oc=m(),Ke=r("div"),y(er.$$.fragment),Wf=m(),pl=r("p"),Rf=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Uf=m(),tr=r("p"),Hf=n("This model inherits from "),Ua=r("a"),Qf=n("PreTrainedModel"),Kf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf=m(),or=r("p"),Gf=n("This model is also a PyTorch "),nr=r("a"),Yf=n("torch.nn.Module"),Jf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zf=m(),ct=r("div"),y(sr.$$.fragment),Xf=m(),ao=r("p"),eu=n("The "),Ha=r("a"),tu=n("MobileBertForMultipleChoice"),ou=n(" forward method, overrides the "),ml=r("code"),nu=n("__call__"),su=n(" special method."),ru=m(),y(rn.$$.fragment),au=m(),y(an.$$.fragment),nc=m(),io=r("h2"),ln=r("a"),hl=r("span"),y(rr.$$.fragment),iu=m(),fl=r("span"),lu=n("MobileBertForTokenClassification"),sc=m(),Ve=r("div"),y(ar.$$.fragment),du=m(),ul=r("p"),cu=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pu=m(),ir=r("p"),mu=n("This model inherits from "),Qa=r("a"),hu=n("PreTrainedModel"),fu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu=m(),lr=r("p"),gu=n("This model is also a PyTorch "),dr=r("a"),_u=n("torch.nn.Module"),bu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu=m(),Je=r("div"),y(cr.$$.fragment),ku=m(),lo=r("p"),yu=n("The "),Ka=r("a"),vu=n("MobileBertForTokenClassification"),wu=n(" forward method, overrides the "),gl=r("code"),Mu=n("__call__"),$u=n(" special method."),Fu=m(),y(dn.$$.fragment),Bu=m(),y(cn.$$.fragment),Eu=m(),y(pn.$$.fragment),rc=m(),co=r("h2"),mn=r("a"),_l=r("span"),y(pr.$$.fragment),xu=m(),bl=r("span"),zu=n("MobileBertForQuestionAnswering"),ac=m(),Ge=r("div"),y(mr.$$.fragment),Pu=m(),po=r("p"),qu=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Tl=r("code"),ju=n("span start logits"),Cu=n(" and "),kl=r("code"),Nu=n("span end logits"),Ou=n(")."),Su=m(),hr=r("p"),Au=n("This model inherits from "),Va=r("a"),Iu=n("PreTrainedModel"),Lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du=m(),fr=r("p"),Wu=n("This model is also a PyTorch "),ur=r("a"),Ru=n("torch.nn.Module"),Uu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hu=m(),Ze=r("div"),y(gr.$$.fragment),Qu=m(),mo=r("p"),Ku=n("The "),Ga=r("a"),Vu=n("MobileBertForQuestionAnswering"),Gu=n(" forward method, overrides the "),yl=r("code"),Yu=n("__call__"),Ju=n(" special method."),Zu=m(),y(hn.$$.fragment),Xu=m(),y(fn.$$.fragment),eg=m(),y(un.$$.fragment),ic=m(),ho=r("h2"),gn=r("a"),vl=r("span"),y(_r.$$.fragment),tg=m(),wl=r("span"),og=n("TFMobileBertModel"),lc=m(),Ne=r("div"),y(br.$$.fragment),ng=m(),Ml=r("p"),sg=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),rg=m(),Tr=r("p"),ag=n("This model inherits from "),Ya=r("a"),ig=n("TFPreTrainedModel"),lg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=m(),kr=r("p"),cg=n("This model is also a "),yr=r("a"),pg=n("tf.keras.Model"),mg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hg=m(),y(_n.$$.fragment),fg=m(),pt=r("div"),y(vr.$$.fragment),ug=m(),fo=r("p"),gg=n("The "),Ja=r("a"),_g=n("TFMobileBertModel"),bg=n(" forward method, overrides the "),$l=r("code"),Tg=n("__call__"),kg=n(" special method."),yg=m(),y(bn.$$.fragment),vg=m(),y(Tn.$$.fragment),dc=m(),uo=r("h2"),kn=r("a"),Fl=r("span"),y(wr.$$.fragment),wg=m(),Bl=r("span"),Mg=n("TFMobileBertForPreTraining"),cc=m(),Oe=r("div"),y(Mr.$$.fragment),$g=m(),go=r("p"),Fg=n("MobileBert Model with two heads on top as done during the pretraining: a "),El=r("code"),Bg=n("masked language modeling"),Eg=n(` head and a
`),xl=r("code"),xg=n("next sentence prediction (classification)"),zg=n(" head."),Pg=m(),$r=r("p"),qg=n("This model inherits from "),Za=r("a"),jg=n("TFPreTrainedModel"),Cg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=m(),Fr=r("p"),Og=n("This model is also a "),Br=r("a"),Sg=n("tf.keras.Model"),Ag=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ig=m(),y(yn.$$.fragment),Lg=m(),mt=r("div"),y(Er.$$.fragment),Dg=m(),_o=r("p"),Wg=n("The "),Xa=r("a"),Rg=n("TFMobileBertForPreTraining"),Ug=n(" forward method, overrides the "),zl=r("code"),Hg=n("__call__"),Qg=n(" special method."),Kg=m(),y(vn.$$.fragment),Vg=m(),y(wn.$$.fragment),pc=m(),bo=r("h2"),Mn=r("a"),Pl=r("span"),y(xr.$$.fragment),Gg=m(),ql=r("span"),Yg=n("TFMobileBertForMaskedLM"),mc=m(),Se=r("div"),y(zr.$$.fragment),Jg=m(),Pr=r("p"),Zg=n("MobileBert Model with a "),jl=r("code"),Xg=n("language modeling"),e_=n(" head on top."),t_=m(),qr=r("p"),o_=n("This model inherits from "),ei=r("a"),n_=n("TFPreTrainedModel"),s_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r_=m(),jr=r("p"),a_=n("This model is also a "),Cr=r("a"),i_=n("tf.keras.Model"),l_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d_=m(),y($n.$$.fragment),c_=m(),Xe=r("div"),y(Nr.$$.fragment),p_=m(),To=r("p"),m_=n("The "),ti=r("a"),h_=n("TFMobileBertForMaskedLM"),f_=n(" forward method, overrides the "),Cl=r("code"),u_=n("__call__"),g_=n(" special method."),__=m(),y(Fn.$$.fragment),b_=m(),y(Bn.$$.fragment),T_=m(),y(En.$$.fragment),hc=m(),ko=r("h2"),xn=r("a"),Nl=r("span"),y(Or.$$.fragment),k_=m(),Ol=r("span"),y_=n("TFMobileBertForNextSentencePrediction"),fc=m(),Ae=r("div"),y(Sr.$$.fragment),v_=m(),Ar=r("p"),w_=n("MobileBert Model with a "),Sl=r("code"),M_=n("next sentence prediction (classification)"),$_=n(" head on top."),F_=m(),Ir=r("p"),B_=n("This model inherits from "),oi=r("a"),E_=n("TFPreTrainedModel"),x_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=m(),Lr=r("p"),P_=n("This model is also a "),Dr=r("a"),q_=n("tf.keras.Model"),j_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),C_=m(),y(zn.$$.fragment),N_=m(),ht=r("div"),y(Wr.$$.fragment),O_=m(),yo=r("p"),S_=n("The "),ni=r("a"),A_=n("TFMobileBertForNextSentencePrediction"),I_=n(" forward method, overrides the "),Al=r("code"),L_=n("__call__"),D_=n(" special method."),W_=m(),y(Pn.$$.fragment),R_=m(),y(qn.$$.fragment),uc=m(),vo=r("h2"),jn=r("a"),Il=r("span"),y(Rr.$$.fragment),U_=m(),Ll=r("span"),H_=n("TFMobileBertForSequenceClassification"),gc=m(),Ie=r("div"),y(Ur.$$.fragment),Q_=m(),Dl=r("p"),K_=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V_=m(),Hr=r("p"),G_=n("This model inherits from "),si=r("a"),Y_=n("TFPreTrainedModel"),J_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=m(),Qr=r("p"),X_=n("This model is also a "),Kr=r("a"),eb=n("tf.keras.Model"),tb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob=m(),y(Cn.$$.fragment),nb=m(),et=r("div"),y(Vr.$$.fragment),sb=m(),wo=r("p"),rb=n("The "),ri=r("a"),ab=n("TFMobileBertForSequenceClassification"),ib=n(" forward method, overrides the "),Wl=r("code"),lb=n("__call__"),db=n(" special method."),cb=m(),y(Nn.$$.fragment),pb=m(),y(On.$$.fragment),mb=m(),y(Sn.$$.fragment),_c=m(),Mo=r("h2"),An=r("a"),Rl=r("span"),y(Gr.$$.fragment),hb=m(),Ul=r("span"),fb=n("TFMobileBertForMultipleChoice"),bc=m(),Le=r("div"),y(Yr.$$.fragment),ub=m(),Hl=r("p"),gb=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_b=m(),Jr=r("p"),bb=n("This model inherits from "),ai=r("a"),Tb=n("TFPreTrainedModel"),kb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=m(),Zr=r("p"),vb=n("This model is also a "),Xr=r("a"),wb=n("tf.keras.Model"),Mb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$b=m(),y(In.$$.fragment),Fb=m(),ft=r("div"),y(ea.$$.fragment),Bb=m(),$o=r("p"),Eb=n("The "),ii=r("a"),xb=n("TFMobileBertForMultipleChoice"),zb=n(" forward method, overrides the "),Ql=r("code"),Pb=n("__call__"),qb=n(" special method."),jb=m(),y(Ln.$$.fragment),Cb=m(),y(Dn.$$.fragment),Tc=m(),Fo=r("h2"),Wn=r("a"),Kl=r("span"),y(ta.$$.fragment),Nb=m(),Vl=r("span"),Ob=n("TFMobileBertForTokenClassification"),kc=m(),De=r("div"),y(oa.$$.fragment),Sb=m(),Gl=r("p"),Ab=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ib=m(),na=r("p"),Lb=n("This model inherits from "),li=r("a"),Db=n("TFPreTrainedModel"),Wb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=m(),sa=r("p"),Ub=n("This model is also a "),ra=r("a"),Hb=n("tf.keras.Model"),Qb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kb=m(),y(Rn.$$.fragment),Vb=m(),tt=r("div"),y(aa.$$.fragment),Gb=m(),Bo=r("p"),Yb=n("The "),di=r("a"),Jb=n("TFMobileBertForTokenClassification"),Zb=n(" forward method, overrides the "),Yl=r("code"),Xb=n("__call__"),eT=n(" special method."),tT=m(),y(Un.$$.fragment),oT=m(),y(Hn.$$.fragment),nT=m(),y(Qn.$$.fragment),yc=m(),Eo=r("h2"),Kn=r("a"),Jl=r("span"),y(ia.$$.fragment),sT=m(),Zl=r("span"),rT=n("TFMobileBertForQuestionAnswering"),vc=m(),We=r("div"),y(la.$$.fragment),aT=m(),xo=r("p"),iT=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=r("code"),lT=n("span start logits"),dT=n(" and "),ed=r("code"),cT=n("span end logits"),pT=n(")."),mT=m(),da=r("p"),hT=n("This model inherits from "),ci=r("a"),fT=n("TFPreTrainedModel"),uT=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gT=m(),ca=r("p"),_T=n("This model is also a "),pa=r("a"),bT=n("tf.keras.Model"),TT=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kT=m(),y(Vn.$$.fragment),yT=m(),ot=r("div"),y(ma.$$.fragment),vT=m(),zo=r("p"),wT=n("The "),pi=r("a"),MT=n("TFMobileBertForQuestionAnswering"),$T=n(" forward method, overrides the "),td=r("code"),FT=n("__call__"),BT=n(" special method."),ET=m(),y(Gn.$$.fragment),xT=m(),y(Yn.$$.fragment),zT=m(),y(Jn.$$.fragment),this.h()},l(o){const k=fv('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=h(o),c=a(o,"H1",{class:!0});var ha=i(c);p=a(ha,"A",{id:!0,class:!0,href:!0});var od=i(p);T=a(od,"SPAN",{});var nd=i(T);v(l.$$.fragment,nd),nd.forEach(t),od.forEach(t),f=h(ha),x=a(ha,"SPAN",{});var sd=i(x);me=s(sd,"MobileBERT"),sd.forEach(t),ha.forEach(t),V=h(o),z=a(o,"H2",{class:!0});var fa=i(z);J=a(fa,"A",{id:!0,class:!0,href:!0});var rd=i(J);L=a(rd,"SPAN",{});var ad=i(L);v(X.$$.fragment,ad),ad.forEach(t),rd.forEach(t),he=h(fa),D=a(fa,"SPAN",{});var id=i(D);fe=s(id,"Overview"),id.forEach(t),fa.forEach(t),le=h(o),K=a(o,"P",{});var ua=i(K);N=s(ua,"The MobileBERT model was proposed in "),ee=a(ua,"A",{href:!0,rel:!0});var ld=i(ee);G=s(ld,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),ld.forEach(t),P=s(ua,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),ua.forEach(t),j=h(o),ne=a(o,"P",{});var dd=i(ne);U=s(dd,"The abstract from the paper is the following:"),dd.forEach(t),de=h(o),se=a(o,"P",{});var cd=i(se);W=a(cd,"EM",{});var pd=i(W);ue=s(pd,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
of millions of parameters. However, these models suffer from heavy model sizes and high latency such that they cannot
be deployed to resource-limited mobile devices. In this paper, we propose MobileBERT for compressing and accelerating
the popular BERT model. Like the original BERT, MobileBERT is task-agnostic, that is, it can be generically applied to
various downstream NLP tasks via simple fine-tuning. Basically, MobileBERT is a thin version of BERT_LARGE, while
equipped with bottleneck structures and a carefully designed balance between self-attentions and feed-forward networks.
To train MobileBERT, we first train a specially designed teacher model, an inverted-bottleneck incorporated BERT_LARGE
model. Then, we conduct knowledge transfer from this teacher to MobileBERT. Empirical studies show that MobileBERT is
4.3x smaller and 5.5x faster than BERT_BASE while achieving competitive results on well-known benchmarks. On the
natural language inference tasks of GLUE, MobileBERT achieves a GLUEscore o 77.7 (0.6 lower than BERT_BASE), and 62 ms
latency on a Pixel 4 phone. On the SQuAD v1.1/v2.0 question answering task, MobileBERT achieves a dev F1 score of
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),pd.forEach(t),cd.forEach(t),ce=h(o),q=a(o,"P",{});var md=i(q);ge=s(md,"Tips:"),md.forEach(t),R=h(o),Z=a(o,"UL",{});var ga=i(Z);re=a(ga,"LI",{});var hd=i(re);H=s(hd,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),hd.forEach(t),_e=h(ga),ae=a(ga,"LI",{});var fd=i(ae);O=s(fd,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),fd.forEach(t),ga.forEach(t),pe=h(o),A=a(o,"P",{});var Po=i(A);be=s(Po,"This model was contributed by "),u=a(Po,"A",{href:!0,rel:!0});var ud=i(u);B=s(ud,"vshampor"),ud.forEach(t),Y=s(Po,". The original code can be found "),ye=a(Po,"A",{href:!0,rel:!0});var gd=i(ye);$e=s(gd,"here"),gd.forEach(t),S=s(Po,"."),Po.forEach(t),we=h(o),Te=a(o,"H2",{class:!0});var _a=i(Te);ke=a(_a,"A",{id:!0,class:!0,href:!0});var _d=i(ke);C=a(_d,"SPAN",{});var bd=i(C);v(I.$$.fragment,bd),bd.forEach(t),_d.forEach(t),Fe=h(_a),ve=a(_a,"SPAN",{});var Td=i(ve);Q=s(Td,"MobileBertConfig"),Td.forEach(t),_a.forEach(t),Me=h(o),te=a(o,"DIV",{class:!0});var at=i(te);v(oe.$$.fragment,at),Be=h(at),Mt=a(at,"P",{});var $t=i(Mt);Ep=s($t,"This is the configuration class to store the configuration of a "),va=a($t,"A",{href:!0});var kd=i(va);xp=s(kd,"MobileBertModel"),kd.forEach(t),zp=s($t," or a "),wa=a($t,"A",{href:!0});var yd=i(wa);Pp=s(yd,"TFMobileBertModel"),yd.forEach(t),qp=s($t,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),is=a($t,"A",{href:!0,rel:!0});var vd=i(is);jp=s(vd,"google/mobilebert-uncased"),vd.forEach(t),Cp=s($t," architecture."),$t.forEach(t),Np=h(at),Wt=a(at,"P",{});var qo=i(Wt);Op=s(qo,"Configuration objects inherit from "),Ma=a(qo,"A",{href:!0});var wd=i(Ma);Sp=s(wd,"PretrainedConfig"),wd.forEach(t),Ap=s(qo,` and can be used to control the model outputs. Read the
documentation from `),$a=a(qo,"A",{href:!0});var Md=i($a);Ip=s(Md,"PretrainedConfig"),Md.forEach(t),Lp=s(qo," for more information."),qo.forEach(t),Dp=h(at),v(jo.$$.fragment,at),Wp=h(at),qi=a(at,"P",{});var $d=i(qi);Rp=s($d,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),$d.forEach(t),at.forEach(t),Ad=h(o),Rt=a(o,"H2",{class:!0});var ba=i(Rt);Co=a(ba,"A",{id:!0,class:!0,href:!0});var Fd=i(Co);ji=a(Fd,"SPAN",{});var Bd=i(ji);v(ls.$$.fragment,Bd),Bd.forEach(t),Fd.forEach(t),Up=h(ba),Ci=a(ba,"SPAN",{});var Ed=i(Ci);Hp=s(Ed,"MobileBertTokenizer"),Ed.forEach(t),ba.forEach(t),Id=h(o),st=a(o,"DIV",{class:!0});var Ft=i(st);v(ds.$$.fragment,Ft),Qp=h(Ft),Ni=a(Ft,"P",{});var xd=i(Ni);Kp=s(xd,"Construct a MobileBERT tokenizer."),xd.forEach(t),Vp=h(Ft),No=a(Ft,"P",{});var Zn=i(No);Fa=a(Zn,"A",{href:!0});var zd=i(Fa);Gp=s(zd,"MobileBertTokenizer"),zd.forEach(t),Yp=s(Zn," is identical to "),Ba=a(Zn,"A",{href:!0});var Pd=i(Ba);Jp=s(Pd,"BertTokenizer"),Pd.forEach(t),Zp=s(Zn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zn.forEach(t),Xp=h(Ft),cs=a(Ft,"P",{});var Ta=i(cs);em=s(Ta,"Refer to superclass "),Ea=a(Ta,"A",{href:!0});var qd=i(Ea);tm=s(qd,"BertTokenizer"),qd.forEach(t),om=s(Ta," for usage examples and documentation concerning parameters."),Ta.forEach(t),Ft.forEach(t),Ld=h(o),Ut=a(o,"H2",{class:!0});var ka=i(Ut);Oo=a(ka,"A",{id:!0,class:!0,href:!0});var jd=i(Oo);Oi=a(jd,"SPAN",{});var Cd=i(Oi);v(ps.$$.fragment,Cd),Cd.forEach(t),jd.forEach(t),nm=h(ka),Si=a(ka,"SPAN",{});var Nd=i(Si);sm=s(Nd,"MobileBertTokenizerFast"),Nd.forEach(t),ka.forEach(t),Dd=h(o),rt=a(o,"DIV",{class:!0});var Bt=i(rt);v(ms.$$.fragment,Bt),rm=h(Bt),hs=a(Bt,"P",{});var ya=i(hs);am=s(ya,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ai=a(ya,"EM",{});var Od=i(Ai);im=s(Od,"tokenizers"),Od.forEach(t),lm=s(ya," library)."),ya.forEach(t),dm=h(Bt),So=a(Bt,"P",{});var Sd=i(So);xa=a(Sd,"A",{href:!0});var PT=i(xa);cm=s(PT,"MobileBertTokenizerFast"),PT.forEach(t),pm=s(Sd," is identical to "),za=a(Sd,"A",{href:!0});var qT=i(za);mm=s(qT,"BertTokenizerFast"),qT.forEach(t),hm=s(Sd,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Sd.forEach(t),fm=h(Bt),fs=a(Bt,"P",{});var Mc=i(fs);um=s(Mc,"Refer to superclass "),Pa=a(Mc,"A",{href:!0});var jT=i(Pa);gm=s(jT,"BertTokenizerFast"),jT.forEach(t),_m=s(Mc," for usage examples and documentation concerning parameters."),Mc.forEach(t),Bt.forEach(t),Wd=h(o),Ht=a(o,"H2",{class:!0});var $c=i(Ht);Ao=a($c,"A",{id:!0,class:!0,href:!0});var CT=i(Ao);Ii=a(CT,"SPAN",{});var NT=i(Ii);v(us.$$.fragment,NT),NT.forEach(t),CT.forEach(t),bm=h($c),Li=a($c,"SPAN",{});var OT=i(Li);Tm=s(OT,"MobileBert specific outputs"),OT.forEach(t),$c.forEach(t),Rd=h(o),Qt=a(o,"DIV",{class:!0});var Fc=i(Qt);v(gs.$$.fragment,Fc),km=h(Fc),_s=a(Fc,"P",{});var Bc=i(_s);ym=s(Bc,"Output type of "),qa=a(Bc,"A",{href:!0});var ST=i(qa);vm=s(ST,"MobileBertForPreTraining"),ST.forEach(t),wm=s(Bc,"."),Bc.forEach(t),Fc.forEach(t),Ud=h(o),Kt=a(o,"DIV",{class:!0});var Ec=i(Kt);v(bs.$$.fragment,Ec),Mm=h(Ec),Ts=a(Ec,"P",{});var xc=i(Ts);$m=s(xc,"Output type of "),ja=a(xc,"A",{href:!0});var AT=i(ja);Fm=s(AT,"TFMobileBertForPreTraining"),AT.forEach(t),Bm=s(xc,"."),xc.forEach(t),Ec.forEach(t),Hd=h(o),Vt=a(o,"H2",{class:!0});var zc=i(Vt);Io=a(zc,"A",{id:!0,class:!0,href:!0});var IT=i(Io);Di=a(IT,"SPAN",{});var LT=i(Di);v(ks.$$.fragment,LT),LT.forEach(t),IT.forEach(t),Em=h(zc),Wi=a(zc,"SPAN",{});var DT=i(Wi);xm=s(DT,"MobileBertModel"),DT.forEach(t),zc.forEach(t),Qd=h(o),Ce=a(o,"DIV",{class:!0});var ut=i(Ce);v(ys.$$.fragment,ut),zm=h(ut),Ri=a(ut,"P",{});var WT=i(Ri);Pm=s(WT,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),WT.forEach(t),qm=h(ut),vs=a(ut,"P",{});var Pc=i(vs);jm=s(Pc,"This model inherits from "),Ca=a(Pc,"A",{href:!0});var RT=i(Ca);Cm=s(RT,"PreTrainedModel"),RT.forEach(t),Nm=s(Pc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pc.forEach(t),Om=h(ut),ws=a(ut,"P",{});var qc=i(ws);Sm=s(qc,"This model is also a PyTorch "),Ms=a(qc,"A",{href:!0,rel:!0});var UT=i(Ms);Am=s(UT,"torch.nn.Module"),UT.forEach(t),Im=s(qc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qc.forEach(t),Lm=h(ut),Ui=a(ut,"P",{});var HT=i(Ui);$s=a(HT,"A",{href:!0,rel:!0});var QT=i($s);Dm=s(QT,"https://arxiv.org/pdf/2004.02984.pdf"),QT.forEach(t),HT.forEach(t),Wm=h(ut),it=a(ut,"DIV",{class:!0});var Xn=i(it);v(Fs.$$.fragment,Xn),Rm=h(Xn),Gt=a(Xn,"P",{});var mi=i(Gt);Um=s(mi,"The "),Na=a(mi,"A",{href:!0});var KT=i(Na);Hm=s(KT,"MobileBertModel"),KT.forEach(t),Qm=s(mi," forward method, overrides the "),Hi=a(mi,"CODE",{});var VT=i(Hi);Km=s(VT,"__call__"),VT.forEach(t),Vm=s(mi," special method."),mi.forEach(t),Gm=h(Xn),v(Lo.$$.fragment,Xn),Ym=h(Xn),v(Do.$$.fragment,Xn),Xn.forEach(t),ut.forEach(t),Kd=h(o),Yt=a(o,"H2",{class:!0});var jc=i(Yt);Wo=a(jc,"A",{id:!0,class:!0,href:!0});var GT=i(Wo);Qi=a(GT,"SPAN",{});var YT=i(Qi);v(Bs.$$.fragment,YT),YT.forEach(t),GT.forEach(t),Jm=h(jc),Ki=a(jc,"SPAN",{});var JT=i(Ki);Zm=s(JT,"MobileBertForPreTraining"),JT.forEach(t),jc.forEach(t),Vd=h(o),Re=a(o,"DIV",{class:!0});var Et=i(Re);v(Es.$$.fragment,Et),Xm=h(Et),Jt=a(Et,"P",{});var hi=i(Jt);eh=s(hi,"MobileBert Model with two heads on top as done during the pretraining: a "),Vi=a(hi,"CODE",{});var ZT=i(Vi);th=s(ZT,"masked language modeling"),ZT.forEach(t),oh=s(hi,` head and a
`),Gi=a(hi,"CODE",{});var XT=i(Gi);nh=s(XT,"next sentence prediction (classification)"),XT.forEach(t),sh=s(hi," head."),hi.forEach(t),rh=h(Et),xs=a(Et,"P",{});var Cc=i(xs);ah=s(Cc,"This model inherits from "),Oa=a(Cc,"A",{href:!0});var ek=i(Oa);ih=s(ek,"PreTrainedModel"),ek.forEach(t),lh=s(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),dh=h(Et),zs=a(Et,"P",{});var Nc=i(zs);ch=s(Nc,"This model is also a PyTorch "),Ps=a(Nc,"A",{href:!0,rel:!0});var tk=i(Ps);ph=s(tk,"torch.nn.Module"),tk.forEach(t),mh=s(Nc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Nc.forEach(t),hh=h(Et),lt=a(Et,"DIV",{class:!0});var es=i(lt);v(qs.$$.fragment,es),fh=h(es),Zt=a(es,"P",{});var fi=i(Zt);uh=s(fi,"The "),Sa=a(fi,"A",{href:!0});var ok=i(Sa);gh=s(ok,"MobileBertForPreTraining"),ok.forEach(t),_h=s(fi," forward method, overrides the "),Yi=a(fi,"CODE",{});var nk=i(Yi);bh=s(nk,"__call__"),nk.forEach(t),Th=s(fi," special method."),fi.forEach(t),kh=h(es),v(Ro.$$.fragment,es),yh=h(es),v(Uo.$$.fragment,es),es.forEach(t),Et.forEach(t),Gd=h(o),Xt=a(o,"H2",{class:!0});var Oc=i(Xt);Ho=a(Oc,"A",{id:!0,class:!0,href:!0});var sk=i(Ho);Ji=a(sk,"SPAN",{});var rk=i(Ji);v(js.$$.fragment,rk),rk.forEach(t),sk.forEach(t),vh=h(Oc),Zi=a(Oc,"SPAN",{});var ak=i(Zi);wh=s(ak,"MobileBertForMaskedLM"),ak.forEach(t),Oc.forEach(t),Yd=h(o),Ue=a(o,"DIV",{class:!0});var xt=i(Ue);v(Cs.$$.fragment,xt),Mh=h(xt),Ns=a(xt,"P",{});var Sc=i(Ns);$h=s(Sc,"MobileBert Model with a "),Xi=a(Sc,"CODE",{});var ik=i(Xi);Fh=s(ik,"language modeling"),ik.forEach(t),Bh=s(Sc," head on top."),Sc.forEach(t),Eh=h(xt),Os=a(xt,"P",{});var Ac=i(Os);xh=s(Ac,"This model inherits from "),Aa=a(Ac,"A",{href:!0});var lk=i(Aa);zh=s(lk,"PreTrainedModel"),lk.forEach(t),Ph=s(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),qh=h(xt),Ss=a(xt,"P",{});var Ic=i(Ss);jh=s(Ic,"This model is also a PyTorch "),As=a(Ic,"A",{href:!0,rel:!0});var dk=i(As);Ch=s(dk,"torch.nn.Module"),dk.forEach(t),Nh=s(Ic,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ic.forEach(t),Oh=h(xt),Ye=a(xt,"DIV",{class:!0});var zt=i(Ye);v(Is.$$.fragment,zt),Sh=h(zt),eo=a(zt,"P",{});var ui=i(eo);Ah=s(ui,"The "),Ia=a(ui,"A",{href:!0});var ck=i(Ia);Ih=s(ck,"MobileBertForMaskedLM"),ck.forEach(t),Lh=s(ui," forward method, overrides the "),el=a(ui,"CODE",{});var pk=i(el);Dh=s(pk,"__call__"),pk.forEach(t),Wh=s(ui," special method."),ui.forEach(t),Rh=h(zt),v(Qo.$$.fragment,zt),Uh=h(zt),v(Ko.$$.fragment,zt),Hh=h(zt),v(Vo.$$.fragment,zt),zt.forEach(t),xt.forEach(t),Jd=h(o),to=a(o,"H2",{class:!0});var Lc=i(to);Go=a(Lc,"A",{id:!0,class:!0,href:!0});var mk=i(Go);tl=a(mk,"SPAN",{});var hk=i(tl);v(Ls.$$.fragment,hk),hk.forEach(t),mk.forEach(t),Qh=h(Lc),ol=a(Lc,"SPAN",{});var fk=i(ol);Kh=s(fk,"MobileBertForNextSentencePrediction"),fk.forEach(t),Lc.forEach(t),Zd=h(o),He=a(o,"DIV",{class:!0});var Pt=i(He);v(Ds.$$.fragment,Pt),Vh=h(Pt),Ws=a(Pt,"P",{});var Dc=i(Ws);Gh=s(Dc,"MobileBert Model with a "),nl=a(Dc,"CODE",{});var uk=i(nl);Yh=s(uk,"next sentence prediction (classification)"),uk.forEach(t),Jh=s(Dc," head on top."),Dc.forEach(t),Zh=h(Pt),Rs=a(Pt,"P",{});var Wc=i(Rs);Xh=s(Wc,"This model inherits from "),La=a(Wc,"A",{href:!0});var gk=i(La);ef=s(gk,"PreTrainedModel"),gk.forEach(t),tf=s(Wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc.forEach(t),of=h(Pt),Us=a(Pt,"P",{});var Rc=i(Us);nf=s(Rc,"This model is also a PyTorch "),Hs=a(Rc,"A",{href:!0,rel:!0});var _k=i(Hs);sf=s(_k,"torch.nn.Module"),_k.forEach(t),rf=s(Rc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc.forEach(t),af=h(Pt),dt=a(Pt,"DIV",{class:!0});var ts=i(dt);v(Qs.$$.fragment,ts),lf=h(ts),oo=a(ts,"P",{});var gi=i(oo);df=s(gi,"The "),Da=a(gi,"A",{href:!0});var bk=i(Da);cf=s(bk,"MobileBertForNextSentencePrediction"),bk.forEach(t),pf=s(gi," forward method, overrides the "),sl=a(gi,"CODE",{});var Tk=i(sl);mf=s(Tk,"__call__"),Tk.forEach(t),hf=s(gi," special method."),gi.forEach(t),ff=h(ts),v(Yo.$$.fragment,ts),uf=h(ts),v(Jo.$$.fragment,ts),ts.forEach(t),Pt.forEach(t),Xd=h(o),no=a(o,"H2",{class:!0});var Uc=i(no);Zo=a(Uc,"A",{id:!0,class:!0,href:!0});var kk=i(Zo);rl=a(kk,"SPAN",{});var yk=i(rl);v(Ks.$$.fragment,yk),yk.forEach(t),kk.forEach(t),gf=h(Uc),al=a(Uc,"SPAN",{});var vk=i(al);_f=s(vk,"MobileBertForSequenceClassification"),vk.forEach(t),Uc.forEach(t),ec=h(o),Qe=a(o,"DIV",{class:!0});var qt=i(Qe);v(Vs.$$.fragment,qt),bf=h(qt),il=a(qt,"P",{});var wk=i(il);Tf=s(wk,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wk.forEach(t),kf=h(qt),Gs=a(qt,"P",{});var Hc=i(Gs);yf=s(Hc,"This model inherits from "),Wa=a(Hc,"A",{href:!0});var Mk=i(Wa);vf=s(Mk,"PreTrainedModel"),Mk.forEach(t),wf=s(Hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc.forEach(t),Mf=h(qt),Ys=a(qt,"P",{});var Qc=i(Ys);$f=s(Qc,"This model is also a PyTorch "),Js=a(Qc,"A",{href:!0,rel:!0});var $k=i(Js);Ff=s($k,"torch.nn.Module"),$k.forEach(t),Bf=s(Qc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc.forEach(t),Ef=h(qt),je=a(qt,"DIV",{class:!0});var nt=i(je);v(Zs.$$.fragment,nt),xf=h(nt),so=a(nt,"P",{});var _i=i(so);zf=s(_i,"The "),Ra=a(_i,"A",{href:!0});var Fk=i(Ra);Pf=s(Fk,"MobileBertForSequenceClassification"),Fk.forEach(t),qf=s(_i," forward method, overrides the "),ll=a(_i,"CODE",{});var Bk=i(ll);jf=s(Bk,"__call__"),Bk.forEach(t),Cf=s(_i," special method."),_i.forEach(t),Nf=h(nt),v(Xo.$$.fragment,nt),Of=h(nt),v(en.$$.fragment,nt),Sf=h(nt),v(tn.$$.fragment,nt),Af=h(nt),v(on.$$.fragment,nt),If=h(nt),v(nn.$$.fragment,nt),nt.forEach(t),qt.forEach(t),tc=h(o),ro=a(o,"H2",{class:!0});var Kc=i(ro);sn=a(Kc,"A",{id:!0,class:!0,href:!0});var Ek=i(sn);dl=a(Ek,"SPAN",{});var xk=i(dl);v(Xs.$$.fragment,xk),xk.forEach(t),Ek.forEach(t),Lf=h(Kc),cl=a(Kc,"SPAN",{});var zk=i(cl);Df=s(zk,"MobileBertForMultipleChoice"),zk.forEach(t),Kc.forEach(t),oc=h(o),Ke=a(o,"DIV",{class:!0});var jt=i(Ke);v(er.$$.fragment,jt),Wf=h(jt),pl=a(jt,"P",{});var Pk=i(pl);Rf=s(Pk,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Pk.forEach(t),Uf=h(jt),tr=a(jt,"P",{});var Vc=i(tr);Hf=s(Vc,"This model inherits from "),Ua=a(Vc,"A",{href:!0});var qk=i(Ua);Qf=s(qk,"PreTrainedModel"),qk.forEach(t),Kf=s(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(t),Vf=h(jt),or=a(jt,"P",{});var Gc=i(or);Gf=s(Gc,"This model is also a PyTorch "),nr=a(Gc,"A",{href:!0,rel:!0});var jk=i(nr);Yf=s(jk,"torch.nn.Module"),jk.forEach(t),Jf=s(Gc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gc.forEach(t),Zf=h(jt),ct=a(jt,"DIV",{class:!0});var os=i(ct);v(sr.$$.fragment,os),Xf=h(os),ao=a(os,"P",{});var bi=i(ao);eu=s(bi,"The "),Ha=a(bi,"A",{href:!0});var Ck=i(Ha);tu=s(Ck,"MobileBertForMultipleChoice"),Ck.forEach(t),ou=s(bi," forward method, overrides the "),ml=a(bi,"CODE",{});var Nk=i(ml);nu=s(Nk,"__call__"),Nk.forEach(t),su=s(bi," special method."),bi.forEach(t),ru=h(os),v(rn.$$.fragment,os),au=h(os),v(an.$$.fragment,os),os.forEach(t),jt.forEach(t),nc=h(o),io=a(o,"H2",{class:!0});var Yc=i(io);ln=a(Yc,"A",{id:!0,class:!0,href:!0});var Ok=i(ln);hl=a(Ok,"SPAN",{});var Sk=i(hl);v(rr.$$.fragment,Sk),Sk.forEach(t),Ok.forEach(t),iu=h(Yc),fl=a(Yc,"SPAN",{});var Ak=i(fl);lu=s(Ak,"MobileBertForTokenClassification"),Ak.forEach(t),Yc.forEach(t),sc=h(o),Ve=a(o,"DIV",{class:!0});var Ct=i(Ve);v(ar.$$.fragment,Ct),du=h(Ct),ul=a(Ct,"P",{});var Ik=i(ul);cu=s(Ik,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ik.forEach(t),pu=h(Ct),ir=a(Ct,"P",{});var Jc=i(ir);mu=s(Jc,"This model inherits from "),Qa=a(Jc,"A",{href:!0});var Lk=i(Qa);hu=s(Lk,"PreTrainedModel"),Lk.forEach(t),fu=s(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),uu=h(Ct),lr=a(Ct,"P",{});var Zc=i(lr);gu=s(Zc,"This model is also a PyTorch "),dr=a(Zc,"A",{href:!0,rel:!0});var Dk=i(dr);_u=s(Dk,"torch.nn.Module"),Dk.forEach(t),bu=s(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Tu=h(Ct),Je=a(Ct,"DIV",{class:!0});var Nt=i(Je);v(cr.$$.fragment,Nt),ku=h(Nt),lo=a(Nt,"P",{});var Ti=i(lo);yu=s(Ti,"The "),Ka=a(Ti,"A",{href:!0});var Wk=i(Ka);vu=s(Wk,"MobileBertForTokenClassification"),Wk.forEach(t),wu=s(Ti," forward method, overrides the "),gl=a(Ti,"CODE",{});var Rk=i(gl);Mu=s(Rk,"__call__"),Rk.forEach(t),$u=s(Ti," special method."),Ti.forEach(t),Fu=h(Nt),v(dn.$$.fragment,Nt),Bu=h(Nt),v(cn.$$.fragment,Nt),Eu=h(Nt),v(pn.$$.fragment,Nt),Nt.forEach(t),Ct.forEach(t),rc=h(o),co=a(o,"H2",{class:!0});var Xc=i(co);mn=a(Xc,"A",{id:!0,class:!0,href:!0});var Uk=i(mn);_l=a(Uk,"SPAN",{});var Hk=i(_l);v(pr.$$.fragment,Hk),Hk.forEach(t),Uk.forEach(t),xu=h(Xc),bl=a(Xc,"SPAN",{});var Qk=i(bl);zu=s(Qk,"MobileBertForQuestionAnswering"),Qk.forEach(t),Xc.forEach(t),ac=h(o),Ge=a(o,"DIV",{class:!0});var Ot=i(Ge);v(mr.$$.fragment,Ot),Pu=h(Ot),po=a(Ot,"P",{});var ki=i(po);qu=s(ki,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Tl=a(ki,"CODE",{});var Kk=i(Tl);ju=s(Kk,"span start logits"),Kk.forEach(t),Cu=s(ki," and "),kl=a(ki,"CODE",{});var Vk=i(kl);Nu=s(Vk,"span end logits"),Vk.forEach(t),Ou=s(ki,")."),ki.forEach(t),Su=h(Ot),hr=a(Ot,"P",{});var ep=i(hr);Au=s(ep,"This model inherits from "),Va=a(ep,"A",{href:!0});var Gk=i(Va);Iu=s(Gk,"PreTrainedModel"),Gk.forEach(t),Lu=s(ep,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ep.forEach(t),Du=h(Ot),fr=a(Ot,"P",{});var tp=i(fr);Wu=s(tp,"This model is also a PyTorch "),ur=a(tp,"A",{href:!0,rel:!0});var Yk=i(ur);Ru=s(Yk,"torch.nn.Module"),Yk.forEach(t),Uu=s(tp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp.forEach(t),Hu=h(Ot),Ze=a(Ot,"DIV",{class:!0});var St=i(Ze);v(gr.$$.fragment,St),Qu=h(St),mo=a(St,"P",{});var yi=i(mo);Ku=s(yi,"The "),Ga=a(yi,"A",{href:!0});var Jk=i(Ga);Vu=s(Jk,"MobileBertForQuestionAnswering"),Jk.forEach(t),Gu=s(yi," forward method, overrides the "),yl=a(yi,"CODE",{});var Zk=i(yl);Yu=s(Zk,"__call__"),Zk.forEach(t),Ju=s(yi," special method."),yi.forEach(t),Zu=h(St),v(hn.$$.fragment,St),Xu=h(St),v(fn.$$.fragment,St),eg=h(St),v(un.$$.fragment,St),St.forEach(t),Ot.forEach(t),ic=h(o),ho=a(o,"H2",{class:!0});var op=i(ho);gn=a(op,"A",{id:!0,class:!0,href:!0});var Xk=i(gn);vl=a(Xk,"SPAN",{});var ey=i(vl);v(_r.$$.fragment,ey),ey.forEach(t),Xk.forEach(t),tg=h(op),wl=a(op,"SPAN",{});var ty=i(wl);og=s(ty,"TFMobileBertModel"),ty.forEach(t),op.forEach(t),lc=h(o),Ne=a(o,"DIV",{class:!0});var gt=i(Ne);v(br.$$.fragment,gt),ng=h(gt),Ml=a(gt,"P",{});var oy=i(Ml);sg=s(oy,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),oy.forEach(t),rg=h(gt),Tr=a(gt,"P",{});var np=i(Tr);ag=s(np,"This model inherits from "),Ya=a(np,"A",{href:!0});var ny=i(Ya);ig=s(ny,"TFPreTrainedModel"),ny.forEach(t),lg=s(np,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np.forEach(t),dg=h(gt),kr=a(gt,"P",{});var sp=i(kr);cg=s(sp,"This model is also a "),yr=a(sp,"A",{href:!0,rel:!0});var sy=i(yr);pg=s(sy,"tf.keras.Model"),sy.forEach(t),mg=s(sp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sp.forEach(t),hg=h(gt),v(_n.$$.fragment,gt),fg=h(gt),pt=a(gt,"DIV",{class:!0});var ns=i(pt);v(vr.$$.fragment,ns),ug=h(ns),fo=a(ns,"P",{});var vi=i(fo);gg=s(vi,"The "),Ja=a(vi,"A",{href:!0});var ry=i(Ja);_g=s(ry,"TFMobileBertModel"),ry.forEach(t),bg=s(vi," forward method, overrides the "),$l=a(vi,"CODE",{});var ay=i($l);Tg=s(ay,"__call__"),ay.forEach(t),kg=s(vi," special method."),vi.forEach(t),yg=h(ns),v(bn.$$.fragment,ns),vg=h(ns),v(Tn.$$.fragment,ns),ns.forEach(t),gt.forEach(t),dc=h(o),uo=a(o,"H2",{class:!0});var rp=i(uo);kn=a(rp,"A",{id:!0,class:!0,href:!0});var iy=i(kn);Fl=a(iy,"SPAN",{});var ly=i(Fl);v(wr.$$.fragment,ly),ly.forEach(t),iy.forEach(t),wg=h(rp),Bl=a(rp,"SPAN",{});var dy=i(Bl);Mg=s(dy,"TFMobileBertForPreTraining"),dy.forEach(t),rp.forEach(t),cc=h(o),Oe=a(o,"DIV",{class:!0});var _t=i(Oe);v(Mr.$$.fragment,_t),$g=h(_t),go=a(_t,"P",{});var wi=i(go);Fg=s(wi,"MobileBert Model with two heads on top as done during the pretraining: a "),El=a(wi,"CODE",{});var cy=i(El);Bg=s(cy,"masked language modeling"),cy.forEach(t),Eg=s(wi,` head and a
`),xl=a(wi,"CODE",{});var py=i(xl);xg=s(py,"next sentence prediction (classification)"),py.forEach(t),zg=s(wi," head."),wi.forEach(t),Pg=h(_t),$r=a(_t,"P",{});var ap=i($r);qg=s(ap,"This model inherits from "),Za=a(ap,"A",{href:!0});var my=i(Za);jg=s(my,"TFPreTrainedModel"),my.forEach(t),Cg=s(ap,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ap.forEach(t),Ng=h(_t),Fr=a(_t,"P",{});var ip=i(Fr);Og=s(ip,"This model is also a "),Br=a(ip,"A",{href:!0,rel:!0});var hy=i(Br);Sg=s(hy,"tf.keras.Model"),hy.forEach(t),Ag=s(ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ip.forEach(t),Ig=h(_t),v(yn.$$.fragment,_t),Lg=h(_t),mt=a(_t,"DIV",{class:!0});var ss=i(mt);v(Er.$$.fragment,ss),Dg=h(ss),_o=a(ss,"P",{});var Mi=i(_o);Wg=s(Mi,"The "),Xa=a(Mi,"A",{href:!0});var fy=i(Xa);Rg=s(fy,"TFMobileBertForPreTraining"),fy.forEach(t),Ug=s(Mi," forward method, overrides the "),zl=a(Mi,"CODE",{});var uy=i(zl);Hg=s(uy,"__call__"),uy.forEach(t),Qg=s(Mi," special method."),Mi.forEach(t),Kg=h(ss),v(vn.$$.fragment,ss),Vg=h(ss),v(wn.$$.fragment,ss),ss.forEach(t),_t.forEach(t),pc=h(o),bo=a(o,"H2",{class:!0});var lp=i(bo);Mn=a(lp,"A",{id:!0,class:!0,href:!0});var gy=i(Mn);Pl=a(gy,"SPAN",{});var _y=i(Pl);v(xr.$$.fragment,_y),_y.forEach(t),gy.forEach(t),Gg=h(lp),ql=a(lp,"SPAN",{});var by=i(ql);Yg=s(by,"TFMobileBertForMaskedLM"),by.forEach(t),lp.forEach(t),mc=h(o),Se=a(o,"DIV",{class:!0});var bt=i(Se);v(zr.$$.fragment,bt),Jg=h(bt),Pr=a(bt,"P",{});var dp=i(Pr);Zg=s(dp,"MobileBert Model with a "),jl=a(dp,"CODE",{});var Ty=i(jl);Xg=s(Ty,"language modeling"),Ty.forEach(t),e_=s(dp," head on top."),dp.forEach(t),t_=h(bt),qr=a(bt,"P",{});var cp=i(qr);o_=s(cp,"This model inherits from "),ei=a(cp,"A",{href:!0});var ky=i(ei);n_=s(ky,"TFPreTrainedModel"),ky.forEach(t),s_=s(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),r_=h(bt),jr=a(bt,"P",{});var pp=i(jr);a_=s(pp,"This model is also a "),Cr=a(pp,"A",{href:!0,rel:!0});var yy=i(Cr);i_=s(yy,"tf.keras.Model"),yy.forEach(t),l_=s(pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pp.forEach(t),d_=h(bt),v($n.$$.fragment,bt),c_=h(bt),Xe=a(bt,"DIV",{class:!0});var At=i(Xe);v(Nr.$$.fragment,At),p_=h(At),To=a(At,"P",{});var $i=i(To);m_=s($i,"The "),ti=a($i,"A",{href:!0});var vy=i(ti);h_=s(vy,"TFMobileBertForMaskedLM"),vy.forEach(t),f_=s($i," forward method, overrides the "),Cl=a($i,"CODE",{});var wy=i(Cl);u_=s(wy,"__call__"),wy.forEach(t),g_=s($i," special method."),$i.forEach(t),__=h(At),v(Fn.$$.fragment,At),b_=h(At),v(Bn.$$.fragment,At),T_=h(At),v(En.$$.fragment,At),At.forEach(t),bt.forEach(t),hc=h(o),ko=a(o,"H2",{class:!0});var mp=i(ko);xn=a(mp,"A",{id:!0,class:!0,href:!0});var My=i(xn);Nl=a(My,"SPAN",{});var $y=i(Nl);v(Or.$$.fragment,$y),$y.forEach(t),My.forEach(t),k_=h(mp),Ol=a(mp,"SPAN",{});var Fy=i(Ol);y_=s(Fy,"TFMobileBertForNextSentencePrediction"),Fy.forEach(t),mp.forEach(t),fc=h(o),Ae=a(o,"DIV",{class:!0});var Tt=i(Ae);v(Sr.$$.fragment,Tt),v_=h(Tt),Ar=a(Tt,"P",{});var hp=i(Ar);w_=s(hp,"MobileBert Model with a "),Sl=a(hp,"CODE",{});var By=i(Sl);M_=s(By,"next sentence prediction (classification)"),By.forEach(t),$_=s(hp," head on top."),hp.forEach(t),F_=h(Tt),Ir=a(Tt,"P",{});var fp=i(Ir);B_=s(fp,"This model inherits from "),oi=a(fp,"A",{href:!0});var Ey=i(oi);E_=s(Ey,"TFPreTrainedModel"),Ey.forEach(t),x_=s(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),z_=h(Tt),Lr=a(Tt,"P",{});var up=i(Lr);P_=s(up,"This model is also a "),Dr=a(up,"A",{href:!0,rel:!0});var xy=i(Dr);q_=s(xy,"tf.keras.Model"),xy.forEach(t),j_=s(up,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),up.forEach(t),C_=h(Tt),v(zn.$$.fragment,Tt),N_=h(Tt),ht=a(Tt,"DIV",{class:!0});var rs=i(ht);v(Wr.$$.fragment,rs),O_=h(rs),yo=a(rs,"P",{});var Fi=i(yo);S_=s(Fi,"The "),ni=a(Fi,"A",{href:!0});var zy=i(ni);A_=s(zy,"TFMobileBertForNextSentencePrediction"),zy.forEach(t),I_=s(Fi," forward method, overrides the "),Al=a(Fi,"CODE",{});var Py=i(Al);L_=s(Py,"__call__"),Py.forEach(t),D_=s(Fi," special method."),Fi.forEach(t),W_=h(rs),v(Pn.$$.fragment,rs),R_=h(rs),v(qn.$$.fragment,rs),rs.forEach(t),Tt.forEach(t),uc=h(o),vo=a(o,"H2",{class:!0});var gp=i(vo);jn=a(gp,"A",{id:!0,class:!0,href:!0});var qy=i(jn);Il=a(qy,"SPAN",{});var jy=i(Il);v(Rr.$$.fragment,jy),jy.forEach(t),qy.forEach(t),U_=h(gp),Ll=a(gp,"SPAN",{});var Cy=i(Ll);H_=s(Cy,"TFMobileBertForSequenceClassification"),Cy.forEach(t),gp.forEach(t),gc=h(o),Ie=a(o,"DIV",{class:!0});var kt=i(Ie);v(Ur.$$.fragment,kt),Q_=h(kt),Dl=a(kt,"P",{});var Ny=i(Dl);K_=s(Ny,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ny.forEach(t),V_=h(kt),Hr=a(kt,"P",{});var _p=i(Hr);G_=s(_p,"This model inherits from "),si=a(_p,"A",{href:!0});var Oy=i(si);Y_=s(Oy,"TFPreTrainedModel"),Oy.forEach(t),J_=s(_p,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_p.forEach(t),Z_=h(kt),Qr=a(kt,"P",{});var bp=i(Qr);X_=s(bp,"This model is also a "),Kr=a(bp,"A",{href:!0,rel:!0});var Sy=i(Kr);eb=s(Sy,"tf.keras.Model"),Sy.forEach(t),tb=s(bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bp.forEach(t),ob=h(kt),v(Cn.$$.fragment,kt),nb=h(kt),et=a(kt,"DIV",{class:!0});var It=i(et);v(Vr.$$.fragment,It),sb=h(It),wo=a(It,"P",{});var Bi=i(wo);rb=s(Bi,"The "),ri=a(Bi,"A",{href:!0});var Ay=i(ri);ab=s(Ay,"TFMobileBertForSequenceClassification"),Ay.forEach(t),ib=s(Bi," forward method, overrides the "),Wl=a(Bi,"CODE",{});var Iy=i(Wl);lb=s(Iy,"__call__"),Iy.forEach(t),db=s(Bi," special method."),Bi.forEach(t),cb=h(It),v(Nn.$$.fragment,It),pb=h(It),v(On.$$.fragment,It),mb=h(It),v(Sn.$$.fragment,It),It.forEach(t),kt.forEach(t),_c=h(o),Mo=a(o,"H2",{class:!0});var Tp=i(Mo);An=a(Tp,"A",{id:!0,class:!0,href:!0});var Ly=i(An);Rl=a(Ly,"SPAN",{});var Dy=i(Rl);v(Gr.$$.fragment,Dy),Dy.forEach(t),Ly.forEach(t),hb=h(Tp),Ul=a(Tp,"SPAN",{});var Wy=i(Ul);fb=s(Wy,"TFMobileBertForMultipleChoice"),Wy.forEach(t),Tp.forEach(t),bc=h(o),Le=a(o,"DIV",{class:!0});var yt=i(Le);v(Yr.$$.fragment,yt),ub=h(yt),Hl=a(yt,"P",{});var Ry=i(Hl);gb=s(Ry,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ry.forEach(t),_b=h(yt),Jr=a(yt,"P",{});var kp=i(Jr);bb=s(kp,"This model inherits from "),ai=a(kp,"A",{href:!0});var Uy=i(ai);Tb=s(Uy,"TFPreTrainedModel"),Uy.forEach(t),kb=s(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),yb=h(yt),Zr=a(yt,"P",{});var yp=i(Zr);vb=s(yp,"This model is also a "),Xr=a(yp,"A",{href:!0,rel:!0});var Hy=i(Xr);wb=s(Hy,"tf.keras.Model"),Hy.forEach(t),Mb=s(yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yp.forEach(t),$b=h(yt),v(In.$$.fragment,yt),Fb=h(yt),ft=a(yt,"DIV",{class:!0});var as=i(ft);v(ea.$$.fragment,as),Bb=h(as),$o=a(as,"P",{});var Ei=i($o);Eb=s(Ei,"The "),ii=a(Ei,"A",{href:!0});var Qy=i(ii);xb=s(Qy,"TFMobileBertForMultipleChoice"),Qy.forEach(t),zb=s(Ei," forward method, overrides the "),Ql=a(Ei,"CODE",{});var Ky=i(Ql);Pb=s(Ky,"__call__"),Ky.forEach(t),qb=s(Ei," special method."),Ei.forEach(t),jb=h(as),v(Ln.$$.fragment,as),Cb=h(as),v(Dn.$$.fragment,as),as.forEach(t),yt.forEach(t),Tc=h(o),Fo=a(o,"H2",{class:!0});var vp=i(Fo);Wn=a(vp,"A",{id:!0,class:!0,href:!0});var Vy=i(Wn);Kl=a(Vy,"SPAN",{});var Gy=i(Kl);v(ta.$$.fragment,Gy),Gy.forEach(t),Vy.forEach(t),Nb=h(vp),Vl=a(vp,"SPAN",{});var Yy=i(Vl);Ob=s(Yy,"TFMobileBertForTokenClassification"),Yy.forEach(t),vp.forEach(t),kc=h(o),De=a(o,"DIV",{class:!0});var vt=i(De);v(oa.$$.fragment,vt),Sb=h(vt),Gl=a(vt,"P",{});var Jy=i(Gl);Ab=s(Jy,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jy.forEach(t),Ib=h(vt),na=a(vt,"P",{});var wp=i(na);Lb=s(wp,"This model inherits from "),li=a(wp,"A",{href:!0});var Zy=i(li);Db=s(Zy,"TFPreTrainedModel"),Zy.forEach(t),Wb=s(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),Rb=h(vt),sa=a(vt,"P",{});var Mp=i(sa);Ub=s(Mp,"This model is also a "),ra=a(Mp,"A",{href:!0,rel:!0});var Xy=i(ra);Hb=s(Xy,"tf.keras.Model"),Xy.forEach(t),Qb=s(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),Kb=h(vt),v(Rn.$$.fragment,vt),Vb=h(vt),tt=a(vt,"DIV",{class:!0});var Lt=i(tt);v(aa.$$.fragment,Lt),Gb=h(Lt),Bo=a(Lt,"P",{});var xi=i(Bo);Yb=s(xi,"The "),di=a(xi,"A",{href:!0});var ev=i(di);Jb=s(ev,"TFMobileBertForTokenClassification"),ev.forEach(t),Zb=s(xi," forward method, overrides the "),Yl=a(xi,"CODE",{});var tv=i(Yl);Xb=s(tv,"__call__"),tv.forEach(t),eT=s(xi," special method."),xi.forEach(t),tT=h(Lt),v(Un.$$.fragment,Lt),oT=h(Lt),v(Hn.$$.fragment,Lt),nT=h(Lt),v(Qn.$$.fragment,Lt),Lt.forEach(t),vt.forEach(t),yc=h(o),Eo=a(o,"H2",{class:!0});var $p=i(Eo);Kn=a($p,"A",{id:!0,class:!0,href:!0});var ov=i(Kn);Jl=a(ov,"SPAN",{});var nv=i(Jl);v(ia.$$.fragment,nv),nv.forEach(t),ov.forEach(t),sT=h($p),Zl=a($p,"SPAN",{});var sv=i(Zl);rT=s(sv,"TFMobileBertForQuestionAnswering"),sv.forEach(t),$p.forEach(t),vc=h(o),We=a(o,"DIV",{class:!0});var wt=i(We);v(la.$$.fragment,wt),aT=h(wt),xo=a(wt,"P",{});var zi=i(xo);iT=s(zi,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=a(zi,"CODE",{});var rv=i(Xl);lT=s(rv,"span start logits"),rv.forEach(t),dT=s(zi," and "),ed=a(zi,"CODE",{});var av=i(ed);cT=s(av,"span end logits"),av.forEach(t),pT=s(zi,")."),zi.forEach(t),mT=h(wt),da=a(wt,"P",{});var Fp=i(da);hT=s(Fp,"This model inherits from "),ci=a(Fp,"A",{href:!0});var iv=i(ci);fT=s(iv,"TFPreTrainedModel"),iv.forEach(t),uT=s(Fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp.forEach(t),gT=h(wt),ca=a(wt,"P",{});var Bp=i(ca);_T=s(Bp,"This model is also a "),pa=a(Bp,"A",{href:!0,rel:!0});var lv=i(pa);bT=s(lv,"tf.keras.Model"),lv.forEach(t),TT=s(Bp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bp.forEach(t),kT=h(wt),v(Vn.$$.fragment,wt),yT=h(wt),ot=a(wt,"DIV",{class:!0});var Dt=i(ot);v(ma.$$.fragment,Dt),vT=h(Dt),zo=a(Dt,"P",{});var Pi=i(zo);wT=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var dv=i(pi);MT=s(dv,"TFMobileBertForQuestionAnswering"),dv.forEach(t),$T=s(Pi," forward method, overrides the "),td=a(Pi,"CODE",{});var cv=i(td);FT=s(cv,"__call__"),cv.forEach(t),BT=s(Pi," special method."),Pi.forEach(t),ET=h(Dt),v(Gn.$$.fragment,Dt),xT=h(Dt),v(Yn.$$.fragment,Dt),zT=h(Dt),v(Jn.$$.fragment,Dt),Dt.forEach(t),wt.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(fw)),b(p,"id","mobilebert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#mobilebert"),b(c,"class","relative group"),b(J,"id","overview"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#overview"),b(z,"class","relative group"),b(ee,"href","https://arxiv.org/abs/2004.02984"),b(ee,"rel","nofollow"),b(u,"href","https://huggingface.co/vshampor"),b(u,"rel","nofollow"),b(ye,"href","https://github.com/google-research/mobilebert"),b(ye,"rel","nofollow"),b(ke,"id","transformers.MobileBertConfig"),b(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ke,"href","#transformers.MobileBertConfig"),b(Te,"class","relative group"),b(va,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),b(wa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(is,"href","https://huggingface.co/google/mobilebert-uncased"),b(is,"rel","nofollow"),b(Ma,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b($a,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Co,"id","transformers.MobileBertTokenizer"),b(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Co,"href","#transformers.MobileBertTokenizer"),b(Rt,"class","relative group"),b(Fa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),b(Ba,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),b(Ea,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),b(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.MobileBertTokenizerFast"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.MobileBertTokenizerFast"),b(Ut,"class","relative group"),b(xa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),b(za,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),b(Pa,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),b(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ao,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ao,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ht,"class","relative group"),b(qa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ja,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Io,"id","transformers.MobileBertModel"),b(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Io,"href","#transformers.MobileBertModel"),b(Vt,"class","relative group"),b(Ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Ms,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ms,"rel","nofollow"),b($s,"href","https://arxiv.org/pdf/2004.02984.pdf"),b($s,"rel","nofollow"),b(Na,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wo,"id","transformers.MobileBertForPreTraining"),b(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wo,"href","#transformers.MobileBertForPreTraining"),b(Yt,"class","relative group"),b(Oa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ps,"rel","nofollow"),b(Sa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ho,"id","transformers.MobileBertForMaskedLM"),b(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Ho,"href","#transformers.MobileBertForMaskedLM"),b(Xt,"class","relative group"),b(Aa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(As,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(As,"rel","nofollow"),b(Ia,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Go,"id","transformers.MobileBertForNextSentencePrediction"),b(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Go,"href","#transformers.MobileBertForNextSentencePrediction"),b(to,"class","relative group"),b(La,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Hs,"rel","nofollow"),b(Da,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.MobileBertForSequenceClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.MobileBertForSequenceClassification"),b(no,"class","relative group"),b(Wa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Js,"rel","nofollow"),b(Ra,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sn,"id","transformers.MobileBertForMultipleChoice"),b(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(sn,"href","#transformers.MobileBertForMultipleChoice"),b(ro,"class","relative group"),b(Ua,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(nr,"rel","nofollow"),b(Ha,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ln,"id","transformers.MobileBertForTokenClassification"),b(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ln,"href","#transformers.MobileBertForTokenClassification"),b(io,"class","relative group"),b(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(dr,"rel","nofollow"),b(Ka,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(mn,"id","transformers.MobileBertForQuestionAnswering"),b(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(mn,"href","#transformers.MobileBertForQuestionAnswering"),b(co,"class","relative group"),b(Va,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),b(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ur,"rel","nofollow"),b(Ga,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gn,"id","transformers.TFMobileBertModel"),b(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(gn,"href","#transformers.TFMobileBertModel"),b(ho,"class","relative group"),b(Ya,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(yr,"rel","nofollow"),b(Ja,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(kn,"id","transformers.TFMobileBertForPreTraining"),b(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(kn,"href","#transformers.TFMobileBertForPreTraining"),b(uo,"class","relative group"),b(Za,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Br,"rel","nofollow"),b(Xa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Mn,"id","transformers.TFMobileBertForMaskedLM"),b(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Mn,"href","#transformers.TFMobileBertForMaskedLM"),b(bo,"class","relative group"),b(ei,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Cr,"rel","nofollow"),b(ti,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xn,"id","transformers.TFMobileBertForNextSentencePrediction"),b(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xn,"href","#transformers.TFMobileBertForNextSentencePrediction"),b(ko,"class","relative group"),b(oi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Dr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Dr,"rel","nofollow"),b(ni,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jn,"id","transformers.TFMobileBertForSequenceClassification"),b(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jn,"href","#transformers.TFMobileBertForSequenceClassification"),b(vo,"class","relative group"),b(si,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Kr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Kr,"rel","nofollow"),b(ri,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(An,"id","transformers.TFMobileBertForMultipleChoice"),b(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(An,"href","#transformers.TFMobileBertForMultipleChoice"),b(Mo,"class","relative group"),b(ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Xr,"rel","nofollow"),b(ii,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),b(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wn,"id","transformers.TFMobileBertForTokenClassification"),b(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wn,"href","#transformers.TFMobileBertForTokenClassification"),b(Fo,"class","relative group"),b(li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(ra,"rel","nofollow"),b(di,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Kn,"id","transformers.TFMobileBertForQuestionAnswering"),b(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Kn,"href","#transformers.TFMobileBertForQuestionAnswering"),b(Eo,"class","relative group"),b(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),b(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pa,"rel","nofollow"),b(pi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),g(o,_,k),g(o,c,k),e(c,p),e(p,T),w(l,T,null),e(c,f),e(c,x),e(x,me),g(o,V,k),g(o,z,k),e(z,J),e(J,L),w(X,L,null),e(z,he),e(z,D),e(D,fe),g(o,le,k),g(o,K,k),e(K,N),e(K,ee),e(ee,G),e(K,P),g(o,j,k),g(o,ne,k),e(ne,U),g(o,de,k),g(o,se,k),e(se,W),e(W,ue),g(o,ce,k),g(o,q,k),e(q,ge),g(o,R,k),g(o,Z,k),e(Z,re),e(re,H),e(Z,_e),e(Z,ae),e(ae,O),g(o,pe,k),g(o,A,k),e(A,be),e(A,u),e(u,B),e(A,Y),e(A,ye),e(ye,$e),e(A,S),g(o,we,k),g(o,Te,k),e(Te,ke),e(ke,C),w(I,C,null),e(Te,Fe),e(Te,ve),e(ve,Q),g(o,Me,k),g(o,te,k),w(oe,te,null),e(te,Be),e(te,Mt),e(Mt,Ep),e(Mt,va),e(va,xp),e(Mt,zp),e(Mt,wa),e(wa,Pp),e(Mt,qp),e(Mt,is),e(is,jp),e(Mt,Cp),e(te,Np),e(te,Wt),e(Wt,Op),e(Wt,Ma),e(Ma,Sp),e(Wt,Ap),e(Wt,$a),e($a,Ip),e(Wt,Lp),e(te,Dp),w(jo,te,null),e(te,Wp),e(te,qi),e(qi,Rp),g(o,Ad,k),g(o,Rt,k),e(Rt,Co),e(Co,ji),w(ls,ji,null),e(Rt,Up),e(Rt,Ci),e(Ci,Hp),g(o,Id,k),g(o,st,k),w(ds,st,null),e(st,Qp),e(st,Ni),e(Ni,Kp),e(st,Vp),e(st,No),e(No,Fa),e(Fa,Gp),e(No,Yp),e(No,Ba),e(Ba,Jp),e(No,Zp),e(st,Xp),e(st,cs),e(cs,em),e(cs,Ea),e(Ea,tm),e(cs,om),g(o,Ld,k),g(o,Ut,k),e(Ut,Oo),e(Oo,Oi),w(ps,Oi,null),e(Ut,nm),e(Ut,Si),e(Si,sm),g(o,Dd,k),g(o,rt,k),w(ms,rt,null),e(rt,rm),e(rt,hs),e(hs,am),e(hs,Ai),e(Ai,im),e(hs,lm),e(rt,dm),e(rt,So),e(So,xa),e(xa,cm),e(So,pm),e(So,za),e(za,mm),e(So,hm),e(rt,fm),e(rt,fs),e(fs,um),e(fs,Pa),e(Pa,gm),e(fs,_m),g(o,Wd,k),g(o,Ht,k),e(Ht,Ao),e(Ao,Ii),w(us,Ii,null),e(Ht,bm),e(Ht,Li),e(Li,Tm),g(o,Rd,k),g(o,Qt,k),w(gs,Qt,null),e(Qt,km),e(Qt,_s),e(_s,ym),e(_s,qa),e(qa,vm),e(_s,wm),g(o,Ud,k),g(o,Kt,k),w(bs,Kt,null),e(Kt,Mm),e(Kt,Ts),e(Ts,$m),e(Ts,ja),e(ja,Fm),e(Ts,Bm),g(o,Hd,k),g(o,Vt,k),e(Vt,Io),e(Io,Di),w(ks,Di,null),e(Vt,Em),e(Vt,Wi),e(Wi,xm),g(o,Qd,k),g(o,Ce,k),w(ys,Ce,null),e(Ce,zm),e(Ce,Ri),e(Ri,Pm),e(Ce,qm),e(Ce,vs),e(vs,jm),e(vs,Ca),e(Ca,Cm),e(vs,Nm),e(Ce,Om),e(Ce,ws),e(ws,Sm),e(ws,Ms),e(Ms,Am),e(ws,Im),e(Ce,Lm),e(Ce,Ui),e(Ui,$s),e($s,Dm),e(Ce,Wm),e(Ce,it),w(Fs,it,null),e(it,Rm),e(it,Gt),e(Gt,Um),e(Gt,Na),e(Na,Hm),e(Gt,Qm),e(Gt,Hi),e(Hi,Km),e(Gt,Vm),e(it,Gm),w(Lo,it,null),e(it,Ym),w(Do,it,null),g(o,Kd,k),g(o,Yt,k),e(Yt,Wo),e(Wo,Qi),w(Bs,Qi,null),e(Yt,Jm),e(Yt,Ki),e(Ki,Zm),g(o,Vd,k),g(o,Re,k),w(Es,Re,null),e(Re,Xm),e(Re,Jt),e(Jt,eh),e(Jt,Vi),e(Vi,th),e(Jt,oh),e(Jt,Gi),e(Gi,nh),e(Jt,sh),e(Re,rh),e(Re,xs),e(xs,ah),e(xs,Oa),e(Oa,ih),e(xs,lh),e(Re,dh),e(Re,zs),e(zs,ch),e(zs,Ps),e(Ps,ph),e(zs,mh),e(Re,hh),e(Re,lt),w(qs,lt,null),e(lt,fh),e(lt,Zt),e(Zt,uh),e(Zt,Sa),e(Sa,gh),e(Zt,_h),e(Zt,Yi),e(Yi,bh),e(Zt,Th),e(lt,kh),w(Ro,lt,null),e(lt,yh),w(Uo,lt,null),g(o,Gd,k),g(o,Xt,k),e(Xt,Ho),e(Ho,Ji),w(js,Ji,null),e(Xt,vh),e(Xt,Zi),e(Zi,wh),g(o,Yd,k),g(o,Ue,k),w(Cs,Ue,null),e(Ue,Mh),e(Ue,Ns),e(Ns,$h),e(Ns,Xi),e(Xi,Fh),e(Ns,Bh),e(Ue,Eh),e(Ue,Os),e(Os,xh),e(Os,Aa),e(Aa,zh),e(Os,Ph),e(Ue,qh),e(Ue,Ss),e(Ss,jh),e(Ss,As),e(As,Ch),e(Ss,Nh),e(Ue,Oh),e(Ue,Ye),w(Is,Ye,null),e(Ye,Sh),e(Ye,eo),e(eo,Ah),e(eo,Ia),e(Ia,Ih),e(eo,Lh),e(eo,el),e(el,Dh),e(eo,Wh),e(Ye,Rh),w(Qo,Ye,null),e(Ye,Uh),w(Ko,Ye,null),e(Ye,Hh),w(Vo,Ye,null),g(o,Jd,k),g(o,to,k),e(to,Go),e(Go,tl),w(Ls,tl,null),e(to,Qh),e(to,ol),e(ol,Kh),g(o,Zd,k),g(o,He,k),w(Ds,He,null),e(He,Vh),e(He,Ws),e(Ws,Gh),e(Ws,nl),e(nl,Yh),e(Ws,Jh),e(He,Zh),e(He,Rs),e(Rs,Xh),e(Rs,La),e(La,ef),e(Rs,tf),e(He,of),e(He,Us),e(Us,nf),e(Us,Hs),e(Hs,sf),e(Us,rf),e(He,af),e(He,dt),w(Qs,dt,null),e(dt,lf),e(dt,oo),e(oo,df),e(oo,Da),e(Da,cf),e(oo,pf),e(oo,sl),e(sl,mf),e(oo,hf),e(dt,ff),w(Yo,dt,null),e(dt,uf),w(Jo,dt,null),g(o,Xd,k),g(o,no,k),e(no,Zo),e(Zo,rl),w(Ks,rl,null),e(no,gf),e(no,al),e(al,_f),g(o,ec,k),g(o,Qe,k),w(Vs,Qe,null),e(Qe,bf),e(Qe,il),e(il,Tf),e(Qe,kf),e(Qe,Gs),e(Gs,yf),e(Gs,Wa),e(Wa,vf),e(Gs,wf),e(Qe,Mf),e(Qe,Ys),e(Ys,$f),e(Ys,Js),e(Js,Ff),e(Ys,Bf),e(Qe,Ef),e(Qe,je),w(Zs,je,null),e(je,xf),e(je,so),e(so,zf),e(so,Ra),e(Ra,Pf),e(so,qf),e(so,ll),e(ll,jf),e(so,Cf),e(je,Nf),w(Xo,je,null),e(je,Of),w(en,je,null),e(je,Sf),w(tn,je,null),e(je,Af),w(on,je,null),e(je,If),w(nn,je,null),g(o,tc,k),g(o,ro,k),e(ro,sn),e(sn,dl),w(Xs,dl,null),e(ro,Lf),e(ro,cl),e(cl,Df),g(o,oc,k),g(o,Ke,k),w(er,Ke,null),e(Ke,Wf),e(Ke,pl),e(pl,Rf),e(Ke,Uf),e(Ke,tr),e(tr,Hf),e(tr,Ua),e(Ua,Qf),e(tr,Kf),e(Ke,Vf),e(Ke,or),e(or,Gf),e(or,nr),e(nr,Yf),e(or,Jf),e(Ke,Zf),e(Ke,ct),w(sr,ct,null),e(ct,Xf),e(ct,ao),e(ao,eu),e(ao,Ha),e(Ha,tu),e(ao,ou),e(ao,ml),e(ml,nu),e(ao,su),e(ct,ru),w(rn,ct,null),e(ct,au),w(an,ct,null),g(o,nc,k),g(o,io,k),e(io,ln),e(ln,hl),w(rr,hl,null),e(io,iu),e(io,fl),e(fl,lu),g(o,sc,k),g(o,Ve,k),w(ar,Ve,null),e(Ve,du),e(Ve,ul),e(ul,cu),e(Ve,pu),e(Ve,ir),e(ir,mu),e(ir,Qa),e(Qa,hu),e(ir,fu),e(Ve,uu),e(Ve,lr),e(lr,gu),e(lr,dr),e(dr,_u),e(lr,bu),e(Ve,Tu),e(Ve,Je),w(cr,Je,null),e(Je,ku),e(Je,lo),e(lo,yu),e(lo,Ka),e(Ka,vu),e(lo,wu),e(lo,gl),e(gl,Mu),e(lo,$u),e(Je,Fu),w(dn,Je,null),e(Je,Bu),w(cn,Je,null),e(Je,Eu),w(pn,Je,null),g(o,rc,k),g(o,co,k),e(co,mn),e(mn,_l),w(pr,_l,null),e(co,xu),e(co,bl),e(bl,zu),g(o,ac,k),g(o,Ge,k),w(mr,Ge,null),e(Ge,Pu),e(Ge,po),e(po,qu),e(po,Tl),e(Tl,ju),e(po,Cu),e(po,kl),e(kl,Nu),e(po,Ou),e(Ge,Su),e(Ge,hr),e(hr,Au),e(hr,Va),e(Va,Iu),e(hr,Lu),e(Ge,Du),e(Ge,fr),e(fr,Wu),e(fr,ur),e(ur,Ru),e(fr,Uu),e(Ge,Hu),e(Ge,Ze),w(gr,Ze,null),e(Ze,Qu),e(Ze,mo),e(mo,Ku),e(mo,Ga),e(Ga,Vu),e(mo,Gu),e(mo,yl),e(yl,Yu),e(mo,Ju),e(Ze,Zu),w(hn,Ze,null),e(Ze,Xu),w(fn,Ze,null),e(Ze,eg),w(un,Ze,null),g(o,ic,k),g(o,ho,k),e(ho,gn),e(gn,vl),w(_r,vl,null),e(ho,tg),e(ho,wl),e(wl,og),g(o,lc,k),g(o,Ne,k),w(br,Ne,null),e(Ne,ng),e(Ne,Ml),e(Ml,sg),e(Ne,rg),e(Ne,Tr),e(Tr,ag),e(Tr,Ya),e(Ya,ig),e(Tr,lg),e(Ne,dg),e(Ne,kr),e(kr,cg),e(kr,yr),e(yr,pg),e(kr,mg),e(Ne,hg),w(_n,Ne,null),e(Ne,fg),e(Ne,pt),w(vr,pt,null),e(pt,ug),e(pt,fo),e(fo,gg),e(fo,Ja),e(Ja,_g),e(fo,bg),e(fo,$l),e($l,Tg),e(fo,kg),e(pt,yg),w(bn,pt,null),e(pt,vg),w(Tn,pt,null),g(o,dc,k),g(o,uo,k),e(uo,kn),e(kn,Fl),w(wr,Fl,null),e(uo,wg),e(uo,Bl),e(Bl,Mg),g(o,cc,k),g(o,Oe,k),w(Mr,Oe,null),e(Oe,$g),e(Oe,go),e(go,Fg),e(go,El),e(El,Bg),e(go,Eg),e(go,xl),e(xl,xg),e(go,zg),e(Oe,Pg),e(Oe,$r),e($r,qg),e($r,Za),e(Za,jg),e($r,Cg),e(Oe,Ng),e(Oe,Fr),e(Fr,Og),e(Fr,Br),e(Br,Sg),e(Fr,Ag),e(Oe,Ig),w(yn,Oe,null),e(Oe,Lg),e(Oe,mt),w(Er,mt,null),e(mt,Dg),e(mt,_o),e(_o,Wg),e(_o,Xa),e(Xa,Rg),e(_o,Ug),e(_o,zl),e(zl,Hg),e(_o,Qg),e(mt,Kg),w(vn,mt,null),e(mt,Vg),w(wn,mt,null),g(o,pc,k),g(o,bo,k),e(bo,Mn),e(Mn,Pl),w(xr,Pl,null),e(bo,Gg),e(bo,ql),e(ql,Yg),g(o,mc,k),g(o,Se,k),w(zr,Se,null),e(Se,Jg),e(Se,Pr),e(Pr,Zg),e(Pr,jl),e(jl,Xg),e(Pr,e_),e(Se,t_),e(Se,qr),e(qr,o_),e(qr,ei),e(ei,n_),e(qr,s_),e(Se,r_),e(Se,jr),e(jr,a_),e(jr,Cr),e(Cr,i_),e(jr,l_),e(Se,d_),w($n,Se,null),e(Se,c_),e(Se,Xe),w(Nr,Xe,null),e(Xe,p_),e(Xe,To),e(To,m_),e(To,ti),e(ti,h_),e(To,f_),e(To,Cl),e(Cl,u_),e(To,g_),e(Xe,__),w(Fn,Xe,null),e(Xe,b_),w(Bn,Xe,null),e(Xe,T_),w(En,Xe,null),g(o,hc,k),g(o,ko,k),e(ko,xn),e(xn,Nl),w(Or,Nl,null),e(ko,k_),e(ko,Ol),e(Ol,y_),g(o,fc,k),g(o,Ae,k),w(Sr,Ae,null),e(Ae,v_),e(Ae,Ar),e(Ar,w_),e(Ar,Sl),e(Sl,M_),e(Ar,$_),e(Ae,F_),e(Ae,Ir),e(Ir,B_),e(Ir,oi),e(oi,E_),e(Ir,x_),e(Ae,z_),e(Ae,Lr),e(Lr,P_),e(Lr,Dr),e(Dr,q_),e(Lr,j_),e(Ae,C_),w(zn,Ae,null),e(Ae,N_),e(Ae,ht),w(Wr,ht,null),e(ht,O_),e(ht,yo),e(yo,S_),e(yo,ni),e(ni,A_),e(yo,I_),e(yo,Al),e(Al,L_),e(yo,D_),e(ht,W_),w(Pn,ht,null),e(ht,R_),w(qn,ht,null),g(o,uc,k),g(o,vo,k),e(vo,jn),e(jn,Il),w(Rr,Il,null),e(vo,U_),e(vo,Ll),e(Ll,H_),g(o,gc,k),g(o,Ie,k),w(Ur,Ie,null),e(Ie,Q_),e(Ie,Dl),e(Dl,K_),e(Ie,V_),e(Ie,Hr),e(Hr,G_),e(Hr,si),e(si,Y_),e(Hr,J_),e(Ie,Z_),e(Ie,Qr),e(Qr,X_),e(Qr,Kr),e(Kr,eb),e(Qr,tb),e(Ie,ob),w(Cn,Ie,null),e(Ie,nb),e(Ie,et),w(Vr,et,null),e(et,sb),e(et,wo),e(wo,rb),e(wo,ri),e(ri,ab),e(wo,ib),e(wo,Wl),e(Wl,lb),e(wo,db),e(et,cb),w(Nn,et,null),e(et,pb),w(On,et,null),e(et,mb),w(Sn,et,null),g(o,_c,k),g(o,Mo,k),e(Mo,An),e(An,Rl),w(Gr,Rl,null),e(Mo,hb),e(Mo,Ul),e(Ul,fb),g(o,bc,k),g(o,Le,k),w(Yr,Le,null),e(Le,ub),e(Le,Hl),e(Hl,gb),e(Le,_b),e(Le,Jr),e(Jr,bb),e(Jr,ai),e(ai,Tb),e(Jr,kb),e(Le,yb),e(Le,Zr),e(Zr,vb),e(Zr,Xr),e(Xr,wb),e(Zr,Mb),e(Le,$b),w(In,Le,null),e(Le,Fb),e(Le,ft),w(ea,ft,null),e(ft,Bb),e(ft,$o),e($o,Eb),e($o,ii),e(ii,xb),e($o,zb),e($o,Ql),e(Ql,Pb),e($o,qb),e(ft,jb),w(Ln,ft,null),e(ft,Cb),w(Dn,ft,null),g(o,Tc,k),g(o,Fo,k),e(Fo,Wn),e(Wn,Kl),w(ta,Kl,null),e(Fo,Nb),e(Fo,Vl),e(Vl,Ob),g(o,kc,k),g(o,De,k),w(oa,De,null),e(De,Sb),e(De,Gl),e(Gl,Ab),e(De,Ib),e(De,na),e(na,Lb),e(na,li),e(li,Db),e(na,Wb),e(De,Rb),e(De,sa),e(sa,Ub),e(sa,ra),e(ra,Hb),e(sa,Qb),e(De,Kb),w(Rn,De,null),e(De,Vb),e(De,tt),w(aa,tt,null),e(tt,Gb),e(tt,Bo),e(Bo,Yb),e(Bo,di),e(di,Jb),e(Bo,Zb),e(Bo,Yl),e(Yl,Xb),e(Bo,eT),e(tt,tT),w(Un,tt,null),e(tt,oT),w(Hn,tt,null),e(tt,nT),w(Qn,tt,null),g(o,yc,k),g(o,Eo,k),e(Eo,Kn),e(Kn,Jl),w(ia,Jl,null),e(Eo,sT),e(Eo,Zl),e(Zl,rT),g(o,vc,k),g(o,We,k),w(la,We,null),e(We,aT),e(We,xo),e(xo,iT),e(xo,Xl),e(Xl,lT),e(xo,dT),e(xo,ed),e(ed,cT),e(xo,pT),e(We,mT),e(We,da),e(da,hT),e(da,ci),e(ci,fT),e(da,uT),e(We,gT),e(We,ca),e(ca,_T),e(ca,pa),e(pa,bT),e(ca,TT),e(We,kT),w(Vn,We,null),e(We,yT),e(We,ot),w(ma,ot,null),e(ot,vT),e(ot,zo),e(zo,wT),e(zo,pi),e(pi,MT),e(zo,$T),e(zo,td),e(td,FT),e(zo,BT),e(ot,ET),w(Gn,ot,null),e(ot,xT),w(Yn,ot,null),e(ot,zT),w(Jn,ot,null),wc=!0},p(o,[k]){const ha={};k&2&&(ha.$$scope={dirty:k,ctx:o}),jo.$set(ha);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Lo.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),Do.$set(nd);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),Ro.$set(sd);const fa={};k&2&&(fa.$$scope={dirty:k,ctx:o}),Uo.$set(fa);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Qo.$set(rd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),Ko.$set(ad);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),Vo.$set(id);const ua={};k&2&&(ua.$$scope={dirty:k,ctx:o}),Yo.$set(ua);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:o}),Jo.$set(ld);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:o}),Xo.$set(dd);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:o}),en.$set(cd);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:o}),tn.$set(pd);const md={};k&2&&(md.$$scope={dirty:k,ctx:o}),on.$set(md);const ga={};k&2&&(ga.$$scope={dirty:k,ctx:o}),nn.$set(ga);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:o}),rn.$set(hd);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:o}),an.$set(fd);const Po={};k&2&&(Po.$$scope={dirty:k,ctx:o}),dn.$set(Po);const ud={};k&2&&(ud.$$scope={dirty:k,ctx:o}),cn.$set(ud);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:o}),pn.$set(gd);const _a={};k&2&&(_a.$$scope={dirty:k,ctx:o}),hn.$set(_a);const _d={};k&2&&(_d.$$scope={dirty:k,ctx:o}),fn.$set(_d);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:o}),un.$set(bd);const Td={};k&2&&(Td.$$scope={dirty:k,ctx:o}),_n.$set(Td);const at={};k&2&&(at.$$scope={dirty:k,ctx:o}),bn.$set(at);const $t={};k&2&&($t.$$scope={dirty:k,ctx:o}),Tn.$set($t);const kd={};k&2&&(kd.$$scope={dirty:k,ctx:o}),yn.$set(kd);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:o}),vn.$set(yd);const vd={};k&2&&(vd.$$scope={dirty:k,ctx:o}),wn.$set(vd);const qo={};k&2&&(qo.$$scope={dirty:k,ctx:o}),$n.$set(qo);const wd={};k&2&&(wd.$$scope={dirty:k,ctx:o}),Fn.$set(wd);const Md={};k&2&&(Md.$$scope={dirty:k,ctx:o}),Bn.$set(Md);const $d={};k&2&&($d.$$scope={dirty:k,ctx:o}),En.$set($d);const ba={};k&2&&(ba.$$scope={dirty:k,ctx:o}),zn.$set(ba);const Fd={};k&2&&(Fd.$$scope={dirty:k,ctx:o}),Pn.$set(Fd);const Bd={};k&2&&(Bd.$$scope={dirty:k,ctx:o}),qn.$set(Bd);const Ed={};k&2&&(Ed.$$scope={dirty:k,ctx:o}),Cn.$set(Ed);const Ft={};k&2&&(Ft.$$scope={dirty:k,ctx:o}),Nn.$set(Ft);const xd={};k&2&&(xd.$$scope={dirty:k,ctx:o}),On.$set(xd);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Sn.$set(Zn);const zd={};k&2&&(zd.$$scope={dirty:k,ctx:o}),In.$set(zd);const Pd={};k&2&&(Pd.$$scope={dirty:k,ctx:o}),Ln.$set(Pd);const Ta={};k&2&&(Ta.$$scope={dirty:k,ctx:o}),Dn.$set(Ta);const qd={};k&2&&(qd.$$scope={dirty:k,ctx:o}),Rn.$set(qd);const ka={};k&2&&(ka.$$scope={dirty:k,ctx:o}),Un.$set(ka);const jd={};k&2&&(jd.$$scope={dirty:k,ctx:o}),Hn.$set(jd);const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:o}),Qn.$set(Cd);const Nd={};k&2&&(Nd.$$scope={dirty:k,ctx:o}),Vn.$set(Nd);const Bt={};k&2&&(Bt.$$scope={dirty:k,ctx:o}),Gn.$set(Bt);const ya={};k&2&&(ya.$$scope={dirty:k,ctx:o}),Yn.$set(ya);const Od={};k&2&&(Od.$$scope={dirty:k,ctx:o}),Jn.$set(Od)},i(o){wc||(M(l.$$.fragment,o),M(X.$$.fragment,o),M(I.$$.fragment,o),M(oe.$$.fragment,o),M(jo.$$.fragment,o),M(ls.$$.fragment,o),M(ds.$$.fragment,o),M(ps.$$.fragment,o),M(ms.$$.fragment,o),M(us.$$.fragment,o),M(gs.$$.fragment,o),M(bs.$$.fragment,o),M(ks.$$.fragment,o),M(ys.$$.fragment,o),M(Fs.$$.fragment,o),M(Lo.$$.fragment,o),M(Do.$$.fragment,o),M(Bs.$$.fragment,o),M(Es.$$.fragment,o),M(qs.$$.fragment,o),M(Ro.$$.fragment,o),M(Uo.$$.fragment,o),M(js.$$.fragment,o),M(Cs.$$.fragment,o),M(Is.$$.fragment,o),M(Qo.$$.fragment,o),M(Ko.$$.fragment,o),M(Vo.$$.fragment,o),M(Ls.$$.fragment,o),M(Ds.$$.fragment,o),M(Qs.$$.fragment,o),M(Yo.$$.fragment,o),M(Jo.$$.fragment,o),M(Ks.$$.fragment,o),M(Vs.$$.fragment,o),M(Zs.$$.fragment,o),M(Xo.$$.fragment,o),M(en.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(nn.$$.fragment,o),M(Xs.$$.fragment,o),M(er.$$.fragment,o),M(sr.$$.fragment,o),M(rn.$$.fragment,o),M(an.$$.fragment,o),M(rr.$$.fragment,o),M(ar.$$.fragment,o),M(cr.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(pn.$$.fragment,o),M(pr.$$.fragment,o),M(mr.$$.fragment,o),M(gr.$$.fragment,o),M(hn.$$.fragment,o),M(fn.$$.fragment,o),M(un.$$.fragment,o),M(_r.$$.fragment,o),M(br.$$.fragment,o),M(_n.$$.fragment,o),M(vr.$$.fragment,o),M(bn.$$.fragment,o),M(Tn.$$.fragment,o),M(wr.$$.fragment,o),M(Mr.$$.fragment,o),M(yn.$$.fragment,o),M(Er.$$.fragment,o),M(vn.$$.fragment,o),M(wn.$$.fragment,o),M(xr.$$.fragment,o),M(zr.$$.fragment,o),M($n.$$.fragment,o),M(Nr.$$.fragment,o),M(Fn.$$.fragment,o),M(Bn.$$.fragment,o),M(En.$$.fragment,o),M(Or.$$.fragment,o),M(Sr.$$.fragment,o),M(zn.$$.fragment,o),M(Wr.$$.fragment,o),M(Pn.$$.fragment,o),M(qn.$$.fragment,o),M(Rr.$$.fragment,o),M(Ur.$$.fragment,o),M(Cn.$$.fragment,o),M(Vr.$$.fragment,o),M(Nn.$$.fragment,o),M(On.$$.fragment,o),M(Sn.$$.fragment,o),M(Gr.$$.fragment,o),M(Yr.$$.fragment,o),M(In.$$.fragment,o),M(ea.$$.fragment,o),M(Ln.$$.fragment,o),M(Dn.$$.fragment,o),M(ta.$$.fragment,o),M(oa.$$.fragment,o),M(Rn.$$.fragment,o),M(aa.$$.fragment,o),M(Un.$$.fragment,o),M(Hn.$$.fragment,o),M(Qn.$$.fragment,o),M(ia.$$.fragment,o),M(la.$$.fragment,o),M(Vn.$$.fragment,o),M(ma.$$.fragment,o),M(Gn.$$.fragment,o),M(Yn.$$.fragment,o),M(Jn.$$.fragment,o),wc=!0)},o(o){$(l.$$.fragment,o),$(X.$$.fragment,o),$(I.$$.fragment,o),$(oe.$$.fragment,o),$(jo.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(ps.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(gs.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(ys.$$.fragment,o),$(Fs.$$.fragment,o),$(Lo.$$.fragment,o),$(Do.$$.fragment,o),$(Bs.$$.fragment,o),$(Es.$$.fragment,o),$(qs.$$.fragment,o),$(Ro.$$.fragment,o),$(Uo.$$.fragment,o),$(js.$$.fragment,o),$(Cs.$$.fragment,o),$(Is.$$.fragment,o),$(Qo.$$.fragment,o),$(Ko.$$.fragment,o),$(Vo.$$.fragment,o),$(Ls.$$.fragment,o),$(Ds.$$.fragment,o),$(Qs.$$.fragment,o),$(Yo.$$.fragment,o),$(Jo.$$.fragment,o),$(Ks.$$.fragment,o),$(Vs.$$.fragment,o),$(Zs.$$.fragment,o),$(Xo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(Xs.$$.fragment,o),$(er.$$.fragment,o),$(sr.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(rr.$$.fragment,o),$(ar.$$.fragment,o),$(cr.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(pr.$$.fragment,o),$(mr.$$.fragment,o),$(gr.$$.fragment,o),$(hn.$$.fragment,o),$(fn.$$.fragment,o),$(un.$$.fragment,o),$(_r.$$.fragment,o),$(br.$$.fragment,o),$(_n.$$.fragment,o),$(vr.$$.fragment,o),$(bn.$$.fragment,o),$(Tn.$$.fragment,o),$(wr.$$.fragment,o),$(Mr.$$.fragment,o),$(yn.$$.fragment,o),$(Er.$$.fragment,o),$(vn.$$.fragment,o),$(wn.$$.fragment,o),$(xr.$$.fragment,o),$(zr.$$.fragment,o),$($n.$$.fragment,o),$(Nr.$$.fragment,o),$(Fn.$$.fragment,o),$(Bn.$$.fragment,o),$(En.$$.fragment,o),$(Or.$$.fragment,o),$(Sr.$$.fragment,o),$(zn.$$.fragment,o),$(Wr.$$.fragment,o),$(Pn.$$.fragment,o),$(qn.$$.fragment,o),$(Rr.$$.fragment,o),$(Ur.$$.fragment,o),$(Cn.$$.fragment,o),$(Vr.$$.fragment,o),$(Nn.$$.fragment,o),$(On.$$.fragment,o),$(Sn.$$.fragment,o),$(Gr.$$.fragment,o),$(Yr.$$.fragment,o),$(In.$$.fragment,o),$(ea.$$.fragment,o),$(Ln.$$.fragment,o),$(Dn.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(Rn.$$.fragment,o),$(aa.$$.fragment,o),$(Un.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(Vn.$$.fragment,o),$(ma.$$.fragment,o),$(Gn.$$.fragment,o),$(Yn.$$.fragment,o),$(Jn.$$.fragment,o),wc=!1},d(o){t(d),o&&t(_),o&&t(c),F(l),o&&t(V),o&&t(z),F(X),o&&t(le),o&&t(K),o&&t(j),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(R),o&&t(Z),o&&t(pe),o&&t(A),o&&t(we),o&&t(Te),F(I),o&&t(Me),o&&t(te),F(oe),F(jo),o&&t(Ad),o&&t(Rt),F(ls),o&&t(Id),o&&t(st),F(ds),o&&t(Ld),o&&t(Ut),F(ps),o&&t(Dd),o&&t(rt),F(ms),o&&t(Wd),o&&t(Ht),F(us),o&&t(Rd),o&&t(Qt),F(gs),o&&t(Ud),o&&t(Kt),F(bs),o&&t(Hd),o&&t(Vt),F(ks),o&&t(Qd),o&&t(Ce),F(ys),F(Fs),F(Lo),F(Do),o&&t(Kd),o&&t(Yt),F(Bs),o&&t(Vd),o&&t(Re),F(Es),F(qs),F(Ro),F(Uo),o&&t(Gd),o&&t(Xt),F(js),o&&t(Yd),o&&t(Ue),F(Cs),F(Is),F(Qo),F(Ko),F(Vo),o&&t(Jd),o&&t(to),F(Ls),o&&t(Zd),o&&t(He),F(Ds),F(Qs),F(Yo),F(Jo),o&&t(Xd),o&&t(no),F(Ks),o&&t(ec),o&&t(Qe),F(Vs),F(Zs),F(Xo),F(en),F(tn),F(on),F(nn),o&&t(tc),o&&t(ro),F(Xs),o&&t(oc),o&&t(Ke),F(er),F(sr),F(rn),F(an),o&&t(nc),o&&t(io),F(rr),o&&t(sc),o&&t(Ve),F(ar),F(cr),F(dn),F(cn),F(pn),o&&t(rc),o&&t(co),F(pr),o&&t(ac),o&&t(Ge),F(mr),F(gr),F(hn),F(fn),F(un),o&&t(ic),o&&t(ho),F(_r),o&&t(lc),o&&t(Ne),F(br),F(_n),F(vr),F(bn),F(Tn),o&&t(dc),o&&t(uo),F(wr),o&&t(cc),o&&t(Oe),F(Mr),F(yn),F(Er),F(vn),F(wn),o&&t(pc),o&&t(bo),F(xr),o&&t(mc),o&&t(Se),F(zr),F($n),F(Nr),F(Fn),F(Bn),F(En),o&&t(hc),o&&t(ko),F(Or),o&&t(fc),o&&t(Ae),F(Sr),F(zn),F(Wr),F(Pn),F(qn),o&&t(uc),o&&t(vo),F(Rr),o&&t(gc),o&&t(Ie),F(Ur),F(Cn),F(Vr),F(Nn),F(On),F(Sn),o&&t(_c),o&&t(Mo),F(Gr),o&&t(bc),o&&t(Le),F(Yr),F(In),F(ea),F(Ln),F(Dn),o&&t(Tc),o&&t(Fo),F(ta),o&&t(kc),o&&t(De),F(oa),F(Rn),F(aa),F(Un),F(Hn),F(Qn),o&&t(yc),o&&t(Eo),F(ia),o&&t(vc),o&&t(We),F(la),F(Vn),F(ma),F(Gn),F(Yn),F(Jn)}}}const fw={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function uw(E){return uv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class vw extends pv{constructor(d){super();mv(this,d,uw,hw,hv,{})}}export{vw as default,fw as metadata};
