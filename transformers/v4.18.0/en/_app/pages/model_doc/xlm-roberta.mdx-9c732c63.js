import{S as x4,i as R4,s as L4,e as n,k as c,w as T,t as r,M as E4,c as s,d as t,m as p,a,x as y,h as i,b as f,F as e,g as b,y as w,q as $,o as M,B as F,v as z4,L as le}from"../../chunks/vendor-6b77c823.js";import{T as $e}from"../../chunks/Tip-39098574.js";import{D as X}from"../../chunks/Docstring-1088f2fb.js";import{C as de}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Me}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as ie}from"../../chunks/ExampleCodeBlock-5212b321.js";function q4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function C4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaModel
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function j4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function X4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
config = RobertaConfig.from_pretrained("roberta-base")
config.is_decoder = True
model = RobertaForCausalLM.from_pretrained("roberta-base", config=config)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForCausalLM, RobertaConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config = RobertaConfig.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>config.is_decoder = <span class="hljs-literal">True</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForCausalLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function P4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function A4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function O4(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function N4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function I4(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of single-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function D4(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function S4(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
from transformers import RobertaTokenizer, RobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example of multi-label classification:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function W4(x){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function B4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function U4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
import torch

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = RobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function Q4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function H4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
import torch

tokenizer = RobertaTokenizer.from_pretrained("Jean-Baptiste/roberta-large-ner-english")
model = RobertaForTokenClassification.from_pretrained("Jean-Baptiste/roberta-large-ner-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;Jean-Baptiste/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function V4(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function J4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function K4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
import torch

tokenizer = RobertaTokenizer.from_pretrained("deepset/roberta-base-squad2")
model = RobertaForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, RobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function G4(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function Y4(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function Z4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function eR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function tR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function oR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function nR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function sR(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function aR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function rR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function iR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")
model = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function lR(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function dR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function cR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function pR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function hR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function mR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function uR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-large-ner-english")
model = TFRobertaForTokenClassification.from_pretrained("ydshieh/roberta-large-ner-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-large-ner-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function fR(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function gR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),u=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,u),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function _R(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function bR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("ydshieh/roberta-base-squad2")
model = TFRobertaForQuestionAnswering.from_pretrained("ydshieh/roberta-base-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function kR(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function vR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function TR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function yR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function wR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function $R(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function MR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function FR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function xR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMultipleChoice.from_pretrained("roberta-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function RR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function LR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function ER(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(u,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(t)},m(l,u){b(l,d,u),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function zR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForQuestionAnswering.from_pretrained("roberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var u=a(d);g=i(u,"Example:"),u.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,u){b(l,d,u),e(d,g),b(l,h,u),w(m,l,u),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function qR(x){let d,g,h,m,_,l,u,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te,v,L,G,xe,me,O,we,Le,Ee,j,H,ze,Re,N,ye,Fe,ne,qe,ec,bf,em,ro,Ss,kf,Ws,vf,vl,Tf,yf,tm,io,en,tc,Bs,wf,oc,$f,om,Ae,Us,Mf,Dt,Ff,Tl,xf,Rf,yl,Lf,Ef,Qs,zf,qf,Cf,Hs,jf,wl,Xf,Pf,Af,Jt,Vs,Of,nc,Nf,If,Js,$l,Df,sc,Sf,Wf,Ml,Bf,ac,Uf,Qf,tn,Ks,Hf,Gs,Vf,rc,Jf,Kf,Gf,on,Ys,Yf,ic,Zf,eg,Fl,Zs,nm,lo,nn,lc,ea,tg,dc,og,sm,at,ta,ng,yt,sg,cc,ag,rg,xl,ig,lg,Rl,dg,cg,oa,pg,hg,mg,na,ug,Ll,fg,gg,_g,Kt,sa,bg,pc,kg,vg,aa,El,Tg,hc,yg,wg,zl,$g,mc,Mg,Fg,sn,ra,xg,uc,Rg,am,co,an,fc,ia,Lg,gc,Eg,rm,He,la,zg,_c,qg,Cg,da,jg,ql,Xg,Pg,Ag,ca,Og,pa,Ng,Ig,Dg,ha,Sg,Cl,Wg,Bg,Ug,wt,ma,Qg,po,Hg,jl,Vg,Jg,bc,Kg,Gg,Yg,rn,Zg,ln,im,ho,dn,kc,ua,e_,vc,t_,lm,Ve,fa,o_,ga,n_,Tc,s_,a_,r_,_a,i_,Xl,l_,d_,c_,ba,p_,ka,h_,m_,u_,va,f_,Pl,g_,__,b_,$t,Ta,k_,mo,v_,Al,T_,y_,yc,w_,$_,M_,cn,F_,pn,dm,uo,hn,wc,ya,x_,$c,R_,cm,Je,wa,L_,$a,E_,Mc,z_,q_,C_,Ma,j_,Ol,X_,P_,A_,Fa,O_,xa,N_,I_,D_,Ra,S_,Nl,W_,B_,U_,rt,La,Q_,fo,H_,Il,V_,J_,Fc,K_,G_,Y_,mn,Z_,un,eb,fn,pm,go,gn,xc,Ea,tb,Rc,ob,hm,Ke,za,nb,Lc,sb,ab,qa,rb,Dl,ib,lb,db,Ca,cb,ja,pb,hb,mb,Xa,ub,Sl,fb,gb,_b,Qe,Pa,bb,_o,kb,Wl,vb,Tb,Ec,yb,wb,$b,_n,Mb,bn,Fb,kn,xb,vn,Rb,Tn,mm,bo,yn,zc,Aa,Lb,qc,Eb,um,Ge,Oa,zb,Cc,qb,Cb,Na,jb,Bl,Xb,Pb,Ab,Ia,Ob,Da,Nb,Ib,Db,Sa,Sb,Ul,Wb,Bb,Ub,Mt,Wa,Qb,ko,Hb,Ql,Vb,Jb,jc,Kb,Gb,Yb,wn,Zb,$n,fm,vo,Mn,Xc,Ba,ek,Pc,tk,gm,Ye,Ua,ok,Ac,nk,sk,Qa,ak,Hl,rk,ik,lk,Ha,dk,Va,ck,pk,hk,Ja,mk,Vl,uk,fk,gk,it,Ka,_k,To,bk,Jl,kk,vk,Oc,Tk,yk,wk,Fn,$k,xn,Mk,Rn,_m,yo,Ln,Nc,Ga,Fk,Ic,xk,bm,Ze,Ya,Rk,wo,Lk,Dc,Ek,zk,Sc,qk,Ck,jk,Za,Xk,Kl,Pk,Ak,Ok,er,Nk,tr,Ik,Dk,Sk,or,Wk,Gl,Bk,Uk,Qk,lt,nr,Hk,$o,Vk,Yl,Jk,Kk,Wc,Gk,Yk,Zk,En,ev,zn,tv,qn,km,Mo,Cn,Bc,sr,ov,Uc,nv,vm,Oe,ar,sv,Qc,av,rv,rr,iv,Zl,lv,dv,cv,ir,pv,lr,hv,mv,uv,jn,fv,dr,gv,ed,_v,bv,kv,Ft,cr,vv,Fo,Tv,td,yv,wv,Hc,$v,Mv,Fv,Xn,xv,Pn,Tm,xo,An,Vc,pr,Rv,Jc,Lv,ym,Ne,hr,Ev,mr,zv,Kc,qv,Cv,jv,ur,Xv,od,Pv,Av,Ov,fr,Nv,gr,Iv,Dv,Sv,On,Wv,_r,Bv,nd,Uv,Qv,Hv,dt,br,Vv,Ro,Jv,sd,Kv,Gv,Gc,Yv,Zv,eT,Nn,tT,In,oT,Dn,wm,Lo,Sn,Yc,kr,nT,Zc,sT,$m,Ie,vr,aT,ep,rT,iT,Tr,lT,ad,dT,cT,pT,yr,hT,wr,mT,uT,fT,Wn,gT,$r,_T,rd,bT,kT,vT,ct,Mr,TT,Eo,yT,id,wT,$T,tp,MT,FT,xT,Bn,RT,Un,LT,Qn,Mm,zo,Hn,op,Fr,ET,np,zT,Fm,De,xr,qT,sp,CT,jT,Rr,XT,ld,PT,AT,OT,Lr,NT,Er,IT,DT,ST,Vn,WT,zr,BT,dd,UT,QT,HT,xt,qr,VT,qo,JT,cd,KT,GT,ap,YT,ZT,e1,Jn,t1,Kn,xm,Co,Gn,rp,Cr,o1,ip,n1,Rm,Se,jr,s1,lp,a1,r1,Xr,i1,pd,l1,d1,c1,Pr,p1,Ar,h1,m1,u1,Yn,f1,Or,g1,hd,_1,b1,k1,pt,Nr,v1,jo,T1,md,y1,w1,dp,$1,M1,F1,Zn,x1,es,R1,ts,Lm,Xo,os,cp,Ir,L1,pp,E1,Em,We,Dr,z1,Po,q1,hp,C1,j1,mp,X1,P1,A1,Sr,O1,ud,N1,I1,D1,Wr,S1,Br,W1,B1,U1,ns,Q1,Ur,H1,up,V1,J1,K1,ht,Qr,G1,Ao,Y1,fd,Z1,ey,fp,ty,oy,ny,ss,sy,as,ay,rs,zm,Oo,is,gp,Hr,ry,_p,iy,qm,Be,Vr,ly,Jr,dy,gd,cy,py,hy,Kr,my,Gr,uy,fy,gy,bp,_y,by,St,kp,Yr,ky,vy,vp,Zr,Ty,yy,Tp,ei,wy,$y,yp,ti,My,Fy,oi,xy,_d,Ry,Ly,Ey,Rt,ni,zy,No,qy,wp,Cy,jy,$p,Xy,Py,Ay,ls,Oy,ds,Cm,Io,cs,Mp,si,Ny,Fp,Iy,jm,Ue,ai,Dy,Do,Sy,xp,Wy,By,bd,Uy,Qy,Hy,ri,Vy,ii,Jy,Ky,Gy,Rp,Yy,Zy,Wt,Lp,li,ew,tw,Ep,di,ow,nw,zp,ci,sw,aw,qp,pi,rw,iw,hi,lw,kd,dw,cw,pw,Lt,mi,hw,So,mw,Cp,uw,fw,jp,gw,_w,bw,ps,kw,hs,Xm,Wo,ms,Xp,ui,vw,Pp,Tw,Pm,Ce,fi,yw,Ap,ww,$w,gi,Mw,vd,Fw,xw,Rw,_i,Lw,bi,Ew,zw,qw,Op,Cw,jw,Bt,Np,ki,Xw,Pw,Ip,vi,Aw,Ow,Dp,Ti,Nw,Iw,Sp,yi,Dw,Sw,wi,Ww,Td,Bw,Uw,Qw,Et,$i,Hw,Bo,Vw,Wp,Jw,Kw,Bp,Gw,Yw,Zw,us,e$,fs,Am,Uo,gs,Up,Mi,t$,Qp,o$,Om,je,Fi,n$,Hp,s$,a$,xi,r$,yd,i$,l$,d$,Ri,c$,Li,p$,h$,m$,Vp,u$,f$,Ut,Jp,Ei,g$,_$,Kp,zi,b$,k$,Gp,qi,v$,T$,Yp,Ci,y$,w$,ji,$$,wd,M$,F$,x$,zt,Xi,R$,Qo,L$,Zp,E$,z$,eh,q$,C$,j$,_s,X$,bs,Nm,Ho,ks,th,Pi,P$,oh,A$,Im,Xe,Ai,O$,nh,N$,I$,Oi,D$,$d,S$,W$,B$,Ni,U$,Ii,Q$,H$,V$,sh,J$,K$,Qt,ah,Di,G$,Y$,rh,Si,Z$,eM,ih,Wi,tM,oM,lh,Bi,nM,sM,Ui,aM,Md,rM,iM,lM,qt,Qi,dM,Vo,cM,dh,pM,hM,ch,mM,uM,fM,vs,gM,Ts,Dm,Jo,ys,ph,Hi,_M,hh,bM,Sm,Pe,Vi,kM,Ko,vM,mh,TM,yM,uh,wM,$M,MM,Ji,FM,Fd,xM,RM,LM,Ki,EM,Gi,zM,qM,CM,fh,jM,XM,Ht,gh,Yi,PM,AM,_h,Zi,OM,NM,bh,el,IM,DM,kh,tl,SM,WM,ol,BM,xd,UM,QM,HM,Ct,nl,VM,Go,JM,vh,KM,GM,Th,YM,ZM,e0,ws,t0,$s,Wm;return l=new Me({}),ee=new Me({}),ne=new Me({}),Ss=new X({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L37"}}),Bs=new Me({}),Us=new X({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizer.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"},{anchor:"transformers.XLMRobertaTokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"},{anchor:"transformers.XLMRobertaTokenizer.sp_model",description:`<strong>sp_model</strong> (<code>SentencePieceProcessor</code>) &#x2014;
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L55"}}),Vs=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L194",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ks=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L220",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ys=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L248",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zs=new X({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L305"}}),ea=new Me({}),ta=new X({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.XLMRobertaTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.XLMRobertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.XLMRobertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.XLMRobertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.XLMRobertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.XLMRobertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.XLMRobertaTokenizerFast.additional_special_tokens",description:`<strong>additional_special_tokens</strong> (<code>List[str]</code>, <em>optional</em>, defaults to <code>[&quot;&lt;s&gt;NOTUSED&quot;, &quot;&lt;/s&gt;NOTUSED&quot;]</code>) &#x2014;
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L66"}}),sa=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L155",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ra=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L181",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ia=new Me({}),la=new X({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L65"}}),ma=new X({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L741",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new $e({props:{$$slots:{default:[q4]},$$scope:{ctx:x}}}),ln=new ie({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[C4]},$$scope:{ctx:x}}}),ua=new Me({}),fa=new X({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L78"}}),Ta=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.XLMRobertaForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForCausalLM.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.XLMRobertaForCausalLM.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L908",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cn=new $e({props:{$$slots:{default:[j4]},$$scope:{ctx:x}}}),pn=new ie({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[X4]},$$scope:{ctx:x}}}),ya=new Me({}),wa=new X({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L91"}}),La=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1063",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mn=new $e({props:{$$slots:{default:[P4]},$$scope:{ctx:x}}}),un=new ie({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[A4]},$$scope:{ctx:x}}}),fn=new ie({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example-2",$$slots:{default:[O4]},$$scope:{ctx:x}}}),Ea=new Me({}),za=new X({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L107"}}),Pa=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1179",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new $e({props:{$$slots:{default:[N4]},$$scope:{ctx:x}}}),bn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[I4]},$$scope:{ctx:x}}}),kn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[D4]},$$scope:{ctx:x}}}),vn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-3",$$slots:{default:[S4]},$$scope:{ctx:x}}}),Tn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-4",$$slots:{default:[W4]},$$scope:{ctx:x}}}),Aa=new Me({}),Oa=new X({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L123"}}),Wa=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1278",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wn=new $e({props:{$$slots:{default:[B4]},$$scope:{ctx:x}}}),$n=new ie({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[U4]},$$scope:{ctx:x}}}),Ba=new Me({}),Ua=new X({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L139"}}),Ka=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1376",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fn=new $e({props:{$$slots:{default:[Q4]},$$scope:{ctx:x}}}),xn=new ie({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[H4]},$$scope:{ctx:x}}}),Rn=new ie({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example-2",$$slots:{default:[V4]},$$scope:{ctx:x}}}),Ga=new Me({}),Ya=new X({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L155"}}),nr=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_roberta.py#L1481",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),En=new $e({props:{$$slots:{default:[J4]},$$scope:{ctx:x}}}),zn=new ie({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[K4]},$$scope:{ctx:x}}}),qn=new ie({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example-2",$$slots:{default:[G4]},$$scope:{ctx:x}}}),sr=new Me({}),ar=new X({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L80"}}),jn=new $e({props:{$$slots:{default:[Y4]},$$scope:{ctx:x}}}),cr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFXLMRobertaModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFXLMRobertaModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFXLMRobertaModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Xn=new $e({props:{$$slots:{default:[Z4]},$$scope:{ctx:x}}}),Pn=new ie({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[eR]},$$scope:{ctx:x}}}),pr=new Me({}),hr=new X({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L106"}}),On=new $e({props:{$$slots:{default:[tR]},$$scope:{ctx:x}}}),br=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Nn=new $e({props:{$$slots:{default:[oR]},$$scope:{ctx:x}}}),In=new ie({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[nR]},$$scope:{ctx:x}}}),Dn=new ie({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[sR]},$$scope:{ctx:x}}}),kr=new Me({}),vr=new X({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L122"}}),Wn=new $e({props:{$$slots:{default:[aR]},$$scope:{ctx:x}}}),Mr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Bn=new $e({props:{$$slots:{default:[rR]},$$scope:{ctx:x}}}),Un=new ie({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[iR]},$$scope:{ctx:x}}}),Qn=new ie({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[lR]},$$scope:{ctx:x}}}),Fr=new Me({}),xr=new X({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L170"}}),Vn=new $e({props:{$$slots:{default:[dR]},$$scope:{ctx:x}}}),qr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Jn=new $e({props:{$$slots:{default:[cR]},$$scope:{ctx:x}}}),Kn=new ie({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[pR]},$$scope:{ctx:x}}}),Cr=new Me({}),jr=new X({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L138"}}),Yn=new $e({props:{$$slots:{default:[hR]},$$scope:{ctx:x}}}),Nr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new $e({props:{$$slots:{default:[mR]},$$scope:{ctx:x}}}),es=new ie({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[uR]},$$scope:{ctx:x}}}),ts=new ie({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[fR]},$$scope:{ctx:x}}}),Ir=new Me({}),Dr=new X({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L154"}}),ns=new $e({props:{$$slots:{default:[gR]},$$scope:{ctx:x}}}),Qr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ss=new $e({props:{$$slots:{default:[_R]},$$scope:{ctx:x}}}),as=new ie({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[bR]},$$scope:{ctx:x}}}),rs=new ie({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[kR]},$$scope:{ctx:x}}}),Hr=new Me({}),Vr=new X({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L68"}}),ni=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ls=new $e({props:{$$slots:{default:[vR]},$$scope:{ctx:x}}}),ds=new ie({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[TR]},$$scope:{ctx:x}}}),si=new Me({}),ai=new X({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L81"}}),mi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ps=new $e({props:{$$slots:{default:[yR]},$$scope:{ctx:x}}}),hs=new ie({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[wR]},$$scope:{ctx:x}}}),ui=new Me({}),fi=new X({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L97"}}),$i=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),us=new $e({props:{$$slots:{default:[$R]},$$scope:{ctx:x}}}),fs=new ie({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[MR]},$$scope:{ctx:x}}}),Mi=new Me({}),Fi=new X({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L113"}}),Xi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_s=new $e({props:{$$slots:{default:[FR]},$$scope:{ctx:x}}}),bs=new ie({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[xR]},$$scope:{ctx:x}}}),Pi=new Me({}),Ai=new X({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L129"}}),Qi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vs=new $e({props:{$$slots:{default:[RR]},$$scope:{ctx:x}}}),Ts=new ie({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[LR]},$$scope:{ctx:x}}}),Hi=new Me({}),Vi=new X({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L145"}}),nl=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/roberta/modeling_flax_roberta.py#L608",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"
>RobertaConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>start_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ws=new $e({props:{$$slots:{default:[ER]},$$scope:{ctx:x}}}),$s=new ie({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[zR]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),u=c(),R=n("span"),ue=r("XLM-RoBERTa"),J=c(),E=n("h2"),Y=n("a"),D=n("span"),T(ee.$$.fragment),fe=c(),S=n("span"),ge=r("Overview"),ce=c(),V=n("p"),P=r("The XLM-RoBERTa model was proposed in "),te=n("a"),K=r("Unsupervised Cross-lingual Representation Learning at Scale"),z=r(` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),C=c(),se=n("p"),U=r("The abstract from the paper is the following:"),pe=c(),ae=n("p"),W=n("em"),_e=r(`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),he=c(),q=n("p"),be=r("Tips:"),B=c(),Z=n("ul"),oe=n("li"),Q=r(`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),re=n("code"),ke=r("lang"),A=r(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ve=c(),I=n("li"),Te=r("This implementation is the same as RoBERTa. Refer to the "),v=n("a"),L=r("documentation of RoBERTa"),G=r(` for usage examples
as well as the information relative to the inputs and outputs.`),xe=c(),me=n("p"),O=r("This model was contributed by "),we=n("a"),Le=r("stefan-it"),Ee=r(". The original code can be found "),j=n("a"),H=r("here"),ze=r("."),Re=c(),N=n("h2"),ye=n("a"),Fe=n("span"),T(ne.$$.fragment),qe=c(),ec=n("span"),bf=r("XLMRobertaConfig"),em=c(),ro=n("div"),T(Ss.$$.fragment),kf=c(),Ws=n("p"),vf=r("This class overrides "),vl=n("a"),Tf=r("RobertaConfig"),yf=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),tm=c(),io=n("h2"),en=n("a"),tc=n("span"),T(Bs.$$.fragment),wf=c(),oc=n("span"),$f=r("XLMRobertaTokenizer"),om=c(),Ae=n("div"),T(Us.$$.fragment),Mf=c(),Dt=n("p"),Ff=r("Adapted from "),Tl=n("a"),xf=r("RobertaTokenizer"),Rf=r(" and "),yl=n("a"),Lf=r("XLNetTokenizer"),Ef=r(`. Based on
`),Qs=n("a"),zf=r("SentencePiece"),qf=r("."),Cf=c(),Hs=n("p"),jf=r("This tokenizer inherits from "),wl=n("a"),Xf=r("PreTrainedTokenizer"),Pf=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Af=c(),Jt=n("div"),T(Vs.$$.fragment),Of=c(),nc=n("p"),Nf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),If=c(),Js=n("ul"),$l=n("li"),Df=r("single sequence: "),sc=n("code"),Sf=r("<s> X </s>"),Wf=c(),Ml=n("li"),Bf=r("pair of sequences: "),ac=n("code"),Uf=r("<s> A </s></s> B </s>"),Qf=c(),tn=n("div"),T(Ks.$$.fragment),Hf=c(),Gs=n("p"),Vf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rc=n("code"),Jf=r("prepare_for_model"),Kf=r(" method."),Gf=c(),on=n("div"),T(Ys.$$.fragment),Yf=c(),ic=n("p"),Zf=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),eg=c(),Fl=n("div"),T(Zs.$$.fragment),nm=c(),lo=n("h2"),nn=n("a"),lc=n("span"),T(ea.$$.fragment),tg=c(),dc=n("span"),og=r("XLMRobertaTokenizerFast"),sm=c(),at=n("div"),T(ta.$$.fragment),ng=c(),yt=n("p"),sg=r("Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),cc=n("em"),ag=r("tokenizers"),rg=r(` library). Adapted from
`),xl=n("a"),ig=r("RobertaTokenizer"),lg=r(" and "),Rl=n("a"),dg=r("XLNetTokenizer"),cg=r(`. Based on
`),oa=n("a"),pg=r("BPE"),hg=r("."),mg=c(),na=n("p"),ug=r("This tokenizer inherits from "),Ll=n("a"),fg=r("PreTrainedTokenizerFast"),gg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),_g=c(),Kt=n("div"),T(sa.$$.fragment),bg=c(),pc=n("p"),kg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),vg=c(),aa=n("ul"),El=n("li"),Tg=r("single sequence: "),hc=n("code"),yg=r("<s> X </s>"),wg=c(),zl=n("li"),$g=r("pair of sequences: "),mc=n("code"),Mg=r("<s> A </s></s> B </s>"),Fg=c(),sn=n("div"),T(ra.$$.fragment),xg=c(),uc=n("p"),Rg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),am=c(),co=n("h2"),an=n("a"),fc=n("span"),T(ia.$$.fragment),Lg=c(),gc=n("span"),Eg=r("XLMRobertaModel"),rm=c(),He=n("div"),T(la.$$.fragment),zg=c(),_c=n("p"),qg=r("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Cg=c(),da=n("p"),jg=r("This model inherits from "),ql=n("a"),Xg=r("PreTrainedModel"),Pg=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ag=c(),ca=n("p"),Og=r("This model is also a PyTorch "),pa=n("a"),Ng=r("torch.nn.Module"),Ig=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=c(),ha=n("p"),Sg=r("This class overrides "),Cl=n("a"),Wg=r("RobertaModel"),Bg=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ug=c(),wt=n("div"),T(ma.$$.fragment),Qg=c(),po=n("p"),Hg=r("The "),jl=n("a"),Vg=r("RobertaModel"),Jg=r(" forward method, overrides the "),bc=n("code"),Kg=r("__call__"),Gg=r(" special method."),Yg=c(),T(rn.$$.fragment),Zg=c(),T(ln.$$.fragment),im=c(),ho=n("h2"),dn=n("a"),kc=n("span"),T(ua.$$.fragment),e_=c(),vc=n("span"),t_=r("XLMRobertaForCausalLM"),lm=c(),Ve=n("div"),T(fa.$$.fragment),o_=c(),ga=n("p"),n_=r("XLM-RoBERTa Model with a "),Tc=n("code"),s_=r("language modeling"),a_=r(" head on top for CLM fine-tuning."),r_=c(),_a=n("p"),i_=r("This model inherits from "),Xl=n("a"),l_=r("PreTrainedModel"),d_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c_=c(),ba=n("p"),p_=r("This model is also a PyTorch "),ka=n("a"),h_=r("torch.nn.Module"),m_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u_=c(),va=n("p"),f_=r("This class overrides "),Pl=n("a"),g_=r("RobertaForCausalLM"),__=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),b_=c(),$t=n("div"),T(Ta.$$.fragment),k_=c(),mo=n("p"),v_=r("The "),Al=n("a"),T_=r("RobertaForCausalLM"),y_=r(" forward method, overrides the "),yc=n("code"),w_=r("__call__"),$_=r(" special method."),M_=c(),T(cn.$$.fragment),F_=c(),T(pn.$$.fragment),dm=c(),uo=n("h2"),hn=n("a"),wc=n("span"),T(ya.$$.fragment),x_=c(),$c=n("span"),R_=r("XLMRobertaForMaskedLM"),cm=c(),Je=n("div"),T(wa.$$.fragment),L_=c(),$a=n("p"),E_=r("XLM-RoBERTa Model with a "),Mc=n("code"),z_=r("language modeling"),q_=r(" head on top."),C_=c(),Ma=n("p"),j_=r("This model inherits from "),Ol=n("a"),X_=r("PreTrainedModel"),P_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=c(),Fa=n("p"),O_=r("This model is also a PyTorch "),xa=n("a"),N_=r("torch.nn.Module"),I_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),D_=c(),Ra=n("p"),S_=r("This class overrides "),Nl=n("a"),W_=r("RobertaForMaskedLM"),B_=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),U_=c(),rt=n("div"),T(La.$$.fragment),Q_=c(),fo=n("p"),H_=r("The "),Il=n("a"),V_=r("RobertaForMaskedLM"),J_=r(" forward method, overrides the "),Fc=n("code"),K_=r("__call__"),G_=r(" special method."),Y_=c(),T(mn.$$.fragment),Z_=c(),T(un.$$.fragment),eb=c(),T(fn.$$.fragment),pm=c(),go=n("h2"),gn=n("a"),xc=n("span"),T(Ea.$$.fragment),tb=c(),Rc=n("span"),ob=r("XLMRobertaForSequenceClassification"),hm=c(),Ke=n("div"),T(za.$$.fragment),nb=c(),Lc=n("p"),sb=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ab=c(),qa=n("p"),rb=r("This model inherits from "),Dl=n("a"),ib=r("PreTrainedModel"),lb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),db=c(),Ca=n("p"),cb=r("This model is also a PyTorch "),ja=n("a"),pb=r("torch.nn.Module"),hb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mb=c(),Xa=n("p"),ub=r("This class overrides "),Sl=n("a"),fb=r("RobertaForSequenceClassification"),gb=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),_b=c(),Qe=n("div"),T(Pa.$$.fragment),bb=c(),_o=n("p"),kb=r("The "),Wl=n("a"),vb=r("RobertaForSequenceClassification"),Tb=r(" forward method, overrides the "),Ec=n("code"),yb=r("__call__"),wb=r(" special method."),$b=c(),T(_n.$$.fragment),Mb=c(),T(bn.$$.fragment),Fb=c(),T(kn.$$.fragment),xb=c(),T(vn.$$.fragment),Rb=c(),T(Tn.$$.fragment),mm=c(),bo=n("h2"),yn=n("a"),zc=n("span"),T(Aa.$$.fragment),Lb=c(),qc=n("span"),Eb=r("XLMRobertaForMultipleChoice"),um=c(),Ge=n("div"),T(Oa.$$.fragment),zb=c(),Cc=n("p"),qb=r(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cb=c(),Na=n("p"),jb=r("This model inherits from "),Bl=n("a"),Xb=r("PreTrainedModel"),Pb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ab=c(),Ia=n("p"),Ob=r("This model is also a PyTorch "),Da=n("a"),Nb=r("torch.nn.Module"),Ib=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Db=c(),Sa=n("p"),Sb=r("This class overrides "),Ul=n("a"),Wb=r("RobertaForMultipleChoice"),Bb=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ub=c(),Mt=n("div"),T(Wa.$$.fragment),Qb=c(),ko=n("p"),Hb=r("The "),Ql=n("a"),Vb=r("RobertaForMultipleChoice"),Jb=r(" forward method, overrides the "),jc=n("code"),Kb=r("__call__"),Gb=r(" special method."),Yb=c(),T(wn.$$.fragment),Zb=c(),T($n.$$.fragment),fm=c(),vo=n("h2"),Mn=n("a"),Xc=n("span"),T(Ba.$$.fragment),ek=c(),Pc=n("span"),tk=r("XLMRobertaForTokenClassification"),gm=c(),Ye=n("div"),T(Ua.$$.fragment),ok=c(),Ac=n("p"),nk=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),sk=c(),Qa=n("p"),ak=r("This model inherits from "),Hl=n("a"),rk=r("PreTrainedModel"),ik=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lk=c(),Ha=n("p"),dk=r("This model is also a PyTorch "),Va=n("a"),ck=r("torch.nn.Module"),pk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hk=c(),Ja=n("p"),mk=r("This class overrides "),Vl=n("a"),uk=r("RobertaForTokenClassification"),fk=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),gk=c(),it=n("div"),T(Ka.$$.fragment),_k=c(),To=n("p"),bk=r("The "),Jl=n("a"),kk=r("RobertaForTokenClassification"),vk=r(" forward method, overrides the "),Oc=n("code"),Tk=r("__call__"),yk=r(" special method."),wk=c(),T(Fn.$$.fragment),$k=c(),T(xn.$$.fragment),Mk=c(),T(Rn.$$.fragment),_m=c(),yo=n("h2"),Ln=n("a"),Nc=n("span"),T(Ga.$$.fragment),Fk=c(),Ic=n("span"),xk=r("XLMRobertaForQuestionAnswering"),bm=c(),Ze=n("div"),T(Ya.$$.fragment),Rk=c(),wo=n("p"),Lk=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Dc=n("code"),Ek=r("span start logits"),zk=r(" and "),Sc=n("code"),qk=r("span end logits"),Ck=r(")."),jk=c(),Za=n("p"),Xk=r("This model inherits from "),Kl=n("a"),Pk=r("PreTrainedModel"),Ak=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ok=c(),er=n("p"),Nk=r("This model is also a PyTorch "),tr=n("a"),Ik=r("torch.nn.Module"),Dk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sk=c(),or=n("p"),Wk=r("This class overrides "),Gl=n("a"),Bk=r("RobertaForQuestionAnswering"),Uk=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Qk=c(),lt=n("div"),T(nr.$$.fragment),Hk=c(),$o=n("p"),Vk=r("The "),Yl=n("a"),Jk=r("RobertaForQuestionAnswering"),Kk=r(" forward method, overrides the "),Wc=n("code"),Gk=r("__call__"),Yk=r(" special method."),Zk=c(),T(En.$$.fragment),ev=c(),T(zn.$$.fragment),tv=c(),T(qn.$$.fragment),km=c(),Mo=n("h2"),Cn=n("a"),Bc=n("span"),T(sr.$$.fragment),ov=c(),Uc=n("span"),nv=r("TFXLMRobertaModel"),vm=c(),Oe=n("div"),T(ar.$$.fragment),sv=c(),Qc=n("p"),av=r("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),rv=c(),rr=n("p"),iv=r("This model inherits from "),Zl=n("a"),lv=r("TFPreTrainedModel"),dv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cv=c(),ir=n("p"),pv=r("This model is also a "),lr=n("a"),hv=r("tf.keras.Model"),mv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uv=c(),T(jn.$$.fragment),fv=c(),dr=n("p"),gv=r("This class overrides "),ed=n("a"),_v=r("TFRobertaModel"),bv=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),kv=c(),Ft=n("div"),T(cr.$$.fragment),vv=c(),Fo=n("p"),Tv=r("The "),td=n("a"),yv=r("TFRobertaModel"),wv=r(" forward method, overrides the "),Hc=n("code"),$v=r("__call__"),Mv=r(" special method."),Fv=c(),T(Xn.$$.fragment),xv=c(),T(Pn.$$.fragment),Tm=c(),xo=n("h2"),An=n("a"),Vc=n("span"),T(pr.$$.fragment),Rv=c(),Jc=n("span"),Lv=r("TFXLMRobertaForMaskedLM"),ym=c(),Ne=n("div"),T(hr.$$.fragment),Ev=c(),mr=n("p"),zv=r("XLM-RoBERTa Model with a "),Kc=n("code"),qv=r("language modeling"),Cv=r(" head on top."),jv=c(),ur=n("p"),Xv=r("This model inherits from "),od=n("a"),Pv=r("TFPreTrainedModel"),Av=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov=c(),fr=n("p"),Nv=r("This model is also a "),gr=n("a"),Iv=r("tf.keras.Model"),Dv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sv=c(),T(On.$$.fragment),Wv=c(),_r=n("p"),Bv=r("This class overrides "),nd=n("a"),Uv=r("TFRobertaForMaskedLM"),Qv=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Hv=c(),dt=n("div"),T(br.$$.fragment),Vv=c(),Ro=n("p"),Jv=r("The "),sd=n("a"),Kv=r("TFRobertaForMaskedLM"),Gv=r(" forward method, overrides the "),Gc=n("code"),Yv=r("__call__"),Zv=r(" special method."),eT=c(),T(Nn.$$.fragment),tT=c(),T(In.$$.fragment),oT=c(),T(Dn.$$.fragment),wm=c(),Lo=n("h2"),Sn=n("a"),Yc=n("span"),T(kr.$$.fragment),nT=c(),Zc=n("span"),sT=r("TFXLMRobertaForSequenceClassification"),$m=c(),Ie=n("div"),T(vr.$$.fragment),aT=c(),ep=n("p"),rT=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),iT=c(),Tr=n("p"),lT=r("This model inherits from "),ad=n("a"),dT=r("TFPreTrainedModel"),cT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pT=c(),yr=n("p"),hT=r("This model is also a "),wr=n("a"),mT=r("tf.keras.Model"),uT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fT=c(),T(Wn.$$.fragment),gT=c(),$r=n("p"),_T=r("This class overrides "),rd=n("a"),bT=r("TFRobertaForSequenceClassification"),kT=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vT=c(),ct=n("div"),T(Mr.$$.fragment),TT=c(),Eo=n("p"),yT=r("The "),id=n("a"),wT=r("TFRobertaForSequenceClassification"),$T=r(" forward method, overrides the "),tp=n("code"),MT=r("__call__"),FT=r(" special method."),xT=c(),T(Bn.$$.fragment),RT=c(),T(Un.$$.fragment),LT=c(),T(Qn.$$.fragment),Mm=c(),zo=n("h2"),Hn=n("a"),op=n("span"),T(Fr.$$.fragment),ET=c(),np=n("span"),zT=r("TFXLMRobertaForMultipleChoice"),Fm=c(),De=n("div"),T(xr.$$.fragment),qT=c(),sp=n("p"),CT=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),jT=c(),Rr=n("p"),XT=r("This model inherits from "),ld=n("a"),PT=r("TFPreTrainedModel"),AT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OT=c(),Lr=n("p"),NT=r("This model is also a "),Er=n("a"),IT=r("tf.keras.Model"),DT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=c(),T(Vn.$$.fragment),WT=c(),zr=n("p"),BT=r("This class overrides "),dd=n("a"),UT=r("TFRobertaForMultipleChoice"),QT=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),HT=c(),xt=n("div"),T(qr.$$.fragment),VT=c(),qo=n("p"),JT=r("The "),cd=n("a"),KT=r("TFRobertaForMultipleChoice"),GT=r(" forward method, overrides the "),ap=n("code"),YT=r("__call__"),ZT=r(" special method."),e1=c(),T(Jn.$$.fragment),t1=c(),T(Kn.$$.fragment),xm=c(),Co=n("h2"),Gn=n("a"),rp=n("span"),T(Cr.$$.fragment),o1=c(),ip=n("span"),n1=r("TFXLMRobertaForTokenClassification"),Rm=c(),Se=n("div"),T(jr.$$.fragment),s1=c(),lp=n("p"),a1=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),r1=c(),Xr=n("p"),i1=r("This model inherits from "),pd=n("a"),l1=r("TFPreTrainedModel"),d1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c1=c(),Pr=n("p"),p1=r("This model is also a "),Ar=n("a"),h1=r("tf.keras.Model"),m1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),u1=c(),T(Yn.$$.fragment),f1=c(),Or=n("p"),g1=r("This class overrides "),hd=n("a"),_1=r("TFRobertaForTokenClassification"),b1=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),k1=c(),pt=n("div"),T(Nr.$$.fragment),v1=c(),jo=n("p"),T1=r("The "),md=n("a"),y1=r("TFRobertaForTokenClassification"),w1=r(" forward method, overrides the "),dp=n("code"),$1=r("__call__"),M1=r(" special method."),F1=c(),T(Zn.$$.fragment),x1=c(),T(es.$$.fragment),R1=c(),T(ts.$$.fragment),Lm=c(),Xo=n("h2"),os=n("a"),cp=n("span"),T(Ir.$$.fragment),L1=c(),pp=n("span"),E1=r("TFXLMRobertaForQuestionAnswering"),Em=c(),We=n("div"),T(Dr.$$.fragment),z1=c(),Po=n("p"),q1=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=n("code"),C1=r("span start logits"),j1=r(" and "),mp=n("code"),X1=r("span end logits"),P1=r(")."),A1=c(),Sr=n("p"),O1=r("This model inherits from "),ud=n("a"),N1=r("TFPreTrainedModel"),I1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D1=c(),Wr=n("p"),S1=r("This model is also a "),Br=n("a"),W1=r("tf.keras.Model"),B1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),U1=c(),T(ns.$$.fragment),Q1=c(),Ur=n("p"),H1=r("This class overrides "),up=n("code"),V1=r("TFRobertaForQuestionAnsweringSimple"),J1=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),K1=c(),ht=n("div"),T(Qr.$$.fragment),G1=c(),Ao=n("p"),Y1=r("The "),fd=n("a"),Z1=r("TFRobertaForQuestionAnswering"),ey=r(" forward method, overrides the "),fp=n("code"),ty=r("__call__"),oy=r(" special method."),ny=c(),T(ss.$$.fragment),sy=c(),T(as.$$.fragment),ay=c(),T(rs.$$.fragment),zm=c(),Oo=n("h2"),is=n("a"),gp=n("span"),T(Hr.$$.fragment),ry=c(),_p=n("span"),iy=r("FlaxXLMRobertaModel"),qm=c(),Be=n("div"),T(Vr.$$.fragment),ly=c(),Jr=n("p"),dy=r(`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gd=n("a"),cy=r("FlaxPreTrainedModel"),py=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),hy=c(),Kr=n("p"),my=r("This model is also a Flax Linen "),Gr=n("a"),uy=r("flax.linen.Module"),fy=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gy=c(),bp=n("p"),_y=r("Finally, this model supports inherent JAX features such as:"),by=c(),St=n("ul"),kp=n("li"),Yr=n("a"),ky=r("Just-In-Time (JIT) compilation"),vy=c(),vp=n("li"),Zr=n("a"),Ty=r("Automatic Differentiation"),yy=c(),Tp=n("li"),ei=n("a"),wy=r("Vectorization"),$y=c(),yp=n("li"),ti=n("a"),My=r("Parallelization"),Fy=c(),oi=n("p"),xy=r("This class overrides "),_d=n("a"),Ry=r("FlaxRobertaModel"),Ly=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ey=c(),Rt=n("div"),T(ni.$$.fragment),zy=c(),No=n("p"),qy=r("The "),wp=n("code"),Cy=r("FlaxRobertaPreTrainedModel"),jy=r(" forward method, overrides the "),$p=n("code"),Xy=r("__call__"),Py=r(" special method."),Ay=c(),T(ls.$$.fragment),Oy=c(),T(ds.$$.fragment),Cm=c(),Io=n("h2"),cs=n("a"),Mp=n("span"),T(si.$$.fragment),Ny=c(),Fp=n("span"),Iy=r("FlaxXLMRobertaForMaskedLM"),jm=c(),Ue=n("div"),T(ai.$$.fragment),Dy=c(),Do=n("p"),Sy=r("XLM-RoBERTa Model with a "),xp=n("code"),Wy=r("language modeling"),By=r(` head on top.
This model inherits from `),bd=n("a"),Uy=r("FlaxPreTrainedModel"),Qy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hy=c(),ri=n("p"),Vy=r("This model is also a Flax Linen "),ii=n("a"),Jy=r("flax.linen.Module"),Ky=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gy=c(),Rp=n("p"),Yy=r("Finally, this model supports inherent JAX features such as:"),Zy=c(),Wt=n("ul"),Lp=n("li"),li=n("a"),ew=r("Just-In-Time (JIT) compilation"),tw=c(),Ep=n("li"),di=n("a"),ow=r("Automatic Differentiation"),nw=c(),zp=n("li"),ci=n("a"),sw=r("Vectorization"),aw=c(),qp=n("li"),pi=n("a"),rw=r("Parallelization"),iw=c(),hi=n("p"),lw=r("This class overrides "),kd=n("a"),dw=r("FlaxRobertaForMaskedLM"),cw=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),pw=c(),Lt=n("div"),T(mi.$$.fragment),hw=c(),So=n("p"),mw=r("The "),Cp=n("code"),uw=r("FlaxRobertaPreTrainedModel"),fw=r(" forward method, overrides the "),jp=n("code"),gw=r("__call__"),_w=r(" special method."),bw=c(),T(ps.$$.fragment),kw=c(),T(hs.$$.fragment),Xm=c(),Wo=n("h2"),ms=n("a"),Xp=n("span"),T(ui.$$.fragment),vw=c(),Pp=n("span"),Tw=r("FlaxXLMRobertaForSequenceClassification"),Pm=c(),Ce=n("div"),T(fi.$$.fragment),yw=c(),Ap=n("p"),ww=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$w=c(),gi=n("p"),Mw=r("This model inherits from "),vd=n("a"),Fw=r("FlaxPreTrainedModel"),xw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rw=c(),_i=n("p"),Lw=r("This model is also a Flax Linen "),bi=n("a"),Ew=r("flax.linen.Module"),zw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),qw=c(),Op=n("p"),Cw=r("Finally, this model supports inherent JAX features such as:"),jw=c(),Bt=n("ul"),Np=n("li"),ki=n("a"),Xw=r("Just-In-Time (JIT) compilation"),Pw=c(),Ip=n("li"),vi=n("a"),Aw=r("Automatic Differentiation"),Ow=c(),Dp=n("li"),Ti=n("a"),Nw=r("Vectorization"),Iw=c(),Sp=n("li"),yi=n("a"),Dw=r("Parallelization"),Sw=c(),wi=n("p"),Ww=r("This class overrides "),Td=n("a"),Bw=r("FlaxRobertaForSequenceClassification"),Uw=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Qw=c(),Et=n("div"),T($i.$$.fragment),Hw=c(),Bo=n("p"),Vw=r("The "),Wp=n("code"),Jw=r("FlaxRobertaPreTrainedModel"),Kw=r(" forward method, overrides the "),Bp=n("code"),Gw=r("__call__"),Yw=r(" special method."),Zw=c(),T(us.$$.fragment),e$=c(),T(fs.$$.fragment),Am=c(),Uo=n("h2"),gs=n("a"),Up=n("span"),T(Mi.$$.fragment),t$=c(),Qp=n("span"),o$=r("FlaxXLMRobertaForMultipleChoice"),Om=c(),je=n("div"),T(Fi.$$.fragment),n$=c(),Hp=n("p"),s$=r(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),a$=c(),xi=n("p"),r$=r("This model inherits from "),yd=n("a"),i$=r("FlaxPreTrainedModel"),l$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),d$=c(),Ri=n("p"),c$=r("This model is also a Flax Linen "),Li=n("a"),p$=r("flax.linen.Module"),h$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),m$=c(),Vp=n("p"),u$=r("Finally, this model supports inherent JAX features such as:"),f$=c(),Ut=n("ul"),Jp=n("li"),Ei=n("a"),g$=r("Just-In-Time (JIT) compilation"),_$=c(),Kp=n("li"),zi=n("a"),b$=r("Automatic Differentiation"),k$=c(),Gp=n("li"),qi=n("a"),v$=r("Vectorization"),T$=c(),Yp=n("li"),Ci=n("a"),y$=r("Parallelization"),w$=c(),ji=n("p"),$$=r("This class overrides "),wd=n("a"),M$=r("FlaxRobertaForMultipleChoice"),F$=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),x$=c(),zt=n("div"),T(Xi.$$.fragment),R$=c(),Qo=n("p"),L$=r("The "),Zp=n("code"),E$=r("FlaxRobertaPreTrainedModel"),z$=r(" forward method, overrides the "),eh=n("code"),q$=r("__call__"),C$=r(" special method."),j$=c(),T(_s.$$.fragment),X$=c(),T(bs.$$.fragment),Nm=c(),Ho=n("h2"),ks=n("a"),th=n("span"),T(Pi.$$.fragment),P$=c(),oh=n("span"),A$=r("FlaxXLMRobertaForTokenClassification"),Im=c(),Xe=n("div"),T(Ai.$$.fragment),O$=c(),nh=n("p"),N$=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),I$=c(),Oi=n("p"),D$=r("This model inherits from "),$d=n("a"),S$=r("FlaxPreTrainedModel"),W$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),B$=c(),Ni=n("p"),U$=r("This model is also a Flax Linen "),Ii=n("a"),Q$=r("flax.linen.Module"),H$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),V$=c(),sh=n("p"),J$=r("Finally, this model supports inherent JAX features such as:"),K$=c(),Qt=n("ul"),ah=n("li"),Di=n("a"),G$=r("Just-In-Time (JIT) compilation"),Y$=c(),rh=n("li"),Si=n("a"),Z$=r("Automatic Differentiation"),eM=c(),ih=n("li"),Wi=n("a"),tM=r("Vectorization"),oM=c(),lh=n("li"),Bi=n("a"),nM=r("Parallelization"),sM=c(),Ui=n("p"),aM=r("This class overrides "),Md=n("a"),rM=r("FlaxRobertaForTokenClassification"),iM=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),lM=c(),qt=n("div"),T(Qi.$$.fragment),dM=c(),Vo=n("p"),cM=r("The "),dh=n("code"),pM=r("FlaxRobertaPreTrainedModel"),hM=r(" forward method, overrides the "),ch=n("code"),mM=r("__call__"),uM=r(" special method."),fM=c(),T(vs.$$.fragment),gM=c(),T(Ts.$$.fragment),Dm=c(),Jo=n("h2"),ys=n("a"),ph=n("span"),T(Hi.$$.fragment),_M=c(),hh=n("span"),bM=r("FlaxXLMRobertaForQuestionAnswering"),Sm=c(),Pe=n("div"),T(Vi.$$.fragment),kM=c(),Ko=n("p"),vM=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),mh=n("code"),TM=r("span start logits"),yM=r(" and "),uh=n("code"),wM=r("span end logits"),$M=r(")."),MM=c(),Ji=n("p"),FM=r("This model inherits from "),Fd=n("a"),xM=r("FlaxPreTrainedModel"),RM=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),LM=c(),Ki=n("p"),EM=r("This model is also a Flax Linen "),Gi=n("a"),zM=r("flax.linen.Module"),qM=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),CM=c(),fh=n("p"),jM=r("Finally, this model supports inherent JAX features such as:"),XM=c(),Ht=n("ul"),gh=n("li"),Yi=n("a"),PM=r("Just-In-Time (JIT) compilation"),AM=c(),_h=n("li"),Zi=n("a"),OM=r("Automatic Differentiation"),NM=c(),bh=n("li"),el=n("a"),IM=r("Vectorization"),DM=c(),kh=n("li"),tl=n("a"),SM=r("Parallelization"),WM=c(),ol=n("p"),BM=r("This class overrides "),xd=n("a"),UM=r("FlaxRobertaForQuestionAnswering"),QM=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),HM=c(),Ct=n("div"),T(nl.$$.fragment),VM=c(),Go=n("p"),JM=r("The "),vh=n("code"),KM=r("FlaxRobertaPreTrainedModel"),GM=r(" forward method, overrides the "),Th=n("code"),YM=r("__call__"),ZM=r(" special method."),e0=c(),T(ws.$$.fragment),t0=c(),T($s.$$.fragment),this.h()},l(o){const k=E4('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var sl=a(h);m=s(sl,"A",{id:!0,class:!0,href:!0});var yh=a(m);_=s(yh,"SPAN",{});var wh=a(_);y(l.$$.fragment,wh),wh.forEach(t),yh.forEach(t),u=p(sl),R=s(sl,"SPAN",{});var $h=a(R);ue=i($h,"XLM-RoBERTa"),$h.forEach(t),sl.forEach(t),J=p(o),E=s(o,"H2",{class:!0});var al=a(E);Y=s(al,"A",{id:!0,class:!0,href:!0});var Mh=a(Y);D=s(Mh,"SPAN",{});var Fh=a(D);y(ee.$$.fragment,Fh),Fh.forEach(t),Mh.forEach(t),fe=p(al),S=s(al,"SPAN",{});var xh=a(S);ge=i(xh,"Overview"),xh.forEach(t),al.forEach(t),ce=p(o),V=s(o,"P",{});var rl=a(V);P=i(rl,"The XLM-RoBERTa model was proposed in "),te=s(rl,"A",{href:!0,rel:!0});var Rh=a(te);K=i(Rh,"Unsupervised Cross-lingual Representation Learning at Scale"),Rh.forEach(t),z=i(rl,` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),rl.forEach(t),C=p(o),se=s(o,"P",{});var Lh=a(se);U=i(Lh,"The abstract from the paper is the following:"),Lh.forEach(t),pe=p(o),ae=s(o,"P",{});var Eh=a(ae);W=s(Eh,"EM",{});var zh=a(W);_e=i(zh,`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),zh.forEach(t),Eh.forEach(t),he=p(o),q=s(o,"P",{});var qh=a(q);be=i(qh,"Tips:"),qh.forEach(t),B=p(o),Z=s(o,"UL",{});var il=a(Z);oe=s(il,"LI",{});var ll=a(oe);Q=i(ll,`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),re=s(ll,"CODE",{});var Ch=a(re);ke=i(Ch,"lang"),Ch.forEach(t),A=i(ll,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),ll.forEach(t),ve=p(il),I=s(il,"LI",{});var dl=a(I);Te=i(dl,"This implementation is the same as RoBERTa. Refer to the "),v=s(dl,"A",{href:!0});var jh=a(v);L=i(jh,"documentation of RoBERTa"),jh.forEach(t),G=i(dl,` for usage examples
as well as the information relative to the inputs and outputs.`),dl.forEach(t),il.forEach(t),xe=p(o),me=s(o,"P",{});var Yo=a(me);O=i(Yo,"This model was contributed by "),we=s(Yo,"A",{href:!0,rel:!0});var Xh=a(we);Le=i(Xh,"stefan-it"),Xh.forEach(t),Ee=i(Yo,". The original code can be found "),j=s(Yo,"A",{href:!0,rel:!0});var Ph=a(j);H=i(Ph,"here"),Ph.forEach(t),ze=i(Yo,"."),Yo.forEach(t),Re=p(o),N=s(o,"H2",{class:!0});var cl=a(N);ye=s(cl,"A",{id:!0,class:!0,href:!0});var Ah=a(ye);Fe=s(Ah,"SPAN",{});var Oh=a(Fe);y(ne.$$.fragment,Oh),Oh.forEach(t),Ah.forEach(t),qe=p(cl),ec=s(cl,"SPAN",{});var Nh=a(ec);bf=i(Nh,"XLMRobertaConfig"),Nh.forEach(t),cl.forEach(t),em=p(o),ro=s(o,"DIV",{class:!0});var pl=a(ro);y(Ss.$$.fragment,pl),kf=p(pl),Ws=s(pl,"P",{});var hl=a(Ws);vf=i(hl,"This class overrides "),vl=s(hl,"A",{href:!0});var Ih=a(vl);Tf=i(Ih,"RobertaConfig"),Ih.forEach(t),yf=i(hl,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),hl.forEach(t),pl.forEach(t),tm=p(o),io=s(o,"H2",{class:!0});var ml=a(io);en=s(ml,"A",{id:!0,class:!0,href:!0});var Dh=a(en);tc=s(Dh,"SPAN",{});var Sh=a(tc);y(Bs.$$.fragment,Sh),Sh.forEach(t),Dh.forEach(t),wf=p(ml),oc=s(ml,"SPAN",{});var Wh=a(oc);$f=i(Wh,"XLMRobertaTokenizer"),Wh.forEach(t),ml.forEach(t),om=p(o),Ae=s(o,"DIV",{class:!0});var et=a(Ae);y(Us.$$.fragment,et),Mf=p(et),Dt=s(et,"P",{});var Vt=a(Dt);Ff=i(Vt,"Adapted from "),Tl=s(Vt,"A",{href:!0});var Bh=a(Tl);xf=i(Bh,"RobertaTokenizer"),Bh.forEach(t),Rf=i(Vt," and "),yl=s(Vt,"A",{href:!0});var Uh=a(yl);Lf=i(Uh,"XLNetTokenizer"),Uh.forEach(t),Ef=i(Vt,`. Based on
`),Qs=s(Vt,"A",{href:!0,rel:!0});var Qh=a(Qs);zf=i(Qh,"SentencePiece"),Qh.forEach(t),qf=i(Vt,"."),Vt.forEach(t),Cf=p(et),Hs=s(et,"P",{});var ul=a(Hs);jf=i(ul,"This tokenizer inherits from "),wl=s(ul,"A",{href:!0});var Hh=a(wl);Xf=i(Hh,"PreTrainedTokenizer"),Hh.forEach(t),Pf=i(ul,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ul.forEach(t),Af=p(et),Jt=s(et,"DIV",{class:!0});var Zo=a(Jt);y(Vs.$$.fragment,Zo),Of=p(Zo),nc=s(Zo,"P",{});var Vh=a(nc);Nf=i(Vh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Vh.forEach(t),If=p(Zo),Js=s(Zo,"UL",{});var fl=a(Js);$l=s(fl,"LI",{});var Rd=a($l);Df=i(Rd,"single sequence: "),sc=s(Rd,"CODE",{});var Jh=a(sc);Sf=i(Jh,"<s> X </s>"),Jh.forEach(t),Rd.forEach(t),Wf=p(fl),Ml=s(fl,"LI",{});var Ld=a(Ml);Bf=i(Ld,"pair of sequences: "),ac=s(Ld,"CODE",{});var Kh=a(ac);Uf=i(Kh,"<s> A </s></s> B </s>"),Kh.forEach(t),Ld.forEach(t),fl.forEach(t),Zo.forEach(t),Qf=p(et),tn=s(et,"DIV",{class:!0});var gl=a(tn);y(Ks.$$.fragment,gl),Hf=p(gl),Gs=s(gl,"P",{});var _l=a(Gs);Vf=i(_l,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rc=s(_l,"CODE",{});var Gh=a(rc);Jf=i(Gh,"prepare_for_model"),Gh.forEach(t),Kf=i(_l," method."),_l.forEach(t),gl.forEach(t),Gf=p(et),on=s(et,"DIV",{class:!0});var bl=a(on);y(Ys.$$.fragment,bl),Yf=p(bl),ic=s(bl,"P",{});var Yh=a(ic);Zf=i(Yh,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Yh.forEach(t),bl.forEach(t),eg=p(et),Fl=s(et,"DIV",{class:!0});var Zh=a(Fl);y(Zs.$$.fragment,Zh),Zh.forEach(t),et.forEach(t),nm=p(o),lo=s(o,"H2",{class:!0});var kl=a(lo);nn=s(kl,"A",{id:!0,class:!0,href:!0});var s0=a(nn);lc=s(s0,"SPAN",{});var a0=a(lc);y(ea.$$.fragment,a0),a0.forEach(t),s0.forEach(t),tg=p(kl),dc=s(kl,"SPAN",{});var r0=a(dc);og=i(r0,"XLMRobertaTokenizerFast"),r0.forEach(t),kl.forEach(t),sm=p(o),at=s(o,"DIV",{class:!0});var Gt=a(at);y(ta.$$.fragment,Gt),ng=p(Gt),yt=s(Gt,"P",{});var Yt=a(yt);sg=i(Yt,"Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),cc=s(Yt,"EM",{});var i0=a(cc);ag=i(i0,"tokenizers"),i0.forEach(t),rg=i(Yt,` library). Adapted from
`),xl=s(Yt,"A",{href:!0});var l0=a(xl);ig=i(l0,"RobertaTokenizer"),l0.forEach(t),lg=i(Yt," and "),Rl=s(Yt,"A",{href:!0});var d0=a(Rl);dg=i(d0,"XLNetTokenizer"),d0.forEach(t),cg=i(Yt,`. Based on
`),oa=s(Yt,"A",{href:!0,rel:!0});var c0=a(oa);pg=i(c0,"BPE"),c0.forEach(t),hg=i(Yt,"."),Yt.forEach(t),mg=p(Gt),na=s(Gt,"P",{});var Bm=a(na);ug=i(Bm,"This tokenizer inherits from "),Ll=s(Bm,"A",{href:!0});var p0=a(Ll);fg=i(p0,"PreTrainedTokenizerFast"),p0.forEach(t),gg=i(Bm,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Bm.forEach(t),_g=p(Gt),Kt=s(Gt,"DIV",{class:!0});var Ed=a(Kt);y(sa.$$.fragment,Ed),bg=p(Ed),pc=s(Ed,"P",{});var h0=a(pc);kg=i(h0,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),h0.forEach(t),vg=p(Ed),aa=s(Ed,"UL",{});var Um=a(aa);El=s(Um,"LI",{});var o0=a(El);Tg=i(o0,"single sequence: "),hc=s(o0,"CODE",{});var m0=a(hc);yg=i(m0,"<s> X </s>"),m0.forEach(t),o0.forEach(t),wg=p(Um),zl=s(Um,"LI",{});var n0=a(zl);$g=i(n0,"pair of sequences: "),mc=s(n0,"CODE",{});var u0=a(mc);Mg=i(u0,"<s> A </s></s> B </s>"),u0.forEach(t),n0.forEach(t),Um.forEach(t),Ed.forEach(t),Fg=p(Gt),sn=s(Gt,"DIV",{class:!0});var Qm=a(sn);y(ra.$$.fragment,Qm),xg=p(Qm),uc=s(Qm,"P",{});var f0=a(uc);Rg=i(f0,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),f0.forEach(t),Qm.forEach(t),Gt.forEach(t),am=p(o),co=s(o,"H2",{class:!0});var Hm=a(co);an=s(Hm,"A",{id:!0,class:!0,href:!0});var g0=a(an);fc=s(g0,"SPAN",{});var _0=a(fc);y(ia.$$.fragment,_0),_0.forEach(t),g0.forEach(t),Lg=p(Hm),gc=s(Hm,"SPAN",{});var b0=a(gc);Eg=i(b0,"XLMRobertaModel"),b0.forEach(t),Hm.forEach(t),rm=p(o),He=s(o,"DIV",{class:!0});var jt=a(He);y(la.$$.fragment,jt),zg=p(jt),_c=s(jt,"P",{});var k0=a(_c);qg=i(k0,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),k0.forEach(t),Cg=p(jt),da=s(jt,"P",{});var Vm=a(da);jg=i(Vm,"This model inherits from "),ql=s(Vm,"A",{href:!0});var v0=a(ql);Xg=i(v0,"PreTrainedModel"),v0.forEach(t),Pg=i(Vm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vm.forEach(t),Ag=p(jt),ca=s(jt,"P",{});var Jm=a(ca);Og=i(Jm,"This model is also a PyTorch "),pa=s(Jm,"A",{href:!0,rel:!0});var T0=a(pa);Ng=i(T0,"torch.nn.Module"),T0.forEach(t),Ig=i(Jm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jm.forEach(t),Dg=p(jt),ha=s(jt,"P",{});var Km=a(ha);Sg=i(Km,"This class overrides "),Cl=s(Km,"A",{href:!0});var y0=a(Cl);Wg=i(y0,"RobertaModel"),y0.forEach(t),Bg=i(Km,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Km.forEach(t),Ug=p(jt),wt=s(jt,"DIV",{class:!0});var Ms=a(wt);y(ma.$$.fragment,Ms),Qg=p(Ms),po=s(Ms,"P",{});var zd=a(po);Hg=i(zd,"The "),jl=s(zd,"A",{href:!0});var w0=a(jl);Vg=i(w0,"RobertaModel"),w0.forEach(t),Jg=i(zd," forward method, overrides the "),bc=s(zd,"CODE",{});var $0=a(bc);Kg=i($0,"__call__"),$0.forEach(t),Gg=i(zd," special method."),zd.forEach(t),Yg=p(Ms),y(rn.$$.fragment,Ms),Zg=p(Ms),y(ln.$$.fragment,Ms),Ms.forEach(t),jt.forEach(t),im=p(o),ho=s(o,"H2",{class:!0});var Gm=a(ho);dn=s(Gm,"A",{id:!0,class:!0,href:!0});var M0=a(dn);kc=s(M0,"SPAN",{});var F0=a(kc);y(ua.$$.fragment,F0),F0.forEach(t),M0.forEach(t),e_=p(Gm),vc=s(Gm,"SPAN",{});var x0=a(vc);t_=i(x0,"XLMRobertaForCausalLM"),x0.forEach(t),Gm.forEach(t),lm=p(o),Ve=s(o,"DIV",{class:!0});var Xt=a(Ve);y(fa.$$.fragment,Xt),o_=p(Xt),ga=s(Xt,"P",{});var Ym=a(ga);n_=i(Ym,"XLM-RoBERTa Model with a "),Tc=s(Ym,"CODE",{});var R0=a(Tc);s_=i(R0,"language modeling"),R0.forEach(t),a_=i(Ym," head on top for CLM fine-tuning."),Ym.forEach(t),r_=p(Xt),_a=s(Xt,"P",{});var Zm=a(_a);i_=i(Zm,"This model inherits from "),Xl=s(Zm,"A",{href:!0});var L0=a(Xl);l_=i(L0,"PreTrainedModel"),L0.forEach(t),d_=i(Zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zm.forEach(t),c_=p(Xt),ba=s(Xt,"P",{});var eu=a(ba);p_=i(eu,"This model is also a PyTorch "),ka=s(eu,"A",{href:!0,rel:!0});var E0=a(ka);h_=i(E0,"torch.nn.Module"),E0.forEach(t),m_=i(eu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eu.forEach(t),u_=p(Xt),va=s(Xt,"P",{});var tu=a(va);f_=i(tu,"This class overrides "),Pl=s(tu,"A",{href:!0});var z0=a(Pl);g_=i(z0,"RobertaForCausalLM"),z0.forEach(t),__=i(tu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),tu.forEach(t),b_=p(Xt),$t=s(Xt,"DIV",{class:!0});var Fs=a($t);y(Ta.$$.fragment,Fs),k_=p(Fs),mo=s(Fs,"P",{});var qd=a(mo);v_=i(qd,"The "),Al=s(qd,"A",{href:!0});var q0=a(Al);T_=i(q0,"RobertaForCausalLM"),q0.forEach(t),y_=i(qd," forward method, overrides the "),yc=s(qd,"CODE",{});var C0=a(yc);w_=i(C0,"__call__"),C0.forEach(t),$_=i(qd," special method."),qd.forEach(t),M_=p(Fs),y(cn.$$.fragment,Fs),F_=p(Fs),y(pn.$$.fragment,Fs),Fs.forEach(t),Xt.forEach(t),dm=p(o),uo=s(o,"H2",{class:!0});var ou=a(uo);hn=s(ou,"A",{id:!0,class:!0,href:!0});var j0=a(hn);wc=s(j0,"SPAN",{});var X0=a(wc);y(ya.$$.fragment,X0),X0.forEach(t),j0.forEach(t),x_=p(ou),$c=s(ou,"SPAN",{});var P0=a($c);R_=i(P0,"XLMRobertaForMaskedLM"),P0.forEach(t),ou.forEach(t),cm=p(o),Je=s(o,"DIV",{class:!0});var Pt=a(Je);y(wa.$$.fragment,Pt),L_=p(Pt),$a=s(Pt,"P",{});var nu=a($a);E_=i(nu,"XLM-RoBERTa Model with a "),Mc=s(nu,"CODE",{});var A0=a(Mc);z_=i(A0,"language modeling"),A0.forEach(t),q_=i(nu," head on top."),nu.forEach(t),C_=p(Pt),Ma=s(Pt,"P",{});var su=a(Ma);j_=i(su,"This model inherits from "),Ol=s(su,"A",{href:!0});var O0=a(Ol);X_=i(O0,"PreTrainedModel"),O0.forEach(t),P_=i(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(t),A_=p(Pt),Fa=s(Pt,"P",{});var au=a(Fa);O_=i(au,"This model is also a PyTorch "),xa=s(au,"A",{href:!0,rel:!0});var N0=a(xa);N_=i(N0,"torch.nn.Module"),N0.forEach(t),I_=i(au,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au.forEach(t),D_=p(Pt),Ra=s(Pt,"P",{});var ru=a(Ra);S_=i(ru,"This class overrides "),Nl=s(ru,"A",{href:!0});var I0=a(Nl);W_=i(I0,"RobertaForMaskedLM"),I0.forEach(t),B_=i(ru,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ru.forEach(t),U_=p(Pt),rt=s(Pt,"DIV",{class:!0});var Zt=a(rt);y(La.$$.fragment,Zt),Q_=p(Zt),fo=s(Zt,"P",{});var Cd=a(fo);H_=i(Cd,"The "),Il=s(Cd,"A",{href:!0});var D0=a(Il);V_=i(D0,"RobertaForMaskedLM"),D0.forEach(t),J_=i(Cd," forward method, overrides the "),Fc=s(Cd,"CODE",{});var S0=a(Fc);K_=i(S0,"__call__"),S0.forEach(t),G_=i(Cd," special method."),Cd.forEach(t),Y_=p(Zt),y(mn.$$.fragment,Zt),Z_=p(Zt),y(un.$$.fragment,Zt),eb=p(Zt),y(fn.$$.fragment,Zt),Zt.forEach(t),Pt.forEach(t),pm=p(o),go=s(o,"H2",{class:!0});var iu=a(go);gn=s(iu,"A",{id:!0,class:!0,href:!0});var W0=a(gn);xc=s(W0,"SPAN",{});var B0=a(xc);y(Ea.$$.fragment,B0),B0.forEach(t),W0.forEach(t),tb=p(iu),Rc=s(iu,"SPAN",{});var U0=a(Rc);ob=i(U0,"XLMRobertaForSequenceClassification"),U0.forEach(t),iu.forEach(t),hm=p(o),Ke=s(o,"DIV",{class:!0});var At=a(Ke);y(za.$$.fragment,At),nb=p(At),Lc=s(At,"P",{});var Q0=a(Lc);sb=i(Q0,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Q0.forEach(t),ab=p(At),qa=s(At,"P",{});var lu=a(qa);rb=i(lu,"This model inherits from "),Dl=s(lu,"A",{href:!0});var H0=a(Dl);ib=i(H0,"PreTrainedModel"),H0.forEach(t),lb=i(lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu.forEach(t),db=p(At),Ca=s(At,"P",{});var du=a(Ca);cb=i(du,"This model is also a PyTorch "),ja=s(du,"A",{href:!0,rel:!0});var V0=a(ja);pb=i(V0,"torch.nn.Module"),V0.forEach(t),hb=i(du,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),du.forEach(t),mb=p(At),Xa=s(At,"P",{});var cu=a(Xa);ub=i(cu,"This class overrides "),Sl=s(cu,"A",{href:!0});var J0=a(Sl);fb=i(J0,"RobertaForSequenceClassification"),J0.forEach(t),gb=i(cu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),cu.forEach(t),_b=p(At),Qe=s(At,"DIV",{class:!0});var mt=a(Qe);y(Pa.$$.fragment,mt),bb=p(mt),_o=s(mt,"P",{});var jd=a(_o);kb=i(jd,"The "),Wl=s(jd,"A",{href:!0});var K0=a(Wl);vb=i(K0,"RobertaForSequenceClassification"),K0.forEach(t),Tb=i(jd," forward method, overrides the "),Ec=s(jd,"CODE",{});var G0=a(Ec);yb=i(G0,"__call__"),G0.forEach(t),wb=i(jd," special method."),jd.forEach(t),$b=p(mt),y(_n.$$.fragment,mt),Mb=p(mt),y(bn.$$.fragment,mt),Fb=p(mt),y(kn.$$.fragment,mt),xb=p(mt),y(vn.$$.fragment,mt),Rb=p(mt),y(Tn.$$.fragment,mt),mt.forEach(t),At.forEach(t),mm=p(o),bo=s(o,"H2",{class:!0});var pu=a(bo);yn=s(pu,"A",{id:!0,class:!0,href:!0});var Y0=a(yn);zc=s(Y0,"SPAN",{});var Z0=a(zc);y(Aa.$$.fragment,Z0),Z0.forEach(t),Y0.forEach(t),Lb=p(pu),qc=s(pu,"SPAN",{});var e2=a(qc);Eb=i(e2,"XLMRobertaForMultipleChoice"),e2.forEach(t),pu.forEach(t),um=p(o),Ge=s(o,"DIV",{class:!0});var Ot=a(Ge);y(Oa.$$.fragment,Ot),zb=p(Ot),Cc=s(Ot,"P",{});var t2=a(Cc);qb=i(t2,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),t2.forEach(t),Cb=p(Ot),Na=s(Ot,"P",{});var hu=a(Na);jb=i(hu,"This model inherits from "),Bl=s(hu,"A",{href:!0});var o2=a(Bl);Xb=i(o2,"PreTrainedModel"),o2.forEach(t),Pb=i(hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu.forEach(t),Ab=p(Ot),Ia=s(Ot,"P",{});var mu=a(Ia);Ob=i(mu,"This model is also a PyTorch "),Da=s(mu,"A",{href:!0,rel:!0});var n2=a(Da);Nb=i(n2,"torch.nn.Module"),n2.forEach(t),Ib=i(mu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mu.forEach(t),Db=p(Ot),Sa=s(Ot,"P",{});var uu=a(Sa);Sb=i(uu,"This class overrides "),Ul=s(uu,"A",{href:!0});var s2=a(Ul);Wb=i(s2,"RobertaForMultipleChoice"),s2.forEach(t),Bb=i(uu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),uu.forEach(t),Ub=p(Ot),Mt=s(Ot,"DIV",{class:!0});var xs=a(Mt);y(Wa.$$.fragment,xs),Qb=p(xs),ko=s(xs,"P",{});var Xd=a(ko);Hb=i(Xd,"The "),Ql=s(Xd,"A",{href:!0});var a2=a(Ql);Vb=i(a2,"RobertaForMultipleChoice"),a2.forEach(t),Jb=i(Xd," forward method, overrides the "),jc=s(Xd,"CODE",{});var r2=a(jc);Kb=i(r2,"__call__"),r2.forEach(t),Gb=i(Xd," special method."),Xd.forEach(t),Yb=p(xs),y(wn.$$.fragment,xs),Zb=p(xs),y($n.$$.fragment,xs),xs.forEach(t),Ot.forEach(t),fm=p(o),vo=s(o,"H2",{class:!0});var fu=a(vo);Mn=s(fu,"A",{id:!0,class:!0,href:!0});var i2=a(Mn);Xc=s(i2,"SPAN",{});var l2=a(Xc);y(Ba.$$.fragment,l2),l2.forEach(t),i2.forEach(t),ek=p(fu),Pc=s(fu,"SPAN",{});var d2=a(Pc);tk=i(d2,"XLMRobertaForTokenClassification"),d2.forEach(t),fu.forEach(t),gm=p(o),Ye=s(o,"DIV",{class:!0});var Nt=a(Ye);y(Ua.$$.fragment,Nt),ok=p(Nt),Ac=s(Nt,"P",{});var c2=a(Ac);nk=i(c2,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),c2.forEach(t),sk=p(Nt),Qa=s(Nt,"P",{});var gu=a(Qa);ak=i(gu,"This model inherits from "),Hl=s(gu,"A",{href:!0});var p2=a(Hl);rk=i(p2,"PreTrainedModel"),p2.forEach(t),ik=i(gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gu.forEach(t),lk=p(Nt),Ha=s(Nt,"P",{});var _u=a(Ha);dk=i(_u,"This model is also a PyTorch "),Va=s(_u,"A",{href:!0,rel:!0});var h2=a(Va);ck=i(h2,"torch.nn.Module"),h2.forEach(t),pk=i(_u,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_u.forEach(t),hk=p(Nt),Ja=s(Nt,"P",{});var bu=a(Ja);mk=i(bu,"This class overrides "),Vl=s(bu,"A",{href:!0});var m2=a(Vl);uk=i(m2,"RobertaForTokenClassification"),m2.forEach(t),fk=i(bu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),bu.forEach(t),gk=p(Nt),it=s(Nt,"DIV",{class:!0});var eo=a(it);y(Ka.$$.fragment,eo),_k=p(eo),To=s(eo,"P",{});var Pd=a(To);bk=i(Pd,"The "),Jl=s(Pd,"A",{href:!0});var u2=a(Jl);kk=i(u2,"RobertaForTokenClassification"),u2.forEach(t),vk=i(Pd," forward method, overrides the "),Oc=s(Pd,"CODE",{});var f2=a(Oc);Tk=i(f2,"__call__"),f2.forEach(t),yk=i(Pd," special method."),Pd.forEach(t),wk=p(eo),y(Fn.$$.fragment,eo),$k=p(eo),y(xn.$$.fragment,eo),Mk=p(eo),y(Rn.$$.fragment,eo),eo.forEach(t),Nt.forEach(t),_m=p(o),yo=s(o,"H2",{class:!0});var ku=a(yo);Ln=s(ku,"A",{id:!0,class:!0,href:!0});var g2=a(Ln);Nc=s(g2,"SPAN",{});var _2=a(Nc);y(Ga.$$.fragment,_2),_2.forEach(t),g2.forEach(t),Fk=p(ku),Ic=s(ku,"SPAN",{});var b2=a(Ic);xk=i(b2,"XLMRobertaForQuestionAnswering"),b2.forEach(t),ku.forEach(t),bm=p(o),Ze=s(o,"DIV",{class:!0});var It=a(Ze);y(Ya.$$.fragment,It),Rk=p(It),wo=s(It,"P",{});var Ad=a(wo);Lk=i(Ad,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Dc=s(Ad,"CODE",{});var k2=a(Dc);Ek=i(k2,"span start logits"),k2.forEach(t),zk=i(Ad," and "),Sc=s(Ad,"CODE",{});var v2=a(Sc);qk=i(v2,"span end logits"),v2.forEach(t),Ck=i(Ad,")."),Ad.forEach(t),jk=p(It),Za=s(It,"P",{});var vu=a(Za);Xk=i(vu,"This model inherits from "),Kl=s(vu,"A",{href:!0});var T2=a(Kl);Pk=i(T2,"PreTrainedModel"),T2.forEach(t),Ak=i(vu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vu.forEach(t),Ok=p(It),er=s(It,"P",{});var Tu=a(er);Nk=i(Tu,"This model is also a PyTorch "),tr=s(Tu,"A",{href:!0,rel:!0});var y2=a(tr);Ik=i(y2,"torch.nn.Module"),y2.forEach(t),Dk=i(Tu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tu.forEach(t),Sk=p(It),or=s(It,"P",{});var yu=a(or);Wk=i(yu,"This class overrides "),Gl=s(yu,"A",{href:!0});var w2=a(Gl);Bk=i(w2,"RobertaForQuestionAnswering"),w2.forEach(t),Uk=i(yu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),yu.forEach(t),Qk=p(It),lt=s(It,"DIV",{class:!0});var to=a(lt);y(nr.$$.fragment,to),Hk=p(to),$o=s(to,"P",{});var Od=a($o);Vk=i(Od,"The "),Yl=s(Od,"A",{href:!0});var $2=a(Yl);Jk=i($2,"RobertaForQuestionAnswering"),$2.forEach(t),Kk=i(Od," forward method, overrides the "),Wc=s(Od,"CODE",{});var M2=a(Wc);Gk=i(M2,"__call__"),M2.forEach(t),Yk=i(Od," special method."),Od.forEach(t),Zk=p(to),y(En.$$.fragment,to),ev=p(to),y(zn.$$.fragment,to),tv=p(to),y(qn.$$.fragment,to),to.forEach(t),It.forEach(t),km=p(o),Mo=s(o,"H2",{class:!0});var wu=a(Mo);Cn=s(wu,"A",{id:!0,class:!0,href:!0});var F2=a(Cn);Bc=s(F2,"SPAN",{});var x2=a(Bc);y(sr.$$.fragment,x2),x2.forEach(t),F2.forEach(t),ov=p(wu),Uc=s(wu,"SPAN",{});var R2=a(Uc);nv=i(R2,"TFXLMRobertaModel"),R2.forEach(t),wu.forEach(t),vm=p(o),Oe=s(o,"DIV",{class:!0});var ut=a(Oe);y(ar.$$.fragment,ut),sv=p(ut),Qc=s(ut,"P",{});var L2=a(Qc);av=i(L2,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),L2.forEach(t),rv=p(ut),rr=s(ut,"P",{});var $u=a(rr);iv=i($u,"This model inherits from "),Zl=s($u,"A",{href:!0});var E2=a(Zl);lv=i(E2,"TFPreTrainedModel"),E2.forEach(t),dv=i($u,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$u.forEach(t),cv=p(ut),ir=s(ut,"P",{});var Mu=a(ir);pv=i(Mu,"This model is also a "),lr=s(Mu,"A",{href:!0,rel:!0});var z2=a(lr);hv=i(z2,"tf.keras.Model"),z2.forEach(t),mv=i(Mu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mu.forEach(t),uv=p(ut),y(jn.$$.fragment,ut),fv=p(ut),dr=s(ut,"P",{});var Fu=a(dr);gv=i(Fu,"This class overrides "),ed=s(Fu,"A",{href:!0});var q2=a(ed);_v=i(q2,"TFRobertaModel"),q2.forEach(t),bv=i(Fu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Fu.forEach(t),kv=p(ut),Ft=s(ut,"DIV",{class:!0});var Rs=a(Ft);y(cr.$$.fragment,Rs),vv=p(Rs),Fo=s(Rs,"P",{});var Nd=a(Fo);Tv=i(Nd,"The "),td=s(Nd,"A",{href:!0});var C2=a(td);yv=i(C2,"TFRobertaModel"),C2.forEach(t),wv=i(Nd," forward method, overrides the "),Hc=s(Nd,"CODE",{});var j2=a(Hc);$v=i(j2,"__call__"),j2.forEach(t),Mv=i(Nd," special method."),Nd.forEach(t),Fv=p(Rs),y(Xn.$$.fragment,Rs),xv=p(Rs),y(Pn.$$.fragment,Rs),Rs.forEach(t),ut.forEach(t),Tm=p(o),xo=s(o,"H2",{class:!0});var xu=a(xo);An=s(xu,"A",{id:!0,class:!0,href:!0});var X2=a(An);Vc=s(X2,"SPAN",{});var P2=a(Vc);y(pr.$$.fragment,P2),P2.forEach(t),X2.forEach(t),Rv=p(xu),Jc=s(xu,"SPAN",{});var A2=a(Jc);Lv=i(A2,"TFXLMRobertaForMaskedLM"),A2.forEach(t),xu.forEach(t),ym=p(o),Ne=s(o,"DIV",{class:!0});var ft=a(Ne);y(hr.$$.fragment,ft),Ev=p(ft),mr=s(ft,"P",{});var Ru=a(mr);zv=i(Ru,"XLM-RoBERTa Model with a "),Kc=s(Ru,"CODE",{});var O2=a(Kc);qv=i(O2,"language modeling"),O2.forEach(t),Cv=i(Ru," head on top."),Ru.forEach(t),jv=p(ft),ur=s(ft,"P",{});var Lu=a(ur);Xv=i(Lu,"This model inherits from "),od=s(Lu,"A",{href:!0});var N2=a(od);Pv=i(N2,"TFPreTrainedModel"),N2.forEach(t),Av=i(Lu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lu.forEach(t),Ov=p(ft),fr=s(ft,"P",{});var Eu=a(fr);Nv=i(Eu,"This model is also a "),gr=s(Eu,"A",{href:!0,rel:!0});var I2=a(gr);Iv=i(I2,"tf.keras.Model"),I2.forEach(t),Dv=i(Eu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Eu.forEach(t),Sv=p(ft),y(On.$$.fragment,ft),Wv=p(ft),_r=s(ft,"P",{});var zu=a(_r);Bv=i(zu,"This class overrides "),nd=s(zu,"A",{href:!0});var D2=a(nd);Uv=i(D2,"TFRobertaForMaskedLM"),D2.forEach(t),Qv=i(zu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),zu.forEach(t),Hv=p(ft),dt=s(ft,"DIV",{class:!0});var oo=a(dt);y(br.$$.fragment,oo),Vv=p(oo),Ro=s(oo,"P",{});var Id=a(Ro);Jv=i(Id,"The "),sd=s(Id,"A",{href:!0});var S2=a(sd);Kv=i(S2,"TFRobertaForMaskedLM"),S2.forEach(t),Gv=i(Id," forward method, overrides the "),Gc=s(Id,"CODE",{});var W2=a(Gc);Yv=i(W2,"__call__"),W2.forEach(t),Zv=i(Id," special method."),Id.forEach(t),eT=p(oo),y(Nn.$$.fragment,oo),tT=p(oo),y(In.$$.fragment,oo),oT=p(oo),y(Dn.$$.fragment,oo),oo.forEach(t),ft.forEach(t),wm=p(o),Lo=s(o,"H2",{class:!0});var qu=a(Lo);Sn=s(qu,"A",{id:!0,class:!0,href:!0});var B2=a(Sn);Yc=s(B2,"SPAN",{});var U2=a(Yc);y(kr.$$.fragment,U2),U2.forEach(t),B2.forEach(t),nT=p(qu),Zc=s(qu,"SPAN",{});var Q2=a(Zc);sT=i(Q2,"TFXLMRobertaForSequenceClassification"),Q2.forEach(t),qu.forEach(t),$m=p(o),Ie=s(o,"DIV",{class:!0});var gt=a(Ie);y(vr.$$.fragment,gt),aT=p(gt),ep=s(gt,"P",{});var H2=a(ep);rT=i(H2,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),H2.forEach(t),iT=p(gt),Tr=s(gt,"P",{});var Cu=a(Tr);lT=i(Cu,"This model inherits from "),ad=s(Cu,"A",{href:!0});var V2=a(ad);dT=i(V2,"TFPreTrainedModel"),V2.forEach(t),cT=i(Cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu.forEach(t),pT=p(gt),yr=s(gt,"P",{});var ju=a(yr);hT=i(ju,"This model is also a "),wr=s(ju,"A",{href:!0,rel:!0});var J2=a(wr);mT=i(J2,"tf.keras.Model"),J2.forEach(t),uT=i(ju,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju.forEach(t),fT=p(gt),y(Wn.$$.fragment,gt),gT=p(gt),$r=s(gt,"P",{});var Xu=a($r);_T=i(Xu,"This class overrides "),rd=s(Xu,"A",{href:!0});var K2=a(rd);bT=i(K2,"TFRobertaForSequenceClassification"),K2.forEach(t),kT=i(Xu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Xu.forEach(t),vT=p(gt),ct=s(gt,"DIV",{class:!0});var no=a(ct);y(Mr.$$.fragment,no),TT=p(no),Eo=s(no,"P",{});var Dd=a(Eo);yT=i(Dd,"The "),id=s(Dd,"A",{href:!0});var G2=a(id);wT=i(G2,"TFRobertaForSequenceClassification"),G2.forEach(t),$T=i(Dd," forward method, overrides the "),tp=s(Dd,"CODE",{});var Y2=a(tp);MT=i(Y2,"__call__"),Y2.forEach(t),FT=i(Dd," special method."),Dd.forEach(t),xT=p(no),y(Bn.$$.fragment,no),RT=p(no),y(Un.$$.fragment,no),LT=p(no),y(Qn.$$.fragment,no),no.forEach(t),gt.forEach(t),Mm=p(o),zo=s(o,"H2",{class:!0});var Pu=a(zo);Hn=s(Pu,"A",{id:!0,class:!0,href:!0});var Z2=a(Hn);op=s(Z2,"SPAN",{});var eF=a(op);y(Fr.$$.fragment,eF),eF.forEach(t),Z2.forEach(t),ET=p(Pu),np=s(Pu,"SPAN",{});var tF=a(np);zT=i(tF,"TFXLMRobertaForMultipleChoice"),tF.forEach(t),Pu.forEach(t),Fm=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(xr.$$.fragment,_t),qT=p(_t),sp=s(_t,"P",{});var oF=a(sp);CT=i(oF,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),oF.forEach(t),jT=p(_t),Rr=s(_t,"P",{});var Au=a(Rr);XT=i(Au,"This model inherits from "),ld=s(Au,"A",{href:!0});var nF=a(ld);PT=i(nF,"TFPreTrainedModel"),nF.forEach(t),AT=i(Au,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au.forEach(t),OT=p(_t),Lr=s(_t,"P",{});var Ou=a(Lr);NT=i(Ou,"This model is also a "),Er=s(Ou,"A",{href:!0,rel:!0});var sF=a(Er);IT=i(sF,"tf.keras.Model"),sF.forEach(t),DT=i(Ou,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ou.forEach(t),ST=p(_t),y(Vn.$$.fragment,_t),WT=p(_t),zr=s(_t,"P",{});var Nu=a(zr);BT=i(Nu,"This class overrides "),dd=s(Nu,"A",{href:!0});var aF=a(dd);UT=i(aF,"TFRobertaForMultipleChoice"),aF.forEach(t),QT=i(Nu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Nu.forEach(t),HT=p(_t),xt=s(_t,"DIV",{class:!0});var Ls=a(xt);y(qr.$$.fragment,Ls),VT=p(Ls),qo=s(Ls,"P",{});var Sd=a(qo);JT=i(Sd,"The "),cd=s(Sd,"A",{href:!0});var rF=a(cd);KT=i(rF,"TFRobertaForMultipleChoice"),rF.forEach(t),GT=i(Sd," forward method, overrides the "),ap=s(Sd,"CODE",{});var iF=a(ap);YT=i(iF,"__call__"),iF.forEach(t),ZT=i(Sd," special method."),Sd.forEach(t),e1=p(Ls),y(Jn.$$.fragment,Ls),t1=p(Ls),y(Kn.$$.fragment,Ls),Ls.forEach(t),_t.forEach(t),xm=p(o),Co=s(o,"H2",{class:!0});var Iu=a(Co);Gn=s(Iu,"A",{id:!0,class:!0,href:!0});var lF=a(Gn);rp=s(lF,"SPAN",{});var dF=a(rp);y(Cr.$$.fragment,dF),dF.forEach(t),lF.forEach(t),o1=p(Iu),ip=s(Iu,"SPAN",{});var cF=a(ip);n1=i(cF,"TFXLMRobertaForTokenClassification"),cF.forEach(t),Iu.forEach(t),Rm=p(o),Se=s(o,"DIV",{class:!0});var bt=a(Se);y(jr.$$.fragment,bt),s1=p(bt),lp=s(bt,"P",{});var pF=a(lp);a1=i(pF,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),pF.forEach(t),r1=p(bt),Xr=s(bt,"P",{});var Du=a(Xr);i1=i(Du,"This model inherits from "),pd=s(Du,"A",{href:!0});var hF=a(pd);l1=i(hF,"TFPreTrainedModel"),hF.forEach(t),d1=i(Du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Du.forEach(t),c1=p(bt),Pr=s(bt,"P",{});var Su=a(Pr);p1=i(Su,"This model is also a "),Ar=s(Su,"A",{href:!0,rel:!0});var mF=a(Ar);h1=i(mF,"tf.keras.Model"),mF.forEach(t),m1=i(Su,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su.forEach(t),u1=p(bt),y(Yn.$$.fragment,bt),f1=p(bt),Or=s(bt,"P",{});var Wu=a(Or);g1=i(Wu,"This class overrides "),hd=s(Wu,"A",{href:!0});var uF=a(hd);_1=i(uF,"TFRobertaForTokenClassification"),uF.forEach(t),b1=i(Wu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Wu.forEach(t),k1=p(bt),pt=s(bt,"DIV",{class:!0});var so=a(pt);y(Nr.$$.fragment,so),v1=p(so),jo=s(so,"P",{});var Wd=a(jo);T1=i(Wd,"The "),md=s(Wd,"A",{href:!0});var fF=a(md);y1=i(fF,"TFRobertaForTokenClassification"),fF.forEach(t),w1=i(Wd," forward method, overrides the "),dp=s(Wd,"CODE",{});var gF=a(dp);$1=i(gF,"__call__"),gF.forEach(t),M1=i(Wd," special method."),Wd.forEach(t),F1=p(so),y(Zn.$$.fragment,so),x1=p(so),y(es.$$.fragment,so),R1=p(so),y(ts.$$.fragment,so),so.forEach(t),bt.forEach(t),Lm=p(o),Xo=s(o,"H2",{class:!0});var Bu=a(Xo);os=s(Bu,"A",{id:!0,class:!0,href:!0});var _F=a(os);cp=s(_F,"SPAN",{});var bF=a(cp);y(Ir.$$.fragment,bF),bF.forEach(t),_F.forEach(t),L1=p(Bu),pp=s(Bu,"SPAN",{});var kF=a(pp);E1=i(kF,"TFXLMRobertaForQuestionAnswering"),kF.forEach(t),Bu.forEach(t),Em=p(o),We=s(o,"DIV",{class:!0});var kt=a(We);y(Dr.$$.fragment,kt),z1=p(kt),Po=s(kt,"P",{});var Bd=a(Po);q1=i(Bd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=s(Bd,"CODE",{});var vF=a(hp);C1=i(vF,"span start logits"),vF.forEach(t),j1=i(Bd," and "),mp=s(Bd,"CODE",{});var TF=a(mp);X1=i(TF,"span end logits"),TF.forEach(t),P1=i(Bd,")."),Bd.forEach(t),A1=p(kt),Sr=s(kt,"P",{});var Uu=a(Sr);O1=i(Uu,"This model inherits from "),ud=s(Uu,"A",{href:!0});var yF=a(ud);N1=i(yF,"TFPreTrainedModel"),yF.forEach(t),I1=i(Uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uu.forEach(t),D1=p(kt),Wr=s(kt,"P",{});var Qu=a(Wr);S1=i(Qu,"This model is also a "),Br=s(Qu,"A",{href:!0,rel:!0});var wF=a(Br);W1=i(wF,"tf.keras.Model"),wF.forEach(t),B1=i(Qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qu.forEach(t),U1=p(kt),y(ns.$$.fragment,kt),Q1=p(kt),Ur=s(kt,"P",{});var Hu=a(Ur);H1=i(Hu,"This class overrides "),up=s(Hu,"CODE",{});var $F=a(up);V1=i($F,"TFRobertaForQuestionAnsweringSimple"),$F.forEach(t),J1=i(Hu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Hu.forEach(t),K1=p(kt),ht=s(kt,"DIV",{class:!0});var ao=a(ht);y(Qr.$$.fragment,ao),G1=p(ao),Ao=s(ao,"P",{});var Ud=a(Ao);Y1=i(Ud,"The "),fd=s(Ud,"A",{href:!0});var MF=a(fd);Z1=i(MF,"TFRobertaForQuestionAnswering"),MF.forEach(t),ey=i(Ud," forward method, overrides the "),fp=s(Ud,"CODE",{});var FF=a(fp);ty=i(FF,"__call__"),FF.forEach(t),oy=i(Ud," special method."),Ud.forEach(t),ny=p(ao),y(ss.$$.fragment,ao),sy=p(ao),y(as.$$.fragment,ao),ay=p(ao),y(rs.$$.fragment,ao),ao.forEach(t),kt.forEach(t),zm=p(o),Oo=s(o,"H2",{class:!0});var Vu=a(Oo);is=s(Vu,"A",{id:!0,class:!0,href:!0});var xF=a(is);gp=s(xF,"SPAN",{});var RF=a(gp);y(Hr.$$.fragment,RF),RF.forEach(t),xF.forEach(t),ry=p(Vu),_p=s(Vu,"SPAN",{});var LF=a(_p);iy=i(LF,"FlaxXLMRobertaModel"),LF.forEach(t),Vu.forEach(t),qm=p(o),Be=s(o,"DIV",{class:!0});var vt=a(Be);y(Vr.$$.fragment,vt),ly=p(vt),Jr=s(vt,"P",{});var Ju=a(Jr);dy=i(Ju,`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gd=s(Ju,"A",{href:!0});var EF=a(gd);cy=i(EF,"FlaxPreTrainedModel"),EF.forEach(t),py=i(Ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ju.forEach(t),hy=p(vt),Kr=s(vt,"P",{});var Ku=a(Kr);my=i(Ku,"This model is also a Flax Linen "),Gr=s(Ku,"A",{href:!0,rel:!0});var zF=a(Gr);uy=i(zF,"flax.linen.Module"),zF.forEach(t),fy=i(Ku,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ku.forEach(t),gy=p(vt),bp=s(vt,"P",{});var qF=a(bp);_y=i(qF,"Finally, this model supports inherent JAX features such as:"),qF.forEach(t),by=p(vt),St=s(vt,"UL",{});var Es=a(St);kp=s(Es,"LI",{});var CF=a(kp);Yr=s(CF,"A",{href:!0,rel:!0});var jF=a(Yr);ky=i(jF,"Just-In-Time (JIT) compilation"),jF.forEach(t),CF.forEach(t),vy=p(Es),vp=s(Es,"LI",{});var XF=a(vp);Zr=s(XF,"A",{href:!0,rel:!0});var PF=a(Zr);Ty=i(PF,"Automatic Differentiation"),PF.forEach(t),XF.forEach(t),yy=p(Es),Tp=s(Es,"LI",{});var AF=a(Tp);ei=s(AF,"A",{href:!0,rel:!0});var OF=a(ei);wy=i(OF,"Vectorization"),OF.forEach(t),AF.forEach(t),$y=p(Es),yp=s(Es,"LI",{});var NF=a(yp);ti=s(NF,"A",{href:!0,rel:!0});var IF=a(ti);My=i(IF,"Parallelization"),IF.forEach(t),NF.forEach(t),Es.forEach(t),Fy=p(vt),oi=s(vt,"P",{});var Gu=a(oi);xy=i(Gu,"This class overrides "),_d=s(Gu,"A",{href:!0});var DF=a(_d);Ry=i(DF,"FlaxRobertaModel"),DF.forEach(t),Ly=i(Gu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Gu.forEach(t),Ey=p(vt),Rt=s(vt,"DIV",{class:!0});var zs=a(Rt);y(ni.$$.fragment,zs),zy=p(zs),No=s(zs,"P",{});var Qd=a(No);qy=i(Qd,"The "),wp=s(Qd,"CODE",{});var SF=a(wp);Cy=i(SF,"FlaxRobertaPreTrainedModel"),SF.forEach(t),jy=i(Qd," forward method, overrides the "),$p=s(Qd,"CODE",{});var WF=a($p);Xy=i(WF,"__call__"),WF.forEach(t),Py=i(Qd," special method."),Qd.forEach(t),Ay=p(zs),y(ls.$$.fragment,zs),Oy=p(zs),y(ds.$$.fragment,zs),zs.forEach(t),vt.forEach(t),Cm=p(o),Io=s(o,"H2",{class:!0});var Yu=a(Io);cs=s(Yu,"A",{id:!0,class:!0,href:!0});var BF=a(cs);Mp=s(BF,"SPAN",{});var UF=a(Mp);y(si.$$.fragment,UF),UF.forEach(t),BF.forEach(t),Ny=p(Yu),Fp=s(Yu,"SPAN",{});var QF=a(Fp);Iy=i(QF,"FlaxXLMRobertaForMaskedLM"),QF.forEach(t),Yu.forEach(t),jm=p(o),Ue=s(o,"DIV",{class:!0});var Tt=a(Ue);y(ai.$$.fragment,Tt),Dy=p(Tt),Do=s(Tt,"P",{});var Hd=a(Do);Sy=i(Hd,"XLM-RoBERTa Model with a "),xp=s(Hd,"CODE",{});var HF=a(xp);Wy=i(HF,"language modeling"),HF.forEach(t),By=i(Hd,` head on top.
This model inherits from `),bd=s(Hd,"A",{href:!0});var VF=a(bd);Uy=i(VF,"FlaxPreTrainedModel"),VF.forEach(t),Qy=i(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd.forEach(t),Hy=p(Tt),ri=s(Tt,"P",{});var Zu=a(ri);Vy=i(Zu,"This model is also a Flax Linen "),ii=s(Zu,"A",{href:!0,rel:!0});var JF=a(ii);Jy=i(JF,"flax.linen.Module"),JF.forEach(t),Ky=i(Zu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Zu.forEach(t),Gy=p(Tt),Rp=s(Tt,"P",{});var KF=a(Rp);Yy=i(KF,"Finally, this model supports inherent JAX features such as:"),KF.forEach(t),Zy=p(Tt),Wt=s(Tt,"UL",{});var qs=a(Wt);Lp=s(qs,"LI",{});var GF=a(Lp);li=s(GF,"A",{href:!0,rel:!0});var YF=a(li);ew=i(YF,"Just-In-Time (JIT) compilation"),YF.forEach(t),GF.forEach(t),tw=p(qs),Ep=s(qs,"LI",{});var ZF=a(Ep);di=s(ZF,"A",{href:!0,rel:!0});var ex=a(di);ow=i(ex,"Automatic Differentiation"),ex.forEach(t),ZF.forEach(t),nw=p(qs),zp=s(qs,"LI",{});var tx=a(zp);ci=s(tx,"A",{href:!0,rel:!0});var ox=a(ci);sw=i(ox,"Vectorization"),ox.forEach(t),tx.forEach(t),aw=p(qs),qp=s(qs,"LI",{});var nx=a(qp);pi=s(nx,"A",{href:!0,rel:!0});var sx=a(pi);rw=i(sx,"Parallelization"),sx.forEach(t),nx.forEach(t),qs.forEach(t),iw=p(Tt),hi=s(Tt,"P",{});var ef=a(hi);lw=i(ef,"This class overrides "),kd=s(ef,"A",{href:!0});var ax=a(kd);dw=i(ax,"FlaxRobertaForMaskedLM"),ax.forEach(t),cw=i(ef,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),ef.forEach(t),pw=p(Tt),Lt=s(Tt,"DIV",{class:!0});var Cs=a(Lt);y(mi.$$.fragment,Cs),hw=p(Cs),So=s(Cs,"P",{});var Vd=a(So);mw=i(Vd,"The "),Cp=s(Vd,"CODE",{});var rx=a(Cp);uw=i(rx,"FlaxRobertaPreTrainedModel"),rx.forEach(t),fw=i(Vd," forward method, overrides the "),jp=s(Vd,"CODE",{});var ix=a(jp);gw=i(ix,"__call__"),ix.forEach(t),_w=i(Vd," special method."),Vd.forEach(t),bw=p(Cs),y(ps.$$.fragment,Cs),kw=p(Cs),y(hs.$$.fragment,Cs),Cs.forEach(t),Tt.forEach(t),Xm=p(o),Wo=s(o,"H2",{class:!0});var tf=a(Wo);ms=s(tf,"A",{id:!0,class:!0,href:!0});var lx=a(ms);Xp=s(lx,"SPAN",{});var dx=a(Xp);y(ui.$$.fragment,dx),dx.forEach(t),lx.forEach(t),vw=p(tf),Pp=s(tf,"SPAN",{});var cx=a(Pp);Tw=i(cx,"FlaxXLMRobertaForSequenceClassification"),cx.forEach(t),tf.forEach(t),Pm=p(o),Ce=s(o,"DIV",{class:!0});var tt=a(Ce);y(fi.$$.fragment,tt),yw=p(tt),Ap=s(tt,"P",{});var px=a(Ap);ww=i(px,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),px.forEach(t),$w=p(tt),gi=s(tt,"P",{});var of=a(gi);Mw=i(of,"This model inherits from "),vd=s(of,"A",{href:!0});var hx=a(vd);Fw=i(hx,"FlaxPreTrainedModel"),hx.forEach(t),xw=i(of,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),of.forEach(t),Rw=p(tt),_i=s(tt,"P",{});var nf=a(_i);Lw=i(nf,"This model is also a Flax Linen "),bi=s(nf,"A",{href:!0,rel:!0});var mx=a(bi);Ew=i(mx,"flax.linen.Module"),mx.forEach(t),zw=i(nf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),nf.forEach(t),qw=p(tt),Op=s(tt,"P",{});var ux=a(Op);Cw=i(ux,"Finally, this model supports inherent JAX features such as:"),ux.forEach(t),jw=p(tt),Bt=s(tt,"UL",{});var js=a(Bt);Np=s(js,"LI",{});var fx=a(Np);ki=s(fx,"A",{href:!0,rel:!0});var gx=a(ki);Xw=i(gx,"Just-In-Time (JIT) compilation"),gx.forEach(t),fx.forEach(t),Pw=p(js),Ip=s(js,"LI",{});var _x=a(Ip);vi=s(_x,"A",{href:!0,rel:!0});var bx=a(vi);Aw=i(bx,"Automatic Differentiation"),bx.forEach(t),_x.forEach(t),Ow=p(js),Dp=s(js,"LI",{});var kx=a(Dp);Ti=s(kx,"A",{href:!0,rel:!0});var vx=a(Ti);Nw=i(vx,"Vectorization"),vx.forEach(t),kx.forEach(t),Iw=p(js),Sp=s(js,"LI",{});var Tx=a(Sp);yi=s(Tx,"A",{href:!0,rel:!0});var yx=a(yi);Dw=i(yx,"Parallelization"),yx.forEach(t),Tx.forEach(t),js.forEach(t),Sw=p(tt),wi=s(tt,"P",{});var sf=a(wi);Ww=i(sf,"This class overrides "),Td=s(sf,"A",{href:!0});var wx=a(Td);Bw=i(wx,"FlaxRobertaForSequenceClassification"),wx.forEach(t),Uw=i(sf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),sf.forEach(t),Qw=p(tt),Et=s(tt,"DIV",{class:!0});var Xs=a(Et);y($i.$$.fragment,Xs),Hw=p(Xs),Bo=s(Xs,"P",{});var Jd=a(Bo);Vw=i(Jd,"The "),Wp=s(Jd,"CODE",{});var $x=a(Wp);Jw=i($x,"FlaxRobertaPreTrainedModel"),$x.forEach(t),Kw=i(Jd," forward method, overrides the "),Bp=s(Jd,"CODE",{});var Mx=a(Bp);Gw=i(Mx,"__call__"),Mx.forEach(t),Yw=i(Jd," special method."),Jd.forEach(t),Zw=p(Xs),y(us.$$.fragment,Xs),e$=p(Xs),y(fs.$$.fragment,Xs),Xs.forEach(t),tt.forEach(t),Am=p(o),Uo=s(o,"H2",{class:!0});var af=a(Uo);gs=s(af,"A",{id:!0,class:!0,href:!0});var Fx=a(gs);Up=s(Fx,"SPAN",{});var xx=a(Up);y(Mi.$$.fragment,xx),xx.forEach(t),Fx.forEach(t),t$=p(af),Qp=s(af,"SPAN",{});var Rx=a(Qp);o$=i(Rx,"FlaxXLMRobertaForMultipleChoice"),Rx.forEach(t),af.forEach(t),Om=p(o),je=s(o,"DIV",{class:!0});var ot=a(je);y(Fi.$$.fragment,ot),n$=p(ot),Hp=s(ot,"P",{});var Lx=a(Hp);s$=i(Lx,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Lx.forEach(t),a$=p(ot),xi=s(ot,"P",{});var rf=a(xi);r$=i(rf,"This model inherits from "),yd=s(rf,"A",{href:!0});var Ex=a(yd);i$=i(Ex,"FlaxPreTrainedModel"),Ex.forEach(t),l$=i(rf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),rf.forEach(t),d$=p(ot),Ri=s(ot,"P",{});var lf=a(Ri);c$=i(lf,"This model is also a Flax Linen "),Li=s(lf,"A",{href:!0,rel:!0});var zx=a(Li);p$=i(zx,"flax.linen.Module"),zx.forEach(t),h$=i(lf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),lf.forEach(t),m$=p(ot),Vp=s(ot,"P",{});var qx=a(Vp);u$=i(qx,"Finally, this model supports inherent JAX features such as:"),qx.forEach(t),f$=p(ot),Ut=s(ot,"UL",{});var Ps=a(Ut);Jp=s(Ps,"LI",{});var Cx=a(Jp);Ei=s(Cx,"A",{href:!0,rel:!0});var jx=a(Ei);g$=i(jx,"Just-In-Time (JIT) compilation"),jx.forEach(t),Cx.forEach(t),_$=p(Ps),Kp=s(Ps,"LI",{});var Xx=a(Kp);zi=s(Xx,"A",{href:!0,rel:!0});var Px=a(zi);b$=i(Px,"Automatic Differentiation"),Px.forEach(t),Xx.forEach(t),k$=p(Ps),Gp=s(Ps,"LI",{});var Ax=a(Gp);qi=s(Ax,"A",{href:!0,rel:!0});var Ox=a(qi);v$=i(Ox,"Vectorization"),Ox.forEach(t),Ax.forEach(t),T$=p(Ps),Yp=s(Ps,"LI",{});var Nx=a(Yp);Ci=s(Nx,"A",{href:!0,rel:!0});var Ix=a(Ci);y$=i(Ix,"Parallelization"),Ix.forEach(t),Nx.forEach(t),Ps.forEach(t),w$=p(ot),ji=s(ot,"P",{});var df=a(ji);$$=i(df,"This class overrides "),wd=s(df,"A",{href:!0});var Dx=a(wd);M$=i(Dx,"FlaxRobertaForMultipleChoice"),Dx.forEach(t),F$=i(df,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),df.forEach(t),x$=p(ot),zt=s(ot,"DIV",{class:!0});var As=a(zt);y(Xi.$$.fragment,As),R$=p(As),Qo=s(As,"P",{});var Kd=a(Qo);L$=i(Kd,"The "),Zp=s(Kd,"CODE",{});var Sx=a(Zp);E$=i(Sx,"FlaxRobertaPreTrainedModel"),Sx.forEach(t),z$=i(Kd," forward method, overrides the "),eh=s(Kd,"CODE",{});var Wx=a(eh);q$=i(Wx,"__call__"),Wx.forEach(t),C$=i(Kd," special method."),Kd.forEach(t),j$=p(As),y(_s.$$.fragment,As),X$=p(As),y(bs.$$.fragment,As),As.forEach(t),ot.forEach(t),Nm=p(o),Ho=s(o,"H2",{class:!0});var cf=a(Ho);ks=s(cf,"A",{id:!0,class:!0,href:!0});var Bx=a(ks);th=s(Bx,"SPAN",{});var Ux=a(th);y(Pi.$$.fragment,Ux),Ux.forEach(t),Bx.forEach(t),P$=p(cf),oh=s(cf,"SPAN",{});var Qx=a(oh);A$=i(Qx,"FlaxXLMRobertaForTokenClassification"),Qx.forEach(t),cf.forEach(t),Im=p(o),Xe=s(o,"DIV",{class:!0});var nt=a(Xe);y(Ai.$$.fragment,nt),O$=p(nt),nh=s(nt,"P",{});var Hx=a(nh);N$=i(Hx,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Hx.forEach(t),I$=p(nt),Oi=s(nt,"P",{});var pf=a(Oi);D$=i(pf,"This model inherits from "),$d=s(pf,"A",{href:!0});var Vx=a($d);S$=i(Vx,"FlaxPreTrainedModel"),Vx.forEach(t),W$=i(pf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pf.forEach(t),B$=p(nt),Ni=s(nt,"P",{});var hf=a(Ni);U$=i(hf,"This model is also a Flax Linen "),Ii=s(hf,"A",{href:!0,rel:!0});var Jx=a(Ii);Q$=i(Jx,"flax.linen.Module"),Jx.forEach(t),H$=i(hf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),hf.forEach(t),V$=p(nt),sh=s(nt,"P",{});var Kx=a(sh);J$=i(Kx,"Finally, this model supports inherent JAX features such as:"),Kx.forEach(t),K$=p(nt),Qt=s(nt,"UL",{});var Os=a(Qt);ah=s(Os,"LI",{});var Gx=a(ah);Di=s(Gx,"A",{href:!0,rel:!0});var Yx=a(Di);G$=i(Yx,"Just-In-Time (JIT) compilation"),Yx.forEach(t),Gx.forEach(t),Y$=p(Os),rh=s(Os,"LI",{});var Zx=a(rh);Si=s(Zx,"A",{href:!0,rel:!0});var e4=a(Si);Z$=i(e4,"Automatic Differentiation"),e4.forEach(t),Zx.forEach(t),eM=p(Os),ih=s(Os,"LI",{});var t4=a(ih);Wi=s(t4,"A",{href:!0,rel:!0});var o4=a(Wi);tM=i(o4,"Vectorization"),o4.forEach(t),t4.forEach(t),oM=p(Os),lh=s(Os,"LI",{});var n4=a(lh);Bi=s(n4,"A",{href:!0,rel:!0});var s4=a(Bi);nM=i(s4,"Parallelization"),s4.forEach(t),n4.forEach(t),Os.forEach(t),sM=p(nt),Ui=s(nt,"P",{});var mf=a(Ui);aM=i(mf,"This class overrides "),Md=s(mf,"A",{href:!0});var a4=a(Md);rM=i(a4,"FlaxRobertaForTokenClassification"),a4.forEach(t),iM=i(mf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),mf.forEach(t),lM=p(nt),qt=s(nt,"DIV",{class:!0});var Ns=a(qt);y(Qi.$$.fragment,Ns),dM=p(Ns),Vo=s(Ns,"P",{});var Gd=a(Vo);cM=i(Gd,"The "),dh=s(Gd,"CODE",{});var r4=a(dh);pM=i(r4,"FlaxRobertaPreTrainedModel"),r4.forEach(t),hM=i(Gd," forward method, overrides the "),ch=s(Gd,"CODE",{});var i4=a(ch);mM=i(i4,"__call__"),i4.forEach(t),uM=i(Gd," special method."),Gd.forEach(t),fM=p(Ns),y(vs.$$.fragment,Ns),gM=p(Ns),y(Ts.$$.fragment,Ns),Ns.forEach(t),nt.forEach(t),Dm=p(o),Jo=s(o,"H2",{class:!0});var uf=a(Jo);ys=s(uf,"A",{id:!0,class:!0,href:!0});var l4=a(ys);ph=s(l4,"SPAN",{});var d4=a(ph);y(Hi.$$.fragment,d4),d4.forEach(t),l4.forEach(t),_M=p(uf),hh=s(uf,"SPAN",{});var c4=a(hh);bM=i(c4,"FlaxXLMRobertaForQuestionAnswering"),c4.forEach(t),uf.forEach(t),Sm=p(o),Pe=s(o,"DIV",{class:!0});var st=a(Pe);y(Vi.$$.fragment,st),kM=p(st),Ko=s(st,"P",{});var Yd=a(Ko);vM=i(Yd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),mh=s(Yd,"CODE",{});var p4=a(mh);TM=i(p4,"span start logits"),p4.forEach(t),yM=i(Yd," and "),uh=s(Yd,"CODE",{});var h4=a(uh);wM=i(h4,"span end logits"),h4.forEach(t),$M=i(Yd,")."),Yd.forEach(t),MM=p(st),Ji=s(st,"P",{});var ff=a(Ji);FM=i(ff,"This model inherits from "),Fd=s(ff,"A",{href:!0});var m4=a(Fd);xM=i(m4,"FlaxPreTrainedModel"),m4.forEach(t),RM=i(ff,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ff.forEach(t),LM=p(st),Ki=s(st,"P",{});var gf=a(Ki);EM=i(gf,"This model is also a Flax Linen "),Gi=s(gf,"A",{href:!0,rel:!0});var u4=a(Gi);zM=i(u4,"flax.linen.Module"),u4.forEach(t),qM=i(gf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),gf.forEach(t),CM=p(st),fh=s(st,"P",{});var f4=a(fh);jM=i(f4,"Finally, this model supports inherent JAX features such as:"),f4.forEach(t),XM=p(st),Ht=s(st,"UL",{});var Is=a(Ht);gh=s(Is,"LI",{});var g4=a(gh);Yi=s(g4,"A",{href:!0,rel:!0});var _4=a(Yi);PM=i(_4,"Just-In-Time (JIT) compilation"),_4.forEach(t),g4.forEach(t),AM=p(Is),_h=s(Is,"LI",{});var b4=a(_h);Zi=s(b4,"A",{href:!0,rel:!0});var k4=a(Zi);OM=i(k4,"Automatic Differentiation"),k4.forEach(t),b4.forEach(t),NM=p(Is),bh=s(Is,"LI",{});var v4=a(bh);el=s(v4,"A",{href:!0,rel:!0});var T4=a(el);IM=i(T4,"Vectorization"),T4.forEach(t),v4.forEach(t),DM=p(Is),kh=s(Is,"LI",{});var y4=a(kh);tl=s(y4,"A",{href:!0,rel:!0});var w4=a(tl);SM=i(w4,"Parallelization"),w4.forEach(t),y4.forEach(t),Is.forEach(t),WM=p(st),ol=s(st,"P",{});var _f=a(ol);BM=i(_f,"This class overrides "),xd=s(_f,"A",{href:!0});var $4=a(xd);UM=i($4,"FlaxRobertaForQuestionAnswering"),$4.forEach(t),QM=i(_f,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),_f.forEach(t),HM=p(st),Ct=s(st,"DIV",{class:!0});var Ds=a(Ct);y(nl.$$.fragment,Ds),VM=p(Ds),Go=s(Ds,"P",{});var Zd=a(Go);JM=i(Zd,"The "),vh=s(Zd,"CODE",{});var M4=a(vh);KM=i(M4,"FlaxRobertaPreTrainedModel"),M4.forEach(t),GM=i(Zd," forward method, overrides the "),Th=s(Zd,"CODE",{});var F4=a(Th);YM=i(F4,"__call__"),F4.forEach(t),ZM=i(Zd," special method."),Zd.forEach(t),e0=p(Ds),y(ws.$$.fragment,Ds),t0=p(Ds),y($s.$$.fragment,Ds),Ds.forEach(t),st.forEach(t),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(CR)),f(m,"id","xlmroberta"),f(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(m,"href","#xlmroberta"),f(h,"class","relative group"),f(Y,"id","overview"),f(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Y,"href","#overview"),f(E,"class","relative group"),f(te,"href","https://arxiv.org/abs/1911.02116"),f(te,"rel","nofollow"),f(v,"href","roberta"),f(we,"href","https://huggingface.co/stefan-it"),f(we,"rel","nofollow"),f(j,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),f(j,"rel","nofollow"),f(ye,"id","transformers.XLMRobertaConfig"),f(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ye,"href","#transformers.XLMRobertaConfig"),f(N,"class","relative group"),f(vl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaConfig"),f(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(en,"id","transformers.XLMRobertaTokenizer"),f(en,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(en,"href","#transformers.XLMRobertaTokenizer"),f(io,"class","relative group"),f(Tl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer"),f(yl,"href","/docs/transformers/v4.18.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(Qs,"href","https://github.com/google/sentencepiece"),f(Qs,"rel","nofollow"),f(wl,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),f(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(on,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Fl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(nn,"id","transformers.XLMRobertaTokenizerFast"),f(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(nn,"href","#transformers.XLMRobertaTokenizerFast"),f(lo,"class","relative group"),f(xl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaTokenizer"),f(Rl,"href","/docs/transformers/v4.18.0/en/model_doc/xlnet#transformers.XLNetTokenizer"),f(oa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),f(oa,"rel","nofollow"),f(Ll,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),f(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(an,"id","transformers.XLMRobertaModel"),f(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(an,"href","#transformers.XLMRobertaModel"),f(co,"class","relative group"),f(ql,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(pa,"rel","nofollow"),f(Cl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),f(jl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaModel"),f(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(dn,"id","transformers.XLMRobertaForCausalLM"),f(dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(dn,"href","#transformers.XLMRobertaForCausalLM"),f(ho,"class","relative group"),f(Xl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ka,"rel","nofollow"),f(Pl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForCausalLM"),f(Al,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForCausalLM"),f($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(hn,"id","transformers.XLMRobertaForMaskedLM"),f(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(hn,"href","#transformers.XLMRobertaForMaskedLM"),f(uo,"class","relative group"),f(Ol,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(xa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(xa,"rel","nofollow"),f(Nl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),f(Il,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMaskedLM"),f(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gn,"id","transformers.XLMRobertaForSequenceClassification"),f(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gn,"href","#transformers.XLMRobertaForSequenceClassification"),f(go,"class","relative group"),f(Dl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(ja,"rel","nofollow"),f(Sl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),f(Wl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),f(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(yn,"id","transformers.XLMRobertaForMultipleChoice"),f(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(yn,"href","#transformers.XLMRobertaForMultipleChoice"),f(bo,"class","relative group"),f(Bl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(Da,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Da,"rel","nofollow"),f(Ul,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),f(Ql,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),f(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Mn,"id","transformers.XLMRobertaForTokenClassification"),f(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Mn,"href","#transformers.XLMRobertaForTokenClassification"),f(vo,"class","relative group"),f(Hl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(Va,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(Va,"rel","nofollow"),f(Vl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),f(Jl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForTokenClassification"),f(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ln,"id","transformers.XLMRobertaForQuestionAnswering"),f(Ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Ln,"href","#transformers.XLMRobertaForQuestionAnswering"),f(yo,"class","relative group"),f(Kl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),f(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),f(tr,"rel","nofollow"),f(Gl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),f(Yl,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),f(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Cn,"id","transformers.TFXLMRobertaModel"),f(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Cn,"href","#transformers.TFXLMRobertaModel"),f(Mo,"class","relative group"),f(Zl,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(lr,"rel","nofollow"),f(ed,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaModel"),f(td,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaModel"),f(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(An,"id","transformers.TFXLMRobertaForMaskedLM"),f(An,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(An,"href","#transformers.TFXLMRobertaForMaskedLM"),f(xo,"class","relative group"),f(od,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(gr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(gr,"rel","nofollow"),f(nd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),f(sd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),f(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Sn,"id","transformers.TFXLMRobertaForSequenceClassification"),f(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Sn,"href","#transformers.TFXLMRobertaForSequenceClassification"),f(Lo,"class","relative group"),f(ad,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(wr,"rel","nofollow"),f(rd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),f(id,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),f(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Hn,"id","transformers.TFXLMRobertaForMultipleChoice"),f(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Hn,"href","#transformers.TFXLMRobertaForMultipleChoice"),f(zo,"class","relative group"),f(ld,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Er,"rel","nofollow"),f(dd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),f(cd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),f(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Gn,"id","transformers.TFXLMRobertaForTokenClassification"),f(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(Gn,"href","#transformers.TFXLMRobertaForTokenClassification"),f(Co,"class","relative group"),f(pd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Ar,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Ar,"rel","nofollow"),f(hd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),f(md,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),f(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(os,"id","transformers.TFXLMRobertaForQuestionAnswering"),f(os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(os,"href","#transformers.TFXLMRobertaForQuestionAnswering"),f(Xo,"class","relative group"),f(ud,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),f(Br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),f(Br,"rel","nofollow"),f(fd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),f(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(is,"id","transformers.FlaxXLMRobertaModel"),f(is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(is,"href","#transformers.FlaxXLMRobertaModel"),f(Oo,"class","relative group"),f(gd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Gr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Gr,"rel","nofollow"),f(Yr,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Yr,"rel","nofollow"),f(Zr,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Zr,"rel","nofollow"),f(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ei,"rel","nofollow"),f(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(ti,"rel","nofollow"),f(_d,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaModel"),f(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(cs,"id","transformers.FlaxXLMRobertaForMaskedLM"),f(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(cs,"href","#transformers.FlaxXLMRobertaForMaskedLM"),f(Io,"class","relative group"),f(bd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(ii,"rel","nofollow"),f(li,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(li,"rel","nofollow"),f(di,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(di,"rel","nofollow"),f(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(ci,"rel","nofollow"),f(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(pi,"rel","nofollow"),f(kd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),f(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ms,"id","transformers.FlaxXLMRobertaForSequenceClassification"),f(ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ms,"href","#transformers.FlaxXLMRobertaForSequenceClassification"),f(Wo,"class","relative group"),f(vd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(bi,"rel","nofollow"),f(ki,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(ki,"rel","nofollow"),f(vi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(vi,"rel","nofollow"),f(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Ti,"rel","nofollow"),f(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(yi,"rel","nofollow"),f(Td,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),f(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(gs,"id","transformers.FlaxXLMRobertaForMultipleChoice"),f(gs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(gs,"href","#transformers.FlaxXLMRobertaForMultipleChoice"),f(Uo,"class","relative group"),f(yd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Li,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Li,"rel","nofollow"),f(Ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Ei,"rel","nofollow"),f(zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(zi,"rel","nofollow"),f(qi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(qi,"rel","nofollow"),f(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Ci,"rel","nofollow"),f(wd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaForMultipleChoice"),f(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ks,"id","transformers.FlaxXLMRobertaForTokenClassification"),f(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ks,"href","#transformers.FlaxXLMRobertaForTokenClassification"),f(Ho,"class","relative group"),f($d,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Ii,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Ii,"rel","nofollow"),f(Di,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Di,"rel","nofollow"),f(Si,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Si,"rel","nofollow"),f(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(Wi,"rel","nofollow"),f(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(Bi,"rel","nofollow"),f(Md,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),f(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(ys,"id","transformers.FlaxXLMRobertaForQuestionAnswering"),f(ys,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(ys,"href","#transformers.FlaxXLMRobertaForQuestionAnswering"),f(Jo,"class","relative group"),f(Fd,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),f(Gi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),f(Gi,"rel","nofollow"),f(Yi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),f(Yi,"rel","nofollow"),f(Zi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),f(Zi,"rel","nofollow"),f(el,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),f(el,"rel","nofollow"),f(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),f(tl,"rel","nofollow"),f(xd,"href","/docs/transformers/v4.18.0/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),f(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),f(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,h,k),e(h,m),e(m,_),w(l,_,null),e(h,u),e(h,R),e(R,ue),b(o,J,k),b(o,E,k),e(E,Y),e(Y,D),w(ee,D,null),e(E,fe),e(E,S),e(S,ge),b(o,ce,k),b(o,V,k),e(V,P),e(V,te),e(te,K),e(V,z),b(o,C,k),b(o,se,k),e(se,U),b(o,pe,k),b(o,ae,k),e(ae,W),e(W,_e),b(o,he,k),b(o,q,k),e(q,be),b(o,B,k),b(o,Z,k),e(Z,oe),e(oe,Q),e(oe,re),e(re,ke),e(oe,A),e(Z,ve),e(Z,I),e(I,Te),e(I,v),e(v,L),e(I,G),b(o,xe,k),b(o,me,k),e(me,O),e(me,we),e(we,Le),e(me,Ee),e(me,j),e(j,H),e(me,ze),b(o,Re,k),b(o,N,k),e(N,ye),e(ye,Fe),w(ne,Fe,null),e(N,qe),e(N,ec),e(ec,bf),b(o,em,k),b(o,ro,k),w(Ss,ro,null),e(ro,kf),e(ro,Ws),e(Ws,vf),e(Ws,vl),e(vl,Tf),e(Ws,yf),b(o,tm,k),b(o,io,k),e(io,en),e(en,tc),w(Bs,tc,null),e(io,wf),e(io,oc),e(oc,$f),b(o,om,k),b(o,Ae,k),w(Us,Ae,null),e(Ae,Mf),e(Ae,Dt),e(Dt,Ff),e(Dt,Tl),e(Tl,xf),e(Dt,Rf),e(Dt,yl),e(yl,Lf),e(Dt,Ef),e(Dt,Qs),e(Qs,zf),e(Dt,qf),e(Ae,Cf),e(Ae,Hs),e(Hs,jf),e(Hs,wl),e(wl,Xf),e(Hs,Pf),e(Ae,Af),e(Ae,Jt),w(Vs,Jt,null),e(Jt,Of),e(Jt,nc),e(nc,Nf),e(Jt,If),e(Jt,Js),e(Js,$l),e($l,Df),e($l,sc),e(sc,Sf),e(Js,Wf),e(Js,Ml),e(Ml,Bf),e(Ml,ac),e(ac,Uf),e(Ae,Qf),e(Ae,tn),w(Ks,tn,null),e(tn,Hf),e(tn,Gs),e(Gs,Vf),e(Gs,rc),e(rc,Jf),e(Gs,Kf),e(Ae,Gf),e(Ae,on),w(Ys,on,null),e(on,Yf),e(on,ic),e(ic,Zf),e(Ae,eg),e(Ae,Fl),w(Zs,Fl,null),b(o,nm,k),b(o,lo,k),e(lo,nn),e(nn,lc),w(ea,lc,null),e(lo,tg),e(lo,dc),e(dc,og),b(o,sm,k),b(o,at,k),w(ta,at,null),e(at,ng),e(at,yt),e(yt,sg),e(yt,cc),e(cc,ag),e(yt,rg),e(yt,xl),e(xl,ig),e(yt,lg),e(yt,Rl),e(Rl,dg),e(yt,cg),e(yt,oa),e(oa,pg),e(yt,hg),e(at,mg),e(at,na),e(na,ug),e(na,Ll),e(Ll,fg),e(na,gg),e(at,_g),e(at,Kt),w(sa,Kt,null),e(Kt,bg),e(Kt,pc),e(pc,kg),e(Kt,vg),e(Kt,aa),e(aa,El),e(El,Tg),e(El,hc),e(hc,yg),e(aa,wg),e(aa,zl),e(zl,$g),e(zl,mc),e(mc,Mg),e(at,Fg),e(at,sn),w(ra,sn,null),e(sn,xg),e(sn,uc),e(uc,Rg),b(o,am,k),b(o,co,k),e(co,an),e(an,fc),w(ia,fc,null),e(co,Lg),e(co,gc),e(gc,Eg),b(o,rm,k),b(o,He,k),w(la,He,null),e(He,zg),e(He,_c),e(_c,qg),e(He,Cg),e(He,da),e(da,jg),e(da,ql),e(ql,Xg),e(da,Pg),e(He,Ag),e(He,ca),e(ca,Og),e(ca,pa),e(pa,Ng),e(ca,Ig),e(He,Dg),e(He,ha),e(ha,Sg),e(ha,Cl),e(Cl,Wg),e(ha,Bg),e(He,Ug),e(He,wt),w(ma,wt,null),e(wt,Qg),e(wt,po),e(po,Hg),e(po,jl),e(jl,Vg),e(po,Jg),e(po,bc),e(bc,Kg),e(po,Gg),e(wt,Yg),w(rn,wt,null),e(wt,Zg),w(ln,wt,null),b(o,im,k),b(o,ho,k),e(ho,dn),e(dn,kc),w(ua,kc,null),e(ho,e_),e(ho,vc),e(vc,t_),b(o,lm,k),b(o,Ve,k),w(fa,Ve,null),e(Ve,o_),e(Ve,ga),e(ga,n_),e(ga,Tc),e(Tc,s_),e(ga,a_),e(Ve,r_),e(Ve,_a),e(_a,i_),e(_a,Xl),e(Xl,l_),e(_a,d_),e(Ve,c_),e(Ve,ba),e(ba,p_),e(ba,ka),e(ka,h_),e(ba,m_),e(Ve,u_),e(Ve,va),e(va,f_),e(va,Pl),e(Pl,g_),e(va,__),e(Ve,b_),e(Ve,$t),w(Ta,$t,null),e($t,k_),e($t,mo),e(mo,v_),e(mo,Al),e(Al,T_),e(mo,y_),e(mo,yc),e(yc,w_),e(mo,$_),e($t,M_),w(cn,$t,null),e($t,F_),w(pn,$t,null),b(o,dm,k),b(o,uo,k),e(uo,hn),e(hn,wc),w(ya,wc,null),e(uo,x_),e(uo,$c),e($c,R_),b(o,cm,k),b(o,Je,k),w(wa,Je,null),e(Je,L_),e(Je,$a),e($a,E_),e($a,Mc),e(Mc,z_),e($a,q_),e(Je,C_),e(Je,Ma),e(Ma,j_),e(Ma,Ol),e(Ol,X_),e(Ma,P_),e(Je,A_),e(Je,Fa),e(Fa,O_),e(Fa,xa),e(xa,N_),e(Fa,I_),e(Je,D_),e(Je,Ra),e(Ra,S_),e(Ra,Nl),e(Nl,W_),e(Ra,B_),e(Je,U_),e(Je,rt),w(La,rt,null),e(rt,Q_),e(rt,fo),e(fo,H_),e(fo,Il),e(Il,V_),e(fo,J_),e(fo,Fc),e(Fc,K_),e(fo,G_),e(rt,Y_),w(mn,rt,null),e(rt,Z_),w(un,rt,null),e(rt,eb),w(fn,rt,null),b(o,pm,k),b(o,go,k),e(go,gn),e(gn,xc),w(Ea,xc,null),e(go,tb),e(go,Rc),e(Rc,ob),b(o,hm,k),b(o,Ke,k),w(za,Ke,null),e(Ke,nb),e(Ke,Lc),e(Lc,sb),e(Ke,ab),e(Ke,qa),e(qa,rb),e(qa,Dl),e(Dl,ib),e(qa,lb),e(Ke,db),e(Ke,Ca),e(Ca,cb),e(Ca,ja),e(ja,pb),e(Ca,hb),e(Ke,mb),e(Ke,Xa),e(Xa,ub),e(Xa,Sl),e(Sl,fb),e(Xa,gb),e(Ke,_b),e(Ke,Qe),w(Pa,Qe,null),e(Qe,bb),e(Qe,_o),e(_o,kb),e(_o,Wl),e(Wl,vb),e(_o,Tb),e(_o,Ec),e(Ec,yb),e(_o,wb),e(Qe,$b),w(_n,Qe,null),e(Qe,Mb),w(bn,Qe,null),e(Qe,Fb),w(kn,Qe,null),e(Qe,xb),w(vn,Qe,null),e(Qe,Rb),w(Tn,Qe,null),b(o,mm,k),b(o,bo,k),e(bo,yn),e(yn,zc),w(Aa,zc,null),e(bo,Lb),e(bo,qc),e(qc,Eb),b(o,um,k),b(o,Ge,k),w(Oa,Ge,null),e(Ge,zb),e(Ge,Cc),e(Cc,qb),e(Ge,Cb),e(Ge,Na),e(Na,jb),e(Na,Bl),e(Bl,Xb),e(Na,Pb),e(Ge,Ab),e(Ge,Ia),e(Ia,Ob),e(Ia,Da),e(Da,Nb),e(Ia,Ib),e(Ge,Db),e(Ge,Sa),e(Sa,Sb),e(Sa,Ul),e(Ul,Wb),e(Sa,Bb),e(Ge,Ub),e(Ge,Mt),w(Wa,Mt,null),e(Mt,Qb),e(Mt,ko),e(ko,Hb),e(ko,Ql),e(Ql,Vb),e(ko,Jb),e(ko,jc),e(jc,Kb),e(ko,Gb),e(Mt,Yb),w(wn,Mt,null),e(Mt,Zb),w($n,Mt,null),b(o,fm,k),b(o,vo,k),e(vo,Mn),e(Mn,Xc),w(Ba,Xc,null),e(vo,ek),e(vo,Pc),e(Pc,tk),b(o,gm,k),b(o,Ye,k),w(Ua,Ye,null),e(Ye,ok),e(Ye,Ac),e(Ac,nk),e(Ye,sk),e(Ye,Qa),e(Qa,ak),e(Qa,Hl),e(Hl,rk),e(Qa,ik),e(Ye,lk),e(Ye,Ha),e(Ha,dk),e(Ha,Va),e(Va,ck),e(Ha,pk),e(Ye,hk),e(Ye,Ja),e(Ja,mk),e(Ja,Vl),e(Vl,uk),e(Ja,fk),e(Ye,gk),e(Ye,it),w(Ka,it,null),e(it,_k),e(it,To),e(To,bk),e(To,Jl),e(Jl,kk),e(To,vk),e(To,Oc),e(Oc,Tk),e(To,yk),e(it,wk),w(Fn,it,null),e(it,$k),w(xn,it,null),e(it,Mk),w(Rn,it,null),b(o,_m,k),b(o,yo,k),e(yo,Ln),e(Ln,Nc),w(Ga,Nc,null),e(yo,Fk),e(yo,Ic),e(Ic,xk),b(o,bm,k),b(o,Ze,k),w(Ya,Ze,null),e(Ze,Rk),e(Ze,wo),e(wo,Lk),e(wo,Dc),e(Dc,Ek),e(wo,zk),e(wo,Sc),e(Sc,qk),e(wo,Ck),e(Ze,jk),e(Ze,Za),e(Za,Xk),e(Za,Kl),e(Kl,Pk),e(Za,Ak),e(Ze,Ok),e(Ze,er),e(er,Nk),e(er,tr),e(tr,Ik),e(er,Dk),e(Ze,Sk),e(Ze,or),e(or,Wk),e(or,Gl),e(Gl,Bk),e(or,Uk),e(Ze,Qk),e(Ze,lt),w(nr,lt,null),e(lt,Hk),e(lt,$o),e($o,Vk),e($o,Yl),e(Yl,Jk),e($o,Kk),e($o,Wc),e(Wc,Gk),e($o,Yk),e(lt,Zk),w(En,lt,null),e(lt,ev),w(zn,lt,null),e(lt,tv),w(qn,lt,null),b(o,km,k),b(o,Mo,k),e(Mo,Cn),e(Cn,Bc),w(sr,Bc,null),e(Mo,ov),e(Mo,Uc),e(Uc,nv),b(o,vm,k),b(o,Oe,k),w(ar,Oe,null),e(Oe,sv),e(Oe,Qc),e(Qc,av),e(Oe,rv),e(Oe,rr),e(rr,iv),e(rr,Zl),e(Zl,lv),e(rr,dv),e(Oe,cv),e(Oe,ir),e(ir,pv),e(ir,lr),e(lr,hv),e(ir,mv),e(Oe,uv),w(jn,Oe,null),e(Oe,fv),e(Oe,dr),e(dr,gv),e(dr,ed),e(ed,_v),e(dr,bv),e(Oe,kv),e(Oe,Ft),w(cr,Ft,null),e(Ft,vv),e(Ft,Fo),e(Fo,Tv),e(Fo,td),e(td,yv),e(Fo,wv),e(Fo,Hc),e(Hc,$v),e(Fo,Mv),e(Ft,Fv),w(Xn,Ft,null),e(Ft,xv),w(Pn,Ft,null),b(o,Tm,k),b(o,xo,k),e(xo,An),e(An,Vc),w(pr,Vc,null),e(xo,Rv),e(xo,Jc),e(Jc,Lv),b(o,ym,k),b(o,Ne,k),w(hr,Ne,null),e(Ne,Ev),e(Ne,mr),e(mr,zv),e(mr,Kc),e(Kc,qv),e(mr,Cv),e(Ne,jv),e(Ne,ur),e(ur,Xv),e(ur,od),e(od,Pv),e(ur,Av),e(Ne,Ov),e(Ne,fr),e(fr,Nv),e(fr,gr),e(gr,Iv),e(fr,Dv),e(Ne,Sv),w(On,Ne,null),e(Ne,Wv),e(Ne,_r),e(_r,Bv),e(_r,nd),e(nd,Uv),e(_r,Qv),e(Ne,Hv),e(Ne,dt),w(br,dt,null),e(dt,Vv),e(dt,Ro),e(Ro,Jv),e(Ro,sd),e(sd,Kv),e(Ro,Gv),e(Ro,Gc),e(Gc,Yv),e(Ro,Zv),e(dt,eT),w(Nn,dt,null),e(dt,tT),w(In,dt,null),e(dt,oT),w(Dn,dt,null),b(o,wm,k),b(o,Lo,k),e(Lo,Sn),e(Sn,Yc),w(kr,Yc,null),e(Lo,nT),e(Lo,Zc),e(Zc,sT),b(o,$m,k),b(o,Ie,k),w(vr,Ie,null),e(Ie,aT),e(Ie,ep),e(ep,rT),e(Ie,iT),e(Ie,Tr),e(Tr,lT),e(Tr,ad),e(ad,dT),e(Tr,cT),e(Ie,pT),e(Ie,yr),e(yr,hT),e(yr,wr),e(wr,mT),e(yr,uT),e(Ie,fT),w(Wn,Ie,null),e(Ie,gT),e(Ie,$r),e($r,_T),e($r,rd),e(rd,bT),e($r,kT),e(Ie,vT),e(Ie,ct),w(Mr,ct,null),e(ct,TT),e(ct,Eo),e(Eo,yT),e(Eo,id),e(id,wT),e(Eo,$T),e(Eo,tp),e(tp,MT),e(Eo,FT),e(ct,xT),w(Bn,ct,null),e(ct,RT),w(Un,ct,null),e(ct,LT),w(Qn,ct,null),b(o,Mm,k),b(o,zo,k),e(zo,Hn),e(Hn,op),w(Fr,op,null),e(zo,ET),e(zo,np),e(np,zT),b(o,Fm,k),b(o,De,k),w(xr,De,null),e(De,qT),e(De,sp),e(sp,CT),e(De,jT),e(De,Rr),e(Rr,XT),e(Rr,ld),e(ld,PT),e(Rr,AT),e(De,OT),e(De,Lr),e(Lr,NT),e(Lr,Er),e(Er,IT),e(Lr,DT),e(De,ST),w(Vn,De,null),e(De,WT),e(De,zr),e(zr,BT),e(zr,dd),e(dd,UT),e(zr,QT),e(De,HT),e(De,xt),w(qr,xt,null),e(xt,VT),e(xt,qo),e(qo,JT),e(qo,cd),e(cd,KT),e(qo,GT),e(qo,ap),e(ap,YT),e(qo,ZT),e(xt,e1),w(Jn,xt,null),e(xt,t1),w(Kn,xt,null),b(o,xm,k),b(o,Co,k),e(Co,Gn),e(Gn,rp),w(Cr,rp,null),e(Co,o1),e(Co,ip),e(ip,n1),b(o,Rm,k),b(o,Se,k),w(jr,Se,null),e(Se,s1),e(Se,lp),e(lp,a1),e(Se,r1),e(Se,Xr),e(Xr,i1),e(Xr,pd),e(pd,l1),e(Xr,d1),e(Se,c1),e(Se,Pr),e(Pr,p1),e(Pr,Ar),e(Ar,h1),e(Pr,m1),e(Se,u1),w(Yn,Se,null),e(Se,f1),e(Se,Or),e(Or,g1),e(Or,hd),e(hd,_1),e(Or,b1),e(Se,k1),e(Se,pt),w(Nr,pt,null),e(pt,v1),e(pt,jo),e(jo,T1),e(jo,md),e(md,y1),e(jo,w1),e(jo,dp),e(dp,$1),e(jo,M1),e(pt,F1),w(Zn,pt,null),e(pt,x1),w(es,pt,null),e(pt,R1),w(ts,pt,null),b(o,Lm,k),b(o,Xo,k),e(Xo,os),e(os,cp),w(Ir,cp,null),e(Xo,L1),e(Xo,pp),e(pp,E1),b(o,Em,k),b(o,We,k),w(Dr,We,null),e(We,z1),e(We,Po),e(Po,q1),e(Po,hp),e(hp,C1),e(Po,j1),e(Po,mp),e(mp,X1),e(Po,P1),e(We,A1),e(We,Sr),e(Sr,O1),e(Sr,ud),e(ud,N1),e(Sr,I1),e(We,D1),e(We,Wr),e(Wr,S1),e(Wr,Br),e(Br,W1),e(Wr,B1),e(We,U1),w(ns,We,null),e(We,Q1),e(We,Ur),e(Ur,H1),e(Ur,up),e(up,V1),e(Ur,J1),e(We,K1),e(We,ht),w(Qr,ht,null),e(ht,G1),e(ht,Ao),e(Ao,Y1),e(Ao,fd),e(fd,Z1),e(Ao,ey),e(Ao,fp),e(fp,ty),e(Ao,oy),e(ht,ny),w(ss,ht,null),e(ht,sy),w(as,ht,null),e(ht,ay),w(rs,ht,null),b(o,zm,k),b(o,Oo,k),e(Oo,is),e(is,gp),w(Hr,gp,null),e(Oo,ry),e(Oo,_p),e(_p,iy),b(o,qm,k),b(o,Be,k),w(Vr,Be,null),e(Be,ly),e(Be,Jr),e(Jr,dy),e(Jr,gd),e(gd,cy),e(Jr,py),e(Be,hy),e(Be,Kr),e(Kr,my),e(Kr,Gr),e(Gr,uy),e(Kr,fy),e(Be,gy),e(Be,bp),e(bp,_y),e(Be,by),e(Be,St),e(St,kp),e(kp,Yr),e(Yr,ky),e(St,vy),e(St,vp),e(vp,Zr),e(Zr,Ty),e(St,yy),e(St,Tp),e(Tp,ei),e(ei,wy),e(St,$y),e(St,yp),e(yp,ti),e(ti,My),e(Be,Fy),e(Be,oi),e(oi,xy),e(oi,_d),e(_d,Ry),e(oi,Ly),e(Be,Ey),e(Be,Rt),w(ni,Rt,null),e(Rt,zy),e(Rt,No),e(No,qy),e(No,wp),e(wp,Cy),e(No,jy),e(No,$p),e($p,Xy),e(No,Py),e(Rt,Ay),w(ls,Rt,null),e(Rt,Oy),w(ds,Rt,null),b(o,Cm,k),b(o,Io,k),e(Io,cs),e(cs,Mp),w(si,Mp,null),e(Io,Ny),e(Io,Fp),e(Fp,Iy),b(o,jm,k),b(o,Ue,k),w(ai,Ue,null),e(Ue,Dy),e(Ue,Do),e(Do,Sy),e(Do,xp),e(xp,Wy),e(Do,By),e(Do,bd),e(bd,Uy),e(Do,Qy),e(Ue,Hy),e(Ue,ri),e(ri,Vy),e(ri,ii),e(ii,Jy),e(ri,Ky),e(Ue,Gy),e(Ue,Rp),e(Rp,Yy),e(Ue,Zy),e(Ue,Wt),e(Wt,Lp),e(Lp,li),e(li,ew),e(Wt,tw),e(Wt,Ep),e(Ep,di),e(di,ow),e(Wt,nw),e(Wt,zp),e(zp,ci),e(ci,sw),e(Wt,aw),e(Wt,qp),e(qp,pi),e(pi,rw),e(Ue,iw),e(Ue,hi),e(hi,lw),e(hi,kd),e(kd,dw),e(hi,cw),e(Ue,pw),e(Ue,Lt),w(mi,Lt,null),e(Lt,hw),e(Lt,So),e(So,mw),e(So,Cp),e(Cp,uw),e(So,fw),e(So,jp),e(jp,gw),e(So,_w),e(Lt,bw),w(ps,Lt,null),e(Lt,kw),w(hs,Lt,null),b(o,Xm,k),b(o,Wo,k),e(Wo,ms),e(ms,Xp),w(ui,Xp,null),e(Wo,vw),e(Wo,Pp),e(Pp,Tw),b(o,Pm,k),b(o,Ce,k),w(fi,Ce,null),e(Ce,yw),e(Ce,Ap),e(Ap,ww),e(Ce,$w),e(Ce,gi),e(gi,Mw),e(gi,vd),e(vd,Fw),e(gi,xw),e(Ce,Rw),e(Ce,_i),e(_i,Lw),e(_i,bi),e(bi,Ew),e(_i,zw),e(Ce,qw),e(Ce,Op),e(Op,Cw),e(Ce,jw),e(Ce,Bt),e(Bt,Np),e(Np,ki),e(ki,Xw),e(Bt,Pw),e(Bt,Ip),e(Ip,vi),e(vi,Aw),e(Bt,Ow),e(Bt,Dp),e(Dp,Ti),e(Ti,Nw),e(Bt,Iw),e(Bt,Sp),e(Sp,yi),e(yi,Dw),e(Ce,Sw),e(Ce,wi),e(wi,Ww),e(wi,Td),e(Td,Bw),e(wi,Uw),e(Ce,Qw),e(Ce,Et),w($i,Et,null),e(Et,Hw),e(Et,Bo),e(Bo,Vw),e(Bo,Wp),e(Wp,Jw),e(Bo,Kw),e(Bo,Bp),e(Bp,Gw),e(Bo,Yw),e(Et,Zw),w(us,Et,null),e(Et,e$),w(fs,Et,null),b(o,Am,k),b(o,Uo,k),e(Uo,gs),e(gs,Up),w(Mi,Up,null),e(Uo,t$),e(Uo,Qp),e(Qp,o$),b(o,Om,k),b(o,je,k),w(Fi,je,null),e(je,n$),e(je,Hp),e(Hp,s$),e(je,a$),e(je,xi),e(xi,r$),e(xi,yd),e(yd,i$),e(xi,l$),e(je,d$),e(je,Ri),e(Ri,c$),e(Ri,Li),e(Li,p$),e(Ri,h$),e(je,m$),e(je,Vp),e(Vp,u$),e(je,f$),e(je,Ut),e(Ut,Jp),e(Jp,Ei),e(Ei,g$),e(Ut,_$),e(Ut,Kp),e(Kp,zi),e(zi,b$),e(Ut,k$),e(Ut,Gp),e(Gp,qi),e(qi,v$),e(Ut,T$),e(Ut,Yp),e(Yp,Ci),e(Ci,y$),e(je,w$),e(je,ji),e(ji,$$),e(ji,wd),e(wd,M$),e(ji,F$),e(je,x$),e(je,zt),w(Xi,zt,null),e(zt,R$),e(zt,Qo),e(Qo,L$),e(Qo,Zp),e(Zp,E$),e(Qo,z$),e(Qo,eh),e(eh,q$),e(Qo,C$),e(zt,j$),w(_s,zt,null),e(zt,X$),w(bs,zt,null),b(o,Nm,k),b(o,Ho,k),e(Ho,ks),e(ks,th),w(Pi,th,null),e(Ho,P$),e(Ho,oh),e(oh,A$),b(o,Im,k),b(o,Xe,k),w(Ai,Xe,null),e(Xe,O$),e(Xe,nh),e(nh,N$),e(Xe,I$),e(Xe,Oi),e(Oi,D$),e(Oi,$d),e($d,S$),e(Oi,W$),e(Xe,B$),e(Xe,Ni),e(Ni,U$),e(Ni,Ii),e(Ii,Q$),e(Ni,H$),e(Xe,V$),e(Xe,sh),e(sh,J$),e(Xe,K$),e(Xe,Qt),e(Qt,ah),e(ah,Di),e(Di,G$),e(Qt,Y$),e(Qt,rh),e(rh,Si),e(Si,Z$),e(Qt,eM),e(Qt,ih),e(ih,Wi),e(Wi,tM),e(Qt,oM),e(Qt,lh),e(lh,Bi),e(Bi,nM),e(Xe,sM),e(Xe,Ui),e(Ui,aM),e(Ui,Md),e(Md,rM),e(Ui,iM),e(Xe,lM),e(Xe,qt),w(Qi,qt,null),e(qt,dM),e(qt,Vo),e(Vo,cM),e(Vo,dh),e(dh,pM),e(Vo,hM),e(Vo,ch),e(ch,mM),e(Vo,uM),e(qt,fM),w(vs,qt,null),e(qt,gM),w(Ts,qt,null),b(o,Dm,k),b(o,Jo,k),e(Jo,ys),e(ys,ph),w(Hi,ph,null),e(Jo,_M),e(Jo,hh),e(hh,bM),b(o,Sm,k),b(o,Pe,k),w(Vi,Pe,null),e(Pe,kM),e(Pe,Ko),e(Ko,vM),e(Ko,mh),e(mh,TM),e(Ko,yM),e(Ko,uh),e(uh,wM),e(Ko,$M),e(Pe,MM),e(Pe,Ji),e(Ji,FM),e(Ji,Fd),e(Fd,xM),e(Ji,RM),e(Pe,LM),e(Pe,Ki),e(Ki,EM),e(Ki,Gi),e(Gi,zM),e(Ki,qM),e(Pe,CM),e(Pe,fh),e(fh,jM),e(Pe,XM),e(Pe,Ht),e(Ht,gh),e(gh,Yi),e(Yi,PM),e(Ht,AM),e(Ht,_h),e(_h,Zi),e(Zi,OM),e(Ht,NM),e(Ht,bh),e(bh,el),e(el,IM),e(Ht,DM),e(Ht,kh),e(kh,tl),e(tl,SM),e(Pe,WM),e(Pe,ol),e(ol,BM),e(ol,xd),e(xd,UM),e(ol,QM),e(Pe,HM),e(Pe,Ct),w(nl,Ct,null),e(Ct,VM),e(Ct,Go),e(Go,JM),e(Go,vh),e(vh,KM),e(Go,GM),e(Go,Th),e(Th,YM),e(Go,ZM),e(Ct,e0),w(ws,Ct,null),e(Ct,t0),w($s,Ct,null),Wm=!0},p(o,[k]){const sl={};k&2&&(sl.$$scope={dirty:k,ctx:o}),rn.$set(sl);const yh={};k&2&&(yh.$$scope={dirty:k,ctx:o}),ln.$set(yh);const wh={};k&2&&(wh.$$scope={dirty:k,ctx:o}),cn.$set(wh);const $h={};k&2&&($h.$$scope={dirty:k,ctx:o}),pn.$set($h);const al={};k&2&&(al.$$scope={dirty:k,ctx:o}),mn.$set(al);const Mh={};k&2&&(Mh.$$scope={dirty:k,ctx:o}),un.$set(Mh);const Fh={};k&2&&(Fh.$$scope={dirty:k,ctx:o}),fn.$set(Fh);const xh={};k&2&&(xh.$$scope={dirty:k,ctx:o}),_n.$set(xh);const rl={};k&2&&(rl.$$scope={dirty:k,ctx:o}),bn.$set(rl);const Rh={};k&2&&(Rh.$$scope={dirty:k,ctx:o}),kn.$set(Rh);const Lh={};k&2&&(Lh.$$scope={dirty:k,ctx:o}),vn.$set(Lh);const Eh={};k&2&&(Eh.$$scope={dirty:k,ctx:o}),Tn.$set(Eh);const zh={};k&2&&(zh.$$scope={dirty:k,ctx:o}),wn.$set(zh);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),$n.$set(qh);const il={};k&2&&(il.$$scope={dirty:k,ctx:o}),Fn.$set(il);const ll={};k&2&&(ll.$$scope={dirty:k,ctx:o}),xn.$set(ll);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),Rn.$set(Ch);const dl={};k&2&&(dl.$$scope={dirty:k,ctx:o}),En.$set(dl);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),zn.$set(jh);const Yo={};k&2&&(Yo.$$scope={dirty:k,ctx:o}),qn.$set(Yo);const Xh={};k&2&&(Xh.$$scope={dirty:k,ctx:o}),jn.$set(Xh);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),Xn.$set(Ph);const cl={};k&2&&(cl.$$scope={dirty:k,ctx:o}),Pn.$set(cl);const Ah={};k&2&&(Ah.$$scope={dirty:k,ctx:o}),On.$set(Ah);const Oh={};k&2&&(Oh.$$scope={dirty:k,ctx:o}),Nn.$set(Oh);const Nh={};k&2&&(Nh.$$scope={dirty:k,ctx:o}),In.$set(Nh);const pl={};k&2&&(pl.$$scope={dirty:k,ctx:o}),Dn.$set(pl);const hl={};k&2&&(hl.$$scope={dirty:k,ctx:o}),Wn.$set(hl);const Ih={};k&2&&(Ih.$$scope={dirty:k,ctx:o}),Bn.$set(Ih);const ml={};k&2&&(ml.$$scope={dirty:k,ctx:o}),Un.$set(ml);const Dh={};k&2&&(Dh.$$scope={dirty:k,ctx:o}),Qn.$set(Dh);const Sh={};k&2&&(Sh.$$scope={dirty:k,ctx:o}),Vn.$set(Sh);const Wh={};k&2&&(Wh.$$scope={dirty:k,ctx:o}),Jn.$set(Wh);const et={};k&2&&(et.$$scope={dirty:k,ctx:o}),Kn.$set(et);const Vt={};k&2&&(Vt.$$scope={dirty:k,ctx:o}),Yn.$set(Vt);const Bh={};k&2&&(Bh.$$scope={dirty:k,ctx:o}),Zn.$set(Bh);const Uh={};k&2&&(Uh.$$scope={dirty:k,ctx:o}),es.$set(Uh);const Qh={};k&2&&(Qh.$$scope={dirty:k,ctx:o}),ts.$set(Qh);const ul={};k&2&&(ul.$$scope={dirty:k,ctx:o}),ns.$set(ul);const Hh={};k&2&&(Hh.$$scope={dirty:k,ctx:o}),ss.$set(Hh);const Zo={};k&2&&(Zo.$$scope={dirty:k,ctx:o}),as.$set(Zo);const Vh={};k&2&&(Vh.$$scope={dirty:k,ctx:o}),rs.$set(Vh);const fl={};k&2&&(fl.$$scope={dirty:k,ctx:o}),ls.$set(fl);const Rd={};k&2&&(Rd.$$scope={dirty:k,ctx:o}),ds.$set(Rd);const Jh={};k&2&&(Jh.$$scope={dirty:k,ctx:o}),ps.$set(Jh);const Ld={};k&2&&(Ld.$$scope={dirty:k,ctx:o}),hs.$set(Ld);const Kh={};k&2&&(Kh.$$scope={dirty:k,ctx:o}),us.$set(Kh);const gl={};k&2&&(gl.$$scope={dirty:k,ctx:o}),fs.$set(gl);const _l={};k&2&&(_l.$$scope={dirty:k,ctx:o}),_s.$set(_l);const Gh={};k&2&&(Gh.$$scope={dirty:k,ctx:o}),bs.$set(Gh);const bl={};k&2&&(bl.$$scope={dirty:k,ctx:o}),vs.$set(bl);const Yh={};k&2&&(Yh.$$scope={dirty:k,ctx:o}),Ts.$set(Yh);const Zh={};k&2&&(Zh.$$scope={dirty:k,ctx:o}),ws.$set(Zh);const kl={};k&2&&(kl.$$scope={dirty:k,ctx:o}),$s.$set(kl)},i(o){Wm||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(ne.$$.fragment,o),$(Ss.$$.fragment,o),$(Bs.$$.fragment,o),$(Us.$$.fragment,o),$(Vs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(Zs.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(sa.$$.fragment,o),$(ra.$$.fragment,o),$(ia.$$.fragment,o),$(la.$$.fragment,o),$(ma.$$.fragment,o),$(rn.$$.fragment,o),$(ln.$$.fragment,o),$(ua.$$.fragment,o),$(fa.$$.fragment,o),$(Ta.$$.fragment,o),$(cn.$$.fragment,o),$(pn.$$.fragment,o),$(ya.$$.fragment,o),$(wa.$$.fragment,o),$(La.$$.fragment,o),$(mn.$$.fragment,o),$(un.$$.fragment,o),$(fn.$$.fragment,o),$(Ea.$$.fragment,o),$(za.$$.fragment,o),$(Pa.$$.fragment,o),$(_n.$$.fragment,o),$(bn.$$.fragment,o),$(kn.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Aa.$$.fragment,o),$(Oa.$$.fragment,o),$(Wa.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(Ba.$$.fragment,o),$(Ua.$$.fragment,o),$(Ka.$$.fragment,o),$(Fn.$$.fragment,o),$(xn.$$.fragment,o),$(Rn.$$.fragment,o),$(Ga.$$.fragment,o),$(Ya.$$.fragment,o),$(nr.$$.fragment,o),$(En.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(sr.$$.fragment,o),$(ar.$$.fragment,o),$(jn.$$.fragment,o),$(cr.$$.fragment,o),$(Xn.$$.fragment,o),$(Pn.$$.fragment,o),$(pr.$$.fragment,o),$(hr.$$.fragment,o),$(On.$$.fragment,o),$(br.$$.fragment,o),$(Nn.$$.fragment,o),$(In.$$.fragment,o),$(Dn.$$.fragment,o),$(kr.$$.fragment,o),$(vr.$$.fragment,o),$(Wn.$$.fragment,o),$(Mr.$$.fragment,o),$(Bn.$$.fragment,o),$(Un.$$.fragment,o),$(Qn.$$.fragment,o),$(Fr.$$.fragment,o),$(xr.$$.fragment,o),$(Vn.$$.fragment,o),$(qr.$$.fragment,o),$(Jn.$$.fragment,o),$(Kn.$$.fragment,o),$(Cr.$$.fragment,o),$(jr.$$.fragment,o),$(Yn.$$.fragment,o),$(Nr.$$.fragment,o),$(Zn.$$.fragment,o),$(es.$$.fragment,o),$(ts.$$.fragment,o),$(Ir.$$.fragment,o),$(Dr.$$.fragment,o),$(ns.$$.fragment,o),$(Qr.$$.fragment,o),$(ss.$$.fragment,o),$(as.$$.fragment,o),$(rs.$$.fragment,o),$(Hr.$$.fragment,o),$(Vr.$$.fragment,o),$(ni.$$.fragment,o),$(ls.$$.fragment,o),$(ds.$$.fragment,o),$(si.$$.fragment,o),$(ai.$$.fragment,o),$(mi.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(ui.$$.fragment,o),$(fi.$$.fragment,o),$($i.$$.fragment,o),$(us.$$.fragment,o),$(fs.$$.fragment,o),$(Mi.$$.fragment,o),$(Fi.$$.fragment,o),$(Xi.$$.fragment,o),$(_s.$$.fragment,o),$(bs.$$.fragment,o),$(Pi.$$.fragment,o),$(Ai.$$.fragment,o),$(Qi.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(Hi.$$.fragment,o),$(Vi.$$.fragment,o),$(nl.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),Wm=!0)},o(o){M(l.$$.fragment,o),M(ee.$$.fragment,o),M(ne.$$.fragment,o),M(Ss.$$.fragment,o),M(Bs.$$.fragment,o),M(Us.$$.fragment,o),M(Vs.$$.fragment,o),M(Ks.$$.fragment,o),M(Ys.$$.fragment,o),M(Zs.$$.fragment,o),M(ea.$$.fragment,o),M(ta.$$.fragment,o),M(sa.$$.fragment,o),M(ra.$$.fragment,o),M(ia.$$.fragment,o),M(la.$$.fragment,o),M(ma.$$.fragment,o),M(rn.$$.fragment,o),M(ln.$$.fragment,o),M(ua.$$.fragment,o),M(fa.$$.fragment,o),M(Ta.$$.fragment,o),M(cn.$$.fragment,o),M(pn.$$.fragment,o),M(ya.$$.fragment,o),M(wa.$$.fragment,o),M(La.$$.fragment,o),M(mn.$$.fragment,o),M(un.$$.fragment,o),M(fn.$$.fragment,o),M(Ea.$$.fragment,o),M(za.$$.fragment,o),M(Pa.$$.fragment,o),M(_n.$$.fragment,o),M(bn.$$.fragment,o),M(kn.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(Aa.$$.fragment,o),M(Oa.$$.fragment,o),M(Wa.$$.fragment,o),M(wn.$$.fragment,o),M($n.$$.fragment,o),M(Ba.$$.fragment,o),M(Ua.$$.fragment,o),M(Ka.$$.fragment,o),M(Fn.$$.fragment,o),M(xn.$$.fragment,o),M(Rn.$$.fragment,o),M(Ga.$$.fragment,o),M(Ya.$$.fragment,o),M(nr.$$.fragment,o),M(En.$$.fragment,o),M(zn.$$.fragment,o),M(qn.$$.fragment,o),M(sr.$$.fragment,o),M(ar.$$.fragment,o),M(jn.$$.fragment,o),M(cr.$$.fragment,o),M(Xn.$$.fragment,o),M(Pn.$$.fragment,o),M(pr.$$.fragment,o),M(hr.$$.fragment,o),M(On.$$.fragment,o),M(br.$$.fragment,o),M(Nn.$$.fragment,o),M(In.$$.fragment,o),M(Dn.$$.fragment,o),M(kr.$$.fragment,o),M(vr.$$.fragment,o),M(Wn.$$.fragment,o),M(Mr.$$.fragment,o),M(Bn.$$.fragment,o),M(Un.$$.fragment,o),M(Qn.$$.fragment,o),M(Fr.$$.fragment,o),M(xr.$$.fragment,o),M(Vn.$$.fragment,o),M(qr.$$.fragment,o),M(Jn.$$.fragment,o),M(Kn.$$.fragment,o),M(Cr.$$.fragment,o),M(jr.$$.fragment,o),M(Yn.$$.fragment,o),M(Nr.$$.fragment,o),M(Zn.$$.fragment,o),M(es.$$.fragment,o),M(ts.$$.fragment,o),M(Ir.$$.fragment,o),M(Dr.$$.fragment,o),M(ns.$$.fragment,o),M(Qr.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(rs.$$.fragment,o),M(Hr.$$.fragment,o),M(Vr.$$.fragment,o),M(ni.$$.fragment,o),M(ls.$$.fragment,o),M(ds.$$.fragment,o),M(si.$$.fragment,o),M(ai.$$.fragment,o),M(mi.$$.fragment,o),M(ps.$$.fragment,o),M(hs.$$.fragment,o),M(ui.$$.fragment,o),M(fi.$$.fragment,o),M($i.$$.fragment,o),M(us.$$.fragment,o),M(fs.$$.fragment,o),M(Mi.$$.fragment,o),M(Fi.$$.fragment,o),M(Xi.$$.fragment,o),M(_s.$$.fragment,o),M(bs.$$.fragment,o),M(Pi.$$.fragment,o),M(Ai.$$.fragment,o),M(Qi.$$.fragment,o),M(vs.$$.fragment,o),M(Ts.$$.fragment,o),M(Hi.$$.fragment,o),M(Vi.$$.fragment,o),M(nl.$$.fragment,o),M(ws.$$.fragment,o),M($s.$$.fragment,o),Wm=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(E),F(ee),o&&t(ce),o&&t(V),o&&t(C),o&&t(se),o&&t(pe),o&&t(ae),o&&t(he),o&&t(q),o&&t(B),o&&t(Z),o&&t(xe),o&&t(me),o&&t(Re),o&&t(N),F(ne),o&&t(em),o&&t(ro),F(Ss),o&&t(tm),o&&t(io),F(Bs),o&&t(om),o&&t(Ae),F(Us),F(Vs),F(Ks),F(Ys),F(Zs),o&&t(nm),o&&t(lo),F(ea),o&&t(sm),o&&t(at),F(ta),F(sa),F(ra),o&&t(am),o&&t(co),F(ia),o&&t(rm),o&&t(He),F(la),F(ma),F(rn),F(ln),o&&t(im),o&&t(ho),F(ua),o&&t(lm),o&&t(Ve),F(fa),F(Ta),F(cn),F(pn),o&&t(dm),o&&t(uo),F(ya),o&&t(cm),o&&t(Je),F(wa),F(La),F(mn),F(un),F(fn),o&&t(pm),o&&t(go),F(Ea),o&&t(hm),o&&t(Ke),F(za),F(Pa),F(_n),F(bn),F(kn),F(vn),F(Tn),o&&t(mm),o&&t(bo),F(Aa),o&&t(um),o&&t(Ge),F(Oa),F(Wa),F(wn),F($n),o&&t(fm),o&&t(vo),F(Ba),o&&t(gm),o&&t(Ye),F(Ua),F(Ka),F(Fn),F(xn),F(Rn),o&&t(_m),o&&t(yo),F(Ga),o&&t(bm),o&&t(Ze),F(Ya),F(nr),F(En),F(zn),F(qn),o&&t(km),o&&t(Mo),F(sr),o&&t(vm),o&&t(Oe),F(ar),F(jn),F(cr),F(Xn),F(Pn),o&&t(Tm),o&&t(xo),F(pr),o&&t(ym),o&&t(Ne),F(hr),F(On),F(br),F(Nn),F(In),F(Dn),o&&t(wm),o&&t(Lo),F(kr),o&&t($m),o&&t(Ie),F(vr),F(Wn),F(Mr),F(Bn),F(Un),F(Qn),o&&t(Mm),o&&t(zo),F(Fr),o&&t(Fm),o&&t(De),F(xr),F(Vn),F(qr),F(Jn),F(Kn),o&&t(xm),o&&t(Co),F(Cr),o&&t(Rm),o&&t(Se),F(jr),F(Yn),F(Nr),F(Zn),F(es),F(ts),o&&t(Lm),o&&t(Xo),F(Ir),o&&t(Em),o&&t(We),F(Dr),F(ns),F(Qr),F(ss),F(as),F(rs),o&&t(zm),o&&t(Oo),F(Hr),o&&t(qm),o&&t(Be),F(Vr),F(ni),F(ls),F(ds),o&&t(Cm),o&&t(Io),F(si),o&&t(jm),o&&t(Ue),F(ai),F(mi),F(ps),F(hs),o&&t(Xm),o&&t(Wo),F(ui),o&&t(Pm),o&&t(Ce),F(fi),F($i),F(us),F(fs),o&&t(Am),o&&t(Uo),F(Mi),o&&t(Om),o&&t(je),F(Fi),F(Xi),F(_s),F(bs),o&&t(Nm),o&&t(Ho),F(Pi),o&&t(Im),o&&t(Xe),F(Ai),F(Qi),F(vs),F(Ts),o&&t(Dm),o&&t(Jo),F(Hi),o&&t(Sm),o&&t(Pe),F(Vi),F(nl),F(ws),F($s)}}}const CR={local:"xlmroberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaConfig",title:"XLMRobertaConfig"},{local:"transformers.XLMRobertaTokenizer",title:"XLMRobertaTokenizer"},{local:"transformers.XLMRobertaTokenizerFast",title:"XLMRobertaTokenizerFast"},{local:"transformers.XLMRobertaModel",title:"XLMRobertaModel"},{local:"transformers.XLMRobertaForCausalLM",title:"XLMRobertaForCausalLM"},{local:"transformers.XLMRobertaForMaskedLM",title:"XLMRobertaForMaskedLM"},{local:"transformers.XLMRobertaForSequenceClassification",title:"XLMRobertaForSequenceClassification"},{local:"transformers.XLMRobertaForMultipleChoice",title:"XLMRobertaForMultipleChoice"},{local:"transformers.XLMRobertaForTokenClassification",title:"XLMRobertaForTokenClassification"},{local:"transformers.XLMRobertaForQuestionAnswering",title:"XLMRobertaForQuestionAnswering"},{local:"transformers.TFXLMRobertaModel",title:"TFXLMRobertaModel"},{local:"transformers.TFXLMRobertaForMaskedLM",title:"TFXLMRobertaForMaskedLM"},{local:"transformers.TFXLMRobertaForSequenceClassification",title:"TFXLMRobertaForSequenceClassification"},{local:"transformers.TFXLMRobertaForMultipleChoice",title:"TFXLMRobertaForMultipleChoice"},{local:"transformers.TFXLMRobertaForTokenClassification",title:"TFXLMRobertaForTokenClassification"},{local:"transformers.TFXLMRobertaForQuestionAnswering",title:"TFXLMRobertaForQuestionAnswering"},{local:"transformers.FlaxXLMRobertaModel",title:"FlaxXLMRobertaModel"},{local:"transformers.FlaxXLMRobertaForMaskedLM",title:"FlaxXLMRobertaForMaskedLM"},{local:"transformers.FlaxXLMRobertaForSequenceClassification",title:"FlaxXLMRobertaForSequenceClassification"},{local:"transformers.FlaxXLMRobertaForMultipleChoice",title:"FlaxXLMRobertaForMultipleChoice"},{local:"transformers.FlaxXLMRobertaForTokenClassification",title:"FlaxXLMRobertaForTokenClassification"},{local:"transformers.FlaxXLMRobertaForQuestionAnswering",title:"FlaxXLMRobertaForQuestionAnswering"}],title:"XLM-RoBERTa"};function jR(x){return z4(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class DR extends x4{constructor(d){super();R4(this,d,jR,qR,L4,{})}}export{DR as default,CR as metadata};
