import{S as i1,i as l1,s as d1,e as r,k as h,w as T,t as n,M as c1,c as a,d as t,m,a as i,x as M,h as s,b,F as e,g,y as $,q as w,o as y,B as F,v as p1,L as xe}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as ie}from"../../chunks/Docstring-1088f2fb.js";import{C as ze}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as qe}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as Ee}from"../../chunks/ExampleCodeBlock-5212b321.js";function h1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertModel, MobileBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function m1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function u1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function f1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function g1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForPreTraining.from_pretrained("google/mobilebert-uncased")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
outputs = model(input_ids)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function _1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function b1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForMaskedLM
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
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function v1(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function k1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function T1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function M1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function $1(E){let d,_,c,p,v;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of single-label classification:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function w1(E){let d,_;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function y1(E){let d,_,c,p,v;return p=new ze({props:{code:`import torch
from transformers import MobileBertTokenizer, MobileBertForSequenceClassification

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of multi-label classification:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function F1(E){let d,_;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function B1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function E1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function x1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function z1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForTokenClassification.from_pretrained("google/mobilebert-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function P1(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function q1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function C1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
import torch

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = MobileBertForQuestionAnswering.from_pretrained("google/mobilebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function j1(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function N1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function S1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function A1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function O1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function I1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function D1(E){let d,_,c,p,v;return p=new ze({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function L1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function W1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function R1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForMaskedLM.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function H1(E){let d,_;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Q1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function U1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function V1(E){let d,_,c,p,v;return p=new ze({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),_=n("Examples:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function K1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function G1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Y1(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function J1(E){let d,_;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFMobileBertForSequenceClassification.from_pretrained("google/mobilebert-uncased", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function Z1(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function X1(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function eM(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function tM(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function oM(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function nM(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForTokenClassification.from_pretrained("google/mobilebert-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

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
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function sM(E){let d,_;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function rM(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be;return{c(){d=r("p"),_=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=h(),x=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),J=n("This second option is useful when using "),D=r("code"),X=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),ue=n("model(inputs)"),le=n("."),V=h(),N=r("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=h(),P=r("ul"),C=r("li"),ne=n("a single Tensor with "),H=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),fe=n("model(inputs_ids)"),ce=h(),q=r("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),Z=n("model([input_ids, attention_mask])"),re=n(" or "),Q=r("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),ae=h(),S=r("li"),pe=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=r("code"),be=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(f){d=a(f,"P",{});var B=i(d);_=s(B,"TF 2.0 models accepts two formats as inputs:"),B.forEach(t),c=m(f),p=a(f,"UL",{});var Y=i(p);v=a(Y,"LI",{});var Te=i(v);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),u=m(Y),x=a(Y,"LI",{});var ye=i(x);he=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),Y.forEach(t),K=m(f),z=a(f,"P",{});var A=i(z);J=s(A,"This second option is useful when using "),D=a(A,"CODE",{});var $e=i(D);X=s($e,"tf.keras.Model.fit"),$e.forEach(t),me=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(A,"CODE",{});var ve=i(L);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(A,"."),A.forEach(t),V=m(f),N=a(f,"P",{});var ke=i(N);ee=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),G=m(f),P=a(f,"UL",{});var j=i(P);C=a(j,"LI",{});var I=i(C);ne=s(I,"a single Tensor with "),H=a(I,"CODE",{});var Fe=i(H);de=s(Fe,"input_ids"),Fe.forEach(t),se=s(I," only and nothing else: "),W=a(I,"CODE",{});var Me=i(W);fe=s(Me,"model(inputs_ids)"),Me.forEach(t),I.forEach(t),ce=m(j),q=a(j,"LI",{});var U=i(q);ge=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(U,"CODE",{});var we=i(R);Z=s(we,"model([input_ids, attention_mask])"),we.forEach(t),re=s(U," or "),Q=a(U,"CODE",{});var te=i(Q);_e=s(te,"model([input_ids, attention_mask, token_type_ids])"),te.forEach(t),U.forEach(t),ae=m(j),S=a(j,"LI",{});var oe=i(S);pe=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),O=a(oe,"CODE",{});var Be=i(O);be=s(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),oe.forEach(t),j.forEach(t)},m(f,B){g(f,d,B),e(d,_),g(f,c,B),g(f,p,B),e(p,v),e(v,l),e(p,u),e(p,x),e(x,he),g(f,K,B),g(f,z,B),e(z,J),e(z,D),e(D,X),e(z,me),e(z,L),e(L,ue),e(z,le),g(f,V,B),g(f,N,B),e(N,ee),g(f,G,B),g(f,P,B),e(P,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,W),e(W,fe),e(P,ce),e(P,q),e(q,ge),e(q,R),e(R,Z),e(q,re),e(q,Q),e(Q,_e),e(P,ae),e(P,S),e(S,pe),e(S,O),e(O,be)},d(f){f&&t(d),f&&t(c),f&&t(p),f&&t(K),f&&t(z),f&&t(V),f&&t(N),f&&t(G),f&&t(P)}}}function aM(E){let d,_,c,p,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var x=i(c);p=s(x,"Module"),x.forEach(t),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){g(l,d,u),e(d,_),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function iM(E){let d,_,c,p,v;return p=new ze({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
import tensorflow as tf

tokenizer = MobileBertTokenizer.from_pretrained("google/mobilebert-uncased")
model = TFMobileBertForQuestionAnswering.from_pretrained("google/mobilebert-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, TFMobileBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MobileBertTokenizer.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/mobilebert-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),_=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(t),c=m(l),M(p.$$.fragment,l)},m(l,u){g(l,d,u),e(d,_),g(l,c,u),$(p,l,u),v=!0},p:xe,i(l){v||(w(p.$$.fragment,l),v=!0)},o(l){y(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function lM(E){let d,_;return d=new ze({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){M(d.$$.fragment,c)},m(c,p){$(d,c,p),_=!0},p:xe,i(c){_||(w(d.$$.fragment,c),_=!0)},o(c){y(d.$$.fragment,c),_=!1},d(c){F(d,c)}}}function dM(E){let d,_,c,p,v,l,u,x,he,K,z,J,D,X,me,L,ue,le,V,N,ee,G,P,C,ne,H,de,se,W,fe,ce,q,ge,R,Z,re,Q,_e,ae,S,pe,O,be,f,B,Y,Te,ye,A,$e,ve,ke,j,I,Fe,Me,U,we,te,oe,Be,Dt,Fp,Ma,Bp,Ep,$a,xp,zp,Pp,Lt,qp,wa,Cp,jp,ya,Np,Sp,Ap,Co,Op,qi,Ip,Sd,Wt,jo,Ci,ls,Dp,ji,Lp,Ad,st,ds,Wp,Ni,Rp,Hp,No,Fa,Qp,Up,Ba,Vp,Kp,Gp,cs,Yp,Ea,Jp,Zp,Od,Rt,So,Si,ps,Xp,Ai,eh,Id,rt,hs,th,ms,oh,Oi,nh,sh,rh,Ao,xa,ah,ih,za,lh,dh,ch,us,ph,Pa,hh,mh,Dd,Ht,Oo,Ii,fs,uh,Di,fh,Ld,Qt,gs,gh,_s,_h,qa,bh,vh,Wd,Ut,bs,kh,vs,Th,Ca,Mh,$h,Rd,Vt,Io,Li,ks,wh,Wi,yh,Hd,je,Ts,Fh,Ri,Bh,Eh,Ms,xh,ja,zh,Ph,qh,$s,Ch,ws,jh,Nh,Sh,Hi,ys,Ah,Oh,it,Fs,Ih,Kt,Dh,Na,Lh,Wh,Qi,Rh,Hh,Qh,Do,Uh,Lo,Qd,Gt,Wo,Ui,Bs,Vh,Vi,Kh,Ud,Re,Es,Gh,Yt,Yh,Ki,Jh,Zh,Gi,Xh,em,tm,xs,om,Sa,nm,sm,rm,zs,am,Ps,im,lm,dm,lt,qs,cm,Jt,pm,Aa,hm,mm,Yi,um,fm,gm,Ro,_m,Ho,Vd,Zt,Qo,Ji,Cs,bm,Zi,vm,Kd,He,js,km,Ns,Tm,Xi,Mm,$m,wm,Ss,ym,Oa,Fm,Bm,Em,As,xm,Os,zm,Pm,qm,Ye,Is,Cm,Xt,jm,Ia,Nm,Sm,el,Am,Om,Im,Uo,Dm,Vo,Lm,Ko,Gd,eo,Go,tl,Ds,Wm,ol,Rm,Yd,Qe,Ls,Hm,Ws,Qm,nl,Um,Vm,Km,Rs,Gm,Da,Ym,Jm,Zm,Hs,Xm,Qs,eu,tu,ou,dt,Us,nu,to,su,La,ru,au,sl,iu,lu,du,Yo,cu,Jo,Jd,oo,Zo,rl,Vs,pu,al,hu,Zd,Ue,Ks,mu,il,uu,fu,Gs,gu,Wa,_u,bu,vu,Ys,ku,Js,Tu,Mu,$u,Ce,Zs,wu,no,yu,Ra,Fu,Bu,ll,Eu,xu,zu,Xo,Pu,en,qu,tn,Cu,on,ju,nn,Xd,so,sn,dl,Xs,Nu,cl,Su,ec,Ve,er,Au,pl,Ou,Iu,tr,Du,Ha,Lu,Wu,Ru,or,Hu,nr,Qu,Uu,Vu,ct,sr,Ku,ro,Gu,Qa,Yu,Ju,hl,Zu,Xu,ef,rn,tf,an,tc,ao,ln,ml,rr,of,ul,nf,oc,Ke,ar,sf,fl,rf,af,ir,lf,Ua,df,cf,pf,lr,hf,dr,mf,uf,ff,Je,cr,gf,io,_f,Va,bf,vf,gl,kf,Tf,Mf,dn,$f,cn,wf,pn,nc,lo,hn,_l,pr,yf,bl,Ff,sc,Ge,hr,Bf,co,Ef,vl,xf,zf,kl,Pf,qf,Cf,mr,jf,Ka,Nf,Sf,Af,ur,Of,fr,If,Df,Lf,Ze,gr,Wf,po,Rf,Ga,Hf,Qf,Tl,Uf,Vf,Kf,mn,Gf,un,Yf,fn,rc,ho,gn,Ml,_r,Jf,$l,Zf,ac,Ne,br,Xf,wl,eg,tg,vr,og,Ya,ng,sg,rg,kr,ag,Tr,ig,lg,dg,_n,cg,pt,Mr,pg,mo,hg,Ja,mg,ug,yl,fg,gg,_g,bn,bg,vn,ic,uo,kn,Fl,$r,vg,Bl,kg,lc,Se,wr,Tg,fo,Mg,El,$g,wg,xl,yg,Fg,Bg,yr,Eg,Za,xg,zg,Pg,Fr,qg,Br,Cg,jg,Ng,Tn,Sg,ht,Er,Ag,go,Og,Xa,Ig,Dg,zl,Lg,Wg,Rg,Mn,Hg,$n,dc,_o,wn,Pl,xr,Qg,ql,Ug,cc,Ae,zr,Vg,Pr,Kg,Cl,Gg,Yg,Jg,qr,Zg,ei,Xg,e_,t_,Cr,o_,jr,n_,s_,r_,yn,a_,Xe,Nr,i_,bo,l_,ti,d_,c_,jl,p_,h_,m_,Fn,u_,Bn,f_,En,pc,vo,xn,Nl,Sr,g_,Sl,__,hc,Oe,Ar,b_,Or,v_,Al,k_,T_,M_,Ir,$_,oi,w_,y_,F_,Dr,B_,Lr,E_,x_,z_,zn,P_,mt,Wr,q_,ko,C_,ni,j_,N_,Ol,S_,A_,O_,Pn,I_,qn,mc,To,Cn,Il,Rr,D_,Dl,L_,uc,Ie,Hr,W_,Ll,R_,H_,Qr,Q_,si,U_,V_,K_,Ur,G_,Vr,Y_,J_,Z_,jn,X_,et,Kr,eb,Mo,tb,ri,ob,nb,Wl,sb,rb,ab,Nn,ib,Sn,lb,An,fc,$o,On,Rl,Gr,db,Hl,cb,gc,De,Yr,pb,Ql,hb,mb,Jr,ub,ai,fb,gb,_b,Zr,bb,Xr,vb,kb,Tb,In,Mb,ut,ea,$b,wo,wb,ii,yb,Fb,Ul,Bb,Eb,xb,Dn,zb,Ln,_c,yo,Wn,Vl,ta,Pb,Kl,qb,bc,Le,oa,Cb,Gl,jb,Nb,na,Sb,li,Ab,Ob,Ib,sa,Db,ra,Lb,Wb,Rb,Rn,Hb,tt,aa,Qb,Fo,Ub,di,Vb,Kb,Yl,Gb,Yb,Jb,Hn,Zb,Qn,Xb,Un,vc,Bo,Vn,Jl,ia,ev,Zl,tv,kc,We,la,ov,Eo,nv,Xl,sv,rv,ed,av,iv,lv,da,dv,ci,cv,pv,hv,ca,mv,pa,uv,fv,gv,Kn,_v,ot,ha,bv,xo,vv,pi,kv,Tv,td,Mv,$v,wv,Gn,yv,Yn,Fv,Jn,Tc;return l=new qe({}),X=new qe({}),I=new qe({}),oe=new ie({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MobileBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MobileBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or
<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MobileBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/configuration_mobilebert.py#L28"}}),Co=new Ee({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[h1]},$$scope:{ctx:E}}}),ls=new qe({}),ds=new ie({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),ps=new qe({}),hs=new ie({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),fs=new qe({}),gs=new ie({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L684"}}),bs=new ie({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L778"}}),ks=new qe({}),Ts=new ie({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L787"}}),Fs=new ie({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"output_attentions",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L817",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new Pe({props:{$$slots:{default:[m1]},$$scope:{ctx:E}}}),Lo=new Ee({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[u1]},$$scope:{ctx:E}}}),Bs=new qe({}),Es=new ie({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L903"}}),qs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MobileBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L926",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[f1]},$$scope:{ctx:E}}}),Ho=new Ee({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[g1]},$$scope:{ctx:E}}}),Cs=new qe({}),js=new ie({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1010"}}),Is=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1036",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new Pe({props:{$$slots:{default:[_1]},$$scope:{ctx:E}}}),Vo=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[b1]},$$scope:{ctx:E}}}),Ko=new Ee({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[v1]},$$scope:{ctx:E}}}),Ds=new qe({}),Ls=new ie({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1110"}}),Us=new ie({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>.</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1120",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Pe({props:{$$slots:{default:[k1]},$$scope:{ctx:E}}}),Jo=new Ee({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[T1]},$$scope:{ctx:E}}}),Vs=new qe({}),Ks=new ie({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1213"}}),Zs=new ie({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1229",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xo=new Pe({props:{$$slots:{default:[M1]},$$scope:{ctx:E}}}),en=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[$1]},$$scope:{ctx:E}}}),tn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[w1]},$$scope:{ctx:E}}}),on=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[y1]},$$scope:{ctx:E}}}),nn=new Ee({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[F1]},$$scope:{ctx:E}}}),Xs=new qe({}),er=new ie({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1420"}}),sr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1434",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new Pe({props:{$$slots:{default:[B1]},$$scope:{ctx:E}}}),an=new Ee({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[E1]},$$scope:{ctx:E}}}),rr=new qe({}),ar=new ie({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1518"}}),cr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1536",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new Pe({props:{$$slots:{default:[x1]},$$scope:{ctx:E}}}),cn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[z1]},$$scope:{ctx:E}}}),pn=new Ee({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[P1]},$$scope:{ctx:E}}}),pr=new qe({}),hr=new ie({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1316"}}),gr=new ie({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_mobilebert.py#L1330",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new Pe({props:{$$slots:{default:[q1]},$$scope:{ctx:E}}}),un=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[C1]},$$scope:{ctx:E}}}),fn=new Ee({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[j1]},$$scope:{ctx:E}}}),_r=new qe({}),br=new ie({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L905"}}),_n=new Pe({props:{$$slots:{default:[N1]},$$scope:{ctx:E}}}),Mr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Pe({props:{$$slots:{default:[S1]},$$scope:{ctx:E}}}),vn=new Ee({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[A1]},$$scope:{ctx:E}}}),$r=new qe({}),wr=new ie({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L965"}}),Tn=new Pe({props:{$$slots:{default:[O1]},$$scope:{ctx:E}}}),Er=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L979",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mn=new Pe({props:{$$slots:{default:[I1]},$$scope:{ctx:E}}}),$n=new Ee({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[D1]},$$scope:{ctx:E}}}),xr=new qe({}),zr=new ie({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1050"}}),yn=new Pe({props:{$$slots:{default:[L1]},$$scope:{ctx:E}}}),Nr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1071",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Pe({props:{$$slots:{default:[W1]},$$scope:{ctx:E}}}),Bn=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[R1]},$$scope:{ctx:E}}}),En=new Ee({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[H1]},$$scope:{ctx:E}}}),Sr=new qe({}),Ar=new ie({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1149"}}),zn=new Pe({props:{$$slots:{default:[Q1]},$$scope:{ctx:E}}}),Wr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"next_sentence_label",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1159",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Pe({props:{$$slots:{default:[U1]},$$scope:{ctx:E}}}),qn=new Ee({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[V1]},$$scope:{ctx:E}}}),Rr=new qe({}),Hr=new ie({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1241"}}),jn=new Pe({props:{$$slots:{default:[K1]},$$scope:{ctx:E}}}),Kr=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1264",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new Pe({props:{$$slots:{default:[G1]},$$scope:{ctx:E}}}),Sn=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[Y1]},$$scope:{ctx:E}}}),An=new Ee({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[J1]},$$scope:{ctx:E}}}),Gr=new qe({}),Yr=new ie({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1442"}}),In=new Pe({props:{$$slots:{default:[Z1]},$$scope:{ctx:E}}}),ea=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1471",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new Pe({props:{$$slots:{default:[X1]},$$scope:{ctx:E}}}),Ln=new Ee({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[eM]},$$scope:{ctx:E}}}),ta=new qe({}),oa=new ie({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1576"}}),Rn=new Pe({props:{$$slots:{default:[tM]},$$scope:{ctx:E}}}),aa=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1600",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Hn=new Pe({props:{$$slots:{default:[oM]},$$scope:{ctx:E}}}),Qn=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[nM]},$$scope:{ctx:E}}}),Un=new Ee({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[sM]},$$scope:{ctx:E}}}),ia=new qe({}),la=new ie({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1337"}}),Kn=new Pe({props:{$$slots:{default:[rM]},$$scope:{ctx:E}}}),ha=new ie({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1356",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gn=new Pe({props:{$$slots:{default:[aM]},$$scope:{ctx:E}}}),Yn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[iM]},$$scope:{ctx:E}}}),Jn=new Ee({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[lM]},$$scope:{ctx:E}}}),{c(){d=r("meta"),_=h(),c=r("h1"),p=r("a"),v=r("span"),T(l.$$.fragment),u=h(),x=r("span"),he=n("MobileBERT"),K=h(),z=r("h2"),J=r("a"),D=r("span"),T(X.$$.fragment),me=h(),L=r("span"),ue=n("Overview"),le=h(),V=r("p"),N=n("The MobileBERT model was proposed in "),ee=r("a"),G=n("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),P=n(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),C=h(),ne=r("p"),H=n("The abstract from the paper is the following:"),de=h(),se=r("p"),W=r("em"),fe=n(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),ce=h(),q=r("p"),ge=n("Tips:"),R=h(),Z=r("ul"),re=r("li"),Q=n(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),_e=h(),ae=r("li"),S=n(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),pe=h(),O=r("p"),be=n("This model was contributed by "),f=r("a"),B=n("vshampor"),Y=n(". The original code can be found "),Te=r("a"),ye=n("here"),A=n("."),$e=h(),ve=r("h2"),ke=r("a"),j=r("span"),T(I.$$.fragment),Fe=h(),Me=r("span"),U=n("MobileBertConfig"),we=h(),te=r("div"),T(oe.$$.fragment),Be=h(),Dt=r("p"),Fp=n("This is the configuration class to store the configuration of a "),Ma=r("a"),Bp=n("MobileBertModel"),Ep=n(" or a "),$a=r("a"),xp=n("TFMobileBertModel"),zp=n(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.`),Pp=h(),Lt=r("p"),qp=n("Configuration objects inherit from "),wa=r("a"),Cp=n("PretrainedConfig"),jp=n(` and can be used to control the model outputs. Read the
documentation from `),ya=r("a"),Np=n("PretrainedConfig"),Sp=n(" for more information."),Ap=h(),T(Co.$$.fragment),Op=h(),qi=r("p"),Ip=n(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Sd=h(),Wt=r("h2"),jo=r("a"),Ci=r("span"),T(ls.$$.fragment),Dp=h(),ji=r("span"),Lp=n("MobileBertTokenizer"),Ad=h(),st=r("div"),T(ds.$$.fragment),Wp=h(),Ni=r("p"),Rp=n("Construct a MobileBERT tokenizer."),Hp=h(),No=r("p"),Fa=r("a"),Qp=n("MobileBertTokenizer"),Up=n(" is identical to "),Ba=r("a"),Vp=n("BertTokenizer"),Kp=n(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Gp=h(),cs=r("p"),Yp=n("Refer to superclass "),Ea=r("a"),Jp=n("BertTokenizer"),Zp=n(" for usage examples and documentation concerning parameters."),Od=h(),Rt=r("h2"),So=r("a"),Si=r("span"),T(ps.$$.fragment),Xp=h(),Ai=r("span"),eh=n("MobileBertTokenizerFast"),Id=h(),rt=r("div"),T(hs.$$.fragment),th=h(),ms=r("p"),oh=n("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Oi=r("em"),nh=n("tokenizers"),sh=n(" library)."),rh=h(),Ao=r("p"),xa=r("a"),ah=n("MobileBertTokenizerFast"),ih=n(" is identical to "),za=r("a"),lh=n("BertTokenizerFast"),dh=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ch=h(),us=r("p"),ph=n("Refer to superclass "),Pa=r("a"),hh=n("BertTokenizerFast"),mh=n(" for usage examples and documentation concerning parameters."),Dd=h(),Ht=r("h2"),Oo=r("a"),Ii=r("span"),T(fs.$$.fragment),uh=h(),Di=r("span"),fh=n("MobileBert specific outputs"),Ld=h(),Qt=r("div"),T(gs.$$.fragment),gh=h(),_s=r("p"),_h=n("Output type of "),qa=r("a"),bh=n("MobileBertForPreTraining"),vh=n("."),Wd=h(),Ut=r("div"),T(bs.$$.fragment),kh=h(),vs=r("p"),Th=n("Output type of "),Ca=r("a"),Mh=n("TFMobileBertForPreTraining"),$h=n("."),Rd=h(),Vt=r("h2"),Io=r("a"),Li=r("span"),T(ks.$$.fragment),wh=h(),Wi=r("span"),yh=n("MobileBertModel"),Hd=h(),je=r("div"),T(Ts.$$.fragment),Fh=h(),Ri=r("p"),Bh=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Eh=h(),Ms=r("p"),xh=n("This model inherits from "),ja=r("a"),zh=n("PreTrainedModel"),Ph=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh=h(),$s=r("p"),Ch=n("This model is also a PyTorch "),ws=r("a"),jh=n("torch.nn.Module"),Nh=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sh=h(),Hi=r("p"),ys=r("a"),Ah=n("https://arxiv.org/pdf/2004.02984.pdf"),Oh=h(),it=r("div"),T(Fs.$$.fragment),Ih=h(),Kt=r("p"),Dh=n("The "),Na=r("a"),Lh=n("MobileBertModel"),Wh=n(" forward method, overrides the "),Qi=r("code"),Rh=n("__call__"),Hh=n(" special method."),Qh=h(),T(Do.$$.fragment),Uh=h(),T(Lo.$$.fragment),Qd=h(),Gt=r("h2"),Wo=r("a"),Ui=r("span"),T(Bs.$$.fragment),Vh=h(),Vi=r("span"),Kh=n("MobileBertForPreTraining"),Ud=h(),Re=r("div"),T(Es.$$.fragment),Gh=h(),Yt=r("p"),Yh=n("MobileBert Model with two heads on top as done during the pretraining: a "),Ki=r("code"),Jh=n("masked language modeling"),Zh=n(` head and a
`),Gi=r("code"),Xh=n("next sentence prediction (classification)"),em=n(" head."),tm=h(),xs=r("p"),om=n("This model inherits from "),Sa=r("a"),nm=n("PreTrainedModel"),sm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm=h(),zs=r("p"),am=n("This model is also a PyTorch "),Ps=r("a"),im=n("torch.nn.Module"),lm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm=h(),lt=r("div"),T(qs.$$.fragment),cm=h(),Jt=r("p"),pm=n("The "),Aa=r("a"),hm=n("MobileBertForPreTraining"),mm=n(" forward method, overrides the "),Yi=r("code"),um=n("__call__"),fm=n(" special method."),gm=h(),T(Ro.$$.fragment),_m=h(),T(Ho.$$.fragment),Vd=h(),Zt=r("h2"),Qo=r("a"),Ji=r("span"),T(Cs.$$.fragment),bm=h(),Zi=r("span"),vm=n("MobileBertForMaskedLM"),Kd=h(),He=r("div"),T(js.$$.fragment),km=h(),Ns=r("p"),Tm=n("MobileBert Model with a "),Xi=r("code"),Mm=n("language modeling"),$m=n(" head on top."),wm=h(),Ss=r("p"),ym=n("This model inherits from "),Oa=r("a"),Fm=n("PreTrainedModel"),Bm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Em=h(),As=r("p"),xm=n("This model is also a PyTorch "),Os=r("a"),zm=n("torch.nn.Module"),Pm=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qm=h(),Ye=r("div"),T(Is.$$.fragment),Cm=h(),Xt=r("p"),jm=n("The "),Ia=r("a"),Nm=n("MobileBertForMaskedLM"),Sm=n(" forward method, overrides the "),el=r("code"),Am=n("__call__"),Om=n(" special method."),Im=h(),T(Uo.$$.fragment),Dm=h(),T(Vo.$$.fragment),Lm=h(),T(Ko.$$.fragment),Gd=h(),eo=r("h2"),Go=r("a"),tl=r("span"),T(Ds.$$.fragment),Wm=h(),ol=r("span"),Rm=n("MobileBertForNextSentencePrediction"),Yd=h(),Qe=r("div"),T(Ls.$$.fragment),Hm=h(),Ws=r("p"),Qm=n("MobileBert Model with a "),nl=r("code"),Um=n("next sentence prediction (classification)"),Vm=n(" head on top."),Km=h(),Rs=r("p"),Gm=n("This model inherits from "),Da=r("a"),Ym=n("PreTrainedModel"),Jm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm=h(),Hs=r("p"),Xm=n("This model is also a PyTorch "),Qs=r("a"),eu=n("torch.nn.Module"),tu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou=h(),dt=r("div"),T(Us.$$.fragment),nu=h(),to=r("p"),su=n("The "),La=r("a"),ru=n("MobileBertForNextSentencePrediction"),au=n(" forward method, overrides the "),sl=r("code"),iu=n("__call__"),lu=n(" special method."),du=h(),T(Yo.$$.fragment),cu=h(),T(Jo.$$.fragment),Jd=h(),oo=r("h2"),Zo=r("a"),rl=r("span"),T(Vs.$$.fragment),pu=h(),al=r("span"),hu=n("MobileBertForSequenceClassification"),Zd=h(),Ue=r("div"),T(Ks.$$.fragment),mu=h(),il=r("p"),uu=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fu=h(),Gs=r("p"),gu=n("This model inherits from "),Wa=r("a"),_u=n("PreTrainedModel"),bu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu=h(),Ys=r("p"),ku=n("This model is also a PyTorch "),Js=r("a"),Tu=n("torch.nn.Module"),Mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$u=h(),Ce=r("div"),T(Zs.$$.fragment),wu=h(),no=r("p"),yu=n("The "),Ra=r("a"),Fu=n("MobileBertForSequenceClassification"),Bu=n(" forward method, overrides the "),ll=r("code"),Eu=n("__call__"),xu=n(" special method."),zu=h(),T(Xo.$$.fragment),Pu=h(),T(en.$$.fragment),qu=h(),T(tn.$$.fragment),Cu=h(),T(on.$$.fragment),ju=h(),T(nn.$$.fragment),Xd=h(),so=r("h2"),sn=r("a"),dl=r("span"),T(Xs.$$.fragment),Nu=h(),cl=r("span"),Su=n("MobileBertForMultipleChoice"),ec=h(),Ve=r("div"),T(er.$$.fragment),Au=h(),pl=r("p"),Ou=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Iu=h(),tr=r("p"),Du=n("This model inherits from "),Ha=r("a"),Lu=n("PreTrainedModel"),Wu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ru=h(),or=r("p"),Hu=n("This model is also a PyTorch "),nr=r("a"),Qu=n("torch.nn.Module"),Uu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vu=h(),ct=r("div"),T(sr.$$.fragment),Ku=h(),ro=r("p"),Gu=n("The "),Qa=r("a"),Yu=n("MobileBertForMultipleChoice"),Ju=n(" forward method, overrides the "),hl=r("code"),Zu=n("__call__"),Xu=n(" special method."),ef=h(),T(rn.$$.fragment),tf=h(),T(an.$$.fragment),tc=h(),ao=r("h2"),ln=r("a"),ml=r("span"),T(rr.$$.fragment),of=h(),ul=r("span"),nf=n("MobileBertForTokenClassification"),oc=h(),Ke=r("div"),T(ar.$$.fragment),sf=h(),fl=r("p"),rf=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),af=h(),ir=r("p"),lf=n("This model inherits from "),Ua=r("a"),df=n("PreTrainedModel"),cf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf=h(),lr=r("p"),hf=n("This model is also a PyTorch "),dr=r("a"),mf=n("torch.nn.Module"),uf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff=h(),Je=r("div"),T(cr.$$.fragment),gf=h(),io=r("p"),_f=n("The "),Va=r("a"),bf=n("MobileBertForTokenClassification"),vf=n(" forward method, overrides the "),gl=r("code"),kf=n("__call__"),Tf=n(" special method."),Mf=h(),T(dn.$$.fragment),$f=h(),T(cn.$$.fragment),wf=h(),T(pn.$$.fragment),nc=h(),lo=r("h2"),hn=r("a"),_l=r("span"),T(pr.$$.fragment),yf=h(),bl=r("span"),Ff=n("MobileBertForQuestionAnswering"),sc=h(),Ge=r("div"),T(hr.$$.fragment),Bf=h(),co=r("p"),Ef=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),vl=r("code"),xf=n("span start logits"),zf=n(" and "),kl=r("code"),Pf=n("span end logits"),qf=n(")."),Cf=h(),mr=r("p"),jf=n("This model inherits from "),Ka=r("a"),Nf=n("PreTrainedModel"),Sf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Af=h(),ur=r("p"),Of=n("This model is also a PyTorch "),fr=r("a"),If=n("torch.nn.Module"),Df=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lf=h(),Ze=r("div"),T(gr.$$.fragment),Wf=h(),po=r("p"),Rf=n("The "),Ga=r("a"),Hf=n("MobileBertForQuestionAnswering"),Qf=n(" forward method, overrides the "),Tl=r("code"),Uf=n("__call__"),Vf=n(" special method."),Kf=h(),T(mn.$$.fragment),Gf=h(),T(un.$$.fragment),Yf=h(),T(fn.$$.fragment),rc=h(),ho=r("h2"),gn=r("a"),Ml=r("span"),T(_r.$$.fragment),Jf=h(),$l=r("span"),Zf=n("TFMobileBertModel"),ac=h(),Ne=r("div"),T(br.$$.fragment),Xf=h(),wl=r("p"),eg=n("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),tg=h(),vr=r("p"),og=n("This model inherits from "),Ya=r("a"),ng=n("TFPreTrainedModel"),sg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rg=h(),kr=r("p"),ag=n("This model is also a "),Tr=r("a"),ig=n("tf.keras.Model"),lg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dg=h(),T(_n.$$.fragment),cg=h(),pt=r("div"),T(Mr.$$.fragment),pg=h(),mo=r("p"),hg=n("The "),Ja=r("a"),mg=n("TFMobileBertModel"),ug=n(" forward method, overrides the "),yl=r("code"),fg=n("__call__"),gg=n(" special method."),_g=h(),T(bn.$$.fragment),bg=h(),T(vn.$$.fragment),ic=h(),uo=r("h2"),kn=r("a"),Fl=r("span"),T($r.$$.fragment),vg=h(),Bl=r("span"),kg=n("TFMobileBertForPreTraining"),lc=h(),Se=r("div"),T(wr.$$.fragment),Tg=h(),fo=r("p"),Mg=n("MobileBert Model with two heads on top as done during the pretraining: a "),El=r("code"),$g=n("masked language modeling"),wg=n(` head and a
`),xl=r("code"),yg=n("next sentence prediction (classification)"),Fg=n(" head."),Bg=h(),yr=r("p"),Eg=n("This model inherits from "),Za=r("a"),xg=n("TFPreTrainedModel"),zg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pg=h(),Fr=r("p"),qg=n("This model is also a "),Br=r("a"),Cg=n("tf.keras.Model"),jg=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ng=h(),T(Tn.$$.fragment),Sg=h(),ht=r("div"),T(Er.$$.fragment),Ag=h(),go=r("p"),Og=n("The "),Xa=r("a"),Ig=n("TFMobileBertForPreTraining"),Dg=n(" forward method, overrides the "),zl=r("code"),Lg=n("__call__"),Wg=n(" special method."),Rg=h(),T(Mn.$$.fragment),Hg=h(),T($n.$$.fragment),dc=h(),_o=r("h2"),wn=r("a"),Pl=r("span"),T(xr.$$.fragment),Qg=h(),ql=r("span"),Ug=n("TFMobileBertForMaskedLM"),cc=h(),Ae=r("div"),T(zr.$$.fragment),Vg=h(),Pr=r("p"),Kg=n("MobileBert Model with a "),Cl=r("code"),Gg=n("language modeling"),Yg=n(" head on top."),Jg=h(),qr=r("p"),Zg=n("This model inherits from "),ei=r("a"),Xg=n("TFPreTrainedModel"),e_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),t_=h(),Cr=r("p"),o_=n("This model is also a "),jr=r("a"),n_=n("tf.keras.Model"),s_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),r_=h(),T(yn.$$.fragment),a_=h(),Xe=r("div"),T(Nr.$$.fragment),i_=h(),bo=r("p"),l_=n("The "),ti=r("a"),d_=n("TFMobileBertForMaskedLM"),c_=n(" forward method, overrides the "),jl=r("code"),p_=n("__call__"),h_=n(" special method."),m_=h(),T(Fn.$$.fragment),u_=h(),T(Bn.$$.fragment),f_=h(),T(En.$$.fragment),pc=h(),vo=r("h2"),xn=r("a"),Nl=r("span"),T(Sr.$$.fragment),g_=h(),Sl=r("span"),__=n("TFMobileBertForNextSentencePrediction"),hc=h(),Oe=r("div"),T(Ar.$$.fragment),b_=h(),Or=r("p"),v_=n("MobileBert Model with a "),Al=r("code"),k_=n("next sentence prediction (classification)"),T_=n(" head on top."),M_=h(),Ir=r("p"),$_=n("This model inherits from "),oi=r("a"),w_=n("TFPreTrainedModel"),y_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),F_=h(),Dr=r("p"),B_=n("This model is also a "),Lr=r("a"),E_=n("tf.keras.Model"),x_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),z_=h(),T(zn.$$.fragment),P_=h(),mt=r("div"),T(Wr.$$.fragment),q_=h(),ko=r("p"),C_=n("The "),ni=r("a"),j_=n("TFMobileBertForNextSentencePrediction"),N_=n(" forward method, overrides the "),Ol=r("code"),S_=n("__call__"),A_=n(" special method."),O_=h(),T(Pn.$$.fragment),I_=h(),T(qn.$$.fragment),mc=h(),To=r("h2"),Cn=r("a"),Il=r("span"),T(Rr.$$.fragment),D_=h(),Dl=r("span"),L_=n("TFMobileBertForSequenceClassification"),uc=h(),Ie=r("div"),T(Hr.$$.fragment),W_=h(),Ll=r("p"),R_=n(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H_=h(),Qr=r("p"),Q_=n("This model inherits from "),si=r("a"),U_=n("TFPreTrainedModel"),V_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),K_=h(),Ur=r("p"),G_=n("This model is also a "),Vr=r("a"),Y_=n("tf.keras.Model"),J_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Z_=h(),T(jn.$$.fragment),X_=h(),et=r("div"),T(Kr.$$.fragment),eb=h(),Mo=r("p"),tb=n("The "),ri=r("a"),ob=n("TFMobileBertForSequenceClassification"),nb=n(" forward method, overrides the "),Wl=r("code"),sb=n("__call__"),rb=n(" special method."),ab=h(),T(Nn.$$.fragment),ib=h(),T(Sn.$$.fragment),lb=h(),T(An.$$.fragment),fc=h(),$o=r("h2"),On=r("a"),Rl=r("span"),T(Gr.$$.fragment),db=h(),Hl=r("span"),cb=n("TFMobileBertForMultipleChoice"),gc=h(),De=r("div"),T(Yr.$$.fragment),pb=h(),Ql=r("p"),hb=n(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mb=h(),Jr=r("p"),ub=n("This model inherits from "),ai=r("a"),fb=n("TFPreTrainedModel"),gb=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_b=h(),Zr=r("p"),bb=n("This model is also a "),Xr=r("a"),vb=n("tf.keras.Model"),kb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tb=h(),T(In.$$.fragment),Mb=h(),ut=r("div"),T(ea.$$.fragment),$b=h(),wo=r("p"),wb=n("The "),ii=r("a"),yb=n("TFMobileBertForMultipleChoice"),Fb=n(" forward method, overrides the "),Ul=r("code"),Bb=n("__call__"),Eb=n(" special method."),xb=h(),T(Dn.$$.fragment),zb=h(),T(Ln.$$.fragment),_c=h(),yo=r("h2"),Wn=r("a"),Vl=r("span"),T(ta.$$.fragment),Pb=h(),Kl=r("span"),qb=n("TFMobileBertForTokenClassification"),bc=h(),Le=r("div"),T(oa.$$.fragment),Cb=h(),Gl=r("p"),jb=n(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nb=h(),na=r("p"),Sb=n("This model inherits from "),li=r("a"),Ab=n("TFPreTrainedModel"),Ob=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ib=h(),sa=r("p"),Db=n("This model is also a "),ra=r("a"),Lb=n("tf.keras.Model"),Wb=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rb=h(),T(Rn.$$.fragment),Hb=h(),tt=r("div"),T(aa.$$.fragment),Qb=h(),Fo=r("p"),Ub=n("The "),di=r("a"),Vb=n("TFMobileBertForTokenClassification"),Kb=n(" forward method, overrides the "),Yl=r("code"),Gb=n("__call__"),Yb=n(" special method."),Jb=h(),T(Hn.$$.fragment),Zb=h(),T(Qn.$$.fragment),Xb=h(),T(Un.$$.fragment),vc=h(),Bo=r("h2"),Vn=r("a"),Jl=r("span"),T(ia.$$.fragment),ev=h(),Zl=r("span"),tv=n("TFMobileBertForQuestionAnswering"),kc=h(),We=r("div"),T(la.$$.fragment),ov=h(),Eo=r("p"),nv=n(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=r("code"),sv=n("span start logits"),rv=n(" and "),ed=r("code"),av=n("span end logits"),iv=n(")."),lv=h(),da=r("p"),dv=n("This model inherits from "),ci=r("a"),cv=n("TFPreTrainedModel"),pv=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv=h(),ca=r("p"),mv=n("This model is also a "),pa=r("a"),uv=n("tf.keras.Model"),fv=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gv=h(),T(Kn.$$.fragment),_v=h(),ot=r("div"),T(ha.$$.fragment),bv=h(),xo=r("p"),vv=n("The "),pi=r("a"),kv=n("TFMobileBertForQuestionAnswering"),Tv=n(" forward method, overrides the "),td=r("code"),Mv=n("__call__"),$v=n(" special method."),wv=h(),T(Gn.$$.fragment),yv=h(),T(Yn.$$.fragment),Fv=h(),T(Jn.$$.fragment),this.h()},l(o){const k=c1('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),_=m(o),c=a(o,"H1",{class:!0});var ma=i(c);p=a(ma,"A",{id:!0,class:!0,href:!0});var od=i(p);v=a(od,"SPAN",{});var nd=i(v);M(l.$$.fragment,nd),nd.forEach(t),od.forEach(t),u=m(ma),x=a(ma,"SPAN",{});var sd=i(x);he=s(sd,"MobileBERT"),sd.forEach(t),ma.forEach(t),K=m(o),z=a(o,"H2",{class:!0});var ua=i(z);J=a(ua,"A",{id:!0,class:!0,href:!0});var rd=i(J);D=a(rd,"SPAN",{});var ad=i(D);M(X.$$.fragment,ad),ad.forEach(t),rd.forEach(t),me=m(ua),L=a(ua,"SPAN",{});var id=i(L);ue=s(id,"Overview"),id.forEach(t),ua.forEach(t),le=m(o),V=a(o,"P",{});var fa=i(V);N=s(fa,"The MobileBERT model was proposed in "),ee=a(fa,"A",{href:!0,rel:!0});var ld=i(ee);G=s(ld,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),ld.forEach(t),P=s(fa,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),fa.forEach(t),C=m(o),ne=a(o,"P",{});var dd=i(ne);H=s(dd,"The abstract from the paper is the following:"),dd.forEach(t),de=m(o),se=a(o,"P",{});var cd=i(se);W=a(cd,"EM",{});var pd=i(W);fe=s(pd,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),pd.forEach(t),cd.forEach(t),ce=m(o),q=a(o,"P",{});var hd=i(q);ge=s(hd,"Tips:"),hd.forEach(t),R=m(o),Z=a(o,"UL",{});var ga=i(Z);re=a(ga,"LI",{});var md=i(re);Q=s(md,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),md.forEach(t),_e=m(ga),ae=a(ga,"LI",{});var ud=i(ae);S=s(ud,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),ud.forEach(t),ga.forEach(t),pe=m(o),O=a(o,"P",{});var zo=i(O);be=s(zo,"This model was contributed by "),f=a(zo,"A",{href:!0,rel:!0});var fd=i(f);B=s(fd,"vshampor"),fd.forEach(t),Y=s(zo,". The original code can be found "),Te=a(zo,"A",{href:!0,rel:!0});var gd=i(Te);ye=s(gd,"here"),gd.forEach(t),A=s(zo,"."),zo.forEach(t),$e=m(o),ve=a(o,"H2",{class:!0});var _a=i(ve);ke=a(_a,"A",{id:!0,class:!0,href:!0});var _d=i(ke);j=a(_d,"SPAN",{});var bd=i(j);M(I.$$.fragment,bd),bd.forEach(t),_d.forEach(t),Fe=m(_a),Me=a(_a,"SPAN",{});var vd=i(Me);U=s(vd,"MobileBertConfig"),vd.forEach(t),_a.forEach(t),we=m(o),te=a(o,"DIV",{class:!0});var at=i(te);M(oe.$$.fragment,at),Be=m(at),Dt=a(at,"P",{});var Po=i(Dt);Fp=s(Po,"This is the configuration class to store the configuration of a "),Ma=a(Po,"A",{href:!0});var kd=i(Ma);Bp=s(kd,"MobileBertModel"),kd.forEach(t),Ep=s(Po," or a "),$a=a(Po,"A",{href:!0});var Td=i($a);xp=s(Td,"TFMobileBertModel"),Td.forEach(t),zp=s(Po,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.`),Po.forEach(t),Pp=m(at),Lt=a(at,"P",{});var qo=i(Lt);qp=s(qo,"Configuration objects inherit from "),wa=a(qo,"A",{href:!0});var Md=i(wa);Cp=s(Md,"PretrainedConfig"),Md.forEach(t),jp=s(qo,` and can be used to control the model outputs. Read the
documentation from `),ya=a(qo,"A",{href:!0});var $d=i(ya);Np=s($d,"PretrainedConfig"),$d.forEach(t),Sp=s(qo," for more information."),qo.forEach(t),Ap=m(at),M(Co.$$.fragment,at),Op=m(at),qi=a(at,"P",{});var wd=i(qi);Ip=s(wd,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),wd.forEach(t),at.forEach(t),Sd=m(o),Wt=a(o,"H2",{class:!0});var ba=i(Wt);jo=a(ba,"A",{id:!0,class:!0,href:!0});var yd=i(jo);Ci=a(yd,"SPAN",{});var Fd=i(Ci);M(ls.$$.fragment,Fd),Fd.forEach(t),yd.forEach(t),Dp=m(ba),ji=a(ba,"SPAN",{});var Bd=i(ji);Lp=s(Bd,"MobileBertTokenizer"),Bd.forEach(t),ba.forEach(t),Ad=m(o),st=a(o,"DIV",{class:!0});var wt=i(st);M(ds.$$.fragment,wt),Wp=m(wt),Ni=a(wt,"P",{});var Ed=i(Ni);Rp=s(Ed,"Construct a MobileBERT tokenizer."),Ed.forEach(t),Hp=m(wt),No=a(wt,"P",{});var Zn=i(No);Fa=a(Zn,"A",{href:!0});var xd=i(Fa);Qp=s(xd,"MobileBertTokenizer"),xd.forEach(t),Up=s(Zn," is identical to "),Ba=a(Zn,"A",{href:!0});var zd=i(Ba);Vp=s(zd,"BertTokenizer"),zd.forEach(t),Kp=s(Zn,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Zn.forEach(t),Gp=m(wt),cs=a(wt,"P",{});var va=i(cs);Yp=s(va,"Refer to superclass "),Ea=a(va,"A",{href:!0});var Pd=i(Ea);Jp=s(Pd,"BertTokenizer"),Pd.forEach(t),Zp=s(va," for usage examples and documentation concerning parameters."),va.forEach(t),wt.forEach(t),Od=m(o),Rt=a(o,"H2",{class:!0});var ka=i(Rt);So=a(ka,"A",{id:!0,class:!0,href:!0});var qd=i(So);Si=a(qd,"SPAN",{});var Cd=i(Si);M(ps.$$.fragment,Cd),Cd.forEach(t),qd.forEach(t),Xp=m(ka),Ai=a(ka,"SPAN",{});var jd=i(Ai);eh=s(jd,"MobileBertTokenizerFast"),jd.forEach(t),ka.forEach(t),Id=m(o),rt=a(o,"DIV",{class:!0});var yt=i(rt);M(hs.$$.fragment,yt),th=m(yt),ms=a(yt,"P",{});var Ta=i(ms);oh=s(Ta,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Oi=a(Ta,"EM",{});var Nd=i(Oi);nh=s(Nd,"tokenizers"),Nd.forEach(t),sh=s(Ta," library)."),Ta.forEach(t),rh=m(yt),Ao=a(yt,"P",{});var Xn=i(Ao);xa=a(Xn,"A",{href:!0});var Bv=i(xa);ah=s(Bv,"MobileBertTokenizerFast"),Bv.forEach(t),ih=s(Xn," is identical to "),za=a(Xn,"A",{href:!0});var Ev=i(za);lh=s(Ev,"BertTokenizerFast"),Ev.forEach(t),dh=s(Xn,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Xn.forEach(t),ch=m(yt),us=a(yt,"P",{});var Mc=i(us);ph=s(Mc,"Refer to superclass "),Pa=a(Mc,"A",{href:!0});var xv=i(Pa);hh=s(xv,"BertTokenizerFast"),xv.forEach(t),mh=s(Mc," for usage examples and documentation concerning parameters."),Mc.forEach(t),yt.forEach(t),Dd=m(o),Ht=a(o,"H2",{class:!0});var $c=i(Ht);Oo=a($c,"A",{id:!0,class:!0,href:!0});var zv=i(Oo);Ii=a(zv,"SPAN",{});var Pv=i(Ii);M(fs.$$.fragment,Pv),Pv.forEach(t),zv.forEach(t),uh=m($c),Di=a($c,"SPAN",{});var qv=i(Di);fh=s(qv,"MobileBert specific outputs"),qv.forEach(t),$c.forEach(t),Ld=m(o),Qt=a(o,"DIV",{class:!0});var wc=i(Qt);M(gs.$$.fragment,wc),gh=m(wc),_s=a(wc,"P",{});var yc=i(_s);_h=s(yc,"Output type of "),qa=a(yc,"A",{href:!0});var Cv=i(qa);bh=s(Cv,"MobileBertForPreTraining"),Cv.forEach(t),vh=s(yc,"."),yc.forEach(t),wc.forEach(t),Wd=m(o),Ut=a(o,"DIV",{class:!0});var Fc=i(Ut);M(bs.$$.fragment,Fc),kh=m(Fc),vs=a(Fc,"P",{});var Bc=i(vs);Th=s(Bc,"Output type of "),Ca=a(Bc,"A",{href:!0});var jv=i(Ca);Mh=s(jv,"TFMobileBertForPreTraining"),jv.forEach(t),$h=s(Bc,"."),Bc.forEach(t),Fc.forEach(t),Rd=m(o),Vt=a(o,"H2",{class:!0});var Ec=i(Vt);Io=a(Ec,"A",{id:!0,class:!0,href:!0});var Nv=i(Io);Li=a(Nv,"SPAN",{});var Sv=i(Li);M(ks.$$.fragment,Sv),Sv.forEach(t),Nv.forEach(t),wh=m(Ec),Wi=a(Ec,"SPAN",{});var Av=i(Wi);yh=s(Av,"MobileBertModel"),Av.forEach(t),Ec.forEach(t),Hd=m(o),je=a(o,"DIV",{class:!0});var ft=i(je);M(Ts.$$.fragment,ft),Fh=m(ft),Ri=a(ft,"P",{});var Ov=i(Ri);Bh=s(Ov,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Ov.forEach(t),Eh=m(ft),Ms=a(ft,"P",{});var xc=i(Ms);xh=s(xc,"This model inherits from "),ja=a(xc,"A",{href:!0});var Iv=i(ja);zh=s(Iv,"PreTrainedModel"),Iv.forEach(t),Ph=s(xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc.forEach(t),qh=m(ft),$s=a(ft,"P",{});var zc=i($s);Ch=s(zc,"This model is also a PyTorch "),ws=a(zc,"A",{href:!0,rel:!0});var Dv=i(ws);jh=s(Dv,"torch.nn.Module"),Dv.forEach(t),Nh=s(zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zc.forEach(t),Sh=m(ft),Hi=a(ft,"P",{});var Lv=i(Hi);ys=a(Lv,"A",{href:!0,rel:!0});var Wv=i(ys);Ah=s(Wv,"https://arxiv.org/pdf/2004.02984.pdf"),Wv.forEach(t),Lv.forEach(t),Oh=m(ft),it=a(ft,"DIV",{class:!0});var es=i(it);M(Fs.$$.fragment,es),Ih=m(es),Kt=a(es,"P",{});var hi=i(Kt);Dh=s(hi,"The "),Na=a(hi,"A",{href:!0});var Rv=i(Na);Lh=s(Rv,"MobileBertModel"),Rv.forEach(t),Wh=s(hi," forward method, overrides the "),Qi=a(hi,"CODE",{});var Hv=i(Qi);Rh=s(Hv,"__call__"),Hv.forEach(t),Hh=s(hi," special method."),hi.forEach(t),Qh=m(es),M(Do.$$.fragment,es),Uh=m(es),M(Lo.$$.fragment,es),es.forEach(t),ft.forEach(t),Qd=m(o),Gt=a(o,"H2",{class:!0});var Pc=i(Gt);Wo=a(Pc,"A",{id:!0,class:!0,href:!0});var Qv=i(Wo);Ui=a(Qv,"SPAN",{});var Uv=i(Ui);M(Bs.$$.fragment,Uv),Uv.forEach(t),Qv.forEach(t),Vh=m(Pc),Vi=a(Pc,"SPAN",{});var Vv=i(Vi);Kh=s(Vv,"MobileBertForPreTraining"),Vv.forEach(t),Pc.forEach(t),Ud=m(o),Re=a(o,"DIV",{class:!0});var Ft=i(Re);M(Es.$$.fragment,Ft),Gh=m(Ft),Yt=a(Ft,"P",{});var mi=i(Yt);Yh=s(mi,"MobileBert Model with two heads on top as done during the pretraining: a "),Ki=a(mi,"CODE",{});var Kv=i(Ki);Jh=s(Kv,"masked language modeling"),Kv.forEach(t),Zh=s(mi,` head and a
`),Gi=a(mi,"CODE",{});var Gv=i(Gi);Xh=s(Gv,"next sentence prediction (classification)"),Gv.forEach(t),em=s(mi," head."),mi.forEach(t),tm=m(Ft),xs=a(Ft,"P",{});var qc=i(xs);om=s(qc,"This model inherits from "),Sa=a(qc,"A",{href:!0});var Yv=i(Sa);nm=s(Yv,"PreTrainedModel"),Yv.forEach(t),sm=s(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),rm=m(Ft),zs=a(Ft,"P",{});var Cc=i(zs);am=s(Cc,"This model is also a PyTorch "),Ps=a(Cc,"A",{href:!0,rel:!0});var Jv=i(Ps);im=s(Jv,"torch.nn.Module"),Jv.forEach(t),lm=s(Cc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cc.forEach(t),dm=m(Ft),lt=a(Ft,"DIV",{class:!0});var ts=i(lt);M(qs.$$.fragment,ts),cm=m(ts),Jt=a(ts,"P",{});var ui=i(Jt);pm=s(ui,"The "),Aa=a(ui,"A",{href:!0});var Zv=i(Aa);hm=s(Zv,"MobileBertForPreTraining"),Zv.forEach(t),mm=s(ui," forward method, overrides the "),Yi=a(ui,"CODE",{});var Xv=i(Yi);um=s(Xv,"__call__"),Xv.forEach(t),fm=s(ui," special method."),ui.forEach(t),gm=m(ts),M(Ro.$$.fragment,ts),_m=m(ts),M(Ho.$$.fragment,ts),ts.forEach(t),Ft.forEach(t),Vd=m(o),Zt=a(o,"H2",{class:!0});var jc=i(Zt);Qo=a(jc,"A",{id:!0,class:!0,href:!0});var ek=i(Qo);Ji=a(ek,"SPAN",{});var tk=i(Ji);M(Cs.$$.fragment,tk),tk.forEach(t),ek.forEach(t),bm=m(jc),Zi=a(jc,"SPAN",{});var ok=i(Zi);vm=s(ok,"MobileBertForMaskedLM"),ok.forEach(t),jc.forEach(t),Kd=m(o),He=a(o,"DIV",{class:!0});var Bt=i(He);M(js.$$.fragment,Bt),km=m(Bt),Ns=a(Bt,"P",{});var Nc=i(Ns);Tm=s(Nc,"MobileBert Model with a "),Xi=a(Nc,"CODE",{});var nk=i(Xi);Mm=s(nk,"language modeling"),nk.forEach(t),$m=s(Nc," head on top."),Nc.forEach(t),wm=m(Bt),Ss=a(Bt,"P",{});var Sc=i(Ss);ym=s(Sc,"This model inherits from "),Oa=a(Sc,"A",{href:!0});var sk=i(Oa);Fm=s(sk,"PreTrainedModel"),sk.forEach(t),Bm=s(Sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sc.forEach(t),Em=m(Bt),As=a(Bt,"P",{});var Ac=i(As);xm=s(Ac,"This model is also a PyTorch "),Os=a(Ac,"A",{href:!0,rel:!0});var rk=i(Os);zm=s(rk,"torch.nn.Module"),rk.forEach(t),Pm=s(Ac,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ac.forEach(t),qm=m(Bt),Ye=a(Bt,"DIV",{class:!0});var Et=i(Ye);M(Is.$$.fragment,Et),Cm=m(Et),Xt=a(Et,"P",{});var fi=i(Xt);jm=s(fi,"The "),Ia=a(fi,"A",{href:!0});var ak=i(Ia);Nm=s(ak,"MobileBertForMaskedLM"),ak.forEach(t),Sm=s(fi," forward method, overrides the "),el=a(fi,"CODE",{});var ik=i(el);Am=s(ik,"__call__"),ik.forEach(t),Om=s(fi," special method."),fi.forEach(t),Im=m(Et),M(Uo.$$.fragment,Et),Dm=m(Et),M(Vo.$$.fragment,Et),Lm=m(Et),M(Ko.$$.fragment,Et),Et.forEach(t),Bt.forEach(t),Gd=m(o),eo=a(o,"H2",{class:!0});var Oc=i(eo);Go=a(Oc,"A",{id:!0,class:!0,href:!0});var lk=i(Go);tl=a(lk,"SPAN",{});var dk=i(tl);M(Ds.$$.fragment,dk),dk.forEach(t),lk.forEach(t),Wm=m(Oc),ol=a(Oc,"SPAN",{});var ck=i(ol);Rm=s(ck,"MobileBertForNextSentencePrediction"),ck.forEach(t),Oc.forEach(t),Yd=m(o),Qe=a(o,"DIV",{class:!0});var xt=i(Qe);M(Ls.$$.fragment,xt),Hm=m(xt),Ws=a(xt,"P",{});var Ic=i(Ws);Qm=s(Ic,"MobileBert Model with a "),nl=a(Ic,"CODE",{});var pk=i(nl);Um=s(pk,"next sentence prediction (classification)"),pk.forEach(t),Vm=s(Ic," head on top."),Ic.forEach(t),Km=m(xt),Rs=a(xt,"P",{});var Dc=i(Rs);Gm=s(Dc,"This model inherits from "),Da=a(Dc,"A",{href:!0});var hk=i(Da);Ym=s(hk,"PreTrainedModel"),hk.forEach(t),Jm=s(Dc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dc.forEach(t),Zm=m(xt),Hs=a(xt,"P",{});var Lc=i(Hs);Xm=s(Lc,"This model is also a PyTorch "),Qs=a(Lc,"A",{href:!0,rel:!0});var mk=i(Qs);eu=s(mk,"torch.nn.Module"),mk.forEach(t),tu=s(Lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lc.forEach(t),ou=m(xt),dt=a(xt,"DIV",{class:!0});var os=i(dt);M(Us.$$.fragment,os),nu=m(os),to=a(os,"P",{});var gi=i(to);su=s(gi,"The "),La=a(gi,"A",{href:!0});var uk=i(La);ru=s(uk,"MobileBertForNextSentencePrediction"),uk.forEach(t),au=s(gi," forward method, overrides the "),sl=a(gi,"CODE",{});var fk=i(sl);iu=s(fk,"__call__"),fk.forEach(t),lu=s(gi," special method."),gi.forEach(t),du=m(os),M(Yo.$$.fragment,os),cu=m(os),M(Jo.$$.fragment,os),os.forEach(t),xt.forEach(t),Jd=m(o),oo=a(o,"H2",{class:!0});var Wc=i(oo);Zo=a(Wc,"A",{id:!0,class:!0,href:!0});var gk=i(Zo);rl=a(gk,"SPAN",{});var _k=i(rl);M(Vs.$$.fragment,_k),_k.forEach(t),gk.forEach(t),pu=m(Wc),al=a(Wc,"SPAN",{});var bk=i(al);hu=s(bk,"MobileBertForSequenceClassification"),bk.forEach(t),Wc.forEach(t),Zd=m(o),Ue=a(o,"DIV",{class:!0});var zt=i(Ue);M(Ks.$$.fragment,zt),mu=m(zt),il=a(zt,"P",{});var vk=i(il);uu=s(vk,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vk.forEach(t),fu=m(zt),Gs=a(zt,"P",{});var Rc=i(Gs);gu=s(Rc,"This model inherits from "),Wa=a(Rc,"A",{href:!0});var kk=i(Wa);_u=s(kk,"PreTrainedModel"),kk.forEach(t),bu=s(Rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rc.forEach(t),vu=m(zt),Ys=a(zt,"P",{});var Hc=i(Ys);ku=s(Hc,"This model is also a PyTorch "),Js=a(Hc,"A",{href:!0,rel:!0});var Tk=i(Js);Tu=s(Tk,"torch.nn.Module"),Tk.forEach(t),Mu=s(Hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc.forEach(t),$u=m(zt),Ce=a(zt,"DIV",{class:!0});var nt=i(Ce);M(Zs.$$.fragment,nt),wu=m(nt),no=a(nt,"P",{});var _i=i(no);yu=s(_i,"The "),Ra=a(_i,"A",{href:!0});var Mk=i(Ra);Fu=s(Mk,"MobileBertForSequenceClassification"),Mk.forEach(t),Bu=s(_i," forward method, overrides the "),ll=a(_i,"CODE",{});var $k=i(ll);Eu=s($k,"__call__"),$k.forEach(t),xu=s(_i," special method."),_i.forEach(t),zu=m(nt),M(Xo.$$.fragment,nt),Pu=m(nt),M(en.$$.fragment,nt),qu=m(nt),M(tn.$$.fragment,nt),Cu=m(nt),M(on.$$.fragment,nt),ju=m(nt),M(nn.$$.fragment,nt),nt.forEach(t),zt.forEach(t),Xd=m(o),so=a(o,"H2",{class:!0});var Qc=i(so);sn=a(Qc,"A",{id:!0,class:!0,href:!0});var wk=i(sn);dl=a(wk,"SPAN",{});var yk=i(dl);M(Xs.$$.fragment,yk),yk.forEach(t),wk.forEach(t),Nu=m(Qc),cl=a(Qc,"SPAN",{});var Fk=i(cl);Su=s(Fk,"MobileBertForMultipleChoice"),Fk.forEach(t),Qc.forEach(t),ec=m(o),Ve=a(o,"DIV",{class:!0});var Pt=i(Ve);M(er.$$.fragment,Pt),Au=m(Pt),pl=a(Pt,"P",{});var Bk=i(pl);Ou=s(Bk,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Bk.forEach(t),Iu=m(Pt),tr=a(Pt,"P",{});var Uc=i(tr);Du=s(Uc,"This model inherits from "),Ha=a(Uc,"A",{href:!0});var Ek=i(Ha);Lu=s(Ek,"PreTrainedModel"),Ek.forEach(t),Wu=s(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Ru=m(Pt),or=a(Pt,"P",{});var Vc=i(or);Hu=s(Vc,"This model is also a PyTorch "),nr=a(Vc,"A",{href:!0,rel:!0});var xk=i(nr);Qu=s(xk,"torch.nn.Module"),xk.forEach(t),Uu=s(Vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vc.forEach(t),Vu=m(Pt),ct=a(Pt,"DIV",{class:!0});var ns=i(ct);M(sr.$$.fragment,ns),Ku=m(ns),ro=a(ns,"P",{});var bi=i(ro);Gu=s(bi,"The "),Qa=a(bi,"A",{href:!0});var zk=i(Qa);Yu=s(zk,"MobileBertForMultipleChoice"),zk.forEach(t),Ju=s(bi," forward method, overrides the "),hl=a(bi,"CODE",{});var Pk=i(hl);Zu=s(Pk,"__call__"),Pk.forEach(t),Xu=s(bi," special method."),bi.forEach(t),ef=m(ns),M(rn.$$.fragment,ns),tf=m(ns),M(an.$$.fragment,ns),ns.forEach(t),Pt.forEach(t),tc=m(o),ao=a(o,"H2",{class:!0});var Kc=i(ao);ln=a(Kc,"A",{id:!0,class:!0,href:!0});var qk=i(ln);ml=a(qk,"SPAN",{});var Ck=i(ml);M(rr.$$.fragment,Ck),Ck.forEach(t),qk.forEach(t),of=m(Kc),ul=a(Kc,"SPAN",{});var jk=i(ul);nf=s(jk,"MobileBertForTokenClassification"),jk.forEach(t),Kc.forEach(t),oc=m(o),Ke=a(o,"DIV",{class:!0});var qt=i(Ke);M(ar.$$.fragment,qt),sf=m(qt),fl=a(qt,"P",{});var Nk=i(fl);rf=s(Nk,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nk.forEach(t),af=m(qt),ir=a(qt,"P",{});var Gc=i(ir);lf=s(Gc,"This model inherits from "),Ua=a(Gc,"A",{href:!0});var Sk=i(Ua);df=s(Sk,"PreTrainedModel"),Sk.forEach(t),cf=s(Gc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc.forEach(t),pf=m(qt),lr=a(qt,"P",{});var Yc=i(lr);hf=s(Yc,"This model is also a PyTorch "),dr=a(Yc,"A",{href:!0,rel:!0});var Ak=i(dr);mf=s(Ak,"torch.nn.Module"),Ak.forEach(t),uf=s(Yc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yc.forEach(t),ff=m(qt),Je=a(qt,"DIV",{class:!0});var Ct=i(Je);M(cr.$$.fragment,Ct),gf=m(Ct),io=a(Ct,"P",{});var vi=i(io);_f=s(vi,"The "),Va=a(vi,"A",{href:!0});var Ok=i(Va);bf=s(Ok,"MobileBertForTokenClassification"),Ok.forEach(t),vf=s(vi," forward method, overrides the "),gl=a(vi,"CODE",{});var Ik=i(gl);kf=s(Ik,"__call__"),Ik.forEach(t),Tf=s(vi," special method."),vi.forEach(t),Mf=m(Ct),M(dn.$$.fragment,Ct),$f=m(Ct),M(cn.$$.fragment,Ct),wf=m(Ct),M(pn.$$.fragment,Ct),Ct.forEach(t),qt.forEach(t),nc=m(o),lo=a(o,"H2",{class:!0});var Jc=i(lo);hn=a(Jc,"A",{id:!0,class:!0,href:!0});var Dk=i(hn);_l=a(Dk,"SPAN",{});var Lk=i(_l);M(pr.$$.fragment,Lk),Lk.forEach(t),Dk.forEach(t),yf=m(Jc),bl=a(Jc,"SPAN",{});var Wk=i(bl);Ff=s(Wk,"MobileBertForQuestionAnswering"),Wk.forEach(t),Jc.forEach(t),sc=m(o),Ge=a(o,"DIV",{class:!0});var jt=i(Ge);M(hr.$$.fragment,jt),Bf=m(jt),co=a(jt,"P",{});var ki=i(co);Ef=s(ki,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),vl=a(ki,"CODE",{});var Rk=i(vl);xf=s(Rk,"span start logits"),Rk.forEach(t),zf=s(ki," and "),kl=a(ki,"CODE",{});var Hk=i(kl);Pf=s(Hk,"span end logits"),Hk.forEach(t),qf=s(ki,")."),ki.forEach(t),Cf=m(jt),mr=a(jt,"P",{});var Zc=i(mr);jf=s(Zc,"This model inherits from "),Ka=a(Zc,"A",{href:!0});var Qk=i(Ka);Nf=s(Qk,"PreTrainedModel"),Qk.forEach(t),Sf=s(Zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zc.forEach(t),Af=m(jt),ur=a(jt,"P",{});var Xc=i(ur);Of=s(Xc,"This model is also a PyTorch "),fr=a(Xc,"A",{href:!0,rel:!0});var Uk=i(fr);If=s(Uk,"torch.nn.Module"),Uk.forEach(t),Df=s(Xc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xc.forEach(t),Lf=m(jt),Ze=a(jt,"DIV",{class:!0});var Nt=i(Ze);M(gr.$$.fragment,Nt),Wf=m(Nt),po=a(Nt,"P",{});var Ti=i(po);Rf=s(Ti,"The "),Ga=a(Ti,"A",{href:!0});var Vk=i(Ga);Hf=s(Vk,"MobileBertForQuestionAnswering"),Vk.forEach(t),Qf=s(Ti," forward method, overrides the "),Tl=a(Ti,"CODE",{});var Kk=i(Tl);Uf=s(Kk,"__call__"),Kk.forEach(t),Vf=s(Ti," special method."),Ti.forEach(t),Kf=m(Nt),M(mn.$$.fragment,Nt),Gf=m(Nt),M(un.$$.fragment,Nt),Yf=m(Nt),M(fn.$$.fragment,Nt),Nt.forEach(t),jt.forEach(t),rc=m(o),ho=a(o,"H2",{class:!0});var ep=i(ho);gn=a(ep,"A",{id:!0,class:!0,href:!0});var Gk=i(gn);Ml=a(Gk,"SPAN",{});var Yk=i(Ml);M(_r.$$.fragment,Yk),Yk.forEach(t),Gk.forEach(t),Jf=m(ep),$l=a(ep,"SPAN",{});var Jk=i($l);Zf=s(Jk,"TFMobileBertModel"),Jk.forEach(t),ep.forEach(t),ac=m(o),Ne=a(o,"DIV",{class:!0});var gt=i(Ne);M(br.$$.fragment,gt),Xf=m(gt),wl=a(gt,"P",{});var Zk=i(wl);eg=s(Zk,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Zk.forEach(t),tg=m(gt),vr=a(gt,"P",{});var tp=i(vr);og=s(tp,"This model inherits from "),Ya=a(tp,"A",{href:!0});var Xk=i(Ya);ng=s(Xk,"TFPreTrainedModel"),Xk.forEach(t),sg=s(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),rg=m(gt),kr=a(gt,"P",{});var op=i(kr);ag=s(op,"This model is also a "),Tr=a(op,"A",{href:!0,rel:!0});var eT=i(Tr);ig=s(eT,"tf.keras.Model"),eT.forEach(t),lg=s(op,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),op.forEach(t),dg=m(gt),M(_n.$$.fragment,gt),cg=m(gt),pt=a(gt,"DIV",{class:!0});var ss=i(pt);M(Mr.$$.fragment,ss),pg=m(ss),mo=a(ss,"P",{});var Mi=i(mo);hg=s(Mi,"The "),Ja=a(Mi,"A",{href:!0});var tT=i(Ja);mg=s(tT,"TFMobileBertModel"),tT.forEach(t),ug=s(Mi," forward method, overrides the "),yl=a(Mi,"CODE",{});var oT=i(yl);fg=s(oT,"__call__"),oT.forEach(t),gg=s(Mi," special method."),Mi.forEach(t),_g=m(ss),M(bn.$$.fragment,ss),bg=m(ss),M(vn.$$.fragment,ss),ss.forEach(t),gt.forEach(t),ic=m(o),uo=a(o,"H2",{class:!0});var np=i(uo);kn=a(np,"A",{id:!0,class:!0,href:!0});var nT=i(kn);Fl=a(nT,"SPAN",{});var sT=i(Fl);M($r.$$.fragment,sT),sT.forEach(t),nT.forEach(t),vg=m(np),Bl=a(np,"SPAN",{});var rT=i(Bl);kg=s(rT,"TFMobileBertForPreTraining"),rT.forEach(t),np.forEach(t),lc=m(o),Se=a(o,"DIV",{class:!0});var _t=i(Se);M(wr.$$.fragment,_t),Tg=m(_t),fo=a(_t,"P",{});var $i=i(fo);Mg=s($i,"MobileBert Model with two heads on top as done during the pretraining: a "),El=a($i,"CODE",{});var aT=i(El);$g=s(aT,"masked language modeling"),aT.forEach(t),wg=s($i,` head and a
`),xl=a($i,"CODE",{});var iT=i(xl);yg=s(iT,"next sentence prediction (classification)"),iT.forEach(t),Fg=s($i," head."),$i.forEach(t),Bg=m(_t),yr=a(_t,"P",{});var sp=i(yr);Eg=s(sp,"This model inherits from "),Za=a(sp,"A",{href:!0});var lT=i(Za);xg=s(lT,"TFPreTrainedModel"),lT.forEach(t),zg=s(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),Pg=m(_t),Fr=a(_t,"P",{});var rp=i(Fr);qg=s(rp,"This model is also a "),Br=a(rp,"A",{href:!0,rel:!0});var dT=i(Br);Cg=s(dT,"tf.keras.Model"),dT.forEach(t),jg=s(rp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rp.forEach(t),Ng=m(_t),M(Tn.$$.fragment,_t),Sg=m(_t),ht=a(_t,"DIV",{class:!0});var rs=i(ht);M(Er.$$.fragment,rs),Ag=m(rs),go=a(rs,"P",{});var wi=i(go);Og=s(wi,"The "),Xa=a(wi,"A",{href:!0});var cT=i(Xa);Ig=s(cT,"TFMobileBertForPreTraining"),cT.forEach(t),Dg=s(wi," forward method, overrides the "),zl=a(wi,"CODE",{});var pT=i(zl);Lg=s(pT,"__call__"),pT.forEach(t),Wg=s(wi," special method."),wi.forEach(t),Rg=m(rs),M(Mn.$$.fragment,rs),Hg=m(rs),M($n.$$.fragment,rs),rs.forEach(t),_t.forEach(t),dc=m(o),_o=a(o,"H2",{class:!0});var ap=i(_o);wn=a(ap,"A",{id:!0,class:!0,href:!0});var hT=i(wn);Pl=a(hT,"SPAN",{});var mT=i(Pl);M(xr.$$.fragment,mT),mT.forEach(t),hT.forEach(t),Qg=m(ap),ql=a(ap,"SPAN",{});var uT=i(ql);Ug=s(uT,"TFMobileBertForMaskedLM"),uT.forEach(t),ap.forEach(t),cc=m(o),Ae=a(o,"DIV",{class:!0});var bt=i(Ae);M(zr.$$.fragment,bt),Vg=m(bt),Pr=a(bt,"P",{});var ip=i(Pr);Kg=s(ip,"MobileBert Model with a "),Cl=a(ip,"CODE",{});var fT=i(Cl);Gg=s(fT,"language modeling"),fT.forEach(t),Yg=s(ip," head on top."),ip.forEach(t),Jg=m(bt),qr=a(bt,"P",{});var lp=i(qr);Zg=s(lp,"This model inherits from "),ei=a(lp,"A",{href:!0});var gT=i(ei);Xg=s(gT,"TFPreTrainedModel"),gT.forEach(t),e_=s(lp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lp.forEach(t),t_=m(bt),Cr=a(bt,"P",{});var dp=i(Cr);o_=s(dp,"This model is also a "),jr=a(dp,"A",{href:!0,rel:!0});var _T=i(jr);n_=s(_T,"tf.keras.Model"),_T.forEach(t),s_=s(dp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),dp.forEach(t),r_=m(bt),M(yn.$$.fragment,bt),a_=m(bt),Xe=a(bt,"DIV",{class:!0});var St=i(Xe);M(Nr.$$.fragment,St),i_=m(St),bo=a(St,"P",{});var yi=i(bo);l_=s(yi,"The "),ti=a(yi,"A",{href:!0});var bT=i(ti);d_=s(bT,"TFMobileBertForMaskedLM"),bT.forEach(t),c_=s(yi," forward method, overrides the "),jl=a(yi,"CODE",{});var vT=i(jl);p_=s(vT,"__call__"),vT.forEach(t),h_=s(yi," special method."),yi.forEach(t),m_=m(St),M(Fn.$$.fragment,St),u_=m(St),M(Bn.$$.fragment,St),f_=m(St),M(En.$$.fragment,St),St.forEach(t),bt.forEach(t),pc=m(o),vo=a(o,"H2",{class:!0});var cp=i(vo);xn=a(cp,"A",{id:!0,class:!0,href:!0});var kT=i(xn);Nl=a(kT,"SPAN",{});var TT=i(Nl);M(Sr.$$.fragment,TT),TT.forEach(t),kT.forEach(t),g_=m(cp),Sl=a(cp,"SPAN",{});var MT=i(Sl);__=s(MT,"TFMobileBertForNextSentencePrediction"),MT.forEach(t),cp.forEach(t),hc=m(o),Oe=a(o,"DIV",{class:!0});var vt=i(Oe);M(Ar.$$.fragment,vt),b_=m(vt),Or=a(vt,"P",{});var pp=i(Or);v_=s(pp,"MobileBert Model with a "),Al=a(pp,"CODE",{});var $T=i(Al);k_=s($T,"next sentence prediction (classification)"),$T.forEach(t),T_=s(pp," head on top."),pp.forEach(t),M_=m(vt),Ir=a(vt,"P",{});var hp=i(Ir);$_=s(hp,"This model inherits from "),oi=a(hp,"A",{href:!0});var wT=i(oi);w_=s(wT,"TFPreTrainedModel"),wT.forEach(t),y_=s(hp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hp.forEach(t),F_=m(vt),Dr=a(vt,"P",{});var mp=i(Dr);B_=s(mp,"This model is also a "),Lr=a(mp,"A",{href:!0,rel:!0});var yT=i(Lr);E_=s(yT,"tf.keras.Model"),yT.forEach(t),x_=s(mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mp.forEach(t),z_=m(vt),M(zn.$$.fragment,vt),P_=m(vt),mt=a(vt,"DIV",{class:!0});var as=i(mt);M(Wr.$$.fragment,as),q_=m(as),ko=a(as,"P",{});var Fi=i(ko);C_=s(Fi,"The "),ni=a(Fi,"A",{href:!0});var FT=i(ni);j_=s(FT,"TFMobileBertForNextSentencePrediction"),FT.forEach(t),N_=s(Fi," forward method, overrides the "),Ol=a(Fi,"CODE",{});var BT=i(Ol);S_=s(BT,"__call__"),BT.forEach(t),A_=s(Fi," special method."),Fi.forEach(t),O_=m(as),M(Pn.$$.fragment,as),I_=m(as),M(qn.$$.fragment,as),as.forEach(t),vt.forEach(t),mc=m(o),To=a(o,"H2",{class:!0});var up=i(To);Cn=a(up,"A",{id:!0,class:!0,href:!0});var ET=i(Cn);Il=a(ET,"SPAN",{});var xT=i(Il);M(Rr.$$.fragment,xT),xT.forEach(t),ET.forEach(t),D_=m(up),Dl=a(up,"SPAN",{});var zT=i(Dl);L_=s(zT,"TFMobileBertForSequenceClassification"),zT.forEach(t),up.forEach(t),uc=m(o),Ie=a(o,"DIV",{class:!0});var kt=i(Ie);M(Hr.$$.fragment,kt),W_=m(kt),Ll=a(kt,"P",{});var PT=i(Ll);R_=s(PT,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),PT.forEach(t),H_=m(kt),Qr=a(kt,"P",{});var fp=i(Qr);Q_=s(fp,"This model inherits from "),si=a(fp,"A",{href:!0});var qT=i(si);U_=s(qT,"TFPreTrainedModel"),qT.forEach(t),V_=s(fp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp.forEach(t),K_=m(kt),Ur=a(kt,"P",{});var gp=i(Ur);G_=s(gp,"This model is also a "),Vr=a(gp,"A",{href:!0,rel:!0});var CT=i(Vr);Y_=s(CT,"tf.keras.Model"),CT.forEach(t),J_=s(gp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gp.forEach(t),Z_=m(kt),M(jn.$$.fragment,kt),X_=m(kt),et=a(kt,"DIV",{class:!0});var At=i(et);M(Kr.$$.fragment,At),eb=m(At),Mo=a(At,"P",{});var Bi=i(Mo);tb=s(Bi,"The "),ri=a(Bi,"A",{href:!0});var jT=i(ri);ob=s(jT,"TFMobileBertForSequenceClassification"),jT.forEach(t),nb=s(Bi," forward method, overrides the "),Wl=a(Bi,"CODE",{});var NT=i(Wl);sb=s(NT,"__call__"),NT.forEach(t),rb=s(Bi," special method."),Bi.forEach(t),ab=m(At),M(Nn.$$.fragment,At),ib=m(At),M(Sn.$$.fragment,At),lb=m(At),M(An.$$.fragment,At),At.forEach(t),kt.forEach(t),fc=m(o),$o=a(o,"H2",{class:!0});var _p=i($o);On=a(_p,"A",{id:!0,class:!0,href:!0});var ST=i(On);Rl=a(ST,"SPAN",{});var AT=i(Rl);M(Gr.$$.fragment,AT),AT.forEach(t),ST.forEach(t),db=m(_p),Hl=a(_p,"SPAN",{});var OT=i(Hl);cb=s(OT,"TFMobileBertForMultipleChoice"),OT.forEach(t),_p.forEach(t),gc=m(o),De=a(o,"DIV",{class:!0});var Tt=i(De);M(Yr.$$.fragment,Tt),pb=m(Tt),Ql=a(Tt,"P",{});var IT=i(Ql);hb=s(IT,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),IT.forEach(t),mb=m(Tt),Jr=a(Tt,"P",{});var bp=i(Jr);ub=s(bp,"This model inherits from "),ai=a(bp,"A",{href:!0});var DT=i(ai);fb=s(DT,"TFPreTrainedModel"),DT.forEach(t),gb=s(bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp.forEach(t),_b=m(Tt),Zr=a(Tt,"P",{});var vp=i(Zr);bb=s(vp,"This model is also a "),Xr=a(vp,"A",{href:!0,rel:!0});var LT=i(Xr);vb=s(LT,"tf.keras.Model"),LT.forEach(t),kb=s(vp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vp.forEach(t),Tb=m(Tt),M(In.$$.fragment,Tt),Mb=m(Tt),ut=a(Tt,"DIV",{class:!0});var is=i(ut);M(ea.$$.fragment,is),$b=m(is),wo=a(is,"P",{});var Ei=i(wo);wb=s(Ei,"The "),ii=a(Ei,"A",{href:!0});var WT=i(ii);yb=s(WT,"TFMobileBertForMultipleChoice"),WT.forEach(t),Fb=s(Ei," forward method, overrides the "),Ul=a(Ei,"CODE",{});var RT=i(Ul);Bb=s(RT,"__call__"),RT.forEach(t),Eb=s(Ei," special method."),Ei.forEach(t),xb=m(is),M(Dn.$$.fragment,is),zb=m(is),M(Ln.$$.fragment,is),is.forEach(t),Tt.forEach(t),_c=m(o),yo=a(o,"H2",{class:!0});var kp=i(yo);Wn=a(kp,"A",{id:!0,class:!0,href:!0});var HT=i(Wn);Vl=a(HT,"SPAN",{});var QT=i(Vl);M(ta.$$.fragment,QT),QT.forEach(t),HT.forEach(t),Pb=m(kp),Kl=a(kp,"SPAN",{});var UT=i(Kl);qb=s(UT,"TFMobileBertForTokenClassification"),UT.forEach(t),kp.forEach(t),bc=m(o),Le=a(o,"DIV",{class:!0});var Mt=i(Le);M(oa.$$.fragment,Mt),Cb=m(Mt),Gl=a(Mt,"P",{});var VT=i(Gl);jb=s(VT,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),VT.forEach(t),Nb=m(Mt),na=a(Mt,"P",{});var Tp=i(na);Sb=s(Tp,"This model inherits from "),li=a(Tp,"A",{href:!0});var KT=i(li);Ab=s(KT,"TFPreTrainedModel"),KT.forEach(t),Ob=s(Tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tp.forEach(t),Ib=m(Mt),sa=a(Mt,"P",{});var Mp=i(sa);Db=s(Mp,"This model is also a "),ra=a(Mp,"A",{href:!0,rel:!0});var GT=i(ra);Lb=s(GT,"tf.keras.Model"),GT.forEach(t),Wb=s(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),Rb=m(Mt),M(Rn.$$.fragment,Mt),Hb=m(Mt),tt=a(Mt,"DIV",{class:!0});var Ot=i(tt);M(aa.$$.fragment,Ot),Qb=m(Ot),Fo=a(Ot,"P",{});var xi=i(Fo);Ub=s(xi,"The "),di=a(xi,"A",{href:!0});var YT=i(di);Vb=s(YT,"TFMobileBertForTokenClassification"),YT.forEach(t),Kb=s(xi," forward method, overrides the "),Yl=a(xi,"CODE",{});var JT=i(Yl);Gb=s(JT,"__call__"),JT.forEach(t),Yb=s(xi," special method."),xi.forEach(t),Jb=m(Ot),M(Hn.$$.fragment,Ot),Zb=m(Ot),M(Qn.$$.fragment,Ot),Xb=m(Ot),M(Un.$$.fragment,Ot),Ot.forEach(t),Mt.forEach(t),vc=m(o),Bo=a(o,"H2",{class:!0});var $p=i(Bo);Vn=a($p,"A",{id:!0,class:!0,href:!0});var ZT=i(Vn);Jl=a(ZT,"SPAN",{});var XT=i(Jl);M(ia.$$.fragment,XT),XT.forEach(t),ZT.forEach(t),ev=m($p),Zl=a($p,"SPAN",{});var e1=i(Zl);tv=s(e1,"TFMobileBertForQuestionAnswering"),e1.forEach(t),$p.forEach(t),kc=m(o),We=a(o,"DIV",{class:!0});var $t=i(We);M(la.$$.fragment,$t),ov=m($t),Eo=a($t,"P",{});var zi=i(Eo);nv=s(zi,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Xl=a(zi,"CODE",{});var t1=i(Xl);sv=s(t1,"span start logits"),t1.forEach(t),rv=s(zi," and "),ed=a(zi,"CODE",{});var o1=i(ed);av=s(o1,"span end logits"),o1.forEach(t),iv=s(zi,")."),zi.forEach(t),lv=m($t),da=a($t,"P",{});var wp=i(da);dv=s(wp,"This model inherits from "),ci=a(wp,"A",{href:!0});var n1=i(ci);cv=s(n1,"TFPreTrainedModel"),n1.forEach(t),pv=s(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),hv=m($t),ca=a($t,"P",{});var yp=i(ca);mv=s(yp,"This model is also a "),pa=a(yp,"A",{href:!0,rel:!0});var s1=i(pa);uv=s(s1,"tf.keras.Model"),s1.forEach(t),fv=s(yp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yp.forEach(t),gv=m($t),M(Kn.$$.fragment,$t),_v=m($t),ot=a($t,"DIV",{class:!0});var It=i(ot);M(ha.$$.fragment,It),bv=m(It),xo=a(It,"P",{});var Pi=i(xo);vv=s(Pi,"The "),pi=a(Pi,"A",{href:!0});var r1=i(pi);kv=s(r1,"TFMobileBertForQuestionAnswering"),r1.forEach(t),Tv=s(Pi," forward method, overrides the "),td=a(Pi,"CODE",{});var a1=i(td);Mv=s(a1,"__call__"),a1.forEach(t),$v=s(Pi," special method."),Pi.forEach(t),wv=m(It),M(Gn.$$.fragment,It),yv=m(It),M(Yn.$$.fragment,It),Fv=m(It),M(Jn.$$.fragment,It),It.forEach(t),$t.forEach(t),this.h()},h(){b(d,"name","hf:doc:metadata"),b(d,"content",JSON.stringify(cM)),b(p,"id","mobilebert"),b(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(p,"href","#mobilebert"),b(c,"class","relative group"),b(J,"id","overview"),b(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(J,"href","#overview"),b(z,"class","relative group"),b(ee,"href","https://arxiv.org/abs/2004.02984"),b(ee,"rel","nofollow"),b(f,"href","https://huggingface.co/vshampor"),b(f,"rel","nofollow"),b(Te,"href","https://github.com/google-research/mobilebert"),b(Te,"rel","nofollow"),b(ke,"id","transformers.MobileBertConfig"),b(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ke,"href","#transformers.MobileBertConfig"),b(ve,"class","relative group"),b(Ma,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertModel"),b($a,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(wa,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b(ya,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),b(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(jo,"id","transformers.MobileBertTokenizer"),b(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(jo,"href","#transformers.MobileBertTokenizer"),b(Wt,"class","relative group"),b(Fa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),b(Ba,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),b(Ea,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),b(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(So,"id","transformers.MobileBertTokenizerFast"),b(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(So,"href","#transformers.MobileBertTokenizerFast"),b(Rt,"class","relative group"),b(xa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),b(za,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),b(Pa,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizerFast"),b(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oo,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Oo,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),b(Ht,"class","relative group"),b(qa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ca,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Io,"id","transformers.MobileBertModel"),b(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Io,"href","#transformers.MobileBertModel"),b(Vt,"class","relative group"),b(ja,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(ws,"rel","nofollow"),b(ys,"href","https://arxiv.org/pdf/2004.02984.pdf"),b(ys,"rel","nofollow"),b(Na,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertModel"),b(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wo,"id","transformers.MobileBertForPreTraining"),b(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wo,"href","#transformers.MobileBertForPreTraining"),b(Gt,"class","relative group"),b(Sa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Ps,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Ps,"rel","nofollow"),b(Aa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),b(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qo,"id","transformers.MobileBertForMaskedLM"),b(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Qo,"href","#transformers.MobileBertForMaskedLM"),b(Zt,"class","relative group"),b(Oa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Os,"rel","nofollow"),b(Ia,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),b(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Go,"id","transformers.MobileBertForNextSentencePrediction"),b(Go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Go,"href","#transformers.MobileBertForNextSentencePrediction"),b(eo,"class","relative group"),b(Da,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Qs,"rel","nofollow"),b(La,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),b(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Zo,"id","transformers.MobileBertForSequenceClassification"),b(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Zo,"href","#transformers.MobileBertForSequenceClassification"),b(oo,"class","relative group"),b(Wa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(Js,"rel","nofollow"),b(Ra,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),b(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(sn,"id","transformers.MobileBertForMultipleChoice"),b(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(sn,"href","#transformers.MobileBertForMultipleChoice"),b(so,"class","relative group"),b(Ha,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(nr,"rel","nofollow"),b(Qa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),b(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(ln,"id","transformers.MobileBertForTokenClassification"),b(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(ln,"href","#transformers.MobileBertForTokenClassification"),b(ao,"class","relative group"),b(Ua,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(dr,"rel","nofollow"),b(Va,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),b(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(hn,"id","transformers.MobileBertForQuestionAnswering"),b(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(hn,"href","#transformers.MobileBertForQuestionAnswering"),b(lo,"class","relative group"),b(Ka,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),b(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),b(fr,"rel","nofollow"),b(Ga,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),b(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(gn,"id","transformers.TFMobileBertModel"),b(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(gn,"href","#transformers.TFMobileBertModel"),b(ho,"class","relative group"),b(Ya,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Tr,"rel","nofollow"),b(Ja,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertModel"),b(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(kn,"id","transformers.TFMobileBertForPreTraining"),b(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(kn,"href","#transformers.TFMobileBertForPreTraining"),b(uo,"class","relative group"),b(Za,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Br,"rel","nofollow"),b(Xa,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),b(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(wn,"id","transformers.TFMobileBertForMaskedLM"),b(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(wn,"href","#transformers.TFMobileBertForMaskedLM"),b(_o,"class","relative group"),b(ei,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(jr,"rel","nofollow"),b(ti,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),b(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(xn,"id","transformers.TFMobileBertForNextSentencePrediction"),b(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(xn,"href","#transformers.TFMobileBertForNextSentencePrediction"),b(vo,"class","relative group"),b(oi,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Lr,"rel","nofollow"),b(ni,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),b(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Cn,"id","transformers.TFMobileBertForSequenceClassification"),b(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Cn,"href","#transformers.TFMobileBertForSequenceClassification"),b(To,"class","relative group"),b(si,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Vr,"rel","nofollow"),b(ri,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),b(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(On,"id","transformers.TFMobileBertForMultipleChoice"),b(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(On,"href","#transformers.TFMobileBertForMultipleChoice"),b($o,"class","relative group"),b(ai,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(Xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(Xr,"rel","nofollow"),b(ii,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),b(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Wn,"id","transformers.TFMobileBertForTokenClassification"),b(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Wn,"href","#transformers.TFMobileBertForTokenClassification"),b(yo,"class","relative group"),b(li,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(ra,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(ra,"rel","nofollow"),b(di,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),b(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(Vn,"id","transformers.TFMobileBertForQuestionAnswering"),b(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),b(Vn,"href","#transformers.TFMobileBertForQuestionAnswering"),b(Bo,"class","relative group"),b(ci,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),b(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),b(pa,"rel","nofollow"),b(pi,"href","/docs/transformers/v4.18.0/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),b(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),b(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),g(o,_,k),g(o,c,k),e(c,p),e(p,v),$(l,v,null),e(c,u),e(c,x),e(x,he),g(o,K,k),g(o,z,k),e(z,J),e(J,D),$(X,D,null),e(z,me),e(z,L),e(L,ue),g(o,le,k),g(o,V,k),e(V,N),e(V,ee),e(ee,G),e(V,P),g(o,C,k),g(o,ne,k),e(ne,H),g(o,de,k),g(o,se,k),e(se,W),e(W,fe),g(o,ce,k),g(o,q,k),e(q,ge),g(o,R,k),g(o,Z,k),e(Z,re),e(re,Q),e(Z,_e),e(Z,ae),e(ae,S),g(o,pe,k),g(o,O,k),e(O,be),e(O,f),e(f,B),e(O,Y),e(O,Te),e(Te,ye),e(O,A),g(o,$e,k),g(o,ve,k),e(ve,ke),e(ke,j),$(I,j,null),e(ve,Fe),e(ve,Me),e(Me,U),g(o,we,k),g(o,te,k),$(oe,te,null),e(te,Be),e(te,Dt),e(Dt,Fp),e(Dt,Ma),e(Ma,Bp),e(Dt,Ep),e(Dt,$a),e($a,xp),e(Dt,zp),e(te,Pp),e(te,Lt),e(Lt,qp),e(Lt,wa),e(wa,Cp),e(Lt,jp),e(Lt,ya),e(ya,Np),e(Lt,Sp),e(te,Ap),$(Co,te,null),e(te,Op),e(te,qi),e(qi,Ip),g(o,Sd,k),g(o,Wt,k),e(Wt,jo),e(jo,Ci),$(ls,Ci,null),e(Wt,Dp),e(Wt,ji),e(ji,Lp),g(o,Ad,k),g(o,st,k),$(ds,st,null),e(st,Wp),e(st,Ni),e(Ni,Rp),e(st,Hp),e(st,No),e(No,Fa),e(Fa,Qp),e(No,Up),e(No,Ba),e(Ba,Vp),e(No,Kp),e(st,Gp),e(st,cs),e(cs,Yp),e(cs,Ea),e(Ea,Jp),e(cs,Zp),g(o,Od,k),g(o,Rt,k),e(Rt,So),e(So,Si),$(ps,Si,null),e(Rt,Xp),e(Rt,Ai),e(Ai,eh),g(o,Id,k),g(o,rt,k),$(hs,rt,null),e(rt,th),e(rt,ms),e(ms,oh),e(ms,Oi),e(Oi,nh),e(ms,sh),e(rt,rh),e(rt,Ao),e(Ao,xa),e(xa,ah),e(Ao,ih),e(Ao,za),e(za,lh),e(Ao,dh),e(rt,ch),e(rt,us),e(us,ph),e(us,Pa),e(Pa,hh),e(us,mh),g(o,Dd,k),g(o,Ht,k),e(Ht,Oo),e(Oo,Ii),$(fs,Ii,null),e(Ht,uh),e(Ht,Di),e(Di,fh),g(o,Ld,k),g(o,Qt,k),$(gs,Qt,null),e(Qt,gh),e(Qt,_s),e(_s,_h),e(_s,qa),e(qa,bh),e(_s,vh),g(o,Wd,k),g(o,Ut,k),$(bs,Ut,null),e(Ut,kh),e(Ut,vs),e(vs,Th),e(vs,Ca),e(Ca,Mh),e(vs,$h),g(o,Rd,k),g(o,Vt,k),e(Vt,Io),e(Io,Li),$(ks,Li,null),e(Vt,wh),e(Vt,Wi),e(Wi,yh),g(o,Hd,k),g(o,je,k),$(Ts,je,null),e(je,Fh),e(je,Ri),e(Ri,Bh),e(je,Eh),e(je,Ms),e(Ms,xh),e(Ms,ja),e(ja,zh),e(Ms,Ph),e(je,qh),e(je,$s),e($s,Ch),e($s,ws),e(ws,jh),e($s,Nh),e(je,Sh),e(je,Hi),e(Hi,ys),e(ys,Ah),e(je,Oh),e(je,it),$(Fs,it,null),e(it,Ih),e(it,Kt),e(Kt,Dh),e(Kt,Na),e(Na,Lh),e(Kt,Wh),e(Kt,Qi),e(Qi,Rh),e(Kt,Hh),e(it,Qh),$(Do,it,null),e(it,Uh),$(Lo,it,null),g(o,Qd,k),g(o,Gt,k),e(Gt,Wo),e(Wo,Ui),$(Bs,Ui,null),e(Gt,Vh),e(Gt,Vi),e(Vi,Kh),g(o,Ud,k),g(o,Re,k),$(Es,Re,null),e(Re,Gh),e(Re,Yt),e(Yt,Yh),e(Yt,Ki),e(Ki,Jh),e(Yt,Zh),e(Yt,Gi),e(Gi,Xh),e(Yt,em),e(Re,tm),e(Re,xs),e(xs,om),e(xs,Sa),e(Sa,nm),e(xs,sm),e(Re,rm),e(Re,zs),e(zs,am),e(zs,Ps),e(Ps,im),e(zs,lm),e(Re,dm),e(Re,lt),$(qs,lt,null),e(lt,cm),e(lt,Jt),e(Jt,pm),e(Jt,Aa),e(Aa,hm),e(Jt,mm),e(Jt,Yi),e(Yi,um),e(Jt,fm),e(lt,gm),$(Ro,lt,null),e(lt,_m),$(Ho,lt,null),g(o,Vd,k),g(o,Zt,k),e(Zt,Qo),e(Qo,Ji),$(Cs,Ji,null),e(Zt,bm),e(Zt,Zi),e(Zi,vm),g(o,Kd,k),g(o,He,k),$(js,He,null),e(He,km),e(He,Ns),e(Ns,Tm),e(Ns,Xi),e(Xi,Mm),e(Ns,$m),e(He,wm),e(He,Ss),e(Ss,ym),e(Ss,Oa),e(Oa,Fm),e(Ss,Bm),e(He,Em),e(He,As),e(As,xm),e(As,Os),e(Os,zm),e(As,Pm),e(He,qm),e(He,Ye),$(Is,Ye,null),e(Ye,Cm),e(Ye,Xt),e(Xt,jm),e(Xt,Ia),e(Ia,Nm),e(Xt,Sm),e(Xt,el),e(el,Am),e(Xt,Om),e(Ye,Im),$(Uo,Ye,null),e(Ye,Dm),$(Vo,Ye,null),e(Ye,Lm),$(Ko,Ye,null),g(o,Gd,k),g(o,eo,k),e(eo,Go),e(Go,tl),$(Ds,tl,null),e(eo,Wm),e(eo,ol),e(ol,Rm),g(o,Yd,k),g(o,Qe,k),$(Ls,Qe,null),e(Qe,Hm),e(Qe,Ws),e(Ws,Qm),e(Ws,nl),e(nl,Um),e(Ws,Vm),e(Qe,Km),e(Qe,Rs),e(Rs,Gm),e(Rs,Da),e(Da,Ym),e(Rs,Jm),e(Qe,Zm),e(Qe,Hs),e(Hs,Xm),e(Hs,Qs),e(Qs,eu),e(Hs,tu),e(Qe,ou),e(Qe,dt),$(Us,dt,null),e(dt,nu),e(dt,to),e(to,su),e(to,La),e(La,ru),e(to,au),e(to,sl),e(sl,iu),e(to,lu),e(dt,du),$(Yo,dt,null),e(dt,cu),$(Jo,dt,null),g(o,Jd,k),g(o,oo,k),e(oo,Zo),e(Zo,rl),$(Vs,rl,null),e(oo,pu),e(oo,al),e(al,hu),g(o,Zd,k),g(o,Ue,k),$(Ks,Ue,null),e(Ue,mu),e(Ue,il),e(il,uu),e(Ue,fu),e(Ue,Gs),e(Gs,gu),e(Gs,Wa),e(Wa,_u),e(Gs,bu),e(Ue,vu),e(Ue,Ys),e(Ys,ku),e(Ys,Js),e(Js,Tu),e(Ys,Mu),e(Ue,$u),e(Ue,Ce),$(Zs,Ce,null),e(Ce,wu),e(Ce,no),e(no,yu),e(no,Ra),e(Ra,Fu),e(no,Bu),e(no,ll),e(ll,Eu),e(no,xu),e(Ce,zu),$(Xo,Ce,null),e(Ce,Pu),$(en,Ce,null),e(Ce,qu),$(tn,Ce,null),e(Ce,Cu),$(on,Ce,null),e(Ce,ju),$(nn,Ce,null),g(o,Xd,k),g(o,so,k),e(so,sn),e(sn,dl),$(Xs,dl,null),e(so,Nu),e(so,cl),e(cl,Su),g(o,ec,k),g(o,Ve,k),$(er,Ve,null),e(Ve,Au),e(Ve,pl),e(pl,Ou),e(Ve,Iu),e(Ve,tr),e(tr,Du),e(tr,Ha),e(Ha,Lu),e(tr,Wu),e(Ve,Ru),e(Ve,or),e(or,Hu),e(or,nr),e(nr,Qu),e(or,Uu),e(Ve,Vu),e(Ve,ct),$(sr,ct,null),e(ct,Ku),e(ct,ro),e(ro,Gu),e(ro,Qa),e(Qa,Yu),e(ro,Ju),e(ro,hl),e(hl,Zu),e(ro,Xu),e(ct,ef),$(rn,ct,null),e(ct,tf),$(an,ct,null),g(o,tc,k),g(o,ao,k),e(ao,ln),e(ln,ml),$(rr,ml,null),e(ao,of),e(ao,ul),e(ul,nf),g(o,oc,k),g(o,Ke,k),$(ar,Ke,null),e(Ke,sf),e(Ke,fl),e(fl,rf),e(Ke,af),e(Ke,ir),e(ir,lf),e(ir,Ua),e(Ua,df),e(ir,cf),e(Ke,pf),e(Ke,lr),e(lr,hf),e(lr,dr),e(dr,mf),e(lr,uf),e(Ke,ff),e(Ke,Je),$(cr,Je,null),e(Je,gf),e(Je,io),e(io,_f),e(io,Va),e(Va,bf),e(io,vf),e(io,gl),e(gl,kf),e(io,Tf),e(Je,Mf),$(dn,Je,null),e(Je,$f),$(cn,Je,null),e(Je,wf),$(pn,Je,null),g(o,nc,k),g(o,lo,k),e(lo,hn),e(hn,_l),$(pr,_l,null),e(lo,yf),e(lo,bl),e(bl,Ff),g(o,sc,k),g(o,Ge,k),$(hr,Ge,null),e(Ge,Bf),e(Ge,co),e(co,Ef),e(co,vl),e(vl,xf),e(co,zf),e(co,kl),e(kl,Pf),e(co,qf),e(Ge,Cf),e(Ge,mr),e(mr,jf),e(mr,Ka),e(Ka,Nf),e(mr,Sf),e(Ge,Af),e(Ge,ur),e(ur,Of),e(ur,fr),e(fr,If),e(ur,Df),e(Ge,Lf),e(Ge,Ze),$(gr,Ze,null),e(Ze,Wf),e(Ze,po),e(po,Rf),e(po,Ga),e(Ga,Hf),e(po,Qf),e(po,Tl),e(Tl,Uf),e(po,Vf),e(Ze,Kf),$(mn,Ze,null),e(Ze,Gf),$(un,Ze,null),e(Ze,Yf),$(fn,Ze,null),g(o,rc,k),g(o,ho,k),e(ho,gn),e(gn,Ml),$(_r,Ml,null),e(ho,Jf),e(ho,$l),e($l,Zf),g(o,ac,k),g(o,Ne,k),$(br,Ne,null),e(Ne,Xf),e(Ne,wl),e(wl,eg),e(Ne,tg),e(Ne,vr),e(vr,og),e(vr,Ya),e(Ya,ng),e(vr,sg),e(Ne,rg),e(Ne,kr),e(kr,ag),e(kr,Tr),e(Tr,ig),e(kr,lg),e(Ne,dg),$(_n,Ne,null),e(Ne,cg),e(Ne,pt),$(Mr,pt,null),e(pt,pg),e(pt,mo),e(mo,hg),e(mo,Ja),e(Ja,mg),e(mo,ug),e(mo,yl),e(yl,fg),e(mo,gg),e(pt,_g),$(bn,pt,null),e(pt,bg),$(vn,pt,null),g(o,ic,k),g(o,uo,k),e(uo,kn),e(kn,Fl),$($r,Fl,null),e(uo,vg),e(uo,Bl),e(Bl,kg),g(o,lc,k),g(o,Se,k),$(wr,Se,null),e(Se,Tg),e(Se,fo),e(fo,Mg),e(fo,El),e(El,$g),e(fo,wg),e(fo,xl),e(xl,yg),e(fo,Fg),e(Se,Bg),e(Se,yr),e(yr,Eg),e(yr,Za),e(Za,xg),e(yr,zg),e(Se,Pg),e(Se,Fr),e(Fr,qg),e(Fr,Br),e(Br,Cg),e(Fr,jg),e(Se,Ng),$(Tn,Se,null),e(Se,Sg),e(Se,ht),$(Er,ht,null),e(ht,Ag),e(ht,go),e(go,Og),e(go,Xa),e(Xa,Ig),e(go,Dg),e(go,zl),e(zl,Lg),e(go,Wg),e(ht,Rg),$(Mn,ht,null),e(ht,Hg),$($n,ht,null),g(o,dc,k),g(o,_o,k),e(_o,wn),e(wn,Pl),$(xr,Pl,null),e(_o,Qg),e(_o,ql),e(ql,Ug),g(o,cc,k),g(o,Ae,k),$(zr,Ae,null),e(Ae,Vg),e(Ae,Pr),e(Pr,Kg),e(Pr,Cl),e(Cl,Gg),e(Pr,Yg),e(Ae,Jg),e(Ae,qr),e(qr,Zg),e(qr,ei),e(ei,Xg),e(qr,e_),e(Ae,t_),e(Ae,Cr),e(Cr,o_),e(Cr,jr),e(jr,n_),e(Cr,s_),e(Ae,r_),$(yn,Ae,null),e(Ae,a_),e(Ae,Xe),$(Nr,Xe,null),e(Xe,i_),e(Xe,bo),e(bo,l_),e(bo,ti),e(ti,d_),e(bo,c_),e(bo,jl),e(jl,p_),e(bo,h_),e(Xe,m_),$(Fn,Xe,null),e(Xe,u_),$(Bn,Xe,null),e(Xe,f_),$(En,Xe,null),g(o,pc,k),g(o,vo,k),e(vo,xn),e(xn,Nl),$(Sr,Nl,null),e(vo,g_),e(vo,Sl),e(Sl,__),g(o,hc,k),g(o,Oe,k),$(Ar,Oe,null),e(Oe,b_),e(Oe,Or),e(Or,v_),e(Or,Al),e(Al,k_),e(Or,T_),e(Oe,M_),e(Oe,Ir),e(Ir,$_),e(Ir,oi),e(oi,w_),e(Ir,y_),e(Oe,F_),e(Oe,Dr),e(Dr,B_),e(Dr,Lr),e(Lr,E_),e(Dr,x_),e(Oe,z_),$(zn,Oe,null),e(Oe,P_),e(Oe,mt),$(Wr,mt,null),e(mt,q_),e(mt,ko),e(ko,C_),e(ko,ni),e(ni,j_),e(ko,N_),e(ko,Ol),e(Ol,S_),e(ko,A_),e(mt,O_),$(Pn,mt,null),e(mt,I_),$(qn,mt,null),g(o,mc,k),g(o,To,k),e(To,Cn),e(Cn,Il),$(Rr,Il,null),e(To,D_),e(To,Dl),e(Dl,L_),g(o,uc,k),g(o,Ie,k),$(Hr,Ie,null),e(Ie,W_),e(Ie,Ll),e(Ll,R_),e(Ie,H_),e(Ie,Qr),e(Qr,Q_),e(Qr,si),e(si,U_),e(Qr,V_),e(Ie,K_),e(Ie,Ur),e(Ur,G_),e(Ur,Vr),e(Vr,Y_),e(Ur,J_),e(Ie,Z_),$(jn,Ie,null),e(Ie,X_),e(Ie,et),$(Kr,et,null),e(et,eb),e(et,Mo),e(Mo,tb),e(Mo,ri),e(ri,ob),e(Mo,nb),e(Mo,Wl),e(Wl,sb),e(Mo,rb),e(et,ab),$(Nn,et,null),e(et,ib),$(Sn,et,null),e(et,lb),$(An,et,null),g(o,fc,k),g(o,$o,k),e($o,On),e(On,Rl),$(Gr,Rl,null),e($o,db),e($o,Hl),e(Hl,cb),g(o,gc,k),g(o,De,k),$(Yr,De,null),e(De,pb),e(De,Ql),e(Ql,hb),e(De,mb),e(De,Jr),e(Jr,ub),e(Jr,ai),e(ai,fb),e(Jr,gb),e(De,_b),e(De,Zr),e(Zr,bb),e(Zr,Xr),e(Xr,vb),e(Zr,kb),e(De,Tb),$(In,De,null),e(De,Mb),e(De,ut),$(ea,ut,null),e(ut,$b),e(ut,wo),e(wo,wb),e(wo,ii),e(ii,yb),e(wo,Fb),e(wo,Ul),e(Ul,Bb),e(wo,Eb),e(ut,xb),$(Dn,ut,null),e(ut,zb),$(Ln,ut,null),g(o,_c,k),g(o,yo,k),e(yo,Wn),e(Wn,Vl),$(ta,Vl,null),e(yo,Pb),e(yo,Kl),e(Kl,qb),g(o,bc,k),g(o,Le,k),$(oa,Le,null),e(Le,Cb),e(Le,Gl),e(Gl,jb),e(Le,Nb),e(Le,na),e(na,Sb),e(na,li),e(li,Ab),e(na,Ob),e(Le,Ib),e(Le,sa),e(sa,Db),e(sa,ra),e(ra,Lb),e(sa,Wb),e(Le,Rb),$(Rn,Le,null),e(Le,Hb),e(Le,tt),$(aa,tt,null),e(tt,Qb),e(tt,Fo),e(Fo,Ub),e(Fo,di),e(di,Vb),e(Fo,Kb),e(Fo,Yl),e(Yl,Gb),e(Fo,Yb),e(tt,Jb),$(Hn,tt,null),e(tt,Zb),$(Qn,tt,null),e(tt,Xb),$(Un,tt,null),g(o,vc,k),g(o,Bo,k),e(Bo,Vn),e(Vn,Jl),$(ia,Jl,null),e(Bo,ev),e(Bo,Zl),e(Zl,tv),g(o,kc,k),g(o,We,k),$(la,We,null),e(We,ov),e(We,Eo),e(Eo,nv),e(Eo,Xl),e(Xl,sv),e(Eo,rv),e(Eo,ed),e(ed,av),e(Eo,iv),e(We,lv),e(We,da),e(da,dv),e(da,ci),e(ci,cv),e(da,pv),e(We,hv),e(We,ca),e(ca,mv),e(ca,pa),e(pa,uv),e(ca,fv),e(We,gv),$(Kn,We,null),e(We,_v),e(We,ot),$(ha,ot,null),e(ot,bv),e(ot,xo),e(xo,vv),e(xo,pi),e(pi,kv),e(xo,Tv),e(xo,td),e(td,Mv),e(xo,$v),e(ot,wv),$(Gn,ot,null),e(ot,yv),$(Yn,ot,null),e(ot,Fv),$(Jn,ot,null),Tc=!0},p(o,[k]){const ma={};k&2&&(ma.$$scope={dirty:k,ctx:o}),Co.$set(ma);const od={};k&2&&(od.$$scope={dirty:k,ctx:o}),Do.$set(od);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:o}),Lo.$set(nd);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:o}),Ro.$set(sd);const ua={};k&2&&(ua.$$scope={dirty:k,ctx:o}),Ho.$set(ua);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:o}),Uo.$set(rd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:o}),Vo.$set(ad);const id={};k&2&&(id.$$scope={dirty:k,ctx:o}),Ko.$set(id);const fa={};k&2&&(fa.$$scope={dirty:k,ctx:o}),Yo.$set(fa);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:o}),Jo.$set(ld);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:o}),Xo.$set(dd);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:o}),en.$set(cd);const pd={};k&2&&(pd.$$scope={dirty:k,ctx:o}),tn.$set(pd);const hd={};k&2&&(hd.$$scope={dirty:k,ctx:o}),on.$set(hd);const ga={};k&2&&(ga.$$scope={dirty:k,ctx:o}),nn.$set(ga);const md={};k&2&&(md.$$scope={dirty:k,ctx:o}),rn.$set(md);const ud={};k&2&&(ud.$$scope={dirty:k,ctx:o}),an.$set(ud);const zo={};k&2&&(zo.$$scope={dirty:k,ctx:o}),dn.$set(zo);const fd={};k&2&&(fd.$$scope={dirty:k,ctx:o}),cn.$set(fd);const gd={};k&2&&(gd.$$scope={dirty:k,ctx:o}),pn.$set(gd);const _a={};k&2&&(_a.$$scope={dirty:k,ctx:o}),mn.$set(_a);const _d={};k&2&&(_d.$$scope={dirty:k,ctx:o}),un.$set(_d);const bd={};k&2&&(bd.$$scope={dirty:k,ctx:o}),fn.$set(bd);const vd={};k&2&&(vd.$$scope={dirty:k,ctx:o}),_n.$set(vd);const at={};k&2&&(at.$$scope={dirty:k,ctx:o}),bn.$set(at);const Po={};k&2&&(Po.$$scope={dirty:k,ctx:o}),vn.$set(Po);const kd={};k&2&&(kd.$$scope={dirty:k,ctx:o}),Tn.$set(kd);const Td={};k&2&&(Td.$$scope={dirty:k,ctx:o}),Mn.$set(Td);const qo={};k&2&&(qo.$$scope={dirty:k,ctx:o}),$n.$set(qo);const Md={};k&2&&(Md.$$scope={dirty:k,ctx:o}),yn.$set(Md);const $d={};k&2&&($d.$$scope={dirty:k,ctx:o}),Fn.$set($d);const wd={};k&2&&(wd.$$scope={dirty:k,ctx:o}),Bn.$set(wd);const ba={};k&2&&(ba.$$scope={dirty:k,ctx:o}),En.$set(ba);const yd={};k&2&&(yd.$$scope={dirty:k,ctx:o}),zn.$set(yd);const Fd={};k&2&&(Fd.$$scope={dirty:k,ctx:o}),Pn.$set(Fd);const Bd={};k&2&&(Bd.$$scope={dirty:k,ctx:o}),qn.$set(Bd);const wt={};k&2&&(wt.$$scope={dirty:k,ctx:o}),jn.$set(wt);const Ed={};k&2&&(Ed.$$scope={dirty:k,ctx:o}),Nn.$set(Ed);const Zn={};k&2&&(Zn.$$scope={dirty:k,ctx:o}),Sn.$set(Zn);const xd={};k&2&&(xd.$$scope={dirty:k,ctx:o}),An.$set(xd);const zd={};k&2&&(zd.$$scope={dirty:k,ctx:o}),In.$set(zd);const va={};k&2&&(va.$$scope={dirty:k,ctx:o}),Dn.$set(va);const Pd={};k&2&&(Pd.$$scope={dirty:k,ctx:o}),Ln.$set(Pd);const ka={};k&2&&(ka.$$scope={dirty:k,ctx:o}),Rn.$set(ka);const qd={};k&2&&(qd.$$scope={dirty:k,ctx:o}),Hn.$set(qd);const Cd={};k&2&&(Cd.$$scope={dirty:k,ctx:o}),Qn.$set(Cd);const jd={};k&2&&(jd.$$scope={dirty:k,ctx:o}),Un.$set(jd);const yt={};k&2&&(yt.$$scope={dirty:k,ctx:o}),Kn.$set(yt);const Ta={};k&2&&(Ta.$$scope={dirty:k,ctx:o}),Gn.$set(Ta);const Nd={};k&2&&(Nd.$$scope={dirty:k,ctx:o}),Yn.$set(Nd);const Xn={};k&2&&(Xn.$$scope={dirty:k,ctx:o}),Jn.$set(Xn)},i(o){Tc||(w(l.$$.fragment,o),w(X.$$.fragment,o),w(I.$$.fragment,o),w(oe.$$.fragment,o),w(Co.$$.fragment,o),w(ls.$$.fragment,o),w(ds.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(fs.$$.fragment,o),w(gs.$$.fragment,o),w(bs.$$.fragment,o),w(ks.$$.fragment,o),w(Ts.$$.fragment,o),w(Fs.$$.fragment,o),w(Do.$$.fragment,o),w(Lo.$$.fragment,o),w(Bs.$$.fragment,o),w(Es.$$.fragment,o),w(qs.$$.fragment,o),w(Ro.$$.fragment,o),w(Ho.$$.fragment,o),w(Cs.$$.fragment,o),w(js.$$.fragment,o),w(Is.$$.fragment,o),w(Uo.$$.fragment,o),w(Vo.$$.fragment,o),w(Ko.$$.fragment,o),w(Ds.$$.fragment,o),w(Ls.$$.fragment,o),w(Us.$$.fragment,o),w(Yo.$$.fragment,o),w(Jo.$$.fragment,o),w(Vs.$$.fragment,o),w(Ks.$$.fragment,o),w(Zs.$$.fragment,o),w(Xo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(Xs.$$.fragment,o),w(er.$$.fragment,o),w(sr.$$.fragment,o),w(rn.$$.fragment,o),w(an.$$.fragment,o),w(rr.$$.fragment,o),w(ar.$$.fragment,o),w(cr.$$.fragment,o),w(dn.$$.fragment,o),w(cn.$$.fragment,o),w(pn.$$.fragment,o),w(pr.$$.fragment,o),w(hr.$$.fragment,o),w(gr.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(fn.$$.fragment,o),w(_r.$$.fragment,o),w(br.$$.fragment,o),w(_n.$$.fragment,o),w(Mr.$$.fragment,o),w(bn.$$.fragment,o),w(vn.$$.fragment,o),w($r.$$.fragment,o),w(wr.$$.fragment,o),w(Tn.$$.fragment,o),w(Er.$$.fragment,o),w(Mn.$$.fragment,o),w($n.$$.fragment,o),w(xr.$$.fragment,o),w(zr.$$.fragment,o),w(yn.$$.fragment,o),w(Nr.$$.fragment,o),w(Fn.$$.fragment,o),w(Bn.$$.fragment,o),w(En.$$.fragment,o),w(Sr.$$.fragment,o),w(Ar.$$.fragment,o),w(zn.$$.fragment,o),w(Wr.$$.fragment,o),w(Pn.$$.fragment,o),w(qn.$$.fragment,o),w(Rr.$$.fragment,o),w(Hr.$$.fragment,o),w(jn.$$.fragment,o),w(Kr.$$.fragment,o),w(Nn.$$.fragment,o),w(Sn.$$.fragment,o),w(An.$$.fragment,o),w(Gr.$$.fragment,o),w(Yr.$$.fragment,o),w(In.$$.fragment,o),w(ea.$$.fragment,o),w(Dn.$$.fragment,o),w(Ln.$$.fragment,o),w(ta.$$.fragment,o),w(oa.$$.fragment,o),w(Rn.$$.fragment,o),w(aa.$$.fragment,o),w(Hn.$$.fragment,o),w(Qn.$$.fragment,o),w(Un.$$.fragment,o),w(ia.$$.fragment,o),w(la.$$.fragment,o),w(Kn.$$.fragment,o),w(ha.$$.fragment,o),w(Gn.$$.fragment,o),w(Yn.$$.fragment,o),w(Jn.$$.fragment,o),Tc=!0)},o(o){y(l.$$.fragment,o),y(X.$$.fragment,o),y(I.$$.fragment,o),y(oe.$$.fragment,o),y(Co.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(gs.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(Fs.$$.fragment,o),y(Do.$$.fragment,o),y(Lo.$$.fragment,o),y(Bs.$$.fragment,o),y(Es.$$.fragment,o),y(qs.$$.fragment,o),y(Ro.$$.fragment,o),y(Ho.$$.fragment,o),y(Cs.$$.fragment,o),y(js.$$.fragment,o),y(Is.$$.fragment,o),y(Uo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Ds.$$.fragment,o),y(Ls.$$.fragment,o),y(Us.$$.fragment,o),y(Yo.$$.fragment,o),y(Jo.$$.fragment,o),y(Vs.$$.fragment,o),y(Ks.$$.fragment,o),y(Zs.$$.fragment,o),y(Xo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(Xs.$$.fragment,o),y(er.$$.fragment,o),y(sr.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(rr.$$.fragment,o),y(ar.$$.fragment,o),y(cr.$$.fragment,o),y(dn.$$.fragment,o),y(cn.$$.fragment,o),y(pn.$$.fragment,o),y(pr.$$.fragment,o),y(hr.$$.fragment,o),y(gr.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(_r.$$.fragment,o),y(br.$$.fragment,o),y(_n.$$.fragment,o),y(Mr.$$.fragment,o),y(bn.$$.fragment,o),y(vn.$$.fragment,o),y($r.$$.fragment,o),y(wr.$$.fragment,o),y(Tn.$$.fragment,o),y(Er.$$.fragment,o),y(Mn.$$.fragment,o),y($n.$$.fragment,o),y(xr.$$.fragment,o),y(zr.$$.fragment,o),y(yn.$$.fragment,o),y(Nr.$$.fragment,o),y(Fn.$$.fragment,o),y(Bn.$$.fragment,o),y(En.$$.fragment,o),y(Sr.$$.fragment,o),y(Ar.$$.fragment,o),y(zn.$$.fragment,o),y(Wr.$$.fragment,o),y(Pn.$$.fragment,o),y(qn.$$.fragment,o),y(Rr.$$.fragment,o),y(Hr.$$.fragment,o),y(jn.$$.fragment,o),y(Kr.$$.fragment,o),y(Nn.$$.fragment,o),y(Sn.$$.fragment,o),y(An.$$.fragment,o),y(Gr.$$.fragment,o),y(Yr.$$.fragment,o),y(In.$$.fragment,o),y(ea.$$.fragment,o),y(Dn.$$.fragment,o),y(Ln.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(Rn.$$.fragment,o),y(aa.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Un.$$.fragment,o),y(ia.$$.fragment,o),y(la.$$.fragment,o),y(Kn.$$.fragment,o),y(ha.$$.fragment,o),y(Gn.$$.fragment,o),y(Yn.$$.fragment,o),y(Jn.$$.fragment,o),Tc=!1},d(o){t(d),o&&t(_),o&&t(c),F(l),o&&t(K),o&&t(z),F(X),o&&t(le),o&&t(V),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(R),o&&t(Z),o&&t(pe),o&&t(O),o&&t($e),o&&t(ve),F(I),o&&t(we),o&&t(te),F(oe),F(Co),o&&t(Sd),o&&t(Wt),F(ls),o&&t(Ad),o&&t(st),F(ds),o&&t(Od),o&&t(Rt),F(ps),o&&t(Id),o&&t(rt),F(hs),o&&t(Dd),o&&t(Ht),F(fs),o&&t(Ld),o&&t(Qt),F(gs),o&&t(Wd),o&&t(Ut),F(bs),o&&t(Rd),o&&t(Vt),F(ks),o&&t(Hd),o&&t(je),F(Ts),F(Fs),F(Do),F(Lo),o&&t(Qd),o&&t(Gt),F(Bs),o&&t(Ud),o&&t(Re),F(Es),F(qs),F(Ro),F(Ho),o&&t(Vd),o&&t(Zt),F(Cs),o&&t(Kd),o&&t(He),F(js),F(Is),F(Uo),F(Vo),F(Ko),o&&t(Gd),o&&t(eo),F(Ds),o&&t(Yd),o&&t(Qe),F(Ls),F(Us),F(Yo),F(Jo),o&&t(Jd),o&&t(oo),F(Vs),o&&t(Zd),o&&t(Ue),F(Ks),F(Zs),F(Xo),F(en),F(tn),F(on),F(nn),o&&t(Xd),o&&t(so),F(Xs),o&&t(ec),o&&t(Ve),F(er),F(sr),F(rn),F(an),o&&t(tc),o&&t(ao),F(rr),o&&t(oc),o&&t(Ke),F(ar),F(cr),F(dn),F(cn),F(pn),o&&t(nc),o&&t(lo),F(pr),o&&t(sc),o&&t(Ge),F(hr),F(gr),F(mn),F(un),F(fn),o&&t(rc),o&&t(ho),F(_r),o&&t(ac),o&&t(Ne),F(br),F(_n),F(Mr),F(bn),F(vn),o&&t(ic),o&&t(uo),F($r),o&&t(lc),o&&t(Se),F(wr),F(Tn),F(Er),F(Mn),F($n),o&&t(dc),o&&t(_o),F(xr),o&&t(cc),o&&t(Ae),F(zr),F(yn),F(Nr),F(Fn),F(Bn),F(En),o&&t(pc),o&&t(vo),F(Sr),o&&t(hc),o&&t(Oe),F(Ar),F(zn),F(Wr),F(Pn),F(qn),o&&t(mc),o&&t(To),F(Rr),o&&t(uc),o&&t(Ie),F(Hr),F(jn),F(Kr),F(Nn),F(Sn),F(An),o&&t(fc),o&&t($o),F(Gr),o&&t(gc),o&&t(De),F(Yr),F(In),F(ea),F(Dn),F(Ln),o&&t(_c),o&&t(yo),F(ta),o&&t(bc),o&&t(Le),F(oa),F(Rn),F(aa),F(Hn),F(Qn),F(Un),o&&t(vc),o&&t(Bo),F(ia),o&&t(kc),o&&t(We),F(la),F(Kn),F(ha),F(Gn),F(Yn),F(Jn)}}}const cM={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function pM(E){return p1(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class bM extends i1{constructor(d){super();l1(this,d,pM,dM,d1,{})}}export{bM as default,cM as metadata};
