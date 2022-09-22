import{S as zR,i as qR,s as CR,e as s,k as c,w as y,t as o,M as jR,c as a,d as t,m as p,a as r,x as T,h as n,b as u,G as e,g as _,y as w,q as $,o as M,B as F,v as XR,L as ge}from"../../chunks/vendor-hf-doc-builder.js";import{T as De}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as _e}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as We}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as fe}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function PR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function AR(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function OR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function NR(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function IR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function DR(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function SR(x){let d,g;return d=new _e({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function WR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function BR(x){let d,g,h,f,k;return f=new _e({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of single-label classification:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function UR(x){let d,g;return d=new _e({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function QR(x){let d,g,h,f,k;return f=new _e({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example of multi-label classification:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function HR(x){let d,g;return d=new _e({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = RobertaForSequenceClassification.from_pretrained(
    "cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function VR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function KR(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function JR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function GR(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function YR(x){let d,g;return d=new _e({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function ZR(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function eL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function tL(x){let d,g;return d=new _e({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function oL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function nL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function sL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function aL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function rL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function iL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
import tensorflow as tf

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = TFRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, TFRobertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function lL(x){let d,g;return d=new _e({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function dL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function cL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function pL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function hL(x){let d,g;return d=new _e({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function mL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function uL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function fL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function gL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function _L(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function bL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function kL(x){let d,g;return d=new _e({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function vL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),h=s("code"),f=o("transformers"),k=o(" accept two formats as input:"),l=c(),m=s("ul"),L=s("li"),$e=o("having all inputs as keyword arguments (like PyTorch models), or"),be=c(),O=s("li"),re=o("having all inputs as a list, tuple or dict in the first positional argument."),te=c(),R=s("p"),Me=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=s("code"),Fe=o("model.fit()"),ke=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=s("code"),xe=o("model.fit()"),de=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),H=s("code"),Re=o("fit()"),ve=o(" and "),W=s("code"),Le=o("predict()"),ye=o(`, such as when creating your own layers or models with
the Keras `),B=s("code"),ue=o("Functional"),Ee=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),ne=c(),q=s("ul"),C=s("li"),Te=o("a single Tensor with "),S=s("code"),ce=o("input_ids"),ze=o(" only and nothing else: "),Q=s("code"),qe=o("model(input_ids)"),Ce=c(),j=s("li"),pe=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=s("code"),me=o("model([input_ids, attention_mask])"),je=o(" or "),K=s("code"),we=o("model([input_ids, attention_mask, token_type_ids])"),se=c(),N=s("li"),he=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=s("code"),Xe=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Z=c(),X=s("p"),Pe=o(`Note that when creating models and layers with
`),P=s("a"),ae=o("subclassing"),ie=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=a(v,"P",{});var E=r(d);g=n(E,"TensorFlow models and layers in "),h=a(E,"CODE",{});var He=r(h);f=n(He,"transformers"),He.forEach(t),k=n(E," accept two formats as input:"),E.forEach(t),l=p(v),m=a(v,"UL",{});var oe=r(m);L=a(oe,"LI",{});var Ve=r(L);$e=n(Ve,"having all inputs as keyword arguments (like PyTorch models), or"),Ve.forEach(t),be=p(oe),O=a(oe,"LI",{});var Ue=r(O);re=n(Ue,"having all inputs as a list, tuple or dict in the first positional argument."),Ue.forEach(t),oe.forEach(t),te=p(v),R=a(v,"P",{});var z=r(R);Me=n(z,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),U=a(z,"CODE",{});var Ne=r(U);Fe=n(Ne,"model.fit()"),Ne.forEach(t),ke=n(z,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),D=a(z,"CODE",{});var Ke=r(D);xe=n(Ke,"model.fit()"),Ke.forEach(t),de=n(z,` supports! If, however, you want to use the second
format outside of Keras methods like `),H=a(z,"CODE",{});var Ae=r(H);Re=n(Ae,"fit()"),Ae.forEach(t),ve=n(z," and "),W=a(z,"CODE",{});var Je=r(W);Le=n(Je,"predict()"),Je.forEach(t),ye=n(z,`, such as when creating your own layers or models with
the Keras `),B=a(z,"CODE",{});var Se=r(B);ue=n(Se,"Functional"),Se.forEach(t),Ee=n(z,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),z.forEach(t),ne=p(v),q=a(v,"UL",{});var I=r(q);C=a(I,"LI",{});var G=r(C);Te=n(G,"a single Tensor with "),S=a(G,"CODE",{});var Ie=r(S);ce=n(Ie,"input_ids"),Ie.forEach(t),ze=n(G," only and nothing else: "),Q=a(G,"CODE",{});var Ge=r(Q);qe=n(Ge,"model(input_ids)"),Ge.forEach(t),G.forEach(t),Ce=p(I),j=a(I,"LI",{});var Y=r(j);pe=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),V=a(Y,"CODE",{});var Qe=r(V);me=n(Qe,"model([input_ids, attention_mask])"),Qe.forEach(t),je=n(Y," or "),K=a(Y,"CODE",{});var Oe=r(K);we=n(Oe,"model([input_ids, attention_mask, token_type_ids])"),Oe.forEach(t),Y.forEach(t),se=p(I),N=a(I,"LI",{});var le=r(N);he=n(le,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),J=a(le,"CODE",{});var Be=r(J);Xe=n(Be,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Be.forEach(t),le.forEach(t),I.forEach(t),Z=p(v),X=a(v,"P",{});var ee=r(X);Pe=n(ee,`Note that when creating models and layers with
`),P=a(ee,"A",{href:!0,rel:!0});var Ye=r(P);ae=n(Ye,"subclassing"),Ye.forEach(t),ie=n(ee,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),ee.forEach(t),this.h()},h(){u(P,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(P,"rel","nofollow")},m(v,E){_(v,d,E),e(d,g),e(d,h),e(h,f),e(d,k),_(v,l,E),_(v,m,E),e(m,L),e(L,$e),e(m,be),e(m,O),e(O,re),_(v,te,E),_(v,R,E),e(R,Me),e(R,U),e(U,Fe),e(R,ke),e(R,D),e(D,xe),e(R,de),e(R,H),e(H,Re),e(R,ve),e(R,W),e(W,Le),e(R,ye),e(R,B),e(B,ue),e(R,Ee),_(v,ne,E),_(v,q,E),e(q,C),e(C,Te),e(C,S),e(S,ce),e(C,ze),e(C,Q),e(Q,qe),e(q,Ce),e(q,j),e(j,pe),e(j,V),e(V,me),e(j,je),e(j,K),e(K,we),e(q,se),e(q,N),e(N,he),e(N,J),e(J,Xe),_(v,Z,E),_(v,X,E),e(X,Pe),e(X,P),e(P,ae),e(X,ie)},d(v){v&&t(d),v&&t(l),v&&t(m),v&&t(te),v&&t(R),v&&t(ne),v&&t(q),v&&t(Z),v&&t(X)}}}function yL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function TL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function wL(x){let d,g;return d=new _e({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){y(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,f){w(d,h,f),g=!0},p:ge,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function $L(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function ML(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function FL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function xL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function RL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function LL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function EL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function zL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function qL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function CL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function jL(x){let d,g,h,f,k;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s("code"),f=o("Module"),k=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(m,"CODE",{});var L=r(h);f=n(L,"Module"),L.forEach(t),k=n(m,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),m.forEach(t)},m(l,m){_(l,d,m),e(d,g),e(d,h),e(h,f),e(d,k)},d(l){l&&t(d)}}}function XL(x){let d,g,h,f,k;return f=new _e({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),h=c(),y(f.$$.fragment)},l(l){d=a(l,"P",{});var m=r(d);g=n(m,"Example:"),m.forEach(t),h=p(l),T(f.$$.fragment,l)},m(l,m){_(l,d,m),e(d,g),_(l,h,m),w(f,l,m),k=!0},p:ge,i(l){k||($(f.$$.fragment,l),k=!0)},o(l){M(f.$$.fragment,l),k=!1},d(l){l&&t(d),l&&t(h),F(f,l)}}}function PL(x){let d,g,h,f,k,l,m,L,$e,be,O,re,te,R,Me,U,Fe,ke,D,xe,de,H,Re,ve,W,Le,ye,B,ue,Ee,ne,q,C,Te,S,ce,ze,Q,qe,Ce,j,pe,V,me,je,K,we,se,N,he,J,Xe,Z,X,Pe,P,ae,ie,v,E,He,oe,Ve,Ue,z,Ne,Ke,Ae,Je,Se,I,G,Ie,Ge,Y,Qe,Oe,le,Be,ee,Ye,hc,Rf,pm,nt,ra,Lf,io,Ef,Cl,zf,qf,jl,Cf,jf,ia,Xf,Pf,Af,la,Of,Xl,Nf,If,Df,go,da,Sf,mc,Wf,Bf,ca,Pl,Uf,uc,Qf,Hf,Al,Vf,fc,Kf,Jf,vn,pa,Gf,ha,Yf,gc,Zf,eg,tg,yn,ma,og,_c,ng,sg,Ol,ua,hm,xo,Tn,bc,fa,ag,kc,rg,mm,Mt,ga,ig,St,lg,vc,dg,cg,Nl,pg,hg,Il,mg,ug,_a,fg,gg,_g,ba,bg,Dl,kg,vg,yg,_o,ka,Tg,yc,wg,$g,va,Sl,Mg,Tc,Fg,xg,Wl,Rg,wc,Lg,Eg,wn,ya,zg,$c,qg,um,Ro,$n,Mc,Ta,Cg,Fc,jg,fm,mt,wa,Xg,xc,Pg,Ag,$a,Og,Bl,Ng,Ig,Dg,Ma,Sg,Fa,Wg,Bg,Ug,xa,Qg,Ul,Hg,Vg,Kg,Wt,Ra,Jg,Lo,Gg,Ql,Yg,Zg,Rc,e_,t_,o_,Mn,n_,Fn,gm,Eo,xn,Lc,La,s_,Ec,a_,_m,ut,Ea,r_,za,i_,zc,l_,d_,c_,qa,p_,Hl,h_,m_,u_,Ca,f_,ja,g_,__,b_,Xa,k_,Vl,v_,y_,T_,Bt,Pa,w_,zo,$_,Kl,M_,F_,qc,x_,R_,L_,Rn,E_,Ln,bm,qo,En,Cc,Aa,z_,jc,q_,km,ft,Oa,C_,Na,j_,Xc,X_,P_,A_,Ia,O_,Jl,N_,I_,D_,Da,S_,Sa,W_,B_,U_,Wa,Q_,Gl,H_,V_,K_,Ft,Ba,J_,Co,G_,Yl,Y_,Z_,Pc,eb,tb,ob,zn,nb,qn,sb,Cn,vm,jo,jn,Ac,Ua,ab,Oc,rb,ym,gt,Qa,ib,Nc,lb,db,Ha,cb,Zl,pb,hb,mb,Va,ub,Ka,fb,gb,_b,Ja,bb,ed,kb,vb,yb,ht,Ga,Tb,Xo,wb,td,$b,Mb,Ic,Fb,xb,Rb,Xn,Lb,Pn,Eb,An,zb,On,qb,Nn,Tm,Po,In,Dc,Ya,Cb,Sc,jb,wm,_t,Za,Xb,Wc,Pb,Ab,er,Ob,od,Nb,Ib,Db,tr,Sb,or,Wb,Bb,Ub,nr,Qb,nd,Hb,Vb,Kb,Ut,sr,Jb,Ao,Gb,sd,Yb,Zb,Bc,ek,tk,ok,Dn,nk,Sn,$m,Oo,Wn,Uc,ar,sk,Qc,ak,Mm,bt,rr,rk,Hc,ik,lk,ir,dk,ad,ck,pk,hk,lr,mk,dr,uk,fk,gk,cr,_k,rd,bk,kk,vk,xt,pr,yk,No,Tk,id,wk,$k,Vc,Mk,Fk,xk,Bn,Rk,Un,Lk,Qn,Fm,Io,Hn,Kc,hr,Ek,Jc,zk,xm,kt,mr,qk,Do,Ck,Gc,jk,Xk,Yc,Pk,Ak,Ok,ur,Nk,ld,Ik,Dk,Sk,fr,Wk,gr,Bk,Uk,Qk,_r,Hk,dd,Vk,Kk,Jk,Rt,br,Gk,So,Yk,cd,Zk,ev,Zc,tv,ov,nv,Vn,sv,Kn,av,Jn,Rm,Wo,Gn,ep,kr,rv,tp,iv,Lm,st,vr,lv,op,dv,cv,yr,pv,pd,hv,mv,uv,Tr,fv,wr,gv,_v,bv,Yn,kv,$r,vv,hd,yv,Tv,wv,Qt,Mr,$v,Bo,Mv,md,Fv,xv,np,Rv,Lv,Ev,Zn,zv,es,Em,Uo,ts,sp,Fr,qv,ap,Cv,zm,at,xr,jv,Rr,Xv,rp,Pv,Av,Ov,Lr,Nv,ud,Iv,Dv,Sv,Er,Wv,zr,Bv,Uv,Qv,os,Hv,qr,Vv,fd,Kv,Jv,Gv,Lt,Cr,Yv,Qo,Zv,gd,ey,ty,ip,oy,ny,sy,ns,ay,ss,ry,as,qm,Ho,rs,lp,jr,iy,dp,ly,Cm,rt,Xr,dy,cp,cy,py,Pr,hy,_d,my,uy,fy,Ar,gy,Or,_y,by,ky,is,vy,Nr,yy,bd,Ty,wy,$y,Et,Ir,My,Vo,Fy,kd,xy,Ry,pp,Ly,Ey,zy,ls,qy,ds,Cy,cs,jm,Ko,ps,hp,Dr,jy,mp,Xy,Xm,it,Sr,Py,up,Ay,Oy,Wr,Ny,vd,Iy,Dy,Sy,Br,Wy,Ur,By,Uy,Qy,hs,Hy,Qr,Vy,yd,Ky,Jy,Gy,Ht,Hr,Yy,Jo,Zy,Td,eT,tT,fp,oT,nT,sT,ms,aT,us,Pm,Go,fs,gp,Vr,rT,_p,iT,Am,lt,Kr,lT,bp,dT,cT,Jr,pT,wd,hT,mT,uT,Gr,fT,Yr,gT,_T,bT,gs,kT,Zr,vT,$d,yT,TT,wT,zt,ei,$T,Yo,MT,Md,FT,xT,kp,RT,LT,ET,_s,zT,bs,qT,ks,Om,Zo,vs,vp,ti,CT,yp,jT,Nm,dt,oi,XT,en,PT,Tp,AT,OT,wp,NT,IT,DT,ni,ST,Fd,WT,BT,UT,si,QT,ai,HT,VT,KT,ys,JT,ri,GT,$p,YT,ZT,ew,qt,ii,tw,tn,ow,xd,nw,sw,Mp,aw,rw,iw,Ts,lw,ws,dw,$s,Im,on,Ms,Fp,li,cw,xp,pw,Dm,ct,di,hw,ci,mw,Rd,uw,fw,gw,pi,_w,hi,bw,kw,vw,Rp,yw,Tw,lo,Lp,mi,ww,$w,Ep,ui,Mw,Fw,zp,fi,xw,Rw,qp,gi,Lw,Ew,_i,zw,Ld,qw,Cw,jw,Vt,bi,Xw,nn,Pw,Cp,Aw,Ow,jp,Nw,Iw,Dw,Fs,Sw,xs,Sm,sn,Rs,Xp,ki,Ww,Pp,Bw,Wm,pt,vi,Uw,an,Qw,Ap,Hw,Vw,Ed,Kw,Jw,Gw,yi,Yw,Ti,Zw,e$,t$,Op,o$,n$,co,Np,wi,s$,a$,Ip,$i,r$,i$,Dp,Mi,l$,d$,Sp,Fi,c$,p$,xi,h$,zd,m$,u$,f$,Kt,Ri,g$,rn,_$,Wp,b$,k$,Bp,v$,y$,T$,Ls,w$,Es,Bm,ln,zs,Up,Li,$$,Qp,M$,Um,Ze,Ei,F$,Hp,x$,R$,zi,L$,qd,E$,z$,q$,qi,C$,Ci,j$,X$,P$,Vp,A$,O$,po,Kp,ji,N$,I$,Jp,Xi,D$,S$,Gp,Pi,W$,B$,Yp,Ai,U$,Q$,Oi,H$,Cd,V$,K$,J$,Jt,Ni,G$,dn,Y$,Zp,Z$,e1,eh,t1,o1,n1,qs,s1,Cs,Qm,cn,js,th,Ii,a1,oh,r1,Hm,et,Di,i1,nh,l1,d1,Si,c1,jd,p1,h1,m1,Wi,u1,Bi,f1,g1,_1,sh,b1,k1,ho,ah,Ui,v1,y1,rh,Qi,T1,w1,ih,Hi,$1,M1,lh,Vi,F1,x1,Ki,R1,Xd,L1,E1,z1,Gt,Ji,q1,pn,C1,dh,j1,X1,ch,P1,A1,O1,Xs,N1,Ps,Vm,hn,As,ph,Gi,I1,hh,D1,Km,tt,Yi,S1,mh,W1,B1,Zi,U1,Pd,Q1,H1,V1,el,K1,tl,J1,G1,Y1,uh,Z1,eM,mo,fh,ol,tM,oM,gh,nl,nM,sM,_h,sl,aM,rM,bh,al,iM,lM,rl,dM,Ad,cM,pM,hM,Yt,il,mM,mn,uM,kh,fM,gM,vh,_M,bM,kM,Os,vM,Ns,Jm,un,Is,yh,ll,yM,Th,TM,Gm,ot,dl,wM,fn,$M,wh,MM,FM,$h,xM,RM,LM,cl,EM,Od,zM,qM,CM,pl,jM,hl,XM,PM,AM,Mh,OM,NM,uo,Fh,ml,IM,DM,xh,ul,SM,WM,Rh,fl,BM,UM,Lh,gl,QM,HM,_l,VM,Nd,KM,JM,GM,Zt,bl,YM,gn,ZM,Eh,e2,t2,zh,o2,n2,s2,Ds,a2,Ss,Ym;return l=new We({}),R=new We({}),E=new We({}),Ne=new A({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L45"}}),ee=new We({}),ra=new A({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L63"}}),da=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L202",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),pa=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ma=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L256",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ua=new A({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L313"}}),fa=new We({}),ga=new A({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L82"}}),ka=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L171",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ya=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L197",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ta=new We({}),wa=new A({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L65"}}),Ra=new A({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L734",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new De({props:{$$slots:{default:[PR]},$$scope:{ctx:x}}}),Fn=new fe({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[AR]},$$scope:{ctx:x}}}),La=new We({}),Ea=new A({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L78"}}),Pa=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L901",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new De({props:{$$slots:{default:[OR]},$$scope:{ctx:x}}}),Ln=new fe({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[NR]},$$scope:{ctx:x}}}),Aa=new We({}),Oa=new A({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L91"}}),Ba=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1056",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),zn=new De({props:{$$slots:{default:[IR]},$$scope:{ctx:x}}}),qn=new fe({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[DR]},$$scope:{ctx:x}}}),Cn=new fe({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example-2",$$slots:{default:[SR]},$$scope:{ctx:x}}}),Ua=new We({}),Qa=new A({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L107"}}),Ga=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1172",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xn=new De({props:{$$slots:{default:[WR]},$$scope:{ctx:x}}}),Pn=new fe({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[BR]},$$scope:{ctx:x}}}),An=new fe({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[UR]},$$scope:{ctx:x}}}),On=new fe({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-3",$$slots:{default:[QR]},$$scope:{ctx:x}}}),Nn=new fe({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-4",$$slots:{default:[HR]},$$scope:{ctx:x}}}),Ya=new We({}),Za=new A({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L123"}}),sr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1271",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Dn=new De({props:{$$slots:{default:[VR]},$$scope:{ctx:x}}}),Sn=new fe({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[KR]},$$scope:{ctx:x}}}),ar=new We({}),rr=new A({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L139"}}),pr=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1369",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bn=new De({props:{$$slots:{default:[JR]},$$scope:{ctx:x}}}),Un=new fe({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[GR]},$$scope:{ctx:x}}}),Qn=new fe({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example-2",$$slots:{default:[YR]},$$scope:{ctx:x}}}),hr=new We({}),mr=new A({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L155"}}),br=new A({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_roberta.py#L1474",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vn=new De({props:{$$slots:{default:[ZR]},$$scope:{ctx:x}}}),Kn=new fe({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[eL]},$$scope:{ctx:x}}}),Jn=new fe({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example-2",$$slots:{default:[tL]},$$scope:{ctx:x}}}),kr=new We({}),vr=new A({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L85"}}),Yn=new De({props:{$$slots:{default:[oL]},$$scope:{ctx:x}}}),Mr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L919",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zn=new De({props:{$$slots:{default:[nL]},$$scope:{ctx:x}}}),es=new fe({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[sL]},$$scope:{ctx:x}}}),Fr=new We({}),xr=new A({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L111"}}),os=new De({props:{$$slots:{default:[aL]},$$scope:{ctx:x}}}),Cr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1075",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ns=new De({props:{$$slots:{default:[rL]},$$scope:{ctx:x}}}),ss=new fe({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[iL]},$$scope:{ctx:x}}}),as=new fe({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[lL]},$$scope:{ctx:x}}}),jr=new We({}),Xr=new A({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L127"}}),is=new De({props:{$$slots:{default:[dL]},$$scope:{ctx:x}}}),Ir=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1334",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ls=new De({props:{$$slots:{default:[cL]},$$scope:{ctx:x}}}),ds=new fe({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[pL]},$$scope:{ctx:x}}}),cs=new fe({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[hL]},$$scope:{ctx:x}}}),Dr=new We({}),Sr=new A({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L175"}}),hs=new De({props:{$$slots:{default:[mL]},$$scope:{ctx:x}}}),Hr=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1431",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ms=new De({props:{$$slots:{default:[uL]},$$scope:{ctx:x}}}),us=new fe({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[fL]},$$scope:{ctx:x}}}),Vr=new We({}),Kr=new A({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L143"}}),gs=new De({props:{$$slots:{default:[gL]},$$scope:{ctx:x}}}),ei=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1546",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),_s=new De({props:{$$slots:{default:[_L]},$$scope:{ctx:x}}}),bs=new fe({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[bL]},$$scope:{ctx:x}}}),ks=new fe({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[kL]},$$scope:{ctx:x}}}),ti=new We({}),oi=new A({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L159"}}),ys=new De({props:{$$slots:{default:[vL]},$$scope:{ctx:x}}}),ii=new A({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_tf_roberta.py#L1632",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ts=new De({props:{$$slots:{default:[yL]},$$scope:{ctx:x}}}),ws=new fe({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[TL]},$$scope:{ctx:x}}}),$s=new fe({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[wL]},$$scope:{ctx:x}}}),li=new We({}),di=new A({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L68"}}),bi=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Fs=new De({props:{$$slots:{default:[$L]},$$scope:{ctx:x}}}),xs=new fe({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[ML]},$$scope:{ctx:x}}}),ki=new We({}),vi=new A({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L81"}}),Ri=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ls=new De({props:{$$slots:{default:[FL]},$$scope:{ctx:x}}}),Es=new fe({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[xL]},$$scope:{ctx:x}}}),Li=new We({}),Ei=new A({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L97"}}),Ni=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qs=new De({props:{$$slots:{default:[RL]},$$scope:{ctx:x}}}),Cs=new fe({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[LL]},$$scope:{ctx:x}}}),Ii=new We({}),Di=new A({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L113"}}),Ji=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Xs=new De({props:{$$slots:{default:[EL]},$$scope:{ctx:x}}}),Ps=new fe({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[zL]},$$scope:{ctx:x}}}),Gi=new We({}),Yi=new A({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L129"}}),il=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Os=new De({props:{$$slots:{default:[qL]},$$scope:{ctx:x}}}),Ns=new fe({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[CL]},$$scope:{ctx:x}}}),ll=new We({}),dl=new A({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L145"}}),bl=new A({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ds=new De({props:{$$slots:{default:[jL]},$$scope:{ctx:x}}}),Ss=new fe({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[XL]},$$scope:{ctx:x}}}),{c(){d=s("meta"),g=c(),h=s("h1"),f=s("a"),k=s("span"),y(l.$$.fragment),m=c(),L=s("span"),$e=o("XLM-RoBERTa"),be=c(),O=s("h2"),re=s("a"),te=s("span"),y(R.$$.fragment),Me=c(),U=s("span"),Fe=o("Overview"),ke=c(),D=s("p"),xe=o("The XLM-RoBERTa model was proposed in "),de=s("a"),H=o("Unsupervised Cross-lingual Representation Learning at Scale"),Re=o(` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),ve=c(),W=s("p"),Le=o("The abstract from the paper is the following:"),ye=c(),B=s("p"),ue=s("em"),Ee=o(`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),ne=c(),q=s("p"),C=o("Tips:"),Te=c(),S=s("ul"),ce=s("li"),ze=o(`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Q=s("code"),qe=o("lang"),Ce=o(` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),j=c(),pe=s("li"),V=o("This implementation is the same as RoBERTa. Refer to the "),me=s("a"),je=o("documentation of RoBERTa"),K=o(` for usage examples
as well as the information relative to the inputs and outputs.`),we=c(),se=s("p"),N=o("This model was contributed by "),he=s("a"),J=o("stefan-it"),Xe=o(". The original code can be found "),Z=s("a"),X=o("here"),Pe=o("."),P=c(),ae=s("h2"),ie=s("a"),v=s("span"),y(E.$$.fragment),He=c(),oe=s("span"),Ve=o("XLMRobertaConfig"),Ue=c(),z=s("div"),y(Ne.$$.fragment),Ke=c(),Ae=s("p"),Je=o("This class overrides "),Se=s("a"),I=o("RobertaConfig"),G=o(`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLMRoBERTa `),Ie=s("a"),Ge=o("xlm-roberta-base"),Y=o(" architecture."),Qe=c(),Oe=s("h2"),le=s("a"),Be=s("span"),y(ee.$$.fragment),Ye=c(),hc=s("span"),Rf=o("XLMRobertaTokenizer"),pm=c(),nt=s("div"),y(ra.$$.fragment),Lf=c(),io=s("p"),Ef=o("Adapted from "),Cl=s("a"),zf=o("RobertaTokenizer"),qf=o(" and "),jl=s("a"),Cf=o("XLNetTokenizer"),jf=o(`. Based on
`),ia=s("a"),Xf=o("SentencePiece"),Pf=o("."),Af=c(),la=s("p"),Of=o("This tokenizer inherits from "),Xl=s("a"),Nf=o("PreTrainedTokenizer"),If=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Df=c(),go=s("div"),y(da.$$.fragment),Sf=c(),mc=s("p"),Wf=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Bf=c(),ca=s("ul"),Pl=s("li"),Uf=o("single sequence: "),uc=s("code"),Qf=o("<s> X </s>"),Hf=c(),Al=s("li"),Vf=o("pair of sequences: "),fc=s("code"),Kf=o("<s> A </s></s> B </s>"),Jf=c(),vn=s("div"),y(pa.$$.fragment),Gf=c(),ha=s("p"),Yf=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gc=s("code"),Zf=o("prepare_for_model"),eg=o(" method."),tg=c(),yn=s("div"),y(ma.$$.fragment),og=c(),_c=s("p"),ng=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),sg=c(),Ol=s("div"),y(ua.$$.fragment),hm=c(),xo=s("h2"),Tn=s("a"),bc=s("span"),y(fa.$$.fragment),ag=c(),kc=s("span"),rg=o("XLMRobertaTokenizerFast"),mm=c(),Mt=s("div"),y(ga.$$.fragment),ig=c(),St=s("p"),lg=o("Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),vc=s("em"),dg=o("tokenizers"),cg=o(` library). Adapted from
`),Nl=s("a"),pg=o("RobertaTokenizer"),hg=o(" and "),Il=s("a"),mg=o("XLNetTokenizer"),ug=o(`. Based on
`),_a=s("a"),fg=o("BPE"),gg=o("."),_g=c(),ba=s("p"),bg=o("This tokenizer inherits from "),Dl=s("a"),kg=o("PreTrainedTokenizerFast"),vg=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),yg=c(),_o=s("div"),y(ka.$$.fragment),Tg=c(),yc=s("p"),wg=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),$g=c(),va=s("ul"),Sl=s("li"),Mg=o("single sequence: "),Tc=s("code"),Fg=o("<s> X </s>"),xg=c(),Wl=s("li"),Rg=o("pair of sequences: "),wc=s("code"),Lg=o("<s> A </s></s> B </s>"),Eg=c(),wn=s("div"),y(ya.$$.fragment),zg=c(),$c=s("p"),qg=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),um=c(),Ro=s("h2"),$n=s("a"),Mc=s("span"),y(Ta.$$.fragment),Cg=c(),Fc=s("span"),jg=o("XLMRobertaModel"),fm=c(),mt=s("div"),y(wa.$$.fragment),Xg=c(),xc=s("p"),Pg=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Ag=c(),$a=s("p"),Og=o("This model inherits from "),Bl=s("a"),Ng=o("PreTrainedModel"),Ig=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dg=c(),Ma=s("p"),Sg=o("This model is also a PyTorch "),Fa=s("a"),Wg=o("torch.nn.Module"),Bg=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ug=c(),xa=s("p"),Qg=o("This class overrides "),Ul=s("a"),Hg=o("RobertaModel"),Vg=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Kg=c(),Wt=s("div"),y(Ra.$$.fragment),Jg=c(),Lo=s("p"),Gg=o("The "),Ql=s("a"),Yg=o("RobertaModel"),Zg=o(" forward method, overrides the "),Rc=s("code"),e_=o("__call__"),t_=o(" special method."),o_=c(),y(Mn.$$.fragment),n_=c(),y(Fn.$$.fragment),gm=c(),Eo=s("h2"),xn=s("a"),Lc=s("span"),y(La.$$.fragment),s_=c(),Ec=s("span"),a_=o("XLMRobertaForCausalLM"),_m=c(),ut=s("div"),y(Ea.$$.fragment),r_=c(),za=s("p"),i_=o("XLM-RoBERTa Model with a "),zc=s("code"),l_=o("language modeling"),d_=o(" head on top for CLM fine-tuning."),c_=c(),qa=s("p"),p_=o("This model inherits from "),Hl=s("a"),h_=o("PreTrainedModel"),m_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u_=c(),Ca=s("p"),f_=o("This model is also a PyTorch "),ja=s("a"),g_=o("torch.nn.Module"),__=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),b_=c(),Xa=s("p"),k_=o("This class overrides "),Vl=s("a"),v_=o("RobertaForCausalLM"),y_=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),T_=c(),Bt=s("div"),y(Pa.$$.fragment),w_=c(),zo=s("p"),$_=o("The "),Kl=s("a"),M_=o("RobertaForCausalLM"),F_=o(" forward method, overrides the "),qc=s("code"),x_=o("__call__"),R_=o(" special method."),L_=c(),y(Rn.$$.fragment),E_=c(),y(Ln.$$.fragment),bm=c(),qo=s("h2"),En=s("a"),Cc=s("span"),y(Aa.$$.fragment),z_=c(),jc=s("span"),q_=o("XLMRobertaForMaskedLM"),km=c(),ft=s("div"),y(Oa.$$.fragment),C_=c(),Na=s("p"),j_=o("XLM-RoBERTa Model with a "),Xc=s("code"),X_=o("language modeling"),P_=o(" head on top."),A_=c(),Ia=s("p"),O_=o("This model inherits from "),Jl=s("a"),N_=o("PreTrainedModel"),I_=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D_=c(),Da=s("p"),S_=o("This model is also a PyTorch "),Sa=s("a"),W_=o("torch.nn.Module"),B_=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),U_=c(),Wa=s("p"),Q_=o("This class overrides "),Gl=s("a"),H_=o("RobertaForMaskedLM"),V_=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),K_=c(),Ft=s("div"),y(Ba.$$.fragment),J_=c(),Co=s("p"),G_=o("The "),Yl=s("a"),Y_=o("RobertaForMaskedLM"),Z_=o(" forward method, overrides the "),Pc=s("code"),eb=o("__call__"),tb=o(" special method."),ob=c(),y(zn.$$.fragment),nb=c(),y(qn.$$.fragment),sb=c(),y(Cn.$$.fragment),vm=c(),jo=s("h2"),jn=s("a"),Ac=s("span"),y(Ua.$$.fragment),ab=c(),Oc=s("span"),rb=o("XLMRobertaForSequenceClassification"),ym=c(),gt=s("div"),y(Qa.$$.fragment),ib=c(),Nc=s("p"),lb=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),db=c(),Ha=s("p"),cb=o("This model inherits from "),Zl=s("a"),pb=o("PreTrainedModel"),hb=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mb=c(),Va=s("p"),ub=o("This model is also a PyTorch "),Ka=s("a"),fb=o("torch.nn.Module"),gb=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_b=c(),Ja=s("p"),bb=o("This class overrides "),ed=s("a"),kb=o("RobertaForSequenceClassification"),vb=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),yb=c(),ht=s("div"),y(Ga.$$.fragment),Tb=c(),Xo=s("p"),wb=o("The "),td=s("a"),$b=o("RobertaForSequenceClassification"),Mb=o(" forward method, overrides the "),Ic=s("code"),Fb=o("__call__"),xb=o(" special method."),Rb=c(),y(Xn.$$.fragment),Lb=c(),y(Pn.$$.fragment),Eb=c(),y(An.$$.fragment),zb=c(),y(On.$$.fragment),qb=c(),y(Nn.$$.fragment),Tm=c(),Po=s("h2"),In=s("a"),Dc=s("span"),y(Ya.$$.fragment),Cb=c(),Sc=s("span"),jb=o("XLMRobertaForMultipleChoice"),wm=c(),_t=s("div"),y(Za.$$.fragment),Xb=c(),Wc=s("p"),Pb=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ab=c(),er=s("p"),Ob=o("This model inherits from "),od=s("a"),Nb=o("PreTrainedModel"),Ib=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Db=c(),tr=s("p"),Sb=o("This model is also a PyTorch "),or=s("a"),Wb=o("torch.nn.Module"),Bb=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ub=c(),nr=s("p"),Qb=o("This class overrides "),nd=s("a"),Hb=o("RobertaForMultipleChoice"),Vb=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Kb=c(),Ut=s("div"),y(sr.$$.fragment),Jb=c(),Ao=s("p"),Gb=o("The "),sd=s("a"),Yb=o("RobertaForMultipleChoice"),Zb=o(" forward method, overrides the "),Bc=s("code"),ek=o("__call__"),tk=o(" special method."),ok=c(),y(Dn.$$.fragment),nk=c(),y(Sn.$$.fragment),$m=c(),Oo=s("h2"),Wn=s("a"),Uc=s("span"),y(ar.$$.fragment),sk=c(),Qc=s("span"),ak=o("XLMRobertaForTokenClassification"),Mm=c(),bt=s("div"),y(rr.$$.fragment),rk=c(),Hc=s("p"),ik=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),lk=c(),ir=s("p"),dk=o("This model inherits from "),ad=s("a"),ck=o("PreTrainedModel"),pk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),lr=s("p"),mk=o("This model is also a PyTorch "),dr=s("a"),uk=o("torch.nn.Module"),fk=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gk=c(),cr=s("p"),_k=o("This class overrides "),rd=s("a"),bk=o("RobertaForTokenClassification"),kk=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vk=c(),xt=s("div"),y(pr.$$.fragment),yk=c(),No=s("p"),Tk=o("The "),id=s("a"),wk=o("RobertaForTokenClassification"),$k=o(" forward method, overrides the "),Vc=s("code"),Mk=o("__call__"),Fk=o(" special method."),xk=c(),y(Bn.$$.fragment),Rk=c(),y(Un.$$.fragment),Lk=c(),y(Qn.$$.fragment),Fm=c(),Io=s("h2"),Hn=s("a"),Kc=s("span"),y(hr.$$.fragment),Ek=c(),Jc=s("span"),zk=o("XLMRobertaForQuestionAnswering"),xm=c(),kt=s("div"),y(mr.$$.fragment),qk=c(),Do=s("p"),Ck=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Gc=s("code"),jk=o("span start logits"),Xk=o(" and "),Yc=s("code"),Pk=o("span end logits"),Ak=o(")."),Ok=c(),ur=s("p"),Nk=o("This model inherits from "),ld=s("a"),Ik=o("PreTrainedModel"),Dk=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sk=c(),fr=s("p"),Wk=o("This model is also a PyTorch "),gr=s("a"),Bk=o("torch.nn.Module"),Uk=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qk=c(),_r=s("p"),Hk=o("This class overrides "),dd=s("a"),Vk=o("RobertaForQuestionAnswering"),Kk=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Jk=c(),Rt=s("div"),y(br.$$.fragment),Gk=c(),So=s("p"),Yk=o("The "),cd=s("a"),Zk=o("RobertaForQuestionAnswering"),ev=o(" forward method, overrides the "),Zc=s("code"),tv=o("__call__"),ov=o(" special method."),nv=c(),y(Vn.$$.fragment),sv=c(),y(Kn.$$.fragment),av=c(),y(Jn.$$.fragment),Rm=c(),Wo=s("h2"),Gn=s("a"),ep=s("span"),y(kr.$$.fragment),rv=c(),tp=s("span"),iv=o("TFXLMRobertaModel"),Lm=c(),st=s("div"),y(vr.$$.fragment),lv=c(),op=s("p"),dv=o("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cv=c(),yr=s("p"),pv=o("This model inherits from "),pd=s("a"),hv=o("TFPreTrainedModel"),mv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=c(),Tr=s("p"),fv=o("This model is also a "),wr=s("a"),gv=o("tf.keras.Model"),_v=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bv=c(),y(Yn.$$.fragment),kv=c(),$r=s("p"),vv=o("This class overrides "),hd=s("a"),yv=o("TFRobertaModel"),Tv=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),wv=c(),Qt=s("div"),y(Mr.$$.fragment),$v=c(),Bo=s("p"),Mv=o("The "),md=s("a"),Fv=o("TFRobertaModel"),xv=o(" forward method, overrides the "),np=s("code"),Rv=o("__call__"),Lv=o(" special method."),Ev=c(),y(Zn.$$.fragment),zv=c(),y(es.$$.fragment),Em=c(),Uo=s("h2"),ts=s("a"),sp=s("span"),y(Fr.$$.fragment),qv=c(),ap=s("span"),Cv=o("TFXLMRobertaForMaskedLM"),zm=c(),at=s("div"),y(xr.$$.fragment),jv=c(),Rr=s("p"),Xv=o("XLM-RoBERTa Model with a "),rp=s("code"),Pv=o("language modeling"),Av=o(" head on top."),Ov=c(),Lr=s("p"),Nv=o("This model inherits from "),ud=s("a"),Iv=o("TFPreTrainedModel"),Dv=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=c(),Er=s("p"),Wv=o("This model is also a "),zr=s("a"),Bv=o("tf.keras.Model"),Uv=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qv=c(),y(os.$$.fragment),Hv=c(),qr=s("p"),Vv=o("This class overrides "),fd=s("a"),Kv=o("TFRobertaForMaskedLM"),Jv=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gv=c(),Lt=s("div"),y(Cr.$$.fragment),Yv=c(),Qo=s("p"),Zv=o("The "),gd=s("a"),ey=o("TFRobertaForMaskedLM"),ty=o(" forward method, overrides the "),ip=s("code"),oy=o("__call__"),ny=o(" special method."),sy=c(),y(ns.$$.fragment),ay=c(),y(ss.$$.fragment),ry=c(),y(as.$$.fragment),qm=c(),Ho=s("h2"),rs=s("a"),lp=s("span"),y(jr.$$.fragment),iy=c(),dp=s("span"),ly=o("TFXLMRobertaForSequenceClassification"),Cm=c(),rt=s("div"),y(Xr.$$.fragment),dy=c(),cp=s("p"),cy=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),py=c(),Pr=s("p"),hy=o("This model inherits from "),_d=s("a"),my=o("TFPreTrainedModel"),uy=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fy=c(),Ar=s("p"),gy=o("This model is also a "),Or=s("a"),_y=o("tf.keras.Model"),by=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ky=c(),y(is.$$.fragment),vy=c(),Nr=s("p"),yy=o("This class overrides "),bd=s("a"),Ty=o("TFRobertaForSequenceClassification"),wy=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$y=c(),Et=s("div"),y(Ir.$$.fragment),My=c(),Vo=s("p"),Fy=o("The "),kd=s("a"),xy=o("TFRobertaForSequenceClassification"),Ry=o(" forward method, overrides the "),pp=s("code"),Ly=o("__call__"),Ey=o(" special method."),zy=c(),y(ls.$$.fragment),qy=c(),y(ds.$$.fragment),Cy=c(),y(cs.$$.fragment),jm=c(),Ko=s("h2"),ps=s("a"),hp=s("span"),y(Dr.$$.fragment),jy=c(),mp=s("span"),Xy=o("TFXLMRobertaForMultipleChoice"),Xm=c(),it=s("div"),y(Sr.$$.fragment),Py=c(),up=s("p"),Ay=o(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Oy=c(),Wr=s("p"),Ny=o("This model inherits from "),vd=s("a"),Iy=o("TFPreTrainedModel"),Dy=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sy=c(),Br=s("p"),Wy=o("This model is also a "),Ur=s("a"),By=o("tf.keras.Model"),Uy=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qy=c(),y(hs.$$.fragment),Hy=c(),Qr=s("p"),Vy=o("This class overrides "),yd=s("a"),Ky=o("TFRobertaForMultipleChoice"),Jy=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gy=c(),Ht=s("div"),y(Hr.$$.fragment),Yy=c(),Jo=s("p"),Zy=o("The "),Td=s("a"),eT=o("TFRobertaForMultipleChoice"),tT=o(" forward method, overrides the "),fp=s("code"),oT=o("__call__"),nT=o(" special method."),sT=c(),y(ms.$$.fragment),aT=c(),y(us.$$.fragment),Pm=c(),Go=s("h2"),fs=s("a"),gp=s("span"),y(Vr.$$.fragment),rT=c(),_p=s("span"),iT=o("TFXLMRobertaForTokenClassification"),Am=c(),lt=s("div"),y(Kr.$$.fragment),lT=c(),bp=s("p"),dT=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),cT=c(),Jr=s("p"),pT=o("This model inherits from "),wd=s("a"),hT=o("TFPreTrainedModel"),mT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uT=c(),Gr=s("p"),fT=o("This model is also a "),Yr=s("a"),gT=o("tf.keras.Model"),_T=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=c(),y(gs.$$.fragment),kT=c(),Zr=s("p"),vT=o("This class overrides "),$d=s("a"),yT=o("TFRobertaForTokenClassification"),TT=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),wT=c(),zt=s("div"),y(ei.$$.fragment),$T=c(),Yo=s("p"),MT=o("The "),Md=s("a"),FT=o("TFRobertaForTokenClassification"),xT=o(" forward method, overrides the "),kp=s("code"),RT=o("__call__"),LT=o(" special method."),ET=c(),y(_s.$$.fragment),zT=c(),y(bs.$$.fragment),qT=c(),y(ks.$$.fragment),Om=c(),Zo=s("h2"),vs=s("a"),vp=s("span"),y(ti.$$.fragment),CT=c(),yp=s("span"),jT=o("TFXLMRobertaForQuestionAnswering"),Nm=c(),dt=s("div"),y(oi.$$.fragment),XT=c(),en=s("p"),PT=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tp=s("code"),AT=o("span start logits"),OT=o(" and "),wp=s("code"),NT=o("span end logits"),IT=o(")."),DT=c(),ni=s("p"),ST=o("This model inherits from "),Fd=s("a"),WT=o("TFPreTrainedModel"),BT=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),UT=c(),si=s("p"),QT=o("This model is also a "),ai=s("a"),HT=o("tf.keras.Model"),VT=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),KT=c(),y(ys.$$.fragment),JT=c(),ri=s("p"),GT=o("This class overrides "),$p=s("code"),YT=o("TFRobertaForQuestionAnsweringSimple"),ZT=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),ew=c(),qt=s("div"),y(ii.$$.fragment),tw=c(),tn=s("p"),ow=o("The "),xd=s("a"),nw=o("TFRobertaForQuestionAnswering"),sw=o(" forward method, overrides the "),Mp=s("code"),aw=o("__call__"),rw=o(" special method."),iw=c(),y(Ts.$$.fragment),lw=c(),y(ws.$$.fragment),dw=c(),y($s.$$.fragment),Im=c(),on=s("h2"),Ms=s("a"),Fp=s("span"),y(li.$$.fragment),cw=c(),xp=s("span"),pw=o("FlaxXLMRobertaModel"),Dm=c(),ct=s("div"),y(di.$$.fragment),hw=c(),ci=s("p"),mw=o(`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Rd=s("a"),uw=o("FlaxPreTrainedModel"),fw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gw=c(),pi=s("p"),_w=o("This model is also a Flax Linen "),hi=s("a"),bw=o("flax.linen.Module"),kw=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vw=c(),Rp=s("p"),yw=o("Finally, this model supports inherent JAX features such as:"),Tw=c(),lo=s("ul"),Lp=s("li"),mi=s("a"),ww=o("Just-In-Time (JIT) compilation"),$w=c(),Ep=s("li"),ui=s("a"),Mw=o("Automatic Differentiation"),Fw=c(),zp=s("li"),fi=s("a"),xw=o("Vectorization"),Rw=c(),qp=s("li"),gi=s("a"),Lw=o("Parallelization"),Ew=c(),_i=s("p"),zw=o("This class overrides "),Ld=s("a"),qw=o("FlaxRobertaModel"),Cw=o(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),jw=c(),Vt=s("div"),y(bi.$$.fragment),Xw=c(),nn=s("p"),Pw=o("The "),Cp=s("code"),Aw=o("FlaxRobertaPreTrainedModel"),Ow=o(" forward method, overrides the "),jp=s("code"),Nw=o("__call__"),Iw=o(" special method."),Dw=c(),y(Fs.$$.fragment),Sw=c(),y(xs.$$.fragment),Sm=c(),sn=s("h2"),Rs=s("a"),Xp=s("span"),y(ki.$$.fragment),Ww=c(),Pp=s("span"),Bw=o("FlaxXLMRobertaForMaskedLM"),Wm=c(),pt=s("div"),y(vi.$$.fragment),Uw=c(),an=s("p"),Qw=o("XLM-RoBERTa Model with a "),Ap=s("code"),Hw=o("language modeling"),Vw=o(` head on top.
This model inherits from `),Ed=s("a"),Kw=o("FlaxPreTrainedModel"),Jw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gw=c(),yi=s("p"),Yw=o("This model is also a Flax Linen "),Ti=s("a"),Zw=o("flax.linen.Module"),e$=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),t$=c(),Op=s("p"),o$=o("Finally, this model supports inherent JAX features such as:"),n$=c(),co=s("ul"),Np=s("li"),wi=s("a"),s$=o("Just-In-Time (JIT) compilation"),a$=c(),Ip=s("li"),$i=s("a"),r$=o("Automatic Differentiation"),i$=c(),Dp=s("li"),Mi=s("a"),l$=o("Vectorization"),d$=c(),Sp=s("li"),Fi=s("a"),c$=o("Parallelization"),p$=c(),xi=s("p"),h$=o("This class overrides "),zd=s("a"),m$=o("FlaxRobertaForMaskedLM"),u$=o(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),f$=c(),Kt=s("div"),y(Ri.$$.fragment),g$=c(),rn=s("p"),_$=o("The "),Wp=s("code"),b$=o("FlaxRobertaPreTrainedModel"),k$=o(" forward method, overrides the "),Bp=s("code"),v$=o("__call__"),y$=o(" special method."),T$=c(),y(Ls.$$.fragment),w$=c(),y(Es.$$.fragment),Bm=c(),ln=s("h2"),zs=s("a"),Up=s("span"),y(Li.$$.fragment),$$=c(),Qp=s("span"),M$=o("FlaxXLMRobertaForSequenceClassification"),Um=c(),Ze=s("div"),y(Ei.$$.fragment),F$=c(),Hp=s("p"),x$=o(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),R$=c(),zi=s("p"),L$=o("This model inherits from "),qd=s("a"),E$=o("FlaxPreTrainedModel"),z$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),q$=c(),qi=s("p"),C$=o("This model is also a Flax Linen "),Ci=s("a"),j$=o("flax.linen.Module"),X$=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),P$=c(),Vp=s("p"),A$=o("Finally, this model supports inherent JAX features such as:"),O$=c(),po=s("ul"),Kp=s("li"),ji=s("a"),N$=o("Just-In-Time (JIT) compilation"),I$=c(),Jp=s("li"),Xi=s("a"),D$=o("Automatic Differentiation"),S$=c(),Gp=s("li"),Pi=s("a"),W$=o("Vectorization"),B$=c(),Yp=s("li"),Ai=s("a"),U$=o("Parallelization"),Q$=c(),Oi=s("p"),H$=o("This class overrides "),Cd=s("a"),V$=o("FlaxRobertaForSequenceClassification"),K$=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),J$=c(),Jt=s("div"),y(Ni.$$.fragment),G$=c(),dn=s("p"),Y$=o("The "),Zp=s("code"),Z$=o("FlaxRobertaPreTrainedModel"),e1=o(" forward method, overrides the "),eh=s("code"),t1=o("__call__"),o1=o(" special method."),n1=c(),y(qs.$$.fragment),s1=c(),y(Cs.$$.fragment),Qm=c(),cn=s("h2"),js=s("a"),th=s("span"),y(Ii.$$.fragment),a1=c(),oh=s("span"),r1=o("FlaxXLMRobertaForMultipleChoice"),Hm=c(),et=s("div"),y(Di.$$.fragment),i1=c(),nh=s("p"),l1=o(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),d1=c(),Si=s("p"),c1=o("This model inherits from "),jd=s("a"),p1=o("FlaxPreTrainedModel"),h1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),m1=c(),Wi=s("p"),u1=o("This model is also a Flax Linen "),Bi=s("a"),f1=o("flax.linen.Module"),g1=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_1=c(),sh=s("p"),b1=o("Finally, this model supports inherent JAX features such as:"),k1=c(),ho=s("ul"),ah=s("li"),Ui=s("a"),v1=o("Just-In-Time (JIT) compilation"),y1=c(),rh=s("li"),Qi=s("a"),T1=o("Automatic Differentiation"),w1=c(),ih=s("li"),Hi=s("a"),$1=o("Vectorization"),M1=c(),lh=s("li"),Vi=s("a"),F1=o("Parallelization"),x1=c(),Ki=s("p"),R1=o("This class overrides "),Xd=s("a"),L1=o("FlaxRobertaForMultipleChoice"),E1=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),z1=c(),Gt=s("div"),y(Ji.$$.fragment),q1=c(),pn=s("p"),C1=o("The "),dh=s("code"),j1=o("FlaxRobertaPreTrainedModel"),X1=o(" forward method, overrides the "),ch=s("code"),P1=o("__call__"),A1=o(" special method."),O1=c(),y(Xs.$$.fragment),N1=c(),y(Ps.$$.fragment),Vm=c(),hn=s("h2"),As=s("a"),ph=s("span"),y(Gi.$$.fragment),I1=c(),hh=s("span"),D1=o("FlaxXLMRobertaForTokenClassification"),Km=c(),tt=s("div"),y(Yi.$$.fragment),S1=c(),mh=s("p"),W1=o(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),B1=c(),Zi=s("p"),U1=o("This model inherits from "),Pd=s("a"),Q1=o("FlaxPreTrainedModel"),H1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V1=c(),el=s("p"),K1=o("This model is also a Flax Linen "),tl=s("a"),J1=o("flax.linen.Module"),G1=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Y1=c(),uh=s("p"),Z1=o("Finally, this model supports inherent JAX features such as:"),eM=c(),mo=s("ul"),fh=s("li"),ol=s("a"),tM=o("Just-In-Time (JIT) compilation"),oM=c(),gh=s("li"),nl=s("a"),nM=o("Automatic Differentiation"),sM=c(),_h=s("li"),sl=s("a"),aM=o("Vectorization"),rM=c(),bh=s("li"),al=s("a"),iM=o("Parallelization"),lM=c(),rl=s("p"),dM=o("This class overrides "),Ad=s("a"),cM=o("FlaxRobertaForTokenClassification"),pM=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),hM=c(),Yt=s("div"),y(il.$$.fragment),mM=c(),mn=s("p"),uM=o("The "),kh=s("code"),fM=o("FlaxRobertaPreTrainedModel"),gM=o(" forward method, overrides the "),vh=s("code"),_M=o("__call__"),bM=o(" special method."),kM=c(),y(Os.$$.fragment),vM=c(),y(Ns.$$.fragment),Jm=c(),un=s("h2"),Is=s("a"),yh=s("span"),y(ll.$$.fragment),yM=c(),Th=s("span"),TM=o("FlaxXLMRobertaForQuestionAnswering"),Gm=c(),ot=s("div"),y(dl.$$.fragment),wM=c(),fn=s("p"),$M=o(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),wh=s("code"),MM=o("span start logits"),FM=o(" and "),$h=s("code"),xM=o("span end logits"),RM=o(")."),LM=c(),cl=s("p"),EM=o("This model inherits from "),Od=s("a"),zM=o("FlaxPreTrainedModel"),qM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),CM=c(),pl=s("p"),jM=o("This model is also a Flax Linen "),hl=s("a"),XM=o("flax.linen.Module"),PM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AM=c(),Mh=s("p"),OM=o("Finally, this model supports inherent JAX features such as:"),NM=c(),uo=s("ul"),Fh=s("li"),ml=s("a"),IM=o("Just-In-Time (JIT) compilation"),DM=c(),xh=s("li"),ul=s("a"),SM=o("Automatic Differentiation"),WM=c(),Rh=s("li"),fl=s("a"),BM=o("Vectorization"),UM=c(),Lh=s("li"),gl=s("a"),QM=o("Parallelization"),HM=c(),_l=s("p"),VM=o("This class overrides "),Nd=s("a"),KM=o("FlaxRobertaForQuestionAnswering"),JM=o(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),GM=c(),Zt=s("div"),y(bl.$$.fragment),YM=c(),gn=s("p"),ZM=o("The "),Eh=s("code"),e2=o("FlaxRobertaPreTrainedModel"),t2=o(" forward method, overrides the "),zh=s("code"),o2=o("__call__"),n2=o(" special method."),s2=c(),y(Ds.$$.fragment),a2=c(),y(Ss.$$.fragment),this.h()},l(i){const b=jR('[data-svelte="svelte-1phssyn"]',document.head);d=a(b,"META",{name:!0,content:!0}),b.forEach(t),g=p(i),h=a(i,"H1",{class:!0});var kl=r(h);f=a(kl,"A",{id:!0,class:!0,href:!0});var qh=r(f);k=a(qh,"SPAN",{});var Ch=r(k);T(l.$$.fragment,Ch),Ch.forEach(t),qh.forEach(t),m=p(kl),L=a(kl,"SPAN",{});var jh=r(L);$e=n(jh,"XLM-RoBERTa"),jh.forEach(t),kl.forEach(t),be=p(i),O=a(i,"H2",{class:!0});var vl=r(O);re=a(vl,"A",{id:!0,class:!0,href:!0});var Xh=r(re);te=a(Xh,"SPAN",{});var Ph=r(te);T(R.$$.fragment,Ph),Ph.forEach(t),Xh.forEach(t),Me=p(vl),U=a(vl,"SPAN",{});var Ah=r(U);Fe=n(Ah,"Overview"),Ah.forEach(t),vl.forEach(t),ke=p(i),D=a(i,"P",{});var yl=r(D);xe=n(yl,"The XLM-RoBERTa model was proposed in "),de=a(yl,"A",{href:!0,rel:!0});var Oh=r(de);H=n(Oh,"Unsupervised Cross-lingual Representation Learning at Scale"),Oh.forEach(t),Re=n(yl,` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),yl.forEach(t),ve=p(i),W=a(i,"P",{});var Nh=r(W);Le=n(Nh,"The abstract from the paper is the following:"),Nh.forEach(t),ye=p(i),B=a(i,"P",{});var Ih=r(B);ue=a(Ih,"EM",{});var Dh=r(ue);Ee=n(Dh,`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),Dh.forEach(t),Ih.forEach(t),ne=p(i),q=a(i,"P",{});var Sh=r(q);C=n(Sh,"Tips:"),Sh.forEach(t),Te=p(i),S=a(i,"UL",{});var Tl=r(S);ce=a(Tl,"LI",{});var wl=r(ce);ze=n(wl,`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),Q=a(wl,"CODE",{});var Wh=r(Q);qe=n(Wh,"lang"),Wh.forEach(t),Ce=n(wl,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),wl.forEach(t),j=p(Tl),pe=a(Tl,"LI",{});var $l=r(pe);V=n($l,"This implementation is the same as RoBERTa. Refer to the "),me=a($l,"A",{href:!0});var Bh=r(me);je=n(Bh,"documentation of RoBERTa"),Bh.forEach(t),K=n($l,` for usage examples
as well as the information relative to the inputs and outputs.`),$l.forEach(t),Tl.forEach(t),we=p(i),se=a(i,"P",{});var _n=r(se);N=n(_n,"This model was contributed by "),he=a(_n,"A",{href:!0,rel:!0});var Uh=r(he);J=n(Uh,"stefan-it"),Uh.forEach(t),Xe=n(_n,". The original code can be found "),Z=a(_n,"A",{href:!0,rel:!0});var Qh=r(Z);X=n(Qh,"here"),Qh.forEach(t),Pe=n(_n,"."),_n.forEach(t),P=p(i),ae=a(i,"H2",{class:!0});var Ml=r(ae);ie=a(Ml,"A",{id:!0,class:!0,href:!0});var Hh=r(ie);v=a(Hh,"SPAN",{});var Vh=r(v);T(E.$$.fragment,Vh),Vh.forEach(t),Hh.forEach(t),He=p(Ml),oe=a(Ml,"SPAN",{});var Kh=r(oe);Ve=n(Kh,"XLMRobertaConfig"),Kh.forEach(t),Ml.forEach(t),Ue=p(i),z=a(i,"DIV",{class:!0});var Fl=r(z);T(Ne.$$.fragment,Fl),Ke=p(Fl),Ae=a(Fl,"P",{});var bn=r(Ae);Je=n(bn,"This class overrides "),Se=a(bn,"A",{href:!0});var Jh=r(Se);I=n(Jh,"RobertaConfig"),Jh.forEach(t),G=n(bn,`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLMRoBERTa `),Ie=a(bn,"A",{href:!0,rel:!0});var Gh=r(Ie);Ge=n(Gh,"xlm-roberta-base"),Gh.forEach(t),Y=n(bn," architecture."),bn.forEach(t),Fl.forEach(t),Qe=p(i),Oe=a(i,"H2",{class:!0});var xl=r(Oe);le=a(xl,"A",{id:!0,class:!0,href:!0});var Yh=r(le);Be=a(Yh,"SPAN",{});var Zh=r(Be);T(ee.$$.fragment,Zh),Zh.forEach(t),Yh.forEach(t),Ye=p(xl),hc=a(xl,"SPAN",{});var em=r(hc);Rf=n(em,"XLMRobertaTokenizer"),em.forEach(t),xl.forEach(t),pm=p(i),nt=a(i,"DIV",{class:!0});var vt=r(nt);T(ra.$$.fragment,vt),Lf=p(vt),io=a(vt,"P",{});var fo=r(io);Ef=n(fo,"Adapted from "),Cl=a(fo,"A",{href:!0});var tm=r(Cl);zf=n(tm,"RobertaTokenizer"),tm.forEach(t),qf=n(fo," and "),jl=a(fo,"A",{href:!0});var om=r(jl);Cf=n(om,"XLNetTokenizer"),om.forEach(t),jf=n(fo,`. Based on
`),ia=a(fo,"A",{href:!0,rel:!0});var nm=r(ia);Xf=n(nm,"SentencePiece"),nm.forEach(t),Pf=n(fo,"."),fo.forEach(t),Af=p(vt),la=a(vt,"P",{});var Rl=r(la);Of=n(Rl,"This tokenizer inherits from "),Xl=a(Rl,"A",{href:!0});var sm=r(Xl);Nf=n(sm,"PreTrainedTokenizer"),sm.forEach(t),If=n(Rl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Rl.forEach(t),Df=p(vt),go=a(vt,"DIV",{class:!0});var kn=r(go);T(da.$$.fragment,kn),Sf=p(kn),mc=a(kn,"P",{});var am=r(mc);Wf=n(am,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),am.forEach(t),Bf=p(kn),ca=a(kn,"UL",{});var Ll=r(ca);Pl=a(Ll,"LI",{});var Id=r(Pl);Uf=n(Id,"single sequence: "),uc=a(Id,"CODE",{});var rm=r(uc);Qf=n(rm,"<s> X </s>"),rm.forEach(t),Id.forEach(t),Hf=p(Ll),Al=a(Ll,"LI",{});var Dd=r(Al);Vf=n(Dd,"pair of sequences: "),fc=a(Dd,"CODE",{});var im=r(fc);Kf=n(im,"<s> A </s></s> B </s>"),im.forEach(t),Dd.forEach(t),Ll.forEach(t),kn.forEach(t),Jf=p(vt),vn=a(vt,"DIV",{class:!0});var El=r(vn);T(pa.$$.fragment,El),Gf=p(El),ha=a(El,"P",{});var zl=r(ha);Yf=n(zl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),gc=a(zl,"CODE",{});var lm=r(gc);Zf=n(lm,"prepare_for_model"),lm.forEach(t),eg=n(zl," method."),zl.forEach(t),El.forEach(t),tg=p(vt),yn=a(vt,"DIV",{class:!0});var ql=r(yn);T(ma.$$.fragment,ql),og=p(ql),_c=a(ql,"P",{});var dm=r(_c);ng=n(dm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),dm.forEach(t),ql.forEach(t),sg=p(vt),Ol=a(vt,"DIV",{class:!0});var cm=r(Ol);T(ua.$$.fragment,cm),cm.forEach(t),vt.forEach(t),hm=p(i),xo=a(i,"H2",{class:!0});var Zm=r(xo);Tn=a(Zm,"A",{id:!0,class:!0,href:!0});var l2=r(Tn);bc=a(l2,"SPAN",{});var d2=r(bc);T(fa.$$.fragment,d2),d2.forEach(t),l2.forEach(t),ag=p(Zm),kc=a(Zm,"SPAN",{});var c2=r(kc);rg=n(c2,"XLMRobertaTokenizerFast"),c2.forEach(t),Zm.forEach(t),mm=p(i),Mt=a(i,"DIV",{class:!0});var bo=r(Mt);T(ga.$$.fragment,bo),ig=p(bo),St=a(bo,"P",{});var ko=r(St);lg=n(ko,"Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),vc=a(ko,"EM",{});var p2=r(vc);dg=n(p2,"tokenizers"),p2.forEach(t),cg=n(ko,` library). Adapted from
`),Nl=a(ko,"A",{href:!0});var h2=r(Nl);pg=n(h2,"RobertaTokenizer"),h2.forEach(t),hg=n(ko," and "),Il=a(ko,"A",{href:!0});var m2=r(Il);mg=n(m2,"XLNetTokenizer"),m2.forEach(t),ug=n(ko,`. Based on
`),_a=a(ko,"A",{href:!0,rel:!0});var u2=r(_a);fg=n(u2,"BPE"),u2.forEach(t),gg=n(ko,"."),ko.forEach(t),_g=p(bo),ba=a(bo,"P",{});var eu=r(ba);bg=n(eu,"This tokenizer inherits from "),Dl=a(eu,"A",{href:!0});var f2=r(Dl);kg=n(f2,"PreTrainedTokenizerFast"),f2.forEach(t),vg=n(eu,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),eu.forEach(t),yg=p(bo),_o=a(bo,"DIV",{class:!0});var Sd=r(_o);T(ka.$$.fragment,Sd),Tg=p(Sd),yc=a(Sd,"P",{});var g2=r(yc);wg=n(g2,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),g2.forEach(t),$g=p(Sd),va=a(Sd,"UL",{});var tu=r(va);Sl=a(tu,"LI",{});var r2=r(Sl);Mg=n(r2,"single sequence: "),Tc=a(r2,"CODE",{});var _2=r(Tc);Fg=n(_2,"<s> X </s>"),_2.forEach(t),r2.forEach(t),xg=p(tu),Wl=a(tu,"LI",{});var i2=r(Wl);Rg=n(i2,"pair of sequences: "),wc=a(i2,"CODE",{});var b2=r(wc);Lg=n(b2,"<s> A </s></s> B </s>"),b2.forEach(t),i2.forEach(t),tu.forEach(t),Sd.forEach(t),Eg=p(bo),wn=a(bo,"DIV",{class:!0});var ou=r(wn);T(ya.$$.fragment,ou),zg=p(ou),$c=a(ou,"P",{});var k2=r($c);qg=n(k2,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),k2.forEach(t),ou.forEach(t),bo.forEach(t),um=p(i),Ro=a(i,"H2",{class:!0});var nu=r(Ro);$n=a(nu,"A",{id:!0,class:!0,href:!0});var v2=r($n);Mc=a(v2,"SPAN",{});var y2=r(Mc);T(Ta.$$.fragment,y2),y2.forEach(t),v2.forEach(t),Cg=p(nu),Fc=a(nu,"SPAN",{});var T2=r(Fc);jg=n(T2,"XLMRobertaModel"),T2.forEach(t),nu.forEach(t),fm=p(i),mt=a(i,"DIV",{class:!0});var eo=r(mt);T(wa.$$.fragment,eo),Xg=p(eo),xc=a(eo,"P",{});var w2=r(xc);Pg=n(w2,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),w2.forEach(t),Ag=p(eo),$a=a(eo,"P",{});var su=r($a);Og=n(su,"This model inherits from "),Bl=a(su,"A",{href:!0});var $2=r(Bl);Ng=n($2,"PreTrainedModel"),$2.forEach(t),Ig=n(su,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su.forEach(t),Dg=p(eo),Ma=a(eo,"P",{});var au=r(Ma);Sg=n(au,"This model is also a PyTorch "),Fa=a(au,"A",{href:!0,rel:!0});var M2=r(Fa);Wg=n(M2,"torch.nn.Module"),M2.forEach(t),Bg=n(au,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),au.forEach(t),Ug=p(eo),xa=a(eo,"P",{});var ru=r(xa);Qg=n(ru,"This class overrides "),Ul=a(ru,"A",{href:!0});var F2=r(Ul);Hg=n(F2,"RobertaModel"),F2.forEach(t),Vg=n(ru,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),ru.forEach(t),Kg=p(eo),Wt=a(eo,"DIV",{class:!0});var Ws=r(Wt);T(Ra.$$.fragment,Ws),Jg=p(Ws),Lo=a(Ws,"P",{});var Wd=r(Lo);Gg=n(Wd,"The "),Ql=a(Wd,"A",{href:!0});var x2=r(Ql);Yg=n(x2,"RobertaModel"),x2.forEach(t),Zg=n(Wd," forward method, overrides the "),Rc=a(Wd,"CODE",{});var R2=r(Rc);e_=n(R2,"__call__"),R2.forEach(t),t_=n(Wd," special method."),Wd.forEach(t),o_=p(Ws),T(Mn.$$.fragment,Ws),n_=p(Ws),T(Fn.$$.fragment,Ws),Ws.forEach(t),eo.forEach(t),gm=p(i),Eo=a(i,"H2",{class:!0});var iu=r(Eo);xn=a(iu,"A",{id:!0,class:!0,href:!0});var L2=r(xn);Lc=a(L2,"SPAN",{});var E2=r(Lc);T(La.$$.fragment,E2),E2.forEach(t),L2.forEach(t),s_=p(iu),Ec=a(iu,"SPAN",{});var z2=r(Ec);a_=n(z2,"XLMRobertaForCausalLM"),z2.forEach(t),iu.forEach(t),_m=p(i),ut=a(i,"DIV",{class:!0});var to=r(ut);T(Ea.$$.fragment,to),r_=p(to),za=a(to,"P",{});var lu=r(za);i_=n(lu,"XLM-RoBERTa Model with a "),zc=a(lu,"CODE",{});var q2=r(zc);l_=n(q2,"language modeling"),q2.forEach(t),d_=n(lu," head on top for CLM fine-tuning."),lu.forEach(t),c_=p(to),qa=a(to,"P",{});var du=r(qa);p_=n(du,"This model inherits from "),Hl=a(du,"A",{href:!0});var C2=r(Hl);h_=n(C2,"PreTrainedModel"),C2.forEach(t),m_=n(du,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du.forEach(t),u_=p(to),Ca=a(to,"P",{});var cu=r(Ca);f_=n(cu,"This model is also a PyTorch "),ja=a(cu,"A",{href:!0,rel:!0});var j2=r(ja);g_=n(j2,"torch.nn.Module"),j2.forEach(t),__=n(cu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cu.forEach(t),b_=p(to),Xa=a(to,"P",{});var pu=r(Xa);k_=n(pu,"This class overrides "),Vl=a(pu,"A",{href:!0});var X2=r(Vl);v_=n(X2,"RobertaForCausalLM"),X2.forEach(t),y_=n(pu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),pu.forEach(t),T_=p(to),Bt=a(to,"DIV",{class:!0});var Bs=r(Bt);T(Pa.$$.fragment,Bs),w_=p(Bs),zo=a(Bs,"P",{});var Bd=r(zo);$_=n(Bd,"The "),Kl=a(Bd,"A",{href:!0});var P2=r(Kl);M_=n(P2,"RobertaForCausalLM"),P2.forEach(t),F_=n(Bd," forward method, overrides the "),qc=a(Bd,"CODE",{});var A2=r(qc);x_=n(A2,"__call__"),A2.forEach(t),R_=n(Bd," special method."),Bd.forEach(t),L_=p(Bs),T(Rn.$$.fragment,Bs),E_=p(Bs),T(Ln.$$.fragment,Bs),Bs.forEach(t),to.forEach(t),bm=p(i),qo=a(i,"H2",{class:!0});var hu=r(qo);En=a(hu,"A",{id:!0,class:!0,href:!0});var O2=r(En);Cc=a(O2,"SPAN",{});var N2=r(Cc);T(Aa.$$.fragment,N2),N2.forEach(t),O2.forEach(t),z_=p(hu),jc=a(hu,"SPAN",{});var I2=r(jc);q_=n(I2,"XLMRobertaForMaskedLM"),I2.forEach(t),hu.forEach(t),km=p(i),ft=a(i,"DIV",{class:!0});var oo=r(ft);T(Oa.$$.fragment,oo),C_=p(oo),Na=a(oo,"P",{});var mu=r(Na);j_=n(mu,"XLM-RoBERTa Model with a "),Xc=a(mu,"CODE",{});var D2=r(Xc);X_=n(D2,"language modeling"),D2.forEach(t),P_=n(mu," head on top."),mu.forEach(t),A_=p(oo),Ia=a(oo,"P",{});var uu=r(Ia);O_=n(uu,"This model inherits from "),Jl=a(uu,"A",{href:!0});var S2=r(Jl);N_=n(S2,"PreTrainedModel"),S2.forEach(t),I_=n(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),D_=p(oo),Da=a(oo,"P",{});var fu=r(Da);S_=n(fu,"This model is also a PyTorch "),Sa=a(fu,"A",{href:!0,rel:!0});var W2=r(Sa);W_=n(W2,"torch.nn.Module"),W2.forEach(t),B_=n(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),U_=p(oo),Wa=a(oo,"P",{});var gu=r(Wa);Q_=n(gu,"This class overrides "),Gl=a(gu,"A",{href:!0});var B2=r(Gl);H_=n(B2,"RobertaForMaskedLM"),B2.forEach(t),V_=n(gu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),gu.forEach(t),K_=p(oo),Ft=a(oo,"DIV",{class:!0});var vo=r(Ft);T(Ba.$$.fragment,vo),J_=p(vo),Co=a(vo,"P",{});var Ud=r(Co);G_=n(Ud,"The "),Yl=a(Ud,"A",{href:!0});var U2=r(Yl);Y_=n(U2,"RobertaForMaskedLM"),U2.forEach(t),Z_=n(Ud," forward method, overrides the "),Pc=a(Ud,"CODE",{});var Q2=r(Pc);eb=n(Q2,"__call__"),Q2.forEach(t),tb=n(Ud," special method."),Ud.forEach(t),ob=p(vo),T(zn.$$.fragment,vo),nb=p(vo),T(qn.$$.fragment,vo),sb=p(vo),T(Cn.$$.fragment,vo),vo.forEach(t),oo.forEach(t),vm=p(i),jo=a(i,"H2",{class:!0});var _u=r(jo);jn=a(_u,"A",{id:!0,class:!0,href:!0});var H2=r(jn);Ac=a(H2,"SPAN",{});var V2=r(Ac);T(Ua.$$.fragment,V2),V2.forEach(t),H2.forEach(t),ab=p(_u),Oc=a(_u,"SPAN",{});var K2=r(Oc);rb=n(K2,"XLMRobertaForSequenceClassification"),K2.forEach(t),_u.forEach(t),ym=p(i),gt=a(i,"DIV",{class:!0});var no=r(gt);T(Qa.$$.fragment,no),ib=p(no),Nc=a(no,"P",{});var J2=r(Nc);lb=n(J2,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),J2.forEach(t),db=p(no),Ha=a(no,"P",{});var bu=r(Ha);cb=n(bu,"This model inherits from "),Zl=a(bu,"A",{href:!0});var G2=r(Zl);pb=n(G2,"PreTrainedModel"),G2.forEach(t),hb=n(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu.forEach(t),mb=p(no),Va=a(no,"P",{});var ku=r(Va);ub=n(ku,"This model is also a PyTorch "),Ka=a(ku,"A",{href:!0,rel:!0});var Y2=r(Ka);fb=n(Y2,"torch.nn.Module"),Y2.forEach(t),gb=n(ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku.forEach(t),_b=p(no),Ja=a(no,"P",{});var vu=r(Ja);bb=n(vu,"This class overrides "),ed=a(vu,"A",{href:!0});var Z2=r(ed);kb=n(Z2,"RobertaForSequenceClassification"),Z2.forEach(t),vb=n(vu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vu.forEach(t),yb=p(no),ht=a(no,"DIV",{class:!0});var Ct=r(ht);T(Ga.$$.fragment,Ct),Tb=p(Ct),Xo=a(Ct,"P",{});var Qd=r(Xo);wb=n(Qd,"The "),td=a(Qd,"A",{href:!0});var eF=r(td);$b=n(eF,"RobertaForSequenceClassification"),eF.forEach(t),Mb=n(Qd," forward method, overrides the "),Ic=a(Qd,"CODE",{});var tF=r(Ic);Fb=n(tF,"__call__"),tF.forEach(t),xb=n(Qd," special method."),Qd.forEach(t),Rb=p(Ct),T(Xn.$$.fragment,Ct),Lb=p(Ct),T(Pn.$$.fragment,Ct),Eb=p(Ct),T(An.$$.fragment,Ct),zb=p(Ct),T(On.$$.fragment,Ct),qb=p(Ct),T(Nn.$$.fragment,Ct),Ct.forEach(t),no.forEach(t),Tm=p(i),Po=a(i,"H2",{class:!0});var yu=r(Po);In=a(yu,"A",{id:!0,class:!0,href:!0});var oF=r(In);Dc=a(oF,"SPAN",{});var nF=r(Dc);T(Ya.$$.fragment,nF),nF.forEach(t),oF.forEach(t),Cb=p(yu),Sc=a(yu,"SPAN",{});var sF=r(Sc);jb=n(sF,"XLMRobertaForMultipleChoice"),sF.forEach(t),yu.forEach(t),wm=p(i),_t=a(i,"DIV",{class:!0});var so=r(_t);T(Za.$$.fragment,so),Xb=p(so),Wc=a(so,"P",{});var aF=r(Wc);Pb=n(aF,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),aF.forEach(t),Ab=p(so),er=a(so,"P",{});var Tu=r(er);Ob=n(Tu,"This model inherits from "),od=a(Tu,"A",{href:!0});var rF=r(od);Nb=n(rF,"PreTrainedModel"),rF.forEach(t),Ib=n(Tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tu.forEach(t),Db=p(so),tr=a(so,"P",{});var wu=r(tr);Sb=n(wu,"This model is also a PyTorch "),or=a(wu,"A",{href:!0,rel:!0});var iF=r(or);Wb=n(iF,"torch.nn.Module"),iF.forEach(t),Bb=n(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),Ub=p(so),nr=a(so,"P",{});var $u=r(nr);Qb=n($u,"This class overrides "),nd=a($u,"A",{href:!0});var lF=r(nd);Hb=n(lF,"RobertaForMultipleChoice"),lF.forEach(t),Vb=n($u,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),$u.forEach(t),Kb=p(so),Ut=a(so,"DIV",{class:!0});var Us=r(Ut);T(sr.$$.fragment,Us),Jb=p(Us),Ao=a(Us,"P",{});var Hd=r(Ao);Gb=n(Hd,"The "),sd=a(Hd,"A",{href:!0});var dF=r(sd);Yb=n(dF,"RobertaForMultipleChoice"),dF.forEach(t),Zb=n(Hd," forward method, overrides the "),Bc=a(Hd,"CODE",{});var cF=r(Bc);ek=n(cF,"__call__"),cF.forEach(t),tk=n(Hd," special method."),Hd.forEach(t),ok=p(Us),T(Dn.$$.fragment,Us),nk=p(Us),T(Sn.$$.fragment,Us),Us.forEach(t),so.forEach(t),$m=p(i),Oo=a(i,"H2",{class:!0});var Mu=r(Oo);Wn=a(Mu,"A",{id:!0,class:!0,href:!0});var pF=r(Wn);Uc=a(pF,"SPAN",{});var hF=r(Uc);T(ar.$$.fragment,hF),hF.forEach(t),pF.forEach(t),sk=p(Mu),Qc=a(Mu,"SPAN",{});var mF=r(Qc);ak=n(mF,"XLMRobertaForTokenClassification"),mF.forEach(t),Mu.forEach(t),Mm=p(i),bt=a(i,"DIV",{class:!0});var ao=r(bt);T(rr.$$.fragment,ao),rk=p(ao),Hc=a(ao,"P",{});var uF=r(Hc);ik=n(uF,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),uF.forEach(t),lk=p(ao),ir=a(ao,"P",{});var Fu=r(ir);dk=n(Fu,"This model inherits from "),ad=a(Fu,"A",{href:!0});var fF=r(ad);ck=n(fF,"PreTrainedModel"),fF.forEach(t),pk=n(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),hk=p(ao),lr=a(ao,"P",{});var xu=r(lr);mk=n(xu,"This model is also a PyTorch "),dr=a(xu,"A",{href:!0,rel:!0});var gF=r(dr);uk=n(gF,"torch.nn.Module"),gF.forEach(t),fk=n(xu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xu.forEach(t),gk=p(ao),cr=a(ao,"P",{});var Ru=r(cr);_k=n(Ru,"This class overrides "),rd=a(Ru,"A",{href:!0});var _F=r(rd);bk=n(_F,"RobertaForTokenClassification"),_F.forEach(t),kk=n(Ru,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ru.forEach(t),vk=p(ao),xt=a(ao,"DIV",{class:!0});var yo=r(xt);T(pr.$$.fragment,yo),yk=p(yo),No=a(yo,"P",{});var Vd=r(No);Tk=n(Vd,"The "),id=a(Vd,"A",{href:!0});var bF=r(id);wk=n(bF,"RobertaForTokenClassification"),bF.forEach(t),$k=n(Vd," forward method, overrides the "),Vc=a(Vd,"CODE",{});var kF=r(Vc);Mk=n(kF,"__call__"),kF.forEach(t),Fk=n(Vd," special method."),Vd.forEach(t),xk=p(yo),T(Bn.$$.fragment,yo),Rk=p(yo),T(Un.$$.fragment,yo),Lk=p(yo),T(Qn.$$.fragment,yo),yo.forEach(t),ao.forEach(t),Fm=p(i),Io=a(i,"H2",{class:!0});var Lu=r(Io);Hn=a(Lu,"A",{id:!0,class:!0,href:!0});var vF=r(Hn);Kc=a(vF,"SPAN",{});var yF=r(Kc);T(hr.$$.fragment,yF),yF.forEach(t),vF.forEach(t),Ek=p(Lu),Jc=a(Lu,"SPAN",{});var TF=r(Jc);zk=n(TF,"XLMRobertaForQuestionAnswering"),TF.forEach(t),Lu.forEach(t),xm=p(i),kt=a(i,"DIV",{class:!0});var ro=r(kt);T(mr.$$.fragment,ro),qk=p(ro),Do=a(ro,"P",{});var Kd=r(Do);Ck=n(Kd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Gc=a(Kd,"CODE",{});var wF=r(Gc);jk=n(wF,"span start logits"),wF.forEach(t),Xk=n(Kd," and "),Yc=a(Kd,"CODE",{});var $F=r(Yc);Pk=n($F,"span end logits"),$F.forEach(t),Ak=n(Kd,")."),Kd.forEach(t),Ok=p(ro),ur=a(ro,"P",{});var Eu=r(ur);Nk=n(Eu,"This model inherits from "),ld=a(Eu,"A",{href:!0});var MF=r(ld);Ik=n(MF,"PreTrainedModel"),MF.forEach(t),Dk=n(Eu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu.forEach(t),Sk=p(ro),fr=a(ro,"P",{});var zu=r(fr);Wk=n(zu,"This model is also a PyTorch "),gr=a(zu,"A",{href:!0,rel:!0});var FF=r(gr);Bk=n(FF,"torch.nn.Module"),FF.forEach(t),Uk=n(zu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),zu.forEach(t),Qk=p(ro),_r=a(ro,"P",{});var qu=r(_r);Hk=n(qu,"This class overrides "),dd=a(qu,"A",{href:!0});var xF=r(dd);Vk=n(xF,"RobertaForQuestionAnswering"),xF.forEach(t),Kk=n(qu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),qu.forEach(t),Jk=p(ro),Rt=a(ro,"DIV",{class:!0});var To=r(Rt);T(br.$$.fragment,To),Gk=p(To),So=a(To,"P",{});var Jd=r(So);Yk=n(Jd,"The "),cd=a(Jd,"A",{href:!0});var RF=r(cd);Zk=n(RF,"RobertaForQuestionAnswering"),RF.forEach(t),ev=n(Jd," forward method, overrides the "),Zc=a(Jd,"CODE",{});var LF=r(Zc);tv=n(LF,"__call__"),LF.forEach(t),ov=n(Jd," special method."),Jd.forEach(t),nv=p(To),T(Vn.$$.fragment,To),sv=p(To),T(Kn.$$.fragment,To),av=p(To),T(Jn.$$.fragment,To),To.forEach(t),ro.forEach(t),Rm=p(i),Wo=a(i,"H2",{class:!0});var Cu=r(Wo);Gn=a(Cu,"A",{id:!0,class:!0,href:!0});var EF=r(Gn);ep=a(EF,"SPAN",{});var zF=r(ep);T(kr.$$.fragment,zF),zF.forEach(t),EF.forEach(t),rv=p(Cu),tp=a(Cu,"SPAN",{});var qF=r(tp);iv=n(qF,"TFXLMRobertaModel"),qF.forEach(t),Cu.forEach(t),Lm=p(i),st=a(i,"DIV",{class:!0});var jt=r(st);T(vr.$$.fragment,jt),lv=p(jt),op=a(jt,"P",{});var CF=r(op);dv=n(CF,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),CF.forEach(t),cv=p(jt),yr=a(jt,"P",{});var ju=r(yr);pv=n(ju,"This model inherits from "),pd=a(ju,"A",{href:!0});var jF=r(pd);hv=n(jF,"TFPreTrainedModel"),jF.forEach(t),mv=n(ju,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ju.forEach(t),uv=p(jt),Tr=a(jt,"P",{});var Xu=r(Tr);fv=n(Xu,"This model is also a "),wr=a(Xu,"A",{href:!0,rel:!0});var XF=r(wr);gv=n(XF,"tf.keras.Model"),XF.forEach(t),_v=n(Xu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xu.forEach(t),bv=p(jt),T(Yn.$$.fragment,jt),kv=p(jt),$r=a(jt,"P",{});var Pu=r($r);vv=n(Pu,"This class overrides "),hd=a(Pu,"A",{href:!0});var PF=r(hd);yv=n(PF,"TFRobertaModel"),PF.forEach(t),Tv=n(Pu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Pu.forEach(t),wv=p(jt),Qt=a(jt,"DIV",{class:!0});var Qs=r(Qt);T(Mr.$$.fragment,Qs),$v=p(Qs),Bo=a(Qs,"P",{});var Gd=r(Bo);Mv=n(Gd,"The "),md=a(Gd,"A",{href:!0});var AF=r(md);Fv=n(AF,"TFRobertaModel"),AF.forEach(t),xv=n(Gd," forward method, overrides the "),np=a(Gd,"CODE",{});var OF=r(np);Rv=n(OF,"__call__"),OF.forEach(t),Lv=n(Gd," special method."),Gd.forEach(t),Ev=p(Qs),T(Zn.$$.fragment,Qs),zv=p(Qs),T(es.$$.fragment,Qs),Qs.forEach(t),jt.forEach(t),Em=p(i),Uo=a(i,"H2",{class:!0});var Au=r(Uo);ts=a(Au,"A",{id:!0,class:!0,href:!0});var NF=r(ts);sp=a(NF,"SPAN",{});var IF=r(sp);T(Fr.$$.fragment,IF),IF.forEach(t),NF.forEach(t),qv=p(Au),ap=a(Au,"SPAN",{});var DF=r(ap);Cv=n(DF,"TFXLMRobertaForMaskedLM"),DF.forEach(t),Au.forEach(t),zm=p(i),at=a(i,"DIV",{class:!0});var Xt=r(at);T(xr.$$.fragment,Xt),jv=p(Xt),Rr=a(Xt,"P",{});var Ou=r(Rr);Xv=n(Ou,"XLM-RoBERTa Model with a "),rp=a(Ou,"CODE",{});var SF=r(rp);Pv=n(SF,"language modeling"),SF.forEach(t),Av=n(Ou," head on top."),Ou.forEach(t),Ov=p(Xt),Lr=a(Xt,"P",{});var Nu=r(Lr);Nv=n(Nu,"This model inherits from "),ud=a(Nu,"A",{href:!0});var WF=r(ud);Iv=n(WF,"TFPreTrainedModel"),WF.forEach(t),Dv=n(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),Sv=p(Xt),Er=a(Xt,"P",{});var Iu=r(Er);Wv=n(Iu,"This model is also a "),zr=a(Iu,"A",{href:!0,rel:!0});var BF=r(zr);Bv=n(BF,"tf.keras.Model"),BF.forEach(t),Uv=n(Iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu.forEach(t),Qv=p(Xt),T(os.$$.fragment,Xt),Hv=p(Xt),qr=a(Xt,"P",{});var Du=r(qr);Vv=n(Du,"This class overrides "),fd=a(Du,"A",{href:!0});var UF=r(fd);Kv=n(UF,"TFRobertaForMaskedLM"),UF.forEach(t),Jv=n(Du,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Du.forEach(t),Gv=p(Xt),Lt=a(Xt,"DIV",{class:!0});var wo=r(Lt);T(Cr.$$.fragment,wo),Yv=p(wo),Qo=a(wo,"P",{});var Yd=r(Qo);Zv=n(Yd,"The "),gd=a(Yd,"A",{href:!0});var QF=r(gd);ey=n(QF,"TFRobertaForMaskedLM"),QF.forEach(t),ty=n(Yd," forward method, overrides the "),ip=a(Yd,"CODE",{});var HF=r(ip);oy=n(HF,"__call__"),HF.forEach(t),ny=n(Yd," special method."),Yd.forEach(t),sy=p(wo),T(ns.$$.fragment,wo),ay=p(wo),T(ss.$$.fragment,wo),ry=p(wo),T(as.$$.fragment,wo),wo.forEach(t),Xt.forEach(t),qm=p(i),Ho=a(i,"H2",{class:!0});var Su=r(Ho);rs=a(Su,"A",{id:!0,class:!0,href:!0});var VF=r(rs);lp=a(VF,"SPAN",{});var KF=r(lp);T(jr.$$.fragment,KF),KF.forEach(t),VF.forEach(t),iy=p(Su),dp=a(Su,"SPAN",{});var JF=r(dp);ly=n(JF,"TFXLMRobertaForSequenceClassification"),JF.forEach(t),Su.forEach(t),Cm=p(i),rt=a(i,"DIV",{class:!0});var Pt=r(rt);T(Xr.$$.fragment,Pt),dy=p(Pt),cp=a(Pt,"P",{});var GF=r(cp);cy=n(GF,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),GF.forEach(t),py=p(Pt),Pr=a(Pt,"P",{});var Wu=r(Pr);hy=n(Wu,"This model inherits from "),_d=a(Wu,"A",{href:!0});var YF=r(_d);my=n(YF,"TFPreTrainedModel"),YF.forEach(t),uy=n(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),fy=p(Pt),Ar=a(Pt,"P",{});var Bu=r(Ar);gy=n(Bu,"This model is also a "),Or=a(Bu,"A",{href:!0,rel:!0});var ZF=r(Or);_y=n(ZF,"tf.keras.Model"),ZF.forEach(t),by=n(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(t),ky=p(Pt),T(is.$$.fragment,Pt),vy=p(Pt),Nr=a(Pt,"P",{});var Uu=r(Nr);yy=n(Uu,"This class overrides "),bd=a(Uu,"A",{href:!0});var e0=r(bd);Ty=n(e0,"TFRobertaForSequenceClassification"),e0.forEach(t),wy=n(Uu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Uu.forEach(t),$y=p(Pt),Et=a(Pt,"DIV",{class:!0});var $o=r(Et);T(Ir.$$.fragment,$o),My=p($o),Vo=a($o,"P",{});var Zd=r(Vo);Fy=n(Zd,"The "),kd=a(Zd,"A",{href:!0});var t0=r(kd);xy=n(t0,"TFRobertaForSequenceClassification"),t0.forEach(t),Ry=n(Zd," forward method, overrides the "),pp=a(Zd,"CODE",{});var o0=r(pp);Ly=n(o0,"__call__"),o0.forEach(t),Ey=n(Zd," special method."),Zd.forEach(t),zy=p($o),T(ls.$$.fragment,$o),qy=p($o),T(ds.$$.fragment,$o),Cy=p($o),T(cs.$$.fragment,$o),$o.forEach(t),Pt.forEach(t),jm=p(i),Ko=a(i,"H2",{class:!0});var Qu=r(Ko);ps=a(Qu,"A",{id:!0,class:!0,href:!0});var n0=r(ps);hp=a(n0,"SPAN",{});var s0=r(hp);T(Dr.$$.fragment,s0),s0.forEach(t),n0.forEach(t),jy=p(Qu),mp=a(Qu,"SPAN",{});var a0=r(mp);Xy=n(a0,"TFXLMRobertaForMultipleChoice"),a0.forEach(t),Qu.forEach(t),Xm=p(i),it=a(i,"DIV",{class:!0});var At=r(it);T(Sr.$$.fragment,At),Py=p(At),up=a(At,"P",{});var r0=r(up);Ay=n(r0,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r0.forEach(t),Oy=p(At),Wr=a(At,"P",{});var Hu=r(Wr);Ny=n(Hu,"This model inherits from "),vd=a(Hu,"A",{href:!0});var i0=r(vd);Iy=n(i0,"TFPreTrainedModel"),i0.forEach(t),Dy=n(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),Sy=p(At),Br=a(At,"P",{});var Vu=r(Br);Wy=n(Vu,"This model is also a "),Ur=a(Vu,"A",{href:!0,rel:!0});var l0=r(Ur);By=n(l0,"tf.keras.Model"),l0.forEach(t),Uy=n(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(t),Qy=p(At),T(hs.$$.fragment,At),Hy=p(At),Qr=a(At,"P",{});var Ku=r(Qr);Vy=n(Ku,"This class overrides "),yd=a(Ku,"A",{href:!0});var d0=r(yd);Ky=n(d0,"TFRobertaForMultipleChoice"),d0.forEach(t),Jy=n(Ku,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Ku.forEach(t),Gy=p(At),Ht=a(At,"DIV",{class:!0});var Hs=r(Ht);T(Hr.$$.fragment,Hs),Yy=p(Hs),Jo=a(Hs,"P",{});var ec=r(Jo);Zy=n(ec,"The "),Td=a(ec,"A",{href:!0});var c0=r(Td);eT=n(c0,"TFRobertaForMultipleChoice"),c0.forEach(t),tT=n(ec," forward method, overrides the "),fp=a(ec,"CODE",{});var p0=r(fp);oT=n(p0,"__call__"),p0.forEach(t),nT=n(ec," special method."),ec.forEach(t),sT=p(Hs),T(ms.$$.fragment,Hs),aT=p(Hs),T(us.$$.fragment,Hs),Hs.forEach(t),At.forEach(t),Pm=p(i),Go=a(i,"H2",{class:!0});var Ju=r(Go);fs=a(Ju,"A",{id:!0,class:!0,href:!0});var h0=r(fs);gp=a(h0,"SPAN",{});var m0=r(gp);T(Vr.$$.fragment,m0),m0.forEach(t),h0.forEach(t),rT=p(Ju),_p=a(Ju,"SPAN",{});var u0=r(_p);iT=n(u0,"TFXLMRobertaForTokenClassification"),u0.forEach(t),Ju.forEach(t),Am=p(i),lt=a(i,"DIV",{class:!0});var Ot=r(lt);T(Kr.$$.fragment,Ot),lT=p(Ot),bp=a(Ot,"P",{});var f0=r(bp);dT=n(f0,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),f0.forEach(t),cT=p(Ot),Jr=a(Ot,"P",{});var Gu=r(Jr);pT=n(Gu,"This model inherits from "),wd=a(Gu,"A",{href:!0});var g0=r(wd);hT=n(g0,"TFPreTrainedModel"),g0.forEach(t),mT=n(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gu.forEach(t),uT=p(Ot),Gr=a(Ot,"P",{});var Yu=r(Gr);fT=n(Yu,"This model is also a "),Yr=a(Yu,"A",{href:!0,rel:!0});var _0=r(Yr);gT=n(_0,"tf.keras.Model"),_0.forEach(t),_T=n(Yu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yu.forEach(t),bT=p(Ot),T(gs.$$.fragment,Ot),kT=p(Ot),Zr=a(Ot,"P",{});var Zu=r(Zr);vT=n(Zu,"This class overrides "),$d=a(Zu,"A",{href:!0});var b0=r($d);yT=n(b0,"TFRobertaForTokenClassification"),b0.forEach(t),TT=n(Zu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Zu.forEach(t),wT=p(Ot),zt=a(Ot,"DIV",{class:!0});var Mo=r(zt);T(ei.$$.fragment,Mo),$T=p(Mo),Yo=a(Mo,"P",{});var tc=r(Yo);MT=n(tc,"The "),Md=a(tc,"A",{href:!0});var k0=r(Md);FT=n(k0,"TFRobertaForTokenClassification"),k0.forEach(t),xT=n(tc," forward method, overrides the "),kp=a(tc,"CODE",{});var v0=r(kp);RT=n(v0,"__call__"),v0.forEach(t),LT=n(tc," special method."),tc.forEach(t),ET=p(Mo),T(_s.$$.fragment,Mo),zT=p(Mo),T(bs.$$.fragment,Mo),qT=p(Mo),T(ks.$$.fragment,Mo),Mo.forEach(t),Ot.forEach(t),Om=p(i),Zo=a(i,"H2",{class:!0});var ef=r(Zo);vs=a(ef,"A",{id:!0,class:!0,href:!0});var y0=r(vs);vp=a(y0,"SPAN",{});var T0=r(vp);T(ti.$$.fragment,T0),T0.forEach(t),y0.forEach(t),CT=p(ef),yp=a(ef,"SPAN",{});var w0=r(yp);jT=n(w0,"TFXLMRobertaForQuestionAnswering"),w0.forEach(t),ef.forEach(t),Nm=p(i),dt=a(i,"DIV",{class:!0});var Nt=r(dt);T(oi.$$.fragment,Nt),XT=p(Nt),en=a(Nt,"P",{});var oc=r(en);PT=n(oc,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tp=a(oc,"CODE",{});var $0=r(Tp);AT=n($0,"span start logits"),$0.forEach(t),OT=n(oc," and "),wp=a(oc,"CODE",{});var M0=r(wp);NT=n(M0,"span end logits"),M0.forEach(t),IT=n(oc,")."),oc.forEach(t),DT=p(Nt),ni=a(Nt,"P",{});var tf=r(ni);ST=n(tf,"This model inherits from "),Fd=a(tf,"A",{href:!0});var F0=r(Fd);WT=n(F0,"TFPreTrainedModel"),F0.forEach(t),BT=n(tf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tf.forEach(t),UT=p(Nt),si=a(Nt,"P",{});var of=r(si);QT=n(of,"This model is also a "),ai=a(of,"A",{href:!0,rel:!0});var x0=r(ai);HT=n(x0,"tf.keras.Model"),x0.forEach(t),VT=n(of,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),of.forEach(t),KT=p(Nt),T(ys.$$.fragment,Nt),JT=p(Nt),ri=a(Nt,"P",{});var nf=r(ri);GT=n(nf,"This class overrides "),$p=a(nf,"CODE",{});var R0=r($p);YT=n(R0,"TFRobertaForQuestionAnsweringSimple"),R0.forEach(t),ZT=n(nf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),nf.forEach(t),ew=p(Nt),qt=a(Nt,"DIV",{class:!0});var Fo=r(qt);T(ii.$$.fragment,Fo),tw=p(Fo),tn=a(Fo,"P",{});var nc=r(tn);ow=n(nc,"The "),xd=a(nc,"A",{href:!0});var L0=r(xd);nw=n(L0,"TFRobertaForQuestionAnswering"),L0.forEach(t),sw=n(nc," forward method, overrides the "),Mp=a(nc,"CODE",{});var E0=r(Mp);aw=n(E0,"__call__"),E0.forEach(t),rw=n(nc," special method."),nc.forEach(t),iw=p(Fo),T(Ts.$$.fragment,Fo),lw=p(Fo),T(ws.$$.fragment,Fo),dw=p(Fo),T($s.$$.fragment,Fo),Fo.forEach(t),Nt.forEach(t),Im=p(i),on=a(i,"H2",{class:!0});var sf=r(on);Ms=a(sf,"A",{id:!0,class:!0,href:!0});var z0=r(Ms);Fp=a(z0,"SPAN",{});var q0=r(Fp);T(li.$$.fragment,q0),q0.forEach(t),z0.forEach(t),cw=p(sf),xp=a(sf,"SPAN",{});var C0=r(xp);pw=n(C0,"FlaxXLMRobertaModel"),C0.forEach(t),sf.forEach(t),Dm=p(i),ct=a(i,"DIV",{class:!0});var It=r(ct);T(di.$$.fragment,It),hw=p(It),ci=a(It,"P",{});var af=r(ci);mw=n(af,`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Rd=a(af,"A",{href:!0});var j0=r(Rd);uw=n(j0,"FlaxPreTrainedModel"),j0.forEach(t),fw=n(af,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),af.forEach(t),gw=p(It),pi=a(It,"P",{});var rf=r(pi);_w=n(rf,"This model is also a Flax Linen "),hi=a(rf,"A",{href:!0,rel:!0});var X0=r(hi);bw=n(X0,"flax.linen.Module"),X0.forEach(t),kw=n(rf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),rf.forEach(t),vw=p(It),Rp=a(It,"P",{});var P0=r(Rp);yw=n(P0,"Finally, this model supports inherent JAX features such as:"),P0.forEach(t),Tw=p(It),lo=a(It,"UL",{});var Vs=r(lo);Lp=a(Vs,"LI",{});var A0=r(Lp);mi=a(A0,"A",{href:!0,rel:!0});var O0=r(mi);ww=n(O0,"Just-In-Time (JIT) compilation"),O0.forEach(t),A0.forEach(t),$w=p(Vs),Ep=a(Vs,"LI",{});var N0=r(Ep);ui=a(N0,"A",{href:!0,rel:!0});var I0=r(ui);Mw=n(I0,"Automatic Differentiation"),I0.forEach(t),N0.forEach(t),Fw=p(Vs),zp=a(Vs,"LI",{});var D0=r(zp);fi=a(D0,"A",{href:!0,rel:!0});var S0=r(fi);xw=n(S0,"Vectorization"),S0.forEach(t),D0.forEach(t),Rw=p(Vs),qp=a(Vs,"LI",{});var W0=r(qp);gi=a(W0,"A",{href:!0,rel:!0});var B0=r(gi);Lw=n(B0,"Parallelization"),B0.forEach(t),W0.forEach(t),Vs.forEach(t),Ew=p(It),_i=a(It,"P",{});var lf=r(_i);zw=n(lf,"This class overrides "),Ld=a(lf,"A",{href:!0});var U0=r(Ld);qw=n(U0,"FlaxRobertaModel"),U0.forEach(t),Cw=n(lf,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),lf.forEach(t),jw=p(It),Vt=a(It,"DIV",{class:!0});var Ks=r(Vt);T(bi.$$.fragment,Ks),Xw=p(Ks),nn=a(Ks,"P",{});var sc=r(nn);Pw=n(sc,"The "),Cp=a(sc,"CODE",{});var Q0=r(Cp);Aw=n(Q0,"FlaxRobertaPreTrainedModel"),Q0.forEach(t),Ow=n(sc," forward method, overrides the "),jp=a(sc,"CODE",{});var H0=r(jp);Nw=n(H0,"__call__"),H0.forEach(t),Iw=n(sc," special method."),sc.forEach(t),Dw=p(Ks),T(Fs.$$.fragment,Ks),Sw=p(Ks),T(xs.$$.fragment,Ks),Ks.forEach(t),It.forEach(t),Sm=p(i),sn=a(i,"H2",{class:!0});var df=r(sn);Rs=a(df,"A",{id:!0,class:!0,href:!0});var V0=r(Rs);Xp=a(V0,"SPAN",{});var K0=r(Xp);T(ki.$$.fragment,K0),K0.forEach(t),V0.forEach(t),Ww=p(df),Pp=a(df,"SPAN",{});var J0=r(Pp);Bw=n(J0,"FlaxXLMRobertaForMaskedLM"),J0.forEach(t),df.forEach(t),Wm=p(i),pt=a(i,"DIV",{class:!0});var Dt=r(pt);T(vi.$$.fragment,Dt),Uw=p(Dt),an=a(Dt,"P",{});var ac=r(an);Qw=n(ac,"XLM-RoBERTa Model with a "),Ap=a(ac,"CODE",{});var G0=r(Ap);Hw=n(G0,"language modeling"),G0.forEach(t),Vw=n(ac,` head on top.
This model inherits from `),Ed=a(ac,"A",{href:!0});var Y0=r(Ed);Kw=n(Y0,"FlaxPreTrainedModel"),Y0.forEach(t),Jw=n(ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ac.forEach(t),Gw=p(Dt),yi=a(Dt,"P",{});var cf=r(yi);Yw=n(cf,"This model is also a Flax Linen "),Ti=a(cf,"A",{href:!0,rel:!0});var Z0=r(Ti);Zw=n(Z0,"flax.linen.Module"),Z0.forEach(t),e$=n(cf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cf.forEach(t),t$=p(Dt),Op=a(Dt,"P",{});var ex=r(Op);o$=n(ex,"Finally, this model supports inherent JAX features such as:"),ex.forEach(t),n$=p(Dt),co=a(Dt,"UL",{});var Js=r(co);Np=a(Js,"LI",{});var tx=r(Np);wi=a(tx,"A",{href:!0,rel:!0});var ox=r(wi);s$=n(ox,"Just-In-Time (JIT) compilation"),ox.forEach(t),tx.forEach(t),a$=p(Js),Ip=a(Js,"LI",{});var nx=r(Ip);$i=a(nx,"A",{href:!0,rel:!0});var sx=r($i);r$=n(sx,"Automatic Differentiation"),sx.forEach(t),nx.forEach(t),i$=p(Js),Dp=a(Js,"LI",{});var ax=r(Dp);Mi=a(ax,"A",{href:!0,rel:!0});var rx=r(Mi);l$=n(rx,"Vectorization"),rx.forEach(t),ax.forEach(t),d$=p(Js),Sp=a(Js,"LI",{});var ix=r(Sp);Fi=a(ix,"A",{href:!0,rel:!0});var lx=r(Fi);c$=n(lx,"Parallelization"),lx.forEach(t),ix.forEach(t),Js.forEach(t),p$=p(Dt),xi=a(Dt,"P",{});var pf=r(xi);h$=n(pf,"This class overrides "),zd=a(pf,"A",{href:!0});var dx=r(zd);m$=n(dx,"FlaxRobertaForMaskedLM"),dx.forEach(t),u$=n(pf,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),pf.forEach(t),f$=p(Dt),Kt=a(Dt,"DIV",{class:!0});var Gs=r(Kt);T(Ri.$$.fragment,Gs),g$=p(Gs),rn=a(Gs,"P",{});var rc=r(rn);_$=n(rc,"The "),Wp=a(rc,"CODE",{});var cx=r(Wp);b$=n(cx,"FlaxRobertaPreTrainedModel"),cx.forEach(t),k$=n(rc," forward method, overrides the "),Bp=a(rc,"CODE",{});var px=r(Bp);v$=n(px,"__call__"),px.forEach(t),y$=n(rc," special method."),rc.forEach(t),T$=p(Gs),T(Ls.$$.fragment,Gs),w$=p(Gs),T(Es.$$.fragment,Gs),Gs.forEach(t),Dt.forEach(t),Bm=p(i),ln=a(i,"H2",{class:!0});var hf=r(ln);zs=a(hf,"A",{id:!0,class:!0,href:!0});var hx=r(zs);Up=a(hx,"SPAN",{});var mx=r(Up);T(Li.$$.fragment,mx),mx.forEach(t),hx.forEach(t),$$=p(hf),Qp=a(hf,"SPAN",{});var ux=r(Qp);M$=n(ux,"FlaxXLMRobertaForSequenceClassification"),ux.forEach(t),hf.forEach(t),Um=p(i),Ze=a(i,"DIV",{class:!0});var yt=r(Ze);T(Ei.$$.fragment,yt),F$=p(yt),Hp=a(yt,"P",{});var fx=r(Hp);x$=n(fx,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fx.forEach(t),R$=p(yt),zi=a(yt,"P",{});var mf=r(zi);L$=n(mf,"This model inherits from "),qd=a(mf,"A",{href:!0});var gx=r(qd);E$=n(gx,"FlaxPreTrainedModel"),gx.forEach(t),z$=n(mf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mf.forEach(t),q$=p(yt),qi=a(yt,"P",{});var uf=r(qi);C$=n(uf,"This model is also a Flax Linen "),Ci=a(uf,"A",{href:!0,rel:!0});var _x=r(Ci);j$=n(_x,"flax.linen.Module"),_x.forEach(t),X$=n(uf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uf.forEach(t),P$=p(yt),Vp=a(yt,"P",{});var bx=r(Vp);A$=n(bx,"Finally, this model supports inherent JAX features such as:"),bx.forEach(t),O$=p(yt),po=a(yt,"UL",{});var Ys=r(po);Kp=a(Ys,"LI",{});var kx=r(Kp);ji=a(kx,"A",{href:!0,rel:!0});var vx=r(ji);N$=n(vx,"Just-In-Time (JIT) compilation"),vx.forEach(t),kx.forEach(t),I$=p(Ys),Jp=a(Ys,"LI",{});var yx=r(Jp);Xi=a(yx,"A",{href:!0,rel:!0});var Tx=r(Xi);D$=n(Tx,"Automatic Differentiation"),Tx.forEach(t),yx.forEach(t),S$=p(Ys),Gp=a(Ys,"LI",{});var wx=r(Gp);Pi=a(wx,"A",{href:!0,rel:!0});var $x=r(Pi);W$=n($x,"Vectorization"),$x.forEach(t),wx.forEach(t),B$=p(Ys),Yp=a(Ys,"LI",{});var Mx=r(Yp);Ai=a(Mx,"A",{href:!0,rel:!0});var Fx=r(Ai);U$=n(Fx,"Parallelization"),Fx.forEach(t),Mx.forEach(t),Ys.forEach(t),Q$=p(yt),Oi=a(yt,"P",{});var ff=r(Oi);H$=n(ff,"This class overrides "),Cd=a(ff,"A",{href:!0});var xx=r(Cd);V$=n(xx,"FlaxRobertaForSequenceClassification"),xx.forEach(t),K$=n(ff,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),ff.forEach(t),J$=p(yt),Jt=a(yt,"DIV",{class:!0});var Zs=r(Jt);T(Ni.$$.fragment,Zs),G$=p(Zs),dn=a(Zs,"P",{});var ic=r(dn);Y$=n(ic,"The "),Zp=a(ic,"CODE",{});var Rx=r(Zp);Z$=n(Rx,"FlaxRobertaPreTrainedModel"),Rx.forEach(t),e1=n(ic," forward method, overrides the "),eh=a(ic,"CODE",{});var Lx=r(eh);t1=n(Lx,"__call__"),Lx.forEach(t),o1=n(ic," special method."),ic.forEach(t),n1=p(Zs),T(qs.$$.fragment,Zs),s1=p(Zs),T(Cs.$$.fragment,Zs),Zs.forEach(t),yt.forEach(t),Qm=p(i),cn=a(i,"H2",{class:!0});var gf=r(cn);js=a(gf,"A",{id:!0,class:!0,href:!0});var Ex=r(js);th=a(Ex,"SPAN",{});var zx=r(th);T(Ii.$$.fragment,zx),zx.forEach(t),Ex.forEach(t),a1=p(gf),oh=a(gf,"SPAN",{});var qx=r(oh);r1=n(qx,"FlaxXLMRobertaForMultipleChoice"),qx.forEach(t),gf.forEach(t),Hm=p(i),et=a(i,"DIV",{class:!0});var Tt=r(et);T(Di.$$.fragment,Tt),i1=p(Tt),nh=a(Tt,"P",{});var Cx=r(nh);l1=n(Cx,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cx.forEach(t),d1=p(Tt),Si=a(Tt,"P",{});var _f=r(Si);c1=n(_f,"This model inherits from "),jd=a(_f,"A",{href:!0});var jx=r(jd);p1=n(jx,"FlaxPreTrainedModel"),jx.forEach(t),h1=n(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_f.forEach(t),m1=p(Tt),Wi=a(Tt,"P",{});var bf=r(Wi);u1=n(bf,"This model is also a Flax Linen "),Bi=a(bf,"A",{href:!0,rel:!0});var Xx=r(Bi);f1=n(Xx,"flax.linen.Module"),Xx.forEach(t),g1=n(bf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bf.forEach(t),_1=p(Tt),sh=a(Tt,"P",{});var Px=r(sh);b1=n(Px,"Finally, this model supports inherent JAX features such as:"),Px.forEach(t),k1=p(Tt),ho=a(Tt,"UL",{});var ea=r(ho);ah=a(ea,"LI",{});var Ax=r(ah);Ui=a(Ax,"A",{href:!0,rel:!0});var Ox=r(Ui);v1=n(Ox,"Just-In-Time (JIT) compilation"),Ox.forEach(t),Ax.forEach(t),y1=p(ea),rh=a(ea,"LI",{});var Nx=r(rh);Qi=a(Nx,"A",{href:!0,rel:!0});var Ix=r(Qi);T1=n(Ix,"Automatic Differentiation"),Ix.forEach(t),Nx.forEach(t),w1=p(ea),ih=a(ea,"LI",{});var Dx=r(ih);Hi=a(Dx,"A",{href:!0,rel:!0});var Sx=r(Hi);$1=n(Sx,"Vectorization"),Sx.forEach(t),Dx.forEach(t),M1=p(ea),lh=a(ea,"LI",{});var Wx=r(lh);Vi=a(Wx,"A",{href:!0,rel:!0});var Bx=r(Vi);F1=n(Bx,"Parallelization"),Bx.forEach(t),Wx.forEach(t),ea.forEach(t),x1=p(Tt),Ki=a(Tt,"P",{});var kf=r(Ki);R1=n(kf,"This class overrides "),Xd=a(kf,"A",{href:!0});var Ux=r(Xd);L1=n(Ux,"FlaxRobertaForMultipleChoice"),Ux.forEach(t),E1=n(kf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),kf.forEach(t),z1=p(Tt),Gt=a(Tt,"DIV",{class:!0});var ta=r(Gt);T(Ji.$$.fragment,ta),q1=p(ta),pn=a(ta,"P",{});var lc=r(pn);C1=n(lc,"The "),dh=a(lc,"CODE",{});var Qx=r(dh);j1=n(Qx,"FlaxRobertaPreTrainedModel"),Qx.forEach(t),X1=n(lc," forward method, overrides the "),ch=a(lc,"CODE",{});var Hx=r(ch);P1=n(Hx,"__call__"),Hx.forEach(t),A1=n(lc," special method."),lc.forEach(t),O1=p(ta),T(Xs.$$.fragment,ta),N1=p(ta),T(Ps.$$.fragment,ta),ta.forEach(t),Tt.forEach(t),Vm=p(i),hn=a(i,"H2",{class:!0});var vf=r(hn);As=a(vf,"A",{id:!0,class:!0,href:!0});var Vx=r(As);ph=a(Vx,"SPAN",{});var Kx=r(ph);T(Gi.$$.fragment,Kx),Kx.forEach(t),Vx.forEach(t),I1=p(vf),hh=a(vf,"SPAN",{});var Jx=r(hh);D1=n(Jx,"FlaxXLMRobertaForTokenClassification"),Jx.forEach(t),vf.forEach(t),Km=p(i),tt=a(i,"DIV",{class:!0});var wt=r(tt);T(Yi.$$.fragment,wt),S1=p(wt),mh=a(wt,"P",{});var Gx=r(mh);W1=n(Gx,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Gx.forEach(t),B1=p(wt),Zi=a(wt,"P",{});var yf=r(Zi);U1=n(yf,"This model inherits from "),Pd=a(yf,"A",{href:!0});var Yx=r(Pd);Q1=n(Yx,"FlaxPreTrainedModel"),Yx.forEach(t),H1=n(yf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),yf.forEach(t),V1=p(wt),el=a(wt,"P",{});var Tf=r(el);K1=n(Tf,"This model is also a Flax Linen "),tl=a(Tf,"A",{href:!0,rel:!0});var Zx=r(tl);J1=n(Zx,"flax.linen.Module"),Zx.forEach(t),G1=n(Tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Tf.forEach(t),Y1=p(wt),uh=a(wt,"P",{});var eR=r(uh);Z1=n(eR,"Finally, this model supports inherent JAX features such as:"),eR.forEach(t),eM=p(wt),mo=a(wt,"UL",{});var oa=r(mo);fh=a(oa,"LI",{});var tR=r(fh);ol=a(tR,"A",{href:!0,rel:!0});var oR=r(ol);tM=n(oR,"Just-In-Time (JIT) compilation"),oR.forEach(t),tR.forEach(t),oM=p(oa),gh=a(oa,"LI",{});var nR=r(gh);nl=a(nR,"A",{href:!0,rel:!0});var sR=r(nl);nM=n(sR,"Automatic Differentiation"),sR.forEach(t),nR.forEach(t),sM=p(oa),_h=a(oa,"LI",{});var aR=r(_h);sl=a(aR,"A",{href:!0,rel:!0});var rR=r(sl);aM=n(rR,"Vectorization"),rR.forEach(t),aR.forEach(t),rM=p(oa),bh=a(oa,"LI",{});var iR=r(bh);al=a(iR,"A",{href:!0,rel:!0});var lR=r(al);iM=n(lR,"Parallelization"),lR.forEach(t),iR.forEach(t),oa.forEach(t),lM=p(wt),rl=a(wt,"P",{});var wf=r(rl);dM=n(wf,"This class overrides "),Ad=a(wf,"A",{href:!0});var dR=r(Ad);cM=n(dR,"FlaxRobertaForTokenClassification"),dR.forEach(t),pM=n(wf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),wf.forEach(t),hM=p(wt),Yt=a(wt,"DIV",{class:!0});var na=r(Yt);T(il.$$.fragment,na),mM=p(na),mn=a(na,"P",{});var dc=r(mn);uM=n(dc,"The "),kh=a(dc,"CODE",{});var cR=r(kh);fM=n(cR,"FlaxRobertaPreTrainedModel"),cR.forEach(t),gM=n(dc," forward method, overrides the "),vh=a(dc,"CODE",{});var pR=r(vh);_M=n(pR,"__call__"),pR.forEach(t),bM=n(dc," special method."),dc.forEach(t),kM=p(na),T(Os.$$.fragment,na),vM=p(na),T(Ns.$$.fragment,na),na.forEach(t),wt.forEach(t),Jm=p(i),un=a(i,"H2",{class:!0});var $f=r(un);Is=a($f,"A",{id:!0,class:!0,href:!0});var hR=r(Is);yh=a(hR,"SPAN",{});var mR=r(yh);T(ll.$$.fragment,mR),mR.forEach(t),hR.forEach(t),yM=p($f),Th=a($f,"SPAN",{});var uR=r(Th);TM=n(uR,"FlaxXLMRobertaForQuestionAnswering"),uR.forEach(t),$f.forEach(t),Gm=p(i),ot=a(i,"DIV",{class:!0});var $t=r(ot);T(dl.$$.fragment,$t),wM=p($t),fn=a($t,"P",{});var cc=r(fn);$M=n(cc,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),wh=a(cc,"CODE",{});var fR=r(wh);MM=n(fR,"span start logits"),fR.forEach(t),FM=n(cc," and "),$h=a(cc,"CODE",{});var gR=r($h);xM=n(gR,"span end logits"),gR.forEach(t),RM=n(cc,")."),cc.forEach(t),LM=p($t),cl=a($t,"P",{});var Mf=r(cl);EM=n(Mf,"This model inherits from "),Od=a(Mf,"A",{href:!0});var _R=r(Od);zM=n(_R,"FlaxPreTrainedModel"),_R.forEach(t),qM=n(Mf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Mf.forEach(t),CM=p($t),pl=a($t,"P",{});var Ff=r(pl);jM=n(Ff,"This model is also a Flax Linen "),hl=a(Ff,"A",{href:!0,rel:!0});var bR=r(hl);XM=n(bR,"flax.linen.Module"),bR.forEach(t),PM=n(Ff,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ff.forEach(t),AM=p($t),Mh=a($t,"P",{});var kR=r(Mh);OM=n(kR,"Finally, this model supports inherent JAX features such as:"),kR.forEach(t),NM=p($t),uo=a($t,"UL",{});var sa=r(uo);Fh=a(sa,"LI",{});var vR=r(Fh);ml=a(vR,"A",{href:!0,rel:!0});var yR=r(ml);IM=n(yR,"Just-In-Time (JIT) compilation"),yR.forEach(t),vR.forEach(t),DM=p(sa),xh=a(sa,"LI",{});var TR=r(xh);ul=a(TR,"A",{href:!0,rel:!0});var wR=r(ul);SM=n(wR,"Automatic Differentiation"),wR.forEach(t),TR.forEach(t),WM=p(sa),Rh=a(sa,"LI",{});var $R=r(Rh);fl=a($R,"A",{href:!0,rel:!0});var MR=r(fl);BM=n(MR,"Vectorization"),MR.forEach(t),$R.forEach(t),UM=p(sa),Lh=a(sa,"LI",{});var FR=r(Lh);gl=a(FR,"A",{href:!0,rel:!0});var xR=r(gl);QM=n(xR,"Parallelization"),xR.forEach(t),FR.forEach(t),sa.forEach(t),HM=p($t),_l=a($t,"P",{});var xf=r(_l);VM=n(xf,"This class overrides "),Nd=a(xf,"A",{href:!0});var RR=r(Nd);KM=n(RR,"FlaxRobertaForQuestionAnswering"),RR.forEach(t),JM=n(xf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),xf.forEach(t),GM=p($t),Zt=a($t,"DIV",{class:!0});var aa=r(Zt);T(bl.$$.fragment,aa),YM=p(aa),gn=a(aa,"P",{});var pc=r(gn);ZM=n(pc,"The "),Eh=a(pc,"CODE",{});var LR=r(Eh);e2=n(LR,"FlaxRobertaPreTrainedModel"),LR.forEach(t),t2=n(pc," forward method, overrides the "),zh=a(pc,"CODE",{});var ER=r(zh);o2=n(ER,"__call__"),ER.forEach(t),n2=n(pc," special method."),pc.forEach(t),s2=p(aa),T(Ds.$$.fragment,aa),a2=p(aa),T(Ss.$$.fragment,aa),aa.forEach(t),$t.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(AL)),u(f,"id","xlmroberta"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#xlmroberta"),u(h,"class","relative group"),u(re,"id","overview"),u(re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(re,"href","#overview"),u(O,"class","relative group"),u(de,"href","https://arxiv.org/abs/1911.02116"),u(de,"rel","nofollow"),u(me,"href","roberta"),u(he,"href","https://huggingface.co/stefan-it"),u(he,"rel","nofollow"),u(Z,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),u(Z,"rel","nofollow"),u(ie,"id","transformers.XLMRobertaConfig"),u(ie,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ie,"href","#transformers.XLMRobertaConfig"),u(ae,"class","relative group"),u(Se,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaConfig"),u(Ie,"href","https://huggingface.co/xlm-roberta-base"),u(Ie,"rel","nofollow"),u(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(le,"id","transformers.XLMRobertaTokenizer"),u(le,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(le,"href","#transformers.XLMRobertaTokenizer"),u(Oe,"class","relative group"),u(Cl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),u(jl,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(ia,"href","https://github.com/google/sentencepiece"),u(ia,"rel","nofollow"),u(Xl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ol,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tn,"id","transformers.XLMRobertaTokenizerFast"),u(Tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Tn,"href","#transformers.XLMRobertaTokenizerFast"),u(xo,"class","relative group"),u(Nl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Il,"href","/docs/transformers/main/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(_a,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),u(_a,"rel","nofollow"),u(Dl,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.XLMRobertaModel"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.XLMRobertaModel"),u(Ro,"class","relative group"),u(Bl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Fa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Fa,"rel","nofollow"),u(Ul,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(Ql,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaModel"),u(Wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.XLMRobertaForCausalLM"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.XLMRobertaForCausalLM"),u(Eo,"class","relative group"),u(Hl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(ja,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ja,"rel","nofollow"),u(Vl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(Kl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(En,"id","transformers.XLMRobertaForMaskedLM"),u(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(En,"href","#transformers.XLMRobertaForMaskedLM"),u(qo,"class","relative group"),u(Jl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Sa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sa,"rel","nofollow"),u(Gl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(Yl,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jn,"id","transformers.XLMRobertaForSequenceClassification"),u(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jn,"href","#transformers.XLMRobertaForSequenceClassification"),u(jo,"class","relative group"),u(Zl,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ka,"rel","nofollow"),u(ed,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(td,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(In,"id","transformers.XLMRobertaForMultipleChoice"),u(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(In,"href","#transformers.XLMRobertaForMultipleChoice"),u(Po,"class","relative group"),u(od,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(or,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(or,"rel","nofollow"),u(nd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u(sd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wn,"id","transformers.XLMRobertaForTokenClassification"),u(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wn,"href","#transformers.XLMRobertaForTokenClassification"),u(Oo,"class","relative group"),u(ad,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(dr,"rel","nofollow"),u(rd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(id,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Hn,"id","transformers.XLMRobertaForQuestionAnswering"),u(Hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Hn,"href","#transformers.XLMRobertaForQuestionAnswering"),u(Io,"class","relative group"),u(ld,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(gr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(gr,"rel","nofollow"),u(dd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(cd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Gn,"id","transformers.TFXLMRobertaModel"),u(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Gn,"href","#transformers.TFXLMRobertaModel"),u(Wo,"class","relative group"),u(pd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(wr,"rel","nofollow"),u(hd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(md,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaModel"),u(Qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ts,"id","transformers.TFXLMRobertaForMaskedLM"),u(ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ts,"href","#transformers.TFXLMRobertaForMaskedLM"),u(Uo,"class","relative group"),u(ud,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(zr,"rel","nofollow"),u(fd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(gd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rs,"id","transformers.TFXLMRobertaForSequenceClassification"),u(rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(rs,"href","#transformers.TFXLMRobertaForSequenceClassification"),u(Ho,"class","relative group"),u(_d,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Or,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Or,"rel","nofollow"),u(bd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(kd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ps,"id","transformers.TFXLMRobertaForMultipleChoice"),u(ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ps,"href","#transformers.TFXLMRobertaForMultipleChoice"),u(Ko,"class","relative group"),u(vd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ur,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ur,"rel","nofollow"),u(yd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Td,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.TFXLMRobertaForTokenClassification"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.TFXLMRobertaForTokenClassification"),u(Go,"class","relative group"),u(wd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Yr,"rel","nofollow"),u($d,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(Md,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vs,"id","transformers.TFXLMRobertaForQuestionAnswering"),u(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vs,"href","#transformers.TFXLMRobertaForQuestionAnswering"),u(Zo,"class","relative group"),u(Fd,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(ai,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(ai,"rel","nofollow"),u(xd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ms,"id","transformers.FlaxXLMRobertaModel"),u(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ms,"href","#transformers.FlaxXLMRobertaModel"),u(on,"class","relative group"),u(Rd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(hi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(mi,"rel","nofollow"),u(ui,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ui,"rel","nofollow"),u(fi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fi,"rel","nofollow"),u(gi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gi,"rel","nofollow"),u(Ld,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaModel"),u(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Rs,"id","transformers.FlaxXLMRobertaForMaskedLM"),u(Rs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Rs,"href","#transformers.FlaxXLMRobertaForMaskedLM"),u(sn,"class","relative group"),u(Ed,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ti,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ti,"rel","nofollow"),u(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u($i,"rel","nofollow"),u(Mi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Mi,"rel","nofollow"),u(Fi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Fi,"rel","nofollow"),u(zd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zs,"id","transformers.FlaxXLMRobertaForSequenceClassification"),u(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zs,"href","#transformers.FlaxXLMRobertaForSequenceClassification"),u(ln,"class","relative group"),u(qd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ci,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ci,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ji,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xi,"rel","nofollow"),u(Pi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Pi,"rel","nofollow"),u(Ai,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Ai,"rel","nofollow"),u(Cd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(js,"id","transformers.FlaxXLMRobertaForMultipleChoice"),u(js,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(js,"href","#transformers.FlaxXLMRobertaForMultipleChoice"),u(cn,"class","relative group"),u(jd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Bi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Bi,"rel","nofollow"),u(Ui,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ui,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Qi,"rel","nofollow"),u(Hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Hi,"rel","nofollow"),u(Vi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Vi,"rel","nofollow"),u(Xd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForMultipleChoice"),u(Gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(As,"id","transformers.FlaxXLMRobertaForTokenClassification"),u(As,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(As,"href","#transformers.FlaxXLMRobertaForTokenClassification"),u(hn,"class","relative group"),u(Pd,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(tl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(nl,"rel","nofollow"),u(sl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(sl,"rel","nofollow"),u(al,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(al,"rel","nofollow"),u(Ad,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),u(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.FlaxXLMRobertaForQuestionAnswering"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.FlaxXLMRobertaForQuestionAnswering"),u(un,"class","relative group"),u(Od,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(hl,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(hl,"rel","nofollow"),u(ml,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ml,"rel","nofollow"),u(ul,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ul,"rel","nofollow"),u(fl,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(fl,"rel","nofollow"),u(gl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(gl,"rel","nofollow"),u(Nd,"href","/docs/transformers/main/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),u(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,b){e(document.head,d),_(i,g,b),_(i,h,b),e(h,f),e(f,k),w(l,k,null),e(h,m),e(h,L),e(L,$e),_(i,be,b),_(i,O,b),e(O,re),e(re,te),w(R,te,null),e(O,Me),e(O,U),e(U,Fe),_(i,ke,b),_(i,D,b),e(D,xe),e(D,de),e(de,H),e(D,Re),_(i,ve,b),_(i,W,b),e(W,Le),_(i,ye,b),_(i,B,b),e(B,ue),e(ue,Ee),_(i,ne,b),_(i,q,b),e(q,C),_(i,Te,b),_(i,S,b),e(S,ce),e(ce,ze),e(ce,Q),e(Q,qe),e(ce,Ce),e(S,j),e(S,pe),e(pe,V),e(pe,me),e(me,je),e(pe,K),_(i,we,b),_(i,se,b),e(se,N),e(se,he),e(he,J),e(se,Xe),e(se,Z),e(Z,X),e(se,Pe),_(i,P,b),_(i,ae,b),e(ae,ie),e(ie,v),w(E,v,null),e(ae,He),e(ae,oe),e(oe,Ve),_(i,Ue,b),_(i,z,b),w(Ne,z,null),e(z,Ke),e(z,Ae),e(Ae,Je),e(Ae,Se),e(Se,I),e(Ae,G),e(Ae,Ie),e(Ie,Ge),e(Ae,Y),_(i,Qe,b),_(i,Oe,b),e(Oe,le),e(le,Be),w(ee,Be,null),e(Oe,Ye),e(Oe,hc),e(hc,Rf),_(i,pm,b),_(i,nt,b),w(ra,nt,null),e(nt,Lf),e(nt,io),e(io,Ef),e(io,Cl),e(Cl,zf),e(io,qf),e(io,jl),e(jl,Cf),e(io,jf),e(io,ia),e(ia,Xf),e(io,Pf),e(nt,Af),e(nt,la),e(la,Of),e(la,Xl),e(Xl,Nf),e(la,If),e(nt,Df),e(nt,go),w(da,go,null),e(go,Sf),e(go,mc),e(mc,Wf),e(go,Bf),e(go,ca),e(ca,Pl),e(Pl,Uf),e(Pl,uc),e(uc,Qf),e(ca,Hf),e(ca,Al),e(Al,Vf),e(Al,fc),e(fc,Kf),e(nt,Jf),e(nt,vn),w(pa,vn,null),e(vn,Gf),e(vn,ha),e(ha,Yf),e(ha,gc),e(gc,Zf),e(ha,eg),e(nt,tg),e(nt,yn),w(ma,yn,null),e(yn,og),e(yn,_c),e(_c,ng),e(nt,sg),e(nt,Ol),w(ua,Ol,null),_(i,hm,b),_(i,xo,b),e(xo,Tn),e(Tn,bc),w(fa,bc,null),e(xo,ag),e(xo,kc),e(kc,rg),_(i,mm,b),_(i,Mt,b),w(ga,Mt,null),e(Mt,ig),e(Mt,St),e(St,lg),e(St,vc),e(vc,dg),e(St,cg),e(St,Nl),e(Nl,pg),e(St,hg),e(St,Il),e(Il,mg),e(St,ug),e(St,_a),e(_a,fg),e(St,gg),e(Mt,_g),e(Mt,ba),e(ba,bg),e(ba,Dl),e(Dl,kg),e(ba,vg),e(Mt,yg),e(Mt,_o),w(ka,_o,null),e(_o,Tg),e(_o,yc),e(yc,wg),e(_o,$g),e(_o,va),e(va,Sl),e(Sl,Mg),e(Sl,Tc),e(Tc,Fg),e(va,xg),e(va,Wl),e(Wl,Rg),e(Wl,wc),e(wc,Lg),e(Mt,Eg),e(Mt,wn),w(ya,wn,null),e(wn,zg),e(wn,$c),e($c,qg),_(i,um,b),_(i,Ro,b),e(Ro,$n),e($n,Mc),w(Ta,Mc,null),e(Ro,Cg),e(Ro,Fc),e(Fc,jg),_(i,fm,b),_(i,mt,b),w(wa,mt,null),e(mt,Xg),e(mt,xc),e(xc,Pg),e(mt,Ag),e(mt,$a),e($a,Og),e($a,Bl),e(Bl,Ng),e($a,Ig),e(mt,Dg),e(mt,Ma),e(Ma,Sg),e(Ma,Fa),e(Fa,Wg),e(Ma,Bg),e(mt,Ug),e(mt,xa),e(xa,Qg),e(xa,Ul),e(Ul,Hg),e(xa,Vg),e(mt,Kg),e(mt,Wt),w(Ra,Wt,null),e(Wt,Jg),e(Wt,Lo),e(Lo,Gg),e(Lo,Ql),e(Ql,Yg),e(Lo,Zg),e(Lo,Rc),e(Rc,e_),e(Lo,t_),e(Wt,o_),w(Mn,Wt,null),e(Wt,n_),w(Fn,Wt,null),_(i,gm,b),_(i,Eo,b),e(Eo,xn),e(xn,Lc),w(La,Lc,null),e(Eo,s_),e(Eo,Ec),e(Ec,a_),_(i,_m,b),_(i,ut,b),w(Ea,ut,null),e(ut,r_),e(ut,za),e(za,i_),e(za,zc),e(zc,l_),e(za,d_),e(ut,c_),e(ut,qa),e(qa,p_),e(qa,Hl),e(Hl,h_),e(qa,m_),e(ut,u_),e(ut,Ca),e(Ca,f_),e(Ca,ja),e(ja,g_),e(Ca,__),e(ut,b_),e(ut,Xa),e(Xa,k_),e(Xa,Vl),e(Vl,v_),e(Xa,y_),e(ut,T_),e(ut,Bt),w(Pa,Bt,null),e(Bt,w_),e(Bt,zo),e(zo,$_),e(zo,Kl),e(Kl,M_),e(zo,F_),e(zo,qc),e(qc,x_),e(zo,R_),e(Bt,L_),w(Rn,Bt,null),e(Bt,E_),w(Ln,Bt,null),_(i,bm,b),_(i,qo,b),e(qo,En),e(En,Cc),w(Aa,Cc,null),e(qo,z_),e(qo,jc),e(jc,q_),_(i,km,b),_(i,ft,b),w(Oa,ft,null),e(ft,C_),e(ft,Na),e(Na,j_),e(Na,Xc),e(Xc,X_),e(Na,P_),e(ft,A_),e(ft,Ia),e(Ia,O_),e(Ia,Jl),e(Jl,N_),e(Ia,I_),e(ft,D_),e(ft,Da),e(Da,S_),e(Da,Sa),e(Sa,W_),e(Da,B_),e(ft,U_),e(ft,Wa),e(Wa,Q_),e(Wa,Gl),e(Gl,H_),e(Wa,V_),e(ft,K_),e(ft,Ft),w(Ba,Ft,null),e(Ft,J_),e(Ft,Co),e(Co,G_),e(Co,Yl),e(Yl,Y_),e(Co,Z_),e(Co,Pc),e(Pc,eb),e(Co,tb),e(Ft,ob),w(zn,Ft,null),e(Ft,nb),w(qn,Ft,null),e(Ft,sb),w(Cn,Ft,null),_(i,vm,b),_(i,jo,b),e(jo,jn),e(jn,Ac),w(Ua,Ac,null),e(jo,ab),e(jo,Oc),e(Oc,rb),_(i,ym,b),_(i,gt,b),w(Qa,gt,null),e(gt,ib),e(gt,Nc),e(Nc,lb),e(gt,db),e(gt,Ha),e(Ha,cb),e(Ha,Zl),e(Zl,pb),e(Ha,hb),e(gt,mb),e(gt,Va),e(Va,ub),e(Va,Ka),e(Ka,fb),e(Va,gb),e(gt,_b),e(gt,Ja),e(Ja,bb),e(Ja,ed),e(ed,kb),e(Ja,vb),e(gt,yb),e(gt,ht),w(Ga,ht,null),e(ht,Tb),e(ht,Xo),e(Xo,wb),e(Xo,td),e(td,$b),e(Xo,Mb),e(Xo,Ic),e(Ic,Fb),e(Xo,xb),e(ht,Rb),w(Xn,ht,null),e(ht,Lb),w(Pn,ht,null),e(ht,Eb),w(An,ht,null),e(ht,zb),w(On,ht,null),e(ht,qb),w(Nn,ht,null),_(i,Tm,b),_(i,Po,b),e(Po,In),e(In,Dc),w(Ya,Dc,null),e(Po,Cb),e(Po,Sc),e(Sc,jb),_(i,wm,b),_(i,_t,b),w(Za,_t,null),e(_t,Xb),e(_t,Wc),e(Wc,Pb),e(_t,Ab),e(_t,er),e(er,Ob),e(er,od),e(od,Nb),e(er,Ib),e(_t,Db),e(_t,tr),e(tr,Sb),e(tr,or),e(or,Wb),e(tr,Bb),e(_t,Ub),e(_t,nr),e(nr,Qb),e(nr,nd),e(nd,Hb),e(nr,Vb),e(_t,Kb),e(_t,Ut),w(sr,Ut,null),e(Ut,Jb),e(Ut,Ao),e(Ao,Gb),e(Ao,sd),e(sd,Yb),e(Ao,Zb),e(Ao,Bc),e(Bc,ek),e(Ao,tk),e(Ut,ok),w(Dn,Ut,null),e(Ut,nk),w(Sn,Ut,null),_(i,$m,b),_(i,Oo,b),e(Oo,Wn),e(Wn,Uc),w(ar,Uc,null),e(Oo,sk),e(Oo,Qc),e(Qc,ak),_(i,Mm,b),_(i,bt,b),w(rr,bt,null),e(bt,rk),e(bt,Hc),e(Hc,ik),e(bt,lk),e(bt,ir),e(ir,dk),e(ir,ad),e(ad,ck),e(ir,pk),e(bt,hk),e(bt,lr),e(lr,mk),e(lr,dr),e(dr,uk),e(lr,fk),e(bt,gk),e(bt,cr),e(cr,_k),e(cr,rd),e(rd,bk),e(cr,kk),e(bt,vk),e(bt,xt),w(pr,xt,null),e(xt,yk),e(xt,No),e(No,Tk),e(No,id),e(id,wk),e(No,$k),e(No,Vc),e(Vc,Mk),e(No,Fk),e(xt,xk),w(Bn,xt,null),e(xt,Rk),w(Un,xt,null),e(xt,Lk),w(Qn,xt,null),_(i,Fm,b),_(i,Io,b),e(Io,Hn),e(Hn,Kc),w(hr,Kc,null),e(Io,Ek),e(Io,Jc),e(Jc,zk),_(i,xm,b),_(i,kt,b),w(mr,kt,null),e(kt,qk),e(kt,Do),e(Do,Ck),e(Do,Gc),e(Gc,jk),e(Do,Xk),e(Do,Yc),e(Yc,Pk),e(Do,Ak),e(kt,Ok),e(kt,ur),e(ur,Nk),e(ur,ld),e(ld,Ik),e(ur,Dk),e(kt,Sk),e(kt,fr),e(fr,Wk),e(fr,gr),e(gr,Bk),e(fr,Uk),e(kt,Qk),e(kt,_r),e(_r,Hk),e(_r,dd),e(dd,Vk),e(_r,Kk),e(kt,Jk),e(kt,Rt),w(br,Rt,null),e(Rt,Gk),e(Rt,So),e(So,Yk),e(So,cd),e(cd,Zk),e(So,ev),e(So,Zc),e(Zc,tv),e(So,ov),e(Rt,nv),w(Vn,Rt,null),e(Rt,sv),w(Kn,Rt,null),e(Rt,av),w(Jn,Rt,null),_(i,Rm,b),_(i,Wo,b),e(Wo,Gn),e(Gn,ep),w(kr,ep,null),e(Wo,rv),e(Wo,tp),e(tp,iv),_(i,Lm,b),_(i,st,b),w(vr,st,null),e(st,lv),e(st,op),e(op,dv),e(st,cv),e(st,yr),e(yr,pv),e(yr,pd),e(pd,hv),e(yr,mv),e(st,uv),e(st,Tr),e(Tr,fv),e(Tr,wr),e(wr,gv),e(Tr,_v),e(st,bv),w(Yn,st,null),e(st,kv),e(st,$r),e($r,vv),e($r,hd),e(hd,yv),e($r,Tv),e(st,wv),e(st,Qt),w(Mr,Qt,null),e(Qt,$v),e(Qt,Bo),e(Bo,Mv),e(Bo,md),e(md,Fv),e(Bo,xv),e(Bo,np),e(np,Rv),e(Bo,Lv),e(Qt,Ev),w(Zn,Qt,null),e(Qt,zv),w(es,Qt,null),_(i,Em,b),_(i,Uo,b),e(Uo,ts),e(ts,sp),w(Fr,sp,null),e(Uo,qv),e(Uo,ap),e(ap,Cv),_(i,zm,b),_(i,at,b),w(xr,at,null),e(at,jv),e(at,Rr),e(Rr,Xv),e(Rr,rp),e(rp,Pv),e(Rr,Av),e(at,Ov),e(at,Lr),e(Lr,Nv),e(Lr,ud),e(ud,Iv),e(Lr,Dv),e(at,Sv),e(at,Er),e(Er,Wv),e(Er,zr),e(zr,Bv),e(Er,Uv),e(at,Qv),w(os,at,null),e(at,Hv),e(at,qr),e(qr,Vv),e(qr,fd),e(fd,Kv),e(qr,Jv),e(at,Gv),e(at,Lt),w(Cr,Lt,null),e(Lt,Yv),e(Lt,Qo),e(Qo,Zv),e(Qo,gd),e(gd,ey),e(Qo,ty),e(Qo,ip),e(ip,oy),e(Qo,ny),e(Lt,sy),w(ns,Lt,null),e(Lt,ay),w(ss,Lt,null),e(Lt,ry),w(as,Lt,null),_(i,qm,b),_(i,Ho,b),e(Ho,rs),e(rs,lp),w(jr,lp,null),e(Ho,iy),e(Ho,dp),e(dp,ly),_(i,Cm,b),_(i,rt,b),w(Xr,rt,null),e(rt,dy),e(rt,cp),e(cp,cy),e(rt,py),e(rt,Pr),e(Pr,hy),e(Pr,_d),e(_d,my),e(Pr,uy),e(rt,fy),e(rt,Ar),e(Ar,gy),e(Ar,Or),e(Or,_y),e(Ar,by),e(rt,ky),w(is,rt,null),e(rt,vy),e(rt,Nr),e(Nr,yy),e(Nr,bd),e(bd,Ty),e(Nr,wy),e(rt,$y),e(rt,Et),w(Ir,Et,null),e(Et,My),e(Et,Vo),e(Vo,Fy),e(Vo,kd),e(kd,xy),e(Vo,Ry),e(Vo,pp),e(pp,Ly),e(Vo,Ey),e(Et,zy),w(ls,Et,null),e(Et,qy),w(ds,Et,null),e(Et,Cy),w(cs,Et,null),_(i,jm,b),_(i,Ko,b),e(Ko,ps),e(ps,hp),w(Dr,hp,null),e(Ko,jy),e(Ko,mp),e(mp,Xy),_(i,Xm,b),_(i,it,b),w(Sr,it,null),e(it,Py),e(it,up),e(up,Ay),e(it,Oy),e(it,Wr),e(Wr,Ny),e(Wr,vd),e(vd,Iy),e(Wr,Dy),e(it,Sy),e(it,Br),e(Br,Wy),e(Br,Ur),e(Ur,By),e(Br,Uy),e(it,Qy),w(hs,it,null),e(it,Hy),e(it,Qr),e(Qr,Vy),e(Qr,yd),e(yd,Ky),e(Qr,Jy),e(it,Gy),e(it,Ht),w(Hr,Ht,null),e(Ht,Yy),e(Ht,Jo),e(Jo,Zy),e(Jo,Td),e(Td,eT),e(Jo,tT),e(Jo,fp),e(fp,oT),e(Jo,nT),e(Ht,sT),w(ms,Ht,null),e(Ht,aT),w(us,Ht,null),_(i,Pm,b),_(i,Go,b),e(Go,fs),e(fs,gp),w(Vr,gp,null),e(Go,rT),e(Go,_p),e(_p,iT),_(i,Am,b),_(i,lt,b),w(Kr,lt,null),e(lt,lT),e(lt,bp),e(bp,dT),e(lt,cT),e(lt,Jr),e(Jr,pT),e(Jr,wd),e(wd,hT),e(Jr,mT),e(lt,uT),e(lt,Gr),e(Gr,fT),e(Gr,Yr),e(Yr,gT),e(Gr,_T),e(lt,bT),w(gs,lt,null),e(lt,kT),e(lt,Zr),e(Zr,vT),e(Zr,$d),e($d,yT),e(Zr,TT),e(lt,wT),e(lt,zt),w(ei,zt,null),e(zt,$T),e(zt,Yo),e(Yo,MT),e(Yo,Md),e(Md,FT),e(Yo,xT),e(Yo,kp),e(kp,RT),e(Yo,LT),e(zt,ET),w(_s,zt,null),e(zt,zT),w(bs,zt,null),e(zt,qT),w(ks,zt,null),_(i,Om,b),_(i,Zo,b),e(Zo,vs),e(vs,vp),w(ti,vp,null),e(Zo,CT),e(Zo,yp),e(yp,jT),_(i,Nm,b),_(i,dt,b),w(oi,dt,null),e(dt,XT),e(dt,en),e(en,PT),e(en,Tp),e(Tp,AT),e(en,OT),e(en,wp),e(wp,NT),e(en,IT),e(dt,DT),e(dt,ni),e(ni,ST),e(ni,Fd),e(Fd,WT),e(ni,BT),e(dt,UT),e(dt,si),e(si,QT),e(si,ai),e(ai,HT),e(si,VT),e(dt,KT),w(ys,dt,null),e(dt,JT),e(dt,ri),e(ri,GT),e(ri,$p),e($p,YT),e(ri,ZT),e(dt,ew),e(dt,qt),w(ii,qt,null),e(qt,tw),e(qt,tn),e(tn,ow),e(tn,xd),e(xd,nw),e(tn,sw),e(tn,Mp),e(Mp,aw),e(tn,rw),e(qt,iw),w(Ts,qt,null),e(qt,lw),w(ws,qt,null),e(qt,dw),w($s,qt,null),_(i,Im,b),_(i,on,b),e(on,Ms),e(Ms,Fp),w(li,Fp,null),e(on,cw),e(on,xp),e(xp,pw),_(i,Dm,b),_(i,ct,b),w(di,ct,null),e(ct,hw),e(ct,ci),e(ci,mw),e(ci,Rd),e(Rd,uw),e(ci,fw),e(ct,gw),e(ct,pi),e(pi,_w),e(pi,hi),e(hi,bw),e(pi,kw),e(ct,vw),e(ct,Rp),e(Rp,yw),e(ct,Tw),e(ct,lo),e(lo,Lp),e(Lp,mi),e(mi,ww),e(lo,$w),e(lo,Ep),e(Ep,ui),e(ui,Mw),e(lo,Fw),e(lo,zp),e(zp,fi),e(fi,xw),e(lo,Rw),e(lo,qp),e(qp,gi),e(gi,Lw),e(ct,Ew),e(ct,_i),e(_i,zw),e(_i,Ld),e(Ld,qw),e(_i,Cw),e(ct,jw),e(ct,Vt),w(bi,Vt,null),e(Vt,Xw),e(Vt,nn),e(nn,Pw),e(nn,Cp),e(Cp,Aw),e(nn,Ow),e(nn,jp),e(jp,Nw),e(nn,Iw),e(Vt,Dw),w(Fs,Vt,null),e(Vt,Sw),w(xs,Vt,null),_(i,Sm,b),_(i,sn,b),e(sn,Rs),e(Rs,Xp),w(ki,Xp,null),e(sn,Ww),e(sn,Pp),e(Pp,Bw),_(i,Wm,b),_(i,pt,b),w(vi,pt,null),e(pt,Uw),e(pt,an),e(an,Qw),e(an,Ap),e(Ap,Hw),e(an,Vw),e(an,Ed),e(Ed,Kw),e(an,Jw),e(pt,Gw),e(pt,yi),e(yi,Yw),e(yi,Ti),e(Ti,Zw),e(yi,e$),e(pt,t$),e(pt,Op),e(Op,o$),e(pt,n$),e(pt,co),e(co,Np),e(Np,wi),e(wi,s$),e(co,a$),e(co,Ip),e(Ip,$i),e($i,r$),e(co,i$),e(co,Dp),e(Dp,Mi),e(Mi,l$),e(co,d$),e(co,Sp),e(Sp,Fi),e(Fi,c$),e(pt,p$),e(pt,xi),e(xi,h$),e(xi,zd),e(zd,m$),e(xi,u$),e(pt,f$),e(pt,Kt),w(Ri,Kt,null),e(Kt,g$),e(Kt,rn),e(rn,_$),e(rn,Wp),e(Wp,b$),e(rn,k$),e(rn,Bp),e(Bp,v$),e(rn,y$),e(Kt,T$),w(Ls,Kt,null),e(Kt,w$),w(Es,Kt,null),_(i,Bm,b),_(i,ln,b),e(ln,zs),e(zs,Up),w(Li,Up,null),e(ln,$$),e(ln,Qp),e(Qp,M$),_(i,Um,b),_(i,Ze,b),w(Ei,Ze,null),e(Ze,F$),e(Ze,Hp),e(Hp,x$),e(Ze,R$),e(Ze,zi),e(zi,L$),e(zi,qd),e(qd,E$),e(zi,z$),e(Ze,q$),e(Ze,qi),e(qi,C$),e(qi,Ci),e(Ci,j$),e(qi,X$),e(Ze,P$),e(Ze,Vp),e(Vp,A$),e(Ze,O$),e(Ze,po),e(po,Kp),e(Kp,ji),e(ji,N$),e(po,I$),e(po,Jp),e(Jp,Xi),e(Xi,D$),e(po,S$),e(po,Gp),e(Gp,Pi),e(Pi,W$),e(po,B$),e(po,Yp),e(Yp,Ai),e(Ai,U$),e(Ze,Q$),e(Ze,Oi),e(Oi,H$),e(Oi,Cd),e(Cd,V$),e(Oi,K$),e(Ze,J$),e(Ze,Jt),w(Ni,Jt,null),e(Jt,G$),e(Jt,dn),e(dn,Y$),e(dn,Zp),e(Zp,Z$),e(dn,e1),e(dn,eh),e(eh,t1),e(dn,o1),e(Jt,n1),w(qs,Jt,null),e(Jt,s1),w(Cs,Jt,null),_(i,Qm,b),_(i,cn,b),e(cn,js),e(js,th),w(Ii,th,null),e(cn,a1),e(cn,oh),e(oh,r1),_(i,Hm,b),_(i,et,b),w(Di,et,null),e(et,i1),e(et,nh),e(nh,l1),e(et,d1),e(et,Si),e(Si,c1),e(Si,jd),e(jd,p1),e(Si,h1),e(et,m1),e(et,Wi),e(Wi,u1),e(Wi,Bi),e(Bi,f1),e(Wi,g1),e(et,_1),e(et,sh),e(sh,b1),e(et,k1),e(et,ho),e(ho,ah),e(ah,Ui),e(Ui,v1),e(ho,y1),e(ho,rh),e(rh,Qi),e(Qi,T1),e(ho,w1),e(ho,ih),e(ih,Hi),e(Hi,$1),e(ho,M1),e(ho,lh),e(lh,Vi),e(Vi,F1),e(et,x1),e(et,Ki),e(Ki,R1),e(Ki,Xd),e(Xd,L1),e(Ki,E1),e(et,z1),e(et,Gt),w(Ji,Gt,null),e(Gt,q1),e(Gt,pn),e(pn,C1),e(pn,dh),e(dh,j1),e(pn,X1),e(pn,ch),e(ch,P1),e(pn,A1),e(Gt,O1),w(Xs,Gt,null),e(Gt,N1),w(Ps,Gt,null),_(i,Vm,b),_(i,hn,b),e(hn,As),e(As,ph),w(Gi,ph,null),e(hn,I1),e(hn,hh),e(hh,D1),_(i,Km,b),_(i,tt,b),w(Yi,tt,null),e(tt,S1),e(tt,mh),e(mh,W1),e(tt,B1),e(tt,Zi),e(Zi,U1),e(Zi,Pd),e(Pd,Q1),e(Zi,H1),e(tt,V1),e(tt,el),e(el,K1),e(el,tl),e(tl,J1),e(el,G1),e(tt,Y1),e(tt,uh),e(uh,Z1),e(tt,eM),e(tt,mo),e(mo,fh),e(fh,ol),e(ol,tM),e(mo,oM),e(mo,gh),e(gh,nl),e(nl,nM),e(mo,sM),e(mo,_h),e(_h,sl),e(sl,aM),e(mo,rM),e(mo,bh),e(bh,al),e(al,iM),e(tt,lM),e(tt,rl),e(rl,dM),e(rl,Ad),e(Ad,cM),e(rl,pM),e(tt,hM),e(tt,Yt),w(il,Yt,null),e(Yt,mM),e(Yt,mn),e(mn,uM),e(mn,kh),e(kh,fM),e(mn,gM),e(mn,vh),e(vh,_M),e(mn,bM),e(Yt,kM),w(Os,Yt,null),e(Yt,vM),w(Ns,Yt,null),_(i,Jm,b),_(i,un,b),e(un,Is),e(Is,yh),w(ll,yh,null),e(un,yM),e(un,Th),e(Th,TM),_(i,Gm,b),_(i,ot,b),w(dl,ot,null),e(ot,wM),e(ot,fn),e(fn,$M),e(fn,wh),e(wh,MM),e(fn,FM),e(fn,$h),e($h,xM),e(fn,RM),e(ot,LM),e(ot,cl),e(cl,EM),e(cl,Od),e(Od,zM),e(cl,qM),e(ot,CM),e(ot,pl),e(pl,jM),e(pl,hl),e(hl,XM),e(pl,PM),e(ot,AM),e(ot,Mh),e(Mh,OM),e(ot,NM),e(ot,uo),e(uo,Fh),e(Fh,ml),e(ml,IM),e(uo,DM),e(uo,xh),e(xh,ul),e(ul,SM),e(uo,WM),e(uo,Rh),e(Rh,fl),e(fl,BM),e(uo,UM),e(uo,Lh),e(Lh,gl),e(gl,QM),e(ot,HM),e(ot,_l),e(_l,VM),e(_l,Nd),e(Nd,KM),e(_l,JM),e(ot,GM),e(ot,Zt),w(bl,Zt,null),e(Zt,YM),e(Zt,gn),e(gn,ZM),e(gn,Eh),e(Eh,e2),e(gn,t2),e(gn,zh),e(zh,o2),e(gn,n2),e(Zt,s2),w(Ds,Zt,null),e(Zt,a2),w(Ss,Zt,null),Ym=!0},p(i,[b]){const kl={};b&2&&(kl.$$scope={dirty:b,ctx:i}),Mn.$set(kl);const qh={};b&2&&(qh.$$scope={dirty:b,ctx:i}),Fn.$set(qh);const Ch={};b&2&&(Ch.$$scope={dirty:b,ctx:i}),Rn.$set(Ch);const jh={};b&2&&(jh.$$scope={dirty:b,ctx:i}),Ln.$set(jh);const vl={};b&2&&(vl.$$scope={dirty:b,ctx:i}),zn.$set(vl);const Xh={};b&2&&(Xh.$$scope={dirty:b,ctx:i}),qn.$set(Xh);const Ph={};b&2&&(Ph.$$scope={dirty:b,ctx:i}),Cn.$set(Ph);const Ah={};b&2&&(Ah.$$scope={dirty:b,ctx:i}),Xn.$set(Ah);const yl={};b&2&&(yl.$$scope={dirty:b,ctx:i}),Pn.$set(yl);const Oh={};b&2&&(Oh.$$scope={dirty:b,ctx:i}),An.$set(Oh);const Nh={};b&2&&(Nh.$$scope={dirty:b,ctx:i}),On.$set(Nh);const Ih={};b&2&&(Ih.$$scope={dirty:b,ctx:i}),Nn.$set(Ih);const Dh={};b&2&&(Dh.$$scope={dirty:b,ctx:i}),Dn.$set(Dh);const Sh={};b&2&&(Sh.$$scope={dirty:b,ctx:i}),Sn.$set(Sh);const Tl={};b&2&&(Tl.$$scope={dirty:b,ctx:i}),Bn.$set(Tl);const wl={};b&2&&(wl.$$scope={dirty:b,ctx:i}),Un.$set(wl);const Wh={};b&2&&(Wh.$$scope={dirty:b,ctx:i}),Qn.$set(Wh);const $l={};b&2&&($l.$$scope={dirty:b,ctx:i}),Vn.$set($l);const Bh={};b&2&&(Bh.$$scope={dirty:b,ctx:i}),Kn.$set(Bh);const _n={};b&2&&(_n.$$scope={dirty:b,ctx:i}),Jn.$set(_n);const Uh={};b&2&&(Uh.$$scope={dirty:b,ctx:i}),Yn.$set(Uh);const Qh={};b&2&&(Qh.$$scope={dirty:b,ctx:i}),Zn.$set(Qh);const Ml={};b&2&&(Ml.$$scope={dirty:b,ctx:i}),es.$set(Ml);const Hh={};b&2&&(Hh.$$scope={dirty:b,ctx:i}),os.$set(Hh);const Vh={};b&2&&(Vh.$$scope={dirty:b,ctx:i}),ns.$set(Vh);const Kh={};b&2&&(Kh.$$scope={dirty:b,ctx:i}),ss.$set(Kh);const Fl={};b&2&&(Fl.$$scope={dirty:b,ctx:i}),as.$set(Fl);const bn={};b&2&&(bn.$$scope={dirty:b,ctx:i}),is.$set(bn);const Jh={};b&2&&(Jh.$$scope={dirty:b,ctx:i}),ls.$set(Jh);const Gh={};b&2&&(Gh.$$scope={dirty:b,ctx:i}),ds.$set(Gh);const xl={};b&2&&(xl.$$scope={dirty:b,ctx:i}),cs.$set(xl);const Yh={};b&2&&(Yh.$$scope={dirty:b,ctx:i}),hs.$set(Yh);const Zh={};b&2&&(Zh.$$scope={dirty:b,ctx:i}),ms.$set(Zh);const em={};b&2&&(em.$$scope={dirty:b,ctx:i}),us.$set(em);const vt={};b&2&&(vt.$$scope={dirty:b,ctx:i}),gs.$set(vt);const fo={};b&2&&(fo.$$scope={dirty:b,ctx:i}),_s.$set(fo);const tm={};b&2&&(tm.$$scope={dirty:b,ctx:i}),bs.$set(tm);const om={};b&2&&(om.$$scope={dirty:b,ctx:i}),ks.$set(om);const nm={};b&2&&(nm.$$scope={dirty:b,ctx:i}),ys.$set(nm);const Rl={};b&2&&(Rl.$$scope={dirty:b,ctx:i}),Ts.$set(Rl);const sm={};b&2&&(sm.$$scope={dirty:b,ctx:i}),ws.$set(sm);const kn={};b&2&&(kn.$$scope={dirty:b,ctx:i}),$s.$set(kn);const am={};b&2&&(am.$$scope={dirty:b,ctx:i}),Fs.$set(am);const Ll={};b&2&&(Ll.$$scope={dirty:b,ctx:i}),xs.$set(Ll);const Id={};b&2&&(Id.$$scope={dirty:b,ctx:i}),Ls.$set(Id);const rm={};b&2&&(rm.$$scope={dirty:b,ctx:i}),Es.$set(rm);const Dd={};b&2&&(Dd.$$scope={dirty:b,ctx:i}),qs.$set(Dd);const im={};b&2&&(im.$$scope={dirty:b,ctx:i}),Cs.$set(im);const El={};b&2&&(El.$$scope={dirty:b,ctx:i}),Xs.$set(El);const zl={};b&2&&(zl.$$scope={dirty:b,ctx:i}),Ps.$set(zl);const lm={};b&2&&(lm.$$scope={dirty:b,ctx:i}),Os.$set(lm);const ql={};b&2&&(ql.$$scope={dirty:b,ctx:i}),Ns.$set(ql);const dm={};b&2&&(dm.$$scope={dirty:b,ctx:i}),Ds.$set(dm);const cm={};b&2&&(cm.$$scope={dirty:b,ctx:i}),Ss.$set(cm)},i(i){Ym||($(l.$$.fragment,i),$(R.$$.fragment,i),$(E.$$.fragment,i),$(Ne.$$.fragment,i),$(ee.$$.fragment,i),$(ra.$$.fragment,i),$(da.$$.fragment,i),$(pa.$$.fragment,i),$(ma.$$.fragment,i),$(ua.$$.fragment,i),$(fa.$$.fragment,i),$(ga.$$.fragment,i),$(ka.$$.fragment,i),$(ya.$$.fragment,i),$(Ta.$$.fragment,i),$(wa.$$.fragment,i),$(Ra.$$.fragment,i),$(Mn.$$.fragment,i),$(Fn.$$.fragment,i),$(La.$$.fragment,i),$(Ea.$$.fragment,i),$(Pa.$$.fragment,i),$(Rn.$$.fragment,i),$(Ln.$$.fragment,i),$(Aa.$$.fragment,i),$(Oa.$$.fragment,i),$(Ba.$$.fragment,i),$(zn.$$.fragment,i),$(qn.$$.fragment,i),$(Cn.$$.fragment,i),$(Ua.$$.fragment,i),$(Qa.$$.fragment,i),$(Ga.$$.fragment,i),$(Xn.$$.fragment,i),$(Pn.$$.fragment,i),$(An.$$.fragment,i),$(On.$$.fragment,i),$(Nn.$$.fragment,i),$(Ya.$$.fragment,i),$(Za.$$.fragment,i),$(sr.$$.fragment,i),$(Dn.$$.fragment,i),$(Sn.$$.fragment,i),$(ar.$$.fragment,i),$(rr.$$.fragment,i),$(pr.$$.fragment,i),$(Bn.$$.fragment,i),$(Un.$$.fragment,i),$(Qn.$$.fragment,i),$(hr.$$.fragment,i),$(mr.$$.fragment,i),$(br.$$.fragment,i),$(Vn.$$.fragment,i),$(Kn.$$.fragment,i),$(Jn.$$.fragment,i),$(kr.$$.fragment,i),$(vr.$$.fragment,i),$(Yn.$$.fragment,i),$(Mr.$$.fragment,i),$(Zn.$$.fragment,i),$(es.$$.fragment,i),$(Fr.$$.fragment,i),$(xr.$$.fragment,i),$(os.$$.fragment,i),$(Cr.$$.fragment,i),$(ns.$$.fragment,i),$(ss.$$.fragment,i),$(as.$$.fragment,i),$(jr.$$.fragment,i),$(Xr.$$.fragment,i),$(is.$$.fragment,i),$(Ir.$$.fragment,i),$(ls.$$.fragment,i),$(ds.$$.fragment,i),$(cs.$$.fragment,i),$(Dr.$$.fragment,i),$(Sr.$$.fragment,i),$(hs.$$.fragment,i),$(Hr.$$.fragment,i),$(ms.$$.fragment,i),$(us.$$.fragment,i),$(Vr.$$.fragment,i),$(Kr.$$.fragment,i),$(gs.$$.fragment,i),$(ei.$$.fragment,i),$(_s.$$.fragment,i),$(bs.$$.fragment,i),$(ks.$$.fragment,i),$(ti.$$.fragment,i),$(oi.$$.fragment,i),$(ys.$$.fragment,i),$(ii.$$.fragment,i),$(Ts.$$.fragment,i),$(ws.$$.fragment,i),$($s.$$.fragment,i),$(li.$$.fragment,i),$(di.$$.fragment,i),$(bi.$$.fragment,i),$(Fs.$$.fragment,i),$(xs.$$.fragment,i),$(ki.$$.fragment,i),$(vi.$$.fragment,i),$(Ri.$$.fragment,i),$(Ls.$$.fragment,i),$(Es.$$.fragment,i),$(Li.$$.fragment,i),$(Ei.$$.fragment,i),$(Ni.$$.fragment,i),$(qs.$$.fragment,i),$(Cs.$$.fragment,i),$(Ii.$$.fragment,i),$(Di.$$.fragment,i),$(Ji.$$.fragment,i),$(Xs.$$.fragment,i),$(Ps.$$.fragment,i),$(Gi.$$.fragment,i),$(Yi.$$.fragment,i),$(il.$$.fragment,i),$(Os.$$.fragment,i),$(Ns.$$.fragment,i),$(ll.$$.fragment,i),$(dl.$$.fragment,i),$(bl.$$.fragment,i),$(Ds.$$.fragment,i),$(Ss.$$.fragment,i),Ym=!0)},o(i){M(l.$$.fragment,i),M(R.$$.fragment,i),M(E.$$.fragment,i),M(Ne.$$.fragment,i),M(ee.$$.fragment,i),M(ra.$$.fragment,i),M(da.$$.fragment,i),M(pa.$$.fragment,i),M(ma.$$.fragment,i),M(ua.$$.fragment,i),M(fa.$$.fragment,i),M(ga.$$.fragment,i),M(ka.$$.fragment,i),M(ya.$$.fragment,i),M(Ta.$$.fragment,i),M(wa.$$.fragment,i),M(Ra.$$.fragment,i),M(Mn.$$.fragment,i),M(Fn.$$.fragment,i),M(La.$$.fragment,i),M(Ea.$$.fragment,i),M(Pa.$$.fragment,i),M(Rn.$$.fragment,i),M(Ln.$$.fragment,i),M(Aa.$$.fragment,i),M(Oa.$$.fragment,i),M(Ba.$$.fragment,i),M(zn.$$.fragment,i),M(qn.$$.fragment,i),M(Cn.$$.fragment,i),M(Ua.$$.fragment,i),M(Qa.$$.fragment,i),M(Ga.$$.fragment,i),M(Xn.$$.fragment,i),M(Pn.$$.fragment,i),M(An.$$.fragment,i),M(On.$$.fragment,i),M(Nn.$$.fragment,i),M(Ya.$$.fragment,i),M(Za.$$.fragment,i),M(sr.$$.fragment,i),M(Dn.$$.fragment,i),M(Sn.$$.fragment,i),M(ar.$$.fragment,i),M(rr.$$.fragment,i),M(pr.$$.fragment,i),M(Bn.$$.fragment,i),M(Un.$$.fragment,i),M(Qn.$$.fragment,i),M(hr.$$.fragment,i),M(mr.$$.fragment,i),M(br.$$.fragment,i),M(Vn.$$.fragment,i),M(Kn.$$.fragment,i),M(Jn.$$.fragment,i),M(kr.$$.fragment,i),M(vr.$$.fragment,i),M(Yn.$$.fragment,i),M(Mr.$$.fragment,i),M(Zn.$$.fragment,i),M(es.$$.fragment,i),M(Fr.$$.fragment,i),M(xr.$$.fragment,i),M(os.$$.fragment,i),M(Cr.$$.fragment,i),M(ns.$$.fragment,i),M(ss.$$.fragment,i),M(as.$$.fragment,i),M(jr.$$.fragment,i),M(Xr.$$.fragment,i),M(is.$$.fragment,i),M(Ir.$$.fragment,i),M(ls.$$.fragment,i),M(ds.$$.fragment,i),M(cs.$$.fragment,i),M(Dr.$$.fragment,i),M(Sr.$$.fragment,i),M(hs.$$.fragment,i),M(Hr.$$.fragment,i),M(ms.$$.fragment,i),M(us.$$.fragment,i),M(Vr.$$.fragment,i),M(Kr.$$.fragment,i),M(gs.$$.fragment,i),M(ei.$$.fragment,i),M(_s.$$.fragment,i),M(bs.$$.fragment,i),M(ks.$$.fragment,i),M(ti.$$.fragment,i),M(oi.$$.fragment,i),M(ys.$$.fragment,i),M(ii.$$.fragment,i),M(Ts.$$.fragment,i),M(ws.$$.fragment,i),M($s.$$.fragment,i),M(li.$$.fragment,i),M(di.$$.fragment,i),M(bi.$$.fragment,i),M(Fs.$$.fragment,i),M(xs.$$.fragment,i),M(ki.$$.fragment,i),M(vi.$$.fragment,i),M(Ri.$$.fragment,i),M(Ls.$$.fragment,i),M(Es.$$.fragment,i),M(Li.$$.fragment,i),M(Ei.$$.fragment,i),M(Ni.$$.fragment,i),M(qs.$$.fragment,i),M(Cs.$$.fragment,i),M(Ii.$$.fragment,i),M(Di.$$.fragment,i),M(Ji.$$.fragment,i),M(Xs.$$.fragment,i),M(Ps.$$.fragment,i),M(Gi.$$.fragment,i),M(Yi.$$.fragment,i),M(il.$$.fragment,i),M(Os.$$.fragment,i),M(Ns.$$.fragment,i),M(ll.$$.fragment,i),M(dl.$$.fragment,i),M(bl.$$.fragment,i),M(Ds.$$.fragment,i),M(Ss.$$.fragment,i),Ym=!1},d(i){t(d),i&&t(g),i&&t(h),F(l),i&&t(be),i&&t(O),F(R),i&&t(ke),i&&t(D),i&&t(ve),i&&t(W),i&&t(ye),i&&t(B),i&&t(ne),i&&t(q),i&&t(Te),i&&t(S),i&&t(we),i&&t(se),i&&t(P),i&&t(ae),F(E),i&&t(Ue),i&&t(z),F(Ne),i&&t(Qe),i&&t(Oe),F(ee),i&&t(pm),i&&t(nt),F(ra),F(da),F(pa),F(ma),F(ua),i&&t(hm),i&&t(xo),F(fa),i&&t(mm),i&&t(Mt),F(ga),F(ka),F(ya),i&&t(um),i&&t(Ro),F(Ta),i&&t(fm),i&&t(mt),F(wa),F(Ra),F(Mn),F(Fn),i&&t(gm),i&&t(Eo),F(La),i&&t(_m),i&&t(ut),F(Ea),F(Pa),F(Rn),F(Ln),i&&t(bm),i&&t(qo),F(Aa),i&&t(km),i&&t(ft),F(Oa),F(Ba),F(zn),F(qn),F(Cn),i&&t(vm),i&&t(jo),F(Ua),i&&t(ym),i&&t(gt),F(Qa),F(Ga),F(Xn),F(Pn),F(An),F(On),F(Nn),i&&t(Tm),i&&t(Po),F(Ya),i&&t(wm),i&&t(_t),F(Za),F(sr),F(Dn),F(Sn),i&&t($m),i&&t(Oo),F(ar),i&&t(Mm),i&&t(bt),F(rr),F(pr),F(Bn),F(Un),F(Qn),i&&t(Fm),i&&t(Io),F(hr),i&&t(xm),i&&t(kt),F(mr),F(br),F(Vn),F(Kn),F(Jn),i&&t(Rm),i&&t(Wo),F(kr),i&&t(Lm),i&&t(st),F(vr),F(Yn),F(Mr),F(Zn),F(es),i&&t(Em),i&&t(Uo),F(Fr),i&&t(zm),i&&t(at),F(xr),F(os),F(Cr),F(ns),F(ss),F(as),i&&t(qm),i&&t(Ho),F(jr),i&&t(Cm),i&&t(rt),F(Xr),F(is),F(Ir),F(ls),F(ds),F(cs),i&&t(jm),i&&t(Ko),F(Dr),i&&t(Xm),i&&t(it),F(Sr),F(hs),F(Hr),F(ms),F(us),i&&t(Pm),i&&t(Go),F(Vr),i&&t(Am),i&&t(lt),F(Kr),F(gs),F(ei),F(_s),F(bs),F(ks),i&&t(Om),i&&t(Zo),F(ti),i&&t(Nm),i&&t(dt),F(oi),F(ys),F(ii),F(Ts),F(ws),F($s),i&&t(Im),i&&t(on),F(li),i&&t(Dm),i&&t(ct),F(di),F(bi),F(Fs),F(xs),i&&t(Sm),i&&t(sn),F(ki),i&&t(Wm),i&&t(pt),F(vi),F(Ri),F(Ls),F(Es),i&&t(Bm),i&&t(ln),F(Li),i&&t(Um),i&&t(Ze),F(Ei),F(Ni),F(qs),F(Cs),i&&t(Qm),i&&t(cn),F(Ii),i&&t(Hm),i&&t(et),F(Di),F(Ji),F(Xs),F(Ps),i&&t(Vm),i&&t(hn),F(Gi),i&&t(Km),i&&t(tt),F(Yi),F(il),F(Os),F(Ns),i&&t(Jm),i&&t(un),F(ll),i&&t(Gm),i&&t(ot),F(dl),F(bl),F(Ds),F(Ss)}}}const AL={local:"xlmroberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaConfig",title:"XLMRobertaConfig"},{local:"transformers.XLMRobertaTokenizer",title:"XLMRobertaTokenizer"},{local:"transformers.XLMRobertaTokenizerFast",title:"XLMRobertaTokenizerFast"},{local:"transformers.XLMRobertaModel",title:"XLMRobertaModel"},{local:"transformers.XLMRobertaForCausalLM",title:"XLMRobertaForCausalLM"},{local:"transformers.XLMRobertaForMaskedLM",title:"XLMRobertaForMaskedLM"},{local:"transformers.XLMRobertaForSequenceClassification",title:"XLMRobertaForSequenceClassification"},{local:"transformers.XLMRobertaForMultipleChoice",title:"XLMRobertaForMultipleChoice"},{local:"transformers.XLMRobertaForTokenClassification",title:"XLMRobertaForTokenClassification"},{local:"transformers.XLMRobertaForQuestionAnswering",title:"XLMRobertaForQuestionAnswering"},{local:"transformers.TFXLMRobertaModel",title:"TFXLMRobertaModel"},{local:"transformers.TFXLMRobertaForMaskedLM",title:"TFXLMRobertaForMaskedLM"},{local:"transformers.TFXLMRobertaForSequenceClassification",title:"TFXLMRobertaForSequenceClassification"},{local:"transformers.TFXLMRobertaForMultipleChoice",title:"TFXLMRobertaForMultipleChoice"},{local:"transformers.TFXLMRobertaForTokenClassification",title:"TFXLMRobertaForTokenClassification"},{local:"transformers.TFXLMRobertaForQuestionAnswering",title:"TFXLMRobertaForQuestionAnswering"},{local:"transformers.FlaxXLMRobertaModel",title:"FlaxXLMRobertaModel"},{local:"transformers.FlaxXLMRobertaForMaskedLM",title:"FlaxXLMRobertaForMaskedLM"},{local:"transformers.FlaxXLMRobertaForSequenceClassification",title:"FlaxXLMRobertaForSequenceClassification"},{local:"transformers.FlaxXLMRobertaForMultipleChoice",title:"FlaxXLMRobertaForMultipleChoice"},{local:"transformers.FlaxXLMRobertaForTokenClassification",title:"FlaxXLMRobertaForTokenClassification"},{local:"transformers.FlaxXLMRobertaForQuestionAnswering",title:"FlaxXLMRobertaForQuestionAnswering"}],title:"XLM-RoBERTa"};function OL(x){return XR(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class UL extends zR{constructor(d){super();qR(this,d,OL,PL,CR,{})}}export{UL as default,AL as metadata};
