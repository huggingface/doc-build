import{S as _g,i as vg,s as bg,e as r,k as h,w as T,t as n,M as kg,c as a,d as t,m,a as i,x as $,h as s,b as k,F as e,g as _,y as w,q as y,o as C,B as F,v as Tg,L as we}from"../../chunks/vendor-6b77c823.js";import{T as qe}from"../../chunks/Tip-39098574.js";import{D as oe}from"../../chunks/Docstring-1088f2fb.js";import{C as ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Se}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as $e}from"../../chunks/ExampleCodeBlock-5212b321.js";function $g(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertModel, ConvBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wg(B){let d,g,c,p,v;return p=new ye({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("pair mask has the following format:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"pair mask has the following format:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function yg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Cg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Fg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Bg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Eg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Mg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function zg(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function qg(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function xg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Pg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ng(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ag(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Og(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Dg(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Lg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Sg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ig(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Rg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Wg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ug(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Yg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Hg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Qg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Vg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Kg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Jg(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Gg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Xg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function e_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function t_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function o_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function n_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function s_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function r_(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function a_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=n("TF 2.0 models accepts two formats as inputs:"),c=h(),p=r("ul"),v=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),f=h(),M=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=h(),z=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=n("model(inputs)"),ae=n("."),Q=h(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=h(),j=r("ul"),x=r("li"),ne=n("a single Tensor with "),Y=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),R=r("code"),he=n("model(inputs_ids)"),le=h(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),L=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=h(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=m(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=m(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=m(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=m(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=m(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);ne=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);he=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=m(D),q=a(D,"LI",{});var H=i(q);me=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=m(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,ne),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,he),e(j,le),e(j,q),e(q,me),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function i_(B){let d,g,c,p,v;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function l_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=m(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function d_(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function c_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,ne,Y,ie,se,R,he,le,q,me,W,G,fe,L,ue,ge,P,_e,U,Z,u,E,V,Be,Ce,O,Fe,re,be,D,N,Ee,Te,H,Me,ke,ve,ze,Js,Ol,Dl,Gs,Ll,Sl,Il,no,Bi,Ct,so,Yr,kn,Rl,Hr,Wl,Ei,xe,Tn,Ul,mt,Yl,Zs,Hl,Ql,Xs,Vl,Kl,er,Jl,Gl,Zl,_t,$n,Xl,Qr,ed,td,wn,tr,od,Vr,nd,sd,or,rd,Kr,ad,id,ro,yn,ld,Cn,dd,Jr,cd,pd,hd,ot,Fn,md,Gr,fd,ud,ao,gd,Ft,_d,Zr,vd,bd,Xr,kd,Td,$d,nr,Bn,Mi,Bt,io,ea,En,wd,ta,yd,zi,Je,Mn,Cd,zn,Fd,oa,Bd,Ed,Md,lo,sr,zd,jd,rr,qd,xd,Pd,jn,Nd,ar,Ad,Od,ji,Et,co,na,qn,Dd,sa,Ld,qi,ft,xn,Sd,Pn,Id,Nn,Rd,Wd,Ud,nt,An,Yd,Mt,Hd,ir,Qd,Vd,ra,Kd,Jd,Gd,po,Zd,ho,xi,zt,mo,aa,On,Xd,ia,ec,Pi,ut,Dn,tc,jt,oc,la,nc,sc,Ln,rc,ac,ic,Re,Sn,lc,qt,dc,lr,cc,pc,da,hc,mc,fc,fo,uc,uo,gc,go,Ni,xt,_o,ca,In,_c,pa,vc,Ai,Ge,Rn,bc,ha,kc,Tc,Wn,$c,Un,wc,yc,Cc,je,Yn,Fc,Pt,Bc,dr,Ec,Mc,ma,zc,jc,qc,vo,xc,bo,Pc,ko,Nc,To,Ac,$o,Oi,Nt,wo,fa,Hn,Oc,ua,Dc,Di,Ze,Qn,Lc,ga,Sc,Ic,Vn,Rc,Kn,Wc,Uc,Yc,st,Jn,Hc,At,Qc,cr,Vc,Kc,_a,Jc,Gc,Zc,yo,Xc,Co,Li,Ot,Fo,va,Gn,ep,ba,tp,Si,Xe,Zn,op,ka,np,sp,Xn,rp,es,ap,ip,lp,We,ts,dp,Dt,cp,pr,pp,hp,Ta,mp,fp,up,Bo,gp,Eo,_p,Mo,Ii,Lt,zo,$a,os,vp,wa,bp,Ri,et,ns,kp,St,Tp,ya,$p,wp,Ca,yp,Cp,Fp,ss,Bp,rs,Ep,Mp,zp,Ue,as,jp,It,qp,hr,xp,Pp,Fa,Np,Ap,Op,jo,Dp,qo,Lp,xo,Wi,Rt,Po,Ba,is,Sp,Ea,Ip,Ui,Pe,ls,Rp,Ma,Wp,Up,ds,Yp,mr,Hp,Qp,Vp,cs,Kp,ps,Jp,Gp,Zp,No,Xp,rt,hs,eh,Wt,th,fr,oh,nh,za,sh,rh,ah,Ao,ih,Oo,Yi,Ut,Do,ja,ms,lh,qa,dh,Hi,Ne,fs,ch,us,ph,xa,hh,mh,fh,gs,uh,ur,gh,_h,vh,_s,bh,vs,kh,Th,$h,Lo,wh,Ye,bs,yh,Yt,Ch,gr,Fh,Bh,Pa,Eh,Mh,zh,So,jh,Io,qh,Ro,Qi,Ht,Wo,Na,ks,xh,Aa,Ph,Vi,Ae,Ts,Nh,Oa,Ah,Oh,$s,Dh,_r,Lh,Sh,Ih,ws,Rh,ys,Wh,Uh,Yh,Uo,Hh,He,Cs,Qh,Qt,Vh,vr,Kh,Jh,Da,Gh,Zh,Xh,Yo,em,Ho,tm,Qo,Ki,Vt,Vo,La,Fs,om,Sa,nm,Ji,Oe,Bs,sm,Ia,rm,am,Es,im,br,lm,dm,cm,Ms,pm,zs,hm,mm,fm,Ko,um,at,js,gm,Kt,_m,kr,vm,bm,Ra,km,Tm,$m,Jo,wm,Go,Gi,Jt,Zo,Wa,qs,ym,Ua,Cm,Zi,De,xs,Fm,Ya,Bm,Em,Ps,Mm,Tr,zm,jm,qm,Ns,xm,As,Pm,Nm,Am,Xo,Om,Qe,Os,Dm,Gt,Lm,$r,Sm,Im,Ha,Rm,Wm,Um,en,Ym,tn,Hm,on,Xi,Zt,nn,Qa,Ds,Qm,Va,Vm,el,Le,Ls,Km,Xt,Jm,Ka,Gm,Zm,Ja,Xm,ef,tf,Ss,of,wr,nf,sf,rf,Is,af,Rs,lf,df,cf,sn,pf,Ve,Ws,hf,eo,mf,yr,ff,uf,Ga,gf,_f,vf,rn,bf,an,kf,ln,tl;return l=new Se({}),ee=new Se({}),V=new Se({}),be=new oe({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ConvBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ConvBertConfig.head_ratio",description:`<strong>head_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Ratio gamma to reduce the number of attention heads.`,name:"head_ratio"},{anchor:"transformers.ConvBertConfig.num_groups",description:`<strong>num_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups for grouped linear layers for ConvBert model`,name:"num_groups"},{anchor:"transformers.ConvBertConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The size of the convolutional kernel.`,name:"conv_kernel_size"},{anchor:"transformers.ConvBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/configuration_convbert.py#L35"}}),no=new $e({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[$g]},$$scope:{ctx:B}}}),kn=new Se({}),Tn=new oe({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/tokenization_convbert.py#L46"}}),$n=new oe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new oe({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fn=new oe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new $e({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[wg]},$$scope:{ctx:B}}}),Bn=new oe({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/bert/tokenization_bert.py#L330"}}),En=new Se({}),Mn=new oe({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/tokenization_convbert_fast.py#L47"}}),qn=new Se({}),xn=new oe({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L762"}}),An=new oe({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L789",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new qe({props:{$$slots:{default:[yg]},$$scope:{ctx:B}}}),ho=new $e({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[Cg]},$$scope:{ctx:B}}}),On=new Se({}),Dn=new oe({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L876"}}),Sn=new oe({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L893",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new qe({props:{$$slots:{default:[Fg]},$$scope:{ctx:B}}}),uo=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[Bg]},$$scope:{ctx:B}}}),go=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[Eg]},$$scope:{ctx:B}}}),In=new Se({}),Rn=new oe({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L986"}}),Yn=new oe({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L997",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new qe({props:{$$slots:{default:[Mg]},$$scope:{ctx:B}}}),bo=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[zg]},$$scope:{ctx:B}}}),ko=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[jg]},$$scope:{ctx:B}}}),To=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[qg]},$$scope:{ctx:B}}}),$o=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[xg]},$$scope:{ctx:B}}}),Hn=new Se({}),Qn=new oe({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1082"}}),Jn=new oe({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1093",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new qe({props:{$$slots:{default:[Pg]},$$scope:{ctx:B}}}),Co=new $e({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[Ng]},$$scope:{ctx:B}}}),Gn=new Se({}),Zn=new oe({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1176"}}),ts=new oe({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1191",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bo=new qe({props:{$$slots:{default:[Ag]},$$scope:{ctx:B}}}),Eo=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[Og]},$$scope:{ctx:B}}}),Mo=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[Dg]},$$scope:{ctx:B}}}),os=new Se({}),ns=new oe({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1258"}}),as=new oe({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_convbert.py#L1269",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),jo=new qe({props:{$$slots:{default:[Lg]},$$scope:{ctx:B}}}),qo=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[Sg]},$$scope:{ctx:B}}}),xo=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ig]},$$scope:{ctx:B}}}),is=new Se({}),ls=new oe({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L726"}}),No=new qe({props:{$$slots:{default:[Rg]},$$scope:{ctx:B}}}),hs=new oe({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L732",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ao=new qe({props:{$$slots:{default:[Wg]},$$scope:{ctx:B}}}),Oo=new $e({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[Ug]},$$scope:{ctx:B}}}),ms=new Se({}),fs=new oe({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L828"}}),Lo=new qe({props:{$$slots:{default:[Yg]},$$scope:{ctx:B}}}),bs=new oe({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L849",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),So=new qe({props:{$$slots:{default:[Hg]},$$scope:{ctx:B}}}),Io=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[Qg]},$$scope:{ctx:B}}}),Ro=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[Vg]},$$scope:{ctx:B}}}),ks=new Se({}),Ts=new oe({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L950"}}),Uo=new qe({props:{$$slots:{default:[Kg]},$$scope:{ctx:B}}}),Cs=new oe({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L957",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Yo=new qe({props:{$$slots:{default:[Jg]},$$scope:{ctx:B}}}),Ho=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[Gg]},$$scope:{ctx:B}}}),Qo=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[Zg]},$$scope:{ctx:B}}}),Fs=new Se({}),Bs=new oe({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1026"}}),Ko=new qe({props:{$$slots:{default:[Xg]},$$scope:{ctx:B}}}),js=new oe({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1048",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jo=new qe({props:{$$slots:{default:[e_]},$$scope:{ctx:B}}}),Go=new $e({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[t_]},$$scope:{ctx:B}}}),qs=new Se({}),xs=new oe({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1150"}}),Xo=new qe({props:{$$slots:{default:[o_]},$$scope:{ctx:B}}}),Os=new oe({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1164",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new qe({props:{$$slots:{default:[n_]},$$scope:{ctx:B}}}),tn=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[s_]},$$scope:{ctx:B}}}),on=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[r_]},$$scope:{ctx:B}}}),Ds=new Se({}),Ls=new oe({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1232"}}),sn=new qe({props:{$$slots:{default:[a_]},$$scope:{ctx:B}}}),Ws=new oe({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/vain/src/transformers/models/convbert/modeling_tf_convbert.py#L1242",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rn=new qe({props:{$$slots:{default:[i_]},$$scope:{ctx:B}}}),an=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[l_]},$$scope:{ctx:B}}}),ln=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[d_]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=h(),c=r("h1"),p=r("a"),v=r("span"),T(l.$$.fragment),f=h(),M=r("span"),de=n("ConvBERT"),K=h(),z=r("h2"),X=r("a"),S=r("span"),T(ee.$$.fragment),ce=h(),I=r("span"),pe=n("Overview"),ae=h(),Q=r("p"),A=n("The ConvBERT model was proposed in "),te=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),j=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),x=h(),ne=r("p"),Y=n("The abstract from the paper is the following:"),ie=h(),se=r("p"),R=r("em"),he=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),le=h(),q=r("p"),me=n("ConvBERT training tips are similar to those of BERT."),W=h(),G=r("p"),fe=n("This model was contributed by "),L=r("a"),ue=n("abhishek"),ge=n(`. The original implementation can be found
here: `),P=r("a"),_e=n("https://github.com/yitu-opensource/ConvBert"),U=h(),Z=r("h2"),u=r("a"),E=r("span"),T(V.$$.fragment),Be=h(),Ce=r("span"),O=n("ConvBertConfig"),Fe=h(),re=r("div"),T(be.$$.fragment),D=h(),N=r("p"),Ee=n("This is the configuration class to store the configuration of a "),Te=r("a"),H=n("ConvBertModel"),Me=n(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=r("a"),ve=n("conv-bert-base"),ze=n(` architecture. Configuration objects inherit from
`),Js=r("a"),Ol=n("PretrainedConfig"),Dl=n(" and can be used to control the model outputs. Read the documentation from "),Gs=r("a"),Ll=n("PretrainedConfig"),Sl=n(`
for more information.`),Il=h(),T(no.$$.fragment),Bi=h(),Ct=r("h2"),so=r("a"),Yr=r("span"),T(kn.$$.fragment),Rl=h(),Hr=r("span"),Wl=n("ConvBertTokenizer"),Ei=h(),xe=r("div"),T(Tn.$$.fragment),Ul=h(),mt=r("p"),Yl=n("Construct a ConvBERT tokenizer. "),Zs=r("a"),Hl=n("ConvBertTokenizer"),Ql=n(" is identical to "),Xs=r("a"),Vl=n("BertTokenizer"),Kl=n(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),er=r("a"),Jl=n("BertTokenizer"),Gl=n(` for usage examples and
documentation concerning parameters.`),Zl=h(),_t=r("div"),T($n.$$.fragment),Xl=h(),Qr=r("p"),ed=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),td=h(),wn=r("ul"),tr=r("li"),od=n("single sequence: "),Vr=r("code"),nd=n("[CLS] X [SEP]"),sd=h(),or=r("li"),rd=n("pair of sequences: "),Kr=r("code"),ad=n("[CLS] A [SEP] B [SEP]"),id=h(),ro=r("div"),T(yn.$$.fragment),ld=h(),Cn=r("p"),dd=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=r("code"),cd=n("prepare_for_model"),pd=n(" method."),hd=h(),ot=r("div"),T(Fn.$$.fragment),md=h(),Gr=r("p"),fd=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ud=h(),T(ao.$$.fragment),gd=h(),Ft=r("p"),_d=n("If "),Zr=r("code"),vd=n("token_ids_1"),bd=n(" is "),Xr=r("code"),kd=n("None"),Td=n(", this method only returns the first portion of the mask (0s)."),$d=h(),nr=r("div"),T(Bn.$$.fragment),Mi=h(),Bt=r("h2"),io=r("a"),ea=r("span"),T(En.$$.fragment),wd=h(),ta=r("span"),yd=n("ConvBertTokenizerFast"),zi=h(),Je=r("div"),T(Mn.$$.fragment),Cd=h(),zn=r("p"),Fd=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),oa=r("em"),Bd=n("tokenizers"),Ed=n(" library)."),Md=h(),lo=r("p"),sr=r("a"),zd=n("ConvBertTokenizerFast"),jd=n(" is identical to "),rr=r("a"),qd=n("BertTokenizerFast"),xd=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Pd=h(),jn=r("p"),Nd=n("Refer to superclass "),ar=r("a"),Ad=n("BertTokenizerFast"),Od=n(" for usage examples and documentation concerning parameters."),ji=h(),Et=r("h2"),co=r("a"),na=r("span"),T(qn.$$.fragment),Dd=h(),sa=r("span"),Ld=n("ConvBertModel"),qi=h(),ft=r("div"),T(xn.$$.fragment),Sd=h(),Pn=r("p"),Id=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nn=r("a"),Rd=n("torch.nn.Module"),Wd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ud=h(),nt=r("div"),T(An.$$.fragment),Yd=h(),Mt=r("p"),Hd=n("The "),ir=r("a"),Qd=n("ConvBertModel"),Vd=n(" forward method, overrides the "),ra=r("code"),Kd=n("__call__"),Jd=n(" special method."),Gd=h(),T(po.$$.fragment),Zd=h(),T(ho.$$.fragment),xi=h(),zt=r("h2"),mo=r("a"),aa=r("span"),T(On.$$.fragment),Xd=h(),ia=r("span"),ec=n("ConvBertForMaskedLM"),Pi=h(),ut=r("div"),T(Dn.$$.fragment),tc=h(),jt=r("p"),oc=n("ConvBERT Model with a "),la=r("code"),nc=n("language modeling"),sc=n(` head on top.
This model is a PyTorch `),Ln=r("a"),rc=n("torch.nn.Module"),ac=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ic=h(),Re=r("div"),T(Sn.$$.fragment),lc=h(),qt=r("p"),dc=n("The "),lr=r("a"),cc=n("ConvBertForMaskedLM"),pc=n(" forward method, overrides the "),da=r("code"),hc=n("__call__"),mc=n(" special method."),fc=h(),T(fo.$$.fragment),uc=h(),T(uo.$$.fragment),gc=h(),T(go.$$.fragment),Ni=h(),xt=r("h2"),_o=r("a"),ca=r("span"),T(In.$$.fragment),_c=h(),pa=r("span"),vc=n("ConvBertForSequenceClassification"),Ai=h(),Ge=r("div"),T(Rn.$$.fragment),bc=h(),ha=r("p"),kc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tc=h(),Wn=r("p"),$c=n("This model is a PyTorch "),Un=r("a"),wc=n("torch.nn.Module"),yc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cc=h(),je=r("div"),T(Yn.$$.fragment),Fc=h(),Pt=r("p"),Bc=n("The "),dr=r("a"),Ec=n("ConvBertForSequenceClassification"),Mc=n(" forward method, overrides the "),ma=r("code"),zc=n("__call__"),jc=n(" special method."),qc=h(),T(vo.$$.fragment),xc=h(),T(bo.$$.fragment),Pc=h(),T(ko.$$.fragment),Nc=h(),T(To.$$.fragment),Ac=h(),T($o.$$.fragment),Oi=h(),Nt=r("h2"),wo=r("a"),fa=r("span"),T(Hn.$$.fragment),Oc=h(),ua=r("span"),Dc=n("ConvBertForMultipleChoice"),Di=h(),Ze=r("div"),T(Qn.$$.fragment),Lc=h(),ga=r("p"),Sc=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ic=h(),Vn=r("p"),Rc=n("This model is a PyTorch "),Kn=r("a"),Wc=n("torch.nn.Module"),Uc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yc=h(),st=r("div"),T(Jn.$$.fragment),Hc=h(),At=r("p"),Qc=n("The "),cr=r("a"),Vc=n("ConvBertForMultipleChoice"),Kc=n(" forward method, overrides the "),_a=r("code"),Jc=n("__call__"),Gc=n(" special method."),Zc=h(),T(yo.$$.fragment),Xc=h(),T(Co.$$.fragment),Li=h(),Ot=r("h2"),Fo=r("a"),va=r("span"),T(Gn.$$.fragment),ep=h(),ba=r("span"),tp=n("ConvBertForTokenClassification"),Si=h(),Xe=r("div"),T(Zn.$$.fragment),op=h(),ka=r("p"),np=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sp=h(),Xn=r("p"),rp=n("This model is a PyTorch "),es=r("a"),ap=n("torch.nn.Module"),ip=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lp=h(),We=r("div"),T(ts.$$.fragment),dp=h(),Dt=r("p"),cp=n("The "),pr=r("a"),pp=n("ConvBertForTokenClassification"),hp=n(" forward method, overrides the "),Ta=r("code"),mp=n("__call__"),fp=n(" special method."),up=h(),T(Bo.$$.fragment),gp=h(),T(Eo.$$.fragment),_p=h(),T(Mo.$$.fragment),Ii=h(),Lt=r("h2"),zo=r("a"),$a=r("span"),T(os.$$.fragment),vp=h(),wa=r("span"),bp=n("ConvBertForQuestionAnswering"),Ri=h(),et=r("div"),T(ns.$$.fragment),kp=h(),St=r("p"),Tp=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ya=r("code"),$p=n("span start logits"),wp=n(" and "),Ca=r("code"),yp=n("span end logits"),Cp=n(")."),Fp=h(),ss=r("p"),Bp=n("This model is a PyTorch "),rs=r("a"),Ep=n("torch.nn.Module"),Mp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zp=h(),Ue=r("div"),T(as.$$.fragment),jp=h(),It=r("p"),qp=n("The "),hr=r("a"),xp=n("ConvBertForQuestionAnswering"),Pp=n(" forward method, overrides the "),Fa=r("code"),Np=n("__call__"),Ap=n(" special method."),Op=h(),T(jo.$$.fragment),Dp=h(),T(qo.$$.fragment),Lp=h(),T(xo.$$.fragment),Wi=h(),Rt=r("h2"),Po=r("a"),Ba=r("span"),T(is.$$.fragment),Sp=h(),Ea=r("span"),Ip=n("TFConvBertModel"),Ui=h(),Pe=r("div"),T(ls.$$.fragment),Rp=h(),Ma=r("p"),Wp=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Up=h(),ds=r("p"),Yp=n("This model inherits from "),mr=r("a"),Hp=n("TFPreTrainedModel"),Qp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=h(),cs=r("p"),Kp=n("This model is also a "),ps=r("a"),Jp=n("tf.keras.Model"),Gp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zp=h(),T(No.$$.fragment),Xp=h(),rt=r("div"),T(hs.$$.fragment),eh=h(),Wt=r("p"),th=n("The "),fr=r("a"),oh=n("TFConvBertModel"),nh=n(" forward method, overrides the "),za=r("code"),sh=n("__call__"),rh=n(" special method."),ah=h(),T(Ao.$$.fragment),ih=h(),T(Oo.$$.fragment),Yi=h(),Ut=r("h2"),Do=r("a"),ja=r("span"),T(ms.$$.fragment),lh=h(),qa=r("span"),dh=n("TFConvBertForMaskedLM"),Hi=h(),Ne=r("div"),T(fs.$$.fragment),ch=h(),us=r("p"),ph=n("ConvBERT Model with a "),xa=r("code"),hh=n("language modeling"),mh=n(" head on top."),fh=h(),gs=r("p"),uh=n("This model inherits from "),ur=r("a"),gh=n("TFPreTrainedModel"),_h=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vh=h(),_s=r("p"),bh=n("This model is also a "),vs=r("a"),kh=n("tf.keras.Model"),Th=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h=h(),T(Lo.$$.fragment),wh=h(),Ye=r("div"),T(bs.$$.fragment),yh=h(),Yt=r("p"),Ch=n("The "),gr=r("a"),Fh=n("TFConvBertForMaskedLM"),Bh=n(" forward method, overrides the "),Pa=r("code"),Eh=n("__call__"),Mh=n(" special method."),zh=h(),T(So.$$.fragment),jh=h(),T(Io.$$.fragment),qh=h(),T(Ro.$$.fragment),Qi=h(),Ht=r("h2"),Wo=r("a"),Na=r("span"),T(ks.$$.fragment),xh=h(),Aa=r("span"),Ph=n("TFConvBertForSequenceClassification"),Vi=h(),Ae=r("div"),T(Ts.$$.fragment),Nh=h(),Oa=r("p"),Ah=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Oh=h(),$s=r("p"),Dh=n("This model inherits from "),_r=r("a"),Lh=n("TFPreTrainedModel"),Sh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=h(),ws=r("p"),Rh=n("This model is also a "),ys=r("a"),Wh=n("tf.keras.Model"),Uh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh=h(),T(Uo.$$.fragment),Hh=h(),He=r("div"),T(Cs.$$.fragment),Qh=h(),Qt=r("p"),Vh=n("The "),vr=r("a"),Kh=n("TFConvBertForSequenceClassification"),Jh=n(" forward method, overrides the "),Da=r("code"),Gh=n("__call__"),Zh=n(" special method."),Xh=h(),T(Yo.$$.fragment),em=h(),T(Ho.$$.fragment),tm=h(),T(Qo.$$.fragment),Ki=h(),Vt=r("h2"),Vo=r("a"),La=r("span"),T(Fs.$$.fragment),om=h(),Sa=r("span"),nm=n("TFConvBertForMultipleChoice"),Ji=h(),Oe=r("div"),T(Bs.$$.fragment),sm=h(),Ia=r("p"),rm=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),am=h(),Es=r("p"),im=n("This model inherits from "),br=r("a"),lm=n("TFPreTrainedModel"),dm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cm=h(),Ms=r("p"),pm=n("This model is also a "),zs=r("a"),hm=n("tf.keras.Model"),mm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fm=h(),T(Ko.$$.fragment),um=h(),at=r("div"),T(js.$$.fragment),gm=h(),Kt=r("p"),_m=n("The "),kr=r("a"),vm=n("TFConvBertForMultipleChoice"),bm=n(" forward method, overrides the "),Ra=r("code"),km=n("__call__"),Tm=n(" special method."),$m=h(),T(Jo.$$.fragment),wm=h(),T(Go.$$.fragment),Gi=h(),Jt=r("h2"),Zo=r("a"),Wa=r("span"),T(qs.$$.fragment),ym=h(),Ua=r("span"),Cm=n("TFConvBertForTokenClassification"),Zi=h(),De=r("div"),T(xs.$$.fragment),Fm=h(),Ya=r("p"),Bm=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Em=h(),Ps=r("p"),Mm=n("This model inherits from "),Tr=r("a"),zm=n("TFPreTrainedModel"),jm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qm=h(),Ns=r("p"),xm=n("This model is also a "),As=r("a"),Pm=n("tf.keras.Model"),Nm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Am=h(),T(Xo.$$.fragment),Om=h(),Qe=r("div"),T(Os.$$.fragment),Dm=h(),Gt=r("p"),Lm=n("The "),$r=r("a"),Sm=n("TFConvBertForTokenClassification"),Im=n(" forward method, overrides the "),Ha=r("code"),Rm=n("__call__"),Wm=n(" special method."),Um=h(),T(en.$$.fragment),Ym=h(),T(tn.$$.fragment),Hm=h(),T(on.$$.fragment),Xi=h(),Zt=r("h2"),nn=r("a"),Qa=r("span"),T(Ds.$$.fragment),Qm=h(),Va=r("span"),Vm=n("TFConvBertForQuestionAnswering"),el=h(),Le=r("div"),T(Ls.$$.fragment),Km=h(),Xt=r("p"),Jm=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ka=r("code"),Gm=n("span start logits"),Zm=n(" and "),Ja=r("code"),Xm=n("span end logits"),ef=n(")."),tf=h(),Ss=r("p"),of=n("This model inherits from "),wr=r("a"),nf=n("TFPreTrainedModel"),sf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=h(),Is=r("p"),af=n("This model is also a "),Rs=r("a"),lf=n("tf.keras.Model"),df=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=h(),T(sn.$$.fragment),pf=h(),Ve=r("div"),T(Ws.$$.fragment),hf=h(),eo=r("p"),mf=n("The "),yr=r("a"),ff=n("TFConvBertForQuestionAnswering"),uf=n(" forward method, overrides the "),Ga=r("code"),gf=n("__call__"),_f=n(" special method."),vf=h(),T(rn.$$.fragment),bf=h(),T(an.$$.fragment),kf=h(),T(ln.$$.fragment),this.h()},l(o){const b=kg('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=a(o,"H1",{class:!0});var Us=i(c);p=a(Us,"A",{id:!0,class:!0,href:!0});var Za=i(p);v=a(Za,"SPAN",{});var Xa=i(v);$(l.$$.fragment,Xa),Xa.forEach(t),Za.forEach(t),f=m(Us),M=a(Us,"SPAN",{});var ei=i(M);de=s(ei,"ConvBERT"),ei.forEach(t),Us.forEach(t),K=m(o),z=a(o,"H2",{class:!0});var Ys=i(z);X=a(Ys,"A",{id:!0,class:!0,href:!0});var ti=i(X);S=a(ti,"SPAN",{});var oi=i(S);$(ee.$$.fragment,oi),oi.forEach(t),ti.forEach(t),ce=m(Ys),I=a(Ys,"SPAN",{});var ni=i(I);pe=s(ni,"Overview"),ni.forEach(t),Ys.forEach(t),ae=m(o),Q=a(o,"P",{});var Hs=i(Q);A=s(Hs,"The ConvBERT model was proposed in "),te=a(Hs,"A",{href:!0,rel:!0});var si=i(te);J=s(si,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),si.forEach(t),j=s(Hs,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),Hs.forEach(t),x=m(o),ne=a(o,"P",{});var ri=i(ne);Y=s(ri,"The abstract from the paper is the following:"),ri.forEach(t),ie=m(o),se=a(o,"P",{});var ai=i(se);R=a(ai,"EM",{});var ii=i(R);he=s(ii,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),ii.forEach(t),ai.forEach(t),le=m(o),q=a(o,"P",{});var li=i(q);me=s(li,"ConvBERT training tips are similar to those of BERT."),li.forEach(t),W=m(o),G=a(o,"P",{});var dn=i(G);fe=s(dn,"This model was contributed by "),L=a(dn,"A",{href:!0,rel:!0});var di=i(L);ue=s(di,"abhishek"),di.forEach(t),ge=s(dn,`. The original implementation can be found
here: `),P=a(dn,"A",{href:!0,rel:!0});var ci=i(P);_e=s(ci,"https://github.com/yitu-opensource/ConvBert"),ci.forEach(t),dn.forEach(t),U=m(o),Z=a(o,"H2",{class:!0});var Qs=i(Z);u=a(Qs,"A",{id:!0,class:!0,href:!0});var pi=i(u);E=a(pi,"SPAN",{});var hi=i(E);$(V.$$.fragment,hi),hi.forEach(t),pi.forEach(t),Be=m(Qs),Ce=a(Qs,"SPAN",{});var mi=i(Ce);O=s(mi,"ConvBertConfig"),mi.forEach(t),Qs.forEach(t),Fe=m(o),re=a(o,"DIV",{class:!0});var to=i(re);$(be.$$.fragment,to),D=m(to),N=a(to,"P",{});var tt=i(N);Ee=s(tt,"This is the configuration class to store the configuration of a "),Te=a(tt,"A",{href:!0});var fi=i(Te);H=s(fi,"ConvBertModel"),fi.forEach(t),Me=s(tt,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=a(tt,"A",{href:!0,rel:!0});var ui=i(ke);ve=s(ui,"conv-bert-base"),ui.forEach(t),ze=s(tt,` architecture. Configuration objects inherit from
`),Js=a(tt,"A",{href:!0});var gi=i(Js);Ol=s(gi,"PretrainedConfig"),gi.forEach(t),Dl=s(tt," and can be used to control the model outputs. Read the documentation from "),Gs=a(tt,"A",{href:!0});var _i=i(Gs);Ll=s(_i,"PretrainedConfig"),_i.forEach(t),Sl=s(tt,`
for more information.`),tt.forEach(t),Il=m(to),$(no.$$.fragment,to),to.forEach(t),Bi=m(o),Ct=a(o,"H2",{class:!0});var Vs=i(Ct);so=a(Vs,"A",{id:!0,class:!0,href:!0});var vi=i(so);Yr=a(vi,"SPAN",{});var bi=i(Yr);$(kn.$$.fragment,bi),bi.forEach(t),vi.forEach(t),Rl=m(Vs),Hr=a(Vs,"SPAN",{});var ki=i(Hr);Wl=s(ki,"ConvBertTokenizer"),ki.forEach(t),Vs.forEach(t),Ei=m(o),xe=a(o,"DIV",{class:!0});var Ie=i(xe);$(Tn.$$.fragment,Ie),Ul=m(Ie),mt=a(Ie,"P",{});var gt=i(mt);Yl=s(gt,"Construct a ConvBERT tokenizer. "),Zs=a(gt,"A",{href:!0});var Ti=i(Zs);Hl=s(Ti,"ConvBertTokenizer"),Ti.forEach(t),Ql=s(gt," is identical to "),Xs=a(gt,"A",{href:!0});var $i=i(Xs);Vl=s($i,"BertTokenizer"),$i.forEach(t),Kl=s(gt,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),er=a(gt,"A",{href:!0});var wi=i(er);Jl=s(wi,"BertTokenizer"),wi.forEach(t),Gl=s(gt,` for usage examples and
documentation concerning parameters.`),gt.forEach(t),Zl=m(Ie),_t=a(Ie,"DIV",{class:!0});var oo=i(_t);$($n.$$.fragment,oo),Xl=m(oo),Qr=a(oo,"P",{});var yi=i(Qr);ed=s(yi,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),yi.forEach(t),td=m(oo),wn=a(oo,"UL",{});var Ks=i(wn);tr=a(Ks,"LI",{});var Cr=i(tr);od=s(Cr,"single sequence: "),Vr=a(Cr,"CODE",{});var Ci=i(Vr);nd=s(Ci,"[CLS] X [SEP]"),Ci.forEach(t),Cr.forEach(t),sd=m(Ks),or=a(Ks,"LI",{});var Fr=i(or);rd=s(Fr,"pair of sequences: "),Kr=a(Fr,"CODE",{});var Tf=i(Kr);ad=s(Tf,"[CLS] A [SEP] B [SEP]"),Tf.forEach(t),Fr.forEach(t),Ks.forEach(t),oo.forEach(t),id=m(Ie),ro=a(Ie,"DIV",{class:!0});var ol=i(ro);$(yn.$$.fragment,ol),ld=m(ol),Cn=a(ol,"P",{});var nl=i(Cn);dd=s(nl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=a(nl,"CODE",{});var $f=i(Jr);cd=s($f,"prepare_for_model"),$f.forEach(t),pd=s(nl," method."),nl.forEach(t),ol.forEach(t),hd=m(Ie),ot=a(Ie,"DIV",{class:!0});var cn=i(ot);$(Fn.$$.fragment,cn),md=m(cn),Gr=a(cn,"P",{});var wf=i(Gr);fd=s(wf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),wf.forEach(t),ud=m(cn),$(ao.$$.fragment,cn),gd=m(cn),Ft=a(cn,"P",{});var Br=i(Ft);_d=s(Br,"If "),Zr=a(Br,"CODE",{});var yf=i(Zr);vd=s(yf,"token_ids_1"),yf.forEach(t),bd=s(Br," is "),Xr=a(Br,"CODE",{});var Cf=i(Xr);kd=s(Cf,"None"),Cf.forEach(t),Td=s(Br,", this method only returns the first portion of the mask (0s)."),Br.forEach(t),cn.forEach(t),$d=m(Ie),nr=a(Ie,"DIV",{class:!0});var Ff=i(nr);$(Bn.$$.fragment,Ff),Ff.forEach(t),Ie.forEach(t),Mi=m(o),Bt=a(o,"H2",{class:!0});var sl=i(Bt);io=a(sl,"A",{id:!0,class:!0,href:!0});var Bf=i(io);ea=a(Bf,"SPAN",{});var Ef=i(ea);$(En.$$.fragment,Ef),Ef.forEach(t),Bf.forEach(t),wd=m(sl),ta=a(sl,"SPAN",{});var Mf=i(ta);yd=s(Mf,"ConvBertTokenizerFast"),Mf.forEach(t),sl.forEach(t),zi=m(o),Je=a(o,"DIV",{class:!0});var pn=i(Je);$(Mn.$$.fragment,pn),Cd=m(pn),zn=a(pn,"P",{});var rl=i(zn);Fd=s(rl,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),oa=a(rl,"EM",{});var zf=i(oa);Bd=s(zf,"tokenizers"),zf.forEach(t),Ed=s(rl," library)."),rl.forEach(t),Md=m(pn),lo=a(pn,"P",{});var Fi=i(lo);sr=a(Fi,"A",{href:!0});var jf=i(sr);zd=s(jf,"ConvBertTokenizerFast"),jf.forEach(t),jd=s(Fi," is identical to "),rr=a(Fi,"A",{href:!0});var qf=i(rr);qd=s(qf,"BertTokenizerFast"),qf.forEach(t),xd=s(Fi,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Fi.forEach(t),Pd=m(pn),jn=a(pn,"P",{});var al=i(jn);Nd=s(al,"Refer to superclass "),ar=a(al,"A",{href:!0});var xf=i(ar);Ad=s(xf,"BertTokenizerFast"),xf.forEach(t),Od=s(al," for usage examples and documentation concerning parameters."),al.forEach(t),pn.forEach(t),ji=m(o),Et=a(o,"H2",{class:!0});var il=i(Et);co=a(il,"A",{id:!0,class:!0,href:!0});var Pf=i(co);na=a(Pf,"SPAN",{});var Nf=i(na);$(qn.$$.fragment,Nf),Nf.forEach(t),Pf.forEach(t),Dd=m(il),sa=a(il,"SPAN",{});var Af=i(sa);Ld=s(Af,"ConvBertModel"),Af.forEach(t),il.forEach(t),qi=m(o),ft=a(o,"DIV",{class:!0});var Er=i(ft);$(xn.$$.fragment,Er),Sd=m(Er),Pn=a(Er,"P",{});var ll=i(Pn);Id=s(ll,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Nn=a(ll,"A",{href:!0,rel:!0});var Of=i(Nn);Rd=s(Of,"torch.nn.Module"),Of.forEach(t),Wd=s(ll,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ll.forEach(t),Ud=m(Er),nt=a(Er,"DIV",{class:!0});var hn=i(nt);$(An.$$.fragment,hn),Yd=m(hn),Mt=a(hn,"P",{});var Mr=i(Mt);Hd=s(Mr,"The "),ir=a(Mr,"A",{href:!0});var Df=i(ir);Qd=s(Df,"ConvBertModel"),Df.forEach(t),Vd=s(Mr," forward method, overrides the "),ra=a(Mr,"CODE",{});var Lf=i(ra);Kd=s(Lf,"__call__"),Lf.forEach(t),Jd=s(Mr," special method."),Mr.forEach(t),Gd=m(hn),$(po.$$.fragment,hn),Zd=m(hn),$(ho.$$.fragment,hn),hn.forEach(t),Er.forEach(t),xi=m(o),zt=a(o,"H2",{class:!0});var dl=i(zt);mo=a(dl,"A",{id:!0,class:!0,href:!0});var Sf=i(mo);aa=a(Sf,"SPAN",{});var If=i(aa);$(On.$$.fragment,If),If.forEach(t),Sf.forEach(t),Xd=m(dl),ia=a(dl,"SPAN",{});var Rf=i(ia);ec=s(Rf,"ConvBertForMaskedLM"),Rf.forEach(t),dl.forEach(t),Pi=m(o),ut=a(o,"DIV",{class:!0});var zr=i(ut);$(Dn.$$.fragment,zr),tc=m(zr),jt=a(zr,"P",{});var jr=i(jt);oc=s(jr,"ConvBERT Model with a "),la=a(jr,"CODE",{});var Wf=i(la);nc=s(Wf,"language modeling"),Wf.forEach(t),sc=s(jr,` head on top.
This model is a PyTorch `),Ln=a(jr,"A",{href:!0,rel:!0});var Uf=i(Ln);rc=s(Uf,"torch.nn.Module"),Uf.forEach(t),ac=s(jr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jr.forEach(t),ic=m(zr),Re=a(zr,"DIV",{class:!0});var vt=i(Re);$(Sn.$$.fragment,vt),lc=m(vt),qt=a(vt,"P",{});var qr=i(qt);dc=s(qr,"The "),lr=a(qr,"A",{href:!0});var Yf=i(lr);cc=s(Yf,"ConvBertForMaskedLM"),Yf.forEach(t),pc=s(qr," forward method, overrides the "),da=a(qr,"CODE",{});var Hf=i(da);hc=s(Hf,"__call__"),Hf.forEach(t),mc=s(qr," special method."),qr.forEach(t),fc=m(vt),$(fo.$$.fragment,vt),uc=m(vt),$(uo.$$.fragment,vt),gc=m(vt),$(go.$$.fragment,vt),vt.forEach(t),zr.forEach(t),Ni=m(o),xt=a(o,"H2",{class:!0});var cl=i(xt);_o=a(cl,"A",{id:!0,class:!0,href:!0});var Qf=i(_o);ca=a(Qf,"SPAN",{});var Vf=i(ca);$(In.$$.fragment,Vf),Vf.forEach(t),Qf.forEach(t),_c=m(cl),pa=a(cl,"SPAN",{});var Kf=i(pa);vc=s(Kf,"ConvBertForSequenceClassification"),Kf.forEach(t),cl.forEach(t),Ai=m(o),Ge=a(o,"DIV",{class:!0});var mn=i(Ge);$(Rn.$$.fragment,mn),bc=m(mn),ha=a(mn,"P",{});var Jf=i(ha);kc=s(Jf,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jf.forEach(t),Tc=m(mn),Wn=a(mn,"P",{});var pl=i(Wn);$c=s(pl,"This model is a PyTorch "),Un=a(pl,"A",{href:!0,rel:!0});var Gf=i(Un);wc=s(Gf,"torch.nn.Module"),Gf.forEach(t),yc=s(pl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl.forEach(t),Cc=m(mn),je=a(mn,"DIV",{class:!0});var Ke=i(je);$(Yn.$$.fragment,Ke),Fc=m(Ke),Pt=a(Ke,"P",{});var xr=i(Pt);Bc=s(xr,"The "),dr=a(xr,"A",{href:!0});var Zf=i(dr);Ec=s(Zf,"ConvBertForSequenceClassification"),Zf.forEach(t),Mc=s(xr," forward method, overrides the "),ma=a(xr,"CODE",{});var Xf=i(ma);zc=s(Xf,"__call__"),Xf.forEach(t),jc=s(xr," special method."),xr.forEach(t),qc=m(Ke),$(vo.$$.fragment,Ke),xc=m(Ke),$(bo.$$.fragment,Ke),Pc=m(Ke),$(ko.$$.fragment,Ke),Nc=m(Ke),$(To.$$.fragment,Ke),Ac=m(Ke),$($o.$$.fragment,Ke),Ke.forEach(t),mn.forEach(t),Oi=m(o),Nt=a(o,"H2",{class:!0});var hl=i(Nt);wo=a(hl,"A",{id:!0,class:!0,href:!0});var eu=i(wo);fa=a(eu,"SPAN",{});var tu=i(fa);$(Hn.$$.fragment,tu),tu.forEach(t),eu.forEach(t),Oc=m(hl),ua=a(hl,"SPAN",{});var ou=i(ua);Dc=s(ou,"ConvBertForMultipleChoice"),ou.forEach(t),hl.forEach(t),Di=m(o),Ze=a(o,"DIV",{class:!0});var fn=i(Ze);$(Qn.$$.fragment,fn),Lc=m(fn),ga=a(fn,"P",{});var nu=i(ga);Sc=s(nu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),nu.forEach(t),Ic=m(fn),Vn=a(fn,"P",{});var ml=i(Vn);Rc=s(ml,"This model is a PyTorch "),Kn=a(ml,"A",{href:!0,rel:!0});var su=i(Kn);Wc=s(su,"torch.nn.Module"),su.forEach(t),Uc=s(ml,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml.forEach(t),Yc=m(fn),st=a(fn,"DIV",{class:!0});var un=i(st);$(Jn.$$.fragment,un),Hc=m(un),At=a(un,"P",{});var Pr=i(At);Qc=s(Pr,"The "),cr=a(Pr,"A",{href:!0});var ru=i(cr);Vc=s(ru,"ConvBertForMultipleChoice"),ru.forEach(t),Kc=s(Pr," forward method, overrides the "),_a=a(Pr,"CODE",{});var au=i(_a);Jc=s(au,"__call__"),au.forEach(t),Gc=s(Pr," special method."),Pr.forEach(t),Zc=m(un),$(yo.$$.fragment,un),Xc=m(un),$(Co.$$.fragment,un),un.forEach(t),fn.forEach(t),Li=m(o),Ot=a(o,"H2",{class:!0});var fl=i(Ot);Fo=a(fl,"A",{id:!0,class:!0,href:!0});var iu=i(Fo);va=a(iu,"SPAN",{});var lu=i(va);$(Gn.$$.fragment,lu),lu.forEach(t),iu.forEach(t),ep=m(fl),ba=a(fl,"SPAN",{});var du=i(ba);tp=s(du,"ConvBertForTokenClassification"),du.forEach(t),fl.forEach(t),Si=m(o),Xe=a(o,"DIV",{class:!0});var gn=i(Xe);$(Zn.$$.fragment,gn),op=m(gn),ka=a(gn,"P",{});var cu=i(ka);np=s(cu,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cu.forEach(t),sp=m(gn),Xn=a(gn,"P",{});var ul=i(Xn);rp=s(ul,"This model is a PyTorch "),es=a(ul,"A",{href:!0,rel:!0});var pu=i(es);ap=s(pu,"torch.nn.Module"),pu.forEach(t),ip=s(ul,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul.forEach(t),lp=m(gn),We=a(gn,"DIV",{class:!0});var bt=i(We);$(ts.$$.fragment,bt),dp=m(bt),Dt=a(bt,"P",{});var Nr=i(Dt);cp=s(Nr,"The "),pr=a(Nr,"A",{href:!0});var hu=i(pr);pp=s(hu,"ConvBertForTokenClassification"),hu.forEach(t),hp=s(Nr," forward method, overrides the "),Ta=a(Nr,"CODE",{});var mu=i(Ta);mp=s(mu,"__call__"),mu.forEach(t),fp=s(Nr," special method."),Nr.forEach(t),up=m(bt),$(Bo.$$.fragment,bt),gp=m(bt),$(Eo.$$.fragment,bt),_p=m(bt),$(Mo.$$.fragment,bt),bt.forEach(t),gn.forEach(t),Ii=m(o),Lt=a(o,"H2",{class:!0});var gl=i(Lt);zo=a(gl,"A",{id:!0,class:!0,href:!0});var fu=i(zo);$a=a(fu,"SPAN",{});var uu=i($a);$(os.$$.fragment,uu),uu.forEach(t),fu.forEach(t),vp=m(gl),wa=a(gl,"SPAN",{});var gu=i(wa);bp=s(gu,"ConvBertForQuestionAnswering"),gu.forEach(t),gl.forEach(t),Ri=m(o),et=a(o,"DIV",{class:!0});var _n=i(et);$(ns.$$.fragment,_n),kp=m(_n),St=a(_n,"P",{});var Ar=i(St);Tp=s(Ar,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ya=a(Ar,"CODE",{});var _u=i(ya);$p=s(_u,"span start logits"),_u.forEach(t),wp=s(Ar," and "),Ca=a(Ar,"CODE",{});var vu=i(Ca);yp=s(vu,"span end logits"),vu.forEach(t),Cp=s(Ar,")."),Ar.forEach(t),Fp=m(_n),ss=a(_n,"P",{});var _l=i(ss);Bp=s(_l,"This model is a PyTorch "),rs=a(_l,"A",{href:!0,rel:!0});var bu=i(rs);Ep=s(bu,"torch.nn.Module"),bu.forEach(t),Mp=s(_l,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l.forEach(t),zp=m(_n),Ue=a(_n,"DIV",{class:!0});var kt=i(Ue);$(as.$$.fragment,kt),jp=m(kt),It=a(kt,"P",{});var Or=i(It);qp=s(Or,"The "),hr=a(Or,"A",{href:!0});var ku=i(hr);xp=s(ku,"ConvBertForQuestionAnswering"),ku.forEach(t),Pp=s(Or," forward method, overrides the "),Fa=a(Or,"CODE",{});var Tu=i(Fa);Np=s(Tu,"__call__"),Tu.forEach(t),Ap=s(Or," special method."),Or.forEach(t),Op=m(kt),$(jo.$$.fragment,kt),Dp=m(kt),$(qo.$$.fragment,kt),Lp=m(kt),$(xo.$$.fragment,kt),kt.forEach(t),_n.forEach(t),Wi=m(o),Rt=a(o,"H2",{class:!0});var vl=i(Rt);Po=a(vl,"A",{id:!0,class:!0,href:!0});var $u=i(Po);Ba=a($u,"SPAN",{});var wu=i(Ba);$(is.$$.fragment,wu),wu.forEach(t),$u.forEach(t),Sp=m(vl),Ea=a(vl,"SPAN",{});var yu=i(Ea);Ip=s(yu,"TFConvBertModel"),yu.forEach(t),vl.forEach(t),Ui=m(o),Pe=a(o,"DIV",{class:!0});var it=i(Pe);$(ls.$$.fragment,it),Rp=m(it),Ma=a(it,"P",{});var Cu=i(Ma);Wp=s(Cu,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Cu.forEach(t),Up=m(it),ds=a(it,"P",{});var bl=i(ds);Yp=s(bl,"This model inherits from "),mr=a(bl,"A",{href:!0});var Fu=i(mr);Hp=s(Fu,"TFPreTrainedModel"),Fu.forEach(t),Qp=s(bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl.forEach(t),Vp=m(it),cs=a(it,"P",{});var kl=i(cs);Kp=s(kl,"This model is also a "),ps=a(kl,"A",{href:!0,rel:!0});var Bu=i(ps);Jp=s(Bu,"tf.keras.Model"),Bu.forEach(t),Gp=s(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),Zp=m(it),$(No.$$.fragment,it),Xp=m(it),rt=a(it,"DIV",{class:!0});var vn=i(rt);$(hs.$$.fragment,vn),eh=m(vn),Wt=a(vn,"P",{});var Dr=i(Wt);th=s(Dr,"The "),fr=a(Dr,"A",{href:!0});var Eu=i(fr);oh=s(Eu,"TFConvBertModel"),Eu.forEach(t),nh=s(Dr," forward method, overrides the "),za=a(Dr,"CODE",{});var Mu=i(za);sh=s(Mu,"__call__"),Mu.forEach(t),rh=s(Dr," special method."),Dr.forEach(t),ah=m(vn),$(Ao.$$.fragment,vn),ih=m(vn),$(Oo.$$.fragment,vn),vn.forEach(t),it.forEach(t),Yi=m(o),Ut=a(o,"H2",{class:!0});var Tl=i(Ut);Do=a(Tl,"A",{id:!0,class:!0,href:!0});var zu=i(Do);ja=a(zu,"SPAN",{});var ju=i(ja);$(ms.$$.fragment,ju),ju.forEach(t),zu.forEach(t),lh=m(Tl),qa=a(Tl,"SPAN",{});var qu=i(qa);dh=s(qu,"TFConvBertForMaskedLM"),qu.forEach(t),Tl.forEach(t),Hi=m(o),Ne=a(o,"DIV",{class:!0});var lt=i(Ne);$(fs.$$.fragment,lt),ch=m(lt),us=a(lt,"P",{});var $l=i(us);ph=s($l,"ConvBERT Model with a "),xa=a($l,"CODE",{});var xu=i(xa);hh=s(xu,"language modeling"),xu.forEach(t),mh=s($l," head on top."),$l.forEach(t),fh=m(lt),gs=a(lt,"P",{});var wl=i(gs);uh=s(wl,"This model inherits from "),ur=a(wl,"A",{href:!0});var Pu=i(ur);gh=s(Pu,"TFPreTrainedModel"),Pu.forEach(t),_h=s(wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl.forEach(t),vh=m(lt),_s=a(lt,"P",{});var yl=i(_s);bh=s(yl,"This model is also a "),vs=a(yl,"A",{href:!0,rel:!0});var Nu=i(vs);kh=s(Nu,"tf.keras.Model"),Nu.forEach(t),Th=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),$h=m(lt),$(Lo.$$.fragment,lt),wh=m(lt),Ye=a(lt,"DIV",{class:!0});var Tt=i(Ye);$(bs.$$.fragment,Tt),yh=m(Tt),Yt=a(Tt,"P",{});var Lr=i(Yt);Ch=s(Lr,"The "),gr=a(Lr,"A",{href:!0});var Au=i(gr);Fh=s(Au,"TFConvBertForMaskedLM"),Au.forEach(t),Bh=s(Lr," forward method, overrides the "),Pa=a(Lr,"CODE",{});var Ou=i(Pa);Eh=s(Ou,"__call__"),Ou.forEach(t),Mh=s(Lr," special method."),Lr.forEach(t),zh=m(Tt),$(So.$$.fragment,Tt),jh=m(Tt),$(Io.$$.fragment,Tt),qh=m(Tt),$(Ro.$$.fragment,Tt),Tt.forEach(t),lt.forEach(t),Qi=m(o),Ht=a(o,"H2",{class:!0});var Cl=i(Ht);Wo=a(Cl,"A",{id:!0,class:!0,href:!0});var Du=i(Wo);Na=a(Du,"SPAN",{});var Lu=i(Na);$(ks.$$.fragment,Lu),Lu.forEach(t),Du.forEach(t),xh=m(Cl),Aa=a(Cl,"SPAN",{});var Su=i(Aa);Ph=s(Su,"TFConvBertForSequenceClassification"),Su.forEach(t),Cl.forEach(t),Vi=m(o),Ae=a(o,"DIV",{class:!0});var dt=i(Ae);$(Ts.$$.fragment,dt),Nh=m(dt),Oa=a(dt,"P",{});var Iu=i(Oa);Ah=s(Iu,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Iu.forEach(t),Oh=m(dt),$s=a(dt,"P",{});var Fl=i($s);Dh=s(Fl,"This model inherits from "),_r=a(Fl,"A",{href:!0});var Ru=i(_r);Lh=s(Ru,"TFPreTrainedModel"),Ru.forEach(t),Sh=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),Ih=m(dt),ws=a(dt,"P",{});var Bl=i(ws);Rh=s(Bl,"This model is also a "),ys=a(Bl,"A",{href:!0,rel:!0});var Wu=i(ys);Wh=s(Wu,"tf.keras.Model"),Wu.forEach(t),Uh=s(Bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bl.forEach(t),Yh=m(dt),$(Uo.$$.fragment,dt),Hh=m(dt),He=a(dt,"DIV",{class:!0});var $t=i(He);$(Cs.$$.fragment,$t),Qh=m($t),Qt=a($t,"P",{});var Sr=i(Qt);Vh=s(Sr,"The "),vr=a(Sr,"A",{href:!0});var Uu=i(vr);Kh=s(Uu,"TFConvBertForSequenceClassification"),Uu.forEach(t),Jh=s(Sr," forward method, overrides the "),Da=a(Sr,"CODE",{});var Yu=i(Da);Gh=s(Yu,"__call__"),Yu.forEach(t),Zh=s(Sr," special method."),Sr.forEach(t),Xh=m($t),$(Yo.$$.fragment,$t),em=m($t),$(Ho.$$.fragment,$t),tm=m($t),$(Qo.$$.fragment,$t),$t.forEach(t),dt.forEach(t),Ki=m(o),Vt=a(o,"H2",{class:!0});var El=i(Vt);Vo=a(El,"A",{id:!0,class:!0,href:!0});var Hu=i(Vo);La=a(Hu,"SPAN",{});var Qu=i(La);$(Fs.$$.fragment,Qu),Qu.forEach(t),Hu.forEach(t),om=m(El),Sa=a(El,"SPAN",{});var Vu=i(Sa);nm=s(Vu,"TFConvBertForMultipleChoice"),Vu.forEach(t),El.forEach(t),Ji=m(o),Oe=a(o,"DIV",{class:!0});var ct=i(Oe);$(Bs.$$.fragment,ct),sm=m(ct),Ia=a(ct,"P",{});var Ku=i(Ia);rm=s(Ku,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ku.forEach(t),am=m(ct),Es=a(ct,"P",{});var Ml=i(Es);im=s(Ml,"This model inherits from "),br=a(Ml,"A",{href:!0});var Ju=i(br);lm=s(Ju,"TFPreTrainedModel"),Ju.forEach(t),dm=s(Ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml.forEach(t),cm=m(ct),Ms=a(ct,"P",{});var zl=i(Ms);pm=s(zl,"This model is also a "),zs=a(zl,"A",{href:!0,rel:!0});var Gu=i(zs);hm=s(Gu,"tf.keras.Model"),Gu.forEach(t),mm=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),fm=m(ct),$(Ko.$$.fragment,ct),um=m(ct),at=a(ct,"DIV",{class:!0});var bn=i(at);$(js.$$.fragment,bn),gm=m(bn),Kt=a(bn,"P",{});var Ir=i(Kt);_m=s(Ir,"The "),kr=a(Ir,"A",{href:!0});var Zu=i(kr);vm=s(Zu,"TFConvBertForMultipleChoice"),Zu.forEach(t),bm=s(Ir," forward method, overrides the "),Ra=a(Ir,"CODE",{});var Xu=i(Ra);km=s(Xu,"__call__"),Xu.forEach(t),Tm=s(Ir," special method."),Ir.forEach(t),$m=m(bn),$(Jo.$$.fragment,bn),wm=m(bn),$(Go.$$.fragment,bn),bn.forEach(t),ct.forEach(t),Gi=m(o),Jt=a(o,"H2",{class:!0});var jl=i(Jt);Zo=a(jl,"A",{id:!0,class:!0,href:!0});var eg=i(Zo);Wa=a(eg,"SPAN",{});var tg=i(Wa);$(qs.$$.fragment,tg),tg.forEach(t),eg.forEach(t),ym=m(jl),Ua=a(jl,"SPAN",{});var og=i(Ua);Cm=s(og,"TFConvBertForTokenClassification"),og.forEach(t),jl.forEach(t),Zi=m(o),De=a(o,"DIV",{class:!0});var pt=i(De);$(xs.$$.fragment,pt),Fm=m(pt),Ya=a(pt,"P",{});var ng=i(Ya);Bm=s(ng,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ng.forEach(t),Em=m(pt),Ps=a(pt,"P",{});var ql=i(Ps);Mm=s(ql,"This model inherits from "),Tr=a(ql,"A",{href:!0});var sg=i(Tr);zm=s(sg,"TFPreTrainedModel"),sg.forEach(t),jm=s(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),qm=m(pt),Ns=a(pt,"P",{});var xl=i(Ns);xm=s(xl,"This model is also a "),As=a(xl,"A",{href:!0,rel:!0});var rg=i(As);Pm=s(rg,"tf.keras.Model"),rg.forEach(t),Nm=s(xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xl.forEach(t),Am=m(pt),$(Xo.$$.fragment,pt),Om=m(pt),Qe=a(pt,"DIV",{class:!0});var wt=i(Qe);$(Os.$$.fragment,wt),Dm=m(wt),Gt=a(wt,"P",{});var Rr=i(Gt);Lm=s(Rr,"The "),$r=a(Rr,"A",{href:!0});var ag=i($r);Sm=s(ag,"TFConvBertForTokenClassification"),ag.forEach(t),Im=s(Rr," forward method, overrides the "),Ha=a(Rr,"CODE",{});var ig=i(Ha);Rm=s(ig,"__call__"),ig.forEach(t),Wm=s(Rr," special method."),Rr.forEach(t),Um=m(wt),$(en.$$.fragment,wt),Ym=m(wt),$(tn.$$.fragment,wt),Hm=m(wt),$(on.$$.fragment,wt),wt.forEach(t),pt.forEach(t),Xi=m(o),Zt=a(o,"H2",{class:!0});var Pl=i(Zt);nn=a(Pl,"A",{id:!0,class:!0,href:!0});var lg=i(nn);Qa=a(lg,"SPAN",{});var dg=i(Qa);$(Ds.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Qm=m(Pl),Va=a(Pl,"SPAN",{});var cg=i(Va);Vm=s(cg,"TFConvBertForQuestionAnswering"),cg.forEach(t),Pl.forEach(t),el=m(o),Le=a(o,"DIV",{class:!0});var ht=i(Le);$(Ls.$$.fragment,ht),Km=m(ht),Xt=a(ht,"P",{});var Wr=i(Xt);Jm=s(Wr,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ka=a(Wr,"CODE",{});var pg=i(Ka);Gm=s(pg,"span start logits"),pg.forEach(t),Zm=s(Wr," and "),Ja=a(Wr,"CODE",{});var hg=i(Ja);Xm=s(hg,"span end logits"),hg.forEach(t),ef=s(Wr,")."),Wr.forEach(t),tf=m(ht),Ss=a(ht,"P",{});var Nl=i(Ss);of=s(Nl,"This model inherits from "),wr=a(Nl,"A",{href:!0});var mg=i(wr);nf=s(mg,"TFPreTrainedModel"),mg.forEach(t),sf=s(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),rf=m(ht),Is=a(ht,"P",{});var Al=i(Is);af=s(Al,"This model is also a "),Rs=a(Al,"A",{href:!0,rel:!0});var fg=i(Rs);lf=s(fg,"tf.keras.Model"),fg.forEach(t),df=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),cf=m(ht),$(sn.$$.fragment,ht),pf=m(ht),Ve=a(ht,"DIV",{class:!0});var yt=i(Ve);$(Ws.$$.fragment,yt),hf=m(yt),eo=a(yt,"P",{});var Ur=i(eo);mf=s(Ur,"The "),yr=a(Ur,"A",{href:!0});var ug=i(yr);ff=s(ug,"TFConvBertForQuestionAnswering"),ug.forEach(t),uf=s(Ur," forward method, overrides the "),Ga=a(Ur,"CODE",{});var gg=i(Ga);gf=s(gg,"__call__"),gg.forEach(t),_f=s(Ur," special method."),Ur.forEach(t),vf=m(yt),$(rn.$$.fragment,yt),bf=m(yt),$(an.$$.fragment,yt),kf=m(yt),$(ln.$$.fragment,yt),yt.forEach(t),ht.forEach(t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(p_)),k(p,"id","convbert"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#convbert"),k(c,"class","relative group"),k(X,"id","overview"),k(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(X,"href","#overview"),k(z,"class","relative group"),k(te,"href","https://arxiv.org/abs/2008.02496"),k(te,"rel","nofollow"),k(L,"href","https://huggingface.co/abhishek"),k(L,"rel","nofollow"),k(P,"href","https://github.com/yitu-opensource/ConvBert"),k(P,"rel","nofollow"),k(u,"id","transformers.ConvBertConfig"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#transformers.ConvBertConfig"),k(Z,"class","relative group"),k(Te,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),k(ke,"rel","nofollow"),k(Js,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(Gs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(so,"id","transformers.ConvBertTokenizer"),k(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(so,"href","#transformers.ConvBertTokenizer"),k(Ct,"class","relative group"),k(Zs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer"),k(Xs,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(er,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(io,"id","transformers.ConvBertTokenizerFast"),k(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(io,"href","#transformers.ConvBertTokenizerFast"),k(Bt,"class","relative group"),k(sr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),k(rr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(ar,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(co,"id","transformers.ConvBertModel"),k(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(co,"href","#transformers.ConvBertModel"),k(Et,"class","relative group"),k(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Nn,"rel","nofollow"),k(ir,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(mo,"id","transformers.ConvBertForMaskedLM"),k(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(mo,"href","#transformers.ConvBertForMaskedLM"),k(zt,"class","relative group"),k(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ln,"rel","nofollow"),k(lr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),k(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(_o,"id","transformers.ConvBertForSequenceClassification"),k(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(_o,"href","#transformers.ConvBertForSequenceClassification"),k(xt,"class","relative group"),k(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Un,"rel","nofollow"),k(dr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),k(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wo,"id","transformers.ConvBertForMultipleChoice"),k(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(wo,"href","#transformers.ConvBertForMultipleChoice"),k(Nt,"class","relative group"),k(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Kn,"rel","nofollow"),k(cr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fo,"id","transformers.ConvBertForTokenClassification"),k(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Fo,"href","#transformers.ConvBertForTokenClassification"),k(Ot,"class","relative group"),k(es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(es,"rel","nofollow"),k(pr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(zo,"id","transformers.ConvBertForQuestionAnswering"),k(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(zo,"href","#transformers.ConvBertForQuestionAnswering"),k(Lt,"class","relative group"),k(rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(rs,"rel","nofollow"),k(hr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Po,"id","transformers.TFConvBertModel"),k(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Po,"href","#transformers.TFConvBertModel"),k(Rt,"class","relative group"),k(mr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ps,"rel","nofollow"),k(fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel"),k(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Do,"id","transformers.TFConvBertForMaskedLM"),k(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Do,"href","#transformers.TFConvBertForMaskedLM"),k(Ut,"class","relative group"),k(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(vs,"rel","nofollow"),k(gr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Wo,"id","transformers.TFConvBertForSequenceClassification"),k(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Wo,"href","#transformers.TFConvBertForSequenceClassification"),k(Ht,"class","relative group"),k(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ys,"rel","nofollow"),k(vr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Vo,"id","transformers.TFConvBertForMultipleChoice"),k(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Vo,"href","#transformers.TFConvBertForMultipleChoice"),k(Vt,"class","relative group"),k(br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(zs,"rel","nofollow"),k(kr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zo,"id","transformers.TFConvBertForTokenClassification"),k(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Zo,"href","#transformers.TFConvBertForTokenClassification"),k(Jt,"class","relative group"),k(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(As,"rel","nofollow"),k($r,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nn,"id","transformers.TFConvBertForQuestionAnswering"),k(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(nn,"href","#transformers.TFConvBertForQuestionAnswering"),k(Zt,"class","relative group"),k(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rs,"rel","nofollow"),k(yr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),k(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),_(o,g,b),_(o,c,b),e(c,p),e(p,v),w(l,v,null),e(c,f),e(c,M),e(M,de),_(o,K,b),_(o,z,b),e(z,X),e(X,S),w(ee,S,null),e(z,ce),e(z,I),e(I,pe),_(o,ae,b),_(o,Q,b),e(Q,A),e(Q,te),e(te,J),e(Q,j),_(o,x,b),_(o,ne,b),e(ne,Y),_(o,ie,b),_(o,se,b),e(se,R),e(R,he),_(o,le,b),_(o,q,b),e(q,me),_(o,W,b),_(o,G,b),e(G,fe),e(G,L),e(L,ue),e(G,ge),e(G,P),e(P,_e),_(o,U,b),_(o,Z,b),e(Z,u),e(u,E),w(V,E,null),e(Z,Be),e(Z,Ce),e(Ce,O),_(o,Fe,b),_(o,re,b),w(be,re,null),e(re,D),e(re,N),e(N,Ee),e(N,Te),e(Te,H),e(N,Me),e(N,ke),e(ke,ve),e(N,ze),e(N,Js),e(Js,Ol),e(N,Dl),e(N,Gs),e(Gs,Ll),e(N,Sl),e(re,Il),w(no,re,null),_(o,Bi,b),_(o,Ct,b),e(Ct,so),e(so,Yr),w(kn,Yr,null),e(Ct,Rl),e(Ct,Hr),e(Hr,Wl),_(o,Ei,b),_(o,xe,b),w(Tn,xe,null),e(xe,Ul),e(xe,mt),e(mt,Yl),e(mt,Zs),e(Zs,Hl),e(mt,Ql),e(mt,Xs),e(Xs,Vl),e(mt,Kl),e(mt,er),e(er,Jl),e(mt,Gl),e(xe,Zl),e(xe,_t),w($n,_t,null),e(_t,Xl),e(_t,Qr),e(Qr,ed),e(_t,td),e(_t,wn),e(wn,tr),e(tr,od),e(tr,Vr),e(Vr,nd),e(wn,sd),e(wn,or),e(or,rd),e(or,Kr),e(Kr,ad),e(xe,id),e(xe,ro),w(yn,ro,null),e(ro,ld),e(ro,Cn),e(Cn,dd),e(Cn,Jr),e(Jr,cd),e(Cn,pd),e(xe,hd),e(xe,ot),w(Fn,ot,null),e(ot,md),e(ot,Gr),e(Gr,fd),e(ot,ud),w(ao,ot,null),e(ot,gd),e(ot,Ft),e(Ft,_d),e(Ft,Zr),e(Zr,vd),e(Ft,bd),e(Ft,Xr),e(Xr,kd),e(Ft,Td),e(xe,$d),e(xe,nr),w(Bn,nr,null),_(o,Mi,b),_(o,Bt,b),e(Bt,io),e(io,ea),w(En,ea,null),e(Bt,wd),e(Bt,ta),e(ta,yd),_(o,zi,b),_(o,Je,b),w(Mn,Je,null),e(Je,Cd),e(Je,zn),e(zn,Fd),e(zn,oa),e(oa,Bd),e(zn,Ed),e(Je,Md),e(Je,lo),e(lo,sr),e(sr,zd),e(lo,jd),e(lo,rr),e(rr,qd),e(lo,xd),e(Je,Pd),e(Je,jn),e(jn,Nd),e(jn,ar),e(ar,Ad),e(jn,Od),_(o,ji,b),_(o,Et,b),e(Et,co),e(co,na),w(qn,na,null),e(Et,Dd),e(Et,sa),e(sa,Ld),_(o,qi,b),_(o,ft,b),w(xn,ft,null),e(ft,Sd),e(ft,Pn),e(Pn,Id),e(Pn,Nn),e(Nn,Rd),e(Pn,Wd),e(ft,Ud),e(ft,nt),w(An,nt,null),e(nt,Yd),e(nt,Mt),e(Mt,Hd),e(Mt,ir),e(ir,Qd),e(Mt,Vd),e(Mt,ra),e(ra,Kd),e(Mt,Jd),e(nt,Gd),w(po,nt,null),e(nt,Zd),w(ho,nt,null),_(o,xi,b),_(o,zt,b),e(zt,mo),e(mo,aa),w(On,aa,null),e(zt,Xd),e(zt,ia),e(ia,ec),_(o,Pi,b),_(o,ut,b),w(Dn,ut,null),e(ut,tc),e(ut,jt),e(jt,oc),e(jt,la),e(la,nc),e(jt,sc),e(jt,Ln),e(Ln,rc),e(jt,ac),e(ut,ic),e(ut,Re),w(Sn,Re,null),e(Re,lc),e(Re,qt),e(qt,dc),e(qt,lr),e(lr,cc),e(qt,pc),e(qt,da),e(da,hc),e(qt,mc),e(Re,fc),w(fo,Re,null),e(Re,uc),w(uo,Re,null),e(Re,gc),w(go,Re,null),_(o,Ni,b),_(o,xt,b),e(xt,_o),e(_o,ca),w(In,ca,null),e(xt,_c),e(xt,pa),e(pa,vc),_(o,Ai,b),_(o,Ge,b),w(Rn,Ge,null),e(Ge,bc),e(Ge,ha),e(ha,kc),e(Ge,Tc),e(Ge,Wn),e(Wn,$c),e(Wn,Un),e(Un,wc),e(Wn,yc),e(Ge,Cc),e(Ge,je),w(Yn,je,null),e(je,Fc),e(je,Pt),e(Pt,Bc),e(Pt,dr),e(dr,Ec),e(Pt,Mc),e(Pt,ma),e(ma,zc),e(Pt,jc),e(je,qc),w(vo,je,null),e(je,xc),w(bo,je,null),e(je,Pc),w(ko,je,null),e(je,Nc),w(To,je,null),e(je,Ac),w($o,je,null),_(o,Oi,b),_(o,Nt,b),e(Nt,wo),e(wo,fa),w(Hn,fa,null),e(Nt,Oc),e(Nt,ua),e(ua,Dc),_(o,Di,b),_(o,Ze,b),w(Qn,Ze,null),e(Ze,Lc),e(Ze,ga),e(ga,Sc),e(Ze,Ic),e(Ze,Vn),e(Vn,Rc),e(Vn,Kn),e(Kn,Wc),e(Vn,Uc),e(Ze,Yc),e(Ze,st),w(Jn,st,null),e(st,Hc),e(st,At),e(At,Qc),e(At,cr),e(cr,Vc),e(At,Kc),e(At,_a),e(_a,Jc),e(At,Gc),e(st,Zc),w(yo,st,null),e(st,Xc),w(Co,st,null),_(o,Li,b),_(o,Ot,b),e(Ot,Fo),e(Fo,va),w(Gn,va,null),e(Ot,ep),e(Ot,ba),e(ba,tp),_(o,Si,b),_(o,Xe,b),w(Zn,Xe,null),e(Xe,op),e(Xe,ka),e(ka,np),e(Xe,sp),e(Xe,Xn),e(Xn,rp),e(Xn,es),e(es,ap),e(Xn,ip),e(Xe,lp),e(Xe,We),w(ts,We,null),e(We,dp),e(We,Dt),e(Dt,cp),e(Dt,pr),e(pr,pp),e(Dt,hp),e(Dt,Ta),e(Ta,mp),e(Dt,fp),e(We,up),w(Bo,We,null),e(We,gp),w(Eo,We,null),e(We,_p),w(Mo,We,null),_(o,Ii,b),_(o,Lt,b),e(Lt,zo),e(zo,$a),w(os,$a,null),e(Lt,vp),e(Lt,wa),e(wa,bp),_(o,Ri,b),_(o,et,b),w(ns,et,null),e(et,kp),e(et,St),e(St,Tp),e(St,ya),e(ya,$p),e(St,wp),e(St,Ca),e(Ca,yp),e(St,Cp),e(et,Fp),e(et,ss),e(ss,Bp),e(ss,rs),e(rs,Ep),e(ss,Mp),e(et,zp),e(et,Ue),w(as,Ue,null),e(Ue,jp),e(Ue,It),e(It,qp),e(It,hr),e(hr,xp),e(It,Pp),e(It,Fa),e(Fa,Np),e(It,Ap),e(Ue,Op),w(jo,Ue,null),e(Ue,Dp),w(qo,Ue,null),e(Ue,Lp),w(xo,Ue,null),_(o,Wi,b),_(o,Rt,b),e(Rt,Po),e(Po,Ba),w(is,Ba,null),e(Rt,Sp),e(Rt,Ea),e(Ea,Ip),_(o,Ui,b),_(o,Pe,b),w(ls,Pe,null),e(Pe,Rp),e(Pe,Ma),e(Ma,Wp),e(Pe,Up),e(Pe,ds),e(ds,Yp),e(ds,mr),e(mr,Hp),e(ds,Qp),e(Pe,Vp),e(Pe,cs),e(cs,Kp),e(cs,ps),e(ps,Jp),e(cs,Gp),e(Pe,Zp),w(No,Pe,null),e(Pe,Xp),e(Pe,rt),w(hs,rt,null),e(rt,eh),e(rt,Wt),e(Wt,th),e(Wt,fr),e(fr,oh),e(Wt,nh),e(Wt,za),e(za,sh),e(Wt,rh),e(rt,ah),w(Ao,rt,null),e(rt,ih),w(Oo,rt,null),_(o,Yi,b),_(o,Ut,b),e(Ut,Do),e(Do,ja),w(ms,ja,null),e(Ut,lh),e(Ut,qa),e(qa,dh),_(o,Hi,b),_(o,Ne,b),w(fs,Ne,null),e(Ne,ch),e(Ne,us),e(us,ph),e(us,xa),e(xa,hh),e(us,mh),e(Ne,fh),e(Ne,gs),e(gs,uh),e(gs,ur),e(ur,gh),e(gs,_h),e(Ne,vh),e(Ne,_s),e(_s,bh),e(_s,vs),e(vs,kh),e(_s,Th),e(Ne,$h),w(Lo,Ne,null),e(Ne,wh),e(Ne,Ye),w(bs,Ye,null),e(Ye,yh),e(Ye,Yt),e(Yt,Ch),e(Yt,gr),e(gr,Fh),e(Yt,Bh),e(Yt,Pa),e(Pa,Eh),e(Yt,Mh),e(Ye,zh),w(So,Ye,null),e(Ye,jh),w(Io,Ye,null),e(Ye,qh),w(Ro,Ye,null),_(o,Qi,b),_(o,Ht,b),e(Ht,Wo),e(Wo,Na),w(ks,Na,null),e(Ht,xh),e(Ht,Aa),e(Aa,Ph),_(o,Vi,b),_(o,Ae,b),w(Ts,Ae,null),e(Ae,Nh),e(Ae,Oa),e(Oa,Ah),e(Ae,Oh),e(Ae,$s),e($s,Dh),e($s,_r),e(_r,Lh),e($s,Sh),e(Ae,Ih),e(Ae,ws),e(ws,Rh),e(ws,ys),e(ys,Wh),e(ws,Uh),e(Ae,Yh),w(Uo,Ae,null),e(Ae,Hh),e(Ae,He),w(Cs,He,null),e(He,Qh),e(He,Qt),e(Qt,Vh),e(Qt,vr),e(vr,Kh),e(Qt,Jh),e(Qt,Da),e(Da,Gh),e(Qt,Zh),e(He,Xh),w(Yo,He,null),e(He,em),w(Ho,He,null),e(He,tm),w(Qo,He,null),_(o,Ki,b),_(o,Vt,b),e(Vt,Vo),e(Vo,La),w(Fs,La,null),e(Vt,om),e(Vt,Sa),e(Sa,nm),_(o,Ji,b),_(o,Oe,b),w(Bs,Oe,null),e(Oe,sm),e(Oe,Ia),e(Ia,rm),e(Oe,am),e(Oe,Es),e(Es,im),e(Es,br),e(br,lm),e(Es,dm),e(Oe,cm),e(Oe,Ms),e(Ms,pm),e(Ms,zs),e(zs,hm),e(Ms,mm),e(Oe,fm),w(Ko,Oe,null),e(Oe,um),e(Oe,at),w(js,at,null),e(at,gm),e(at,Kt),e(Kt,_m),e(Kt,kr),e(kr,vm),e(Kt,bm),e(Kt,Ra),e(Ra,km),e(Kt,Tm),e(at,$m),w(Jo,at,null),e(at,wm),w(Go,at,null),_(o,Gi,b),_(o,Jt,b),e(Jt,Zo),e(Zo,Wa),w(qs,Wa,null),e(Jt,ym),e(Jt,Ua),e(Ua,Cm),_(o,Zi,b),_(o,De,b),w(xs,De,null),e(De,Fm),e(De,Ya),e(Ya,Bm),e(De,Em),e(De,Ps),e(Ps,Mm),e(Ps,Tr),e(Tr,zm),e(Ps,jm),e(De,qm),e(De,Ns),e(Ns,xm),e(Ns,As),e(As,Pm),e(Ns,Nm),e(De,Am),w(Xo,De,null),e(De,Om),e(De,Qe),w(Os,Qe,null),e(Qe,Dm),e(Qe,Gt),e(Gt,Lm),e(Gt,$r),e($r,Sm),e(Gt,Im),e(Gt,Ha),e(Ha,Rm),e(Gt,Wm),e(Qe,Um),w(en,Qe,null),e(Qe,Ym),w(tn,Qe,null),e(Qe,Hm),w(on,Qe,null),_(o,Xi,b),_(o,Zt,b),e(Zt,nn),e(nn,Qa),w(Ds,Qa,null),e(Zt,Qm),e(Zt,Va),e(Va,Vm),_(o,el,b),_(o,Le,b),w(Ls,Le,null),e(Le,Km),e(Le,Xt),e(Xt,Jm),e(Xt,Ka),e(Ka,Gm),e(Xt,Zm),e(Xt,Ja),e(Ja,Xm),e(Xt,ef),e(Le,tf),e(Le,Ss),e(Ss,of),e(Ss,wr),e(wr,nf),e(Ss,sf),e(Le,rf),e(Le,Is),e(Is,af),e(Is,Rs),e(Rs,lf),e(Is,df),e(Le,cf),w(sn,Le,null),e(Le,pf),e(Le,Ve),w(Ws,Ve,null),e(Ve,hf),e(Ve,eo),e(eo,mf),e(eo,yr),e(yr,ff),e(eo,uf),e(eo,Ga),e(Ga,gf),e(eo,_f),e(Ve,vf),w(rn,Ve,null),e(Ve,bf),w(an,Ve,null),e(Ve,kf),w(ln,Ve,null),tl=!0},p(o,[b]){const Us={};b&2&&(Us.$$scope={dirty:b,ctx:o}),no.$set(Us);const Za={};b&2&&(Za.$$scope={dirty:b,ctx:o}),ao.$set(Za);const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:o}),po.$set(Xa);const ei={};b&2&&(ei.$$scope={dirty:b,ctx:o}),ho.$set(ei);const Ys={};b&2&&(Ys.$$scope={dirty:b,ctx:o}),fo.$set(Ys);const ti={};b&2&&(ti.$$scope={dirty:b,ctx:o}),uo.$set(ti);const oi={};b&2&&(oi.$$scope={dirty:b,ctx:o}),go.$set(oi);const ni={};b&2&&(ni.$$scope={dirty:b,ctx:o}),vo.$set(ni);const Hs={};b&2&&(Hs.$$scope={dirty:b,ctx:o}),bo.$set(Hs);const si={};b&2&&(si.$$scope={dirty:b,ctx:o}),ko.$set(si);const ri={};b&2&&(ri.$$scope={dirty:b,ctx:o}),To.$set(ri);const ai={};b&2&&(ai.$$scope={dirty:b,ctx:o}),$o.$set(ai);const ii={};b&2&&(ii.$$scope={dirty:b,ctx:o}),yo.$set(ii);const li={};b&2&&(li.$$scope={dirty:b,ctx:o}),Co.$set(li);const dn={};b&2&&(dn.$$scope={dirty:b,ctx:o}),Bo.$set(dn);const di={};b&2&&(di.$$scope={dirty:b,ctx:o}),Eo.$set(di);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:o}),Mo.$set(ci);const Qs={};b&2&&(Qs.$$scope={dirty:b,ctx:o}),jo.$set(Qs);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:o}),qo.$set(pi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:o}),xo.$set(hi);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:o}),No.$set(mi);const to={};b&2&&(to.$$scope={dirty:b,ctx:o}),Ao.$set(to);const tt={};b&2&&(tt.$$scope={dirty:b,ctx:o}),Oo.$set(tt);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),Lo.$set(fi);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:o}),So.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),Io.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Ro.$set(_i);const Vs={};b&2&&(Vs.$$scope={dirty:b,ctx:o}),Uo.$set(Vs);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Yo.$set(vi);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Ho.$set(bi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Qo.$set(ki);const Ie={};b&2&&(Ie.$$scope={dirty:b,ctx:o}),Ko.$set(Ie);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:o}),Jo.$set(gt);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Go.$set(Ti);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Xo.$set($i);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),en.$set(wi);const oo={};b&2&&(oo.$$scope={dirty:b,ctx:o}),tn.$set(oo);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),on.$set(yi);const Ks={};b&2&&(Ks.$$scope={dirty:b,ctx:o}),sn.$set(Ks);const Cr={};b&2&&(Cr.$$scope={dirty:b,ctx:o}),rn.$set(Cr);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),an.$set(Ci);const Fr={};b&2&&(Fr.$$scope={dirty:b,ctx:o}),ln.$set(Fr)},i(o){tl||(y(l.$$.fragment,o),y(ee.$$.fragment,o),y(V.$$.fragment,o),y(be.$$.fragment,o),y(no.$$.fragment,o),y(kn.$$.fragment,o),y(Tn.$$.fragment,o),y($n.$$.fragment,o),y(yn.$$.fragment,o),y(Fn.$$.fragment,o),y(ao.$$.fragment,o),y(Bn.$$.fragment,o),y(En.$$.fragment,o),y(Mn.$$.fragment,o),y(qn.$$.fragment,o),y(xn.$$.fragment,o),y(An.$$.fragment,o),y(po.$$.fragment,o),y(ho.$$.fragment,o),y(On.$$.fragment,o),y(Dn.$$.fragment,o),y(Sn.$$.fragment,o),y(fo.$$.fragment,o),y(uo.$$.fragment,o),y(go.$$.fragment,o),y(In.$$.fragment,o),y(Rn.$$.fragment,o),y(Yn.$$.fragment,o),y(vo.$$.fragment,o),y(bo.$$.fragment,o),y(ko.$$.fragment,o),y(To.$$.fragment,o),y($o.$$.fragment,o),y(Hn.$$.fragment,o),y(Qn.$$.fragment,o),y(Jn.$$.fragment,o),y(yo.$$.fragment,o),y(Co.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(ts.$$.fragment,o),y(Bo.$$.fragment,o),y(Eo.$$.fragment,o),y(Mo.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(as.$$.fragment,o),y(jo.$$.fragment,o),y(qo.$$.fragment,o),y(xo.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(No.$$.fragment,o),y(hs.$$.fragment,o),y(Ao.$$.fragment,o),y(Oo.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(Lo.$$.fragment,o),y(bs.$$.fragment,o),y(So.$$.fragment,o),y(Io.$$.fragment,o),y(Ro.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(Uo.$$.fragment,o),y(Cs.$$.fragment,o),y(Yo.$$.fragment,o),y(Ho.$$.fragment,o),y(Qo.$$.fragment,o),y(Fs.$$.fragment,o),y(Bs.$$.fragment,o),y(Ko.$$.fragment,o),y(js.$$.fragment,o),y(Jo.$$.fragment,o),y(Go.$$.fragment,o),y(qs.$$.fragment,o),y(xs.$$.fragment,o),y(Xo.$$.fragment,o),y(Os.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(Ds.$$.fragment,o),y(Ls.$$.fragment,o),y(sn.$$.fragment,o),y(Ws.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(ln.$$.fragment,o),tl=!0)},o(o){C(l.$$.fragment,o),C(ee.$$.fragment,o),C(V.$$.fragment,o),C(be.$$.fragment,o),C(no.$$.fragment,o),C(kn.$$.fragment,o),C(Tn.$$.fragment,o),C($n.$$.fragment,o),C(yn.$$.fragment,o),C(Fn.$$.fragment,o),C(ao.$$.fragment,o),C(Bn.$$.fragment,o),C(En.$$.fragment,o),C(Mn.$$.fragment,o),C(qn.$$.fragment,o),C(xn.$$.fragment,o),C(An.$$.fragment,o),C(po.$$.fragment,o),C(ho.$$.fragment,o),C(On.$$.fragment,o),C(Dn.$$.fragment,o),C(Sn.$$.fragment,o),C(fo.$$.fragment,o),C(uo.$$.fragment,o),C(go.$$.fragment,o),C(In.$$.fragment,o),C(Rn.$$.fragment,o),C(Yn.$$.fragment,o),C(vo.$$.fragment,o),C(bo.$$.fragment,o),C(ko.$$.fragment,o),C(To.$$.fragment,o),C($o.$$.fragment,o),C(Hn.$$.fragment,o),C(Qn.$$.fragment,o),C(Jn.$$.fragment,o),C(yo.$$.fragment,o),C(Co.$$.fragment,o),C(Gn.$$.fragment,o),C(Zn.$$.fragment,o),C(ts.$$.fragment,o),C(Bo.$$.fragment,o),C(Eo.$$.fragment,o),C(Mo.$$.fragment,o),C(os.$$.fragment,o),C(ns.$$.fragment,o),C(as.$$.fragment,o),C(jo.$$.fragment,o),C(qo.$$.fragment,o),C(xo.$$.fragment,o),C(is.$$.fragment,o),C(ls.$$.fragment,o),C(No.$$.fragment,o),C(hs.$$.fragment,o),C(Ao.$$.fragment,o),C(Oo.$$.fragment,o),C(ms.$$.fragment,o),C(fs.$$.fragment,o),C(Lo.$$.fragment,o),C(bs.$$.fragment,o),C(So.$$.fragment,o),C(Io.$$.fragment,o),C(Ro.$$.fragment,o),C(ks.$$.fragment,o),C(Ts.$$.fragment,o),C(Uo.$$.fragment,o),C(Cs.$$.fragment,o),C(Yo.$$.fragment,o),C(Ho.$$.fragment,o),C(Qo.$$.fragment,o),C(Fs.$$.fragment,o),C(Bs.$$.fragment,o),C(Ko.$$.fragment,o),C(js.$$.fragment,o),C(Jo.$$.fragment,o),C(Go.$$.fragment,o),C(qs.$$.fragment,o),C(xs.$$.fragment,o),C(Xo.$$.fragment,o),C(Os.$$.fragment,o),C(en.$$.fragment,o),C(tn.$$.fragment,o),C(on.$$.fragment,o),C(Ds.$$.fragment,o),C(Ls.$$.fragment,o),C(sn.$$.fragment,o),C(Ws.$$.fragment,o),C(rn.$$.fragment,o),C(an.$$.fragment,o),C(ln.$$.fragment,o),tl=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(K),o&&t(z),F(ee),o&&t(ae),o&&t(Q),o&&t(x),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(q),o&&t(W),o&&t(G),o&&t(U),o&&t(Z),F(V),o&&t(Fe),o&&t(re),F(be),F(no),o&&t(Bi),o&&t(Ct),F(kn),o&&t(Ei),o&&t(xe),F(Tn),F($n),F(yn),F(Fn),F(ao),F(Bn),o&&t(Mi),o&&t(Bt),F(En),o&&t(zi),o&&t(Je),F(Mn),o&&t(ji),o&&t(Et),F(qn),o&&t(qi),o&&t(ft),F(xn),F(An),F(po),F(ho),o&&t(xi),o&&t(zt),F(On),o&&t(Pi),o&&t(ut),F(Dn),F(Sn),F(fo),F(uo),F(go),o&&t(Ni),o&&t(xt),F(In),o&&t(Ai),o&&t(Ge),F(Rn),F(Yn),F(vo),F(bo),F(ko),F(To),F($o),o&&t(Oi),o&&t(Nt),F(Hn),o&&t(Di),o&&t(Ze),F(Qn),F(Jn),F(yo),F(Co),o&&t(Li),o&&t(Ot),F(Gn),o&&t(Si),o&&t(Xe),F(Zn),F(ts),F(Bo),F(Eo),F(Mo),o&&t(Ii),o&&t(Lt),F(os),o&&t(Ri),o&&t(et),F(ns),F(as),F(jo),F(qo),F(xo),o&&t(Wi),o&&t(Rt),F(is),o&&t(Ui),o&&t(Pe),F(ls),F(No),F(hs),F(Ao),F(Oo),o&&t(Yi),o&&t(Ut),F(ms),o&&t(Hi),o&&t(Ne),F(fs),F(Lo),F(bs),F(So),F(Io),F(Ro),o&&t(Qi),o&&t(Ht),F(ks),o&&t(Vi),o&&t(Ae),F(Ts),F(Uo),F(Cs),F(Yo),F(Ho),F(Qo),o&&t(Ki),o&&t(Vt),F(Fs),o&&t(Ji),o&&t(Oe),F(Bs),F(Ko),F(js),F(Jo),F(Go),o&&t(Gi),o&&t(Jt),F(qs),o&&t(Zi),o&&t(De),F(xs),F(Xo),F(Os),F(en),F(tn),F(on),o&&t(Xi),o&&t(Zt),F(Ds),o&&t(el),o&&t(Le),F(Ls),F(sn),F(Ws),F(rn),F(an),F(ln)}}}const p_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function h_(B){return Tg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class b_ extends _g{constructor(d){super();vg(this,d,h_,c_,bg,{})}}export{b_ as default,p_ as metadata};
