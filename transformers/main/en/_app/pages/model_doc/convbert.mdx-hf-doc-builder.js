import{S as Tg,i as $g,s as wg,e as r,k as m,w as T,t as o,M as yg,c as a,d as t,m as h,a as i,x as $,h as s,b as k,G as e,g as _,y as w,q as y,o as C,B as F,v as Cg,L as we}from"../../chunks/vendor-hf-doc-builder.js";import{T as qe}from"../../chunks/Tip-hf-doc-builder.js";import{D as oe}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ye}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as $e}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertModel, ConvBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Bg(B){let d,g,c,p,v;return p=new ye({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=o("pair mask has the following format:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"pair mask has the following format:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Eg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Mg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function zg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function jg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function qg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function xg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Pg(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=o("Example of single-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of single-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Og(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Ng(B){let d,g,c,p,v;return p=new ye({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=o("Example of multi-label classification:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example of multi-label classification:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Ag(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Dg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Lg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Sg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ig(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Rg(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Wg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Ug(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Yg(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Hg(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function Qg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Kg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Vg(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function Jg(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function Gg(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function Zg(B){let d,g;return d=new ye({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Xg(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function e_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function t_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function n_(B){let d,g;return d=new ye({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function o_(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function s_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function r_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function a_(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function i_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function l_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function d_(B){let d,g;return d=new ye({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function c_(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z;return{c(){d=r("p"),g=o("TF 2.0 models accepts two formats as inputs:"),c=m(),p=r("ul"),v=r("li"),l=o("having all inputs as keyword arguments (like PyTorch models), or"),f=m(),M=r("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),V=m(),z=r("p"),X=o("This second option is useful when using "),S=r("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r("code"),pe=o("model(inputs)"),ae=o("."),Q=m(),O=r("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=m(),j=r("ul"),x=r("li"),se=o("a single Tensor with "),Y=r("code"),ie=o("input_ids"),re=o(" only and nothing else: "),R=r("code"),me=o("model(inputs_ids)"),le=m(),q=r("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),G=o("model([input_ids, attention_mask])"),fe=o(" or "),L=r("code"),ue=o("model([input_ids, attention_mask, token_type_ids])"),ge=m(),P=r("li"),_e=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r("code"),Z=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){d=a(u,"P",{});var E=i(d);g=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),c=h(u),p=a(u,"UL",{});var K=i(p);v=a(K,"LI",{});var Be=i(v);l=s(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(t),f=h(K),M=a(K,"LI",{});var Ce=i(M);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),K.forEach(t),V=h(u),z=a(u,"P",{});var N=i(z);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var Fe=i(S);ee=s(Fe,"tf.keras.Model.fit"),Fe.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a(N,"CODE",{});var ne=i(I);pe=s(ne,"model(inputs)"),ne.forEach(t),ae=s(N,"."),N.forEach(t),Q=h(u),O=a(u,"P",{});var be=i(O);te=s(be,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),be.forEach(t),J=h(u),j=a(u,"UL",{});var A=i(j);x=a(A,"LI",{});var D=i(x);se=s(D,"a single Tensor with "),Y=a(D,"CODE",{});var Ee=i(Y);ie=s(Ee,"input_ids"),Ee.forEach(t),re=s(D," only and nothing else: "),R=a(D,"CODE",{});var Te=i(R);me=s(Te,"model(inputs_ids)"),Te.forEach(t),D.forEach(t),le=h(A),q=a(A,"LI",{});var H=i(q);he=s(H,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(H,"CODE",{});var Me=i(W);G=s(Me,"model([input_ids, attention_mask])"),Me.forEach(t),fe=s(H," or "),L=a(H,"CODE",{});var ke=i(L);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),H.forEach(t),ge=h(A),P=a(A,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a(ve,"CODE",{});var ze=i(U);Z=s(ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ze.forEach(t),ve.forEach(t),A.forEach(t)},m(u,E){_(u,d,E),e(d,g),_(u,c,E),_(u,p,E),e(p,v),e(v,l),e(p,f),e(p,M),e(M,de),_(u,V,E),_(u,z,E),e(z,X),e(z,S),e(S,ee),e(z,ce),e(z,I),e(I,pe),e(z,ae),_(u,Q,E),_(u,O,E),e(O,te),_(u,J,E),_(u,j,E),e(j,x),e(x,se),e(x,Y),e(Y,ie),e(x,re),e(x,R),e(R,me),e(j,le),e(j,q),e(q,he),e(q,W),e(W,G),e(q,fe),e(q,L),e(L,ue),e(j,ge),e(j,P),e(P,_e),e(P,U),e(U,Z)},d(u){u&&t(d),u&&t(c),u&&t(p),u&&t(V),u&&t(z),u&&t(Q),u&&t(O),u&&t(J),u&&t(j)}}}function p_(B){let d,g,c,p,v;return{c(){d=r("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),p=o("Module"),v=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(f,"CODE",{});var M=i(c);p=s(M,"Module"),M.forEach(t),v=s(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){_(l,d,f),e(d,g),e(d,c),e(c,p),e(d,v)},d(l){l&&t(d)}}}function m_(B){let d,g,c,p,v;return p=new ye({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=o("Example:"),c=m(),T(p.$$.fragment)},l(l){d=a(l,"P",{});var f=i(d);g=s(f,"Example:"),f.forEach(t),c=h(l),$(p.$$.fragment,l)},m(l,f){_(l,d,f),e(d,g),_(l,c,f),w(p,l,f),v=!0},p:we,i(l){v||(y(p.$$.fragment,l),v=!0)},o(l){C(p.$$.fragment,l),v=!1},d(l){l&&t(d),l&&t(c),F(p,l)}}}function h_(B){let d,g;return d=new ye({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){$(d.$$.fragment,c)},m(c,p){w(d,c,p),g=!0},p:we,i(c){g||(y(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function f_(B){let d,g,c,p,v,l,f,M,de,V,z,X,S,ee,ce,I,pe,ae,Q,O,te,J,j,x,se,Y,ie,re,R,me,le,q,he,W,G,fe,L,ue,ge,P,_e,U,Z,u,E,K,Be,Ce,N,Fe,ne,be,A,D,Ee,Te,H,Me,ke,ve,ze,Dl,Ct,Ll,Zs,Sl,Il,Xs,Rl,Wl,Ul,rn,Ei,Ft,an,Hr,$o,Yl,Qr,Hl,Mi,xe,wo,Ql,mt,Kl,er,Vl,Jl,tr,Gl,Zl,nr,Xl,ed,td,_t,yo,nd,Kr,od,sd,Co,or,rd,Vr,ad,id,sr,ld,Jr,dd,cd,ln,Fo,pd,Bo,md,Gr,hd,fd,ud,tt,Eo,gd,Zr,_d,vd,dn,bd,Bt,kd,Xr,Td,$d,ea,wd,yd,Cd,rr,Mo,zi,Et,cn,ta,zo,Fd,na,Bd,ji,Je,jo,Ed,qo,Md,oa,zd,jd,qd,pn,ar,xd,Pd,ir,Od,Nd,Ad,xo,Dd,lr,Ld,Sd,qi,Mt,mn,sa,Po,Id,ra,Rd,xi,ht,Oo,Wd,No,Ud,Ao,Yd,Hd,Qd,nt,Do,Kd,zt,Vd,dr,Jd,Gd,aa,Zd,Xd,ec,hn,tc,fn,Pi,jt,un,ia,Lo,nc,la,oc,Oi,ft,So,sc,qt,rc,da,ac,ic,Io,lc,dc,cc,Re,Ro,pc,xt,mc,cr,hc,fc,ca,uc,gc,_c,gn,vc,_n,bc,vn,Ni,Pt,bn,pa,Wo,kc,ma,Tc,Ai,Ge,Uo,$c,ha,wc,yc,Yo,Cc,Ho,Fc,Bc,Ec,je,Qo,Mc,Ot,zc,pr,jc,qc,fa,xc,Pc,Oc,kn,Nc,Tn,Ac,$n,Dc,wn,Lc,yn,Di,Nt,Cn,ua,Ko,Sc,ga,Ic,Li,Ze,Vo,Rc,_a,Wc,Uc,Jo,Yc,Go,Hc,Qc,Kc,ot,Zo,Vc,At,Jc,mr,Gc,Zc,va,Xc,ep,tp,Fn,np,Bn,Si,Dt,En,ba,Xo,op,ka,sp,Ii,Xe,es,rp,Ta,ap,ip,ts,lp,ns,dp,cp,pp,We,os,mp,Lt,hp,hr,fp,up,$a,gp,_p,vp,Mn,bp,zn,kp,jn,Ri,St,qn,wa,ss,Tp,ya,$p,Wi,et,rs,wp,It,yp,Ca,Cp,Fp,Fa,Bp,Ep,Mp,as,zp,is,jp,qp,xp,Ue,ls,Pp,Rt,Op,fr,Np,Ap,Ba,Dp,Lp,Sp,xn,Ip,Pn,Rp,On,Ui,Wt,Nn,Ea,ds,Wp,Ma,Up,Yi,Pe,cs,Yp,za,Hp,Qp,ps,Kp,ur,Vp,Jp,Gp,ms,Zp,hs,Xp,em,tm,An,nm,st,fs,om,Ut,sm,gr,rm,am,ja,im,lm,dm,Dn,cm,Ln,Hi,Yt,Sn,qa,us,pm,xa,mm,Qi,Oe,gs,hm,_s,fm,Pa,um,gm,_m,vs,vm,_r,bm,km,Tm,bs,$m,ks,wm,ym,Cm,In,Fm,Ye,Ts,Bm,Ht,Em,vr,Mm,zm,Oa,jm,qm,xm,Rn,Pm,Wn,Om,Un,Ki,Qt,Yn,Na,$s,Nm,Aa,Am,Vi,Ne,ws,Dm,Da,Lm,Sm,ys,Im,br,Rm,Wm,Um,Cs,Ym,Fs,Hm,Qm,Km,Hn,Vm,He,Bs,Jm,Kt,Gm,kr,Zm,Xm,La,eh,th,nh,Qn,oh,Kn,sh,Vn,Ji,Vt,Jn,Sa,Es,rh,Ia,ah,Gi,Ae,Ms,ih,Ra,lh,dh,zs,ch,Tr,ph,mh,hh,js,fh,qs,uh,gh,_h,Gn,vh,rt,xs,bh,Jt,kh,$r,Th,$h,Wa,wh,yh,Ch,Zn,Fh,Xn,Zi,Gt,eo,Ua,Ps,Bh,Ya,Eh,Xi,De,Os,Mh,Ha,zh,jh,Ns,qh,wr,xh,Ph,Oh,As,Nh,Ds,Ah,Dh,Lh,to,Sh,Qe,Ls,Ih,Zt,Rh,yr,Wh,Uh,Qa,Yh,Hh,Qh,no,Kh,oo,Vh,so,el,Xt,ro,Ka,Ss,Jh,Va,Gh,tl,Le,Is,Zh,en,Xh,Ja,ef,tf,Ga,nf,of,sf,Rs,rf,Cr,af,lf,df,Ws,cf,Us,pf,mf,hf,ao,ff,Ke,Ys,uf,tn,gf,Fr,_f,vf,Za,bf,kf,Tf,io,$f,lo,wf,co,nl;return l=new Se({}),ee=new Se({}),K=new Se({}),be=new oe({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/configuration_convbert.py#L37"}}),rn=new $e({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[Fg]},$$scope:{ctx:B}}}),$o=new Se({}),wo=new oe({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert.py#L48"}}),yo=new oe({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Fo=new oe({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Eo=new oe({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),dn=new $e({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Bg]},$$scope:{ctx:B}}}),Mo=new oe({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),zo=new Se({}),jo=new oe({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert_fast.py#L49"}}),Po=new Se({}),Oo=new oe({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L773"}}),Do=new oe({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L800",returnDescription:`
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
`}}),hn=new qe({props:{$$slots:{default:[Eg]},$$scope:{ctx:B}}}),fn=new $e({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[Mg]},$$scope:{ctx:B}}}),Lo=new Se({}),So=new oe({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L887"}}),Ro=new oe({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L904",returnDescription:`
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
`}}),gn=new qe({props:{$$slots:{default:[zg]},$$scope:{ctx:B}}}),_n=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[jg]},$$scope:{ctx:B}}}),vn=new $e({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[qg]},$$scope:{ctx:B}}}),Wo=new Se({}),Uo=new oe({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L997"}}),Qo=new oe({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1008",returnDescription:`
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
`}}),kn=new qe({props:{$$slots:{default:[xg]},$$scope:{ctx:B}}}),Tn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[Pg]},$$scope:{ctx:B}}}),$n=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[Og]},$$scope:{ctx:B}}}),wn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[Ng]},$$scope:{ctx:B}}}),yn=new $e({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[Ag]},$$scope:{ctx:B}}}),Ko=new Se({}),Vo=new oe({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1093"}}),Zo=new oe({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1104",returnDescription:`
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
`}}),Fn=new qe({props:{$$slots:{default:[Dg]},$$scope:{ctx:B}}}),Bn=new $e({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[Lg]},$$scope:{ctx:B}}}),Xo=new Se({}),es=new oe({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1187"}}),os=new oe({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1202",returnDescription:`
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
`}}),Mn=new qe({props:{$$slots:{default:[Sg]},$$scope:{ctx:B}}}),zn=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[Ig]},$$scope:{ctx:B}}}),jn=new $e({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[Rg]},$$scope:{ctx:B}}}),ss=new Se({}),rs=new oe({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1269"}}),ls=new oe({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1280",returnDescription:`
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
`}}),xn=new qe({props:{$$slots:{default:[Wg]},$$scope:{ctx:B}}}),Pn=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[Ug]},$$scope:{ctx:B}}}),On=new $e({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[Yg]},$$scope:{ctx:B}}}),ds=new Se({}),cs=new oe({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L726"}}),An=new qe({props:{$$slots:{default:[Hg]},$$scope:{ctx:B}}}),fs=new oe({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Dn=new qe({props:{$$slots:{default:[Qg]},$$scope:{ctx:B}}}),Ln=new $e({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[Kg]},$$scope:{ctx:B}}}),us=new Se({}),gs=new oe({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L828"}}),In=new qe({props:{$$slots:{default:[Vg]},$$scope:{ctx:B}}}),Ts=new oe({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Rn=new qe({props:{$$slots:{default:[Jg]},$$scope:{ctx:B}}}),Wn=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[Gg]},$$scope:{ctx:B}}}),Un=new $e({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[Zg]},$$scope:{ctx:B}}}),$s=new Se({}),ws=new oe({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L950"}}),Hn=new qe({props:{$$slots:{default:[Xg]},$$scope:{ctx:B}}}),Bs=new oe({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Qn=new qe({props:{$$slots:{default:[e_]},$$scope:{ctx:B}}}),Kn=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[t_]},$$scope:{ctx:B}}}),Vn=new $e({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[n_]},$$scope:{ctx:B}}}),Es=new Se({}),Ms=new oe({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1026"}}),Gn=new qe({props:{$$slots:{default:[o_]},$$scope:{ctx:B}}}),xs=new oe({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),Zn=new qe({props:{$$slots:{default:[s_]},$$scope:{ctx:B}}}),Xn=new $e({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[r_]},$$scope:{ctx:B}}}),Ps=new Se({}),Os=new oe({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1150"}}),to=new qe({props:{$$slots:{default:[a_]},$$scope:{ctx:B}}}),Ls=new oe({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),no=new qe({props:{$$slots:{default:[i_]},$$scope:{ctx:B}}}),oo=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[l_]},$$scope:{ctx:B}}}),so=new $e({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[d_]},$$scope:{ctx:B}}}),Ss=new Se({}),Is=new oe({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1232"}}),ao=new qe({props:{$$slots:{default:[c_]},$$scope:{ctx:B}}}),Ys=new oe({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
`}}),io=new qe({props:{$$slots:{default:[p_]},$$scope:{ctx:B}}}),lo=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[m_]},$$scope:{ctx:B}}}),co=new $e({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[h_]},$$scope:{ctx:B}}}),{c(){d=r("meta"),g=m(),c=r("h1"),p=r("a"),v=r("span"),T(l.$$.fragment),f=m(),M=r("span"),de=o("ConvBERT"),V=m(),z=r("h2"),X=r("a"),S=r("span"),T(ee.$$.fragment),ce=m(),I=r("span"),pe=o("Overview"),ae=m(),Q=r("p"),O=o("The ConvBERT model was proposed in "),te=r("a"),J=o("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),j=o(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),x=m(),se=r("p"),Y=o("The abstract from the paper is the following:"),ie=m(),re=r("p"),R=r("em"),me=o(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
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
here: `),P=r("a"),_e=o("https://github.com/yitu-opensource/ConvBert"),U=m(),Z=r("h2"),u=r("a"),E=r("span"),T(K.$$.fragment),Be=m(),Ce=r("span"),N=o("ConvBertConfig"),Fe=m(),ne=r("div"),T(be.$$.fragment),A=m(),D=r("p"),Ee=o("This is the configuration class to store the configuration of a "),Te=r("a"),H=o("ConvBertModel"),Me=o(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=r("a"),ve=o("YituTech/conv-bert-base"),ze=o(" architecture."),Dl=m(),Ct=r("p"),Ll=o("Configuration objects inherit from "),Zs=r("a"),Sl=o("PretrainedConfig"),Il=o(` and can be used to control the model outputs. Read the
documentation from `),Xs=r("a"),Rl=o("PretrainedConfig"),Wl=o(" for more information."),Ul=m(),T(rn.$$.fragment),Ei=m(),Ft=r("h2"),an=r("a"),Hr=r("span"),T($o.$$.fragment),Yl=m(),Qr=r("span"),Hl=o("ConvBertTokenizer"),Mi=m(),xe=r("div"),T(wo.$$.fragment),Ql=m(),mt=r("p"),Kl=o("Construct a ConvBERT tokenizer. "),er=r("a"),Vl=o("ConvBertTokenizer"),Jl=o(" is identical to "),tr=r("a"),Gl=o("BertTokenizer"),Zl=o(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),nr=r("a"),Xl=o("BertTokenizer"),ed=o(` for usage examples and
documentation concerning parameters.`),td=m(),_t=r("div"),T(yo.$$.fragment),nd=m(),Kr=r("p"),od=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),sd=m(),Co=r("ul"),or=r("li"),rd=o("single sequence: "),Vr=r("code"),ad=o("[CLS] X [SEP]"),id=m(),sr=r("li"),ld=o("pair of sequences: "),Jr=r("code"),dd=o("[CLS] A [SEP] B [SEP]"),cd=m(),ln=r("div"),T(Fo.$$.fragment),pd=m(),Bo=r("p"),md=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gr=r("code"),hd=o("prepare_for_model"),fd=o(" method."),ud=m(),tt=r("div"),T(Eo.$$.fragment),gd=m(),Zr=r("p"),_d=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),vd=m(),T(dn.$$.fragment),bd=m(),Bt=r("p"),kd=o("If "),Xr=r("code"),Td=o("token_ids_1"),$d=o(" is "),ea=r("code"),wd=o("None"),yd=o(", this method only returns the first portion of the mask (0s)."),Cd=m(),rr=r("div"),T(Mo.$$.fragment),zi=m(),Et=r("h2"),cn=r("a"),ta=r("span"),T(zo.$$.fragment),Fd=m(),na=r("span"),Bd=o("ConvBertTokenizerFast"),ji=m(),Je=r("div"),T(jo.$$.fragment),Ed=m(),qo=r("p"),Md=o("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),oa=r("em"),zd=o("tokenizers"),jd=o(" library)."),qd=m(),pn=r("p"),ar=r("a"),xd=o("ConvBertTokenizerFast"),Pd=o(" is identical to "),ir=r("a"),Od=o("BertTokenizerFast"),Nd=o(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Ad=m(),xo=r("p"),Dd=o("Refer to superclass "),lr=r("a"),Ld=o("BertTokenizerFast"),Sd=o(" for usage examples and documentation concerning parameters."),qi=m(),Mt=r("h2"),mn=r("a"),sa=r("span"),T(Po.$$.fragment),Id=m(),ra=r("span"),Rd=o("ConvBertModel"),xi=m(),ht=r("div"),T(Oo.$$.fragment),Wd=m(),No=r("p"),Ud=o(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ao=r("a"),Yd=o("torch.nn.Module"),Hd=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qd=m(),nt=r("div"),T(Do.$$.fragment),Kd=m(),zt=r("p"),Vd=o("The "),dr=r("a"),Jd=o("ConvBertModel"),Gd=o(" forward method, overrides the "),aa=r("code"),Zd=o("__call__"),Xd=o(" special method."),ec=m(),T(hn.$$.fragment),tc=m(),T(fn.$$.fragment),Pi=m(),jt=r("h2"),un=r("a"),ia=r("span"),T(Lo.$$.fragment),nc=m(),la=r("span"),oc=o("ConvBertForMaskedLM"),Oi=m(),ft=r("div"),T(So.$$.fragment),sc=m(),qt=r("p"),rc=o("ConvBERT Model with a "),da=r("code"),ac=o("language modeling"),ic=o(` head on top.
This model is a PyTorch `),Io=r("a"),lc=o("torch.nn.Module"),dc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cc=m(),Re=r("div"),T(Ro.$$.fragment),pc=m(),xt=r("p"),mc=o("The "),cr=r("a"),hc=o("ConvBertForMaskedLM"),fc=o(" forward method, overrides the "),ca=r("code"),uc=o("__call__"),gc=o(" special method."),_c=m(),T(gn.$$.fragment),vc=m(),T(_n.$$.fragment),bc=m(),T(vn.$$.fragment),Ni=m(),Pt=r("h2"),bn=r("a"),pa=r("span"),T(Wo.$$.fragment),kc=m(),ma=r("span"),Tc=o("ConvBertForSequenceClassification"),Ai=m(),Ge=r("div"),T(Uo.$$.fragment),$c=m(),ha=r("p"),wc=o(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yc=m(),Yo=r("p"),Cc=o("This model is a PyTorch "),Ho=r("a"),Fc=o("torch.nn.Module"),Bc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ec=m(),je=r("div"),T(Qo.$$.fragment),Mc=m(),Ot=r("p"),zc=o("The "),pr=r("a"),jc=o("ConvBertForSequenceClassification"),qc=o(" forward method, overrides the "),fa=r("code"),xc=o("__call__"),Pc=o(" special method."),Oc=m(),T(kn.$$.fragment),Nc=m(),T(Tn.$$.fragment),Ac=m(),T($n.$$.fragment),Dc=m(),T(wn.$$.fragment),Lc=m(),T(yn.$$.fragment),Di=m(),Nt=r("h2"),Cn=r("a"),ua=r("span"),T(Ko.$$.fragment),Sc=m(),ga=r("span"),Ic=o("ConvBertForMultipleChoice"),Li=m(),Ze=r("div"),T(Vo.$$.fragment),Rc=m(),_a=r("p"),Wc=o(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Uc=m(),Jo=r("p"),Yc=o("This model is a PyTorch "),Go=r("a"),Hc=o("torch.nn.Module"),Qc=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Kc=m(),ot=r("div"),T(Zo.$$.fragment),Vc=m(),At=r("p"),Jc=o("The "),mr=r("a"),Gc=o("ConvBertForMultipleChoice"),Zc=o(" forward method, overrides the "),va=r("code"),Xc=o("__call__"),ep=o(" special method."),tp=m(),T(Fn.$$.fragment),np=m(),T(Bn.$$.fragment),Si=m(),Dt=r("h2"),En=r("a"),ba=r("span"),T(Xo.$$.fragment),op=m(),ka=r("span"),sp=o("ConvBertForTokenClassification"),Ii=m(),Xe=r("div"),T(es.$$.fragment),rp=m(),Ta=r("p"),ap=o(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ip=m(),ts=r("p"),lp=o("This model is a PyTorch "),ns=r("a"),dp=o("torch.nn.Module"),cp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pp=m(),We=r("div"),T(os.$$.fragment),mp=m(),Lt=r("p"),hp=o("The "),hr=r("a"),fp=o("ConvBertForTokenClassification"),up=o(" forward method, overrides the "),$a=r("code"),gp=o("__call__"),_p=o(" special method."),vp=m(),T(Mn.$$.fragment),bp=m(),T(zn.$$.fragment),kp=m(),T(jn.$$.fragment),Ri=m(),St=r("h2"),qn=r("a"),wa=r("span"),T(ss.$$.fragment),Tp=m(),ya=r("span"),$p=o("ConvBertForQuestionAnswering"),Wi=m(),et=r("div"),T(rs.$$.fragment),wp=m(),It=r("p"),yp=o(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ca=r("code"),Cp=o("span start logits"),Fp=o(" and "),Fa=r("code"),Bp=o("span end logits"),Ep=o(")."),Mp=m(),as=r("p"),zp=o("This model is a PyTorch "),is=r("a"),jp=o("torch.nn.Module"),qp=o(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xp=m(),Ue=r("div"),T(ls.$$.fragment),Pp=m(),Rt=r("p"),Op=o("The "),fr=r("a"),Np=o("ConvBertForQuestionAnswering"),Ap=o(" forward method, overrides the "),Ba=r("code"),Dp=o("__call__"),Lp=o(" special method."),Sp=m(),T(xn.$$.fragment),Ip=m(),T(Pn.$$.fragment),Rp=m(),T(On.$$.fragment),Ui=m(),Wt=r("h2"),Nn=r("a"),Ea=r("span"),T(ds.$$.fragment),Wp=m(),Ma=r("span"),Up=o("TFConvBertModel"),Yi=m(),Pe=r("div"),T(cs.$$.fragment),Yp=m(),za=r("p"),Hp=o("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Qp=m(),ps=r("p"),Kp=o("This model inherits from "),ur=r("a"),Vp=o("TFPreTrainedModel"),Jp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=m(),ms=r("p"),Zp=o("This model is also a "),hs=r("a"),Xp=o("tf.keras.Model"),em=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),tm=m(),T(An.$$.fragment),nm=m(),st=r("div"),T(fs.$$.fragment),om=m(),Ut=r("p"),sm=o("The "),gr=r("a"),rm=o("TFConvBertModel"),am=o(" forward method, overrides the "),ja=r("code"),im=o("__call__"),lm=o(" special method."),dm=m(),T(Dn.$$.fragment),cm=m(),T(Ln.$$.fragment),Hi=m(),Yt=r("h2"),Sn=r("a"),qa=r("span"),T(us.$$.fragment),pm=m(),xa=r("span"),mm=o("TFConvBertForMaskedLM"),Qi=m(),Oe=r("div"),T(gs.$$.fragment),hm=m(),_s=r("p"),fm=o("ConvBERT Model with a "),Pa=r("code"),um=o("language modeling"),gm=o(" head on top."),_m=m(),vs=r("p"),vm=o("This model inherits from "),_r=r("a"),bm=o("TFPreTrainedModel"),km=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tm=m(),bs=r("p"),$m=o("This model is also a "),ks=r("a"),wm=o("tf.keras.Model"),ym=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm=m(),T(In.$$.fragment),Fm=m(),Ye=r("div"),T(Ts.$$.fragment),Bm=m(),Ht=r("p"),Em=o("The "),vr=r("a"),Mm=o("TFConvBertForMaskedLM"),zm=o(" forward method, overrides the "),Oa=r("code"),jm=o("__call__"),qm=o(" special method."),xm=m(),T(Rn.$$.fragment),Pm=m(),T(Wn.$$.fragment),Om=m(),T(Un.$$.fragment),Ki=m(),Qt=r("h2"),Yn=r("a"),Na=r("span"),T($s.$$.fragment),Nm=m(),Aa=r("span"),Am=o("TFConvBertForSequenceClassification"),Vi=m(),Ne=r("div"),T(ws.$$.fragment),Dm=m(),Da=r("p"),Lm=o("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Sm=m(),ys=r("p"),Im=o("This model inherits from "),br=r("a"),Rm=o("TFPreTrainedModel"),Wm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Um=m(),Cs=r("p"),Ym=o("This model is also a "),Fs=r("a"),Hm=o("tf.keras.Model"),Qm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Km=m(),T(Hn.$$.fragment),Vm=m(),He=r("div"),T(Bs.$$.fragment),Jm=m(),Kt=r("p"),Gm=o("The "),kr=r("a"),Zm=o("TFConvBertForSequenceClassification"),Xm=o(" forward method, overrides the "),La=r("code"),eh=o("__call__"),th=o(" special method."),nh=m(),T(Qn.$$.fragment),oh=m(),T(Kn.$$.fragment),sh=m(),T(Vn.$$.fragment),Ji=m(),Vt=r("h2"),Jn=r("a"),Sa=r("span"),T(Es.$$.fragment),rh=m(),Ia=r("span"),ah=o("TFConvBertForMultipleChoice"),Gi=m(),Ae=r("div"),T(Ms.$$.fragment),ih=m(),Ra=r("p"),lh=o(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dh=m(),zs=r("p"),ch=o("This model inherits from "),Tr=r("a"),ph=o("TFPreTrainedModel"),mh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=m(),js=r("p"),fh=o("This model is also a "),qs=r("a"),uh=o("tf.keras.Model"),gh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_h=m(),T(Gn.$$.fragment),vh=m(),rt=r("div"),T(xs.$$.fragment),bh=m(),Jt=r("p"),kh=o("The "),$r=r("a"),Th=o("TFConvBertForMultipleChoice"),$h=o(" forward method, overrides the "),Wa=r("code"),wh=o("__call__"),yh=o(" special method."),Ch=m(),T(Zn.$$.fragment),Fh=m(),T(Xn.$$.fragment),Zi=m(),Gt=r("h2"),eo=r("a"),Ua=r("span"),T(Ps.$$.fragment),Bh=m(),Ya=r("span"),Eh=o("TFConvBertForTokenClassification"),Xi=m(),De=r("div"),T(Os.$$.fragment),Mh=m(),Ha=r("p"),zh=o(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jh=m(),Ns=r("p"),qh=o("This model inherits from "),wr=r("a"),xh=o("TFPreTrainedModel"),Ph=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=m(),As=r("p"),Nh=o("This model is also a "),Ds=r("a"),Ah=o("tf.keras.Model"),Dh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lh=m(),T(to.$$.fragment),Sh=m(),Qe=r("div"),T(Ls.$$.fragment),Ih=m(),Zt=r("p"),Rh=o("The "),yr=r("a"),Wh=o("TFConvBertForTokenClassification"),Uh=o(" forward method, overrides the "),Qa=r("code"),Yh=o("__call__"),Hh=o(" special method."),Qh=m(),T(no.$$.fragment),Kh=m(),T(oo.$$.fragment),Vh=m(),T(so.$$.fragment),el=m(),Xt=r("h2"),ro=r("a"),Ka=r("span"),T(Ss.$$.fragment),Jh=m(),Va=r("span"),Gh=o("TFConvBertForQuestionAnswering"),tl=m(),Le=r("div"),T(Is.$$.fragment),Zh=m(),en=r("p"),Xh=o(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ja=r("code"),ef=o("span start logits"),tf=o(" and "),Ga=r("code"),nf=o("span end logits"),of=o(")."),sf=m(),Rs=r("p"),rf=o("This model inherits from "),Cr=r("a"),af=o("TFPreTrainedModel"),lf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),df=m(),Ws=r("p"),cf=o("This model is also a "),Us=r("a"),pf=o("tf.keras.Model"),mf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hf=m(),T(ao.$$.fragment),ff=m(),Ke=r("div"),T(Ys.$$.fragment),uf=m(),tn=r("p"),gf=o("The "),Fr=r("a"),_f=o("TFConvBertForQuestionAnswering"),vf=o(" forward method, overrides the "),Za=r("code"),bf=o("__call__"),kf=o(" special method."),Tf=m(),T(io.$$.fragment),$f=m(),T(lo.$$.fragment),wf=m(),T(co.$$.fragment),this.h()},l(n){const b=yg('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=h(n),c=a(n,"H1",{class:!0});var Hs=i(c);p=a(Hs,"A",{id:!0,class:!0,href:!0});var Xa=i(p);v=a(Xa,"SPAN",{});var ei=i(v);$(l.$$.fragment,ei),ei.forEach(t),Xa.forEach(t),f=h(Hs),M=a(Hs,"SPAN",{});var ti=i(M);de=s(ti,"ConvBERT"),ti.forEach(t),Hs.forEach(t),V=h(n),z=a(n,"H2",{class:!0});var Qs=i(z);X=a(Qs,"A",{id:!0,class:!0,href:!0});var ni=i(X);S=a(ni,"SPAN",{});var oi=i(S);$(ee.$$.fragment,oi),oi.forEach(t),ni.forEach(t),ce=h(Qs),I=a(Qs,"SPAN",{});var si=i(I);pe=s(si,"Overview"),si.forEach(t),Qs.forEach(t),ae=h(n),Q=a(n,"P",{});var Ks=i(Q);O=s(Ks,"The ConvBERT model was proposed in "),te=a(Ks,"A",{href:!0,rel:!0});var ri=i(te);J=s(ri,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),ri.forEach(t),j=s(Ks,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),Ks.forEach(t),x=h(n),se=a(n,"P",{});var ai=i(se);Y=s(ai,"The abstract from the paper is the following:"),ai.forEach(t),ie=h(n),re=a(n,"P",{});var ii=i(re);R=a(ii,"EM",{});var li=i(R);me=s(li,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),li.forEach(t),ii.forEach(t),le=h(n),q=a(n,"P",{});var di=i(q);he=s(di,"ConvBERT training tips are similar to those of BERT."),di.forEach(t),W=h(n),G=a(n,"P",{});var po=i(G);fe=s(po,"This model was contributed by "),L=a(po,"A",{href:!0,rel:!0});var ci=i(L);ue=s(ci,"abhishek"),ci.forEach(t),ge=s(po,`. The original implementation can be found
here: `),P=a(po,"A",{href:!0,rel:!0});var pi=i(P);_e=s(pi,"https://github.com/yitu-opensource/ConvBert"),pi.forEach(t),po.forEach(t),U=h(n),Z=a(n,"H2",{class:!0});var Vs=i(Z);u=a(Vs,"A",{id:!0,class:!0,href:!0});var mi=i(u);E=a(mi,"SPAN",{});var hi=i(E);$(K.$$.fragment,hi),hi.forEach(t),mi.forEach(t),Be=h(Vs),Ce=a(Vs,"SPAN",{});var fi=i(Ce);N=s(fi,"ConvBertConfig"),fi.forEach(t),Vs.forEach(t),Fe=h(n),ne=a(n,"DIV",{class:!0});var ut=i(ne);$(be.$$.fragment,ut),A=h(ut),D=a(ut,"P",{});var nn=i(D);Ee=s(nn,"This is the configuration class to store the configuration of a "),Te=a(nn,"A",{href:!0});var ui=i(Te);H=s(ui,"ConvBertModel"),ui.forEach(t),Me=s(nn,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=a(nn,"A",{href:!0,rel:!0});var gi=i(ke);ve=s(gi,"YituTech/conv-bert-base"),gi.forEach(t),ze=s(nn," architecture."),nn.forEach(t),Dl=h(ut),Ct=a(ut,"P",{});var on=i(Ct);Ll=s(on,"Configuration objects inherit from "),Zs=a(on,"A",{href:!0});var _i=i(Zs);Sl=s(_i,"PretrainedConfig"),_i.forEach(t),Il=s(on,` and can be used to control the model outputs. Read the
documentation from `),Xs=a(on,"A",{href:!0});var vi=i(Xs);Rl=s(vi,"PretrainedConfig"),vi.forEach(t),Wl=s(on," for more information."),on.forEach(t),Ul=h(ut),$(rn.$$.fragment,ut),ut.forEach(t),Ei=h(n),Ft=a(n,"H2",{class:!0});var Js=i(Ft);an=a(Js,"A",{id:!0,class:!0,href:!0});var bi=i(an);Hr=a(bi,"SPAN",{});var ki=i(Hr);$($o.$$.fragment,ki),ki.forEach(t),bi.forEach(t),Yl=h(Js),Qr=a(Js,"SPAN",{});var Ti=i(Qr);Hl=s(Ti,"ConvBertTokenizer"),Ti.forEach(t),Js.forEach(t),Mi=h(n),xe=a(n,"DIV",{class:!0});var Ie=i(xe);$(wo.$$.fragment,Ie),Ql=h(Ie),mt=a(Ie,"P",{});var gt=i(mt);Kl=s(gt,"Construct a ConvBERT tokenizer. "),er=a(gt,"A",{href:!0});var $i=i(er);Vl=s($i,"ConvBertTokenizer"),$i.forEach(t),Jl=s(gt," is identical to "),tr=a(gt,"A",{href:!0});var wi=i(tr);Gl=s(wi,"BertTokenizer"),wi.forEach(t),Zl=s(gt,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),nr=a(gt,"A",{href:!0});var yi=i(nr);Xl=s(yi,"BertTokenizer"),yi.forEach(t),ed=s(gt,` for usage examples and
documentation concerning parameters.`),gt.forEach(t),td=h(Ie),_t=a(Ie,"DIV",{class:!0});var sn=i(_t);$(yo.$$.fragment,sn),nd=h(sn),Kr=a(sn,"P",{});var Ci=i(Kr);od=s(Ci,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ci.forEach(t),sd=h(sn),Co=a(sn,"UL",{});var Gs=i(Co);or=a(Gs,"LI",{});var Br=i(or);rd=s(Br,"single sequence: "),Vr=a(Br,"CODE",{});var Fi=i(Vr);ad=s(Fi,"[CLS] X [SEP]"),Fi.forEach(t),Br.forEach(t),id=h(Gs),sr=a(Gs,"LI",{});var yf=i(sr);ld=s(yf,"pair of sequences: "),Jr=a(yf,"CODE",{});var Cf=i(Jr);dd=s(Cf,"[CLS] A [SEP] B [SEP]"),Cf.forEach(t),yf.forEach(t),Gs.forEach(t),sn.forEach(t),cd=h(Ie),ln=a(Ie,"DIV",{class:!0});var ol=i(ln);$(Fo.$$.fragment,ol),pd=h(ol),Bo=a(ol,"P",{});var sl=i(Bo);md=s(sl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Gr=a(sl,"CODE",{});var Ff=i(Gr);hd=s(Ff,"prepare_for_model"),Ff.forEach(t),fd=s(sl," method."),sl.forEach(t),ol.forEach(t),ud=h(Ie),tt=a(Ie,"DIV",{class:!0});var mo=i(tt);$(Eo.$$.fragment,mo),gd=h(mo),Zr=a(mo,"P",{});var Bf=i(Zr);_d=s(Bf,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bf.forEach(t),vd=h(mo),$(dn.$$.fragment,mo),bd=h(mo),Bt=a(mo,"P",{});var Er=i(Bt);kd=s(Er,"If "),Xr=a(Er,"CODE",{});var Ef=i(Xr);Td=s(Ef,"token_ids_1"),Ef.forEach(t),$d=s(Er," is "),ea=a(Er,"CODE",{});var Mf=i(ea);wd=s(Mf,"None"),Mf.forEach(t),yd=s(Er,", this method only returns the first portion of the mask (0s)."),Er.forEach(t),mo.forEach(t),Cd=h(Ie),rr=a(Ie,"DIV",{class:!0});var zf=i(rr);$(Mo.$$.fragment,zf),zf.forEach(t),Ie.forEach(t),zi=h(n),Et=a(n,"H2",{class:!0});var rl=i(Et);cn=a(rl,"A",{id:!0,class:!0,href:!0});var jf=i(cn);ta=a(jf,"SPAN",{});var qf=i(ta);$(zo.$$.fragment,qf),qf.forEach(t),jf.forEach(t),Fd=h(rl),na=a(rl,"SPAN",{});var xf=i(na);Bd=s(xf,"ConvBertTokenizerFast"),xf.forEach(t),rl.forEach(t),ji=h(n),Je=a(n,"DIV",{class:!0});var ho=i(Je);$(jo.$$.fragment,ho),Ed=h(ho),qo=a(ho,"P",{});var al=i(qo);Md=s(al,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),oa=a(al,"EM",{});var Pf=i(oa);zd=s(Pf,"tokenizers"),Pf.forEach(t),jd=s(al," library)."),al.forEach(t),qd=h(ho),pn=a(ho,"P",{});var Bi=i(pn);ar=a(Bi,"A",{href:!0});var Of=i(ar);xd=s(Of,"ConvBertTokenizerFast"),Of.forEach(t),Pd=s(Bi," is identical to "),ir=a(Bi,"A",{href:!0});var Nf=i(ir);Od=s(Nf,"BertTokenizerFast"),Nf.forEach(t),Nd=s(Bi,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Bi.forEach(t),Ad=h(ho),xo=a(ho,"P",{});var il=i(xo);Dd=s(il,"Refer to superclass "),lr=a(il,"A",{href:!0});var Af=i(lr);Ld=s(Af,"BertTokenizerFast"),Af.forEach(t),Sd=s(il," for usage examples and documentation concerning parameters."),il.forEach(t),ho.forEach(t),qi=h(n),Mt=a(n,"H2",{class:!0});var ll=i(Mt);mn=a(ll,"A",{id:!0,class:!0,href:!0});var Df=i(mn);sa=a(Df,"SPAN",{});var Lf=i(sa);$(Po.$$.fragment,Lf),Lf.forEach(t),Df.forEach(t),Id=h(ll),ra=a(ll,"SPAN",{});var Sf=i(ra);Rd=s(Sf,"ConvBertModel"),Sf.forEach(t),ll.forEach(t),xi=h(n),ht=a(n,"DIV",{class:!0});var Mr=i(ht);$(Oo.$$.fragment,Mr),Wd=h(Mr),No=a(Mr,"P",{});var dl=i(No);Ud=s(dl,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Ao=a(dl,"A",{href:!0,rel:!0});var If=i(Ao);Yd=s(If,"torch.nn.Module"),If.forEach(t),Hd=s(dl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),dl.forEach(t),Qd=h(Mr),nt=a(Mr,"DIV",{class:!0});var fo=i(nt);$(Do.$$.fragment,fo),Kd=h(fo),zt=a(fo,"P",{});var zr=i(zt);Vd=s(zr,"The "),dr=a(zr,"A",{href:!0});var Rf=i(dr);Jd=s(Rf,"ConvBertModel"),Rf.forEach(t),Gd=s(zr," forward method, overrides the "),aa=a(zr,"CODE",{});var Wf=i(aa);Zd=s(Wf,"__call__"),Wf.forEach(t),Xd=s(zr," special method."),zr.forEach(t),ec=h(fo),$(hn.$$.fragment,fo),tc=h(fo),$(fn.$$.fragment,fo),fo.forEach(t),Mr.forEach(t),Pi=h(n),jt=a(n,"H2",{class:!0});var cl=i(jt);un=a(cl,"A",{id:!0,class:!0,href:!0});var Uf=i(un);ia=a(Uf,"SPAN",{});var Yf=i(ia);$(Lo.$$.fragment,Yf),Yf.forEach(t),Uf.forEach(t),nc=h(cl),la=a(cl,"SPAN",{});var Hf=i(la);oc=s(Hf,"ConvBertForMaskedLM"),Hf.forEach(t),cl.forEach(t),Oi=h(n),ft=a(n,"DIV",{class:!0});var jr=i(ft);$(So.$$.fragment,jr),sc=h(jr),qt=a(jr,"P",{});var qr=i(qt);rc=s(qr,"ConvBERT Model with a "),da=a(qr,"CODE",{});var Qf=i(da);ac=s(Qf,"language modeling"),Qf.forEach(t),ic=s(qr,` head on top.
This model is a PyTorch `),Io=a(qr,"A",{href:!0,rel:!0});var Kf=i(Io);lc=s(Kf,"torch.nn.Module"),Kf.forEach(t),dc=s(qr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qr.forEach(t),cc=h(jr),Re=a(jr,"DIV",{class:!0});var vt=i(Re);$(Ro.$$.fragment,vt),pc=h(vt),xt=a(vt,"P",{});var xr=i(xt);mc=s(xr,"The "),cr=a(xr,"A",{href:!0});var Vf=i(cr);hc=s(Vf,"ConvBertForMaskedLM"),Vf.forEach(t),fc=s(xr," forward method, overrides the "),ca=a(xr,"CODE",{});var Jf=i(ca);uc=s(Jf,"__call__"),Jf.forEach(t),gc=s(xr," special method."),xr.forEach(t),_c=h(vt),$(gn.$$.fragment,vt),vc=h(vt),$(_n.$$.fragment,vt),bc=h(vt),$(vn.$$.fragment,vt),vt.forEach(t),jr.forEach(t),Ni=h(n),Pt=a(n,"H2",{class:!0});var pl=i(Pt);bn=a(pl,"A",{id:!0,class:!0,href:!0});var Gf=i(bn);pa=a(Gf,"SPAN",{});var Zf=i(pa);$(Wo.$$.fragment,Zf),Zf.forEach(t),Gf.forEach(t),kc=h(pl),ma=a(pl,"SPAN",{});var Xf=i(ma);Tc=s(Xf,"ConvBertForSequenceClassification"),Xf.forEach(t),pl.forEach(t),Ai=h(n),Ge=a(n,"DIV",{class:!0});var uo=i(Ge);$(Uo.$$.fragment,uo),$c=h(uo),ha=a(uo,"P",{});var eu=i(ha);wc=s(eu,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),eu.forEach(t),yc=h(uo),Yo=a(uo,"P",{});var ml=i(Yo);Cc=s(ml,"This model is a PyTorch "),Ho=a(ml,"A",{href:!0,rel:!0});var tu=i(Ho);Fc=s(tu,"torch.nn.Module"),tu.forEach(t),Bc=s(ml,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ml.forEach(t),Ec=h(uo),je=a(uo,"DIV",{class:!0});var Ve=i(je);$(Qo.$$.fragment,Ve),Mc=h(Ve),Ot=a(Ve,"P",{});var Pr=i(Ot);zc=s(Pr,"The "),pr=a(Pr,"A",{href:!0});var nu=i(pr);jc=s(nu,"ConvBertForSequenceClassification"),nu.forEach(t),qc=s(Pr," forward method, overrides the "),fa=a(Pr,"CODE",{});var ou=i(fa);xc=s(ou,"__call__"),ou.forEach(t),Pc=s(Pr," special method."),Pr.forEach(t),Oc=h(Ve),$(kn.$$.fragment,Ve),Nc=h(Ve),$(Tn.$$.fragment,Ve),Ac=h(Ve),$($n.$$.fragment,Ve),Dc=h(Ve),$(wn.$$.fragment,Ve),Lc=h(Ve),$(yn.$$.fragment,Ve),Ve.forEach(t),uo.forEach(t),Di=h(n),Nt=a(n,"H2",{class:!0});var hl=i(Nt);Cn=a(hl,"A",{id:!0,class:!0,href:!0});var su=i(Cn);ua=a(su,"SPAN",{});var ru=i(ua);$(Ko.$$.fragment,ru),ru.forEach(t),su.forEach(t),Sc=h(hl),ga=a(hl,"SPAN",{});var au=i(ga);Ic=s(au,"ConvBertForMultipleChoice"),au.forEach(t),hl.forEach(t),Li=h(n),Ze=a(n,"DIV",{class:!0});var go=i(Ze);$(Vo.$$.fragment,go),Rc=h(go),_a=a(go,"P",{});var iu=i(_a);Wc=s(iu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iu.forEach(t),Uc=h(go),Jo=a(go,"P",{});var fl=i(Jo);Yc=s(fl,"This model is a PyTorch "),Go=a(fl,"A",{href:!0,rel:!0});var lu=i(Go);Hc=s(lu,"torch.nn.Module"),lu.forEach(t),Qc=s(fl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fl.forEach(t),Kc=h(go),ot=a(go,"DIV",{class:!0});var _o=i(ot);$(Zo.$$.fragment,_o),Vc=h(_o),At=a(_o,"P",{});var Or=i(At);Jc=s(Or,"The "),mr=a(Or,"A",{href:!0});var du=i(mr);Gc=s(du,"ConvBertForMultipleChoice"),du.forEach(t),Zc=s(Or," forward method, overrides the "),va=a(Or,"CODE",{});var cu=i(va);Xc=s(cu,"__call__"),cu.forEach(t),ep=s(Or," special method."),Or.forEach(t),tp=h(_o),$(Fn.$$.fragment,_o),np=h(_o),$(Bn.$$.fragment,_o),_o.forEach(t),go.forEach(t),Si=h(n),Dt=a(n,"H2",{class:!0});var ul=i(Dt);En=a(ul,"A",{id:!0,class:!0,href:!0});var pu=i(En);ba=a(pu,"SPAN",{});var mu=i(ba);$(Xo.$$.fragment,mu),mu.forEach(t),pu.forEach(t),op=h(ul),ka=a(ul,"SPAN",{});var hu=i(ka);sp=s(hu,"ConvBertForTokenClassification"),hu.forEach(t),ul.forEach(t),Ii=h(n),Xe=a(n,"DIV",{class:!0});var vo=i(Xe);$(es.$$.fragment,vo),rp=h(vo),Ta=a(vo,"P",{});var fu=i(Ta);ap=s(fu,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),fu.forEach(t),ip=h(vo),ts=a(vo,"P",{});var gl=i(ts);lp=s(gl,"This model is a PyTorch "),ns=a(gl,"A",{href:!0,rel:!0});var uu=i(ns);dp=s(uu,"torch.nn.Module"),uu.forEach(t),cp=s(gl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gl.forEach(t),pp=h(vo),We=a(vo,"DIV",{class:!0});var bt=i(We);$(os.$$.fragment,bt),mp=h(bt),Lt=a(bt,"P",{});var Nr=i(Lt);hp=s(Nr,"The "),hr=a(Nr,"A",{href:!0});var gu=i(hr);fp=s(gu,"ConvBertForTokenClassification"),gu.forEach(t),up=s(Nr," forward method, overrides the "),$a=a(Nr,"CODE",{});var _u=i($a);gp=s(_u,"__call__"),_u.forEach(t),_p=s(Nr," special method."),Nr.forEach(t),vp=h(bt),$(Mn.$$.fragment,bt),bp=h(bt),$(zn.$$.fragment,bt),kp=h(bt),$(jn.$$.fragment,bt),bt.forEach(t),vo.forEach(t),Ri=h(n),St=a(n,"H2",{class:!0});var _l=i(St);qn=a(_l,"A",{id:!0,class:!0,href:!0});var vu=i(qn);wa=a(vu,"SPAN",{});var bu=i(wa);$(ss.$$.fragment,bu),bu.forEach(t),vu.forEach(t),Tp=h(_l),ya=a(_l,"SPAN",{});var ku=i(ya);$p=s(ku,"ConvBertForQuestionAnswering"),ku.forEach(t),_l.forEach(t),Wi=h(n),et=a(n,"DIV",{class:!0});var bo=i(et);$(rs.$$.fragment,bo),wp=h(bo),It=a(bo,"P",{});var Ar=i(It);yp=s(Ar,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ca=a(Ar,"CODE",{});var Tu=i(Ca);Cp=s(Tu,"span start logits"),Tu.forEach(t),Fp=s(Ar," and "),Fa=a(Ar,"CODE",{});var $u=i(Fa);Bp=s($u,"span end logits"),$u.forEach(t),Ep=s(Ar,")."),Ar.forEach(t),Mp=h(bo),as=a(bo,"P",{});var vl=i(as);zp=s(vl,"This model is a PyTorch "),is=a(vl,"A",{href:!0,rel:!0});var wu=i(is);jp=s(wu,"torch.nn.Module"),wu.forEach(t),qp=s(vl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vl.forEach(t),xp=h(bo),Ue=a(bo,"DIV",{class:!0});var kt=i(Ue);$(ls.$$.fragment,kt),Pp=h(kt),Rt=a(kt,"P",{});var Dr=i(Rt);Op=s(Dr,"The "),fr=a(Dr,"A",{href:!0});var yu=i(fr);Np=s(yu,"ConvBertForQuestionAnswering"),yu.forEach(t),Ap=s(Dr," forward method, overrides the "),Ba=a(Dr,"CODE",{});var Cu=i(Ba);Dp=s(Cu,"__call__"),Cu.forEach(t),Lp=s(Dr," special method."),Dr.forEach(t),Sp=h(kt),$(xn.$$.fragment,kt),Ip=h(kt),$(Pn.$$.fragment,kt),Rp=h(kt),$(On.$$.fragment,kt),kt.forEach(t),bo.forEach(t),Ui=h(n),Wt=a(n,"H2",{class:!0});var bl=i(Wt);Nn=a(bl,"A",{id:!0,class:!0,href:!0});var Fu=i(Nn);Ea=a(Fu,"SPAN",{});var Bu=i(Ea);$(ds.$$.fragment,Bu),Bu.forEach(t),Fu.forEach(t),Wp=h(bl),Ma=a(bl,"SPAN",{});var Eu=i(Ma);Up=s(Eu,"TFConvBertModel"),Eu.forEach(t),bl.forEach(t),Yi=h(n),Pe=a(n,"DIV",{class:!0});var at=i(Pe);$(cs.$$.fragment,at),Yp=h(at),za=a(at,"P",{});var Mu=i(za);Hp=s(Mu,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Mu.forEach(t),Qp=h(at),ps=a(at,"P",{});var kl=i(ps);Kp=s(kl,"This model inherits from "),ur=a(kl,"A",{href:!0});var zu=i(ur);Vp=s(zu,"TFPreTrainedModel"),zu.forEach(t),Jp=s(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Gp=h(at),ms=a(at,"P",{});var Tl=i(ms);Zp=s(Tl,"This model is also a "),hs=a(Tl,"A",{href:!0,rel:!0});var ju=i(hs);Xp=s(ju,"tf.keras.Model"),ju.forEach(t),em=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),tm=h(at),$(An.$$.fragment,at),nm=h(at),st=a(at,"DIV",{class:!0});var ko=i(st);$(fs.$$.fragment,ko),om=h(ko),Ut=a(ko,"P",{});var Lr=i(Ut);sm=s(Lr,"The "),gr=a(Lr,"A",{href:!0});var qu=i(gr);rm=s(qu,"TFConvBertModel"),qu.forEach(t),am=s(Lr," forward method, overrides the "),ja=a(Lr,"CODE",{});var xu=i(ja);im=s(xu,"__call__"),xu.forEach(t),lm=s(Lr," special method."),Lr.forEach(t),dm=h(ko),$(Dn.$$.fragment,ko),cm=h(ko),$(Ln.$$.fragment,ko),ko.forEach(t),at.forEach(t),Hi=h(n),Yt=a(n,"H2",{class:!0});var $l=i(Yt);Sn=a($l,"A",{id:!0,class:!0,href:!0});var Pu=i(Sn);qa=a(Pu,"SPAN",{});var Ou=i(qa);$(us.$$.fragment,Ou),Ou.forEach(t),Pu.forEach(t),pm=h($l),xa=a($l,"SPAN",{});var Nu=i(xa);mm=s(Nu,"TFConvBertForMaskedLM"),Nu.forEach(t),$l.forEach(t),Qi=h(n),Oe=a(n,"DIV",{class:!0});var it=i(Oe);$(gs.$$.fragment,it),hm=h(it),_s=a(it,"P",{});var wl=i(_s);fm=s(wl,"ConvBERT Model with a "),Pa=a(wl,"CODE",{});var Au=i(Pa);um=s(Au,"language modeling"),Au.forEach(t),gm=s(wl," head on top."),wl.forEach(t),_m=h(it),vs=a(it,"P",{});var yl=i(vs);vm=s(yl,"This model inherits from "),_r=a(yl,"A",{href:!0});var Du=i(_r);bm=s(Du,"TFPreTrainedModel"),Du.forEach(t),km=s(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),Tm=h(it),bs=a(it,"P",{});var Cl=i(bs);$m=s(Cl,"This model is also a "),ks=a(Cl,"A",{href:!0,rel:!0});var Lu=i(ks);wm=s(Lu,"tf.keras.Model"),Lu.forEach(t),ym=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),Cm=h(it),$(In.$$.fragment,it),Fm=h(it),Ye=a(it,"DIV",{class:!0});var Tt=i(Ye);$(Ts.$$.fragment,Tt),Bm=h(Tt),Ht=a(Tt,"P",{});var Sr=i(Ht);Em=s(Sr,"The "),vr=a(Sr,"A",{href:!0});var Su=i(vr);Mm=s(Su,"TFConvBertForMaskedLM"),Su.forEach(t),zm=s(Sr," forward method, overrides the "),Oa=a(Sr,"CODE",{});var Iu=i(Oa);jm=s(Iu,"__call__"),Iu.forEach(t),qm=s(Sr," special method."),Sr.forEach(t),xm=h(Tt),$(Rn.$$.fragment,Tt),Pm=h(Tt),$(Wn.$$.fragment,Tt),Om=h(Tt),$(Un.$$.fragment,Tt),Tt.forEach(t),it.forEach(t),Ki=h(n),Qt=a(n,"H2",{class:!0});var Fl=i(Qt);Yn=a(Fl,"A",{id:!0,class:!0,href:!0});var Ru=i(Yn);Na=a(Ru,"SPAN",{});var Wu=i(Na);$($s.$$.fragment,Wu),Wu.forEach(t),Ru.forEach(t),Nm=h(Fl),Aa=a(Fl,"SPAN",{});var Uu=i(Aa);Am=s(Uu,"TFConvBertForSequenceClassification"),Uu.forEach(t),Fl.forEach(t),Vi=h(n),Ne=a(n,"DIV",{class:!0});var lt=i(Ne);$(ws.$$.fragment,lt),Dm=h(lt),Da=a(lt,"P",{});var Yu=i(Da);Lm=s(Yu,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Yu.forEach(t),Sm=h(lt),ys=a(lt,"P",{});var Bl=i(ys);Im=s(Bl,"This model inherits from "),br=a(Bl,"A",{href:!0});var Hu=i(br);Rm=s(Hu,"TFPreTrainedModel"),Hu.forEach(t),Wm=s(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),Um=h(lt),Cs=a(lt,"P",{});var El=i(Cs);Ym=s(El,"This model is also a "),Fs=a(El,"A",{href:!0,rel:!0});var Qu=i(Fs);Hm=s(Qu,"tf.keras.Model"),Qu.forEach(t),Qm=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),Km=h(lt),$(Hn.$$.fragment,lt),Vm=h(lt),He=a(lt,"DIV",{class:!0});var $t=i(He);$(Bs.$$.fragment,$t),Jm=h($t),Kt=a($t,"P",{});var Ir=i(Kt);Gm=s(Ir,"The "),kr=a(Ir,"A",{href:!0});var Ku=i(kr);Zm=s(Ku,"TFConvBertForSequenceClassification"),Ku.forEach(t),Xm=s(Ir," forward method, overrides the "),La=a(Ir,"CODE",{});var Vu=i(La);eh=s(Vu,"__call__"),Vu.forEach(t),th=s(Ir," special method."),Ir.forEach(t),nh=h($t),$(Qn.$$.fragment,$t),oh=h($t),$(Kn.$$.fragment,$t),sh=h($t),$(Vn.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Ji=h(n),Vt=a(n,"H2",{class:!0});var Ml=i(Vt);Jn=a(Ml,"A",{id:!0,class:!0,href:!0});var Ju=i(Jn);Sa=a(Ju,"SPAN",{});var Gu=i(Sa);$(Es.$$.fragment,Gu),Gu.forEach(t),Ju.forEach(t),rh=h(Ml),Ia=a(Ml,"SPAN",{});var Zu=i(Ia);ah=s(Zu,"TFConvBertForMultipleChoice"),Zu.forEach(t),Ml.forEach(t),Gi=h(n),Ae=a(n,"DIV",{class:!0});var dt=i(Ae);$(Ms.$$.fragment,dt),ih=h(dt),Ra=a(dt,"P",{});var Xu=i(Ra);lh=s(Xu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xu.forEach(t),dh=h(dt),zs=a(dt,"P",{});var zl=i(zs);ch=s(zl,"This model inherits from "),Tr=a(zl,"A",{href:!0});var eg=i(Tr);ph=s(eg,"TFPreTrainedModel"),eg.forEach(t),mh=s(zl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zl.forEach(t),hh=h(dt),js=a(dt,"P",{});var jl=i(js);fh=s(jl,"This model is also a "),qs=a(jl,"A",{href:!0,rel:!0});var tg=i(qs);uh=s(tg,"tf.keras.Model"),tg.forEach(t),gh=s(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),_h=h(dt),$(Gn.$$.fragment,dt),vh=h(dt),rt=a(dt,"DIV",{class:!0});var To=i(rt);$(xs.$$.fragment,To),bh=h(To),Jt=a(To,"P",{});var Rr=i(Jt);kh=s(Rr,"The "),$r=a(Rr,"A",{href:!0});var ng=i($r);Th=s(ng,"TFConvBertForMultipleChoice"),ng.forEach(t),$h=s(Rr," forward method, overrides the "),Wa=a(Rr,"CODE",{});var og=i(Wa);wh=s(og,"__call__"),og.forEach(t),yh=s(Rr," special method."),Rr.forEach(t),Ch=h(To),$(Zn.$$.fragment,To),Fh=h(To),$(Xn.$$.fragment,To),To.forEach(t),dt.forEach(t),Zi=h(n),Gt=a(n,"H2",{class:!0});var ql=i(Gt);eo=a(ql,"A",{id:!0,class:!0,href:!0});var sg=i(eo);Ua=a(sg,"SPAN",{});var rg=i(Ua);$(Ps.$$.fragment,rg),rg.forEach(t),sg.forEach(t),Bh=h(ql),Ya=a(ql,"SPAN",{});var ag=i(Ya);Eh=s(ag,"TFConvBertForTokenClassification"),ag.forEach(t),ql.forEach(t),Xi=h(n),De=a(n,"DIV",{class:!0});var ct=i(De);$(Os.$$.fragment,ct),Mh=h(ct),Ha=a(ct,"P",{});var ig=i(Ha);zh=s(ig,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ig.forEach(t),jh=h(ct),Ns=a(ct,"P",{});var xl=i(Ns);qh=s(xl,"This model inherits from "),wr=a(xl,"A",{href:!0});var lg=i(wr);xh=s(lg,"TFPreTrainedModel"),lg.forEach(t),Ph=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Oh=h(ct),As=a(ct,"P",{});var Pl=i(As);Nh=s(Pl,"This model is also a "),Ds=a(Pl,"A",{href:!0,rel:!0});var dg=i(Ds);Ah=s(dg,"tf.keras.Model"),dg.forEach(t),Dh=s(Pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),Lh=h(ct),$(to.$$.fragment,ct),Sh=h(ct),Qe=a(ct,"DIV",{class:!0});var wt=i(Qe);$(Ls.$$.fragment,wt),Ih=h(wt),Zt=a(wt,"P",{});var Wr=i(Zt);Rh=s(Wr,"The "),yr=a(Wr,"A",{href:!0});var cg=i(yr);Wh=s(cg,"TFConvBertForTokenClassification"),cg.forEach(t),Uh=s(Wr," forward method, overrides the "),Qa=a(Wr,"CODE",{});var pg=i(Qa);Yh=s(pg,"__call__"),pg.forEach(t),Hh=s(Wr," special method."),Wr.forEach(t),Qh=h(wt),$(no.$$.fragment,wt),Kh=h(wt),$(oo.$$.fragment,wt),Vh=h(wt),$(so.$$.fragment,wt),wt.forEach(t),ct.forEach(t),el=h(n),Xt=a(n,"H2",{class:!0});var Ol=i(Xt);ro=a(Ol,"A",{id:!0,class:!0,href:!0});var mg=i(ro);Ka=a(mg,"SPAN",{});var hg=i(Ka);$(Ss.$$.fragment,hg),hg.forEach(t),mg.forEach(t),Jh=h(Ol),Va=a(Ol,"SPAN",{});var fg=i(Va);Gh=s(fg,"TFConvBertForQuestionAnswering"),fg.forEach(t),Ol.forEach(t),tl=h(n),Le=a(n,"DIV",{class:!0});var pt=i(Le);$(Is.$$.fragment,pt),Zh=h(pt),en=a(pt,"P",{});var Ur=i(en);Xh=s(Ur,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ja=a(Ur,"CODE",{});var ug=i(Ja);ef=s(ug,"span start logits"),ug.forEach(t),tf=s(Ur," and "),Ga=a(Ur,"CODE",{});var gg=i(Ga);nf=s(gg,"span end logits"),gg.forEach(t),of=s(Ur,")."),Ur.forEach(t),sf=h(pt),Rs=a(pt,"P",{});var Nl=i(Rs);rf=s(Nl,"This model inherits from "),Cr=a(Nl,"A",{href:!0});var _g=i(Cr);af=s(_g,"TFPreTrainedModel"),_g.forEach(t),lf=s(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),df=h(pt),Ws=a(pt,"P",{});var Al=i(Ws);cf=s(Al,"This model is also a "),Us=a(Al,"A",{href:!0,rel:!0});var vg=i(Us);pf=s(vg,"tf.keras.Model"),vg.forEach(t),mf=s(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),hf=h(pt),$(ao.$$.fragment,pt),ff=h(pt),Ke=a(pt,"DIV",{class:!0});var yt=i(Ke);$(Ys.$$.fragment,yt),uf=h(yt),tn=a(yt,"P",{});var Yr=i(tn);gf=s(Yr,"The "),Fr=a(Yr,"A",{href:!0});var bg=i(Fr);_f=s(bg,"TFConvBertForQuestionAnswering"),bg.forEach(t),vf=s(Yr," forward method, overrides the "),Za=a(Yr,"CODE",{});var kg=i(Za);bf=s(kg,"__call__"),kg.forEach(t),kf=s(Yr," special method."),Yr.forEach(t),Tf=h(yt),$(io.$$.fragment,yt),$f=h(yt),$(lo.$$.fragment,yt),wf=h(yt),$(co.$$.fragment,yt),yt.forEach(t),pt.forEach(t),this.h()},h(){k(d,"name","hf:doc:metadata"),k(d,"content",JSON.stringify(u_)),k(p,"id","convbert"),k(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(p,"href","#convbert"),k(c,"class","relative group"),k(X,"id","overview"),k(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(X,"href","#overview"),k(z,"class","relative group"),k(te,"href","https://arxiv.org/abs/2008.02496"),k(te,"rel","nofollow"),k(L,"href","https://huggingface.co/abhishek"),k(L,"rel","nofollow"),k(P,"href","https://github.com/yitu-opensource/ConvBert"),k(P,"rel","nofollow"),k(u,"id","transformers.ConvBertConfig"),k(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(u,"href","#transformers.ConvBertConfig"),k(Z,"class","relative group"),k(Te,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),k(ke,"rel","nofollow"),k(Zs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(Xs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),k(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(an,"id","transformers.ConvBertTokenizer"),k(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(an,"href","#transformers.ConvBertTokenizer"),k(Ft,"class","relative group"),k(er,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer"),k(tr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(nr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),k(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ln,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(rr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(cn,"id","transformers.ConvBertTokenizerFast"),k(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(cn,"href","#transformers.ConvBertTokenizerFast"),k(Et,"class","relative group"),k(ar,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),k(ir,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(lr,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),k(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(mn,"id","transformers.ConvBertModel"),k(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(mn,"href","#transformers.ConvBertModel"),k(Mt,"class","relative group"),k(Ao,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ao,"rel","nofollow"),k(dr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),k(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(un,"id","transformers.ConvBertForMaskedLM"),k(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(un,"href","#transformers.ConvBertForMaskedLM"),k(jt,"class","relative group"),k(Io,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Io,"rel","nofollow"),k(cr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),k(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(bn,"id","transformers.ConvBertForSequenceClassification"),k(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(bn,"href","#transformers.ConvBertForSequenceClassification"),k(Pt,"class","relative group"),k(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Ho,"rel","nofollow"),k(pr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),k(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Cn,"id","transformers.ConvBertForMultipleChoice"),k(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Cn,"href","#transformers.ConvBertForMultipleChoice"),k(Nt,"class","relative group"),k(Go,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(Go,"rel","nofollow"),k(mr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),k(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(En,"id","transformers.ConvBertForTokenClassification"),k(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(En,"href","#transformers.ConvBertForTokenClassification"),k(Dt,"class","relative group"),k(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(ns,"rel","nofollow"),k(hr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),k(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(qn,"id","transformers.ConvBertForQuestionAnswering"),k(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(qn,"href","#transformers.ConvBertForQuestionAnswering"),k(St,"class","relative group"),k(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),k(is,"rel","nofollow"),k(fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),k(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Nn,"id","transformers.TFConvBertModel"),k(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Nn,"href","#transformers.TFConvBertModel"),k(Wt,"class","relative group"),k(ur,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(hs,"rel","nofollow"),k(gr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel"),k(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Sn,"id","transformers.TFConvBertForMaskedLM"),k(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Sn,"href","#transformers.TFConvBertForMaskedLM"),k(Yt,"class","relative group"),k(_r,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(ks,"rel","nofollow"),k(vr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),k(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Yn,"id","transformers.TFConvBertForSequenceClassification"),k(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Yn,"href","#transformers.TFConvBertForSequenceClassification"),k(Qt,"class","relative group"),k(br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Fs,"rel","nofollow"),k(kr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),k(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Jn,"id","transformers.TFConvBertForMultipleChoice"),k(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(Jn,"href","#transformers.TFConvBertForMultipleChoice"),k(Vt,"class","relative group"),k(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(qs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(qs,"rel","nofollow"),k($r,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),k(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(eo,"id","transformers.TFConvBertForTokenClassification"),k(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(eo,"href","#transformers.TFConvBertForTokenClassification"),k(Gt,"class","relative group"),k(wr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Ds,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Ds,"rel","nofollow"),k(yr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),k(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(ro,"id","transformers.TFConvBertForQuestionAnswering"),k(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),k(ro,"href","#transformers.TFConvBertForQuestionAnswering"),k(Xt,"class","relative group"),k(Cr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),k(Us,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),k(Us,"rel","nofollow"),k(Fr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),k(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),k(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(n,b){e(document.head,d),_(n,g,b),_(n,c,b),e(c,p),e(p,v),w(l,v,null),e(c,f),e(c,M),e(M,de),_(n,V,b),_(n,z,b),e(z,X),e(X,S),w(ee,S,null),e(z,ce),e(z,I),e(I,pe),_(n,ae,b),_(n,Q,b),e(Q,O),e(Q,te),e(te,J),e(Q,j),_(n,x,b),_(n,se,b),e(se,Y),_(n,ie,b),_(n,re,b),e(re,R),e(R,me),_(n,le,b),_(n,q,b),e(q,he),_(n,W,b),_(n,G,b),e(G,fe),e(G,L),e(L,ue),e(G,ge),e(G,P),e(P,_e),_(n,U,b),_(n,Z,b),e(Z,u),e(u,E),w(K,E,null),e(Z,Be),e(Z,Ce),e(Ce,N),_(n,Fe,b),_(n,ne,b),w(be,ne,null),e(ne,A),e(ne,D),e(D,Ee),e(D,Te),e(Te,H),e(D,Me),e(D,ke),e(ke,ve),e(D,ze),e(ne,Dl),e(ne,Ct),e(Ct,Ll),e(Ct,Zs),e(Zs,Sl),e(Ct,Il),e(Ct,Xs),e(Xs,Rl),e(Ct,Wl),e(ne,Ul),w(rn,ne,null),_(n,Ei,b),_(n,Ft,b),e(Ft,an),e(an,Hr),w($o,Hr,null),e(Ft,Yl),e(Ft,Qr),e(Qr,Hl),_(n,Mi,b),_(n,xe,b),w(wo,xe,null),e(xe,Ql),e(xe,mt),e(mt,Kl),e(mt,er),e(er,Vl),e(mt,Jl),e(mt,tr),e(tr,Gl),e(mt,Zl),e(mt,nr),e(nr,Xl),e(mt,ed),e(xe,td),e(xe,_t),w(yo,_t,null),e(_t,nd),e(_t,Kr),e(Kr,od),e(_t,sd),e(_t,Co),e(Co,or),e(or,rd),e(or,Vr),e(Vr,ad),e(Co,id),e(Co,sr),e(sr,ld),e(sr,Jr),e(Jr,dd),e(xe,cd),e(xe,ln),w(Fo,ln,null),e(ln,pd),e(ln,Bo),e(Bo,md),e(Bo,Gr),e(Gr,hd),e(Bo,fd),e(xe,ud),e(xe,tt),w(Eo,tt,null),e(tt,gd),e(tt,Zr),e(Zr,_d),e(tt,vd),w(dn,tt,null),e(tt,bd),e(tt,Bt),e(Bt,kd),e(Bt,Xr),e(Xr,Td),e(Bt,$d),e(Bt,ea),e(ea,wd),e(Bt,yd),e(xe,Cd),e(xe,rr),w(Mo,rr,null),_(n,zi,b),_(n,Et,b),e(Et,cn),e(cn,ta),w(zo,ta,null),e(Et,Fd),e(Et,na),e(na,Bd),_(n,ji,b),_(n,Je,b),w(jo,Je,null),e(Je,Ed),e(Je,qo),e(qo,Md),e(qo,oa),e(oa,zd),e(qo,jd),e(Je,qd),e(Je,pn),e(pn,ar),e(ar,xd),e(pn,Pd),e(pn,ir),e(ir,Od),e(pn,Nd),e(Je,Ad),e(Je,xo),e(xo,Dd),e(xo,lr),e(lr,Ld),e(xo,Sd),_(n,qi,b),_(n,Mt,b),e(Mt,mn),e(mn,sa),w(Po,sa,null),e(Mt,Id),e(Mt,ra),e(ra,Rd),_(n,xi,b),_(n,ht,b),w(Oo,ht,null),e(ht,Wd),e(ht,No),e(No,Ud),e(No,Ao),e(Ao,Yd),e(No,Hd),e(ht,Qd),e(ht,nt),w(Do,nt,null),e(nt,Kd),e(nt,zt),e(zt,Vd),e(zt,dr),e(dr,Jd),e(zt,Gd),e(zt,aa),e(aa,Zd),e(zt,Xd),e(nt,ec),w(hn,nt,null),e(nt,tc),w(fn,nt,null),_(n,Pi,b),_(n,jt,b),e(jt,un),e(un,ia),w(Lo,ia,null),e(jt,nc),e(jt,la),e(la,oc),_(n,Oi,b),_(n,ft,b),w(So,ft,null),e(ft,sc),e(ft,qt),e(qt,rc),e(qt,da),e(da,ac),e(qt,ic),e(qt,Io),e(Io,lc),e(qt,dc),e(ft,cc),e(ft,Re),w(Ro,Re,null),e(Re,pc),e(Re,xt),e(xt,mc),e(xt,cr),e(cr,hc),e(xt,fc),e(xt,ca),e(ca,uc),e(xt,gc),e(Re,_c),w(gn,Re,null),e(Re,vc),w(_n,Re,null),e(Re,bc),w(vn,Re,null),_(n,Ni,b),_(n,Pt,b),e(Pt,bn),e(bn,pa),w(Wo,pa,null),e(Pt,kc),e(Pt,ma),e(ma,Tc),_(n,Ai,b),_(n,Ge,b),w(Uo,Ge,null),e(Ge,$c),e(Ge,ha),e(ha,wc),e(Ge,yc),e(Ge,Yo),e(Yo,Cc),e(Yo,Ho),e(Ho,Fc),e(Yo,Bc),e(Ge,Ec),e(Ge,je),w(Qo,je,null),e(je,Mc),e(je,Ot),e(Ot,zc),e(Ot,pr),e(pr,jc),e(Ot,qc),e(Ot,fa),e(fa,xc),e(Ot,Pc),e(je,Oc),w(kn,je,null),e(je,Nc),w(Tn,je,null),e(je,Ac),w($n,je,null),e(je,Dc),w(wn,je,null),e(je,Lc),w(yn,je,null),_(n,Di,b),_(n,Nt,b),e(Nt,Cn),e(Cn,ua),w(Ko,ua,null),e(Nt,Sc),e(Nt,ga),e(ga,Ic),_(n,Li,b),_(n,Ze,b),w(Vo,Ze,null),e(Ze,Rc),e(Ze,_a),e(_a,Wc),e(Ze,Uc),e(Ze,Jo),e(Jo,Yc),e(Jo,Go),e(Go,Hc),e(Jo,Qc),e(Ze,Kc),e(Ze,ot),w(Zo,ot,null),e(ot,Vc),e(ot,At),e(At,Jc),e(At,mr),e(mr,Gc),e(At,Zc),e(At,va),e(va,Xc),e(At,ep),e(ot,tp),w(Fn,ot,null),e(ot,np),w(Bn,ot,null),_(n,Si,b),_(n,Dt,b),e(Dt,En),e(En,ba),w(Xo,ba,null),e(Dt,op),e(Dt,ka),e(ka,sp),_(n,Ii,b),_(n,Xe,b),w(es,Xe,null),e(Xe,rp),e(Xe,Ta),e(Ta,ap),e(Xe,ip),e(Xe,ts),e(ts,lp),e(ts,ns),e(ns,dp),e(ts,cp),e(Xe,pp),e(Xe,We),w(os,We,null),e(We,mp),e(We,Lt),e(Lt,hp),e(Lt,hr),e(hr,fp),e(Lt,up),e(Lt,$a),e($a,gp),e(Lt,_p),e(We,vp),w(Mn,We,null),e(We,bp),w(zn,We,null),e(We,kp),w(jn,We,null),_(n,Ri,b),_(n,St,b),e(St,qn),e(qn,wa),w(ss,wa,null),e(St,Tp),e(St,ya),e(ya,$p),_(n,Wi,b),_(n,et,b),w(rs,et,null),e(et,wp),e(et,It),e(It,yp),e(It,Ca),e(Ca,Cp),e(It,Fp),e(It,Fa),e(Fa,Bp),e(It,Ep),e(et,Mp),e(et,as),e(as,zp),e(as,is),e(is,jp),e(as,qp),e(et,xp),e(et,Ue),w(ls,Ue,null),e(Ue,Pp),e(Ue,Rt),e(Rt,Op),e(Rt,fr),e(fr,Np),e(Rt,Ap),e(Rt,Ba),e(Ba,Dp),e(Rt,Lp),e(Ue,Sp),w(xn,Ue,null),e(Ue,Ip),w(Pn,Ue,null),e(Ue,Rp),w(On,Ue,null),_(n,Ui,b),_(n,Wt,b),e(Wt,Nn),e(Nn,Ea),w(ds,Ea,null),e(Wt,Wp),e(Wt,Ma),e(Ma,Up),_(n,Yi,b),_(n,Pe,b),w(cs,Pe,null),e(Pe,Yp),e(Pe,za),e(za,Hp),e(Pe,Qp),e(Pe,ps),e(ps,Kp),e(ps,ur),e(ur,Vp),e(ps,Jp),e(Pe,Gp),e(Pe,ms),e(ms,Zp),e(ms,hs),e(hs,Xp),e(ms,em),e(Pe,tm),w(An,Pe,null),e(Pe,nm),e(Pe,st),w(fs,st,null),e(st,om),e(st,Ut),e(Ut,sm),e(Ut,gr),e(gr,rm),e(Ut,am),e(Ut,ja),e(ja,im),e(Ut,lm),e(st,dm),w(Dn,st,null),e(st,cm),w(Ln,st,null),_(n,Hi,b),_(n,Yt,b),e(Yt,Sn),e(Sn,qa),w(us,qa,null),e(Yt,pm),e(Yt,xa),e(xa,mm),_(n,Qi,b),_(n,Oe,b),w(gs,Oe,null),e(Oe,hm),e(Oe,_s),e(_s,fm),e(_s,Pa),e(Pa,um),e(_s,gm),e(Oe,_m),e(Oe,vs),e(vs,vm),e(vs,_r),e(_r,bm),e(vs,km),e(Oe,Tm),e(Oe,bs),e(bs,$m),e(bs,ks),e(ks,wm),e(bs,ym),e(Oe,Cm),w(In,Oe,null),e(Oe,Fm),e(Oe,Ye),w(Ts,Ye,null),e(Ye,Bm),e(Ye,Ht),e(Ht,Em),e(Ht,vr),e(vr,Mm),e(Ht,zm),e(Ht,Oa),e(Oa,jm),e(Ht,qm),e(Ye,xm),w(Rn,Ye,null),e(Ye,Pm),w(Wn,Ye,null),e(Ye,Om),w(Un,Ye,null),_(n,Ki,b),_(n,Qt,b),e(Qt,Yn),e(Yn,Na),w($s,Na,null),e(Qt,Nm),e(Qt,Aa),e(Aa,Am),_(n,Vi,b),_(n,Ne,b),w(ws,Ne,null),e(Ne,Dm),e(Ne,Da),e(Da,Lm),e(Ne,Sm),e(Ne,ys),e(ys,Im),e(ys,br),e(br,Rm),e(ys,Wm),e(Ne,Um),e(Ne,Cs),e(Cs,Ym),e(Cs,Fs),e(Fs,Hm),e(Cs,Qm),e(Ne,Km),w(Hn,Ne,null),e(Ne,Vm),e(Ne,He),w(Bs,He,null),e(He,Jm),e(He,Kt),e(Kt,Gm),e(Kt,kr),e(kr,Zm),e(Kt,Xm),e(Kt,La),e(La,eh),e(Kt,th),e(He,nh),w(Qn,He,null),e(He,oh),w(Kn,He,null),e(He,sh),w(Vn,He,null),_(n,Ji,b),_(n,Vt,b),e(Vt,Jn),e(Jn,Sa),w(Es,Sa,null),e(Vt,rh),e(Vt,Ia),e(Ia,ah),_(n,Gi,b),_(n,Ae,b),w(Ms,Ae,null),e(Ae,ih),e(Ae,Ra),e(Ra,lh),e(Ae,dh),e(Ae,zs),e(zs,ch),e(zs,Tr),e(Tr,ph),e(zs,mh),e(Ae,hh),e(Ae,js),e(js,fh),e(js,qs),e(qs,uh),e(js,gh),e(Ae,_h),w(Gn,Ae,null),e(Ae,vh),e(Ae,rt),w(xs,rt,null),e(rt,bh),e(rt,Jt),e(Jt,kh),e(Jt,$r),e($r,Th),e(Jt,$h),e(Jt,Wa),e(Wa,wh),e(Jt,yh),e(rt,Ch),w(Zn,rt,null),e(rt,Fh),w(Xn,rt,null),_(n,Zi,b),_(n,Gt,b),e(Gt,eo),e(eo,Ua),w(Ps,Ua,null),e(Gt,Bh),e(Gt,Ya),e(Ya,Eh),_(n,Xi,b),_(n,De,b),w(Os,De,null),e(De,Mh),e(De,Ha),e(Ha,zh),e(De,jh),e(De,Ns),e(Ns,qh),e(Ns,wr),e(wr,xh),e(Ns,Ph),e(De,Oh),e(De,As),e(As,Nh),e(As,Ds),e(Ds,Ah),e(As,Dh),e(De,Lh),w(to,De,null),e(De,Sh),e(De,Qe),w(Ls,Qe,null),e(Qe,Ih),e(Qe,Zt),e(Zt,Rh),e(Zt,yr),e(yr,Wh),e(Zt,Uh),e(Zt,Qa),e(Qa,Yh),e(Zt,Hh),e(Qe,Qh),w(no,Qe,null),e(Qe,Kh),w(oo,Qe,null),e(Qe,Vh),w(so,Qe,null),_(n,el,b),_(n,Xt,b),e(Xt,ro),e(ro,Ka),w(Ss,Ka,null),e(Xt,Jh),e(Xt,Va),e(Va,Gh),_(n,tl,b),_(n,Le,b),w(Is,Le,null),e(Le,Zh),e(Le,en),e(en,Xh),e(en,Ja),e(Ja,ef),e(en,tf),e(en,Ga),e(Ga,nf),e(en,of),e(Le,sf),e(Le,Rs),e(Rs,rf),e(Rs,Cr),e(Cr,af),e(Rs,lf),e(Le,df),e(Le,Ws),e(Ws,cf),e(Ws,Us),e(Us,pf),e(Ws,mf),e(Le,hf),w(ao,Le,null),e(Le,ff),e(Le,Ke),w(Ys,Ke,null),e(Ke,uf),e(Ke,tn),e(tn,gf),e(tn,Fr),e(Fr,_f),e(tn,vf),e(tn,Za),e(Za,bf),e(tn,kf),e(Ke,Tf),w(io,Ke,null),e(Ke,$f),w(lo,Ke,null),e(Ke,wf),w(co,Ke,null),nl=!0},p(n,[b]){const Hs={};b&2&&(Hs.$$scope={dirty:b,ctx:n}),rn.$set(Hs);const Xa={};b&2&&(Xa.$$scope={dirty:b,ctx:n}),dn.$set(Xa);const ei={};b&2&&(ei.$$scope={dirty:b,ctx:n}),hn.$set(ei);const ti={};b&2&&(ti.$$scope={dirty:b,ctx:n}),fn.$set(ti);const Qs={};b&2&&(Qs.$$scope={dirty:b,ctx:n}),gn.$set(Qs);const ni={};b&2&&(ni.$$scope={dirty:b,ctx:n}),_n.$set(ni);const oi={};b&2&&(oi.$$scope={dirty:b,ctx:n}),vn.$set(oi);const si={};b&2&&(si.$$scope={dirty:b,ctx:n}),kn.$set(si);const Ks={};b&2&&(Ks.$$scope={dirty:b,ctx:n}),Tn.$set(Ks);const ri={};b&2&&(ri.$$scope={dirty:b,ctx:n}),$n.$set(ri);const ai={};b&2&&(ai.$$scope={dirty:b,ctx:n}),wn.$set(ai);const ii={};b&2&&(ii.$$scope={dirty:b,ctx:n}),yn.$set(ii);const li={};b&2&&(li.$$scope={dirty:b,ctx:n}),Fn.$set(li);const di={};b&2&&(di.$$scope={dirty:b,ctx:n}),Bn.$set(di);const po={};b&2&&(po.$$scope={dirty:b,ctx:n}),Mn.$set(po);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:n}),zn.$set(ci);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:n}),jn.$set(pi);const Vs={};b&2&&(Vs.$$scope={dirty:b,ctx:n}),xn.$set(Vs);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:n}),Pn.$set(mi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:n}),On.$set(hi);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:n}),An.$set(fi);const ut={};b&2&&(ut.$$scope={dirty:b,ctx:n}),Dn.$set(ut);const nn={};b&2&&(nn.$$scope={dirty:b,ctx:n}),Ln.$set(nn);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:n}),In.$set(ui);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:n}),Rn.$set(gi);const on={};b&2&&(on.$$scope={dirty:b,ctx:n}),Wn.$set(on);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:n}),Un.$set(_i);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:n}),Hn.$set(vi);const Js={};b&2&&(Js.$$scope={dirty:b,ctx:n}),Qn.$set(Js);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:n}),Kn.$set(bi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:n}),Vn.$set(ki);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:n}),Gn.$set(Ti);const Ie={};b&2&&(Ie.$$scope={dirty:b,ctx:n}),Zn.$set(Ie);const gt={};b&2&&(gt.$$scope={dirty:b,ctx:n}),Xn.$set(gt);const $i={};b&2&&($i.$$scope={dirty:b,ctx:n}),to.$set($i);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:n}),no.$set(wi);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:n}),oo.$set(yi);const sn={};b&2&&(sn.$$scope={dirty:b,ctx:n}),so.$set(sn);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:n}),ao.$set(Ci);const Gs={};b&2&&(Gs.$$scope={dirty:b,ctx:n}),io.$set(Gs);const Br={};b&2&&(Br.$$scope={dirty:b,ctx:n}),lo.$set(Br);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:n}),co.$set(Fi)},i(n){nl||(y(l.$$.fragment,n),y(ee.$$.fragment,n),y(K.$$.fragment,n),y(be.$$.fragment,n),y(rn.$$.fragment,n),y($o.$$.fragment,n),y(wo.$$.fragment,n),y(yo.$$.fragment,n),y(Fo.$$.fragment,n),y(Eo.$$.fragment,n),y(dn.$$.fragment,n),y(Mo.$$.fragment,n),y(zo.$$.fragment,n),y(jo.$$.fragment,n),y(Po.$$.fragment,n),y(Oo.$$.fragment,n),y(Do.$$.fragment,n),y(hn.$$.fragment,n),y(fn.$$.fragment,n),y(Lo.$$.fragment,n),y(So.$$.fragment,n),y(Ro.$$.fragment,n),y(gn.$$.fragment,n),y(_n.$$.fragment,n),y(vn.$$.fragment,n),y(Wo.$$.fragment,n),y(Uo.$$.fragment,n),y(Qo.$$.fragment,n),y(kn.$$.fragment,n),y(Tn.$$.fragment,n),y($n.$$.fragment,n),y(wn.$$.fragment,n),y(yn.$$.fragment,n),y(Ko.$$.fragment,n),y(Vo.$$.fragment,n),y(Zo.$$.fragment,n),y(Fn.$$.fragment,n),y(Bn.$$.fragment,n),y(Xo.$$.fragment,n),y(es.$$.fragment,n),y(os.$$.fragment,n),y(Mn.$$.fragment,n),y(zn.$$.fragment,n),y(jn.$$.fragment,n),y(ss.$$.fragment,n),y(rs.$$.fragment,n),y(ls.$$.fragment,n),y(xn.$$.fragment,n),y(Pn.$$.fragment,n),y(On.$$.fragment,n),y(ds.$$.fragment,n),y(cs.$$.fragment,n),y(An.$$.fragment,n),y(fs.$$.fragment,n),y(Dn.$$.fragment,n),y(Ln.$$.fragment,n),y(us.$$.fragment,n),y(gs.$$.fragment,n),y(In.$$.fragment,n),y(Ts.$$.fragment,n),y(Rn.$$.fragment,n),y(Wn.$$.fragment,n),y(Un.$$.fragment,n),y($s.$$.fragment,n),y(ws.$$.fragment,n),y(Hn.$$.fragment,n),y(Bs.$$.fragment,n),y(Qn.$$.fragment,n),y(Kn.$$.fragment,n),y(Vn.$$.fragment,n),y(Es.$$.fragment,n),y(Ms.$$.fragment,n),y(Gn.$$.fragment,n),y(xs.$$.fragment,n),y(Zn.$$.fragment,n),y(Xn.$$.fragment,n),y(Ps.$$.fragment,n),y(Os.$$.fragment,n),y(to.$$.fragment,n),y(Ls.$$.fragment,n),y(no.$$.fragment,n),y(oo.$$.fragment,n),y(so.$$.fragment,n),y(Ss.$$.fragment,n),y(Is.$$.fragment,n),y(ao.$$.fragment,n),y(Ys.$$.fragment,n),y(io.$$.fragment,n),y(lo.$$.fragment,n),y(co.$$.fragment,n),nl=!0)},o(n){C(l.$$.fragment,n),C(ee.$$.fragment,n),C(K.$$.fragment,n),C(be.$$.fragment,n),C(rn.$$.fragment,n),C($o.$$.fragment,n),C(wo.$$.fragment,n),C(yo.$$.fragment,n),C(Fo.$$.fragment,n),C(Eo.$$.fragment,n),C(dn.$$.fragment,n),C(Mo.$$.fragment,n),C(zo.$$.fragment,n),C(jo.$$.fragment,n),C(Po.$$.fragment,n),C(Oo.$$.fragment,n),C(Do.$$.fragment,n),C(hn.$$.fragment,n),C(fn.$$.fragment,n),C(Lo.$$.fragment,n),C(So.$$.fragment,n),C(Ro.$$.fragment,n),C(gn.$$.fragment,n),C(_n.$$.fragment,n),C(vn.$$.fragment,n),C(Wo.$$.fragment,n),C(Uo.$$.fragment,n),C(Qo.$$.fragment,n),C(kn.$$.fragment,n),C(Tn.$$.fragment,n),C($n.$$.fragment,n),C(wn.$$.fragment,n),C(yn.$$.fragment,n),C(Ko.$$.fragment,n),C(Vo.$$.fragment,n),C(Zo.$$.fragment,n),C(Fn.$$.fragment,n),C(Bn.$$.fragment,n),C(Xo.$$.fragment,n),C(es.$$.fragment,n),C(os.$$.fragment,n),C(Mn.$$.fragment,n),C(zn.$$.fragment,n),C(jn.$$.fragment,n),C(ss.$$.fragment,n),C(rs.$$.fragment,n),C(ls.$$.fragment,n),C(xn.$$.fragment,n),C(Pn.$$.fragment,n),C(On.$$.fragment,n),C(ds.$$.fragment,n),C(cs.$$.fragment,n),C(An.$$.fragment,n),C(fs.$$.fragment,n),C(Dn.$$.fragment,n),C(Ln.$$.fragment,n),C(us.$$.fragment,n),C(gs.$$.fragment,n),C(In.$$.fragment,n),C(Ts.$$.fragment,n),C(Rn.$$.fragment,n),C(Wn.$$.fragment,n),C(Un.$$.fragment,n),C($s.$$.fragment,n),C(ws.$$.fragment,n),C(Hn.$$.fragment,n),C(Bs.$$.fragment,n),C(Qn.$$.fragment,n),C(Kn.$$.fragment,n),C(Vn.$$.fragment,n),C(Es.$$.fragment,n),C(Ms.$$.fragment,n),C(Gn.$$.fragment,n),C(xs.$$.fragment,n),C(Zn.$$.fragment,n),C(Xn.$$.fragment,n),C(Ps.$$.fragment,n),C(Os.$$.fragment,n),C(to.$$.fragment,n),C(Ls.$$.fragment,n),C(no.$$.fragment,n),C(oo.$$.fragment,n),C(so.$$.fragment,n),C(Ss.$$.fragment,n),C(Is.$$.fragment,n),C(ao.$$.fragment,n),C(Ys.$$.fragment,n),C(io.$$.fragment,n),C(lo.$$.fragment,n),C(co.$$.fragment,n),nl=!1},d(n){t(d),n&&t(g),n&&t(c),F(l),n&&t(V),n&&t(z),F(ee),n&&t(ae),n&&t(Q),n&&t(x),n&&t(se),n&&t(ie),n&&t(re),n&&t(le),n&&t(q),n&&t(W),n&&t(G),n&&t(U),n&&t(Z),F(K),n&&t(Fe),n&&t(ne),F(be),F(rn),n&&t(Ei),n&&t(Ft),F($o),n&&t(Mi),n&&t(xe),F(wo),F(yo),F(Fo),F(Eo),F(dn),F(Mo),n&&t(zi),n&&t(Et),F(zo),n&&t(ji),n&&t(Je),F(jo),n&&t(qi),n&&t(Mt),F(Po),n&&t(xi),n&&t(ht),F(Oo),F(Do),F(hn),F(fn),n&&t(Pi),n&&t(jt),F(Lo),n&&t(Oi),n&&t(ft),F(So),F(Ro),F(gn),F(_n),F(vn),n&&t(Ni),n&&t(Pt),F(Wo),n&&t(Ai),n&&t(Ge),F(Uo),F(Qo),F(kn),F(Tn),F($n),F(wn),F(yn),n&&t(Di),n&&t(Nt),F(Ko),n&&t(Li),n&&t(Ze),F(Vo),F(Zo),F(Fn),F(Bn),n&&t(Si),n&&t(Dt),F(Xo),n&&t(Ii),n&&t(Xe),F(es),F(os),F(Mn),F(zn),F(jn),n&&t(Ri),n&&t(St),F(ss),n&&t(Wi),n&&t(et),F(rs),F(ls),F(xn),F(Pn),F(On),n&&t(Ui),n&&t(Wt),F(ds),n&&t(Yi),n&&t(Pe),F(cs),F(An),F(fs),F(Dn),F(Ln),n&&t(Hi),n&&t(Yt),F(us),n&&t(Qi),n&&t(Oe),F(gs),F(In),F(Ts),F(Rn),F(Wn),F(Un),n&&t(Ki),n&&t(Qt),F($s),n&&t(Vi),n&&t(Ne),F(ws),F(Hn),F(Bs),F(Qn),F(Kn),F(Vn),n&&t(Ji),n&&t(Vt),F(Es),n&&t(Gi),n&&t(Ae),F(Ms),F(Gn),F(xs),F(Zn),F(Xn),n&&t(Zi),n&&t(Gt),F(Ps),n&&t(Xi),n&&t(De),F(Os),F(to),F(Ls),F(no),F(oo),F(so),n&&t(el),n&&t(Xt),F(Ss),n&&t(tl),n&&t(Le),F(Is),F(ao),F(Ys),F(io),F(lo),F(co)}}}const u_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function g_(B){return Cg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class w_ extends Tg{constructor(d){super();$g(this,d,g_,f_,wg,{})}}export{w_ as default,u_ as metadata};
