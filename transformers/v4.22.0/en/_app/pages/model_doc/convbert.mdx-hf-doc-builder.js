import{S as Tg,i as wg,s as yg,e as r,k as h,w as T,t as n,M as $g,c as a,d as t,m,a as i,x as w,h as s,b as _,G as e,g as v,y,q as $,o as C,B as F,v as Cg,L as Le}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ze}from"../../chunks/Tip-hf-doc-builder.js";import{D as de}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ie}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as at}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as De}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function Fg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertModel, ConvBertConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Eg(M){let d,g,c,u,k;return u=new Ie({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=r("p"),g=n("pair mask has the following format:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"pair mask has the following format:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Bg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Mg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function zg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function jg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function qg(M){let d,g;return d=new Ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function xg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Pg(M){let d,g,c,u,k;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of single-label classification:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of single-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Og(M){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Ag(M){let d,g,c,u,k;return u=new Ie({props:{code:`import torch
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
`}}),{c(){d=r("p"),g=n("Example of multi-label classification:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example of multi-label classification:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Ng(M){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Dg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Lg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Ig(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Sg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Rg(M){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Wg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Kg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Ug(M){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Yg(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function Hg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Qg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Vg(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function Jg(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function Gg(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function Zg(M){let d,g;return d=new Ie({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function Xg(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function e_(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function t_(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function o_(M){let d,g;return d=new Ie({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function n_(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function s_(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function r_(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function a_(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function i_(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function l_(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function d_(M){let d,g;return d=new Ie({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function c_(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe;return{c(){d=r("p"),g=n("TensorFlow models and layers in "),c=r("code"),u=n("transformers"),k=n(" accept two formats as input:"),l=h(),p=r("ul"),j=r("li"),ke=n("having all inputs as keyword arguments (like PyTorch models), or"),me=h(),D=r("li"),ne=n("having all inputs as a list, tuple or dict in the first positional argument."),Z=h(),E=r("p"),Te=n(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=r("code"),we=n("model.fit()"),ue=n(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=r("code"),ye=n("model.fit()"),re=n(` supports! If, however, you want to use the second
format outside of Keras methods like `),J=r("code"),$e=n("fit()"),fe=n(" and "),H=r("code"),Ce=n("predict()"),ge=n(`, such as when creating your own layers or models with
the Keras `),Q=r("code"),ce=n("Functional"),Fe=n(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),X=h(),q=r("ul"),P=r("li"),_e=n("a single Tensor with "),L=r("code"),Ee=n("input_ids"),ae=n(" only and nothing else: "),G=r("code"),Be=n("model(input_ids)"),ie=h(),O=r("li"),ve=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=r("code"),se=n("model([input_ids, attention_mask])"),pe=n(" or "),Y=r("code"),Me=n("model([input_ids, attention_mask, token_type_ids])"),he=h(),S=r("li"),be=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=r("code"),le=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ee=h(),x=r("p"),ze=n(`Note that when creating models and layers with
`),A=r("a"),je=n("subclassing"),qe=n(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){d=a(f,"P",{});var B=i(d);g=s(B,"TensorFlow models and layers in "),c=a(B,"CODE",{});var Ue=i(c);u=s(Ue,"transformers"),Ue.forEach(t),k=s(B," accept two formats as input:"),B.forEach(t),l=m(f),p=a(f,"UL",{});var te=i(p);j=a(te,"LI",{});var xe=i(j);ke=s(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),me=m(te),D=a(te,"LI",{});var Ye=i(D);ne=s(Ye,"having all inputs as a list, tuple or dict in the first positional argument."),Ye.forEach(t),te.forEach(t),Z=m(f),E=a(f,"P",{});var z=i(E);Te=s(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),V=a(z,"CODE",{});var He=i(V);we=s(He,"model.fit()"),He.forEach(t),ue=s(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),W=a(z,"CODE",{});var Qe=i(W);ye=s(Qe,"model.fit()"),Qe.forEach(t),re=s(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),J=a(z,"CODE",{});var Ne=i(J);$e=s(Ne,"fit()"),Ne.forEach(t),fe=s(z," and "),H=a(z,"CODE",{});var Ve=i(H);Ce=s(Ve,"predict()"),Ve.forEach(t),ge=s(z,`, such as when creating your own layers or models with
the Keras `),Q=a(z,"CODE",{});var Je=i(Q);ce=s(Je,"Functional"),Je.forEach(t),Fe=s(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),X=m(f),q=a(f,"UL",{});var R=i(q);P=a(R,"LI",{});var K=i(P);_e=s(K,"a single Tensor with "),L=a(K,"CODE",{});var We=i(L);Ee=s(We,"input_ids"),We.forEach(t),ae=s(K," only and nothing else: "),G=a(K,"CODE",{});var Pe=i(G);Be=s(Pe,"model(input_ids)"),Pe.forEach(t),K.forEach(t),ie=m(R),O=a(R,"LI",{});var U=i(O);ve=s(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),I=a(U,"CODE",{});var Se=i(I);se=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),pe=s(U," or "),Y=a(U,"CODE",{});var Ae=i(Y);Me=s(Ae,"model([input_ids, attention_mask, token_type_ids])"),Ae.forEach(t),U.forEach(t),he=m(R),S=a(R,"LI",{});var Oe=i(S);be=s(Oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),N=a(Oe,"CODE",{});var Re=i(N);le=s(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),Oe.forEach(t),R.forEach(t),ee=m(f),x=a(f,"P",{});var oe=i(x);ze=s(oe,`Note that when creating models and layers with
`),A=a(oe,"A",{href:!0,rel:!0});var Ke=i(A);je=s(Ke,"subclassing"),Ke.forEach(t),qe=s(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){_(A,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),_(A,"rel","nofollow")},m(f,B){v(f,d,B),e(d,g),e(d,c),e(c,u),e(d,k),v(f,l,B),v(f,p,B),e(p,j),e(j,ke),e(p,me),e(p,D),e(D,ne),v(f,Z,B),v(f,E,B),e(E,Te),e(E,V),e(V,we),e(E,ue),e(E,W),e(W,ye),e(E,re),e(E,J),e(J,$e),e(E,fe),e(E,H),e(H,Ce),e(E,ge),e(E,Q),e(Q,ce),e(E,Fe),v(f,X,B),v(f,q,B),e(q,P),e(P,_e),e(P,L),e(L,Ee),e(P,ae),e(P,G),e(G,Be),e(q,ie),e(q,O),e(O,ve),e(O,I),e(I,se),e(O,pe),e(O,Y),e(Y,Me),e(q,he),e(q,S),e(S,be),e(S,N),e(N,le),v(f,ee,B),v(f,x,B),e(x,ze),e(x,A),e(A,je),e(x,qe)},d(f){f&&t(d),f&&t(l),f&&t(p),f&&t(Z),f&&t(E),f&&t(X),f&&t(q),f&&t(ee),f&&t(x)}}}function p_(M){let d,g,c,u,k;return{c(){d=r("p"),g=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r("code"),u=n("Module"),k=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a(p,"CODE",{});var j=i(c);u=s(j,"Module"),j.forEach(t),k=s(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){v(l,d,p),e(d,g),e(d,c),e(c,u),e(d,k)},d(l){l&&t(d)}}}function h_(M){let d,g,c,u,k;return u=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
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
`}}),{c(){d=r("p"),g=n("Example:"),c=h(),T(u.$$.fragment)},l(l){d=a(l,"P",{});var p=i(d);g=s(p,"Example:"),p.forEach(t),c=m(l),w(u.$$.fragment,l)},m(l,p){v(l,d,p),e(d,g),v(l,c,p),y(u,l,p),k=!0},p:Le,i(l){k||($(u.$$.fragment,l),k=!0)},o(l){C(u.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(c),F(u,l)}}}function m_(M){let d,g;return d=new Ie({props:{code:`# target is "nice puppet"
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
`}}),{c(){T(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,u){y(d,c,u),g=!0},p:Le,i(c){g||($(d.$$.fragment,c),g=!0)},o(c){C(d.$$.fragment,c),g=!1},d(c){F(d,c)}}}function u_(M){let d,g,c,u,k,l,p,j,ke,me,D,ne,Z,E,Te,V,we,ue,W,ye,re,J,$e,fe,H,Ce,ge,Q,ce,Fe,X,q,P,_e,L,Ee,ae,G,Be,ie,O,ve,I,se,pe,Y,Me,he,S,be,N,le,ee,x,ze,A,je,qe,f,B,Ue,te,xe,Ye,z,He,Qe,Ne,Ve,Je,R,K,We,Pe,U,Se,Ae,Oe,Re,oe,Ke,Xe,Dn,Hl,qt,Ql,mr,Vl,Jl,ur,Gl,Zl,fr,Xl,ed,td,Nt,Ln,od,ra,nd,sd,In,gr,rd,aa,ad,id,_r,ld,ia,dd,cd,$o,Sn,pd,Rn,hd,la,md,ud,fd,Tt,Wn,gd,da,_d,vd,Co,bd,Ut,kd,ca,Td,wd,pa,yd,$d,Cd,vr,Kn,Li,Yt,Fo,ha,Un,Fd,ma,Ed,Ii,gt,Yn,Bd,Hn,Md,ua,zd,jd,qd,Eo,br,xd,Pd,kr,Od,Ad,Nd,Qn,Dd,Tr,Ld,Id,Si,Ht,Bo,fa,Vn,Sd,ga,Rd,Ri,xt,Jn,Wd,Gn,Kd,Zn,Ud,Yd,Hd,wt,Xn,Qd,Qt,Vd,wr,Jd,Gd,_a,Zd,Xd,ec,Mo,tc,zo,Wi,Vt,jo,va,es,oc,ba,nc,Ki,Pt,ts,sc,Jt,rc,ka,ac,ic,os,lc,dc,cc,lt,ns,pc,Gt,hc,yr,mc,uc,Ta,fc,gc,_c,qo,vc,xo,bc,Po,Ui,Zt,Oo,wa,ss,kc,ya,Tc,Yi,_t,rs,wc,$a,yc,$c,as,Cc,is,Fc,Ec,Bc,Ge,ls,Mc,Xt,zc,$r,jc,qc,Ca,xc,Pc,Oc,Ao,Ac,No,Nc,Do,Dc,Lo,Lc,Io,Hi,eo,So,Fa,ds,Ic,Ea,Sc,Qi,vt,cs,Rc,Ba,Wc,Kc,ps,Uc,hs,Yc,Hc,Qc,yt,ms,Vc,to,Jc,Cr,Gc,Zc,Ma,Xc,ep,tp,Ro,op,Wo,Vi,oo,Ko,za,us,np,ja,sp,Ji,bt,fs,rp,qa,ap,ip,gs,lp,_s,dp,cp,pp,dt,vs,hp,no,mp,Fr,up,fp,xa,gp,_p,vp,Uo,bp,Yo,kp,Ho,Gi,so,Qo,Pa,bs,Tp,Oa,wp,Zi,kt,ks,yp,ro,$p,Aa,Cp,Fp,Na,Ep,Bp,Mp,Ts,zp,ws,jp,qp,xp,ct,ys,Pp,ao,Op,Er,Ap,Np,Da,Dp,Lp,Ip,Vo,Sp,Jo,Rp,Go,Xi,io,Zo,La,$s,Wp,Ia,Kp,el,et,Cs,Up,Sa,Yp,Hp,Fs,Qp,Br,Vp,Jp,Gp,Es,Zp,Bs,Xp,eh,th,Xo,oh,$t,Ms,nh,lo,sh,Mr,rh,ah,Ra,ih,lh,dh,en,ch,tn,tl,co,on,Wa,zs,ph,Ka,hh,ol,tt,js,mh,qs,uh,Ua,fh,gh,_h,xs,vh,zr,bh,kh,Th,Ps,wh,Os,yh,$h,Ch,nn,Fh,pt,As,Eh,po,Bh,jr,Mh,zh,Ya,jh,qh,xh,sn,Ph,rn,Oh,an,nl,ho,ln,Ha,Ns,Ah,Qa,Nh,sl,ot,Ds,Dh,Va,Lh,Ih,Ls,Sh,qr,Rh,Wh,Kh,Is,Uh,Ss,Yh,Hh,Qh,dn,Vh,ht,Rs,Jh,mo,Gh,xr,Zh,Xh,Ja,em,tm,om,cn,nm,pn,sm,hn,rl,uo,mn,Ga,Ws,rm,Za,am,al,nt,Ks,im,Xa,lm,dm,Us,cm,Pr,pm,hm,mm,Ys,um,Hs,fm,gm,_m,un,vm,Ct,Qs,bm,fo,km,Or,Tm,wm,ei,ym,$m,Cm,fn,Fm,gn,il,go,_n,ti,Vs,Em,oi,Bm,ll,st,Js,Mm,ni,zm,jm,Gs,qm,Ar,xm,Pm,Om,Zs,Am,Xs,Nm,Dm,Lm,vn,Im,mt,er,Sm,_o,Rm,Nr,Wm,Km,si,Um,Ym,Hm,bn,Qm,kn,Vm,Tn,dl,vo,wn,ri,tr,Jm,ai,Gm,cl,rt,or,Zm,bo,Xm,ii,eu,tu,li,ou,nu,su,nr,ru,Dr,au,iu,lu,sr,du,rr,cu,pu,hu,yn,mu,ut,ar,uu,ko,fu,Lr,gu,_u,di,vu,bu,ku,$n,Tu,Cn,wu,Fn,pl;return l=new at({}),E=new at({}),Y=new at({}),le=new de({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ConvBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ConvBertConfig.head_ratio",description:`<strong>head_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Ratio gamma to reduce the number of attention heads.`,name:"head_ratio"},{anchor:"transformers.ConvBertConfig.num_groups",description:`<strong>num_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups for grouped linear layers for ConvBert model`,name:"num_groups"},{anchor:"transformers.ConvBertConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The size of the convolutional kernel.`,name:"conv_kernel_size"},{anchor:"transformers.ConvBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/configuration_convbert.py#L37"}}),K=new De({props:{anchor:"transformers.ConvBertConfig.example",$$slots:{default:[Fg]},$$scope:{ctx:M}}}),Ae=new at({}),Dn=new de({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/tokenization_convbert.py#L48"}}),Ln=new de({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Sn=new de({props:{name:"get_special_tokens_mask",anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.ConvBertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Wn=new de({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Co=new De({props:{anchor:"transformers.ConvBertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[Eg]},$$scope:{ctx:M}}}),Kn=new de({props:{name:"save_vocabulary",anchor:"transformers.ConvBertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/bert/tokenization_bert.py#L350"}}),Un=new at({}),Yn=new de({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/tokenization_convbert_fast.py#L49"}}),Vn=new at({}),Jn=new de({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L773"}}),Xn=new de({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L800",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mo=new Ze({props:{$$slots:{default:[Bg]},$$scope:{ctx:M}}}),zo=new De({props:{anchor:"transformers.ConvBertModel.forward.example",$$slots:{default:[Mg]},$$scope:{ctx:M}}}),es=new at({}),ts=new de({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L887"}}),ns=new de({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L904",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qo=new Ze({props:{$$slots:{default:[zg]},$$scope:{ctx:M}}}),xo=new De({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example",$$slots:{default:[jg]},$$scope:{ctx:M}}}),Po=new De({props:{anchor:"transformers.ConvBertForMaskedLM.forward.example-2",$$slots:{default:[qg]},$$scope:{ctx:M}}}),ss=new at({}),rs=new de({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L997"}}),ls=new de({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1008",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ao=new Ze({props:{$$slots:{default:[xg]},$$scope:{ctx:M}}}),No=new De({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example",$$slots:{default:[Pg]},$$scope:{ctx:M}}}),Do=new De({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-2",$$slots:{default:[Og]},$$scope:{ctx:M}}}),Lo=new De({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-3",$$slots:{default:[Ag]},$$scope:{ctx:M}}}),Io=new De({props:{anchor:"transformers.ConvBertForSequenceClassification.forward.example-4",$$slots:{default:[Ng]},$$scope:{ctx:M}}}),ds=new at({}),cs=new de({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1093"}}),ms=new de({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1104",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Ze({props:{$$slots:{default:[Dg]},$$scope:{ctx:M}}}),Wo=new De({props:{anchor:"transformers.ConvBertForMultipleChoice.forward.example",$$slots:{default:[Lg]},$$scope:{ctx:M}}}),us=new at({}),fs=new de({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1187"}}),vs=new de({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1202",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Uo=new Ze({props:{$$slots:{default:[Ig]},$$scope:{ctx:M}}}),Yo=new De({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example",$$slots:{default:[Sg]},$$scope:{ctx:M}}}),Ho=new De({props:{anchor:"transformers.ConvBertForTokenClassification.forward.example-2",$$slots:{default:[Rg]},$$scope:{ctx:M}}}),bs=new at({}),ks=new de({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1269"}}),ys=new de({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_convbert.py#L1280",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vo=new Ze({props:{$$slots:{default:[Wg]},$$scope:{ctx:M}}}),Jo=new De({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example",$$slots:{default:[Kg]},$$scope:{ctx:M}}}),Go=new De({props:{anchor:"transformers.ConvBertForQuestionAnswering.forward.example-2",$$slots:{default:[Ug]},$$scope:{ctx:M}}}),$s=new at({}),Cs=new de({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L731"}}),Xo=new Ze({props:{$$slots:{default:[Yg]},$$scope:{ctx:M}}}),Ms=new de({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L737",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),en=new Ze({props:{$$slots:{default:[Hg]},$$scope:{ctx:M}}}),tn=new De({props:{anchor:"transformers.TFConvBertModel.call.example",$$slots:{default:[Qg]},$$scope:{ctx:M}}}),zs=new at({}),js=new de({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L833"}}),nn=new Ze({props:{$$slots:{default:[Vg]},$$scope:{ctx:M}}}),As=new de({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L854",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),sn=new Ze({props:{$$slots:{default:[Jg]},$$scope:{ctx:M}}}),rn=new De({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example",$$slots:{default:[Gg]},$$scope:{ctx:M}}}),an=new De({props:{anchor:"transformers.TFConvBertForMaskedLM.call.example-2",$$slots:{default:[Zg]},$$scope:{ctx:M}}}),Ns=new at({}),Ds=new de({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L955"}}),dn=new Ze({props:{$$slots:{default:[Xg]},$$scope:{ctx:M}}}),Rs=new de({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L962",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),cn=new Ze({props:{$$slots:{default:[e_]},$$scope:{ctx:M}}}),pn=new De({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example",$$slots:{default:[t_]},$$scope:{ctx:M}}}),hn=new De({props:{anchor:"transformers.TFConvBertForSequenceClassification.call.example-2",$$slots:{default:[o_]},$$scope:{ctx:M}}}),Ws=new at({}),Ks=new de({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1031"}}),un=new Ze({props:{$$slots:{default:[n_]},$$scope:{ctx:M}}}),Qs=new de({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1053",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),fn=new Ze({props:{$$slots:{default:[s_]},$$scope:{ctx:M}}}),gn=new De({props:{anchor:"transformers.TFConvBertForMultipleChoice.call.example",$$slots:{default:[r_]},$$scope:{ctx:M}}}),Vs=new at({}),Js=new de({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1155"}}),vn=new Ze({props:{$$slots:{default:[a_]},$$scope:{ctx:M}}}),er=new de({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1169",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Ze({props:{$$slots:{default:[i_]},$$scope:{ctx:M}}}),kn=new De({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example",$$slots:{default:[l_]},$$scope:{ctx:M}}}),Tn=new De({props:{anchor:"transformers.TFConvBertForTokenClassification.call.example-2",$$slots:{default:[d_]},$$scope:{ctx:M}}}),tr=new at({}),or=new de({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.22.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1237"}}),yn=new Ze({props:{$$slots:{default:[c_]},$$scope:{ctx:M}}}),ar=new de({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"end_positions",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/v4.22.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.22.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.22.0/src/transformers/models/convbert/modeling_tf_convbert.py#L1247",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertConfig"
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
  href="/docs/transformers/v4.22.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new Ze({props:{$$slots:{default:[p_]},$$scope:{ctx:M}}}),Cn=new De({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example",$$slots:{default:[h_]},$$scope:{ctx:M}}}),Fn=new De({props:{anchor:"transformers.TFConvBertForQuestionAnswering.call.example-2",$$slots:{default:[m_]},$$scope:{ctx:M}}}),{c(){d=r("meta"),g=h(),c=r("h1"),u=r("a"),k=r("span"),T(l.$$.fragment),p=h(),j=r("span"),ke=n("ConvBERT"),me=h(),D=r("h2"),ne=r("a"),Z=r("span"),T(E.$$.fragment),Te=h(),V=r("span"),we=n("Overview"),ue=h(),W=r("p"),ye=n("The ConvBERT model was proposed in "),re=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),$e=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),fe=h(),H=r("p"),Ce=n("The abstract from the paper is the following:"),ge=h(),Q=r("p"),ce=r("em"),Fe=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),X=h(),q=r("p"),P=n("ConvBERT training tips are similar to those of BERT."),_e=h(),L=r("p"),Ee=n("This model was contributed by "),ae=r("a"),G=n("abhishek"),Be=n(`. The original implementation can be found
here: `),ie=r("a"),O=n("https://github.com/yitu-opensource/ConvBert"),ve=h(),I=r("h2"),se=r("a"),pe=r("span"),T(Y.$$.fragment),Me=h(),he=r("span"),S=n("ConvBertConfig"),be=h(),N=r("div"),T(le.$$.fragment),ee=h(),x=r("p"),ze=n("This is the configuration class to store the configuration of a "),A=r("a"),je=n("ConvBertModel"),qe=n(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),f=r("a"),B=n("YituTech/conv-bert-base"),Ue=n(" architecture."),te=h(),xe=r("p"),Ye=n("Configuration objects inherit from "),z=r("a"),He=n("PretrainedConfig"),Qe=n(` and can be used to control the model outputs. Read the
documentation from `),Ne=r("a"),Ve=n("PretrainedConfig"),Je=n(" for more information."),R=h(),T(K.$$.fragment),We=h(),Pe=r("h2"),U=r("a"),Se=r("span"),T(Ae.$$.fragment),Oe=h(),Re=r("span"),oe=n("ConvBertTokenizer"),Ke=h(),Xe=r("div"),T(Dn.$$.fragment),Hl=h(),qt=r("p"),Ql=n("Construct a ConvBERT tokenizer. "),mr=r("a"),Vl=n("ConvBertTokenizer"),Jl=n(" is identical to "),ur=r("a"),Gl=n("BertTokenizer"),Zl=n(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),fr=r("a"),Xl=n("BertTokenizer"),ed=n(` for usage examples and
documentation concerning parameters.`),td=h(),Nt=r("div"),T(Ln.$$.fragment),od=h(),ra=r("p"),nd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),sd=h(),In=r("ul"),gr=r("li"),rd=n("single sequence: "),aa=r("code"),ad=n("[CLS] X [SEP]"),id=h(),_r=r("li"),ld=n("pair of sequences: "),ia=r("code"),dd=n("[CLS] A [SEP] B [SEP]"),cd=h(),$o=r("div"),T(Sn.$$.fragment),pd=h(),Rn=r("p"),hd=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),la=r("code"),md=n("prepare_for_model"),ud=n(" method."),fd=h(),Tt=r("div"),T(Wn.$$.fragment),gd=h(),da=r("p"),_d=n("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),vd=h(),T(Co.$$.fragment),bd=h(),Ut=r("p"),kd=n("If "),ca=r("code"),Td=n("token_ids_1"),wd=n(" is "),pa=r("code"),yd=n("None"),$d=n(", this method only returns the first portion of the mask (0s)."),Cd=h(),vr=r("div"),T(Kn.$$.fragment),Li=h(),Yt=r("h2"),Fo=r("a"),ha=r("span"),T(Un.$$.fragment),Fd=h(),ma=r("span"),Ed=n("ConvBertTokenizerFast"),Ii=h(),gt=r("div"),T(Yn.$$.fragment),Bd=h(),Hn=r("p"),Md=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),ua=r("em"),zd=n("tokenizers"),jd=n(" library)."),qd=h(),Eo=r("p"),br=r("a"),xd=n("ConvBertTokenizerFast"),Pd=n(" is identical to "),kr=r("a"),Od=n("BertTokenizerFast"),Ad=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Nd=h(),Qn=r("p"),Dd=n("Refer to superclass "),Tr=r("a"),Ld=n("BertTokenizerFast"),Id=n(" for usage examples and documentation concerning parameters."),Si=h(),Ht=r("h2"),Bo=r("a"),fa=r("span"),T(Vn.$$.fragment),Sd=h(),ga=r("span"),Rd=n("ConvBertModel"),Ri=h(),xt=r("div"),T(Jn.$$.fragment),Wd=h(),Gn=r("p"),Kd=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zn=r("a"),Ud=n("torch.nn.Module"),Yd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Hd=h(),wt=r("div"),T(Xn.$$.fragment),Qd=h(),Qt=r("p"),Vd=n("The "),wr=r("a"),Jd=n("ConvBertModel"),Gd=n(" forward method, overrides the "),_a=r("code"),Zd=n("__call__"),Xd=n(" special method."),ec=h(),T(Mo.$$.fragment),tc=h(),T(zo.$$.fragment),Wi=h(),Vt=r("h2"),jo=r("a"),va=r("span"),T(es.$$.fragment),oc=h(),ba=r("span"),nc=n("ConvBertForMaskedLM"),Ki=h(),Pt=r("div"),T(ts.$$.fragment),sc=h(),Jt=r("p"),rc=n("ConvBERT Model with a "),ka=r("code"),ac=n("language modeling"),ic=n(` head on top.
This model is a PyTorch `),os=r("a"),lc=n("torch.nn.Module"),dc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),cc=h(),lt=r("div"),T(ns.$$.fragment),pc=h(),Gt=r("p"),hc=n("The "),yr=r("a"),mc=n("ConvBertForMaskedLM"),uc=n(" forward method, overrides the "),Ta=r("code"),fc=n("__call__"),gc=n(" special method."),_c=h(),T(qo.$$.fragment),vc=h(),T(xo.$$.fragment),bc=h(),T(Po.$$.fragment),Ui=h(),Zt=r("h2"),Oo=r("a"),wa=r("span"),T(ss.$$.fragment),kc=h(),ya=r("span"),Tc=n("ConvBertForSequenceClassification"),Yi=h(),_t=r("div"),T(rs.$$.fragment),wc=h(),$a=r("p"),yc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$c=h(),as=r("p"),Cc=n("This model is a PyTorch "),is=r("a"),Fc=n("torch.nn.Module"),Ec=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bc=h(),Ge=r("div"),T(ls.$$.fragment),Mc=h(),Xt=r("p"),zc=n("The "),$r=r("a"),jc=n("ConvBertForSequenceClassification"),qc=n(" forward method, overrides the "),Ca=r("code"),xc=n("__call__"),Pc=n(" special method."),Oc=h(),T(Ao.$$.fragment),Ac=h(),T(No.$$.fragment),Nc=h(),T(Do.$$.fragment),Dc=h(),T(Lo.$$.fragment),Lc=h(),T(Io.$$.fragment),Hi=h(),eo=r("h2"),So=r("a"),Fa=r("span"),T(ds.$$.fragment),Ic=h(),Ea=r("span"),Sc=n("ConvBertForMultipleChoice"),Qi=h(),vt=r("div"),T(cs.$$.fragment),Rc=h(),Ba=r("p"),Wc=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Kc=h(),ps=r("p"),Uc=n("This model is a PyTorch "),hs=r("a"),Yc=n("torch.nn.Module"),Hc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Qc=h(),yt=r("div"),T(ms.$$.fragment),Vc=h(),to=r("p"),Jc=n("The "),Cr=r("a"),Gc=n("ConvBertForMultipleChoice"),Zc=n(" forward method, overrides the "),Ma=r("code"),Xc=n("__call__"),ep=n(" special method."),tp=h(),T(Ro.$$.fragment),op=h(),T(Wo.$$.fragment),Vi=h(),oo=r("h2"),Ko=r("a"),za=r("span"),T(us.$$.fragment),np=h(),ja=r("span"),sp=n("ConvBertForTokenClassification"),Ji=h(),bt=r("div"),T(fs.$$.fragment),rp=h(),qa=r("p"),ap=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ip=h(),gs=r("p"),lp=n("This model is a PyTorch "),_s=r("a"),dp=n("torch.nn.Module"),cp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pp=h(),dt=r("div"),T(vs.$$.fragment),hp=h(),no=r("p"),mp=n("The "),Fr=r("a"),up=n("ConvBertForTokenClassification"),fp=n(" forward method, overrides the "),xa=r("code"),gp=n("__call__"),_p=n(" special method."),vp=h(),T(Uo.$$.fragment),bp=h(),T(Yo.$$.fragment),kp=h(),T(Ho.$$.fragment),Gi=h(),so=r("h2"),Qo=r("a"),Pa=r("span"),T(bs.$$.fragment),Tp=h(),Oa=r("span"),wp=n("ConvBertForQuestionAnswering"),Zi=h(),kt=r("div"),T(ks.$$.fragment),yp=h(),ro=r("p"),$p=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Aa=r("code"),Cp=n("span start logits"),Fp=n(" and "),Na=r("code"),Ep=n("span end logits"),Bp=n(")."),Mp=h(),Ts=r("p"),zp=n("This model is a PyTorch "),ws=r("a"),jp=n("torch.nn.Module"),qp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),xp=h(),ct=r("div"),T(ys.$$.fragment),Pp=h(),ao=r("p"),Op=n("The "),Er=r("a"),Ap=n("ConvBertForQuestionAnswering"),Np=n(" forward method, overrides the "),Da=r("code"),Dp=n("__call__"),Lp=n(" special method."),Ip=h(),T(Vo.$$.fragment),Sp=h(),T(Jo.$$.fragment),Rp=h(),T(Go.$$.fragment),Xi=h(),io=r("h2"),Zo=r("a"),La=r("span"),T($s.$$.fragment),Wp=h(),Ia=r("span"),Kp=n("TFConvBertModel"),el=h(),et=r("div"),T(Cs.$$.fragment),Up=h(),Sa=r("p"),Yp=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Hp=h(),Fs=r("p"),Qp=n("This model inherits from "),Br=r("a"),Vp=n("TFPreTrainedModel"),Jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gp=h(),Es=r("p"),Zp=n("This model is also a "),Bs=r("a"),Xp=n("tf.keras.Model"),eh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th=h(),T(Xo.$$.fragment),oh=h(),$t=r("div"),T(Ms.$$.fragment),nh=h(),lo=r("p"),sh=n("The "),Mr=r("a"),rh=n("TFConvBertModel"),ah=n(" forward method, overrides the "),Ra=r("code"),ih=n("__call__"),lh=n(" special method."),dh=h(),T(en.$$.fragment),ch=h(),T(tn.$$.fragment),tl=h(),co=r("h2"),on=r("a"),Wa=r("span"),T(zs.$$.fragment),ph=h(),Ka=r("span"),hh=n("TFConvBertForMaskedLM"),ol=h(),tt=r("div"),T(js.$$.fragment),mh=h(),qs=r("p"),uh=n("ConvBERT Model with a "),Ua=r("code"),fh=n("language modeling"),gh=n(" head on top."),_h=h(),xs=r("p"),vh=n("This model inherits from "),zr=r("a"),bh=n("TFPreTrainedModel"),kh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th=h(),Ps=r("p"),wh=n("This model is also a "),Os=r("a"),yh=n("tf.keras.Model"),$h=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ch=h(),T(nn.$$.fragment),Fh=h(),pt=r("div"),T(As.$$.fragment),Eh=h(),po=r("p"),Bh=n("The "),jr=r("a"),Mh=n("TFConvBertForMaskedLM"),zh=n(" forward method, overrides the "),Ya=r("code"),jh=n("__call__"),qh=n(" special method."),xh=h(),T(sn.$$.fragment),Ph=h(),T(rn.$$.fragment),Oh=h(),T(an.$$.fragment),nl=h(),ho=r("h2"),ln=r("a"),Ha=r("span"),T(Ns.$$.fragment),Ah=h(),Qa=r("span"),Nh=n("TFConvBertForSequenceClassification"),sl=h(),ot=r("div"),T(Ds.$$.fragment),Dh=h(),Va=r("p"),Lh=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Ih=h(),Ls=r("p"),Sh=n("This model inherits from "),qr=r("a"),Rh=n("TFPreTrainedModel"),Wh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh=h(),Is=r("p"),Uh=n("This model is also a "),Ss=r("a"),Yh=n("tf.keras.Model"),Hh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh=h(),T(dn.$$.fragment),Vh=h(),ht=r("div"),T(Rs.$$.fragment),Jh=h(),mo=r("p"),Gh=n("The "),xr=r("a"),Zh=n("TFConvBertForSequenceClassification"),Xh=n(" forward method, overrides the "),Ja=r("code"),em=n("__call__"),tm=n(" special method."),om=h(),T(cn.$$.fragment),nm=h(),T(pn.$$.fragment),sm=h(),T(hn.$$.fragment),rl=h(),uo=r("h2"),mn=r("a"),Ga=r("span"),T(Ws.$$.fragment),rm=h(),Za=r("span"),am=n("TFConvBertForMultipleChoice"),al=h(),nt=r("div"),T(Ks.$$.fragment),im=h(),Xa=r("p"),lm=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),dm=h(),Us=r("p"),cm=n("This model inherits from "),Pr=r("a"),pm=n("TFPreTrainedModel"),hm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm=h(),Ys=r("p"),um=n("This model is also a "),Hs=r("a"),fm=n("tf.keras.Model"),gm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_m=h(),T(un.$$.fragment),vm=h(),Ct=r("div"),T(Qs.$$.fragment),bm=h(),fo=r("p"),km=n("The "),Or=r("a"),Tm=n("TFConvBertForMultipleChoice"),wm=n(" forward method, overrides the "),ei=r("code"),ym=n("__call__"),$m=n(" special method."),Cm=h(),T(fn.$$.fragment),Fm=h(),T(gn.$$.fragment),il=h(),go=r("h2"),_n=r("a"),ti=r("span"),T(Vs.$$.fragment),Em=h(),oi=r("span"),Bm=n("TFConvBertForTokenClassification"),ll=h(),st=r("div"),T(Js.$$.fragment),Mm=h(),ni=r("p"),zm=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),jm=h(),Gs=r("p"),qm=n("This model inherits from "),Ar=r("a"),xm=n("TFPreTrainedModel"),Pm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om=h(),Zs=r("p"),Am=n("This model is also a "),Xs=r("a"),Nm=n("tf.keras.Model"),Dm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lm=h(),T(vn.$$.fragment),Im=h(),mt=r("div"),T(er.$$.fragment),Sm=h(),_o=r("p"),Rm=n("The "),Nr=r("a"),Wm=n("TFConvBertForTokenClassification"),Km=n(" forward method, overrides the "),si=r("code"),Um=n("__call__"),Ym=n(" special method."),Hm=h(),T(bn.$$.fragment),Qm=h(),T(kn.$$.fragment),Vm=h(),T(Tn.$$.fragment),dl=h(),vo=r("h2"),wn=r("a"),ri=r("span"),T(tr.$$.fragment),Jm=h(),ai=r("span"),Gm=n("TFConvBertForQuestionAnswering"),cl=h(),rt=r("div"),T(or.$$.fragment),Zm=h(),bo=r("p"),Xm=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ii=r("code"),eu=n("span start logits"),tu=n(" and "),li=r("code"),ou=n("span end logits"),nu=n(")."),su=h(),nr=r("p"),ru=n("This model inherits from "),Dr=r("a"),au=n("TFPreTrainedModel"),iu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu=h(),sr=r("p"),du=n("This model is also a "),rr=r("a"),cu=n("tf.keras.Model"),pu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hu=h(),T(yn.$$.fragment),mu=h(),ut=r("div"),T(ar.$$.fragment),uu=h(),ko=r("p"),fu=n("The "),Lr=r("a"),gu=n("TFConvBertForQuestionAnswering"),_u=n(" forward method, overrides the "),di=r("code"),vu=n("__call__"),bu=n(" special method."),ku=h(),T($n.$$.fragment),Tu=h(),T(Cn.$$.fragment),wu=h(),T(Fn.$$.fragment),this.h()},l(o){const b=$g('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=m(o),c=a(o,"H1",{class:!0});var ir=i(c);u=a(ir,"A",{id:!0,class:!0,href:!0});var ci=i(u);k=a(ci,"SPAN",{});var pi=i(k);w(l.$$.fragment,pi),pi.forEach(t),ci.forEach(t),p=m(ir),j=a(ir,"SPAN",{});var hi=i(j);ke=s(hi,"ConvBERT"),hi.forEach(t),ir.forEach(t),me=m(o),D=a(o,"H2",{class:!0});var lr=i(D);ne=a(lr,"A",{id:!0,class:!0,href:!0});var mi=i(ne);Z=a(mi,"SPAN",{});var ui=i(Z);w(E.$$.fragment,ui),ui.forEach(t),mi.forEach(t),Te=m(lr),V=a(lr,"SPAN",{});var fi=i(V);we=s(fi,"Overview"),fi.forEach(t),lr.forEach(t),ue=m(o),W=a(o,"P",{});var dr=i(W);ye=s(dr,"The ConvBERT model was proposed in "),re=a(dr,"A",{href:!0,rel:!0});var gi=i(re);J=s(gi,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),gi.forEach(t),$e=s(dr,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),dr.forEach(t),fe=m(o),H=a(o,"P",{});var _i=i(H);Ce=s(_i,"The abstract from the paper is the following:"),_i.forEach(t),ge=m(o),Q=a(o,"P",{});var vi=i(Q);ce=a(vi,"EM",{});var bi=i(ce);Fe=s(bi,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),bi.forEach(t),vi.forEach(t),X=m(o),q=a(o,"P",{});var ki=i(q);P=s(ki,"ConvBERT training tips are similar to those of BERT."),ki.forEach(t),_e=m(o),L=a(o,"P",{});var En=i(L);Ee=s(En,"This model was contributed by "),ae=a(En,"A",{href:!0,rel:!0});var Ti=i(ae);G=s(Ti,"abhishek"),Ti.forEach(t),Be=s(En,`. The original implementation can be found
here: `),ie=a(En,"A",{href:!0,rel:!0});var wi=i(ie);O=s(wi,"https://github.com/yitu-opensource/ConvBert"),wi.forEach(t),En.forEach(t),ve=m(o),I=a(o,"H2",{class:!0});var cr=i(I);se=a(cr,"A",{id:!0,class:!0,href:!0});var yi=i(se);pe=a(yi,"SPAN",{});var $i=i(pe);w(Y.$$.fragment,$i),$i.forEach(t),yi.forEach(t),Me=m(cr),he=a(cr,"SPAN",{});var Ci=i(he);S=s(Ci,"ConvBertConfig"),Ci.forEach(t),cr.forEach(t),be=m(o),N=a(o,"DIV",{class:!0});var Ot=i(N);w(le.$$.fragment,Ot),ee=m(Ot),x=a(Ot,"P",{});var To=i(x);ze=s(To,"This is the configuration class to store the configuration of a "),A=a(To,"A",{href:!0});var Fi=i(A);je=s(Fi,"ConvBertModel"),Fi.forEach(t),qe=s(To,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),f=a(To,"A",{href:!0,rel:!0});var Ei=i(f);B=s(Ei,"YituTech/conv-bert-base"),Ei.forEach(t),Ue=s(To," architecture."),To.forEach(t),te=m(Ot),xe=a(Ot,"P",{});var wo=i(xe);Ye=s(wo,"Configuration objects inherit from "),z=a(wo,"A",{href:!0});var Bi=i(z);He=s(Bi,"PretrainedConfig"),Bi.forEach(t),Qe=s(wo,` and can be used to control the model outputs. Read the
documentation from `),Ne=a(wo,"A",{href:!0});var Mi=i(Ne);Ve=s(Mi,"PretrainedConfig"),Mi.forEach(t),Je=s(wo," for more information."),wo.forEach(t),R=m(Ot),w(K.$$.fragment,Ot),Ot.forEach(t),We=m(o),Pe=a(o,"H2",{class:!0});var pr=i(Pe);U=a(pr,"A",{id:!0,class:!0,href:!0});var zi=i(U);Se=a(zi,"SPAN",{});var ji=i(Se);w(Ae.$$.fragment,ji),ji.forEach(t),zi.forEach(t),Oe=m(pr),Re=a(pr,"SPAN",{});var qi=i(Re);oe=s(qi,"ConvBertTokenizer"),qi.forEach(t),pr.forEach(t),Ke=m(o),Xe=a(o,"DIV",{class:!0});var it=i(Xe);w(Dn.$$.fragment,it),Hl=m(it),qt=a(it,"P",{});var At=i(qt);Ql=s(At,"Construct a ConvBERT tokenizer. "),mr=a(At,"A",{href:!0});var xi=i(mr);Vl=s(xi,"ConvBertTokenizer"),xi.forEach(t),Jl=s(At," is identical to "),ur=a(At,"A",{href:!0});var Pi=i(ur);Gl=s(Pi,"BertTokenizer"),Pi.forEach(t),Zl=s(At,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),fr=a(At,"A",{href:!0});var Oi=i(fr);Xl=s(Oi,"BertTokenizer"),Oi.forEach(t),ed=s(At,` for usage examples and
documentation concerning parameters.`),At.forEach(t),td=m(it),Nt=a(it,"DIV",{class:!0});var yo=i(Nt);w(Ln.$$.fragment,yo),od=m(yo),ra=a(yo,"P",{});var Ai=i(ra);nd=s(Ai,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ai.forEach(t),sd=m(yo),In=a(yo,"UL",{});var hr=i(In);gr=a(hr,"LI",{});var Ir=i(gr);rd=s(Ir,"single sequence: "),aa=a(Ir,"CODE",{});var Ni=i(aa);ad=s(Ni,"[CLS] X [SEP]"),Ni.forEach(t),Ir.forEach(t),id=m(hr),_r=a(hr,"LI",{});var yu=i(_r);ld=s(yu,"pair of sequences: "),ia=a(yu,"CODE",{});var $u=i(ia);dd=s($u,"[CLS] A [SEP] B [SEP]"),$u.forEach(t),yu.forEach(t),hr.forEach(t),yo.forEach(t),cd=m(it),$o=a(it,"DIV",{class:!0});var hl=i($o);w(Sn.$$.fragment,hl),pd=m(hl),Rn=a(hl,"P",{});var ml=i(Rn);hd=s(ml,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),la=a(ml,"CODE",{});var Cu=i(la);md=s(Cu,"prepare_for_model"),Cu.forEach(t),ud=s(ml," method."),ml.forEach(t),hl.forEach(t),fd=m(it),Tt=a(it,"DIV",{class:!0});var Bn=i(Tt);w(Wn.$$.fragment,Bn),gd=m(Bn),da=a(Bn,"P",{});var Fu=i(da);_d=s(Fu,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Fu.forEach(t),vd=m(Bn),w(Co.$$.fragment,Bn),bd=m(Bn),Ut=a(Bn,"P",{});var Sr=i(Ut);kd=s(Sr,"If "),ca=a(Sr,"CODE",{});var Eu=i(ca);Td=s(Eu,"token_ids_1"),Eu.forEach(t),wd=s(Sr," is "),pa=a(Sr,"CODE",{});var Bu=i(pa);yd=s(Bu,"None"),Bu.forEach(t),$d=s(Sr,", this method only returns the first portion of the mask (0s)."),Sr.forEach(t),Bn.forEach(t),Cd=m(it),vr=a(it,"DIV",{class:!0});var Mu=i(vr);w(Kn.$$.fragment,Mu),Mu.forEach(t),it.forEach(t),Li=m(o),Yt=a(o,"H2",{class:!0});var ul=i(Yt);Fo=a(ul,"A",{id:!0,class:!0,href:!0});var zu=i(Fo);ha=a(zu,"SPAN",{});var ju=i(ha);w(Un.$$.fragment,ju),ju.forEach(t),zu.forEach(t),Fd=m(ul),ma=a(ul,"SPAN",{});var qu=i(ma);Ed=s(qu,"ConvBertTokenizerFast"),qu.forEach(t),ul.forEach(t),Ii=m(o),gt=a(o,"DIV",{class:!0});var Mn=i(gt);w(Yn.$$.fragment,Mn),Bd=m(Mn),Hn=a(Mn,"P",{});var fl=i(Hn);Md=s(fl,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),ua=a(fl,"EM",{});var xu=i(ua);zd=s(xu,"tokenizers"),xu.forEach(t),jd=s(fl," library)."),fl.forEach(t),qd=m(Mn),Eo=a(Mn,"P",{});var Di=i(Eo);br=a(Di,"A",{href:!0});var Pu=i(br);xd=s(Pu,"ConvBertTokenizerFast"),Pu.forEach(t),Pd=s(Di," is identical to "),kr=a(Di,"A",{href:!0});var Ou=i(kr);Od=s(Ou,"BertTokenizerFast"),Ou.forEach(t),Ad=s(Di,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Di.forEach(t),Nd=m(Mn),Qn=a(Mn,"P",{});var gl=i(Qn);Dd=s(gl,"Refer to superclass "),Tr=a(gl,"A",{href:!0});var Au=i(Tr);Ld=s(Au,"BertTokenizerFast"),Au.forEach(t),Id=s(gl," for usage examples and documentation concerning parameters."),gl.forEach(t),Mn.forEach(t),Si=m(o),Ht=a(o,"H2",{class:!0});var _l=i(Ht);Bo=a(_l,"A",{id:!0,class:!0,href:!0});var Nu=i(Bo);fa=a(Nu,"SPAN",{});var Du=i(fa);w(Vn.$$.fragment,Du),Du.forEach(t),Nu.forEach(t),Sd=m(_l),ga=a(_l,"SPAN",{});var Lu=i(ga);Rd=s(Lu,"ConvBertModel"),Lu.forEach(t),_l.forEach(t),Ri=m(o),xt=a(o,"DIV",{class:!0});var Rr=i(xt);w(Jn.$$.fragment,Rr),Wd=m(Rr),Gn=a(Rr,"P",{});var vl=i(Gn);Kd=s(vl,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Zn=a(vl,"A",{href:!0,rel:!0});var Iu=i(Zn);Ud=s(Iu,"torch.nn.Module"),Iu.forEach(t),Yd=s(vl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Hd=m(Rr),wt=a(Rr,"DIV",{class:!0});var zn=i(wt);w(Xn.$$.fragment,zn),Qd=m(zn),Qt=a(zn,"P",{});var Wr=i(Qt);Vd=s(Wr,"The "),wr=a(Wr,"A",{href:!0});var Su=i(wr);Jd=s(Su,"ConvBertModel"),Su.forEach(t),Gd=s(Wr," forward method, overrides the "),_a=a(Wr,"CODE",{});var Ru=i(_a);Zd=s(Ru,"__call__"),Ru.forEach(t),Xd=s(Wr," special method."),Wr.forEach(t),ec=m(zn),w(Mo.$$.fragment,zn),tc=m(zn),w(zo.$$.fragment,zn),zn.forEach(t),Rr.forEach(t),Wi=m(o),Vt=a(o,"H2",{class:!0});var bl=i(Vt);jo=a(bl,"A",{id:!0,class:!0,href:!0});var Wu=i(jo);va=a(Wu,"SPAN",{});var Ku=i(va);w(es.$$.fragment,Ku),Ku.forEach(t),Wu.forEach(t),oc=m(bl),ba=a(bl,"SPAN",{});var Uu=i(ba);nc=s(Uu,"ConvBertForMaskedLM"),Uu.forEach(t),bl.forEach(t),Ki=m(o),Pt=a(o,"DIV",{class:!0});var Kr=i(Pt);w(ts.$$.fragment,Kr),sc=m(Kr),Jt=a(Kr,"P",{});var Ur=i(Jt);rc=s(Ur,"ConvBERT Model with a "),ka=a(Ur,"CODE",{});var Yu=i(ka);ac=s(Yu,"language modeling"),Yu.forEach(t),ic=s(Ur,` head on top.
This model is a PyTorch `),os=a(Ur,"A",{href:!0,rel:!0});var Hu=i(os);lc=s(Hu,"torch.nn.Module"),Hu.forEach(t),dc=s(Ur,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ur.forEach(t),cc=m(Kr),lt=a(Kr,"DIV",{class:!0});var Dt=i(lt);w(ns.$$.fragment,Dt),pc=m(Dt),Gt=a(Dt,"P",{});var Yr=i(Gt);hc=s(Yr,"The "),yr=a(Yr,"A",{href:!0});var Qu=i(yr);mc=s(Qu,"ConvBertForMaskedLM"),Qu.forEach(t),uc=s(Yr," forward method, overrides the "),Ta=a(Yr,"CODE",{});var Vu=i(Ta);fc=s(Vu,"__call__"),Vu.forEach(t),gc=s(Yr," special method."),Yr.forEach(t),_c=m(Dt),w(qo.$$.fragment,Dt),vc=m(Dt),w(xo.$$.fragment,Dt),bc=m(Dt),w(Po.$$.fragment,Dt),Dt.forEach(t),Kr.forEach(t),Ui=m(o),Zt=a(o,"H2",{class:!0});var kl=i(Zt);Oo=a(kl,"A",{id:!0,class:!0,href:!0});var Ju=i(Oo);wa=a(Ju,"SPAN",{});var Gu=i(wa);w(ss.$$.fragment,Gu),Gu.forEach(t),Ju.forEach(t),kc=m(kl),ya=a(kl,"SPAN",{});var Zu=i(ya);Tc=s(Zu,"ConvBertForSequenceClassification"),Zu.forEach(t),kl.forEach(t),Yi=m(o),_t=a(o,"DIV",{class:!0});var jn=i(_t);w(rs.$$.fragment,jn),wc=m(jn),$a=a(jn,"P",{});var Xu=i($a);yc=s(Xu,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Xu.forEach(t),$c=m(jn),as=a(jn,"P",{});var Tl=i(as);Cc=s(Tl,"This model is a PyTorch "),is=a(Tl,"A",{href:!0,rel:!0});var ef=i(is);Fc=s(ef,"torch.nn.Module"),ef.forEach(t),Ec=s(Tl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),Bc=m(jn),Ge=a(jn,"DIV",{class:!0});var ft=i(Ge);w(ls.$$.fragment,ft),Mc=m(ft),Xt=a(ft,"P",{});var Hr=i(Xt);zc=s(Hr,"The "),$r=a(Hr,"A",{href:!0});var tf=i($r);jc=s(tf,"ConvBertForSequenceClassification"),tf.forEach(t),qc=s(Hr," forward method, overrides the "),Ca=a(Hr,"CODE",{});var of=i(Ca);xc=s(of,"__call__"),of.forEach(t),Pc=s(Hr," special method."),Hr.forEach(t),Oc=m(ft),w(Ao.$$.fragment,ft),Ac=m(ft),w(No.$$.fragment,ft),Nc=m(ft),w(Do.$$.fragment,ft),Dc=m(ft),w(Lo.$$.fragment,ft),Lc=m(ft),w(Io.$$.fragment,ft),ft.forEach(t),jn.forEach(t),Hi=m(o),eo=a(o,"H2",{class:!0});var wl=i(eo);So=a(wl,"A",{id:!0,class:!0,href:!0});var nf=i(So);Fa=a(nf,"SPAN",{});var sf=i(Fa);w(ds.$$.fragment,sf),sf.forEach(t),nf.forEach(t),Ic=m(wl),Ea=a(wl,"SPAN",{});var rf=i(Ea);Sc=s(rf,"ConvBertForMultipleChoice"),rf.forEach(t),wl.forEach(t),Qi=m(o),vt=a(o,"DIV",{class:!0});var qn=i(vt);w(cs.$$.fragment,qn),Rc=m(qn),Ba=a(qn,"P",{});var af=i(Ba);Wc=s(af,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),af.forEach(t),Kc=m(qn),ps=a(qn,"P",{});var yl=i(ps);Uc=s(yl,"This model is a PyTorch "),hs=a(yl,"A",{href:!0,rel:!0});var lf=i(hs);Yc=s(lf,"torch.nn.Module"),lf.forEach(t),Hc=s(yl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yl.forEach(t),Qc=m(qn),yt=a(qn,"DIV",{class:!0});var xn=i(yt);w(ms.$$.fragment,xn),Vc=m(xn),to=a(xn,"P",{});var Qr=i(to);Jc=s(Qr,"The "),Cr=a(Qr,"A",{href:!0});var df=i(Cr);Gc=s(df,"ConvBertForMultipleChoice"),df.forEach(t),Zc=s(Qr," forward method, overrides the "),Ma=a(Qr,"CODE",{});var cf=i(Ma);Xc=s(cf,"__call__"),cf.forEach(t),ep=s(Qr," special method."),Qr.forEach(t),tp=m(xn),w(Ro.$$.fragment,xn),op=m(xn),w(Wo.$$.fragment,xn),xn.forEach(t),qn.forEach(t),Vi=m(o),oo=a(o,"H2",{class:!0});var $l=i(oo);Ko=a($l,"A",{id:!0,class:!0,href:!0});var pf=i(Ko);za=a(pf,"SPAN",{});var hf=i(za);w(us.$$.fragment,hf),hf.forEach(t),pf.forEach(t),np=m($l),ja=a($l,"SPAN",{});var mf=i(ja);sp=s(mf,"ConvBertForTokenClassification"),mf.forEach(t),$l.forEach(t),Ji=m(o),bt=a(o,"DIV",{class:!0});var Pn=i(bt);w(fs.$$.fragment,Pn),rp=m(Pn),qa=a(Pn,"P",{});var uf=i(qa);ap=s(uf,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),uf.forEach(t),ip=m(Pn),gs=a(Pn,"P",{});var Cl=i(gs);lp=s(Cl,"This model is a PyTorch "),_s=a(Cl,"A",{href:!0,rel:!0});var ff=i(_s);dp=s(ff,"torch.nn.Module"),ff.forEach(t),cp=s(Cl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),pp=m(Pn),dt=a(Pn,"DIV",{class:!0});var Lt=i(dt);w(vs.$$.fragment,Lt),hp=m(Lt),no=a(Lt,"P",{});var Vr=i(no);mp=s(Vr,"The "),Fr=a(Vr,"A",{href:!0});var gf=i(Fr);up=s(gf,"ConvBertForTokenClassification"),gf.forEach(t),fp=s(Vr," forward method, overrides the "),xa=a(Vr,"CODE",{});var _f=i(xa);gp=s(_f,"__call__"),_f.forEach(t),_p=s(Vr," special method."),Vr.forEach(t),vp=m(Lt),w(Uo.$$.fragment,Lt),bp=m(Lt),w(Yo.$$.fragment,Lt),kp=m(Lt),w(Ho.$$.fragment,Lt),Lt.forEach(t),Pn.forEach(t),Gi=m(o),so=a(o,"H2",{class:!0});var Fl=i(so);Qo=a(Fl,"A",{id:!0,class:!0,href:!0});var vf=i(Qo);Pa=a(vf,"SPAN",{});var bf=i(Pa);w(bs.$$.fragment,bf),bf.forEach(t),vf.forEach(t),Tp=m(Fl),Oa=a(Fl,"SPAN",{});var kf=i(Oa);wp=s(kf,"ConvBertForQuestionAnswering"),kf.forEach(t),Fl.forEach(t),Zi=m(o),kt=a(o,"DIV",{class:!0});var On=i(kt);w(ks.$$.fragment,On),yp=m(On),ro=a(On,"P",{});var Jr=i(ro);$p=s(Jr,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Aa=a(Jr,"CODE",{});var Tf=i(Aa);Cp=s(Tf,"span start logits"),Tf.forEach(t),Fp=s(Jr," and "),Na=a(Jr,"CODE",{});var wf=i(Na);Ep=s(wf,"span end logits"),wf.forEach(t),Bp=s(Jr,")."),Jr.forEach(t),Mp=m(On),Ts=a(On,"P",{});var El=i(Ts);zp=s(El,"This model is a PyTorch "),ws=a(El,"A",{href:!0,rel:!0});var yf=i(ws);jp=s(yf,"torch.nn.Module"),yf.forEach(t),qp=s(El,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),El.forEach(t),xp=m(On),ct=a(On,"DIV",{class:!0});var It=i(ct);w(ys.$$.fragment,It),Pp=m(It),ao=a(It,"P",{});var Gr=i(ao);Op=s(Gr,"The "),Er=a(Gr,"A",{href:!0});var $f=i(Er);Ap=s($f,"ConvBertForQuestionAnswering"),$f.forEach(t),Np=s(Gr," forward method, overrides the "),Da=a(Gr,"CODE",{});var Cf=i(Da);Dp=s(Cf,"__call__"),Cf.forEach(t),Lp=s(Gr," special method."),Gr.forEach(t),Ip=m(It),w(Vo.$$.fragment,It),Sp=m(It),w(Jo.$$.fragment,It),Rp=m(It),w(Go.$$.fragment,It),It.forEach(t),On.forEach(t),Xi=m(o),io=a(o,"H2",{class:!0});var Bl=i(io);Zo=a(Bl,"A",{id:!0,class:!0,href:!0});var Ff=i(Zo);La=a(Ff,"SPAN",{});var Ef=i(La);w($s.$$.fragment,Ef),Ef.forEach(t),Ff.forEach(t),Wp=m(Bl),Ia=a(Bl,"SPAN",{});var Bf=i(Ia);Kp=s(Bf,"TFConvBertModel"),Bf.forEach(t),Bl.forEach(t),el=m(o),et=a(o,"DIV",{class:!0});var Ft=i(et);w(Cs.$$.fragment,Ft),Up=m(Ft),Sa=a(Ft,"P",{});var Mf=i(Sa);Yp=s(Mf,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Mf.forEach(t),Hp=m(Ft),Fs=a(Ft,"P",{});var Ml=i(Fs);Qp=s(Ml,"This model inherits from "),Br=a(Ml,"A",{href:!0});var zf=i(Br);Vp=s(zf,"TFPreTrainedModel"),zf.forEach(t),Jp=s(Ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml.forEach(t),Gp=m(Ft),Es=a(Ft,"P",{});var zl=i(Es);Zp=s(zl,"This model is also a "),Bs=a(zl,"A",{href:!0,rel:!0});var jf=i(Bs);Xp=s(jf,"tf.keras.Model"),jf.forEach(t),eh=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),th=m(Ft),w(Xo.$$.fragment,Ft),oh=m(Ft),$t=a(Ft,"DIV",{class:!0});var An=i($t);w(Ms.$$.fragment,An),nh=m(An),lo=a(An,"P",{});var Zr=i(lo);sh=s(Zr,"The "),Mr=a(Zr,"A",{href:!0});var qf=i(Mr);rh=s(qf,"TFConvBertModel"),qf.forEach(t),ah=s(Zr," forward method, overrides the "),Ra=a(Zr,"CODE",{});var xf=i(Ra);ih=s(xf,"__call__"),xf.forEach(t),lh=s(Zr," special method."),Zr.forEach(t),dh=m(An),w(en.$$.fragment,An),ch=m(An),w(tn.$$.fragment,An),An.forEach(t),Ft.forEach(t),tl=m(o),co=a(o,"H2",{class:!0});var jl=i(co);on=a(jl,"A",{id:!0,class:!0,href:!0});var Pf=i(on);Wa=a(Pf,"SPAN",{});var Of=i(Wa);w(zs.$$.fragment,Of),Of.forEach(t),Pf.forEach(t),ph=m(jl),Ka=a(jl,"SPAN",{});var Af=i(Ka);hh=s(Af,"TFConvBertForMaskedLM"),Af.forEach(t),jl.forEach(t),ol=m(o),tt=a(o,"DIV",{class:!0});var Et=i(tt);w(js.$$.fragment,Et),mh=m(Et),qs=a(Et,"P",{});var ql=i(qs);uh=s(ql,"ConvBERT Model with a "),Ua=a(ql,"CODE",{});var Nf=i(Ua);fh=s(Nf,"language modeling"),Nf.forEach(t),gh=s(ql," head on top."),ql.forEach(t),_h=m(Et),xs=a(Et,"P",{});var xl=i(xs);vh=s(xl,"This model inherits from "),zr=a(xl,"A",{href:!0});var Df=i(zr);bh=s(Df,"TFPreTrainedModel"),Df.forEach(t),kh=s(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),Th=m(Et),Ps=a(Et,"P",{});var Pl=i(Ps);wh=s(Pl,"This model is also a "),Os=a(Pl,"A",{href:!0,rel:!0});var Lf=i(Os);yh=s(Lf,"tf.keras.Model"),Lf.forEach(t),$h=s(Pl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pl.forEach(t),Ch=m(Et),w(nn.$$.fragment,Et),Fh=m(Et),pt=a(Et,"DIV",{class:!0});var St=i(pt);w(As.$$.fragment,St),Eh=m(St),po=a(St,"P",{});var Xr=i(po);Bh=s(Xr,"The "),jr=a(Xr,"A",{href:!0});var If=i(jr);Mh=s(If,"TFConvBertForMaskedLM"),If.forEach(t),zh=s(Xr," forward method, overrides the "),Ya=a(Xr,"CODE",{});var Sf=i(Ya);jh=s(Sf,"__call__"),Sf.forEach(t),qh=s(Xr," special method."),Xr.forEach(t),xh=m(St),w(sn.$$.fragment,St),Ph=m(St),w(rn.$$.fragment,St),Oh=m(St),w(an.$$.fragment,St),St.forEach(t),Et.forEach(t),nl=m(o),ho=a(o,"H2",{class:!0});var Ol=i(ho);ln=a(Ol,"A",{id:!0,class:!0,href:!0});var Rf=i(ln);Ha=a(Rf,"SPAN",{});var Wf=i(Ha);w(Ns.$$.fragment,Wf),Wf.forEach(t),Rf.forEach(t),Ah=m(Ol),Qa=a(Ol,"SPAN",{});var Kf=i(Qa);Nh=s(Kf,"TFConvBertForSequenceClassification"),Kf.forEach(t),Ol.forEach(t),sl=m(o),ot=a(o,"DIV",{class:!0});var Bt=i(ot);w(Ds.$$.fragment,Bt),Dh=m(Bt),Va=a(Bt,"P",{});var Uf=i(Va);Lh=s(Uf,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Uf.forEach(t),Ih=m(Bt),Ls=a(Bt,"P",{});var Al=i(Ls);Sh=s(Al,"This model inherits from "),qr=a(Al,"A",{href:!0});var Yf=i(qr);Rh=s(Yf,"TFPreTrainedModel"),Yf.forEach(t),Wh=s(Al,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Al.forEach(t),Kh=m(Bt),Is=a(Bt,"P",{});var Nl=i(Is);Uh=s(Nl,"This model is also a "),Ss=a(Nl,"A",{href:!0,rel:!0});var Hf=i(Ss);Yh=s(Hf,"tf.keras.Model"),Hf.forEach(t),Hh=s(Nl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nl.forEach(t),Qh=m(Bt),w(dn.$$.fragment,Bt),Vh=m(Bt),ht=a(Bt,"DIV",{class:!0});var Rt=i(ht);w(Rs.$$.fragment,Rt),Jh=m(Rt),mo=a(Rt,"P",{});var ea=i(mo);Gh=s(ea,"The "),xr=a(ea,"A",{href:!0});var Qf=i(xr);Zh=s(Qf,"TFConvBertForSequenceClassification"),Qf.forEach(t),Xh=s(ea," forward method, overrides the "),Ja=a(ea,"CODE",{});var Vf=i(Ja);em=s(Vf,"__call__"),Vf.forEach(t),tm=s(ea," special method."),ea.forEach(t),om=m(Rt),w(cn.$$.fragment,Rt),nm=m(Rt),w(pn.$$.fragment,Rt),sm=m(Rt),w(hn.$$.fragment,Rt),Rt.forEach(t),Bt.forEach(t),rl=m(o),uo=a(o,"H2",{class:!0});var Dl=i(uo);mn=a(Dl,"A",{id:!0,class:!0,href:!0});var Jf=i(mn);Ga=a(Jf,"SPAN",{});var Gf=i(Ga);w(Ws.$$.fragment,Gf),Gf.forEach(t),Jf.forEach(t),rm=m(Dl),Za=a(Dl,"SPAN",{});var Zf=i(Za);am=s(Zf,"TFConvBertForMultipleChoice"),Zf.forEach(t),Dl.forEach(t),al=m(o),nt=a(o,"DIV",{class:!0});var Mt=i(nt);w(Ks.$$.fragment,Mt),im=m(Mt),Xa=a(Mt,"P",{});var Xf=i(Xa);lm=s(Xf,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Xf.forEach(t),dm=m(Mt),Us=a(Mt,"P",{});var Ll=i(Us);cm=s(Ll,"This model inherits from "),Pr=a(Ll,"A",{href:!0});var eg=i(Pr);pm=s(eg,"TFPreTrainedModel"),eg.forEach(t),hm=s(Ll,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ll.forEach(t),mm=m(Mt),Ys=a(Mt,"P",{});var Il=i(Ys);um=s(Il,"This model is also a "),Hs=a(Il,"A",{href:!0,rel:!0});var tg=i(Hs);fm=s(tg,"tf.keras.Model"),tg.forEach(t),gm=s(Il,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Il.forEach(t),_m=m(Mt),w(un.$$.fragment,Mt),vm=m(Mt),Ct=a(Mt,"DIV",{class:!0});var Nn=i(Ct);w(Qs.$$.fragment,Nn),bm=m(Nn),fo=a(Nn,"P",{});var ta=i(fo);km=s(ta,"The "),Or=a(ta,"A",{href:!0});var og=i(Or);Tm=s(og,"TFConvBertForMultipleChoice"),og.forEach(t),wm=s(ta," forward method, overrides the "),ei=a(ta,"CODE",{});var ng=i(ei);ym=s(ng,"__call__"),ng.forEach(t),$m=s(ta," special method."),ta.forEach(t),Cm=m(Nn),w(fn.$$.fragment,Nn),Fm=m(Nn),w(gn.$$.fragment,Nn),Nn.forEach(t),Mt.forEach(t),il=m(o),go=a(o,"H2",{class:!0});var Sl=i(go);_n=a(Sl,"A",{id:!0,class:!0,href:!0});var sg=i(_n);ti=a(sg,"SPAN",{});var rg=i(ti);w(Vs.$$.fragment,rg),rg.forEach(t),sg.forEach(t),Em=m(Sl),oi=a(Sl,"SPAN",{});var ag=i(oi);Bm=s(ag,"TFConvBertForTokenClassification"),ag.forEach(t),Sl.forEach(t),ll=m(o),st=a(o,"DIV",{class:!0});var zt=i(st);w(Js.$$.fragment,zt),Mm=m(zt),ni=a(zt,"P",{});var ig=i(ni);zm=s(ig,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ig.forEach(t),jm=m(zt),Gs=a(zt,"P",{});var Rl=i(Gs);qm=s(Rl,"This model inherits from "),Ar=a(Rl,"A",{href:!0});var lg=i(Ar);xm=s(lg,"TFPreTrainedModel"),lg.forEach(t),Pm=s(Rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rl.forEach(t),Om=m(zt),Zs=a(zt,"P",{});var Wl=i(Zs);Am=s(Wl,"This model is also a "),Xs=a(Wl,"A",{href:!0,rel:!0});var dg=i(Xs);Nm=s(dg,"tf.keras.Model"),dg.forEach(t),Dm=s(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),Lm=m(zt),w(vn.$$.fragment,zt),Im=m(zt),mt=a(zt,"DIV",{class:!0});var Wt=i(mt);w(er.$$.fragment,Wt),Sm=m(Wt),_o=a(Wt,"P",{});var oa=i(_o);Rm=s(oa,"The "),Nr=a(oa,"A",{href:!0});var cg=i(Nr);Wm=s(cg,"TFConvBertForTokenClassification"),cg.forEach(t),Km=s(oa," forward method, overrides the "),si=a(oa,"CODE",{});var pg=i(si);Um=s(pg,"__call__"),pg.forEach(t),Ym=s(oa," special method."),oa.forEach(t),Hm=m(Wt),w(bn.$$.fragment,Wt),Qm=m(Wt),w(kn.$$.fragment,Wt),Vm=m(Wt),w(Tn.$$.fragment,Wt),Wt.forEach(t),zt.forEach(t),dl=m(o),vo=a(o,"H2",{class:!0});var Kl=i(vo);wn=a(Kl,"A",{id:!0,class:!0,href:!0});var hg=i(wn);ri=a(hg,"SPAN",{});var mg=i(ri);w(tr.$$.fragment,mg),mg.forEach(t),hg.forEach(t),Jm=m(Kl),ai=a(Kl,"SPAN",{});var ug=i(ai);Gm=s(ug,"TFConvBertForQuestionAnswering"),ug.forEach(t),Kl.forEach(t),cl=m(o),rt=a(o,"DIV",{class:!0});var jt=i(rt);w(or.$$.fragment,jt),Zm=m(jt),bo=a(jt,"P",{});var na=i(bo);Xm=s(na,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ii=a(na,"CODE",{});var fg=i(ii);eu=s(fg,"span start logits"),fg.forEach(t),tu=s(na," and "),li=a(na,"CODE",{});var gg=i(li);ou=s(gg,"span end logits"),gg.forEach(t),nu=s(na,")."),na.forEach(t),su=m(jt),nr=a(jt,"P",{});var Ul=i(nr);ru=s(Ul,"This model inherits from "),Dr=a(Ul,"A",{href:!0});var _g=i(Dr);au=s(_g,"TFPreTrainedModel"),_g.forEach(t),iu=s(Ul,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul.forEach(t),lu=m(jt),sr=a(jt,"P",{});var Yl=i(sr);du=s(Yl,"This model is also a "),rr=a(Yl,"A",{href:!0,rel:!0});var vg=i(rr);cu=s(vg,"tf.keras.Model"),vg.forEach(t),pu=s(Yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yl.forEach(t),hu=m(jt),w(yn.$$.fragment,jt),mu=m(jt),ut=a(jt,"DIV",{class:!0});var Kt=i(ut);w(ar.$$.fragment,Kt),uu=m(Kt),ko=a(Kt,"P",{});var sa=i(ko);fu=s(sa,"The "),Lr=a(sa,"A",{href:!0});var bg=i(Lr);gu=s(bg,"TFConvBertForQuestionAnswering"),bg.forEach(t),_u=s(sa," forward method, overrides the "),di=a(sa,"CODE",{});var kg=i(di);vu=s(kg,"__call__"),kg.forEach(t),bu=s(sa," special method."),sa.forEach(t),ku=m(Kt),w($n.$$.fragment,Kt),Tu=m(Kt),w(Cn.$$.fragment,Kt),wu=m(Kt),w(Fn.$$.fragment,Kt),Kt.forEach(t),jt.forEach(t),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(f_)),_(u,"id","convbert"),_(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(u,"href","#convbert"),_(c,"class","relative group"),_(ne,"id","overview"),_(ne,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ne,"href","#overview"),_(D,"class","relative group"),_(re,"href","https://arxiv.org/abs/2008.02496"),_(re,"rel","nofollow"),_(ae,"href","https://huggingface.co/abhishek"),_(ae,"rel","nofollow"),_(ie,"href","https://github.com/yitu-opensource/ConvBert"),_(ie,"rel","nofollow"),_(se,"id","transformers.ConvBertConfig"),_(se,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(se,"href","#transformers.ConvBertConfig"),_(I,"class","relative group"),_(A,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertModel"),_(f,"href","https://huggingface.co/YituTech/conv-bert-base"),_(f,"rel","nofollow"),_(z,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),_(Ne,"href","/docs/transformers/v4.22.0/en/main_classes/configuration#transformers.PretrainedConfig"),_(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(U,"id","transformers.ConvBertTokenizer"),_(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(U,"href","#transformers.ConvBertTokenizer"),_(Pe,"class","relative group"),_(mr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizer"),_(ur,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer"),_(fr,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizer"),_(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_($o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(vr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Fo,"id","transformers.ConvBertTokenizerFast"),_(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Fo,"href","#transformers.ConvBertTokenizerFast"),_(Yt,"class","relative group"),_(br,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),_(kr,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizerFast"),_(Tr,"href","/docs/transformers/v4.22.0/en/model_doc/bert#transformers.BertTokenizerFast"),_(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bo,"id","transformers.ConvBertModel"),_(Bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Bo,"href","#transformers.ConvBertModel"),_(Ht,"class","relative group"),_(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Zn,"rel","nofollow"),_(wr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertModel"),_(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(jo,"id","transformers.ConvBertForMaskedLM"),_(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(jo,"href","#transformers.ConvBertForMaskedLM"),_(Vt,"class","relative group"),_(os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(os,"rel","nofollow"),_(yr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),_(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Oo,"id","transformers.ConvBertForSequenceClassification"),_(Oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Oo,"href","#transformers.ConvBertForSequenceClassification"),_(Zt,"class","relative group"),_(is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(is,"rel","nofollow"),_($r,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(So,"id","transformers.ConvBertForMultipleChoice"),_(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(So,"href","#transformers.ConvBertForMultipleChoice"),_(eo,"class","relative group"),_(hs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(hs,"rel","nofollow"),_(Cr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),_(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"id","transformers.ConvBertForTokenClassification"),_(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ko,"href","#transformers.ConvBertForTokenClassification"),_(oo,"class","relative group"),_(_s,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(_s,"rel","nofollow"),_(Fr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),_(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qo,"id","transformers.ConvBertForQuestionAnswering"),_(Qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Qo,"href","#transformers.ConvBertForQuestionAnswering"),_(so,"class","relative group"),_(ws,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ws,"rel","nofollow"),_(Er,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),_(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zo,"id","transformers.TFConvBertModel"),_(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Zo,"href","#transformers.TFConvBertModel"),_(io,"class","relative group"),_(Br,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(Bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Bs,"rel","nofollow"),_(Mr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertModel"),_($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(on,"id","transformers.TFConvBertForMaskedLM"),_(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(on,"href","#transformers.TFConvBertForMaskedLM"),_(co,"class","relative group"),_(zr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Os,"rel","nofollow"),_(jr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),_(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ln,"id","transformers.TFConvBertForSequenceClassification"),_(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ln,"href","#transformers.TFConvBertForSequenceClassification"),_(ho,"class","relative group"),_(qr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(Ss,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Ss,"rel","nofollow"),_(xr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),_(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(mn,"id","transformers.TFConvBertForMultipleChoice"),_(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(mn,"href","#transformers.TFConvBertForMultipleChoice"),_(uo,"class","relative group"),_(Pr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Hs,"rel","nofollow"),_(Or,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),_(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(_n,"id","transformers.TFConvBertForTokenClassification"),_(_n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(_n,"href","#transformers.TFConvBertForTokenClassification"),_(go,"class","relative group"),_(Ar,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(Xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Xs,"rel","nofollow"),_(Nr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),_(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wn,"id","transformers.TFConvBertForQuestionAnswering"),_(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(wn,"href","#transformers.TFConvBertForQuestionAnswering"),_(vo,"class","relative group"),_(Dr,"href","/docs/transformers/v4.22.0/en/main_classes/model#transformers.TFPreTrainedModel"),_(rr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(rr,"rel","nofollow"),_(Lr,"href","/docs/transformers/v4.22.0/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),_(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,b){e(document.head,d),v(o,g,b),v(o,c,b),e(c,u),e(u,k),y(l,k,null),e(c,p),e(c,j),e(j,ke),v(o,me,b),v(o,D,b),e(D,ne),e(ne,Z),y(E,Z,null),e(D,Te),e(D,V),e(V,we),v(o,ue,b),v(o,W,b),e(W,ye),e(W,re),e(re,J),e(W,$e),v(o,fe,b),v(o,H,b),e(H,Ce),v(o,ge,b),v(o,Q,b),e(Q,ce),e(ce,Fe),v(o,X,b),v(o,q,b),e(q,P),v(o,_e,b),v(o,L,b),e(L,Ee),e(L,ae),e(ae,G),e(L,Be),e(L,ie),e(ie,O),v(o,ve,b),v(o,I,b),e(I,se),e(se,pe),y(Y,pe,null),e(I,Me),e(I,he),e(he,S),v(o,be,b),v(o,N,b),y(le,N,null),e(N,ee),e(N,x),e(x,ze),e(x,A),e(A,je),e(x,qe),e(x,f),e(f,B),e(x,Ue),e(N,te),e(N,xe),e(xe,Ye),e(xe,z),e(z,He),e(xe,Qe),e(xe,Ne),e(Ne,Ve),e(xe,Je),e(N,R),y(K,N,null),v(o,We,b),v(o,Pe,b),e(Pe,U),e(U,Se),y(Ae,Se,null),e(Pe,Oe),e(Pe,Re),e(Re,oe),v(o,Ke,b),v(o,Xe,b),y(Dn,Xe,null),e(Xe,Hl),e(Xe,qt),e(qt,Ql),e(qt,mr),e(mr,Vl),e(qt,Jl),e(qt,ur),e(ur,Gl),e(qt,Zl),e(qt,fr),e(fr,Xl),e(qt,ed),e(Xe,td),e(Xe,Nt),y(Ln,Nt,null),e(Nt,od),e(Nt,ra),e(ra,nd),e(Nt,sd),e(Nt,In),e(In,gr),e(gr,rd),e(gr,aa),e(aa,ad),e(In,id),e(In,_r),e(_r,ld),e(_r,ia),e(ia,dd),e(Xe,cd),e(Xe,$o),y(Sn,$o,null),e($o,pd),e($o,Rn),e(Rn,hd),e(Rn,la),e(la,md),e(Rn,ud),e(Xe,fd),e(Xe,Tt),y(Wn,Tt,null),e(Tt,gd),e(Tt,da),e(da,_d),e(Tt,vd),y(Co,Tt,null),e(Tt,bd),e(Tt,Ut),e(Ut,kd),e(Ut,ca),e(ca,Td),e(Ut,wd),e(Ut,pa),e(pa,yd),e(Ut,$d),e(Xe,Cd),e(Xe,vr),y(Kn,vr,null),v(o,Li,b),v(o,Yt,b),e(Yt,Fo),e(Fo,ha),y(Un,ha,null),e(Yt,Fd),e(Yt,ma),e(ma,Ed),v(o,Ii,b),v(o,gt,b),y(Yn,gt,null),e(gt,Bd),e(gt,Hn),e(Hn,Md),e(Hn,ua),e(ua,zd),e(Hn,jd),e(gt,qd),e(gt,Eo),e(Eo,br),e(br,xd),e(Eo,Pd),e(Eo,kr),e(kr,Od),e(Eo,Ad),e(gt,Nd),e(gt,Qn),e(Qn,Dd),e(Qn,Tr),e(Tr,Ld),e(Qn,Id),v(o,Si,b),v(o,Ht,b),e(Ht,Bo),e(Bo,fa),y(Vn,fa,null),e(Ht,Sd),e(Ht,ga),e(ga,Rd),v(o,Ri,b),v(o,xt,b),y(Jn,xt,null),e(xt,Wd),e(xt,Gn),e(Gn,Kd),e(Gn,Zn),e(Zn,Ud),e(Gn,Yd),e(xt,Hd),e(xt,wt),y(Xn,wt,null),e(wt,Qd),e(wt,Qt),e(Qt,Vd),e(Qt,wr),e(wr,Jd),e(Qt,Gd),e(Qt,_a),e(_a,Zd),e(Qt,Xd),e(wt,ec),y(Mo,wt,null),e(wt,tc),y(zo,wt,null),v(o,Wi,b),v(o,Vt,b),e(Vt,jo),e(jo,va),y(es,va,null),e(Vt,oc),e(Vt,ba),e(ba,nc),v(o,Ki,b),v(o,Pt,b),y(ts,Pt,null),e(Pt,sc),e(Pt,Jt),e(Jt,rc),e(Jt,ka),e(ka,ac),e(Jt,ic),e(Jt,os),e(os,lc),e(Jt,dc),e(Pt,cc),e(Pt,lt),y(ns,lt,null),e(lt,pc),e(lt,Gt),e(Gt,hc),e(Gt,yr),e(yr,mc),e(Gt,uc),e(Gt,Ta),e(Ta,fc),e(Gt,gc),e(lt,_c),y(qo,lt,null),e(lt,vc),y(xo,lt,null),e(lt,bc),y(Po,lt,null),v(o,Ui,b),v(o,Zt,b),e(Zt,Oo),e(Oo,wa),y(ss,wa,null),e(Zt,kc),e(Zt,ya),e(ya,Tc),v(o,Yi,b),v(o,_t,b),y(rs,_t,null),e(_t,wc),e(_t,$a),e($a,yc),e(_t,$c),e(_t,as),e(as,Cc),e(as,is),e(is,Fc),e(as,Ec),e(_t,Bc),e(_t,Ge),y(ls,Ge,null),e(Ge,Mc),e(Ge,Xt),e(Xt,zc),e(Xt,$r),e($r,jc),e(Xt,qc),e(Xt,Ca),e(Ca,xc),e(Xt,Pc),e(Ge,Oc),y(Ao,Ge,null),e(Ge,Ac),y(No,Ge,null),e(Ge,Nc),y(Do,Ge,null),e(Ge,Dc),y(Lo,Ge,null),e(Ge,Lc),y(Io,Ge,null),v(o,Hi,b),v(o,eo,b),e(eo,So),e(So,Fa),y(ds,Fa,null),e(eo,Ic),e(eo,Ea),e(Ea,Sc),v(o,Qi,b),v(o,vt,b),y(cs,vt,null),e(vt,Rc),e(vt,Ba),e(Ba,Wc),e(vt,Kc),e(vt,ps),e(ps,Uc),e(ps,hs),e(hs,Yc),e(ps,Hc),e(vt,Qc),e(vt,yt),y(ms,yt,null),e(yt,Vc),e(yt,to),e(to,Jc),e(to,Cr),e(Cr,Gc),e(to,Zc),e(to,Ma),e(Ma,Xc),e(to,ep),e(yt,tp),y(Ro,yt,null),e(yt,op),y(Wo,yt,null),v(o,Vi,b),v(o,oo,b),e(oo,Ko),e(Ko,za),y(us,za,null),e(oo,np),e(oo,ja),e(ja,sp),v(o,Ji,b),v(o,bt,b),y(fs,bt,null),e(bt,rp),e(bt,qa),e(qa,ap),e(bt,ip),e(bt,gs),e(gs,lp),e(gs,_s),e(_s,dp),e(gs,cp),e(bt,pp),e(bt,dt),y(vs,dt,null),e(dt,hp),e(dt,no),e(no,mp),e(no,Fr),e(Fr,up),e(no,fp),e(no,xa),e(xa,gp),e(no,_p),e(dt,vp),y(Uo,dt,null),e(dt,bp),y(Yo,dt,null),e(dt,kp),y(Ho,dt,null),v(o,Gi,b),v(o,so,b),e(so,Qo),e(Qo,Pa),y(bs,Pa,null),e(so,Tp),e(so,Oa),e(Oa,wp),v(o,Zi,b),v(o,kt,b),y(ks,kt,null),e(kt,yp),e(kt,ro),e(ro,$p),e(ro,Aa),e(Aa,Cp),e(ro,Fp),e(ro,Na),e(Na,Ep),e(ro,Bp),e(kt,Mp),e(kt,Ts),e(Ts,zp),e(Ts,ws),e(ws,jp),e(Ts,qp),e(kt,xp),e(kt,ct),y(ys,ct,null),e(ct,Pp),e(ct,ao),e(ao,Op),e(ao,Er),e(Er,Ap),e(ao,Np),e(ao,Da),e(Da,Dp),e(ao,Lp),e(ct,Ip),y(Vo,ct,null),e(ct,Sp),y(Jo,ct,null),e(ct,Rp),y(Go,ct,null),v(o,Xi,b),v(o,io,b),e(io,Zo),e(Zo,La),y($s,La,null),e(io,Wp),e(io,Ia),e(Ia,Kp),v(o,el,b),v(o,et,b),y(Cs,et,null),e(et,Up),e(et,Sa),e(Sa,Yp),e(et,Hp),e(et,Fs),e(Fs,Qp),e(Fs,Br),e(Br,Vp),e(Fs,Jp),e(et,Gp),e(et,Es),e(Es,Zp),e(Es,Bs),e(Bs,Xp),e(Es,eh),e(et,th),y(Xo,et,null),e(et,oh),e(et,$t),y(Ms,$t,null),e($t,nh),e($t,lo),e(lo,sh),e(lo,Mr),e(Mr,rh),e(lo,ah),e(lo,Ra),e(Ra,ih),e(lo,lh),e($t,dh),y(en,$t,null),e($t,ch),y(tn,$t,null),v(o,tl,b),v(o,co,b),e(co,on),e(on,Wa),y(zs,Wa,null),e(co,ph),e(co,Ka),e(Ka,hh),v(o,ol,b),v(o,tt,b),y(js,tt,null),e(tt,mh),e(tt,qs),e(qs,uh),e(qs,Ua),e(Ua,fh),e(qs,gh),e(tt,_h),e(tt,xs),e(xs,vh),e(xs,zr),e(zr,bh),e(xs,kh),e(tt,Th),e(tt,Ps),e(Ps,wh),e(Ps,Os),e(Os,yh),e(Ps,$h),e(tt,Ch),y(nn,tt,null),e(tt,Fh),e(tt,pt),y(As,pt,null),e(pt,Eh),e(pt,po),e(po,Bh),e(po,jr),e(jr,Mh),e(po,zh),e(po,Ya),e(Ya,jh),e(po,qh),e(pt,xh),y(sn,pt,null),e(pt,Ph),y(rn,pt,null),e(pt,Oh),y(an,pt,null),v(o,nl,b),v(o,ho,b),e(ho,ln),e(ln,Ha),y(Ns,Ha,null),e(ho,Ah),e(ho,Qa),e(Qa,Nh),v(o,sl,b),v(o,ot,b),y(Ds,ot,null),e(ot,Dh),e(ot,Va),e(Va,Lh),e(ot,Ih),e(ot,Ls),e(Ls,Sh),e(Ls,qr),e(qr,Rh),e(Ls,Wh),e(ot,Kh),e(ot,Is),e(Is,Uh),e(Is,Ss),e(Ss,Yh),e(Is,Hh),e(ot,Qh),y(dn,ot,null),e(ot,Vh),e(ot,ht),y(Rs,ht,null),e(ht,Jh),e(ht,mo),e(mo,Gh),e(mo,xr),e(xr,Zh),e(mo,Xh),e(mo,Ja),e(Ja,em),e(mo,tm),e(ht,om),y(cn,ht,null),e(ht,nm),y(pn,ht,null),e(ht,sm),y(hn,ht,null),v(o,rl,b),v(o,uo,b),e(uo,mn),e(mn,Ga),y(Ws,Ga,null),e(uo,rm),e(uo,Za),e(Za,am),v(o,al,b),v(o,nt,b),y(Ks,nt,null),e(nt,im),e(nt,Xa),e(Xa,lm),e(nt,dm),e(nt,Us),e(Us,cm),e(Us,Pr),e(Pr,pm),e(Us,hm),e(nt,mm),e(nt,Ys),e(Ys,um),e(Ys,Hs),e(Hs,fm),e(Ys,gm),e(nt,_m),y(un,nt,null),e(nt,vm),e(nt,Ct),y(Qs,Ct,null),e(Ct,bm),e(Ct,fo),e(fo,km),e(fo,Or),e(Or,Tm),e(fo,wm),e(fo,ei),e(ei,ym),e(fo,$m),e(Ct,Cm),y(fn,Ct,null),e(Ct,Fm),y(gn,Ct,null),v(o,il,b),v(o,go,b),e(go,_n),e(_n,ti),y(Vs,ti,null),e(go,Em),e(go,oi),e(oi,Bm),v(o,ll,b),v(o,st,b),y(Js,st,null),e(st,Mm),e(st,ni),e(ni,zm),e(st,jm),e(st,Gs),e(Gs,qm),e(Gs,Ar),e(Ar,xm),e(Gs,Pm),e(st,Om),e(st,Zs),e(Zs,Am),e(Zs,Xs),e(Xs,Nm),e(Zs,Dm),e(st,Lm),y(vn,st,null),e(st,Im),e(st,mt),y(er,mt,null),e(mt,Sm),e(mt,_o),e(_o,Rm),e(_o,Nr),e(Nr,Wm),e(_o,Km),e(_o,si),e(si,Um),e(_o,Ym),e(mt,Hm),y(bn,mt,null),e(mt,Qm),y(kn,mt,null),e(mt,Vm),y(Tn,mt,null),v(o,dl,b),v(o,vo,b),e(vo,wn),e(wn,ri),y(tr,ri,null),e(vo,Jm),e(vo,ai),e(ai,Gm),v(o,cl,b),v(o,rt,b),y(or,rt,null),e(rt,Zm),e(rt,bo),e(bo,Xm),e(bo,ii),e(ii,eu),e(bo,tu),e(bo,li),e(li,ou),e(bo,nu),e(rt,su),e(rt,nr),e(nr,ru),e(nr,Dr),e(Dr,au),e(nr,iu),e(rt,lu),e(rt,sr),e(sr,du),e(sr,rr),e(rr,cu),e(sr,pu),e(rt,hu),y(yn,rt,null),e(rt,mu),e(rt,ut),y(ar,ut,null),e(ut,uu),e(ut,ko),e(ko,fu),e(ko,Lr),e(Lr,gu),e(ko,_u),e(ko,di),e(di,vu),e(ko,bu),e(ut,ku),y($n,ut,null),e(ut,Tu),y(Cn,ut,null),e(ut,wu),y(Fn,ut,null),pl=!0},p(o,[b]){const ir={};b&2&&(ir.$$scope={dirty:b,ctx:o}),K.$set(ir);const ci={};b&2&&(ci.$$scope={dirty:b,ctx:o}),Co.$set(ci);const pi={};b&2&&(pi.$$scope={dirty:b,ctx:o}),Mo.$set(pi);const hi={};b&2&&(hi.$$scope={dirty:b,ctx:o}),zo.$set(hi);const lr={};b&2&&(lr.$$scope={dirty:b,ctx:o}),qo.$set(lr);const mi={};b&2&&(mi.$$scope={dirty:b,ctx:o}),xo.$set(mi);const ui={};b&2&&(ui.$$scope={dirty:b,ctx:o}),Po.$set(ui);const fi={};b&2&&(fi.$$scope={dirty:b,ctx:o}),Ao.$set(fi);const dr={};b&2&&(dr.$$scope={dirty:b,ctx:o}),No.$set(dr);const gi={};b&2&&(gi.$$scope={dirty:b,ctx:o}),Do.$set(gi);const _i={};b&2&&(_i.$$scope={dirty:b,ctx:o}),Lo.$set(_i);const vi={};b&2&&(vi.$$scope={dirty:b,ctx:o}),Io.$set(vi);const bi={};b&2&&(bi.$$scope={dirty:b,ctx:o}),Ro.$set(bi);const ki={};b&2&&(ki.$$scope={dirty:b,ctx:o}),Wo.$set(ki);const En={};b&2&&(En.$$scope={dirty:b,ctx:o}),Uo.$set(En);const Ti={};b&2&&(Ti.$$scope={dirty:b,ctx:o}),Yo.$set(Ti);const wi={};b&2&&(wi.$$scope={dirty:b,ctx:o}),Ho.$set(wi);const cr={};b&2&&(cr.$$scope={dirty:b,ctx:o}),Vo.$set(cr);const yi={};b&2&&(yi.$$scope={dirty:b,ctx:o}),Jo.$set(yi);const $i={};b&2&&($i.$$scope={dirty:b,ctx:o}),Go.$set($i);const Ci={};b&2&&(Ci.$$scope={dirty:b,ctx:o}),Xo.$set(Ci);const Ot={};b&2&&(Ot.$$scope={dirty:b,ctx:o}),en.$set(Ot);const To={};b&2&&(To.$$scope={dirty:b,ctx:o}),tn.$set(To);const Fi={};b&2&&(Fi.$$scope={dirty:b,ctx:o}),nn.$set(Fi);const Ei={};b&2&&(Ei.$$scope={dirty:b,ctx:o}),sn.$set(Ei);const wo={};b&2&&(wo.$$scope={dirty:b,ctx:o}),rn.$set(wo);const Bi={};b&2&&(Bi.$$scope={dirty:b,ctx:o}),an.$set(Bi);const Mi={};b&2&&(Mi.$$scope={dirty:b,ctx:o}),dn.$set(Mi);const pr={};b&2&&(pr.$$scope={dirty:b,ctx:o}),cn.$set(pr);const zi={};b&2&&(zi.$$scope={dirty:b,ctx:o}),pn.$set(zi);const ji={};b&2&&(ji.$$scope={dirty:b,ctx:o}),hn.$set(ji);const qi={};b&2&&(qi.$$scope={dirty:b,ctx:o}),un.$set(qi);const it={};b&2&&(it.$$scope={dirty:b,ctx:o}),fn.$set(it);const At={};b&2&&(At.$$scope={dirty:b,ctx:o}),gn.$set(At);const xi={};b&2&&(xi.$$scope={dirty:b,ctx:o}),vn.$set(xi);const Pi={};b&2&&(Pi.$$scope={dirty:b,ctx:o}),bn.$set(Pi);const Oi={};b&2&&(Oi.$$scope={dirty:b,ctx:o}),kn.$set(Oi);const yo={};b&2&&(yo.$$scope={dirty:b,ctx:o}),Tn.$set(yo);const Ai={};b&2&&(Ai.$$scope={dirty:b,ctx:o}),yn.$set(Ai);const hr={};b&2&&(hr.$$scope={dirty:b,ctx:o}),$n.$set(hr);const Ir={};b&2&&(Ir.$$scope={dirty:b,ctx:o}),Cn.$set(Ir);const Ni={};b&2&&(Ni.$$scope={dirty:b,ctx:o}),Fn.$set(Ni)},i(o){pl||($(l.$$.fragment,o),$(E.$$.fragment,o),$(Y.$$.fragment,o),$(le.$$.fragment,o),$(K.$$.fragment,o),$(Ae.$$.fragment,o),$(Dn.$$.fragment,o),$(Ln.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Co.$$.fragment,o),$(Kn.$$.fragment,o),$(Un.$$.fragment,o),$(Yn.$$.fragment,o),$(Vn.$$.fragment,o),$(Jn.$$.fragment,o),$(Xn.$$.fragment,o),$(Mo.$$.fragment,o),$(zo.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(ns.$$.fragment,o),$(qo.$$.fragment,o),$(xo.$$.fragment,o),$(Po.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(ls.$$.fragment,o),$(Ao.$$.fragment,o),$(No.$$.fragment,o),$(Do.$$.fragment,o),$(Lo.$$.fragment,o),$(Io.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ms.$$.fragment,o),$(Ro.$$.fragment,o),$(Wo.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(vs.$$.fragment,o),$(Uo.$$.fragment,o),$(Yo.$$.fragment,o),$(Ho.$$.fragment,o),$(bs.$$.fragment,o),$(ks.$$.fragment,o),$(ys.$$.fragment,o),$(Vo.$$.fragment,o),$(Jo.$$.fragment,o),$(Go.$$.fragment,o),$($s.$$.fragment,o),$(Cs.$$.fragment,o),$(Xo.$$.fragment,o),$(Ms.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(zs.$$.fragment,o),$(js.$$.fragment,o),$(nn.$$.fragment,o),$(As.$$.fragment,o),$(sn.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(Ns.$$.fragment,o),$(Ds.$$.fragment,o),$(dn.$$.fragment,o),$(Rs.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(Ws.$$.fragment,o),$(Ks.$$.fragment,o),$(un.$$.fragment,o),$(Qs.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(Vs.$$.fragment,o),$(Js.$$.fragment,o),$(vn.$$.fragment,o),$(er.$$.fragment,o),$(bn.$$.fragment,o),$(kn.$$.fragment,o),$(Tn.$$.fragment,o),$(tr.$$.fragment,o),$(or.$$.fragment,o),$(yn.$$.fragment,o),$(ar.$$.fragment,o),$($n.$$.fragment,o),$(Cn.$$.fragment,o),$(Fn.$$.fragment,o),pl=!0)},o(o){C(l.$$.fragment,o),C(E.$$.fragment,o),C(Y.$$.fragment,o),C(le.$$.fragment,o),C(K.$$.fragment,o),C(Ae.$$.fragment,o),C(Dn.$$.fragment,o),C(Ln.$$.fragment,o),C(Sn.$$.fragment,o),C(Wn.$$.fragment,o),C(Co.$$.fragment,o),C(Kn.$$.fragment,o),C(Un.$$.fragment,o),C(Yn.$$.fragment,o),C(Vn.$$.fragment,o),C(Jn.$$.fragment,o),C(Xn.$$.fragment,o),C(Mo.$$.fragment,o),C(zo.$$.fragment,o),C(es.$$.fragment,o),C(ts.$$.fragment,o),C(ns.$$.fragment,o),C(qo.$$.fragment,o),C(xo.$$.fragment,o),C(Po.$$.fragment,o),C(ss.$$.fragment,o),C(rs.$$.fragment,o),C(ls.$$.fragment,o),C(Ao.$$.fragment,o),C(No.$$.fragment,o),C(Do.$$.fragment,o),C(Lo.$$.fragment,o),C(Io.$$.fragment,o),C(ds.$$.fragment,o),C(cs.$$.fragment,o),C(ms.$$.fragment,o),C(Ro.$$.fragment,o),C(Wo.$$.fragment,o),C(us.$$.fragment,o),C(fs.$$.fragment,o),C(vs.$$.fragment,o),C(Uo.$$.fragment,o),C(Yo.$$.fragment,o),C(Ho.$$.fragment,o),C(bs.$$.fragment,o),C(ks.$$.fragment,o),C(ys.$$.fragment,o),C(Vo.$$.fragment,o),C(Jo.$$.fragment,o),C(Go.$$.fragment,o),C($s.$$.fragment,o),C(Cs.$$.fragment,o),C(Xo.$$.fragment,o),C(Ms.$$.fragment,o),C(en.$$.fragment,o),C(tn.$$.fragment,o),C(zs.$$.fragment,o),C(js.$$.fragment,o),C(nn.$$.fragment,o),C(As.$$.fragment,o),C(sn.$$.fragment,o),C(rn.$$.fragment,o),C(an.$$.fragment,o),C(Ns.$$.fragment,o),C(Ds.$$.fragment,o),C(dn.$$.fragment,o),C(Rs.$$.fragment,o),C(cn.$$.fragment,o),C(pn.$$.fragment,o),C(hn.$$.fragment,o),C(Ws.$$.fragment,o),C(Ks.$$.fragment,o),C(un.$$.fragment,o),C(Qs.$$.fragment,o),C(fn.$$.fragment,o),C(gn.$$.fragment,o),C(Vs.$$.fragment,o),C(Js.$$.fragment,o),C(vn.$$.fragment,o),C(er.$$.fragment,o),C(bn.$$.fragment,o),C(kn.$$.fragment,o),C(Tn.$$.fragment,o),C(tr.$$.fragment,o),C(or.$$.fragment,o),C(yn.$$.fragment,o),C(ar.$$.fragment,o),C($n.$$.fragment,o),C(Cn.$$.fragment,o),C(Fn.$$.fragment,o),pl=!1},d(o){t(d),o&&t(g),o&&t(c),F(l),o&&t(me),o&&t(D),F(E),o&&t(ue),o&&t(W),o&&t(fe),o&&t(H),o&&t(ge),o&&t(Q),o&&t(X),o&&t(q),o&&t(_e),o&&t(L),o&&t(ve),o&&t(I),F(Y),o&&t(be),o&&t(N),F(le),F(K),o&&t(We),o&&t(Pe),F(Ae),o&&t(Ke),o&&t(Xe),F(Dn),F(Ln),F(Sn),F(Wn),F(Co),F(Kn),o&&t(Li),o&&t(Yt),F(Un),o&&t(Ii),o&&t(gt),F(Yn),o&&t(Si),o&&t(Ht),F(Vn),o&&t(Ri),o&&t(xt),F(Jn),F(Xn),F(Mo),F(zo),o&&t(Wi),o&&t(Vt),F(es),o&&t(Ki),o&&t(Pt),F(ts),F(ns),F(qo),F(xo),F(Po),o&&t(Ui),o&&t(Zt),F(ss),o&&t(Yi),o&&t(_t),F(rs),F(ls),F(Ao),F(No),F(Do),F(Lo),F(Io),o&&t(Hi),o&&t(eo),F(ds),o&&t(Qi),o&&t(vt),F(cs),F(ms),F(Ro),F(Wo),o&&t(Vi),o&&t(oo),F(us),o&&t(Ji),o&&t(bt),F(fs),F(vs),F(Uo),F(Yo),F(Ho),o&&t(Gi),o&&t(so),F(bs),o&&t(Zi),o&&t(kt),F(ks),F(ys),F(Vo),F(Jo),F(Go),o&&t(Xi),o&&t(io),F($s),o&&t(el),o&&t(et),F(Cs),F(Xo),F(Ms),F(en),F(tn),o&&t(tl),o&&t(co),F(zs),o&&t(ol),o&&t(tt),F(js),F(nn),F(As),F(sn),F(rn),F(an),o&&t(nl),o&&t(ho),F(Ns),o&&t(sl),o&&t(ot),F(Ds),F(dn),F(Rs),F(cn),F(pn),F(hn),o&&t(rl),o&&t(uo),F(Ws),o&&t(al),o&&t(nt),F(Ks),F(un),F(Qs),F(fn),F(gn),o&&t(il),o&&t(go),F(Vs),o&&t(ll),o&&t(st),F(Js),F(vn),F(er),F(bn),F(kn),F(Tn),o&&t(dl),o&&t(vo),F(tr),o&&t(cl),o&&t(rt),F(or),F(yn),F(ar),F($n),F(Cn),F(Fn)}}}const f_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function g_(M){return Cg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class y_ extends Tg{constructor(d){super();wg(this,d,g_,u_,yg,{})}}export{y_ as default,f_ as metadata};
