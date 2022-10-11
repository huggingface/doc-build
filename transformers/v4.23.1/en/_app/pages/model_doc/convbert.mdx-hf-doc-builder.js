import{S as Xg,i as Zg,s as e_,e as r,k as h,w as T,t as n,M as t_,c as a,d as t,m as f,a as i,x as w,h as s,b as v,G as e,g as _,y,q as $,o as C,B as F,v as o_,L as De}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as ne}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as it}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ne}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function n_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertModel, ConvBertConfig

# Initializing a ConvBERT convbert-base-uncased style configuration
configuration = ConvBertConfig()
# Initializing a model from the convbert-base-uncased style configuration
model = ConvBertModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertModel, ConvBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ConvBERT convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConvBertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function s_(z){let d,g,c,u,b;return u=new Le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function r_(z){let d,g,c,u,b;return u=new Le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("sequence pair mask has the following format:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"sequence pair mask has the following format:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function a_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function i_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function l_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function d_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function c_(z){let d,g;return d=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function p_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function h_(z){let d,g,c,u,b;return u=new Le({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function f_(z){let d,g;return d=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function u_(z){let d,g,c,u,b;return u=new Le({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function m_(z){let d,g;return d=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ConvBertForSequenceClassification.from_pretrained(
    "YituTech/conv-bert-base", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function g_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function __(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function v_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function k_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function b_(z){let d,g;return d=new Le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function T_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function w_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function y_(z){let d,g;return d=new Le({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function $_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function C_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function F_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function B_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function E_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function z_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function M_(z){let d,g;return d=new Le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function q_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function j_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function x_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function P_(z){let d,g;return d=new Le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function O_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function A_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function N_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function D_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function L_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function I_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function S_(z){let d,g;return d=new Le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function R_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),b=n(" accept two formats as input:"),l=h(),p=r("ul"),q=r("li"),be=n("having all inputs as keyword arguments (like PyTorch models), or"),fe=h(),D=r("li"),se=n("having all inputs as a list, tuple or dict in the first positional argument."),X=h(),B=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),ae=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),me=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Z=h(),j=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Be=n("input_ids"),ie=n(" only and nothing else: "),G=r("code"),Ee=n("model(input_ids)"),le=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),re=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),ze=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),de=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),Me=n(`Note that when creating models and layers with
`),A=r("a"),qe=n("subclassing"),je=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(m){d=a(m,"P",{});var E=i(d);g=s(E,"TensorFlow models and layers in "),c=a(E,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),b=s(E," accept two formats as input:"),E.forEach(t),l=f(m),p=a(m,"UL",{});var te=i(p);q=a(te,"LI",{});var xe=i(q);be=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),fe=f(te),D=a(te,"LI",{});var Ye=i(D);se=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),X=f(m),B=a(m,"P",{});var M=i(B);Te=s(M,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(M,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(M,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(M,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),ae=s(M,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(M,"CODE",{});var Ie=i(J);$e=s(Ie,"fit()"),Ie.forEach(t),me=s(M," and "),H=a(M,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(M,`, such as when creating your own layers or models with
the Keras `),Q=a(M,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(M,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),M.forEach(t),Z=f(m),j=a(m,"UL",{});var R=i(j);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Be=s(We,"input_ids"),We.forEach(t),ie=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Ee=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),le=f(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);re=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);ze=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=f(R),S=a(R,"LI",{});var Oe=i(S);ke=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);de=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=f(m),x=a(m,"P",{});var oe=i(x);Me=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);qe=s(Ke,"subclassing"),Ke.forEach(t),je=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){v(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),v(A,"rel","nofollow")},m(m,E){_(m,d,E),e(d,g),e(d,c),e(c,u),e(d,b),_(m,l,E),_(m,p,E),e(p,q),e(q,be),e(p,fe),e(p,D),e(D,se),_(m,X,E),_(m,B,E),e(B,Te),e(B,V),e(V,we),e(B,ue),e(B,W),e(W,ye),e(B,ae),e(B,J),e(J,$e),e(B,me),e(B,H),e(H,Ce),e(B,ge),e(B,Q),e(Q,ce),e(B,Fe),_(m,Z,E),_(m,j,E),e(j,P),e(P,_e),e(P,L),e(L,Be),e(P,ie),e(P,G),e(G,Ee),e(j,le),e(j,O),e(O,ve),e(O,I),e(I,re),e(O,pe),e(O,Y),e(Y,ze),e(j,he),e(j,S),e(S,ke),e(S,N),e(N,de),_(m,ee,E),_(m,x,E),e(x,Me),e(x,A),e(A,qe),e(x,je)},d(m){m&&t(d),m&&t(l),m&&t(p),m&&t(X),m&&t(B),m&&t(Z),m&&t(j),m&&t(ee),m&&t(x)}}}function W_(z){let d,g,c,u,b;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var q=i(c);u=s(q,"Module"),q.forEach(t),b=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){_(l,d,p),e(d,g),e(d,c),e(c,u),e(d,b)},d(l){l&&t(d)}}}function K_(z){let d,g,c,u,b;return u=new Le({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=f(l),w(u.$$.fragment,l)},m(l,p){_(l,d,p),e(d,g),_(l,c,p),y(u,l,p),b=!0},p:De,i(l){b||($(u.$$.fragment,l),b=!0)},o(l){C(u.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function U_(z){let d,g;return d=new Le({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:De,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Y_(z){let d,g,c,u,b,l,p,q,be,fe,D,se,X,B,Te,V,we,ue,W,ye,ae,J,$e,me,H,Ce,ge,Q,ce,Fe,Z,j,P,_e,L,Be,ie,G,Ee,le,O,ve,I,re,pe,Y,ze,he,S,ke,N,de,ee,x,Me,A,qe,je,m,E,Ue,te,xe,Ye,M,He,Qe,Ie,Ve,Je,R,K,We,Pe,U,Se,Ae,Oe,Re,oe,Ke,Ge,In,ld,fa,dd,cd,Sn,pd,br,hd,fd,ud,At,Rn,md,ua,gd,_d,Wn,Tr,vd,ma,kd,bd,wr,Td,ga,wd,yd,Fo,Kn,$d,Un,Cd,_a,Fd,Bd,Ed,Tt,Yn,zd,va,Md,qd,Bo,jd,Yt,xd,ka,Pd,Od,ba,Ad,Nd,Dd,yr,Hn,Zi,Ht,Eo,Ta,Qn,Ld,wa,Id,el,lt,Vn,Sd,Jn,Rd,ya,Wd,Kd,Ud,Gn,Yd,$r,Hd,Qd,Vd,Nt,Xn,Jd,$a,Gd,Xd,Zn,Cr,Zd,Ca,ec,tc,Fr,oc,Fa,nc,sc,wt,es,rc,Ba,ac,ic,zo,lc,Qt,dc,Ea,cc,pc,za,hc,fc,tl,Vt,Mo,Ma,ts,uc,qa,mc,ol,xt,os,gc,ns,_c,ss,vc,kc,bc,yt,rs,Tc,Jt,wc,Br,yc,$c,ja,Cc,Fc,Bc,qo,Ec,jo,nl,Gt,xo,xa,as,zc,Pa,Mc,sl,Pt,is,qc,Xt,jc,Oa,xc,Pc,ls,Oc,Ac,Nc,dt,ds,Dc,Zt,Lc,Er,Ic,Sc,Aa,Rc,Wc,Kc,Po,Uc,Oo,Yc,Ao,rl,eo,No,Na,cs,Hc,Da,Qc,al,_t,ps,Vc,La,Jc,Gc,hs,Xc,fs,Zc,ep,tp,Xe,us,op,to,np,zr,sp,rp,Ia,ap,ip,lp,Do,dp,Lo,cp,Io,pp,So,hp,Ro,il,oo,Wo,Sa,ms,fp,Ra,up,ll,vt,gs,mp,Wa,gp,_p,_s,vp,vs,kp,bp,Tp,$t,ks,wp,no,yp,Mr,$p,Cp,Ka,Fp,Bp,Ep,Ko,zp,Uo,dl,so,Yo,Ua,bs,Mp,Ya,qp,cl,kt,Ts,jp,Ha,xp,Pp,ws,Op,ys,Ap,Np,Dp,ct,$s,Lp,ro,Ip,qr,Sp,Rp,Qa,Wp,Kp,Up,Ho,Yp,Qo,Hp,Vo,pl,ao,Jo,Va,Cs,Qp,Ja,Vp,hl,bt,Fs,Jp,io,Gp,Ga,Xp,Zp,Xa,eh,th,oh,Bs,nh,Es,sh,rh,ah,pt,zs,ih,lo,lh,jr,dh,ch,Za,ph,hh,fh,Go,uh,Xo,mh,Zo,fl,co,en,ei,Ms,gh,ti,_h,ul,et,qs,vh,oi,kh,bh,js,Th,xr,wh,yh,$h,xs,Ch,Ps,Fh,Bh,Eh,tn,zh,Ct,Os,Mh,po,qh,Pr,jh,xh,ni,Ph,Oh,Ah,on,Nh,nn,ml,ho,sn,si,As,Dh,ri,Lh,gl,tt,Ns,Ih,Ds,Sh,ai,Rh,Wh,Kh,Ls,Uh,Or,Yh,Hh,Qh,Is,Vh,Ss,Jh,Gh,Xh,rn,Zh,ht,Rs,ef,fo,tf,Ar,of,nf,ii,sf,rf,af,an,lf,ln,df,dn,_l,uo,cn,li,Ws,cf,di,pf,vl,ot,Ks,hf,ci,ff,uf,Us,mf,Nr,gf,_f,vf,Ys,kf,Hs,bf,Tf,wf,pn,yf,ft,Qs,$f,mo,Cf,Dr,Ff,Bf,pi,Ef,zf,Mf,hn,qf,fn,jf,un,kl,go,mn,hi,Vs,xf,fi,Pf,bl,nt,Js,Of,ui,Af,Nf,Gs,Df,Lr,Lf,If,Sf,Xs,Rf,Zs,Wf,Kf,Uf,gn,Yf,Ft,er,Hf,_o,Qf,Ir,Vf,Jf,mi,Gf,Xf,Zf,_n,eu,vn,Tl,vo,kn,gi,tr,tu,_i,ou,wl,st,or,nu,vi,su,ru,nr,au,Sr,iu,lu,du,sr,cu,rr,pu,hu,fu,bn,uu,ut,ar,mu,ko,gu,Rr,_u,vu,ki,ku,bu,Tu,Tn,wu,wn,yu,yn,yl,bo,$n,bi,ir,$u,Ti,Cu,$l,rt,lr,Fu,To,Bu,wi,Eu,zu,yi,Mu,qu,ju,dr,xu,Wr,Pu,Ou,Au,cr,Nu,pr,Du,Lu,Iu,Cn,Su,mt,hr,Ru,wo,Wu,Kr,Ku,Uu,$i,Yu,Hu,Qu,Fn,Vu,Bn,Ju,En,Cl;return l=new it({}),B=new it({}),Y=new it({}),de=new ne({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ConvBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ConvBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ConvBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ConvBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ConvBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ConvBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ConvBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ConvBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ConvBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ConvBertConfig.head_ratio",description:`<strong>head_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Ratio gamma to reduce the number of attention heads.`,name:"head_ratio"},{anchor:"transformers.ConvBertConfig.num_groups",description:`<strong>num_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups for grouped linear layers for ConvBert model`,name:"num_groups"},{anchor:"transformers.ConvBertConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The size of the convolutional kernel.`,name:"conv_kernel_size"},{anchor:"transformers.ConvBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/configuration_convbert.py#L37"}}),K=new Ne({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[n_]},$$scope:{ctx:z}}}),Ae=new it({}),In=new ne({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ConvBertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ConvBertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.ConvBertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.ConvBertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ConvBertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.ConvBertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ConvBertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ConvBertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ConvBertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.ConvBertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original ConvBERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert.py#L76"}}),Rn=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert.py#L207",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Kn=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert.py#L232",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Yn=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert.py#L260",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Bo=new Ne({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[s_]},$$scope:{ctx:z}}}),Hn=new ne({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert.py#L289"}}),Qn=new it({}),Vn=new ne({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.ConvBertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.ConvBertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.ConvBertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.ConvBertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.ConvBertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.ConvBertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.ConvBertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.ConvBertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.ConvBertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original ConvBERT).`,name:"strip_accents"},{anchor:"transformers.ConvBertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert_fast.py#L55"}}),Xn=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert_fast.py#L143",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),es=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/tokenization_convbert_fast.py#L167",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),zo=new Ne({props:{anchor:"transformers.ConvBertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[r_]},$$scope:{ctx:z}}}),ts=new it({}),os=new ne({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L765"}}),rs=new ne({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L792",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Ze({props:{$$slots:{default:[a_]},$$scope:{ctx:z}}}),jo=new Ne({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[i_]},$$scope:{ctx:z}}}),as=new it({}),is=new ne({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L879"}}),ds=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L896",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Po=new Ze({props:{$$slots:{default:[l_]},$$scope:{ctx:z}}}),Oo=new Ne({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[d_]},$$scope:{ctx:z}}}),Ao=new Ne({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[c_]},$$scope:{ctx:z}}}),cs=new it({}),ps=new ne({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L989"}}),us=new ne({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1000",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Do=new Ze({props:{$$slots:{default:[p_]},$$scope:{ctx:z}}}),Lo=new Ne({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[h_]},$$scope:{ctx:z}}}),Io=new Ne({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[f_]},$$scope:{ctx:z}}}),So=new Ne({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[u_]},$$scope:{ctx:z}}}),Ro=new Ne({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[m_]},$$scope:{ctx:z}}}),ms=new it({}),gs=new ne({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1085"}}),ks=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1096",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ko=new Ze({props:{$$slots:{default:[g_]},$$scope:{ctx:z}}}),Uo=new Ne({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[__]},$$scope:{ctx:z}}}),bs=new it({}),Ts=new ne({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1179"}}),$s=new ne({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1194",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ho=new Ze({props:{$$slots:{default:[v_]},$$scope:{ctx:z}}}),Qo=new Ne({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[k_]},$$scope:{ctx:z}}}),Vo=new Ne({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[b_]},$$scope:{ctx:z}}}),Cs=new it({}),Fs=new ne({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1261"}}),zs=new ne({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_convbert.py#L1272",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Ze({props:{$$slots:{default:[T_]},$$scope:{ctx:z}}}),Xo=new Ne({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[w_]},$$scope:{ctx:z}}}),Zo=new Ne({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[y_]},$$scope:{ctx:z}}}),Ms=new it({}),qs=new ne({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L741"}}),tn=new Ze({props:{$$slots:{default:[$_]},$$scope:{ctx:z}}}),Os=new ne({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L747",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),on=new Ze({props:{$$slots:{default:[C_]},$$scope:{ctx:z}}}),nn=new Ne({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[F_]},$$scope:{ctx:z}}}),As=new it({}),Ns=new ne({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L843"}}),rn=new Ze({props:{$$slots:{default:[B_]},$$scope:{ctx:z}}}),Rs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L864",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),an=new Ze({props:{$$slots:{default:[E_]},$$scope:{ctx:z}}}),ln=new Ne({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[z_]},$$scope:{ctx:z}}}),dn=new Ne({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[M_]},$$scope:{ctx:z}}}),Ws=new it({}),Ks=new ne({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L965"}}),pn=new Ze({props:{$$slots:{default:[q_]},$$scope:{ctx:z}}}),Qs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L972",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),hn=new Ze({props:{$$slots:{default:[j_]},$$scope:{ctx:z}}}),fn=new Ne({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[x_]},$$scope:{ctx:z}}}),un=new Ne({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[P_]},$$scope:{ctx:z}}}),Vs=new it({}),Js=new ne({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1041"}}),gn=new Ze({props:{$$slots:{default:[O_]},$$scope:{ctx:z}}}),er=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_n=new Ze({props:{$$slots:{default:[A_]},$$scope:{ctx:z}}}),vn=new Ne({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[N_]},$$scope:{ctx:z}}}),tr=new it({}),or=new ne({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1165"}}),bn=new Ze({props:{$$slots:{default:[D_]},$$scope:{ctx:z}}}),ar=new ne({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Ze({props:{$$slots:{default:[L_]},$$scope:{ctx:z}}}),wn=new Ne({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[I_]},$$scope:{ctx:z}}}),yn=new Ne({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[S_]},$$scope:{ctx:z}}}),ir=new it({}),lr=new ne({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1247"}}),Cn=new Ze({props:{$$slots:{default:[R_]},$$scope:{ctx:z}}}),hr=new ne({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.1/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.1/src/transformers/models/convbert/modeling_tf_convbert.py#L1257",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Ze({props:{$$slots:{default:[W_]},$$scope:{ctx:z}}}),Bn=new Ne({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[K_]},$$scope:{ctx:z}}}),En=new Ne({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[U_]},$$scope:{ctx:z}}}),{c(){d=r("meta"),g=h(),c=r("h1"),u=r("a"),b=r("span"),T(l.$$.fragment),p=h(),q=r("span"),be=n("ConvBERT"),fe=h(),D=r("h2"),se=r("a"),X=r("span"),T(B.$$.fragment),Te=h(),V=r("span"),we=n("Overview"),ue=h(),W=r("p"),ye=n("The ConvBERT model was proposed in "),ae=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),$e=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),me=h(),H=r("p"),Ce=n("The abstract from the paper is the following:"),ge=h(),Q=r("p"),ce=r("em"),Fe=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),Z=h(),j=r("p"),P=n("ConvBERT training tips are similar to those of BERT."),_e=h(),L=r("p"),Be=n("This model was contributed by "),ie=r("a"),G=n("abhishek"),Ee=n(`. The original implementation can be found
here: `),le=r("a"),O=n("https://github.com/yitu-opensource/ConvBert"),ve=h(),I=r("h2"),re=r("a"),pe=r("span"),T(Y.$$.fragment),ze=h(),he=r("span"),S=n("ConvBertConfig"),ke=h(),N=r("div"),T(de.$$.fragment),ee=h(),x=r("p"),Me=n("This is the configuration class to store the configuration of a "),A=r("a"),qe=n("ConvBertModel"),je=n(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),m=r("a"),E=n("YituTech/conv-bert-base"),Ue=n(" architecture."),te=h(),xe=r("p"),Ye=n("Configuration objects inherit from "),M=r("a"),He=n("PretrainedConfig"),Qe=n(` and can be used to control the model outputs. Read the
documentation from `),Ie=r("a"),Ve=n("PretrainedConfig"),Je=n(" for more information."),R=h(),T(K.$$.fragment),We=h(),Pe=r("h2"),U=r("a"),Se=r("span"),T(Ae.$$.fragment),Oe=h(),Re=r("span"),oe=n("ConvBertTokenizer"),Ke=h(),Ge=r("div"),T(In.$$.fragment),ld=h(),fa=r("p"),dd=n("Construct a ConvBERT tokenizer. Based on WordPiece."),cd=h(),Sn=r("p"),pd=n("This tokenizer inherits from "),br=r("a"),hd=n("PreTrainedTokenizer"),fd=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ud=h(),At=r("div"),T(Rn.$$.fragment),md=h(),ua=r("p"),gd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ConvBERT sequence has the following format:`),_d=h(),Wn=r("ul"),Tr=r("li"),vd=n("single sequence: "),ma=r("code"),kd=n("[CLS] X [SEP]"),bd=h(),wr=r("li"),Td=n("pair of sequences: "),ga=r("code"),wd=n("[CLS] A [SEP] B [SEP]"),yd=h(),Fo=r("div"),T(Kn.$$.fragment),$d=h(),Un=r("p"),Cd=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_a=r("code"),Fd=n("prepare_for_model"),Bd=n(" method."),Ed=h(),Tt=r("div"),T(Yn.$$.fragment),zd=h(),va=r("p"),Md=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ConvBERT"),qd=h(),T(Bo.$$.fragment),jd=h(),Yt=r("p"),xd=n("If "),ka=r("code"),Pd=n("token_ids_1"),Od=n(" is "),ba=r("code"),Ad=n("None"),Nd=n(", this method only returns the first portion of the mask (0s)."),Dd=h(),yr=r("div"),T(Hn.$$.fragment),Zi=h(),Ht=r("h2"),Eo=r("a"),Ta=r("span"),T(Qn.$$.fragment),Ld=h(),wa=r("span"),Id=n("ConvBertTokenizerFast"),el=h(),lt=r("div"),T(Vn.$$.fragment),Sd=h(),Jn=r("p"),Rd=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),ya=r("em"),Wd=n("tokenizers"),Kd=n(" library). Based on WordPiece."),Ud=h(),Gn=r("p"),Yd=n("This tokenizer inherits from "),$r=r("a"),Hd=n("PreTrainedTokenizerFast"),Qd=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=h(),Nt=r("div"),T(Xn.$$.fragment),Jd=h(),$a=r("p"),Gd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ConvBERT sequence has the following format:`),Xd=h(),Zn=r("ul"),Cr=r("li"),Zd=n("single sequence: "),Ca=r("code"),ec=n("[CLS] X [SEP]"),tc=h(),Fr=r("li"),oc=n("pair of sequences: "),Fa=r("code"),nc=n("[CLS] A [SEP] B [SEP]"),sc=h(),wt=r("div"),T(es.$$.fragment),rc=h(),Ba=r("p"),ac=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ConvBERT"),ic=h(),T(zo.$$.fragment),lc=h(),Qt=r("p"),dc=n("If "),Ea=r("code"),cc=n("token_ids_1"),pc=n(" is "),za=r("code"),hc=n("None"),fc=n(", this method only returns the first portion of the mask (0s)."),tl=h(),Vt=r("h2"),Mo=r("a"),Ma=r("span"),T(ts.$$.fragment),uc=h(),qa=r("span"),mc=n("ConvBertModel"),ol=h(),xt=r("div"),T(os.$$.fragment),gc=h(),ns=r("p"),_c=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ss=r("a"),vc=n("torch.nn.Module"),kc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),bc=h(),yt=r("div"),T(rs.$$.fragment),Tc=h(),Jt=r("p"),wc=n("The "),Br=r("a"),yc=n("ConvBertModel"),$c=n(" forward method, overrides the "),ja=r("code"),Cc=n("__call__"),Fc=n(" special method."),Bc=h(),T(qo.$$.fragment),Ec=h(),T(jo.$$.fragment),nl=h(),Gt=r("h2"),xo=r("a"),xa=r("span"),T(as.$$.fragment),zc=h(),Pa=r("span"),Mc=n("ConvBertForMaskedLM"),sl=h(),Pt=r("div"),T(is.$$.fragment),qc=h(),Xt=r("p"),jc=n("ConvBERT Model with a "),Oa=r("code"),xc=n("language modeling"),Pc=n(` head on top.
This model is a PyTorch `),ls=r("a"),Oc=n("torch.nn.Module"),Ac=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Nc=h(),dt=r("div"),T(ds.$$.fragment),Dc=h(),Zt=r("p"),Lc=n("The "),Er=r("a"),Ic=n("ConvBertForMaskedLM"),Sc=n(" forward method, overrides the "),Aa=r("code"),Rc=n("__call__"),Wc=n(" special method."),Kc=h(),T(Po.$$.fragment),Uc=h(),T(Oo.$$.fragment),Yc=h(),T(Ao.$$.fragment),rl=h(),eo=r("h2"),No=r("a"),Na=r("span"),T(cs.$$.fragment),Hc=h(),Da=r("span"),Qc=n("ConvBertForSequenceClassification"),al=h(),_t=r("div"),T(ps.$$.fragment),Vc=h(),La=r("p"),Jc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Gc=h(),hs=r("p"),Xc=n("This model is a PyTorch "),fs=r("a"),Zc=n("torch.nn.Module"),ep=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tp=h(),Xe=r("div"),T(us.$$.fragment),op=h(),to=r("p"),np=n("The "),zr=r("a"),sp=n("ConvBertForSequenceClassification"),rp=n(" forward method, overrides the "),Ia=r("code"),ap=n("__call__"),ip=n(" special method."),lp=h(),T(Do.$$.fragment),dp=h(),T(Lo.$$.fragment),cp=h(),T(Io.$$.fragment),pp=h(),T(So.$$.fragment),hp=h(),T(Ro.$$.fragment),il=h(),oo=r("h2"),Wo=r("a"),Sa=r("span"),T(ms.$$.fragment),fp=h(),Ra=r("span"),up=n("ConvBertForMultipleChoice"),ll=h(),vt=r("div"),T(gs.$$.fragment),mp=h(),Wa=r("p"),gp=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),_p=h(),_s=r("p"),vp=n("This model is a PyTorch "),vs=r("a"),kp=n("torch.nn.Module"),bp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tp=h(),$t=r("div"),T(ks.$$.fragment),wp=h(),no=r("p"),yp=n("The "),Mr=r("a"),$p=n("ConvBertForMultipleChoice"),Cp=n(" forward method, overrides the "),Ka=r("code"),Fp=n("__call__"),Bp=n(" special method."),Ep=h(),T(Ko.$$.fragment),zp=h(),T(Uo.$$.fragment),dl=h(),so=r("h2"),Yo=r("a"),Ua=r("span"),T(bs.$$.fragment),Mp=h(),Ya=r("span"),qp=n("ConvBertForTokenClassification"),cl=h(),kt=r("div"),T(Ts.$$.fragment),jp=h(),Ha=r("p"),xp=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pp=h(),ws=r("p"),Op=n("This model is a PyTorch "),ys=r("a"),Ap=n("torch.nn.Module"),Np=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dp=h(),ct=r("div"),T($s.$$.fragment),Lp=h(),ro=r("p"),Ip=n("The "),qr=r("a"),Sp=n("ConvBertForTokenClassification"),Rp=n(" forward method, overrides the "),Qa=r("code"),Wp=n("__call__"),Kp=n(" special method."),Up=h(),T(Ho.$$.fragment),Yp=h(),T(Qo.$$.fragment),Hp=h(),T(Vo.$$.fragment),pl=h(),ao=r("h2"),Jo=r("a"),Va=r("span"),T(Cs.$$.fragment),Qp=h(),Ja=r("span"),Vp=n("ConvBertForQuestionAnswering"),hl=h(),bt=r("div"),T(Fs.$$.fragment),Jp=h(),io=r("p"),Gp=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ga=r("code"),Xp=n("span start logits"),Zp=n(" and "),Xa=r("code"),eh=n("span end logits"),th=n(")."),oh=h(),Bs=r("p"),nh=n("This model is a PyTorch "),Es=r("a"),sh=n("torch.nn.Module"),rh=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ah=h(),pt=r("div"),T(zs.$$.fragment),ih=h(),lo=r("p"),lh=n("The "),jr=r("a"),dh=n("ConvBertForQuestionAnswering"),ch=n(" forward method, overrides the "),Za=r("code"),ph=n("__call__"),hh=n(" special method."),fh=h(),T(Go.$$.fragment),uh=h(),T(Xo.$$.fragment),mh=h(),T(Zo.$$.fragment),fl=h(),co=r("h2"),en=r("a"),ei=r("span"),T(Ms.$$.fragment),gh=h(),ti=r("span"),_h=n("TFConvBertModel"),ul=h(),et=r("div"),T(qs.$$.fragment),vh=h(),oi=r("p"),kh=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),bh=h(),js=r("p"),Th=n("This model inherits from "),xr=r("a"),wh=n("TFPreTrainedModel"),yh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$h=h(),xs=r("p"),Ch=n("This model is also a "),Ps=r("a"),Fh=n("tf.keras.Model"),Bh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eh=h(),T(tn.$$.fragment),zh=h(),Ct=r("div"),T(Os.$$.fragment),Mh=h(),po=r("p"),qh=n("The "),Pr=r("a"),jh=n("TFConvBertModel"),xh=n(" forward method, overrides the "),ni=r("code"),Ph=n("__call__"),Oh=n(" special method."),Ah=h(),T(on.$$.fragment),Nh=h(),T(nn.$$.fragment),ml=h(),ho=r("h2"),sn=r("a"),si=r("span"),T(As.$$.fragment),Dh=h(),ri=r("span"),Lh=n("TFConvBertForMaskedLM"),gl=h(),tt=r("div"),T(Ns.$$.fragment),Ih=h(),Ds=r("p"),Sh=n("ConvBERT Model with a "),ai=r("code"),Rh=n("language modeling"),Wh=n(" head on top."),Kh=h(),Ls=r("p"),Uh=n("This model inherits from "),Or=r("a"),Yh=n("TFPreTrainedModel"),Hh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qh=h(),Is=r("p"),Vh=n("This model is also a "),Ss=r("a"),Jh=n("tf.keras.Model"),Gh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xh=h(),T(rn.$$.fragment),Zh=h(),ht=r("div"),T(Rs.$$.fragment),ef=h(),fo=r("p"),tf=n("The "),Ar=r("a"),of=n("TFConvBertForMaskedLM"),nf=n(" forward method, overrides the "),ii=r("code"),sf=n("__call__"),rf=n(" special method."),af=h(),T(an.$$.fragment),lf=h(),T(ln.$$.fragment),df=h(),T(dn.$$.fragment),_l=h(),uo=r("h2"),cn=r("a"),li=r("span"),T(Ws.$$.fragment),cf=h(),di=r("span"),pf=n("TFConvBertForSequenceClassification"),vl=h(),ot=r("div"),T(Ks.$$.fragment),hf=h(),ci=r("p"),ff=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),uf=h(),Us=r("p"),mf=n("This model inherits from "),Nr=r("a"),gf=n("TFPreTrainedModel"),_f=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vf=h(),Ys=r("p"),kf=n("This model is also a "),Hs=r("a"),bf=n("tf.keras.Model"),Tf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wf=h(),T(pn.$$.fragment),yf=h(),ft=r("div"),T(Qs.$$.fragment),$f=h(),mo=r("p"),Cf=n("The "),Dr=r("a"),Ff=n("TFConvBertForSequenceClassification"),Bf=n(" forward method, overrides the "),pi=r("code"),Ef=n("__call__"),zf=n(" special method."),Mf=h(),T(hn.$$.fragment),qf=h(),T(fn.$$.fragment),jf=h(),T(un.$$.fragment),kl=h(),go=r("h2"),mn=r("a"),hi=r("span"),T(Vs.$$.fragment),xf=h(),fi=r("span"),Pf=n("TFConvBertForMultipleChoice"),bl=h(),nt=r("div"),T(Js.$$.fragment),Of=h(),ui=r("p"),Af=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Nf=h(),Gs=r("p"),Df=n("This model inherits from "),Lr=r("a"),Lf=n("TFPreTrainedModel"),If=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sf=h(),Xs=r("p"),Rf=n("This model is also a "),Zs=r("a"),Wf=n("tf.keras.Model"),Kf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uf=h(),T(gn.$$.fragment),Yf=h(),Ft=r("div"),T(er.$$.fragment),Hf=h(),_o=r("p"),Qf=n("The "),Ir=r("a"),Vf=n("TFConvBertForMultipleChoice"),Jf=n(" forward method, overrides the "),mi=r("code"),Gf=n("__call__"),Xf=n(" special method."),Zf=h(),T(_n.$$.fragment),eu=h(),T(vn.$$.fragment),Tl=h(),vo=r("h2"),kn=r("a"),gi=r("span"),T(tr.$$.fragment),tu=h(),_i=r("span"),ou=n("TFConvBertForTokenClassification"),wl=h(),st=r("div"),T(or.$$.fragment),nu=h(),vi=r("p"),su=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ru=h(),nr=r("p"),au=n("This model inherits from "),Sr=r("a"),iu=n("TFPreTrainedModel"),lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du=h(),sr=r("p"),cu=n("This model is also a "),rr=r("a"),pu=n("tf.keras.Model"),hu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fu=h(),T(bn.$$.fragment),uu=h(),ut=r("div"),T(ar.$$.fragment),mu=h(),ko=r("p"),gu=n("The "),Rr=r("a"),_u=n("TFConvBertForTokenClassification"),vu=n(" forward method, overrides the "),ki=r("code"),ku=n("__call__"),bu=n(" special method."),Tu=h(),T(Tn.$$.fragment),wu=h(),T(wn.$$.fragment),yu=h(),T(yn.$$.fragment),yl=h(),bo=r("h2"),$n=r("a"),bi=r("span"),T(ir.$$.fragment),$u=h(),Ti=r("span"),Cu=n("TFConvBertForQuestionAnswering"),$l=h(),rt=r("div"),T(lr.$$.fragment),Fu=h(),To=r("p"),Bu=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=r("code"),Eu=n("span start logits"),zu=n(" and "),yi=r("code"),Mu=n("span end logits"),qu=n(")."),ju=h(),dr=r("p"),xu=n("This model inherits from "),Wr=r("a"),Pu=n("TFPreTrainedModel"),Ou=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=h(),cr=r("p"),Nu=n("This model is also a "),pr=r("a"),Du=n("tf.keras.Model"),Lu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu=h(),T(Cn.$$.fragment),Su=h(),mt=r("div"),T(hr.$$.fragment),Ru=h(),wo=r("p"),Wu=n("The "),Kr=r("a"),Ku=n("TFConvBertForQuestionAnswering"),Uu=n(" forward method, overrides the "),$i=r("code"),Yu=n("__call__"),Hu=n(" special method."),Qu=h(),T(Fn.$$.fragment),Vu=h(),T(Bn.$$.fragment),Ju=h(),T(En.$$.fragment),this.h()},l(o){const k=t_('[data-svelte="svelte-1phssyn"]',document.head);d=a(k,"META",{name:!0,content:!0}),k.forEach(t),g=f(o),c=a(o,"H1",{class:!0});var fr=i(c);u=a(fr,"A",{id:!0,class:!0,href:!0});var Ci=i(u);b=a(Ci,"SPAN",{});var Fi=i(b);w(l.$$.fragment,Fi),Fi.forEach(t),Ci.forEach(t),p=f(fr),q=a(fr,"SPAN",{});var Bi=i(q);be=s(Bi,"ConvBERT"),Bi.forEach(t),fr.forEach(t),fe=f(o),D=a(o,"H2",{class:!0});var ur=i(D);se=a(ur,"A",{id:!0,class:!0,href:!0});var Ei=i(se);X=a(Ei,"SPAN",{});var zi=i(X);w(B.$$.fragment,zi),zi.forEach(t),Ei.forEach(t),Te=f(ur),V=a(ur,"SPAN",{});var Mi=i(V);we=s(Mi,"Overview"),Mi.forEach(t),ur.forEach(t),ue=f(o),W=a(o,"P",{});var mr=i(W);ye=s(mr,"The ConvBERT model was proposed in "),ae=a(mr,"A",{href:!0,rel:!0});var qi=i(ae);J=s(qi,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),qi.forEach(t),$e=s(mr,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),mr.forEach(t),me=f(o),H=a(o,"P",{});var ji=i(H);Ce=s(ji,"The abstract from the paper is the following:"),ji.forEach(t),ge=f(o),Q=a(o,"P",{});var xi=i(Q);ce=a(xi,"EM",{});var Pi=i(ce);Fe=s(Pi,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),Pi.forEach(t),xi.forEach(t),Z=f(o),j=a(o,"P",{});var Oi=i(j);P=s(Oi,"ConvBERT training tips are similar to those of BERT."),Oi.forEach(t),_e=f(o),L=a(o,"P",{});var zn=i(L);Be=s(zn,"This model was contributed by "),ie=a(zn,"A",{href:!0,rel:!0});var Ai=i(ie);G=s(Ai,"abhishek"),Ai.forEach(t),Ee=s(zn,`. The original implementation can be found
here: `),le=a(zn,"A",{href:!0,rel:!0});var Ni=i(le);O=s(Ni,"https://github.com/yitu-opensource/ConvBert"),Ni.forEach(t),zn.forEach(t),ve=f(o),I=a(o,"H2",{class:!0});var gr=i(I);re=a(gr,"A",{id:!0,class:!0,href:!0});var Di=i(re);pe=a(Di,"SPAN",{});var Li=i(pe);w(Y.$$.fragment,Li),Li.forEach(t),Di.forEach(t),ze=f(gr),he=a(gr,"SPAN",{});var Ii=i(he);S=s(Ii,"ConvBertConfig"),Ii.forEach(t),gr.forEach(t),ke=f(o),N=a(o,"DIV",{class:!0});var Ot=i(N);w(de.$$.fragment,Ot),ee=f(Ot),x=a(Ot,"P",{});var yo=i(x);Me=s(yo,"This is the configuration class to store the configuration of a "),A=a(yo,"A",{href:!0});var Si=i(A);qe=s(Si,"ConvBertModel"),Si.forEach(t),je=s(yo,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),m=a(yo,"A",{href:!0,rel:!0});var Ri=i(m);E=s(Ri,"YituTech/conv-bert-base"),Ri.forEach(t),Ue=s(yo," architecture."),yo.forEach(t),te=f(Ot),xe=a(Ot,"P",{});var $o=i(xe);Ye=s($o,"Configuration objects inherit from "),M=a($o,"A",{href:!0});var Wi=i(M);He=s(Wi,"PretrainedConfig"),Wi.forEach(t),Qe=s($o,` and can be used to control the model outputs. Read the
documentation from `),Ie=a($o,"A",{href:!0});var Ki=i(Ie);Ve=s(Ki,"PretrainedConfig"),Ki.forEach(t),Je=s($o," for more information."),$o.forEach(t),R=f(Ot),w(K.$$.fragment,Ot),Ot.forEach(t),We=f(o),Pe=a(o,"H2",{class:!0});var _r=i(Pe);U=a(_r,"A",{id:!0,class:!0,href:!0});var Ui=i(U);Se=a(Ui,"SPAN",{});var Yi=i(Se);w(Ae.$$.fragment,Yi),Yi.forEach(t),Ui.forEach(t),Oe=f(_r),Re=a(_r,"SPAN",{});var Hi=i(Re);oe=s(Hi,"ConvBertTokenizer"),Hi.forEach(t),_r.forEach(t),Ke=f(o),Ge=a(o,"DIV",{class:!0});var at=i(Ge);w(In.$$.fragment,at),ld=f(at),fa=a(at,"P",{});var Qi=i(fa);dd=s(Qi,"Construct a ConvBERT tokenizer. Based on WordPiece."),Qi.forEach(t),cd=f(at),Sn=a(at,"P",{});var vr=i(Sn);pd=s(vr,"This tokenizer inherits from "),br=a(vr,"A",{href:!0});var Vi=i(br);hd=s(Vi,"PreTrainedTokenizer"),Vi.forEach(t),fd=s(vr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),vr.forEach(t),ud=f(at),At=a(at,"DIV",{class:!0});var Co=i(At);w(Rn.$$.fragment,Co),md=f(Co),ua=a(Co,"P",{});var Ji=i(ua);gd=s(Ji,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ConvBERT sequence has the following format:`),Ji.forEach(t),_d=f(Co),Wn=a(Co,"UL",{});var kr=i(Wn);Tr=a(kr,"LI",{});var Ur=i(Tr);vd=s(Ur,"single sequence: "),ma=a(Ur,"CODE",{});var Gi=i(ma);kd=s(Gi,"[CLS] X [SEP]"),Gi.forEach(t),Ur.forEach(t),bd=f(kr),wr=a(kr,"LI",{});var Yr=i(wr);Td=s(Yr,"pair of sequences: "),ga=a(Yr,"CODE",{});var Xi=i(ga);wd=s(Xi,"[CLS] A [SEP] B [SEP]"),Xi.forEach(t),Yr.forEach(t),kr.forEach(t),Co.forEach(t),yd=f(at),Fo=a(at,"DIV",{class:!0});var Fl=i(Fo);w(Kn.$$.fragment,Fl),$d=f(Fl),Un=a(Fl,"P",{});var Bl=i(Un);Cd=s(Bl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),_a=a(Bl,"CODE",{});var Zu=i(_a);Fd=s(Zu,"prepare_for_model"),Zu.forEach(t),Bd=s(Bl," method."),Bl.forEach(t),Fl.forEach(t),Ed=f(at),Tt=a(at,"DIV",{class:!0});var Mn=i(Tt);w(Yn.$$.fragment,Mn),zd=f(Mn),va=a(Mn,"P",{});var em=i(va);Md=s(em,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ConvBERT"),em.forEach(t),qd=f(Mn),w(Bo.$$.fragment,Mn),jd=f(Mn),Yt=a(Mn,"P",{});var Hr=i(Yt);xd=s(Hr,"If "),ka=a(Hr,"CODE",{});var tm=i(ka);Pd=s(tm,"token_ids_1"),tm.forEach(t),Od=s(Hr," is "),ba=a(Hr,"CODE",{});var om=i(ba);Ad=s(om,"None"),om.forEach(t),Nd=s(Hr,", this method only returns the first portion of the mask (0s)."),Hr.forEach(t),Mn.forEach(t),Dd=f(at),yr=a(at,"DIV",{class:!0});var nm=i(yr);w(Hn.$$.fragment,nm),nm.forEach(t),at.forEach(t),Zi=f(o),Ht=a(o,"H2",{class:!0});var El=i(Ht);Eo=a(El,"A",{id:!0,class:!0,href:!0});var sm=i(Eo);Ta=a(sm,"SPAN",{});var rm=i(Ta);w(Qn.$$.fragment,rm),rm.forEach(t),sm.forEach(t),Ld=f(El),wa=a(El,"SPAN",{});var am=i(wa);Id=s(am,"ConvBertTokenizerFast"),am.forEach(t),El.forEach(t),el=f(o),lt=a(o,"DIV",{class:!0});var Dt=i(lt);w(Vn.$$.fragment,Dt),Sd=f(Dt),Jn=a(Dt,"P",{});var zl=i(Jn);Rd=s(zl,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),ya=a(zl,"EM",{});var im=i(ya);Wd=s(im,"tokenizers"),im.forEach(t),Kd=s(zl," library). Based on WordPiece."),zl.forEach(t),Ud=f(Dt),Gn=a(Dt,"P",{});var Ml=i(Gn);Yd=s(Ml,"This tokenizer inherits from "),$r=a(Ml,"A",{href:!0});var lm=i($r);Hd=s(lm,"PreTrainedTokenizerFast"),lm.forEach(t),Qd=s(Ml,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Ml.forEach(t),Vd=f(Dt),Nt=a(Dt,"DIV",{class:!0});var Qr=i(Nt);w(Xn.$$.fragment,Qr),Jd=f(Qr),$a=a(Qr,"P",{});var dm=i($a);Gd=s(dm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A ConvBERT sequence has the following format:`),dm.forEach(t),Xd=f(Qr),Zn=a(Qr,"UL",{});var ql=i(Zn);Cr=a(ql,"LI",{});var Gu=i(Cr);Zd=s(Gu,"single sequence: "),Ca=a(Gu,"CODE",{});var cm=i(Ca);ec=s(cm,"[CLS] X [SEP]"),cm.forEach(t),Gu.forEach(t),tc=f(ql),Fr=a(ql,"LI",{});var Xu=i(Fr);oc=s(Xu,"pair of sequences: "),Fa=a(Xu,"CODE",{});var pm=i(Fa);nc=s(pm,"[CLS] A [SEP] B [SEP]"),pm.forEach(t),Xu.forEach(t),ql.forEach(t),Qr.forEach(t),sc=f(Dt),wt=a(Dt,"DIV",{class:!0});var qn=i(wt);w(es.$$.fragment,qn),rc=f(qn),Ba=a(qn,"P",{});var hm=i(Ba);ac=s(hm,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A ConvBERT"),hm.forEach(t),ic=f(qn),w(zo.$$.fragment,qn),lc=f(qn),Qt=a(qn,"P",{});var Vr=i(Qt);dc=s(Vr,"If "),Ea=a(Vr,"CODE",{});var fm=i(Ea);cc=s(fm,"token_ids_1"),fm.forEach(t),pc=s(Vr," is "),za=a(Vr,"CODE",{});var um=i(za);hc=s(um,"None"),um.forEach(t),fc=s(Vr,", this method only returns the first portion of the mask (0s)."),Vr.forEach(t),qn.forEach(t),Dt.forEach(t),tl=f(o),Vt=a(o,"H2",{class:!0});var jl=i(Vt);Mo=a(jl,"A",{id:!0,class:!0,href:!0});var mm=i(Mo);Ma=a(mm,"SPAN",{});var gm=i(Ma);w(ts.$$.fragment,gm),gm.forEach(t),mm.forEach(t),uc=f(jl),qa=a(jl,"SPAN",{});var _m=i(qa);mc=s(_m,"ConvBertModel"),_m.forEach(t),jl.forEach(t),ol=f(o),xt=a(o,"DIV",{class:!0});var Jr=i(xt);w(os.$$.fragment,Jr),gc=f(Jr),ns=a(Jr,"P",{});var xl=i(ns);_c=s(xl,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),ss=a(xl,"A",{href:!0,rel:!0});var vm=i(ss);vc=s(vm,"torch.nn.Module"),vm.forEach(t),kc=s(xl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xl.forEach(t),bc=f(Jr),yt=a(Jr,"DIV",{class:!0});var jn=i(yt);w(rs.$$.fragment,jn),Tc=f(jn),Jt=a(jn,"P",{});var Gr=i(Jt);wc=s(Gr,"The "),Br=a(Gr,"A",{href:!0});var km=i(Br);yc=s(km,"ConvBertModel"),km.forEach(t),$c=s(Gr," forward method, overrides the "),ja=a(Gr,"CODE",{});var bm=i(ja);Cc=s(bm,"__call__"),bm.forEach(t),Fc=s(Gr," special method."),Gr.forEach(t),Bc=f(jn),w(qo.$$.fragment,jn),Ec=f(jn),w(jo.$$.fragment,jn),jn.forEach(t),Jr.forEach(t),nl=f(o),Gt=a(o,"H2",{class:!0});var Pl=i(Gt);xo=a(Pl,"A",{id:!0,class:!0,href:!0});var Tm=i(xo);xa=a(Tm,"SPAN",{});var wm=i(xa);w(as.$$.fragment,wm),wm.forEach(t),Tm.forEach(t),zc=f(Pl),Pa=a(Pl,"SPAN",{});var ym=i(Pa);Mc=s(ym,"ConvBertForMaskedLM"),ym.forEach(t),Pl.forEach(t),sl=f(o),Pt=a(o,"DIV",{class:!0});var Xr=i(Pt);w(is.$$.fragment,Xr),qc=f(Xr),Xt=a(Xr,"P",{});var Zr=i(Xt);jc=s(Zr,"ConvBERT Model with a "),Oa=a(Zr,"CODE",{});var $m=i(Oa);xc=s($m,"language modeling"),$m.forEach(t),Pc=s(Zr,` head on top.
This model is a PyTorch `),ls=a(Zr,"A",{href:!0,rel:!0});var Cm=i(ls);Oc=s(Cm,"torch.nn.Module"),Cm.forEach(t),Ac=s(Zr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zr.forEach(t),Nc=f(Xr),dt=a(Xr,"DIV",{class:!0});var Lt=i(dt);w(ds.$$.fragment,Lt),Dc=f(Lt),Zt=a(Lt,"P",{});var ea=i(Zt);Lc=s(ea,"The "),Er=a(ea,"A",{href:!0});var Fm=i(Er);Ic=s(Fm,"ConvBertForMaskedLM"),Fm.forEach(t),Sc=s(ea," forward method, overrides the "),Aa=a(ea,"CODE",{});var Bm=i(Aa);Rc=s(Bm,"__call__"),Bm.forEach(t),Wc=s(ea," special method."),ea.forEach(t),Kc=f(Lt),w(Po.$$.fragment,Lt),Uc=f(Lt),w(Oo.$$.fragment,Lt),Yc=f(Lt),w(Ao.$$.fragment,Lt),Lt.forEach(t),Xr.forEach(t),rl=f(o),eo=a(o,"H2",{class:!0});var Ol=i(eo);No=a(Ol,"A",{id:!0,class:!0,href:!0});var Em=i(No);Na=a(Em,"SPAN",{});var zm=i(Na);w(cs.$$.fragment,zm),zm.forEach(t),Em.forEach(t),Hc=f(Ol),Da=a(Ol,"SPAN",{});var Mm=i(Da);Qc=s(Mm,"ConvBertForSequenceClassification"),Mm.forEach(t),Ol.forEach(t),al=f(o),_t=a(o,"DIV",{class:!0});var xn=i(_t);w(ps.$$.fragment,xn),Vc=f(xn),La=a(xn,"P",{});var qm=i(La);Jc=s(qm,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),qm.forEach(t),Gc=f(xn),hs=a(xn,"P",{});var Al=i(hs);Xc=s(Al,"This model is a PyTorch "),fs=a(Al,"A",{href:!0,rel:!0});var jm=i(fs);Zc=s(jm,"torch.nn.Module"),jm.forEach(t),ep=s(Al,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Al.forEach(t),tp=f(xn),Xe=a(xn,"DIV",{class:!0});var gt=i(Xe);w(us.$$.fragment,gt),op=f(gt),to=a(gt,"P",{});var ta=i(to);np=s(ta,"The "),zr=a(ta,"A",{href:!0});var xm=i(zr);sp=s(xm,"ConvBertForSequenceClassification"),xm.forEach(t),rp=s(ta," forward method, overrides the "),Ia=a(ta,"CODE",{});var Pm=i(Ia);ap=s(Pm,"__call__"),Pm.forEach(t),ip=s(ta," special method."),ta.forEach(t),lp=f(gt),w(Do.$$.fragment,gt),dp=f(gt),w(Lo.$$.fragment,gt),cp=f(gt),w(Io.$$.fragment,gt),pp=f(gt),w(So.$$.fragment,gt),hp=f(gt),w(Ro.$$.fragment,gt),gt.forEach(t),xn.forEach(t),il=f(o),oo=a(o,"H2",{class:!0});var Nl=i(oo);Wo=a(Nl,"A",{id:!0,class:!0,href:!0});var Om=i(Wo);Sa=a(Om,"SPAN",{});var Am=i(Sa);w(ms.$$.fragment,Am),Am.forEach(t),Om.forEach(t),fp=f(Nl),Ra=a(Nl,"SPAN",{});var Nm=i(Ra);up=s(Nm,"ConvBertForMultipleChoice"),Nm.forEach(t),Nl.forEach(t),ll=f(o),vt=a(o,"DIV",{class:!0});var Pn=i(vt);w(gs.$$.fragment,Pn),mp=f(Pn),Wa=a(Pn,"P",{});var Dm=i(Wa);gp=s(Dm,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Dm.forEach(t),_p=f(Pn),_s=a(Pn,"P",{});var Dl=i(_s);vp=s(Dl,"This model is a PyTorch "),vs=a(Dl,"A",{href:!0,rel:!0});var Lm=i(vs);kp=s(Lm,"torch.nn.Module"),Lm.forEach(t),bp=s(Dl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),Tp=f(Pn),$t=a(Pn,"DIV",{class:!0});var On=i($t);w(ks.$$.fragment,On),wp=f(On),no=a(On,"P",{});var oa=i(no);yp=s(oa,"The "),Mr=a(oa,"A",{href:!0});var Im=i(Mr);$p=s(Im,"ConvBertForMultipleChoice"),Im.forEach(t),Cp=s(oa," forward method, overrides the "),Ka=a(oa,"CODE",{});var Sm=i(Ka);Fp=s(Sm,"__call__"),Sm.forEach(t),Bp=s(oa," special method."),oa.forEach(t),Ep=f(On),w(Ko.$$.fragment,On),zp=f(On),w(Uo.$$.fragment,On),On.forEach(t),Pn.forEach(t),dl=f(o),so=a(o,"H2",{class:!0});var Ll=i(so);Yo=a(Ll,"A",{id:!0,class:!0,href:!0});var Rm=i(Yo);Ua=a(Rm,"SPAN",{});var Wm=i(Ua);w(bs.$$.fragment,Wm),Wm.forEach(t),Rm.forEach(t),Mp=f(Ll),Ya=a(Ll,"SPAN",{});var Km=i(Ya);qp=s(Km,"ConvBertForTokenClassification"),Km.forEach(t),Ll.forEach(t),cl=f(o),kt=a(o,"DIV",{class:!0});var An=i(kt);w(Ts.$$.fragment,An),jp=f(An),Ha=a(An,"P",{});var Um=i(Ha);xp=s(Um,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Um.forEach(t),Pp=f(An),ws=a(An,"P",{});var Il=i(ws);Op=s(Il,"This model is a PyTorch "),ys=a(Il,"A",{href:!0,rel:!0});var Ym=i(ys);Ap=s(Ym,"torch.nn.Module"),Ym.forEach(t),Np=s(Il,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Il.forEach(t),Dp=f(An),ct=a(An,"DIV",{class:!0});var It=i(ct);w($s.$$.fragment,It),Lp=f(It),ro=a(It,"P",{});var na=i(ro);Ip=s(na,"The "),qr=a(na,"A",{href:!0});var Hm=i(qr);Sp=s(Hm,"ConvBertForTokenClassification"),Hm.forEach(t),Rp=s(na," forward method, overrides the "),Qa=a(na,"CODE",{});var Qm=i(Qa);Wp=s(Qm,"__call__"),Qm.forEach(t),Kp=s(na," special method."),na.forEach(t),Up=f(It),w(Ho.$$.fragment,It),Yp=f(It),w(Qo.$$.fragment,It),Hp=f(It),w(Vo.$$.fragment,It),It.forEach(t),An.forEach(t),pl=f(o),ao=a(o,"H2",{class:!0});var Sl=i(ao);Jo=a(Sl,"A",{id:!0,class:!0,href:!0});var Vm=i(Jo);Va=a(Vm,"SPAN",{});var Jm=i(Va);w(Cs.$$.fragment,Jm),Jm.forEach(t),Vm.forEach(t),Qp=f(Sl),Ja=a(Sl,"SPAN",{});var Gm=i(Ja);Vp=s(Gm,"ConvBertForQuestionAnswering"),Gm.forEach(t),Sl.forEach(t),hl=f(o),bt=a(o,"DIV",{class:!0});var Nn=i(bt);w(Fs.$$.fragment,Nn),Jp=f(Nn),io=a(Nn,"P",{});var sa=i(io);Gp=s(sa,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ga=a(sa,"CODE",{});var Xm=i(Ga);Xp=s(Xm,"span start logits"),Xm.forEach(t),Zp=s(sa," and "),Xa=a(sa,"CODE",{});var Zm=i(Xa);eh=s(Zm,"span end logits"),Zm.forEach(t),th=s(sa,")."),sa.forEach(t),oh=f(Nn),Bs=a(Nn,"P",{});var Rl=i(Bs);nh=s(Rl,"This model is a PyTorch "),Es=a(Rl,"A",{href:!0,rel:!0});var eg=i(Es);sh=s(eg,"torch.nn.Module"),eg.forEach(t),rh=s(Rl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),ah=f(Nn),pt=a(Nn,"DIV",{class:!0});var St=i(pt);w(zs.$$.fragment,St),ih=f(St),lo=a(St,"P",{});var ra=i(lo);lh=s(ra,"The "),jr=a(ra,"A",{href:!0});var tg=i(jr);dh=s(tg,"ConvBertForQuestionAnswering"),tg.forEach(t),ch=s(ra," forward method, overrides the "),Za=a(ra,"CODE",{});var og=i(Za);ph=s(og,"__call__"),og.forEach(t),hh=s(ra," special method."),ra.forEach(t),fh=f(St),w(Go.$$.fragment,St),uh=f(St),w(Xo.$$.fragment,St),mh=f(St),w(Zo.$$.fragment,St),St.forEach(t),Nn.forEach(t),fl=f(o),co=a(o,"H2",{class:!0});var Wl=i(co);en=a(Wl,"A",{id:!0,class:!0,href:!0});var ng=i(en);ei=a(ng,"SPAN",{});var sg=i(ei);w(Ms.$$.fragment,sg),sg.forEach(t),ng.forEach(t),gh=f(Wl),ti=a(Wl,"SPAN",{});var rg=i(ti);_h=s(rg,"TFConvBertModel"),rg.forEach(t),Wl.forEach(t),ul=f(o),et=a(o,"DIV",{class:!0});var Bt=i(et);w(qs.$$.fragment,Bt),vh=f(Bt),oi=a(Bt,"P",{});var ag=i(oi);kh=s(ag,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),ag.forEach(t),bh=f(Bt),js=a(Bt,"P",{});var Kl=i(js);Th=s(Kl,"This model inherits from "),xr=a(Kl,"A",{href:!0});var ig=i(xr);wh=s(ig,"TFPreTrainedModel"),ig.forEach(t),yh=s(Kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kl.forEach(t),$h=f(Bt),xs=a(Bt,"P",{});var Ul=i(xs);Ch=s(Ul,"This model is also a "),Ps=a(Ul,"A",{href:!0,rel:!0});var lg=i(Ps);Fh=s(lg,"tf.keras.Model"),lg.forEach(t),Bh=s(Ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ul.forEach(t),Eh=f(Bt),w(tn.$$.fragment,Bt),zh=f(Bt),Ct=a(Bt,"DIV",{class:!0});var Dn=i(Ct);w(Os.$$.fragment,Dn),Mh=f(Dn),po=a(Dn,"P",{});var aa=i(po);qh=s(aa,"The "),Pr=a(aa,"A",{href:!0});var dg=i(Pr);jh=s(dg,"TFConvBertModel"),dg.forEach(t),xh=s(aa," forward method, overrides the "),ni=a(aa,"CODE",{});var cg=i(ni);Ph=s(cg,"__call__"),cg.forEach(t),Oh=s(aa," special method."),aa.forEach(t),Ah=f(Dn),w(on.$$.fragment,Dn),Nh=f(Dn),w(nn.$$.fragment,Dn),Dn.forEach(t),Bt.forEach(t),ml=f(o),ho=a(o,"H2",{class:!0});var Yl=i(ho);sn=a(Yl,"A",{id:!0,class:!0,href:!0});var pg=i(sn);si=a(pg,"SPAN",{});var hg=i(si);w(As.$$.fragment,hg),hg.forEach(t),pg.forEach(t),Dh=f(Yl),ri=a(Yl,"SPAN",{});var fg=i(ri);Lh=s(fg,"TFConvBertForMaskedLM"),fg.forEach(t),Yl.forEach(t),gl=f(o),tt=a(o,"DIV",{class:!0});var Et=i(tt);w(Ns.$$.fragment,Et),Ih=f(Et),Ds=a(Et,"P",{});var Hl=i(Ds);Sh=s(Hl,"ConvBERT Model with a "),ai=a(Hl,"CODE",{});var ug=i(ai);Rh=s(ug,"language modeling"),ug.forEach(t),Wh=s(Hl," head on top."),Hl.forEach(t),Kh=f(Et),Ls=a(Et,"P",{});var Ql=i(Ls);Uh=s(Ql,"This model inherits from "),Or=a(Ql,"A",{href:!0});var mg=i(Or);Yh=s(mg,"TFPreTrainedModel"),mg.forEach(t),Hh=s(Ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ql.forEach(t),Qh=f(Et),Is=a(Et,"P",{});var Vl=i(Is);Vh=s(Vl,"This model is also a "),Ss=a(Vl,"A",{href:!0,rel:!0});var gg=i(Ss);Jh=s(gg,"tf.keras.Model"),gg.forEach(t),Gh=s(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),Xh=f(Et),w(rn.$$.fragment,Et),Zh=f(Et),ht=a(Et,"DIV",{class:!0});var Rt=i(ht);w(Rs.$$.fragment,Rt),ef=f(Rt),fo=a(Rt,"P",{});var ia=i(fo);tf=s(ia,"The "),Ar=a(ia,"A",{href:!0});var _g=i(Ar);of=s(_g,"TFConvBertForMaskedLM"),_g.forEach(t),nf=s(ia," forward method, overrides the "),ii=a(ia,"CODE",{});var vg=i(ii);sf=s(vg,"__call__"),vg.forEach(t),rf=s(ia," special method."),ia.forEach(t),af=f(Rt),w(an.$$.fragment,Rt),lf=f(Rt),w(ln.$$.fragment,Rt),df=f(Rt),w(dn.$$.fragment,Rt),Rt.forEach(t),Et.forEach(t),_l=f(o),uo=a(o,"H2",{class:!0});var Jl=i(uo);cn=a(Jl,"A",{id:!0,class:!0,href:!0});var kg=i(cn);li=a(kg,"SPAN",{});var bg=i(li);w(Ws.$$.fragment,bg),bg.forEach(t),kg.forEach(t),cf=f(Jl),di=a(Jl,"SPAN",{});var Tg=i(di);pf=s(Tg,"TFConvBertForSequenceClassification"),Tg.forEach(t),Jl.forEach(t),vl=f(o),ot=a(o,"DIV",{class:!0});var zt=i(ot);w(Ks.$$.fragment,zt),hf=f(zt),ci=a(zt,"P",{});var wg=i(ci);ff=s(wg,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),wg.forEach(t),uf=f(zt),Us=a(zt,"P",{});var Gl=i(Us);mf=s(Gl,"This model inherits from "),Nr=a(Gl,"A",{href:!0});var yg=i(Nr);gf=s(yg,"TFPreTrainedModel"),yg.forEach(t),_f=s(Gl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gl.forEach(t),vf=f(zt),Ys=a(zt,"P",{});var Xl=i(Ys);kf=s(Xl,"This model is also a "),Hs=a(Xl,"A",{href:!0,rel:!0});var $g=i(Hs);bf=s($g,"tf.keras.Model"),$g.forEach(t),Tf=s(Xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xl.forEach(t),wf=f(zt),w(pn.$$.fragment,zt),yf=f(zt),ft=a(zt,"DIV",{class:!0});var Wt=i(ft);w(Qs.$$.fragment,Wt),$f=f(Wt),mo=a(Wt,"P",{});var la=i(mo);Cf=s(la,"The "),Dr=a(la,"A",{href:!0});var Cg=i(Dr);Ff=s(Cg,"TFConvBertForSequenceClassification"),Cg.forEach(t),Bf=s(la," forward method, overrides the "),pi=a(la,"CODE",{});var Fg=i(pi);Ef=s(Fg,"__call__"),Fg.forEach(t),zf=s(la," special method."),la.forEach(t),Mf=f(Wt),w(hn.$$.fragment,Wt),qf=f(Wt),w(fn.$$.fragment,Wt),jf=f(Wt),w(un.$$.fragment,Wt),Wt.forEach(t),zt.forEach(t),kl=f(o),go=a(o,"H2",{class:!0});var Zl=i(go);mn=a(Zl,"A",{id:!0,class:!0,href:!0});var Bg=i(mn);hi=a(Bg,"SPAN",{});var Eg=i(hi);w(Vs.$$.fragment,Eg),Eg.forEach(t),Bg.forEach(t),xf=f(Zl),fi=a(Zl,"SPAN",{});var zg=i(fi);Pf=s(zg,"TFConvBertForMultipleChoice"),zg.forEach(t),Zl.forEach(t),bl=f(o),nt=a(o,"DIV",{class:!0});var Mt=i(nt);w(Js.$$.fragment,Mt),Of=f(Mt),ui=a(Mt,"P",{});var Mg=i(ui);Af=s(Mg,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mg.forEach(t),Nf=f(Mt),Gs=a(Mt,"P",{});var ed=i(Gs);Df=s(ed,"This model inherits from "),Lr=a(ed,"A",{href:!0});var qg=i(Lr);Lf=s(qg,"TFPreTrainedModel"),qg.forEach(t),If=s(ed,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ed.forEach(t),Sf=f(Mt),Xs=a(Mt,"P",{});var td=i(Xs);Rf=s(td,"This model is also a "),Zs=a(td,"A",{href:!0,rel:!0});var jg=i(Zs);Wf=s(jg,"tf.keras.Model"),jg.forEach(t),Kf=s(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(t),Uf=f(Mt),w(gn.$$.fragment,Mt),Yf=f(Mt),Ft=a(Mt,"DIV",{class:!0});var Ln=i(Ft);w(er.$$.fragment,Ln),Hf=f(Ln),_o=a(Ln,"P",{});var da=i(_o);Qf=s(da,"The "),Ir=a(da,"A",{href:!0});var xg=i(Ir);Vf=s(xg,"TFConvBertForMultipleChoice"),xg.forEach(t),Jf=s(da," forward method, overrides the "),mi=a(da,"CODE",{});var Pg=i(mi);Gf=s(Pg,"__call__"),Pg.forEach(t),Xf=s(da," special method."),da.forEach(t),Zf=f(Ln),w(_n.$$.fragment,Ln),eu=f(Ln),w(vn.$$.fragment,Ln),Ln.forEach(t),Mt.forEach(t),Tl=f(o),vo=a(o,"H2",{class:!0});var od=i(vo);kn=a(od,"A",{id:!0,class:!0,href:!0});var Og=i(kn);gi=a(Og,"SPAN",{});var Ag=i(gi);w(tr.$$.fragment,Ag),Ag.forEach(t),Og.forEach(t),tu=f(od),_i=a(od,"SPAN",{});var Ng=i(_i);ou=s(Ng,"TFConvBertForTokenClassification"),Ng.forEach(t),od.forEach(t),wl=f(o),st=a(o,"DIV",{class:!0});var qt=i(st);w(or.$$.fragment,qt),nu=f(qt),vi=a(qt,"P",{});var Dg=i(vi);su=s(Dg,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dg.forEach(t),ru=f(qt),nr=a(qt,"P",{});var nd=i(nr);au=s(nd,"This model inherits from "),Sr=a(nd,"A",{href:!0});var Lg=i(Sr);iu=s(Lg,"TFPreTrainedModel"),Lg.forEach(t),lu=s(nd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nd.forEach(t),du=f(qt),sr=a(qt,"P",{});var sd=i(sr);cu=s(sd,"This model is also a "),rr=a(sd,"A",{href:!0,rel:!0});var Ig=i(rr);pu=s(Ig,"tf.keras.Model"),Ig.forEach(t),hu=s(sd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd.forEach(t),fu=f(qt),w(bn.$$.fragment,qt),uu=f(qt),ut=a(qt,"DIV",{class:!0});var Kt=i(ut);w(ar.$$.fragment,Kt),mu=f(Kt),ko=a(Kt,"P",{});var ca=i(ko);gu=s(ca,"The "),Rr=a(ca,"A",{href:!0});var Sg=i(Rr);_u=s(Sg,"TFConvBertForTokenClassification"),Sg.forEach(t),vu=s(ca," forward method, overrides the "),ki=a(ca,"CODE",{});var Rg=i(ki);ku=s(Rg,"__call__"),Rg.forEach(t),bu=s(ca," special method."),ca.forEach(t),Tu=f(Kt),w(Tn.$$.fragment,Kt),wu=f(Kt),w(wn.$$.fragment,Kt),yu=f(Kt),w(yn.$$.fragment,Kt),Kt.forEach(t),qt.forEach(t),yl=f(o),bo=a(o,"H2",{class:!0});var rd=i(bo);$n=a(rd,"A",{id:!0,class:!0,href:!0});var Wg=i($n);bi=a(Wg,"SPAN",{});var Kg=i(bi);w(ir.$$.fragment,Kg),Kg.forEach(t),Wg.forEach(t),$u=f(rd),Ti=a(rd,"SPAN",{});var Ug=i(Ti);Cu=s(Ug,"TFConvBertForQuestionAnswering"),Ug.forEach(t),rd.forEach(t),$l=f(o),rt=a(o,"DIV",{class:!0});var jt=i(rt);w(lr.$$.fragment,jt),Fu=f(jt),To=a(jt,"P",{});var pa=i(To);Bu=s(pa,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),wi=a(pa,"CODE",{});var Yg=i(wi);Eu=s(Yg,"span start logits"),Yg.forEach(t),zu=s(pa," and "),yi=a(pa,"CODE",{});var Hg=i(yi);Mu=s(Hg,"span end logits"),Hg.forEach(t),qu=s(pa,")."),pa.forEach(t),ju=f(jt),dr=a(jt,"P",{});var ad=i(dr);xu=s(ad,"This model inherits from "),Wr=a(ad,"A",{href:!0});var Qg=i(Wr);Pu=s(Qg,"TFPreTrainedModel"),Qg.forEach(t),Ou=s(ad,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ad.forEach(t),Au=f(jt),cr=a(jt,"P",{});var id=i(cr);Nu=s(id,"This model is also a "),pr=a(id,"A",{href:!0,rel:!0});var Vg=i(pr);Du=s(Vg,"tf.keras.Model"),Vg.forEach(t),Lu=s(id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),id.forEach(t),Iu=f(jt),w(Cn.$$.fragment,jt),Su=f(jt),mt=a(jt,"DIV",{class:!0});var Ut=i(mt);w(hr.$$.fragment,Ut),Ru=f(Ut),wo=a(Ut,"P",{});var ha=i(wo);Wu=s(ha,"The "),Kr=a(ha,"A",{href:!0});var Jg=i(Kr);Ku=s(Jg,"TFConvBertForQuestionAnswering"),Jg.forEach(t),Uu=s(ha," forward method, overrides the "),$i=a(ha,"CODE",{});var Gg=i($i);Yu=s(Gg,"__call__"),Gg.forEach(t),Hu=s(ha," special method."),ha.forEach(t),Qu=f(Ut),w(Fn.$$.fragment,Ut),Vu=f(Ut),w(Bn.$$.fragment,Ut),Ju=f(Ut),w(En.$$.fragment,Ut),Ut.forEach(t),jt.forEach(t),this.h()},h(){v(d,"name","hf:doc:metadata"),v(d,"content",JSON.stringify(H_)),v(u,"id","convbert"),v(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(u,"href","#convbert"),v(c,"class","relative group"),v(se,"id","overview"),v(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(se,"href","#overview"),v(D,"class","relative group"),v(ae,"href","https://arxiv.org/abs/2008.02496"),v(ae,"rel","nofollow"),v(ie,"href","https://huggingface.co/abhishek"),v(ie,"rel","nofollow"),v(le,"href","https://github.com/yitu-opensource/ConvBert"),v(le,"rel","nofollow"),v(re,"id","transformers.ConvBertConfig"),v(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(re,"href","#transformers.ConvBertConfig"),v(I,"class","relative group"),v(A,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertModel"),v(m,"href","https://huggingface.co/YituTech/conv-bert-base"),v(m,"rel","nofollow"),v(M,"href","/docs/transformers/v4.23.1/en/main_classes/configuration#transformers.PretrainedConfig"),v(Ie,"href","/docs/transformers/v4.23.1/en/main_classes/configuration#transformers.PretrainedConfig"),v(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(U,"id","transformers.ConvBertTokenizer"),v(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(U,"href","#transformers.ConvBertTokenizer"),v(Pe,"class","relative group"),v(br,"href","/docs/transformers/v4.23.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),v(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(yr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Eo,"id","transformers.ConvBertTokenizerFast"),v(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Eo,"href","#transformers.ConvBertTokenizerFast"),v(Ht,"class","relative group"),v($r,"href","/docs/transformers/v4.23.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),v(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Mo,"id","transformers.ConvBertModel"),v(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Mo,"href","#transformers.ConvBertModel"),v(Vt,"class","relative group"),v(ss,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(ss,"rel","nofollow"),v(Br,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertModel"),v(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(xo,"id","transformers.ConvBertForMaskedLM"),v(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(xo,"href","#transformers.ConvBertForMaskedLM"),v(Gt,"class","relative group"),v(ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(ls,"rel","nofollow"),v(Er,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),v(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(No,"id","transformers.ConvBertForSequenceClassification"),v(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(No,"href","#transformers.ConvBertForSequenceClassification"),v(eo,"class","relative group"),v(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(fs,"rel","nofollow"),v(zr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),v(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Wo,"id","transformers.ConvBertForMultipleChoice"),v(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Wo,"href","#transformers.ConvBertForMultipleChoice"),v(oo,"class","relative group"),v(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(vs,"rel","nofollow"),v(Mr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),v($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Yo,"id","transformers.ConvBertForTokenClassification"),v(Yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Yo,"href","#transformers.ConvBertForTokenClassification"),v(so,"class","relative group"),v(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(ys,"rel","nofollow"),v(qr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),v(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(Jo,"id","transformers.ConvBertForQuestionAnswering"),v(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Jo,"href","#transformers.ConvBertForQuestionAnswering"),v(ao,"class","relative group"),v(Es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),v(Es,"rel","nofollow"),v(jr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),v(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(en,"id","transformers.TFConvBertModel"),v(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(en,"href","#transformers.TFConvBertModel"),v(co,"class","relative group"),v(xr,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Ps,"rel","nofollow"),v(Pr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertModel"),v(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(sn,"id","transformers.TFConvBertForMaskedLM"),v(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(sn,"href","#transformers.TFConvBertForMaskedLM"),v(ho,"class","relative group"),v(Or,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(Ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Ss,"rel","nofollow"),v(Ar,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),v(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(cn,"id","transformers.TFConvBertForSequenceClassification"),v(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(cn,"href","#transformers.TFConvBertForSequenceClassification"),v(uo,"class","relative group"),v(Nr,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Hs,"rel","nofollow"),v(Dr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),v(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(mn,"id","transformers.TFConvBertForMultipleChoice"),v(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(mn,"href","#transformers.TFConvBertForMultipleChoice"),v(go,"class","relative group"),v(Lr,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(Zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(Zs,"rel","nofollow"),v(Ir,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),v(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(kn,"id","transformers.TFConvBertForTokenClassification"),v(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(kn,"href","#transformers.TFConvBertForTokenClassification"),v(vo,"class","relative group"),v(Sr,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(rr,"rel","nofollow"),v(Rr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),v(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v($n,"id","transformers.TFConvBertForQuestionAnswering"),v($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v($n,"href","#transformers.TFConvBertForQuestionAnswering"),v(bo,"class","relative group"),v(Wr,"href","/docs/transformers/v4.23.1/en/main_classes/model#transformers.TFPreTrainedModel"),v(pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),v(pr,"rel","nofollow"),v(Kr,"href","/docs/transformers/v4.23.1/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),v(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),v(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),_(o,g,k),_(o,c,k),e(c,u),e(u,b),y(l,b,null),e(c,p),e(c,q),e(q,be),_(o,fe,k),_(o,D,k),e(D,se),e(se,X),y(B,X,null),e(D,Te),e(D,V),e(V,we),_(o,ue,k),_(o,W,k),e(W,ye),e(W,ae),e(ae,J),e(W,$e),_(o,me,k),_(o,H,k),e(H,Ce),_(o,ge,k),_(o,Q,k),e(Q,ce),e(ce,Fe),_(o,Z,k),_(o,j,k),e(j,P),_(o,_e,k),_(o,L,k),e(L,Be),e(L,ie),e(ie,G),e(L,Ee),e(L,le),e(le,O),_(o,ve,k),_(o,I,k),e(I,re),e(re,pe),y(Y,pe,null),e(I,ze),e(I,he),e(he,S),_(o,ke,k),_(o,N,k),y(de,N,null),e(N,ee),e(N,x),e(x,Me),e(x,A),e(A,qe),e(x,je),e(x,m),e(m,E),e(x,Ue),e(N,te),e(N,xe),e(xe,Ye),e(xe,M),e(M,He),e(xe,Qe),e(xe,Ie),e(Ie,Ve),e(xe,Je),e(N,R),y(K,N,null),_(o,We,k),_(o,Pe,k),e(Pe,U),e(U,Se),y(Ae,Se,null),e(Pe,Oe),e(Pe,Re),e(Re,oe),_(o,Ke,k),_(o,Ge,k),y(In,Ge,null),e(Ge,ld),e(Ge,fa),e(fa,dd),e(Ge,cd),e(Ge,Sn),e(Sn,pd),e(Sn,br),e(br,hd),e(Sn,fd),e(Ge,ud),e(Ge,At),y(Rn,At,null),e(At,md),e(At,ua),e(ua,gd),e(At,_d),e(At,Wn),e(Wn,Tr),e(Tr,vd),e(Tr,ma),e(ma,kd),e(Wn,bd),e(Wn,wr),e(wr,Td),e(wr,ga),e(ga,wd),e(Ge,yd),e(Ge,Fo),y(Kn,Fo,null),e(Fo,$d),e(Fo,Un),e(Un,Cd),e(Un,_a),e(_a,Fd),e(Un,Bd),e(Ge,Ed),e(Ge,Tt),y(Yn,Tt,null),e(Tt,zd),e(Tt,va),e(va,Md),e(Tt,qd),y(Bo,Tt,null),e(Tt,jd),e(Tt,Yt),e(Yt,xd),e(Yt,ka),e(ka,Pd),e(Yt,Od),e(Yt,ba),e(ba,Ad),e(Yt,Nd),e(Ge,Dd),e(Ge,yr),y(Hn,yr,null),_(o,Zi,k),_(o,Ht,k),e(Ht,Eo),e(Eo,Ta),y(Qn,Ta,null),e(Ht,Ld),e(Ht,wa),e(wa,Id),_(o,el,k),_(o,lt,k),y(Vn,lt,null),e(lt,Sd),e(lt,Jn),e(Jn,Rd),e(Jn,ya),e(ya,Wd),e(Jn,Kd),e(lt,Ud),e(lt,Gn),e(Gn,Yd),e(Gn,$r),e($r,Hd),e(Gn,Qd),e(lt,Vd),e(lt,Nt),y(Xn,Nt,null),e(Nt,Jd),e(Nt,$a),e($a,Gd),e(Nt,Xd),e(Nt,Zn),e(Zn,Cr),e(Cr,Zd),e(Cr,Ca),e(Ca,ec),e(Zn,tc),e(Zn,Fr),e(Fr,oc),e(Fr,Fa),e(Fa,nc),e(lt,sc),e(lt,wt),y(es,wt,null),e(wt,rc),e(wt,Ba),e(Ba,ac),e(wt,ic),y(zo,wt,null),e(wt,lc),e(wt,Qt),e(Qt,dc),e(Qt,Ea),e(Ea,cc),e(Qt,pc),e(Qt,za),e(za,hc),e(Qt,fc),_(o,tl,k),_(o,Vt,k),e(Vt,Mo),e(Mo,Ma),y(ts,Ma,null),e(Vt,uc),e(Vt,qa),e(qa,mc),_(o,ol,k),_(o,xt,k),y(os,xt,null),e(xt,gc),e(xt,ns),e(ns,_c),e(ns,ss),e(ss,vc),e(ns,kc),e(xt,bc),e(xt,yt),y(rs,yt,null),e(yt,Tc),e(yt,Jt),e(Jt,wc),e(Jt,Br),e(Br,yc),e(Jt,$c),e(Jt,ja),e(ja,Cc),e(Jt,Fc),e(yt,Bc),y(qo,yt,null),e(yt,Ec),y(jo,yt,null),_(o,nl,k),_(o,Gt,k),e(Gt,xo),e(xo,xa),y(as,xa,null),e(Gt,zc),e(Gt,Pa),e(Pa,Mc),_(o,sl,k),_(o,Pt,k),y(is,Pt,null),e(Pt,qc),e(Pt,Xt),e(Xt,jc),e(Xt,Oa),e(Oa,xc),e(Xt,Pc),e(Xt,ls),e(ls,Oc),e(Xt,Ac),e(Pt,Nc),e(Pt,dt),y(ds,dt,null),e(dt,Dc),e(dt,Zt),e(Zt,Lc),e(Zt,Er),e(Er,Ic),e(Zt,Sc),e(Zt,Aa),e(Aa,Rc),e(Zt,Wc),e(dt,Kc),y(Po,dt,null),e(dt,Uc),y(Oo,dt,null),e(dt,Yc),y(Ao,dt,null),_(o,rl,k),_(o,eo,k),e(eo,No),e(No,Na),y(cs,Na,null),e(eo,Hc),e(eo,Da),e(Da,Qc),_(o,al,k),_(o,_t,k),y(ps,_t,null),e(_t,Vc),e(_t,La),e(La,Jc),e(_t,Gc),e(_t,hs),e(hs,Xc),e(hs,fs),e(fs,Zc),e(hs,ep),e(_t,tp),e(_t,Xe),y(us,Xe,null),e(Xe,op),e(Xe,to),e(to,np),e(to,zr),e(zr,sp),e(to,rp),e(to,Ia),e(Ia,ap),e(to,ip),e(Xe,lp),y(Do,Xe,null),e(Xe,dp),y(Lo,Xe,null),e(Xe,cp),y(Io,Xe,null),e(Xe,pp),y(So,Xe,null),e(Xe,hp),y(Ro,Xe,null),_(o,il,k),_(o,oo,k),e(oo,Wo),e(Wo,Sa),y(ms,Sa,null),e(oo,fp),e(oo,Ra),e(Ra,up),_(o,ll,k),_(o,vt,k),y(gs,vt,null),e(vt,mp),e(vt,Wa),e(Wa,gp),e(vt,_p),e(vt,_s),e(_s,vp),e(_s,vs),e(vs,kp),e(_s,bp),e(vt,Tp),e(vt,$t),y(ks,$t,null),e($t,wp),e($t,no),e(no,yp),e(no,Mr),e(Mr,$p),e(no,Cp),e(no,Ka),e(Ka,Fp),e(no,Bp),e($t,Ep),y(Ko,$t,null),e($t,zp),y(Uo,$t,null),_(o,dl,k),_(o,so,k),e(so,Yo),e(Yo,Ua),y(bs,Ua,null),e(so,Mp),e(so,Ya),e(Ya,qp),_(o,cl,k),_(o,kt,k),y(Ts,kt,null),e(kt,jp),e(kt,Ha),e(Ha,xp),e(kt,Pp),e(kt,ws),e(ws,Op),e(ws,ys),e(ys,Ap),e(ws,Np),e(kt,Dp),e(kt,ct),y($s,ct,null),e(ct,Lp),e(ct,ro),e(ro,Ip),e(ro,qr),e(qr,Sp),e(ro,Rp),e(ro,Qa),e(Qa,Wp),e(ro,Kp),e(ct,Up),y(Ho,ct,null),e(ct,Yp),y(Qo,ct,null),e(ct,Hp),y(Vo,ct,null),_(o,pl,k),_(o,ao,k),e(ao,Jo),e(Jo,Va),y(Cs,Va,null),e(ao,Qp),e(ao,Ja),e(Ja,Vp),_(o,hl,k),_(o,bt,k),y(Fs,bt,null),e(bt,Jp),e(bt,io),e(io,Gp),e(io,Ga),e(Ga,Xp),e(io,Zp),e(io,Xa),e(Xa,eh),e(io,th),e(bt,oh),e(bt,Bs),e(Bs,nh),e(Bs,Es),e(Es,sh),e(Bs,rh),e(bt,ah),e(bt,pt),y(zs,pt,null),e(pt,ih),e(pt,lo),e(lo,lh),e(lo,jr),e(jr,dh),e(lo,ch),e(lo,Za),e(Za,ph),e(lo,hh),e(pt,fh),y(Go,pt,null),e(pt,uh),y(Xo,pt,null),e(pt,mh),y(Zo,pt,null),_(o,fl,k),_(o,co,k),e(co,en),e(en,ei),y(Ms,ei,null),e(co,gh),e(co,ti),e(ti,_h),_(o,ul,k),_(o,et,k),y(qs,et,null),e(et,vh),e(et,oi),e(oi,kh),e(et,bh),e(et,js),e(js,Th),e(js,xr),e(xr,wh),e(js,yh),e(et,$h),e(et,xs),e(xs,Ch),e(xs,Ps),e(Ps,Fh),e(xs,Bh),e(et,Eh),y(tn,et,null),e(et,zh),e(et,Ct),y(Os,Ct,null),e(Ct,Mh),e(Ct,po),e(po,qh),e(po,Pr),e(Pr,jh),e(po,xh),e(po,ni),e(ni,Ph),e(po,Oh),e(Ct,Ah),y(on,Ct,null),e(Ct,Nh),y(nn,Ct,null),_(o,ml,k),_(o,ho,k),e(ho,sn),e(sn,si),y(As,si,null),e(ho,Dh),e(ho,ri),e(ri,Lh),_(o,gl,k),_(o,tt,k),y(Ns,tt,null),e(tt,Ih),e(tt,Ds),e(Ds,Sh),e(Ds,ai),e(ai,Rh),e(Ds,Wh),e(tt,Kh),e(tt,Ls),e(Ls,Uh),e(Ls,Or),e(Or,Yh),e(Ls,Hh),e(tt,Qh),e(tt,Is),e(Is,Vh),e(Is,Ss),e(Ss,Jh),e(Is,Gh),e(tt,Xh),y(rn,tt,null),e(tt,Zh),e(tt,ht),y(Rs,ht,null),e(ht,ef),e(ht,fo),e(fo,tf),e(fo,Ar),e(Ar,of),e(fo,nf),e(fo,ii),e(ii,sf),e(fo,rf),e(ht,af),y(an,ht,null),e(ht,lf),y(ln,ht,null),e(ht,df),y(dn,ht,null),_(o,_l,k),_(o,uo,k),e(uo,cn),e(cn,li),y(Ws,li,null),e(uo,cf),e(uo,di),e(di,pf),_(o,vl,k),_(o,ot,k),y(Ks,ot,null),e(ot,hf),e(ot,ci),e(ci,ff),e(ot,uf),e(ot,Us),e(Us,mf),e(Us,Nr),e(Nr,gf),e(Us,_f),e(ot,vf),e(ot,Ys),e(Ys,kf),e(Ys,Hs),e(Hs,bf),e(Ys,Tf),e(ot,wf),y(pn,ot,null),e(ot,yf),e(ot,ft),y(Qs,ft,null),e(ft,$f),e(ft,mo),e(mo,Cf),e(mo,Dr),e(Dr,Ff),e(mo,Bf),e(mo,pi),e(pi,Ef),e(mo,zf),e(ft,Mf),y(hn,ft,null),e(ft,qf),y(fn,ft,null),e(ft,jf),y(un,ft,null),_(o,kl,k),_(o,go,k),e(go,mn),e(mn,hi),y(Vs,hi,null),e(go,xf),e(go,fi),e(fi,Pf),_(o,bl,k),_(o,nt,k),y(Js,nt,null),e(nt,Of),e(nt,ui),e(ui,Af),e(nt,Nf),e(nt,Gs),e(Gs,Df),e(Gs,Lr),e(Lr,Lf),e(Gs,If),e(nt,Sf),e(nt,Xs),e(Xs,Rf),e(Xs,Zs),e(Zs,Wf),e(Xs,Kf),e(nt,Uf),y(gn,nt,null),e(nt,Yf),e(nt,Ft),y(er,Ft,null),e(Ft,Hf),e(Ft,_o),e(_o,Qf),e(_o,Ir),e(Ir,Vf),e(_o,Jf),e(_o,mi),e(mi,Gf),e(_o,Xf),e(Ft,Zf),y(_n,Ft,null),e(Ft,eu),y(vn,Ft,null),_(o,Tl,k),_(o,vo,k),e(vo,kn),e(kn,gi),y(tr,gi,null),e(vo,tu),e(vo,_i),e(_i,ou),_(o,wl,k),_(o,st,k),y(or,st,null),e(st,nu),e(st,vi),e(vi,su),e(st,ru),e(st,nr),e(nr,au),e(nr,Sr),e(Sr,iu),e(nr,lu),e(st,du),e(st,sr),e(sr,cu),e(sr,rr),e(rr,pu),e(sr,hu),e(st,fu),y(bn,st,null),e(st,uu),e(st,ut),y(ar,ut,null),e(ut,mu),e(ut,ko),e(ko,gu),e(ko,Rr),e(Rr,_u),e(ko,vu),e(ko,ki),e(ki,ku),e(ko,bu),e(ut,Tu),y(Tn,ut,null),e(ut,wu),y(wn,ut,null),e(ut,yu),y(yn,ut,null),_(o,yl,k),_(o,bo,k),e(bo,$n),e($n,bi),y(ir,bi,null),e(bo,$u),e(bo,Ti),e(Ti,Cu),_(o,$l,k),_(o,rt,k),y(lr,rt,null),e(rt,Fu),e(rt,To),e(To,Bu),e(To,wi),e(wi,Eu),e(To,zu),e(To,yi),e(yi,Mu),e(To,qu),e(rt,ju),e(rt,dr),e(dr,xu),e(dr,Wr),e(Wr,Pu),e(dr,Ou),e(rt,Au),e(rt,cr),e(cr,Nu),e(cr,pr),e(pr,Du),e(cr,Lu),e(rt,Iu),y(Cn,rt,null),e(rt,Su),e(rt,mt),y(hr,mt,null),e(mt,Ru),e(mt,wo),e(wo,Wu),e(wo,Kr),e(Kr,Ku),e(wo,Uu),e(wo,$i),e($i,Yu),e(wo,Hu),e(mt,Qu),y(Fn,mt,null),e(mt,Vu),y(Bn,mt,null),e(mt,Ju),y(En,mt,null),Cl=!0},p(o,[k]){const fr={};k&2&&(fr.$$scope={dirty:k,ctx:o}),K.$set(fr);const Ci={};k&2&&(Ci.$$scope={dirty:k,ctx:o}),Bo.$set(Ci);const Fi={};k&2&&(Fi.$$scope={dirty:k,ctx:o}),zo.$set(Fi);const Bi={};k&2&&(Bi.$$scope={dirty:k,ctx:o}),qo.$set(Bi);const ur={};k&2&&(ur.$$scope={dirty:k,ctx:o}),jo.$set(ur);const Ei={};k&2&&(Ei.$$scope={dirty:k,ctx:o}),Po.$set(Ei);const zi={};k&2&&(zi.$$scope={dirty:k,ctx:o}),Oo.$set(zi);const Mi={};k&2&&(Mi.$$scope={dirty:k,ctx:o}),Ao.$set(Mi);const mr={};k&2&&(mr.$$scope={dirty:k,ctx:o}),Do.$set(mr);const qi={};k&2&&(qi.$$scope={dirty:k,ctx:o}),Lo.$set(qi);const ji={};k&2&&(ji.$$scope={dirty:k,ctx:o}),Io.$set(ji);const xi={};k&2&&(xi.$$scope={dirty:k,ctx:o}),So.$set(xi);const Pi={};k&2&&(Pi.$$scope={dirty:k,ctx:o}),Ro.$set(Pi);const Oi={};k&2&&(Oi.$$scope={dirty:k,ctx:o}),Ko.$set(Oi);const zn={};k&2&&(zn.$$scope={dirty:k,ctx:o}),Uo.$set(zn);const Ai={};k&2&&(Ai.$$scope={dirty:k,ctx:o}),Ho.$set(Ai);const Ni={};k&2&&(Ni.$$scope={dirty:k,ctx:o}),Qo.$set(Ni);const gr={};k&2&&(gr.$$scope={dirty:k,ctx:o}),Vo.$set(gr);const Di={};k&2&&(Di.$$scope={dirty:k,ctx:o}),Go.$set(Di);const Li={};k&2&&(Li.$$scope={dirty:k,ctx:o}),Xo.$set(Li);const Ii={};k&2&&(Ii.$$scope={dirty:k,ctx:o}),Zo.$set(Ii);const Ot={};k&2&&(Ot.$$scope={dirty:k,ctx:o}),tn.$set(Ot);const yo={};k&2&&(yo.$$scope={dirty:k,ctx:o}),on.$set(yo);const Si={};k&2&&(Si.$$scope={dirty:k,ctx:o}),nn.$set(Si);const Ri={};k&2&&(Ri.$$scope={dirty:k,ctx:o}),rn.$set(Ri);const $o={};k&2&&($o.$$scope={dirty:k,ctx:o}),an.$set($o);const Wi={};k&2&&(Wi.$$scope={dirty:k,ctx:o}),ln.$set(Wi);const Ki={};k&2&&(Ki.$$scope={dirty:k,ctx:o}),dn.$set(Ki);const _r={};k&2&&(_r.$$scope={dirty:k,ctx:o}),pn.$set(_r);const Ui={};k&2&&(Ui.$$scope={dirty:k,ctx:o}),hn.$set(Ui);const Yi={};k&2&&(Yi.$$scope={dirty:k,ctx:o}),fn.$set(Yi);const Hi={};k&2&&(Hi.$$scope={dirty:k,ctx:o}),un.$set(Hi);const at={};k&2&&(at.$$scope={dirty:k,ctx:o}),gn.$set(at);const Qi={};k&2&&(Qi.$$scope={dirty:k,ctx:o}),_n.$set(Qi);const vr={};k&2&&(vr.$$scope={dirty:k,ctx:o}),vn.$set(vr);const Vi={};k&2&&(Vi.$$scope={dirty:k,ctx:o}),bn.$set(Vi);const Co={};k&2&&(Co.$$scope={dirty:k,ctx:o}),Tn.$set(Co);const Ji={};k&2&&(Ji.$$scope={dirty:k,ctx:o}),wn.$set(Ji);const kr={};k&2&&(kr.$$scope={dirty:k,ctx:o}),yn.$set(kr);const Ur={};k&2&&(Ur.$$scope={dirty:k,ctx:o}),Cn.$set(Ur);const Gi={};k&2&&(Gi.$$scope={dirty:k,ctx:o}),Fn.$set(Gi);const Yr={};k&2&&(Yr.$$scope={dirty:k,ctx:o}),Bn.$set(Yr);const Xi={};k&2&&(Xi.$$scope={dirty:k,ctx:o}),En.$set(Xi)},i(o){Cl||($(l.$$.fragment,o),$(B.$$.fragment,o),$(Y.$$.fragment,o),$(de.$$.fragment,o),$(K.$$.fragment,o),$(Ae.$$.fragment,o),$(In.$$.fragment,o),$(Rn.$$.fragment,o),$(Kn.$$.fragment,o),$(Yn.$$.fragment,o),$(Bo.$$.fragment,o),$(Hn.$$.fragment,o),$(Qn.$$.fragment,o),$(Vn.$$.fragment,o),$(Xn.$$.fragment,o),$(es.$$.fragment,o),$(zo.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(rs.$$.fragment,o),$(qo.$$.fragment,o),$(jo.$$.fragment,o),$(as.$$.fragment,o),$(is.$$.fragment,o),$(ds.$$.fragment,o),$(Po.$$.fragment,o),$(Oo.$$.fragment,o),$(Ao.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(us.$$.fragment,o),$(Do.$$.fragment,o),$(Lo.$$.fragment,o),$(Io.$$.fragment,o),$(So.$$.fragment,o),$(Ro.$$.fragment,o),$(ms.$$.fragment,o),$(gs.$$.fragment,o),$(ks.$$.fragment,o),$(Ko.$$.fragment,o),$(Uo.$$.fragment,o),$(bs.$$.fragment,o),$(Ts.$$.fragment,o),$($s.$$.fragment,o),$(Ho.$$.fragment,o),$(Qo.$$.fragment,o),$(Vo.$$.fragment,o),$(Cs.$$.fragment,o),$(Fs.$$.fragment,o),$(zs.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(Zo.$$.fragment,o),$(Ms.$$.fragment,o),$(qs.$$.fragment,o),$(tn.$$.fragment,o),$(Os.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(As.$$.fragment,o),$(Ns.$$.fragment,o),$(rn.$$.fragment,o),$(Rs.$$.fragment,o),$(an.$$.fragment,o),$(ln.$$.fragment,o),$(dn.$$.fragment,o),$(Ws.$$.fragment,o),$(Ks.$$.fragment,o),$(pn.$$.fragment,o),$(Qs.$$.fragment,o),$(hn.$$.fragment,o),$(fn.$$.fragment,o),$(un.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(gn.$$.fragment,o),$(er.$$.fragment,o),$(_n.$$.fragment,o),$(vn.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(bn.$$.fragment,o),$(ar.$$.fragment,o),$(Tn.$$.fragment,o),$(wn.$$.fragment,o),$(yn.$$.fragment,o),$(ir.$$.fragment,o),$(lr.$$.fragment,o),$(Cn.$$.fragment,o),$(hr.$$.fragment,o),$(Fn.$$.fragment,o),$(Bn.$$.fragment,o),$(En.$$.fragment,o),Cl=!0)},o(o){C(l.$$.fragment,o),C(B.$$.fragment,o),C(Y.$$.fragment,o),C(de.$$.fragment,o),C(K.$$.fragment,o),C(Ae.$$.fragment,o),C(In.$$.fragment,o),C(Rn.$$.fragment,o),C(Kn.$$.fragment,o),C(Yn.$$.fragment,o),C(Bo.$$.fragment,o),C(Hn.$$.fragment,o),C(Qn.$$.fragment,o),C(Vn.$$.fragment,o),C(Xn.$$.fragment,o),C(es.$$.fragment,o),C(zo.$$.fragment,o),C(ts.$$.fragment,o),C(os.$$.fragment,o),C(rs.$$.fragment,o),C(qo.$$.fragment,o),C(jo.$$.fragment,o),C(as.$$.fragment,o),C(is.$$.fragment,o),C(ds.$$.fragment,o),C(Po.$$.fragment,o),C(Oo.$$.fragment,o),C(Ao.$$.fragment,o),C(cs.$$.fragment,o),C(ps.$$.fragment,o),C(us.$$.fragment,o),C(Do.$$.fragment,o),C(Lo.$$.fragment,o),C(Io.$$.fragment,o),C(So.$$.fragment,o),C(Ro.$$.fragment,o),C(ms.$$.fragment,o),C(gs.$$.fragment,o),C(ks.$$.fragment,o),C(Ko.$$.fragment,o),C(Uo.$$.fragment,o),C(bs.$$.fragment,o),C(Ts.$$.fragment,o),C($s.$$.fragment,o),C(Ho.$$.fragment,o),C(Qo.$$.fragment,o),C(Vo.$$.fragment,o),C(Cs.$$.fragment,o),C(Fs.$$.fragment,o),C(zs.$$.fragment,o),C(Go.$$.fragment,o),C(Xo.$$.fragment,o),C(Zo.$$.fragment,o),C(Ms.$$.fragment,o),C(qs.$$.fragment,o),C(tn.$$.fragment,o),C(Os.$$.fragment,o),C(on.$$.fragment,o),C(nn.$$.fragment,o),C(As.$$.fragment,o),C(Ns.$$.fragment,o),C(rn.$$.fragment,o),C(Rs.$$.fragment,o),C(an.$$.fragment,o),C(ln.$$.fragment,o),C(dn.$$.fragment,o),C(Ws.$$.fragment,o),C(Ks.$$.fragment,o),C(pn.$$.fragment,o),C(Qs.$$.fragment,o),C(hn.$$.fragment,o),C(fn.$$.fragment,o),C(un.$$.fragment,o),C(Vs.$$.fragment,o),C(Js.$$.fragment,o),C(gn.$$.fragment,o),C(er.$$.fragment,o),C(_n.$$.fragment,o),C(vn.$$.fragment,o),C(tr.$$.fragment,o),C(or.$$.fragment,o),C(bn.$$.fragment,o),C(ar.$$.fragment,o),C(Tn.$$.fragment,o),C(wn.$$.fragment,o),C(yn.$$.fragment,o),C(ir.$$.fragment,o),C(lr.$$.fragment,o),C(Cn.$$.fragment,o),C(hr.$$.fragment,o),C(Fn.$$.fragment,o),C(Bn.$$.fragment,o),C(En.$$.fragment,o),Cl=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(fe),o&&t(D),F(B),o&&t(ue),o&&t(W),o&&t(me),o&&t(H),o&&t(ge),o&&t(Q),o&&t(Z),o&&t(j),o&&t(_e),o&&t(L),o&&t(ve),o&&t(I),F(Y),o&&t(ke),o&&t(N),F(de),F(K),o&&t(We),o&&t(Pe),F(Ae),o&&t(Ke),o&&t(Ge),F(In),F(Rn),F(Kn),F(Yn),F(Bo),F(Hn),o&&t(Zi),o&&t(Ht),F(Qn),o&&t(el),o&&t(lt),F(Vn),F(Xn),F(es),F(zo),o&&t(tl),o&&t(Vt),F(ts),o&&t(ol),o&&t(xt),F(os),F(rs),F(qo),F(jo),o&&t(nl),o&&t(Gt),F(as),o&&t(sl),o&&t(Pt),F(is),F(ds),F(Po),F(Oo),F(Ao),o&&t(rl),o&&t(eo),F(cs),o&&t(al),o&&t(_t),F(ps),F(us),F(Do),F(Lo),F(Io),F(So),F(Ro),o&&t(il),o&&t(oo),F(ms),o&&t(ll),o&&t(vt),F(gs),F(ks),F(Ko),F(Uo),o&&t(dl),o&&t(so),F(bs),o&&t(cl),o&&t(kt),F(Ts),F($s),F(Ho),F(Qo),F(Vo),o&&t(pl),o&&t(ao),F(Cs),o&&t(hl),o&&t(bt),F(Fs),F(zs),F(Go),F(Xo),F(Zo),o&&t(fl),o&&t(co),F(Ms),o&&t(ul),o&&t(et),F(qs),F(tn),F(Os),F(on),F(nn),o&&t(ml),o&&t(ho),F(As),o&&t(gl),o&&t(tt),F(Ns),F(rn),F(Rs),F(an),F(ln),F(dn),o&&t(_l),o&&t(uo),F(Ws),o&&t(vl),o&&t(ot),F(Ks),F(pn),F(Qs),F(hn),F(fn),F(un),o&&t(kl),o&&t(go),F(Vs),o&&t(bl),o&&t(nt),F(Js),F(gn),F(er),F(_n),F(vn),o&&t(Tl),o&&t(vo),F(tr),o&&t(wl),o&&t(st),F(or),F(bn),F(ar),F(Tn),F(wn),F(yn),o&&t(yl),o&&t(bo),F(ir),o&&t($l),o&&t(rt),F(lr),F(Cn),F(hr),F(Fn),F(Bn),F(En)}}}const H_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function Q_(z){return o_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tv extends Xg{constructor(d){super();Zg(this,d,Q_,Y_,e_,{})}}export{tv as default,H_ as metadata};
