import{S as py,i as hy,s as my,e as r,k as h,w as y,t as o,M as uy,c as a,d as t,m,a as i,x as w,h as n,b as g,G as e,g as _,y as M,q as $,o as F,B,v as fy,L as Ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as he}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function gy(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertModel, MobileBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function _y(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function by(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function vy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function ky(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ty(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function yy(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function wy(z){let d,b;return d=new Ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function My(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function $y(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Fy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function By(z){let d,b,c,u,k;return u=new Ye({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of single-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of single-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ey(z){let d,b;return d=new Ye({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = MobileBertForSequenceClassification.from_pretrained("lordtt13/emo-mobilebert", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;lordtt13/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function xy(z){let d,b,c,u,k;return u=new Ye({props:{code:`import torch
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example of multi-label classification:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function zy(z){let d,b;return d=new Ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Py(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function jy(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Cy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function qy(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ny(z){let d,b;return d=new Ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Oy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Ay(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, MobileBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Sy(z){let d,b;return d=new Ye({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Dy(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Iy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Ly(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Wy(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Ry(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Uy(z){let d,b,c,u,k;return u=new Ye({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_scores, seq_relationship_scores = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Ky(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Hy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Qy(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Vy(z){let d,b;return d=new Ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.57</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function Gy(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Yy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Jy(z){let d,b,c,u,k;return u=new Ye({props:{code:`import tensorflow as tf
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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]`}}),{c(){d=r("p"),b=o("Examples:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Examples:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function Zy(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function Xy(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function ew(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForSequenceClassification
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
<span class="hljs-string">&#x27;others&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function tw(z){let d,b;return d=new Ye({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFMobileBertForSequenceClassification.from_pretrained("vumichien/emo-mobilebert", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMobileBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;vumichien/emo-mobilebert&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">4.72</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function ow(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function nw(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function sw(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function rw(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function aw(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function iw(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForTokenClassification
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
[<span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>]`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function lw(z){let d,b;return d=new Ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.03</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function dw(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve;return{c(){d=r("p"),b=o("TensorFlow models and layers in "),c=r("code"),u=o("transformers"),k=o(" accept two formats as input:"),l=h(),p=r("ul"),P=r("li"),ke=o("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),se=o("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),T=r("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=r("code"),ye=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=r("code"),we=o("model.fit()"),ae=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=r("code"),Me=o("fit()"),fe=o(" and "),R=r("code"),$e=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=r("code"),de=o("Functional"),Fe=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=h(),j=r("ul"),N=r("li"),_e=o("a single Tensor with "),W=r("code"),ce=o("input_ids"),Be=o(" only and nothing else: "),Q=r("code"),pe=o("model(input_ids)"),Ee=h(),q=r("li"),ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=r("code"),ie=o("model([input_ids, attention_mask])"),xe=o(" or "),G=r("code"),le=o("model([input_ids, attention_mask, token_type_ids])"),ze=h(),A=r("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=r("code"),re=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),C=r("p"),Pe=o(`Note that when creating models and layers with
`),O=r("a"),je=o("subclassing"),ve=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var E=i(d);b=n(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ie=i(c);u=n(Ie,"transformers"),Ie.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=m(f),p=a(f,"UL",{});var Y=i(p);P=a(Y,"LI",{});var Le=i(P);ke=n(Le,"having all inputs as keyword arguments (like PyTorch models), or"),Le.forEach(t),me=m(Y),D=a(Y,"LI",{});var Oe=i(D);se=n(Oe,"having all inputs as a list, tuple or dict in the first positional argument."),Oe.forEach(t),Y.forEach(t),X=m(f),T=a(f,"P",{});var x=i(T);Te=n(x,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),K=a(x,"CODE",{});var We=i(K);ye=n(We,"model.fit()"),We.forEach(t),ue=n(x,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),L=a(x,"CODE",{});var Ae=i(L);we=n(Ae,"model.fit()"),Ae.forEach(t),ae=n(x,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(x,"CODE",{});var Re=i(H);Me=n(Re,"fit()"),Re.forEach(t),fe=n(x," and "),R=a(x,"CODE",{});var Ue=i(R);$e=n(Ue,"predict()"),Ue.forEach(t),ge=n(x,`, such as when creating your own layers or models with
the Keras `),U=a(x,"CODE",{});var Ne=i(U);de=n(Ne,"Functional"),Ne.forEach(t),Fe=n(x,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),x.forEach(t),te=m(f),j=a(f,"UL",{});var S=i(j);N=a(S,"LI",{});var J=i(N);_e=n(J,"a single Tensor with "),W=a(J,"CODE",{});var Ke=i(W);ce=n(Ke,"input_ids"),Ke.forEach(t),Be=n(J," only and nothing else: "),Q=a(J,"CODE",{});var qe=i(Q);pe=n(qe,"model(input_ids)"),qe.forEach(t),J.forEach(t),Ee=m(S),q=a(S,"LI",{});var Z=i(q);ne=n(Z,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Z,"CODE",{});var Se=i(V);ie=n(Se,"model([input_ids, attention_mask])"),Se.forEach(t),xe=n(Z," or "),G=a(Z,"CODE",{});var He=i(G);le=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),Z.forEach(t),ze=m(S),A=a(S,"LI",{});var Ce=i(A);be=n(Ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=a(Ce,"CODE",{});var De=i(I);re=n(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),Ce.forEach(t),S.forEach(t),ee=m(f),C=a(f,"P",{});var oe=i(C);Pe=n(oe,`Note that when creating models and layers with
`),O=a(oe,"A",{href:!0,rel:!0});var Qe=i(O);je=n(Qe,"subclassing"),Qe.forEach(t),ve=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){g(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(O,"rel","nofollow")},m(f,E){_(f,d,E),e(d,b),e(d,c),e(c,u),e(d,k),_(f,l,E),_(f,p,E),e(p,P),e(P,ke),e(p,me),e(p,D),e(D,se),_(f,X,E),_(f,T,E),e(T,Te),e(T,K),e(K,ye),e(T,ue),e(T,L),e(L,we),e(T,ae),e(T,H),e(H,Me),e(T,fe),e(T,R),e(R,$e),e(T,ge),e(T,U),e(U,de),e(T,Fe),_(f,te,E),_(f,j,E),e(j,N),e(N,_e),e(N,W),e(W,ce),e(N,Be),e(N,Q),e(Q,pe),e(j,Ee),e(j,q),e(q,ne),e(q,V),e(V,ie),e(q,xe),e(q,G),e(G,le),e(j,ze),e(j,A),e(A,be),e(A,I),e(I,re),_(f,ee,E),_(f,C,E),e(C,Pe),e(C,O),e(O,je),e(C,ve)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(X),f&&t(T),f&&t(te),f&&t(j),f&&t(ee),f&&t(C)}}}function cw(z){let d,b,c,u,k;return{c(){d=r("p"),b=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var P=i(c);u=n(P,"Module"),P.forEach(t),k=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,b),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function pw(z){let d,b,c,u,k;return u=new Ye({props:{code:`from transformers import MobileBertTokenizer, TFMobileBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=r("p"),b=o("Example:"),c=h(),y(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);b=n(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,b),_(l,c,p),M(u,l,p),k=!0},p:Ge,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){F(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),B(u,l)}}}function hw(z){let d,b;return d=new Ye({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">3.98</span>`}}),{c(){y(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){M(d,c,u),b=!0},p:Ge,i(c){b||($(d.$$.fragment,c),b=!0)},o(c){F(d.$$.fragment,c),b=!1},d(c){B(d,c)}}}function mw(z){let d,b,c,u,k,l,p,P,ke,me,D,se,X,T,Te,K,ye,ue,L,we,ae,H,Me,fe,R,$e,ge,U,de,Fe,te,j,N,_e,W,ce,Be,Q,pe,Ee,q,ne,V,ie,xe,G,le,ze,A,be,I,re,ee,C,Pe,O,je,ve,f,E,Ie,Y,Le,Oe,x,We,Ae,Re,Ue,Ne,S,J,Ke,qe,Z,Se,He,Ce,De,oe,Qe,Lp,Jo,Wp,Ki,Rp,Jd,io,Zo,Hi,$s,Up,Qi,Kp,Zd,Mt,Fs,Hp,Vi,Qp,Vp,Xo,Da,Gp,Yp,Ia,Jp,Zp,Xp,Bs,eh,La,th,oh,Xd,lo,en,Gi,Es,nh,Yi,sh,ec,$t,xs,rh,zs,ah,Ji,ih,lh,dh,tn,Wa,ch,ph,Ra,hh,mh,uh,Ps,fh,Ua,gh,_h,tc,co,on,Zi,js,bh,Xi,vh,oc,po,Cs,kh,qs,Th,Ka,yh,wh,nc,ho,Ns,Mh,Os,$h,Ha,Fh,Bh,sc,mo,nn,el,As,Eh,tl,xh,rc,et,Ss,zh,ol,Ph,jh,Ds,Ch,Qa,qh,Nh,Oh,Is,Ah,Ls,Sh,Dh,Ih,nl,Ws,Lh,Wh,Bt,Rs,Rh,uo,Uh,Va,Kh,Hh,sl,Qh,Vh,Gh,sn,Yh,rn,ac,fo,an,rl,Us,Jh,al,Zh,ic,dt,Ks,Xh,go,em,il,tm,om,ll,nm,sm,rm,Hs,am,Ga,im,lm,dm,Qs,cm,Vs,pm,hm,mm,Et,Gs,um,_o,fm,Ya,gm,_m,dl,bm,vm,km,ln,Tm,dn,lc,bo,cn,cl,Ys,ym,pl,wm,dc,ct,Js,Mm,Zs,$m,hl,Fm,Bm,Em,Xs,xm,Ja,zm,Pm,jm,er,Cm,tr,qm,Nm,Om,gt,or,Am,vo,Sm,Za,Dm,Im,ml,Lm,Wm,Rm,pn,Um,hn,Km,mn,cc,ko,un,ul,nr,Hm,fl,Qm,pc,pt,sr,Vm,rr,Gm,gl,Ym,Jm,Zm,ar,Xm,Xa,eu,tu,ou,ir,nu,lr,su,ru,au,xt,dr,iu,To,lu,ei,du,cu,_l,pu,hu,mu,fn,uu,gn,hc,yo,_n,bl,cr,fu,vl,gu,mc,ht,pr,_u,kl,bu,vu,hr,ku,ti,Tu,yu,wu,mr,Mu,ur,$u,Fu,Bu,Xe,fr,Eu,wo,xu,oi,zu,Pu,Tl,ju,Cu,qu,bn,Nu,vn,Ou,kn,Au,Tn,Su,yn,uc,Mo,wn,yl,gr,Du,wl,Iu,fc,mt,_r,Lu,Ml,Wu,Ru,br,Uu,ni,Ku,Hu,Qu,vr,Vu,kr,Gu,Yu,Ju,zt,Tr,Zu,$o,Xu,si,ef,tf,$l,of,nf,sf,Mn,rf,$n,gc,Fo,Fn,Fl,yr,af,Bl,lf,_c,ut,wr,df,El,cf,pf,Mr,hf,ri,mf,uf,ff,$r,gf,Fr,_f,bf,vf,_t,Br,kf,Bo,Tf,ai,yf,wf,xl,Mf,$f,Ff,Bn,Bf,En,Ef,xn,bc,Eo,zn,zl,Er,xf,Pl,zf,vc,ft,xr,Pf,xo,jf,jl,Cf,qf,Cl,Nf,Of,Af,zr,Sf,ii,Df,If,Lf,Pr,Wf,jr,Rf,Uf,Kf,bt,Cr,Hf,zo,Qf,li,Vf,Gf,ql,Yf,Jf,Zf,Pn,Xf,jn,eg,Cn,kc,Po,qn,Nl,qr,tg,Ol,og,Tc,tt,Nr,ng,Al,sg,rg,Or,ag,di,ig,lg,dg,Ar,cg,Sr,pg,hg,mg,Nn,ug,Pt,Dr,fg,jo,gg,ci,_g,bg,Sl,vg,kg,Tg,On,yg,An,yc,Co,Sn,Dl,Ir,wg,Il,Mg,wc,ot,Lr,$g,qo,Fg,Ll,Bg,Eg,Wl,xg,zg,Pg,Wr,jg,pi,Cg,qg,Ng,Rr,Og,Ur,Ag,Sg,Dg,Dn,Ig,jt,Kr,Lg,No,Wg,hi,Rg,Ug,Rl,Kg,Hg,Qg,In,Vg,Ln,Mc,Oo,Wn,Ul,Hr,Gg,Kl,Yg,$c,nt,Qr,Jg,Vr,Zg,Hl,Xg,e_,t_,Gr,o_,mi,n_,s_,r_,Yr,a_,Jr,i_,l_,d_,Rn,c_,vt,Zr,p_,Ao,h_,ui,m_,u_,Ql,f_,g_,__,Un,b_,Kn,v_,Hn,Fc,So,Qn,Vl,Xr,k_,Gl,T_,Bc,st,ea,y_,ta,w_,Yl,M_,$_,F_,oa,B_,fi,E_,x_,z_,na,P_,sa,j_,C_,q_,Vn,N_,Ct,ra,O_,Do,A_,gi,S_,D_,Jl,I_,L_,W_,Gn,R_,Yn,Ec,Io,Jn,Zl,aa,U_,Xl,K_,xc,rt,ia,H_,ed,Q_,V_,la,G_,_i,Y_,J_,Z_,da,X_,ca,eb,tb,ob,Zn,nb,kt,pa,sb,Lo,rb,bi,ab,ib,td,lb,db,cb,Xn,pb,es,hb,ts,zc,Wo,os,od,ha,mb,nd,ub,Pc,at,ma,fb,sd,gb,_b,ua,bb,vi,vb,kb,Tb,fa,yb,ga,wb,Mb,$b,ns,Fb,qt,_a,Bb,Ro,Eb,ki,xb,zb,rd,Pb,jb,Cb,ss,qb,rs,jc,Uo,as,ad,ba,Nb,id,Ob,Cc,it,va,Ab,ld,Sb,Db,ka,Ib,Ti,Lb,Wb,Rb,Ta,Ub,ya,Kb,Hb,Qb,is,Vb,Tt,wa,Gb,Ko,Yb,yi,Jb,Zb,dd,Xb,ev,tv,ls,ov,ds,nv,cs,qc,Ho,ps,cd,Ma,sv,pd,rv,Nc,lt,$a,av,Qo,iv,hd,lv,dv,md,cv,pv,hv,Fa,mv,wi,uv,fv,gv,Ba,_v,Ea,bv,vv,kv,hs,Tv,yt,xa,yv,Vo,wv,Mi,Mv,$v,ud,Fv,Bv,Ev,ms,xv,us,zv,fs,Oc;return l=new Ze({}),T=new Ze({}),C=new Ze({}),E=new he({props:{name:"class transformers.MobileBertConfig",anchor:"transformers.MobileBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 512"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 4"},{name:"intermediate_size",val:" = 512"},{name:"hidden_act",val:" = 'relu'"},{name:"hidden_dropout_prob",val:" = 0.0"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"embedding_size",val:" = 128"},{name:"trigram_input",val:" = True"},{name:"use_bottleneck",val:" = True"},{name:"intra_bottleneck_size",val:" = 128"},{name:"use_bottleneck_attention",val:" = False"},{name:"key_query_shared_bottleneck",val:" = True"},{name:"num_feedforward_networks",val:" = 4"},{name:"normalization_type",val:" = 'no_norm'"},{name:"classifier_activation",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the MobileBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.MobileBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertModel">MobileBertModel</a> or
<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertModel">TFMobileBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.MobileBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/configuration_mobilebert.py#L31"}}),Jo=new Ve({props:{anchor:"transformers.MobileBertConfig.example",$$slots:{default:[gy]},$$scope:{ctx:z}}}),$s=new Ze({}),Fs=new he({props:{name:"class transformers.MobileBertTokenizer",anchor:"transformers.MobileBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/tokenization_mobilebert.py#L36"}}),Es=new Ze({}),xs=new he({props:{name:"class transformers.MobileBertTokenizerFast",anchor:"transformers.MobileBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/tokenization_mobilebert_fast.py#L40"}}),js=new Ze({}),Cs=new he({props:{name:"class transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L710"}}),Ns=new he({props:{name:"class transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L828"}}),As=new Ze({}),Ss=new he({props:{name:"class transformers.MobileBertModel",anchor:"transformers.MobileBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.MobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L813"}}),Rs=new he({props:{name:"forward",anchor:"transformers.MobileBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L843",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),sn=new Je({props:{$$slots:{default:[_y]},$$scope:{ctx:z}}}),rn=new Ve({props:{anchor:"transformers.MobileBertModel.forward.example",$$slots:{default:[by]},$$scope:{ctx:z}}}),Us=new Ze({}),Ks=new he({props:{name:"class transformers.MobileBertForPreTraining",anchor:"transformers.MobileBertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L927"}}),Gs=new he({props:{name:"forward",anchor:"transformers.MobileBertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"return_dict",val:": typing.Optional[torch.FloatTensor] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForPreTraining.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.MobileBertForPreTraining.forward.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L950",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Je({props:{$$slots:{default:[vy]},$$scope:{ctx:z}}}),dn=new Ve({props:{anchor:"transformers.MobileBertForPreTraining.forward.example",$$slots:{default:[ky]},$$scope:{ctx:z}}}),Ys=new Ze({}),Js=new he({props:{name:"class transformers.MobileBertForMaskedLM",anchor:"transformers.MobileBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1033"}}),or=new he({props:{name:"forward",anchor:"transformers.MobileBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1059",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new Je({props:{$$slots:{default:[Ty]},$$scope:{ctx:z}}}),hn=new Ve({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example",$$slots:{default:[yy]},$$scope:{ctx:z}}}),mn=new Ve({props:{anchor:"transformers.MobileBertForMaskedLM.forward.example-2",$$slots:{default:[wy]},$$scope:{ctx:z}}}),nr=new Ze({}),sr=new he({props:{name:"class transformers.MobileBertForNextSentencePrediction",anchor:"transformers.MobileBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1135"}}),dr=new he({props:{name:"forward",anchor:"transformers.MobileBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>.</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1145",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new Je({props:{$$slots:{default:[My]},$$scope:{ctx:z}}}),gn=new Ve({props:{anchor:"transformers.MobileBertForNextSentencePrediction.forward.example",$$slots:{default:[$y]},$$scope:{ctx:z}}}),cr=new Ze({}),pr=new he({props:{name:"class transformers.MobileBertForSequenceClassification",anchor:"transformers.MobileBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1239"}}),fr=new he({props:{name:"forward",anchor:"transformers.MobileBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1255",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bn=new Je({props:{$$slots:{default:[Fy]},$$scope:{ctx:z}}}),vn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example",$$slots:{default:[By]},$$scope:{ctx:z}}}),kn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-2",$$slots:{default:[Ey]},$$scope:{ctx:z}}}),Tn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-3",$$slots:{default:[xy]},$$scope:{ctx:z}}}),yn=new Ve({props:{anchor:"transformers.MobileBertForSequenceClassification.forward.example-4",$$slots:{default:[zy]},$$scope:{ctx:z}}}),gr=new Ze({}),_r=new he({props:{name:"class transformers.MobileBertForMultipleChoice",anchor:"transformers.MobileBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1452"}}),Tr=new he({props:{name:"forward",anchor:"transformers.MobileBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1466",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new Je({props:{$$slots:{default:[Py]},$$scope:{ctx:z}}}),$n=new Ve({props:{anchor:"transformers.MobileBertForMultipleChoice.forward.example",$$slots:{default:[jy]},$$scope:{ctx:z}}}),yr=new Ze({}),wr=new he({props:{name:"class transformers.MobileBertForTokenClassification",anchor:"transformers.MobileBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1550"}}),Br=new he({props:{name:"forward",anchor:"transformers.MobileBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1568",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new Je({props:{$$slots:{default:[Cy]},$$scope:{ctx:z}}}),En=new Ve({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example",$$slots:{default:[qy]},$$scope:{ctx:z}}}),xn=new Ve({props:{anchor:"transformers.MobileBertForTokenClassification.forward.example-2",$$slots:{default:[Ny]},$$scope:{ctx:z}}}),Er=new Ze({}),xr=new he({props:{name:"class transformers.MobileBertForQuestionAnswering",anchor:"transformers.MobileBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1344"}}),Cr=new he({props:{name:"forward",anchor:"transformers.MobileBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.MobileBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MobileBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_mobilebert.py#L1358",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pn=new Je({props:{$$slots:{default:[Oy]},$$scope:{ctx:z}}}),jn=new Ve({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example",$$slots:{default:[Ay]},$$scope:{ctx:z}}}),Cn=new Ve({props:{anchor:"transformers.MobileBertForQuestionAnswering.forward.example-2",$$slots:{default:[Sy]},$$scope:{ctx:z}}}),qr=new Ze({}),Nr=new he({props:{name:"class transformers.TFMobileBertModel",anchor:"transformers.TFMobileBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L960"}}),Nn=new Je({props:{$$slots:{default:[Dy]},$$scope:{ctx:z}}}),Dr=new he({props:{name:"call",anchor:"transformers.TFMobileBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L965",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),On=new Je({props:{$$slots:{default:[Iy]},$$scope:{ctx:z}}}),An=new Ve({props:{anchor:"transformers.TFMobileBertModel.call.example",$$slots:{default:[Ly]},$$scope:{ctx:z}}}),Ir=new Ze({}),Lr=new he({props:{name:"class transformers.TFMobileBertForPreTraining",anchor:"transformers.TFMobileBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1020"}}),Dn=new Je({props:{$$slots:{default:[Wy]},$$scope:{ctx:z}}}),Kr=new he({props:{name:"call",anchor:"transformers.TFMobileBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1034",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput"
>transformers.models.mobilebert.modeling_tf_mobilebert.TFMobileBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),In=new Je({props:{$$slots:{default:[Ry]},$$scope:{ctx:z}}}),Ln=new Ve({props:{anchor:"transformers.TFMobileBertForPreTraining.call.example",$$slots:{default:[Uy]},$$scope:{ctx:z}}}),Hr=new Ze({}),Qr=new he({props:{name:"class transformers.TFMobileBertForMaskedLM",anchor:"transformers.TFMobileBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1115"}}),Rn=new Je({props:{$$slots:{default:[Ky]},$$scope:{ctx:z}}}),Zr=new he({props:{name:"call",anchor:"transformers.TFMobileBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1136",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Un=new Je({props:{$$slots:{default:[Hy]},$$scope:{ctx:z}}}),Kn=new Ve({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example",$$slots:{default:[Qy]},$$scope:{ctx:z}}}),Hn=new Ve({props:{anchor:"transformers.TFMobileBertForMaskedLM.call.example-2",$$slots:{default:[Vy]},$$scope:{ctx:z}}}),Xr=new Ze({}),ea=new he({props:{name:"class transformers.TFMobileBertForNextSentencePrediction",anchor:"transformers.TFMobileBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1216"}}),Vn=new Je({props:{$$slots:{default:[Gy]},$$scope:{ctx:z}}}),ra=new he({props:{name:"call",anchor:"transformers.TFMobileBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1226",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gn=new Je({props:{$$slots:{default:[Yy]},$$scope:{ctx:z}}}),Yn=new Ve({props:{anchor:"transformers.TFMobileBertForNextSentencePrediction.call.example",$$slots:{default:[Jy]},$$scope:{ctx:z}}}),aa=new Ze({}),ia=new he({props:{name:"class transformers.TFMobileBertForSequenceClassification",anchor:"transformers.TFMobileBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1308"}}),Zn=new Je({props:{$$slots:{default:[Zy]},$$scope:{ctx:z}}}),pa=new he({props:{name:"call",anchor:"transformers.TFMobileBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1331",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new Je({props:{$$slots:{default:[Xy]},$$scope:{ctx:z}}}),es=new Ve({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example",$$slots:{default:[ew]},$$scope:{ctx:z}}}),ts=new Ve({props:{anchor:"transformers.TFMobileBertForSequenceClassification.call.example-2",$$slots:{default:[tw]},$$scope:{ctx:z}}}),ha=new Ze({}),ma=new he({props:{name:"class transformers.TFMobileBertForMultipleChoice",anchor:"transformers.TFMobileBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1515"}}),ns=new Je({props:{$$slots:{default:[ow]},$$scope:{ctx:z}}}),_a=new he({props:{name:"call",anchor:"transformers.TFMobileBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1544",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ss=new Je({props:{$$slots:{default:[nw]},$$scope:{ctx:z}}}),rs=new Ve({props:{anchor:"transformers.TFMobileBertForMultipleChoice.call.example",$$slots:{default:[sw]},$$scope:{ctx:z}}}),ba=new Ze({}),va=new he({props:{name:"class transformers.TFMobileBertForTokenClassification",anchor:"transformers.TFMobileBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1649"}}),is=new Je({props:{$$slots:{default:[rw]},$$scope:{ctx:z}}}),wa=new he({props:{name:"call",anchor:"transformers.TFMobileBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1673",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new Je({props:{$$slots:{default:[aw]},$$scope:{ctx:z}}}),ds=new Ve({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example",$$slots:{default:[iw]},$$scope:{ctx:z}}}),cs=new Ve({props:{anchor:"transformers.TFMobileBertForTokenClassification.call.example-2",$$slots:{default:[lw]},$$scope:{ctx:z}}}),Ma=new Ze({}),$a=new he({props:{name:"class transformers.TFMobileBertForQuestionAnswering",anchor:"transformers.TFMobileBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig">MobileBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1406"}}),hs=new Je({props:{$$slots:{default:[dw]},$$scope:{ctx:z}}}),xa=new he({props:{name:"call",anchor:"transformers.TFMobileBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFMobileBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer">MobileBertTokenizer</a>. See <a href="/docs/transformers/v4.22.1/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMobileBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.1/src/transformers/models/mobilebert/modeling_tf_mobilebert.py#L1425",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertConfig"
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
  href="/docs/transformers/v4.22.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new Je({props:{$$slots:{default:[cw]},$$scope:{ctx:z}}}),us=new Ve({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example",$$slots:{default:[pw]},$$scope:{ctx:z}}}),fs=new Ve({props:{anchor:"transformers.TFMobileBertForQuestionAnswering.call.example-2",$$slots:{default:[hw]},$$scope:{ctx:z}}}),{c(){d=r("meta"),b=h(),c=r("h1"),u=r("a"),k=r("span"),y(l.$$.fragment),p=h(),P=r("span"),ke=o("MobileBERT"),me=h(),D=r("h2"),se=r("a"),X=r("span"),y(T.$$.fragment),Te=h(),K=r("span"),ye=o("Overview"),ue=h(),L=r("p"),we=o("The MobileBERT model was proposed in "),ae=r("a"),H=o("MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),Me=o(` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
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
with a causal language modeling (CLM) objective are better in that regard.`),q=h(),ne=r("p"),V=o("This model was contributed by "),ie=r("a"),xe=o("vshampor"),G=o(". The original code can be found "),le=r("a"),ze=o("here"),A=o("."),be=h(),I=r("h2"),re=r("a"),ee=r("span"),y(C.$$.fragment),Pe=h(),O=r("span"),je=o("MobileBertConfig"),ve=h(),f=r("div"),y(E.$$.fragment),Ie=h(),Y=r("p"),Le=o("This is the configuration class to store the configuration of a "),Oe=r("a"),x=o("MobileBertModel"),We=o(" or a "),Ae=r("a"),Re=o("TFMobileBertModel"),Ue=o(`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=r("a"),S=o("google/mobilebert-uncased"),J=o(" architecture."),Ke=h(),qe=r("p"),Z=o("Configuration objects inherit from "),Se=r("a"),He=o("PretrainedConfig"),Ce=o(` and can be used to control the model outputs. Read the
documentation from `),De=r("a"),oe=o("PretrainedConfig"),Qe=o(" for more information."),Lp=h(),y(Jo.$$.fragment),Wp=h(),Ki=r("p"),Rp=o(`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Jd=h(),io=r("h2"),Zo=r("a"),Hi=r("span"),y($s.$$.fragment),Up=h(),Qi=r("span"),Kp=o("MobileBertTokenizer"),Zd=h(),Mt=r("div"),y(Fs.$$.fragment),Hp=h(),Vi=r("p"),Qp=o("Construct a MobileBERT tokenizer."),Vp=h(),Xo=r("p"),Da=r("a"),Gp=o("MobileBertTokenizer"),Yp=o(" is identical to "),Ia=r("a"),Jp=o("BertTokenizer"),Zp=o(` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),Xp=h(),Bs=r("p"),eh=o("Refer to superclass "),La=r("a"),th=o("BertTokenizer"),oh=o(" for usage examples and documentation concerning parameters."),Xd=h(),lo=r("h2"),en=r("a"),Gi=r("span"),y(Es.$$.fragment),nh=h(),Yi=r("span"),sh=o("MobileBertTokenizerFast"),ec=h(),$t=r("div"),y(xs.$$.fragment),rh=h(),zs=r("p"),ah=o("Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ji=r("em"),ih=o("tokenizers"),lh=o(" library)."),dh=h(),tn=r("p"),Wa=r("a"),ch=o("MobileBertTokenizerFast"),ph=o(" is identical to "),Ra=r("a"),hh=o("BertTokenizerFast"),mh=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),uh=h(),Ps=r("p"),fh=o("Refer to superclass "),Ua=r("a"),gh=o("BertTokenizerFast"),_h=o(" for usage examples and documentation concerning parameters."),tc=h(),co=r("h2"),on=r("a"),Zi=r("span"),y(js.$$.fragment),bh=h(),Xi=r("span"),vh=o("MobileBert specific outputs"),oc=h(),po=r("div"),y(Cs.$$.fragment),kh=h(),qs=r("p"),Th=o("Output type of "),Ka=r("a"),yh=o("MobileBertForPreTraining"),wh=o("."),nc=h(),ho=r("div"),y(Ns.$$.fragment),Mh=h(),Os=r("p"),$h=o("Output type of "),Ha=r("a"),Fh=o("TFMobileBertForPreTraining"),Bh=o("."),sc=h(),mo=r("h2"),nn=r("a"),el=r("span"),y(As.$$.fragment),Eh=h(),tl=r("span"),xh=o("MobileBertModel"),rc=h(),et=r("div"),y(Ss.$$.fragment),zh=h(),ol=r("p"),Ph=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),jh=h(),Ds=r("p"),Ch=o("This model inherits from "),Qa=r("a"),qh=o("PreTrainedModel"),Nh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=h(),Is=r("p"),Ah=o("This model is also a PyTorch "),Ls=r("a"),Sh=o("torch.nn.Module"),Dh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ih=h(),nl=r("p"),Ws=r("a"),Lh=o("https://arxiv.org/pdf/2004.02984.pdf"),Wh=h(),Bt=r("div"),y(Rs.$$.fragment),Rh=h(),uo=r("p"),Uh=o("The "),Va=r("a"),Kh=o("MobileBertModel"),Hh=o(" forward method, overrides the "),sl=r("code"),Qh=o("__call__"),Vh=o(" special method."),Gh=h(),y(sn.$$.fragment),Yh=h(),y(rn.$$.fragment),ac=h(),fo=r("h2"),an=r("a"),rl=r("span"),y(Us.$$.fragment),Jh=h(),al=r("span"),Zh=o("MobileBertForPreTraining"),ic=h(),dt=r("div"),y(Ks.$$.fragment),Xh=h(),go=r("p"),em=o("MobileBert Model with two heads on top as done during the pretraining: a "),il=r("code"),tm=o("masked language modeling"),om=o(` head and a
`),ll=r("code"),nm=o("next sentence prediction (classification)"),sm=o(" head."),rm=h(),Hs=r("p"),am=o("This model inherits from "),Ga=r("a"),im=o("PreTrainedModel"),lm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm=h(),Qs=r("p"),cm=o("This model is also a PyTorch "),Vs=r("a"),pm=o("torch.nn.Module"),hm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mm=h(),Et=r("div"),y(Gs.$$.fragment),um=h(),_o=r("p"),fm=o("The "),Ya=r("a"),gm=o("MobileBertForPreTraining"),_m=o(" forward method, overrides the "),dl=r("code"),bm=o("__call__"),vm=o(" special method."),km=h(),y(ln.$$.fragment),Tm=h(),y(dn.$$.fragment),lc=h(),bo=r("h2"),cn=r("a"),cl=r("span"),y(Ys.$$.fragment),ym=h(),pl=r("span"),wm=o("MobileBertForMaskedLM"),dc=h(),ct=r("div"),y(Js.$$.fragment),Mm=h(),Zs=r("p"),$m=o("MobileBert Model with a "),hl=r("code"),Fm=o("language modeling"),Bm=o(" head on top."),Em=h(),Xs=r("p"),xm=o("This model inherits from "),Ja=r("a"),zm=o("PreTrainedModel"),Pm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jm=h(),er=r("p"),Cm=o("This model is also a PyTorch "),tr=r("a"),qm=o("torch.nn.Module"),Nm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Om=h(),gt=r("div"),y(or.$$.fragment),Am=h(),vo=r("p"),Sm=o("The "),Za=r("a"),Dm=o("MobileBertForMaskedLM"),Im=o(" forward method, overrides the "),ml=r("code"),Lm=o("__call__"),Wm=o(" special method."),Rm=h(),y(pn.$$.fragment),Um=h(),y(hn.$$.fragment),Km=h(),y(mn.$$.fragment),cc=h(),ko=r("h2"),un=r("a"),ul=r("span"),y(nr.$$.fragment),Hm=h(),fl=r("span"),Qm=o("MobileBertForNextSentencePrediction"),pc=h(),pt=r("div"),y(sr.$$.fragment),Vm=h(),rr=r("p"),Gm=o("MobileBert Model with a "),gl=r("code"),Ym=o("next sentence prediction (classification)"),Jm=o(" head on top."),Zm=h(),ar=r("p"),Xm=o("This model inherits from "),Xa=r("a"),eu=o("PreTrainedModel"),tu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ou=h(),ir=r("p"),nu=o("This model is also a PyTorch "),lr=r("a"),su=o("torch.nn.Module"),ru=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au=h(),xt=r("div"),y(dr.$$.fragment),iu=h(),To=r("p"),lu=o("The "),ei=r("a"),du=o("MobileBertForNextSentencePrediction"),cu=o(" forward method, overrides the "),_l=r("code"),pu=o("__call__"),hu=o(" special method."),mu=h(),y(fn.$$.fragment),uu=h(),y(gn.$$.fragment),hc=h(),yo=r("h2"),_n=r("a"),bl=r("span"),y(cr.$$.fragment),fu=h(),vl=r("span"),gu=o("MobileBertForSequenceClassification"),mc=h(),ht=r("div"),y(pr.$$.fragment),_u=h(),kl=r("p"),bu=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vu=h(),hr=r("p"),ku=o("This model inherits from "),ti=r("a"),Tu=o("PreTrainedModel"),yu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wu=h(),mr=r("p"),Mu=o("This model is also a PyTorch "),ur=r("a"),$u=o("torch.nn.Module"),Fu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bu=h(),Xe=r("div"),y(fr.$$.fragment),Eu=h(),wo=r("p"),xu=o("The "),oi=r("a"),zu=o("MobileBertForSequenceClassification"),Pu=o(" forward method, overrides the "),Tl=r("code"),ju=o("__call__"),Cu=o(" special method."),qu=h(),y(bn.$$.fragment),Nu=h(),y(vn.$$.fragment),Ou=h(),y(kn.$$.fragment),Au=h(),y(Tn.$$.fragment),Su=h(),y(yn.$$.fragment),uc=h(),Mo=r("h2"),wn=r("a"),yl=r("span"),y(gr.$$.fragment),Du=h(),wl=r("span"),Iu=o("MobileBertForMultipleChoice"),fc=h(),mt=r("div"),y(_r.$$.fragment),Lu=h(),Ml=r("p"),Wu=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ru=h(),br=r("p"),Uu=o("This model inherits from "),ni=r("a"),Ku=o("PreTrainedModel"),Hu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qu=h(),vr=r("p"),Vu=o("This model is also a PyTorch "),kr=r("a"),Gu=o("torch.nn.Module"),Yu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ju=h(),zt=r("div"),y(Tr.$$.fragment),Zu=h(),$o=r("p"),Xu=o("The "),si=r("a"),ef=o("MobileBertForMultipleChoice"),tf=o(" forward method, overrides the "),$l=r("code"),of=o("__call__"),nf=o(" special method."),sf=h(),y(Mn.$$.fragment),rf=h(),y($n.$$.fragment),gc=h(),Fo=r("h2"),Fn=r("a"),Fl=r("span"),y(yr.$$.fragment),af=h(),Bl=r("span"),lf=o("MobileBertForTokenClassification"),_c=h(),ut=r("div"),y(wr.$$.fragment),df=h(),El=r("p"),cf=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pf=h(),Mr=r("p"),hf=o("This model inherits from "),ri=r("a"),mf=o("PreTrainedModel"),uf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ff=h(),$r=r("p"),gf=o("This model is also a PyTorch "),Fr=r("a"),_f=o("torch.nn.Module"),bf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vf=h(),_t=r("div"),y(Br.$$.fragment),kf=h(),Bo=r("p"),Tf=o("The "),ai=r("a"),yf=o("MobileBertForTokenClassification"),wf=o(" forward method, overrides the "),xl=r("code"),Mf=o("__call__"),$f=o(" special method."),Ff=h(),y(Bn.$$.fragment),Bf=h(),y(En.$$.fragment),Ef=h(),y(xn.$$.fragment),bc=h(),Eo=r("h2"),zn=r("a"),zl=r("span"),y(Er.$$.fragment),xf=h(),Pl=r("span"),zf=o("MobileBertForQuestionAnswering"),vc=h(),ft=r("div"),y(xr.$$.fragment),Pf=h(),xo=r("p"),jf=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),jl=r("code"),Cf=o("span start logits"),qf=o(" and "),Cl=r("code"),Nf=o("span end logits"),Of=o(")."),Af=h(),zr=r("p"),Sf=o("This model inherits from "),ii=r("a"),Df=o("PreTrainedModel"),If=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lf=h(),Pr=r("p"),Wf=o("This model is also a PyTorch "),jr=r("a"),Rf=o("torch.nn.Module"),Uf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf=h(),bt=r("div"),y(Cr.$$.fragment),Hf=h(),zo=r("p"),Qf=o("The "),li=r("a"),Vf=o("MobileBertForQuestionAnswering"),Gf=o(" forward method, overrides the "),ql=r("code"),Yf=o("__call__"),Jf=o(" special method."),Zf=h(),y(Pn.$$.fragment),Xf=h(),y(jn.$$.fragment),eg=h(),y(Cn.$$.fragment),kc=h(),Po=r("h2"),qn=r("a"),Nl=r("span"),y(qr.$$.fragment),tg=h(),Ol=r("span"),og=o("TFMobileBertModel"),Tc=h(),tt=r("div"),y(Nr.$$.fragment),ng=h(),Al=r("p"),sg=o("The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),rg=h(),Or=r("p"),ag=o("This model inherits from "),di=r("a"),ig=o("TFPreTrainedModel"),lg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dg=h(),Ar=r("p"),cg=o("This model is also a "),Sr=r("a"),pg=o("tf.keras.Model"),hg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mg=h(),y(Nn.$$.fragment),ug=h(),Pt=r("div"),y(Dr.$$.fragment),fg=h(),jo=r("p"),gg=o("The "),ci=r("a"),_g=o("TFMobileBertModel"),bg=o(" forward method, overrides the "),Sl=r("code"),vg=o("__call__"),kg=o(" special method."),Tg=h(),y(On.$$.fragment),yg=h(),y(An.$$.fragment),yc=h(),Co=r("h2"),Sn=r("a"),Dl=r("span"),y(Ir.$$.fragment),wg=h(),Il=r("span"),Mg=o("TFMobileBertForPreTraining"),wc=h(),ot=r("div"),y(Lr.$$.fragment),$g=h(),qo=r("p"),Fg=o("MobileBert Model with two heads on top as done during the pretraining: a "),Ll=r("code"),Bg=o("masked language modeling"),Eg=o(` head and a
`),Wl=r("code"),xg=o("next sentence prediction (classification)"),zg=o(" head."),Pg=h(),Wr=r("p"),jg=o("This model inherits from "),pi=r("a"),Cg=o("TFPreTrainedModel"),qg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=h(),Rr=r("p"),Og=o("This model is also a "),Ur=r("a"),Ag=o("tf.keras.Model"),Sg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dg=h(),y(Dn.$$.fragment),Ig=h(),jt=r("div"),y(Kr.$$.fragment),Lg=h(),No=r("p"),Wg=o("The "),hi=r("a"),Rg=o("TFMobileBertForPreTraining"),Ug=o(" forward method, overrides the "),Rl=r("code"),Kg=o("__call__"),Hg=o(" special method."),Qg=h(),y(In.$$.fragment),Vg=h(),y(Ln.$$.fragment),Mc=h(),Oo=r("h2"),Wn=r("a"),Ul=r("span"),y(Hr.$$.fragment),Gg=h(),Kl=r("span"),Yg=o("TFMobileBertForMaskedLM"),$c=h(),nt=r("div"),y(Qr.$$.fragment),Jg=h(),Vr=r("p"),Zg=o("MobileBert Model with a "),Hl=r("code"),Xg=o("language modeling"),e_=o(" head on top."),t_=h(),Gr=r("p"),o_=o("This model inherits from "),mi=r("a"),n_=o("TFPreTrainedModel"),s_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),r_=h(),Yr=r("p"),a_=o("This model is also a "),Jr=r("a"),i_=o("tf.keras.Model"),l_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),d_=h(),y(Rn.$$.fragment),c_=h(),vt=r("div"),y(Zr.$$.fragment),p_=h(),Ao=r("p"),h_=o("The "),ui=r("a"),m_=o("TFMobileBertForMaskedLM"),u_=o(" forward method, overrides the "),Ql=r("code"),f_=o("__call__"),g_=o(" special method."),__=h(),y(Un.$$.fragment),b_=h(),y(Kn.$$.fragment),v_=h(),y(Hn.$$.fragment),Fc=h(),So=r("h2"),Qn=r("a"),Vl=r("span"),y(Xr.$$.fragment),k_=h(),Gl=r("span"),T_=o("TFMobileBertForNextSentencePrediction"),Bc=h(),st=r("div"),y(ea.$$.fragment),y_=h(),ta=r("p"),w_=o("MobileBert Model with a "),Yl=r("code"),M_=o("next sentence prediction (classification)"),$_=o(" head on top."),F_=h(),oa=r("p"),B_=o("This model inherits from "),fi=r("a"),E_=o("TFPreTrainedModel"),x_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),z_=h(),na=r("p"),P_=o("This model is also a "),sa=r("a"),j_=o("tf.keras.Model"),C_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=h(),y(Vn.$$.fragment),N_=h(),Ct=r("div"),y(ra.$$.fragment),O_=h(),Do=r("p"),A_=o("The "),gi=r("a"),S_=o("TFMobileBertForNextSentencePrediction"),D_=o(" forward method, overrides the "),Jl=r("code"),I_=o("__call__"),L_=o(" special method."),W_=h(),y(Gn.$$.fragment),R_=h(),y(Yn.$$.fragment),Ec=h(),Io=r("h2"),Jn=r("a"),Zl=r("span"),y(aa.$$.fragment),U_=h(),Xl=r("span"),K_=o("TFMobileBertForSequenceClassification"),xc=h(),rt=r("div"),y(ia.$$.fragment),H_=h(),ed=r("p"),Q_=o(`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),V_=h(),la=r("p"),G_=o("This model inherits from "),_i=r("a"),Y_=o("TFPreTrainedModel"),J_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=h(),da=r("p"),X_=o("This model is also a "),ca=r("a"),eb=o("tf.keras.Model"),tb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ob=h(),y(Zn.$$.fragment),nb=h(),kt=r("div"),y(pa.$$.fragment),sb=h(),Lo=r("p"),rb=o("The "),bi=r("a"),ab=o("TFMobileBertForSequenceClassification"),ib=o(" forward method, overrides the "),td=r("code"),lb=o("__call__"),db=o(" special method."),cb=h(),y(Xn.$$.fragment),pb=h(),y(es.$$.fragment),hb=h(),y(ts.$$.fragment),zc=h(),Wo=r("h2"),os=r("a"),od=r("span"),y(ha.$$.fragment),mb=h(),nd=r("span"),ub=o("TFMobileBertForMultipleChoice"),Pc=h(),at=r("div"),y(ma.$$.fragment),fb=h(),sd=r("p"),gb=o(`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),_b=h(),ua=r("p"),bb=o("This model inherits from "),vi=r("a"),vb=o("TFPreTrainedModel"),kb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tb=h(),fa=r("p"),yb=o("This model is also a "),ga=r("a"),wb=o("tf.keras.Model"),Mb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$b=h(),y(ns.$$.fragment),Fb=h(),qt=r("div"),y(_a.$$.fragment),Bb=h(),Ro=r("p"),Eb=o("The "),ki=r("a"),xb=o("TFMobileBertForMultipleChoice"),zb=o(" forward method, overrides the "),rd=r("code"),Pb=o("__call__"),jb=o(" special method."),Cb=h(),y(ss.$$.fragment),qb=h(),y(rs.$$.fragment),jc=h(),Uo=r("h2"),as=r("a"),ad=r("span"),y(ba.$$.fragment),Nb=h(),id=r("span"),Ob=o("TFMobileBertForTokenClassification"),Cc=h(),it=r("div"),y(va.$$.fragment),Ab=h(),ld=r("p"),Sb=o(`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Db=h(),ka=r("p"),Ib=o("This model inherits from "),Ti=r("a"),Lb=o("TFPreTrainedModel"),Wb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rb=h(),Ta=r("p"),Ub=o("This model is also a "),ya=r("a"),Kb=o("tf.keras.Model"),Hb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qb=h(),y(is.$$.fragment),Vb=h(),Tt=r("div"),y(wa.$$.fragment),Gb=h(),Ko=r("p"),Yb=o("The "),yi=r("a"),Jb=o("TFMobileBertForTokenClassification"),Zb=o(" forward method, overrides the "),dd=r("code"),Xb=o("__call__"),ev=o(" special method."),tv=h(),y(ls.$$.fragment),ov=h(),y(ds.$$.fragment),nv=h(),y(cs.$$.fragment),qc=h(),Ho=r("h2"),ps=r("a"),cd=r("span"),y(Ma.$$.fragment),sv=h(),pd=r("span"),rv=o("TFMobileBertForQuestionAnswering"),Nc=h(),lt=r("div"),y($a.$$.fragment),av=h(),Qo=r("p"),iv=o(`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),hd=r("code"),lv=o("span start logits"),dv=o(" and "),md=r("code"),cv=o("span end logits"),pv=o(")."),hv=h(),Fa=r("p"),mv=o("This model inherits from "),wi=r("a"),uv=o("TFPreTrainedModel"),fv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv=h(),Ba=r("p"),_v=o("This model is also a "),Ea=r("a"),bv=o("tf.keras.Model"),vv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kv=h(),y(hs.$$.fragment),Tv=h(),yt=r("div"),y(xa.$$.fragment),yv=h(),Vo=r("p"),wv=o("The "),Mi=r("a"),Mv=o("TFMobileBertForQuestionAnswering"),$v=o(" forward method, overrides the "),ud=r("code"),Fv=o("__call__"),Bv=o(" special method."),Ev=h(),y(ms.$$.fragment),xv=h(),y(us.$$.fragment),zv=h(),y(fs.$$.fragment),this.h()},l(s){const v=uy('[data-svelte="svelte-1phssyn"]',document.head);d=a(v,"META",{name:!0,content:!0}),v.forEach(t),b=m(s),c=a(s,"H1",{class:!0});var za=i(c);u=a(za,"A",{id:!0,class:!0,href:!0});var fd=i(u);k=a(fd,"SPAN",{});var gd=i(k);w(l.$$.fragment,gd),gd.forEach(t),fd.forEach(t),p=m(za),P=a(za,"SPAN",{});var _d=i(P);ke=n(_d,"MobileBERT"),_d.forEach(t),za.forEach(t),me=m(s),D=a(s,"H2",{class:!0});var Pa=i(D);se=a(Pa,"A",{id:!0,class:!0,href:!0});var bd=i(se);X=a(bd,"SPAN",{});var vd=i(X);w(T.$$.fragment,vd),vd.forEach(t),bd.forEach(t),Te=m(Pa),K=a(Pa,"SPAN",{});var kd=i(K);ye=n(kd,"Overview"),kd.forEach(t),Pa.forEach(t),ue=m(s),L=a(s,"P",{});var ja=i(L);we=n(ja,"The MobileBERT model was proposed in "),ae=a(ja,"A",{href:!0,rel:!0});var Td=i(ae);H=n(Td,"MobileBERT: a Compact Task-Agnostic BERT for Resource-Limited Devices"),Td.forEach(t),Me=n(ja,` by Zhiqing Sun, Hongkun Yu, Xiaodan Song, Renjie Liu, Yiming Yang, and Denny
Zhou. It\u2019s a bidirectional transformer based on the BERT model, which is compressed and accelerated using several
approaches.`),ja.forEach(t),fe=m(s),R=a(s,"P",{});var yd=i(R);$e=n(yd,"The abstract from the paper is the following:"),yd.forEach(t),ge=m(s),U=a(s,"P",{});var wd=i(U);de=a(wd,"EM",{});var Md=i(de);Fe=n(Md,`Natural Language Processing (NLP) has recently achieved great success by using huge pre-trained models with hundreds
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
90.0/79.2 (1.5/2.1 higher than BERT_BASE).`),Md.forEach(t),wd.forEach(t),te=m(s),j=a(s,"P",{});var $d=i(j);N=n($d,"Tips:"),$d.forEach(t),_e=m(s),W=a(s,"UL",{});var Ca=i(W);ce=a(Ca,"LI",{});var Fd=i(ce);Be=n(Fd,`MobileBERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather
than the left.`),Fd.forEach(t),Q=m(Ca),pe=a(Ca,"LI",{});var Bd=i(pe);Ee=n(Bd,`MobileBERT is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),Bd.forEach(t),Ca.forEach(t),q=m(s),ne=a(s,"P",{});var Go=i(ne);V=n(Go,"This model was contributed by "),ie=a(Go,"A",{href:!0,rel:!0});var Ed=i(ie);xe=n(Ed,"vshampor"),Ed.forEach(t),G=n(Go,". The original code can be found "),le=a(Go,"A",{href:!0,rel:!0});var xd=i(le);ze=n(xd,"here"),xd.forEach(t),A=n(Go,"."),Go.forEach(t),be=m(s),I=a(s,"H2",{class:!0});var qa=i(I);re=a(qa,"A",{id:!0,class:!0,href:!0});var zd=i(re);ee=a(zd,"SPAN",{});var Pd=i(ee);w(C.$$.fragment,Pd),Pd.forEach(t),zd.forEach(t),Pe=m(qa),O=a(qa,"SPAN",{});var jd=i(O);je=n(jd,"MobileBertConfig"),jd.forEach(t),qa.forEach(t),ve=m(s),f=a(s,"DIV",{class:!0});var Ft=i(f);w(E.$$.fragment,Ft),Ie=m(Ft),Y=a(Ft,"P",{});var Ut=i(Y);Le=n(Ut,"This is the configuration class to store the configuration of a "),Oe=a(Ut,"A",{href:!0});var Cd=i(Oe);x=n(Cd,"MobileBertModel"),Cd.forEach(t),We=n(Ut," or a "),Ae=a(Ut,"A",{href:!0});var qd=i(Ae);Re=n(qd,"TFMobileBertModel"),qd.forEach(t),Ue=n(Ut,`. It
is used to instantiate a MobileBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the MobileBERT
`),Ne=a(Ut,"A",{href:!0,rel:!0});var Nd=i(Ne);S=n(Nd,"google/mobilebert-uncased"),Nd.forEach(t),J=n(Ut," architecture."),Ut.forEach(t),Ke=m(Ft),qe=a(Ft,"P",{});var Yo=i(qe);Z=n(Yo,"Configuration objects inherit from "),Se=a(Yo,"A",{href:!0});var Od=i(Se);He=n(Od,"PretrainedConfig"),Od.forEach(t),Ce=n(Yo,` and can be used to control the model outputs. Read the
documentation from `),De=a(Yo,"A",{href:!0});var Ad=i(De);oe=n(Ad,"PretrainedConfig"),Ad.forEach(t),Qe=n(Yo," for more information."),Yo.forEach(t),Lp=m(Ft),w(Jo.$$.fragment,Ft),Wp=m(Ft),Ki=a(Ft,"P",{});var Sd=i(Ki);Rp=n(Sd,`Attributes: pretrained_config_archive_map (Dict[str, str]): A dictionary containing all the available pre-trained
checkpoints.`),Sd.forEach(t),Ft.forEach(t),Jd=m(s),io=a(s,"H2",{class:!0});var Na=i(io);Zo=a(Na,"A",{id:!0,class:!0,href:!0});var Dd=i(Zo);Hi=a(Dd,"SPAN",{});var Id=i(Hi);w($s.$$.fragment,Id),Id.forEach(t),Dd.forEach(t),Up=m(Na),Qi=a(Na,"SPAN",{});var Ld=i(Qi);Kp=n(Ld,"MobileBertTokenizer"),Ld.forEach(t),Na.forEach(t),Zd=m(s),Mt=a(s,"DIV",{class:!0});var Kt=i(Mt);w(Fs.$$.fragment,Kt),Hp=m(Kt),Vi=a(Kt,"P",{});var Wd=i(Vi);Qp=n(Wd,"Construct a MobileBERT tokenizer."),Wd.forEach(t),Vp=m(Kt),Xo=a(Kt,"P",{});var gs=i(Xo);Da=a(gs,"A",{href:!0});var Rd=i(Da);Gp=n(Rd,"MobileBertTokenizer"),Rd.forEach(t),Yp=n(gs," is identical to "),Ia=a(gs,"A",{href:!0});var Ud=i(Ia);Jp=n(Ud,"BertTokenizer"),Ud.forEach(t),Zp=n(gs,` and runs end-to-end tokenization: punctuation splitting
and wordpiece.`),gs.forEach(t),Xp=m(Kt),Bs=a(Kt,"P",{});var Oa=i(Bs);eh=n(Oa,"Refer to superclass "),La=a(Oa,"A",{href:!0});var Kd=i(La);th=n(Kd,"BertTokenizer"),Kd.forEach(t),oh=n(Oa," for usage examples and documentation concerning parameters."),Oa.forEach(t),Kt.forEach(t),Xd=m(s),lo=a(s,"H2",{class:!0});var Aa=i(lo);en=a(Aa,"A",{id:!0,class:!0,href:!0});var Hd=i(en);Gi=a(Hd,"SPAN",{});var Qd=i(Gi);w(Es.$$.fragment,Qd),Qd.forEach(t),Hd.forEach(t),nh=m(Aa),Yi=a(Aa,"SPAN",{});var Vd=i(Yi);sh=n(Vd,"MobileBertTokenizerFast"),Vd.forEach(t),Aa.forEach(t),ec=m(s),$t=a(s,"DIV",{class:!0});var Ht=i($t);w(xs.$$.fragment,Ht),rh=m(Ht),zs=a(Ht,"P",{});var Sa=i(zs);ah=n(Sa,"Construct a \u201Cfast\u201D MobileBERT tokenizer (backed by HuggingFace\u2019s "),Ji=a(Sa,"EM",{});var Gd=i(Ji);ih=n(Gd,"tokenizers"),Gd.forEach(t),lh=n(Sa," library)."),Sa.forEach(t),dh=m(Ht),tn=a(Ht,"P",{});var Yd=i(tn);Wa=a(Yd,"A",{href:!0});var Pv=i(Wa);ch=n(Pv,"MobileBertTokenizerFast"),Pv.forEach(t),ph=n(Yd," is identical to "),Ra=a(Yd,"A",{href:!0});var jv=i(Ra);hh=n(jv,"BertTokenizerFast"),jv.forEach(t),mh=n(Yd,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Yd.forEach(t),uh=m(Ht),Ps=a(Ht,"P",{});var Ac=i(Ps);fh=n(Ac,"Refer to superclass "),Ua=a(Ac,"A",{href:!0});var Cv=i(Ua);gh=n(Cv,"BertTokenizerFast"),Cv.forEach(t),_h=n(Ac," for usage examples and documentation concerning parameters."),Ac.forEach(t),Ht.forEach(t),tc=m(s),co=a(s,"H2",{class:!0});var Sc=i(co);on=a(Sc,"A",{id:!0,class:!0,href:!0});var qv=i(on);Zi=a(qv,"SPAN",{});var Nv=i(Zi);w(js.$$.fragment,Nv),Nv.forEach(t),qv.forEach(t),bh=m(Sc),Xi=a(Sc,"SPAN",{});var Ov=i(Xi);vh=n(Ov,"MobileBert specific outputs"),Ov.forEach(t),Sc.forEach(t),oc=m(s),po=a(s,"DIV",{class:!0});var Dc=i(po);w(Cs.$$.fragment,Dc),kh=m(Dc),qs=a(Dc,"P",{});var Ic=i(qs);Th=n(Ic,"Output type of "),Ka=a(Ic,"A",{href:!0});var Av=i(Ka);yh=n(Av,"MobileBertForPreTraining"),Av.forEach(t),wh=n(Ic,"."),Ic.forEach(t),Dc.forEach(t),nc=m(s),ho=a(s,"DIV",{class:!0});var Lc=i(ho);w(Ns.$$.fragment,Lc),Mh=m(Lc),Os=a(Lc,"P",{});var Wc=i(Os);$h=n(Wc,"Output type of "),Ha=a(Wc,"A",{href:!0});var Sv=i(Ha);Fh=n(Sv,"TFMobileBertForPreTraining"),Sv.forEach(t),Bh=n(Wc,"."),Wc.forEach(t),Lc.forEach(t),sc=m(s),mo=a(s,"H2",{class:!0});var Rc=i(mo);nn=a(Rc,"A",{id:!0,class:!0,href:!0});var Dv=i(nn);el=a(Dv,"SPAN",{});var Iv=i(el);w(As.$$.fragment,Iv),Iv.forEach(t),Dv.forEach(t),Eh=m(Rc),tl=a(Rc,"SPAN",{});var Lv=i(tl);xh=n(Lv,"MobileBertModel"),Lv.forEach(t),Rc.forEach(t),rc=m(s),et=a(s,"DIV",{class:!0});var Nt=i(et);w(Ss.$$.fragment,Nt),zh=m(Nt),ol=a(Nt,"P",{});var Wv=i(ol);Ph=n(Wv,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),Wv.forEach(t),jh=m(Nt),Ds=a(Nt,"P",{});var Uc=i(Ds);Ch=n(Uc,"This model inherits from "),Qa=a(Uc,"A",{href:!0});var Rv=i(Qa);qh=n(Rv,"PreTrainedModel"),Rv.forEach(t),Nh=n(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Oh=m(Nt),Is=a(Nt,"P",{});var Kc=i(Is);Ah=n(Kc,"This model is also a PyTorch "),Ls=a(Kc,"A",{href:!0,rel:!0});var Uv=i(Ls);Sh=n(Uv,"torch.nn.Module"),Uv.forEach(t),Dh=n(Kc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc.forEach(t),Ih=m(Nt),nl=a(Nt,"P",{});var Kv=i(nl);Ws=a(Kv,"A",{href:!0,rel:!0});var Hv=i(Ws);Lh=n(Hv,"https://arxiv.org/pdf/2004.02984.pdf"),Hv.forEach(t),Kv.forEach(t),Wh=m(Nt),Bt=a(Nt,"DIV",{class:!0});var _s=i(Bt);w(Rs.$$.fragment,_s),Rh=m(_s),uo=a(_s,"P",{});var $i=i(uo);Uh=n($i,"The "),Va=a($i,"A",{href:!0});var Qv=i(Va);Kh=n(Qv,"MobileBertModel"),Qv.forEach(t),Hh=n($i," forward method, overrides the "),sl=a($i,"CODE",{});var Vv=i(sl);Qh=n(Vv,"__call__"),Vv.forEach(t),Vh=n($i," special method."),$i.forEach(t),Gh=m(_s),w(sn.$$.fragment,_s),Yh=m(_s),w(rn.$$.fragment,_s),_s.forEach(t),Nt.forEach(t),ac=m(s),fo=a(s,"H2",{class:!0});var Hc=i(fo);an=a(Hc,"A",{id:!0,class:!0,href:!0});var Gv=i(an);rl=a(Gv,"SPAN",{});var Yv=i(rl);w(Us.$$.fragment,Yv),Yv.forEach(t),Gv.forEach(t),Jh=m(Hc),al=a(Hc,"SPAN",{});var Jv=i(al);Zh=n(Jv,"MobileBertForPreTraining"),Jv.forEach(t),Hc.forEach(t),ic=m(s),dt=a(s,"DIV",{class:!0});var Qt=i(dt);w(Ks.$$.fragment,Qt),Xh=m(Qt),go=a(Qt,"P",{});var Fi=i(go);em=n(Fi,"MobileBert Model with two heads on top as done during the pretraining: a "),il=a(Fi,"CODE",{});var Zv=i(il);tm=n(Zv,"masked language modeling"),Zv.forEach(t),om=n(Fi,` head and a
`),ll=a(Fi,"CODE",{});var Xv=i(ll);nm=n(Xv,"next sentence prediction (classification)"),Xv.forEach(t),sm=n(Fi," head."),Fi.forEach(t),rm=m(Qt),Hs=a(Qt,"P",{});var Qc=i(Hs);am=n(Qc,"This model inherits from "),Ga=a(Qc,"A",{href:!0});var ek=i(Ga);im=n(ek,"PreTrainedModel"),ek.forEach(t),lm=n(Qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc.forEach(t),dm=m(Qt),Qs=a(Qt,"P",{});var Vc=i(Qs);cm=n(Vc,"This model is also a PyTorch "),Vs=a(Vc,"A",{href:!0,rel:!0});var tk=i(Vs);pm=n(tk,"torch.nn.Module"),tk.forEach(t),hm=n(Vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Vc.forEach(t),mm=m(Qt),Et=a(Qt,"DIV",{class:!0});var bs=i(Et);w(Gs.$$.fragment,bs),um=m(bs),_o=a(bs,"P",{});var Bi=i(_o);fm=n(Bi,"The "),Ya=a(Bi,"A",{href:!0});var ok=i(Ya);gm=n(ok,"MobileBertForPreTraining"),ok.forEach(t),_m=n(Bi," forward method, overrides the "),dl=a(Bi,"CODE",{});var nk=i(dl);bm=n(nk,"__call__"),nk.forEach(t),vm=n(Bi," special method."),Bi.forEach(t),km=m(bs),w(ln.$$.fragment,bs),Tm=m(bs),w(dn.$$.fragment,bs),bs.forEach(t),Qt.forEach(t),lc=m(s),bo=a(s,"H2",{class:!0});var Gc=i(bo);cn=a(Gc,"A",{id:!0,class:!0,href:!0});var sk=i(cn);cl=a(sk,"SPAN",{});var rk=i(cl);w(Ys.$$.fragment,rk),rk.forEach(t),sk.forEach(t),ym=m(Gc),pl=a(Gc,"SPAN",{});var ak=i(pl);wm=n(ak,"MobileBertForMaskedLM"),ak.forEach(t),Gc.forEach(t),dc=m(s),ct=a(s,"DIV",{class:!0});var Vt=i(ct);w(Js.$$.fragment,Vt),Mm=m(Vt),Zs=a(Vt,"P",{});var Yc=i(Zs);$m=n(Yc,"MobileBert Model with a "),hl=a(Yc,"CODE",{});var ik=i(hl);Fm=n(ik,"language modeling"),ik.forEach(t),Bm=n(Yc," head on top."),Yc.forEach(t),Em=m(Vt),Xs=a(Vt,"P",{});var Jc=i(Xs);xm=n(Jc,"This model inherits from "),Ja=a(Jc,"A",{href:!0});var lk=i(Ja);zm=n(lk,"PreTrainedModel"),lk.forEach(t),Pm=n(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(t),jm=m(Vt),er=a(Vt,"P",{});var Zc=i(er);Cm=n(Zc,"This model is also a PyTorch "),tr=a(Zc,"A",{href:!0,rel:!0});var dk=i(tr);qm=n(dk,"torch.nn.Module"),dk.forEach(t),Nm=n(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Om=m(Vt),gt=a(Vt,"DIV",{class:!0});var Gt=i(gt);w(or.$$.fragment,Gt),Am=m(Gt),vo=a(Gt,"P",{});var Ei=i(vo);Sm=n(Ei,"The "),Za=a(Ei,"A",{href:!0});var ck=i(Za);Dm=n(ck,"MobileBertForMaskedLM"),ck.forEach(t),Im=n(Ei," forward method, overrides the "),ml=a(Ei,"CODE",{});var pk=i(ml);Lm=n(pk,"__call__"),pk.forEach(t),Wm=n(Ei," special method."),Ei.forEach(t),Rm=m(Gt),w(pn.$$.fragment,Gt),Um=m(Gt),w(hn.$$.fragment,Gt),Km=m(Gt),w(mn.$$.fragment,Gt),Gt.forEach(t),Vt.forEach(t),cc=m(s),ko=a(s,"H2",{class:!0});var Xc=i(ko);un=a(Xc,"A",{id:!0,class:!0,href:!0});var hk=i(un);ul=a(hk,"SPAN",{});var mk=i(ul);w(nr.$$.fragment,mk),mk.forEach(t),hk.forEach(t),Hm=m(Xc),fl=a(Xc,"SPAN",{});var uk=i(fl);Qm=n(uk,"MobileBertForNextSentencePrediction"),uk.forEach(t),Xc.forEach(t),pc=m(s),pt=a(s,"DIV",{class:!0});var Yt=i(pt);w(sr.$$.fragment,Yt),Vm=m(Yt),rr=a(Yt,"P",{});var ep=i(rr);Gm=n(ep,"MobileBert Model with a "),gl=a(ep,"CODE",{});var fk=i(gl);Ym=n(fk,"next sentence prediction (classification)"),fk.forEach(t),Jm=n(ep," head on top."),ep.forEach(t),Zm=m(Yt),ar=a(Yt,"P",{});var tp=i(ar);Xm=n(tp,"This model inherits from "),Xa=a(tp,"A",{href:!0});var gk=i(Xa);eu=n(gk,"PreTrainedModel"),gk.forEach(t),tu=n(tp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tp.forEach(t),ou=m(Yt),ir=a(Yt,"P",{});var op=i(ir);nu=n(op,"This model is also a PyTorch "),lr=a(op,"A",{href:!0,rel:!0});var _k=i(lr);su=n(_k,"torch.nn.Module"),_k.forEach(t),ru=n(op,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),op.forEach(t),au=m(Yt),xt=a(Yt,"DIV",{class:!0});var vs=i(xt);w(dr.$$.fragment,vs),iu=m(vs),To=a(vs,"P",{});var xi=i(To);lu=n(xi,"The "),ei=a(xi,"A",{href:!0});var bk=i(ei);du=n(bk,"MobileBertForNextSentencePrediction"),bk.forEach(t),cu=n(xi," forward method, overrides the "),_l=a(xi,"CODE",{});var vk=i(_l);pu=n(vk,"__call__"),vk.forEach(t),hu=n(xi," special method."),xi.forEach(t),mu=m(vs),w(fn.$$.fragment,vs),uu=m(vs),w(gn.$$.fragment,vs),vs.forEach(t),Yt.forEach(t),hc=m(s),yo=a(s,"H2",{class:!0});var np=i(yo);_n=a(np,"A",{id:!0,class:!0,href:!0});var kk=i(_n);bl=a(kk,"SPAN",{});var Tk=i(bl);w(cr.$$.fragment,Tk),Tk.forEach(t),kk.forEach(t),fu=m(np),vl=a(np,"SPAN",{});var yk=i(vl);gu=n(yk,"MobileBertForSequenceClassification"),yk.forEach(t),np.forEach(t),mc=m(s),ht=a(s,"DIV",{class:!0});var Jt=i(ht);w(pr.$$.fragment,Jt),_u=m(Jt),kl=a(Jt,"P",{});var wk=i(kl);bu=n(wk,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),wk.forEach(t),vu=m(Jt),hr=a(Jt,"P",{});var sp=i(hr);ku=n(sp,"This model inherits from "),ti=a(sp,"A",{href:!0});var Mk=i(ti);Tu=n(Mk,"PreTrainedModel"),Mk.forEach(t),yu=n(sp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sp.forEach(t),wu=m(Jt),mr=a(Jt,"P",{});var rp=i(mr);Mu=n(rp,"This model is also a PyTorch "),ur=a(rp,"A",{href:!0,rel:!0});var $k=i(ur);$u=n($k,"torch.nn.Module"),$k.forEach(t),Fu=n(rp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp.forEach(t),Bu=m(Jt),Xe=a(Jt,"DIV",{class:!0});var wt=i(Xe);w(fr.$$.fragment,wt),Eu=m(wt),wo=a(wt,"P",{});var zi=i(wo);xu=n(zi,"The "),oi=a(zi,"A",{href:!0});var Fk=i(oi);zu=n(Fk,"MobileBertForSequenceClassification"),Fk.forEach(t),Pu=n(zi," forward method, overrides the "),Tl=a(zi,"CODE",{});var Bk=i(Tl);ju=n(Bk,"__call__"),Bk.forEach(t),Cu=n(zi," special method."),zi.forEach(t),qu=m(wt),w(bn.$$.fragment,wt),Nu=m(wt),w(vn.$$.fragment,wt),Ou=m(wt),w(kn.$$.fragment,wt),Au=m(wt),w(Tn.$$.fragment,wt),Su=m(wt),w(yn.$$.fragment,wt),wt.forEach(t),Jt.forEach(t),uc=m(s),Mo=a(s,"H2",{class:!0});var ap=i(Mo);wn=a(ap,"A",{id:!0,class:!0,href:!0});var Ek=i(wn);yl=a(Ek,"SPAN",{});var xk=i(yl);w(gr.$$.fragment,xk),xk.forEach(t),Ek.forEach(t),Du=m(ap),wl=a(ap,"SPAN",{});var zk=i(wl);Iu=n(zk,"MobileBertForMultipleChoice"),zk.forEach(t),ap.forEach(t),fc=m(s),mt=a(s,"DIV",{class:!0});var Zt=i(mt);w(_r.$$.fragment,Zt),Lu=m(Zt),Ml=a(Zt,"P",{});var Pk=i(Ml);Wu=n(Pk,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Pk.forEach(t),Ru=m(Zt),br=a(Zt,"P",{});var ip=i(br);Uu=n(ip,"This model inherits from "),ni=a(ip,"A",{href:!0});var jk=i(ni);Ku=n(jk,"PreTrainedModel"),jk.forEach(t),Hu=n(ip,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ip.forEach(t),Qu=m(Zt),vr=a(Zt,"P",{});var lp=i(vr);Vu=n(lp,"This model is also a PyTorch "),kr=a(lp,"A",{href:!0,rel:!0});var Ck=i(kr);Gu=n(Ck,"torch.nn.Module"),Ck.forEach(t),Yu=n(lp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lp.forEach(t),Ju=m(Zt),zt=a(Zt,"DIV",{class:!0});var ks=i(zt);w(Tr.$$.fragment,ks),Zu=m(ks),$o=a(ks,"P",{});var Pi=i($o);Xu=n(Pi,"The "),si=a(Pi,"A",{href:!0});var qk=i(si);ef=n(qk,"MobileBertForMultipleChoice"),qk.forEach(t),tf=n(Pi," forward method, overrides the "),$l=a(Pi,"CODE",{});var Nk=i($l);of=n(Nk,"__call__"),Nk.forEach(t),nf=n(Pi," special method."),Pi.forEach(t),sf=m(ks),w(Mn.$$.fragment,ks),rf=m(ks),w($n.$$.fragment,ks),ks.forEach(t),Zt.forEach(t),gc=m(s),Fo=a(s,"H2",{class:!0});var dp=i(Fo);Fn=a(dp,"A",{id:!0,class:!0,href:!0});var Ok=i(Fn);Fl=a(Ok,"SPAN",{});var Ak=i(Fl);w(yr.$$.fragment,Ak),Ak.forEach(t),Ok.forEach(t),af=m(dp),Bl=a(dp,"SPAN",{});var Sk=i(Bl);lf=n(Sk,"MobileBertForTokenClassification"),Sk.forEach(t),dp.forEach(t),_c=m(s),ut=a(s,"DIV",{class:!0});var Xt=i(ut);w(wr.$$.fragment,Xt),df=m(Xt),El=a(Xt,"P",{});var Dk=i(El);cf=n(Dk,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Dk.forEach(t),pf=m(Xt),Mr=a(Xt,"P",{});var cp=i(Mr);hf=n(cp,"This model inherits from "),ri=a(cp,"A",{href:!0});var Ik=i(ri);mf=n(Ik,"PreTrainedModel"),Ik.forEach(t),uf=n(cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cp.forEach(t),ff=m(Xt),$r=a(Xt,"P",{});var pp=i($r);gf=n(pp,"This model is also a PyTorch "),Fr=a(pp,"A",{href:!0,rel:!0});var Lk=i(Fr);_f=n(Lk,"torch.nn.Module"),Lk.forEach(t),bf=n(pp,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pp.forEach(t),vf=m(Xt),_t=a(Xt,"DIV",{class:!0});var eo=i(_t);w(Br.$$.fragment,eo),kf=m(eo),Bo=a(eo,"P",{});var ji=i(Bo);Tf=n(ji,"The "),ai=a(ji,"A",{href:!0});var Wk=i(ai);yf=n(Wk,"MobileBertForTokenClassification"),Wk.forEach(t),wf=n(ji," forward method, overrides the "),xl=a(ji,"CODE",{});var Rk=i(xl);Mf=n(Rk,"__call__"),Rk.forEach(t),$f=n(ji," special method."),ji.forEach(t),Ff=m(eo),w(Bn.$$.fragment,eo),Bf=m(eo),w(En.$$.fragment,eo),Ef=m(eo),w(xn.$$.fragment,eo),eo.forEach(t),Xt.forEach(t),bc=m(s),Eo=a(s,"H2",{class:!0});var hp=i(Eo);zn=a(hp,"A",{id:!0,class:!0,href:!0});var Uk=i(zn);zl=a(Uk,"SPAN",{});var Kk=i(zl);w(Er.$$.fragment,Kk),Kk.forEach(t),Uk.forEach(t),xf=m(hp),Pl=a(hp,"SPAN",{});var Hk=i(Pl);zf=n(Hk,"MobileBertForQuestionAnswering"),Hk.forEach(t),hp.forEach(t),vc=m(s),ft=a(s,"DIV",{class:!0});var to=i(ft);w(xr.$$.fragment,to),Pf=m(to),xo=a(to,"P",{});var Ci=i(xo);jf=n(Ci,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),jl=a(Ci,"CODE",{});var Qk=i(jl);Cf=n(Qk,"span start logits"),Qk.forEach(t),qf=n(Ci," and "),Cl=a(Ci,"CODE",{});var Vk=i(Cl);Nf=n(Vk,"span end logits"),Vk.forEach(t),Of=n(Ci,")."),Ci.forEach(t),Af=m(to),zr=a(to,"P",{});var mp=i(zr);Sf=n(mp,"This model inherits from "),ii=a(mp,"A",{href:!0});var Gk=i(ii);Df=n(Gk,"PreTrainedModel"),Gk.forEach(t),If=n(mp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp.forEach(t),Lf=m(to),Pr=a(to,"P",{});var up=i(Pr);Wf=n(up,"This model is also a PyTorch "),jr=a(up,"A",{href:!0,rel:!0});var Yk=i(jr);Rf=n(Yk,"torch.nn.Module"),Yk.forEach(t),Uf=n(up,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),up.forEach(t),Kf=m(to),bt=a(to,"DIV",{class:!0});var oo=i(bt);w(Cr.$$.fragment,oo),Hf=m(oo),zo=a(oo,"P",{});var qi=i(zo);Qf=n(qi,"The "),li=a(qi,"A",{href:!0});var Jk=i(li);Vf=n(Jk,"MobileBertForQuestionAnswering"),Jk.forEach(t),Gf=n(qi," forward method, overrides the "),ql=a(qi,"CODE",{});var Zk=i(ql);Yf=n(Zk,"__call__"),Zk.forEach(t),Jf=n(qi," special method."),qi.forEach(t),Zf=m(oo),w(Pn.$$.fragment,oo),Xf=m(oo),w(jn.$$.fragment,oo),eg=m(oo),w(Cn.$$.fragment,oo),oo.forEach(t),to.forEach(t),kc=m(s),Po=a(s,"H2",{class:!0});var fp=i(Po);qn=a(fp,"A",{id:!0,class:!0,href:!0});var Xk=i(qn);Nl=a(Xk,"SPAN",{});var eT=i(Nl);w(qr.$$.fragment,eT),eT.forEach(t),Xk.forEach(t),tg=m(fp),Ol=a(fp,"SPAN",{});var tT=i(Ol);og=n(tT,"TFMobileBertModel"),tT.forEach(t),fp.forEach(t),Tc=m(s),tt=a(s,"DIV",{class:!0});var Ot=i(tt);w(Nr.$$.fragment,Ot),ng=m(Ot),Al=a(Ot,"P",{});var oT=i(Al);sg=n(oT,"The bare MobileBert Model transformer outputting raw hidden-states without any specific head on top."),oT.forEach(t),rg=m(Ot),Or=a(Ot,"P",{});var gp=i(Or);ag=n(gp,"This model inherits from "),di=a(gp,"A",{href:!0});var nT=i(di);ig=n(nT,"TFPreTrainedModel"),nT.forEach(t),lg=n(gp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gp.forEach(t),dg=m(Ot),Ar=a(Ot,"P",{});var _p=i(Ar);cg=n(_p,"This model is also a "),Sr=a(_p,"A",{href:!0,rel:!0});var sT=i(Sr);pg=n(sT,"tf.keras.Model"),sT.forEach(t),hg=n(_p,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p.forEach(t),mg=m(Ot),w(Nn.$$.fragment,Ot),ug=m(Ot),Pt=a(Ot,"DIV",{class:!0});var Ts=i(Pt);w(Dr.$$.fragment,Ts),fg=m(Ts),jo=a(Ts,"P",{});var Ni=i(jo);gg=n(Ni,"The "),ci=a(Ni,"A",{href:!0});var rT=i(ci);_g=n(rT,"TFMobileBertModel"),rT.forEach(t),bg=n(Ni," forward method, overrides the "),Sl=a(Ni,"CODE",{});var aT=i(Sl);vg=n(aT,"__call__"),aT.forEach(t),kg=n(Ni," special method."),Ni.forEach(t),Tg=m(Ts),w(On.$$.fragment,Ts),yg=m(Ts),w(An.$$.fragment,Ts),Ts.forEach(t),Ot.forEach(t),yc=m(s),Co=a(s,"H2",{class:!0});var bp=i(Co);Sn=a(bp,"A",{id:!0,class:!0,href:!0});var iT=i(Sn);Dl=a(iT,"SPAN",{});var lT=i(Dl);w(Ir.$$.fragment,lT),lT.forEach(t),iT.forEach(t),wg=m(bp),Il=a(bp,"SPAN",{});var dT=i(Il);Mg=n(dT,"TFMobileBertForPreTraining"),dT.forEach(t),bp.forEach(t),wc=m(s),ot=a(s,"DIV",{class:!0});var At=i(ot);w(Lr.$$.fragment,At),$g=m(At),qo=a(At,"P",{});var Oi=i(qo);Fg=n(Oi,"MobileBert Model with two heads on top as done during the pretraining: a "),Ll=a(Oi,"CODE",{});var cT=i(Ll);Bg=n(cT,"masked language modeling"),cT.forEach(t),Eg=n(Oi,` head and a
`),Wl=a(Oi,"CODE",{});var pT=i(Wl);xg=n(pT,"next sentence prediction (classification)"),pT.forEach(t),zg=n(Oi," head."),Oi.forEach(t),Pg=m(At),Wr=a(At,"P",{});var vp=i(Wr);jg=n(vp,"This model inherits from "),pi=a(vp,"A",{href:!0});var hT=i(pi);Cg=n(hT,"TFPreTrainedModel"),hT.forEach(t),qg=n(vp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vp.forEach(t),Ng=m(At),Rr=a(At,"P",{});var kp=i(Rr);Og=n(kp,"This model is also a "),Ur=a(kp,"A",{href:!0,rel:!0});var mT=i(Ur);Ag=n(mT,"tf.keras.Model"),mT.forEach(t),Sg=n(kp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kp.forEach(t),Dg=m(At),w(Dn.$$.fragment,At),Ig=m(At),jt=a(At,"DIV",{class:!0});var ys=i(jt);w(Kr.$$.fragment,ys),Lg=m(ys),No=a(ys,"P",{});var Ai=i(No);Wg=n(Ai,"The "),hi=a(Ai,"A",{href:!0});var uT=i(hi);Rg=n(uT,"TFMobileBertForPreTraining"),uT.forEach(t),Ug=n(Ai," forward method, overrides the "),Rl=a(Ai,"CODE",{});var fT=i(Rl);Kg=n(fT,"__call__"),fT.forEach(t),Hg=n(Ai," special method."),Ai.forEach(t),Qg=m(ys),w(In.$$.fragment,ys),Vg=m(ys),w(Ln.$$.fragment,ys),ys.forEach(t),At.forEach(t),Mc=m(s),Oo=a(s,"H2",{class:!0});var Tp=i(Oo);Wn=a(Tp,"A",{id:!0,class:!0,href:!0});var gT=i(Wn);Ul=a(gT,"SPAN",{});var _T=i(Ul);w(Hr.$$.fragment,_T),_T.forEach(t),gT.forEach(t),Gg=m(Tp),Kl=a(Tp,"SPAN",{});var bT=i(Kl);Yg=n(bT,"TFMobileBertForMaskedLM"),bT.forEach(t),Tp.forEach(t),$c=m(s),nt=a(s,"DIV",{class:!0});var St=i(nt);w(Qr.$$.fragment,St),Jg=m(St),Vr=a(St,"P",{});var yp=i(Vr);Zg=n(yp,"MobileBert Model with a "),Hl=a(yp,"CODE",{});var vT=i(Hl);Xg=n(vT,"language modeling"),vT.forEach(t),e_=n(yp," head on top."),yp.forEach(t),t_=m(St),Gr=a(St,"P",{});var wp=i(Gr);o_=n(wp,"This model inherits from "),mi=a(wp,"A",{href:!0});var kT=i(mi);n_=n(kT,"TFPreTrainedModel"),kT.forEach(t),s_=n(wp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp.forEach(t),r_=m(St),Yr=a(St,"P",{});var Mp=i(Yr);a_=n(Mp,"This model is also a "),Jr=a(Mp,"A",{href:!0,rel:!0});var TT=i(Jr);i_=n(TT,"tf.keras.Model"),TT.forEach(t),l_=n(Mp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mp.forEach(t),d_=m(St),w(Rn.$$.fragment,St),c_=m(St),vt=a(St,"DIV",{class:!0});var no=i(vt);w(Zr.$$.fragment,no),p_=m(no),Ao=a(no,"P",{});var Si=i(Ao);h_=n(Si,"The "),ui=a(Si,"A",{href:!0});var yT=i(ui);m_=n(yT,"TFMobileBertForMaskedLM"),yT.forEach(t),u_=n(Si," forward method, overrides the "),Ql=a(Si,"CODE",{});var wT=i(Ql);f_=n(wT,"__call__"),wT.forEach(t),g_=n(Si," special method."),Si.forEach(t),__=m(no),w(Un.$$.fragment,no),b_=m(no),w(Kn.$$.fragment,no),v_=m(no),w(Hn.$$.fragment,no),no.forEach(t),St.forEach(t),Fc=m(s),So=a(s,"H2",{class:!0});var $p=i(So);Qn=a($p,"A",{id:!0,class:!0,href:!0});var MT=i(Qn);Vl=a(MT,"SPAN",{});var $T=i(Vl);w(Xr.$$.fragment,$T),$T.forEach(t),MT.forEach(t),k_=m($p),Gl=a($p,"SPAN",{});var FT=i(Gl);T_=n(FT,"TFMobileBertForNextSentencePrediction"),FT.forEach(t),$p.forEach(t),Bc=m(s),st=a(s,"DIV",{class:!0});var Dt=i(st);w(ea.$$.fragment,Dt),y_=m(Dt),ta=a(Dt,"P",{});var Fp=i(ta);w_=n(Fp,"MobileBert Model with a "),Yl=a(Fp,"CODE",{});var BT=i(Yl);M_=n(BT,"next sentence prediction (classification)"),BT.forEach(t),$_=n(Fp," head on top."),Fp.forEach(t),F_=m(Dt),oa=a(Dt,"P",{});var Bp=i(oa);B_=n(Bp,"This model inherits from "),fi=a(Bp,"A",{href:!0});var ET=i(fi);E_=n(ET,"TFPreTrainedModel"),ET.forEach(t),x_=n(Bp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp.forEach(t),z_=m(Dt),na=a(Dt,"P",{});var Ep=i(na);P_=n(Ep,"This model is also a "),sa=a(Ep,"A",{href:!0,rel:!0});var xT=i(sa);j_=n(xT,"tf.keras.Model"),xT.forEach(t),C_=n(Ep,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ep.forEach(t),q_=m(Dt),w(Vn.$$.fragment,Dt),N_=m(Dt),Ct=a(Dt,"DIV",{class:!0});var ws=i(Ct);w(ra.$$.fragment,ws),O_=m(ws),Do=a(ws,"P",{});var Di=i(Do);A_=n(Di,"The "),gi=a(Di,"A",{href:!0});var zT=i(gi);S_=n(zT,"TFMobileBertForNextSentencePrediction"),zT.forEach(t),D_=n(Di," forward method, overrides the "),Jl=a(Di,"CODE",{});var PT=i(Jl);I_=n(PT,"__call__"),PT.forEach(t),L_=n(Di," special method."),Di.forEach(t),W_=m(ws),w(Gn.$$.fragment,ws),R_=m(ws),w(Yn.$$.fragment,ws),ws.forEach(t),Dt.forEach(t),Ec=m(s),Io=a(s,"H2",{class:!0});var xp=i(Io);Jn=a(xp,"A",{id:!0,class:!0,href:!0});var jT=i(Jn);Zl=a(jT,"SPAN",{});var CT=i(Zl);w(aa.$$.fragment,CT),CT.forEach(t),jT.forEach(t),U_=m(xp),Xl=a(xp,"SPAN",{});var qT=i(Xl);K_=n(qT,"TFMobileBertForSequenceClassification"),qT.forEach(t),xp.forEach(t),xc=m(s),rt=a(s,"DIV",{class:!0});var It=i(rt);w(ia.$$.fragment,It),H_=m(It),ed=a(It,"P",{});var NT=i(ed);Q_=n(NT,`MobileBert Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),NT.forEach(t),V_=m(It),la=a(It,"P",{});var zp=i(la);G_=n(zp,"This model inherits from "),_i=a(zp,"A",{href:!0});var OT=i(_i);Y_=n(OT,"TFPreTrainedModel"),OT.forEach(t),J_=n(zp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zp.forEach(t),Z_=m(It),da=a(It,"P",{});var Pp=i(da);X_=n(Pp,"This model is also a "),ca=a(Pp,"A",{href:!0,rel:!0});var AT=i(ca);eb=n(AT,"tf.keras.Model"),AT.forEach(t),tb=n(Pp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pp.forEach(t),ob=m(It),w(Zn.$$.fragment,It),nb=m(It),kt=a(It,"DIV",{class:!0});var so=i(kt);w(pa.$$.fragment,so),sb=m(so),Lo=a(so,"P",{});var Ii=i(Lo);rb=n(Ii,"The "),bi=a(Ii,"A",{href:!0});var ST=i(bi);ab=n(ST,"TFMobileBertForSequenceClassification"),ST.forEach(t),ib=n(Ii," forward method, overrides the "),td=a(Ii,"CODE",{});var DT=i(td);lb=n(DT,"__call__"),DT.forEach(t),db=n(Ii," special method."),Ii.forEach(t),cb=m(so),w(Xn.$$.fragment,so),pb=m(so),w(es.$$.fragment,so),hb=m(so),w(ts.$$.fragment,so),so.forEach(t),It.forEach(t),zc=m(s),Wo=a(s,"H2",{class:!0});var jp=i(Wo);os=a(jp,"A",{id:!0,class:!0,href:!0});var IT=i(os);od=a(IT,"SPAN",{});var LT=i(od);w(ha.$$.fragment,LT),LT.forEach(t),IT.forEach(t),mb=m(jp),nd=a(jp,"SPAN",{});var WT=i(nd);ub=n(WT,"TFMobileBertForMultipleChoice"),WT.forEach(t),jp.forEach(t),Pc=m(s),at=a(s,"DIV",{class:!0});var Lt=i(at);w(ma.$$.fragment,Lt),fb=m(Lt),sd=a(Lt,"P",{});var RT=i(sd);gb=n(RT,`MobileBert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),RT.forEach(t),_b=m(Lt),ua=a(Lt,"P",{});var Cp=i(ua);bb=n(Cp,"This model inherits from "),vi=a(Cp,"A",{href:!0});var UT=i(vi);vb=n(UT,"TFPreTrainedModel"),UT.forEach(t),kb=n(Cp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cp.forEach(t),Tb=m(Lt),fa=a(Lt,"P",{});var qp=i(fa);yb=n(qp,"This model is also a "),ga=a(qp,"A",{href:!0,rel:!0});var KT=i(ga);wb=n(KT,"tf.keras.Model"),KT.forEach(t),Mb=n(qp,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qp.forEach(t),$b=m(Lt),w(ns.$$.fragment,Lt),Fb=m(Lt),qt=a(Lt,"DIV",{class:!0});var Ms=i(qt);w(_a.$$.fragment,Ms),Bb=m(Ms),Ro=a(Ms,"P",{});var Li=i(Ro);Eb=n(Li,"The "),ki=a(Li,"A",{href:!0});var HT=i(ki);xb=n(HT,"TFMobileBertForMultipleChoice"),HT.forEach(t),zb=n(Li," forward method, overrides the "),rd=a(Li,"CODE",{});var QT=i(rd);Pb=n(QT,"__call__"),QT.forEach(t),jb=n(Li," special method."),Li.forEach(t),Cb=m(Ms),w(ss.$$.fragment,Ms),qb=m(Ms),w(rs.$$.fragment,Ms),Ms.forEach(t),Lt.forEach(t),jc=m(s),Uo=a(s,"H2",{class:!0});var Np=i(Uo);as=a(Np,"A",{id:!0,class:!0,href:!0});var VT=i(as);ad=a(VT,"SPAN",{});var GT=i(ad);w(ba.$$.fragment,GT),GT.forEach(t),VT.forEach(t),Nb=m(Np),id=a(Np,"SPAN",{});var YT=i(id);Ob=n(YT,"TFMobileBertForTokenClassification"),YT.forEach(t),Np.forEach(t),Cc=m(s),it=a(s,"DIV",{class:!0});var Wt=i(it);w(va.$$.fragment,Wt),Ab=m(Wt),ld=a(Wt,"P",{});var JT=i(ld);Sb=n(JT,`MobileBert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),JT.forEach(t),Db=m(Wt),ka=a(Wt,"P",{});var Op=i(ka);Ib=n(Op,"This model inherits from "),Ti=a(Op,"A",{href:!0});var ZT=i(Ti);Lb=n(ZT,"TFPreTrainedModel"),ZT.forEach(t),Wb=n(Op,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Op.forEach(t),Rb=m(Wt),Ta=a(Wt,"P",{});var Ap=i(Ta);Ub=n(Ap,"This model is also a "),ya=a(Ap,"A",{href:!0,rel:!0});var XT=i(ya);Kb=n(XT,"tf.keras.Model"),XT.forEach(t),Hb=n(Ap,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ap.forEach(t),Qb=m(Wt),w(is.$$.fragment,Wt),Vb=m(Wt),Tt=a(Wt,"DIV",{class:!0});var ro=i(Tt);w(wa.$$.fragment,ro),Gb=m(ro),Ko=a(ro,"P",{});var Wi=i(Ko);Yb=n(Wi,"The "),yi=a(Wi,"A",{href:!0});var ey=i(yi);Jb=n(ey,"TFMobileBertForTokenClassification"),ey.forEach(t),Zb=n(Wi," forward method, overrides the "),dd=a(Wi,"CODE",{});var ty=i(dd);Xb=n(ty,"__call__"),ty.forEach(t),ev=n(Wi," special method."),Wi.forEach(t),tv=m(ro),w(ls.$$.fragment,ro),ov=m(ro),w(ds.$$.fragment,ro),nv=m(ro),w(cs.$$.fragment,ro),ro.forEach(t),Wt.forEach(t),qc=m(s),Ho=a(s,"H2",{class:!0});var Sp=i(Ho);ps=a(Sp,"A",{id:!0,class:!0,href:!0});var oy=i(ps);cd=a(oy,"SPAN",{});var ny=i(cd);w(Ma.$$.fragment,ny),ny.forEach(t),oy.forEach(t),sv=m(Sp),pd=a(Sp,"SPAN",{});var sy=i(pd);rv=n(sy,"TFMobileBertForQuestionAnswering"),sy.forEach(t),Sp.forEach(t),Nc=m(s),lt=a(s,"DIV",{class:!0});var Rt=i(lt);w($a.$$.fragment,Rt),av=m(Rt),Qo=a(Rt,"P",{});var Ri=i(Qo);iv=n(Ri,`MobileBert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),hd=a(Ri,"CODE",{});var ry=i(hd);lv=n(ry,"span start logits"),ry.forEach(t),dv=n(Ri," and "),md=a(Ri,"CODE",{});var ay=i(md);cv=n(ay,"span end logits"),ay.forEach(t),pv=n(Ri,")."),Ri.forEach(t),hv=m(Rt),Fa=a(Rt,"P",{});var Dp=i(Fa);mv=n(Dp,"This model inherits from "),wi=a(Dp,"A",{href:!0});var iy=i(wi);uv=n(iy,"TFPreTrainedModel"),iy.forEach(t),fv=n(Dp,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp.forEach(t),gv=m(Rt),Ba=a(Rt,"P",{});var Ip=i(Ba);_v=n(Ip,"This model is also a "),Ea=a(Ip,"A",{href:!0,rel:!0});var ly=i(Ea);bv=n(ly,"tf.keras.Model"),ly.forEach(t),vv=n(Ip,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ip.forEach(t),kv=m(Rt),w(hs.$$.fragment,Rt),Tv=m(Rt),yt=a(Rt,"DIV",{class:!0});var ao=i(yt);w(xa.$$.fragment,ao),yv=m(ao),Vo=a(ao,"P",{});var Ui=i(Vo);wv=n(Ui,"The "),Mi=a(Ui,"A",{href:!0});var dy=i(Mi);Mv=n(dy,"TFMobileBertForQuestionAnswering"),dy.forEach(t),$v=n(Ui," forward method, overrides the "),ud=a(Ui,"CODE",{});var cy=i(ud);Fv=n(cy,"__call__"),cy.forEach(t),Bv=n(Ui," special method."),Ui.forEach(t),Ev=m(ao),w(ms.$$.fragment,ao),xv=m(ao),w(us.$$.fragment,ao),zv=m(ao),w(fs.$$.fragment,ao),ao.forEach(t),Rt.forEach(t),this.h()},h(){g(d,"name","hf:doc:metadata"),g(d,"content",JSON.stringify(uw)),g(u,"id","mobilebert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#mobilebert"),g(c,"class","relative group"),g(se,"id","overview"),g(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(se,"href","#overview"),g(D,"class","relative group"),g(ae,"href","https://arxiv.org/abs/2004.02984"),g(ae,"rel","nofollow"),g(ie,"href","https://huggingface.co/vshampor"),g(ie,"rel","nofollow"),g(le,"href","https://github.com/google-research/mobilebert"),g(le,"rel","nofollow"),g(re,"id","transformers.MobileBertConfig"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#transformers.MobileBertConfig"),g(I,"class","relative group"),g(Oe,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertModel"),g(Ae,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Ne,"href","https://huggingface.co/google/mobilebert-uncased"),g(Ne,"rel","nofollow"),g(Se,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),g(De,"href","/docs/transformers/v4.22.1/en/main_classes/configuration#transformers.PretrainedConfig"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Zo,"id","transformers.MobileBertTokenizer"),g(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Zo,"href","#transformers.MobileBertTokenizer"),g(io,"class","relative group"),g(Da,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizer"),g(Ia,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer"),g(La,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizer"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(en,"id","transformers.MobileBertTokenizerFast"),g(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(en,"href","#transformers.MobileBertTokenizerFast"),g(lo,"class","relative group"),g(Wa,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertTokenizerFast"),g(Ra,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizerFast"),g(Ua,"href","/docs/transformers/v4.22.1/en/model_doc/bert#transformers.BertTokenizerFast"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(on,"id","transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(on,"href","#transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput"),g(co,"class","relative group"),g(Ka,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ha,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nn,"id","transformers.MobileBertModel"),g(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(nn,"href","#transformers.MobileBertModel"),g(mo,"class","relative group"),g(Qa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ls,"rel","nofollow"),g(Ws,"href","https://arxiv.org/pdf/2004.02984.pdf"),g(Ws,"rel","nofollow"),g(Va,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertModel"),g(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(an,"id","transformers.MobileBertForPreTraining"),g(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(an,"href","#transformers.MobileBertForPreTraining"),g(fo,"class","relative group"),g(Ga,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Vs,"rel","nofollow"),g(Ya,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForPreTraining"),g(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(cn,"id","transformers.MobileBertForMaskedLM"),g(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(cn,"href","#transformers.MobileBertForMaskedLM"),g(bo,"class","relative group"),g(Ja,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(tr,"rel","nofollow"),g(Za,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForMaskedLM"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(un,"id","transformers.MobileBertForNextSentencePrediction"),g(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(un,"href","#transformers.MobileBertForNextSentencePrediction"),g(ko,"class","relative group"),g(Xa,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(lr,"rel","nofollow"),g(ei,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForNextSentencePrediction"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_n,"id","transformers.MobileBertForSequenceClassification"),g(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(_n,"href","#transformers.MobileBertForSequenceClassification"),g(yo,"class","relative group"),g(ti,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(ur,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(ur,"rel","nofollow"),g(oi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForSequenceClassification"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wn,"id","transformers.MobileBertForMultipleChoice"),g(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(wn,"href","#transformers.MobileBertForMultipleChoice"),g(Mo,"class","relative group"),g(ni,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(kr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(kr,"rel","nofollow"),g(si,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForMultipleChoice"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Fn,"id","transformers.MobileBertForTokenClassification"),g(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Fn,"href","#transformers.MobileBertForTokenClassification"),g(Fo,"class","relative group"),g(ri,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(Fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Fr,"rel","nofollow"),g(ai,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForTokenClassification"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(zn,"id","transformers.MobileBertForQuestionAnswering"),g(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(zn,"href","#transformers.MobileBertForQuestionAnswering"),g(Eo,"class","relative group"),g(ii,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.PreTrainedModel"),g(jr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(jr,"rel","nofollow"),g(li,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.MobileBertForQuestionAnswering"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qn,"id","transformers.TFMobileBertModel"),g(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(qn,"href","#transformers.TFMobileBertModel"),g(Po,"class","relative group"),g(di,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Sr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Sr,"rel","nofollow"),g(ci,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertModel"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Sn,"id","transformers.TFMobileBertForPreTraining"),g(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Sn,"href","#transformers.TFMobileBertForPreTraining"),g(Co,"class","relative group"),g(pi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ur,"rel","nofollow"),g(hi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForPreTraining"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wn,"id","transformers.TFMobileBertForMaskedLM"),g(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wn,"href","#transformers.TFMobileBertForMaskedLM"),g(Oo,"class","relative group"),g(mi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Jr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Jr,"rel","nofollow"),g(ui,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForMaskedLM"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qn,"id","transformers.TFMobileBertForNextSentencePrediction"),g(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qn,"href","#transformers.TFMobileBertForNextSentencePrediction"),g(So,"class","relative group"),g(fi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(sa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(sa,"rel","nofollow"),g(gi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForNextSentencePrediction"),g(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Jn,"id","transformers.TFMobileBertForSequenceClassification"),g(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Jn,"href","#transformers.TFMobileBertForSequenceClassification"),g(Io,"class","relative group"),g(_i,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(ca,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ca,"rel","nofollow"),g(bi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForSequenceClassification"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(os,"id","transformers.TFMobileBertForMultipleChoice"),g(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(os,"href","#transformers.TFMobileBertForMultipleChoice"),g(Wo,"class","relative group"),g(vi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(ga,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ga,"rel","nofollow"),g(ki,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForMultipleChoice"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(as,"id","transformers.TFMobileBertForTokenClassification"),g(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(as,"href","#transformers.TFMobileBertForTokenClassification"),g(Uo,"class","relative group"),g(Ti,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(ya,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(ya,"rel","nofollow"),g(yi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForTokenClassification"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ps,"id","transformers.TFMobileBertForQuestionAnswering"),g(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ps,"href","#transformers.TFMobileBertForQuestionAnswering"),g(Ho,"class","relative group"),g(wi,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ea,"rel","nofollow"),g(Mi,"href","/docs/transformers/v4.22.1/en/model_doc/mobilebert#transformers.TFMobileBertForQuestionAnswering"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,v){e(document.head,d),_(s,b,v),_(s,c,v),e(c,u),e(u,k),M(l,k,null),e(c,p),e(c,P),e(P,ke),_(s,me,v),_(s,D,v),e(D,se),e(se,X),M(T,X,null),e(D,Te),e(D,K),e(K,ye),_(s,ue,v),_(s,L,v),e(L,we),e(L,ae),e(ae,H),e(L,Me),_(s,fe,v),_(s,R,v),e(R,$e),_(s,ge,v),_(s,U,v),e(U,de),e(de,Fe),_(s,te,v),_(s,j,v),e(j,N),_(s,_e,v),_(s,W,v),e(W,ce),e(ce,Be),e(W,Q),e(W,pe),e(pe,Ee),_(s,q,v),_(s,ne,v),e(ne,V),e(ne,ie),e(ie,xe),e(ne,G),e(ne,le),e(le,ze),e(ne,A),_(s,be,v),_(s,I,v),e(I,re),e(re,ee),M(C,ee,null),e(I,Pe),e(I,O),e(O,je),_(s,ve,v),_(s,f,v),M(E,f,null),e(f,Ie),e(f,Y),e(Y,Le),e(Y,Oe),e(Oe,x),e(Y,We),e(Y,Ae),e(Ae,Re),e(Y,Ue),e(Y,Ne),e(Ne,S),e(Y,J),e(f,Ke),e(f,qe),e(qe,Z),e(qe,Se),e(Se,He),e(qe,Ce),e(qe,De),e(De,oe),e(qe,Qe),e(f,Lp),M(Jo,f,null),e(f,Wp),e(f,Ki),e(Ki,Rp),_(s,Jd,v),_(s,io,v),e(io,Zo),e(Zo,Hi),M($s,Hi,null),e(io,Up),e(io,Qi),e(Qi,Kp),_(s,Zd,v),_(s,Mt,v),M(Fs,Mt,null),e(Mt,Hp),e(Mt,Vi),e(Vi,Qp),e(Mt,Vp),e(Mt,Xo),e(Xo,Da),e(Da,Gp),e(Xo,Yp),e(Xo,Ia),e(Ia,Jp),e(Xo,Zp),e(Mt,Xp),e(Mt,Bs),e(Bs,eh),e(Bs,La),e(La,th),e(Bs,oh),_(s,Xd,v),_(s,lo,v),e(lo,en),e(en,Gi),M(Es,Gi,null),e(lo,nh),e(lo,Yi),e(Yi,sh),_(s,ec,v),_(s,$t,v),M(xs,$t,null),e($t,rh),e($t,zs),e(zs,ah),e(zs,Ji),e(Ji,ih),e(zs,lh),e($t,dh),e($t,tn),e(tn,Wa),e(Wa,ch),e(tn,ph),e(tn,Ra),e(Ra,hh),e(tn,mh),e($t,uh),e($t,Ps),e(Ps,fh),e(Ps,Ua),e(Ua,gh),e(Ps,_h),_(s,tc,v),_(s,co,v),e(co,on),e(on,Zi),M(js,Zi,null),e(co,bh),e(co,Xi),e(Xi,vh),_(s,oc,v),_(s,po,v),M(Cs,po,null),e(po,kh),e(po,qs),e(qs,Th),e(qs,Ka),e(Ka,yh),e(qs,wh),_(s,nc,v),_(s,ho,v),M(Ns,ho,null),e(ho,Mh),e(ho,Os),e(Os,$h),e(Os,Ha),e(Ha,Fh),e(Os,Bh),_(s,sc,v),_(s,mo,v),e(mo,nn),e(nn,el),M(As,el,null),e(mo,Eh),e(mo,tl),e(tl,xh),_(s,rc,v),_(s,et,v),M(Ss,et,null),e(et,zh),e(et,ol),e(ol,Ph),e(et,jh),e(et,Ds),e(Ds,Ch),e(Ds,Qa),e(Qa,qh),e(Ds,Nh),e(et,Oh),e(et,Is),e(Is,Ah),e(Is,Ls),e(Ls,Sh),e(Is,Dh),e(et,Ih),e(et,nl),e(nl,Ws),e(Ws,Lh),e(et,Wh),e(et,Bt),M(Rs,Bt,null),e(Bt,Rh),e(Bt,uo),e(uo,Uh),e(uo,Va),e(Va,Kh),e(uo,Hh),e(uo,sl),e(sl,Qh),e(uo,Vh),e(Bt,Gh),M(sn,Bt,null),e(Bt,Yh),M(rn,Bt,null),_(s,ac,v),_(s,fo,v),e(fo,an),e(an,rl),M(Us,rl,null),e(fo,Jh),e(fo,al),e(al,Zh),_(s,ic,v),_(s,dt,v),M(Ks,dt,null),e(dt,Xh),e(dt,go),e(go,em),e(go,il),e(il,tm),e(go,om),e(go,ll),e(ll,nm),e(go,sm),e(dt,rm),e(dt,Hs),e(Hs,am),e(Hs,Ga),e(Ga,im),e(Hs,lm),e(dt,dm),e(dt,Qs),e(Qs,cm),e(Qs,Vs),e(Vs,pm),e(Qs,hm),e(dt,mm),e(dt,Et),M(Gs,Et,null),e(Et,um),e(Et,_o),e(_o,fm),e(_o,Ya),e(Ya,gm),e(_o,_m),e(_o,dl),e(dl,bm),e(_o,vm),e(Et,km),M(ln,Et,null),e(Et,Tm),M(dn,Et,null),_(s,lc,v),_(s,bo,v),e(bo,cn),e(cn,cl),M(Ys,cl,null),e(bo,ym),e(bo,pl),e(pl,wm),_(s,dc,v),_(s,ct,v),M(Js,ct,null),e(ct,Mm),e(ct,Zs),e(Zs,$m),e(Zs,hl),e(hl,Fm),e(Zs,Bm),e(ct,Em),e(ct,Xs),e(Xs,xm),e(Xs,Ja),e(Ja,zm),e(Xs,Pm),e(ct,jm),e(ct,er),e(er,Cm),e(er,tr),e(tr,qm),e(er,Nm),e(ct,Om),e(ct,gt),M(or,gt,null),e(gt,Am),e(gt,vo),e(vo,Sm),e(vo,Za),e(Za,Dm),e(vo,Im),e(vo,ml),e(ml,Lm),e(vo,Wm),e(gt,Rm),M(pn,gt,null),e(gt,Um),M(hn,gt,null),e(gt,Km),M(mn,gt,null),_(s,cc,v),_(s,ko,v),e(ko,un),e(un,ul),M(nr,ul,null),e(ko,Hm),e(ko,fl),e(fl,Qm),_(s,pc,v),_(s,pt,v),M(sr,pt,null),e(pt,Vm),e(pt,rr),e(rr,Gm),e(rr,gl),e(gl,Ym),e(rr,Jm),e(pt,Zm),e(pt,ar),e(ar,Xm),e(ar,Xa),e(Xa,eu),e(ar,tu),e(pt,ou),e(pt,ir),e(ir,nu),e(ir,lr),e(lr,su),e(ir,ru),e(pt,au),e(pt,xt),M(dr,xt,null),e(xt,iu),e(xt,To),e(To,lu),e(To,ei),e(ei,du),e(To,cu),e(To,_l),e(_l,pu),e(To,hu),e(xt,mu),M(fn,xt,null),e(xt,uu),M(gn,xt,null),_(s,hc,v),_(s,yo,v),e(yo,_n),e(_n,bl),M(cr,bl,null),e(yo,fu),e(yo,vl),e(vl,gu),_(s,mc,v),_(s,ht,v),M(pr,ht,null),e(ht,_u),e(ht,kl),e(kl,bu),e(ht,vu),e(ht,hr),e(hr,ku),e(hr,ti),e(ti,Tu),e(hr,yu),e(ht,wu),e(ht,mr),e(mr,Mu),e(mr,ur),e(ur,$u),e(mr,Fu),e(ht,Bu),e(ht,Xe),M(fr,Xe,null),e(Xe,Eu),e(Xe,wo),e(wo,xu),e(wo,oi),e(oi,zu),e(wo,Pu),e(wo,Tl),e(Tl,ju),e(wo,Cu),e(Xe,qu),M(bn,Xe,null),e(Xe,Nu),M(vn,Xe,null),e(Xe,Ou),M(kn,Xe,null),e(Xe,Au),M(Tn,Xe,null),e(Xe,Su),M(yn,Xe,null),_(s,uc,v),_(s,Mo,v),e(Mo,wn),e(wn,yl),M(gr,yl,null),e(Mo,Du),e(Mo,wl),e(wl,Iu),_(s,fc,v),_(s,mt,v),M(_r,mt,null),e(mt,Lu),e(mt,Ml),e(Ml,Wu),e(mt,Ru),e(mt,br),e(br,Uu),e(br,ni),e(ni,Ku),e(br,Hu),e(mt,Qu),e(mt,vr),e(vr,Vu),e(vr,kr),e(kr,Gu),e(vr,Yu),e(mt,Ju),e(mt,zt),M(Tr,zt,null),e(zt,Zu),e(zt,$o),e($o,Xu),e($o,si),e(si,ef),e($o,tf),e($o,$l),e($l,of),e($o,nf),e(zt,sf),M(Mn,zt,null),e(zt,rf),M($n,zt,null),_(s,gc,v),_(s,Fo,v),e(Fo,Fn),e(Fn,Fl),M(yr,Fl,null),e(Fo,af),e(Fo,Bl),e(Bl,lf),_(s,_c,v),_(s,ut,v),M(wr,ut,null),e(ut,df),e(ut,El),e(El,cf),e(ut,pf),e(ut,Mr),e(Mr,hf),e(Mr,ri),e(ri,mf),e(Mr,uf),e(ut,ff),e(ut,$r),e($r,gf),e($r,Fr),e(Fr,_f),e($r,bf),e(ut,vf),e(ut,_t),M(Br,_t,null),e(_t,kf),e(_t,Bo),e(Bo,Tf),e(Bo,ai),e(ai,yf),e(Bo,wf),e(Bo,xl),e(xl,Mf),e(Bo,$f),e(_t,Ff),M(Bn,_t,null),e(_t,Bf),M(En,_t,null),e(_t,Ef),M(xn,_t,null),_(s,bc,v),_(s,Eo,v),e(Eo,zn),e(zn,zl),M(Er,zl,null),e(Eo,xf),e(Eo,Pl),e(Pl,zf),_(s,vc,v),_(s,ft,v),M(xr,ft,null),e(ft,Pf),e(ft,xo),e(xo,jf),e(xo,jl),e(jl,Cf),e(xo,qf),e(xo,Cl),e(Cl,Nf),e(xo,Of),e(ft,Af),e(ft,zr),e(zr,Sf),e(zr,ii),e(ii,Df),e(zr,If),e(ft,Lf),e(ft,Pr),e(Pr,Wf),e(Pr,jr),e(jr,Rf),e(Pr,Uf),e(ft,Kf),e(ft,bt),M(Cr,bt,null),e(bt,Hf),e(bt,zo),e(zo,Qf),e(zo,li),e(li,Vf),e(zo,Gf),e(zo,ql),e(ql,Yf),e(zo,Jf),e(bt,Zf),M(Pn,bt,null),e(bt,Xf),M(jn,bt,null),e(bt,eg),M(Cn,bt,null),_(s,kc,v),_(s,Po,v),e(Po,qn),e(qn,Nl),M(qr,Nl,null),e(Po,tg),e(Po,Ol),e(Ol,og),_(s,Tc,v),_(s,tt,v),M(Nr,tt,null),e(tt,ng),e(tt,Al),e(Al,sg),e(tt,rg),e(tt,Or),e(Or,ag),e(Or,di),e(di,ig),e(Or,lg),e(tt,dg),e(tt,Ar),e(Ar,cg),e(Ar,Sr),e(Sr,pg),e(Ar,hg),e(tt,mg),M(Nn,tt,null),e(tt,ug),e(tt,Pt),M(Dr,Pt,null),e(Pt,fg),e(Pt,jo),e(jo,gg),e(jo,ci),e(ci,_g),e(jo,bg),e(jo,Sl),e(Sl,vg),e(jo,kg),e(Pt,Tg),M(On,Pt,null),e(Pt,yg),M(An,Pt,null),_(s,yc,v),_(s,Co,v),e(Co,Sn),e(Sn,Dl),M(Ir,Dl,null),e(Co,wg),e(Co,Il),e(Il,Mg),_(s,wc,v),_(s,ot,v),M(Lr,ot,null),e(ot,$g),e(ot,qo),e(qo,Fg),e(qo,Ll),e(Ll,Bg),e(qo,Eg),e(qo,Wl),e(Wl,xg),e(qo,zg),e(ot,Pg),e(ot,Wr),e(Wr,jg),e(Wr,pi),e(pi,Cg),e(Wr,qg),e(ot,Ng),e(ot,Rr),e(Rr,Og),e(Rr,Ur),e(Ur,Ag),e(Rr,Sg),e(ot,Dg),M(Dn,ot,null),e(ot,Ig),e(ot,jt),M(Kr,jt,null),e(jt,Lg),e(jt,No),e(No,Wg),e(No,hi),e(hi,Rg),e(No,Ug),e(No,Rl),e(Rl,Kg),e(No,Hg),e(jt,Qg),M(In,jt,null),e(jt,Vg),M(Ln,jt,null),_(s,Mc,v),_(s,Oo,v),e(Oo,Wn),e(Wn,Ul),M(Hr,Ul,null),e(Oo,Gg),e(Oo,Kl),e(Kl,Yg),_(s,$c,v),_(s,nt,v),M(Qr,nt,null),e(nt,Jg),e(nt,Vr),e(Vr,Zg),e(Vr,Hl),e(Hl,Xg),e(Vr,e_),e(nt,t_),e(nt,Gr),e(Gr,o_),e(Gr,mi),e(mi,n_),e(Gr,s_),e(nt,r_),e(nt,Yr),e(Yr,a_),e(Yr,Jr),e(Jr,i_),e(Yr,l_),e(nt,d_),M(Rn,nt,null),e(nt,c_),e(nt,vt),M(Zr,vt,null),e(vt,p_),e(vt,Ao),e(Ao,h_),e(Ao,ui),e(ui,m_),e(Ao,u_),e(Ao,Ql),e(Ql,f_),e(Ao,g_),e(vt,__),M(Un,vt,null),e(vt,b_),M(Kn,vt,null),e(vt,v_),M(Hn,vt,null),_(s,Fc,v),_(s,So,v),e(So,Qn),e(Qn,Vl),M(Xr,Vl,null),e(So,k_),e(So,Gl),e(Gl,T_),_(s,Bc,v),_(s,st,v),M(ea,st,null),e(st,y_),e(st,ta),e(ta,w_),e(ta,Yl),e(Yl,M_),e(ta,$_),e(st,F_),e(st,oa),e(oa,B_),e(oa,fi),e(fi,E_),e(oa,x_),e(st,z_),e(st,na),e(na,P_),e(na,sa),e(sa,j_),e(na,C_),e(st,q_),M(Vn,st,null),e(st,N_),e(st,Ct),M(ra,Ct,null),e(Ct,O_),e(Ct,Do),e(Do,A_),e(Do,gi),e(gi,S_),e(Do,D_),e(Do,Jl),e(Jl,I_),e(Do,L_),e(Ct,W_),M(Gn,Ct,null),e(Ct,R_),M(Yn,Ct,null),_(s,Ec,v),_(s,Io,v),e(Io,Jn),e(Jn,Zl),M(aa,Zl,null),e(Io,U_),e(Io,Xl),e(Xl,K_),_(s,xc,v),_(s,rt,v),M(ia,rt,null),e(rt,H_),e(rt,ed),e(ed,Q_),e(rt,V_),e(rt,la),e(la,G_),e(la,_i),e(_i,Y_),e(la,J_),e(rt,Z_),e(rt,da),e(da,X_),e(da,ca),e(ca,eb),e(da,tb),e(rt,ob),M(Zn,rt,null),e(rt,nb),e(rt,kt),M(pa,kt,null),e(kt,sb),e(kt,Lo),e(Lo,rb),e(Lo,bi),e(bi,ab),e(Lo,ib),e(Lo,td),e(td,lb),e(Lo,db),e(kt,cb),M(Xn,kt,null),e(kt,pb),M(es,kt,null),e(kt,hb),M(ts,kt,null),_(s,zc,v),_(s,Wo,v),e(Wo,os),e(os,od),M(ha,od,null),e(Wo,mb),e(Wo,nd),e(nd,ub),_(s,Pc,v),_(s,at,v),M(ma,at,null),e(at,fb),e(at,sd),e(sd,gb),e(at,_b),e(at,ua),e(ua,bb),e(ua,vi),e(vi,vb),e(ua,kb),e(at,Tb),e(at,fa),e(fa,yb),e(fa,ga),e(ga,wb),e(fa,Mb),e(at,$b),M(ns,at,null),e(at,Fb),e(at,qt),M(_a,qt,null),e(qt,Bb),e(qt,Ro),e(Ro,Eb),e(Ro,ki),e(ki,xb),e(Ro,zb),e(Ro,rd),e(rd,Pb),e(Ro,jb),e(qt,Cb),M(ss,qt,null),e(qt,qb),M(rs,qt,null),_(s,jc,v),_(s,Uo,v),e(Uo,as),e(as,ad),M(ba,ad,null),e(Uo,Nb),e(Uo,id),e(id,Ob),_(s,Cc,v),_(s,it,v),M(va,it,null),e(it,Ab),e(it,ld),e(ld,Sb),e(it,Db),e(it,ka),e(ka,Ib),e(ka,Ti),e(Ti,Lb),e(ka,Wb),e(it,Rb),e(it,Ta),e(Ta,Ub),e(Ta,ya),e(ya,Kb),e(Ta,Hb),e(it,Qb),M(is,it,null),e(it,Vb),e(it,Tt),M(wa,Tt,null),e(Tt,Gb),e(Tt,Ko),e(Ko,Yb),e(Ko,yi),e(yi,Jb),e(Ko,Zb),e(Ko,dd),e(dd,Xb),e(Ko,ev),e(Tt,tv),M(ls,Tt,null),e(Tt,ov),M(ds,Tt,null),e(Tt,nv),M(cs,Tt,null),_(s,qc,v),_(s,Ho,v),e(Ho,ps),e(ps,cd),M(Ma,cd,null),e(Ho,sv),e(Ho,pd),e(pd,rv),_(s,Nc,v),_(s,lt,v),M($a,lt,null),e(lt,av),e(lt,Qo),e(Qo,iv),e(Qo,hd),e(hd,lv),e(Qo,dv),e(Qo,md),e(md,cv),e(Qo,pv),e(lt,hv),e(lt,Fa),e(Fa,mv),e(Fa,wi),e(wi,uv),e(Fa,fv),e(lt,gv),e(lt,Ba),e(Ba,_v),e(Ba,Ea),e(Ea,bv),e(Ba,vv),e(lt,kv),M(hs,lt,null),e(lt,Tv),e(lt,yt),M(xa,yt,null),e(yt,yv),e(yt,Vo),e(Vo,wv),e(Vo,Mi),e(Mi,Mv),e(Vo,$v),e(Vo,ud),e(ud,Fv),e(Vo,Bv),e(yt,Ev),M(ms,yt,null),e(yt,xv),M(us,yt,null),e(yt,zv),M(fs,yt,null),Oc=!0},p(s,[v]){const za={};v&2&&(za.$$scope={dirty:v,ctx:s}),Jo.$set(za);const fd={};v&2&&(fd.$$scope={dirty:v,ctx:s}),sn.$set(fd);const gd={};v&2&&(gd.$$scope={dirty:v,ctx:s}),rn.$set(gd);const _d={};v&2&&(_d.$$scope={dirty:v,ctx:s}),ln.$set(_d);const Pa={};v&2&&(Pa.$$scope={dirty:v,ctx:s}),dn.$set(Pa);const bd={};v&2&&(bd.$$scope={dirty:v,ctx:s}),pn.$set(bd);const vd={};v&2&&(vd.$$scope={dirty:v,ctx:s}),hn.$set(vd);const kd={};v&2&&(kd.$$scope={dirty:v,ctx:s}),mn.$set(kd);const ja={};v&2&&(ja.$$scope={dirty:v,ctx:s}),fn.$set(ja);const Td={};v&2&&(Td.$$scope={dirty:v,ctx:s}),gn.$set(Td);const yd={};v&2&&(yd.$$scope={dirty:v,ctx:s}),bn.$set(yd);const wd={};v&2&&(wd.$$scope={dirty:v,ctx:s}),vn.$set(wd);const Md={};v&2&&(Md.$$scope={dirty:v,ctx:s}),kn.$set(Md);const $d={};v&2&&($d.$$scope={dirty:v,ctx:s}),Tn.$set($d);const Ca={};v&2&&(Ca.$$scope={dirty:v,ctx:s}),yn.$set(Ca);const Fd={};v&2&&(Fd.$$scope={dirty:v,ctx:s}),Mn.$set(Fd);const Bd={};v&2&&(Bd.$$scope={dirty:v,ctx:s}),$n.$set(Bd);const Go={};v&2&&(Go.$$scope={dirty:v,ctx:s}),Bn.$set(Go);const Ed={};v&2&&(Ed.$$scope={dirty:v,ctx:s}),En.$set(Ed);const xd={};v&2&&(xd.$$scope={dirty:v,ctx:s}),xn.$set(xd);const qa={};v&2&&(qa.$$scope={dirty:v,ctx:s}),Pn.$set(qa);const zd={};v&2&&(zd.$$scope={dirty:v,ctx:s}),jn.$set(zd);const Pd={};v&2&&(Pd.$$scope={dirty:v,ctx:s}),Cn.$set(Pd);const jd={};v&2&&(jd.$$scope={dirty:v,ctx:s}),Nn.$set(jd);const Ft={};v&2&&(Ft.$$scope={dirty:v,ctx:s}),On.$set(Ft);const Ut={};v&2&&(Ut.$$scope={dirty:v,ctx:s}),An.$set(Ut);const Cd={};v&2&&(Cd.$$scope={dirty:v,ctx:s}),Dn.$set(Cd);const qd={};v&2&&(qd.$$scope={dirty:v,ctx:s}),In.$set(qd);const Nd={};v&2&&(Nd.$$scope={dirty:v,ctx:s}),Ln.$set(Nd);const Yo={};v&2&&(Yo.$$scope={dirty:v,ctx:s}),Rn.$set(Yo);const Od={};v&2&&(Od.$$scope={dirty:v,ctx:s}),Un.$set(Od);const Ad={};v&2&&(Ad.$$scope={dirty:v,ctx:s}),Kn.$set(Ad);const Sd={};v&2&&(Sd.$$scope={dirty:v,ctx:s}),Hn.$set(Sd);const Na={};v&2&&(Na.$$scope={dirty:v,ctx:s}),Vn.$set(Na);const Dd={};v&2&&(Dd.$$scope={dirty:v,ctx:s}),Gn.$set(Dd);const Id={};v&2&&(Id.$$scope={dirty:v,ctx:s}),Yn.$set(Id);const Ld={};v&2&&(Ld.$$scope={dirty:v,ctx:s}),Zn.$set(Ld);const Kt={};v&2&&(Kt.$$scope={dirty:v,ctx:s}),Xn.$set(Kt);const Wd={};v&2&&(Wd.$$scope={dirty:v,ctx:s}),es.$set(Wd);const gs={};v&2&&(gs.$$scope={dirty:v,ctx:s}),ts.$set(gs);const Rd={};v&2&&(Rd.$$scope={dirty:v,ctx:s}),ns.$set(Rd);const Ud={};v&2&&(Ud.$$scope={dirty:v,ctx:s}),ss.$set(Ud);const Oa={};v&2&&(Oa.$$scope={dirty:v,ctx:s}),rs.$set(Oa);const Kd={};v&2&&(Kd.$$scope={dirty:v,ctx:s}),is.$set(Kd);const Aa={};v&2&&(Aa.$$scope={dirty:v,ctx:s}),ls.$set(Aa);const Hd={};v&2&&(Hd.$$scope={dirty:v,ctx:s}),ds.$set(Hd);const Qd={};v&2&&(Qd.$$scope={dirty:v,ctx:s}),cs.$set(Qd);const Vd={};v&2&&(Vd.$$scope={dirty:v,ctx:s}),hs.$set(Vd);const Ht={};v&2&&(Ht.$$scope={dirty:v,ctx:s}),ms.$set(Ht);const Sa={};v&2&&(Sa.$$scope={dirty:v,ctx:s}),us.$set(Sa);const Gd={};v&2&&(Gd.$$scope={dirty:v,ctx:s}),fs.$set(Gd)},i(s){Oc||($(l.$$.fragment,s),$(T.$$.fragment,s),$(C.$$.fragment,s),$(E.$$.fragment,s),$(Jo.$$.fragment,s),$($s.$$.fragment,s),$(Fs.$$.fragment,s),$(Es.$$.fragment,s),$(xs.$$.fragment,s),$(js.$$.fragment,s),$(Cs.$$.fragment,s),$(Ns.$$.fragment,s),$(As.$$.fragment,s),$(Ss.$$.fragment,s),$(Rs.$$.fragment,s),$(sn.$$.fragment,s),$(rn.$$.fragment,s),$(Us.$$.fragment,s),$(Ks.$$.fragment,s),$(Gs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(Ys.$$.fragment,s),$(Js.$$.fragment,s),$(or.$$.fragment,s),$(pn.$$.fragment,s),$(hn.$$.fragment,s),$(mn.$$.fragment,s),$(nr.$$.fragment,s),$(sr.$$.fragment,s),$(dr.$$.fragment,s),$(fn.$$.fragment,s),$(gn.$$.fragment,s),$(cr.$$.fragment,s),$(pr.$$.fragment,s),$(fr.$$.fragment,s),$(bn.$$.fragment,s),$(vn.$$.fragment,s),$(kn.$$.fragment,s),$(Tn.$$.fragment,s),$(yn.$$.fragment,s),$(gr.$$.fragment,s),$(_r.$$.fragment,s),$(Tr.$$.fragment,s),$(Mn.$$.fragment,s),$($n.$$.fragment,s),$(yr.$$.fragment,s),$(wr.$$.fragment,s),$(Br.$$.fragment,s),$(Bn.$$.fragment,s),$(En.$$.fragment,s),$(xn.$$.fragment,s),$(Er.$$.fragment,s),$(xr.$$.fragment,s),$(Cr.$$.fragment,s),$(Pn.$$.fragment,s),$(jn.$$.fragment,s),$(Cn.$$.fragment,s),$(qr.$$.fragment,s),$(Nr.$$.fragment,s),$(Nn.$$.fragment,s),$(Dr.$$.fragment,s),$(On.$$.fragment,s),$(An.$$.fragment,s),$(Ir.$$.fragment,s),$(Lr.$$.fragment,s),$(Dn.$$.fragment,s),$(Kr.$$.fragment,s),$(In.$$.fragment,s),$(Ln.$$.fragment,s),$(Hr.$$.fragment,s),$(Qr.$$.fragment,s),$(Rn.$$.fragment,s),$(Zr.$$.fragment,s),$(Un.$$.fragment,s),$(Kn.$$.fragment,s),$(Hn.$$.fragment,s),$(Xr.$$.fragment,s),$(ea.$$.fragment,s),$(Vn.$$.fragment,s),$(ra.$$.fragment,s),$(Gn.$$.fragment,s),$(Yn.$$.fragment,s),$(aa.$$.fragment,s),$(ia.$$.fragment,s),$(Zn.$$.fragment,s),$(pa.$$.fragment,s),$(Xn.$$.fragment,s),$(es.$$.fragment,s),$(ts.$$.fragment,s),$(ha.$$.fragment,s),$(ma.$$.fragment,s),$(ns.$$.fragment,s),$(_a.$$.fragment,s),$(ss.$$.fragment,s),$(rs.$$.fragment,s),$(ba.$$.fragment,s),$(va.$$.fragment,s),$(is.$$.fragment,s),$(wa.$$.fragment,s),$(ls.$$.fragment,s),$(ds.$$.fragment,s),$(cs.$$.fragment,s),$(Ma.$$.fragment,s),$($a.$$.fragment,s),$(hs.$$.fragment,s),$(xa.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(fs.$$.fragment,s),Oc=!0)},o(s){F(l.$$.fragment,s),F(T.$$.fragment,s),F(C.$$.fragment,s),F(E.$$.fragment,s),F(Jo.$$.fragment,s),F($s.$$.fragment,s),F(Fs.$$.fragment,s),F(Es.$$.fragment,s),F(xs.$$.fragment,s),F(js.$$.fragment,s),F(Cs.$$.fragment,s),F(Ns.$$.fragment,s),F(As.$$.fragment,s),F(Ss.$$.fragment,s),F(Rs.$$.fragment,s),F(sn.$$.fragment,s),F(rn.$$.fragment,s),F(Us.$$.fragment,s),F(Ks.$$.fragment,s),F(Gs.$$.fragment,s),F(ln.$$.fragment,s),F(dn.$$.fragment,s),F(Ys.$$.fragment,s),F(Js.$$.fragment,s),F(or.$$.fragment,s),F(pn.$$.fragment,s),F(hn.$$.fragment,s),F(mn.$$.fragment,s),F(nr.$$.fragment,s),F(sr.$$.fragment,s),F(dr.$$.fragment,s),F(fn.$$.fragment,s),F(gn.$$.fragment,s),F(cr.$$.fragment,s),F(pr.$$.fragment,s),F(fr.$$.fragment,s),F(bn.$$.fragment,s),F(vn.$$.fragment,s),F(kn.$$.fragment,s),F(Tn.$$.fragment,s),F(yn.$$.fragment,s),F(gr.$$.fragment,s),F(_r.$$.fragment,s),F(Tr.$$.fragment,s),F(Mn.$$.fragment,s),F($n.$$.fragment,s),F(yr.$$.fragment,s),F(wr.$$.fragment,s),F(Br.$$.fragment,s),F(Bn.$$.fragment,s),F(En.$$.fragment,s),F(xn.$$.fragment,s),F(Er.$$.fragment,s),F(xr.$$.fragment,s),F(Cr.$$.fragment,s),F(Pn.$$.fragment,s),F(jn.$$.fragment,s),F(Cn.$$.fragment,s),F(qr.$$.fragment,s),F(Nr.$$.fragment,s),F(Nn.$$.fragment,s),F(Dr.$$.fragment,s),F(On.$$.fragment,s),F(An.$$.fragment,s),F(Ir.$$.fragment,s),F(Lr.$$.fragment,s),F(Dn.$$.fragment,s),F(Kr.$$.fragment,s),F(In.$$.fragment,s),F(Ln.$$.fragment,s),F(Hr.$$.fragment,s),F(Qr.$$.fragment,s),F(Rn.$$.fragment,s),F(Zr.$$.fragment,s),F(Un.$$.fragment,s),F(Kn.$$.fragment,s),F(Hn.$$.fragment,s),F(Xr.$$.fragment,s),F(ea.$$.fragment,s),F(Vn.$$.fragment,s),F(ra.$$.fragment,s),F(Gn.$$.fragment,s),F(Yn.$$.fragment,s),F(aa.$$.fragment,s),F(ia.$$.fragment,s),F(Zn.$$.fragment,s),F(pa.$$.fragment,s),F(Xn.$$.fragment,s),F(es.$$.fragment,s),F(ts.$$.fragment,s),F(ha.$$.fragment,s),F(ma.$$.fragment,s),F(ns.$$.fragment,s),F(_a.$$.fragment,s),F(ss.$$.fragment,s),F(rs.$$.fragment,s),F(ba.$$.fragment,s),F(va.$$.fragment,s),F(is.$$.fragment,s),F(wa.$$.fragment,s),F(ls.$$.fragment,s),F(ds.$$.fragment,s),F(cs.$$.fragment,s),F(Ma.$$.fragment,s),F($a.$$.fragment,s),F(hs.$$.fragment,s),F(xa.$$.fragment,s),F(ms.$$.fragment,s),F(us.$$.fragment,s),F(fs.$$.fragment,s),Oc=!1},d(s){t(d),s&&t(b),s&&t(c),B(l),s&&t(me),s&&t(D),B(T),s&&t(ue),s&&t(L),s&&t(fe),s&&t(R),s&&t(ge),s&&t(U),s&&t(te),s&&t(j),s&&t(_e),s&&t(W),s&&t(q),s&&t(ne),s&&t(be),s&&t(I),B(C),s&&t(ve),s&&t(f),B(E),B(Jo),s&&t(Jd),s&&t(io),B($s),s&&t(Zd),s&&t(Mt),B(Fs),s&&t(Xd),s&&t(lo),B(Es),s&&t(ec),s&&t($t),B(xs),s&&t(tc),s&&t(co),B(js),s&&t(oc),s&&t(po),B(Cs),s&&t(nc),s&&t(ho),B(Ns),s&&t(sc),s&&t(mo),B(As),s&&t(rc),s&&t(et),B(Ss),B(Rs),B(sn),B(rn),s&&t(ac),s&&t(fo),B(Us),s&&t(ic),s&&t(dt),B(Ks),B(Gs),B(ln),B(dn),s&&t(lc),s&&t(bo),B(Ys),s&&t(dc),s&&t(ct),B(Js),B(or),B(pn),B(hn),B(mn),s&&t(cc),s&&t(ko),B(nr),s&&t(pc),s&&t(pt),B(sr),B(dr),B(fn),B(gn),s&&t(hc),s&&t(yo),B(cr),s&&t(mc),s&&t(ht),B(pr),B(fr),B(bn),B(vn),B(kn),B(Tn),B(yn),s&&t(uc),s&&t(Mo),B(gr),s&&t(fc),s&&t(mt),B(_r),B(Tr),B(Mn),B($n),s&&t(gc),s&&t(Fo),B(yr),s&&t(_c),s&&t(ut),B(wr),B(Br),B(Bn),B(En),B(xn),s&&t(bc),s&&t(Eo),B(Er),s&&t(vc),s&&t(ft),B(xr),B(Cr),B(Pn),B(jn),B(Cn),s&&t(kc),s&&t(Po),B(qr),s&&t(Tc),s&&t(tt),B(Nr),B(Nn),B(Dr),B(On),B(An),s&&t(yc),s&&t(Co),B(Ir),s&&t(wc),s&&t(ot),B(Lr),B(Dn),B(Kr),B(In),B(Ln),s&&t(Mc),s&&t(Oo),B(Hr),s&&t($c),s&&t(nt),B(Qr),B(Rn),B(Zr),B(Un),B(Kn),B(Hn),s&&t(Fc),s&&t(So),B(Xr),s&&t(Bc),s&&t(st),B(ea),B(Vn),B(ra),B(Gn),B(Yn),s&&t(Ec),s&&t(Io),B(aa),s&&t(xc),s&&t(rt),B(ia),B(Zn),B(pa),B(Xn),B(es),B(ts),s&&t(zc),s&&t(Wo),B(ha),s&&t(Pc),s&&t(at),B(ma),B(ns),B(_a),B(ss),B(rs),s&&t(jc),s&&t(Uo),B(ba),s&&t(Cc),s&&t(it),B(va),B(is),B(wa),B(ls),B(ds),B(cs),s&&t(qc),s&&t(Ho),B(Ma),s&&t(Nc),s&&t(lt),B($a),B(hs),B(xa),B(ms),B(us),B(fs)}}}const uw={local:"mobilebert",sections:[{local:"overview",title:"Overview"},{local:"transformers.MobileBertConfig",title:"MobileBertConfig"},{local:"transformers.MobileBertTokenizer",title:"MobileBertTokenizer"},{local:"transformers.MobileBertTokenizerFast",title:"MobileBertTokenizerFast"},{local:"transformers.models.mobilebert.modeling_mobilebert.MobileBertForPreTrainingOutput",title:"MobileBert specific outputs"},{local:"transformers.MobileBertModel",title:"MobileBertModel"},{local:"transformers.MobileBertForPreTraining",title:"MobileBertForPreTraining"},{local:"transformers.MobileBertForMaskedLM",title:"MobileBertForMaskedLM"},{local:"transformers.MobileBertForNextSentencePrediction",title:"MobileBertForNextSentencePrediction"},{local:"transformers.MobileBertForSequenceClassification",title:"MobileBertForSequenceClassification"},{local:"transformers.MobileBertForMultipleChoice",title:"MobileBertForMultipleChoice"},{local:"transformers.MobileBertForTokenClassification",title:"MobileBertForTokenClassification"},{local:"transformers.MobileBertForQuestionAnswering",title:"MobileBertForQuestionAnswering"},{local:"transformers.TFMobileBertModel",title:"TFMobileBertModel"},{local:"transformers.TFMobileBertForPreTraining",title:"TFMobileBertForPreTraining"},{local:"transformers.TFMobileBertForMaskedLM",title:"TFMobileBertForMaskedLM"},{local:"transformers.TFMobileBertForNextSentencePrediction",title:"TFMobileBertForNextSentencePrediction"},{local:"transformers.TFMobileBertForSequenceClassification",title:"TFMobileBertForSequenceClassification"},{local:"transformers.TFMobileBertForMultipleChoice",title:"TFMobileBertForMultipleChoice"},{local:"transformers.TFMobileBertForTokenClassification",title:"TFMobileBertForTokenClassification"},{local:"transformers.TFMobileBertForQuestionAnswering",title:"TFMobileBertForQuestionAnswering"}],title:"MobileBERT"};function fw(z){return fy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class yw extends py{constructor(d){super();hy(this,d,fw,mw,my,{})}}export{yw as default,uw as metadata};
