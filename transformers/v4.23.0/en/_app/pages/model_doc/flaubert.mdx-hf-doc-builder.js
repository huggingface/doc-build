import{S as ik,i as lk,s as dk,e as a,k as u,w as v,t as o,M as ck,c as r,d as t,m as h,a as i,x as w,h as n,b as f,G as e,g as b,y as T,q as F,o as $,B as M,v as pk,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as He}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as ut}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function uk(q){let d,_,c,m,y;return m=new He({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),_=o("pair mask has the following format:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"pair mask has the following format:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function hk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function mk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
import torch

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = FlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, FlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function fk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function gk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMWithLMHeadModel.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("The capital of France is <special1>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <special1>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;special1&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;special1&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function _k(q){let d,_;return d=new He({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function bk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function kk(q){let d,_,c,m,y;return m=new He({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example of single-label classification:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function yk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = torch.tensor([1])
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function vk(q){let d,_,c,m,y;return m=new He({props:{code:`import torch
from transformers import XLMTokenizer, XLMForSequenceClassification

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example of multi-label classification:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function wk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = XLMForSequenceClassification.from_pretrained(
    "xlm-mlm-en-2048", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Tk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Fk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function $k(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Mk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function xk(q){let d,_;return d=new He({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Ek(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function qk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function zk(q){let d,_;return d=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Ck(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Lk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
import torch

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = XLMForQuestionAnswering.from_pretrained("xlm-mlm-en-2048")

input_ids = torch.tensor(tokenizer.encode("Hello, my dog is cute", add_special_tokens=True)).unsqueeze(
    0
)  # Batch size 1
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, XLMForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = XLMForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>)).unsqueeze(
<span class="hljs-meta">... </span>    <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function jk(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Pk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Nk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Ak(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Ok(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Dk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
import tensorflow as tf

tokenizer = FlaubertTokenizer.from_pretrained("flaubert/flaubert_base_cased")
model = TFFlaubertWithLMHeadModel.from_pretrained("flaubert/flaubert_base_cased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> FlaubertTokenizer, TFFlaubertWithLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = FlaubertTokenizer.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFFlaubertWithLMHeadModel.from_pretrained(<span class="hljs-string">&quot;flaubert/flaubert_base_cased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Sk(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Ik(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Wk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Xk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFXLMForSequenceClassification.from_pretrained("xlm-mlm-en-2048", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Hk(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Qk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Uk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForMultipleChoice.from_pretrained("xlm-mlm-en-2048")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Bk(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Rk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Kk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForTokenClassification.from_pretrained("xlm-mlm-en-2048")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForTokenClassification.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

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
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Vk(q){let d,_;return d=new He({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Yk(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),m=o("transformers"),y=o(" accept two formats as input:"),l=u(),p=a("ul"),C=a("li"),we=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=u(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=u(),x=a("p"),Te=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),me=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=u(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=u(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),ve=u(),A=a("li"),ue=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=u(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),he=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);m=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=h(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);we=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=h(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=h(g),x=r(g,"P",{});var z=i(x);Te=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);me=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=h(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=h(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),ve=h(S),A=r(S,"LI",{});var fe=i(A);ue=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=h(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);he=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,m),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,we),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,Te),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,me),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,ve),e(L,A),e(A,ue),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,he),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Gk(q){let d,_,c,m,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),m=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);m=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,m),e(d,y)},d(l){l&&t(d)}}}function Jk(q){let d,_,c,m,y;return m=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
import tensorflow as tf

tokenizer = XLMTokenizer.from_pretrained("xlm-mlm-en-2048")
model = TFXLMForQuestionAnsweringSimple.from_pretrained("xlm-mlm-en-2048")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> XLMTokenizer, TFXLMForQuestionAnsweringSimple
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = XLMTokenizer.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFXLMForQuestionAnsweringSimple.from_pretrained(<span class="hljs-string">&quot;xlm-mlm-en-2048&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=a("p"),_=o("Example:"),c=u(),v(m.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=h(l),w(m.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),T(m,l,p),y=!0},p:Xe,i(l){y||(F(m.$$.fragment,l),y=!0)},o(l){$(m.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(m,l)}}}function Zk(q){let d,_;return d=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(c){w(d.$$.fragment,c)},m(c,m){T(d,c,m),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function ey(q){let d,_,c,m,y,l,p,C,we,ge,D,ae,Z,x,Te,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,me,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,ve,A,ue,G,ee,ne,P,je,O,he,Pe,g,E,Qe,se,Ue,Ne,z,Se,Be,Re,Ie,Ke,S,R,Ae,Oe,B,De,Ve,fe,Ye,oe,J,Qn,Kd,Pr,Vd,Yd,It,Nr,Gd,Jd,Ar,Zd,ec,Wt,tc,Or,oc,nc,Dr,sc,ac,Sr,rc,ic,lc,Un,dc,Ir,cc,pc,uc,Bn,hc,Na,mc,fc,gc,Ut,Rn,_c,Wr,bc,kc,Kn,Aa,yc,Xr,vc,wc,Oa,Tc,Hr,Fc,$c,jo,Vn,Mc,Qr,xc,Ec,vt,Yn,qc,Ur,zc,Cc,Po,Lc,Zt,jc,Br,Pc,Nc,Rr,Ac,Oc,Dc,No,Gn,Sc,Jn,Ic,Kr,Wc,Xc,$l,eo,Ao,Vr,Zn,Hc,Yr,Qc,Ml,ht,es,Uc,Gr,Bc,Rc,ts,Kc,Da,Vc,Yc,Gc,os,Jc,ns,Zc,ep,tp,wt,ss,op,to,np,Sa,sp,ap,Jr,rp,ip,lp,Oo,dp,Do,xl,oo,So,Zr,as,cp,ei,pp,El,et,rs,up,ti,hp,mp,is,fp,Ia,gp,_p,bp,ls,kp,ds,yp,vp,wp,cs,Tp,Wa,Fp,$p,Mp,mt,ps,xp,no,Ep,Xa,qp,zp,oi,Cp,Lp,jp,Io,Pp,Wo,Np,Xo,ql,so,Ho,ni,us,Ap,si,Op,zl,tt,hs,Dp,ai,Sp,Ip,ms,Wp,Ha,Xp,Hp,Qp,fs,Up,gs,Bp,Rp,Kp,_s,Vp,Qa,Yp,Gp,Jp,Ze,bs,Zp,ao,eu,Ua,tu,ou,ri,nu,su,au,Qo,ru,Uo,iu,Bo,lu,Ro,du,Ko,Cl,ro,Vo,ii,ks,cu,li,pu,Ll,ot,ys,uu,di,hu,mu,vs,fu,Ba,gu,_u,bu,ws,ku,Ts,yu,vu,wu,Fs,Tu,Ra,Fu,$u,Mu,Tt,$s,xu,io,Eu,Ka,qu,zu,ci,Cu,Lu,ju,Yo,Pu,Go,jl,lo,Jo,pi,Ms,Nu,ui,Au,Pl,nt,xs,Ou,hi,Du,Su,Es,Iu,Va,Wu,Xu,Hu,qs,Qu,zs,Uu,Bu,Ru,Cs,Ku,Ya,Vu,Yu,Gu,ft,Ls,Ju,co,Zu,Ga,eh,th,mi,oh,nh,sh,Zo,ah,en,rh,tn,Nl,po,on,fi,js,ih,gi,lh,Al,st,Ps,dh,uo,ch,_i,ph,uh,bi,hh,mh,fh,Ns,gh,Ja,_h,bh,kh,As,yh,Os,vh,wh,Th,Ds,Fh,Za,$h,Mh,xh,gt,Ss,Eh,ho,qh,er,zh,Ch,ki,Lh,jh,Ph,nn,Nh,sn,Ah,an,Ol,mo,rn,yi,Is,Oh,vi,Dh,Dl,at,Ws,Sh,fo,Ih,wi,Wh,Xh,Ti,Hh,Qh,Uh,Xs,Bh,tr,Rh,Kh,Vh,Hs,Yh,Qs,Gh,Jh,Zh,Us,em,or,tm,om,nm,Ft,Bs,sm,go,am,nr,rm,im,Fi,lm,dm,cm,ln,pm,dn,Sl,_o,cn,$i,Rs,um,Mi,hm,Il,rt,Ks,mm,xi,fm,gm,Vs,_m,sr,bm,km,ym,Ys,vm,Gs,wm,Tm,Fm,pn,$m,$t,Js,Mm,bo,xm,ar,Em,qm,Ei,zm,Cm,Lm,un,jm,hn,Wl,ko,mn,qi,Zs,Pm,zi,Nm,Xl,it,ea,Am,Ci,Om,Dm,ta,Sm,rr,Im,Wm,Xm,oa,Hm,na,Qm,Um,Bm,fn,Rm,Mt,sa,Km,yo,Vm,ir,Ym,Gm,Li,Jm,Zm,ef,gn,tf,_n,Hl,vo,bn,ji,aa,of,Pi,nf,Ql,lt,ra,sf,Ni,af,rf,ia,lf,lr,df,cf,pf,la,uf,da,hf,mf,ff,kn,gf,_t,ca,_f,wo,bf,dr,kf,yf,Ai,vf,wf,Tf,yn,Ff,vn,$f,wn,Ul,To,Tn,Oi,pa,Mf,Di,xf,Bl,dt,ua,Ef,Si,qf,zf,ha,Cf,cr,Lf,jf,Pf,ma,Nf,fa,Af,Of,Df,Fn,Sf,xt,ga,If,Fo,Wf,pr,Xf,Hf,Ii,Qf,Uf,Bf,$n,Rf,Mn,Rl,$o,xn,Wi,_a,Kf,Xi,Vf,Kl,ct,ba,Yf,Hi,Gf,Jf,ka,Zf,ur,eg,tg,og,ya,ng,va,sg,ag,rg,En,ig,bt,wa,lg,Mo,dg,hr,cg,pg,Qi,ug,hg,mg,qn,fg,zn,gg,Cn,Vl,xo,Ln,Ui,Ta,_g,Bi,bg,Yl,pt,Fa,kg,Eo,yg,Ri,vg,wg,Ki,Tg,Fg,$g,$a,Mg,mr,xg,Eg,qg,Ma,zg,xa,Cg,Lg,jg,jn,Pg,kt,Ea,Ng,qo,Ag,fr,Og,Dg,Vi,Sg,Ig,Wg,Pn,Xg,Nn,Hg,An,Gl;return l=new ut({}),x=new ut({}),pe=new ut({}),ue=new ie({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"pre_norm",val:" = False"},{name:"layerdrop",val:" = 0.0"},{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"emb_dim"},{anchor:"transformers.FlaubertConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.FlaubertConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.FlaubertConfig.dropout",description:`<strong>dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"dropout"},{anchor:"transformers.FlaubertConfig.attention_dropout",description:`<strong>attention_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for the attention mechanism`,name:"attention_dropout"},{anchor:"transformers.FlaubertConfig.gelu_activation",description:`<strong>gelu_activation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to use a <em>gelu</em> activation instead of <em>relu</em>.`,name:"gelu_activation"},{anchor:"transformers.FlaubertConfig.sinusoidal_embeddings",description:`<strong>sinusoidal_embeddings</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use sinusoidal positional embeddings instead of absolute positional embeddings.`,name:"sinusoidal_embeddings"},{anchor:"transformers.FlaubertConfig.causal",description:`<strong>causal</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the model should behave in a causal manner. Causal models use a triangular attention mask in
order to only attend to the left-side context instead if a bidirectional context.`,name:"causal"},{anchor:"transformers.FlaubertConfig.asm",description:`<strong>asm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use an adaptive log softmax projection layer instead of a linear layer for the prediction
layer.`,name:"asm"},{anchor:"transformers.FlaubertConfig.n_langs",description:`<strong>n_langs</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of languages the model handles. Set to 1 for monolingual models.`,name:"n_langs"},{anchor:"transformers.FlaubertConfig.use_lang_emb",description:`<strong>use_lang_emb</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to use language embeddings. Some models use additional language embeddings, see <a href="http://huggingface.co/transformers/multilingual.html#xlm-language-embeddings" rel="nofollow">the multilingual
models page</a> for information
on how to use them.`,name:"use_lang_emb"},{anchor:"transformers.FlaubertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.FlaubertConfig.embed_init_std",description:`<strong>embed_init_std</strong> (<code>float</code>, <em>optional</em>, defaults to 2048^-0.5) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing the embedding matrices.`,name:"embed_init_std"},{anchor:"transformers.FlaubertConfig.init_std",description:`<strong>init_std</strong> (<code>int</code>, <em>optional</em>, defaults to 50257) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices except the
embedding matrices.`,name:"init_std"},{anchor:"transformers.FlaubertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.FlaubertConfig.bos_index",description:`<strong>bos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The index of the beginning of sentence token in the vocabulary.`,name:"bos_index"},{anchor:"transformers.FlaubertConfig.eos_index",description:`<strong>eos_index</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The index of the end of sentence token in the vocabulary.`,name:"eos_index"},{anchor:"transformers.FlaubertConfig.pad_index",description:`<strong>pad_index</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The index of the padding token in the vocabulary.`,name:"pad_index"},{anchor:"transformers.FlaubertConfig.unk_index",description:`<strong>unk_index</strong> (<code>int</code>, <em>optional</em>, defaults to 3) &#x2014;
The index of the unknown token in the vocabulary.`,name:"unk_index"},{anchor:"transformers.FlaubertConfig.mask_index",description:`<strong>mask_index</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
The index of the masking token in the vocabulary.`,name:"mask_index"},{anchor:"transformers.FlaubertConfig.is_encoder(bool,",description:`<strong>is_encoder(<code>bool</code>,</strong> <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the initialized model should be a transformer encoder or decoder as seen in Vaswani et al.`,name:"is_encoder(bool,"},{anchor:"transformers.FlaubertConfig.summary_type",description:`<strong>summary_type</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201C;first&#x201D;) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.FlaubertConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.FlaubertConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary. Used in the sequence classification and multiple choice models.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.FlaubertConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.FlaubertConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Used in the sequence classification and multiple choice models.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.FlaubertConfig.start_n_top",description:`<strong>start_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"start_n_top"},{anchor:"transformers.FlaubertConfig.end_n_top",description:`<strong>end_n_top</strong> (<code>int</code>, <em>optional</em>, defaults to 5) &#x2014;
Used in the SQuAD evaluation script.`,name:"end_n_top"},{anchor:"transformers.FlaubertConfig.mask_token_id",description:`<strong>mask_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
Model agnostic parameter to identify masked tokens when generating text in an MLM context.`,name:"mask_token_id"},{anchor:"transformers.FlaubertConfig.lang_id",description:`<strong>lang_id</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/configuration_flaubert.py#L34"}}),De=new ut({}),Qn=new ie({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"do_lowercase",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Vocabulary file.`,name:"vocab_file"},{anchor:"transformers.FlaubertTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Merges file.`,name:"merges_file"},{anchor:"transformers.FlaubertTokenizer.do_lowercase",description:`<strong>do_lowercase</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Controls lower casing.`,name:"do_lowercase"},{anchor:"transformers.FlaubertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.FlaubertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.FlaubertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.FlaubertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.FlaubertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.FlaubertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;special1&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.FlaubertTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;special0&gt;&quot;,&quot;&lt;special1&gt;&quot;,&quot;&lt;special2&gt;&quot;,&quot;&lt;special3&gt;&quot;,&quot;&lt;special4&gt;&quot;,&quot;&lt;special5&gt;&quot;,&quot;&lt;special6&gt;&quot;,&quot;&lt;special7&gt;&quot;,&quot;&lt;special8&gt;&quot;,&quot;&lt;special9&gt;&quot;]</code>) &#x2014;
List of additional special tokens.`,name:"additional_special_tokens"},{anchor:"transformers.FlaubertTokenizer.lang2id",description:`<strong>lang2id</strong> (<code>Dict[str, int]</code>, <em>optional</em>) &#x2014;
Dictionary mapping languages string identifiers to their IDs.`,name:"lang2id"},{anchor:"transformers.FlaubertTokenizer.id2lang",description:`<strong>id2lang</strong> (<code>Dict[int, str]</code>, <em>optional</em>) &#x2014;
Dictionary mapping language IDs to their string identifiers.`,name:"id2lang"},{anchor:"transformers.FlaubertTokenizer.do_lowercase_and_remove_accent",description:`<strong>do_lowercase_and_remove_accent</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to lowercase and remove accents when tokenizing.`,name:"do_lowercase_and_remove_accent"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/tokenization_flaubert.py#L165"}}),Rn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/tokenization_flaubert.py#L472",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new ie({props:{name:"convert_tokens_to_string",anchor:"transformers.FlaubertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/tokenization_flaubert.py#L466"}}),Yn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/tokenization_flaubert.py#L529",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new We({props:{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[uk]},$$scope:{ctx:q}}}),Gn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/tokenization_flaubert.py#L500",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zn=new ut({}),es=new ie({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L133"}}),ss=new ie({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <code>attention_mask</code> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.FlaubertModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary strings to <code>torch.FloatTensor</code> that contains precomputed hidden-states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding. The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L145",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Je({props:{$$slots:{default:[hk]},$$scope:{ctx:q}}}),Do=new We({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[mk]},$$scope:{ctx:q}}}),as=new ut({}),rs=new ie({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L324"}}),ps=new ie({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Je({props:{$$slots:{default:[fk]},$$scope:{ctx:q}}}),Wo=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[gk]},$$scope:{ctx:q}}}),Xo=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[_k]},$$scope:{ctx:q}}}),us=new ut({}),hs=new ie({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L346"}}),bs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForSequenceClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForSequenceClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new Je({props:{$$slots:{default:[bk]},$$scope:{ctx:q}}}),Uo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[kk]},$$scope:{ctx:q}}}),Bo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[yk]},$$scope:{ctx:q}}}),Ro=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[vk]},$$scope:{ctx:q}}}),Ko=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[wk]},$$scope:{ctx:q}}}),ks=new ut({}),ys=new ie({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L434"}}),$s=new ie({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForMultipleChoice.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForMultipleChoice.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Je({props:{$$slots:{default:[Tk]},$$scope:{ctx:q}}}),Go=new We({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[Fk]},$$scope:{ctx:q}}}),Ms=new ut({}),xs=new ie({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L368"}}),Ls=new ie({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForTokenClassification.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForTokenClassification.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new Je({props:{$$slots:{default:[$k]},$$scope:{ctx:q}}}),en=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[Mk]},$$scope:{ctx:q}}}),tn=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[xk]},$$scope:{ctx:q}}}),js=new ut({}),Ps=new ie({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L390"}}),Ss=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new Je({props:{$$slots:{default:[Ek]},$$scope:{ctx:q}}}),sn=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[qk]},$$scope:{ctx:q}}}),an=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[zk]},$$scope:{ctx:q}}}),Is=new ut({}),Ws=new ie({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_flaubert.py#L412"}}),Bs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.langs",description:`<strong>langs</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.lengths",description:`<strong>lengths</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cache",description:`<strong>cache</strong> (<code>Dict[str, torch.FloatTensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.is_impossible",description:`<strong>is_impossible</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels whether a question has an answer or no answer (SQuAD 2.0)`,name:"is_impossible"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.cls_index",description:`<strong>cls_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the classification token to use as input for computing plausibility of the
answer.`,name:"cls_index"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.p_mask",description:`<strong>p_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Optional mask of tokens which can&#x2019;t be in answers (e.g. [CLS], [PAD], &#x2026;). 1.0 means token should be
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned if both <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Classification loss as the sum of start token, end token (and is_impossible if provided) classification
losses.</p>
</li>
<li>
<p><strong>start_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>start_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top config.start_n_top start token possibilities (beam-search).</p>
</li>
<li>
<p><strong>end_top_log_probs</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities
(beam-search).</p>
</li>
<li>
<p><strong>end_top_index</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, config.start_n_top * config.end_n_top)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Indices for the top <code>config.start_n_top * config.end_n_top</code> end token possibilities (beam-search).</p>
</li>
<li>
<p><strong>cls_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>, returned if <code>start_positions</code> or <code>end_positions</code> is not provided) \u2014 Log probabilities for the <code>is_impossible</code> label of the answers.</p>
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
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Je({props:{$$slots:{default:[Ck]},$$scope:{ctx:q}}}),dn=new We({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[Lk]},$$scope:{ctx:q}}}),Rs=new ut({}),Ks=new ie({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238"}}),pn=new Je({props:{$$slots:{default:[jk]},$$scope:{ctx:q}}}),Js=new ie({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L243",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),un=new Je({props:{$$slots:{default:[Pk]},$$scope:{ctx:q}}}),hn=new We({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[Nk]},$$scope:{ctx:q}}}),Zs=new ut({}),ea=new ie({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L772"}}),fn=new Je({props:{$$slots:{default:[Ak]},$$scope:{ctx:q}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> for tokens that are <strong>not masked</strong>,</li>
<li><code>0</code> for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>0</code> corresponds to a <em>sentence A</em> token,</li>
<li><code>1</code> corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>:`,name:"lengths"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>tf.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li><code>1</code> indicates the head is <strong>not masked</strong>,</li>
<li><code>0</code> indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L801",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig"
>FlaubertConfig</a>) and inputs.</p>
<ul>
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
<p><code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new Je({props:{$$slots:{default:[Ok]},$$scope:{ctx:q}}}),_n=new We({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[Dk]},$$scope:{ctx:q}}}),aa=new ut({}),ra=new ie({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L865"}}),kn=new Je({props:{$$slots:{default:[Sk]},$$scope:{ctx:q}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_tf_xlm.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new Je({props:{$$slots:{default:[Ik]},$$scope:{ctx:q}}}),vn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Wk]},$$scope:{ctx:q}}}),wn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[Xk]},$$scope:{ctx:q}}}),pa=new ut({}),ua=new ie({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L910"}}),Fn=new Je({props:{$$slots:{default:[Hk]},$$scope:{ctx:q}}}),ga=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_tf_xlm.py#L1017",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new Je({props:{$$slots:{default:[Qk]},$$scope:{ctx:q}}}),Mn=new We({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Uk]},$$scope:{ctx:q}}}),_a=new ut({}),ba=new ie({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L895"}}),En=new Je({props:{$$slots:{default:[Bk]},$$scope:{ctx:q}}}),wa=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForTokenClassification.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForTokenClassification.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_tf_xlm.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qn=new Je({props:{$$slots:{default:[Rk]},$$scope:{ctx:q}}}),zn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Kk]},$$scope:{ctx:q}}}),Cn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Vk]},$$scope:{ctx:q}}}),Ta=new ut({}),Fa=new ie({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/flaubert/modeling_tf_flaubert.py#L880"}}),jn=new Je({props:{$$slots:{default:[Yk]},$$scope:{ctx:q}}}),Ea=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.23.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.23.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.langs",description:`<strong>langs</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
A parallel sequence of tokens to be used to indicate the language of each token in the input. Indices are
languages ids which can be obtained from the language names by using two conversion mappings provided in
the configuration of the model (only provided for multilingual models). More precisely, the <em>language name
to language id</em> mapping is in <code>model.config.lang2id</code> (which is a dictionary string to int) and the
<em>language id to language name</em> mapping is in <code>model.config.id2lang</code> (dictionary int to string).</p>
<p>See usage examples detailed in the <a href="../multilingual">multilingual documentation</a>.`,name:"langs"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.lengths",description:`<strong>lengths</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Length of each sentence that can be used to avoid performing attention on padding token indices. You can
also use <em>attention_mask</em> for the same result (see above), kept here for compatibility. Indices selected in
<code>[0, ..., input_ids.size(-1)]</code>.`,name:"lengths"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.cache",description:`<strong>cache</strong> (<code>Dict[str, tf.Tensor]</code>, <em>optional</em>) &#x2014;
Dictionary string to <code>torch.FloatTensor</code> that contains precomputed hidden states (key and values in the
attention blocks) as computed by the model (see <code>cache</code> output below). Can be used to speed up sequential
decoding.</p>
<p>The dictionary object will be modified in-place during the forward pass to add newly computed
hidden-states.`,name:"cache"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.23.0/src/transformers/models/xlm/modeling_tf_xlm.py#L1226",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMConfig"
>XLMConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.23.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Je({props:{$$slots:{default:[Gk]},$$scope:{ctx:q}}}),Nn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Jk]},$$scope:{ctx:q}}}),An=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Zk]},$$scope:{ctx:q}}}),{c(){d=a("meta"),_=u(),c=a("h1"),m=a("a"),y=a("span"),v(l.$$.fragment),p=u(),C=a("span"),we=o("FlauBERT"),ge=u(),D=a("h2"),ae=a("a"),Z=a("span"),v(x.$$.fragment),Te=u(),H=a("span"),Fe=o("Overview"),_e=u(),I=a("p"),$e=o("The FlauBERT model was proposed in the paper "),le=a("a"),K=o("FlauBERT: Unsupervised Language Model Pre-training for French"),Me=o(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),be=u(),W=a("p"),xe=o("The abstract from the paper is the following:"),ke=u(),X=a("p"),me=a("em"),Ee=o(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),te=u(),L=a("p"),N=o("This model was contributed by "),de=a("a"),V=o("formiel"),qe=o(". The original code can be found "),ce=a("a"),Y=o("here"),ze=o("."),ye=u(),j=a("h2"),re=a("a"),Q=a("span"),v(pe.$$.fragment),Ce=u(),U=a("span"),Le=o("FlaubertConfig"),ve=u(),A=a("div"),v(ue.$$.fragment),G=u(),ee=a("p"),ne=o("This is the configuration class to store the configuration of a "),P=a("a"),je=o("FlaubertModel"),O=o(" or a "),he=a("a"),Pe=o("TFFlaubertModel"),g=o(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=a("a"),Qe=o("flaubert/flaubert_base_uncased"),se=o(" architecture."),Ue=u(),Ne=a("p"),z=o("Configuration objects inherit from "),Se=a("a"),Be=o("PretrainedConfig"),Re=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),Ke=o("PretrainedConfig"),S=o(" for more information."),R=u(),Ae=a("h2"),Oe=a("a"),B=a("span"),v(De.$$.fragment),Ve=u(),fe=a("span"),Ye=o("FlaubertTokenizer"),oe=u(),J=a("div"),v(Qn.$$.fragment),Kd=u(),Pr=a("p"),Vd=o("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Yd=u(),It=a("ul"),Nr=a("li"),Gd=o("Moses preprocessing and tokenization."),Jd=u(),Ar=a("li"),Zd=o("Normalizing all inputs text."),ec=u(),Wt=a("li"),tc=o("The arguments "),Or=a("code"),oc=o("special_tokens"),nc=o(" and the function "),Dr=a("code"),sc=o("set_special_tokens"),ac=o(`, can be used to add additional symbols (like
\u201D`),Sr=a("strong"),rc=o("classify"),ic=o("\u201D) to a vocabulary."),lc=u(),Un=a("li"),dc=o("The argument "),Ir=a("code"),cc=o("do_lowercase"),pc=o(" controls lower casing (automatically set for pretrained vocabularies)."),uc=u(),Bn=a("p"),hc=o("This tokenizer inherits from "),Na=a("a"),mc=o("PreTrainedTokenizer"),fc=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gc=u(),Ut=a("div"),v(Rn.$$.fragment),_c=u(),Wr=a("p"),bc=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),kc=u(),Kn=a("ul"),Aa=a("li"),yc=o("single sequence: "),Xr=a("code"),vc=o("<s> X </s>"),wc=u(),Oa=a("li"),Tc=o("pair of sequences: "),Hr=a("code"),Fc=o("<s> A </s> B </s>"),$c=u(),jo=a("div"),v(Vn.$$.fragment),Mc=u(),Qr=a("p"),xc=o("Converts a sequence of tokens (string) in a single string."),Ec=u(),vt=a("div"),v(Yn.$$.fragment),qc=u(),Ur=a("p"),zc=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),Cc=u(),v(Po.$$.fragment),Lc=u(),Zt=a("p"),jc=o("If "),Br=a("code"),Pc=o("token_ids_1"),Nc=o(" is "),Rr=a("code"),Ac=o("None"),Oc=o(", this method only returns the first portion of the mask (0s)."),Dc=u(),No=a("div"),v(Gn.$$.fragment),Sc=u(),Jn=a("p"),Ic=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Kr=a("code"),Wc=o("prepare_for_model"),Xc=o(" method."),$l=u(),eo=a("h2"),Ao=a("a"),Vr=a("span"),v(Zn.$$.fragment),Hc=u(),Yr=a("span"),Qc=o("FlaubertModel"),Ml=u(),ht=a("div"),v(es.$$.fragment),Uc=u(),Gr=a("p"),Bc=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Rc=u(),ts=a("p"),Kc=o("This model inherits from "),Da=a("a"),Vc=o("PreTrainedModel"),Yc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc=u(),os=a("p"),Jc=o("This model is also a PyTorch "),ns=a("a"),Zc=o("torch.nn.Module"),ep=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp=u(),wt=a("div"),v(ss.$$.fragment),op=u(),to=a("p"),np=o("The "),Sa=a("a"),sp=o("FlaubertModel"),ap=o(" forward method, overrides the "),Jr=a("code"),rp=o("__call__"),ip=o(" special method."),lp=u(),v(Oo.$$.fragment),dp=u(),v(Do.$$.fragment),xl=u(),oo=a("h2"),So=a("a"),Zr=a("span"),v(as.$$.fragment),cp=u(),ei=a("span"),pp=o("FlaubertWithLMHeadModel"),El=u(),et=a("div"),v(rs.$$.fragment),up=u(),ti=a("p"),hp=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),mp=u(),is=a("p"),fp=o("This model inherits from "),Ia=a("a"),gp=o("PreTrainedModel"),_p=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=u(),ls=a("p"),kp=o("This model is also a PyTorch "),ds=a("a"),yp=o("torch.nn.Module"),vp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wp=u(),cs=a("p"),Tp=o("This class overrides "),Wa=a("a"),Fp=o("XLMWithLMHeadModel"),$p=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Mp=u(),mt=a("div"),v(ps.$$.fragment),xp=u(),no=a("p"),Ep=o("The "),Xa=a("a"),qp=o("XLMWithLMHeadModel"),zp=o(" forward method, overrides the "),oi=a("code"),Cp=o("__call__"),Lp=o(" special method."),jp=u(),v(Io.$$.fragment),Pp=u(),v(Wo.$$.fragment),Np=u(),v(Xo.$$.fragment),ql=u(),so=a("h2"),Ho=a("a"),ni=a("span"),v(us.$$.fragment),Ap=u(),si=a("span"),Op=o("FlaubertForSequenceClassification"),zl=u(),tt=a("div"),v(hs.$$.fragment),Dp=u(),ai=a("p"),Sp=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Ip=u(),ms=a("p"),Wp=o("This model inherits from "),Ha=a("a"),Xp=o("PreTrainedModel"),Hp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp=u(),fs=a("p"),Up=o("This model is also a PyTorch "),gs=a("a"),Bp=o("torch.nn.Module"),Rp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kp=u(),_s=a("p"),Vp=o("This class overrides "),Qa=a("a"),Yp=o("XLMForSequenceClassification"),Gp=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Jp=u(),Ze=a("div"),v(bs.$$.fragment),Zp=u(),ao=a("p"),eu=o("The "),Ua=a("a"),tu=o("XLMForSequenceClassification"),ou=o(" forward method, overrides the "),ri=a("code"),nu=o("__call__"),su=o(" special method."),au=u(),v(Qo.$$.fragment),ru=u(),v(Uo.$$.fragment),iu=u(),v(Bo.$$.fragment),lu=u(),v(Ro.$$.fragment),du=u(),v(Ko.$$.fragment),Cl=u(),ro=a("h2"),Vo=a("a"),ii=a("span"),v(ks.$$.fragment),cu=u(),li=a("span"),pu=o("FlaubertForMultipleChoice"),Ll=u(),ot=a("div"),v(ys.$$.fragment),uu=u(),di=a("p"),hu=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),mu=u(),vs=a("p"),fu=o("This model inherits from "),Ba=a("a"),gu=o("PreTrainedModel"),_u=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu=u(),ws=a("p"),ku=o("This model is also a PyTorch "),Ts=a("a"),yu=o("torch.nn.Module"),vu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu=u(),Fs=a("p"),Tu=o("This class overrides "),Ra=a("a"),Fu=o("XLMForMultipleChoice"),$u=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Mu=u(),Tt=a("div"),v($s.$$.fragment),xu=u(),io=a("p"),Eu=o("The "),Ka=a("a"),qu=o("XLMForMultipleChoice"),zu=o(" forward method, overrides the "),ci=a("code"),Cu=o("__call__"),Lu=o(" special method."),ju=u(),v(Yo.$$.fragment),Pu=u(),v(Go.$$.fragment),jl=u(),lo=a("h2"),Jo=a("a"),pi=a("span"),v(Ms.$$.fragment),Nu=u(),ui=a("span"),Au=o("FlaubertForTokenClassification"),Pl=u(),nt=a("div"),v(xs.$$.fragment),Ou=u(),hi=a("p"),Du=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Su=u(),Es=a("p"),Iu=o("This model inherits from "),Va=a("a"),Wu=o("PreTrainedModel"),Xu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu=u(),qs=a("p"),Qu=o("This model is also a PyTorch "),zs=a("a"),Uu=o("torch.nn.Module"),Bu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ru=u(),Cs=a("p"),Ku=o("This class overrides "),Ya=a("a"),Vu=o("XLMForTokenClassification"),Yu=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gu=u(),ft=a("div"),v(Ls.$$.fragment),Ju=u(),co=a("p"),Zu=o("The "),Ga=a("a"),eh=o("XLMForTokenClassification"),th=o(" forward method, overrides the "),mi=a("code"),oh=o("__call__"),nh=o(" special method."),sh=u(),v(Zo.$$.fragment),ah=u(),v(en.$$.fragment),rh=u(),v(tn.$$.fragment),Nl=u(),po=a("h2"),on=a("a"),fi=a("span"),v(js.$$.fragment),ih=u(),gi=a("span"),lh=o("FlaubertForQuestionAnsweringSimple"),Al=u(),st=a("div"),v(Ps.$$.fragment),dh=u(),uo=a("p"),ch=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_i=a("code"),ph=o("span start logits"),uh=o(" and "),bi=a("code"),hh=o("span end logits"),mh=o(")."),fh=u(),Ns=a("p"),gh=o("This model inherits from "),Ja=a("a"),_h=o("PreTrainedModel"),bh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh=u(),As=a("p"),yh=o("This model is also a PyTorch "),Os=a("a"),vh=o("torch.nn.Module"),wh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th=u(),Ds=a("p"),Fh=o("This class overrides "),Za=a("a"),$h=o("XLMForQuestionAnsweringSimple"),Mh=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xh=u(),gt=a("div"),v(Ss.$$.fragment),Eh=u(),ho=a("p"),qh=o("The "),er=a("a"),zh=o("XLMForQuestionAnsweringSimple"),Ch=o(" forward method, overrides the "),ki=a("code"),Lh=o("__call__"),jh=o(" special method."),Ph=u(),v(nn.$$.fragment),Nh=u(),v(sn.$$.fragment),Ah=u(),v(an.$$.fragment),Ol=u(),mo=a("h2"),rn=a("a"),yi=a("span"),v(Is.$$.fragment),Oh=u(),vi=a("span"),Dh=o("FlaubertForQuestionAnswering"),Dl=u(),at=a("div"),v(Ws.$$.fragment),Sh=u(),fo=a("p"),Ih=o(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),wi=a("code"),Wh=o("span start logits"),Xh=o(" and "),Ti=a("code"),Hh=o("span end logits"),Qh=o(")."),Uh=u(),Xs=a("p"),Bh=o("This model inherits from "),tr=a("a"),Rh=o("PreTrainedModel"),Kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vh=u(),Hs=a("p"),Yh=o("This model is also a PyTorch "),Qs=a("a"),Gh=o("torch.nn.Module"),Jh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zh=u(),Us=a("p"),em=o("This class overrides "),or=a("a"),tm=o("XLMForQuestionAnswering"),om=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),nm=u(),Ft=a("div"),v(Bs.$$.fragment),sm=u(),go=a("p"),am=o("The "),nr=a("a"),rm=o("XLMForQuestionAnswering"),im=o(" forward method, overrides the "),Fi=a("code"),lm=o("__call__"),dm=o(" special method."),cm=u(),v(ln.$$.fragment),pm=u(),v(dn.$$.fragment),Sl=u(),_o=a("h2"),cn=a("a"),$i=a("span"),v(Rs.$$.fragment),um=u(),Mi=a("span"),hm=o("TFFlaubertModel"),Il=u(),rt=a("div"),v(Ks.$$.fragment),mm=u(),xi=a("p"),fm=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),gm=u(),Vs=a("p"),_m=o("This model inherits from "),sr=a("a"),bm=o("TFPreTrainedModel"),km=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ym=u(),Ys=a("p"),vm=o("This model is also a "),Gs=a("a"),wm=o("tf.keras.Model"),Tm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fm=u(),v(pn.$$.fragment),$m=u(),$t=a("div"),v(Js.$$.fragment),Mm=u(),bo=a("p"),xm=o("The "),ar=a("a"),Em=o("TFFlaubertModel"),qm=o(" forward method, overrides the "),Ei=a("code"),zm=o("__call__"),Cm=o(" special method."),Lm=u(),v(un.$$.fragment),jm=u(),v(hn.$$.fragment),Wl=u(),ko=a("h2"),mn=a("a"),qi=a("span"),v(Zs.$$.fragment),Pm=u(),zi=a("span"),Nm=o("TFFlaubertWithLMHeadModel"),Xl=u(),it=a("div"),v(ea.$$.fragment),Am=u(),Ci=a("p"),Om=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Dm=u(),ta=a("p"),Sm=o("This model inherits from "),rr=a("a"),Im=o("TFPreTrainedModel"),Wm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xm=u(),oa=a("p"),Hm=o("This model is also a "),na=a("a"),Qm=o("tf.keras.Model"),Um=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bm=u(),v(fn.$$.fragment),Rm=u(),Mt=a("div"),v(sa.$$.fragment),Km=u(),yo=a("p"),Vm=o("The "),ir=a("a"),Ym=o("TFFlaubertWithLMHeadModel"),Gm=o(" forward method, overrides the "),Li=a("code"),Jm=o("__call__"),Zm=o(" special method."),ef=u(),v(gn.$$.fragment),tf=u(),v(_n.$$.fragment),Hl=u(),vo=a("h2"),bn=a("a"),ji=a("span"),v(aa.$$.fragment),of=u(),Pi=a("span"),nf=o("TFFlaubertForSequenceClassification"),Ql=u(),lt=a("div"),v(ra.$$.fragment),sf=u(),Ni=a("p"),af=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),rf=u(),ia=a("p"),lf=o("This model inherits from "),lr=a("a"),df=o("TFPreTrainedModel"),cf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf=u(),la=a("p"),uf=o("This model is also a "),da=a("a"),hf=o("tf.keras.Model"),mf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff=u(),v(kn.$$.fragment),gf=u(),_t=a("div"),v(ca.$$.fragment),_f=u(),wo=a("p"),bf=o("The "),dr=a("a"),kf=o("TFXLMForSequenceClassification"),yf=o(" forward method, overrides the "),Ai=a("code"),vf=o("__call__"),wf=o(" special method."),Tf=u(),v(yn.$$.fragment),Ff=u(),v(vn.$$.fragment),$f=u(),v(wn.$$.fragment),Ul=u(),To=a("h2"),Tn=a("a"),Oi=a("span"),v(pa.$$.fragment),Mf=u(),Di=a("span"),xf=o("TFFlaubertForMultipleChoice"),Bl=u(),dt=a("div"),v(ua.$$.fragment),Ef=u(),Si=a("p"),qf=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zf=u(),ha=a("p"),Cf=o("This model inherits from "),cr=a("a"),Lf=o("TFPreTrainedModel"),jf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf=u(),ma=a("p"),Nf=o("This model is also a "),fa=a("a"),Af=o("tf.keras.Model"),Of=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=u(),v(Fn.$$.fragment),Sf=u(),xt=a("div"),v(ga.$$.fragment),If=u(),Fo=a("p"),Wf=o("The "),pr=a("a"),Xf=o("TFXLMForMultipleChoice"),Hf=o(" forward method, overrides the "),Ii=a("code"),Qf=o("__call__"),Uf=o(" special method."),Bf=u(),v($n.$$.fragment),Rf=u(),v(Mn.$$.fragment),Rl=u(),$o=a("h2"),xn=a("a"),Wi=a("span"),v(_a.$$.fragment),Kf=u(),Xi=a("span"),Vf=o("TFFlaubertForTokenClassification"),Kl=u(),ct=a("div"),v(ba.$$.fragment),Yf=u(),Hi=a("p"),Gf=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jf=u(),ka=a("p"),Zf=o("This model inherits from "),ur=a("a"),eg=o("TFPreTrainedModel"),tg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og=u(),ya=a("p"),ng=o("This model is also a "),va=a("a"),sg=o("tf.keras.Model"),ag=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rg=u(),v(En.$$.fragment),ig=u(),bt=a("div"),v(wa.$$.fragment),lg=u(),Mo=a("p"),dg=o("The "),hr=a("a"),cg=o("TFXLMForTokenClassification"),pg=o(" forward method, overrides the "),Qi=a("code"),ug=o("__call__"),hg=o(" special method."),mg=u(),v(qn.$$.fragment),fg=u(),v(zn.$$.fragment),gg=u(),v(Cn.$$.fragment),Vl=u(),xo=a("h2"),Ln=a("a"),Ui=a("span"),v(Ta.$$.fragment),_g=u(),Bi=a("span"),bg=o("TFFlaubertForQuestionAnsweringSimple"),Yl=u(),pt=a("div"),v(Fa.$$.fragment),kg=u(),Eo=a("p"),yg=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ri=a("code"),vg=o("span start logits"),wg=o(" and "),Ki=a("code"),Tg=o("span end logits"),Fg=o(")."),$g=u(),$a=a("p"),Mg=o("This model inherits from "),mr=a("a"),xg=o("TFPreTrainedModel"),Eg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg=u(),Ma=a("p"),zg=o("This model is also a "),xa=a("a"),Cg=o("tf.keras.Model"),Lg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jg=u(),v(jn.$$.fragment),Pg=u(),kt=a("div"),v(Ea.$$.fragment),Ng=u(),qo=a("p"),Ag=o("The "),fr=a("a"),Og=o("TFXLMForQuestionAnsweringSimple"),Dg=o(" forward method, overrides the "),Vi=a("code"),Sg=o("__call__"),Ig=o(" special method."),Wg=u(),v(Pn.$$.fragment),Xg=u(),v(Nn.$$.fragment),Hg=u(),v(An.$$.fragment),this.h()},l(s){const k=ck('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=h(s),c=r(s,"H1",{class:!0});var qa=i(c);m=r(qa,"A",{id:!0,class:!0,href:!0});var Yi=i(m);y=r(Yi,"SPAN",{});var Gi=i(y);w(l.$$.fragment,Gi),Gi.forEach(t),Yi.forEach(t),p=h(qa),C=r(qa,"SPAN",{});var Ji=i(C);we=n(Ji,"FlauBERT"),Ji.forEach(t),qa.forEach(t),ge=h(s),D=r(s,"H2",{class:!0});var za=i(D);ae=r(za,"A",{id:!0,class:!0,href:!0});var Zi=i(ae);Z=r(Zi,"SPAN",{});var el=i(Z);w(x.$$.fragment,el),el.forEach(t),Zi.forEach(t),Te=h(za),H=r(za,"SPAN",{});var tl=i(H);Fe=n(tl,"Overview"),tl.forEach(t),za.forEach(t),_e=h(s),I=r(s,"P",{});var Ca=i(I);$e=n(Ca,"The FlauBERT model was proposed in the paper "),le=r(Ca,"A",{href:!0,rel:!0});var ol=i(le);K=n(ol,"FlauBERT: Unsupervised Language Model Pre-training for French"),ol.forEach(t),Me=n(Ca,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),Ca.forEach(t),be=h(s),W=r(s,"P",{});var nl=i(W);xe=n(nl,"The abstract from the paper is the following:"),nl.forEach(t),ke=h(s),X=r(s,"P",{});var sl=i(X);me=r(sl,"EM",{});var al=i(me);Ee=n(al,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
Processing (NLP) tasks. Leveraging the huge amount of unlabeled texts nowadays available, they provide an efficient way
to pre-train continuous word representations that can be fine-tuned for a downstream task, along with their
contextualization at the sentence level. This has been widely demonstrated for English using contextualized
representations (Dai and Le, 2015; Peters et al., 2018; Howard and Ruder, 2018; Radford et al., 2018; Devlin et al.,
2019; Yang et al., 2019b). In this paper, we introduce and share FlauBERT, a model learned on a very large and
heterogeneous French corpus. Models of different sizes are trained using the new CNRS (French National Centre for
Scientific Research) Jean Zay supercomputer. We apply our French language models to diverse NLP tasks (text
classification, paraphrasing, natural language inference, parsing, word sense disambiguation) and show that most of the
time they outperform other pretraining approaches. Different versions of FlauBERT as well as a unified evaluation
protocol for the downstream tasks, called FLUE (French Language Understanding Evaluation), are shared to the research
community for further reproducible experiments in French NLP.`),al.forEach(t),sl.forEach(t),te=h(s),L=r(s,"P",{});var zo=i(L);N=n(zo,"This model was contributed by "),de=r(zo,"A",{href:!0,rel:!0});var rl=i(de);V=n(rl,"formiel"),rl.forEach(t),qe=n(zo,". The original code can be found "),ce=r(zo,"A",{href:!0,rel:!0});var il=i(ce);Y=n(il,"here"),il.forEach(t),ze=n(zo,"."),zo.forEach(t),ye=h(s),j=r(s,"H2",{class:!0});var La=i(j);re=r(La,"A",{id:!0,class:!0,href:!0});var ll=i(re);Q=r(ll,"SPAN",{});var dl=i(Q);w(pe.$$.fragment,dl),dl.forEach(t),ll.forEach(t),Ce=h(La),U=r(La,"SPAN",{});var cl=i(U);Le=n(cl,"FlaubertConfig"),cl.forEach(t),La.forEach(t),ve=h(s),A=r(s,"DIV",{class:!0});var Co=i(A);w(ue.$$.fragment,Co),G=h(Co),ee=r(Co,"P",{});var Xt=i(ee);ne=n(Xt,"This is the configuration class to store the configuration of a "),P=r(Xt,"A",{href:!0});var pl=i(P);je=n(pl,"FlaubertModel"),pl.forEach(t),O=n(Xt," or a "),he=r(Xt,"A",{href:!0});var ul=i(he);Pe=n(ul,"TFFlaubertModel"),ul.forEach(t),g=n(Xt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=r(Xt,"A",{href:!0,rel:!0});var hl=i(E);Qe=n(hl,"flaubert/flaubert_base_uncased"),hl.forEach(t),se=n(Xt," architecture."),Xt.forEach(t),Ue=h(Co),Ne=r(Co,"P",{});var Lo=i(Ne);z=n(Lo,"Configuration objects inherit from "),Se=r(Lo,"A",{href:!0});var ml=i(Se);Be=n(ml,"PretrainedConfig"),ml.forEach(t),Re=n(Lo,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(Lo,"A",{href:!0});var fl=i(Ie);Ke=n(fl,"PretrainedConfig"),fl.forEach(t),S=n(Lo," for more information."),Lo.forEach(t),Co.forEach(t),R=h(s),Ae=r(s,"H2",{class:!0});var ja=i(Ae);Oe=r(ja,"A",{id:!0,class:!0,href:!0});var gl=i(Oe);B=r(gl,"SPAN",{});var _l=i(B);w(De.$$.fragment,_l),_l.forEach(t),gl.forEach(t),Ve=h(ja),fe=r(ja,"SPAN",{});var bl=i(fe);Ye=n(bl,"FlaubertTokenizer"),bl.forEach(t),ja.forEach(t),oe=h(s),J=r(s,"DIV",{class:!0});var Ge=i(J);w(Qn.$$.fragment,Ge),Kd=h(Ge),Pr=r(Ge,"P",{});var kl=i(Pr);Vd=n(kl,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),kl.forEach(t),Yd=h(Ge),It=r(Ge,"UL",{});var Ht=i(It);Nr=r(Ht,"LI",{});var yl=i(Nr);Gd=n(yl,"Moses preprocessing and tokenization."),yl.forEach(t),Jd=h(Ht),Ar=r(Ht,"LI",{});var vl=i(Ar);Zd=n(vl,"Normalizing all inputs text."),vl.forEach(t),ec=h(Ht),Wt=r(Ht,"LI",{});var Qt=i(Wt);tc=n(Qt,"The arguments "),Or=r(Qt,"CODE",{});var wl=i(Or);oc=n(wl,"special_tokens"),wl.forEach(t),nc=n(Qt," and the function "),Dr=r(Qt,"CODE",{});var Tl=i(Dr);sc=n(Tl,"set_special_tokens"),Tl.forEach(t),ac=n(Qt,`, can be used to add additional symbols (like
\u201D`),Sr=r(Qt,"STRONG",{});var Fl=i(Sr);rc=n(Fl,"classify"),Fl.forEach(t),ic=n(Qt,"\u201D) to a vocabulary."),Qt.forEach(t),lc=h(Ht),Un=r(Ht,"LI",{});var Pa=i(Un);dc=n(Pa,"The argument "),Ir=r(Pa,"CODE",{});var Bg=i(Ir);cc=n(Bg,"do_lowercase"),Bg.forEach(t),pc=n(Pa," controls lower casing (automatically set for pretrained vocabularies)."),Pa.forEach(t),Ht.forEach(t),uc=h(Ge),Bn=r(Ge,"P",{});var Jl=i(Bn);hc=n(Jl,"This tokenizer inherits from "),Na=r(Jl,"A",{href:!0});var Rg=i(Na);mc=n(Rg,"PreTrainedTokenizer"),Rg.forEach(t),fc=n(Jl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jl.forEach(t),gc=h(Ge),Ut=r(Ge,"DIV",{class:!0});var gr=i(Ut);w(Rn.$$.fragment,gr),_c=h(gr),Wr=r(gr,"P",{});var Kg=i(Wr);bc=n(Kg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),Kg.forEach(t),kc=h(gr),Kn=r(gr,"UL",{});var Zl=i(Kn);Aa=r(Zl,"LI",{});var Qg=i(Aa);yc=n(Qg,"single sequence: "),Xr=r(Qg,"CODE",{});var Vg=i(Xr);vc=n(Vg,"<s> X </s>"),Vg.forEach(t),Qg.forEach(t),wc=h(Zl),Oa=r(Zl,"LI",{});var Ug=i(Oa);Tc=n(Ug,"pair of sequences: "),Hr=r(Ug,"CODE",{});var Yg=i(Hr);Fc=n(Yg,"<s> A </s> B </s>"),Yg.forEach(t),Ug.forEach(t),Zl.forEach(t),gr.forEach(t),$c=h(Ge),jo=r(Ge,"DIV",{class:!0});var ed=i(jo);w(Vn.$$.fragment,ed),Mc=h(ed),Qr=r(ed,"P",{});var Gg=i(Qr);xc=n(Gg,"Converts a sequence of tokens (string) in a single string."),Gg.forEach(t),ed.forEach(t),Ec=h(Ge),vt=r(Ge,"DIV",{class:!0});var On=i(vt);w(Yn.$$.fragment,On),qc=h(On),Ur=r(On,"P",{});var Jg=i(Ur);zc=n(Jg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),Jg.forEach(t),Cc=h(On),w(Po.$$.fragment,On),Lc=h(On),Zt=r(On,"P",{});var _r=i(Zt);jc=n(_r,"If "),Br=r(_r,"CODE",{});var Zg=i(Br);Pc=n(Zg,"token_ids_1"),Zg.forEach(t),Nc=n(_r," is "),Rr=r(_r,"CODE",{});var e_=i(Rr);Ac=n(e_,"None"),e_.forEach(t),Oc=n(_r,", this method only returns the first portion of the mask (0s)."),_r.forEach(t),On.forEach(t),Dc=h(Ge),No=r(Ge,"DIV",{class:!0});var td=i(No);w(Gn.$$.fragment,td),Sc=h(td),Jn=r(td,"P",{});var od=i(Jn);Ic=n(od,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Kr=r(od,"CODE",{});var t_=i(Kr);Wc=n(t_,"prepare_for_model"),t_.forEach(t),Xc=n(od," method."),od.forEach(t),td.forEach(t),Ge.forEach(t),$l=h(s),eo=r(s,"H2",{class:!0});var nd=i(eo);Ao=r(nd,"A",{id:!0,class:!0,href:!0});var o_=i(Ao);Vr=r(o_,"SPAN",{});var n_=i(Vr);w(Zn.$$.fragment,n_),n_.forEach(t),o_.forEach(t),Hc=h(nd),Yr=r(nd,"SPAN",{});var s_=i(Yr);Qc=n(s_,"FlaubertModel"),s_.forEach(t),nd.forEach(t),Ml=h(s),ht=r(s,"DIV",{class:!0});var Bt=i(ht);w(es.$$.fragment,Bt),Uc=h(Bt),Gr=r(Bt,"P",{});var a_=i(Gr);Bc=n(a_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),a_.forEach(t),Rc=h(Bt),ts=r(Bt,"P",{});var sd=i(ts);Kc=n(sd,"This model inherits from "),Da=r(sd,"A",{href:!0});var r_=i(Da);Vc=n(r_,"PreTrainedModel"),r_.forEach(t),Yc=n(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),Gc=h(Bt),os=r(Bt,"P",{});var ad=i(os);Jc=n(ad,"This model is also a PyTorch "),ns=r(ad,"A",{href:!0,rel:!0});var i_=i(ns);Zc=n(i_,"torch.nn.Module"),i_.forEach(t),ep=n(ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ad.forEach(t),tp=h(Bt),wt=r(Bt,"DIV",{class:!0});var Dn=i(wt);w(ss.$$.fragment,Dn),op=h(Dn),to=r(Dn,"P",{});var br=i(to);np=n(br,"The "),Sa=r(br,"A",{href:!0});var l_=i(Sa);sp=n(l_,"FlaubertModel"),l_.forEach(t),ap=n(br," forward method, overrides the "),Jr=r(br,"CODE",{});var d_=i(Jr);rp=n(d_,"__call__"),d_.forEach(t),ip=n(br," special method."),br.forEach(t),lp=h(Dn),w(Oo.$$.fragment,Dn),dp=h(Dn),w(Do.$$.fragment,Dn),Dn.forEach(t),Bt.forEach(t),xl=h(s),oo=r(s,"H2",{class:!0});var rd=i(oo);So=r(rd,"A",{id:!0,class:!0,href:!0});var c_=i(So);Zr=r(c_,"SPAN",{});var p_=i(Zr);w(as.$$.fragment,p_),p_.forEach(t),c_.forEach(t),cp=h(rd),ei=r(rd,"SPAN",{});var u_=i(ei);pp=n(u_,"FlaubertWithLMHeadModel"),u_.forEach(t),rd.forEach(t),El=h(s),et=r(s,"DIV",{class:!0});var Et=i(et);w(rs.$$.fragment,Et),up=h(Et),ti=r(Et,"P",{});var h_=i(ti);hp=n(h_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),h_.forEach(t),mp=h(Et),is=r(Et,"P",{});var id=i(is);fp=n(id,"This model inherits from "),Ia=r(id,"A",{href:!0});var m_=i(Ia);gp=n(m_,"PreTrainedModel"),m_.forEach(t),_p=n(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),bp=h(Et),ls=r(Et,"P",{});var ld=i(ls);kp=n(ld,"This model is also a PyTorch "),ds=r(ld,"A",{href:!0,rel:!0});var f_=i(ds);yp=n(f_,"torch.nn.Module"),f_.forEach(t),vp=n(ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ld.forEach(t),wp=h(Et),cs=r(Et,"P",{});var dd=i(cs);Tp=n(dd,"This class overrides "),Wa=r(dd,"A",{href:!0});var g_=i(Wa);Fp=n(g_,"XLMWithLMHeadModel"),g_.forEach(t),$p=n(dd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),dd.forEach(t),Mp=h(Et),mt=r(Et,"DIV",{class:!0});var Rt=i(mt);w(ps.$$.fragment,Rt),xp=h(Rt),no=r(Rt,"P",{});var kr=i(no);Ep=n(kr,"The "),Xa=r(kr,"A",{href:!0});var __=i(Xa);qp=n(__,"XLMWithLMHeadModel"),__.forEach(t),zp=n(kr," forward method, overrides the "),oi=r(kr,"CODE",{});var b_=i(oi);Cp=n(b_,"__call__"),b_.forEach(t),Lp=n(kr," special method."),kr.forEach(t),jp=h(Rt),w(Io.$$.fragment,Rt),Pp=h(Rt),w(Wo.$$.fragment,Rt),Np=h(Rt),w(Xo.$$.fragment,Rt),Rt.forEach(t),Et.forEach(t),ql=h(s),so=r(s,"H2",{class:!0});var cd=i(so);Ho=r(cd,"A",{id:!0,class:!0,href:!0});var k_=i(Ho);ni=r(k_,"SPAN",{});var y_=i(ni);w(us.$$.fragment,y_),y_.forEach(t),k_.forEach(t),Ap=h(cd),si=r(cd,"SPAN",{});var v_=i(si);Op=n(v_,"FlaubertForSequenceClassification"),v_.forEach(t),cd.forEach(t),zl=h(s),tt=r(s,"DIV",{class:!0});var qt=i(tt);w(hs.$$.fragment,qt),Dp=h(qt),ai=r(qt,"P",{});var w_=i(ai);Sp=n(w_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),w_.forEach(t),Ip=h(qt),ms=r(qt,"P",{});var pd=i(ms);Wp=n(pd,"This model inherits from "),Ha=r(pd,"A",{href:!0});var T_=i(Ha);Xp=n(T_,"PreTrainedModel"),T_.forEach(t),Hp=n(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),Qp=h(qt),fs=r(qt,"P",{});var ud=i(fs);Up=n(ud,"This model is also a PyTorch "),gs=r(ud,"A",{href:!0,rel:!0});var F_=i(gs);Bp=n(F_,"torch.nn.Module"),F_.forEach(t),Rp=n(ud,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ud.forEach(t),Kp=h(qt),_s=r(qt,"P",{});var hd=i(_s);Vp=n(hd,"This class overrides "),Qa=r(hd,"A",{href:!0});var $_=i(Qa);Yp=n($_,"XLMForSequenceClassification"),$_.forEach(t),Gp=n(hd,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),hd.forEach(t),Jp=h(qt),Ze=r(qt,"DIV",{class:!0});var yt=i(Ze);w(bs.$$.fragment,yt),Zp=h(yt),ao=r(yt,"P",{});var yr=i(ao);eu=n(yr,"The "),Ua=r(yr,"A",{href:!0});var M_=i(Ua);tu=n(M_,"XLMForSequenceClassification"),M_.forEach(t),ou=n(yr," forward method, overrides the "),ri=r(yr,"CODE",{});var x_=i(ri);nu=n(x_,"__call__"),x_.forEach(t),su=n(yr," special method."),yr.forEach(t),au=h(yt),w(Qo.$$.fragment,yt),ru=h(yt),w(Uo.$$.fragment,yt),iu=h(yt),w(Bo.$$.fragment,yt),lu=h(yt),w(Ro.$$.fragment,yt),du=h(yt),w(Ko.$$.fragment,yt),yt.forEach(t),qt.forEach(t),Cl=h(s),ro=r(s,"H2",{class:!0});var md=i(ro);Vo=r(md,"A",{id:!0,class:!0,href:!0});var E_=i(Vo);ii=r(E_,"SPAN",{});var q_=i(ii);w(ks.$$.fragment,q_),q_.forEach(t),E_.forEach(t),cu=h(md),li=r(md,"SPAN",{});var z_=i(li);pu=n(z_,"FlaubertForMultipleChoice"),z_.forEach(t),md.forEach(t),Ll=h(s),ot=r(s,"DIV",{class:!0});var zt=i(ot);w(ys.$$.fragment,zt),uu=h(zt),di=r(zt,"P",{});var C_=i(di);hu=n(C_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),C_.forEach(t),mu=h(zt),vs=r(zt,"P",{});var fd=i(vs);fu=n(fd,"This model inherits from "),Ba=r(fd,"A",{href:!0});var L_=i(Ba);gu=n(L_,"PreTrainedModel"),L_.forEach(t),_u=n(fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd.forEach(t),bu=h(zt),ws=r(zt,"P",{});var gd=i(ws);ku=n(gd,"This model is also a PyTorch "),Ts=r(gd,"A",{href:!0,rel:!0});var j_=i(Ts);yu=n(j_,"torch.nn.Module"),j_.forEach(t),vu=n(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),wu=h(zt),Fs=r(zt,"P",{});var _d=i(Fs);Tu=n(_d,"This class overrides "),Ra=r(_d,"A",{href:!0});var P_=i(Ra);Fu=n(P_,"XLMForMultipleChoice"),P_.forEach(t),$u=n(_d,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),_d.forEach(t),Mu=h(zt),Tt=r(zt,"DIV",{class:!0});var Sn=i(Tt);w($s.$$.fragment,Sn),xu=h(Sn),io=r(Sn,"P",{});var vr=i(io);Eu=n(vr,"The "),Ka=r(vr,"A",{href:!0});var N_=i(Ka);qu=n(N_,"XLMForMultipleChoice"),N_.forEach(t),zu=n(vr," forward method, overrides the "),ci=r(vr,"CODE",{});var A_=i(ci);Cu=n(A_,"__call__"),A_.forEach(t),Lu=n(vr," special method."),vr.forEach(t),ju=h(Sn),w(Yo.$$.fragment,Sn),Pu=h(Sn),w(Go.$$.fragment,Sn),Sn.forEach(t),zt.forEach(t),jl=h(s),lo=r(s,"H2",{class:!0});var bd=i(lo);Jo=r(bd,"A",{id:!0,class:!0,href:!0});var O_=i(Jo);pi=r(O_,"SPAN",{});var D_=i(pi);w(Ms.$$.fragment,D_),D_.forEach(t),O_.forEach(t),Nu=h(bd),ui=r(bd,"SPAN",{});var S_=i(ui);Au=n(S_,"FlaubertForTokenClassification"),S_.forEach(t),bd.forEach(t),Pl=h(s),nt=r(s,"DIV",{class:!0});var Ct=i(nt);w(xs.$$.fragment,Ct),Ou=h(Ct),hi=r(Ct,"P",{});var I_=i(hi);Du=n(I_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I_.forEach(t),Su=h(Ct),Es=r(Ct,"P",{});var kd=i(Es);Iu=n(kd,"This model inherits from "),Va=r(kd,"A",{href:!0});var W_=i(Va);Wu=n(W_,"PreTrainedModel"),W_.forEach(t),Xu=n(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),Hu=h(Ct),qs=r(Ct,"P",{});var yd=i(qs);Qu=n(yd,"This model is also a PyTorch "),zs=r(yd,"A",{href:!0,rel:!0});var X_=i(zs);Uu=n(X_,"torch.nn.Module"),X_.forEach(t),Bu=n(yd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yd.forEach(t),Ru=h(Ct),Cs=r(Ct,"P",{});var vd=i(Cs);Ku=n(vd,"This class overrides "),Ya=r(vd,"A",{href:!0});var H_=i(Ya);Vu=n(H_,"XLMForTokenClassification"),H_.forEach(t),Yu=n(vd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),vd.forEach(t),Gu=h(Ct),ft=r(Ct,"DIV",{class:!0});var Kt=i(ft);w(Ls.$$.fragment,Kt),Ju=h(Kt),co=r(Kt,"P",{});var wr=i(co);Zu=n(wr,"The "),Ga=r(wr,"A",{href:!0});var Q_=i(Ga);eh=n(Q_,"XLMForTokenClassification"),Q_.forEach(t),th=n(wr," forward method, overrides the "),mi=r(wr,"CODE",{});var U_=i(mi);oh=n(U_,"__call__"),U_.forEach(t),nh=n(wr," special method."),wr.forEach(t),sh=h(Kt),w(Zo.$$.fragment,Kt),ah=h(Kt),w(en.$$.fragment,Kt),rh=h(Kt),w(tn.$$.fragment,Kt),Kt.forEach(t),Ct.forEach(t),Nl=h(s),po=r(s,"H2",{class:!0});var wd=i(po);on=r(wd,"A",{id:!0,class:!0,href:!0});var B_=i(on);fi=r(B_,"SPAN",{});var R_=i(fi);w(js.$$.fragment,R_),R_.forEach(t),B_.forEach(t),ih=h(wd),gi=r(wd,"SPAN",{});var K_=i(gi);lh=n(K_,"FlaubertForQuestionAnsweringSimple"),K_.forEach(t),wd.forEach(t),Al=h(s),st=r(s,"DIV",{class:!0});var Lt=i(st);w(Ps.$$.fragment,Lt),dh=h(Lt),uo=r(Lt,"P",{});var Tr=i(uo);ch=n(Tr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_i=r(Tr,"CODE",{});var V_=i(_i);ph=n(V_,"span start logits"),V_.forEach(t),uh=n(Tr," and "),bi=r(Tr,"CODE",{});var Y_=i(bi);hh=n(Y_,"span end logits"),Y_.forEach(t),mh=n(Tr,")."),Tr.forEach(t),fh=h(Lt),Ns=r(Lt,"P",{});var Td=i(Ns);gh=n(Td,"This model inherits from "),Ja=r(Td,"A",{href:!0});var G_=i(Ja);_h=n(G_,"PreTrainedModel"),G_.forEach(t),bh=n(Td,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Td.forEach(t),kh=h(Lt),As=r(Lt,"P",{});var Fd=i(As);yh=n(Fd,"This model is also a PyTorch "),Os=r(Fd,"A",{href:!0,rel:!0});var J_=i(Os);vh=n(J_,"torch.nn.Module"),J_.forEach(t),wh=n(Fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),Th=h(Lt),Ds=r(Lt,"P",{});var $d=i(Ds);Fh=n($d,"This class overrides "),Za=r($d,"A",{href:!0});var Z_=i(Za);$h=n(Z_,"XLMForQuestionAnsweringSimple"),Z_.forEach(t),Mh=n($d,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$d.forEach(t),xh=h(Lt),gt=r(Lt,"DIV",{class:!0});var Vt=i(gt);w(Ss.$$.fragment,Vt),Eh=h(Vt),ho=r(Vt,"P",{});var Fr=i(ho);qh=n(Fr,"The "),er=r(Fr,"A",{href:!0});var eb=i(er);zh=n(eb,"XLMForQuestionAnsweringSimple"),eb.forEach(t),Ch=n(Fr," forward method, overrides the "),ki=r(Fr,"CODE",{});var tb=i(ki);Lh=n(tb,"__call__"),tb.forEach(t),jh=n(Fr," special method."),Fr.forEach(t),Ph=h(Vt),w(nn.$$.fragment,Vt),Nh=h(Vt),w(sn.$$.fragment,Vt),Ah=h(Vt),w(an.$$.fragment,Vt),Vt.forEach(t),Lt.forEach(t),Ol=h(s),mo=r(s,"H2",{class:!0});var Md=i(mo);rn=r(Md,"A",{id:!0,class:!0,href:!0});var ob=i(rn);yi=r(ob,"SPAN",{});var nb=i(yi);w(Is.$$.fragment,nb),nb.forEach(t),ob.forEach(t),Oh=h(Md),vi=r(Md,"SPAN",{});var sb=i(vi);Dh=n(sb,"FlaubertForQuestionAnswering"),sb.forEach(t),Md.forEach(t),Dl=h(s),at=r(s,"DIV",{class:!0});var jt=i(at);w(Ws.$$.fragment,jt),Sh=h(jt),fo=r(jt,"P",{});var $r=i(fo);Ih=n($r,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),wi=r($r,"CODE",{});var ab=i(wi);Wh=n(ab,"span start logits"),ab.forEach(t),Xh=n($r," and "),Ti=r($r,"CODE",{});var rb=i(Ti);Hh=n(rb,"span end logits"),rb.forEach(t),Qh=n($r,")."),$r.forEach(t),Uh=h(jt),Xs=r(jt,"P",{});var xd=i(Xs);Bh=n(xd,"This model inherits from "),tr=r(xd,"A",{href:!0});var ib=i(tr);Rh=n(ib,"PreTrainedModel"),ib.forEach(t),Kh=n(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Vh=h(jt),Hs=r(jt,"P",{});var Ed=i(Hs);Yh=n(Ed,"This model is also a PyTorch "),Qs=r(Ed,"A",{href:!0,rel:!0});var lb=i(Qs);Gh=n(lb,"torch.nn.Module"),lb.forEach(t),Jh=n(Ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed.forEach(t),Zh=h(jt),Us=r(jt,"P",{});var qd=i(Us);em=n(qd,"This class overrides "),or=r(qd,"A",{href:!0});var db=i(or);tm=n(db,"XLMForQuestionAnswering"),db.forEach(t),om=n(qd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),qd.forEach(t),nm=h(jt),Ft=r(jt,"DIV",{class:!0});var In=i(Ft);w(Bs.$$.fragment,In),sm=h(In),go=r(In,"P",{});var Mr=i(go);am=n(Mr,"The "),nr=r(Mr,"A",{href:!0});var cb=i(nr);rm=n(cb,"XLMForQuestionAnswering"),cb.forEach(t),im=n(Mr," forward method, overrides the "),Fi=r(Mr,"CODE",{});var pb=i(Fi);lm=n(pb,"__call__"),pb.forEach(t),dm=n(Mr," special method."),Mr.forEach(t),cm=h(In),w(ln.$$.fragment,In),pm=h(In),w(dn.$$.fragment,In),In.forEach(t),jt.forEach(t),Sl=h(s),_o=r(s,"H2",{class:!0});var zd=i(_o);cn=r(zd,"A",{id:!0,class:!0,href:!0});var ub=i(cn);$i=r(ub,"SPAN",{});var hb=i($i);w(Rs.$$.fragment,hb),hb.forEach(t),ub.forEach(t),um=h(zd),Mi=r(zd,"SPAN",{});var mb=i(Mi);hm=n(mb,"TFFlaubertModel"),mb.forEach(t),zd.forEach(t),Il=h(s),rt=r(s,"DIV",{class:!0});var Pt=i(rt);w(Ks.$$.fragment,Pt),mm=h(Pt),xi=r(Pt,"P",{});var fb=i(xi);fm=n(fb,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),fb.forEach(t),gm=h(Pt),Vs=r(Pt,"P",{});var Cd=i(Vs);_m=n(Cd,"This model inherits from "),sr=r(Cd,"A",{href:!0});var gb=i(sr);bm=n(gb,"TFPreTrainedModel"),gb.forEach(t),km=n(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),ym=h(Pt),Ys=r(Pt,"P",{});var Ld=i(Ys);vm=n(Ld,"This model is also a "),Gs=r(Ld,"A",{href:!0,rel:!0});var _b=i(Gs);wm=n(_b,"tf.keras.Model"),_b.forEach(t),Tm=n(Ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ld.forEach(t),Fm=h(Pt),w(pn.$$.fragment,Pt),$m=h(Pt),$t=r(Pt,"DIV",{class:!0});var Wn=i($t);w(Js.$$.fragment,Wn),Mm=h(Wn),bo=r(Wn,"P",{});var xr=i(bo);xm=n(xr,"The "),ar=r(xr,"A",{href:!0});var bb=i(ar);Em=n(bb,"TFFlaubertModel"),bb.forEach(t),qm=n(xr," forward method, overrides the "),Ei=r(xr,"CODE",{});var kb=i(Ei);zm=n(kb,"__call__"),kb.forEach(t),Cm=n(xr," special method."),xr.forEach(t),Lm=h(Wn),w(un.$$.fragment,Wn),jm=h(Wn),w(hn.$$.fragment,Wn),Wn.forEach(t),Pt.forEach(t),Wl=h(s),ko=r(s,"H2",{class:!0});var jd=i(ko);mn=r(jd,"A",{id:!0,class:!0,href:!0});var yb=i(mn);qi=r(yb,"SPAN",{});var vb=i(qi);w(Zs.$$.fragment,vb),vb.forEach(t),yb.forEach(t),Pm=h(jd),zi=r(jd,"SPAN",{});var wb=i(zi);Nm=n(wb,"TFFlaubertWithLMHeadModel"),wb.forEach(t),jd.forEach(t),Xl=h(s),it=r(s,"DIV",{class:!0});var Nt=i(it);w(ea.$$.fragment,Nt),Am=h(Nt),Ci=r(Nt,"P",{});var Tb=i(Ci);Om=n(Tb,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Tb.forEach(t),Dm=h(Nt),ta=r(Nt,"P",{});var Pd=i(ta);Sm=n(Pd,"This model inherits from "),rr=r(Pd,"A",{href:!0});var Fb=i(rr);Im=n(Fb,"TFPreTrainedModel"),Fb.forEach(t),Wm=n(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),Xm=h(Nt),oa=r(Nt,"P",{});var Nd=i(oa);Hm=n(Nd,"This model is also a "),na=r(Nd,"A",{href:!0,rel:!0});var $b=i(na);Qm=n($b,"tf.keras.Model"),$b.forEach(t),Um=n(Nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nd.forEach(t),Bm=h(Nt),w(fn.$$.fragment,Nt),Rm=h(Nt),Mt=r(Nt,"DIV",{class:!0});var Xn=i(Mt);w(sa.$$.fragment,Xn),Km=h(Xn),yo=r(Xn,"P",{});var Er=i(yo);Vm=n(Er,"The "),ir=r(Er,"A",{href:!0});var Mb=i(ir);Ym=n(Mb,"TFFlaubertWithLMHeadModel"),Mb.forEach(t),Gm=n(Er," forward method, overrides the "),Li=r(Er,"CODE",{});var xb=i(Li);Jm=n(xb,"__call__"),xb.forEach(t),Zm=n(Er," special method."),Er.forEach(t),ef=h(Xn),w(gn.$$.fragment,Xn),tf=h(Xn),w(_n.$$.fragment,Xn),Xn.forEach(t),Nt.forEach(t),Hl=h(s),vo=r(s,"H2",{class:!0});var Ad=i(vo);bn=r(Ad,"A",{id:!0,class:!0,href:!0});var Eb=i(bn);ji=r(Eb,"SPAN",{});var qb=i(ji);w(aa.$$.fragment,qb),qb.forEach(t),Eb.forEach(t),of=h(Ad),Pi=r(Ad,"SPAN",{});var zb=i(Pi);nf=n(zb,"TFFlaubertForSequenceClassification"),zb.forEach(t),Ad.forEach(t),Ql=h(s),lt=r(s,"DIV",{class:!0});var At=i(lt);w(ra.$$.fragment,At),sf=h(At),Ni=r(At,"P",{});var Cb=i(Ni);af=n(Cb,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Cb.forEach(t),rf=h(At),ia=r(At,"P",{});var Od=i(ia);lf=n(Od,"This model inherits from "),lr=r(Od,"A",{href:!0});var Lb=i(lr);df=n(Lb,"TFPreTrainedModel"),Lb.forEach(t),cf=n(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),pf=h(At),la=r(At,"P",{});var Dd=i(la);uf=n(Dd,"This model is also a "),da=r(Dd,"A",{href:!0,rel:!0});var jb=i(da);hf=n(jb,"tf.keras.Model"),jb.forEach(t),mf=n(Dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dd.forEach(t),ff=h(At),w(kn.$$.fragment,At),gf=h(At),_t=r(At,"DIV",{class:!0});var Yt=i(_t);w(ca.$$.fragment,Yt),_f=h(Yt),wo=r(Yt,"P",{});var qr=i(wo);bf=n(qr,"The "),dr=r(qr,"A",{href:!0});var Pb=i(dr);kf=n(Pb,"TFXLMForSequenceClassification"),Pb.forEach(t),yf=n(qr," forward method, overrides the "),Ai=r(qr,"CODE",{});var Nb=i(Ai);vf=n(Nb,"__call__"),Nb.forEach(t),wf=n(qr," special method."),qr.forEach(t),Tf=h(Yt),w(yn.$$.fragment,Yt),Ff=h(Yt),w(vn.$$.fragment,Yt),$f=h(Yt),w(wn.$$.fragment,Yt),Yt.forEach(t),At.forEach(t),Ul=h(s),To=r(s,"H2",{class:!0});var Sd=i(To);Tn=r(Sd,"A",{id:!0,class:!0,href:!0});var Ab=i(Tn);Oi=r(Ab,"SPAN",{});var Ob=i(Oi);w(pa.$$.fragment,Ob),Ob.forEach(t),Ab.forEach(t),Mf=h(Sd),Di=r(Sd,"SPAN",{});var Db=i(Di);xf=n(Db,"TFFlaubertForMultipleChoice"),Db.forEach(t),Sd.forEach(t),Bl=h(s),dt=r(s,"DIV",{class:!0});var Ot=i(dt);w(ua.$$.fragment,Ot),Ef=h(Ot),Si=r(Ot,"P",{});var Sb=i(Si);qf=n(Sb,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sb.forEach(t),zf=h(Ot),ha=r(Ot,"P",{});var Id=i(ha);Cf=n(Id,"This model inherits from "),cr=r(Id,"A",{href:!0});var Ib=i(cr);Lf=n(Ib,"TFPreTrainedModel"),Ib.forEach(t),jf=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Pf=h(Ot),ma=r(Ot,"P",{});var Wd=i(ma);Nf=n(Wd,"This model is also a "),fa=r(Wd,"A",{href:!0,rel:!0});var Wb=i(fa);Af=n(Wb,"tf.keras.Model"),Wb.forEach(t),Of=n(Wd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wd.forEach(t),Df=h(Ot),w(Fn.$$.fragment,Ot),Sf=h(Ot),xt=r(Ot,"DIV",{class:!0});var Hn=i(xt);w(ga.$$.fragment,Hn),If=h(Hn),Fo=r(Hn,"P",{});var zr=i(Fo);Wf=n(zr,"The "),pr=r(zr,"A",{href:!0});var Xb=i(pr);Xf=n(Xb,"TFXLMForMultipleChoice"),Xb.forEach(t),Hf=n(zr," forward method, overrides the "),Ii=r(zr,"CODE",{});var Hb=i(Ii);Qf=n(Hb,"__call__"),Hb.forEach(t),Uf=n(zr," special method."),zr.forEach(t),Bf=h(Hn),w($n.$$.fragment,Hn),Rf=h(Hn),w(Mn.$$.fragment,Hn),Hn.forEach(t),Ot.forEach(t),Rl=h(s),$o=r(s,"H2",{class:!0});var Xd=i($o);xn=r(Xd,"A",{id:!0,class:!0,href:!0});var Qb=i(xn);Wi=r(Qb,"SPAN",{});var Ub=i(Wi);w(_a.$$.fragment,Ub),Ub.forEach(t),Qb.forEach(t),Kf=h(Xd),Xi=r(Xd,"SPAN",{});var Bb=i(Xi);Vf=n(Bb,"TFFlaubertForTokenClassification"),Bb.forEach(t),Xd.forEach(t),Kl=h(s),ct=r(s,"DIV",{class:!0});var Dt=i(ct);w(ba.$$.fragment,Dt),Yf=h(Dt),Hi=r(Dt,"P",{});var Rb=i(Hi);Gf=n(Rb,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Rb.forEach(t),Jf=h(Dt),ka=r(Dt,"P",{});var Hd=i(ka);Zf=n(Hd,"This model inherits from "),ur=r(Hd,"A",{href:!0});var Kb=i(ur);eg=n(Kb,"TFPreTrainedModel"),Kb.forEach(t),tg=n(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd.forEach(t),og=h(Dt),ya=r(Dt,"P",{});var Qd=i(ya);ng=n(Qd,"This model is also a "),va=r(Qd,"A",{href:!0,rel:!0});var Vb=i(va);sg=n(Vb,"tf.keras.Model"),Vb.forEach(t),ag=n(Qd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qd.forEach(t),rg=h(Dt),w(En.$$.fragment,Dt),ig=h(Dt),bt=r(Dt,"DIV",{class:!0});var Gt=i(bt);w(wa.$$.fragment,Gt),lg=h(Gt),Mo=r(Gt,"P",{});var Cr=i(Mo);dg=n(Cr,"The "),hr=r(Cr,"A",{href:!0});var Yb=i(hr);cg=n(Yb,"TFXLMForTokenClassification"),Yb.forEach(t),pg=n(Cr," forward method, overrides the "),Qi=r(Cr,"CODE",{});var Gb=i(Qi);ug=n(Gb,"__call__"),Gb.forEach(t),hg=n(Cr," special method."),Cr.forEach(t),mg=h(Gt),w(qn.$$.fragment,Gt),fg=h(Gt),w(zn.$$.fragment,Gt),gg=h(Gt),w(Cn.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Vl=h(s),xo=r(s,"H2",{class:!0});var Ud=i(xo);Ln=r(Ud,"A",{id:!0,class:!0,href:!0});var Jb=i(Ln);Ui=r(Jb,"SPAN",{});var Zb=i(Ui);w(Ta.$$.fragment,Zb),Zb.forEach(t),Jb.forEach(t),_g=h(Ud),Bi=r(Ud,"SPAN",{});var ek=i(Bi);bg=n(ek,"TFFlaubertForQuestionAnsweringSimple"),ek.forEach(t),Ud.forEach(t),Yl=h(s),pt=r(s,"DIV",{class:!0});var St=i(pt);w(Fa.$$.fragment,St),kg=h(St),Eo=r(St,"P",{});var Lr=i(Eo);yg=n(Lr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ri=r(Lr,"CODE",{});var tk=i(Ri);vg=n(tk,"span start logits"),tk.forEach(t),wg=n(Lr," and "),Ki=r(Lr,"CODE",{});var ok=i(Ki);Tg=n(ok,"span end logits"),ok.forEach(t),Fg=n(Lr,")."),Lr.forEach(t),$g=h(St),$a=r(St,"P",{});var Bd=i($a);Mg=n(Bd,"This model inherits from "),mr=r(Bd,"A",{href:!0});var nk=i(mr);xg=n(nk,"TFPreTrainedModel"),nk.forEach(t),Eg=n(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),qg=h(St),Ma=r(St,"P",{});var Rd=i(Ma);zg=n(Rd,"This model is also a "),xa=r(Rd,"A",{href:!0,rel:!0});var sk=i(xa);Cg=n(sk,"tf.keras.Model"),sk.forEach(t),Lg=n(Rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rd.forEach(t),jg=h(St),w(jn.$$.fragment,St),Pg=h(St),kt=r(St,"DIV",{class:!0});var Jt=i(kt);w(Ea.$$.fragment,Jt),Ng=h(Jt),qo=r(Jt,"P",{});var jr=i(qo);Ag=n(jr,"The "),fr=r(jr,"A",{href:!0});var ak=i(fr);Og=n(ak,"TFXLMForQuestionAnsweringSimple"),ak.forEach(t),Dg=n(jr," forward method, overrides the "),Vi=r(jr,"CODE",{});var rk=i(Vi);Sg=n(rk,"__call__"),rk.forEach(t),Ig=n(jr," special method."),jr.forEach(t),Wg=h(Jt),w(Pn.$$.fragment,Jt),Xg=h(Jt),w(Nn.$$.fragment,Jt),Hg=h(Jt),w(An.$$.fragment,Jt),Jt.forEach(t),St.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(ty)),f(m,"id","flaubert"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#flaubert"),f(c,"class","relative group"),f(ae,"id","overview"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#overview"),f(D,"class","relative group"),f(le,"href","https://arxiv.org/abs/1912.05372"),f(le,"rel","nofollow"),f(de,"href","https://huggingface.co/formiel"),f(de,"rel","nofollow"),f(ce,"href","https://github.com/getalp/Flaubert"),f(ce,"rel","nofollow"),f(re,"id","transformers.FlaubertConfig"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#transformers.FlaubertConfig"),f(j,"class","relative group"),f(P,"href","/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertModel"),f(he,"href","/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.TFFlaubertModel"),f(E,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),f(E,"rel","nofollow"),f(Se,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ie,"href","/docs/transformers/v4.23.0/en/main_classes/configuration#transformers.PretrainedConfig"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"id","transformers.FlaubertTokenizer"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#transformers.FlaubertTokenizer"),f(Ae,"class","relative group"),f(Na,"href","/docs/transformers/v4.23.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.FlaubertModel"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.FlaubertModel"),f(eo,"class","relative group"),f(Da,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ns,"rel","nofollow"),f(Sa,"href","/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.FlaubertModel"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.FlaubertWithLMHeadModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.FlaubertWithLMHeadModel"),f(oo,"class","relative group"),f(Ia,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ds,"rel","nofollow"),f(Wa,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(Xa,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.FlaubertForSequenceClassification"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.FlaubertForSequenceClassification"),f(so,"class","relative group"),f(Ha,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(gs,"rel","nofollow"),f(Qa,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(Ua,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"id","transformers.FlaubertForMultipleChoice"),f(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vo,"href","#transformers.FlaubertForMultipleChoice"),f(ro,"class","relative group"),f(Ba,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(Ts,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Ts,"rel","nofollow"),f(Ra,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f(Ka,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.FlaubertForTokenClassification"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.FlaubertForTokenClassification"),f(lo,"class","relative group"),f(Va,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zs,"rel","nofollow"),f(Ya,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(Ga,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.FlaubertForQuestionAnsweringSimple"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.FlaubertForQuestionAnsweringSimple"),f(po,"class","relative group"),f(Ja,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Os,"rel","nofollow"),f(Za,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(er,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.FlaubertForQuestionAnswering"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.FlaubertForQuestionAnswering"),f(mo,"class","relative group"),f(tr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.PreTrainedModel"),f(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Qs,"rel","nofollow"),f(or,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(nr,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cn,"id","transformers.TFFlaubertModel"),f(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cn,"href","#transformers.TFFlaubertModel"),f(_o,"class","relative group"),f(sr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Gs,"rel","nofollow"),f(ar,"href","/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.TFFlaubertModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(mn,"id","transformers.TFFlaubertWithLMHeadModel"),f(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(mn,"href","#transformers.TFFlaubertWithLMHeadModel"),f(ko,"class","relative group"),f(rr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(na,"rel","nofollow"),f(ir,"href","/docs/transformers/v4.23.0/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.TFFlaubertForSequenceClassification"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.TFFlaubertForSequenceClassification"),f(vo,"class","relative group"),f(lr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(da,"rel","nofollow"),f(dr,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Tn,"id","transformers.TFFlaubertForMultipleChoice"),f(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Tn,"href","#transformers.TFFlaubertForMultipleChoice"),f(To,"class","relative group"),f(cr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(fa,"rel","nofollow"),f(pr,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"id","transformers.TFFlaubertForTokenClassification"),f(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xn,"href","#transformers.TFFlaubertForTokenClassification"),f($o,"class","relative group"),f(ur,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(va,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(va,"rel","nofollow"),f(hr,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),f(xo,"class","relative group"),f(mr,"href","/docs/transformers/v4.23.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(xa,"rel","nofollow"),f(fr,"href","/docs/transformers/v4.23.0/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),b(s,_,k),b(s,c,k),e(c,m),e(m,y),T(l,y,null),e(c,p),e(c,C),e(C,we),b(s,ge,k),b(s,D,k),e(D,ae),e(ae,Z),T(x,Z,null),e(D,Te),e(D,H),e(H,Fe),b(s,_e,k),b(s,I,k),e(I,$e),e(I,le),e(le,K),e(I,Me),b(s,be,k),b(s,W,k),e(W,xe),b(s,ke,k),b(s,X,k),e(X,me),e(me,Ee),b(s,te,k),b(s,L,k),e(L,N),e(L,de),e(de,V),e(L,qe),e(L,ce),e(ce,Y),e(L,ze),b(s,ye,k),b(s,j,k),e(j,re),e(re,Q),T(pe,Q,null),e(j,Ce),e(j,U),e(U,Le),b(s,ve,k),b(s,A,k),T(ue,A,null),e(A,G),e(A,ee),e(ee,ne),e(ee,P),e(P,je),e(ee,O),e(ee,he),e(he,Pe),e(ee,g),e(ee,E),e(E,Qe),e(ee,se),e(A,Ue),e(A,Ne),e(Ne,z),e(Ne,Se),e(Se,Be),e(Ne,Re),e(Ne,Ie),e(Ie,Ke),e(Ne,S),b(s,R,k),b(s,Ae,k),e(Ae,Oe),e(Oe,B),T(De,B,null),e(Ae,Ve),e(Ae,fe),e(fe,Ye),b(s,oe,k),b(s,J,k),T(Qn,J,null),e(J,Kd),e(J,Pr),e(Pr,Vd),e(J,Yd),e(J,It),e(It,Nr),e(Nr,Gd),e(It,Jd),e(It,Ar),e(Ar,Zd),e(It,ec),e(It,Wt),e(Wt,tc),e(Wt,Or),e(Or,oc),e(Wt,nc),e(Wt,Dr),e(Dr,sc),e(Wt,ac),e(Wt,Sr),e(Sr,rc),e(Wt,ic),e(It,lc),e(It,Un),e(Un,dc),e(Un,Ir),e(Ir,cc),e(Un,pc),e(J,uc),e(J,Bn),e(Bn,hc),e(Bn,Na),e(Na,mc),e(Bn,fc),e(J,gc),e(J,Ut),T(Rn,Ut,null),e(Ut,_c),e(Ut,Wr),e(Wr,bc),e(Ut,kc),e(Ut,Kn),e(Kn,Aa),e(Aa,yc),e(Aa,Xr),e(Xr,vc),e(Kn,wc),e(Kn,Oa),e(Oa,Tc),e(Oa,Hr),e(Hr,Fc),e(J,$c),e(J,jo),T(Vn,jo,null),e(jo,Mc),e(jo,Qr),e(Qr,xc),e(J,Ec),e(J,vt),T(Yn,vt,null),e(vt,qc),e(vt,Ur),e(Ur,zc),e(vt,Cc),T(Po,vt,null),e(vt,Lc),e(vt,Zt),e(Zt,jc),e(Zt,Br),e(Br,Pc),e(Zt,Nc),e(Zt,Rr),e(Rr,Ac),e(Zt,Oc),e(J,Dc),e(J,No),T(Gn,No,null),e(No,Sc),e(No,Jn),e(Jn,Ic),e(Jn,Kr),e(Kr,Wc),e(Jn,Xc),b(s,$l,k),b(s,eo,k),e(eo,Ao),e(Ao,Vr),T(Zn,Vr,null),e(eo,Hc),e(eo,Yr),e(Yr,Qc),b(s,Ml,k),b(s,ht,k),T(es,ht,null),e(ht,Uc),e(ht,Gr),e(Gr,Bc),e(ht,Rc),e(ht,ts),e(ts,Kc),e(ts,Da),e(Da,Vc),e(ts,Yc),e(ht,Gc),e(ht,os),e(os,Jc),e(os,ns),e(ns,Zc),e(os,ep),e(ht,tp),e(ht,wt),T(ss,wt,null),e(wt,op),e(wt,to),e(to,np),e(to,Sa),e(Sa,sp),e(to,ap),e(to,Jr),e(Jr,rp),e(to,ip),e(wt,lp),T(Oo,wt,null),e(wt,dp),T(Do,wt,null),b(s,xl,k),b(s,oo,k),e(oo,So),e(So,Zr),T(as,Zr,null),e(oo,cp),e(oo,ei),e(ei,pp),b(s,El,k),b(s,et,k),T(rs,et,null),e(et,up),e(et,ti),e(ti,hp),e(et,mp),e(et,is),e(is,fp),e(is,Ia),e(Ia,gp),e(is,_p),e(et,bp),e(et,ls),e(ls,kp),e(ls,ds),e(ds,yp),e(ls,vp),e(et,wp),e(et,cs),e(cs,Tp),e(cs,Wa),e(Wa,Fp),e(cs,$p),e(et,Mp),e(et,mt),T(ps,mt,null),e(mt,xp),e(mt,no),e(no,Ep),e(no,Xa),e(Xa,qp),e(no,zp),e(no,oi),e(oi,Cp),e(no,Lp),e(mt,jp),T(Io,mt,null),e(mt,Pp),T(Wo,mt,null),e(mt,Np),T(Xo,mt,null),b(s,ql,k),b(s,so,k),e(so,Ho),e(Ho,ni),T(us,ni,null),e(so,Ap),e(so,si),e(si,Op),b(s,zl,k),b(s,tt,k),T(hs,tt,null),e(tt,Dp),e(tt,ai),e(ai,Sp),e(tt,Ip),e(tt,ms),e(ms,Wp),e(ms,Ha),e(Ha,Xp),e(ms,Hp),e(tt,Qp),e(tt,fs),e(fs,Up),e(fs,gs),e(gs,Bp),e(fs,Rp),e(tt,Kp),e(tt,_s),e(_s,Vp),e(_s,Qa),e(Qa,Yp),e(_s,Gp),e(tt,Jp),e(tt,Ze),T(bs,Ze,null),e(Ze,Zp),e(Ze,ao),e(ao,eu),e(ao,Ua),e(Ua,tu),e(ao,ou),e(ao,ri),e(ri,nu),e(ao,su),e(Ze,au),T(Qo,Ze,null),e(Ze,ru),T(Uo,Ze,null),e(Ze,iu),T(Bo,Ze,null),e(Ze,lu),T(Ro,Ze,null),e(Ze,du),T(Ko,Ze,null),b(s,Cl,k),b(s,ro,k),e(ro,Vo),e(Vo,ii),T(ks,ii,null),e(ro,cu),e(ro,li),e(li,pu),b(s,Ll,k),b(s,ot,k),T(ys,ot,null),e(ot,uu),e(ot,di),e(di,hu),e(ot,mu),e(ot,vs),e(vs,fu),e(vs,Ba),e(Ba,gu),e(vs,_u),e(ot,bu),e(ot,ws),e(ws,ku),e(ws,Ts),e(Ts,yu),e(ws,vu),e(ot,wu),e(ot,Fs),e(Fs,Tu),e(Fs,Ra),e(Ra,Fu),e(Fs,$u),e(ot,Mu),e(ot,Tt),T($s,Tt,null),e(Tt,xu),e(Tt,io),e(io,Eu),e(io,Ka),e(Ka,qu),e(io,zu),e(io,ci),e(ci,Cu),e(io,Lu),e(Tt,ju),T(Yo,Tt,null),e(Tt,Pu),T(Go,Tt,null),b(s,jl,k),b(s,lo,k),e(lo,Jo),e(Jo,pi),T(Ms,pi,null),e(lo,Nu),e(lo,ui),e(ui,Au),b(s,Pl,k),b(s,nt,k),T(xs,nt,null),e(nt,Ou),e(nt,hi),e(hi,Du),e(nt,Su),e(nt,Es),e(Es,Iu),e(Es,Va),e(Va,Wu),e(Es,Xu),e(nt,Hu),e(nt,qs),e(qs,Qu),e(qs,zs),e(zs,Uu),e(qs,Bu),e(nt,Ru),e(nt,Cs),e(Cs,Ku),e(Cs,Ya),e(Ya,Vu),e(Cs,Yu),e(nt,Gu),e(nt,ft),T(Ls,ft,null),e(ft,Ju),e(ft,co),e(co,Zu),e(co,Ga),e(Ga,eh),e(co,th),e(co,mi),e(mi,oh),e(co,nh),e(ft,sh),T(Zo,ft,null),e(ft,ah),T(en,ft,null),e(ft,rh),T(tn,ft,null),b(s,Nl,k),b(s,po,k),e(po,on),e(on,fi),T(js,fi,null),e(po,ih),e(po,gi),e(gi,lh),b(s,Al,k),b(s,st,k),T(Ps,st,null),e(st,dh),e(st,uo),e(uo,ch),e(uo,_i),e(_i,ph),e(uo,uh),e(uo,bi),e(bi,hh),e(uo,mh),e(st,fh),e(st,Ns),e(Ns,gh),e(Ns,Ja),e(Ja,_h),e(Ns,bh),e(st,kh),e(st,As),e(As,yh),e(As,Os),e(Os,vh),e(As,wh),e(st,Th),e(st,Ds),e(Ds,Fh),e(Ds,Za),e(Za,$h),e(Ds,Mh),e(st,xh),e(st,gt),T(Ss,gt,null),e(gt,Eh),e(gt,ho),e(ho,qh),e(ho,er),e(er,zh),e(ho,Ch),e(ho,ki),e(ki,Lh),e(ho,jh),e(gt,Ph),T(nn,gt,null),e(gt,Nh),T(sn,gt,null),e(gt,Ah),T(an,gt,null),b(s,Ol,k),b(s,mo,k),e(mo,rn),e(rn,yi),T(Is,yi,null),e(mo,Oh),e(mo,vi),e(vi,Dh),b(s,Dl,k),b(s,at,k),T(Ws,at,null),e(at,Sh),e(at,fo),e(fo,Ih),e(fo,wi),e(wi,Wh),e(fo,Xh),e(fo,Ti),e(Ti,Hh),e(fo,Qh),e(at,Uh),e(at,Xs),e(Xs,Bh),e(Xs,tr),e(tr,Rh),e(Xs,Kh),e(at,Vh),e(at,Hs),e(Hs,Yh),e(Hs,Qs),e(Qs,Gh),e(Hs,Jh),e(at,Zh),e(at,Us),e(Us,em),e(Us,or),e(or,tm),e(Us,om),e(at,nm),e(at,Ft),T(Bs,Ft,null),e(Ft,sm),e(Ft,go),e(go,am),e(go,nr),e(nr,rm),e(go,im),e(go,Fi),e(Fi,lm),e(go,dm),e(Ft,cm),T(ln,Ft,null),e(Ft,pm),T(dn,Ft,null),b(s,Sl,k),b(s,_o,k),e(_o,cn),e(cn,$i),T(Rs,$i,null),e(_o,um),e(_o,Mi),e(Mi,hm),b(s,Il,k),b(s,rt,k),T(Ks,rt,null),e(rt,mm),e(rt,xi),e(xi,fm),e(rt,gm),e(rt,Vs),e(Vs,_m),e(Vs,sr),e(sr,bm),e(Vs,km),e(rt,ym),e(rt,Ys),e(Ys,vm),e(Ys,Gs),e(Gs,wm),e(Ys,Tm),e(rt,Fm),T(pn,rt,null),e(rt,$m),e(rt,$t),T(Js,$t,null),e($t,Mm),e($t,bo),e(bo,xm),e(bo,ar),e(ar,Em),e(bo,qm),e(bo,Ei),e(Ei,zm),e(bo,Cm),e($t,Lm),T(un,$t,null),e($t,jm),T(hn,$t,null),b(s,Wl,k),b(s,ko,k),e(ko,mn),e(mn,qi),T(Zs,qi,null),e(ko,Pm),e(ko,zi),e(zi,Nm),b(s,Xl,k),b(s,it,k),T(ea,it,null),e(it,Am),e(it,Ci),e(Ci,Om),e(it,Dm),e(it,ta),e(ta,Sm),e(ta,rr),e(rr,Im),e(ta,Wm),e(it,Xm),e(it,oa),e(oa,Hm),e(oa,na),e(na,Qm),e(oa,Um),e(it,Bm),T(fn,it,null),e(it,Rm),e(it,Mt),T(sa,Mt,null),e(Mt,Km),e(Mt,yo),e(yo,Vm),e(yo,ir),e(ir,Ym),e(yo,Gm),e(yo,Li),e(Li,Jm),e(yo,Zm),e(Mt,ef),T(gn,Mt,null),e(Mt,tf),T(_n,Mt,null),b(s,Hl,k),b(s,vo,k),e(vo,bn),e(bn,ji),T(aa,ji,null),e(vo,of),e(vo,Pi),e(Pi,nf),b(s,Ql,k),b(s,lt,k),T(ra,lt,null),e(lt,sf),e(lt,Ni),e(Ni,af),e(lt,rf),e(lt,ia),e(ia,lf),e(ia,lr),e(lr,df),e(ia,cf),e(lt,pf),e(lt,la),e(la,uf),e(la,da),e(da,hf),e(la,mf),e(lt,ff),T(kn,lt,null),e(lt,gf),e(lt,_t),T(ca,_t,null),e(_t,_f),e(_t,wo),e(wo,bf),e(wo,dr),e(dr,kf),e(wo,yf),e(wo,Ai),e(Ai,vf),e(wo,wf),e(_t,Tf),T(yn,_t,null),e(_t,Ff),T(vn,_t,null),e(_t,$f),T(wn,_t,null),b(s,Ul,k),b(s,To,k),e(To,Tn),e(Tn,Oi),T(pa,Oi,null),e(To,Mf),e(To,Di),e(Di,xf),b(s,Bl,k),b(s,dt,k),T(ua,dt,null),e(dt,Ef),e(dt,Si),e(Si,qf),e(dt,zf),e(dt,ha),e(ha,Cf),e(ha,cr),e(cr,Lf),e(ha,jf),e(dt,Pf),e(dt,ma),e(ma,Nf),e(ma,fa),e(fa,Af),e(ma,Of),e(dt,Df),T(Fn,dt,null),e(dt,Sf),e(dt,xt),T(ga,xt,null),e(xt,If),e(xt,Fo),e(Fo,Wf),e(Fo,pr),e(pr,Xf),e(Fo,Hf),e(Fo,Ii),e(Ii,Qf),e(Fo,Uf),e(xt,Bf),T($n,xt,null),e(xt,Rf),T(Mn,xt,null),b(s,Rl,k),b(s,$o,k),e($o,xn),e(xn,Wi),T(_a,Wi,null),e($o,Kf),e($o,Xi),e(Xi,Vf),b(s,Kl,k),b(s,ct,k),T(ba,ct,null),e(ct,Yf),e(ct,Hi),e(Hi,Gf),e(ct,Jf),e(ct,ka),e(ka,Zf),e(ka,ur),e(ur,eg),e(ka,tg),e(ct,og),e(ct,ya),e(ya,ng),e(ya,va),e(va,sg),e(ya,ag),e(ct,rg),T(En,ct,null),e(ct,ig),e(ct,bt),T(wa,bt,null),e(bt,lg),e(bt,Mo),e(Mo,dg),e(Mo,hr),e(hr,cg),e(Mo,pg),e(Mo,Qi),e(Qi,ug),e(Mo,hg),e(bt,mg),T(qn,bt,null),e(bt,fg),T(zn,bt,null),e(bt,gg),T(Cn,bt,null),b(s,Vl,k),b(s,xo,k),e(xo,Ln),e(Ln,Ui),T(Ta,Ui,null),e(xo,_g),e(xo,Bi),e(Bi,bg),b(s,Yl,k),b(s,pt,k),T(Fa,pt,null),e(pt,kg),e(pt,Eo),e(Eo,yg),e(Eo,Ri),e(Ri,vg),e(Eo,wg),e(Eo,Ki),e(Ki,Tg),e(Eo,Fg),e(pt,$g),e(pt,$a),e($a,Mg),e($a,mr),e(mr,xg),e($a,Eg),e(pt,qg),e(pt,Ma),e(Ma,zg),e(Ma,xa),e(xa,Cg),e(Ma,Lg),e(pt,jg),T(jn,pt,null),e(pt,Pg),e(pt,kt),T(Ea,kt,null),e(kt,Ng),e(kt,qo),e(qo,Ag),e(qo,fr),e(fr,Og),e(qo,Dg),e(qo,Vi),e(Vi,Sg),e(qo,Ig),e(kt,Wg),T(Pn,kt,null),e(kt,Xg),T(Nn,kt,null),e(kt,Hg),T(An,kt,null),Gl=!0},p(s,[k]){const qa={};k&2&&(qa.$$scope={dirty:k,ctx:s}),Po.$set(qa);const Yi={};k&2&&(Yi.$$scope={dirty:k,ctx:s}),Oo.$set(Yi);const Gi={};k&2&&(Gi.$$scope={dirty:k,ctx:s}),Do.$set(Gi);const Ji={};k&2&&(Ji.$$scope={dirty:k,ctx:s}),Io.$set(Ji);const za={};k&2&&(za.$$scope={dirty:k,ctx:s}),Wo.$set(za);const Zi={};k&2&&(Zi.$$scope={dirty:k,ctx:s}),Xo.$set(Zi);const el={};k&2&&(el.$$scope={dirty:k,ctx:s}),Qo.$set(el);const tl={};k&2&&(tl.$$scope={dirty:k,ctx:s}),Uo.$set(tl);const Ca={};k&2&&(Ca.$$scope={dirty:k,ctx:s}),Bo.$set(Ca);const ol={};k&2&&(ol.$$scope={dirty:k,ctx:s}),Ro.$set(ol);const nl={};k&2&&(nl.$$scope={dirty:k,ctx:s}),Ko.$set(nl);const sl={};k&2&&(sl.$$scope={dirty:k,ctx:s}),Yo.$set(sl);const al={};k&2&&(al.$$scope={dirty:k,ctx:s}),Go.$set(al);const zo={};k&2&&(zo.$$scope={dirty:k,ctx:s}),Zo.$set(zo);const rl={};k&2&&(rl.$$scope={dirty:k,ctx:s}),en.$set(rl);const il={};k&2&&(il.$$scope={dirty:k,ctx:s}),tn.$set(il);const La={};k&2&&(La.$$scope={dirty:k,ctx:s}),nn.$set(La);const ll={};k&2&&(ll.$$scope={dirty:k,ctx:s}),sn.$set(ll);const dl={};k&2&&(dl.$$scope={dirty:k,ctx:s}),an.$set(dl);const cl={};k&2&&(cl.$$scope={dirty:k,ctx:s}),ln.$set(cl);const Co={};k&2&&(Co.$$scope={dirty:k,ctx:s}),dn.$set(Co);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:s}),pn.$set(Xt);const pl={};k&2&&(pl.$$scope={dirty:k,ctx:s}),un.$set(pl);const ul={};k&2&&(ul.$$scope={dirty:k,ctx:s}),hn.$set(ul);const hl={};k&2&&(hl.$$scope={dirty:k,ctx:s}),fn.$set(hl);const Lo={};k&2&&(Lo.$$scope={dirty:k,ctx:s}),gn.$set(Lo);const ml={};k&2&&(ml.$$scope={dirty:k,ctx:s}),_n.$set(ml);const fl={};k&2&&(fl.$$scope={dirty:k,ctx:s}),kn.$set(fl);const ja={};k&2&&(ja.$$scope={dirty:k,ctx:s}),yn.$set(ja);const gl={};k&2&&(gl.$$scope={dirty:k,ctx:s}),vn.$set(gl);const _l={};k&2&&(_l.$$scope={dirty:k,ctx:s}),wn.$set(_l);const bl={};k&2&&(bl.$$scope={dirty:k,ctx:s}),Fn.$set(bl);const Ge={};k&2&&(Ge.$$scope={dirty:k,ctx:s}),$n.$set(Ge);const kl={};k&2&&(kl.$$scope={dirty:k,ctx:s}),Mn.$set(kl);const Ht={};k&2&&(Ht.$$scope={dirty:k,ctx:s}),En.$set(Ht);const yl={};k&2&&(yl.$$scope={dirty:k,ctx:s}),qn.$set(yl);const vl={};k&2&&(vl.$$scope={dirty:k,ctx:s}),zn.$set(vl);const Qt={};k&2&&(Qt.$$scope={dirty:k,ctx:s}),Cn.$set(Qt);const wl={};k&2&&(wl.$$scope={dirty:k,ctx:s}),jn.$set(wl);const Tl={};k&2&&(Tl.$$scope={dirty:k,ctx:s}),Pn.$set(Tl);const Fl={};k&2&&(Fl.$$scope={dirty:k,ctx:s}),Nn.$set(Fl);const Pa={};k&2&&(Pa.$$scope={dirty:k,ctx:s}),An.$set(Pa)},i(s){Gl||(F(l.$$.fragment,s),F(x.$$.fragment,s),F(pe.$$.fragment,s),F(ue.$$.fragment,s),F(De.$$.fragment,s),F(Qn.$$.fragment,s),F(Rn.$$.fragment,s),F(Vn.$$.fragment,s),F(Yn.$$.fragment,s),F(Po.$$.fragment,s),F(Gn.$$.fragment,s),F(Zn.$$.fragment,s),F(es.$$.fragment,s),F(ss.$$.fragment,s),F(Oo.$$.fragment,s),F(Do.$$.fragment,s),F(as.$$.fragment,s),F(rs.$$.fragment,s),F(ps.$$.fragment,s),F(Io.$$.fragment,s),F(Wo.$$.fragment,s),F(Xo.$$.fragment,s),F(us.$$.fragment,s),F(hs.$$.fragment,s),F(bs.$$.fragment,s),F(Qo.$$.fragment,s),F(Uo.$$.fragment,s),F(Bo.$$.fragment,s),F(Ro.$$.fragment,s),F(Ko.$$.fragment,s),F(ks.$$.fragment,s),F(ys.$$.fragment,s),F($s.$$.fragment,s),F(Yo.$$.fragment,s),F(Go.$$.fragment,s),F(Ms.$$.fragment,s),F(xs.$$.fragment,s),F(Ls.$$.fragment,s),F(Zo.$$.fragment,s),F(en.$$.fragment,s),F(tn.$$.fragment,s),F(js.$$.fragment,s),F(Ps.$$.fragment,s),F(Ss.$$.fragment,s),F(nn.$$.fragment,s),F(sn.$$.fragment,s),F(an.$$.fragment,s),F(Is.$$.fragment,s),F(Ws.$$.fragment,s),F(Bs.$$.fragment,s),F(ln.$$.fragment,s),F(dn.$$.fragment,s),F(Rs.$$.fragment,s),F(Ks.$$.fragment,s),F(pn.$$.fragment,s),F(Js.$$.fragment,s),F(un.$$.fragment,s),F(hn.$$.fragment,s),F(Zs.$$.fragment,s),F(ea.$$.fragment,s),F(fn.$$.fragment,s),F(sa.$$.fragment,s),F(gn.$$.fragment,s),F(_n.$$.fragment,s),F(aa.$$.fragment,s),F(ra.$$.fragment,s),F(kn.$$.fragment,s),F(ca.$$.fragment,s),F(yn.$$.fragment,s),F(vn.$$.fragment,s),F(wn.$$.fragment,s),F(pa.$$.fragment,s),F(ua.$$.fragment,s),F(Fn.$$.fragment,s),F(ga.$$.fragment,s),F($n.$$.fragment,s),F(Mn.$$.fragment,s),F(_a.$$.fragment,s),F(ba.$$.fragment,s),F(En.$$.fragment,s),F(wa.$$.fragment,s),F(qn.$$.fragment,s),F(zn.$$.fragment,s),F(Cn.$$.fragment,s),F(Ta.$$.fragment,s),F(Fa.$$.fragment,s),F(jn.$$.fragment,s),F(Ea.$$.fragment,s),F(Pn.$$.fragment,s),F(Nn.$$.fragment,s),F(An.$$.fragment,s),Gl=!0)},o(s){$(l.$$.fragment,s),$(x.$$.fragment,s),$(pe.$$.fragment,s),$(ue.$$.fragment,s),$(De.$$.fragment,s),$(Qn.$$.fragment,s),$(Rn.$$.fragment,s),$(Vn.$$.fragment,s),$(Yn.$$.fragment,s),$(Po.$$.fragment,s),$(Gn.$$.fragment,s),$(Zn.$$.fragment,s),$(es.$$.fragment,s),$(ss.$$.fragment,s),$(Oo.$$.fragment,s),$(Do.$$.fragment,s),$(as.$$.fragment,s),$(rs.$$.fragment,s),$(ps.$$.fragment,s),$(Io.$$.fragment,s),$(Wo.$$.fragment,s),$(Xo.$$.fragment,s),$(us.$$.fragment,s),$(hs.$$.fragment,s),$(bs.$$.fragment,s),$(Qo.$$.fragment,s),$(Uo.$$.fragment,s),$(Bo.$$.fragment,s),$(Ro.$$.fragment,s),$(Ko.$$.fragment,s),$(ks.$$.fragment,s),$(ys.$$.fragment,s),$($s.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$(Ms.$$.fragment,s),$(xs.$$.fragment,s),$(Ls.$$.fragment,s),$(Zo.$$.fragment,s),$(en.$$.fragment,s),$(tn.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(Ss.$$.fragment,s),$(nn.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(Is.$$.fragment,s),$(Ws.$$.fragment,s),$(Bs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(Rs.$$.fragment,s),$(Ks.$$.fragment,s),$(pn.$$.fragment,s),$(Js.$$.fragment,s),$(un.$$.fragment,s),$(hn.$$.fragment,s),$(Zs.$$.fragment,s),$(ea.$$.fragment,s),$(fn.$$.fragment,s),$(sa.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(aa.$$.fragment,s),$(ra.$$.fragment,s),$(kn.$$.fragment,s),$(ca.$$.fragment,s),$(yn.$$.fragment,s),$(vn.$$.fragment,s),$(wn.$$.fragment,s),$(pa.$$.fragment,s),$(ua.$$.fragment,s),$(Fn.$$.fragment,s),$(ga.$$.fragment,s),$($n.$$.fragment,s),$(Mn.$$.fragment,s),$(_a.$$.fragment,s),$(ba.$$.fragment,s),$(En.$$.fragment,s),$(wa.$$.fragment,s),$(qn.$$.fragment,s),$(zn.$$.fragment,s),$(Cn.$$.fragment,s),$(Ta.$$.fragment,s),$(Fa.$$.fragment,s),$(jn.$$.fragment,s),$(Ea.$$.fragment,s),$(Pn.$$.fragment,s),$(Nn.$$.fragment,s),$(An.$$.fragment,s),Gl=!1},d(s){t(d),s&&t(_),s&&t(c),M(l),s&&t(ge),s&&t(D),M(x),s&&t(_e),s&&t(I),s&&t(be),s&&t(W),s&&t(ke),s&&t(X),s&&t(te),s&&t(L),s&&t(ye),s&&t(j),M(pe),s&&t(ve),s&&t(A),M(ue),s&&t(R),s&&t(Ae),M(De),s&&t(oe),s&&t(J),M(Qn),M(Rn),M(Vn),M(Yn),M(Po),M(Gn),s&&t($l),s&&t(eo),M(Zn),s&&t(Ml),s&&t(ht),M(es),M(ss),M(Oo),M(Do),s&&t(xl),s&&t(oo),M(as),s&&t(El),s&&t(et),M(rs),M(ps),M(Io),M(Wo),M(Xo),s&&t(ql),s&&t(so),M(us),s&&t(zl),s&&t(tt),M(hs),M(bs),M(Qo),M(Uo),M(Bo),M(Ro),M(Ko),s&&t(Cl),s&&t(ro),M(ks),s&&t(Ll),s&&t(ot),M(ys),M($s),M(Yo),M(Go),s&&t(jl),s&&t(lo),M(Ms),s&&t(Pl),s&&t(nt),M(xs),M(Ls),M(Zo),M(en),M(tn),s&&t(Nl),s&&t(po),M(js),s&&t(Al),s&&t(st),M(Ps),M(Ss),M(nn),M(sn),M(an),s&&t(Ol),s&&t(mo),M(Is),s&&t(Dl),s&&t(at),M(Ws),M(Bs),M(ln),M(dn),s&&t(Sl),s&&t(_o),M(Rs),s&&t(Il),s&&t(rt),M(Ks),M(pn),M(Js),M(un),M(hn),s&&t(Wl),s&&t(ko),M(Zs),s&&t(Xl),s&&t(it),M(ea),M(fn),M(sa),M(gn),M(_n),s&&t(Hl),s&&t(vo),M(aa),s&&t(Ql),s&&t(lt),M(ra),M(kn),M(ca),M(yn),M(vn),M(wn),s&&t(Ul),s&&t(To),M(pa),s&&t(Bl),s&&t(dt),M(ua),M(Fn),M(ga),M($n),M(Mn),s&&t(Rl),s&&t($o),M(_a),s&&t(Kl),s&&t(ct),M(ba),M(En),M(wa),M(qn),M(zn),M(Cn),s&&t(Vl),s&&t(xo),M(Ta),s&&t(Yl),s&&t(pt),M(Fa),M(jn),M(Ea),M(Pn),M(Nn),M(An)}}}const ty={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function oy(q){return pk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dy extends ik{constructor(d){super();lk(this,d,oy,ey,dk,{})}}export{dy as default,ty as metadata};
