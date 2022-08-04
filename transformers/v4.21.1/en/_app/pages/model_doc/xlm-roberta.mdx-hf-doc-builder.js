import{S as zR,i as qR,s as CR,e as n,k as c,w as T,t as r,M as jR,c as s,d as t,m as p,a,x as y,h as i,b as u,G as e,g as b,y as w,q as $,o as M,B as F,v as XR,L as le}from"../../chunks/vendor-hf-doc-builder.js";import{T as $e}from"../../chunks/Tip-hf-doc-builder.js";import{D as X}from"../../chunks/Docstring-hf-doc-builder.js";import{C as de}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ie}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function PR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function AR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function OR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function NR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForCausalLM, RobertaConfig
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

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function IR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function DR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function SR(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-<mask> tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function WR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function BR(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of single-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of single-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function UR(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = RobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = RobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function QR(x){let d,g,h,m,_;return m=new de({props:{code:`import torch
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example of multi-label classification:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example of multi-label classification:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function HR(x){let d,g;return d=new de({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function VR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function JR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function KR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function GR(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function YR(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function ZR(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function e4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, RobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function t4(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function o4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function n4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function s4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function a4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function r4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function i4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMaskedLM
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
<span class="hljs-string">&#x27; Paris&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function l4(x){let d,g;return d=new de({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.1</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function d4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function c4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function p4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForSequenceClassification
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
<span class="hljs-string">&#x27;optimism&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function h4(x){let d,g;return d=new de({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFRobertaForSequenceClassification.from_pretrained("cardiffnlp/twitter-roberta-base-emotion", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;cardiffnlp/twitter-roberta-base-emotion&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.08</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function m4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function u4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function f4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function g4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function _4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function b4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>, <span class="hljs-string">&#x27;LOC&#x27;</span>]`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function k4(x){let d,g;return d=new de({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function v4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te;return{c(){d=n("p"),g=r("TF 2.0 models accepts two formats as inputs:"),h=c(),m=n("ul"),_=n("li"),l=r("having all inputs as keyword arguments (like PyTorch models), or"),f=c(),R=n("li"),ue=r("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),E=n("p"),Y=r("This second option is useful when using "),D=n("code"),ee=r("tf.keras.Model.fit"),fe=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=n("code"),ge=r("model(inputs)"),ce=r("."),V=c(),P=n("p"),te=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),K=c(),z=n("ul"),C=n("li"),se=r("a single Tensor with "),U=n("code"),pe=r("input_ids"),ae=r(" only and nothing else: "),W=n("code"),_e=r("model(inputs_ids)"),he=c(),q=n("li"),be=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=n("code"),Z=r("model([input_ids, attention_mask])"),oe=r(" or "),Q=n("code"),re=r("model([input_ids, attention_mask, token_type_ids])"),ke=c(),A=n("li"),ve=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=n("code"),Te=r('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(v){d=s(v,"P",{});var L=a(d);g=i(L,"TF 2.0 models accepts two formats as inputs:"),L.forEach(t),h=p(v),m=s(v,"UL",{});var G=a(m);_=s(G,"LI",{});var xe=a(_);l=i(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(t),f=p(G),R=s(G,"LI",{});var me=a(R);ue=i(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(t),G.forEach(t),J=p(v),E=s(v,"P",{});var O=a(E);Y=i(O,"This second option is useful when using "),D=s(O,"CODE",{});var we=a(D);ee=i(we,"tf.keras.Model.fit"),we.forEach(t),fe=i(O,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=s(O,"CODE",{});var Le=a(S);ge=i(Le,"model(inputs)"),Le.forEach(t),ce=i(O,"."),O.forEach(t),V=p(v),P=s(v,"P",{});var Ee=a(P);te=i(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),K=p(v),z=s(v,"UL",{});var j=a(z);C=s(j,"LI",{});var H=a(C);se=i(H,"a single Tensor with "),U=s(H,"CODE",{});var ze=a(U);pe=i(ze,"input_ids"),ze.forEach(t),ae=i(H," only and nothing else: "),W=s(H,"CODE",{});var Re=a(W);_e=i(Re,"model(inputs_ids)"),Re.forEach(t),H.forEach(t),he=p(j),q=s(j,"LI",{});var N=a(q);be=i(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=s(N,"CODE",{});var ye=a(B);Z=i(ye,"model([input_ids, attention_mask])"),ye.forEach(t),oe=i(N," or "),Q=s(N,"CODE",{});var Fe=a(Q);re=i(Fe,"model([input_ids, attention_mask, token_type_ids])"),Fe.forEach(t),N.forEach(t),ke=p(j),A=s(j,"LI",{});var ne=a(A);ve=i(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),I=s(ne,"CODE",{});var qe=a(I);Te=i(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),ne.forEach(t),j.forEach(t)},m(v,L){b(v,d,L),e(d,g),b(v,h,L),b(v,m,L),e(m,_),e(_,l),e(m,f),e(m,R),e(R,ue),b(v,J,L),b(v,E,L),e(E,Y),e(E,D),e(D,ee),e(E,fe),e(E,S),e(S,ge),e(E,ce),b(v,V,L),b(v,P,L),e(P,te),b(v,K,L),b(v,z,L),e(z,C),e(C,se),e(C,U),e(U,pe),e(C,ae),e(C,W),e(W,_e),e(z,he),e(z,q),e(q,be),e(q,B),e(B,Z),e(q,oe),e(q,Q),e(Q,re),e(z,ke),e(z,A),e(A,ve),e(A,I),e(I,Te)},d(v){v&&t(d),v&&t(h),v&&t(m),v&&t(J),v&&t(E),v&&t(V),v&&t(P),v&&t(K),v&&t(z)}}}function T4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function y4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, TFRobertaForQuestionAnswering
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
<span class="hljs-string">&#x27; puppet&#x27;</span>`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function w4(x){let d,g;return d=new de({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">0.86</span>`}}),{c(){T(d.$$.fragment)},l(h){y(d.$$.fragment,h)},m(h,m){w(d,h,m),g=!0},p:le,i(h){g||($(d.$$.fragment,h),g=!0)},o(h){M(d.$$.fragment,h),g=!1},d(h){F(d,h)}}}function $4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function M4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaModel

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaModel.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaModel.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function F4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function x4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMaskedLM

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForMaskedLM.from_pretrained("roberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function R4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function L4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForSequenceClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForSequenceClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function E4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function z4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function q4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function C4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForTokenClassification

tokenizer = RobertaTokenizer.from_pretrained("roberta-base")
model = FlaxRobertaForTokenClassification.from_pretrained("roberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> RobertaTokenizer, FlaxRobertaForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = RobertaTokenizer.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxRobertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;roberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function j4(x){let d,g,h,m,_;return{c(){d=n("p"),g=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=n("code"),m=r("Module"),_=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=s(f,"CODE",{});var R=a(h);m=i(R,"Module"),R.forEach(t),_=i(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(l,f){b(l,d,f),e(d,g),e(d,h),e(h,m),e(d,_)},d(l){l&&t(d)}}}function X4(x){let d,g,h,m,_;return m=new de({props:{code:`from transformers import RobertaTokenizer, FlaxRobertaForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=n("p"),g=r("Example:"),h=c(),T(m.$$.fragment)},l(l){d=s(l,"P",{});var f=a(d);g=i(f,"Example:"),f.forEach(t),h=p(l),y(m.$$.fragment,l)},m(l,f){b(l,d,f),e(d,g),b(l,h,f),w(m,l,f),_=!0},p:le,i(l){_||($(m.$$.fragment,l),_=!0)},o(l){M(m.$$.fragment,l),_=!1},d(l){l&&t(d),l&&t(h),F(m,l)}}}function P4(x){let d,g,h,m,_,l,f,R,ue,J,E,Y,D,ee,fe,S,ge,ce,V,P,te,K,z,C,se,U,pe,ae,W,_e,he,q,be,B,Z,oe,Q,re,ke,A,ve,I,Te,v,L,G,xe,me,O,we,Le,Ee,j,H,ze,Re,N,ye,Fe,ne,qe,ec,vf,tm,ro,Bs,Tf,io,yf,vl,wf,$f,Us,Mf,Ff,om,lo,on,tc,Qs,xf,oc,Rf,nm,Ae,Hs,Lf,Dt,Ef,Tl,zf,qf,yl,Cf,jf,Vs,Xf,Pf,Af,Js,Of,wl,Nf,If,Df,Jt,Ks,Sf,nc,Wf,Bf,Gs,$l,Uf,sc,Qf,Hf,Ml,Vf,ac,Jf,Kf,nn,Ys,Gf,Zs,Yf,rc,Zf,eg,tg,sn,ea,og,ic,ng,sg,Fl,ta,sm,co,an,lc,oa,ag,dc,rg,am,at,na,ig,yt,lg,cc,dg,cg,xl,pg,hg,Rl,mg,ug,sa,fg,gg,_g,aa,bg,Ll,kg,vg,Tg,Kt,ra,yg,pc,wg,$g,ia,El,Mg,hc,Fg,xg,zl,Rg,mc,Lg,Eg,rn,la,zg,uc,qg,rm,po,ln,fc,da,Cg,gc,jg,im,He,ca,Xg,_c,Pg,Ag,pa,Og,ql,Ng,Ig,Dg,ha,Sg,ma,Wg,Bg,Ug,ua,Qg,Cl,Hg,Vg,Jg,wt,fa,Kg,ho,Gg,jl,Yg,Zg,bc,e_,t_,o_,dn,n_,cn,lm,mo,pn,kc,ga,s_,vc,a_,dm,Ve,_a,r_,ba,i_,Tc,l_,d_,c_,ka,p_,Xl,h_,m_,u_,va,f_,Ta,g_,__,b_,ya,k_,Pl,v_,T_,y_,$t,wa,w_,uo,$_,Al,M_,F_,yc,x_,R_,L_,hn,E_,mn,cm,fo,un,wc,$a,z_,$c,q_,pm,Je,Ma,C_,Fa,j_,Mc,X_,P_,A_,xa,O_,Ol,N_,I_,D_,Ra,S_,La,W_,B_,U_,Ea,Q_,Nl,H_,V_,J_,rt,za,K_,go,G_,Il,Y_,Z_,Fc,eb,tb,ob,fn,nb,gn,sb,_n,hm,_o,bn,xc,qa,ab,Rc,rb,mm,Ke,Ca,ib,Lc,lb,db,ja,cb,Dl,pb,hb,mb,Xa,ub,Pa,fb,gb,_b,Aa,bb,Sl,kb,vb,Tb,Qe,Oa,yb,bo,wb,Wl,$b,Mb,Ec,Fb,xb,Rb,kn,Lb,vn,Eb,Tn,zb,yn,qb,wn,um,ko,$n,zc,Na,Cb,qc,jb,fm,Ge,Ia,Xb,Cc,Pb,Ab,Da,Ob,Bl,Nb,Ib,Db,Sa,Sb,Wa,Wb,Bb,Ub,Ba,Qb,Ul,Hb,Vb,Jb,Mt,Ua,Kb,vo,Gb,Ql,Yb,Zb,jc,ek,tk,ok,Mn,nk,Fn,gm,To,xn,Xc,Qa,sk,Pc,ak,_m,Ye,Ha,rk,Ac,ik,lk,Va,dk,Hl,ck,pk,hk,Ja,mk,Ka,uk,fk,gk,Ga,_k,Vl,bk,kk,vk,it,Ya,Tk,yo,yk,Jl,wk,$k,Oc,Mk,Fk,xk,Rn,Rk,Ln,Lk,En,bm,wo,zn,Nc,Za,Ek,Ic,zk,km,Ze,er,qk,$o,Ck,Dc,jk,Xk,Sc,Pk,Ak,Ok,tr,Nk,Kl,Ik,Dk,Sk,or,Wk,nr,Bk,Uk,Qk,sr,Hk,Gl,Vk,Jk,Kk,lt,ar,Gk,Mo,Yk,Yl,Zk,ev,Wc,tv,ov,nv,qn,sv,Cn,av,jn,vm,Fo,Xn,Bc,rr,rv,Uc,iv,Tm,Oe,ir,lv,Qc,dv,cv,lr,pv,Zl,hv,mv,uv,dr,fv,cr,gv,_v,bv,Pn,kv,pr,vv,ed,Tv,yv,wv,Ft,hr,$v,xo,Mv,td,Fv,xv,Hc,Rv,Lv,Ev,An,zv,On,ym,Ro,Nn,Vc,mr,qv,Jc,Cv,wm,Ne,ur,jv,fr,Xv,Kc,Pv,Av,Ov,gr,Nv,od,Iv,Dv,Sv,_r,Wv,br,Bv,Uv,Qv,In,Hv,kr,Vv,nd,Jv,Kv,Gv,dt,vr,Yv,Lo,Zv,sd,e1,t1,Gc,o1,n1,s1,Dn,a1,Sn,r1,Wn,$m,Eo,Bn,Yc,Tr,i1,Zc,l1,Mm,Ie,yr,d1,ep,c1,p1,wr,h1,ad,m1,u1,f1,$r,g1,Mr,_1,b1,k1,Un,v1,Fr,T1,rd,y1,w1,$1,ct,xr,M1,zo,F1,id,x1,R1,tp,L1,E1,z1,Qn,q1,Hn,C1,Vn,Fm,qo,Jn,op,Rr,j1,np,X1,xm,De,Lr,P1,sp,A1,O1,Er,N1,ld,I1,D1,S1,zr,W1,qr,B1,U1,Q1,Kn,H1,Cr,V1,dd,J1,K1,G1,xt,jr,Y1,Co,Z1,cd,eT,tT,ap,oT,nT,sT,Gn,aT,Yn,Rm,jo,Zn,rp,Xr,rT,ip,iT,Lm,Se,Pr,lT,lp,dT,cT,Ar,pT,pd,hT,mT,uT,Or,fT,Nr,gT,_T,bT,es,kT,Ir,vT,hd,TT,yT,wT,pt,Dr,$T,Xo,MT,md,FT,xT,dp,RT,LT,ET,ts,zT,os,qT,ns,Em,Po,ss,cp,Sr,CT,pp,jT,zm,We,Wr,XT,Ao,PT,hp,AT,OT,mp,NT,IT,DT,Br,ST,ud,WT,BT,UT,Ur,QT,Qr,HT,VT,JT,as,KT,Hr,GT,up,YT,ZT,ey,ht,Vr,ty,Oo,oy,fd,ny,sy,fp,ay,ry,iy,rs,ly,is,dy,ls,qm,No,ds,gp,Jr,cy,_p,py,Cm,Be,Kr,hy,Gr,my,gd,uy,fy,gy,Yr,_y,Zr,by,ky,vy,bp,Ty,yy,St,kp,ei,wy,$y,vp,ti,My,Fy,Tp,oi,xy,Ry,yp,ni,Ly,Ey,si,zy,_d,qy,Cy,jy,Rt,ai,Xy,Io,Py,wp,Ay,Oy,$p,Ny,Iy,Dy,cs,Sy,ps,jm,Do,hs,Mp,ri,Wy,Fp,By,Xm,Ue,ii,Uy,So,Qy,xp,Hy,Vy,bd,Jy,Ky,Gy,li,Yy,di,Zy,ew,tw,Rp,ow,nw,Wt,Lp,ci,sw,aw,Ep,pi,rw,iw,zp,hi,lw,dw,qp,mi,cw,pw,ui,hw,kd,mw,uw,fw,Lt,fi,gw,Wo,_w,Cp,bw,kw,jp,vw,Tw,yw,ms,ww,us,Pm,Bo,fs,Xp,gi,$w,Pp,Mw,Am,Ce,_i,Fw,Ap,xw,Rw,bi,Lw,vd,Ew,zw,qw,ki,Cw,vi,jw,Xw,Pw,Op,Aw,Ow,Bt,Np,Ti,Nw,Iw,Ip,yi,Dw,Sw,Dp,wi,Ww,Bw,Sp,$i,Uw,Qw,Mi,Hw,Td,Vw,Jw,Kw,Et,Fi,Gw,Uo,Yw,Wp,Zw,e$,Bp,t$,o$,n$,gs,s$,_s,Om,Qo,bs,Up,xi,a$,Qp,r$,Nm,je,Ri,i$,Hp,l$,d$,Li,c$,yd,p$,h$,m$,Ei,u$,zi,f$,g$,_$,Vp,b$,k$,Ut,Jp,qi,v$,T$,Kp,Ci,y$,w$,Gp,ji,$$,M$,Yp,Xi,F$,x$,Pi,R$,wd,L$,E$,z$,zt,Ai,q$,Ho,C$,Zp,j$,X$,eh,P$,A$,O$,ks,N$,vs,Im,Vo,Ts,th,Oi,I$,oh,D$,Dm,Xe,Ni,S$,nh,W$,B$,Ii,U$,$d,Q$,H$,V$,Di,J$,Si,K$,G$,Y$,sh,Z$,e2,Qt,ah,Wi,t2,o2,rh,Bi,n2,s2,ih,Ui,a2,r2,lh,Qi,i2,l2,Hi,d2,Md,c2,p2,h2,qt,Vi,m2,Jo,u2,dh,f2,g2,ch,_2,b2,k2,ys,v2,ws,Sm,Ko,$s,ph,Ji,T2,hh,y2,Wm,Pe,Ki,w2,Go,$2,mh,M2,F2,uh,x2,R2,L2,Gi,E2,Fd,z2,q2,C2,Yi,j2,Zi,X2,P2,A2,fh,O2,N2,Ht,gh,el,I2,D2,_h,tl,S2,W2,bh,ol,B2,U2,kh,nl,Q2,H2,sl,V2,xd,J2,K2,G2,Ct,al,Y2,Yo,Z2,vh,eM,tM,Th,oM,nM,sM,Ms,aM,Fs,Bm;return l=new Me({}),ee=new Me({}),ne=new Me({}),Bs=new X({props:{name:"class transformers.XLMRobertaConfig",anchor:"transformers.XLMRobertaConfig",parameters:[{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/configuration_xlm_roberta.py#L45"}}),Qs=new Me({}),Hs=new X({props:{name:"class transformers.XLMRobertaTokenizer",anchor:"transformers.XLMRobertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The <em>SentencePiece</em> processor that is used for every conversion (string, tokens and IDs).`,name:"sp_model"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L63"}}),Ks=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L202",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ys=new X({props:{name:"get_special_tokens_mask",anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.XLMRobertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L228",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ea=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L256",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ta=new X({props:{name:"save_vocabulary",anchor:"transformers.XLMRobertaTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta.py#L313"}}),oa=new Me({}),na=new X({props:{name:"class transformers.XLMRobertaTokenizerFast",anchor:"transformers.XLMRobertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Additional special tokens used by the tokenizer.`,name:"additional_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L82"}}),ra=new X({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L171",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),la=new X({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.XLMRobertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/tokenization_xlm_roberta_fast.py#L197",returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),da=new Me({}),ca=new X({props:{name:"class transformers.XLMRobertaModel",anchor:"transformers.XLMRobertaModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L65"}}),fa=new X({props:{name:"forward",anchor:"transformers.XLMRobertaModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L738",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new $e({props:{$$slots:{default:[PR]},$$scope:{ctx:x}}}),cn=new ie({props:{anchor:"transformers.XLMRobertaModel.forward.example",$$slots:{default:[AR]},$$scope:{ctx:x}}}),ga=new Me({}),_a=new X({props:{name:"class transformers.XLMRobertaForCausalLM",anchor:"transformers.XLMRobertaForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L78"}}),wa=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForCausalLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"past_key_values",val:": typing.Tuple[typing.Tuple[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForCausalLM.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),hn=new $e({props:{$$slots:{default:[OR]},$$scope:{ctx:x}}}),mn=new ie({props:{anchor:"transformers.XLMRobertaForCausalLM.forward.example",$$slots:{default:[NR]},$$scope:{ctx:x}}}),$a=new Me({}),Ma=new X({props:{name:"class transformers.XLMRobertaForMaskedLM",anchor:"transformers.XLMRobertaForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L91"}}),za=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.FloatTensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.XLMRobertaForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L1060",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fn=new $e({props:{$$slots:{default:[IR]},$$scope:{ctx:x}}}),gn=new ie({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example",$$slots:{default:[DR]},$$scope:{ctx:x}}}),_n=new ie({props:{anchor:"transformers.XLMRobertaForMaskedLM.forward.example-2",$$slots:{default:[SR]},$$scope:{ctx:x}}}),qa=new Me({}),Ca=new X({props:{name:"class transformers.XLMRobertaForSequenceClassification",anchor:"transformers.XLMRobertaForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L107"}}),Oa=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),kn=new $e({props:{$$slots:{default:[WR]},$$scope:{ctx:x}}}),vn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example",$$slots:{default:[BR]},$$scope:{ctx:x}}}),Tn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-2",$$slots:{default:[UR]},$$scope:{ctx:x}}}),yn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-3",$$slots:{default:[QR]},$$scope:{ctx:x}}}),wn=new ie({props:{anchor:"transformers.XLMRobertaForSequenceClassification.forward.example-4",$$slots:{default:[HR]},$$scope:{ctx:x}}}),Na=new Me({}),Ia=new X({props:{name:"class transformers.XLMRobertaForMultipleChoice",anchor:"transformers.XLMRobertaForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L123"}}),Ua=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L1275",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Mn=new $e({props:{$$slots:{default:[VR]},$$scope:{ctx:x}}}),Fn=new ie({props:{anchor:"transformers.XLMRobertaForMultipleChoice.forward.example",$$slots:{default:[JR]},$$scope:{ctx:x}}}),Qa=new Me({}),Ha=new X({props:{name:"class transformers.XLMRobertaForTokenClassification",anchor:"transformers.XLMRobertaForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L139"}}),Ya=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"labels",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L1373",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rn=new $e({props:{$$slots:{default:[KR]},$$scope:{ctx:x}}}),Ln=new ie({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example",$$slots:{default:[GR]},$$scope:{ctx:x}}}),En=new ie({props:{anchor:"transformers.XLMRobertaForTokenClassification.forward.example-2",$$slots:{default:[YR]},$$scope:{ctx:x}}}),Za=new Me({}),er=new X({props:{name:"class transformers.XLMRobertaForQuestionAnswering",anchor:"transformers.XLMRobertaForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_xlm_roberta.py#L155"}}),ar=new X({props:{name:"forward",anchor:"transformers.XLMRobertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"position_ids",val:": typing.Optional[torch.LongTensor] = None"},{name:"head_mask",val:": typing.Optional[torch.FloatTensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"end_positions",val:": typing.Optional[torch.LongTensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_roberta.py#L1478",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qn=new $e({props:{$$slots:{default:[ZR]},$$scope:{ctx:x}}}),Cn=new ie({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example",$$slots:{default:[e4]},$$scope:{ctx:x}}}),jn=new ie({props:{anchor:"transformers.XLMRobertaForQuestionAnswering.forward.example-2",$$slots:{default:[t4]},$$scope:{ctx:x}}}),rr=new Me({}),ir=new X({props:{name:"class transformers.TFXLMRobertaModel",anchor:"transformers.TFXLMRobertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L80"}}),Pn=new $e({props:{$$slots:{default:[o4]},$$scope:{ctx:x}}}),hr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L914",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),An=new $e({props:{$$slots:{default:[n4]},$$scope:{ctx:x}}}),On=new ie({props:{anchor:"transformers.TFXLMRobertaModel.call.example",$$slots:{default:[s4]},$$scope:{ctx:x}}}),mr=new Me({}),ur=new X({props:{name:"class transformers.TFXLMRobertaForMaskedLM",anchor:"transformers.TFXLMRobertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L106"}}),In=new $e({props:{$$slots:{default:[a4]},$$scope:{ctx:x}}}),vr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L1070",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new $e({props:{$$slots:{default:[r4]},$$scope:{ctx:x}}}),Sn=new ie({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example",$$slots:{default:[i4]},$$scope:{ctx:x}}}),Wn=new ie({props:{anchor:"transformers.TFXLMRobertaForMaskedLM.call.example-2",$$slots:{default:[l4]},$$scope:{ctx:x}}}),Tr=new Me({}),yr=new X({props:{name:"class transformers.TFXLMRobertaForSequenceClassification",anchor:"transformers.TFXLMRobertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L122"}}),Un=new $e({props:{$$slots:{default:[d4]},$$scope:{ctx:x}}}),xr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L1329",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Qn=new $e({props:{$$slots:{default:[c4]},$$scope:{ctx:x}}}),Hn=new ie({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example",$$slots:{default:[p4]},$$scope:{ctx:x}}}),Vn=new ie({props:{anchor:"transformers.TFXLMRobertaForSequenceClassification.call.example-2",$$slots:{default:[h4]},$$scope:{ctx:x}}}),Rr=new Me({}),Lr=new X({props:{name:"class transformers.TFXLMRobertaForMultipleChoice",anchor:"transformers.TFXLMRobertaForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L170"}}),Kn=new $e({props:{$$slots:{default:[m4]},$$scope:{ctx:x}}}),jr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L1426",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gn=new $e({props:{$$slots:{default:[u4]},$$scope:{ctx:x}}}),Yn=new ie({props:{anchor:"transformers.TFXLMRobertaForMultipleChoice.call.example",$$slots:{default:[f4]},$$scope:{ctx:x}}}),Xr=new Me({}),Pr=new X({props:{name:"class transformers.TFXLMRobertaForTokenClassification",anchor:"transformers.TFXLMRobertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L138"}}),es=new $e({props:{$$slots:{default:[g4]},$$scope:{ctx:x}}}),Dr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L1541",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ts=new $e({props:{$$slots:{default:[_4]},$$scope:{ctx:x}}}),os=new ie({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example",$$slots:{default:[b4]},$$scope:{ctx:x}}}),ns=new ie({props:{anchor:"transformers.TFXLMRobertaForTokenClassification.call.example-2",$$slots:{default:[k4]},$$scope:{ctx:x}}}),Sr=new Me({}),Wr=new X({props:{name:"class transformers.TFXLMRobertaForQuestionAnswering",anchor:"transformers.TFXLMRobertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_tf_xlm_roberta.py#L154"}}),as=new $e({props:{$$slots:{default:[v4]},$$scope:{ctx:x}}}),Vr=new X({props:{name:"call",anchor:"transformers.TFXLMRobertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer">RobertaTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_tf_roberta.py#L1627",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),rs=new $e({props:{$$slots:{default:[T4]},$$scope:{ctx:x}}}),is=new ie({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example",$$slots:{default:[y4]},$$scope:{ctx:x}}}),ls=new ie({props:{anchor:"transformers.TFXLMRobertaForQuestionAnswering.call.example-2",$$slots:{default:[w4]},$$scope:{ctx:x}}}),Jr=new Me({}),Kr=new X({props:{name:"class transformers.FlaxXLMRobertaModel",anchor:"transformers.FlaxXLMRobertaModel",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L68"}}),ai=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),cs=new $e({props:{$$slots:{default:[$4]},$$scope:{ctx:x}}}),ps=new ie({props:{anchor:"transformers.FlaxXLMRobertaModel.__call__.example",$$slots:{default:[M4]},$$scope:{ctx:x}}}),ri=new Me({}),ii=new X({props:{name:"class transformers.FlaxXLMRobertaForMaskedLM",anchor:"transformers.FlaxXLMRobertaForMaskedLM",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L81"}}),fi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ms=new $e({props:{$$slots:{default:[F4]},$$scope:{ctx:x}}}),us=new ie({props:{anchor:"transformers.FlaxXLMRobertaForMaskedLM.__call__.example",$$slots:{default:[x4]},$$scope:{ctx:x}}}),gi=new Me({}),_i=new X({props:{name:"class transformers.FlaxXLMRobertaForSequenceClassification",anchor:"transformers.FlaxXLMRobertaForSequenceClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L97"}}),Fi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),gs=new $e({props:{$$slots:{default:[R4]},$$scope:{ctx:x}}}),_s=new ie({props:{anchor:"transformers.FlaxXLMRobertaForSequenceClassification.__call__.example",$$slots:{default:[L4]},$$scope:{ctx:x}}}),xi=new Me({}),Ri=new X({props:{name:"class transformers.FlaxXLMRobertaForMultipleChoice",anchor:"transformers.FlaxXLMRobertaForMultipleChoice",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L113"}}),Ai=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ks=new $e({props:{$$slots:{default:[E4]},$$scope:{ctx:x}}}),vs=new ie({props:{anchor:"transformers.FlaxXLMRobertaForMultipleChoice.__call__.example",$$slots:{default:[z4]},$$scope:{ctx:x}}}),Oi=new Me({}),Ni=new X({props:{name:"class transformers.FlaxXLMRobertaForTokenClassification",anchor:"transformers.FlaxXLMRobertaForTokenClassification",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L129"}}),Vi=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ys=new $e({props:{$$slots:{default:[q4]},$$scope:{ctx:x}}}),ws=new ie({props:{anchor:"transformers.FlaxXLMRobertaForTokenClassification.__call__.example",$$slots:{default:[C4]},$$scope:{ctx:x}}}),Ji=new Me({}),Ki=new X({props:{name:"class transformers.FlaxXLMRobertaForQuestionAnswering",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering",parameters:[{name:"config",val:": RobertaConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.21.1/en/model_doc/xlm-roberta#transformers.XLMRobertaConfig">XLMRobertaConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/xlm_roberta/modeling_flax_xlm_roberta.py#L145"}}),al=new X({props:{name:"__call__",anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.21.1/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.21.1/src/transformers/models/roberta/modeling_flax_roberta.py#L815",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"
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
  href="/docs/transformers/v4.21.1/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ms=new $e({props:{$$slots:{default:[j4]},$$scope:{ctx:x}}}),Fs=new ie({props:{anchor:"transformers.FlaxXLMRobertaForQuestionAnswering.__call__.example",$$slots:{default:[X4]},$$scope:{ctx:x}}}),{c(){d=n("meta"),g=c(),h=n("h1"),m=n("a"),_=n("span"),T(l.$$.fragment),f=c(),R=n("span"),ue=r("XLM-RoBERTa"),J=c(),E=n("h2"),Y=n("a"),D=n("span"),T(ee.$$.fragment),fe=c(),S=n("span"),ge=r("Overview"),ce=c(),V=n("p"),P=r("The XLM-RoBERTa model was proposed in "),te=n("a"),K=r("Unsupervised Cross-lingual Representation Learning at Scale"),z=r(` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
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
as well as the information relative to the inputs and outputs.`),xe=c(),me=n("p"),O=r("This model was contributed by "),we=n("a"),Le=r("stefan-it"),Ee=r(". The original code can be found "),j=n("a"),H=r("here"),ze=r("."),Re=c(),N=n("h2"),ye=n("a"),Fe=n("span"),T(ne.$$.fragment),qe=c(),ec=n("span"),vf=r("XLMRobertaConfig"),tm=c(),ro=n("div"),T(Bs.$$.fragment),Tf=c(),io=n("p"),yf=r("This class overrides "),vl=n("a"),wf=r("RobertaConfig"),$f=r(`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLMRoBERTa `),Us=n("a"),Mf=r("xlm-roberta-base"),Ff=r(" architecture."),om=c(),lo=n("h2"),on=n("a"),tc=n("span"),T(Qs.$$.fragment),xf=c(),oc=n("span"),Rf=r("XLMRobertaTokenizer"),nm=c(),Ae=n("div"),T(Hs.$$.fragment),Lf=c(),Dt=n("p"),Ef=r("Adapted from "),Tl=n("a"),zf=r("RobertaTokenizer"),qf=r(" and "),yl=n("a"),Cf=r("XLNetTokenizer"),jf=r(`. Based on
`),Vs=n("a"),Xf=r("SentencePiece"),Pf=r("."),Af=c(),Js=n("p"),Of=r("This tokenizer inherits from "),wl=n("a"),Nf=r("PreTrainedTokenizer"),If=r(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Df=c(),Jt=n("div"),T(Ks.$$.fragment),Sf=c(),nc=n("p"),Wf=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Bf=c(),Gs=n("ul"),$l=n("li"),Uf=r("single sequence: "),sc=n("code"),Qf=r("<s> X </s>"),Hf=c(),Ml=n("li"),Vf=r("pair of sequences: "),ac=n("code"),Jf=r("<s> A </s></s> B </s>"),Kf=c(),nn=n("div"),T(Ys.$$.fragment),Gf=c(),Zs=n("p"),Yf=r(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rc=n("code"),Zf=r("prepare_for_model"),eg=r(" method."),tg=c(),sn=n("div"),T(ea.$$.fragment),og=c(),ic=n("p"),ng=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),sg=c(),Fl=n("div"),T(ta.$$.fragment),sm=c(),co=n("h2"),an=n("a"),lc=n("span"),T(oa.$$.fragment),ag=c(),dc=n("span"),rg=r("XLMRobertaTokenizerFast"),am=c(),at=n("div"),T(na.$$.fragment),ig=c(),yt=n("p"),lg=r("Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),cc=n("em"),dg=r("tokenizers"),cg=r(` library). Adapted from
`),xl=n("a"),pg=r("RobertaTokenizer"),hg=r(" and "),Rl=n("a"),mg=r("XLNetTokenizer"),ug=r(`. Based on
`),sa=n("a"),fg=r("BPE"),gg=r("."),_g=c(),aa=n("p"),bg=r("This tokenizer inherits from "),Ll=n("a"),kg=r("PreTrainedTokenizerFast"),vg=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Tg=c(),Kt=n("div"),T(ra.$$.fragment),yg=c(),pc=n("p"),wg=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),$g=c(),ia=n("ul"),El=n("li"),Mg=r("single sequence: "),hc=n("code"),Fg=r("<s> X </s>"),xg=c(),zl=n("li"),Rg=r("pair of sequences: "),mc=n("code"),Lg=r("<s> A </s></s> B </s>"),Eg=c(),rn=n("div"),T(la.$$.fragment),zg=c(),uc=n("p"),qg=r(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),rm=c(),po=n("h2"),ln=n("a"),fc=n("span"),T(da.$$.fragment),Cg=c(),gc=n("span"),jg=r("XLMRobertaModel"),im=c(),He=n("div"),T(ca.$$.fragment),Xg=c(),_c=n("p"),Pg=r("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),Ag=c(),pa=n("p"),Og=r("This model inherits from "),ql=n("a"),Ng=r("PreTrainedModel"),Ig=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dg=c(),ha=n("p"),Sg=r("This model is also a PyTorch "),ma=n("a"),Wg=r("torch.nn.Module"),Bg=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ug=c(),ua=n("p"),Qg=r("This class overrides "),Cl=n("a"),Hg=r("RobertaModel"),Vg=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Jg=c(),wt=n("div"),T(fa.$$.fragment),Kg=c(),ho=n("p"),Gg=r("The "),jl=n("a"),Yg=r("RobertaModel"),Zg=r(" forward method, overrides the "),bc=n("code"),e_=r("__call__"),t_=r(" special method."),o_=c(),T(dn.$$.fragment),n_=c(),T(cn.$$.fragment),lm=c(),mo=n("h2"),pn=n("a"),kc=n("span"),T(ga.$$.fragment),s_=c(),vc=n("span"),a_=r("XLMRobertaForCausalLM"),dm=c(),Ve=n("div"),T(_a.$$.fragment),r_=c(),ba=n("p"),i_=r("XLM-RoBERTa Model with a "),Tc=n("code"),l_=r("language modeling"),d_=r(" head on top for CLM fine-tuning."),c_=c(),ka=n("p"),p_=r("This model inherits from "),Xl=n("a"),h_=r("PreTrainedModel"),m_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),u_=c(),va=n("p"),f_=r("This model is also a PyTorch "),Ta=n("a"),g_=r("torch.nn.Module"),__=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),b_=c(),ya=n("p"),k_=r("This class overrides "),Pl=n("a"),v_=r("RobertaForCausalLM"),T_=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),y_=c(),$t=n("div"),T(wa.$$.fragment),w_=c(),uo=n("p"),$_=r("The "),Al=n("a"),M_=r("RobertaForCausalLM"),F_=r(" forward method, overrides the "),yc=n("code"),x_=r("__call__"),R_=r(" special method."),L_=c(),T(hn.$$.fragment),E_=c(),T(mn.$$.fragment),cm=c(),fo=n("h2"),un=n("a"),wc=n("span"),T($a.$$.fragment),z_=c(),$c=n("span"),q_=r("XLMRobertaForMaskedLM"),pm=c(),Je=n("div"),T(Ma.$$.fragment),C_=c(),Fa=n("p"),j_=r("XLM-RoBERTa Model with a "),Mc=n("code"),X_=r("language modeling"),P_=r(" head on top."),A_=c(),xa=n("p"),O_=r("This model inherits from "),Ol=n("a"),N_=r("PreTrainedModel"),I_=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),D_=c(),Ra=n("p"),S_=r("This model is also a PyTorch "),La=n("a"),W_=r("torch.nn.Module"),B_=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),U_=c(),Ea=n("p"),Q_=r("This class overrides "),Nl=n("a"),H_=r("RobertaForMaskedLM"),V_=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),J_=c(),rt=n("div"),T(za.$$.fragment),K_=c(),go=n("p"),G_=r("The "),Il=n("a"),Y_=r("RobertaForMaskedLM"),Z_=r(" forward method, overrides the "),Fc=n("code"),eb=r("__call__"),tb=r(" special method."),ob=c(),T(fn.$$.fragment),nb=c(),T(gn.$$.fragment),sb=c(),T(_n.$$.fragment),hm=c(),_o=n("h2"),bn=n("a"),xc=n("span"),T(qa.$$.fragment),ab=c(),Rc=n("span"),rb=r("XLMRobertaForSequenceClassification"),mm=c(),Ke=n("div"),T(Ca.$$.fragment),ib=c(),Lc=n("p"),lb=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),db=c(),ja=n("p"),cb=r("This model inherits from "),Dl=n("a"),pb=r("PreTrainedModel"),hb=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mb=c(),Xa=n("p"),ub=r("This model is also a PyTorch "),Pa=n("a"),fb=r("torch.nn.Module"),gb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_b=c(),Aa=n("p"),bb=r("This class overrides "),Sl=n("a"),kb=r("RobertaForSequenceClassification"),vb=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Tb=c(),Qe=n("div"),T(Oa.$$.fragment),yb=c(),bo=n("p"),wb=r("The "),Wl=n("a"),$b=r("RobertaForSequenceClassification"),Mb=r(" forward method, overrides the "),Ec=n("code"),Fb=r("__call__"),xb=r(" special method."),Rb=c(),T(kn.$$.fragment),Lb=c(),T(vn.$$.fragment),Eb=c(),T(Tn.$$.fragment),zb=c(),T(yn.$$.fragment),qb=c(),T(wn.$$.fragment),um=c(),ko=n("h2"),$n=n("a"),zc=n("span"),T(Na.$$.fragment),Cb=c(),qc=n("span"),jb=r("XLMRobertaForMultipleChoice"),fm=c(),Ge=n("div"),T(Ia.$$.fragment),Xb=c(),Cc=n("p"),Pb=r(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Ab=c(),Da=n("p"),Ob=r("This model inherits from "),Bl=n("a"),Nb=r("PreTrainedModel"),Ib=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Db=c(),Sa=n("p"),Sb=r("This model is also a PyTorch "),Wa=n("a"),Wb=r("torch.nn.Module"),Bb=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ub=c(),Ba=n("p"),Qb=r("This class overrides "),Ul=n("a"),Hb=r("RobertaForMultipleChoice"),Vb=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Jb=c(),Mt=n("div"),T(Ua.$$.fragment),Kb=c(),vo=n("p"),Gb=r("The "),Ql=n("a"),Yb=r("RobertaForMultipleChoice"),Zb=r(" forward method, overrides the "),jc=n("code"),ek=r("__call__"),tk=r(" special method."),ok=c(),T(Mn.$$.fragment),nk=c(),T(Fn.$$.fragment),gm=c(),To=n("h2"),xn=n("a"),Xc=n("span"),T(Qa.$$.fragment),sk=c(),Pc=n("span"),ak=r("XLMRobertaForTokenClassification"),_m=c(),Ye=n("div"),T(Ha.$$.fragment),rk=c(),Ac=n("p"),ik=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),lk=c(),Va=n("p"),dk=r("This model inherits from "),Hl=n("a"),ck=r("PreTrainedModel"),pk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hk=c(),Ja=n("p"),mk=r("This model is also a PyTorch "),Ka=n("a"),uk=r("torch.nn.Module"),fk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gk=c(),Ga=n("p"),_k=r("This class overrides "),Vl=n("a"),bk=r("RobertaForTokenClassification"),kk=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vk=c(),it=n("div"),T(Ya.$$.fragment),Tk=c(),yo=n("p"),yk=r("The "),Jl=n("a"),wk=r("RobertaForTokenClassification"),$k=r(" forward method, overrides the "),Oc=n("code"),Mk=r("__call__"),Fk=r(" special method."),xk=c(),T(Rn.$$.fragment),Rk=c(),T(Ln.$$.fragment),Lk=c(),T(En.$$.fragment),bm=c(),wo=n("h2"),zn=n("a"),Nc=n("span"),T(Za.$$.fragment),Ek=c(),Ic=n("span"),zk=r("XLMRobertaForQuestionAnswering"),km=c(),Ze=n("div"),T(er.$$.fragment),qk=c(),$o=n("p"),Ck=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Dc=n("code"),jk=r("span start logits"),Xk=r(" and "),Sc=n("code"),Pk=r("span end logits"),Ak=r(")."),Ok=c(),tr=n("p"),Nk=r("This model inherits from "),Kl=n("a"),Ik=r("PreTrainedModel"),Dk=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sk=c(),or=n("p"),Wk=r("This model is also a PyTorch "),nr=n("a"),Bk=r("torch.nn.Module"),Uk=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qk=c(),sr=n("p"),Hk=r("This class overrides "),Gl=n("a"),Vk=r("RobertaForQuestionAnswering"),Jk=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Kk=c(),lt=n("div"),T(ar.$$.fragment),Gk=c(),Mo=n("p"),Yk=r("The "),Yl=n("a"),Zk=r("RobertaForQuestionAnswering"),ev=r(" forward method, overrides the "),Wc=n("code"),tv=r("__call__"),ov=r(" special method."),nv=c(),T(qn.$$.fragment),sv=c(),T(Cn.$$.fragment),av=c(),T(jn.$$.fragment),vm=c(),Fo=n("h2"),Xn=n("a"),Bc=n("span"),T(rr.$$.fragment),rv=c(),Uc=n("span"),iv=r("TFXLMRobertaModel"),Tm=c(),Oe=n("div"),T(ir.$$.fragment),lv=c(),Qc=n("p"),dv=r("The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),cv=c(),lr=n("p"),pv=r("This model inherits from "),Zl=n("a"),hv=r("TFPreTrainedModel"),mv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uv=c(),dr=n("p"),fv=r("This model is also a "),cr=n("a"),gv=r("tf.keras.Model"),_v=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bv=c(),T(Pn.$$.fragment),kv=c(),pr=n("p"),vv=r("This class overrides "),ed=n("a"),Tv=r("TFRobertaModel"),yv=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),wv=c(),Ft=n("div"),T(hr.$$.fragment),$v=c(),xo=n("p"),Mv=r("The "),td=n("a"),Fv=r("TFRobertaModel"),xv=r(" forward method, overrides the "),Hc=n("code"),Rv=r("__call__"),Lv=r(" special method."),Ev=c(),T(An.$$.fragment),zv=c(),T(On.$$.fragment),ym=c(),Ro=n("h2"),Nn=n("a"),Vc=n("span"),T(mr.$$.fragment),qv=c(),Jc=n("span"),Cv=r("TFXLMRobertaForMaskedLM"),wm=c(),Ne=n("div"),T(ur.$$.fragment),jv=c(),fr=n("p"),Xv=r("XLM-RoBERTa Model with a "),Kc=n("code"),Pv=r("language modeling"),Av=r(" head on top."),Ov=c(),gr=n("p"),Nv=r("This model inherits from "),od=n("a"),Iv=r("TFPreTrainedModel"),Dv=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sv=c(),_r=n("p"),Wv=r("This model is also a "),br=n("a"),Bv=r("tf.keras.Model"),Uv=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qv=c(),T(In.$$.fragment),Hv=c(),kr=n("p"),Vv=r("This class overrides "),nd=n("a"),Jv=r("TFRobertaForMaskedLM"),Kv=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Gv=c(),dt=n("div"),T(vr.$$.fragment),Yv=c(),Lo=n("p"),Zv=r("The "),sd=n("a"),e1=r("TFRobertaForMaskedLM"),t1=r(" forward method, overrides the "),Gc=n("code"),o1=r("__call__"),n1=r(" special method."),s1=c(),T(Dn.$$.fragment),a1=c(),T(Sn.$$.fragment),r1=c(),T(Wn.$$.fragment),$m=c(),Eo=n("h2"),Bn=n("a"),Yc=n("span"),T(Tr.$$.fragment),i1=c(),Zc=n("span"),l1=r("TFXLMRobertaForSequenceClassification"),Mm=c(),Ie=n("div"),T(yr.$$.fragment),d1=c(),ep=n("p"),c1=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),p1=c(),wr=n("p"),h1=r("This model inherits from "),ad=n("a"),m1=r("TFPreTrainedModel"),u1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),f1=c(),$r=n("p"),g1=r("This model is also a "),Mr=n("a"),_1=r("tf.keras.Model"),b1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),k1=c(),T(Un.$$.fragment),v1=c(),Fr=n("p"),T1=r("This class overrides "),rd=n("a"),y1=r("TFRobertaForSequenceClassification"),w1=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),$1=c(),ct=n("div"),T(xr.$$.fragment),M1=c(),zo=n("p"),F1=r("The "),id=n("a"),x1=r("TFRobertaForSequenceClassification"),R1=r(" forward method, overrides the "),tp=n("code"),L1=r("__call__"),E1=r(" special method."),z1=c(),T(Qn.$$.fragment),q1=c(),T(Hn.$$.fragment),C1=c(),T(Vn.$$.fragment),Fm=c(),qo=n("h2"),Jn=n("a"),op=n("span"),T(Rr.$$.fragment),j1=c(),np=n("span"),X1=r("TFXLMRobertaForMultipleChoice"),xm=c(),De=n("div"),T(Lr.$$.fragment),P1=c(),sp=n("p"),A1=r(`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),O1=c(),Er=n("p"),N1=r("This model inherits from "),ld=n("a"),I1=r("TFPreTrainedModel"),D1=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S1=c(),zr=n("p"),W1=r("This model is also a "),qr=n("a"),B1=r("tf.keras.Model"),U1=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q1=c(),T(Kn.$$.fragment),H1=c(),Cr=n("p"),V1=r("This class overrides "),dd=n("a"),J1=r("TFRobertaForMultipleChoice"),K1=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),G1=c(),xt=n("div"),T(jr.$$.fragment),Y1=c(),Co=n("p"),Z1=r("The "),cd=n("a"),eT=r("TFRobertaForMultipleChoice"),tT=r(" forward method, overrides the "),ap=n("code"),oT=r("__call__"),nT=r(" special method."),sT=c(),T(Gn.$$.fragment),aT=c(),T(Yn.$$.fragment),Rm=c(),jo=n("h2"),Zn=n("a"),rp=n("span"),T(Xr.$$.fragment),rT=c(),ip=n("span"),iT=r("TFXLMRobertaForTokenClassification"),Lm=c(),Se=n("div"),T(Pr.$$.fragment),lT=c(),lp=n("p"),dT=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),cT=c(),Ar=n("p"),pT=r("This model inherits from "),pd=n("a"),hT=r("TFPreTrainedModel"),mT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uT=c(),Or=n("p"),fT=r("This model is also a "),Nr=n("a"),gT=r("tf.keras.Model"),_T=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=c(),T(es.$$.fragment),kT=c(),Ir=n("p"),vT=r("This class overrides "),hd=n("a"),TT=r("TFRobertaForTokenClassification"),yT=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),wT=c(),pt=n("div"),T(Dr.$$.fragment),$T=c(),Xo=n("p"),MT=r("The "),md=n("a"),FT=r("TFRobertaForTokenClassification"),xT=r(" forward method, overrides the "),dp=n("code"),RT=r("__call__"),LT=r(" special method."),ET=c(),T(ts.$$.fragment),zT=c(),T(os.$$.fragment),qT=c(),T(ns.$$.fragment),Em=c(),Po=n("h2"),ss=n("a"),cp=n("span"),T(Sr.$$.fragment),CT=c(),pp=n("span"),jT=r("TFXLMRobertaForQuestionAnswering"),zm=c(),We=n("div"),T(Wr.$$.fragment),XT=c(),Ao=n("p"),PT=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=n("code"),AT=r("span start logits"),OT=r(" and "),mp=n("code"),NT=r("span end logits"),IT=r(")."),DT=c(),Br=n("p"),ST=r("This model inherits from "),ud=n("a"),WT=r("TFPreTrainedModel"),BT=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),UT=c(),Ur=n("p"),QT=r("This model is also a "),Qr=n("a"),HT=r("tf.keras.Model"),VT=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),JT=c(),T(as.$$.fragment),KT=c(),Hr=n("p"),GT=r("This class overrides "),up=n("code"),YT=r("TFRobertaForQuestionAnsweringSimple"),ZT=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),ey=c(),ht=n("div"),T(Vr.$$.fragment),ty=c(),Oo=n("p"),oy=r("The "),fd=n("a"),ny=r("TFRobertaForQuestionAnswering"),sy=r(" forward method, overrides the "),fp=n("code"),ay=r("__call__"),ry=r(" special method."),iy=c(),T(rs.$$.fragment),ly=c(),T(is.$$.fragment),dy=c(),T(ls.$$.fragment),qm=c(),No=n("h2"),ds=n("a"),gp=n("span"),T(Jr.$$.fragment),cy=c(),_p=n("span"),py=r("FlaxXLMRobertaModel"),Cm=c(),Be=n("div"),T(Kr.$$.fragment),hy=c(),Gr=n("p"),my=r(`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gd=n("a"),uy=r("FlaxPreTrainedModel"),fy=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gy=c(),Yr=n("p"),_y=r("This model is also a Flax Linen "),Zr=n("a"),by=r("flax.linen.Module"),ky=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vy=c(),bp=n("p"),Ty=r("Finally, this model supports inherent JAX features such as:"),yy=c(),St=n("ul"),kp=n("li"),ei=n("a"),wy=r("Just-In-Time (JIT) compilation"),$y=c(),vp=n("li"),ti=n("a"),My=r("Automatic Differentiation"),Fy=c(),Tp=n("li"),oi=n("a"),xy=r("Vectorization"),Ry=c(),yp=n("li"),ni=n("a"),Ly=r("Parallelization"),Ey=c(),si=n("p"),zy=r("This class overrides "),_d=n("a"),qy=r("FlaxRobertaModel"),Cy=r(`. Please check the superclass for the appropriate documentation alongside
usage examples.`),jy=c(),Rt=n("div"),T(ai.$$.fragment),Xy=c(),Io=n("p"),Py=r("The "),wp=n("code"),Ay=r("FlaxRobertaPreTrainedModel"),Oy=r(" forward method, overrides the "),$p=n("code"),Ny=r("__call__"),Iy=r(" special method."),Dy=c(),T(cs.$$.fragment),Sy=c(),T(ps.$$.fragment),jm=c(),Do=n("h2"),hs=n("a"),Mp=n("span"),T(ri.$$.fragment),Wy=c(),Fp=n("span"),By=r("FlaxXLMRobertaForMaskedLM"),Xm=c(),Ue=n("div"),T(ii.$$.fragment),Uy=c(),So=n("p"),Qy=r("XLM-RoBERTa Model with a "),xp=n("code"),Hy=r("language modeling"),Vy=r(` head on top.
This model inherits from `),bd=n("a"),Jy=r("FlaxPreTrainedModel"),Ky=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gy=c(),li=n("p"),Yy=r("This model is also a Flax Linen "),di=n("a"),Zy=r("flax.linen.Module"),ew=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tw=c(),Rp=n("p"),ow=r("Finally, this model supports inherent JAX features such as:"),nw=c(),Wt=n("ul"),Lp=n("li"),ci=n("a"),sw=r("Just-In-Time (JIT) compilation"),aw=c(),Ep=n("li"),pi=n("a"),rw=r("Automatic Differentiation"),iw=c(),zp=n("li"),hi=n("a"),lw=r("Vectorization"),dw=c(),qp=n("li"),mi=n("a"),cw=r("Parallelization"),pw=c(),ui=n("p"),hw=r("This class overrides "),kd=n("a"),mw=r("FlaxRobertaForMaskedLM"),uw=r(`. Please check the superclass for the appropriate documentation
alongside usage examples.`),fw=c(),Lt=n("div"),T(fi.$$.fragment),gw=c(),Wo=n("p"),_w=r("The "),Cp=n("code"),bw=r("FlaxRobertaPreTrainedModel"),kw=r(" forward method, overrides the "),jp=n("code"),vw=r("__call__"),Tw=r(" special method."),yw=c(),T(ms.$$.fragment),ww=c(),T(us.$$.fragment),Pm=c(),Bo=n("h2"),fs=n("a"),Xp=n("span"),T(gi.$$.fragment),$w=c(),Pp=n("span"),Mw=r("FlaxXLMRobertaForSequenceClassification"),Am=c(),Ce=n("div"),T(_i.$$.fragment),Fw=c(),Ap=n("p"),xw=r(`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rw=c(),bi=n("p"),Lw=r("This model inherits from "),vd=n("a"),Ew=r("FlaxPreTrainedModel"),zw=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qw=c(),ki=n("p"),Cw=r("This model is also a Flax Linen "),vi=n("a"),jw=r("flax.linen.Module"),Xw=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Pw=c(),Op=n("p"),Aw=r("Finally, this model supports inherent JAX features such as:"),Ow=c(),Bt=n("ul"),Np=n("li"),Ti=n("a"),Nw=r("Just-In-Time (JIT) compilation"),Iw=c(),Ip=n("li"),yi=n("a"),Dw=r("Automatic Differentiation"),Sw=c(),Dp=n("li"),wi=n("a"),Ww=r("Vectorization"),Bw=c(),Sp=n("li"),$i=n("a"),Uw=r("Parallelization"),Qw=c(),Mi=n("p"),Hw=r("This class overrides "),Td=n("a"),Vw=r("FlaxRobertaForSequenceClassification"),Jw=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Kw=c(),Et=n("div"),T(Fi.$$.fragment),Gw=c(),Uo=n("p"),Yw=r("The "),Wp=n("code"),Zw=r("FlaxRobertaPreTrainedModel"),e$=r(" forward method, overrides the "),Bp=n("code"),t$=r("__call__"),o$=r(" special method."),n$=c(),T(gs.$$.fragment),s$=c(),T(_s.$$.fragment),Om=c(),Qo=n("h2"),bs=n("a"),Up=n("span"),T(xi.$$.fragment),a$=c(),Qp=n("span"),r$=r("FlaxXLMRobertaForMultipleChoice"),Nm=c(),je=n("div"),T(Ri.$$.fragment),i$=c(),Hp=n("p"),l$=r(`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),d$=c(),Li=n("p"),c$=r("This model inherits from "),yd=n("a"),p$=r("FlaxPreTrainedModel"),h$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),m$=c(),Ei=n("p"),u$=r("This model is also a Flax Linen "),zi=n("a"),f$=r("flax.linen.Module"),g$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_$=c(),Vp=n("p"),b$=r("Finally, this model supports inherent JAX features such as:"),k$=c(),Ut=n("ul"),Jp=n("li"),qi=n("a"),v$=r("Just-In-Time (JIT) compilation"),T$=c(),Kp=n("li"),Ci=n("a"),y$=r("Automatic Differentiation"),w$=c(),Gp=n("li"),ji=n("a"),$$=r("Vectorization"),M$=c(),Yp=n("li"),Xi=n("a"),F$=r("Parallelization"),x$=c(),Pi=n("p"),R$=r("This class overrides "),wd=n("a"),L$=r("FlaxRobertaForMultipleChoice"),E$=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),z$=c(),zt=n("div"),T(Ai.$$.fragment),q$=c(),Ho=n("p"),C$=r("The "),Zp=n("code"),j$=r("FlaxRobertaPreTrainedModel"),X$=r(" forward method, overrides the "),eh=n("code"),P$=r("__call__"),A$=r(" special method."),O$=c(),T(ks.$$.fragment),N$=c(),T(vs.$$.fragment),Im=c(),Vo=n("h2"),Ts=n("a"),th=n("span"),T(Oi.$$.fragment),I$=c(),oh=n("span"),D$=r("FlaxXLMRobertaForTokenClassification"),Dm=c(),Xe=n("div"),T(Ni.$$.fragment),S$=c(),nh=n("p"),W$=r(`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),B$=c(),Ii=n("p"),U$=r("This model inherits from "),$d=n("a"),Q$=r("FlaxPreTrainedModel"),H$=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),V$=c(),Di=n("p"),J$=r("This model is also a Flax Linen "),Si=n("a"),K$=r("flax.linen.Module"),G$=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Y$=c(),sh=n("p"),Z$=r("Finally, this model supports inherent JAX features such as:"),e2=c(),Qt=n("ul"),ah=n("li"),Wi=n("a"),t2=r("Just-In-Time (JIT) compilation"),o2=c(),rh=n("li"),Bi=n("a"),n2=r("Automatic Differentiation"),s2=c(),ih=n("li"),Ui=n("a"),a2=r("Vectorization"),r2=c(),lh=n("li"),Qi=n("a"),i2=r("Parallelization"),l2=c(),Hi=n("p"),d2=r("This class overrides "),Md=n("a"),c2=r("FlaxRobertaForTokenClassification"),p2=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),h2=c(),qt=n("div"),T(Vi.$$.fragment),m2=c(),Jo=n("p"),u2=r("The "),dh=n("code"),f2=r("FlaxRobertaPreTrainedModel"),g2=r(" forward method, overrides the "),ch=n("code"),_2=r("__call__"),b2=r(" special method."),k2=c(),T(ys.$$.fragment),v2=c(),T(ws.$$.fragment),Sm=c(),Ko=n("h2"),$s=n("a"),ph=n("span"),T(Ji.$$.fragment),T2=c(),hh=n("span"),y2=r("FlaxXLMRobertaForQuestionAnswering"),Wm=c(),Pe=n("div"),T(Ki.$$.fragment),w2=c(),Go=n("p"),$2=r(`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),mh=n("code"),M2=r("span start logits"),F2=r(" and "),uh=n("code"),x2=r("span end logits"),R2=r(")."),L2=c(),Gi=n("p"),E2=r("This model inherits from "),Fd=n("a"),z2=r("FlaxPreTrainedModel"),q2=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),C2=c(),Yi=n("p"),j2=r("This model is also a Flax Linen "),Zi=n("a"),X2=r("flax.linen.Module"),P2=r(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),A2=c(),fh=n("p"),O2=r("Finally, this model supports inherent JAX features such as:"),N2=c(),Ht=n("ul"),gh=n("li"),el=n("a"),I2=r("Just-In-Time (JIT) compilation"),D2=c(),_h=n("li"),tl=n("a"),S2=r("Automatic Differentiation"),W2=c(),bh=n("li"),ol=n("a"),B2=r("Vectorization"),U2=c(),kh=n("li"),nl=n("a"),Q2=r("Parallelization"),H2=c(),sl=n("p"),V2=r("This class overrides "),xd=n("a"),J2=r("FlaxRobertaForQuestionAnswering"),K2=r(`. Please check the superclass for the appropriate
documentation alongside usage examples.`),G2=c(),Ct=n("div"),T(al.$$.fragment),Y2=c(),Yo=n("p"),Z2=r("The "),vh=n("code"),eM=r("FlaxRobertaPreTrainedModel"),tM=r(" forward method, overrides the "),Th=n("code"),oM=r("__call__"),nM=r(" special method."),sM=c(),T(Ms.$$.fragment),aM=c(),T(Fs.$$.fragment),this.h()},l(o){const k=jR('[data-svelte="svelte-1phssyn"]',document.head);d=s(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(o),h=s(o,"H1",{class:!0});var rl=a(h);m=s(rl,"A",{id:!0,class:!0,href:!0});var yh=a(m);_=s(yh,"SPAN",{});var wh=a(_);y(l.$$.fragment,wh),wh.forEach(t),yh.forEach(t),f=p(rl),R=s(rl,"SPAN",{});var $h=a(R);ue=i($h,"XLM-RoBERTa"),$h.forEach(t),rl.forEach(t),J=p(o),E=s(o,"H2",{class:!0});var il=a(E);Y=s(il,"A",{id:!0,class:!0,href:!0});var Mh=a(Y);D=s(Mh,"SPAN",{});var Fh=a(D);y(ee.$$.fragment,Fh),Fh.forEach(t),Mh.forEach(t),fe=p(il),S=s(il,"SPAN",{});var xh=a(S);ge=i(xh,"Overview"),xh.forEach(t),il.forEach(t),ce=p(o),V=s(o,"P",{});var ll=a(V);P=i(ll,"The XLM-RoBERTa model was proposed in "),te=s(ll,"A",{href:!0,rel:!0});var Rh=a(te);K=i(Rh,"Unsupervised Cross-lingual Representation Learning at Scale"),Rh.forEach(t),z=i(ll,` by Alexis Conneau, Kartikay Khandelwal, Naman Goyal, Vishrav Chaudhary, Guillaume
Wenzek, Francisco Guzm\xE1n, Edouard Grave, Myle Ott, Luke Zettlemoyer and Veselin Stoyanov. It is based on Facebook\u2019s
RoBERTa model released in 2019. It is a large multi-lingual language model, trained on 2.5TB of filtered CommonCrawl
data.`),ll.forEach(t),C=p(o),se=s(o,"P",{});var Lh=a(se);U=i(Lh,"The abstract from the paper is the following:"),Lh.forEach(t),pe=p(o),ae=s(o,"P",{});var Eh=a(ae);W=s(Eh,"EM",{});var zh=a(W);_e=i(zh,`This paper shows that pretraining multilingual language models at scale leads to significant performance gains for a
wide range of cross-lingual transfer tasks. We train a Transformer-based masked language model on one hundred
languages, using more than two terabytes of filtered CommonCrawl data. Our model, dubbed XLM-R, significantly
outperforms multilingual BERT (mBERT) on a variety of cross-lingual benchmarks, including +13.8% average accuracy on
XNLI, +12.3% average F1 score on MLQA, and +2.1% average F1 score on NER. XLM-R performs particularly well on
low-resource languages, improving 11.8% in XNLI accuracy for Swahili and 9.2% for Urdu over the previous XLM model. We
also present a detailed empirical evaluation of the key factors that are required to achieve these gains, including the
trade-offs between (1) positive transfer and capacity dilution and (2) the performance of high and low resource
languages at scale. Finally, we show, for the first time, the possibility of multilingual modeling without sacrificing
per-language performance; XLM-Ris very competitive with strong monolingual models on the GLUE and XNLI benchmarks. We
will make XLM-R code, data, and models publicly available.`),zh.forEach(t),Eh.forEach(t),he=p(o),q=s(o,"P",{});var qh=a(q);be=i(qh,"Tips:"),qh.forEach(t),B=p(o),Z=s(o,"UL",{});var dl=a(Z);oe=s(dl,"LI",{});var cl=a(oe);Q=i(cl,`XLM-RoBERTa is a multilingual model trained on 100 different languages. Unlike some XLM multilingual models, it does
not require `),re=s(cl,"CODE",{});var Ch=a(re);ke=i(Ch,"lang"),Ch.forEach(t),A=i(cl,` tensors to understand which language is used, and should be able to determine the correct
language from the input ids.`),cl.forEach(t),ve=p(dl),I=s(dl,"LI",{});var pl=a(I);Te=i(pl,"This implementation is the same as RoBERTa. Refer to the "),v=s(pl,"A",{href:!0});var jh=a(v);L=i(jh,"documentation of RoBERTa"),jh.forEach(t),G=i(pl,` for usage examples
as well as the information relative to the inputs and outputs.`),pl.forEach(t),dl.forEach(t),xe=p(o),me=s(o,"P",{});var Zo=a(me);O=i(Zo,"This model was contributed by "),we=s(Zo,"A",{href:!0,rel:!0});var Xh=a(we);Le=i(Xh,"stefan-it"),Xh.forEach(t),Ee=i(Zo,". The original code can be found "),j=s(Zo,"A",{href:!0,rel:!0});var Ph=a(j);H=i(Ph,"here"),Ph.forEach(t),ze=i(Zo,"."),Zo.forEach(t),Re=p(o),N=s(o,"H2",{class:!0});var hl=a(N);ye=s(hl,"A",{id:!0,class:!0,href:!0});var Ah=a(ye);Fe=s(Ah,"SPAN",{});var Oh=a(Fe);y(ne.$$.fragment,Oh),Oh.forEach(t),Ah.forEach(t),qe=p(hl),ec=s(hl,"SPAN",{});var Nh=a(ec);vf=i(Nh,"XLMRobertaConfig"),Nh.forEach(t),hl.forEach(t),tm=p(o),ro=s(o,"DIV",{class:!0});var ml=a(ro);y(Bs.$$.fragment,ml),Tf=p(ml),io=s(ml,"P",{});var en=a(io);yf=i(en,"This class overrides "),vl=s(en,"A",{href:!0});var Ih=a(vl);wf=i(Ih,"RobertaConfig"),Ih.forEach(t),$f=i(en,`. Please check the superclass for the appropriate documentation alongside
usage examples. Instantiating a configuration with the defaults will yield a similar configuration to that of the
XLMRoBERTa `),Us=s(en,"A",{href:!0,rel:!0});var Dh=a(Us);Mf=i(Dh,"xlm-roberta-base"),Dh.forEach(t),Ff=i(en," architecture."),en.forEach(t),ml.forEach(t),om=p(o),lo=s(o,"H2",{class:!0});var ul=a(lo);on=s(ul,"A",{id:!0,class:!0,href:!0});var Sh=a(on);tc=s(Sh,"SPAN",{});var Wh=a(tc);y(Qs.$$.fragment,Wh),Wh.forEach(t),Sh.forEach(t),xf=p(ul),oc=s(ul,"SPAN",{});var Bh=a(oc);Rf=i(Bh,"XLMRobertaTokenizer"),Bh.forEach(t),ul.forEach(t),nm=p(o),Ae=s(o,"DIV",{class:!0});var et=a(Ae);y(Hs.$$.fragment,et),Lf=p(et),Dt=s(et,"P",{});var Vt=a(Dt);Ef=i(Vt,"Adapted from "),Tl=s(Vt,"A",{href:!0});var Uh=a(Tl);zf=i(Uh,"RobertaTokenizer"),Uh.forEach(t),qf=i(Vt," and "),yl=s(Vt,"A",{href:!0});var Qh=a(yl);Cf=i(Qh,"XLNetTokenizer"),Qh.forEach(t),jf=i(Vt,`. Based on
`),Vs=s(Vt,"A",{href:!0,rel:!0});var Hh=a(Vs);Xf=i(Hh,"SentencePiece"),Hh.forEach(t),Pf=i(Vt,"."),Vt.forEach(t),Af=p(et),Js=s(et,"P",{});var fl=a(Js);Of=i(fl,"This tokenizer inherits from "),wl=s(fl,"A",{href:!0});var Vh=a(wl);Nf=i(Vh,"PreTrainedTokenizer"),Vh.forEach(t),If=i(fl,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fl.forEach(t),Df=p(et),Jt=s(et,"DIV",{class:!0});var tn=a(Jt);y(Ks.$$.fragment,tn),Sf=p(tn),nc=s(tn,"P",{});var Jh=a(nc);Wf=i(Jh,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),Jh.forEach(t),Bf=p(tn),Gs=s(tn,"UL",{});var gl=a(Gs);$l=s(gl,"LI",{});var Rd=a($l);Uf=i(Rd,"single sequence: "),sc=s(Rd,"CODE",{});var Kh=a(sc);Qf=i(Kh,"<s> X </s>"),Kh.forEach(t),Rd.forEach(t),Hf=p(gl),Ml=s(gl,"LI",{});var Ld=a(Ml);Vf=i(Ld,"pair of sequences: "),ac=s(Ld,"CODE",{});var Gh=a(ac);Jf=i(Gh,"<s> A </s></s> B </s>"),Gh.forEach(t),Ld.forEach(t),gl.forEach(t),tn.forEach(t),Kf=p(et),nn=s(et,"DIV",{class:!0});var _l=a(nn);y(Ys.$$.fragment,_l),Gf=p(_l),Zs=s(_l,"P",{});var bl=a(Zs);Yf=i(bl,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),rc=s(bl,"CODE",{});var Yh=a(rc);Zf=i(Yh,"prepare_for_model"),Yh.forEach(t),eg=i(bl," method."),bl.forEach(t),_l.forEach(t),tg=p(et),sn=s(et,"DIV",{class:!0});var kl=a(sn);y(ea.$$.fragment,kl),og=p(kl),ic=s(kl,"P",{});var Zh=a(ic);ng=i(Zh,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),Zh.forEach(t),kl.forEach(t),sg=p(et),Fl=s(et,"DIV",{class:!0});var em=a(Fl);y(ta.$$.fragment,em),em.forEach(t),et.forEach(t),sm=p(o),co=s(o,"H2",{class:!0});var Um=a(co);an=s(Um,"A",{id:!0,class:!0,href:!0});var lM=a(an);lc=s(lM,"SPAN",{});var dM=a(lc);y(oa.$$.fragment,dM),dM.forEach(t),lM.forEach(t),ag=p(Um),dc=s(Um,"SPAN",{});var cM=a(dc);rg=i(cM,"XLMRobertaTokenizerFast"),cM.forEach(t),Um.forEach(t),am=p(o),at=s(o,"DIV",{class:!0});var Gt=a(at);y(na.$$.fragment,Gt),ig=p(Gt),yt=s(Gt,"P",{});var Yt=a(yt);lg=i(Yt,"Construct a \u201Cfast\u201D XLM-RoBERTa tokenizer (backed by HuggingFace\u2019s "),cc=s(Yt,"EM",{});var pM=a(cc);dg=i(pM,"tokenizers"),pM.forEach(t),cg=i(Yt,` library). Adapted from
`),xl=s(Yt,"A",{href:!0});var hM=a(xl);pg=i(hM,"RobertaTokenizer"),hM.forEach(t),hg=i(Yt," and "),Rl=s(Yt,"A",{href:!0});var mM=a(Rl);mg=i(mM,"XLNetTokenizer"),mM.forEach(t),ug=i(Yt,`. Based on
`),sa=s(Yt,"A",{href:!0,rel:!0});var uM=a(sa);fg=i(uM,"BPE"),uM.forEach(t),gg=i(Yt,"."),Yt.forEach(t),_g=p(Gt),aa=s(Gt,"P",{});var Qm=a(aa);bg=i(Qm,"This tokenizer inherits from "),Ll=s(Qm,"A",{href:!0});var fM=a(Ll);kg=i(fM,"PreTrainedTokenizerFast"),fM.forEach(t),vg=i(Qm,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Qm.forEach(t),Tg=p(Gt),Kt=s(Gt,"DIV",{class:!0});var Ed=a(Kt);y(ra.$$.fragment,Ed),yg=p(Ed),pc=s(Ed,"P",{});var gM=a(pc);wg=i(gM,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. An XLM-RoBERTa sequence has the following format:`),gM.forEach(t),$g=p(Ed),ia=s(Ed,"UL",{});var Hm=a(ia);El=s(Hm,"LI",{});var rM=a(El);Mg=i(rM,"single sequence: "),hc=s(rM,"CODE",{});var _M=a(hc);Fg=i(_M,"<s> X </s>"),_M.forEach(t),rM.forEach(t),xg=p(Hm),zl=s(Hm,"LI",{});var iM=a(zl);Rg=i(iM,"pair of sequences: "),mc=s(iM,"CODE",{});var bM=a(mc);Lg=i(bM,"<s> A </s></s> B </s>"),bM.forEach(t),iM.forEach(t),Hm.forEach(t),Ed.forEach(t),Eg=p(Gt),rn=s(Gt,"DIV",{class:!0});var Vm=a(rn);y(la.$$.fragment,Vm),zg=p(Vm),uc=s(Vm,"P",{});var kM=a(uc);qg=i(kM,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. XLM-RoBERTa does
not make use of token type ids, therefore a list of zeros is returned.`),kM.forEach(t),Vm.forEach(t),Gt.forEach(t),rm=p(o),po=s(o,"H2",{class:!0});var Jm=a(po);ln=s(Jm,"A",{id:!0,class:!0,href:!0});var vM=a(ln);fc=s(vM,"SPAN",{});var TM=a(fc);y(da.$$.fragment,TM),TM.forEach(t),vM.forEach(t),Cg=p(Jm),gc=s(Jm,"SPAN",{});var yM=a(gc);jg=i(yM,"XLMRobertaModel"),yM.forEach(t),Jm.forEach(t),im=p(o),He=s(o,"DIV",{class:!0});var jt=a(He);y(ca.$$.fragment,jt),Xg=p(jt),_c=s(jt,"P",{});var wM=a(_c);Pg=i(wM,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),wM.forEach(t),Ag=p(jt),pa=s(jt,"P",{});var Km=a(pa);Og=i(Km,"This model inherits from "),ql=s(Km,"A",{href:!0});var $M=a(ql);Ng=i($M,"PreTrainedModel"),$M.forEach(t),Ig=i(Km,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Km.forEach(t),Dg=p(jt),ha=s(jt,"P",{});var Gm=a(ha);Sg=i(Gm,"This model is also a PyTorch "),ma=s(Gm,"A",{href:!0,rel:!0});var MM=a(ma);Wg=i(MM,"torch.nn.Module"),MM.forEach(t),Bg=i(Gm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gm.forEach(t),Ug=p(jt),ua=s(jt,"P",{});var Ym=a(ua);Qg=i(Ym,"This class overrides "),Cl=s(Ym,"A",{href:!0});var FM=a(Cl);Hg=i(FM,"RobertaModel"),FM.forEach(t),Vg=i(Ym,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ym.forEach(t),Jg=p(jt),wt=s(jt,"DIV",{class:!0});var xs=a(wt);y(fa.$$.fragment,xs),Kg=p(xs),ho=s(xs,"P",{});var zd=a(ho);Gg=i(zd,"The "),jl=s(zd,"A",{href:!0});var xM=a(jl);Yg=i(xM,"RobertaModel"),xM.forEach(t),Zg=i(zd," forward method, overrides the "),bc=s(zd,"CODE",{});var RM=a(bc);e_=i(RM,"__call__"),RM.forEach(t),t_=i(zd," special method."),zd.forEach(t),o_=p(xs),y(dn.$$.fragment,xs),n_=p(xs),y(cn.$$.fragment,xs),xs.forEach(t),jt.forEach(t),lm=p(o),mo=s(o,"H2",{class:!0});var Zm=a(mo);pn=s(Zm,"A",{id:!0,class:!0,href:!0});var LM=a(pn);kc=s(LM,"SPAN",{});var EM=a(kc);y(ga.$$.fragment,EM),EM.forEach(t),LM.forEach(t),s_=p(Zm),vc=s(Zm,"SPAN",{});var zM=a(vc);a_=i(zM,"XLMRobertaForCausalLM"),zM.forEach(t),Zm.forEach(t),dm=p(o),Ve=s(o,"DIV",{class:!0});var Xt=a(Ve);y(_a.$$.fragment,Xt),r_=p(Xt),ba=s(Xt,"P",{});var eu=a(ba);i_=i(eu,"XLM-RoBERTa Model with a "),Tc=s(eu,"CODE",{});var qM=a(Tc);l_=i(qM,"language modeling"),qM.forEach(t),d_=i(eu," head on top for CLM fine-tuning."),eu.forEach(t),c_=p(Xt),ka=s(Xt,"P",{});var tu=a(ka);p_=i(tu,"This model inherits from "),Xl=s(tu,"A",{href:!0});var CM=a(Xl);h_=i(CM,"PreTrainedModel"),CM.forEach(t),m_=i(tu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tu.forEach(t),u_=p(Xt),va=s(Xt,"P",{});var ou=a(va);f_=i(ou,"This model is also a PyTorch "),Ta=s(ou,"A",{href:!0,rel:!0});var jM=a(Ta);g_=i(jM,"torch.nn.Module"),jM.forEach(t),__=i(ou,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ou.forEach(t),b_=p(Xt),ya=s(Xt,"P",{});var nu=a(ya);k_=i(nu,"This class overrides "),Pl=s(nu,"A",{href:!0});var XM=a(Pl);v_=i(XM,"RobertaForCausalLM"),XM.forEach(t),T_=i(nu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),nu.forEach(t),y_=p(Xt),$t=s(Xt,"DIV",{class:!0});var Rs=a($t);y(wa.$$.fragment,Rs),w_=p(Rs),uo=s(Rs,"P",{});var qd=a(uo);$_=i(qd,"The "),Al=s(qd,"A",{href:!0});var PM=a(Al);M_=i(PM,"RobertaForCausalLM"),PM.forEach(t),F_=i(qd," forward method, overrides the "),yc=s(qd,"CODE",{});var AM=a(yc);x_=i(AM,"__call__"),AM.forEach(t),R_=i(qd," special method."),qd.forEach(t),L_=p(Rs),y(hn.$$.fragment,Rs),E_=p(Rs),y(mn.$$.fragment,Rs),Rs.forEach(t),Xt.forEach(t),cm=p(o),fo=s(o,"H2",{class:!0});var su=a(fo);un=s(su,"A",{id:!0,class:!0,href:!0});var OM=a(un);wc=s(OM,"SPAN",{});var NM=a(wc);y($a.$$.fragment,NM),NM.forEach(t),OM.forEach(t),z_=p(su),$c=s(su,"SPAN",{});var IM=a($c);q_=i(IM,"XLMRobertaForMaskedLM"),IM.forEach(t),su.forEach(t),pm=p(o),Je=s(o,"DIV",{class:!0});var Pt=a(Je);y(Ma.$$.fragment,Pt),C_=p(Pt),Fa=s(Pt,"P",{});var au=a(Fa);j_=i(au,"XLM-RoBERTa Model with a "),Mc=s(au,"CODE",{});var DM=a(Mc);X_=i(DM,"language modeling"),DM.forEach(t),P_=i(au," head on top."),au.forEach(t),A_=p(Pt),xa=s(Pt,"P",{});var ru=a(xa);O_=i(ru,"This model inherits from "),Ol=s(ru,"A",{href:!0});var SM=a(Ol);N_=i(SM,"PreTrainedModel"),SM.forEach(t),I_=i(ru,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ru.forEach(t),D_=p(Pt),Ra=s(Pt,"P",{});var iu=a(Ra);S_=i(iu,"This model is also a PyTorch "),La=s(iu,"A",{href:!0,rel:!0});var WM=a(La);W_=i(WM,"torch.nn.Module"),WM.forEach(t),B_=i(iu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),iu.forEach(t),U_=p(Pt),Ea=s(Pt,"P",{});var lu=a(Ea);Q_=i(lu,"This class overrides "),Nl=s(lu,"A",{href:!0});var BM=a(Nl);H_=i(BM,"RobertaForMaskedLM"),BM.forEach(t),V_=i(lu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),lu.forEach(t),J_=p(Pt),rt=s(Pt,"DIV",{class:!0});var Zt=a(rt);y(za.$$.fragment,Zt),K_=p(Zt),go=s(Zt,"P",{});var Cd=a(go);G_=i(Cd,"The "),Il=s(Cd,"A",{href:!0});var UM=a(Il);Y_=i(UM,"RobertaForMaskedLM"),UM.forEach(t),Z_=i(Cd," forward method, overrides the "),Fc=s(Cd,"CODE",{});var QM=a(Fc);eb=i(QM,"__call__"),QM.forEach(t),tb=i(Cd," special method."),Cd.forEach(t),ob=p(Zt),y(fn.$$.fragment,Zt),nb=p(Zt),y(gn.$$.fragment,Zt),sb=p(Zt),y(_n.$$.fragment,Zt),Zt.forEach(t),Pt.forEach(t),hm=p(o),_o=s(o,"H2",{class:!0});var du=a(_o);bn=s(du,"A",{id:!0,class:!0,href:!0});var HM=a(bn);xc=s(HM,"SPAN",{});var VM=a(xc);y(qa.$$.fragment,VM),VM.forEach(t),HM.forEach(t),ab=p(du),Rc=s(du,"SPAN",{});var JM=a(Rc);rb=i(JM,"XLMRobertaForSequenceClassification"),JM.forEach(t),du.forEach(t),mm=p(o),Ke=s(o,"DIV",{class:!0});var At=a(Ke);y(Ca.$$.fragment,At),ib=p(At),Lc=s(At,"P",{});var KM=a(Lc);lb=i(KM,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),KM.forEach(t),db=p(At),ja=s(At,"P",{});var cu=a(ja);cb=i(cu,"This model inherits from "),Dl=s(cu,"A",{href:!0});var GM=a(Dl);pb=i(GM,"PreTrainedModel"),GM.forEach(t),hb=i(cu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cu.forEach(t),mb=p(At),Xa=s(At,"P",{});var pu=a(Xa);ub=i(pu,"This model is also a PyTorch "),Pa=s(pu,"A",{href:!0,rel:!0});var YM=a(Pa);fb=i(YM,"torch.nn.Module"),YM.forEach(t),gb=i(pu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu.forEach(t),_b=p(At),Aa=s(At,"P",{});var hu=a(Aa);bb=i(hu,"This class overrides "),Sl=s(hu,"A",{href:!0});var ZM=a(Sl);kb=i(ZM,"RobertaForSequenceClassification"),ZM.forEach(t),vb=i(hu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),hu.forEach(t),Tb=p(At),Qe=s(At,"DIV",{class:!0});var mt=a(Qe);y(Oa.$$.fragment,mt),yb=p(mt),bo=s(mt,"P",{});var jd=a(bo);wb=i(jd,"The "),Wl=s(jd,"A",{href:!0});var eF=a(Wl);$b=i(eF,"RobertaForSequenceClassification"),eF.forEach(t),Mb=i(jd," forward method, overrides the "),Ec=s(jd,"CODE",{});var tF=a(Ec);Fb=i(tF,"__call__"),tF.forEach(t),xb=i(jd," special method."),jd.forEach(t),Rb=p(mt),y(kn.$$.fragment,mt),Lb=p(mt),y(vn.$$.fragment,mt),Eb=p(mt),y(Tn.$$.fragment,mt),zb=p(mt),y(yn.$$.fragment,mt),qb=p(mt),y(wn.$$.fragment,mt),mt.forEach(t),At.forEach(t),um=p(o),ko=s(o,"H2",{class:!0});var mu=a(ko);$n=s(mu,"A",{id:!0,class:!0,href:!0});var oF=a($n);zc=s(oF,"SPAN",{});var nF=a(zc);y(Na.$$.fragment,nF),nF.forEach(t),oF.forEach(t),Cb=p(mu),qc=s(mu,"SPAN",{});var sF=a(qc);jb=i(sF,"XLMRobertaForMultipleChoice"),sF.forEach(t),mu.forEach(t),fm=p(o),Ge=s(o,"DIV",{class:!0});var Ot=a(Ge);y(Ia.$$.fragment,Ot),Xb=p(Ot),Cc=s(Ot,"P",{});var aF=a(Cc);Pb=i(aF,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),aF.forEach(t),Ab=p(Ot),Da=s(Ot,"P",{});var uu=a(Da);Ob=i(uu,"This model inherits from "),Bl=s(uu,"A",{href:!0});var rF=a(Bl);Nb=i(rF,"PreTrainedModel"),rF.forEach(t),Ib=i(uu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uu.forEach(t),Db=p(Ot),Sa=s(Ot,"P",{});var fu=a(Sa);Sb=i(fu,"This model is also a PyTorch "),Wa=s(fu,"A",{href:!0,rel:!0});var iF=a(Wa);Wb=i(iF,"torch.nn.Module"),iF.forEach(t),Bb=i(fu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu.forEach(t),Ub=p(Ot),Ba=s(Ot,"P",{});var gu=a(Ba);Qb=i(gu,"This class overrides "),Ul=s(gu,"A",{href:!0});var lF=a(Ul);Hb=i(lF,"RobertaForMultipleChoice"),lF.forEach(t),Vb=i(gu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),gu.forEach(t),Jb=p(Ot),Mt=s(Ot,"DIV",{class:!0});var Ls=a(Mt);y(Ua.$$.fragment,Ls),Kb=p(Ls),vo=s(Ls,"P",{});var Xd=a(vo);Gb=i(Xd,"The "),Ql=s(Xd,"A",{href:!0});var dF=a(Ql);Yb=i(dF,"RobertaForMultipleChoice"),dF.forEach(t),Zb=i(Xd," forward method, overrides the "),jc=s(Xd,"CODE",{});var cF=a(jc);ek=i(cF,"__call__"),cF.forEach(t),tk=i(Xd," special method."),Xd.forEach(t),ok=p(Ls),y(Mn.$$.fragment,Ls),nk=p(Ls),y(Fn.$$.fragment,Ls),Ls.forEach(t),Ot.forEach(t),gm=p(o),To=s(o,"H2",{class:!0});var _u=a(To);xn=s(_u,"A",{id:!0,class:!0,href:!0});var pF=a(xn);Xc=s(pF,"SPAN",{});var hF=a(Xc);y(Qa.$$.fragment,hF),hF.forEach(t),pF.forEach(t),sk=p(_u),Pc=s(_u,"SPAN",{});var mF=a(Pc);ak=i(mF,"XLMRobertaForTokenClassification"),mF.forEach(t),_u.forEach(t),_m=p(o),Ye=s(o,"DIV",{class:!0});var Nt=a(Ye);y(Ha.$$.fragment,Nt),rk=p(Nt),Ac=s(Nt,"P",{});var uF=a(Ac);ik=i(uF,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),uF.forEach(t),lk=p(Nt),Va=s(Nt,"P",{});var bu=a(Va);dk=i(bu,"This model inherits from "),Hl=s(bu,"A",{href:!0});var fF=a(Hl);ck=i(fF,"PreTrainedModel"),fF.forEach(t),pk=i(bu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bu.forEach(t),hk=p(Nt),Ja=s(Nt,"P",{});var ku=a(Ja);mk=i(ku,"This model is also a PyTorch "),Ka=s(ku,"A",{href:!0,rel:!0});var gF=a(Ka);uk=i(gF,"torch.nn.Module"),gF.forEach(t),fk=i(ku,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ku.forEach(t),gk=p(Nt),Ga=s(Nt,"P",{});var vu=a(Ga);_k=i(vu,"This class overrides "),Vl=s(vu,"A",{href:!0});var _F=a(Vl);bk=i(_F,"RobertaForTokenClassification"),_F.forEach(t),kk=i(vu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),vu.forEach(t),vk=p(Nt),it=s(Nt,"DIV",{class:!0});var eo=a(it);y(Ya.$$.fragment,eo),Tk=p(eo),yo=s(eo,"P",{});var Pd=a(yo);yk=i(Pd,"The "),Jl=s(Pd,"A",{href:!0});var bF=a(Jl);wk=i(bF,"RobertaForTokenClassification"),bF.forEach(t),$k=i(Pd," forward method, overrides the "),Oc=s(Pd,"CODE",{});var kF=a(Oc);Mk=i(kF,"__call__"),kF.forEach(t),Fk=i(Pd," special method."),Pd.forEach(t),xk=p(eo),y(Rn.$$.fragment,eo),Rk=p(eo),y(Ln.$$.fragment,eo),Lk=p(eo),y(En.$$.fragment,eo),eo.forEach(t),Nt.forEach(t),bm=p(o),wo=s(o,"H2",{class:!0});var Tu=a(wo);zn=s(Tu,"A",{id:!0,class:!0,href:!0});var vF=a(zn);Nc=s(vF,"SPAN",{});var TF=a(Nc);y(Za.$$.fragment,TF),TF.forEach(t),vF.forEach(t),Ek=p(Tu),Ic=s(Tu,"SPAN",{});var yF=a(Ic);zk=i(yF,"XLMRobertaForQuestionAnswering"),yF.forEach(t),Tu.forEach(t),km=p(o),Ze=s(o,"DIV",{class:!0});var It=a(Ze);y(er.$$.fragment,It),qk=p(It),$o=s(It,"P",{});var Ad=a($o);Ck=i(Ad,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),Dc=s(Ad,"CODE",{});var wF=a(Dc);jk=i(wF,"span start logits"),wF.forEach(t),Xk=i(Ad," and "),Sc=s(Ad,"CODE",{});var $F=a(Sc);Pk=i($F,"span end logits"),$F.forEach(t),Ak=i(Ad,")."),Ad.forEach(t),Ok=p(It),tr=s(It,"P",{});var yu=a(tr);Nk=i(yu,"This model inherits from "),Kl=s(yu,"A",{href:!0});var MF=a(Kl);Ik=i(MF,"PreTrainedModel"),MF.forEach(t),Dk=i(yu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yu.forEach(t),Sk=p(It),or=s(It,"P",{});var wu=a(or);Wk=i(wu,"This model is also a PyTorch "),nr=s(wu,"A",{href:!0,rel:!0});var FF=a(nr);Bk=i(FF,"torch.nn.Module"),FF.forEach(t),Uk=i(wu,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wu.forEach(t),Qk=p(It),sr=s(It,"P",{});var $u=a(sr);Hk=i($u,"This class overrides "),Gl=s($u,"A",{href:!0});var xF=a(Gl);Vk=i(xF,"RobertaForQuestionAnswering"),xF.forEach(t),Jk=i($u,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),$u.forEach(t),Kk=p(It),lt=s(It,"DIV",{class:!0});var to=a(lt);y(ar.$$.fragment,to),Gk=p(to),Mo=s(to,"P",{});var Od=a(Mo);Yk=i(Od,"The "),Yl=s(Od,"A",{href:!0});var RF=a(Yl);Zk=i(RF,"RobertaForQuestionAnswering"),RF.forEach(t),ev=i(Od," forward method, overrides the "),Wc=s(Od,"CODE",{});var LF=a(Wc);tv=i(LF,"__call__"),LF.forEach(t),ov=i(Od," special method."),Od.forEach(t),nv=p(to),y(qn.$$.fragment,to),sv=p(to),y(Cn.$$.fragment,to),av=p(to),y(jn.$$.fragment,to),to.forEach(t),It.forEach(t),vm=p(o),Fo=s(o,"H2",{class:!0});var Mu=a(Fo);Xn=s(Mu,"A",{id:!0,class:!0,href:!0});var EF=a(Xn);Bc=s(EF,"SPAN",{});var zF=a(Bc);y(rr.$$.fragment,zF),zF.forEach(t),EF.forEach(t),rv=p(Mu),Uc=s(Mu,"SPAN",{});var qF=a(Uc);iv=i(qF,"TFXLMRobertaModel"),qF.forEach(t),Mu.forEach(t),Tm=p(o),Oe=s(o,"DIV",{class:!0});var ut=a(Oe);y(ir.$$.fragment,ut),lv=p(ut),Qc=s(ut,"P",{});var CF=a(Qc);dv=i(CF,"The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top."),CF.forEach(t),cv=p(ut),lr=s(ut,"P",{});var Fu=a(lr);pv=i(Fu,"This model inherits from "),Zl=s(Fu,"A",{href:!0});var jF=a(Zl);hv=i(jF,"TFPreTrainedModel"),jF.forEach(t),mv=i(Fu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu.forEach(t),uv=p(ut),dr=s(ut,"P",{});var xu=a(dr);fv=i(xu,"This model is also a "),cr=s(xu,"A",{href:!0,rel:!0});var XF=a(cr);gv=i(XF,"tf.keras.Model"),XF.forEach(t),_v=i(xu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xu.forEach(t),bv=p(ut),y(Pn.$$.fragment,ut),kv=p(ut),pr=s(ut,"P",{});var Ru=a(pr);vv=i(Ru,"This class overrides "),ed=s(Ru,"A",{href:!0});var PF=a(ed);Tv=i(PF,"TFRobertaModel"),PF.forEach(t),yv=i(Ru,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Ru.forEach(t),wv=p(ut),Ft=s(ut,"DIV",{class:!0});var Es=a(Ft);y(hr.$$.fragment,Es),$v=p(Es),xo=s(Es,"P",{});var Nd=a(xo);Mv=i(Nd,"The "),td=s(Nd,"A",{href:!0});var AF=a(td);Fv=i(AF,"TFRobertaModel"),AF.forEach(t),xv=i(Nd," forward method, overrides the "),Hc=s(Nd,"CODE",{});var OF=a(Hc);Rv=i(OF,"__call__"),OF.forEach(t),Lv=i(Nd," special method."),Nd.forEach(t),Ev=p(Es),y(An.$$.fragment,Es),zv=p(Es),y(On.$$.fragment,Es),Es.forEach(t),ut.forEach(t),ym=p(o),Ro=s(o,"H2",{class:!0});var Lu=a(Ro);Nn=s(Lu,"A",{id:!0,class:!0,href:!0});var NF=a(Nn);Vc=s(NF,"SPAN",{});var IF=a(Vc);y(mr.$$.fragment,IF),IF.forEach(t),NF.forEach(t),qv=p(Lu),Jc=s(Lu,"SPAN",{});var DF=a(Jc);Cv=i(DF,"TFXLMRobertaForMaskedLM"),DF.forEach(t),Lu.forEach(t),wm=p(o),Ne=s(o,"DIV",{class:!0});var ft=a(Ne);y(ur.$$.fragment,ft),jv=p(ft),fr=s(ft,"P",{});var Eu=a(fr);Xv=i(Eu,"XLM-RoBERTa Model with a "),Kc=s(Eu,"CODE",{});var SF=a(Kc);Pv=i(SF,"language modeling"),SF.forEach(t),Av=i(Eu," head on top."),Eu.forEach(t),Ov=p(ft),gr=s(ft,"P",{});var zu=a(gr);Nv=i(zu,"This model inherits from "),od=s(zu,"A",{href:!0});var WF=a(od);Iv=i(WF,"TFPreTrainedModel"),WF.forEach(t),Dv=i(zu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zu.forEach(t),Sv=p(ft),_r=s(ft,"P",{});var qu=a(_r);Wv=i(qu,"This model is also a "),br=s(qu,"A",{href:!0,rel:!0});var BF=a(br);Bv=i(BF,"tf.keras.Model"),BF.forEach(t),Uv=i(qu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),qu.forEach(t),Qv=p(ft),y(In.$$.fragment,ft),Hv=p(ft),kr=s(ft,"P",{});var Cu=a(kr);Vv=i(Cu,"This class overrides "),nd=s(Cu,"A",{href:!0});var UF=a(nd);Jv=i(UF,"TFRobertaForMaskedLM"),UF.forEach(t),Kv=i(Cu,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Cu.forEach(t),Gv=p(ft),dt=s(ft,"DIV",{class:!0});var oo=a(dt);y(vr.$$.fragment,oo),Yv=p(oo),Lo=s(oo,"P",{});var Id=a(Lo);Zv=i(Id,"The "),sd=s(Id,"A",{href:!0});var QF=a(sd);e1=i(QF,"TFRobertaForMaskedLM"),QF.forEach(t),t1=i(Id," forward method, overrides the "),Gc=s(Id,"CODE",{});var HF=a(Gc);o1=i(HF,"__call__"),HF.forEach(t),n1=i(Id," special method."),Id.forEach(t),s1=p(oo),y(Dn.$$.fragment,oo),a1=p(oo),y(Sn.$$.fragment,oo),r1=p(oo),y(Wn.$$.fragment,oo),oo.forEach(t),ft.forEach(t),$m=p(o),Eo=s(o,"H2",{class:!0});var ju=a(Eo);Bn=s(ju,"A",{id:!0,class:!0,href:!0});var VF=a(Bn);Yc=s(VF,"SPAN",{});var JF=a(Yc);y(Tr.$$.fragment,JF),JF.forEach(t),VF.forEach(t),i1=p(ju),Zc=s(ju,"SPAN",{});var KF=a(Zc);l1=i(KF,"TFXLMRobertaForSequenceClassification"),KF.forEach(t),ju.forEach(t),Mm=p(o),Ie=s(o,"DIV",{class:!0});var gt=a(Ie);y(yr.$$.fragment,gt),d1=p(gt),ep=s(gt,"P",{});var GF=a(ep);c1=i(GF,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),GF.forEach(t),p1=p(gt),wr=s(gt,"P",{});var Xu=a(wr);h1=i(Xu,"This model inherits from "),ad=s(Xu,"A",{href:!0});var YF=a(ad);m1=i(YF,"TFPreTrainedModel"),YF.forEach(t),u1=i(Xu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xu.forEach(t),f1=p(gt),$r=s(gt,"P",{});var Pu=a($r);g1=i(Pu,"This model is also a "),Mr=s(Pu,"A",{href:!0,rel:!0});var ZF=a(Mr);_1=i(ZF,"tf.keras.Model"),ZF.forEach(t),b1=i(Pu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pu.forEach(t),k1=p(gt),y(Un.$$.fragment,gt),v1=p(gt),Fr=s(gt,"P",{});var Au=a(Fr);T1=i(Au,"This class overrides "),rd=s(Au,"A",{href:!0});var e0=a(rd);y1=i(e0,"TFRobertaForSequenceClassification"),e0.forEach(t),w1=i(Au,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Au.forEach(t),$1=p(gt),ct=s(gt,"DIV",{class:!0});var no=a(ct);y(xr.$$.fragment,no),M1=p(no),zo=s(no,"P",{});var Dd=a(zo);F1=i(Dd,"The "),id=s(Dd,"A",{href:!0});var t0=a(id);x1=i(t0,"TFRobertaForSequenceClassification"),t0.forEach(t),R1=i(Dd," forward method, overrides the "),tp=s(Dd,"CODE",{});var o0=a(tp);L1=i(o0,"__call__"),o0.forEach(t),E1=i(Dd," special method."),Dd.forEach(t),z1=p(no),y(Qn.$$.fragment,no),q1=p(no),y(Hn.$$.fragment,no),C1=p(no),y(Vn.$$.fragment,no),no.forEach(t),gt.forEach(t),Fm=p(o),qo=s(o,"H2",{class:!0});var Ou=a(qo);Jn=s(Ou,"A",{id:!0,class:!0,href:!0});var n0=a(Jn);op=s(n0,"SPAN",{});var s0=a(op);y(Rr.$$.fragment,s0),s0.forEach(t),n0.forEach(t),j1=p(Ou),np=s(Ou,"SPAN",{});var a0=a(np);X1=i(a0,"TFXLMRobertaForMultipleChoice"),a0.forEach(t),Ou.forEach(t),xm=p(o),De=s(o,"DIV",{class:!0});var _t=a(De);y(Lr.$$.fragment,_t),P1=p(_t),sp=s(_t,"P",{});var r0=a(sp);A1=i(r0,`Roberta Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),r0.forEach(t),O1=p(_t),Er=s(_t,"P",{});var Nu=a(Er);N1=i(Nu,"This model inherits from "),ld=s(Nu,"A",{href:!0});var i0=a(ld);I1=i(i0,"TFPreTrainedModel"),i0.forEach(t),D1=i(Nu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nu.forEach(t),S1=p(_t),zr=s(_t,"P",{});var Iu=a(zr);W1=i(Iu,"This model is also a "),qr=s(Iu,"A",{href:!0,rel:!0});var l0=a(qr);B1=i(l0,"tf.keras.Model"),l0.forEach(t),U1=i(Iu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu.forEach(t),Q1=p(_t),y(Kn.$$.fragment,_t),H1=p(_t),Cr=s(_t,"P",{});var Du=a(Cr);V1=i(Du,"This class overrides "),dd=s(Du,"A",{href:!0});var d0=a(dd);J1=i(d0,"TFRobertaForMultipleChoice"),d0.forEach(t),K1=i(Du,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),Du.forEach(t),G1=p(_t),xt=s(_t,"DIV",{class:!0});var zs=a(xt);y(jr.$$.fragment,zs),Y1=p(zs),Co=s(zs,"P",{});var Sd=a(Co);Z1=i(Sd,"The "),cd=s(Sd,"A",{href:!0});var c0=a(cd);eT=i(c0,"TFRobertaForMultipleChoice"),c0.forEach(t),tT=i(Sd," forward method, overrides the "),ap=s(Sd,"CODE",{});var p0=a(ap);oT=i(p0,"__call__"),p0.forEach(t),nT=i(Sd," special method."),Sd.forEach(t),sT=p(zs),y(Gn.$$.fragment,zs),aT=p(zs),y(Yn.$$.fragment,zs),zs.forEach(t),_t.forEach(t),Rm=p(o),jo=s(o,"H2",{class:!0});var Su=a(jo);Zn=s(Su,"A",{id:!0,class:!0,href:!0});var h0=a(Zn);rp=s(h0,"SPAN",{});var m0=a(rp);y(Xr.$$.fragment,m0),m0.forEach(t),h0.forEach(t),rT=p(Su),ip=s(Su,"SPAN",{});var u0=a(ip);iT=i(u0,"TFXLMRobertaForTokenClassification"),u0.forEach(t),Su.forEach(t),Lm=p(o),Se=s(o,"DIV",{class:!0});var bt=a(Se);y(Pr.$$.fragment,bt),lT=p(bt),lp=s(bt,"P",{});var f0=a(lp);dT=i(f0,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),f0.forEach(t),cT=p(bt),Ar=s(bt,"P",{});var Wu=a(Ar);pT=i(Wu,"This model inherits from "),pd=s(Wu,"A",{href:!0});var g0=a(pd);hT=i(g0,"TFPreTrainedModel"),g0.forEach(t),mT=i(Wu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wu.forEach(t),uT=p(bt),Or=s(bt,"P",{});var Bu=a(Or);fT=i(Bu,"This model is also a "),Nr=s(Bu,"A",{href:!0,rel:!0});var _0=a(Nr);gT=i(_0,"tf.keras.Model"),_0.forEach(t),_T=i(Bu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu.forEach(t),bT=p(bt),y(es.$$.fragment,bt),kT=p(bt),Ir=s(bt,"P",{});var Uu=a(Ir);vT=i(Uu,"This class overrides "),hd=s(Uu,"A",{href:!0});var b0=a(hd);TT=i(b0,"TFRobertaForTokenClassification"),b0.forEach(t),yT=i(Uu,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Uu.forEach(t),wT=p(bt),pt=s(bt,"DIV",{class:!0});var so=a(pt);y(Dr.$$.fragment,so),$T=p(so),Xo=s(so,"P",{});var Wd=a(Xo);MT=i(Wd,"The "),md=s(Wd,"A",{href:!0});var k0=a(md);FT=i(k0,"TFRobertaForTokenClassification"),k0.forEach(t),xT=i(Wd," forward method, overrides the "),dp=s(Wd,"CODE",{});var v0=a(dp);RT=i(v0,"__call__"),v0.forEach(t),LT=i(Wd," special method."),Wd.forEach(t),ET=p(so),y(ts.$$.fragment,so),zT=p(so),y(os.$$.fragment,so),qT=p(so),y(ns.$$.fragment,so),so.forEach(t),bt.forEach(t),Em=p(o),Po=s(o,"H2",{class:!0});var Qu=a(Po);ss=s(Qu,"A",{id:!0,class:!0,href:!0});var T0=a(ss);cp=s(T0,"SPAN",{});var y0=a(cp);y(Sr.$$.fragment,y0),y0.forEach(t),T0.forEach(t),CT=p(Qu),pp=s(Qu,"SPAN",{});var w0=a(pp);jT=i(w0,"TFXLMRobertaForQuestionAnswering"),w0.forEach(t),Qu.forEach(t),zm=p(o),We=s(o,"DIV",{class:!0});var kt=a(We);y(Wr.$$.fragment,kt),XT=p(kt),Ao=s(kt,"P",{});var Bd=a(Ao);PT=i(Bd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),hp=s(Bd,"CODE",{});var $0=a(hp);AT=i($0,"span start logits"),$0.forEach(t),OT=i(Bd," and "),mp=s(Bd,"CODE",{});var M0=a(mp);NT=i(M0,"span end logits"),M0.forEach(t),IT=i(Bd,")."),Bd.forEach(t),DT=p(kt),Br=s(kt,"P",{});var Hu=a(Br);ST=i(Hu,"This model inherits from "),ud=s(Hu,"A",{href:!0});var F0=a(ud);WT=i(F0,"TFPreTrainedModel"),F0.forEach(t),BT=i(Hu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hu.forEach(t),UT=p(kt),Ur=s(kt,"P",{});var Vu=a(Ur);QT=i(Vu,"This model is also a "),Qr=s(Vu,"A",{href:!0,rel:!0});var x0=a(Qr);HT=i(x0,"tf.keras.Model"),x0.forEach(t),VT=i(Vu,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vu.forEach(t),JT=p(kt),y(as.$$.fragment,kt),KT=p(kt),Hr=s(kt,"P",{});var Ju=a(Hr);GT=i(Ju,"This class overrides "),up=s(Ju,"CODE",{});var R0=a(up);YT=i(R0,"TFRobertaForQuestionAnsweringSimple"),R0.forEach(t),ZT=i(Ju,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),Ju.forEach(t),ey=p(kt),ht=s(kt,"DIV",{class:!0});var ao=a(ht);y(Vr.$$.fragment,ao),ty=p(ao),Oo=s(ao,"P",{});var Ud=a(Oo);oy=i(Ud,"The "),fd=s(Ud,"A",{href:!0});var L0=a(fd);ny=i(L0,"TFRobertaForQuestionAnswering"),L0.forEach(t),sy=i(Ud," forward method, overrides the "),fp=s(Ud,"CODE",{});var E0=a(fp);ay=i(E0,"__call__"),E0.forEach(t),ry=i(Ud," special method."),Ud.forEach(t),iy=p(ao),y(rs.$$.fragment,ao),ly=p(ao),y(is.$$.fragment,ao),dy=p(ao),y(ls.$$.fragment,ao),ao.forEach(t),kt.forEach(t),qm=p(o),No=s(o,"H2",{class:!0});var Ku=a(No);ds=s(Ku,"A",{id:!0,class:!0,href:!0});var z0=a(ds);gp=s(z0,"SPAN",{});var q0=a(gp);y(Jr.$$.fragment,q0),q0.forEach(t),z0.forEach(t),cy=p(Ku),_p=s(Ku,"SPAN",{});var C0=a(_p);py=i(C0,"FlaxXLMRobertaModel"),C0.forEach(t),Ku.forEach(t),Cm=p(o),Be=s(o,"DIV",{class:!0});var vt=a(Be);y(Kr.$$.fragment,vt),hy=p(vt),Gr=s(vt,"P",{});var Gu=a(Gr);my=i(Gu,`The bare XLM-RoBERTa Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),gd=s(Gu,"A",{href:!0});var j0=a(gd);uy=i(j0,"FlaxPreTrainedModel"),j0.forEach(t),fy=i(Gu,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Gu.forEach(t),gy=p(vt),Yr=s(vt,"P",{});var Yu=a(Yr);_y=i(Yu,"This model is also a Flax Linen "),Zr=s(Yu,"A",{href:!0,rel:!0});var X0=a(Zr);by=i(X0,"flax.linen.Module"),X0.forEach(t),ky=i(Yu,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Yu.forEach(t),vy=p(vt),bp=s(vt,"P",{});var P0=a(bp);Ty=i(P0,"Finally, this model supports inherent JAX features such as:"),P0.forEach(t),yy=p(vt),St=s(vt,"UL",{});var qs=a(St);kp=s(qs,"LI",{});var A0=a(kp);ei=s(A0,"A",{href:!0,rel:!0});var O0=a(ei);wy=i(O0,"Just-In-Time (JIT) compilation"),O0.forEach(t),A0.forEach(t),$y=p(qs),vp=s(qs,"LI",{});var N0=a(vp);ti=s(N0,"A",{href:!0,rel:!0});var I0=a(ti);My=i(I0,"Automatic Differentiation"),I0.forEach(t),N0.forEach(t),Fy=p(qs),Tp=s(qs,"LI",{});var D0=a(Tp);oi=s(D0,"A",{href:!0,rel:!0});var S0=a(oi);xy=i(S0,"Vectorization"),S0.forEach(t),D0.forEach(t),Ry=p(qs),yp=s(qs,"LI",{});var W0=a(yp);ni=s(W0,"A",{href:!0,rel:!0});var B0=a(ni);Ly=i(B0,"Parallelization"),B0.forEach(t),W0.forEach(t),qs.forEach(t),Ey=p(vt),si=s(vt,"P",{});var Zu=a(si);zy=i(Zu,"This class overrides "),_d=s(Zu,"A",{href:!0});var U0=a(_d);qy=i(U0,"FlaxRobertaModel"),U0.forEach(t),Cy=i(Zu,`. Please check the superclass for the appropriate documentation alongside
usage examples.`),Zu.forEach(t),jy=p(vt),Rt=s(vt,"DIV",{class:!0});var Cs=a(Rt);y(ai.$$.fragment,Cs),Xy=p(Cs),Io=s(Cs,"P",{});var Qd=a(Io);Py=i(Qd,"The "),wp=s(Qd,"CODE",{});var Q0=a(wp);Ay=i(Q0,"FlaxRobertaPreTrainedModel"),Q0.forEach(t),Oy=i(Qd," forward method, overrides the "),$p=s(Qd,"CODE",{});var H0=a($p);Ny=i(H0,"__call__"),H0.forEach(t),Iy=i(Qd," special method."),Qd.forEach(t),Dy=p(Cs),y(cs.$$.fragment,Cs),Sy=p(Cs),y(ps.$$.fragment,Cs),Cs.forEach(t),vt.forEach(t),jm=p(o),Do=s(o,"H2",{class:!0});var ef=a(Do);hs=s(ef,"A",{id:!0,class:!0,href:!0});var V0=a(hs);Mp=s(V0,"SPAN",{});var J0=a(Mp);y(ri.$$.fragment,J0),J0.forEach(t),V0.forEach(t),Wy=p(ef),Fp=s(ef,"SPAN",{});var K0=a(Fp);By=i(K0,"FlaxXLMRobertaForMaskedLM"),K0.forEach(t),ef.forEach(t),Xm=p(o),Ue=s(o,"DIV",{class:!0});var Tt=a(Ue);y(ii.$$.fragment,Tt),Uy=p(Tt),So=s(Tt,"P",{});var Hd=a(So);Qy=i(Hd,"XLM-RoBERTa Model with a "),xp=s(Hd,"CODE",{});var G0=a(xp);Hy=i(G0,"language modeling"),G0.forEach(t),Vy=i(Hd,` head on top.
This model inherits from `),bd=s(Hd,"A",{href:!0});var Y0=a(bd);Jy=i(Y0,"FlaxPreTrainedModel"),Y0.forEach(t),Ky=i(Hd,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Hd.forEach(t),Gy=p(Tt),li=s(Tt,"P",{});var tf=a(li);Yy=i(tf,"This model is also a Flax Linen "),di=s(tf,"A",{href:!0,rel:!0});var Z0=a(di);Zy=i(Z0,"flax.linen.Module"),Z0.forEach(t),ew=i(tf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),tf.forEach(t),tw=p(Tt),Rp=s(Tt,"P",{});var ex=a(Rp);ow=i(ex,"Finally, this model supports inherent JAX features such as:"),ex.forEach(t),nw=p(Tt),Wt=s(Tt,"UL",{});var js=a(Wt);Lp=s(js,"LI",{});var tx=a(Lp);ci=s(tx,"A",{href:!0,rel:!0});var ox=a(ci);sw=i(ox,"Just-In-Time (JIT) compilation"),ox.forEach(t),tx.forEach(t),aw=p(js),Ep=s(js,"LI",{});var nx=a(Ep);pi=s(nx,"A",{href:!0,rel:!0});var sx=a(pi);rw=i(sx,"Automatic Differentiation"),sx.forEach(t),nx.forEach(t),iw=p(js),zp=s(js,"LI",{});var ax=a(zp);hi=s(ax,"A",{href:!0,rel:!0});var rx=a(hi);lw=i(rx,"Vectorization"),rx.forEach(t),ax.forEach(t),dw=p(js),qp=s(js,"LI",{});var ix=a(qp);mi=s(ix,"A",{href:!0,rel:!0});var lx=a(mi);cw=i(lx,"Parallelization"),lx.forEach(t),ix.forEach(t),js.forEach(t),pw=p(Tt),ui=s(Tt,"P",{});var of=a(ui);hw=i(of,"This class overrides "),kd=s(of,"A",{href:!0});var dx=a(kd);mw=i(dx,"FlaxRobertaForMaskedLM"),dx.forEach(t),uw=i(of,`. Please check the superclass for the appropriate documentation
alongside usage examples.`),of.forEach(t),fw=p(Tt),Lt=s(Tt,"DIV",{class:!0});var Xs=a(Lt);y(fi.$$.fragment,Xs),gw=p(Xs),Wo=s(Xs,"P",{});var Vd=a(Wo);_w=i(Vd,"The "),Cp=s(Vd,"CODE",{});var cx=a(Cp);bw=i(cx,"FlaxRobertaPreTrainedModel"),cx.forEach(t),kw=i(Vd," forward method, overrides the "),jp=s(Vd,"CODE",{});var px=a(jp);vw=i(px,"__call__"),px.forEach(t),Tw=i(Vd," special method."),Vd.forEach(t),yw=p(Xs),y(ms.$$.fragment,Xs),ww=p(Xs),y(us.$$.fragment,Xs),Xs.forEach(t),Tt.forEach(t),Pm=p(o),Bo=s(o,"H2",{class:!0});var nf=a(Bo);fs=s(nf,"A",{id:!0,class:!0,href:!0});var hx=a(fs);Xp=s(hx,"SPAN",{});var mx=a(Xp);y(gi.$$.fragment,mx),mx.forEach(t),hx.forEach(t),$w=p(nf),Pp=s(nf,"SPAN",{});var ux=a(Pp);Mw=i(ux,"FlaxXLMRobertaForSequenceClassification"),ux.forEach(t),nf.forEach(t),Am=p(o),Ce=s(o,"DIV",{class:!0});var tt=a(Ce);y(_i.$$.fragment,tt),Fw=p(tt),Ap=s(tt,"P",{});var fx=a(Ap);xw=i(fx,`XLM-RoBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),fx.forEach(t),Rw=p(tt),bi=s(tt,"P",{});var sf=a(bi);Lw=i(sf,"This model inherits from "),vd=s(sf,"A",{href:!0});var gx=a(vd);Ew=i(gx,"FlaxPreTrainedModel"),gx.forEach(t),zw=i(sf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),sf.forEach(t),qw=p(tt),ki=s(tt,"P",{});var af=a(ki);Cw=i(af,"This model is also a Flax Linen "),vi=s(af,"A",{href:!0,rel:!0});var _x=a(vi);jw=i(_x,"flax.linen.Module"),_x.forEach(t),Xw=i(af,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),af.forEach(t),Pw=p(tt),Op=s(tt,"P",{});var bx=a(Op);Aw=i(bx,"Finally, this model supports inherent JAX features such as:"),bx.forEach(t),Ow=p(tt),Bt=s(tt,"UL",{});var Ps=a(Bt);Np=s(Ps,"LI",{});var kx=a(Np);Ti=s(kx,"A",{href:!0,rel:!0});var vx=a(Ti);Nw=i(vx,"Just-In-Time (JIT) compilation"),vx.forEach(t),kx.forEach(t),Iw=p(Ps),Ip=s(Ps,"LI",{});var Tx=a(Ip);yi=s(Tx,"A",{href:!0,rel:!0});var yx=a(yi);Dw=i(yx,"Automatic Differentiation"),yx.forEach(t),Tx.forEach(t),Sw=p(Ps),Dp=s(Ps,"LI",{});var wx=a(Dp);wi=s(wx,"A",{href:!0,rel:!0});var $x=a(wi);Ww=i($x,"Vectorization"),$x.forEach(t),wx.forEach(t),Bw=p(Ps),Sp=s(Ps,"LI",{});var Mx=a(Sp);$i=s(Mx,"A",{href:!0,rel:!0});var Fx=a($i);Uw=i(Fx,"Parallelization"),Fx.forEach(t),Mx.forEach(t),Ps.forEach(t),Qw=p(tt),Mi=s(tt,"P",{});var rf=a(Mi);Hw=i(rf,"This class overrides "),Td=s(rf,"A",{href:!0});var xx=a(Td);Vw=i(xx,"FlaxRobertaForSequenceClassification"),xx.forEach(t),Jw=i(rf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),rf.forEach(t),Kw=p(tt),Et=s(tt,"DIV",{class:!0});var As=a(Et);y(Fi.$$.fragment,As),Gw=p(As),Uo=s(As,"P",{});var Jd=a(Uo);Yw=i(Jd,"The "),Wp=s(Jd,"CODE",{});var Rx=a(Wp);Zw=i(Rx,"FlaxRobertaPreTrainedModel"),Rx.forEach(t),e$=i(Jd," forward method, overrides the "),Bp=s(Jd,"CODE",{});var Lx=a(Bp);t$=i(Lx,"__call__"),Lx.forEach(t),o$=i(Jd," special method."),Jd.forEach(t),n$=p(As),y(gs.$$.fragment,As),s$=p(As),y(_s.$$.fragment,As),As.forEach(t),tt.forEach(t),Om=p(o),Qo=s(o,"H2",{class:!0});var lf=a(Qo);bs=s(lf,"A",{id:!0,class:!0,href:!0});var Ex=a(bs);Up=s(Ex,"SPAN",{});var zx=a(Up);y(xi.$$.fragment,zx),zx.forEach(t),Ex.forEach(t),a$=p(lf),Qp=s(lf,"SPAN",{});var qx=a(Qp);r$=i(qx,"FlaxXLMRobertaForMultipleChoice"),qx.forEach(t),lf.forEach(t),Nm=p(o),je=s(o,"DIV",{class:!0});var ot=a(je);y(Ri.$$.fragment,ot),i$=p(ot),Hp=s(ot,"P",{});var Cx=a(Hp);l$=i(Cx,`XLM-RoBERTa Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cx.forEach(t),d$=p(ot),Li=s(ot,"P",{});var df=a(Li);c$=i(df,"This model inherits from "),yd=s(df,"A",{href:!0});var jx=a(yd);p$=i(jx,"FlaxPreTrainedModel"),jx.forEach(t),h$=i(df,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),df.forEach(t),m$=p(ot),Ei=s(ot,"P",{});var cf=a(Ei);u$=i(cf,"This model is also a Flax Linen "),zi=s(cf,"A",{href:!0,rel:!0});var Xx=a(zi);f$=i(Xx,"flax.linen.Module"),Xx.forEach(t),g$=i(cf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),cf.forEach(t),_$=p(ot),Vp=s(ot,"P",{});var Px=a(Vp);b$=i(Px,"Finally, this model supports inherent JAX features such as:"),Px.forEach(t),k$=p(ot),Ut=s(ot,"UL",{});var Os=a(Ut);Jp=s(Os,"LI",{});var Ax=a(Jp);qi=s(Ax,"A",{href:!0,rel:!0});var Ox=a(qi);v$=i(Ox,"Just-In-Time (JIT) compilation"),Ox.forEach(t),Ax.forEach(t),T$=p(Os),Kp=s(Os,"LI",{});var Nx=a(Kp);Ci=s(Nx,"A",{href:!0,rel:!0});var Ix=a(Ci);y$=i(Ix,"Automatic Differentiation"),Ix.forEach(t),Nx.forEach(t),w$=p(Os),Gp=s(Os,"LI",{});var Dx=a(Gp);ji=s(Dx,"A",{href:!0,rel:!0});var Sx=a(ji);$$=i(Sx,"Vectorization"),Sx.forEach(t),Dx.forEach(t),M$=p(Os),Yp=s(Os,"LI",{});var Wx=a(Yp);Xi=s(Wx,"A",{href:!0,rel:!0});var Bx=a(Xi);F$=i(Bx,"Parallelization"),Bx.forEach(t),Wx.forEach(t),Os.forEach(t),x$=p(ot),Pi=s(ot,"P",{});var pf=a(Pi);R$=i(pf,"This class overrides "),wd=s(pf,"A",{href:!0});var Ux=a(wd);L$=i(Ux,"FlaxRobertaForMultipleChoice"),Ux.forEach(t),E$=i(pf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),pf.forEach(t),z$=p(ot),zt=s(ot,"DIV",{class:!0});var Ns=a(zt);y(Ai.$$.fragment,Ns),q$=p(Ns),Ho=s(Ns,"P",{});var Kd=a(Ho);C$=i(Kd,"The "),Zp=s(Kd,"CODE",{});var Qx=a(Zp);j$=i(Qx,"FlaxRobertaPreTrainedModel"),Qx.forEach(t),X$=i(Kd," forward method, overrides the "),eh=s(Kd,"CODE",{});var Hx=a(eh);P$=i(Hx,"__call__"),Hx.forEach(t),A$=i(Kd," special method."),Kd.forEach(t),O$=p(Ns),y(ks.$$.fragment,Ns),N$=p(Ns),y(vs.$$.fragment,Ns),Ns.forEach(t),ot.forEach(t),Im=p(o),Vo=s(o,"H2",{class:!0});var hf=a(Vo);Ts=s(hf,"A",{id:!0,class:!0,href:!0});var Vx=a(Ts);th=s(Vx,"SPAN",{});var Jx=a(th);y(Oi.$$.fragment,Jx),Jx.forEach(t),Vx.forEach(t),I$=p(hf),oh=s(hf,"SPAN",{});var Kx=a(oh);D$=i(Kx,"FlaxXLMRobertaForTokenClassification"),Kx.forEach(t),hf.forEach(t),Dm=p(o),Xe=s(o,"DIV",{class:!0});var nt=a(Xe);y(Ni.$$.fragment,nt),S$=p(nt),nh=s(nt,"P",{});var Gx=a(nh);W$=i(Gx,`XLM-RoBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Gx.forEach(t),B$=p(nt),Ii=s(nt,"P",{});var mf=a(Ii);U$=i(mf,"This model inherits from "),$d=s(mf,"A",{href:!0});var Yx=a($d);Q$=i(Yx,"FlaxPreTrainedModel"),Yx.forEach(t),H$=i(mf,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mf.forEach(t),V$=p(nt),Di=s(nt,"P",{});var uf=a(Di);J$=i(uf,"This model is also a Flax Linen "),Si=s(uf,"A",{href:!0,rel:!0});var Zx=a(Si);K$=i(Zx,"flax.linen.Module"),Zx.forEach(t),G$=i(uf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uf.forEach(t),Y$=p(nt),sh=s(nt,"P",{});var eR=a(sh);Z$=i(eR,"Finally, this model supports inherent JAX features such as:"),eR.forEach(t),e2=p(nt),Qt=s(nt,"UL",{});var Is=a(Qt);ah=s(Is,"LI",{});var tR=a(ah);Wi=s(tR,"A",{href:!0,rel:!0});var oR=a(Wi);t2=i(oR,"Just-In-Time (JIT) compilation"),oR.forEach(t),tR.forEach(t),o2=p(Is),rh=s(Is,"LI",{});var nR=a(rh);Bi=s(nR,"A",{href:!0,rel:!0});var sR=a(Bi);n2=i(sR,"Automatic Differentiation"),sR.forEach(t),nR.forEach(t),s2=p(Is),ih=s(Is,"LI",{});var aR=a(ih);Ui=s(aR,"A",{href:!0,rel:!0});var rR=a(Ui);a2=i(rR,"Vectorization"),rR.forEach(t),aR.forEach(t),r2=p(Is),lh=s(Is,"LI",{});var iR=a(lh);Qi=s(iR,"A",{href:!0,rel:!0});var lR=a(Qi);i2=i(lR,"Parallelization"),lR.forEach(t),iR.forEach(t),Is.forEach(t),l2=p(nt),Hi=s(nt,"P",{});var ff=a(Hi);d2=i(ff,"This class overrides "),Md=s(ff,"A",{href:!0});var dR=a(Md);c2=i(dR,"FlaxRobertaForTokenClassification"),dR.forEach(t),p2=i(ff,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),ff.forEach(t),h2=p(nt),qt=s(nt,"DIV",{class:!0});var Ds=a(qt);y(Vi.$$.fragment,Ds),m2=p(Ds),Jo=s(Ds,"P",{});var Gd=a(Jo);u2=i(Gd,"The "),dh=s(Gd,"CODE",{});var cR=a(dh);f2=i(cR,"FlaxRobertaPreTrainedModel"),cR.forEach(t),g2=i(Gd," forward method, overrides the "),ch=s(Gd,"CODE",{});var pR=a(ch);_2=i(pR,"__call__"),pR.forEach(t),b2=i(Gd," special method."),Gd.forEach(t),k2=p(Ds),y(ys.$$.fragment,Ds),v2=p(Ds),y(ws.$$.fragment,Ds),Ds.forEach(t),nt.forEach(t),Sm=p(o),Ko=s(o,"H2",{class:!0});var gf=a(Ko);$s=s(gf,"A",{id:!0,class:!0,href:!0});var hR=a($s);ph=s(hR,"SPAN",{});var mR=a(ph);y(Ji.$$.fragment,mR),mR.forEach(t),hR.forEach(t),T2=p(gf),hh=s(gf,"SPAN",{});var uR=a(hh);y2=i(uR,"FlaxXLMRobertaForQuestionAnswering"),uR.forEach(t),gf.forEach(t),Wm=p(o),Pe=s(o,"DIV",{class:!0});var st=a(Pe);y(Ki.$$.fragment,st),w2=p(st),Go=s(st,"P",{});var Yd=a(Go);$2=i(Yd,`XLM-RoBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a
linear layers on top of the hidden-states output to compute `),mh=s(Yd,"CODE",{});var fR=a(mh);M2=i(fR,"span start logits"),fR.forEach(t),F2=i(Yd," and "),uh=s(Yd,"CODE",{});var gR=a(uh);x2=i(gR,"span end logits"),gR.forEach(t),R2=i(Yd,")."),Yd.forEach(t),L2=p(st),Gi=s(st,"P",{});var _f=a(Gi);E2=i(_f,"This model inherits from "),Fd=s(_f,"A",{href:!0});var _R=a(Fd);z2=i(_R,"FlaxPreTrainedModel"),_R.forEach(t),q2=i(_f,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),_f.forEach(t),C2=p(st),Yi=s(st,"P",{});var bf=a(Yi);j2=i(bf,"This model is also a Flax Linen "),Zi=s(bf,"A",{href:!0,rel:!0});var bR=a(Zi);X2=i(bR,"flax.linen.Module"),bR.forEach(t),P2=i(bf,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bf.forEach(t),A2=p(st),fh=s(st,"P",{});var kR=a(fh);O2=i(kR,"Finally, this model supports inherent JAX features such as:"),kR.forEach(t),N2=p(st),Ht=s(st,"UL",{});var Ss=a(Ht);gh=s(Ss,"LI",{});var vR=a(gh);el=s(vR,"A",{href:!0,rel:!0});var TR=a(el);I2=i(TR,"Just-In-Time (JIT) compilation"),TR.forEach(t),vR.forEach(t),D2=p(Ss),_h=s(Ss,"LI",{});var yR=a(_h);tl=s(yR,"A",{href:!0,rel:!0});var wR=a(tl);S2=i(wR,"Automatic Differentiation"),wR.forEach(t),yR.forEach(t),W2=p(Ss),bh=s(Ss,"LI",{});var $R=a(bh);ol=s($R,"A",{href:!0,rel:!0});var MR=a(ol);B2=i(MR,"Vectorization"),MR.forEach(t),$R.forEach(t),U2=p(Ss),kh=s(Ss,"LI",{});var FR=a(kh);nl=s(FR,"A",{href:!0,rel:!0});var xR=a(nl);Q2=i(xR,"Parallelization"),xR.forEach(t),FR.forEach(t),Ss.forEach(t),H2=p(st),sl=s(st,"P",{});var kf=a(sl);V2=i(kf,"This class overrides "),xd=s(kf,"A",{href:!0});var RR=a(xd);J2=i(RR,"FlaxRobertaForQuestionAnswering"),RR.forEach(t),K2=i(kf,`. Please check the superclass for the appropriate
documentation alongside usage examples.`),kf.forEach(t),G2=p(st),Ct=s(st,"DIV",{class:!0});var Ws=a(Ct);y(al.$$.fragment,Ws),Y2=p(Ws),Yo=s(Ws,"P",{});var Zd=a(Yo);Z2=i(Zd,"The "),vh=s(Zd,"CODE",{});var LR=a(vh);eM=i(LR,"FlaxRobertaPreTrainedModel"),LR.forEach(t),tM=i(Zd," forward method, overrides the "),Th=s(Zd,"CODE",{});var ER=a(Th);oM=i(ER,"__call__"),ER.forEach(t),nM=i(Zd," special method."),Zd.forEach(t),sM=p(Ws),y(Ms.$$.fragment,Ws),aM=p(Ws),y(Fs.$$.fragment,Ws),Ws.forEach(t),st.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(A4)),u(m,"id","xlmroberta"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#xlmroberta"),u(h,"class","relative group"),u(Y,"id","overview"),u(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Y,"href","#overview"),u(E,"class","relative group"),u(te,"href","https://arxiv.org/abs/1911.02116"),u(te,"rel","nofollow"),u(v,"href","roberta"),u(we,"href","https://huggingface.co/stefan-it"),u(we,"rel","nofollow"),u(j,"href","https://github.com/pytorch/fairseq/tree/master/examples/xlmr"),u(j,"rel","nofollow"),u(ye,"id","transformers.XLMRobertaConfig"),u(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ye,"href","#transformers.XLMRobertaConfig"),u(N,"class","relative group"),u(vl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaConfig"),u(Us,"href","https://huggingface.co/xlm-roberta-base"),u(Us,"rel","nofollow"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(on,"id","transformers.XLMRobertaTokenizer"),u(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(on,"href","#transformers.XLMRobertaTokenizer"),u(lo,"class","relative group"),u(Tl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),u(yl,"href","/docs/transformers/v4.21.1/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(Vs,"href","https://github.com/google/sentencepiece"),u(Vs,"rel","nofollow"),u(wl,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(nn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fl,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(an,"id","transformers.XLMRobertaTokenizerFast"),u(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(an,"href","#transformers.XLMRobertaTokenizerFast"),u(co,"class","relative group"),u(xl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaTokenizer"),u(Rl,"href","/docs/transformers/v4.21.1/en/model_doc/xlnet#transformers.XLNetTokenizer"),u(sa,"href","https://huggingface.co/docs/tokenizers/python/latest/components.html?highlight=BPE#models"),u(sa,"rel","nofollow"),u(Ll,"href","/docs/transformers/v4.21.1/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ln,"id","transformers.XLMRobertaModel"),u(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ln,"href","#transformers.XLMRobertaModel"),u(po,"class","relative group"),u(ql,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(ma,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(ma,"rel","nofollow"),u(Cl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaModel"),u(jl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaModel"),u(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pn,"id","transformers.XLMRobertaForCausalLM"),u(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pn,"href","#transformers.XLMRobertaForCausalLM"),u(mo,"class","relative group"),u(Xl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Ta,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ta,"rel","nofollow"),u(Pl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForCausalLM"),u(Al,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForCausalLM"),u($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(un,"id","transformers.XLMRobertaForMaskedLM"),u(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(un,"href","#transformers.XLMRobertaForMaskedLM"),u(fo,"class","relative group"),u(Ol,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(La,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(La,"rel","nofollow"),u(Nl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(Il,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForMaskedLM"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bn,"id","transformers.XLMRobertaForSequenceClassification"),u(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bn,"href","#transformers.XLMRobertaForSequenceClassification"),u(_o,"class","relative group"),u(Dl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Pa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Pa,"rel","nofollow"),u(Sl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(Wl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForSequenceClassification"),u(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($n,"id","transformers.XLMRobertaForMultipleChoice"),u($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($n,"href","#transformers.XLMRobertaForMultipleChoice"),u(ko,"class","relative group"),u(Bl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Wa,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Wa,"rel","nofollow"),u(Ul,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u(Ql,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForMultipleChoice"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xn,"id","transformers.XLMRobertaForTokenClassification"),u(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(xn,"href","#transformers.XLMRobertaForTokenClassification"),u(To,"class","relative group"),u(Hl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(Ka,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ka,"rel","nofollow"),u(Vl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(Jl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForTokenClassification"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zn,"id","transformers.XLMRobertaForQuestionAnswering"),u(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(zn,"href","#transformers.XLMRobertaForQuestionAnswering"),u(wo,"class","relative group"),u(Kl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.PreTrainedModel"),u(nr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nr,"rel","nofollow"),u(Gl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(Yl,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.RobertaForQuestionAnswering"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xn,"id","transformers.TFXLMRobertaModel"),u(Xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xn,"href","#transformers.TFXLMRobertaModel"),u(Fo,"class","relative group"),u(Zl,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(cr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(cr,"rel","nofollow"),u(ed,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaModel"),u(td,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaModel"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Nn,"id","transformers.TFXLMRobertaForMaskedLM"),u(Nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Nn,"href","#transformers.TFXLMRobertaForMaskedLM"),u(Ro,"class","relative group"),u(od,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(br,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(br,"rel","nofollow"),u(nd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(sd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForMaskedLM"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bn,"id","transformers.TFXLMRobertaForSequenceClassification"),u(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Bn,"href","#transformers.TFXLMRobertaForSequenceClassification"),u(Eo,"class","relative group"),u(ad,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Mr,"rel","nofollow"),u(rd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(id,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForSequenceClassification"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"id","transformers.TFXLMRobertaForMultipleChoice"),u(Jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Jn,"href","#transformers.TFXLMRobertaForMultipleChoice"),u(qo,"class","relative group"),u(ld,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(qr,"rel","nofollow"),u(dd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(cd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForMultipleChoice"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zn,"id","transformers.TFXLMRobertaForTokenClassification"),u(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Zn,"href","#transformers.TFXLMRobertaForTokenClassification"),u(jo,"class","relative group"),u(pd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Nr,"rel","nofollow"),u(hd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(md,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForTokenClassification"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ss,"id","transformers.TFXLMRobertaForQuestionAnswering"),u(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ss,"href","#transformers.TFXLMRobertaForQuestionAnswering"),u(Po,"class","relative group"),u(ud,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.TFPreTrainedModel"),u(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Qr,"rel","nofollow"),u(fd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.TFRobertaForQuestionAnswering"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ds,"id","transformers.FlaxXLMRobertaModel"),u(ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ds,"href","#transformers.FlaxXLMRobertaModel"),u(No,"class","relative group"),u(gd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zr,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zr,"rel","nofollow"),u(ei,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ei,"rel","nofollow"),u(ti,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ti,"rel","nofollow"),u(oi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(oi,"rel","nofollow"),u(ni,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ni,"rel","nofollow"),u(_d,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaModel"),u(Rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(hs,"id","transformers.FlaxXLMRobertaForMaskedLM"),u(hs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(hs,"href","#transformers.FlaxXLMRobertaForMaskedLM"),u(Do,"class","relative group"),u(bd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(di,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(di,"rel","nofollow"),u(ci,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ci,"rel","nofollow"),u(pi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(pi,"rel","nofollow"),u(hi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(hi,"rel","nofollow"),u(mi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(mi,"rel","nofollow"),u(kd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fs,"id","transformers.FlaxXLMRobertaForSequenceClassification"),u(fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fs,"href","#transformers.FlaxXLMRobertaForSequenceClassification"),u(Bo,"class","relative group"),u(vd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(vi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(vi,"rel","nofollow"),u(Ti,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ti,"rel","nofollow"),u(yi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(yi,"rel","nofollow"),u(wi,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(wi,"rel","nofollow"),u($i,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u($i,"rel","nofollow"),u(Td,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaForSequenceClassification"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bs,"id","transformers.FlaxXLMRobertaForMultipleChoice"),u(bs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(bs,"href","#transformers.FlaxXLMRobertaForMultipleChoice"),u(Qo,"class","relative group"),u(yd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(zi,"rel","nofollow"),u(qi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(qi,"rel","nofollow"),u(Ci,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ci,"rel","nofollow"),u(ji,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ji,"rel","nofollow"),u(Xi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xi,"rel","nofollow"),u(wd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaForMultipleChoice"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ts,"id","transformers.FlaxXLMRobertaForTokenClassification"),u(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ts,"href","#transformers.FlaxXLMRobertaForTokenClassification"),u(Vo,"class","relative group"),u($d,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Si,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Si,"rel","nofollow"),u(Wi,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Wi,"rel","nofollow"),u(Bi,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Bi,"rel","nofollow"),u(Ui,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Ui,"rel","nofollow"),u(Qi,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Qi,"rel","nofollow"),u(Md,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaForTokenClassification"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($s,"id","transformers.FlaxXLMRobertaForQuestionAnswering"),u($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($s,"href","#transformers.FlaxXLMRobertaForQuestionAnswering"),u(Ko,"class","relative group"),u(Fd,"href","/docs/transformers/v4.21.1/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Zi,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Zi,"rel","nofollow"),u(el,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(el,"rel","nofollow"),u(tl,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(tl,"rel","nofollow"),u(ol,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ol,"rel","nofollow"),u(nl,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(nl,"rel","nofollow"),u(xd,"href","/docs/transformers/v4.21.1/en/model_doc/roberta#transformers.FlaxRobertaForQuestionAnswering"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,k){e(document.head,d),b(o,g,k),b(o,h,k),e(h,m),e(m,_),w(l,_,null),e(h,f),e(h,R),e(R,ue),b(o,J,k),b(o,E,k),e(E,Y),e(Y,D),w(ee,D,null),e(E,fe),e(E,S),e(S,ge),b(o,ce,k),b(o,V,k),e(V,P),e(V,te),e(te,K),e(V,z),b(o,C,k),b(o,se,k),e(se,U),b(o,pe,k),b(o,ae,k),e(ae,W),e(W,_e),b(o,he,k),b(o,q,k),e(q,be),b(o,B,k),b(o,Z,k),e(Z,oe),e(oe,Q),e(oe,re),e(re,ke),e(oe,A),e(Z,ve),e(Z,I),e(I,Te),e(I,v),e(v,L),e(I,G),b(o,xe,k),b(o,me,k),e(me,O),e(me,we),e(we,Le),e(me,Ee),e(me,j),e(j,H),e(me,ze),b(o,Re,k),b(o,N,k),e(N,ye),e(ye,Fe),w(ne,Fe,null),e(N,qe),e(N,ec),e(ec,vf),b(o,tm,k),b(o,ro,k),w(Bs,ro,null),e(ro,Tf),e(ro,io),e(io,yf),e(io,vl),e(vl,wf),e(io,$f),e(io,Us),e(Us,Mf),e(io,Ff),b(o,om,k),b(o,lo,k),e(lo,on),e(on,tc),w(Qs,tc,null),e(lo,xf),e(lo,oc),e(oc,Rf),b(o,nm,k),b(o,Ae,k),w(Hs,Ae,null),e(Ae,Lf),e(Ae,Dt),e(Dt,Ef),e(Dt,Tl),e(Tl,zf),e(Dt,qf),e(Dt,yl),e(yl,Cf),e(Dt,jf),e(Dt,Vs),e(Vs,Xf),e(Dt,Pf),e(Ae,Af),e(Ae,Js),e(Js,Of),e(Js,wl),e(wl,Nf),e(Js,If),e(Ae,Df),e(Ae,Jt),w(Ks,Jt,null),e(Jt,Sf),e(Jt,nc),e(nc,Wf),e(Jt,Bf),e(Jt,Gs),e(Gs,$l),e($l,Uf),e($l,sc),e(sc,Qf),e(Gs,Hf),e(Gs,Ml),e(Ml,Vf),e(Ml,ac),e(ac,Jf),e(Ae,Kf),e(Ae,nn),w(Ys,nn,null),e(nn,Gf),e(nn,Zs),e(Zs,Yf),e(Zs,rc),e(rc,Zf),e(Zs,eg),e(Ae,tg),e(Ae,sn),w(ea,sn,null),e(sn,og),e(sn,ic),e(ic,ng),e(Ae,sg),e(Ae,Fl),w(ta,Fl,null),b(o,sm,k),b(o,co,k),e(co,an),e(an,lc),w(oa,lc,null),e(co,ag),e(co,dc),e(dc,rg),b(o,am,k),b(o,at,k),w(na,at,null),e(at,ig),e(at,yt),e(yt,lg),e(yt,cc),e(cc,dg),e(yt,cg),e(yt,xl),e(xl,pg),e(yt,hg),e(yt,Rl),e(Rl,mg),e(yt,ug),e(yt,sa),e(sa,fg),e(yt,gg),e(at,_g),e(at,aa),e(aa,bg),e(aa,Ll),e(Ll,kg),e(aa,vg),e(at,Tg),e(at,Kt),w(ra,Kt,null),e(Kt,yg),e(Kt,pc),e(pc,wg),e(Kt,$g),e(Kt,ia),e(ia,El),e(El,Mg),e(El,hc),e(hc,Fg),e(ia,xg),e(ia,zl),e(zl,Rg),e(zl,mc),e(mc,Lg),e(at,Eg),e(at,rn),w(la,rn,null),e(rn,zg),e(rn,uc),e(uc,qg),b(o,rm,k),b(o,po,k),e(po,ln),e(ln,fc),w(da,fc,null),e(po,Cg),e(po,gc),e(gc,jg),b(o,im,k),b(o,He,k),w(ca,He,null),e(He,Xg),e(He,_c),e(_c,Pg),e(He,Ag),e(He,pa),e(pa,Og),e(pa,ql),e(ql,Ng),e(pa,Ig),e(He,Dg),e(He,ha),e(ha,Sg),e(ha,ma),e(ma,Wg),e(ha,Bg),e(He,Ug),e(He,ua),e(ua,Qg),e(ua,Cl),e(Cl,Hg),e(ua,Vg),e(He,Jg),e(He,wt),w(fa,wt,null),e(wt,Kg),e(wt,ho),e(ho,Gg),e(ho,jl),e(jl,Yg),e(ho,Zg),e(ho,bc),e(bc,e_),e(ho,t_),e(wt,o_),w(dn,wt,null),e(wt,n_),w(cn,wt,null),b(o,lm,k),b(o,mo,k),e(mo,pn),e(pn,kc),w(ga,kc,null),e(mo,s_),e(mo,vc),e(vc,a_),b(o,dm,k),b(o,Ve,k),w(_a,Ve,null),e(Ve,r_),e(Ve,ba),e(ba,i_),e(ba,Tc),e(Tc,l_),e(ba,d_),e(Ve,c_),e(Ve,ka),e(ka,p_),e(ka,Xl),e(Xl,h_),e(ka,m_),e(Ve,u_),e(Ve,va),e(va,f_),e(va,Ta),e(Ta,g_),e(va,__),e(Ve,b_),e(Ve,ya),e(ya,k_),e(ya,Pl),e(Pl,v_),e(ya,T_),e(Ve,y_),e(Ve,$t),w(wa,$t,null),e($t,w_),e($t,uo),e(uo,$_),e(uo,Al),e(Al,M_),e(uo,F_),e(uo,yc),e(yc,x_),e(uo,R_),e($t,L_),w(hn,$t,null),e($t,E_),w(mn,$t,null),b(o,cm,k),b(o,fo,k),e(fo,un),e(un,wc),w($a,wc,null),e(fo,z_),e(fo,$c),e($c,q_),b(o,pm,k),b(o,Je,k),w(Ma,Je,null),e(Je,C_),e(Je,Fa),e(Fa,j_),e(Fa,Mc),e(Mc,X_),e(Fa,P_),e(Je,A_),e(Je,xa),e(xa,O_),e(xa,Ol),e(Ol,N_),e(xa,I_),e(Je,D_),e(Je,Ra),e(Ra,S_),e(Ra,La),e(La,W_),e(Ra,B_),e(Je,U_),e(Je,Ea),e(Ea,Q_),e(Ea,Nl),e(Nl,H_),e(Ea,V_),e(Je,J_),e(Je,rt),w(za,rt,null),e(rt,K_),e(rt,go),e(go,G_),e(go,Il),e(Il,Y_),e(go,Z_),e(go,Fc),e(Fc,eb),e(go,tb),e(rt,ob),w(fn,rt,null),e(rt,nb),w(gn,rt,null),e(rt,sb),w(_n,rt,null),b(o,hm,k),b(o,_o,k),e(_o,bn),e(bn,xc),w(qa,xc,null),e(_o,ab),e(_o,Rc),e(Rc,rb),b(o,mm,k),b(o,Ke,k),w(Ca,Ke,null),e(Ke,ib),e(Ke,Lc),e(Lc,lb),e(Ke,db),e(Ke,ja),e(ja,cb),e(ja,Dl),e(Dl,pb),e(ja,hb),e(Ke,mb),e(Ke,Xa),e(Xa,ub),e(Xa,Pa),e(Pa,fb),e(Xa,gb),e(Ke,_b),e(Ke,Aa),e(Aa,bb),e(Aa,Sl),e(Sl,kb),e(Aa,vb),e(Ke,Tb),e(Ke,Qe),w(Oa,Qe,null),e(Qe,yb),e(Qe,bo),e(bo,wb),e(bo,Wl),e(Wl,$b),e(bo,Mb),e(bo,Ec),e(Ec,Fb),e(bo,xb),e(Qe,Rb),w(kn,Qe,null),e(Qe,Lb),w(vn,Qe,null),e(Qe,Eb),w(Tn,Qe,null),e(Qe,zb),w(yn,Qe,null),e(Qe,qb),w(wn,Qe,null),b(o,um,k),b(o,ko,k),e(ko,$n),e($n,zc),w(Na,zc,null),e(ko,Cb),e(ko,qc),e(qc,jb),b(o,fm,k),b(o,Ge,k),w(Ia,Ge,null),e(Ge,Xb),e(Ge,Cc),e(Cc,Pb),e(Ge,Ab),e(Ge,Da),e(Da,Ob),e(Da,Bl),e(Bl,Nb),e(Da,Ib),e(Ge,Db),e(Ge,Sa),e(Sa,Sb),e(Sa,Wa),e(Wa,Wb),e(Sa,Bb),e(Ge,Ub),e(Ge,Ba),e(Ba,Qb),e(Ba,Ul),e(Ul,Hb),e(Ba,Vb),e(Ge,Jb),e(Ge,Mt),w(Ua,Mt,null),e(Mt,Kb),e(Mt,vo),e(vo,Gb),e(vo,Ql),e(Ql,Yb),e(vo,Zb),e(vo,jc),e(jc,ek),e(vo,tk),e(Mt,ok),w(Mn,Mt,null),e(Mt,nk),w(Fn,Mt,null),b(o,gm,k),b(o,To,k),e(To,xn),e(xn,Xc),w(Qa,Xc,null),e(To,sk),e(To,Pc),e(Pc,ak),b(o,_m,k),b(o,Ye,k),w(Ha,Ye,null),e(Ye,rk),e(Ye,Ac),e(Ac,ik),e(Ye,lk),e(Ye,Va),e(Va,dk),e(Va,Hl),e(Hl,ck),e(Va,pk),e(Ye,hk),e(Ye,Ja),e(Ja,mk),e(Ja,Ka),e(Ka,uk),e(Ja,fk),e(Ye,gk),e(Ye,Ga),e(Ga,_k),e(Ga,Vl),e(Vl,bk),e(Ga,kk),e(Ye,vk),e(Ye,it),w(Ya,it,null),e(it,Tk),e(it,yo),e(yo,yk),e(yo,Jl),e(Jl,wk),e(yo,$k),e(yo,Oc),e(Oc,Mk),e(yo,Fk),e(it,xk),w(Rn,it,null),e(it,Rk),w(Ln,it,null),e(it,Lk),w(En,it,null),b(o,bm,k),b(o,wo,k),e(wo,zn),e(zn,Nc),w(Za,Nc,null),e(wo,Ek),e(wo,Ic),e(Ic,zk),b(o,km,k),b(o,Ze,k),w(er,Ze,null),e(Ze,qk),e(Ze,$o),e($o,Ck),e($o,Dc),e(Dc,jk),e($o,Xk),e($o,Sc),e(Sc,Pk),e($o,Ak),e(Ze,Ok),e(Ze,tr),e(tr,Nk),e(tr,Kl),e(Kl,Ik),e(tr,Dk),e(Ze,Sk),e(Ze,or),e(or,Wk),e(or,nr),e(nr,Bk),e(or,Uk),e(Ze,Qk),e(Ze,sr),e(sr,Hk),e(sr,Gl),e(Gl,Vk),e(sr,Jk),e(Ze,Kk),e(Ze,lt),w(ar,lt,null),e(lt,Gk),e(lt,Mo),e(Mo,Yk),e(Mo,Yl),e(Yl,Zk),e(Mo,ev),e(Mo,Wc),e(Wc,tv),e(Mo,ov),e(lt,nv),w(qn,lt,null),e(lt,sv),w(Cn,lt,null),e(lt,av),w(jn,lt,null),b(o,vm,k),b(o,Fo,k),e(Fo,Xn),e(Xn,Bc),w(rr,Bc,null),e(Fo,rv),e(Fo,Uc),e(Uc,iv),b(o,Tm,k),b(o,Oe,k),w(ir,Oe,null),e(Oe,lv),e(Oe,Qc),e(Qc,dv),e(Oe,cv),e(Oe,lr),e(lr,pv),e(lr,Zl),e(Zl,hv),e(lr,mv),e(Oe,uv),e(Oe,dr),e(dr,fv),e(dr,cr),e(cr,gv),e(dr,_v),e(Oe,bv),w(Pn,Oe,null),e(Oe,kv),e(Oe,pr),e(pr,vv),e(pr,ed),e(ed,Tv),e(pr,yv),e(Oe,wv),e(Oe,Ft),w(hr,Ft,null),e(Ft,$v),e(Ft,xo),e(xo,Mv),e(xo,td),e(td,Fv),e(xo,xv),e(xo,Hc),e(Hc,Rv),e(xo,Lv),e(Ft,Ev),w(An,Ft,null),e(Ft,zv),w(On,Ft,null),b(o,ym,k),b(o,Ro,k),e(Ro,Nn),e(Nn,Vc),w(mr,Vc,null),e(Ro,qv),e(Ro,Jc),e(Jc,Cv),b(o,wm,k),b(o,Ne,k),w(ur,Ne,null),e(Ne,jv),e(Ne,fr),e(fr,Xv),e(fr,Kc),e(Kc,Pv),e(fr,Av),e(Ne,Ov),e(Ne,gr),e(gr,Nv),e(gr,od),e(od,Iv),e(gr,Dv),e(Ne,Sv),e(Ne,_r),e(_r,Wv),e(_r,br),e(br,Bv),e(_r,Uv),e(Ne,Qv),w(In,Ne,null),e(Ne,Hv),e(Ne,kr),e(kr,Vv),e(kr,nd),e(nd,Jv),e(kr,Kv),e(Ne,Gv),e(Ne,dt),w(vr,dt,null),e(dt,Yv),e(dt,Lo),e(Lo,Zv),e(Lo,sd),e(sd,e1),e(Lo,t1),e(Lo,Gc),e(Gc,o1),e(Lo,n1),e(dt,s1),w(Dn,dt,null),e(dt,a1),w(Sn,dt,null),e(dt,r1),w(Wn,dt,null),b(o,$m,k),b(o,Eo,k),e(Eo,Bn),e(Bn,Yc),w(Tr,Yc,null),e(Eo,i1),e(Eo,Zc),e(Zc,l1),b(o,Mm,k),b(o,Ie,k),w(yr,Ie,null),e(Ie,d1),e(Ie,ep),e(ep,c1),e(Ie,p1),e(Ie,wr),e(wr,h1),e(wr,ad),e(ad,m1),e(wr,u1),e(Ie,f1),e(Ie,$r),e($r,g1),e($r,Mr),e(Mr,_1),e($r,b1),e(Ie,k1),w(Un,Ie,null),e(Ie,v1),e(Ie,Fr),e(Fr,T1),e(Fr,rd),e(rd,y1),e(Fr,w1),e(Ie,$1),e(Ie,ct),w(xr,ct,null),e(ct,M1),e(ct,zo),e(zo,F1),e(zo,id),e(id,x1),e(zo,R1),e(zo,tp),e(tp,L1),e(zo,E1),e(ct,z1),w(Qn,ct,null),e(ct,q1),w(Hn,ct,null),e(ct,C1),w(Vn,ct,null),b(o,Fm,k),b(o,qo,k),e(qo,Jn),e(Jn,op),w(Rr,op,null),e(qo,j1),e(qo,np),e(np,X1),b(o,xm,k),b(o,De,k),w(Lr,De,null),e(De,P1),e(De,sp),e(sp,A1),e(De,O1),e(De,Er),e(Er,N1),e(Er,ld),e(ld,I1),e(Er,D1),e(De,S1),e(De,zr),e(zr,W1),e(zr,qr),e(qr,B1),e(zr,U1),e(De,Q1),w(Kn,De,null),e(De,H1),e(De,Cr),e(Cr,V1),e(Cr,dd),e(dd,J1),e(Cr,K1),e(De,G1),e(De,xt),w(jr,xt,null),e(xt,Y1),e(xt,Co),e(Co,Z1),e(Co,cd),e(cd,eT),e(Co,tT),e(Co,ap),e(ap,oT),e(Co,nT),e(xt,sT),w(Gn,xt,null),e(xt,aT),w(Yn,xt,null),b(o,Rm,k),b(o,jo,k),e(jo,Zn),e(Zn,rp),w(Xr,rp,null),e(jo,rT),e(jo,ip),e(ip,iT),b(o,Lm,k),b(o,Se,k),w(Pr,Se,null),e(Se,lT),e(Se,lp),e(lp,dT),e(Se,cT),e(Se,Ar),e(Ar,pT),e(Ar,pd),e(pd,hT),e(Ar,mT),e(Se,uT),e(Se,Or),e(Or,fT),e(Or,Nr),e(Nr,gT),e(Or,_T),e(Se,bT),w(es,Se,null),e(Se,kT),e(Se,Ir),e(Ir,vT),e(Ir,hd),e(hd,TT),e(Ir,yT),e(Se,wT),e(Se,pt),w(Dr,pt,null),e(pt,$T),e(pt,Xo),e(Xo,MT),e(Xo,md),e(md,FT),e(Xo,xT),e(Xo,dp),e(dp,RT),e(Xo,LT),e(pt,ET),w(ts,pt,null),e(pt,zT),w(os,pt,null),e(pt,qT),w(ns,pt,null),b(o,Em,k),b(o,Po,k),e(Po,ss),e(ss,cp),w(Sr,cp,null),e(Po,CT),e(Po,pp),e(pp,jT),b(o,zm,k),b(o,We,k),w(Wr,We,null),e(We,XT),e(We,Ao),e(Ao,PT),e(Ao,hp),e(hp,AT),e(Ao,OT),e(Ao,mp),e(mp,NT),e(Ao,IT),e(We,DT),e(We,Br),e(Br,ST),e(Br,ud),e(ud,WT),e(Br,BT),e(We,UT),e(We,Ur),e(Ur,QT),e(Ur,Qr),e(Qr,HT),e(Ur,VT),e(We,JT),w(as,We,null),e(We,KT),e(We,Hr),e(Hr,GT),e(Hr,up),e(up,YT),e(Hr,ZT),e(We,ey),e(We,ht),w(Vr,ht,null),e(ht,ty),e(ht,Oo),e(Oo,oy),e(Oo,fd),e(fd,ny),e(Oo,sy),e(Oo,fp),e(fp,ay),e(Oo,ry),e(ht,iy),w(rs,ht,null),e(ht,ly),w(is,ht,null),e(ht,dy),w(ls,ht,null),b(o,qm,k),b(o,No,k),e(No,ds),e(ds,gp),w(Jr,gp,null),e(No,cy),e(No,_p),e(_p,py),b(o,Cm,k),b(o,Be,k),w(Kr,Be,null),e(Be,hy),e(Be,Gr),e(Gr,my),e(Gr,gd),e(gd,uy),e(Gr,fy),e(Be,gy),e(Be,Yr),e(Yr,_y),e(Yr,Zr),e(Zr,by),e(Yr,ky),e(Be,vy),e(Be,bp),e(bp,Ty),e(Be,yy),e(Be,St),e(St,kp),e(kp,ei),e(ei,wy),e(St,$y),e(St,vp),e(vp,ti),e(ti,My),e(St,Fy),e(St,Tp),e(Tp,oi),e(oi,xy),e(St,Ry),e(St,yp),e(yp,ni),e(ni,Ly),e(Be,Ey),e(Be,si),e(si,zy),e(si,_d),e(_d,qy),e(si,Cy),e(Be,jy),e(Be,Rt),w(ai,Rt,null),e(Rt,Xy),e(Rt,Io),e(Io,Py),e(Io,wp),e(wp,Ay),e(Io,Oy),e(Io,$p),e($p,Ny),e(Io,Iy),e(Rt,Dy),w(cs,Rt,null),e(Rt,Sy),w(ps,Rt,null),b(o,jm,k),b(o,Do,k),e(Do,hs),e(hs,Mp),w(ri,Mp,null),e(Do,Wy),e(Do,Fp),e(Fp,By),b(o,Xm,k),b(o,Ue,k),w(ii,Ue,null),e(Ue,Uy),e(Ue,So),e(So,Qy),e(So,xp),e(xp,Hy),e(So,Vy),e(So,bd),e(bd,Jy),e(So,Ky),e(Ue,Gy),e(Ue,li),e(li,Yy),e(li,di),e(di,Zy),e(li,ew),e(Ue,tw),e(Ue,Rp),e(Rp,ow),e(Ue,nw),e(Ue,Wt),e(Wt,Lp),e(Lp,ci),e(ci,sw),e(Wt,aw),e(Wt,Ep),e(Ep,pi),e(pi,rw),e(Wt,iw),e(Wt,zp),e(zp,hi),e(hi,lw),e(Wt,dw),e(Wt,qp),e(qp,mi),e(mi,cw),e(Ue,pw),e(Ue,ui),e(ui,hw),e(ui,kd),e(kd,mw),e(ui,uw),e(Ue,fw),e(Ue,Lt),w(fi,Lt,null),e(Lt,gw),e(Lt,Wo),e(Wo,_w),e(Wo,Cp),e(Cp,bw),e(Wo,kw),e(Wo,jp),e(jp,vw),e(Wo,Tw),e(Lt,yw),w(ms,Lt,null),e(Lt,ww),w(us,Lt,null),b(o,Pm,k),b(o,Bo,k),e(Bo,fs),e(fs,Xp),w(gi,Xp,null),e(Bo,$w),e(Bo,Pp),e(Pp,Mw),b(o,Am,k),b(o,Ce,k),w(_i,Ce,null),e(Ce,Fw),e(Ce,Ap),e(Ap,xw),e(Ce,Rw),e(Ce,bi),e(bi,Lw),e(bi,vd),e(vd,Ew),e(bi,zw),e(Ce,qw),e(Ce,ki),e(ki,Cw),e(ki,vi),e(vi,jw),e(ki,Xw),e(Ce,Pw),e(Ce,Op),e(Op,Aw),e(Ce,Ow),e(Ce,Bt),e(Bt,Np),e(Np,Ti),e(Ti,Nw),e(Bt,Iw),e(Bt,Ip),e(Ip,yi),e(yi,Dw),e(Bt,Sw),e(Bt,Dp),e(Dp,wi),e(wi,Ww),e(Bt,Bw),e(Bt,Sp),e(Sp,$i),e($i,Uw),e(Ce,Qw),e(Ce,Mi),e(Mi,Hw),e(Mi,Td),e(Td,Vw),e(Mi,Jw),e(Ce,Kw),e(Ce,Et),w(Fi,Et,null),e(Et,Gw),e(Et,Uo),e(Uo,Yw),e(Uo,Wp),e(Wp,Zw),e(Uo,e$),e(Uo,Bp),e(Bp,t$),e(Uo,o$),e(Et,n$),w(gs,Et,null),e(Et,s$),w(_s,Et,null),b(o,Om,k),b(o,Qo,k),e(Qo,bs),e(bs,Up),w(xi,Up,null),e(Qo,a$),e(Qo,Qp),e(Qp,r$),b(o,Nm,k),b(o,je,k),w(Ri,je,null),e(je,i$),e(je,Hp),e(Hp,l$),e(je,d$),e(je,Li),e(Li,c$),e(Li,yd),e(yd,p$),e(Li,h$),e(je,m$),e(je,Ei),e(Ei,u$),e(Ei,zi),e(zi,f$),e(Ei,g$),e(je,_$),e(je,Vp),e(Vp,b$),e(je,k$),e(je,Ut),e(Ut,Jp),e(Jp,qi),e(qi,v$),e(Ut,T$),e(Ut,Kp),e(Kp,Ci),e(Ci,y$),e(Ut,w$),e(Ut,Gp),e(Gp,ji),e(ji,$$),e(Ut,M$),e(Ut,Yp),e(Yp,Xi),e(Xi,F$),e(je,x$),e(je,Pi),e(Pi,R$),e(Pi,wd),e(wd,L$),e(Pi,E$),e(je,z$),e(je,zt),w(Ai,zt,null),e(zt,q$),e(zt,Ho),e(Ho,C$),e(Ho,Zp),e(Zp,j$),e(Ho,X$),e(Ho,eh),e(eh,P$),e(Ho,A$),e(zt,O$),w(ks,zt,null),e(zt,N$),w(vs,zt,null),b(o,Im,k),b(o,Vo,k),e(Vo,Ts),e(Ts,th),w(Oi,th,null),e(Vo,I$),e(Vo,oh),e(oh,D$),b(o,Dm,k),b(o,Xe,k),w(Ni,Xe,null),e(Xe,S$),e(Xe,nh),e(nh,W$),e(Xe,B$),e(Xe,Ii),e(Ii,U$),e(Ii,$d),e($d,Q$),e(Ii,H$),e(Xe,V$),e(Xe,Di),e(Di,J$),e(Di,Si),e(Si,K$),e(Di,G$),e(Xe,Y$),e(Xe,sh),e(sh,Z$),e(Xe,e2),e(Xe,Qt),e(Qt,ah),e(ah,Wi),e(Wi,t2),e(Qt,o2),e(Qt,rh),e(rh,Bi),e(Bi,n2),e(Qt,s2),e(Qt,ih),e(ih,Ui),e(Ui,a2),e(Qt,r2),e(Qt,lh),e(lh,Qi),e(Qi,i2),e(Xe,l2),e(Xe,Hi),e(Hi,d2),e(Hi,Md),e(Md,c2),e(Hi,p2),e(Xe,h2),e(Xe,qt),w(Vi,qt,null),e(qt,m2),e(qt,Jo),e(Jo,u2),e(Jo,dh),e(dh,f2),e(Jo,g2),e(Jo,ch),e(ch,_2),e(Jo,b2),e(qt,k2),w(ys,qt,null),e(qt,v2),w(ws,qt,null),b(o,Sm,k),b(o,Ko,k),e(Ko,$s),e($s,ph),w(Ji,ph,null),e(Ko,T2),e(Ko,hh),e(hh,y2),b(o,Wm,k),b(o,Pe,k),w(Ki,Pe,null),e(Pe,w2),e(Pe,Go),e(Go,$2),e(Go,mh),e(mh,M2),e(Go,F2),e(Go,uh),e(uh,x2),e(Go,R2),e(Pe,L2),e(Pe,Gi),e(Gi,E2),e(Gi,Fd),e(Fd,z2),e(Gi,q2),e(Pe,C2),e(Pe,Yi),e(Yi,j2),e(Yi,Zi),e(Zi,X2),e(Yi,P2),e(Pe,A2),e(Pe,fh),e(fh,O2),e(Pe,N2),e(Pe,Ht),e(Ht,gh),e(gh,el),e(el,I2),e(Ht,D2),e(Ht,_h),e(_h,tl),e(tl,S2),e(Ht,W2),e(Ht,bh),e(bh,ol),e(ol,B2),e(Ht,U2),e(Ht,kh),e(kh,nl),e(nl,Q2),e(Pe,H2),e(Pe,sl),e(sl,V2),e(sl,xd),e(xd,J2),e(sl,K2),e(Pe,G2),e(Pe,Ct),w(al,Ct,null),e(Ct,Y2),e(Ct,Yo),e(Yo,Z2),e(Yo,vh),e(vh,eM),e(Yo,tM),e(Yo,Th),e(Th,oM),e(Yo,nM),e(Ct,sM),w(Ms,Ct,null),e(Ct,aM),w(Fs,Ct,null),Bm=!0},p(o,[k]){const rl={};k&2&&(rl.$$scope={dirty:k,ctx:o}),dn.$set(rl);const yh={};k&2&&(yh.$$scope={dirty:k,ctx:o}),cn.$set(yh);const wh={};k&2&&(wh.$$scope={dirty:k,ctx:o}),hn.$set(wh);const $h={};k&2&&($h.$$scope={dirty:k,ctx:o}),mn.$set($h);const il={};k&2&&(il.$$scope={dirty:k,ctx:o}),fn.$set(il);const Mh={};k&2&&(Mh.$$scope={dirty:k,ctx:o}),gn.$set(Mh);const Fh={};k&2&&(Fh.$$scope={dirty:k,ctx:o}),_n.$set(Fh);const xh={};k&2&&(xh.$$scope={dirty:k,ctx:o}),kn.$set(xh);const ll={};k&2&&(ll.$$scope={dirty:k,ctx:o}),vn.$set(ll);const Rh={};k&2&&(Rh.$$scope={dirty:k,ctx:o}),Tn.$set(Rh);const Lh={};k&2&&(Lh.$$scope={dirty:k,ctx:o}),yn.$set(Lh);const Eh={};k&2&&(Eh.$$scope={dirty:k,ctx:o}),wn.$set(Eh);const zh={};k&2&&(zh.$$scope={dirty:k,ctx:o}),Mn.$set(zh);const qh={};k&2&&(qh.$$scope={dirty:k,ctx:o}),Fn.$set(qh);const dl={};k&2&&(dl.$$scope={dirty:k,ctx:o}),Rn.$set(dl);const cl={};k&2&&(cl.$$scope={dirty:k,ctx:o}),Ln.$set(cl);const Ch={};k&2&&(Ch.$$scope={dirty:k,ctx:o}),En.$set(Ch);const pl={};k&2&&(pl.$$scope={dirty:k,ctx:o}),qn.$set(pl);const jh={};k&2&&(jh.$$scope={dirty:k,ctx:o}),Cn.$set(jh);const Zo={};k&2&&(Zo.$$scope={dirty:k,ctx:o}),jn.$set(Zo);const Xh={};k&2&&(Xh.$$scope={dirty:k,ctx:o}),Pn.$set(Xh);const Ph={};k&2&&(Ph.$$scope={dirty:k,ctx:o}),An.$set(Ph);const hl={};k&2&&(hl.$$scope={dirty:k,ctx:o}),On.$set(hl);const Ah={};k&2&&(Ah.$$scope={dirty:k,ctx:o}),In.$set(Ah);const Oh={};k&2&&(Oh.$$scope={dirty:k,ctx:o}),Dn.$set(Oh);const Nh={};k&2&&(Nh.$$scope={dirty:k,ctx:o}),Sn.$set(Nh);const ml={};k&2&&(ml.$$scope={dirty:k,ctx:o}),Wn.$set(ml);const en={};k&2&&(en.$$scope={dirty:k,ctx:o}),Un.$set(en);const Ih={};k&2&&(Ih.$$scope={dirty:k,ctx:o}),Qn.$set(Ih);const Dh={};k&2&&(Dh.$$scope={dirty:k,ctx:o}),Hn.$set(Dh);const ul={};k&2&&(ul.$$scope={dirty:k,ctx:o}),Vn.$set(ul);const Sh={};k&2&&(Sh.$$scope={dirty:k,ctx:o}),Kn.$set(Sh);const Wh={};k&2&&(Wh.$$scope={dirty:k,ctx:o}),Gn.$set(Wh);const Bh={};k&2&&(Bh.$$scope={dirty:k,ctx:o}),Yn.$set(Bh);const et={};k&2&&(et.$$scope={dirty:k,ctx:o}),es.$set(et);const Vt={};k&2&&(Vt.$$scope={dirty:k,ctx:o}),ts.$set(Vt);const Uh={};k&2&&(Uh.$$scope={dirty:k,ctx:o}),os.$set(Uh);const Qh={};k&2&&(Qh.$$scope={dirty:k,ctx:o}),ns.$set(Qh);const Hh={};k&2&&(Hh.$$scope={dirty:k,ctx:o}),as.$set(Hh);const fl={};k&2&&(fl.$$scope={dirty:k,ctx:o}),rs.$set(fl);const Vh={};k&2&&(Vh.$$scope={dirty:k,ctx:o}),is.$set(Vh);const tn={};k&2&&(tn.$$scope={dirty:k,ctx:o}),ls.$set(tn);const Jh={};k&2&&(Jh.$$scope={dirty:k,ctx:o}),cs.$set(Jh);const gl={};k&2&&(gl.$$scope={dirty:k,ctx:o}),ps.$set(gl);const Rd={};k&2&&(Rd.$$scope={dirty:k,ctx:o}),ms.$set(Rd);const Kh={};k&2&&(Kh.$$scope={dirty:k,ctx:o}),us.$set(Kh);const Ld={};k&2&&(Ld.$$scope={dirty:k,ctx:o}),gs.$set(Ld);const Gh={};k&2&&(Gh.$$scope={dirty:k,ctx:o}),_s.$set(Gh);const _l={};k&2&&(_l.$$scope={dirty:k,ctx:o}),ks.$set(_l);const bl={};k&2&&(bl.$$scope={dirty:k,ctx:o}),vs.$set(bl);const Yh={};k&2&&(Yh.$$scope={dirty:k,ctx:o}),ys.$set(Yh);const kl={};k&2&&(kl.$$scope={dirty:k,ctx:o}),ws.$set(kl);const Zh={};k&2&&(Zh.$$scope={dirty:k,ctx:o}),Ms.$set(Zh);const em={};k&2&&(em.$$scope={dirty:k,ctx:o}),Fs.$set(em)},i(o){Bm||($(l.$$.fragment,o),$(ee.$$.fragment,o),$(ne.$$.fragment,o),$(Bs.$$.fragment,o),$(Qs.$$.fragment,o),$(Hs.$$.fragment,o),$(Ks.$$.fragment,o),$(Ys.$$.fragment,o),$(ea.$$.fragment,o),$(ta.$$.fragment,o),$(oa.$$.fragment,o),$(na.$$.fragment,o),$(ra.$$.fragment,o),$(la.$$.fragment,o),$(da.$$.fragment,o),$(ca.$$.fragment,o),$(fa.$$.fragment,o),$(dn.$$.fragment,o),$(cn.$$.fragment,o),$(ga.$$.fragment,o),$(_a.$$.fragment,o),$(wa.$$.fragment,o),$(hn.$$.fragment,o),$(mn.$$.fragment,o),$($a.$$.fragment,o),$(Ma.$$.fragment,o),$(za.$$.fragment,o),$(fn.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(qa.$$.fragment,o),$(Ca.$$.fragment,o),$(Oa.$$.fragment,o),$(kn.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(yn.$$.fragment,o),$(wn.$$.fragment,o),$(Na.$$.fragment,o),$(Ia.$$.fragment,o),$(Ua.$$.fragment,o),$(Mn.$$.fragment,o),$(Fn.$$.fragment,o),$(Qa.$$.fragment,o),$(Ha.$$.fragment,o),$(Ya.$$.fragment,o),$(Rn.$$.fragment,o),$(Ln.$$.fragment,o),$(En.$$.fragment,o),$(Za.$$.fragment,o),$(er.$$.fragment,o),$(ar.$$.fragment,o),$(qn.$$.fragment,o),$(Cn.$$.fragment,o),$(jn.$$.fragment,o),$(rr.$$.fragment,o),$(ir.$$.fragment,o),$(Pn.$$.fragment,o),$(hr.$$.fragment,o),$(An.$$.fragment,o),$(On.$$.fragment,o),$(mr.$$.fragment,o),$(ur.$$.fragment,o),$(In.$$.fragment,o),$(vr.$$.fragment,o),$(Dn.$$.fragment,o),$(Sn.$$.fragment,o),$(Wn.$$.fragment,o),$(Tr.$$.fragment,o),$(yr.$$.fragment,o),$(Un.$$.fragment,o),$(xr.$$.fragment,o),$(Qn.$$.fragment,o),$(Hn.$$.fragment,o),$(Vn.$$.fragment,o),$(Rr.$$.fragment,o),$(Lr.$$.fragment,o),$(Kn.$$.fragment,o),$(jr.$$.fragment,o),$(Gn.$$.fragment,o),$(Yn.$$.fragment,o),$(Xr.$$.fragment,o),$(Pr.$$.fragment,o),$(es.$$.fragment,o),$(Dr.$$.fragment,o),$(ts.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(Sr.$$.fragment,o),$(Wr.$$.fragment,o),$(as.$$.fragment,o),$(Vr.$$.fragment,o),$(rs.$$.fragment,o),$(is.$$.fragment,o),$(ls.$$.fragment,o),$(Jr.$$.fragment,o),$(Kr.$$.fragment,o),$(ai.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(ri.$$.fragment,o),$(ii.$$.fragment,o),$(fi.$$.fragment,o),$(ms.$$.fragment,o),$(us.$$.fragment,o),$(gi.$$.fragment,o),$(_i.$$.fragment,o),$(Fi.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(xi.$$.fragment,o),$(Ri.$$.fragment,o),$(Ai.$$.fragment,o),$(ks.$$.fragment,o),$(vs.$$.fragment,o),$(Oi.$$.fragment,o),$(Ni.$$.fragment,o),$(Vi.$$.fragment,o),$(ys.$$.fragment,o),$(ws.$$.fragment,o),$(Ji.$$.fragment,o),$(Ki.$$.fragment,o),$(al.$$.fragment,o),$(Ms.$$.fragment,o),$(Fs.$$.fragment,o),Bm=!0)},o(o){M(l.$$.fragment,o),M(ee.$$.fragment,o),M(ne.$$.fragment,o),M(Bs.$$.fragment,o),M(Qs.$$.fragment,o),M(Hs.$$.fragment,o),M(Ks.$$.fragment,o),M(Ys.$$.fragment,o),M(ea.$$.fragment,o),M(ta.$$.fragment,o),M(oa.$$.fragment,o),M(na.$$.fragment,o),M(ra.$$.fragment,o),M(la.$$.fragment,o),M(da.$$.fragment,o),M(ca.$$.fragment,o),M(fa.$$.fragment,o),M(dn.$$.fragment,o),M(cn.$$.fragment,o),M(ga.$$.fragment,o),M(_a.$$.fragment,o),M(wa.$$.fragment,o),M(hn.$$.fragment,o),M(mn.$$.fragment,o),M($a.$$.fragment,o),M(Ma.$$.fragment,o),M(za.$$.fragment,o),M(fn.$$.fragment,o),M(gn.$$.fragment,o),M(_n.$$.fragment,o),M(qa.$$.fragment,o),M(Ca.$$.fragment,o),M(Oa.$$.fragment,o),M(kn.$$.fragment,o),M(vn.$$.fragment,o),M(Tn.$$.fragment,o),M(yn.$$.fragment,o),M(wn.$$.fragment,o),M(Na.$$.fragment,o),M(Ia.$$.fragment,o),M(Ua.$$.fragment,o),M(Mn.$$.fragment,o),M(Fn.$$.fragment,o),M(Qa.$$.fragment,o),M(Ha.$$.fragment,o),M(Ya.$$.fragment,o),M(Rn.$$.fragment,o),M(Ln.$$.fragment,o),M(En.$$.fragment,o),M(Za.$$.fragment,o),M(er.$$.fragment,o),M(ar.$$.fragment,o),M(qn.$$.fragment,o),M(Cn.$$.fragment,o),M(jn.$$.fragment,o),M(rr.$$.fragment,o),M(ir.$$.fragment,o),M(Pn.$$.fragment,o),M(hr.$$.fragment,o),M(An.$$.fragment,o),M(On.$$.fragment,o),M(mr.$$.fragment,o),M(ur.$$.fragment,o),M(In.$$.fragment,o),M(vr.$$.fragment,o),M(Dn.$$.fragment,o),M(Sn.$$.fragment,o),M(Wn.$$.fragment,o),M(Tr.$$.fragment,o),M(yr.$$.fragment,o),M(Un.$$.fragment,o),M(xr.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(Vn.$$.fragment,o),M(Rr.$$.fragment,o),M(Lr.$$.fragment,o),M(Kn.$$.fragment,o),M(jr.$$.fragment,o),M(Gn.$$.fragment,o),M(Yn.$$.fragment,o),M(Xr.$$.fragment,o),M(Pr.$$.fragment,o),M(es.$$.fragment,o),M(Dr.$$.fragment,o),M(ts.$$.fragment,o),M(os.$$.fragment,o),M(ns.$$.fragment,o),M(Sr.$$.fragment,o),M(Wr.$$.fragment,o),M(as.$$.fragment,o),M(Vr.$$.fragment,o),M(rs.$$.fragment,o),M(is.$$.fragment,o),M(ls.$$.fragment,o),M(Jr.$$.fragment,o),M(Kr.$$.fragment,o),M(ai.$$.fragment,o),M(cs.$$.fragment,o),M(ps.$$.fragment,o),M(ri.$$.fragment,o),M(ii.$$.fragment,o),M(fi.$$.fragment,o),M(ms.$$.fragment,o),M(us.$$.fragment,o),M(gi.$$.fragment,o),M(_i.$$.fragment,o),M(Fi.$$.fragment,o),M(gs.$$.fragment,o),M(_s.$$.fragment,o),M(xi.$$.fragment,o),M(Ri.$$.fragment,o),M(Ai.$$.fragment,o),M(ks.$$.fragment,o),M(vs.$$.fragment,o),M(Oi.$$.fragment,o),M(Ni.$$.fragment,o),M(Vi.$$.fragment,o),M(ys.$$.fragment,o),M(ws.$$.fragment,o),M(Ji.$$.fragment,o),M(Ki.$$.fragment,o),M(al.$$.fragment,o),M(Ms.$$.fragment,o),M(Fs.$$.fragment,o),Bm=!1},d(o){t(d),o&&t(g),o&&t(h),F(l),o&&t(J),o&&t(E),F(ee),o&&t(ce),o&&t(V),o&&t(C),o&&t(se),o&&t(pe),o&&t(ae),o&&t(he),o&&t(q),o&&t(B),o&&t(Z),o&&t(xe),o&&t(me),o&&t(Re),o&&t(N),F(ne),o&&t(tm),o&&t(ro),F(Bs),o&&t(om),o&&t(lo),F(Qs),o&&t(nm),o&&t(Ae),F(Hs),F(Ks),F(Ys),F(ea),F(ta),o&&t(sm),o&&t(co),F(oa),o&&t(am),o&&t(at),F(na),F(ra),F(la),o&&t(rm),o&&t(po),F(da),o&&t(im),o&&t(He),F(ca),F(fa),F(dn),F(cn),o&&t(lm),o&&t(mo),F(ga),o&&t(dm),o&&t(Ve),F(_a),F(wa),F(hn),F(mn),o&&t(cm),o&&t(fo),F($a),o&&t(pm),o&&t(Je),F(Ma),F(za),F(fn),F(gn),F(_n),o&&t(hm),o&&t(_o),F(qa),o&&t(mm),o&&t(Ke),F(Ca),F(Oa),F(kn),F(vn),F(Tn),F(yn),F(wn),o&&t(um),o&&t(ko),F(Na),o&&t(fm),o&&t(Ge),F(Ia),F(Ua),F(Mn),F(Fn),o&&t(gm),o&&t(To),F(Qa),o&&t(_m),o&&t(Ye),F(Ha),F(Ya),F(Rn),F(Ln),F(En),o&&t(bm),o&&t(wo),F(Za),o&&t(km),o&&t(Ze),F(er),F(ar),F(qn),F(Cn),F(jn),o&&t(vm),o&&t(Fo),F(rr),o&&t(Tm),o&&t(Oe),F(ir),F(Pn),F(hr),F(An),F(On),o&&t(ym),o&&t(Ro),F(mr),o&&t(wm),o&&t(Ne),F(ur),F(In),F(vr),F(Dn),F(Sn),F(Wn),o&&t($m),o&&t(Eo),F(Tr),o&&t(Mm),o&&t(Ie),F(yr),F(Un),F(xr),F(Qn),F(Hn),F(Vn),o&&t(Fm),o&&t(qo),F(Rr),o&&t(xm),o&&t(De),F(Lr),F(Kn),F(jr),F(Gn),F(Yn),o&&t(Rm),o&&t(jo),F(Xr),o&&t(Lm),o&&t(Se),F(Pr),F(es),F(Dr),F(ts),F(os),F(ns),o&&t(Em),o&&t(Po),F(Sr),o&&t(zm),o&&t(We),F(Wr),F(as),F(Vr),F(rs),F(is),F(ls),o&&t(qm),o&&t(No),F(Jr),o&&t(Cm),o&&t(Be),F(Kr),F(ai),F(cs),F(ps),o&&t(jm),o&&t(Do),F(ri),o&&t(Xm),o&&t(Ue),F(ii),F(fi),F(ms),F(us),o&&t(Pm),o&&t(Bo),F(gi),o&&t(Am),o&&t(Ce),F(_i),F(Fi),F(gs),F(_s),o&&t(Om),o&&t(Qo),F(xi),o&&t(Nm),o&&t(je),F(Ri),F(Ai),F(ks),F(vs),o&&t(Im),o&&t(Vo),F(Oi),o&&t(Dm),o&&t(Xe),F(Ni),F(Vi),F(ys),F(ws),o&&t(Sm),o&&t(Ko),F(Ji),o&&t(Wm),o&&t(Pe),F(Ki),F(al),F(Ms),F(Fs)}}}const A4={local:"xlmroberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.XLMRobertaConfig",title:"XLMRobertaConfig"},{local:"transformers.XLMRobertaTokenizer",title:"XLMRobertaTokenizer"},{local:"transformers.XLMRobertaTokenizerFast",title:"XLMRobertaTokenizerFast"},{local:"transformers.XLMRobertaModel",title:"XLMRobertaModel"},{local:"transformers.XLMRobertaForCausalLM",title:"XLMRobertaForCausalLM"},{local:"transformers.XLMRobertaForMaskedLM",title:"XLMRobertaForMaskedLM"},{local:"transformers.XLMRobertaForSequenceClassification",title:"XLMRobertaForSequenceClassification"},{local:"transformers.XLMRobertaForMultipleChoice",title:"XLMRobertaForMultipleChoice"},{local:"transformers.XLMRobertaForTokenClassification",title:"XLMRobertaForTokenClassification"},{local:"transformers.XLMRobertaForQuestionAnswering",title:"XLMRobertaForQuestionAnswering"},{local:"transformers.TFXLMRobertaModel",title:"TFXLMRobertaModel"},{local:"transformers.TFXLMRobertaForMaskedLM",title:"TFXLMRobertaForMaskedLM"},{local:"transformers.TFXLMRobertaForSequenceClassification",title:"TFXLMRobertaForSequenceClassification"},{local:"transformers.TFXLMRobertaForMultipleChoice",title:"TFXLMRobertaForMultipleChoice"},{local:"transformers.TFXLMRobertaForTokenClassification",title:"TFXLMRobertaForTokenClassification"},{local:"transformers.TFXLMRobertaForQuestionAnswering",title:"TFXLMRobertaForQuestionAnswering"},{local:"transformers.FlaxXLMRobertaModel",title:"FlaxXLMRobertaModel"},{local:"transformers.FlaxXLMRobertaForMaskedLM",title:"FlaxXLMRobertaForMaskedLM"},{local:"transformers.FlaxXLMRobertaForSequenceClassification",title:"FlaxXLMRobertaForSequenceClassification"},{local:"transformers.FlaxXLMRobertaForMultipleChoice",title:"FlaxXLMRobertaForMultipleChoice"},{local:"transformers.FlaxXLMRobertaForTokenClassification",title:"FlaxXLMRobertaForTokenClassification"},{local:"transformers.FlaxXLMRobertaForQuestionAnswering",title:"FlaxXLMRobertaForQuestionAnswering"}],title:"XLM-RoBERTa"};function O4(x){return XR(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class U4 extends zR{constructor(d){super();qR(this,d,O4,P4,CR,{})}}export{U4 as default,A4 as metadata};
