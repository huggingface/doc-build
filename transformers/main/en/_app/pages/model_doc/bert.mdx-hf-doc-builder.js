import{S as W7,i as H7,s as K7,e as s,k as c,w as T,t as o,M as R7,c as r,d as t,m as p,a,x as v,h as n,b as u,G as e,g as _,y as w,q as $,o as x,B as F,v as Q7,L as ie}from"../../chunks/vendor-hf-doc-builder.js";import{T as Se}from"../../chunks/Tip-hf-doc-builder.js";import{D as A}from"../../chunks/Docstring-hf-doc-builder.js";import{C as le}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as Ue}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{E as ae}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function V7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertModel, BertConfig

# Initializing a BERT bert-base-uncased style configuration
configuration = BertConfig()

# Initializing a model from the bert-base-uncased style configuration
model = BertModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertModel, BertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a BERT bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = BertConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the bert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function J7(B){let d,g,m,f,b;return f=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function G7(B){let d,g,m,f,b;return f=new le({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),{c(){d=s("p"),g=o("pair mask has the following format:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"pair mask has the following format:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function X7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFBertTokenizer

tf_tokenizer = TFBertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function Y7(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, TFBertTokenizer

tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
tf_tokenizer = TFBertTokenizer.from_tokenizer(tokenizer)`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function Z7(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function eO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function tO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function oO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForPreTraining
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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function nO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function sO(B){let d,g,m,f,b;return f=new le({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function rO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function aO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function iO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function lO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function dO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForNextSentencePrediction
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function cO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function pO(B){let d,g,m,f,b;return f=new le({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of single-label classification:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of single-label classification:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function hO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = BertForSequenceClassification.from_pretrained("textattack/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = torch.tensor([1])\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = BertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;textattack/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function mO(B){let d,g,m,f,b;return f=new le({props:{code:`import torch
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example of multi-label classification:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example of multi-label classification:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function fO(B){let d,g;return d=new le({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function uO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function gO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function _O(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function bO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function kO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function yO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function TO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, BertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function vO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function wO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function $O(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function xO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function FO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function BO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function EO(B){let d,g,m,f,b;return f=new le({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits, seq_relationship_logits = outputs[:<span class="hljs-number">2</span>]`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function zO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function MO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function PO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function jO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertForMaskedLM
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
<span class="hljs-string">&#x27;paris&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function qO(B){let d,g;return d=new le({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.88</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function CO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function NO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function OO(B){let d,g,m,f,b;return f=new le({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]  <span class="hljs-comment"># the next sentence was random</span>`}}),{c(){d=s("p"),g=o("Examples:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Examples:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function AO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function IO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function LO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertForSequenceClassification
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
<span class="hljs-string">&#x27;LABEL_1&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function DO(B){let d,g;return d=new le({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = TFBertForSequenceClassification.from_pretrained("ydshieh/bert-base-uncased-yelp-polarity", num_labels=num_labels)\n\nlabels = tf.constant(1)\nloss = model(**inputs, labels=labels).loss\nround(float(loss), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/bert-base-uncased-yelp-polarity&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function SO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function UO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function WO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function HO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function KO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function RO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertForTokenClassification
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
[<span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;I-ORG&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;O&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>, <span class="hljs-string">&#x27;I-LOC&#x27;</span>] `}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function QO(B){let d,g;return d=new le({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
<span class="hljs-number">0.01</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function VO(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue;return{c(){d=s("p"),g=o("TensorFlow models and layers in "),m=s("code"),f=o("transformers"),b=o(" accept two formats as input:"),l=c(),h=s("ul"),z=s("li"),Fe=o("having all inputs as keyword arguments (like PyTorch models), or"),Te=c(),S=s("li"),pe=o("having all inputs as a list, tuple or dict in the first positional argument."),ee=c(),E=s("p"),Be=o(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=s("code"),Ee=o("model.fit()"),ve=o(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=s("code"),ze=o("model.fit()"),me=o(` supports! If, however, you want to use the second
format outside of Keras methods like `),G=s("code"),Me=o("fit()"),we=o(" and "),H=s("code"),Pe=o("predict()"),$e=o(`, such as when creating your own layers or models with
the Keras `),K=s("code"),_e=o("Functional"),je=o(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),oe=c(),j=s("ul"),q=s("li"),qe=o("a single Tensor with "),V=s("code"),ge=o("input_ids"),Ce=o(" only and nothing else: "),J=s("code"),he=o("model(input_ids)"),be=c(),N=s("li"),Ne=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=s("code"),Oe=o("model([input_ids, attention_mask])"),xe=o(" or "),D=s("code"),Ae=o("model([input_ids, attention_mask, token_type_ids])"),fe=c(),L=s("li"),Ie=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=s("code"),Le=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),se=c(),C=s("p"),de=o(`Note that when creating models and layers with
`),O=s("a"),ke=o("subclassing"),ue=o(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(y){d=r(y,"P",{});var M=a(d);g=n(M,"TensorFlow models and layers in "),m=r(M,"CODE",{});var Re=a(m);f=n(Re,"transformers"),Re.forEach(t),b=n(M," accept two formats as input:"),M.forEach(t),l=p(y),h=r(y,"UL",{});var ne=a(h);z=r(ne,"LI",{});var ye=a(z);Fe=n(ye,"having all inputs as keyword arguments (like PyTorch models), or"),ye.forEach(t),Te=p(ne),S=r(ne,"LI",{});var We=a(S);pe=n(We,"having all inputs as a list, tuple or dict in the first positional argument."),We.forEach(t),ne.forEach(t),ee=p(y),E=r(y,"P",{});var P=a(E);Be=n(P,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),R=r(P,"CODE",{});var De=a(R);Ee=n(De,"model.fit()"),De.forEach(t),ve=n(P,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),U=r(P,"CODE",{});var Qe=a(U);ze=n(Qe,"model.fit()"),Qe.forEach(t),me=n(P,` supports! If, however, you want to use the second
format outside of Keras methods like `),G=r(P,"CODE",{});var Ke=a(G);Me=n(Ke,"fit()"),Ke.forEach(t),we=n(P," and "),H=r(P,"CODE",{});var Ve=a(H);Pe=n(Ve,"predict()"),Ve.forEach(t),$e=n(P,`, such as when creating your own layers or models with
the Keras `),K=r(P,"CODE",{});var Je=a(K);_e=n(Je,"Functional"),Je.forEach(t),je=n(P,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),P.forEach(t),oe=p(y),j=r(y,"UL",{});var I=a(j);q=r(I,"LI",{});var X=a(q);qe=n(X,"a single Tensor with "),V=r(X,"CODE",{});var Ge=a(V);ge=n(Ge,"input_ids"),Ge.forEach(t),Ce=n(X," only and nothing else: "),J=r(X,"CODE",{});var He=a(J);he=n(He,"model(input_ids)"),He.forEach(t),X.forEach(t),be=p(I),N=r(I,"LI",{});var Y=a(N);Ne=n(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(Y,"CODE",{});var Xe=a(Q);Oe=n(Xe,"model([input_ids, attention_mask])"),Xe.forEach(t),xe=n(Y," or "),D=r(Y,"CODE",{});var Ye=a(D);Ae=n(Ye,"model([input_ids, attention_mask, token_type_ids])"),Ye.forEach(t),Y.forEach(t),fe=p(I),L=r(I,"LI",{});var ce=a(L);Ie=n(ce,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(ce,"CODE",{});var Ze=a(W);Le=n(Ze,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ze.forEach(t),ce.forEach(t),I.forEach(t),se=p(y),C=r(y,"P",{});var Z=a(C);de=n(Z,`Note that when creating models and layers with
`),O=r(Z,"A",{href:!0,rel:!0});var et=a(O);ke=n(et,"subclassing"),et.forEach(t),ue=n(Z,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Z.forEach(t),this.h()},h(){u(O,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),u(O,"rel","nofollow")},m(y,M){_(y,d,M),e(d,g),e(d,m),e(m,f),e(d,b),_(y,l,M),_(y,h,M),e(h,z),e(z,Fe),e(h,Te),e(h,S),e(S,pe),_(y,ee,M),_(y,E,M),e(E,Be),e(E,R),e(R,Ee),e(E,ve),e(E,U),e(U,ze),e(E,me),e(E,G),e(G,Me),e(E,we),e(E,H),e(H,Pe),e(E,$e),e(E,K),e(K,_e),e(E,je),_(y,oe,M),_(y,j,M),e(j,q),e(q,qe),e(q,V),e(V,ge),e(q,Ce),e(q,J),e(J,he),e(j,be),e(j,N),e(N,Ne),e(N,Q),e(Q,Oe),e(N,xe),e(N,D),e(D,Ae),e(j,fe),e(j,L),e(L,Ie),e(L,W),e(W,Le),_(y,se,M),_(y,C,M),e(C,de),e(C,O),e(O,ke),e(C,ue)},d(y){y&&t(d),y&&t(l),y&&t(h),y&&t(ee),y&&t(E),y&&t(oe),y&&t(j),y&&t(se),y&&t(C)}}}function JO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function GO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, TFBertForQuestionAnswering
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
<span class="hljs-string">&#x27;a nice puppet&#x27;</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function XO(B){let d,g;return d=new le({props:{code:`# target is "nice puppet"
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
<span class="hljs-number">7.41</span>`}}),{c(){T(d.$$.fragment)},l(m){v(d.$$.fragment,m)},m(m,f){w(d,m,f),g=!0},p:ie,i(m){g||($(d.$$.fragment,m),g=!0)},o(m){x(d.$$.fragment,m),g=!1},d(m){F(d,m)}}}function YO(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function ZO(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertModel

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertModel.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertModel.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function eA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function tA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForPreTraining

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
<span class="hljs-meta">&gt;&gt;&gt; </span>seq_relationship_logits = outputs.seq_relationship_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function oA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function nA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function sA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function rA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForMaskedLM

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForMaskedLM.from_pretrained("bert-base-uncased")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForMaskedLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function aA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function iA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForNextSentencePrediction

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
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">assert</span> logits[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>] &lt; logits[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]  <span class="hljs-comment"># next sentence was random</span>`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function lA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function dA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForSequenceClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForSequenceClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function cA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function pA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForMultipleChoice

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

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function hA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function mA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForTokenClassification

tokenizer = BertTokenizer.from_pretrained("bert-base-uncased")
model = FlaxBertForTokenClassification.from_pretrained("bert-base-uncased")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")

outputs = model(**inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> BertTokenizer, FlaxBertForTokenClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = BertTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function fA(B){let d,g,m,f,b;return{c(){d=s("p"),g=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=s("code"),f=o("Module"),b=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(h,"CODE",{});var z=a(m);f=n(z,"Module"),z.forEach(t),b=n(h,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),h.forEach(t)},m(l,h){_(l,d,h),e(d,g),e(d,m),e(m,f),e(d,b)},d(l){l&&t(d)}}}function uA(B){let d,g,m,f,b;return f=new le({props:{code:`from transformers import BertTokenizer, FlaxBertForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),{c(){d=s("p"),g=o("Example:"),m=c(),T(f.$$.fragment)},l(l){d=r(l,"P",{});var h=a(d);g=n(h,"Example:"),h.forEach(t),m=p(l),v(f.$$.fragment,l)},m(l,h){_(l,d,h),e(d,g),_(l,m,h),w(f,l,h),b=!0},p:ie,i(l){b||($(f.$$.fragment,l),b=!0)},o(l){x(f.$$.fragment,l),b=!1},d(l){l&&t(d),l&&t(m),F(f,l)}}}function gA(B){let d,g,m,f,b,l,h,z,Fe,Te,S,pe,ee,E,Be,R,Ee,ve,U,ze,me,G,Me,we,H,Pe,$e,K,_e,je,oe,j,q,qe,V,ge,Ce,J,he,be,N,Ne,Q,Oe,xe,D,Ae,fe,L,Ie,W,Le,se,C,de,O,ke,ue,y,M,Re,ne,ye,We,P,De,Qe,Ke,Ve,Je,I,X,Ge,He,Y,Xe,Ye,ce,Ze,Z,et,HT,Wp,KT,RT,QT,Cs,Db,mn,Ns,Pm,li,VT,jm,JT,Sb,tt,di,GT,qm,XT,YT,ci,ZT,Hp,ev,tv,ov,Ko,pi,nv,Cm,sv,rv,hi,Kp,av,Nm,iv,lv,Rp,dv,Om,cv,pv,Os,mi,hv,fi,mv,Am,fv,uv,gv,oo,ui,_v,Im,bv,kv,As,yv,fn,Tv,Lm,vv,wv,Dm,$v,xv,Fv,Qp,gi,Ub,un,Is,Sm,_i,Bv,Um,Ev,Wb,xt,bi,zv,ki,Mv,Wm,Pv,jv,qv,yi,Cv,Vp,Nv,Ov,Av,Ro,Ti,Iv,Hm,Lv,Dv,vi,Jp,Sv,Km,Uv,Wv,Gp,Hv,Rm,Kv,Rv,no,wi,Qv,Qm,Vv,Jv,Ls,Gv,gn,Xv,Vm,Yv,Zv,Jm,ew,tw,Hb,_n,Ds,Gm,$i,ow,Xm,nw,Kb,Ft,xi,sw,bn,rw,Ym,aw,iw,Zm,lw,dw,cw,Fi,pw,ef,hw,mw,fw,Qo,Bi,uw,Ei,gw,tf,_w,bw,kw,Ss,yw,Vo,zi,Tw,kn,vw,of,ww,$w,nf,xw,Fw,Bw,Us,Rb,yn,Ws,sf,Mi,Ew,rf,zw,Qb,Tn,Pi,Mw,ji,Pw,Xp,jw,qw,Vb,vn,qi,Cw,Ci,Nw,Yp,Ow,Aw,Jb,Po,Ni,Iw,Oi,Lw,Zp,Dw,Sw,Uw,Hs,Ai,Ww,af,Hw,Gb,wn,Ks,lf,Ii,Kw,df,Rw,Xb,ot,Li,Qw,cf,Vw,Jw,Di,Gw,eh,Xw,Yw,Zw,Si,e1,Ui,t1,o1,n1,Wi,s1,Hi,r1,a1,i1,ft,l1,pf,d1,c1,hf,p1,h1,mf,m1,f1,ff,u1,g1,uf,_1,b1,gf,k1,y1,T1,so,Ki,v1,$n,w1,th,$1,x1,_f,F1,B1,E1,Rs,z1,Qs,Yb,xn,Vs,bf,Ri,M1,kf,P1,Zb,Bt,Qi,j1,Fn,q1,yf,C1,N1,Tf,O1,A1,I1,Vi,L1,oh,D1,S1,U1,Ji,W1,Gi,H1,K1,R1,ro,Xi,Q1,Bn,V1,nh,J1,G1,vf,X1,Y1,Z1,Js,e$,Gs,ek,En,Xs,wf,Yi,t$,$f,o$,tk,Et,Zi,n$,el,s$,xf,r$,a$,i$,tl,l$,sh,d$,c$,p$,ol,h$,nl,m$,f$,u$,ao,sl,g$,zn,_$,rh,b$,k$,Ff,y$,T$,v$,Ys,w$,Zs,ok,Mn,er,Bf,rl,$$,Ef,x$,nk,zt,al,F$,il,B$,zf,E$,z$,M$,ll,P$,ah,j$,q$,C$,dl,N$,cl,O$,A$,I$,Nt,pl,L$,Pn,D$,ih,S$,U$,Mf,W$,H$,K$,tr,R$,or,Q$,nr,sk,jn,sr,Pf,hl,V$,jf,J$,rk,Mt,ml,G$,fl,X$,qf,Y$,Z$,e2,ul,t2,lh,o2,n2,s2,gl,r2,_l,a2,i2,l2,io,bl,d2,qn,c2,dh,p2,h2,Cf,m2,f2,u2,rr,g2,ar,ak,Cn,ir,Nf,kl,_2,Of,b2,ik,Pt,yl,k2,Af,y2,T2,Tl,v2,ch,w2,$2,x2,vl,F2,wl,B2,E2,z2,mt,$l,M2,Nn,P2,ph,j2,q2,If,C2,N2,O2,lr,A2,dr,I2,cr,L2,pr,D2,hr,lk,On,mr,Lf,xl,S2,Df,U2,dk,jt,Fl,W2,Sf,H2,K2,Bl,R2,hh,Q2,V2,J2,El,G2,zl,X2,Y2,Z2,lo,Ml,ex,An,tx,mh,ox,nx,Uf,sx,rx,ax,fr,ix,ur,ck,In,gr,Wf,Pl,lx,Hf,dx,pk,qt,jl,cx,Kf,px,hx,ql,mx,fh,fx,ux,gx,Cl,_x,Nl,bx,kx,yx,Ot,Ol,Tx,Ln,vx,uh,wx,$x,Rf,xx,Fx,Bx,_r,Ex,br,zx,kr,hk,Dn,yr,Qf,Al,Mx,Vf,Px,mk,Ct,Il,jx,Sn,qx,Jf,Cx,Nx,Gf,Ox,Ax,Ix,Ll,Lx,gh,Dx,Sx,Ux,Dl,Wx,Sl,Hx,Kx,Rx,At,Ul,Qx,Un,Vx,_h,Jx,Gx,Xf,Xx,Yx,Zx,Tr,eF,vr,tF,wr,fk,Wn,$r,Yf,Wl,oF,Zf,nF,uk,ut,Hl,sF,eu,rF,aF,Kl,iF,bh,lF,dF,cF,Rl,pF,Ql,hF,mF,fF,xr,uF,co,Vl,gF,Hn,_F,kh,bF,kF,tu,yF,TF,vF,Fr,wF,Br,gk,Kn,Er,ou,Jl,$F,nu,xF,_k,gt,Gl,FF,Rn,BF,su,EF,zF,ru,MF,PF,jF,Xl,qF,yh,CF,NF,OF,Yl,AF,Zl,IF,LF,DF,zr,SF,po,ed,UF,Qn,WF,Th,HF,KF,au,RF,QF,VF,Mr,JF,Pr,bk,Vn,jr,iu,td,GF,lu,XF,kk,Jn,od,YF,It,nd,ZF,nt,e0,du,t0,o0,cu,n0,s0,pu,r0,a0,hu,i0,l0,mu,d0,c0,fu,p0,h0,uu,m0,f0,u0,sd,rd,g0,gu,_0,b0,k0,ad,y0,_u,T0,v0,w0,te,$0,bu,x0,F0,ku,B0,E0,yu,z0,M0,Tu,P0,j0,vu,q0,C0,wu,N0,O0,$u,A0,I0,xu,L0,D0,Fu,S0,U0,Bu,W0,H0,Eu,K0,R0,zu,Q0,V0,Mu,J0,G0,Pu,X0,Y0,ju,Z0,eB,qu,tB,oB,Cu,nB,sB,Nu,rB,aB,Ou,iB,lB,Au,dB,cB,pB,qr,yk,Gn,Cr,Iu,id,hB,Lu,mB,Tk,_t,ld,fB,dd,uB,Du,gB,_B,bB,cd,kB,vh,yB,TB,vB,pd,wB,hd,$B,xB,FB,Nr,BB,Lt,md,EB,Xn,zB,wh,MB,PB,Su,jB,qB,CB,Or,NB,Ar,OB,Ir,vk,Yn,Lr,Uu,fd,AB,Wu,IB,wk,bt,ud,LB,gd,DB,Hu,SB,UB,WB,_d,HB,$h,KB,RB,QB,bd,VB,kd,JB,GB,XB,Dr,YB,ho,yd,ZB,Zn,eE,xh,tE,oE,Ku,nE,sE,rE,Sr,aE,Ur,$k,es,Wr,Ru,Td,iE,Qu,lE,xk,kt,vd,dE,Vu,cE,pE,wd,hE,Fh,mE,fE,uE,$d,gE,xd,_E,bE,kE,Hr,yE,Dt,Fd,TE,ts,vE,Bh,wE,$E,Ju,xE,FE,BE,Kr,EE,Rr,zE,Qr,Fk,os,Vr,Gu,Bd,ME,Xu,PE,Bk,yt,Ed,jE,Yu,qE,CE,zd,NE,Eh,OE,AE,IE,Md,LE,Pd,DE,SE,UE,Jr,WE,mo,jd,HE,ns,KE,zh,RE,QE,Zu,VE,JE,GE,Gr,XE,Xr,Ek,ss,Yr,eg,qd,YE,tg,ZE,zk,Tt,Cd,ez,og,tz,oz,Nd,nz,Mh,sz,rz,az,Od,iz,Ad,lz,dz,cz,Zr,pz,St,Id,hz,rs,mz,Ph,fz,uz,ng,gz,_z,bz,ea,kz,ta,yz,oa,Mk,as,na,sg,Ld,Tz,rg,vz,Pk,vt,Dd,wz,is,$z,ag,xz,Fz,ig,Bz,Ez,zz,Sd,Mz,jh,Pz,jz,qz,Ud,Cz,Wd,Nz,Oz,Az,sa,Iz,Ut,Hd,Lz,ls,Dz,qh,Sz,Uz,lg,Wz,Hz,Kz,ra,Rz,aa,Qz,ia,jk,ds,la,dg,Kd,Vz,cg,Jz,qk,st,Rd,Gz,pg,Xz,Yz,Qd,Zz,Ch,eM,tM,oM,Vd,nM,Jd,sM,rM,aM,hg,iM,lM,jo,mg,Gd,dM,cM,fg,Xd,pM,hM,ug,Yd,mM,fM,gg,Zd,uM,gM,fo,ec,_M,cs,bM,_g,kM,yM,bg,TM,vM,wM,da,$M,ca,Ck,ps,pa,kg,tc,xM,yg,FM,Nk,rt,oc,BM,hs,EM,Tg,zM,MM,vg,PM,jM,qM,nc,CM,Nh,NM,OM,AM,sc,IM,rc,LM,DM,SM,wg,UM,WM,qo,$g,ac,HM,KM,xg,ic,RM,QM,Fg,lc,VM,JM,Bg,dc,GM,XM,uo,cc,YM,ms,ZM,Eg,e4,t4,zg,o4,n4,s4,ha,r4,ma,Ok,fs,fa,Mg,pc,a4,Pg,i4,Ak,at,hc,l4,jg,d4,c4,mc,p4,Oh,h4,m4,f4,fc,u4,uc,g4,_4,b4,qg,k4,y4,Co,Cg,gc,T4,v4,Ng,_c,w4,$4,Og,bc,x4,F4,Ag,kc,B4,E4,go,yc,z4,us,M4,Ig,P4,j4,Lg,q4,C4,N4,ua,O4,ga,Ik,gs,_a,Dg,Tc,A4,Sg,I4,Lk,it,vc,L4,wc,D4,Ug,S4,U4,W4,$c,H4,Ah,K4,R4,Q4,xc,V4,Fc,J4,G4,X4,Wg,Y4,Z4,No,Hg,Bc,eP,tP,Kg,Ec,oP,nP,Rg,zc,sP,rP,Qg,Mc,aP,iP,_o,Pc,lP,_s,dP,Vg,cP,pP,Jg,hP,mP,fP,ba,uP,ka,Dk,bs,ya,Gg,jc,gP,Xg,_P,Sk,lt,qc,bP,Cc,kP,Yg,yP,TP,vP,Nc,wP,Ih,$P,xP,FP,Oc,BP,Ac,EP,zP,MP,Zg,PP,jP,Oo,e_,Ic,qP,CP,t_,Lc,NP,OP,o_,Dc,AP,IP,n_,Sc,LP,DP,bo,Uc,SP,ks,UP,s_,WP,HP,r_,KP,RP,QP,Ta,VP,va,Uk,ys,wa,a_,Wc,JP,i_,GP,Wk,dt,Hc,XP,l_,YP,ZP,Kc,ej,Lh,tj,oj,nj,Rc,sj,Qc,rj,aj,ij,d_,lj,dj,Ao,c_,Vc,cj,pj,p_,Jc,hj,mj,h_,Gc,fj,uj,m_,Xc,gj,_j,ko,Yc,bj,Ts,kj,f_,yj,Tj,u_,vj,wj,$j,$a,xj,xa,Hk,vs,Fa,g_,Zc,Fj,__,Bj,Kk,ct,ep,Ej,b_,zj,Mj,tp,Pj,Dh,jj,qj,Cj,op,Nj,np,Oj,Aj,Ij,k_,Lj,Dj,Io,y_,sp,Sj,Uj,T_,rp,Wj,Hj,v_,ap,Kj,Rj,w_,ip,Qj,Vj,yo,lp,Jj,ws,Gj,$_,Xj,Yj,x_,Zj,eq,tq,Ba,oq,Ea,Rk,$s,za,F_,dp,nq,B_,sq,Qk,pt,cp,rq,E_,aq,iq,pp,lq,Sh,dq,cq,pq,hp,hq,mp,mq,fq,uq,z_,gq,_q,Lo,M_,fp,bq,kq,P_,up,yq,Tq,j_,gp,vq,wq,q_,_p,$q,xq,To,bp,Fq,xs,Bq,C_,Eq,zq,N_,Mq,Pq,jq,Ma,qq,Pa,Vk,Fs,ja,O_,kp,Cq,A_,Nq,Jk,ht,yp,Oq,Bs,Aq,I_,Iq,Lq,L_,Dq,Sq,Uq,Tp,Wq,Uh,Hq,Kq,Rq,vp,Qq,wp,Vq,Jq,Gq,D_,Xq,Yq,Do,S_,$p,Zq,e3,U_,xp,t3,o3,W_,Fp,n3,s3,H_,Bp,r3,a3,vo,Ep,i3,Es,l3,K_,d3,c3,R_,p3,h3,m3,qa,f3,Ca,Gk;return l=new Ue({}),E=new Ue({}),ue=new Ue({}),We=new A({props:{name:"class transformers.BertConfig",anchor:"transformers.BertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"position_embedding_type",val:" = 'absolute'"},{name:"use_cache",val:" = True"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the BERT model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.BertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertModel">BertModel</a> or <a href="/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel">TFBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.BertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.BertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.BertConfig.position_embedding_type",description:`<strong>position_embedding_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;absolute&quot;</code>) &#x2014;
Type of position embedding. Choose one of <code>&quot;absolute&quot;</code>, <code>&quot;relative_key&quot;</code>, <code>&quot;relative_key_query&quot;</code>. For
positional embeddings use <code>&quot;absolute&quot;</code>. For more information on <code>&quot;relative_key&quot;</code>, please refer to
<a href="https://arxiv.org/abs/1803.02155" rel="nofollow">Self-Attention with Relative Position Representations (Shaw et al.)</a>.
For more information on <code>&quot;relative_key_query&quot;</code>, please refer to <em>Method 4</em> in <a href="https://arxiv.org/abs/2009.13658" rel="nofollow">Improve Transformer Models
with Better Relative Position Embeddings (Huang et al.)</a>.`,name:"position_embedding_type"},{anchor:"transformers.BertConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models). Only
relevant if <code>config.is_decoder=True</code>.`,name:"use_cache"},{anchor:"transformers.BertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/configuration_bert.py#L72"}}),Cs=new ae({props:{anchor:"transformers.BertConfig.example",$$slots:{default:[V7]},$$scope:{ctx:B}}}),li=new Ue({}),di=new A({props:{name:"class transformers.BertTokenizer",anchor:"transformers.BertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"strip_accents"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L137"}}),pi=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L268",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mi=new A({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L293",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ui=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L321",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),As=new ae({props:{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.example",$$slots:{default:[J7]},$$scope:{ctx:B}}}),gi=new A({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L350"}}),_i=new Ue({}),bi=new A({props:{name:"class transformers.BertTokenizerFast",anchor:"transformers.BertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
The prefix for subwords.`,name:"wordpieces_prefix"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L161"}}),Ti=new A({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L249",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wi=new A({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],parametersDescription:[{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_fast.py#L273",returnDescription:`
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
Whether to return the attention_mask.`,name:"return_attention_mask"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L11"}}),Bi=new A({props:{name:"from_pretrained",anchor:"transformers.TFBertTokenizer.from_pretrained",parameters:[{name:"pretrained_model_name_or_path",val:": typing.Union[str, os.PathLike]"},{name:"*init_inputs",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_pretrained.pretrained_model_name_or_path",description:`<strong>pretrained_model_name_or_path</strong> (<code>str</code> or <code>os.PathLike</code>) &#x2014;
The name or path to the pre-trained tokenizer.`,name:"pretrained_model_name_or_path"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L113"}}),Ss=new ae({props:{anchor:"transformers.TFBertTokenizer.from_pretrained.example",$$slots:{default:[X7]},$$scope:{ctx:B}}}),zi=new A({props:{name:"from_tokenizer",anchor:"transformers.TFBertTokenizer.from_tokenizer",parameters:[{name:"tokenizer",val:": PreTrainedTokenizerBase"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertTokenizer.from_tokenizer.tokenizer",description:`<strong>tokenizer</strong> (<code>PreTrainedTokenizerBase</code>) &#x2014;
The tokenizer to use to initialize the <code>TFBertTokenizer</code>.`,name:"tokenizer"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert_tf.py#L83"}}),Us=new ae({props:{anchor:"transformers.TFBertTokenizer.from_tokenizer.example",$$slots:{default:[Y7]},$$scope:{ctx:B}}}),Mi=new Ue({}),Pi=new A({props:{name:"class transformers.models.bert.modeling_bert.BertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"prediction_logits",val:": FloatTensor = None"},{name:"seq_relationship_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput.loss",description:`<strong>loss</strong> (<em>optional</em>, returned when <code>labels</code> is provided, <code>torch.FloatTensor</code> of shape <code>(1,)</code>) &#x2014;
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
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L763"}}),qi=new A({props:{name:"class transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"prediction_logits",val:": Tensor = None"},{name:"seq_relationship_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"attentions",val:": typing.Union[typing.Tuple[tensorflow.python.framework.ops.Tensor], tensorflow.python.framework.ops.Tensor, NoneType] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L935"}}),Ni=new A({props:{name:"class transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput",parameters:[{name:"prediction_logits",val:": ndarray = None"},{name:"seq_relationship_logits",val:": ndarray = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[jax._src.numpy.ndarray.ndarray]] = None"}],parametersDescription:[{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.prediction_logits",description:`<strong>prediction_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"prediction_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.seq_relationship_logits",description:`<strong>seq_relationship_logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, 2)</code>) &#x2014;
Prediction scores of the next sequence prediction (classification) head (scores of True/False continuation
before SoftMax).`,name:"seq_relationship_logits"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L64"}}),Ai=new A({props:{name:"replace",anchor:"transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput.replace",parameters:[{name:"**updates",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/flax/struct.py#L108"}}),Ii=new Ue({}),Li=new A({props:{name:"class transformers.BertModel",anchor:"transformers.BertModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.BertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L866"}}),Ki=new A({props:{name:"forward",anchor:"transformers.BertModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.FloatTensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L905",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rs=new Se({props:{$$slots:{default:[Z7]},$$scope:{ctx:B}}}),Qs=new ae({props:{anchor:"transformers.BertModel.forward.example",$$slots:{default:[eO]},$$scope:{ctx:B}}}),Ri=new Ue({}),Qi=new A({props:{name:"class transformers.BertForPreTraining",anchor:"transformers.BertForPreTraining",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1049"}}),Xi=new A({props:{name:"forward",anchor:"transformers.BertForPreTraining.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"next_sentence_label",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForPreTraining.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.</p>
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
</ul>`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1065",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"
>transformers.models.bert.modeling_bert.BertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Js=new Se({props:{$$slots:{default:[tO]},$$scope:{ctx:B}}}),Gs=new ae({props:{anchor:"transformers.BertForPreTraining.forward.example",$$slots:{default:[oO]},$$scope:{ctx:B}}}),Yi=new Ue({}),Zi=new A({props:{name:"class transformers.BertLMHeadModel",anchor:"transformers.BertLMHeadModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1153"}}),sl=new A({props:{name:"forward",anchor:"transformers.BertLMHeadModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"past_key_values",val:": typing.Optional[typing.List[torch.Tensor]] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertLMHeadModel.forward.encoder_hidden_states",description:`<strong>encoder_hidden_states</strong>  (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
<code>past_key_values</code>).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1176",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithCrossAttentions"
>transformers.modeling_outputs.CausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ys=new Se({props:{$$slots:{default:[nO]},$$scope:{ctx:B}}}),Zs=new ae({props:{anchor:"transformers.BertLMHeadModel.forward.example",$$slots:{default:[sO]},$$scope:{ctx:B}}}),rl=new Ue({}),al=new A({props:{name:"class transformers.BertForMaskedLM",anchor:"transformers.BertForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1288"}}),pl=new A({props:{name:"forward",anchor:"transformers.BertForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_hidden_states",val:": typing.Optional[torch.Tensor] = None"},{name:"encoder_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1314",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),tr=new Se({props:{$$slots:{default:[rO]},$$scope:{ctx:B}}}),or=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example",$$slots:{default:[aO]},$$scope:{ctx:B}}}),nr=new ae({props:{anchor:"transformers.BertForMaskedLM.forward.example-2",$$slots:{default:[iO]},$$scope:{ctx:B}}}),hl=new Ue({}),ml=new A({props:{name:"class transformers.BertForNextSentencePrediction",anchor:"transformers.BertForNextSentencePrediction",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1401"}}),bl=new A({props:{name:"forward",anchor:"transformers.BertForNextSentencePrediction.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.BertForNextSentencePrediction.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForNextSentencePrediction.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the next sequence prediction (classification) loss. Input should be a sequence pair
(see <code>input_ids</code> docstring). Indices should be in <code>[0, 1]</code>:</p>
<ul>
<li>0 indicates sequence B is a continuation of sequence A,</li>
<li>1 indicates sequence B is a random sequence.</li>
</ul>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1411",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.NextSentencePredictorOutput"
>transformers.modeling_outputs.NextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),rr=new Se({props:{$$slots:{default:[lO]},$$scope:{ctx:B}}}),ar=new ae({props:{anchor:"transformers.BertForNextSentencePrediction.forward.example",$$slots:{default:[dO]},$$scope:{ctx:B}}}),kl=new Ue({}),yl=new A({props:{name:"class transformers.BertForSequenceClassification",anchor:"transformers.BertForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1506"}}),$l=new A({props:{name:"forward",anchor:"transformers.BertForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1522",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),lr=new Se({props:{$$slots:{default:[cO]},$$scope:{ctx:B}}}),dr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example",$$slots:{default:[pO]},$$scope:{ctx:B}}}),cr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-2",$$slots:{default:[hO]},$$scope:{ctx:B}}}),pr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-3",$$slots:{default:[mO]},$$scope:{ctx:B}}}),hr=new ae({props:{anchor:"transformers.BertForSequenceClassification.forward.example-4",$$slots:{default:[fO]},$$scope:{ctx:B}}}),xl=new Ue({}),Fl=new A({props:{name:"class transformers.BertForMultipleChoice",anchor:"transformers.BertForMultipleChoice",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1610"}}),Ml=new A({props:{name:"forward",anchor:"transformers.BertForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1624",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fr=new Se({props:{$$slots:{default:[uO]},$$scope:{ctx:B}}}),ur=new ae({props:{anchor:"transformers.BertForMultipleChoice.forward.example",$$slots:{default:[gO]},$$scope:{ctx:B}}}),Pl=new Ue({}),jl=new A({props:{name:"class transformers.BertForTokenClassification",anchor:"transformers.BertForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1705"}}),Ol=new A({props:{name:"forward",anchor:"transformers.BertForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1723",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_r=new Se({props:{$$slots:{default:[_O]},$$scope:{ctx:B}}}),br=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example",$$slots:{default:[bO]},$$scope:{ctx:B}}}),kr=new ae({props:{anchor:"transformers.BertForTokenClassification.forward.example-2",$$slots:{default:[kO]},$$scope:{ctx:B}}}),Al=new Ue({}),Il=new A({props:{name:"class transformers.BertForQuestionAnswering",anchor:"transformers.BertForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1792"}}),Ul=new A({props:{name:"forward",anchor:"transformers.BertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.BertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.BertForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.BertForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_bert.py#L1806",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Tr=new Se({props:{$$slots:{default:[yO]},$$scope:{ctx:B}}}),vr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example",$$slots:{default:[TO]},$$scope:{ctx:B}}}),wr=new ae({props:{anchor:"transformers.BertForQuestionAnswering.forward.example-2",$$slots:{default:[vO]},$$scope:{ctx:B}}}),Wl=new Ue({}),Hl=new A({props:{name:"class transformers.TFBertModel",anchor:"transformers.TFBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1067"}}),xr=new Se({props:{$$slots:{default:[wO]},$$scope:{ctx:B}}}),Vl=new A({props:{name:"call",anchor:"transformers.TFBertModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
<code>past_key_values</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1073",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPoolingAndCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fr=new Se({props:{$$slots:{default:[$O]},$$scope:{ctx:B}}}),Br=new ae({props:{anchor:"transformers.TFBertModel.call.example",$$slots:{default:[xO]},$$scope:{ctx:B}}}),Jl=new Ue({}),Gl=new A({props:{name:"class transformers.TFBertForPreTraining",anchor:"transformers.TFBertForPreTraining",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1164"}}),zr=new Se({props:{$$slots:{default:[FO]},$$scope:{ctx:B}}}),ed=new A({props:{name:"call",anchor:"transformers.TFBertForPreTraining.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForPreTraining.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
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
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1186",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput"
>transformers.models.bert.modeling_tf_bert.TFBertForPreTrainingOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mr=new Se({props:{$$slots:{default:[BO]},$$scope:{ctx:B}}}),Pr=new ae({props:{anchor:"transformers.TFBertForPreTraining.call.example",$$slots:{default:[EO]},$$scope:{ctx:B}}}),td=new Ue({}),od=new A({props:{name:"class transformers.TFBertLMHeadModel",anchor:"transformers.TFBertLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1373"}}),nd=new A({props:{name:"call",anchor:"transformers.TFBertLMHeadModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_hidden_states",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"encoder_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1410",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithCrossAttentions</a> or <code>tuple(tf.Tensor)</code></p>
`}}),qr=new ae({props:{anchor:"transformers.TFBertLMHeadModel.call.example",$$slots:{default:[zO]},$$scope:{ctx:B}}}),id=new Ue({}),ld=new A({props:{name:"class transformers.TFBertForMaskedLM",anchor:"transformers.TFBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1281"}}),Nr=new Se({props:{$$slots:{default:[MO]},$$scope:{ctx:B}}}),md=new A({props:{name:"call",anchor:"transformers.TFBertForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1309",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Or=new Se({props:{$$slots:{default:[PO]},$$scope:{ctx:B}}}),Ar=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example",$$slots:{default:[jO]},$$scope:{ctx:B}}}),Ir=new ae({props:{anchor:"transformers.TFBertForMaskedLM.call.example-2",$$slots:{default:[qO]},$$scope:{ctx:B}}}),fd=new Ue({}),ud=new A({props:{name:"class transformers.TFBertForNextSentencePrediction",anchor:"transformers.TFBertForNextSentencePrediction",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1523"}}),Dr=new Se({props:{$$slots:{default:[CO]},$$scope:{ctx:B}}}),yd=new A({props:{name:"call",anchor:"transformers.TFBertForNextSentencePrediction.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"next_sentence_label",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForNextSentencePrediction.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForNextSentencePrediction.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1533",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFNextSentencePredictorOutput"
>transformers.modeling_tf_outputs.TFNextSentencePredictorOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Sr=new Se({props:{$$slots:{default:[NO]},$$scope:{ctx:B}}}),Ur=new ae({props:{anchor:"transformers.TFBertForNextSentencePrediction.call.example",$$slots:{default:[OO]},$$scope:{ctx:B}}}),Td=new Ue({}),vd=new A({props:{name:"class transformers.TFBertForSequenceClassification",anchor:"transformers.TFBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1614"}}),Hr=new Se({props:{$$slots:{default:[AO]},$$scope:{ctx:B}}}),Fd=new A({props:{name:"call",anchor:"transformers.TFBertForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1635",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Kr=new Se({props:{$$slots:{default:[IO]},$$scope:{ctx:B}}}),Rr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example",$$slots:{default:[LO]},$$scope:{ctx:B}}}),Qr=new ae({props:{anchor:"transformers.TFBertForSequenceClassification.call.example-2",$$slots:{default:[DO]},$$scope:{ctx:B}}}),Bd=new Ue({}),Ed=new A({props:{name:"class transformers.TFBertForMultipleChoice",anchor:"transformers.TFBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1707"}}),Jr=new Se({props:{$$slots:{default:[SO]},$$scope:{ctx:B}}}),jd=new A({props:{name:"call",anchor:"transformers.TFBertForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1731",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Gr=new Se({props:{$$slots:{default:[UO]},$$scope:{ctx:B}}}),Xr=new ae({props:{anchor:"transformers.TFBertForMultipleChoice.call.example",$$slots:{default:[WO]},$$scope:{ctx:B}}}),qd=new Ue({}),Cd=new A({props:{name:"class transformers.TFBertForTokenClassification",anchor:"transformers.TFBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1837"}}),Zr=new Se({props:{$$slots:{default:[HO]},$$scope:{ctx:B}}}),Id=new A({props:{name:"call",anchor:"transformers.TFBertForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1864",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ea=new Se({props:{$$slots:{default:[KO]},$$scope:{ctx:B}}}),ta=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example",$$slots:{default:[RO]},$$scope:{ctx:B}}}),oa=new ae({props:{anchor:"transformers.TFBertForTokenClassification.call.example-2",$$slots:{default:[QO]},$$scope:{ctx:B}}}),Ld=new Ue({}),Dd=new A({props:{name:"class transformers.TFBertForQuestionAnswering",anchor:"transformers.TFBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1934"}}),sa=new Se({props:{$$slots:{default:[VO]},$$scope:{ctx:B}}}),Hd=new A({props:{name:"call",anchor:"transformers.TFBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_tf_bert.py#L1956",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ra=new Se({props:{$$slots:{default:[JO]},$$scope:{ctx:B}}}),aa=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example",$$slots:{default:[GO]},$$scope:{ctx:B}}}),ia=new ae({props:{anchor:"transformers.TFBertForQuestionAnswering.call.example-2",$$slots:{default:[XO]},$$scope:{ctx:B}}}),Kd=new Ue({}),Rd=new A({props:{name:"class transformers.FlaxBertModel",anchor:"transformers.FlaxBertModel",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1028"}}),ec=new A({props:{name:"__call__",anchor:"transformers.FlaxBertModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling"
>transformers.modeling_flax_outputs.FlaxBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),da=new Se({props:{$$slots:{default:[YO]},$$scope:{ctx:B}}}),ca=new ae({props:{anchor:"transformers.FlaxBertModel.__call__.example",$$slots:{default:[ZO]},$$scope:{ctx:B}}}),tc=new Ue({}),oc=new A({props:{name:"class transformers.FlaxBertForPreTraining",anchor:"transformers.FlaxBertForPreTraining",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForPreTraining.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1106"}}),cc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForPreTraining.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForPreTraining.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/model_doc/bert#transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput"
>transformers.models.bert.modeling_flax_bert.FlaxBertForPreTrainingOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ha=new Se({props:{$$slots:{default:[eA]},$$scope:{ctx:B}}}),ma=new ae({props:{anchor:"transformers.FlaxBertForPreTraining.__call__.example",$$slots:{default:[tA]},$$scope:{ctx:B}}}),pc=new Ue({}),hc=new A({props:{name:"class transformers.FlaxBertForCausalLM",anchor:"transformers.FlaxBertForCausalLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1683"}}),yc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions"
>transformers.modeling_flax_outputs.FlaxCausalLMOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ua=new Se({props:{$$slots:{default:[oA]},$$scope:{ctx:B}}}),ga=new ae({props:{anchor:"transformers.FlaxBertForCausalLM.__call__.example",$$slots:{default:[nA]},$$scope:{ctx:B}}}),Tc=new Ue({}),vc=new A({props:{name:"class transformers.FlaxBertForMaskedLM",anchor:"transformers.FlaxBertForMaskedLM",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMaskedLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1197"}}),Pc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMaskedLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMaskedLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ba=new Se({props:{$$slots:{default:[sA]},$$scope:{ctx:B}}}),ka=new ae({props:{anchor:"transformers.FlaxBertForMaskedLM.__call__.example",$$slots:{default:[rA]},$$scope:{ctx:B}}}),jc=new Ue({}),qc=new A({props:{name:"class transformers.FlaxBertForNextSentencePrediction",anchor:"transformers.FlaxBertForNextSentencePrediction",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForNextSentencePrediction.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1263"}}),Uc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForNextSentencePrediction.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput"
>transformers.modeling_flax_outputs.FlaxNextSentencePredictorOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ta=new Se({props:{$$slots:{default:[aA]},$$scope:{ctx:B}}}),va=new ae({props:{anchor:"transformers.FlaxBertForNextSentencePrediction.__call__.example",$$slots:{default:[iA]},$$scope:{ctx:B}}}),Wc=new Ue({}),Hc=new A({props:{name:"class transformers.FlaxBertForSequenceClassification",anchor:"transformers.FlaxBertForSequenceClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForSequenceClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1366"}}),Yc=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForSequenceClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForSequenceClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput"
>transformers.modeling_flax_outputs.FlaxSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),$a=new Se({props:{$$slots:{default:[lA]},$$scope:{ctx:B}}}),xa=new ae({props:{anchor:"transformers.FlaxBertForSequenceClassification.__call__.example",$$slots:{default:[dA]},$$scope:{ctx:B}}}),Zc=new Ue({}),ep=new A({props:{name:"class transformers.FlaxBertForMultipleChoice",anchor:"transformers.FlaxBertForMultipleChoice",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForMultipleChoice.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1447"}}),lp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForMultipleChoice.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForMultipleChoice.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput"
>transformers.modeling_flax_outputs.FlaxMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ba=new Se({props:{$$slots:{default:[cA]},$$scope:{ctx:B}}}),Ea=new ae({props:{anchor:"transformers.FlaxBertForMultipleChoice.__call__.example",$$slots:{default:[pA]},$$scope:{ctx:B}}}),dp=new Ue({}),cp=new A({props:{name:"class transformers.FlaxBertForTokenClassification",anchor:"transformers.FlaxBertForTokenClassification",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForTokenClassification.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1525"}}),bp=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForTokenClassification.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForTokenClassification.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxTokenClassifierOutput"
>transformers.modeling_flax_outputs.FlaxTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ma=new Se({props:{$$slots:{default:[hA]},$$scope:{ctx:B}}}),Pa=new ae({props:{anchor:"transformers.FlaxBertForTokenClassification.__call__.example",$$slots:{default:[mA]},$$scope:{ctx:B}}}),kp=new Ue({}),yp=new A({props:{name:"class transformers.FlaxBertForQuestionAnswering",anchor:"transformers.FlaxBertForQuestionAnswering",parameters:[{name:"config",val:": BertConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax.numpy.float32'>"},{name:"_do_init",val:": bool = True"},{name:"gradient_checkpointing",val:": bool = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig">BertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"},{anchor:"transformers.FlaxBertForQuestionAnswering.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L1598"}}),Ep=new A({props:{name:"__call__",anchor:"transformers.FlaxBertForQuestionAnswering.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"params",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"past_key_values",val:": dict = None"}],parametersDescription:[{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer">BertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/modeling_flax_bert.py#L855",returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/bert#transformers.BertConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput"
>transformers.modeling_flax_outputs.FlaxQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),qa=new Se({props:{$$slots:{default:[fA]},$$scope:{ctx:B}}}),Ca=new ae({props:{anchor:"transformers.FlaxBertForQuestionAnswering.__call__.example",$$slots:{default:[uA]},$$scope:{ctx:B}}}),{c(){d=s("meta"),g=c(),m=s("h1"),f=s("a"),b=s("span"),T(l.$$.fragment),h=c(),z=s("span"),Fe=o("BERT"),Te=c(),S=s("h2"),pe=s("a"),ee=s("span"),T(E.$$.fragment),Be=c(),R=s("span"),Ee=o("Overview"),ve=c(),U=s("p"),ze=o("The BERT model was proposed in "),me=s("a"),G=o("BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Me=o(` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
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
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),xe=c(),D=s("p"),Ae=o("This model was contributed by "),fe=s("a"),L=o("thomwolf"),Ie=o(". The original code can be found "),W=s("a"),Le=o("here"),se=o("."),C=c(),de=s("h2"),O=s("a"),ke=s("span"),T(ue.$$.fragment),y=c(),M=s("span"),Re=o("BertConfig"),ne=c(),ye=s("div"),T(We.$$.fragment),P=c(),De=s("p"),Qe=o("This is the configuration class to store the configuration of a "),Ke=s("a"),Ve=o("BertModel"),Je=o(" or a "),I=s("a"),X=o("TFBertModel"),Ge=o(`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=s("a"),Y=o("bert-base-uncased"),Xe=o(" architecture."),Ye=c(),ce=s("p"),Ze=o("Configuration objects inherit from "),Z=s("a"),et=o("PretrainedConfig"),HT=o(` and can be used to control the model outputs. Read the
documentation from `),Wp=s("a"),KT=o("PretrainedConfig"),RT=o(" for more information."),QT=c(),T(Cs.$$.fragment),Db=c(),mn=s("h2"),Ns=s("a"),Pm=s("span"),T(li.$$.fragment),VT=c(),jm=s("span"),JT=o("BertTokenizer"),Sb=c(),tt=s("div"),T(di.$$.fragment),GT=c(),qm=s("p"),XT=o("Construct a BERT tokenizer. Based on WordPiece."),YT=c(),ci=s("p"),ZT=o("This tokenizer inherits from "),Hp=s("a"),ev=o("PreTrainedTokenizer"),tv=o(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ov=c(),Ko=s("div"),T(pi.$$.fragment),nv=c(),Cm=s("p"),sv=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),rv=c(),hi=s("ul"),Kp=s("li"),av=o("single sequence: "),Nm=s("code"),iv=o("[CLS] X [SEP]"),lv=c(),Rp=s("li"),dv=o("pair of sequences: "),Om=s("code"),cv=o("[CLS] A [SEP] B [SEP]"),pv=c(),Os=s("div"),T(mi.$$.fragment),hv=c(),fi=s("p"),mv=o(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Am=s("code"),fv=o("prepare_for_model"),uv=o(" method."),gv=c(),oo=s("div"),T(ui.$$.fragment),_v=c(),Im=s("p"),bv=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),kv=c(),T(As.$$.fragment),yv=c(),fn=s("p"),Tv=o("If "),Lm=s("code"),vv=o("token_ids_1"),wv=o(" is "),Dm=s("code"),$v=o("None"),xv=o(", this method only returns the first portion of the mask (0s)."),Fv=c(),Qp=s("div"),T(gi.$$.fragment),Ub=c(),un=s("h2"),Is=s("a"),Sm=s("span"),T(_i.$$.fragment),Bv=c(),Um=s("span"),Ev=o("BertTokenizerFast"),Wb=c(),xt=s("div"),T(bi.$$.fragment),zv=c(),ki=s("p"),Mv=o("Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Wm=s("em"),Pv=o("tokenizers"),jv=o(" library). Based on WordPiece."),qv=c(),yi=s("p"),Cv=o("This tokenizer inherits from "),Vp=s("a"),Nv=o("PreTrainedTokenizerFast"),Ov=o(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Av=c(),Ro=s("div"),T(Ti.$$.fragment),Iv=c(),Hm=s("p"),Lv=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Dv=c(),vi=s("ul"),Jp=s("li"),Sv=o("single sequence: "),Km=s("code"),Uv=o("[CLS] X [SEP]"),Wv=c(),Gp=s("li"),Hv=o("pair of sequences: "),Rm=s("code"),Kv=o("[CLS] A [SEP] B [SEP]"),Rv=c(),no=s("div"),T(wi.$$.fragment),Qv=c(),Qm=s("p"),Vv=o("Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Jv=c(),T(Ls.$$.fragment),Gv=c(),gn=s("p"),Xv=o("If "),Vm=s("code"),Yv=o("token_ids_1"),Zv=o(" is "),Jm=s("code"),ew=o("None"),tw=o(", this method only returns the first portion of the mask (0s)."),Hb=c(),_n=s("h2"),Ds=s("a"),Gm=s("span"),T($i.$$.fragment),ow=c(),Xm=s("span"),nw=o("TFBertTokenizer"),Kb=c(),Ft=s("div"),T(xi.$$.fragment),sw=c(),bn=s("p"),rw=o(`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Ym=s("code"),aw=o("from_pretrained()"),iw=o(" method. It can also be initialized with the "),Zm=s("code"),lw=o("from_tokenizer()"),dw=o(` method, which imports settings
from an existing standard tokenizer object.`),cw=c(),Fi=s("p"),pw=o(`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),ef=s("code"),hw=o("tf.string"),mw=o(" inputs to outputs."),fw=c(),Qo=s("div"),T(Bi.$$.fragment),uw=c(),Ei=s("p"),gw=o("Instantiate a "),tf=s("code"),_w=o("TFBertTokenizer"),bw=o(" from a pre-trained tokenizer."),kw=c(),T(Ss.$$.fragment),yw=c(),Vo=s("div"),T(zi.$$.fragment),Tw=c(),kn=s("p"),vw=o("Initialize a "),of=s("code"),ww=o("TFBertTokenizer"),$w=o(" from an existing "),nf=s("code"),xw=o("Tokenizer"),Fw=o("."),Bw=c(),T(Us.$$.fragment),Rb=c(),yn=s("h2"),Ws=s("a"),sf=s("span"),T(Mi.$$.fragment),Ew=c(),rf=s("span"),zw=o("Bert specific outputs"),Qb=c(),Tn=s("div"),T(Pi.$$.fragment),Mw=c(),ji=s("p"),Pw=o("Output type of "),Xp=s("a"),jw=o("BertForPreTraining"),qw=o("."),Vb=c(),vn=s("div"),T(qi.$$.fragment),Cw=c(),Ci=s("p"),Nw=o("Output type of "),Yp=s("a"),Ow=o("TFBertForPreTraining"),Aw=o("."),Jb=c(),Po=s("div"),T(Ni.$$.fragment),Iw=c(),Oi=s("p"),Lw=o("Output type of "),Zp=s("a"),Dw=o("BertForPreTraining"),Sw=o("."),Uw=c(),Hs=s("div"),T(Ai.$$.fragment),Ww=c(),af=s("p"),Hw=o("\u201CReturns a new object replacing the specified fields with new values."),Gb=c(),wn=s("h2"),Ks=s("a"),lf=s("span"),T(Ii.$$.fragment),Kw=c(),df=s("span"),Rw=o("BertModel"),Xb=c(),ot=s("div"),T(Li.$$.fragment),Qw=c(),cf=s("p"),Vw=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Jw=c(),Di=s("p"),Gw=o("This model inherits from "),eh=s("a"),Xw=o("PreTrainedModel"),Yw=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zw=c(),Si=s("p"),e1=o("This model is also a PyTorch "),Ui=s("a"),t1=o("torch.nn.Module"),o1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),n1=c(),Wi=s("p"),s1=o(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=s("a"),r1=o(`Attention is
all you need`),a1=o(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),i1=c(),ft=s("p"),l1=o("To behave as an decoder the model needs to be initialized with the "),pf=s("code"),d1=o("is_decoder"),c1=o(` argument of the configuration set
to `),hf=s("code"),p1=o("True"),h1=o(". To be used in a Seq2Seq model, the model needs to initialized with both "),mf=s("code"),m1=o("is_decoder"),f1=o(` argument and
`),ff=s("code"),u1=o("add_cross_attention"),g1=o(" set to "),uf=s("code"),_1=o("True"),b1=o("; an "),gf=s("code"),k1=o("encoder_hidden_states"),y1=o(" is then expected as an input to the forward pass."),T1=c(),so=s("div"),T(Ki.$$.fragment),v1=c(),$n=s("p"),w1=o("The "),th=s("a"),$1=o("BertModel"),x1=o(" forward method, overrides the "),_f=s("code"),F1=o("__call__"),B1=o(" special method."),E1=c(),T(Rs.$$.fragment),z1=c(),T(Qs.$$.fragment),Yb=c(),xn=s("h2"),Vs=s("a"),bf=s("span"),T(Ri.$$.fragment),M1=c(),kf=s("span"),P1=o("BertForPreTraining"),Zb=c(),Bt=s("div"),T(Qi.$$.fragment),j1=c(),Fn=s("p"),q1=o("Bert Model with two heads on top as done during the pretraining: a "),yf=s("code"),C1=o("masked language modeling"),N1=o(" head and a "),Tf=s("code"),O1=o("next sentence prediction (classification)"),A1=o(" head."),I1=c(),Vi=s("p"),L1=o("This model inherits from "),oh=s("a"),D1=o("PreTrainedModel"),S1=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),U1=c(),Ji=s("p"),W1=o("This model is also a PyTorch "),Gi=s("a"),H1=o("torch.nn.Module"),K1=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),R1=c(),ro=s("div"),T(Xi.$$.fragment),Q1=c(),Bn=s("p"),V1=o("The "),nh=s("a"),J1=o("BertForPreTraining"),G1=o(" forward method, overrides the "),vf=s("code"),X1=o("__call__"),Y1=o(" special method."),Z1=c(),T(Js.$$.fragment),e$=c(),T(Gs.$$.fragment),ek=c(),En=s("h2"),Xs=s("a"),wf=s("span"),T(Yi.$$.fragment),t$=c(),$f=s("span"),o$=o("BertLMHeadModel"),tk=c(),Et=s("div"),T(Zi.$$.fragment),n$=c(),el=s("p"),s$=o("Bert Model with a "),xf=s("code"),r$=o("language modeling"),a$=o(" head on top for CLM fine-tuning."),i$=c(),tl=s("p"),l$=o("This model inherits from "),sh=s("a"),d$=o("PreTrainedModel"),c$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),p$=c(),ol=s("p"),h$=o("This model is also a PyTorch "),nl=s("a"),m$=o("torch.nn.Module"),f$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),u$=c(),ao=s("div"),T(sl.$$.fragment),g$=c(),zn=s("p"),_$=o("The "),rh=s("a"),b$=o("BertLMHeadModel"),k$=o(" forward method, overrides the "),Ff=s("code"),y$=o("__call__"),T$=o(" special method."),v$=c(),T(Ys.$$.fragment),w$=c(),T(Zs.$$.fragment),ok=c(),Mn=s("h2"),er=s("a"),Bf=s("span"),T(rl.$$.fragment),$$=c(),Ef=s("span"),x$=o("BertForMaskedLM"),nk=c(),zt=s("div"),T(al.$$.fragment),F$=c(),il=s("p"),B$=o("Bert Model with a "),zf=s("code"),E$=o("language modeling"),z$=o(" head on top."),M$=c(),ll=s("p"),P$=o("This model inherits from "),ah=s("a"),j$=o("PreTrainedModel"),q$=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),C$=c(),dl=s("p"),N$=o("This model is also a PyTorch "),cl=s("a"),O$=o("torch.nn.Module"),A$=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),I$=c(),Nt=s("div"),T(pl.$$.fragment),L$=c(),Pn=s("p"),D$=o("The "),ih=s("a"),S$=o("BertForMaskedLM"),U$=o(" forward method, overrides the "),Mf=s("code"),W$=o("__call__"),H$=o(" special method."),K$=c(),T(tr.$$.fragment),R$=c(),T(or.$$.fragment),Q$=c(),T(nr.$$.fragment),sk=c(),jn=s("h2"),sr=s("a"),Pf=s("span"),T(hl.$$.fragment),V$=c(),jf=s("span"),J$=o("BertForNextSentencePrediction"),rk=c(),Mt=s("div"),T(ml.$$.fragment),G$=c(),fl=s("p"),X$=o("Bert Model with a "),qf=s("code"),Y$=o("next sentence prediction (classification)"),Z$=o(" head on top."),e2=c(),ul=s("p"),t2=o("This model inherits from "),lh=s("a"),o2=o("PreTrainedModel"),n2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),s2=c(),gl=s("p"),r2=o("This model is also a PyTorch "),_l=s("a"),a2=o("torch.nn.Module"),i2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),l2=c(),io=s("div"),T(bl.$$.fragment),d2=c(),qn=s("p"),c2=o("The "),dh=s("a"),p2=o("BertForNextSentencePrediction"),h2=o(" forward method, overrides the "),Cf=s("code"),m2=o("__call__"),f2=o(" special method."),u2=c(),T(rr.$$.fragment),g2=c(),T(ar.$$.fragment),ak=c(),Cn=s("h2"),ir=s("a"),Nf=s("span"),T(kl.$$.fragment),_2=c(),Of=s("span"),b2=o("BertForSequenceClassification"),ik=c(),Pt=s("div"),T(yl.$$.fragment),k2=c(),Af=s("p"),y2=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),T2=c(),Tl=s("p"),v2=o("This model inherits from "),ch=s("a"),w2=o("PreTrainedModel"),$2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),x2=c(),vl=s("p"),F2=o("This model is also a PyTorch "),wl=s("a"),B2=o("torch.nn.Module"),E2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),z2=c(),mt=s("div"),T($l.$$.fragment),M2=c(),Nn=s("p"),P2=o("The "),ph=s("a"),j2=o("BertForSequenceClassification"),q2=o(" forward method, overrides the "),If=s("code"),C2=o("__call__"),N2=o(" special method."),O2=c(),T(lr.$$.fragment),A2=c(),T(dr.$$.fragment),I2=c(),T(cr.$$.fragment),L2=c(),T(pr.$$.fragment),D2=c(),T(hr.$$.fragment),lk=c(),On=s("h2"),mr=s("a"),Lf=s("span"),T(xl.$$.fragment),S2=c(),Df=s("span"),U2=o("BertForMultipleChoice"),dk=c(),jt=s("div"),T(Fl.$$.fragment),W2=c(),Sf=s("p"),H2=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),K2=c(),Bl=s("p"),R2=o("This model inherits from "),hh=s("a"),Q2=o("PreTrainedModel"),V2=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),J2=c(),El=s("p"),G2=o("This model is also a PyTorch "),zl=s("a"),X2=o("torch.nn.Module"),Y2=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Z2=c(),lo=s("div"),T(Ml.$$.fragment),ex=c(),An=s("p"),tx=o("The "),mh=s("a"),ox=o("BertForMultipleChoice"),nx=o(" forward method, overrides the "),Uf=s("code"),sx=o("__call__"),rx=o(" special method."),ax=c(),T(fr.$$.fragment),ix=c(),T(ur.$$.fragment),ck=c(),In=s("h2"),gr=s("a"),Wf=s("span"),T(Pl.$$.fragment),lx=c(),Hf=s("span"),dx=o("BertForTokenClassification"),pk=c(),qt=s("div"),T(jl.$$.fragment),cx=c(),Kf=s("p"),px=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),hx=c(),ql=s("p"),mx=o("This model inherits from "),fh=s("a"),fx=o("PreTrainedModel"),ux=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gx=c(),Cl=s("p"),_x=o("This model is also a PyTorch "),Nl=s("a"),bx=o("torch.nn.Module"),kx=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),yx=c(),Ot=s("div"),T(Ol.$$.fragment),Tx=c(),Ln=s("p"),vx=o("The "),uh=s("a"),wx=o("BertForTokenClassification"),$x=o(" forward method, overrides the "),Rf=s("code"),xx=o("__call__"),Fx=o(" special method."),Bx=c(),T(_r.$$.fragment),Ex=c(),T(br.$$.fragment),zx=c(),T(kr.$$.fragment),hk=c(),Dn=s("h2"),yr=s("a"),Qf=s("span"),T(Al.$$.fragment),Mx=c(),Vf=s("span"),Px=o("BertForQuestionAnswering"),mk=c(),Ct=s("div"),T(Il.$$.fragment),jx=c(),Sn=s("p"),qx=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jf=s("code"),Cx=o("span start logits"),Nx=o(" and "),Gf=s("code"),Ox=o("span end logits"),Ax=o(")."),Ix=c(),Ll=s("p"),Lx=o("This model inherits from "),gh=s("a"),Dx=o("PreTrainedModel"),Sx=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ux=c(),Dl=s("p"),Wx=o("This model is also a PyTorch "),Sl=s("a"),Hx=o("torch.nn.Module"),Kx=o(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rx=c(),At=s("div"),T(Ul.$$.fragment),Qx=c(),Un=s("p"),Vx=o("The "),_h=s("a"),Jx=o("BertForQuestionAnswering"),Gx=o(" forward method, overrides the "),Xf=s("code"),Xx=o("__call__"),Yx=o(" special method."),Zx=c(),T(Tr.$$.fragment),eF=c(),T(vr.$$.fragment),tF=c(),T(wr.$$.fragment),fk=c(),Wn=s("h2"),$r=s("a"),Yf=s("span"),T(Wl.$$.fragment),oF=c(),Zf=s("span"),nF=o("TFBertModel"),uk=c(),ut=s("div"),T(Hl.$$.fragment),sF=c(),eu=s("p"),rF=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),aF=c(),Kl=s("p"),iF=o("This model inherits from "),bh=s("a"),lF=o("TFPreTrainedModel"),dF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cF=c(),Rl=s("p"),pF=o("This model is also a "),Ql=s("a"),hF=o("tf.keras.Model"),mF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fF=c(),T(xr.$$.fragment),uF=c(),co=s("div"),T(Vl.$$.fragment),gF=c(),Hn=s("p"),_F=o("The "),kh=s("a"),bF=o("TFBertModel"),kF=o(" forward method, overrides the "),tu=s("code"),yF=o("__call__"),TF=o(" special method."),vF=c(),T(Fr.$$.fragment),wF=c(),T(Br.$$.fragment),gk=c(),Kn=s("h2"),Er=s("a"),ou=s("span"),T(Jl.$$.fragment),$F=c(),nu=s("span"),xF=o("TFBertForPreTraining"),_k=c(),gt=s("div"),T(Gl.$$.fragment),FF=c(),Rn=s("p"),BF=o(`Bert Model with two heads on top as done during the pretraining:
a `),su=s("code"),EF=o("masked language modeling"),zF=o(" head and a "),ru=s("code"),MF=o("next sentence prediction (classification)"),PF=o(" head."),jF=c(),Xl=s("p"),qF=o("This model inherits from "),yh=s("a"),CF=o("TFPreTrainedModel"),NF=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),OF=c(),Yl=s("p"),AF=o("This model is also a "),Zl=s("a"),IF=o("tf.keras.Model"),LF=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),DF=c(),T(zr.$$.fragment),SF=c(),po=s("div"),T(ed.$$.fragment),UF=c(),Qn=s("p"),WF=o("The "),Th=s("a"),HF=o("TFBertForPreTraining"),KF=o(" forward method, overrides the "),au=s("code"),RF=o("__call__"),QF=o(" special method."),VF=c(),T(Mr.$$.fragment),JF=c(),T(Pr.$$.fragment),bk=c(),Vn=s("h2"),jr=s("a"),iu=s("span"),T(td.$$.fragment),GF=c(),lu=s("span"),XF=o("TFBertModelLMHeadModel"),kk=c(),Jn=s("div"),T(od.$$.fragment),YF=c(),It=s("div"),T(nd.$$.fragment),ZF=c(),nt=s("p"),e0=o("encoder_hidden_states  ("),du=s("code"),t0=o("tf.Tensor"),o0=o(" of shape "),cu=s("code"),n0=o("(batch_size, sequence_length, hidden_size)"),s0=o(", "),pu=s("em"),r0=o("optional"),a0=o(`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=s("code"),i0=o("tf.Tensor"),l0=o(" of shape "),mu=s("code"),d0=o("(batch_size, sequence_length)"),c0=o(", "),fu=s("em"),p0=o("optional"),h0=o(`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=s("code"),m0=o("[0, 1]"),f0=o(":"),u0=c(),sd=s("ul"),rd=s("li"),g0=o("1 for tokens that are "),gu=s("strong"),_0=o("not masked"),b0=o(","),k0=c(),ad=s("li"),y0=o("0 for tokens that are "),_u=s("strong"),T0=o("masked"),v0=o("."),w0=c(),te=s("p"),$0=o("past_key_values ("),bu=s("code"),x0=o("Tuple[Tuple[tf.Tensor]]"),F0=o(" of length "),ku=s("code"),B0=o("config.n_layers"),E0=o(`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),yu=s("code"),z0=o("past_key_values"),M0=o(" are used, the user can optionally input only the last "),Tu=s("code"),P0=o("decoder_input_ids"),j0=o(` (those that
don\u2019t have their past key value states given to this model) of shape `),vu=s("code"),q0=o("(batch_size, 1)"),C0=o(` instead of all
`),wu=s("code"),N0=o("decoder_input_ids"),O0=o(" of shape "),$u=s("code"),A0=o("(batch_size, sequence_length)"),I0=o(`.
use_cache (`),xu=s("code"),L0=o("bool"),D0=o(", "),Fu=s("em"),S0=o("optional"),U0=o(", defaults to "),Bu=s("code"),W0=o("True"),H0=o(`):
If set to `),Eu=s("code"),K0=o("True"),R0=o(", "),zu=s("code"),Q0=o("past_key_values"),V0=o(` key value states are returned and can be used to speed up decoding (see
`),Mu=s("code"),J0=o("past_key_values"),G0=o("). Set to "),Pu=s("code"),X0=o("False"),Y0=o(" during training, "),ju=s("code"),Z0=o("True"),eB=o(` during generation
labels (`),qu=s("code"),tB=o("tf.Tensor"),oB=o(" or "),Cu=s("code"),nB=o("np.ndarray"),sB=o(" of shape "),Nu=s("code"),rB=o("(batch_size, sequence_length)"),aB=o(", "),Ou=s("em"),iB=o("optional"),lB=o(`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=s("code"),dB=o("[0, ..., config.vocab_size - 1]"),cB=o("."),pB=c(),T(qr.$$.fragment),yk=c(),Gn=s("h2"),Cr=s("a"),Iu=s("span"),T(id.$$.fragment),hB=c(),Lu=s("span"),mB=o("TFBertForMaskedLM"),Tk=c(),_t=s("div"),T(ld.$$.fragment),fB=c(),dd=s("p"),uB=o("Bert Model with a "),Du=s("code"),gB=o("language modeling"),_B=o(" head on top."),bB=c(),cd=s("p"),kB=o("This model inherits from "),vh=s("a"),yB=o("TFPreTrainedModel"),TB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vB=c(),pd=s("p"),wB=o("This model is also a "),hd=s("a"),$B=o("tf.keras.Model"),xB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),FB=c(),T(Nr.$$.fragment),BB=c(),Lt=s("div"),T(md.$$.fragment),EB=c(),Xn=s("p"),zB=o("The "),wh=s("a"),MB=o("TFBertForMaskedLM"),PB=o(" forward method, overrides the "),Su=s("code"),jB=o("__call__"),qB=o(" special method."),CB=c(),T(Or.$$.fragment),NB=c(),T(Ar.$$.fragment),OB=c(),T(Ir.$$.fragment),vk=c(),Yn=s("h2"),Lr=s("a"),Uu=s("span"),T(fd.$$.fragment),AB=c(),Wu=s("span"),IB=o("TFBertForNextSentencePrediction"),wk=c(),bt=s("div"),T(ud.$$.fragment),LB=c(),gd=s("p"),DB=o("Bert Model with a "),Hu=s("code"),SB=o("next sentence prediction (classification)"),UB=o(" head on top."),WB=c(),_d=s("p"),HB=o("This model inherits from "),$h=s("a"),KB=o("TFPreTrainedModel"),RB=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),QB=c(),bd=s("p"),VB=o("This model is also a "),kd=s("a"),JB=o("tf.keras.Model"),GB=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),XB=c(),T(Dr.$$.fragment),YB=c(),ho=s("div"),T(yd.$$.fragment),ZB=c(),Zn=s("p"),eE=o("The "),xh=s("a"),tE=o("TFBertForNextSentencePrediction"),oE=o(" forward method, overrides the "),Ku=s("code"),nE=o("__call__"),sE=o(" special method."),rE=c(),T(Sr.$$.fragment),aE=c(),T(Ur.$$.fragment),$k=c(),es=s("h2"),Wr=s("a"),Ru=s("span"),T(Td.$$.fragment),iE=c(),Qu=s("span"),lE=o("TFBertForSequenceClassification"),xk=c(),kt=s("div"),T(vd.$$.fragment),dE=c(),Vu=s("p"),cE=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),pE=c(),wd=s("p"),hE=o("This model inherits from "),Fh=s("a"),mE=o("TFPreTrainedModel"),fE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),uE=c(),$d=s("p"),gE=o("This model is also a "),xd=s("a"),_E=o("tf.keras.Model"),bE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kE=c(),T(Hr.$$.fragment),yE=c(),Dt=s("div"),T(Fd.$$.fragment),TE=c(),ts=s("p"),vE=o("The "),Bh=s("a"),wE=o("TFBertForSequenceClassification"),$E=o(" forward method, overrides the "),Ju=s("code"),xE=o("__call__"),FE=o(" special method."),BE=c(),T(Kr.$$.fragment),EE=c(),T(Rr.$$.fragment),zE=c(),T(Qr.$$.fragment),Fk=c(),os=s("h2"),Vr=s("a"),Gu=s("span"),T(Bd.$$.fragment),ME=c(),Xu=s("span"),PE=o("TFBertForMultipleChoice"),Bk=c(),yt=s("div"),T(Ed.$$.fragment),jE=c(),Yu=s("p"),qE=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),CE=c(),zd=s("p"),NE=o("This model inherits from "),Eh=s("a"),OE=o("TFPreTrainedModel"),AE=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),IE=c(),Md=s("p"),LE=o("This model is also a "),Pd=s("a"),DE=o("tf.keras.Model"),SE=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),UE=c(),T(Jr.$$.fragment),WE=c(),mo=s("div"),T(jd.$$.fragment),HE=c(),ns=s("p"),KE=o("The "),zh=s("a"),RE=o("TFBertForMultipleChoice"),QE=o(" forward method, overrides the "),Zu=s("code"),VE=o("__call__"),JE=o(" special method."),GE=c(),T(Gr.$$.fragment),XE=c(),T(Xr.$$.fragment),Ek=c(),ss=s("h2"),Yr=s("a"),eg=s("span"),T(qd.$$.fragment),YE=c(),tg=s("span"),ZE=o("TFBertForTokenClassification"),zk=c(),Tt=s("div"),T(Cd.$$.fragment),ez=c(),og=s("p"),tz=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),oz=c(),Nd=s("p"),nz=o("This model inherits from "),Mh=s("a"),sz=o("TFPreTrainedModel"),rz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),az=c(),Od=s("p"),iz=o("This model is also a "),Ad=s("a"),lz=o("tf.keras.Model"),dz=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cz=c(),T(Zr.$$.fragment),pz=c(),St=s("div"),T(Id.$$.fragment),hz=c(),rs=s("p"),mz=o("The "),Ph=s("a"),fz=o("TFBertForTokenClassification"),uz=o(" forward method, overrides the "),ng=s("code"),gz=o("__call__"),_z=o(" special method."),bz=c(),T(ea.$$.fragment),kz=c(),T(ta.$$.fragment),yz=c(),T(oa.$$.fragment),Mk=c(),as=s("h2"),na=s("a"),sg=s("span"),T(Ld.$$.fragment),Tz=c(),rg=s("span"),vz=o("TFBertForQuestionAnswering"),Pk=c(),vt=s("div"),T(Dd.$$.fragment),wz=c(),is=s("p"),$z=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=s("code"),xz=o("span start logits"),Fz=o(" and "),ig=s("code"),Bz=o("span end logits"),Ez=o(")."),zz=c(),Sd=s("p"),Mz=o("This model inherits from "),jh=s("a"),Pz=o("TFPreTrainedModel"),jz=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qz=c(),Ud=s("p"),Cz=o("This model is also a "),Wd=s("a"),Nz=o("tf.keras.Model"),Oz=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Az=c(),T(sa.$$.fragment),Iz=c(),Ut=s("div"),T(Hd.$$.fragment),Lz=c(),ls=s("p"),Dz=o("The "),qh=s("a"),Sz=o("TFBertForQuestionAnswering"),Uz=o(" forward method, overrides the "),lg=s("code"),Wz=o("__call__"),Hz=o(" special method."),Kz=c(),T(ra.$$.fragment),Rz=c(),T(aa.$$.fragment),Qz=c(),T(ia.$$.fragment),jk=c(),ds=s("h2"),la=s("a"),dg=s("span"),T(Kd.$$.fragment),Vz=c(),cg=s("span"),Jz=o("FlaxBertModel"),qk=c(),st=s("div"),T(Rd.$$.fragment),Gz=c(),pg=s("p"),Xz=o("The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Yz=c(),Qd=s("p"),Zz=o("This model inherits from "),Ch=s("a"),eM=o("FlaxPreTrainedModel"),tM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),oM=c(),Vd=s("p"),nM=o("This model is also a Flax Linen "),Jd=s("a"),sM=o("flax.linen.Module"),rM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),aM=c(),hg=s("p"),iM=o("Finally, this model supports inherent JAX features such as:"),lM=c(),jo=s("ul"),mg=s("li"),Gd=s("a"),dM=o("Just-In-Time (JIT) compilation"),cM=c(),fg=s("li"),Xd=s("a"),pM=o("Automatic Differentiation"),hM=c(),ug=s("li"),Yd=s("a"),mM=o("Vectorization"),fM=c(),gg=s("li"),Zd=s("a"),uM=o("Parallelization"),gM=c(),fo=s("div"),T(ec.$$.fragment),_M=c(),cs=s("p"),bM=o("The "),_g=s("code"),kM=o("FlaxBertPreTrainedModel"),yM=o(" forward method, overrides the "),bg=s("code"),TM=o("__call__"),vM=o(" special method."),wM=c(),T(da.$$.fragment),$M=c(),T(ca.$$.fragment),Ck=c(),ps=s("h2"),pa=s("a"),kg=s("span"),T(tc.$$.fragment),xM=c(),yg=s("span"),FM=o("FlaxBertForPreTraining"),Nk=c(),rt=s("div"),T(oc.$$.fragment),BM=c(),hs=s("p"),EM=o("Bert Model with two heads on top as done during the pretraining: a "),Tg=s("code"),zM=o("masked language modeling"),MM=o(" head and a "),vg=s("code"),PM=o("next sentence prediction (classification)"),jM=o(" head."),qM=c(),nc=s("p"),CM=o("This model inherits from "),Nh=s("a"),NM=o("FlaxPreTrainedModel"),OM=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),AM=c(),sc=s("p"),IM=o("This model is also a Flax Linen "),rc=s("a"),LM=o("flax.linen.Module"),DM=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),SM=c(),wg=s("p"),UM=o("Finally, this model supports inherent JAX features such as:"),WM=c(),qo=s("ul"),$g=s("li"),ac=s("a"),HM=o("Just-In-Time (JIT) compilation"),KM=c(),xg=s("li"),ic=s("a"),RM=o("Automatic Differentiation"),QM=c(),Fg=s("li"),lc=s("a"),VM=o("Vectorization"),JM=c(),Bg=s("li"),dc=s("a"),GM=o("Parallelization"),XM=c(),uo=s("div"),T(cc.$$.fragment),YM=c(),ms=s("p"),ZM=o("The "),Eg=s("code"),e4=o("FlaxBertPreTrainedModel"),t4=o(" forward method, overrides the "),zg=s("code"),o4=o("__call__"),n4=o(" special method."),s4=c(),T(ha.$$.fragment),r4=c(),T(ma.$$.fragment),Ok=c(),fs=s("h2"),fa=s("a"),Mg=s("span"),T(pc.$$.fragment),a4=c(),Pg=s("span"),i4=o("FlaxBertForCausalLM"),Ak=c(),at=s("div"),T(hc.$$.fragment),l4=c(),jg=s("p"),d4=o(`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),c4=c(),mc=s("p"),p4=o("This model inherits from "),Oh=s("a"),h4=o("FlaxPreTrainedModel"),m4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),f4=c(),fc=s("p"),u4=o("This model is also a Flax Linen "),uc=s("a"),g4=o("flax.linen.Module"),_4=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),b4=c(),qg=s("p"),k4=o("Finally, this model supports inherent JAX features such as:"),y4=c(),Co=s("ul"),Cg=s("li"),gc=s("a"),T4=o("Just-In-Time (JIT) compilation"),v4=c(),Ng=s("li"),_c=s("a"),w4=o("Automatic Differentiation"),$4=c(),Og=s("li"),bc=s("a"),x4=o("Vectorization"),F4=c(),Ag=s("li"),kc=s("a"),B4=o("Parallelization"),E4=c(),go=s("div"),T(yc.$$.fragment),z4=c(),us=s("p"),M4=o("The "),Ig=s("code"),P4=o("FlaxBertPreTrainedModel"),j4=o(" forward method, overrides the "),Lg=s("code"),q4=o("__call__"),C4=o(" special method."),N4=c(),T(ua.$$.fragment),O4=c(),T(ga.$$.fragment),Ik=c(),gs=s("h2"),_a=s("a"),Dg=s("span"),T(Tc.$$.fragment),A4=c(),Sg=s("span"),I4=o("FlaxBertForMaskedLM"),Lk=c(),it=s("div"),T(vc.$$.fragment),L4=c(),wc=s("p"),D4=o("Bert Model with a "),Ug=s("code"),S4=o("language modeling"),U4=o(" head on top."),W4=c(),$c=s("p"),H4=o("This model inherits from "),Ah=s("a"),K4=o("FlaxPreTrainedModel"),R4=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Q4=c(),xc=s("p"),V4=o("This model is also a Flax Linen "),Fc=s("a"),J4=o("flax.linen.Module"),G4=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),X4=c(),Wg=s("p"),Y4=o("Finally, this model supports inherent JAX features such as:"),Z4=c(),No=s("ul"),Hg=s("li"),Bc=s("a"),eP=o("Just-In-Time (JIT) compilation"),tP=c(),Kg=s("li"),Ec=s("a"),oP=o("Automatic Differentiation"),nP=c(),Rg=s("li"),zc=s("a"),sP=o("Vectorization"),rP=c(),Qg=s("li"),Mc=s("a"),aP=o("Parallelization"),iP=c(),_o=s("div"),T(Pc.$$.fragment),lP=c(),_s=s("p"),dP=o("The "),Vg=s("code"),cP=o("FlaxBertPreTrainedModel"),pP=o(" forward method, overrides the "),Jg=s("code"),hP=o("__call__"),mP=o(" special method."),fP=c(),T(ba.$$.fragment),uP=c(),T(ka.$$.fragment),Dk=c(),bs=s("h2"),ya=s("a"),Gg=s("span"),T(jc.$$.fragment),gP=c(),Xg=s("span"),_P=o("FlaxBertForNextSentencePrediction"),Sk=c(),lt=s("div"),T(qc.$$.fragment),bP=c(),Cc=s("p"),kP=o("Bert Model with a "),Yg=s("code"),yP=o("next sentence prediction (classification)"),TP=o(" head on top."),vP=c(),Nc=s("p"),wP=o("This model inherits from "),Ih=s("a"),$P=o("FlaxPreTrainedModel"),xP=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FP=c(),Oc=s("p"),BP=o("This model is also a Flax Linen "),Ac=s("a"),EP=o("flax.linen.Module"),zP=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),MP=c(),Zg=s("p"),PP=o("Finally, this model supports inherent JAX features such as:"),jP=c(),Oo=s("ul"),e_=s("li"),Ic=s("a"),qP=o("Just-In-Time (JIT) compilation"),CP=c(),t_=s("li"),Lc=s("a"),NP=o("Automatic Differentiation"),OP=c(),o_=s("li"),Dc=s("a"),AP=o("Vectorization"),IP=c(),n_=s("li"),Sc=s("a"),LP=o("Parallelization"),DP=c(),bo=s("div"),T(Uc.$$.fragment),SP=c(),ks=s("p"),UP=o("The "),s_=s("code"),WP=o("FlaxBertPreTrainedModel"),HP=o(" forward method, overrides the "),r_=s("code"),KP=o("__call__"),RP=o(" special method."),QP=c(),T(Ta.$$.fragment),VP=c(),T(va.$$.fragment),Uk=c(),ys=s("h2"),wa=s("a"),a_=s("span"),T(Wc.$$.fragment),JP=c(),i_=s("span"),GP=o("FlaxBertForSequenceClassification"),Wk=c(),dt=s("div"),T(Hc.$$.fragment),XP=c(),l_=s("p"),YP=o(`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),ZP=c(),Kc=s("p"),ej=o("This model inherits from "),Lh=s("a"),tj=o("FlaxPreTrainedModel"),oj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),nj=c(),Rc=s("p"),sj=o("This model is also a Flax Linen "),Qc=s("a"),rj=o("flax.linen.Module"),aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),ij=c(),d_=s("p"),lj=o("Finally, this model supports inherent JAX features such as:"),dj=c(),Ao=s("ul"),c_=s("li"),Vc=s("a"),cj=o("Just-In-Time (JIT) compilation"),pj=c(),p_=s("li"),Jc=s("a"),hj=o("Automatic Differentiation"),mj=c(),h_=s("li"),Gc=s("a"),fj=o("Vectorization"),uj=c(),m_=s("li"),Xc=s("a"),gj=o("Parallelization"),_j=c(),ko=s("div"),T(Yc.$$.fragment),bj=c(),Ts=s("p"),kj=o("The "),f_=s("code"),yj=o("FlaxBertPreTrainedModel"),Tj=o(" forward method, overrides the "),u_=s("code"),vj=o("__call__"),wj=o(" special method."),$j=c(),T($a.$$.fragment),xj=c(),T(xa.$$.fragment),Hk=c(),vs=s("h2"),Fa=s("a"),g_=s("span"),T(Zc.$$.fragment),Fj=c(),__=s("span"),Bj=o("FlaxBertForMultipleChoice"),Kk=c(),ct=s("div"),T(ep.$$.fragment),Ej=c(),b_=s("p"),zj=o(`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Mj=c(),tp=s("p"),Pj=o("This model inherits from "),Dh=s("a"),jj=o("FlaxPreTrainedModel"),qj=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Cj=c(),op=s("p"),Nj=o("This model is also a Flax Linen "),np=s("a"),Oj=o("flax.linen.Module"),Aj=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Ij=c(),k_=s("p"),Lj=o("Finally, this model supports inherent JAX features such as:"),Dj=c(),Io=s("ul"),y_=s("li"),sp=s("a"),Sj=o("Just-In-Time (JIT) compilation"),Uj=c(),T_=s("li"),rp=s("a"),Wj=o("Automatic Differentiation"),Hj=c(),v_=s("li"),ap=s("a"),Kj=o("Vectorization"),Rj=c(),w_=s("li"),ip=s("a"),Qj=o("Parallelization"),Vj=c(),yo=s("div"),T(lp.$$.fragment),Jj=c(),ws=s("p"),Gj=o("The "),$_=s("code"),Xj=o("FlaxBertPreTrainedModel"),Yj=o(" forward method, overrides the "),x_=s("code"),Zj=o("__call__"),eq=o(" special method."),tq=c(),T(Ba.$$.fragment),oq=c(),T(Ea.$$.fragment),Rk=c(),$s=s("h2"),za=s("a"),F_=s("span"),T(dp.$$.fragment),nq=c(),B_=s("span"),sq=o("FlaxBertForTokenClassification"),Qk=c(),pt=s("div"),T(cp.$$.fragment),rq=c(),E_=s("p"),aq=o(`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),iq=c(),pp=s("p"),lq=o("This model inherits from "),Sh=s("a"),dq=o("FlaxPreTrainedModel"),cq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),pq=c(),hp=s("p"),hq=o("This model is also a Flax Linen "),mp=s("a"),mq=o("flax.linen.Module"),fq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),uq=c(),z_=s("p"),gq=o("Finally, this model supports inherent JAX features such as:"),_q=c(),Lo=s("ul"),M_=s("li"),fp=s("a"),bq=o("Just-In-Time (JIT) compilation"),kq=c(),P_=s("li"),up=s("a"),yq=o("Automatic Differentiation"),Tq=c(),j_=s("li"),gp=s("a"),vq=o("Vectorization"),wq=c(),q_=s("li"),_p=s("a"),$q=o("Parallelization"),xq=c(),To=s("div"),T(bp.$$.fragment),Fq=c(),xs=s("p"),Bq=o("The "),C_=s("code"),Eq=o("FlaxBertPreTrainedModel"),zq=o(" forward method, overrides the "),N_=s("code"),Mq=o("__call__"),Pq=o(" special method."),jq=c(),T(Ma.$$.fragment),qq=c(),T(Pa.$$.fragment),Vk=c(),Fs=s("h2"),ja=s("a"),O_=s("span"),T(kp.$$.fragment),Cq=c(),A_=s("span"),Nq=o("FlaxBertForQuestionAnswering"),Jk=c(),ht=s("div"),T(yp.$$.fragment),Oq=c(),Bs=s("p"),Aq=o(`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=s("code"),Iq=o("span start logits"),Lq=o(" and "),L_=s("code"),Dq=o("span end logits"),Sq=o(")."),Uq=c(),Tp=s("p"),Wq=o("This model inherits from "),Uh=s("a"),Hq=o("FlaxPreTrainedModel"),Kq=o(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),Rq=c(),vp=s("p"),Qq=o("This model is also a Flax Linen "),wp=s("a"),Vq=o("flax.linen.Module"),Jq=o(`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),Gq=c(),D_=s("p"),Xq=o("Finally, this model supports inherent JAX features such as:"),Yq=c(),Do=s("ul"),S_=s("li"),$p=s("a"),Zq=o("Just-In-Time (JIT) compilation"),e3=c(),U_=s("li"),xp=s("a"),t3=o("Automatic Differentiation"),o3=c(),W_=s("li"),Fp=s("a"),n3=o("Vectorization"),s3=c(),H_=s("li"),Bp=s("a"),r3=o("Parallelization"),a3=c(),vo=s("div"),T(Ep.$$.fragment),i3=c(),Es=s("p"),l3=o("The "),K_=s("code"),d3=o("FlaxBertPreTrainedModel"),c3=o(" forward method, overrides the "),R_=s("code"),p3=o("__call__"),h3=o(" special method."),m3=c(),T(qa.$$.fragment),f3=c(),T(Ca.$$.fragment),this.h()},l(i){const k=R7('[data-svelte="svelte-1phssyn"]',document.head);d=r(k,"META",{name:!0,content:!0}),k.forEach(t),g=p(i),m=r(i,"H1",{class:!0});var zp=a(m);f=r(zp,"A",{id:!0,class:!0,href:!0});var Q_=a(f);b=r(Q_,"SPAN",{});var V_=a(b);v(l.$$.fragment,V_),V_.forEach(t),Q_.forEach(t),h=p(zp),z=r(zp,"SPAN",{});var J_=a(z);Fe=n(J_,"BERT"),J_.forEach(t),zp.forEach(t),Te=p(i),S=r(i,"H2",{class:!0});var Mp=a(S);pe=r(Mp,"A",{id:!0,class:!0,href:!0});var G_=a(pe);ee=r(G_,"SPAN",{});var X_=a(ee);v(E.$$.fragment,X_),X_.forEach(t),G_.forEach(t),Be=p(Mp),R=r(Mp,"SPAN",{});var Y_=a(R);Ee=n(Y_,"Overview"),Y_.forEach(t),Mp.forEach(t),ve=p(i),U=r(i,"P",{});var Pp=a(U);ze=n(Pp,"The BERT model was proposed in "),me=r(Pp,"A",{href:!0,rel:!0});var Z_=a(me);G=n(Z_,"BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding"),Z_.forEach(t),Me=n(Pp,` by Jacob Devlin, Ming-Wei Chang, Kenton Lee and Kristina Toutanova. It\u2019s a
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
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation.`),ib.forEach(t),jp.forEach(t),xe=p(i),D=r(i,"P",{});var zs=a(D);Ae=n(zs,"This model was contributed by "),fe=r(zs,"A",{href:!0,rel:!0});var lb=a(fe);L=n(lb,"thomwolf"),lb.forEach(t),Ie=n(zs,". The original code can be found "),W=r(zs,"A",{href:!0,rel:!0});var db=a(W);Le=n(db,"here"),db.forEach(t),se=n(zs,"."),zs.forEach(t),C=p(i),de=r(i,"H2",{class:!0});var qp=a(de);O=r(qp,"A",{id:!0,class:!0,href:!0});var cb=a(O);ke=r(cb,"SPAN",{});var pb=a(ke);v(ue.$$.fragment,pb),pb.forEach(t),cb.forEach(t),y=p(qp),M=r(qp,"SPAN",{});var hb=a(M);Re=n(hb,"BertConfig"),hb.forEach(t),qp.forEach(t),ne=p(i),ye=r(i,"DIV",{class:!0});var So=a(ye);v(We.$$.fragment,So),P=p(So),De=r(So,"P",{});var Uo=a(De);Qe=n(Uo,"This is the configuration class to store the configuration of a "),Ke=r(Uo,"A",{href:!0});var mb=a(Ke);Ve=n(mb,"BertModel"),mb.forEach(t),Je=n(Uo," or a "),I=r(Uo,"A",{href:!0});var fb=a(I);X=n(fb,"TFBertModel"),fb.forEach(t),Ge=n(Uo,`. It is used to
instantiate a BERT model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the BERT
`),He=r(Uo,"A",{href:!0,rel:!0});var ub=a(He);Y=n(ub,"bert-base-uncased"),ub.forEach(t),Xe=n(Uo," architecture."),Uo.forEach(t),Ye=p(So),ce=r(So,"P",{});var Ms=a(ce);Ze=n(Ms,"Configuration objects inherit from "),Z=r(Ms,"A",{href:!0});var gb=a(Z);et=n(gb,"PretrainedConfig"),gb.forEach(t),HT=n(Ms,` and can be used to control the model outputs. Read the
documentation from `),Wp=r(Ms,"A",{href:!0});var _b=a(Wp);KT=n(_b,"PretrainedConfig"),_b.forEach(t),RT=n(Ms," for more information."),Ms.forEach(t),QT=p(So),v(Cs.$$.fragment,So),So.forEach(t),Db=p(i),mn=r(i,"H2",{class:!0});var Cp=a(mn);Ns=r(Cp,"A",{id:!0,class:!0,href:!0});var bb=a(Ns);Pm=r(bb,"SPAN",{});var kb=a(Pm);v(li.$$.fragment,kb),kb.forEach(t),bb.forEach(t),VT=p(Cp),jm=r(Cp,"SPAN",{});var yb=a(jm);JT=n(yb,"BertTokenizer"),yb.forEach(t),Cp.forEach(t),Sb=p(i),tt=r(i,"DIV",{class:!0});var wt=a(tt);v(di.$$.fragment,wt),GT=p(wt),qm=r(wt,"P",{});var Tb=a(qm);XT=n(Tb,"Construct a BERT tokenizer. Based on WordPiece."),Tb.forEach(t),YT=p(wt),ci=r(wt,"P",{});var Np=a(ci);ZT=n(Np,"This tokenizer inherits from "),Hp=r(Np,"A",{href:!0});var vb=a(Hp);ev=n(vb,"PreTrainedTokenizer"),vb.forEach(t),tv=n(Np,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Np.forEach(t),ov=p(wt),Ko=r(wt,"DIV",{class:!0});var Ps=a(Ko);v(pi.$$.fragment,Ps),nv=p(Ps),Cm=r(Ps,"P",{});var wb=a(Cm);sv=n(wb,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),wb.forEach(t),rv=p(Ps),hi=r(Ps,"UL",{});var Op=a(hi);Kp=r(Op,"LI",{});var Wh=a(Kp);av=n(Wh,"single sequence: "),Nm=r(Wh,"CODE",{});var $b=a(Nm);iv=n($b,"[CLS] X [SEP]"),$b.forEach(t),Wh.forEach(t),lv=p(Op),Rp=r(Op,"LI",{});var Hh=a(Rp);dv=n(Hh,"pair of sequences: "),Om=r(Hh,"CODE",{});var xb=a(Om);cv=n(xb,"[CLS] A [SEP] B [SEP]"),xb.forEach(t),Hh.forEach(t),Op.forEach(t),Ps.forEach(t),pv=p(wt),Os=r(wt,"DIV",{class:!0});var Ap=a(Os);v(mi.$$.fragment,Ap),hv=p(Ap),fi=r(Ap,"P",{});var Ip=a(fi);mv=n(Ip,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Am=r(Ip,"CODE",{});var Fb=a(Am);fv=n(Fb,"prepare_for_model"),Fb.forEach(t),uv=n(Ip," method."),Ip.forEach(t),Ap.forEach(t),gv=p(wt),oo=r(wt,"DIV",{class:!0});var Wo=a(oo);v(ui.$$.fragment,Wo),_v=p(Wo),Im=r(Wo,"P",{});var Bb=a(Im);bv=n(Bb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Bb.forEach(t),kv=p(Wo),v(As.$$.fragment,Wo),yv=p(Wo),fn=r(Wo,"P",{});var js=a(fn);Tv=n(js,"If "),Lm=r(js,"CODE",{});var Eb=a(Lm);vv=n(Eb,"token_ids_1"),Eb.forEach(t),wv=n(js," is "),Dm=r(js,"CODE",{});var zb=a(Dm);$v=n(zb,"None"),zb.forEach(t),xv=n(js,", this method only returns the first portion of the mask (0s)."),js.forEach(t),Wo.forEach(t),Fv=p(wt),Qp=r(wt,"DIV",{class:!0});var Mb=a(Qp);v(gi.$$.fragment,Mb),Mb.forEach(t),wt.forEach(t),Ub=p(i),un=r(i,"H2",{class:!0});var Lp=a(un);Is=r(Lp,"A",{id:!0,class:!0,href:!0});var Pb=a(Is);Sm=r(Pb,"SPAN",{});var jb=a(Sm);v(_i.$$.fragment,jb),jb.forEach(t),Pb.forEach(t),Bv=p(Lp),Um=r(Lp,"SPAN",{});var qb=a(Um);Ev=n(qb,"BertTokenizerFast"),qb.forEach(t),Lp.forEach(t),Wb=p(i),xt=r(i,"DIV",{class:!0});var to=a(xt);v(bi.$$.fragment,to),zv=p(to),ki=r(to,"P",{});var Dp=a(ki);Mv=n(Dp,"Construct a \u201Cfast\u201D BERT tokenizer (backed by HuggingFace\u2019s "),Wm=r(Dp,"EM",{});var Cb=a(Wm);Pv=n(Cb,"tokenizers"),Cb.forEach(t),jv=n(Dp," library). Based on WordPiece."),Dp.forEach(t),qv=p(to),yi=r(to,"P",{});var Sp=a(yi);Cv=n(Sp,"This tokenizer inherits from "),Vp=r(Sp,"A",{href:!0});var Nb=a(Vp);Nv=n(Nb,"PreTrainedTokenizerFast"),Nb.forEach(t),Ov=n(Sp,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sp.forEach(t),Av=p(to),Ro=r(to,"DIV",{class:!0});var qs=a(Ro);v(Ti.$$.fragment,qs),Iv=p(qs),Hm=r(qs,"P",{});var Ob=a(Hm);Lv=n(Ob,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Ob.forEach(t),Dv=p(qs),vi=r(qs,"UL",{});var Up=a(vi);Jp=r(Up,"LI",{});var Kh=a(Jp);Sv=n(Kh,"single sequence: "),Km=r(Kh,"CODE",{});var Ab=a(Km);Uv=n(Ab,"[CLS] X [SEP]"),Ab.forEach(t),Kh.forEach(t),Wv=p(Up),Gp=r(Up,"LI",{});var Rh=a(Gp);Hv=n(Rh,"pair of sequences: "),Rm=r(Rh,"CODE",{});var Ib=a(Rm);Kv=n(Ib,"[CLS] A [SEP] B [SEP]"),Ib.forEach(t),Rh.forEach(t),Up.forEach(t),qs.forEach(t),Rv=p(to),no=r(to,"DIV",{class:!0});var Ho=a(no);v(wi.$$.fragment,Ho),Qv=p(Ho),Qm=r(Ho,"P",{});var Lb=a(Qm);Vv=n(Lb,"Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence"),Lb.forEach(t),Jv=p(Ho),v(Ls.$$.fragment,Ho),Gv=p(Ho),gn=r(Ho,"P",{});var Qh=a(gn);Xv=n(Qh,"If "),Vm=r(Qh,"CODE",{});var u3=a(Vm);Yv=n(u3,"token_ids_1"),u3.forEach(t),Zv=n(Qh," is "),Jm=r(Qh,"CODE",{});var g3=a(Jm);ew=n(g3,"None"),g3.forEach(t),tw=n(Qh,", this method only returns the first portion of the mask (0s)."),Qh.forEach(t),Ho.forEach(t),to.forEach(t),Hb=p(i),_n=r(i,"H2",{class:!0});var Xk=a(_n);Ds=r(Xk,"A",{id:!0,class:!0,href:!0});var _3=a(Ds);Gm=r(_3,"SPAN",{});var b3=a(Gm);v($i.$$.fragment,b3),b3.forEach(t),_3.forEach(t),ow=p(Xk),Xm=r(Xk,"SPAN",{});var k3=a(Xm);nw=n(k3,"TFBertTokenizer"),k3.forEach(t),Xk.forEach(t),Kb=p(i),Ft=r(i,"DIV",{class:!0});var Jo=a(Ft);v(xi.$$.fragment,Jo),sw=p(Jo),bn=r(Jo,"P",{});var Vh=a(bn);rw=n(Vh,`This is an in-graph tokenizer for BERT. It should be initialized similarly to other tokenizers, using the
`),Ym=r(Vh,"CODE",{});var y3=a(Ym);aw=n(y3,"from_pretrained()"),y3.forEach(t),iw=n(Vh," method. It can also be initialized with the "),Zm=r(Vh,"CODE",{});var T3=a(Zm);lw=n(T3,"from_tokenizer()"),T3.forEach(t),dw=n(Vh,` method, which imports settings
from an existing standard tokenizer object.`),Vh.forEach(t),cw=p(Jo),Fi=r(Jo,"P",{});var Yk=a(Fi);pw=n(Yk,`In-graph tokenizers, unlike other Hugging Face tokenizers, are actually Keras layers and are designed to be run
when the model is called, rather than during preprocessing. As a result, they have somewhat more limited options
than standard tokenizer classes. They are most useful when you want to create an end-to-end model that goes
straight from `),ef=r(Yk,"CODE",{});var v3=a(ef);hw=n(v3,"tf.string"),v3.forEach(t),mw=n(Yk," inputs to outputs."),Yk.forEach(t),fw=p(Jo),Qo=r(Jo,"DIV",{class:!0});var Jh=a(Qo);v(Bi.$$.fragment,Jh),uw=p(Jh),Ei=r(Jh,"P",{});var Zk=a(Ei);gw=n(Zk,"Instantiate a "),tf=r(Zk,"CODE",{});var w3=a(tf);_w=n(w3,"TFBertTokenizer"),w3.forEach(t),bw=n(Zk," from a pre-trained tokenizer."),Zk.forEach(t),kw=p(Jh),v(Ss.$$.fragment,Jh),Jh.forEach(t),yw=p(Jo),Vo=r(Jo,"DIV",{class:!0});var Gh=a(Vo);v(zi.$$.fragment,Gh),Tw=p(Gh),kn=r(Gh,"P",{});var Xh=a(kn);vw=n(Xh,"Initialize a "),of=r(Xh,"CODE",{});var $3=a(of);ww=n($3,"TFBertTokenizer"),$3.forEach(t),$w=n(Xh," from an existing "),nf=r(Xh,"CODE",{});var x3=a(nf);xw=n(x3,"Tokenizer"),x3.forEach(t),Fw=n(Xh,"."),Xh.forEach(t),Bw=p(Gh),v(Us.$$.fragment,Gh),Gh.forEach(t),Jo.forEach(t),Rb=p(i),yn=r(i,"H2",{class:!0});var ey=a(yn);Ws=r(ey,"A",{id:!0,class:!0,href:!0});var F3=a(Ws);sf=r(F3,"SPAN",{});var B3=a(sf);v(Mi.$$.fragment,B3),B3.forEach(t),F3.forEach(t),Ew=p(ey),rf=r(ey,"SPAN",{});var E3=a(rf);zw=n(E3,"Bert specific outputs"),E3.forEach(t),ey.forEach(t),Qb=p(i),Tn=r(i,"DIV",{class:!0});var ty=a(Tn);v(Pi.$$.fragment,ty),Mw=p(ty),ji=r(ty,"P",{});var oy=a(ji);Pw=n(oy,"Output type of "),Xp=r(oy,"A",{href:!0});var z3=a(Xp);jw=n(z3,"BertForPreTraining"),z3.forEach(t),qw=n(oy,"."),oy.forEach(t),ty.forEach(t),Vb=p(i),vn=r(i,"DIV",{class:!0});var ny=a(vn);v(qi.$$.fragment,ny),Cw=p(ny),Ci=r(ny,"P",{});var sy=a(Ci);Nw=n(sy,"Output type of "),Yp=r(sy,"A",{href:!0});var M3=a(Yp);Ow=n(M3,"TFBertForPreTraining"),M3.forEach(t),Aw=n(sy,"."),sy.forEach(t),ny.forEach(t),Jb=p(i),Po=r(i,"DIV",{class:!0});var Yh=a(Po);v(Ni.$$.fragment,Yh),Iw=p(Yh),Oi=r(Yh,"P",{});var ry=a(Oi);Lw=n(ry,"Output type of "),Zp=r(ry,"A",{href:!0});var P3=a(Zp);Dw=n(P3,"BertForPreTraining"),P3.forEach(t),Sw=n(ry,"."),ry.forEach(t),Uw=p(Yh),Hs=r(Yh,"DIV",{class:!0});var ay=a(Hs);v(Ai.$$.fragment,ay),Ww=p(ay),af=r(ay,"P",{});var j3=a(af);Hw=n(j3,"\u201CReturns a new object replacing the specified fields with new values."),j3.forEach(t),ay.forEach(t),Yh.forEach(t),Gb=p(i),wn=r(i,"H2",{class:!0});var iy=a(wn);Ks=r(iy,"A",{id:!0,class:!0,href:!0});var q3=a(Ks);lf=r(q3,"SPAN",{});var C3=a(lf);v(Ii.$$.fragment,C3),C3.forEach(t),q3.forEach(t),Kw=p(iy),df=r(iy,"SPAN",{});var N3=a(df);Rw=n(N3,"BertModel"),N3.forEach(t),iy.forEach(t),Xb=p(i),ot=r(i,"DIV",{class:!0});var Wt=a(ot);v(Li.$$.fragment,Wt),Qw=p(Wt),cf=r(Wt,"P",{});var O3=a(cf);Vw=n(O3,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),O3.forEach(t),Jw=p(Wt),Di=r(Wt,"P",{});var ly=a(Di);Gw=n(ly,"This model inherits from "),eh=r(ly,"A",{href:!0});var A3=a(eh);Xw=n(A3,"PreTrainedModel"),A3.forEach(t),Yw=n(ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ly.forEach(t),Zw=p(Wt),Si=r(Wt,"P",{});var dy=a(Si);e1=n(dy,"This model is also a PyTorch "),Ui=r(dy,"A",{href:!0,rel:!0});var I3=a(Ui);t1=n(I3,"torch.nn.Module"),I3.forEach(t),o1=n(dy,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dy.forEach(t),n1=p(Wt),Wi=r(Wt,"P",{});var cy=a(Wi);s1=n(cy,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Hi=r(cy,"A",{href:!0,rel:!0});var L3=a(Hi);r1=n(L3,`Attention is
all you need`),L3.forEach(t),a1=n(cy,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),cy.forEach(t),i1=p(Wt),ft=r(Wt,"P",{});var Ht=a(ft);l1=n(Ht,"To behave as an decoder the model needs to be initialized with the "),pf=r(Ht,"CODE",{});var D3=a(pf);d1=n(D3,"is_decoder"),D3.forEach(t),c1=n(Ht,` argument of the configuration set
to `),hf=r(Ht,"CODE",{});var S3=a(hf);p1=n(S3,"True"),S3.forEach(t),h1=n(Ht,". To be used in a Seq2Seq model, the model needs to initialized with both "),mf=r(Ht,"CODE",{});var U3=a(mf);m1=n(U3,"is_decoder"),U3.forEach(t),f1=n(Ht,` argument and
`),ff=r(Ht,"CODE",{});var W3=a(ff);u1=n(W3,"add_cross_attention"),W3.forEach(t),g1=n(Ht," set to "),uf=r(Ht,"CODE",{});var H3=a(uf);_1=n(H3,"True"),H3.forEach(t),b1=n(Ht,"; an "),gf=r(Ht,"CODE",{});var K3=a(gf);k1=n(K3,"encoder_hidden_states"),K3.forEach(t),y1=n(Ht," is then expected as an input to the forward pass."),Ht.forEach(t),T1=p(Wt),so=r(Wt,"DIV",{class:!0});var Na=a(so);v(Ki.$$.fragment,Na),v1=p(Na),$n=r(Na,"P",{});var Zh=a($n);w1=n(Zh,"The "),th=r(Zh,"A",{href:!0});var R3=a(th);$1=n(R3,"BertModel"),R3.forEach(t),x1=n(Zh," forward method, overrides the "),_f=r(Zh,"CODE",{});var Q3=a(_f);F1=n(Q3,"__call__"),Q3.forEach(t),B1=n(Zh," special method."),Zh.forEach(t),E1=p(Na),v(Rs.$$.fragment,Na),z1=p(Na),v(Qs.$$.fragment,Na),Na.forEach(t),Wt.forEach(t),Yb=p(i),xn=r(i,"H2",{class:!0});var py=a(xn);Vs=r(py,"A",{id:!0,class:!0,href:!0});var V3=a(Vs);bf=r(V3,"SPAN",{});var J3=a(bf);v(Ri.$$.fragment,J3),J3.forEach(t),V3.forEach(t),M1=p(py),kf=r(py,"SPAN",{});var G3=a(kf);P1=n(G3,"BertForPreTraining"),G3.forEach(t),py.forEach(t),Zb=p(i),Bt=r(i,"DIV",{class:!0});var Go=a(Bt);v(Qi.$$.fragment,Go),j1=p(Go),Fn=r(Go,"P",{});var em=a(Fn);q1=n(em,"Bert Model with two heads on top as done during the pretraining: a "),yf=r(em,"CODE",{});var X3=a(yf);C1=n(X3,"masked language modeling"),X3.forEach(t),N1=n(em," head and a "),Tf=r(em,"CODE",{});var Y3=a(Tf);O1=n(Y3,"next sentence prediction (classification)"),Y3.forEach(t),A1=n(em," head."),em.forEach(t),I1=p(Go),Vi=r(Go,"P",{});var hy=a(Vi);L1=n(hy,"This model inherits from "),oh=r(hy,"A",{href:!0});var Z3=a(oh);D1=n(Z3,"PreTrainedModel"),Z3.forEach(t),S1=n(hy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hy.forEach(t),U1=p(Go),Ji=r(Go,"P",{});var my=a(Ji);W1=n(my,"This model is also a PyTorch "),Gi=r(my,"A",{href:!0,rel:!0});var eC=a(Gi);H1=n(eC,"torch.nn.Module"),eC.forEach(t),K1=n(my,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),my.forEach(t),R1=p(Go),ro=r(Go,"DIV",{class:!0});var Oa=a(ro);v(Xi.$$.fragment,Oa),Q1=p(Oa),Bn=r(Oa,"P",{});var tm=a(Bn);V1=n(tm,"The "),nh=r(tm,"A",{href:!0});var tC=a(nh);J1=n(tC,"BertForPreTraining"),tC.forEach(t),G1=n(tm," forward method, overrides the "),vf=r(tm,"CODE",{});var oC=a(vf);X1=n(oC,"__call__"),oC.forEach(t),Y1=n(tm," special method."),tm.forEach(t),Z1=p(Oa),v(Js.$$.fragment,Oa),e$=p(Oa),v(Gs.$$.fragment,Oa),Oa.forEach(t),Go.forEach(t),ek=p(i),En=r(i,"H2",{class:!0});var fy=a(En);Xs=r(fy,"A",{id:!0,class:!0,href:!0});var nC=a(Xs);wf=r(nC,"SPAN",{});var sC=a(wf);v(Yi.$$.fragment,sC),sC.forEach(t),nC.forEach(t),t$=p(fy),$f=r(fy,"SPAN",{});var rC=a($f);o$=n(rC,"BertLMHeadModel"),rC.forEach(t),fy.forEach(t),tk=p(i),Et=r(i,"DIV",{class:!0});var Xo=a(Et);v(Zi.$$.fragment,Xo),n$=p(Xo),el=r(Xo,"P",{});var uy=a(el);s$=n(uy,"Bert Model with a "),xf=r(uy,"CODE",{});var aC=a(xf);r$=n(aC,"language modeling"),aC.forEach(t),a$=n(uy," head on top for CLM fine-tuning."),uy.forEach(t),i$=p(Xo),tl=r(Xo,"P",{});var gy=a(tl);l$=n(gy,"This model inherits from "),sh=r(gy,"A",{href:!0});var iC=a(sh);d$=n(iC,"PreTrainedModel"),iC.forEach(t),c$=n(gy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy.forEach(t),p$=p(Xo),ol=r(Xo,"P",{});var _y=a(ol);h$=n(_y,"This model is also a PyTorch "),nl=r(_y,"A",{href:!0,rel:!0});var lC=a(nl);m$=n(lC,"torch.nn.Module"),lC.forEach(t),f$=n(_y,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_y.forEach(t),u$=p(Xo),ao=r(Xo,"DIV",{class:!0});var Aa=a(ao);v(sl.$$.fragment,Aa),g$=p(Aa),zn=r(Aa,"P",{});var om=a(zn);_$=n(om,"The "),rh=r(om,"A",{href:!0});var dC=a(rh);b$=n(dC,"BertLMHeadModel"),dC.forEach(t),k$=n(om," forward method, overrides the "),Ff=r(om,"CODE",{});var cC=a(Ff);y$=n(cC,"__call__"),cC.forEach(t),T$=n(om," special method."),om.forEach(t),v$=p(Aa),v(Ys.$$.fragment,Aa),w$=p(Aa),v(Zs.$$.fragment,Aa),Aa.forEach(t),Xo.forEach(t),ok=p(i),Mn=r(i,"H2",{class:!0});var by=a(Mn);er=r(by,"A",{id:!0,class:!0,href:!0});var pC=a(er);Bf=r(pC,"SPAN",{});var hC=a(Bf);v(rl.$$.fragment,hC),hC.forEach(t),pC.forEach(t),$$=p(by),Ef=r(by,"SPAN",{});var mC=a(Ef);x$=n(mC,"BertForMaskedLM"),mC.forEach(t),by.forEach(t),nk=p(i),zt=r(i,"DIV",{class:!0});var Yo=a(zt);v(al.$$.fragment,Yo),F$=p(Yo),il=r(Yo,"P",{});var ky=a(il);B$=n(ky,"Bert Model with a "),zf=r(ky,"CODE",{});var fC=a(zf);E$=n(fC,"language modeling"),fC.forEach(t),z$=n(ky," head on top."),ky.forEach(t),M$=p(Yo),ll=r(Yo,"P",{});var yy=a(ll);P$=n(yy,"This model inherits from "),ah=r(yy,"A",{href:!0});var uC=a(ah);j$=n(uC,"PreTrainedModel"),uC.forEach(t),q$=n(yy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yy.forEach(t),C$=p(Yo),dl=r(Yo,"P",{});var Ty=a(dl);N$=n(Ty,"This model is also a PyTorch "),cl=r(Ty,"A",{href:!0,rel:!0});var gC=a(cl);O$=n(gC,"torch.nn.Module"),gC.forEach(t),A$=n(Ty,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ty.forEach(t),I$=p(Yo),Nt=r(Yo,"DIV",{class:!0});var Zo=a(Nt);v(pl.$$.fragment,Zo),L$=p(Zo),Pn=r(Zo,"P",{});var nm=a(Pn);D$=n(nm,"The "),ih=r(nm,"A",{href:!0});var _C=a(ih);S$=n(_C,"BertForMaskedLM"),_C.forEach(t),U$=n(nm," forward method, overrides the "),Mf=r(nm,"CODE",{});var bC=a(Mf);W$=n(bC,"__call__"),bC.forEach(t),H$=n(nm," special method."),nm.forEach(t),K$=p(Zo),v(tr.$$.fragment,Zo),R$=p(Zo),v(or.$$.fragment,Zo),Q$=p(Zo),v(nr.$$.fragment,Zo),Zo.forEach(t),Yo.forEach(t),sk=p(i),jn=r(i,"H2",{class:!0});var vy=a(jn);sr=r(vy,"A",{id:!0,class:!0,href:!0});var kC=a(sr);Pf=r(kC,"SPAN",{});var yC=a(Pf);v(hl.$$.fragment,yC),yC.forEach(t),kC.forEach(t),V$=p(vy),jf=r(vy,"SPAN",{});var TC=a(jf);J$=n(TC,"BertForNextSentencePrediction"),TC.forEach(t),vy.forEach(t),rk=p(i),Mt=r(i,"DIV",{class:!0});var en=a(Mt);v(ml.$$.fragment,en),G$=p(en),fl=r(en,"P",{});var wy=a(fl);X$=n(wy,"Bert Model with a "),qf=r(wy,"CODE",{});var vC=a(qf);Y$=n(vC,"next sentence prediction (classification)"),vC.forEach(t),Z$=n(wy," head on top."),wy.forEach(t),e2=p(en),ul=r(en,"P",{});var $y=a(ul);t2=n($y,"This model inherits from "),lh=r($y,"A",{href:!0});var wC=a(lh);o2=n(wC,"PreTrainedModel"),wC.forEach(t),n2=n($y,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$y.forEach(t),s2=p(en),gl=r(en,"P",{});var xy=a(gl);r2=n(xy,"This model is also a PyTorch "),_l=r(xy,"A",{href:!0,rel:!0});var $C=a(_l);a2=n($C,"torch.nn.Module"),$C.forEach(t),i2=n(xy,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xy.forEach(t),l2=p(en),io=r(en,"DIV",{class:!0});var Ia=a(io);v(bl.$$.fragment,Ia),d2=p(Ia),qn=r(Ia,"P",{});var sm=a(qn);c2=n(sm,"The "),dh=r(sm,"A",{href:!0});var xC=a(dh);p2=n(xC,"BertForNextSentencePrediction"),xC.forEach(t),h2=n(sm," forward method, overrides the "),Cf=r(sm,"CODE",{});var FC=a(Cf);m2=n(FC,"__call__"),FC.forEach(t),f2=n(sm," special method."),sm.forEach(t),u2=p(Ia),v(rr.$$.fragment,Ia),g2=p(Ia),v(ar.$$.fragment,Ia),Ia.forEach(t),en.forEach(t),ak=p(i),Cn=r(i,"H2",{class:!0});var Fy=a(Cn);ir=r(Fy,"A",{id:!0,class:!0,href:!0});var BC=a(ir);Nf=r(BC,"SPAN",{});var EC=a(Nf);v(kl.$$.fragment,EC),EC.forEach(t),BC.forEach(t),_2=p(Fy),Of=r(Fy,"SPAN",{});var zC=a(Of);b2=n(zC,"BertForSequenceClassification"),zC.forEach(t),Fy.forEach(t),ik=p(i),Pt=r(i,"DIV",{class:!0});var tn=a(Pt);v(yl.$$.fragment,tn),k2=p(tn),Af=r(tn,"P",{});var MC=a(Af);y2=n(MC,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),MC.forEach(t),T2=p(tn),Tl=r(tn,"P",{});var By=a(Tl);v2=n(By,"This model inherits from "),ch=r(By,"A",{href:!0});var PC=a(ch);w2=n(PC,"PreTrainedModel"),PC.forEach(t),$2=n(By,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),By.forEach(t),x2=p(tn),vl=r(tn,"P",{});var Ey=a(vl);F2=n(Ey,"This model is also a PyTorch "),wl=r(Ey,"A",{href:!0,rel:!0});var jC=a(wl);B2=n(jC,"torch.nn.Module"),jC.forEach(t),E2=n(Ey,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ey.forEach(t),z2=p(tn),mt=r(tn,"DIV",{class:!0});var Kt=a(mt);v($l.$$.fragment,Kt),M2=p(Kt),Nn=r(Kt,"P",{});var rm=a(Nn);P2=n(rm,"The "),ph=r(rm,"A",{href:!0});var qC=a(ph);j2=n(qC,"BertForSequenceClassification"),qC.forEach(t),q2=n(rm," forward method, overrides the "),If=r(rm,"CODE",{});var CC=a(If);C2=n(CC,"__call__"),CC.forEach(t),N2=n(rm," special method."),rm.forEach(t),O2=p(Kt),v(lr.$$.fragment,Kt),A2=p(Kt),v(dr.$$.fragment,Kt),I2=p(Kt),v(cr.$$.fragment,Kt),L2=p(Kt),v(pr.$$.fragment,Kt),D2=p(Kt),v(hr.$$.fragment,Kt),Kt.forEach(t),tn.forEach(t),lk=p(i),On=r(i,"H2",{class:!0});var zy=a(On);mr=r(zy,"A",{id:!0,class:!0,href:!0});var NC=a(mr);Lf=r(NC,"SPAN",{});var OC=a(Lf);v(xl.$$.fragment,OC),OC.forEach(t),NC.forEach(t),S2=p(zy),Df=r(zy,"SPAN",{});var AC=a(Df);U2=n(AC,"BertForMultipleChoice"),AC.forEach(t),zy.forEach(t),dk=p(i),jt=r(i,"DIV",{class:!0});var on=a(jt);v(Fl.$$.fragment,on),W2=p(on),Sf=r(on,"P",{});var IC=a(Sf);H2=n(IC,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),IC.forEach(t),K2=p(on),Bl=r(on,"P",{});var My=a(Bl);R2=n(My,"This model inherits from "),hh=r(My,"A",{href:!0});var LC=a(hh);Q2=n(LC,"PreTrainedModel"),LC.forEach(t),V2=n(My,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),My.forEach(t),J2=p(on),El=r(on,"P",{});var Py=a(El);G2=n(Py,"This model is also a PyTorch "),zl=r(Py,"A",{href:!0,rel:!0});var DC=a(zl);X2=n(DC,"torch.nn.Module"),DC.forEach(t),Y2=n(Py,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Py.forEach(t),Z2=p(on),lo=r(on,"DIV",{class:!0});var La=a(lo);v(Ml.$$.fragment,La),ex=p(La),An=r(La,"P",{});var am=a(An);tx=n(am,"The "),mh=r(am,"A",{href:!0});var SC=a(mh);ox=n(SC,"BertForMultipleChoice"),SC.forEach(t),nx=n(am," forward method, overrides the "),Uf=r(am,"CODE",{});var UC=a(Uf);sx=n(UC,"__call__"),UC.forEach(t),rx=n(am," special method."),am.forEach(t),ax=p(La),v(fr.$$.fragment,La),ix=p(La),v(ur.$$.fragment,La),La.forEach(t),on.forEach(t),ck=p(i),In=r(i,"H2",{class:!0});var jy=a(In);gr=r(jy,"A",{id:!0,class:!0,href:!0});var WC=a(gr);Wf=r(WC,"SPAN",{});var HC=a(Wf);v(Pl.$$.fragment,HC),HC.forEach(t),WC.forEach(t),lx=p(jy),Hf=r(jy,"SPAN",{});var KC=a(Hf);dx=n(KC,"BertForTokenClassification"),KC.forEach(t),jy.forEach(t),pk=p(i),qt=r(i,"DIV",{class:!0});var nn=a(qt);v(jl.$$.fragment,nn),cx=p(nn),Kf=r(nn,"P",{});var RC=a(Kf);px=n(RC,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),RC.forEach(t),hx=p(nn),ql=r(nn,"P",{});var qy=a(ql);mx=n(qy,"This model inherits from "),fh=r(qy,"A",{href:!0});var QC=a(fh);fx=n(QC,"PreTrainedModel"),QC.forEach(t),ux=n(qy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qy.forEach(t),gx=p(nn),Cl=r(nn,"P",{});var Cy=a(Cl);_x=n(Cy,"This model is also a PyTorch "),Nl=r(Cy,"A",{href:!0,rel:!0});var VC=a(Nl);bx=n(VC,"torch.nn.Module"),VC.forEach(t),kx=n(Cy,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Cy.forEach(t),yx=p(nn),Ot=r(nn,"DIV",{class:!0});var sn=a(Ot);v(Ol.$$.fragment,sn),Tx=p(sn),Ln=r(sn,"P",{});var im=a(Ln);vx=n(im,"The "),uh=r(im,"A",{href:!0});var JC=a(uh);wx=n(JC,"BertForTokenClassification"),JC.forEach(t),$x=n(im," forward method, overrides the "),Rf=r(im,"CODE",{});var GC=a(Rf);xx=n(GC,"__call__"),GC.forEach(t),Fx=n(im," special method."),im.forEach(t),Bx=p(sn),v(_r.$$.fragment,sn),Ex=p(sn),v(br.$$.fragment,sn),zx=p(sn),v(kr.$$.fragment,sn),sn.forEach(t),nn.forEach(t),hk=p(i),Dn=r(i,"H2",{class:!0});var Ny=a(Dn);yr=r(Ny,"A",{id:!0,class:!0,href:!0});var XC=a(yr);Qf=r(XC,"SPAN",{});var YC=a(Qf);v(Al.$$.fragment,YC),YC.forEach(t),XC.forEach(t),Mx=p(Ny),Vf=r(Ny,"SPAN",{});var ZC=a(Vf);Px=n(ZC,"BertForQuestionAnswering"),ZC.forEach(t),Ny.forEach(t),mk=p(i),Ct=r(i,"DIV",{class:!0});var rn=a(Ct);v(Il.$$.fragment,rn),jx=p(rn),Sn=r(rn,"P",{});var lm=a(Sn);qx=n(lm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Jf=r(lm,"CODE",{});var e5=a(Jf);Cx=n(e5,"span start logits"),e5.forEach(t),Nx=n(lm," and "),Gf=r(lm,"CODE",{});var t5=a(Gf);Ox=n(t5,"span end logits"),t5.forEach(t),Ax=n(lm,")."),lm.forEach(t),Ix=p(rn),Ll=r(rn,"P",{});var Oy=a(Ll);Lx=n(Oy,"This model inherits from "),gh=r(Oy,"A",{href:!0});var o5=a(gh);Dx=n(o5,"PreTrainedModel"),o5.forEach(t),Sx=n(Oy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oy.forEach(t),Ux=p(rn),Dl=r(rn,"P",{});var Ay=a(Dl);Wx=n(Ay,"This model is also a PyTorch "),Sl=r(Ay,"A",{href:!0,rel:!0});var n5=a(Sl);Hx=n(n5,"torch.nn.Module"),n5.forEach(t),Kx=n(Ay,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ay.forEach(t),Rx=p(rn),At=r(rn,"DIV",{class:!0});var an=a(At);v(Ul.$$.fragment,an),Qx=p(an),Un=r(an,"P",{});var dm=a(Un);Vx=n(dm,"The "),_h=r(dm,"A",{href:!0});var s5=a(_h);Jx=n(s5,"BertForQuestionAnswering"),s5.forEach(t),Gx=n(dm," forward method, overrides the "),Xf=r(dm,"CODE",{});var r5=a(Xf);Xx=n(r5,"__call__"),r5.forEach(t),Yx=n(dm," special method."),dm.forEach(t),Zx=p(an),v(Tr.$$.fragment,an),eF=p(an),v(vr.$$.fragment,an),tF=p(an),v(wr.$$.fragment,an),an.forEach(t),rn.forEach(t),fk=p(i),Wn=r(i,"H2",{class:!0});var Iy=a(Wn);$r=r(Iy,"A",{id:!0,class:!0,href:!0});var a5=a($r);Yf=r(a5,"SPAN",{});var i5=a(Yf);v(Wl.$$.fragment,i5),i5.forEach(t),a5.forEach(t),oF=p(Iy),Zf=r(Iy,"SPAN",{});var l5=a(Zf);nF=n(l5,"TFBertModel"),l5.forEach(t),Iy.forEach(t),uk=p(i),ut=r(i,"DIV",{class:!0});var wo=a(ut);v(Hl.$$.fragment,wo),sF=p(wo),eu=r(wo,"P",{});var d5=a(eu);rF=n(d5,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),d5.forEach(t),aF=p(wo),Kl=r(wo,"P",{});var Ly=a(Kl);iF=n(Ly,"This model inherits from "),bh=r(Ly,"A",{href:!0});var c5=a(bh);lF=n(c5,"TFPreTrainedModel"),c5.forEach(t),dF=n(Ly,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ly.forEach(t),cF=p(wo),Rl=r(wo,"P",{});var Dy=a(Rl);pF=n(Dy,"This model is also a "),Ql=r(Dy,"A",{href:!0,rel:!0});var p5=a(Ql);hF=n(p5,"tf.keras.Model"),p5.forEach(t),mF=n(Dy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dy.forEach(t),fF=p(wo),v(xr.$$.fragment,wo),uF=p(wo),co=r(wo,"DIV",{class:!0});var Da=a(co);v(Vl.$$.fragment,Da),gF=p(Da),Hn=r(Da,"P",{});var cm=a(Hn);_F=n(cm,"The "),kh=r(cm,"A",{href:!0});var h5=a(kh);bF=n(h5,"TFBertModel"),h5.forEach(t),kF=n(cm," forward method, overrides the "),tu=r(cm,"CODE",{});var m5=a(tu);yF=n(m5,"__call__"),m5.forEach(t),TF=n(cm," special method."),cm.forEach(t),vF=p(Da),v(Fr.$$.fragment,Da),wF=p(Da),v(Br.$$.fragment,Da),Da.forEach(t),wo.forEach(t),gk=p(i),Kn=r(i,"H2",{class:!0});var Sy=a(Kn);Er=r(Sy,"A",{id:!0,class:!0,href:!0});var f5=a(Er);ou=r(f5,"SPAN",{});var u5=a(ou);v(Jl.$$.fragment,u5),u5.forEach(t),f5.forEach(t),$F=p(Sy),nu=r(Sy,"SPAN",{});var g5=a(nu);xF=n(g5,"TFBertForPreTraining"),g5.forEach(t),Sy.forEach(t),_k=p(i),gt=r(i,"DIV",{class:!0});var $o=a(gt);v(Gl.$$.fragment,$o),FF=p($o),Rn=r($o,"P",{});var pm=a(Rn);BF=n(pm,`Bert Model with two heads on top as done during the pretraining:
a `),su=r(pm,"CODE",{});var _5=a(su);EF=n(_5,"masked language modeling"),_5.forEach(t),zF=n(pm," head and a "),ru=r(pm,"CODE",{});var b5=a(ru);MF=n(b5,"next sentence prediction (classification)"),b5.forEach(t),PF=n(pm," head."),pm.forEach(t),jF=p($o),Xl=r($o,"P",{});var Uy=a(Xl);qF=n(Uy,"This model inherits from "),yh=r(Uy,"A",{href:!0});var k5=a(yh);CF=n(k5,"TFPreTrainedModel"),k5.forEach(t),NF=n(Uy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uy.forEach(t),OF=p($o),Yl=r($o,"P",{});var Wy=a(Yl);AF=n(Wy,"This model is also a "),Zl=r(Wy,"A",{href:!0,rel:!0});var y5=a(Zl);IF=n(y5,"tf.keras.Model"),y5.forEach(t),LF=n(Wy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wy.forEach(t),DF=p($o),v(zr.$$.fragment,$o),SF=p($o),po=r($o,"DIV",{class:!0});var Sa=a(po);v(ed.$$.fragment,Sa),UF=p(Sa),Qn=r(Sa,"P",{});var hm=a(Qn);WF=n(hm,"The "),Th=r(hm,"A",{href:!0});var T5=a(Th);HF=n(T5,"TFBertForPreTraining"),T5.forEach(t),KF=n(hm," forward method, overrides the "),au=r(hm,"CODE",{});var v5=a(au);RF=n(v5,"__call__"),v5.forEach(t),QF=n(hm," special method."),hm.forEach(t),VF=p(Sa),v(Mr.$$.fragment,Sa),JF=p(Sa),v(Pr.$$.fragment,Sa),Sa.forEach(t),$o.forEach(t),bk=p(i),Vn=r(i,"H2",{class:!0});var Hy=a(Vn);jr=r(Hy,"A",{id:!0,class:!0,href:!0});var w5=a(jr);iu=r(w5,"SPAN",{});var $5=a(iu);v(td.$$.fragment,$5),$5.forEach(t),w5.forEach(t),GF=p(Hy),lu=r(Hy,"SPAN",{});var x5=a(lu);XF=n(x5,"TFBertModelLMHeadModel"),x5.forEach(t),Hy.forEach(t),kk=p(i),Jn=r(i,"DIV",{class:!0});var Ky=a(Jn);v(od.$$.fragment,Ky),YF=p(Ky),It=r(Ky,"DIV",{class:!0});var ln=a(It);v(nd.$$.fragment,ln),ZF=p(ln),nt=r(ln,"P",{});var $t=a(nt);e0=n($t,"encoder_hidden_states  ("),du=r($t,"CODE",{});var F5=a(du);t0=n(F5,"tf.Tensor"),F5.forEach(t),o0=n($t," of shape "),cu=r($t,"CODE",{});var B5=a(cu);n0=n(B5,"(batch_size, sequence_length, hidden_size)"),B5.forEach(t),s0=n($t,", "),pu=r($t,"EM",{});var E5=a(pu);r0=n(E5,"optional"),E5.forEach(t),a0=n($t,`):
Sequence of hidden-states at the output of the last layer of the encoder. Used in the cross-attention if
the model is configured as a decoder.
encoder_attention_mask (`),hu=r($t,"CODE",{});var z5=a(hu);i0=n(z5,"tf.Tensor"),z5.forEach(t),l0=n($t," of shape "),mu=r($t,"CODE",{});var M5=a(mu);d0=n(M5,"(batch_size, sequence_length)"),M5.forEach(t),c0=n($t,", "),fu=r($t,"EM",{});var P5=a(fu);p0=n(P5,"optional"),P5.forEach(t),h0=n($t,`):
Mask to avoid performing attention on the padding token indices of the encoder input. This mask is used in
the cross-attention if the model is configured as a decoder. Mask values selected in `),uu=r($t,"CODE",{});var j5=a(uu);m0=n(j5,"[0, 1]"),j5.forEach(t),f0=n($t,":"),$t.forEach(t),u0=p(ln),sd=r(ln,"UL",{});var Ry=a(sd);rd=r(Ry,"LI",{});var Qy=a(rd);g0=n(Qy,"1 for tokens that are "),gu=r(Qy,"STRONG",{});var q5=a(gu);_0=n(q5,"not masked"),q5.forEach(t),b0=n(Qy,","),Qy.forEach(t),k0=p(Ry),ad=r(Ry,"LI",{});var Vy=a(ad);y0=n(Vy,"0 for tokens that are "),_u=r(Vy,"STRONG",{});var C5=a(_u);T0=n(C5,"masked"),C5.forEach(t),v0=n(Vy,"."),Vy.forEach(t),Ry.forEach(t),w0=p(ln),te=r(ln,"P",{});var re=a(te);$0=n(re,"past_key_values ("),bu=r(re,"CODE",{});var N5=a(bu);x0=n(N5,"Tuple[Tuple[tf.Tensor]]"),N5.forEach(t),F0=n(re," of length "),ku=r(re,"CODE",{});var O5=a(ku);B0=n(O5,"config.n_layers"),O5.forEach(t),E0=n(re,`)
contains precomputed key and value hidden states of the attention blocks. Can be used to speed up decoding.
If `),yu=r(re,"CODE",{});var A5=a(yu);z0=n(A5,"past_key_values"),A5.forEach(t),M0=n(re," are used, the user can optionally input only the last "),Tu=r(re,"CODE",{});var I5=a(Tu);P0=n(I5,"decoder_input_ids"),I5.forEach(t),j0=n(re,` (those that
don\u2019t have their past key value states given to this model) of shape `),vu=r(re,"CODE",{});var L5=a(vu);q0=n(L5,"(batch_size, 1)"),L5.forEach(t),C0=n(re,` instead of all
`),wu=r(re,"CODE",{});var D5=a(wu);N0=n(D5,"decoder_input_ids"),D5.forEach(t),O0=n(re," of shape "),$u=r(re,"CODE",{});var S5=a($u);A0=n(S5,"(batch_size, sequence_length)"),S5.forEach(t),I0=n(re,`.
use_cache (`),xu=r(re,"CODE",{});var U5=a(xu);L0=n(U5,"bool"),U5.forEach(t),D0=n(re,", "),Fu=r(re,"EM",{});var W5=a(Fu);S0=n(W5,"optional"),W5.forEach(t),U0=n(re,", defaults to "),Bu=r(re,"CODE",{});var H5=a(Bu);W0=n(H5,"True"),H5.forEach(t),H0=n(re,`):
If set to `),Eu=r(re,"CODE",{});var K5=a(Eu);K0=n(K5,"True"),K5.forEach(t),R0=n(re,", "),zu=r(re,"CODE",{});var R5=a(zu);Q0=n(R5,"past_key_values"),R5.forEach(t),V0=n(re,` key value states are returned and can be used to speed up decoding (see
`),Mu=r(re,"CODE",{});var Q5=a(Mu);J0=n(Q5,"past_key_values"),Q5.forEach(t),G0=n(re,"). Set to "),Pu=r(re,"CODE",{});var V5=a(Pu);X0=n(V5,"False"),V5.forEach(t),Y0=n(re," during training, "),ju=r(re,"CODE",{});var J5=a(ju);Z0=n(J5,"True"),J5.forEach(t),eB=n(re,` during generation
labels (`),qu=r(re,"CODE",{});var G5=a(qu);tB=n(G5,"tf.Tensor"),G5.forEach(t),oB=n(re," or "),Cu=r(re,"CODE",{});var X5=a(Cu);nB=n(X5,"np.ndarray"),X5.forEach(t),sB=n(re," of shape "),Nu=r(re,"CODE",{});var Y5=a(Nu);rB=n(Y5,"(batch_size, sequence_length)"),Y5.forEach(t),aB=n(re,", "),Ou=r(re,"EM",{});var Z5=a(Ou);iB=n(Z5,"optional"),Z5.forEach(t),lB=n(re,`):
Labels for computing the cross entropy classification loss. Indices should be in `),Au=r(re,"CODE",{});var e6=a(Au);dB=n(e6,"[0, ..., config.vocab_size - 1]"),e6.forEach(t),cB=n(re,"."),re.forEach(t),pB=p(ln),v(qr.$$.fragment,ln),ln.forEach(t),Ky.forEach(t),yk=p(i),Gn=r(i,"H2",{class:!0});var Jy=a(Gn);Cr=r(Jy,"A",{id:!0,class:!0,href:!0});var t6=a(Cr);Iu=r(t6,"SPAN",{});var o6=a(Iu);v(id.$$.fragment,o6),o6.forEach(t),t6.forEach(t),hB=p(Jy),Lu=r(Jy,"SPAN",{});var n6=a(Lu);mB=n(n6,"TFBertForMaskedLM"),n6.forEach(t),Jy.forEach(t),Tk=p(i),_t=r(i,"DIV",{class:!0});var xo=a(_t);v(ld.$$.fragment,xo),fB=p(xo),dd=r(xo,"P",{});var Gy=a(dd);uB=n(Gy,"Bert Model with a "),Du=r(Gy,"CODE",{});var s6=a(Du);gB=n(s6,"language modeling"),s6.forEach(t),_B=n(Gy," head on top."),Gy.forEach(t),bB=p(xo),cd=r(xo,"P",{});var Xy=a(cd);kB=n(Xy,"This model inherits from "),vh=r(Xy,"A",{href:!0});var r6=a(vh);yB=n(r6,"TFPreTrainedModel"),r6.forEach(t),TB=n(Xy,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xy.forEach(t),vB=p(xo),pd=r(xo,"P",{});var Yy=a(pd);wB=n(Yy,"This model is also a "),hd=r(Yy,"A",{href:!0,rel:!0});var a6=a(hd);$B=n(a6,"tf.keras.Model"),a6.forEach(t),xB=n(Yy,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yy.forEach(t),FB=p(xo),v(Nr.$$.fragment,xo),BB=p(xo),Lt=r(xo,"DIV",{class:!0});var dn=a(Lt);v(md.$$.fragment,dn),EB=p(dn),Xn=r(dn,"P",{});var mm=a(Xn);zB=n(mm,"The "),wh=r(mm,"A",{href:!0});var i6=a(wh);MB=n(i6,"TFBertForMaskedLM"),i6.forEach(t),PB=n(mm," forward method, overrides the "),Su=r(mm,"CODE",{});var l6=a(Su);jB=n(l6,"__call__"),l6.forEach(t),qB=n(mm," special method."),mm.forEach(t),CB=p(dn),v(Or.$$.fragment,dn),NB=p(dn),v(Ar.$$.fragment,dn),OB=p(dn),v(Ir.$$.fragment,dn),dn.forEach(t),xo.forEach(t),vk=p(i),Yn=r(i,"H2",{class:!0});var Zy=a(Yn);Lr=r(Zy,"A",{id:!0,class:!0,href:!0});var d6=a(Lr);Uu=r(d6,"SPAN",{});var c6=a(Uu);v(fd.$$.fragment,c6),c6.forEach(t),d6.forEach(t),AB=p(Zy),Wu=r(Zy,"SPAN",{});var p6=a(Wu);IB=n(p6,"TFBertForNextSentencePrediction"),p6.forEach(t),Zy.forEach(t),wk=p(i),bt=r(i,"DIV",{class:!0});var Fo=a(bt);v(ud.$$.fragment,Fo),LB=p(Fo),gd=r(Fo,"P",{});var eT=a(gd);DB=n(eT,"Bert Model with a "),Hu=r(eT,"CODE",{});var h6=a(Hu);SB=n(h6,"next sentence prediction (classification)"),h6.forEach(t),UB=n(eT," head on top."),eT.forEach(t),WB=p(Fo),_d=r(Fo,"P",{});var tT=a(_d);HB=n(tT,"This model inherits from "),$h=r(tT,"A",{href:!0});var m6=a($h);KB=n(m6,"TFPreTrainedModel"),m6.forEach(t),RB=n(tT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),tT.forEach(t),QB=p(Fo),bd=r(Fo,"P",{});var oT=a(bd);VB=n(oT,"This model is also a "),kd=r(oT,"A",{href:!0,rel:!0});var f6=a(kd);JB=n(f6,"tf.keras.Model"),f6.forEach(t),GB=n(oT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oT.forEach(t),XB=p(Fo),v(Dr.$$.fragment,Fo),YB=p(Fo),ho=r(Fo,"DIV",{class:!0});var Ua=a(ho);v(yd.$$.fragment,Ua),ZB=p(Ua),Zn=r(Ua,"P",{});var fm=a(Zn);eE=n(fm,"The "),xh=r(fm,"A",{href:!0});var u6=a(xh);tE=n(u6,"TFBertForNextSentencePrediction"),u6.forEach(t),oE=n(fm," forward method, overrides the "),Ku=r(fm,"CODE",{});var g6=a(Ku);nE=n(g6,"__call__"),g6.forEach(t),sE=n(fm," special method."),fm.forEach(t),rE=p(Ua),v(Sr.$$.fragment,Ua),aE=p(Ua),v(Ur.$$.fragment,Ua),Ua.forEach(t),Fo.forEach(t),$k=p(i),es=r(i,"H2",{class:!0});var nT=a(es);Wr=r(nT,"A",{id:!0,class:!0,href:!0});var _6=a(Wr);Ru=r(_6,"SPAN",{});var b6=a(Ru);v(Td.$$.fragment,b6),b6.forEach(t),_6.forEach(t),iE=p(nT),Qu=r(nT,"SPAN",{});var k6=a(Qu);lE=n(k6,"TFBertForSequenceClassification"),k6.forEach(t),nT.forEach(t),xk=p(i),kt=r(i,"DIV",{class:!0});var Bo=a(kt);v(vd.$$.fragment,Bo),dE=p(Bo),Vu=r(Bo,"P",{});var y6=a(Vu);cE=n(y6,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),y6.forEach(t),pE=p(Bo),wd=r(Bo,"P",{});var sT=a(wd);hE=n(sT,"This model inherits from "),Fh=r(sT,"A",{href:!0});var T6=a(Fh);mE=n(T6,"TFPreTrainedModel"),T6.forEach(t),fE=n(sT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sT.forEach(t),uE=p(Bo),$d=r(Bo,"P",{});var rT=a($d);gE=n(rT,"This model is also a "),xd=r(rT,"A",{href:!0,rel:!0});var v6=a(xd);_E=n(v6,"tf.keras.Model"),v6.forEach(t),bE=n(rT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),rT.forEach(t),kE=p(Bo),v(Hr.$$.fragment,Bo),yE=p(Bo),Dt=r(Bo,"DIV",{class:!0});var cn=a(Dt);v(Fd.$$.fragment,cn),TE=p(cn),ts=r(cn,"P",{});var um=a(ts);vE=n(um,"The "),Bh=r(um,"A",{href:!0});var w6=a(Bh);wE=n(w6,"TFBertForSequenceClassification"),w6.forEach(t),$E=n(um," forward method, overrides the "),Ju=r(um,"CODE",{});var $6=a(Ju);xE=n($6,"__call__"),$6.forEach(t),FE=n(um," special method."),um.forEach(t),BE=p(cn),v(Kr.$$.fragment,cn),EE=p(cn),v(Rr.$$.fragment,cn),zE=p(cn),v(Qr.$$.fragment,cn),cn.forEach(t),Bo.forEach(t),Fk=p(i),os=r(i,"H2",{class:!0});var aT=a(os);Vr=r(aT,"A",{id:!0,class:!0,href:!0});var x6=a(Vr);Gu=r(x6,"SPAN",{});var F6=a(Gu);v(Bd.$$.fragment,F6),F6.forEach(t),x6.forEach(t),ME=p(aT),Xu=r(aT,"SPAN",{});var B6=a(Xu);PE=n(B6,"TFBertForMultipleChoice"),B6.forEach(t),aT.forEach(t),Bk=p(i),yt=r(i,"DIV",{class:!0});var Eo=a(yt);v(Ed.$$.fragment,Eo),jE=p(Eo),Yu=r(Eo,"P",{});var E6=a(Yu);qE=n(E6,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),E6.forEach(t),CE=p(Eo),zd=r(Eo,"P",{});var iT=a(zd);NE=n(iT,"This model inherits from "),Eh=r(iT,"A",{href:!0});var z6=a(Eh);OE=n(z6,"TFPreTrainedModel"),z6.forEach(t),AE=n(iT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),iT.forEach(t),IE=p(Eo),Md=r(Eo,"P",{});var lT=a(Md);LE=n(lT,"This model is also a "),Pd=r(lT,"A",{href:!0,rel:!0});var M6=a(Pd);DE=n(M6,"tf.keras.Model"),M6.forEach(t),SE=n(lT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lT.forEach(t),UE=p(Eo),v(Jr.$$.fragment,Eo),WE=p(Eo),mo=r(Eo,"DIV",{class:!0});var Wa=a(mo);v(jd.$$.fragment,Wa),HE=p(Wa),ns=r(Wa,"P",{});var gm=a(ns);KE=n(gm,"The "),zh=r(gm,"A",{href:!0});var P6=a(zh);RE=n(P6,"TFBertForMultipleChoice"),P6.forEach(t),QE=n(gm," forward method, overrides the "),Zu=r(gm,"CODE",{});var j6=a(Zu);VE=n(j6,"__call__"),j6.forEach(t),JE=n(gm," special method."),gm.forEach(t),GE=p(Wa),v(Gr.$$.fragment,Wa),XE=p(Wa),v(Xr.$$.fragment,Wa),Wa.forEach(t),Eo.forEach(t),Ek=p(i),ss=r(i,"H2",{class:!0});var dT=a(ss);Yr=r(dT,"A",{id:!0,class:!0,href:!0});var q6=a(Yr);eg=r(q6,"SPAN",{});var C6=a(eg);v(qd.$$.fragment,C6),C6.forEach(t),q6.forEach(t),YE=p(dT),tg=r(dT,"SPAN",{});var N6=a(tg);ZE=n(N6,"TFBertForTokenClassification"),N6.forEach(t),dT.forEach(t),zk=p(i),Tt=r(i,"DIV",{class:!0});var zo=a(Tt);v(Cd.$$.fragment,zo),ez=p(zo),og=r(zo,"P",{});var O6=a(og);tz=n(O6,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),O6.forEach(t),oz=p(zo),Nd=r(zo,"P",{});var cT=a(Nd);nz=n(cT,"This model inherits from "),Mh=r(cT,"A",{href:!0});var A6=a(Mh);sz=n(A6,"TFPreTrainedModel"),A6.forEach(t),rz=n(cT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cT.forEach(t),az=p(zo),Od=r(zo,"P",{});var pT=a(Od);iz=n(pT,"This model is also a "),Ad=r(pT,"A",{href:!0,rel:!0});var I6=a(Ad);lz=n(I6,"tf.keras.Model"),I6.forEach(t),dz=n(pT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pT.forEach(t),cz=p(zo),v(Zr.$$.fragment,zo),pz=p(zo),St=r(zo,"DIV",{class:!0});var pn=a(St);v(Id.$$.fragment,pn),hz=p(pn),rs=r(pn,"P",{});var _m=a(rs);mz=n(_m,"The "),Ph=r(_m,"A",{href:!0});var L6=a(Ph);fz=n(L6,"TFBertForTokenClassification"),L6.forEach(t),uz=n(_m," forward method, overrides the "),ng=r(_m,"CODE",{});var D6=a(ng);gz=n(D6,"__call__"),D6.forEach(t),_z=n(_m," special method."),_m.forEach(t),bz=p(pn),v(ea.$$.fragment,pn),kz=p(pn),v(ta.$$.fragment,pn),yz=p(pn),v(oa.$$.fragment,pn),pn.forEach(t),zo.forEach(t),Mk=p(i),as=r(i,"H2",{class:!0});var hT=a(as);na=r(hT,"A",{id:!0,class:!0,href:!0});var S6=a(na);sg=r(S6,"SPAN",{});var U6=a(sg);v(Ld.$$.fragment,U6),U6.forEach(t),S6.forEach(t),Tz=p(hT),rg=r(hT,"SPAN",{});var W6=a(rg);vz=n(W6,"TFBertForQuestionAnswering"),W6.forEach(t),hT.forEach(t),Pk=p(i),vt=r(i,"DIV",{class:!0});var Mo=a(vt);v(Dd.$$.fragment,Mo),wz=p(Mo),is=r(Mo,"P",{});var bm=a(is);$z=n(bm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),ag=r(bm,"CODE",{});var H6=a(ag);xz=n(H6,"span start logits"),H6.forEach(t),Fz=n(bm," and "),ig=r(bm,"CODE",{});var K6=a(ig);Bz=n(K6,"span end logits"),K6.forEach(t),Ez=n(bm,")."),bm.forEach(t),zz=p(Mo),Sd=r(Mo,"P",{});var mT=a(Sd);Mz=n(mT,"This model inherits from "),jh=r(mT,"A",{href:!0});var R6=a(jh);Pz=n(R6,"TFPreTrainedModel"),R6.forEach(t),jz=n(mT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mT.forEach(t),qz=p(Mo),Ud=r(Mo,"P",{});var fT=a(Ud);Cz=n(fT,"This model is also a "),Wd=r(fT,"A",{href:!0,rel:!0});var Q6=a(Wd);Nz=n(Q6,"tf.keras.Model"),Q6.forEach(t),Oz=n(fT,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fT.forEach(t),Az=p(Mo),v(sa.$$.fragment,Mo),Iz=p(Mo),Ut=r(Mo,"DIV",{class:!0});var hn=a(Ut);v(Hd.$$.fragment,hn),Lz=p(hn),ls=r(hn,"P",{});var km=a(ls);Dz=n(km,"The "),qh=r(km,"A",{href:!0});var V6=a(qh);Sz=n(V6,"TFBertForQuestionAnswering"),V6.forEach(t),Uz=n(km," forward method, overrides the "),lg=r(km,"CODE",{});var J6=a(lg);Wz=n(J6,"__call__"),J6.forEach(t),Hz=n(km," special method."),km.forEach(t),Kz=p(hn),v(ra.$$.fragment,hn),Rz=p(hn),v(aa.$$.fragment,hn),Qz=p(hn),v(ia.$$.fragment,hn),hn.forEach(t),Mo.forEach(t),jk=p(i),ds=r(i,"H2",{class:!0});var uT=a(ds);la=r(uT,"A",{id:!0,class:!0,href:!0});var G6=a(la);dg=r(G6,"SPAN",{});var X6=a(dg);v(Kd.$$.fragment,X6),X6.forEach(t),G6.forEach(t),Vz=p(uT),cg=r(uT,"SPAN",{});var Y6=a(cg);Jz=n(Y6,"FlaxBertModel"),Y6.forEach(t),uT.forEach(t),qk=p(i),st=r(i,"DIV",{class:!0});var Rt=a(st);v(Rd.$$.fragment,Rt),Gz=p(Rt),pg=r(Rt,"P",{});var Z6=a(pg);Xz=n(Z6,"The bare Bert Model transformer outputting raw hidden-states without any specific head on top."),Z6.forEach(t),Yz=p(Rt),Qd=r(Rt,"P",{});var gT=a(Qd);Zz=n(gT,"This model inherits from "),Ch=r(gT,"A",{href:!0});var eN=a(Ch);eM=n(eN,"FlaxPreTrainedModel"),eN.forEach(t),tM=n(gT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),gT.forEach(t),oM=p(Rt),Vd=r(Rt,"P",{});var _T=a(Vd);nM=n(_T,"This model is also a Flax Linen "),Jd=r(_T,"A",{href:!0,rel:!0});var tN=a(Jd);sM=n(tN,"flax.linen.Module"),tN.forEach(t),rM=n(_T,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),_T.forEach(t),aM=p(Rt),hg=r(Rt,"P",{});var oN=a(hg);iM=n(oN,"Finally, this model supports inherent JAX features such as:"),oN.forEach(t),lM=p(Rt),jo=r(Rt,"UL",{});var Ha=a(jo);mg=r(Ha,"LI",{});var nN=a(mg);Gd=r(nN,"A",{href:!0,rel:!0});var sN=a(Gd);dM=n(sN,"Just-In-Time (JIT) compilation"),sN.forEach(t),nN.forEach(t),cM=p(Ha),fg=r(Ha,"LI",{});var rN=a(fg);Xd=r(rN,"A",{href:!0,rel:!0});var aN=a(Xd);pM=n(aN,"Automatic Differentiation"),aN.forEach(t),rN.forEach(t),hM=p(Ha),ug=r(Ha,"LI",{});var iN=a(ug);Yd=r(iN,"A",{href:!0,rel:!0});var lN=a(Yd);mM=n(lN,"Vectorization"),lN.forEach(t),iN.forEach(t),fM=p(Ha),gg=r(Ha,"LI",{});var dN=a(gg);Zd=r(dN,"A",{href:!0,rel:!0});var cN=a(Zd);uM=n(cN,"Parallelization"),cN.forEach(t),dN.forEach(t),Ha.forEach(t),gM=p(Rt),fo=r(Rt,"DIV",{class:!0});var Ka=a(fo);v(ec.$$.fragment,Ka),_M=p(Ka),cs=r(Ka,"P",{});var ym=a(cs);bM=n(ym,"The "),_g=r(ym,"CODE",{});var pN=a(_g);kM=n(pN,"FlaxBertPreTrainedModel"),pN.forEach(t),yM=n(ym," forward method, overrides the "),bg=r(ym,"CODE",{});var hN=a(bg);TM=n(hN,"__call__"),hN.forEach(t),vM=n(ym," special method."),ym.forEach(t),wM=p(Ka),v(da.$$.fragment,Ka),$M=p(Ka),v(ca.$$.fragment,Ka),Ka.forEach(t),Rt.forEach(t),Ck=p(i),ps=r(i,"H2",{class:!0});var bT=a(ps);pa=r(bT,"A",{id:!0,class:!0,href:!0});var mN=a(pa);kg=r(mN,"SPAN",{});var fN=a(kg);v(tc.$$.fragment,fN),fN.forEach(t),mN.forEach(t),xM=p(bT),yg=r(bT,"SPAN",{});var uN=a(yg);FM=n(uN,"FlaxBertForPreTraining"),uN.forEach(t),bT.forEach(t),Nk=p(i),rt=r(i,"DIV",{class:!0});var Qt=a(rt);v(oc.$$.fragment,Qt),BM=p(Qt),hs=r(Qt,"P",{});var Tm=a(hs);EM=n(Tm,"Bert Model with two heads on top as done during the pretraining: a "),Tg=r(Tm,"CODE",{});var gN=a(Tg);zM=n(gN,"masked language modeling"),gN.forEach(t),MM=n(Tm," head and a "),vg=r(Tm,"CODE",{});var _N=a(vg);PM=n(_N,"next sentence prediction (classification)"),_N.forEach(t),jM=n(Tm," head."),Tm.forEach(t),qM=p(Qt),nc=r(Qt,"P",{});var kT=a(nc);CM=n(kT,"This model inherits from "),Nh=r(kT,"A",{href:!0});var bN=a(Nh);NM=n(bN,"FlaxPreTrainedModel"),bN.forEach(t),OM=n(kT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),kT.forEach(t),AM=p(Qt),sc=r(Qt,"P",{});var yT=a(sc);IM=n(yT,"This model is also a Flax Linen "),rc=r(yT,"A",{href:!0,rel:!0});var kN=a(rc);LM=n(kN,"flax.linen.Module"),kN.forEach(t),DM=n(yT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),yT.forEach(t),SM=p(Qt),wg=r(Qt,"P",{});var yN=a(wg);UM=n(yN,"Finally, this model supports inherent JAX features such as:"),yN.forEach(t),WM=p(Qt),qo=r(Qt,"UL",{});var Ra=a(qo);$g=r(Ra,"LI",{});var TN=a($g);ac=r(TN,"A",{href:!0,rel:!0});var vN=a(ac);HM=n(vN,"Just-In-Time (JIT) compilation"),vN.forEach(t),TN.forEach(t),KM=p(Ra),xg=r(Ra,"LI",{});var wN=a(xg);ic=r(wN,"A",{href:!0,rel:!0});var $N=a(ic);RM=n($N,"Automatic Differentiation"),$N.forEach(t),wN.forEach(t),QM=p(Ra),Fg=r(Ra,"LI",{});var xN=a(Fg);lc=r(xN,"A",{href:!0,rel:!0});var FN=a(lc);VM=n(FN,"Vectorization"),FN.forEach(t),xN.forEach(t),JM=p(Ra),Bg=r(Ra,"LI",{});var BN=a(Bg);dc=r(BN,"A",{href:!0,rel:!0});var EN=a(dc);GM=n(EN,"Parallelization"),EN.forEach(t),BN.forEach(t),Ra.forEach(t),XM=p(Qt),uo=r(Qt,"DIV",{class:!0});var Qa=a(uo);v(cc.$$.fragment,Qa),YM=p(Qa),ms=r(Qa,"P",{});var vm=a(ms);ZM=n(vm,"The "),Eg=r(vm,"CODE",{});var zN=a(Eg);e4=n(zN,"FlaxBertPreTrainedModel"),zN.forEach(t),t4=n(vm," forward method, overrides the "),zg=r(vm,"CODE",{});var MN=a(zg);o4=n(MN,"__call__"),MN.forEach(t),n4=n(vm," special method."),vm.forEach(t),s4=p(Qa),v(ha.$$.fragment,Qa),r4=p(Qa),v(ma.$$.fragment,Qa),Qa.forEach(t),Qt.forEach(t),Ok=p(i),fs=r(i,"H2",{class:!0});var TT=a(fs);fa=r(TT,"A",{id:!0,class:!0,href:!0});var PN=a(fa);Mg=r(PN,"SPAN",{});var jN=a(Mg);v(pc.$$.fragment,jN),jN.forEach(t),PN.forEach(t),a4=p(TT),Pg=r(TT,"SPAN",{});var qN=a(Pg);i4=n(qN,"FlaxBertForCausalLM"),qN.forEach(t),TT.forEach(t),Ak=p(i),at=r(i,"DIV",{class:!0});var Vt=a(at);v(hc.$$.fragment,Vt),l4=p(Vt),jg=r(Vt,"P",{});var CN=a(jg);d4=n(CN,`Bert Model with a language modeling head on top (a linear layer on top of the hidden-states output) e.g for
autoregressive tasks.`),CN.forEach(t),c4=p(Vt),mc=r(Vt,"P",{});var vT=a(mc);p4=n(vT,"This model inherits from "),Oh=r(vT,"A",{href:!0});var NN=a(Oh);h4=n(NN,"FlaxPreTrainedModel"),NN.forEach(t),m4=n(vT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),vT.forEach(t),f4=p(Vt),fc=r(Vt,"P",{});var wT=a(fc);u4=n(wT,"This model is also a Flax Linen "),uc=r(wT,"A",{href:!0,rel:!0});var ON=a(uc);g4=n(ON,"flax.linen.Module"),ON.forEach(t),_4=n(wT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),wT.forEach(t),b4=p(Vt),qg=r(Vt,"P",{});var AN=a(qg);k4=n(AN,"Finally, this model supports inherent JAX features such as:"),AN.forEach(t),y4=p(Vt),Co=r(Vt,"UL",{});var Va=a(Co);Cg=r(Va,"LI",{});var IN=a(Cg);gc=r(IN,"A",{href:!0,rel:!0});var LN=a(gc);T4=n(LN,"Just-In-Time (JIT) compilation"),LN.forEach(t),IN.forEach(t),v4=p(Va),Ng=r(Va,"LI",{});var DN=a(Ng);_c=r(DN,"A",{href:!0,rel:!0});var SN=a(_c);w4=n(SN,"Automatic Differentiation"),SN.forEach(t),DN.forEach(t),$4=p(Va),Og=r(Va,"LI",{});var UN=a(Og);bc=r(UN,"A",{href:!0,rel:!0});var WN=a(bc);x4=n(WN,"Vectorization"),WN.forEach(t),UN.forEach(t),F4=p(Va),Ag=r(Va,"LI",{});var HN=a(Ag);kc=r(HN,"A",{href:!0,rel:!0});var KN=a(kc);B4=n(KN,"Parallelization"),KN.forEach(t),HN.forEach(t),Va.forEach(t),E4=p(Vt),go=r(Vt,"DIV",{class:!0});var Ja=a(go);v(yc.$$.fragment,Ja),z4=p(Ja),us=r(Ja,"P",{});var wm=a(us);M4=n(wm,"The "),Ig=r(wm,"CODE",{});var RN=a(Ig);P4=n(RN,"FlaxBertPreTrainedModel"),RN.forEach(t),j4=n(wm," forward method, overrides the "),Lg=r(wm,"CODE",{});var QN=a(Lg);q4=n(QN,"__call__"),QN.forEach(t),C4=n(wm," special method."),wm.forEach(t),N4=p(Ja),v(ua.$$.fragment,Ja),O4=p(Ja),v(ga.$$.fragment,Ja),Ja.forEach(t),Vt.forEach(t),Ik=p(i),gs=r(i,"H2",{class:!0});var $T=a(gs);_a=r($T,"A",{id:!0,class:!0,href:!0});var VN=a(_a);Dg=r(VN,"SPAN",{});var JN=a(Dg);v(Tc.$$.fragment,JN),JN.forEach(t),VN.forEach(t),A4=p($T),Sg=r($T,"SPAN",{});var GN=a(Sg);I4=n(GN,"FlaxBertForMaskedLM"),GN.forEach(t),$T.forEach(t),Lk=p(i),it=r(i,"DIV",{class:!0});var Jt=a(it);v(vc.$$.fragment,Jt),L4=p(Jt),wc=r(Jt,"P",{});var xT=a(wc);D4=n(xT,"Bert Model with a "),Ug=r(xT,"CODE",{});var XN=a(Ug);S4=n(XN,"language modeling"),XN.forEach(t),U4=n(xT," head on top."),xT.forEach(t),W4=p(Jt),$c=r(Jt,"P",{});var FT=a($c);H4=n(FT,"This model inherits from "),Ah=r(FT,"A",{href:!0});var YN=a(Ah);K4=n(YN,"FlaxPreTrainedModel"),YN.forEach(t),R4=n(FT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),FT.forEach(t),Q4=p(Jt),xc=r(Jt,"P",{});var BT=a(xc);V4=n(BT,"This model is also a Flax Linen "),Fc=r(BT,"A",{href:!0,rel:!0});var ZN=a(Fc);J4=n(ZN,"flax.linen.Module"),ZN.forEach(t),G4=n(BT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),BT.forEach(t),X4=p(Jt),Wg=r(Jt,"P",{});var e8=a(Wg);Y4=n(e8,"Finally, this model supports inherent JAX features such as:"),e8.forEach(t),Z4=p(Jt),No=r(Jt,"UL",{});var Ga=a(No);Hg=r(Ga,"LI",{});var t8=a(Hg);Bc=r(t8,"A",{href:!0,rel:!0});var o8=a(Bc);eP=n(o8,"Just-In-Time (JIT) compilation"),o8.forEach(t),t8.forEach(t),tP=p(Ga),Kg=r(Ga,"LI",{});var n8=a(Kg);Ec=r(n8,"A",{href:!0,rel:!0});var s8=a(Ec);oP=n(s8,"Automatic Differentiation"),s8.forEach(t),n8.forEach(t),nP=p(Ga),Rg=r(Ga,"LI",{});var r8=a(Rg);zc=r(r8,"A",{href:!0,rel:!0});var a8=a(zc);sP=n(a8,"Vectorization"),a8.forEach(t),r8.forEach(t),rP=p(Ga),Qg=r(Ga,"LI",{});var i8=a(Qg);Mc=r(i8,"A",{href:!0,rel:!0});var l8=a(Mc);aP=n(l8,"Parallelization"),l8.forEach(t),i8.forEach(t),Ga.forEach(t),iP=p(Jt),_o=r(Jt,"DIV",{class:!0});var Xa=a(_o);v(Pc.$$.fragment,Xa),lP=p(Xa),_s=r(Xa,"P",{});var $m=a(_s);dP=n($m,"The "),Vg=r($m,"CODE",{});var d8=a(Vg);cP=n(d8,"FlaxBertPreTrainedModel"),d8.forEach(t),pP=n($m," forward method, overrides the "),Jg=r($m,"CODE",{});var c8=a(Jg);hP=n(c8,"__call__"),c8.forEach(t),mP=n($m," special method."),$m.forEach(t),fP=p(Xa),v(ba.$$.fragment,Xa),uP=p(Xa),v(ka.$$.fragment,Xa),Xa.forEach(t),Jt.forEach(t),Dk=p(i),bs=r(i,"H2",{class:!0});var ET=a(bs);ya=r(ET,"A",{id:!0,class:!0,href:!0});var p8=a(ya);Gg=r(p8,"SPAN",{});var h8=a(Gg);v(jc.$$.fragment,h8),h8.forEach(t),p8.forEach(t),gP=p(ET),Xg=r(ET,"SPAN",{});var m8=a(Xg);_P=n(m8,"FlaxBertForNextSentencePrediction"),m8.forEach(t),ET.forEach(t),Sk=p(i),lt=r(i,"DIV",{class:!0});var Gt=a(lt);v(qc.$$.fragment,Gt),bP=p(Gt),Cc=r(Gt,"P",{});var zT=a(Cc);kP=n(zT,"Bert Model with a "),Yg=r(zT,"CODE",{});var f8=a(Yg);yP=n(f8,"next sentence prediction (classification)"),f8.forEach(t),TP=n(zT," head on top."),zT.forEach(t),vP=p(Gt),Nc=r(Gt,"P",{});var MT=a(Nc);wP=n(MT,"This model inherits from "),Ih=r(MT,"A",{href:!0});var u8=a(Ih);$P=n(u8,"FlaxPreTrainedModel"),u8.forEach(t),xP=n(MT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),MT.forEach(t),FP=p(Gt),Oc=r(Gt,"P",{});var PT=a(Oc);BP=n(PT,"This model is also a Flax Linen "),Ac=r(PT,"A",{href:!0,rel:!0});var g8=a(Ac);EP=n(g8,"flax.linen.Module"),g8.forEach(t),zP=n(PT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),PT.forEach(t),MP=p(Gt),Zg=r(Gt,"P",{});var _8=a(Zg);PP=n(_8,"Finally, this model supports inherent JAX features such as:"),_8.forEach(t),jP=p(Gt),Oo=r(Gt,"UL",{});var Ya=a(Oo);e_=r(Ya,"LI",{});var b8=a(e_);Ic=r(b8,"A",{href:!0,rel:!0});var k8=a(Ic);qP=n(k8,"Just-In-Time (JIT) compilation"),k8.forEach(t),b8.forEach(t),CP=p(Ya),t_=r(Ya,"LI",{});var y8=a(t_);Lc=r(y8,"A",{href:!0,rel:!0});var T8=a(Lc);NP=n(T8,"Automatic Differentiation"),T8.forEach(t),y8.forEach(t),OP=p(Ya),o_=r(Ya,"LI",{});var v8=a(o_);Dc=r(v8,"A",{href:!0,rel:!0});var w8=a(Dc);AP=n(w8,"Vectorization"),w8.forEach(t),v8.forEach(t),IP=p(Ya),n_=r(Ya,"LI",{});var $8=a(n_);Sc=r($8,"A",{href:!0,rel:!0});var x8=a(Sc);LP=n(x8,"Parallelization"),x8.forEach(t),$8.forEach(t),Ya.forEach(t),DP=p(Gt),bo=r(Gt,"DIV",{class:!0});var Za=a(bo);v(Uc.$$.fragment,Za),SP=p(Za),ks=r(Za,"P",{});var xm=a(ks);UP=n(xm,"The "),s_=r(xm,"CODE",{});var F8=a(s_);WP=n(F8,"FlaxBertPreTrainedModel"),F8.forEach(t),HP=n(xm," forward method, overrides the "),r_=r(xm,"CODE",{});var B8=a(r_);KP=n(B8,"__call__"),B8.forEach(t),RP=n(xm," special method."),xm.forEach(t),QP=p(Za),v(Ta.$$.fragment,Za),VP=p(Za),v(va.$$.fragment,Za),Za.forEach(t),Gt.forEach(t),Uk=p(i),ys=r(i,"H2",{class:!0});var jT=a(ys);wa=r(jT,"A",{id:!0,class:!0,href:!0});var E8=a(wa);a_=r(E8,"SPAN",{});var z8=a(a_);v(Wc.$$.fragment,z8),z8.forEach(t),E8.forEach(t),JP=p(jT),i_=r(jT,"SPAN",{});var M8=a(i_);GP=n(M8,"FlaxBertForSequenceClassification"),M8.forEach(t),jT.forEach(t),Wk=p(i),dt=r(i,"DIV",{class:!0});var Xt=a(dt);v(Hc.$$.fragment,Xt),XP=p(Xt),l_=r(Xt,"P",{});var P8=a(l_);YP=n(P8,`Bert Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),P8.forEach(t),ZP=p(Xt),Kc=r(Xt,"P",{});var qT=a(Kc);ej=n(qT,"This model inherits from "),Lh=r(qT,"A",{href:!0});var j8=a(Lh);tj=n(j8,"FlaxPreTrainedModel"),j8.forEach(t),oj=n(qT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),qT.forEach(t),nj=p(Xt),Rc=r(Xt,"P",{});var CT=a(Rc);sj=n(CT,"This model is also a Flax Linen "),Qc=r(CT,"A",{href:!0,rel:!0});var q8=a(Qc);rj=n(q8,"flax.linen.Module"),q8.forEach(t),aj=n(CT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),CT.forEach(t),ij=p(Xt),d_=r(Xt,"P",{});var C8=a(d_);lj=n(C8,"Finally, this model supports inherent JAX features such as:"),C8.forEach(t),dj=p(Xt),Ao=r(Xt,"UL",{});var ei=a(Ao);c_=r(ei,"LI",{});var N8=a(c_);Vc=r(N8,"A",{href:!0,rel:!0});var O8=a(Vc);cj=n(O8,"Just-In-Time (JIT) compilation"),O8.forEach(t),N8.forEach(t),pj=p(ei),p_=r(ei,"LI",{});var A8=a(p_);Jc=r(A8,"A",{href:!0,rel:!0});var I8=a(Jc);hj=n(I8,"Automatic Differentiation"),I8.forEach(t),A8.forEach(t),mj=p(ei),h_=r(ei,"LI",{});var L8=a(h_);Gc=r(L8,"A",{href:!0,rel:!0});var D8=a(Gc);fj=n(D8,"Vectorization"),D8.forEach(t),L8.forEach(t),uj=p(ei),m_=r(ei,"LI",{});var S8=a(m_);Xc=r(S8,"A",{href:!0,rel:!0});var U8=a(Xc);gj=n(U8,"Parallelization"),U8.forEach(t),S8.forEach(t),ei.forEach(t),_j=p(Xt),ko=r(Xt,"DIV",{class:!0});var ti=a(ko);v(Yc.$$.fragment,ti),bj=p(ti),Ts=r(ti,"P",{});var Fm=a(Ts);kj=n(Fm,"The "),f_=r(Fm,"CODE",{});var W8=a(f_);yj=n(W8,"FlaxBertPreTrainedModel"),W8.forEach(t),Tj=n(Fm," forward method, overrides the "),u_=r(Fm,"CODE",{});var H8=a(u_);vj=n(H8,"__call__"),H8.forEach(t),wj=n(Fm," special method."),Fm.forEach(t),$j=p(ti),v($a.$$.fragment,ti),xj=p(ti),v(xa.$$.fragment,ti),ti.forEach(t),Xt.forEach(t),Hk=p(i),vs=r(i,"H2",{class:!0});var NT=a(vs);Fa=r(NT,"A",{id:!0,class:!0,href:!0});var K8=a(Fa);g_=r(K8,"SPAN",{});var R8=a(g_);v(Zc.$$.fragment,R8),R8.forEach(t),K8.forEach(t),Fj=p(NT),__=r(NT,"SPAN",{});var Q8=a(__);Bj=n(Q8,"FlaxBertForMultipleChoice"),Q8.forEach(t),NT.forEach(t),Kk=p(i),ct=r(i,"DIV",{class:!0});var Yt=a(ct);v(ep.$$.fragment,Yt),Ej=p(Yt),b_=r(Yt,"P",{});var V8=a(b_);zj=n(V8,`Bert Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),V8.forEach(t),Mj=p(Yt),tp=r(Yt,"P",{});var OT=a(tp);Pj=n(OT,"This model inherits from "),Dh=r(OT,"A",{href:!0});var J8=a(Dh);jj=n(J8,"FlaxPreTrainedModel"),J8.forEach(t),qj=n(OT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),OT.forEach(t),Cj=p(Yt),op=r(Yt,"P",{});var AT=a(op);Nj=n(AT,"This model is also a Flax Linen "),np=r(AT,"A",{href:!0,rel:!0});var G8=a(np);Oj=n(G8,"flax.linen.Module"),G8.forEach(t),Aj=n(AT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),AT.forEach(t),Ij=p(Yt),k_=r(Yt,"P",{});var X8=a(k_);Lj=n(X8,"Finally, this model supports inherent JAX features such as:"),X8.forEach(t),Dj=p(Yt),Io=r(Yt,"UL",{});var oi=a(Io);y_=r(oi,"LI",{});var Y8=a(y_);sp=r(Y8,"A",{href:!0,rel:!0});var Z8=a(sp);Sj=n(Z8,"Just-In-Time (JIT) compilation"),Z8.forEach(t),Y8.forEach(t),Uj=p(oi),T_=r(oi,"LI",{});var e7=a(T_);rp=r(e7,"A",{href:!0,rel:!0});var t7=a(rp);Wj=n(t7,"Automatic Differentiation"),t7.forEach(t),e7.forEach(t),Hj=p(oi),v_=r(oi,"LI",{});var o7=a(v_);ap=r(o7,"A",{href:!0,rel:!0});var n7=a(ap);Kj=n(n7,"Vectorization"),n7.forEach(t),o7.forEach(t),Rj=p(oi),w_=r(oi,"LI",{});var s7=a(w_);ip=r(s7,"A",{href:!0,rel:!0});var r7=a(ip);Qj=n(r7,"Parallelization"),r7.forEach(t),s7.forEach(t),oi.forEach(t),Vj=p(Yt),yo=r(Yt,"DIV",{class:!0});var ni=a(yo);v(lp.$$.fragment,ni),Jj=p(ni),ws=r(ni,"P",{});var Bm=a(ws);Gj=n(Bm,"The "),$_=r(Bm,"CODE",{});var a7=a($_);Xj=n(a7,"FlaxBertPreTrainedModel"),a7.forEach(t),Yj=n(Bm," forward method, overrides the "),x_=r(Bm,"CODE",{});var i7=a(x_);Zj=n(i7,"__call__"),i7.forEach(t),eq=n(Bm," special method."),Bm.forEach(t),tq=p(ni),v(Ba.$$.fragment,ni),oq=p(ni),v(Ea.$$.fragment,ni),ni.forEach(t),Yt.forEach(t),Rk=p(i),$s=r(i,"H2",{class:!0});var IT=a($s);za=r(IT,"A",{id:!0,class:!0,href:!0});var l7=a(za);F_=r(l7,"SPAN",{});var d7=a(F_);v(dp.$$.fragment,d7),d7.forEach(t),l7.forEach(t),nq=p(IT),B_=r(IT,"SPAN",{});var c7=a(B_);sq=n(c7,"FlaxBertForTokenClassification"),c7.forEach(t),IT.forEach(t),Qk=p(i),pt=r(i,"DIV",{class:!0});var Zt=a(pt);v(cp.$$.fragment,Zt),rq=p(Zt),E_=r(Zt,"P",{});var p7=a(E_);aq=n(p7,`Bert Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p7.forEach(t),iq=p(Zt),pp=r(Zt,"P",{});var LT=a(pp);lq=n(LT,"This model inherits from "),Sh=r(LT,"A",{href:!0});var h7=a(Sh);dq=n(h7,"FlaxPreTrainedModel"),h7.forEach(t),cq=n(LT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),LT.forEach(t),pq=p(Zt),hp=r(Zt,"P",{});var DT=a(hp);hq=n(DT,"This model is also a Flax Linen "),mp=r(DT,"A",{href:!0,rel:!0});var m7=a(mp);mq=n(m7,"flax.linen.Module"),m7.forEach(t),fq=n(DT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),DT.forEach(t),uq=p(Zt),z_=r(Zt,"P",{});var f7=a(z_);gq=n(f7,"Finally, this model supports inherent JAX features such as:"),f7.forEach(t),_q=p(Zt),Lo=r(Zt,"UL",{});var si=a(Lo);M_=r(si,"LI",{});var u7=a(M_);fp=r(u7,"A",{href:!0,rel:!0});var g7=a(fp);bq=n(g7,"Just-In-Time (JIT) compilation"),g7.forEach(t),u7.forEach(t),kq=p(si),P_=r(si,"LI",{});var _7=a(P_);up=r(_7,"A",{href:!0,rel:!0});var b7=a(up);yq=n(b7,"Automatic Differentiation"),b7.forEach(t),_7.forEach(t),Tq=p(si),j_=r(si,"LI",{});var k7=a(j_);gp=r(k7,"A",{href:!0,rel:!0});var y7=a(gp);vq=n(y7,"Vectorization"),y7.forEach(t),k7.forEach(t),wq=p(si),q_=r(si,"LI",{});var T7=a(q_);_p=r(T7,"A",{href:!0,rel:!0});var v7=a(_p);$q=n(v7,"Parallelization"),v7.forEach(t),T7.forEach(t),si.forEach(t),xq=p(Zt),To=r(Zt,"DIV",{class:!0});var ri=a(To);v(bp.$$.fragment,ri),Fq=p(ri),xs=r(ri,"P",{});var Em=a(xs);Bq=n(Em,"The "),C_=r(Em,"CODE",{});var w7=a(C_);Eq=n(w7,"FlaxBertPreTrainedModel"),w7.forEach(t),zq=n(Em," forward method, overrides the "),N_=r(Em,"CODE",{});var $7=a(N_);Mq=n($7,"__call__"),$7.forEach(t),Pq=n(Em," special method."),Em.forEach(t),jq=p(ri),v(Ma.$$.fragment,ri),qq=p(ri),v(Pa.$$.fragment,ri),ri.forEach(t),Zt.forEach(t),Vk=p(i),Fs=r(i,"H2",{class:!0});var ST=a(Fs);ja=r(ST,"A",{id:!0,class:!0,href:!0});var x7=a(ja);O_=r(x7,"SPAN",{});var F7=a(O_);v(kp.$$.fragment,F7),F7.forEach(t),x7.forEach(t),Cq=p(ST),A_=r(ST,"SPAN",{});var B7=a(A_);Nq=n(B7,"FlaxBertForQuestionAnswering"),B7.forEach(t),ST.forEach(t),Jk=p(i),ht=r(i,"DIV",{class:!0});var eo=a(ht);v(yp.$$.fragment,eo),Oq=p(eo),Bs=r(eo,"P",{});var zm=a(Bs);Aq=n(zm,`Bert Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),I_=r(zm,"CODE",{});var E7=a(I_);Iq=n(E7,"span start logits"),E7.forEach(t),Lq=n(zm," and "),L_=r(zm,"CODE",{});var z7=a(L_);Dq=n(z7,"span end logits"),z7.forEach(t),Sq=n(zm,")."),zm.forEach(t),Uq=p(eo),Tp=r(eo,"P",{});var UT=a(Tp);Wq=n(UT,"This model inherits from "),Uh=r(UT,"A",{href:!0});var M7=a(Uh);Hq=n(M7,"FlaxPreTrainedModel"),M7.forEach(t),Kq=n(UT,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading, saving and converting weights from PyTorch models)`),UT.forEach(t),Rq=p(eo),vp=r(eo,"P",{});var WT=a(vp);Qq=n(WT,"This model is also a Flax Linen "),wp=r(WT,"A",{href:!0,rel:!0});var P7=a(wp);Vq=n(P7,"flax.linen.Module"),P7.forEach(t),Jq=n(WT,`
subclass. Use it as a regular Flax linen Module and refer to the Flax documentation for all matter related to
general usage and behavior.`),WT.forEach(t),Gq=p(eo),D_=r(eo,"P",{});var j7=a(D_);Xq=n(j7,"Finally, this model supports inherent JAX features such as:"),j7.forEach(t),Yq=p(eo),Do=r(eo,"UL",{});var ai=a(Do);S_=r(ai,"LI",{});var q7=a(S_);$p=r(q7,"A",{href:!0,rel:!0});var C7=a($p);Zq=n(C7,"Just-In-Time (JIT) compilation"),C7.forEach(t),q7.forEach(t),e3=p(ai),U_=r(ai,"LI",{});var N7=a(U_);xp=r(N7,"A",{href:!0,rel:!0});var O7=a(xp);t3=n(O7,"Automatic Differentiation"),O7.forEach(t),N7.forEach(t),o3=p(ai),W_=r(ai,"LI",{});var A7=a(W_);Fp=r(A7,"A",{href:!0,rel:!0});var I7=a(Fp);n3=n(I7,"Vectorization"),I7.forEach(t),A7.forEach(t),s3=p(ai),H_=r(ai,"LI",{});var L7=a(H_);Bp=r(L7,"A",{href:!0,rel:!0});var D7=a(Bp);r3=n(D7,"Parallelization"),D7.forEach(t),L7.forEach(t),ai.forEach(t),a3=p(eo),vo=r(eo,"DIV",{class:!0});var ii=a(vo);v(Ep.$$.fragment,ii),i3=p(ii),Es=r(ii,"P",{});var Mm=a(Es);l3=n(Mm,"The "),K_=r(Mm,"CODE",{});var S7=a(K_);d3=n(S7,"FlaxBertPreTrainedModel"),S7.forEach(t),c3=n(Mm," forward method, overrides the "),R_=r(Mm,"CODE",{});var U7=a(R_);p3=n(U7,"__call__"),U7.forEach(t),h3=n(Mm," special method."),Mm.forEach(t),m3=p(ii),v(qa.$$.fragment,ii),f3=p(ii),v(Ca.$$.fragment,ii),ii.forEach(t),eo.forEach(t),this.h()},h(){u(d,"name","hf:doc:metadata"),u(d,"content",JSON.stringify(_A)),u(f,"id","bert"),u(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(f,"href","#bert"),u(m,"class","relative group"),u(pe,"id","overview"),u(pe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pe,"href","#overview"),u(S,"class","relative group"),u(me,"href","https://arxiv.org/abs/1810.04805"),u(me,"rel","nofollow"),u(fe,"href","https://huggingface.co/thomwolf"),u(fe,"rel","nofollow"),u(W,"href","https://github.com/google-research/bert"),u(W,"rel","nofollow"),u(O,"id","transformers.BertConfig"),u(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(O,"href","#transformers.BertConfig"),u(de,"class","relative group"),u(Ke,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),u(I,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),u(He,"href","https://huggingface.co/bert-base-uncased"),u(He,"rel","nofollow"),u(Z,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(Wp,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),u(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ns,"id","transformers.BertTokenizer"),u(Ns,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ns,"href","#transformers.BertTokenizer"),u(mn,"class","relative group"),u(Hp,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),u(Ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Os,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Qp,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Is,"id","transformers.BertTokenizerFast"),u(Is,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Is,"href","#transformers.BertTokenizerFast"),u(un,"class","relative group"),u(Vp,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),u(Ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(no,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ds,"id","transformers.TFBertTokenizer"),u(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ds,"href","#transformers.TFBertTokenizer"),u(_n,"class","relative group"),u(Qo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ws,"id","transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(Ws,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ws,"href","#transformers.models.bert.modeling_bert.BertForPreTrainingOutput"),u(yn,"class","relative group"),u(Xp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(Tn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yp,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForPreTraining"),u(vn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Zp,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(Hs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ks,"id","transformers.BertModel"),u(Ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Ks,"href","#transformers.BertModel"),u(wn,"class","relative group"),u(eh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Ui,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Ui,"rel","nofollow"),u(Hi,"href","https://arxiv.org/abs/1706.03762"),u(Hi,"rel","nofollow"),u(th,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),u(so,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vs,"id","transformers.BertForPreTraining"),u(Vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vs,"href","#transformers.BertForPreTraining"),u(xn,"class","relative group"),u(oh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Gi,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Gi,"rel","nofollow"),u(nh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForPreTraining"),u(ro,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Xs,"id","transformers.BertLMHeadModel"),u(Xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Xs,"href","#transformers.BertLMHeadModel"),u(En,"class","relative group"),u(sh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(nl,"rel","nofollow"),u(rh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertLMHeadModel"),u(ao,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(er,"id","transformers.BertForMaskedLM"),u(er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(er,"href","#transformers.BertForMaskedLM"),u(Mn,"class","relative group"),u(ah,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(cl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(cl,"rel","nofollow"),u(ih,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForMaskedLM"),u(Nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(sr,"id","transformers.BertForNextSentencePrediction"),u(sr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(sr,"href","#transformers.BertForNextSentencePrediction"),u(jn,"class","relative group"),u(lh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(_l,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(_l,"rel","nofollow"),u(dh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForNextSentencePrediction"),u(io,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ir,"id","transformers.BertForSequenceClassification"),u(ir,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ir,"href","#transformers.BertForSequenceClassification"),u(Cn,"class","relative group"),u(ch,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(wl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(wl,"rel","nofollow"),u(ph,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForSequenceClassification"),u(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(mr,"id","transformers.BertForMultipleChoice"),u(mr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(mr,"href","#transformers.BertForMultipleChoice"),u(On,"class","relative group"),u(hh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(zl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(zl,"rel","nofollow"),u(mh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForMultipleChoice"),u(lo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gr,"id","transformers.BertForTokenClassification"),u(gr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(gr,"href","#transformers.BertForTokenClassification"),u(In,"class","relative group"),u(fh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Nl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Nl,"rel","nofollow"),u(uh,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForTokenClassification"),u(Ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yr,"id","transformers.BertForQuestionAnswering"),u(yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(yr,"href","#transformers.BertForQuestionAnswering"),u(Dn,"class","relative group"),u(gh,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),u(Sl,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),u(Sl,"rel","nofollow"),u(_h,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertForQuestionAnswering"),u(At,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u($r,"id","transformers.TFBertModel"),u($r,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u($r,"href","#transformers.TFBertModel"),u(Wn,"class","relative group"),u(bh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ql,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ql,"rel","nofollow"),u(kh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertModel"),u(co,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Er,"id","transformers.TFBertForPreTraining"),u(Er,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Er,"href","#transformers.TFBertForPreTraining"),u(Kn,"class","relative group"),u(yh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Zl,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Zl,"rel","nofollow"),u(Th,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForPreTraining"),u(po,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(jr,"id","transformers.TFBertLMHeadModel"),u(jr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(jr,"href","#transformers.TFBertLMHeadModel"),u(Vn,"class","relative group"),u(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Jn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Cr,"id","transformers.TFBertForMaskedLM"),u(Cr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Cr,"href","#transformers.TFBertForMaskedLM"),u(Gn,"class","relative group"),u(vh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(hd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(hd,"rel","nofollow"),u(wh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForMaskedLM"),u(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Lr,"id","transformers.TFBertForNextSentencePrediction"),u(Lr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Lr,"href","#transformers.TFBertForNextSentencePrediction"),u(Yn,"class","relative group"),u($h,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(kd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(kd,"rel","nofollow"),u(xh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForNextSentencePrediction"),u(ho,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Wr,"id","transformers.TFBertForSequenceClassification"),u(Wr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Wr,"href","#transformers.TFBertForSequenceClassification"),u(es,"class","relative group"),u(Fh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(xd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(xd,"rel","nofollow"),u(Bh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForSequenceClassification"),u(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Vr,"id","transformers.TFBertForMultipleChoice"),u(Vr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Vr,"href","#transformers.TFBertForMultipleChoice"),u(os,"class","relative group"),u(Eh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Pd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Pd,"rel","nofollow"),u(zh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForMultipleChoice"),u(mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Yr,"id","transformers.TFBertForTokenClassification"),u(Yr,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Yr,"href","#transformers.TFBertForTokenClassification"),u(ss,"class","relative group"),u(Mh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Ad,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Ad,"rel","nofollow"),u(Ph,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForTokenClassification"),u(St,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(na,"id","transformers.TFBertForQuestionAnswering"),u(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(na,"href","#transformers.TFBertForQuestionAnswering"),u(as,"class","relative group"),u(jh,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),u(Wd,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),u(Wd,"rel","nofollow"),u(qh,"href","/docs/transformers/main/en/model_doc/bert#transformers.TFBertForQuestionAnswering"),u(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(la,"id","transformers.FlaxBertModel"),u(la,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(la,"href","#transformers.FlaxBertModel"),u(ds,"class","relative group"),u(Ch,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Jd,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Jd,"rel","nofollow"),u(Gd,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Gd,"rel","nofollow"),u(Xd,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Xd,"rel","nofollow"),u(Yd,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Yd,"rel","nofollow"),u(Zd,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Zd,"rel","nofollow"),u(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pa,"id","transformers.FlaxBertForPreTraining"),u(pa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(pa,"href","#transformers.FlaxBertForPreTraining"),u(ps,"class","relative group"),u(Nh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(rc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(rc,"rel","nofollow"),u(ac,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(ac,"rel","nofollow"),u(ic,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(ic,"rel","nofollow"),u(lc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(lc,"rel","nofollow"),u(dc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(dc,"rel","nofollow"),u(uo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(fa,"id","transformers.FlaxBertForCausalLM"),u(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(fa,"href","#transformers.FlaxBertForCausalLM"),u(fs,"class","relative group"),u(Oh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(uc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(uc,"rel","nofollow"),u(gc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(gc,"rel","nofollow"),u(_c,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(_c,"rel","nofollow"),u(bc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(bc,"rel","nofollow"),u(kc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(kc,"rel","nofollow"),u(go,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(_a,"id","transformers.FlaxBertForMaskedLM"),u(_a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(_a,"href","#transformers.FlaxBertForMaskedLM"),u(gs,"class","relative group"),u(Ah,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Fc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Fc,"rel","nofollow"),u(Bc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Bc,"rel","nofollow"),u(Ec,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Ec,"rel","nofollow"),u(zc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(zc,"rel","nofollow"),u(Mc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Mc,"rel","nofollow"),u(_o,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ya,"id","transformers.FlaxBertForNextSentencePrediction"),u(ya,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ya,"href","#transformers.FlaxBertForNextSentencePrediction"),u(bs,"class","relative group"),u(Ih,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Ac,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Ac,"rel","nofollow"),u(Ic,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Ic,"rel","nofollow"),u(Lc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Lc,"rel","nofollow"),u(Dc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Dc,"rel","nofollow"),u(Sc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Sc,"rel","nofollow"),u(bo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(wa,"id","transformers.FlaxBertForSequenceClassification"),u(wa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(wa,"href","#transformers.FlaxBertForSequenceClassification"),u(ys,"class","relative group"),u(Lh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(Qc,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(Qc,"rel","nofollow"),u(Vc,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(Vc,"rel","nofollow"),u(Jc,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(Jc,"rel","nofollow"),u(Gc,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Gc,"rel","nofollow"),u(Xc,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Xc,"rel","nofollow"),u(ko,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(Fa,"id","transformers.FlaxBertForMultipleChoice"),u(Fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(Fa,"href","#transformers.FlaxBertForMultipleChoice"),u(vs,"class","relative group"),u(Dh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(np,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(np,"rel","nofollow"),u(sp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(sp,"rel","nofollow"),u(rp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(rp,"rel","nofollow"),u(ap,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(ap,"rel","nofollow"),u(ip,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(ip,"rel","nofollow"),u(yo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(za,"id","transformers.FlaxBertForTokenClassification"),u(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(za,"href","#transformers.FlaxBertForTokenClassification"),u($s,"class","relative group"),u(Sh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(mp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(mp,"rel","nofollow"),u(fp,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u(fp,"rel","nofollow"),u(up,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(up,"rel","nofollow"),u(gp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(gp,"rel","nofollow"),u(_p,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(_p,"rel","nofollow"),u(To,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ja,"id","transformers.FlaxBertForQuestionAnswering"),u(ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),u(ja,"href","#transformers.FlaxBertForQuestionAnswering"),u(Fs,"class","relative group"),u(Uh,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),u(wp,"href","https://flax.readthedocs.io/en/latest/flax.linen.html#module"),u(wp,"rel","nofollow"),u($p,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),u($p,"rel","nofollow"),u(xp,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),u(xp,"rel","nofollow"),u(Fp,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),u(Fp,"rel","nofollow"),u(Bp,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),u(Bp,"rel","nofollow"),u(vo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),u(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,k){e(document.head,d),_(i,g,k),_(i,m,k),e(m,f),e(f,b),w(l,b,null),e(m,h),e(m,z),e(z,Fe),_(i,Te,k),_(i,S,k),e(S,pe),e(pe,ee),w(E,ee,null),e(S,Be),e(S,R),e(R,Ee),_(i,ve,k),_(i,U,k),e(U,ze),e(U,me),e(me,G),e(U,Me),_(i,we,k),_(i,H,k),e(H,Pe),_(i,$e,k),_(i,K,k),e(K,_e),e(_e,je),_(i,oe,k),_(i,j,k),e(j,q),e(q,qe),_(i,V,k),_(i,ge,k),e(ge,Ce),_(i,J,k),_(i,he,k),e(he,be),e(be,N),e(he,Ne),e(he,Q),e(Q,Oe),_(i,xe,k),_(i,D,k),e(D,Ae),e(D,fe),e(fe,L),e(D,Ie),e(D,W),e(W,Le),e(D,se),_(i,C,k),_(i,de,k),e(de,O),e(O,ke),w(ue,ke,null),e(de,y),e(de,M),e(M,Re),_(i,ne,k),_(i,ye,k),w(We,ye,null),e(ye,P),e(ye,De),e(De,Qe),e(De,Ke),e(Ke,Ve),e(De,Je),e(De,I),e(I,X),e(De,Ge),e(De,He),e(He,Y),e(De,Xe),e(ye,Ye),e(ye,ce),e(ce,Ze),e(ce,Z),e(Z,et),e(ce,HT),e(ce,Wp),e(Wp,KT),e(ce,RT),e(ye,QT),w(Cs,ye,null),_(i,Db,k),_(i,mn,k),e(mn,Ns),e(Ns,Pm),w(li,Pm,null),e(mn,VT),e(mn,jm),e(jm,JT),_(i,Sb,k),_(i,tt,k),w(di,tt,null),e(tt,GT),e(tt,qm),e(qm,XT),e(tt,YT),e(tt,ci),e(ci,ZT),e(ci,Hp),e(Hp,ev),e(ci,tv),e(tt,ov),e(tt,Ko),w(pi,Ko,null),e(Ko,nv),e(Ko,Cm),e(Cm,sv),e(Ko,rv),e(Ko,hi),e(hi,Kp),e(Kp,av),e(Kp,Nm),e(Nm,iv),e(hi,lv),e(hi,Rp),e(Rp,dv),e(Rp,Om),e(Om,cv),e(tt,pv),e(tt,Os),w(mi,Os,null),e(Os,hv),e(Os,fi),e(fi,mv),e(fi,Am),e(Am,fv),e(fi,uv),e(tt,gv),e(tt,oo),w(ui,oo,null),e(oo,_v),e(oo,Im),e(Im,bv),e(oo,kv),w(As,oo,null),e(oo,yv),e(oo,fn),e(fn,Tv),e(fn,Lm),e(Lm,vv),e(fn,wv),e(fn,Dm),e(Dm,$v),e(fn,xv),e(tt,Fv),e(tt,Qp),w(gi,Qp,null),_(i,Ub,k),_(i,un,k),e(un,Is),e(Is,Sm),w(_i,Sm,null),e(un,Bv),e(un,Um),e(Um,Ev),_(i,Wb,k),_(i,xt,k),w(bi,xt,null),e(xt,zv),e(xt,ki),e(ki,Mv),e(ki,Wm),e(Wm,Pv),e(ki,jv),e(xt,qv),e(xt,yi),e(yi,Cv),e(yi,Vp),e(Vp,Nv),e(yi,Ov),e(xt,Av),e(xt,Ro),w(Ti,Ro,null),e(Ro,Iv),e(Ro,Hm),e(Hm,Lv),e(Ro,Dv),e(Ro,vi),e(vi,Jp),e(Jp,Sv),e(Jp,Km),e(Km,Uv),e(vi,Wv),e(vi,Gp),e(Gp,Hv),e(Gp,Rm),e(Rm,Kv),e(xt,Rv),e(xt,no),w(wi,no,null),e(no,Qv),e(no,Qm),e(Qm,Vv),e(no,Jv),w(Ls,no,null),e(no,Gv),e(no,gn),e(gn,Xv),e(gn,Vm),e(Vm,Yv),e(gn,Zv),e(gn,Jm),e(Jm,ew),e(gn,tw),_(i,Hb,k),_(i,_n,k),e(_n,Ds),e(Ds,Gm),w($i,Gm,null),e(_n,ow),e(_n,Xm),e(Xm,nw),_(i,Kb,k),_(i,Ft,k),w(xi,Ft,null),e(Ft,sw),e(Ft,bn),e(bn,rw),e(bn,Ym),e(Ym,aw),e(bn,iw),e(bn,Zm),e(Zm,lw),e(bn,dw),e(Ft,cw),e(Ft,Fi),e(Fi,pw),e(Fi,ef),e(ef,hw),e(Fi,mw),e(Ft,fw),e(Ft,Qo),w(Bi,Qo,null),e(Qo,uw),e(Qo,Ei),e(Ei,gw),e(Ei,tf),e(tf,_w),e(Ei,bw),e(Qo,kw),w(Ss,Qo,null),e(Ft,yw),e(Ft,Vo),w(zi,Vo,null),e(Vo,Tw),e(Vo,kn),e(kn,vw),e(kn,of),e(of,ww),e(kn,$w),e(kn,nf),e(nf,xw),e(kn,Fw),e(Vo,Bw),w(Us,Vo,null),_(i,Rb,k),_(i,yn,k),e(yn,Ws),e(Ws,sf),w(Mi,sf,null),e(yn,Ew),e(yn,rf),e(rf,zw),_(i,Qb,k),_(i,Tn,k),w(Pi,Tn,null),e(Tn,Mw),e(Tn,ji),e(ji,Pw),e(ji,Xp),e(Xp,jw),e(ji,qw),_(i,Vb,k),_(i,vn,k),w(qi,vn,null),e(vn,Cw),e(vn,Ci),e(Ci,Nw),e(Ci,Yp),e(Yp,Ow),e(Ci,Aw),_(i,Jb,k),_(i,Po,k),w(Ni,Po,null),e(Po,Iw),e(Po,Oi),e(Oi,Lw),e(Oi,Zp),e(Zp,Dw),e(Oi,Sw),e(Po,Uw),e(Po,Hs),w(Ai,Hs,null),e(Hs,Ww),e(Hs,af),e(af,Hw),_(i,Gb,k),_(i,wn,k),e(wn,Ks),e(Ks,lf),w(Ii,lf,null),e(wn,Kw),e(wn,df),e(df,Rw),_(i,Xb,k),_(i,ot,k),w(Li,ot,null),e(ot,Qw),e(ot,cf),e(cf,Vw),e(ot,Jw),e(ot,Di),e(Di,Gw),e(Di,eh),e(eh,Xw),e(Di,Yw),e(ot,Zw),e(ot,Si),e(Si,e1),e(Si,Ui),e(Ui,t1),e(Si,o1),e(ot,n1),e(ot,Wi),e(Wi,s1),e(Wi,Hi),e(Hi,r1),e(Wi,a1),e(ot,i1),e(ot,ft),e(ft,l1),e(ft,pf),e(pf,d1),e(ft,c1),e(ft,hf),e(hf,p1),e(ft,h1),e(ft,mf),e(mf,m1),e(ft,f1),e(ft,ff),e(ff,u1),e(ft,g1),e(ft,uf),e(uf,_1),e(ft,b1),e(ft,gf),e(gf,k1),e(ft,y1),e(ot,T1),e(ot,so),w(Ki,so,null),e(so,v1),e(so,$n),e($n,w1),e($n,th),e(th,$1),e($n,x1),e($n,_f),e(_f,F1),e($n,B1),e(so,E1),w(Rs,so,null),e(so,z1),w(Qs,so,null),_(i,Yb,k),_(i,xn,k),e(xn,Vs),e(Vs,bf),w(Ri,bf,null),e(xn,M1),e(xn,kf),e(kf,P1),_(i,Zb,k),_(i,Bt,k),w(Qi,Bt,null),e(Bt,j1),e(Bt,Fn),e(Fn,q1),e(Fn,yf),e(yf,C1),e(Fn,N1),e(Fn,Tf),e(Tf,O1),e(Fn,A1),e(Bt,I1),e(Bt,Vi),e(Vi,L1),e(Vi,oh),e(oh,D1),e(Vi,S1),e(Bt,U1),e(Bt,Ji),e(Ji,W1),e(Ji,Gi),e(Gi,H1),e(Ji,K1),e(Bt,R1),e(Bt,ro),w(Xi,ro,null),e(ro,Q1),e(ro,Bn),e(Bn,V1),e(Bn,nh),e(nh,J1),e(Bn,G1),e(Bn,vf),e(vf,X1),e(Bn,Y1),e(ro,Z1),w(Js,ro,null),e(ro,e$),w(Gs,ro,null),_(i,ek,k),_(i,En,k),e(En,Xs),e(Xs,wf),w(Yi,wf,null),e(En,t$),e(En,$f),e($f,o$),_(i,tk,k),_(i,Et,k),w(Zi,Et,null),e(Et,n$),e(Et,el),e(el,s$),e(el,xf),e(xf,r$),e(el,a$),e(Et,i$),e(Et,tl),e(tl,l$),e(tl,sh),e(sh,d$),e(tl,c$),e(Et,p$),e(Et,ol),e(ol,h$),e(ol,nl),e(nl,m$),e(ol,f$),e(Et,u$),e(Et,ao),w(sl,ao,null),e(ao,g$),e(ao,zn),e(zn,_$),e(zn,rh),e(rh,b$),e(zn,k$),e(zn,Ff),e(Ff,y$),e(zn,T$),e(ao,v$),w(Ys,ao,null),e(ao,w$),w(Zs,ao,null),_(i,ok,k),_(i,Mn,k),e(Mn,er),e(er,Bf),w(rl,Bf,null),e(Mn,$$),e(Mn,Ef),e(Ef,x$),_(i,nk,k),_(i,zt,k),w(al,zt,null),e(zt,F$),e(zt,il),e(il,B$),e(il,zf),e(zf,E$),e(il,z$),e(zt,M$),e(zt,ll),e(ll,P$),e(ll,ah),e(ah,j$),e(ll,q$),e(zt,C$),e(zt,dl),e(dl,N$),e(dl,cl),e(cl,O$),e(dl,A$),e(zt,I$),e(zt,Nt),w(pl,Nt,null),e(Nt,L$),e(Nt,Pn),e(Pn,D$),e(Pn,ih),e(ih,S$),e(Pn,U$),e(Pn,Mf),e(Mf,W$),e(Pn,H$),e(Nt,K$),w(tr,Nt,null),e(Nt,R$),w(or,Nt,null),e(Nt,Q$),w(nr,Nt,null),_(i,sk,k),_(i,jn,k),e(jn,sr),e(sr,Pf),w(hl,Pf,null),e(jn,V$),e(jn,jf),e(jf,J$),_(i,rk,k),_(i,Mt,k),w(ml,Mt,null),e(Mt,G$),e(Mt,fl),e(fl,X$),e(fl,qf),e(qf,Y$),e(fl,Z$),e(Mt,e2),e(Mt,ul),e(ul,t2),e(ul,lh),e(lh,o2),e(ul,n2),e(Mt,s2),e(Mt,gl),e(gl,r2),e(gl,_l),e(_l,a2),e(gl,i2),e(Mt,l2),e(Mt,io),w(bl,io,null),e(io,d2),e(io,qn),e(qn,c2),e(qn,dh),e(dh,p2),e(qn,h2),e(qn,Cf),e(Cf,m2),e(qn,f2),e(io,u2),w(rr,io,null),e(io,g2),w(ar,io,null),_(i,ak,k),_(i,Cn,k),e(Cn,ir),e(ir,Nf),w(kl,Nf,null),e(Cn,_2),e(Cn,Of),e(Of,b2),_(i,ik,k),_(i,Pt,k),w(yl,Pt,null),e(Pt,k2),e(Pt,Af),e(Af,y2),e(Pt,T2),e(Pt,Tl),e(Tl,v2),e(Tl,ch),e(ch,w2),e(Tl,$2),e(Pt,x2),e(Pt,vl),e(vl,F2),e(vl,wl),e(wl,B2),e(vl,E2),e(Pt,z2),e(Pt,mt),w($l,mt,null),e(mt,M2),e(mt,Nn),e(Nn,P2),e(Nn,ph),e(ph,j2),e(Nn,q2),e(Nn,If),e(If,C2),e(Nn,N2),e(mt,O2),w(lr,mt,null),e(mt,A2),w(dr,mt,null),e(mt,I2),w(cr,mt,null),e(mt,L2),w(pr,mt,null),e(mt,D2),w(hr,mt,null),_(i,lk,k),_(i,On,k),e(On,mr),e(mr,Lf),w(xl,Lf,null),e(On,S2),e(On,Df),e(Df,U2),_(i,dk,k),_(i,jt,k),w(Fl,jt,null),e(jt,W2),e(jt,Sf),e(Sf,H2),e(jt,K2),e(jt,Bl),e(Bl,R2),e(Bl,hh),e(hh,Q2),e(Bl,V2),e(jt,J2),e(jt,El),e(El,G2),e(El,zl),e(zl,X2),e(El,Y2),e(jt,Z2),e(jt,lo),w(Ml,lo,null),e(lo,ex),e(lo,An),e(An,tx),e(An,mh),e(mh,ox),e(An,nx),e(An,Uf),e(Uf,sx),e(An,rx),e(lo,ax),w(fr,lo,null),e(lo,ix),w(ur,lo,null),_(i,ck,k),_(i,In,k),e(In,gr),e(gr,Wf),w(Pl,Wf,null),e(In,lx),e(In,Hf),e(Hf,dx),_(i,pk,k),_(i,qt,k),w(jl,qt,null),e(qt,cx),e(qt,Kf),e(Kf,px),e(qt,hx),e(qt,ql),e(ql,mx),e(ql,fh),e(fh,fx),e(ql,ux),e(qt,gx),e(qt,Cl),e(Cl,_x),e(Cl,Nl),e(Nl,bx),e(Cl,kx),e(qt,yx),e(qt,Ot),w(Ol,Ot,null),e(Ot,Tx),e(Ot,Ln),e(Ln,vx),e(Ln,uh),e(uh,wx),e(Ln,$x),e(Ln,Rf),e(Rf,xx),e(Ln,Fx),e(Ot,Bx),w(_r,Ot,null),e(Ot,Ex),w(br,Ot,null),e(Ot,zx),w(kr,Ot,null),_(i,hk,k),_(i,Dn,k),e(Dn,yr),e(yr,Qf),w(Al,Qf,null),e(Dn,Mx),e(Dn,Vf),e(Vf,Px),_(i,mk,k),_(i,Ct,k),w(Il,Ct,null),e(Ct,jx),e(Ct,Sn),e(Sn,qx),e(Sn,Jf),e(Jf,Cx),e(Sn,Nx),e(Sn,Gf),e(Gf,Ox),e(Sn,Ax),e(Ct,Ix),e(Ct,Ll),e(Ll,Lx),e(Ll,gh),e(gh,Dx),e(Ll,Sx),e(Ct,Ux),e(Ct,Dl),e(Dl,Wx),e(Dl,Sl),e(Sl,Hx),e(Dl,Kx),e(Ct,Rx),e(Ct,At),w(Ul,At,null),e(At,Qx),e(At,Un),e(Un,Vx),e(Un,_h),e(_h,Jx),e(Un,Gx),e(Un,Xf),e(Xf,Xx),e(Un,Yx),e(At,Zx),w(Tr,At,null),e(At,eF),w(vr,At,null),e(At,tF),w(wr,At,null),_(i,fk,k),_(i,Wn,k),e(Wn,$r),e($r,Yf),w(Wl,Yf,null),e(Wn,oF),e(Wn,Zf),e(Zf,nF),_(i,uk,k),_(i,ut,k),w(Hl,ut,null),e(ut,sF),e(ut,eu),e(eu,rF),e(ut,aF),e(ut,Kl),e(Kl,iF),e(Kl,bh),e(bh,lF),e(Kl,dF),e(ut,cF),e(ut,Rl),e(Rl,pF),e(Rl,Ql),e(Ql,hF),e(Rl,mF),e(ut,fF),w(xr,ut,null),e(ut,uF),e(ut,co),w(Vl,co,null),e(co,gF),e(co,Hn),e(Hn,_F),e(Hn,kh),e(kh,bF),e(Hn,kF),e(Hn,tu),e(tu,yF),e(Hn,TF),e(co,vF),w(Fr,co,null),e(co,wF),w(Br,co,null),_(i,gk,k),_(i,Kn,k),e(Kn,Er),e(Er,ou),w(Jl,ou,null),e(Kn,$F),e(Kn,nu),e(nu,xF),_(i,_k,k),_(i,gt,k),w(Gl,gt,null),e(gt,FF),e(gt,Rn),e(Rn,BF),e(Rn,su),e(su,EF),e(Rn,zF),e(Rn,ru),e(ru,MF),e(Rn,PF),e(gt,jF),e(gt,Xl),e(Xl,qF),e(Xl,yh),e(yh,CF),e(Xl,NF),e(gt,OF),e(gt,Yl),e(Yl,AF),e(Yl,Zl),e(Zl,IF),e(Yl,LF),e(gt,DF),w(zr,gt,null),e(gt,SF),e(gt,po),w(ed,po,null),e(po,UF),e(po,Qn),e(Qn,WF),e(Qn,Th),e(Th,HF),e(Qn,KF),e(Qn,au),e(au,RF),e(Qn,QF),e(po,VF),w(Mr,po,null),e(po,JF),w(Pr,po,null),_(i,bk,k),_(i,Vn,k),e(Vn,jr),e(jr,iu),w(td,iu,null),e(Vn,GF),e(Vn,lu),e(lu,XF),_(i,kk,k),_(i,Jn,k),w(od,Jn,null),e(Jn,YF),e(Jn,It),w(nd,It,null),e(It,ZF),e(It,nt),e(nt,e0),e(nt,du),e(du,t0),e(nt,o0),e(nt,cu),e(cu,n0),e(nt,s0),e(nt,pu),e(pu,r0),e(nt,a0),e(nt,hu),e(hu,i0),e(nt,l0),e(nt,mu),e(mu,d0),e(nt,c0),e(nt,fu),e(fu,p0),e(nt,h0),e(nt,uu),e(uu,m0),e(nt,f0),e(It,u0),e(It,sd),e(sd,rd),e(rd,g0),e(rd,gu),e(gu,_0),e(rd,b0),e(sd,k0),e(sd,ad),e(ad,y0),e(ad,_u),e(_u,T0),e(ad,v0),e(It,w0),e(It,te),e(te,$0),e(te,bu),e(bu,x0),e(te,F0),e(te,ku),e(ku,B0),e(te,E0),e(te,yu),e(yu,z0),e(te,M0),e(te,Tu),e(Tu,P0),e(te,j0),e(te,vu),e(vu,q0),e(te,C0),e(te,wu),e(wu,N0),e(te,O0),e(te,$u),e($u,A0),e(te,I0),e(te,xu),e(xu,L0),e(te,D0),e(te,Fu),e(Fu,S0),e(te,U0),e(te,Bu),e(Bu,W0),e(te,H0),e(te,Eu),e(Eu,K0),e(te,R0),e(te,zu),e(zu,Q0),e(te,V0),e(te,Mu),e(Mu,J0),e(te,G0),e(te,Pu),e(Pu,X0),e(te,Y0),e(te,ju),e(ju,Z0),e(te,eB),e(te,qu),e(qu,tB),e(te,oB),e(te,Cu),e(Cu,nB),e(te,sB),e(te,Nu),e(Nu,rB),e(te,aB),e(te,Ou),e(Ou,iB),e(te,lB),e(te,Au),e(Au,dB),e(te,cB),e(It,pB),w(qr,It,null),_(i,yk,k),_(i,Gn,k),e(Gn,Cr),e(Cr,Iu),w(id,Iu,null),e(Gn,hB),e(Gn,Lu),e(Lu,mB),_(i,Tk,k),_(i,_t,k),w(ld,_t,null),e(_t,fB),e(_t,dd),e(dd,uB),e(dd,Du),e(Du,gB),e(dd,_B),e(_t,bB),e(_t,cd),e(cd,kB),e(cd,vh),e(vh,yB),e(cd,TB),e(_t,vB),e(_t,pd),e(pd,wB),e(pd,hd),e(hd,$B),e(pd,xB),e(_t,FB),w(Nr,_t,null),e(_t,BB),e(_t,Lt),w(md,Lt,null),e(Lt,EB),e(Lt,Xn),e(Xn,zB),e(Xn,wh),e(wh,MB),e(Xn,PB),e(Xn,Su),e(Su,jB),e(Xn,qB),e(Lt,CB),w(Or,Lt,null),e(Lt,NB),w(Ar,Lt,null),e(Lt,OB),w(Ir,Lt,null),_(i,vk,k),_(i,Yn,k),e(Yn,Lr),e(Lr,Uu),w(fd,Uu,null),e(Yn,AB),e(Yn,Wu),e(Wu,IB),_(i,wk,k),_(i,bt,k),w(ud,bt,null),e(bt,LB),e(bt,gd),e(gd,DB),e(gd,Hu),e(Hu,SB),e(gd,UB),e(bt,WB),e(bt,_d),e(_d,HB),e(_d,$h),e($h,KB),e(_d,RB),e(bt,QB),e(bt,bd),e(bd,VB),e(bd,kd),e(kd,JB),e(bd,GB),e(bt,XB),w(Dr,bt,null),e(bt,YB),e(bt,ho),w(yd,ho,null),e(ho,ZB),e(ho,Zn),e(Zn,eE),e(Zn,xh),e(xh,tE),e(Zn,oE),e(Zn,Ku),e(Ku,nE),e(Zn,sE),e(ho,rE),w(Sr,ho,null),e(ho,aE),w(Ur,ho,null),_(i,$k,k),_(i,es,k),e(es,Wr),e(Wr,Ru),w(Td,Ru,null),e(es,iE),e(es,Qu),e(Qu,lE),_(i,xk,k),_(i,kt,k),w(vd,kt,null),e(kt,dE),e(kt,Vu),e(Vu,cE),e(kt,pE),e(kt,wd),e(wd,hE),e(wd,Fh),e(Fh,mE),e(wd,fE),e(kt,uE),e(kt,$d),e($d,gE),e($d,xd),e(xd,_E),e($d,bE),e(kt,kE),w(Hr,kt,null),e(kt,yE),e(kt,Dt),w(Fd,Dt,null),e(Dt,TE),e(Dt,ts),e(ts,vE),e(ts,Bh),e(Bh,wE),e(ts,$E),e(ts,Ju),e(Ju,xE),e(ts,FE),e(Dt,BE),w(Kr,Dt,null),e(Dt,EE),w(Rr,Dt,null),e(Dt,zE),w(Qr,Dt,null),_(i,Fk,k),_(i,os,k),e(os,Vr),e(Vr,Gu),w(Bd,Gu,null),e(os,ME),e(os,Xu),e(Xu,PE),_(i,Bk,k),_(i,yt,k),w(Ed,yt,null),e(yt,jE),e(yt,Yu),e(Yu,qE),e(yt,CE),e(yt,zd),e(zd,NE),e(zd,Eh),e(Eh,OE),e(zd,AE),e(yt,IE),e(yt,Md),e(Md,LE),e(Md,Pd),e(Pd,DE),e(Md,SE),e(yt,UE),w(Jr,yt,null),e(yt,WE),e(yt,mo),w(jd,mo,null),e(mo,HE),e(mo,ns),e(ns,KE),e(ns,zh),e(zh,RE),e(ns,QE),e(ns,Zu),e(Zu,VE),e(ns,JE),e(mo,GE),w(Gr,mo,null),e(mo,XE),w(Xr,mo,null),_(i,Ek,k),_(i,ss,k),e(ss,Yr),e(Yr,eg),w(qd,eg,null),e(ss,YE),e(ss,tg),e(tg,ZE),_(i,zk,k),_(i,Tt,k),w(Cd,Tt,null),e(Tt,ez),e(Tt,og),e(og,tz),e(Tt,oz),e(Tt,Nd),e(Nd,nz),e(Nd,Mh),e(Mh,sz),e(Nd,rz),e(Tt,az),e(Tt,Od),e(Od,iz),e(Od,Ad),e(Ad,lz),e(Od,dz),e(Tt,cz),w(Zr,Tt,null),e(Tt,pz),e(Tt,St),w(Id,St,null),e(St,hz),e(St,rs),e(rs,mz),e(rs,Ph),e(Ph,fz),e(rs,uz),e(rs,ng),e(ng,gz),e(rs,_z),e(St,bz),w(ea,St,null),e(St,kz),w(ta,St,null),e(St,yz),w(oa,St,null),_(i,Mk,k),_(i,as,k),e(as,na),e(na,sg),w(Ld,sg,null),e(as,Tz),e(as,rg),e(rg,vz),_(i,Pk,k),_(i,vt,k),w(Dd,vt,null),e(vt,wz),e(vt,is),e(is,$z),e(is,ag),e(ag,xz),e(is,Fz),e(is,ig),e(ig,Bz),e(is,Ez),e(vt,zz),e(vt,Sd),e(Sd,Mz),e(Sd,jh),e(jh,Pz),e(Sd,jz),e(vt,qz),e(vt,Ud),e(Ud,Cz),e(Ud,Wd),e(Wd,Nz),e(Ud,Oz),e(vt,Az),w(sa,vt,null),e(vt,Iz),e(vt,Ut),w(Hd,Ut,null),e(Ut,Lz),e(Ut,ls),e(ls,Dz),e(ls,qh),e(qh,Sz),e(ls,Uz),e(ls,lg),e(lg,Wz),e(ls,Hz),e(Ut,Kz),w(ra,Ut,null),e(Ut,Rz),w(aa,Ut,null),e(Ut,Qz),w(ia,Ut,null),_(i,jk,k),_(i,ds,k),e(ds,la),e(la,dg),w(Kd,dg,null),e(ds,Vz),e(ds,cg),e(cg,Jz),_(i,qk,k),_(i,st,k),w(Rd,st,null),e(st,Gz),e(st,pg),e(pg,Xz),e(st,Yz),e(st,Qd),e(Qd,Zz),e(Qd,Ch),e(Ch,eM),e(Qd,tM),e(st,oM),e(st,Vd),e(Vd,nM),e(Vd,Jd),e(Jd,sM),e(Vd,rM),e(st,aM),e(st,hg),e(hg,iM),e(st,lM),e(st,jo),e(jo,mg),e(mg,Gd),e(Gd,dM),e(jo,cM),e(jo,fg),e(fg,Xd),e(Xd,pM),e(jo,hM),e(jo,ug),e(ug,Yd),e(Yd,mM),e(jo,fM),e(jo,gg),e(gg,Zd),e(Zd,uM),e(st,gM),e(st,fo),w(ec,fo,null),e(fo,_M),e(fo,cs),e(cs,bM),e(cs,_g),e(_g,kM),e(cs,yM),e(cs,bg),e(bg,TM),e(cs,vM),e(fo,wM),w(da,fo,null),e(fo,$M),w(ca,fo,null),_(i,Ck,k),_(i,ps,k),e(ps,pa),e(pa,kg),w(tc,kg,null),e(ps,xM),e(ps,yg),e(yg,FM),_(i,Nk,k),_(i,rt,k),w(oc,rt,null),e(rt,BM),e(rt,hs),e(hs,EM),e(hs,Tg),e(Tg,zM),e(hs,MM),e(hs,vg),e(vg,PM),e(hs,jM),e(rt,qM),e(rt,nc),e(nc,CM),e(nc,Nh),e(Nh,NM),e(nc,OM),e(rt,AM),e(rt,sc),e(sc,IM),e(sc,rc),e(rc,LM),e(sc,DM),e(rt,SM),e(rt,wg),e(wg,UM),e(rt,WM),e(rt,qo),e(qo,$g),e($g,ac),e(ac,HM),e(qo,KM),e(qo,xg),e(xg,ic),e(ic,RM),e(qo,QM),e(qo,Fg),e(Fg,lc),e(lc,VM),e(qo,JM),e(qo,Bg),e(Bg,dc),e(dc,GM),e(rt,XM),e(rt,uo),w(cc,uo,null),e(uo,YM),e(uo,ms),e(ms,ZM),e(ms,Eg),e(Eg,e4),e(ms,t4),e(ms,zg),e(zg,o4),e(ms,n4),e(uo,s4),w(ha,uo,null),e(uo,r4),w(ma,uo,null),_(i,Ok,k),_(i,fs,k),e(fs,fa),e(fa,Mg),w(pc,Mg,null),e(fs,a4),e(fs,Pg),e(Pg,i4),_(i,Ak,k),_(i,at,k),w(hc,at,null),e(at,l4),e(at,jg),e(jg,d4),e(at,c4),e(at,mc),e(mc,p4),e(mc,Oh),e(Oh,h4),e(mc,m4),e(at,f4),e(at,fc),e(fc,u4),e(fc,uc),e(uc,g4),e(fc,_4),e(at,b4),e(at,qg),e(qg,k4),e(at,y4),e(at,Co),e(Co,Cg),e(Cg,gc),e(gc,T4),e(Co,v4),e(Co,Ng),e(Ng,_c),e(_c,w4),e(Co,$4),e(Co,Og),e(Og,bc),e(bc,x4),e(Co,F4),e(Co,Ag),e(Ag,kc),e(kc,B4),e(at,E4),e(at,go),w(yc,go,null),e(go,z4),e(go,us),e(us,M4),e(us,Ig),e(Ig,P4),e(us,j4),e(us,Lg),e(Lg,q4),e(us,C4),e(go,N4),w(ua,go,null),e(go,O4),w(ga,go,null),_(i,Ik,k),_(i,gs,k),e(gs,_a),e(_a,Dg),w(Tc,Dg,null),e(gs,A4),e(gs,Sg),e(Sg,I4),_(i,Lk,k),_(i,it,k),w(vc,it,null),e(it,L4),e(it,wc),e(wc,D4),e(wc,Ug),e(Ug,S4),e(wc,U4),e(it,W4),e(it,$c),e($c,H4),e($c,Ah),e(Ah,K4),e($c,R4),e(it,Q4),e(it,xc),e(xc,V4),e(xc,Fc),e(Fc,J4),e(xc,G4),e(it,X4),e(it,Wg),e(Wg,Y4),e(it,Z4),e(it,No),e(No,Hg),e(Hg,Bc),e(Bc,eP),e(No,tP),e(No,Kg),e(Kg,Ec),e(Ec,oP),e(No,nP),e(No,Rg),e(Rg,zc),e(zc,sP),e(No,rP),e(No,Qg),e(Qg,Mc),e(Mc,aP),e(it,iP),e(it,_o),w(Pc,_o,null),e(_o,lP),e(_o,_s),e(_s,dP),e(_s,Vg),e(Vg,cP),e(_s,pP),e(_s,Jg),e(Jg,hP),e(_s,mP),e(_o,fP),w(ba,_o,null),e(_o,uP),w(ka,_o,null),_(i,Dk,k),_(i,bs,k),e(bs,ya),e(ya,Gg),w(jc,Gg,null),e(bs,gP),e(bs,Xg),e(Xg,_P),_(i,Sk,k),_(i,lt,k),w(qc,lt,null),e(lt,bP),e(lt,Cc),e(Cc,kP),e(Cc,Yg),e(Yg,yP),e(Cc,TP),e(lt,vP),e(lt,Nc),e(Nc,wP),e(Nc,Ih),e(Ih,$P),e(Nc,xP),e(lt,FP),e(lt,Oc),e(Oc,BP),e(Oc,Ac),e(Ac,EP),e(Oc,zP),e(lt,MP),e(lt,Zg),e(Zg,PP),e(lt,jP),e(lt,Oo),e(Oo,e_),e(e_,Ic),e(Ic,qP),e(Oo,CP),e(Oo,t_),e(t_,Lc),e(Lc,NP),e(Oo,OP),e(Oo,o_),e(o_,Dc),e(Dc,AP),e(Oo,IP),e(Oo,n_),e(n_,Sc),e(Sc,LP),e(lt,DP),e(lt,bo),w(Uc,bo,null),e(bo,SP),e(bo,ks),e(ks,UP),e(ks,s_),e(s_,WP),e(ks,HP),e(ks,r_),e(r_,KP),e(ks,RP),e(bo,QP),w(Ta,bo,null),e(bo,VP),w(va,bo,null),_(i,Uk,k),_(i,ys,k),e(ys,wa),e(wa,a_),w(Wc,a_,null),e(ys,JP),e(ys,i_),e(i_,GP),_(i,Wk,k),_(i,dt,k),w(Hc,dt,null),e(dt,XP),e(dt,l_),e(l_,YP),e(dt,ZP),e(dt,Kc),e(Kc,ej),e(Kc,Lh),e(Lh,tj),e(Kc,oj),e(dt,nj),e(dt,Rc),e(Rc,sj),e(Rc,Qc),e(Qc,rj),e(Rc,aj),e(dt,ij),e(dt,d_),e(d_,lj),e(dt,dj),e(dt,Ao),e(Ao,c_),e(c_,Vc),e(Vc,cj),e(Ao,pj),e(Ao,p_),e(p_,Jc),e(Jc,hj),e(Ao,mj),e(Ao,h_),e(h_,Gc),e(Gc,fj),e(Ao,uj),e(Ao,m_),e(m_,Xc),e(Xc,gj),e(dt,_j),e(dt,ko),w(Yc,ko,null),e(ko,bj),e(ko,Ts),e(Ts,kj),e(Ts,f_),e(f_,yj),e(Ts,Tj),e(Ts,u_),e(u_,vj),e(Ts,wj),e(ko,$j),w($a,ko,null),e(ko,xj),w(xa,ko,null),_(i,Hk,k),_(i,vs,k),e(vs,Fa),e(Fa,g_),w(Zc,g_,null),e(vs,Fj),e(vs,__),e(__,Bj),_(i,Kk,k),_(i,ct,k),w(ep,ct,null),e(ct,Ej),e(ct,b_),e(b_,zj),e(ct,Mj),e(ct,tp),e(tp,Pj),e(tp,Dh),e(Dh,jj),e(tp,qj),e(ct,Cj),e(ct,op),e(op,Nj),e(op,np),e(np,Oj),e(op,Aj),e(ct,Ij),e(ct,k_),e(k_,Lj),e(ct,Dj),e(ct,Io),e(Io,y_),e(y_,sp),e(sp,Sj),e(Io,Uj),e(Io,T_),e(T_,rp),e(rp,Wj),e(Io,Hj),e(Io,v_),e(v_,ap),e(ap,Kj),e(Io,Rj),e(Io,w_),e(w_,ip),e(ip,Qj),e(ct,Vj),e(ct,yo),w(lp,yo,null),e(yo,Jj),e(yo,ws),e(ws,Gj),e(ws,$_),e($_,Xj),e(ws,Yj),e(ws,x_),e(x_,Zj),e(ws,eq),e(yo,tq),w(Ba,yo,null),e(yo,oq),w(Ea,yo,null),_(i,Rk,k),_(i,$s,k),e($s,za),e(za,F_),w(dp,F_,null),e($s,nq),e($s,B_),e(B_,sq),_(i,Qk,k),_(i,pt,k),w(cp,pt,null),e(pt,rq),e(pt,E_),e(E_,aq),e(pt,iq),e(pt,pp),e(pp,lq),e(pp,Sh),e(Sh,dq),e(pp,cq),e(pt,pq),e(pt,hp),e(hp,hq),e(hp,mp),e(mp,mq),e(hp,fq),e(pt,uq),e(pt,z_),e(z_,gq),e(pt,_q),e(pt,Lo),e(Lo,M_),e(M_,fp),e(fp,bq),e(Lo,kq),e(Lo,P_),e(P_,up),e(up,yq),e(Lo,Tq),e(Lo,j_),e(j_,gp),e(gp,vq),e(Lo,wq),e(Lo,q_),e(q_,_p),e(_p,$q),e(pt,xq),e(pt,To),w(bp,To,null),e(To,Fq),e(To,xs),e(xs,Bq),e(xs,C_),e(C_,Eq),e(xs,zq),e(xs,N_),e(N_,Mq),e(xs,Pq),e(To,jq),w(Ma,To,null),e(To,qq),w(Pa,To,null),_(i,Vk,k),_(i,Fs,k),e(Fs,ja),e(ja,O_),w(kp,O_,null),e(Fs,Cq),e(Fs,A_),e(A_,Nq),_(i,Jk,k),_(i,ht,k),w(yp,ht,null),e(ht,Oq),e(ht,Bs),e(Bs,Aq),e(Bs,I_),e(I_,Iq),e(Bs,Lq),e(Bs,L_),e(L_,Dq),e(Bs,Sq),e(ht,Uq),e(ht,Tp),e(Tp,Wq),e(Tp,Uh),e(Uh,Hq),e(Tp,Kq),e(ht,Rq),e(ht,vp),e(vp,Qq),e(vp,wp),e(wp,Vq),e(vp,Jq),e(ht,Gq),e(ht,D_),e(D_,Xq),e(ht,Yq),e(ht,Do),e(Do,S_),e(S_,$p),e($p,Zq),e(Do,e3),e(Do,U_),e(U_,xp),e(xp,t3),e(Do,o3),e(Do,W_),e(W_,Fp),e(Fp,n3),e(Do,s3),e(Do,H_),e(H_,Bp),e(Bp,r3),e(ht,a3),e(ht,vo),w(Ep,vo,null),e(vo,i3),e(vo,Es),e(Es,l3),e(Es,K_),e(K_,d3),e(Es,c3),e(Es,R_),e(R_,p3),e(Es,h3),e(vo,m3),w(qa,vo,null),e(vo,f3),w(Ca,vo,null),Gk=!0},p(i,[k]){const zp={};k&2&&(zp.$$scope={dirty:k,ctx:i}),Cs.$set(zp);const Q_={};k&2&&(Q_.$$scope={dirty:k,ctx:i}),As.$set(Q_);const V_={};k&2&&(V_.$$scope={dirty:k,ctx:i}),Ls.$set(V_);const J_={};k&2&&(J_.$$scope={dirty:k,ctx:i}),Ss.$set(J_);const Mp={};k&2&&(Mp.$$scope={dirty:k,ctx:i}),Us.$set(Mp);const G_={};k&2&&(G_.$$scope={dirty:k,ctx:i}),Rs.$set(G_);const X_={};k&2&&(X_.$$scope={dirty:k,ctx:i}),Qs.$set(X_);const Y_={};k&2&&(Y_.$$scope={dirty:k,ctx:i}),Js.$set(Y_);const Pp={};k&2&&(Pp.$$scope={dirty:k,ctx:i}),Gs.$set(Pp);const Z_={};k&2&&(Z_.$$scope={dirty:k,ctx:i}),Ys.$set(Z_);const eb={};k&2&&(eb.$$scope={dirty:k,ctx:i}),Zs.$set(eb);const tb={};k&2&&(tb.$$scope={dirty:k,ctx:i}),tr.$set(tb);const ob={};k&2&&(ob.$$scope={dirty:k,ctx:i}),or.$set(ob);const nb={};k&2&&(nb.$$scope={dirty:k,ctx:i}),nr.$set(nb);const sb={};k&2&&(sb.$$scope={dirty:k,ctx:i}),rr.$set(sb);const rb={};k&2&&(rb.$$scope={dirty:k,ctx:i}),ar.$set(rb);const jp={};k&2&&(jp.$$scope={dirty:k,ctx:i}),lr.$set(jp);const ab={};k&2&&(ab.$$scope={dirty:k,ctx:i}),dr.$set(ab);const ib={};k&2&&(ib.$$scope={dirty:k,ctx:i}),cr.$set(ib);const zs={};k&2&&(zs.$$scope={dirty:k,ctx:i}),pr.$set(zs);const lb={};k&2&&(lb.$$scope={dirty:k,ctx:i}),hr.$set(lb);const db={};k&2&&(db.$$scope={dirty:k,ctx:i}),fr.$set(db);const qp={};k&2&&(qp.$$scope={dirty:k,ctx:i}),ur.$set(qp);const cb={};k&2&&(cb.$$scope={dirty:k,ctx:i}),_r.$set(cb);const pb={};k&2&&(pb.$$scope={dirty:k,ctx:i}),br.$set(pb);const hb={};k&2&&(hb.$$scope={dirty:k,ctx:i}),kr.$set(hb);const So={};k&2&&(So.$$scope={dirty:k,ctx:i}),Tr.$set(So);const Uo={};k&2&&(Uo.$$scope={dirty:k,ctx:i}),vr.$set(Uo);const mb={};k&2&&(mb.$$scope={dirty:k,ctx:i}),wr.$set(mb);const fb={};k&2&&(fb.$$scope={dirty:k,ctx:i}),xr.$set(fb);const ub={};k&2&&(ub.$$scope={dirty:k,ctx:i}),Fr.$set(ub);const Ms={};k&2&&(Ms.$$scope={dirty:k,ctx:i}),Br.$set(Ms);const gb={};k&2&&(gb.$$scope={dirty:k,ctx:i}),zr.$set(gb);const _b={};k&2&&(_b.$$scope={dirty:k,ctx:i}),Mr.$set(_b);const Cp={};k&2&&(Cp.$$scope={dirty:k,ctx:i}),Pr.$set(Cp);const bb={};k&2&&(bb.$$scope={dirty:k,ctx:i}),qr.$set(bb);const kb={};k&2&&(kb.$$scope={dirty:k,ctx:i}),Nr.$set(kb);const yb={};k&2&&(yb.$$scope={dirty:k,ctx:i}),Or.$set(yb);const wt={};k&2&&(wt.$$scope={dirty:k,ctx:i}),Ar.$set(wt);const Tb={};k&2&&(Tb.$$scope={dirty:k,ctx:i}),Ir.$set(Tb);const Np={};k&2&&(Np.$$scope={dirty:k,ctx:i}),Dr.$set(Np);const vb={};k&2&&(vb.$$scope={dirty:k,ctx:i}),Sr.$set(vb);const Ps={};k&2&&(Ps.$$scope={dirty:k,ctx:i}),Ur.$set(Ps);const wb={};k&2&&(wb.$$scope={dirty:k,ctx:i}),Hr.$set(wb);const Op={};k&2&&(Op.$$scope={dirty:k,ctx:i}),Kr.$set(Op);const Wh={};k&2&&(Wh.$$scope={dirty:k,ctx:i}),Rr.$set(Wh);const $b={};k&2&&($b.$$scope={dirty:k,ctx:i}),Qr.$set($b);const Hh={};k&2&&(Hh.$$scope={dirty:k,ctx:i}),Jr.$set(Hh);const xb={};k&2&&(xb.$$scope={dirty:k,ctx:i}),Gr.$set(xb);const Ap={};k&2&&(Ap.$$scope={dirty:k,ctx:i}),Xr.$set(Ap);const Ip={};k&2&&(Ip.$$scope={dirty:k,ctx:i}),Zr.$set(Ip);const Fb={};k&2&&(Fb.$$scope={dirty:k,ctx:i}),ea.$set(Fb);const Wo={};k&2&&(Wo.$$scope={dirty:k,ctx:i}),ta.$set(Wo);const Bb={};k&2&&(Bb.$$scope={dirty:k,ctx:i}),oa.$set(Bb);const js={};k&2&&(js.$$scope={dirty:k,ctx:i}),sa.$set(js);const Eb={};k&2&&(Eb.$$scope={dirty:k,ctx:i}),ra.$set(Eb);const zb={};k&2&&(zb.$$scope={dirty:k,ctx:i}),aa.$set(zb);const Mb={};k&2&&(Mb.$$scope={dirty:k,ctx:i}),ia.$set(Mb);const Lp={};k&2&&(Lp.$$scope={dirty:k,ctx:i}),da.$set(Lp);const Pb={};k&2&&(Pb.$$scope={dirty:k,ctx:i}),ca.$set(Pb);const jb={};k&2&&(jb.$$scope={dirty:k,ctx:i}),ha.$set(jb);const qb={};k&2&&(qb.$$scope={dirty:k,ctx:i}),ma.$set(qb);const to={};k&2&&(to.$$scope={dirty:k,ctx:i}),ua.$set(to);const Dp={};k&2&&(Dp.$$scope={dirty:k,ctx:i}),ga.$set(Dp);const Cb={};k&2&&(Cb.$$scope={dirty:k,ctx:i}),ba.$set(Cb);const Sp={};k&2&&(Sp.$$scope={dirty:k,ctx:i}),ka.$set(Sp);const Nb={};k&2&&(Nb.$$scope={dirty:k,ctx:i}),Ta.$set(Nb);const qs={};k&2&&(qs.$$scope={dirty:k,ctx:i}),va.$set(qs);const Ob={};k&2&&(Ob.$$scope={dirty:k,ctx:i}),$a.$set(Ob);const Up={};k&2&&(Up.$$scope={dirty:k,ctx:i}),xa.$set(Up);const Kh={};k&2&&(Kh.$$scope={dirty:k,ctx:i}),Ba.$set(Kh);const Ab={};k&2&&(Ab.$$scope={dirty:k,ctx:i}),Ea.$set(Ab);const Rh={};k&2&&(Rh.$$scope={dirty:k,ctx:i}),Ma.$set(Rh);const Ib={};k&2&&(Ib.$$scope={dirty:k,ctx:i}),Pa.$set(Ib);const Ho={};k&2&&(Ho.$$scope={dirty:k,ctx:i}),qa.$set(Ho);const Lb={};k&2&&(Lb.$$scope={dirty:k,ctx:i}),Ca.$set(Lb)},i(i){Gk||($(l.$$.fragment,i),$(E.$$.fragment,i),$(ue.$$.fragment,i),$(We.$$.fragment,i),$(Cs.$$.fragment,i),$(li.$$.fragment,i),$(di.$$.fragment,i),$(pi.$$.fragment,i),$(mi.$$.fragment,i),$(ui.$$.fragment,i),$(As.$$.fragment,i),$(gi.$$.fragment,i),$(_i.$$.fragment,i),$(bi.$$.fragment,i),$(Ti.$$.fragment,i),$(wi.$$.fragment,i),$(Ls.$$.fragment,i),$($i.$$.fragment,i),$(xi.$$.fragment,i),$(Bi.$$.fragment,i),$(Ss.$$.fragment,i),$(zi.$$.fragment,i),$(Us.$$.fragment,i),$(Mi.$$.fragment,i),$(Pi.$$.fragment,i),$(qi.$$.fragment,i),$(Ni.$$.fragment,i),$(Ai.$$.fragment,i),$(Ii.$$.fragment,i),$(Li.$$.fragment,i),$(Ki.$$.fragment,i),$(Rs.$$.fragment,i),$(Qs.$$.fragment,i),$(Ri.$$.fragment,i),$(Qi.$$.fragment,i),$(Xi.$$.fragment,i),$(Js.$$.fragment,i),$(Gs.$$.fragment,i),$(Yi.$$.fragment,i),$(Zi.$$.fragment,i),$(sl.$$.fragment,i),$(Ys.$$.fragment,i),$(Zs.$$.fragment,i),$(rl.$$.fragment,i),$(al.$$.fragment,i),$(pl.$$.fragment,i),$(tr.$$.fragment,i),$(or.$$.fragment,i),$(nr.$$.fragment,i),$(hl.$$.fragment,i),$(ml.$$.fragment,i),$(bl.$$.fragment,i),$(rr.$$.fragment,i),$(ar.$$.fragment,i),$(kl.$$.fragment,i),$(yl.$$.fragment,i),$($l.$$.fragment,i),$(lr.$$.fragment,i),$(dr.$$.fragment,i),$(cr.$$.fragment,i),$(pr.$$.fragment,i),$(hr.$$.fragment,i),$(xl.$$.fragment,i),$(Fl.$$.fragment,i),$(Ml.$$.fragment,i),$(fr.$$.fragment,i),$(ur.$$.fragment,i),$(Pl.$$.fragment,i),$(jl.$$.fragment,i),$(Ol.$$.fragment,i),$(_r.$$.fragment,i),$(br.$$.fragment,i),$(kr.$$.fragment,i),$(Al.$$.fragment,i),$(Il.$$.fragment,i),$(Ul.$$.fragment,i),$(Tr.$$.fragment,i),$(vr.$$.fragment,i),$(wr.$$.fragment,i),$(Wl.$$.fragment,i),$(Hl.$$.fragment,i),$(xr.$$.fragment,i),$(Vl.$$.fragment,i),$(Fr.$$.fragment,i),$(Br.$$.fragment,i),$(Jl.$$.fragment,i),$(Gl.$$.fragment,i),$(zr.$$.fragment,i),$(ed.$$.fragment,i),$(Mr.$$.fragment,i),$(Pr.$$.fragment,i),$(td.$$.fragment,i),$(od.$$.fragment,i),$(nd.$$.fragment,i),$(qr.$$.fragment,i),$(id.$$.fragment,i),$(ld.$$.fragment,i),$(Nr.$$.fragment,i),$(md.$$.fragment,i),$(Or.$$.fragment,i),$(Ar.$$.fragment,i),$(Ir.$$.fragment,i),$(fd.$$.fragment,i),$(ud.$$.fragment,i),$(Dr.$$.fragment,i),$(yd.$$.fragment,i),$(Sr.$$.fragment,i),$(Ur.$$.fragment,i),$(Td.$$.fragment,i),$(vd.$$.fragment,i),$(Hr.$$.fragment,i),$(Fd.$$.fragment,i),$(Kr.$$.fragment,i),$(Rr.$$.fragment,i),$(Qr.$$.fragment,i),$(Bd.$$.fragment,i),$(Ed.$$.fragment,i),$(Jr.$$.fragment,i),$(jd.$$.fragment,i),$(Gr.$$.fragment,i),$(Xr.$$.fragment,i),$(qd.$$.fragment,i),$(Cd.$$.fragment,i),$(Zr.$$.fragment,i),$(Id.$$.fragment,i),$(ea.$$.fragment,i),$(ta.$$.fragment,i),$(oa.$$.fragment,i),$(Ld.$$.fragment,i),$(Dd.$$.fragment,i),$(sa.$$.fragment,i),$(Hd.$$.fragment,i),$(ra.$$.fragment,i),$(aa.$$.fragment,i),$(ia.$$.fragment,i),$(Kd.$$.fragment,i),$(Rd.$$.fragment,i),$(ec.$$.fragment,i),$(da.$$.fragment,i),$(ca.$$.fragment,i),$(tc.$$.fragment,i),$(oc.$$.fragment,i),$(cc.$$.fragment,i),$(ha.$$.fragment,i),$(ma.$$.fragment,i),$(pc.$$.fragment,i),$(hc.$$.fragment,i),$(yc.$$.fragment,i),$(ua.$$.fragment,i),$(ga.$$.fragment,i),$(Tc.$$.fragment,i),$(vc.$$.fragment,i),$(Pc.$$.fragment,i),$(ba.$$.fragment,i),$(ka.$$.fragment,i),$(jc.$$.fragment,i),$(qc.$$.fragment,i),$(Uc.$$.fragment,i),$(Ta.$$.fragment,i),$(va.$$.fragment,i),$(Wc.$$.fragment,i),$(Hc.$$.fragment,i),$(Yc.$$.fragment,i),$($a.$$.fragment,i),$(xa.$$.fragment,i),$(Zc.$$.fragment,i),$(ep.$$.fragment,i),$(lp.$$.fragment,i),$(Ba.$$.fragment,i),$(Ea.$$.fragment,i),$(dp.$$.fragment,i),$(cp.$$.fragment,i),$(bp.$$.fragment,i),$(Ma.$$.fragment,i),$(Pa.$$.fragment,i),$(kp.$$.fragment,i),$(yp.$$.fragment,i),$(Ep.$$.fragment,i),$(qa.$$.fragment,i),$(Ca.$$.fragment,i),Gk=!0)},o(i){x(l.$$.fragment,i),x(E.$$.fragment,i),x(ue.$$.fragment,i),x(We.$$.fragment,i),x(Cs.$$.fragment,i),x(li.$$.fragment,i),x(di.$$.fragment,i),x(pi.$$.fragment,i),x(mi.$$.fragment,i),x(ui.$$.fragment,i),x(As.$$.fragment,i),x(gi.$$.fragment,i),x(_i.$$.fragment,i),x(bi.$$.fragment,i),x(Ti.$$.fragment,i),x(wi.$$.fragment,i),x(Ls.$$.fragment,i),x($i.$$.fragment,i),x(xi.$$.fragment,i),x(Bi.$$.fragment,i),x(Ss.$$.fragment,i),x(zi.$$.fragment,i),x(Us.$$.fragment,i),x(Mi.$$.fragment,i),x(Pi.$$.fragment,i),x(qi.$$.fragment,i),x(Ni.$$.fragment,i),x(Ai.$$.fragment,i),x(Ii.$$.fragment,i),x(Li.$$.fragment,i),x(Ki.$$.fragment,i),x(Rs.$$.fragment,i),x(Qs.$$.fragment,i),x(Ri.$$.fragment,i),x(Qi.$$.fragment,i),x(Xi.$$.fragment,i),x(Js.$$.fragment,i),x(Gs.$$.fragment,i),x(Yi.$$.fragment,i),x(Zi.$$.fragment,i),x(sl.$$.fragment,i),x(Ys.$$.fragment,i),x(Zs.$$.fragment,i),x(rl.$$.fragment,i),x(al.$$.fragment,i),x(pl.$$.fragment,i),x(tr.$$.fragment,i),x(or.$$.fragment,i),x(nr.$$.fragment,i),x(hl.$$.fragment,i),x(ml.$$.fragment,i),x(bl.$$.fragment,i),x(rr.$$.fragment,i),x(ar.$$.fragment,i),x(kl.$$.fragment,i),x(yl.$$.fragment,i),x($l.$$.fragment,i),x(lr.$$.fragment,i),x(dr.$$.fragment,i),x(cr.$$.fragment,i),x(pr.$$.fragment,i),x(hr.$$.fragment,i),x(xl.$$.fragment,i),x(Fl.$$.fragment,i),x(Ml.$$.fragment,i),x(fr.$$.fragment,i),x(ur.$$.fragment,i),x(Pl.$$.fragment,i),x(jl.$$.fragment,i),x(Ol.$$.fragment,i),x(_r.$$.fragment,i),x(br.$$.fragment,i),x(kr.$$.fragment,i),x(Al.$$.fragment,i),x(Il.$$.fragment,i),x(Ul.$$.fragment,i),x(Tr.$$.fragment,i),x(vr.$$.fragment,i),x(wr.$$.fragment,i),x(Wl.$$.fragment,i),x(Hl.$$.fragment,i),x(xr.$$.fragment,i),x(Vl.$$.fragment,i),x(Fr.$$.fragment,i),x(Br.$$.fragment,i),x(Jl.$$.fragment,i),x(Gl.$$.fragment,i),x(zr.$$.fragment,i),x(ed.$$.fragment,i),x(Mr.$$.fragment,i),x(Pr.$$.fragment,i),x(td.$$.fragment,i),x(od.$$.fragment,i),x(nd.$$.fragment,i),x(qr.$$.fragment,i),x(id.$$.fragment,i),x(ld.$$.fragment,i),x(Nr.$$.fragment,i),x(md.$$.fragment,i),x(Or.$$.fragment,i),x(Ar.$$.fragment,i),x(Ir.$$.fragment,i),x(fd.$$.fragment,i),x(ud.$$.fragment,i),x(Dr.$$.fragment,i),x(yd.$$.fragment,i),x(Sr.$$.fragment,i),x(Ur.$$.fragment,i),x(Td.$$.fragment,i),x(vd.$$.fragment,i),x(Hr.$$.fragment,i),x(Fd.$$.fragment,i),x(Kr.$$.fragment,i),x(Rr.$$.fragment,i),x(Qr.$$.fragment,i),x(Bd.$$.fragment,i),x(Ed.$$.fragment,i),x(Jr.$$.fragment,i),x(jd.$$.fragment,i),x(Gr.$$.fragment,i),x(Xr.$$.fragment,i),x(qd.$$.fragment,i),x(Cd.$$.fragment,i),x(Zr.$$.fragment,i),x(Id.$$.fragment,i),x(ea.$$.fragment,i),x(ta.$$.fragment,i),x(oa.$$.fragment,i),x(Ld.$$.fragment,i),x(Dd.$$.fragment,i),x(sa.$$.fragment,i),x(Hd.$$.fragment,i),x(ra.$$.fragment,i),x(aa.$$.fragment,i),x(ia.$$.fragment,i),x(Kd.$$.fragment,i),x(Rd.$$.fragment,i),x(ec.$$.fragment,i),x(da.$$.fragment,i),x(ca.$$.fragment,i),x(tc.$$.fragment,i),x(oc.$$.fragment,i),x(cc.$$.fragment,i),x(ha.$$.fragment,i),x(ma.$$.fragment,i),x(pc.$$.fragment,i),x(hc.$$.fragment,i),x(yc.$$.fragment,i),x(ua.$$.fragment,i),x(ga.$$.fragment,i),x(Tc.$$.fragment,i),x(vc.$$.fragment,i),x(Pc.$$.fragment,i),x(ba.$$.fragment,i),x(ka.$$.fragment,i),x(jc.$$.fragment,i),x(qc.$$.fragment,i),x(Uc.$$.fragment,i),x(Ta.$$.fragment,i),x(va.$$.fragment,i),x(Wc.$$.fragment,i),x(Hc.$$.fragment,i),x(Yc.$$.fragment,i),x($a.$$.fragment,i),x(xa.$$.fragment,i),x(Zc.$$.fragment,i),x(ep.$$.fragment,i),x(lp.$$.fragment,i),x(Ba.$$.fragment,i),x(Ea.$$.fragment,i),x(dp.$$.fragment,i),x(cp.$$.fragment,i),x(bp.$$.fragment,i),x(Ma.$$.fragment,i),x(Pa.$$.fragment,i),x(kp.$$.fragment,i),x(yp.$$.fragment,i),x(Ep.$$.fragment,i),x(qa.$$.fragment,i),x(Ca.$$.fragment,i),Gk=!1},d(i){t(d),i&&t(g),i&&t(m),F(l),i&&t(Te),i&&t(S),F(E),i&&t(ve),i&&t(U),i&&t(we),i&&t(H),i&&t($e),i&&t(K),i&&t(oe),i&&t(j),i&&t(V),i&&t(ge),i&&t(J),i&&t(he),i&&t(xe),i&&t(D),i&&t(C),i&&t(de),F(ue),i&&t(ne),i&&t(ye),F(We),F(Cs),i&&t(Db),i&&t(mn),F(li),i&&t(Sb),i&&t(tt),F(di),F(pi),F(mi),F(ui),F(As),F(gi),i&&t(Ub),i&&t(un),F(_i),i&&t(Wb),i&&t(xt),F(bi),F(Ti),F(wi),F(Ls),i&&t(Hb),i&&t(_n),F($i),i&&t(Kb),i&&t(Ft),F(xi),F(Bi),F(Ss),F(zi),F(Us),i&&t(Rb),i&&t(yn),F(Mi),i&&t(Qb),i&&t(Tn),F(Pi),i&&t(Vb),i&&t(vn),F(qi),i&&t(Jb),i&&t(Po),F(Ni),F(Ai),i&&t(Gb),i&&t(wn),F(Ii),i&&t(Xb),i&&t(ot),F(Li),F(Ki),F(Rs),F(Qs),i&&t(Yb),i&&t(xn),F(Ri),i&&t(Zb),i&&t(Bt),F(Qi),F(Xi),F(Js),F(Gs),i&&t(ek),i&&t(En),F(Yi),i&&t(tk),i&&t(Et),F(Zi),F(sl),F(Ys),F(Zs),i&&t(ok),i&&t(Mn),F(rl),i&&t(nk),i&&t(zt),F(al),F(pl),F(tr),F(or),F(nr),i&&t(sk),i&&t(jn),F(hl),i&&t(rk),i&&t(Mt),F(ml),F(bl),F(rr),F(ar),i&&t(ak),i&&t(Cn),F(kl),i&&t(ik),i&&t(Pt),F(yl),F($l),F(lr),F(dr),F(cr),F(pr),F(hr),i&&t(lk),i&&t(On),F(xl),i&&t(dk),i&&t(jt),F(Fl),F(Ml),F(fr),F(ur),i&&t(ck),i&&t(In),F(Pl),i&&t(pk),i&&t(qt),F(jl),F(Ol),F(_r),F(br),F(kr),i&&t(hk),i&&t(Dn),F(Al),i&&t(mk),i&&t(Ct),F(Il),F(Ul),F(Tr),F(vr),F(wr),i&&t(fk),i&&t(Wn),F(Wl),i&&t(uk),i&&t(ut),F(Hl),F(xr),F(Vl),F(Fr),F(Br),i&&t(gk),i&&t(Kn),F(Jl),i&&t(_k),i&&t(gt),F(Gl),F(zr),F(ed),F(Mr),F(Pr),i&&t(bk),i&&t(Vn),F(td),i&&t(kk),i&&t(Jn),F(od),F(nd),F(qr),i&&t(yk),i&&t(Gn),F(id),i&&t(Tk),i&&t(_t),F(ld),F(Nr),F(md),F(Or),F(Ar),F(Ir),i&&t(vk),i&&t(Yn),F(fd),i&&t(wk),i&&t(bt),F(ud),F(Dr),F(yd),F(Sr),F(Ur),i&&t($k),i&&t(es),F(Td),i&&t(xk),i&&t(kt),F(vd),F(Hr),F(Fd),F(Kr),F(Rr),F(Qr),i&&t(Fk),i&&t(os),F(Bd),i&&t(Bk),i&&t(yt),F(Ed),F(Jr),F(jd),F(Gr),F(Xr),i&&t(Ek),i&&t(ss),F(qd),i&&t(zk),i&&t(Tt),F(Cd),F(Zr),F(Id),F(ea),F(ta),F(oa),i&&t(Mk),i&&t(as),F(Ld),i&&t(Pk),i&&t(vt),F(Dd),F(sa),F(Hd),F(ra),F(aa),F(ia),i&&t(jk),i&&t(ds),F(Kd),i&&t(qk),i&&t(st),F(Rd),F(ec),F(da),F(ca),i&&t(Ck),i&&t(ps),F(tc),i&&t(Nk),i&&t(rt),F(oc),F(cc),F(ha),F(ma),i&&t(Ok),i&&t(fs),F(pc),i&&t(Ak),i&&t(at),F(hc),F(yc),F(ua),F(ga),i&&t(Ik),i&&t(gs),F(Tc),i&&t(Lk),i&&t(it),F(vc),F(Pc),F(ba),F(ka),i&&t(Dk),i&&t(bs),F(jc),i&&t(Sk),i&&t(lt),F(qc),F(Uc),F(Ta),F(va),i&&t(Uk),i&&t(ys),F(Wc),i&&t(Wk),i&&t(dt),F(Hc),F(Yc),F($a),F(xa),i&&t(Hk),i&&t(vs),F(Zc),i&&t(Kk),i&&t(ct),F(ep),F(lp),F(Ba),F(Ea),i&&t(Rk),i&&t($s),F(dp),i&&t(Qk),i&&t(pt),F(cp),F(bp),F(Ma),F(Pa),i&&t(Vk),i&&t(Fs),F(kp),i&&t(Jk),i&&t(ht),F(yp),F(Ep),F(qa),F(Ca)}}}const _A={local:"bert",sections:[{local:"overview",title:"Overview"},{local:"transformers.BertConfig",title:"BertConfig"},{local:"transformers.BertTokenizer",title:"BertTokenizer"},{local:"transformers.BertTokenizerFast",title:"BertTokenizerFast"},{local:"transformers.TFBertTokenizer",title:"TFBertTokenizer"},{local:"transformers.models.bert.modeling_bert.BertForPreTrainingOutput",title:"Bert specific outputs"},{local:"transformers.BertModel",title:"BertModel"},{local:"transformers.BertForPreTraining",title:"BertForPreTraining"},{local:"transformers.BertLMHeadModel",title:"BertLMHeadModel"},{local:"transformers.BertForMaskedLM",title:"BertForMaskedLM"},{local:"transformers.BertForNextSentencePrediction",title:"BertForNextSentencePrediction"},{local:"transformers.BertForSequenceClassification",title:"BertForSequenceClassification"},{local:"transformers.BertForMultipleChoice",title:"BertForMultipleChoice"},{local:"transformers.BertForTokenClassification",title:"BertForTokenClassification"},{local:"transformers.BertForQuestionAnswering",title:"BertForQuestionAnswering"},{local:"transformers.TFBertModel",title:"TFBertModel"},{local:"transformers.TFBertForPreTraining",title:"TFBertForPreTraining"},{local:"transformers.TFBertLMHeadModel",title:"TFBertModelLMHeadModel"},{local:"transformers.TFBertForMaskedLM",title:"TFBertForMaskedLM"},{local:"transformers.TFBertForNextSentencePrediction",title:"TFBertForNextSentencePrediction"},{local:"transformers.TFBertForSequenceClassification",title:"TFBertForSequenceClassification"},{local:"transformers.TFBertForMultipleChoice",title:"TFBertForMultipleChoice"},{local:"transformers.TFBertForTokenClassification",title:"TFBertForTokenClassification"},{local:"transformers.TFBertForQuestionAnswering",title:"TFBertForQuestionAnswering"},{local:"transformers.FlaxBertModel",title:"FlaxBertModel"},{local:"transformers.FlaxBertForPreTraining",title:"FlaxBertForPreTraining"},{local:"transformers.FlaxBertForCausalLM",title:"FlaxBertForCausalLM"},{local:"transformers.FlaxBertForMaskedLM",title:"FlaxBertForMaskedLM"},{local:"transformers.FlaxBertForNextSentencePrediction",title:"FlaxBertForNextSentencePrediction"},{local:"transformers.FlaxBertForSequenceClassification",title:"FlaxBertForSequenceClassification"},{local:"transformers.FlaxBertForMultipleChoice",title:"FlaxBertForMultipleChoice"},{local:"transformers.FlaxBertForTokenClassification",title:"FlaxBertForTokenClassification"},{local:"transformers.FlaxBertForQuestionAnswering",title:"FlaxBertForQuestionAnswering"}],title:"BERT"};function bA(B){return Q7(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xA extends W7{constructor(d){super();H7(this,d,bA,gA,K7,{})}}export{xA as default,_A as metadata};
