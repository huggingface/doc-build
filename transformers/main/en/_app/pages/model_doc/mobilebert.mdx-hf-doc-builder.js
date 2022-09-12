import{S as pw,i as hw,s as mw,e as r,k as h,w,t as o,M as uw,c as a,d as t,m,a as i,x as v,h as n,b as g,G as e,g as _,y as M,q as $,o as F,B,v as fw,L as Ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as he}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertModel, MobileBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function _w(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function bw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function kw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Tw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function yw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function ww(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function vw(z){let d,b;return d=new Ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Mw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function $w(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Fw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Bw(z){let d,b,c,u,T;return u=new Ye({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of single-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of single-label classification:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ew(z){let d,b;return d=new Ye({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function xw(z){let d,b,c,u,T;return u=new Ye({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of multi-label classification:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function zw(z){let d,b;return d=new Ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Pw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function jw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Cw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function qw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Nw(z){let d,b;return d=new Ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Ow(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Aw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Sw(z){let d,b;return d=new Ye({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Dw(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Iw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Lw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ww(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Rw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Uw(z){let d,b,c,u,T;return u=new Ye({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Kw(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Hw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Qw(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Vw(z){let d,b;return d=new Ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Gw(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Yw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function Jw(z){let d,b,c,u,T;return u=new Ye({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Zw(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Xw(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function ev(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function tv(z){let d,b;return d=new Ye({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function ov(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function nv(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function sv(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function rv(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function av(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function iv(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function lv(z){let d,b;return d=new Ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function dv(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),y=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);Te=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),y=a(f,"P",{});var x=i(y);ye=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);we=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);ve=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,P),e(P,Te),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,y,E),e(y,ye),e(y,K),e(K,we),e(y,ue),e(y,L),e(L,ve),e(y,ae),e(y,H),e(H,Me),e(y,fe),e(y,R),e(R,$e),e(y,ge),e(y,U),e(U,de),e(y,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(y),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function cv(z){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function pv(z){let d,b,c,u,T;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),w(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),v(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),T=!0},p:Ge,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){F(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function hv(z){let d,b;return d=new Ye({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){w(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function mv(z){let d,b,c,u,T,l,p,P,Te,me,D,se,X,y,ye,K,we,ue,L,ve,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ke,f,E,Ie,Y,Le,Oe,x,We,Ae,Re,Ue,Ne,S,J,Ke,qe,Z,Se,He,Ce,De,oe,Qe,Lp,Jo,Wp,Ki,Rp,Jd,io,Zo,Hi,$s,Up,Qi,Kp,Zd,Mt,Fs,Hp,Vi,Qp,Vp,Xo,Da,Gp,Yp,Ia,Jp,Zp,Xp,Bs,eh,La,th,oh,Xd,lo,en,Gi,Es,nh,Yi,sh,ec,$t,xs,rh,zs,ah,Ji,ih,lh,dh,tn,Wa,ch,ph,Ra,hh,mh,uh,Ps,fh,Ua,gh,_h,tc,co,on,Zi,js,bh,Xi,kh,oc,po,Cs,Th,qs,yh,Ka,wh,vh,nc,ho,Ns,Mh,Os,$h,Ha,Fh,Bh,sc,mo,nn,el,As,Eh,tl,xh,rc,et,Ss,zh,ol,Ph,jh,Ds,Ch,Qa,qh,Nh,Oh,Is,Ah,Ls,Sh,Dh,Ih,nl,Ws,Lh,Wh,Bt,Rs,Rh,uo,Uh,Va,Kh,Hh,sl,Qh,Vh,Gh,sn,Yh,rn,ac,fo,an,rl,Us,Jh,al,Zh,ic,dt,Ks,Xh,go,em,il,tm,om,ll,nm,sm,rm,Hs,am,Ga,im,lm,dm,Qs,cm,Vs,pm,hm,mm,Et,Gs,um,_o,fm,Ya,gm,_m,dl,bm,km,Tm,ln,ym,dn,lc,bo,cn,cl,Ys,wm,pl,vm,dc,ct,Js,Mm,Zs,$m,hl,Fm,Bm,Em,Xs,xm,Ja,zm,Pm,jm,er,Cm,tr,qm,Nm,Om,gt,or,Am,ko,Sm,Za,Dm,Im,ml,Lm,Wm,Rm,pn,Um,hn,Km,mn,cc,To,un,ul,nr,Hm,fl,Qm,pc,pt,sr,Vm,rr,Gm,gl,Ym,Jm,Zm,ar,Xm,Xa,eu,tu,ou,ir,nu,lr,su,ru,au,xt,dr,iu,yo,lu,ei,du,cu,_l,pu,hu,mu,fn,uu,gn,hc,wo,_n,bl,cr,fu,kl,gu,mc,ht,pr,_u,Tl,bu,ku,hr,Tu,ti,yu,wu,vu,mr,Mu,ur,$u,Fu,Bu,Xe,fr,Eu,vo,xu,oi,zu,Pu,yl,ju,Cu,qu,bn,Nu,kn,Ou,Tn,Au,yn,Su,wn,uc,Mo,vn,wl,gr,Du,vl,Iu,fc,mt,_r,Lu,Ml,Wu,Ru,br,Uu,ni,Ku,Hu,Qu,kr,Vu,Tr,Gu,Yu,Ju,zt,yr,Zu,$o,Xu,si,ef,tf,$l,of,nf,sf,Mn,rf,$n,gc,Fo,Fn,Fl,wr,af,Bl,lf,_c,ut,vr,df,El,cf,pf,Mr,hf,ri,mf,uf,ff,$r,gf,Fr,_f,bf,kf,_t,Br,Tf,Bo,yf,ai,wf,vf,xl,Mf,$f,Ff,Bn,Bf,En,Ef,xn,bc,Eo,zn,zl,Er,xf,Pl,zf,kc,ft,xr,Pf,xo,jf,jl,Cf,qf,Cl,Nf,Of,Af,zr,Sf,ii,Df,If,Lf,Pr,Wf,jr,Rf,Uf,Kf,bt,Cr,Hf,zo,Qf,li,Vf,Gf,ql,Yf,Jf,Zf,Pn,Xf,jn,eg,Cn,Tc,Po,qn,Nl,qr,tg,Ol,og,yc,tt,Nr,ng,Al,sg,rg,Or,ag,di,ig,lg,dg,Ar,cg,Sr,pg,hg,mg,Nn,ug,Pt,Dr,fg,jo,gg,ci,_g,bg,Sl,kg,Tg,yg,On,wg,An,wc,Co,Sn,Dl,Ir,vg,Il,Mg,vc,ot,Lr,$g,qo,Fg,Ll,Bg,Eg,Wl,xg,zg,Pg,Wr,jg,pi,Cg,qg,Ng,Rr,Og,Ur,Ag,Sg,Dg,Dn,Ig,jt,Kr,Lg,No,Wg,hi,Rg,Ug,Rl,Kg,Hg,Qg,In,Vg,Ln,Mc,Oo,Wn,Ul,Hr,Gg,Kl,Yg,$c,nt,Qr,Jg,Vr,Zg,Hl,Xg,e_,t_,Gr,o_,mi,n_,s_,r_,Yr,a_,Jr,i_,l_,d_,Rn,c_,kt,Zr,p_,Ao,h_,ui,m_,u_,Ql,f_,g_,__,Un,b_,Kn,k_,Hn,Fc,So,Qn,Vl,Xr,T_,Gl,y_,Bc,st,ea,w_,ta,v_,Yl,M_,$_,F_,oa,B_,fi,E_,x_,z_,na,P_,sa,j_,C_,q_,Vn,N_,Ct,ra,O_,Do,A_,gi,S_,D_,Jl,I_,L_,W_,Gn,R_,Yn,Ec,Io,Jn,Zl,aa,U_,Xl,K_,xc,rt,ia,H_,ed,Q_,V_,la,G_,_i,Y_,J_,Z_,da,X_,ca,eb,tb,ob,Zn,nb,Tt,pa,sb,Lo,rb,bi,ab,ib,td,lb,db,cb,Xn,pb,es,hb,ts,zc,Wo,os,od,ha,mb,nd,ub,Pc,at,ma,fb,sd,gb,_b,ua,bb,ki,kb,Tb,yb,fa,wb,ga,vb,Mb,$b,ns,Fb,qt,_a,Bb,Ro,Eb,Ti,xb,zb,rd,Pb,jb,Cb,ss,qb,rs,jc,Uo,as,ad,ba,Nb,id,Ob,Cc,it,ka,Ab,ld,Sb,Db,Ta,Ib,yi,Lb,Wb,Rb,ya,Ub,wa,Kb,Hb,Qb,is,Vb,yt,va,Gb,Ko,Yb,wi,Jb,Zb,dd,Xb,ek,tk,ls,ok,ds,nk,cs,qc,Ho,ps,cd,Ma,sk,pd,rk,Nc,lt,$a,ak,Qo,ik,hd,lk,dk,md,ck,pk,hk,Fa,mk,vi,uk,fk,gk,Ba,_k,Ea,bk,kk,Tk,hs,yk,wt,xa,wk,Vo,vk,Mi,Mk,$k,ud,Fk,Bk,Ek,ms,xk,us,zk,fs,Oc;return l=new Ze({}),y=new Ze({}),C=new Ze({}),E=new he({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/configuration_mobilebert.py#L31"}}),Jo=new Ve({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[gw]},$$scope:{ctx:z}}}),$s=new Ze({}),Fs=new he({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),Es=new Ze({}),xs=new he({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),js=new Ze({}),Cs=new he({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L710"}}),Ns=new he({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L828"}}),As=new Ze({}),Ss=new he({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L813"}}),Rs=new he({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),sn=new Je({props:{$$slots:{default:[_w]},$$scope:{ctx:z}}}),rn=new Ve({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[bw]},$$scope:{ctx:z}}}),Us=new Ze({}),Ks=new he({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L927"}}),Gs=new he({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"return_dict",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),ln=new Je({props:{$$slots:{default:[kw]},$$scope:{ctx:z}}}),dn=new Ve({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[Tw]},$$scope:{ctx:z}}}),Ys=new Ze({}),Js=new he({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1033"}}),or=new he({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),pn=new Je({props:{$$slots:{default:[yw]},$$scope:{ctx:z}}}),hn=new Ve({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[ww]},$$scope:{ctx:z}}}),mn=new Ve({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[vw]},$$scope:{ctx:z}}}),nr=new Ze({}),sr=new he({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1135"}}),dr=new he({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),fn=new Je({props:{$$slots:{default:[Mw]},$$scope:{ctx:z}}}),gn=new Ve({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[$w]},$$scope:{ctx:z}}}),cr=new Ze({}),pr=new he({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1239"}}),fr=new he({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),bn=new Je({props:{$$slots:{default:[Fw]},$$scope:{ctx:z}}}),kn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[Bw]},$$scope:{ctx:z}}}),Tn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[Ew]},$$scope:{ctx:z}}}),yn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[xw]},$$scope:{ctx:z}}}),wn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[zw]},$$scope:{ctx:z}}}),gr=new Ze({}),_r=new he({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1452"}}),yr=new he({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Mn=new Je({props:{$$slots:{default:[Pw]},$$scope:{ctx:z}}}),$n=new Ve({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[jw]},$$scope:{ctx:z}}}),wr=new Ze({}),vr=new he({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1550"}}),Br=new he({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Bn=new Je({props:{$$slots:{default:[Cw]},$$scope:{ctx:z}}}),En=new Ve({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[qw]},$$scope:{ctx:z}}}),xn=new Ve({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[Nw]},$$scope:{ctx:z}}}),Er=new Ze({}),xr=new he({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1344"}}),Cr=new he({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Pn=new Je({props:{$$slots:{default:[Ow]},$$scope:{ctx:z}}}),jn=new Ve({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[Aw]},$$scope:{ctx:z}}}),Cn=new Ve({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[Sw]},$$scope:{ctx:z}}}),qr=new Ze({}),Nr=new he({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L960"}}),Nn=new Je({props:{$$slots:{default:[Dw]},$$scope:{ctx:z}}}),Dr=new he({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L965",returnDescription:`
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
`}}),On=new Je({props:{$$slots:{default:[Iw]},$$scope:{ctx:z}}}),An=new Ve({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[Lw]},$$scope:{ctx:z}}}),Ir=new Ze({}),Lr=new he({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1020"}}),Dn=new Je({props:{$$slots:{default:[Ww]},$$scope:{ctx:z}}}),Kr=new he({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1034",returnDescription:`
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
`}}),In=new Je({props:{$$slots:{default:[Rw]},$$scope:{ctx:z}}}),Ln=new Ve({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[Uw]},$$scope:{ctx:z}}}),Hr=new Ze({}),Qr=new he({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1115"}}),Rn=new Je({props:{$$slots:{default:[Kw]},$$scope:{ctx:z}}}),Zr=new he({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1136",returnDescription:`
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
`}}),Un=new Je({props:{$$slots:{default:[Hw]},$$scope:{ctx:z}}}),Kn=new Ve({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[Qw]},$$scope:{ctx:z}}}),Hn=new Ve({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[Vw]},$$scope:{ctx:z}}}),Xr=new Ze({}),ea=new he({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1216"}}),Vn=new Je({props:{$$slots:{default:[Gw]},$$scope:{ctx:z}}}),ra=new he({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1226",returnDescription:`
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
`}}),Gn=new Je({props:{$$slots:{default:[Yw]},$$scope:{ctx:z}}}),Yn=new Ve({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[Jw]},$$scope:{ctx:z}}}),aa=new Ze({}),ia=new he({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1308"}}),Zn=new Je({props:{$$slots:{default:[Zw]},$$scope:{ctx:z}}}),pa=new he({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1331",returnDescription:`
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
`}}),Xn=new Je({props:{$$slots:{default:[Xw]},$$scope:{ctx:z}}}),es=new Ve({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[ev]},$$scope:{ctx:z}}}),ts=new Ve({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[tv]},$$scope:{ctx:z}}}),ha=new Ze({}),ma=new he({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1515"}}),ns=new Je({props:{$$slots:{default:[ov]},$$scope:{ctx:z}}}),_a=new he({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1544",returnDescription:`
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
`}}),ss=new Je({props:{$$slots:{default:[nv]},$$scope:{ctx:z}}}),rs=new Ve({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[sv]},$$scope:{ctx:z}}}),ba=new Ze({}),ka=new he({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1649"}}),is=new Je({props:{$$slots:{default:[rv]},$$scope:{ctx:z}}}),va=new he({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1673",returnDescription:`
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
`}}),ls=new Je({props:{$$slots:{default:[av]},$$scope:{ctx:z}}}),ds=new Ve({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[iv]},$$scope:{ctx:z}}}),cs=new Ve({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[lv]},$$scope:{ctx:z}}}),Ma=new Ze({}),$a=new he({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1406"}}),hs=new Je({props:{$$slots:{default:[dv]},$$scope:{ctx:z}}}),xa=new he({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1425",returnDescription:`
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
`}}),ms=new Je({props:{$$slots:{default:[cv]},$$scope:{ctx:z}}}),us=new Ve({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[pv]},$$scope:{ctx:z}}}),fs=new Ve({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[hv]},$$scope:{ctx:z}}}),{c(){d=r("meta"),b=h(),c=r("h1"),u=r("a"),T=r("span"),w(l.$$.fragment),p=h(),P=r("span"),Te=o("MobileBERT"),me=h(),D=r("h2"),se=r("a"),X=r("span"),w(y.$$.fragment),ye=h(),K=r("span"),we=o("Overview"),ue=h(),L=r("p"),ve=o("The MobileBERT model was proposed in "),ae=r("a"),H=o("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),Me=o(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),fe=h(),R=r("p"),$e=o("The abstract from the paper is the following:"),ge=h(),U=r("p"),de=r("em"),Fe=o(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),te=h(),j=r("p"),N=o("Tips:"),_e=h(),W=r("ul"),ce=r("li"),Be=o(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Q=h(),pe=r("li"),Ee=o(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),q=h(),ne=r("p"),V=o("This model was contributed by "),ie=r("a"),xe=o("vshampor"),G=o(". The original code can be found "),le=r("a"),ze=o("here"),A=o("."),be=h(),I=r("h2"),re=r("a"),ee=r("span"),w(C.$$.fragment),Pe=h(),O=r("span"),je=o("MobileBertConfig"),ke=h(),f=r("div"),w(E.$$.fragment),Ie=h(),Y=r("p"),Le=o("This is the configuration class to store the configuration of a "),Oe=r("a"),x=o("MobileBertModel"),We=o(" or a "),Ae=r("a"),Re=o("TFMobileBertModel"),Ue=o(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=r("a"),S=o("google/mobilebert-uncased"),J=o(" architecture."),Ke=h(),qe=r("p"),Z=o("Configuration objects inherit from "),Se=r("a"),He=o("PretrainedConfig"),Ce=o(` and can be used to control the model outputs. Read the
documentation from `),De=r("a"),oe=o("PretrainedConfig"),Qe=o(" for more information."),Lp=h(),w(Jo.$$.fragment),Wp=h(),Ki=r("p"),Rp=o(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Jd=h(),io=r("h2"),Zo=r("a"),Hi=r("span"),w($s.$$.fragment),Up=h(),Qi=r("span"),Kp=o("MobileBertTokenizer"),Zd=h(),Mt=r("div"),w(Fs.$$.fragment),Hp=h(),Vi=r("p"),Qp=o("Construct a MobileBERT tokenizer."),Vp=h(),Xo=r("p"),Da=r("a"),Gp=o("MobileBertTokenizer"),Yp=o(" is identical to "),Ia=r("a"),Jp=o("BertTokenizer"),Zp=o(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Xp=h(),Bs=r("p"),eh=o("Refer to superclass "),La=r("a"),th=o("BertTokenizer"),oh=o(" for usage examples and documentation concerning parameters."),Xd=h(),lo=r("h2"),en=r("a"),Gi=r("span"),w(Es.$$.fragment),nh=h(),Yi=r("span"),sh=o("MobileBertTokenizerFast"),ec=h(),$t=r("div"),w(xs.$$.fragment),rh=h(),zs=r("p"),ah=o("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ji=r("em"),ih=o("tokenizers"),lh=o(" library)."),dh=h(),tn=r("p"),Wa=r("a"),ch=o("MobileBertTokenizerFast"),ph=o(" is identical to "),Ra=r("a"),hh=o("BertTokenizerFast"),mh=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),uh=h(),Ps=r("p"),fh=o("Refer to superclass "),Ua=r("a"),gh=o("BertTokenizerFast"),_h=o(" for usage examples and documentation concerning parameters."),tc=h(),co=r("h2"),on=r("a"),Zi=r("span"),w(js.$$.fragment),bh=h(),Xi=r("span"),kh=o("MobileBert specific outputs"),oc=h(),po=r("div"),w(Cs.$$.fragment),Th=h(),qs=r("p"),yh=o("Output type of "),Ka=r("a"),wh=o("MobileBertForPreTraining"),vh=o("."),nc=h(),ho=r("div"),w(Ns.$$.fragment),Mh=h(),Os=r("p"),$h=o("Output type of "),Ha=r("a"),Fh=o("TFMobileBertForPreTraining"),Bh=o("."),sc=h(),mo=r("h2"),nn=r("a"),el=r("span"),w(As.$$.fragment),Eh=h(),tl=r("span"),xh=o("MobileBertModel"),rc=h(),et=r("div"),w(Ss.$$.fragment),zh=h(),ol=r("p"),Ph=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),jh=h(),Ds=r("p"),Ch=o("This model inherits from "),Qa=r("a"),qh=o("PreTrainedModel"),Nh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=h(),Is=r("p"),Ah=o("This model is also a PyTorch "),Ls=r("a"),Sh=o("torch.nn.Module"),Dh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih=h(),nl=r("p"),Ws=r("a"),Lh=o("https://arxiv.org/pdf/2004.02984.pdf"),Wh=h(),Bt=r("div"),w(Rs.$$.fragment),Rh=h(),uo=r("p"),Uh=o("The "),Va=r("a"),Kh=o("MobileBertModel"),Hh=o(" forward method, overrides the "),sl=r("code"),Qh=o("__call__"),Vh=o(" special method."),Gh=h(),w(sn.$$.fragment),Yh=h(),w(rn.$$.fragment),ac=h(),fo=r("h2"),an=r("a"),rl=r("span"),w(Us.$$.fragment),Jh=h(),al=r("span"),Zh=o("MobileBertForPreTraining"),ic=h(),dt=r("div"),w(Ks.$$.fragment),Xh=h(),go=r("p"),em=o("MobileBert Model with two heads on top as done during the pretraining: a "),il=r("code"),tm=o("masked language modeling"),om=o(` head and a
`),ll=r("code"),nm=o("next sentence prediction (classification)"),sm=o(" head."),rm=h(),Hs=r("p"),am=o("This model inherits from "),Ga=r("a"),im=o("PreTrainedModel"),lm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm=h(),Qs=r("p"),cm=o("This model is also a PyTorch "),Vs=r("a"),pm=o("torch.nn.Module"),hm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mm=h(),Et=r("div"),w(Gs.$$.fragment),um=h(),_o=r("p"),fm=o("The "),Ya=r("a"),gm=o("MobileBertForPreTraining"),_m=o(" forward method, overrides the "),dl=r("code"),bm=o("__call__"),km=o(" special method."),Tm=h(),w(ln.$$.fragment),ym=h(),w(dn.$$.fragment),lc=h(),bo=r("h2"),cn=r("a"),cl=r("span"),w(Ys.$$.fragment),wm=h(),pl=r("span"),vm=o("MobileBertForMaskedLM"),dc=h(),ct=r("div"),w(Js.$$.fragment),Mm=h(),Zs=r("p"),$m=o("MobileBert Model with a "),hl=r("code"),Fm=o("language modeling"),Bm=o(" head on top."),Em=h(),Xs=r("p"),xm=o("This model inherits from "),Ja=r("a"),zm=o("PreTrainedModel"),Pm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jm=h(),er=r("p"),Cm=o("This model is also a PyTorch "),tr=r("a"),qm=o("torch.nn.Module"),Nm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Om=h(),gt=r("div"),w(or.$$.fragment),Am=h(),ko=r("p"),Sm=o("The "),Za=r("a"),Dm=o("MobileBertForMaskedLM"),Im=o(" forward method, overrides the "),ml=r("code"),Lm=o("__call__"),Wm=o(" special method."),Rm=h(),w(pn.$$.fragment),Um=h(),w(hn.$$.fragment),Km=h(),w(mn.$$.fragment),cc=h(),To=r("h2"),un=r("a"),ul=r("span"),w(nr.$$.fragment),Hm=h(),fl=r("span"),Qm=o("MobileBertForNextSentencePrediction"),pc=h(),pt=r("div"),w(sr.$$.fragment),Vm=h(),rr=r("p"),Gm=o("MobileBert Model with a "),gl=r("code"),Ym=o("next sentence prediction (classification)"),Jm=o(" head on top."),Zm=h(),ar=r("p"),Xm=o("This model inherits from "),Xa=r("a"),eu=o("PreTrainedModel"),tu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou=h(),ir=r("p"),nu=o("This model is also a PyTorch "),lr=r("a"),su=o("torch.nn.Module"),ru=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au=h(),xt=r("div"),w(dr.$$.fragment),iu=h(),yo=r("p"),lu=o("The "),ei=r("a"),du=o("MobileBertForNextSentencePrediction"),cu=o(" forward method, overrides the "),_l=r("code"),pu=o("__call__"),hu=o(" special method."),mu=h(),w(fn.$$.fragment),uu=h(),w(gn.$$.fragment),hc=h(),wo=r("h2"),_n=r("a"),bl=r("span"),w(cr.$$.fragment),fu=h(),kl=r("span"),gu=o("MobileBertForSequenceClassification"),mc=h(),ht=r("div"),w(pr.$$.fragment),_u=h(),Tl=r("p"),bu=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ku=h(),hr=r("p"),Tu=o("This model inherits from "),ti=r("a"),yu=o("PreTrainedModel"),wu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu=h(),mr=r("p"),Mu=o("This model is also a PyTorch "),ur=r("a"),$u=o("torch.nn.Module"),Fu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bu=h(),Xe=r("div"),w(fr.$$.fragment),Eu=h(),vo=r("p"),xu=o("The "),oi=r("a"),zu=o("MobileBertForSequenceClassification"),Pu=o(" forward method, overrides the "),yl=r("code"),ju=o("__call__"),Cu=o(" special method."),qu=h(),w(bn.$$.fragment),Nu=h(),w(kn.$$.fragment),Ou=h(),w(Tn.$$.fragment),Au=h(),w(yn.$$.fragment),Su=h(),w(wn.$$.fragment),uc=h(),Mo=r("h2"),vn=r("a"),wl=r("span"),w(gr.$$.fragment),Du=h(),vl=r("span"),Iu=o("MobileBertForMultipleChoice"),fc=h(),mt=r("div"),w(_r.$$.fragment),Lu=h(),Ml=r("p"),Wu=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ru=h(),br=r("p"),Uu=o("This model inherits from "),ni=r("a"),Ku=o("PreTrainedModel"),Hu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu=h(),kr=r("p"),Vu=o("This model is also a PyTorch "),Tr=r("a"),Gu=o("torch.nn.Module"),Yu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju=h(),zt=r("div"),w(yr.$$.fragment),Zu=h(),$o=r("p"),Xu=o("The "),si=r("a"),ef=o("MobileBertForMultipleChoice"),tf=o(" forward method, overrides the "),$l=r("code"),of=o("__call__"),nf=o(" special method."),sf=h(),w(Mn.$$.fragment),rf=h(),w($n.$$.fragment),gc=h(),Fo=r("h2"),Fn=r("a"),Fl=r("span"),w(wr.$$.fragment),af=h(),Bl=r("span"),lf=o("MobileBertForTokenClassification"),_c=h(),ut=r("div"),w(vr.$$.fragment),df=h(),El=r("p"),cf=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pf=h(),Mr=r("p"),hf=o("This model inherits from "),ri=r("a"),mf=o("PreTrainedModel"),uf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff=h(),$r=r("p"),gf=o("This model is also a PyTorch "),Fr=r("a"),_f=o("torch.nn.Module"),bf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kf=h(),_t=r("div"),w(Br.$$.fragment),Tf=h(),Bo=r("p"),yf=o("The "),ai=r("a"),wf=o("MobileBertForTokenClassification"),vf=o(" forward method, overrides the "),xl=r("code"),Mf=o("__call__"),$f=o(" special method."),Ff=h(),w(Bn.$$.fragment),Bf=h(),w(En.$$.fragment),Ef=h(),w(xn.$$.fragment),bc=h(),Eo=r("h2"),zn=r("a"),zl=r("span"),w(Er.$$.fragment),xf=h(),Pl=r("span"),zf=o("MobileBertForQuestionAnswering"),kc=h(),ft=r("div"),w(xr.$$.fragment),Pf=h(),xo=r("p"),jf=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),jl=r("code"),Cf=o("span start logits"),qf=o(" and "),Cl=r("code"),Nf=o("span end logits"),Of=o(")."),Af=h(),zr=r("p"),Sf=o("This model inherits from "),ii=r("a"),Df=o("PreTrainedModel"),If=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=h(),Pr=r("p"),Wf=o("This model is also a PyTorch "),jr=r("a"),Rf=o("torch.nn.Module"),Uf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf=h(),bt=r("div"),w(Cr.$$.fragment),Hf=h(),zo=r("p"),Qf=o("The "),li=r("a"),Vf=o("MobileBertForQuestionAnswering"),Gf=o(" forward method, overrides the "),ql=r("code"),Yf=o("__call__"),Jf=o(" special method."),Zf=h(),w(Pn.$$.fragment),Xf=h(),w(jn.$$.fragment),eg=h(),w(Cn.$$.fragment),Tc=h(),Po=r("h2"),qn=r("a"),Nl=r("span"),w(qr.$$.fragment),tg=h(),Ol=r("span"),og=o("TFMobileBertModel"),yc=h(),tt=r("div"),w(Nr.$$.fragment),ng=h(),Al=r("p"),sg=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),rg=h(),Or=r("p"),ag=o("This model inherits from "),di=r("a"),ig=o("TFPreTrainedModel"),lg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=h(),Ar=r("p"),cg=o("This model is also a "),Sr=r("a"),pg=o("tf.keras.Model"),hg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg=h(),w(Nn.$$.fragment),ug=h(),Pt=r("div"),w(Dr.$$.fragment),fg=h(),jo=r("p"),gg=o("The "),ci=r("a"),_g=o("TFMobileBertModel"),bg=o(" forward method, overrides the "),Sl=r("code"),kg=o("__call__"),Tg=o(" special method."),yg=h(),w(On.$$.fragment),wg=h(),w(An.$$.fragment),wc=h(),Co=r("h2"),Sn=r("a"),Dl=r("span"),w(Ir.$$.fragment),vg=h(),Il=r("span"),Mg=o("TFMobileBertForPreTraining"),vc=h(),ot=r("div"),w(Lr.$$.fragment),$g=h(),qo=r("p"),Fg=o("MobileBert Model with two heads on top as done during the pretraining: a "),Ll=r("code"),Bg=o("masked language modeling"),Eg=o(` head and a
`),Wl=r("code"),xg=o("next sentence prediction (classification)"),zg=o(" head."),Pg=h(),Wr=r("p"),jg=o("This model inherits from "),pi=r("a"),Cg=o("TFPreTrainedModel"),qg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=h(),Rr=r("p"),Og=o("This model is also a "),Ur=r("a"),Ag=o("tf.keras.Model"),Sg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dg=h(),w(Dn.$$.fragment),Ig=h(),jt=r("div"),w(Kr.$$.fragment),Lg=h(),No=r("p"),Wg=o("The "),hi=r("a"),Rg=o("TFMobileBertForPreTraining"),Ug=o(" forward method, overrides the "),Rl=r("code"),Kg=o("__call__"),Hg=o(" special method."),Qg=h(),w(In.$$.fragment),Vg=h(),w(Ln.$$.fragment),Mc=h(),Oo=r("h2"),Wn=r("a"),Ul=r("span"),w(Hr.$$.fragment),Gg=h(),Kl=r("span"),Yg=o("TFMobileBertForMaskedLM"),$c=h(),nt=r("div"),w(Qr.$$.fragment),Jg=h(),Vr=r("p"),Zg=o("MobileBert Model with a "),Hl=r("code"),Xg=o("language modeling"),e_=o(" head on top."),t_=h(),Gr=r("p"),o_=o("This model inherits from "),mi=r("a"),n_=o("TFPreTrainedModel"),s_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r_=h(),Yr=r("p"),a_=o("This model is also a "),Jr=r("a"),i_=o("tf.keras.Model"),l_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d_=h(),w(Rn.$$.fragment),c_=h(),kt=r("div"),w(Zr.$$.fragment),p_=h(),Ao=r("p"),h_=o("The "),ui=r("a"),m_=o("TFMobileBertForMaskedLM"),u_=o(" forward method, overrides the "),Ql=r("code"),f_=o("__call__"),g_=o(" special method."),__=h(),w(Un.$$.fragment),b_=h(),w(Kn.$$.fragment),k_=h(),w(Hn.$$.fragment),Fc=h(),So=r("h2"),Qn=r("a"),Vl=r("span"),w(Xr.$$.fragment),T_=h(),Gl=r("span"),y_=o("TFMobileBertForNextSentencePrediction"),Bc=h(),st=r("div"),w(ea.$$.fragment),w_=h(),ta=r("p"),v_=o("MobileBert Model with a "),Yl=r("code"),M_=o("next sentence prediction (classification)"),$_=o(" head on top."),F_=h(),oa=r("p"),B_=o("This model inherits from "),fi=r("a"),E_=o("TFPreTrainedModel"),x_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=h(),na=r("p"),P_=o("This model is also a "),sa=r("a"),j_=o("tf.keras.Model"),C_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=h(),w(Vn.$$.fragment),N_=h(),Ct=r("div"),w(ra.$$.fragment),O_=h(),Do=r("p"),A_=o("The "),gi=r("a"),S_=o("TFMobileBertForNextSentencePrediction"),D_=o(" forward method, overrides the "),Jl=r("code"),I_=o("__call__"),L_=o(" special method."),W_=h(),w(Gn.$$.fragment),R_=h(),w(Yn.$$.fragment),Ec=h(),Io=r("h2"),Jn=r("a"),Zl=r("span"),w(aa.$$.fragment),U_=h(),Xl=r("span"),K_=o("TFMobileBertForSequenceClassification"),xc=h(),rt=r("div"),w(ia.$$.fragment),H_=h(),ed=r("p"),Q_=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V_=h(),la=r("p"),G_=o("This model inherits from "),_i=r("a"),Y_=o("TFPreTrainedModel"),J_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=h(),da=r("p"),X_=o("This model is also a "),ca=r("a"),eb=o("tf.keras.Model"),tb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob=h(),w(Zn.$$.fragment),nb=h(),Tt=r("div"),w(pa.$$.fragment),sb=h(),Lo=r("p"),rb=o("The "),bi=r("a"),ab=o("TFMobileBertForSequenceClassification"),ib=o(" forward method, overrides the "),td=r("code"),lb=o("__call__"),db=o(" special method."),cb=h(),w(Xn.$$.fragment),pb=h(),w(es.$$.fragment),hb=h(),w(ts.$$.fragment),zc=h(),Wo=r("h2"),os=r("a"),od=r("span"),w(ha.$$.fragment),mb=h(),nd=r("span"),ub=o("TFMobileBertForMultipleChoice"),Pc=h(),at=r("div"),w(ma.$$.fragment),fb=h(),sd=r("p"),gb=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_b=h(),ua=r("p"),bb=o("This model inherits from "),ki=r("a"),kb=o("TFPreTrainedModel"),Tb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yb=h(),fa=r("p"),wb=o("This model is also a "),ga=r("a"),vb=o("tf.keras.Model"),Mb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$b=h(),w(ns.$$.fragment),Fb=h(),qt=r("div"),w(_a.$$.fragment),Bb=h(),Ro=r("p"),Eb=o("The "),Ti=r("a"),xb=o("TFMobileBertForMultipleChoice"),zb=o(" forward method, overrides the "),rd=r("code"),Pb=o("__call__"),jb=o(" special method."),Cb=h(),w(ss.$$.fragment),qb=h(),w(rs.$$.fragment),jc=h(),Uo=r("h2"),as=r("a"),ad=r("span"),w(ba.$$.fragment),Nb=h(),id=r("span"),Ob=o("TFMobileBertForTokenClassification"),Cc=h(),it=r("div"),w(ka.$$.fragment),Ab=h(),ld=r("p"),Sb=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Db=h(),Ta=r("p"),Ib=o("This model inherits from "),yi=r("a"),Lb=o("TFPreTrainedModel"),Wb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=h(),ya=r("p"),Ub=o("This model is also a "),wa=r("a"),Kb=o("tf.keras.Model"),Hb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qb=h(),w(is.$$.fragment),Vb=h(),yt=r("div"),w(va.$$.fragment),Gb=h(),Ko=r("p"),Yb=o("The "),wi=r("a"),Jb=o("TFMobileBertForTokenClassification"),Zb=o(" forward method, overrides the "),dd=r("code"),Xb=o("__call__"),ek=o(" special method."),tk=h(),w(ls.$$.fragment),ok=h(),w(ds.$$.fragment),nk=h(),w(cs.$$.fragment),qc=h(),Ho=r("h2"),ps=r("a"),cd=r("span"),w(Ma.$$.fragment),sk=h(),pd=r("span"),rk=o("TFMobileBertForQuestionAnswering"),Nc=h(),lt=r("div"),w($a.$$.fragment),ak=h(),Qo=r("p"),ik=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),hd=r("code"),lk=o("span start logits"),dk=o(" and "),md=r("code"),ck=o("span end logits"),pk=o(")."),hk=h(),Fa=r("p"),mk=o("This model inherits from "),vi=r("a"),uk=o("TFPreTrainedModel"),fk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gk=h(),Ba=r("p"),_k=o("This model is also a "),Ea=r("a"),bk=o("tf.keras.Model"),kk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tk=h(),w(hs.$$.fragment),yk=h(),wt=r("div"),w(xa.$$.fragment),wk=h(),Vo=r("p"),vk=o("The "),Mi=r("a"),Mk=o("TFMobileBertForQuestionAnswering"),$k=o(" forward method, overrides the "),ud=r("code"),Fk=o("__call__"),Bk=o(" special method."),Ek=h(),w(ms.$$.fragment),xk=h(),w(us.$$.fragment),zk=h(),w(fs.$$.fragment),this.h()},l(s){const k=uw('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),b=m(s),c=a(s,"H1",{class:!0});var za=i(c);u=a(za,"A",{id:!0,class:!0,href:!0});var fd=i(u);T=a(fd,"SPAN",{});var gd=i(T);v(l.$$.fragment,gd),gd.forEach(t),fd.forEach(t),p=m(za),P=a(za,"SPAN",{});var _d=i(P);Te=n(_d,"MobileBERT"),_d.forEach(t),za.forEach(t),me=m(s),D=a(s,"H2",{class:!0});var Pa=i(D);se=a(Pa,"A",{id:!0,class:!0,href:!0});var bd=i(se);X=a(bd,"SPAN",{});var kd=i(X);v(y.$$.fragment,kd),kd.forEach(t),bd.forEach(t),ye=m(Pa),K=a(Pa,"SPAN",{});var Td=i(K);we=n(Td,"Overview"),Td.forEach(t),Pa.forEach(t),ue=m(s),L=a(s,"P",{});var ja=i(L);ve=n(ja,"The MobileBERT model was proposed in "),ae=a(ja,"A",{href:!0,rel:!0});var yd=i(ae);H=n(yd,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),yd.forEach(t),Me=n(ja,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),ja.forEach(t),fe=m(s),R=a(s,"P",{});var wd=i(R);$e=n(wd,"The abstract from the paper is the following:"),wd.forEach(t),ge=m(s),U=a(s,"P",{});var vd=i(U);de=a(vd,"EM",{});var Md=i(de);Fe=n(Md,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),Md.forEach(t),vd.forEach(t),te=m(s),j=a(s,"P",{});var $d=i(j);N=n($d,"Tips:"),$d.forEach(t),_e=m(s),W=a(s,"UL",{});var Ca=i(W);ce=a(Ca,"LI",{});var Fd=i(ce);Be=n(Fd,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Fd.forEach(t),Q=m(Ca),pe=a(Ca,"LI",{});var Bd=i(pe);Ee=n(Bd,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),Bd.forEach(t),Ca.forEach(t),q=m(s),ne=a(s,"P",{});var Go=i(ne);V=n(Go,"This model was contributed by "),ie=a(Go,"A",{href:!0,rel:!0});var Ed=i(ie);xe=n(Ed,"vshampor"),Ed.forEach(t),G=n(Go,". The original code can be found "),le=a(Go,"A",{href:!0,rel:!0});var xd=i(le);ze=n(xd,"here"),xd.forEach(t),A=n(Go,"."),Go.forEach(t),be=m(s),I=a(s,"H2",{class:!0});var qa=i(I);re=a(qa,"A",{id:!0,class:!0,href:!0});var zd=i(re);ee=a(zd,"SPAN",{});var Pd=i(ee);v(C.$$.fragment,Pd),Pd.forEach(t),zd.forEach(t),Pe=m(qa),O=a(qa,"SPAN",{});var jd=i(O);je=n(jd,"MobileBertConfig"),jd.forEach(t),qa.forEach(t),ke=m(s),f=a(s,"DIV",{class:!0});var Ft=i(f);v(E.$$.fragment,Ft),Ie=m(Ft),Y=a(Ft,"P",{});var Ut=i(Y);Le=n(Ut,"This is the configuration class to store the configuration of a "),Oe=a(Ut,"A",{href:!0});var Cd=i(Oe);x=n(Cd,"MobileBertModel"),Cd.forEach(t),We=n(Ut," or a "),Ae=a(Ut,"A",{href:!0});var qd=i(Ae);Re=n(qd,"TFMobileBertModel"),qd.forEach(t),Ue=n(Ut,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=a(Ut,"A",{href:!0,rel:!0});var Nd=i(Ne);S=n(Nd,"google/mobilebert-uncased"),Nd.forEach(t),J=n(Ut," architecture."),Ut.forEach(t),Ke=m(Ft),qe=a(Ft,"P",{});var Yo=i(qe);Z=n(Yo,"Configuration objects inherit from "),Se=a(Yo,"A",{href:!0});var Od=i(Se);He=n(Od,"PretrainedConfig"),Od.forEach(t),Ce=n(Yo,` and can be used to control the model outputs. Read the
documentation from `),De=a(Yo,"A",{href:!0});var Ad=i(De);oe=n(Ad,"PretrainedConfig"),Ad.forEach(t),Qe=n(Yo," for more information."),Yo.forEach(t),Lp=m(Ft),v(Jo.$$.fragment,Ft),Wp=m(Ft),Ki=a(Ft,"P",{});var Sd=i(Ki);Rp=n(Sd,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Sd.forEach(t),Ft.forEach(t),Jd=m(s),io=a(s,"H2",{class:!0});var Na=i(io);Zo=a(Na,"A",{id:!0,class:!0,href:!0});var Dd=i(Zo);Hi=a(Dd,"SPAN",{});var Id=i(Hi);v($s.$$.fragment,Id),Id.forEach(t),Dd.forEach(t),Up=m(Na),Qi=a(Na,"SPAN",{});var Ld=i(Qi);Kp=n(Ld,"MobileBertTokenizer"),Ld.forEach(t),Na.forEach(t),Zd=m(s),Mt=a(s,"DIV",{class:!0});var Kt=i(Mt);v(Fs.$$.fragment,Kt),Hp=m(Kt),Vi=a(Kt,"P",{});var Wd=i(Vi);Qp=n(Wd,"Construct a MobileBERT tokenizer."),Wd.forEach(t),Vp=m(Kt),Xo=a(Kt,"P",{});var gs=i(Xo);Da=a(gs,"A",{href:!0});var Rd=i(Da);Gp=n(Rd,"MobileBertTokenizer"),Rd.forEach(t),Yp=n(gs," is identical to "),Ia=a(gs,"A",{href:!0});var Ud=i(Ia);Jp=n(Ud,"BertTokenizer"),Ud.forEach(t),Zp=n(gs,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),gs.forEach(t),Xp=m(Kt),Bs=a(Kt,"P",{});var Oa=i(Bs);eh=n(Oa,"Refer to superclass "),La=a(Oa,"A",{href:!0});var Kd=i(La);th=n(Kd,"BertTokenizer"),Kd.forEach(t),oh=n(Oa," for usage examples and documentation concerning parameters."),Oa.forEach(t),Kt.forEach(t),Xd=m(s),lo=a(s,"H2",{class:!0});var Aa=i(lo);en=a(Aa,"A",{id:!0,class:!0,href:!0});var Hd=i(en);Gi=a(Hd,"SPAN",{});var Qd=i(Gi);v(Es.$$.fragment,Qd),Qd.forEach(t),Hd.forEach(t),nh=m(Aa),Yi=a(Aa,"SPAN",{});var Vd=i(Yi);sh=n(Vd,"MobileBertTokenizerFast"),Vd.forEach(t),Aa.forEach(t),ec=m(s),$t=a(s,"DIV",{class:!0});var Ht=i($t);v(xs.$$.fragment,Ht),rh=m(Ht),zs=a(Ht,"P",{});var Sa=i(zs);ah=n(Sa,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ji=a(Sa,"EM",{});var Gd=i(Ji);ih=n(Gd,"tokenizers"),Gd.forEach(t),lh=n(Sa," library)."),Sa.forEach(t),dh=m(Ht),tn=a(Ht,"P",{});var Yd=i(tn);Wa=a(Yd,"A",{href:!0});var Pk=i(Wa);ch=n(Pk,"MobileBertTokenizerFast"),Pk.forEach(t),ph=n(Yd," is identical to "),Ra=a(Yd,"A",{href:!0});var jk=i(Ra);hh=n(jk,"BertTokenizerFast"),jk.forEach(t),mh=n(Yd,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Yd.forEach(t),uh=m(Ht),Ps=a(Ht,"P",{});var Ac=i(Ps);fh=n(Ac,"Refer to superclass "),Ua=a(Ac,"A",{href:!0});var Ck=i(Ua);gh=n(Ck,"BertTokenizerFast"),Ck.forEach(t),_h=n(Ac," for usage examples and documentation concerning parameters."),Ac.forEach(t),Ht.forEach(t),tc=m(s),co=a(s,"H2",{class:!0});var Sc=i(co);on=a(Sc,"A",{id:!0,class:!0,href:!0});var qk=i(on);Zi=a(qk,"SPAN",{});var Nk=i(Zi);v(js.$$.fragment,Nk),Nk.forEach(t),qk.forEach(t),bh=m(Sc),Xi=a(Sc,"SPAN",{});var Ok=i(Xi);kh=n(Ok,"MobileBert specific outputs"),Ok.forEach(t),Sc.forEach(t),oc=m(s),po=a(s,"DIV",{class:!0});var Dc=i(po);v(Cs.$$.fragment,Dc),Th=m(Dc),qs=a(Dc,"P",{});var Ic=i(qs);yh=n(Ic,"Output type of "),Ka=a(Ic,"A",{href:!0});var Ak=i(Ka);wh=n(Ak,"MobileBertForPreTraining"),Ak.forEach(t),vh=n(Ic,"."),Ic.forEach(t),Dc.forEach(t),nc=m(s),ho=a(s,"DIV",{class:!0});var Lc=i(ho);v(Ns.$$.fragment,Lc),Mh=m(Lc),Os=a(Lc,"P",{});var Wc=i(Os);$h=n(Wc,"Output type of "),Ha=a(Wc,"A",{href:!0});var Sk=i(Ha);Fh=n(Sk,"TFMobileBertForPreTraining"),Sk.forEach(t),Bh=n(Wc,"."),Wc.forEach(t),Lc.forEach(t),sc=m(s),mo=a(s,"H2",{class:!0});var Rc=i(mo);nn=a(Rc,"A",{id:!0,class:!0,href:!0});var Dk=i(nn);el=a(Dk,"SPAN",{});var Ik=i(el);v(As.$$.fragment,Ik),Ik.forEach(t),Dk.forEach(t),Eh=m(Rc),tl=a(Rc,"SPAN",{});var Lk=i(tl);xh=n(Lk,"MobileBertModel"),Lk.forEach(t),Rc.forEach(t),rc=m(s),et=a(s,"DIV",{class:!0});var Nt=i(et);v(Ss.$$.fragment,Nt),zh=m(Nt),ol=a(Nt,"P",{});var Wk=i(ol);Ph=n(Wk,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Wk.forEach(t),jh=m(Nt),Ds=a(Nt,"P",{});var Uc=i(Ds);Ch=n(Uc,"This model inherits from "),Qa=a(Uc,"A",{href:!0});var Rk=i(Qa);qh=n(Rk,"PreTrainedModel"),Rk.forEach(t),Nh=n(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Oh=m(Nt),Is=a(Nt,"P",{});var Kc=i(Is);Ah=n(Kc,"This model is also a PyTorch "),Ls=a(Kc,"A",{href:!0,rel:!0});var Uk=i(Ls);Sh=n(Uk,"torch.nn.Module"),Uk.forEach(t),Dh=n(Kc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc.forEach(t),Ih=m(Nt),nl=a(Nt,"P",{});var Kk=i(nl);Ws=a(Kk,"A",{href:!0,rel:!0});var Hk=i(Ws);Lh=n(Hk,"https://arxiv.org/pdf/2004.02984.pdf"),Hk.forEach(t),Kk.forEach(t),Wh=m(Nt),Bt=a(Nt,"DIV",{class:!0});var _s=i(Bt);v(Rs.$$.fragment,_s),Rh=m(_s),uo=a(_s,"P",{});var $i=i(uo);Uh=n($i,"The "),Va=a($i,"A",{href:!0});var Qk=i(Va);Kh=n(Qk,"MobileBertModel"),Qk.forEach(t),Hh=n($i," forward method, overrides the "),sl=a($i,"CODE",{});var Vk=i(sl);Qh=n(Vk,"__call__"),Vk.forEach(t),Vh=n($i," special method."),$i.forEach(t),Gh=m(_s),v(sn.$$.fragment,_s),Yh=m(_s),v(rn.$$.fragment,_s),_s.forEach(t),Nt.forEach(t),ac=m(s),fo=a(s,"H2",{class:!0});var Hc=i(fo);an=a(Hc,"A",{id:!0,class:!0,href:!0});var Gk=i(an);rl=a(Gk,"SPAN",{});var Yk=i(rl);v(Us.$$.fragment,Yk),Yk.forEach(t),Gk.forEach(t),Jh=m(Hc),al=a(Hc,"SPAN",{});var Jk=i(al);Zh=n(Jk,"MobileBertForPreTraining"),Jk.forEach(t),Hc.forEach(t),ic=m(s),dt=a(s,"DIV",{class:!0});var Qt=i(dt);v(Ks.$$.fragment,Qt),Xh=m(Qt),go=a(Qt,"P",{});var Fi=i(go);em=n(Fi,"MobileBert Model with two heads on top as done during the pretraining: a "),il=a(Fi,"CODE",{});var Zk=i(il);tm=n(Zk,"masked language modeling"),Zk.forEach(t),om=n(Fi,` head and a
`),ll=a(Fi,"CODE",{});var Xk=i(ll);nm=n(Xk,"next sentence prediction (classification)"),Xk.forEach(t),sm=n(Fi," head."),Fi.forEach(t),rm=m(Qt),Hs=a(Qt,"P",{});var Qc=i(Hs);am=n(Qc,"This model inherits from "),Ga=a(Qc,"A",{href:!0});var eT=i(Ga);im=n(eT,"PreTrainedModel"),eT.forEach(t),lm=n(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(t),dm=m(Qt),Qs=a(Qt,"P",{});var Vc=i(Qs);cm=n(Vc,"This model is also a PyTorch "),Vs=a(Vc,"A",{href:!0,rel:!0});var tT=i(Vs);pm=n(tT,"torch.nn.Module"),tT.forEach(t),hm=n(Vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vc.forEach(t),mm=m(Qt),Et=a(Qt,"DIV",{class:!0});var bs=i(Et);v(Gs.$$.fragment,bs),um=m(bs),_o=a(bs,"P",{});var Bi=i(_o);fm=n(Bi,"The "),Ya=a(Bi,"A",{href:!0});var oT=i(Ya);gm=n(oT,"MobileBertForPreTraining"),oT.forEach(t),_m=n(Bi," forward method, overrides the "),dl=a(Bi,"CODE",{});var nT=i(dl);bm=n(nT,"__call__"),nT.forEach(t),km=n(Bi," special method."),Bi.forEach(t),Tm=m(bs),v(ln.$$.fragment,bs),ym=m(bs),v(dn.$$.fragment,bs),bs.forEach(t),Qt.forEach(t),lc=m(s),bo=a(s,"H2",{class:!0});var Gc=i(bo);cn=a(Gc,"A",{id:!0,class:!0,href:!0});var sT=i(cn);cl=a(sT,"SPAN",{});var rT=i(cl);v(Ys.$$.fragment,rT),rT.forEach(t),sT.forEach(t),wm=m(Gc),pl=a(Gc,"SPAN",{});var aT=i(pl);vm=n(aT,"MobileBertForMaskedLM"),aT.forEach(t),Gc.forEach(t),dc=m(s),ct=a(s,"DIV",{class:!0});var Vt=i(ct);v(Js.$$.fragment,Vt),Mm=m(Vt),Zs=a(Vt,"P",{});var Yc=i(Zs);$m=n(Yc,"MobileBert Model with a "),hl=a(Yc,"CODE",{});var iT=i(hl);Fm=n(iT,"language modeling"),iT.forEach(t),Bm=n(Yc," head on top."),Yc.forEach(t),Em=m(Vt),Xs=a(Vt,"P",{});var Jc=i(Xs);xm=n(Jc,"This model inherits from "),Ja=a(Jc,"A",{href:!0});var lT=i(Ja);zm=n(lT,"PreTrainedModel"),lT.forEach(t),Pm=n(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),jm=m(Vt),er=a(Vt,"P",{});var Zc=i(er);Cm=n(Zc,"This model is also a PyTorch "),tr=a(Zc,"A",{href:!0,rel:!0});var dT=i(tr);qm=n(dT,"torch.nn.Module"),dT.forEach(t),Nm=n(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Om=m(Vt),gt=a(Vt,"DIV",{class:!0});var Gt=i(gt);v(or.$$.fragment,Gt),Am=m(Gt),ko=a(Gt,"P",{});var Ei=i(ko);Sm=n(Ei,"The "),Za=a(Ei,"A",{href:!0});var cT=i(Za);Dm=n(cT,"MobileBertForMaskedLM"),cT.forEach(t),Im=n(Ei," forward method, overrides the "),ml=a(Ei,"CODE",{});var pT=i(ml);Lm=n(pT,"__call__"),pT.forEach(t),Wm=n(Ei," special method."),Ei.forEach(t),Rm=m(Gt),v(pn.$$.fragment,Gt),Um=m(Gt),v(hn.$$.fragment,Gt),Km=m(Gt),v(mn.$$.fragment,Gt),Gt.forEach(t),Vt.forEach(t),cc=m(s),To=a(s,"H2",{class:!0});var Xc=i(To);un=a(Xc,"A",{id:!0,class:!0,href:!0});var hT=i(un);ul=a(hT,"SPAN",{});var mT=i(ul);v(nr.$$.fragment,mT),mT.forEach(t),hT.forEach(t),Hm=m(Xc),fl=a(Xc,"SPAN",{});var uT=i(fl);Qm=n(uT,"MobileBertForNextSentencePrediction"),uT.forEach(t),Xc.forEach(t),pc=m(s),pt=a(s,"DIV",{class:!0});var Yt=i(pt);v(sr.$$.fragment,Yt),Vm=m(Yt),rr=a(Yt,"P",{});var ep=i(rr);Gm=n(ep,"MobileBert Model with a "),gl=a(ep,"CODE",{});var fT=i(gl);Ym=n(fT,"next sentence prediction (classification)"),fT.forEach(t),Jm=n(ep," head on top."),ep.forEach(t),Zm=m(Yt),ar=a(Yt,"P",{});var tp=i(ar);Xm=n(tp,"This model inherits from "),Xa=a(tp,"A",{href:!0});var gT=i(Xa);eu=n(gT,"PreTrainedModel"),gT.forEach(t),tu=n(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),ou=m(Yt),ir=a(Yt,"P",{});var op=i(ir);nu=n(op,"This model is also a PyTorch "),lr=a(op,"A",{href:!0,rel:!0});var _T=i(lr);su=n(_T,"torch.nn.Module"),_T.forEach(t),ru=n(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(t),au=m(Yt),xt=a(Yt,"DIV",{class:!0});var ks=i(xt);v(dr.$$.fragment,ks),iu=m(ks),yo=a(ks,"P",{});var xi=i(yo);lu=n(xi,"The "),ei=a(xi,"A",{href:!0});var bT=i(ei);du=n(bT,"MobileBertForNextSentencePrediction"),bT.forEach(t),cu=n(xi," forward method, overrides the "),_l=a(xi,"CODE",{});var kT=i(_l);pu=n(kT,"__call__"),kT.forEach(t),hu=n(xi," special method."),xi.forEach(t),mu=m(ks),v(fn.$$.fragment,ks),uu=m(ks),v(gn.$$.fragment,ks),ks.forEach(t),Yt.forEach(t),hc=m(s),wo=a(s,"H2",{class:!0});var np=i(wo);_n=a(np,"A",{id:!0,class:!0,href:!0});var TT=i(_n);bl=a(TT,"SPAN",{});var yT=i(bl);v(cr.$$.fragment,yT),yT.forEach(t),TT.forEach(t),fu=m(np),kl=a(np,"SPAN",{});var wT=i(kl);gu=n(wT,"MobileBertForSequenceClassification"),wT.forEach(t),np.forEach(t),mc=m(s),ht=a(s,"DIV",{class:!0});var Jt=i(ht);v(pr.$$.fragment,Jt),_u=m(Jt),Tl=a(Jt,"P",{});var vT=i(Tl);bu=n(vT,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vT.forEach(t),ku=m(Jt),hr=a(Jt,"P",{});var sp=i(hr);Tu=n(sp,"This model inherits from "),ti=a(sp,"A",{href:!0});var MT=i(ti);yu=n(MT,"PreTrainedModel"),MT.forEach(t),wu=n(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),vu=m(Jt),mr=a(Jt,"P",{});var rp=i(mr);Mu=n(rp,"This model is also a PyTorch "),ur=a(rp,"A",{href:!0,rel:!0});var $T=i(ur);$u=n($T,"torch.nn.Module"),$T.forEach(t),Fu=n(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(t),Bu=m(Jt),Xe=a(Jt,"DIV",{class:!0});var vt=i(Xe);v(fr.$$.fragment,vt),Eu=m(vt),vo=a(vt,"P",{});var zi=i(vo);xu=n(zi,"The "),oi=a(zi,"A",{href:!0});var FT=i(oi);zu=n(FT,"MobileBertForSequenceClassification"),FT.forEach(t),Pu=n(zi," forward method, overrides the "),yl=a(zi,"CODE",{});var BT=i(yl);ju=n(BT,"__call__"),BT.forEach(t),Cu=n(zi," special method."),zi.forEach(t),qu=m(vt),v(bn.$$.fragment,vt),Nu=m(vt),v(kn.$$.fragment,vt),Ou=m(vt),v(Tn.$$.fragment,vt),Au=m(vt),v(yn.$$.fragment,vt),Su=m(vt),v(wn.$$.fragment,vt),vt.forEach(t),Jt.forEach(t),uc=m(s),Mo=a(s,"H2",{class:!0});var ap=i(Mo);vn=a(ap,"A",{id:!0,class:!0,href:!0});var ET=i(vn);wl=a(ET,"SPAN",{});var xT=i(wl);v(gr.$$.fragment,xT),xT.forEach(t),ET.forEach(t),Du=m(ap),vl=a(ap,"SPAN",{});var zT=i(vl);Iu=n(zT,"MobileBertForMultipleChoice"),zT.forEach(t),ap.forEach(t),fc=m(s),mt=a(s,"DIV",{class:!0});var Zt=i(mt);v(_r.$$.fragment,Zt),Lu=m(Zt),Ml=a(Zt,"P",{});var PT=i(Ml);Wu=n(PT,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),PT.forEach(t),Ru=m(Zt),br=a(Zt,"P",{});var ip=i(br);Uu=n(ip,"This model inherits from "),ni=a(ip,"A",{href:!0});var jT=i(ni);Ku=n(jT,"PreTrainedModel"),jT.forEach(t),Hu=n(ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ip.forEach(t),Qu=m(Zt),kr=a(Zt,"P",{});var lp=i(kr);Vu=n(lp,"This model is also a PyTorch "),Tr=a(lp,"A",{href:!0,rel:!0});var CT=i(Tr);Gu=n(CT,"torch.nn.Module"),CT.forEach(t),Yu=n(lp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lp.forEach(t),Ju=m(Zt),zt=a(Zt,"DIV",{class:!0});var Ts=i(zt);v(yr.$$.fragment,Ts),Zu=m(Ts),$o=a(Ts,"P",{});var Pi=i($o);Xu=n(Pi,"The "),si=a(Pi,"A",{href:!0});var qT=i(si);ef=n(qT,"MobileBertForMultipleChoice"),qT.forEach(t),tf=n(Pi," forward method, overrides the "),$l=a(Pi,"CODE",{});var NT=i($l);of=n(NT,"__call__"),NT.forEach(t),nf=n(Pi," special method."),Pi.forEach(t),sf=m(Ts),v(Mn.$$.fragment,Ts),rf=m(Ts),v($n.$$.fragment,Ts),Ts.forEach(t),Zt.forEach(t),gc=m(s),Fo=a(s,"H2",{class:!0});var dp=i(Fo);Fn=a(dp,"A",{id:!0,class:!0,href:!0});var OT=i(Fn);Fl=a(OT,"SPAN",{});var AT=i(Fl);v(wr.$$.fragment,AT),AT.forEach(t),OT.forEach(t),af=m(dp),Bl=a(dp,"SPAN",{});var ST=i(Bl);lf=n(ST,"MobileBertForTokenClassification"),ST.forEach(t),dp.forEach(t),_c=m(s),ut=a(s,"DIV",{class:!0});var Xt=i(ut);v(vr.$$.fragment,Xt),df=m(Xt),El=a(Xt,"P",{});var DT=i(El);cf=n(DT,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),DT.forEach(t),pf=m(Xt),Mr=a(Xt,"P",{});var cp=i(Mr);hf=n(cp,"This model inherits from "),ri=a(cp,"A",{href:!0});var IT=i(ri);mf=n(IT,"PreTrainedModel"),IT.forEach(t),uf=n(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),ff=m(Xt),$r=a(Xt,"P",{});var pp=i($r);gf=n(pp,"This model is also a PyTorch "),Fr=a(pp,"A",{href:!0,rel:!0});var LT=i(Fr);_f=n(LT,"torch.nn.Module"),LT.forEach(t),bf=n(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(t),kf=m(Xt),_t=a(Xt,"DIV",{class:!0});var eo=i(_t);v(Br.$$.fragment,eo),Tf=m(eo),Bo=a(eo,"P",{});var ji=i(Bo);yf=n(ji,"The "),ai=a(ji,"A",{href:!0});var WT=i(ai);wf=n(WT,"MobileBertForTokenClassification"),WT.forEach(t),vf=n(ji," forward method, overrides the "),xl=a(ji,"CODE",{});var RT=i(xl);Mf=n(RT,"__call__"),RT.forEach(t),$f=n(ji," special method."),ji.forEach(t),Ff=m(eo),v(Bn.$$.fragment,eo),Bf=m(eo),v(En.$$.fragment,eo),Ef=m(eo),v(xn.$$.fragment,eo),eo.forEach(t),Xt.forEach(t),bc=m(s),Eo=a(s,"H2",{class:!0});var hp=i(Eo);zn=a(hp,"A",{id:!0,class:!0,href:!0});var UT=i(zn);zl=a(UT,"SPAN",{});var KT=i(zl);v(Er.$$.fragment,KT),KT.forEach(t),UT.forEach(t),xf=m(hp),Pl=a(hp,"SPAN",{});var HT=i(Pl);zf=n(HT,"MobileBertForQuestionAnswering"),HT.forEach(t),hp.forEach(t),kc=m(s),ft=a(s,"DIV",{class:!0});var to=i(ft);v(xr.$$.fragment,to),Pf=m(to),xo=a(to,"P",{});var Ci=i(xo);jf=n(Ci,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),jl=a(Ci,"CODE",{});var QT=i(jl);Cf=n(QT,"span start logits"),QT.forEach(t),qf=n(Ci," and "),Cl=a(Ci,"CODE",{});var VT=i(Cl);Nf=n(VT,"span end logits"),VT.forEach(t),Of=n(Ci,")."),Ci.forEach(t),Af=m(to),zr=a(to,"P",{});var mp=i(zr);Sf=n(mp,"This model inherits from "),ii=a(mp,"A",{href:!0});var GT=i(ii);Df=n(GT,"PreTrainedModel"),GT.forEach(t),If=n(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),Lf=m(to),Pr=a(to,"P",{});var up=i(Pr);Wf=n(up,"This model is also a PyTorch "),jr=a(up,"A",{href:!0,rel:!0});var YT=i(jr);Rf=n(YT,"torch.nn.Module"),YT.forEach(t),Uf=n(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),Kf=m(to),bt=a(to,"DIV",{class:!0});var oo=i(bt);v(Cr.$$.fragment,oo),Hf=m(oo),zo=a(oo,"P",{});var qi=i(zo);Qf=n(qi,"The "),li=a(qi,"A",{href:!0});var JT=i(li);Vf=n(JT,"MobileBertForQuestionAnswering"),JT.forEach(t),Gf=n(qi," forward method, overrides the "),ql=a(qi,"CODE",{});var ZT=i(ql);Yf=n(ZT,"__call__"),ZT.forEach(t),Jf=n(qi," special method."),qi.forEach(t),Zf=m(oo),v(Pn.$$.fragment,oo),Xf=m(oo),v(jn.$$.fragment,oo),eg=m(oo),v(Cn.$$.fragment,oo),oo.forEach(t),to.forEach(t),Tc=m(s),Po=a(s,"H2",{class:!0});var fp=i(Po);qn=a(fp,"A",{id:!0,class:!0,href:!0});var XT=i(qn);Nl=a(XT,"SPAN",{});var ey=i(Nl);v(qr.$$.fragment,ey),ey.forEach(t),XT.forEach(t),tg=m(fp),Ol=a(fp,"SPAN",{});var ty=i(Ol);og=n(ty,"TFMobileBertModel"),ty.forEach(t),fp.forEach(t),yc=m(s),tt=a(s,"DIV",{class:!0});var Ot=i(tt);v(Nr.$$.fragment,Ot),ng=m(Ot),Al=a(Ot,"P",{});var oy=i(Al);sg=n(oy,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),oy.forEach(t),rg=m(Ot),Or=a(Ot,"P",{});var gp=i(Or);ag=n(gp,"This model inherits from "),di=a(gp,"A",{href:!0});var ny=i(di);ig=n(ny,"TFPreTrainedModel"),ny.forEach(t),lg=n(gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp.forEach(t),dg=m(Ot),Ar=a(Ot,"P",{});var _p=i(Ar);cg=n(_p,"This model is also a "),Sr=a(_p,"A",{href:!0,rel:!0});var sy=i(Sr);pg=n(sy,"tf.keras.Model"),sy.forEach(t),hg=n(_p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p.forEach(t),mg=m(Ot),v(Nn.$$.fragment,Ot),ug=m(Ot),Pt=a(Ot,"DIV",{class:!0});var ys=i(Pt);v(Dr.$$.fragment,ys),fg=m(ys),jo=a(ys,"P",{});var Ni=i(jo);gg=n(Ni,"The "),ci=a(Ni,"A",{href:!0});var ry=i(ci);_g=n(ry,"TFMobileBertModel"),ry.forEach(t),bg=n(Ni," forward method, overrides the "),Sl=a(Ni,"CODE",{});var ay=i(Sl);kg=n(ay,"__call__"),ay.forEach(t),Tg=n(Ni," special method."),Ni.forEach(t),yg=m(ys),v(On.$$.fragment,ys),wg=m(ys),v(An.$$.fragment,ys),ys.forEach(t),Ot.forEach(t),wc=m(s),Co=a(s,"H2",{class:!0});var bp=i(Co);Sn=a(bp,"A",{id:!0,class:!0,href:!0});var iy=i(Sn);Dl=a(iy,"SPAN",{});var ly=i(Dl);v(Ir.$$.fragment,ly),ly.forEach(t),iy.forEach(t),vg=m(bp),Il=a(bp,"SPAN",{});var dy=i(Il);Mg=n(dy,"TFMobileBertForPreTraining"),dy.forEach(t),bp.forEach(t),vc=m(s),ot=a(s,"DIV",{class:!0});var At=i(ot);v(Lr.$$.fragment,At),$g=m(At),qo=a(At,"P",{});var Oi=i(qo);Fg=n(Oi,"MobileBert Model with two heads on top as done during the pretraining: a "),Ll=a(Oi,"CODE",{});var cy=i(Ll);Bg=n(cy,"masked language modeling"),cy.forEach(t),Eg=n(Oi,` head and a
`),Wl=a(Oi,"CODE",{});var py=i(Wl);xg=n(py,"next sentence prediction (classification)"),py.forEach(t),zg=n(Oi," head."),Oi.forEach(t),Pg=m(At),Wr=a(At,"P",{});var kp=i(Wr);jg=n(kp,"This model inherits from "),pi=a(kp,"A",{href:!0});var hy=i(pi);Cg=n(hy,"TFPreTrainedModel"),hy.forEach(t),qg=n(kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kp.forEach(t),Ng=m(At),Rr=a(At,"P",{});var Tp=i(Rr);Og=n(Tp,"This model is also a "),Ur=a(Tp,"A",{href:!0,rel:!0});var my=i(Ur);Ag=n(my,"tf.keras.Model"),my.forEach(t),Sg=n(Tp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp.forEach(t),Dg=m(At),v(Dn.$$.fragment,At),Ig=m(At),jt=a(At,"DIV",{class:!0});var ws=i(jt);v(Kr.$$.fragment,ws),Lg=m(ws),No=a(ws,"P",{});var Ai=i(No);Wg=n(Ai,"The "),hi=a(Ai,"A",{href:!0});var uy=i(hi);Rg=n(uy,"TFMobileBertForPreTraining"),uy.forEach(t),Ug=n(Ai," forward method, overrides the "),Rl=a(Ai,"CODE",{});var fy=i(Rl);Kg=n(fy,"__call__"),fy.forEach(t),Hg=n(Ai," special method."),Ai.forEach(t),Qg=m(ws),v(In.$$.fragment,ws),Vg=m(ws),v(Ln.$$.fragment,ws),ws.forEach(t),At.forEach(t),Mc=m(s),Oo=a(s,"H2",{class:!0});var yp=i(Oo);Wn=a(yp,"A",{id:!0,class:!0,href:!0});var gy=i(Wn);Ul=a(gy,"SPAN",{});var _y=i(Ul);v(Hr.$$.fragment,_y),_y.forEach(t),gy.forEach(t),Gg=m(yp),Kl=a(yp,"SPAN",{});var by=i(Kl);Yg=n(by,"TFMobileBertForMaskedLM"),by.forEach(t),yp.forEach(t),$c=m(s),nt=a(s,"DIV",{class:!0});var St=i(nt);v(Qr.$$.fragment,St),Jg=m(St),Vr=a(St,"P",{});var wp=i(Vr);Zg=n(wp,"MobileBert Model with a "),Hl=a(wp,"CODE",{});var ky=i(Hl);Xg=n(ky,"language modeling"),ky.forEach(t),e_=n(wp," head on top."),wp.forEach(t),t_=m(St),Gr=a(St,"P",{});var vp=i(Gr);o_=n(vp,"This model inherits from "),mi=a(vp,"A",{href:!0});var Ty=i(mi);n_=n(Ty,"TFPreTrainedModel"),Ty.forEach(t),s_=n(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),r_=m(St),Yr=a(St,"P",{});var Mp=i(Yr);a_=n(Mp,"This model is also a "),Jr=a(Mp,"A",{href:!0,rel:!0});var yy=i(Jr);i_=n(yy,"tf.keras.Model"),yy.forEach(t),l_=n(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),d_=m(St),v(Rn.$$.fragment,St),c_=m(St),kt=a(St,"DIV",{class:!0});var no=i(kt);v(Zr.$$.fragment,no),p_=m(no),Ao=a(no,"P",{});var Si=i(Ao);h_=n(Si,"The "),ui=a(Si,"A",{href:!0});var wy=i(ui);m_=n(wy,"TFMobileBertForMaskedLM"),wy.forEach(t),u_=n(Si," forward method, overrides the "),Ql=a(Si,"CODE",{});var vy=i(Ql);f_=n(vy,"__call__"),vy.forEach(t),g_=n(Si," special method."),Si.forEach(t),__=m(no),v(Un.$$.fragment,no),b_=m(no),v(Kn.$$.fragment,no),k_=m(no),v(Hn.$$.fragment,no),no.forEach(t),St.forEach(t),Fc=m(s),So=a(s,"H2",{class:!0});var $p=i(So);Qn=a($p,"A",{id:!0,class:!0,href:!0});var My=i(Qn);Vl=a(My,"SPAN",{});var $y=i(Vl);v(Xr.$$.fragment,$y),$y.forEach(t),My.forEach(t),T_=m($p),Gl=a($p,"SPAN",{});var Fy=i(Gl);y_=n(Fy,"TFMobileBertForNextSentencePrediction"),Fy.forEach(t),$p.forEach(t),Bc=m(s),st=a(s,"DIV",{class:!0});var Dt=i(st);v(ea.$$.fragment,Dt),w_=m(Dt),ta=a(Dt,"P",{});var Fp=i(ta);v_=n(Fp,"MobileBert Model with a "),Yl=a(Fp,"CODE",{});var By=i(Yl);M_=n(By,"next sentence prediction (classification)"),By.forEach(t),$_=n(Fp," head on top."),Fp.forEach(t),F_=m(Dt),oa=a(Dt,"P",{});var Bp=i(oa);B_=n(Bp,"This model inherits from "),fi=a(Bp,"A",{href:!0});var Ey=i(fi);E_=n(Ey,"TFPreTrainedModel"),Ey.forEach(t),x_=n(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),z_=m(Dt),na=a(Dt,"P",{});var Ep=i(na);P_=n(Ep,"This model is also a "),sa=a(Ep,"A",{href:!0,rel:!0});var xy=i(sa);j_=n(xy,"tf.keras.Model"),xy.forEach(t),C_=n(Ep,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep.forEach(t),q_=m(Dt),v(Vn.$$.fragment,Dt),N_=m(Dt),Ct=a(Dt,"DIV",{class:!0});var vs=i(Ct);v(ra.$$.fragment,vs),O_=m(vs),Do=a(vs,"P",{});var Di=i(Do);A_=n(Di,"The "),gi=a(Di,"A",{href:!0});var zy=i(gi);S_=n(zy,"TFMobileBertForNextSentencePrediction"),zy.forEach(t),D_=n(Di," forward method, overrides the "),Jl=a(Di,"CODE",{});var Py=i(Jl);I_=n(Py,"__call__"),Py.forEach(t),L_=n(Di," special method."),Di.forEach(t),W_=m(vs),v(Gn.$$.fragment,vs),R_=m(vs),v(Yn.$$.fragment,vs),vs.forEach(t),Dt.forEach(t),Ec=m(s),Io=a(s,"H2",{class:!0});var xp=i(Io);Jn=a(xp,"A",{id:!0,class:!0,href:!0});var jy=i(Jn);Zl=a(jy,"SPAN",{});var Cy=i(Zl);v(aa.$$.fragment,Cy),Cy.forEach(t),jy.forEach(t),U_=m(xp),Xl=a(xp,"SPAN",{});var qy=i(Xl);K_=n(qy,"TFMobileBertForSequenceClassification"),qy.forEach(t),xp.forEach(t),xc=m(s),rt=a(s,"DIV",{class:!0});var It=i(rt);v(ia.$$.fragment,It),H_=m(It),ed=a(It,"P",{});var Ny=i(ed);Q_=n(Ny,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ny.forEach(t),V_=m(It),la=a(It,"P",{});var zp=i(la);G_=n(zp,"This model inherits from "),_i=a(zp,"A",{href:!0});var Oy=i(_i);Y_=n(Oy,"TFPreTrainedModel"),Oy.forEach(t),J_=n(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),Z_=m(It),da=a(It,"P",{});var Pp=i(da);X_=n(Pp,"This model is also a "),ca=a(Pp,"A",{href:!0,rel:!0});var Ay=i(ca);eb=n(Ay,"tf.keras.Model"),Ay.forEach(t),tb=n(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),ob=m(It),v(Zn.$$.fragment,It),nb=m(It),Tt=a(It,"DIV",{class:!0});var so=i(Tt);v(pa.$$.fragment,so),sb=m(so),Lo=a(so,"P",{});var Ii=i(Lo);rb=n(Ii,"The "),bi=a(Ii,"A",{href:!0});var Sy=i(bi);ab=n(Sy,"TFMobileBertForSequenceClassification"),Sy.forEach(t),ib=n(Ii," forward method, overrides the "),td=a(Ii,"CODE",{});var Dy=i(td);lb=n(Dy,"__call__"),Dy.forEach(t),db=n(Ii," special method."),Ii.forEach(t),cb=m(so),v(Xn.$$.fragment,so),pb=m(so),v(es.$$.fragment,so),hb=m(so),v(ts.$$.fragment,so),so.forEach(t),It.forEach(t),zc=m(s),Wo=a(s,"H2",{class:!0});var jp=i(Wo);os=a(jp,"A",{id:!0,class:!0,href:!0});var Iy=i(os);od=a(Iy,"SPAN",{});var Ly=i(od);v(ha.$$.fragment,Ly),Ly.forEach(t),Iy.forEach(t),mb=m(jp),nd=a(jp,"SPAN",{});var Wy=i(nd);ub=n(Wy,"TFMobileBertForMultipleChoice"),Wy.forEach(t),jp.forEach(t),Pc=m(s),at=a(s,"DIV",{class:!0});var Lt=i(at);v(ma.$$.fragment,Lt),fb=m(Lt),sd=a(Lt,"P",{});var Ry=i(sd);gb=n(Ry,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ry.forEach(t),_b=m(Lt),ua=a(Lt,"P",{});var Cp=i(ua);bb=n(Cp,"This model inherits from "),ki=a(Cp,"A",{href:!0});var Uy=i(ki);kb=n(Uy,"TFPreTrainedModel"),Uy.forEach(t),Tb=n(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(t),yb=m(Lt),fa=a(Lt,"P",{});var qp=i(fa);wb=n(qp,"This model is also a "),ga=a(qp,"A",{href:!0,rel:!0});var Ky=i(ga);vb=n(Ky,"tf.keras.Model"),Ky.forEach(t),Mb=n(qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qp.forEach(t),$b=m(Lt),v(ns.$$.fragment,Lt),Fb=m(Lt),qt=a(Lt,"DIV",{class:!0});var Ms=i(qt);v(_a.$$.fragment,Ms),Bb=m(Ms),Ro=a(Ms,"P",{});var Li=i(Ro);Eb=n(Li,"The "),Ti=a(Li,"A",{href:!0});var Hy=i(Ti);xb=n(Hy,"TFMobileBertForMultipleChoice"),Hy.forEach(t),zb=n(Li," forward method, overrides the "),rd=a(Li,"CODE",{});var Qy=i(rd);Pb=n(Qy,"__call__"),Qy.forEach(t),jb=n(Li," special method."),Li.forEach(t),Cb=m(Ms),v(ss.$$.fragment,Ms),qb=m(Ms),v(rs.$$.fragment,Ms),Ms.forEach(t),Lt.forEach(t),jc=m(s),Uo=a(s,"H2",{class:!0});var Np=i(Uo);as=a(Np,"A",{id:!0,class:!0,href:!0});var Vy=i(as);ad=a(Vy,"SPAN",{});var Gy=i(ad);v(ba.$$.fragment,Gy),Gy.forEach(t),Vy.forEach(t),Nb=m(Np),id=a(Np,"SPAN",{});var Yy=i(id);Ob=n(Yy,"TFMobileBertForTokenClassification"),Yy.forEach(t),Np.forEach(t),Cc=m(s),it=a(s,"DIV",{class:!0});var Wt=i(it);v(ka.$$.fragment,Wt),Ab=m(Wt),ld=a(Wt,"P",{});var Jy=i(ld);Sb=n(Jy,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Jy.forEach(t),Db=m(Wt),Ta=a(Wt,"P",{});var Op=i(Ta);Ib=n(Op,"This model inherits from "),yi=a(Op,"A",{href:!0});var Zy=i(yi);Lb=n(Zy,"TFPreTrainedModel"),Zy.forEach(t),Wb=n(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),Rb=m(Wt),ya=a(Wt,"P",{});var Ap=i(ya);Ub=n(Ap,"This model is also a "),wa=a(Ap,"A",{href:!0,rel:!0});var Xy=i(wa);Kb=n(Xy,"tf.keras.Model"),Xy.forEach(t),Hb=n(Ap,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),Qb=m(Wt),v(is.$$.fragment,Wt),Vb=m(Wt),yt=a(Wt,"DIV",{class:!0});var ro=i(yt);v(va.$$.fragment,ro),Gb=m(ro),Ko=a(ro,"P",{});var Wi=i(Ko);Yb=n(Wi,"The "),wi=a(Wi,"A",{href:!0});var ew=i(wi);Jb=n(ew,"TFMobileBertForTokenClassification"),ew.forEach(t),Zb=n(Wi," forward method, overrides the "),dd=a(Wi,"CODE",{});var tw=i(dd);Xb=n(tw,"__call__"),tw.forEach(t),ek=n(Wi," special method."),Wi.forEach(t),tk=m(ro),v(ls.$$.fragment,ro),ok=m(ro),v(ds.$$.fragment,ro),nk=m(ro),v(cs.$$.fragment,ro),ro.forEach(t),Wt.forEach(t),qc=m(s),Ho=a(s,"H2",{class:!0});var Sp=i(Ho);ps=a(Sp,"A",{id:!0,class:!0,href:!0});var ow=i(ps);cd=a(ow,"SPAN",{});var nw=i(cd);v(Ma.$$.fragment,nw),nw.forEach(t),ow.forEach(t),sk=m(Sp),pd=a(Sp,"SPAN",{});var sw=i(pd);rk=n(sw,"TFMobileBertForQuestionAnswering"),sw.forEach(t),Sp.forEach(t),Nc=m(s),lt=a(s,"DIV",{class:!0});var Rt=i(lt);v($a.$$.fragment,Rt),ak=m(Rt),Qo=a(Rt,"P",{});var Ri=i(Qo);ik=n(Ri,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),hd=a(Ri,"CODE",{});var rw=i(hd);lk=n(rw,"span start logits"),rw.forEach(t),dk=n(Ri," and "),md=a(Ri,"CODE",{});var aw=i(md);ck=n(aw,"span end logits"),aw.forEach(t),pk=n(Ri,")."),Ri.forEach(t),hk=m(Rt),Fa=a(Rt,"P",{});var Dp=i(Fa);mk=n(Dp,"This model inherits from "),vi=a(Dp,"A",{href:!0});var iw=i(vi);uk=n(iw,"TFPreTrainedModel"),iw.forEach(t),fk=n(Dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp.forEach(t),gk=m(Rt),Ba=a(Rt,"P",{});var Ip=i(Ba);_k=n(Ip,"This model is also a "),Ea=a(Ip,"A",{href:!0,rel:!0});var lw=i(Ea);bk=n(lw,"tf.keras.Model"),lw.forEach(t),kk=n(Ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ip.forEach(t),Tk=m(Rt),v(hs.$$.fragment,Rt),yk=m(Rt),wt=a(Rt,"DIV",{class:!0});var ao=i(wt);v(xa.$$.fragment,ao),wk=m(ao),Vo=a(ao,"P",{});var Ui=i(Vo);vk=n(Ui,"The "),Mi=a(Ui,"A",{href:!0});var dw=i(Mi);Mk=n(dw,"TFMobileBertForQuestionAnswering"),dw.forEach(t),$k=n(Ui," forward method, overrides the "),ud=a(Ui,"CODE",{});var cw=i(ud);Fk=n(cw,"__call__"),cw.forEach(t),Bk=n(Ui," special method."),Ui.forEach(t),Ek=m(ao),v(ms.$$.fragment,ao),xk=m(ao),v(us.$$.fragment,ao),zk=m(ao),v(fs.$$.fragment,ao),ao.forEach(t),Rt.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(uv)),g(u,"id","mobilebert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#mobilebert"),g(c,"class","relative group"),g(se,"id","overview"),g(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(se,"href","#overview"),g(D,"class","relative group"),g(ae,"href","https://arxiv.org/abs/2004.02984"),g(ae,"rel","nofollow"),g(ie,"href","https://huggingface.co/vshampor"),g(ie,"rel","nofollow"),g(le,"href","https://github.com/google-research/mobilebert"),g(le,"rel","nofollow"),g(re,"id","transformers.MobileBertConfig"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#transformers.MobileBertConfig"),g(I,"class","relative group"),g(Oe,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),g(Ae,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Ne,"href","https://huggingface.co/google/mobilebert-uncased"),g(Ne,"rel","nofollow"),g(Se,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(De,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Zo,"id","transformers.MobileBertTokenizer"),g(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Zo,"href","#transformers.MobileBertTokenizer"),g(io,"class","relative group"),g(Da,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),g(Ia,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),g(La,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.MobileBertTokenizerFast"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.MobileBertTokenizerFast"),g(lo,"class","relative group"),g(Wa,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),g(Ra,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),g(Ua,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(on,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(on,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(co,"class","relative group"),g(Ka,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ha,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nn,"id","transformers.MobileBertModel"),g(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nn,"href","#transformers.MobileBertModel"),g(mo,"class","relative group"),g(Qa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ls,"rel","nofollow"),g(Ws,"href","https://arxiv.org/pdf/2004.02984.pdf"),g(Ws,"rel","nofollow"),g(Va,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),g(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(an,"id","transformers.MobileBertForPreTraining"),g(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(an,"href","#transformers.MobileBertForPreTraining"),g(fo,"class","relative group"),g(Ga,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Vs,"rel","nofollow"),g(Ya,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(cn,"id","transformers.MobileBertForMaskedLM"),g(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(cn,"href","#transformers.MobileBertForMaskedLM"),g(bo,"class","relative group"),g(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(tr,"rel","nofollow"),g(Za,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.MobileBertForNextSentencePrediction"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.MobileBertForNextSentencePrediction"),g(To,"class","relative group"),g(Xa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(lr,"rel","nofollow"),g(ei,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_n,"id","transformers.MobileBertForSequenceClassification"),g(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_n,"href","#transformers.MobileBertForSequenceClassification"),g(wo,"class","relative group"),g(ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ur,"rel","nofollow"),g(oi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vn,"id","transformers.MobileBertForMultipleChoice"),g(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(vn,"href","#transformers.MobileBertForMultipleChoice"),g(Mo,"class","relative group"),g(ni,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Tr,"rel","nofollow"),g(si,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fn,"id","transformers.MobileBertForTokenClassification"),g(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Fn,"href","#transformers.MobileBertForTokenClassification"),g(Fo,"class","relative group"),g(ri,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fr,"rel","nofollow"),g(ai,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zn,"id","transformers.MobileBertForQuestionAnswering"),g(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zn,"href","#transformers.MobileBertForQuestionAnswering"),g(Eo,"class","relative group"),g(ii,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(jr,"rel","nofollow"),g(li,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qn,"id","transformers.TFMobileBertModel"),g(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(qn,"href","#transformers.TFMobileBertModel"),g(Po,"class","relative group"),g(di,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Sr,"rel","nofollow"),g(ci,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Sn,"id","transformers.TFMobileBertForPreTraining"),g(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Sn,"href","#transformers.TFMobileBertForPreTraining"),g(Co,"class","relative group"),g(pi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ur,"rel","nofollow"),g(hi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wn,"id","transformers.TFMobileBertForMaskedLM"),g(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wn,"href","#transformers.TFMobileBertForMaskedLM"),g(Oo,"class","relative group"),g(mi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Jr,"rel","nofollow"),g(ui,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qn,"id","transformers.TFMobileBertForNextSentencePrediction"),g(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qn,"href","#transformers.TFMobileBertForNextSentencePrediction"),g(So,"class","relative group"),g(fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(sa,"rel","nofollow"),g(gi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),g(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jn,"id","transformers.TFMobileBertForSequenceClassification"),g(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Jn,"href","#transformers.TFMobileBertForSequenceClassification"),g(Io,"class","relative group"),g(_i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ca,"rel","nofollow"),g(bi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(os,"id","transformers.TFMobileBertForMultipleChoice"),g(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(os,"href","#transformers.TFMobileBertForMultipleChoice"),g(Wo,"class","relative group"),g(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ga,"rel","nofollow"),g(Ti,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(as,"id","transformers.TFMobileBertForTokenClassification"),g(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(as,"href","#transformers.TFMobileBertForTokenClassification"),g(Uo,"class","relative group"),g(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(wa,"rel","nofollow"),g(wi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ps,"id","transformers.TFMobileBertForQuestionAnswering"),g(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ps,"href","#transformers.TFMobileBertForQuestionAnswering"),g(Ho,"class","relative group"),g(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ea,"rel","nofollow"),g(Mi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),_(s,b,k),_(s,c,k),e(c,u),e(u,T),M(l,T,null),e(c,p),e(c,P),e(P,Te),_(s,me,k),_(s,D,k),e(D,se),e(se,X),M(y,X,null),e(D,ye),e(D,K),e(K,we),_(s,ue,k),_(s,L,k),e(L,ve),e(L,ae),e(ae,H),e(L,Me),_(s,fe,k),_(s,R,k),e(R,$e),_(s,ge,k),_(s,U,k),e(U,de),e(de,Fe),_(s,te,k),_(s,j,k),e(j,N),_(s,_e,k),_(s,W,k),e(W,ce),e(ce,Be),e(W,Q),e(W,pe),e(pe,Ee),_(s,q,k),_(s,ne,k),e(ne,V),e(ne,ie),e(ie,xe),e(ne,G),e(ne,le),e(le,ze),e(ne,A),_(s,be,k),_(s,I,k),e(I,re),e(re,ee),M(C,ee,null),e(I,Pe),e(I,O),e(O,je),_(s,ke,k),_(s,f,k),M(E,f,null),e(f,Ie),e(f,Y),e(Y,Le),e(Y,Oe),e(Oe,x),e(Y,We),e(Y,Ae),e(Ae,Re),e(Y,Ue),e(Y,Ne),e(Ne,S),e(Y,J),e(f,Ke),e(f,qe),e(qe,Z),e(qe,Se),e(Se,He),e(qe,Ce),e(qe,De),e(De,oe),e(qe,Qe),e(f,Lp),M(Jo,f,null),e(f,Wp),e(f,Ki),e(Ki,Rp),_(s,Jd,k),_(s,io,k),e(io,Zo),e(Zo,Hi),M($s,Hi,null),e(io,Up),e(io,Qi),e(Qi,Kp),_(s,Zd,k),_(s,Mt,k),M(Fs,Mt,null),e(Mt,Hp),e(Mt,Vi),e(Vi,Qp),e(Mt,Vp),e(Mt,Xo),e(Xo,Da),e(Da,Gp),e(Xo,Yp),e(Xo,Ia),e(Ia,Jp),e(Xo,Zp),e(Mt,Xp),e(Mt,Bs),e(Bs,eh),e(Bs,La),e(La,th),e(Bs,oh),_(s,Xd,k),_(s,lo,k),e(lo,en),e(en,Gi),M(Es,Gi,null),e(lo,nh),e(lo,Yi),e(Yi,sh),_(s,ec,k),_(s,$t,k),M(xs,$t,null),e($t,rh),e($t,zs),e(zs,ah),e(zs,Ji),e(Ji,ih),e(zs,lh),e($t,dh),e($t,tn),e(tn,Wa),e(Wa,ch),e(tn,ph),e(tn,Ra),e(Ra,hh),e(tn,mh),e($t,uh),e($t,Ps),e(Ps,fh),e(Ps,Ua),e(Ua,gh),e(Ps,_h),_(s,tc,k),_(s,co,k),e(co,on),e(on,Zi),M(js,Zi,null),e(co,bh),e(co,Xi),e(Xi,kh),_(s,oc,k),_(s,po,k),M(Cs,po,null),e(po,Th),e(po,qs),e(qs,yh),e(qs,Ka),e(Ka,wh),e(qs,vh),_(s,nc,k),_(s,ho,k),M(Ns,ho,null),e(ho,Mh),e(ho,Os),e(Os,$h),e(Os,Ha),e(Ha,Fh),e(Os,Bh),_(s,sc,k),_(s,mo,k),e(mo,nn),e(nn,el),M(As,el,null),e(mo,Eh),e(mo,tl),e(tl,xh),_(s,rc,k),_(s,et,k),M(Ss,et,null),e(et,zh),e(et,ol),e(ol,Ph),e(et,jh),e(et,Ds),e(Ds,Ch),e(Ds,Qa),e(Qa,qh),e(Ds,Nh),e(et,Oh),e(et,Is),e(Is,Ah),e(Is,Ls),e(Ls,Sh),e(Is,Dh),e(et,Ih),e(et,nl),e(nl,Ws),e(Ws,Lh),e(et,Wh),e(et,Bt),M(Rs,Bt,null),e(Bt,Rh),e(Bt,uo),e(uo,Uh),e(uo,Va),e(Va,Kh),e(uo,Hh),e(uo,sl),e(sl,Qh),e(uo,Vh),e(Bt,Gh),M(sn,Bt,null),e(Bt,Yh),M(rn,Bt,null),_(s,ac,k),_(s,fo,k),e(fo,an),e(an,rl),M(Us,rl,null),e(fo,Jh),e(fo,al),e(al,Zh),_(s,ic,k),_(s,dt,k),M(Ks,dt,null),e(dt,Xh),e(dt,go),e(go,em),e(go,il),e(il,tm),e(go,om),e(go,ll),e(ll,nm),e(go,sm),e(dt,rm),e(dt,Hs),e(Hs,am),e(Hs,Ga),e(Ga,im),e(Hs,lm),e(dt,dm),e(dt,Qs),e(Qs,cm),e(Qs,Vs),e(Vs,pm),e(Qs,hm),e(dt,mm),e(dt,Et),M(Gs,Et,null),e(Et,um),e(Et,_o),e(_o,fm),e(_o,Ya),e(Ya,gm),e(_o,_m),e(_o,dl),e(dl,bm),e(_o,km),e(Et,Tm),M(ln,Et,null),e(Et,ym),M(dn,Et,null),_(s,lc,k),_(s,bo,k),e(bo,cn),e(cn,cl),M(Ys,cl,null),e(bo,wm),e(bo,pl),e(pl,vm),_(s,dc,k),_(s,ct,k),M(Js,ct,null),e(ct,Mm),e(ct,Zs),e(Zs,$m),e(Zs,hl),e(hl,Fm),e(Zs,Bm),e(ct,Em),e(ct,Xs),e(Xs,xm),e(Xs,Ja),e(Ja,zm),e(Xs,Pm),e(ct,jm),e(ct,er),e(er,Cm),e(er,tr),e(tr,qm),e(er,Nm),e(ct,Om),e(ct,gt),M(or,gt,null),e(gt,Am),e(gt,ko),e(ko,Sm),e(ko,Za),e(Za,Dm),e(ko,Im),e(ko,ml),e(ml,Lm),e(ko,Wm),e(gt,Rm),M(pn,gt,null),e(gt,Um),M(hn,gt,null),e(gt,Km),M(mn,gt,null),_(s,cc,k),_(s,To,k),e(To,un),e(un,ul),M(nr,ul,null),e(To,Hm),e(To,fl),e(fl,Qm),_(s,pc,k),_(s,pt,k),M(sr,pt,null),e(pt,Vm),e(pt,rr),e(rr,Gm),e(rr,gl),e(gl,Ym),e(rr,Jm),e(pt,Zm),e(pt,ar),e(ar,Xm),e(ar,Xa),e(Xa,eu),e(ar,tu),e(pt,ou),e(pt,ir),e(ir,nu),e(ir,lr),e(lr,su),e(ir,ru),e(pt,au),e(pt,xt),M(dr,xt,null),e(xt,iu),e(xt,yo),e(yo,lu),e(yo,ei),e(ei,du),e(yo,cu),e(yo,_l),e(_l,pu),e(yo,hu),e(xt,mu),M(fn,xt,null),e(xt,uu),M(gn,xt,null),_(s,hc,k),_(s,wo,k),e(wo,_n),e(_n,bl),M(cr,bl,null),e(wo,fu),e(wo,kl),e(kl,gu),_(s,mc,k),_(s,ht,k),M(pr,ht,null),e(ht,_u),e(ht,Tl),e(Tl,bu),e(ht,ku),e(ht,hr),e(hr,Tu),e(hr,ti),e(ti,yu),e(hr,wu),e(ht,vu),e(ht,mr),e(mr,Mu),e(mr,ur),e(ur,$u),e(mr,Fu),e(ht,Bu),e(ht,Xe),M(fr,Xe,null),e(Xe,Eu),e(Xe,vo),e(vo,xu),e(vo,oi),e(oi,zu),e(vo,Pu),e(vo,yl),e(yl,ju),e(vo,Cu),e(Xe,qu),M(bn,Xe,null),e(Xe,Nu),M(kn,Xe,null),e(Xe,Ou),M(Tn,Xe,null),e(Xe,Au),M(yn,Xe,null),e(Xe,Su),M(wn,Xe,null),_(s,uc,k),_(s,Mo,k),e(Mo,vn),e(vn,wl),M(gr,wl,null),e(Mo,Du),e(Mo,vl),e(vl,Iu),_(s,fc,k),_(s,mt,k),M(_r,mt,null),e(mt,Lu),e(mt,Ml),e(Ml,Wu),e(mt,Ru),e(mt,br),e(br,Uu),e(br,ni),e(ni,Ku),e(br,Hu),e(mt,Qu),e(mt,kr),e(kr,Vu),e(kr,Tr),e(Tr,Gu),e(kr,Yu),e(mt,Ju),e(mt,zt),M(yr,zt,null),e(zt,Zu),e(zt,$o),e($o,Xu),e($o,si),e(si,ef),e($o,tf),e($o,$l),e($l,of),e($o,nf),e(zt,sf),M(Mn,zt,null),e(zt,rf),M($n,zt,null),_(s,gc,k),_(s,Fo,k),e(Fo,Fn),e(Fn,Fl),M(wr,Fl,null),e(Fo,af),e(Fo,Bl),e(Bl,lf),_(s,_c,k),_(s,ut,k),M(vr,ut,null),e(ut,df),e(ut,El),e(El,cf),e(ut,pf),e(ut,Mr),e(Mr,hf),e(Mr,ri),e(ri,mf),e(Mr,uf),e(ut,ff),e(ut,$r),e($r,gf),e($r,Fr),e(Fr,_f),e($r,bf),e(ut,kf),e(ut,_t),M(Br,_t,null),e(_t,Tf),e(_t,Bo),e(Bo,yf),e(Bo,ai),e(ai,wf),e(Bo,vf),e(Bo,xl),e(xl,Mf),e(Bo,$f),e(_t,Ff),M(Bn,_t,null),e(_t,Bf),M(En,_t,null),e(_t,Ef),M(xn,_t,null),_(s,bc,k),_(s,Eo,k),e(Eo,zn),e(zn,zl),M(Er,zl,null),e(Eo,xf),e(Eo,Pl),e(Pl,zf),_(s,kc,k),_(s,ft,k),M(xr,ft,null),e(ft,Pf),e(ft,xo),e(xo,jf),e(xo,jl),e(jl,Cf),e(xo,qf),e(xo,Cl),e(Cl,Nf),e(xo,Of),e(ft,Af),e(ft,zr),e(zr,Sf),e(zr,ii),e(ii,Df),e(zr,If),e(ft,Lf),e(ft,Pr),e(Pr,Wf),e(Pr,jr),e(jr,Rf),e(Pr,Uf),e(ft,Kf),e(ft,bt),M(Cr,bt,null),e(bt,Hf),e(bt,zo),e(zo,Qf),e(zo,li),e(li,Vf),e(zo,Gf),e(zo,ql),e(ql,Yf),e(zo,Jf),e(bt,Zf),M(Pn,bt,null),e(bt,Xf),M(jn,bt,null),e(bt,eg),M(Cn,bt,null),_(s,Tc,k),_(s,Po,k),e(Po,qn),e(qn,Nl),M(qr,Nl,null),e(Po,tg),e(Po,Ol),e(Ol,og),_(s,yc,k),_(s,tt,k),M(Nr,tt,null),e(tt,ng),e(tt,Al),e(Al,sg),e(tt,rg),e(tt,Or),e(Or,ag),e(Or,di),e(di,ig),e(Or,lg),e(tt,dg),e(tt,Ar),e(Ar,cg),e(Ar,Sr),e(Sr,pg),e(Ar,hg),e(tt,mg),M(Nn,tt,null),e(tt,ug),e(tt,Pt),M(Dr,Pt,null),e(Pt,fg),e(Pt,jo),e(jo,gg),e(jo,ci),e(ci,_g),e(jo,bg),e(jo,Sl),e(Sl,kg),e(jo,Tg),e(Pt,yg),M(On,Pt,null),e(Pt,wg),M(An,Pt,null),_(s,wc,k),_(s,Co,k),e(Co,Sn),e(Sn,Dl),M(Ir,Dl,null),e(Co,vg),e(Co,Il),e(Il,Mg),_(s,vc,k),_(s,ot,k),M(Lr,ot,null),e(ot,$g),e(ot,qo),e(qo,Fg),e(qo,Ll),e(Ll,Bg),e(qo,Eg),e(qo,Wl),e(Wl,xg),e(qo,zg),e(ot,Pg),e(ot,Wr),e(Wr,jg),e(Wr,pi),e(pi,Cg),e(Wr,qg),e(ot,Ng),e(ot,Rr),e(Rr,Og),e(Rr,Ur),e(Ur,Ag),e(Rr,Sg),e(ot,Dg),M(Dn,ot,null),e(ot,Ig),e(ot,jt),M(Kr,jt,null),e(jt,Lg),e(jt,No),e(No,Wg),e(No,hi),e(hi,Rg),e(No,Ug),e(No,Rl),e(Rl,Kg),e(No,Hg),e(jt,Qg),M(In,jt,null),e(jt,Vg),M(Ln,jt,null),_(s,Mc,k),_(s,Oo,k),e(Oo,Wn),e(Wn,Ul),M(Hr,Ul,null),e(Oo,Gg),e(Oo,Kl),e(Kl,Yg),_(s,$c,k),_(s,nt,k),M(Qr,nt,null),e(nt,Jg),e(nt,Vr),e(Vr,Zg),e(Vr,Hl),e(Hl,Xg),e(Vr,e_),e(nt,t_),e(nt,Gr),e(Gr,o_),e(Gr,mi),e(mi,n_),e(Gr,s_),e(nt,r_),e(nt,Yr),e(Yr,a_),e(Yr,Jr),e(Jr,i_),e(Yr,l_),e(nt,d_),M(Rn,nt,null),e(nt,c_),e(nt,kt),M(Zr,kt,null),e(kt,p_),e(kt,Ao),e(Ao,h_),e(Ao,ui),e(ui,m_),e(Ao,u_),e(Ao,Ql),e(Ql,f_),e(Ao,g_),e(kt,__),M(Un,kt,null),e(kt,b_),M(Kn,kt,null),e(kt,k_),M(Hn,kt,null),_(s,Fc,k),_(s,So,k),e(So,Qn),e(Qn,Vl),M(Xr,Vl,null),e(So,T_),e(So,Gl),e(Gl,y_),_(s,Bc,k),_(s,st,k),M(ea,st,null),e(st,w_),e(st,ta),e(ta,v_),e(ta,Yl),e(Yl,M_),e(ta,$_),e(st,F_),e(st,oa),e(oa,B_),e(oa,fi),e(fi,E_),e(oa,x_),e(st,z_),e(st,na),e(na,P_),e(na,sa),e(sa,j_),e(na,C_),e(st,q_),M(Vn,st,null),e(st,N_),e(st,Ct),M(ra,Ct,null),e(Ct,O_),e(Ct,Do),e(Do,A_),e(Do,gi),e(gi,S_),e(Do,D_),e(Do,Jl),e(Jl,I_),e(Do,L_),e(Ct,W_),M(Gn,Ct,null),e(Ct,R_),M(Yn,Ct,null),_(s,Ec,k),_(s,Io,k),e(Io,Jn),e(Jn,Zl),M(aa,Zl,null),e(Io,U_),e(Io,Xl),e(Xl,K_),_(s,xc,k),_(s,rt,k),M(ia,rt,null),e(rt,H_),e(rt,ed),e(ed,Q_),e(rt,V_),e(rt,la),e(la,G_),e(la,_i),e(_i,Y_),e(la,J_),e(rt,Z_),e(rt,da),e(da,X_),e(da,ca),e(ca,eb),e(da,tb),e(rt,ob),M(Zn,rt,null),e(rt,nb),e(rt,Tt),M(pa,Tt,null),e(Tt,sb),e(Tt,Lo),e(Lo,rb),e(Lo,bi),e(bi,ab),e(Lo,ib),e(Lo,td),e(td,lb),e(Lo,db),e(Tt,cb),M(Xn,Tt,null),e(Tt,pb),M(es,Tt,null),e(Tt,hb),M(ts,Tt,null),_(s,zc,k),_(s,Wo,k),e(Wo,os),e(os,od),M(ha,od,null),e(Wo,mb),e(Wo,nd),e(nd,ub),_(s,Pc,k),_(s,at,k),M(ma,at,null),e(at,fb),e(at,sd),e(sd,gb),e(at,_b),e(at,ua),e(ua,bb),e(ua,ki),e(ki,kb),e(ua,Tb),e(at,yb),e(at,fa),e(fa,wb),e(fa,ga),e(ga,vb),e(fa,Mb),e(at,$b),M(ns,at,null),e(at,Fb),e(at,qt),M(_a,qt,null),e(qt,Bb),e(qt,Ro),e(Ro,Eb),e(Ro,Ti),e(Ti,xb),e(Ro,zb),e(Ro,rd),e(rd,Pb),e(Ro,jb),e(qt,Cb),M(ss,qt,null),e(qt,qb),M(rs,qt,null),_(s,jc,k),_(s,Uo,k),e(Uo,as),e(as,ad),M(ba,ad,null),e(Uo,Nb),e(Uo,id),e(id,Ob),_(s,Cc,k),_(s,it,k),M(ka,it,null),e(it,Ab),e(it,ld),e(ld,Sb),e(it,Db),e(it,Ta),e(Ta,Ib),e(Ta,yi),e(yi,Lb),e(Ta,Wb),e(it,Rb),e(it,ya),e(ya,Ub),e(ya,wa),e(wa,Kb),e(ya,Hb),e(it,Qb),M(is,it,null),e(it,Vb),e(it,yt),M(va,yt,null),e(yt,Gb),e(yt,Ko),e(Ko,Yb),e(Ko,wi),e(wi,Jb),e(Ko,Zb),e(Ko,dd),e(dd,Xb),e(Ko,ek),e(yt,tk),M(ls,yt,null),e(yt,ok),M(ds,yt,null),e(yt,nk),M(cs,yt,null),_(s,qc,k),_(s,Ho,k),e(Ho,ps),e(ps,cd),M(Ma,cd,null),e(Ho,sk),e(Ho,pd),e(pd,rk),_(s,Nc,k),_(s,lt,k),M($a,lt,null),e(lt,ak),e(lt,Qo),e(Qo,ik),e(Qo,hd),e(hd,lk),e(Qo,dk),e(Qo,md),e(md,ck),e(Qo,pk),e(lt,hk),e(lt,Fa),e(Fa,mk),e(Fa,vi),e(vi,uk),e(Fa,fk),e(lt,gk),e(lt,Ba),e(Ba,_k),e(Ba,Ea),e(Ea,bk),e(Ba,kk),e(lt,Tk),M(hs,lt,null),e(lt,yk),e(lt,wt),M(xa,wt,null),e(wt,wk),e(wt,Vo),e(Vo,vk),e(Vo,Mi),e(Mi,Mk),e(Vo,$k),e(Vo,ud),e(ud,Fk),e(Vo,Bk),e(wt,Ek),M(ms,wt,null),e(wt,xk),M(us,wt,null),e(wt,zk),M(fs,wt,null),Oc=!0},p(s,[k]){const za={};k&2&&(za.$$scope={dirty:k,ctx:s}),Jo.$set(za);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:s}),sn.$set(fd);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:s}),rn.$set(gd);const _d={};k&2&&(_d.$$scope={dirty:k,ctx:s}),ln.$set(_d);const Pa={};k&2&&(Pa.$$scope={dirty:k,ctx:s}),dn.$set(Pa);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:s}),pn.$set(bd);const kd={};k&2&&(kd.$$scope={dirty:k,ctx:s}),hn.$set(kd);const Td={};k&2&&(Td.$$scope={dirty:k,ctx:s}),mn.$set(Td);const ja={};k&2&&(ja.$$scope={dirty:k,ctx:s}),fn.$set(ja);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:s}),gn.$set(yd);const wd={};k&2&&(wd.$$scope={dirty:k,ctx:s}),bn.$set(wd);const vd={};k&2&&(vd.$$scope={dirty:k,ctx:s}),kn.$set(vd);const Md={};k&2&&(Md.$$scope={dirty:k,ctx:s}),Tn.$set(Md);const $d={};k&2&&($d.$$scope={dirty:k,ctx:s}),yn.$set($d);const Ca={};k&2&&(Ca.$$scope={dirty:k,ctx:s}),wn.$set(Ca);const Fd={};k&2&&(Fd.$$scope={dirty:k,ctx:s}),Mn.$set(Fd);const Bd={};k&2&&(Bd.$$scope={dirty:k,ctx:s}),$n.$set(Bd);const Go={};k&2&&(Go.$$scope={dirty:k,ctx:s}),Bn.$set(Go);const Ed={};k&2&&(Ed.$$scope={dirty:k,ctx:s}),En.$set(Ed);const xd={};k&2&&(xd.$$scope={dirty:k,ctx:s}),xn.$set(xd);const qa={};k&2&&(qa.$$scope={dirty:k,ctx:s}),Pn.$set(qa);const zd={};k&2&&(zd.$$scope={dirty:k,ctx:s}),jn.$set(zd);const Pd={};k&2&&(Pd.$$scope={dirty:k,ctx:s}),Cn.$set(Pd);const jd={};k&2&&(jd.$$scope={dirty:k,ctx:s}),Nn.$set(jd);const Ft={};k&2&&(Ft.$$scope={dirty:k,ctx:s}),On.$set(Ft);const Ut={};k&2&&(Ut.$$scope={dirty:k,ctx:s}),An.$set(Ut);const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:s}),Dn.$set(Cd);const qd={};k&2&&(qd.$$scope={dirty:k,ctx:s}),In.$set(qd);const Nd={};k&2&&(Nd.$$scope={dirty:k,ctx:s}),Ln.$set(Nd);const Yo={};k&2&&(Yo.$$scope={dirty:k,ctx:s}),Rn.$set(Yo);const Od={};k&2&&(Od.$$scope={dirty:k,ctx:s}),Un.$set(Od);const Ad={};k&2&&(Ad.$$scope={dirty:k,ctx:s}),Kn.$set(Ad);const Sd={};k&2&&(Sd.$$scope={dirty:k,ctx:s}),Hn.$set(Sd);const Na={};k&2&&(Na.$$scope={dirty:k,ctx:s}),Vn.$set(Na);const Dd={};k&2&&(Dd.$$scope={dirty:k,ctx:s}),Gn.$set(Dd);const Id={};k&2&&(Id.$$scope={dirty:k,ctx:s}),Yn.$set(Id);const Ld={};k&2&&(Ld.$$scope={dirty:k,ctx:s}),Zn.$set(Ld);const Kt={};k&2&&(Kt.$$scope={dirty:k,ctx:s}),Xn.$set(Kt);const Wd={};k&2&&(Wd.$$scope={dirty:k,ctx:s}),es.$set(Wd);const gs={};k&2&&(gs.$$scope={dirty:k,ctx:s}),ts.$set(gs);const Rd={};k&2&&(Rd.$$scope={dirty:k,ctx:s}),ns.$set(Rd);const Ud={};k&2&&(Ud.$$scope={dirty:k,ctx:s}),ss.$set(Ud);const Oa={};k&2&&(Oa.$$scope={dirty:k,ctx:s}),rs.$set(Oa);const Kd={};k&2&&(Kd.$$scope={dirty:k,ctx:s}),is.$set(Kd);const Aa={};k&2&&(Aa.$$scope={dirty:k,ctx:s}),ls.$set(Aa);const Hd={};k&2&&(Hd.$$scope={dirty:k,ctx:s}),ds.$set(Hd);const Qd={};k&2&&(Qd.$$scope={dirty:k,ctx:s}),cs.$set(Qd);const Vd={};k&2&&(Vd.$$scope={dirty:k,ctx:s}),hs.$set(Vd);const Ht={};k&2&&(Ht.$$scope={dirty:k,ctx:s}),ms.$set(Ht);const Sa={};k&2&&(Sa.$$scope={dirty:k,ctx:s}),us.$set(Sa);const Gd={};k&2&&(Gd.$$scope={dirty:k,ctx:s}),fs.$set(Gd)},i(s){Oc||($(l.$$.fragment,s),$(y.$$.fragment,s),$(C.$$.fragment,s),$(E.$$.fragment,s),$(Jo.$$.fragment,s),$($s.$$.fragment,s),$(Fs.$$.fragment,s),$(Es.$$.fragment,s),$(xs.$$.fragment,s),$(js.$$.fragment,s),$(Cs.$$.fragment,s),$(Ns.$$.fragment,s),$(As.$$.fragment,s),$(Ss.$$.fragment,s),$(Rs.$$.fragment,s),$(sn.$$.fragment,s),$(rn.$$.fragment,s),$(Us.$$.fragment,s),$(Ks.$$.fragment,s),$(Gs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(Ys.$$.fragment,s),$(Js.$$.fragment,s),$(or.$$.fragment,s),$(pn.$$.fragment,s),$(hn.$$.fragment,s),$(mn.$$.fragment,s),$(nr.$$.fragment,s),$(sr.$$.fragment,s),$(dr.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(cr.$$.fragment,s),$(pr.$$.fragment,s),$(fr.$$.fragment,s),$(bn.$$.fragment,s),$(kn.$$.fragment,s),$(Tn.$$.fragment,s),$(yn.$$.fragment,s),$(wn.$$.fragment,s),$(gr.$$.fragment,s),$(_r.$$.fragment,s),$(yr.$$.fragment,s),$(Mn.$$.fragment,s),$($n.$$.fragment,s),$(wr.$$.fragment,s),$(vr.$$.fragment,s),$(Br.$$.fragment,s),$(Bn.$$.fragment,s),$(En.$$.fragment,s),$(xn.$$.fragment,s),$(Er.$$.fragment,s),$(xr.$$.fragment,s),$(Cr.$$.fragment,s),$(Pn.$$.fragment,s),$(jn.$$.fragment,s),$(Cn.$$.fragment,s),$(qr.$$.fragment,s),$(Nr.$$.fragment,s),$(Nn.$$.fragment,s),$(Dr.$$.fragment,s),$(On.$$.fragment,s),$(An.$$.fragment,s),$(Ir.$$.fragment,s),$(Lr.$$.fragment,s),$(Dn.$$.fragment,s),$(Kr.$$.fragment,s),$(In.$$.fragment,s),$(Ln.$$.fragment,s),$(Hr.$$.fragment,s),$(Qr.$$.fragment,s),$(Rn.$$.fragment,s),$(Zr.$$.fragment,s),$(Un.$$.fragment,s),$(Kn.$$.fragment,s),$(Hn.$$.fragment,s),$(Xr.$$.fragment,s),$(ea.$$.fragment,s),$(Vn.$$.fragment,s),$(ra.$$.fragment,s),$(Gn.$$.fragment,s),$(Yn.$$.fragment,s),$(aa.$$.fragment,s),$(ia.$$.fragment,s),$(Zn.$$.fragment,s),$(pa.$$.fragment,s),$(Xn.$$.fragment,s),$(es.$$.fragment,s),$(ts.$$.fragment,s),$(ha.$$.fragment,s),$(ma.$$.fragment,s),$(ns.$$.fragment,s),$(_a.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(ba.$$.fragment,s),$(ka.$$.fragment,s),$(is.$$.fragment,s),$(va.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ma.$$.fragment,s),$($a.$$.fragment,s),$(hs.$$.fragment,s),$(xa.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(fs.$$.fragment,s),Oc=!0)},o(s){F(l.$$.fragment,s),F(y.$$.fragment,s),F(C.$$.fragment,s),F(E.$$.fragment,s),F(Jo.$$.fragment,s),F($s.$$.fragment,s),F(Fs.$$.fragment,s),F(Es.$$.fragment,s),F(xs.$$.fragment,s),F(js.$$.fragment,s),F(Cs.$$.fragment,s),F(Ns.$$.fragment,s),F(As.$$.fragment,s),F(Ss.$$.fragment,s),F(Rs.$$.fragment,s),F(sn.$$.fragment,s),F(rn.$$.fragment,s),F(Us.$$.fragment,s),F(Ks.$$.fragment,s),F(Gs.$$.fragment,s),F(ln.$$.fragment,s),F(dn.$$.fragment,s),F(Ys.$$.fragment,s),F(Js.$$.fragment,s),F(or.$$.fragment,s),F(pn.$$.fragment,s),F(hn.$$.fragment,s),F(mn.$$.fragment,s),F(nr.$$.fragment,s),F(sr.$$.fragment,s),F(dr.$$.fragment,s),F(fn.$$.fragment,s),F(gn.$$.fragment,s),F(cr.$$.fragment,s),F(pr.$$.fragment,s),F(fr.$$.fragment,s),F(bn.$$.fragment,s),F(kn.$$.fragment,s),F(Tn.$$.fragment,s),F(yn.$$.fragment,s),F(wn.$$.fragment,s),F(gr.$$.fragment,s),F(_r.$$.fragment,s),F(yr.$$.fragment,s),F(Mn.$$.fragment,s),F($n.$$.fragment,s),F(wr.$$.fragment,s),F(vr.$$.fragment,s),F(Br.$$.fragment,s),F(Bn.$$.fragment,s),F(En.$$.fragment,s),F(xn.$$.fragment,s),F(Er.$$.fragment,s),F(xr.$$.fragment,s),F(Cr.$$.fragment,s),F(Pn.$$.fragment,s),F(jn.$$.fragment,s),F(Cn.$$.fragment,s),F(qr.$$.fragment,s),F(Nr.$$.fragment,s),F(Nn.$$.fragment,s),F(Dr.$$.fragment,s),F(On.$$.fragment,s),F(An.$$.fragment,s),F(Ir.$$.fragment,s),F(Lr.$$.fragment,s),F(Dn.$$.fragment,s),F(Kr.$$.fragment,s),F(In.$$.fragment,s),F(Ln.$$.fragment,s),F(Hr.$$.fragment,s),F(Qr.$$.fragment,s),F(Rn.$$.fragment,s),F(Zr.$$.fragment,s),F(Un.$$.fragment,s),F(Kn.$$.fragment,s),F(Hn.$$.fragment,s),F(Xr.$$.fragment,s),F(ea.$$.fragment,s),F(Vn.$$.fragment,s),F(ra.$$.fragment,s),F(Gn.$$.fragment,s),F(Yn.$$.fragment,s),F(aa.$$.fragment,s),F(ia.$$.fragment,s),F(Zn.$$.fragment,s),F(pa.$$.fragment,s),F(Xn.$$.fragment,s),F(es.$$.fragment,s),F(ts.$$.fragment,s),F(ha.$$.fragment,s),F(ma.$$.fragment,s),F(ns.$$.fragment,s),F(_a.$$.fragment,s),F(ss.$$.fragment,s),F(rs.$$.fragment,s),F(ba.$$.fragment,s),F(ka.$$.fragment,s),F(is.$$.fragment,s),F(va.$$.fragment,s),F(ls.$$.fragment,s),F(ds.$$.fragment,s),F(cs.$$.fragment,s),F(Ma.$$.fragment,s),F($a.$$.fragment,s),F(hs.$$.fragment,s),F(xa.$$.fragment,s),F(ms.$$.fragment,s),F(us.$$.fragment,s),F(fs.$$.fragment,s),Oc=!1},d(s){t(d),s&&t(b),s&&t(c),B(l),s&&t(me),s&&t(D),B(y),s&&t(ue),s&&t(L),s&&t(fe),s&&t(R),s&&t(ge),s&&t(U),s&&t(te),s&&t(j),s&&t(_e),s&&t(W),s&&t(q),s&&t(ne),s&&t(be),s&&t(I),B(C),s&&t(ke),s&&t(f),B(E),B(Jo),s&&t(Jd),s&&t(io),B($s),s&&t(Zd),s&&t(Mt),B(Fs),s&&t(Xd),s&&t(lo),B(Es),s&&t(ec),s&&t($t),B(xs),s&&t(tc),s&&t(co),B(js),s&&t(oc),s&&t(po),B(Cs),s&&t(nc),s&&t(ho),B(Ns),s&&t(sc),s&&t(mo),B(As),s&&t(rc),s&&t(et),B(Ss),B(Rs),B(sn),B(rn),s&&t(ac),s&&t(fo),B(Us),s&&t(ic),s&&t(dt),B(Ks),B(Gs),B(ln),B(dn),s&&t(lc),s&&t(bo),B(Ys),s&&t(dc),s&&t(ct),B(Js),B(or),B(pn),B(hn),B(mn),s&&t(cc),s&&t(To),B(nr),s&&t(pc),s&&t(pt),B(sr),B(dr),B(fn),B(gn),s&&t(hc),s&&t(wo),B(cr),s&&t(mc),s&&t(ht),B(pr),B(fr),B(bn),B(kn),B(Tn),B(yn),B(wn),s&&t(uc),s&&t(Mo),B(gr),s&&t(fc),s&&t(mt),B(_r),B(yr),B(Mn),B($n),s&&t(gc),s&&t(Fo),B(wr),s&&t(_c),s&&t(ut),B(vr),B(Br),B(Bn),B(En),B(xn),s&&t(bc),s&&t(Eo),B(Er),s&&t(kc),s&&t(ft),B(xr),B(Cr),B(Pn),B(jn),B(Cn),s&&t(Tc),s&&t(Po),B(qr),s&&t(yc),s&&t(tt),B(Nr),B(Nn),B(Dr),B(On),B(An),s&&t(wc),s&&t(Co),B(Ir),s&&t(vc),s&&t(ot),B(Lr),B(Dn),B(Kr),B(In),B(Ln),s&&t(Mc),s&&t(Oo),B(Hr),s&&t($c),s&&t(nt),B(Qr),B(Rn),B(Zr),B(Un),B(Kn),B(Hn),s&&t(Fc),s&&t(So),B(Xr),s&&t(Bc),s&&t(st),B(ea),B(Vn),B(ra),B(Gn),B(Yn),s&&t(Ec),s&&t(Io),B(aa),s&&t(xc),s&&t(rt),B(ia),B(Zn),B(pa),B(Xn),B(es),B(ts),s&&t(zc),s&&t(Wo),B(ha),s&&t(Pc),s&&t(at),B(ma),B(ns),B(_a),B(ss),B(rs),s&&t(jc),s&&t(Uo),B(ba),s&&t(Cc),s&&t(it),B(ka),B(is),B(va),B(ls),B(ds),B(cs),s&&t(qc),s&&t(Ho),B(Ma),s&&t(Nc),s&&t(lt),B($a),B(hs),B(xa),B(ms),B(us),B(fs)}}}const uv={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function fv(z){return fw(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class wv extends pw{constructor(d){super();hw(this,d,fv,mv,mw,{})}}export{wv as default,uv as metadata};
