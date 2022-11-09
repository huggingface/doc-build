import{S as Qv,i as Vv,s as Gv,e as r,k as h,w as y,t as o,M as Jv,c as a,d as t,m,a as i,x as w,h as n,b as g,G as e,g as _,y as v,q as $,o as M,B as F,v as Yv,L as Le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Xe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Xv(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertConfig, MobileBertModel

# Initializing a MobileBERT configuration
configuration = MobileBertConfig()

# Initializing a model (with random weights) from the configuration above
model = MobileBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertConfig, MobileBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MobileBERT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MobileBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the configuration above</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Zv(x){let d,b,c,u,T;return u=new We({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),b=o("sequence pair mask has the following format:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function e$(x){let d,b,c,u,T;return u=new We({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),b=o("sequence pair mask has the following format:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"sequence pair mask has the following format:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function t$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function o$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function n$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function s$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function r$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function a$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function i$(x){let d,b;return d=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function l$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function d$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function c$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function p$(x){let d,b,c,u,T;return u=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of single-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function h$(x){let d,b;return d=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function m$(x){let d,b,c,u,T;return u=new We({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function u$(x){let d,b;return d=new We({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function f$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function g$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function _$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function b$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function k$(x){let d,b;return d=new We({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function T$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function y$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
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
tokenizer.decode(predict_answer_tokens, skip_special_tokens=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MobileBertTokenizer, MobileBertForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens, skip_special_tokens=<span class="hljs-literal">True</span>)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function w$(x){let d,b;return d=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function v$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function $$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function M$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function F$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function B$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function E$(x){let d,b,c,u,T;return u=new We({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function x$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function z$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function q$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function P$(x){let d,b;return d=new We({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function j$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function C$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function N$(x){let d,b,c,u,T;return u=new We({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function O$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function D$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function S$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function A$(x){let d,b;return d=new We({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function I$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function L$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function W$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function R$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function U$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function K$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function H$(x){let d,b;return d=new We({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function Q$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),T=o(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),A=r("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),B=r("p"),ye=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),we=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),ve=o("model.fit()"),ie=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),$e=o("fit()"),fe=o(" and "),R=r("code"),Me=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),ce=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),P=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),pe=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),he=o("model(input_ids)"),Ee=h(),C=r("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),le=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),de=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),D=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),ae=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),j=r("p"),qe=o(`Note that when creating models and layers with
`),O=r("a"),Pe=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Re=i(c);u=n(Re,"transformers"),Re.forEach(t),T=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var J=i(p);q=a(J,"LI",{});var Ue=i(q);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),me=m(J),A=a(J,"LI",{});var Oe=i(A);re=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),J.forEach(t),Z=m(f),B=a(f,"P",{});var z=i(B);ye=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(z,"CODE",{});var Ke=i(K);we=n(Ke,"model.fit()"),Ke.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(z,"CODE",{});var De=i(L);ve=n(De,"model.fit()"),De.forEach(t),ie=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var He=i(H);$e=n(He,"fit()"),He.forEach(t),fe=n(z," and "),R=a(z,"CODE",{});var Qe=i(R);Me=n(Qe,"predict()"),Qe.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=a(z,"CODE",{});var Ne=i(U);ce=n(Ne,"Functional"),Ne.forEach(t),Fe=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=m(f),P=a(f,"UL",{});var S=i(P);N=a(S,"LI",{});var Y=i(N);_e=n(Y,"a single Tensor with "),W=a(Y,"CODE",{});var Ve=i(W);pe=n(Ve,"input_ids"),Ve.forEach(t),Be=n(Y," only and nothing else: "),Q=a(Y,"CODE",{});var Ce=i(Q);he=n(Ce,"model(input_ids)"),Ce.forEach(t),Y.forEach(t),Ee=m(S),C=a(S,"LI",{});var X=i(C);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(X,"CODE",{});var Se=i(V);le=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(X," or "),G=a(X,"CODE",{});var Ge=i(G);de=n(Ge,"model([input_ids, attention_mask, token_type_ids])"),Ge.forEach(t),X.forEach(t),ze=m(S),D=a(S,"LI",{});var je=i(D);be=n(je,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(je,"CODE",{});var Ae=i(I);ae=n(Ae,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ae.forEach(t),je.forEach(t),S.forEach(t),ee=m(f),j=a(f,"P",{});var oe=i(j);qe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Je=i(O);Pe=n(Je,"subclassing"),Je.forEach(t),ke=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,T),_(f,l,E),_(f,p,E),e(p,q),e(q,Te),e(p,me),e(p,A),e(A,re),_(f,Z,E),_(f,B,E),e(B,ye),e(B,K),e(K,we),e(B,ue),e(B,L),e(L,ve),e(B,ie),e(B,H),e(H,$e),e(B,fe),e(B,R),e(R,Me),e(B,ge),e(B,U),e(U,ce),e(B,Fe),_(f,te,E),_(f,P,E),e(P,N),e(N,_e),e(N,W),e(W,pe),e(N,Be),e(N,Q),e(Q,he),e(P,Ee),e(P,C),e(C,se),e(C,V),e(V,le),e(C,xe),e(C,G),e(G,de),e(P,ze),e(P,D),e(D,be),e(D,I),e(I,ae),_(f,ee,E),_(f,j,E),e(j,qe),e(j,O),e(O,Pe),e(j,ke)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(B),f&&t(te),f&&t(P),f&&t(ee),f&&t(j)}}}function V$(x){let d,b,c,u,T;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),T=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=n(q,"Module"),q.forEach(t),T=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,T)},d(l){l&&t(d)}}}function G$(x){let d,b,c,u,T;return u=new We({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),v(u,l,p),T=!0},p:Le,i(l){T||($(u.$$.fragment,l),T=!0)},o(l){M(u.$$.fragment,l),T=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function J$(x){let d,b;return d=new We({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){v(d,c,u),b=!0},p:Le,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){M(d.$$.fragment,c),b=!1},d(c){F(d,c)}}}function Y$(x){let d,b,c,u,T,l,p,q,Te,me,A,re,Z,B,ye,K,we,ue,L,ve,ie,H,$e,fe,R,Me,ge,U,ce,Fe,te,P,N,_e,W,pe,Be,Q,he,Ee,C,se,V,le,xe,G,de,ze,D,be,I,ae,ee,j,qe,O,Pe,ke,f,E,Re,J,Ue,Oe,z,Ke,De,He,Qe,Ne,S,Y,Ve,Ce,X,Se,Ge,je,Ae,oe,Je,Eh,an,xh,fl,zh,jc,mo,ln,gl,Os,qh,_l,Ph,Cc,Ze,Ds,jh,bl,Ch,Nh,Ss,Oh,ri,Dh,Sh,Ah,Gt,As,Ih,kl,Lh,Wh,Is,ai,Rh,Tl,Uh,Kh,ii,Hh,yl,Qh,Vh,dn,Ls,Gh,wl,Jh,Yh,Et,Ws,Xh,vl,Zh,em,cn,tm,uo,om,$l,nm,sm,Ml,rm,am,im,pn,Rs,lm,Us,dm,Fl,cm,pm,Nc,fo,hn,Bl,Ks,hm,El,mm,Oc,pt,Hs,um,Qs,fm,xl,gm,_m,bm,Vs,km,li,Tm,ym,wm,Jt,Gs,vm,zl,$m,Mm,Js,di,Fm,ql,Bm,Em,ci,xm,Pl,zm,qm,xt,Ys,Pm,jl,jm,Cm,mn,Nm,go,Om,Cl,Dm,Sm,Nl,Am,Im,Dc,_o,un,Ol,Xs,Lm,Dl,Wm,Sc,bo,Zs,Rm,er,Um,pi,Km,Hm,Ac,ko,tr,Qm,or,Vm,hi,Gm,Jm,Ic,To,fn,Sl,nr,Ym,Al,Xm,Lc,tt,sr,Zm,Il,eu,tu,rr,ou,mi,nu,su,ru,ar,au,ir,iu,lu,du,Ll,lr,cu,pu,zt,dr,hu,yo,mu,ui,uu,fu,Wl,gu,_u,bu,gn,ku,_n,Wc,wo,bn,Rl,cr,Tu,Ul,yu,Rc,ht,pr,wu,vo,vu,Kl,$u,Mu,Hl,Fu,Bu,Eu,hr,xu,fi,zu,qu,Pu,mr,ju,ur,Cu,Nu,Ou,qt,fr,Du,$o,Su,gi,Au,Iu,Ql,Lu,Wu,Ru,kn,Uu,Tn,Uc,Mo,yn,Vl,gr,Ku,Gl,Hu,Kc,mt,_r,Qu,br,Vu,Jl,Gu,Ju,Yu,kr,Xu,_i,Zu,ef,tf,Tr,of,yr,nf,sf,rf,kt,wr,af,Fo,lf,bi,df,cf,Yl,pf,hf,mf,wn,uf,vn,ff,$n,Hc,Bo,Mn,Xl,vr,gf,Zl,_f,Qc,ut,$r,bf,Mr,kf,ed,Tf,yf,wf,Fr,vf,ki,$f,Mf,Ff,Br,Bf,Er,Ef,xf,zf,Pt,xr,qf,Eo,Pf,Ti,jf,Cf,td,Nf,Of,Df,Fn,Sf,Bn,Vc,xo,En,od,zr,Af,nd,If,Gc,ft,qr,Lf,sd,Wf,Rf,Pr,Uf,yi,Kf,Hf,Qf,jr,Vf,Cr,Gf,Jf,Yf,et,Nr,Xf,zo,Zf,wi,eg,tg,rd,og,ng,sg,xn,rg,zn,ag,qn,ig,Pn,lg,jn,Jc,qo,Cn,ad,Or,dg,id,cg,Yc,gt,Dr,pg,ld,hg,mg,Sr,ug,vi,fg,gg,_g,Ar,bg,Ir,kg,Tg,yg,jt,Lr,wg,Po,vg,$i,$g,Mg,dd,Fg,Bg,Eg,Nn,xg,On,Xc,jo,Dn,cd,Wr,zg,pd,qg,Zc,_t,Rr,Pg,hd,jg,Cg,Ur,Ng,Mi,Og,Dg,Sg,Kr,Ag,Hr,Ig,Lg,Wg,Tt,Qr,Rg,Co,Ug,Fi,Kg,Hg,md,Qg,Vg,Gg,Sn,Jg,An,Yg,In,ep,No,Ln,ud,Vr,Xg,fd,Zg,tp,bt,Gr,e_,Oo,t_,gd,o_,n_,_d,s_,r_,a_,Jr,i_,Bi,l_,d_,c_,Yr,p_,Xr,h_,m_,u_,yt,Zr,f_,Do,g_,Ei,__,b_,bd,k_,T_,y_,Wn,w_,Rn,v_,Un,op,So,Kn,kd,ea,$_,Td,M_,np,ot,ta,F_,yd,B_,E_,oa,x_,xi,z_,q_,P_,na,j_,sa,C_,N_,O_,Hn,D_,Ct,ra,S_,Ao,A_,zi,I_,L_,wd,W_,R_,U_,Qn,K_,Vn,sp,Io,Gn,vd,aa,H_,$d,Q_,rp,nt,ia,V_,Lo,G_,Md,J_,Y_,Fd,X_,Z_,eb,la,tb,qi,ob,nb,sb,da,rb,ca,ab,ib,lb,Jn,db,Nt,pa,cb,Wo,pb,Pi,hb,mb,Bd,ub,fb,gb,Yn,_b,Xn,ap,Ro,Zn,Ed,ha,bb,xd,kb,ip,st,ma,Tb,ua,yb,zd,wb,vb,$b,fa,Mb,ji,Fb,Bb,Eb,ga,xb,_a,zb,qb,Pb,es,jb,wt,ba,Cb,Uo,Nb,Ci,Ob,Db,qd,Sb,Ab,Ib,ts,Lb,os,Wb,ns,lp,Ko,ss,Pd,ka,Rb,jd,Ub,dp,rt,Ta,Kb,ya,Hb,Cd,Qb,Vb,Gb,wa,Jb,Ni,Yb,Xb,Zb,va,ek,$a,tk,ok,nk,rs,sk,Ot,Ma,rk,Ho,ak,Oi,ik,lk,Nd,dk,ck,pk,as,hk,is,cp,Qo,ls,Od,Fa,mk,Dd,uk,pp,at,Ba,fk,Sd,gk,_k,Ea,bk,Di,kk,Tk,yk,xa,wk,za,vk,$k,Mk,ds,Fk,vt,qa,Bk,Vo,Ek,Si,xk,zk,Ad,qk,Pk,jk,cs,Ck,ps,Nk,hs,hp,Go,ms,Id,Pa,Ok,Ld,Dk,mp,it,ja,Sk,Wd,Ak,Ik,Ca,Lk,Ai,Wk,Rk,Uk,Na,Kk,Oa,Hk,Qk,Vk,us,Gk,Dt,Da,Jk,Jo,Yk,Ii,Xk,Zk,Rd,eT,tT,oT,fs,nT,gs,up,Yo,_s,Ud,Sa,sT,Kd,rT,fp,lt,Aa,aT,Hd,iT,lT,Ia,dT,Li,cT,pT,hT,La,mT,Wa,uT,fT,gT,bs,_T,$t,Ra,bT,Xo,kT,Wi,TT,yT,Qd,wT,vT,$T,ks,MT,Ts,FT,ys,gp,Zo,ws,Vd,Ua,BT,Gd,ET,_p,dt,Ka,xT,en,zT,Jd,qT,PT,Yd,jT,CT,NT,Ha,OT,Ri,DT,ST,AT,Qa,IT,Va,LT,WT,RT,vs,UT,Mt,Ga,KT,tn,HT,Ui,QT,VT,Xd,GT,JT,YT,$s,XT,Ms,ZT,Fs,bp;return l=new Xe({}),B=new Xe({}),j=new Xe({}),E=new ne({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/configuration_mobilebert.py#L31"}}),an=new Ie({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[Xv]},$$scope:{ctx:x}}}),Os=new Xe({}),Ds=new ne({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MobileBertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MobileBertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MobileBertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MobileBertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MobileBertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MobileBertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MobileBertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MobileBertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MobileBertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.MobileBertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original MobileBERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L65"}}),As=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MobileBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MobileBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MobileBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L196",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ls=new ne({props:{name:"convert_tokens_to_string",anchor:"transformers.MobileBertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L191"}}),Ws=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MobileBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MobileBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MobileBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L249",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cn=new Ie({props:{anchor:"transformers.MobileBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Zv]},$$scope:{ctx:x}}}),Rs=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.MobileBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.MobileBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MobileBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MobileBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert.py#L221",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ks=new Xe({}),Hs=new ne({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MobileBertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MobileBertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MobileBertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MobileBertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MobileBertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MobileBertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MobileBertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.MobileBertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.MobileBertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original MobileBERT).`,name:"strip_accents"},{anchor:"transformers.MobileBertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L46"}}),Gs=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MobileBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.MobileBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.MobileBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L134",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ys=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MobileBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.MobileBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.MobileBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L158",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mn=new Ie({props:{anchor:"transformers.MobileBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[e$]},$$scope:{ctx:x}}}),Xs=new Xe({}),Zs=new ne({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L710"}}),tr=new ne({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L838"}}),nr=new Xe({}),sr=new ne({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L813"}}),dr=new ne({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),gn=new Ye({props:{$$slots:{default:[t$]},$$scope:{ctx:x}}}),_n=new Ie({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[o$]},$$scope:{ctx:x}}}),cr=new Xe({}),pr=new ne({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L927"}}),fr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"return_dict",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L956",returnDescription:`
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
`}}),kn=new Ye({props:{$$slots:{default:[n$]},$$scope:{ctx:x}}}),Tn=new Ie({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[s$]},$$scope:{ctx:x}}}),gr=new Xe({}),_r=new ne({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1039"}}),wr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1070",returnDescription:`
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
`}}),wn=new Ye({props:{$$slots:{default:[r$]},$$scope:{ctx:x}}}),vn=new Ie({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[a$]},$$scope:{ctx:x}}}),$n=new Ie({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[i$]},$$scope:{ctx:x}}}),vr=new Xe({}),$r=new ne({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1146"}}),xr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1156",returnDescription:`
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
`}}),Fn=new Ye({props:{$$slots:{default:[l$]},$$scope:{ctx:x}}}),Bn=new Ie({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[d$]},$$scope:{ctx:x}}}),zr=new Xe({}),qr=new ne({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1250"}}),Nr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1266",returnDescription:`
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
`}}),xn=new Ye({props:{$$slots:{default:[c$]},$$scope:{ctx:x}}}),zn=new Ie({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[p$]},$$scope:{ctx:x}}}),qn=new Ie({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[h$]},$$scope:{ctx:x}}}),Pn=new Ie({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[m$]},$$scope:{ctx:x}}}),jn=new Ie({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[u$]},$$scope:{ctx:x}}}),Or=new Xe({}),Dr=new ne({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1463"}}),Lr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1477",returnDescription:`
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
`}}),Nn=new Ye({props:{$$slots:{default:[f$]},$$scope:{ctx:x}}}),On=new Ie({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[g$]},$$scope:{ctx:x}}}),Wr=new Xe({}),Rr=new ne({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1561"}}),Qr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1579",returnDescription:`
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
`}}),Sn=new Ye({props:{$$slots:{default:[_$]},$$scope:{ctx:x}}}),An=new Ie({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[b$]},$$scope:{ctx:x}}}),In=new Ie({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[k$]},$$scope:{ctx:x}}}),Vr=new Xe({}),Gr=new ne({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1355"}}),Zr=new ne({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_mobilebert.py#L1369",returnDescription:`
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
`}}),Wn=new Ye({props:{$$slots:{default:[T$]},$$scope:{ctx:x}}}),Rn=new Ie({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[y$]},$$scope:{ctx:x}}}),Un=new Ie({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[w$]},$$scope:{ctx:x}}}),ea=new Xe({}),ta=new ne({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L970"}}),Hn=new Ye({props:{$$slots:{default:[v$]},$$scope:{ctx:x}}}),ra=new ne({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L975",returnDescription:`
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
`}}),Qn=new Ye({props:{$$slots:{default:[$$]},$$scope:{ctx:x}}}),Vn=new Ie({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[M$]},$$scope:{ctx:x}}}),aa=new Xe({}),ia=new ne({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1030"}}),Jn=new Ye({props:{$$slots:{default:[F$]},$$scope:{ctx:x}}}),pa=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1044",returnDescription:`
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
`}}),Yn=new Ye({props:{$$slots:{default:[B$]},$$scope:{ctx:x}}}),Xn=new Ie({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[E$]},$$scope:{ctx:x}}}),ha=new Xe({}),ma=new ne({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1125"}}),es=new Ye({props:{$$slots:{default:[x$]},$$scope:{ctx:x}}}),ba=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1146",returnDescription:`
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
`}}),ts=new Ye({props:{$$slots:{default:[z$]},$$scope:{ctx:x}}}),os=new Ie({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[q$]},$$scope:{ctx:x}}}),ns=new Ie({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[P$]},$$scope:{ctx:x}}}),ka=new Xe({}),Ta=new ne({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1226"}}),rs=new Ye({props:{$$slots:{default:[j$]},$$scope:{ctx:x}}}),Ma=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1236",returnDescription:`
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
`}}),as=new Ye({props:{$$slots:{default:[C$]},$$scope:{ctx:x}}}),is=new Ie({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[N$]},$$scope:{ctx:x}}}),Fa=new Xe({}),Ba=new ne({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1318"}}),ds=new Ye({props:{$$slots:{default:[O$]},$$scope:{ctx:x}}}),qa=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1341",returnDescription:`
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
`}}),cs=new Ye({props:{$$slots:{default:[D$]},$$scope:{ctx:x}}}),ps=new Ie({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[S$]},$$scope:{ctx:x}}}),hs=new Ie({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[A$]},$$scope:{ctx:x}}}),Pa=new Xe({}),ja=new ne({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1525"}}),us=new Ye({props:{$$slots:{default:[I$]},$$scope:{ctx:x}}}),Da=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1554",returnDescription:`
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
`}}),fs=new Ye({props:{$$slots:{default:[L$]},$$scope:{ctx:x}}}),gs=new Ie({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[W$]},$$scope:{ctx:x}}}),Sa=new Xe({}),Aa=new ne({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1659"}}),bs=new Ye({props:{$$slots:{default:[R$]},$$scope:{ctx:x}}}),Ra=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1683",returnDescription:`
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
`}}),ks=new Ye({props:{$$slots:{default:[U$]},$$scope:{ctx:x}}}),Ts=new Ie({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[K$]},$$scope:{ctx:x}}}),ys=new Ie({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[H$]},$$scope:{ctx:x}}}),Ua=new Xe({}),Ka=new ne({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1416"}}),vs=new Ye({props:{$$slots:{default:[Q$]},$$scope:{ctx:x}}}),Ga=new ne({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1435",returnDescription:`
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
`}}),$s=new Ye({props:{$$slots:{default:[V$]},$$scope:{ctx:x}}}),Ms=new Ie({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[G$]},$$scope:{ctx:x}}}),Fs=new Ie({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[J$]},$$scope:{ctx:x}}}),{c(){d=r("meta"),b=h(),c=r("h1"),u=r("a"),T=r("span"),y(l.$$.fragment),p=h(),q=r("span"),Te=o("MobileBERT"),me=h(),A=r("h2"),re=r("a"),Z=r("span"),y(B.$$.fragment),ye=h(),K=r("span"),we=o("Overview"),ue=h(),L=r("p"),ve=o("The MobileBERT model was proposed in "),ie=r("a"),H=o("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),$e=o(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),fe=h(),R=r("p"),Me=o("The abstract from the paper is the following:"),ge=h(),U=r("p"),ce=r("em"),Fe=o(`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),te=h(),P=r("p"),N=o("Tips:"),_e=h(),W=r("ul"),pe=r("li"),Be=o(`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Q=h(),he=r("li"),Ee=o(`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),C=h(),se=r("p"),V=o("This model was contributed by "),le=r("a"),xe=o("vshampor"),G=o(". The original code can be found "),de=r("a"),ze=o("here"),D=o("."),be=h(),I=r("h2"),ae=r("a"),ee=r("span"),y(j.$$.fragment),qe=h(),O=r("span"),Pe=o("MobileBertConfig"),ke=h(),f=r("div"),y(E.$$.fragment),Re=h(),J=r("p"),Ue=o("This is the configuration class to store the configuration of a "),Oe=r("a"),z=o("MobileBertModel"),Ke=o(" or a "),De=r("a"),He=o("TFMobileBertModel"),Qe=o(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=r("a"),S=o("google/mobilebert-uncased"),Y=o(" architecture."),Ve=h(),Ce=r("p"),X=o("Configuration objects inherit from "),Se=r("a"),Ge=o("PretrainedConfig"),je=o(` and can be used to control the model outputs. Read the
documentation from `),Ae=r("a"),oe=o("PretrainedConfig"),Je=o(" for more information."),Eh=h(),y(an.$$.fragment),xh=h(),fl=r("p"),zh=o(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),jc=h(),mo=r("h2"),ln=r("a"),gl=r("span"),y(Os.$$.fragment),qh=h(),_l=r("span"),Ph=o("MobileBertTokenizer"),Cc=h(),Ze=r("div"),y(Ds.$$.fragment),jh=h(),bl=r("p"),Ch=o("Construct a MobileBERT tokenizer. Based on WordPiece."),Nh=h(),Ss=r("p"),Oh=o("This tokenizer inherits from "),ri=r("a"),Dh=o("PreTrainedTokenizer"),Sh=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Ah=h(),Gt=r("div"),y(As.$$.fragment),Ih=h(),kl=r("p"),Lh=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MobileBERT sequence has the following format:`),Wh=h(),Is=r("ul"),ai=r("li"),Rh=o("single sequence: "),Tl=r("code"),Uh=o("[CLS] X [SEP]"),Kh=h(),ii=r("li"),Hh=o("pair of sequences: "),yl=r("code"),Qh=o("[CLS] A [SEP] B [SEP]"),Vh=h(),dn=r("div"),y(Ls.$$.fragment),Gh=h(),wl=r("p"),Jh=o("Converts a sequence of tokens (string) in a single string."),Yh=h(),Et=r("div"),y(Ws.$$.fragment),Xh=h(),vl=r("p"),Zh=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A MobileBERT"),em=h(),y(cn.$$.fragment),tm=h(),uo=r("p"),om=o("If "),$l=r("code"),nm=o("token_ids_1"),sm=o(" is "),Ml=r("code"),rm=o("None"),am=o(", this method only returns the first portion of the mask (0s)."),im=h(),pn=r("div"),y(Rs.$$.fragment),lm=h(),Us=r("p"),dm=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fl=r("code"),cm=o("prepare_for_model"),pm=o(" method."),Nc=h(),fo=r("h2"),hn=r("a"),Bl=r("span"),y(Ks.$$.fragment),hm=h(),El=r("span"),mm=o("MobileBertTokenizerFast"),Oc=h(),pt=r("div"),y(Hs.$$.fragment),um=h(),Qs=r("p"),fm=o("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),xl=r("em"),gm=o("tokenizers"),_m=o(" library). Based on WordPiece."),bm=h(),Vs=r("p"),km=o("This tokenizer inherits from "),li=r("a"),Tm=o("PreTrainedTokenizerFast"),ym=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),wm=h(),Jt=r("div"),y(Gs.$$.fragment),vm=h(),zl=r("p"),$m=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MobileBERT sequence has the following format:`),Mm=h(),Js=r("ul"),di=r("li"),Fm=o("single sequence: "),ql=r("code"),Bm=o("[CLS] X [SEP]"),Em=h(),ci=r("li"),xm=o("pair of sequences: "),Pl=r("code"),zm=o("[CLS] A [SEP] B [SEP]"),qm=h(),xt=r("div"),y(Ys.$$.fragment),Pm=h(),jl=r("p"),jm=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A MobileBERT"),Cm=h(),y(mn.$$.fragment),Nm=h(),go=r("p"),Om=o("If "),Cl=r("code"),Dm=o("token_ids_1"),Sm=o(" is "),Nl=r("code"),Am=o("None"),Im=o(", this method only returns the first portion of the mask (0s)."),Dc=h(),_o=r("h2"),un=r("a"),Ol=r("span"),y(Xs.$$.fragment),Lm=h(),Dl=r("span"),Wm=o("MobileBert specific outputs"),Sc=h(),bo=r("div"),y(Zs.$$.fragment),Rm=h(),er=r("p"),Um=o("Output type of "),pi=r("a"),Km=o("MobileBertForPreTraining"),Hm=o("."),Ac=h(),ko=r("div"),y(tr.$$.fragment),Qm=h(),or=r("p"),Vm=o("Output type of "),hi=r("a"),Gm=o("TFMobileBertForPreTraining"),Jm=o("."),Ic=h(),To=r("h2"),fn=r("a"),Sl=r("span"),y(nr.$$.fragment),Ym=h(),Al=r("span"),Xm=o("MobileBertModel"),Lc=h(),tt=r("div"),y(sr.$$.fragment),Zm=h(),Il=r("p"),eu=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),tu=h(),rr=r("p"),ou=o("This model inherits from "),mi=r("a"),nu=o("PreTrainedModel"),su=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ru=h(),ar=r("p"),au=o("This model is also a PyTorch "),ir=r("a"),iu=o("torch.nn.Module"),lu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du=h(),Ll=r("p"),lr=r("a"),cu=o("https://arxiv.org/pdf/2004.02984.pdf"),pu=h(),zt=r("div"),y(dr.$$.fragment),hu=h(),yo=r("p"),mu=o("The "),ui=r("a"),uu=o("MobileBertModel"),fu=o(" forward method, overrides the "),Wl=r("code"),gu=o("__call__"),_u=o(" special method."),bu=h(),y(gn.$$.fragment),ku=h(),y(_n.$$.fragment),Wc=h(),wo=r("h2"),bn=r("a"),Rl=r("span"),y(cr.$$.fragment),Tu=h(),Ul=r("span"),yu=o("MobileBertForPreTraining"),Rc=h(),ht=r("div"),y(pr.$$.fragment),wu=h(),vo=r("p"),vu=o("MobileBert Model with two heads on top as done during the pretraining: a "),Kl=r("code"),$u=o("masked language modeling"),Mu=o(` head and a
`),Hl=r("code"),Fu=o("next sentence prediction (classification)"),Bu=o(" head."),Eu=h(),hr=r("p"),xu=o("This model inherits from "),fi=r("a"),zu=o("PreTrainedModel"),qu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pu=h(),mr=r("p"),ju=o("This model is also a PyTorch "),ur=r("a"),Cu=o("torch.nn.Module"),Nu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ou=h(),qt=r("div"),y(fr.$$.fragment),Du=h(),$o=r("p"),Su=o("The "),gi=r("a"),Au=o("MobileBertForPreTraining"),Iu=o(" forward method, overrides the "),Ql=r("code"),Lu=o("__call__"),Wu=o(" special method."),Ru=h(),y(kn.$$.fragment),Uu=h(),y(Tn.$$.fragment),Uc=h(),Mo=r("h2"),yn=r("a"),Vl=r("span"),y(gr.$$.fragment),Ku=h(),Gl=r("span"),Hu=o("MobileBertForMaskedLM"),Kc=h(),mt=r("div"),y(_r.$$.fragment),Qu=h(),br=r("p"),Vu=o("MobileBert Model with a "),Jl=r("code"),Gu=o("language modeling"),Ju=o(" head on top."),Yu=h(),kr=r("p"),Xu=o("This model inherits from "),_i=r("a"),Zu=o("PreTrainedModel"),ef=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=h(),Tr=r("p"),of=o("This model is also a PyTorch "),yr=r("a"),nf=o("torch.nn.Module"),sf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rf=h(),kt=r("div"),y(wr.$$.fragment),af=h(),Fo=r("p"),lf=o("The "),bi=r("a"),df=o("MobileBertForMaskedLM"),cf=o(" forward method, overrides the "),Yl=r("code"),pf=o("__call__"),hf=o(" special method."),mf=h(),y(wn.$$.fragment),uf=h(),y(vn.$$.fragment),ff=h(),y($n.$$.fragment),Hc=h(),Bo=r("h2"),Mn=r("a"),Xl=r("span"),y(vr.$$.fragment),gf=h(),Zl=r("span"),_f=o("MobileBertForNextSentencePrediction"),Qc=h(),ut=r("div"),y($r.$$.fragment),bf=h(),Mr=r("p"),kf=o("MobileBert Model with a "),ed=r("code"),Tf=o("next sentence prediction (classification)"),yf=o(" head on top."),wf=h(),Fr=r("p"),vf=o("This model inherits from "),ki=r("a"),$f=o("PreTrainedModel"),Mf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ff=h(),Br=r("p"),Bf=o("This model is also a PyTorch "),Er=r("a"),Ef=o("torch.nn.Module"),xf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zf=h(),Pt=r("div"),y(xr.$$.fragment),qf=h(),Eo=r("p"),Pf=o("The "),Ti=r("a"),jf=o("MobileBertForNextSentencePrediction"),Cf=o(" forward method, overrides the "),td=r("code"),Nf=o("__call__"),Of=o(" special method."),Df=h(),y(Fn.$$.fragment),Sf=h(),y(Bn.$$.fragment),Vc=h(),xo=r("h2"),En=r("a"),od=r("span"),y(zr.$$.fragment),Af=h(),nd=r("span"),If=o("MobileBertForSequenceClassification"),Gc=h(),ft=r("div"),y(qr.$$.fragment),Lf=h(),sd=r("p"),Wf=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rf=h(),Pr=r("p"),Uf=o("This model inherits from "),yi=r("a"),Kf=o("PreTrainedModel"),Hf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qf=h(),jr=r("p"),Vf=o("This model is also a PyTorch "),Cr=r("a"),Gf=o("torch.nn.Module"),Jf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yf=h(),et=r("div"),y(Nr.$$.fragment),Xf=h(),zo=r("p"),Zf=o("The "),wi=r("a"),eg=o("MobileBertForSequenceClassification"),tg=o(" forward method, overrides the "),rd=r("code"),og=o("__call__"),ng=o(" special method."),sg=h(),y(xn.$$.fragment),rg=h(),y(zn.$$.fragment),ag=h(),y(qn.$$.fragment),ig=h(),y(Pn.$$.fragment),lg=h(),y(jn.$$.fragment),Jc=h(),qo=r("h2"),Cn=r("a"),ad=r("span"),y(Or.$$.fragment),dg=h(),id=r("span"),cg=o("MobileBertForMultipleChoice"),Yc=h(),gt=r("div"),y(Dr.$$.fragment),pg=h(),ld=r("p"),hg=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mg=h(),Sr=r("p"),ug=o("This model inherits from "),vi=r("a"),fg=o("PreTrainedModel"),gg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_g=h(),Ar=r("p"),bg=o("This model is also a PyTorch "),Ir=r("a"),kg=o("torch.nn.Module"),Tg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yg=h(),jt=r("div"),y(Lr.$$.fragment),wg=h(),Po=r("p"),vg=o("The "),$i=r("a"),$g=o("MobileBertForMultipleChoice"),Mg=o(" forward method, overrides the "),dd=r("code"),Fg=o("__call__"),Bg=o(" special method."),Eg=h(),y(Nn.$$.fragment),xg=h(),y(On.$$.fragment),Xc=h(),jo=r("h2"),Dn=r("a"),cd=r("span"),y(Wr.$$.fragment),zg=h(),pd=r("span"),qg=o("MobileBertForTokenClassification"),Zc=h(),_t=r("div"),y(Rr.$$.fragment),Pg=h(),hd=r("p"),jg=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=h(),Ur=r("p"),Ng=o("This model inherits from "),Mi=r("a"),Og=o("PreTrainedModel"),Dg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sg=h(),Kr=r("p"),Ag=o("This model is also a PyTorch "),Hr=r("a"),Ig=o("torch.nn.Module"),Lg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=h(),Tt=r("div"),y(Qr.$$.fragment),Rg=h(),Co=r("p"),Ug=o("The "),Fi=r("a"),Kg=o("MobileBertForTokenClassification"),Hg=o(" forward method, overrides the "),md=r("code"),Qg=o("__call__"),Vg=o(" special method."),Gg=h(),y(Sn.$$.fragment),Jg=h(),y(An.$$.fragment),Yg=h(),y(In.$$.fragment),ep=h(),No=r("h2"),Ln=r("a"),ud=r("span"),y(Vr.$$.fragment),Xg=h(),fd=r("span"),Zg=o("MobileBertForQuestionAnswering"),tp=h(),bt=r("div"),y(Gr.$$.fragment),e_=h(),Oo=r("p"),t_=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),gd=r("code"),o_=o("span start logits"),n_=o(" and "),_d=r("code"),s_=o("span end logits"),r_=o(")."),a_=h(),Jr=r("p"),i_=o("This model inherits from "),Bi=r("a"),l_=o("PreTrainedModel"),d_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c_=h(),Yr=r("p"),p_=o("This model is also a PyTorch "),Xr=r("a"),h_=o("torch.nn.Module"),m_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u_=h(),yt=r("div"),y(Zr.$$.fragment),f_=h(),Do=r("p"),g_=o("The "),Ei=r("a"),__=o("MobileBertForQuestionAnswering"),b_=o(" forward method, overrides the "),bd=r("code"),k_=o("__call__"),T_=o(" special method."),y_=h(),y(Wn.$$.fragment),w_=h(),y(Rn.$$.fragment),v_=h(),y(Un.$$.fragment),op=h(),So=r("h2"),Kn=r("a"),kd=r("span"),y(ea.$$.fragment),$_=h(),Td=r("span"),M_=o("TFMobileBertModel"),np=h(),ot=r("div"),y(ta.$$.fragment),F_=h(),yd=r("p"),B_=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),E_=h(),oa=r("p"),x_=o("This model inherits from "),xi=r("a"),z_=o("TFPreTrainedModel"),q_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),P_=h(),na=r("p"),j_=o("This model is also a "),sa=r("a"),C_=o("tf.keras.Model"),N_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),O_=h(),y(Hn.$$.fragment),D_=h(),Ct=r("div"),y(ra.$$.fragment),S_=h(),Ao=r("p"),A_=o("The "),zi=r("a"),I_=o("TFMobileBertModel"),L_=o(" forward method, overrides the "),wd=r("code"),W_=o("__call__"),R_=o(" special method."),U_=h(),y(Qn.$$.fragment),K_=h(),y(Vn.$$.fragment),sp=h(),Io=r("h2"),Gn=r("a"),vd=r("span"),y(aa.$$.fragment),H_=h(),$d=r("span"),Q_=o("TFMobileBertForPreTraining"),rp=h(),nt=r("div"),y(ia.$$.fragment),V_=h(),Lo=r("p"),G_=o("MobileBert Model with two heads on top as done during the pretraining: a "),Md=r("code"),J_=o("masked language modeling"),Y_=o(` head and a
`),Fd=r("code"),X_=o("next sentence prediction (classification)"),Z_=o(" head."),eb=h(),la=r("p"),tb=o("This model inherits from "),qi=r("a"),ob=o("TFPreTrainedModel"),nb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sb=h(),da=r("p"),rb=o("This model is also a "),ca=r("a"),ab=o("tf.keras.Model"),ib=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lb=h(),y(Jn.$$.fragment),db=h(),Nt=r("div"),y(pa.$$.fragment),cb=h(),Wo=r("p"),pb=o("The "),Pi=r("a"),hb=o("TFMobileBertForPreTraining"),mb=o(" forward method, overrides the "),Bd=r("code"),ub=o("__call__"),fb=o(" special method."),gb=h(),y(Yn.$$.fragment),_b=h(),y(Xn.$$.fragment),ap=h(),Ro=r("h2"),Zn=r("a"),Ed=r("span"),y(ha.$$.fragment),bb=h(),xd=r("span"),kb=o("TFMobileBertForMaskedLM"),ip=h(),st=r("div"),y(ma.$$.fragment),Tb=h(),ua=r("p"),yb=o("MobileBert Model with a "),zd=r("code"),wb=o("language modeling"),vb=o(" head on top."),$b=h(),fa=r("p"),Mb=o("This model inherits from "),ji=r("a"),Fb=o("TFPreTrainedModel"),Bb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eb=h(),ga=r("p"),xb=o("This model is also a "),_a=r("a"),zb=o("tf.keras.Model"),qb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pb=h(),y(es.$$.fragment),jb=h(),wt=r("div"),y(ba.$$.fragment),Cb=h(),Uo=r("p"),Nb=o("The "),Ci=r("a"),Ob=o("TFMobileBertForMaskedLM"),Db=o(" forward method, overrides the "),qd=r("code"),Sb=o("__call__"),Ab=o(" special method."),Ib=h(),y(ts.$$.fragment),Lb=h(),y(os.$$.fragment),Wb=h(),y(ns.$$.fragment),lp=h(),Ko=r("h2"),ss=r("a"),Pd=r("span"),y(ka.$$.fragment),Rb=h(),jd=r("span"),Ub=o("TFMobileBertForNextSentencePrediction"),dp=h(),rt=r("div"),y(Ta.$$.fragment),Kb=h(),ya=r("p"),Hb=o("MobileBert Model with a "),Cd=r("code"),Qb=o("next sentence prediction (classification)"),Vb=o(" head on top."),Gb=h(),wa=r("p"),Jb=o("This model inherits from "),Ni=r("a"),Yb=o("TFPreTrainedModel"),Xb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zb=h(),va=r("p"),ek=o("This model is also a "),$a=r("a"),tk=o("tf.keras.Model"),ok=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),nk=h(),y(rs.$$.fragment),sk=h(),Ot=r("div"),y(Ma.$$.fragment),rk=h(),Ho=r("p"),ak=o("The "),Oi=r("a"),ik=o("TFMobileBertForNextSentencePrediction"),lk=o(" forward method, overrides the "),Nd=r("code"),dk=o("__call__"),ck=o(" special method."),pk=h(),y(as.$$.fragment),hk=h(),y(is.$$.fragment),cp=h(),Qo=r("h2"),ls=r("a"),Od=r("span"),y(Fa.$$.fragment),mk=h(),Dd=r("span"),uk=o("TFMobileBertForSequenceClassification"),pp=h(),at=r("div"),y(Ba.$$.fragment),fk=h(),Sd=r("p"),gk=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_k=h(),Ea=r("p"),bk=o("This model inherits from "),Di=r("a"),kk=o("TFPreTrainedModel"),Tk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yk=h(),xa=r("p"),wk=o("This model is also a "),za=r("a"),vk=o("tf.keras.Model"),$k=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mk=h(),y(ds.$$.fragment),Fk=h(),vt=r("div"),y(qa.$$.fragment),Bk=h(),Vo=r("p"),Ek=o("The "),Si=r("a"),xk=o("TFMobileBertForSequenceClassification"),zk=o(" forward method, overrides the "),Ad=r("code"),qk=o("__call__"),Pk=o(" special method."),jk=h(),y(cs.$$.fragment),Ck=h(),y(ps.$$.fragment),Nk=h(),y(hs.$$.fragment),hp=h(),Go=r("h2"),ms=r("a"),Id=r("span"),y(Pa.$$.fragment),Ok=h(),Ld=r("span"),Dk=o("TFMobileBertForMultipleChoice"),mp=h(),it=r("div"),y(ja.$$.fragment),Sk=h(),Wd=r("p"),Ak=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ik=h(),Ca=r("p"),Lk=o("This model inherits from "),Ai=r("a"),Wk=o("TFPreTrainedModel"),Rk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uk=h(),Na=r("p"),Kk=o("This model is also a "),Oa=r("a"),Hk=o("tf.keras.Model"),Qk=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vk=h(),y(us.$$.fragment),Gk=h(),Dt=r("div"),y(Da.$$.fragment),Jk=h(),Jo=r("p"),Yk=o("The "),Ii=r("a"),Xk=o("TFMobileBertForMultipleChoice"),Zk=o(" forward method, overrides the "),Rd=r("code"),eT=o("__call__"),tT=o(" special method."),oT=h(),y(fs.$$.fragment),nT=h(),y(gs.$$.fragment),up=h(),Yo=r("h2"),_s=r("a"),Ud=r("span"),y(Sa.$$.fragment),sT=h(),Kd=r("span"),rT=o("TFMobileBertForTokenClassification"),fp=h(),lt=r("div"),y(Aa.$$.fragment),aT=h(),Hd=r("p"),iT=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),lT=h(),Ia=r("p"),dT=o("This model inherits from "),Li=r("a"),cT=o("TFPreTrainedModel"),pT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hT=h(),La=r("p"),mT=o("This model is also a "),Wa=r("a"),uT=o("tf.keras.Model"),fT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gT=h(),y(bs.$$.fragment),_T=h(),$t=r("div"),y(Ra.$$.fragment),bT=h(),Xo=r("p"),kT=o("The "),Wi=r("a"),TT=o("TFMobileBertForTokenClassification"),yT=o(" forward method, overrides the "),Qd=r("code"),wT=o("__call__"),vT=o(" special method."),$T=h(),y(ks.$$.fragment),MT=h(),y(Ts.$$.fragment),FT=h(),y(ys.$$.fragment),gp=h(),Zo=r("h2"),ws=r("a"),Vd=r("span"),y(Ua.$$.fragment),BT=h(),Gd=r("span"),ET=o("TFMobileBertForQuestionAnswering"),_p=h(),dt=r("div"),y(Ka.$$.fragment),xT=h(),en=r("p"),zT=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Jd=r("code"),qT=o("span start logits"),PT=o(" and "),Yd=r("code"),jT=o("span end logits"),CT=o(")."),NT=h(),Ha=r("p"),OT=o("This model inherits from "),Ri=r("a"),DT=o("TFPreTrainedModel"),ST=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),AT=h(),Qa=r("p"),IT=o("This model is also a "),Va=r("a"),LT=o("tf.keras.Model"),WT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),RT=h(),y(vs.$$.fragment),UT=h(),Mt=r("div"),y(Ga.$$.fragment),KT=h(),tn=r("p"),HT=o("The "),Ui=r("a"),QT=o("TFMobileBertForQuestionAnswering"),VT=o(" forward method, overrides the "),Xd=r("code"),GT=o("__call__"),JT=o(" special method."),YT=h(),y($s.$$.fragment),XT=h(),y(Ms.$$.fragment),ZT=h(),y(Fs.$$.fragment),this.h()},l(s){const k=Jv('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),b=m(s),c=a(s,"H1",{class:!0});var Ja=i(c);u=a(Ja,"A",{id:!0,class:!0,href:!0});var Zd=i(u);T=a(Zd,"SPAN",{});var ec=i(T);w(l.$$.fragment,ec),ec.forEach(t),Zd.forEach(t),p=m(Ja),q=a(Ja,"SPAN",{});var tc=i(q);Te=n(tc,"MobileBERT"),tc.forEach(t),Ja.forEach(t),me=m(s),A=a(s,"H2",{class:!0});var Ya=i(A);re=a(Ya,"A",{id:!0,class:!0,href:!0});var oc=i(re);Z=a(oc,"SPAN",{});var nc=i(Z);w(B.$$.fragment,nc),nc.forEach(t),oc.forEach(t),ye=m(Ya),K=a(Ya,"SPAN",{});var sc=i(K);we=n(sc,"Overview"),sc.forEach(t),Ya.forEach(t),ue=m(s),L=a(s,"P",{});var Xa=i(L);ve=n(Xa,"The MobileBERT model was proposed in "),ie=a(Xa,"A",{href:!0,rel:!0});var rc=i(ie);H=n(rc,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),rc.forEach(t),$e=n(Xa,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),Xa.forEach(t),fe=m(s),R=a(s,"P",{});var ac=i(R);Me=n(ac,"The abstract from the paper is the following:"),ac.forEach(t),ge=m(s),U=a(s,"P",{});var ic=i(U);ce=a(ic,"EM",{});var lc=i(ce);Fe=n(lc,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),lc.forEach(t),ic.forEach(t),te=m(s),P=a(s,"P",{});var dc=i(P);N=n(dc,"Tips:"),dc.forEach(t),_e=m(s),W=a(s,"UL",{});var Za=i(W);pe=a(Za,"LI",{});var cc=i(pe);Be=n(cc,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),cc.forEach(t),Q=m(Za),he=a(Za,"LI",{});var pc=i(he);Ee=n(pc,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),pc.forEach(t),Za.forEach(t),C=m(s),se=a(s,"P",{});var on=i(se);V=n(on,"This model was contributed by "),le=a(on,"A",{href:!0,rel:!0});var hc=i(le);xe=n(hc,"vshampor"),hc.forEach(t),G=n(on,". The original code can be found "),de=a(on,"A",{href:!0,rel:!0});var mc=i(de);ze=n(mc,"here"),mc.forEach(t),D=n(on,"."),on.forEach(t),be=m(s),I=a(s,"H2",{class:!0});var ei=i(I);ae=a(ei,"A",{id:!0,class:!0,href:!0});var uc=i(ae);ee=a(uc,"SPAN",{});var fc=i(ee);w(j.$$.fragment,fc),fc.forEach(t),uc.forEach(t),qe=m(ei),O=a(ei,"SPAN",{});var gc=i(O);Pe=n(gc,"MobileBertConfig"),gc.forEach(t),ei.forEach(t),ke=m(s),f=a(s,"DIV",{class:!0});var Bt=i(f);w(E.$$.fragment,Bt),Re=m(Bt),J=a(Bt,"P",{});var Qt=i(J);Ue=n(Qt,"This is the configuration class to store the configuration of a "),Oe=a(Qt,"A",{href:!0});var _c=i(Oe);z=n(_c,"MobileBertModel"),_c.forEach(t),Ke=n(Qt," or a "),De=a(Qt,"A",{href:!0});var bc=i(De);He=n(bc,"TFMobileBertModel"),bc.forEach(t),Qe=n(Qt,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=a(Qt,"A",{href:!0,rel:!0});var kc=i(Ne);S=n(kc,"google/mobilebert-uncased"),kc.forEach(t),Y=n(Qt," architecture."),Qt.forEach(t),Ve=m(Bt),Ce=a(Bt,"P",{});var nn=i(Ce);X=n(nn,"Configuration objects inherit from "),Se=a(nn,"A",{href:!0});var Tc=i(Se);Ge=n(Tc,"PretrainedConfig"),Tc.forEach(t),je=n(nn,` and can be used to control the model outputs. Read the
documentation from `),Ae=a(nn,"A",{href:!0});var yc=i(Ae);oe=n(yc,"PretrainedConfig"),yc.forEach(t),Je=n(nn," for more information."),nn.forEach(t),Eh=m(Bt),w(an.$$.fragment,Bt),xh=m(Bt),fl=a(Bt,"P",{});var wc=i(fl);zh=n(wc,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),wc.forEach(t),Bt.forEach(t),jc=m(s),mo=a(s,"H2",{class:!0});var ti=i(mo);ln=a(ti,"A",{id:!0,class:!0,href:!0});var vc=i(ln);gl=a(vc,"SPAN",{});var $c=i(gl);w(Os.$$.fragment,$c),$c.forEach(t),vc.forEach(t),qh=m(ti),_l=a(ti,"SPAN",{});var Mc=i(_l);Ph=n(Mc,"MobileBertTokenizer"),Mc.forEach(t),ti.forEach(t),Cc=m(s),Ze=a(s,"DIV",{class:!0});var ct=i(Ze);w(Ds.$$.fragment,ct),jh=m(ct),bl=a(ct,"P",{});var Fc=i(bl);Ch=n(Fc,"Construct a MobileBERT tokenizer. Based on WordPiece."),Fc.forEach(t),Nh=m(ct),Ss=a(ct,"P",{});var oi=i(Ss);Oh=n(oi,"This tokenizer inherits from "),ri=a(oi,"A",{href:!0});var Bc=i(ri);Dh=n(Bc,"PreTrainedTokenizer"),Bc.forEach(t),Sh=n(oi,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),oi.forEach(t),Ah=m(ct),Gt=a(ct,"DIV",{class:!0});var sn=i(Gt);w(As.$$.fragment,sn),Ih=m(sn),kl=a(sn,"P",{});var Ec=i(kl);Lh=n(Ec,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MobileBERT sequence has the following format:`),Ec.forEach(t),Wh=m(sn),Is=a(sn,"UL",{});var ni=i(Is);ai=a(ni,"LI",{});var Ki=i(ai);Rh=n(Ki,"single sequence: "),Tl=a(Ki,"CODE",{});var xc=i(Tl);Uh=n(xc,"[CLS] X [SEP]"),xc.forEach(t),Ki.forEach(t),Kh=m(ni),ii=a(ni,"LI",{});var Hi=i(ii);Hh=n(Hi,"pair of sequences: "),yl=a(Hi,"CODE",{});var zc=i(yl);Qh=n(zc,"[CLS] A [SEP] B [SEP]"),zc.forEach(t),Hi.forEach(t),ni.forEach(t),sn.forEach(t),Vh=m(ct),dn=a(ct,"DIV",{class:!0});var si=i(dn);w(Ls.$$.fragment,si),Gh=m(si),wl=a(si,"P",{});var qc=i(wl);Jh=n(qc,"Converts a sequence of tokens (string) in a single string."),qc.forEach(t),si.forEach(t),Yh=m(ct),Et=a(ct,"DIV",{class:!0});var Vt=i(Et);w(Ws.$$.fragment,Vt),Xh=m(Vt),vl=a(Vt,"P",{});var Pc=i(vl);Zh=n(Pc,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A MobileBERT"),Pc.forEach(t),em=m(Vt),w(cn.$$.fragment,Vt),tm=m(Vt),uo=a(Vt,"P",{});var rn=i(uo);om=n(rn,"If "),$l=a(rn,"CODE",{});var oy=i($l);nm=n(oy,"token_ids_1"),oy.forEach(t),sm=n(rn," is "),Ml=a(rn,"CODE",{});var ny=i(Ml);rm=n(ny,"None"),ny.forEach(t),am=n(rn,", this method only returns the first portion of the mask (0s)."),rn.forEach(t),Vt.forEach(t),im=m(ct),pn=a(ct,"DIV",{class:!0});var kp=i(pn);w(Rs.$$.fragment,kp),lm=m(kp),Us=a(kp,"P",{});var Tp=i(Us);dm=n(Tp,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Fl=a(Tp,"CODE",{});var sy=i(Fl);cm=n(sy,"prepare_for_model"),sy.forEach(t),pm=n(Tp," method."),Tp.forEach(t),kp.forEach(t),ct.forEach(t),Nc=m(s),fo=a(s,"H2",{class:!0});var yp=i(fo);hn=a(yp,"A",{id:!0,class:!0,href:!0});var ry=i(hn);Bl=a(ry,"SPAN",{});var ay=i(Bl);w(Ks.$$.fragment,ay),ay.forEach(t),ry.forEach(t),hm=m(yp),El=a(yp,"SPAN",{});var iy=i(El);mm=n(iy,"MobileBertTokenizerFast"),iy.forEach(t),yp.forEach(t),Oc=m(s),pt=a(s,"DIV",{class:!0});var Yt=i(pt);w(Hs.$$.fragment,Yt),um=m(Yt),Qs=a(Yt,"P",{});var wp=i(Qs);fm=n(wp,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),xl=a(wp,"EM",{});var ly=i(xl);gm=n(ly,"tokenizers"),ly.forEach(t),_m=n(wp," library). Based on WordPiece."),wp.forEach(t),bm=m(Yt),Vs=a(Yt,"P",{});var vp=i(Vs);km=n(vp,"This tokenizer inherits from "),li=a(vp,"A",{href:!0});var dy=i(li);Tm=n(dy,"PreTrainedTokenizerFast"),dy.forEach(t),ym=n(vp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),vp.forEach(t),wm=m(Yt),Jt=a(Yt,"DIV",{class:!0});var Qi=i(Jt);w(Gs.$$.fragment,Qi),vm=m(Qi),zl=a(Qi,"P",{});var cy=i(zl);$m=n(cy,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MobileBERT sequence has the following format:`),cy.forEach(t),Mm=m(Qi),Js=a(Qi,"UL",{});var $p=i(Js);di=a($p,"LI",{});var ey=i(di);Fm=n(ey,"single sequence: "),ql=a(ey,"CODE",{});var py=i(ql);Bm=n(py,"[CLS] X [SEP]"),py.forEach(t),ey.forEach(t),Em=m($p),ci=a($p,"LI",{});var ty=i(ci);xm=n(ty,"pair of sequences: "),Pl=a(ty,"CODE",{});var hy=i(Pl);zm=n(hy,"[CLS] A [SEP] B [SEP]"),hy.forEach(t),ty.forEach(t),$p.forEach(t),Qi.forEach(t),qm=m(Yt),xt=a(Yt,"DIV",{class:!0});var Bs=i(xt);w(Ys.$$.fragment,Bs),Pm=m(Bs),jl=a(Bs,"P",{});var my=i(jl);jm=n(my,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A MobileBERT"),my.forEach(t),Cm=m(Bs),w(mn.$$.fragment,Bs),Nm=m(Bs),go=a(Bs,"P",{});var Vi=i(go);Om=n(Vi,"If "),Cl=a(Vi,"CODE",{});var uy=i(Cl);Dm=n(uy,"token_ids_1"),uy.forEach(t),Sm=n(Vi," is "),Nl=a(Vi,"CODE",{});var fy=i(Nl);Am=n(fy,"None"),fy.forEach(t),Im=n(Vi,", this method only returns the first portion of the mask (0s)."),Vi.forEach(t),Bs.forEach(t),Yt.forEach(t),Dc=m(s),_o=a(s,"H2",{class:!0});var Mp=i(_o);un=a(Mp,"A",{id:!0,class:!0,href:!0});var gy=i(un);Ol=a(gy,"SPAN",{});var _y=i(Ol);w(Xs.$$.fragment,_y),_y.forEach(t),gy.forEach(t),Lm=m(Mp),Dl=a(Mp,"SPAN",{});var by=i(Dl);Wm=n(by,"MobileBert specific outputs"),by.forEach(t),Mp.forEach(t),Sc=m(s),bo=a(s,"DIV",{class:!0});var Fp=i(bo);w(Zs.$$.fragment,Fp),Rm=m(Fp),er=a(Fp,"P",{});var Bp=i(er);Um=n(Bp,"Output type of "),pi=a(Bp,"A",{href:!0});var ky=i(pi);Km=n(ky,"MobileBertForPreTraining"),ky.forEach(t),Hm=n(Bp,"."),Bp.forEach(t),Fp.forEach(t),Ac=m(s),ko=a(s,"DIV",{class:!0});var Ep=i(ko);w(tr.$$.fragment,Ep),Qm=m(Ep),or=a(Ep,"P",{});var xp=i(or);Vm=n(xp,"Output type of "),hi=a(xp,"A",{href:!0});var Ty=i(hi);Gm=n(Ty,"TFMobileBertForPreTraining"),Ty.forEach(t),Jm=n(xp,"."),xp.forEach(t),Ep.forEach(t),Ic=m(s),To=a(s,"H2",{class:!0});var zp=i(To);fn=a(zp,"A",{id:!0,class:!0,href:!0});var yy=i(fn);Sl=a(yy,"SPAN",{});var wy=i(Sl);w(nr.$$.fragment,wy),wy.forEach(t),yy.forEach(t),Ym=m(zp),Al=a(zp,"SPAN",{});var vy=i(Al);Xm=n(vy,"MobileBertModel"),vy.forEach(t),zp.forEach(t),Lc=m(s),tt=a(s,"DIV",{class:!0});var St=i(tt);w(sr.$$.fragment,St),Zm=m(St),Il=a(St,"P",{});var $y=i(Il);eu=n($y,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),$y.forEach(t),tu=m(St),rr=a(St,"P",{});var qp=i(rr);ou=n(qp,"This model inherits from "),mi=a(qp,"A",{href:!0});var My=i(mi);nu=n(My,"PreTrainedModel"),My.forEach(t),su=n(qp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qp.forEach(t),ru=m(St),ar=a(St,"P",{});var Pp=i(ar);au=n(Pp,"This model is also a PyTorch "),ir=a(Pp,"A",{href:!0,rel:!0});var Fy=i(ir);iu=n(Fy,"torch.nn.Module"),Fy.forEach(t),lu=n(Pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pp.forEach(t),du=m(St),Ll=a(St,"P",{});var By=i(Ll);lr=a(By,"A",{href:!0,rel:!0});var Ey=i(lr);cu=n(Ey,"https://arxiv.org/pdf/2004.02984.pdf"),Ey.forEach(t),By.forEach(t),pu=m(St),zt=a(St,"DIV",{class:!0});var Es=i(zt);w(dr.$$.fragment,Es),hu=m(Es),yo=a(Es,"P",{});var Gi=i(yo);mu=n(Gi,"The "),ui=a(Gi,"A",{href:!0});var xy=i(ui);uu=n(xy,"MobileBertModel"),xy.forEach(t),fu=n(Gi," forward method, overrides the "),Wl=a(Gi,"CODE",{});var zy=i(Wl);gu=n(zy,"__call__"),zy.forEach(t),_u=n(Gi," special method."),Gi.forEach(t),bu=m(Es),w(gn.$$.fragment,Es),ku=m(Es),w(_n.$$.fragment,Es),Es.forEach(t),St.forEach(t),Wc=m(s),wo=a(s,"H2",{class:!0});var jp=i(wo);bn=a(jp,"A",{id:!0,class:!0,href:!0});var qy=i(bn);Rl=a(qy,"SPAN",{});var Py=i(Rl);w(cr.$$.fragment,Py),Py.forEach(t),qy.forEach(t),Tu=m(jp),Ul=a(jp,"SPAN",{});var jy=i(Ul);yu=n(jy,"MobileBertForPreTraining"),jy.forEach(t),jp.forEach(t),Rc=m(s),ht=a(s,"DIV",{class:!0});var Xt=i(ht);w(pr.$$.fragment,Xt),wu=m(Xt),vo=a(Xt,"P",{});var Ji=i(vo);vu=n(Ji,"MobileBert Model with two heads on top as done during the pretraining: a "),Kl=a(Ji,"CODE",{});var Cy=i(Kl);$u=n(Cy,"masked language modeling"),Cy.forEach(t),Mu=n(Ji,` head and a
`),Hl=a(Ji,"CODE",{});var Ny=i(Hl);Fu=n(Ny,"next sentence prediction (classification)"),Ny.forEach(t),Bu=n(Ji," head."),Ji.forEach(t),Eu=m(Xt),hr=a(Xt,"P",{});var Cp=i(hr);xu=n(Cp,"This model inherits from "),fi=a(Cp,"A",{href:!0});var Oy=i(fi);zu=n(Oy,"PreTrainedModel"),Oy.forEach(t),qu=n(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(t),Pu=m(Xt),mr=a(Xt,"P",{});var Np=i(mr);ju=n(Np,"This model is also a PyTorch "),ur=a(Np,"A",{href:!0,rel:!0});var Dy=i(ur);Cu=n(Dy,"torch.nn.Module"),Dy.forEach(t),Nu=n(Np,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Np.forEach(t),Ou=m(Xt),qt=a(Xt,"DIV",{class:!0});var xs=i(qt);w(fr.$$.fragment,xs),Du=m(xs),$o=a(xs,"P",{});var Yi=i($o);Su=n(Yi,"The "),gi=a(Yi,"A",{href:!0});var Sy=i(gi);Au=n(Sy,"MobileBertForPreTraining"),Sy.forEach(t),Iu=n(Yi," forward method, overrides the "),Ql=a(Yi,"CODE",{});var Ay=i(Ql);Lu=n(Ay,"__call__"),Ay.forEach(t),Wu=n(Yi," special method."),Yi.forEach(t),Ru=m(xs),w(kn.$$.fragment,xs),Uu=m(xs),w(Tn.$$.fragment,xs),xs.forEach(t),Xt.forEach(t),Uc=m(s),Mo=a(s,"H2",{class:!0});var Op=i(Mo);yn=a(Op,"A",{id:!0,class:!0,href:!0});var Iy=i(yn);Vl=a(Iy,"SPAN",{});var Ly=i(Vl);w(gr.$$.fragment,Ly),Ly.forEach(t),Iy.forEach(t),Ku=m(Op),Gl=a(Op,"SPAN",{});var Wy=i(Gl);Hu=n(Wy,"MobileBertForMaskedLM"),Wy.forEach(t),Op.forEach(t),Kc=m(s),mt=a(s,"DIV",{class:!0});var Zt=i(mt);w(_r.$$.fragment,Zt),Qu=m(Zt),br=a(Zt,"P",{});var Dp=i(br);Vu=n(Dp,"MobileBert Model with a "),Jl=a(Dp,"CODE",{});var Ry=i(Jl);Gu=n(Ry,"language modeling"),Ry.forEach(t),Ju=n(Dp," head on top."),Dp.forEach(t),Yu=m(Zt),kr=a(Zt,"P",{});var Sp=i(kr);Xu=n(Sp,"This model inherits from "),_i=a(Sp,"A",{href:!0});var Uy=i(_i);Zu=n(Uy,"PreTrainedModel"),Uy.forEach(t),ef=n(Sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp.forEach(t),tf=m(Zt),Tr=a(Zt,"P",{});var Ap=i(Tr);of=n(Ap,"This model is also a PyTorch "),yr=a(Ap,"A",{href:!0,rel:!0});var Ky=i(yr);nf=n(Ky,"torch.nn.Module"),Ky.forEach(t),sf=n(Ap,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ap.forEach(t),rf=m(Zt),kt=a(Zt,"DIV",{class:!0});var eo=i(kt);w(wr.$$.fragment,eo),af=m(eo),Fo=a(eo,"P",{});var Xi=i(Fo);lf=n(Xi,"The "),bi=a(Xi,"A",{href:!0});var Hy=i(bi);df=n(Hy,"MobileBertForMaskedLM"),Hy.forEach(t),cf=n(Xi," forward method, overrides the "),Yl=a(Xi,"CODE",{});var Qy=i(Yl);pf=n(Qy,"__call__"),Qy.forEach(t),hf=n(Xi," special method."),Xi.forEach(t),mf=m(eo),w(wn.$$.fragment,eo),uf=m(eo),w(vn.$$.fragment,eo),ff=m(eo),w($n.$$.fragment,eo),eo.forEach(t),Zt.forEach(t),Hc=m(s),Bo=a(s,"H2",{class:!0});var Ip=i(Bo);Mn=a(Ip,"A",{id:!0,class:!0,href:!0});var Vy=i(Mn);Xl=a(Vy,"SPAN",{});var Gy=i(Xl);w(vr.$$.fragment,Gy),Gy.forEach(t),Vy.forEach(t),gf=m(Ip),Zl=a(Ip,"SPAN",{});var Jy=i(Zl);_f=n(Jy,"MobileBertForNextSentencePrediction"),Jy.forEach(t),Ip.forEach(t),Qc=m(s),ut=a(s,"DIV",{class:!0});var to=i(ut);w($r.$$.fragment,to),bf=m(to),Mr=a(to,"P",{});var Lp=i(Mr);kf=n(Lp,"MobileBert Model with a "),ed=a(Lp,"CODE",{});var Yy=i(ed);Tf=n(Yy,"next sentence prediction (classification)"),Yy.forEach(t),yf=n(Lp," head on top."),Lp.forEach(t),wf=m(to),Fr=a(to,"P",{});var Wp=i(Fr);vf=n(Wp,"This model inherits from "),ki=a(Wp,"A",{href:!0});var Xy=i(ki);$f=n(Xy,"PreTrainedModel"),Xy.forEach(t),Mf=n(Wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp.forEach(t),Ff=m(to),Br=a(to,"P",{});var Rp=i(Br);Bf=n(Rp,"This model is also a PyTorch "),Er=a(Rp,"A",{href:!0,rel:!0});var Zy=i(Er);Ef=n(Zy,"torch.nn.Module"),Zy.forEach(t),xf=n(Rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rp.forEach(t),zf=m(to),Pt=a(to,"DIV",{class:!0});var zs=i(Pt);w(xr.$$.fragment,zs),qf=m(zs),Eo=a(zs,"P",{});var Zi=i(Eo);Pf=n(Zi,"The "),Ti=a(Zi,"A",{href:!0});var ew=i(Ti);jf=n(ew,"MobileBertForNextSentencePrediction"),ew.forEach(t),Cf=n(Zi," forward method, overrides the "),td=a(Zi,"CODE",{});var tw=i(td);Nf=n(tw,"__call__"),tw.forEach(t),Of=n(Zi," special method."),Zi.forEach(t),Df=m(zs),w(Fn.$$.fragment,zs),Sf=m(zs),w(Bn.$$.fragment,zs),zs.forEach(t),to.forEach(t),Vc=m(s),xo=a(s,"H2",{class:!0});var Up=i(xo);En=a(Up,"A",{id:!0,class:!0,href:!0});var ow=i(En);od=a(ow,"SPAN",{});var nw=i(od);w(zr.$$.fragment,nw),nw.forEach(t),ow.forEach(t),Af=m(Up),nd=a(Up,"SPAN",{});var sw=i(nd);If=n(sw,"MobileBertForSequenceClassification"),sw.forEach(t),Up.forEach(t),Gc=m(s),ft=a(s,"DIV",{class:!0});var oo=i(ft);w(qr.$$.fragment,oo),Lf=m(oo),sd=a(oo,"P",{});var rw=i(sd);Wf=n(rw,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rw.forEach(t),Rf=m(oo),Pr=a(oo,"P",{});var Kp=i(Pr);Uf=n(Kp,"This model inherits from "),yi=a(Kp,"A",{href:!0});var aw=i(yi);Kf=n(aw,"PreTrainedModel"),aw.forEach(t),Hf=n(Kp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kp.forEach(t),Qf=m(oo),jr=a(oo,"P",{});var Hp=i(jr);Vf=n(Hp,"This model is also a PyTorch "),Cr=a(Hp,"A",{href:!0,rel:!0});var iw=i(Cr);Gf=n(iw,"torch.nn.Module"),iw.forEach(t),Jf=n(Hp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hp.forEach(t),Yf=m(oo),et=a(oo,"DIV",{class:!0});var Ft=i(et);w(Nr.$$.fragment,Ft),Xf=m(Ft),zo=a(Ft,"P",{});var el=i(zo);Zf=n(el,"The "),wi=a(el,"A",{href:!0});var lw=i(wi);eg=n(lw,"MobileBertForSequenceClassification"),lw.forEach(t),tg=n(el," forward method, overrides the "),rd=a(el,"CODE",{});var dw=i(rd);og=n(dw,"__call__"),dw.forEach(t),ng=n(el," special method."),el.forEach(t),sg=m(Ft),w(xn.$$.fragment,Ft),rg=m(Ft),w(zn.$$.fragment,Ft),ag=m(Ft),w(qn.$$.fragment,Ft),ig=m(Ft),w(Pn.$$.fragment,Ft),lg=m(Ft),w(jn.$$.fragment,Ft),Ft.forEach(t),oo.forEach(t),Jc=m(s),qo=a(s,"H2",{class:!0});var Qp=i(qo);Cn=a(Qp,"A",{id:!0,class:!0,href:!0});var cw=i(Cn);ad=a(cw,"SPAN",{});var pw=i(ad);w(Or.$$.fragment,pw),pw.forEach(t),cw.forEach(t),dg=m(Qp),id=a(Qp,"SPAN",{});var hw=i(id);cg=n(hw,"MobileBertForMultipleChoice"),hw.forEach(t),Qp.forEach(t),Yc=m(s),gt=a(s,"DIV",{class:!0});var no=i(gt);w(Dr.$$.fragment,no),pg=m(no),ld=a(no,"P",{});var mw=i(ld);hg=n(mw,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mw.forEach(t),mg=m(no),Sr=a(no,"P",{});var Vp=i(Sr);ug=n(Vp,"This model inherits from "),vi=a(Vp,"A",{href:!0});var uw=i(vi);fg=n(uw,"PreTrainedModel"),uw.forEach(t),gg=n(Vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp.forEach(t),_g=m(no),Ar=a(no,"P",{});var Gp=i(Ar);bg=n(Gp,"This model is also a PyTorch "),Ir=a(Gp,"A",{href:!0,rel:!0});var fw=i(Ir);kg=n(fw,"torch.nn.Module"),fw.forEach(t),Tg=n(Gp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gp.forEach(t),yg=m(no),jt=a(no,"DIV",{class:!0});var qs=i(jt);w(Lr.$$.fragment,qs),wg=m(qs),Po=a(qs,"P",{});var tl=i(Po);vg=n(tl,"The "),$i=a(tl,"A",{href:!0});var gw=i($i);$g=n(gw,"MobileBertForMultipleChoice"),gw.forEach(t),Mg=n(tl," forward method, overrides the "),dd=a(tl,"CODE",{});var _w=i(dd);Fg=n(_w,"__call__"),_w.forEach(t),Bg=n(tl," special method."),tl.forEach(t),Eg=m(qs),w(Nn.$$.fragment,qs),xg=m(qs),w(On.$$.fragment,qs),qs.forEach(t),no.forEach(t),Xc=m(s),jo=a(s,"H2",{class:!0});var Jp=i(jo);Dn=a(Jp,"A",{id:!0,class:!0,href:!0});var bw=i(Dn);cd=a(bw,"SPAN",{});var kw=i(cd);w(Wr.$$.fragment,kw),kw.forEach(t),bw.forEach(t),zg=m(Jp),pd=a(Jp,"SPAN",{});var Tw=i(pd);qg=n(Tw,"MobileBertForTokenClassification"),Tw.forEach(t),Jp.forEach(t),Zc=m(s),_t=a(s,"DIV",{class:!0});var so=i(_t);w(Rr.$$.fragment,so),Pg=m(so),hd=a(so,"P",{});var yw=i(hd);jg=n(yw,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),yw.forEach(t),Cg=m(so),Ur=a(so,"P",{});var Yp=i(Ur);Ng=n(Yp,"This model inherits from "),Mi=a(Yp,"A",{href:!0});var ww=i(Mi);Og=n(ww,"PreTrainedModel"),ww.forEach(t),Dg=n(Yp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yp.forEach(t),Sg=m(so),Kr=a(so,"P",{});var Xp=i(Kr);Ag=n(Xp,"This model is also a PyTorch "),Hr=a(Xp,"A",{href:!0,rel:!0});var vw=i(Hr);Ig=n(vw,"torch.nn.Module"),vw.forEach(t),Lg=n(Xp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Xp.forEach(t),Wg=m(so),Tt=a(so,"DIV",{class:!0});var ro=i(Tt);w(Qr.$$.fragment,ro),Rg=m(ro),Co=a(ro,"P",{});var ol=i(Co);Ug=n(ol,"The "),Fi=a(ol,"A",{href:!0});var $w=i(Fi);Kg=n($w,"MobileBertForTokenClassification"),$w.forEach(t),Hg=n(ol," forward method, overrides the "),md=a(ol,"CODE",{});var Mw=i(md);Qg=n(Mw,"__call__"),Mw.forEach(t),Vg=n(ol," special method."),ol.forEach(t),Gg=m(ro),w(Sn.$$.fragment,ro),Jg=m(ro),w(An.$$.fragment,ro),Yg=m(ro),w(In.$$.fragment,ro),ro.forEach(t),so.forEach(t),ep=m(s),No=a(s,"H2",{class:!0});var Zp=i(No);Ln=a(Zp,"A",{id:!0,class:!0,href:!0});var Fw=i(Ln);ud=a(Fw,"SPAN",{});var Bw=i(ud);w(Vr.$$.fragment,Bw),Bw.forEach(t),Fw.forEach(t),Xg=m(Zp),fd=a(Zp,"SPAN",{});var Ew=i(fd);Zg=n(Ew,"MobileBertForQuestionAnswering"),Ew.forEach(t),Zp.forEach(t),tp=m(s),bt=a(s,"DIV",{class:!0});var ao=i(bt);w(Gr.$$.fragment,ao),e_=m(ao),Oo=a(ao,"P",{});var nl=i(Oo);t_=n(nl,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),gd=a(nl,"CODE",{});var xw=i(gd);o_=n(xw,"span start logits"),xw.forEach(t),n_=n(nl," and "),_d=a(nl,"CODE",{});var zw=i(_d);s_=n(zw,"span end logits"),zw.forEach(t),r_=n(nl,")."),nl.forEach(t),a_=m(ao),Jr=a(ao,"P",{});var eh=i(Jr);i_=n(eh,"This model inherits from "),Bi=a(eh,"A",{href:!0});var qw=i(Bi);l_=n(qw,"PreTrainedModel"),qw.forEach(t),d_=n(eh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),eh.forEach(t),c_=m(ao),Yr=a(ao,"P",{});var th=i(Yr);p_=n(th,"This model is also a PyTorch "),Xr=a(th,"A",{href:!0,rel:!0});var Pw=i(Xr);h_=n(Pw,"torch.nn.Module"),Pw.forEach(t),m_=n(th,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),th.forEach(t),u_=m(ao),yt=a(ao,"DIV",{class:!0});var io=i(yt);w(Zr.$$.fragment,io),f_=m(io),Do=a(io,"P",{});var sl=i(Do);g_=n(sl,"The "),Ei=a(sl,"A",{href:!0});var jw=i(Ei);__=n(jw,"MobileBertForQuestionAnswering"),jw.forEach(t),b_=n(sl," forward method, overrides the "),bd=a(sl,"CODE",{});var Cw=i(bd);k_=n(Cw,"__call__"),Cw.forEach(t),T_=n(sl," special method."),sl.forEach(t),y_=m(io),w(Wn.$$.fragment,io),w_=m(io),w(Rn.$$.fragment,io),v_=m(io),w(Un.$$.fragment,io),io.forEach(t),ao.forEach(t),op=m(s),So=a(s,"H2",{class:!0});var oh=i(So);Kn=a(oh,"A",{id:!0,class:!0,href:!0});var Nw=i(Kn);kd=a(Nw,"SPAN",{});var Ow=i(kd);w(ea.$$.fragment,Ow),Ow.forEach(t),Nw.forEach(t),$_=m(oh),Td=a(oh,"SPAN",{});var Dw=i(Td);M_=n(Dw,"TFMobileBertModel"),Dw.forEach(t),oh.forEach(t),np=m(s),ot=a(s,"DIV",{class:!0});var At=i(ot);w(ta.$$.fragment,At),F_=m(At),yd=a(At,"P",{});var Sw=i(yd);B_=n(Sw,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Sw.forEach(t),E_=m(At),oa=a(At,"P",{});var nh=i(oa);x_=n(nh,"This model inherits from "),xi=a(nh,"A",{href:!0});var Aw=i(xi);z_=n(Aw,"TFPreTrainedModel"),Aw.forEach(t),q_=n(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(t),P_=m(At),na=a(At,"P",{});var sh=i(na);j_=n(sh,"This model is also a "),sa=a(sh,"A",{href:!0,rel:!0});var Iw=i(sa);C_=n(Iw,"tf.keras.Model"),Iw.forEach(t),N_=n(sh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sh.forEach(t),O_=m(At),w(Hn.$$.fragment,At),D_=m(At),Ct=a(At,"DIV",{class:!0});var Ps=i(Ct);w(ra.$$.fragment,Ps),S_=m(Ps),Ao=a(Ps,"P",{});var rl=i(Ao);A_=n(rl,"The "),zi=a(rl,"A",{href:!0});var Lw=i(zi);I_=n(Lw,"TFMobileBertModel"),Lw.forEach(t),L_=n(rl," forward method, overrides the "),wd=a(rl,"CODE",{});var Ww=i(wd);W_=n(Ww,"__call__"),Ww.forEach(t),R_=n(rl," special method."),rl.forEach(t),U_=m(Ps),w(Qn.$$.fragment,Ps),K_=m(Ps),w(Vn.$$.fragment,Ps),Ps.forEach(t),At.forEach(t),sp=m(s),Io=a(s,"H2",{class:!0});var rh=i(Io);Gn=a(rh,"A",{id:!0,class:!0,href:!0});var Rw=i(Gn);vd=a(Rw,"SPAN",{});var Uw=i(vd);w(aa.$$.fragment,Uw),Uw.forEach(t),Rw.forEach(t),H_=m(rh),$d=a(rh,"SPAN",{});var Kw=i($d);Q_=n(Kw,"TFMobileBertForPreTraining"),Kw.forEach(t),rh.forEach(t),rp=m(s),nt=a(s,"DIV",{class:!0});var It=i(nt);w(ia.$$.fragment,It),V_=m(It),Lo=a(It,"P",{});var al=i(Lo);G_=n(al,"MobileBert Model with two heads on top as done during the pretraining: a "),Md=a(al,"CODE",{});var Hw=i(Md);J_=n(Hw,"masked language modeling"),Hw.forEach(t),Y_=n(al,` head and a
`),Fd=a(al,"CODE",{});var Qw=i(Fd);X_=n(Qw,"next sentence prediction (classification)"),Qw.forEach(t),Z_=n(al," head."),al.forEach(t),eb=m(It),la=a(It,"P",{});var ah=i(la);tb=n(ah,"This model inherits from "),qi=a(ah,"A",{href:!0});var Vw=i(qi);ob=n(Vw,"TFPreTrainedModel"),Vw.forEach(t),nb=n(ah,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ah.forEach(t),sb=m(It),da=a(It,"P",{});var ih=i(da);rb=n(ih,"This model is also a "),ca=a(ih,"A",{href:!0,rel:!0});var Gw=i(ca);ab=n(Gw,"tf.keras.Model"),Gw.forEach(t),ib=n(ih,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ih.forEach(t),lb=m(It),w(Jn.$$.fragment,It),db=m(It),Nt=a(It,"DIV",{class:!0});var js=i(Nt);w(pa.$$.fragment,js),cb=m(js),Wo=a(js,"P",{});var il=i(Wo);pb=n(il,"The "),Pi=a(il,"A",{href:!0});var Jw=i(Pi);hb=n(Jw,"TFMobileBertForPreTraining"),Jw.forEach(t),mb=n(il," forward method, overrides the "),Bd=a(il,"CODE",{});var Yw=i(Bd);ub=n(Yw,"__call__"),Yw.forEach(t),fb=n(il," special method."),il.forEach(t),gb=m(js),w(Yn.$$.fragment,js),_b=m(js),w(Xn.$$.fragment,js),js.forEach(t),It.forEach(t),ap=m(s),Ro=a(s,"H2",{class:!0});var lh=i(Ro);Zn=a(lh,"A",{id:!0,class:!0,href:!0});var Xw=i(Zn);Ed=a(Xw,"SPAN",{});var Zw=i(Ed);w(ha.$$.fragment,Zw),Zw.forEach(t),Xw.forEach(t),bb=m(lh),xd=a(lh,"SPAN",{});var ev=i(xd);kb=n(ev,"TFMobileBertForMaskedLM"),ev.forEach(t),lh.forEach(t),ip=m(s),st=a(s,"DIV",{class:!0});var Lt=i(st);w(ma.$$.fragment,Lt),Tb=m(Lt),ua=a(Lt,"P",{});var dh=i(ua);yb=n(dh,"MobileBert Model with a "),zd=a(dh,"CODE",{});var tv=i(zd);wb=n(tv,"language modeling"),tv.forEach(t),vb=n(dh," head on top."),dh.forEach(t),$b=m(Lt),fa=a(Lt,"P",{});var ch=i(fa);Mb=n(ch,"This model inherits from "),ji=a(ch,"A",{href:!0});var ov=i(ji);Fb=n(ov,"TFPreTrainedModel"),ov.forEach(t),Bb=n(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Eb=m(Lt),ga=a(Lt,"P",{});var ph=i(ga);xb=n(ph,"This model is also a "),_a=a(ph,"A",{href:!0,rel:!0});var nv=i(_a);zb=n(nv,"tf.keras.Model"),nv.forEach(t),qb=n(ph,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ph.forEach(t),Pb=m(Lt),w(es.$$.fragment,Lt),jb=m(Lt),wt=a(Lt,"DIV",{class:!0});var lo=i(wt);w(ba.$$.fragment,lo),Cb=m(lo),Uo=a(lo,"P",{});var ll=i(Uo);Nb=n(ll,"The "),Ci=a(ll,"A",{href:!0});var sv=i(Ci);Ob=n(sv,"TFMobileBertForMaskedLM"),sv.forEach(t),Db=n(ll," forward method, overrides the "),qd=a(ll,"CODE",{});var rv=i(qd);Sb=n(rv,"__call__"),rv.forEach(t),Ab=n(ll," special method."),ll.forEach(t),Ib=m(lo),w(ts.$$.fragment,lo),Lb=m(lo),w(os.$$.fragment,lo),Wb=m(lo),w(ns.$$.fragment,lo),lo.forEach(t),Lt.forEach(t),lp=m(s),Ko=a(s,"H2",{class:!0});var hh=i(Ko);ss=a(hh,"A",{id:!0,class:!0,href:!0});var av=i(ss);Pd=a(av,"SPAN",{});var iv=i(Pd);w(ka.$$.fragment,iv),iv.forEach(t),av.forEach(t),Rb=m(hh),jd=a(hh,"SPAN",{});var lv=i(jd);Ub=n(lv,"TFMobileBertForNextSentencePrediction"),lv.forEach(t),hh.forEach(t),dp=m(s),rt=a(s,"DIV",{class:!0});var Wt=i(rt);w(Ta.$$.fragment,Wt),Kb=m(Wt),ya=a(Wt,"P",{});var mh=i(ya);Hb=n(mh,"MobileBert Model with a "),Cd=a(mh,"CODE",{});var dv=i(Cd);Qb=n(dv,"next sentence prediction (classification)"),dv.forEach(t),Vb=n(mh," head on top."),mh.forEach(t),Gb=m(Wt),wa=a(Wt,"P",{});var uh=i(wa);Jb=n(uh,"This model inherits from "),Ni=a(uh,"A",{href:!0});var cv=i(Ni);Yb=n(cv,"TFPreTrainedModel"),cv.forEach(t),Xb=n(uh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uh.forEach(t),Zb=m(Wt),va=a(Wt,"P",{});var fh=i(va);ek=n(fh,"This model is also a "),$a=a(fh,"A",{href:!0,rel:!0});var pv=i($a);tk=n(pv,"tf.keras.Model"),pv.forEach(t),ok=n(fh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh.forEach(t),nk=m(Wt),w(rs.$$.fragment,Wt),sk=m(Wt),Ot=a(Wt,"DIV",{class:!0});var Cs=i(Ot);w(Ma.$$.fragment,Cs),rk=m(Cs),Ho=a(Cs,"P",{});var dl=i(Ho);ak=n(dl,"The "),Oi=a(dl,"A",{href:!0});var hv=i(Oi);ik=n(hv,"TFMobileBertForNextSentencePrediction"),hv.forEach(t),lk=n(dl," forward method, overrides the "),Nd=a(dl,"CODE",{});var mv=i(Nd);dk=n(mv,"__call__"),mv.forEach(t),ck=n(dl," special method."),dl.forEach(t),pk=m(Cs),w(as.$$.fragment,Cs),hk=m(Cs),w(is.$$.fragment,Cs),Cs.forEach(t),Wt.forEach(t),cp=m(s),Qo=a(s,"H2",{class:!0});var gh=i(Qo);ls=a(gh,"A",{id:!0,class:!0,href:!0});var uv=i(ls);Od=a(uv,"SPAN",{});var fv=i(Od);w(Fa.$$.fragment,fv),fv.forEach(t),uv.forEach(t),mk=m(gh),Dd=a(gh,"SPAN",{});var gv=i(Dd);uk=n(gv,"TFMobileBertForSequenceClassification"),gv.forEach(t),gh.forEach(t),pp=m(s),at=a(s,"DIV",{class:!0});var Rt=i(at);w(Ba.$$.fragment,Rt),fk=m(Rt),Sd=a(Rt,"P",{});var _v=i(Sd);gk=n(_v,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),_v.forEach(t),_k=m(Rt),Ea=a(Rt,"P",{});var _h=i(Ea);bk=n(_h,"This model inherits from "),Di=a(_h,"A",{href:!0});var bv=i(Di);kk=n(bv,"TFPreTrainedModel"),bv.forEach(t),Tk=n(_h,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h.forEach(t),yk=m(Rt),xa=a(Rt,"P",{});var bh=i(xa);wk=n(bh,"This model is also a "),za=a(bh,"A",{href:!0,rel:!0});var kv=i(za);vk=n(kv,"tf.keras.Model"),kv.forEach(t),$k=n(bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh.forEach(t),Mk=m(Rt),w(ds.$$.fragment,Rt),Fk=m(Rt),vt=a(Rt,"DIV",{class:!0});var co=i(vt);w(qa.$$.fragment,co),Bk=m(co),Vo=a(co,"P",{});var cl=i(Vo);Ek=n(cl,"The "),Si=a(cl,"A",{href:!0});var Tv=i(Si);xk=n(Tv,"TFMobileBertForSequenceClassification"),Tv.forEach(t),zk=n(cl," forward method, overrides the "),Ad=a(cl,"CODE",{});var yv=i(Ad);qk=n(yv,"__call__"),yv.forEach(t),Pk=n(cl," special method."),cl.forEach(t),jk=m(co),w(cs.$$.fragment,co),Ck=m(co),w(ps.$$.fragment,co),Nk=m(co),w(hs.$$.fragment,co),co.forEach(t),Rt.forEach(t),hp=m(s),Go=a(s,"H2",{class:!0});var kh=i(Go);ms=a(kh,"A",{id:!0,class:!0,href:!0});var wv=i(ms);Id=a(wv,"SPAN",{});var vv=i(Id);w(Pa.$$.fragment,vv),vv.forEach(t),wv.forEach(t),Ok=m(kh),Ld=a(kh,"SPAN",{});var $v=i(Ld);Dk=n($v,"TFMobileBertForMultipleChoice"),$v.forEach(t),kh.forEach(t),mp=m(s),it=a(s,"DIV",{class:!0});var Ut=i(it);w(ja.$$.fragment,Ut),Sk=m(Ut),Wd=a(Ut,"P",{});var Mv=i(Wd);Ak=n(Mv,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Mv.forEach(t),Ik=m(Ut),Ca=a(Ut,"P",{});var Th=i(Ca);Lk=n(Th,"This model inherits from "),Ai=a(Th,"A",{href:!0});var Fv=i(Ai);Wk=n(Fv,"TFPreTrainedModel"),Fv.forEach(t),Rk=n(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),Uk=m(Ut),Na=a(Ut,"P",{});var yh=i(Na);Kk=n(yh,"This model is also a "),Oa=a(yh,"A",{href:!0,rel:!0});var Bv=i(Oa);Hk=n(Bv,"tf.keras.Model"),Bv.forEach(t),Qk=n(yh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yh.forEach(t),Vk=m(Ut),w(us.$$.fragment,Ut),Gk=m(Ut),Dt=a(Ut,"DIV",{class:!0});var Ns=i(Dt);w(Da.$$.fragment,Ns),Jk=m(Ns),Jo=a(Ns,"P",{});var pl=i(Jo);Yk=n(pl,"The "),Ii=a(pl,"A",{href:!0});var Ev=i(Ii);Xk=n(Ev,"TFMobileBertForMultipleChoice"),Ev.forEach(t),Zk=n(pl," forward method, overrides the "),Rd=a(pl,"CODE",{});var xv=i(Rd);eT=n(xv,"__call__"),xv.forEach(t),tT=n(pl," special method."),pl.forEach(t),oT=m(Ns),w(fs.$$.fragment,Ns),nT=m(Ns),w(gs.$$.fragment,Ns),Ns.forEach(t),Ut.forEach(t),up=m(s),Yo=a(s,"H2",{class:!0});var wh=i(Yo);_s=a(wh,"A",{id:!0,class:!0,href:!0});var zv=i(_s);Ud=a(zv,"SPAN",{});var qv=i(Ud);w(Sa.$$.fragment,qv),qv.forEach(t),zv.forEach(t),sT=m(wh),Kd=a(wh,"SPAN",{});var Pv=i(Kd);rT=n(Pv,"TFMobileBertForTokenClassification"),Pv.forEach(t),wh.forEach(t),fp=m(s),lt=a(s,"DIV",{class:!0});var Kt=i(lt);w(Aa.$$.fragment,Kt),aT=m(Kt),Hd=a(Kt,"P",{});var jv=i(Hd);iT=n(jv,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),jv.forEach(t),lT=m(Kt),Ia=a(Kt,"P",{});var vh=i(Ia);dT=n(vh,"This model inherits from "),Li=a(vh,"A",{href:!0});var Cv=i(Li);cT=n(Cv,"TFPreTrainedModel"),Cv.forEach(t),pT=n(vh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh.forEach(t),hT=m(Kt),La=a(Kt,"P",{});var $h=i(La);mT=n($h,"This model is also a "),Wa=a($h,"A",{href:!0,rel:!0});var Nv=i(Wa);uT=n(Nv,"tf.keras.Model"),Nv.forEach(t),fT=n($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(t),gT=m(Kt),w(bs.$$.fragment,Kt),_T=m(Kt),$t=a(Kt,"DIV",{class:!0});var po=i($t);w(Ra.$$.fragment,po),bT=m(po),Xo=a(po,"P",{});var hl=i(Xo);kT=n(hl,"The "),Wi=a(hl,"A",{href:!0});var Ov=i(Wi);TT=n(Ov,"TFMobileBertForTokenClassification"),Ov.forEach(t),yT=n(hl," forward method, overrides the "),Qd=a(hl,"CODE",{});var Dv=i(Qd);wT=n(Dv,"__call__"),Dv.forEach(t),vT=n(hl," special method."),hl.forEach(t),$T=m(po),w(ks.$$.fragment,po),MT=m(po),w(Ts.$$.fragment,po),FT=m(po),w(ys.$$.fragment,po),po.forEach(t),Kt.forEach(t),gp=m(s),Zo=a(s,"H2",{class:!0});var Mh=i(Zo);ws=a(Mh,"A",{id:!0,class:!0,href:!0});var Sv=i(ws);Vd=a(Sv,"SPAN",{});var Av=i(Vd);w(Ua.$$.fragment,Av),Av.forEach(t),Sv.forEach(t),BT=m(Mh),Gd=a(Mh,"SPAN",{});var Iv=i(Gd);ET=n(Iv,"TFMobileBertForQuestionAnswering"),Iv.forEach(t),Mh.forEach(t),_p=m(s),dt=a(s,"DIV",{class:!0});var Ht=i(dt);w(Ka.$$.fragment,Ht),xT=m(Ht),en=a(Ht,"P",{});var ml=i(en);zT=n(ml,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Jd=a(ml,"CODE",{});var Lv=i(Jd);qT=n(Lv,"span start logits"),Lv.forEach(t),PT=n(ml," and "),Yd=a(ml,"CODE",{});var Wv=i(Yd);jT=n(Wv,"span end logits"),Wv.forEach(t),CT=n(ml,")."),ml.forEach(t),NT=m(Ht),Ha=a(Ht,"P",{});var Fh=i(Ha);OT=n(Fh,"This model inherits from "),Ri=a(Fh,"A",{href:!0});var Rv=i(Ri);DT=n(Rv,"TFPreTrainedModel"),Rv.forEach(t),ST=n(Fh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fh.forEach(t),AT=m(Ht),Qa=a(Ht,"P",{});var Bh=i(Qa);IT=n(Bh,"This model is also a "),Va=a(Bh,"A",{href:!0,rel:!0});var Uv=i(Va);LT=n(Uv,"tf.keras.Model"),Uv.forEach(t),WT=n(Bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bh.forEach(t),RT=m(Ht),w(vs.$$.fragment,Ht),UT=m(Ht),Mt=a(Ht,"DIV",{class:!0});var ho=i(Mt);w(Ga.$$.fragment,ho),KT=m(ho),tn=a(ho,"P",{});var ul=i(tn);HT=n(ul,"The "),Ui=a(ul,"A",{href:!0});var Kv=i(Ui);QT=n(Kv,"TFMobileBertForQuestionAnswering"),Kv.forEach(t),VT=n(ul," forward method, overrides the "),Xd=a(ul,"CODE",{});var Hv=i(Xd);GT=n(Hv,"__call__"),Hv.forEach(t),JT=n(ul," special method."),ul.forEach(t),YT=m(ho),w($s.$$.fragment,ho),XT=m(ho),w(Ms.$$.fragment,ho),ZT=m(ho),w(Fs.$$.fragment,ho),ho.forEach(t),Ht.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(X$)),g(u,"id","mobilebert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#mobilebert"),g(c,"class","relative group"),g(re,"id","overview"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#overview"),g(A,"class","relative group"),g(ie,"href","https://arxiv.org/abs/2004.02984"),g(ie,"rel","nofollow"),g(le,"href","https://huggingface.co/vshampor"),g(le,"rel","nofollow"),g(de,"href","https://github.com/google-research/mobilebert"),g(de,"rel","nofollow"),g(ae,"id","transformers.MobileBertConfig"),g(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ae,"href","#transformers.MobileBertConfig"),g(I,"class","relative group"),g(Oe,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),g(De,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Ne,"href","https://huggingface.co/google/mobilebert-uncased"),g(Ne,"rel","nofollow"),g(Se,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(Ae,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.MobileBertTokenizer"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.MobileBertTokenizer"),g(mo,"class","relative group"),g(ri,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(hn,"id","transformers.MobileBertTokenizerFast"),g(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(hn,"href","#transformers.MobileBertTokenizerFast"),g(fo,"class","relative group"),g(li,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(_o,"class","relative group"),g(pi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(hi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fn,"id","transformers.MobileBertModel"),g(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fn,"href","#transformers.MobileBertModel"),g(To,"class","relative group"),g(mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ir,"rel","nofollow"),g(lr,"href","https://arxiv.org/pdf/2004.02984.pdf"),g(lr,"rel","nofollow"),g(ui,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertModel"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bn,"id","transformers.MobileBertForPreTraining"),g(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(bn,"href","#transformers.MobileBertForPreTraining"),g(wo,"class","relative group"),g(fi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ur,"rel","nofollow"),g(gi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yn,"id","transformers.MobileBertForMaskedLM"),g(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(yn,"href","#transformers.MobileBertForMaskedLM"),g(Mo,"class","relative group"),g(_i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(yr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(yr,"rel","nofollow"),g(bi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mn,"id","transformers.MobileBertForNextSentencePrediction"),g(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Mn,"href","#transformers.MobileBertForNextSentencePrediction"),g(Bo,"class","relative group"),g(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Er,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Er,"rel","nofollow"),g(Ti,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(En,"id","transformers.MobileBertForSequenceClassification"),g(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(En,"href","#transformers.MobileBertForSequenceClassification"),g(xo,"class","relative group"),g(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Cr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Cr,"rel","nofollow"),g(wi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Cn,"id","transformers.MobileBertForMultipleChoice"),g(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Cn,"href","#transformers.MobileBertForMultipleChoice"),g(qo,"class","relative group"),g(vi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ir,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ir,"rel","nofollow"),g($i,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dn,"id","transformers.MobileBertForTokenClassification"),g(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Dn,"href","#transformers.MobileBertForTokenClassification"),g(jo,"class","relative group"),g(Mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Hr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Hr,"rel","nofollow"),g(Fi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ln,"id","transformers.MobileBertForQuestionAnswering"),g(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Ln,"href","#transformers.MobileBertForQuestionAnswering"),g(No,"class","relative group"),g(Bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Xr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Xr,"rel","nofollow"),g(Ei,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Kn,"id","transformers.TFMobileBertModel"),g(Kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Kn,"href","#transformers.TFMobileBertModel"),g(So,"class","relative group"),g(xi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(sa,"rel","nofollow"),g(zi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Gn,"id","transformers.TFMobileBertForPreTraining"),g(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Gn,"href","#transformers.TFMobileBertForPreTraining"),g(Io,"class","relative group"),g(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ca,"rel","nofollow"),g(Pi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Zn,"id","transformers.TFMobileBertForMaskedLM"),g(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Zn,"href","#transformers.TFMobileBertForMaskedLM"),g(Ro,"class","relative group"),g(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(_a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(_a,"rel","nofollow"),g(Ci,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ss,"id","transformers.TFMobileBertForNextSentencePrediction"),g(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ss,"href","#transformers.TFMobileBertForNextSentencePrediction"),g(Ko,"class","relative group"),g(Ni,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g($a,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g($a,"rel","nofollow"),g(Oi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),g(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ls,"id","transformers.TFMobileBertForSequenceClassification"),g(ls,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ls,"href","#transformers.TFMobileBertForSequenceClassification"),g(Qo,"class","relative group"),g(Di,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(za,"rel","nofollow"),g(Si,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ms,"id","transformers.TFMobileBertForMultipleChoice"),g(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ms,"href","#transformers.TFMobileBertForMultipleChoice"),g(Go,"class","relative group"),g(Ai,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Oa,"rel","nofollow"),g(Ii,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_s,"id","transformers.TFMobileBertForTokenClassification"),g(_s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_s,"href","#transformers.TFMobileBertForTokenClassification"),g(Yo,"class","relative group"),g(Li,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Wa,"rel","nofollow"),g(Wi,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ws,"id","transformers.TFMobileBertForQuestionAnswering"),g(ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ws,"href","#transformers.TFMobileBertForQuestionAnswering"),g(Zo,"class","relative group"),g(Ri,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Va,"rel","nofollow"),g(Ui,"href","/docs/transformers/main/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),_(s,b,k),_(s,c,k),e(c,u),e(u,T),v(l,T,null),e(c,p),e(c,q),e(q,Te),_(s,me,k),_(s,A,k),e(A,re),e(re,Z),v(B,Z,null),e(A,ye),e(A,K),e(K,we),_(s,ue,k),_(s,L,k),e(L,ve),e(L,ie),e(ie,H),e(L,$e),_(s,fe,k),_(s,R,k),e(R,Me),_(s,ge,k),_(s,U,k),e(U,ce),e(ce,Fe),_(s,te,k),_(s,P,k),e(P,N),_(s,_e,k),_(s,W,k),e(W,pe),e(pe,Be),e(W,Q),e(W,he),e(he,Ee),_(s,C,k),_(s,se,k),e(se,V),e(se,le),e(le,xe),e(se,G),e(se,de),e(de,ze),e(se,D),_(s,be,k),_(s,I,k),e(I,ae),e(ae,ee),v(j,ee,null),e(I,qe),e(I,O),e(O,Pe),_(s,ke,k),_(s,f,k),v(E,f,null),e(f,Re),e(f,J),e(J,Ue),e(J,Oe),e(Oe,z),e(J,Ke),e(J,De),e(De,He),e(J,Qe),e(J,Ne),e(Ne,S),e(J,Y),e(f,Ve),e(f,Ce),e(Ce,X),e(Ce,Se),e(Se,Ge),e(Ce,je),e(Ce,Ae),e(Ae,oe),e(Ce,Je),e(f,Eh),v(an,f,null),e(f,xh),e(f,fl),e(fl,zh),_(s,jc,k),_(s,mo,k),e(mo,ln),e(ln,gl),v(Os,gl,null),e(mo,qh),e(mo,_l),e(_l,Ph),_(s,Cc,k),_(s,Ze,k),v(Ds,Ze,null),e(Ze,jh),e(Ze,bl),e(bl,Ch),e(Ze,Nh),e(Ze,Ss),e(Ss,Oh),e(Ss,ri),e(ri,Dh),e(Ss,Sh),e(Ze,Ah),e(Ze,Gt),v(As,Gt,null),e(Gt,Ih),e(Gt,kl),e(kl,Lh),e(Gt,Wh),e(Gt,Is),e(Is,ai),e(ai,Rh),e(ai,Tl),e(Tl,Uh),e(Is,Kh),e(Is,ii),e(ii,Hh),e(ii,yl),e(yl,Qh),e(Ze,Vh),e(Ze,dn),v(Ls,dn,null),e(dn,Gh),e(dn,wl),e(wl,Jh),e(Ze,Yh),e(Ze,Et),v(Ws,Et,null),e(Et,Xh),e(Et,vl),e(vl,Zh),e(Et,em),v(cn,Et,null),e(Et,tm),e(Et,uo),e(uo,om),e(uo,$l),e($l,nm),e(uo,sm),e(uo,Ml),e(Ml,rm),e(uo,am),e(Ze,im),e(Ze,pn),v(Rs,pn,null),e(pn,lm),e(pn,Us),e(Us,dm),e(Us,Fl),e(Fl,cm),e(Us,pm),_(s,Nc,k),_(s,fo,k),e(fo,hn),e(hn,Bl),v(Ks,Bl,null),e(fo,hm),e(fo,El),e(El,mm),_(s,Oc,k),_(s,pt,k),v(Hs,pt,null),e(pt,um),e(pt,Qs),e(Qs,fm),e(Qs,xl),e(xl,gm),e(Qs,_m),e(pt,bm),e(pt,Vs),e(Vs,km),e(Vs,li),e(li,Tm),e(Vs,ym),e(pt,wm),e(pt,Jt),v(Gs,Jt,null),e(Jt,vm),e(Jt,zl),e(zl,$m),e(Jt,Mm),e(Jt,Js),e(Js,di),e(di,Fm),e(di,ql),e(ql,Bm),e(Js,Em),e(Js,ci),e(ci,xm),e(ci,Pl),e(Pl,zm),e(pt,qm),e(pt,xt),v(Ys,xt,null),e(xt,Pm),e(xt,jl),e(jl,jm),e(xt,Cm),v(mn,xt,null),e(xt,Nm),e(xt,go),e(go,Om),e(go,Cl),e(Cl,Dm),e(go,Sm),e(go,Nl),e(Nl,Am),e(go,Im),_(s,Dc,k),_(s,_o,k),e(_o,un),e(un,Ol),v(Xs,Ol,null),e(_o,Lm),e(_o,Dl),e(Dl,Wm),_(s,Sc,k),_(s,bo,k),v(Zs,bo,null),e(bo,Rm),e(bo,er),e(er,Um),e(er,pi),e(pi,Km),e(er,Hm),_(s,Ac,k),_(s,ko,k),v(tr,ko,null),e(ko,Qm),e(ko,or),e(or,Vm),e(or,hi),e(hi,Gm),e(or,Jm),_(s,Ic,k),_(s,To,k),e(To,fn),e(fn,Sl),v(nr,Sl,null),e(To,Ym),e(To,Al),e(Al,Xm),_(s,Lc,k),_(s,tt,k),v(sr,tt,null),e(tt,Zm),e(tt,Il),e(Il,eu),e(tt,tu),e(tt,rr),e(rr,ou),e(rr,mi),e(mi,nu),e(rr,su),e(tt,ru),e(tt,ar),e(ar,au),e(ar,ir),e(ir,iu),e(ar,lu),e(tt,du),e(tt,Ll),e(Ll,lr),e(lr,cu),e(tt,pu),e(tt,zt),v(dr,zt,null),e(zt,hu),e(zt,yo),e(yo,mu),e(yo,ui),e(ui,uu),e(yo,fu),e(yo,Wl),e(Wl,gu),e(yo,_u),e(zt,bu),v(gn,zt,null),e(zt,ku),v(_n,zt,null),_(s,Wc,k),_(s,wo,k),e(wo,bn),e(bn,Rl),v(cr,Rl,null),e(wo,Tu),e(wo,Ul),e(Ul,yu),_(s,Rc,k),_(s,ht,k),v(pr,ht,null),e(ht,wu),e(ht,vo),e(vo,vu),e(vo,Kl),e(Kl,$u),e(vo,Mu),e(vo,Hl),e(Hl,Fu),e(vo,Bu),e(ht,Eu),e(ht,hr),e(hr,xu),e(hr,fi),e(fi,zu),e(hr,qu),e(ht,Pu),e(ht,mr),e(mr,ju),e(mr,ur),e(ur,Cu),e(mr,Nu),e(ht,Ou),e(ht,qt),v(fr,qt,null),e(qt,Du),e(qt,$o),e($o,Su),e($o,gi),e(gi,Au),e($o,Iu),e($o,Ql),e(Ql,Lu),e($o,Wu),e(qt,Ru),v(kn,qt,null),e(qt,Uu),v(Tn,qt,null),_(s,Uc,k),_(s,Mo,k),e(Mo,yn),e(yn,Vl),v(gr,Vl,null),e(Mo,Ku),e(Mo,Gl),e(Gl,Hu),_(s,Kc,k),_(s,mt,k),v(_r,mt,null),e(mt,Qu),e(mt,br),e(br,Vu),e(br,Jl),e(Jl,Gu),e(br,Ju),e(mt,Yu),e(mt,kr),e(kr,Xu),e(kr,_i),e(_i,Zu),e(kr,ef),e(mt,tf),e(mt,Tr),e(Tr,of),e(Tr,yr),e(yr,nf),e(Tr,sf),e(mt,rf),e(mt,kt),v(wr,kt,null),e(kt,af),e(kt,Fo),e(Fo,lf),e(Fo,bi),e(bi,df),e(Fo,cf),e(Fo,Yl),e(Yl,pf),e(Fo,hf),e(kt,mf),v(wn,kt,null),e(kt,uf),v(vn,kt,null),e(kt,ff),v($n,kt,null),_(s,Hc,k),_(s,Bo,k),e(Bo,Mn),e(Mn,Xl),v(vr,Xl,null),e(Bo,gf),e(Bo,Zl),e(Zl,_f),_(s,Qc,k),_(s,ut,k),v($r,ut,null),e(ut,bf),e(ut,Mr),e(Mr,kf),e(Mr,ed),e(ed,Tf),e(Mr,yf),e(ut,wf),e(ut,Fr),e(Fr,vf),e(Fr,ki),e(ki,$f),e(Fr,Mf),e(ut,Ff),e(ut,Br),e(Br,Bf),e(Br,Er),e(Er,Ef),e(Br,xf),e(ut,zf),e(ut,Pt),v(xr,Pt,null),e(Pt,qf),e(Pt,Eo),e(Eo,Pf),e(Eo,Ti),e(Ti,jf),e(Eo,Cf),e(Eo,td),e(td,Nf),e(Eo,Of),e(Pt,Df),v(Fn,Pt,null),e(Pt,Sf),v(Bn,Pt,null),_(s,Vc,k),_(s,xo,k),e(xo,En),e(En,od),v(zr,od,null),e(xo,Af),e(xo,nd),e(nd,If),_(s,Gc,k),_(s,ft,k),v(qr,ft,null),e(ft,Lf),e(ft,sd),e(sd,Wf),e(ft,Rf),e(ft,Pr),e(Pr,Uf),e(Pr,yi),e(yi,Kf),e(Pr,Hf),e(ft,Qf),e(ft,jr),e(jr,Vf),e(jr,Cr),e(Cr,Gf),e(jr,Jf),e(ft,Yf),e(ft,et),v(Nr,et,null),e(et,Xf),e(et,zo),e(zo,Zf),e(zo,wi),e(wi,eg),e(zo,tg),e(zo,rd),e(rd,og),e(zo,ng),e(et,sg),v(xn,et,null),e(et,rg),v(zn,et,null),e(et,ag),v(qn,et,null),e(et,ig),v(Pn,et,null),e(et,lg),v(jn,et,null),_(s,Jc,k),_(s,qo,k),e(qo,Cn),e(Cn,ad),v(Or,ad,null),e(qo,dg),e(qo,id),e(id,cg),_(s,Yc,k),_(s,gt,k),v(Dr,gt,null),e(gt,pg),e(gt,ld),e(ld,hg),e(gt,mg),e(gt,Sr),e(Sr,ug),e(Sr,vi),e(vi,fg),e(Sr,gg),e(gt,_g),e(gt,Ar),e(Ar,bg),e(Ar,Ir),e(Ir,kg),e(Ar,Tg),e(gt,yg),e(gt,jt),v(Lr,jt,null),e(jt,wg),e(jt,Po),e(Po,vg),e(Po,$i),e($i,$g),e(Po,Mg),e(Po,dd),e(dd,Fg),e(Po,Bg),e(jt,Eg),v(Nn,jt,null),e(jt,xg),v(On,jt,null),_(s,Xc,k),_(s,jo,k),e(jo,Dn),e(Dn,cd),v(Wr,cd,null),e(jo,zg),e(jo,pd),e(pd,qg),_(s,Zc,k),_(s,_t,k),v(Rr,_t,null),e(_t,Pg),e(_t,hd),e(hd,jg),e(_t,Cg),e(_t,Ur),e(Ur,Ng),e(Ur,Mi),e(Mi,Og),e(Ur,Dg),e(_t,Sg),e(_t,Kr),e(Kr,Ag),e(Kr,Hr),e(Hr,Ig),e(Kr,Lg),e(_t,Wg),e(_t,Tt),v(Qr,Tt,null),e(Tt,Rg),e(Tt,Co),e(Co,Ug),e(Co,Fi),e(Fi,Kg),e(Co,Hg),e(Co,md),e(md,Qg),e(Co,Vg),e(Tt,Gg),v(Sn,Tt,null),e(Tt,Jg),v(An,Tt,null),e(Tt,Yg),v(In,Tt,null),_(s,ep,k),_(s,No,k),e(No,Ln),e(Ln,ud),v(Vr,ud,null),e(No,Xg),e(No,fd),e(fd,Zg),_(s,tp,k),_(s,bt,k),v(Gr,bt,null),e(bt,e_),e(bt,Oo),e(Oo,t_),e(Oo,gd),e(gd,o_),e(Oo,n_),e(Oo,_d),e(_d,s_),e(Oo,r_),e(bt,a_),e(bt,Jr),e(Jr,i_),e(Jr,Bi),e(Bi,l_),e(Jr,d_),e(bt,c_),e(bt,Yr),e(Yr,p_),e(Yr,Xr),e(Xr,h_),e(Yr,m_),e(bt,u_),e(bt,yt),v(Zr,yt,null),e(yt,f_),e(yt,Do),e(Do,g_),e(Do,Ei),e(Ei,__),e(Do,b_),e(Do,bd),e(bd,k_),e(Do,T_),e(yt,y_),v(Wn,yt,null),e(yt,w_),v(Rn,yt,null),e(yt,v_),v(Un,yt,null),_(s,op,k),_(s,So,k),e(So,Kn),e(Kn,kd),v(ea,kd,null),e(So,$_),e(So,Td),e(Td,M_),_(s,np,k),_(s,ot,k),v(ta,ot,null),e(ot,F_),e(ot,yd),e(yd,B_),e(ot,E_),e(ot,oa),e(oa,x_),e(oa,xi),e(xi,z_),e(oa,q_),e(ot,P_),e(ot,na),e(na,j_),e(na,sa),e(sa,C_),e(na,N_),e(ot,O_),v(Hn,ot,null),e(ot,D_),e(ot,Ct),v(ra,Ct,null),e(Ct,S_),e(Ct,Ao),e(Ao,A_),e(Ao,zi),e(zi,I_),e(Ao,L_),e(Ao,wd),e(wd,W_),e(Ao,R_),e(Ct,U_),v(Qn,Ct,null),e(Ct,K_),v(Vn,Ct,null),_(s,sp,k),_(s,Io,k),e(Io,Gn),e(Gn,vd),v(aa,vd,null),e(Io,H_),e(Io,$d),e($d,Q_),_(s,rp,k),_(s,nt,k),v(ia,nt,null),e(nt,V_),e(nt,Lo),e(Lo,G_),e(Lo,Md),e(Md,J_),e(Lo,Y_),e(Lo,Fd),e(Fd,X_),e(Lo,Z_),e(nt,eb),e(nt,la),e(la,tb),e(la,qi),e(qi,ob),e(la,nb),e(nt,sb),e(nt,da),e(da,rb),e(da,ca),e(ca,ab),e(da,ib),e(nt,lb),v(Jn,nt,null),e(nt,db),e(nt,Nt),v(pa,Nt,null),e(Nt,cb),e(Nt,Wo),e(Wo,pb),e(Wo,Pi),e(Pi,hb),e(Wo,mb),e(Wo,Bd),e(Bd,ub),e(Wo,fb),e(Nt,gb),v(Yn,Nt,null),e(Nt,_b),v(Xn,Nt,null),_(s,ap,k),_(s,Ro,k),e(Ro,Zn),e(Zn,Ed),v(ha,Ed,null),e(Ro,bb),e(Ro,xd),e(xd,kb),_(s,ip,k),_(s,st,k),v(ma,st,null),e(st,Tb),e(st,ua),e(ua,yb),e(ua,zd),e(zd,wb),e(ua,vb),e(st,$b),e(st,fa),e(fa,Mb),e(fa,ji),e(ji,Fb),e(fa,Bb),e(st,Eb),e(st,ga),e(ga,xb),e(ga,_a),e(_a,zb),e(ga,qb),e(st,Pb),v(es,st,null),e(st,jb),e(st,wt),v(ba,wt,null),e(wt,Cb),e(wt,Uo),e(Uo,Nb),e(Uo,Ci),e(Ci,Ob),e(Uo,Db),e(Uo,qd),e(qd,Sb),e(Uo,Ab),e(wt,Ib),v(ts,wt,null),e(wt,Lb),v(os,wt,null),e(wt,Wb),v(ns,wt,null),_(s,lp,k),_(s,Ko,k),e(Ko,ss),e(ss,Pd),v(ka,Pd,null),e(Ko,Rb),e(Ko,jd),e(jd,Ub),_(s,dp,k),_(s,rt,k),v(Ta,rt,null),e(rt,Kb),e(rt,ya),e(ya,Hb),e(ya,Cd),e(Cd,Qb),e(ya,Vb),e(rt,Gb),e(rt,wa),e(wa,Jb),e(wa,Ni),e(Ni,Yb),e(wa,Xb),e(rt,Zb),e(rt,va),e(va,ek),e(va,$a),e($a,tk),e(va,ok),e(rt,nk),v(rs,rt,null),e(rt,sk),e(rt,Ot),v(Ma,Ot,null),e(Ot,rk),e(Ot,Ho),e(Ho,ak),e(Ho,Oi),e(Oi,ik),e(Ho,lk),e(Ho,Nd),e(Nd,dk),e(Ho,ck),e(Ot,pk),v(as,Ot,null),e(Ot,hk),v(is,Ot,null),_(s,cp,k),_(s,Qo,k),e(Qo,ls),e(ls,Od),v(Fa,Od,null),e(Qo,mk),e(Qo,Dd),e(Dd,uk),_(s,pp,k),_(s,at,k),v(Ba,at,null),e(at,fk),e(at,Sd),e(Sd,gk),e(at,_k),e(at,Ea),e(Ea,bk),e(Ea,Di),e(Di,kk),e(Ea,Tk),e(at,yk),e(at,xa),e(xa,wk),e(xa,za),e(za,vk),e(xa,$k),e(at,Mk),v(ds,at,null),e(at,Fk),e(at,vt),v(qa,vt,null),e(vt,Bk),e(vt,Vo),e(Vo,Ek),e(Vo,Si),e(Si,xk),e(Vo,zk),e(Vo,Ad),e(Ad,qk),e(Vo,Pk),e(vt,jk),v(cs,vt,null),e(vt,Ck),v(ps,vt,null),e(vt,Nk),v(hs,vt,null),_(s,hp,k),_(s,Go,k),e(Go,ms),e(ms,Id),v(Pa,Id,null),e(Go,Ok),e(Go,Ld),e(Ld,Dk),_(s,mp,k),_(s,it,k),v(ja,it,null),e(it,Sk),e(it,Wd),e(Wd,Ak),e(it,Ik),e(it,Ca),e(Ca,Lk),e(Ca,Ai),e(Ai,Wk),e(Ca,Rk),e(it,Uk),e(it,Na),e(Na,Kk),e(Na,Oa),e(Oa,Hk),e(Na,Qk),e(it,Vk),v(us,it,null),e(it,Gk),e(it,Dt),v(Da,Dt,null),e(Dt,Jk),e(Dt,Jo),e(Jo,Yk),e(Jo,Ii),e(Ii,Xk),e(Jo,Zk),e(Jo,Rd),e(Rd,eT),e(Jo,tT),e(Dt,oT),v(fs,Dt,null),e(Dt,nT),v(gs,Dt,null),_(s,up,k),_(s,Yo,k),e(Yo,_s),e(_s,Ud),v(Sa,Ud,null),e(Yo,sT),e(Yo,Kd),e(Kd,rT),_(s,fp,k),_(s,lt,k),v(Aa,lt,null),e(lt,aT),e(lt,Hd),e(Hd,iT),e(lt,lT),e(lt,Ia),e(Ia,dT),e(Ia,Li),e(Li,cT),e(Ia,pT),e(lt,hT),e(lt,La),e(La,mT),e(La,Wa),e(Wa,uT),e(La,fT),e(lt,gT),v(bs,lt,null),e(lt,_T),e(lt,$t),v(Ra,$t,null),e($t,bT),e($t,Xo),e(Xo,kT),e(Xo,Wi),e(Wi,TT),e(Xo,yT),e(Xo,Qd),e(Qd,wT),e(Xo,vT),e($t,$T),v(ks,$t,null),e($t,MT),v(Ts,$t,null),e($t,FT),v(ys,$t,null),_(s,gp,k),_(s,Zo,k),e(Zo,ws),e(ws,Vd),v(Ua,Vd,null),e(Zo,BT),e(Zo,Gd),e(Gd,ET),_(s,_p,k),_(s,dt,k),v(Ka,dt,null),e(dt,xT),e(dt,en),e(en,zT),e(en,Jd),e(Jd,qT),e(en,PT),e(en,Yd),e(Yd,jT),e(en,CT),e(dt,NT),e(dt,Ha),e(Ha,OT),e(Ha,Ri),e(Ri,DT),e(Ha,ST),e(dt,AT),e(dt,Qa),e(Qa,IT),e(Qa,Va),e(Va,LT),e(Qa,WT),e(dt,RT),v(vs,dt,null),e(dt,UT),e(dt,Mt),v(Ga,Mt,null),e(Mt,KT),e(Mt,tn),e(tn,HT),e(tn,Ui),e(Ui,QT),e(tn,VT),e(tn,Xd),e(Xd,GT),e(tn,JT),e(Mt,YT),v($s,Mt,null),e(Mt,XT),v(Ms,Mt,null),e(Mt,ZT),v(Fs,Mt,null),bp=!0},p(s,[k]){const Ja={};k&2&&(Ja.$$scope={dirty:k,ctx:s}),an.$set(Ja);const Zd={};k&2&&(Zd.$$scope={dirty:k,ctx:s}),cn.$set(Zd);const ec={};k&2&&(ec.$$scope={dirty:k,ctx:s}),mn.$set(ec);const tc={};k&2&&(tc.$$scope={dirty:k,ctx:s}),gn.$set(tc);const Ya={};k&2&&(Ya.$$scope={dirty:k,ctx:s}),_n.$set(Ya);const oc={};k&2&&(oc.$$scope={dirty:k,ctx:s}),kn.$set(oc);const nc={};k&2&&(nc.$$scope={dirty:k,ctx:s}),Tn.$set(nc);const sc={};k&2&&(sc.$$scope={dirty:k,ctx:s}),wn.$set(sc);const Xa={};k&2&&(Xa.$$scope={dirty:k,ctx:s}),vn.$set(Xa);const rc={};k&2&&(rc.$$scope={dirty:k,ctx:s}),$n.$set(rc);const ac={};k&2&&(ac.$$scope={dirty:k,ctx:s}),Fn.$set(ac);const ic={};k&2&&(ic.$$scope={dirty:k,ctx:s}),Bn.$set(ic);const lc={};k&2&&(lc.$$scope={dirty:k,ctx:s}),xn.$set(lc);const dc={};k&2&&(dc.$$scope={dirty:k,ctx:s}),zn.$set(dc);const Za={};k&2&&(Za.$$scope={dirty:k,ctx:s}),qn.$set(Za);const cc={};k&2&&(cc.$$scope={dirty:k,ctx:s}),Pn.$set(cc);const pc={};k&2&&(pc.$$scope={dirty:k,ctx:s}),jn.$set(pc);const on={};k&2&&(on.$$scope={dirty:k,ctx:s}),Nn.$set(on);const hc={};k&2&&(hc.$$scope={dirty:k,ctx:s}),On.$set(hc);const mc={};k&2&&(mc.$$scope={dirty:k,ctx:s}),Sn.$set(mc);const ei={};k&2&&(ei.$$scope={dirty:k,ctx:s}),An.$set(ei);const uc={};k&2&&(uc.$$scope={dirty:k,ctx:s}),In.$set(uc);const fc={};k&2&&(fc.$$scope={dirty:k,ctx:s}),Wn.$set(fc);const gc={};k&2&&(gc.$$scope={dirty:k,ctx:s}),Rn.$set(gc);const Bt={};k&2&&(Bt.$$scope={dirty:k,ctx:s}),Un.$set(Bt);const Qt={};k&2&&(Qt.$$scope={dirty:k,ctx:s}),Hn.$set(Qt);const _c={};k&2&&(_c.$$scope={dirty:k,ctx:s}),Qn.$set(_c);const bc={};k&2&&(bc.$$scope={dirty:k,ctx:s}),Vn.$set(bc);const kc={};k&2&&(kc.$$scope={dirty:k,ctx:s}),Jn.$set(kc);const nn={};k&2&&(nn.$$scope={dirty:k,ctx:s}),Yn.$set(nn);const Tc={};k&2&&(Tc.$$scope={dirty:k,ctx:s}),Xn.$set(Tc);const yc={};k&2&&(yc.$$scope={dirty:k,ctx:s}),es.$set(yc);const wc={};k&2&&(wc.$$scope={dirty:k,ctx:s}),ts.$set(wc);const ti={};k&2&&(ti.$$scope={dirty:k,ctx:s}),os.$set(ti);const vc={};k&2&&(vc.$$scope={dirty:k,ctx:s}),ns.$set(vc);const $c={};k&2&&($c.$$scope={dirty:k,ctx:s}),rs.$set($c);const Mc={};k&2&&(Mc.$$scope={dirty:k,ctx:s}),as.$set(Mc);const ct={};k&2&&(ct.$$scope={dirty:k,ctx:s}),is.$set(ct);const Fc={};k&2&&(Fc.$$scope={dirty:k,ctx:s}),ds.$set(Fc);const oi={};k&2&&(oi.$$scope={dirty:k,ctx:s}),cs.$set(oi);const Bc={};k&2&&(Bc.$$scope={dirty:k,ctx:s}),ps.$set(Bc);const sn={};k&2&&(sn.$$scope={dirty:k,ctx:s}),hs.$set(sn);const Ec={};k&2&&(Ec.$$scope={dirty:k,ctx:s}),us.$set(Ec);const ni={};k&2&&(ni.$$scope={dirty:k,ctx:s}),fs.$set(ni);const Ki={};k&2&&(Ki.$$scope={dirty:k,ctx:s}),gs.$set(Ki);const xc={};k&2&&(xc.$$scope={dirty:k,ctx:s}),bs.$set(xc);const Hi={};k&2&&(Hi.$$scope={dirty:k,ctx:s}),ks.$set(Hi);const zc={};k&2&&(zc.$$scope={dirty:k,ctx:s}),Ts.$set(zc);const si={};k&2&&(si.$$scope={dirty:k,ctx:s}),ys.$set(si);const qc={};k&2&&(qc.$$scope={dirty:k,ctx:s}),vs.$set(qc);const Vt={};k&2&&(Vt.$$scope={dirty:k,ctx:s}),$s.$set(Vt);const Pc={};k&2&&(Pc.$$scope={dirty:k,ctx:s}),Ms.$set(Pc);const rn={};k&2&&(rn.$$scope={dirty:k,ctx:s}),Fs.$set(rn)},i(s){bp||($(l.$$.fragment,s),$(B.$$.fragment,s),$(j.$$.fragment,s),$(E.$$.fragment,s),$(an.$$.fragment,s),$(Os.$$.fragment,s),$(Ds.$$.fragment,s),$(As.$$.fragment,s),$(Ls.$$.fragment,s),$(Ws.$$.fragment,s),$(cn.$$.fragment,s),$(Rs.$$.fragment,s),$(Ks.$$.fragment,s),$(Hs.$$.fragment,s),$(Gs.$$.fragment,s),$(Ys.$$.fragment,s),$(mn.$$.fragment,s),$(Xs.$$.fragment,s),$(Zs.$$.fragment,s),$(tr.$$.fragment,s),$(nr.$$.fragment,s),$(sr.$$.fragment,s),$(dr.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(cr.$$.fragment,s),$(pr.$$.fragment,s),$(fr.$$.fragment,s),$(kn.$$.fragment,s),$(Tn.$$.fragment,s),$(gr.$$.fragment,s),$(_r.$$.fragment,s),$(wr.$$.fragment,s),$(wn.$$.fragment,s),$(vn.$$.fragment,s),$($n.$$.fragment,s),$(vr.$$.fragment,s),$($r.$$.fragment,s),$(xr.$$.fragment,s),$(Fn.$$.fragment,s),$(Bn.$$.fragment,s),$(zr.$$.fragment,s),$(qr.$$.fragment,s),$(Nr.$$.fragment,s),$(xn.$$.fragment,s),$(zn.$$.fragment,s),$(qn.$$.fragment,s),$(Pn.$$.fragment,s),$(jn.$$.fragment,s),$(Or.$$.fragment,s),$(Dr.$$.fragment,s),$(Lr.$$.fragment,s),$(Nn.$$.fragment,s),$(On.$$.fragment,s),$(Wr.$$.fragment,s),$(Rr.$$.fragment,s),$(Qr.$$.fragment,s),$(Sn.$$.fragment,s),$(An.$$.fragment,s),$(In.$$.fragment,s),$(Vr.$$.fragment,s),$(Gr.$$.fragment,s),$(Zr.$$.fragment,s),$(Wn.$$.fragment,s),$(Rn.$$.fragment,s),$(Un.$$.fragment,s),$(ea.$$.fragment,s),$(ta.$$.fragment,s),$(Hn.$$.fragment,s),$(ra.$$.fragment,s),$(Qn.$$.fragment,s),$(Vn.$$.fragment,s),$(aa.$$.fragment,s),$(ia.$$.fragment,s),$(Jn.$$.fragment,s),$(pa.$$.fragment,s),$(Yn.$$.fragment,s),$(Xn.$$.fragment,s),$(ha.$$.fragment,s),$(ma.$$.fragment,s),$(es.$$.fragment,s),$(ba.$$.fragment,s),$(ts.$$.fragment,s),$(os.$$.fragment,s),$(ns.$$.fragment,s),$(ka.$$.fragment,s),$(Ta.$$.fragment,s),$(rs.$$.fragment,s),$(Ma.$$.fragment,s),$(as.$$.fragment,s),$(is.$$.fragment,s),$(Fa.$$.fragment,s),$(Ba.$$.fragment,s),$(ds.$$.fragment,s),$(qa.$$.fragment,s),$(cs.$$.fragment,s),$(ps.$$.fragment,s),$(hs.$$.fragment,s),$(Pa.$$.fragment,s),$(ja.$$.fragment,s),$(us.$$.fragment,s),$(Da.$$.fragment,s),$(fs.$$.fragment,s),$(gs.$$.fragment,s),$(Sa.$$.fragment,s),$(Aa.$$.fragment,s),$(bs.$$.fragment,s),$(Ra.$$.fragment,s),$(ks.$$.fragment,s),$(Ts.$$.fragment,s),$(ys.$$.fragment,s),$(Ua.$$.fragment,s),$(Ka.$$.fragment,s),$(vs.$$.fragment,s),$(Ga.$$.fragment,s),$($s.$$.fragment,s),$(Ms.$$.fragment,s),$(Fs.$$.fragment,s),bp=!0)},o(s){M(l.$$.fragment,s),M(B.$$.fragment,s),M(j.$$.fragment,s),M(E.$$.fragment,s),M(an.$$.fragment,s),M(Os.$$.fragment,s),M(Ds.$$.fragment,s),M(As.$$.fragment,s),M(Ls.$$.fragment,s),M(Ws.$$.fragment,s),M(cn.$$.fragment,s),M(Rs.$$.fragment,s),M(Ks.$$.fragment,s),M(Hs.$$.fragment,s),M(Gs.$$.fragment,s),M(Ys.$$.fragment,s),M(mn.$$.fragment,s),M(Xs.$$.fragment,s),M(Zs.$$.fragment,s),M(tr.$$.fragment,s),M(nr.$$.fragment,s),M(sr.$$.fragment,s),M(dr.$$.fragment,s),M(gn.$$.fragment,s),M(_n.$$.fragment,s),M(cr.$$.fragment,s),M(pr.$$.fragment,s),M(fr.$$.fragment,s),M(kn.$$.fragment,s),M(Tn.$$.fragment,s),M(gr.$$.fragment,s),M(_r.$$.fragment,s),M(wr.$$.fragment,s),M(wn.$$.fragment,s),M(vn.$$.fragment,s),M($n.$$.fragment,s),M(vr.$$.fragment,s),M($r.$$.fragment,s),M(xr.$$.fragment,s),M(Fn.$$.fragment,s),M(Bn.$$.fragment,s),M(zr.$$.fragment,s),M(qr.$$.fragment,s),M(Nr.$$.fragment,s),M(xn.$$.fragment,s),M(zn.$$.fragment,s),M(qn.$$.fragment,s),M(Pn.$$.fragment,s),M(jn.$$.fragment,s),M(Or.$$.fragment,s),M(Dr.$$.fragment,s),M(Lr.$$.fragment,s),M(Nn.$$.fragment,s),M(On.$$.fragment,s),M(Wr.$$.fragment,s),M(Rr.$$.fragment,s),M(Qr.$$.fragment,s),M(Sn.$$.fragment,s),M(An.$$.fragment,s),M(In.$$.fragment,s),M(Vr.$$.fragment,s),M(Gr.$$.fragment,s),M(Zr.$$.fragment,s),M(Wn.$$.fragment,s),M(Rn.$$.fragment,s),M(Un.$$.fragment,s),M(ea.$$.fragment,s),M(ta.$$.fragment,s),M(Hn.$$.fragment,s),M(ra.$$.fragment,s),M(Qn.$$.fragment,s),M(Vn.$$.fragment,s),M(aa.$$.fragment,s),M(ia.$$.fragment,s),M(Jn.$$.fragment,s),M(pa.$$.fragment,s),M(Yn.$$.fragment,s),M(Xn.$$.fragment,s),M(ha.$$.fragment,s),M(ma.$$.fragment,s),M(es.$$.fragment,s),M(ba.$$.fragment,s),M(ts.$$.fragment,s),M(os.$$.fragment,s),M(ns.$$.fragment,s),M(ka.$$.fragment,s),M(Ta.$$.fragment,s),M(rs.$$.fragment,s),M(Ma.$$.fragment,s),M(as.$$.fragment,s),M(is.$$.fragment,s),M(Fa.$$.fragment,s),M(Ba.$$.fragment,s),M(ds.$$.fragment,s),M(qa.$$.fragment,s),M(cs.$$.fragment,s),M(ps.$$.fragment,s),M(hs.$$.fragment,s),M(Pa.$$.fragment,s),M(ja.$$.fragment,s),M(us.$$.fragment,s),M(Da.$$.fragment,s),M(fs.$$.fragment,s),M(gs.$$.fragment,s),M(Sa.$$.fragment,s),M(Aa.$$.fragment,s),M(bs.$$.fragment,s),M(Ra.$$.fragment,s),M(ks.$$.fragment,s),M(Ts.$$.fragment,s),M(ys.$$.fragment,s),M(Ua.$$.fragment,s),M(Ka.$$.fragment,s),M(vs.$$.fragment,s),M(Ga.$$.fragment,s),M($s.$$.fragment,s),M(Ms.$$.fragment,s),M(Fs.$$.fragment,s),bp=!1},d(s){t(d),s&&t(b),s&&t(c),F(l),s&&t(me),s&&t(A),F(B),s&&t(ue),s&&t(L),s&&t(fe),s&&t(R),s&&t(ge),s&&t(U),s&&t(te),s&&t(P),s&&t(_e),s&&t(W),s&&t(C),s&&t(se),s&&t(be),s&&t(I),F(j),s&&t(ke),s&&t(f),F(E),F(an),s&&t(jc),s&&t(mo),F(Os),s&&t(Cc),s&&t(Ze),F(Ds),F(As),F(Ls),F(Ws),F(cn),F(Rs),s&&t(Nc),s&&t(fo),F(Ks),s&&t(Oc),s&&t(pt),F(Hs),F(Gs),F(Ys),F(mn),s&&t(Dc),s&&t(_o),F(Xs),s&&t(Sc),s&&t(bo),F(Zs),s&&t(Ac),s&&t(ko),F(tr),s&&t(Ic),s&&t(To),F(nr),s&&t(Lc),s&&t(tt),F(sr),F(dr),F(gn),F(_n),s&&t(Wc),s&&t(wo),F(cr),s&&t(Rc),s&&t(ht),F(pr),F(fr),F(kn),F(Tn),s&&t(Uc),s&&t(Mo),F(gr),s&&t(Kc),s&&t(mt),F(_r),F(wr),F(wn),F(vn),F($n),s&&t(Hc),s&&t(Bo),F(vr),s&&t(Qc),s&&t(ut),F($r),F(xr),F(Fn),F(Bn),s&&t(Vc),s&&t(xo),F(zr),s&&t(Gc),s&&t(ft),F(qr),F(Nr),F(xn),F(zn),F(qn),F(Pn),F(jn),s&&t(Jc),s&&t(qo),F(Or),s&&t(Yc),s&&t(gt),F(Dr),F(Lr),F(Nn),F(On),s&&t(Xc),s&&t(jo),F(Wr),s&&t(Zc),s&&t(_t),F(Rr),F(Qr),F(Sn),F(An),F(In),s&&t(ep),s&&t(No),F(Vr),s&&t(tp),s&&t(bt),F(Gr),F(Zr),F(Wn),F(Rn),F(Un),s&&t(op),s&&t(So),F(ea),s&&t(np),s&&t(ot),F(ta),F(Hn),F(ra),F(Qn),F(Vn),s&&t(sp),s&&t(Io),F(aa),s&&t(rp),s&&t(nt),F(ia),F(Jn),F(pa),F(Yn),F(Xn),s&&t(ap),s&&t(Ro),F(ha),s&&t(ip),s&&t(st),F(ma),F(es),F(ba),F(ts),F(os),F(ns),s&&t(lp),s&&t(Ko),F(ka),s&&t(dp),s&&t(rt),F(Ta),F(rs),F(Ma),F(as),F(is),s&&t(cp),s&&t(Qo),F(Fa),s&&t(pp),s&&t(at),F(Ba),F(ds),F(qa),F(cs),F(ps),F(hs),s&&t(hp),s&&t(Go),F(Pa),s&&t(mp),s&&t(it),F(ja),F(us),F(Da),F(fs),F(gs),s&&t(up),s&&t(Yo),F(Sa),s&&t(fp),s&&t(lt),F(Aa),F(bs),F(Ra),F(ks),F(Ts),F(ys),s&&t(gp),s&&t(Zo),F(Ua),s&&t(_p),s&&t(dt),F(Ka),F(vs),F(Ga),F($s),F(Ms),F(Fs)}}}const X$={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function Z$(x){return Yv(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class aM extends Qv{constructor(d){super();Vv(this,d,Z$,Y$,Gv,{})}}export{aM as default,X$ as metadata};
