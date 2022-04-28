import{S as _g,i as vg,s as bg,e as r,k as m,w as T,t as o,M as kg,c as a,d as t,m as h,a as i,x as $,h as s,b as k,F as e,g as _,y as w,q as y,o as C,B as F,v as Tg,L as we}from"../../chunks/vendor-6b77c823.js";import{T as qe}from"../../chunks/Tip-39098574.js";import{D as ne}from"../../chunks/Docstring-1088f2fb.js";import{C as ye}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Se}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as $e}from"../../chunks/ExampleCodeBlock-5212b321.js";function $g(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertModel, ConvBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function wg(B){let d,g,c,p,v;return p=new ye({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=o("pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"pair mask has the following format:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function yg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Fg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Eg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Mg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function jg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){d=r("p"),g=o("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function xg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Pg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ag(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Dg(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Lg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ig(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Rg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Wg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Yg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Hg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Vg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Kg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function Jg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zg(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Xg(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function e_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function n_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function o_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function r_(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function a_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),K=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),A=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),oe=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),se=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var V=i(p);v=a(V,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(V),M=a(V,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=h(u),z=a(u,"P",{});var O=i(z);X=s(O,"This second option is useful when using "),S=a(O,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(O,"CODE",{});var re=i(I);pe=s(re,"model(inputs)"),re.forEach(t),ae=s(O,"."),O.forEach(t),Q=h(u),A=a(u,"P",{});var be=i(A);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var D=i(j);x=a(D,"LI",{});var N=i(x);oe=s(N,"a single Tensor with "),Y=a(N,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(N," only and nothing else: "),R=a(N,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),N.forEach(t),le=h(D),q=a(D,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),D.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,K,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,A,E),e(A,te),_(u,J,E),_(u,j,E),e(j,x),e(x,oe),e(x,Y),e(Y,ie),e(x,se),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(K),u&&t(z),u&&t(Q),u&&t(A),u&&t(J),u&&t(j)}}}function i_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function d_(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function c_(B){let d,g,c,p,v,l,f,M,de,K,z,X,S,ee,ce,I,pe,ae,Q,A,te,J,j,x,oe,Y,ie,se,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z,u,E,V,Be,Ce,O,Fe,re,be,D,N,Ee,Te,H,Me,ke,ve,ze,Js,Ol,Dl,Gs,Ll,Sl,Il,on,Bi,Ct,sn,Yr,ko,Rl,Hr,Wl,Ei,xe,To,Ul,ht,Yl,Zs,Hl,Ql,Xs,Vl,Kl,er,Jl,Gl,Zl,_t,$o,Xl,Qr,ed,td,wo,tr,nd,Vr,od,sd,nr,rd,Kr,ad,id,rn,yo,ld,Co,dd,Jr,cd,pd,md,nt,Fo,hd,Gr,fd,ud,an,gd,Ft,_d,Zr,vd,bd,Xr,kd,Td,$d,or,Bo,Mi,Bt,ln,ea,Eo,wd,ta,yd,zi,Je,Mo,Cd,zo,Fd,na,Bd,Ed,Md,dn,sr,zd,jd,rr,qd,xd,Pd,jo,Nd,ar,Ad,Od,ji,Et,cn,oa,qo,Dd,sa,Ld,qi,ft,xo,Sd,Po,Id,No,Rd,Wd,Ud,ot,Ao,Yd,Mt,Hd,ir,Qd,Vd,ra,Kd,Jd,Gd,pn,Zd,mn,xi,zt,hn,aa,Oo,Xd,ia,ec,Pi,ut,Do,tc,jt,nc,la,oc,sc,Lo,rc,ac,ic,Re,So,lc,qt,dc,lr,cc,pc,da,mc,hc,fc,fn,uc,un,gc,gn,Ni,xt,_n,ca,Io,_c,pa,vc,Ai,Ge,Ro,bc,ma,kc,Tc,Wo,$c,Uo,wc,yc,Cc,je,Yo,Fc,Pt,Bc,dr,Ec,Mc,ha,zc,jc,qc,vn,xc,bn,Pc,kn,Nc,Tn,Ac,$n,Oi,Nt,wn,fa,Ho,Oc,ua,Dc,Di,Ze,Qo,Lc,ga,Sc,Ic,Vo,Rc,Ko,Wc,Uc,Yc,st,Jo,Hc,At,Qc,cr,Vc,Kc,_a,Jc,Gc,Zc,yn,Xc,Cn,Li,Ot,Fn,va,Go,ep,ba,tp,Si,Xe,Zo,np,ka,op,sp,Xo,rp,es,ap,ip,lp,We,ts,dp,Dt,cp,pr,pp,mp,Ta,hp,fp,up,Bn,gp,En,_p,Mn,Ii,Lt,zn,$a,ns,vp,wa,bp,Ri,et,os,kp,St,Tp,ya,$p,wp,Ca,yp,Cp,Fp,ss,Bp,rs,Ep,Mp,zp,Ue,as,jp,It,qp,mr,xp,Pp,Fa,Np,Ap,Op,jn,Dp,qn,Lp,xn,Wi,Rt,Pn,Ba,is,Sp,Ea,Ip,Ui,Pe,ls,Rp,Ma,Wp,Up,ds,Yp,hr,Hp,Qp,Vp,cs,Kp,ps,Jp,Gp,Zp,Nn,Xp,rt,ms,em,Wt,tm,fr,nm,om,za,sm,rm,am,An,im,On,Yi,Ut,Dn,ja,hs,lm,qa,dm,Hi,Ne,fs,cm,us,pm,xa,mm,hm,fm,gs,um,ur,gm,_m,vm,_s,bm,vs,km,Tm,$m,Ln,wm,Ye,bs,ym,Yt,Cm,gr,Fm,Bm,Pa,Em,Mm,zm,Sn,jm,In,qm,Rn,Qi,Ht,Wn,Na,ks,xm,Aa,Pm,Vi,Ae,Ts,Nm,Oa,Am,Om,$s,Dm,_r,Lm,Sm,Im,ws,Rm,ys,Wm,Um,Ym,Un,Hm,He,Cs,Qm,Qt,Vm,vr,Km,Jm,Da,Gm,Zm,Xm,Yn,eh,Hn,th,Qn,Ki,Vt,Vn,La,Fs,nh,Sa,oh,Ji,Oe,Bs,sh,Ia,rh,ah,Es,ih,br,lh,dh,ch,Ms,ph,zs,mh,hh,fh,Kn,uh,at,js,gh,Kt,_h,kr,vh,bh,Ra,kh,Th,$h,Jn,wh,Gn,Gi,Jt,Zn,Wa,qs,yh,Ua,Ch,Zi,De,xs,Fh,Ya,Bh,Eh,Ps,Mh,Tr,zh,jh,qh,Ns,xh,As,Ph,Nh,Ah,Xn,Oh,Qe,Os,Dh,Gt,Lh,$r,Sh,Ih,Ha,Rh,Wh,Uh,eo,Yh,to,Hh,no,Xi,Zt,oo,Qa,Ds,Qh,Va,Vh,el,Le,Ls,Kh,Xt,Jh,Ka,Gh,Zh,Ja,Xh,ef,tf,Ss,nf,wr,of,sf,rf,Is,af,Rs,lf,df,cf,so,pf,Ve,Ws,mf,en,hf,yr,ff,uf,Ga,gf,_f,vf,ro,bf,ao,kf,io,tl;return l=new Se({}),ee=new Se({}),V=new Se({}),be=new ne({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/configuration_convbert.py#L35"}}),on=new $e({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[$g]},$$scope:{ctx:B}}}),ko=new Se({}),To=new ne({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert.py#L46"}}),$o=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L248",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yo=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L273",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fo=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L301",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new $e({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[wg]},$$scope:{ctx:B}}}),Bo=new ne({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L330"}}),Eo=new Se({}),Mo=new ne({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert_fast.py#L47"}}),qo=new Se({}),xo=new ne({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L762"}}),Ao=new ne({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L789",returnDescription:`
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
`}}),pn=new qe({props:{$$slots:{default:[yg]},$$scope:{ctx:B}}}),mn=new $e({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[Cg]},$$scope:{ctx:B}}}),Oo=new Se({}),Do=new ne({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L876"}}),So=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L893",returnDescription:`
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
`}}),fn=new qe({props:{$$slots:{default:[Fg]},$$scope:{ctx:B}}}),un=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[Bg]},$$scope:{ctx:B}}}),gn=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[Eg]},$$scope:{ctx:B}}}),Io=new Se({}),Ro=new ne({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L986"}}),Yo=new ne({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L997",returnDescription:`
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
`}}),vn=new qe({props:{$$slots:{default:[Mg]},$$scope:{ctx:B}}}),bn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[zg]},$$scope:{ctx:B}}}),kn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[jg]},$$scope:{ctx:B}}}),Tn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[qg]},$$scope:{ctx:B}}}),$n=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[xg]},$$scope:{ctx:B}}}),Ho=new Se({}),Qo=new ne({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1082"}}),Jo=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1093",returnDescription:`
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
`}}),yn=new qe({props:{$$slots:{default:[Pg]},$$scope:{ctx:B}}}),Cn=new $e({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[Ng]},$$scope:{ctx:B}}}),Go=new Se({}),Zo=new ne({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1176"}}),ts=new ne({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1191",returnDescription:`
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
`}}),Bn=new qe({props:{$$slots:{default:[Ag]},$$scope:{ctx:B}}}),En=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[Og]},$$scope:{ctx:B}}}),Mn=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[Dg]},$$scope:{ctx:B}}}),ns=new Se({}),os=new ne({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1258"}}),as=new ne({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1269",returnDescription:`
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
`}}),jn=new qe({props:{$$slots:{default:[Lg]},$$scope:{ctx:B}}}),qn=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[Sg]},$$scope:{ctx:B}}}),xn=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ig]},$$scope:{ctx:B}}}),is=new Se({}),ls=new ne({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L726"}}),Nn=new qe({props:{$$slots:{default:[Rg]},$$scope:{ctx:B}}}),ms=new ne({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L732",returnDescription:`
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
`}}),An=new qe({props:{$$slots:{default:[Wg]},$$scope:{ctx:B}}}),On=new $e({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[Ug]},$$scope:{ctx:B}}}),hs=new Se({}),fs=new ne({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L828"}}),Ln=new qe({props:{$$slots:{default:[Yg]},$$scope:{ctx:B}}}),bs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L849",returnDescription:`
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
`}}),Sn=new qe({props:{$$slots:{default:[Hg]},$$scope:{ctx:B}}}),In=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[Qg]},$$scope:{ctx:B}}}),Rn=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[Vg]},$$scope:{ctx:B}}}),ks=new Se({}),Ts=new ne({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L950"}}),Un=new qe({props:{$$slots:{default:[Kg]},$$scope:{ctx:B}}}),Cs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L957",returnDescription:`
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
`}}),Yn=new qe({props:{$$slots:{default:[Jg]},$$scope:{ctx:B}}}),Hn=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[Gg]},$$scope:{ctx:B}}}),Qn=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[Zg]},$$scope:{ctx:B}}}),Fs=new Se({}),Bs=new ne({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1026"}}),Kn=new qe({props:{$$slots:{default:[Xg]},$$scope:{ctx:B}}}),js=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1048",returnDescription:`
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
`}}),Jn=new qe({props:{$$slots:{default:[e_]},$$scope:{ctx:B}}}),Gn=new $e({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[t_]},$$scope:{ctx:B}}}),qs=new Se({}),xs=new ne({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1150"}}),Xn=new qe({props:{$$slots:{default:[n_]},$$scope:{ctx:B}}}),Os=new ne({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1164",returnDescription:`
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
`}}),eo=new qe({props:{$$slots:{default:[o_]},$$scope:{ctx:B}}}),to=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[s_]},$$scope:{ctx:B}}}),no=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[r_]},$$scope:{ctx:B}}}),Ds=new Se({}),Ls=new ne({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1232"}}),so=new qe({props:{$$slots:{default:[a_]},$$scope:{ctx:B}}}),Ws=new ne({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1242",returnDescription:`
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
`}}),ro=new qe({props:{$$slots:{default:[i_]},$$scope:{ctx:B}}}),ao=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[l_]},$$scope:{ctx:B}}}),io=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[d_]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),v=r("span"),T(l.$$.fragment),f=m(),M=r("span"),de=o("ConvBERT"),K=m(),z=r("h2"),X=r("a"),S=r("span"),T(ee.$$.fragment),ce=m(),I=r("span"),pe=o("Overview"),ae=m(),Q=r("p"),A=o("The ConvBERT model was proposed in "),te=r("a"),J=o("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),j=o(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),x=m(),oe=r("p"),Y=o("The abstract from the paper is the following:"),ie=m(),se=r("p"),R=r("em"),me=o(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),le=m(),q=r("p"),he=o("ConvBERT training tips are similar to those of BERT."),W=m(),G=r("p"),fe=o("This model was contributed by "),L=r("a"),ue=o("abhishek"),ge=o(`. The original implementation can be found
here: `),P=r("a"),_e=o("https://github.com/yitu-opensource/ConvBert"),U=m(),Z=r("h2"),u=r("a"),E=r("span"),T(V.$$.fragment),Be=m(),Ce=r("span"),O=o("ConvBertConfig"),Fe=m(),re=r("div"),T(be.$$.fragment),D=m(),N=r("p"),Ee=o("This is the configuration class to store the configuration of a "),Te=r("a"),H=o("ConvBertModel"),Me=o(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=r("a"),ve=o("conv-bert-base"),ze=o(` architecture. Configuration objects inherit from
`),Js=r("a"),Ol=o("PretrainedConfig"),Dl=o(" and can be used to control the model outputs. Read the documentation from "),Gs=r("a"),Ll=o("PretrainedConfig"),Sl=o(`
for more information.`),Il=m(),T(on.$$.fragment),Bi=m(),Ct=r("h2"),sn=r("a"),Yr=r("span"),T(ko.$$.fragment),Rl=m(),Hr=r("span"),Wl=o("ConvBertTokenizer"),Ei=m(),xe=r("div"),T(To.$$.fragment),Ul=m(),ht=r("p"),Yl=o("Construct a ConvBERT tokenizer. "),Zs=r("a"),Hl=o("ConvBertTokenizer"),Ql=o(" is identical to "),Xs=r("a"),Vl=o("BertTokenizer"),Kl=o(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),er=r("a"),Jl=o("BertTokenizer"),Gl=o(` for usage examples and
documentation concerning parameters.`),Zl=m(),_t=r("div"),T($o.$$.fragment),Xl=m(),Qr=r("p"),ed=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),td=m(),wo=r("ul"),tr=r("li"),nd=o("single sequence: "),Vr=r("code"),od=o("[CLS] X [SEP]"),sd=m(),nr=r("li"),rd=o("pair of sequences: "),Kr=r("code"),ad=o("[CLS] A [SEP] B [SEP]"),id=m(),rn=r("div"),T(yo.$$.fragment),ld=m(),Co=r("p"),dd=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=r("code"),cd=o("prepare_for_model"),pd=o(" method."),md=m(),nt=r("div"),T(Fo.$$.fragment),hd=m(),Gr=r("p"),fd=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),ud=m(),T(an.$$.fragment),gd=m(),Ft=r("p"),_d=o("If "),Zr=r("code"),vd=o("token_ids_1"),bd=o(" is "),Xr=r("code"),kd=o("None"),Td=o(", this method only returns the first portion of the mask (0s)."),$d=m(),or=r("div"),T(Bo.$$.fragment),Mi=m(),Bt=r("h2"),ln=r("a"),ea=r("span"),T(Eo.$$.fragment),wd=m(),ta=r("span"),yd=o("ConvBertTokenizerFast"),zi=m(),Je=r("div"),T(Mo.$$.fragment),Cd=m(),zo=r("p"),Fd=o("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),na=r("em"),Bd=o("tokenizers"),Ed=o(" library)."),Md=m(),dn=r("p"),sr=r("a"),zd=o("ConvBertTokenizerFast"),jd=o(" is identical to "),rr=r("a"),qd=o("BertTokenizerFast"),xd=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Pd=m(),jo=r("p"),Nd=o("Refer to superclass "),ar=r("a"),Ad=o("BertTokenizerFast"),Od=o(" for usage examples and documentation concerning parameters."),ji=m(),Et=r("h2"),cn=r("a"),oa=r("span"),T(qo.$$.fragment),Dd=m(),sa=r("span"),Ld=o("ConvBertModel"),qi=m(),ft=r("div"),T(xo.$$.fragment),Sd=m(),Po=r("p"),Id=o(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),No=r("a"),Rd=o("torch.nn.Module"),Wd=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ud=m(),ot=r("div"),T(Ao.$$.fragment),Yd=m(),Mt=r("p"),Hd=o("The "),ir=r("a"),Qd=o("ConvBertModel"),Vd=o(" forward method, overrides the "),ra=r("code"),Kd=o("__call__"),Jd=o(" special method."),Gd=m(),T(pn.$$.fragment),Zd=m(),T(mn.$$.fragment),xi=m(),zt=r("h2"),hn=r("a"),aa=r("span"),T(Oo.$$.fragment),Xd=m(),ia=r("span"),ec=o("ConvBertForMaskedLM"),Pi=m(),ut=r("div"),T(Do.$$.fragment),tc=m(),jt=r("p"),nc=o("ConvBERT Model with a "),la=r("code"),oc=o("language modeling"),sc=o(` head on top.
This model is a PyTorch `),Lo=r("a"),rc=o("torch.nn.Module"),ac=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ic=m(),Re=r("div"),T(So.$$.fragment),lc=m(),qt=r("p"),dc=o("The "),lr=r("a"),cc=o("ConvBertForMaskedLM"),pc=o(" forward method, overrides the "),da=r("code"),mc=o("__call__"),hc=o(" special method."),fc=m(),T(fn.$$.fragment),uc=m(),T(un.$$.fragment),gc=m(),T(gn.$$.fragment),Ni=m(),xt=r("h2"),_n=r("a"),ca=r("span"),T(Io.$$.fragment),_c=m(),pa=r("span"),vc=o("ConvBertForSequenceClassification"),Ai=m(),Ge=r("div"),T(Ro.$$.fragment),bc=m(),ma=r("p"),kc=o(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tc=m(),Wo=r("p"),$c=o("This model is a PyTorch "),Uo=r("a"),wc=o("torch.nn.Module"),yc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cc=m(),je=r("div"),T(Yo.$$.fragment),Fc=m(),Pt=r("p"),Bc=o("The "),dr=r("a"),Ec=o("ConvBertForSequenceClassification"),Mc=o(" forward method, overrides the "),ha=r("code"),zc=o("__call__"),jc=o(" special method."),qc=m(),T(vn.$$.fragment),xc=m(),T(bn.$$.fragment),Pc=m(),T(kn.$$.fragment),Nc=m(),T(Tn.$$.fragment),Ac=m(),T($n.$$.fragment),Oi=m(),Nt=r("h2"),wn=r("a"),fa=r("span"),T(Ho.$$.fragment),Oc=m(),ua=r("span"),Dc=o("ConvBertForMultipleChoice"),Di=m(),Ze=r("div"),T(Qo.$$.fragment),Lc=m(),ga=r("p"),Sc=o(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ic=m(),Vo=r("p"),Rc=o("This model is a PyTorch "),Ko=r("a"),Wc=o("torch.nn.Module"),Uc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Yc=m(),st=r("div"),T(Jo.$$.fragment),Hc=m(),At=r("p"),Qc=o("The "),cr=r("a"),Vc=o("ConvBertForMultipleChoice"),Kc=o(" forward method, overrides the "),_a=r("code"),Jc=o("__call__"),Gc=o(" special method."),Zc=m(),T(yn.$$.fragment),Xc=m(),T(Cn.$$.fragment),Li=m(),Ot=r("h2"),Fn=r("a"),va=r("span"),T(Go.$$.fragment),ep=m(),ba=r("span"),tp=o("ConvBertForTokenClassification"),Si=m(),Xe=r("div"),T(Zo.$$.fragment),np=m(),ka=r("p"),op=o(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),sp=m(),Xo=r("p"),rp=o("This model is a PyTorch "),es=r("a"),ap=o("torch.nn.Module"),ip=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),lp=m(),We=r("div"),T(ts.$$.fragment),dp=m(),Dt=r("p"),cp=o("The "),pr=r("a"),pp=o("ConvBertForTokenClassification"),mp=o(" forward method, overrides the "),Ta=r("code"),hp=o("__call__"),fp=o(" special method."),up=m(),T(Bn.$$.fragment),gp=m(),T(En.$$.fragment),_p=m(),T(Mn.$$.fragment),Ii=m(),Lt=r("h2"),zn=r("a"),$a=r("span"),T(ns.$$.fragment),vp=m(),wa=r("span"),bp=o("ConvBertForQuestionAnswering"),Ri=m(),et=r("div"),T(os.$$.fragment),kp=m(),St=r("p"),Tp=o(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ya=r("code"),$p=o("span start logits"),wp=o(" and "),Ca=r("code"),yp=o("span end logits"),Cp=o(")."),Fp=m(),ss=r("p"),Bp=o("This model is a PyTorch "),rs=r("a"),Ep=o("torch.nn.Module"),Mp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zp=m(),Ue=r("div"),T(as.$$.fragment),jp=m(),It=r("p"),qp=o("The "),mr=r("a"),xp=o("ConvBertForQuestionAnswering"),Pp=o(" forward method, overrides the "),Fa=r("code"),Np=o("__call__"),Ap=o(" special method."),Op=m(),T(jn.$$.fragment),Dp=m(),T(qn.$$.fragment),Lp=m(),T(xn.$$.fragment),Wi=m(),Rt=r("h2"),Pn=r("a"),Ba=r("span"),T(is.$$.fragment),Sp=m(),Ea=r("span"),Ip=o("TFConvBertModel"),Ui=m(),Pe=r("div"),T(ls.$$.fragment),Rp=m(),Ma=r("p"),Wp=o("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Up=m(),ds=r("p"),Yp=o("This model inherits from "),hr=r("a"),Hp=o("TFPreTrainedModel"),Qp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=m(),cs=r("p"),Kp=o("This model is also a "),ps=r("a"),Jp=o("tf.keras.Model"),Gp=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Zp=m(),T(Nn.$$.fragment),Xp=m(),rt=r("div"),T(ms.$$.fragment),em=m(),Wt=r("p"),tm=o("The "),fr=r("a"),nm=o("TFConvBertModel"),om=o(" forward method, overrides the "),za=r("code"),sm=o("__call__"),rm=o(" special method."),am=m(),T(An.$$.fragment),im=m(),T(On.$$.fragment),Yi=m(),Ut=r("h2"),Dn=r("a"),ja=r("span"),T(hs.$$.fragment),lm=m(),qa=r("span"),dm=o("TFConvBertForMaskedLM"),Hi=m(),Ne=r("div"),T(fs.$$.fragment),cm=m(),us=r("p"),pm=o("ConvBERT Model with a "),xa=r("code"),mm=o("language modeling"),hm=o(" head on top."),fm=m(),gs=r("p"),um=o("This model inherits from "),ur=r("a"),gm=o("TFPreTrainedModel"),_m=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vm=m(),_s=r("p"),bm=o("This model is also a "),vs=r("a"),km=o("tf.keras.Model"),Tm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$m=m(),T(Ln.$$.fragment),wm=m(),Ye=r("div"),T(bs.$$.fragment),ym=m(),Yt=r("p"),Cm=o("The "),gr=r("a"),Fm=o("TFConvBertForMaskedLM"),Bm=o(" forward method, overrides the "),Pa=r("code"),Em=o("__call__"),Mm=o(" special method."),zm=m(),T(Sn.$$.fragment),jm=m(),T(In.$$.fragment),qm=m(),T(Rn.$$.fragment),Qi=m(),Ht=r("h2"),Wn=r("a"),Na=r("span"),T(ks.$$.fragment),xm=m(),Aa=r("span"),Pm=o("TFConvBertForSequenceClassification"),Vi=m(),Ae=r("div"),T(Ts.$$.fragment),Nm=m(),Oa=r("p"),Am=o("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Om=m(),$s=r("p"),Dm=o("This model inherits from "),_r=r("a"),Lm=o("TFPreTrainedModel"),Sm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Im=m(),ws=r("p"),Rm=o("This model is also a "),ys=r("a"),Wm=o("tf.keras.Model"),Um=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ym=m(),T(Un.$$.fragment),Hm=m(),He=r("div"),T(Cs.$$.fragment),Qm=m(),Qt=r("p"),Vm=o("The "),vr=r("a"),Km=o("TFConvBertForSequenceClassification"),Jm=o(" forward method, overrides the "),Da=r("code"),Gm=o("__call__"),Zm=o(" special method."),Xm=m(),T(Yn.$$.fragment),eh=m(),T(Hn.$$.fragment),th=m(),T(Qn.$$.fragment),Ki=m(),Vt=r("h2"),Vn=r("a"),La=r("span"),T(Fs.$$.fragment),nh=m(),Sa=r("span"),oh=o("TFConvBertForMultipleChoice"),Ji=m(),Oe=r("div"),T(Bs.$$.fragment),sh=m(),Ia=r("p"),rh=o(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ah=m(),Es=r("p"),ih=o("This model inherits from "),br=r("a"),lh=o("TFPreTrainedModel"),dh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch=m(),Ms=r("p"),ph=o("This model is also a "),zs=r("a"),mh=o("tf.keras.Model"),hh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fh=m(),T(Kn.$$.fragment),uh=m(),at=r("div"),T(js.$$.fragment),gh=m(),Kt=r("p"),_h=o("The "),kr=r("a"),vh=o("TFConvBertForMultipleChoice"),bh=o(" forward method, overrides the "),Ra=r("code"),kh=o("__call__"),Th=o(" special method."),$h=m(),T(Jn.$$.fragment),wh=m(),T(Gn.$$.fragment),Gi=m(),Jt=r("h2"),Zn=r("a"),Wa=r("span"),T(qs.$$.fragment),yh=m(),Ua=r("span"),Ch=o("TFConvBertForTokenClassification"),Zi=m(),De=r("div"),T(xs.$$.fragment),Fh=m(),Ya=r("p"),Bh=o(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Eh=m(),Ps=r("p"),Mh=o("This model inherits from "),Tr=r("a"),zh=o("TFPreTrainedModel"),jh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qh=m(),Ns=r("p"),xh=o("This model is also a "),As=r("a"),Ph=o("tf.keras.Model"),Nh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ah=m(),T(Xn.$$.fragment),Oh=m(),Qe=r("div"),T(Os.$$.fragment),Dh=m(),Gt=r("p"),Lh=o("The "),$r=r("a"),Sh=o("TFConvBertForTokenClassification"),Ih=o(" forward method, overrides the "),Ha=r("code"),Rh=o("__call__"),Wh=o(" special method."),Uh=m(),T(eo.$$.fragment),Yh=m(),T(to.$$.fragment),Hh=m(),T(no.$$.fragment),Xi=m(),Zt=r("h2"),oo=r("a"),Qa=r("span"),T(Ds.$$.fragment),Qh=m(),Va=r("span"),Vh=o("TFConvBertForQuestionAnswering"),el=m(),Le=r("div"),T(Ls.$$.fragment),Kh=m(),Xt=r("p"),Jh=o(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ka=r("code"),Gh=o("span start logits"),Zh=o(" and "),Ja=r("code"),Xh=o("span end logits"),ef=o(")."),tf=m(),Ss=r("p"),nf=o("This model inherits from "),wr=r("a"),of=o("TFPreTrainedModel"),sf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=m(),Is=r("p"),af=o("This model is also a "),Rs=r("a"),lf=o("tf.keras.Model"),df=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cf=m(),T(so.$$.fragment),pf=m(),Ve=r("div"),T(Ws.$$.fragment),mf=m(),en=r("p"),hf=o("The "),yr=r("a"),ff=o("TFConvBertForQuestionAnswering"),uf=o(" forward method, overrides the "),Ga=r("code"),gf=o("__call__"),_f=o(" special method."),vf=m(),T(ro.$$.fragment),bf=m(),T(ao.$$.fragment),kf=m(),T(io.$$.fragment),this.h()},l(n){const b=kg('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(n),c=a(n,"H1",{class:!0});var Us=i(c);p=a(Us,"A",{id:!0,class:!0,href:!0});var Za=i(p);v=a(Za,"SPAN",{});var Xa=i(v);$(l.$$.fragment,Xa),Xa.forEach(t),Za.forEach(t),f=h(Us),M=a(Us,"SPAN",{});var ei=i(M);de=s(ei,"ConvBERT"),ei.forEach(t),Us.forEach(t),K=h(n),z=a(n,"H2",{class:!0});var Ys=i(z);X=a(Ys,"A",{id:!0,class:!0,href:!0});var ti=i(X);S=a(ti,"SPAN",{});var ni=i(S);$(ee.$$.fragment,ni),ni.forEach(t),ti.forEach(t),ce=h(Ys),I=a(Ys,"SPAN",{});var oi=i(I);pe=s(oi,"Overview"),oi.forEach(t),Ys.forEach(t),ae=h(n),Q=a(n,"P",{});var Hs=i(Q);A=s(Hs,"The ConvBERT model was proposed in "),te=a(Hs,"A",{href:!0,rel:!0});var si=i(te);J=s(si,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),si.forEach(t),j=s(Hs,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),Hs.forEach(t),x=h(n),oe=a(n,"P",{});var ri=i(oe);Y=s(ri,"The abstract from the paper is the following:"),ri.forEach(t),ie=h(n),se=a(n,"P",{});var ai=i(se);R=a(ai,"EM",{});var ii=i(R);me=s(ii,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),ii.forEach(t),ai.forEach(t),le=h(n),q=a(n,"P",{});var li=i(q);he=s(li,"ConvBERT training tips are similar to those of BERT."),li.forEach(t),W=h(n),G=a(n,"P",{});var lo=i(G);fe=s(lo,"This model was contributed by "),L=a(lo,"A",{href:!0,rel:!0});var di=i(L);ue=s(di,"abhishek"),di.forEach(t),ge=s(lo,`. The original implementation can be found
here: `),P=a(lo,"A",{href:!0,rel:!0});var ci=i(P);_e=s(ci,"https://github.com/yitu-opensource/ConvBert"),ci.forEach(t),lo.forEach(t),U=h(n),Z=a(n,"H2",{class:!0});var Qs=i(Z);u=a(Qs,"A",{id:!0,class:!0,href:!0});var pi=i(u);E=a(pi,"SPAN",{});var mi=i(E);$(V.$$.fragment,mi),mi.forEach(t),pi.forEach(t),Be=h(Qs),Ce=a(Qs,"SPAN",{});var hi=i(Ce);O=s(hi,"ConvBertConfig"),hi.forEach(t),Qs.forEach(t),Fe=h(n),re=a(n,"DIV",{class:!0});var tn=i(re);$(be.$$.fragment,tn),D=h(tn),N=a(tn,"P",{});var tt=i(N);Ee=s(tt,"This is the configuration class to store the configuration of a "),Te=a(tt,"A",{href:!0});var fi=i(Te);H=s(fi,"ConvBertModel"),fi.forEach(t),Me=s(tt,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=a(tt,"A",{href:!0,rel:!0});var ui=i(ke);ve=s(ui,"conv-bert-base"),ui.forEach(t),ze=s(tt,` architecture. Configuration objects inherit from
`),Js=a(tt,"A",{href:!0});var gi=i(Js);Ol=s(gi,"PretrainedConfig"),gi.forEach(t),Dl=s(tt," and can be used to control the model outputs. Read the documentation from "),Gs=a(tt,"A",{href:!0});var _i=i(Gs);Ll=s(_i,"PretrainedConfig"),_i.forEach(t),Sl=s(tt,`
for more information.`),tt.forEach(t),Il=h(tn),$(on.$$.fragment,tn),tn.forEach(t),Bi=h(n),Ct=a(n,"H2",{class:!0});var Vs=i(Ct);sn=a(Vs,"A",{id:!0,class:!0,href:!0});var vi=i(sn);Yr=a(vi,"SPAN",{});var bi=i(Yr);$(ko.$$.fragment,bi),bi.forEach(t),vi.forEach(t),Rl=h(Vs),Hr=a(Vs,"SPAN",{});var ki=i(Hr);Wl=s(ki,"ConvBertTokenizer"),ki.forEach(t),Vs.forEach(t),Ei=h(n),xe=a(n,"DIV",{class:!0});var Ie=i(xe);$(To.$$.fragment,Ie),Ul=h(Ie),ht=a(Ie,"P",{});var gt=i(ht);Yl=s(gt,"Construct a ConvBERT tokenizer. "),Zs=a(gt,"A",{href:!0});var Ti=i(Zs);Hl=s(Ti,"ConvBertTokenizer"),Ti.forEach(t),Ql=s(gt," is identical to "),Xs=a(gt,"A",{href:!0});var $i=i(Xs);Vl=s($i,"BertTokenizer"),$i.forEach(t),Kl=s(gt,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),er=a(gt,"A",{href:!0});var wi=i(er);Jl=s(wi,"BertTokenizer"),wi.forEach(t),Gl=s(gt,` for usage examples and
documentation concerning parameters.`),gt.forEach(t),Zl=h(Ie),_t=a(Ie,"DIV",{class:!0});var nn=i(_t);$($o.$$.fragment,nn),Xl=h(nn),Qr=a(nn,"P",{});var yi=i(Qr);ed=s(yi,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),yi.forEach(t),td=h(nn),wo=a(nn,"UL",{});var Ks=i(wo);tr=a(Ks,"LI",{});var Cr=i(tr);nd=s(Cr,"single sequence: "),Vr=a(Cr,"CODE",{});var Ci=i(Vr);od=s(Ci,"[CLS] X [SEP]"),Ci.forEach(t),Cr.forEach(t),sd=h(Ks),nr=a(Ks,"LI",{});var Fr=i(nr);rd=s(Fr,"pair of sequences: "),Kr=a(Fr,"CODE",{});var Tf=i(Kr);ad=s(Tf,"[CLS] A [SEP] B [SEP]"),Tf.forEach(t),Fr.forEach(t),Ks.forEach(t),nn.forEach(t),id=h(Ie),rn=a(Ie,"DIV",{class:!0});var nl=i(rn);$(yo.$$.fragment,nl),ld=h(nl),Co=a(nl,"P",{});var ol=i(Co);dd=s(ol,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Jr=a(ol,"CODE",{});var $f=i(Jr);cd=s($f,"prepare_for_model"),$f.forEach(t),pd=s(ol," method."),ol.forEach(t),nl.forEach(t),md=h(Ie),nt=a(Ie,"DIV",{class:!0});var co=i(nt);$(Fo.$$.fragment,co),hd=h(co),Gr=a(co,"P",{});var wf=i(Gr);fd=s(wf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),wf.forEach(t),ud=h(co),$(an.$$.fragment,co),gd=h(co),Ft=a(co,"P",{});var Br=i(Ft);_d=s(Br,"If "),Zr=a(Br,"CODE",{});var yf=i(Zr);vd=s(yf,"token_ids_1"),yf.forEach(t),bd=s(Br," is "),Xr=a(Br,"CODE",{});var Cf=i(Xr);kd=s(Cf,"None"),Cf.forEach(t),Td=s(Br,", this method only returns the first portion of the mask (0s)."),Br.forEach(t),co.forEach(t),$d=h(Ie),or=a(Ie,"DIV",{class:!0});var Ff=i(or);$(Bo.$$.fragment,Ff),Ff.forEach(t),Ie.forEach(t),Mi=h(n),Bt=a(n,"H2",{class:!0});var sl=i(Bt);ln=a(sl,"A",{id:!0,class:!0,href:!0});var Bf=i(ln);ea=a(Bf,"SPAN",{});var Ef=i(ea);$(Eo.$$.fragment,Ef),Ef.forEach(t),Bf.forEach(t),wd=h(sl),ta=a(sl,"SPAN",{});var Mf=i(ta);yd=s(Mf,"ConvBertTokenizerFast"),Mf.forEach(t),sl.forEach(t),zi=h(n),Je=a(n,"DIV",{class:!0});var po=i(Je);$(Mo.$$.fragment,po),Cd=h(po),zo=a(po,"P",{});var rl=i(zo);Fd=s(rl,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),na=a(rl,"EM",{});var zf=i(na);Bd=s(zf,"tokenizers"),zf.forEach(t),Ed=s(rl," library)."),rl.forEach(t),Md=h(po),dn=a(po,"P",{});var Fi=i(dn);sr=a(Fi,"A",{href:!0});var jf=i(sr);zd=s(jf,"ConvBertTokenizerFast"),jf.forEach(t),jd=s(Fi," is identical to "),rr=a(Fi,"A",{href:!0});var qf=i(rr);qd=s(qf,"BertTokenizerFast"),qf.forEach(t),xd=s(Fi,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Fi.forEach(t),Pd=h(po),jo=a(po,"P",{});var al=i(jo);Nd=s(al,"Refer to superclass "),ar=a(al,"A",{href:!0});var xf=i(ar);Ad=s(xf,"BertTokenizerFast"),xf.forEach(t),Od=s(al," for usage examples and documentation concerning parameters."),al.forEach(t),po.forEach(t),ji=h(n),Et=a(n,"H2",{class:!0});var il=i(Et);cn=a(il,"A",{id:!0,class:!0,href:!0});var Pf=i(cn);oa=a(Pf,"SPAN",{});var Nf=i(oa);$(qo.$$.fragment,Nf),Nf.forEach(t),Pf.forEach(t),Dd=h(il),sa=a(il,"SPAN",{});var Af=i(sa);Ld=s(Af,"ConvBertModel"),Af.forEach(t),il.forEach(t),qi=h(n),ft=a(n,"DIV",{class:!0});var Er=i(ft);$(xo.$$.fragment,Er),Sd=h(Er),Po=a(Er,"P",{});var ll=i(Po);Id=s(ll,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),No=a(ll,"A",{href:!0,rel:!0});var Of=i(No);Rd=s(Of,"torch.nn.Module"),Of.forEach(t),Wd=s(ll,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ll.forEach(t),Ud=h(Er),ot=a(Er,"DIV",{class:!0});var mo=i(ot);$(Ao.$$.fragment,mo),Yd=h(mo),Mt=a(mo,"P",{});var Mr=i(Mt);Hd=s(Mr,"The "),ir=a(Mr,"A",{href:!0});var Df=i(ir);Qd=s(Df,"ConvBertModel"),Df.forEach(t),Vd=s(Mr," forward method, overrides the "),ra=a(Mr,"CODE",{});var Lf=i(ra);Kd=s(Lf,"__call__"),Lf.forEach(t),Jd=s(Mr," special method."),Mr.forEach(t),Gd=h(mo),$(pn.$$.fragment,mo),Zd=h(mo),$(mn.$$.fragment,mo),mo.forEach(t),Er.forEach(t),xi=h(n),zt=a(n,"H2",{class:!0});var dl=i(zt);hn=a(dl,"A",{id:!0,class:!0,href:!0});var Sf=i(hn);aa=a(Sf,"SPAN",{});var If=i(aa);$(Oo.$$.fragment,If),If.forEach(t),Sf.forEach(t),Xd=h(dl),ia=a(dl,"SPAN",{});var Rf=i(ia);ec=s(Rf,"ConvBertForMaskedLM"),Rf.forEach(t),dl.forEach(t),Pi=h(n),ut=a(n,"DIV",{class:!0});var zr=i(ut);$(Do.$$.fragment,zr),tc=h(zr),jt=a(zr,"P",{});var jr=i(jt);nc=s(jr,"ConvBERT Model with a "),la=a(jr,"CODE",{});var Wf=i(la);oc=s(Wf,"language modeling"),Wf.forEach(t),sc=s(jr,` head on top.
This model is a PyTorch `),Lo=a(jr,"A",{href:!0,rel:!0});var Uf=i(Lo);rc=s(Uf,"torch.nn.Module"),Uf.forEach(t),ac=s(jr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jr.forEach(t),ic=h(zr),Re=a(zr,"DIV",{class:!0});var vt=i(Re);$(So.$$.fragment,vt),lc=h(vt),qt=a(vt,"P",{});var qr=i(qt);dc=s(qr,"The "),lr=a(qr,"A",{href:!0});var Yf=i(lr);cc=s(Yf,"ConvBertForMaskedLM"),Yf.forEach(t),pc=s(qr," forward method, overrides the "),da=a(qr,"CODE",{});var Hf=i(da);mc=s(Hf,"__call__"),Hf.forEach(t),hc=s(qr," special method."),qr.forEach(t),fc=h(vt),$(fn.$$.fragment,vt),uc=h(vt),$(un.$$.fragment,vt),gc=h(vt),$(gn.$$.fragment,vt),vt.forEach(t),zr.forEach(t),Ni=h(n),xt=a(n,"H2",{class:!0});var cl=i(xt);_n=a(cl,"A",{id:!0,class:!0,href:!0});var Qf=i(_n);ca=a(Qf,"SPAN",{});var Vf=i(ca);$(Io.$$.fragment,Vf),Vf.forEach(t),Qf.forEach(t),_c=h(cl),pa=a(cl,"SPAN",{});var Kf=i(pa);vc=s(Kf,"ConvBertForSequenceClassification"),Kf.forEach(t),cl.forEach(t),Ai=h(n),Ge=a(n,"DIV",{class:!0});var ho=i(Ge);$(Ro.$$.fragment,ho),bc=h(ho),ma=a(ho,"P",{});var Jf=i(ma);kc=s(Jf,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jf.forEach(t),Tc=h(ho),Wo=a(ho,"P",{});var pl=i(Wo);$c=s(pl,"This model is a PyTorch "),Uo=a(pl,"A",{href:!0,rel:!0});var Gf=i(Uo);wc=s(Gf,"torch.nn.Module"),Gf.forEach(t),yc=s(pl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pl.forEach(t),Cc=h(ho),je=a(ho,"DIV",{class:!0});var Ke=i(je);$(Yo.$$.fragment,Ke),Fc=h(Ke),Pt=a(Ke,"P",{});var xr=i(Pt);Bc=s(xr,"The "),dr=a(xr,"A",{href:!0});var Zf=i(dr);Ec=s(Zf,"ConvBertForSequenceClassification"),Zf.forEach(t),Mc=s(xr," forward method, overrides the "),ha=a(xr,"CODE",{});var Xf=i(ha);zc=s(Xf,"__call__"),Xf.forEach(t),jc=s(xr," special method."),xr.forEach(t),qc=h(Ke),$(vn.$$.fragment,Ke),xc=h(Ke),$(bn.$$.fragment,Ke),Pc=h(Ke),$(kn.$$.fragment,Ke),Nc=h(Ke),$(Tn.$$.fragment,Ke),Ac=h(Ke),$($n.$$.fragment,Ke),Ke.forEach(t),ho.forEach(t),Oi=h(n),Nt=a(n,"H2",{class:!0});var ml=i(Nt);wn=a(ml,"A",{id:!0,class:!0,href:!0});var eu=i(wn);fa=a(eu,"SPAN",{});var tu=i(fa);$(Ho.$$.fragment,tu),tu.forEach(t),eu.forEach(t),Oc=h(ml),ua=a(ml,"SPAN",{});var nu=i(ua);Dc=s(nu,"ConvBertForMultipleChoice"),nu.forEach(t),ml.forEach(t),Di=h(n),Ze=a(n,"DIV",{class:!0});var fo=i(Ze);$(Qo.$$.fragment,fo),Lc=h(fo),ga=a(fo,"P",{});var ou=i(ga);Sc=s(ou,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ou.forEach(t),Ic=h(fo),Vo=a(fo,"P",{});var hl=i(Vo);Rc=s(hl,"This model is a PyTorch "),Ko=a(hl,"A",{href:!0,rel:!0});var su=i(Ko);Wc=s(su,"torch.nn.Module"),su.forEach(t),Uc=s(hl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),hl.forEach(t),Yc=h(fo),st=a(fo,"DIV",{class:!0});var uo=i(st);$(Jo.$$.fragment,uo),Hc=h(uo),At=a(uo,"P",{});var Pr=i(At);Qc=s(Pr,"The "),cr=a(Pr,"A",{href:!0});var ru=i(cr);Vc=s(ru,"ConvBertForMultipleChoice"),ru.forEach(t),Kc=s(Pr," forward method, overrides the "),_a=a(Pr,"CODE",{});var au=i(_a);Jc=s(au,"__call__"),au.forEach(t),Gc=s(Pr," special method."),Pr.forEach(t),Zc=h(uo),$(yn.$$.fragment,uo),Xc=h(uo),$(Cn.$$.fragment,uo),uo.forEach(t),fo.forEach(t),Li=h(n),Ot=a(n,"H2",{class:!0});var fl=i(Ot);Fn=a(fl,"A",{id:!0,class:!0,href:!0});var iu=i(Fn);va=a(iu,"SPAN",{});var lu=i(va);$(Go.$$.fragment,lu),lu.forEach(t),iu.forEach(t),ep=h(fl),ba=a(fl,"SPAN",{});var du=i(ba);tp=s(du,"ConvBertForTokenClassification"),du.forEach(t),fl.forEach(t),Si=h(n),Xe=a(n,"DIV",{class:!0});var go=i(Xe);$(Zo.$$.fragment,go),np=h(go),ka=a(go,"P",{});var cu=i(ka);op=s(cu,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cu.forEach(t),sp=h(go),Xo=a(go,"P",{});var ul=i(Xo);rp=s(ul,"This model is a PyTorch "),es=a(ul,"A",{href:!0,rel:!0});var pu=i(es);ap=s(pu,"torch.nn.Module"),pu.forEach(t),ip=s(ul,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ul.forEach(t),lp=h(go),We=a(go,"DIV",{class:!0});var bt=i(We);$(ts.$$.fragment,bt),dp=h(bt),Dt=a(bt,"P",{});var Nr=i(Dt);cp=s(Nr,"The "),pr=a(Nr,"A",{href:!0});var mu=i(pr);pp=s(mu,"ConvBertForTokenClassification"),mu.forEach(t),mp=s(Nr," forward method, overrides the "),Ta=a(Nr,"CODE",{});var hu=i(Ta);hp=s(hu,"__call__"),hu.forEach(t),fp=s(Nr," special method."),Nr.forEach(t),up=h(bt),$(Bn.$$.fragment,bt),gp=h(bt),$(En.$$.fragment,bt),_p=h(bt),$(Mn.$$.fragment,bt),bt.forEach(t),go.forEach(t),Ii=h(n),Lt=a(n,"H2",{class:!0});var gl=i(Lt);zn=a(gl,"A",{id:!0,class:!0,href:!0});var fu=i(zn);$a=a(fu,"SPAN",{});var uu=i($a);$(ns.$$.fragment,uu),uu.forEach(t),fu.forEach(t),vp=h(gl),wa=a(gl,"SPAN",{});var gu=i(wa);bp=s(gu,"ConvBertForQuestionAnswering"),gu.forEach(t),gl.forEach(t),Ri=h(n),et=a(n,"DIV",{class:!0});var _o=i(et);$(os.$$.fragment,_o),kp=h(_o),St=a(_o,"P",{});var Ar=i(St);Tp=s(Ar,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ya=a(Ar,"CODE",{});var _u=i(ya);$p=s(_u,"span start logits"),_u.forEach(t),wp=s(Ar," and "),Ca=a(Ar,"CODE",{});var vu=i(Ca);yp=s(vu,"span end logits"),vu.forEach(t),Cp=s(Ar,")."),Ar.forEach(t),Fp=h(_o),ss=a(_o,"P",{});var _l=i(ss);Bp=s(_l,"This model is a PyTorch "),rs=a(_l,"A",{href:!0,rel:!0});var bu=i(rs);Ep=s(bu,"torch.nn.Module"),bu.forEach(t),Mp=s(_l,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_l.forEach(t),zp=h(_o),Ue=a(_o,"DIV",{class:!0});var kt=i(Ue);$(as.$$.fragment,kt),jp=h(kt),It=a(kt,"P",{});var Or=i(It);qp=s(Or,"The "),mr=a(Or,"A",{href:!0});var ku=i(mr);xp=s(ku,"ConvBertForQuestionAnswering"),ku.forEach(t),Pp=s(Or," forward method, overrides the "),Fa=a(Or,"CODE",{});var Tu=i(Fa);Np=s(Tu,"__call__"),Tu.forEach(t),Ap=s(Or," special method."),Or.forEach(t),Op=h(kt),$(jn.$$.fragment,kt),Dp=h(kt),$(qn.$$.fragment,kt),Lp=h(kt),$(xn.$$.fragment,kt),kt.forEach(t),_o.forEach(t),Wi=h(n),Rt=a(n,"H2",{class:!0});var vl=i(Rt);Pn=a(vl,"A",{id:!0,class:!0,href:!0});var $u=i(Pn);Ba=a($u,"SPAN",{});var wu=i(Ba);$(is.$$.fragment,wu),wu.forEach(t),$u.forEach(t),Sp=h(vl),Ea=a(vl,"SPAN",{});var yu=i(Ea);Ip=s(yu,"TFConvBertModel"),yu.forEach(t),vl.forEach(t),Ui=h(n),Pe=a(n,"DIV",{class:!0});var it=i(Pe);$(ls.$$.fragment,it),Rp=h(it),Ma=a(it,"P",{});var Cu=i(Ma);Wp=s(Cu,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Cu.forEach(t),Up=h(it),ds=a(it,"P",{});var bl=i(ds);Yp=s(bl,"This model inherits from "),hr=a(bl,"A",{href:!0});var Fu=i(hr);Hp=s(Fu,"TFPreTrainedModel"),Fu.forEach(t),Qp=s(bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl.forEach(t),Vp=h(it),cs=a(it,"P",{});var kl=i(cs);Kp=s(kl,"This model is also a "),ps=a(kl,"A",{href:!0,rel:!0});var Bu=i(ps);Jp=s(Bu,"tf.keras.Model"),Bu.forEach(t),Gp=s(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),Zp=h(it),$(Nn.$$.fragment,it),Xp=h(it),rt=a(it,"DIV",{class:!0});var vo=i(rt);$(ms.$$.fragment,vo),em=h(vo),Wt=a(vo,"P",{});var Dr=i(Wt);tm=s(Dr,"The "),fr=a(Dr,"A",{href:!0});var Eu=i(fr);nm=s(Eu,"TFConvBertModel"),Eu.forEach(t),om=s(Dr," forward method, overrides the "),za=a(Dr,"CODE",{});var Mu=i(za);sm=s(Mu,"__call__"),Mu.forEach(t),rm=s(Dr," special method."),Dr.forEach(t),am=h(vo),$(An.$$.fragment,vo),im=h(vo),$(On.$$.fragment,vo),vo.forEach(t),it.forEach(t),Yi=h(n),Ut=a(n,"H2",{class:!0});var Tl=i(Ut);Dn=a(Tl,"A",{id:!0,class:!0,href:!0});var zu=i(Dn);ja=a(zu,"SPAN",{});var ju=i(ja);$(hs.$$.fragment,ju),ju.forEach(t),zu.forEach(t),lm=h(Tl),qa=a(Tl,"SPAN",{});var qu=i(qa);dm=s(qu,"TFConvBertForMaskedLM"),qu.forEach(t),Tl.forEach(t),Hi=h(n),Ne=a(n,"DIV",{class:!0});var lt=i(Ne);$(fs.$$.fragment,lt),cm=h(lt),us=a(lt,"P",{});var $l=i(us);pm=s($l,"ConvBERT Model with a "),xa=a($l,"CODE",{});var xu=i(xa);mm=s(xu,"language modeling"),xu.forEach(t),hm=s($l," head on top."),$l.forEach(t),fm=h(lt),gs=a(lt,"P",{});var wl=i(gs);um=s(wl,"This model inherits from "),ur=a(wl,"A",{href:!0});var Pu=i(ur);gm=s(Pu,"TFPreTrainedModel"),Pu.forEach(t),_m=s(wl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wl.forEach(t),vm=h(lt),_s=a(lt,"P",{});var yl=i(_s);bm=s(yl,"This model is also a "),vs=a(yl,"A",{href:!0,rel:!0});var Nu=i(vs);km=s(Nu,"tf.keras.Model"),Nu.forEach(t),Tm=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),$m=h(lt),$(Ln.$$.fragment,lt),wm=h(lt),Ye=a(lt,"DIV",{class:!0});var Tt=i(Ye);$(bs.$$.fragment,Tt),ym=h(Tt),Yt=a(Tt,"P",{});var Lr=i(Yt);Cm=s(Lr,"The "),gr=a(Lr,"A",{href:!0});var Au=i(gr);Fm=s(Au,"TFConvBertForMaskedLM"),Au.forEach(t),Bm=s(Lr," forward method, overrides the "),Pa=a(Lr,"CODE",{});var Ou=i(Pa);Em=s(Ou,"__call__"),Ou.forEach(t),Mm=s(Lr," special method."),Lr.forEach(t),zm=h(Tt),$(Sn.$$.fragment,Tt),jm=h(Tt),$(In.$$.fragment,Tt),qm=h(Tt),$(Rn.$$.fragment,Tt),Tt.forEach(t),lt.forEach(t),Qi=h(n),Ht=a(n,"H2",{class:!0});var Cl=i(Ht);Wn=a(Cl,"A",{id:!0,class:!0,href:!0});var Du=i(Wn);Na=a(Du,"SPAN",{});var Lu=i(Na);$(ks.$$.fragment,Lu),Lu.forEach(t),Du.forEach(t),xm=h(Cl),Aa=a(Cl,"SPAN",{});var Su=i(Aa);Pm=s(Su,"TFConvBertForSequenceClassification"),Su.forEach(t),Cl.forEach(t),Vi=h(n),Ae=a(n,"DIV",{class:!0});var dt=i(Ae);$(Ts.$$.fragment,dt),Nm=h(dt),Oa=a(dt,"P",{});var Iu=i(Oa);Am=s(Iu,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Iu.forEach(t),Om=h(dt),$s=a(dt,"P",{});var Fl=i($s);Dm=s(Fl,"This model inherits from "),_r=a(Fl,"A",{href:!0});var Ru=i(_r);Lm=s(Ru,"TFPreTrainedModel"),Ru.forEach(t),Sm=s(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),Im=h(dt),ws=a(dt,"P",{});var Bl=i(ws);Rm=s(Bl,"This model is also a "),ys=a(Bl,"A",{href:!0,rel:!0});var Wu=i(ys);Wm=s(Wu,"tf.keras.Model"),Wu.forEach(t),Um=s(Bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bl.forEach(t),Ym=h(dt),$(Un.$$.fragment,dt),Hm=h(dt),He=a(dt,"DIV",{class:!0});var $t=i(He);$(Cs.$$.fragment,$t),Qm=h($t),Qt=a($t,"P",{});var Sr=i(Qt);Vm=s(Sr,"The "),vr=a(Sr,"A",{href:!0});var Uu=i(vr);Km=s(Uu,"TFConvBertForSequenceClassification"),Uu.forEach(t),Jm=s(Sr," forward method, overrides the "),Da=a(Sr,"CODE",{});var Yu=i(Da);Gm=s(Yu,"__call__"),Yu.forEach(t),Zm=s(Sr," special method."),Sr.forEach(t),Xm=h($t),$(Yn.$$.fragment,$t),eh=h($t),$(Hn.$$.fragment,$t),th=h($t),$(Qn.$$.fragment,$t),$t.forEach(t),dt.forEach(t),Ki=h(n),Vt=a(n,"H2",{class:!0});var El=i(Vt);Vn=a(El,"A",{id:!0,class:!0,href:!0});var Hu=i(Vn);La=a(Hu,"SPAN",{});var Qu=i(La);$(Fs.$$.fragment,Qu),Qu.forEach(t),Hu.forEach(t),nh=h(El),Sa=a(El,"SPAN",{});var Vu=i(Sa);oh=s(Vu,"TFConvBertForMultipleChoice"),Vu.forEach(t),El.forEach(t),Ji=h(n),Oe=a(n,"DIV",{class:!0});var ct=i(Oe);$(Bs.$$.fragment,ct),sh=h(ct),Ia=a(ct,"P",{});var Ku=i(Ia);rh=s(Ku,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Ku.forEach(t),ah=h(ct),Es=a(ct,"P",{});var Ml=i(Es);ih=s(Ml,"This model inherits from "),br=a(Ml,"A",{href:!0});var Ju=i(br);lh=s(Ju,"TFPreTrainedModel"),Ju.forEach(t),dh=s(Ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml.forEach(t),ch=h(ct),Ms=a(ct,"P",{});var zl=i(Ms);ph=s(zl,"This model is also a "),zs=a(zl,"A",{href:!0,rel:!0});var Gu=i(zs);mh=s(Gu,"tf.keras.Model"),Gu.forEach(t),hh=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),fh=h(ct),$(Kn.$$.fragment,ct),uh=h(ct),at=a(ct,"DIV",{class:!0});var bo=i(at);$(js.$$.fragment,bo),gh=h(bo),Kt=a(bo,"P",{});var Ir=i(Kt);_h=s(Ir,"The "),kr=a(Ir,"A",{href:!0});var Zu=i(kr);vh=s(Zu,"TFConvBertForMultipleChoice"),Zu.forEach(t),bh=s(Ir," forward method, overrides the "),Ra=a(Ir,"CODE",{});var Xu=i(Ra);kh=s(Xu,"__call__"),Xu.forEach(t),Th=s(Ir," special method."),Ir.forEach(t),$h=h(bo),$(Jn.$$.fragment,bo),wh=h(bo),$(Gn.$$.fragment,bo),bo.forEach(t),ct.forEach(t),Gi=h(n),Jt=a(n,"H2",{class:!0});var jl=i(Jt);Zn=a(jl,"A",{id:!0,class:!0,href:!0});var eg=i(Zn);Wa=a(eg,"SPAN",{});var tg=i(Wa);$(qs.$$.fragment,tg),tg.forEach(t),eg.forEach(t),yh=h(jl),Ua=a(jl,"SPAN",{});var ng=i(Ua);Ch=s(ng,"TFConvBertForTokenClassification"),ng.forEach(t),jl.forEach(t),Zi=h(n),De=a(n,"DIV",{class:!0});var pt=i(De);$(xs.$$.fragment,pt),Fh=h(pt),Ya=a(pt,"P",{});var og=i(Ya);Bh=s(og,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),og.forEach(t),Eh=h(pt),Ps=a(pt,"P",{});var ql=i(Ps);Mh=s(ql,"This model inherits from "),Tr=a(ql,"A",{href:!0});var sg=i(Tr);zh=s(sg,"TFPreTrainedModel"),sg.forEach(t),jh=s(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),qh=h(pt),Ns=a(pt,"P",{});var xl=i(Ns);xh=s(xl,"This model is also a "),As=a(xl,"A",{href:!0,rel:!0});var rg=i(As);Ph=s(rg,"tf.keras.Model"),rg.forEach(t),Nh=s(xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xl.forEach(t),Ah=h(pt),$(Xn.$$.fragment,pt),Oh=h(pt),Qe=a(pt,"DIV",{class:!0});var wt=i(Qe);$(Os.$$.fragment,wt),Dh=h(wt),Gt=a(wt,"P",{});var Rr=i(Gt);Lh=s(Rr,"The "),$r=a(Rr,"A",{href:!0});var ag=i($r);Sh=s(ag,"TFConvBertForTokenClassification"),ag.forEach(t),Ih=s(Rr," forward method, overrides the "),Ha=a(Rr,"CODE",{});var ig=i(Ha);Rh=s(ig,"__call__"),ig.forEach(t),Wh=s(Rr," special method."),Rr.forEach(t),Uh=h(wt),$(eo.$$.fragment,wt),Yh=h(wt),$(to.$$.fragment,wt),Hh=h(wt),$(no.$$.fragment,wt),wt.forEach(t),pt.forEach(t),Xi=h(n),Zt=a(n,"H2",{class:!0});var Pl=i(Zt);oo=a(Pl,"A",{id:!0,class:!0,href:!0});var lg=i(oo);Qa=a(lg,"SPAN",{});var dg=i(Qa);$(Ds.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Qh=h(Pl),Va=a(Pl,"SPAN",{});var cg=i(Va);Vh=s(cg,"TFConvBertForQuestionAnswering"),cg.forEach(t),Pl.forEach(t),el=h(n),Le=a(n,"DIV",{class:!0});var mt=i(Le);$(Ls.$$.fragment,mt),Kh=h(mt),Xt=a(mt,"P",{});var Wr=i(Xt);Jh=s(Wr,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ka=a(Wr,"CODE",{});var pg=i(Ka);Gh=s(pg,"span start logits"),pg.forEach(t),Zh=s(Wr," and "),Ja=a(Wr,"CODE",{});var mg=i(Ja);Xh=s(mg,"span end logits"),mg.forEach(t),ef=s(Wr,")."),Wr.forEach(t),tf=h(mt),Ss=a(mt,"P",{});var Nl=i(Ss);nf=s(Nl,"This model inherits from "),wr=a(Nl,"A",{href:!0});var hg=i(wr);of=s(hg,"TFPreTrainedModel"),hg.forEach(t),sf=s(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),rf=h(mt),Is=a(mt,"P",{});var Al=i(Is);af=s(Al,"This model is also a "),Rs=a(Al,"A",{href:!0,rel:!0});var fg=i(Rs);lf=s(fg,"tf.keras.Model"),fg.forEach(t),df=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),cf=h(mt),$(so.$$.fragment,mt),pf=h(mt),Ve=a(mt,"DIV",{class:!0});var yt=i(Ve);$(Ws.$$.fragment,yt),mf=h(yt),en=a(yt,"P",{});var Ur=i(en);hf=s(Ur,"The "),yr=a(Ur,"A",{href:!0});var ug=i(yr);ff=s(ug,"TFConvBertForQuestionAnswering"),ug.forEach(t),uf=s(Ur," forward method, overrides the "),Ga=a(Ur,"CODE",{});var gg=i(Ga);gf=s(gg,"__call__"),gg.forEach(t),_f=s(Ur," special method."),Ur.forEach(t),vf=h(yt),$(ro.$$.fragment,yt),bf=h(yt),$(ao.$$.fragment,yt),kf=h(yt),$(io.$$.fragment,yt),yt.forEach(t),mt.forEach(t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(p_)),k(p,"id","convbert"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#convbert"),k(c,"class","relative group"),k(X,"id","overview"),k(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(X,"href","#overview"),k(z,"class","relative group"),k(te,"href","https://arxiv.org/abs/2008.02496"),k(te,"rel","nofollow"),k(L,"href","https://huggingface.co/abhishek"),k(L,"rel","nofollow"),k(P,"href","https://github.com/yitu-opensource/ConvBert"),k(P,"rel","nofollow"),k(u,"id","transformers.ConvBertConfig"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#transformers.ConvBertConfig"),k(Z,"class","relative group"),k(Te,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),k(ke,"rel","nofollow"),k(Js,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(Gs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(sn,"id","transformers.ConvBertTokenizer"),k(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(sn,"href","#transformers.ConvBertTokenizer"),k(Ct,"class","relative group"),k(Zs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer"),k(Xs,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(er,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(or,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ln,"id","transformers.ConvBertTokenizerFast"),k(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ln,"href","#transformers.ConvBertTokenizerFast"),k(Bt,"class","relative group"),k(sr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),k(rr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(ar,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(cn,"id","transformers.ConvBertModel"),k(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(cn,"href","#transformers.ConvBertModel"),k(Et,"class","relative group"),k(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(No,"rel","nofollow"),k(ir,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(hn,"id","transformers.ConvBertForMaskedLM"),k(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(hn,"href","#transformers.ConvBertForMaskedLM"),k(zt,"class","relative group"),k(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Lo,"rel","nofollow"),k(lr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),k(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(_n,"id","transformers.ConvBertForSequenceClassification"),k(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(_n,"href","#transformers.ConvBertForSequenceClassification"),k(xt,"class","relative group"),k(Uo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Uo,"rel","nofollow"),k(dr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),k(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(wn,"id","transformers.ConvBertForMultipleChoice"),k(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(wn,"href","#transformers.ConvBertForMultipleChoice"),k(Nt,"class","relative group"),k(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ko,"rel","nofollow"),k(cr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Fn,"id","transformers.ConvBertForTokenClassification"),k(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Fn,"href","#transformers.ConvBertForTokenClassification"),k(Ot,"class","relative group"),k(es,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(es,"rel","nofollow"),k(pr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(zn,"id","transformers.ConvBertForQuestionAnswering"),k(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(zn,"href","#transformers.ConvBertForQuestionAnswering"),k(Lt,"class","relative group"),k(rs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(rs,"rel","nofollow"),k(mr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Pn,"id","transformers.TFConvBertModel"),k(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Pn,"href","#transformers.TFConvBertModel"),k(Rt,"class","relative group"),k(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ps,"rel","nofollow"),k(fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel"),k(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Dn,"id","transformers.TFConvBertForMaskedLM"),k(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Dn,"href","#transformers.TFConvBertForMaskedLM"),k(Ut,"class","relative group"),k(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(vs,"rel","nofollow"),k(gr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Wn,"id","transformers.TFConvBertForSequenceClassification"),k(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Wn,"href","#transformers.TFConvBertForSequenceClassification"),k(Ht,"class","relative group"),k(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ys,"rel","nofollow"),k(vr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Vn,"id","transformers.TFConvBertForMultipleChoice"),k(Vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Vn,"href","#transformers.TFConvBertForMultipleChoice"),k(Vt,"class","relative group"),k(br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(zs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(zs,"rel","nofollow"),k(kr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),k(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Zn,"id","transformers.TFConvBertForTokenClassification"),k(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Zn,"href","#transformers.TFConvBertForTokenClassification"),k(Jt,"class","relative group"),k(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(As,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(As,"rel","nofollow"),k($r,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(oo,"id","transformers.TFConvBertForQuestionAnswering"),k(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(oo,"href","#transformers.TFConvBertForQuestionAnswering"),k(Zt,"class","relative group"),k(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Rs,"rel","nofollow"),k(yr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),k(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,d),_(n,g,b),_(n,c,b),e(c,p),e(p,v),w(l,v,null),e(c,f),e(c,M),e(M,de),_(n,K,b),_(n,z,b),e(z,X),e(X,S),w(ee,S,null),e(z,ce),e(z,I),e(I,pe),_(n,ae,b),_(n,Q,b),e(Q,A),e(Q,te),e(te,J),e(Q,j),_(n,x,b),_(n,oe,b),e(oe,Y),_(n,ie,b),_(n,se,b),e(se,R),e(R,me),_(n,le,b),_(n,q,b),e(q,he),_(n,W,b),_(n,G,b),e(G,fe),e(G,L),e(L,ue),e(G,ge),e(G,P),e(P,_e),_(n,U,b),_(n,Z,b),e(Z,u),e(u,E),w(V,E,null),e(Z,Be),e(Z,Ce),e(Ce,O),_(n,Fe,b),_(n,re,b),w(be,re,null),e(re,D),e(re,N),e(N,Ee),e(N,Te),e(Te,H),e(N,Me),e(N,ke),e(ke,ve),e(N,ze),e(N,Js),e(Js,Ol),e(N,Dl),e(N,Gs),e(Gs,Ll),e(N,Sl),e(re,Il),w(on,re,null),_(n,Bi,b),_(n,Ct,b),e(Ct,sn),e(sn,Yr),w(ko,Yr,null),e(Ct,Rl),e(Ct,Hr),e(Hr,Wl),_(n,Ei,b),_(n,xe,b),w(To,xe,null),e(xe,Ul),e(xe,ht),e(ht,Yl),e(ht,Zs),e(Zs,Hl),e(ht,Ql),e(ht,Xs),e(Xs,Vl),e(ht,Kl),e(ht,er),e(er,Jl),e(ht,Gl),e(xe,Zl),e(xe,_t),w($o,_t,null),e(_t,Xl),e(_t,Qr),e(Qr,ed),e(_t,td),e(_t,wo),e(wo,tr),e(tr,nd),e(tr,Vr),e(Vr,od),e(wo,sd),e(wo,nr),e(nr,rd),e(nr,Kr),e(Kr,ad),e(xe,id),e(xe,rn),w(yo,rn,null),e(rn,ld),e(rn,Co),e(Co,dd),e(Co,Jr),e(Jr,cd),e(Co,pd),e(xe,md),e(xe,nt),w(Fo,nt,null),e(nt,hd),e(nt,Gr),e(Gr,fd),e(nt,ud),w(an,nt,null),e(nt,gd),e(nt,Ft),e(Ft,_d),e(Ft,Zr),e(Zr,vd),e(Ft,bd),e(Ft,Xr),e(Xr,kd),e(Ft,Td),e(xe,$d),e(xe,or),w(Bo,or,null),_(n,Mi,b),_(n,Bt,b),e(Bt,ln),e(ln,ea),w(Eo,ea,null),e(Bt,wd),e(Bt,ta),e(ta,yd),_(n,zi,b),_(n,Je,b),w(Mo,Je,null),e(Je,Cd),e(Je,zo),e(zo,Fd),e(zo,na),e(na,Bd),e(zo,Ed),e(Je,Md),e(Je,dn),e(dn,sr),e(sr,zd),e(dn,jd),e(dn,rr),e(rr,qd),e(dn,xd),e(Je,Pd),e(Je,jo),e(jo,Nd),e(jo,ar),e(ar,Ad),e(jo,Od),_(n,ji,b),_(n,Et,b),e(Et,cn),e(cn,oa),w(qo,oa,null),e(Et,Dd),e(Et,sa),e(sa,Ld),_(n,qi,b),_(n,ft,b),w(xo,ft,null),e(ft,Sd),e(ft,Po),e(Po,Id),e(Po,No),e(No,Rd),e(Po,Wd),e(ft,Ud),e(ft,ot),w(Ao,ot,null),e(ot,Yd),e(ot,Mt),e(Mt,Hd),e(Mt,ir),e(ir,Qd),e(Mt,Vd),e(Mt,ra),e(ra,Kd),e(Mt,Jd),e(ot,Gd),w(pn,ot,null),e(ot,Zd),w(mn,ot,null),_(n,xi,b),_(n,zt,b),e(zt,hn),e(hn,aa),w(Oo,aa,null),e(zt,Xd),e(zt,ia),e(ia,ec),_(n,Pi,b),_(n,ut,b),w(Do,ut,null),e(ut,tc),e(ut,jt),e(jt,nc),e(jt,la),e(la,oc),e(jt,sc),e(jt,Lo),e(Lo,rc),e(jt,ac),e(ut,ic),e(ut,Re),w(So,Re,null),e(Re,lc),e(Re,qt),e(qt,dc),e(qt,lr),e(lr,cc),e(qt,pc),e(qt,da),e(da,mc),e(qt,hc),e(Re,fc),w(fn,Re,null),e(Re,uc),w(un,Re,null),e(Re,gc),w(gn,Re,null),_(n,Ni,b),_(n,xt,b),e(xt,_n),e(_n,ca),w(Io,ca,null),e(xt,_c),e(xt,pa),e(pa,vc),_(n,Ai,b),_(n,Ge,b),w(Ro,Ge,null),e(Ge,bc),e(Ge,ma),e(ma,kc),e(Ge,Tc),e(Ge,Wo),e(Wo,$c),e(Wo,Uo),e(Uo,wc),e(Wo,yc),e(Ge,Cc),e(Ge,je),w(Yo,je,null),e(je,Fc),e(je,Pt),e(Pt,Bc),e(Pt,dr),e(dr,Ec),e(Pt,Mc),e(Pt,ha),e(ha,zc),e(Pt,jc),e(je,qc),w(vn,je,null),e(je,xc),w(bn,je,null),e(je,Pc),w(kn,je,null),e(je,Nc),w(Tn,je,null),e(je,Ac),w($n,je,null),_(n,Oi,b),_(n,Nt,b),e(Nt,wn),e(wn,fa),w(Ho,fa,null),e(Nt,Oc),e(Nt,ua),e(ua,Dc),_(n,Di,b),_(n,Ze,b),w(Qo,Ze,null),e(Ze,Lc),e(Ze,ga),e(ga,Sc),e(Ze,Ic),e(Ze,Vo),e(Vo,Rc),e(Vo,Ko),e(Ko,Wc),e(Vo,Uc),e(Ze,Yc),e(Ze,st),w(Jo,st,null),e(st,Hc),e(st,At),e(At,Qc),e(At,cr),e(cr,Vc),e(At,Kc),e(At,_a),e(_a,Jc),e(At,Gc),e(st,Zc),w(yn,st,null),e(st,Xc),w(Cn,st,null),_(n,Li,b),_(n,Ot,b),e(Ot,Fn),e(Fn,va),w(Go,va,null),e(Ot,ep),e(Ot,ba),e(ba,tp),_(n,Si,b),_(n,Xe,b),w(Zo,Xe,null),e(Xe,np),e(Xe,ka),e(ka,op),e(Xe,sp),e(Xe,Xo),e(Xo,rp),e(Xo,es),e(es,ap),e(Xo,ip),e(Xe,lp),e(Xe,We),w(ts,We,null),e(We,dp),e(We,Dt),e(Dt,cp),e(Dt,pr),e(pr,pp),e(Dt,mp),e(Dt,Ta),e(Ta,hp),e(Dt,fp),e(We,up),w(Bn,We,null),e(We,gp),w(En,We,null),e(We,_p),w(Mn,We,null),_(n,Ii,b),_(n,Lt,b),e(Lt,zn),e(zn,$a),w(ns,$a,null),e(Lt,vp),e(Lt,wa),e(wa,bp),_(n,Ri,b),_(n,et,b),w(os,et,null),e(et,kp),e(et,St),e(St,Tp),e(St,ya),e(ya,$p),e(St,wp),e(St,Ca),e(Ca,yp),e(St,Cp),e(et,Fp),e(et,ss),e(ss,Bp),e(ss,rs),e(rs,Ep),e(ss,Mp),e(et,zp),e(et,Ue),w(as,Ue,null),e(Ue,jp),e(Ue,It),e(It,qp),e(It,mr),e(mr,xp),e(It,Pp),e(It,Fa),e(Fa,Np),e(It,Ap),e(Ue,Op),w(jn,Ue,null),e(Ue,Dp),w(qn,Ue,null),e(Ue,Lp),w(xn,Ue,null),_(n,Wi,b),_(n,Rt,b),e(Rt,Pn),e(Pn,Ba),w(is,Ba,null),e(Rt,Sp),e(Rt,Ea),e(Ea,Ip),_(n,Ui,b),_(n,Pe,b),w(ls,Pe,null),e(Pe,Rp),e(Pe,Ma),e(Ma,Wp),e(Pe,Up),e(Pe,ds),e(ds,Yp),e(ds,hr),e(hr,Hp),e(ds,Qp),e(Pe,Vp),e(Pe,cs),e(cs,Kp),e(cs,ps),e(ps,Jp),e(cs,Gp),e(Pe,Zp),w(Nn,Pe,null),e(Pe,Xp),e(Pe,rt),w(ms,rt,null),e(rt,em),e(rt,Wt),e(Wt,tm),e(Wt,fr),e(fr,nm),e(Wt,om),e(Wt,za),e(za,sm),e(Wt,rm),e(rt,am),w(An,rt,null),e(rt,im),w(On,rt,null),_(n,Yi,b),_(n,Ut,b),e(Ut,Dn),e(Dn,ja),w(hs,ja,null),e(Ut,lm),e(Ut,qa),e(qa,dm),_(n,Hi,b),_(n,Ne,b),w(fs,Ne,null),e(Ne,cm),e(Ne,us),e(us,pm),e(us,xa),e(xa,mm),e(us,hm),e(Ne,fm),e(Ne,gs),e(gs,um),e(gs,ur),e(ur,gm),e(gs,_m),e(Ne,vm),e(Ne,_s),e(_s,bm),e(_s,vs),e(vs,km),e(_s,Tm),e(Ne,$m),w(Ln,Ne,null),e(Ne,wm),e(Ne,Ye),w(bs,Ye,null),e(Ye,ym),e(Ye,Yt),e(Yt,Cm),e(Yt,gr),e(gr,Fm),e(Yt,Bm),e(Yt,Pa),e(Pa,Em),e(Yt,Mm),e(Ye,zm),w(Sn,Ye,null),e(Ye,jm),w(In,Ye,null),e(Ye,qm),w(Rn,Ye,null),_(n,Qi,b),_(n,Ht,b),e(Ht,Wn),e(Wn,Na),w(ks,Na,null),e(Ht,xm),e(Ht,Aa),e(Aa,Pm),_(n,Vi,b),_(n,Ae,b),w(Ts,Ae,null),e(Ae,Nm),e(Ae,Oa),e(Oa,Am),e(Ae,Om),e(Ae,$s),e($s,Dm),e($s,_r),e(_r,Lm),e($s,Sm),e(Ae,Im),e(Ae,ws),e(ws,Rm),e(ws,ys),e(ys,Wm),e(ws,Um),e(Ae,Ym),w(Un,Ae,null),e(Ae,Hm),e(Ae,He),w(Cs,He,null),e(He,Qm),e(He,Qt),e(Qt,Vm),e(Qt,vr),e(vr,Km),e(Qt,Jm),e(Qt,Da),e(Da,Gm),e(Qt,Zm),e(He,Xm),w(Yn,He,null),e(He,eh),w(Hn,He,null),e(He,th),w(Qn,He,null),_(n,Ki,b),_(n,Vt,b),e(Vt,Vn),e(Vn,La),w(Fs,La,null),e(Vt,nh),e(Vt,Sa),e(Sa,oh),_(n,Ji,b),_(n,Oe,b),w(Bs,Oe,null),e(Oe,sh),e(Oe,Ia),e(Ia,rh),e(Oe,ah),e(Oe,Es),e(Es,ih),e(Es,br),e(br,lh),e(Es,dh),e(Oe,ch),e(Oe,Ms),e(Ms,ph),e(Ms,zs),e(zs,mh),e(Ms,hh),e(Oe,fh),w(Kn,Oe,null),e(Oe,uh),e(Oe,at),w(js,at,null),e(at,gh),e(at,Kt),e(Kt,_h),e(Kt,kr),e(kr,vh),e(Kt,bh),e(Kt,Ra),e(Ra,kh),e(Kt,Th),e(at,$h),w(Jn,at,null),e(at,wh),w(Gn,at,null),_(n,Gi,b),_(n,Jt,b),e(Jt,Zn),e(Zn,Wa),w(qs,Wa,null),e(Jt,yh),e(Jt,Ua),e(Ua,Ch),_(n,Zi,b),_(n,De,b),w(xs,De,null),e(De,Fh),e(De,Ya),e(Ya,Bh),e(De,Eh),e(De,Ps),e(Ps,Mh),e(Ps,Tr),e(Tr,zh),e(Ps,jh),e(De,qh),e(De,Ns),e(Ns,xh),e(Ns,As),e(As,Ph),e(Ns,Nh),e(De,Ah),w(Xn,De,null),e(De,Oh),e(De,Qe),w(Os,Qe,null),e(Qe,Dh),e(Qe,Gt),e(Gt,Lh),e(Gt,$r),e($r,Sh),e(Gt,Ih),e(Gt,Ha),e(Ha,Rh),e(Gt,Wh),e(Qe,Uh),w(eo,Qe,null),e(Qe,Yh),w(to,Qe,null),e(Qe,Hh),w(no,Qe,null),_(n,Xi,b),_(n,Zt,b),e(Zt,oo),e(oo,Qa),w(Ds,Qa,null),e(Zt,Qh),e(Zt,Va),e(Va,Vh),_(n,el,b),_(n,Le,b),w(Ls,Le,null),e(Le,Kh),e(Le,Xt),e(Xt,Jh),e(Xt,Ka),e(Ka,Gh),e(Xt,Zh),e(Xt,Ja),e(Ja,Xh),e(Xt,ef),e(Le,tf),e(Le,Ss),e(Ss,nf),e(Ss,wr),e(wr,of),e(Ss,sf),e(Le,rf),e(Le,Is),e(Is,af),e(Is,Rs),e(Rs,lf),e(Is,df),e(Le,cf),w(so,Le,null),e(Le,pf),e(Le,Ve),w(Ws,Ve,null),e(Ve,mf),e(Ve,en),e(en,hf),e(en,yr),e(yr,ff),e(en,uf),e(en,Ga),e(Ga,gf),e(en,_f),e(Ve,vf),w(ro,Ve,null),e(Ve,bf),w(ao,Ve,null),e(Ve,kf),w(io,Ve,null),tl=!0},p(n,[b]){const Us={};b&2&&(Us.$$scope={dirty:b,ctx:n}),on.$set(Us);const Za={};b&2&&(Za.$$scope={dirty:b,ctx:n}),an.$set(Za);const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:n}),pn.$set(Xa);const ei={};b&2&&(ei.$$scope={dirty:b,ctx:n}),mn.$set(ei);const Ys={};b&2&&(Ys.$$scope={dirty:b,ctx:n}),fn.$set(Ys);const ti={};b&2&&(ti.$$scope={dirty:b,ctx:n}),un.$set(ti);const ni={};b&2&&(ni.$$scope={dirty:b,ctx:n}),gn.$set(ni);const oi={};b&2&&(oi.$$scope={dirty:b,ctx:n}),vn.$set(oi);const Hs={};b&2&&(Hs.$$scope={dirty:b,ctx:n}),bn.$set(Hs);const si={};b&2&&(si.$$scope={dirty:b,ctx:n}),kn.$set(si);const ri={};b&2&&(ri.$$scope={dirty:b,ctx:n}),Tn.$set(ri);const ai={};b&2&&(ai.$$scope={dirty:b,ctx:n}),$n.$set(ai);const ii={};b&2&&(ii.$$scope={dirty:b,ctx:n}),yn.$set(ii);const li={};b&2&&(li.$$scope={dirty:b,ctx:n}),Cn.$set(li);const lo={};b&2&&(lo.$$scope={dirty:b,ctx:n}),Bn.$set(lo);const di={};b&2&&(di.$$scope={dirty:b,ctx:n}),En.$set(di);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:n}),Mn.$set(ci);const Qs={};b&2&&(Qs.$$scope={dirty:b,ctx:n}),jn.$set(Qs);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:n}),qn.$set(pi);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:n}),xn.$set(mi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:n}),Nn.$set(hi);const tn={};b&2&&(tn.$$scope={dirty:b,ctx:n}),An.$set(tn);const tt={};b&2&&(tt.$$scope={dirty:b,ctx:n}),On.$set(tt);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:n}),Ln.$set(fi);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:n}),Sn.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:n}),In.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:n}),Rn.$set(_i);const Vs={};b&2&&(Vs.$$scope={dirty:b,ctx:n}),Un.$set(Vs);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:n}),Yn.$set(vi);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:n}),Hn.$set(bi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:n}),Qn.$set(ki);const Ie={};b&2&&(Ie.$$scope={dirty:b,ctx:n}),Kn.$set(Ie);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:n}),Jn.$set(gt);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:n}),Gn.$set(Ti);const $i={};b&2&&($i.$$scope={dirty:b,ctx:n}),Xn.$set($i);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:n}),eo.$set(wi);const nn={};b&2&&(nn.$$scope={dirty:b,ctx:n}),to.$set(nn);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:n}),no.$set(yi);const Ks={};b&2&&(Ks.$$scope={dirty:b,ctx:n}),so.$set(Ks);const Cr={};b&2&&(Cr.$$scope={dirty:b,ctx:n}),ro.$set(Cr);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:n}),ao.$set(Ci);const Fr={};b&2&&(Fr.$$scope={dirty:b,ctx:n}),io.$set(Fr)},i(n){tl||(y(l.$$.fragment,n),y(ee.$$.fragment,n),y(V.$$.fragment,n),y(be.$$.fragment,n),y(on.$$.fragment,n),y(ko.$$.fragment,n),y(To.$$.fragment,n),y($o.$$.fragment,n),y(yo.$$.fragment,n),y(Fo.$$.fragment,n),y(an.$$.fragment,n),y(Bo.$$.fragment,n),y(Eo.$$.fragment,n),y(Mo.$$.fragment,n),y(qo.$$.fragment,n),y(xo.$$.fragment,n),y(Ao.$$.fragment,n),y(pn.$$.fragment,n),y(mn.$$.fragment,n),y(Oo.$$.fragment,n),y(Do.$$.fragment,n),y(So.$$.fragment,n),y(fn.$$.fragment,n),y(un.$$.fragment,n),y(gn.$$.fragment,n),y(Io.$$.fragment,n),y(Ro.$$.fragment,n),y(Yo.$$.fragment,n),y(vn.$$.fragment,n),y(bn.$$.fragment,n),y(kn.$$.fragment,n),y(Tn.$$.fragment,n),y($n.$$.fragment,n),y(Ho.$$.fragment,n),y(Qo.$$.fragment,n),y(Jo.$$.fragment,n),y(yn.$$.fragment,n),y(Cn.$$.fragment,n),y(Go.$$.fragment,n),y(Zo.$$.fragment,n),y(ts.$$.fragment,n),y(Bn.$$.fragment,n),y(En.$$.fragment,n),y(Mn.$$.fragment,n),y(ns.$$.fragment,n),y(os.$$.fragment,n),y(as.$$.fragment,n),y(jn.$$.fragment,n),y(qn.$$.fragment,n),y(xn.$$.fragment,n),y(is.$$.fragment,n),y(ls.$$.fragment,n),y(Nn.$$.fragment,n),y(ms.$$.fragment,n),y(An.$$.fragment,n),y(On.$$.fragment,n),y(hs.$$.fragment,n),y(fs.$$.fragment,n),y(Ln.$$.fragment,n),y(bs.$$.fragment,n),y(Sn.$$.fragment,n),y(In.$$.fragment,n),y(Rn.$$.fragment,n),y(ks.$$.fragment,n),y(Ts.$$.fragment,n),y(Un.$$.fragment,n),y(Cs.$$.fragment,n),y(Yn.$$.fragment,n),y(Hn.$$.fragment,n),y(Qn.$$.fragment,n),y(Fs.$$.fragment,n),y(Bs.$$.fragment,n),y(Kn.$$.fragment,n),y(js.$$.fragment,n),y(Jn.$$.fragment,n),y(Gn.$$.fragment,n),y(qs.$$.fragment,n),y(xs.$$.fragment,n),y(Xn.$$.fragment,n),y(Os.$$.fragment,n),y(eo.$$.fragment,n),y(to.$$.fragment,n),y(no.$$.fragment,n),y(Ds.$$.fragment,n),y(Ls.$$.fragment,n),y(so.$$.fragment,n),y(Ws.$$.fragment,n),y(ro.$$.fragment,n),y(ao.$$.fragment,n),y(io.$$.fragment,n),tl=!0)},o(n){C(l.$$.fragment,n),C(ee.$$.fragment,n),C(V.$$.fragment,n),C(be.$$.fragment,n),C(on.$$.fragment,n),C(ko.$$.fragment,n),C(To.$$.fragment,n),C($o.$$.fragment,n),C(yo.$$.fragment,n),C(Fo.$$.fragment,n),C(an.$$.fragment,n),C(Bo.$$.fragment,n),C(Eo.$$.fragment,n),C(Mo.$$.fragment,n),C(qo.$$.fragment,n),C(xo.$$.fragment,n),C(Ao.$$.fragment,n),C(pn.$$.fragment,n),C(mn.$$.fragment,n),C(Oo.$$.fragment,n),C(Do.$$.fragment,n),C(So.$$.fragment,n),C(fn.$$.fragment,n),C(un.$$.fragment,n),C(gn.$$.fragment,n),C(Io.$$.fragment,n),C(Ro.$$.fragment,n),C(Yo.$$.fragment,n),C(vn.$$.fragment,n),C(bn.$$.fragment,n),C(kn.$$.fragment,n),C(Tn.$$.fragment,n),C($n.$$.fragment,n),C(Ho.$$.fragment,n),C(Qo.$$.fragment,n),C(Jo.$$.fragment,n),C(yn.$$.fragment,n),C(Cn.$$.fragment,n),C(Go.$$.fragment,n),C(Zo.$$.fragment,n),C(ts.$$.fragment,n),C(Bn.$$.fragment,n),C(En.$$.fragment,n),C(Mn.$$.fragment,n),C(ns.$$.fragment,n),C(os.$$.fragment,n),C(as.$$.fragment,n),C(jn.$$.fragment,n),C(qn.$$.fragment,n),C(xn.$$.fragment,n),C(is.$$.fragment,n),C(ls.$$.fragment,n),C(Nn.$$.fragment,n),C(ms.$$.fragment,n),C(An.$$.fragment,n),C(On.$$.fragment,n),C(hs.$$.fragment,n),C(fs.$$.fragment,n),C(Ln.$$.fragment,n),C(bs.$$.fragment,n),C(Sn.$$.fragment,n),C(In.$$.fragment,n),C(Rn.$$.fragment,n),C(ks.$$.fragment,n),C(Ts.$$.fragment,n),C(Un.$$.fragment,n),C(Cs.$$.fragment,n),C(Yn.$$.fragment,n),C(Hn.$$.fragment,n),C(Qn.$$.fragment,n),C(Fs.$$.fragment,n),C(Bs.$$.fragment,n),C(Kn.$$.fragment,n),C(js.$$.fragment,n),C(Jn.$$.fragment,n),C(Gn.$$.fragment,n),C(qs.$$.fragment,n),C(xs.$$.fragment,n),C(Xn.$$.fragment,n),C(Os.$$.fragment,n),C(eo.$$.fragment,n),C(to.$$.fragment,n),C(no.$$.fragment,n),C(Ds.$$.fragment,n),C(Ls.$$.fragment,n),C(so.$$.fragment,n),C(Ws.$$.fragment,n),C(ro.$$.fragment,n),C(ao.$$.fragment,n),C(io.$$.fragment,n),tl=!1},d(n){t(d),n&&t(g),n&&t(c),F(l),n&&t(K),n&&t(z),F(ee),n&&t(ae),n&&t(Q),n&&t(x),n&&t(oe),n&&t(ie),n&&t(se),n&&t(le),n&&t(q),n&&t(W),n&&t(G),n&&t(U),n&&t(Z),F(V),n&&t(Fe),n&&t(re),F(be),F(on),n&&t(Bi),n&&t(Ct),F(ko),n&&t(Ei),n&&t(xe),F(To),F($o),F(yo),F(Fo),F(an),F(Bo),n&&t(Mi),n&&t(Bt),F(Eo),n&&t(zi),n&&t(Je),F(Mo),n&&t(ji),n&&t(Et),F(qo),n&&t(qi),n&&t(ft),F(xo),F(Ao),F(pn),F(mn),n&&t(xi),n&&t(zt),F(Oo),n&&t(Pi),n&&t(ut),F(Do),F(So),F(fn),F(un),F(gn),n&&t(Ni),n&&t(xt),F(Io),n&&t(Ai),n&&t(Ge),F(Ro),F(Yo),F(vn),F(bn),F(kn),F(Tn),F($n),n&&t(Oi),n&&t(Nt),F(Ho),n&&t(Di),n&&t(Ze),F(Qo),F(Jo),F(yn),F(Cn),n&&t(Li),n&&t(Ot),F(Go),n&&t(Si),n&&t(Xe),F(Zo),F(ts),F(Bn),F(En),F(Mn),n&&t(Ii),n&&t(Lt),F(ns),n&&t(Ri),n&&t(et),F(os),F(as),F(jn),F(qn),F(xn),n&&t(Wi),n&&t(Rt),F(is),n&&t(Ui),n&&t(Pe),F(ls),F(Nn),F(ms),F(An),F(On),n&&t(Yi),n&&t(Ut),F(hs),n&&t(Hi),n&&t(Ne),F(fs),F(Ln),F(bs),F(Sn),F(In),F(Rn),n&&t(Qi),n&&t(Ht),F(ks),n&&t(Vi),n&&t(Ae),F(Ts),F(Un),F(Cs),F(Yn),F(Hn),F(Qn),n&&t(Ki),n&&t(Vt),F(Fs),n&&t(Ji),n&&t(Oe),F(Bs),F(Kn),F(js),F(Jn),F(Gn),n&&t(Gi),n&&t(Jt),F(qs),n&&t(Zi),n&&t(De),F(xs),F(Xn),F(Os),F(eo),F(to),F(no),n&&t(Xi),n&&t(Zt),F(Ds),n&&t(el),n&&t(Le),F(Ls),F(so),F(Ws),F(ro),F(ao),F(io)}}}const p_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function m_(B){return Tg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class b_ extends _g{constructor(d){super();vg(this,d,m_,c_,bg,{})}}export{b_ as default,p_ as metadata};
