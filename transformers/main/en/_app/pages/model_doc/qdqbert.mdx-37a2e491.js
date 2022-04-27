import{S as vm,i as wm,s as $m,e as a,k as p,w as Q,t as n,M as Tm,c as r,d as o,m as h,a as i,x as v,h as s,b as f,F as e,g as b,y as w,q as $,o as T,B as y,v as ym,L as O}from"../../chunks/vendor-6b77c823.js";import{T as xt}from"../../chunks/Tip-39098574.js";import{D as j}from"../../chunks/Docstring-1088f2fb.js";import{C as M}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as J}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as I}from"../../chunks/ExampleCodeBlock-5212b321.js";function qm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import QDQBertModel, QDQBertConfig

# Initializing a QDQBERT bert-base-uncased style configuration
configuration = QDQBertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = QDQBertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> QDQBertModel, QDQBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a QDQBERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = QDQBertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=a("p"),_=n("Examples:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Dm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function zm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Bm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Mm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertLMHeadModel, QDQBertConfig
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-cased")
config = QDQBertConfig.from_pretrained("bert-base-cased")
config.is_decoder = True
model = QDQBertLMHeadModel.from_pretrained("bert-base-cased", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertLMHeadModel, QDQBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = QDQBertConfig.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function xm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function jm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Em(q){let d,_;return d=new M({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){Q(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:O,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Fm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Cm(q){let d,_,c,m,k;return m=new M({props:{code:`import torch
from transformers import BertTokenizer, QDQBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example of single-label classification:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example of single-label classification:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Pm(q){let d,_;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = QDQBertForSequenceClassification.from_pretrained("bert-base-uncased", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){Q(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:O,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Am(q){let d,_,c,m,k;return m=new M({props:{code:`import torch
from transformers import BertTokenizer, QDQBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForSequenceClassification.from_pretrained("bert-base-uncased", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=n("Example of multi-label classification:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example of multi-label classification:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Nm(q){let d,_;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = QDQBertForSequenceClassification.from_pretrained(
    "bert-base-uncased", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;bert-base-uncased&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){Q(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:O,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Sm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Lm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Im(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Om(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Wm(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Hm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForTokenClassification.from_pretrained("bert-base-uncased")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

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
`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Rm(q){let d,_;return d=new M({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){Q(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:O,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Um(q){let d,_,c,m,k;return{c(){d=a("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),k=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,k)},d(l){l&&o(d)}}}function Vm(q){let d,_,c,m,k;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = QDQBertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, QDQBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = QDQBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=n("Example:"),c=p(),Q(m.$$.fragment)},l(l){d=r(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),v(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),k=!0},p:O,i(l){k||($(m.$$.fragment,l),k=!0)},o(l){T(m.$$.fragment,l),k=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Xm(q){let d,_;return d=new M({props:{code:`# target is "nice puppet"
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
`}}),{c(){Q(d.$$.fragment)},l(c){v(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:O,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Jm(q){let d,_,c,m,k,l,u,D,Dr,da,fe,Se,Sn,jt,zr,Ln,Br,ca,Le,Mr,Et,xr,jr,pa,tn,Er,ha,on,In,Fr,ma,nn,Cr,ua,G,On,Wn,Pr,Ar,Hn,Ie,Nr,Ft,Sr,Lr,Rn,Ir,Or,Un,Ct,Wr,Vn,Hr,Rr,Ur,Xn,Pt,Vr,sn,Xr,Jr,fa,Oe,Kr,At,Gr,Yr,ga,ge,We,Jn,Nt,Zr,Kn,ei,_a,E,ti,Gn,oi,ni,St,si,ai,Yn,ri,ii,Zn,li,di,Lt,ci,pi,ba,He,hi,es,mi,ui,ka,an,fi,Qa,It,va,_e,Re,ts,Ot,gi,os,_i,wa,rn,bi,$a,Wt,Ta,be,Ue,ns,Ht,ki,ss,Qi,ya,se,vi,Rt,wi,$i,Ut,Ti,yi,qa,Vt,Da,ke,Ve,as,Xt,qi,rs,Di,za,K,Jt,zi,Qe,Bi,ln,Mi,xi,Kt,ji,Ei,Fi,ve,Ci,dn,Pi,Ai,cn,Ni,Si,Li,Xe,Ba,we,Je,is,Gt,Ii,ls,Oi,Ma,z,Yt,Wi,ds,Hi,Ri,Zt,Ui,pn,Vi,Xi,Ji,eo,Ki,to,Gi,Yi,Zi,oo,el,no,tl,ol,nl,x,sl,cs,al,rl,ps,il,ll,hs,dl,cl,ms,pl,hl,us,ml,ul,fs,fl,gl,_l,Y,so,bl,$e,kl,hn,Ql,vl,gs,wl,$l,Tl,Ke,yl,Ge,xa,Te,Ye,_s,ao,ql,bs,Dl,ja,F,ro,zl,io,Bl,ks,Ml,xl,jl,lo,El,mn,Fl,Cl,Pl,co,Al,po,Nl,Sl,Ll,Z,ho,Il,ye,Ol,un,Wl,Hl,Qs,Rl,Ul,Vl,Ze,Xl,et,Ea,qe,tt,vs,mo,Jl,ws,Kl,Fa,C,uo,Gl,fo,Yl,$s,Zl,ed,td,go,od,fn,nd,sd,ad,_o,rd,bo,id,ld,dd,W,ko,cd,De,pd,gn,hd,md,Ts,ud,fd,gd,ot,_d,nt,bd,st,Ca,ze,at,ys,Qo,kd,qs,Qd,Pa,P,vo,vd,Ds,wd,$d,wo,Td,_n,yd,qd,Dd,$o,zd,To,Bd,Md,xd,B,yo,jd,Be,Ed,bn,Fd,Cd,zs,Pd,Ad,Nd,rt,Sd,it,Ld,lt,Id,dt,Od,ct,Aa,Me,pt,Bs,qo,Wd,Ms,Hd,Na,A,Do,Rd,zo,Ud,xs,Vd,Xd,Jd,Bo,Kd,kn,Gd,Yd,Zd,Mo,ec,xo,tc,oc,nc,ee,jo,sc,xe,ac,Qn,rc,ic,js,lc,dc,cc,ht,pc,mt,Sa,je,ut,Es,Eo,hc,Fs,mc,La,N,Fo,uc,Cs,fc,gc,Co,_c,vn,bc,kc,Qc,Po,vc,Ao,wc,$c,Tc,te,No,yc,Ee,qc,wn,Dc,zc,Ps,Bc,Mc,xc,ft,jc,gt,Ia,Fe,_t,As,So,Ec,Ns,Fc,Oa,S,Lo,Cc,Ss,Pc,Ac,Io,Nc,$n,Sc,Lc,Ic,Oo,Oc,Wo,Wc,Hc,Rc,H,Ho,Uc,Ce,Vc,Tn,Xc,Jc,Ls,Kc,Gc,Yc,bt,Zc,kt,ep,Qt,Wa,Pe,vt,Is,Ro,tp,Os,op,Ha,L,Uo,np,Ae,sp,Ws,ap,rp,Hs,ip,lp,dp,Vo,cp,yn,pp,hp,mp,Xo,up,Jo,fp,gp,_p,R,Ko,bp,Ne,kp,qn,Qp,vp,Rs,wp,$p,Tp,wt,yp,$t,qp,Tt,Ra;return l=new J({}),jt=new J({}),Nt=new J({}),It=new M({props:{code:`import pytorch_quantization.nn as quant_nn
from pytorch_quantization.tensor_quant import QuantDescriptor

# The default tensor quantizer is set to use Max calibration method
input_desc = QuantDescriptor(num_bits=8, calib_method="max")
# The default tensor quantizer is set to be per-channel quantization for weights
weight_desc = QuantDescriptor(num_bits=8, axis=((0,)))
quant_nn.QuantLinear.set_default_quant_desc_input(input_desc)
quant_nn.QuantLinear.set_default_quant_desc_weight(weight_desc)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pytorch_quantization.nn <span class="hljs-keyword">as</span> quant_nn
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pytorch_quantization.tensor_quant <span class="hljs-keyword">import</span> QuantDescriptor

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The default tensor quantizer is set to use Max calibration method</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_desc = QuantDescriptor(num_bits=<span class="hljs-number">8</span>, calib_method=<span class="hljs-string">&quot;max&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The default tensor quantizer is set to be per-channel quantization for weights</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>weight_desc = QuantDescriptor(num_bits=<span class="hljs-number">8</span>, axis=((<span class="hljs-number">0</span>,)))
<span class="hljs-meta">&gt;&gt;&gt; </span>quant_nn.QuantLinear.set_default_quant_desc_input(input_desc)
<span class="hljs-meta">&gt;&gt;&gt; </span>quant_nn.QuantLinear.set_default_quant_desc_weight(weight_desc)`}}),Ot=new J({}),Wt=new M({props:{code:`# Find the TensorQuantizer and enable calibration
for name, module in model.named_modules():
    if name.endswith("_input_quantizer"):
        module.enable_calib()
        module.disable_quant()  # Use full precision data to calibrate

# Feeding data samples
model(x)
# ...

# Finalize calibration
for name, module in model.named_modules():
    if name.endswith("_input_quantizer"):
        module.load_calib_amax()
        module.enable_quant()

# If running on GPU, it needs to call .cuda() again because new tensors will be created by calibration process
model.cuda()

# Keep running the quantized model
# ...`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Find the TensorQuantizer and enable calibration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> name, module <span class="hljs-keyword">in</span> model.named_modules():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> name.endswith(<span class="hljs-string">&quot;_input_quantizer&quot;</span>):
<span class="hljs-meta">... </span>        module.enable_calib()
<span class="hljs-meta">... </span>        module.disable_quant()  <span class="hljs-comment"># Use full precision data to calibrate</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Feeding data samples</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model(x)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ...</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Finalize calibration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> name, module <span class="hljs-keyword">in</span> model.named_modules():
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> name.endswith(<span class="hljs-string">&quot;_input_quantizer&quot;</span>):
<span class="hljs-meta">... </span>        module.load_calib_amax()
<span class="hljs-meta">... </span>        module.enable_quant()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># If running on GPU, it needs to call .cuda() again because new tensors will be created by calibration process</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.cuda()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Keep running the quantized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ...</span>`}}),Ht=new J({}),Vt=new M({props:{code:`from pytorch_quantization.nn import TensorQuantizer

TensorQuantizer.use_fb_fake_quant = True

# Load the calibrated model
...
# ONNX export
torch.onnx.export(...)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pytorch_quantization.nn <span class="hljs-keyword">import</span> TensorQuantizer

<span class="hljs-meta">&gt;&gt;&gt; </span>TensorQuantizer.use_fb_fake_quant = <span class="hljs-literal">True</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load the calibrated model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>...
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># ONNX export</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.onnx.export(...)`}}),Xt=new J({}),Jt=new j({props:{name:"class transformers.QDQBertConfig",anchor:"transformers.QDQBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the QDQBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.QDQBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimension of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.QDQBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.QDQBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.QDQBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimension of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.QDQBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.QDQBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.QDQBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.QDQBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.QDQBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.QDQBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.QDQBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.QDQBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/configuration_qdqbert.py#L29"}}),Xe=new I({props:{anchor:"transformers.QDQBertConfig.example",$$slots:{default:[qm]},$$scope:{ctx:q}}}),Gt=new J({}),Yt=new j({props:{name:"class transformers.QDQBertModel",anchor:"transformers.QDQBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.QDQBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L832"}}),so=new j({props:{name:"forward",anchor:"transformers.QDQBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.QDQBertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.QDQBertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.QDQBertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L872",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),Ke=new xt({props:{$$slots:{default:[Dm]},$$scope:{ctx:q}}}),Ge=new I({props:{anchor:"transformers.QDQBertModel.forward.example",$$slots:{default:[zm]},$$scope:{ctx:q}}}),ao=new J({}),ro=new j({props:{name:"class transformers.QDQBertLMHeadModel",anchor:"transformers.QDQBertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1013"}}),ho=new j({props:{name:"forward",anchor:"transformers.QDQBertLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"past_key_values",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.QDQBertLMHeadModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.QDQBertLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.QDQBertLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.QDQBertLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1036",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),Ze=new xt({props:{$$slots:{default:[Bm]},$$scope:{ctx:q}}}),et=new I({props:{anchor:"transformers.QDQBertLMHeadModel.forward.example",$$slots:{default:[Mm]},$$scope:{ctx:q}}}),mo=new J({}),uo=new j({props:{name:"class transformers.QDQBertForMaskedLM",anchor:"transformers.QDQBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1161"}}),ko=new j({props:{name:"forward",anchor:"transformers.QDQBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1187",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ot=new xt({props:{$$slots:{default:[xm]},$$scope:{ctx:q}}}),nt=new I({props:{anchor:"transformers.QDQBertForMaskedLM.forward.example",$$slots:{default:[jm]},$$scope:{ctx:q}}}),st=new I({props:{anchor:"transformers.QDQBertForMaskedLM.forward.example-2",$$slots:{default:[Em]},$$scope:{ctx:q}}}),Qo=new J({}),vo=new j({props:{name:"class transformers.QDQBertForSequenceClassification",anchor:"transformers.QDQBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1375"}}),yo=new j({props:{name:"forward",anchor:"transformers.QDQBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1387",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),rt=new xt({props:{$$slots:{default:[Fm]},$$scope:{ctx:q}}}),it=new I({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example",$$slots:{default:[Cm]},$$scope:{ctx:q}}}),lt=new I({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-2",$$slots:{default:[Pm]},$$scope:{ctx:q}}}),dt=new I({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-3",$$slots:{default:[Am]},$$scope:{ctx:q}}}),ct=new I({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-4",$$slots:{default:[Nm]},$$scope:{ctx:q}}}),qo=new J({}),Do=new j({props:{name:"class transformers.QDQBertForNextSentencePrediction",anchor:"transformers.QDQBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1272"}}),jo=new j({props:{name:"forward",anchor:"transformers.QDQBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1282",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ht=new xt({props:{$$slots:{default:[Sm]},$$scope:{ctx:q}}}),mt=new I({props:{anchor:"transformers.QDQBertForNextSentencePrediction.forward.example",$$slots:{default:[Lm]},$$scope:{ctx:q}}}),Eo=new J({}),Fo=new j({props:{name:"class transformers.QDQBertForMultipleChoice",anchor:"transformers.QDQBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1473"}}),No=new j({props:{name:"forward",anchor:"transformers.QDQBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1484",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),ft=new xt({props:{$$slots:{default:[Im]},$$scope:{ctx:q}}}),gt=new I({props:{anchor:"transformers.QDQBertForMultipleChoice.forward.example",$$slots:{default:[Om]},$$scope:{ctx:q}}}),So=new J({}),Lo=new j({props:{name:"class transformers.QDQBertForTokenClassification",anchor:"transformers.QDQBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1565"}}),Ho=new j({props:{name:"forward",anchor:"transformers.QDQBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1580",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),bt=new xt({props:{$$slots:{default:[Wm]},$$scope:{ctx:q}}}),kt=new I({props:{anchor:"transformers.QDQBertForTokenClassification.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:q}}}),Qt=new I({props:{anchor:"transformers.QDQBertForTokenClassification.forward.example-2",$$slots:{default:[Rm]},$$scope:{ctx:q}}}),Ro=new J({}),Uo=new j({props:{name:"class transformers.QDQBertForQuestionAnswering",anchor:"transformers.QDQBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1647"}}),Ko=new j({props:{name:"forward",anchor:"transformers.QDQBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/qdqbert/modeling_qdqbert.py#L1661",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertConfig"
>QDQBertConfig</a>) and inputs.</p>
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
`}}),wt=new xt({props:{$$slots:{default:[Um]},$$scope:{ctx:q}}}),$t=new I({props:{anchor:"transformers.QDQBertForQuestionAnswering.forward.example",$$slots:{default:[Vm]},$$scope:{ctx:q}}}),Tt=new I({props:{anchor:"transformers.QDQBertForQuestionAnswering.forward.example-2",$$slots:{default:[Xm]},$$scope:{ctx:q}}}),{c(){d=a("meta"),_=p(),c=a("h1"),m=a("a"),k=a("span"),Q(l.$$.fragment),u=p(),D=a("span"),Dr=n("QDQBERT"),da=p(),fe=a("h2"),Se=a("a"),Sn=a("span"),Q(jt.$$.fragment),zr=p(),Ln=a("span"),Br=n("Overview"),ca=p(),Le=a("p"),Mr=n("The QDQBERT model can be referenced in "),Et=a("a"),xr=n(`Integer Quantization for Deep Learning Inference: Principles and Empirical
Evaluation`),jr=n(` by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius
Micikevicius.`),pa=p(),tn=a("p"),Er=n("The abstract from the paper is the following:"),ha=p(),on=a("p"),In=a("em"),Fr=n(`Quantization techniques can reduce the size of Deep Neural Networks and improve inference latency and throughput by
taking advantage of high throughput integer instructions. In this paper we review the mathematical aspects of
quantization parameters and evaluate their choices on a wide range of neural network models for different application
domains, including vision, speech, and language. We focus on quantization techniques that are amenable to acceleration
by processors with high-throughput integer math pipelines. We also present a workflow for 8-bit quantization that is
able to maintain accuracy within 1% of the floating-point baseline on all networks studied, including models that are
more difficult to quantize, such as MobileNets and BERT-large.`),ma=p(),nn=a("p"),Cr=n("Tips:"),ua=p(),G=a("ul"),On=a("li"),Wn=a("p"),Pr=n(`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to (i) linear layer
inputs and weights, (ii) matmul inputs, (iii) residual add inputs, in BERT model.`),Ar=p(),Hn=a("li"),Ie=a("p"),Nr=n("QDQBERT requires the dependency of "),Ft=a("a"),Sr=n("Pytorch Quantization Toolkit"),Lr=n(". To install "),Rn=a("code"),Ir=n("pip install pytorch-quantization --extra-index-url https://pypi.ngc.nvidia.com"),Or=p(),Un=a("li"),Ct=a("p"),Wr=n("QDQBERT model can be loaded from any checkpoint of HuggingFace BERT model (for example "),Vn=a("em"),Hr=n("bert-base-uncased"),Rr=n(`), and
perform Quantization Aware Training/Post Training Quantization.`),Ur=p(),Xn=a("li"),Pt=a("p"),Vr=n(`A complete example of using QDQBERT model to perform Quatization Aware Training and Post Training Quantization for
SQUAD task can be found at `),sn=a("a"),Xr=n("transformers/examples/research_projects/quantization-qdqbert/"),Jr=n("."),fa=p(),Oe=a("p"),Kr=n("This model was contributed by "),At=a("a"),Gr=n("shangz"),Yr=n("."),ga=p(),ge=a("h3"),We=a("a"),Jn=a("span"),Q(Nt.$$.fragment),Zr=p(),Kn=a("span"),ei=n("Set default quantizers"),_a=p(),E=a("p"),ti=n(`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to BERT by
`),Gn=a("code"),oi=n("TensorQuantizer"),ni=n(" in "),St=a("a"),si=n("Pytorch Quantization Toolkit"),ai=n(". "),Yn=a("code"),ri=n("TensorQuantizer"),ii=n(` is the module
for quantizing tensors, with `),Zn=a("code"),li=n("QuantDescriptor"),di=n(" defining how the tensor should be quantized. Refer to "),Lt=a("a"),ci=n(`Pytorch
Quantization Toolkit userguide`),pi=n(" for more details."),ba=p(),He=a("p"),hi=n("Before creating QDQBERT model, one has to set the default "),es=a("code"),mi=n("QuantDescriptor"),ui=n(" defining default tensor quantizers."),ka=p(),an=a("p"),fi=n("Example:"),Qa=p(),Q(It.$$.fragment),va=p(),_e=a("h3"),Re=a("a"),ts=a("span"),Q(Ot.$$.fragment),gi=p(),os=a("span"),_i=n("Calibration"),wa=p(),rn=a("p"),bi=n(`Calibration is the terminology of passing data samples to the quantizer and deciding the best scaling factors for
tensors. After setting up the tensor quantizers, one can use the following example to calibrate the model:`),$a=p(),Q(Wt.$$.fragment),Ta=p(),be=a("h3"),Ue=a("a"),ns=a("span"),Q(Ht.$$.fragment),ki=p(),ss=a("span"),Qi=n("Export to ONNX"),ya=p(),se=a("p"),vi=n("The goal of exporting to ONNX is to deploy inference by "),Rt=a("a"),wi=n("TensorRT"),$i=n(`. Fake
quantization will be broken into a pair of QuantizeLinear/DequantizeLinear ONNX ops. After setting static member of
TensorQuantizer to use Pytorch\u2019s own fake quantization functions, fake quantized model can be exported to ONNX, follow
the instructions in `),Ut=a("a"),Ti=n("torch.onnx"),yi=n(". Example:"),qa=p(),Q(Vt.$$.fragment),Da=p(),ke=a("h2"),Ve=a("a"),as=a("span"),Q(Xt.$$.fragment),qi=p(),rs=a("span"),Di=n("QDQBertConfig"),za=p(),K=a("div"),Q(Jt.$$.fragment),zi=p(),Qe=a("p"),Bi=n("This is the configuration class to store the configuration of a "),ln=a("a"),Mi=n("QDQBertModel"),xi=n(`. It is used to instantiate an
QDQBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BERT
`),Kt=a("a"),ji=n("bert-base-uncased"),Ei=n(" architecture."),Fi=p(),ve=a("p"),Ci=n("Configuration objects inherit from "),dn=a("a"),Pi=n("PretrainedConfig"),Ai=n(` and can be used to control the model outputs. Read the
documentation from `),cn=a("a"),Ni=n("PretrainedConfig"),Si=n(" for more information."),Li=p(),Q(Xe.$$.fragment),Ba=p(),we=a("h2"),Je=a("a"),is=a("span"),Q(Gt.$$.fragment),Ii=p(),ls=a("span"),Oi=n("QDQBertModel"),Ma=p(),z=a("div"),Q(Yt.$$.fragment),Wi=p(),ds=a("p"),Hi=n("The bare QDQBERT Model transformer outputting raw hidden-states without any specific head on top."),Ri=p(),Zt=a("p"),Ui=n("This model inherits from "),pn=a("a"),Vi=n("PreTrainedModel"),Xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji=p(),eo=a("p"),Ki=n("This model is also a PyTorch "),to=a("a"),Gi=n("torch.nn.Module"),Yi=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zi=p(),oo=a("p"),el=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),no=a("a"),tl=n(`Attention is
all you need`),ol=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),nl=p(),x=a("p"),sl=n("To behave as an decoder the model needs to be initialized with the "),cs=a("code"),al=n("is_decoder"),rl=n(` argument of the configuration set
to `),ps=a("code"),il=n("True"),ll=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),hs=a("code"),dl=n("is_decoder"),cl=n(` argument and
`),ms=a("code"),pl=n("add_cross_attention"),hl=n(" set to "),us=a("code"),ml=n("True"),ul=n("; an "),fs=a("code"),fl=n("encoder_hidden_states"),gl=n(" is then expected as an input to the forward pass."),_l=p(),Y=a("div"),Q(so.$$.fragment),bl=p(),$e=a("p"),kl=n("The "),hn=a("a"),Ql=n("QDQBertModel"),vl=n(" forward method, overrides the "),gs=a("code"),wl=n("__call__"),$l=n(" special method."),Tl=p(),Q(Ke.$$.fragment),yl=p(),Q(Ge.$$.fragment),xa=p(),Te=a("h2"),Ye=a("a"),_s=a("span"),Q(ao.$$.fragment),ql=p(),bs=a("span"),Dl=n("QDQBertLMHeadModel"),ja=p(),F=a("div"),Q(ro.$$.fragment),zl=p(),io=a("p"),Bl=n("QDQBERT Model with a "),ks=a("code"),Ml=n("language modeling"),xl=n(" head on top for CLM fine-tuning."),jl=p(),lo=a("p"),El=n("This model inherits from "),mn=a("a"),Fl=n("PreTrainedModel"),Cl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pl=p(),co=a("p"),Al=n("This model is also a PyTorch "),po=a("a"),Nl=n("torch.nn.Module"),Sl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ll=p(),Z=a("div"),Q(ho.$$.fragment),Il=p(),ye=a("p"),Ol=n("The "),un=a("a"),Wl=n("QDQBertLMHeadModel"),Hl=n(" forward method, overrides the "),Qs=a("code"),Rl=n("__call__"),Ul=n(" special method."),Vl=p(),Q(Ze.$$.fragment),Xl=p(),Q(et.$$.fragment),Ea=p(),qe=a("h2"),tt=a("a"),vs=a("span"),Q(mo.$$.fragment),Jl=p(),ws=a("span"),Kl=n("QDQBertForMaskedLM"),Fa=p(),C=a("div"),Q(uo.$$.fragment),Gl=p(),fo=a("p"),Yl=n("QDQBERT Model with a "),$s=a("code"),Zl=n("language modeling"),ed=n(" head on top."),td=p(),go=a("p"),od=n("This model inherits from "),fn=a("a"),nd=n("PreTrainedModel"),sd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad=p(),_o=a("p"),rd=n("This model is also a PyTorch "),bo=a("a"),id=n("torch.nn.Module"),ld=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd=p(),W=a("div"),Q(ko.$$.fragment),cd=p(),De=a("p"),pd=n("The "),gn=a("a"),hd=n("QDQBertForMaskedLM"),md=n(" forward method, overrides the "),Ts=a("code"),ud=n("__call__"),fd=n(" special method."),gd=p(),Q(ot.$$.fragment),_d=p(),Q(nt.$$.fragment),bd=p(),Q(st.$$.fragment),Ca=p(),ze=a("h2"),at=a("a"),ys=a("span"),Q(Qo.$$.fragment),kd=p(),qs=a("span"),Qd=n("QDQBertForSequenceClassification"),Pa=p(),P=a("div"),Q(vo.$$.fragment),vd=p(),Ds=a("p"),wd=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$d=p(),wo=a("p"),Td=n("This model inherits from "),_n=a("a"),yd=n("PreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=p(),$o=a("p"),zd=n("This model is also a PyTorch "),To=a("a"),Bd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=p(),B=a("div"),Q(yo.$$.fragment),jd=p(),Be=a("p"),Ed=n("The "),bn=a("a"),Fd=n("QDQBertForSequenceClassification"),Cd=n(" forward method, overrides the "),zs=a("code"),Pd=n("__call__"),Ad=n(" special method."),Nd=p(),Q(rt.$$.fragment),Sd=p(),Q(it.$$.fragment),Ld=p(),Q(lt.$$.fragment),Id=p(),Q(dt.$$.fragment),Od=p(),Q(ct.$$.fragment),Aa=p(),Me=a("h2"),pt=a("a"),Bs=a("span"),Q(qo.$$.fragment),Wd=p(),Ms=a("span"),Hd=n("QDQBertForNextSentencePrediction"),Na=p(),A=a("div"),Q(Do.$$.fragment),Rd=p(),zo=a("p"),Ud=n("Bert Model with a "),xs=a("code"),Vd=n("next sentence prediction (classification)"),Xd=n(" head on top."),Jd=p(),Bo=a("p"),Kd=n("This model inherits from "),kn=a("a"),Gd=n("PreTrainedModel"),Yd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd=p(),Mo=a("p"),ec=n("This model is also a PyTorch "),xo=a("a"),tc=n("torch.nn.Module"),oc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nc=p(),ee=a("div"),Q(jo.$$.fragment),sc=p(),xe=a("p"),ac=n("The "),Qn=a("a"),rc=n("QDQBertForNextSentencePrediction"),ic=n(" forward method, overrides the "),js=a("code"),lc=n("__call__"),dc=n(" special method."),cc=p(),Q(ht.$$.fragment),pc=p(),Q(mt.$$.fragment),Sa=p(),je=a("h2"),ut=a("a"),Es=a("span"),Q(Eo.$$.fragment),hc=p(),Fs=a("span"),mc=n("QDQBertForMultipleChoice"),La=p(),N=a("div"),Q(Fo.$$.fragment),uc=p(),Cs=a("p"),fc=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),gc=p(),Co=a("p"),_c=n("This model inherits from "),vn=a("a"),bc=n("PreTrainedModel"),kc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qc=p(),Po=a("p"),vc=n("This model is also a PyTorch "),Ao=a("a"),wc=n("torch.nn.Module"),$c=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=p(),te=a("div"),Q(No.$$.fragment),yc=p(),Ee=a("p"),qc=n("The "),wn=a("a"),Dc=n("QDQBertForMultipleChoice"),zc=n(" forward method, overrides the "),Ps=a("code"),Bc=n("__call__"),Mc=n(" special method."),xc=p(),Q(ft.$$.fragment),jc=p(),Q(gt.$$.fragment),Ia=p(),Fe=a("h2"),_t=a("a"),As=a("span"),Q(So.$$.fragment),Ec=p(),Ns=a("span"),Fc=n("QDQBertForTokenClassification"),Oa=p(),S=a("div"),Q(Lo.$$.fragment),Cc=p(),Ss=a("p"),Pc=n(`QDQBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ac=p(),Io=a("p"),Nc=n("This model inherits from "),$n=a("a"),Sc=n("PreTrainedModel"),Lc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ic=p(),Oo=a("p"),Oc=n("This model is also a PyTorch "),Wo=a("a"),Wc=n("torch.nn.Module"),Hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc=p(),H=a("div"),Q(Ho.$$.fragment),Uc=p(),Ce=a("p"),Vc=n("The "),Tn=a("a"),Xc=n("QDQBertForTokenClassification"),Jc=n(" forward method, overrides the "),Ls=a("code"),Kc=n("__call__"),Gc=n(" special method."),Yc=p(),Q(bt.$$.fragment),Zc=p(),Q(kt.$$.fragment),ep=p(),Q(Qt.$$.fragment),Wa=p(),Pe=a("h2"),vt=a("a"),Is=a("span"),Q(Ro.$$.fragment),tp=p(),Os=a("span"),op=n("QDQBertForQuestionAnswering"),Ha=p(),L=a("div"),Q(Uo.$$.fragment),np=p(),Ae=a("p"),sp=n(`QDQBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=a("code"),ap=n("span start logits"),rp=n(" and "),Hs=a("code"),ip=n("span end logits"),lp=n(")."),dp=p(),Vo=a("p"),cp=n("This model inherits from "),yn=a("a"),pp=n("PreTrainedModel"),hp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=p(),Xo=a("p"),up=n("This model is also a PyTorch "),Jo=a("a"),fp=n("torch.nn.Module"),gp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p=p(),R=a("div"),Q(Ko.$$.fragment),bp=p(),Ne=a("p"),kp=n("The "),qn=a("a"),Qp=n("QDQBertForQuestionAnswering"),vp=n(" forward method, overrides the "),Rs=a("code"),wp=n("__call__"),$p=n(" special method."),Tp=p(),Q(wt.$$.fragment),yp=p(),Q($t.$$.fragment),qp=p(),Q(Tt.$$.fragment),this.h()},l(t){const g=Tm('[data-svelte="svelte-1phssyn"]',document.head);d=r(g,"META",{name:!0,content:!0}),g.forEach(o),_=h(t),c=r(t,"H1",{class:!0});var Go=i(c);m=r(Go,"A",{id:!0,class:!0,href:!0});var Us=i(m);k=r(Us,"SPAN",{});var Vs=i(k);v(l.$$.fragment,Vs),Vs.forEach(o),Us.forEach(o),u=h(Go),D=r(Go,"SPAN",{});var Xs=i(D);Dr=s(Xs,"QDQBERT"),Xs.forEach(o),Go.forEach(o),da=h(t),fe=r(t,"H2",{class:!0});var Yo=i(fe);Se=r(Yo,"A",{id:!0,class:!0,href:!0});var Js=i(Se);Sn=r(Js,"SPAN",{});var Ks=i(Sn);v(jt.$$.fragment,Ks),Ks.forEach(o),Js.forEach(o),zr=h(Yo),Ln=r(Yo,"SPAN",{});var Gs=i(Ln);Br=s(Gs,"Overview"),Gs.forEach(o),Yo.forEach(o),ca=h(t),Le=r(t,"P",{});var Zo=i(Le);Mr=s(Zo,"The QDQBERT model can be referenced in "),Et=r(Zo,"A",{href:!0,rel:!0});var Ys=i(Et);xr=s(Ys,`Integer Quantization for Deep Learning Inference: Principles and Empirical
Evaluation`),Ys.forEach(o),jr=s(Zo,` by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius
Micikevicius.`),Zo.forEach(o),pa=h(t),tn=r(t,"P",{});var Zs=i(tn);Er=s(Zs,"The abstract from the paper is the following:"),Zs.forEach(o),ha=h(t),on=r(t,"P",{});var ea=i(on);In=r(ea,"EM",{});var ta=i(In);Fr=s(ta,`Quantization techniques can reduce the size of Deep Neural Networks and improve inference latency and throughput by
taking advantage of high throughput integer instructions. In this paper we review the mathematical aspects of
quantization parameters and evaluate their choices on a wide range of neural network models for different application
domains, including vision, speech, and language. We focus on quantization techniques that are amenable to acceleration
by processors with high-throughput integer math pipelines. We also present a workflow for 8-bit quantization that is
able to maintain accuracy within 1% of the floating-point baseline on all networks studied, including models that are
more difficult to quantize, such as MobileNets and BERT-large.`),ta.forEach(o),ea.forEach(o),ma=h(t),nn=r(t,"P",{});var oa=i(nn);Cr=s(oa,"Tips:"),oa.forEach(o),ua=h(t),G=r(t,"UL",{});var ne=i(G);On=r(ne,"LI",{});var na=i(On);Wn=r(na,"P",{});var sa=i(Wn);Pr=s(sa,`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to (i) linear layer
inputs and weights, (ii) matmul inputs, (iii) residual add inputs, in BERT model.`),sa.forEach(o),na.forEach(o),Ar=h(ne),Hn=r(ne,"LI",{});var aa=i(Hn);Ie=r(aa,"P",{});var yt=i(Ie);Nr=s(yt,"QDQBERT requires the dependency of "),Ft=r(yt,"A",{href:!0,rel:!0});var ra=i(Ft);Sr=s(ra,"Pytorch Quantization Toolkit"),ra.forEach(o),Lr=s(yt,". To install "),Rn=r(yt,"CODE",{});var ia=i(Rn);Ir=s(ia,"pip install pytorch-quantization --extra-index-url https://pypi.ngc.nvidia.com"),ia.forEach(o),yt.forEach(o),aa.forEach(o),Or=h(ne),Un=r(ne,"LI",{});var la=i(Un);Ct=r(la,"P",{});var en=i(Ct);Wr=s(en,"QDQBERT model can be loaded from any checkpoint of HuggingFace BERT model (for example "),Vn=r(en,"EM",{});var Dp=i(Vn);Hr=s(Dp,"bert-base-uncased"),Dp.forEach(o),Rr=s(en,`), and
perform Quantization Aware Training/Post Training Quantization.`),en.forEach(o),la.forEach(o),Ur=h(ne),Xn=r(ne,"LI",{});var zp=i(Xn);Pt=r(zp,"P",{});var Ua=i(Pt);Vr=s(Ua,`A complete example of using QDQBERT model to perform Quatization Aware Training and Post Training Quantization for
SQUAD task can be found at `),sn=r(Ua,"A",{href:!0});var Bp=i(sn);Xr=s(Bp,"transformers/examples/research_projects/quantization-qdqbert/"),Bp.forEach(o),Jr=s(Ua,"."),Ua.forEach(o),zp.forEach(o),ne.forEach(o),fa=h(t),Oe=r(t,"P",{});var Va=i(Oe);Kr=s(Va,"This model was contributed by "),At=r(Va,"A",{href:!0,rel:!0});var Mp=i(At);Gr=s(Mp,"shangz"),Mp.forEach(o),Yr=s(Va,"."),Va.forEach(o),ga=h(t),ge=r(t,"H3",{class:!0});var Xa=i(ge);We=r(Xa,"A",{id:!0,class:!0,href:!0});var xp=i(We);Jn=r(xp,"SPAN",{});var jp=i(Jn);v(Nt.$$.fragment,jp),jp.forEach(o),xp.forEach(o),Zr=h(Xa),Kn=r(Xa,"SPAN",{});var Ep=i(Kn);ei=s(Ep,"Set default quantizers"),Ep.forEach(o),Xa.forEach(o),_a=h(t),E=r(t,"P",{});var oe=i(E);ti=s(oe,`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to BERT by
`),Gn=r(oe,"CODE",{});var Fp=i(Gn);oi=s(Fp,"TensorQuantizer"),Fp.forEach(o),ni=s(oe," in "),St=r(oe,"A",{href:!0,rel:!0});var Cp=i(St);si=s(Cp,"Pytorch Quantization Toolkit"),Cp.forEach(o),ai=s(oe,". "),Yn=r(oe,"CODE",{});var Pp=i(Yn);ri=s(Pp,"TensorQuantizer"),Pp.forEach(o),ii=s(oe,` is the module
for quantizing tensors, with `),Zn=r(oe,"CODE",{});var Ap=i(Zn);li=s(Ap,"QuantDescriptor"),Ap.forEach(o),di=s(oe," defining how the tensor should be quantized. Refer to "),Lt=r(oe,"A",{href:!0,rel:!0});var Np=i(Lt);ci=s(Np,`Pytorch
Quantization Toolkit userguide`),Np.forEach(o),pi=s(oe," for more details."),oe.forEach(o),ba=h(t),He=r(t,"P",{});var Ja=i(He);hi=s(Ja,"Before creating QDQBERT model, one has to set the default "),es=r(Ja,"CODE",{});var Sp=i(es);mi=s(Sp,"QuantDescriptor"),Sp.forEach(o),ui=s(Ja," defining default tensor quantizers."),Ja.forEach(o),ka=h(t),an=r(t,"P",{});var Lp=i(an);fi=s(Lp,"Example:"),Lp.forEach(o),Qa=h(t),v(It.$$.fragment,t),va=h(t),_e=r(t,"H3",{class:!0});var Ka=i(_e);Re=r(Ka,"A",{id:!0,class:!0,href:!0});var Ip=i(Re);ts=r(Ip,"SPAN",{});var Op=i(ts);v(Ot.$$.fragment,Op),Op.forEach(o),Ip.forEach(o),gi=h(Ka),os=r(Ka,"SPAN",{});var Wp=i(os);_i=s(Wp,"Calibration"),Wp.forEach(o),Ka.forEach(o),wa=h(t),rn=r(t,"P",{});var Hp=i(rn);bi=s(Hp,`Calibration is the terminology of passing data samples to the quantizer and deciding the best scaling factors for
tensors. After setting up the tensor quantizers, one can use the following example to calibrate the model:`),Hp.forEach(o),$a=h(t),v(Wt.$$.fragment,t),Ta=h(t),be=r(t,"H3",{class:!0});var Ga=i(be);Ue=r(Ga,"A",{id:!0,class:!0,href:!0});var Rp=i(Ue);ns=r(Rp,"SPAN",{});var Up=i(ns);v(Ht.$$.fragment,Up),Up.forEach(o),Rp.forEach(o),ki=h(Ga),ss=r(Ga,"SPAN",{});var Vp=i(ss);Qi=s(Vp,"Export to ONNX"),Vp.forEach(o),Ga.forEach(o),ya=h(t),se=r(t,"P",{});var Dn=i(se);vi=s(Dn,"The goal of exporting to ONNX is to deploy inference by "),Rt=r(Dn,"A",{href:!0,rel:!0});var Xp=i(Rt);wi=s(Xp,"TensorRT"),Xp.forEach(o),$i=s(Dn,`. Fake
quantization will be broken into a pair of QuantizeLinear/DequantizeLinear ONNX ops. After setting static member of
TensorQuantizer to use Pytorch\u2019s own fake quantization functions, fake quantized model can be exported to ONNX, follow
the instructions in `),Ut=r(Dn,"A",{href:!0,rel:!0});var Jp=i(Ut);Ti=s(Jp,"torch.onnx"),Jp.forEach(o),yi=s(Dn,". Example:"),Dn.forEach(o),qa=h(t),v(Vt.$$.fragment,t),Da=h(t),ke=r(t,"H2",{class:!0});var Ya=i(ke);Ve=r(Ya,"A",{id:!0,class:!0,href:!0});var Kp=i(Ve);as=r(Kp,"SPAN",{});var Gp=i(as);v(Xt.$$.fragment,Gp),Gp.forEach(o),Kp.forEach(o),qi=h(Ya),rs=r(Ya,"SPAN",{});var Yp=i(rs);Di=s(Yp,"QDQBertConfig"),Yp.forEach(o),Ya.forEach(o),za=h(t),K=r(t,"DIV",{class:!0});var qt=i(K);v(Jt.$$.fragment,qt),zi=h(qt),Qe=r(qt,"P",{});var zn=i(Qe);Bi=s(zn,"This is the configuration class to store the configuration of a "),ln=r(zn,"A",{href:!0});var Zp=i(ln);Mi=s(Zp,"QDQBertModel"),Zp.forEach(o),xi=s(zn,`. It is used to instantiate an
QDQBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BERT
`),Kt=r(zn,"A",{href:!0,rel:!0});var eh=i(Kt);ji=s(eh,"bert-base-uncased"),eh.forEach(o),Ei=s(zn," architecture."),zn.forEach(o),Fi=h(qt),ve=r(qt,"P",{});var Bn=i(ve);Ci=s(Bn,"Configuration objects inherit from "),dn=r(Bn,"A",{href:!0});var th=i(dn);Pi=s(th,"PretrainedConfig"),th.forEach(o),Ai=s(Bn,` and can be used to control the model outputs. Read the
documentation from `),cn=r(Bn,"A",{href:!0});var oh=i(cn);Ni=s(oh,"PretrainedConfig"),oh.forEach(o),Si=s(Bn," for more information."),Bn.forEach(o),Li=h(qt),v(Xe.$$.fragment,qt),qt.forEach(o),Ba=h(t),we=r(t,"H2",{class:!0});var Za=i(we);Je=r(Za,"A",{id:!0,class:!0,href:!0});var nh=i(Je);is=r(nh,"SPAN",{});var sh=i(is);v(Gt.$$.fragment,sh),sh.forEach(o),nh.forEach(o),Ii=h(Za),ls=r(Za,"SPAN",{});var ah=i(ls);Oi=s(ah,"QDQBertModel"),ah.forEach(o),Za.forEach(o),Ma=h(t),z=r(t,"DIV",{class:!0});var U=i(z);v(Yt.$$.fragment,U),Wi=h(U),ds=r(U,"P",{});var rh=i(ds);Hi=s(rh,"The bare QDQBERT Model transformer outputting raw hidden-states without any specific head on top."),rh.forEach(o),Ri=h(U),Zt=r(U,"P",{});var er=i(Zt);Ui=s(er,"This model inherits from "),pn=r(er,"A",{href:!0});var ih=i(pn);Vi=s(ih,"PreTrainedModel"),ih.forEach(o),Xi=s(er,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),er.forEach(o),Ji=h(U),eo=r(U,"P",{});var tr=i(eo);Ki=s(tr,"This model is also a PyTorch "),to=r(tr,"A",{href:!0,rel:!0});var lh=i(to);Gi=s(lh,"torch.nn.Module"),lh.forEach(o),Yi=s(tr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tr.forEach(o),Zi=h(U),oo=r(U,"P",{});var or=i(oo);el=s(or,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),no=r(or,"A",{href:!0,rel:!0});var dh=i(no);tl=s(dh,`Attention is
all you need`),dh.forEach(o),ol=s(or,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),or.forEach(o),nl=h(U),x=r(U,"P",{});var V=i(x);sl=s(V,"To behave as an decoder the model needs to be initialized with the "),cs=r(V,"CODE",{});var ch=i(cs);al=s(ch,"is_decoder"),ch.forEach(o),rl=s(V,` argument of the configuration set
to `),ps=r(V,"CODE",{});var ph=i(ps);il=s(ph,"True"),ph.forEach(o),ll=s(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),hs=r(V,"CODE",{});var hh=i(hs);dl=s(hh,"is_decoder"),hh.forEach(o),cl=s(V,` argument and
`),ms=r(V,"CODE",{});var mh=i(ms);pl=s(mh,"add_cross_attention"),mh.forEach(o),hl=s(V," set to "),us=r(V,"CODE",{});var uh=i(us);ml=s(uh,"True"),uh.forEach(o),ul=s(V,"; an "),fs=r(V,"CODE",{});var fh=i(fs);fl=s(fh,"encoder_hidden_states"),fh.forEach(o),gl=s(V," is then expected as an input to the forward pass."),V.forEach(o),_l=h(U),Y=r(U,"DIV",{class:!0});var Dt=i(Y);v(so.$$.fragment,Dt),bl=h(Dt),$e=r(Dt,"P",{});var Mn=i($e);kl=s(Mn,"The "),hn=r(Mn,"A",{href:!0});var gh=i(hn);Ql=s(gh,"QDQBertModel"),gh.forEach(o),vl=s(Mn," forward method, overrides the "),gs=r(Mn,"CODE",{});var _h=i(gs);wl=s(_h,"__call__"),_h.forEach(o),$l=s(Mn," special method."),Mn.forEach(o),Tl=h(Dt),v(Ke.$$.fragment,Dt),yl=h(Dt),v(Ge.$$.fragment,Dt),Dt.forEach(o),U.forEach(o),xa=h(t),Te=r(t,"H2",{class:!0});var nr=i(Te);Ye=r(nr,"A",{id:!0,class:!0,href:!0});var bh=i(Ye);_s=r(bh,"SPAN",{});var kh=i(_s);v(ao.$$.fragment,kh),kh.forEach(o),bh.forEach(o),ql=h(nr),bs=r(nr,"SPAN",{});var Qh=i(bs);Dl=s(Qh,"QDQBertLMHeadModel"),Qh.forEach(o),nr.forEach(o),ja=h(t),F=r(t,"DIV",{class:!0});var ae=i(F);v(ro.$$.fragment,ae),zl=h(ae),io=r(ae,"P",{});var sr=i(io);Bl=s(sr,"QDQBERT Model with a "),ks=r(sr,"CODE",{});var vh=i(ks);Ml=s(vh,"language modeling"),vh.forEach(o),xl=s(sr," head on top for CLM fine-tuning."),sr.forEach(o),jl=h(ae),lo=r(ae,"P",{});var ar=i(lo);El=s(ar,"This model inherits from "),mn=r(ar,"A",{href:!0});var wh=i(mn);Fl=s(wh,"PreTrainedModel"),wh.forEach(o),Cl=s(ar,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ar.forEach(o),Pl=h(ae),co=r(ae,"P",{});var rr=i(co);Al=s(rr,"This model is also a PyTorch "),po=r(rr,"A",{href:!0,rel:!0});var $h=i(po);Nl=s($h,"torch.nn.Module"),$h.forEach(o),Sl=s(rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rr.forEach(o),Ll=h(ae),Z=r(ae,"DIV",{class:!0});var zt=i(Z);v(ho.$$.fragment,zt),Il=h(zt),ye=r(zt,"P",{});var xn=i(ye);Ol=s(xn,"The "),un=r(xn,"A",{href:!0});var Th=i(un);Wl=s(Th,"QDQBertLMHeadModel"),Th.forEach(o),Hl=s(xn," forward method, overrides the "),Qs=r(xn,"CODE",{});var yh=i(Qs);Rl=s(yh,"__call__"),yh.forEach(o),Ul=s(xn," special method."),xn.forEach(o),Vl=h(zt),v(Ze.$$.fragment,zt),Xl=h(zt),v(et.$$.fragment,zt),zt.forEach(o),ae.forEach(o),Ea=h(t),qe=r(t,"H2",{class:!0});var ir=i(qe);tt=r(ir,"A",{id:!0,class:!0,href:!0});var qh=i(tt);vs=r(qh,"SPAN",{});var Dh=i(vs);v(mo.$$.fragment,Dh),Dh.forEach(o),qh.forEach(o),Jl=h(ir),ws=r(ir,"SPAN",{});var zh=i(ws);Kl=s(zh,"QDQBertForMaskedLM"),zh.forEach(o),ir.forEach(o),Fa=h(t),C=r(t,"DIV",{class:!0});var re=i(C);v(uo.$$.fragment,re),Gl=h(re),fo=r(re,"P",{});var lr=i(fo);Yl=s(lr,"QDQBERT Model with a "),$s=r(lr,"CODE",{});var Bh=i($s);Zl=s(Bh,"language modeling"),Bh.forEach(o),ed=s(lr," head on top."),lr.forEach(o),td=h(re),go=r(re,"P",{});var dr=i(go);od=s(dr,"This model inherits from "),fn=r(dr,"A",{href:!0});var Mh=i(fn);nd=s(Mh,"PreTrainedModel"),Mh.forEach(o),sd=s(dr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dr.forEach(o),ad=h(re),_o=r(re,"P",{});var cr=i(_o);rd=s(cr,"This model is also a PyTorch "),bo=r(cr,"A",{href:!0,rel:!0});var xh=i(bo);id=s(xh,"torch.nn.Module"),xh.forEach(o),ld=s(cr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cr.forEach(o),dd=h(re),W=r(re,"DIV",{class:!0});var ie=i(W);v(ko.$$.fragment,ie),cd=h(ie),De=r(ie,"P",{});var jn=i(De);pd=s(jn,"The "),gn=r(jn,"A",{href:!0});var jh=i(gn);hd=s(jh,"QDQBertForMaskedLM"),jh.forEach(o),md=s(jn," forward method, overrides the "),Ts=r(jn,"CODE",{});var Eh=i(Ts);ud=s(Eh,"__call__"),Eh.forEach(o),fd=s(jn," special method."),jn.forEach(o),gd=h(ie),v(ot.$$.fragment,ie),_d=h(ie),v(nt.$$.fragment,ie),bd=h(ie),v(st.$$.fragment,ie),ie.forEach(o),re.forEach(o),Ca=h(t),ze=r(t,"H2",{class:!0});var pr=i(ze);at=r(pr,"A",{id:!0,class:!0,href:!0});var Fh=i(at);ys=r(Fh,"SPAN",{});var Ch=i(ys);v(Qo.$$.fragment,Ch),Ch.forEach(o),Fh.forEach(o),kd=h(pr),qs=r(pr,"SPAN",{});var Ph=i(qs);Qd=s(Ph,"QDQBertForSequenceClassification"),Ph.forEach(o),pr.forEach(o),Pa=h(t),P=r(t,"DIV",{class:!0});var le=i(P);v(vo.$$.fragment,le),vd=h(le),Ds=r(le,"P",{});var Ah=i(Ds);wd=s(Ah,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ah.forEach(o),$d=h(le),wo=r(le,"P",{});var hr=i(wo);Td=s(hr,"This model inherits from "),_n=r(hr,"A",{href:!0});var Nh=i(_n);yd=s(Nh,"PreTrainedModel"),Nh.forEach(o),qd=s(hr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hr.forEach(o),Dd=h(le),$o=r(le,"P",{});var mr=i($o);zd=s(mr,"This model is also a PyTorch "),To=r(mr,"A",{href:!0,rel:!0});var Sh=i(To);Bd=s(Sh,"torch.nn.Module"),Sh.forEach(o),Md=s(mr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mr.forEach(o),xd=h(le),B=r(le,"DIV",{class:!0});var X=i(B);v(yo.$$.fragment,X),jd=h(X),Be=r(X,"P",{});var En=i(Be);Ed=s(En,"The "),bn=r(En,"A",{href:!0});var Lh=i(bn);Fd=s(Lh,"QDQBertForSequenceClassification"),Lh.forEach(o),Cd=s(En," forward method, overrides the "),zs=r(En,"CODE",{});var Ih=i(zs);Pd=s(Ih,"__call__"),Ih.forEach(o),Ad=s(En," special method."),En.forEach(o),Nd=h(X),v(rt.$$.fragment,X),Sd=h(X),v(it.$$.fragment,X),Ld=h(X),v(lt.$$.fragment,X),Id=h(X),v(dt.$$.fragment,X),Od=h(X),v(ct.$$.fragment,X),X.forEach(o),le.forEach(o),Aa=h(t),Me=r(t,"H2",{class:!0});var ur=i(Me);pt=r(ur,"A",{id:!0,class:!0,href:!0});var Oh=i(pt);Bs=r(Oh,"SPAN",{});var Wh=i(Bs);v(qo.$$.fragment,Wh),Wh.forEach(o),Oh.forEach(o),Wd=h(ur),Ms=r(ur,"SPAN",{});var Hh=i(Ms);Hd=s(Hh,"QDQBertForNextSentencePrediction"),Hh.forEach(o),ur.forEach(o),Na=h(t),A=r(t,"DIV",{class:!0});var de=i(A);v(Do.$$.fragment,de),Rd=h(de),zo=r(de,"P",{});var fr=i(zo);Ud=s(fr,"Bert Model with a "),xs=r(fr,"CODE",{});var Rh=i(xs);Vd=s(Rh,"next sentence prediction (classification)"),Rh.forEach(o),Xd=s(fr," head on top."),fr.forEach(o),Jd=h(de),Bo=r(de,"P",{});var gr=i(Bo);Kd=s(gr,"This model inherits from "),kn=r(gr,"A",{href:!0});var Uh=i(kn);Gd=s(Uh,"PreTrainedModel"),Uh.forEach(o),Yd=s(gr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gr.forEach(o),Zd=h(de),Mo=r(de,"P",{});var _r=i(Mo);ec=s(_r,"This model is also a PyTorch "),xo=r(_r,"A",{href:!0,rel:!0});var Vh=i(xo);tc=s(Vh,"torch.nn.Module"),Vh.forEach(o),oc=s(_r,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_r.forEach(o),nc=h(de),ee=r(de,"DIV",{class:!0});var Bt=i(ee);v(jo.$$.fragment,Bt),sc=h(Bt),xe=r(Bt,"P",{});var Fn=i(xe);ac=s(Fn,"The "),Qn=r(Fn,"A",{href:!0});var Xh=i(Qn);rc=s(Xh,"QDQBertForNextSentencePrediction"),Xh.forEach(o),ic=s(Fn," forward method, overrides the "),js=r(Fn,"CODE",{});var Jh=i(js);lc=s(Jh,"__call__"),Jh.forEach(o),dc=s(Fn," special method."),Fn.forEach(o),cc=h(Bt),v(ht.$$.fragment,Bt),pc=h(Bt),v(mt.$$.fragment,Bt),Bt.forEach(o),de.forEach(o),Sa=h(t),je=r(t,"H2",{class:!0});var br=i(je);ut=r(br,"A",{id:!0,class:!0,href:!0});var Kh=i(ut);Es=r(Kh,"SPAN",{});var Gh=i(Es);v(Eo.$$.fragment,Gh),Gh.forEach(o),Kh.forEach(o),hc=h(br),Fs=r(br,"SPAN",{});var Yh=i(Fs);mc=s(Yh,"QDQBertForMultipleChoice"),Yh.forEach(o),br.forEach(o),La=h(t),N=r(t,"DIV",{class:!0});var ce=i(N);v(Fo.$$.fragment,ce),uc=h(ce),Cs=r(ce,"P",{});var Zh=i(Cs);fc=s(Zh,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zh.forEach(o),gc=h(ce),Co=r(ce,"P",{});var kr=i(Co);_c=s(kr,"This model inherits from "),vn=r(kr,"A",{href:!0});var em=i(vn);bc=s(em,"PreTrainedModel"),em.forEach(o),kc=s(kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kr.forEach(o),Qc=h(ce),Po=r(ce,"P",{});var Qr=i(Po);vc=s(Qr,"This model is also a PyTorch "),Ao=r(Qr,"A",{href:!0,rel:!0});var tm=i(Ao);wc=s(tm,"torch.nn.Module"),tm.forEach(o),$c=s(Qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr.forEach(o),Tc=h(ce),te=r(ce,"DIV",{class:!0});var Mt=i(te);v(No.$$.fragment,Mt),yc=h(Mt),Ee=r(Mt,"P",{});var Cn=i(Ee);qc=s(Cn,"The "),wn=r(Cn,"A",{href:!0});var om=i(wn);Dc=s(om,"QDQBertForMultipleChoice"),om.forEach(o),zc=s(Cn," forward method, overrides the "),Ps=r(Cn,"CODE",{});var nm=i(Ps);Bc=s(nm,"__call__"),nm.forEach(o),Mc=s(Cn," special method."),Cn.forEach(o),xc=h(Mt),v(ft.$$.fragment,Mt),jc=h(Mt),v(gt.$$.fragment,Mt),Mt.forEach(o),ce.forEach(o),Ia=h(t),Fe=r(t,"H2",{class:!0});var vr=i(Fe);_t=r(vr,"A",{id:!0,class:!0,href:!0});var sm=i(_t);As=r(sm,"SPAN",{});var am=i(As);v(So.$$.fragment,am),am.forEach(o),sm.forEach(o),Ec=h(vr),Ns=r(vr,"SPAN",{});var rm=i(Ns);Fc=s(rm,"QDQBertForTokenClassification"),rm.forEach(o),vr.forEach(o),Oa=h(t),S=r(t,"DIV",{class:!0});var pe=i(S);v(Lo.$$.fragment,pe),Cc=h(pe),Ss=r(pe,"P",{});var im=i(Ss);Pc=s(im,`QDQBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),im.forEach(o),Ac=h(pe),Io=r(pe,"P",{});var wr=i(Io);Nc=s(wr,"This model inherits from "),$n=r(wr,"A",{href:!0});var lm=i($n);Sc=s(lm,"PreTrainedModel"),lm.forEach(o),Lc=s(wr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wr.forEach(o),Ic=h(pe),Oo=r(pe,"P",{});var $r=i(Oo);Oc=s($r,"This model is also a PyTorch "),Wo=r($r,"A",{href:!0,rel:!0});var dm=i(Wo);Wc=s(dm,"torch.nn.Module"),dm.forEach(o),Hc=s($r,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$r.forEach(o),Rc=h(pe),H=r(pe,"DIV",{class:!0});var he=i(H);v(Ho.$$.fragment,he),Uc=h(he),Ce=r(he,"P",{});var Pn=i(Ce);Vc=s(Pn,"The "),Tn=r(Pn,"A",{href:!0});var cm=i(Tn);Xc=s(cm,"QDQBertForTokenClassification"),cm.forEach(o),Jc=s(Pn," forward method, overrides the "),Ls=r(Pn,"CODE",{});var pm=i(Ls);Kc=s(pm,"__call__"),pm.forEach(o),Gc=s(Pn," special method."),Pn.forEach(o),Yc=h(he),v(bt.$$.fragment,he),Zc=h(he),v(kt.$$.fragment,he),ep=h(he),v(Qt.$$.fragment,he),he.forEach(o),pe.forEach(o),Wa=h(t),Pe=r(t,"H2",{class:!0});var Tr=i(Pe);vt=r(Tr,"A",{id:!0,class:!0,href:!0});var hm=i(vt);Is=r(hm,"SPAN",{});var mm=i(Is);v(Ro.$$.fragment,mm),mm.forEach(o),hm.forEach(o),tp=h(Tr),Os=r(Tr,"SPAN",{});var um=i(Os);op=s(um,"QDQBertForQuestionAnswering"),um.forEach(o),Tr.forEach(o),Ha=h(t),L=r(t,"DIV",{class:!0});var me=i(L);v(Uo.$$.fragment,me),np=h(me),Ae=r(me,"P",{});var An=i(Ae);sp=s(An,`QDQBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=r(An,"CODE",{});var fm=i(Ws);ap=s(fm,"span start logits"),fm.forEach(o),rp=s(An," and "),Hs=r(An,"CODE",{});var gm=i(Hs);ip=s(gm,"span end logits"),gm.forEach(o),lp=s(An,")."),An.forEach(o),dp=h(me),Vo=r(me,"P",{});var yr=i(Vo);cp=s(yr,"This model inherits from "),yn=r(yr,"A",{href:!0});var _m=i(yn);pp=s(_m,"PreTrainedModel"),_m.forEach(o),hp=s(yr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yr.forEach(o),mp=h(me),Xo=r(me,"P",{});var qr=i(Xo);up=s(qr,"This model is also a PyTorch "),Jo=r(qr,"A",{href:!0,rel:!0});var bm=i(Jo);fp=s(bm,"torch.nn.Module"),bm.forEach(o),gp=s(qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qr.forEach(o),_p=h(me),R=r(me,"DIV",{class:!0});var ue=i(R);v(Ko.$$.fragment,ue),bp=h(ue),Ne=r(ue,"P",{});var Nn=i(Ne);kp=s(Nn,"The "),qn=r(Nn,"A",{href:!0});var km=i(qn);Qp=s(km,"QDQBertForQuestionAnswering"),km.forEach(o),vp=s(Nn," forward method, overrides the "),Rs=r(Nn,"CODE",{});var Qm=i(Rs);wp=s(Qm,"__call__"),Qm.forEach(o),$p=s(Nn," special method."),Nn.forEach(o),Tp=h(ue),v(wt.$$.fragment,ue),yp=h(ue),v($t.$$.fragment,ue),qp=h(ue),v(Tt.$$.fragment,ue),ue.forEach(o),me.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Km)),f(m,"id","qdqbert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#qdqbert"),f(c,"class","relative group"),f(Se,"id","overview"),f(Se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Se,"href","#overview"),f(fe,"class","relative group"),f(Et,"href","https://arxiv.org/abs/2004.09602"),f(Et,"rel","nofollow"),f(Ft,"href","https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization"),f(Ft,"rel","nofollow"),f(sn,"href","examples/research_projects/quantization-qdqbert/"),f(At,"href","https://huggingface.co/shangz"),f(At,"rel","nofollow"),f(We,"id","set-default-quantizers"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#set-default-quantizers"),f(ge,"class","relative group"),f(St,"href","https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization"),f(St,"rel","nofollow"),f(Lt,"href","https://docs.nvidia.com/deeplearning/tensorrt/pytorch-quantization-toolkit/docs/userguide.html"),f(Lt,"rel","nofollow"),f(Re,"id","calibration"),f(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Re,"href","#calibration"),f(_e,"class","relative group"),f(Ue,"id","export-to-onnx"),f(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ue,"href","#export-to-onnx"),f(be,"class","relative group"),f(Rt,"href","https://developer.nvidia.com/tensorrt"),f(Rt,"rel","nofollow"),f(Ut,"href","https://pytorch.org/docs/stable/onnx.html"),f(Ut,"rel","nofollow"),f(Ve,"id","transformers.QDQBertConfig"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.QDQBertConfig"),f(ke,"class","relative group"),f(ln,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel"),f(Kt,"href","https://huggingface.co/bert-base-uncased"),f(Kt,"rel","nofollow"),f(dn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(cn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"id","transformers.QDQBertModel"),f(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Je,"href","#transformers.QDQBertModel"),f(we,"class","relative group"),f(pn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(to,"rel","nofollow"),f(no,"href","https://arxiv.org/abs/1706.03762"),f(no,"rel","nofollow"),f(hn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertModel"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.QDQBertLMHeadModel"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.QDQBertLMHeadModel"),f(Te,"class","relative group"),f(mn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(po,"rel","nofollow"),f(un,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertLMHeadModel"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"id","transformers.QDQBertForMaskedLM"),f(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tt,"href","#transformers.QDQBertForMaskedLM"),f(qe,"class","relative group"),f(fn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bo,"rel","nofollow"),f(gn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForMaskedLM"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"id","transformers.QDQBertForSequenceClassification"),f(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(at,"href","#transformers.QDQBertForSequenceClassification"),f(ze,"class","relative group"),f(_n,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(To,"rel","nofollow"),f(bn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForSequenceClassification"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"id","transformers.QDQBertForNextSentencePrediction"),f(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pt,"href","#transformers.QDQBertForNextSentencePrediction"),f(Me,"class","relative group"),f(kn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xo,"rel","nofollow"),f(Qn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForNextSentencePrediction"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"id","transformers.QDQBertForMultipleChoice"),f(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ut,"href","#transformers.QDQBertForMultipleChoice"),f(je,"class","relative group"),f(vn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ao,"rel","nofollow"),f(wn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForMultipleChoice"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"id","transformers.QDQBertForTokenClassification"),f(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_t,"href","#transformers.QDQBertForTokenClassification"),f(Fe,"class","relative group"),f($n,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wo,"rel","nofollow"),f(Tn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForTokenClassification"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vt,"id","transformers.QDQBertForQuestionAnswering"),f(vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vt,"href","#transformers.QDQBertForQuestionAnswering"),f(Pe,"class","relative group"),f(yn,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jo,"rel","nofollow"),f(qn,"href","/docs/transformers/main/en/model_doc/qdqbert#transformers.QDQBertForQuestionAnswering"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),b(t,_,g),b(t,c,g),e(c,m),e(m,k),w(l,k,null),e(c,u),e(c,D),e(D,Dr),b(t,da,g),b(t,fe,g),e(fe,Se),e(Se,Sn),w(jt,Sn,null),e(fe,zr),e(fe,Ln),e(Ln,Br),b(t,ca,g),b(t,Le,g),e(Le,Mr),e(Le,Et),e(Et,xr),e(Le,jr),b(t,pa,g),b(t,tn,g),e(tn,Er),b(t,ha,g),b(t,on,g),e(on,In),e(In,Fr),b(t,ma,g),b(t,nn,g),e(nn,Cr),b(t,ua,g),b(t,G,g),e(G,On),e(On,Wn),e(Wn,Pr),e(G,Ar),e(G,Hn),e(Hn,Ie),e(Ie,Nr),e(Ie,Ft),e(Ft,Sr),e(Ie,Lr),e(Ie,Rn),e(Rn,Ir),e(G,Or),e(G,Un),e(Un,Ct),e(Ct,Wr),e(Ct,Vn),e(Vn,Hr),e(Ct,Rr),e(G,Ur),e(G,Xn),e(Xn,Pt),e(Pt,Vr),e(Pt,sn),e(sn,Xr),e(Pt,Jr),b(t,fa,g),b(t,Oe,g),e(Oe,Kr),e(Oe,At),e(At,Gr),e(Oe,Yr),b(t,ga,g),b(t,ge,g),e(ge,We),e(We,Jn),w(Nt,Jn,null),e(ge,Zr),e(ge,Kn),e(Kn,ei),b(t,_a,g),b(t,E,g),e(E,ti),e(E,Gn),e(Gn,oi),e(E,ni),e(E,St),e(St,si),e(E,ai),e(E,Yn),e(Yn,ri),e(E,ii),e(E,Zn),e(Zn,li),e(E,di),e(E,Lt),e(Lt,ci),e(E,pi),b(t,ba,g),b(t,He,g),e(He,hi),e(He,es),e(es,mi),e(He,ui),b(t,ka,g),b(t,an,g),e(an,fi),b(t,Qa,g),w(It,t,g),b(t,va,g),b(t,_e,g),e(_e,Re),e(Re,ts),w(Ot,ts,null),e(_e,gi),e(_e,os),e(os,_i),b(t,wa,g),b(t,rn,g),e(rn,bi),b(t,$a,g),w(Wt,t,g),b(t,Ta,g),b(t,be,g),e(be,Ue),e(Ue,ns),w(Ht,ns,null),e(be,ki),e(be,ss),e(ss,Qi),b(t,ya,g),b(t,se,g),e(se,vi),e(se,Rt),e(Rt,wi),e(se,$i),e(se,Ut),e(Ut,Ti),e(se,yi),b(t,qa,g),w(Vt,t,g),b(t,Da,g),b(t,ke,g),e(ke,Ve),e(Ve,as),w(Xt,as,null),e(ke,qi),e(ke,rs),e(rs,Di),b(t,za,g),b(t,K,g),w(Jt,K,null),e(K,zi),e(K,Qe),e(Qe,Bi),e(Qe,ln),e(ln,Mi),e(Qe,xi),e(Qe,Kt),e(Kt,ji),e(Qe,Ei),e(K,Fi),e(K,ve),e(ve,Ci),e(ve,dn),e(dn,Pi),e(ve,Ai),e(ve,cn),e(cn,Ni),e(ve,Si),e(K,Li),w(Xe,K,null),b(t,Ba,g),b(t,we,g),e(we,Je),e(Je,is),w(Gt,is,null),e(we,Ii),e(we,ls),e(ls,Oi),b(t,Ma,g),b(t,z,g),w(Yt,z,null),e(z,Wi),e(z,ds),e(ds,Hi),e(z,Ri),e(z,Zt),e(Zt,Ui),e(Zt,pn),e(pn,Vi),e(Zt,Xi),e(z,Ji),e(z,eo),e(eo,Ki),e(eo,to),e(to,Gi),e(eo,Yi),e(z,Zi),e(z,oo),e(oo,el),e(oo,no),e(no,tl),e(oo,ol),e(z,nl),e(z,x),e(x,sl),e(x,cs),e(cs,al),e(x,rl),e(x,ps),e(ps,il),e(x,ll),e(x,hs),e(hs,dl),e(x,cl),e(x,ms),e(ms,pl),e(x,hl),e(x,us),e(us,ml),e(x,ul),e(x,fs),e(fs,fl),e(x,gl),e(z,_l),e(z,Y),w(so,Y,null),e(Y,bl),e(Y,$e),e($e,kl),e($e,hn),e(hn,Ql),e($e,vl),e($e,gs),e(gs,wl),e($e,$l),e(Y,Tl),w(Ke,Y,null),e(Y,yl),w(Ge,Y,null),b(t,xa,g),b(t,Te,g),e(Te,Ye),e(Ye,_s),w(ao,_s,null),e(Te,ql),e(Te,bs),e(bs,Dl),b(t,ja,g),b(t,F,g),w(ro,F,null),e(F,zl),e(F,io),e(io,Bl),e(io,ks),e(ks,Ml),e(io,xl),e(F,jl),e(F,lo),e(lo,El),e(lo,mn),e(mn,Fl),e(lo,Cl),e(F,Pl),e(F,co),e(co,Al),e(co,po),e(po,Nl),e(co,Sl),e(F,Ll),e(F,Z),w(ho,Z,null),e(Z,Il),e(Z,ye),e(ye,Ol),e(ye,un),e(un,Wl),e(ye,Hl),e(ye,Qs),e(Qs,Rl),e(ye,Ul),e(Z,Vl),w(Ze,Z,null),e(Z,Xl),w(et,Z,null),b(t,Ea,g),b(t,qe,g),e(qe,tt),e(tt,vs),w(mo,vs,null),e(qe,Jl),e(qe,ws),e(ws,Kl),b(t,Fa,g),b(t,C,g),w(uo,C,null),e(C,Gl),e(C,fo),e(fo,Yl),e(fo,$s),e($s,Zl),e(fo,ed),e(C,td),e(C,go),e(go,od),e(go,fn),e(fn,nd),e(go,sd),e(C,ad),e(C,_o),e(_o,rd),e(_o,bo),e(bo,id),e(_o,ld),e(C,dd),e(C,W),w(ko,W,null),e(W,cd),e(W,De),e(De,pd),e(De,gn),e(gn,hd),e(De,md),e(De,Ts),e(Ts,ud),e(De,fd),e(W,gd),w(ot,W,null),e(W,_d),w(nt,W,null),e(W,bd),w(st,W,null),b(t,Ca,g),b(t,ze,g),e(ze,at),e(at,ys),w(Qo,ys,null),e(ze,kd),e(ze,qs),e(qs,Qd),b(t,Pa,g),b(t,P,g),w(vo,P,null),e(P,vd),e(P,Ds),e(Ds,wd),e(P,$d),e(P,wo),e(wo,Td),e(wo,_n),e(_n,yd),e(wo,qd),e(P,Dd),e(P,$o),e($o,zd),e($o,To),e(To,Bd),e($o,Md),e(P,xd),e(P,B),w(yo,B,null),e(B,jd),e(B,Be),e(Be,Ed),e(Be,bn),e(bn,Fd),e(Be,Cd),e(Be,zs),e(zs,Pd),e(Be,Ad),e(B,Nd),w(rt,B,null),e(B,Sd),w(it,B,null),e(B,Ld),w(lt,B,null),e(B,Id),w(dt,B,null),e(B,Od),w(ct,B,null),b(t,Aa,g),b(t,Me,g),e(Me,pt),e(pt,Bs),w(qo,Bs,null),e(Me,Wd),e(Me,Ms),e(Ms,Hd),b(t,Na,g),b(t,A,g),w(Do,A,null),e(A,Rd),e(A,zo),e(zo,Ud),e(zo,xs),e(xs,Vd),e(zo,Xd),e(A,Jd),e(A,Bo),e(Bo,Kd),e(Bo,kn),e(kn,Gd),e(Bo,Yd),e(A,Zd),e(A,Mo),e(Mo,ec),e(Mo,xo),e(xo,tc),e(Mo,oc),e(A,nc),e(A,ee),w(jo,ee,null),e(ee,sc),e(ee,xe),e(xe,ac),e(xe,Qn),e(Qn,rc),e(xe,ic),e(xe,js),e(js,lc),e(xe,dc),e(ee,cc),w(ht,ee,null),e(ee,pc),w(mt,ee,null),b(t,Sa,g),b(t,je,g),e(je,ut),e(ut,Es),w(Eo,Es,null),e(je,hc),e(je,Fs),e(Fs,mc),b(t,La,g),b(t,N,g),w(Fo,N,null),e(N,uc),e(N,Cs),e(Cs,fc),e(N,gc),e(N,Co),e(Co,_c),e(Co,vn),e(vn,bc),e(Co,kc),e(N,Qc),e(N,Po),e(Po,vc),e(Po,Ao),e(Ao,wc),e(Po,$c),e(N,Tc),e(N,te),w(No,te,null),e(te,yc),e(te,Ee),e(Ee,qc),e(Ee,wn),e(wn,Dc),e(Ee,zc),e(Ee,Ps),e(Ps,Bc),e(Ee,Mc),e(te,xc),w(ft,te,null),e(te,jc),w(gt,te,null),b(t,Ia,g),b(t,Fe,g),e(Fe,_t),e(_t,As),w(So,As,null),e(Fe,Ec),e(Fe,Ns),e(Ns,Fc),b(t,Oa,g),b(t,S,g),w(Lo,S,null),e(S,Cc),e(S,Ss),e(Ss,Pc),e(S,Ac),e(S,Io),e(Io,Nc),e(Io,$n),e($n,Sc),e(Io,Lc),e(S,Ic),e(S,Oo),e(Oo,Oc),e(Oo,Wo),e(Wo,Wc),e(Oo,Hc),e(S,Rc),e(S,H),w(Ho,H,null),e(H,Uc),e(H,Ce),e(Ce,Vc),e(Ce,Tn),e(Tn,Xc),e(Ce,Jc),e(Ce,Ls),e(Ls,Kc),e(Ce,Gc),e(H,Yc),w(bt,H,null),e(H,Zc),w(kt,H,null),e(H,ep),w(Qt,H,null),b(t,Wa,g),b(t,Pe,g),e(Pe,vt),e(vt,Is),w(Ro,Is,null),e(Pe,tp),e(Pe,Os),e(Os,op),b(t,Ha,g),b(t,L,g),w(Uo,L,null),e(L,np),e(L,Ae),e(Ae,sp),e(Ae,Ws),e(Ws,ap),e(Ae,rp),e(Ae,Hs),e(Hs,ip),e(Ae,lp),e(L,dp),e(L,Vo),e(Vo,cp),e(Vo,yn),e(yn,pp),e(Vo,hp),e(L,mp),e(L,Xo),e(Xo,up),e(Xo,Jo),e(Jo,fp),e(Xo,gp),e(L,_p),e(L,R),w(Ko,R,null),e(R,bp),e(R,Ne),e(Ne,kp),e(Ne,qn),e(qn,Qp),e(Ne,vp),e(Ne,Rs),e(Rs,wp),e(Ne,$p),e(R,Tp),w(wt,R,null),e(R,yp),w($t,R,null),e(R,qp),w(Tt,R,null),Ra=!0},p(t,[g]){const Go={};g&2&&(Go.$$scope={dirty:g,ctx:t}),Xe.$set(Go);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:t}),Ke.$set(Us);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:t}),Ge.$set(Vs);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),Ze.$set(Xs);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:t}),et.$set(Yo);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:t}),ot.$set(Js);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:t}),nt.$set(Ks);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:t}),st.$set(Gs);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:t}),rt.$set(Zo);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),it.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),lt.$set(Zs);const ea={};g&2&&(ea.$$scope={dirty:g,ctx:t}),dt.$set(ea);const ta={};g&2&&(ta.$$scope={dirty:g,ctx:t}),ct.$set(ta);const oa={};g&2&&(oa.$$scope={dirty:g,ctx:t}),ht.$set(oa);const ne={};g&2&&(ne.$$scope={dirty:g,ctx:t}),mt.$set(ne);const na={};g&2&&(na.$$scope={dirty:g,ctx:t}),ft.$set(na);const sa={};g&2&&(sa.$$scope={dirty:g,ctx:t}),gt.$set(sa);const aa={};g&2&&(aa.$$scope={dirty:g,ctx:t}),bt.$set(aa);const yt={};g&2&&(yt.$$scope={dirty:g,ctx:t}),kt.$set(yt);const ra={};g&2&&(ra.$$scope={dirty:g,ctx:t}),Qt.$set(ra);const ia={};g&2&&(ia.$$scope={dirty:g,ctx:t}),wt.$set(ia);const la={};g&2&&(la.$$scope={dirty:g,ctx:t}),$t.$set(la);const en={};g&2&&(en.$$scope={dirty:g,ctx:t}),Tt.$set(en)},i(t){Ra||($(l.$$.fragment,t),$(jt.$$.fragment,t),$(Nt.$$.fragment,t),$(It.$$.fragment,t),$(Ot.$$.fragment,t),$(Wt.$$.fragment,t),$(Ht.$$.fragment,t),$(Vt.$$.fragment,t),$(Xt.$$.fragment,t),$(Jt.$$.fragment,t),$(Xe.$$.fragment,t),$(Gt.$$.fragment,t),$(Yt.$$.fragment,t),$(so.$$.fragment,t),$(Ke.$$.fragment,t),$(Ge.$$.fragment,t),$(ao.$$.fragment,t),$(ro.$$.fragment,t),$(ho.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(mo.$$.fragment,t),$(uo.$$.fragment,t),$(ko.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(st.$$.fragment,t),$(Qo.$$.fragment,t),$(vo.$$.fragment,t),$(yo.$$.fragment,t),$(rt.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(qo.$$.fragment,t),$(Do.$$.fragment,t),$(jo.$$.fragment,t),$(ht.$$.fragment,t),$(mt.$$.fragment,t),$(Eo.$$.fragment,t),$(Fo.$$.fragment,t),$(No.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(So.$$.fragment,t),$(Lo.$$.fragment,t),$(Ho.$$.fragment,t),$(bt.$$.fragment,t),$(kt.$$.fragment,t),$(Qt.$$.fragment,t),$(Ro.$$.fragment,t),$(Uo.$$.fragment,t),$(Ko.$$.fragment,t),$(wt.$$.fragment,t),$($t.$$.fragment,t),$(Tt.$$.fragment,t),Ra=!0)},o(t){T(l.$$.fragment,t),T(jt.$$.fragment,t),T(Nt.$$.fragment,t),T(It.$$.fragment,t),T(Ot.$$.fragment,t),T(Wt.$$.fragment,t),T(Ht.$$.fragment,t),T(Vt.$$.fragment,t),T(Xt.$$.fragment,t),T(Jt.$$.fragment,t),T(Xe.$$.fragment,t),T(Gt.$$.fragment,t),T(Yt.$$.fragment,t),T(so.$$.fragment,t),T(Ke.$$.fragment,t),T(Ge.$$.fragment,t),T(ao.$$.fragment,t),T(ro.$$.fragment,t),T(ho.$$.fragment,t),T(Ze.$$.fragment,t),T(et.$$.fragment,t),T(mo.$$.fragment,t),T(uo.$$.fragment,t),T(ko.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(Qo.$$.fragment,t),T(vo.$$.fragment,t),T(yo.$$.fragment,t),T(rt.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(qo.$$.fragment,t),T(Do.$$.fragment,t),T(jo.$$.fragment,t),T(ht.$$.fragment,t),T(mt.$$.fragment,t),T(Eo.$$.fragment,t),T(Fo.$$.fragment,t),T(No.$$.fragment,t),T(ft.$$.fragment,t),T(gt.$$.fragment,t),T(So.$$.fragment,t),T(Lo.$$.fragment,t),T(Ho.$$.fragment,t),T(bt.$$.fragment,t),T(kt.$$.fragment,t),T(Qt.$$.fragment,t),T(Ro.$$.fragment,t),T(Uo.$$.fragment,t),T(Ko.$$.fragment,t),T(wt.$$.fragment,t),T($t.$$.fragment,t),T(Tt.$$.fragment,t),Ra=!1},d(t){o(d),t&&o(_),t&&o(c),y(l),t&&o(da),t&&o(fe),y(jt),t&&o(ca),t&&o(Le),t&&o(pa),t&&o(tn),t&&o(ha),t&&o(on),t&&o(ma),t&&o(nn),t&&o(ua),t&&o(G),t&&o(fa),t&&o(Oe),t&&o(ga),t&&o(ge),y(Nt),t&&o(_a),t&&o(E),t&&o(ba),t&&o(He),t&&o(ka),t&&o(an),t&&o(Qa),y(It,t),t&&o(va),t&&o(_e),y(Ot),t&&o(wa),t&&o(rn),t&&o($a),y(Wt,t),t&&o(Ta),t&&o(be),y(Ht),t&&o(ya),t&&o(se),t&&o(qa),y(Vt,t),t&&o(Da),t&&o(ke),y(Xt),t&&o(za),t&&o(K),y(Jt),y(Xe),t&&o(Ba),t&&o(we),y(Gt),t&&o(Ma),t&&o(z),y(Yt),y(so),y(Ke),y(Ge),t&&o(xa),t&&o(Te),y(ao),t&&o(ja),t&&o(F),y(ro),y(ho),y(Ze),y(et),t&&o(Ea),t&&o(qe),y(mo),t&&o(Fa),t&&o(C),y(uo),y(ko),y(ot),y(nt),y(st),t&&o(Ca),t&&o(ze),y(Qo),t&&o(Pa),t&&o(P),y(vo),y(yo),y(rt),y(it),y(lt),y(dt),y(ct),t&&o(Aa),t&&o(Me),y(qo),t&&o(Na),t&&o(A),y(Do),y(jo),y(ht),y(mt),t&&o(Sa),t&&o(je),y(Eo),t&&o(La),t&&o(N),y(Fo),y(No),y(ft),y(gt),t&&o(Ia),t&&o(Fe),y(So),t&&o(Oa),t&&o(S),y(Lo),y(Ho),y(bt),y(kt),y(Qt),t&&o(Wa),t&&o(Pe),y(Ro),t&&o(Ha),t&&o(L),y(Uo),y(Ko),y(wt),y($t),y(Tt)}}}const Km={local:"qdqbert",sections:[{local:"overview",sections:[{local:"set-default-quantizers",title:"Set default quantizers"},{local:"calibration",title:"Calibration"},{local:"export-to-onnx",title:"Export to ONNX"}],title:"Overview"},{local:"transformers.QDQBertConfig",title:"QDQBertConfig"},{local:"transformers.QDQBertModel",title:"QDQBertModel"},{local:"transformers.QDQBertLMHeadModel",title:"QDQBertLMHeadModel"},{local:"transformers.QDQBertForMaskedLM",title:"QDQBertForMaskedLM"},{local:"transformers.QDQBertForSequenceClassification",title:"QDQBertForSequenceClassification"},{local:"transformers.QDQBertForNextSentencePrediction",title:"QDQBertForNextSentencePrediction"},{local:"transformers.QDQBertForMultipleChoice",title:"QDQBertForMultipleChoice"},{local:"transformers.QDQBertForTokenClassification",title:"QDQBertForTokenClassification"},{local:"transformers.QDQBertForQuestionAnswering",title:"QDQBertForQuestionAnswering"}],title:"QDQBERT"};function Gm(q){return ym(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class su extends vm{constructor(d){super();wm(this,d,Gm,Jm,$m,{})}}export{su as default,Km as metadata};
