import{S as ik,i as lk,s as dk,e as a,k as m,w,t as o,M as ck,c as r,d as t,m as u,a as i,x as T,h as n,b as f,G as e,g as b,y as v,q as F,o as $,B as M,v as pk,L as Xe}from"../../chunks/vendor-hf-doc-builder.js";import{T as Je}from"../../chunks/Tip-hf-doc-builder.js";import{D as ie}from"../../chunks/Docstring-hf-doc-builder.js";import{C as He}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as mt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as We}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function mk(q){let d,_,c,h,y;return h=new He({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=a("p"),_=o("pair mask has the following format:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"pair mask has the following format:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function uk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function hk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import FlaubertTokenizer, FlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function fk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function gk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, XLMWithLMHeadModel
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function _k(q){let d,_;return d=new He({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<special1> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;special1&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function bk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function kk(q){let d,_,c,h,y;return h=new He({props:{code:`import torch
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
`}}),{c(){d=a("p"),_=o("Example of single-label classification:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example of single-label classification:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function yk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function wk(q){let d,_,c,h,y;return h=new He({props:{code:`import torch
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
`}}),{c(){d=a("p"),_=o("Example of multi-label classification:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example of multi-label classification:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Tk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function vk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Fk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, XLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function $k(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Mk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, XLMForTokenClassification
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function xk(q){let d,_;return d=new He({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Ek(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function qk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function zk(q){let d,_;return d=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Ck(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Lk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, XLMForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function jk(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Pk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Nk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Ak(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Ok(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Dk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import FlaubertTokenizer, TFFlaubertWithLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Sk(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Ik(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Wk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForSequenceClassification
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Xk(q){let d,_;return d=new He({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Hk(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Qk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Uk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Bk(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Rk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Kk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForTokenClassification
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Vk(q){let d,_;return d=new He({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function Yk(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe;return{c(){d=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),h=o("transformers"),y=o(" accept two formats as input:"),l=m(),p=a("ul"),C=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),ge=m(),D=a("li"),ae=o("having all inputs as a list, tuple or dict in the first positional argument."),Z=m(),x=a("p"),ve=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=a("code"),Fe=o("model.fit()"),_e=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),K=a("code"),Me=o("fit()"),be=o(" and "),W=a("code"),xe=o("predict()"),ke=o(`, such as when creating your own layers or models with
the Keras `),X=a("code"),he=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),te=m(),L=a("ul"),N=a("li"),de=o("a single Tensor with "),V=a("code"),qe=o("input_ids"),ce=o(" only and nothing else: "),Y=a("code"),ze=o("model(input_ids)"),ye=m(),j=a("li"),re=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=a("code"),pe=o("model([input_ids, attention_mask])"),Ce=o(" or "),U=a("code"),Le=o("model([input_ids, attention_mask, token_type_ids])"),we=m(),A=a("li"),me=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=a("code"),ee=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ne=m(),P=a("p"),je=o(`Note that when creating models and layers with
`),O=a("a"),ue=o("subclassing"),Pe=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(g){d=r(g,"P",{});var E=i(d);_=n(E,"TensorFlow models and layers in "),c=r(E,"CODE",{});var Qe=i(c);h=n(Qe,"transformers"),Qe.forEach(t),y=n(E," accept two formats as input:"),E.forEach(t),l=u(g),p=r(g,"UL",{});var se=i(p);C=r(se,"LI",{});var Ue=i(C);Te=n(Ue,"having all inputs as keyword arguments (like PyTorch models), or"),Ue.forEach(t),ge=u(se),D=r(se,"LI",{});var Ne=i(D);ae=n(Ne,"having all inputs as a list, tuple or dict in the first positional argument."),Ne.forEach(t),se.forEach(t),Z=u(g),x=r(g,"P",{});var z=i(x);ve=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),H=r(z,"CODE",{});var Se=i(H);Fe=n(Se,"model.fit()"),Se.forEach(t),_e=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),I=r(z,"CODE",{});var Be=i(I);$e=n(Be,"model.fit()"),Be.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),K=r(z,"CODE",{});var Re=i(K);Me=n(Re,"fit()"),Re.forEach(t),be=n(z," and "),W=r(z,"CODE",{});var Ie=i(W);xe=n(Ie,"predict()"),Ie.forEach(t),ke=n(z,`, such as when creating your own layers or models with
the Keras `),X=r(z,"CODE",{});var Ke=i(X);he=n(Ke,"Functional"),Ke.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),te=u(g),L=r(g,"UL",{});var S=i(L);N=r(S,"LI",{});var R=i(N);de=n(R,"a single Tensor with "),V=r(R,"CODE",{});var Ae=i(V);qe=n(Ae,"input_ids"),Ae.forEach(t),ce=n(R," only and nothing else: "),Y=r(R,"CODE",{});var Oe=i(Y);ze=n(Oe,"model(input_ids)"),Oe.forEach(t),R.forEach(t),ye=u(S),j=r(S,"LI",{});var B=i(j);re=n(B,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(B,"CODE",{});var De=i(Q);pe=n(De,"model([input_ids, attention_mask])"),De.forEach(t),Ce=n(B," or "),U=r(B,"CODE",{});var Ve=i(U);Le=n(Ve,"model([input_ids, attention_mask, token_type_ids])"),Ve.forEach(t),B.forEach(t),we=u(S),A=r(S,"LI",{});var fe=i(A);me=n(fe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(fe,"CODE",{});var Ye=i(G);ee=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(t),fe.forEach(t),S.forEach(t),ne=u(g),P=r(g,"P",{});var oe=i(P);je=n(oe,`Note that when creating models and layers with
`),O=r(oe,"A",{href:!0,rel:!0});var J=i(O);ue=n(J,"subclassing"),J.forEach(t),Pe=n(oe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),oe.forEach(t),this.h()},h(){f(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),f(O,"rel","nofollow")},m(g,E){b(g,d,E),e(d,_),e(d,c),e(c,h),e(d,y),b(g,l,E),b(g,p,E),e(p,C),e(C,Te),e(p,ge),e(p,D),e(D,ae),b(g,Z,E),b(g,x,E),e(x,ve),e(x,H),e(H,Fe),e(x,_e),e(x,I),e(I,$e),e(x,le),e(x,K),e(K,Me),e(x,be),e(x,W),e(W,xe),e(x,ke),e(x,X),e(X,he),e(x,Ee),b(g,te,E),b(g,L,E),e(L,N),e(N,de),e(N,V),e(V,qe),e(N,ce),e(N,Y),e(Y,ze),e(L,ye),e(L,j),e(j,re),e(j,Q),e(Q,pe),e(j,Ce),e(j,U),e(U,Le),e(L,we),e(L,A),e(A,me),e(A,G),e(G,ee),b(g,ne,E),b(g,P,E),e(P,je),e(P,O),e(O,ue),e(P,Pe)},d(g){g&&t(d),g&&t(l),g&&t(p),g&&t(Z),g&&t(x),g&&t(te),g&&t(L),g&&t(ne),g&&t(P)}}}function Gk(q){let d,_,c,h,y;return{c(){d=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),h=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(p,"CODE",{});var C=i(c);h=n(C,"Module"),C.forEach(t),y=n(p,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),p.forEach(t)},m(l,p){b(l,d,p),e(d,_),e(d,c),e(c,h),e(d,y)},d(l){l&&t(d)}}}function Jk(q){let d,_,c,h,y;return h=new He({props:{code:`from transformers import XLMTokenizer, TFXLMForQuestionAnsweringSimple
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
`}}),{c(){d=a("p"),_=o("Example:"),c=m(),w(h.$$.fragment)},l(l){d=r(l,"P",{});var p=i(d);_=n(p,"Example:"),p.forEach(t),c=u(l),T(h.$$.fragment,l)},m(l,p){b(l,d,p),e(d,_),b(l,c,p),v(h,l,p),y=!0},p:Xe,i(l){y||(F(h.$$.fragment,l),y=!0)},o(l){$(h.$$.fragment,l),y=!1},d(l){l&&t(d),l&&t(c),M(h,l)}}}function Zk(q){let d,_;return d=new He({props:{code:`# target is "nice puppet"
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
`}}),{c(){w(d.$$.fragment)},l(c){T(d.$$.fragment,c)},m(c,h){v(d,c,h),_=!0},p:Xe,i(c){_||(F(d.$$.fragment,c),_=!0)},o(c){$(d.$$.fragment,c),_=!1},d(c){M(d,c)}}}function ey(q){let d,_,c,h,y,l,p,C,Te,ge,D,ae,Z,x,ve,H,Fe,_e,I,$e,le,K,Me,be,W,xe,ke,X,he,Ee,te,L,N,de,V,qe,ce,Y,ze,ye,j,re,Q,pe,Ce,U,Le,we,A,me,G,ee,ne,P,je,O,ue,Pe,g,E,Qe,se,Ue,Ne,z,Se,Be,Re,Ie,Ke,S,R,Ae,Oe,B,De,Ve,fe,Ye,oe,J,Qn,Kd,Pr,Vd,Yd,It,Nr,Gd,Jd,Ar,Zd,ec,Wt,tc,Or,oc,nc,Dr,sc,ac,Sr,rc,ic,lc,Un,dc,Ir,cc,pc,mc,Bn,uc,Na,hc,fc,gc,Ut,Rn,_c,Wr,bc,kc,Kn,Aa,yc,Xr,wc,Tc,Oa,vc,Hr,Fc,$c,jo,Vn,Mc,Qr,xc,Ec,wt,Yn,qc,Ur,zc,Cc,Po,Lc,Zt,jc,Br,Pc,Nc,Rr,Ac,Oc,Dc,No,Gn,Sc,Jn,Ic,Kr,Wc,Xc,$l,eo,Ao,Vr,Zn,Hc,Yr,Qc,Ml,ut,es,Uc,Gr,Bc,Rc,ts,Kc,Da,Vc,Yc,Gc,os,Jc,ns,Zc,ep,tp,Tt,ss,op,to,np,Sa,sp,ap,Jr,rp,ip,lp,Oo,dp,Do,xl,oo,So,Zr,as,cp,ei,pp,El,et,rs,mp,ti,up,hp,is,fp,Ia,gp,_p,bp,ls,kp,ds,yp,wp,Tp,cs,vp,Wa,Fp,$p,Mp,ht,ps,xp,no,Ep,Xa,qp,zp,oi,Cp,Lp,jp,Io,Pp,Wo,Np,Xo,ql,so,Ho,ni,ms,Ap,si,Op,zl,tt,us,Dp,ai,Sp,Ip,hs,Wp,Ha,Xp,Hp,Qp,fs,Up,gs,Bp,Rp,Kp,_s,Vp,Qa,Yp,Gp,Jp,Ze,bs,Zp,ao,em,Ua,tm,om,ri,nm,sm,am,Qo,rm,Uo,im,Bo,lm,Ro,dm,Ko,Cl,ro,Vo,ii,ks,cm,li,pm,Ll,ot,ys,mm,di,um,hm,ws,fm,Ba,gm,_m,bm,Ts,km,vs,ym,wm,Tm,Fs,vm,Ra,Fm,$m,Mm,vt,$s,xm,io,Em,Ka,qm,zm,ci,Cm,Lm,jm,Yo,Pm,Go,jl,lo,Jo,pi,Ms,Nm,mi,Am,Pl,nt,xs,Om,ui,Dm,Sm,Es,Im,Va,Wm,Xm,Hm,qs,Qm,zs,Um,Bm,Rm,Cs,Km,Ya,Vm,Ym,Gm,ft,Ls,Jm,co,Zm,Ga,eu,tu,hi,ou,nu,su,Zo,au,en,ru,tn,Nl,po,on,fi,js,iu,gi,lu,Al,st,Ps,du,mo,cu,_i,pu,mu,bi,uu,hu,fu,Ns,gu,Ja,_u,bu,ku,As,yu,Os,wu,Tu,vu,Ds,Fu,Za,$u,Mu,xu,gt,Ss,Eu,uo,qu,er,zu,Cu,ki,Lu,ju,Pu,nn,Nu,sn,Au,an,Ol,ho,rn,yi,Is,Ou,wi,Du,Dl,at,Ws,Su,fo,Iu,Ti,Wu,Xu,vi,Hu,Qu,Uu,Xs,Bu,tr,Ru,Ku,Vu,Hs,Yu,Qs,Gu,Ju,Zu,Us,eh,or,th,oh,nh,Ft,Bs,sh,go,ah,nr,rh,ih,Fi,lh,dh,ch,ln,ph,dn,Sl,_o,cn,$i,Rs,mh,Mi,uh,Il,rt,Ks,hh,xi,fh,gh,Vs,_h,sr,bh,kh,yh,Ys,wh,Gs,Th,vh,Fh,pn,$h,$t,Js,Mh,bo,xh,ar,Eh,qh,Ei,zh,Ch,Lh,mn,jh,un,Wl,ko,hn,qi,Zs,Ph,zi,Nh,Xl,it,ea,Ah,Ci,Oh,Dh,ta,Sh,rr,Ih,Wh,Xh,oa,Hh,na,Qh,Uh,Bh,fn,Rh,Mt,sa,Kh,yo,Vh,ir,Yh,Gh,Li,Jh,Zh,ef,gn,tf,_n,Hl,wo,bn,ji,aa,of,Pi,nf,Ql,lt,ra,sf,Ni,af,rf,ia,lf,lr,df,cf,pf,la,mf,da,uf,hf,ff,kn,gf,_t,ca,_f,To,bf,dr,kf,yf,Ai,wf,Tf,vf,yn,Ff,wn,$f,Tn,Ul,vo,vn,Oi,pa,Mf,Di,xf,Bl,dt,ma,Ef,Si,qf,zf,ua,Cf,cr,Lf,jf,Pf,ha,Nf,fa,Af,Of,Df,Fn,Sf,xt,ga,If,Fo,Wf,pr,Xf,Hf,Ii,Qf,Uf,Bf,$n,Rf,Mn,Rl,$o,xn,Wi,_a,Kf,Xi,Vf,Kl,ct,ba,Yf,Hi,Gf,Jf,ka,Zf,mr,eg,tg,og,ya,ng,wa,sg,ag,rg,En,ig,bt,Ta,lg,Mo,dg,ur,cg,pg,Qi,mg,ug,hg,qn,fg,zn,gg,Cn,Vl,xo,Ln,Ui,va,_g,Bi,bg,Yl,pt,Fa,kg,Eo,yg,Ri,wg,Tg,Ki,vg,Fg,$g,$a,Mg,hr,xg,Eg,qg,Ma,zg,xa,Cg,Lg,jg,jn,Pg,kt,Ea,Ng,qo,Ag,fr,Og,Dg,Vi,Sg,Ig,Wg,Pn,Xg,Nn,Hg,An,Gl;return l=new mt({}),x=new mt({}),pe=new mt({}),me=new ie({props:{name:"class transformers.FlaubertConfig",anchor:"transformers.FlaubertConfig",parameters:[{name:"pre_norm",val:" = False"},{name:"layerdrop",val:" = 0.0"},{name:"vocab_size",val:" = 30145"},{name:"emb_dim",val:" = 2048"},{name:"n_layers",val:" = 12"},{name:"n_heads",val:" = 16"},{name:"dropout",val:" = 0.1"},{name:"attention_dropout",val:" = 0.1"},{name:"gelu_activation",val:" = True"},{name:"sinusoidal_embeddings",val:" = False"},{name:"causal",val:" = False"},{name:"asm",val:" = False"},{name:"n_langs",val:" = 1"},{name:"use_lang_emb",val:" = True"},{name:"max_position_embeddings",val:" = 512"},{name:"embed_init_std",val:" = 0.02209708691207961"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"init_std",val:" = 0.02"},{name:"bos_index",val:" = 0"},{name:"eos_index",val:" = 1"},{name:"pad_index",val:" = 2"},{name:"unk_index",val:" = 3"},{name:"mask_index",val:" = 5"},{name:"is_encoder",val:" = True"},{name:"summary_type",val:" = 'first'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"start_n_top",val:" = 5"},{name:"end_n_top",val:" = 5"},{name:"mask_token_id",val:" = 0"},{name:"lang_id",val:" = 0"},{name:"pad_token_id",val:" = 2"},{name:"bos_token_id",val:" = 0"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertConfig.pre_norm",description:`<strong>pre_norm</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply the layer normalization before or after the feed forward layer following the attention in
each layer (Vaswani et al., Tensor2Tensor for Neural Machine Translation. 2018)`,name:"pre_norm"},{anchor:"transformers.FlaubertConfig.layerdrop",description:`<strong>layerdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.0) &#x2014;
Probability to drop layers during training (Fan et al., Reducing Transformer Depth on Demand with
Structured Dropout. ICLR 2020)`,name:"layerdrop"},{anchor:"transformers.FlaubertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30145) &#x2014;
Vocabulary size of the FlauBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel">FlaubertModel</a> or <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel">TFFlaubertModel</a>.`,name:"vocab_size"},{anchor:"transformers.FlaubertConfig.emb_dim",description:`<strong>emb_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
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
The ID of the language used by the model. This parameter is used when generating text in a given language.`,name:"lang_id"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/configuration_flaubert.py#L34"}}),De=new mt({}),Qn=new ie({props:{name:"class transformers.FlaubertTokenizer",anchor:"transformers.FlaubertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"do_lowercase",val:" = False"},{name:"unk_token",val:" = '<unk>'"},{name:"bos_token",val:" = '<s>'"},{name:"sep_token",val:" = '</s>'"},{name:"pad_token",val:" = '<pad>'"},{name:"cls_token",val:" = '</s>'"},{name:"mask_token",val:" = '<special1>'"},{name:"additional_special_tokens",val:" = ['<special0>', '<special1>', '<special2>', '<special3>', '<special4>', '<special5>', '<special6>', '<special7>', '<special8>', '<special9>']"},{name:"lang2id",val:" = None"},{name:"id2lang",val:" = None"},{name:"do_lowercase_and_remove_accent",val:" = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Whether to lowercase and remove accents when tokenizing.`,name:"do_lowercase_and_remove_accent"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L165"}}),Rn=new ie({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L471",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vn=new ie({props:{name:"convert_tokens_to_string",anchor:"transformers.FlaubertTokenizer.convert_tokens_to_string",parameters:[{name:"tokens",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L465"}}),Yn=new ie({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L528",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Po=new We({props:{anchor:"transformers.FlaubertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[mk]},$$scope:{ctx:q}}}),Gn=new ie({props:{name:"get_special_tokens_mask",anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.FlaubertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/tokenization_flaubert.py#L499",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zn=new mt({}),es=new ie({props:{name:"class transformers.FlaubertModel",anchor:"transformers.FlaubertModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L133"}}),ss=new ie({props:{name:"forward",anchor:"transformers.FlaubertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"lengths",val:": typing.Optional[torch.LongTensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.FloatTensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L145",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oo=new Je({props:{$$slots:{default:[uk]},$$scope:{ctx:q}}}),Do=new We({props:{anchor:"transformers.FlaubertModel.forward.example",$$slots:{default:[hk]},$$scope:{ctx:q}}}),as=new mt({}),rs=new ie({props:{name:"class transformers.FlaubertWithLMHeadModel",anchor:"transformers.FlaubertWithLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L324"}}),ps=new ie({props:{name:"forward",anchor:"transformers.FlaubertWithLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertWithLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertWithLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L703",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Io=new Je({props:{$$slots:{default:[fk]},$$scope:{ctx:q}}}),Wo=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example",$$slots:{default:[gk]},$$scope:{ctx:q}}}),Xo=new We({props:{anchor:"transformers.FlaubertWithLMHeadModel.forward.example-2",$$slots:{default:[_k]},$$scope:{ctx:q}}}),ms=new mt({}),us=new ie({props:{name:"class transformers.FlaubertForSequenceClassification",anchor:"transformers.FlaubertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L346"}}),bs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L783",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Qo=new Je({props:{$$slots:{default:[bk]},$$scope:{ctx:q}}}),Uo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example",$$slots:{default:[kk]},$$scope:{ctx:q}}}),Bo=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-2",$$slots:{default:[yk]},$$scope:{ctx:q}}}),Ro=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-3",$$slots:{default:[wk]},$$scope:{ctx:q}}}),Ko=new We({props:{anchor:"transformers.FlaubertForSequenceClassification.forward.example-4",$$slots:{default:[Tk]},$$scope:{ctx:q}}}),ks=new mt({}),ys=new ie({props:{name:"class transformers.FlaubertForMultipleChoice",anchor:"transformers.FlaubertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L434"}}),$s=new ie({props:{name:"forward",anchor:"transformers.FlaubertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1196",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Je({props:{$$slots:{default:[vk]},$$scope:{ctx:q}}}),Go=new We({props:{anchor:"transformers.FlaubertForMultipleChoice.forward.example",$$slots:{default:[Fk]},$$scope:{ctx:q}}}),Ms=new mt({}),xs=new ie({props:{name:"class transformers.FlaubertForTokenClassification",anchor:"transformers.FlaubertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L368"}}),Ls=new ie({props:{name:"forward",anchor:"transformers.FlaubertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L1112",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zo=new Je({props:{$$slots:{default:[$k]},$$scope:{ctx:q}}}),en=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example",$$slots:{default:[Mk]},$$scope:{ctx:q}}}),tn=new We({props:{anchor:"transformers.FlaubertForTokenClassification.forward.example-2",$$slots:{default:[xk]},$$scope:{ctx:q}}}),js=new mt({}),Ps=new ie({props:{name:"class transformers.FlaubertForQuestionAnsweringSimple",anchor:"transformers.FlaubertForQuestionAnsweringSimple",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L390"}}),Ss=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L884",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),nn=new Je({props:{$$slots:{default:[Ek]},$$scope:{ctx:q}}}),sn=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example",$$slots:{default:[qk]},$$scope:{ctx:q}}}),an=new We({props:{anchor:"transformers.FlaubertForQuestionAnsweringSimple.forward.example-2",$$slots:{default:[zk]},$$scope:{ctx:q}}}),Is=new mt({}),Ws=new ie({props:{name:"class transformers.FlaubertForQuestionAnswering",anchor:"transformers.FlaubertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_flaubert.py#L412"}}),Bs=new ie({props:{name:"forward",anchor:"transformers.FlaubertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"langs",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"lengths",val:": typing.Optional[torch.Tensor] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, torch.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"is_impossible",val:": typing.Optional[torch.Tensor] = None"},{name:"cls_index",val:": typing.Optional[torch.Tensor] = None"},{name:"p_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaubertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMTokenizer">XLMTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.FlaubertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
masked. 0.0 mean token is not masked.`,name:"p_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_xlm.py#L989",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/model_doc/xlm#transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput"
>transformers.models.xlm.modeling_xlm.XLMForQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ln=new Je({props:{$$slots:{default:[Ck]},$$scope:{ctx:q}}}),dn=new We({props:{anchor:"transformers.FlaubertForQuestionAnswering.forward.example",$$slots:{default:[Lk]},$$scope:{ctx:q}}}),Rs=new mt({}),Ks=new ie({props:{name:"class transformers.TFFlaubertModel",anchor:"transformers.TFFlaubertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L238"}}),pn=new Je({props:{$$slots:{default:[jk]},$$scope:{ctx:q}}}),Js=new ie({props:{name:"call",anchor:"transformers.TFFlaubertModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L243",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Je({props:{$$slots:{default:[Pk]},$$scope:{ctx:q}}}),un=new We({props:{anchor:"transformers.TFFlaubertModel.call.example",$$slots:{default:[Nk]},$$scope:{ctx:q}}}),Zs=new mt({}),ea=new ie({props:{name:"class transformers.TFFlaubertWithLMHeadModel",anchor:"transformers.TFFlaubertWithLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L772"}}),fn=new Je({props:{$$slots:{default:[Ak]},$$scope:{ctx:q}}}),sa=new ie({props:{name:"call",anchor:"transformers.TFFlaubertWithLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertWithLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertTokenizer">FlaubertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertWithLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L801",returnDescription:`
<p>A <code>transformers.models.flaubert.modeling_tf_flaubert.TFFlaubertWithLMHeadModelOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig"
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
`}}),gn=new Je({props:{$$slots:{default:[Ok]},$$scope:{ctx:q}}}),_n=new We({props:{anchor:"transformers.TFFlaubertWithLMHeadModel.call.example",$$slots:{default:[Dk]},$$scope:{ctx:q}}}),aa=new mt({}),ra=new ie({props:{name:"class transformers.TFFlaubertForSequenceClassification",anchor:"transformers.TFFlaubertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L865"}}),kn=new Je({props:{$$slots:{default:[Sk]},$$scope:{ctx:q}}}),ca=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L910",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new Je({props:{$$slots:{default:[Ik]},$$scope:{ctx:q}}}),wn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example",$$slots:{default:[Wk]},$$scope:{ctx:q}}}),Tn=new We({props:{anchor:"transformers.TFFlaubertForSequenceClassification.call.example-2",$$slots:{default:[Xk]},$$scope:{ctx:q}}}),pa=new mt({}),ma=new ie({props:{name:"class transformers.TFFlaubertForMultipleChoice",anchor:"transformers.TFFlaubertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L910"}}),Fn=new Je({props:{$$slots:{default:[Hk]},$$scope:{ctx:q}}}),ga=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1017",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$n=new Je({props:{$$slots:{default:[Qk]},$$scope:{ctx:q}}}),Mn=new We({props:{anchor:"transformers.TFFlaubertForMultipleChoice.call.example",$$slots:{default:[Uk]},$$scope:{ctx:q}}}),_a=new mt({}),ba=new ie({props:{name:"class transformers.TFFlaubertForTokenClassification",anchor:"transformers.TFFlaubertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L895"}}),En=new Je({props:{$$slots:{default:[Bk]},$$scope:{ctx:q}}}),Ta=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1141",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qn=new Je({props:{$$slots:{default:[Rk]},$$scope:{ctx:q}}}),zn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example",$$slots:{default:[Kk]},$$scope:{ctx:q}}}),Cn=new We({props:{anchor:"transformers.TFFlaubertForTokenClassification.call.example-2",$$slots:{default:[Vk]},$$scope:{ctx:q}}}),va=new mt({}),Fa=new ie({props:{name:"class transformers.TFFlaubertForQuestionAnsweringSimple",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertConfig">FlaubertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/flaubert/modeling_tf_flaubert.py#L880"}}),jn=new Je({props:{$$slots:{default:[Yk]},$$scope:{ctx:q}}}),Ea=new ie({props:{name:"call",anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"langs",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"lengths",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"cache",val:": typing.Union[typing.Dict[str, tensorflow.python.framework.ops.Tensor], NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": bool = False"}],parametersDescription:[{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm/modeling_tf_xlm.py#L1226",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/xlm#transformers.XLMConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Je({props:{$$slots:{default:[Gk]},$$scope:{ctx:q}}}),Nn=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example",$$slots:{default:[Jk]},$$scope:{ctx:q}}}),An=new We({props:{anchor:"transformers.TFFlaubertForQuestionAnsweringSimple.call.example-2",$$slots:{default:[Zk]},$$scope:{ctx:q}}}),{c(){d=a("meta"),_=m(),c=a("h1"),h=a("a"),y=a("span"),w(l.$$.fragment),p=m(),C=a("span"),Te=o("FlauBERT"),ge=m(),D=a("h2"),ae=a("a"),Z=a("span"),w(x.$$.fragment),ve=m(),H=a("span"),Fe=o("Overview"),_e=m(),I=a("p"),$e=o("The FlauBERT model was proposed in the paper "),le=a("a"),K=o("FlauBERT: Unsupervised Language Model Pre-training for French"),Me=o(` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),be=m(),W=a("p"),xe=o("The abstract from the paper is the following:"),ke=m(),X=a("p"),he=a("em"),Ee=o(`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),te=m(),L=a("p"),N=o("This model was contributed by "),de=a("a"),V=o("formiel"),qe=o(". The original code can be found "),ce=a("a"),Y=o("here"),ze=o("."),ye=m(),j=a("h2"),re=a("a"),Q=a("span"),w(pe.$$.fragment),Ce=m(),U=a("span"),Le=o("FlaubertConfig"),we=m(),A=a("div"),w(me.$$.fragment),G=m(),ee=a("p"),ne=o("This is the configuration class to store the configuration of a "),P=a("a"),je=o("FlaubertModel"),O=o(" or a "),ue=a("a"),Pe=o("TFFlaubertModel"),g=o(`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=a("a"),Qe=o("flaubert/flaubert_base_uncased"),se=o(" architecture."),Ue=m(),Ne=a("p"),z=o("Configuration objects inherit from "),Se=a("a"),Be=o("PretrainedConfig"),Re=o(` and can be used to control the model outputs. Read the
documentation from `),Ie=a("a"),Ke=o("PretrainedConfig"),S=o(" for more information."),R=m(),Ae=a("h2"),Oe=a("a"),B=a("span"),w(De.$$.fragment),Ve=m(),fe=a("span"),Ye=o("FlaubertTokenizer"),oe=m(),J=a("div"),w(Qn.$$.fragment),Kd=m(),Pr=a("p"),Vd=o("Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),Yd=m(),It=a("ul"),Nr=a("li"),Gd=o("Moses preprocessing and tokenization."),Jd=m(),Ar=a("li"),Zd=o("Normalizing all inputs text."),ec=m(),Wt=a("li"),tc=o("The arguments "),Or=a("code"),oc=o("special_tokens"),nc=o(" and the function "),Dr=a("code"),sc=o("set_special_tokens"),ac=o(`, can be used to add additional symbols (like
\u201D`),Sr=a("strong"),rc=o("classify"),ic=o("\u201D) to a vocabulary."),lc=m(),Un=a("li"),dc=o("The argument "),Ir=a("code"),cc=o("do_lowercase"),pc=o(" controls lower casing (automatically set for pretrained vocabularies)."),mc=m(),Bn=a("p"),uc=o("This tokenizer inherits from "),Na=a("a"),hc=o("PreTrainedTokenizer"),fc=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),gc=m(),Ut=a("div"),w(Rn.$$.fragment),_c=m(),Wr=a("p"),bc=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),kc=m(),Kn=a("ul"),Aa=a("li"),yc=o("single sequence: "),Xr=a("code"),wc=o("<s> X </s>"),Tc=m(),Oa=a("li"),vc=o("pair of sequences: "),Hr=a("code"),Fc=o("<s> A </s> B </s>"),$c=m(),jo=a("div"),w(Vn.$$.fragment),Mc=m(),Qr=a("p"),xc=o("Converts a sequence of tokens (string) in a single string."),Ec=m(),wt=a("div"),w(Yn.$$.fragment),qc=m(),Ur=a("p"),zc=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),Cc=m(),w(Po.$$.fragment),Lc=m(),Zt=a("p"),jc=o("If "),Br=a("code"),Pc=o("token_ids_1"),Nc=o(" is "),Rr=a("code"),Ac=o("None"),Oc=o(", this method only returns the first portion of the mask (0s)."),Dc=m(),No=a("div"),w(Gn.$$.fragment),Sc=m(),Jn=a("p"),Ic=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Kr=a("code"),Wc=o("prepare_for_model"),Xc=o(" method."),$l=m(),eo=a("h2"),Ao=a("a"),Vr=a("span"),w(Zn.$$.fragment),Hc=m(),Yr=a("span"),Qc=o("FlaubertModel"),Ml=m(),ut=a("div"),w(es.$$.fragment),Uc=m(),Gr=a("p"),Bc=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),Rc=m(),ts=a("p"),Kc=o("This model inherits from "),Da=a("a"),Vc=o("PreTrainedModel"),Yc=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gc=m(),os=a("p"),Jc=o("This model is also a PyTorch "),ns=a("a"),Zc=o("torch.nn.Module"),ep=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),tp=m(),Tt=a("div"),w(ss.$$.fragment),op=m(),to=a("p"),np=o("The "),Sa=a("a"),sp=o("FlaubertModel"),ap=o(" forward method, overrides the "),Jr=a("code"),rp=o("__call__"),ip=o(" special method."),lp=m(),w(Oo.$$.fragment),dp=m(),w(Do.$$.fragment),xl=m(),oo=a("h2"),So=a("a"),Zr=a("span"),w(as.$$.fragment),cp=m(),ei=a("span"),pp=o("FlaubertWithLMHeadModel"),El=m(),et=a("div"),w(rs.$$.fragment),mp=m(),ti=a("p"),up=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),hp=m(),is=a("p"),fp=o("This model inherits from "),Ia=a("a"),gp=o("PreTrainedModel"),_p=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bp=m(),ls=a("p"),kp=o("This model is also a PyTorch "),ds=a("a"),yp=o("torch.nn.Module"),wp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=m(),cs=a("p"),vp=o("This class overrides "),Wa=a("a"),Fp=o("XLMWithLMHeadModel"),$p=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Mp=m(),ht=a("div"),w(ps.$$.fragment),xp=m(),no=a("p"),Ep=o("The "),Xa=a("a"),qp=o("XLMWithLMHeadModel"),zp=o(" forward method, overrides the "),oi=a("code"),Cp=o("__call__"),Lp=o(" special method."),jp=m(),w(Io.$$.fragment),Pp=m(),w(Wo.$$.fragment),Np=m(),w(Xo.$$.fragment),ql=m(),so=a("h2"),Ho=a("a"),ni=a("span"),w(ms.$$.fragment),Ap=m(),si=a("span"),Op=o("FlaubertForSequenceClassification"),zl=m(),tt=a("div"),w(us.$$.fragment),Dp=m(),ai=a("p"),Sp=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Ip=m(),hs=a("p"),Wp=o("This model inherits from "),Ha=a("a"),Xp=o("PreTrainedModel"),Hp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp=m(),fs=a("p"),Up=o("This model is also a PyTorch "),gs=a("a"),Bp=o("torch.nn.Module"),Rp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kp=m(),_s=a("p"),Vp=o("This class overrides "),Qa=a("a"),Yp=o("XLMForSequenceClassification"),Gp=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Jp=m(),Ze=a("div"),w(bs.$$.fragment),Zp=m(),ao=a("p"),em=o("The "),Ua=a("a"),tm=o("XLMForSequenceClassification"),om=o(" forward method, overrides the "),ri=a("code"),nm=o("__call__"),sm=o(" special method."),am=m(),w(Qo.$$.fragment),rm=m(),w(Uo.$$.fragment),im=m(),w(Bo.$$.fragment),lm=m(),w(Ro.$$.fragment),dm=m(),w(Ko.$$.fragment),Cl=m(),ro=a("h2"),Vo=a("a"),ii=a("span"),w(ks.$$.fragment),cm=m(),li=a("span"),pm=o("FlaubertForMultipleChoice"),Ll=m(),ot=a("div"),w(ys.$$.fragment),mm=m(),di=a("p"),um=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),hm=m(),ws=a("p"),fm=o("This model inherits from "),Ba=a("a"),gm=o("PreTrainedModel"),_m=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm=m(),Ts=a("p"),km=o("This model is also a PyTorch "),vs=a("a"),ym=o("torch.nn.Module"),wm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tm=m(),Fs=a("p"),vm=o("This class overrides "),Ra=a("a"),Fm=o("XLMForMultipleChoice"),$m=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Mm=m(),vt=a("div"),w($s.$$.fragment),xm=m(),io=a("p"),Em=o("The "),Ka=a("a"),qm=o("XLMForMultipleChoice"),zm=o(" forward method, overrides the "),ci=a("code"),Cm=o("__call__"),Lm=o(" special method."),jm=m(),w(Yo.$$.fragment),Pm=m(),w(Go.$$.fragment),jl=m(),lo=a("h2"),Jo=a("a"),pi=a("span"),w(Ms.$$.fragment),Nm=m(),mi=a("span"),Am=o("FlaubertForTokenClassification"),Pl=m(),nt=a("div"),w(xs.$$.fragment),Om=m(),ui=a("p"),Dm=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Sm=m(),Es=a("p"),Im=o("This model inherits from "),Va=a("a"),Wm=o("PreTrainedModel"),Xm=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=m(),qs=a("p"),Qm=o("This model is also a PyTorch "),zs=a("a"),Um=o("torch.nn.Module"),Bm=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rm=m(),Cs=a("p"),Km=o("This class overrides "),Ya=a("a"),Vm=o("XLMForTokenClassification"),Ym=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gm=m(),ft=a("div"),w(Ls.$$.fragment),Jm=m(),co=a("p"),Zm=o("The "),Ga=a("a"),eu=o("XLMForTokenClassification"),tu=o(" forward method, overrides the "),hi=a("code"),ou=o("__call__"),nu=o(" special method."),su=m(),w(Zo.$$.fragment),au=m(),w(en.$$.fragment),ru=m(),w(tn.$$.fragment),Nl=m(),po=a("h2"),on=a("a"),fi=a("span"),w(js.$$.fragment),iu=m(),gi=a("span"),lu=o("FlaubertForQuestionAnsweringSimple"),Al=m(),st=a("div"),w(Ps.$$.fragment),du=m(),mo=a("p"),cu=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_i=a("code"),pu=o("span start logits"),mu=o(" and "),bi=a("code"),uu=o("span end logits"),hu=o(")."),fu=m(),Ns=a("p"),gu=o("This model inherits from "),Ja=a("a"),_u=o("PreTrainedModel"),bu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ku=m(),As=a("p"),yu=o("This model is also a PyTorch "),Os=a("a"),wu=o("torch.nn.Module"),Tu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vu=m(),Ds=a("p"),Fu=o("This class overrides "),Za=a("a"),$u=o("XLMForQuestionAnsweringSimple"),Mu=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xu=m(),gt=a("div"),w(Ss.$$.fragment),Eu=m(),uo=a("p"),qu=o("The "),er=a("a"),zu=o("XLMForQuestionAnsweringSimple"),Cu=o(" forward method, overrides the "),ki=a("code"),Lu=o("__call__"),ju=o(" special method."),Pu=m(),w(nn.$$.fragment),Nu=m(),w(sn.$$.fragment),Au=m(),w(an.$$.fragment),Ol=m(),ho=a("h2"),rn=a("a"),yi=a("span"),w(Is.$$.fragment),Ou=m(),wi=a("span"),Du=o("FlaubertForQuestionAnswering"),Dl=m(),at=a("div"),w(Ws.$$.fragment),Su=m(),fo=a("p"),Iu=o(`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ti=a("code"),Wu=o("span start logits"),Xu=o(" and "),vi=a("code"),Hu=o("span end logits"),Qu=o(")."),Uu=m(),Xs=a("p"),Bu=o("This model inherits from "),tr=a("a"),Ru=o("PreTrainedModel"),Ku=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vu=m(),Hs=a("p"),Yu=o("This model is also a PyTorch "),Qs=a("a"),Gu=o("torch.nn.Module"),Ju=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zu=m(),Us=a("p"),eh=o("This class overrides "),or=a("a"),th=o("XLMForQuestionAnswering"),oh=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),nh=m(),Ft=a("div"),w(Bs.$$.fragment),sh=m(),go=a("p"),ah=o("The "),nr=a("a"),rh=o("XLMForQuestionAnswering"),ih=o(" forward method, overrides the "),Fi=a("code"),lh=o("__call__"),dh=o(" special method."),ch=m(),w(ln.$$.fragment),ph=m(),w(dn.$$.fragment),Sl=m(),_o=a("h2"),cn=a("a"),$i=a("span"),w(Rs.$$.fragment),mh=m(),Mi=a("span"),uh=o("TFFlaubertModel"),Il=m(),rt=a("div"),w(Ks.$$.fragment),hh=m(),xi=a("p"),fh=o("The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),gh=m(),Vs=a("p"),_h=o("This model inherits from "),sr=a("a"),bh=o("TFPreTrainedModel"),kh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yh=m(),Ys=a("p"),wh=o("This model is also a "),Gs=a("a"),Th=o("tf.keras.Model"),vh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fh=m(),w(pn.$$.fragment),$h=m(),$t=a("div"),w(Js.$$.fragment),Mh=m(),bo=a("p"),xh=o("The "),ar=a("a"),Eh=o("TFFlaubertModel"),qh=o(" forward method, overrides the "),Ei=a("code"),zh=o("__call__"),Ch=o(" special method."),Lh=m(),w(mn.$$.fragment),jh=m(),w(un.$$.fragment),Wl=m(),ko=a("h2"),hn=a("a"),qi=a("span"),w(Zs.$$.fragment),Ph=m(),zi=a("span"),Nh=o("TFFlaubertWithLMHeadModel"),Xl=m(),it=a("div"),w(ea.$$.fragment),Ah=m(),Ci=a("p"),Oh=o(`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Dh=m(),ta=a("p"),Sh=o("This model inherits from "),rr=a("a"),Ih=o("TFPreTrainedModel"),Wh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xh=m(),oa=a("p"),Hh=o("This model is also a "),na=a("a"),Qh=o("tf.keras.Model"),Uh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bh=m(),w(fn.$$.fragment),Rh=m(),Mt=a("div"),w(sa.$$.fragment),Kh=m(),yo=a("p"),Vh=o("The "),ir=a("a"),Yh=o("TFFlaubertWithLMHeadModel"),Gh=o(" forward method, overrides the "),Li=a("code"),Jh=o("__call__"),Zh=o(" special method."),ef=m(),w(gn.$$.fragment),tf=m(),w(_n.$$.fragment),Hl=m(),wo=a("h2"),bn=a("a"),ji=a("span"),w(aa.$$.fragment),of=m(),Pi=a("span"),nf=o("TFFlaubertForSequenceClassification"),Ql=m(),lt=a("div"),w(ra.$$.fragment),sf=m(),Ni=a("p"),af=o(`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),rf=m(),ia=a("p"),lf=o("This model inherits from "),lr=a("a"),df=o("TFPreTrainedModel"),cf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pf=m(),la=a("p"),mf=o("This model is also a "),da=a("a"),uf=o("tf.keras.Model"),hf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ff=m(),w(kn.$$.fragment),gf=m(),_t=a("div"),w(ca.$$.fragment),_f=m(),To=a("p"),bf=o("The "),dr=a("a"),kf=o("TFXLMForSequenceClassification"),yf=o(" forward method, overrides the "),Ai=a("code"),wf=o("__call__"),Tf=o(" special method."),vf=m(),w(yn.$$.fragment),Ff=m(),w(wn.$$.fragment),$f=m(),w(Tn.$$.fragment),Ul=m(),vo=a("h2"),vn=a("a"),Oi=a("span"),w(pa.$$.fragment),Mf=m(),Di=a("span"),xf=o("TFFlaubertForMultipleChoice"),Bl=m(),dt=a("div"),w(ma.$$.fragment),Ef=m(),Si=a("p"),qf=o(`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zf=m(),ua=a("p"),Cf=o("This model inherits from "),cr=a("a"),Lf=o("TFPreTrainedModel"),jf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pf=m(),ha=a("p"),Nf=o("This model is also a "),fa=a("a"),Af=o("tf.keras.Model"),Of=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Df=m(),w(Fn.$$.fragment),Sf=m(),xt=a("div"),w(ga.$$.fragment),If=m(),Fo=a("p"),Wf=o("The "),pr=a("a"),Xf=o("TFXLMForMultipleChoice"),Hf=o(" forward method, overrides the "),Ii=a("code"),Qf=o("__call__"),Uf=o(" special method."),Bf=m(),w($n.$$.fragment),Rf=m(),w(Mn.$$.fragment),Rl=m(),$o=a("h2"),xn=a("a"),Wi=a("span"),w(_a.$$.fragment),Kf=m(),Xi=a("span"),Vf=o("TFFlaubertForTokenClassification"),Kl=m(),ct=a("div"),w(ba.$$.fragment),Yf=m(),Hi=a("p"),Gf=o(`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Jf=m(),ka=a("p"),Zf=o("This model inherits from "),mr=a("a"),eg=o("TFPreTrainedModel"),tg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),og=m(),ya=a("p"),ng=o("This model is also a "),wa=a("a"),sg=o("tf.keras.Model"),ag=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rg=m(),w(En.$$.fragment),ig=m(),bt=a("div"),w(Ta.$$.fragment),lg=m(),Mo=a("p"),dg=o("The "),ur=a("a"),cg=o("TFXLMForTokenClassification"),pg=o(" forward method, overrides the "),Qi=a("code"),mg=o("__call__"),ug=o(" special method."),hg=m(),w(qn.$$.fragment),fg=m(),w(zn.$$.fragment),gg=m(),w(Cn.$$.fragment),Vl=m(),xo=a("h2"),Ln=a("a"),Ui=a("span"),w(va.$$.fragment),_g=m(),Bi=a("span"),bg=o("TFFlaubertForQuestionAnsweringSimple"),Yl=m(),pt=a("div"),w(Fa.$$.fragment),kg=m(),Eo=a("p"),yg=o(`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ri=a("code"),wg=o("span start logits"),Tg=o(" and "),Ki=a("code"),vg=o("span end logits"),Fg=o(")."),$g=m(),$a=a("p"),Mg=o("This model inherits from "),hr=a("a"),xg=o("TFPreTrainedModel"),Eg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qg=m(),Ma=a("p"),zg=o("This model is also a "),xa=a("a"),Cg=o("tf.keras.Model"),Lg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jg=m(),w(jn.$$.fragment),Pg=m(),kt=a("div"),w(Ea.$$.fragment),Ng=m(),qo=a("p"),Ag=o("The "),fr=a("a"),Og=o("TFXLMForQuestionAnsweringSimple"),Dg=o(" forward method, overrides the "),Vi=a("code"),Sg=o("__call__"),Ig=o(" special method."),Wg=m(),w(Pn.$$.fragment),Xg=m(),w(Nn.$$.fragment),Hg=m(),w(An.$$.fragment),this.h()},l(s){const k=ck('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=u(s),c=r(s,"H1",{class:!0});var qa=i(c);h=r(qa,"A",{id:!0,class:!0,href:!0});var Yi=i(h);y=r(Yi,"SPAN",{});var Gi=i(y);T(l.$$.fragment,Gi),Gi.forEach(t),Yi.forEach(t),p=u(qa),C=r(qa,"SPAN",{});var Ji=i(C);Te=n(Ji,"FlauBERT"),Ji.forEach(t),qa.forEach(t),ge=u(s),D=r(s,"H2",{class:!0});var za=i(D);ae=r(za,"A",{id:!0,class:!0,href:!0});var Zi=i(ae);Z=r(Zi,"SPAN",{});var el=i(Z);T(x.$$.fragment,el),el.forEach(t),Zi.forEach(t),ve=u(za),H=r(za,"SPAN",{});var tl=i(H);Fe=n(tl,"Overview"),tl.forEach(t),za.forEach(t),_e=u(s),I=r(s,"P",{});var Ca=i(I);$e=n(Ca,"The FlauBERT model was proposed in the paper "),le=r(Ca,"A",{href:!0,rel:!0});var ol=i(le);K=n(ol,"FlauBERT: Unsupervised Language Model Pre-training for French"),ol.forEach(t),Me=n(Ca,` by Hang Le et al. It\u2019s a transformer model pretrained using a masked language
modeling (MLM) objective (like BERT).`),Ca.forEach(t),be=u(s),W=r(s,"P",{});var nl=i(W);xe=n(nl,"The abstract from the paper is the following:"),nl.forEach(t),ke=u(s),X=r(s,"P",{});var sl=i(X);he=r(sl,"EM",{});var al=i(he);Ee=n(al,`Language models have become a key step to achieve state-of-the art results in many different Natural Language
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
community for further reproducible experiments in French NLP.`),al.forEach(t),sl.forEach(t),te=u(s),L=r(s,"P",{});var zo=i(L);N=n(zo,"This model was contributed by "),de=r(zo,"A",{href:!0,rel:!0});var rl=i(de);V=n(rl,"formiel"),rl.forEach(t),qe=n(zo,". The original code can be found "),ce=r(zo,"A",{href:!0,rel:!0});var il=i(ce);Y=n(il,"here"),il.forEach(t),ze=n(zo,"."),zo.forEach(t),ye=u(s),j=r(s,"H2",{class:!0});var La=i(j);re=r(La,"A",{id:!0,class:!0,href:!0});var ll=i(re);Q=r(ll,"SPAN",{});var dl=i(Q);T(pe.$$.fragment,dl),dl.forEach(t),ll.forEach(t),Ce=u(La),U=r(La,"SPAN",{});var cl=i(U);Le=n(cl,"FlaubertConfig"),cl.forEach(t),La.forEach(t),we=u(s),A=r(s,"DIV",{class:!0});var Co=i(A);T(me.$$.fragment,Co),G=u(Co),ee=r(Co,"P",{});var Xt=i(ee);ne=n(Xt,"This is the configuration class to store the configuration of a "),P=r(Xt,"A",{href:!0});var pl=i(P);je=n(pl,"FlaubertModel"),pl.forEach(t),O=n(Xt," or a "),ue=r(Xt,"A",{href:!0});var ml=i(ue);Pe=n(ml,"TFFlaubertModel"),ml.forEach(t),g=n(Xt,`. It is
used to instantiate a FlauBERT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the FlauBERT
`),E=r(Xt,"A",{href:!0,rel:!0});var ul=i(E);Qe=n(ul,"flaubert/flaubert_base_uncased"),ul.forEach(t),se=n(Xt," architecture."),Xt.forEach(t),Ue=u(Co),Ne=r(Co,"P",{});var Lo=i(Ne);z=n(Lo,"Configuration objects inherit from "),Se=r(Lo,"A",{href:!0});var hl=i(Se);Be=n(hl,"PretrainedConfig"),hl.forEach(t),Re=n(Lo,` and can be used to control the model outputs. Read the
documentation from `),Ie=r(Lo,"A",{href:!0});var fl=i(Ie);Ke=n(fl,"PretrainedConfig"),fl.forEach(t),S=n(Lo," for more information."),Lo.forEach(t),Co.forEach(t),R=u(s),Ae=r(s,"H2",{class:!0});var ja=i(Ae);Oe=r(ja,"A",{id:!0,class:!0,href:!0});var gl=i(Oe);B=r(gl,"SPAN",{});var _l=i(B);T(De.$$.fragment,_l),_l.forEach(t),gl.forEach(t),Ve=u(ja),fe=r(ja,"SPAN",{});var bl=i(fe);Ye=n(bl,"FlaubertTokenizer"),bl.forEach(t),ja.forEach(t),oe=u(s),J=r(s,"DIV",{class:!0});var Ge=i(J);T(Qn.$$.fragment,Ge),Kd=u(Ge),Pr=r(Ge,"P",{});var kl=i(Pr);Vd=n(kl,"Construct a Flaubert tokenizer. Based on Byte-Pair Encoding. The tokenization process is the following:"),kl.forEach(t),Yd=u(Ge),It=r(Ge,"UL",{});var Ht=i(It);Nr=r(Ht,"LI",{});var yl=i(Nr);Gd=n(yl,"Moses preprocessing and tokenization."),yl.forEach(t),Jd=u(Ht),Ar=r(Ht,"LI",{});var wl=i(Ar);Zd=n(wl,"Normalizing all inputs text."),wl.forEach(t),ec=u(Ht),Wt=r(Ht,"LI",{});var Qt=i(Wt);tc=n(Qt,"The arguments "),Or=r(Qt,"CODE",{});var Tl=i(Or);oc=n(Tl,"special_tokens"),Tl.forEach(t),nc=n(Qt," and the function "),Dr=r(Qt,"CODE",{});var vl=i(Dr);sc=n(vl,"set_special_tokens"),vl.forEach(t),ac=n(Qt,`, can be used to add additional symbols (like
\u201D`),Sr=r(Qt,"STRONG",{});var Fl=i(Sr);rc=n(Fl,"classify"),Fl.forEach(t),ic=n(Qt,"\u201D) to a vocabulary."),Qt.forEach(t),lc=u(Ht),Un=r(Ht,"LI",{});var Pa=i(Un);dc=n(Pa,"The argument "),Ir=r(Pa,"CODE",{});var Bg=i(Ir);cc=n(Bg,"do_lowercase"),Bg.forEach(t),pc=n(Pa," controls lower casing (automatically set for pretrained vocabularies)."),Pa.forEach(t),Ht.forEach(t),mc=u(Ge),Bn=r(Ge,"P",{});var Jl=i(Bn);uc=n(Jl,"This tokenizer inherits from "),Na=r(Jl,"A",{href:!0});var Rg=i(Na);hc=n(Rg,"PreTrainedTokenizer"),Rg.forEach(t),fc=n(Jl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Jl.forEach(t),gc=u(Ge),Ut=r(Ge,"DIV",{class:!0});var gr=i(Ut);T(Rn.$$.fragment,gr),_c=u(gr),Wr=r(gr,"P",{});var Kg=i(Wr);bc=n(Kg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM sequence has the following format:`),Kg.forEach(t),kc=u(gr),Kn=r(gr,"UL",{});var Zl=i(Kn);Aa=r(Zl,"LI",{});var Qg=i(Aa);yc=n(Qg,"single sequence: "),Xr=r(Qg,"CODE",{});var Vg=i(Xr);wc=n(Vg,"<s> X </s>"),Vg.forEach(t),Qg.forEach(t),Tc=u(Zl),Oa=r(Zl,"LI",{});var Ug=i(Oa);vc=n(Ug,"pair of sequences: "),Hr=r(Ug,"CODE",{});var Yg=i(Hr);Fc=n(Yg,"<s> A </s> B </s>"),Yg.forEach(t),Ug.forEach(t),Zl.forEach(t),gr.forEach(t),$c=u(Ge),jo=r(Ge,"DIV",{class:!0});var ed=i(jo);T(Vn.$$.fragment,ed),Mc=u(ed),Qr=r(ed,"P",{});var Gg=i(Qr);xc=n(Gg,"Converts a sequence of tokens (string) in a single string."),Gg.forEach(t),ed.forEach(t),Ec=u(Ge),wt=r(Ge,"DIV",{class:!0});var On=i(wt);T(Yn.$$.fragment,On),qc=u(On),Ur=r(On,"P",{});var Jg=i(Ur);zc=n(Jg,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. An XLM sequence"),Jg.forEach(t),Cc=u(On),T(Po.$$.fragment,On),Lc=u(On),Zt=r(On,"P",{});var _r=i(Zt);jc=n(_r,"If "),Br=r(_r,"CODE",{});var Zg=i(Br);Pc=n(Zg,"token_ids_1"),Zg.forEach(t),Nc=n(_r," is "),Rr=r(_r,"CODE",{});var e_=i(Rr);Ac=n(e_,"None"),e_.forEach(t),Oc=n(_r,", this method only returns the first portion of the mask (0s)."),_r.forEach(t),On.forEach(t),Dc=u(Ge),No=r(Ge,"DIV",{class:!0});var td=i(No);T(Gn.$$.fragment,td),Sc=u(td),Jn=r(td,"P",{});var od=i(Jn);Ic=n(od,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Kr=r(od,"CODE",{});var t_=i(Kr);Wc=n(t_,"prepare_for_model"),t_.forEach(t),Xc=n(od," method."),od.forEach(t),td.forEach(t),Ge.forEach(t),$l=u(s),eo=r(s,"H2",{class:!0});var nd=i(eo);Ao=r(nd,"A",{id:!0,class:!0,href:!0});var o_=i(Ao);Vr=r(o_,"SPAN",{});var n_=i(Vr);T(Zn.$$.fragment,n_),n_.forEach(t),o_.forEach(t),Hc=u(nd),Yr=r(nd,"SPAN",{});var s_=i(Yr);Qc=n(s_,"FlaubertModel"),s_.forEach(t),nd.forEach(t),Ml=u(s),ut=r(s,"DIV",{class:!0});var Bt=i(ut);T(es.$$.fragment,Bt),Uc=u(Bt),Gr=r(Bt,"P",{});var a_=i(Gr);Bc=n(a_,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),a_.forEach(t),Rc=u(Bt),ts=r(Bt,"P",{});var sd=i(ts);Kc=n(sd,"This model inherits from "),Da=r(sd,"A",{href:!0});var r_=i(Da);Vc=n(r_,"PreTrainedModel"),r_.forEach(t),Yc=n(sd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sd.forEach(t),Gc=u(Bt),os=r(Bt,"P",{});var ad=i(os);Jc=n(ad,"This model is also a PyTorch "),ns=r(ad,"A",{href:!0,rel:!0});var i_=i(ns);Zc=n(i_,"torch.nn.Module"),i_.forEach(t),ep=n(ad,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ad.forEach(t),tp=u(Bt),Tt=r(Bt,"DIV",{class:!0});var Dn=i(Tt);T(ss.$$.fragment,Dn),op=u(Dn),to=r(Dn,"P",{});var br=i(to);np=n(br,"The "),Sa=r(br,"A",{href:!0});var l_=i(Sa);sp=n(l_,"FlaubertModel"),l_.forEach(t),ap=n(br," forward method, overrides the "),Jr=r(br,"CODE",{});var d_=i(Jr);rp=n(d_,"__call__"),d_.forEach(t),ip=n(br," special method."),br.forEach(t),lp=u(Dn),T(Oo.$$.fragment,Dn),dp=u(Dn),T(Do.$$.fragment,Dn),Dn.forEach(t),Bt.forEach(t),xl=u(s),oo=r(s,"H2",{class:!0});var rd=i(oo);So=r(rd,"A",{id:!0,class:!0,href:!0});var c_=i(So);Zr=r(c_,"SPAN",{});var p_=i(Zr);T(as.$$.fragment,p_),p_.forEach(t),c_.forEach(t),cp=u(rd),ei=r(rd,"SPAN",{});var m_=i(ei);pp=n(m_,"FlaubertWithLMHeadModel"),m_.forEach(t),rd.forEach(t),El=u(s),et=r(s,"DIV",{class:!0});var Et=i(et);T(rs.$$.fragment,Et),mp=u(Et),ti=r(Et,"P",{});var u_=i(ti);up=n(u_,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),u_.forEach(t),hp=u(Et),is=r(Et,"P",{});var id=i(is);fp=n(id,"This model inherits from "),Ia=r(id,"A",{href:!0});var h_=i(Ia);gp=n(h_,"PreTrainedModel"),h_.forEach(t),_p=n(id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),id.forEach(t),bp=u(Et),ls=r(Et,"P",{});var ld=i(ls);kp=n(ld,"This model is also a PyTorch "),ds=r(ld,"A",{href:!0,rel:!0});var f_=i(ds);yp=n(f_,"torch.nn.Module"),f_.forEach(t),wp=n(ld,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ld.forEach(t),Tp=u(Et),cs=r(Et,"P",{});var dd=i(cs);vp=n(dd,"This class overrides "),Wa=r(dd,"A",{href:!0});var g_=i(Wa);Fp=n(g_,"XLMWithLMHeadModel"),g_.forEach(t),$p=n(dd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),dd.forEach(t),Mp=u(Et),ht=r(Et,"DIV",{class:!0});var Rt=i(ht);T(ps.$$.fragment,Rt),xp=u(Rt),no=r(Rt,"P",{});var kr=i(no);Ep=n(kr,"The "),Xa=r(kr,"A",{href:!0});var __=i(Xa);qp=n(__,"XLMWithLMHeadModel"),__.forEach(t),zp=n(kr," forward method, overrides the "),oi=r(kr,"CODE",{});var b_=i(oi);Cp=n(b_,"__call__"),b_.forEach(t),Lp=n(kr," special method."),kr.forEach(t),jp=u(Rt),T(Io.$$.fragment,Rt),Pp=u(Rt),T(Wo.$$.fragment,Rt),Np=u(Rt),T(Xo.$$.fragment,Rt),Rt.forEach(t),Et.forEach(t),ql=u(s),so=r(s,"H2",{class:!0});var cd=i(so);Ho=r(cd,"A",{id:!0,class:!0,href:!0});var k_=i(Ho);ni=r(k_,"SPAN",{});var y_=i(ni);T(ms.$$.fragment,y_),y_.forEach(t),k_.forEach(t),Ap=u(cd),si=r(cd,"SPAN",{});var w_=i(si);Op=n(w_,"FlaubertForSequenceClassification"),w_.forEach(t),cd.forEach(t),zl=u(s),tt=r(s,"DIV",{class:!0});var qt=i(tt);T(us.$$.fragment,qt),Dp=u(qt),ai=r(qt,"P",{});var T_=i(ai);Sp=n(T_,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),T_.forEach(t),Ip=u(qt),hs=r(qt,"P",{});var pd=i(hs);Wp=n(pd,"This model inherits from "),Ha=r(pd,"A",{href:!0});var v_=i(Ha);Xp=n(v_,"PreTrainedModel"),v_.forEach(t),Hp=n(pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd.forEach(t),Qp=u(qt),fs=r(qt,"P",{});var md=i(fs);Up=n(md,"This model is also a PyTorch "),gs=r(md,"A",{href:!0,rel:!0});var F_=i(gs);Bp=n(F_,"torch.nn.Module"),F_.forEach(t),Rp=n(md,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),md.forEach(t),Kp=u(qt),_s=r(qt,"P",{});var ud=i(_s);Vp=n(ud,"This class overrides "),Qa=r(ud,"A",{href:!0});var $_=i(Qa);Yp=n($_,"XLMForSequenceClassification"),$_.forEach(t),Gp=n(ud,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),ud.forEach(t),Jp=u(qt),Ze=r(qt,"DIV",{class:!0});var yt=i(Ze);T(bs.$$.fragment,yt),Zp=u(yt),ao=r(yt,"P",{});var yr=i(ao);em=n(yr,"The "),Ua=r(yr,"A",{href:!0});var M_=i(Ua);tm=n(M_,"XLMForSequenceClassification"),M_.forEach(t),om=n(yr," forward method, overrides the "),ri=r(yr,"CODE",{});var x_=i(ri);nm=n(x_,"__call__"),x_.forEach(t),sm=n(yr," special method."),yr.forEach(t),am=u(yt),T(Qo.$$.fragment,yt),rm=u(yt),T(Uo.$$.fragment,yt),im=u(yt),T(Bo.$$.fragment,yt),lm=u(yt),T(Ro.$$.fragment,yt),dm=u(yt),T(Ko.$$.fragment,yt),yt.forEach(t),qt.forEach(t),Cl=u(s),ro=r(s,"H2",{class:!0});var hd=i(ro);Vo=r(hd,"A",{id:!0,class:!0,href:!0});var E_=i(Vo);ii=r(E_,"SPAN",{});var q_=i(ii);T(ks.$$.fragment,q_),q_.forEach(t),E_.forEach(t),cm=u(hd),li=r(hd,"SPAN",{});var z_=i(li);pm=n(z_,"FlaubertForMultipleChoice"),z_.forEach(t),hd.forEach(t),Ll=u(s),ot=r(s,"DIV",{class:!0});var zt=i(ot);T(ys.$$.fragment,zt),mm=u(zt),di=r(zt,"P",{});var C_=i(di);um=n(C_,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),C_.forEach(t),hm=u(zt),ws=r(zt,"P",{});var fd=i(ws);fm=n(fd,"This model inherits from "),Ba=r(fd,"A",{href:!0});var L_=i(Ba);gm=n(L_,"PreTrainedModel"),L_.forEach(t),_m=n(fd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fd.forEach(t),bm=u(zt),Ts=r(zt,"P",{});var gd=i(Ts);km=n(gd,"This model is also a PyTorch "),vs=r(gd,"A",{href:!0,rel:!0});var j_=i(vs);ym=n(j_,"torch.nn.Module"),j_.forEach(t),wm=n(gd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gd.forEach(t),Tm=u(zt),Fs=r(zt,"P",{});var _d=i(Fs);vm=n(_d,"This class overrides "),Ra=r(_d,"A",{href:!0});var P_=i(Ra);Fm=n(P_,"XLMForMultipleChoice"),P_.forEach(t),$m=n(_d,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),_d.forEach(t),Mm=u(zt),vt=r(zt,"DIV",{class:!0});var Sn=i(vt);T($s.$$.fragment,Sn),xm=u(Sn),io=r(Sn,"P",{});var wr=i(io);Em=n(wr,"The "),Ka=r(wr,"A",{href:!0});var N_=i(Ka);qm=n(N_,"XLMForMultipleChoice"),N_.forEach(t),zm=n(wr," forward method, overrides the "),ci=r(wr,"CODE",{});var A_=i(ci);Cm=n(A_,"__call__"),A_.forEach(t),Lm=n(wr," special method."),wr.forEach(t),jm=u(Sn),T(Yo.$$.fragment,Sn),Pm=u(Sn),T(Go.$$.fragment,Sn),Sn.forEach(t),zt.forEach(t),jl=u(s),lo=r(s,"H2",{class:!0});var bd=i(lo);Jo=r(bd,"A",{id:!0,class:!0,href:!0});var O_=i(Jo);pi=r(O_,"SPAN",{});var D_=i(pi);T(Ms.$$.fragment,D_),D_.forEach(t),O_.forEach(t),Nm=u(bd),mi=r(bd,"SPAN",{});var S_=i(mi);Am=n(S_,"FlaubertForTokenClassification"),S_.forEach(t),bd.forEach(t),Pl=u(s),nt=r(s,"DIV",{class:!0});var Ct=i(nt);T(xs.$$.fragment,Ct),Om=u(Ct),ui=r(Ct,"P",{});var I_=i(ui);Dm=n(I_,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),I_.forEach(t),Sm=u(Ct),Es=r(Ct,"P",{});var kd=i(Es);Im=n(kd,"This model inherits from "),Va=r(kd,"A",{href:!0});var W_=i(Va);Wm=n(W_,"PreTrainedModel"),W_.forEach(t),Xm=n(kd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kd.forEach(t),Hm=u(Ct),qs=r(Ct,"P",{});var yd=i(qs);Qm=n(yd,"This model is also a PyTorch "),zs=r(yd,"A",{href:!0,rel:!0});var X_=i(zs);Um=n(X_,"torch.nn.Module"),X_.forEach(t),Bm=n(yd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yd.forEach(t),Rm=u(Ct),Cs=r(Ct,"P",{});var wd=i(Cs);Km=n(wd,"This class overrides "),Ya=r(wd,"A",{href:!0});var H_=i(Ya);Vm=n(H_,"XLMForTokenClassification"),H_.forEach(t),Ym=n(wd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),wd.forEach(t),Gm=u(Ct),ft=r(Ct,"DIV",{class:!0});var Kt=i(ft);T(Ls.$$.fragment,Kt),Jm=u(Kt),co=r(Kt,"P",{});var Tr=i(co);Zm=n(Tr,"The "),Ga=r(Tr,"A",{href:!0});var Q_=i(Ga);eu=n(Q_,"XLMForTokenClassification"),Q_.forEach(t),tu=n(Tr," forward method, overrides the "),hi=r(Tr,"CODE",{});var U_=i(hi);ou=n(U_,"__call__"),U_.forEach(t),nu=n(Tr," special method."),Tr.forEach(t),su=u(Kt),T(Zo.$$.fragment,Kt),au=u(Kt),T(en.$$.fragment,Kt),ru=u(Kt),T(tn.$$.fragment,Kt),Kt.forEach(t),Ct.forEach(t),Nl=u(s),po=r(s,"H2",{class:!0});var Td=i(po);on=r(Td,"A",{id:!0,class:!0,href:!0});var B_=i(on);fi=r(B_,"SPAN",{});var R_=i(fi);T(js.$$.fragment,R_),R_.forEach(t),B_.forEach(t),iu=u(Td),gi=r(Td,"SPAN",{});var K_=i(gi);lu=n(K_,"FlaubertForQuestionAnsweringSimple"),K_.forEach(t),Td.forEach(t),Al=u(s),st=r(s,"DIV",{class:!0});var Lt=i(st);T(Ps.$$.fragment,Lt),du=u(Lt),mo=r(Lt,"P",{});var vr=i(mo);cu=n(vr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),_i=r(vr,"CODE",{});var V_=i(_i);pu=n(V_,"span start logits"),V_.forEach(t),mu=n(vr," and "),bi=r(vr,"CODE",{});var Y_=i(bi);uu=n(Y_,"span end logits"),Y_.forEach(t),hu=n(vr,")."),vr.forEach(t),fu=u(Lt),Ns=r(Lt,"P",{});var vd=i(Ns);gu=n(vd,"This model inherits from "),Ja=r(vd,"A",{href:!0});var G_=i(Ja);_u=n(G_,"PreTrainedModel"),G_.forEach(t),bu=n(vd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vd.forEach(t),ku=u(Lt),As=r(Lt,"P",{});var Fd=i(As);yu=n(Fd,"This model is also a PyTorch "),Os=r(Fd,"A",{href:!0,rel:!0});var J_=i(Os);wu=n(J_,"torch.nn.Module"),J_.forEach(t),Tu=n(Fd,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fd.forEach(t),vu=u(Lt),Ds=r(Lt,"P",{});var $d=i(Ds);Fu=n($d,"This class overrides "),Za=r($d,"A",{href:!0});var Z_=i(Za);$u=n(Z_,"XLMForQuestionAnsweringSimple"),Z_.forEach(t),Mu=n($d,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$d.forEach(t),xu=u(Lt),gt=r(Lt,"DIV",{class:!0});var Vt=i(gt);T(Ss.$$.fragment,Vt),Eu=u(Vt),uo=r(Vt,"P",{});var Fr=i(uo);qu=n(Fr,"The "),er=r(Fr,"A",{href:!0});var eb=i(er);zu=n(eb,"XLMForQuestionAnsweringSimple"),eb.forEach(t),Cu=n(Fr," forward method, overrides the "),ki=r(Fr,"CODE",{});var tb=i(ki);Lu=n(tb,"__call__"),tb.forEach(t),ju=n(Fr," special method."),Fr.forEach(t),Pu=u(Vt),T(nn.$$.fragment,Vt),Nu=u(Vt),T(sn.$$.fragment,Vt),Au=u(Vt),T(an.$$.fragment,Vt),Vt.forEach(t),Lt.forEach(t),Ol=u(s),ho=r(s,"H2",{class:!0});var Md=i(ho);rn=r(Md,"A",{id:!0,class:!0,href:!0});var ob=i(rn);yi=r(ob,"SPAN",{});var nb=i(yi);T(Is.$$.fragment,nb),nb.forEach(t),ob.forEach(t),Ou=u(Md),wi=r(Md,"SPAN",{});var sb=i(wi);Du=n(sb,"FlaubertForQuestionAnswering"),sb.forEach(t),Md.forEach(t),Dl=u(s),at=r(s,"DIV",{class:!0});var jt=i(at);T(Ws.$$.fragment,jt),Su=u(jt),fo=r(jt,"P",{});var $r=i(fo);Iu=n($r,`Flaubert Model with a beam-search span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ti=r($r,"CODE",{});var ab=i(Ti);Wu=n(ab,"span start logits"),ab.forEach(t),Xu=n($r," and "),vi=r($r,"CODE",{});var rb=i(vi);Hu=n(rb,"span end logits"),rb.forEach(t),Qu=n($r,")."),$r.forEach(t),Uu=u(jt),Xs=r(jt,"P",{});var xd=i(Xs);Bu=n(xd,"This model inherits from "),tr=r(xd,"A",{href:!0});var ib=i(tr);Ru=n(ib,"PreTrainedModel"),ib.forEach(t),Ku=n(xd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xd.forEach(t),Vu=u(jt),Hs=r(jt,"P",{});var Ed=i(Hs);Yu=n(Ed,"This model is also a PyTorch "),Qs=r(Ed,"A",{href:!0,rel:!0});var lb=i(Qs);Gu=n(lb,"torch.nn.Module"),lb.forEach(t),Ju=n(Ed,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ed.forEach(t),Zu=u(jt),Us=r(jt,"P",{});var qd=i(Us);eh=n(qd,"This class overrides "),or=r(qd,"A",{href:!0});var db=i(or);th=n(db,"XLMForQuestionAnswering"),db.forEach(t),oh=n(qd,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),qd.forEach(t),nh=u(jt),Ft=r(jt,"DIV",{class:!0});var In=i(Ft);T(Bs.$$.fragment,In),sh=u(In),go=r(In,"P",{});var Mr=i(go);ah=n(Mr,"The "),nr=r(Mr,"A",{href:!0});var cb=i(nr);rh=n(cb,"XLMForQuestionAnswering"),cb.forEach(t),ih=n(Mr," forward method, overrides the "),Fi=r(Mr,"CODE",{});var pb=i(Fi);lh=n(pb,"__call__"),pb.forEach(t),dh=n(Mr," special method."),Mr.forEach(t),ch=u(In),T(ln.$$.fragment,In),ph=u(In),T(dn.$$.fragment,In),In.forEach(t),jt.forEach(t),Sl=u(s),_o=r(s,"H2",{class:!0});var zd=i(_o);cn=r(zd,"A",{id:!0,class:!0,href:!0});var mb=i(cn);$i=r(mb,"SPAN",{});var ub=i($i);T(Rs.$$.fragment,ub),ub.forEach(t),mb.forEach(t),mh=u(zd),Mi=r(zd,"SPAN",{});var hb=i(Mi);uh=n(hb,"TFFlaubertModel"),hb.forEach(t),zd.forEach(t),Il=u(s),rt=r(s,"DIV",{class:!0});var Pt=i(rt);T(Ks.$$.fragment,Pt),hh=u(Pt),xi=r(Pt,"P",{});var fb=i(xi);fh=n(fb,"The bare Flaubert Model transformer outputting raw hidden-states without any specific head on top."),fb.forEach(t),gh=u(Pt),Vs=r(Pt,"P",{});var Cd=i(Vs);_h=n(Cd,"This model inherits from "),sr=r(Cd,"A",{href:!0});var gb=i(sr);bh=n(gb,"TFPreTrainedModel"),gb.forEach(t),kh=n(Cd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cd.forEach(t),yh=u(Pt),Ys=r(Pt,"P",{});var Ld=i(Ys);wh=n(Ld,"This model is also a "),Gs=r(Ld,"A",{href:!0,rel:!0});var _b=i(Gs);Th=n(_b,"tf.keras.Model"),_b.forEach(t),vh=n(Ld,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ld.forEach(t),Fh=u(Pt),T(pn.$$.fragment,Pt),$h=u(Pt),$t=r(Pt,"DIV",{class:!0});var Wn=i($t);T(Js.$$.fragment,Wn),Mh=u(Wn),bo=r(Wn,"P",{});var xr=i(bo);xh=n(xr,"The "),ar=r(xr,"A",{href:!0});var bb=i(ar);Eh=n(bb,"TFFlaubertModel"),bb.forEach(t),qh=n(xr," forward method, overrides the "),Ei=r(xr,"CODE",{});var kb=i(Ei);zh=n(kb,"__call__"),kb.forEach(t),Ch=n(xr," special method."),xr.forEach(t),Lh=u(Wn),T(mn.$$.fragment,Wn),jh=u(Wn),T(un.$$.fragment,Wn),Wn.forEach(t),Pt.forEach(t),Wl=u(s),ko=r(s,"H2",{class:!0});var jd=i(ko);hn=r(jd,"A",{id:!0,class:!0,href:!0});var yb=i(hn);qi=r(yb,"SPAN",{});var wb=i(qi);T(Zs.$$.fragment,wb),wb.forEach(t),yb.forEach(t),Ph=u(jd),zi=r(jd,"SPAN",{});var Tb=i(zi);Nh=n(Tb,"TFFlaubertWithLMHeadModel"),Tb.forEach(t),jd.forEach(t),Xl=u(s),it=r(s,"DIV",{class:!0});var Nt=i(it);T(ea.$$.fragment,Nt),Ah=u(Nt),Ci=r(Nt,"P",{});var vb=i(Ci);Oh=n(vb,`The Flaubert Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),vb.forEach(t),Dh=u(Nt),ta=r(Nt,"P",{});var Pd=i(ta);Sh=n(Pd,"This model inherits from "),rr=r(Pd,"A",{href:!0});var Fb=i(rr);Ih=n(Fb,"TFPreTrainedModel"),Fb.forEach(t),Wh=n(Pd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pd.forEach(t),Xh=u(Nt),oa=r(Nt,"P",{});var Nd=i(oa);Hh=n(Nd,"This model is also a "),na=r(Nd,"A",{href:!0,rel:!0});var $b=i(na);Qh=n($b,"tf.keras.Model"),$b.forEach(t),Uh=n(Nd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nd.forEach(t),Bh=u(Nt),T(fn.$$.fragment,Nt),Rh=u(Nt),Mt=r(Nt,"DIV",{class:!0});var Xn=i(Mt);T(sa.$$.fragment,Xn),Kh=u(Xn),yo=r(Xn,"P",{});var Er=i(yo);Vh=n(Er,"The "),ir=r(Er,"A",{href:!0});var Mb=i(ir);Yh=n(Mb,"TFFlaubertWithLMHeadModel"),Mb.forEach(t),Gh=n(Er," forward method, overrides the "),Li=r(Er,"CODE",{});var xb=i(Li);Jh=n(xb,"__call__"),xb.forEach(t),Zh=n(Er," special method."),Er.forEach(t),ef=u(Xn),T(gn.$$.fragment,Xn),tf=u(Xn),T(_n.$$.fragment,Xn),Xn.forEach(t),Nt.forEach(t),Hl=u(s),wo=r(s,"H2",{class:!0});var Ad=i(wo);bn=r(Ad,"A",{id:!0,class:!0,href:!0});var Eb=i(bn);ji=r(Eb,"SPAN",{});var qb=i(ji);T(aa.$$.fragment,qb),qb.forEach(t),Eb.forEach(t),of=u(Ad),Pi=r(Ad,"SPAN",{});var zb=i(Pi);nf=n(zb,"TFFlaubertForSequenceClassification"),zb.forEach(t),Ad.forEach(t),Ql=u(s),lt=r(s,"DIV",{class:!0});var At=i(lt);T(ra.$$.fragment,At),sf=u(At),Ni=r(At,"P",{});var Cb=i(Ni);af=n(Cb,`Flaubert Model with a sequence classification/regression head on top (a linear layer on top of the pooled output)
e.g. for GLUE tasks.`),Cb.forEach(t),rf=u(At),ia=r(At,"P",{});var Od=i(ia);lf=n(Od,"This model inherits from "),lr=r(Od,"A",{href:!0});var Lb=i(lr);df=n(Lb,"TFPreTrainedModel"),Lb.forEach(t),cf=n(Od,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Od.forEach(t),pf=u(At),la=r(At,"P",{});var Dd=i(la);mf=n(Dd,"This model is also a "),da=r(Dd,"A",{href:!0,rel:!0});var jb=i(da);uf=n(jb,"tf.keras.Model"),jb.forEach(t),hf=n(Dd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dd.forEach(t),ff=u(At),T(kn.$$.fragment,At),gf=u(At),_t=r(At,"DIV",{class:!0});var Yt=i(_t);T(ca.$$.fragment,Yt),_f=u(Yt),To=r(Yt,"P",{});var qr=i(To);bf=n(qr,"The "),dr=r(qr,"A",{href:!0});var Pb=i(dr);kf=n(Pb,"TFXLMForSequenceClassification"),Pb.forEach(t),yf=n(qr," forward method, overrides the "),Ai=r(qr,"CODE",{});var Nb=i(Ai);wf=n(Nb,"__call__"),Nb.forEach(t),Tf=n(qr," special method."),qr.forEach(t),vf=u(Yt),T(yn.$$.fragment,Yt),Ff=u(Yt),T(wn.$$.fragment,Yt),$f=u(Yt),T(Tn.$$.fragment,Yt),Yt.forEach(t),At.forEach(t),Ul=u(s),vo=r(s,"H2",{class:!0});var Sd=i(vo);vn=r(Sd,"A",{id:!0,class:!0,href:!0});var Ab=i(vn);Oi=r(Ab,"SPAN",{});var Ob=i(Oi);T(pa.$$.fragment,Ob),Ob.forEach(t),Ab.forEach(t),Mf=u(Sd),Di=r(Sd,"SPAN",{});var Db=i(Di);xf=n(Db,"TFFlaubertForMultipleChoice"),Db.forEach(t),Sd.forEach(t),Bl=u(s),dt=r(s,"DIV",{class:!0});var Ot=i(dt);T(ma.$$.fragment,Ot),Ef=u(Ot),Si=r(Ot,"P",{});var Sb=i(Si);qf=n(Sb,`Flaubert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Sb.forEach(t),zf=u(Ot),ua=r(Ot,"P",{});var Id=i(ua);Cf=n(Id,"This model inherits from "),cr=r(Id,"A",{href:!0});var Ib=i(cr);Lf=n(Ib,"TFPreTrainedModel"),Ib.forEach(t),jf=n(Id,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Id.forEach(t),Pf=u(Ot),ha=r(Ot,"P",{});var Wd=i(ha);Nf=n(Wd,"This model is also a "),fa=r(Wd,"A",{href:!0,rel:!0});var Wb=i(fa);Af=n(Wb,"tf.keras.Model"),Wb.forEach(t),Of=n(Wd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wd.forEach(t),Df=u(Ot),T(Fn.$$.fragment,Ot),Sf=u(Ot),xt=r(Ot,"DIV",{class:!0});var Hn=i(xt);T(ga.$$.fragment,Hn),If=u(Hn),Fo=r(Hn,"P",{});var zr=i(Fo);Wf=n(zr,"The "),pr=r(zr,"A",{href:!0});var Xb=i(pr);Xf=n(Xb,"TFXLMForMultipleChoice"),Xb.forEach(t),Hf=n(zr," forward method, overrides the "),Ii=r(zr,"CODE",{});var Hb=i(Ii);Qf=n(Hb,"__call__"),Hb.forEach(t),Uf=n(zr," special method."),zr.forEach(t),Bf=u(Hn),T($n.$$.fragment,Hn),Rf=u(Hn),T(Mn.$$.fragment,Hn),Hn.forEach(t),Ot.forEach(t),Rl=u(s),$o=r(s,"H2",{class:!0});var Xd=i($o);xn=r(Xd,"A",{id:!0,class:!0,href:!0});var Qb=i(xn);Wi=r(Qb,"SPAN",{});var Ub=i(Wi);T(_a.$$.fragment,Ub),Ub.forEach(t),Qb.forEach(t),Kf=u(Xd),Xi=r(Xd,"SPAN",{});var Bb=i(Xi);Vf=n(Bb,"TFFlaubertForTokenClassification"),Bb.forEach(t),Xd.forEach(t),Kl=u(s),ct=r(s,"DIV",{class:!0});var Dt=i(ct);T(ba.$$.fragment,Dt),Yf=u(Dt),Hi=r(Dt,"P",{});var Rb=i(Hi);Gf=n(Rb,`Flaubert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Rb.forEach(t),Jf=u(Dt),ka=r(Dt,"P",{});var Hd=i(ka);Zf=n(Hd,"This model inherits from "),mr=r(Hd,"A",{href:!0});var Kb=i(mr);eg=n(Kb,"TFPreTrainedModel"),Kb.forEach(t),tg=n(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hd.forEach(t),og=u(Dt),ya=r(Dt,"P",{});var Qd=i(ya);ng=n(Qd,"This model is also a "),wa=r(Qd,"A",{href:!0,rel:!0});var Vb=i(wa);sg=n(Vb,"tf.keras.Model"),Vb.forEach(t),ag=n(Qd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qd.forEach(t),rg=u(Dt),T(En.$$.fragment,Dt),ig=u(Dt),bt=r(Dt,"DIV",{class:!0});var Gt=i(bt);T(Ta.$$.fragment,Gt),lg=u(Gt),Mo=r(Gt,"P",{});var Cr=i(Mo);dg=n(Cr,"The "),ur=r(Cr,"A",{href:!0});var Yb=i(ur);cg=n(Yb,"TFXLMForTokenClassification"),Yb.forEach(t),pg=n(Cr," forward method, overrides the "),Qi=r(Cr,"CODE",{});var Gb=i(Qi);mg=n(Gb,"__call__"),Gb.forEach(t),ug=n(Cr," special method."),Cr.forEach(t),hg=u(Gt),T(qn.$$.fragment,Gt),fg=u(Gt),T(zn.$$.fragment,Gt),gg=u(Gt),T(Cn.$$.fragment,Gt),Gt.forEach(t),Dt.forEach(t),Vl=u(s),xo=r(s,"H2",{class:!0});var Ud=i(xo);Ln=r(Ud,"A",{id:!0,class:!0,href:!0});var Jb=i(Ln);Ui=r(Jb,"SPAN",{});var Zb=i(Ui);T(va.$$.fragment,Zb),Zb.forEach(t),Jb.forEach(t),_g=u(Ud),Bi=r(Ud,"SPAN",{});var ek=i(Bi);bg=n(ek,"TFFlaubertForQuestionAnsweringSimple"),ek.forEach(t),Ud.forEach(t),Yl=u(s),pt=r(s,"DIV",{class:!0});var St=i(pt);T(Fa.$$.fragment,St),kg=u(St),Eo=r(St,"P",{});var Lr=i(Eo);yg=n(Lr,`Flaubert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ri=r(Lr,"CODE",{});var tk=i(Ri);wg=n(tk,"span start logits"),tk.forEach(t),Tg=n(Lr," and "),Ki=r(Lr,"CODE",{});var ok=i(Ki);vg=n(ok,"span end logits"),ok.forEach(t),Fg=n(Lr,")."),Lr.forEach(t),$g=u(St),$a=r(St,"P",{});var Bd=i($a);Mg=n(Bd,"This model inherits from "),hr=r(Bd,"A",{href:!0});var nk=i(hr);xg=n(nk,"TFPreTrainedModel"),nk.forEach(t),Eg=n(Bd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bd.forEach(t),qg=u(St),Ma=r(St,"P",{});var Rd=i(Ma);zg=n(Rd,"This model is also a "),xa=r(Rd,"A",{href:!0,rel:!0});var sk=i(xa);Cg=n(sk,"tf.keras.Model"),sk.forEach(t),Lg=n(Rd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rd.forEach(t),jg=u(St),T(jn.$$.fragment,St),Pg=u(St),kt=r(St,"DIV",{class:!0});var Jt=i(kt);T(Ea.$$.fragment,Jt),Ng=u(Jt),qo=r(Jt,"P",{});var jr=i(qo);Ag=n(jr,"The "),fr=r(jr,"A",{href:!0});var ak=i(fr);Og=n(ak,"TFXLMForQuestionAnsweringSimple"),ak.forEach(t),Dg=n(jr," forward method, overrides the "),Vi=r(jr,"CODE",{});var rk=i(Vi);Sg=n(rk,"__call__"),rk.forEach(t),Ig=n(jr," special method."),jr.forEach(t),Wg=u(Jt),T(Pn.$$.fragment,Jt),Xg=u(Jt),T(Nn.$$.fragment,Jt),Hg=u(Jt),T(An.$$.fragment,Jt),Jt.forEach(t),St.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(ty)),f(h,"id","flaubert"),f(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(h,"href","#flaubert"),f(c,"class","relative group"),f(ae,"id","overview"),f(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ae,"href","#overview"),f(D,"class","relative group"),f(le,"href","https://arxiv.org/abs/1912.05372"),f(le,"rel","nofollow"),f(de,"href","https://huggingface.co/formiel"),f(de,"rel","nofollow"),f(ce,"href","https://github.com/getalp/Flaubert"),f(ce,"rel","nofollow"),f(re,"id","transformers.FlaubertConfig"),f(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(re,"href","#transformers.FlaubertConfig"),f(j,"class","relative group"),f(P,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),f(ue,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),f(E,"href","https://huggingface.co/flaubert/flaubert_base_uncased"),f(E,"rel","nofollow"),f(Se,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(Ie,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),f(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"id","transformers.FlaubertTokenizer"),f(Oe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Oe,"href","#transformers.FlaubertTokenizer"),f(Ae,"class","relative group"),f(Na,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(No,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ao,"id","transformers.FlaubertModel"),f(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ao,"href","#transformers.FlaubertModel"),f(eo,"class","relative group"),f(Da,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ns,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ns,"rel","nofollow"),f(Sa,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.FlaubertModel"),f(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(So,"id","transformers.FlaubertWithLMHeadModel"),f(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(So,"href","#transformers.FlaubertWithLMHeadModel"),f(oo,"class","relative group"),f(Ia,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ds,"rel","nofollow"),f(Wa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(Xa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMWithLMHeadModel"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ho,"id","transformers.FlaubertForSequenceClassification"),f(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ho,"href","#transformers.FlaubertForSequenceClassification"),f(so,"class","relative group"),f(Ha,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(gs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(gs,"rel","nofollow"),f(Qa,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(Ua,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForSequenceClassification"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Vo,"id","transformers.FlaubertForMultipleChoice"),f(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Vo,"href","#transformers.FlaubertForMultipleChoice"),f(ro,"class","relative group"),f(Ba,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(vs,"rel","nofollow"),f(Ra,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f(Ka,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForMultipleChoice"),f(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Jo,"id","transformers.FlaubertForTokenClassification"),f(Jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Jo,"href","#transformers.FlaubertForTokenClassification"),f(lo,"class","relative group"),f(Va,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(zs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(zs,"rel","nofollow"),f(Ya,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(Ga,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForTokenClassification"),f(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"id","transformers.FlaubertForQuestionAnsweringSimple"),f(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(on,"href","#transformers.FlaubertForQuestionAnsweringSimple"),f(po,"class","relative group"),f(Ja,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Os,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Os,"rel","nofollow"),f(Za,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(er,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnsweringSimple"),f(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rn,"id","transformers.FlaubertForQuestionAnswering"),f(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(rn,"href","#transformers.FlaubertForQuestionAnswering"),f(ho,"class","relative group"),f(tr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),f(Qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Qs,"rel","nofollow"),f(or,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(nr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.XLMForQuestionAnswering"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cn,"id","transformers.TFFlaubertModel"),f(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cn,"href","#transformers.TFFlaubertModel"),f(_o,"class","relative group"),f(sr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(Gs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Gs,"rel","nofollow"),f(ar,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertModel"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.TFFlaubertWithLMHeadModel"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.TFFlaubertWithLMHeadModel"),f(ko,"class","relative group"),f(rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(na,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(na,"rel","nofollow"),f(ir,"href","/docs/transformers/main/en/model_doc/flaubert#transformers.TFFlaubertWithLMHeadModel"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(bn,"id","transformers.TFFlaubertForSequenceClassification"),f(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(bn,"href","#transformers.TFFlaubertForSequenceClassification"),f(wo,"class","relative group"),f(lr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(da,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(da,"rel","nofollow"),f(dr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForSequenceClassification"),f(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(vn,"id","transformers.TFFlaubertForMultipleChoice"),f(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(vn,"href","#transformers.TFFlaubertForMultipleChoice"),f(vo,"class","relative group"),f(cr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(fa,"rel","nofollow"),f(pr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForMultipleChoice"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(xn,"id","transformers.TFFlaubertForTokenClassification"),f(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(xn,"href","#transformers.TFFlaubertForTokenClassification"),f($o,"class","relative group"),f(mr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(wa,"rel","nofollow"),f(ur,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForTokenClassification"),f(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.TFFlaubertForQuestionAnsweringSimple"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.TFFlaubertForQuestionAnsweringSimple"),f(xo,"class","relative group"),f(hr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),f(xa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(xa,"rel","nofollow"),f(fr,"href","/docs/transformers/main/en/model_doc/xlm#transformers.TFXLMForQuestionAnsweringSimple"),f(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,d),b(s,_,k),b(s,c,k),e(c,h),e(h,y),v(l,y,null),e(c,p),e(c,C),e(C,Te),b(s,ge,k),b(s,D,k),e(D,ae),e(ae,Z),v(x,Z,null),e(D,ve),e(D,H),e(H,Fe),b(s,_e,k),b(s,I,k),e(I,$e),e(I,le),e(le,K),e(I,Me),b(s,be,k),b(s,W,k),e(W,xe),b(s,ke,k),b(s,X,k),e(X,he),e(he,Ee),b(s,te,k),b(s,L,k),e(L,N),e(L,de),e(de,V),e(L,qe),e(L,ce),e(ce,Y),e(L,ze),b(s,ye,k),b(s,j,k),e(j,re),e(re,Q),v(pe,Q,null),e(j,Ce),e(j,U),e(U,Le),b(s,we,k),b(s,A,k),v(me,A,null),e(A,G),e(A,ee),e(ee,ne),e(ee,P),e(P,je),e(ee,O),e(ee,ue),e(ue,Pe),e(ee,g),e(ee,E),e(E,Qe),e(ee,se),e(A,Ue),e(A,Ne),e(Ne,z),e(Ne,Se),e(Se,Be),e(Ne,Re),e(Ne,Ie),e(Ie,Ke),e(Ne,S),b(s,R,k),b(s,Ae,k),e(Ae,Oe),e(Oe,B),v(De,B,null),e(Ae,Ve),e(Ae,fe),e(fe,Ye),b(s,oe,k),b(s,J,k),v(Qn,J,null),e(J,Kd),e(J,Pr),e(Pr,Vd),e(J,Yd),e(J,It),e(It,Nr),e(Nr,Gd),e(It,Jd),e(It,Ar),e(Ar,Zd),e(It,ec),e(It,Wt),e(Wt,tc),e(Wt,Or),e(Or,oc),e(Wt,nc),e(Wt,Dr),e(Dr,sc),e(Wt,ac),e(Wt,Sr),e(Sr,rc),e(Wt,ic),e(It,lc),e(It,Un),e(Un,dc),e(Un,Ir),e(Ir,cc),e(Un,pc),e(J,mc),e(J,Bn),e(Bn,uc),e(Bn,Na),e(Na,hc),e(Bn,fc),e(J,gc),e(J,Ut),v(Rn,Ut,null),e(Ut,_c),e(Ut,Wr),e(Wr,bc),e(Ut,kc),e(Ut,Kn),e(Kn,Aa),e(Aa,yc),e(Aa,Xr),e(Xr,wc),e(Kn,Tc),e(Kn,Oa),e(Oa,vc),e(Oa,Hr),e(Hr,Fc),e(J,$c),e(J,jo),v(Vn,jo,null),e(jo,Mc),e(jo,Qr),e(Qr,xc),e(J,Ec),e(J,wt),v(Yn,wt,null),e(wt,qc),e(wt,Ur),e(Ur,zc),e(wt,Cc),v(Po,wt,null),e(wt,Lc),e(wt,Zt),e(Zt,jc),e(Zt,Br),e(Br,Pc),e(Zt,Nc),e(Zt,Rr),e(Rr,Ac),e(Zt,Oc),e(J,Dc),e(J,No),v(Gn,No,null),e(No,Sc),e(No,Jn),e(Jn,Ic),e(Jn,Kr),e(Kr,Wc),e(Jn,Xc),b(s,$l,k),b(s,eo,k),e(eo,Ao),e(Ao,Vr),v(Zn,Vr,null),e(eo,Hc),e(eo,Yr),e(Yr,Qc),b(s,Ml,k),b(s,ut,k),v(es,ut,null),e(ut,Uc),e(ut,Gr),e(Gr,Bc),e(ut,Rc),e(ut,ts),e(ts,Kc),e(ts,Da),e(Da,Vc),e(ts,Yc),e(ut,Gc),e(ut,os),e(os,Jc),e(os,ns),e(ns,Zc),e(os,ep),e(ut,tp),e(ut,Tt),v(ss,Tt,null),e(Tt,op),e(Tt,to),e(to,np),e(to,Sa),e(Sa,sp),e(to,ap),e(to,Jr),e(Jr,rp),e(to,ip),e(Tt,lp),v(Oo,Tt,null),e(Tt,dp),v(Do,Tt,null),b(s,xl,k),b(s,oo,k),e(oo,So),e(So,Zr),v(as,Zr,null),e(oo,cp),e(oo,ei),e(ei,pp),b(s,El,k),b(s,et,k),v(rs,et,null),e(et,mp),e(et,ti),e(ti,up),e(et,hp),e(et,is),e(is,fp),e(is,Ia),e(Ia,gp),e(is,_p),e(et,bp),e(et,ls),e(ls,kp),e(ls,ds),e(ds,yp),e(ls,wp),e(et,Tp),e(et,cs),e(cs,vp),e(cs,Wa),e(Wa,Fp),e(cs,$p),e(et,Mp),e(et,ht),v(ps,ht,null),e(ht,xp),e(ht,no),e(no,Ep),e(no,Xa),e(Xa,qp),e(no,zp),e(no,oi),e(oi,Cp),e(no,Lp),e(ht,jp),v(Io,ht,null),e(ht,Pp),v(Wo,ht,null),e(ht,Np),v(Xo,ht,null),b(s,ql,k),b(s,so,k),e(so,Ho),e(Ho,ni),v(ms,ni,null),e(so,Ap),e(so,si),e(si,Op),b(s,zl,k),b(s,tt,k),v(us,tt,null),e(tt,Dp),e(tt,ai),e(ai,Sp),e(tt,Ip),e(tt,hs),e(hs,Wp),e(hs,Ha),e(Ha,Xp),e(hs,Hp),e(tt,Qp),e(tt,fs),e(fs,Up),e(fs,gs),e(gs,Bp),e(fs,Rp),e(tt,Kp),e(tt,_s),e(_s,Vp),e(_s,Qa),e(Qa,Yp),e(_s,Gp),e(tt,Jp),e(tt,Ze),v(bs,Ze,null),e(Ze,Zp),e(Ze,ao),e(ao,em),e(ao,Ua),e(Ua,tm),e(ao,om),e(ao,ri),e(ri,nm),e(ao,sm),e(Ze,am),v(Qo,Ze,null),e(Ze,rm),v(Uo,Ze,null),e(Ze,im),v(Bo,Ze,null),e(Ze,lm),v(Ro,Ze,null),e(Ze,dm),v(Ko,Ze,null),b(s,Cl,k),b(s,ro,k),e(ro,Vo),e(Vo,ii),v(ks,ii,null),e(ro,cm),e(ro,li),e(li,pm),b(s,Ll,k),b(s,ot,k),v(ys,ot,null),e(ot,mm),e(ot,di),e(di,um),e(ot,hm),e(ot,ws),e(ws,fm),e(ws,Ba),e(Ba,gm),e(ws,_m),e(ot,bm),e(ot,Ts),e(Ts,km),e(Ts,vs),e(vs,ym),e(Ts,wm),e(ot,Tm),e(ot,Fs),e(Fs,vm),e(Fs,Ra),e(Ra,Fm),e(Fs,$m),e(ot,Mm),e(ot,vt),v($s,vt,null),e(vt,xm),e(vt,io),e(io,Em),e(io,Ka),e(Ka,qm),e(io,zm),e(io,ci),e(ci,Cm),e(io,Lm),e(vt,jm),v(Yo,vt,null),e(vt,Pm),v(Go,vt,null),b(s,jl,k),b(s,lo,k),e(lo,Jo),e(Jo,pi),v(Ms,pi,null),e(lo,Nm),e(lo,mi),e(mi,Am),b(s,Pl,k),b(s,nt,k),v(xs,nt,null),e(nt,Om),e(nt,ui),e(ui,Dm),e(nt,Sm),e(nt,Es),e(Es,Im),e(Es,Va),e(Va,Wm),e(Es,Xm),e(nt,Hm),e(nt,qs),e(qs,Qm),e(qs,zs),e(zs,Um),e(qs,Bm),e(nt,Rm),e(nt,Cs),e(Cs,Km),e(Cs,Ya),e(Ya,Vm),e(Cs,Ym),e(nt,Gm),e(nt,ft),v(Ls,ft,null),e(ft,Jm),e(ft,co),e(co,Zm),e(co,Ga),e(Ga,eu),e(co,tu),e(co,hi),e(hi,ou),e(co,nu),e(ft,su),v(Zo,ft,null),e(ft,au),v(en,ft,null),e(ft,ru),v(tn,ft,null),b(s,Nl,k),b(s,po,k),e(po,on),e(on,fi),v(js,fi,null),e(po,iu),e(po,gi),e(gi,lu),b(s,Al,k),b(s,st,k),v(Ps,st,null),e(st,du),e(st,mo),e(mo,cu),e(mo,_i),e(_i,pu),e(mo,mu),e(mo,bi),e(bi,uu),e(mo,hu),e(st,fu),e(st,Ns),e(Ns,gu),e(Ns,Ja),e(Ja,_u),e(Ns,bu),e(st,ku),e(st,As),e(As,yu),e(As,Os),e(Os,wu),e(As,Tu),e(st,vu),e(st,Ds),e(Ds,Fu),e(Ds,Za),e(Za,$u),e(Ds,Mu),e(st,xu),e(st,gt),v(Ss,gt,null),e(gt,Eu),e(gt,uo),e(uo,qu),e(uo,er),e(er,zu),e(uo,Cu),e(uo,ki),e(ki,Lu),e(uo,ju),e(gt,Pu),v(nn,gt,null),e(gt,Nu),v(sn,gt,null),e(gt,Au),v(an,gt,null),b(s,Ol,k),b(s,ho,k),e(ho,rn),e(rn,yi),v(Is,yi,null),e(ho,Ou),e(ho,wi),e(wi,Du),b(s,Dl,k),b(s,at,k),v(Ws,at,null),e(at,Su),e(at,fo),e(fo,Iu),e(fo,Ti),e(Ti,Wu),e(fo,Xu),e(fo,vi),e(vi,Hu),e(fo,Qu),e(at,Uu),e(at,Xs),e(Xs,Bu),e(Xs,tr),e(tr,Ru),e(Xs,Ku),e(at,Vu),e(at,Hs),e(Hs,Yu),e(Hs,Qs),e(Qs,Gu),e(Hs,Ju),e(at,Zu),e(at,Us),e(Us,eh),e(Us,or),e(or,th),e(Us,oh),e(at,nh),e(at,Ft),v(Bs,Ft,null),e(Ft,sh),e(Ft,go),e(go,ah),e(go,nr),e(nr,rh),e(go,ih),e(go,Fi),e(Fi,lh),e(go,dh),e(Ft,ch),v(ln,Ft,null),e(Ft,ph),v(dn,Ft,null),b(s,Sl,k),b(s,_o,k),e(_o,cn),e(cn,$i),v(Rs,$i,null),e(_o,mh),e(_o,Mi),e(Mi,uh),b(s,Il,k),b(s,rt,k),v(Ks,rt,null),e(rt,hh),e(rt,xi),e(xi,fh),e(rt,gh),e(rt,Vs),e(Vs,_h),e(Vs,sr),e(sr,bh),e(Vs,kh),e(rt,yh),e(rt,Ys),e(Ys,wh),e(Ys,Gs),e(Gs,Th),e(Ys,vh),e(rt,Fh),v(pn,rt,null),e(rt,$h),e(rt,$t),v(Js,$t,null),e($t,Mh),e($t,bo),e(bo,xh),e(bo,ar),e(ar,Eh),e(bo,qh),e(bo,Ei),e(Ei,zh),e(bo,Ch),e($t,Lh),v(mn,$t,null),e($t,jh),v(un,$t,null),b(s,Wl,k),b(s,ko,k),e(ko,hn),e(hn,qi),v(Zs,qi,null),e(ko,Ph),e(ko,zi),e(zi,Nh),b(s,Xl,k),b(s,it,k),v(ea,it,null),e(it,Ah),e(it,Ci),e(Ci,Oh),e(it,Dh),e(it,ta),e(ta,Sh),e(ta,rr),e(rr,Ih),e(ta,Wh),e(it,Xh),e(it,oa),e(oa,Hh),e(oa,na),e(na,Qh),e(oa,Uh),e(it,Bh),v(fn,it,null),e(it,Rh),e(it,Mt),v(sa,Mt,null),e(Mt,Kh),e(Mt,yo),e(yo,Vh),e(yo,ir),e(ir,Yh),e(yo,Gh),e(yo,Li),e(Li,Jh),e(yo,Zh),e(Mt,ef),v(gn,Mt,null),e(Mt,tf),v(_n,Mt,null),b(s,Hl,k),b(s,wo,k),e(wo,bn),e(bn,ji),v(aa,ji,null),e(wo,of),e(wo,Pi),e(Pi,nf),b(s,Ql,k),b(s,lt,k),v(ra,lt,null),e(lt,sf),e(lt,Ni),e(Ni,af),e(lt,rf),e(lt,ia),e(ia,lf),e(ia,lr),e(lr,df),e(ia,cf),e(lt,pf),e(lt,la),e(la,mf),e(la,da),e(da,uf),e(la,hf),e(lt,ff),v(kn,lt,null),e(lt,gf),e(lt,_t),v(ca,_t,null),e(_t,_f),e(_t,To),e(To,bf),e(To,dr),e(dr,kf),e(To,yf),e(To,Ai),e(Ai,wf),e(To,Tf),e(_t,vf),v(yn,_t,null),e(_t,Ff),v(wn,_t,null),e(_t,$f),v(Tn,_t,null),b(s,Ul,k),b(s,vo,k),e(vo,vn),e(vn,Oi),v(pa,Oi,null),e(vo,Mf),e(vo,Di),e(Di,xf),b(s,Bl,k),b(s,dt,k),v(ma,dt,null),e(dt,Ef),e(dt,Si),e(Si,qf),e(dt,zf),e(dt,ua),e(ua,Cf),e(ua,cr),e(cr,Lf),e(ua,jf),e(dt,Pf),e(dt,ha),e(ha,Nf),e(ha,fa),e(fa,Af),e(ha,Of),e(dt,Df),v(Fn,dt,null),e(dt,Sf),e(dt,xt),v(ga,xt,null),e(xt,If),e(xt,Fo),e(Fo,Wf),e(Fo,pr),e(pr,Xf),e(Fo,Hf),e(Fo,Ii),e(Ii,Qf),e(Fo,Uf),e(xt,Bf),v($n,xt,null),e(xt,Rf),v(Mn,xt,null),b(s,Rl,k),b(s,$o,k),e($o,xn),e(xn,Wi),v(_a,Wi,null),e($o,Kf),e($o,Xi),e(Xi,Vf),b(s,Kl,k),b(s,ct,k),v(ba,ct,null),e(ct,Yf),e(ct,Hi),e(Hi,Gf),e(ct,Jf),e(ct,ka),e(ka,Zf),e(ka,mr),e(mr,eg),e(ka,tg),e(ct,og),e(ct,ya),e(ya,ng),e(ya,wa),e(wa,sg),e(ya,ag),e(ct,rg),v(En,ct,null),e(ct,ig),e(ct,bt),v(Ta,bt,null),e(bt,lg),e(bt,Mo),e(Mo,dg),e(Mo,ur),e(ur,cg),e(Mo,pg),e(Mo,Qi),e(Qi,mg),e(Mo,ug),e(bt,hg),v(qn,bt,null),e(bt,fg),v(zn,bt,null),e(bt,gg),v(Cn,bt,null),b(s,Vl,k),b(s,xo,k),e(xo,Ln),e(Ln,Ui),v(va,Ui,null),e(xo,_g),e(xo,Bi),e(Bi,bg),b(s,Yl,k),b(s,pt,k),v(Fa,pt,null),e(pt,kg),e(pt,Eo),e(Eo,yg),e(Eo,Ri),e(Ri,wg),e(Eo,Tg),e(Eo,Ki),e(Ki,vg),e(Eo,Fg),e(pt,$g),e(pt,$a),e($a,Mg),e($a,hr),e(hr,xg),e($a,Eg),e(pt,qg),e(pt,Ma),e(Ma,zg),e(Ma,xa),e(xa,Cg),e(Ma,Lg),e(pt,jg),v(jn,pt,null),e(pt,Pg),e(pt,kt),v(Ea,kt,null),e(kt,Ng),e(kt,qo),e(qo,Ag),e(qo,fr),e(fr,Og),e(qo,Dg),e(qo,Vi),e(Vi,Sg),e(qo,Ig),e(kt,Wg),v(Pn,kt,null),e(kt,Xg),v(Nn,kt,null),e(kt,Hg),v(An,kt,null),Gl=!0},p(s,[k]){const qa={};k&2&&(qa.$$scope={dirty:k,ctx:s}),Po.$set(qa);const Yi={};k&2&&(Yi.$$scope={dirty:k,ctx:s}),Oo.$set(Yi);const Gi={};k&2&&(Gi.$$scope={dirty:k,ctx:s}),Do.$set(Gi);const Ji={};k&2&&(Ji.$$scope={dirty:k,ctx:s}),Io.$set(Ji);const za={};k&2&&(za.$$scope={dirty:k,ctx:s}),Wo.$set(za);const Zi={};k&2&&(Zi.$$scope={dirty:k,ctx:s}),Xo.$set(Zi);const el={};k&2&&(el.$$scope={dirty:k,ctx:s}),Qo.$set(el);const tl={};k&2&&(tl.$$scope={dirty:k,ctx:s}),Uo.$set(tl);const Ca={};k&2&&(Ca.$$scope={dirty:k,ctx:s}),Bo.$set(Ca);const ol={};k&2&&(ol.$$scope={dirty:k,ctx:s}),Ro.$set(ol);const nl={};k&2&&(nl.$$scope={dirty:k,ctx:s}),Ko.$set(nl);const sl={};k&2&&(sl.$$scope={dirty:k,ctx:s}),Yo.$set(sl);const al={};k&2&&(al.$$scope={dirty:k,ctx:s}),Go.$set(al);const zo={};k&2&&(zo.$$scope={dirty:k,ctx:s}),Zo.$set(zo);const rl={};k&2&&(rl.$$scope={dirty:k,ctx:s}),en.$set(rl);const il={};k&2&&(il.$$scope={dirty:k,ctx:s}),tn.$set(il);const La={};k&2&&(La.$$scope={dirty:k,ctx:s}),nn.$set(La);const ll={};k&2&&(ll.$$scope={dirty:k,ctx:s}),sn.$set(ll);const dl={};k&2&&(dl.$$scope={dirty:k,ctx:s}),an.$set(dl);const cl={};k&2&&(cl.$$scope={dirty:k,ctx:s}),ln.$set(cl);const Co={};k&2&&(Co.$$scope={dirty:k,ctx:s}),dn.$set(Co);const Xt={};k&2&&(Xt.$$scope={dirty:k,ctx:s}),pn.$set(Xt);const pl={};k&2&&(pl.$$scope={dirty:k,ctx:s}),mn.$set(pl);const ml={};k&2&&(ml.$$scope={dirty:k,ctx:s}),un.$set(ml);const ul={};k&2&&(ul.$$scope={dirty:k,ctx:s}),fn.$set(ul);const Lo={};k&2&&(Lo.$$scope={dirty:k,ctx:s}),gn.$set(Lo);const hl={};k&2&&(hl.$$scope={dirty:k,ctx:s}),_n.$set(hl);const fl={};k&2&&(fl.$$scope={dirty:k,ctx:s}),kn.$set(fl);const ja={};k&2&&(ja.$$scope={dirty:k,ctx:s}),yn.$set(ja);const gl={};k&2&&(gl.$$scope={dirty:k,ctx:s}),wn.$set(gl);const _l={};k&2&&(_l.$$scope={dirty:k,ctx:s}),Tn.$set(_l);const bl={};k&2&&(bl.$$scope={dirty:k,ctx:s}),Fn.$set(bl);const Ge={};k&2&&(Ge.$$scope={dirty:k,ctx:s}),$n.$set(Ge);const kl={};k&2&&(kl.$$scope={dirty:k,ctx:s}),Mn.$set(kl);const Ht={};k&2&&(Ht.$$scope={dirty:k,ctx:s}),En.$set(Ht);const yl={};k&2&&(yl.$$scope={dirty:k,ctx:s}),qn.$set(yl);const wl={};k&2&&(wl.$$scope={dirty:k,ctx:s}),zn.$set(wl);const Qt={};k&2&&(Qt.$$scope={dirty:k,ctx:s}),Cn.$set(Qt);const Tl={};k&2&&(Tl.$$scope={dirty:k,ctx:s}),jn.$set(Tl);const vl={};k&2&&(vl.$$scope={dirty:k,ctx:s}),Pn.$set(vl);const Fl={};k&2&&(Fl.$$scope={dirty:k,ctx:s}),Nn.$set(Fl);const Pa={};k&2&&(Pa.$$scope={dirty:k,ctx:s}),An.$set(Pa)},i(s){Gl||(F(l.$$.fragment,s),F(x.$$.fragment,s),F(pe.$$.fragment,s),F(me.$$.fragment,s),F(De.$$.fragment,s),F(Qn.$$.fragment,s),F(Rn.$$.fragment,s),F(Vn.$$.fragment,s),F(Yn.$$.fragment,s),F(Po.$$.fragment,s),F(Gn.$$.fragment,s),F(Zn.$$.fragment,s),F(es.$$.fragment,s),F(ss.$$.fragment,s),F(Oo.$$.fragment,s),F(Do.$$.fragment,s),F(as.$$.fragment,s),F(rs.$$.fragment,s),F(ps.$$.fragment,s),F(Io.$$.fragment,s),F(Wo.$$.fragment,s),F(Xo.$$.fragment,s),F(ms.$$.fragment,s),F(us.$$.fragment,s),F(bs.$$.fragment,s),F(Qo.$$.fragment,s),F(Uo.$$.fragment,s),F(Bo.$$.fragment,s),F(Ro.$$.fragment,s),F(Ko.$$.fragment,s),F(ks.$$.fragment,s),F(ys.$$.fragment,s),F($s.$$.fragment,s),F(Yo.$$.fragment,s),F(Go.$$.fragment,s),F(Ms.$$.fragment,s),F(xs.$$.fragment,s),F(Ls.$$.fragment,s),F(Zo.$$.fragment,s),F(en.$$.fragment,s),F(tn.$$.fragment,s),F(js.$$.fragment,s),F(Ps.$$.fragment,s),F(Ss.$$.fragment,s),F(nn.$$.fragment,s),F(sn.$$.fragment,s),F(an.$$.fragment,s),F(Is.$$.fragment,s),F(Ws.$$.fragment,s),F(Bs.$$.fragment,s),F(ln.$$.fragment,s),F(dn.$$.fragment,s),F(Rs.$$.fragment,s),F(Ks.$$.fragment,s),F(pn.$$.fragment,s),F(Js.$$.fragment,s),F(mn.$$.fragment,s),F(un.$$.fragment,s),F(Zs.$$.fragment,s),F(ea.$$.fragment,s),F(fn.$$.fragment,s),F(sa.$$.fragment,s),F(gn.$$.fragment,s),F(_n.$$.fragment,s),F(aa.$$.fragment,s),F(ra.$$.fragment,s),F(kn.$$.fragment,s),F(ca.$$.fragment,s),F(yn.$$.fragment,s),F(wn.$$.fragment,s),F(Tn.$$.fragment,s),F(pa.$$.fragment,s),F(ma.$$.fragment,s),F(Fn.$$.fragment,s),F(ga.$$.fragment,s),F($n.$$.fragment,s),F(Mn.$$.fragment,s),F(_a.$$.fragment,s),F(ba.$$.fragment,s),F(En.$$.fragment,s),F(Ta.$$.fragment,s),F(qn.$$.fragment,s),F(zn.$$.fragment,s),F(Cn.$$.fragment,s),F(va.$$.fragment,s),F(Fa.$$.fragment,s),F(jn.$$.fragment,s),F(Ea.$$.fragment,s),F(Pn.$$.fragment,s),F(Nn.$$.fragment,s),F(An.$$.fragment,s),Gl=!0)},o(s){$(l.$$.fragment,s),$(x.$$.fragment,s),$(pe.$$.fragment,s),$(me.$$.fragment,s),$(De.$$.fragment,s),$(Qn.$$.fragment,s),$(Rn.$$.fragment,s),$(Vn.$$.fragment,s),$(Yn.$$.fragment,s),$(Po.$$.fragment,s),$(Gn.$$.fragment,s),$(Zn.$$.fragment,s),$(es.$$.fragment,s),$(ss.$$.fragment,s),$(Oo.$$.fragment,s),$(Do.$$.fragment,s),$(as.$$.fragment,s),$(rs.$$.fragment,s),$(ps.$$.fragment,s),$(Io.$$.fragment,s),$(Wo.$$.fragment,s),$(Xo.$$.fragment,s),$(ms.$$.fragment,s),$(us.$$.fragment,s),$(bs.$$.fragment,s),$(Qo.$$.fragment,s),$(Uo.$$.fragment,s),$(Bo.$$.fragment,s),$(Ro.$$.fragment,s),$(Ko.$$.fragment,s),$(ks.$$.fragment,s),$(ys.$$.fragment,s),$($s.$$.fragment,s),$(Yo.$$.fragment,s),$(Go.$$.fragment,s),$(Ms.$$.fragment,s),$(xs.$$.fragment,s),$(Ls.$$.fragment,s),$(Zo.$$.fragment,s),$(en.$$.fragment,s),$(tn.$$.fragment,s),$(js.$$.fragment,s),$(Ps.$$.fragment,s),$(Ss.$$.fragment,s),$(nn.$$.fragment,s),$(sn.$$.fragment,s),$(an.$$.fragment,s),$(Is.$$.fragment,s),$(Ws.$$.fragment,s),$(Bs.$$.fragment,s),$(ln.$$.fragment,s),$(dn.$$.fragment,s),$(Rs.$$.fragment,s),$(Ks.$$.fragment,s),$(pn.$$.fragment,s),$(Js.$$.fragment,s),$(mn.$$.fragment,s),$(un.$$.fragment,s),$(Zs.$$.fragment,s),$(ea.$$.fragment,s),$(fn.$$.fragment,s),$(sa.$$.fragment,s),$(gn.$$.fragment,s),$(_n.$$.fragment,s),$(aa.$$.fragment,s),$(ra.$$.fragment,s),$(kn.$$.fragment,s),$(ca.$$.fragment,s),$(yn.$$.fragment,s),$(wn.$$.fragment,s),$(Tn.$$.fragment,s),$(pa.$$.fragment,s),$(ma.$$.fragment,s),$(Fn.$$.fragment,s),$(ga.$$.fragment,s),$($n.$$.fragment,s),$(Mn.$$.fragment,s),$(_a.$$.fragment,s),$(ba.$$.fragment,s),$(En.$$.fragment,s),$(Ta.$$.fragment,s),$(qn.$$.fragment,s),$(zn.$$.fragment,s),$(Cn.$$.fragment,s),$(va.$$.fragment,s),$(Fa.$$.fragment,s),$(jn.$$.fragment,s),$(Ea.$$.fragment,s),$(Pn.$$.fragment,s),$(Nn.$$.fragment,s),$(An.$$.fragment,s),Gl=!1},d(s){t(d),s&&t(_),s&&t(c),M(l),s&&t(ge),s&&t(D),M(x),s&&t(_e),s&&t(I),s&&t(be),s&&t(W),s&&t(ke),s&&t(X),s&&t(te),s&&t(L),s&&t(ye),s&&t(j),M(pe),s&&t(we),s&&t(A),M(me),s&&t(R),s&&t(Ae),M(De),s&&t(oe),s&&t(J),M(Qn),M(Rn),M(Vn),M(Yn),M(Po),M(Gn),s&&t($l),s&&t(eo),M(Zn),s&&t(Ml),s&&t(ut),M(es),M(ss),M(Oo),M(Do),s&&t(xl),s&&t(oo),M(as),s&&t(El),s&&t(et),M(rs),M(ps),M(Io),M(Wo),M(Xo),s&&t(ql),s&&t(so),M(ms),s&&t(zl),s&&t(tt),M(us),M(bs),M(Qo),M(Uo),M(Bo),M(Ro),M(Ko),s&&t(Cl),s&&t(ro),M(ks),s&&t(Ll),s&&t(ot),M(ys),M($s),M(Yo),M(Go),s&&t(jl),s&&t(lo),M(Ms),s&&t(Pl),s&&t(nt),M(xs),M(Ls),M(Zo),M(en),M(tn),s&&t(Nl),s&&t(po),M(js),s&&t(Al),s&&t(st),M(Ps),M(Ss),M(nn),M(sn),M(an),s&&t(Ol),s&&t(ho),M(Is),s&&t(Dl),s&&t(at),M(Ws),M(Bs),M(ln),M(dn),s&&t(Sl),s&&t(_o),M(Rs),s&&t(Il),s&&t(rt),M(Ks),M(pn),M(Js),M(mn),M(un),s&&t(Wl),s&&t(ko),M(Zs),s&&t(Xl),s&&t(it),M(ea),M(fn),M(sa),M(gn),M(_n),s&&t(Hl),s&&t(wo),M(aa),s&&t(Ql),s&&t(lt),M(ra),M(kn),M(ca),M(yn),M(wn),M(Tn),s&&t(Ul),s&&t(vo),M(pa),s&&t(Bl),s&&t(dt),M(ma),M(Fn),M(ga),M($n),M(Mn),s&&t(Rl),s&&t($o),M(_a),s&&t(Kl),s&&t(ct),M(ba),M(En),M(Ta),M(qn),M(zn),M(Cn),s&&t(Vl),s&&t(xo),M(va),s&&t(Yl),s&&t(pt),M(Fa),M(jn),M(Ea),M(Pn),M(Nn),M(An)}}}const ty={local:"flaubert",sections:[{local:"overview",title:"Overview"},{local:"transformers.FlaubertConfig",title:"FlaubertConfig"},{local:"transformers.FlaubertTokenizer",title:"FlaubertTokenizer"},{local:"transformers.FlaubertModel",title:"FlaubertModel"},{local:"transformers.FlaubertWithLMHeadModel",title:"FlaubertWithLMHeadModel"},{local:"transformers.FlaubertForSequenceClassification",title:"FlaubertForSequenceClassification"},{local:"transformers.FlaubertForMultipleChoice",title:"FlaubertForMultipleChoice"},{local:"transformers.FlaubertForTokenClassification",title:"FlaubertForTokenClassification"},{local:"transformers.FlaubertForQuestionAnsweringSimple",title:"FlaubertForQuestionAnsweringSimple"},{local:"transformers.FlaubertForQuestionAnswering",title:"FlaubertForQuestionAnswering"},{local:"transformers.TFFlaubertModel",title:"TFFlaubertModel"},{local:"transformers.TFFlaubertWithLMHeadModel",title:"TFFlaubertWithLMHeadModel"},{local:"transformers.TFFlaubertForSequenceClassification",title:"TFFlaubertForSequenceClassification"},{local:"transformers.TFFlaubertForMultipleChoice",title:"TFFlaubertForMultipleChoice"},{local:"transformers.TFFlaubertForTokenClassification",title:"TFFlaubertForTokenClassification"},{local:"transformers.TFFlaubertForQuestionAnsweringSimple",title:"TFFlaubertForQuestionAnsweringSimple"}],title:"FlauBERT"};function oy(q){return pk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class dy extends ik{constructor(d){super();lk(this,d,oy,ey,dk,{})}}export{dy as default,ty as metadata};
