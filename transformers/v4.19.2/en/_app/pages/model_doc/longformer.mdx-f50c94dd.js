import{S as iT,i as lT,s as dT,e as r,k as c,w as v,t as n,Y as jt,M as cT,c as a,d as o,m,a as i,x as T,h as s,Z as Ot,b as _,F as e,g as f,y,q as $,o as L,B as x,v as mT,L as Oe}from"../../chunks/vendor-6b77c823.js";import{T as Ae}from"../../chunks/Tip-39098574.js";import{D as Q}from"../../chunks/Docstring-1088f2fb.js";import{C as ze}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{E as je}from"../../chunks/ExampleCodeBlock-5212b321.js";function hT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function pT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function fT(M){let d,k,h,p,b;return p=new ze({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">... </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),{c(){d=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function gT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function uT(M){let d,k,h,p,b;return p=new ze({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),{c(){d=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function _T(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function wT(M){let d,k,h,p,b;return p=new ze({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example of single-label classification:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example of single-label classification:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function kT(M){let d,k;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function bT(M){let d,k,h,p,b;return p=new ze({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example of multi-label classification:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example of multi-label classification:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function vT(M){let d,k;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = LongformerForSequenceClassification.from_pretrained(
    "allenai/longformer-base-4096", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function TT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function yT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function $T(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function LT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

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
`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function xT(M){let d,k;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function FT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function MT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">... </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),{c(){d=r("p"),k=n("Examples:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Examples:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function ET(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function qT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function zT(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function CT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function jT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of <mask>
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of &lt;mask&gt;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function OT(M){let d,k;return d=new ze({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-<mask> tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-&lt;mask&gt; tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function PT(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function NT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function AT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function IT(M){let d,k;return d=new ze({props:{code:`# target is "nice puppet"
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
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function ST(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function DT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function WT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function QT(M){let d,k;return d=new ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function UT(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function BT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function HT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

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
`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function RT(M){let d,k;return d=new ze({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){v(d.$$.fragment)},l(h){T(d.$$.fragment,h)},m(h,p){y(d,h,p),k=!0},p:Oe,i(h){k||($(d.$$.fragment,h),k=!0)},o(h){L(d.$$.fragment,h),k=!1},d(h){x(d,h)}}}function VT(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we;return{c(){d=r("p"),k=n("TF 2.0 models accepts two formats as inputs:"),h=c(),p=r("ul"),b=r("li"),l=n("having all inputs as keyword arguments (like PyTorch models), or"),u=c(),E=r("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=c(),q=r("p"),Z=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),D=r("code"),fe=n("model(inputs)"),le=n("."),G=c(),P=r("p"),oe=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=c(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),B=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),W=r("code"),ge=n("model(inputs_ids)"),ce=c(),C=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=c(),N=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(w){d=a(w,"P",{});var F=i(d);k=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(o),h=m(w),p=a(w,"UL",{});var Y=i(p);b=a(Y,"LI",{});var Te=i(b);l=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(o),u=m(Y),E=a(Y,"LI",{});var me=i(E);he=s(me,"having all inputs as a list, tuple or dict in the first positional arguments."),me.forEach(o),Y.forEach(o),J=m(w),q=a(w,"P",{});var A=i(q);Z=s(A,"This second option is useful when using "),S=a(A,"CODE",{});var be=i(S);ee=s(be,"tf.keras.Model.fit"),be.forEach(o),pe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),D=a(A,"CODE",{});var Le=i(D);fe=s(Le,"model(inputs)"),Le.forEach(o),le=s(A,"."),A.forEach(o),G=m(w),P=a(w,"P",{});var xe=i(P);oe=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(o),X=m(w),z=a(w,"UL",{});var O=i(z);j=a(O,"LI",{});var V=i(j);ne=s(V,"a single Tensor with "),B=a(V,"CODE",{});var Fe=i(B);de=s(Fe,"input_ids"),Fe.forEach(o),se=s(V," only and nothing else: "),W=a(V,"CODE",{});var ye=i(W);ge=s(ye,"model(inputs_ids)"),ye.forEach(o),V.forEach(o),ce=m(O),C=a(O,"LI",{});var I=i(C);ue=s(I,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),U=a(I,"CODE",{});var ke=i(U);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(o),K=s(I," or "),H=a(I,"CODE",{});var ve=i(H);ae=s(ve,"model([input_ids, attention_mask, token_type_ids])"),ve.forEach(o),I.forEach(o),_e=m(O),N=a(O,"LI",{});var te=i(N);ie=s(te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(te,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(o),te.forEach(o),O.forEach(o)},m(w,F){f(w,d,F),e(d,k),f(w,h,F),f(w,p,F),e(p,b),e(b,l),e(p,u),e(p,E),e(E,he),f(w,J,F),f(w,q,F),e(q,Z),e(q,S),e(S,ee),e(q,pe),e(q,D),e(D,fe),e(q,le),f(w,G,F),f(w,P,F),e(P,oe),f(w,X,F),f(w,z,F),e(z,j),e(j,ne),e(j,B),e(B,de),e(j,se),e(j,W),e(W,ge),e(z,ce),e(z,C),e(C,ue),e(C,U),e(U,re),e(C,K),e(C,H),e(H,ae),e(z,_e),e(z,N),e(N,ie),e(N,R),e(R,we)},d(w){w&&o(d),w&&o(h),w&&o(p),w&&o(J),w&&o(q),w&&o(G),w&&o(P),w&&o(X),w&&o(z)}}}function GT(M){let d,k,h,p,b;return{c(){d=r("p"),k=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),h=r("code"),p=n("Module"),b=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Although the recipe for forward pass needs to be defined within this function, one should call the "),h=a(u,"CODE",{});var E=i(h);p=s(E,"Module"),E.forEach(o),b=s(u,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),u.forEach(o)},m(l,u){f(l,d,u),e(d,k),e(d,h),e(h,p),e(d,b)},d(l){l&&o(d)}}}function KT(M){let d,k,h,p,b;return p=new ze({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=r("p"),k=n("Example:"),h=c(),v(p.$$.fragment)},l(l){d=a(l,"P",{});var u=i(d);k=s(u,"Example:"),u.forEach(o),h=m(l),T(p.$$.fragment,l)},m(l,u){f(l,d,u),e(d,k),f(l,h,u),y(p,l,u),b=!0},p:Oe,i(l){b||($(p.$$.fragment,l),b=!0)},o(l){L(p.$$.fragment,l),b=!1},d(l){l&&o(d),l&&o(h),x(p,l)}}}function JT(M){let d,k,h,p,b,l,u,E,he,J,q,Z,S,ee,pe,D,fe,le,G,P,oe,X,z,j,ne,B,de,se,W,ge,ce,C,ue,U,re,K,H,ae,_e,N,ie,R,we,w,F,Y,Te,me,A,be,Le,xe,O,V,Fe,ye,I,ke,ve,te,Me,ei,Sm,md,$e,Dm,hd,Yv='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',pd,fd,Zv='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',gd,ud,eT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',_d,oi,Wm,Qm,ti,Um,Bm,ni,Hm,Rm,wd,oT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',kd,si,Vm,Gm,bd,wo,Km,vd,tT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,ri,Jm,Xm,yd,ko,Ym,ai,Zm,eh,ii,oh,th,$d,Pt,li,nh,sh,di,rh,Ld,Nt,ah,Gr,ih,lh,xd,Je,dh,Fd,nT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',Md,Ed,sT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',qd,zd,rT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',Cd,jd,aT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Od,Pd,At,ch,Vn,mh,hh,Nd,jo,It,ci,Gn,ph,mi,fh,Ad,Oo,Kr,gh,uh,Jr,_h,wh,Id,Kn,Sd,Po,St,hi,Jn,kh,pi,bh,Dd,Be,Xn,vh,No,Th,Xr,yh,$h,Yr,Lh,xh,Fh,Ao,Mh,Zr,Eh,qh,Yn,zh,Ch,jh,Io,Oh,ea,Ph,Nh,oa,Ah,Ih,Sh,Dt,Wd,So,Wt,fi,Zn,Dh,gi,Wh,Qd,go,es,Qh,ui,Uh,Bh,Qt,ta,Hh,Rh,na,Vh,Gh,Ud,Do,Ut,_i,os,Kh,wi,Jh,Bd,uo,ts,Xh,ns,Yh,ki,Zh,ep,op,Bt,sa,tp,np,ra,sp,rp,Hd,Wo,Ht,bi,ss,ap,vi,ip,Rd,Qo,rs,lp,Ti,dp,Vd,Uo,as,cp,yi,mp,Gd,Bo,is,hp,$i,pp,Kd,Ho,ls,fp,Li,gp,Jd,Ro,ds,up,xi,_p,Xd,Vo,cs,wp,Fi,kp,Yd,Go,ms,bp,Mi,vp,Zd,Ko,hs,Tp,Ei,yp,ec,Jo,ps,$p,qi,Lp,oc,Xo,fs,xp,zi,Fp,tc,Yo,gs,Mp,Ci,Ep,nc,Zo,us,qp,ji,zp,sc,et,_s,Cp,Oi,jp,rc,ot,ws,Op,Pi,Pp,ac,tt,Rt,Ni,ks,Np,Ai,Ap,ic,Pe,bs,Ip,Ii,Sp,Dp,vs,Wp,aa,Qp,Up,Bp,Ts,Hp,ys,Rp,Vp,Gp,nt,Kp,ia,Jp,Xp,$s,Yp,Zp,ef,Ls,of,Si,tf,nf,sf,so,xs,rf,st,af,la,lf,df,Di,cf,mf,hf,Vt,pf,Gt,lc,rt,Kt,Wi,Fs,ff,Qi,gf,dc,He,Ms,uf,Es,_f,Ui,wf,kf,bf,qs,vf,da,Tf,yf,$f,zs,Lf,Cs,xf,Ff,Mf,ro,js,Ef,at,qf,ca,zf,Cf,Bi,jf,Of,Pf,Jt,Nf,Xt,cc,it,Yt,Hi,Os,Af,Ri,If,mc,Re,Ps,Sf,Vi,Df,Wf,Ns,Qf,ma,Uf,Bf,Hf,As,Rf,Is,Vf,Gf,Kf,Ne,Ss,Jf,lt,Xf,ha,Yf,Zf,Gi,eg,og,tg,Zt,ng,en,sg,on,rg,tn,ag,nn,hc,dt,sn,Ki,Ds,ig,Ji,lg,pc,Ve,Ws,dg,Xi,cg,mg,Qs,hg,pa,pg,fg,gg,Us,ug,Bs,_g,wg,kg,ao,Hs,bg,ct,vg,fa,Tg,yg,Yi,$g,Lg,xg,rn,Fg,an,fc,mt,ln,Zi,Rs,Mg,el,Eg,gc,Ge,Vs,qg,ol,zg,Cg,Gs,jg,ga,Og,Pg,Ng,Ks,Ag,Js,Ig,Sg,Dg,Xe,Xs,Wg,ht,Qg,ua,Ug,Bg,tl,Hg,Rg,Vg,dn,Gg,cn,Kg,mn,uc,pt,hn,nl,Ys,Jg,sl,Xg,_c,Ke,Zs,Yg,ft,Zg,rl,eu,ou,al,tu,nu,su,er,ru,_a,au,iu,lu,or,du,tr,cu,mu,hu,io,nr,pu,gt,fu,wa,gu,uu,il,_u,wu,ku,pn,bu,fn,wc,ut,gn,ll,sr,vu,dl,Tu,kc,Ee,rr,yu,cl,$u,Lu,ar,xu,ka,Fu,Mu,Eu,ir,qu,lr,zu,Cu,ju,un,Ou,_t,Pu,ba,Nu,Au,dr,Iu,Su,Du,cr,Wu,ml,Qu,Uu,Bu,bo,mr,Hu,wt,Ru,va,Vu,Gu,hl,Ku,Ju,Xu,_n,bc,kt,wn,pl,hr,Yu,fl,Zu,vc,Ie,pr,e_,fr,o_,gl,t_,n_,s_,gr,r_,Ta,a_,i_,l_,ur,d_,_r,c_,m_,h_,kn,p_,Ye,wr,f_,bt,g_,ya,u_,__,ul,w_,k_,b_,bn,v_,vn,T_,Tn,Tc,vt,yn,_l,kr,y_,wl,$_,yc,Se,br,L_,Tt,x_,kl,F_,M_,bl,E_,q_,z_,vr,C_,$a,j_,O_,P_,Tr,N_,yr,A_,I_,S_,$n,D_,Ze,$r,W_,yt,Q_,La,U_,B_,vl,H_,R_,V_,Ln,G_,xn,K_,Fn,$c,$t,Mn,Tl,Lr,J_,yl,X_,Lc,De,xr,Y_,$l,Z_,ew,Fr,ow,xa,tw,nw,sw,Mr,rw,Er,aw,iw,lw,En,dw,eo,qr,cw,Lt,mw,Fa,hw,pw,Ll,fw,gw,uw,qn,_w,zn,ww,Cn,xc,xt,jn,xl,zr,kw,Fl,bw,Fc,We,Cr,vw,Ml,Tw,yw,jr,$w,Ma,Lw,xw,Fw,Or,Mw,Pr,Ew,qw,zw,On,Cw,oo,Nr,jw,Ft,Ow,Ea,Pw,Nw,El,Aw,Iw,Sw,Pn,Dw,Nn,Ww,An,Mc,Mt,In,ql,Ar,Qw,zl,Uw,Ec,Qe,Ir,Bw,Cl,Hw,Rw,Sr,Vw,qa,Gw,Kw,Jw,Dr,Xw,Wr,Yw,Zw,ek,Sn,ok,lo,Qr,tk,Et,nk,za,sk,rk,jl,ak,ik,lk,Dn,dk,Wn,qc;return l=new Ce({}),ee=new Ce({}),te=new Ce({}),Gn=new Ce({}),Kn=new ze({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),Jn=new Ce({}),Xn=new Q({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/configuration_longformer.py#L33"}}),Dt=new je({props:{anchor:"transformers.LongformerConfig.example",$$slots:{default:[hT]},$$scope:{ctx:M}}}),Zn=new Ce({}),es=new Q({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),os=new Ce({}),ts=new Q({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),ss=new Ce({}),rs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L57"}}),as=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L100"}}),is=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L148"}}),ls=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L194"}}),ds=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L243"}}),cs=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L289"}}),ms=new Q({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L337"}}),hs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L68"}}),ps=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L111"}}),fs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L159"}}),gs=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L205"}}),us=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L254"}}),_s=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L300"}}),ws=new Q({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L348"}}),ks=new Ce({}),bs=new Q({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1493"}}),xs=new Q({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1604",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Ae({props:{$$slots:{default:[pT]},$$scope:{ctx:M}}}),Gt=new je({props:{anchor:"transformers.LongformerModel.forward.example",$$slots:{default:[fT]},$$scope:{ctx:M}}}),Fs=new Ce({}),Ms=new Q({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1728"}}),js=new Q({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1747",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new Ae({props:{$$slots:{default:[gT]},$$scope:{ctx:M}}}),Xt=new je({props:{anchor:"transformers.LongformerForMaskedLM.forward.example",$$slots:{default:[uT]},$$scope:{ctx:M}}}),Os=new Ce({}),Ps=new Q({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1833"}}),Ss=new Q({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1848",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new Ae({props:{$$slots:{default:[_T]},$$scope:{ctx:M}}}),en=new je({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example",$$slots:{default:[wT]},$$scope:{ctx:M}}}),on=new je({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-2",$$slots:{default:[kT]},$$scope:{ctx:M}}}),tn=new je({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-3",$$slots:{default:[bT]},$$scope:{ctx:M}}}),nn=new je({props:{anchor:"transformers.LongformerForSequenceClassification.forward.example-4",$$slots:{default:[vT]},$$scope:{ctx:M}}}),Ds=new Ce({}),Ws=new Q({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L2184"}}),Hs=new Q({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L2195",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rn=new Ae({props:{$$slots:{default:[TT]},$$scope:{ctx:M}}}),an=new je({props:{anchor:"transformers.LongformerForMultipleChoice.forward.example",$$slots:{default:[yT]},$$scope:{ctx:M}}}),Rs=new Ce({}),Vs=new Q({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L2099"}}),Xs=new Q({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L2114",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),dn=new Ae({props:{$$slots:{default:[$T]},$$scope:{ctx:M}}}),cn=new je({props:{anchor:"transformers.LongformerForTokenClassification.forward.example",$$slots:{default:[LT]},$$scope:{ctx:M}}}),mn=new je({props:{anchor:"transformers.LongformerForTokenClassification.forward.example-2",$$slots:{default:[xT]},$$scope:{ctx:M}}}),Ys=new Ce({}),Zs=new Q({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1960"}}),nr=new Q({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_longformer.py#L1974",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new Ae({props:{$$slots:{default:[FT]},$$scope:{ctx:M}}}),fn=new je({props:{anchor:"transformers.LongformerForQuestionAnswering.forward.example",$$slots:{default:[MT]},$$scope:{ctx:M}}}),sr=new Ce({}),rr=new Q({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L1988"}}),un=new Ae({props:{$$slots:{default:[ET]},$$scope:{ctx:M}}}),mr=new Q({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2010"}}),_n=new Ae({props:{$$slots:{default:[qT]},$$scope:{ctx:M}}}),hr=new Ce({}),pr=new Q({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2061"}}),kn=new Ae({props:{$$slots:{default:[zT]},$$scope:{ctx:M}}}),wr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2078",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bn=new Ae({props:{$$slots:{default:[CT]},$$scope:{ctx:M}}}),vn=new je({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example",$$slots:{default:[jT]},$$scope:{ctx:M}}}),Tn=new je({props:{anchor:"transformers.TFLongformerForMaskedLM.call.example-2",$$slots:{default:[OT]},$$scope:{ctx:M}}}),kr=new Ce({}),br=new Q({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2156"}}),$n=new Ae({props:{$$slots:{default:[PT]},$$scope:{ctx:M}}}),$r=new Q({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2171",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new Ae({props:{$$slots:{default:[NT]},$$scope:{ctx:M}}}),xn=new je({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example",$$slots:{default:[AT]},$$scope:{ctx:M}}}),Fn=new je({props:{anchor:"transformers.TFLongformerForQuestionAnswering.call.example-2",$$slots:{default:[IT]},$$scope:{ctx:M}}}),Lr=new Ce({}),xr=new Q({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2305"}}),En=new Ae({props:{$$slots:{default:[ST]},$$scope:{ctx:M}}}),qr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2317",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qn=new Ae({props:{$$slots:{default:[DT]},$$scope:{ctx:M}}}),zn=new je({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example",$$slots:{default:[WT]},$$scope:{ctx:M}}}),Cn=new je({props:{anchor:"transformers.TFLongformerForSequenceClassification.call.example-2",$$slots:{default:[QT]},$$scope:{ctx:M}}}),zr=new Ce({}),Cr=new Q({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2540"}}),On=new Ae({props:{$$slots:{default:[UT]},$$scope:{ctx:M}}}),Nr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2555",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new Ae({props:{$$slots:{default:[BT]},$$scope:{ctx:M}}}),Nn=new je({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example",$$slots:{default:[HT]},$$scope:{ctx:M}}}),An=new je({props:{anchor:"transformers.TFLongformerForTokenClassification.call.example-2",$$slots:{default:[RT]},$$scope:{ctx:M}}}),Ar=new Ce({}),Ir=new Q({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2404"}}),Sn=new Ae({props:{$$slots:{default:[VT]},$$scope:{ctx:M}}}),Qr=new Q({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/v4.19.2/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.19.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.19.2/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.19.2/src/transformers/models/longformer/modeling_tf_longformer.py#L2424",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new Ae({props:{$$slots:{default:[GT]},$$scope:{ctx:M}}}),Wn=new je({props:{anchor:"transformers.TFLongformerForMultipleChoice.call.example",$$slots:{default:[KT]},$$scope:{ctx:M}}}),{c(){d=r("meta"),k=c(),h=r("h1"),p=r("a"),b=r("span"),v(l.$$.fragment),u=c(),E=r("span"),he=n("Longformer"),J=c(),q=r("h2"),Z=r("a"),S=r("span"),v(ee.$$.fragment),pe=c(),D=r("span"),fe=n("Overview"),le=c(),G=r("p"),P=n("The Longformer model was presented in "),oe=r("a"),X=n("Longformer: The Long-Document Transformer"),z=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),j=c(),ne=r("p"),B=n("The abstract from the paper is the following:"),de=c(),se=r("p"),W=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=c(),C=r("p"),ue=n("Tips:"),U=c(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),N=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),w=r("code"),F=n("</s>"),Y=n(")."),Te=c(),me=r("p"),A=n("This model was contributed by "),be=r("a"),Le=n("beltagy"),xe=n(". The Authors\u2019 code can be found "),O=r("a"),V=n("here"),Fe=n("."),ye=c(),I=r("h2"),ke=r("a"),ve=r("span"),v(te.$$.fragment),Me=c(),ei=r("span"),Sm=n("Longformer Self Attention"),md=c(),$e=r("p"),Dm=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),hd=new jt,pd=n(` previous tokens and
`),fd=new jt,gd=n(" succeding tokens with "),ud=new jt,_d=n(` being the window length as defined in
`),oi=r("code"),Wm=n("config.attention_window"),Qm=n(". Note that "),ti=r("code"),Um=n("config.attention_window"),Bm=n(" can be of type "),ni=r("code"),Hm=n("List"),Rm=n(` to define a
different `),wd=new jt,kd=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),si=r("code"),Vm=n("BertSelfAttention"),Gm=n("."),bd=c(),wo=r("p"),Km=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),vd=new jt,Td=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=r("em"),Jm=n("symmetric"),Xm=n("."),yd=c(),ko=r("p"),Ym=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ai=r("code"),Zm=n("global_attention_mask"),eh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),ii=r("code"),oh=n("global_attention_mask"),th=n(":"),$d=c(),Pt=r("ul"),li=r("li"),nh=n("0: the token attends \u201Clocally\u201D,"),sh=c(),di=r("li"),rh=n("1: the token attends \u201Cglobally\u201D."),Ld=c(),Nt=r("p"),ah=n("For more information please also refer to "),Gr=r("a"),ih=n("forward()"),lh=n(" method."),xd=c(),Je=r("p"),dh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Fd=new jt,Md=n(` to
`),Ed=new jt,qd=n(", with "),zd=new jt,Cd=n(" being the sequence length and "),jd=new jt,Od=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),Pd=c(),At=r("p"),ch=n("For more information, please refer to the official "),Vn=r("a"),mh=n("paper"),hh=n("."),Nd=c(),jo=r("h2"),It=r("a"),ci=r("span"),v(Gn.$$.fragment),ph=c(),mi=r("span"),fh=n("Training"),Ad=c(),Oo=r("p"),Kr=r("a"),gh=n("LongformerForMaskedLM"),uh=n(" is trained the exact same way "),Jr=r("a"),_h=n("RobertaForMaskedLM"),wh=n(` is
trained and should be used as follows:`),Id=c(),v(Kn.$$.fragment),Sd=c(),Po=r("h2"),St=r("a"),hi=r("span"),v(Jn.$$.fragment),kh=c(),pi=r("span"),bh=n("LongformerConfig"),Dd=c(),Be=r("div"),v(Xn.$$.fragment),vh=c(),No=r("p"),Th=n("This is the configuration class to store the configuration of a "),Xr=r("a"),yh=n("LongformerModel"),$h=n(" or a "),Yr=r("a"),Lh=n("TFLongformerModel"),xh=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Fh=c(),Ao=r("p"),Mh=n("This is the configuration class to store the configuration of a "),Zr=r("a"),Eh=n("LongformerModel"),qh=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Yn=r("a"),zh=n("allenai/longformer-base-4096"),Ch=n(` architecture with a sequence
length 4,096.`),jh=c(),Io=r("p"),Oh=n("The "),ea=r("a"),Ph=n("LongformerConfig"),Nh=n(" class directly inherits "),oa=r("a"),Ah=n("RobertaConfig"),Ih=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Sh=c(),v(Dt.$$.fragment),Wd=c(),So=r("h2"),Wt=r("a"),fi=r("span"),v(Zn.$$.fragment),Dh=c(),gi=r("span"),Wh=n("LongformerTokenizer"),Qd=c(),go=r("div"),v(es.$$.fragment),Qh=c(),ui=r("p"),Uh=n("Construct a Longformer tokenizer."),Bh=c(),Qt=r("p"),ta=r("a"),Hh=n("LongformerTokenizer"),Rh=n(" is identical to "),na=r("a"),Vh=n("RobertaTokenizer"),Gh=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Ud=c(),Do=r("h2"),Ut=r("a"),_i=r("span"),v(os.$$.fragment),Kh=c(),wi=r("span"),Jh=n("LongformerTokenizerFast"),Bd=c(),uo=r("div"),v(ts.$$.fragment),Xh=c(),ns=r("p"),Yh=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ki=r("em"),Zh=n("tokenizers"),ep=n(" library)."),op=c(),Bt=r("p"),sa=r("a"),tp=n("LongformerTokenizerFast"),np=n(" is identical to "),ra=r("a"),sp=n("RobertaTokenizerFast"),rp=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Hd=c(),Wo=r("h2"),Ht=r("a"),bi=r("span"),v(ss.$$.fragment),ap=c(),vi=r("span"),ip=n("Longformer specific outputs"),Rd=c(),Qo=r("div"),v(rs.$$.fragment),lp=c(),Ti=r("p"),dp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Vd=c(),Uo=r("div"),v(as.$$.fragment),cp=c(),yi=r("p"),mp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Gd=c(),Bo=r("div"),v(is.$$.fragment),hp=c(),$i=r("p"),pp=n("Base class for masked language models outputs."),Kd=c(),Ho=r("div"),v(ls.$$.fragment),fp=c(),Li=r("p"),gp=n("Base class for outputs of question answering Longformer models."),Jd=c(),Ro=r("div"),v(ds.$$.fragment),up=c(),xi=r("p"),_p=n("Base class for outputs of sentence classification models."),Xd=c(),Vo=r("div"),v(cs.$$.fragment),wp=c(),Fi=r("p"),kp=n("Base class for outputs of multiple choice Longformer models."),Yd=c(),Go=r("div"),v(ms.$$.fragment),bp=c(),Mi=r("p"),vp=n("Base class for outputs of token classification models."),Zd=c(),Ko=r("div"),v(hs.$$.fragment),Tp=c(),Ei=r("p"),yp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),ec=c(),Jo=r("div"),v(ps.$$.fragment),$p=c(),qi=r("p"),Lp=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),oc=c(),Xo=r("div"),v(fs.$$.fragment),xp=c(),zi=r("p"),Fp=n("Base class for masked language models outputs."),tc=c(),Yo=r("div"),v(gs.$$.fragment),Mp=c(),Ci=r("p"),Ep=n("Base class for outputs of question answering Longformer models."),nc=c(),Zo=r("div"),v(us.$$.fragment),qp=c(),ji=r("p"),zp=n("Base class for outputs of sentence classification models."),sc=c(),et=r("div"),v(_s.$$.fragment),Cp=c(),Oi=r("p"),jp=n("Base class for outputs of multiple choice models."),rc=c(),ot=r("div"),v(ws.$$.fragment),Op=c(),Pi=r("p"),Pp=n("Base class for outputs of token classification models."),ac=c(),tt=r("h2"),Rt=r("a"),Ni=r("span"),v(ks.$$.fragment),Np=c(),Ai=r("span"),Ap=n("LongformerModel"),ic=c(),Pe=r("div"),v(bs.$$.fragment),Ip=c(),Ii=r("p"),Sp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Dp=c(),vs=r("p"),Wp=n("This model inherits from "),aa=r("a"),Qp=n("PreTrainedModel"),Up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=c(),Ts=r("p"),Hp=n("This model is also a PyTorch "),ys=r("a"),Rp=n("torch.nn.Module"),Vp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gp=c(),nt=r("p"),Kp=n("This class copied code from "),ia=r("a"),Jp=n("RobertaModel"),Xp=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),$s=r("a"),Yp=n(`Longformer:
the Long-Document Transformer`),Zp=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),ef=c(),Ls=r("p"),of=n("The self-attention module "),Si=r("code"),tf=n("LongformerSelfAttention"),nf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),sf=c(),so=r("div"),v(xs.$$.fragment),rf=c(),st=r("p"),af=n("The "),la=r("a"),lf=n("LongformerModel"),df=n(" forward method, overrides the "),Di=r("code"),cf=n("__call__"),mf=n(" special method."),hf=c(),v(Vt.$$.fragment),pf=c(),v(Gt.$$.fragment),lc=c(),rt=r("h2"),Kt=r("a"),Wi=r("span"),v(Fs.$$.fragment),ff=c(),Qi=r("span"),gf=n("LongformerForMaskedLM"),dc=c(),He=r("div"),v(Ms.$$.fragment),uf=c(),Es=r("p"),_f=n("Longformer Model with a "),Ui=r("code"),wf=n("language modeling"),kf=n(" head on top."),bf=c(),qs=r("p"),vf=n("This model inherits from "),da=r("a"),Tf=n("PreTrainedModel"),yf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$f=c(),zs=r("p"),Lf=n("This model is also a PyTorch "),Cs=r("a"),xf=n("torch.nn.Module"),Ff=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mf=c(),ro=r("div"),v(js.$$.fragment),Ef=c(),at=r("p"),qf=n("The "),ca=r("a"),zf=n("LongformerForMaskedLM"),Cf=n(" forward method, overrides the "),Bi=r("code"),jf=n("__call__"),Of=n(" special method."),Pf=c(),v(Jt.$$.fragment),Nf=c(),v(Xt.$$.fragment),cc=c(),it=r("h2"),Yt=r("a"),Hi=r("span"),v(Os.$$.fragment),Af=c(),Ri=r("span"),If=n("LongformerForSequenceClassification"),mc=c(),Re=r("div"),v(Ps.$$.fragment),Sf=c(),Vi=r("p"),Df=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Wf=c(),Ns=r("p"),Qf=n("This model inherits from "),ma=r("a"),Uf=n("PreTrainedModel"),Bf=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hf=c(),As=r("p"),Rf=n("This model is also a PyTorch "),Is=r("a"),Vf=n("torch.nn.Module"),Gf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kf=c(),Ne=r("div"),v(Ss.$$.fragment),Jf=c(),lt=r("p"),Xf=n("The "),ha=r("a"),Yf=n("LongformerForSequenceClassification"),Zf=n(" forward method, overrides the "),Gi=r("code"),eg=n("__call__"),og=n(" special method."),tg=c(),v(Zt.$$.fragment),ng=c(),v(en.$$.fragment),sg=c(),v(on.$$.fragment),rg=c(),v(tn.$$.fragment),ag=c(),v(nn.$$.fragment),hc=c(),dt=r("h2"),sn=r("a"),Ki=r("span"),v(Ds.$$.fragment),ig=c(),Ji=r("span"),lg=n("LongformerForMultipleChoice"),pc=c(),Ve=r("div"),v(Ws.$$.fragment),dg=c(),Xi=r("p"),cg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),mg=c(),Qs=r("p"),hg=n("This model inherits from "),pa=r("a"),pg=n("PreTrainedModel"),fg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gg=c(),Us=r("p"),ug=n("This model is also a PyTorch "),Bs=r("a"),_g=n("torch.nn.Module"),wg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),kg=c(),ao=r("div"),v(Hs.$$.fragment),bg=c(),ct=r("p"),vg=n("The "),fa=r("a"),Tg=n("LongformerForMultipleChoice"),yg=n(" forward method, overrides the "),Yi=r("code"),$g=n("__call__"),Lg=n(" special method."),xg=c(),v(rn.$$.fragment),Fg=c(),v(an.$$.fragment),fc=c(),mt=r("h2"),ln=r("a"),Zi=r("span"),v(Rs.$$.fragment),Mg=c(),el=r("span"),Eg=n("LongformerForTokenClassification"),gc=c(),Ge=r("div"),v(Vs.$$.fragment),qg=c(),ol=r("p"),zg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=c(),Gs=r("p"),jg=n("This model inherits from "),ga=r("a"),Og=n("PreTrainedModel"),Pg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=c(),Ks=r("p"),Ag=n("This model is also a PyTorch "),Js=r("a"),Ig=n("torch.nn.Module"),Sg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=c(),Xe=r("div"),v(Xs.$$.fragment),Wg=c(),ht=r("p"),Qg=n("The "),ua=r("a"),Ug=n("LongformerForTokenClassification"),Bg=n(" forward method, overrides the "),tl=r("code"),Hg=n("__call__"),Rg=n(" special method."),Vg=c(),v(dn.$$.fragment),Gg=c(),v(cn.$$.fragment),Kg=c(),v(mn.$$.fragment),uc=c(),pt=r("h2"),hn=r("a"),nl=r("span"),v(Ys.$$.fragment),Jg=c(),sl=r("span"),Xg=n("LongformerForQuestionAnswering"),_c=c(),Ke=r("div"),v(Zs.$$.fragment),Yg=c(),ft=r("p"),Zg=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),rl=r("code"),eu=n("span start logits"),ou=n(" and "),al=r("code"),tu=n("span end logits"),nu=n(")."),su=c(),er=r("p"),ru=n("This model inherits from "),_a=r("a"),au=n("PreTrainedModel"),iu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lu=c(),or=r("p"),du=n("This model is also a PyTorch "),tr=r("a"),cu=n("torch.nn.Module"),mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hu=c(),io=r("div"),v(nr.$$.fragment),pu=c(),gt=r("p"),fu=n("The "),wa=r("a"),gu=n("LongformerForQuestionAnswering"),uu=n(" forward method, overrides the "),il=r("code"),_u=n("__call__"),wu=n(" special method."),ku=c(),v(pn.$$.fragment),bu=c(),v(fn.$$.fragment),wc=c(),ut=r("h2"),gn=r("a"),ll=r("span"),v(sr.$$.fragment),vu=c(),dl=r("span"),Tu=n("TFLongformerModel"),kc=c(),Ee=r("div"),v(rr.$$.fragment),yu=c(),cl=r("p"),$u=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Lu=c(),ar=r("p"),xu=n("This model inherits from "),ka=r("a"),Fu=n("TFPreTrainedModel"),Mu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Eu=c(),ir=r("p"),qu=n("This model is also a "),lr=r("a"),zu=n("tf.keras.Model"),Cu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju=c(),v(un.$$.fragment),Ou=c(),_t=r("p"),Pu=n("This class copies code from "),ba=r("a"),Nu=n("TFRobertaModel"),Au=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),dr=r("a"),Iu=n("Longformer: the Long-Document Transformer"),Su=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Du=c(),cr=r("p"),Wu=n("The self-attention module "),ml=r("code"),Qu=n("TFLongformerSelfAttention"),Uu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Bu=c(),bo=r("div"),v(mr.$$.fragment),Hu=c(),wt=r("p"),Ru=n("The "),va=r("a"),Vu=n("TFLongformerModel"),Gu=n(" forward method, overrides the "),hl=r("code"),Ku=n("__call__"),Ju=n(" special method."),Xu=c(),v(_n.$$.fragment),bc=c(),kt=r("h2"),wn=r("a"),pl=r("span"),v(hr.$$.fragment),Yu=c(),fl=r("span"),Zu=n("TFLongformerForMaskedLM"),vc=c(),Ie=r("div"),v(pr.$$.fragment),e_=c(),fr=r("p"),o_=n("Longformer Model with a "),gl=r("code"),t_=n("language modeling"),n_=n(" head on top."),s_=c(),gr=r("p"),r_=n("This model inherits from "),Ta=r("a"),a_=n("TFPreTrainedModel"),i_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),l_=c(),ur=r("p"),d_=n("This model is also a "),_r=r("a"),c_=n("tf.keras.Model"),m_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),h_=c(),v(kn.$$.fragment),p_=c(),Ye=r("div"),v(wr.$$.fragment),f_=c(),bt=r("p"),g_=n("The "),ya=r("a"),u_=n("TFLongformerForMaskedLM"),__=n(" forward method, overrides the "),ul=r("code"),w_=n("__call__"),k_=n(" special method."),b_=c(),v(bn.$$.fragment),v_=c(),v(vn.$$.fragment),T_=c(),v(Tn.$$.fragment),Tc=c(),vt=r("h2"),yn=r("a"),_l=r("span"),v(kr.$$.fragment),y_=c(),wl=r("span"),$_=n("TFLongformerForQuestionAnswering"),yc=c(),Se=r("div"),v(br.$$.fragment),L_=c(),Tt=r("p"),x_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),kl=r("code"),F_=n("span start logits"),M_=n(" and "),bl=r("code"),E_=n("span end logits"),q_=n(")."),z_=c(),vr=r("p"),C_=n("This model inherits from "),$a=r("a"),j_=n("TFPreTrainedModel"),O_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),P_=c(),Tr=r("p"),N_=n("This model is also a "),yr=r("a"),A_=n("tf.keras.Model"),I_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),S_=c(),v($n.$$.fragment),D_=c(),Ze=r("div"),v($r.$$.fragment),W_=c(),yt=r("p"),Q_=n("The "),La=r("a"),U_=n("TFLongformerForQuestionAnswering"),B_=n(" forward method, overrides the "),vl=r("code"),H_=n("__call__"),R_=n(" special method."),V_=c(),v(Ln.$$.fragment),G_=c(),v(xn.$$.fragment),K_=c(),v(Fn.$$.fragment),$c=c(),$t=r("h2"),Mn=r("a"),Tl=r("span"),v(Lr.$$.fragment),J_=c(),yl=r("span"),X_=n("TFLongformerForSequenceClassification"),Lc=c(),De=r("div"),v(xr.$$.fragment),Y_=c(),$l=r("p"),Z_=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),ew=c(),Fr=r("p"),ow=n("This model inherits from "),xa=r("a"),tw=n("TFPreTrainedModel"),nw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sw=c(),Mr=r("p"),rw=n("This model is also a "),Er=r("a"),aw=n("tf.keras.Model"),iw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lw=c(),v(En.$$.fragment),dw=c(),eo=r("div"),v(qr.$$.fragment),cw=c(),Lt=r("p"),mw=n("The "),Fa=r("a"),hw=n("TFLongformerForSequenceClassification"),pw=n(" forward method, overrides the "),Ll=r("code"),fw=n("__call__"),gw=n(" special method."),uw=c(),v(qn.$$.fragment),_w=c(),v(zn.$$.fragment),ww=c(),v(Cn.$$.fragment),xc=c(),xt=r("h2"),jn=r("a"),xl=r("span"),v(zr.$$.fragment),kw=c(),Fl=r("span"),bw=n("TFLongformerForTokenClassification"),Fc=c(),We=r("div"),v(Cr.$$.fragment),vw=c(),Ml=r("p"),Tw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),yw=c(),jr=r("p"),$w=n("This model inherits from "),Ma=r("a"),Lw=n("TFPreTrainedModel"),xw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fw=c(),Or=r("p"),Mw=n("This model is also a "),Pr=r("a"),Ew=n("tf.keras.Model"),qw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zw=c(),v(On.$$.fragment),Cw=c(),oo=r("div"),v(Nr.$$.fragment),jw=c(),Ft=r("p"),Ow=n("The "),Ea=r("a"),Pw=n("TFLongformerForTokenClassification"),Nw=n(" forward method, overrides the "),El=r("code"),Aw=n("__call__"),Iw=n(" special method."),Sw=c(),v(Pn.$$.fragment),Dw=c(),v(Nn.$$.fragment),Ww=c(),v(An.$$.fragment),Mc=c(),Mt=r("h2"),In=r("a"),ql=r("span"),v(Ar.$$.fragment),Qw=c(),zl=r("span"),Uw=n("TFLongformerForMultipleChoice"),Ec=c(),Qe=r("div"),v(Ir.$$.fragment),Bw=c(),Cl=r("p"),Hw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Rw=c(),Sr=r("p"),Vw=n("This model inherits from "),qa=r("a"),Gw=n("TFPreTrainedModel"),Kw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jw=c(),Dr=r("p"),Xw=n("This model is also a "),Wr=r("a"),Yw=n("tf.keras.Model"),Zw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ek=c(),v(Sn.$$.fragment),ok=c(),lo=r("div"),v(Qr.$$.fragment),tk=c(),Et=r("p"),nk=n("The "),za=r("a"),sk=n("TFLongformerForMultipleChoice"),rk=n(" forward method, overrides the "),jl=r("code"),ak=n("__call__"),ik=n(" special method."),lk=c(),v(Dn.$$.fragment),dk=c(),v(Wn.$$.fragment),this.h()},l(t){const g=cT('[data-svelte="svelte-1phssyn"]',document.head);d=a(g,"META",{name:!0,content:!0}),g.forEach(o),k=m(t),h=a(t,"H1",{class:!0});var Ur=i(h);p=a(Ur,"A",{id:!0,class:!0,href:!0});var Ol=i(p);b=a(Ol,"SPAN",{});var Pl=i(b);T(l.$$.fragment,Pl),Pl.forEach(o),Ol.forEach(o),u=m(Ur),E=a(Ur,"SPAN",{});var Nl=i(E);he=s(Nl,"Longformer"),Nl.forEach(o),Ur.forEach(o),J=m(t),q=a(t,"H2",{class:!0});var Br=i(q);Z=a(Br,"A",{id:!0,class:!0,href:!0});var Al=i(Z);S=a(Al,"SPAN",{});var Il=i(S);T(ee.$$.fragment,Il),Il.forEach(o),Al.forEach(o),pe=m(Br),D=a(Br,"SPAN",{});var Sl=i(D);fe=s(Sl,"Overview"),Sl.forEach(o),Br.forEach(o),le=m(t),G=a(t,"P",{});var Hr=i(G);P=s(Hr,"The Longformer model was presented in "),oe=a(Hr,"A",{href:!0,rel:!0});var Dl=i(oe);X=s(Dl,"Longformer: The Long-Document Transformer"),Dl.forEach(o),z=s(Hr," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Hr.forEach(o),j=m(t),ne=a(t,"P",{});var Wl=i(ne);B=s(Wl,"The abstract from the paper is the following:"),Wl.forEach(o),de=m(t),se=a(t,"P",{});var Ql=i(se);W=a(Ql,"EM",{});var Ul=i(W);ge=s(Ul,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Ul.forEach(o),Ql.forEach(o),ce=m(t),C=a(t,"P",{});var Bl=i(C);ue=s(Bl,"Tips:"),Bl.forEach(o),U=m(t),re=a(t,"UL",{});var Hl=i(re);K=a(Hl,"LI",{});var _o=i(K);H=s(_o,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(_o,"CODE",{});var Rl=i(ae);_e=s(Rl,"token_type_ids"),Rl.forEach(o),N=s(_o,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(_o,"CODE",{});var Vl=i(ie);R=s(Vl,"tokenizer.sep_token"),Vl.forEach(o),we=s(_o,` (or
`),w=a(_o,"CODE",{});var Gl=i(w);F=s(Gl,"</s>"),Gl.forEach(o),Y=s(_o,")."),_o.forEach(o),Hl.forEach(o),Te=m(t),me=a(t,"P",{});var qt=i(me);A=s(qt,"This model was contributed by "),be=a(qt,"A",{href:!0,rel:!0});var Kl=i(be);Le=s(Kl,"beltagy"),Kl.forEach(o),xe=s(qt,". The Authors\u2019 code can be found "),O=a(qt,"A",{href:!0,rel:!0});var Jl=i(O);V=s(Jl,"here"),Jl.forEach(o),Fe=s(qt,"."),qt.forEach(o),ye=m(t),I=a(t,"H2",{class:!0});var Rr=i(I);ke=a(Rr,"A",{id:!0,class:!0,href:!0});var Xl=i(ke);ve=a(Xl,"SPAN",{});var Yl=i(ve);T(te.$$.fragment,Yl),Yl.forEach(o),Xl.forEach(o),Me=m(Rr),ei=a(Rr,"SPAN",{});var Zl=i(ei);Sm=s(Zl,"Longformer Self Attention"),Zl.forEach(o),Rr.forEach(o),md=m(t),$e=a(t,"P",{});var qe=i($e);Dm=s(qe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),hd=Ot(qe),pd=s(qe,` previous tokens and
`),fd=Ot(qe),gd=s(qe," succeding tokens with "),ud=Ot(qe),_d=s(qe,` being the window length as defined in
`),oi=a(qe,"CODE",{});var ed=i(oi);Wm=s(ed,"config.attention_window"),ed.forEach(o),Qm=s(qe,". Note that "),ti=a(qe,"CODE",{});var od=i(ti);Um=s(od,"config.attention_window"),od.forEach(o),Bm=s(qe," can be of type "),ni=a(qe,"CODE",{});var td=i(ni);Hm=s(td,"List"),td.forEach(o),Rm=s(qe,` to define a
different `),wd=Ot(qe),kd=s(qe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),si=a(qe,"CODE",{});var nd=i(si);Vm=s(nd,"BertSelfAttention"),nd.forEach(o),Gm=s(qe,"."),qe.forEach(o),bd=m(t),wo=a(t,"P",{});var zt=i(wo);Km=s(zt,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),vd=Ot(zt),Td=s(zt,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),ri=a(zt,"EM",{});var sd=i(ri);Jm=s(sd,"symmetric"),sd.forEach(o),Xm=s(zt,"."),zt.forEach(o),yd=m(t),ko=a(t,"P",{});var Ct=i(ko);Ym=s(Ct,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),ai=a(Ct,"CODE",{});var rd=i(ai);Zm=s(rd,"global_attention_mask"),rd.forEach(o),eh=s(Ct,` at run-time appropriately. All Longformer models employ the following logic for
`),ii=a(Ct,"CODE",{});var ad=i(ii);oh=s(ad,"global_attention_mask"),ad.forEach(o),th=s(Ct,":"),Ct.forEach(o),$d=m(t),Pt=a(t,"UL",{});var Vr=i(Pt);li=a(Vr,"LI",{});var id=i(li);nh=s(id,"0: the token attends \u201Clocally\u201D,"),id.forEach(o),sh=m(Vr),di=a(Vr,"LI",{});var ck=i(di);rh=s(ck,"1: the token attends \u201Cglobally\u201D."),ck.forEach(o),Vr.forEach(o),Ld=m(t),Nt=a(t,"P",{});var zc=i(Nt);ah=s(zc,"For more information please also refer to "),Gr=a(zc,"A",{href:!0});var mk=i(Gr);ih=s(mk,"forward()"),mk.forEach(o),lh=s(zc," method."),zc.forEach(o),xd=m(t),Je=a(t,"P",{});var vo=i(Je);dh=s(vo,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),Fd=Ot(vo),Md=s(vo,` to
`),Ed=Ot(vo),qd=s(vo,", with "),zd=Ot(vo),Cd=s(vo," being the sequence length and "),jd=Ot(vo),Od=s(vo,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),vo.forEach(o),Pd=m(t),At=a(t,"P",{});var Cc=i(At);ch=s(Cc,"For more information, please refer to the official "),Vn=a(Cc,"A",{href:!0,rel:!0});var hk=i(Vn);mh=s(hk,"paper"),hk.forEach(o),hh=s(Cc,"."),Cc.forEach(o),Nd=m(t),jo=a(t,"H2",{class:!0});var jc=i(jo);It=a(jc,"A",{id:!0,class:!0,href:!0});var pk=i(It);ci=a(pk,"SPAN",{});var fk=i(ci);T(Gn.$$.fragment,fk),fk.forEach(o),pk.forEach(o),ph=m(jc),mi=a(jc,"SPAN",{});var gk=i(mi);fh=s(gk,"Training"),gk.forEach(o),jc.forEach(o),Ad=m(t),Oo=a(t,"P",{});var ld=i(Oo);Kr=a(ld,"A",{href:!0});var uk=i(Kr);gh=s(uk,"LongformerForMaskedLM"),uk.forEach(o),uh=s(ld," is trained the exact same way "),Jr=a(ld,"A",{href:!0});var _k=i(Jr);_h=s(_k,"RobertaForMaskedLM"),_k.forEach(o),wh=s(ld,` is
trained and should be used as follows:`),ld.forEach(o),Id=m(t),T(Kn.$$.fragment,t),Sd=m(t),Po=a(t,"H2",{class:!0});var Oc=i(Po);St=a(Oc,"A",{id:!0,class:!0,href:!0});var wk=i(St);hi=a(wk,"SPAN",{});var kk=i(hi);T(Jn.$$.fragment,kk),kk.forEach(o),wk.forEach(o),kh=m(Oc),pi=a(Oc,"SPAN",{});var bk=i(pi);bh=s(bk,"LongformerConfig"),bk.forEach(o),Oc.forEach(o),Dd=m(t),Be=a(t,"DIV",{class:!0});var To=i(Be);T(Xn.$$.fragment,To),vh=m(To),No=a(To,"P",{});var Ca=i(No);Th=s(Ca,"This is the configuration class to store the configuration of a "),Xr=a(Ca,"A",{href:!0});var vk=i(Xr);yh=s(vk,"LongformerModel"),vk.forEach(o),$h=s(Ca," or a "),Yr=a(Ca,"A",{href:!0});var Tk=i(Yr);Lh=s(Tk,"TFLongformerModel"),Tk.forEach(o),xh=s(Ca,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Ca.forEach(o),Fh=m(To),Ao=a(To,"P",{});var ja=i(Ao);Mh=s(ja,"This is the configuration class to store the configuration of a "),Zr=a(ja,"A",{href:!0});var yk=i(Zr);Eh=s(yk,"LongformerModel"),yk.forEach(o),qh=s(ja,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the LongFormer
`),Yn=a(ja,"A",{href:!0,rel:!0});var $k=i(Yn);zh=s($k,"allenai/longformer-base-4096"),$k.forEach(o),Ch=s(ja,` architecture with a sequence
length 4,096.`),ja.forEach(o),jh=m(To),Io=a(To,"P",{});var Oa=i(Io);Oh=s(Oa,"The "),ea=a(Oa,"A",{href:!0});var Lk=i(ea);Ph=s(Lk,"LongformerConfig"),Lk.forEach(o),Nh=s(Oa," class directly inherits "),oa=a(Oa,"A",{href:!0});var xk=i(oa);Ah=s(xk,"RobertaConfig"),xk.forEach(o),Ih=s(Oa,`. It reuses the same defaults. Please check the
parent class for more information.`),Oa.forEach(o),Sh=m(To),T(Dt.$$.fragment,To),To.forEach(o),Wd=m(t),So=a(t,"H2",{class:!0});var Pc=i(So);Wt=a(Pc,"A",{id:!0,class:!0,href:!0});var Fk=i(Wt);fi=a(Fk,"SPAN",{});var Mk=i(fi);T(Zn.$$.fragment,Mk),Mk.forEach(o),Fk.forEach(o),Dh=m(Pc),gi=a(Pc,"SPAN",{});var Ek=i(gi);Wh=s(Ek,"LongformerTokenizer"),Ek.forEach(o),Pc.forEach(o),Qd=m(t),go=a(t,"DIV",{class:!0});var Pa=i(go);T(es.$$.fragment,Pa),Qh=m(Pa),ui=a(Pa,"P",{});var qk=i(ui);Uh=s(qk,"Construct a Longformer tokenizer."),qk.forEach(o),Bh=m(Pa),Qt=a(Pa,"P",{});var dd=i(Qt);ta=a(dd,"A",{href:!0});var zk=i(ta);Hh=s(zk,"LongformerTokenizer"),zk.forEach(o),Rh=s(dd," is identical to "),na=a(dd,"A",{href:!0});var Ck=i(na);Vh=s(Ck,"RobertaTokenizer"),Ck.forEach(o),Gh=s(dd,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),dd.forEach(o),Pa.forEach(o),Ud=m(t),Do=a(t,"H2",{class:!0});var Nc=i(Do);Ut=a(Nc,"A",{id:!0,class:!0,href:!0});var jk=i(Ut);_i=a(jk,"SPAN",{});var Ok=i(_i);T(os.$$.fragment,Ok),Ok.forEach(o),jk.forEach(o),Kh=m(Nc),wi=a(Nc,"SPAN",{});var Pk=i(wi);Jh=s(Pk,"LongformerTokenizerFast"),Pk.forEach(o),Nc.forEach(o),Bd=m(t),uo=a(t,"DIV",{class:!0});var Na=i(uo);T(ts.$$.fragment,Na),Xh=m(Na),ns=a(Na,"P",{});var Ac=i(ns);Yh=s(Ac,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),ki=a(Ac,"EM",{});var Nk=i(ki);Zh=s(Nk,"tokenizers"),Nk.forEach(o),ep=s(Ac," library)."),Ac.forEach(o),op=m(Na),Bt=a(Na,"P",{});var cd=i(Bt);sa=a(cd,"A",{href:!0});var Ak=i(sa);tp=s(Ak,"LongformerTokenizerFast"),Ak.forEach(o),np=s(cd," is identical to "),ra=a(cd,"A",{href:!0});var Ik=i(ra);sp=s(Ik,"RobertaTokenizerFast"),Ik.forEach(o),rp=s(cd,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),cd.forEach(o),Na.forEach(o),Hd=m(t),Wo=a(t,"H2",{class:!0});var Ic=i(Wo);Ht=a(Ic,"A",{id:!0,class:!0,href:!0});var Sk=i(Ht);bi=a(Sk,"SPAN",{});var Dk=i(bi);T(ss.$$.fragment,Dk),Dk.forEach(o),Sk.forEach(o),ap=m(Ic),vi=a(Ic,"SPAN",{});var Wk=i(vi);ip=s(Wk,"Longformer specific outputs"),Wk.forEach(o),Ic.forEach(o),Rd=m(t),Qo=a(t,"DIV",{class:!0});var Sc=i(Qo);T(rs.$$.fragment,Sc),lp=m(Sc),Ti=a(Sc,"P",{});var Qk=i(Ti);dp=s(Qk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Qk.forEach(o),Sc.forEach(o),Vd=m(t),Uo=a(t,"DIV",{class:!0});var Dc=i(Uo);T(as.$$.fragment,Dc),cp=m(Dc),yi=a(Dc,"P",{});var Uk=i(yi);mp=s(Uk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Uk.forEach(o),Dc.forEach(o),Gd=m(t),Bo=a(t,"DIV",{class:!0});var Wc=i(Bo);T(is.$$.fragment,Wc),hp=m(Wc),$i=a(Wc,"P",{});var Bk=i($i);pp=s(Bk,"Base class for masked language models outputs."),Bk.forEach(o),Wc.forEach(o),Kd=m(t),Ho=a(t,"DIV",{class:!0});var Qc=i(Ho);T(ls.$$.fragment,Qc),fp=m(Qc),Li=a(Qc,"P",{});var Hk=i(Li);gp=s(Hk,"Base class for outputs of question answering Longformer models."),Hk.forEach(o),Qc.forEach(o),Jd=m(t),Ro=a(t,"DIV",{class:!0});var Uc=i(Ro);T(ds.$$.fragment,Uc),up=m(Uc),xi=a(Uc,"P",{});var Rk=i(xi);_p=s(Rk,"Base class for outputs of sentence classification models."),Rk.forEach(o),Uc.forEach(o),Xd=m(t),Vo=a(t,"DIV",{class:!0});var Bc=i(Vo);T(cs.$$.fragment,Bc),wp=m(Bc),Fi=a(Bc,"P",{});var Vk=i(Fi);kp=s(Vk,"Base class for outputs of multiple choice Longformer models."),Vk.forEach(o),Bc.forEach(o),Yd=m(t),Go=a(t,"DIV",{class:!0});var Hc=i(Go);T(ms.$$.fragment,Hc),bp=m(Hc),Mi=a(Hc,"P",{});var Gk=i(Mi);vp=s(Gk,"Base class for outputs of token classification models."),Gk.forEach(o),Hc.forEach(o),Zd=m(t),Ko=a(t,"DIV",{class:!0});var Rc=i(Ko);T(hs.$$.fragment,Rc),Tp=m(Rc),Ei=a(Rc,"P",{});var Kk=i(Ei);yp=s(Kk,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Kk.forEach(o),Rc.forEach(o),ec=m(t),Jo=a(t,"DIV",{class:!0});var Vc=i(Jo);T(ps.$$.fragment,Vc),$p=m(Vc),qi=a(Vc,"P",{});var Jk=i(qi);Lp=s(Jk,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Jk.forEach(o),Vc.forEach(o),oc=m(t),Xo=a(t,"DIV",{class:!0});var Gc=i(Xo);T(fs.$$.fragment,Gc),xp=m(Gc),zi=a(Gc,"P",{});var Xk=i(zi);Fp=s(Xk,"Base class for masked language models outputs."),Xk.forEach(o),Gc.forEach(o),tc=m(t),Yo=a(t,"DIV",{class:!0});var Kc=i(Yo);T(gs.$$.fragment,Kc),Mp=m(Kc),Ci=a(Kc,"P",{});var Yk=i(Ci);Ep=s(Yk,"Base class for outputs of question answering Longformer models."),Yk.forEach(o),Kc.forEach(o),nc=m(t),Zo=a(t,"DIV",{class:!0});var Jc=i(Zo);T(us.$$.fragment,Jc),qp=m(Jc),ji=a(Jc,"P",{});var Zk=i(ji);zp=s(Zk,"Base class for outputs of sentence classification models."),Zk.forEach(o),Jc.forEach(o),sc=m(t),et=a(t,"DIV",{class:!0});var Xc=i(et);T(_s.$$.fragment,Xc),Cp=m(Xc),Oi=a(Xc,"P",{});var eb=i(Oi);jp=s(eb,"Base class for outputs of multiple choice models."),eb.forEach(o),Xc.forEach(o),rc=m(t),ot=a(t,"DIV",{class:!0});var Yc=i(ot);T(ws.$$.fragment,Yc),Op=m(Yc),Pi=a(Yc,"P",{});var ob=i(Pi);Pp=s(ob,"Base class for outputs of token classification models."),ob.forEach(o),Yc.forEach(o),ac=m(t),tt=a(t,"H2",{class:!0});var Zc=i(tt);Rt=a(Zc,"A",{id:!0,class:!0,href:!0});var tb=i(Rt);Ni=a(tb,"SPAN",{});var nb=i(Ni);T(ks.$$.fragment,nb),nb.forEach(o),tb.forEach(o),Np=m(Zc),Ai=a(Zc,"SPAN",{});var sb=i(Ai);Ap=s(sb,"LongformerModel"),sb.forEach(o),Zc.forEach(o),ic=m(t),Pe=a(t,"DIV",{class:!0});var to=i(Pe);T(bs.$$.fragment,to),Ip=m(to),Ii=a(to,"P",{});var rb=i(Ii);Sp=s(rb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),rb.forEach(o),Dp=m(to),vs=a(to,"P",{});var em=i(vs);Wp=s(em,"This model inherits from "),aa=a(em,"A",{href:!0});var ab=i(aa);Qp=s(ab,"PreTrainedModel"),ab.forEach(o),Up=s(em,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),em.forEach(o),Bp=m(to),Ts=a(to,"P",{});var om=i(Ts);Hp=s(om,"This model is also a PyTorch "),ys=a(om,"A",{href:!0,rel:!0});var ib=i(ys);Rp=s(ib,"torch.nn.Module"),ib.forEach(o),Vp=s(om,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),om.forEach(o),Gp=m(to),nt=a(to,"P",{});var Aa=i(nt);Kp=s(Aa,"This class copied code from "),ia=a(Aa,"A",{href:!0});var lb=i(ia);Jp=s(lb,"RobertaModel"),lb.forEach(o),Xp=s(Aa,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),$s=a(Aa,"A",{href:!0,rel:!0});var db=i($s);Yp=s(db,`Longformer:
the Long-Document Transformer`),db.forEach(o),Zp=s(Aa,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Aa.forEach(o),ef=m(to),Ls=a(to,"P",{});var tm=i(Ls);of=s(tm,"The self-attention module "),Si=a(tm,"CODE",{});var cb=i(Si);tf=s(cb,"LongformerSelfAttention"),cb.forEach(o),nf=s(tm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),tm.forEach(o),sf=m(to),so=a(to,"DIV",{class:!0});var Qn=i(so);T(xs.$$.fragment,Qn),rf=m(Qn),st=a(Qn,"P",{});var Ia=i(st);af=s(Ia,"The "),la=a(Ia,"A",{href:!0});var mb=i(la);lf=s(mb,"LongformerModel"),mb.forEach(o),df=s(Ia," forward method, overrides the "),Di=a(Ia,"CODE",{});var hb=i(Di);cf=s(hb,"__call__"),hb.forEach(o),mf=s(Ia," special method."),Ia.forEach(o),hf=m(Qn),T(Vt.$$.fragment,Qn),pf=m(Qn),T(Gt.$$.fragment,Qn),Qn.forEach(o),to.forEach(o),lc=m(t),rt=a(t,"H2",{class:!0});var nm=i(rt);Kt=a(nm,"A",{id:!0,class:!0,href:!0});var pb=i(Kt);Wi=a(pb,"SPAN",{});var fb=i(Wi);T(Fs.$$.fragment,fb),fb.forEach(o),pb.forEach(o),ff=m(nm),Qi=a(nm,"SPAN",{});var gb=i(Qi);gf=s(gb,"LongformerForMaskedLM"),gb.forEach(o),nm.forEach(o),dc=m(t),He=a(t,"DIV",{class:!0});var yo=i(He);T(Ms.$$.fragment,yo),uf=m(yo),Es=a(yo,"P",{});var sm=i(Es);_f=s(sm,"Longformer Model with a "),Ui=a(sm,"CODE",{});var ub=i(Ui);wf=s(ub,"language modeling"),ub.forEach(o),kf=s(sm," head on top."),sm.forEach(o),bf=m(yo),qs=a(yo,"P",{});var rm=i(qs);vf=s(rm,"This model inherits from "),da=a(rm,"A",{href:!0});var _b=i(da);Tf=s(_b,"PreTrainedModel"),_b.forEach(o),yf=s(rm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rm.forEach(o),$f=m(yo),zs=a(yo,"P",{});var am=i(zs);Lf=s(am,"This model is also a PyTorch "),Cs=a(am,"A",{href:!0,rel:!0});var wb=i(Cs);xf=s(wb,"torch.nn.Module"),wb.forEach(o),Ff=s(am,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),am.forEach(o),Mf=m(yo),ro=a(yo,"DIV",{class:!0});var Un=i(ro);T(js.$$.fragment,Un),Ef=m(Un),at=a(Un,"P",{});var Sa=i(at);qf=s(Sa,"The "),ca=a(Sa,"A",{href:!0});var kb=i(ca);zf=s(kb,"LongformerForMaskedLM"),kb.forEach(o),Cf=s(Sa," forward method, overrides the "),Bi=a(Sa,"CODE",{});var bb=i(Bi);jf=s(bb,"__call__"),bb.forEach(o),Of=s(Sa," special method."),Sa.forEach(o),Pf=m(Un),T(Jt.$$.fragment,Un),Nf=m(Un),T(Xt.$$.fragment,Un),Un.forEach(o),yo.forEach(o),cc=m(t),it=a(t,"H2",{class:!0});var im=i(it);Yt=a(im,"A",{id:!0,class:!0,href:!0});var vb=i(Yt);Hi=a(vb,"SPAN",{});var Tb=i(Hi);T(Os.$$.fragment,Tb),Tb.forEach(o),vb.forEach(o),Af=m(im),Ri=a(im,"SPAN",{});var yb=i(Ri);If=s(yb,"LongformerForSequenceClassification"),yb.forEach(o),im.forEach(o),mc=m(t),Re=a(t,"DIV",{class:!0});var $o=i(Re);T(Ps.$$.fragment,$o),Sf=m($o),Vi=a($o,"P",{});var $b=i(Vi);Df=s($b,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),$b.forEach(o),Wf=m($o),Ns=a($o,"P",{});var lm=i(Ns);Qf=s(lm,"This model inherits from "),ma=a(lm,"A",{href:!0});var Lb=i(ma);Uf=s(Lb,"PreTrainedModel"),Lb.forEach(o),Bf=s(lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm.forEach(o),Hf=m($o),As=a($o,"P",{});var dm=i(As);Rf=s(dm,"This model is also a PyTorch "),Is=a(dm,"A",{href:!0,rel:!0});var xb=i(Is);Vf=s(xb,"torch.nn.Module"),xb.forEach(o),Gf=s(dm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dm.forEach(o),Kf=m($o),Ne=a($o,"DIV",{class:!0});var no=i(Ne);T(Ss.$$.fragment,no),Jf=m(no),lt=a(no,"P",{});var Da=i(lt);Xf=s(Da,"The "),ha=a(Da,"A",{href:!0});var Fb=i(ha);Yf=s(Fb,"LongformerForSequenceClassification"),Fb.forEach(o),Zf=s(Da," forward method, overrides the "),Gi=a(Da,"CODE",{});var Mb=i(Gi);eg=s(Mb,"__call__"),Mb.forEach(o),og=s(Da," special method."),Da.forEach(o),tg=m(no),T(Zt.$$.fragment,no),ng=m(no),T(en.$$.fragment,no),sg=m(no),T(on.$$.fragment,no),rg=m(no),T(tn.$$.fragment,no),ag=m(no),T(nn.$$.fragment,no),no.forEach(o),$o.forEach(o),hc=m(t),dt=a(t,"H2",{class:!0});var cm=i(dt);sn=a(cm,"A",{id:!0,class:!0,href:!0});var Eb=i(sn);Ki=a(Eb,"SPAN",{});var qb=i(Ki);T(Ds.$$.fragment,qb),qb.forEach(o),Eb.forEach(o),ig=m(cm),Ji=a(cm,"SPAN",{});var zb=i(Ji);lg=s(zb,"LongformerForMultipleChoice"),zb.forEach(o),cm.forEach(o),pc=m(t),Ve=a(t,"DIV",{class:!0});var Lo=i(Ve);T(Ws.$$.fragment,Lo),dg=m(Lo),Xi=a(Lo,"P",{});var Cb=i(Xi);cg=s(Cb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Cb.forEach(o),mg=m(Lo),Qs=a(Lo,"P",{});var mm=i(Qs);hg=s(mm,"This model inherits from "),pa=a(mm,"A",{href:!0});var jb=i(pa);pg=s(jb,"PreTrainedModel"),jb.forEach(o),fg=s(mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mm.forEach(o),gg=m(Lo),Us=a(Lo,"P",{});var hm=i(Us);ug=s(hm,"This model is also a PyTorch "),Bs=a(hm,"A",{href:!0,rel:!0});var Ob=i(Bs);_g=s(Ob,"torch.nn.Module"),Ob.forEach(o),wg=s(hm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hm.forEach(o),kg=m(Lo),ao=a(Lo,"DIV",{class:!0});var Bn=i(ao);T(Hs.$$.fragment,Bn),bg=m(Bn),ct=a(Bn,"P",{});var Wa=i(ct);vg=s(Wa,"The "),fa=a(Wa,"A",{href:!0});var Pb=i(fa);Tg=s(Pb,"LongformerForMultipleChoice"),Pb.forEach(o),yg=s(Wa," forward method, overrides the "),Yi=a(Wa,"CODE",{});var Nb=i(Yi);$g=s(Nb,"__call__"),Nb.forEach(o),Lg=s(Wa," special method."),Wa.forEach(o),xg=m(Bn),T(rn.$$.fragment,Bn),Fg=m(Bn),T(an.$$.fragment,Bn),Bn.forEach(o),Lo.forEach(o),fc=m(t),mt=a(t,"H2",{class:!0});var pm=i(mt);ln=a(pm,"A",{id:!0,class:!0,href:!0});var Ab=i(ln);Zi=a(Ab,"SPAN",{});var Ib=i(Zi);T(Rs.$$.fragment,Ib),Ib.forEach(o),Ab.forEach(o),Mg=m(pm),el=a(pm,"SPAN",{});var Sb=i(el);Eg=s(Sb,"LongformerForTokenClassification"),Sb.forEach(o),pm.forEach(o),gc=m(t),Ge=a(t,"DIV",{class:!0});var xo=i(Ge);T(Vs.$$.fragment,xo),qg=m(xo),ol=a(xo,"P",{});var Db=i(ol);zg=s(Db,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Db.forEach(o),Cg=m(xo),Gs=a(xo,"P",{});var fm=i(Gs);jg=s(fm,"This model inherits from "),ga=a(fm,"A",{href:!0});var Wb=i(ga);Og=s(Wb,"PreTrainedModel"),Wb.forEach(o),Pg=s(fm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fm.forEach(o),Ng=m(xo),Ks=a(xo,"P",{});var gm=i(Ks);Ag=s(gm,"This model is also a PyTorch "),Js=a(gm,"A",{href:!0,rel:!0});var Qb=i(Js);Ig=s(Qb,"torch.nn.Module"),Qb.forEach(o),Sg=s(gm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gm.forEach(o),Dg=m(xo),Xe=a(xo,"DIV",{class:!0});var Fo=i(Xe);T(Xs.$$.fragment,Fo),Wg=m(Fo),ht=a(Fo,"P",{});var Qa=i(ht);Qg=s(Qa,"The "),ua=a(Qa,"A",{href:!0});var Ub=i(ua);Ug=s(Ub,"LongformerForTokenClassification"),Ub.forEach(o),Bg=s(Qa," forward method, overrides the "),tl=a(Qa,"CODE",{});var Bb=i(tl);Hg=s(Bb,"__call__"),Bb.forEach(o),Rg=s(Qa," special method."),Qa.forEach(o),Vg=m(Fo),T(dn.$$.fragment,Fo),Gg=m(Fo),T(cn.$$.fragment,Fo),Kg=m(Fo),T(mn.$$.fragment,Fo),Fo.forEach(o),xo.forEach(o),uc=m(t),pt=a(t,"H2",{class:!0});var um=i(pt);hn=a(um,"A",{id:!0,class:!0,href:!0});var Hb=i(hn);nl=a(Hb,"SPAN",{});var Rb=i(nl);T(Ys.$$.fragment,Rb),Rb.forEach(o),Hb.forEach(o),Jg=m(um),sl=a(um,"SPAN",{});var Vb=i(sl);Xg=s(Vb,"LongformerForQuestionAnswering"),Vb.forEach(o),um.forEach(o),_c=m(t),Ke=a(t,"DIV",{class:!0});var Mo=i(Ke);T(Zs.$$.fragment,Mo),Yg=m(Mo),ft=a(Mo,"P",{});var Ua=i(ft);Zg=s(Ua,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),rl=a(Ua,"CODE",{});var Gb=i(rl);eu=s(Gb,"span start logits"),Gb.forEach(o),ou=s(Ua," and "),al=a(Ua,"CODE",{});var Kb=i(al);tu=s(Kb,"span end logits"),Kb.forEach(o),nu=s(Ua,")."),Ua.forEach(o),su=m(Mo),er=a(Mo,"P",{});var _m=i(er);ru=s(_m,"This model inherits from "),_a=a(_m,"A",{href:!0});var Jb=i(_a);au=s(Jb,"PreTrainedModel"),Jb.forEach(o),iu=s(_m,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_m.forEach(o),lu=m(Mo),or=a(Mo,"P",{});var wm=i(or);du=s(wm,"This model is also a PyTorch "),tr=a(wm,"A",{href:!0,rel:!0});var Xb=i(tr);cu=s(Xb,"torch.nn.Module"),Xb.forEach(o),mu=s(wm,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wm.forEach(o),hu=m(Mo),io=a(Mo,"DIV",{class:!0});var Hn=i(io);T(nr.$$.fragment,Hn),pu=m(Hn),gt=a(Hn,"P",{});var Ba=i(gt);fu=s(Ba,"The "),wa=a(Ba,"A",{href:!0});var Yb=i(wa);gu=s(Yb,"LongformerForQuestionAnswering"),Yb.forEach(o),uu=s(Ba," forward method, overrides the "),il=a(Ba,"CODE",{});var Zb=i(il);_u=s(Zb,"__call__"),Zb.forEach(o),wu=s(Ba," special method."),Ba.forEach(o),ku=m(Hn),T(pn.$$.fragment,Hn),bu=m(Hn),T(fn.$$.fragment,Hn),Hn.forEach(o),Mo.forEach(o),wc=m(t),ut=a(t,"H2",{class:!0});var km=i(ut);gn=a(km,"A",{id:!0,class:!0,href:!0});var ev=i(gn);ll=a(ev,"SPAN",{});var ov=i(ll);T(sr.$$.fragment,ov),ov.forEach(o),ev.forEach(o),vu=m(km),dl=a(km,"SPAN",{});var tv=i(dl);Tu=s(tv,"TFLongformerModel"),tv.forEach(o),km.forEach(o),kc=m(t),Ee=a(t,"DIV",{class:!0});var Ue=i(Ee);T(rr.$$.fragment,Ue),yu=m(Ue),cl=a(Ue,"P",{});var nv=i(cl);$u=s(nv,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),nv.forEach(o),Lu=m(Ue),ar=a(Ue,"P",{});var bm=i(ar);xu=s(bm,"This model inherits from "),ka=a(bm,"A",{href:!0});var sv=i(ka);Fu=s(sv,"TFPreTrainedModel"),sv.forEach(o),Mu=s(bm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bm.forEach(o),Eu=m(Ue),ir=a(Ue,"P",{});var vm=i(ir);qu=s(vm,"This model is also a "),lr=a(vm,"A",{href:!0,rel:!0});var rv=i(lr);zu=s(rv,"tf.keras.Model"),rv.forEach(o),Cu=s(vm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vm.forEach(o),ju=m(Ue),T(un.$$.fragment,Ue),Ou=m(Ue),_t=a(Ue,"P",{});var Ha=i(_t);Pu=s(Ha,"This class copies code from "),ba=a(Ha,"A",{href:!0});var av=i(ba);Nu=s(av,"TFRobertaModel"),av.forEach(o),Au=s(Ha,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),dr=a(Ha,"A",{href:!0,rel:!0});var iv=i(dr);Iu=s(iv,"Longformer: the Long-Document Transformer"),iv.forEach(o),Su=s(Ha,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Ha.forEach(o),Du=m(Ue),cr=a(Ue,"P",{});var Tm=i(cr);Wu=s(Tm,"The self-attention module "),ml=a(Tm,"CODE",{});var lv=i(ml);Qu=s(lv,"TFLongformerSelfAttention"),lv.forEach(o),Uu=s(Tm,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Tm.forEach(o),Bu=m(Ue),bo=a(Ue,"DIV",{class:!0});var Ra=i(bo);T(mr.$$.fragment,Ra),Hu=m(Ra),wt=a(Ra,"P",{});var Va=i(wt);Ru=s(Va,"The "),va=a(Va,"A",{href:!0});var dv=i(va);Vu=s(dv,"TFLongformerModel"),dv.forEach(o),Gu=s(Va," forward method, overrides the "),hl=a(Va,"CODE",{});var cv=i(hl);Ku=s(cv,"__call__"),cv.forEach(o),Ju=s(Va," special method."),Va.forEach(o),Xu=m(Ra),T(_n.$$.fragment,Ra),Ra.forEach(o),Ue.forEach(o),bc=m(t),kt=a(t,"H2",{class:!0});var ym=i(kt);wn=a(ym,"A",{id:!0,class:!0,href:!0});var mv=i(wn);pl=a(mv,"SPAN",{});var hv=i(pl);T(hr.$$.fragment,hv),hv.forEach(o),mv.forEach(o),Yu=m(ym),fl=a(ym,"SPAN",{});var pv=i(fl);Zu=s(pv,"TFLongformerForMaskedLM"),pv.forEach(o),ym.forEach(o),vc=m(t),Ie=a(t,"DIV",{class:!0});var co=i(Ie);T(pr.$$.fragment,co),e_=m(co),fr=a(co,"P",{});var $m=i(fr);o_=s($m,"Longformer Model with a "),gl=a($m,"CODE",{});var fv=i(gl);t_=s(fv,"language modeling"),fv.forEach(o),n_=s($m," head on top."),$m.forEach(o),s_=m(co),gr=a(co,"P",{});var Lm=i(gr);r_=s(Lm,"This model inherits from "),Ta=a(Lm,"A",{href:!0});var gv=i(Ta);a_=s(gv,"TFPreTrainedModel"),gv.forEach(o),i_=s(Lm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lm.forEach(o),l_=m(co),ur=a(co,"P",{});var xm=i(ur);d_=s(xm,"This model is also a "),_r=a(xm,"A",{href:!0,rel:!0});var uv=i(_r);c_=s(uv,"tf.keras.Model"),uv.forEach(o),m_=s(xm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xm.forEach(o),h_=m(co),T(kn.$$.fragment,co),p_=m(co),Ye=a(co,"DIV",{class:!0});var Eo=i(Ye);T(wr.$$.fragment,Eo),f_=m(Eo),bt=a(Eo,"P",{});var Ga=i(bt);g_=s(Ga,"The "),ya=a(Ga,"A",{href:!0});var _v=i(ya);u_=s(_v,"TFLongformerForMaskedLM"),_v.forEach(o),__=s(Ga," forward method, overrides the "),ul=a(Ga,"CODE",{});var wv=i(ul);w_=s(wv,"__call__"),wv.forEach(o),k_=s(Ga," special method."),Ga.forEach(o),b_=m(Eo),T(bn.$$.fragment,Eo),v_=m(Eo),T(vn.$$.fragment,Eo),T_=m(Eo),T(Tn.$$.fragment,Eo),Eo.forEach(o),co.forEach(o),Tc=m(t),vt=a(t,"H2",{class:!0});var Fm=i(vt);yn=a(Fm,"A",{id:!0,class:!0,href:!0});var kv=i(yn);_l=a(kv,"SPAN",{});var bv=i(_l);T(kr.$$.fragment,bv),bv.forEach(o),kv.forEach(o),y_=m(Fm),wl=a(Fm,"SPAN",{});var vv=i(wl);$_=s(vv,"TFLongformerForQuestionAnswering"),vv.forEach(o),Fm.forEach(o),yc=m(t),Se=a(t,"DIV",{class:!0});var mo=i(Se);T(br.$$.fragment,mo),L_=m(mo),Tt=a(mo,"P",{});var Ka=i(Tt);x_=s(Ka,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),kl=a(Ka,"CODE",{});var Tv=i(kl);F_=s(Tv,"span start logits"),Tv.forEach(o),M_=s(Ka," and "),bl=a(Ka,"CODE",{});var yv=i(bl);E_=s(yv,"span end logits"),yv.forEach(o),q_=s(Ka,")."),Ka.forEach(o),z_=m(mo),vr=a(mo,"P",{});var Mm=i(vr);C_=s(Mm,"This model inherits from "),$a=a(Mm,"A",{href:!0});var $v=i($a);j_=s($v,"TFPreTrainedModel"),$v.forEach(o),O_=s(Mm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mm.forEach(o),P_=m(mo),Tr=a(mo,"P",{});var Em=i(Tr);N_=s(Em,"This model is also a "),yr=a(Em,"A",{href:!0,rel:!0});var Lv=i(yr);A_=s(Lv,"tf.keras.Model"),Lv.forEach(o),I_=s(Em,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Em.forEach(o),S_=m(mo),T($n.$$.fragment,mo),D_=m(mo),Ze=a(mo,"DIV",{class:!0});var qo=i(Ze);T($r.$$.fragment,qo),W_=m(qo),yt=a(qo,"P",{});var Ja=i(yt);Q_=s(Ja,"The "),La=a(Ja,"A",{href:!0});var xv=i(La);U_=s(xv,"TFLongformerForQuestionAnswering"),xv.forEach(o),B_=s(Ja," forward method, overrides the "),vl=a(Ja,"CODE",{});var Fv=i(vl);H_=s(Fv,"__call__"),Fv.forEach(o),R_=s(Ja," special method."),Ja.forEach(o),V_=m(qo),T(Ln.$$.fragment,qo),G_=m(qo),T(xn.$$.fragment,qo),K_=m(qo),T(Fn.$$.fragment,qo),qo.forEach(o),mo.forEach(o),$c=m(t),$t=a(t,"H2",{class:!0});var qm=i($t);Mn=a(qm,"A",{id:!0,class:!0,href:!0});var Mv=i(Mn);Tl=a(Mv,"SPAN",{});var Ev=i(Tl);T(Lr.$$.fragment,Ev),Ev.forEach(o),Mv.forEach(o),J_=m(qm),yl=a(qm,"SPAN",{});var qv=i(yl);X_=s(qv,"TFLongformerForSequenceClassification"),qv.forEach(o),qm.forEach(o),Lc=m(t),De=a(t,"DIV",{class:!0});var ho=i(De);T(xr.$$.fragment,ho),Y_=m(ho),$l=a(ho,"P",{});var zv=i($l);Z_=s(zv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),zv.forEach(o),ew=m(ho),Fr=a(ho,"P",{});var zm=i(Fr);ow=s(zm,"This model inherits from "),xa=a(zm,"A",{href:!0});var Cv=i(xa);tw=s(Cv,"TFPreTrainedModel"),Cv.forEach(o),nw=s(zm,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zm.forEach(o),sw=m(ho),Mr=a(ho,"P",{});var Cm=i(Mr);rw=s(Cm,"This model is also a "),Er=a(Cm,"A",{href:!0,rel:!0});var jv=i(Er);aw=s(jv,"tf.keras.Model"),jv.forEach(o),iw=s(Cm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cm.forEach(o),lw=m(ho),T(En.$$.fragment,ho),dw=m(ho),eo=a(ho,"DIV",{class:!0});var zo=i(eo);T(qr.$$.fragment,zo),cw=m(zo),Lt=a(zo,"P",{});var Xa=i(Lt);mw=s(Xa,"The "),Fa=a(Xa,"A",{href:!0});var Ov=i(Fa);hw=s(Ov,"TFLongformerForSequenceClassification"),Ov.forEach(o),pw=s(Xa," forward method, overrides the "),Ll=a(Xa,"CODE",{});var Pv=i(Ll);fw=s(Pv,"__call__"),Pv.forEach(o),gw=s(Xa," special method."),Xa.forEach(o),uw=m(zo),T(qn.$$.fragment,zo),_w=m(zo),T(zn.$$.fragment,zo),ww=m(zo),T(Cn.$$.fragment,zo),zo.forEach(o),ho.forEach(o),xc=m(t),xt=a(t,"H2",{class:!0});var jm=i(xt);jn=a(jm,"A",{id:!0,class:!0,href:!0});var Nv=i(jn);xl=a(Nv,"SPAN",{});var Av=i(xl);T(zr.$$.fragment,Av),Av.forEach(o),Nv.forEach(o),kw=m(jm),Fl=a(jm,"SPAN",{});var Iv=i(Fl);bw=s(Iv,"TFLongformerForTokenClassification"),Iv.forEach(o),jm.forEach(o),Fc=m(t),We=a(t,"DIV",{class:!0});var po=i(We);T(Cr.$$.fragment,po),vw=m(po),Ml=a(po,"P",{});var Sv=i(Ml);Tw=s(Sv,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Sv.forEach(o),yw=m(po),jr=a(po,"P",{});var Om=i(jr);$w=s(Om,"This model inherits from "),Ma=a(Om,"A",{href:!0});var Dv=i(Ma);Lw=s(Dv,"TFPreTrainedModel"),Dv.forEach(o),xw=s(Om,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Om.forEach(o),Fw=m(po),Or=a(po,"P",{});var Pm=i(Or);Mw=s(Pm,"This model is also a "),Pr=a(Pm,"A",{href:!0,rel:!0});var Wv=i(Pr);Ew=s(Wv,"tf.keras.Model"),Wv.forEach(o),qw=s(Pm,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pm.forEach(o),zw=m(po),T(On.$$.fragment,po),Cw=m(po),oo=a(po,"DIV",{class:!0});var Co=i(oo);T(Nr.$$.fragment,Co),jw=m(Co),Ft=a(Co,"P",{});var Ya=i(Ft);Ow=s(Ya,"The "),Ea=a(Ya,"A",{href:!0});var Qv=i(Ea);Pw=s(Qv,"TFLongformerForTokenClassification"),Qv.forEach(o),Nw=s(Ya," forward method, overrides the "),El=a(Ya,"CODE",{});var Uv=i(El);Aw=s(Uv,"__call__"),Uv.forEach(o),Iw=s(Ya," special method."),Ya.forEach(o),Sw=m(Co),T(Pn.$$.fragment,Co),Dw=m(Co),T(Nn.$$.fragment,Co),Ww=m(Co),T(An.$$.fragment,Co),Co.forEach(o),po.forEach(o),Mc=m(t),Mt=a(t,"H2",{class:!0});var Nm=i(Mt);In=a(Nm,"A",{id:!0,class:!0,href:!0});var Bv=i(In);ql=a(Bv,"SPAN",{});var Hv=i(ql);T(Ar.$$.fragment,Hv),Hv.forEach(o),Bv.forEach(o),Qw=m(Nm),zl=a(Nm,"SPAN",{});var Rv=i(zl);Uw=s(Rv,"TFLongformerForMultipleChoice"),Rv.forEach(o),Nm.forEach(o),Ec=m(t),Qe=a(t,"DIV",{class:!0});var fo=i(Qe);T(Ir.$$.fragment,fo),Bw=m(fo),Cl=a(fo,"P",{});var Vv=i(Cl);Hw=s(Vv,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Vv.forEach(o),Rw=m(fo),Sr=a(fo,"P",{});var Am=i(Sr);Vw=s(Am,"This model inherits from "),qa=a(Am,"A",{href:!0});var Gv=i(qa);Gw=s(Gv,"TFPreTrainedModel"),Gv.forEach(o),Kw=s(Am,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Am.forEach(o),Jw=m(fo),Dr=a(fo,"P",{});var Im=i(Dr);Xw=s(Im,"This model is also a "),Wr=a(Im,"A",{href:!0,rel:!0});var Kv=i(Wr);Yw=s(Kv,"tf.keras.Model"),Kv.forEach(o),Zw=s(Im,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im.forEach(o),ek=m(fo),T(Sn.$$.fragment,fo),ok=m(fo),lo=a(fo,"DIV",{class:!0});var Rn=i(lo);T(Qr.$$.fragment,Rn),tk=m(Rn),Et=a(Rn,"P",{});var Za=i(Et);nk=s(Za,"The "),za=a(Za,"A",{href:!0});var Jv=i(za);sk=s(Jv,"TFLongformerForMultipleChoice"),Jv.forEach(o),rk=s(Za," forward method, overrides the "),jl=a(Za,"CODE",{});var Xv=i(jl);ak=s(Xv,"__call__"),Xv.forEach(o),ik=s(Za," special method."),Za.forEach(o),lk=m(Rn),T(Dn.$$.fragment,Rn),dk=m(Rn),T(Wn.$$.fragment,Rn),Rn.forEach(o),fo.forEach(o),this.h()},h(){_(d,"name","hf:doc:metadata"),_(d,"content",JSON.stringify(XT)),_(p,"id","longformer"),_(p,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(p,"href","#longformer"),_(h,"class","relative group"),_(Z,"id","overview"),_(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Z,"href","#overview"),_(q,"class","relative group"),_(oe,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(oe,"rel","nofollow"),_(be,"href","https://huggingface.co/beltagy"),_(be,"rel","nofollow"),_(O,"href","https://github.com/allenai/longformer"),_(O,"rel","nofollow"),_(ke,"id","longformer-self-attention"),_(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ke,"href","#longformer-self-attention"),_(I,"class","relative group"),hd.a=pd,fd.a=gd,ud.a=_d,wd.a=kd,vd.a=Td,_(Gr,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerModel.forward"),Fd.a=Md,Ed.a=qd,zd.a=Cd,jd.a=Od,_(Vn,"href","https://arxiv.org/pdf/2004.05150.pdf"),_(Vn,"rel","nofollow"),_(It,"id","training"),_(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(It,"href","#training"),_(jo,"class","relative group"),_(Kr,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(Jr,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.RobertaForMaskedLM"),_(St,"id","transformers.LongformerConfig"),_(St,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(St,"href","#transformers.LongformerConfig"),_(Po,"class","relative group"),_(Xr,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerModel"),_(Yr,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerModel"),_(Zr,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerModel"),_(Yn,"href","https://huggingface.co/allenai/longformer-base-4096"),_(Yn,"rel","nofollow"),_(ea,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerConfig"),_(oa,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.RobertaConfig"),_(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Wt,"id","transformers.LongformerTokenizer"),_(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Wt,"href","#transformers.LongformerTokenizer"),_(So,"class","relative group"),_(ta,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizer"),_(na,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.RobertaTokenizer"),_(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ut,"id","transformers.LongformerTokenizerFast"),_(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ut,"href","#transformers.LongformerTokenizerFast"),_(Do,"class","relative group"),_(sa,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerTokenizerFast"),_(ra,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.RobertaTokenizerFast"),_(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ht,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Ht,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),_(Wo,"class","relative group"),_(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Jo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Zo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Rt,"id","transformers.LongformerModel"),_(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Rt,"href","#transformers.LongformerModel"),_(tt,"class","relative group"),_(aa,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(ys,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(ys,"rel","nofollow"),_(ia,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.RobertaModel"),_($s,"href","https://arxiv.org/abs/2004.05150"),_($s,"rel","nofollow"),_(la,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerModel"),_(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Kt,"id","transformers.LongformerForMaskedLM"),_(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Kt,"href","#transformers.LongformerForMaskedLM"),_(rt,"class","relative group"),_(da,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(Cs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Cs,"rel","nofollow"),_(ca,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForMaskedLM"),_(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Yt,"id","transformers.LongformerForSequenceClassification"),_(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Yt,"href","#transformers.LongformerForSequenceClassification"),_(it,"class","relative group"),_(ma,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Is,"rel","nofollow"),_(ha,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),_(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(sn,"id","transformers.LongformerForMultipleChoice"),_(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(sn,"href","#transformers.LongformerForMultipleChoice"),_(dt,"class","relative group"),_(pa,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(Bs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Bs,"rel","nofollow"),_(fa,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),_(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(ln,"id","transformers.LongformerForTokenClassification"),_(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(ln,"href","#transformers.LongformerForTokenClassification"),_(mt,"class","relative group"),_(ga,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(Js,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(Js,"rel","nofollow"),_(ua,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForTokenClassification"),_(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(hn,"id","transformers.LongformerForQuestionAnswering"),_(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(hn,"href","#transformers.LongformerForQuestionAnswering"),_(pt,"class","relative group"),_(_a,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.PreTrainedModel"),_(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),_(tr,"rel","nofollow"),_(wa,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),_(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(gn,"id","transformers.TFLongformerModel"),_(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(gn,"href","#transformers.TFLongformerModel"),_(ut,"class","relative group"),_(ka,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(lr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(lr,"rel","nofollow"),_(ba,"href","/docs/transformers/v4.19.2/en/model_doc/roberta#transformers.TFRobertaModel"),_(dr,"href","https://arxiv.org/abs/2004.05150"),_(dr,"rel","nofollow"),_(va,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerModel"),_(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(wn,"id","transformers.TFLongformerForMaskedLM"),_(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(wn,"href","#transformers.TFLongformerForMaskedLM"),_(kt,"class","relative group"),_(Ta,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(_r,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(_r,"rel","nofollow"),_(ya,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),_(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(yn,"id","transformers.TFLongformerForQuestionAnswering"),_(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(yn,"href","#transformers.TFLongformerForQuestionAnswering"),_(vt,"class","relative group"),_($a,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(yr,"rel","nofollow"),_(La,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),_(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Mn,"id","transformers.TFLongformerForSequenceClassification"),_(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(Mn,"href","#transformers.TFLongformerForSequenceClassification"),_($t,"class","relative group"),_(xa,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Er,"rel","nofollow"),_(Fa,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),_(eo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(jn,"id","transformers.TFLongformerForTokenClassification"),_(jn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(jn,"href","#transformers.TFLongformerForTokenClassification"),_(xt,"class","relative group"),_(Ma,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Pr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Pr,"rel","nofollow"),_(Ea,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),_(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(In,"id","transformers.TFLongformerForMultipleChoice"),_(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(In,"href","#transformers.TFLongformerForMultipleChoice"),_(Mt,"class","relative group"),_(qa,"href","/docs/transformers/v4.19.2/en/main_classes/model#transformers.TFPreTrainedModel"),_(Wr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),_(Wr,"rel","nofollow"),_(za,"href","/docs/transformers/v4.19.2/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),_(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),_(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,g){e(document.head,d),f(t,k,g),f(t,h,g),e(h,p),e(p,b),y(l,b,null),e(h,u),e(h,E),e(E,he),f(t,J,g),f(t,q,g),e(q,Z),e(Z,S),y(ee,S,null),e(q,pe),e(q,D),e(D,fe),f(t,le,g),f(t,G,g),e(G,P),e(G,oe),e(oe,X),e(G,z),f(t,j,g),f(t,ne,g),e(ne,B),f(t,de,g),f(t,se,g),e(se,W),e(W,ge),f(t,ce,g),f(t,C,g),e(C,ue),f(t,U,g),f(t,re,g),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,N),e(K,ie),e(ie,R),e(K,we),e(K,w),e(w,F),e(K,Y),f(t,Te,g),f(t,me,g),e(me,A),e(me,be),e(be,Le),e(me,xe),e(me,O),e(O,V),e(me,Fe),f(t,ye,g),f(t,I,g),e(I,ke),e(ke,ve),y(te,ve,null),e(I,Me),e(I,ei),e(ei,Sm),f(t,md,g),f(t,$e,g),e($e,Dm),hd.m(Yv,$e),e($e,pd),fd.m(Zv,$e),e($e,gd),ud.m(eT,$e),e($e,_d),e($e,oi),e(oi,Wm),e($e,Qm),e($e,ti),e(ti,Um),e($e,Bm),e($e,ni),e(ni,Hm),e($e,Rm),wd.m(oT,$e),e($e,kd),e($e,si),e(si,Vm),e($e,Gm),f(t,bd,g),f(t,wo,g),e(wo,Km),vd.m(tT,wo),e(wo,Td),e(wo,ri),e(ri,Jm),e(wo,Xm),f(t,yd,g),f(t,ko,g),e(ko,Ym),e(ko,ai),e(ai,Zm),e(ko,eh),e(ko,ii),e(ii,oh),e(ko,th),f(t,$d,g),f(t,Pt,g),e(Pt,li),e(li,nh),e(Pt,sh),e(Pt,di),e(di,rh),f(t,Ld,g),f(t,Nt,g),e(Nt,ah),e(Nt,Gr),e(Gr,ih),e(Nt,lh),f(t,xd,g),f(t,Je,g),e(Je,dh),Fd.m(nT,Je),e(Je,Md),Ed.m(sT,Je),e(Je,qd),zd.m(rT,Je),e(Je,Cd),jd.m(aT,Je),e(Je,Od),f(t,Pd,g),f(t,At,g),e(At,ch),e(At,Vn),e(Vn,mh),e(At,hh),f(t,Nd,g),f(t,jo,g),e(jo,It),e(It,ci),y(Gn,ci,null),e(jo,ph),e(jo,mi),e(mi,fh),f(t,Ad,g),f(t,Oo,g),e(Oo,Kr),e(Kr,gh),e(Oo,uh),e(Oo,Jr),e(Jr,_h),e(Oo,wh),f(t,Id,g),y(Kn,t,g),f(t,Sd,g),f(t,Po,g),e(Po,St),e(St,hi),y(Jn,hi,null),e(Po,kh),e(Po,pi),e(pi,bh),f(t,Dd,g),f(t,Be,g),y(Xn,Be,null),e(Be,vh),e(Be,No),e(No,Th),e(No,Xr),e(Xr,yh),e(No,$h),e(No,Yr),e(Yr,Lh),e(No,xh),e(Be,Fh),e(Be,Ao),e(Ao,Mh),e(Ao,Zr),e(Zr,Eh),e(Ao,qh),e(Ao,Yn),e(Yn,zh),e(Ao,Ch),e(Be,jh),e(Be,Io),e(Io,Oh),e(Io,ea),e(ea,Ph),e(Io,Nh),e(Io,oa),e(oa,Ah),e(Io,Ih),e(Be,Sh),y(Dt,Be,null),f(t,Wd,g),f(t,So,g),e(So,Wt),e(Wt,fi),y(Zn,fi,null),e(So,Dh),e(So,gi),e(gi,Wh),f(t,Qd,g),f(t,go,g),y(es,go,null),e(go,Qh),e(go,ui),e(ui,Uh),e(go,Bh),e(go,Qt),e(Qt,ta),e(ta,Hh),e(Qt,Rh),e(Qt,na),e(na,Vh),e(Qt,Gh),f(t,Ud,g),f(t,Do,g),e(Do,Ut),e(Ut,_i),y(os,_i,null),e(Do,Kh),e(Do,wi),e(wi,Jh),f(t,Bd,g),f(t,uo,g),y(ts,uo,null),e(uo,Xh),e(uo,ns),e(ns,Yh),e(ns,ki),e(ki,Zh),e(ns,ep),e(uo,op),e(uo,Bt),e(Bt,sa),e(sa,tp),e(Bt,np),e(Bt,ra),e(ra,sp),e(Bt,rp),f(t,Hd,g),f(t,Wo,g),e(Wo,Ht),e(Ht,bi),y(ss,bi,null),e(Wo,ap),e(Wo,vi),e(vi,ip),f(t,Rd,g),f(t,Qo,g),y(rs,Qo,null),e(Qo,lp),e(Qo,Ti),e(Ti,dp),f(t,Vd,g),f(t,Uo,g),y(as,Uo,null),e(Uo,cp),e(Uo,yi),e(yi,mp),f(t,Gd,g),f(t,Bo,g),y(is,Bo,null),e(Bo,hp),e(Bo,$i),e($i,pp),f(t,Kd,g),f(t,Ho,g),y(ls,Ho,null),e(Ho,fp),e(Ho,Li),e(Li,gp),f(t,Jd,g),f(t,Ro,g),y(ds,Ro,null),e(Ro,up),e(Ro,xi),e(xi,_p),f(t,Xd,g),f(t,Vo,g),y(cs,Vo,null),e(Vo,wp),e(Vo,Fi),e(Fi,kp),f(t,Yd,g),f(t,Go,g),y(ms,Go,null),e(Go,bp),e(Go,Mi),e(Mi,vp),f(t,Zd,g),f(t,Ko,g),y(hs,Ko,null),e(Ko,Tp),e(Ko,Ei),e(Ei,yp),f(t,ec,g),f(t,Jo,g),y(ps,Jo,null),e(Jo,$p),e(Jo,qi),e(qi,Lp),f(t,oc,g),f(t,Xo,g),y(fs,Xo,null),e(Xo,xp),e(Xo,zi),e(zi,Fp),f(t,tc,g),f(t,Yo,g),y(gs,Yo,null),e(Yo,Mp),e(Yo,Ci),e(Ci,Ep),f(t,nc,g),f(t,Zo,g),y(us,Zo,null),e(Zo,qp),e(Zo,ji),e(ji,zp),f(t,sc,g),f(t,et,g),y(_s,et,null),e(et,Cp),e(et,Oi),e(Oi,jp),f(t,rc,g),f(t,ot,g),y(ws,ot,null),e(ot,Op),e(ot,Pi),e(Pi,Pp),f(t,ac,g),f(t,tt,g),e(tt,Rt),e(Rt,Ni),y(ks,Ni,null),e(tt,Np),e(tt,Ai),e(Ai,Ap),f(t,ic,g),f(t,Pe,g),y(bs,Pe,null),e(Pe,Ip),e(Pe,Ii),e(Ii,Sp),e(Pe,Dp),e(Pe,vs),e(vs,Wp),e(vs,aa),e(aa,Qp),e(vs,Up),e(Pe,Bp),e(Pe,Ts),e(Ts,Hp),e(Ts,ys),e(ys,Rp),e(Ts,Vp),e(Pe,Gp),e(Pe,nt),e(nt,Kp),e(nt,ia),e(ia,Jp),e(nt,Xp),e(nt,$s),e($s,Yp),e(nt,Zp),e(Pe,ef),e(Pe,Ls),e(Ls,of),e(Ls,Si),e(Si,tf),e(Ls,nf),e(Pe,sf),e(Pe,so),y(xs,so,null),e(so,rf),e(so,st),e(st,af),e(st,la),e(la,lf),e(st,df),e(st,Di),e(Di,cf),e(st,mf),e(so,hf),y(Vt,so,null),e(so,pf),y(Gt,so,null),f(t,lc,g),f(t,rt,g),e(rt,Kt),e(Kt,Wi),y(Fs,Wi,null),e(rt,ff),e(rt,Qi),e(Qi,gf),f(t,dc,g),f(t,He,g),y(Ms,He,null),e(He,uf),e(He,Es),e(Es,_f),e(Es,Ui),e(Ui,wf),e(Es,kf),e(He,bf),e(He,qs),e(qs,vf),e(qs,da),e(da,Tf),e(qs,yf),e(He,$f),e(He,zs),e(zs,Lf),e(zs,Cs),e(Cs,xf),e(zs,Ff),e(He,Mf),e(He,ro),y(js,ro,null),e(ro,Ef),e(ro,at),e(at,qf),e(at,ca),e(ca,zf),e(at,Cf),e(at,Bi),e(Bi,jf),e(at,Of),e(ro,Pf),y(Jt,ro,null),e(ro,Nf),y(Xt,ro,null),f(t,cc,g),f(t,it,g),e(it,Yt),e(Yt,Hi),y(Os,Hi,null),e(it,Af),e(it,Ri),e(Ri,If),f(t,mc,g),f(t,Re,g),y(Ps,Re,null),e(Re,Sf),e(Re,Vi),e(Vi,Df),e(Re,Wf),e(Re,Ns),e(Ns,Qf),e(Ns,ma),e(ma,Uf),e(Ns,Bf),e(Re,Hf),e(Re,As),e(As,Rf),e(As,Is),e(Is,Vf),e(As,Gf),e(Re,Kf),e(Re,Ne),y(Ss,Ne,null),e(Ne,Jf),e(Ne,lt),e(lt,Xf),e(lt,ha),e(ha,Yf),e(lt,Zf),e(lt,Gi),e(Gi,eg),e(lt,og),e(Ne,tg),y(Zt,Ne,null),e(Ne,ng),y(en,Ne,null),e(Ne,sg),y(on,Ne,null),e(Ne,rg),y(tn,Ne,null),e(Ne,ag),y(nn,Ne,null),f(t,hc,g),f(t,dt,g),e(dt,sn),e(sn,Ki),y(Ds,Ki,null),e(dt,ig),e(dt,Ji),e(Ji,lg),f(t,pc,g),f(t,Ve,g),y(Ws,Ve,null),e(Ve,dg),e(Ve,Xi),e(Xi,cg),e(Ve,mg),e(Ve,Qs),e(Qs,hg),e(Qs,pa),e(pa,pg),e(Qs,fg),e(Ve,gg),e(Ve,Us),e(Us,ug),e(Us,Bs),e(Bs,_g),e(Us,wg),e(Ve,kg),e(Ve,ao),y(Hs,ao,null),e(ao,bg),e(ao,ct),e(ct,vg),e(ct,fa),e(fa,Tg),e(ct,yg),e(ct,Yi),e(Yi,$g),e(ct,Lg),e(ao,xg),y(rn,ao,null),e(ao,Fg),y(an,ao,null),f(t,fc,g),f(t,mt,g),e(mt,ln),e(ln,Zi),y(Rs,Zi,null),e(mt,Mg),e(mt,el),e(el,Eg),f(t,gc,g),f(t,Ge,g),y(Vs,Ge,null),e(Ge,qg),e(Ge,ol),e(ol,zg),e(Ge,Cg),e(Ge,Gs),e(Gs,jg),e(Gs,ga),e(ga,Og),e(Gs,Pg),e(Ge,Ng),e(Ge,Ks),e(Ks,Ag),e(Ks,Js),e(Js,Ig),e(Ks,Sg),e(Ge,Dg),e(Ge,Xe),y(Xs,Xe,null),e(Xe,Wg),e(Xe,ht),e(ht,Qg),e(ht,ua),e(ua,Ug),e(ht,Bg),e(ht,tl),e(tl,Hg),e(ht,Rg),e(Xe,Vg),y(dn,Xe,null),e(Xe,Gg),y(cn,Xe,null),e(Xe,Kg),y(mn,Xe,null),f(t,uc,g),f(t,pt,g),e(pt,hn),e(hn,nl),y(Ys,nl,null),e(pt,Jg),e(pt,sl),e(sl,Xg),f(t,_c,g),f(t,Ke,g),y(Zs,Ke,null),e(Ke,Yg),e(Ke,ft),e(ft,Zg),e(ft,rl),e(rl,eu),e(ft,ou),e(ft,al),e(al,tu),e(ft,nu),e(Ke,su),e(Ke,er),e(er,ru),e(er,_a),e(_a,au),e(er,iu),e(Ke,lu),e(Ke,or),e(or,du),e(or,tr),e(tr,cu),e(or,mu),e(Ke,hu),e(Ke,io),y(nr,io,null),e(io,pu),e(io,gt),e(gt,fu),e(gt,wa),e(wa,gu),e(gt,uu),e(gt,il),e(il,_u),e(gt,wu),e(io,ku),y(pn,io,null),e(io,bu),y(fn,io,null),f(t,wc,g),f(t,ut,g),e(ut,gn),e(gn,ll),y(sr,ll,null),e(ut,vu),e(ut,dl),e(dl,Tu),f(t,kc,g),f(t,Ee,g),y(rr,Ee,null),e(Ee,yu),e(Ee,cl),e(cl,$u),e(Ee,Lu),e(Ee,ar),e(ar,xu),e(ar,ka),e(ka,Fu),e(ar,Mu),e(Ee,Eu),e(Ee,ir),e(ir,qu),e(ir,lr),e(lr,zu),e(ir,Cu),e(Ee,ju),y(un,Ee,null),e(Ee,Ou),e(Ee,_t),e(_t,Pu),e(_t,ba),e(ba,Nu),e(_t,Au),e(_t,dr),e(dr,Iu),e(_t,Su),e(Ee,Du),e(Ee,cr),e(cr,Wu),e(cr,ml),e(ml,Qu),e(cr,Uu),e(Ee,Bu),e(Ee,bo),y(mr,bo,null),e(bo,Hu),e(bo,wt),e(wt,Ru),e(wt,va),e(va,Vu),e(wt,Gu),e(wt,hl),e(hl,Ku),e(wt,Ju),e(bo,Xu),y(_n,bo,null),f(t,bc,g),f(t,kt,g),e(kt,wn),e(wn,pl),y(hr,pl,null),e(kt,Yu),e(kt,fl),e(fl,Zu),f(t,vc,g),f(t,Ie,g),y(pr,Ie,null),e(Ie,e_),e(Ie,fr),e(fr,o_),e(fr,gl),e(gl,t_),e(fr,n_),e(Ie,s_),e(Ie,gr),e(gr,r_),e(gr,Ta),e(Ta,a_),e(gr,i_),e(Ie,l_),e(Ie,ur),e(ur,d_),e(ur,_r),e(_r,c_),e(ur,m_),e(Ie,h_),y(kn,Ie,null),e(Ie,p_),e(Ie,Ye),y(wr,Ye,null),e(Ye,f_),e(Ye,bt),e(bt,g_),e(bt,ya),e(ya,u_),e(bt,__),e(bt,ul),e(ul,w_),e(bt,k_),e(Ye,b_),y(bn,Ye,null),e(Ye,v_),y(vn,Ye,null),e(Ye,T_),y(Tn,Ye,null),f(t,Tc,g),f(t,vt,g),e(vt,yn),e(yn,_l),y(kr,_l,null),e(vt,y_),e(vt,wl),e(wl,$_),f(t,yc,g),f(t,Se,g),y(br,Se,null),e(Se,L_),e(Se,Tt),e(Tt,x_),e(Tt,kl),e(kl,F_),e(Tt,M_),e(Tt,bl),e(bl,E_),e(Tt,q_),e(Se,z_),e(Se,vr),e(vr,C_),e(vr,$a),e($a,j_),e(vr,O_),e(Se,P_),e(Se,Tr),e(Tr,N_),e(Tr,yr),e(yr,A_),e(Tr,I_),e(Se,S_),y($n,Se,null),e(Se,D_),e(Se,Ze),y($r,Ze,null),e(Ze,W_),e(Ze,yt),e(yt,Q_),e(yt,La),e(La,U_),e(yt,B_),e(yt,vl),e(vl,H_),e(yt,R_),e(Ze,V_),y(Ln,Ze,null),e(Ze,G_),y(xn,Ze,null),e(Ze,K_),y(Fn,Ze,null),f(t,$c,g),f(t,$t,g),e($t,Mn),e(Mn,Tl),y(Lr,Tl,null),e($t,J_),e($t,yl),e(yl,X_),f(t,Lc,g),f(t,De,g),y(xr,De,null),e(De,Y_),e(De,$l),e($l,Z_),e(De,ew),e(De,Fr),e(Fr,ow),e(Fr,xa),e(xa,tw),e(Fr,nw),e(De,sw),e(De,Mr),e(Mr,rw),e(Mr,Er),e(Er,aw),e(Mr,iw),e(De,lw),y(En,De,null),e(De,dw),e(De,eo),y(qr,eo,null),e(eo,cw),e(eo,Lt),e(Lt,mw),e(Lt,Fa),e(Fa,hw),e(Lt,pw),e(Lt,Ll),e(Ll,fw),e(Lt,gw),e(eo,uw),y(qn,eo,null),e(eo,_w),y(zn,eo,null),e(eo,ww),y(Cn,eo,null),f(t,xc,g),f(t,xt,g),e(xt,jn),e(jn,xl),y(zr,xl,null),e(xt,kw),e(xt,Fl),e(Fl,bw),f(t,Fc,g),f(t,We,g),y(Cr,We,null),e(We,vw),e(We,Ml),e(Ml,Tw),e(We,yw),e(We,jr),e(jr,$w),e(jr,Ma),e(Ma,Lw),e(jr,xw),e(We,Fw),e(We,Or),e(Or,Mw),e(Or,Pr),e(Pr,Ew),e(Or,qw),e(We,zw),y(On,We,null),e(We,Cw),e(We,oo),y(Nr,oo,null),e(oo,jw),e(oo,Ft),e(Ft,Ow),e(Ft,Ea),e(Ea,Pw),e(Ft,Nw),e(Ft,El),e(El,Aw),e(Ft,Iw),e(oo,Sw),y(Pn,oo,null),e(oo,Dw),y(Nn,oo,null),e(oo,Ww),y(An,oo,null),f(t,Mc,g),f(t,Mt,g),e(Mt,In),e(In,ql),y(Ar,ql,null),e(Mt,Qw),e(Mt,zl),e(zl,Uw),f(t,Ec,g),f(t,Qe,g),y(Ir,Qe,null),e(Qe,Bw),e(Qe,Cl),e(Cl,Hw),e(Qe,Rw),e(Qe,Sr),e(Sr,Vw),e(Sr,qa),e(qa,Gw),e(Sr,Kw),e(Qe,Jw),e(Qe,Dr),e(Dr,Xw),e(Dr,Wr),e(Wr,Yw),e(Dr,Zw),e(Qe,ek),y(Sn,Qe,null),e(Qe,ok),e(Qe,lo),y(Qr,lo,null),e(lo,tk),e(lo,Et),e(Et,nk),e(Et,za),e(za,sk),e(Et,rk),e(Et,jl),e(jl,ak),e(Et,ik),e(lo,lk),y(Dn,lo,null),e(lo,dk),y(Wn,lo,null),qc=!0},p(t,[g]){const Ur={};g&2&&(Ur.$$scope={dirty:g,ctx:t}),Dt.$set(Ur);const Ol={};g&2&&(Ol.$$scope={dirty:g,ctx:t}),Vt.$set(Ol);const Pl={};g&2&&(Pl.$$scope={dirty:g,ctx:t}),Gt.$set(Pl);const Nl={};g&2&&(Nl.$$scope={dirty:g,ctx:t}),Jt.$set(Nl);const Br={};g&2&&(Br.$$scope={dirty:g,ctx:t}),Xt.$set(Br);const Al={};g&2&&(Al.$$scope={dirty:g,ctx:t}),Zt.$set(Al);const Il={};g&2&&(Il.$$scope={dirty:g,ctx:t}),en.$set(Il);const Sl={};g&2&&(Sl.$$scope={dirty:g,ctx:t}),on.$set(Sl);const Hr={};g&2&&(Hr.$$scope={dirty:g,ctx:t}),tn.$set(Hr);const Dl={};g&2&&(Dl.$$scope={dirty:g,ctx:t}),nn.$set(Dl);const Wl={};g&2&&(Wl.$$scope={dirty:g,ctx:t}),rn.$set(Wl);const Ql={};g&2&&(Ql.$$scope={dirty:g,ctx:t}),an.$set(Ql);const Ul={};g&2&&(Ul.$$scope={dirty:g,ctx:t}),dn.$set(Ul);const Bl={};g&2&&(Bl.$$scope={dirty:g,ctx:t}),cn.$set(Bl);const Hl={};g&2&&(Hl.$$scope={dirty:g,ctx:t}),mn.$set(Hl);const _o={};g&2&&(_o.$$scope={dirty:g,ctx:t}),pn.$set(_o);const Rl={};g&2&&(Rl.$$scope={dirty:g,ctx:t}),fn.$set(Rl);const Vl={};g&2&&(Vl.$$scope={dirty:g,ctx:t}),un.$set(Vl);const Gl={};g&2&&(Gl.$$scope={dirty:g,ctx:t}),_n.$set(Gl);const qt={};g&2&&(qt.$$scope={dirty:g,ctx:t}),kn.$set(qt);const Kl={};g&2&&(Kl.$$scope={dirty:g,ctx:t}),bn.$set(Kl);const Jl={};g&2&&(Jl.$$scope={dirty:g,ctx:t}),vn.$set(Jl);const Rr={};g&2&&(Rr.$$scope={dirty:g,ctx:t}),Tn.$set(Rr);const Xl={};g&2&&(Xl.$$scope={dirty:g,ctx:t}),$n.$set(Xl);const Yl={};g&2&&(Yl.$$scope={dirty:g,ctx:t}),Ln.$set(Yl);const Zl={};g&2&&(Zl.$$scope={dirty:g,ctx:t}),xn.$set(Zl);const qe={};g&2&&(qe.$$scope={dirty:g,ctx:t}),Fn.$set(qe);const ed={};g&2&&(ed.$$scope={dirty:g,ctx:t}),En.$set(ed);const od={};g&2&&(od.$$scope={dirty:g,ctx:t}),qn.$set(od);const td={};g&2&&(td.$$scope={dirty:g,ctx:t}),zn.$set(td);const nd={};g&2&&(nd.$$scope={dirty:g,ctx:t}),Cn.$set(nd);const zt={};g&2&&(zt.$$scope={dirty:g,ctx:t}),On.$set(zt);const sd={};g&2&&(sd.$$scope={dirty:g,ctx:t}),Pn.$set(sd);const Ct={};g&2&&(Ct.$$scope={dirty:g,ctx:t}),Nn.$set(Ct);const rd={};g&2&&(rd.$$scope={dirty:g,ctx:t}),An.$set(rd);const ad={};g&2&&(ad.$$scope={dirty:g,ctx:t}),Sn.$set(ad);const Vr={};g&2&&(Vr.$$scope={dirty:g,ctx:t}),Dn.$set(Vr);const id={};g&2&&(id.$$scope={dirty:g,ctx:t}),Wn.$set(id)},i(t){qc||($(l.$$.fragment,t),$(ee.$$.fragment,t),$(te.$$.fragment,t),$(Gn.$$.fragment,t),$(Kn.$$.fragment,t),$(Jn.$$.fragment,t),$(Xn.$$.fragment,t),$(Dt.$$.fragment,t),$(Zn.$$.fragment,t),$(es.$$.fragment,t),$(os.$$.fragment,t),$(ts.$$.fragment,t),$(ss.$$.fragment,t),$(rs.$$.fragment,t),$(as.$$.fragment,t),$(is.$$.fragment,t),$(ls.$$.fragment,t),$(ds.$$.fragment,t),$(cs.$$.fragment,t),$(ms.$$.fragment,t),$(hs.$$.fragment,t),$(ps.$$.fragment,t),$(fs.$$.fragment,t),$(gs.$$.fragment,t),$(us.$$.fragment,t),$(_s.$$.fragment,t),$(ws.$$.fragment,t),$(ks.$$.fragment,t),$(bs.$$.fragment,t),$(xs.$$.fragment,t),$(Vt.$$.fragment,t),$(Gt.$$.fragment,t),$(Fs.$$.fragment,t),$(Ms.$$.fragment,t),$(js.$$.fragment,t),$(Jt.$$.fragment,t),$(Xt.$$.fragment,t),$(Os.$$.fragment,t),$(Ps.$$.fragment,t),$(Ss.$$.fragment,t),$(Zt.$$.fragment,t),$(en.$$.fragment,t),$(on.$$.fragment,t),$(tn.$$.fragment,t),$(nn.$$.fragment,t),$(Ds.$$.fragment,t),$(Ws.$$.fragment,t),$(Hs.$$.fragment,t),$(rn.$$.fragment,t),$(an.$$.fragment,t),$(Rs.$$.fragment,t),$(Vs.$$.fragment,t),$(Xs.$$.fragment,t),$(dn.$$.fragment,t),$(cn.$$.fragment,t),$(mn.$$.fragment,t),$(Ys.$$.fragment,t),$(Zs.$$.fragment,t),$(nr.$$.fragment,t),$(pn.$$.fragment,t),$(fn.$$.fragment,t),$(sr.$$.fragment,t),$(rr.$$.fragment,t),$(un.$$.fragment,t),$(mr.$$.fragment,t),$(_n.$$.fragment,t),$(hr.$$.fragment,t),$(pr.$$.fragment,t),$(kn.$$.fragment,t),$(wr.$$.fragment,t),$(bn.$$.fragment,t),$(vn.$$.fragment,t),$(Tn.$$.fragment,t),$(kr.$$.fragment,t),$(br.$$.fragment,t),$($n.$$.fragment,t),$($r.$$.fragment,t),$(Ln.$$.fragment,t),$(xn.$$.fragment,t),$(Fn.$$.fragment,t),$(Lr.$$.fragment,t),$(xr.$$.fragment,t),$(En.$$.fragment,t),$(qr.$$.fragment,t),$(qn.$$.fragment,t),$(zn.$$.fragment,t),$(Cn.$$.fragment,t),$(zr.$$.fragment,t),$(Cr.$$.fragment,t),$(On.$$.fragment,t),$(Nr.$$.fragment,t),$(Pn.$$.fragment,t),$(Nn.$$.fragment,t),$(An.$$.fragment,t),$(Ar.$$.fragment,t),$(Ir.$$.fragment,t),$(Sn.$$.fragment,t),$(Qr.$$.fragment,t),$(Dn.$$.fragment,t),$(Wn.$$.fragment,t),qc=!0)},o(t){L(l.$$.fragment,t),L(ee.$$.fragment,t),L(te.$$.fragment,t),L(Gn.$$.fragment,t),L(Kn.$$.fragment,t),L(Jn.$$.fragment,t),L(Xn.$$.fragment,t),L(Dt.$$.fragment,t),L(Zn.$$.fragment,t),L(es.$$.fragment,t),L(os.$$.fragment,t),L(ts.$$.fragment,t),L(ss.$$.fragment,t),L(rs.$$.fragment,t),L(as.$$.fragment,t),L(is.$$.fragment,t),L(ls.$$.fragment,t),L(ds.$$.fragment,t),L(cs.$$.fragment,t),L(ms.$$.fragment,t),L(hs.$$.fragment,t),L(ps.$$.fragment,t),L(fs.$$.fragment,t),L(gs.$$.fragment,t),L(us.$$.fragment,t),L(_s.$$.fragment,t),L(ws.$$.fragment,t),L(ks.$$.fragment,t),L(bs.$$.fragment,t),L(xs.$$.fragment,t),L(Vt.$$.fragment,t),L(Gt.$$.fragment,t),L(Fs.$$.fragment,t),L(Ms.$$.fragment,t),L(js.$$.fragment,t),L(Jt.$$.fragment,t),L(Xt.$$.fragment,t),L(Os.$$.fragment,t),L(Ps.$$.fragment,t),L(Ss.$$.fragment,t),L(Zt.$$.fragment,t),L(en.$$.fragment,t),L(on.$$.fragment,t),L(tn.$$.fragment,t),L(nn.$$.fragment,t),L(Ds.$$.fragment,t),L(Ws.$$.fragment,t),L(Hs.$$.fragment,t),L(rn.$$.fragment,t),L(an.$$.fragment,t),L(Rs.$$.fragment,t),L(Vs.$$.fragment,t),L(Xs.$$.fragment,t),L(dn.$$.fragment,t),L(cn.$$.fragment,t),L(mn.$$.fragment,t),L(Ys.$$.fragment,t),L(Zs.$$.fragment,t),L(nr.$$.fragment,t),L(pn.$$.fragment,t),L(fn.$$.fragment,t),L(sr.$$.fragment,t),L(rr.$$.fragment,t),L(un.$$.fragment,t),L(mr.$$.fragment,t),L(_n.$$.fragment,t),L(hr.$$.fragment,t),L(pr.$$.fragment,t),L(kn.$$.fragment,t),L(wr.$$.fragment,t),L(bn.$$.fragment,t),L(vn.$$.fragment,t),L(Tn.$$.fragment,t),L(kr.$$.fragment,t),L(br.$$.fragment,t),L($n.$$.fragment,t),L($r.$$.fragment,t),L(Ln.$$.fragment,t),L(xn.$$.fragment,t),L(Fn.$$.fragment,t),L(Lr.$$.fragment,t),L(xr.$$.fragment,t),L(En.$$.fragment,t),L(qr.$$.fragment,t),L(qn.$$.fragment,t),L(zn.$$.fragment,t),L(Cn.$$.fragment,t),L(zr.$$.fragment,t),L(Cr.$$.fragment,t),L(On.$$.fragment,t),L(Nr.$$.fragment,t),L(Pn.$$.fragment,t),L(Nn.$$.fragment,t),L(An.$$.fragment,t),L(Ar.$$.fragment,t),L(Ir.$$.fragment,t),L(Sn.$$.fragment,t),L(Qr.$$.fragment,t),L(Dn.$$.fragment,t),L(Wn.$$.fragment,t),qc=!1},d(t){o(d),t&&o(k),t&&o(h),x(l),t&&o(J),t&&o(q),x(ee),t&&o(le),t&&o(G),t&&o(j),t&&o(ne),t&&o(de),t&&o(se),t&&o(ce),t&&o(C),t&&o(U),t&&o(re),t&&o(Te),t&&o(me),t&&o(ye),t&&o(I),x(te),t&&o(md),t&&o($e),t&&o(bd),t&&o(wo),t&&o(yd),t&&o(ko),t&&o($d),t&&o(Pt),t&&o(Ld),t&&o(Nt),t&&o(xd),t&&o(Je),t&&o(Pd),t&&o(At),t&&o(Nd),t&&o(jo),x(Gn),t&&o(Ad),t&&o(Oo),t&&o(Id),x(Kn,t),t&&o(Sd),t&&o(Po),x(Jn),t&&o(Dd),t&&o(Be),x(Xn),x(Dt),t&&o(Wd),t&&o(So),x(Zn),t&&o(Qd),t&&o(go),x(es),t&&o(Ud),t&&o(Do),x(os),t&&o(Bd),t&&o(uo),x(ts),t&&o(Hd),t&&o(Wo),x(ss),t&&o(Rd),t&&o(Qo),x(rs),t&&o(Vd),t&&o(Uo),x(as),t&&o(Gd),t&&o(Bo),x(is),t&&o(Kd),t&&o(Ho),x(ls),t&&o(Jd),t&&o(Ro),x(ds),t&&o(Xd),t&&o(Vo),x(cs),t&&o(Yd),t&&o(Go),x(ms),t&&o(Zd),t&&o(Ko),x(hs),t&&o(ec),t&&o(Jo),x(ps),t&&o(oc),t&&o(Xo),x(fs),t&&o(tc),t&&o(Yo),x(gs),t&&o(nc),t&&o(Zo),x(us),t&&o(sc),t&&o(et),x(_s),t&&o(rc),t&&o(ot),x(ws),t&&o(ac),t&&o(tt),x(ks),t&&o(ic),t&&o(Pe),x(bs),x(xs),x(Vt),x(Gt),t&&o(lc),t&&o(rt),x(Fs),t&&o(dc),t&&o(He),x(Ms),x(js),x(Jt),x(Xt),t&&o(cc),t&&o(it),x(Os),t&&o(mc),t&&o(Re),x(Ps),x(Ss),x(Zt),x(en),x(on),x(tn),x(nn),t&&o(hc),t&&o(dt),x(Ds),t&&o(pc),t&&o(Ve),x(Ws),x(Hs),x(rn),x(an),t&&o(fc),t&&o(mt),x(Rs),t&&o(gc),t&&o(Ge),x(Vs),x(Xs),x(dn),x(cn),x(mn),t&&o(uc),t&&o(pt),x(Ys),t&&o(_c),t&&o(Ke),x(Zs),x(nr),x(pn),x(fn),t&&o(wc),t&&o(ut),x(sr),t&&o(kc),t&&o(Ee),x(rr),x(un),x(mr),x(_n),t&&o(bc),t&&o(kt),x(hr),t&&o(vc),t&&o(Ie),x(pr),x(kn),x(wr),x(bn),x(vn),x(Tn),t&&o(Tc),t&&o(vt),x(kr),t&&o(yc),t&&o(Se),x(br),x($n),x($r),x(Ln),x(xn),x(Fn),t&&o($c),t&&o($t),x(Lr),t&&o(Lc),t&&o(De),x(xr),x(En),x(qr),x(qn),x(zn),x(Cn),t&&o(xc),t&&o(xt),x(zr),t&&o(Fc),t&&o(We),x(Cr),x(On),x(Nr),x(Pn),x(Nn),x(An),t&&o(Mc),t&&o(Mt),x(Ar),t&&o(Ec),t&&o(Qe),x(Ir),x(Sn),x(Qr),x(Dn),x(Wn)}}}const XT={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function YT(M){return mT(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ry extends iT{constructor(d){super();lT(this,d,YT,JT,dT,{})}}export{ry as default,XT as metadata};
