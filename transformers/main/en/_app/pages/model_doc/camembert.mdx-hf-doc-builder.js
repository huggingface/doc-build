import{S as Zy,i as eT,s as tT,e as a,k as p,w,t as o,M as oT,c as r,d as t,m as h,a as i,x as v,h as n,b as g,G as e,g as b,y as $,q as C,o as F,B as E,v as nT,L as Je}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ye}from"../../chunks/Tip-hf-doc-builder.js";import{D as ae}from"../../chunks/Docstring-hf-doc-builder.js";import{C as Ge}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ze}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as Ve}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function sT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function aT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertModel
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertModel.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertModel.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function rT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function iT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertForCausalLM, CamembertConfig
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
config = CamembertConfig.from_pretrained("camembert-base")
config.is_decoder = True
model = CamembertForCausalLM.from_pretrained("camembert-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForCausalLM, CamembertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = CamembertConfig.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function lT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function dT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertForMaskedLM
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMaskedLM.from_pretrained("camembert-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function cT(q){let l,_;return l=new Ge({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function mT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function pT(q){let l,_,c,u,y;return u=new Ge({props:{code:`import torch
from transformers import CamembertTokenizer, CamembertForSequenceClassification

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of single-label classification:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of single-label classification:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function hT(q){let l,_;return l=new Ge({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function uT(q){let l,_,c,u,y;return u=new Ge({props:{code:`import torch
from transformers import CamembertTokenizer, CamembertForSequenceClassification

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = CamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example of multi-label classification:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example of multi-label classification:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function fT(q){let l,_;return l=new Ge({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = CamembertForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function gT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function _T(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertForMultipleChoice
import torch

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = CamembertForMultipleChoice.from_pretrained("camembert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function bT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function kT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertForTokenClassification
import torch

tokenizer = CamembertTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = CamembertForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function yT(q){let l,_;return l=new Ge({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function TT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function wT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, CamembertForQuestionAnswering
import torch

tokenizer = CamembertTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = CamembertForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, CamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = CamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function vT(q){let l,_;return l=new Ge({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function $T(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function CT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function FT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertModel
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertModel.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertModel.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function ET(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function MT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function zT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForCausalLM
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForCausalLM.from_pretrained("camembert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForCausalLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function qT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function xT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function jT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMaskedLM
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMaskedLM.from_pretrained("camembert-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function PT(q){let l,_;return l=new Ge({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function LT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function OT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function NT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForSequenceClassification
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFCamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function AT(q){let l,_;return l=new Ge({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFCamembertForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function DT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function IT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function ST(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForMultipleChoice
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("camembert-base")
model = TFCamembertForMultipleChoice.from_pretrained("camembert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;camembert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function BT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function WT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function RT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForTokenClassification
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFCamembertForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function UT(q){let l,_;return l=new Ge({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function KT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke;return{c(){l=a("p"),_=o("TensorFlow models and layers in "),c=a("code"),u=o("transformers"),y=o(" accept two formats as input:"),d=p(),m=a("ul"),x=a("li"),Te=o("having all inputs as keyword arguments (like PyTorch models), or"),he=p(),I=a("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=p(),T=a("p"),we=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=a("code"),ve=o("model.fit()"),ue=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=a("code"),$e=o("model.fit()"),le=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),V=a("code"),Ce=o("fit()"),fe=o(" and "),R=a("code"),Fe=o("predict()"),ge=o(`, such as when creating your own layers or models with
the Keras `),U=a("code"),pe=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=p(),j=a("ul"),O=a("li"),_e=o("a single Tensor with "),K=a("code"),de=o("input_ids"),Me=o(" only and nothing else: "),H=a("code"),ze=o("model(input_ids)"),qe=p(),L=a("li"),se=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=a("code"),ce=o("model([input_ids, attention_mask])"),xe=o(" or "),G=a("code"),me=o("model([input_ids, attention_mask, token_type_ids])"),je=p(),D=a("li"),be=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=a("code"),ie=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),te=p(),P=a("p"),Pe=o(`Note that when creating models and layers with
`),N=a("a"),Le=o("subclassing"),ke=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(f){l=r(f,"P",{});var M=i(l);_=n(M,"TensorFlow models and layers in "),c=r(M,"CODE",{});var Be=i(c);u=n(Be,"transformers"),Be.forEach(t),y=n(M," accept two formats as input:"),M.forEach(t),d=h(f),m=r(f,"UL",{});var Y=i(m);x=r(Y,"LI",{});var We=i(x);Te=n(We,"having all inputs as keyword arguments (like PyTorch models), or"),We.forEach(t),he=h(Y),I=r(Y,"LI",{});var Ae=i(I);re=n(Ae,"having all inputs as a list, tuple or dict in the first positional argument."),Ae.forEach(t),Y.forEach(t),ee=h(f),T=r(f,"P",{});var z=i(T);we=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Q=r(z,"CODE",{});var Re=i(Q);ve=n(Re,"model.fit()"),Re.forEach(t),ue=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),B=r(z,"CODE",{});var Oe=i(B);$e=n(Oe,"model.fit()"),Oe.forEach(t),le=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),V=r(z,"CODE",{});var Ue=i(V);Ce=n(Ue,"fit()"),Ue.forEach(t),fe=n(z," and "),R=r(z,"CODE",{});var Ke=i(R);Fe=n(Ke,"predict()"),Ke.forEach(t),ge=n(z,`, such as when creating your own layers or models with
the Keras `),U=r(z,"CODE",{});var Se=i(U);pe=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=h(f),j=r(f,"UL",{});var A=i(j);O=r(A,"LI",{});var W=i(O);_e=n(W,"a single Tensor with "),K=r(W,"CODE",{});var De=i(K);de=n(De,"input_ids"),De.forEach(t),Me=n(W," only and nothing else: "),H=r(W,"CODE",{});var Ne=i(H);ze=n(Ne,"model(input_ids)"),Ne.forEach(t),W.forEach(t),qe=h(A),L=r(A,"LI",{});var X=i(L);se=n(X,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),J=r(X,"CODE",{});var Ie=i(J);ce=n(Ie,"model([input_ids, attention_mask])"),Ie.forEach(t),xe=n(X," or "),G=r(X,"CODE",{});var He=i(G);me=n(He,"model([input_ids, attention_mask, token_type_ids])"),He.forEach(t),X.forEach(t),je=h(A),D=r(A,"LI",{});var ye=i(D);be=n(ye,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),S=r(ye,"CODE",{});var oe=i(S);ie=n(oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),oe.forEach(t),ye.forEach(t),A.forEach(t),te=h(f),P=r(f,"P",{});var Z=i(P);Pe=n(Z,`Note that when creating models and layers with
`),N=r(Z,"A",{href:!0,rel:!0});var Qe=i(N);Le=n(Qe,"subclassing"),Qe.forEach(t),ke=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){g(N,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),g(N,"rel","nofollow")},m(f,M){b(f,l,M),e(l,_),e(l,c),e(c,u),e(l,y),b(f,d,M),b(f,m,M),e(m,x),e(x,Te),e(m,he),e(m,I),e(I,re),b(f,ee,M),b(f,T,M),e(T,we),e(T,Q),e(Q,ve),e(T,ue),e(T,B),e(B,$e),e(T,le),e(T,V),e(V,Ce),e(T,fe),e(T,R),e(R,Fe),e(T,ge),e(T,U),e(U,pe),e(T,Ee),b(f,ne,M),b(f,j,M),e(j,O),e(O,_e),e(O,K),e(K,de),e(O,Me),e(O,H),e(H,ze),e(j,qe),e(j,L),e(L,se),e(L,J),e(J,ce),e(L,xe),e(L,G),e(G,me),e(j,je),e(j,D),e(D,be),e(D,S),e(S,ie),b(f,te,M),b(f,P,M),e(P,Pe),e(P,N),e(N,Le),e(P,ke)},d(f){f&&t(l),f&&t(d),f&&t(m),f&&t(ee),f&&t(T),f&&t(ne),f&&t(j),f&&t(te),f&&t(P)}}}function HT(q){let l,_,c,u,y;return{c(){l=a("p"),_=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=a("code"),u=o("Module"),y=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=r(m,"CODE",{});var x=i(c);u=n(x,"Module"),x.forEach(t),y=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(d,m){b(d,l,m),e(l,_),e(l,c),e(c,u),e(l,y)},d(d){d&&t(l)}}}function QT(q){let l,_,c,u,y;return u=new Ge({props:{code:`from transformers import CamembertTokenizer, TFCamembertForQuestionAnswering
import tensorflow as tf

tokenizer = CamembertTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFCamembertForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> CamembertTokenizer, TFCamembertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = CamembertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFCamembertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){l=a("p"),_=o("Example:"),c=p(),w(u.$$.fragment)},l(d){l=r(d,"P",{});var m=i(l);_=n(m,"Example:"),m.forEach(t),c=h(d),v(u.$$.fragment,d)},m(d,m){b(d,l,m),e(l,_),b(d,c,m),$(u,d,m),y=!0},p:Je,i(d){y||(C(u.$$.fragment,d),y=!0)},o(d){F(u.$$.fragment,d),y=!1},d(d){d&&t(l),d&&t(c),E(u,d)}}}function VT(q){let l,_;return l=new Ge({props:{code:`# target is "nice puppet"
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){w(l.$$.fragment)},l(c){v(l.$$.fragment,c)},m(c,u){$(l,c,u),_=!0},p:Je,i(c){_||(C(l.$$.fragment,c),_=!0)},o(c){F(l.$$.fragment,c),_=!1},d(c){E(l,c)}}}function JT(q){let l,_,c,u,y,d,m,x,Te,he,I,re,ee,T,we,Q,ve,ue,B,$e,le,V,Ce,fe,R,Fe,ge,U,pe,Ee,ne,j,O,_e,K,de,Me,H,ze,qe,L,se,J,ce,xe,G,me,je,D,be,S,ie,te,P,Pe,N,Le,ke,f,M,Be,Y,We,Ae,z,Re,Oe,Ue,Ke,Se,A,W,De,Ne,X,Ie,He,ye,oe,Z,Qe,Bt,Kc,cr,Hc,Qc,mr,Vc,Jc,ss,Gc,Xc,Yc,as,Zc,pr,em,tm,om,Rt,rs,nm,hi,sm,am,is,hr,rm,ui,im,lm,ur,dm,fi,cm,mm,So,ls,pm,ds,hm,gi,um,fm,gm,Bo,cs,_m,_i,bm,km,fr,ms,ud,ro,Wo,bi,ps,ym,ki,Tm,fd,mt,hs,wm,Et,vm,yi,$m,Cm,gr,Fm,Em,_r,Mm,zm,us,qm,xm,jm,fs,Pm,br,Lm,Om,Nm,Ut,gs,Am,Ti,Dm,Im,_s,kr,Sm,wi,Bm,Wm,yr,Rm,vi,Um,Km,Ro,bs,Hm,$i,Qm,gd,io,Uo,Ci,ks,Vm,Fi,Jm,_d,Xe,ys,Gm,Ei,Xm,Ym,Ts,Zm,Tr,ep,tp,op,ws,np,vs,sp,ap,rp,$s,ip,Mi,lp,dp,cp,tt,mp,zi,pp,hp,qi,up,fp,xi,gp,_p,ji,bp,kp,Pi,yp,Tp,Li,wp,vp,$p,Ko,Cp,Oi,Fp,Ep,Cs,Mp,zp,Mt,Fs,qp,lo,xp,wr,jp,Pp,Ni,Lp,Op,Np,Ho,Ap,Qo,bd,co,Vo,Ai,Es,Dp,Di,Ip,kd,pt,Ms,Sp,zs,Bp,Ii,Wp,Rp,Up,qs,Kp,vr,Hp,Qp,Vp,xs,Jp,js,Gp,Xp,Yp,zt,Ps,Zp,mo,eh,$r,th,oh,Si,nh,sh,ah,Jo,rh,Go,yd,po,Xo,Bi,Ls,ih,Wi,lh,Td,ht,Os,dh,Ns,ch,Ri,mh,ph,hh,As,uh,Cr,fh,gh,_h,Ds,bh,Is,kh,yh,Th,bt,Ss,wh,ho,vh,Fr,$h,Ch,Ui,Fh,Eh,Mh,Yo,zh,Zo,qh,en,wd,uo,tn,Ki,Bs,xh,Hi,jh,vd,ut,Ws,Ph,Qi,Lh,Oh,Rs,Nh,Er,Ah,Dh,Ih,Us,Sh,Ks,Bh,Wh,Rh,et,Hs,Uh,fo,Kh,Mr,Hh,Qh,Vi,Vh,Jh,Gh,on,Xh,nn,Yh,sn,Zh,an,eu,rn,$d,go,ln,Ji,Qs,tu,Gi,ou,Cd,ft,Vs,nu,Xi,su,au,Js,ru,zr,iu,lu,du,Gs,cu,Xs,mu,pu,hu,qt,Ys,uu,_o,fu,qr,gu,_u,Yi,bu,ku,yu,dn,Tu,cn,Fd,bo,mn,Zi,Zs,wu,el,vu,Ed,gt,ea,$u,tl,Cu,Fu,ta,Eu,xr,Mu,zu,qu,oa,xu,na,ju,Pu,Lu,kt,sa,Ou,ko,Nu,jr,Au,Du,ol,Iu,Su,Bu,pn,Wu,hn,Ru,un,Md,yo,fn,nl,aa,Uu,sl,Ku,zd,_t,ra,Hu,gn,Qu,al,Vu,Ju,rl,Gu,Xu,ia,Yu,Pr,Zu,ef,tf,la,of,da,nf,sf,af,yt,ca,rf,To,lf,Lr,df,cf,il,mf,pf,hf,_n,uf,bn,ff,kn,qd,wo,yn,ll,ma,gf,dl,_f,xd,ot,pa,bf,cl,kf,yf,ha,Tf,Or,wf,vf,$f,ua,Cf,fa,Ff,Ef,Mf,Tn,zf,xt,ga,qf,vo,xf,Nr,jf,Pf,ml,Lf,Of,Nf,wn,Af,vn,jd,$o,$n,pl,_a,Df,hl,If,Pd,nt,ba,Sf,ka,Bf,ul,Wf,Rf,Uf,ya,Kf,Ar,Hf,Qf,Vf,Ta,Jf,wa,Gf,Xf,Yf,Cn,Zf,jt,va,eg,Co,tg,Dr,og,ng,fl,sg,ag,rg,Fn,ig,En,Ld,Fo,Mn,gl,$a,lg,_l,dg,Od,st,Ca,cg,Fa,mg,bl,pg,hg,ug,Ea,fg,Ir,gg,_g,bg,Ma,kg,za,yg,Tg,wg,zn,vg,Tt,qa,$g,Eo,Cg,Sr,Fg,Eg,kl,Mg,zg,qg,qn,xg,xn,jg,jn,Nd,Mo,Pn,yl,xa,Pg,Tl,Lg,Ad,at,ja,Og,wl,Ng,Ag,Pa,Dg,Br,Ig,Sg,Bg,La,Wg,Oa,Rg,Ug,Kg,Ln,Hg,wt,Na,Qg,zo,Vg,Wr,Jg,Gg,vl,Xg,Yg,Zg,On,e_,Nn,t_,An,Dd,qo,Dn,$l,Aa,o_,Cl,n_,Id,rt,Da,s_,Fl,a_,r_,Ia,i_,Rr,l_,d_,c_,Sa,m_,Ba,p_,h_,u_,In,f_,Pt,Wa,g_,xo,__,Ur,b_,k_,El,y_,T_,w_,Sn,v_,Bn,Sd,jo,Wn,Ml,Ra,$_,zl,C_,Bd,it,Ua,F_,ql,E_,M_,Ka,z_,Kr,q_,x_,j_,Ha,P_,Qa,L_,O_,N_,Rn,A_,vt,Va,D_,Po,I_,Hr,S_,B_,xl,W_,R_,U_,Un,K_,Kn,H_,Hn,Wd,Lo,Qn,jl,Ja,Q_,Pl,V_,Rd,lt,Ga,J_,Oo,G_,Ll,X_,Y_,Ol,Z_,eb,tb,Xa,ob,Qr,nb,sb,ab,Ya,rb,Za,ib,lb,db,Vn,cb,$t,er,mb,No,pb,Vr,hb,ub,Nl,fb,gb,_b,Jn,bb,Gn,kb,Xn,Ud;return d=new Ze({}),T=new Ze({}),P=new Ze({}),M=new ae({props:{name:"class transformers.CamembertConfig",anchor:"transformers.CamembertConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/configuration_camembert.py#L39"}}),Ne=new Ze({}),Z=new ae({props:{name:"class transformers.CamembertTokenizer",anchor:"transformers.CamembertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.CamembertTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.CamembertTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L45"}}),rs=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L161",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ls=new ae({props:{name:"get_special_tokens_mask",anchor:"transformers.CamembertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.CamembertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L187",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),cs=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L214",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ms=new ae({props:{name:"save_vocabulary",anchor:"transformers.CamembertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert.py#L283"}}),ps=new Ze({}),hs=new ae({props:{name:"class transformers.CamembertTokenizerFast",anchor:"transformers.CamembertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"additional_special_tokens",val:" = ['<s>NOTUSED', '</s>NOTUSED']"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.CamembertTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.CamembertTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.CamembertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.CamembertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.CamembertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.CamembertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.CamembertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.CamembertTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L53"}}),gs=new ae({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L145",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),bs=new ae({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.CamembertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/tokenization_camembert_fast.py#L171",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ks=new Ze({}),ys=new ae({props:{name:"class transformers.CamembertModel",anchor:"transformers.CamembertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.CamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L742"}}),Fs=new ae({props:{name:"forward",anchor:"transformers.CamembertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L788",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Ho=new Ye({props:{$$slots:{default:[sT]},$$scope:{ctx:q}}}),Qo=new Ve({props:{anchor:"transformers.CamembertModel.forward.example",$$slots:{default:[aT]},$$scope:{ctx:q}}}),Es=new Ze({}),Ms=new ae({props:{name:"class transformers.CamembertForCausalLM",anchor:"transformers.CamembertForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1423"}}),Ps=new ae({props:{name:"forward",anchor:"transformers.CamembertForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.CamembertForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.CamembertForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.CamembertForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1449",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Jo=new Ye({props:{$$slots:{default:[rT]},$$scope:{ctx:q}}}),Go=new Ve({props:{anchor:"transformers.CamembertForCausalLM.forward.example",$$slots:{default:[iT]},$$scope:{ctx:q}}}),Ls=new Ze({}),Os=new ae({props:{name:"class transformers.CamembertForMaskedLM",anchor:"transformers.CamembertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L931"}}),Ss=new ae({props:{name:"forward",anchor:"transformers.CamembertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.CamembertForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L960",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Yo=new Ye({props:{$$slots:{default:[lT]},$$scope:{ctx:q}}}),Zo=new Ve({props:{anchor:"transformers.CamembertForMaskedLM.forward.example",$$slots:{default:[dT]},$$scope:{ctx:q}}}),en=new Ve({props:{anchor:"transformers.CamembertForMaskedLM.forward.example-2",$$slots:{default:[cT]},$$scope:{ctx:q}}}),Bs=new Ze({}),Ws=new ae({props:{name:"class transformers.CamembertForSequenceClassification",anchor:"transformers.CamembertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1036"}}),Hs=new ae({props:{name:"forward",anchor:"transformers.CamembertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1050",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),on=new Ye({props:{$$slots:{default:[mT]},$$scope:{ctx:q}}}),nn=new Ve({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example",$$slots:{default:[pT]},$$scope:{ctx:q}}}),sn=new Ve({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-2",$$slots:{default:[hT]},$$scope:{ctx:q}}}),an=new Ve({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-3",$$slots:{default:[uT]},$$scope:{ctx:q}}}),rn=new Ve({props:{anchor:"transformers.CamembertForSequenceClassification.forward.example-4",$$slots:{default:[fT]},$$scope:{ctx:q}}}),Qs=new Ze({}),Vs=new ae({props:{name:"class transformers.CamembertForMultipleChoice",anchor:"transformers.CamembertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1137"}}),Ys=new ae({props:{name:"forward",anchor:"transformers.CamembertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1150",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),dn=new Ye({props:{$$slots:{default:[gT]},$$scope:{ctx:q}}}),cn=new Ve({props:{anchor:"transformers.CamembertForMultipleChoice.forward.example",$$slots:{default:[_T]},$$scope:{ctx:q}}}),Zs=new Ze({}),ea=new ae({props:{name:"class transformers.CamembertForTokenClassification",anchor:"transformers.CamembertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1233"}}),sa=new ae({props:{name:"forward",anchor:"transformers.CamembertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1251",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),pn=new Ye({props:{$$slots:{default:[bT]},$$scope:{ctx:q}}}),hn=new Ve({props:{anchor:"transformers.CamembertForTokenClassification.forward.example",$$slots:{default:[kT]},$$scope:{ctx:q}}}),un=new Ve({props:{anchor:"transformers.CamembertForTokenClassification.forward.example-2",$$slots:{default:[yT]},$$scope:{ctx:q}}}),aa=new Ze({}),ra=new ae({props:{name:"class transformers.CamembertForQuestionAnswering",anchor:"transformers.CamembertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1321"}}),ca=new ae({props:{name:"forward",anchor:"transformers.CamembertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.CamembertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.CamembertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.CamembertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.CamembertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.CamembertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.CamembertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_camembert.py#L1335",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),_n=new Ye({props:{$$slots:{default:[TT]},$$scope:{ctx:q}}}),bn=new Ve({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example",$$slots:{default:[wT]},$$scope:{ctx:q}}}),kn=new Ve({props:{anchor:"transformers.CamembertForQuestionAnswering.forward.example-2",$$slots:{default:[vT]},$$scope:{ctx:q}}}),ma=new Ze({}),pa=new ae({props:{name:"class transformers.TFCamembertModel",anchor:"transformers.TFCamembertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L923"}}),Tn=new Ye({props:{$$slots:{default:[$T]},$$scope:{ctx:q}}}),ga=new ae({props:{name:"call",anchor:"transformers.TFCamembertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L928",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wn=new Ye({props:{$$slots:{default:[CT]},$$scope:{ctx:q}}}),vn=new Ve({props:{anchor:"transformers.TFCamembertModel.call.example",$$slots:{default:[FT]},$$scope:{ctx:q}}}),_a=new Ze({}),ba=new ae({props:{name:"class transformers.TFCamembertForCausalLM",anchor:"transformers.TFCamembertForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1594"}}),Cn=new Ye({props:{$$slots:{default:[ET]},$$scope:{ctx:q}}}),va=new ae({props:{name:"call",anchor:"transformers.TFCamembertForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFCamembertForCausalLM.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFCamembertForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFCamembertForCausalLM.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"},{anchor:"transformers.TFCamembertForCausalLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fn=new Ye({props:{$$slots:{default:[MT]},$$scope:{ctx:q}}}),En=new Ve({props:{anchor:"transformers.TFCamembertForCausalLM.call.example",$$slots:{default:[zT]},$$scope:{ctx:q}}}),$a=new Ze({}),Ca=new ae({props:{name:"class transformers.TFCamembertForMaskedLM",anchor:"transformers.TFCamembertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1072"}}),zn=new Ye({props:{$$slots:{default:[qT]},$$scope:{ctx:q}}}),qa=new ae({props:{name:"call",anchor:"transformers.TFCamembertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1089",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),qn=new Ye({props:{$$slots:{default:[xT]},$$scope:{ctx:q}}}),xn=new Ve({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example",$$slots:{default:[jT]},$$scope:{ctx:q}}}),jn=new Ve({props:{anchor:"transformers.TFCamembertForMaskedLM.call.example-2",$$slots:{default:[PT]},$$scope:{ctx:q}}}),xa=new Ze({}),ja=new ae({props:{name:"class transformers.TFCamembertForSequenceClassification",anchor:"transformers.TFCamembertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1194"}}),Ln=new Ye({props:{$$slots:{default:[LT]},$$scope:{ctx:q}}}),Na=new ae({props:{name:"call",anchor:"transformers.TFCamembertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1205",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),On=new Ye({props:{$$slots:{default:[OT]},$$scope:{ctx:q}}}),Nn=new Ve({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example",$$slots:{default:[NT]},$$scope:{ctx:q}}}),An=new Ve({props:{anchor:"transformers.TFCamembertForSequenceClassification.call.example-2",$$slots:{default:[AT]},$$scope:{ctx:q}}}),Aa=new Ze({}),Da=new ae({props:{name:"class transformers.TFCamembertForMultipleChoice",anchor:"transformers.TFCamembertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1371"}}),In=new Ye({props:{$$slots:{default:[DT]},$$scope:{ctx:q}}}),Wa=new ae({props:{name:"call",anchor:"transformers.TFCamembertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1395",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Sn=new Ye({props:{$$slots:{default:[IT]},$$scope:{ctx:q}}}),Bn=new Ve({props:{anchor:"transformers.TFCamembertForMultipleChoice.call.example",$$slots:{default:[ST]},$$scope:{ctx:q}}}),Ra=new Ze({}),Ua=new ae({props:{name:"class transformers.TFCamembertForTokenClassification",anchor:"transformers.TFCamembertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1279"}}),Rn=new Ye({props:{$$slots:{default:[BT]},$$scope:{ctx:q}}}),Va=new ae({props:{name:"call",anchor:"transformers.TFCamembertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1297",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Un=new Ye({props:{$$slots:{default:[WT]},$$scope:{ctx:q}}}),Kn=new Ve({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example",$$slots:{default:[RT]},$$scope:{ctx:q}}}),Hn=new Ve({props:{anchor:"transformers.TFCamembertForTokenClassification.call.example-2",$$slots:{default:[UT]},$$scope:{ctx:q}}}),Ja=new Ze({}),Ga=new ae({props:{name:"class transformers.TFCamembertForQuestionAnswering",anchor:"transformers.TFCamembertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig">CamembertConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1495"}}),Vn=new Ye({props:{$$slots:{default:[KT]},$$scope:{ctx:q}}}),er=new ae({props:{name:"call",anchor:"transformers.TFCamembertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFCamembertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertTokenizer">CamembertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFCamembertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/camembert/modeling_tf_camembert.py#L1508",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/camembert#transformers.CamembertConfig"
>CamembertConfig</a>) and inputs.</p>
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
`}}),Jn=new Ye({props:{$$slots:{default:[HT]},$$scope:{ctx:q}}}),Gn=new Ve({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example",$$slots:{default:[QT]},$$scope:{ctx:q}}}),Xn=new Ve({props:{anchor:"transformers.TFCamembertForQuestionAnswering.call.example-2",$$slots:{default:[VT]},$$scope:{ctx:q}}}),{c(){l=a("meta"),_=p(),c=a("h1"),u=a("a"),y=a("span"),w(d.$$.fragment),m=p(),x=a("span"),Te=o("CamemBERT"),he=p(),I=a("h2"),re=a("a"),ee=a("span"),w(T.$$.fragment),we=p(),Q=a("span"),ve=o("Overview"),ue=p(),B=a("p"),$e=o("The CamemBERT model was proposed in "),le=a("a"),V=o("CamemBERT: a Tasty French Language Model"),Ce=o(` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),fe=p(),R=a("p"),Fe=o("The abstract from the paper is the following:"),ge=p(),U=a("p"),pe=a("em"),Ee=o(`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),ne=p(),j=a("p"),O=o("Tips:"),_e=p(),K=a("ul"),de=a("li"),Me=o("This implementation is the same as RoBERTa. Refer to the "),H=a("a"),ze=o("documentation of RoBERTa"),qe=o(` for usage examples
as well as the information relative to the inputs and outputs.`),L=p(),se=a("p"),J=o("This model was contributed by "),ce=a("a"),xe=o("camembert"),G=o(". The original code can be found "),me=a("a"),je=o("here"),D=o("."),be=p(),S=a("h2"),ie=a("a"),te=a("span"),w(P.$$.fragment),Pe=p(),N=a("span"),Le=o("CamembertConfig"),ke=p(),f=a("div"),w(M.$$.fragment),Be=p(),Y=a("p"),We=o("This class overrides "),Ae=a("a"),z=o("RobertaConfig"),Re=o(`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
Camembert `),Oe=a("a"),Ue=o("camembert-base"),Ke=o(" architecture."),Se=p(),A=a("h2"),W=a("a"),De=a("span"),w(Ne.$$.fragment),X=p(),Ie=a("span"),He=o("CamembertTokenizer"),ye=p(),oe=a("div"),w(Z.$$.fragment),Qe=p(),Bt=a("p"),Kc=o("Adapted from "),cr=a("a"),Hc=o("RobertaTokenizer"),Qc=o(" and "),mr=a("a"),Vc=o("XLNetTokenizer"),Jc=o(`. Construct a CamemBERT tokenizer. Based on
`),ss=a("a"),Gc=o("SentencePiece"),Xc=o("."),Yc=p(),as=a("p"),Zc=o("This tokenizer inherits from "),pr=a("a"),em=o("PreTrainedTokenizer"),tm=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),om=p(),Rt=a("div"),w(rs.$$.fragment),nm=p(),hi=a("p"),sm=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),am=p(),is=a("ul"),hr=a("li"),rm=o("single sequence: "),ui=a("code"),im=o("<s> X </s>"),lm=p(),ur=a("li"),dm=o("pair of sequences: "),fi=a("code"),cm=o("<s> A </s></s> B </s>"),mm=p(),So=a("div"),w(ls.$$.fragment),pm=p(),ds=a("p"),hm=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gi=a("code"),um=o("prepare_for_model"),fm=o(" method."),gm=p(),Bo=a("div"),w(cs.$$.fragment),_m=p(),_i=a("p"),bm=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),km=p(),fr=a("div"),w(ms.$$.fragment),ud=p(),ro=a("h2"),Wo=a("a"),bi=a("span"),w(ps.$$.fragment),ym=p(),ki=a("span"),Tm=o("CamembertTokenizerFast"),fd=p(),mt=a("div"),w(hs.$$.fragment),wm=p(),Et=a("p"),vm=o("Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),yi=a("em"),$m=o("tokenizers"),Cm=o(` library). Adapted from
`),gr=a("a"),Fm=o("RobertaTokenizer"),Em=o(" and "),_r=a("a"),Mm=o("XLNetTokenizer"),zm=o(`. Based on
`),us=a("a"),qm=o("BPE"),xm=o("."),jm=p(),fs=a("p"),Pm=o("This tokenizer inherits from "),br=a("a"),Lm=o("PreTrainedTokenizerFast"),Om=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Nm=p(),Ut=a("div"),w(gs.$$.fragment),Am=p(),Ti=a("p"),Dm=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),Im=p(),_s=a("ul"),kr=a("li"),Sm=o("single sequence: "),wi=a("code"),Bm=o("<s> X </s>"),Wm=p(),yr=a("li"),Rm=o("pair of sequences: "),vi=a("code"),Um=o("<s> A </s></s> B </s>"),Km=p(),Ro=a("div"),w(bs.$$.fragment),Hm=p(),$i=a("p"),Qm=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),gd=p(),io=a("h2"),Uo=a("a"),Ci=a("span"),w(ks.$$.fragment),Vm=p(),Fi=a("span"),Jm=o("CamembertModel"),_d=p(),Xe=a("div"),w(ys.$$.fragment),Gm=p(),Ei=a("p"),Xm=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),Ym=p(),Ts=a("p"),Zm=o("This model inherits from "),Tr=a("a"),ep=o("PreTrainedModel"),tp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),op=p(),ws=a("p"),np=o("This model is also a PyTorch "),vs=a("a"),sp=o("torch.nn.Module"),ap=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rp=p(),$s=a("p"),ip=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=a("em"),lp=o(`Attention is
all you need`),dp=o(`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),cp=p(),tt=a("p"),mp=o("To behave as a decoder the model needs to be initialized with the "),zi=a("code"),pp=o("is_decoder"),hp=o(` argument of the configuration set to
`),qi=a("code"),up=o("True"),fp=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),xi=a("code"),gp=o("is_decoder"),_p=o(` argument and
`),ji=a("code"),bp=o("add_cross_attention"),kp=o(" set to "),Pi=a("code"),yp=o("True"),Tp=o("; an "),Li=a("code"),wp=o("encoder_hidden_states"),vp=o(" is then expected as an input to the forward pass."),$p=p(),Ko=a("p"),Cp=o(".. _"),Oi=a("em"),Fp=o("Attention is all you need"),Ep=o(": "),Cs=a("a"),Mp=o("https://arxiv.org/abs/1706.03762"),zp=p(),Mt=a("div"),w(Fs.$$.fragment),qp=p(),lo=a("p"),xp=o("The "),wr=a("a"),jp=o("CamembertModel"),Pp=o(" forward method, overrides the "),Ni=a("code"),Lp=o("__call__"),Op=o(" special method."),Np=p(),w(Ho.$$.fragment),Ap=p(),w(Qo.$$.fragment),bd=p(),co=a("h2"),Vo=a("a"),Ai=a("span"),w(Es.$$.fragment),Dp=p(),Di=a("span"),Ip=o("CamembertForCausalLM"),kd=p(),pt=a("div"),w(Ms.$$.fragment),Sp=p(),zs=a("p"),Bp=o("CamemBERT Model with a "),Ii=a("code"),Wp=o("language modeling"),Rp=o(" head on top for CLM fine-tuning."),Up=p(),qs=a("p"),Kp=o("This model inherits from "),vr=a("a"),Hp=o("PreTrainedModel"),Qp=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vp=p(),xs=a("p"),Jp=o("This model is also a PyTorch "),js=a("a"),Gp=o("torch.nn.Module"),Xp=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yp=p(),zt=a("div"),w(Ps.$$.fragment),Zp=p(),mo=a("p"),eh=o("The "),$r=a("a"),th=o("CamembertForCausalLM"),oh=o(" forward method, overrides the "),Si=a("code"),nh=o("__call__"),sh=o(" special method."),ah=p(),w(Jo.$$.fragment),rh=p(),w(Go.$$.fragment),yd=p(),po=a("h2"),Xo=a("a"),Bi=a("span"),w(Ls.$$.fragment),ih=p(),Wi=a("span"),lh=o("CamembertForMaskedLM"),Td=p(),ht=a("div"),w(Os.$$.fragment),dh=p(),Ns=a("p"),ch=o("CamemBERT Model with a "),Ri=a("code"),mh=o("language modeling"),ph=o(" head on top."),hh=p(),As=a("p"),uh=o("This model inherits from "),Cr=a("a"),fh=o("PreTrainedModel"),gh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=p(),Ds=a("p"),bh=o("This model is also a PyTorch "),Is=a("a"),kh=o("torch.nn.Module"),yh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Th=p(),bt=a("div"),w(Ss.$$.fragment),wh=p(),ho=a("p"),vh=o("The "),Fr=a("a"),$h=o("CamembertForMaskedLM"),Ch=o(" forward method, overrides the "),Ui=a("code"),Fh=o("__call__"),Eh=o(" special method."),Mh=p(),w(Yo.$$.fragment),zh=p(),w(Zo.$$.fragment),qh=p(),w(en.$$.fragment),wd=p(),uo=a("h2"),tn=a("a"),Ki=a("span"),w(Bs.$$.fragment),xh=p(),Hi=a("span"),jh=o("CamembertForSequenceClassification"),vd=p(),ut=a("div"),w(Ws.$$.fragment),Ph=p(),Qi=a("p"),Lh=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Oh=p(),Rs=a("p"),Nh=o("This model inherits from "),Er=a("a"),Ah=o("PreTrainedModel"),Dh=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ih=p(),Us=a("p"),Sh=o("This model is also a PyTorch "),Ks=a("a"),Bh=o("torch.nn.Module"),Wh=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rh=p(),et=a("div"),w(Hs.$$.fragment),Uh=p(),fo=a("p"),Kh=o("The "),Mr=a("a"),Hh=o("CamembertForSequenceClassification"),Qh=o(" forward method, overrides the "),Vi=a("code"),Vh=o("__call__"),Jh=o(" special method."),Gh=p(),w(on.$$.fragment),Xh=p(),w(nn.$$.fragment),Yh=p(),w(sn.$$.fragment),Zh=p(),w(an.$$.fragment),eu=p(),w(rn.$$.fragment),$d=p(),go=a("h2"),ln=a("a"),Ji=a("span"),w(Qs.$$.fragment),tu=p(),Gi=a("span"),ou=o("CamembertForMultipleChoice"),Cd=p(),ft=a("div"),w(Vs.$$.fragment),nu=p(),Xi=a("p"),su=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),au=p(),Js=a("p"),ru=o("This model inherits from "),zr=a("a"),iu=o("PreTrainedModel"),lu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du=p(),Gs=a("p"),cu=o("This model is also a PyTorch "),Xs=a("a"),mu=o("torch.nn.Module"),pu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu=p(),qt=a("div"),w(Ys.$$.fragment),uu=p(),_o=a("p"),fu=o("The "),qr=a("a"),gu=o("CamembertForMultipleChoice"),_u=o(" forward method, overrides the "),Yi=a("code"),bu=o("__call__"),ku=o(" special method."),yu=p(),w(dn.$$.fragment),Tu=p(),w(cn.$$.fragment),Fd=p(),bo=a("h2"),mn=a("a"),Zi=a("span"),w(Zs.$$.fragment),wu=p(),el=a("span"),vu=o("CamembertForTokenClassification"),Ed=p(),gt=a("div"),w(ea.$$.fragment),$u=p(),tl=a("p"),Cu=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Fu=p(),ta=a("p"),Eu=o("This model inherits from "),xr=a("a"),Mu=o("PreTrainedModel"),zu=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qu=p(),oa=a("p"),xu=o("This model is also a PyTorch "),na=a("a"),ju=o("torch.nn.Module"),Pu=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lu=p(),kt=a("div"),w(sa.$$.fragment),Ou=p(),ko=a("p"),Nu=o("The "),jr=a("a"),Au=o("CamembertForTokenClassification"),Du=o(" forward method, overrides the "),ol=a("code"),Iu=o("__call__"),Su=o(" special method."),Bu=p(),w(pn.$$.fragment),Wu=p(),w(hn.$$.fragment),Ru=p(),w(un.$$.fragment),Md=p(),yo=a("h2"),fn=a("a"),nl=a("span"),w(aa.$$.fragment),Uu=p(),sl=a("span"),Ku=o("CamembertForQuestionAnswering"),zd=p(),_t=a("div"),w(ra.$$.fragment),Hu=p(),gn=a("p"),Qu=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),al=a("code"),Vu=o("span start logits"),Ju=o(" and "),rl=a("code"),Gu=o("span end logits"),Xu=p(),ia=a("p"),Yu=o("This model inherits from "),Pr=a("a"),Zu=o("PreTrainedModel"),ef=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf=p(),la=a("p"),of=o("This model is also a PyTorch "),da=a("a"),nf=o("torch.nn.Module"),sf=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),af=p(),yt=a("div"),w(ca.$$.fragment),rf=p(),To=a("p"),lf=o("The "),Lr=a("a"),df=o("CamembertForQuestionAnswering"),cf=o(" forward method, overrides the "),il=a("code"),mf=o("__call__"),pf=o(" special method."),hf=p(),w(_n.$$.fragment),uf=p(),w(bn.$$.fragment),ff=p(),w(kn.$$.fragment),qd=p(),wo=a("h2"),yn=a("a"),ll=a("span"),w(ma.$$.fragment),gf=p(),dl=a("span"),_f=o("TFCamembertModel"),xd=p(),ot=a("div"),w(pa.$$.fragment),bf=p(),cl=a("p"),kf=o("The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),yf=p(),ha=a("p"),Tf=o("This model inherits from "),Or=a("a"),wf=o("TFPreTrainedModel"),vf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=p(),ua=a("p"),Cf=o("This model is also a "),fa=a("a"),Ff=o("tf.keras.Model"),Ef=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mf=p(),w(Tn.$$.fragment),zf=p(),xt=a("div"),w(ga.$$.fragment),qf=p(),vo=a("p"),xf=o("The "),Nr=a("a"),jf=o("TFCamembertModel"),Pf=o(" forward method, overrides the "),ml=a("code"),Lf=o("__call__"),Of=o(" special method."),Nf=p(),w(wn.$$.fragment),Af=p(),w(vn.$$.fragment),jd=p(),$o=a("h2"),$n=a("a"),pl=a("span"),w(_a.$$.fragment),Df=p(),hl=a("span"),If=o("TFCamembertForCasualLM"),Pd=p(),nt=a("div"),w(ba.$$.fragment),Sf=p(),ka=a("p"),Bf=o("CamemBERT Model with a "),ul=a("code"),Wf=o("language modeling"),Rf=o(" head on top for CLM fine-tuning."),Uf=p(),ya=a("p"),Kf=o("This model inherits from "),Ar=a("a"),Hf=o("TFPreTrainedModel"),Qf=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vf=p(),Ta=a("p"),Jf=o("This model is also a "),wa=a("a"),Gf=o("tf.keras.Model"),Xf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yf=p(),w(Cn.$$.fragment),Zf=p(),jt=a("div"),w(va.$$.fragment),eg=p(),Co=a("p"),tg=o("The "),Dr=a("a"),og=o("TFCamembertForCausalLM"),ng=o(" forward method, overrides the "),fl=a("code"),sg=o("__call__"),ag=o(" special method."),rg=p(),w(Fn.$$.fragment),ig=p(),w(En.$$.fragment),Ld=p(),Fo=a("h2"),Mn=a("a"),gl=a("span"),w($a.$$.fragment),lg=p(),_l=a("span"),dg=o("TFCamembertForMaskedLM"),Od=p(),st=a("div"),w(Ca.$$.fragment),cg=p(),Fa=a("p"),mg=o("CamemBERT Model with a "),bl=a("code"),pg=o("language modeling"),hg=o(" head on top."),ug=p(),Ea=a("p"),fg=o("This model inherits from "),Ir=a("a"),gg=o("TFPreTrainedModel"),_g=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bg=p(),Ma=a("p"),kg=o("This model is also a "),za=a("a"),yg=o("tf.keras.Model"),Tg=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),wg=p(),w(zn.$$.fragment),vg=p(),Tt=a("div"),w(qa.$$.fragment),$g=p(),Eo=a("p"),Cg=o("The "),Sr=a("a"),Fg=o("TFCamembertForMaskedLM"),Eg=o(" forward method, overrides the "),kl=a("code"),Mg=o("__call__"),zg=o(" special method."),qg=p(),w(qn.$$.fragment),xg=p(),w(xn.$$.fragment),jg=p(),w(jn.$$.fragment),Nd=p(),Mo=a("h2"),Pn=a("a"),yl=a("span"),w(xa.$$.fragment),Pg=p(),Tl=a("span"),Lg=o("TFCamembertForSequenceClassification"),Ad=p(),at=a("div"),w(ja.$$.fragment),Og=p(),wl=a("p"),Ng=o(`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ag=p(),Pa=a("p"),Dg=o("This model inherits from "),Br=a("a"),Ig=o("TFPreTrainedModel"),Sg=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bg=p(),La=a("p"),Wg=o("This model is also a "),Oa=a("a"),Rg=o("tf.keras.Model"),Ug=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kg=p(),w(Ln.$$.fragment),Hg=p(),wt=a("div"),w(Na.$$.fragment),Qg=p(),zo=a("p"),Vg=o("The "),Wr=a("a"),Jg=o("TFCamembertForSequenceClassification"),Gg=o(" forward method, overrides the "),vl=a("code"),Xg=o("__call__"),Yg=o(" special method."),Zg=p(),w(On.$$.fragment),e_=p(),w(Nn.$$.fragment),t_=p(),w(An.$$.fragment),Dd=p(),qo=a("h2"),Dn=a("a"),$l=a("span"),w(Aa.$$.fragment),o_=p(),Cl=a("span"),n_=o("TFCamembertForMultipleChoice"),Id=p(),rt=a("div"),w(Da.$$.fragment),s_=p(),Fl=a("p"),a_=o(`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r_=p(),Ia=a("p"),i_=o("This model inherits from "),Rr=a("a"),l_=o("TFPreTrainedModel"),d_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c_=p(),Sa=a("p"),m_=o("This model is also a "),Ba=a("a"),p_=o("tf.keras.Model"),h_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),u_=p(),w(In.$$.fragment),f_=p(),Pt=a("div"),w(Wa.$$.fragment),g_=p(),xo=a("p"),__=o("The "),Ur=a("a"),b_=o("TFCamembertForMultipleChoice"),k_=o(" forward method, overrides the "),El=a("code"),y_=o("__call__"),T_=o(" special method."),w_=p(),w(Sn.$$.fragment),v_=p(),w(Bn.$$.fragment),Sd=p(),jo=a("h2"),Wn=a("a"),Ml=a("span"),w(Ra.$$.fragment),$_=p(),zl=a("span"),C_=o("TFCamembertForTokenClassification"),Bd=p(),it=a("div"),w(Ua.$$.fragment),F_=p(),ql=a("p"),E_=o(`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),M_=p(),Ka=a("p"),z_=o("This model inherits from "),Kr=a("a"),q_=o("TFPreTrainedModel"),x_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),j_=p(),Ha=a("p"),P_=o("This model is also a "),Qa=a("a"),L_=o("tf.keras.Model"),O_=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),N_=p(),w(Rn.$$.fragment),A_=p(),vt=a("div"),w(Va.$$.fragment),D_=p(),Po=a("p"),I_=o("The "),Hr=a("a"),S_=o("TFCamembertForTokenClassification"),B_=o(" forward method, overrides the "),xl=a("code"),W_=o("__call__"),R_=o(" special method."),U_=p(),w(Un.$$.fragment),K_=p(),w(Kn.$$.fragment),H_=p(),w(Hn.$$.fragment),Wd=p(),Lo=a("h2"),Qn=a("a"),jl=a("span"),w(Ja.$$.fragment),Q_=p(),Pl=a("span"),V_=o("TFCamembertForQuestionAnswering"),Rd=p(),lt=a("div"),w(Ga.$$.fragment),J_=p(),Oo=a("p"),G_=o(`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ll=a("code"),X_=o("span start logits"),Y_=o(" and "),Ol=a("code"),Z_=o("span end logits"),eb=o(")."),tb=p(),Xa=a("p"),ob=o("This model inherits from "),Qr=a("a"),nb=o("TFPreTrainedModel"),sb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ab=p(),Ya=a("p"),rb=o("This model is also a "),Za=a("a"),ib=o("tf.keras.Model"),lb=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),db=p(),w(Vn.$$.fragment),cb=p(),$t=a("div"),w(er.$$.fragment),mb=p(),No=a("p"),pb=o("The "),Vr=a("a"),hb=o("TFCamembertForQuestionAnswering"),ub=o(" forward method, overrides the "),Nl=a("code"),fb=o("__call__"),gb=o(" special method."),_b=p(),w(Jn.$$.fragment),bb=p(),w(Gn.$$.fragment),kb=p(),w(Xn.$$.fragment),this.h()},l(s){const k=oT('[data-svelte="svelte-1phssyn"]',document.head);l=r(k,"META",{name:!0,content:!0}),k.forEach(t),_=h(s),c=r(s,"H1",{class:!0});var tr=i(c);u=r(tr,"A",{id:!0,class:!0,href:!0});var Al=i(u);y=r(Al,"SPAN",{});var Dl=i(y);v(d.$$.fragment,Dl),Dl.forEach(t),Al.forEach(t),m=h(tr),x=r(tr,"SPAN",{});var Il=i(x);Te=n(Il,"CamemBERT"),Il.forEach(t),tr.forEach(t),he=h(s),I=r(s,"H2",{class:!0});var or=i(I);re=r(or,"A",{id:!0,class:!0,href:!0});var Sl=i(re);ee=r(Sl,"SPAN",{});var Bl=i(ee);v(T.$$.fragment,Bl),Bl.forEach(t),Sl.forEach(t),we=h(or),Q=r(or,"SPAN",{});var Wl=i(Q);ve=n(Wl,"Overview"),Wl.forEach(t),or.forEach(t),ue=h(s),B=r(s,"P",{});var nr=i(B);$e=n(nr,"The CamemBERT model was proposed in "),le=r(nr,"A",{href:!0,rel:!0});var Rl=i(le);V=n(Rl,"CamemBERT: a Tasty French Language Model"),Rl.forEach(t),Ce=n(nr,` by
Louis Martin, Benjamin Muller, Pedro Javier Ortiz Su\xE1rez, Yoann Dupont, Laurent Romary, \xC9ric Villemonte de la
Clergerie, Djam\xE9 Seddah, and Beno\xEEt Sagot. It is based on Facebook\u2019s RoBERTa model released in 2019. It is a model
trained on 138GB of French text.`),nr.forEach(t),fe=h(s),R=r(s,"P",{});var Ul=i(R);Fe=n(Ul,"The abstract from the paper is the following:"),Ul.forEach(t),ge=h(s),U=r(s,"P",{});var Kl=i(U);pe=r(Kl,"EM",{});var Hl=i(pe);Ee=n(Hl,`Pretrained language models are now ubiquitous in Natural Language Processing. Despite their success, most available
models have either been trained on English data or on the concatenation of data in multiple languages. This makes
practical use of such models \u2014in all languages except English\u2014 very limited. Aiming to address this issue for French,
we release CamemBERT, a French version of the Bi-directional Encoders for Transformers (BERT). We measure the
performance of CamemBERT compared to multilingual models in multiple downstream tasks, namely part-of-speech tagging,
dependency parsing, named-entity recognition, and natural language inference. CamemBERT improves the state of the art
for most of the tasks considered. We release the pretrained model for CamemBERT hoping to foster research and
downstream applications for French NLP.`),Hl.forEach(t),Kl.forEach(t),ne=h(s),j=r(s,"P",{});var Ql=i(j);O=n(Ql,"Tips:"),Ql.forEach(t),_e=h(s),K=r(s,"UL",{});var Vl=i(K);de=r(Vl,"LI",{});var sr=i(de);Me=n(sr,"This implementation is the same as RoBERTa. Refer to the "),H=r(sr,"A",{href:!0});var Jl=i(H);ze=n(Jl,"documentation of RoBERTa"),Jl.forEach(t),qe=n(sr,` for usage examples
as well as the information relative to the inputs and outputs.`),sr.forEach(t),Vl.forEach(t),L=h(s),se=r(s,"P",{});var Ao=i(se);J=n(Ao,"This model was contributed by "),ce=r(Ao,"A",{href:!0,rel:!0});var Gl=i(ce);xe=n(Gl,"camembert"),Gl.forEach(t),G=n(Ao,". The original code can be found "),me=r(Ao,"A",{href:!0,rel:!0});var Xl=i(me);je=n(Xl,"here"),Xl.forEach(t),D=n(Ao,"."),Ao.forEach(t),be=h(s),S=r(s,"H2",{class:!0});var ar=i(S);ie=r(ar,"A",{id:!0,class:!0,href:!0});var Yl=i(ie);te=r(Yl,"SPAN",{});var Zl=i(te);v(P.$$.fragment,Zl),Zl.forEach(t),Yl.forEach(t),Pe=h(ar),N=r(ar,"SPAN",{});var ed=i(N);Le=n(ed,"CamembertConfig"),ed.forEach(t),ar.forEach(t),ke=h(s),f=r(s,"DIV",{class:!0});var rr=i(f);v(M.$$.fragment,rr),Be=h(rr),Y=r(rr,"P",{});var Do=i(Y);We=n(Do,"This class overrides "),Ae=r(Do,"A",{href:!0});var td=i(Ae);z=n(td,"RobertaConfig"),td.forEach(t),Re=n(Do,`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
Camembert `),Oe=r(Do,"A",{href:!0,rel:!0});var od=i(Oe);Ue=n(od,"camembert-base"),od.forEach(t),Ke=n(Do," architecture."),Do.forEach(t),rr.forEach(t),Se=h(s),A=r(s,"H2",{class:!0});var ir=i(A);W=r(ir,"A",{id:!0,class:!0,href:!0});var nd=i(W);De=r(nd,"SPAN",{});var sd=i(De);v(Ne.$$.fragment,sd),sd.forEach(t),nd.forEach(t),X=h(ir),Ie=r(ir,"SPAN",{});var ad=i(Ie);He=n(ad,"CamembertTokenizer"),ad.forEach(t),ir.forEach(t),ye=h(s),oe=r(s,"DIV",{class:!0});var dt=i(oe);v(Z.$$.fragment,dt),Qe=h(dt),Bt=r(dt,"P",{});var Wt=i(Bt);Kc=n(Wt,"Adapted from "),cr=r(Wt,"A",{href:!0});var rd=i(cr);Hc=n(rd,"RobertaTokenizer"),rd.forEach(t),Qc=n(Wt," and "),mr=r(Wt,"A",{href:!0});var id=i(mr);Vc=n(id,"XLNetTokenizer"),id.forEach(t),Jc=n(Wt,`. Construct a CamemBERT tokenizer. Based on
`),ss=r(Wt,"A",{href:!0,rel:!0});var ld=i(ss);Gc=n(ld,"SentencePiece"),ld.forEach(t),Xc=n(Wt,"."),Wt.forEach(t),Yc=h(dt),as=r(dt,"P",{});var lr=i(as);Zc=n(lr,"This tokenizer inherits from "),pr=r(lr,"A",{href:!0});var dd=i(pr);em=n(dd,"PreTrainedTokenizer"),dd.forEach(t),tm=n(lr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),lr.forEach(t),om=h(dt),Rt=r(dt,"DIV",{class:!0});var Io=i(Rt);v(rs.$$.fragment,Io),nm=h(Io),hi=r(Io,"P",{});var cd=i(hi);sm=n(cd,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),cd.forEach(t),am=h(Io),is=r(Io,"UL",{});var dr=i(is);hr=r(dr,"LI",{});var Jr=i(hr);rm=n(Jr,"single sequence: "),ui=r(Jr,"CODE",{});var md=i(ui);im=n(md,"<s> X </s>"),md.forEach(t),Jr.forEach(t),lm=h(dr),ur=r(dr,"LI",{});var Gr=i(ur);dm=n(Gr,"pair of sequences: "),fi=r(Gr,"CODE",{});var wb=i(fi);cm=n(wb,"<s> A </s></s> B </s>"),wb.forEach(t),Gr.forEach(t),dr.forEach(t),Io.forEach(t),mm=h(dt),So=r(dt,"DIV",{class:!0});var Kd=i(So);v(ls.$$.fragment,Kd),pm=h(Kd),ds=r(Kd,"P",{});var Hd=i(ds);hm=n(Hd,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gi=r(Hd,"CODE",{});var vb=i(gi);um=n(vb,"prepare_for_model"),vb.forEach(t),fm=n(Hd," method."),Hd.forEach(t),Kd.forEach(t),gm=h(dt),Bo=r(dt,"DIV",{class:!0});var Qd=i(Bo);v(cs.$$.fragment,Qd),_m=h(Qd),_i=r(Qd,"P",{});var $b=i(_i);bm=n($b,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),$b.forEach(t),Qd.forEach(t),km=h(dt),fr=r(dt,"DIV",{class:!0});var Cb=i(fr);v(ms.$$.fragment,Cb),Cb.forEach(t),dt.forEach(t),ud=h(s),ro=r(s,"H2",{class:!0});var Vd=i(ro);Wo=r(Vd,"A",{id:!0,class:!0,href:!0});var Fb=i(Wo);bi=r(Fb,"SPAN",{});var Eb=i(bi);v(ps.$$.fragment,Eb),Eb.forEach(t),Fb.forEach(t),ym=h(Vd),ki=r(Vd,"SPAN",{});var Mb=i(ki);Tm=n(Mb,"CamembertTokenizerFast"),Mb.forEach(t),Vd.forEach(t),fd=h(s),mt=r(s,"DIV",{class:!0});var Kt=i(mt);v(hs.$$.fragment,Kt),wm=h(Kt),Et=r(Kt,"P",{});var Ht=i(Et);vm=n(Ht,"Construct a \u201Cfast\u201D CamemBERT tokenizer (backed by HuggingFace\u2019s "),yi=r(Ht,"EM",{});var zb=i(yi);$m=n(zb,"tokenizers"),zb.forEach(t),Cm=n(Ht,` library). Adapted from
`),gr=r(Ht,"A",{href:!0});var qb=i(gr);Fm=n(qb,"RobertaTokenizer"),qb.forEach(t),Em=n(Ht," and "),_r=r(Ht,"A",{href:!0});var xb=i(_r);Mm=n(xb,"XLNetTokenizer"),xb.forEach(t),zm=n(Ht,`. Based on
`),us=r(Ht,"A",{href:!0,rel:!0});var jb=i(us);qm=n(jb,"BPE"),jb.forEach(t),xm=n(Ht,"."),Ht.forEach(t),jm=h(Kt),fs=r(Kt,"P",{});var Jd=i(fs);Pm=n(Jd,"This tokenizer inherits from "),br=r(Jd,"A",{href:!0});var Pb=i(br);Lm=n(Pb,"PreTrainedTokenizerFast"),Pb.forEach(t),Om=n(Jd,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Jd.forEach(t),Nm=h(Kt),Ut=r(Kt,"DIV",{class:!0});var Xr=i(Ut);v(gs.$$.fragment,Xr),Am=h(Xr),Ti=r(Xr,"P",{});var Lb=i(Ti);Dm=n(Lb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An CamemBERT sequence has the following format:`),Lb.forEach(t),Im=h(Xr),_s=r(Xr,"UL",{});var Gd=i(_s);kr=r(Gd,"LI",{});var yb=i(kr);Sm=n(yb,"single sequence: "),wi=r(yb,"CODE",{});var Ob=i(wi);Bm=n(Ob,"<s> X </s>"),Ob.forEach(t),yb.forEach(t),Wm=h(Gd),yr=r(Gd,"LI",{});var Tb=i(yr);Rm=n(Tb,"pair of sequences: "),vi=r(Tb,"CODE",{});var Nb=i(vi);Um=n(Nb,"<s> A </s></s> B </s>"),Nb.forEach(t),Tb.forEach(t),Gd.forEach(t),Xr.forEach(t),Km=h(Kt),Ro=r(Kt,"DIV",{class:!0});var Xd=i(Ro);v(bs.$$.fragment,Xd),Hm=h(Xd),$i=r(Xd,"P",{});var Ab=i($i);Qm=n(Ab,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. CamemBERT, like
RoBERTa, does not make use of token type ids, therefore a list of zeros is returned.`),Ab.forEach(t),Xd.forEach(t),Kt.forEach(t),gd=h(s),io=r(s,"H2",{class:!0});var Yd=i(io);Uo=r(Yd,"A",{id:!0,class:!0,href:!0});var Db=i(Uo);Ci=r(Db,"SPAN",{});var Ib=i(Ci);v(ks.$$.fragment,Ib),Ib.forEach(t),Db.forEach(t),Vm=h(Yd),Fi=r(Yd,"SPAN",{});var Sb=i(Fi);Jm=n(Sb,"CamembertModel"),Sb.forEach(t),Yd.forEach(t),_d=h(s),Xe=r(s,"DIV",{class:!0});var ct=i(Xe);v(ys.$$.fragment,ct),Gm=h(ct),Ei=r(ct,"P",{});var Bb=i(Ei);Xm=n(Bb,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),Bb.forEach(t),Ym=h(ct),Ts=r(ct,"P",{});var Zd=i(Ts);Zm=n(Zd,"This model inherits from "),Tr=r(Zd,"A",{href:!0});var Wb=i(Tr);ep=n(Wb,"PreTrainedModel"),Wb.forEach(t),tp=n(Zd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zd.forEach(t),op=h(ct),ws=r(ct,"P",{});var ec=i(ws);np=n(ec,"This model is also a PyTorch "),vs=r(ec,"A",{href:!0,rel:!0});var Rb=i(vs);sp=n(Rb,"torch.nn.Module"),Rb.forEach(t),ap=n(ec,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ec.forEach(t),rp=h(ct),$s=r(ct,"P",{});var tc=i($s);ip=n(tc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Mi=r(tc,"EM",{});var Ub=i(Mi);lp=n(Ub,`Attention is
all you need`),Ub.forEach(t),dp=n(tc,`_ by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz
Kaiser and Illia Polosukhin.`),tc.forEach(t),cp=h(ct),tt=r(ct,"P",{});var Ct=i(tt);mp=n(Ct,"To behave as a decoder the model needs to be initialized with the "),zi=r(Ct,"CODE",{});var Kb=i(zi);pp=n(Kb,"is_decoder"),Kb.forEach(t),hp=n(Ct,` argument of the configuration set to
`),qi=r(Ct,"CODE",{});var Hb=i(qi);up=n(Hb,"True"),Hb.forEach(t),fp=n(Ct,". To be used in a Seq2Seq model, the model needs to initialized with both "),xi=r(Ct,"CODE",{});var Qb=i(xi);gp=n(Qb,"is_decoder"),Qb.forEach(t),_p=n(Ct,` argument and
`),ji=r(Ct,"CODE",{});var Vb=i(ji);bp=n(Vb,"add_cross_attention"),Vb.forEach(t),kp=n(Ct," set to "),Pi=r(Ct,"CODE",{});var Jb=i(Pi);yp=n(Jb,"True"),Jb.forEach(t),Tp=n(Ct,"; an "),Li=r(Ct,"CODE",{});var Gb=i(Li);wp=n(Gb,"encoder_hidden_states"),Gb.forEach(t),vp=n(Ct," is then expected as an input to the forward pass."),Ct.forEach(t),$p=h(ct),Ko=r(ct,"P",{});var pd=i(Ko);Cp=n(pd,".. _"),Oi=r(pd,"EM",{});var Xb=i(Oi);Fp=n(Xb,"Attention is all you need"),Xb.forEach(t),Ep=n(pd,": "),Cs=r(pd,"A",{href:!0,rel:!0});var Yb=i(Cs);Mp=n(Yb,"https://arxiv.org/abs/1706.03762"),Yb.forEach(t),pd.forEach(t),zp=h(ct),Mt=r(ct,"DIV",{class:!0});var Yn=i(Mt);v(Fs.$$.fragment,Yn),qp=h(Yn),lo=r(Yn,"P",{});var Yr=i(lo);xp=n(Yr,"The "),wr=r(Yr,"A",{href:!0});var Zb=i(wr);jp=n(Zb,"CamembertModel"),Zb.forEach(t),Pp=n(Yr," forward method, overrides the "),Ni=r(Yr,"CODE",{});var ek=i(Ni);Lp=n(ek,"__call__"),ek.forEach(t),Op=n(Yr," special method."),Yr.forEach(t),Np=h(Yn),v(Ho.$$.fragment,Yn),Ap=h(Yn),v(Qo.$$.fragment,Yn),Yn.forEach(t),ct.forEach(t),bd=h(s),co=r(s,"H2",{class:!0});var oc=i(co);Vo=r(oc,"A",{id:!0,class:!0,href:!0});var tk=i(Vo);Ai=r(tk,"SPAN",{});var ok=i(Ai);v(Es.$$.fragment,ok),ok.forEach(t),tk.forEach(t),Dp=h(oc),Di=r(oc,"SPAN",{});var nk=i(Di);Ip=n(nk,"CamembertForCausalLM"),nk.forEach(t),oc.forEach(t),kd=h(s),pt=r(s,"DIV",{class:!0});var Qt=i(pt);v(Ms.$$.fragment,Qt),Sp=h(Qt),zs=r(Qt,"P",{});var nc=i(zs);Bp=n(nc,"CamemBERT Model with a "),Ii=r(nc,"CODE",{});var sk=i(Ii);Wp=n(sk,"language modeling"),sk.forEach(t),Rp=n(nc," head on top for CLM fine-tuning."),nc.forEach(t),Up=h(Qt),qs=r(Qt,"P",{});var sc=i(qs);Kp=n(sc,"This model inherits from "),vr=r(sc,"A",{href:!0});var ak=i(vr);Hp=n(ak,"PreTrainedModel"),ak.forEach(t),Qp=n(sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sc.forEach(t),Vp=h(Qt),xs=r(Qt,"P",{});var ac=i(xs);Jp=n(ac,"This model is also a PyTorch "),js=r(ac,"A",{href:!0,rel:!0});var rk=i(js);Gp=n(rk,"torch.nn.Module"),rk.forEach(t),Xp=n(ac,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ac.forEach(t),Yp=h(Qt),zt=r(Qt,"DIV",{class:!0});var Zn=i(zt);v(Ps.$$.fragment,Zn),Zp=h(Zn),mo=r(Zn,"P",{});var Zr=i(mo);eh=n(Zr,"The "),$r=r(Zr,"A",{href:!0});var ik=i($r);th=n(ik,"CamembertForCausalLM"),ik.forEach(t),oh=n(Zr," forward method, overrides the "),Si=r(Zr,"CODE",{});var lk=i(Si);nh=n(lk,"__call__"),lk.forEach(t),sh=n(Zr," special method."),Zr.forEach(t),ah=h(Zn),v(Jo.$$.fragment,Zn),rh=h(Zn),v(Go.$$.fragment,Zn),Zn.forEach(t),Qt.forEach(t),yd=h(s),po=r(s,"H2",{class:!0});var rc=i(po);Xo=r(rc,"A",{id:!0,class:!0,href:!0});var dk=i(Xo);Bi=r(dk,"SPAN",{});var ck=i(Bi);v(Ls.$$.fragment,ck),ck.forEach(t),dk.forEach(t),ih=h(rc),Wi=r(rc,"SPAN",{});var mk=i(Wi);lh=n(mk,"CamembertForMaskedLM"),mk.forEach(t),rc.forEach(t),Td=h(s),ht=r(s,"DIV",{class:!0});var Vt=i(ht);v(Os.$$.fragment,Vt),dh=h(Vt),Ns=r(Vt,"P",{});var ic=i(Ns);ch=n(ic,"CamemBERT Model with a "),Ri=r(ic,"CODE",{});var pk=i(Ri);mh=n(pk,"language modeling"),pk.forEach(t),ph=n(ic," head on top."),ic.forEach(t),hh=h(Vt),As=r(Vt,"P",{});var lc=i(As);uh=n(lc,"This model inherits from "),Cr=r(lc,"A",{href:!0});var hk=i(Cr);fh=n(hk,"PreTrainedModel"),hk.forEach(t),gh=n(lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lc.forEach(t),_h=h(Vt),Ds=r(Vt,"P",{});var dc=i(Ds);bh=n(dc,"This model is also a PyTorch "),Is=r(dc,"A",{href:!0,rel:!0});var uk=i(Is);kh=n(uk,"torch.nn.Module"),uk.forEach(t),yh=n(dc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dc.forEach(t),Th=h(Vt),bt=r(Vt,"DIV",{class:!0});var Jt=i(bt);v(Ss.$$.fragment,Jt),wh=h(Jt),ho=r(Jt,"P",{});var ei=i(ho);vh=n(ei,"The "),Fr=r(ei,"A",{href:!0});var fk=i(Fr);$h=n(fk,"CamembertForMaskedLM"),fk.forEach(t),Ch=n(ei," forward method, overrides the "),Ui=r(ei,"CODE",{});var gk=i(Ui);Fh=n(gk,"__call__"),gk.forEach(t),Eh=n(ei," special method."),ei.forEach(t),Mh=h(Jt),v(Yo.$$.fragment,Jt),zh=h(Jt),v(Zo.$$.fragment,Jt),qh=h(Jt),v(en.$$.fragment,Jt),Jt.forEach(t),Vt.forEach(t),wd=h(s),uo=r(s,"H2",{class:!0});var cc=i(uo);tn=r(cc,"A",{id:!0,class:!0,href:!0});var _k=i(tn);Ki=r(_k,"SPAN",{});var bk=i(Ki);v(Bs.$$.fragment,bk),bk.forEach(t),_k.forEach(t),xh=h(cc),Hi=r(cc,"SPAN",{});var kk=i(Hi);jh=n(kk,"CamembertForSequenceClassification"),kk.forEach(t),cc.forEach(t),vd=h(s),ut=r(s,"DIV",{class:!0});var Gt=i(ut);v(Ws.$$.fragment,Gt),Ph=h(Gt),Qi=r(Gt,"P",{});var yk=i(Qi);Lh=n(yk,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),yk.forEach(t),Oh=h(Gt),Rs=r(Gt,"P",{});var mc=i(Rs);Nh=n(mc,"This model inherits from "),Er=r(mc,"A",{href:!0});var Tk=i(Er);Ah=n(Tk,"PreTrainedModel"),Tk.forEach(t),Dh=n(mc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc.forEach(t),Ih=h(Gt),Us=r(Gt,"P",{});var pc=i(Us);Sh=n(pc,"This model is also a PyTorch "),Ks=r(pc,"A",{href:!0,rel:!0});var wk=i(Ks);Bh=n(wk,"torch.nn.Module"),wk.forEach(t),Wh=n(pc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc.forEach(t),Rh=h(Gt),et=r(Gt,"DIV",{class:!0});var Ft=i(et);v(Hs.$$.fragment,Ft),Uh=h(Ft),fo=r(Ft,"P",{});var ti=i(fo);Kh=n(ti,"The "),Mr=r(ti,"A",{href:!0});var vk=i(Mr);Hh=n(vk,"CamembertForSequenceClassification"),vk.forEach(t),Qh=n(ti," forward method, overrides the "),Vi=r(ti,"CODE",{});var $k=i(Vi);Vh=n($k,"__call__"),$k.forEach(t),Jh=n(ti," special method."),ti.forEach(t),Gh=h(Ft),v(on.$$.fragment,Ft),Xh=h(Ft),v(nn.$$.fragment,Ft),Yh=h(Ft),v(sn.$$.fragment,Ft),Zh=h(Ft),v(an.$$.fragment,Ft),eu=h(Ft),v(rn.$$.fragment,Ft),Ft.forEach(t),Gt.forEach(t),$d=h(s),go=r(s,"H2",{class:!0});var hc=i(go);ln=r(hc,"A",{id:!0,class:!0,href:!0});var Ck=i(ln);Ji=r(Ck,"SPAN",{});var Fk=i(Ji);v(Qs.$$.fragment,Fk),Fk.forEach(t),Ck.forEach(t),tu=h(hc),Gi=r(hc,"SPAN",{});var Ek=i(Gi);ou=n(Ek,"CamembertForMultipleChoice"),Ek.forEach(t),hc.forEach(t),Cd=h(s),ft=r(s,"DIV",{class:!0});var Xt=i(ft);v(Vs.$$.fragment,Xt),nu=h(Xt),Xi=r(Xt,"P",{});var Mk=i(Xi);su=n(Mk,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mk.forEach(t),au=h(Xt),Js=r(Xt,"P",{});var uc=i(Js);ru=n(uc,"This model inherits from "),zr=r(uc,"A",{href:!0});var zk=i(zr);iu=n(zk,"PreTrainedModel"),zk.forEach(t),lu=n(uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uc.forEach(t),du=h(Xt),Gs=r(Xt,"P",{});var fc=i(Gs);cu=n(fc,"This model is also a PyTorch "),Xs=r(fc,"A",{href:!0,rel:!0});var qk=i(Xs);mu=n(qk,"torch.nn.Module"),qk.forEach(t),pu=n(fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fc.forEach(t),hu=h(Xt),qt=r(Xt,"DIV",{class:!0});var es=i(qt);v(Ys.$$.fragment,es),uu=h(es),_o=r(es,"P",{});var oi=i(_o);fu=n(oi,"The "),qr=r(oi,"A",{href:!0});var xk=i(qr);gu=n(xk,"CamembertForMultipleChoice"),xk.forEach(t),_u=n(oi," forward method, overrides the "),Yi=r(oi,"CODE",{});var jk=i(Yi);bu=n(jk,"__call__"),jk.forEach(t),ku=n(oi," special method."),oi.forEach(t),yu=h(es),v(dn.$$.fragment,es),Tu=h(es),v(cn.$$.fragment,es),es.forEach(t),Xt.forEach(t),Fd=h(s),bo=r(s,"H2",{class:!0});var gc=i(bo);mn=r(gc,"A",{id:!0,class:!0,href:!0});var Pk=i(mn);Zi=r(Pk,"SPAN",{});var Lk=i(Zi);v(Zs.$$.fragment,Lk),Lk.forEach(t),Pk.forEach(t),wu=h(gc),el=r(gc,"SPAN",{});var Ok=i(el);vu=n(Ok,"CamembertForTokenClassification"),Ok.forEach(t),gc.forEach(t),Ed=h(s),gt=r(s,"DIV",{class:!0});var Yt=i(gt);v(ea.$$.fragment,Yt),$u=h(Yt),tl=r(Yt,"P",{});var Nk=i(tl);Cu=n(Nk,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Nk.forEach(t),Fu=h(Yt),ta=r(Yt,"P",{});var _c=i(ta);Eu=n(_c,"This model inherits from "),xr=r(_c,"A",{href:!0});var Ak=i(xr);Mu=n(Ak,"PreTrainedModel"),Ak.forEach(t),zu=n(_c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(t),qu=h(Yt),oa=r(Yt,"P",{});var bc=i(oa);xu=n(bc,"This model is also a PyTorch "),na=r(bc,"A",{href:!0,rel:!0});var Dk=i(na);ju=n(Dk,"torch.nn.Module"),Dk.forEach(t),Pu=n(bc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bc.forEach(t),Lu=h(Yt),kt=r(Yt,"DIV",{class:!0});var Zt=i(kt);v(sa.$$.fragment,Zt),Ou=h(Zt),ko=r(Zt,"P",{});var ni=i(ko);Nu=n(ni,"The "),jr=r(ni,"A",{href:!0});var Ik=i(jr);Au=n(Ik,"CamembertForTokenClassification"),Ik.forEach(t),Du=n(ni," forward method, overrides the "),ol=r(ni,"CODE",{});var Sk=i(ol);Iu=n(Sk,"__call__"),Sk.forEach(t),Su=n(ni," special method."),ni.forEach(t),Bu=h(Zt),v(pn.$$.fragment,Zt),Wu=h(Zt),v(hn.$$.fragment,Zt),Ru=h(Zt),v(un.$$.fragment,Zt),Zt.forEach(t),Yt.forEach(t),Md=h(s),yo=r(s,"H2",{class:!0});var kc=i(yo);fn=r(kc,"A",{id:!0,class:!0,href:!0});var Bk=i(fn);nl=r(Bk,"SPAN",{});var Wk=i(nl);v(aa.$$.fragment,Wk),Wk.forEach(t),Bk.forEach(t),Uu=h(kc),sl=r(kc,"SPAN",{});var Rk=i(sl);Ku=n(Rk,"CamembertForQuestionAnswering"),Rk.forEach(t),kc.forEach(t),zd=h(s),_t=r(s,"DIV",{class:!0});var eo=i(_t);v(ra.$$.fragment,eo),Hu=h(eo),gn=r(eo,"P",{});var hd=i(gn);Qu=n(hd,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),al=r(hd,"CODE",{});var Uk=i(al);Vu=n(Uk,"span start logits"),Uk.forEach(t),Ju=n(hd," and "),rl=r(hd,"CODE",{});var Kk=i(rl);Gu=n(Kk,"span end logits"),Kk.forEach(t),hd.forEach(t),Xu=h(eo),ia=r(eo,"P",{});var yc=i(ia);Yu=n(yc,"This model inherits from "),Pr=r(yc,"A",{href:!0});var Hk=i(Pr);Zu=n(Hk,"PreTrainedModel"),Hk.forEach(t),ef=n(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),tf=h(eo),la=r(eo,"P",{});var Tc=i(la);of=n(Tc,"This model is also a PyTorch "),da=r(Tc,"A",{href:!0,rel:!0});var Qk=i(da);nf=n(Qk,"torch.nn.Module"),Qk.forEach(t),sf=n(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),af=h(eo),yt=r(eo,"DIV",{class:!0});var to=i(yt);v(ca.$$.fragment,to),rf=h(to),To=r(to,"P",{});var si=i(To);lf=n(si,"The "),Lr=r(si,"A",{href:!0});var Vk=i(Lr);df=n(Vk,"CamembertForQuestionAnswering"),Vk.forEach(t),cf=n(si," forward method, overrides the "),il=r(si,"CODE",{});var Jk=i(il);mf=n(Jk,"__call__"),Jk.forEach(t),pf=n(si," special method."),si.forEach(t),hf=h(to),v(_n.$$.fragment,to),uf=h(to),v(bn.$$.fragment,to),ff=h(to),v(kn.$$.fragment,to),to.forEach(t),eo.forEach(t),qd=h(s),wo=r(s,"H2",{class:!0});var wc=i(wo);yn=r(wc,"A",{id:!0,class:!0,href:!0});var Gk=i(yn);ll=r(Gk,"SPAN",{});var Xk=i(ll);v(ma.$$.fragment,Xk),Xk.forEach(t),Gk.forEach(t),gf=h(wc),dl=r(wc,"SPAN",{});var Yk=i(dl);_f=n(Yk,"TFCamembertModel"),Yk.forEach(t),wc.forEach(t),xd=h(s),ot=r(s,"DIV",{class:!0});var Lt=i(ot);v(pa.$$.fragment,Lt),bf=h(Lt),cl=r(Lt,"P",{});var Zk=i(cl);kf=n(Zk,"The bare CamemBERT Model transformer outputting raw hidden-states without any specific head on top."),Zk.forEach(t),yf=h(Lt),ha=r(Lt,"P",{});var vc=i(ha);Tf=n(vc,"This model inherits from "),Or=r(vc,"A",{href:!0});var ey=i(Or);wf=n(ey,"TFPreTrainedModel"),ey.forEach(t),vf=n(vc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vc.forEach(t),$f=h(Lt),ua=r(Lt,"P",{});var $c=i(ua);Cf=n($c,"This model is also a "),fa=r($c,"A",{href:!0,rel:!0});var ty=i(fa);Ff=n(ty,"tf.keras.Model"),ty.forEach(t),Ef=n($c,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$c.forEach(t),Mf=h(Lt),v(Tn.$$.fragment,Lt),zf=h(Lt),xt=r(Lt,"DIV",{class:!0});var ts=i(xt);v(ga.$$.fragment,ts),qf=h(ts),vo=r(ts,"P",{});var ai=i(vo);xf=n(ai,"The "),Nr=r(ai,"A",{href:!0});var oy=i(Nr);jf=n(oy,"TFCamembertModel"),oy.forEach(t),Pf=n(ai," forward method, overrides the "),ml=r(ai,"CODE",{});var ny=i(ml);Lf=n(ny,"__call__"),ny.forEach(t),Of=n(ai," special method."),ai.forEach(t),Nf=h(ts),v(wn.$$.fragment,ts),Af=h(ts),v(vn.$$.fragment,ts),ts.forEach(t),Lt.forEach(t),jd=h(s),$o=r(s,"H2",{class:!0});var Cc=i($o);$n=r(Cc,"A",{id:!0,class:!0,href:!0});var sy=i($n);pl=r(sy,"SPAN",{});var ay=i(pl);v(_a.$$.fragment,ay),ay.forEach(t),sy.forEach(t),Df=h(Cc),hl=r(Cc,"SPAN",{});var ry=i(hl);If=n(ry,"TFCamembertForCasualLM"),ry.forEach(t),Cc.forEach(t),Pd=h(s),nt=r(s,"DIV",{class:!0});var Ot=i(nt);v(ba.$$.fragment,Ot),Sf=h(Ot),ka=r(Ot,"P",{});var Fc=i(ka);Bf=n(Fc,"CamemBERT Model with a "),ul=r(Fc,"CODE",{});var iy=i(ul);Wf=n(iy,"language modeling"),iy.forEach(t),Rf=n(Fc," head on top for CLM fine-tuning."),Fc.forEach(t),Uf=h(Ot),ya=r(Ot,"P",{});var Ec=i(ya);Kf=n(Ec,"This model inherits from "),Ar=r(Ec,"A",{href:!0});var ly=i(Ar);Hf=n(ly,"TFPreTrainedModel"),ly.forEach(t),Qf=n(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(t),Vf=h(Ot),Ta=r(Ot,"P",{});var Mc=i(Ta);Jf=n(Mc,"This model is also a "),wa=r(Mc,"A",{href:!0,rel:!0});var dy=i(wa);Gf=n(dy,"tf.keras.Model"),dy.forEach(t),Xf=n(Mc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc.forEach(t),Yf=h(Ot),v(Cn.$$.fragment,Ot),Zf=h(Ot),jt=r(Ot,"DIV",{class:!0});var os=i(jt);v(va.$$.fragment,os),eg=h(os),Co=r(os,"P",{});var ri=i(Co);tg=n(ri,"The "),Dr=r(ri,"A",{href:!0});var cy=i(Dr);og=n(cy,"TFCamembertForCausalLM"),cy.forEach(t),ng=n(ri," forward method, overrides the "),fl=r(ri,"CODE",{});var my=i(fl);sg=n(my,"__call__"),my.forEach(t),ag=n(ri," special method."),ri.forEach(t),rg=h(os),v(Fn.$$.fragment,os),ig=h(os),v(En.$$.fragment,os),os.forEach(t),Ot.forEach(t),Ld=h(s),Fo=r(s,"H2",{class:!0});var zc=i(Fo);Mn=r(zc,"A",{id:!0,class:!0,href:!0});var py=i(Mn);gl=r(py,"SPAN",{});var hy=i(gl);v($a.$$.fragment,hy),hy.forEach(t),py.forEach(t),lg=h(zc),_l=r(zc,"SPAN",{});var uy=i(_l);dg=n(uy,"TFCamembertForMaskedLM"),uy.forEach(t),zc.forEach(t),Od=h(s),st=r(s,"DIV",{class:!0});var Nt=i(st);v(Ca.$$.fragment,Nt),cg=h(Nt),Fa=r(Nt,"P",{});var qc=i(Fa);mg=n(qc,"CamemBERT Model with a "),bl=r(qc,"CODE",{});var fy=i(bl);pg=n(fy,"language modeling"),fy.forEach(t),hg=n(qc," head on top."),qc.forEach(t),ug=h(Nt),Ea=r(Nt,"P",{});var xc=i(Ea);fg=n(xc,"This model inherits from "),Ir=r(xc,"A",{href:!0});var gy=i(Ir);gg=n(gy,"TFPreTrainedModel"),gy.forEach(t),_g=n(xc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc.forEach(t),bg=h(Nt),Ma=r(Nt,"P",{});var jc=i(Ma);kg=n(jc,"This model is also a "),za=r(jc,"A",{href:!0,rel:!0});var _y=i(za);yg=n(_y,"tf.keras.Model"),_y.forEach(t),Tg=n(jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc.forEach(t),wg=h(Nt),v(zn.$$.fragment,Nt),vg=h(Nt),Tt=r(Nt,"DIV",{class:!0});var oo=i(Tt);v(qa.$$.fragment,oo),$g=h(oo),Eo=r(oo,"P",{});var ii=i(Eo);Cg=n(ii,"The "),Sr=r(ii,"A",{href:!0});var by=i(Sr);Fg=n(by,"TFCamembertForMaskedLM"),by.forEach(t),Eg=n(ii," forward method, overrides the "),kl=r(ii,"CODE",{});var ky=i(kl);Mg=n(ky,"__call__"),ky.forEach(t),zg=n(ii," special method."),ii.forEach(t),qg=h(oo),v(qn.$$.fragment,oo),xg=h(oo),v(xn.$$.fragment,oo),jg=h(oo),v(jn.$$.fragment,oo),oo.forEach(t),Nt.forEach(t),Nd=h(s),Mo=r(s,"H2",{class:!0});var Pc=i(Mo);Pn=r(Pc,"A",{id:!0,class:!0,href:!0});var yy=i(Pn);yl=r(yy,"SPAN",{});var Ty=i(yl);v(xa.$$.fragment,Ty),Ty.forEach(t),yy.forEach(t),Pg=h(Pc),Tl=r(Pc,"SPAN",{});var wy=i(Tl);Lg=n(wy,"TFCamembertForSequenceClassification"),wy.forEach(t),Pc.forEach(t),Ad=h(s),at=r(s,"DIV",{class:!0});var At=i(at);v(ja.$$.fragment,At),Og=h(At),wl=r(At,"P",{});var vy=i(wl);Ng=n(vy,`CamemBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vy.forEach(t),Ag=h(At),Pa=r(At,"P",{});var Lc=i(Pa);Dg=n(Lc,"This model inherits from "),Br=r(Lc,"A",{href:!0});var $y=i(Br);Ig=n($y,"TFPreTrainedModel"),$y.forEach(t),Sg=n(Lc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lc.forEach(t),Bg=h(At),La=r(At,"P",{});var Oc=i(La);Wg=n(Oc,"This model is also a "),Oa=r(Oc,"A",{href:!0,rel:!0});var Cy=i(Oa);Rg=n(Cy,"tf.keras.Model"),Cy.forEach(t),Ug=n(Oc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oc.forEach(t),Kg=h(At),v(Ln.$$.fragment,At),Hg=h(At),wt=r(At,"DIV",{class:!0});var no=i(wt);v(Na.$$.fragment,no),Qg=h(no),zo=r(no,"P",{});var li=i(zo);Vg=n(li,"The "),Wr=r(li,"A",{href:!0});var Fy=i(Wr);Jg=n(Fy,"TFCamembertForSequenceClassification"),Fy.forEach(t),Gg=n(li," forward method, overrides the "),vl=r(li,"CODE",{});var Ey=i(vl);Xg=n(Ey,"__call__"),Ey.forEach(t),Yg=n(li," special method."),li.forEach(t),Zg=h(no),v(On.$$.fragment,no),e_=h(no),v(Nn.$$.fragment,no),t_=h(no),v(An.$$.fragment,no),no.forEach(t),At.forEach(t),Dd=h(s),qo=r(s,"H2",{class:!0});var Nc=i(qo);Dn=r(Nc,"A",{id:!0,class:!0,href:!0});var My=i(Dn);$l=r(My,"SPAN",{});var zy=i($l);v(Aa.$$.fragment,zy),zy.forEach(t),My.forEach(t),o_=h(Nc),Cl=r(Nc,"SPAN",{});var qy=i(Cl);n_=n(qy,"TFCamembertForMultipleChoice"),qy.forEach(t),Nc.forEach(t),Id=h(s),rt=r(s,"DIV",{class:!0});var Dt=i(rt);v(Da.$$.fragment,Dt),s_=h(Dt),Fl=r(Dt,"P",{});var xy=i(Fl);a_=n(xy,`CamemBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xy.forEach(t),r_=h(Dt),Ia=r(Dt,"P",{});var Ac=i(Ia);i_=n(Ac,"This model inherits from "),Rr=r(Ac,"A",{href:!0});var jy=i(Rr);l_=n(jy,"TFPreTrainedModel"),jy.forEach(t),d_=n(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),c_=h(Dt),Sa=r(Dt,"P",{});var Dc=i(Sa);m_=n(Dc,"This model is also a "),Ba=r(Dc,"A",{href:!0,rel:!0});var Py=i(Ba);p_=n(Py,"tf.keras.Model"),Py.forEach(t),h_=n(Dc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dc.forEach(t),u_=h(Dt),v(In.$$.fragment,Dt),f_=h(Dt),Pt=r(Dt,"DIV",{class:!0});var ns=i(Pt);v(Wa.$$.fragment,ns),g_=h(ns),xo=r(ns,"P",{});var di=i(xo);__=n(di,"The "),Ur=r(di,"A",{href:!0});var Ly=i(Ur);b_=n(Ly,"TFCamembertForMultipleChoice"),Ly.forEach(t),k_=n(di," forward method, overrides the "),El=r(di,"CODE",{});var Oy=i(El);y_=n(Oy,"__call__"),Oy.forEach(t),T_=n(di," special method."),di.forEach(t),w_=h(ns),v(Sn.$$.fragment,ns),v_=h(ns),v(Bn.$$.fragment,ns),ns.forEach(t),Dt.forEach(t),Sd=h(s),jo=r(s,"H2",{class:!0});var Ic=i(jo);Wn=r(Ic,"A",{id:!0,class:!0,href:!0});var Ny=i(Wn);Ml=r(Ny,"SPAN",{});var Ay=i(Ml);v(Ra.$$.fragment,Ay),Ay.forEach(t),Ny.forEach(t),$_=h(Ic),zl=r(Ic,"SPAN",{});var Dy=i(zl);C_=n(Dy,"TFCamembertForTokenClassification"),Dy.forEach(t),Ic.forEach(t),Bd=h(s),it=r(s,"DIV",{class:!0});var It=i(it);v(Ua.$$.fragment,It),F_=h(It),ql=r(It,"P",{});var Iy=i(ql);E_=n(Iy,`CamemBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Iy.forEach(t),M_=h(It),Ka=r(It,"P",{});var Sc=i(Ka);z_=n(Sc,"This model inherits from "),Kr=r(Sc,"A",{href:!0});var Sy=i(Kr);q_=n(Sy,"TFPreTrainedModel"),Sy.forEach(t),x_=n(Sc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sc.forEach(t),j_=h(It),Ha=r(It,"P",{});var Bc=i(Ha);P_=n(Bc,"This model is also a "),Qa=r(Bc,"A",{href:!0,rel:!0});var By=i(Qa);L_=n(By,"tf.keras.Model"),By.forEach(t),O_=n(Bc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bc.forEach(t),N_=h(It),v(Rn.$$.fragment,It),A_=h(It),vt=r(It,"DIV",{class:!0});var so=i(vt);v(Va.$$.fragment,so),D_=h(so),Po=r(so,"P",{});var ci=i(Po);I_=n(ci,"The "),Hr=r(ci,"A",{href:!0});var Wy=i(Hr);S_=n(Wy,"TFCamembertForTokenClassification"),Wy.forEach(t),B_=n(ci," forward method, overrides the "),xl=r(ci,"CODE",{});var Ry=i(xl);W_=n(Ry,"__call__"),Ry.forEach(t),R_=n(ci," special method."),ci.forEach(t),U_=h(so),v(Un.$$.fragment,so),K_=h(so),v(Kn.$$.fragment,so),H_=h(so),v(Hn.$$.fragment,so),so.forEach(t),It.forEach(t),Wd=h(s),Lo=r(s,"H2",{class:!0});var Wc=i(Lo);Qn=r(Wc,"A",{id:!0,class:!0,href:!0});var Uy=i(Qn);jl=r(Uy,"SPAN",{});var Ky=i(jl);v(Ja.$$.fragment,Ky),Ky.forEach(t),Uy.forEach(t),Q_=h(Wc),Pl=r(Wc,"SPAN",{});var Hy=i(Pl);V_=n(Hy,"TFCamembertForQuestionAnswering"),Hy.forEach(t),Wc.forEach(t),Rd=h(s),lt=r(s,"DIV",{class:!0});var St=i(lt);v(Ga.$$.fragment,St),J_=h(St),Oo=r(St,"P",{});var mi=i(Oo);G_=n(mi,`CamemBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Ll=r(mi,"CODE",{});var Qy=i(Ll);X_=n(Qy,"span start logits"),Qy.forEach(t),Y_=n(mi," and "),Ol=r(mi,"CODE",{});var Vy=i(Ol);Z_=n(Vy,"span end logits"),Vy.forEach(t),eb=n(mi,")."),mi.forEach(t),tb=h(St),Xa=r(St,"P",{});var Rc=i(Xa);ob=n(Rc,"This model inherits from "),Qr=r(Rc,"A",{href:!0});var Jy=i(Qr);nb=n(Jy,"TFPreTrainedModel"),Jy.forEach(t),sb=n(Rc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Rc.forEach(t),ab=h(St),Ya=r(St,"P",{});var Uc=i(Ya);rb=n(Uc,"This model is also a "),Za=r(Uc,"A",{href:!0,rel:!0});var Gy=i(Za);ib=n(Gy,"tf.keras.Model"),Gy.forEach(t),lb=n(Uc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Uc.forEach(t),db=h(St),v(Vn.$$.fragment,St),cb=h(St),$t=r(St,"DIV",{class:!0});var ao=i($t);v(er.$$.fragment,ao),mb=h(ao),No=r(ao,"P",{});var pi=i(No);pb=n(pi,"The "),Vr=r(pi,"A",{href:!0});var Xy=i(Vr);hb=n(Xy,"TFCamembertForQuestionAnswering"),Xy.forEach(t),ub=n(pi," forward method, overrides the "),Nl=r(pi,"CODE",{});var Yy=i(Nl);fb=n(Yy,"__call__"),Yy.forEach(t),gb=n(pi," special method."),pi.forEach(t),_b=h(ao),v(Jn.$$.fragment,ao),bb=h(ao),v(Gn.$$.fragment,ao),kb=h(ao),v(Xn.$$.fragment,ao),ao.forEach(t),St.forEach(t),this.h()},h(){g(l,"name","hf:doc:metadata"),g(l,"content",JSON.stringify(GT)),g(u,"id","camembert"),g(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(u,"href","#camembert"),g(c,"class","relative group"),g(re,"id","overview"),g(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(re,"href","#overview"),g(I,"class","relative group"),g(le,"href","https://arxiv.org/abs/1911.03894"),g(le,"rel","nofollow"),g(H,"href","roberta"),g(ce,"href","https://huggingface.co/camembert"),g(ce,"rel","nofollow"),g(me,"href","https://camembert-model.fr/"),g(me,"rel","nofollow"),g(ie,"id","transformers.CamembertConfig"),g(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ie,"href","#transformers.CamembertConfig"),g(S,"class","relative group"),g(Ae,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),g(Oe,"href","https://huggingface.co/camembert-base"),g(Oe,"rel","nofollow"),g(f,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(W,"id","transformers.CamembertTokenizer"),g(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(W,"href","#transformers.CamembertTokenizer"),g(A,"class","relative group"),g(cr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(mr,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(ss,"href","https://github.com/google/sentencepiece"),g(ss,"rel","nofollow"),g(pr,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),g(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(So,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wo,"id","transformers.CamembertTokenizerFast"),g(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wo,"href","#transformers.CamembertTokenizerFast"),g(ro,"class","relative group"),g(gr,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),g(_r,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),g(us,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),g(us,"rel","nofollow"),g(br,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),g(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Uo,"id","transformers.CamembertModel"),g(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Uo,"href","#transformers.CamembertModel"),g(io,"class","relative group"),g(Tr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(vs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(vs,"rel","nofollow"),g(Cs,"href","https://arxiv.org/abs/1706.03762"),g(Cs,"rel","nofollow"),g(wr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertModel"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vo,"id","transformers.CamembertForCausalLM"),g(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Vo,"href","#transformers.CamembertForCausalLM"),g(co,"class","relative group"),g(vr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(js,"rel","nofollow"),g($r,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForCausalLM"),g(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xo,"id","transformers.CamembertForMaskedLM"),g(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Xo,"href","#transformers.CamembertForMaskedLM"),g(po,"class","relative group"),g(Cr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Is,"rel","nofollow"),g(Fr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMaskedLM"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tn,"id","transformers.CamembertForSequenceClassification"),g(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(tn,"href","#transformers.CamembertForSequenceClassification"),g(uo,"class","relative group"),g(Er,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Ks,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Ks,"rel","nofollow"),g(Mr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForSequenceClassification"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ln,"id","transformers.CamembertForMultipleChoice"),g(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(ln,"href","#transformers.CamembertForMultipleChoice"),g(go,"class","relative group"),g(zr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(Xs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(Xs,"rel","nofollow"),g(qr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForMultipleChoice"),g(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mn,"id","transformers.CamembertForTokenClassification"),g(mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(mn,"href","#transformers.CamembertForTokenClassification"),g(bo,"class","relative group"),g(xr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(na,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(na,"rel","nofollow"),g(jr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForTokenClassification"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fn,"id","transformers.CamembertForQuestionAnswering"),g(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(fn,"href","#transformers.CamembertForQuestionAnswering"),g(yo,"class","relative group"),g(Pr,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),g(da,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),g(da,"rel","nofollow"),g(Lr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.CamembertForQuestionAnswering"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yn,"id","transformers.TFCamembertModel"),g(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(yn,"href","#transformers.TFCamembertModel"),g(wo,"class","relative group"),g(Or,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(fa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(fa,"rel","nofollow"),g(Nr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertModel"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($n,"id","transformers.TFCamembertForCausalLM"),g($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g($n,"href","#transformers.TFCamembertForCausalLM"),g($o,"class","relative group"),g(Ar,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(wa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(wa,"rel","nofollow"),g(Dr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForCausalLM"),g(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mn,"id","transformers.TFCamembertForMaskedLM"),g(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Mn,"href","#transformers.TFCamembertForMaskedLM"),g(Fo,"class","relative group"),g(Ir,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(za,"rel","nofollow"),g(Sr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMaskedLM"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pn,"id","transformers.TFCamembertForSequenceClassification"),g(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Pn,"href","#transformers.TFCamembertForSequenceClassification"),g(Mo,"class","relative group"),g(Br,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Oa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Oa,"rel","nofollow"),g(Wr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForSequenceClassification"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dn,"id","transformers.TFCamembertForMultipleChoice"),g(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Dn,"href","#transformers.TFCamembertForMultipleChoice"),g(qo,"class","relative group"),g(Rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Ba,"rel","nofollow"),g(Ur,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForMultipleChoice"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Wn,"id","transformers.TFCamembertForTokenClassification"),g(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Wn,"href","#transformers.TFCamembertForTokenClassification"),g(jo,"class","relative group"),g(Kr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Qa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Qa,"rel","nofollow"),g(Hr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForTokenClassification"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qn,"id","transformers.TFCamembertForQuestionAnswering"),g(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),g(Qn,"href","#transformers.TFCamembertForQuestionAnswering"),g(Lo,"class","relative group"),g(Qr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),g(Za,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),g(Za,"rel","nofollow"),g(Vr,"href","/docs/transformers/main/en/model_doc/camembert#transformers.TFCamembertForQuestionAnswering"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(s,k){e(document.head,l),b(s,_,k),b(s,c,k),e(c,u),e(u,y),$(d,y,null),e(c,m),e(c,x),e(x,Te),b(s,he,k),b(s,I,k),e(I,re),e(re,ee),$(T,ee,null),e(I,we),e(I,Q),e(Q,ve),b(s,ue,k),b(s,B,k),e(B,$e),e(B,le),e(le,V),e(B,Ce),b(s,fe,k),b(s,R,k),e(R,Fe),b(s,ge,k),b(s,U,k),e(U,pe),e(pe,Ee),b(s,ne,k),b(s,j,k),e(j,O),b(s,_e,k),b(s,K,k),e(K,de),e(de,Me),e(de,H),e(H,ze),e(de,qe),b(s,L,k),b(s,se,k),e(se,J),e(se,ce),e(ce,xe),e(se,G),e(se,me),e(me,je),e(se,D),b(s,be,k),b(s,S,k),e(S,ie),e(ie,te),$(P,te,null),e(S,Pe),e(S,N),e(N,Le),b(s,ke,k),b(s,f,k),$(M,f,null),e(f,Be),e(f,Y),e(Y,We),e(Y,Ae),e(Ae,z),e(Y,Re),e(Y,Oe),e(Oe,Ue),e(Y,Ke),b(s,Se,k),b(s,A,k),e(A,W),e(W,De),$(Ne,De,null),e(A,X),e(A,Ie),e(Ie,He),b(s,ye,k),b(s,oe,k),$(Z,oe,null),e(oe,Qe),e(oe,Bt),e(Bt,Kc),e(Bt,cr),e(cr,Hc),e(Bt,Qc),e(Bt,mr),e(mr,Vc),e(Bt,Jc),e(Bt,ss),e(ss,Gc),e(Bt,Xc),e(oe,Yc),e(oe,as),e(as,Zc),e(as,pr),e(pr,em),e(as,tm),e(oe,om),e(oe,Rt),$(rs,Rt,null),e(Rt,nm),e(Rt,hi),e(hi,sm),e(Rt,am),e(Rt,is),e(is,hr),e(hr,rm),e(hr,ui),e(ui,im),e(is,lm),e(is,ur),e(ur,dm),e(ur,fi),e(fi,cm),e(oe,mm),e(oe,So),$(ls,So,null),e(So,pm),e(So,ds),e(ds,hm),e(ds,gi),e(gi,um),e(ds,fm),e(oe,gm),e(oe,Bo),$(cs,Bo,null),e(Bo,_m),e(Bo,_i),e(_i,bm),e(oe,km),e(oe,fr),$(ms,fr,null),b(s,ud,k),b(s,ro,k),e(ro,Wo),e(Wo,bi),$(ps,bi,null),e(ro,ym),e(ro,ki),e(ki,Tm),b(s,fd,k),b(s,mt,k),$(hs,mt,null),e(mt,wm),e(mt,Et),e(Et,vm),e(Et,yi),e(yi,$m),e(Et,Cm),e(Et,gr),e(gr,Fm),e(Et,Em),e(Et,_r),e(_r,Mm),e(Et,zm),e(Et,us),e(us,qm),e(Et,xm),e(mt,jm),e(mt,fs),e(fs,Pm),e(fs,br),e(br,Lm),e(fs,Om),e(mt,Nm),e(mt,Ut),$(gs,Ut,null),e(Ut,Am),e(Ut,Ti),e(Ti,Dm),e(Ut,Im),e(Ut,_s),e(_s,kr),e(kr,Sm),e(kr,wi),e(wi,Bm),e(_s,Wm),e(_s,yr),e(yr,Rm),e(yr,vi),e(vi,Um),e(mt,Km),e(mt,Ro),$(bs,Ro,null),e(Ro,Hm),e(Ro,$i),e($i,Qm),b(s,gd,k),b(s,io,k),e(io,Uo),e(Uo,Ci),$(ks,Ci,null),e(io,Vm),e(io,Fi),e(Fi,Jm),b(s,_d,k),b(s,Xe,k),$(ys,Xe,null),e(Xe,Gm),e(Xe,Ei),e(Ei,Xm),e(Xe,Ym),e(Xe,Ts),e(Ts,Zm),e(Ts,Tr),e(Tr,ep),e(Ts,tp),e(Xe,op),e(Xe,ws),e(ws,np),e(ws,vs),e(vs,sp),e(ws,ap),e(Xe,rp),e(Xe,$s),e($s,ip),e($s,Mi),e(Mi,lp),e($s,dp),e(Xe,cp),e(Xe,tt),e(tt,mp),e(tt,zi),e(zi,pp),e(tt,hp),e(tt,qi),e(qi,up),e(tt,fp),e(tt,xi),e(xi,gp),e(tt,_p),e(tt,ji),e(ji,bp),e(tt,kp),e(tt,Pi),e(Pi,yp),e(tt,Tp),e(tt,Li),e(Li,wp),e(tt,vp),e(Xe,$p),e(Xe,Ko),e(Ko,Cp),e(Ko,Oi),e(Oi,Fp),e(Ko,Ep),e(Ko,Cs),e(Cs,Mp),e(Xe,zp),e(Xe,Mt),$(Fs,Mt,null),e(Mt,qp),e(Mt,lo),e(lo,xp),e(lo,wr),e(wr,jp),e(lo,Pp),e(lo,Ni),e(Ni,Lp),e(lo,Op),e(Mt,Np),$(Ho,Mt,null),e(Mt,Ap),$(Qo,Mt,null),b(s,bd,k),b(s,co,k),e(co,Vo),e(Vo,Ai),$(Es,Ai,null),e(co,Dp),e(co,Di),e(Di,Ip),b(s,kd,k),b(s,pt,k),$(Ms,pt,null),e(pt,Sp),e(pt,zs),e(zs,Bp),e(zs,Ii),e(Ii,Wp),e(zs,Rp),e(pt,Up),e(pt,qs),e(qs,Kp),e(qs,vr),e(vr,Hp),e(qs,Qp),e(pt,Vp),e(pt,xs),e(xs,Jp),e(xs,js),e(js,Gp),e(xs,Xp),e(pt,Yp),e(pt,zt),$(Ps,zt,null),e(zt,Zp),e(zt,mo),e(mo,eh),e(mo,$r),e($r,th),e(mo,oh),e(mo,Si),e(Si,nh),e(mo,sh),e(zt,ah),$(Jo,zt,null),e(zt,rh),$(Go,zt,null),b(s,yd,k),b(s,po,k),e(po,Xo),e(Xo,Bi),$(Ls,Bi,null),e(po,ih),e(po,Wi),e(Wi,lh),b(s,Td,k),b(s,ht,k),$(Os,ht,null),e(ht,dh),e(ht,Ns),e(Ns,ch),e(Ns,Ri),e(Ri,mh),e(Ns,ph),e(ht,hh),e(ht,As),e(As,uh),e(As,Cr),e(Cr,fh),e(As,gh),e(ht,_h),e(ht,Ds),e(Ds,bh),e(Ds,Is),e(Is,kh),e(Ds,yh),e(ht,Th),e(ht,bt),$(Ss,bt,null),e(bt,wh),e(bt,ho),e(ho,vh),e(ho,Fr),e(Fr,$h),e(ho,Ch),e(ho,Ui),e(Ui,Fh),e(ho,Eh),e(bt,Mh),$(Yo,bt,null),e(bt,zh),$(Zo,bt,null),e(bt,qh),$(en,bt,null),b(s,wd,k),b(s,uo,k),e(uo,tn),e(tn,Ki),$(Bs,Ki,null),e(uo,xh),e(uo,Hi),e(Hi,jh),b(s,vd,k),b(s,ut,k),$(Ws,ut,null),e(ut,Ph),e(ut,Qi),e(Qi,Lh),e(ut,Oh),e(ut,Rs),e(Rs,Nh),e(Rs,Er),e(Er,Ah),e(Rs,Dh),e(ut,Ih),e(ut,Us),e(Us,Sh),e(Us,Ks),e(Ks,Bh),e(Us,Wh),e(ut,Rh),e(ut,et),$(Hs,et,null),e(et,Uh),e(et,fo),e(fo,Kh),e(fo,Mr),e(Mr,Hh),e(fo,Qh),e(fo,Vi),e(Vi,Vh),e(fo,Jh),e(et,Gh),$(on,et,null),e(et,Xh),$(nn,et,null),e(et,Yh),$(sn,et,null),e(et,Zh),$(an,et,null),e(et,eu),$(rn,et,null),b(s,$d,k),b(s,go,k),e(go,ln),e(ln,Ji),$(Qs,Ji,null),e(go,tu),e(go,Gi),e(Gi,ou),b(s,Cd,k),b(s,ft,k),$(Vs,ft,null),e(ft,nu),e(ft,Xi),e(Xi,su),e(ft,au),e(ft,Js),e(Js,ru),e(Js,zr),e(zr,iu),e(Js,lu),e(ft,du),e(ft,Gs),e(Gs,cu),e(Gs,Xs),e(Xs,mu),e(Gs,pu),e(ft,hu),e(ft,qt),$(Ys,qt,null),e(qt,uu),e(qt,_o),e(_o,fu),e(_o,qr),e(qr,gu),e(_o,_u),e(_o,Yi),e(Yi,bu),e(_o,ku),e(qt,yu),$(dn,qt,null),e(qt,Tu),$(cn,qt,null),b(s,Fd,k),b(s,bo,k),e(bo,mn),e(mn,Zi),$(Zs,Zi,null),e(bo,wu),e(bo,el),e(el,vu),b(s,Ed,k),b(s,gt,k),$(ea,gt,null),e(gt,$u),e(gt,tl),e(tl,Cu),e(gt,Fu),e(gt,ta),e(ta,Eu),e(ta,xr),e(xr,Mu),e(ta,zu),e(gt,qu),e(gt,oa),e(oa,xu),e(oa,na),e(na,ju),e(oa,Pu),e(gt,Lu),e(gt,kt),$(sa,kt,null),e(kt,Ou),e(kt,ko),e(ko,Nu),e(ko,jr),e(jr,Au),e(ko,Du),e(ko,ol),e(ol,Iu),e(ko,Su),e(kt,Bu),$(pn,kt,null),e(kt,Wu),$(hn,kt,null),e(kt,Ru),$(un,kt,null),b(s,Md,k),b(s,yo,k),e(yo,fn),e(fn,nl),$(aa,nl,null),e(yo,Uu),e(yo,sl),e(sl,Ku),b(s,zd,k),b(s,_t,k),$(ra,_t,null),e(_t,Hu),e(_t,gn),e(gn,Qu),e(gn,al),e(al,Vu),e(gn,Ju),e(gn,rl),e(rl,Gu),e(_t,Xu),e(_t,ia),e(ia,Yu),e(ia,Pr),e(Pr,Zu),e(ia,ef),e(_t,tf),e(_t,la),e(la,of),e(la,da),e(da,nf),e(la,sf),e(_t,af),e(_t,yt),$(ca,yt,null),e(yt,rf),e(yt,To),e(To,lf),e(To,Lr),e(Lr,df),e(To,cf),e(To,il),e(il,mf),e(To,pf),e(yt,hf),$(_n,yt,null),e(yt,uf),$(bn,yt,null),e(yt,ff),$(kn,yt,null),b(s,qd,k),b(s,wo,k),e(wo,yn),e(yn,ll),$(ma,ll,null),e(wo,gf),e(wo,dl),e(dl,_f),b(s,xd,k),b(s,ot,k),$(pa,ot,null),e(ot,bf),e(ot,cl),e(cl,kf),e(ot,yf),e(ot,ha),e(ha,Tf),e(ha,Or),e(Or,wf),e(ha,vf),e(ot,$f),e(ot,ua),e(ua,Cf),e(ua,fa),e(fa,Ff),e(ua,Ef),e(ot,Mf),$(Tn,ot,null),e(ot,zf),e(ot,xt),$(ga,xt,null),e(xt,qf),e(xt,vo),e(vo,xf),e(vo,Nr),e(Nr,jf),e(vo,Pf),e(vo,ml),e(ml,Lf),e(vo,Of),e(xt,Nf),$(wn,xt,null),e(xt,Af),$(vn,xt,null),b(s,jd,k),b(s,$o,k),e($o,$n),e($n,pl),$(_a,pl,null),e($o,Df),e($o,hl),e(hl,If),b(s,Pd,k),b(s,nt,k),$(ba,nt,null),e(nt,Sf),e(nt,ka),e(ka,Bf),e(ka,ul),e(ul,Wf),e(ka,Rf),e(nt,Uf),e(nt,ya),e(ya,Kf),e(ya,Ar),e(Ar,Hf),e(ya,Qf),e(nt,Vf),e(nt,Ta),e(Ta,Jf),e(Ta,wa),e(wa,Gf),e(Ta,Xf),e(nt,Yf),$(Cn,nt,null),e(nt,Zf),e(nt,jt),$(va,jt,null),e(jt,eg),e(jt,Co),e(Co,tg),e(Co,Dr),e(Dr,og),e(Co,ng),e(Co,fl),e(fl,sg),e(Co,ag),e(jt,rg),$(Fn,jt,null),e(jt,ig),$(En,jt,null),b(s,Ld,k),b(s,Fo,k),e(Fo,Mn),e(Mn,gl),$($a,gl,null),e(Fo,lg),e(Fo,_l),e(_l,dg),b(s,Od,k),b(s,st,k),$(Ca,st,null),e(st,cg),e(st,Fa),e(Fa,mg),e(Fa,bl),e(bl,pg),e(Fa,hg),e(st,ug),e(st,Ea),e(Ea,fg),e(Ea,Ir),e(Ir,gg),e(Ea,_g),e(st,bg),e(st,Ma),e(Ma,kg),e(Ma,za),e(za,yg),e(Ma,Tg),e(st,wg),$(zn,st,null),e(st,vg),e(st,Tt),$(qa,Tt,null),e(Tt,$g),e(Tt,Eo),e(Eo,Cg),e(Eo,Sr),e(Sr,Fg),e(Eo,Eg),e(Eo,kl),e(kl,Mg),e(Eo,zg),e(Tt,qg),$(qn,Tt,null),e(Tt,xg),$(xn,Tt,null),e(Tt,jg),$(jn,Tt,null),b(s,Nd,k),b(s,Mo,k),e(Mo,Pn),e(Pn,yl),$(xa,yl,null),e(Mo,Pg),e(Mo,Tl),e(Tl,Lg),b(s,Ad,k),b(s,at,k),$(ja,at,null),e(at,Og),e(at,wl),e(wl,Ng),e(at,Ag),e(at,Pa),e(Pa,Dg),e(Pa,Br),e(Br,Ig),e(Pa,Sg),e(at,Bg),e(at,La),e(La,Wg),e(La,Oa),e(Oa,Rg),e(La,Ug),e(at,Kg),$(Ln,at,null),e(at,Hg),e(at,wt),$(Na,wt,null),e(wt,Qg),e(wt,zo),e(zo,Vg),e(zo,Wr),e(Wr,Jg),e(zo,Gg),e(zo,vl),e(vl,Xg),e(zo,Yg),e(wt,Zg),$(On,wt,null),e(wt,e_),$(Nn,wt,null),e(wt,t_),$(An,wt,null),b(s,Dd,k),b(s,qo,k),e(qo,Dn),e(Dn,$l),$(Aa,$l,null),e(qo,o_),e(qo,Cl),e(Cl,n_),b(s,Id,k),b(s,rt,k),$(Da,rt,null),e(rt,s_),e(rt,Fl),e(Fl,a_),e(rt,r_),e(rt,Ia),e(Ia,i_),e(Ia,Rr),e(Rr,l_),e(Ia,d_),e(rt,c_),e(rt,Sa),e(Sa,m_),e(Sa,Ba),e(Ba,p_),e(Sa,h_),e(rt,u_),$(In,rt,null),e(rt,f_),e(rt,Pt),$(Wa,Pt,null),e(Pt,g_),e(Pt,xo),e(xo,__),e(xo,Ur),e(Ur,b_),e(xo,k_),e(xo,El),e(El,y_),e(xo,T_),e(Pt,w_),$(Sn,Pt,null),e(Pt,v_),$(Bn,Pt,null),b(s,Sd,k),b(s,jo,k),e(jo,Wn),e(Wn,Ml),$(Ra,Ml,null),e(jo,$_),e(jo,zl),e(zl,C_),b(s,Bd,k),b(s,it,k),$(Ua,it,null),e(it,F_),e(it,ql),e(ql,E_),e(it,M_),e(it,Ka),e(Ka,z_),e(Ka,Kr),e(Kr,q_),e(Ka,x_),e(it,j_),e(it,Ha),e(Ha,P_),e(Ha,Qa),e(Qa,L_),e(Ha,O_),e(it,N_),$(Rn,it,null),e(it,A_),e(it,vt),$(Va,vt,null),e(vt,D_),e(vt,Po),e(Po,I_),e(Po,Hr),e(Hr,S_),e(Po,B_),e(Po,xl),e(xl,W_),e(Po,R_),e(vt,U_),$(Un,vt,null),e(vt,K_),$(Kn,vt,null),e(vt,H_),$(Hn,vt,null),b(s,Wd,k),b(s,Lo,k),e(Lo,Qn),e(Qn,jl),$(Ja,jl,null),e(Lo,Q_),e(Lo,Pl),e(Pl,V_),b(s,Rd,k),b(s,lt,k),$(Ga,lt,null),e(lt,J_),e(lt,Oo),e(Oo,G_),e(Oo,Ll),e(Ll,X_),e(Oo,Y_),e(Oo,Ol),e(Ol,Z_),e(Oo,eb),e(lt,tb),e(lt,Xa),e(Xa,ob),e(Xa,Qr),e(Qr,nb),e(Xa,sb),e(lt,ab),e(lt,Ya),e(Ya,rb),e(Ya,Za),e(Za,ib),e(Ya,lb),e(lt,db),$(Vn,lt,null),e(lt,cb),e(lt,$t),$(er,$t,null),e($t,mb),e($t,No),e(No,pb),e(No,Vr),e(Vr,hb),e(No,ub),e(No,Nl),e(Nl,fb),e(No,gb),e($t,_b),$(Jn,$t,null),e($t,bb),$(Gn,$t,null),e($t,kb),$(Xn,$t,null),Ud=!0},p(s,[k]){const tr={};k&2&&(tr.$$scope={dirty:k,ctx:s}),Ho.$set(tr);const Al={};k&2&&(Al.$$scope={dirty:k,ctx:s}),Qo.$set(Al);const Dl={};k&2&&(Dl.$$scope={dirty:k,ctx:s}),Jo.$set(Dl);const Il={};k&2&&(Il.$$scope={dirty:k,ctx:s}),Go.$set(Il);const or={};k&2&&(or.$$scope={dirty:k,ctx:s}),Yo.$set(or);const Sl={};k&2&&(Sl.$$scope={dirty:k,ctx:s}),Zo.$set(Sl);const Bl={};k&2&&(Bl.$$scope={dirty:k,ctx:s}),en.$set(Bl);const Wl={};k&2&&(Wl.$$scope={dirty:k,ctx:s}),on.$set(Wl);const nr={};k&2&&(nr.$$scope={dirty:k,ctx:s}),nn.$set(nr);const Rl={};k&2&&(Rl.$$scope={dirty:k,ctx:s}),sn.$set(Rl);const Ul={};k&2&&(Ul.$$scope={dirty:k,ctx:s}),an.$set(Ul);const Kl={};k&2&&(Kl.$$scope={dirty:k,ctx:s}),rn.$set(Kl);const Hl={};k&2&&(Hl.$$scope={dirty:k,ctx:s}),dn.$set(Hl);const Ql={};k&2&&(Ql.$$scope={dirty:k,ctx:s}),cn.$set(Ql);const Vl={};k&2&&(Vl.$$scope={dirty:k,ctx:s}),pn.$set(Vl);const sr={};k&2&&(sr.$$scope={dirty:k,ctx:s}),hn.$set(sr);const Jl={};k&2&&(Jl.$$scope={dirty:k,ctx:s}),un.$set(Jl);const Ao={};k&2&&(Ao.$$scope={dirty:k,ctx:s}),_n.$set(Ao);const Gl={};k&2&&(Gl.$$scope={dirty:k,ctx:s}),bn.$set(Gl);const Xl={};k&2&&(Xl.$$scope={dirty:k,ctx:s}),kn.$set(Xl);const ar={};k&2&&(ar.$$scope={dirty:k,ctx:s}),Tn.$set(ar);const Yl={};k&2&&(Yl.$$scope={dirty:k,ctx:s}),wn.$set(Yl);const Zl={};k&2&&(Zl.$$scope={dirty:k,ctx:s}),vn.$set(Zl);const ed={};k&2&&(ed.$$scope={dirty:k,ctx:s}),Cn.$set(ed);const rr={};k&2&&(rr.$$scope={dirty:k,ctx:s}),Fn.$set(rr);const Do={};k&2&&(Do.$$scope={dirty:k,ctx:s}),En.$set(Do);const td={};k&2&&(td.$$scope={dirty:k,ctx:s}),zn.$set(td);const od={};k&2&&(od.$$scope={dirty:k,ctx:s}),qn.$set(od);const ir={};k&2&&(ir.$$scope={dirty:k,ctx:s}),xn.$set(ir);const nd={};k&2&&(nd.$$scope={dirty:k,ctx:s}),jn.$set(nd);const sd={};k&2&&(sd.$$scope={dirty:k,ctx:s}),Ln.$set(sd);const ad={};k&2&&(ad.$$scope={dirty:k,ctx:s}),On.$set(ad);const dt={};k&2&&(dt.$$scope={dirty:k,ctx:s}),Nn.$set(dt);const Wt={};k&2&&(Wt.$$scope={dirty:k,ctx:s}),An.$set(Wt);const rd={};k&2&&(rd.$$scope={dirty:k,ctx:s}),In.$set(rd);const id={};k&2&&(id.$$scope={dirty:k,ctx:s}),Sn.$set(id);const ld={};k&2&&(ld.$$scope={dirty:k,ctx:s}),Bn.$set(ld);const lr={};k&2&&(lr.$$scope={dirty:k,ctx:s}),Rn.$set(lr);const dd={};k&2&&(dd.$$scope={dirty:k,ctx:s}),Un.$set(dd);const Io={};k&2&&(Io.$$scope={dirty:k,ctx:s}),Kn.$set(Io);const cd={};k&2&&(cd.$$scope={dirty:k,ctx:s}),Hn.$set(cd);const dr={};k&2&&(dr.$$scope={dirty:k,ctx:s}),Vn.$set(dr);const Jr={};k&2&&(Jr.$$scope={dirty:k,ctx:s}),Jn.$set(Jr);const md={};k&2&&(md.$$scope={dirty:k,ctx:s}),Gn.$set(md);const Gr={};k&2&&(Gr.$$scope={dirty:k,ctx:s}),Xn.$set(Gr)},i(s){Ud||(C(d.$$.fragment,s),C(T.$$.fragment,s),C(P.$$.fragment,s),C(M.$$.fragment,s),C(Ne.$$.fragment,s),C(Z.$$.fragment,s),C(rs.$$.fragment,s),C(ls.$$.fragment,s),C(cs.$$.fragment,s),C(ms.$$.fragment,s),C(ps.$$.fragment,s),C(hs.$$.fragment,s),C(gs.$$.fragment,s),C(bs.$$.fragment,s),C(ks.$$.fragment,s),C(ys.$$.fragment,s),C(Fs.$$.fragment,s),C(Ho.$$.fragment,s),C(Qo.$$.fragment,s),C(Es.$$.fragment,s),C(Ms.$$.fragment,s),C(Ps.$$.fragment,s),C(Jo.$$.fragment,s),C(Go.$$.fragment,s),C(Ls.$$.fragment,s),C(Os.$$.fragment,s),C(Ss.$$.fragment,s),C(Yo.$$.fragment,s),C(Zo.$$.fragment,s),C(en.$$.fragment,s),C(Bs.$$.fragment,s),C(Ws.$$.fragment,s),C(Hs.$$.fragment,s),C(on.$$.fragment,s),C(nn.$$.fragment,s),C(sn.$$.fragment,s),C(an.$$.fragment,s),C(rn.$$.fragment,s),C(Qs.$$.fragment,s),C(Vs.$$.fragment,s),C(Ys.$$.fragment,s),C(dn.$$.fragment,s),C(cn.$$.fragment,s),C(Zs.$$.fragment,s),C(ea.$$.fragment,s),C(sa.$$.fragment,s),C(pn.$$.fragment,s),C(hn.$$.fragment,s),C(un.$$.fragment,s),C(aa.$$.fragment,s),C(ra.$$.fragment,s),C(ca.$$.fragment,s),C(_n.$$.fragment,s),C(bn.$$.fragment,s),C(kn.$$.fragment,s),C(ma.$$.fragment,s),C(pa.$$.fragment,s),C(Tn.$$.fragment,s),C(ga.$$.fragment,s),C(wn.$$.fragment,s),C(vn.$$.fragment,s),C(_a.$$.fragment,s),C(ba.$$.fragment,s),C(Cn.$$.fragment,s),C(va.$$.fragment,s),C(Fn.$$.fragment,s),C(En.$$.fragment,s),C($a.$$.fragment,s),C(Ca.$$.fragment,s),C(zn.$$.fragment,s),C(qa.$$.fragment,s),C(qn.$$.fragment,s),C(xn.$$.fragment,s),C(jn.$$.fragment,s),C(xa.$$.fragment,s),C(ja.$$.fragment,s),C(Ln.$$.fragment,s),C(Na.$$.fragment,s),C(On.$$.fragment,s),C(Nn.$$.fragment,s),C(An.$$.fragment,s),C(Aa.$$.fragment,s),C(Da.$$.fragment,s),C(In.$$.fragment,s),C(Wa.$$.fragment,s),C(Sn.$$.fragment,s),C(Bn.$$.fragment,s),C(Ra.$$.fragment,s),C(Ua.$$.fragment,s),C(Rn.$$.fragment,s),C(Va.$$.fragment,s),C(Un.$$.fragment,s),C(Kn.$$.fragment,s),C(Hn.$$.fragment,s),C(Ja.$$.fragment,s),C(Ga.$$.fragment,s),C(Vn.$$.fragment,s),C(er.$$.fragment,s),C(Jn.$$.fragment,s),C(Gn.$$.fragment,s),C(Xn.$$.fragment,s),Ud=!0)},o(s){F(d.$$.fragment,s),F(T.$$.fragment,s),F(P.$$.fragment,s),F(M.$$.fragment,s),F(Ne.$$.fragment,s),F(Z.$$.fragment,s),F(rs.$$.fragment,s),F(ls.$$.fragment,s),F(cs.$$.fragment,s),F(ms.$$.fragment,s),F(ps.$$.fragment,s),F(hs.$$.fragment,s),F(gs.$$.fragment,s),F(bs.$$.fragment,s),F(ks.$$.fragment,s),F(ys.$$.fragment,s),F(Fs.$$.fragment,s),F(Ho.$$.fragment,s),F(Qo.$$.fragment,s),F(Es.$$.fragment,s),F(Ms.$$.fragment,s),F(Ps.$$.fragment,s),F(Jo.$$.fragment,s),F(Go.$$.fragment,s),F(Ls.$$.fragment,s),F(Os.$$.fragment,s),F(Ss.$$.fragment,s),F(Yo.$$.fragment,s),F(Zo.$$.fragment,s),F(en.$$.fragment,s),F(Bs.$$.fragment,s),F(Ws.$$.fragment,s),F(Hs.$$.fragment,s),F(on.$$.fragment,s),F(nn.$$.fragment,s),F(sn.$$.fragment,s),F(an.$$.fragment,s),F(rn.$$.fragment,s),F(Qs.$$.fragment,s),F(Vs.$$.fragment,s),F(Ys.$$.fragment,s),F(dn.$$.fragment,s),F(cn.$$.fragment,s),F(Zs.$$.fragment,s),F(ea.$$.fragment,s),F(sa.$$.fragment,s),F(pn.$$.fragment,s),F(hn.$$.fragment,s),F(un.$$.fragment,s),F(aa.$$.fragment,s),F(ra.$$.fragment,s),F(ca.$$.fragment,s),F(_n.$$.fragment,s),F(bn.$$.fragment,s),F(kn.$$.fragment,s),F(ma.$$.fragment,s),F(pa.$$.fragment,s),F(Tn.$$.fragment,s),F(ga.$$.fragment,s),F(wn.$$.fragment,s),F(vn.$$.fragment,s),F(_a.$$.fragment,s),F(ba.$$.fragment,s),F(Cn.$$.fragment,s),F(va.$$.fragment,s),F(Fn.$$.fragment,s),F(En.$$.fragment,s),F($a.$$.fragment,s),F(Ca.$$.fragment,s),F(zn.$$.fragment,s),F(qa.$$.fragment,s),F(qn.$$.fragment,s),F(xn.$$.fragment,s),F(jn.$$.fragment,s),F(xa.$$.fragment,s),F(ja.$$.fragment,s),F(Ln.$$.fragment,s),F(Na.$$.fragment,s),F(On.$$.fragment,s),F(Nn.$$.fragment,s),F(An.$$.fragment,s),F(Aa.$$.fragment,s),F(Da.$$.fragment,s),F(In.$$.fragment,s),F(Wa.$$.fragment,s),F(Sn.$$.fragment,s),F(Bn.$$.fragment,s),F(Ra.$$.fragment,s),F(Ua.$$.fragment,s),F(Rn.$$.fragment,s),F(Va.$$.fragment,s),F(Un.$$.fragment,s),F(Kn.$$.fragment,s),F(Hn.$$.fragment,s),F(Ja.$$.fragment,s),F(Ga.$$.fragment,s),F(Vn.$$.fragment,s),F(er.$$.fragment,s),F(Jn.$$.fragment,s),F(Gn.$$.fragment,s),F(Xn.$$.fragment,s),Ud=!1},d(s){t(l),s&&t(_),s&&t(c),E(d),s&&t(he),s&&t(I),E(T),s&&t(ue),s&&t(B),s&&t(fe),s&&t(R),s&&t(ge),s&&t(U),s&&t(ne),s&&t(j),s&&t(_e),s&&t(K),s&&t(L),s&&t(se),s&&t(be),s&&t(S),E(P),s&&t(ke),s&&t(f),E(M),s&&t(Se),s&&t(A),E(Ne),s&&t(ye),s&&t(oe),E(Z),E(rs),E(ls),E(cs),E(ms),s&&t(ud),s&&t(ro),E(ps),s&&t(fd),s&&t(mt),E(hs),E(gs),E(bs),s&&t(gd),s&&t(io),E(ks),s&&t(_d),s&&t(Xe),E(ys),E(Fs),E(Ho),E(Qo),s&&t(bd),s&&t(co),E(Es),s&&t(kd),s&&t(pt),E(Ms),E(Ps),E(Jo),E(Go),s&&t(yd),s&&t(po),E(Ls),s&&t(Td),s&&t(ht),E(Os),E(Ss),E(Yo),E(Zo),E(en),s&&t(wd),s&&t(uo),E(Bs),s&&t(vd),s&&t(ut),E(Ws),E(Hs),E(on),E(nn),E(sn),E(an),E(rn),s&&t($d),s&&t(go),E(Qs),s&&t(Cd),s&&t(ft),E(Vs),E(Ys),E(dn),E(cn),s&&t(Fd),s&&t(bo),E(Zs),s&&t(Ed),s&&t(gt),E(ea),E(sa),E(pn),E(hn),E(un),s&&t(Md),s&&t(yo),E(aa),s&&t(zd),s&&t(_t),E(ra),E(ca),E(_n),E(bn),E(kn),s&&t(qd),s&&t(wo),E(ma),s&&t(xd),s&&t(ot),E(pa),E(Tn),E(ga),E(wn),E(vn),s&&t(jd),s&&t($o),E(_a),s&&t(Pd),s&&t(nt),E(ba),E(Cn),E(va),E(Fn),E(En),s&&t(Ld),s&&t(Fo),E($a),s&&t(Od),s&&t(st),E(Ca),E(zn),E(qa),E(qn),E(xn),E(jn),s&&t(Nd),s&&t(Mo),E(xa),s&&t(Ad),s&&t(at),E(ja),E(Ln),E(Na),E(On),E(Nn),E(An),s&&t(Dd),s&&t(qo),E(Aa),s&&t(Id),s&&t(rt),E(Da),E(In),E(Wa),E(Sn),E(Bn),s&&t(Sd),s&&t(jo),E(Ra),s&&t(Bd),s&&t(it),E(Ua),E(Rn),E(Va),E(Un),E(Kn),E(Hn),s&&t(Wd),s&&t(Lo),E(Ja),s&&t(Rd),s&&t(lt),E(Ga),E(Vn),E(er),E(Jn),E(Gn),E(Xn)}}}const GT={local:"camembert",sections:[{local:"overview",title:"Overview"},{local:"transformers.CamembertConfig",title:"CamembertConfig"},{local:"transformers.CamembertTokenizer",title:"CamembertTokenizer"},{local:"transformers.CamembertTokenizerFast",title:"CamembertTokenizerFast"},{local:"transformers.CamembertModel",title:"CamembertModel"},{local:"transformers.CamembertForCausalLM",title:"CamembertForCausalLM"},{local:"transformers.CamembertForMaskedLM",title:"CamembertForMaskedLM"},{local:"transformers.CamembertForSequenceClassification",title:"CamembertForSequenceClassification"},{local:"transformers.CamembertForMultipleChoice",title:"CamembertForMultipleChoice"},{local:"transformers.CamembertForTokenClassification",title:"CamembertForTokenClassification"},{local:"transformers.CamembertForQuestionAnswering",title:"CamembertForQuestionAnswering"},{local:"transformers.TFCamembertModel",title:"TFCamembertModel"},{local:"transformers.TFCamembertForCausalLM",title:"TFCamembertForCasualLM"},{local:"transformers.TFCamembertForMaskedLM",title:"TFCamembertForMaskedLM"},{local:"transformers.TFCamembertForSequenceClassification",title:"TFCamembertForSequenceClassification"},{local:"transformers.TFCamembertForMultipleChoice",title:"TFCamembertForMultipleChoice"},{local:"transformers.TFCamembertForTokenClassification",title:"TFCamembertForTokenClassification"},{local:"transformers.TFCamembertForQuestionAnswering",title:"TFCamembertForQuestionAnswering"}],title:"CamemBERT"};function XT(q){return nT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class sw extends Zy{constructor(l){super();eT(this,l,XT,JT,tT,{})}}export{sw as default,GT as metadata};
