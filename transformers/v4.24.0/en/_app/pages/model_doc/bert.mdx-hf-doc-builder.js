import{S as W7,i as H7,s as K7,e as s,k as c,w as y,t as o,M as R7,c as r,d as t,m as p,a,x as T,h as n,b as u,G as e,g as _,y as w,q as $,o as x,B as F,v as Q7,L as ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Se}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function V7(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertConfig, BertModel

# Initializing a BERT bert-base-uncased style configuration
configuration = BertConfig()

# Initializing a model (with random weights) from the bert-base-uncased style configuration
model = BertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertConfig, BertModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model (with random weights) from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=o("Examples:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function J7(B){let d,g,f,m,b;return m=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function G7(B){let d,g,f,m,b;return m=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function X7(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=s("p"),g=o("Examples:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function Y7(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=s("p"),g=o("Examples:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function Z7(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function eO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertModel
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function tO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function oO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForPreTraining
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForPreTraining
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function nO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function sO(B){let d,g,f,m,b;return m=new le({props:{code:`import torch
from transformers import BertTokenizer, BertLMHeadModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function rO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function aO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function iO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function lO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function dO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="pt")

outputs = model(**encoding, labels=torch.LongTensor([1]))
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForNextSentencePrediction
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding, labels=torch.LongTensor([<span class="hljs-number">1</span>]))
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function cO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function pO(B){let d,g,f,m,b;return m=new le({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of single-label classification:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function hO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function fO(B){let d,g,f,m,b;return m=new le({props:{code:`import torch
from transformers import BertTokenizer, BertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("textattack/bert-base-uncased-yelp-polarity")
model = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of multi-label classification:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function mO(B){let d,g;return d=new le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = BertForSequenceClassification.from_pretrained(
    "textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function uO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function gO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
import torch

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = BertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function _O(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function bO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
import torch

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = BertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

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
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function kO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function vO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function yO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
import torch

tokenizer = BertTokenizer.from_pretrained("deepset/bert-base-cased-squad2")
model = BertForQuestionAnswering.from_pretrained("deepset/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, BertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function TO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function wO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function $O(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function xO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function FO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function BO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function EO(B){let d,g,f,m,b;return m=new le({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForPreTraining.from_pretrained("bert-base-uncased")
input_ids = tokenizer("Hello, my dog is cute", add_special_tokens=True, return_tensors="tf")
# Batch size 1

outputs = model(input_ids)
prediction_logits, seq_relationship_logits = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, add_special_tokens=<span class="hljs-literal">True</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),g=o("Examples:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function zO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertLMHeadModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertLMHeadModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function MO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function PO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function jO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function qO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function CO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function NO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function OO(B){let d,g,f,m,b;return m=new le({props:{code:`import tensorflow as tf
from transformers import BertTokenizer, TFBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="tf")

logits = model(encoding["input_ids"], token_type_ids=encoding["token_type_ids"])[0]
assert logits[0][0] < logits[0][1]  # the next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], token_type_ids=encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>])[<span class="hljs-number">0</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=s("p"),g=o("Examples:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function AO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function IO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function LO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")
model = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function DO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function SO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function UO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function WO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = TFBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function HO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function KO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function RO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")
model = TFBertForTokenClassification.from_pretrained("dbmdz/bert-large-cased-finetuned-conll03-english")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;dbmdz/bert-large-cased-finetuned-conll03-english&quot;</span>)

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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function QO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function VO(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),f=s("code"),m=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),ye=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),Te=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),fe=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),me=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(v){d=r(v,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),f=r(M,"CODE",{});var Re=a(f);m=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(v),h=r(v,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ve=a(z);Fe=n(ve,"having all inputs as keyword arguments (like PyTorch models), or"),ve.forEach(t),ye=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(v),E=r(v,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),Te=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),fe=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(v),j=r(v,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),me=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(v),C=r(v,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(v,M){_(v,d,M),e(d,g),e(d,f),e(f,m),e(d,b),_(v,l,M),_(v,h,M),e(h,z),e(z,Fe),e(h,ye),e(h,S),e(S,pe),_(v,ee,M),_(v,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,Te),e(E,U),e(U,ze),e(E,fe),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(v,oe,M),_(v,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,me),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(v,se,M),_(v,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(v){v&&t(d),v&&t(l),v&&t(h),v&&t(ee),v&&t(E),v&&t(oe),v&&t(j),v&&t(se),v&&t(C)}}}function JO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function GO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
import tensorflow as tf

tokenizer = BertTokenizer.from_pretrained("ydshieh/bert-base-cased-squad2")
model = TFBertForQuestionAnswering.from_pretrained("ydshieh/bert-base-cased-squad2")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, TFBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-cased-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function XO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){y(d.$$.fragment)},l(f){T(d.$$.fragment,f)},m(f,m){w(d,f,m),g=!0},p:ie,i(f){g||($(d.$$.fragment,f),g=!0)},o(f){x(d.$$.fragment,f),g=!1},d(f){F(d,f)}}}function YO(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function ZO(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function eA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function tA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForPreTraining.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

prediction_logits = outputs.prediction_logits
seq_relationship_logits = outputs.seq_relationship_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForPreTraining

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForPreTraining.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.prediction_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function oA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function nA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForCausalLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForCausalLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function sA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function rA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function aA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function iA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForNextSentencePrediction.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
next_sentence = "The sky is blue due to the shorter wavelength of blue light."
encoding = tokenizer(prompt, next_sentence, return_tensors="jax")

outputs = model(**encoding)
logits = outputs.logits
assert logits[0, 0] < logits[0, 1]  # next sentence was random`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForNextSentencePrediction

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForNextSentencePrediction.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_sentence = <span class="hljs-string">&quot;The sky is blue due to the shorter wavelength of blue light.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(prompt, next_sentence, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**encoding)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function lA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function dA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function cA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function pA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMultipleChoice.from_pretrained("bert-base-uncased")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="jax", padding=True)
outputs = model(**{k: v[None, :] for k, v in encoding.items()})

logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;jax&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v[<span class="hljs-literal">None</span>, :] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()})

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function hA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function fA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function mA(B){let d,g,f,m,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s("code"),m=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(h,"CODE",{});var z=a(f);m=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,f),e(f,m),e(d,b)},d(l){l&&t(d)}}}function uA(B){let d,g,f,m,b;return m=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForQuestionAnswering.from_pretrained("bert-base-uncased")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="jax")

outputs = model(**inputs)
start_scores = outputs.start_logits
end_scores = outputs.end_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),f=c(),y(m.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),f=p(l),T(m.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,f,h),w(m,l,h),b=!0},p:ie,i(l){b||($(m.$$.fragment,l),b=!0)},o(l){x(m.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(f),F(m,l)}}}function gA(B){let d,g,f,m,b,l,h,z,Fe,ye,S,pe,ee,E,Be,R,Ee,Te,U,ze,fe,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,me,L,Ie,W,Le,se,C,de,O,ke,ue,v,M,Re,ne,ve,We,P,De,Qe,Ke,Ve,Je,I,X,Ge,He,Y,Xe,Ye,ce,Ze,Z,et,Hy,Wp,Ky,Ry,Qy,Cs,Db,fn,Ns,jf,li,Vy,qf,Jy,Sb,tt,di,Gy,Cf,Xy,Yy,ci,Zy,Hp,eT,tT,oT,Ko,pi,nT,Nf,sT,rT,hi,Kp,aT,Of,iT,lT,Rp,dT,Af,cT,pT,Os,fi,hT,mi,fT,If,mT,uT,gT,oo,ui,_T,Lf,bT,kT,As,vT,mn,yT,Df,TT,wT,Sf,$T,xT,FT,Qp,gi,Ub,un,Is,Uf,_i,BT,Wf,ET,Wb,xt,bi,zT,ki,MT,Hf,PT,jT,qT,vi,CT,Vp,NT,OT,AT,Ro,yi,IT,Kf,LT,DT,Ti,Jp,ST,Rf,UT,WT,Gp,HT,Qf,KT,RT,no,wi,QT,Vf,VT,JT,Ls,GT,gn,XT,Jf,YT,ZT,Gf,ew,tw,Hb,_n,Ds,Xf,$i,ow,Yf,nw,Kb,Ft,xi,sw,bn,rw,Zf,aw,iw,em,lw,dw,cw,Fi,pw,tm,hw,fw,mw,Qo,Bi,uw,Ei,gw,om,_w,bw,kw,Ss,vw,Vo,zi,yw,kn,Tw,nm,ww,$w,sm,xw,Fw,Bw,Us,Rb,vn,Ws,rm,Mi,Ew,am,zw,Qb,yn,Pi,Mw,ji,Pw,Xp,jw,qw,Vb,Tn,qi,Cw,Ci,Nw,Yp,Ow,Aw,Jb,Po,Ni,Iw,Oi,Lw,Zp,Dw,Sw,Uw,Hs,Ai,Ww,im,Hw,Gb,wn,Ks,lm,Ii,Kw,dm,Rw,Xb,ot,Li,Qw,cm,Vw,Jw,Di,Gw,eh,Xw,Yw,Zw,Si,e1,Ui,t1,o1,n1,Wi,s1,Hi,r1,a1,i1,mt,l1,pm,d1,c1,hm,p1,h1,fm,f1,m1,mm,u1,g1,um,_1,b1,gm,k1,v1,y1,so,Ki,T1,$n,w1,th,$1,x1,_m,F1,B1,E1,Rs,z1,Qs,Yb,xn,Vs,bm,Ri,M1,km,P1,Zb,Bt,Qi,j1,Fn,q1,vm,C1,N1,ym,O1,A1,I1,Vi,L1,oh,D1,S1,U1,Ji,W1,Gi,H1,K1,R1,ro,Xi,Q1,Bn,V1,nh,J1,G1,Tm,X1,Y1,Z1,Js,e$,Gs,ek,En,Xs,wm,Yi,t$,$m,o$,tk,Et,Zi,n$,el,s$,xm,r$,a$,i$,tl,l$,sh,d$,c$,p$,ol,h$,nl,f$,m$,u$,ao,sl,g$,zn,_$,rh,b$,k$,Fm,v$,y$,T$,Ys,w$,Zs,ok,Mn,er,Bm,rl,$$,Em,x$,nk,zt,al,F$,il,B$,zm,E$,z$,M$,ll,P$,ah,j$,q$,C$,dl,N$,cl,O$,A$,I$,Nt,pl,L$,Pn,D$,ih,S$,U$,Mm,W$,H$,K$,tr,R$,or,Q$,nr,sk,jn,sr,Pm,hl,V$,jm,J$,rk,Mt,fl,G$,ml,X$,qm,Y$,Z$,e2,ul,t2,lh,o2,n2,s2,gl,r2,_l,a2,i2,l2,io,bl,d2,qn,c2,dh,p2,h2,Cm,f2,m2,u2,rr,g2,ar,ak,Cn,ir,Nm,kl,_2,Om,b2,ik,Pt,vl,k2,Am,v2,y2,yl,T2,ch,w2,$2,x2,Tl,F2,wl,B2,E2,z2,ft,$l,M2,Nn,P2,ph,j2,q2,Im,C2,N2,O2,lr,A2,dr,I2,cr,L2,pr,D2,hr,lk,On,fr,Lm,xl,S2,Dm,U2,dk,jt,Fl,W2,Sm,H2,K2,Bl,R2,hh,Q2,V2,J2,El,G2,zl,X2,Y2,Z2,lo,Ml,e0,An,t0,fh,o0,n0,Um,s0,r0,a0,mr,i0,ur,ck,In,gr,Wm,Pl,l0,Hm,d0,pk,qt,jl,c0,Km,p0,h0,ql,f0,mh,m0,u0,g0,Cl,_0,Nl,b0,k0,v0,Ot,Ol,y0,Ln,T0,uh,w0,$0,Rm,x0,F0,B0,_r,E0,br,z0,kr,hk,Dn,vr,Qm,Al,M0,Vm,P0,fk,Ct,Il,j0,Sn,q0,Jm,C0,N0,Gm,O0,A0,I0,Ll,L0,gh,D0,S0,U0,Dl,W0,Sl,H0,K0,R0,At,Ul,Q0,Un,V0,_h,J0,G0,Xm,X0,Y0,Z0,yr,e4,Tr,t4,wr,mk,Wn,$r,Ym,Wl,o4,Zm,n4,uk,ut,Hl,s4,eu,r4,a4,Kl,i4,bh,l4,d4,c4,Rl,p4,Ql,h4,f4,m4,xr,u4,co,Vl,g4,Hn,_4,kh,b4,k4,tu,v4,y4,T4,Fr,w4,Br,gk,Kn,Er,ou,Jl,$4,nu,x4,_k,gt,Gl,F4,Rn,B4,su,E4,z4,ru,M4,P4,j4,Xl,q4,vh,C4,N4,O4,Yl,A4,Zl,I4,L4,D4,zr,S4,po,ed,U4,Qn,W4,yh,H4,K4,au,R4,Q4,V4,Mr,J4,Pr,bk,Vn,jr,iu,td,G4,lu,X4,kk,Jn,od,Y4,It,nd,Z4,nt,ex,du,tx,ox,cu,nx,sx,pu,rx,ax,hu,ix,lx,fu,dx,cx,mu,px,hx,uu,fx,mx,ux,sd,rd,gx,gu,_x,bx,kx,ad,vx,_u,yx,Tx,wx,te,$x,bu,xx,Fx,ku,Bx,Ex,vu,zx,Mx,yu,Px,jx,Tu,qx,Cx,wu,Nx,Ox,$u,Ax,Ix,xu,Lx,Dx,Fu,Sx,Ux,Bu,Wx,Hx,Eu,Kx,Rx,zu,Qx,Vx,Mu,Jx,Gx,Pu,Xx,Yx,ju,Zx,eF,qu,tF,oF,Cu,nF,sF,Nu,rF,aF,Ou,iF,lF,Au,dF,cF,pF,qr,vk,Gn,Cr,Iu,id,hF,Lu,fF,yk,_t,ld,mF,dd,uF,Du,gF,_F,bF,cd,kF,Th,vF,yF,TF,pd,wF,hd,$F,xF,FF,Nr,BF,Lt,fd,EF,Xn,zF,wh,MF,PF,Su,jF,qF,CF,Or,NF,Ar,OF,Ir,Tk,Yn,Lr,Uu,md,AF,Wu,IF,wk,bt,ud,LF,gd,DF,Hu,SF,UF,WF,_d,HF,$h,KF,RF,QF,bd,VF,kd,JF,GF,XF,Dr,YF,ho,vd,ZF,Zn,eB,xh,tB,oB,Ku,nB,sB,rB,Sr,aB,Ur,$k,es,Wr,Ru,yd,iB,Qu,lB,xk,kt,Td,dB,Vu,cB,pB,wd,hB,Fh,fB,mB,uB,$d,gB,xd,_B,bB,kB,Hr,vB,Dt,Fd,yB,ts,TB,Bh,wB,$B,Ju,xB,FB,BB,Kr,EB,Rr,zB,Qr,Fk,os,Vr,Gu,Bd,MB,Xu,PB,Bk,vt,Ed,jB,Yu,qB,CB,zd,NB,Eh,OB,AB,IB,Md,LB,Pd,DB,SB,UB,Jr,WB,fo,jd,HB,ns,KB,zh,RB,QB,Zu,VB,JB,GB,Gr,XB,Xr,Ek,ss,Yr,eg,qd,YB,tg,ZB,zk,yt,Cd,eE,og,tE,oE,Nd,nE,Mh,sE,rE,aE,Od,iE,Ad,lE,dE,cE,Zr,pE,St,Id,hE,rs,fE,Ph,mE,uE,ng,gE,_E,bE,ea,kE,ta,vE,oa,Mk,as,na,sg,Ld,yE,rg,TE,Pk,Tt,Dd,wE,is,$E,ag,xE,FE,ig,BE,EE,zE,Sd,ME,jh,PE,jE,qE,Ud,CE,Wd,NE,OE,AE,sa,IE,Ut,Hd,LE,ls,DE,qh,SE,UE,lg,WE,HE,KE,ra,RE,aa,QE,ia,jk,ds,la,dg,Kd,VE,cg,JE,qk,st,Rd,GE,pg,XE,YE,Qd,ZE,Ch,ez,tz,oz,Vd,nz,Jd,sz,rz,az,hg,iz,lz,jo,fg,Gd,dz,cz,mg,Xd,pz,hz,ug,Yd,fz,mz,gg,Zd,uz,gz,mo,ec,_z,cs,bz,_g,kz,vz,bg,yz,Tz,wz,da,$z,ca,Ck,ps,pa,kg,tc,xz,vg,Fz,Nk,rt,oc,Bz,hs,Ez,yg,zz,Mz,Tg,Pz,jz,qz,nc,Cz,Nh,Nz,Oz,Az,sc,Iz,rc,Lz,Dz,Sz,wg,Uz,Wz,qo,$g,ac,Hz,Kz,xg,ic,Rz,Qz,Fg,lc,Vz,Jz,Bg,dc,Gz,Xz,uo,cc,Yz,fs,Zz,Eg,eM,tM,zg,oM,nM,sM,ha,rM,fa,Ok,ms,ma,Mg,pc,aM,Pg,iM,Ak,at,hc,lM,jg,dM,cM,fc,pM,Oh,hM,fM,mM,mc,uM,uc,gM,_M,bM,qg,kM,vM,Co,Cg,gc,yM,TM,Ng,_c,wM,$M,Og,bc,xM,FM,Ag,kc,BM,EM,go,vc,zM,us,MM,Ig,PM,jM,Lg,qM,CM,NM,ua,OM,ga,Ik,gs,_a,Dg,yc,AM,Sg,IM,Lk,it,Tc,LM,wc,DM,Ug,SM,UM,WM,$c,HM,Ah,KM,RM,QM,xc,VM,Fc,JM,GM,XM,Wg,YM,ZM,No,Hg,Bc,eP,tP,Kg,Ec,oP,nP,Rg,zc,sP,rP,Qg,Mc,aP,iP,_o,Pc,lP,_s,dP,Vg,cP,pP,Jg,hP,fP,mP,ba,uP,ka,Dk,bs,va,Gg,jc,gP,Xg,_P,Sk,lt,qc,bP,Cc,kP,Yg,vP,yP,TP,Nc,wP,Ih,$P,xP,FP,Oc,BP,Ac,EP,zP,MP,Zg,PP,jP,Oo,e_,Ic,qP,CP,t_,Lc,NP,OP,o_,Dc,AP,IP,n_,Sc,LP,DP,bo,Uc,SP,ks,UP,s_,WP,HP,r_,KP,RP,QP,ya,VP,Ta,Uk,vs,wa,a_,Wc,JP,i_,GP,Wk,dt,Hc,XP,l_,YP,ZP,Kc,ej,Lh,tj,oj,nj,Rc,sj,Qc,rj,aj,ij,d_,lj,dj,Ao,c_,Vc,cj,pj,p_,Jc,hj,fj,h_,Gc,mj,uj,f_,Xc,gj,_j,ko,Yc,bj,ys,kj,m_,vj,yj,u_,Tj,wj,$j,$a,xj,xa,Hk,Ts,Fa,g_,Zc,Fj,__,Bj,Kk,ct,ep,Ej,b_,zj,Mj,tp,Pj,Dh,jj,qj,Cj,op,Nj,np,Oj,Aj,Ij,k_,Lj,Dj,Io,v_,sp,Sj,Uj,y_,rp,Wj,Hj,T_,ap,Kj,Rj,w_,ip,Qj,Vj,vo,lp,Jj,ws,Gj,$_,Xj,Yj,x_,Zj,eq,tq,Ba,oq,Ea,Rk,$s,za,F_,dp,nq,B_,sq,Qk,pt,cp,rq,E_,aq,iq,pp,lq,Sh,dq,cq,pq,hp,hq,fp,fq,mq,uq,z_,gq,_q,Lo,M_,mp,bq,kq,P_,up,vq,yq,j_,gp,Tq,wq,q_,_p,$q,xq,yo,bp,Fq,xs,Bq,C_,Eq,zq,N_,Mq,Pq,jq,Ma,qq,Pa,Vk,Fs,ja,O_,kp,Cq,A_,Nq,Jk,ht,vp,Oq,Bs,Aq,I_,Iq,Lq,L_,Dq,Sq,Uq,yp,Wq,Uh,Hq,Kq,Rq,Tp,Qq,wp,Vq,Jq,Gq,D_,Xq,Yq,Do,S_,$p,Zq,e3,U_,xp,t3,o3,W_,Fp,n3,s3,H_,Bp,r3,a3,To,Ep,i3,Es,l3,K_,d3,c3,R_,p3,h3,f3,qa,m3,Ca,Gk;return l=new Ue({}),E=new Ue({}),ue=new Ue({}),We=new A({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.BertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.BertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.BertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.BertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.BertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.BertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.BertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.BertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/configuration_bert.py#L72"}}),Cs=new ae({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[V7]},$$scope:{ctx:B}}}),li=new Ue({}),di=new A({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.BertTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.BertTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizer.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert.py#L137"}}),pi=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fi=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ui=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new ae({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J7]},$$scope:{ctx:B}}}),gi=new A({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert.py#L350"}}),_i=new Ue({}),bi=new A({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.BertTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.BertTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.BertTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.BertTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.BertTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.BertTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.BertTokenizerFast.clean_text",description:`<strong>clean_text</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to clean the text before tokenization by removing any control characters and replacing all
whitespaces by the classic one.`,name:"clean_text"},{anchor:"transformers.BertTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).`,name:"tokenize_chinese_chars"},{anchor:"transformers.BertTokenizerFast.strip_accents",description:`<strong>strip_accents</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"},{anchor:"transformers.BertTokenizerFast.wordpieces_prefix",description:`<strong>wordpieces_prefix</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;##&quot;</code>) &#x2014;
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),yi=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wi=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Ls=new ae({props:{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.example",$$slots:{default:[G7]},$$scope:{ctx:B}}}),$i=new Ue({}),xi=new A({props:{name:"class transformers.TFBertTokenizer",anchor:"transformers.TFBertTokenizer",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.vocab_list",description:`<strong>vocab_list</strong> (<code>list</code>) &#x2014;
List containing the vocabulary.`,name:"vocab_list"},{anchor:"transformers.TFBertTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TFBertTokenizer.cls_token_id",description:`<strong>cls_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token_id"},{anchor:"transformers.TFBertTokenizer.sep_token_id",description:`<strong>sep_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token_id"},{anchor:"transformers.TFBertTokenizer.pad_token_id",description:`<strong>pad_token_id</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token_id"},{anchor:"transformers.TFBertTokenizer.padding",description:`<strong>padding</strong> (<code>str</code>, defaults to <code>&quot;longest&quot;</code>) &#x2014;
The type of padding to use. Can be either <code>&quot;longest&quot;</code>, to pad only up to the longest sample in the batch,
or \`&#x201C;max_length&#x201D;, to pad all inputs to the maximum length supported by the tokenizer.`,name:"padding"},{anchor:"transformers.TFBertTokenizer.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to truncate the sequence to the maximum length.`,name:"truncation"},{anchor:"transformers.TFBertTokenizer.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>, defaults to <code>512</code>) &#x2014;
The maximum length of the sequence, used for padding (if <code>padding</code> is &#x201C;max_length&#x201D;) and/or truncation (if
<code>truncation</code> is <code>True</code>).`,name:"max_length"},{anchor:"transformers.TFBertTokenizer.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>, defaults to <code>None</code>) &#x2014;
If set, the sequence will be padded to a multiple of this value.`,name:"pad_to_multiple_of"},{anchor:"transformers.TFBertTokenizer.return_token_type_ids",description:`<strong>return_token_type_ids</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return token_type_ids.`,name:"return_token_type_ids"},{anchor:"transformers.TFBertTokenizer.return_attention_mask",description:`<strong>return_attention_mask</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to return the attention_mask.`,name:"return_attention_mask"},{anchor:"transformers.TFBertTokenizer.use_fast_bert_tokenizer",description:`<strong>use_fast_bert_tokenizer</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to false will use standard TF Text BertTokenizer, making it servable by TF Serving.`,name:"use_fast_bert_tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_tf.py#L12"}}),Bi=new A({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_tf.py#L130"}}),Ss=new ae({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X7]},$$scope:{ctx:B}}}),zi=new A({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/tokenization_bert_tf.py#L100"}}),Us=new ae({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y7]},$$scope:{ctx:B}}}),Mi=new Ue({}),Pi=new A({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.`,name:"loss"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L763"}}),qi=new A({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L935"}}),Ni=new A({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),Ai=new A({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/flax/struct.py#L108"}}),Ii=new Ue({}),Li=new A({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L866"}}),Ki=new A({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new Se({props:{$$slots:{default:[Z7]},$$scope:{ctx:B}}}),Qs=new ae({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),Ri=new Ue({}),Qi=new A({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1049"}}),Xi=new A({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForPreTraining.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForPreTraining.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForPreTraining.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForPreTraining.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForPreTraining.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForPreTraining.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForPreTraining.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForPreTraining.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
<p>labels (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>):
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked),
the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>
next_sentence_label (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>):
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence
pair (see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.
kwargs (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>):
Used to hide legacy arguments that have been deprecated.</li>
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1065",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) \u2014 Total loss as the sum of the masked language modeling loss and the next sequence prediction
(classification) loss.</p>
</li>
<li>
<p><strong>prediction_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new Se({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),Gs=new ae({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Yi=new Ue({}),Zi=new A({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1153"}}),sl=new A({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.BertLMHeadModel.forward.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.BertLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the left-to-right language modeling loss (next word prediction). Indices should be in
<code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are
ignored (masked), the loss is only computed for the tokens with labels n <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.BertLMHeadModel.forward.past_key_values",description:`<strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code> of length <code>config.n_layers</code> with each tuple having 4 tensors of shape <code>(batch_size, num_heads, sequence_length - 1, embed_size_per_head)</code>) &#x2014;
Contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.</p>
<p>If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.BertLMHeadModel.forward.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new Se({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Zs=new ae({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),rl=new Ue({}),al=new A({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1288"}}),pl=new A({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1314",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new Se({props:{$$slots:{default:[rO]},$$scope:{ctx:B}}}),or=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aO]},$$scope:{ctx:B}}}),nr=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iO]},$$scope:{ctx:B}}}),hl=new Ue({}),fl=new A({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1401"}}),bl=new A({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForNextSentencePrediction.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForNextSentencePrediction.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForNextSentencePrediction.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForNextSentencePrediction.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1411",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>next_sentence_label</code> is provided) \u2014 Next sequence prediction (classification) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rr=new Se({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),ar=new ae({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),kl=new Ue({}),vl=new A({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1506"}}),$l=new A({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1522",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lr=new Se({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),dr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),cr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hO]},$$scope:{ctx:B}}}),pr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[fO]},$$scope:{ctx:B}}}),hr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[mO]},$$scope:{ctx:B}}}),xl=new Ue({}),Fl=new A({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1610"}}),Ml=new A({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1624",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mr=new Se({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),ur=new ae({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),Pl=new Ue({}),jl=new A({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1705"}}),Ol=new A({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1723",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new Se({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),br=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),kr=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[kO]},$$scope:{ctx:B}}}),Al=new Ue({}),Il=new A({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1792"}}),Ul=new A({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.BertForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.BertForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.BertForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.BertForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.BertForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_bert.py#L1806",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yr=new Se({props:{$$slots:{default:[vO]},$$scope:{ctx:B}}}),Tr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[yO]},$$scope:{ctx:B}}}),wr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[TO]},$$scope:{ctx:B}}}),Wl=new Ue({}),Hl=new A({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1067"}}),xr=new Se({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),Vl=new A({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertModel.call.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.`,name:"encoder_hidden_states"},{anchor:"transformers.TFBertModel.call.encoder_attention_mask",description:`<strong>encoder_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>`,name:"encoder_attention_mask"},{anchor:"transformers.TFBertModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>Tuple[Tuple[tf.Tensor]]</code> of length <code>config.n_layers</code>) &#x2014;
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If <code>past_key_values</code> are used, the user can optionally input only the last <code>decoder_input_ids</code> (those that
don&#x2019;t have their past key value states given to this model) of shape <code>(batch_size, 1)</code> instead of all
<code>decoder_input_ids</code> of shape <code>(batch_size, sequence_length)</code>.`,name:"past_key_values"},{anchor:"transformers.TFBertModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new Se({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),Br=new ae({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[xO]},$$scope:{ctx:B}}}),Jl=new Ue({}),Gl=new A({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1164"}}),zr=new Se({props:{$$slots:{default:[FO]},$$scope:{ctx:B}}}),ed=new A({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForPreTraining.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForPreTraining.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForPreTraining.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForPreTraining.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForPreTraining.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForPreTraining.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForPreTraining.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForPreTraining.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForPreTraining.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForPreTraining.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.TFBertForPreTraining.call.next_sentence_label",description:`<strong>next_sentence_label</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring) Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"next_sentence_label"},{anchor:"transformers.TFBertForPreTraining.call.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1186",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mr=new Se({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),Pr=new ae({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),td=new Ue({}),od=new A({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1373"}}),nd=new A({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1410",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qr=new ae({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[zO]},$$scope:{ctx:B}}}),id=new Ue({}),ld=new A({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1281"}}),Nr=new Se({props:{$$slots:{default:[MO]},$$scope:{ctx:B}}}),fd=new A({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Or=new Se({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),Ar=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Ir=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[qO]},$$scope:{ctx:B}}}),md=new Ue({}),ud=new A({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1523"}}),Dr=new Se({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),vd=new A({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForNextSentencePrediction.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForNextSentencePrediction.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForNextSentencePrediction.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForNextSentencePrediction.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1533",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>next_sentence_label</code> is provided) \u2014 Next sentence prediction loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Sr=new Se({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),Ur=new ae({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),yd=new Ue({}),Td=new A({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1614"}}),Hr=new Se({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),Fd=new A({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kr=new Se({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),Rr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Qr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DO]},$$scope:{ctx:B}}}),Bd=new Ue({}),Ed=new A({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1707"}}),Jr=new Se({props:{$$slots:{default:[SO]},$$scope:{ctx:B}}}),jd=new A({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1731",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gr=new Se({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Xr=new ae({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),qd=new Ue({}),Cd=new A({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1837"}}),Zr=new Se({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),Id=new A({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1864",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ea=new Se({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),ta=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[RO]},$$scope:{ctx:B}}}),oa=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[QO]},$$scope:{ctx:B}}}),Ld=new Ue({}),Dd=new A({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1934"}}),sa=new Se({props:{$$slots:{default:[VO]},$$scope:{ctx:B}}}),Hd=new A({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_tf_bert.py#L1956",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ra=new Se({props:{$$slots:{default:[JO]},$$scope:{ctx:B}}}),aa=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GO]},$$scope:{ctx:B}}}),ia=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Kd=new Ue({}),Rd=new A({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),ec=new A({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertModel.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertModel.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new Se({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),ca=new ae({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),tc=new Ue({}),oc=new A({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),cc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForPreTraining.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForPreTraining.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new Se({props:{$$slots:{default:[eA]},$$scope:{ctx:B}}}),fa=new ae({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tA]},$$scope:{ctx:B}}}),pc=new Ue({}),hc=new A({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),vc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForCausalLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForCausalLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Cross attentions weights after the attention softmax, used to compute the weighted average in the
cross-attention heads.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(jnp.ndarray))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> tuples of length <code>config.n_layers</code>, with each tuple containing the cached key, value
states of the self-attention and the cross-attention layers if model is used in encoder-decoder setting.
Only relevant if <code>config.is_decoder = True</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ua=new Se({props:{$$slots:{default:[oA]},$$scope:{ctx:B}}}),ga=new ae({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nA]},$$scope:{ctx:B}}}),yc=new Ue({}),Tc=new A({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),Pc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMaskedLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ba=new Se({props:{$$slots:{default:[sA]},$$scope:{ctx:B}}}),ka=new ae({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rA]},$$scope:{ctx:B}}}),jc=new Ue({}),qc=new A({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Uc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) \u2014 Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ya=new Se({props:{$$slots:{default:[aA]},$$scope:{ctx:B}}}),Ta=new ae({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iA]},$$scope:{ctx:B}}}),Wc=new Ue({}),Hc=new A({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Yc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForSequenceClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$a=new Se({props:{$$slots:{default:[lA]},$$scope:{ctx:B}}}),xa=new ae({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dA]},$$scope:{ctx:B}}}),Zc=new Ue({}),ep=new A({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),lp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForMultipleChoice.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ba=new Se({props:{$$slots:{default:[cA]},$$scope:{ctx:B}}}),Ea=new ae({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pA]},$$scope:{ctx:B}}}),dp=new Ue({}),cp=new A({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),bp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForTokenClassification.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ma=new Se({props:{$$slots:{default:[hA]},$$scope:{ctx:B}}}),Pa=new ae({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[fA]},$$scope:{ctx:B}}}),kp=new Ue({}),vp=new A({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),Ep=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.24.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.token_type_ids",description:`<strong>token_type_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.head_mask",description:`<strong>head_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <code>optional) -- Mask to nullify selected heads of the attention modules. Mask values selected in </code>[0, 1]\`:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/v4.24.0/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertConfig"
>BertConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.24.0/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qa=new Se({props:{$$slots:{default:[mA]},$$scope:{ctx:B}}}),Ca=new ae({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uA]},$$scope:{ctx:B}}}),{c(){d=s("meta"),g=c(),f=s("h1"),m=s("a"),b=s("span"),y(l.$$.fragment),h=c(),z=s("span"),Fe=o("BERT"),ye=c(),S=s("h2"),pe=s("a"),ee=s("span"),y(E.$$.fragment),Be=c(),R=s("span"),Ee=o("Overview"),Te=c(),U=s("p"),ze=o("The BERT model was proposed in "),fe=s("a"),G=o("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Me=o(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),we=c(),H=s("p"),Pe=o("The abstract from the paper is the following:"),$e=c(),K=s("p"),_e=s("em"),je=o(`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),oe=c(),j=s("p"),q=s("em"),qe=o(`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),V=c(),ge=s("p"),Ce=o("Tips:"),J=c(),he=s("ul"),be=s("li"),N=o(`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Ne=c(),Q=s("li"),Oe=o(`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),xe=c(),D=s("p"),Ae=o("This model was contributed by "),me=s("a"),L=o("thomwolf"),Ie=o(". The original code can be found "),W=s("a"),Le=o("here"),se=o("."),C=c(),de=s("h2"),O=s("a"),ke=s("span"),y(ue.$$.fragment),v=c(),M=s("span"),Re=o("BertConfig"),ne=c(),ve=s("div"),y(We.$$.fragment),P=c(),De=s("p"),Qe=o("This is the configuration class to store the configuration of a "),Ke=s("a"),Ve=o("BertModel"),Je=o(" or a "),I=s("a"),X=o("TFBertModel"),Ge=o(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=s("a"),Y=o("bert-base-uncased"),Xe=o(" architecture."),Ye=c(),ce=s("p"),Ze=o("Configuration objects inherit from "),Z=s("a"),et=o("PretrainedConfig"),Hy=o(` and can be used to control the model outputs. Read the
documentation from `),Wp=s("a"),Ky=o("PretrainedConfig"),Ry=o(" for more information."),Qy=c(),y(Cs.$$.fragment),Db=c(),fn=s("h2"),Ns=s("a"),jf=s("span"),y(li.$$.fragment),Vy=c(),qf=s("span"),Jy=o("BertTokenizer"),Sb=c(),tt=s("div"),y(di.$$.fragment),Gy=c(),Cf=s("p"),Xy=o("Construct a BERT tokenizer. Based on WordPiece."),Yy=c(),ci=s("p"),Zy=o("This tokenizer inherits from "),Hp=s("a"),eT=o("PreTrainedTokenizer"),tT=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),oT=c(),Ko=s("div"),y(pi.$$.fragment),nT=c(),Nf=s("p"),sT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rT=c(),hi=s("ul"),Kp=s("li"),aT=o("single sequence: "),Of=s("code"),iT=o("[CLS] X [SEP]"),lT=c(),Rp=s("li"),dT=o("pair of sequences: "),Af=s("code"),cT=o("[CLS] A [SEP] B [SEP]"),pT=c(),Os=s("div"),y(fi.$$.fragment),hT=c(),mi=s("p"),fT=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),If=s("code"),mT=o("prepare_for_model"),uT=o(" method."),gT=c(),oo=s("div"),y(ui.$$.fragment),_T=c(),Lf=s("p"),bT=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kT=c(),y(As.$$.fragment),vT=c(),mn=s("p"),yT=o("If "),Df=s("code"),TT=o("token_ids_1"),wT=o(" is "),Sf=s("code"),$T=o("None"),xT=o(", this method only returns the first portion of the mask (0s)."),FT=c(),Qp=s("div"),y(gi.$$.fragment),Ub=c(),un=s("h2"),Is=s("a"),Uf=s("span"),y(_i.$$.fragment),BT=c(),Wf=s("span"),ET=o("BertTokenizerFast"),Wb=c(),xt=s("div"),y(bi.$$.fragment),zT=c(),ki=s("p"),MT=o("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Hf=s("em"),PT=o("tokenizers"),jT=o(" library). Based on WordPiece."),qT=c(),vi=s("p"),CT=o("This tokenizer inherits from "),Vp=s("a"),NT=o("PreTrainedTokenizerFast"),OT=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),AT=c(),Ro=s("div"),y(yi.$$.fragment),IT=c(),Kf=s("p"),LT=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),DT=c(),Ti=s("ul"),Jp=s("li"),ST=o("single sequence: "),Rf=s("code"),UT=o("[CLS] X [SEP]"),WT=c(),Gp=s("li"),HT=o("pair of sequences: "),Qf=s("code"),KT=o("[CLS] A [SEP] B [SEP]"),RT=c(),no=s("div"),y(wi.$$.fragment),QT=c(),Vf=s("p"),VT=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),JT=c(),y(Ls.$$.fragment),GT=c(),gn=s("p"),XT=o("If "),Jf=s("code"),YT=o("token_ids_1"),ZT=o(" is "),Gf=s("code"),ew=o("None"),tw=o(", this method only returns the first portion of the mask (0s)."),Hb=c(),_n=s("h2"),Ds=s("a"),Xf=s("span"),y($i.$$.fragment),ow=c(),Yf=s("span"),nw=o("TFBertTokenizer"),Kb=c(),Ft=s("div"),y(xi.$$.fragment),sw=c(),bn=s("p"),rw=o(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Zf=s("code"),aw=o("from_pretrained()"),iw=o(" method. It can also be initialized with the "),em=s("code"),lw=o("from_tokenizer()"),dw=o(` method, which imports settings
from an existing standard tokenizer object.`),cw=c(),Fi=s("p"),pw=o(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),tm=s("code"),hw=o("tf.string"),fw=o(" inputs to outputs."),mw=c(),Qo=s("div"),y(Bi.$$.fragment),uw=c(),Ei=s("p"),gw=o("Instantiate a "),om=s("code"),_w=o("TFBertTokenizer"),bw=o(" from a pre-trained tokenizer."),kw=c(),y(Ss.$$.fragment),vw=c(),Vo=s("div"),y(zi.$$.fragment),yw=c(),kn=s("p"),Tw=o("Initialize a "),nm=s("code"),ww=o("TFBertTokenizer"),$w=o(" from an existing "),sm=s("code"),xw=o("Tokenizer"),Fw=o("."),Bw=c(),y(Us.$$.fragment),Rb=c(),vn=s("h2"),Ws=s("a"),rm=s("span"),y(Mi.$$.fragment),Ew=c(),am=s("span"),zw=o("Bert specific outputs"),Qb=c(),yn=s("div"),y(Pi.$$.fragment),Mw=c(),ji=s("p"),Pw=o("Output type of "),Xp=s("a"),jw=o("BertForPreTraining"),qw=o("."),Vb=c(),Tn=s("div"),y(qi.$$.fragment),Cw=c(),Ci=s("p"),Nw=o("Output type of "),Yp=s("a"),Ow=o("TFBertForPreTraining"),Aw=o("."),Jb=c(),Po=s("div"),y(Ni.$$.fragment),Iw=c(),Oi=s("p"),Lw=o("Output type of "),Zp=s("a"),Dw=o("BertForPreTraining"),Sw=o("."),Uw=c(),Hs=s("div"),y(Ai.$$.fragment),Ww=c(),im=s("p"),Hw=o("\u201CReturns a new object replacing the specified fields with new values."),Gb=c(),wn=s("h2"),Ks=s("a"),lm=s("span"),y(Ii.$$.fragment),Kw=c(),dm=s("span"),Rw=o("BertModel"),Xb=c(),ot=s("div"),y(Li.$$.fragment),Qw=c(),cm=s("p"),Vw=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jw=c(),Di=s("p"),Gw=o("This model inherits from "),eh=s("a"),Xw=o("PreTrainedModel"),Yw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zw=c(),Si=s("p"),e1=o("This model is also a PyTorch "),Ui=s("a"),t1=o("torch.nn.Module"),o1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),n1=c(),Wi=s("p"),s1=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=s("a"),r1=o(`Attention is
all you need`),a1=o(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),i1=c(),mt=s("p"),l1=o("To behave as an decoder the model needs to be initialized with the "),pm=s("code"),d1=o("is_decoder"),c1=o(` argument of the configuration set
to `),hm=s("code"),p1=o("True"),h1=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),fm=s("code"),f1=o("is_decoder"),m1=o(` argument and
`),mm=s("code"),u1=o("add_cross_attention"),g1=o(" set to "),um=s("code"),_1=o("True"),b1=o("; an "),gm=s("code"),k1=o("encoder_hidden_states"),v1=o(" is then expected as an input to the forward pass."),y1=c(),so=s("div"),y(Ki.$$.fragment),T1=c(),$n=s("p"),w1=o("The "),th=s("a"),$1=o("BertModel"),x1=o(" forward method, overrides the "),_m=s("code"),F1=o("__call__"),B1=o(" special method."),E1=c(),y(Rs.$$.fragment),z1=c(),y(Qs.$$.fragment),Yb=c(),xn=s("h2"),Vs=s("a"),bm=s("span"),y(Ri.$$.fragment),M1=c(),km=s("span"),P1=o("BertForPreTraining"),Zb=c(),Bt=s("div"),y(Qi.$$.fragment),j1=c(),Fn=s("p"),q1=o("Bert Model with two heads on top as done during the pretraining: a "),vm=s("code"),C1=o("masked language modeling"),N1=o(" head and a "),ym=s("code"),O1=o("next sentence prediction (classification)"),A1=o(" head."),I1=c(),Vi=s("p"),L1=o("This model inherits from "),oh=s("a"),D1=o("PreTrainedModel"),S1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U1=c(),Ji=s("p"),W1=o("This model is also a PyTorch "),Gi=s("a"),H1=o("torch.nn.Module"),K1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R1=c(),ro=s("div"),y(Xi.$$.fragment),Q1=c(),Bn=s("p"),V1=o("The "),nh=s("a"),J1=o("BertForPreTraining"),G1=o(" forward method, overrides the "),Tm=s("code"),X1=o("__call__"),Y1=o(" special method."),Z1=c(),y(Js.$$.fragment),e$=c(),y(Gs.$$.fragment),ek=c(),En=s("h2"),Xs=s("a"),wm=s("span"),y(Yi.$$.fragment),t$=c(),$m=s("span"),o$=o("BertLMHeadModel"),tk=c(),Et=s("div"),y(Zi.$$.fragment),n$=c(),el=s("p"),s$=o("Bert Model with a "),xm=s("code"),r$=o("language modeling"),a$=o(" head on top for CLM fine-tuning."),i$=c(),tl=s("p"),l$=o("This model inherits from "),sh=s("a"),d$=o("PreTrainedModel"),c$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),ol=s("p"),h$=o("This model is also a PyTorch "),nl=s("a"),f$=o("torch.nn.Module"),m$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),ao=s("div"),y(sl.$$.fragment),g$=c(),zn=s("p"),_$=o("The "),rh=s("a"),b$=o("BertLMHeadModel"),k$=o(" forward method, overrides the "),Fm=s("code"),v$=o("__call__"),y$=o(" special method."),T$=c(),y(Ys.$$.fragment),w$=c(),y(Zs.$$.fragment),ok=c(),Mn=s("h2"),er=s("a"),Bm=s("span"),y(rl.$$.fragment),$$=c(),Em=s("span"),x$=o("BertForMaskedLM"),nk=c(),zt=s("div"),y(al.$$.fragment),F$=c(),il=s("p"),B$=o("Bert Model with a "),zm=s("code"),E$=o("language modeling"),z$=o(" head on top."),M$=c(),ll=s("p"),P$=o("This model inherits from "),ah=s("a"),j$=o("PreTrainedModel"),q$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),dl=s("p"),N$=o("This model is also a PyTorch "),cl=s("a"),O$=o("torch.nn.Module"),A$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),I$=c(),Nt=s("div"),y(pl.$$.fragment),L$=c(),Pn=s("p"),D$=o("The "),ih=s("a"),S$=o("BertForMaskedLM"),U$=o(" forward method, overrides the "),Mm=s("code"),W$=o("__call__"),H$=o(" special method."),K$=c(),y(tr.$$.fragment),R$=c(),y(or.$$.fragment),Q$=c(),y(nr.$$.fragment),sk=c(),jn=s("h2"),sr=s("a"),Pm=s("span"),y(hl.$$.fragment),V$=c(),jm=s("span"),J$=o("BertForNextSentencePrediction"),rk=c(),Mt=s("div"),y(fl.$$.fragment),G$=c(),ml=s("p"),X$=o("Bert Model with a "),qm=s("code"),Y$=o("next sentence prediction (classification)"),Z$=o(" head on top."),e2=c(),ul=s("p"),t2=o("This model inherits from "),lh=s("a"),o2=o("PreTrainedModel"),n2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),gl=s("p"),r2=o("This model is also a PyTorch "),_l=s("a"),a2=o("torch.nn.Module"),i2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),io=s("div"),y(bl.$$.fragment),d2=c(),qn=s("p"),c2=o("The "),dh=s("a"),p2=o("BertForNextSentencePrediction"),h2=o(" forward method, overrides the "),Cm=s("code"),f2=o("__call__"),m2=o(" special method."),u2=c(),y(rr.$$.fragment),g2=c(),y(ar.$$.fragment),ak=c(),Cn=s("h2"),ir=s("a"),Nm=s("span"),y(kl.$$.fragment),_2=c(),Om=s("span"),b2=o("BertForSequenceClassification"),ik=c(),Pt=s("div"),y(vl.$$.fragment),k2=c(),Am=s("p"),v2=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y2=c(),yl=s("p"),T2=o("This model inherits from "),ch=s("a"),w2=o("PreTrainedModel"),$2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x2=c(),Tl=s("p"),F2=o("This model is also a PyTorch "),wl=s("a"),B2=o("torch.nn.Module"),E2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z2=c(),ft=s("div"),y($l.$$.fragment),M2=c(),Nn=s("p"),P2=o("The "),ph=s("a"),j2=o("BertForSequenceClassification"),q2=o(" forward method, overrides the "),Im=s("code"),C2=o("__call__"),N2=o(" special method."),O2=c(),y(lr.$$.fragment),A2=c(),y(dr.$$.fragment),I2=c(),y(cr.$$.fragment),L2=c(),y(pr.$$.fragment),D2=c(),y(hr.$$.fragment),lk=c(),On=s("h2"),fr=s("a"),Lm=s("span"),y(xl.$$.fragment),S2=c(),Dm=s("span"),U2=o("BertForMultipleChoice"),dk=c(),jt=s("div"),y(Fl.$$.fragment),W2=c(),Sm=s("p"),H2=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K2=c(),Bl=s("p"),R2=o("This model inherits from "),hh=s("a"),Q2=o("PreTrainedModel"),V2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J2=c(),El=s("p"),G2=o("This model is also a PyTorch "),zl=s("a"),X2=o("torch.nn.Module"),Y2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=c(),lo=s("div"),y(Ml.$$.fragment),e0=c(),An=s("p"),t0=o("The "),fh=s("a"),o0=o("BertForMultipleChoice"),n0=o(" forward method, overrides the "),Um=s("code"),s0=o("__call__"),r0=o(" special method."),a0=c(),y(mr.$$.fragment),i0=c(),y(ur.$$.fragment),ck=c(),In=s("h2"),gr=s("a"),Wm=s("span"),y(Pl.$$.fragment),l0=c(),Hm=s("span"),d0=o("BertForTokenClassification"),pk=c(),qt=s("div"),y(jl.$$.fragment),c0=c(),Km=s("p"),p0=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),h0=c(),ql=s("p"),f0=o("This model inherits from "),mh=s("a"),m0=o("PreTrainedModel"),u0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),g0=c(),Cl=s("p"),_0=o("This model is also a PyTorch "),Nl=s("a"),b0=o("torch.nn.Module"),k0=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),v0=c(),Ot=s("div"),y(Ol.$$.fragment),y0=c(),Ln=s("p"),T0=o("The "),uh=s("a"),w0=o("BertForTokenClassification"),$0=o(" forward method, overrides the "),Rm=s("code"),x0=o("__call__"),F0=o(" special method."),B0=c(),y(_r.$$.fragment),E0=c(),y(br.$$.fragment),z0=c(),y(kr.$$.fragment),hk=c(),Dn=s("h2"),vr=s("a"),Qm=s("span"),y(Al.$$.fragment),M0=c(),Vm=s("span"),P0=o("BertForQuestionAnswering"),fk=c(),Ct=s("div"),y(Il.$$.fragment),j0=c(),Sn=s("p"),q0=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jm=s("code"),C0=o("span start logits"),N0=o(" and "),Gm=s("code"),O0=o("span end logits"),A0=o(")."),I0=c(),Ll=s("p"),L0=o("This model inherits from "),gh=s("a"),D0=o("PreTrainedModel"),S0=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U0=c(),Dl=s("p"),W0=o("This model is also a PyTorch "),Sl=s("a"),H0=o("torch.nn.Module"),K0=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R0=c(),At=s("div"),y(Ul.$$.fragment),Q0=c(),Un=s("p"),V0=o("The "),_h=s("a"),J0=o("BertForQuestionAnswering"),G0=o(" forward method, overrides the "),Xm=s("code"),X0=o("__call__"),Y0=o(" special method."),Z0=c(),y(yr.$$.fragment),e4=c(),y(Tr.$$.fragment),t4=c(),y(wr.$$.fragment),mk=c(),Wn=s("h2"),$r=s("a"),Ym=s("span"),y(Wl.$$.fragment),o4=c(),Zm=s("span"),n4=o("TFBertModel"),uk=c(),ut=s("div"),y(Hl.$$.fragment),s4=c(),eu=s("p"),r4=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),a4=c(),Kl=s("p"),i4=o("This model inherits from "),bh=s("a"),l4=o("TFPreTrainedModel"),d4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),c4=c(),Rl=s("p"),p4=o("This model is also a "),Ql=s("a"),h4=o("tf.keras.Model"),f4=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),m4=c(),y(xr.$$.fragment),u4=c(),co=s("div"),y(Vl.$$.fragment),g4=c(),Hn=s("p"),_4=o("The "),kh=s("a"),b4=o("TFBertModel"),k4=o(" forward method, overrides the "),tu=s("code"),v4=o("__call__"),y4=o(" special method."),T4=c(),y(Fr.$$.fragment),w4=c(),y(Br.$$.fragment),gk=c(),Kn=s("h2"),Er=s("a"),ou=s("span"),y(Jl.$$.fragment),$4=c(),nu=s("span"),x4=o("TFBertForPreTraining"),_k=c(),gt=s("div"),y(Gl.$$.fragment),F4=c(),Rn=s("p"),B4=o(`Bert Model with two heads on top as done during the pretraining:
a `),su=s("code"),E4=o("masked language modeling"),z4=o(" head and a "),ru=s("code"),M4=o("next sentence prediction (classification)"),P4=o(" head."),j4=c(),Xl=s("p"),q4=o("This model inherits from "),vh=s("a"),C4=o("TFPreTrainedModel"),N4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),O4=c(),Yl=s("p"),A4=o("This model is also a "),Zl=s("a"),I4=o("tf.keras.Model"),L4=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),D4=c(),y(zr.$$.fragment),S4=c(),po=s("div"),y(ed.$$.fragment),U4=c(),Qn=s("p"),W4=o("The "),yh=s("a"),H4=o("TFBertForPreTraining"),K4=o(" forward method, overrides the "),au=s("code"),R4=o("__call__"),Q4=o(" special method."),V4=c(),y(Mr.$$.fragment),J4=c(),y(Pr.$$.fragment),bk=c(),Vn=s("h2"),jr=s("a"),iu=s("span"),y(td.$$.fragment),G4=c(),lu=s("span"),X4=o("TFBertModelLMHeadModel"),kk=c(),Jn=s("div"),y(od.$$.fragment),Y4=c(),It=s("div"),y(nd.$$.fragment),Z4=c(),nt=s("p"),ex=o("encoder_hidden_states  ("),du=s("code"),tx=o("tf.Tensor"),ox=o(" of shape "),cu=s("code"),nx=o("(batch_size, sequence_length, hidden_size)"),sx=o(", "),pu=s("em"),rx=o("optional"),ax=o(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=s("code"),ix=o("tf.Tensor"),lx=o(" of shape "),fu=s("code"),dx=o("(batch_size, sequence_length)"),cx=o(", "),mu=s("em"),px=o("optional"),hx=o(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=s("code"),fx=o("[0, 1]"),mx=o(":"),ux=c(),sd=s("ul"),rd=s("li"),gx=o("1 for tokens that are "),gu=s("strong"),_x=o("not masked"),bx=o(","),kx=c(),ad=s("li"),vx=o("0 for tokens that are "),_u=s("strong"),yx=o("masked"),Tx=o("."),wx=c(),te=s("p"),$x=o("past_key_values ("),bu=s("code"),xx=o("Tuple[Tuple[tf.Tensor]]"),Fx=o(" of length "),ku=s("code"),Bx=o("config.n_layers"),Ex=o(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),vu=s("code"),zx=o("past_key_values"),Mx=o(" are used, the user can optionally input only the last "),yu=s("code"),Px=o("decoder_input_ids"),jx=o(` (those that
don\u2019t have their past key value states given to this model) of shape `),Tu=s("code"),qx=o("(batch_size, 1)"),Cx=o(` instead of all
`),wu=s("code"),Nx=o("decoder_input_ids"),Ox=o(" of shape "),$u=s("code"),Ax=o("(batch_size, sequence_length)"),Ix=o(`.
use_cache (`),xu=s("code"),Lx=o("bool"),Dx=o(", "),Fu=s("em"),Sx=o("optional"),Ux=o(", defaults to "),Bu=s("code"),Wx=o("True"),Hx=o(`):
If set to `),Eu=s("code"),Kx=o("True"),Rx=o(", "),zu=s("code"),Qx=o("past_key_values"),Vx=o(` key value states are returned and can be used to speed up decoding (see
`),Mu=s("code"),Jx=o("past_key_values"),Gx=o("). Set to "),Pu=s("code"),Xx=o("False"),Yx=o(" during training, "),ju=s("code"),Zx=o("True"),eF=o(` during generation
labels (`),qu=s("code"),tF=o("tf.Tensor"),oF=o(" or "),Cu=s("code"),nF=o("np.ndarray"),sF=o(" of shape "),Nu=s("code"),rF=o("(batch_size, sequence_length)"),aF=o(", "),Ou=s("em"),iF=o("optional"),lF=o(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=s("code"),dF=o("[0, ..., config.vocab_size - 1]"),cF=o("."),pF=c(),y(qr.$$.fragment),vk=c(),Gn=s("h2"),Cr=s("a"),Iu=s("span"),y(id.$$.fragment),hF=c(),Lu=s("span"),fF=o("TFBertForMaskedLM"),yk=c(),_t=s("div"),y(ld.$$.fragment),mF=c(),dd=s("p"),uF=o("Bert Model with a "),Du=s("code"),gF=o("language modeling"),_F=o(" head on top."),bF=c(),cd=s("p"),kF=o("This model inherits from "),Th=s("a"),vF=o("TFPreTrainedModel"),yF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),TF=c(),pd=s("p"),wF=o("This model is also a "),hd=s("a"),$F=o("tf.keras.Model"),xF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),FF=c(),y(Nr.$$.fragment),BF=c(),Lt=s("div"),y(fd.$$.fragment),EF=c(),Xn=s("p"),zF=o("The "),wh=s("a"),MF=o("TFBertForMaskedLM"),PF=o(" forward method, overrides the "),Su=s("code"),jF=o("__call__"),qF=o(" special method."),CF=c(),y(Or.$$.fragment),NF=c(),y(Ar.$$.fragment),OF=c(),y(Ir.$$.fragment),Tk=c(),Yn=s("h2"),Lr=s("a"),Uu=s("span"),y(md.$$.fragment),AF=c(),Wu=s("span"),IF=o("TFBertForNextSentencePrediction"),wk=c(),bt=s("div"),y(ud.$$.fragment),LF=c(),gd=s("p"),DF=o("Bert Model with a "),Hu=s("code"),SF=o("next sentence prediction (classification)"),UF=o(" head on top."),WF=c(),_d=s("p"),HF=o("This model inherits from "),$h=s("a"),KF=o("TFPreTrainedModel"),RF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QF=c(),bd=s("p"),VF=o("This model is also a "),kd=s("a"),JF=o("tf.keras.Model"),GF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XF=c(),y(Dr.$$.fragment),YF=c(),ho=s("div"),y(vd.$$.fragment),ZF=c(),Zn=s("p"),eB=o("The "),xh=s("a"),tB=o("TFBertForNextSentencePrediction"),oB=o(" forward method, overrides the "),Ku=s("code"),nB=o("__call__"),sB=o(" special method."),rB=c(),y(Sr.$$.fragment),aB=c(),y(Ur.$$.fragment),$k=c(),es=s("h2"),Wr=s("a"),Ru=s("span"),y(yd.$$.fragment),iB=c(),Qu=s("span"),lB=o("TFBertForSequenceClassification"),xk=c(),kt=s("div"),y(Td.$$.fragment),dB=c(),Vu=s("p"),cB=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pB=c(),wd=s("p"),hB=o("This model inherits from "),Fh=s("a"),fB=o("TFPreTrainedModel"),mB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uB=c(),$d=s("p"),gB=o("This model is also a "),xd=s("a"),_B=o("tf.keras.Model"),bB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kB=c(),y(Hr.$$.fragment),vB=c(),Dt=s("div"),y(Fd.$$.fragment),yB=c(),ts=s("p"),TB=o("The "),Bh=s("a"),wB=o("TFBertForSequenceClassification"),$B=o(" forward method, overrides the "),Ju=s("code"),xB=o("__call__"),FB=o(" special method."),BB=c(),y(Kr.$$.fragment),EB=c(),y(Rr.$$.fragment),zB=c(),y(Qr.$$.fragment),Fk=c(),os=s("h2"),Vr=s("a"),Gu=s("span"),y(Bd.$$.fragment),MB=c(),Xu=s("span"),PB=o("TFBertForMultipleChoice"),Bk=c(),vt=s("div"),y(Ed.$$.fragment),jB=c(),Yu=s("p"),qB=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CB=c(),zd=s("p"),NB=o("This model inherits from "),Eh=s("a"),OB=o("TFPreTrainedModel"),AB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),IB=c(),Md=s("p"),LB=o("This model is also a "),Pd=s("a"),DB=o("tf.keras.Model"),SB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UB=c(),y(Jr.$$.fragment),WB=c(),fo=s("div"),y(jd.$$.fragment),HB=c(),ns=s("p"),KB=o("The "),zh=s("a"),RB=o("TFBertForMultipleChoice"),QB=o(" forward method, overrides the "),Zu=s("code"),VB=o("__call__"),JB=o(" special method."),GB=c(),y(Gr.$$.fragment),XB=c(),y(Xr.$$.fragment),Ek=c(),ss=s("h2"),Yr=s("a"),eg=s("span"),y(qd.$$.fragment),YB=c(),tg=s("span"),ZB=o("TFBertForTokenClassification"),zk=c(),yt=s("div"),y(Cd.$$.fragment),eE=c(),og=s("p"),tE=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oE=c(),Nd=s("p"),nE=o("This model inherits from "),Mh=s("a"),sE=o("TFPreTrainedModel"),rE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aE=c(),Od=s("p"),iE=o("This model is also a "),Ad=s("a"),lE=o("tf.keras.Model"),dE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cE=c(),y(Zr.$$.fragment),pE=c(),St=s("div"),y(Id.$$.fragment),hE=c(),rs=s("p"),fE=o("The "),Ph=s("a"),mE=o("TFBertForTokenClassification"),uE=o(" forward method, overrides the "),ng=s("code"),gE=o("__call__"),_E=o(" special method."),bE=c(),y(ea.$$.fragment),kE=c(),y(ta.$$.fragment),vE=c(),y(oa.$$.fragment),Mk=c(),as=s("h2"),na=s("a"),sg=s("span"),y(Ld.$$.fragment),yE=c(),rg=s("span"),TE=o("TFBertForQuestionAnswering"),Pk=c(),Tt=s("div"),y(Dd.$$.fragment),wE=c(),is=s("p"),$E=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=s("code"),xE=o("span start logits"),FE=o(" and "),ig=s("code"),BE=o("span end logits"),EE=o(")."),zE=c(),Sd=s("p"),ME=o("This model inherits from "),jh=s("a"),PE=o("TFPreTrainedModel"),jE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qE=c(),Ud=s("p"),CE=o("This model is also a "),Wd=s("a"),NE=o("tf.keras.Model"),OE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),AE=c(),y(sa.$$.fragment),IE=c(),Ut=s("div"),y(Hd.$$.fragment),LE=c(),ls=s("p"),DE=o("The "),qh=s("a"),SE=o("TFBertForQuestionAnswering"),UE=o(" forward method, overrides the "),lg=s("code"),WE=o("__call__"),HE=o(" special method."),KE=c(),y(ra.$$.fragment),RE=c(),y(aa.$$.fragment),QE=c(),y(ia.$$.fragment),jk=c(),ds=s("h2"),la=s("a"),dg=s("span"),y(Kd.$$.fragment),VE=c(),cg=s("span"),JE=o("FlaxBertModel"),qk=c(),st=s("div"),y(Rd.$$.fragment),GE=c(),pg=s("p"),XE=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),YE=c(),Qd=s("p"),ZE=o("This model inherits from "),Ch=s("a"),ez=o("FlaxPreTrainedModel"),tz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oz=c(),Vd=s("p"),nz=o("This model is also a Flax Linen "),Jd=s("a"),sz=o("flax.linen.Module"),rz=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),az=c(),hg=s("p"),iz=o("Finally, this model supports inherent JAX features such as:"),lz=c(),jo=s("ul"),fg=s("li"),Gd=s("a"),dz=o("Just-In-Time (JIT) compilation"),cz=c(),mg=s("li"),Xd=s("a"),pz=o("Automatic Differentiation"),hz=c(),ug=s("li"),Yd=s("a"),fz=o("Vectorization"),mz=c(),gg=s("li"),Zd=s("a"),uz=o("Parallelization"),gz=c(),mo=s("div"),y(ec.$$.fragment),_z=c(),cs=s("p"),bz=o("The "),_g=s("code"),kz=o("FlaxBertPreTrainedModel"),vz=o(" forward method, overrides the "),bg=s("code"),yz=o("__call__"),Tz=o(" special method."),wz=c(),y(da.$$.fragment),$z=c(),y(ca.$$.fragment),Ck=c(),ps=s("h2"),pa=s("a"),kg=s("span"),y(tc.$$.fragment),xz=c(),vg=s("span"),Fz=o("FlaxBertForPreTraining"),Nk=c(),rt=s("div"),y(oc.$$.fragment),Bz=c(),hs=s("p"),Ez=o("Bert Model with two heads on top as done during the pretraining: a "),yg=s("code"),zz=o("masked language modeling"),Mz=o(" head and a "),Tg=s("code"),Pz=o("next sentence prediction (classification)"),jz=o(" head."),qz=c(),nc=s("p"),Cz=o("This model inherits from "),Nh=s("a"),Nz=o("FlaxPreTrainedModel"),Oz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Az=c(),sc=s("p"),Iz=o("This model is also a Flax Linen "),rc=s("a"),Lz=o("flax.linen.Module"),Dz=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Sz=c(),wg=s("p"),Uz=o("Finally, this model supports inherent JAX features such as:"),Wz=c(),qo=s("ul"),$g=s("li"),ac=s("a"),Hz=o("Just-In-Time (JIT) compilation"),Kz=c(),xg=s("li"),ic=s("a"),Rz=o("Automatic Differentiation"),Qz=c(),Fg=s("li"),lc=s("a"),Vz=o("Vectorization"),Jz=c(),Bg=s("li"),dc=s("a"),Gz=o("Parallelization"),Xz=c(),uo=s("div"),y(cc.$$.fragment),Yz=c(),fs=s("p"),Zz=o("The "),Eg=s("code"),eM=o("FlaxBertPreTrainedModel"),tM=o(" forward method, overrides the "),zg=s("code"),oM=o("__call__"),nM=o(" special method."),sM=c(),y(ha.$$.fragment),rM=c(),y(fa.$$.fragment),Ok=c(),ms=s("h2"),ma=s("a"),Mg=s("span"),y(pc.$$.fragment),aM=c(),Pg=s("span"),iM=o("FlaxBertForCausalLM"),Ak=c(),at=s("div"),y(hc.$$.fragment),lM=c(),jg=s("p"),dM=o(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),cM=c(),fc=s("p"),pM=o("This model inherits from "),Oh=s("a"),hM=o("FlaxPreTrainedModel"),fM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),mM=c(),mc=s("p"),uM=o("This model is also a Flax Linen "),uc=s("a"),gM=o("flax.linen.Module"),_M=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),bM=c(),qg=s("p"),kM=o("Finally, this model supports inherent JAX features such as:"),vM=c(),Co=s("ul"),Cg=s("li"),gc=s("a"),yM=o("Just-In-Time (JIT) compilation"),TM=c(),Ng=s("li"),_c=s("a"),wM=o("Automatic Differentiation"),$M=c(),Og=s("li"),bc=s("a"),xM=o("Vectorization"),FM=c(),Ag=s("li"),kc=s("a"),BM=o("Parallelization"),EM=c(),go=s("div"),y(vc.$$.fragment),zM=c(),us=s("p"),MM=o("The "),Ig=s("code"),PM=o("FlaxBertPreTrainedModel"),jM=o(" forward method, overrides the "),Lg=s("code"),qM=o("__call__"),CM=o(" special method."),NM=c(),y(ua.$$.fragment),OM=c(),y(ga.$$.fragment),Ik=c(),gs=s("h2"),_a=s("a"),Dg=s("span"),y(yc.$$.fragment),AM=c(),Sg=s("span"),IM=o("FlaxBertForMaskedLM"),Lk=c(),it=s("div"),y(Tc.$$.fragment),LM=c(),wc=s("p"),DM=o("Bert Model with a "),Ug=s("code"),SM=o("language modeling"),UM=o(" head on top."),WM=c(),$c=s("p"),HM=o("This model inherits from "),Ah=s("a"),KM=o("FlaxPreTrainedModel"),RM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),QM=c(),xc=s("p"),VM=o("This model is also a Flax Linen "),Fc=s("a"),JM=o("flax.linen.Module"),GM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),XM=c(),Wg=s("p"),YM=o("Finally, this model supports inherent JAX features such as:"),ZM=c(),No=s("ul"),Hg=s("li"),Bc=s("a"),eP=o("Just-In-Time (JIT) compilation"),tP=c(),Kg=s("li"),Ec=s("a"),oP=o("Automatic Differentiation"),nP=c(),Rg=s("li"),zc=s("a"),sP=o("Vectorization"),rP=c(),Qg=s("li"),Mc=s("a"),aP=o("Parallelization"),iP=c(),_o=s("div"),y(Pc.$$.fragment),lP=c(),_s=s("p"),dP=o("The "),Vg=s("code"),cP=o("FlaxBertPreTrainedModel"),pP=o(" forward method, overrides the "),Jg=s("code"),hP=o("__call__"),fP=o(" special method."),mP=c(),y(ba.$$.fragment),uP=c(),y(ka.$$.fragment),Dk=c(),bs=s("h2"),va=s("a"),Gg=s("span"),y(jc.$$.fragment),gP=c(),Xg=s("span"),_P=o("FlaxBertForNextSentencePrediction"),Sk=c(),lt=s("div"),y(qc.$$.fragment),bP=c(),Cc=s("p"),kP=o("Bert Model with a "),Yg=s("code"),vP=o("next sentence prediction (classification)"),yP=o(" head on top."),TP=c(),Nc=s("p"),wP=o("This model inherits from "),Ih=s("a"),$P=o("FlaxPreTrainedModel"),xP=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FP=c(),Oc=s("p"),BP=o("This model is also a Flax Linen "),Ac=s("a"),EP=o("flax.linen.Module"),zP=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),MP=c(),Zg=s("p"),PP=o("Finally, this model supports inherent JAX features such as:"),jP=c(),Oo=s("ul"),e_=s("li"),Ic=s("a"),qP=o("Just-In-Time (JIT) compilation"),CP=c(),t_=s("li"),Lc=s("a"),NP=o("Automatic Differentiation"),OP=c(),o_=s("li"),Dc=s("a"),AP=o("Vectorization"),IP=c(),n_=s("li"),Sc=s("a"),LP=o("Parallelization"),DP=c(),bo=s("div"),y(Uc.$$.fragment),SP=c(),ks=s("p"),UP=o("The "),s_=s("code"),WP=o("FlaxBertPreTrainedModel"),HP=o(" forward method, overrides the "),r_=s("code"),KP=o("__call__"),RP=o(" special method."),QP=c(),y(ya.$$.fragment),VP=c(),y(Ta.$$.fragment),Uk=c(),vs=s("h2"),wa=s("a"),a_=s("span"),y(Wc.$$.fragment),JP=c(),i_=s("span"),GP=o("FlaxBertForSequenceClassification"),Wk=c(),dt=s("div"),y(Hc.$$.fragment),XP=c(),l_=s("p"),YP=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),Kc=s("p"),ej=o("This model inherits from "),Lh=s("a"),tj=o("FlaxPreTrainedModel"),oj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nj=c(),Rc=s("p"),sj=o("This model is also a Flax Linen "),Qc=s("a"),rj=o("flax.linen.Module"),aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ij=c(),d_=s("p"),lj=o("Finally, this model supports inherent JAX features such as:"),dj=c(),Ao=s("ul"),c_=s("li"),Vc=s("a"),cj=o("Just-In-Time (JIT) compilation"),pj=c(),p_=s("li"),Jc=s("a"),hj=o("Automatic Differentiation"),fj=c(),h_=s("li"),Gc=s("a"),mj=o("Vectorization"),uj=c(),f_=s("li"),Xc=s("a"),gj=o("Parallelization"),_j=c(),ko=s("div"),y(Yc.$$.fragment),bj=c(),ys=s("p"),kj=o("The "),m_=s("code"),vj=o("FlaxBertPreTrainedModel"),yj=o(" forward method, overrides the "),u_=s("code"),Tj=o("__call__"),wj=o(" special method."),$j=c(),y($a.$$.fragment),xj=c(),y(xa.$$.fragment),Hk=c(),Ts=s("h2"),Fa=s("a"),g_=s("span"),y(Zc.$$.fragment),Fj=c(),__=s("span"),Bj=o("FlaxBertForMultipleChoice"),Kk=c(),ct=s("div"),y(ep.$$.fragment),Ej=c(),b_=s("p"),zj=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mj=c(),tp=s("p"),Pj=o("This model inherits from "),Dh=s("a"),jj=o("FlaxPreTrainedModel"),qj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cj=c(),op=s("p"),Nj=o("This model is also a Flax Linen "),np=s("a"),Oj=o("flax.linen.Module"),Aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ij=c(),k_=s("p"),Lj=o("Finally, this model supports inherent JAX features such as:"),Dj=c(),Io=s("ul"),v_=s("li"),sp=s("a"),Sj=o("Just-In-Time (JIT) compilation"),Uj=c(),y_=s("li"),rp=s("a"),Wj=o("Automatic Differentiation"),Hj=c(),T_=s("li"),ap=s("a"),Kj=o("Vectorization"),Rj=c(),w_=s("li"),ip=s("a"),Qj=o("Parallelization"),Vj=c(),vo=s("div"),y(lp.$$.fragment),Jj=c(),ws=s("p"),Gj=o("The "),$_=s("code"),Xj=o("FlaxBertPreTrainedModel"),Yj=o(" forward method, overrides the "),x_=s("code"),Zj=o("__call__"),eq=o(" special method."),tq=c(),y(Ba.$$.fragment),oq=c(),y(Ea.$$.fragment),Rk=c(),$s=s("h2"),za=s("a"),F_=s("span"),y(dp.$$.fragment),nq=c(),B_=s("span"),sq=o("FlaxBertForTokenClassification"),Qk=c(),pt=s("div"),y(cp.$$.fragment),rq=c(),E_=s("p"),aq=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iq=c(),pp=s("p"),lq=o("This model inherits from "),Sh=s("a"),dq=o("FlaxPreTrainedModel"),cq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pq=c(),hp=s("p"),hq=o("This model is also a Flax Linen "),fp=s("a"),fq=o("flax.linen.Module"),mq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uq=c(),z_=s("p"),gq=o("Finally, this model supports inherent JAX features such as:"),_q=c(),Lo=s("ul"),M_=s("li"),mp=s("a"),bq=o("Just-In-Time (JIT) compilation"),kq=c(),P_=s("li"),up=s("a"),vq=o("Automatic Differentiation"),yq=c(),j_=s("li"),gp=s("a"),Tq=o("Vectorization"),wq=c(),q_=s("li"),_p=s("a"),$q=o("Parallelization"),xq=c(),yo=s("div"),y(bp.$$.fragment),Fq=c(),xs=s("p"),Bq=o("The "),C_=s("code"),Eq=o("FlaxBertPreTrainedModel"),zq=o(" forward method, overrides the "),N_=s("code"),Mq=o("__call__"),Pq=o(" special method."),jq=c(),y(Ma.$$.fragment),qq=c(),y(Pa.$$.fragment),Vk=c(),Fs=s("h2"),ja=s("a"),O_=s("span"),y(kp.$$.fragment),Cq=c(),A_=s("span"),Nq=o("FlaxBertForQuestionAnswering"),Jk=c(),ht=s("div"),y(vp.$$.fragment),Oq=c(),Bs=s("p"),Aq=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=s("code"),Iq=o("span start logits"),Lq=o(" and "),L_=s("code"),Dq=o("span end logits"),Sq=o(")."),Uq=c(),yp=s("p"),Wq=o("This model inherits from "),Uh=s("a"),Hq=o("FlaxPreTrainedModel"),Kq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rq=c(),Tp=s("p"),Qq=o("This model is also a Flax Linen "),wp=s("a"),Vq=o("flax.linen.Module"),Jq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gq=c(),D_=s("p"),Xq=o("Finally, this model supports inherent JAX features such as:"),Yq=c(),Do=s("ul"),S_=s("li"),$p=s("a"),Zq=o("Just-In-Time (JIT) compilation"),e3=c(),U_=s("li"),xp=s("a"),t3=o("Automatic Differentiation"),o3=c(),W_=s("li"),Fp=s("a"),n3=o("Vectorization"),s3=c(),H_=s("li"),Bp=s("a"),r3=o("Parallelization"),a3=c(),To=s("div"),y(Ep.$$.fragment),i3=c(),Es=s("p"),l3=o("The "),K_=s("code"),d3=o("FlaxBertPreTrainedModel"),c3=o(" forward method, overrides the "),R_=s("code"),p3=o("__call__"),h3=o(" special method."),f3=c(),y(qa.$$.fragment),m3=c(),y(Ca.$$.fragment),this.h()},l(i){const k=R7('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(i),f=r(i,"H1",{class:!0});var zp=a(f);m=r(zp,"A",{id:!0,class:!0,href:!0});var Q_=a(m);b=r(Q_,"SPAN",{});var V_=a(b);T(l.$$.fragment,V_),V_.forEach(t),Q_.forEach(t),h=p(zp),z=r(zp,"SPAN",{});var J_=a(z);Fe=n(J_,"BERT"),J_.forEach(t),zp.forEach(t),ye=p(i),S=r(i,"H2",{class:!0});var Mp=a(S);pe=r(Mp,"A",{id:!0,class:!0,href:!0});var G_=a(pe);ee=r(G_,"SPAN",{});var X_=a(ee);T(E.$$.fragment,X_),X_.forEach(t),G_.forEach(t),Be=p(Mp),R=r(Mp,"SPAN",{});var Y_=a(R);Ee=n(Y_,"Overview"),Y_.forEach(t),Mp.forEach(t),Te=p(i),U=r(i,"P",{});var Pp=a(U);ze=n(Pp,"The BERT model was proposed in "),fe=r(Pp,"A",{href:!0,rel:!0});var Z_=a(fe);G=n(Z_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Z_.forEach(t),Me=n(Pp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
bidirectional transformer pretrained using a combination of masked language modeling objective and next sentence
prediction on a large corpus comprising the Toronto Book Corpus and Wikipedia.`),Pp.forEach(t),we=p(i),H=r(i,"P",{});var eb=a(H);Pe=n(eb,"The abstract from the paper is the following:"),eb.forEach(t),$e=p(i),K=r(i,"P",{});var tb=a(K);_e=r(tb,"EM",{});var ob=a(_e);je=n(ob,`We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations
from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional
representations from unlabeled text by jointly conditioning on both left and right context in all layers. As a result,
the pre-trained BERT model can be fine-tuned with just one additional output layer to create state-of-the-art models
for a wide range of tasks, such as question answering and language inference, without substantial task-specific
architecture modifications.`),ob.forEach(t),tb.forEach(t),oe=p(i),j=r(i,"P",{});var nb=a(j);q=r(nb,"EM",{});var sb=a(q);qe=n(sb,`BERT is conceptually simple and empirically powerful. It obtains new state-of-the-art results on eleven natural
language processing tasks, including pushing the GLUE score to 80.5% (7.7% point absolute improvement), MultiNLI
accuracy to 86.7% (4.6% absolute improvement), SQuAD v1.1 question answering Test F1 to 93.2 (1.5 point absolute
improvement) and SQuAD v2.0 Test F1 to 83.1 (5.1 point absolute improvement).`),sb.forEach(t),nb.forEach(t),V=p(i),ge=r(i,"P",{});var rb=a(ge);Ce=n(rb,"Tips:"),rb.forEach(t),J=p(i),he=r(i,"UL",{});var jp=a(he);be=r(jp,"LI",{});var ab=a(be);N=n(ab,`BERT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),ab.forEach(t),Ne=p(jp),Q=r(jp,"LI",{});var ib=a(Q);Oe=n(ib,`BERT was trained with the masked language modeling (MLM) and next sentence prediction (NSP) objectives. It is
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),ib.forEach(t),jp.forEach(t),xe=p(i),D=r(i,"P",{});var zs=a(D);Ae=n(zs,"This model was contributed by "),me=r(zs,"A",{href:!0,rel:!0});var lb=a(me);L=n(lb,"thomwolf"),lb.forEach(t),Ie=n(zs,". The original code can be found "),W=r(zs,"A",{href:!0,rel:!0});var db=a(W);Le=n(db,"here"),db.forEach(t),se=n(zs,"."),zs.forEach(t),C=p(i),de=r(i,"H2",{class:!0});var qp=a(de);O=r(qp,"A",{id:!0,class:!0,href:!0});var cb=a(O);ke=r(cb,"SPAN",{});var pb=a(ke);T(ue.$$.fragment,pb),pb.forEach(t),cb.forEach(t),v=p(qp),M=r(qp,"SPAN",{});var hb=a(M);Re=n(hb,"BertConfig"),hb.forEach(t),qp.forEach(t),ne=p(i),ve=r(i,"DIV",{class:!0});var So=a(ve);T(We.$$.fragment,So),P=p(So),De=r(So,"P",{});var Uo=a(De);Qe=n(Uo,"This is the configuration class to store the configuration of a "),Ke=r(Uo,"A",{href:!0});var fb=a(Ke);Ve=n(fb,"BertModel"),fb.forEach(t),Je=n(Uo," or a "),I=r(Uo,"A",{href:!0});var mb=a(I);X=n(mb,"TFBertModel"),mb.forEach(t),Ge=n(Uo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=r(Uo,"A",{href:!0,rel:!0});var ub=a(He);Y=n(ub,"bert-base-uncased"),ub.forEach(t),Xe=n(Uo," architecture."),Uo.forEach(t),Ye=p(So),ce=r(So,"P",{});var Ms=a(ce);Ze=n(Ms,"Configuration objects inherit from "),Z=r(Ms,"A",{href:!0});var gb=a(Z);et=n(gb,"PretrainedConfig"),gb.forEach(t),Hy=n(Ms,` and can be used to control the model outputs. Read the
documentation from `),Wp=r(Ms,"A",{href:!0});var _b=a(Wp);Ky=n(_b,"PretrainedConfig"),_b.forEach(t),Ry=n(Ms," for more information."),Ms.forEach(t),Qy=p(So),T(Cs.$$.fragment,So),So.forEach(t),Db=p(i),fn=r(i,"H2",{class:!0});var Cp=a(fn);Ns=r(Cp,"A",{id:!0,class:!0,href:!0});var bb=a(Ns);jf=r(bb,"SPAN",{});var kb=a(jf);T(li.$$.fragment,kb),kb.forEach(t),bb.forEach(t),Vy=p(Cp),qf=r(Cp,"SPAN",{});var vb=a(qf);Jy=n(vb,"BertTokenizer"),vb.forEach(t),Cp.forEach(t),Sb=p(i),tt=r(i,"DIV",{class:!0});var wt=a(tt);T(di.$$.fragment,wt),Gy=p(wt),Cf=r(wt,"P",{});var yb=a(Cf);Xy=n(yb,"Construct a BERT tokenizer. Based on WordPiece."),yb.forEach(t),Yy=p(wt),ci=r(wt,"P",{});var Np=a(ci);Zy=n(Np,"This tokenizer inherits from "),Hp=r(Np,"A",{href:!0});var Tb=a(Hp);eT=n(Tb,"PreTrainedTokenizer"),Tb.forEach(t),tT=n(Np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np.forEach(t),oT=p(wt),Ko=r(wt,"DIV",{class:!0});var Ps=a(Ko);T(pi.$$.fragment,Ps),nT=p(Ps),Nf=r(Ps,"P",{});var wb=a(Nf);sT=n(wb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),wb.forEach(t),rT=p(Ps),hi=r(Ps,"UL",{});var Op=a(hi);Kp=r(Op,"LI",{});var Wh=a(Kp);aT=n(Wh,"single sequence: "),Of=r(Wh,"CODE",{});var $b=a(Of);iT=n($b,"[CLS] X [SEP]"),$b.forEach(t),Wh.forEach(t),lT=p(Op),Rp=r(Op,"LI",{});var Hh=a(Rp);dT=n(Hh,"pair of sequences: "),Af=r(Hh,"CODE",{});var xb=a(Af);cT=n(xb,"[CLS] A [SEP] B [SEP]"),xb.forEach(t),Hh.forEach(t),Op.forEach(t),Ps.forEach(t),pT=p(wt),Os=r(wt,"DIV",{class:!0});var Ap=a(Os);T(fi.$$.fragment,Ap),hT=p(Ap),mi=r(Ap,"P",{});var Ip=a(mi);fT=n(Ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),If=r(Ip,"CODE",{});var Fb=a(If);mT=n(Fb,"prepare_for_model"),Fb.forEach(t),uT=n(Ip," method."),Ip.forEach(t),Ap.forEach(t),gT=p(wt),oo=r(wt,"DIV",{class:!0});var Wo=a(oo);T(ui.$$.fragment,Wo),_T=p(Wo),Lf=r(Wo,"P",{});var Bb=a(Lf);bT=n(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),kT=p(Wo),T(As.$$.fragment,Wo),vT=p(Wo),mn=r(Wo,"P",{});var js=a(mn);yT=n(js,"If "),Df=r(js,"CODE",{});var Eb=a(Df);TT=n(Eb,"token_ids_1"),Eb.forEach(t),wT=n(js," is "),Sf=r(js,"CODE",{});var zb=a(Sf);$T=n(zb,"None"),zb.forEach(t),xT=n(js,", this method only returns the first portion of the mask (0s)."),js.forEach(t),Wo.forEach(t),FT=p(wt),Qp=r(wt,"DIV",{class:!0});var Mb=a(Qp);T(gi.$$.fragment,Mb),Mb.forEach(t),wt.forEach(t),Ub=p(i),un=r(i,"H2",{class:!0});var Lp=a(un);Is=r(Lp,"A",{id:!0,class:!0,href:!0});var Pb=a(Is);Uf=r(Pb,"SPAN",{});var jb=a(Uf);T(_i.$$.fragment,jb),jb.forEach(t),Pb.forEach(t),BT=p(Lp),Wf=r(Lp,"SPAN",{});var qb=a(Wf);ET=n(qb,"BertTokenizerFast"),qb.forEach(t),Lp.forEach(t),Wb=p(i),xt=r(i,"DIV",{class:!0});var to=a(xt);T(bi.$$.fragment,to),zT=p(to),ki=r(to,"P",{});var Dp=a(ki);MT=n(Dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Hf=r(Dp,"EM",{});var Cb=a(Hf);PT=n(Cb,"tokenizers"),Cb.forEach(t),jT=n(Dp," library). Based on WordPiece."),Dp.forEach(t),qT=p(to),vi=r(to,"P",{});var Sp=a(vi);CT=n(Sp,"This tokenizer inherits from "),Vp=r(Sp,"A",{href:!0});var Nb=a(Vp);NT=n(Nb,"PreTrainedTokenizerFast"),Nb.forEach(t),OT=n(Sp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sp.forEach(t),AT=p(to),Ro=r(to,"DIV",{class:!0});var qs=a(Ro);T(yi.$$.fragment,qs),IT=p(qs),Kf=r(qs,"P",{});var Ob=a(Kf);LT=n(Ob,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ob.forEach(t),DT=p(qs),Ti=r(qs,"UL",{});var Up=a(Ti);Jp=r(Up,"LI",{});var Kh=a(Jp);ST=n(Kh,"single sequence: "),Rf=r(Kh,"CODE",{});var Ab=a(Rf);UT=n(Ab,"[CLS] X [SEP]"),Ab.forEach(t),Kh.forEach(t),WT=p(Up),Gp=r(Up,"LI",{});var Rh=a(Gp);HT=n(Rh,"pair of sequences: "),Qf=r(Rh,"CODE",{});var Ib=a(Qf);KT=n(Ib,"[CLS] A [SEP] B [SEP]"),Ib.forEach(t),Rh.forEach(t),Up.forEach(t),qs.forEach(t),RT=p(to),no=r(to,"DIV",{class:!0});var Ho=a(no);T(wi.$$.fragment,Ho),QT=p(Ho),Vf=r(Ho,"P",{});var Lb=a(Vf);VT=n(Lb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Lb.forEach(t),JT=p(Ho),T(Ls.$$.fragment,Ho),GT=p(Ho),gn=r(Ho,"P",{});var Qh=a(gn);XT=n(Qh,"If "),Jf=r(Qh,"CODE",{});var u3=a(Jf);YT=n(u3,"token_ids_1"),u3.forEach(t),ZT=n(Qh," is "),Gf=r(Qh,"CODE",{});var g3=a(Gf);ew=n(g3,"None"),g3.forEach(t),tw=n(Qh,", this method only returns the first portion of the mask (0s)."),Qh.forEach(t),Ho.forEach(t),to.forEach(t),Hb=p(i),_n=r(i,"H2",{class:!0});var Xk=a(_n);Ds=r(Xk,"A",{id:!0,class:!0,href:!0});var _3=a(Ds);Xf=r(_3,"SPAN",{});var b3=a(Xf);T($i.$$.fragment,b3),b3.forEach(t),_3.forEach(t),ow=p(Xk),Yf=r(Xk,"SPAN",{});var k3=a(Yf);nw=n(k3,"TFBertTokenizer"),k3.forEach(t),Xk.forEach(t),Kb=p(i),Ft=r(i,"DIV",{class:!0});var Jo=a(Ft);T(xi.$$.fragment,Jo),sw=p(Jo),bn=r(Jo,"P",{});var Vh=a(bn);rw=n(Vh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Zf=r(Vh,"CODE",{});var v3=a(Zf);aw=n(v3,"from_pretrained()"),v3.forEach(t),iw=n(Vh," method. It can also be initialized with the "),em=r(Vh,"CODE",{});var y3=a(em);lw=n(y3,"from_tokenizer()"),y3.forEach(t),dw=n(Vh,` method, which imports settings
from an existing standard tokenizer object.`),Vh.forEach(t),cw=p(Jo),Fi=r(Jo,"P",{});var Yk=a(Fi);pw=n(Yk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),tm=r(Yk,"CODE",{});var T3=a(tm);hw=n(T3,"tf.string"),T3.forEach(t),fw=n(Yk," inputs to outputs."),Yk.forEach(t),mw=p(Jo),Qo=r(Jo,"DIV",{class:!0});var Jh=a(Qo);T(Bi.$$.fragment,Jh),uw=p(Jh),Ei=r(Jh,"P",{});var Zk=a(Ei);gw=n(Zk,"Instantiate a "),om=r(Zk,"CODE",{});var w3=a(om);_w=n(w3,"TFBertTokenizer"),w3.forEach(t),bw=n(Zk," from a pre-trained tokenizer."),Zk.forEach(t),kw=p(Jh),T(Ss.$$.fragment,Jh),Jh.forEach(t),vw=p(Jo),Vo=r(Jo,"DIV",{class:!0});var Gh=a(Vo);T(zi.$$.fragment,Gh),yw=p(Gh),kn=r(Gh,"P",{});var Xh=a(kn);Tw=n(Xh,"Initialize a "),nm=r(Xh,"CODE",{});var $3=a(nm);ww=n($3,"TFBertTokenizer"),$3.forEach(t),$w=n(Xh," from an existing "),sm=r(Xh,"CODE",{});var x3=a(sm);xw=n(x3,"Tokenizer"),x3.forEach(t),Fw=n(Xh,"."),Xh.forEach(t),Bw=p(Gh),T(Us.$$.fragment,Gh),Gh.forEach(t),Jo.forEach(t),Rb=p(i),vn=r(i,"H2",{class:!0});var ev=a(vn);Ws=r(ev,"A",{id:!0,class:!0,href:!0});var F3=a(Ws);rm=r(F3,"SPAN",{});var B3=a(rm);T(Mi.$$.fragment,B3),B3.forEach(t),F3.forEach(t),Ew=p(ev),am=r(ev,"SPAN",{});var E3=a(am);zw=n(E3,"Bert specific outputs"),E3.forEach(t),ev.forEach(t),Qb=p(i),yn=r(i,"DIV",{class:!0});var tv=a(yn);T(Pi.$$.fragment,tv),Mw=p(tv),ji=r(tv,"P",{});var ov=a(ji);Pw=n(ov,"Output type of "),Xp=r(ov,"A",{href:!0});var z3=a(Xp);jw=n(z3,"BertForPreTraining"),z3.forEach(t),qw=n(ov,"."),ov.forEach(t),tv.forEach(t),Vb=p(i),Tn=r(i,"DIV",{class:!0});var nv=a(Tn);T(qi.$$.fragment,nv),Cw=p(nv),Ci=r(nv,"P",{});var sv=a(Ci);Nw=n(sv,"Output type of "),Yp=r(sv,"A",{href:!0});var M3=a(Yp);Ow=n(M3,"TFBertForPreTraining"),M3.forEach(t),Aw=n(sv,"."),sv.forEach(t),nv.forEach(t),Jb=p(i),Po=r(i,"DIV",{class:!0});var Yh=a(Po);T(Ni.$$.fragment,Yh),Iw=p(Yh),Oi=r(Yh,"P",{});var rv=a(Oi);Lw=n(rv,"Output type of "),Zp=r(rv,"A",{href:!0});var P3=a(Zp);Dw=n(P3,"BertForPreTraining"),P3.forEach(t),Sw=n(rv,"."),rv.forEach(t),Uw=p(Yh),Hs=r(Yh,"DIV",{class:!0});var av=a(Hs);T(Ai.$$.fragment,av),Ww=p(av),im=r(av,"P",{});var j3=a(im);Hw=n(j3,"\u201CReturns a new object replacing the specified fields with new values."),j3.forEach(t),av.forEach(t),Yh.forEach(t),Gb=p(i),wn=r(i,"H2",{class:!0});var iv=a(wn);Ks=r(iv,"A",{id:!0,class:!0,href:!0});var q3=a(Ks);lm=r(q3,"SPAN",{});var C3=a(lm);T(Ii.$$.fragment,C3),C3.forEach(t),q3.forEach(t),Kw=p(iv),dm=r(iv,"SPAN",{});var N3=a(dm);Rw=n(N3,"BertModel"),N3.forEach(t),iv.forEach(t),Xb=p(i),ot=r(i,"DIV",{class:!0});var Wt=a(ot);T(Li.$$.fragment,Wt),Qw=p(Wt),cm=r(Wt,"P",{});var O3=a(cm);Vw=n(O3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O3.forEach(t),Jw=p(Wt),Di=r(Wt,"P",{});var lv=a(Di);Gw=n(lv,"This model inherits from "),eh=r(lv,"A",{href:!0});var A3=a(eh);Xw=n(A3,"PreTrainedModel"),A3.forEach(t),Yw=n(lv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lv.forEach(t),Zw=p(Wt),Si=r(Wt,"P",{});var dv=a(Si);e1=n(dv,"This model is also a PyTorch "),Ui=r(dv,"A",{href:!0,rel:!0});var I3=a(Ui);t1=n(I3,"torch.nn.Module"),I3.forEach(t),o1=n(dv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dv.forEach(t),n1=p(Wt),Wi=r(Wt,"P",{});var cv=a(Wi);s1=n(cv,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=r(cv,"A",{href:!0,rel:!0});var L3=a(Hi);r1=n(L3,`Attention is
all you need`),L3.forEach(t),a1=n(cv,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),cv.forEach(t),i1=p(Wt),mt=r(Wt,"P",{});var Ht=a(mt);l1=n(Ht,"To behave as an decoder the model needs to be initialized with the "),pm=r(Ht,"CODE",{});var D3=a(pm);d1=n(D3,"is_decoder"),D3.forEach(t),c1=n(Ht,` argument of the configuration set
to `),hm=r(Ht,"CODE",{});var S3=a(hm);p1=n(S3,"True"),S3.forEach(t),h1=n(Ht,". To be used in a Seq2Seq model, the model needs to initialized with both "),fm=r(Ht,"CODE",{});var U3=a(fm);f1=n(U3,"is_decoder"),U3.forEach(t),m1=n(Ht,` argument and
`),mm=r(Ht,"CODE",{});var W3=a(mm);u1=n(W3,"add_cross_attention"),W3.forEach(t),g1=n(Ht," set to "),um=r(Ht,"CODE",{});var H3=a(um);_1=n(H3,"True"),H3.forEach(t),b1=n(Ht,"; an "),gm=r(Ht,"CODE",{});var K3=a(gm);k1=n(K3,"encoder_hidden_states"),K3.forEach(t),v1=n(Ht," is then expected as an input to the forward pass."),Ht.forEach(t),y1=p(Wt),so=r(Wt,"DIV",{class:!0});var Na=a(so);T(Ki.$$.fragment,Na),T1=p(Na),$n=r(Na,"P",{});var Zh=a($n);w1=n(Zh,"The "),th=r(Zh,"A",{href:!0});var R3=a(th);$1=n(R3,"BertModel"),R3.forEach(t),x1=n(Zh," forward method, overrides the "),_m=r(Zh,"CODE",{});var Q3=a(_m);F1=n(Q3,"__call__"),Q3.forEach(t),B1=n(Zh," special method."),Zh.forEach(t),E1=p(Na),T(Rs.$$.fragment,Na),z1=p(Na),T(Qs.$$.fragment,Na),Na.forEach(t),Wt.forEach(t),Yb=p(i),xn=r(i,"H2",{class:!0});var pv=a(xn);Vs=r(pv,"A",{id:!0,class:!0,href:!0});var V3=a(Vs);bm=r(V3,"SPAN",{});var J3=a(bm);T(Ri.$$.fragment,J3),J3.forEach(t),V3.forEach(t),M1=p(pv),km=r(pv,"SPAN",{});var G3=a(km);P1=n(G3,"BertForPreTraining"),G3.forEach(t),pv.forEach(t),Zb=p(i),Bt=r(i,"DIV",{class:!0});var Go=a(Bt);T(Qi.$$.fragment,Go),j1=p(Go),Fn=r(Go,"P",{});var ef=a(Fn);q1=n(ef,"Bert Model with two heads on top as done during the pretraining: a "),vm=r(ef,"CODE",{});var X3=a(vm);C1=n(X3,"masked language modeling"),X3.forEach(t),N1=n(ef," head and a "),ym=r(ef,"CODE",{});var Y3=a(ym);O1=n(Y3,"next sentence prediction (classification)"),Y3.forEach(t),A1=n(ef," head."),ef.forEach(t),I1=p(Go),Vi=r(Go,"P",{});var hv=a(Vi);L1=n(hv,"This model inherits from "),oh=r(hv,"A",{href:!0});var Z3=a(oh);D1=n(Z3,"PreTrainedModel"),Z3.forEach(t),S1=n(hv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hv.forEach(t),U1=p(Go),Ji=r(Go,"P",{});var fv=a(Ji);W1=n(fv,"This model is also a PyTorch "),Gi=r(fv,"A",{href:!0,rel:!0});var eC=a(Gi);H1=n(eC,"torch.nn.Module"),eC.forEach(t),K1=n(fv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fv.forEach(t),R1=p(Go),ro=r(Go,"DIV",{class:!0});var Oa=a(ro);T(Xi.$$.fragment,Oa),Q1=p(Oa),Bn=r(Oa,"P",{});var tf=a(Bn);V1=n(tf,"The "),nh=r(tf,"A",{href:!0});var tC=a(nh);J1=n(tC,"BertForPreTraining"),tC.forEach(t),G1=n(tf," forward method, overrides the "),Tm=r(tf,"CODE",{});var oC=a(Tm);X1=n(oC,"__call__"),oC.forEach(t),Y1=n(tf," special method."),tf.forEach(t),Z1=p(Oa),T(Js.$$.fragment,Oa),e$=p(Oa),T(Gs.$$.fragment,Oa),Oa.forEach(t),Go.forEach(t),ek=p(i),En=r(i,"H2",{class:!0});var mv=a(En);Xs=r(mv,"A",{id:!0,class:!0,href:!0});var nC=a(Xs);wm=r(nC,"SPAN",{});var sC=a(wm);T(Yi.$$.fragment,sC),sC.forEach(t),nC.forEach(t),t$=p(mv),$m=r(mv,"SPAN",{});var rC=a($m);o$=n(rC,"BertLMHeadModel"),rC.forEach(t),mv.forEach(t),tk=p(i),Et=r(i,"DIV",{class:!0});var Xo=a(Et);T(Zi.$$.fragment,Xo),n$=p(Xo),el=r(Xo,"P",{});var uv=a(el);s$=n(uv,"Bert Model with a "),xm=r(uv,"CODE",{});var aC=a(xm);r$=n(aC,"language modeling"),aC.forEach(t),a$=n(uv," head on top for CLM fine-tuning."),uv.forEach(t),i$=p(Xo),tl=r(Xo,"P",{});var gv=a(tl);l$=n(gv,"This model inherits from "),sh=r(gv,"A",{href:!0});var iC=a(sh);d$=n(iC,"PreTrainedModel"),iC.forEach(t),c$=n(gv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gv.forEach(t),p$=p(Xo),ol=r(Xo,"P",{});var _v=a(ol);h$=n(_v,"This model is also a PyTorch "),nl=r(_v,"A",{href:!0,rel:!0});var lC=a(nl);f$=n(lC,"torch.nn.Module"),lC.forEach(t),m$=n(_v,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_v.forEach(t),u$=p(Xo),ao=r(Xo,"DIV",{class:!0});var Aa=a(ao);T(sl.$$.fragment,Aa),g$=p(Aa),zn=r(Aa,"P",{});var of=a(zn);_$=n(of,"The "),rh=r(of,"A",{href:!0});var dC=a(rh);b$=n(dC,"BertLMHeadModel"),dC.forEach(t),k$=n(of," forward method, overrides the "),Fm=r(of,"CODE",{});var cC=a(Fm);v$=n(cC,"__call__"),cC.forEach(t),y$=n(of," special method."),of.forEach(t),T$=p(Aa),T(Ys.$$.fragment,Aa),w$=p(Aa),T(Zs.$$.fragment,Aa),Aa.forEach(t),Xo.forEach(t),ok=p(i),Mn=r(i,"H2",{class:!0});var bv=a(Mn);er=r(bv,"A",{id:!0,class:!0,href:!0});var pC=a(er);Bm=r(pC,"SPAN",{});var hC=a(Bm);T(rl.$$.fragment,hC),hC.forEach(t),pC.forEach(t),$$=p(bv),Em=r(bv,"SPAN",{});var fC=a(Em);x$=n(fC,"BertForMaskedLM"),fC.forEach(t),bv.forEach(t),nk=p(i),zt=r(i,"DIV",{class:!0});var Yo=a(zt);T(al.$$.fragment,Yo),F$=p(Yo),il=r(Yo,"P",{});var kv=a(il);B$=n(kv,"Bert Model with a "),zm=r(kv,"CODE",{});var mC=a(zm);E$=n(mC,"language modeling"),mC.forEach(t),z$=n(kv," head on top."),kv.forEach(t),M$=p(Yo),ll=r(Yo,"P",{});var vv=a(ll);P$=n(vv,"This model inherits from "),ah=r(vv,"A",{href:!0});var uC=a(ah);j$=n(uC,"PreTrainedModel"),uC.forEach(t),q$=n(vv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vv.forEach(t),C$=p(Yo),dl=r(Yo,"P",{});var yv=a(dl);N$=n(yv,"This model is also a PyTorch "),cl=r(yv,"A",{href:!0,rel:!0});var gC=a(cl);O$=n(gC,"torch.nn.Module"),gC.forEach(t),A$=n(yv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yv.forEach(t),I$=p(Yo),Nt=r(Yo,"DIV",{class:!0});var Zo=a(Nt);T(pl.$$.fragment,Zo),L$=p(Zo),Pn=r(Zo,"P",{});var nf=a(Pn);D$=n(nf,"The "),ih=r(nf,"A",{href:!0});var _C=a(ih);S$=n(_C,"BertForMaskedLM"),_C.forEach(t),U$=n(nf," forward method, overrides the "),Mm=r(nf,"CODE",{});var bC=a(Mm);W$=n(bC,"__call__"),bC.forEach(t),H$=n(nf," special method."),nf.forEach(t),K$=p(Zo),T(tr.$$.fragment,Zo),R$=p(Zo),T(or.$$.fragment,Zo),Q$=p(Zo),T(nr.$$.fragment,Zo),Zo.forEach(t),Yo.forEach(t),sk=p(i),jn=r(i,"H2",{class:!0});var Tv=a(jn);sr=r(Tv,"A",{id:!0,class:!0,href:!0});var kC=a(sr);Pm=r(kC,"SPAN",{});var vC=a(Pm);T(hl.$$.fragment,vC),vC.forEach(t),kC.forEach(t),V$=p(Tv),jm=r(Tv,"SPAN",{});var yC=a(jm);J$=n(yC,"BertForNextSentencePrediction"),yC.forEach(t),Tv.forEach(t),rk=p(i),Mt=r(i,"DIV",{class:!0});var en=a(Mt);T(fl.$$.fragment,en),G$=p(en),ml=r(en,"P",{});var wv=a(ml);X$=n(wv,"Bert Model with a "),qm=r(wv,"CODE",{});var TC=a(qm);Y$=n(TC,"next sentence prediction (classification)"),TC.forEach(t),Z$=n(wv," head on top."),wv.forEach(t),e2=p(en),ul=r(en,"P",{});var $v=a(ul);t2=n($v,"This model inherits from "),lh=r($v,"A",{href:!0});var wC=a(lh);o2=n(wC,"PreTrainedModel"),wC.forEach(t),n2=n($v,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$v.forEach(t),s2=p(en),gl=r(en,"P",{});var xv=a(gl);r2=n(xv,"This model is also a PyTorch "),_l=r(xv,"A",{href:!0,rel:!0});var $C=a(_l);a2=n($C,"torch.nn.Module"),$C.forEach(t),i2=n(xv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xv.forEach(t),l2=p(en),io=r(en,"DIV",{class:!0});var Ia=a(io);T(bl.$$.fragment,Ia),d2=p(Ia),qn=r(Ia,"P",{});var sf=a(qn);c2=n(sf,"The "),dh=r(sf,"A",{href:!0});var xC=a(dh);p2=n(xC,"BertForNextSentencePrediction"),xC.forEach(t),h2=n(sf," forward method, overrides the "),Cm=r(sf,"CODE",{});var FC=a(Cm);f2=n(FC,"__call__"),FC.forEach(t),m2=n(sf," special method."),sf.forEach(t),u2=p(Ia),T(rr.$$.fragment,Ia),g2=p(Ia),T(ar.$$.fragment,Ia),Ia.forEach(t),en.forEach(t),ak=p(i),Cn=r(i,"H2",{class:!0});var Fv=a(Cn);ir=r(Fv,"A",{id:!0,class:!0,href:!0});var BC=a(ir);Nm=r(BC,"SPAN",{});var EC=a(Nm);T(kl.$$.fragment,EC),EC.forEach(t),BC.forEach(t),_2=p(Fv),Om=r(Fv,"SPAN",{});var zC=a(Om);b2=n(zC,"BertForSequenceClassification"),zC.forEach(t),Fv.forEach(t),ik=p(i),Pt=r(i,"DIV",{class:!0});var tn=a(Pt);T(vl.$$.fragment,tn),k2=p(tn),Am=r(tn,"P",{});var MC=a(Am);v2=n(MC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),MC.forEach(t),y2=p(tn),yl=r(tn,"P",{});var Bv=a(yl);T2=n(Bv,"This model inherits from "),ch=r(Bv,"A",{href:!0});var PC=a(ch);w2=n(PC,"PreTrainedModel"),PC.forEach(t),$2=n(Bv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bv.forEach(t),x2=p(tn),Tl=r(tn,"P",{});var Ev=a(Tl);F2=n(Ev,"This model is also a PyTorch "),wl=r(Ev,"A",{href:!0,rel:!0});var jC=a(wl);B2=n(jC,"torch.nn.Module"),jC.forEach(t),E2=n(Ev,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ev.forEach(t),z2=p(tn),ft=r(tn,"DIV",{class:!0});var Kt=a(ft);T($l.$$.fragment,Kt),M2=p(Kt),Nn=r(Kt,"P",{});var rf=a(Nn);P2=n(rf,"The "),ph=r(rf,"A",{href:!0});var qC=a(ph);j2=n(qC,"BertForSequenceClassification"),qC.forEach(t),q2=n(rf," forward method, overrides the "),Im=r(rf,"CODE",{});var CC=a(Im);C2=n(CC,"__call__"),CC.forEach(t),N2=n(rf," special method."),rf.forEach(t),O2=p(Kt),T(lr.$$.fragment,Kt),A2=p(Kt),T(dr.$$.fragment,Kt),I2=p(Kt),T(cr.$$.fragment,Kt),L2=p(Kt),T(pr.$$.fragment,Kt),D2=p(Kt),T(hr.$$.fragment,Kt),Kt.forEach(t),tn.forEach(t),lk=p(i),On=r(i,"H2",{class:!0});var zv=a(On);fr=r(zv,"A",{id:!0,class:!0,href:!0});var NC=a(fr);Lm=r(NC,"SPAN",{});var OC=a(Lm);T(xl.$$.fragment,OC),OC.forEach(t),NC.forEach(t),S2=p(zv),Dm=r(zv,"SPAN",{});var AC=a(Dm);U2=n(AC,"BertForMultipleChoice"),AC.forEach(t),zv.forEach(t),dk=p(i),jt=r(i,"DIV",{class:!0});var on=a(jt);T(Fl.$$.fragment,on),W2=p(on),Sm=r(on,"P",{});var IC=a(Sm);H2=n(IC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),IC.forEach(t),K2=p(on),Bl=r(on,"P",{});var Mv=a(Bl);R2=n(Mv,"This model inherits from "),hh=r(Mv,"A",{href:!0});var LC=a(hh);Q2=n(LC,"PreTrainedModel"),LC.forEach(t),V2=n(Mv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Mv.forEach(t),J2=p(on),El=r(on,"P",{});var Pv=a(El);G2=n(Pv,"This model is also a PyTorch "),zl=r(Pv,"A",{href:!0,rel:!0});var DC=a(zl);X2=n(DC,"torch.nn.Module"),DC.forEach(t),Y2=n(Pv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Pv.forEach(t),Z2=p(on),lo=r(on,"DIV",{class:!0});var La=a(lo);T(Ml.$$.fragment,La),e0=p(La),An=r(La,"P",{});var af=a(An);t0=n(af,"The "),fh=r(af,"A",{href:!0});var SC=a(fh);o0=n(SC,"BertForMultipleChoice"),SC.forEach(t),n0=n(af," forward method, overrides the "),Um=r(af,"CODE",{});var UC=a(Um);s0=n(UC,"__call__"),UC.forEach(t),r0=n(af," special method."),af.forEach(t),a0=p(La),T(mr.$$.fragment,La),i0=p(La),T(ur.$$.fragment,La),La.forEach(t),on.forEach(t),ck=p(i),In=r(i,"H2",{class:!0});var jv=a(In);gr=r(jv,"A",{id:!0,class:!0,href:!0});var WC=a(gr);Wm=r(WC,"SPAN",{});var HC=a(Wm);T(Pl.$$.fragment,HC),HC.forEach(t),WC.forEach(t),l0=p(jv),Hm=r(jv,"SPAN",{});var KC=a(Hm);d0=n(KC,"BertForTokenClassification"),KC.forEach(t),jv.forEach(t),pk=p(i),qt=r(i,"DIV",{class:!0});var nn=a(qt);T(jl.$$.fragment,nn),c0=p(nn),Km=r(nn,"P",{});var RC=a(Km);p0=n(RC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RC.forEach(t),h0=p(nn),ql=r(nn,"P",{});var qv=a(ql);f0=n(qv,"This model inherits from "),mh=r(qv,"A",{href:!0});var QC=a(mh);m0=n(QC,"PreTrainedModel"),QC.forEach(t),u0=n(qv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qv.forEach(t),g0=p(nn),Cl=r(nn,"P",{});var Cv=a(Cl);_0=n(Cv,"This model is also a PyTorch "),Nl=r(Cv,"A",{href:!0,rel:!0});var VC=a(Nl);b0=n(VC,"torch.nn.Module"),VC.forEach(t),k0=n(Cv,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cv.forEach(t),v0=p(nn),Ot=r(nn,"DIV",{class:!0});var sn=a(Ot);T(Ol.$$.fragment,sn),y0=p(sn),Ln=r(sn,"P",{});var lf=a(Ln);T0=n(lf,"The "),uh=r(lf,"A",{href:!0});var JC=a(uh);w0=n(JC,"BertForTokenClassification"),JC.forEach(t),$0=n(lf," forward method, overrides the "),Rm=r(lf,"CODE",{});var GC=a(Rm);x0=n(GC,"__call__"),GC.forEach(t),F0=n(lf," special method."),lf.forEach(t),B0=p(sn),T(_r.$$.fragment,sn),E0=p(sn),T(br.$$.fragment,sn),z0=p(sn),T(kr.$$.fragment,sn),sn.forEach(t),nn.forEach(t),hk=p(i),Dn=r(i,"H2",{class:!0});var Nv=a(Dn);vr=r(Nv,"A",{id:!0,class:!0,href:!0});var XC=a(vr);Qm=r(XC,"SPAN",{});var YC=a(Qm);T(Al.$$.fragment,YC),YC.forEach(t),XC.forEach(t),M0=p(Nv),Vm=r(Nv,"SPAN",{});var ZC=a(Vm);P0=n(ZC,"BertForQuestionAnswering"),ZC.forEach(t),Nv.forEach(t),fk=p(i),Ct=r(i,"DIV",{class:!0});var rn=a(Ct);T(Il.$$.fragment,rn),j0=p(rn),Sn=r(rn,"P",{});var df=a(Sn);q0=n(df,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jm=r(df,"CODE",{});var e5=a(Jm);C0=n(e5,"span start logits"),e5.forEach(t),N0=n(df," and "),Gm=r(df,"CODE",{});var t5=a(Gm);O0=n(t5,"span end logits"),t5.forEach(t),A0=n(df,")."),df.forEach(t),I0=p(rn),Ll=r(rn,"P",{});var Ov=a(Ll);L0=n(Ov,"This model inherits from "),gh=r(Ov,"A",{href:!0});var o5=a(gh);D0=n(o5,"PreTrainedModel"),o5.forEach(t),S0=n(Ov,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ov.forEach(t),U0=p(rn),Dl=r(rn,"P",{});var Av=a(Dl);W0=n(Av,"This model is also a PyTorch "),Sl=r(Av,"A",{href:!0,rel:!0});var n5=a(Sl);H0=n(n5,"torch.nn.Module"),n5.forEach(t),K0=n(Av,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Av.forEach(t),R0=p(rn),At=r(rn,"DIV",{class:!0});var an=a(At);T(Ul.$$.fragment,an),Q0=p(an),Un=r(an,"P",{});var cf=a(Un);V0=n(cf,"The "),_h=r(cf,"A",{href:!0});var s5=a(_h);J0=n(s5,"BertForQuestionAnswering"),s5.forEach(t),G0=n(cf," forward method, overrides the "),Xm=r(cf,"CODE",{});var r5=a(Xm);X0=n(r5,"__call__"),r5.forEach(t),Y0=n(cf," special method."),cf.forEach(t),Z0=p(an),T(yr.$$.fragment,an),e4=p(an),T(Tr.$$.fragment,an),t4=p(an),T(wr.$$.fragment,an),an.forEach(t),rn.forEach(t),mk=p(i),Wn=r(i,"H2",{class:!0});var Iv=a(Wn);$r=r(Iv,"A",{id:!0,class:!0,href:!0});var a5=a($r);Ym=r(a5,"SPAN",{});var i5=a(Ym);T(Wl.$$.fragment,i5),i5.forEach(t),a5.forEach(t),o4=p(Iv),Zm=r(Iv,"SPAN",{});var l5=a(Zm);n4=n(l5,"TFBertModel"),l5.forEach(t),Iv.forEach(t),uk=p(i),ut=r(i,"DIV",{class:!0});var wo=a(ut);T(Hl.$$.fragment,wo),s4=p(wo),eu=r(wo,"P",{});var d5=a(eu);r4=n(d5,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d5.forEach(t),a4=p(wo),Kl=r(wo,"P",{});var Lv=a(Kl);i4=n(Lv,"This model inherits from "),bh=r(Lv,"A",{href:!0});var c5=a(bh);l4=n(c5,"TFPreTrainedModel"),c5.forEach(t),d4=n(Lv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lv.forEach(t),c4=p(wo),Rl=r(wo,"P",{});var Dv=a(Rl);p4=n(Dv,"This model is also a "),Ql=r(Dv,"A",{href:!0,rel:!0});var p5=a(Ql);h4=n(p5,"tf.keras.Model"),p5.forEach(t),f4=n(Dv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dv.forEach(t),m4=p(wo),T(xr.$$.fragment,wo),u4=p(wo),co=r(wo,"DIV",{class:!0});var Da=a(co);T(Vl.$$.fragment,Da),g4=p(Da),Hn=r(Da,"P",{});var pf=a(Hn);_4=n(pf,"The "),kh=r(pf,"A",{href:!0});var h5=a(kh);b4=n(h5,"TFBertModel"),h5.forEach(t),k4=n(pf," forward method, overrides the "),tu=r(pf,"CODE",{});var f5=a(tu);v4=n(f5,"__call__"),f5.forEach(t),y4=n(pf," special method."),pf.forEach(t),T4=p(Da),T(Fr.$$.fragment,Da),w4=p(Da),T(Br.$$.fragment,Da),Da.forEach(t),wo.forEach(t),gk=p(i),Kn=r(i,"H2",{class:!0});var Sv=a(Kn);Er=r(Sv,"A",{id:!0,class:!0,href:!0});var m5=a(Er);ou=r(m5,"SPAN",{});var u5=a(ou);T(Jl.$$.fragment,u5),u5.forEach(t),m5.forEach(t),$4=p(Sv),nu=r(Sv,"SPAN",{});var g5=a(nu);x4=n(g5,"TFBertForPreTraining"),g5.forEach(t),Sv.forEach(t),_k=p(i),gt=r(i,"DIV",{class:!0});var $o=a(gt);T(Gl.$$.fragment,$o),F4=p($o),Rn=r($o,"P",{});var hf=a(Rn);B4=n(hf,`Bert Model with two heads on top as done during the pretraining:
a `),su=r(hf,"CODE",{});var _5=a(su);E4=n(_5,"masked language modeling"),_5.forEach(t),z4=n(hf," head and a "),ru=r(hf,"CODE",{});var b5=a(ru);M4=n(b5,"next sentence prediction (classification)"),b5.forEach(t),P4=n(hf," head."),hf.forEach(t),j4=p($o),Xl=r($o,"P",{});var Uv=a(Xl);q4=n(Uv,"This model inherits from "),vh=r(Uv,"A",{href:!0});var k5=a(vh);C4=n(k5,"TFPreTrainedModel"),k5.forEach(t),N4=n(Uv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uv.forEach(t),O4=p($o),Yl=r($o,"P",{});var Wv=a(Yl);A4=n(Wv,"This model is also a "),Zl=r(Wv,"A",{href:!0,rel:!0});var v5=a(Zl);I4=n(v5,"tf.keras.Model"),v5.forEach(t),L4=n(Wv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wv.forEach(t),D4=p($o),T(zr.$$.fragment,$o),S4=p($o),po=r($o,"DIV",{class:!0});var Sa=a(po);T(ed.$$.fragment,Sa),U4=p(Sa),Qn=r(Sa,"P",{});var ff=a(Qn);W4=n(ff,"The "),yh=r(ff,"A",{href:!0});var y5=a(yh);H4=n(y5,"TFBertForPreTraining"),y5.forEach(t),K4=n(ff," forward method, overrides the "),au=r(ff,"CODE",{});var T5=a(au);R4=n(T5,"__call__"),T5.forEach(t),Q4=n(ff," special method."),ff.forEach(t),V4=p(Sa),T(Mr.$$.fragment,Sa),J4=p(Sa),T(Pr.$$.fragment,Sa),Sa.forEach(t),$o.forEach(t),bk=p(i),Vn=r(i,"H2",{class:!0});var Hv=a(Vn);jr=r(Hv,"A",{id:!0,class:!0,href:!0});var w5=a(jr);iu=r(w5,"SPAN",{});var $5=a(iu);T(td.$$.fragment,$5),$5.forEach(t),w5.forEach(t),G4=p(Hv),lu=r(Hv,"SPAN",{});var x5=a(lu);X4=n(x5,"TFBertModelLMHeadModel"),x5.forEach(t),Hv.forEach(t),kk=p(i),Jn=r(i,"DIV",{class:!0});var Kv=a(Jn);T(od.$$.fragment,Kv),Y4=p(Kv),It=r(Kv,"DIV",{class:!0});var ln=a(It);T(nd.$$.fragment,ln),Z4=p(ln),nt=r(ln,"P",{});var $t=a(nt);ex=n($t,"encoder_hidden_states  ("),du=r($t,"CODE",{});var F5=a(du);tx=n(F5,"tf.Tensor"),F5.forEach(t),ox=n($t," of shape "),cu=r($t,"CODE",{});var B5=a(cu);nx=n(B5,"(batch_size, sequence_length, hidden_size)"),B5.forEach(t),sx=n($t,", "),pu=r($t,"EM",{});var E5=a(pu);rx=n(E5,"optional"),E5.forEach(t),ax=n($t,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=r($t,"CODE",{});var z5=a(hu);ix=n(z5,"tf.Tensor"),z5.forEach(t),lx=n($t," of shape "),fu=r($t,"CODE",{});var M5=a(fu);dx=n(M5,"(batch_size, sequence_length)"),M5.forEach(t),cx=n($t,", "),mu=r($t,"EM",{});var P5=a(mu);px=n(P5,"optional"),P5.forEach(t),hx=n($t,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=r($t,"CODE",{});var j5=a(uu);fx=n(j5,"[0, 1]"),j5.forEach(t),mx=n($t,":"),$t.forEach(t),ux=p(ln),sd=r(ln,"UL",{});var Rv=a(sd);rd=r(Rv,"LI",{});var Qv=a(rd);gx=n(Qv,"1 for tokens that are "),gu=r(Qv,"STRONG",{});var q5=a(gu);_x=n(q5,"not masked"),q5.forEach(t),bx=n(Qv,","),Qv.forEach(t),kx=p(Rv),ad=r(Rv,"LI",{});var Vv=a(ad);vx=n(Vv,"0 for tokens that are "),_u=r(Vv,"STRONG",{});var C5=a(_u);yx=n(C5,"masked"),C5.forEach(t),Tx=n(Vv,"."),Vv.forEach(t),Rv.forEach(t),wx=p(ln),te=r(ln,"P",{});var re=a(te);$x=n(re,"past_key_values ("),bu=r(re,"CODE",{});var N5=a(bu);xx=n(N5,"Tuple[Tuple[tf.Tensor]]"),N5.forEach(t),Fx=n(re," of length "),ku=r(re,"CODE",{});var O5=a(ku);Bx=n(O5,"config.n_layers"),O5.forEach(t),Ex=n(re,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),vu=r(re,"CODE",{});var A5=a(vu);zx=n(A5,"past_key_values"),A5.forEach(t),Mx=n(re," are used, the user can optionally input only the last "),yu=r(re,"CODE",{});var I5=a(yu);Px=n(I5,"decoder_input_ids"),I5.forEach(t),jx=n(re,` (those that
don\u2019t have their past key value states given to this model) of shape `),Tu=r(re,"CODE",{});var L5=a(Tu);qx=n(L5,"(batch_size, 1)"),L5.forEach(t),Cx=n(re,` instead of all
`),wu=r(re,"CODE",{});var D5=a(wu);Nx=n(D5,"decoder_input_ids"),D5.forEach(t),Ox=n(re," of shape "),$u=r(re,"CODE",{});var S5=a($u);Ax=n(S5,"(batch_size, sequence_length)"),S5.forEach(t),Ix=n(re,`.
use_cache (`),xu=r(re,"CODE",{});var U5=a(xu);Lx=n(U5,"bool"),U5.forEach(t),Dx=n(re,", "),Fu=r(re,"EM",{});var W5=a(Fu);Sx=n(W5,"optional"),W5.forEach(t),Ux=n(re,", defaults to "),Bu=r(re,"CODE",{});var H5=a(Bu);Wx=n(H5,"True"),H5.forEach(t),Hx=n(re,`):
If set to `),Eu=r(re,"CODE",{});var K5=a(Eu);Kx=n(K5,"True"),K5.forEach(t),Rx=n(re,", "),zu=r(re,"CODE",{});var R5=a(zu);Qx=n(R5,"past_key_values"),R5.forEach(t),Vx=n(re,` key value states are returned and can be used to speed up decoding (see
`),Mu=r(re,"CODE",{});var Q5=a(Mu);Jx=n(Q5,"past_key_values"),Q5.forEach(t),Gx=n(re,"). Set to "),Pu=r(re,"CODE",{});var V5=a(Pu);Xx=n(V5,"False"),V5.forEach(t),Yx=n(re," during training, "),ju=r(re,"CODE",{});var J5=a(ju);Zx=n(J5,"True"),J5.forEach(t),eF=n(re,` during generation
labels (`),qu=r(re,"CODE",{});var G5=a(qu);tF=n(G5,"tf.Tensor"),G5.forEach(t),oF=n(re," or "),Cu=r(re,"CODE",{});var X5=a(Cu);nF=n(X5,"np.ndarray"),X5.forEach(t),sF=n(re," of shape "),Nu=r(re,"CODE",{});var Y5=a(Nu);rF=n(Y5,"(batch_size, sequence_length)"),Y5.forEach(t),aF=n(re,", "),Ou=r(re,"EM",{});var Z5=a(Ou);iF=n(Z5,"optional"),Z5.forEach(t),lF=n(re,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=r(re,"CODE",{});var e6=a(Au);dF=n(e6,"[0, ..., config.vocab_size - 1]"),e6.forEach(t),cF=n(re,"."),re.forEach(t),pF=p(ln),T(qr.$$.fragment,ln),ln.forEach(t),Kv.forEach(t),vk=p(i),Gn=r(i,"H2",{class:!0});var Jv=a(Gn);Cr=r(Jv,"A",{id:!0,class:!0,href:!0});var t6=a(Cr);Iu=r(t6,"SPAN",{});var o6=a(Iu);T(id.$$.fragment,o6),o6.forEach(t),t6.forEach(t),hF=p(Jv),Lu=r(Jv,"SPAN",{});var n6=a(Lu);fF=n(n6,"TFBertForMaskedLM"),n6.forEach(t),Jv.forEach(t),yk=p(i),_t=r(i,"DIV",{class:!0});var xo=a(_t);T(ld.$$.fragment,xo),mF=p(xo),dd=r(xo,"P",{});var Gv=a(dd);uF=n(Gv,"Bert Model with a "),Du=r(Gv,"CODE",{});var s6=a(Du);gF=n(s6,"language modeling"),s6.forEach(t),_F=n(Gv," head on top."),Gv.forEach(t),bF=p(xo),cd=r(xo,"P",{});var Xv=a(cd);kF=n(Xv,"This model inherits from "),Th=r(Xv,"A",{href:!0});var r6=a(Th);vF=n(r6,"TFPreTrainedModel"),r6.forEach(t),yF=n(Xv,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xv.forEach(t),TF=p(xo),pd=r(xo,"P",{});var Yv=a(pd);wF=n(Yv,"This model is also a "),hd=r(Yv,"A",{href:!0,rel:!0});var a6=a(hd);$F=n(a6,"tf.keras.Model"),a6.forEach(t),xF=n(Yv,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yv.forEach(t),FF=p(xo),T(Nr.$$.fragment,xo),BF=p(xo),Lt=r(xo,"DIV",{class:!0});var dn=a(Lt);T(fd.$$.fragment,dn),EF=p(dn),Xn=r(dn,"P",{});var mf=a(Xn);zF=n(mf,"The "),wh=r(mf,"A",{href:!0});var i6=a(wh);MF=n(i6,"TFBertForMaskedLM"),i6.forEach(t),PF=n(mf," forward method, overrides the "),Su=r(mf,"CODE",{});var l6=a(Su);jF=n(l6,"__call__"),l6.forEach(t),qF=n(mf," special method."),mf.forEach(t),CF=p(dn),T(Or.$$.fragment,dn),NF=p(dn),T(Ar.$$.fragment,dn),OF=p(dn),T(Ir.$$.fragment,dn),dn.forEach(t),xo.forEach(t),Tk=p(i),Yn=r(i,"H2",{class:!0});var Zv=a(Yn);Lr=r(Zv,"A",{id:!0,class:!0,href:!0});var d6=a(Lr);Uu=r(d6,"SPAN",{});var c6=a(Uu);T(md.$$.fragment,c6),c6.forEach(t),d6.forEach(t),AF=p(Zv),Wu=r(Zv,"SPAN",{});var p6=a(Wu);IF=n(p6,"TFBertForNextSentencePrediction"),p6.forEach(t),Zv.forEach(t),wk=p(i),bt=r(i,"DIV",{class:!0});var Fo=a(bt);T(ud.$$.fragment,Fo),LF=p(Fo),gd=r(Fo,"P",{});var ey=a(gd);DF=n(ey,"Bert Model with a "),Hu=r(ey,"CODE",{});var h6=a(Hu);SF=n(h6,"next sentence prediction (classification)"),h6.forEach(t),UF=n(ey," head on top."),ey.forEach(t),WF=p(Fo),_d=r(Fo,"P",{});var ty=a(_d);HF=n(ty,"This model inherits from "),$h=r(ty,"A",{href:!0});var f6=a($h);KF=n(f6,"TFPreTrainedModel"),f6.forEach(t),RF=n(ty,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ty.forEach(t),QF=p(Fo),bd=r(Fo,"P",{});var oy=a(bd);VF=n(oy,"This model is also a "),kd=r(oy,"A",{href:!0,rel:!0});var m6=a(kd);JF=n(m6,"tf.keras.Model"),m6.forEach(t),GF=n(oy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oy.forEach(t),XF=p(Fo),T(Dr.$$.fragment,Fo),YF=p(Fo),ho=r(Fo,"DIV",{class:!0});var Ua=a(ho);T(vd.$$.fragment,Ua),ZF=p(Ua),Zn=r(Ua,"P",{});var uf=a(Zn);eB=n(uf,"The "),xh=r(uf,"A",{href:!0});var u6=a(xh);tB=n(u6,"TFBertForNextSentencePrediction"),u6.forEach(t),oB=n(uf," forward method, overrides the "),Ku=r(uf,"CODE",{});var g6=a(Ku);nB=n(g6,"__call__"),g6.forEach(t),sB=n(uf," special method."),uf.forEach(t),rB=p(Ua),T(Sr.$$.fragment,Ua),aB=p(Ua),T(Ur.$$.fragment,Ua),Ua.forEach(t),Fo.forEach(t),$k=p(i),es=r(i,"H2",{class:!0});var ny=a(es);Wr=r(ny,"A",{id:!0,class:!0,href:!0});var _6=a(Wr);Ru=r(_6,"SPAN",{});var b6=a(Ru);T(yd.$$.fragment,b6),b6.forEach(t),_6.forEach(t),iB=p(ny),Qu=r(ny,"SPAN",{});var k6=a(Qu);lB=n(k6,"TFBertForSequenceClassification"),k6.forEach(t),ny.forEach(t),xk=p(i),kt=r(i,"DIV",{class:!0});var Bo=a(kt);T(Td.$$.fragment,Bo),dB=p(Bo),Vu=r(Bo,"P",{});var v6=a(Vu);cB=n(v6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),v6.forEach(t),pB=p(Bo),wd=r(Bo,"P",{});var sy=a(wd);hB=n(sy,"This model inherits from "),Fh=r(sy,"A",{href:!0});var y6=a(Fh);fB=n(y6,"TFPreTrainedModel"),y6.forEach(t),mB=n(sy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sy.forEach(t),uB=p(Bo),$d=r(Bo,"P",{});var ry=a($d);gB=n(ry,"This model is also a "),xd=r(ry,"A",{href:!0,rel:!0});var T6=a(xd);_B=n(T6,"tf.keras.Model"),T6.forEach(t),bB=n(ry,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ry.forEach(t),kB=p(Bo),T(Hr.$$.fragment,Bo),vB=p(Bo),Dt=r(Bo,"DIV",{class:!0});var cn=a(Dt);T(Fd.$$.fragment,cn),yB=p(cn),ts=r(cn,"P",{});var gf=a(ts);TB=n(gf,"The "),Bh=r(gf,"A",{href:!0});var w6=a(Bh);wB=n(w6,"TFBertForSequenceClassification"),w6.forEach(t),$B=n(gf," forward method, overrides the "),Ju=r(gf,"CODE",{});var $6=a(Ju);xB=n($6,"__call__"),$6.forEach(t),FB=n(gf," special method."),gf.forEach(t),BB=p(cn),T(Kr.$$.fragment,cn),EB=p(cn),T(Rr.$$.fragment,cn),zB=p(cn),T(Qr.$$.fragment,cn),cn.forEach(t),Bo.forEach(t),Fk=p(i),os=r(i,"H2",{class:!0});var ay=a(os);Vr=r(ay,"A",{id:!0,class:!0,href:!0});var x6=a(Vr);Gu=r(x6,"SPAN",{});var F6=a(Gu);T(Bd.$$.fragment,F6),F6.forEach(t),x6.forEach(t),MB=p(ay),Xu=r(ay,"SPAN",{});var B6=a(Xu);PB=n(B6,"TFBertForMultipleChoice"),B6.forEach(t),ay.forEach(t),Bk=p(i),vt=r(i,"DIV",{class:!0});var Eo=a(vt);T(Ed.$$.fragment,Eo),jB=p(Eo),Yu=r(Eo,"P",{});var E6=a(Yu);qB=n(E6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E6.forEach(t),CB=p(Eo),zd=r(Eo,"P",{});var iy=a(zd);NB=n(iy,"This model inherits from "),Eh=r(iy,"A",{href:!0});var z6=a(Eh);OB=n(z6,"TFPreTrainedModel"),z6.forEach(t),AB=n(iy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iy.forEach(t),IB=p(Eo),Md=r(Eo,"P",{});var ly=a(Md);LB=n(ly,"This model is also a "),Pd=r(ly,"A",{href:!0,rel:!0});var M6=a(Pd);DB=n(M6,"tf.keras.Model"),M6.forEach(t),SB=n(ly,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ly.forEach(t),UB=p(Eo),T(Jr.$$.fragment,Eo),WB=p(Eo),fo=r(Eo,"DIV",{class:!0});var Wa=a(fo);T(jd.$$.fragment,Wa),HB=p(Wa),ns=r(Wa,"P",{});var _f=a(ns);KB=n(_f,"The "),zh=r(_f,"A",{href:!0});var P6=a(zh);RB=n(P6,"TFBertForMultipleChoice"),P6.forEach(t),QB=n(_f," forward method, overrides the "),Zu=r(_f,"CODE",{});var j6=a(Zu);VB=n(j6,"__call__"),j6.forEach(t),JB=n(_f," special method."),_f.forEach(t),GB=p(Wa),T(Gr.$$.fragment,Wa),XB=p(Wa),T(Xr.$$.fragment,Wa),Wa.forEach(t),Eo.forEach(t),Ek=p(i),ss=r(i,"H2",{class:!0});var dy=a(ss);Yr=r(dy,"A",{id:!0,class:!0,href:!0});var q6=a(Yr);eg=r(q6,"SPAN",{});var C6=a(eg);T(qd.$$.fragment,C6),C6.forEach(t),q6.forEach(t),YB=p(dy),tg=r(dy,"SPAN",{});var N6=a(tg);ZB=n(N6,"TFBertForTokenClassification"),N6.forEach(t),dy.forEach(t),zk=p(i),yt=r(i,"DIV",{class:!0});var zo=a(yt);T(Cd.$$.fragment,zo),eE=p(zo),og=r(zo,"P",{});var O6=a(og);tE=n(O6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O6.forEach(t),oE=p(zo),Nd=r(zo,"P",{});var cy=a(Nd);nE=n(cy,"This model inherits from "),Mh=r(cy,"A",{href:!0});var A6=a(Mh);sE=n(A6,"TFPreTrainedModel"),A6.forEach(t),rE=n(cy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cy.forEach(t),aE=p(zo),Od=r(zo,"P",{});var py=a(Od);iE=n(py,"This model is also a "),Ad=r(py,"A",{href:!0,rel:!0});var I6=a(Ad);lE=n(I6,"tf.keras.Model"),I6.forEach(t),dE=n(py,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),py.forEach(t),cE=p(zo),T(Zr.$$.fragment,zo),pE=p(zo),St=r(zo,"DIV",{class:!0});var pn=a(St);T(Id.$$.fragment,pn),hE=p(pn),rs=r(pn,"P",{});var bf=a(rs);fE=n(bf,"The "),Ph=r(bf,"A",{href:!0});var L6=a(Ph);mE=n(L6,"TFBertForTokenClassification"),L6.forEach(t),uE=n(bf," forward method, overrides the "),ng=r(bf,"CODE",{});var D6=a(ng);gE=n(D6,"__call__"),D6.forEach(t),_E=n(bf," special method."),bf.forEach(t),bE=p(pn),T(ea.$$.fragment,pn),kE=p(pn),T(ta.$$.fragment,pn),vE=p(pn),T(oa.$$.fragment,pn),pn.forEach(t),zo.forEach(t),Mk=p(i),as=r(i,"H2",{class:!0});var hy=a(as);na=r(hy,"A",{id:!0,class:!0,href:!0});var S6=a(na);sg=r(S6,"SPAN",{});var U6=a(sg);T(Ld.$$.fragment,U6),U6.forEach(t),S6.forEach(t),yE=p(hy),rg=r(hy,"SPAN",{});var W6=a(rg);TE=n(W6,"TFBertForQuestionAnswering"),W6.forEach(t),hy.forEach(t),Pk=p(i),Tt=r(i,"DIV",{class:!0});var Mo=a(Tt);T(Dd.$$.fragment,Mo),wE=p(Mo),is=r(Mo,"P",{});var kf=a(is);$E=n(kf,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=r(kf,"CODE",{});var H6=a(ag);xE=n(H6,"span start logits"),H6.forEach(t),FE=n(kf," and "),ig=r(kf,"CODE",{});var K6=a(ig);BE=n(K6,"span end logits"),K6.forEach(t),EE=n(kf,")."),kf.forEach(t),zE=p(Mo),Sd=r(Mo,"P",{});var fy=a(Sd);ME=n(fy,"This model inherits from "),jh=r(fy,"A",{href:!0});var R6=a(jh);PE=n(R6,"TFPreTrainedModel"),R6.forEach(t),jE=n(fy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fy.forEach(t),qE=p(Mo),Ud=r(Mo,"P",{});var my=a(Ud);CE=n(my,"This model is also a "),Wd=r(my,"A",{href:!0,rel:!0});var Q6=a(Wd);NE=n(Q6,"tf.keras.Model"),Q6.forEach(t),OE=n(my,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),my.forEach(t),AE=p(Mo),T(sa.$$.fragment,Mo),IE=p(Mo),Ut=r(Mo,"DIV",{class:!0});var hn=a(Ut);T(Hd.$$.fragment,hn),LE=p(hn),ls=r(hn,"P",{});var vf=a(ls);DE=n(vf,"The "),qh=r(vf,"A",{href:!0});var V6=a(qh);SE=n(V6,"TFBertForQuestionAnswering"),V6.forEach(t),UE=n(vf," forward method, overrides the "),lg=r(vf,"CODE",{});var J6=a(lg);WE=n(J6,"__call__"),J6.forEach(t),HE=n(vf," special method."),vf.forEach(t),KE=p(hn),T(ra.$$.fragment,hn),RE=p(hn),T(aa.$$.fragment,hn),QE=p(hn),T(ia.$$.fragment,hn),hn.forEach(t),Mo.forEach(t),jk=p(i),ds=r(i,"H2",{class:!0});var uy=a(ds);la=r(uy,"A",{id:!0,class:!0,href:!0});var G6=a(la);dg=r(G6,"SPAN",{});var X6=a(dg);T(Kd.$$.fragment,X6),X6.forEach(t),G6.forEach(t),VE=p(uy),cg=r(uy,"SPAN",{});var Y6=a(cg);JE=n(Y6,"FlaxBertModel"),Y6.forEach(t),uy.forEach(t),qk=p(i),st=r(i,"DIV",{class:!0});var Rt=a(st);T(Rd.$$.fragment,Rt),GE=p(Rt),pg=r(Rt,"P",{});var Z6=a(pg);XE=n(Z6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z6.forEach(t),YE=p(Rt),Qd=r(Rt,"P",{});var gy=a(Qd);ZE=n(gy,"This model inherits from "),Ch=r(gy,"A",{href:!0});var eN=a(Ch);ez=n(eN,"FlaxPreTrainedModel"),eN.forEach(t),tz=n(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gy.forEach(t),oz=p(Rt),Vd=r(Rt,"P",{});var _y=a(Vd);nz=n(_y,"This model is also a Flax Linen "),Jd=r(_y,"A",{href:!0,rel:!0});var tN=a(Jd);sz=n(tN,"flax.linen.Module"),tN.forEach(t),rz=n(_y,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_y.forEach(t),az=p(Rt),hg=r(Rt,"P",{});var oN=a(hg);iz=n(oN,"Finally, this model supports inherent JAX features such as:"),oN.forEach(t),lz=p(Rt),jo=r(Rt,"UL",{});var Ha=a(jo);fg=r(Ha,"LI",{});var nN=a(fg);Gd=r(nN,"A",{href:!0,rel:!0});var sN=a(Gd);dz=n(sN,"Just-In-Time (JIT) compilation"),sN.forEach(t),nN.forEach(t),cz=p(Ha),mg=r(Ha,"LI",{});var rN=a(mg);Xd=r(rN,"A",{href:!0,rel:!0});var aN=a(Xd);pz=n(aN,"Automatic Differentiation"),aN.forEach(t),rN.forEach(t),hz=p(Ha),ug=r(Ha,"LI",{});var iN=a(ug);Yd=r(iN,"A",{href:!0,rel:!0});var lN=a(Yd);fz=n(lN,"Vectorization"),lN.forEach(t),iN.forEach(t),mz=p(Ha),gg=r(Ha,"LI",{});var dN=a(gg);Zd=r(dN,"A",{href:!0,rel:!0});var cN=a(Zd);uz=n(cN,"Parallelization"),cN.forEach(t),dN.forEach(t),Ha.forEach(t),gz=p(Rt),mo=r(Rt,"DIV",{class:!0});var Ka=a(mo);T(ec.$$.fragment,Ka),_z=p(Ka),cs=r(Ka,"P",{});var yf=a(cs);bz=n(yf,"The "),_g=r(yf,"CODE",{});var pN=a(_g);kz=n(pN,"FlaxBertPreTrainedModel"),pN.forEach(t),vz=n(yf," forward method, overrides the "),bg=r(yf,"CODE",{});var hN=a(bg);yz=n(hN,"__call__"),hN.forEach(t),Tz=n(yf," special method."),yf.forEach(t),wz=p(Ka),T(da.$$.fragment,Ka),$z=p(Ka),T(ca.$$.fragment,Ka),Ka.forEach(t),Rt.forEach(t),Ck=p(i),ps=r(i,"H2",{class:!0});var by=a(ps);pa=r(by,"A",{id:!0,class:!0,href:!0});var fN=a(pa);kg=r(fN,"SPAN",{});var mN=a(kg);T(tc.$$.fragment,mN),mN.forEach(t),fN.forEach(t),xz=p(by),vg=r(by,"SPAN",{});var uN=a(vg);Fz=n(uN,"FlaxBertForPreTraining"),uN.forEach(t),by.forEach(t),Nk=p(i),rt=r(i,"DIV",{class:!0});var Qt=a(rt);T(oc.$$.fragment,Qt),Bz=p(Qt),hs=r(Qt,"P",{});var Tf=a(hs);Ez=n(Tf,"Bert Model with two heads on top as done during the pretraining: a "),yg=r(Tf,"CODE",{});var gN=a(yg);zz=n(gN,"masked language modeling"),gN.forEach(t),Mz=n(Tf," head and a "),Tg=r(Tf,"CODE",{});var _N=a(Tg);Pz=n(_N,"next sentence prediction (classification)"),_N.forEach(t),jz=n(Tf," head."),Tf.forEach(t),qz=p(Qt),nc=r(Qt,"P",{});var ky=a(nc);Cz=n(ky,"This model inherits from "),Nh=r(ky,"A",{href:!0});var bN=a(Nh);Nz=n(bN,"FlaxPreTrainedModel"),bN.forEach(t),Oz=n(ky,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),ky.forEach(t),Az=p(Qt),sc=r(Qt,"P",{});var vy=a(sc);Iz=n(vy,"This model is also a Flax Linen "),rc=r(vy,"A",{href:!0,rel:!0});var kN=a(rc);Lz=n(kN,"flax.linen.Module"),kN.forEach(t),Dz=n(vy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),vy.forEach(t),Sz=p(Qt),wg=r(Qt,"P",{});var vN=a(wg);Uz=n(vN,"Finally, this model supports inherent JAX features such as:"),vN.forEach(t),Wz=p(Qt),qo=r(Qt,"UL",{});var Ra=a(qo);$g=r(Ra,"LI",{});var yN=a($g);ac=r(yN,"A",{href:!0,rel:!0});var TN=a(ac);Hz=n(TN,"Just-In-Time (JIT) compilation"),TN.forEach(t),yN.forEach(t),Kz=p(Ra),xg=r(Ra,"LI",{});var wN=a(xg);ic=r(wN,"A",{href:!0,rel:!0});var $N=a(ic);Rz=n($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),Qz=p(Ra),Fg=r(Ra,"LI",{});var xN=a(Fg);lc=r(xN,"A",{href:!0,rel:!0});var FN=a(lc);Vz=n(FN,"Vectorization"),FN.forEach(t),xN.forEach(t),Jz=p(Ra),Bg=r(Ra,"LI",{});var BN=a(Bg);dc=r(BN,"A",{href:!0,rel:!0});var EN=a(dc);Gz=n(EN,"Parallelization"),EN.forEach(t),BN.forEach(t),Ra.forEach(t),Xz=p(Qt),uo=r(Qt,"DIV",{class:!0});var Qa=a(uo);T(cc.$$.fragment,Qa),Yz=p(Qa),fs=r(Qa,"P",{});var wf=a(fs);Zz=n(wf,"The "),Eg=r(wf,"CODE",{});var zN=a(Eg);eM=n(zN,"FlaxBertPreTrainedModel"),zN.forEach(t),tM=n(wf," forward method, overrides the "),zg=r(wf,"CODE",{});var MN=a(zg);oM=n(MN,"__call__"),MN.forEach(t),nM=n(wf," special method."),wf.forEach(t),sM=p(Qa),T(ha.$$.fragment,Qa),rM=p(Qa),T(fa.$$.fragment,Qa),Qa.forEach(t),Qt.forEach(t),Ok=p(i),ms=r(i,"H2",{class:!0});var yy=a(ms);ma=r(yy,"A",{id:!0,class:!0,href:!0});var PN=a(ma);Mg=r(PN,"SPAN",{});var jN=a(Mg);T(pc.$$.fragment,jN),jN.forEach(t),PN.forEach(t),aM=p(yy),Pg=r(yy,"SPAN",{});var qN=a(Pg);iM=n(qN,"FlaxBertForCausalLM"),qN.forEach(t),yy.forEach(t),Ak=p(i),at=r(i,"DIV",{class:!0});var Vt=a(at);T(hc.$$.fragment,Vt),lM=p(Vt),jg=r(Vt,"P",{});var CN=a(jg);dM=n(CN,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CN.forEach(t),cM=p(Vt),fc=r(Vt,"P",{});var Ty=a(fc);pM=n(Ty,"This model inherits from "),Oh=r(Ty,"A",{href:!0});var NN=a(Oh);hM=n(NN,"FlaxPreTrainedModel"),NN.forEach(t),fM=n(Ty,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ty.forEach(t),mM=p(Vt),mc=r(Vt,"P",{});var wy=a(mc);uM=n(wy,"This model is also a Flax Linen "),uc=r(wy,"A",{href:!0,rel:!0});var ON=a(uc);gM=n(ON,"flax.linen.Module"),ON.forEach(t),_M=n(wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wy.forEach(t),bM=p(Vt),qg=r(Vt,"P",{});var AN=a(qg);kM=n(AN,"Finally, this model supports inherent JAX features such as:"),AN.forEach(t),vM=p(Vt),Co=r(Vt,"UL",{});var Va=a(Co);Cg=r(Va,"LI",{});var IN=a(Cg);gc=r(IN,"A",{href:!0,rel:!0});var LN=a(gc);yM=n(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),IN.forEach(t),TM=p(Va),Ng=r(Va,"LI",{});var DN=a(Ng);_c=r(DN,"A",{href:!0,rel:!0});var SN=a(_c);wM=n(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),$M=p(Va),Og=r(Va,"LI",{});var UN=a(Og);bc=r(UN,"A",{href:!0,rel:!0});var WN=a(bc);xM=n(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),FM=p(Va),Ag=r(Va,"LI",{});var HN=a(Ag);kc=r(HN,"A",{href:!0,rel:!0});var KN=a(kc);BM=n(KN,"Parallelization"),KN.forEach(t),HN.forEach(t),Va.forEach(t),EM=p(Vt),go=r(Vt,"DIV",{class:!0});var Ja=a(go);T(vc.$$.fragment,Ja),zM=p(Ja),us=r(Ja,"P",{});var $f=a(us);MM=n($f,"The "),Ig=r($f,"CODE",{});var RN=a(Ig);PM=n(RN,"FlaxBertPreTrainedModel"),RN.forEach(t),jM=n($f," forward method, overrides the "),Lg=r($f,"CODE",{});var QN=a(Lg);qM=n(QN,"__call__"),QN.forEach(t),CM=n($f," special method."),$f.forEach(t),NM=p(Ja),T(ua.$$.fragment,Ja),OM=p(Ja),T(ga.$$.fragment,Ja),Ja.forEach(t),Vt.forEach(t),Ik=p(i),gs=r(i,"H2",{class:!0});var $y=a(gs);_a=r($y,"A",{id:!0,class:!0,href:!0});var VN=a(_a);Dg=r(VN,"SPAN",{});var JN=a(Dg);T(yc.$$.fragment,JN),JN.forEach(t),VN.forEach(t),AM=p($y),Sg=r($y,"SPAN",{});var GN=a(Sg);IM=n(GN,"FlaxBertForMaskedLM"),GN.forEach(t),$y.forEach(t),Lk=p(i),it=r(i,"DIV",{class:!0});var Jt=a(it);T(Tc.$$.fragment,Jt),LM=p(Jt),wc=r(Jt,"P",{});var xy=a(wc);DM=n(xy,"Bert Model with a "),Ug=r(xy,"CODE",{});var XN=a(Ug);SM=n(XN,"language modeling"),XN.forEach(t),UM=n(xy," head on top."),xy.forEach(t),WM=p(Jt),$c=r(Jt,"P",{});var Fy=a($c);HM=n(Fy,"This model inherits from "),Ah=r(Fy,"A",{href:!0});var YN=a(Ah);KM=n(YN,"FlaxPreTrainedModel"),YN.forEach(t),RM=n(Fy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Fy.forEach(t),QM=p(Jt),xc=r(Jt,"P",{});var By=a(xc);VM=n(By,"This model is also a Flax Linen "),Fc=r(By,"A",{href:!0,rel:!0});var ZN=a(Fc);JM=n(ZN,"flax.linen.Module"),ZN.forEach(t),GM=n(By,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),By.forEach(t),XM=p(Jt),Wg=r(Jt,"P",{});var e8=a(Wg);YM=n(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),ZM=p(Jt),No=r(Jt,"UL",{});var Ga=a(No);Hg=r(Ga,"LI",{});var t8=a(Hg);Bc=r(t8,"A",{href:!0,rel:!0});var o8=a(Bc);eP=n(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),tP=p(Ga),Kg=r(Ga,"LI",{});var n8=a(Kg);Ec=r(n8,"A",{href:!0,rel:!0});var s8=a(Ec);oP=n(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),nP=p(Ga),Rg=r(Ga,"LI",{});var r8=a(Rg);zc=r(r8,"A",{href:!0,rel:!0});var a8=a(zc);sP=n(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),rP=p(Ga),Qg=r(Ga,"LI",{});var i8=a(Qg);Mc=r(i8,"A",{href:!0,rel:!0});var l8=a(Mc);aP=n(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),Ga.forEach(t),iP=p(Jt),_o=r(Jt,"DIV",{class:!0});var Xa=a(_o);T(Pc.$$.fragment,Xa),lP=p(Xa),_s=r(Xa,"P",{});var xf=a(_s);dP=n(xf,"The "),Vg=r(xf,"CODE",{});var d8=a(Vg);cP=n(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),pP=n(xf," forward method, overrides the "),Jg=r(xf,"CODE",{});var c8=a(Jg);hP=n(c8,"__call__"),c8.forEach(t),fP=n(xf," special method."),xf.forEach(t),mP=p(Xa),T(ba.$$.fragment,Xa),uP=p(Xa),T(ka.$$.fragment,Xa),Xa.forEach(t),Jt.forEach(t),Dk=p(i),bs=r(i,"H2",{class:!0});var Ey=a(bs);va=r(Ey,"A",{id:!0,class:!0,href:!0});var p8=a(va);Gg=r(p8,"SPAN",{});var h8=a(Gg);T(jc.$$.fragment,h8),h8.forEach(t),p8.forEach(t),gP=p(Ey),Xg=r(Ey,"SPAN",{});var f8=a(Xg);_P=n(f8,"FlaxBertForNextSentencePrediction"),f8.forEach(t),Ey.forEach(t),Sk=p(i),lt=r(i,"DIV",{class:!0});var Gt=a(lt);T(qc.$$.fragment,Gt),bP=p(Gt),Cc=r(Gt,"P",{});var zy=a(Cc);kP=n(zy,"Bert Model with a "),Yg=r(zy,"CODE",{});var m8=a(Yg);vP=n(m8,"next sentence prediction (classification)"),m8.forEach(t),yP=n(zy," head on top."),zy.forEach(t),TP=p(Gt),Nc=r(Gt,"P",{});var My=a(Nc);wP=n(My,"This model inherits from "),Ih=r(My,"A",{href:!0});var u8=a(Ih);$P=n(u8,"FlaxPreTrainedModel"),u8.forEach(t),xP=n(My,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),My.forEach(t),FP=p(Gt),Oc=r(Gt,"P",{});var Py=a(Oc);BP=n(Py,"This model is also a Flax Linen "),Ac=r(Py,"A",{href:!0,rel:!0});var g8=a(Ac);EP=n(g8,"flax.linen.Module"),g8.forEach(t),zP=n(Py,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Py.forEach(t),MP=p(Gt),Zg=r(Gt,"P",{});var _8=a(Zg);PP=n(_8,"Finally, this model supports inherent JAX features such as:"),_8.forEach(t),jP=p(Gt),Oo=r(Gt,"UL",{});var Ya=a(Oo);e_=r(Ya,"LI",{});var b8=a(e_);Ic=r(b8,"A",{href:!0,rel:!0});var k8=a(Ic);qP=n(k8,"Just-In-Time (JIT) compilation"),k8.forEach(t),b8.forEach(t),CP=p(Ya),t_=r(Ya,"LI",{});var v8=a(t_);Lc=r(v8,"A",{href:!0,rel:!0});var y8=a(Lc);NP=n(y8,"Automatic Differentiation"),y8.forEach(t),v8.forEach(t),OP=p(Ya),o_=r(Ya,"LI",{});var T8=a(o_);Dc=r(T8,"A",{href:!0,rel:!0});var w8=a(Dc);AP=n(w8,"Vectorization"),w8.forEach(t),T8.forEach(t),IP=p(Ya),n_=r(Ya,"LI",{});var $8=a(n_);Sc=r($8,"A",{href:!0,rel:!0});var x8=a(Sc);LP=n(x8,"Parallelization"),x8.forEach(t),$8.forEach(t),Ya.forEach(t),DP=p(Gt),bo=r(Gt,"DIV",{class:!0});var Za=a(bo);T(Uc.$$.fragment,Za),SP=p(Za),ks=r(Za,"P",{});var Ff=a(ks);UP=n(Ff,"The "),s_=r(Ff,"CODE",{});var F8=a(s_);WP=n(F8,"FlaxBertPreTrainedModel"),F8.forEach(t),HP=n(Ff," forward method, overrides the "),r_=r(Ff,"CODE",{});var B8=a(r_);KP=n(B8,"__call__"),B8.forEach(t),RP=n(Ff," special method."),Ff.forEach(t),QP=p(Za),T(ya.$$.fragment,Za),VP=p(Za),T(Ta.$$.fragment,Za),Za.forEach(t),Gt.forEach(t),Uk=p(i),vs=r(i,"H2",{class:!0});var jy=a(vs);wa=r(jy,"A",{id:!0,class:!0,href:!0});var E8=a(wa);a_=r(E8,"SPAN",{});var z8=a(a_);T(Wc.$$.fragment,z8),z8.forEach(t),E8.forEach(t),JP=p(jy),i_=r(jy,"SPAN",{});var M8=a(i_);GP=n(M8,"FlaxBertForSequenceClassification"),M8.forEach(t),jy.forEach(t),Wk=p(i),dt=r(i,"DIV",{class:!0});var Xt=a(dt);T(Hc.$$.fragment,Xt),XP=p(Xt),l_=r(Xt,"P",{});var P8=a(l_);YP=n(P8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P8.forEach(t),ZP=p(Xt),Kc=r(Xt,"P",{});var qy=a(Kc);ej=n(qy,"This model inherits from "),Lh=r(qy,"A",{href:!0});var j8=a(Lh);tj=n(j8,"FlaxPreTrainedModel"),j8.forEach(t),oj=n(qy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qy.forEach(t),nj=p(Xt),Rc=r(Xt,"P",{});var Cy=a(Rc);sj=n(Cy,"This model is also a Flax Linen "),Qc=r(Cy,"A",{href:!0,rel:!0});var q8=a(Qc);rj=n(q8,"flax.linen.Module"),q8.forEach(t),aj=n(Cy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Cy.forEach(t),ij=p(Xt),d_=r(Xt,"P",{});var C8=a(d_);lj=n(C8,"Finally, this model supports inherent JAX features such as:"),C8.forEach(t),dj=p(Xt),Ao=r(Xt,"UL",{});var ei=a(Ao);c_=r(ei,"LI",{});var N8=a(c_);Vc=r(N8,"A",{href:!0,rel:!0});var O8=a(Vc);cj=n(O8,"Just-In-Time (JIT) compilation"),O8.forEach(t),N8.forEach(t),pj=p(ei),p_=r(ei,"LI",{});var A8=a(p_);Jc=r(A8,"A",{href:!0,rel:!0});var I8=a(Jc);hj=n(I8,"Automatic Differentiation"),I8.forEach(t),A8.forEach(t),fj=p(ei),h_=r(ei,"LI",{});var L8=a(h_);Gc=r(L8,"A",{href:!0,rel:!0});var D8=a(Gc);mj=n(D8,"Vectorization"),D8.forEach(t),L8.forEach(t),uj=p(ei),f_=r(ei,"LI",{});var S8=a(f_);Xc=r(S8,"A",{href:!0,rel:!0});var U8=a(Xc);gj=n(U8,"Parallelization"),U8.forEach(t),S8.forEach(t),ei.forEach(t),_j=p(Xt),ko=r(Xt,"DIV",{class:!0});var ti=a(ko);T(Yc.$$.fragment,ti),bj=p(ti),ys=r(ti,"P",{});var Bf=a(ys);kj=n(Bf,"The "),m_=r(Bf,"CODE",{});var W8=a(m_);vj=n(W8,"FlaxBertPreTrainedModel"),W8.forEach(t),yj=n(Bf," forward method, overrides the "),u_=r(Bf,"CODE",{});var H8=a(u_);Tj=n(H8,"__call__"),H8.forEach(t),wj=n(Bf," special method."),Bf.forEach(t),$j=p(ti),T($a.$$.fragment,ti),xj=p(ti),T(xa.$$.fragment,ti),ti.forEach(t),Xt.forEach(t),Hk=p(i),Ts=r(i,"H2",{class:!0});var Ny=a(Ts);Fa=r(Ny,"A",{id:!0,class:!0,href:!0});var K8=a(Fa);g_=r(K8,"SPAN",{});var R8=a(g_);T(Zc.$$.fragment,R8),R8.forEach(t),K8.forEach(t),Fj=p(Ny),__=r(Ny,"SPAN",{});var Q8=a(__);Bj=n(Q8,"FlaxBertForMultipleChoice"),Q8.forEach(t),Ny.forEach(t),Kk=p(i),ct=r(i,"DIV",{class:!0});var Yt=a(ct);T(ep.$$.fragment,Yt),Ej=p(Yt),b_=r(Yt,"P",{});var V8=a(b_);zj=n(V8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),V8.forEach(t),Mj=p(Yt),tp=r(Yt,"P",{});var Oy=a(tp);Pj=n(Oy,"This model inherits from "),Dh=r(Oy,"A",{href:!0});var J8=a(Dh);jj=n(J8,"FlaxPreTrainedModel"),J8.forEach(t),qj=n(Oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Oy.forEach(t),Cj=p(Yt),op=r(Yt,"P",{});var Ay=a(op);Nj=n(Ay,"This model is also a Flax Linen "),np=r(Ay,"A",{href:!0,rel:!0});var G8=a(np);Oj=n(G8,"flax.linen.Module"),G8.forEach(t),Aj=n(Ay,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ay.forEach(t),Ij=p(Yt),k_=r(Yt,"P",{});var X8=a(k_);Lj=n(X8,"Finally, this model supports inherent JAX features such as:"),X8.forEach(t),Dj=p(Yt),Io=r(Yt,"UL",{});var oi=a(Io);v_=r(oi,"LI",{});var Y8=a(v_);sp=r(Y8,"A",{href:!0,rel:!0});var Z8=a(sp);Sj=n(Z8,"Just-In-Time (JIT) compilation"),Z8.forEach(t),Y8.forEach(t),Uj=p(oi),y_=r(oi,"LI",{});var e7=a(y_);rp=r(e7,"A",{href:!0,rel:!0});var t7=a(rp);Wj=n(t7,"Automatic Differentiation"),t7.forEach(t),e7.forEach(t),Hj=p(oi),T_=r(oi,"LI",{});var o7=a(T_);ap=r(o7,"A",{href:!0,rel:!0});var n7=a(ap);Kj=n(n7,"Vectorization"),n7.forEach(t),o7.forEach(t),Rj=p(oi),w_=r(oi,"LI",{});var s7=a(w_);ip=r(s7,"A",{href:!0,rel:!0});var r7=a(ip);Qj=n(r7,"Parallelization"),r7.forEach(t),s7.forEach(t),oi.forEach(t),Vj=p(Yt),vo=r(Yt,"DIV",{class:!0});var ni=a(vo);T(lp.$$.fragment,ni),Jj=p(ni),ws=r(ni,"P",{});var Ef=a(ws);Gj=n(Ef,"The "),$_=r(Ef,"CODE",{});var a7=a($_);Xj=n(a7,"FlaxBertPreTrainedModel"),a7.forEach(t),Yj=n(Ef," forward method, overrides the "),x_=r(Ef,"CODE",{});var i7=a(x_);Zj=n(i7,"__call__"),i7.forEach(t),eq=n(Ef," special method."),Ef.forEach(t),tq=p(ni),T(Ba.$$.fragment,ni),oq=p(ni),T(Ea.$$.fragment,ni),ni.forEach(t),Yt.forEach(t),Rk=p(i),$s=r(i,"H2",{class:!0});var Iy=a($s);za=r(Iy,"A",{id:!0,class:!0,href:!0});var l7=a(za);F_=r(l7,"SPAN",{});var d7=a(F_);T(dp.$$.fragment,d7),d7.forEach(t),l7.forEach(t),nq=p(Iy),B_=r(Iy,"SPAN",{});var c7=a(B_);sq=n(c7,"FlaxBertForTokenClassification"),c7.forEach(t),Iy.forEach(t),Qk=p(i),pt=r(i,"DIV",{class:!0});var Zt=a(pt);T(cp.$$.fragment,Zt),rq=p(Zt),E_=r(Zt,"P",{});var p7=a(E_);aq=n(p7,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p7.forEach(t),iq=p(Zt),pp=r(Zt,"P",{});var Ly=a(pp);lq=n(Ly,"This model inherits from "),Sh=r(Ly,"A",{href:!0});var h7=a(Sh);dq=n(h7,"FlaxPreTrainedModel"),h7.forEach(t),cq=n(Ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Ly.forEach(t),pq=p(Zt),hp=r(Zt,"P",{});var Dy=a(hp);hq=n(Dy,"This model is also a Flax Linen "),fp=r(Dy,"A",{href:!0,rel:!0});var f7=a(fp);fq=n(f7,"flax.linen.Module"),f7.forEach(t),mq=n(Dy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Dy.forEach(t),uq=p(Zt),z_=r(Zt,"P",{});var m7=a(z_);gq=n(m7,"Finally, this model supports inherent JAX features such as:"),m7.forEach(t),_q=p(Zt),Lo=r(Zt,"UL",{});var si=a(Lo);M_=r(si,"LI",{});var u7=a(M_);mp=r(u7,"A",{href:!0,rel:!0});var g7=a(mp);bq=n(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),kq=p(si),P_=r(si,"LI",{});var _7=a(P_);up=r(_7,"A",{href:!0,rel:!0});var b7=a(up);vq=n(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),yq=p(si),j_=r(si,"LI",{});var k7=a(j_);gp=r(k7,"A",{href:!0,rel:!0});var v7=a(gp);Tq=n(v7,"Vectorization"),v7.forEach(t),k7.forEach(t),wq=p(si),q_=r(si,"LI",{});var y7=a(q_);_p=r(y7,"A",{href:!0,rel:!0});var T7=a(_p);$q=n(T7,"Parallelization"),T7.forEach(t),y7.forEach(t),si.forEach(t),xq=p(Zt),yo=r(Zt,"DIV",{class:!0});var ri=a(yo);T(bp.$$.fragment,ri),Fq=p(ri),xs=r(ri,"P",{});var zf=a(xs);Bq=n(zf,"The "),C_=r(zf,"CODE",{});var w7=a(C_);Eq=n(w7,"FlaxBertPreTrainedModel"),w7.forEach(t),zq=n(zf," forward method, overrides the "),N_=r(zf,"CODE",{});var $7=a(N_);Mq=n($7,"__call__"),$7.forEach(t),Pq=n(zf," special method."),zf.forEach(t),jq=p(ri),T(Ma.$$.fragment,ri),qq=p(ri),T(Pa.$$.fragment,ri),ri.forEach(t),Zt.forEach(t),Vk=p(i),Fs=r(i,"H2",{class:!0});var Sy=a(Fs);ja=r(Sy,"A",{id:!0,class:!0,href:!0});var x7=a(ja);O_=r(x7,"SPAN",{});var F7=a(O_);T(kp.$$.fragment,F7),F7.forEach(t),x7.forEach(t),Cq=p(Sy),A_=r(Sy,"SPAN",{});var B7=a(A_);Nq=n(B7,"FlaxBertForQuestionAnswering"),B7.forEach(t),Sy.forEach(t),Jk=p(i),ht=r(i,"DIV",{class:!0});var eo=a(ht);T(vp.$$.fragment,eo),Oq=p(eo),Bs=r(eo,"P",{});var Mf=a(Bs);Aq=n(Mf,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=r(Mf,"CODE",{});var E7=a(I_);Iq=n(E7,"span start logits"),E7.forEach(t),Lq=n(Mf," and "),L_=r(Mf,"CODE",{});var z7=a(L_);Dq=n(z7,"span end logits"),z7.forEach(t),Sq=n(Mf,")."),Mf.forEach(t),Uq=p(eo),yp=r(eo,"P",{});var Uy=a(yp);Wq=n(Uy,"This model inherits from "),Uh=r(Uy,"A",{href:!0});var M7=a(Uh);Hq=n(M7,"FlaxPreTrainedModel"),M7.forEach(t),Kq=n(Uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Uy.forEach(t),Rq=p(eo),Tp=r(eo,"P",{});var Wy=a(Tp);Qq=n(Wy,"This model is also a Flax Linen "),wp=r(Wy,"A",{href:!0,rel:!0});var P7=a(wp);Vq=n(P7,"flax.linen.Module"),P7.forEach(t),Jq=n(Wy,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Wy.forEach(t),Gq=p(eo),D_=r(eo,"P",{});var j7=a(D_);Xq=n(j7,"Finally, this model supports inherent JAX features such as:"),j7.forEach(t),Yq=p(eo),Do=r(eo,"UL",{});var ai=a(Do);S_=r(ai,"LI",{});var q7=a(S_);$p=r(q7,"A",{href:!0,rel:!0});var C7=a($p);Zq=n(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),q7.forEach(t),e3=p(ai),U_=r(ai,"LI",{});var N7=a(U_);xp=r(N7,"A",{href:!0,rel:!0});var O7=a(xp);t3=n(O7,"Automatic Differentiation"),O7.forEach(t),N7.forEach(t),o3=p(ai),W_=r(ai,"LI",{});var A7=a(W_);Fp=r(A7,"A",{href:!0,rel:!0});var I7=a(Fp);n3=n(I7,"Vectorization"),I7.forEach(t),A7.forEach(t),s3=p(ai),H_=r(ai,"LI",{});var L7=a(H_);Bp=r(L7,"A",{href:!0,rel:!0});var D7=a(Bp);r3=n(D7,"Parallelization"),D7.forEach(t),L7.forEach(t),ai.forEach(t),a3=p(eo),To=r(eo,"DIV",{class:!0});var ii=a(To);T(Ep.$$.fragment,ii),i3=p(ii),Es=r(ii,"P",{});var Pf=a(Es);l3=n(Pf,"The "),K_=r(Pf,"CODE",{});var S7=a(K_);d3=n(S7,"FlaxBertPreTrainedModel"),S7.forEach(t),c3=n(Pf," forward method, overrides the "),R_=r(Pf,"CODE",{});var U7=a(R_);p3=n(U7,"__call__"),U7.forEach(t),h3=n(Pf," special method."),Pf.forEach(t),f3=p(ii),T(qa.$$.fragment,ii),m3=p(ii),T(Ca.$$.fragment,ii),ii.forEach(t),eo.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_A)),u(m,"id","bert"),u(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(m,"href","#bert"),u(f,"class","relative group"),u(pe,"id","overview"),u(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pe,"href","#overview"),u(S,"class","relative group"),u(fe,"href","https://arxiv.org/abs/1810.04805"),u(fe,"rel","nofollow"),u(me,"href","https://huggingface.co/thomwolf"),u(me,"rel","nofollow"),u(W,"href","https://github.com/google-research/bert"),u(W,"rel","nofollow"),u(O,"id","transformers.BertConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.BertConfig"),u(de,"class","relative group"),u(Ke,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertModel"),u(I,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertModel"),u(He,"href","https://huggingface.co/bert-base-uncased"),u(He,"rel","nofollow"),u(Z,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(Wp,"href","/docs/transformers/v4.24.0/en/main_classes/configuration#transformers.PretrainedConfig"),u(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.BertTokenizer"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.BertTokenizer"),u(fn,"class","relative group"),u(Hp,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertTokenizerFast"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertTokenizerFast"),u(un,"class","relative group"),u(Vp,"href","/docs/transformers/v4.24.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFBertTokenizer"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFBertTokenizer"),u(_n,"class","relative group"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(vn,"class","relative group"),u(Xp,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForPreTraining"),u(yn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yp,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForPreTraining"),u(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zp,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForPreTraining"),u(Hs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.BertModel"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.BertModel"),u(wn,"class","relative group"),u(eh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Hi,"href","https://arxiv.org/abs/1706.03762"),u(Hi,"rel","nofollow"),u(th,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertModel"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.BertForPreTraining"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.BertForPreTraining"),u(xn,"class","relative group"),u(oh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Gi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gi,"rel","nofollow"),u(nh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForPreTraining"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.BertLMHeadModel"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.BertLMHeadModel"),u(En,"class","relative group"),u(sh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nl,"rel","nofollow"),u(rh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertLMHeadModel"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.BertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.BertForMaskedLM"),u(Mn,"class","relative group"),u(ah,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(ih,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForMaskedLM"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.BertForNextSentencePrediction"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.BertForNextSentencePrediction"),u(jn,"class","relative group"),u(lh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(_l,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_l,"rel","nofollow"),u(dh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.BertForSequenceClassification"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.BertForSequenceClassification"),u(Cn,"class","relative group"),u(ch,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(wl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wl,"rel","nofollow"),u(ph,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForSequenceClassification"),u(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fr,"id","transformers.BertForMultipleChoice"),u(fr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fr,"href","#transformers.BertForMultipleChoice"),u(On,"class","relative group"),u(hh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(zl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zl,"rel","nofollow"),u(fh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForMultipleChoice"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gr,"id","transformers.BertForTokenClassification"),u(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gr,"href","#transformers.BertForTokenClassification"),u(In,"class","relative group"),u(mh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nl,"rel","nofollow"),u(uh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForTokenClassification"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vr,"id","transformers.BertForQuestionAnswering"),u(vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(vr,"href","#transformers.BertForQuestionAnswering"),u(Dn,"class","relative group"),u(gh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.PreTrainedModel"),u(Sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sl,"rel","nofollow"),u(_h,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertModel"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertModel"),u(Wn,"class","relative group"),u(bh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ql,"rel","nofollow"),u(kh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertModel"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForPreTraining"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForPreTraining"),u(Kn,"class","relative group"),u(vh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Zl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zl,"rel","nofollow"),u(yh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForPreTraining"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.TFBertLMHeadModel"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.TFBertLMHeadModel"),u(Vn,"class","relative group"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.TFBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.TFBertForMaskedLM"),u(Gn,"class","relative group"),u(Th,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(wh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lr,"id","transformers.TFBertForNextSentencePrediction"),u(Lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lr,"href","#transformers.TFBertForNextSentencePrediction"),u(Yn,"class","relative group"),u($h,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(kd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(kd,"rel","nofollow"),u(xh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.TFBertForSequenceClassification"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.TFBertForSequenceClassification"),u(es,"class","relative group"),u(Fh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(xd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xd,"rel","nofollow"),u(Bh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.TFBertForMultipleChoice"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.TFBertForMultipleChoice"),u(os,"class","relative group"),u(Eh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pd,"rel","nofollow"),u(zh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.TFBertForTokenClassification"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.TFBertForTokenClassification"),u(ss,"class","relative group"),u(Mh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ad,"rel","nofollow"),u(Ph,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.TFBertForQuestionAnswering"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.TFBertForQuestionAnswering"),u(as,"class","relative group"),u(jh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wd,"rel","nofollow"),u(qh,"href","/docs/transformers/v4.24.0/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxBertModel"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxBertModel"),u(ds,"class","relative group"),u(Ch,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxBertForPreTraining"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxBertForPreTraining"),u(ps,"class","relative group"),u(Nh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ma,"id","transformers.FlaxBertForCausalLM"),u(ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ma,"href","#transformers.FlaxBertForCausalLM"),u(ms,"class","relative group"),u(Oh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"id","transformers.FlaxBertForMaskedLM"),u(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_a,"href","#transformers.FlaxBertForMaskedLM"),u(gs,"class","relative group"),u(Ah,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(zc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Mc,"rel","nofollow"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(va,"id","transformers.FlaxBertForNextSentencePrediction"),u(va,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(va,"href","#transformers.FlaxBertForNextSentencePrediction"),u(bs,"class","relative group"),u(Ih,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Dc,"rel","nofollow"),u(Sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Sc,"rel","nofollow"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wa,"id","transformers.FlaxBertForSequenceClassification"),u(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wa,"href","#transformers.FlaxBertForSequenceClassification"),u(vs,"class","relative group"),u(Lh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Qc,"rel","nofollow"),u(Vc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gc,"rel","nofollow"),u(Xc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xc,"rel","nofollow"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fa,"id","transformers.FlaxBertForMultipleChoice"),u(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fa,"href","#transformers.FlaxBertForMultipleChoice"),u(Ts,"class","relative group"),u(Dh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(np,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(np,"rel","nofollow"),u(sp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sp,"rel","nofollow"),u(rp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rp,"rel","nofollow"),u(ap,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ap,"rel","nofollow"),u(ip,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ip,"rel","nofollow"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(za,"id","transformers.FlaxBertForTokenClassification"),u(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(za,"href","#transformers.FlaxBertForTokenClassification"),u($s,"class","relative group"),u(Sh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(fp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(fp,"rel","nofollow"),u(mp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(mp,"rel","nofollow"),u(up,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(up,"rel","nofollow"),u(gp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gp,"rel","nofollow"),u(_p,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_p,"rel","nofollow"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ja,"id","transformers.FlaxBertForQuestionAnswering"),u(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ja,"href","#transformers.FlaxBertForQuestionAnswering"),u(Fs,"class","relative group"),u(Uh,"href","/docs/transformers/v4.24.0/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wp,"rel","nofollow"),u($p,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($p,"rel","nofollow"),u(xp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(xp,"rel","nofollow"),u(Fp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fp,"rel","nofollow"),u(Bp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bp,"rel","nofollow"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,k){e(document.head,d),_(i,g,k),_(i,f,k),e(f,m),e(m,b),w(l,b,null),e(f,h),e(f,z),e(z,Fe),_(i,ye,k),_(i,S,k),e(S,pe),e(pe,ee),w(E,ee,null),e(S,Be),e(S,R),e(R,Ee),_(i,Te,k),_(i,U,k),e(U,ze),e(U,fe),e(fe,G),e(U,Me),_(i,we,k),_(i,H,k),e(H,Pe),_(i,$e,k),_(i,K,k),e(K,_e),e(_e,je),_(i,oe,k),_(i,j,k),e(j,q),e(q,qe),_(i,V,k),_(i,ge,k),e(ge,Ce),_(i,J,k),_(i,he,k),e(he,be),e(be,N),e(he,Ne),e(he,Q),e(Q,Oe),_(i,xe,k),_(i,D,k),e(D,Ae),e(D,me),e(me,L),e(D,Ie),e(D,W),e(W,Le),e(D,se),_(i,C,k),_(i,de,k),e(de,O),e(O,ke),w(ue,ke,null),e(de,v),e(de,M),e(M,Re),_(i,ne,k),_(i,ve,k),w(We,ve,null),e(ve,P),e(ve,De),e(De,Qe),e(De,Ke),e(Ke,Ve),e(De,Je),e(De,I),e(I,X),e(De,Ge),e(De,He),e(He,Y),e(De,Xe),e(ve,Ye),e(ve,ce),e(ce,Ze),e(ce,Z),e(Z,et),e(ce,Hy),e(ce,Wp),e(Wp,Ky),e(ce,Ry),e(ve,Qy),w(Cs,ve,null),_(i,Db,k),_(i,fn,k),e(fn,Ns),e(Ns,jf),w(li,jf,null),e(fn,Vy),e(fn,qf),e(qf,Jy),_(i,Sb,k),_(i,tt,k),w(di,tt,null),e(tt,Gy),e(tt,Cf),e(Cf,Xy),e(tt,Yy),e(tt,ci),e(ci,Zy),e(ci,Hp),e(Hp,eT),e(ci,tT),e(tt,oT),e(tt,Ko),w(pi,Ko,null),e(Ko,nT),e(Ko,Nf),e(Nf,sT),e(Ko,rT),e(Ko,hi),e(hi,Kp),e(Kp,aT),e(Kp,Of),e(Of,iT),e(hi,lT),e(hi,Rp),e(Rp,dT),e(Rp,Af),e(Af,cT),e(tt,pT),e(tt,Os),w(fi,Os,null),e(Os,hT),e(Os,mi),e(mi,fT),e(mi,If),e(If,mT),e(mi,uT),e(tt,gT),e(tt,oo),w(ui,oo,null),e(oo,_T),e(oo,Lf),e(Lf,bT),e(oo,kT),w(As,oo,null),e(oo,vT),e(oo,mn),e(mn,yT),e(mn,Df),e(Df,TT),e(mn,wT),e(mn,Sf),e(Sf,$T),e(mn,xT),e(tt,FT),e(tt,Qp),w(gi,Qp,null),_(i,Ub,k),_(i,un,k),e(un,Is),e(Is,Uf),w(_i,Uf,null),e(un,BT),e(un,Wf),e(Wf,ET),_(i,Wb,k),_(i,xt,k),w(bi,xt,null),e(xt,zT),e(xt,ki),e(ki,MT),e(ki,Hf),e(Hf,PT),e(ki,jT),e(xt,qT),e(xt,vi),e(vi,CT),e(vi,Vp),e(Vp,NT),e(vi,OT),e(xt,AT),e(xt,Ro),w(yi,Ro,null),e(Ro,IT),e(Ro,Kf),e(Kf,LT),e(Ro,DT),e(Ro,Ti),e(Ti,Jp),e(Jp,ST),e(Jp,Rf),e(Rf,UT),e(Ti,WT),e(Ti,Gp),e(Gp,HT),e(Gp,Qf),e(Qf,KT),e(xt,RT),e(xt,no),w(wi,no,null),e(no,QT),e(no,Vf),e(Vf,VT),e(no,JT),w(Ls,no,null),e(no,GT),e(no,gn),e(gn,XT),e(gn,Jf),e(Jf,YT),e(gn,ZT),e(gn,Gf),e(Gf,ew),e(gn,tw),_(i,Hb,k),_(i,_n,k),e(_n,Ds),e(Ds,Xf),w($i,Xf,null),e(_n,ow),e(_n,Yf),e(Yf,nw),_(i,Kb,k),_(i,Ft,k),w(xi,Ft,null),e(Ft,sw),e(Ft,bn),e(bn,rw),e(bn,Zf),e(Zf,aw),e(bn,iw),e(bn,em),e(em,lw),e(bn,dw),e(Ft,cw),e(Ft,Fi),e(Fi,pw),e(Fi,tm),e(tm,hw),e(Fi,fw),e(Ft,mw),e(Ft,Qo),w(Bi,Qo,null),e(Qo,uw),e(Qo,Ei),e(Ei,gw),e(Ei,om),e(om,_w),e(Ei,bw),e(Qo,kw),w(Ss,Qo,null),e(Ft,vw),e(Ft,Vo),w(zi,Vo,null),e(Vo,yw),e(Vo,kn),e(kn,Tw),e(kn,nm),e(nm,ww),e(kn,$w),e(kn,sm),e(sm,xw),e(kn,Fw),e(Vo,Bw),w(Us,Vo,null),_(i,Rb,k),_(i,vn,k),e(vn,Ws),e(Ws,rm),w(Mi,rm,null),e(vn,Ew),e(vn,am),e(am,zw),_(i,Qb,k),_(i,yn,k),w(Pi,yn,null),e(yn,Mw),e(yn,ji),e(ji,Pw),e(ji,Xp),e(Xp,jw),e(ji,qw),_(i,Vb,k),_(i,Tn,k),w(qi,Tn,null),e(Tn,Cw),e(Tn,Ci),e(Ci,Nw),e(Ci,Yp),e(Yp,Ow),e(Ci,Aw),_(i,Jb,k),_(i,Po,k),w(Ni,Po,null),e(Po,Iw),e(Po,Oi),e(Oi,Lw),e(Oi,Zp),e(Zp,Dw),e(Oi,Sw),e(Po,Uw),e(Po,Hs),w(Ai,Hs,null),e(Hs,Ww),e(Hs,im),e(im,Hw),_(i,Gb,k),_(i,wn,k),e(wn,Ks),e(Ks,lm),w(Ii,lm,null),e(wn,Kw),e(wn,dm),e(dm,Rw),_(i,Xb,k),_(i,ot,k),w(Li,ot,null),e(ot,Qw),e(ot,cm),e(cm,Vw),e(ot,Jw),e(ot,Di),e(Di,Gw),e(Di,eh),e(eh,Xw),e(Di,Yw),e(ot,Zw),e(ot,Si),e(Si,e1),e(Si,Ui),e(Ui,t1),e(Si,o1),e(ot,n1),e(ot,Wi),e(Wi,s1),e(Wi,Hi),e(Hi,r1),e(Wi,a1),e(ot,i1),e(ot,mt),e(mt,l1),e(mt,pm),e(pm,d1),e(mt,c1),e(mt,hm),e(hm,p1),e(mt,h1),e(mt,fm),e(fm,f1),e(mt,m1),e(mt,mm),e(mm,u1),e(mt,g1),e(mt,um),e(um,_1),e(mt,b1),e(mt,gm),e(gm,k1),e(mt,v1),e(ot,y1),e(ot,so),w(Ki,so,null),e(so,T1),e(so,$n),e($n,w1),e($n,th),e(th,$1),e($n,x1),e($n,_m),e(_m,F1),e($n,B1),e(so,E1),w(Rs,so,null),e(so,z1),w(Qs,so,null),_(i,Yb,k),_(i,xn,k),e(xn,Vs),e(Vs,bm),w(Ri,bm,null),e(xn,M1),e(xn,km),e(km,P1),_(i,Zb,k),_(i,Bt,k),w(Qi,Bt,null),e(Bt,j1),e(Bt,Fn),e(Fn,q1),e(Fn,vm),e(vm,C1),e(Fn,N1),e(Fn,ym),e(ym,O1),e(Fn,A1),e(Bt,I1),e(Bt,Vi),e(Vi,L1),e(Vi,oh),e(oh,D1),e(Vi,S1),e(Bt,U1),e(Bt,Ji),e(Ji,W1),e(Ji,Gi),e(Gi,H1),e(Ji,K1),e(Bt,R1),e(Bt,ro),w(Xi,ro,null),e(ro,Q1),e(ro,Bn),e(Bn,V1),e(Bn,nh),e(nh,J1),e(Bn,G1),e(Bn,Tm),e(Tm,X1),e(Bn,Y1),e(ro,Z1),w(Js,ro,null),e(ro,e$),w(Gs,ro,null),_(i,ek,k),_(i,En,k),e(En,Xs),e(Xs,wm),w(Yi,wm,null),e(En,t$),e(En,$m),e($m,o$),_(i,tk,k),_(i,Et,k),w(Zi,Et,null),e(Et,n$),e(Et,el),e(el,s$),e(el,xm),e(xm,r$),e(el,a$),e(Et,i$),e(Et,tl),e(tl,l$),e(tl,sh),e(sh,d$),e(tl,c$),e(Et,p$),e(Et,ol),e(ol,h$),e(ol,nl),e(nl,f$),e(ol,m$),e(Et,u$),e(Et,ao),w(sl,ao,null),e(ao,g$),e(ao,zn),e(zn,_$),e(zn,rh),e(rh,b$),e(zn,k$),e(zn,Fm),e(Fm,v$),e(zn,y$),e(ao,T$),w(Ys,ao,null),e(ao,w$),w(Zs,ao,null),_(i,ok,k),_(i,Mn,k),e(Mn,er),e(er,Bm),w(rl,Bm,null),e(Mn,$$),e(Mn,Em),e(Em,x$),_(i,nk,k),_(i,zt,k),w(al,zt,null),e(zt,F$),e(zt,il),e(il,B$),e(il,zm),e(zm,E$),e(il,z$),e(zt,M$),e(zt,ll),e(ll,P$),e(ll,ah),e(ah,j$),e(ll,q$),e(zt,C$),e(zt,dl),e(dl,N$),e(dl,cl),e(cl,O$),e(dl,A$),e(zt,I$),e(zt,Nt),w(pl,Nt,null),e(Nt,L$),e(Nt,Pn),e(Pn,D$),e(Pn,ih),e(ih,S$),e(Pn,U$),e(Pn,Mm),e(Mm,W$),e(Pn,H$),e(Nt,K$),w(tr,Nt,null),e(Nt,R$),w(or,Nt,null),e(Nt,Q$),w(nr,Nt,null),_(i,sk,k),_(i,jn,k),e(jn,sr),e(sr,Pm),w(hl,Pm,null),e(jn,V$),e(jn,jm),e(jm,J$),_(i,rk,k),_(i,Mt,k),w(fl,Mt,null),e(Mt,G$),e(Mt,ml),e(ml,X$),e(ml,qm),e(qm,Y$),e(ml,Z$),e(Mt,e2),e(Mt,ul),e(ul,t2),e(ul,lh),e(lh,o2),e(ul,n2),e(Mt,s2),e(Mt,gl),e(gl,r2),e(gl,_l),e(_l,a2),e(gl,i2),e(Mt,l2),e(Mt,io),w(bl,io,null),e(io,d2),e(io,qn),e(qn,c2),e(qn,dh),e(dh,p2),e(qn,h2),e(qn,Cm),e(Cm,f2),e(qn,m2),e(io,u2),w(rr,io,null),e(io,g2),w(ar,io,null),_(i,ak,k),_(i,Cn,k),e(Cn,ir),e(ir,Nm),w(kl,Nm,null),e(Cn,_2),e(Cn,Om),e(Om,b2),_(i,ik,k),_(i,Pt,k),w(vl,Pt,null),e(Pt,k2),e(Pt,Am),e(Am,v2),e(Pt,y2),e(Pt,yl),e(yl,T2),e(yl,ch),e(ch,w2),e(yl,$2),e(Pt,x2),e(Pt,Tl),e(Tl,F2),e(Tl,wl),e(wl,B2),e(Tl,E2),e(Pt,z2),e(Pt,ft),w($l,ft,null),e(ft,M2),e(ft,Nn),e(Nn,P2),e(Nn,ph),e(ph,j2),e(Nn,q2),e(Nn,Im),e(Im,C2),e(Nn,N2),e(ft,O2),w(lr,ft,null),e(ft,A2),w(dr,ft,null),e(ft,I2),w(cr,ft,null),e(ft,L2),w(pr,ft,null),e(ft,D2),w(hr,ft,null),_(i,lk,k),_(i,On,k),e(On,fr),e(fr,Lm),w(xl,Lm,null),e(On,S2),e(On,Dm),e(Dm,U2),_(i,dk,k),_(i,jt,k),w(Fl,jt,null),e(jt,W2),e(jt,Sm),e(Sm,H2),e(jt,K2),e(jt,Bl),e(Bl,R2),e(Bl,hh),e(hh,Q2),e(Bl,V2),e(jt,J2),e(jt,El),e(El,G2),e(El,zl),e(zl,X2),e(El,Y2),e(jt,Z2),e(jt,lo),w(Ml,lo,null),e(lo,e0),e(lo,An),e(An,t0),e(An,fh),e(fh,o0),e(An,n0),e(An,Um),e(Um,s0),e(An,r0),e(lo,a0),w(mr,lo,null),e(lo,i0),w(ur,lo,null),_(i,ck,k),_(i,In,k),e(In,gr),e(gr,Wm),w(Pl,Wm,null),e(In,l0),e(In,Hm),e(Hm,d0),_(i,pk,k),_(i,qt,k),w(jl,qt,null),e(qt,c0),e(qt,Km),e(Km,p0),e(qt,h0),e(qt,ql),e(ql,f0),e(ql,mh),e(mh,m0),e(ql,u0),e(qt,g0),e(qt,Cl),e(Cl,_0),e(Cl,Nl),e(Nl,b0),e(Cl,k0),e(qt,v0),e(qt,Ot),w(Ol,Ot,null),e(Ot,y0),e(Ot,Ln),e(Ln,T0),e(Ln,uh),e(uh,w0),e(Ln,$0),e(Ln,Rm),e(Rm,x0),e(Ln,F0),e(Ot,B0),w(_r,Ot,null),e(Ot,E0),w(br,Ot,null),e(Ot,z0),w(kr,Ot,null),_(i,hk,k),_(i,Dn,k),e(Dn,vr),e(vr,Qm),w(Al,Qm,null),e(Dn,M0),e(Dn,Vm),e(Vm,P0),_(i,fk,k),_(i,Ct,k),w(Il,Ct,null),e(Ct,j0),e(Ct,Sn),e(Sn,q0),e(Sn,Jm),e(Jm,C0),e(Sn,N0),e(Sn,Gm),e(Gm,O0),e(Sn,A0),e(Ct,I0),e(Ct,Ll),e(Ll,L0),e(Ll,gh),e(gh,D0),e(Ll,S0),e(Ct,U0),e(Ct,Dl),e(Dl,W0),e(Dl,Sl),e(Sl,H0),e(Dl,K0),e(Ct,R0),e(Ct,At),w(Ul,At,null),e(At,Q0),e(At,Un),e(Un,V0),e(Un,_h),e(_h,J0),e(Un,G0),e(Un,Xm),e(Xm,X0),e(Un,Y0),e(At,Z0),w(yr,At,null),e(At,e4),w(Tr,At,null),e(At,t4),w(wr,At,null),_(i,mk,k),_(i,Wn,k),e(Wn,$r),e($r,Ym),w(Wl,Ym,null),e(Wn,o4),e(Wn,Zm),e(Zm,n4),_(i,uk,k),_(i,ut,k),w(Hl,ut,null),e(ut,s4),e(ut,eu),e(eu,r4),e(ut,a4),e(ut,Kl),e(Kl,i4),e(Kl,bh),e(bh,l4),e(Kl,d4),e(ut,c4),e(ut,Rl),e(Rl,p4),e(Rl,Ql),e(Ql,h4),e(Rl,f4),e(ut,m4),w(xr,ut,null),e(ut,u4),e(ut,co),w(Vl,co,null),e(co,g4),e(co,Hn),e(Hn,_4),e(Hn,kh),e(kh,b4),e(Hn,k4),e(Hn,tu),e(tu,v4),e(Hn,y4),e(co,T4),w(Fr,co,null),e(co,w4),w(Br,co,null),_(i,gk,k),_(i,Kn,k),e(Kn,Er),e(Er,ou),w(Jl,ou,null),e(Kn,$4),e(Kn,nu),e(nu,x4),_(i,_k,k),_(i,gt,k),w(Gl,gt,null),e(gt,F4),e(gt,Rn),e(Rn,B4),e(Rn,su),e(su,E4),e(Rn,z4),e(Rn,ru),e(ru,M4),e(Rn,P4),e(gt,j4),e(gt,Xl),e(Xl,q4),e(Xl,vh),e(vh,C4),e(Xl,N4),e(gt,O4),e(gt,Yl),e(Yl,A4),e(Yl,Zl),e(Zl,I4),e(Yl,L4),e(gt,D4),w(zr,gt,null),e(gt,S4),e(gt,po),w(ed,po,null),e(po,U4),e(po,Qn),e(Qn,W4),e(Qn,yh),e(yh,H4),e(Qn,K4),e(Qn,au),e(au,R4),e(Qn,Q4),e(po,V4),w(Mr,po,null),e(po,J4),w(Pr,po,null),_(i,bk,k),_(i,Vn,k),e(Vn,jr),e(jr,iu),w(td,iu,null),e(Vn,G4),e(Vn,lu),e(lu,X4),_(i,kk,k),_(i,Jn,k),w(od,Jn,null),e(Jn,Y4),e(Jn,It),w(nd,It,null),e(It,Z4),e(It,nt),e(nt,ex),e(nt,du),e(du,tx),e(nt,ox),e(nt,cu),e(cu,nx),e(nt,sx),e(nt,pu),e(pu,rx),e(nt,ax),e(nt,hu),e(hu,ix),e(nt,lx),e(nt,fu),e(fu,dx),e(nt,cx),e(nt,mu),e(mu,px),e(nt,hx),e(nt,uu),e(uu,fx),e(nt,mx),e(It,ux),e(It,sd),e(sd,rd),e(rd,gx),e(rd,gu),e(gu,_x),e(rd,bx),e(sd,kx),e(sd,ad),e(ad,vx),e(ad,_u),e(_u,yx),e(ad,Tx),e(It,wx),e(It,te),e(te,$x),e(te,bu),e(bu,xx),e(te,Fx),e(te,ku),e(ku,Bx),e(te,Ex),e(te,vu),e(vu,zx),e(te,Mx),e(te,yu),e(yu,Px),e(te,jx),e(te,Tu),e(Tu,qx),e(te,Cx),e(te,wu),e(wu,Nx),e(te,Ox),e(te,$u),e($u,Ax),e(te,Ix),e(te,xu),e(xu,Lx),e(te,Dx),e(te,Fu),e(Fu,Sx),e(te,Ux),e(te,Bu),e(Bu,Wx),e(te,Hx),e(te,Eu),e(Eu,Kx),e(te,Rx),e(te,zu),e(zu,Qx),e(te,Vx),e(te,Mu),e(Mu,Jx),e(te,Gx),e(te,Pu),e(Pu,Xx),e(te,Yx),e(te,ju),e(ju,Zx),e(te,eF),e(te,qu),e(qu,tF),e(te,oF),e(te,Cu),e(Cu,nF),e(te,sF),e(te,Nu),e(Nu,rF),e(te,aF),e(te,Ou),e(Ou,iF),e(te,lF),e(te,Au),e(Au,dF),e(te,cF),e(It,pF),w(qr,It,null),_(i,vk,k),_(i,Gn,k),e(Gn,Cr),e(Cr,Iu),w(id,Iu,null),e(Gn,hF),e(Gn,Lu),e(Lu,fF),_(i,yk,k),_(i,_t,k),w(ld,_t,null),e(_t,mF),e(_t,dd),e(dd,uF),e(dd,Du),e(Du,gF),e(dd,_F),e(_t,bF),e(_t,cd),e(cd,kF),e(cd,Th),e(Th,vF),e(cd,yF),e(_t,TF),e(_t,pd),e(pd,wF),e(pd,hd),e(hd,$F),e(pd,xF),e(_t,FF),w(Nr,_t,null),e(_t,BF),e(_t,Lt),w(fd,Lt,null),e(Lt,EF),e(Lt,Xn),e(Xn,zF),e(Xn,wh),e(wh,MF),e(Xn,PF),e(Xn,Su),e(Su,jF),e(Xn,qF),e(Lt,CF),w(Or,Lt,null),e(Lt,NF),w(Ar,Lt,null),e(Lt,OF),w(Ir,Lt,null),_(i,Tk,k),_(i,Yn,k),e(Yn,Lr),e(Lr,Uu),w(md,Uu,null),e(Yn,AF),e(Yn,Wu),e(Wu,IF),_(i,wk,k),_(i,bt,k),w(ud,bt,null),e(bt,LF),e(bt,gd),e(gd,DF),e(gd,Hu),e(Hu,SF),e(gd,UF),e(bt,WF),e(bt,_d),e(_d,HF),e(_d,$h),e($h,KF),e(_d,RF),e(bt,QF),e(bt,bd),e(bd,VF),e(bd,kd),e(kd,JF),e(bd,GF),e(bt,XF),w(Dr,bt,null),e(bt,YF),e(bt,ho),w(vd,ho,null),e(ho,ZF),e(ho,Zn),e(Zn,eB),e(Zn,xh),e(xh,tB),e(Zn,oB),e(Zn,Ku),e(Ku,nB),e(Zn,sB),e(ho,rB),w(Sr,ho,null),e(ho,aB),w(Ur,ho,null),_(i,$k,k),_(i,es,k),e(es,Wr),e(Wr,Ru),w(yd,Ru,null),e(es,iB),e(es,Qu),e(Qu,lB),_(i,xk,k),_(i,kt,k),w(Td,kt,null),e(kt,dB),e(kt,Vu),e(Vu,cB),e(kt,pB),e(kt,wd),e(wd,hB),e(wd,Fh),e(Fh,fB),e(wd,mB),e(kt,uB),e(kt,$d),e($d,gB),e($d,xd),e(xd,_B),e($d,bB),e(kt,kB),w(Hr,kt,null),e(kt,vB),e(kt,Dt),w(Fd,Dt,null),e(Dt,yB),e(Dt,ts),e(ts,TB),e(ts,Bh),e(Bh,wB),e(ts,$B),e(ts,Ju),e(Ju,xB),e(ts,FB),e(Dt,BB),w(Kr,Dt,null),e(Dt,EB),w(Rr,Dt,null),e(Dt,zB),w(Qr,Dt,null),_(i,Fk,k),_(i,os,k),e(os,Vr),e(Vr,Gu),w(Bd,Gu,null),e(os,MB),e(os,Xu),e(Xu,PB),_(i,Bk,k),_(i,vt,k),w(Ed,vt,null),e(vt,jB),e(vt,Yu),e(Yu,qB),e(vt,CB),e(vt,zd),e(zd,NB),e(zd,Eh),e(Eh,OB),e(zd,AB),e(vt,IB),e(vt,Md),e(Md,LB),e(Md,Pd),e(Pd,DB),e(Md,SB),e(vt,UB),w(Jr,vt,null),e(vt,WB),e(vt,fo),w(jd,fo,null),e(fo,HB),e(fo,ns),e(ns,KB),e(ns,zh),e(zh,RB),e(ns,QB),e(ns,Zu),e(Zu,VB),e(ns,JB),e(fo,GB),w(Gr,fo,null),e(fo,XB),w(Xr,fo,null),_(i,Ek,k),_(i,ss,k),e(ss,Yr),e(Yr,eg),w(qd,eg,null),e(ss,YB),e(ss,tg),e(tg,ZB),_(i,zk,k),_(i,yt,k),w(Cd,yt,null),e(yt,eE),e(yt,og),e(og,tE),e(yt,oE),e(yt,Nd),e(Nd,nE),e(Nd,Mh),e(Mh,sE),e(Nd,rE),e(yt,aE),e(yt,Od),e(Od,iE),e(Od,Ad),e(Ad,lE),e(Od,dE),e(yt,cE),w(Zr,yt,null),e(yt,pE),e(yt,St),w(Id,St,null),e(St,hE),e(St,rs),e(rs,fE),e(rs,Ph),e(Ph,mE),e(rs,uE),e(rs,ng),e(ng,gE),e(rs,_E),e(St,bE),w(ea,St,null),e(St,kE),w(ta,St,null),e(St,vE),w(oa,St,null),_(i,Mk,k),_(i,as,k),e(as,na),e(na,sg),w(Ld,sg,null),e(as,yE),e(as,rg),e(rg,TE),_(i,Pk,k),_(i,Tt,k),w(Dd,Tt,null),e(Tt,wE),e(Tt,is),e(is,$E),e(is,ag),e(ag,xE),e(is,FE),e(is,ig),e(ig,BE),e(is,EE),e(Tt,zE),e(Tt,Sd),e(Sd,ME),e(Sd,jh),e(jh,PE),e(Sd,jE),e(Tt,qE),e(Tt,Ud),e(Ud,CE),e(Ud,Wd),e(Wd,NE),e(Ud,OE),e(Tt,AE),w(sa,Tt,null),e(Tt,IE),e(Tt,Ut),w(Hd,Ut,null),e(Ut,LE),e(Ut,ls),e(ls,DE),e(ls,qh),e(qh,SE),e(ls,UE),e(ls,lg),e(lg,WE),e(ls,HE),e(Ut,KE),w(ra,Ut,null),e(Ut,RE),w(aa,Ut,null),e(Ut,QE),w(ia,Ut,null),_(i,jk,k),_(i,ds,k),e(ds,la),e(la,dg),w(Kd,dg,null),e(ds,VE),e(ds,cg),e(cg,JE),_(i,qk,k),_(i,st,k),w(Rd,st,null),e(st,GE),e(st,pg),e(pg,XE),e(st,YE),e(st,Qd),e(Qd,ZE),e(Qd,Ch),e(Ch,ez),e(Qd,tz),e(st,oz),e(st,Vd),e(Vd,nz),e(Vd,Jd),e(Jd,sz),e(Vd,rz),e(st,az),e(st,hg),e(hg,iz),e(st,lz),e(st,jo),e(jo,fg),e(fg,Gd),e(Gd,dz),e(jo,cz),e(jo,mg),e(mg,Xd),e(Xd,pz),e(jo,hz),e(jo,ug),e(ug,Yd),e(Yd,fz),e(jo,mz),e(jo,gg),e(gg,Zd),e(Zd,uz),e(st,gz),e(st,mo),w(ec,mo,null),e(mo,_z),e(mo,cs),e(cs,bz),e(cs,_g),e(_g,kz),e(cs,vz),e(cs,bg),e(bg,yz),e(cs,Tz),e(mo,wz),w(da,mo,null),e(mo,$z),w(ca,mo,null),_(i,Ck,k),_(i,ps,k),e(ps,pa),e(pa,kg),w(tc,kg,null),e(ps,xz),e(ps,vg),e(vg,Fz),_(i,Nk,k),_(i,rt,k),w(oc,rt,null),e(rt,Bz),e(rt,hs),e(hs,Ez),e(hs,yg),e(yg,zz),e(hs,Mz),e(hs,Tg),e(Tg,Pz),e(hs,jz),e(rt,qz),e(rt,nc),e(nc,Cz),e(nc,Nh),e(Nh,Nz),e(nc,Oz),e(rt,Az),e(rt,sc),e(sc,Iz),e(sc,rc),e(rc,Lz),e(sc,Dz),e(rt,Sz),e(rt,wg),e(wg,Uz),e(rt,Wz),e(rt,qo),e(qo,$g),e($g,ac),e(ac,Hz),e(qo,Kz),e(qo,xg),e(xg,ic),e(ic,Rz),e(qo,Qz),e(qo,Fg),e(Fg,lc),e(lc,Vz),e(qo,Jz),e(qo,Bg),e(Bg,dc),e(dc,Gz),e(rt,Xz),e(rt,uo),w(cc,uo,null),e(uo,Yz),e(uo,fs),e(fs,Zz),e(fs,Eg),e(Eg,eM),e(fs,tM),e(fs,zg),e(zg,oM),e(fs,nM),e(uo,sM),w(ha,uo,null),e(uo,rM),w(fa,uo,null),_(i,Ok,k),_(i,ms,k),e(ms,ma),e(ma,Mg),w(pc,Mg,null),e(ms,aM),e(ms,Pg),e(Pg,iM),_(i,Ak,k),_(i,at,k),w(hc,at,null),e(at,lM),e(at,jg),e(jg,dM),e(at,cM),e(at,fc),e(fc,pM),e(fc,Oh),e(Oh,hM),e(fc,fM),e(at,mM),e(at,mc),e(mc,uM),e(mc,uc),e(uc,gM),e(mc,_M),e(at,bM),e(at,qg),e(qg,kM),e(at,vM),e(at,Co),e(Co,Cg),e(Cg,gc),e(gc,yM),e(Co,TM),e(Co,Ng),e(Ng,_c),e(_c,wM),e(Co,$M),e(Co,Og),e(Og,bc),e(bc,xM),e(Co,FM),e(Co,Ag),e(Ag,kc),e(kc,BM),e(at,EM),e(at,go),w(vc,go,null),e(go,zM),e(go,us),e(us,MM),e(us,Ig),e(Ig,PM),e(us,jM),e(us,Lg),e(Lg,qM),e(us,CM),e(go,NM),w(ua,go,null),e(go,OM),w(ga,go,null),_(i,Ik,k),_(i,gs,k),e(gs,_a),e(_a,Dg),w(yc,Dg,null),e(gs,AM),e(gs,Sg),e(Sg,IM),_(i,Lk,k),_(i,it,k),w(Tc,it,null),e(it,LM),e(it,wc),e(wc,DM),e(wc,Ug),e(Ug,SM),e(wc,UM),e(it,WM),e(it,$c),e($c,HM),e($c,Ah),e(Ah,KM),e($c,RM),e(it,QM),e(it,xc),e(xc,VM),e(xc,Fc),e(Fc,JM),e(xc,GM),e(it,XM),e(it,Wg),e(Wg,YM),e(it,ZM),e(it,No),e(No,Hg),e(Hg,Bc),e(Bc,eP),e(No,tP),e(No,Kg),e(Kg,Ec),e(Ec,oP),e(No,nP),e(No,Rg),e(Rg,zc),e(zc,sP),e(No,rP),e(No,Qg),e(Qg,Mc),e(Mc,aP),e(it,iP),e(it,_o),w(Pc,_o,null),e(_o,lP),e(_o,_s),e(_s,dP),e(_s,Vg),e(Vg,cP),e(_s,pP),e(_s,Jg),e(Jg,hP),e(_s,fP),e(_o,mP),w(ba,_o,null),e(_o,uP),w(ka,_o,null),_(i,Dk,k),_(i,bs,k),e(bs,va),e(va,Gg),w(jc,Gg,null),e(bs,gP),e(bs,Xg),e(Xg,_P),_(i,Sk,k),_(i,lt,k),w(qc,lt,null),e(lt,bP),e(lt,Cc),e(Cc,kP),e(Cc,Yg),e(Yg,vP),e(Cc,yP),e(lt,TP),e(lt,Nc),e(Nc,wP),e(Nc,Ih),e(Ih,$P),e(Nc,xP),e(lt,FP),e(lt,Oc),e(Oc,BP),e(Oc,Ac),e(Ac,EP),e(Oc,zP),e(lt,MP),e(lt,Zg),e(Zg,PP),e(lt,jP),e(lt,Oo),e(Oo,e_),e(e_,Ic),e(Ic,qP),e(Oo,CP),e(Oo,t_),e(t_,Lc),e(Lc,NP),e(Oo,OP),e(Oo,o_),e(o_,Dc),e(Dc,AP),e(Oo,IP),e(Oo,n_),e(n_,Sc),e(Sc,LP),e(lt,DP),e(lt,bo),w(Uc,bo,null),e(bo,SP),e(bo,ks),e(ks,UP),e(ks,s_),e(s_,WP),e(ks,HP),e(ks,r_),e(r_,KP),e(ks,RP),e(bo,QP),w(ya,bo,null),e(bo,VP),w(Ta,bo,null),_(i,Uk,k),_(i,vs,k),e(vs,wa),e(wa,a_),w(Wc,a_,null),e(vs,JP),e(vs,i_),e(i_,GP),_(i,Wk,k),_(i,dt,k),w(Hc,dt,null),e(dt,XP),e(dt,l_),e(l_,YP),e(dt,ZP),e(dt,Kc),e(Kc,ej),e(Kc,Lh),e(Lh,tj),e(Kc,oj),e(dt,nj),e(dt,Rc),e(Rc,sj),e(Rc,Qc),e(Qc,rj),e(Rc,aj),e(dt,ij),e(dt,d_),e(d_,lj),e(dt,dj),e(dt,Ao),e(Ao,c_),e(c_,Vc),e(Vc,cj),e(Ao,pj),e(Ao,p_),e(p_,Jc),e(Jc,hj),e(Ao,fj),e(Ao,h_),e(h_,Gc),e(Gc,mj),e(Ao,uj),e(Ao,f_),e(f_,Xc),e(Xc,gj),e(dt,_j),e(dt,ko),w(Yc,ko,null),e(ko,bj),e(ko,ys),e(ys,kj),e(ys,m_),e(m_,vj),e(ys,yj),e(ys,u_),e(u_,Tj),e(ys,wj),e(ko,$j),w($a,ko,null),e(ko,xj),w(xa,ko,null),_(i,Hk,k),_(i,Ts,k),e(Ts,Fa),e(Fa,g_),w(Zc,g_,null),e(Ts,Fj),e(Ts,__),e(__,Bj),_(i,Kk,k),_(i,ct,k),w(ep,ct,null),e(ct,Ej),e(ct,b_),e(b_,zj),e(ct,Mj),e(ct,tp),e(tp,Pj),e(tp,Dh),e(Dh,jj),e(tp,qj),e(ct,Cj),e(ct,op),e(op,Nj),e(op,np),e(np,Oj),e(op,Aj),e(ct,Ij),e(ct,k_),e(k_,Lj),e(ct,Dj),e(ct,Io),e(Io,v_),e(v_,sp),e(sp,Sj),e(Io,Uj),e(Io,y_),e(y_,rp),e(rp,Wj),e(Io,Hj),e(Io,T_),e(T_,ap),e(ap,Kj),e(Io,Rj),e(Io,w_),e(w_,ip),e(ip,Qj),e(ct,Vj),e(ct,vo),w(lp,vo,null),e(vo,Jj),e(vo,ws),e(ws,Gj),e(ws,$_),e($_,Xj),e(ws,Yj),e(ws,x_),e(x_,Zj),e(ws,eq),e(vo,tq),w(Ba,vo,null),e(vo,oq),w(Ea,vo,null),_(i,Rk,k),_(i,$s,k),e($s,za),e(za,F_),w(dp,F_,null),e($s,nq),e($s,B_),e(B_,sq),_(i,Qk,k),_(i,pt,k),w(cp,pt,null),e(pt,rq),e(pt,E_),e(E_,aq),e(pt,iq),e(pt,pp),e(pp,lq),e(pp,Sh),e(Sh,dq),e(pp,cq),e(pt,pq),e(pt,hp),e(hp,hq),e(hp,fp),e(fp,fq),e(hp,mq),e(pt,uq),e(pt,z_),e(z_,gq),e(pt,_q),e(pt,Lo),e(Lo,M_),e(M_,mp),e(mp,bq),e(Lo,kq),e(Lo,P_),e(P_,up),e(up,vq),e(Lo,yq),e(Lo,j_),e(j_,gp),e(gp,Tq),e(Lo,wq),e(Lo,q_),e(q_,_p),e(_p,$q),e(pt,xq),e(pt,yo),w(bp,yo,null),e(yo,Fq),e(yo,xs),e(xs,Bq),e(xs,C_),e(C_,Eq),e(xs,zq),e(xs,N_),e(N_,Mq),e(xs,Pq),e(yo,jq),w(Ma,yo,null),e(yo,qq),w(Pa,yo,null),_(i,Vk,k),_(i,Fs,k),e(Fs,ja),e(ja,O_),w(kp,O_,null),e(Fs,Cq),e(Fs,A_),e(A_,Nq),_(i,Jk,k),_(i,ht,k),w(vp,ht,null),e(ht,Oq),e(ht,Bs),e(Bs,Aq),e(Bs,I_),e(I_,Iq),e(Bs,Lq),e(Bs,L_),e(L_,Dq),e(Bs,Sq),e(ht,Uq),e(ht,yp),e(yp,Wq),e(yp,Uh),e(Uh,Hq),e(yp,Kq),e(ht,Rq),e(ht,Tp),e(Tp,Qq),e(Tp,wp),e(wp,Vq),e(Tp,Jq),e(ht,Gq),e(ht,D_),e(D_,Xq),e(ht,Yq),e(ht,Do),e(Do,S_),e(S_,$p),e($p,Zq),e(Do,e3),e(Do,U_),e(U_,xp),e(xp,t3),e(Do,o3),e(Do,W_),e(W_,Fp),e(Fp,n3),e(Do,s3),e(Do,H_),e(H_,Bp),e(Bp,r3),e(ht,a3),e(ht,To),w(Ep,To,null),e(To,i3),e(To,Es),e(Es,l3),e(Es,K_),e(K_,d3),e(Es,c3),e(Es,R_),e(R_,p3),e(Es,h3),e(To,f3),w(qa,To,null),e(To,m3),w(Ca,To,null),Gk=!0},p(i,[k]){const zp={};k&2&&(zp.$$scope={dirty:k,ctx:i}),Cs.$set(zp);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:i}),As.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:i}),Ls.$set(V_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:i}),Ss.$set(J_);const Mp={};k&2&&(Mp.$$scope={dirty:k,ctx:i}),Us.$set(Mp);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:i}),Rs.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:i}),Qs.$set(X_);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:i}),Js.$set(Y_);const Pp={};k&2&&(Pp.$$scope={dirty:k,ctx:i}),Gs.$set(Pp);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:i}),Ys.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:i}),Zs.$set(eb);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:i}),tr.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:i}),or.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:i}),nr.$set(nb);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:i}),rr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:i}),ar.$set(rb);const jp={};k&2&&(jp.$$scope={dirty:k,ctx:i}),lr.$set(jp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:i}),dr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:i}),cr.$set(ib);const zs={};k&2&&(zs.$$scope={dirty:k,ctx:i}),pr.$set(zs);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:i}),hr.$set(lb);const db={};k&2&&(db.$$scope={dirty:k,ctx:i}),mr.$set(db);const qp={};k&2&&(qp.$$scope={dirty:k,ctx:i}),ur.$set(qp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:i}),_r.$set(cb);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:i}),br.$set(pb);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:i}),kr.$set(hb);const So={};k&2&&(So.$$scope={dirty:k,ctx:i}),yr.$set(So);const Uo={};k&2&&(Uo.$$scope={dirty:k,ctx:i}),Tr.$set(Uo);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:i}),wr.$set(fb);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:i}),xr.$set(mb);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:i}),Fr.$set(ub);const Ms={};k&2&&(Ms.$$scope={dirty:k,ctx:i}),Br.$set(Ms);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:i}),zr.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:i}),Mr.$set(_b);const Cp={};k&2&&(Cp.$$scope={dirty:k,ctx:i}),Pr.$set(Cp);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:i}),qr.$set(bb);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:i}),Nr.$set(kb);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:i}),Or.$set(vb);const wt={};k&2&&(wt.$$scope={dirty:k,ctx:i}),Ar.$set(wt);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:i}),Ir.$set(yb);const Np={};k&2&&(Np.$$scope={dirty:k,ctx:i}),Dr.$set(Np);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:i}),Sr.$set(Tb);const Ps={};k&2&&(Ps.$$scope={dirty:k,ctx:i}),Ur.$set(Ps);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:i}),Hr.$set(wb);const Op={};k&2&&(Op.$$scope={dirty:k,ctx:i}),Kr.$set(Op);const Wh={};k&2&&(Wh.$$scope={dirty:k,ctx:i}),Rr.$set(Wh);const $b={};k&2&&($b.$$scope={dirty:k,ctx:i}),Qr.$set($b);const Hh={};k&2&&(Hh.$$scope={dirty:k,ctx:i}),Jr.$set(Hh);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:i}),Gr.$set(xb);const Ap={};k&2&&(Ap.$$scope={dirty:k,ctx:i}),Xr.$set(Ap);const Ip={};k&2&&(Ip.$$scope={dirty:k,ctx:i}),Zr.$set(Ip);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:i}),ea.$set(Fb);const Wo={};k&2&&(Wo.$$scope={dirty:k,ctx:i}),ta.$set(Wo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:i}),oa.$set(Bb);const js={};k&2&&(js.$$scope={dirty:k,ctx:i}),sa.$set(js);const Eb={};k&2&&(Eb.$$scope={dirty:k,ctx:i}),ra.$set(Eb);const zb={};k&2&&(zb.$$scope={dirty:k,ctx:i}),aa.$set(zb);const Mb={};k&2&&(Mb.$$scope={dirty:k,ctx:i}),ia.$set(Mb);const Lp={};k&2&&(Lp.$$scope={dirty:k,ctx:i}),da.$set(Lp);const Pb={};k&2&&(Pb.$$scope={dirty:k,ctx:i}),ca.$set(Pb);const jb={};k&2&&(jb.$$scope={dirty:k,ctx:i}),ha.$set(jb);const qb={};k&2&&(qb.$$scope={dirty:k,ctx:i}),fa.$set(qb);const to={};k&2&&(to.$$scope={dirty:k,ctx:i}),ua.$set(to);const Dp={};k&2&&(Dp.$$scope={dirty:k,ctx:i}),ga.$set(Dp);const Cb={};k&2&&(Cb.$$scope={dirty:k,ctx:i}),ba.$set(Cb);const Sp={};k&2&&(Sp.$$scope={dirty:k,ctx:i}),ka.$set(Sp);const Nb={};k&2&&(Nb.$$scope={dirty:k,ctx:i}),ya.$set(Nb);const qs={};k&2&&(qs.$$scope={dirty:k,ctx:i}),Ta.$set(qs);const Ob={};k&2&&(Ob.$$scope={dirty:k,ctx:i}),$a.$set(Ob);const Up={};k&2&&(Up.$$scope={dirty:k,ctx:i}),xa.$set(Up);const Kh={};k&2&&(Kh.$$scope={dirty:k,ctx:i}),Ba.$set(Kh);const Ab={};k&2&&(Ab.$$scope={dirty:k,ctx:i}),Ea.$set(Ab);const Rh={};k&2&&(Rh.$$scope={dirty:k,ctx:i}),Ma.$set(Rh);const Ib={};k&2&&(Ib.$$scope={dirty:k,ctx:i}),Pa.$set(Ib);const Ho={};k&2&&(Ho.$$scope={dirty:k,ctx:i}),qa.$set(Ho);const Lb={};k&2&&(Lb.$$scope={dirty:k,ctx:i}),Ca.$set(Lb)},i(i){Gk||($(l.$$.fragment,i),$(E.$$.fragment,i),$(ue.$$.fragment,i),$(We.$$.fragment,i),$(Cs.$$.fragment,i),$(li.$$.fragment,i),$(di.$$.fragment,i),$(pi.$$.fragment,i),$(fi.$$.fragment,i),$(ui.$$.fragment,i),$(As.$$.fragment,i),$(gi.$$.fragment,i),$(_i.$$.fragment,i),$(bi.$$.fragment,i),$(yi.$$.fragment,i),$(wi.$$.fragment,i),$(Ls.$$.fragment,i),$($i.$$.fragment,i),$(xi.$$.fragment,i),$(Bi.$$.fragment,i),$(Ss.$$.fragment,i),$(zi.$$.fragment,i),$(Us.$$.fragment,i),$(Mi.$$.fragment,i),$(Pi.$$.fragment,i),$(qi.$$.fragment,i),$(Ni.$$.fragment,i),$(Ai.$$.fragment,i),$(Ii.$$.fragment,i),$(Li.$$.fragment,i),$(Ki.$$.fragment,i),$(Rs.$$.fragment,i),$(Qs.$$.fragment,i),$(Ri.$$.fragment,i),$(Qi.$$.fragment,i),$(Xi.$$.fragment,i),$(Js.$$.fragment,i),$(Gs.$$.fragment,i),$(Yi.$$.fragment,i),$(Zi.$$.fragment,i),$(sl.$$.fragment,i),$(Ys.$$.fragment,i),$(Zs.$$.fragment,i),$(rl.$$.fragment,i),$(al.$$.fragment,i),$(pl.$$.fragment,i),$(tr.$$.fragment,i),$(or.$$.fragment,i),$(nr.$$.fragment,i),$(hl.$$.fragment,i),$(fl.$$.fragment,i),$(bl.$$.fragment,i),$(rr.$$.fragment,i),$(ar.$$.fragment,i),$(kl.$$.fragment,i),$(vl.$$.fragment,i),$($l.$$.fragment,i),$(lr.$$.fragment,i),$(dr.$$.fragment,i),$(cr.$$.fragment,i),$(pr.$$.fragment,i),$(hr.$$.fragment,i),$(xl.$$.fragment,i),$(Fl.$$.fragment,i),$(Ml.$$.fragment,i),$(mr.$$.fragment,i),$(ur.$$.fragment,i),$(Pl.$$.fragment,i),$(jl.$$.fragment,i),$(Ol.$$.fragment,i),$(_r.$$.fragment,i),$(br.$$.fragment,i),$(kr.$$.fragment,i),$(Al.$$.fragment,i),$(Il.$$.fragment,i),$(Ul.$$.fragment,i),$(yr.$$.fragment,i),$(Tr.$$.fragment,i),$(wr.$$.fragment,i),$(Wl.$$.fragment,i),$(Hl.$$.fragment,i),$(xr.$$.fragment,i),$(Vl.$$.fragment,i),$(Fr.$$.fragment,i),$(Br.$$.fragment,i),$(Jl.$$.fragment,i),$(Gl.$$.fragment,i),$(zr.$$.fragment,i),$(ed.$$.fragment,i),$(Mr.$$.fragment,i),$(Pr.$$.fragment,i),$(td.$$.fragment,i),$(od.$$.fragment,i),$(nd.$$.fragment,i),$(qr.$$.fragment,i),$(id.$$.fragment,i),$(ld.$$.fragment,i),$(Nr.$$.fragment,i),$(fd.$$.fragment,i),$(Or.$$.fragment,i),$(Ar.$$.fragment,i),$(Ir.$$.fragment,i),$(md.$$.fragment,i),$(ud.$$.fragment,i),$(Dr.$$.fragment,i),$(vd.$$.fragment,i),$(Sr.$$.fragment,i),$(Ur.$$.fragment,i),$(yd.$$.fragment,i),$(Td.$$.fragment,i),$(Hr.$$.fragment,i),$(Fd.$$.fragment,i),$(Kr.$$.fragment,i),$(Rr.$$.fragment,i),$(Qr.$$.fragment,i),$(Bd.$$.fragment,i),$(Ed.$$.fragment,i),$(Jr.$$.fragment,i),$(jd.$$.fragment,i),$(Gr.$$.fragment,i),$(Xr.$$.fragment,i),$(qd.$$.fragment,i),$(Cd.$$.fragment,i),$(Zr.$$.fragment,i),$(Id.$$.fragment,i),$(ea.$$.fragment,i),$(ta.$$.fragment,i),$(oa.$$.fragment,i),$(Ld.$$.fragment,i),$(Dd.$$.fragment,i),$(sa.$$.fragment,i),$(Hd.$$.fragment,i),$(ra.$$.fragment,i),$(aa.$$.fragment,i),$(ia.$$.fragment,i),$(Kd.$$.fragment,i),$(Rd.$$.fragment,i),$(ec.$$.fragment,i),$(da.$$.fragment,i),$(ca.$$.fragment,i),$(tc.$$.fragment,i),$(oc.$$.fragment,i),$(cc.$$.fragment,i),$(ha.$$.fragment,i),$(fa.$$.fragment,i),$(pc.$$.fragment,i),$(hc.$$.fragment,i),$(vc.$$.fragment,i),$(ua.$$.fragment,i),$(ga.$$.fragment,i),$(yc.$$.fragment,i),$(Tc.$$.fragment,i),$(Pc.$$.fragment,i),$(ba.$$.fragment,i),$(ka.$$.fragment,i),$(jc.$$.fragment,i),$(qc.$$.fragment,i),$(Uc.$$.fragment,i),$(ya.$$.fragment,i),$(Ta.$$.fragment,i),$(Wc.$$.fragment,i),$(Hc.$$.fragment,i),$(Yc.$$.fragment,i),$($a.$$.fragment,i),$(xa.$$.fragment,i),$(Zc.$$.fragment,i),$(ep.$$.fragment,i),$(lp.$$.fragment,i),$(Ba.$$.fragment,i),$(Ea.$$.fragment,i),$(dp.$$.fragment,i),$(cp.$$.fragment,i),$(bp.$$.fragment,i),$(Ma.$$.fragment,i),$(Pa.$$.fragment,i),$(kp.$$.fragment,i),$(vp.$$.fragment,i),$(Ep.$$.fragment,i),$(qa.$$.fragment,i),$(Ca.$$.fragment,i),Gk=!0)},o(i){x(l.$$.fragment,i),x(E.$$.fragment,i),x(ue.$$.fragment,i),x(We.$$.fragment,i),x(Cs.$$.fragment,i),x(li.$$.fragment,i),x(di.$$.fragment,i),x(pi.$$.fragment,i),x(fi.$$.fragment,i),x(ui.$$.fragment,i),x(As.$$.fragment,i),x(gi.$$.fragment,i),x(_i.$$.fragment,i),x(bi.$$.fragment,i),x(yi.$$.fragment,i),x(wi.$$.fragment,i),x(Ls.$$.fragment,i),x($i.$$.fragment,i),x(xi.$$.fragment,i),x(Bi.$$.fragment,i),x(Ss.$$.fragment,i),x(zi.$$.fragment,i),x(Us.$$.fragment,i),x(Mi.$$.fragment,i),x(Pi.$$.fragment,i),x(qi.$$.fragment,i),x(Ni.$$.fragment,i),x(Ai.$$.fragment,i),x(Ii.$$.fragment,i),x(Li.$$.fragment,i),x(Ki.$$.fragment,i),x(Rs.$$.fragment,i),x(Qs.$$.fragment,i),x(Ri.$$.fragment,i),x(Qi.$$.fragment,i),x(Xi.$$.fragment,i),x(Js.$$.fragment,i),x(Gs.$$.fragment,i),x(Yi.$$.fragment,i),x(Zi.$$.fragment,i),x(sl.$$.fragment,i),x(Ys.$$.fragment,i),x(Zs.$$.fragment,i),x(rl.$$.fragment,i),x(al.$$.fragment,i),x(pl.$$.fragment,i),x(tr.$$.fragment,i),x(or.$$.fragment,i),x(nr.$$.fragment,i),x(hl.$$.fragment,i),x(fl.$$.fragment,i),x(bl.$$.fragment,i),x(rr.$$.fragment,i),x(ar.$$.fragment,i),x(kl.$$.fragment,i),x(vl.$$.fragment,i),x($l.$$.fragment,i),x(lr.$$.fragment,i),x(dr.$$.fragment,i),x(cr.$$.fragment,i),x(pr.$$.fragment,i),x(hr.$$.fragment,i),x(xl.$$.fragment,i),x(Fl.$$.fragment,i),x(Ml.$$.fragment,i),x(mr.$$.fragment,i),x(ur.$$.fragment,i),x(Pl.$$.fragment,i),x(jl.$$.fragment,i),x(Ol.$$.fragment,i),x(_r.$$.fragment,i),x(br.$$.fragment,i),x(kr.$$.fragment,i),x(Al.$$.fragment,i),x(Il.$$.fragment,i),x(Ul.$$.fragment,i),x(yr.$$.fragment,i),x(Tr.$$.fragment,i),x(wr.$$.fragment,i),x(Wl.$$.fragment,i),x(Hl.$$.fragment,i),x(xr.$$.fragment,i),x(Vl.$$.fragment,i),x(Fr.$$.fragment,i),x(Br.$$.fragment,i),x(Jl.$$.fragment,i),x(Gl.$$.fragment,i),x(zr.$$.fragment,i),x(ed.$$.fragment,i),x(Mr.$$.fragment,i),x(Pr.$$.fragment,i),x(td.$$.fragment,i),x(od.$$.fragment,i),x(nd.$$.fragment,i),x(qr.$$.fragment,i),x(id.$$.fragment,i),x(ld.$$.fragment,i),x(Nr.$$.fragment,i),x(fd.$$.fragment,i),x(Or.$$.fragment,i),x(Ar.$$.fragment,i),x(Ir.$$.fragment,i),x(md.$$.fragment,i),x(ud.$$.fragment,i),x(Dr.$$.fragment,i),x(vd.$$.fragment,i),x(Sr.$$.fragment,i),x(Ur.$$.fragment,i),x(yd.$$.fragment,i),x(Td.$$.fragment,i),x(Hr.$$.fragment,i),x(Fd.$$.fragment,i),x(Kr.$$.fragment,i),x(Rr.$$.fragment,i),x(Qr.$$.fragment,i),x(Bd.$$.fragment,i),x(Ed.$$.fragment,i),x(Jr.$$.fragment,i),x(jd.$$.fragment,i),x(Gr.$$.fragment,i),x(Xr.$$.fragment,i),x(qd.$$.fragment,i),x(Cd.$$.fragment,i),x(Zr.$$.fragment,i),x(Id.$$.fragment,i),x(ea.$$.fragment,i),x(ta.$$.fragment,i),x(oa.$$.fragment,i),x(Ld.$$.fragment,i),x(Dd.$$.fragment,i),x(sa.$$.fragment,i),x(Hd.$$.fragment,i),x(ra.$$.fragment,i),x(aa.$$.fragment,i),x(ia.$$.fragment,i),x(Kd.$$.fragment,i),x(Rd.$$.fragment,i),x(ec.$$.fragment,i),x(da.$$.fragment,i),x(ca.$$.fragment,i),x(tc.$$.fragment,i),x(oc.$$.fragment,i),x(cc.$$.fragment,i),x(ha.$$.fragment,i),x(fa.$$.fragment,i),x(pc.$$.fragment,i),x(hc.$$.fragment,i),x(vc.$$.fragment,i),x(ua.$$.fragment,i),x(ga.$$.fragment,i),x(yc.$$.fragment,i),x(Tc.$$.fragment,i),x(Pc.$$.fragment,i),x(ba.$$.fragment,i),x(ka.$$.fragment,i),x(jc.$$.fragment,i),x(qc.$$.fragment,i),x(Uc.$$.fragment,i),x(ya.$$.fragment,i),x(Ta.$$.fragment,i),x(Wc.$$.fragment,i),x(Hc.$$.fragment,i),x(Yc.$$.fragment,i),x($a.$$.fragment,i),x(xa.$$.fragment,i),x(Zc.$$.fragment,i),x(ep.$$.fragment,i),x(lp.$$.fragment,i),x(Ba.$$.fragment,i),x(Ea.$$.fragment,i),x(dp.$$.fragment,i),x(cp.$$.fragment,i),x(bp.$$.fragment,i),x(Ma.$$.fragment,i),x(Pa.$$.fragment,i),x(kp.$$.fragment,i),x(vp.$$.fragment,i),x(Ep.$$.fragment,i),x(qa.$$.fragment,i),x(Ca.$$.fragment,i),Gk=!1},d(i){t(d),i&&t(g),i&&t(f),F(l),i&&t(ye),i&&t(S),F(E),i&&t(Te),i&&t(U),i&&t(we),i&&t(H),i&&t($e),i&&t(K),i&&t(oe),i&&t(j),i&&t(V),i&&t(ge),i&&t(J),i&&t(he),i&&t(xe),i&&t(D),i&&t(C),i&&t(de),F(ue),i&&t(ne),i&&t(ve),F(We),F(Cs),i&&t(Db),i&&t(fn),F(li),i&&t(Sb),i&&t(tt),F(di),F(pi),F(fi),F(ui),F(As),F(gi),i&&t(Ub),i&&t(un),F(_i),i&&t(Wb),i&&t(xt),F(bi),F(yi),F(wi),F(Ls),i&&t(Hb),i&&t(_n),F($i),i&&t(Kb),i&&t(Ft),F(xi),F(Bi),F(Ss),F(zi),F(Us),i&&t(Rb),i&&t(vn),F(Mi),i&&t(Qb),i&&t(yn),F(Pi),i&&t(Vb),i&&t(Tn),F(qi),i&&t(Jb),i&&t(Po),F(Ni),F(Ai),i&&t(Gb),i&&t(wn),F(Ii),i&&t(Xb),i&&t(ot),F(Li),F(Ki),F(Rs),F(Qs),i&&t(Yb),i&&t(xn),F(Ri),i&&t(Zb),i&&t(Bt),F(Qi),F(Xi),F(Js),F(Gs),i&&t(ek),i&&t(En),F(Yi),i&&t(tk),i&&t(Et),F(Zi),F(sl),F(Ys),F(Zs),i&&t(ok),i&&t(Mn),F(rl),i&&t(nk),i&&t(zt),F(al),F(pl),F(tr),F(or),F(nr),i&&t(sk),i&&t(jn),F(hl),i&&t(rk),i&&t(Mt),F(fl),F(bl),F(rr),F(ar),i&&t(ak),i&&t(Cn),F(kl),i&&t(ik),i&&t(Pt),F(vl),F($l),F(lr),F(dr),F(cr),F(pr),F(hr),i&&t(lk),i&&t(On),F(xl),i&&t(dk),i&&t(jt),F(Fl),F(Ml),F(mr),F(ur),i&&t(ck),i&&t(In),F(Pl),i&&t(pk),i&&t(qt),F(jl),F(Ol),F(_r),F(br),F(kr),i&&t(hk),i&&t(Dn),F(Al),i&&t(fk),i&&t(Ct),F(Il),F(Ul),F(yr),F(Tr),F(wr),i&&t(mk),i&&t(Wn),F(Wl),i&&t(uk),i&&t(ut),F(Hl),F(xr),F(Vl),F(Fr),F(Br),i&&t(gk),i&&t(Kn),F(Jl),i&&t(_k),i&&t(gt),F(Gl),F(zr),F(ed),F(Mr),F(Pr),i&&t(bk),i&&t(Vn),F(td),i&&t(kk),i&&t(Jn),F(od),F(nd),F(qr),i&&t(vk),i&&t(Gn),F(id),i&&t(yk),i&&t(_t),F(ld),F(Nr),F(fd),F(Or),F(Ar),F(Ir),i&&t(Tk),i&&t(Yn),F(md),i&&t(wk),i&&t(bt),F(ud),F(Dr),F(vd),F(Sr),F(Ur),i&&t($k),i&&t(es),F(yd),i&&t(xk),i&&t(kt),F(Td),F(Hr),F(Fd),F(Kr),F(Rr),F(Qr),i&&t(Fk),i&&t(os),F(Bd),i&&t(Bk),i&&t(vt),F(Ed),F(Jr),F(jd),F(Gr),F(Xr),i&&t(Ek),i&&t(ss),F(qd),i&&t(zk),i&&t(yt),F(Cd),F(Zr),F(Id),F(ea),F(ta),F(oa),i&&t(Mk),i&&t(as),F(Ld),i&&t(Pk),i&&t(Tt),F(Dd),F(sa),F(Hd),F(ra),F(aa),F(ia),i&&t(jk),i&&t(ds),F(Kd),i&&t(qk),i&&t(st),F(Rd),F(ec),F(da),F(ca),i&&t(Ck),i&&t(ps),F(tc),i&&t(Nk),i&&t(rt),F(oc),F(cc),F(ha),F(fa),i&&t(Ok),i&&t(ms),F(pc),i&&t(Ak),i&&t(at),F(hc),F(vc),F(ua),F(ga),i&&t(Ik),i&&t(gs),F(yc),i&&t(Lk),i&&t(it),F(Tc),F(Pc),F(ba),F(ka),i&&t(Dk),i&&t(bs),F(jc),i&&t(Sk),i&&t(lt),F(qc),F(Uc),F(ya),F(Ta),i&&t(Uk),i&&t(vs),F(Wc),i&&t(Wk),i&&t(dt),F(Hc),F(Yc),F($a),F(xa),i&&t(Hk),i&&t(Ts),F(Zc),i&&t(Kk),i&&t(ct),F(ep),F(lp),F(Ba),F(Ea),i&&t(Rk),i&&t($s),F(dp),i&&t(Qk),i&&t(pt),F(cp),F(bp),F(Ma),F(Pa),i&&t(Vk),i&&t(Fs),F(kp),i&&t(Jk),i&&t(ht),F(vp),F(Ep),F(qa),F(Ca)}}}const _A={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bA(B){return Q7(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xA extends W7{constructor(d){super();H7(this,d,bA,gA,K7,{})}}export{xA as default,_A as metadata};
