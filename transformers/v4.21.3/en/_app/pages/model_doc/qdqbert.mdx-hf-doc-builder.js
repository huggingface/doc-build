import{S as Qm,i as wm,s as $m,e as r,k as p,w as k,t as n,M as Tm,c as a,d as o,m as h,a as i,x as Q,h as s,b as f,G as e,g as b,y as w,q as $,o as T,B as y,v as ym,L as I}from"../../chunks/vendor-hf-doc-builder.js";import{T as xt}from"../../chunks/Tip-hf-doc-builder.js";import{D as F}from"../../chunks/Docstring-hf-doc-builder.js";import{C as M}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as J}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as S}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function qm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import QDQBertModel, QDQBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),_=n("Examples:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Examples:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Dm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function zm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Bm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Mm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertLMHeadModel, QDQBertConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function xm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Fm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForMaskedLM
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
`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function jm(q){let d,_;return d=new M({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){Q(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:I,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Em(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Cm(q){let d,_,c,m,v;return m=new M({props:{code:`import torch
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
`}}),{c(){d=r("p"),_=n("Example of single-label classification:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of single-label classification:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Pm(q){let d,_;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){k(d.$$.fragment)},l(c){Q(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:I,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Am(q){let d,_,c,m,v;return m=new M({props:{code:`import torch
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
`}}),{c(){d=r("p"),_=n("Example of multi-label classification:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example of multi-label classification:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Lm(q){let d,_;return d=new M({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){k(d.$$.fragment)},l(c){Q(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:I,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Nm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Om(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Sm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Im(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Wm(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Hm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForTokenClassification
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
`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Rm(q){let d,_;return d=new M({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){k(d.$$.fragment)},l(c){Q(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:I,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Um(q){let d,_,c,m,v;return{c(){d=r("p"),_=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),m=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(u,"CODE",{});var D=i(c);m=s(D,"Module"),D.forEach(o),v=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){b(l,d,u),e(d,_),e(d,c),e(c,m),e(d,v)},d(l){l&&o(d)}}}function Vm(q){let d,_,c,m,v;return m=new M({props:{code:`from transformers import BertTokenizer, QDQBertForQuestionAnswering
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
`}}),{c(){d=r("p"),_=n("Example:"),c=p(),k(m.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);_=s(u,"Example:"),u.forEach(o),c=h(l),Q(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,_),b(l,c,u),w(m,l,u),v=!0},p:I,i(l){v||($(m.$$.fragment,l),v=!0)},o(l){T(m.$$.fragment,l),v=!1},d(l){l&&o(d),l&&o(c),y(m,l)}}}function Xm(q){let d,_;return d=new M({props:{code:`# target is "nice puppet"
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
`}}),{c(){k(d.$$.fragment)},l(c){Q(d.$$.fragment,c)},m(c,m){w(d,c,m),_=!0},p:I,i(c){_||($(d.$$.fragment,c),_=!0)},o(c){T(d.$$.fragment,c),_=!1},d(c){y(d,c)}}}function Jm(q){let d,_,c,m,v,l,u,D,Da,dr,fe,Ne,Nn,Ft,za,On,Ba,cr,Oe,Ma,jt,xa,Fa,pr,tn,ja,hr,on,Sn,Ea,mr,nn,Ca,ur,G,In,Wn,Pa,Aa,Hn,Se,La,Et,Na,Oa,Rn,Sa,Ia,Un,Ct,Wa,Vn,Ha,Ra,Ua,Xn,Pt,Va,sn,Xa,Ja,fr,Ie,Ka,At,Ga,Ya,gr,ge,We,Jn,Lt,Za,Kn,ei,_r,j,ti,Gn,oi,ni,Nt,si,ri,Yn,ai,ii,Zn,li,di,Ot,ci,pi,br,He,hi,es,mi,ui,vr,rn,fi,kr,St,Qr,_e,Re,ts,It,gi,os,_i,wr,an,bi,$r,Wt,Tr,be,Ue,ns,Ht,vi,ss,ki,yr,se,Qi,Rt,wi,$i,Ut,Ti,yi,qr,Vt,Dr,ve,Ve,rs,Xt,qi,as,Di,zr,K,Jt,zi,ke,Bi,ln,Mi,xi,Kt,Fi,ji,Ei,Qe,Ci,dn,Pi,Ai,cn,Li,Ni,Oi,Xe,Br,we,Je,is,Gt,Si,ls,Ii,Mr,z,Yt,Wi,ds,Hi,Ri,Zt,Ui,pn,Vi,Xi,Ji,eo,Ki,to,Gi,Yi,Zi,oo,el,no,tl,ol,nl,x,sl,cs,rl,al,ps,il,ll,hs,dl,cl,ms,pl,hl,us,ml,ul,fs,fl,gl,_l,Y,so,bl,$e,vl,hn,kl,Ql,gs,wl,$l,Tl,Ke,yl,Ge,xr,Te,Ye,_s,ro,ql,bs,Dl,Fr,E,ao,zl,io,Bl,vs,Ml,xl,Fl,lo,jl,mn,El,Cl,Pl,co,Al,po,Ll,Nl,Ol,Z,ho,Sl,ye,Il,un,Wl,Hl,ks,Rl,Ul,Vl,Ze,Xl,et,jr,qe,tt,Qs,mo,Jl,ws,Kl,Er,C,uo,Gl,fo,Yl,$s,Zl,ed,td,go,od,fn,nd,sd,rd,_o,ad,bo,id,ld,dd,W,vo,cd,De,pd,gn,hd,md,Ts,ud,fd,gd,ot,_d,nt,bd,st,Cr,ze,rt,ys,ko,vd,qs,kd,Pr,P,Qo,Qd,Ds,wd,$d,wo,Td,_n,yd,qd,Dd,$o,zd,To,Bd,Md,xd,B,yo,Fd,Be,jd,bn,Ed,Cd,zs,Pd,Ad,Ld,at,Nd,it,Od,lt,Sd,dt,Id,ct,Ar,Me,pt,Bs,qo,Wd,Ms,Hd,Lr,A,Do,Rd,zo,Ud,xs,Vd,Xd,Jd,Bo,Kd,vn,Gd,Yd,Zd,Mo,ec,xo,tc,oc,nc,ee,Fo,sc,xe,rc,kn,ac,ic,Fs,lc,dc,cc,ht,pc,mt,Nr,Fe,ut,js,jo,hc,Es,mc,Or,L,Eo,uc,Cs,fc,gc,Co,_c,Qn,bc,vc,kc,Po,Qc,Ao,wc,$c,Tc,te,Lo,yc,je,qc,wn,Dc,zc,Ps,Bc,Mc,xc,ft,Fc,gt,Sr,Ee,_t,As,No,jc,Ls,Ec,Ir,N,Oo,Cc,Ns,Pc,Ac,So,Lc,$n,Nc,Oc,Sc,Io,Ic,Wo,Wc,Hc,Rc,H,Ho,Uc,Ce,Vc,Tn,Xc,Jc,Os,Kc,Gc,Yc,bt,Zc,vt,ep,kt,Wr,Pe,Qt,Ss,Ro,tp,Is,op,Hr,O,Uo,np,Ae,sp,Ws,rp,ap,Hs,ip,lp,dp,Vo,cp,yn,pp,hp,mp,Xo,up,Jo,fp,gp,_p,R,Ko,bp,Le,vp,qn,kp,Qp,Rs,wp,$p,Tp,wt,yp,$t,qp,Tt,Rr;return l=new J({}),Ft=new J({}),Lt=new J({}),St=new M({props:{code:`import pytorch_quantization.nn as quant_nn
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
<span class="hljs-meta">&gt;&gt;&gt; </span>quant_nn.QuantLinear.set_default_quant_desc_weight(weight_desc)`}}),It=new J({}),Wt=new M({props:{code:`# Find the TensorQuantizer and enable calibration
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
<span class="hljs-meta">&gt;&gt;&gt; </span>torch.onnx.export(...)`}}),Xt=new J({}),Jt=new F({props:{name:"class transformers.QDQBertConfig",anchor:"transformers.QDQBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"use_cache",val:" = True"},{name:"is_encoder_decoder",val:" = False"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the QDQBERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.QDQBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertModel">QDQBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.QDQBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.QDQBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.QDQBertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/configuration_qdqbert.py#L29"}}),Xe=new S({props:{anchor:"transformers.QDQBertConfig.example",$$slots:{default:[qm]},$$scope:{ctx:q}}}),Gt=new J({}),Yt=new F({props:{name:"class transformers.QDQBertModel",anchor:"transformers.QDQBertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:": bool = True"}],parametersDescription:[{anchor:"transformers.QDQBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L840"}}),so=new F({props:{name:"forward",anchor:"transformers.QDQBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.FloatTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L880",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ke=new xt({props:{$$slots:{default:[Dm]},$$scope:{ctx:q}}}),Ge=new S({props:{anchor:"transformers.QDQBertModel.forward.example",$$slots:{default:[zm]},$$scope:{ctx:q}}}),ro=new J({}),ao=new F({props:{name:"class transformers.QDQBertLMHeadModel",anchor:"transformers.QDQBertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1021"}}),ho=new F({props:{name:"forward",anchor:"transformers.QDQBertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.Tuple[typing.Tuple[torch.LongTensor]]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1044",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ze=new xt({props:{$$slots:{default:[Bm]},$$scope:{ctx:q}}}),et=new S({props:{anchor:"transformers.QDQBertLMHeadModel.forward.example",$$slots:{default:[Mm]},$$scope:{ctx:q}}}),mo=new J({}),uo=new F({props:{name:"class transformers.QDQBertForMaskedLM",anchor:"transformers.QDQBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1175"}}),vo=new F({props:{name:"forward",anchor:"transformers.QDQBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1201",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ot=new xt({props:{$$slots:{default:[xm]},$$scope:{ctx:q}}}),nt=new S({props:{anchor:"transformers.QDQBertForMaskedLM.forward.example",$$slots:{default:[Fm]},$$scope:{ctx:q}}}),st=new S({props:{anchor:"transformers.QDQBertForMaskedLM.forward.example-2",$$slots:{default:[jm]},$$scope:{ctx:q}}}),ko=new J({}),Qo=new F({props:{name:"class transformers.QDQBertForSequenceClassification",anchor:"transformers.QDQBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1392"}}),yo=new F({props:{name:"forward",anchor:"transformers.QDQBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1404",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),at=new xt({props:{$$slots:{default:[Em]},$$scope:{ctx:q}}}),it=new S({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example",$$slots:{default:[Cm]},$$scope:{ctx:q}}}),lt=new S({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-2",$$slots:{default:[Pm]},$$scope:{ctx:q}}}),dt=new S({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-3",$$slots:{default:[Am]},$$scope:{ctx:q}}}),ct=new S({props:{anchor:"transformers.QDQBertForSequenceClassification.forward.example-4",$$slots:{default:[Lm]},$$scope:{ctx:q}}}),qo=new J({}),Do=new F({props:{name:"class transformers.QDQBertForNextSentencePrediction",anchor:"transformers.QDQBertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1288"}}),Fo=new F({props:{name:"forward",anchor:"transformers.QDQBertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1298",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ht=new xt({props:{$$slots:{default:[Nm]},$$scope:{ctx:q}}}),mt=new S({props:{anchor:"transformers.QDQBertForNextSentencePrediction.forward.example",$$slots:{default:[Om]},$$scope:{ctx:q}}}),jo=new J({}),Eo=new F({props:{name:"class transformers.QDQBertForMultipleChoice",anchor:"transformers.QDQBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1490"}}),Lo=new F({props:{name:"forward",anchor:"transformers.QDQBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1501",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ft=new xt({props:{$$slots:{default:[Sm]},$$scope:{ctx:q}}}),gt=new S({props:{anchor:"transformers.QDQBertForMultipleChoice.forward.example",$$slots:{default:[Im]},$$scope:{ctx:q}}}),No=new J({}),Oo=new F({props:{name:"class transformers.QDQBertForTokenClassification",anchor:"transformers.QDQBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1582"}}),Ho=new F({props:{name:"forward",anchor:"transformers.QDQBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1597",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),bt=new xt({props:{$$slots:{default:[Wm]},$$scope:{ctx:q}}}),vt=new S({props:{anchor:"transformers.QDQBertForTokenClassification.forward.example",$$slots:{default:[Hm]},$$scope:{ctx:q}}}),kt=new S({props:{anchor:"transformers.QDQBertForTokenClassification.forward.example-2",$$slots:{default:[Rm]},$$scope:{ctx:q}}}),Ro=new J({}),Uo=new F({props:{name:"class transformers.QDQBertForQuestionAnswering",anchor:"transformers.QDQBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig">QDQBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1664"}}),Ko=new F({props:{name:"forward",anchor:"transformers.QDQBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.QDQBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.3/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.3/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.3/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.QDQBertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.3/src/transformers/models/qdqbert/modeling_qdqbert.py#L1678",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertConfig"
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
  href="/docs/transformers/v4.21.3/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wt=new xt({props:{$$slots:{default:[Um]},$$scope:{ctx:q}}}),$t=new S({props:{anchor:"transformers.QDQBertForQuestionAnswering.forward.example",$$slots:{default:[Vm]},$$scope:{ctx:q}}}),Tt=new S({props:{anchor:"transformers.QDQBertForQuestionAnswering.forward.example-2",$$slots:{default:[Xm]},$$scope:{ctx:q}}}),{c(){d=r("meta"),_=p(),c=r("h1"),m=r("a"),v=r("span"),k(l.$$.fragment),u=p(),D=r("span"),Da=n("QDQBERT"),dr=p(),fe=r("h2"),Ne=r("a"),Nn=r("span"),k(Ft.$$.fragment),za=p(),On=r("span"),Ba=n("Overview"),cr=p(),Oe=r("p"),Ma=n("The QDQBERT model can be referenced in "),jt=r("a"),xa=n(`Integer Quantization for Deep Learning Inference: Principles and Empirical
Evaluation`),Fa=n(` by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius
Micikevicius.`),pr=p(),tn=r("p"),ja=n("The abstract from the paper is the following:"),hr=p(),on=r("p"),Sn=r("em"),Ea=n(`Quantization techniques can reduce the size of Deep Neural Networks and improve inference latency and throughput by
taking advantage of high throughput integer instructions. In this paper we review the mathematical aspects of
quantization parameters and evaluate their choices on a wide range of neural network models for different application
domains, including vision, speech, and language. We focus on quantization techniques that are amenable to acceleration
by processors with high-throughput integer math pipelines. We also present a workflow for 8-bit quantization that is
able to maintain accuracy within 1% of the floating-point baseline on all networks studied, including models that are
more difficult to quantize, such as MobileNets and BERT-large.`),mr=p(),nn=r("p"),Ca=n("Tips:"),ur=p(),G=r("ul"),In=r("li"),Wn=r("p"),Pa=n(`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to (i) linear layer
inputs and weights, (ii) matmul inputs, (iii) residual add inputs, in BERT model.`),Aa=p(),Hn=r("li"),Se=r("p"),La=n("QDQBERT requires the dependency of "),Et=r("a"),Na=n("Pytorch Quantization Toolkit"),Oa=n(". To install "),Rn=r("code"),Sa=n("pip install pytorch-quantization --extra-index-url https://pypi.ngc.nvidia.com"),Ia=p(),Un=r("li"),Ct=r("p"),Wa=n("QDQBERT model can be loaded from any checkpoint of HuggingFace BERT model (for example "),Vn=r("em"),Ha=n("bert-base-uncased"),Ra=n(`), and
perform Quantization Aware Training/Post Training Quantization.`),Ua=p(),Xn=r("li"),Pt=r("p"),Va=n(`A complete example of using QDQBERT model to perform Quatization Aware Training and Post Training Quantization for
SQUAD task can be found at `),sn=r("a"),Xa=n("transformers/examples/research_projects/quantization-qdqbert/"),Ja=n("."),fr=p(),Ie=r("p"),Ka=n("This model was contributed by "),At=r("a"),Ga=n("shangz"),Ya=n("."),gr=p(),ge=r("h3"),We=r("a"),Jn=r("span"),k(Lt.$$.fragment),Za=p(),Kn=r("span"),ei=n("Set default quantizers"),_r=p(),j=r("p"),ti=n(`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to BERT by
`),Gn=r("code"),oi=n("TensorQuantizer"),ni=n(" in "),Nt=r("a"),si=n("Pytorch Quantization Toolkit"),ri=n(". "),Yn=r("code"),ai=n("TensorQuantizer"),ii=n(` is the module
for quantizing tensors, with `),Zn=r("code"),li=n("QuantDescriptor"),di=n(" defining how the tensor should be quantized. Refer to "),Ot=r("a"),ci=n(`Pytorch
Quantization Toolkit userguide`),pi=n(" for more details."),br=p(),He=r("p"),hi=n("Before creating QDQBERT model, one has to set the default "),es=r("code"),mi=n("QuantDescriptor"),ui=n(" defining default tensor quantizers."),vr=p(),rn=r("p"),fi=n("Example:"),kr=p(),k(St.$$.fragment),Qr=p(),_e=r("h3"),Re=r("a"),ts=r("span"),k(It.$$.fragment),gi=p(),os=r("span"),_i=n("Calibration"),wr=p(),an=r("p"),bi=n(`Calibration is the terminology of passing data samples to the quantizer and deciding the best scaling factors for
tensors. After setting up the tensor quantizers, one can use the following example to calibrate the model:`),$r=p(),k(Wt.$$.fragment),Tr=p(),be=r("h3"),Ue=r("a"),ns=r("span"),k(Ht.$$.fragment),vi=p(),ss=r("span"),ki=n("Export to ONNX"),yr=p(),se=r("p"),Qi=n("The goal of exporting to ONNX is to deploy inference by "),Rt=r("a"),wi=n("TensorRT"),$i=n(`. Fake
quantization will be broken into a pair of QuantizeLinear/DequantizeLinear ONNX ops. After setting static member of
TensorQuantizer to use Pytorch\u2019s own fake quantization functions, fake quantized model can be exported to ONNX, follow
the instructions in `),Ut=r("a"),Ti=n("torch.onnx"),yi=n(". Example:"),qr=p(),k(Vt.$$.fragment),Dr=p(),ve=r("h2"),Ve=r("a"),rs=r("span"),k(Xt.$$.fragment),qi=p(),as=r("span"),Di=n("QDQBertConfig"),zr=p(),K=r("div"),k(Jt.$$.fragment),zi=p(),ke=r("p"),Bi=n("This is the configuration class to store the configuration of a "),ln=r("a"),Mi=n("QDQBertModel"),xi=n(`. It is used to instantiate an
QDQBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BERT
`),Kt=r("a"),Fi=n("bert-base-uncased"),ji=n(" architecture."),Ei=p(),Qe=r("p"),Ci=n("Configuration objects inherit from "),dn=r("a"),Pi=n("PretrainedConfig"),Ai=n(` and can be used to control the model outputs. Read the
documentation from `),cn=r("a"),Li=n("PretrainedConfig"),Ni=n(" for more information."),Oi=p(),k(Xe.$$.fragment),Br=p(),we=r("h2"),Je=r("a"),is=r("span"),k(Gt.$$.fragment),Si=p(),ls=r("span"),Ii=n("QDQBertModel"),Mr=p(),z=r("div"),k(Yt.$$.fragment),Wi=p(),ds=r("p"),Hi=n("The bare QDQBERT Model transformer outputting raw hidden-states without any specific head on top."),Ri=p(),Zt=r("p"),Ui=n("This model inherits from "),pn=r("a"),Vi=n("PreTrainedModel"),Xi=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ji=p(),eo=r("p"),Ki=n("This model is also a PyTorch "),to=r("a"),Gi=n("torch.nn.Module"),Yi=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zi=p(),oo=r("p"),el=n(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),no=r("a"),tl=n(`Attention is
all you need`),ol=n(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),nl=p(),x=r("p"),sl=n("To behave as an decoder the model needs to be initialized with the "),cs=r("code"),rl=n("is_decoder"),al=n(` argument of the configuration set
to `),ps=r("code"),il=n("True"),ll=n(". To be used in a Seq2Seq model, the model needs to initialized with both "),hs=r("code"),dl=n("is_decoder"),cl=n(` argument and
`),ms=r("code"),pl=n("add_cross_attention"),hl=n(" set to "),us=r("code"),ml=n("True"),ul=n("; an "),fs=r("code"),fl=n("encoder_hidden_states"),gl=n(" is then expected as an input to the forward pass."),_l=p(),Y=r("div"),k(so.$$.fragment),bl=p(),$e=r("p"),vl=n("The "),hn=r("a"),kl=n("QDQBertModel"),Ql=n(" forward method, overrides the "),gs=r("code"),wl=n("__call__"),$l=n(" special method."),Tl=p(),k(Ke.$$.fragment),yl=p(),k(Ge.$$.fragment),xr=p(),Te=r("h2"),Ye=r("a"),_s=r("span"),k(ro.$$.fragment),ql=p(),bs=r("span"),Dl=n("QDQBertLMHeadModel"),Fr=p(),E=r("div"),k(ao.$$.fragment),zl=p(),io=r("p"),Bl=n("QDQBERT Model with a "),vs=r("code"),Ml=n("language modeling"),xl=n(" head on top for CLM fine-tuning."),Fl=p(),lo=r("p"),jl=n("This model inherits from "),mn=r("a"),El=n("PreTrainedModel"),Cl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pl=p(),co=r("p"),Al=n("This model is also a PyTorch "),po=r("a"),Ll=n("torch.nn.Module"),Nl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ol=p(),Z=r("div"),k(ho.$$.fragment),Sl=p(),ye=r("p"),Il=n("The "),un=r("a"),Wl=n("QDQBertLMHeadModel"),Hl=n(" forward method, overrides the "),ks=r("code"),Rl=n("__call__"),Ul=n(" special method."),Vl=p(),k(Ze.$$.fragment),Xl=p(),k(et.$$.fragment),jr=p(),qe=r("h2"),tt=r("a"),Qs=r("span"),k(mo.$$.fragment),Jl=p(),ws=r("span"),Kl=n("QDQBertForMaskedLM"),Er=p(),C=r("div"),k(uo.$$.fragment),Gl=p(),fo=r("p"),Yl=n("QDQBERT Model with a "),$s=r("code"),Zl=n("language modeling"),ed=n(" head on top."),td=p(),go=r("p"),od=n("This model inherits from "),fn=r("a"),nd=n("PreTrainedModel"),sd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rd=p(),_o=r("p"),ad=n("This model is also a PyTorch "),bo=r("a"),id=n("torch.nn.Module"),ld=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dd=p(),W=r("div"),k(vo.$$.fragment),cd=p(),De=r("p"),pd=n("The "),gn=r("a"),hd=n("QDQBertForMaskedLM"),md=n(" forward method, overrides the "),Ts=r("code"),ud=n("__call__"),fd=n(" special method."),gd=p(),k(ot.$$.fragment),_d=p(),k(nt.$$.fragment),bd=p(),k(st.$$.fragment),Cr=p(),ze=r("h2"),rt=r("a"),ys=r("span"),k(ko.$$.fragment),vd=p(),qs=r("span"),kd=n("QDQBertForSequenceClassification"),Pr=p(),P=r("div"),k(Qo.$$.fragment),Qd=p(),Ds=r("p"),wd=n(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),$d=p(),wo=r("p"),Td=n("This model inherits from "),_n=r("a"),yd=n("PreTrainedModel"),qd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dd=p(),$o=r("p"),zd=n("This model is also a PyTorch "),To=r("a"),Bd=n("torch.nn.Module"),Md=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=p(),B=r("div"),k(yo.$$.fragment),Fd=p(),Be=r("p"),jd=n("The "),bn=r("a"),Ed=n("QDQBertForSequenceClassification"),Cd=n(" forward method, overrides the "),zs=r("code"),Pd=n("__call__"),Ad=n(" special method."),Ld=p(),k(at.$$.fragment),Nd=p(),k(it.$$.fragment),Od=p(),k(lt.$$.fragment),Sd=p(),k(dt.$$.fragment),Id=p(),k(ct.$$.fragment),Ar=p(),Me=r("h2"),pt=r("a"),Bs=r("span"),k(qo.$$.fragment),Wd=p(),Ms=r("span"),Hd=n("QDQBertForNextSentencePrediction"),Lr=p(),A=r("div"),k(Do.$$.fragment),Rd=p(),zo=r("p"),Ud=n("Bert Model with a "),xs=r("code"),Vd=n("next sentence prediction (classification)"),Xd=n(" head on top."),Jd=p(),Bo=r("p"),Kd=n("This model inherits from "),vn=r("a"),Gd=n("PreTrainedModel"),Yd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd=p(),Mo=r("p"),ec=n("This model is also a PyTorch "),xo=r("a"),tc=n("torch.nn.Module"),oc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nc=p(),ee=r("div"),k(Fo.$$.fragment),sc=p(),xe=r("p"),rc=n("The "),kn=r("a"),ac=n("QDQBertForNextSentencePrediction"),ic=n(" forward method, overrides the "),Fs=r("code"),lc=n("__call__"),dc=n(" special method."),cc=p(),k(ht.$$.fragment),pc=p(),k(mt.$$.fragment),Nr=p(),Fe=r("h2"),ut=r("a"),js=r("span"),k(jo.$$.fragment),hc=p(),Es=r("span"),mc=n("QDQBertForMultipleChoice"),Or=p(),L=r("div"),k(Eo.$$.fragment),uc=p(),Cs=r("p"),fc=n(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),gc=p(),Co=r("p"),_c=n("This model inherits from "),Qn=r("a"),bc=n("PreTrainedModel"),vc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kc=p(),Po=r("p"),Qc=n("This model is also a PyTorch "),Ao=r("a"),wc=n("torch.nn.Module"),$c=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc=p(),te=r("div"),k(Lo.$$.fragment),yc=p(),je=r("p"),qc=n("The "),wn=r("a"),Dc=n("QDQBertForMultipleChoice"),zc=n(" forward method, overrides the "),Ps=r("code"),Bc=n("__call__"),Mc=n(" special method."),xc=p(),k(ft.$$.fragment),Fc=p(),k(gt.$$.fragment),Sr=p(),Ee=r("h2"),_t=r("a"),As=r("span"),k(No.$$.fragment),jc=p(),Ls=r("span"),Ec=n("QDQBertForTokenClassification"),Ir=p(),N=r("div"),k(Oo.$$.fragment),Cc=p(),Ns=r("p"),Pc=n(`QDQBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ac=p(),So=r("p"),Lc=n("This model inherits from "),$n=r("a"),Nc=n("PreTrainedModel"),Oc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sc=p(),Io=r("p"),Ic=n("This model is also a PyTorch "),Wo=r("a"),Wc=n("torch.nn.Module"),Hc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc=p(),H=r("div"),k(Ho.$$.fragment),Uc=p(),Ce=r("p"),Vc=n("The "),Tn=r("a"),Xc=n("QDQBertForTokenClassification"),Jc=n(" forward method, overrides the "),Os=r("code"),Kc=n("__call__"),Gc=n(" special method."),Yc=p(),k(bt.$$.fragment),Zc=p(),k(vt.$$.fragment),ep=p(),k(kt.$$.fragment),Wr=p(),Pe=r("h2"),Qt=r("a"),Ss=r("span"),k(Ro.$$.fragment),tp=p(),Is=r("span"),op=n("QDQBertForQuestionAnswering"),Hr=p(),O=r("div"),k(Uo.$$.fragment),np=p(),Ae=r("p"),sp=n(`QDQBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=r("code"),rp=n("span start logits"),ap=n(" and "),Hs=r("code"),ip=n("span end logits"),lp=n(")."),dp=p(),Vo=r("p"),cp=n("This model inherits from "),yn=r("a"),pp=n("PreTrainedModel"),hp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=p(),Xo=r("p"),up=n("This model is also a PyTorch "),Jo=r("a"),fp=n("torch.nn.Module"),gp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_p=p(),R=r("div"),k(Ko.$$.fragment),bp=p(),Le=r("p"),vp=n("The "),qn=r("a"),kp=n("QDQBertForQuestionAnswering"),Qp=n(" forward method, overrides the "),Rs=r("code"),wp=n("__call__"),$p=n(" special method."),Tp=p(),k(wt.$$.fragment),yp=p(),k($t.$$.fragment),qp=p(),k(Tt.$$.fragment),this.h()},l(t){const g=Tm('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),_=h(t),c=a(t,"H1",{class:!0});var Go=i(c);m=a(Go,"A",{id:!0,class:!0,href:!0});var Us=i(m);v=a(Us,"SPAN",{});var Vs=i(v);Q(l.$$.fragment,Vs),Vs.forEach(o),Us.forEach(o),u=h(Go),D=a(Go,"SPAN",{});var Xs=i(D);Da=s(Xs,"QDQBERT"),Xs.forEach(o),Go.forEach(o),dr=h(t),fe=a(t,"H2",{class:!0});var Yo=i(fe);Ne=a(Yo,"A",{id:!0,class:!0,href:!0});var Js=i(Ne);Nn=a(Js,"SPAN",{});var Ks=i(Nn);Q(Ft.$$.fragment,Ks),Ks.forEach(o),Js.forEach(o),za=h(Yo),On=a(Yo,"SPAN",{});var Gs=i(On);Ba=s(Gs,"Overview"),Gs.forEach(o),Yo.forEach(o),cr=h(t),Oe=a(t,"P",{});var Zo=i(Oe);Ma=s(Zo,"The QDQBERT model can be referenced in "),jt=a(Zo,"A",{href:!0,rel:!0});var Ys=i(jt);xa=s(Ys,`Integer Quantization for Deep Learning Inference: Principles and Empirical
Evaluation`),Ys.forEach(o),Fa=s(Zo,` by Hao Wu, Patrick Judd, Xiaojie Zhang, Mikhail Isaev and Paulius
Micikevicius.`),Zo.forEach(o),pr=h(t),tn=a(t,"P",{});var Zs=i(tn);ja=s(Zs,"The abstract from the paper is the following:"),Zs.forEach(o),hr=h(t),on=a(t,"P",{});var er=i(on);Sn=a(er,"EM",{});var tr=i(Sn);Ea=s(tr,`Quantization techniques can reduce the size of Deep Neural Networks and improve inference latency and throughput by
taking advantage of high throughput integer instructions. In this paper we review the mathematical aspects of
quantization parameters and evaluate their choices on a wide range of neural network models for different application
domains, including vision, speech, and language. We focus on quantization techniques that are amenable to acceleration
by processors with high-throughput integer math pipelines. We also present a workflow for 8-bit quantization that is
able to maintain accuracy within 1% of the floating-point baseline on all networks studied, including models that are
more difficult to quantize, such as MobileNets and BERT-large.`),tr.forEach(o),er.forEach(o),mr=h(t),nn=a(t,"P",{});var or=i(nn);Ca=s(or,"Tips:"),or.forEach(o),ur=h(t),G=a(t,"UL",{});var ne=i(G);In=a(ne,"LI",{});var nr=i(In);Wn=a(nr,"P",{});var sr=i(Wn);Pa=s(sr,`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to (i) linear layer
inputs and weights, (ii) matmul inputs, (iii) residual add inputs, in BERT model.`),sr.forEach(o),nr.forEach(o),Aa=h(ne),Hn=a(ne,"LI",{});var rr=i(Hn);Se=a(rr,"P",{});var yt=i(Se);La=s(yt,"QDQBERT requires the dependency of "),Et=a(yt,"A",{href:!0,rel:!0});var ar=i(Et);Na=s(ar,"Pytorch Quantization Toolkit"),ar.forEach(o),Oa=s(yt,". To install "),Rn=a(yt,"CODE",{});var ir=i(Rn);Sa=s(ir,"pip install pytorch-quantization --extra-index-url https://pypi.ngc.nvidia.com"),ir.forEach(o),yt.forEach(o),rr.forEach(o),Ia=h(ne),Un=a(ne,"LI",{});var lr=i(Un);Ct=a(lr,"P",{});var en=i(Ct);Wa=s(en,"QDQBERT model can be loaded from any checkpoint of HuggingFace BERT model (for example "),Vn=a(en,"EM",{});var Dp=i(Vn);Ha=s(Dp,"bert-base-uncased"),Dp.forEach(o),Ra=s(en,`), and
perform Quantization Aware Training/Post Training Quantization.`),en.forEach(o),lr.forEach(o),Ua=h(ne),Xn=a(ne,"LI",{});var zp=i(Xn);Pt=a(zp,"P",{});var Ur=i(Pt);Va=s(Ur,`A complete example of using QDQBERT model to perform Quatization Aware Training and Post Training Quantization for
SQUAD task can be found at `),sn=a(Ur,"A",{href:!0});var Bp=i(sn);Xa=s(Bp,"transformers/examples/research_projects/quantization-qdqbert/"),Bp.forEach(o),Ja=s(Ur,"."),Ur.forEach(o),zp.forEach(o),ne.forEach(o),fr=h(t),Ie=a(t,"P",{});var Vr=i(Ie);Ka=s(Vr,"This model was contributed by "),At=a(Vr,"A",{href:!0,rel:!0});var Mp=i(At);Ga=s(Mp,"shangz"),Mp.forEach(o),Ya=s(Vr,"."),Vr.forEach(o),gr=h(t),ge=a(t,"H3",{class:!0});var Xr=i(ge);We=a(Xr,"A",{id:!0,class:!0,href:!0});var xp=i(We);Jn=a(xp,"SPAN",{});var Fp=i(Jn);Q(Lt.$$.fragment,Fp),Fp.forEach(o),xp.forEach(o),Za=h(Xr),Kn=a(Xr,"SPAN",{});var jp=i(Kn);ei=s(jp,"Set default quantizers"),jp.forEach(o),Xr.forEach(o),_r=h(t),j=a(t,"P",{});var oe=i(j);ti=s(oe,`QDQBERT model adds fake quantization operations (pair of QuantizeLinear/DequantizeLinear ops) to BERT by
`),Gn=a(oe,"CODE",{});var Ep=i(Gn);oi=s(Ep,"TensorQuantizer"),Ep.forEach(o),ni=s(oe," in "),Nt=a(oe,"A",{href:!0,rel:!0});var Cp=i(Nt);si=s(Cp,"Pytorch Quantization Toolkit"),Cp.forEach(o),ri=s(oe,". "),Yn=a(oe,"CODE",{});var Pp=i(Yn);ai=s(Pp,"TensorQuantizer"),Pp.forEach(o),ii=s(oe,` is the module
for quantizing tensors, with `),Zn=a(oe,"CODE",{});var Ap=i(Zn);li=s(Ap,"QuantDescriptor"),Ap.forEach(o),di=s(oe," defining how the tensor should be quantized. Refer to "),Ot=a(oe,"A",{href:!0,rel:!0});var Lp=i(Ot);ci=s(Lp,`Pytorch
Quantization Toolkit userguide`),Lp.forEach(o),pi=s(oe," for more details."),oe.forEach(o),br=h(t),He=a(t,"P",{});var Jr=i(He);hi=s(Jr,"Before creating QDQBERT model, one has to set the default "),es=a(Jr,"CODE",{});var Np=i(es);mi=s(Np,"QuantDescriptor"),Np.forEach(o),ui=s(Jr," defining default tensor quantizers."),Jr.forEach(o),vr=h(t),rn=a(t,"P",{});var Op=i(rn);fi=s(Op,"Example:"),Op.forEach(o),kr=h(t),Q(St.$$.fragment,t),Qr=h(t),_e=a(t,"H3",{class:!0});var Kr=i(_e);Re=a(Kr,"A",{id:!0,class:!0,href:!0});var Sp=i(Re);ts=a(Sp,"SPAN",{});var Ip=i(ts);Q(It.$$.fragment,Ip),Ip.forEach(o),Sp.forEach(o),gi=h(Kr),os=a(Kr,"SPAN",{});var Wp=i(os);_i=s(Wp,"Calibration"),Wp.forEach(o),Kr.forEach(o),wr=h(t),an=a(t,"P",{});var Hp=i(an);bi=s(Hp,`Calibration is the terminology of passing data samples to the quantizer and deciding the best scaling factors for
tensors. After setting up the tensor quantizers, one can use the following example to calibrate the model:`),Hp.forEach(o),$r=h(t),Q(Wt.$$.fragment,t),Tr=h(t),be=a(t,"H3",{class:!0});var Gr=i(be);Ue=a(Gr,"A",{id:!0,class:!0,href:!0});var Rp=i(Ue);ns=a(Rp,"SPAN",{});var Up=i(ns);Q(Ht.$$.fragment,Up),Up.forEach(o),Rp.forEach(o),vi=h(Gr),ss=a(Gr,"SPAN",{});var Vp=i(ss);ki=s(Vp,"Export to ONNX"),Vp.forEach(o),Gr.forEach(o),yr=h(t),se=a(t,"P",{});var Dn=i(se);Qi=s(Dn,"The goal of exporting to ONNX is to deploy inference by "),Rt=a(Dn,"A",{href:!0,rel:!0});var Xp=i(Rt);wi=s(Xp,"TensorRT"),Xp.forEach(o),$i=s(Dn,`. Fake
quantization will be broken into a pair of QuantizeLinear/DequantizeLinear ONNX ops. After setting static member of
TensorQuantizer to use Pytorch\u2019s own fake quantization functions, fake quantized model can be exported to ONNX, follow
the instructions in `),Ut=a(Dn,"A",{href:!0,rel:!0});var Jp=i(Ut);Ti=s(Jp,"torch.onnx"),Jp.forEach(o),yi=s(Dn,". Example:"),Dn.forEach(o),qr=h(t),Q(Vt.$$.fragment,t),Dr=h(t),ve=a(t,"H2",{class:!0});var Yr=i(ve);Ve=a(Yr,"A",{id:!0,class:!0,href:!0});var Kp=i(Ve);rs=a(Kp,"SPAN",{});var Gp=i(rs);Q(Xt.$$.fragment,Gp),Gp.forEach(o),Kp.forEach(o),qi=h(Yr),as=a(Yr,"SPAN",{});var Yp=i(as);Di=s(Yp,"QDQBertConfig"),Yp.forEach(o),Yr.forEach(o),zr=h(t),K=a(t,"DIV",{class:!0});var qt=i(K);Q(Jt.$$.fragment,qt),zi=h(qt),ke=a(qt,"P",{});var zn=i(ke);Bi=s(zn,"This is the configuration class to store the configuration of a "),ln=a(zn,"A",{href:!0});var Zp=i(ln);Mi=s(Zp,"QDQBertModel"),Zp.forEach(o),xi=s(zn,`. It is used to instantiate an
QDQBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the BERT
`),Kt=a(zn,"A",{href:!0,rel:!0});var eh=i(Kt);Fi=s(eh,"bert-base-uncased"),eh.forEach(o),ji=s(zn," architecture."),zn.forEach(o),Ei=h(qt),Qe=a(qt,"P",{});var Bn=i(Qe);Ci=s(Bn,"Configuration objects inherit from "),dn=a(Bn,"A",{href:!0});var th=i(dn);Pi=s(th,"PretrainedConfig"),th.forEach(o),Ai=s(Bn,` and can be used to control the model outputs. Read the
documentation from `),cn=a(Bn,"A",{href:!0});var oh=i(cn);Li=s(oh,"PretrainedConfig"),oh.forEach(o),Ni=s(Bn," for more information."),Bn.forEach(o),Oi=h(qt),Q(Xe.$$.fragment,qt),qt.forEach(o),Br=h(t),we=a(t,"H2",{class:!0});var Zr=i(we);Je=a(Zr,"A",{id:!0,class:!0,href:!0});var nh=i(Je);is=a(nh,"SPAN",{});var sh=i(is);Q(Gt.$$.fragment,sh),sh.forEach(o),nh.forEach(o),Si=h(Zr),ls=a(Zr,"SPAN",{});var rh=i(ls);Ii=s(rh,"QDQBertModel"),rh.forEach(o),Zr.forEach(o),Mr=h(t),z=a(t,"DIV",{class:!0});var U=i(z);Q(Yt.$$.fragment,U),Wi=h(U),ds=a(U,"P",{});var ah=i(ds);Hi=s(ah,"The bare QDQBERT Model transformer outputting raw hidden-states without any specific head on top."),ah.forEach(o),Ri=h(U),Zt=a(U,"P",{});var ea=i(Zt);Ui=s(ea,"This model inherits from "),pn=a(ea,"A",{href:!0});var ih=i(pn);Vi=s(ih,"PreTrainedModel"),ih.forEach(o),Xi=s(ea,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ea.forEach(o),Ji=h(U),eo=a(U,"P",{});var ta=i(eo);Ki=s(ta,"This model is also a PyTorch "),to=a(ta,"A",{href:!0,rel:!0});var lh=i(to);Gi=s(lh,"torch.nn.Module"),lh.forEach(o),Yi=s(ta,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ta.forEach(o),Zi=h(U),oo=a(U,"P",{});var oa=i(oo);el=s(oa,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),no=a(oa,"A",{href:!0,rel:!0});var dh=i(no);tl=s(dh,`Attention is
all you need`),dh.forEach(o),ol=s(oa,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),oa.forEach(o),nl=h(U),x=a(U,"P",{});var V=i(x);sl=s(V,"To behave as an decoder the model needs to be initialized with the "),cs=a(V,"CODE",{});var ch=i(cs);rl=s(ch,"is_decoder"),ch.forEach(o),al=s(V,` argument of the configuration set
to `),ps=a(V,"CODE",{});var ph=i(ps);il=s(ph,"True"),ph.forEach(o),ll=s(V,". To be used in a Seq2Seq model, the model needs to initialized with both "),hs=a(V,"CODE",{});var hh=i(hs);dl=s(hh,"is_decoder"),hh.forEach(o),cl=s(V,` argument and
`),ms=a(V,"CODE",{});var mh=i(ms);pl=s(mh,"add_cross_attention"),mh.forEach(o),hl=s(V," set to "),us=a(V,"CODE",{});var uh=i(us);ml=s(uh,"True"),uh.forEach(o),ul=s(V,"; an "),fs=a(V,"CODE",{});var fh=i(fs);fl=s(fh,"encoder_hidden_states"),fh.forEach(o),gl=s(V," is then expected as an input to the forward pass."),V.forEach(o),_l=h(U),Y=a(U,"DIV",{class:!0});var Dt=i(Y);Q(so.$$.fragment,Dt),bl=h(Dt),$e=a(Dt,"P",{});var Mn=i($e);vl=s(Mn,"The "),hn=a(Mn,"A",{href:!0});var gh=i(hn);kl=s(gh,"QDQBertModel"),gh.forEach(o),Ql=s(Mn," forward method, overrides the "),gs=a(Mn,"CODE",{});var _h=i(gs);wl=s(_h,"__call__"),_h.forEach(o),$l=s(Mn," special method."),Mn.forEach(o),Tl=h(Dt),Q(Ke.$$.fragment,Dt),yl=h(Dt),Q(Ge.$$.fragment,Dt),Dt.forEach(o),U.forEach(o),xr=h(t),Te=a(t,"H2",{class:!0});var na=i(Te);Ye=a(na,"A",{id:!0,class:!0,href:!0});var bh=i(Ye);_s=a(bh,"SPAN",{});var vh=i(_s);Q(ro.$$.fragment,vh),vh.forEach(o),bh.forEach(o),ql=h(na),bs=a(na,"SPAN",{});var kh=i(bs);Dl=s(kh,"QDQBertLMHeadModel"),kh.forEach(o),na.forEach(o),Fr=h(t),E=a(t,"DIV",{class:!0});var re=i(E);Q(ao.$$.fragment,re),zl=h(re),io=a(re,"P",{});var sa=i(io);Bl=s(sa,"QDQBERT Model with a "),vs=a(sa,"CODE",{});var Qh=i(vs);Ml=s(Qh,"language modeling"),Qh.forEach(o),xl=s(sa," head on top for CLM fine-tuning."),sa.forEach(o),Fl=h(re),lo=a(re,"P",{});var ra=i(lo);jl=s(ra,"This model inherits from "),mn=a(ra,"A",{href:!0});var wh=i(mn);El=s(wh,"PreTrainedModel"),wh.forEach(o),Cl=s(ra,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ra.forEach(o),Pl=h(re),co=a(re,"P",{});var aa=i(co);Al=s(aa,"This model is also a PyTorch "),po=a(aa,"A",{href:!0,rel:!0});var $h=i(po);Ll=s($h,"torch.nn.Module"),$h.forEach(o),Nl=s(aa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),aa.forEach(o),Ol=h(re),Z=a(re,"DIV",{class:!0});var zt=i(Z);Q(ho.$$.fragment,zt),Sl=h(zt),ye=a(zt,"P",{});var xn=i(ye);Il=s(xn,"The "),un=a(xn,"A",{href:!0});var Th=i(un);Wl=s(Th,"QDQBertLMHeadModel"),Th.forEach(o),Hl=s(xn," forward method, overrides the "),ks=a(xn,"CODE",{});var yh=i(ks);Rl=s(yh,"__call__"),yh.forEach(o),Ul=s(xn," special method."),xn.forEach(o),Vl=h(zt),Q(Ze.$$.fragment,zt),Xl=h(zt),Q(et.$$.fragment,zt),zt.forEach(o),re.forEach(o),jr=h(t),qe=a(t,"H2",{class:!0});var ia=i(qe);tt=a(ia,"A",{id:!0,class:!0,href:!0});var qh=i(tt);Qs=a(qh,"SPAN",{});var Dh=i(Qs);Q(mo.$$.fragment,Dh),Dh.forEach(o),qh.forEach(o),Jl=h(ia),ws=a(ia,"SPAN",{});var zh=i(ws);Kl=s(zh,"QDQBertForMaskedLM"),zh.forEach(o),ia.forEach(o),Er=h(t),C=a(t,"DIV",{class:!0});var ae=i(C);Q(uo.$$.fragment,ae),Gl=h(ae),fo=a(ae,"P",{});var la=i(fo);Yl=s(la,"QDQBERT Model with a "),$s=a(la,"CODE",{});var Bh=i($s);Zl=s(Bh,"language modeling"),Bh.forEach(o),ed=s(la," head on top."),la.forEach(o),td=h(ae),go=a(ae,"P",{});var da=i(go);od=s(da,"This model inherits from "),fn=a(da,"A",{href:!0});var Mh=i(fn);nd=s(Mh,"PreTrainedModel"),Mh.forEach(o),sd=s(da,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),da.forEach(o),rd=h(ae),_o=a(ae,"P",{});var ca=i(_o);ad=s(ca,"This model is also a PyTorch "),bo=a(ca,"A",{href:!0,rel:!0});var xh=i(bo);id=s(xh,"torch.nn.Module"),xh.forEach(o),ld=s(ca,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ca.forEach(o),dd=h(ae),W=a(ae,"DIV",{class:!0});var ie=i(W);Q(vo.$$.fragment,ie),cd=h(ie),De=a(ie,"P",{});var Fn=i(De);pd=s(Fn,"The "),gn=a(Fn,"A",{href:!0});var Fh=i(gn);hd=s(Fh,"QDQBertForMaskedLM"),Fh.forEach(o),md=s(Fn," forward method, overrides the "),Ts=a(Fn,"CODE",{});var jh=i(Ts);ud=s(jh,"__call__"),jh.forEach(o),fd=s(Fn," special method."),Fn.forEach(o),gd=h(ie),Q(ot.$$.fragment,ie),_d=h(ie),Q(nt.$$.fragment,ie),bd=h(ie),Q(st.$$.fragment,ie),ie.forEach(o),ae.forEach(o),Cr=h(t),ze=a(t,"H2",{class:!0});var pa=i(ze);rt=a(pa,"A",{id:!0,class:!0,href:!0});var Eh=i(rt);ys=a(Eh,"SPAN",{});var Ch=i(ys);Q(ko.$$.fragment,Ch),Ch.forEach(o),Eh.forEach(o),vd=h(pa),qs=a(pa,"SPAN",{});var Ph=i(qs);kd=s(Ph,"QDQBertForSequenceClassification"),Ph.forEach(o),pa.forEach(o),Pr=h(t),P=a(t,"DIV",{class:!0});var le=i(P);Q(Qo.$$.fragment,le),Qd=h(le),Ds=a(le,"P",{});var Ah=i(Ds);wd=s(Ah,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ah.forEach(o),$d=h(le),wo=a(le,"P",{});var ha=i(wo);Td=s(ha,"This model inherits from "),_n=a(ha,"A",{href:!0});var Lh=i(_n);yd=s(Lh,"PreTrainedModel"),Lh.forEach(o),qd=s(ha,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ha.forEach(o),Dd=h(le),$o=a(le,"P",{});var ma=i($o);zd=s(ma,"This model is also a PyTorch "),To=a(ma,"A",{href:!0,rel:!0});var Nh=i(To);Bd=s(Nh,"torch.nn.Module"),Nh.forEach(o),Md=s(ma,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ma.forEach(o),xd=h(le),B=a(le,"DIV",{class:!0});var X=i(B);Q(yo.$$.fragment,X),Fd=h(X),Be=a(X,"P",{});var jn=i(Be);jd=s(jn,"The "),bn=a(jn,"A",{href:!0});var Oh=i(bn);Ed=s(Oh,"QDQBertForSequenceClassification"),Oh.forEach(o),Cd=s(jn," forward method, overrides the "),zs=a(jn,"CODE",{});var Sh=i(zs);Pd=s(Sh,"__call__"),Sh.forEach(o),Ad=s(jn," special method."),jn.forEach(o),Ld=h(X),Q(at.$$.fragment,X),Nd=h(X),Q(it.$$.fragment,X),Od=h(X),Q(lt.$$.fragment,X),Sd=h(X),Q(dt.$$.fragment,X),Id=h(X),Q(ct.$$.fragment,X),X.forEach(o),le.forEach(o),Ar=h(t),Me=a(t,"H2",{class:!0});var ua=i(Me);pt=a(ua,"A",{id:!0,class:!0,href:!0});var Ih=i(pt);Bs=a(Ih,"SPAN",{});var Wh=i(Bs);Q(qo.$$.fragment,Wh),Wh.forEach(o),Ih.forEach(o),Wd=h(ua),Ms=a(ua,"SPAN",{});var Hh=i(Ms);Hd=s(Hh,"QDQBertForNextSentencePrediction"),Hh.forEach(o),ua.forEach(o),Lr=h(t),A=a(t,"DIV",{class:!0});var de=i(A);Q(Do.$$.fragment,de),Rd=h(de),zo=a(de,"P",{});var fa=i(zo);Ud=s(fa,"Bert Model with a "),xs=a(fa,"CODE",{});var Rh=i(xs);Vd=s(Rh,"next sentence prediction (classification)"),Rh.forEach(o),Xd=s(fa," head on top."),fa.forEach(o),Jd=h(de),Bo=a(de,"P",{});var ga=i(Bo);Kd=s(ga,"This model inherits from "),vn=a(ga,"A",{href:!0});var Uh=i(vn);Gd=s(Uh,"PreTrainedModel"),Uh.forEach(o),Yd=s(ga,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ga.forEach(o),Zd=h(de),Mo=a(de,"P",{});var _a=i(Mo);ec=s(_a,"This model is also a PyTorch "),xo=a(_a,"A",{href:!0,rel:!0});var Vh=i(xo);tc=s(Vh,"torch.nn.Module"),Vh.forEach(o),oc=s(_a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_a.forEach(o),nc=h(de),ee=a(de,"DIV",{class:!0});var Bt=i(ee);Q(Fo.$$.fragment,Bt),sc=h(Bt),xe=a(Bt,"P",{});var En=i(xe);rc=s(En,"The "),kn=a(En,"A",{href:!0});var Xh=i(kn);ac=s(Xh,"QDQBertForNextSentencePrediction"),Xh.forEach(o),ic=s(En," forward method, overrides the "),Fs=a(En,"CODE",{});var Jh=i(Fs);lc=s(Jh,"__call__"),Jh.forEach(o),dc=s(En," special method."),En.forEach(o),cc=h(Bt),Q(ht.$$.fragment,Bt),pc=h(Bt),Q(mt.$$.fragment,Bt),Bt.forEach(o),de.forEach(o),Nr=h(t),Fe=a(t,"H2",{class:!0});var ba=i(Fe);ut=a(ba,"A",{id:!0,class:!0,href:!0});var Kh=i(ut);js=a(Kh,"SPAN",{});var Gh=i(js);Q(jo.$$.fragment,Gh),Gh.forEach(o),Kh.forEach(o),hc=h(ba),Es=a(ba,"SPAN",{});var Yh=i(Es);mc=s(Yh,"QDQBertForMultipleChoice"),Yh.forEach(o),ba.forEach(o),Or=h(t),L=a(t,"DIV",{class:!0});var ce=i(L);Q(Eo.$$.fragment,ce),uc=h(ce),Cs=a(ce,"P",{});var Zh=i(Cs);fc=s(Zh,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zh.forEach(o),gc=h(ce),Co=a(ce,"P",{});var va=i(Co);_c=s(va,"This model inherits from "),Qn=a(va,"A",{href:!0});var em=i(Qn);bc=s(em,"PreTrainedModel"),em.forEach(o),vc=s(va,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),va.forEach(o),kc=h(ce),Po=a(ce,"P",{});var ka=i(Po);Qc=s(ka,"This model is also a PyTorch "),Ao=a(ka,"A",{href:!0,rel:!0});var tm=i(Ao);wc=s(tm,"torch.nn.Module"),tm.forEach(o),$c=s(ka,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ka.forEach(o),Tc=h(ce),te=a(ce,"DIV",{class:!0});var Mt=i(te);Q(Lo.$$.fragment,Mt),yc=h(Mt),je=a(Mt,"P",{});var Cn=i(je);qc=s(Cn,"The "),wn=a(Cn,"A",{href:!0});var om=i(wn);Dc=s(om,"QDQBertForMultipleChoice"),om.forEach(o),zc=s(Cn," forward method, overrides the "),Ps=a(Cn,"CODE",{});var nm=i(Ps);Bc=s(nm,"__call__"),nm.forEach(o),Mc=s(Cn," special method."),Cn.forEach(o),xc=h(Mt),Q(ft.$$.fragment,Mt),Fc=h(Mt),Q(gt.$$.fragment,Mt),Mt.forEach(o),ce.forEach(o),Sr=h(t),Ee=a(t,"H2",{class:!0});var Qa=i(Ee);_t=a(Qa,"A",{id:!0,class:!0,href:!0});var sm=i(_t);As=a(sm,"SPAN",{});var rm=i(As);Q(No.$$.fragment,rm),rm.forEach(o),sm.forEach(o),jc=h(Qa),Ls=a(Qa,"SPAN",{});var am=i(Ls);Ec=s(am,"QDQBertForTokenClassification"),am.forEach(o),Qa.forEach(o),Ir=h(t),N=a(t,"DIV",{class:!0});var pe=i(N);Q(Oo.$$.fragment,pe),Cc=h(pe),Ns=a(pe,"P",{});var im=i(Ns);Pc=s(im,`QDQBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),im.forEach(o),Ac=h(pe),So=a(pe,"P",{});var wa=i(So);Lc=s(wa,"This model inherits from "),$n=a(wa,"A",{href:!0});var lm=i($n);Nc=s(lm,"PreTrainedModel"),lm.forEach(o),Oc=s(wa,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wa.forEach(o),Sc=h(pe),Io=a(pe,"P",{});var $a=i(Io);Ic=s($a,"This model is also a PyTorch "),Wo=a($a,"A",{href:!0,rel:!0});var dm=i(Wo);Wc=s(dm,"torch.nn.Module"),dm.forEach(o),Hc=s($a,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$a.forEach(o),Rc=h(pe),H=a(pe,"DIV",{class:!0});var he=i(H);Q(Ho.$$.fragment,he),Uc=h(he),Ce=a(he,"P",{});var Pn=i(Ce);Vc=s(Pn,"The "),Tn=a(Pn,"A",{href:!0});var cm=i(Tn);Xc=s(cm,"QDQBertForTokenClassification"),cm.forEach(o),Jc=s(Pn," forward method, overrides the "),Os=a(Pn,"CODE",{});var pm=i(Os);Kc=s(pm,"__call__"),pm.forEach(o),Gc=s(Pn," special method."),Pn.forEach(o),Yc=h(he),Q(bt.$$.fragment,he),Zc=h(he),Q(vt.$$.fragment,he),ep=h(he),Q(kt.$$.fragment,he),he.forEach(o),pe.forEach(o),Wr=h(t),Pe=a(t,"H2",{class:!0});var Ta=i(Pe);Qt=a(Ta,"A",{id:!0,class:!0,href:!0});var hm=i(Qt);Ss=a(hm,"SPAN",{});var mm=i(Ss);Q(Ro.$$.fragment,mm),mm.forEach(o),hm.forEach(o),tp=h(Ta),Is=a(Ta,"SPAN",{});var um=i(Is);op=s(um,"QDQBertForQuestionAnswering"),um.forEach(o),Ta.forEach(o),Hr=h(t),O=a(t,"DIV",{class:!0});var me=i(O);Q(Uo.$$.fragment,me),np=h(me),Ae=a(me,"P",{});var An=i(Ae);sp=s(An,`QDQBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ws=a(An,"CODE",{});var fm=i(Ws);rp=s(fm,"span start logits"),fm.forEach(o),ap=s(An," and "),Hs=a(An,"CODE",{});var gm=i(Hs);ip=s(gm,"span end logits"),gm.forEach(o),lp=s(An,")."),An.forEach(o),dp=h(me),Vo=a(me,"P",{});var ya=i(Vo);cp=s(ya,"This model inherits from "),yn=a(ya,"A",{href:!0});var _m=i(yn);pp=s(_m,"PreTrainedModel"),_m.forEach(o),hp=s(ya,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ya.forEach(o),mp=h(me),Xo=a(me,"P",{});var qa=i(Xo);up=s(qa,"This model is also a PyTorch "),Jo=a(qa,"A",{href:!0,rel:!0});var bm=i(Jo);fp=s(bm,"torch.nn.Module"),bm.forEach(o),gp=s(qa,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),qa.forEach(o),_p=h(me),R=a(me,"DIV",{class:!0});var ue=i(R);Q(Ko.$$.fragment,ue),bp=h(ue),Le=a(ue,"P",{});var Ln=i(Le);vp=s(Ln,"The "),qn=a(Ln,"A",{href:!0});var vm=i(qn);kp=s(vm,"QDQBertForQuestionAnswering"),vm.forEach(o),Qp=s(Ln," forward method, overrides the "),Rs=a(Ln,"CODE",{});var km=i(Rs);wp=s(km,"__call__"),km.forEach(o),$p=s(Ln," special method."),Ln.forEach(o),Tp=h(ue),Q(wt.$$.fragment,ue),yp=h(ue),Q($t.$$.fragment,ue),qp=h(ue),Q(Tt.$$.fragment,ue),ue.forEach(o),me.forEach(o),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Km)),f(m,"id","qdqbert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#qdqbert"),f(c,"class","relative group"),f(Ne,"id","overview"),f(Ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ne,"href","#overview"),f(fe,"class","relative group"),f(jt,"href","https://arxiv.org/abs/2004.09602"),f(jt,"rel","nofollow"),f(Et,"href","https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization"),f(Et,"rel","nofollow"),f(sn,"href","examples/research_projects/quantization-qdqbert/"),f(At,"href","https://huggingface.co/shangz"),f(At,"rel","nofollow"),f(We,"id","set-default-quantizers"),f(We,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(We,"href","#set-default-quantizers"),f(ge,"class","relative group"),f(Nt,"href","https://github.com/NVIDIA/TensorRT/tree/master/tools/pytorch-quantization"),f(Nt,"rel","nofollow"),f(Ot,"href","https://docs.nvidia.com/deeplearning/tensorrt/pytorch-quantization-toolkit/docs/userguide.html"),f(Ot,"rel","nofollow"),f(Re,"id","calibration"),f(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Re,"href","#calibration"),f(_e,"class","relative group"),f(Ue,"id","export-to-onnx"),f(Ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ue,"href","#export-to-onnx"),f(be,"class","relative group"),f(Rt,"href","https://developer.nvidia.com/tensorrt"),f(Rt,"rel","nofollow"),f(Ut,"href","https://pytorch.org/docs/stable/onnx.html"),f(Ut,"rel","nofollow"),f(Ve,"id","transformers.QDQBertConfig"),f(Ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ve,"href","#transformers.QDQBertConfig"),f(ve,"class","relative group"),f(ln,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertModel"),f(Kt,"href","https://huggingface.co/bert-base-uncased"),f(Kt,"rel","nofollow"),f(dn,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),f(cn,"href","/docs/transformers/v4.21.3/en/main_classes/configuration#transformers.PretrainedConfig"),f(K,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"id","transformers.QDQBertModel"),f(Je,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Je,"href","#transformers.QDQBertModel"),f(we,"class","relative group"),f(pn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(to,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(to,"rel","nofollow"),f(no,"href","https://arxiv.org/abs/1706.03762"),f(no,"rel","nofollow"),f(hn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertModel"),f(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"id","transformers.QDQBertLMHeadModel"),f(Ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ye,"href","#transformers.QDQBertLMHeadModel"),f(Te,"class","relative group"),f(mn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(po,"rel","nofollow"),f(un,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertLMHeadModel"),f(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(E,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"id","transformers.QDQBertForMaskedLM"),f(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(tt,"href","#transformers.QDQBertForMaskedLM"),f(qe,"class","relative group"),f(fn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(bo,"rel","nofollow"),f(gn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForMaskedLM"),f(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(C,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"id","transformers.QDQBertForSequenceClassification"),f(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rt,"href","#transformers.QDQBertForSequenceClassification"),f(ze,"class","relative group"),f(_n,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(To,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(To,"rel","nofollow"),f(bn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForSequenceClassification"),f(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(P,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"id","transformers.QDQBertForNextSentencePrediction"),f(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(pt,"href","#transformers.QDQBertForNextSentencePrediction"),f(Me,"class","relative group"),f(vn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xo,"rel","nofollow"),f(kn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForNextSentencePrediction"),f(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"id","transformers.QDQBertForMultipleChoice"),f(ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ut,"href","#transformers.QDQBertForMultipleChoice"),f(Fe,"class","relative group"),f(Qn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ao,"rel","nofollow"),f(wn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForMultipleChoice"),f(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(L,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(_t,"id","transformers.QDQBertForTokenClassification"),f(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(_t,"href","#transformers.QDQBertForTokenClassification"),f(Ee,"class","relative group"),f($n,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Wo,"rel","nofollow"),f(Tn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForTokenClassification"),f(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Qt,"id","transformers.QDQBertForQuestionAnswering"),f(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Qt,"href","#transformers.QDQBertForQuestionAnswering"),f(Pe,"class","relative group"),f(yn,"href","/docs/transformers/v4.21.3/en/main_classes/model#transformers.PreTrainedModel"),f(Jo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Jo,"rel","nofollow"),f(qn,"href","/docs/transformers/v4.21.3/en/model_doc/qdqbert#transformers.QDQBertForQuestionAnswering"),f(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),b(t,_,g),b(t,c,g),e(c,m),e(m,v),w(l,v,null),e(c,u),e(c,D),e(D,Da),b(t,dr,g),b(t,fe,g),e(fe,Ne),e(Ne,Nn),w(Ft,Nn,null),e(fe,za),e(fe,On),e(On,Ba),b(t,cr,g),b(t,Oe,g),e(Oe,Ma),e(Oe,jt),e(jt,xa),e(Oe,Fa),b(t,pr,g),b(t,tn,g),e(tn,ja),b(t,hr,g),b(t,on,g),e(on,Sn),e(Sn,Ea),b(t,mr,g),b(t,nn,g),e(nn,Ca),b(t,ur,g),b(t,G,g),e(G,In),e(In,Wn),e(Wn,Pa),e(G,Aa),e(G,Hn),e(Hn,Se),e(Se,La),e(Se,Et),e(Et,Na),e(Se,Oa),e(Se,Rn),e(Rn,Sa),e(G,Ia),e(G,Un),e(Un,Ct),e(Ct,Wa),e(Ct,Vn),e(Vn,Ha),e(Ct,Ra),e(G,Ua),e(G,Xn),e(Xn,Pt),e(Pt,Va),e(Pt,sn),e(sn,Xa),e(Pt,Ja),b(t,fr,g),b(t,Ie,g),e(Ie,Ka),e(Ie,At),e(At,Ga),e(Ie,Ya),b(t,gr,g),b(t,ge,g),e(ge,We),e(We,Jn),w(Lt,Jn,null),e(ge,Za),e(ge,Kn),e(Kn,ei),b(t,_r,g),b(t,j,g),e(j,ti),e(j,Gn),e(Gn,oi),e(j,ni),e(j,Nt),e(Nt,si),e(j,ri),e(j,Yn),e(Yn,ai),e(j,ii),e(j,Zn),e(Zn,li),e(j,di),e(j,Ot),e(Ot,ci),e(j,pi),b(t,br,g),b(t,He,g),e(He,hi),e(He,es),e(es,mi),e(He,ui),b(t,vr,g),b(t,rn,g),e(rn,fi),b(t,kr,g),w(St,t,g),b(t,Qr,g),b(t,_e,g),e(_e,Re),e(Re,ts),w(It,ts,null),e(_e,gi),e(_e,os),e(os,_i),b(t,wr,g),b(t,an,g),e(an,bi),b(t,$r,g),w(Wt,t,g),b(t,Tr,g),b(t,be,g),e(be,Ue),e(Ue,ns),w(Ht,ns,null),e(be,vi),e(be,ss),e(ss,ki),b(t,yr,g),b(t,se,g),e(se,Qi),e(se,Rt),e(Rt,wi),e(se,$i),e(se,Ut),e(Ut,Ti),e(se,yi),b(t,qr,g),w(Vt,t,g),b(t,Dr,g),b(t,ve,g),e(ve,Ve),e(Ve,rs),w(Xt,rs,null),e(ve,qi),e(ve,as),e(as,Di),b(t,zr,g),b(t,K,g),w(Jt,K,null),e(K,zi),e(K,ke),e(ke,Bi),e(ke,ln),e(ln,Mi),e(ke,xi),e(ke,Kt),e(Kt,Fi),e(ke,ji),e(K,Ei),e(K,Qe),e(Qe,Ci),e(Qe,dn),e(dn,Pi),e(Qe,Ai),e(Qe,cn),e(cn,Li),e(Qe,Ni),e(K,Oi),w(Xe,K,null),b(t,Br,g),b(t,we,g),e(we,Je),e(Je,is),w(Gt,is,null),e(we,Si),e(we,ls),e(ls,Ii),b(t,Mr,g),b(t,z,g),w(Yt,z,null),e(z,Wi),e(z,ds),e(ds,Hi),e(z,Ri),e(z,Zt),e(Zt,Ui),e(Zt,pn),e(pn,Vi),e(Zt,Xi),e(z,Ji),e(z,eo),e(eo,Ki),e(eo,to),e(to,Gi),e(eo,Yi),e(z,Zi),e(z,oo),e(oo,el),e(oo,no),e(no,tl),e(oo,ol),e(z,nl),e(z,x),e(x,sl),e(x,cs),e(cs,rl),e(x,al),e(x,ps),e(ps,il),e(x,ll),e(x,hs),e(hs,dl),e(x,cl),e(x,ms),e(ms,pl),e(x,hl),e(x,us),e(us,ml),e(x,ul),e(x,fs),e(fs,fl),e(x,gl),e(z,_l),e(z,Y),w(so,Y,null),e(Y,bl),e(Y,$e),e($e,vl),e($e,hn),e(hn,kl),e($e,Ql),e($e,gs),e(gs,wl),e($e,$l),e(Y,Tl),w(Ke,Y,null),e(Y,yl),w(Ge,Y,null),b(t,xr,g),b(t,Te,g),e(Te,Ye),e(Ye,_s),w(ro,_s,null),e(Te,ql),e(Te,bs),e(bs,Dl),b(t,Fr,g),b(t,E,g),w(ao,E,null),e(E,zl),e(E,io),e(io,Bl),e(io,vs),e(vs,Ml),e(io,xl),e(E,Fl),e(E,lo),e(lo,jl),e(lo,mn),e(mn,El),e(lo,Cl),e(E,Pl),e(E,co),e(co,Al),e(co,po),e(po,Ll),e(co,Nl),e(E,Ol),e(E,Z),w(ho,Z,null),e(Z,Sl),e(Z,ye),e(ye,Il),e(ye,un),e(un,Wl),e(ye,Hl),e(ye,ks),e(ks,Rl),e(ye,Ul),e(Z,Vl),w(Ze,Z,null),e(Z,Xl),w(et,Z,null),b(t,jr,g),b(t,qe,g),e(qe,tt),e(tt,Qs),w(mo,Qs,null),e(qe,Jl),e(qe,ws),e(ws,Kl),b(t,Er,g),b(t,C,g),w(uo,C,null),e(C,Gl),e(C,fo),e(fo,Yl),e(fo,$s),e($s,Zl),e(fo,ed),e(C,td),e(C,go),e(go,od),e(go,fn),e(fn,nd),e(go,sd),e(C,rd),e(C,_o),e(_o,ad),e(_o,bo),e(bo,id),e(_o,ld),e(C,dd),e(C,W),w(vo,W,null),e(W,cd),e(W,De),e(De,pd),e(De,gn),e(gn,hd),e(De,md),e(De,Ts),e(Ts,ud),e(De,fd),e(W,gd),w(ot,W,null),e(W,_d),w(nt,W,null),e(W,bd),w(st,W,null),b(t,Cr,g),b(t,ze,g),e(ze,rt),e(rt,ys),w(ko,ys,null),e(ze,vd),e(ze,qs),e(qs,kd),b(t,Pr,g),b(t,P,g),w(Qo,P,null),e(P,Qd),e(P,Ds),e(Ds,wd),e(P,$d),e(P,wo),e(wo,Td),e(wo,_n),e(_n,yd),e(wo,qd),e(P,Dd),e(P,$o),e($o,zd),e($o,To),e(To,Bd),e($o,Md),e(P,xd),e(P,B),w(yo,B,null),e(B,Fd),e(B,Be),e(Be,jd),e(Be,bn),e(bn,Ed),e(Be,Cd),e(Be,zs),e(zs,Pd),e(Be,Ad),e(B,Ld),w(at,B,null),e(B,Nd),w(it,B,null),e(B,Od),w(lt,B,null),e(B,Sd),w(dt,B,null),e(B,Id),w(ct,B,null),b(t,Ar,g),b(t,Me,g),e(Me,pt),e(pt,Bs),w(qo,Bs,null),e(Me,Wd),e(Me,Ms),e(Ms,Hd),b(t,Lr,g),b(t,A,g),w(Do,A,null),e(A,Rd),e(A,zo),e(zo,Ud),e(zo,xs),e(xs,Vd),e(zo,Xd),e(A,Jd),e(A,Bo),e(Bo,Kd),e(Bo,vn),e(vn,Gd),e(Bo,Yd),e(A,Zd),e(A,Mo),e(Mo,ec),e(Mo,xo),e(xo,tc),e(Mo,oc),e(A,nc),e(A,ee),w(Fo,ee,null),e(ee,sc),e(ee,xe),e(xe,rc),e(xe,kn),e(kn,ac),e(xe,ic),e(xe,Fs),e(Fs,lc),e(xe,dc),e(ee,cc),w(ht,ee,null),e(ee,pc),w(mt,ee,null),b(t,Nr,g),b(t,Fe,g),e(Fe,ut),e(ut,js),w(jo,js,null),e(Fe,hc),e(Fe,Es),e(Es,mc),b(t,Or,g),b(t,L,g),w(Eo,L,null),e(L,uc),e(L,Cs),e(Cs,fc),e(L,gc),e(L,Co),e(Co,_c),e(Co,Qn),e(Qn,bc),e(Co,vc),e(L,kc),e(L,Po),e(Po,Qc),e(Po,Ao),e(Ao,wc),e(Po,$c),e(L,Tc),e(L,te),w(Lo,te,null),e(te,yc),e(te,je),e(je,qc),e(je,wn),e(wn,Dc),e(je,zc),e(je,Ps),e(Ps,Bc),e(je,Mc),e(te,xc),w(ft,te,null),e(te,Fc),w(gt,te,null),b(t,Sr,g),b(t,Ee,g),e(Ee,_t),e(_t,As),w(No,As,null),e(Ee,jc),e(Ee,Ls),e(Ls,Ec),b(t,Ir,g),b(t,N,g),w(Oo,N,null),e(N,Cc),e(N,Ns),e(Ns,Pc),e(N,Ac),e(N,So),e(So,Lc),e(So,$n),e($n,Nc),e(So,Oc),e(N,Sc),e(N,Io),e(Io,Ic),e(Io,Wo),e(Wo,Wc),e(Io,Hc),e(N,Rc),e(N,H),w(Ho,H,null),e(H,Uc),e(H,Ce),e(Ce,Vc),e(Ce,Tn),e(Tn,Xc),e(Ce,Jc),e(Ce,Os),e(Os,Kc),e(Ce,Gc),e(H,Yc),w(bt,H,null),e(H,Zc),w(vt,H,null),e(H,ep),w(kt,H,null),b(t,Wr,g),b(t,Pe,g),e(Pe,Qt),e(Qt,Ss),w(Ro,Ss,null),e(Pe,tp),e(Pe,Is),e(Is,op),b(t,Hr,g),b(t,O,g),w(Uo,O,null),e(O,np),e(O,Ae),e(Ae,sp),e(Ae,Ws),e(Ws,rp),e(Ae,ap),e(Ae,Hs),e(Hs,ip),e(Ae,lp),e(O,dp),e(O,Vo),e(Vo,cp),e(Vo,yn),e(yn,pp),e(Vo,hp),e(O,mp),e(O,Xo),e(Xo,up),e(Xo,Jo),e(Jo,fp),e(Xo,gp),e(O,_p),e(O,R),w(Ko,R,null),e(R,bp),e(R,Le),e(Le,vp),e(Le,qn),e(qn,kp),e(Le,Qp),e(Le,Rs),e(Rs,wp),e(Le,$p),e(R,Tp),w(wt,R,null),e(R,yp),w($t,R,null),e(R,qp),w(Tt,R,null),Rr=!0},p(t,[g]){const Go={};g&2&&(Go.$$scope={dirty:g,ctx:t}),Xe.$set(Go);const Us={};g&2&&(Us.$$scope={dirty:g,ctx:t}),Ke.$set(Us);const Vs={};g&2&&(Vs.$$scope={dirty:g,ctx:t}),Ge.$set(Vs);const Xs={};g&2&&(Xs.$$scope={dirty:g,ctx:t}),Ze.$set(Xs);const Yo={};g&2&&(Yo.$$scope={dirty:g,ctx:t}),et.$set(Yo);const Js={};g&2&&(Js.$$scope={dirty:g,ctx:t}),ot.$set(Js);const Ks={};g&2&&(Ks.$$scope={dirty:g,ctx:t}),nt.$set(Ks);const Gs={};g&2&&(Gs.$$scope={dirty:g,ctx:t}),st.$set(Gs);const Zo={};g&2&&(Zo.$$scope={dirty:g,ctx:t}),at.$set(Zo);const Ys={};g&2&&(Ys.$$scope={dirty:g,ctx:t}),it.$set(Ys);const Zs={};g&2&&(Zs.$$scope={dirty:g,ctx:t}),lt.$set(Zs);const er={};g&2&&(er.$$scope={dirty:g,ctx:t}),dt.$set(er);const tr={};g&2&&(tr.$$scope={dirty:g,ctx:t}),ct.$set(tr);const or={};g&2&&(or.$$scope={dirty:g,ctx:t}),ht.$set(or);const ne={};g&2&&(ne.$$scope={dirty:g,ctx:t}),mt.$set(ne);const nr={};g&2&&(nr.$$scope={dirty:g,ctx:t}),ft.$set(nr);const sr={};g&2&&(sr.$$scope={dirty:g,ctx:t}),gt.$set(sr);const rr={};g&2&&(rr.$$scope={dirty:g,ctx:t}),bt.$set(rr);const yt={};g&2&&(yt.$$scope={dirty:g,ctx:t}),vt.$set(yt);const ar={};g&2&&(ar.$$scope={dirty:g,ctx:t}),kt.$set(ar);const ir={};g&2&&(ir.$$scope={dirty:g,ctx:t}),wt.$set(ir);const lr={};g&2&&(lr.$$scope={dirty:g,ctx:t}),$t.$set(lr);const en={};g&2&&(en.$$scope={dirty:g,ctx:t}),Tt.$set(en)},i(t){Rr||($(l.$$.fragment,t),$(Ft.$$.fragment,t),$(Lt.$$.fragment,t),$(St.$$.fragment,t),$(It.$$.fragment,t),$(Wt.$$.fragment,t),$(Ht.$$.fragment,t),$(Vt.$$.fragment,t),$(Xt.$$.fragment,t),$(Jt.$$.fragment,t),$(Xe.$$.fragment,t),$(Gt.$$.fragment,t),$(Yt.$$.fragment,t),$(so.$$.fragment,t),$(Ke.$$.fragment,t),$(Ge.$$.fragment,t),$(ro.$$.fragment,t),$(ao.$$.fragment,t),$(ho.$$.fragment,t),$(Ze.$$.fragment,t),$(et.$$.fragment,t),$(mo.$$.fragment,t),$(uo.$$.fragment,t),$(vo.$$.fragment,t),$(ot.$$.fragment,t),$(nt.$$.fragment,t),$(st.$$.fragment,t),$(ko.$$.fragment,t),$(Qo.$$.fragment,t),$(yo.$$.fragment,t),$(at.$$.fragment,t),$(it.$$.fragment,t),$(lt.$$.fragment,t),$(dt.$$.fragment,t),$(ct.$$.fragment,t),$(qo.$$.fragment,t),$(Do.$$.fragment,t),$(Fo.$$.fragment,t),$(ht.$$.fragment,t),$(mt.$$.fragment,t),$(jo.$$.fragment,t),$(Eo.$$.fragment,t),$(Lo.$$.fragment,t),$(ft.$$.fragment,t),$(gt.$$.fragment,t),$(No.$$.fragment,t),$(Oo.$$.fragment,t),$(Ho.$$.fragment,t),$(bt.$$.fragment,t),$(vt.$$.fragment,t),$(kt.$$.fragment,t),$(Ro.$$.fragment,t),$(Uo.$$.fragment,t),$(Ko.$$.fragment,t),$(wt.$$.fragment,t),$($t.$$.fragment,t),$(Tt.$$.fragment,t),Rr=!0)},o(t){T(l.$$.fragment,t),T(Ft.$$.fragment,t),T(Lt.$$.fragment,t),T(St.$$.fragment,t),T(It.$$.fragment,t),T(Wt.$$.fragment,t),T(Ht.$$.fragment,t),T(Vt.$$.fragment,t),T(Xt.$$.fragment,t),T(Jt.$$.fragment,t),T(Xe.$$.fragment,t),T(Gt.$$.fragment,t),T(Yt.$$.fragment,t),T(so.$$.fragment,t),T(Ke.$$.fragment,t),T(Ge.$$.fragment,t),T(ro.$$.fragment,t),T(ao.$$.fragment,t),T(ho.$$.fragment,t),T(Ze.$$.fragment,t),T(et.$$.fragment,t),T(mo.$$.fragment,t),T(uo.$$.fragment,t),T(vo.$$.fragment,t),T(ot.$$.fragment,t),T(nt.$$.fragment,t),T(st.$$.fragment,t),T(ko.$$.fragment,t),T(Qo.$$.fragment,t),T(yo.$$.fragment,t),T(at.$$.fragment,t),T(it.$$.fragment,t),T(lt.$$.fragment,t),T(dt.$$.fragment,t),T(ct.$$.fragment,t),T(qo.$$.fragment,t),T(Do.$$.fragment,t),T(Fo.$$.fragment,t),T(ht.$$.fragment,t),T(mt.$$.fragment,t),T(jo.$$.fragment,t),T(Eo.$$.fragment,t),T(Lo.$$.fragment,t),T(ft.$$.fragment,t),T(gt.$$.fragment,t),T(No.$$.fragment,t),T(Oo.$$.fragment,t),T(Ho.$$.fragment,t),T(bt.$$.fragment,t),T(vt.$$.fragment,t),T(kt.$$.fragment,t),T(Ro.$$.fragment,t),T(Uo.$$.fragment,t),T(Ko.$$.fragment,t),T(wt.$$.fragment,t),T($t.$$.fragment,t),T(Tt.$$.fragment,t),Rr=!1},d(t){o(d),t&&o(_),t&&o(c),y(l),t&&o(dr),t&&o(fe),y(Ft),t&&o(cr),t&&o(Oe),t&&o(pr),t&&o(tn),t&&o(hr),t&&o(on),t&&o(mr),t&&o(nn),t&&o(ur),t&&o(G),t&&o(fr),t&&o(Ie),t&&o(gr),t&&o(ge),y(Lt),t&&o(_r),t&&o(j),t&&o(br),t&&o(He),t&&o(vr),t&&o(rn),t&&o(kr),y(St,t),t&&o(Qr),t&&o(_e),y(It),t&&o(wr),t&&o(an),t&&o($r),y(Wt,t),t&&o(Tr),t&&o(be),y(Ht),t&&o(yr),t&&o(se),t&&o(qr),y(Vt,t),t&&o(Dr),t&&o(ve),y(Xt),t&&o(zr),t&&o(K),y(Jt),y(Xe),t&&o(Br),t&&o(we),y(Gt),t&&o(Mr),t&&o(z),y(Yt),y(so),y(Ke),y(Ge),t&&o(xr),t&&o(Te),y(ro),t&&o(Fr),t&&o(E),y(ao),y(ho),y(Ze),y(et),t&&o(jr),t&&o(qe),y(mo),t&&o(Er),t&&o(C),y(uo),y(vo),y(ot),y(nt),y(st),t&&o(Cr),t&&o(ze),y(ko),t&&o(Pr),t&&o(P),y(Qo),y(yo),y(at),y(it),y(lt),y(dt),y(ct),t&&o(Ar),t&&o(Me),y(qo),t&&o(Lr),t&&o(A),y(Do),y(Fo),y(ht),y(mt),t&&o(Nr),t&&o(Fe),y(jo),t&&o(Or),t&&o(L),y(Eo),y(Lo),y(ft),y(gt),t&&o(Sr),t&&o(Ee),y(No),t&&o(Ir),t&&o(N),y(Oo),y(Ho),y(bt),y(vt),y(kt),t&&o(Wr),t&&o(Pe),y(Ro),t&&o(Hr),t&&o(O),y(Uo),y(Ko),y(wt),y($t),y(Tt)}}}const Km={local:"qdqbert",sections:[{local:"overview",sections:[{local:"set-default-quantizers",title:"Set default quantizers"},{local:"calibration",title:"Calibration"},{local:"export-to-onnx",title:"Export to ONNX"}],title:"Overview"},{local:"transformers.QDQBertConfig",title:"QDQBertConfig"},{local:"transformers.QDQBertModel",title:"QDQBertModel"},{local:"transformers.QDQBertLMHeadModel",title:"QDQBertLMHeadModel"},{local:"transformers.QDQBertForMaskedLM",title:"QDQBertForMaskedLM"},{local:"transformers.QDQBertForSequenceClassification",title:"QDQBertForSequenceClassification"},{local:"transformers.QDQBertForNextSentencePrediction",title:"QDQBertForNextSentencePrediction"},{local:"transformers.QDQBertForMultipleChoice",title:"QDQBertForMultipleChoice"},{local:"transformers.QDQBertForTokenClassification",title:"QDQBertForTokenClassification"},{local:"transformers.QDQBertForQuestionAnswering",title:"QDQBertForQuestionAnswering"}],title:"QDQBERT"};function Gm(q){return ym(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class su extends Qm{constructor(d){super();wm(this,d,Gm,Jm,$m,{})}}export{su as default,Km as metadata};
